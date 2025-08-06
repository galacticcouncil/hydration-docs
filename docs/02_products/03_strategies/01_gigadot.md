---
title: GIGADOT
description: Learn about the composite DOT strategy token
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**[GIGADOT](https://app.hydration.net/strategies/gigadot)** is a **capital-efficient token** that gives holders **exposure to DOT while earning yields from multiple sources simultaneously**. It solves a common dilemma for DOT holders who previously had to choose between staking rewards, lending yields, or DeFi participation.

## What is GIGADOT?
GIGADOT is a composite product that combines yield from up to four sources:

- **vDOT** (liquid-staked DOT by Bifrost that earns staking rewards)
- **aDOT** (DOT supplied to Hydration's lending markets that earns lending interest)
- **Trading fees** from the vDOT-aDOT pool
- **Additional DeFi incentives** (when available)

The result is a single token that earns yields from all four sources, creating a more efficient way to hold DOT.

## Getting GIGADOT
GIGADOT is **now available on Hydration**. To get started:

1. Visit https://app.hydration.net/strategies/gigadot
2. Acquire and hold GIGADOT using any token trading on Hydration
3. Start earning combined yield immediately

## Key Benefits
- **Capital Efficiency**: GIGADOT eliminates the need to split your DOT across multiple positions
- **Streamlined Experience**: GIGADOT gives you access to multiple yield sources without managing separate tokens
- **Liquidity Improvement**: GIGADOT creates a flywheel effect that enhances liquidity for vDOT, supporting critical functions like liquidations
- **Yield Optimization**: GIGADOT combines multiple yield sources to potentially create higher returns than any single strategy

## How GIGADOT Works
Under the hood, **GIGADOT utilizes Hydration's Stablepool technology with a drifting peg mechanism**. This technology accounts for the inherent value drift between vDOT and aDOT:

- **vDOT** gradually appreciates against DOT as it accrues staking rewards
- **aDOT**  is a rebasing token, meaning that it does not appreciate in value. Instead the amount of aDOT increases overtime

The adjustable peg mechanism allows the pool to adapt to these changing token relationships while maintaining optimal liquidity.

**From a user perspective, the technical complexity is abstracted away**. When you interact with GIGADOT, you're simply interacting with the 2-pool token (vDOT-aDOT) that has been supplied to lending.

## GIGADOT Yield Sources
GIGADOT derives its yield from four main sources:

1. **Staking Rewards**: Through the vDOT component, GIGADOT captures staking rewards (currently around 11.85% APR) that are normally only available to DOT stakers.
2. **Lending Interest**: Via the aDOT component, GIGADOT earns interest paid by borrowers of DOT in Hydration's lending markets.
3. **Trading Fees:** Because GIGADOT is a 2pool token (vDOT-aDOT) that has been supplied to lending, it automatically earns trading fees from the vDOT-aDOT pool.
4. **DeFi Incentives**: When available, additional rewards allocated by Hydration and Polkadot treasuries further enhance returns.

Since GIGADOT is composed of both vDOT and aDOT, you effectively earn returns from both staking and lending simultaneously through a single token, without having to manage multiple positions.

The actual yield breakdown is approximately:
- ½ of vDOT staking APY
- ½ of aDOT lending APY
- LP fees APY from the vDOT-aDOT stablepool
- Incentives APY

This combination creates a comprehensive yield that effectively utilizes DOT across multiple DeFi mechanisms.

## Use Cases for GIGADOT
GIGADOT can be utilized in several ways:

- **Hold for composite yield**: Simply holding GIGADOT provides exposure to the underlying yield sources
- **Use as collateral**: Borrow against your GIGADOT position to access liquidity without selling
- **Leverage**: For advanced users, borrow DOT against your GIGADOT, convert to more GIGADOT, and continue the cycle for a leveraged position

## GIGADOT in the Polkadot Ecosystem
GIGADOT addresses an important opportunity in the Polkadot ecosystem. While approximately 33.9% of staked ETH and 9% of staked SOL are in liquid staking tokens, **only 1.66% of staked DOT has been converted to LSTs**. This represents significant growth potential for liquid staking in the Polkadot ecosystem.

By combining liquid staking with additional yield sources, GIGADOT aims to **accelerate the adoption of capital-efficient DOT utilization in the Polkadot ecosystem**.

## Controlling GIGADOT
Like all protocol parameters on Hydration, **the parameters pertaining to GIGADOT are governed through Hydration OpenGov**, giving the decision-making power to all HDX holders. This includes all decisions regarding the incentives and other operational matters.

## Risk Involved
Entering GIGADOT involves **exposure to price fluctuations of the underlying assets** (DOT, vDOT, aDOT). If you're using GIGADOT as collateral in [Borrow](https://app.hydration.net/borrow/markets), ensure your risk tolerance aligns with the health factor of your Borrow position. To learn more about health factor, read our [Borrow docs](/products/borrowing).