---
title: Request a Treasury Tip
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Community members can request HDX tips from the Hydration Treasury as a reward for their contributions to the Protocol. This guide walks you through the process of tip requests. You can find more information about the different types of activities that get rewarded in [this post](../community/spending_fw).

The process of requesting a Treasury tip consists of two steps. As a first step, contributors need to [publish their tip request](#01-publish-tip-request) in Subsquare with a description of the contribution. As a second step, the Treasury tip request must be [submitted on-chain](#02-submit-on-chain) using Polkadot/apps.

## 01 Publish in Subsquare {#01-publish-tip-request}

To safeguard transparency, all Treasury tip requests must be published as a Discussion thread on the [Hydration Subsquare page](https://hydradx.subsquare.io/discussions). 

:::note
Before opening a thread, make sure that Subsquare is linked to your HDX wallet. To do so, click on Sign-Up (first-time use) or Login (repeated use) and select the option `with Web3 address`. After selecting your HDX address in the popup, you will be asked to sign the message using your wallet.
:::

Once logged in, you need to create a new Discussion thread for your tip request. You can do so following this link: https://hydradx.subsquare.io/post/create

You can use the title of the thread to indicate the subject (tip request) and the topic of the contribution. In the body of the thread, please provide the following information:

* Period when the contribution was made
* A brief summary of the contribution
* The amount of the requested tip (in HDX)
* Time spent on the contribution (in hours)
* If appropriate, provide more detailed information such as the relevance of the contribution to Hydration and a link to the PR (in the case of technical contributions)

Before posting the thread, please make sure that the tab `Treasury` is selected to indicate the nature of the Discussion.

For reference, you can take a look at [this example tip request](https://hydradx.subsquare.io/post/192).

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/post-thread.jpg')} />
</div>

Click on `Create` to publish your Discussion thread. Immediately after that, it should become visible in the [list of discussions](https://hydradx.subsquare.io/discussions).

## 02 Submit On-Chain {#02-submit-on-chain}

After publishing your Treasury tip request, you need to submit it on-chain. For this purpose, your wallet needs to hold a small amount of HDX to cover the transaction fees. If you currently do not hold any HDX, you do not need to execute this step - someone else will submit your tip request on-chain for you.

Treasury tip requests can be submitted on-chain with Polkadot/apps using the following link: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/treasury/tips

To submit a new tip request, click on `Propose tip` and provide the following information:

* **submit with account** - select the account which will sign the transaction for submitting the tip request on-chain. This account needs to hold a small amount of HDX for transaction costs.
* **beneficiary** - select or enter the address of the account which will receive the Treasury tip. This account must correspond with the account which opened the Subsquare thread.
* **tip reason** - provide a URL to the Subsquare thread.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/submit-on-chain.jpg')} />
</div>

To submit the tip request, click on *Propose tip* and sign the transaction. 

Once the transaction is confirmed, you should see the tip request on the overview page.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/tip-requests.jpg')} />
</div>
