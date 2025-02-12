---
title: Within Polkadot
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Deposit within Polkadot

On this page you will find a **step-by-step guide for performing cross-chain transfers**. 

Cross-chain transfers allow you to transport non-native assets to the Hydration chain from other Polkadot parachains, or from Polkadot itself.

Currently, the following tokens are supported by Hydration for cross-chain transfers:
* DOT
* DAI (from Acala, bridged via Wormhole)
* ETH  (from Acala, bridged via Wormhole)
* HDX

## 00 - Prerequisites
Before you continue, please make sure you have sufficient amount of tokens on the destination chain for fees (ACA or DOT).

## 01 - Navigate to Cross-chain Transfers
[https://app.hydration.net/#/cross-chain](https://app.hydration.net/#/cross-chain)

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_xcm/xcm_screen.jpg')} width="500px" />
</div>


## 02 - Connect Your Account
Click on `Connect wallet` and connect to your preferred Polkadot wallet. After that, select your account.

## 03 - Cross-chain Transfer
* Select the source chain and the destination chain;
* Select the asset you intend to transfer and enter the amount;
* Enter the destination address. It should automatically populate with your address on that chain, but you can also change it to another address;
* Click `Transfer` and sign the transaction using your wallet.
