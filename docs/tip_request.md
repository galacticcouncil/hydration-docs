---
id: tip_request
title: Request a Treasury Tip
---

import useBaseUrl from '@docusaurus/useBaseUrl';

With the launch of the [HydraDX New Deal incentives program](#link-to-new-deal), community members can request HDX tips from the Treasury as a reward for their contributions. This guide walks you through the process of tip requests. You can find more information about the different types of activities that get rewarded in [this post](#link-to-bounties).

The process of requesting a Treasury tip consists of two steps. In the first step, contributors need to publish their tip request in Commonwealth.io with a description of the contribution. As a second step, the Treasury tip request must be submitted on-chain using Polkadot/apps.

## 01 Publish the Tip Request in Commonwealth.io {#01-publish-tip-request}

To safeguard transparency, all Treasury tip requests must be published in a thread on the [HydraDX Commonwealth page](https://commonwealth.im/hydradx). Before opening a thread, you need to link your HydraDX wallet to Commonwealth.io: Click *Log in* (top right corner) and select *Connect with wallet > polkadot-js*.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/login.jpg')} width="300px" />
</div>

After selecting your address in the popup, you will be asked to sign the message using your wallet and to set a display name for this wallet.

Once logged in, you need to create a new thread for your tip request. For this purpose, navigate to the top-right part of the page and click on *New thread > New thread*. You can also directly use this link: https://commonwealth.im/hydradx/new/thread.

Make sure to indicate in the title that the thread is about a tip request. In the body of the thread, please provide the following information:

* Period when the contribution was made
* A brief summary of the contribution
* The amount of the requested tip (in HDX)
* Time spent on the contribution (in hours)
* If needed, a more detailed description about the relevance of the contribution to HydraDX

For reference, you can take a look at [this tip request](https://commonwealth.im/hydradx/proposal/discussion/1165-tip-request-add-documentation-for-staking).

:::note

Nominators and validators who overbonded their HDX and got "stuck" can request a Treasury tip of 1 HDX which will allow them to unbond some of their tokens. If this applies to your case, please create a Commonwealth thread following [this example](https://commonwealth.im/hydradx/proposal/discussion/1166-tip-request-overbonded-staker) and proceed with the next step below.

:::

## 02 Submit the Tip Request On-Chain {#02-submit-on-chain}

After publishing your Treasury tip request, you need to submit it on-chain. You can do so with Polkadot/apps under the following link: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/treasury/tips.

To submit your tip request, click on *Propose tip* and provide the following information:

* **submit with account** - select the account which will sign the transaction for submitting the tip request on-chain. This account needs to hold a small amount of HDX for transaction costs.
* **beneficiary** - select or enter the address of the account which will receive the Treasury tip. This account must be the same as the account which opened the Commonwealth thread.
* **tip reason** - provide a URL to the Commonwealth thread.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/submit-on-chain.jpg')} />
</div>

To submit the tip request, click on *Propose tip* and sign the transaction. 

Once the transaction is confirmed, you should see your tip request on the overview page.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/tip-requests.jpg')} />
</div>

