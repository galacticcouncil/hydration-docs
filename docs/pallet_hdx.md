---
id: pallet_hdx
title: HDX pallet
slug: /hdx
---

### Overview

### Config

Config is self-explanatory.

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

In XYK pool implementation - there is a new pool created for each asset pair. In HDX, we have only one pool.

Therefore, storage needed is little different:

*PoolAddress*
Pool account which must be set in genesis state.
```rust
pub type PoolAddress<T: Config> = StorageValue<_, T::AccountId, ValueQuery>;
````

*Assets*
Assets in the pool.
```rust
pub type Assets<T: Config> = StorageMap<_, Blake2_128Concat, AssetId, (AssetId, Balance), OptionQuery>;
```

This holds all the information for an asset in the pool. The value is a tuple (AssetId, Balance) where the first element is
ID assigned by asset registry, and the select element is current weight of the asset in the pool.

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
Add new token to the pool with initial liquidity given by amount and initial price.

#### add/remove liquidity

Add and remove liquidity are easy to understand.

```rust
pub fn add_liquidity(origin: OriginFor<T>, asset: AssetId, amount: Balance) -> DispatchResultWithPostInfo {}
pub fn remove_liquidity(origin: OriginFor<T>, asset: AssetId, amount: Balance) -> DispatchResultWithPostInfo {}
```

### sell / buy

Sell and buy extrinsics are actually the same as the ones in xyk pallet.

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
