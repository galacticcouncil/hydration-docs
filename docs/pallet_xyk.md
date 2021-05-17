---
id: pallet_xyk
title: XYK pallet
slug: /xyk
---

### Overview

Uniswap AMM model implementation.

This pallet also implements the AMM trait which makes it possible to plug it into exchange pallet.

### Config

Config is pretty straightforward.

```rust
pub trait Config: frame_system::Config + pallet_asset_registry::Config {
        type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;
   
        /// Share token support
        type AssetPairAccountId: AssetPairAccountIdFor<AssetId, Self::AccountId>;

        /// Multi currency for transfer of currencies
        type Currency: MultiCurrencyExtended<Self::AccountId, CurrencyId = AssetId, Balance = Balance, Amount = Amount>;

        /// Native Asset Id
        type NativeAssetId: Get<AssetId>;    

        /// Weight information for the extrinsics.
        type WeightInfo: WeightInfo;

        /// Trading fee rate
        type GetExchangeFee: Get<fee::Fee>;
    }
```

### Storage

A pool is created for each asset pair. We keep information about existing pools in the following storage structures:

*ShareToken*

```rust
pub type ShareToken<T: Config> = StorageMap<_, Blake2_128Concat, 
    T::AccountId, 
    AssetId, 
    ValueQuery>;
```
Mapping between a pool account and asset id obtained from the registry.

*PoolAssets*

```rust
pub type PoolAssets<T: Config> = StorageMap<_, 
    Blake2_128Concat, 
    T::AccountId, 
    (AssetId, AssetId), 
    ValueQuery>;
```
Mapping between a pool account and tuple of assets in this pool. This is useful only when listing existing pools and their assets ( eg. for FE ).

### Extrinsics

This pallet has following extrinsics:

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

As name suggests, this creates a pool between asset A and asset B ( if such pool does not already exist) with initial liquidity determined bv amount and price. 
It generates a name for this asset pair and asks registry to return ID for this name ( either assigning new one or reusing previously assigned - if such pool existed)

It also constructs pool account for this pair and stores the mapping in storage under ShareToken as described above. 

You may ask "How do we know the account if we add liquidity for example" ? Constructing the pool account id is deterministic, so adding liquidity into the pool of 
asset A and B would generate the same account id. As you can see in the following implementation:

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

Add and remove liquidity are pretty straightforward and easy to understand by checking the implementation.

#### buy / sell

Probably the most interesting part of the pallet. Sell and buy are very similar however they differ in few minor details - what and how it is checked 
when resolving the transaction ( mostly multiple limits).

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

In case of sell, user specifies min_limit of asset out which should be exchange for amount of asset in.


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

Buy on the other hand - specify max_limit of asset_in to be exchange for amount of asset_out.

If you look at the actual implementation of these two functions - it is simply calls to AMM trait implementation for this pallet. 
This helps with avoiding code duplication and making this pallet easily usable in exchange. 