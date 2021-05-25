---
id: pallet_payment
title: Transaction multi payment
---

### Overview

This pallet provides functionality to accepted transaction fees in other currencies.

Extends substrate's `transaction-payment` pallet.

Transaction fees are paid in native currency by default. This pallet allows to set a different currency to pay fees with for an account. 

When the transaction fees is being paid and chosen currency is not native currency - swap is executed to obtain fee amount in native currency first.

The swap (or buy) is done via selected AMM pool.

Subsequently, the fee is paid in native currency.

### Config
```rust
pub trait Config: frame_system::Config + pallet_transaction_payment::Config {
    /// Because this pallet emits events, it depends on the runtime's definition of an event.
    type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;

    /// The currency type in which fees will be paid.
    type Currency: Currency<Self::AccountId> + Send + Sync;

    /// Multi Currency
    type MultiCurrency: MultiCurrency<Self::AccountId>
        + MultiCurrencyExtended<Self::AccountId, CurrencyId = AssetId, Balance = Balance, Amount = Amount>;

    /// AMM pool to swap for native currency
    type AMMPool: AMM<Self::AccountId, AssetId, AssetPair, Balance>;

    /// Weight information for the extrinsics.
    type WeightInfo: WeightInfo;

    /// Should fee be paid for setting a currency
    type WithdrawFeeForSetCurrency: Get<Pays>;

    /// Convert a weight value into a deductible fee based on the currency type.
    type WeightToFee: WeightToFeePolynomial<Balance = Balance>;
}
```

Currency deals with native asset and MultiCurrency deals with all other currencies in the system.

AMMPool is again ( like with exchange pallet) implementation of AMM pool which will be used to swap non-native currency for native.

### Payment for setting a currency

Since we want to allow users to set currency even if they don't have any native currency. THerefore, the tx fee payment is set to *Pays::No*

```rust
#[pallet::weight((<T as Config>::WeightInfo::set_currency(), DispatchClass::Normal, Pays::No))]
#[transactional]
pub fn set_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}
````

However, the fee is withdrawn when currency is successfully set. It is fixed fee consisting of base fee  and set_currency weight.

```rust
pub fn withdraw_set_fee(who: &T::AccountId, currency: AssetId) -> DispatchResult {
    let base_fee = Self::weight_to_fee(T::BlockWeights::get().get(DispatchClass::Normal).base_extrinsic);
    let adjusted_weight_fee = Self::weight_to_fee(T::WeightInfo::set_currency());
    let fee = base_fee.saturating_add(adjusted_weight_fee);

    Self::swap_currency(who, fee)?;
    T::MultiCurrency::withdraw(currency, who, fee)?;

    Ok(())
}
```

### Storage

*AccountCurrencyMap*

A map between an account and chosen currency in which fees are paid.

```rust
#[pallet::storage]
#[pallet::getter(fn get_currency)]
pub type AccountCurrencyMap<T: Config> = StorageMap<_, Blake2_128Concat, T::AccountId, Option<AssetId>, ValueQuery>;
```

*AcceptedCurrencies*

Curated list of currencies which fees can be paid with. It is possible to select currency only if it is in this list.

Only selected members can add or remove currency from this list.

```rust
/// Curated list of currencies which fees can be paid with
#[pallet::storage]
#[pallet::getter(fn currencies)]
pub type AcceptedCurrencies<T: Config> = StorageValue<_, OrderedSet<AssetId>, ValueQuery>;
```

*Authorities*

List of account which are allowed to add or remove currency from the list of accepted currencies.

Only a root can add a member to this list.

```rust
#[pallet::storage]
#[pallet::getter(fn authorities)]
pub type Authorities<T: Config> = StorageValue<_, Vec<T::AccountId>, ValueQuery>;
```

### Extrinsics

There are few extrinsics in this pallet. All are self-explanatory and easy to understand just by look at the Implementation.

```rust
pub fn set_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}
pub fn add_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}
pub fn remove_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}
pub fn add_member(origin: OriginFor<T>, member: T::AccountId) -> DispatchResultWithPostInfo {}
pub fn remove_member(origin: OriginFor<T>, member: T::AccountId) -> DispatchResultWithPostInfo {}
```

### Fee payment

Where is the actual `hook` in the runtime where the fees are paid ? 

```rust
/// The SignedExtension to the basic transaction logic.
pub type SignedExtra = (
    frame_system::CheckSpecVersion<Runtime>,
    frame_system::CheckTxVersion<Runtime>,  
    frame_system::CheckGenesis<Runtime>,  
    frame_system::CheckEra<Runtime>,    
    frame_system::CheckNonce<Runtime>,
    frame_system::CheckWeight<Runtime>,
    pallet_transaction_payment::ChargeTransactionPayment<Runtime>,
    pallet_claims::ValidateClaim<Runtime>,
);
```

This is list of signed extensions which every transaction has to go through. And one of them is ChargeTransactionPayment.

The multi payment transaction pallet imeplemtns the `OnChargeTransaction` trait and handles the withdraw_fee accordingly.

```rust
fn withdraw_fee(
    who: &T::AccountId,
    _call: &T::Call,
    _info: &DispatchInfoOf<T::Call>,
    fee: Self::Balance,
    tip: Self::Balance,
) -> Result<Self::LiquidityInfo, TransactionValidityError> {
    if fee.is_zero() {
        return Ok(None);
    }

    let withdraw_reason = if tip.is_zero() {
        WithdrawReasons::TRANSACTION_PAYMENT
    } else {
        WithdrawReasons::TRANSACTION_PAYMENT | WithdrawReasons::TIP
    };

    if SW::swap_currency(&who, fee.into()).is_err() {
        return Err(InvalidTransaction::Payment.into());
    }

    match C::withdraw(who, fee, withdraw_reason, ExistenceRequirement::KeepAlive) {
        Ok(imbalance) => Ok(Some(imbalance)),
        Err(_) => Err(InvalidTransaction::Payment.into()),
    }
}
```

swap_currency ensures that there is enough balance of native currency to pay the fee by swapping chosen currency for native currency.






