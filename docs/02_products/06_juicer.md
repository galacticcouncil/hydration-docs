---
title: Juicer 🧃
description: Put your ETH and BTC borrowing power to work with automated looping, principal protection, and compounding
---

**Squeeze more from the assets you want to hold.** Juicer 🧃 puts the borrowing power of your ETH and BTC to work, earning yield that is converted back into the asset you deposited. You keep your exposure to ETH or BTC while Juicer handles the borrowing, swaps, looping, harvesting, and rebalancing.

Its key design choice: **your deposited asset stays separate from the PRIME loop's liquidation path.** Synthetic backing protects the collateral position, while a shared PRIME looping strategy generates yield using borrowed HOLLAR. ETH and tBTC each have their own vault.

For a walkthrough of deposits and withdrawals, see [Juicer 🧃 Quick Start](/quick_start/juicer).

## Why use Juicer

- **Keep holding ETH or BTC.** Earn in the asset you deposited, with funded earnings compounded automatically.
- **Put borrowing power to work.** Access a PRIME looping strategy with discounted HOLLAR borrowing, without managing a personal loan.
- **Let the strategy do the work.** Permissionless keepers handle deployment, harvesting, rebalancing, and withdrawal settlement.
- **Built-in principal protection.** Synthetic backing separates the deposited collateral from the loop, with automatic debt reduction as conditions change.

## How Juicer works

Your deposit is supplied to Hydration's [lending market](/products/borrowing/overview) in a collateral position called Main. You receive vault shares representing your funded position. The deposit does not immediately borrow HOLLAR or execute a swap. Keepers deploy available capacity gradually, subject to borrowing and execution limits.

Main borrows HOLLAR at a discounted rate and deploys it into the shared PRIME strategy. The strategy swaps HOLLAR for PRIME, supplies PRIME to the money market, and borrows additional HOLLAR to repeat the process up to its target health factor. When eligible PRIME yield is harvested, it is converted into each vault's collateral asset. The proceeds pay the protocol fee, then service the vault's HOLLAR borrowing interest. Any remainder is compounded for holders. Some earned PRIME is retained to cover future execution costs.

Funded earnings are included in your vault balance and continue compounding automatically. You do not need to claim them separately. Estimated earnings that have not yet been converted and funded are shown separately.

Yield reflects PRIME returns after borrowing costs, protocol fees, and execution costs. Rates vary with market conditions.

## Automatic deleveraging and unwinding

Juicer manages borrowing at two levels:

- **Protecting the PRIME loop.** If its health factor reaches the configured safety threshold, keepers trigger automatic deleveraging: the strategy reduces PRIME exposure and repays HOLLAR debt to move back toward its target health factor.
- **Adjusting to collateral prices.** If the vault's borrowing ratio moves above its configured band as collateral value falls, rebalancing unwinds part of the PRIME strategy and uses the resulting HOLLAR to repay Main debt. Ordinary rebalancing does not sell your deposited ETH or tBTC.

The same unwind machinery handles withdrawal requests, freeing the HOLLAR needed to repay an exit's debt and release collateral. Where enabled and within borrowing limits, some exits can settle without selling the loop.

You do not need to monitor and manually unwind the loop yourself. Keepers execute these actions under on-chain thresholds and price limits; completion still depends on available liquidity and functioning execution.

## Depositing

Use the supported vault for the asset you want to deposit. Review its current fee, withdrawal delay, capacity, and restrictions before approving and submitting a deposit. Each vault accepts its configured collateral asset.

Deposit availability depends on vault capacity and strategy readiness. The vault may temporarily stop deposits while it rebalances, restores backing, or is paused.

You do not need to open or manage a separate personal HOLLAR loan for Juicer. Borrowing and repayment take place within the strategy contracts.

## Fees and borrowing costs

Juicer pairs **discounted HOLLAR borrowing with a share of harvested yield**. Governance configures the discounts for vault and PRIME-loop borrowing, along with the protocol harvest share for each vault. Lower borrowing costs leave more strategy yield available to harvest, a portion of which goes to the protocol.

