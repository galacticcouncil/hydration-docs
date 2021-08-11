---
id: dev_pallet_exchange
title: Exchange
---

### Overview

The exchange pallet handles the HydraDX order matching implementation.

You can check out the following presentation to learn some fundamentals about the HydraDX exchange concept.

Presentation

[Video](https://www.youtube.com/watch?v=RnOJNjjuMJQ)

[Slides](https://docs.google.com/presentation/d/1mFWDOXrZ1Z5iZ_yGc-FyTu1FosDQeuEOi4VNkxutXZ4/edit#slide=id.gc8e33d26a6_0_50)

### Config 

The Exchange pallet config has the following types which are needed for the pallet to work:

```rust
#[pallet::config]
pub trait Config: frame_system::Config {
    type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;

    /// AMM pool implementation
    type AMMPool: AMM<Self::AccountId, AssetId, AssetPair, Balance>;

    /// Intention resolver
    type Resolver: Resolver<Self::AccountId, Intention<Self>, Error<Self>>;

    /// Currency for transfers
    type Currency: MultiCurrencyExtended<Self::AccountId, CurrencyId = AssetId, Balance = Balance, Amount = Amount>
        + MultiReservableCurrency<Self::AccountId>;

    /// Weight information for the extrinsics.
    type WeightInfo: WeightInfo;
}
```

AMMPool is an implementation of an AMM pool which is used to resolve a transaction or a partial transaction if it can't be directly traded with another transaction.

Resolver determines how an intention should be resolved. Its interface is:

```rust
pub trait Resolver<AccountId, Intention, E> {
	/// Resolve an intention via AMM pool.
	fn resolve_single_intention(intention: &Intention);

	/// Resolve intentions by either directly trading with each other or via AMM pool.
	/// Intention ```intention``` must be validated prior to call this function.
	fn resolve_matched_intentions(pair_account: &AccountId, intention: &Intention, matched: &[Intention]);
}
```
:::note
Resolver will be probably removed in the future from the config of the Exchange pallet.
:::

### Intention id

Intention id is an unique identifier of an intention (surprise!). It helps to track and determine how a transaction/intention has been resolved. On the frontend, this information is used to notify users about transactions.

IntentionID is currently generated as follows:

```rust
fn generate_intention_id(account: &T::AccountId, c: u32, assets: &AssetPair) -> IntentionId<T> {
    let b = <system::Pallet<T>>::current_block_number();
    (c, 
        &account, 
        b, 
        assets.ordered_pair().0, 
        assets.ordered_pair().1).using_encoded(T::Hashing::hash)
}
```

### Storage

The pallet has to keep track of all intentions for current block. Intention represents a sell or buy trade.

We use actual storage to store list of intentions for each asset pair:

```rust
pub type ExchangeAssetsIntentions<T: Config> = StorageMap<_, Blake2_128Concat, 
    (AssetId, AssetId), 
    Vec<Intention<T>>, 
    ValueQuery>;
```

A count for each asset pair is stored separately:

```rust
pub type ExchangeAssetsIntentionCount<T: Config> = StorageMap<_, Blake2_128Concat, 
    (AssetId, AssetId), 
    u32, 
    ValueQuery>;
```

However, this is never committed to the storage as it is cleared et end of the block in `on_finalize` by removing all stored information.

```rust
ExchangeAssetsIntentionCount::<T>::remove_all();
ExchangeAssetsIntentions::<T>::remove_all();
```

### Dispatchables

#### buy / sell

Buy and sell work basically as proxy for an AMM pool implementation - whichever is configured to be used with Exchange. 

Instead of resolving the sell or buy transaction immediately, it registers the intention of a user to trade.

As in the hdx and xyk pallets, the sell and buy are nearly the same:

```rust
#[pallet::weight(< T as Config >::WeightInfo::sell_intention() + < T as Config >::WeightInfo::on_finalize_for_one_sell_extrinsic() - < T as Config >::WeightInfo::known_overhead_for_on_finalize())]
pub fn sell(
    origin: OriginFor<T>,
    asset_sell: AssetId,
    asset_buy: AssetId,
    amount_sell: Balance,
    min_bought: Balance,
    discount: bool,
) -> DispatchResultWithPostInfo {}
```

```rust
#[pallet::weight(<T as Config>::WeightInfo::buy_intention() + <T as Config>::WeightInfo::on_finalize_for_one_buy_extrinsic() -  <T as Config>::WeightInfo::known_overhead_for_on_finalize())]
pub fn buy(
    origin: OriginFor<T>,
    asset_buy: AssetId,
    asset_sell: AssetId,
    amount_buy: Balance,
    max_sold: Balance,
    discount: bool,
) -> DispatchResultWithPostInfo {}
```

After the intention is registered, an event is emitted with the intention id:

```rust
IntentionRegistered(T::AccountId, AssetId, AssetId, Balance, IntentionType, IntentionId<T>)
```

The intention id helps to track resolution of the transaction.

### on_initialize

In Substrate, on finalize does not return weight due to the fact that it is done at the very end while the total block weight 
needs to be known in advance. 

In the Exchange pallet, all the magic happens in the on_finalize therefore we need to include the known overhead as well. 
on_initialize is called at the beginning, and it is possible to return some weight which should be taken into account. 

Exchange pallet takes this opportunity and returns known overhead for on finalize, as below:

```rust
fn on_initialize(_n: T::BlockNumber) -> Weight {
    T::WeightInfo::known_overhead_for_on_finalize()
}
```

### on_finalize and order matching algorithm

This is where the matching happens. When a block is finalized, we go through all the intentions for that block, try to match them and resolve them.

Intentions are grouped by the asset pairs involved in the transaction. For each asset pair, we retrieve the corresponding list of intentions. 

```rust
let asset_a_ins = <ExchangeAssetsIntentions<T>>::get((asset_2, asset_1));
let asset_b_ins = <ExchangeAssetsIntentions<T>>::get((asset_1, asset_2));
```

This means that all intentions in asset_a_ins are *SELL* asset A transactions or *BUY* asset A transactions.
All intentions in asset_b_ins are *SELL* asset B transactions or *BUY* asset B transactions.

The current algorithm takes asset_a_ins as a main group and for each transaction it tries to match as many transactions as possible from the asset_b_ins group.

:::note
This part could be improved to determine which group is better as main one (but this could have additional performance impact if not done right), subject to discussions.
:::

The sum of the amounts of all matched intentions must cover the selling amount of the main intention.

Let's have a look:

```rust
for intention in a_ins {
    if !Self::verify_intention(&intention) {
        continue;
    }

    let mut bvec = Vec::<Intention<T>>::new();
    let mut total = 0;

    while let Some(matched) = b_copy.pop() {
        bvec.push(matched.clone());
        total += matched.amount_in;

        if total >= intention.amount_in {
        break;
     }
    }

    T::Resolver::resolve_matched_intentions(pair_account, &intention, &bvec);
}
```

At this point we have one main intention, and some matched intentions (1 or more). We can resolve these and make trades happen
directly between the accounts.

This is a very complicated part as several possible scenarios can occur. Let's break them down. 

1. The matched intention can be traded directly and in full  
   This means that matched intention's amount is less than what's left in main intention's amount
2. The matched intention CANNOT be traded directly and in full  
   This usually happens when resolving last matched intentions and main intention's amount is not enough to cover the amount in matched intention.
3. Exact match  
   Amounts in both intentions are the same - the trade can directly take place.

Note that with respect to any of these 3 scenarios, the use-case must be differentiated: whether the intention is SELL or BUY, fee, rests etc.

Deep dive in the source code [here](https://github.com/galacticcouncil/HydraDX-node/blob/5a3889345ad592f15b5f73aa8479bf6ec6a9a34e/pallets/exchange/src/lib.rs#L547).

### Direct trade

Direct trade simply means that token amounts are exchanged directly between the accounts of each matched pair of transactions.

### Determining the resolution of an intention 

Transactions can be resolved in multiple different ways:
1. AMM trade - sell or buy transactions are resolved when trading through amm pool. This can happen when no matched transaction is found or there is some amount left to trade.
2. Direct trade - transaction is resolved by trading with another matched transaction.
3. Combination of 1 or 2 - transaction can be partially resolved by direct trade, and the rest can be exchanged via AMM pool.
4. Error - transaction can result in error due to various reasons (limits, not enough pool asset etc.)

For each of those cases, a specific event is emitted with the intention id involved. By using intention id from IntentionRegistered event, it is possible to track how any given transaction has been resolved.

### validate and execute

You may have already noticed that intentions (or transactions) are only executed once they have been validated. This prevents that a transaction goes through the whoe matching algorithm only to fail at the end.
