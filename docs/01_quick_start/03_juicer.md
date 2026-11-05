---
title: Juicer 🧃
sidebar_position: 3.5
description: Deposit ETH or tBTC, earn in your deposited asset, and withdraw through Juicer
---

Juicer 🧃 puts your ETH or tBTC to work through an automated PRIME looping strategy. Eligible earnings are converted back into the asset you deposited and compounded into your position. You do not need to manage a separate HOLLAR loan or claim compounded earnings.

## Before you deposit

Connect your wallet to the [Hydration app](https://app.hydration.net) and make sure the asset you want to deposit is available on Hydration. You will also need enough funds to cover transaction fees.

Review the vault's current yield estimate, protocol fee, available capacity, and withdrawal delay. Yield varies and can be negative. The protocol fee is 69% of eligible strategy yield, charged before the vault's HOLLAR borrowing interest is serviced. Governance can change the fee.

Read the [Juicer 🧃 product overview](/products/juicer) for the strategy mechanics and risks.

## Deposit and earn

1. **Choose your vault.** Select the Juicer vault for ETH or tBTC.
2. **Enter an amount.** Check the asset and amount you want to deposit, leaving enough funds for transaction fees.
3. **Approve and confirm.** Approve access to the deposit amount if required, then sign the deposit transaction in your wallet.
4. **Keep track of your position.** Your deposit receives vault shares. Funded earnings are included in your vault balance and compound automatically; estimated earnings that have not yet been converted remain separate.

Deposits supply collateral to Hydration's lending market. Keepers then deploy available borrowing capacity into the PRIME looping strategy gradually, so your deposit is not necessarily fully deployed immediately.

If a deposit is unavailable, the vault may be full, paused, or waiting for a strategy adjustment. Check its status before retrying.

## Withdraw your funds

1. **Request a withdrawal.** Choose part or all of your position and confirm the request. It cannot be cancelled.
2. **Wait for eligibility.** The withdrawal delay is 7 days. Your queued position remains invested and keeps earning until its unwind starts. Changes to the delay apply to future requests; your request keeps its original eligibility time.
3. **Wait for settlement.** Eligible requests start in queue order. The strategy repays the debt allocated to your exit and releases collateral as funds become available. Settlement can happen in parts.
4. **Receive your collateral.** Keepers can deliver settled funds to your wallet. You can also claim available collateral yourself; only the request owner can choose a different receiving address.

Seven days is the earliest time an unwind can start, **not a guaranteed payment date**. Liquidity, earlier requests, strategy adjustments, or emergency pauses can extend the wait. Your exit bears its borrowing interest after the unwind starts.

## Understand principal preservation

Juicer aims to preserve your original principal in the deposited asset. A 1 ETH deposit is denominated in ETH, so its dollar value can still fall.

This policy is not an unconditional guarantee. The PRIME looping strategy uses borrowing to increase yield potential and risk. Losses can create repayment shortfalls and delay withdrawals until recovery funding is supplied. There is no fixed recovery deadline.

See [principal preservation and risks](/products/juicer#principal-preservation-and-risks) before depositing.
