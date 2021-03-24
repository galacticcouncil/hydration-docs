---
id: staking
title: Staking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This section provides a brief introduction into how staking works in the HydraDX network. If you are not familiar with staking in a Substrate-based network, we recommend that you read this before deciding to participate.

The consensus mechanism used by HydraDX is called Nominated Proof-of-Stake (NPoS). NPoS is a variation of Proof-of-Stake and is used in Substrate-based blockchains such as Polkadot and Kusama. The two central actors in an NPoS environment are called [**validators**](#validators) and [**nominators**](#nominators). 

### Validators

Validators participate in the network by running validator nodes which provide the infrastructure allowing a Substrate-based network to operate securely. Validator nodes fulfill three functions which are of paramount importance to the consensus mechanism. In the first place, they validate the information contained in blocks, such as the identity of the parties and the subject of the contract. In the second place, validators participate in the production of new blocks based on the validity statements of other validators. In the third place, they guarantee the finality of blockchain transactions.

An important characteristic of NPoS is that not all validators participate in the validating process at the same time. Only validators in the *active validator set* perform the above-mentioned operations and earn rewards for doing so. The set of active validators is limited to a fixed number of nodes. In [HydraDX Snakenet](/snakenet) we expect this number to be around 300, scaling it up as we progress towards mainnet.

The decision which validators to elect in the set of active validators is made by following the principle of *proportional justified representation*. This principle aims to safeguard decentralization and fair representation by assigning the available slots to validators in proportion to their nominated stake. The higher the amount of staked tokens with a given validator, the higher the chance that the node will be elected in the active set. Validators which are not included in the active set are placed in a waiting list. The set of active validators is updated at the beginning of every era which provides a possible entry window for new validators.

:::note

In a Substrate-based network, time is divided in units called **eras**. In [HydraDX Snakenet](/snakenet), *1 Era = 24 hours*.

:::

Participating as a validator requires a certain level of technical knowledge for securely setting up and maintaining a validator node. Misbehavior of the validator node can be punished by slashing, resulting in an involuntary loss of funds for you and your nominators. If you believe that you have the necessary experience for running a validator node, you can refer to our [validator guide](/node_setup). Otherwise, we highly recommend that you consider participating as a nominator.

### Nominators

Nominators help secure the network by nominating validators to be elected in the active validator set. They do so by staking their HDX tokens with the validators of their choice. The nomination process does not require running and maintaining nodes, making this form of staking more accessible to everybody. Tokens which are used to nominate validators are *bonded*, meaning that they are frozen and cannot be used for other purposes. It is at any time possible to change or stop your nominations which will be reflected at the end of the current era. Nominators can also free up their tokens, however this will only become effective after a waiting period of *28 days* following the unbonding transaction.

Before nominating, you should always do your due diligence and research the credibility of the chosen validators. You can do so by checking their identity as well as historical information like era points, elected stake, rewards and slashes. At the beginning of Snakenet it might be difficult to find all this information - if you are in doubt about the choice of validators, approach us in Discord and we will share with you our community list of trusted validators.

Another point to consider when choosing a validator is the *reward commission percentage*. This represents the proportion of the rewards which will be paid out to the validator for providing its services to nominators. The lowest commission percentage is not always the best - running a performant and available node has high operational costs which can only be covered sustainably by demanding a realistic reward commission.

:::note

We strongly recommend that you spread your stake by **nominating several validators**. This enhances the decentralization of the network and increases your chances of electing a trustworthy node in the set of active validators.

Make sure that you do not nominate validators which are oversubscribed. Currently, there is a **limit of 64 nominations** for a single validator, after which it becomes oversubscribed. When the following era begins, an oversubscribed validator will only be elected using the maximum allowed number of nominations. If this occurs, the nominations with the highest stake take precedence, while the nominations with the lowest stake will be disregarded and will not earn any awards during the era.

Nominating is a more accessible form of staking however it also bears risks. Validators which breach the rules of the network may be punished by slashing, resulting in a partial loss of funds for both the validator and its nominators. This is why it is important to only nominate reputable validator nodes.

:::

After you have nominated one or more validators, you will not start earning rewards immediately. Before this can happen, the validators in question must receive sufficient nominations and staked tokens to be elected in the set of active validators. Until then, your nomination will remain inactive (for more details see previous section).

Are you interested in staking your HDX tokens by nominating validators? Check out our [nominator guide](/start_nominating) to start nominating.
