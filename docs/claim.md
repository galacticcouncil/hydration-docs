---
id: claim
title: Claim your HDX
---

For claiming the HDX tokens from the xHDX token representation you'll need your original wallet that you hold the tokens with on the Ethereum side, the polkadot.js extension and a few minutes of your time.

## Preparation

Make sure your browser supports polkadot.js extension. This is the only official way right now to use your accounts with HydraDX. It's a good idea to have the Ethereum wallet ready for signing a message before starting the claim process but we tried to make it as easy as possible. If you have polkadot.js extension and metamask you should be ready to go.

TODO: LINKS

## Claim process

Navigate to https://claims.hydradx.io, the app will check for all the necessary pre-requisites for claiming and should guide you through the process. Yo will be able to claim from metamask or external wallet like MEW that supports signing a message.

### 01 Select ETH address

In the first step, you'll need to select an account you want to claim the tokens from. This can be done either by connecting to Metamask or by writing your address in the input box. In the second case, you will need to sign message yourself.

### 02 Create HDX address

You will need to select an address for claiming HDX. For security reasons, this address will need to be unique to the HydraDX Stakenet. The Polkadot.js extension will prompt you to update your wallet metadata to be able to create HydraDX addresses. Once you confirm this, you will be able to create new address. 

TODO: Visual steps

:::warning 
Never give your seed phrase to anybody. Back it up and store it in a safe place. It is the only way you can recover your account and if you lose or leak it, your funds will be compromised.
:::

Once you have your address created, you can select it in the claims UI and continue with the claim process.

### 03 Sign

Depending on the option you chose in the first step you will be prompted 

1. to sign a message through metamask
TODO: visual

2. to sign a message through external wallet
TODO: visual

### 04 Claim

Once signed, you will need to send a transaction and sign it with your Polkadot.js extension. When you do this, you should see your HDX balance on the claims page and also in the Polkadot.js apps TODO:LINK page.