At the full HOLLAR borrowing rate, much of the PRIME loop's yield would normally go toward interest paid to the protocol. A zero-harvest-fee model with undiscounted borrowing could therefore produce broadly similar protocol revenue, collected mainly in HOLLAR. Juicer instead discounts borrowing and collects a share of the larger harvest in ETH or tBTC. The fee and discounts should be considered together; the outcome depends on market rates, execution costs, and the effective discounts.

The protocol also takes responsibility for recovering shortfalls under Juicer's principal-preservation policy. Collecting revenue in collateral supports building reserves for that responsibility. Treasury allocations and recovery funding remain governance decisions; harvest fees are not automatically swept into a recovery reserve.

| Setting | Details |
| --- | --- |
| Discounted HOLLAR borrowing | Governance-configured interest discounts for vault and loop borrowing. The loop discount is subject to a discounted-debt cap. |
| Protocol harvest share | A governance-configured share of eligible strategy yield, paired with discounted borrowing. Deposited principal and collateral price gains are excluded. |
| Withdrawal delay | 7 days before an unwind can start. Governance can change the delay for future requests. |

The harvest share is charged on actual collateral received after swaps. The remainder services the vault's discounted HOLLAR interest, then compounds into holders' positions. Loop borrowing costs are already reflected in the yield available for harvest, so the harvest share is calculated before vault interest rather than on final net profit.

Governance can adjust each vault's harvest fee, and authorized governance roles can change borrowing discounts. Check the current fee and discount settings in the [Hydration app](https://app.hydration.net) before depositing.

Yield ownership and the protocol's share are allocated at accounting checkpoints. A later fee change does not reassign yield already allocated, although changes can affect reserves for unpaid borrowing interest and therefore estimates of unconverted earnings. Check the selected vault's current rate before depositing.

Fees are normally collected in the deposited asset. Fees on source yield realized during exits are collected in HOLLAR. These protocol fees are separate from wallet transaction fees.

## Withdrawing

Juicer withdrawals use a queue. They require a request, a waiting period, settlement, and payment.

1. **Request a withdrawal.** Choose part or all of your position. The request commits the corresponding shares and earnings to the exit. It cannot be cancelled.
2. **Wait until the request is eligible.** Your queued position remains invested and keeps earning until its unwind starts. Each request retains the eligibility time assigned when it was created, even if governance later changes the delay.
3. **Allow the strategy to settle.** Eligible requests start in first-in, first-out order. At the unwind start, the contracts calculate the collateral entitlement and allocate the exit's debt. That exit bears its subsequent borrowing interest. Settlement repays the allocated debt and releases collateral; it may require multiple transactions and partial payments.
4. **Receive settled collateral.** Keepers or any other caller can deliver available collateral to the request owner. The owner can also claim it directly and may choose another receiving address. Other callers cannot redirect the payment.

The withdrawal delay is the earliest time an unwind can start. Final payment timing depends on queue progress, liquidity, and strategy settlement.

Unpaid claims remain outstanding when funding is insufficient. Later source recoveries belonging to a completed exit remain payable in HOLLAR to its original owner, separately from the deposited-asset payout.

## Principal preservation and risks

Juicer is designed to keep your deposited ETH or tBTC outside the PRIME loop's liquidation path. Alongside your collateral, Main holds synthetic backing that covers the liquidation-threshold value of its HOLLAR debt. This backing protects Main's health factor without creating additional borrowing power. Ordinary interest servicing and rebalancing use strategy proceeds rather than selling your deposited asset.

The principal-preservation policy is denominated in the deposited token: a 1 ETH deposit is protected in ETH terms, while its dollar value still moves with ETH. Earned strategy value absorbs losses before original principal backing; any remaining shortfall is a governance recovery obligation, with unpaid claims preserved.

These protections rely on correct configuration, reliable oracles, and timely keeper maintenance. They are not an unconditional guarantee: the PRIME loop retains its own liquidation risk, and synthetic backing cannot fund a HOLLAR repayment. A shortfall can delay withdrawals while governance supplies recovery funding, with no fixed recovery deadline.

As with other DeFi strategies, smart contracts, market liquidity, and governance decisions affect operation. Authorized roles can adjust parameters, pause activity, and upgrade vault contracts. See the withdrawal process above when planning how long to keep funds in Juicer.
