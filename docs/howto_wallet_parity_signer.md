---
id: howto_wallet_parity_signer
title: Hardware Wallet
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This guide presents a more secure way to manage your Substrate private keys - by keeping them offline on cold storage.

[Parity Signer](https://www.parity.io/technologies/signer/) is a mobile app which turns your iOS or Android device into a dedicated hardware wallet for Polkadot, Kusama, and any other Substrate-based chain. It allows you to keep your private keys offline while still being able to conveniently sign transactions in an air-gapped way using QR codes.

## Start clean
Before installing Parity Signer, make sure that your phone is in a clean state. If it has been used, perform a factory reset and do not install any other apps besides Parity Signer.

## Install
Install Parity Signer from the official app store for your device (iOS / Android).  
Make sure that the application you are downloading has been published by Parity Technologies.

## Go Offline
Remove any internet access from your device (forever).

## Create Account
To create a new account, follow the steps below.

### 01 Add Seed
Open the Parity Signer app and select `New seed`.
<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/parity_signer_1.jpg')} width="350px" />
</div>

### 02 Back Up your Recovery Phrase
The app will display your recover phrase. Write it down and store it in a safe place.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/parity_signer_2.jpg')} width="350px" />
</div>

After completing this, you are all set to go! You can use your phone passcode or authentication method (fingerprint / face id) in Parity Signer.

:::danger
Stay safe!

Anyone with your seed phrase can access your funds, and there is no recourse for someone stealing your seed phrase. 

To protect your seed phrase, consider the following tips:
* Never store your seed phrase as a digital file on any device.
* Always write down your seed phrase with a pen and paper.
* Store the paper with your seed phrase on it somewhere safe.
* Never give your seed phrase to anybody, including support staff.
:::

### 03 Connect Parity Signer to Polkadot.js/apps
Optionally, you can add your Parity Signer account into the Polkadot.js browser extension which will allow you to view your balances on the [Polkadot.js/apps accounts page](https://polkadot.js.org/apps/#/accounts).

To add your account, open the Polkadot.js browser extension, click on `+` and select `Attach external QR-signer account`.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/parity_signer_3.jpg')} width="350px" />
</div>
