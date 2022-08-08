---
id: participate_in_referenda
title: Participate in Referenda
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This post provides a step-by-step guide on how to participate in referenda - voting and proposing. There are two alternative tools which you can use for this purpose - [Commonwealth.im](#cw) or [Polkadot/apps](#polkajs).

Before you decide to participate, we strongly encourage you to read through the [knowledge article](/democracy_referenda) in the Learn / Democracy section. There you will find some important details on the mechanics behind referenda.

:::caution
The HydraDX democracy module will be launched on or after **15 September 2021**. Please do not attempt any of the shown actions before that date.
:::

## Using Commonwealth.im {#cw}
### Vote in a Referendum {#cw-vote}
You can see all referenda which are open for voting by navigating to the [Referenda tab](https://commonwealth.im/hydradx/referenda) on the HydraDX Commonwealth page.

To vote on an active referendum, you need to click on it. After that, you will see a page showing all relevant details.

In the section *Cast Your Vote*, fill in the following information:

* Amount to vote - this is the amount of HDX tokens you are willing to lock in support of the referendum
* Conviction multiplier - this is the multiplier which co-determines the [weight of your vote](/democracy_referenda#referenda-votes-weighing).

After that, bring out your vote by clicking on *Vote yes* or *Vote no* and sign the transaction.

### Propose a Referendum {#cw-propose}
To propose a referendum, visit the [HydraDX Commonwealth page](https://commonwealth.im/hydradx/) and click in the top menu on *New Thread > New democracy proposal*.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/cw-proposal.jpg')} />
</div>

Fill in the information in the fields show above. The most important parameters are:
* Module
* Function
* Any additional information as specified by the function that you are proposing to be called
* Deposit - the amount of HDX tokens which you are willing to deposit in support of the proposal

In the example above, the proposal module is *balances*, and the function is *setBalance* which modifies the free and reserve balances of a given account.

To submit the proposal, click on *Send transaction* and sign using your wallet.

After submitting the proposal on-chain and signing the transaction, your proposal should appear in the [list of proposed referenda](https://commonwealth.im/hydradx/referenda).

:::caution
Every voting period, the referendum proposal with the highest backing (*seconding*) enters the voting round. As the amount of referenda grows, there is no guarantee that your proposal will ever gain sufficient seconding to enter voting. There is no option to withdraw a referendum proposal, meaning that your funds might remain locked for a longer period of time.

Malicious referendum proposals are punished. The HydraDX Council and the Technical Committee have the right to cancel any referendum which was proposed in bad faith. As a result, the deposited tokens will be burnt.
:::

## Using Polkadot/apps {#polkajs}

### Vote in a Referendum {#polkajs-vote}
You can see all referenda which are open for voting by navigating to [*Governance > Democracy*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy) in Polkadot/apps.

To vote in a referendum, click on the *Vote* button next to it.

In the popup, fill in the following information:

* Vote value - this is the amount of HDX tokens you are willing to lock in support of the referendum
* Conviction multiplier - this is the multiplier which co-determines the [weight of your vote](/democracy_referenda#referenda-votes-weighing).

After that, bring out your vote by clicking on *Vote Nay* (No) or *Vote Aye* (Yes) and sign the transaction.

### Propose a Referendum {#polkajs-propose}
Proposing a referendum via Polkadot/apps consists of two steps - submitting a preimage, and submitting the proposal on-chain.

#### 01 Submit preimage {#polkajs-propose-01}
To submit the preimage, visit Polkadot/apps and navigate to [*Governance > Democracy*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy).

After clicking on *Submit preimage*, you should see the following popup:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-preimage.jpg')} />
</div>

Fill in the information in the fields show above. The most important parameters are:
* Account from which the proposal is sent
* Proposal area
* Proposed action

In the example above, the proposal area is *balances*, and the action is *forceTransfer* of tokens from one account to another.

Before submitting the preimage and signing the transaction, please make sure to copy the preimage hash. You will need it for the next step.

#### 02 Submit proposal {#polkajs-propose-02}
To submit the referendum proposal, visit [*Governance > Democracy*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy) in Polkadot/apps.

After clicking on *Submit proposal*, you should see the following popup:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-proposal.jpg')} />
</div>

Enter the preimage hash from the previous step, and the amount of tokens you are willing to deposit for the proposal. The minimum is 100,000 HDX.

After submitting the proposal on-chain and signing the transaction, your proposal should appear in the list of proposed referenda.

:::caution
Every voting period, the referendum proposal with the highest backing (*seconding*) enters the voting round. As the amount of referenda grows, there is no guarantee that your proposal will ever gain sufficient seconding to enter voting. There is no option to withdraw a referendum proposal, meaning that your funds might remain locked for a longer period of time.

Malicious referendum proposals are punished. The HydraDX Council and the Technical Committee have the right to cancel any referendum which was proposed in bad faith. As a result, the deposited tokens will be burnt.
:::
