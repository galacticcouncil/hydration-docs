---
id: dev_primitives
title: Crate Primitives
---

## Aperçu

Le but de la crate de primitives est de mettre tous les types courants utilisés dans HydraDX ou Basilisk au même endroit.

## Types Communs

Entre autres, les éléments suivants méritent d'être mentionnés :

**AssetId**

Type d'ID d'actif utilisé dans le système.

Type actuel : u32

**Balance**

Type actuel: u128

**Price**

Type actuel: FixedU128

###  Asset

**AssetPair**

Représentation de la paire d'actifs pour les transactions AMM. Il s'agit d'une structure contenant les identifiants des actifs impliqués dans un échange.

```rust
[cfg_attr(feature = "std", derive(Serialize, Deserialize))]
#[derive(Debug, Encode, Decode, Copy, Clone, PartialEq, Eq, Default)]
pub struct AssetPair {
    pub asset_in: AssetId,
    pub asset_out: AssetId,
}
```

Quelques méthodes utiles implémentées pour AssetPair :

```rust
pub fn ordered_pair(&self) -> (AssetId,AssetId){...}
pub fn name(&self) -> Vec<u8>{...}
```

La fonction order_pair renvoie un tuple où le premier identifiant d'actif < deuxième identifiant d'actif.

La fonction name construit un nom pour la paire d'actifs. Cela pourrait changer légèrement à l'avenir car il a actuellement un préfixe « HDT » codé en dur.

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

La valeur par défaut est VENDRE

**ExchangeIntention**

Structure qui représente une intention d'échange.

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
ExchangeIntention peut être déplacé vers la palette exchange car il n'est utilisé que dans l'algorithme de l'exchange.
:::

### Traits

Un trait AMM est une interface qui doit être implémentée par une pool afin de pouvoir la brancher sur la palette exchange.

```rust
pub trait AMM<AccountId, AssetId, AssetPair, Amount> {
    /// Vérifie si les deux actifs existent dans une pool.
    fn exists(assets: AssetPair) -> bool;

    /// Retourne l'Id de la Paire
    fn get_pair_id(assets: AssetPair) -> AccountId;

    /// Retourne une liste des assets actifs dans une pool donnée
    fn get_pool_assets(pool_account_id: &AccountId) -> Option<Vec<AssetId>>;

    /// Calcule le prix spot des actifs a et b.
    fn get_spot_price_unchecked(asset_a: AssetId, asset_b: AssetId, amount: Amount) -> Amount;                                                                                                         
                                                                                                                                                                                                       
    /// Validation d'un trade de Vente.                                                                                                                                                                          
    /// Effectue toutes les vérifications nécessaires pour valider une vente envisagée.                                                                                                                                    
    fn validate_sell(                                                                                                                                                                                  
        origin: &AccountId,                                                                                                                                                                            
        assets: AssetPair,                                                                                                                                                                             
        amount: Amount,                                                                                                                                                                                
        min_bought: Amount,                                                                                                                                                                            
        discount: bool,                                                                                                                                                                                
    ) -> Result<AMMTransfer<AccountId, AssetPair, Amount>, frame_support::sp_runtime::DispatchError>;                                                                                                  
                                                                                                                                                                                                       
    /// Exécute une vente pour un transfert validé donné.                                                                                                                                                      
    fn execute_sell(transfer: &AMMTransfer<AccountId, AssetPair, Amount>) -> dispatch::DispatchResult;                                                                                                 
                                                                                                                                                                                                       
    /// Effectue un échange d'actifs.                                                                                                                                                                            
    /// Appel execute après la validation.                                                                                                                                                         
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
                                                                                                                                                                                                       
    /// Validation d'un trade d'achat.                                                                                                                                                                          
    /// Effectue toutes les vérifications nécessaires pour valider une vente envisagée.                                                                                                                                      
    fn validate_buy(                                                                                                                                                                                   
        origin: &AccountId,                                                                                                                                                                            
        assets: AssetPair,                                                                                                                                                                             
        amount: Amount,                                                                                                                                                                                
        max_limit: Amount,
        discount: bool,   
    ) -> Result<AMMTransfer<AccountId, AssetPair, Amount>, frame_support::sp_runtime::DispatchError>;
    
    /// Exécute un achat pour un transfert validé donné.
    fn execute_buy(transfer: &AMMTransfer<AccountId, AssetPair, Amount>) -> dispatch::DispatchResult;
    
    /// Exécute un échange d'actifs.
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
