---
id: dev_pallet_xyk
title: Pallet XYK
slug: /xyk
---

### Aperçu

Implémentation du modèle AMM d'Uniswap.

Cette palette met également en œuvre le trait AMM qui permet de la brancher sur palette exchange.

### Config

La configuration est assez simple.

```rust
pub trait Config: frame_system::Config + pallet_asset_registry::Config {
    type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;

    /// Jetons pris en charge
    type AssetPairAccountId: AssetPairAccountIdFor<AssetId, Self::AccountId>;

    /// Multi devise pour le transfert de devises
    type Currency: MultiCurrencyExtended<Self::AccountId, CurrencyId = AssetId, Balance = Balance, Amount = Amount>;

    /// ID d'actif natif
    type NativeAssetId: Get<AssetId>;    

    /// Informations de poids pour les extrinsèques.
    type WeightInfo: WeightInfo;

    /// Taux des frais d'échange
    type GetExchangeFee: Get<fee::Fee>;
}
```

### Storage

Une pool est créée pour chaque paire d'actifs. Les informations sur les pools existantes sont conservées dans les structures de stockage suivantes :

*ShareToken*

```rust
pub type ShareToken<T: Config> = StorageMap<_, Blake2_128Concat, 
    T::AccountId, 
    AssetId, 
    ValueQuery>;
```
Mappage entre un compte de pool et un identifiant d'actif obtenu à partir du registre.

*PoolAssets*

```rust
pub type PoolAssets<T: Config> = StorageMap<_, 
    Blake2_128Concat, 
    T::AccountId, 
    (AssetId, AssetId), 
    ValueQuery>;
```
Mappage entre un compte de pool et un tuple d'actifs dans cette pool. Ceci est utile uniquement lors du listing des pools existantes et de leurs actifs (par exemple pour FE).

### Extrinsics

Cette palette possède les extrinsèques suivants :

#### create_pool

```rust
#[pallet::weight(<T as Config>::WeightInfo::create_pool())]
#[transactional]
pub fn create_pool(
    origin: OriginFor<T>,
    asset_a: AssetId,
    asset_b: AssetId,
    amount: Balance,
    initial_price: Price,
) -> DispatchResultWithPostInfo {}
```

Comme son nom l'indique, cela crée une pool entre l'actif A et l'actif B (si cette pool n'existe pas déjà) avec une liquidité initiale déterminée par le montant et le prix initial.
Il génère un nom pour cette paire d'actifs et demande au registre de renvoyer un identifiant pour le nom (soit en en attribuant un nouveau, soit en réutilisant un nom précédemment attribué, si une telle pool existait).

Il construit également un compte de pool pour cette paire et stocke le mappage dans le stockage sous ShareToken comme décrit ci-dessus.

Vous pouvez demander « Comment connaissons-nous le compte si nous ajoutons des liquidités par exemple » ? La construction de l'identifiant du compte de pool est déterministe, donc l'ajout de liquidités dans le pool des actifs A et B générerait le même identifiant de compte. Ceci est démontré dans l'exemple suivant :

```rust
fn from_assets(asset_a: AssetId, asset_b: AssetId) -> T::AccountId {
    let mut buf = Vec::new();
    buf.extend_from_slice(b"hydradx");
    if asset_a < asset_b {
        buf.extend_from_slice(&asset_a.to_le_bytes());
        buf.extend_from_slice(&asset_b.to_le_bytes());
    } else {
        buf.extend_from_slice(&asset_b.to_le_bytes());
        buf.extend_from_slice(&asset_a.to_le_bytes());
    }
    T::AccountId::unchecked_from(T::Hashing::hash(&buf[..]))
}
```


#### add_liquidity
#### remove_liquidity

L'ajout et la suppression de liquidité sont assez simples et faciles à comprendre en vérifiant la mise en œuvre.

#### buy / sell

Probablement la partie la plus intéressante de la palette. Vendre et acheter sont très similaires, mais ils diffèrent par quelques détails mineurs - ce qui est vérifié et comment
lors de la résolution de la transaction (principalement plusieurs limites).

Sell:
```rust
#[pallet::weight(<T as Config>::WeightInfo::sell())]
pub fn sell(
    origin: OriginFor<T>,
    asset_in: AssetId,
    asset_out: AssetId,
    amount: Balance,
    min_limit: Balance,
    discount: bool,
) -> DispatchResultWithPostInfo {
    let who = ensure_signed(origin)?;

    <Self as AMM<_, _, _, _>>::sell(&who, AssetPair { asset_in, asset_out }, amount, min_limit, discount)?;

    Ok(().into())
}
```

En cas de vente, l'utilisateur spécifie min_limit d'un asset_out qui doit être échangé contre un certain montant d'asset_in.


buy:
```rust
#[pallet::weight(<T as Config>::WeightInfo::buy())]
pub fn buy(
    origin: OriginFor<T>,
    asset_out: AssetId,
    asset_in: AssetId,
    amount: Balance,
    max_limit: Balance,
    discount: bool,
) -> DispatchResultWithPostInfo {
    let who = ensure_signed(origin)?;

    <Self as AMM<_, _, _, _>>::buy(&who, AssetPair { asset_in, asset_out }, amount, max_limit, discount)?;

    Ok(().into())
}
```

En cas d'achat, l'utilisateur spécifie max_limit d'un asset_in à échanger contre un certain montant d'asset_out.

Si vous regardez la mise en œuvre des fonctions d'achat/vente, vous verrez qu'elles appellent sous le capot la mise en œuvre du trait AMM pour cette palette. Cela permet d'éviter la duplication de code et de rendre cette palette facilement utilisable dans un échange.
