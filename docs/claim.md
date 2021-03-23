---
id: claim
title: Claim your HDX
---

import useBaseUrl from '@docusaurus/useBaseUrl';

For claiming the HDX tokens from the xHDX ERC-20 token representation, you'll need your original wallet that you hold the tokens with on the Ethereum side, the polkadot.js browser extension, and a few minutes of your time.

## Preparation

Make sure your browser supports the polkadot.js extension. Polkadot.js extension is the only official way to use your accounts with HydraDX right now. It's a good idea to have the Ethereum wallet ready for signing a message before starting the claim process, but we tried to make it as easy as possible. If you have [polkadot.js extension](https://polkadot.js.org/extension/) and metamask up and running, you should be ready to go.

## Claim process

Navigate to https://claim.hydradx.io, the app will check for all the necessary pre-requisites for claiming and should guide you through the process. You will be able to claim from metamask or external wallet like MEW that supports signing a message. 

If your xHDX are stored in either Coinbase Wallet or Trust Wallet you will need some workaround as they don't support signing a message.  
<u>Metamask</u>: If you open the Metamask extension for the first time you can import a wallet by seed phrase. You will find the seed phrase in the wallet app settings as "Recovery phrase".  
<u>MEW (MyEtherWallet)</u>: Go to the [MEW Access My Wallet site](https://www.myetherwallet.com/access-my-wallet). If you're using Coinbase Wallet you could click on MEW wallet and chose the WalletLink connecting option and pair it. WalletLink can be found in the settings of the Coinbase Wallet app.  
The other approach works with both wallets: chose "Software" on the MEW Access site and continue with "Mnemonic Phrase". There you'll be able to enter your seed phrase just like described with Metamask above.

### 00 Setup

You will be prompted from polkadot.js extension to authorize the usage with the claim site. Make sure the prompt says CLAIM.HYDRADX.IO and https://claim.hydradx.io, otherwise you could be a victim of a phishing attack!
<img alt="authorize" src={useBaseUrl('/claim/authorize.png')} />


After authorization, you will be prompted to update metadata for the polkadot.js extension. This means that polkadot.js will be able to create HydraDX specific addresses which are required to complete the claim process in the UI.
<img alt="authorize" src={useBaseUrl('/claim/metadata.png')} />


### 01 Select ETH address

In the first step, you'll need to select an account you want to claim the tokens from. This can be done either by connecting to Metamask or by entering your address into the input box. In the second case you will need to sign the message manually later.

### 02 Create HDX address

You will need to select an address for claiming HDX. If you have approved the metadata upgrade in the first step, you will be able to create a HydraDX address in the Polkadot.js extension. Please do so now.

:::warning 
Never give your seed phrase to anybody. Back it up and store it in a safe place. It is the only way you can recover your account and if you lose or leak it, your funds will be compromised. Please note that you need to keep this wallet until the mainnet starts as the balances will be locked and if you lose access to the wallet you will also lose your HDX. Keep it safe please.
:::

<img alt="authorize" src={useBaseUrl('/claim/create-account.png')} />

Once you have your address created, you can select it in the claims UI and continue with the claim process.

### 03 Sign

:::info
Because of the properties of the [ss58](https://polkadot.js.org/docs/keyring/start/ss58/) address format that polkadot chains use to display addresses in a human readable way, there will be a mismatch between the address you will be signing in the message and the one you will see in the polkadot.js extension. 

What you see in the message box is the actual public key of your address. While in the extension you will see human readable representation of your address.

This is completely safe as we are checking the address you are signing in the message against the address of the account you are using to do the actual claim. In this way, it's not possible to claim to any other address than the one you will use in the last step.
:::

Depending on the option you chose in the first step you will be presented with one of the two options here.

1. Sign the message through Metamask.
  
    If you have connected your Metamask, you will be prompted to sign a message when you click on the sign button. Follow the instructions in Metamask to sign the message.

2. Sign the message through external wallet.

    If you have entered your Ethereum address manually you will need to sign the message through the external wallet you used to buy the tokens and own the private key to. Once you have signed your message, paste the signature of the signed message (starting with "0x") into the response field.

### 04 Claim

Once signed, you will need to send a transaction and sign it with your Polkadot.js extension. When you did this you officially became HDX owner. You can check your HDX balance over at [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts). It is not displayed in the browser extension.

### 05 What's next?

In the next few days, we'll prepare a guide on how to use your tokens to run a validator node or nominate a validator to stake them. There's nothing else you can't do right now with your tokens.  
You will still see your xHDX balance in your old wallet. As they are locked there forever you could just leave them visible as an "early-adopter badge" or you could hide the token from your wallet.  
The HDX tokens are also locked until the start of the mainnet. You can't transfer, trade or swap them right now.  
What you can do is to jump in and help us with stuff including helping others with the claim, improving this guide or tackling some issues at the [github](https://github.com/galacticcouncil).
