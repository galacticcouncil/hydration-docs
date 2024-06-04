---
id: create_account
title: Create a new HDX Account
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The process of creating a new HDX Account consists of three simple steps.

## 01 Install Polkadot.js {#01-install-polkadot-js}

In order to create and manage your HDX wallet, you need to install the [Polkadot.js browser extension](https://polkadot.js.org/extension/).

## 02 Upgrade metadata {#02-upgrade-metadata}

After installing the Polkadot.js browser extension, you should make sure that it has been updated with the latest chain metadata. For this purpose, you can visit the following link and update your metadata, if prompted:

https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/settings/metadata

## 03 Create your HDX Account {#03-create-hdx-account}

To create a new HDX address, open the Polkadot.js browser extension and click on `+` > `Create new account`. 

You will be displayed a 12-word mnemonic phrase which can be used to recover your account. Make sure that you backup your seed phrase in a secure location. Click on `Next step` and fill in the following information:

* **Network**: Please select `Hydration Snakenet`
* **Descriptive name of the account**
* **Password**

Your account will be created after clicking `Add the account with the generated seed`.

<div style={{textAlign: 'center'}}>
  <img alt="create-account" src={useBaseUrl('/create-account/create-account.png')} width="350px" />
</div>

:::warning 

Make sure to backup your recovery seed phrase by storing it in a secure location. Never share your seed phrase with anybody. The seed phrase can be used to gain access to your account. If you lose it or leak it, you might also lose all the HDX stored in your account. Please note that all HDX balances are locked until mainnet starts, so you need to make sure that you keep the account holding your tokens secure until then.

:::
