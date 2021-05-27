---
id: dev_pallet_asset_registry
title: Asset Registry
slug: /registry
---

### Overview

This pallet provides the functionality to create, store and keep track of the existing assets on the chain.

### Storage

*CoreAssetId*

Id of the core asset in the system.

```rust
#[pallet::storage]
#[pallet::getter(fn core_asset_id)]
pub type CoreAssetId<T: Config> = StorageValue<_, T::AssetId, ValueQuery>;
```

*NextAssetId* 

Next asset id to be assigned for an asset. It is incremented each time a new asset is added to the registry.

```rust
#[pallet::storage]
#[pallet::getter(fn next_asset_id)]
pub type NextAssetId<T: Config> = StorageValue<_, T::AssetId, ValueQuery>;
```

*AssetIds*

Assets currently present in the system. It represents a mapping between the name of the asset and its id.

```rust
#[pallet::storage]
#[pallet::getter(fn asset_ids)]
pub type AssetIds<T: Config> = StorageMap<_, Twox64Concat, Vec<u8>, Option<T::AssetId>, ValueQuery>;
```

### Details

Asset registry provides one method which gets or creates an asset. 

```rust
pub fn get_or_create_asset(name: Vec<u8>) -> Result<T::AssetId, DispatchError> {}
```

Given a name, the pallet checks whether an asset with the provided name already exists. If not, it generates next asset id and stores it in a map together with the name.
