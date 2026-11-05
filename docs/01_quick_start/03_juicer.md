---
title: Juicer 🧃
sidebar_position: 3.5
description: Deposit ETH or tBTC, earn in your deposited asset, and withdraw through Juicer
---

Juicer 🧃 helps you earn more of the ETH or BTC you want to hold. Deposit ETH or tBTC, and Juicer puts its borrowing power to work through an automated PRIME looping strategy. Eligible earnings are converted back into your deposited asset and compounded automatically.

Your deposited collateral stays separate from the PRIME loop's liquidation path, with synthetic backing protecting its lending position. Juicer handles the borrowing, swaps, harvesting, and rebalancing for you.

## Before you deposit

Connect your wallet to the [Hydration app](https://app.hydration.net) and make sure the asset you want to deposit is available on Hydration. You will also need enough funds to cover transaction fees.

Review the vault's current yield estimate, fee terms, available capacity, and withdrawal delay. Juicer pairs a 40% interest discount on vault HOLLAR borrowing and a 90% discount on PRIME-loop borrowing with a 69% protocol share of eligible harvested yield. The loop discount is subject to a discounted-debt cap. The discounts reduce borrowing costs, while the harvest share compensates the protocol. Deposited principal is excluded from the fee.

After the harvest share, the remaining proceeds service the vault's discounted borrowing interest and compound into your position. Rates and governance settings can change; see [fees and borrowing costs](/products/juicer#fees-and-borrowing-costs) for details.

Read the [Juicer 🧃 product overview](/products/juicer) for how the strategy and principal protection work.

## Deposit and earn

1. **Choose your vault.** Select the Juicer vault for ETH or tBTC.
2. **Enter an amount.** Check the asset and amount you want to deposit, leaving enough funds for transaction fees.
3. **Approve and confirm.** Approve access to the deposit amount if required, then sign the deposit transaction in your wallet.
4. **Keep track of your position.** Your deposit receives vault shares. Funded earnings are included in your vault balance and compound automatically; estimated earnings that have not yet been converted remain separate.

Deposits supply collateral to Hydration's lending market. Keepers then deploy available borrowing capacity into the PRIME looping strategy gradually, so your deposit is not necessarily fully deployed immediately.

If a deposit is unavailable, the vault may be full, paused, or waiting for a strategy adjustment. Check its status before retrying.

## Let Juicer manage the strategy

Keepers harvest and compound eligible earnings, rebalance borrowing as collateral prices change, and automatically reduce the PRIME loop's borrowing when its health factor reaches the configured safety threshold. If the main collateral position needs less debt, Juicer unwinds part of the strategy and repays HOLLAR without selling your deposited ETH or tBTC.

You do not need to run these steps yourself. They execute within on-chain price and borrowing limits and depend on available liquidity and keeper execution.

## Withdraw your funds

1. **Request a withdrawal.** Choose part or all of your position and confirm the request. It cannot be cancelled.
2. **Wait for eligibility.** The withdrawal delay is 7 days. Your queued position remains invested and keeps earning until its unwind starts. Changes to the delay apply to future requests; your request keeps its original eligibility time.
3. **Wait for settlement.** Eligible requests start in queue order. The strategy repays the debt allocated to your exit and releases collateral as funds become available. Settlement can happen in parts.
4. **Receive your collateral.** Keepers can deliver settled funds to your wallet. You can also claim available collateral yourself; only the request owner can choose a different receiving address.

The seven-day delay is followed by settlement, so allow additional time for queue progress and available liquidity. Your exit bears its borrowing interest after the unwind starts.

## Understand principal preservation

Juicer aims to preserve your original principal in the deposited asset. A 1 ETH deposit is denominated in ETH, so its dollar value can still fall.

Synthetic backing and automatic debt management support this protection. They depend on reliable oracles, keeper maintenance, and correct configuration. If strategy losses leave a shortfall, withdrawals can take longer while governance supplies recovery funding; principal preservation is not an unconditional guarantee.

See [principal preservation and risks](/products/juicer#principal-preservation-and-risks) before depositing.
