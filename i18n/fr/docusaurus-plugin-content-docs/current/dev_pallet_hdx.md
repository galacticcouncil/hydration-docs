---
id: dev_pallet_hdx
title: Palette HDX
---

### Aperçu

### Config

```rust
pub trait Config: frame_system::Config + pallet_asset_registry::Config {
    type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;

    /// Multi currency for transfer of currencies
    type Currency: MultiCurrencyExtended<Self::AccountId, CurrencyId = AssetId, Balance = Balance, Amount = Amount>;

    /// Weight information for the extrinsics.
    type WeightInfo: WeightInfo;

    /// Trading fee rate
    type GetExchangeFee: Get<fee::Fee>;
}
```

### Storage

Dans la mise en œuvre du pool XYK, une nouvelle pool est créée pour chaque paire d'actifs. En HDX, nous n'avons qu'une seule pool.

Par conséquent, le stockage nécessaire est peu différent :

*PoolAddress*
Compte de pool qui doit être mis durant l'état Genesis.

```rust
pub type PoolAddress<T: Config> = StorageValue<_, T::AccountId, ValueQuery>;
````

*Assets*
Assets in the pool.
```rust
pub type Assets<T: Config> = StorageMap<_, Blake2_128Concat, AssetId, (AssetId, Balance), OptionQuery>;
```

Celui-ci contient toutes les informations relatives à un actif de la pool. La valeur est un tuple (AssetId, Balance) où le premier élément est
un ID attribué par le registre d'actifs, et l'élément select est le poids actuel de l'actif dans la pool.

### Extrinsics

#### add_token

```rust
pub fn add_token(
    origin: OriginFor<T>,
    asset: AssetId,
    amount: Balance,
    initial_price: Price,
) -> DispatchResultWithPostInfo {}
```
Ajoute un nouveau jeton à la pool avec une liquidité initiale donnée par le montant et le prix initial.

#### add/remove liquidity

L'ajout et la suppression de liquidités sont faciles à comprendre.

```rust
pub fn add_liquidity(origin: OriginFor<T>, asset: AssetId, amount: Balance) -> DispatchResultWithPostInfo {}
pub fn remove_liquidity(origin: OriginFor<T>, asset: AssetId, amount: Balance) -> DispatchResultWithPostInfo {}
```

### sell / buy

Les extrinsèques vendre et acheter sont en fait les mêmes que ceux de la palette xyk.

```rust
 #[pallet::weight(<T as Config>::WeightInfo::sell())]
pub fn sell(
    origin: OriginFor<T>,
    asset_in: AssetId,
    asset_out: AssetId,
    amount: Balance,
    max_limit: Balance,
    discount: bool,
) -> DispatchResultWithPostInfo {
    let who = ensure_signed(origin)?;

    <Self as AMM<_, _, _, _>>::sell(&who, AssetPair { asset_in, asset_out }, amount, max_limit, discount)?;

    Ok(().into())
}
```

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
