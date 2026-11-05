---
title: Juicer
description: Learn how Juicer earns yield in your deposited asset, including fees, withdrawals, and risks
---

Juicer is an automated yield strategy that supplies your collateral to Hydration's [lending market](/products/borrowing/overview), borrows HOLLAR against it, and puts that HOLLAR to work in a shared leveraged PRIME strategy. Eligible earnings are converted back into the asset you deposited and compounded into your position.

## How Juicer works

Each collateral asset has its own vault, with vaults for ETH and tBTC. A deposit receives vault shares representing a funded position in that vault. Depositing supplies collateral to the lending market; it does not immediately borrow HOLLAR or execute a swap. Keepers deploy available capacity gradually, subject to borrowing and execution limits.

The shared strategy uses borrowed HOLLAR to build leveraged PRIME exposure. When eligible PRIME yield is harvested, it is converted into each vault's collateral asset. The proceeds pay the protocol fee, then service the vault's HOLLAR borrowing interest. Any remainder is compounded for holders. Some earned PRIME is retained to cover future execution costs.

Funded earnings are included in your vault balance and continue compounding automatically. You do not need to claim them separately. Estimated earnings that have not yet been converted and funded are separate from that balance and remain exposed to strategy losses and execution costs.

Yield varies with PRIME returns, HOLLAR borrowing rates, leverage, fees, and execution costs. There is no fixed or minimum APY, and net yield can be negative.

## Depositing

Use the supported vault for the asset you want to deposit. Review its current fee, withdrawal delay, capacity, and restrictions before approving and submitting a deposit. Each vault accepts its configured collateral asset.

Deposits can be rejected when the vault has reached its cap, deposits are paused, strategy backing is below the permitted admission threshold, or a required debt adjustment or source allocation is pending. Insufficient rounding-reserve funding can also prevent a deposit. A rejected transaction does not create a position.

You do not need to open or manage a separate personal HOLLAR loan for Juicer. Borrowing and repayment take place within the strategy contracts.

## Fees and borrowing costs

The protocol fee applies to eligible strategy yield, rather than your deposited principal or the total value of your position. It is charged on realized harvest proceeds after swaps and before the vault's HOLLAR interest is serviced. It is therefore not a fee on your final net profit.

| Setting | Details |
| --- | --- |
| Protocol fee | 69% of eligible strategy yield. Governance can set a separate rate for each vault from 0% to 100%. |
| HOLLAR borrowing discounts | A 40% discount for vault borrowing and a separate 90% discount for loop borrowing. Discounts can change, and the loop discount is subject to a debt cap. |
| Withdrawal delay | 7 days before an unwind can start. Governance can change the delay for future requests. |

For example, at a 69% fee, a harvest of 0.01 ETH allocates 0.0069 ETH to the protocol and leaves 0.0031 ETH to service vault borrowing interest and compound any remainder. The loop's borrowing costs and swap costs have already reduced the yield available for that harvest.

Yield ownership and the protocol's share are allocated at accounting checkpoints. A later fee change does not reassign yield already allocated, although changes can affect reserves for unpaid borrowing interest and therefore estimates of unconverted earnings. Check the selected vault's current rate before depositing.

Fees are normally collected in the deposited asset. Fees on source yield realized during exits are collected in HOLLAR. These protocol fees are separate from wallet transaction fees.

## Withdrawing

Juicer withdrawals use a queue. They require a request, a waiting period, settlement, and payment.

1. **Request a withdrawal.** Choose part or all of your position. The request commits the corresponding shares and earnings to the exit. It cannot be cancelled.
2. **Wait until the request is eligible.** Your queued position remains invested and keeps earning until its unwind starts. Each request retains the eligibility time assigned when it was created, even if governance later changes the delay.
3. **Allow the strategy to settle.** Eligible requests start in first-in, first-out order. At the unwind start, the contracts calculate the collateral entitlement and allocate the exit's debt. That exit bears its subsequent borrowing interest. Settlement repays the allocated debt and releases collateral; it may require multiple transactions and partial payments.
4. **Receive settled collateral.** Keepers or any other caller can deliver available collateral to the request owner. The owner can also claim it directly and may choose another receiving address. Other callers cannot redirect the payment.

The withdrawal delay is the earliest time an unwind can start, **not a payout deadline**. Earlier requests, market liquidity, execution limits, pending debt adjustments, pauses, and funding shortfalls can extend the wait. Where enabled and within borrowing limits, some exits can settle without selling the shared PRIME position.

Unpaid claims remain outstanding when funding is insufficient. Later source recoveries belonging to a completed exit remain payable in HOLLAR to its original owner, separately from the deposited-asset payout.

## Principal preservation and risks

Juicer's policy is to preserve your original principal **in the deposited token**. For example, the protected principal of a 1 ETH deposit is denominated in ETH; its dollar value can still fall.

Ordinary interest servicing and strategy-loss recovery do not sell deposited collateral. The vault uses synthetic collateral to support its lending-market health factor. That protection depends on valid configuration, functioning oracles, permissions, and timely maintenance. Synthetic collateral cannot repay HOLLAR debt or fund a withdrawal.

The principal-preservation policy is not an unconditional guarantee. The PRIME strategy can lose value or be liquidated, leaving insufficient HOLLAR to release collateral. Governance must supply recovery capital when needed, and there is no fixed recovery deadline or guarantee that funding will be available. A recorded claim does not ensure immediate payment.

Consider these risks before depositing:

- **Leveraged strategy exposure:** PRIME losses, changing borrowing rates, or execution costs can reduce earnings and create repayment shortfalls.
- **Liquidity and withdrawal delays:** market conditions, keeper outages, transaction limits, or emergency pauses can delay both settlement and claims.
- **Contract and oracle dependencies:** Juicer relies on its contracts, Hydration's lending market, PRIME, HOLLAR, price feeds, and swap execution.
- **Governance and recovery:** authorized roles can change parameters, upgrade vault contracts, and pause operations. Emergency recovery may require external funding and a reviewed upgrade. Automatic recovery payouts covering all affected holders are not implemented.

During an emergency, recovery policy must account for all affected holders, including those who have not requested withdrawal. The ordinary withdrawal queue alone does not provide that allocation.
