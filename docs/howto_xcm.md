---
id: howto_xcm
title: Cross-chain Transfer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page you will find a **step-by-step guide for performing cross-chain transfers**. 

Cross-chain transfers allow you to transport non-native assets to the HydraDX chain from other Polkadot parachains, or from Polkadot itself.

Currently, the following tokens are supported by HydraDX for cross-chain transfers:
* DOT
* DAI (from Acala, bridged via Wormhole)
* HDX

## 00 Prerequisites
Before you continue, please make sure you have sufficient amount of tokens on the destination chain for fees (ACA or DOT).

:::warning 
**Known Issue - transferring DAI to Acala**

Currently, there is a known issue on the Acala parachain in receiving cross-chain transfers from HydraDX for DAI. 

We have implemented an interim DAI faucet to provide a small amount of DAI on the Acala parachain to ensure that the DAI transferred from HydraDX is properly received. The faucet can be accessed via directly messaging the **Bridge Fee Faucet** bot located at the top of the member list on [Discord](https://discord.gg/kkmY35UxAG). Note that DMs must be enabled.

**PLEASE use the faucet prior to completing any cross-chain transfer for DAI.**
:::

## 01 Navigate to Cross-chain Transfers
[https://app.hydradx.io/#/cross-chain](https://app.hydradx.io/#/cross-chain)

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_xcm/xcm_screen.jpg')} width="500px" />
</div>


## 02 Connect Your Account
Click on `Connect wallet` and connect to your preferred Polkadot wallet. After that, select your account.

## 03 Cross-chain Transfer
* Select the source chain and the destination chain;
* Select the asset you intend to transfer and enter the amount;
* Enter the destination address. It should automatically populate with your address on that chain, but you can also change it to another address;
* Click `Transfer` and sign the transaction using your wallet.
