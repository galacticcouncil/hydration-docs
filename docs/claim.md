---
id: claim
title: Claim your HDX
---

import useBaseUrl from '@docusaurus/useBaseUrl';

For claiming the HDX tokens from the xHDX token representation you'll need your original wallet that you hold the tokens with on the Ethereum side, the polkadot.js extension and a few minutes of your time.

## Preparation

Make sure your browser supports polkadot.js extension. This is the only official way right now to use your accounts with HydraDX. It's a good idea to have the Ethereum wallet ready for signing a message before starting the claim process but we tried to make it as easy as possible. If you have [polkadot.js extension](https://polkadot.js.org/extension/) and metamask you should be ready to go.

## Claim process

Navigate to https://claim.hydradx.io, the app will check for all the necessary pre-requisites for claiming and should guide you through the process. Yo will be able to claim from metamask or external wallet like MEW that supports signing a message.

### 00 Setup

You will be prompted from polkadot.js extension to authorize the usage with the claim site. Make sure the prompt says CLAIM.HYDRADX.IO and https://claim.hydradx.io or you can be a victim of phishing attack!
<img alt="authorize" src={useBaseUrl('/claim/authorize.png')} />


After authorization, you will be prompted to update metadata for the polkadot.js extension. This means that polkadot.js will be able to create HydraDX specific addresses which are required to complete the claim process in the UI.
<img alt="authorize" src={useBaseUrl('/claim/metadata.png')} />


### 01 Select ETH address

In the first step, you'll need to select an account you want to claim the tokens from. This can be done either by connecting to Metamask or by writing your address in the input box. In the second case, you will need to sign message yourself later.

### 02 Create HDX address

You will need to select an address for claiming HDX. For security reasons, this address will need to be unique to the HydraDX Stakenet. If you have approved the metadata upgrade in the first step, you will be able to create HydraDX address in the Polkadot.js extension. Please do so now.

:::warning 
Never give your seed phrase to anybody. Back it up and store it in a safe place. It is the only way you can recover your account and if you lose or leak it, your funds will be compromised.
:::

<img alt="authorize" src={useBaseUrl('/claim/create-account.png')} />

Once you have your address created, you can select it in the claims UI and continue with the claim process.

### 03 Sign

Depending on the option you chose in the first step you will be presented with one of the two options here.

1. Sign a message through metamask.
  
    If you have connected your metamask, you will be prompted to sign a message when you click on the sign button. Follow the instructions in metamask to sign the message.

2. Sign a message through external wallet.

    If you have typed in your ethereum address you will need to sign a message through external wallet that you used to buy the tokens and own a private key to. Once you have signed your message, paste the signed message into the response field.

### 04 Claim

Once signed, you will need to send a transaction and sign it with your Polkadot.js extension. When you do this you officialy become HDX owner.

### 05 What's next?

In the next few days, we'll prepare a guide on how to use your tokens to run a validator node or nominate. There's nothing else that you should do right now regarding tokens. What you can do is to jump in and help us with stuff including helping others with the claim, improving this guide or tackling some issues on the [github](https://github.com/galacticcouncil).