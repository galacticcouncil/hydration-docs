---
id: dev_pallet_asset_registry
title: Registre des actifs
slug: /registry
---

### Aperçu

Cette palette fournit la fonctionnalité pour créer, stocker et suivre les actifs existants sur la chaîne.

### Storage

*CoreAssetId*

Id de l'actif central du système.

```rust
#[pallet::storage]
#[pallet::getter(fn core_asset_id)]
pub type CoreAssetId<T: Config> = StorageValue<_, T::AssetId, ValueQuery>;
```

*NextAssetId* 

ID d'élément suivant à attribuer à un élément. Il est incrémenté à chaque fois qu'un nouvel actif est ajouté au registre.

```rust
#[pallet::storage]
#[pallet::getter(fn next_asset_id)]
pub type NextAssetId<T: Config> = StorageValue<_, T::AssetId, ValueQuery>;
```

*AssetIds*

Actifs actuellement présents dans le système. Il représente un mappage entre le nom de l'actif et son identifiant.

```rust
#[pallet::storage]
#[pallet::getter(fn asset_ids)]
pub type AssetIds<T: Config> = StorageMap<_, Twox64Concat, Vec<u8>, Option<T::AssetId>, ValueQuery>;
```

### Détails

Le registre d'actifs fournit une méthode qui obtient ou crée un actif.

```rust
pub fn get_or_create_asset(name: Vec<u8>) -> Result<T::AssetId, DispatchError> {}
```

Selon le nom donné, la palette vérifie si un actif avec le nom fourni existe déjà. Sinon, il génère le prochain identifiant d'actif et le stocke dans une map avec le nom.
