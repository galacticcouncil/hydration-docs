---
id: dev_primitives
title: Primitives crate
---

## Overview

Purpose of this primitives crate is to have all common types used in Hydra or Basilisk in one place.


### Common Types

Among other types, the following are worth mentioning:

**AssetId**

Asset id type used in the system.

Current type: u32

**Balance**

Current type: u128

**Price**

Current type: U64F64

###  Asset

**AssetPair**

Asset pair representation for AMM trades. Structure holding ids of assets involved in a trade.

```rust
[cfg_attr(feature = "std", derive(Serialize, Deserialize))]
#[derive(Debug, Encode, Decode, Copy, Clone, PartialEq, Eq, Default)]
pub struct AssetPair {
    pub asset_in: AssetId,
    pub asset_out: AssetId,
}
```

Couple of useful methods are implemented for AssetPair as well:
```rust
pub fn ordered_pair(&self) -> (AssetId,AssetId){...}
pub fn name(&self) -> Vec<u8>{...}
```

ordered_pair returns tuple where first asset id < second asset id.

name construct a name for this asset pair. THis might be change slightly in future because it has currently hardcoded  'HDT' prefix.

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
This might be moved into the exchange pallet as it is only used within exchange algorithm.
:::

### Traits

AMM trait is an interface which a pool has to implement in order to be able to plug it into the exchange pallet.

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
