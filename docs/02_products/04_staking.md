---
title: Staking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Hydration has a **long-running HDX staking program** which **incentivizes user activity** in areas that are beneficial to the Protocol. On this page you will find important information regarding the **mechanics behind the HDX Staking program**. You can also check out our [step-by-step guide on staking](/howto_stake).

## Staking Basics {#basics}

HDX holders can **stake their HDX and receive rewards** which become **claimable as time passes**. Staking rewards are distributed from a dedicated pot that is gradually filled up by **different Protocol revenue streams**. Initially, the main revenue stream are the **LP fees** which the Hydration Protocol accrues from its **HDX LP position in the Omnipool**. Furthermore, the Hydration community has approved a proposal to support the APR during the first year of the staking program with **an additional subsidy of ~22M HDX** from the Hydration Treasury which is gradually distributed to the staking rewards pot once per day.

Rewards which enter the staking pot are always distributed directly to all stakers at any given moment. The amount that users are entitled to is proportional to the relative size of their stake in the stake pool. However, stakers do not automatically receive the rewards on their account - instead, they need to claim them.

When it comes to claiming rewards, all participants in HDX staking should be aware of the elements of **loyalty and gamification**. Once rewards are awarded, they cannot be instantly claimed for the full amount - doing so would yield just a fraction of the total rewards, with the remainder being returned the pot for redistribution to all stakers.

Users who want to claim as many rewards as possible should keep their HDX staked without claiming until sufficient time has passed (rewards are “vested” following a bonding curve). The length of the waiting period is dynamic and depends on the user (in)actions. A user who just **stakes passively** would need to **wait ~2 years to claim 95% of their rewards**. In contrast, **active stakers** who collect the maximum amount of action points (more on that below) could claim **95% of their rewards in just over 2 months.** These are rough estimates - the actual timelines may vary in accordance with user actions and overall count of referenda.

## Boosting Your Rewards {#boosting-your-rewards}

Stakers can increase the pace at which they can claim their rewards by **collecting action points** and **boosting their rewards**. Action points can be acquired by performing certain actions that are incentivized by the Protocol. Initially, the only way to collect action points is to **participate in the governance of Hydration** by [voting on community referenda](https://hydradx.subsquare.io/democracy/referenda) **using the staked HDX**.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/staking/rewards_bonding_curve.jpg')} width="500px" />
</div>

There are 2 factors which determine the amount of action points that stakers will receive: The **size of the vote** (relative to the total size of their staked HDX), and the **conviction multiplier**. The higher the conviction multiplier of the vote, the greater its weight. Keep in mind that voting with a conviction multiplier places a **temporary lock on the tokens**. Stakers looking to achieve the highest rewards boost would be voting with 6x conviction multiplier, thereby locking their HDX for 192 days (counted from the last vote using such conviction). Just a reminder that **this lock is not related to staking** as such - instead, it is a standard feature of governance in the Polkadot ecosystem (more info [in our docs](/democracy_referenda#referenda-votes-weighing)).

| Conviction Multiplier | Days Locked |
|:---------------------:|:-----------:|
| 0.1x                  |  0d         |
| 1x                    |  6d         |
| 2x                    |  12d        |
| 3x                    |  24d        |
| 4x                    |  48d        |
| 5x                    |  96d        |
| 6x                    |  192d       |

## Claiming Your Rewards

As they keep their HDX staked, **users accumulate rewards over time**. These rewards become claimable subject to a bonding curve which is influenced by the boosts from action points (see above).

At any given time, **stakers can claim** (a portion of) their claimable rewards. By doing so, however, they **forfeit the remainder of their non-claimable rewards**. These rewards are **automatically transferred back to the staking rewards pot** which **redistributes them to all other stakers**. Furthermore, claiming **resets the past action points of the user**, sending users back to the beginning of the bonding curve for future rewards from staking.

This mechanism creates an interesting **gamification dynamic**: By **remaining longer in the pool of stakers**, users not only **unlock a greater part** of their allocated rewards - they also have the chance to receive a **juicy portion of rewards from other stakers who claim or exit early**.

Happy staking!
