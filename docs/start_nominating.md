---
id: start_nominating
title: Become a nominator
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By becoming a nominator, you stake some of your HDX tokens to help secure the HydraDX network and to earn rewards. Unlike running a validator node, the process of nominating does not require advanced technical skills, making it the recommended choice for anyone who is not fully confident with becoming a validator.

When nominating, nominators appoint their stake to a validator of their choice. By doing so, nominators elect the active set of validators and receive rewards for their participation. The amount of awards you receive as a nominator depends on the reward commission percentage of the chosen validator - the higher the reward commission of the validator, the less rewards you will be receiving for your stake.

:::warning

Nominating is a more accessible form of participation in the staking process, however it also carries a certain degree of risk. If the validator you have nominated misbehaves (e.g. fails to maintain the required uptime), slashing can occur which may lead to a partial involuntary loss of the funds you have staked. We highly recommend that you do your due diligence before nominating a validator.

:::

## 00 Staking UI

To access the staking interface, you first need to open the Polkadot/apps, connect it to one of the [public HydraDX RPC nodes](/polkadotjs_apps_public) and make sure that you can see your account [balance](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts)

:::note

Are you still in possession of xHDX tokens that you bought during the Balancer LBP event? You first need to [claim your HDX](/claim) before continuing.

:::

After verifying that you can see your HDX balance, you can navigate to the Staking UI:

*Network* > *Staking*

The Staking UI has the following menu tabs:

* **Staking overview**: here, you will find a list of all active validators and some basic information about each validator, such as the amount of HDX staked on the node, the amount of the validator's own stake, and how much reward commission is charged. Furthermore, you can see the number of era points earned by each validator in the current era and the number of the last block produced by the validator.
* **Account actions**: here, you can stake and nominate.
* **Payouts**: here, you can claim your staking rewards.
* **Targets**: here, you can estimate your earnings. This is a good place to start when picking a validator node to nominate.
* **Waiting**: here, you can find the waiting queue where inactive validators are placed before being included in the active validator set. A validator will remain in the waiting queue until it has received a sufficient amount of staked HDX to enter the active validator set.
* **Validator stats**: here, you can query a validator's stash address to see detailed historical information about earned era points, elected stake, rewards, and slashes. We highly recommend that you study this information before trusting a validator with your nomination.

## 01 Bond HDX tokens

:::warning

Bonded HDX tokens are at stake for guaranteeing the security of the network. Improper behavior of the validator node you have nominated may be punished by slashing which can lead to an involuntary loss of your funds. We strongly recommend that you do your due diligence when selecting which validator to nominate.

:::

To bond HDX tokens, navigate to *Account actions* in the Staking UI:

*Network* > *Staking* > *Account actions* > *+ Stash*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-1.png')} />
</div>

After clicking the *Stash* button, you should see the bonding preferences with four editable fields:
* **stash account**: the account holding the majority of your HDX tokens. HDX will be staked from this account.
* **controller account**: the account holding a smaller portion of HDX needed to cover the fees associated with starting and stopping the process of nominating.
* **value bonded**: the amount of HDX you are bonding. Do not bond all HDX that you have - instead, leave some to cover the transaction fees which occur later.
* **payment destination**: the account to which the staking rewards will be sent.

:::warning

Do not bond all your available HDX tokens. Leave a small reserve for covering the transactions fees. If you bond all HDX tokens that you have, you may not be able to sign the transaction for starting the nomination process.

:::

After adjusting the bonding preferences, click **Bond** and sign transaction to complete the bonding process.

:::caution

For security reasons, it is not recommended to have the same Stash and Controller accounts. However, since transfers are disabled on Snakenet, it is currently not possible to use separate accounts. We highly recommend that you switch to separate Stash and Controller accounts as soon as this becomes possible in future.

:::

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-2.png')} />
</div>

## 02 Nominate a validator

After bonding HDX, you can now nominate a validator. Before proceeding, you should do your due diligence and decide which validators you would like to nominate based on their (past) performance. To do so, refer to the information in the Staking UI [discussed above](#00-staking-ui).

:::note

HydraDX Snakenet has a **limit of 64 nominators per validating node**. When selecting a node to nominate, make sure that the validator has not reached the maximum amount of nominations, otherwise your nomination will be invalid and you will not receive rewards for your stake. The number of nominations for every validator can be found in the *Waiting* menu tab in the Staking UI.

:::

To nominate one or more validators, navigate to:

*Network* > *Staking* > *Account actions* > *Nominate* (button next to your bonded HDX)

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-1.png')} />
</div>

After clicking on the *Nominate* button you should see a popup called *nominate validators*. Here you can select one or more validators to nominate from the list of available validators. It is highly recommended to nominate multiple validators to prevent being inactive if you don't get a spot in one validator (e.g. the validator is overcrowded or not elected into the active validator set). You can nominate up to 16 validators. In every era just one of your nominations can be active, you cannot be chosen by multiple validators simultaneously. Your stake will be automatically assigned to one of your selected validators in a way to maximize decentralization and profits. You just chose the amount of bonded HDX and the validators you trust.

To nominate the selected validators, click _Nominate_ and sign the transaction.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>


## 03 Check the status of your nominations

After completing the nominating process, your nominations will be inactive for the remainder of the current era. Once the following era begins, your nominations will become active, provided that at least one of the validator nodes you have nominated is included in the active set of validators and is not overcrowded leaving you out. If all of your validators remain in the waiting queue, your respective nominations will remain inactive too and you will not earn any rewards for this era.

To check the status of your nominations, navigate to:

*Network* > *Staking* > *Account actions*

You can see your inactive nominations under *Waiting nominations*:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-3.png')} />
</div>

Once a nomination becomes active, you should find it in the list of *Active nominations*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-4.png')} />
</div>

:::note

Make sure that you revisit your nominations once in a while. It is possible that some of your validators change their commission percentage which will have a negative impact on your rewards. By checking the status of your nominations frequently you will be able to react by updating the list of your nominated validators.

:::

Thank you for supporting HydraDX by becoming a Snakenet nominator! 🎉
