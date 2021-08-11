---
id: dev_primitives
title: Primitives Crate
---

## Overview

The purpose of the primitives crate is to put all common types used in HydraDX or Basilisk at one place.

## Common Types

Among others, the following are worth mentioning:

**AssetId**

Asset id type used in the system.

Current type: u32

**Balance**

Current type: u128

**Price**

Current type: FixedU128

###  Asset

**AssetPair**

Asset pair representation for AMM trades. This is a structure holding the ids of the assets involved in a trade.

```rust
[cfg_attr(feature = "std", derive(Serialize, Deserialize))]
#[derive(Debug, Encode, Decode, Copy, Clone, PartialEq, Eq, Default)]
pub struct AssetPair {
    pub asset_in: AssetId,
    pub asset_out: AssetId,
}
```

A couple of useful methods implemented for AssetPair:

```rust
pub fn ordered_pair(&self) -> (AssetId,AssetId){...}
pub fn name(&self) -> Vec<u8>{...}
```

The ordered_pair function returns a tuple where first asset id < second asset id.

The name function constructs a name for the asset pair. This might change slightly in the future because it currently has a hardcoded 'HDT' prefix.

### Exchange

**IntentionType**

```rust
#[cfg_attr(feature = "std", derive(Serialize, Deserialize))]
#[derive(Debug, Encode, Decode, Clone, Copy, PartialEq, Eq)]
pub enum IntentionType {
    SELL,
    BUY,
}
```

Defaults to SELL

**ExchangeIntention**

Structure which represents an intention for trade.

```rust
#[cfg_attr(feature = "std", derive(Serialize, Deserialize))]
#[derive(Encode, Decode, Default, Clone, PartialEq)]
pub struct ExchangeIntention<AccountId, Balance, IntentionID> {
    pub who: AccountId,
    pub assets: asset::AssetPair,
    pub amount_in: Balance,
    pub amount_out: Balance,
    pub trade_limit: Balance,
    pub discount: bool,
    pub sell_or_buy: IntentionType,
    pub intention_id: IntentionID,
}
```

:::note
ExchangeIntention might be moved to the exchange pallet as it is only used in the exchange algorithm.
:::

### Traits

An AMM trait is an interface which needs to be implemented by a pool in order to be able to plug it into the exchange pallet.

```rust
pub trait AMM<AccountId, AssetId, AssetPair, Amount> {
    /// Check if both assets exist in a pool.
    fn exists(assets: AssetPair) -> bool;

    /// Return pair account.
    fn get_pair_id(assets: AssetPair) -> AccountId;

    /// Return list of active assets in a given pool.
    fn get_pool_assets(pool_account_id: &AccountId) -> Option<Vec<AssetId>>;

    /// Calculate spot price for asset a and b.
    fn get_spot_price_unchecked(asset_a: AssetId, asset_b: AssetId, amount: Amount) -> Amount;                                                                                                         
                                                                                                                                                                                                       
    /// Sell trade validation                                                                                                                                                                          
    /// Perform all necessary checks to validate an intended sale.                                                                                                                                     
    fn validate_sell(                                                                                                                                                                                  
        origin: &AccountId,                                                                                                                                                                            
        assets: AssetPair,                                                                                                                                                                             
        amount: Amount,                                                                                                                                                                                
        min_bought: Amount,                                                                                                                                                                            
        discount: bool,                                                                                                                                                                                
    ) -> Result<AMMTransfer<AccountId, AssetPair, Amount>, frame_support::sp_runtime::DispatchError>;                                                                                                  
                                                                                                                                                                                                       
    /// Execute buy for given validated transfer.                                                                                                                                                      
    fn execute_sell(transfer: &AMMTransfer<AccountId, AssetPair, Amount>) -> dispatch::DispatchResult;                                                                                                 
                                                                                                                                                                                                       
    /// Perform asset swap.                                                                                                                                                                            
    /// Call execute following the validation.                                                                                                                                                         
    fn sell(                                                                                                                                                                                           
        origin: &AccountId,                                                                                                                                                                            
        assets: AssetPair,                                                                                                                                                                             
        amount: Amount,                                                                                                                                                                                
        min_bought: Amount,                                                                                                                                                                            
        discount: bool,                                                                                                                                                                                
    ) -> dispatch::DispatchResult {                                                                                                                                                                    
        Self::execute_sell(&Self::validate_sell(origin, assets, amount, min_bought, discount)?)?;                                                                                                      
        Ok(())                                                                                                                                                                                         
    }                                                                                                                                                                                                  
                                                                                                                                                                                                       
    /// Buy trade validation                                                                                                                                                                           
    /// Perform all necessary checks to validate an intended buy.                                                                                                                                      
    fn validate_buy(                                                                                                                                                                                   
        origin: &AccountId,                                                                                                                                                                            
        assets: AssetPair,                                                                                                                                                                             
        amount: Amount,                                                                                                                                                                                
        max_limit: Amount,
        discount: bool,   
    ) -> Result<AMMTransfer<AccountId, AssetPair, Amount>, frame_support::sp_runtime::DispatchError>;
    
    /// Execute buy for given validated transfer.
    fn execute_buy(transfer: &AMMTransfer<AccountId, AssetPair, Amount>) -> dispatch::DispatchResult;
    
    /// Perform asset swap.
    fn buy(
        origin: &AccountId,
        assets: AssetPair, 
        amount: Amount,   
        max_limit: Amount,
        discount: bool,   
    ) -> dispatch::DispatchResult {
        Self::execute_buy(&Self::validate_buy(origin, assets, amount, max_limit, discount)?)?;
        Ok(())
    }
}    
```
