---
id: dev_exercise
title: Practical exercise
---

simple practical exercise to implement stable-swap pool.

It is simplified implementation having only 2 assets in a pool and without fees.

## Description

It should be possible to do the following:

- create pool
- add liquidity
- remove liquidity
- sell
- buy

Bonus is to allow this pool to be plugged into the exchange by implement the AMM trait. 

## Math

Math is already implemented in the HydraDX-math crate. 
https://github.com/galacticcouncil/HydraDX-math

and use branch - simpleswap
https://github.com/galacticcouncil/HydraDX-math/tree/simpleswap

## Storage

Design a storage which keeps the pool information. The following information needs to be stored:

- amplification : u128
- assets : AssetId - assets in the pool
- balances : u128 - balances of each asset in the pool
- pool asset: AssetId - asset minted or burnt when liquidity is added to or remove from the pool

Also consider what type of storage to use and what is the best way to access the pool.

## Details

Further details for each required extrinsic.

### create pool

```rust
 pub fn create_pool(
    origin: origin,
    assets: (AssetId, AssetId),
    amplification: Balance) {}
```

create_pool shouldc heck if such pool does not exist. If it does not, it creates/registers new pool asset in the asset registry
( check XYK pallet how to work with asset registry) and stores all the necessary info in the storage

### add liquidity

```rust
ub fn add_liquidity(
    origin: OriginFor<T>,
    assets: (AssetId,AssetId),
    amounts: (Balance, Balance),
    min_mint_amount: Balance,
) -> DispatchResultWithPostInfo {}
```

add_liquidity should check for pool existence and also it has to check that account has sufficient balances of each asset added to the pool.

To calculate teh amount of which should be minted for user - you use `calculate_pool_value` from the math crate. 

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

`mint_amount` is the amount to be minted.

### remove_liquidity

TBD

### sell/buy

Sell just changes the amounts of each asset in the pool. One asset increases and second one decreases. 
All that needs to be done in sell ( or buy) is to calculate the amount in or out of the pool.

Both, sell and buys, are very similar, they just differ in checks to determine if a sell/buy can be successful completed.

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

To calculate out or in amount, use corresponding functions from the math crate. it should be clearly described

Both methods should perform necessary checks to determine that transaction can be successfully completed.If yes, 
it has to calculate the selling or buying amount, perform transfers and finally update the pool storage accordingly.

## Exchange support

To be able to plug this pool into the Exchange pallet, AMM trait from the primitives crate must be implemtned for this pallet.
Find some inspiration in XYK how this can be done.


## Questions

If you have any question, feel free to contact anyone on Discord.