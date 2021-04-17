---
id: identity
title: Set your Identity
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Account holders have the possibility to set their identity by prodiving specific information and storing it on-chain. Besides that, the identity information can optionally be submitted to the HydraDX registrars for verification. By setting and verifying their identity, validators and nominators help safeguard the trust in the network.

:::note
If you are participating as a HydraDX validator we **highly recommend** that you both set your identity and undergo the verification process. Verified validators appear more trustworthy and attract more nominations, thereby increasing their chances to be included in the set of active validators.
:::

## 01 Set identity {#set-identity}

To set your identity, open Polkadot/apps (connected to *HydraDX Snakenet* network) and navigate to *My accounts*.  
Alternatively, you can use this link:

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts

On the accounts page, locate the account holding your bonded HDX tokens (if you are validator - your controller account). After that, click on the three dots to the right of the account and select *Set on-chain identity*.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-1.jpg')} />

You will see a popup called *register identity*. Here, you can enter the following information:

* legal name
* email
* web address
* twitter
* riot name (in case you are using Element messaging)

In the last field of the popup you will see the amount of HDX you need to deposit to register your identity. You will receive this deposit back once you decide to clear your identity at a later point.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-2.jpg')} />

After filling out the information, click on *Set Identity* and sign the transaction using the Polkadot.js browser extension. Once the transaction is confirmed, your identity is set.

## 02 Submit your identity for verification {#verify-identity}

After you have set your identity, you can submit it to the network registrars for verification. To do so, navigate to *Extrinsics* in the *Developer* menu or click on this link:

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/extrinsics

After selecting the relevant HydraDX account from the last step, you need to fill out the following information:

* **extrinsic**: identity
* **action**: requestJudgment
* **reg_index**: here you need to enter the ID of the registrar that you choose to carry out the verification.  
HydraDX has 2 validators: Sik (ID: **0**) and Jimmy (ID: **1**).
* **max_fee**: here you need to enter the max fee in HDX that you are willing to pay to the registrar for the verification. Only registrars with a fee below your max_fee will be eligible to carry out the verification.

To submit your verification request, click on *Submit Transaction* and sign the transaction.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-3.jpg')} />

Please note that the process of identity verification may take some time to complete. To see the status of your request, navigate to **My accounts** and hover the section displaying your identity - you will see a popup showing the current status.
