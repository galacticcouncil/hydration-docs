---
title: GIGAETH
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**[GIGAETH](https://app.hydration.net/strategies/gigaeth)** is an **automated strategy that combines multiple ETH yield sources into a single token**. It earns staking rewards through wstETH, lending interest through aETH, trading fees from the wstETH-aETH pool, and additional DeFi incentives when available. Users get exposure to all these yields without managing separate positions.

## Understanding GIGAETH

**GIGAETH represents a new approach to ETH yield optimization** through automated strategy execution. Rather than requiring users to manually allocate capital across different protocols, GIGAETH combines the most reliable yield sources into a single, streamlined token.

**GIGAETH derives its yield from four main sources**:

1. **Staking Rewards**: Through the wstETH component, GIGAETH captures staking rewards (currently around 3.1% APR) that are normally only available to ETH stakers.
2. **Lending Interest**: Via the aETH component, GIGAETH earns interest paid by borrowers of ETH in Hydration's lending markets (variable rate based on borrowing demand).
3. **Trading Fees**: Because GIGAETH is a 2pool token (wstETH-aETH) that has been supplied to lending, it automatically earns trading fees from the wstETH-aETH pool.
4. **DeFi Incentives**: When available, additional rewards allocated by Hydration and other treasuries further enhance returns.

Since GIGAETH is composed of both wstETH and aETH, you effectively earn returns from both staking and lending simultaneously through a single token, without having to manage multiple positions.

The actual yield breakdown is approximately:

- ½ of wstETH staking APY (~1.55% of the ~3.1% staking rate)
- ½ of aETH lending APY (variable based on market demand)
- LP fees APY from the wstETH-aETH stablepool
- Incentives APY

This combination creates a comprehensive yield profile that would be complex and time-consuming to replicate manually, all accessible through a single token that simplifies the entire process.

## Key Benefits of GIGAETH

- **Capital Efficiency**: Traditional approaches require splitting holdings across multiple protocols—staking some ETH for network rewards, lending other portions for interest, and potentially providing liquidity for trading fees and incentives. This fragmentation not only complicates portfolio management but often leaves capital underutilized. GIGAETH eliminates the need to split your ETH across multiple positions.
- **Streamlined Experience**: By consolidating multiple yield sources, GIGAETH eliminates the overhead of monitoring various positions, managing different tokens, and optimizing allocation ratios. Users gain access to sophisticated yield strategies without the complexity typically associated with advanced DeFi participation.
- **Liquidity Improvement**: GIGAETH creates enhanced liquidity for wstETH, supporting critical functions like liquidations
- **Yield Optimization**: GIGAETH combines multiple yield sources to potentially create higher returns than any single strategy

## How GIGAETH Works

Under the hood, **GIGAETH utilizes Hydration's Stablepool technology with a drifting peg mechanism**. This technology accounts for the inherent value drift between wstETH and aETH:

- **wstETH** gradually appreciates against ETH as it accrues staking rewards
- **aETH** is a rebasing token, meaning that it does not appreciate in value. Instead the amount of aETH increases over time

The adjustable peg mechanism allows the pool to adapt to these changing token relationships while maintaining optimal liquidity, supported by separate wstETH and ETH oracles from DIA.

From a user perspective, the technical complexity is abstracted away. When you interact with GIGAETH, you're simply interacting with the 2-pool token (wstETH-aETH) that has been supplied to lending.

## Use Cases for GIGAETH

GIGAETH can be utilized in several ways:

- **Hold for composite yield**: Simply holding GETH provides exposure to the underlying yield sources
- **Use as collateral**: [Borrow](https://app.hydration.net/borrow) against your GETH position to access liquidity without selling
- Earn liquidity rewards: Supply GETH to the Omnipool as liquidity to farm additional rewards
- **Trade:** [Swap](https://app.hydration.net/trade/swap) your GIGAETH for other assets when needed
- **Leverage**: For advanced users, borrow ETH against your GIGAETH, convert to more GIGAETH, and continue the cycle for a leveraged position

## Getting Started with GIGAETH

Accessing GIGAETH is designed to be straightforward for anyone. To get started:

1. Visit https://app.hydration.net/strategies/gigaeth
2. Acquire and hold GIGAETH using any token trading on Hydration

Once acquired, GIGAETH immediately begins earning combined yield from its underlying sources, requiring no additional steps or ongoing management from the holder.

## Controlling GIGAETH

Like all protocol parameters on Hydration, **the parameters pertaining to GIGAETH are governed through Hydration OpenGov**, giving the decision-making power to all HDX holders. This includes all decisions regarding the incentives and other operational matters.

## Risk Involved
The main risk is [impermanent loss](/products/trading/liquidity/impermanent_loss), as GIGAETH represents a liquidity pool position between wstETH and aETH. If the relative values of these assets change significantly, you may experience impermanent loss compared to holding them separately. Additional risks include price fluctuations of underlying assets and liquidation risk when used as collateral.

If you're using GIGAETH as collateral in **[Borrow](https://app.hydration.net/borrow)**, ensure your risk tolerance aligns with the health factor of your Borrow position. To learn more about health factor, read our [Borrow docs](/products/borrowing/overview).

## Frequently Asked Questions

#### How is the value of GIGAETH determined? 
GIGAETH value is based on the underlying wstETH-aETH pool composition plus accumulated yields from staking rewards, lending interest, trading fees, and incentives. The token represents your share of this combined position.

#### How do I get LP rewards for GIGAETH? 
After acquiring GIGAETH, go to the Liquidity page/tab and supply your GIGAETH to the Omnipool to farm rewards. Current incentives offer up to 69% APR, with rewards paid out in GIGADOT tokens.

#### How frequently are GETH rewards distributed?
Rewards are distributed in GIGADOT every block.

#### Are there any lockup periods?
No lock-up periods. You can exit the strategy at anytime by swapping your GIGAETH for other tokens in the Hydration Omnipool.