---
title: HOLLAR
description: Learn about Hydration's native stablecoin
---

HOLLAR is Hydration's **decentralized, over-collateralized stablecoin** designed to target the value of approximately $1. Unlike algorithmic stablecoins that rely on market mechanisms alone, HOLLAR is minted against crypto collateral that users deposit into the protocol. This creates a direct backing relationship where each HOLLAR token represents a claim against real crypto assets held in the system.

HOLLAR **builds on the proven architecture of Aave's GHO protocol**, inheriting battle-tested mechanisms for collateral management, interest accrual, and liquidations. In parallel, our cutting-edge [HOLLAR Stability Module (HSM)](#the-hollar-stability-module-hsm) helps provide enhanced price stability through direct stablecoin conversion capabilities.

## What Makes HOLLAR Unique

HOLLAR leverages Hydration's position as an app-specific DeFi blockchain built on Polkadot, enabling innovations that smart contract-based protocols cannot achieve due to their dependence on external blockchain runtimes.

- **App-Specific Blockchain Advantages**: Unlike protocols constrained by smart contract limitations, HOLLAR benefits from Hydration's complete control over its runtime and execution environment. This enables deep protocol-level integrations and automated behaviors impossible for traditional smart contracts.
- **Enhanced Yield Generation**: HOLLAR tokens earn additional yield from the interest paid by borrowers, creating value for HOLLAR holders beyond simple price stability.
- **Advanced Stability Mechanisms**: The HOLLAR Stability Module provides stronger economic security for maintaining the $1 peg through sophisticated real-time market monitoring and response capabilities that analyze stableswap pools block-by-block.
- **Automated Risk Management**: Protocol-executed partial liquidations occur automatically at the beginning of every block, bringing unhealthy positions back to safe levels without requiring full liquidation. This provides better security and user experience compared to traditional all-or-nothing liquidation systems.
- **Integrated DeFi Ecosystem**: HOLLAR benefits from native interoperability with Hydration's existing DeFi protocols, enabling seamless integration without the friction typical of cross-protocol interactions.
- **Sophisticated Arbitrage Facilitation**: The protocol can provide automated arbitrage opportunities with no upfront capital requirements for arbitrageurs, creating more efficient price discovery and stability mechanisms than traditional market-dependent approaches.

## How HOLLAR Works

### The Minting Process

**When you want to create new HOLLAR tokens, you deposit crypto assets as collateral.** The protocol evaluates your collateral's value and allows you to mint HOLLAR up to a certain percentage of that value - this is called the loan-to-value ratio. For example, if you deposit 1,000 USD worth of ETH and the LTV ratio is 75%, you can mint up to $750 worth of HOLLAR.

Your minted HOLLAR represents a debt position that accrues interest over time, currently at 5% annually. This interest compensates the protocol for the risk of accepting your volatile crypto collateral in exchange for a stable asset. To reclaim your collateral, you must repay the HOLLAR you minted plus any accrued interest.

### Collateral and Risk Management

**HOLLAR accepts various crypto assets as collateral including DOT, ETH, vDOT, USDT, USDC, tBTC, and WBTC.** Each asset has specific risk parameters that determine how much HOLLAR you can mint against it and at what point your position becomes unsafe.

If your collateral's value drops significantly relative to your HOLLAR debt, your position may be liquidated. Unlike traditional DeFi protocols that liquidate entire positions, **Hydration performs partial liquidations automatically at each block to restore your health factor to safe levels**. This means you're less likely to lose all your collateral at once, and your position can remain active even after a liquidation event. Liquidations protect the protocol from becoming undercollateralized and ensure that every HOLLAR token remains backed by sufficient collateral value. 

### The HOLLAR Stability Module (HSM)

Most collateral-backed stablecoins maintain their $1 peg indirectly through secondary markets. When the price deviates, arbitrageurs eventually notice and trade to profit from the difference, slowly bringing the price back. But this can be slow, unreliable, and limited by available liquidity in trading pools.

HOLLAR's Stability Module provides **asymmetric price support** - simple in one direction, sophisticated in the other.

**Getting HOLLAR:**
Users can always buy HOLLAR from the HSM at a predictable rate close to 1 USD. This creates a reliable price ceiling - HOLLAR can't trade much above $1 because people can always get it cheaper from the facility.

**Selling HOLLAR back:**
The HSM doesn't blindly buy any amount of HOLLAR at any time - that would be exploitable. Instead, it monitors stableswap pools and intelligently decides when and how much HOLLAR to buy based on genuine market conditions, providing smart price support when HOLLAR is actually undervalued.

**Why this design matters:**
If both directions used simple fixed pricing, manipulators could exploit the HSM by artificially moving stableswap prices and forcing it to buy HOLLAR at bad rates. The smart buyback prevents this while still providing genuine price support.

**The HSM generates revenue by deploying received stablecoins into yield-earning strategies**, meaning it can provide price stability while actually making money, rather than burning through reserves like traditional currency pegs.

## Using HOLLAR

### Minting HOLLAR

To mint your first HOLLAR tokens:

1. **Go to the Hydration Borrow Markets**: Visit https://app.hydration.net/borrow/markets
2. **Supply your collateral**: Choose from the supported assets (DOT, ETH, vDOT, USDT, USDC, tBTC, WBTC) and deposit the amount you want to use as collateral
3. **Mint HOLLAR**: Once your collateral is supplied, you can borrow/mint HOLLAR up to your loan-to-value limit

Your position will begin accruing interest at the current rate of 5.12% annually.

### Managing Your Position

Monitor and adjust your HOLLAR position through the dashboard:

1. **Go to your Borrow Dashboard**: Visit https://app.hydration.net/borrow/dashboard
2. **Increase your health factor**: If your position is getting risky, provide more collateral to strengthen it
3. **Repay HOLLAR**: Pay back your debt (plus accrued interest) to unlock your collateral for withdrawal
4. **Mint more HOLLAR**: If you have remaining borrowing capacity, you can mint additional HOLLAR against your existing collateral

Keep your health factor above 1.0 to avoid liquidation.

## Risk Considerations

### Collateral Volatility

Since HOLLAR is backed by crypto assets that can be volatile, users face the risk of liquidation if their collateral value declines. Different assets carry different risk profiles - stablecoins like USDT and USDC offer lower volatility but may have lower loan-to-value ratios, while assets like ETH and DOT may offer higher borrowing capacity but carry greater liquidation risk.

### Peg Stability

HOLLAR aims to maintain a $1.00 peg through the HOLLAR Stability Module and market mechanisms, but extreme market conditions could cause temporary deviations. The facility provides significant protection against peg breaks, but cannot guarantee perfect stability in all conditions.

### Smart Contract Risk

While HOLLAR builds on proven GHO architecture that has been battle-tested, the HSM represents new functionality with its own risk profile. Users should consider their exposure and position sizes accordingly.