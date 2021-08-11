---
id: dev_exercise
title: Practical exercise
---

Are you looking to put your Substrate knowledge to the test? Do you think you are ready to get hydrated? Then this small practical exercise might be what you are looking for. 

## Task description

Implement a simplified version of a trading pool which holds 2 stable assets and has no trading fees.

The trading pool should support the following functionality which should be implemented as extrinsics:

- create pool
- add liquidity
- remove liquidity
- sell
- buy

## Math

You can find the math-related functionality in the HydraDX-math crate under branch simpleswap:
https://github.com/galacticcouncil/HydraDX-math/tree/simpleswap

## Storage

Design a storage which keeps the pool information. The following information needs to be stored:

- amplification: u128
- assets: AssetId (assets in the pool)
- balances: u128 (balances of each asset in the pool)
- pool asset: AssetId (asset minted or burnt when liquidity is added to or removed from the pool)

Also consider which type of storage to use and what is the best way to access the pool.

## Extrinsics

Here are some further details on the required extrinsics.

### create pool

```rust
 pub fn create_pool(
    origin: origin,
    assets: (AssetId, AssetId),
    amplification: Balance) {}
```

In the first place, create_pool should check if a pool between the two pairs already exists. If this is not the case, it should create a new pool in the asset registry and store all the necessary information in the storage. You can check the XYK pallet for reference on how to work with the asset registry.

### add liquidity

```rust
ub fn add_liquidity(
    origin: OriginFor<T>,
    assets: (AssetId,AssetId),
    amounts: (Balance, Balance),
    min_mint_amount: Balance,
) -> DispatchResultWithPostInfo {}
```

This extrinsic should add liquidity to the pool, provided that the pool already exists and that the account has a sufficient balance of both assets that are added to the pool.

You can use `calculate_pool_value` from the math crate to calculate the amount which should be minted for the user.

```rust
let d0 = calculate_pool_value([initial amount a, initial amount b], ann);
let d1 = calculate_pool_value([new amount a, new amount b], ann);

let supply = total_issuance(pool_asset);

let mint_mount = if supply > 0 {
    supply * ( d1 - d0) / d0
}else
{
    d1
}
```

### remove_liquidity

TBD

### sell / buy

Sell and buy are two very similar extrinsics which change the amount of the assets in the pool - the supply of one asset increases while the supply of the other asset decreases.

```rust
pub fn sell(
    origin: OriginFor<T>,
    asset_sell: AssetId,
    asset_buy: AssetId,
    amount: Balance,
    min_bought: Balance,
) -> DispatchResultWithPostInfo {}
```

```rust
pub fn buy(
    origin: OriginFor<T>,
    asset_buy: AssetId,
    asset_sell: AssetId,
    amount: Balance,
    max_sold: Balance,
) -> DispatchResultWithPostInfo {}
```

Before the sell or buy is effectuated, the methods should perform the necessary validations in order to determine that the transaction can be  completed successfully. If this is the case, it should calculate the amounts in and out, perform the transfers and, finally - update the pool storage.

## Exchange support

As a bonus task, you can prepare your newly created pool to be plugged into the Exchange pallet. For that purpose, an AMM trait from the primitives crate should be implemented for this pallet.

You can look for inspiration on how this can be done in the XYK pallet.

## Questions

If you have any questions, please feel free to contact us on Discord.
