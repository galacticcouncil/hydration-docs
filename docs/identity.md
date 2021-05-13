---
id: identity
title: Set your Identity
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Account holders have the possibility to set their identity by prodiving specific information and storing it on-chain. Besides that, the identity information can optionally be submitted to the HydraDX registrars for verification. By setting and verifying their identity, validators and nominators help safeguard the trust in the network.

:::note
If you are participating as a HydraDX validator we **highly recommend** that you both set your identity and undergo the verification process. Verified validators appear more trustworthy and attract more nominations, thereby increasing their chances to be included in the set of active validators.
:::

## 01 Set identity {#01-set-identity}

To set your identity, open Polkadot/apps (connected to *HydraDX Snakenet* network) and navigate to *My accounts*. Alternatively, you can follow this link:

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts

On the accounts page, locate the account holding your bonded HDX tokens. After that, click on the three dots next to the account (on the right side) and select *Set on-chain identity*.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-1.jpg')} />

You will see a popup called *register identity*. Here, you can enter the following information:

* legal name
* email
* web address
* twitter
* riot name (in case you are using Matrix messaging)

:::note
All this information is optional - feel free to only provide the details you choose. However, if you are running a validator node, we encourage you to set your email. This would allow us to contact you in case we encounter issues with your node.
:::

In the last field of the popup, you can see the amount of HDX you need to deposit to store your identity information. You will receive this deposit back once you decide to clear your identity at a later point.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-2.jpg')} />

After filling out the information, click on *Set Identity* and sign the transaction using the Polkadot.js browser extension. Once the transaction is confirmed, your identity is set.

## 02 Submit your identity for verification {#02-verify-identity}

After you have set your identity, you can submit it to the network registrars for verification. To do so, open Polkadot/apps and navigate to *Developer* > *Extrinsics*. Alternatively, you can follow this link:

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/extrinsics

After selecting the relevant HydraDX account from the last step, you need to fill out the following information:

* **extrinsic**: identity
* **action**: requestJudgement
* **reg_index**: here you need to enter the ID of the registrar that you choose to carry out the verification.  
HydraDX has 2 registrars: Simon Kraus - HydraSik (ID: **0**) and Jimmy Tudeski - stakenode (ID: **1**).
* **max_fee**: here you need to enter the maximum fee in HDX that you are willing to pay to the registrar for the verification. Only registrars with a fee below your max_fee will be eligible to carry out the verification.

To submit your verification request, click on *Submit Transaction* and sign the transaction.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-3.jpg')} />

Please note that the process of identity verification may take some time to complete. To see the status of your request, navigate to **My accounts** and hover the section displaying your identity - you will see a popup showing the current status.

## 03 Outcome of the verification procedure {#03-verification-outcome}

After processing your verification request, the registrar will submit one of the following judgements which will become visible in your identity status:

* **Unknown** - default value, no judgement has been made yet.
* **Reasonable** - the provided information appears reasonable, however no in-depth checks were made.
* **KnownGood** - the information is correct.
* **OutOfDate** - the information was correct in the past but it is now out of date.
* **LowQuality** - the information is unprecise but it can be fixed by updating it.
* **Erroneous** - the provided information is wrong and might indicate a malicious intent.
