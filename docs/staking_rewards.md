---
id: staking_rewards
title: Staking Rewards
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Staking rewards incentivize validators and nominators to [stake their HDX tokens](/staking). There are three types of staking rewards which are discussed in this article: [base rewards](#base-rewards), [era points](#era-points) and [tips](#tips).

## Base Rewards {#base-rewards}

At the end of every era (24h), all active validator pools receive base rewards in the form of HDX tokens. A validator pool consists of an elected validator (holding their self-staked HDX) and all active nominations which are backing the validator (for more information see [staking](/staking)). A central principle of the Nominated Proof-of-Stake (NPoS) consensus mechanism is that **equal work brings equal rewards**. In other words, since all validator pools essentially carry out the same work, **the available base rewards are divided equally** among them. This means that validator pools are **not** rewarded in proportion to their total stake, which is a major difference from traditional PoS networks.

The mechanism of sharing the base rewards equally among all participating validator pools contributes to the security of the network by preventing the concentration of power in a few validator pools, thereby strengthening decentralization. Over time, it incentivizes nominators to nominate validators with a smaller HDX stake. This process will eventually balance out the power relationships in the network and lead to a situation where all validator pools have roughly an equivalent amount of staked HDX.

The distribution of rewards takes place as follows. After calculating the (equal) amount of rewards for every validator pool, the validator receives its share in the form of **commission fees** for maintaining the node. As a second step, the remaining tokens are distributed among all stakes **proportionally** (including the self-stake of the validator). This means that higher stakes will receive a bigger proportion of the rewards which are attributed to the particular validator pool.

:::note
In our incentivized testnet called Snakenet, the amount of rewards received for staking your HDX tokens is estimated to be around **50% APY**.
:::

## Era points {#era-points}

Validators can earn additional rewards in proportion to the era points which they have gained in the past era. These rewards are added to the base rewards described above. Validators can earn era points by carrying out certain specific actions such as:

* producing a non-uncle block in the Relay Chain.
* producing a reference to a previously unreferenced uncle block.
* producing a referenced uncle block.

:::note
An uncle block is a Relay Chain block valid in every regard, which however has failed to become canonical. This can happen when two or more validators are block producers in a single slot, and the block produced by one validator reaches the next block producer before the others. The lagging blocks are called uncle blocks.
:::

## Tips {#tips}

Finally, validators can earn tips which are also added to the base rewards at the end of every era. Tips represent an additional transaction fee that can be optionally paid by users to give their transaction a higher priority.
