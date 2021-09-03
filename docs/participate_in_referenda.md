---
id: participate_in_referenda
title: Participate in Referenda
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This post provides a step-by-step guide on how to participate in referenda - [voting](#vote) and [proposing](#propose). The HydraDX democracy functions are supported by [Commonwealth.im](https://commonwealth.im/hydradx/).

Before you decide to participate, we strongly encourage you to read through the [knowledge article](/democracy_referenda) in the Learn / Democracy section. There you will find some important details on the mechanics behind referenda.

:::caution
The HydraDX democracy module will be launched on or after **15 September 2021**. Please do not attempt any of the shown actions before that date.
:::

## Vote in a Referendum {#vote}
You can see all referenda which are open for voting by navigating to the [Referenda tab](https://commonwealth.im/hydradx/referenda) on the HydraDX Commonwealth page.

To vote on an active referendum, you need to click on it. After that, you will see a page showing all relevant details.

In the section *Cast Your Vote*, fill in the following information:

* Amount to vote - this is the amount of HDX tokens you are willing to lock in support of the referendum
* Conviction multiplier - this is the multiplier which co-determines the [weight of your vote](/democracy_referenda#referenda-votes-weighing).

After that, bring out your vote by clicking on *Vote yes* or *Vote no* and sign the transaction.

## Propose a Referendum {#propose}
To propose a referendum, visit the [HydraDX Commonwealth page](https://commonwealth.im/hydradx/) and click in the top menu on *New Thread > New democracy proposal*.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/proposal.jpg')} />
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
