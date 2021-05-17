---
id: pallet_asset_registry
title: Asset registry
slug: /registry
---

### Overview

In order to accept and work with various other currencies, we need to keep track of assets currently present in the system.

That's what this pallet is for.

#### Storage

*CoreAssetId*

Id of core asset in the system.

```rust
#[pallet::storage]
#[pallet::getter(fn core_asset_id)]
pub type CoreAssetId<T: Config> = StorageValue<_, T::AssetId, ValueQuery>;
```

*NextAssetId* 

Next asset id to be assigned for an asset. It is incremented each type new asset is added to the registry.

```rust
#[pallet::storage]
#[pallet::getter(fn next_asset_id)]
pub type NextAssetId<T: Config> = StorageValue<_, T::AssetId, ValueQuery>;
```

*AssetIds*

Assets currently present in the system. It is mapping between name of the asset ant its assigned id.

```rust
#[pallet::storage]
#[pallet::getter(fn asset_ids)]
pub type AssetIds<T: Config> = StorageMap<_, Twox64Concat, Vec<u8>, Option<T::AssetId>, ValueQuery>;
```

### Details

Registry provides one method to get or create an asset. 

```rust
pub fn get_or_create_asset(name: Vec<u8>) -> Result<T::AssetId, DispatchError> {}
```

Given a name, the pallet checks whether asset with such name already exists. If not , it generatese next asset id and stores it 
in a map together with the name.
