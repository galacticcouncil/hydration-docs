---
title: Earn With Hydration
description: Learn all the ways you can earn on Hydration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Hydration offers multiple ways to earn yield across different DeFi activities. Each earning method serves different risk preferences and capital allocation strategies. This page lists all earning options on Hydration.

## How You Earn

### Liquidity Provision

Provide any supported token to Hydration's Omnipool using single-sided liquidity provision. Your earnings come from your proportional share of asset fees plus additional token rewards from seasonal farming campaigns. The more liquidity you provide relative to the total pool, the larger your share of these fees.

Your earnings from trading fees benefit from Hydration's enhanced fee distribution system through H2O minting. When asset fees remain in the Omnipool, the system mints H2O tokens to match this amount, reducing impermanent loss impact and better distributing protection across the system. For technical details about how fees work, see our [Fees documentation](https://www.notion.so/Earn-With-Hydration-230ffd09c4a280a183c2f212540430ec?pvs=21).

**For current supported assets and rates, visit the [liquidity page](https://app.hydration.net/liquidity/all-pools).**

### HDX Staking

Stake HDX tokens to earn rewards from protocol operations including LP fees from Hydration's HDX position and treasury subsidies. Rewards accumulate over time but follow a bonding curve system - claiming early yields only a fraction of total rewards, with the remainder redistributed to other stakers.

The system includes gamification elements: active participants who vote in governance earn "action points" that accelerate the bonding curve, allowing faster access to rewards. Passive stakers need approximately 2 years to claim 95% of rewards, while active governance participants can achieve this in just over 2 months.

Rewards can be claimed at any time, but doing so resets your position on the bonding curve for future rewards. Note that increasing your stake sets you back on the action points curve proportional to the amount added.

**For step-by-step instructions, see our [staking guide](https://docs.hydration.net/community/stake_hdx). For current staking rates, visit the [staking page](https://docs.hydration.net/products/staking).**

### Lending

Supply crypto assets to Hydration's lending pools to earn variable interest rates from borrowers, plus additional rewards when available for specific lending markets. Interest rates adjust dynamically based on supply and demand for each asset.

Hydration uses a fork of AAVE v3 with enhanced features including prioritized on-chain liquidations and MEV internalization. The system includes robust risk management with collateralization ratios, liquidation parameters, and utilization monitoring to protect lenders.

Lending involves standard DeFi risks including smart contract risk and potential borrower defaults, though these are mitigated through overcollateralization requirements and automated liquidations.

**For detailed guides, see our documentation on [supplying assets](https://docs.hydration.net/guides/borrow/supply_assets) and [borrowing assets](https://docs.hydration.net/guides/borrow/borrow_assets). For current lending rates, visit the [lending page](https://app.hydration.net/borrow).**

### Automated Strategies (GIGADOT & GIGAETH)

Hydration offers automated yield strategies that combine multiple earning sources into single tokens. Both strategies earn from four sources simultaneously: staking rewards, lending interest, trading fees from their underlying pools, and additional incentives when available. The technical complexity is abstracted away - users simply hold the strategy tokens while the underlying mechanisms automatically balance between different yield sources.

**GIGADOT** combines vDOT (liquid staked DOT) and aDOT (DOT supplied to lending markets) to capture DOT-based yields across staking and lending markets.

**GIGAETH** follows the same model for ETH, combining wstETH (liquid staked ETH) and aETH (ETH supplied to lending markets) to earn from ETH-based yield sources.

Both strategies can be held for composite yield, used as collateral for borrowing, or leveraged by borrowing the underlying asset to acquire additional strategy tokens. GIGAETH can also be supplied to the Omnipool for additional liquidity rewards.

Strategy tokens involve exposure to underlying asset price fluctuations and, for GIGAETH, impermanent loss risk when used in the Omnipool. When used as collateral, monitor your position's health factor to avoid liquidation.

- [GIGADOT strategy page](https://app.hydration.net/strategies/gigadot)
- [GIGAETH strategy page](https://app.hydration.net/strategies/gigaeth)
- Documentation: [GIGADOT](https://docs.hydration.net/products/strategies/gigadot) | [GIGAETH](https://docs.hydration.net/products/strategies/gigaeth)

### Referrals

Register a unique referral code to earn from the trading activity of users you onboard, while referred traders receive cashback on their trades. When someone trades using your referral code, they become permanently linked to your account, and you earn rewards from all their future Omnipool trades.

Referral rewards come from the 50% of asset fees that would otherwise go entirely to HDX stakers, creating a sustainable earning mechanism tied to actual protocol usage. Your earning rate depends on your referrer tier, which increases based on the total volume of referral rewards you generate.

Referral earnings depend on the trading activity of referred users and current asset fee rates, which can vary with market volatility.

**To get started, visit the [referrals page](https://app.hydration.net/referrals). For complete details, see our [referrals documentation](https://docs.hydration.net/community/referrals).**