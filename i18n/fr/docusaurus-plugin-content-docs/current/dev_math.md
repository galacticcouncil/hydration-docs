---
id: dev_math
title: Crate Maths HydraDX 
---

## Aperçu

https://github.com/galacticcouncil/HydraDX-math

La crate mathématique HydraDX contient toutes les formules mathématiques pour les différentes implémentations des pools AMM.

L'objectif principal d'avoir cette fonctionnalité mathématique en tant que crate distincte est de permettre de la compiler facilement dans WebAssembly, ce qui nous permet d'utiliser la bibliothèque wasm directement sur le frontend.

De cette façon, nous pouvons calculer tout ce qui est nécessaire côté frontend de la même manière qu'il est calculé lorsqu'une transaction est soumise en utilisant les
mêmes mathématiques et sans avoir besoin de parler au nœud.

Un autre avantage qui découle de cette approche - elle est facilement testable.

### xyk

L'implémentation XYK peut être trouvée dans amm.rs. Elle se compose des méthodes suivantes :

```rust
pub fn calculate_spot_price(in_reserve: Balance, out_reserve: Balance, amount: Balance) -> Result<Balance, MathError> {}
pub fn calculate_out_given_in(in_reserve: Balance, out_reserve: Balance, amount_in: Balance) -> Result<Balance, MathError> {}
pub fn calculate_in_given_out(out_reserve: Balance, in_reserve: Balance, amount_out: Balance) -> Result<Balance, MathError> {}
pub fn calculate_liquidity_in(asset_a_reserve: Balance, asset_b_reserve: Balance, amount: Balance) -> Result<Balance, MathError> {}
pub fn calculate_liquidity_out(asset_a_reserve: Balance,
    asset_b_reserve: Balance,
    amount: Balance,
    total_liquidity: Balance,
) -> Result<(Balance, Balance), MathError> {}
```


### HDX

L'implémentation mathématique d'HydraDX Omnipool se trouve dans le module hdx.

Il a des méthodes similaires à xyk mais des paramètres différents sont nécessaires.

```rust
pub fn calculate_spot_price(
    in_reserve: Balance,
    out_reserve: Balance,
    in_weight: Balance,
    out_weight: Balance,
    amount: Balance,
) -> Result<Balance, MathError> {}

pub fn calculate_out_given_in(
    in_reserve: Balance,
    out_reserve: Balance,
    in_weight: Balance,
    out_weight: Balance,
    amount: Balance,
) -> Result<Balance, MathError> {}

pub fn calculate_in_given_out(
    in_reserve: Balance,
    out_reserve: Balance,
    in_weight: Balance,
    out_weight: Balance,
    amount: Balance,
) -> Result<Balance, MathError> {}

pub fn calculate_liquidity_in(
    asset_reserve: Balance,
    core_asset_reserve: Balance,
    asset_weight: Balance,
    core_asset_weight: Balance,
    amount: Balance,
) -> Result<Balance, MathError> {}

pub fn calculate_liquidity_out(
    asset_reserve: Balance,
    core_asset_reserve: Balance,
    asset_weight: Balance,
    core_asset_weight: Balance,
    amount: Balance,
) -> Result<(Balance, Balance), MathError> {}

```
