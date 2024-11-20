---
id: dev_pallet_payment
title: Transaction Multi-Paiement
---

### Aperçu

Cette palette permet d'accepter les frais de transaction dans d'autres devises.

Il étend la palette `transaction-paiement` de Substrate.

Les frais de transaction sont payés dans la devise native par défaut. Cette palette permet de définir une devise différente pour payer les frais.

Lorsque les frais de transaction sont payés et que la devise choisie n'est pas la devise native, un swap est exécuté pour obtenir d'abord le montant des frais dans la devise native.

L'échange (ou l'achat) se fait via la pool AMM sélectionnée.

Par la suite, les frais sont payés dans la devise locale.

### Config
```rust
pub trait Config: frame_system::Config + pallet_transaction_payment::Config {
    /// Étant donné que cette palette émet des événements, cela dépend de la définition d'un événement par le runtime.
    type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;

    /// Le type de monnaie qui serivira à payer les frais
    type Currency: Currency<Self::AccountId> + Send + Sync;

    /// Multi Currency
    type MultiCurrency: MultiCurrency<Self::AccountId>
        + MultiCurrencyExtended<Self::AccountId, CurrencyId = AssetId, Balance = Balance, Amount = Amount>;

    /// Pool AMM pour échanger contre une devise native 
    type AMMPool: AMM<Self::AccountId, AssetId, AssetPair, Balance>;

    /// Informations de poids pour les extrinsèques.
    type WeightInfo: WeightInfo;

    /// Faut-il payer des frais pour définir une devise
    type WithdrawFeeForSetCurrency: Get<Pays>;

    /// Convertissez une valeur de poids en frais déductibles en fonction du type de devise.
    type WeightToFee: WeightToFeePolynomial<Balance = Balance>;
}
```

Currency traite l'actif natif tandis que MultiCurrency traite toutes les autres devises du système.

AMMPool est à nouveau (comme avec la palette exchange) une implémentation de la pool AMM qui sera utilisée pour échanger des devises non natives contre des devises natives.

### Paiement pour définir une devise

Nous voulons permettre aux utilisateurs de définir une devise même s'ils n'ont pas de devise native. Par conséquent, le paiement des frais de tx est prédéfini sur *Pays::No*

```rust
#[pallet::weight((<T as Config>::WeightInfo::set_currency(), DispatchClass::Normal, Pays::No))]
#[transactional]
pub fn set_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}
```

Cependant, les frais sont prélevés lorsque la devise est définie avec succès. Il s'agit d'un tarif fixe composé d'un tarif de base et d'un poids set_currency.

```rust
pub fn withdraw_set_fee(who: &T::AccountId, currency: AssetId) -> DispatchResult {
    let base_fee = Self::weight_to_fee(T::BlockWeights::get().get(DispatchClass::Normal).base_extrinsic);
    let adjusted_weight_fee = Self::weight_to_fee(T::WeightInfo::set_currency());
    let fee = base_fee.saturating_add(adjusted_weight_fee);

    Self::swap_currency(who, fee)?;
    T::MultiCurrency::withdraw(currency, who, fee)?;

    Ok(())
}
```

### Storage

*AccountCurrencyMap*

Un mappage entre un compte et une devise choisie dans laquelle les frais sont payés.

```rust
#[pallet::storage]
#[pallet::getter(fn get_currency)]
pub type AccountCurrencyMap<T: Config> = StorageMap<_, Blake2_128Concat, T::AccountId, Option<AssetId>, ValueQuery>;
```

*AcceptedCurrencies*

Une liste organisée de devises qui peuvent être utilisées pour payer les frais. Il est possible de sélectionner une devise uniquement si elle figure dans cette liste.

Seuls les membres sélectionnés peuvent ajouter ou supprimer des devises de cette liste.

```rust
/// Liste organisée de devises qui peuvent être utilisées pour payer les frais
#[pallet::storage]
#[pallet::getter(fn currencies)]
pub type AcceptedCurrencies<T: Config> = StorageValue<_, OrderedSet<AssetId>, ValueQuery>;
```

*Authorities*

Liste des comptes autorisés à ajouter ou supprimer des devises de la liste des devises acceptées.

Seul un root peut ajouter un membre à cette liste.

```rust
#[pallet::storage]
#[pallet::getter(fn authorities)]
pub type Authorities<T: Config> = StorageValue<_, Vec<T::AccountId>, ValueQuery>;
```

### Extrinsics

Il y a peu d'extrinsèques dans cette palette. Tous sont explicites et faciles à comprendre simplement en regardant la mise en œuvre.

```rust
pub fn set_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}
pub fn add_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}
pub fn remove_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}
pub fn add_member(origin: OriginFor<T>, member: T::AccountId) -> DispatchResultWithPostInfo {}
pub fn remove_member(origin: OriginFor<T>, member: T::AccountId) -> DispatchResultWithPostInfo {}
```

### Fee payment

Où se trouve le véritable `d` dans l'environnement d'exécution où les frais sont payés ?

```rust
/// The SignedExtension to the basic transaction logic.
pub type SignedExtra = (
    frame_system::CheckSpecVersion<Runtime>,
    frame_system::CheckTxVersion<Runtime>,  
    frame_system::CheckGenesis<Runtime>,  
    frame_system::CheckEra<Runtime>,    
    frame_system::CheckNonce<Runtime>,
    frame_system::CheckWeight<Runtime>,
    pallet_transaction_payment::ChargeTransactionPayment<Runtime>,
    pallet_claims::ValidateClaim<Runtime>,
);
```

Il s'agit de la liste des extensions signées par lesquelles chaque transaction doit passer. Et l'un d'eux est ChargeTransactionPayment.

La palette de transactions multi-paiements implémente le trait `OnChargeTransaction` et gère les frais de retrait en conséquence.

```rust
fn withdraw_fee(
    who: &T::AccountId,
    _call: &T::Call,
    _info: &DispatchInfoOf<T::Call>,
    fee: Self::Balance,
    tip: Self::Balance,
) -> Result<Self::LiquidityInfo, TransactionValidityError> {
    if fee.is_zero() {
        return Ok(None);
    }

    let withdraw_reason = if tip.is_zero() {
        WithdrawReasons::TRANSACTION_PAYMENT
    } else {
        WithdrawReasons::TRANSACTION_PAYMENT | WithdrawReasons::TIP
    };

    if SW::swap_currency(&who, fee.into()).is_err() {
        return Err(InvalidTransaction::Payment.into());
    }

    match C::withdraw(who, fee, withdraw_reason, ExistenceRequirement::KeepAlive) {
        Ok(imbalance) => Ok(Some(imbalance)),
        Err(_) => Err(InvalidTransaction::Payment.into()),
    }
}
```

swap_currency garantit qu'il y a suffisamment de solde de la devise native pour payer les frais en échangeant la devise choisie contre la devise native.
