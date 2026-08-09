---
id: dev_pallet_exchange
title: Exchange
---

### Aperçu

La palette exchange gère la mise en œuvre de la mise en correspondance des commandes HydraDX.

Vous pouvez consulter la présentation suivante pour apprendre quelques principes fondamentaux du concept d'échange HydraDX.

Présentation

[Video](https://www.youtube.com/watch?v=RnOJNjjuMJQ)

[Slides](https://docs.google.com/presentation/d/1mFWDOXrZ1Z5iZ_yGc-FyTu1FosDQeuEOi4VNkxutXZ4/edit#slide=id.gc8e33d26a6_0_50)

### Config 

La configuration de la palette Exchange a les types suivants qui sont nécessaires pour que la palette fonctionne :

```rust
#[pallet::config]
pub trait Config: frame_system::Config {
    type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;

    /// AMM pool implementation
    type AMMPool: AMM<Self::AccountId, AssetId, AssetPair, Balance>;

    /// Intention resolver
    type Resolver: Resolver<Self::AccountId, Intention<Self>, Error<Self>>;

    /// Currency for transfers
    type Currency: MultiCurrencyExtended<Self::AccountId, CurrencyId = AssetId, Balance = Balance, Amount = Amount>
        + MultiReservableCurrency<Self::AccountId>;

    /// Weight information for the extrinsics.
    type WeightInfo: WeightInfo;
}
```

AMMPool est une implémentation d'une pool AMM qui est utilisée pour résoudre une transaction ou une transaction partielle si elle ne peut pas être directement échangée avec une autre transaction.

Le résolveur détermine comment une intention doit être résolue. Son interface est :

```rust
pub trait Resolver<AccountId, Intention, E> {
	/// Resolve an intention via AMM pool.
	fn resolve_single_intention(intention: &Intention);

	/// Resolve intentions by either directly trading with each other or via AMM pool.
	/// Intention ```intention``` must be validated prior to call this function.
	fn resolve_matched_intentions(pair_account: &AccountId, intention: &Intention, matched: &[Intention]);
}
```
:::note
Resolver sera probablement supprimé à l'avenir de la config de la palette Exchange.
:::

### Intention id

L'identifiant d'intention est un identifiant unique d'une intention (surprise !). Il permet de suivre et de déterminer comment une transaction/intention a été résolue. Sur le frontend, ces informations sont utilisées pour informer les utilisateurs des transactions.

IntentionID est actuellement généré comme suit :

```rust
fn generate_intention_id(account: &T::AccountId, c: u32, assets: &AssetPair) -> IntentionId<T> {
    let b = <system::Pallet<T>>::current_block_number();
    (c, 
        &account, 
        b, 
        assets.ordered_pair().0, 
        assets.ordered_pair().1).using_encoded(T::Hashing::hash)
}
```

### Storage

La palette doit garder une trace de toutes les intentions pour le bloc actuel. L'intention représente une opération de vente ou d'achat.

Nous utilisons le stockage réel pour stocker la liste des intentions pour chaque paire d'actifs :

```rust
pub type ExchangeAssetsIntentions<T: Config> = StorageMap<_, Blake2_128Concat, 
    (AssetId, AssetId), 
    Vec<Intention<T>>, 
    ValueQuery>;
```

Un décompte pour chaque paire d'actifs est stocké séparément :

```rust
pub type ExchangeAssetsIntentionCount<T: Config> = StorageMap<_, Blake2_128Concat, 
    (AssetId, AssetId), 
    u32, 
    ValueQuery>;
```

Cependant, cela n'est jamais scellé dans le stockage car il est effacé à la fin du bloc dans `on_finalize` en supprimant toutes les informations stockées.

```rust
ExchangeAssetsIntentionCount::<T>::remove_all();
ExchangeAssetsIntentions::<T>::remove_all();
```

### Dispatchables

#### buy / sell

Buy et Sell fonctionnent essentiellement en tant que proxy pour une implémentation de pool AMM - selon la configuration pour être utilisée avec Exchange.

Au lieu de résoudre immédiatement la transaction de vente ou d'achat, il enregistre l'intention d'un utilisateur d'échanger.

Comme pour les palettes hdx et xyk, la vente et l'achat sont presque les mêmes :

```rust
#[pallet::weight(< T as Config >::WeightInfo::sell_intention() + < T as Config >::WeightInfo::on_finalize_for_one_sell_extrinsic() - < T as Config >::WeightInfo::known_overhead_for_on_finalize())]
pub fn sell(
    origin: OriginFor<T>,
    asset_sell: AssetId,
    asset_buy: AssetId,
    amount_sell: Balance,
    min_bought: Balance,
    discount: bool,
) -> DispatchResultWithPostInfo {}
```

```rust
#[pallet::weight(<T as Config>::WeightInfo::buy_intention() + <T as Config>::WeightInfo::on_finalize_for_one_buy_extrinsic() -  <T as Config>::WeightInfo::known_overhead_for_on_finalize())]
pub fn buy(
    origin: OriginFor<T>,
    asset_buy: AssetId,
    asset_sell: AssetId,
    amount_buy: Balance,
    max_sold: Balance,
    discount: bool,
) -> DispatchResultWithPostInfo {}
```

Une fois l'intention enregistrée, un événement est émis avec l'ID d'intention :

```rust
IntentionRegistered(T::AccountId, AssetId, AssetId, Balance, IntentionType, IntentionId<T>)
```

L'identifiant d'intention permet de suivre la résolution de la transaction.

### on_initialize

Dans substrate, on_finalize ne renvoie pas le poids du fait qu'il est fait à la toute fin alors que le poids total du bloc
doit être connu à l'avance.

Dans la palette Exchange, toute la magie se produit dans le on_finalize, nous devons donc également inclure les frais généraux connus.
on_initialize est appelé au début, et il est possible de retourner un poids qui doit être pris en compte.

La palette d'échange profite de cette opportunité et renvoie les frais généraux connus pour la finalisation, comme ci-dessous :

```rust
fn on_initialize(_n: T::BlockNumber) -> Weight {
    T::WeightInfo::known_overhead_for_on_finalize()
}
```

### on_finalize and order matching algorithm

C'est là que l'appariement se produit. Lorsqu'un bloc est finalisé, nous passons en revue toutes les intentions de ce bloc, essayons de les faire correspondre et de les résoudre.

Les intentions sont regroupées par paires d'actifs impliquées dans la transaction. Pour chaque couple d'actifs, on récupère la liste d'intentions correspondante.

```rust
let asset_a_ins = <ExchangeAssetsIntentions<T>>::get((asset_2, asset_1));
let asset_b_ins = <ExchangeAssetsIntentions<T>>::get((asset_1, asset_2));
```

Cela signifie que toutes les intentions dans asset_a_ins sont des transactions *VENDRE* de l'actif A ou des transactions *ACHAT* de l'actif A.
Toutes les intentions dans asset_b_ins sont des transactions *VENDRE* de l'actif B ou des transactions *ACHAT* de l'actif B.

L'algorithme actuel prend asset_a_ins comme groupe principal et pour chaque transaction, il essaie de faire correspondre autant de transactions que possible du groupe asset_b_ins.

:::note
Cette partie pourrait être améliorée pour déterminer quel groupe est le meilleur en tant que groupe principal (mais cela pourrait avoir un impact supplémentaire sur les performances s'il n'est pas fait correctement), sous réserve de discussions.
:::

La somme des montants de toutes les intentions appariées doit couvrir le montant de vente de l'intention principale.

Regardons:

```rust
for intention in a_ins {
    if !Self::verify_intention(&intention) {
        continue;
    }

    let mut bvec = Vec::<Intention<T>>::new();
    let mut total = 0;

    while let Some(matched) = b_copy.pop() {
        bvec.push(matched.clone());
        total += matched.amount_in;

        if total >= intention.amount_in {
        break;
     }
    }

    T::Resolver::resolve_matched_intentions(pair_account, &intention, &bvec);
}
```

À ce stade, nous avons une intention principale et quelques intentions correspondantes (1 ou plus). Nous pouvons les résoudre et faire en sorte que les échanges se produisent
directement entre les comptes.

C'est une partie très compliquée car plusieurs scénarios possibles peuvent se produire. Décomposons-les.

1. L'intention assortie peut être négociée directement et intégralement
    Cela signifie que le montant de l'intention correspondante est inférieur à ce qui reste dans le montant de l'intention principale
2. L'intention assortie NE PEUT PAS être négociée directement et dans son intégralité
    Cela se produit généralement lorsque la résolution des dernières intentions appariées et que le montant de l'intention principale n'est pas suffisant pour couvrir le montant de l'intention appariée.
3. Correspondance exacte
    Les montants dans les deux intentions sont les mêmes - l'échange peut avoir lieu directement.

Notez qu'en ce qui concerne l'un de ces 3 scénarios, le cas d'utilisation doit être différencié : si l'intention est de VENDRE ou d'ACHETER, de frais, de repos, etc.

Plongez dans le code source [ici](https://github.com/galacticcouncil/HydraDX-node/blob/5a3889345ad592f15b5f73aa8479bf6ec6a9a34e/pallets/exchange/src/lib.rs#L547).

### Echange Direct

L'échange direct signifie simplement que les montants symboliques sont échangés directement entre les comptes de chaque paire de transactions appariées.

### Déterminer la résolution d'une intention

Les transactions peuvent être résolues de plusieurs manières différentes :
1. Commerce AMM - les transactions de vente ou d'achat sont résolues lors de la négociation via le pool amm. Cela peut se produire lorsqu'aucune transaction correspondante n'est trouvée ou qu'il reste un certain montant à négocier.
2. Commerce direct - la transaction est résolue en échangeant avec une autre transaction correspondante.
3. Combinaison de 1 ou 2 - la transaction peut être partiellement résolue par le commerce direct, et le reste peut être échangé via le pool AMM.
4. Erreur - la transaction peut entraîner une erreur pour diverses raisons (limites, pas assez d'actifs de pool, etc.)

Pour chacun de ces cas, un événement spécifique est émis avec l'ID d'intention impliqué. En utilisant l'ID d'intention de l'événement IntentionRegistered, il est possible de suivre comment une transaction donnée a été résolue.

### Validation et Exécution

Vous avez peut-être déjà remarqué que les intentions (ou transactions) ne sont exécutées qu'une fois validées. Cela empêche qu'une transaction passe par l'algorithme de correspondance whoe pour échouer à la fin.
