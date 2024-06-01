---
id: howto_wallet_subwallet
title: SubWallet
---

# Connecting SubWallet to HydraDX

SubWallet is the comprehensive non-custodial wallet solution for Polkadot, Substrate & Ethereum ecosystems. Built on top of Polkadot {.js}, SubWallet focuses on improving UX & UI. We envision a crypto wallet as a Web3 multiverse gateway through which users can enjoy multi-chain services with utmost ease and absolute security.
This guide will show you how to manage your accounts, tokens, and connect to HydraDX using SubWallet!

## Install SubWallet

SubWallet is available on a range of platforms for you to choose from:

1. A **browser extension** which is available on [Google Chrome](https://chromewebstore.sgoogle.com/detail/subwallet-polkadot-wallet/onhogfjeacnfoofkfgppdlbmlmnplgbn), [Brave](https://chromewebstore.google.com/detail/subwallet-polkadot-wallet/onhogfjeacnfoofkfgppdlbmlmnplgbn), [MS Edge](https://chromewebstore.google.com/detail/subwallet-polkadot-wallet/onhogfjeacnfoofkfgppdlbmlmnplgbn) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/subwallet/).

2. A **mobile app** which is available on the [App Store](https://apps.apple.com/us/app/subwallet-polkadot-wallet/id1633050285) and [Google Play Store](https://play.google.com/store/apps/details?id=app.subwallet.mobile).

3. A web dashboard that does not require any downloading and can be accessed through https://web.subwallet.app

For this tutorial, we will walk you through the process of creating a wallet using the browser extension.

## Setup an account

Once you have installed the extension, you'll have the option to **create**, **import** or **attach an account** ([Ledger](https://docs.subwallet.app/main/extension-user-guide/account-management/connect-ledger-device), [Keystone](https://docs.subwallet.app/main/extension-user-guide/account-management/connect-keystone-device), [Polkadot Vault](https://docs.subwallet.app/main/extension-user-guide/account-management/attach-a-polkadot-vault-previously-parity-signer-account) and [Watch-only account](https://docs.subwallet.app/main/extension-user-guide/account-management/attach-a-watch-only-account))

![Browser extension create screen](https://cdn.discordapp.com/attachments/1192753929533009923/1192754114313076736/subwallet-1.png?ex=65aa39d5&is=6597c4d5&hm=ebd1394396b3e580d2bf0cc245ea7a9dd94baf119cb49219bfdb69513f9f0b39&)

:::note

HydraDX is a Substrate-native chain, so you will only be able to view and interact with HydraDX by creating or importing a Substrate account.

:::

### Create a new account

To create a new account, click on **Create a new account**.

![Create new account](https://cdn.discordapp.com/attachments/1192753929533009923/1192754114568933416/subwallet-2.png?ex=65aa39d5&is=6597c4d5&hm=885176cc5b9abd59b92801eb9dd7de1e2146598694de6f9e339982b186031aa0&)

You will then need to create your master password which keeps all of your accounts secure. Once you have entered the password and then confirmed it, click on **Continue**.

![Master password](https://cdn.discordapp.com/attachments/1192753929533009923/1192754114795417651/subwallet-3.png?ex=65aa39d5&is=6597c4d5&hm=f6da6c0477799a23ce844db2d30c074e504eee938f678b5383d17a500d4bd7ee&)

:::note

For each seed phrase created with SubWallet, you would have a Substrate account and an Ethereum account.
Substrate account would display your assets on Substrate-native blockchains (such as Polkadot, Kusama), while Ethereum account would display your assets on Ethereum chains (such as Moonbeam).

:::

Now you will be shown a seed phrase together with the option to back it up. Once you have saved and stored it in a safe place, choose **I have kept it somewhere safe**.

![Create new seed phrase](https://cdn.discordapp.com/attachments/1192753929533009923/1192754115055468604/subwallet-4.png?ex=65aa39d5&is=6597c4d5&hm=cd49a56e7602a596984152ef1286a08b176f3b59ded44b314e73cc78ef9f8102&)

:::caution

You should never share your seed phrase (mnemonic) or private key with anyone. This gives them direct access to your funds.

:::

You have finished creating a new account! If you want to create additional accounts, follow these steps:

1. Choose the accounts tab on the top of the extension.

![Create additional accounts 1](https://cdn.discordapp.com/attachments/1192753929533009923/1192754115269382194/subwallet-5.png?ex=65aa39d5&is=6597c4d5&hm=cf6696db3edb5330180cc9a960f3712e9e7091bc2ef4814489599865a07f38f8&)

1. Click on **Create a new account** and repeat the steps above.

![Create additional accounts 2](https://cdn.discordapp.com/attachments/1192753929533009923/1192754115521032192/subwallet-6.png?ex=65aa39d5&is=6597c4d5&hm=5daf7eb1ef73f0347680910253e9f830b4d35cb0a770e5d88d18d54ca542dff4&)

### Import an existing account

To import an account that you have already created, choose **Import an account**.

:::note

HydraDX is a Substrate-native chain, so you will only be able to view and interact with HydraDX by creating or importing a Substrate account.

:::

![SubWallet browser extension home screen](https://cdn.discordapp.com/attachments/1192753929533009923/1192754115764305990/subwallet-7.png?ex=65aa39d5&is=6597c4d5&hm=94ce618771cf5c73a17f7cf9dc871f2ef1f7fd58b84b33a212818e1b430d53a0&)

Then you can choose your preferred method of importing.

![Methods of importing](https://cdn.discordapp.com/attachments/1192753929533009923/1192754116020162650/subwallet-8.png?ex=65aa39d5&is=6597c4d5&hm=adefdc2ea9d6e932b48f02f08126463427c329083d4d4eb7d8db2171a617a29d&)

After you have chosen a method, you will be prompted to create a master password. Enter your password and click on **Continue**.

![Master password](https://cdn.discordapp.com/attachments/1192753929533009923/1192754114795417651/subwallet-3.png?ex=65aa39d5&is=6597c4d5&hm=f6da6c0477799a23ce844db2d30c074e504eee938f678b5383d17a500d4bd7ee&)

:::caution

Please note that SubWallet is non-custodial, so you would be the only person who knows your password; we cannot help you restore your password once it is lost. Please make sure that your password is well-kept.

:::

#### Using seed phrase

You could choose between importing either a Substrate account or Ethereum account, or both. After choosing, click on **Import account**

![Methods of importing](https://cdn.discordapp.com/attachments/1192753929533009923/1192754116271812648/subwallet-9.png?ex=65aa39d5&is=6597c4d5&hm=1c7f2459940284527e2d23884e1d4c221e6ac0d4780ce144f7cef31abf702fa2&)

Enter your seed phrase in the text boxes. You can use either a 12-word seed phrase or a 24-word seed phrase to import your account. Click on **Import account** and your account has been imported!

![Import using seed phrase](https://cdn.discordapp.com/attachments/1192753929533009923/1192754114069803078/subwallet-10.png?ex=65aa39d5&is=6597c4d5&hm=4dcd4e0663e5962973b671b995ac367d10d1323278f6028874cd379d1a8c6ee9&)

:::important

In some cases, if you import an account from a seed phrase, problems can arise if the seed phrase of your original wallet is not compatible with SubWallet. **Trust Wallet** and **Safepal** are among the wallets not compatible with us.

:::

#### Using Polkadot.js JSON file

You can import a Polkadot.js account after exporting the JSON backup file. Click on the **Import from Polkadot.js** field to upload a file from your device, or drag and drop your JSON file into the field.

![Upload JSON file](https://cdn.discordapp.com/attachments/1192753929533009923/1192754151160041502/subwallet-11.png?ex=65aa39dd&is=6597c4dd&hm=d7fe7d31bb78b41c7e20cd8756af419d4b9225c43cc6e37da3bddcbefdf797f5&)

You will then need to enter your JSON file password (created when you set up the wallet for the first time) and click **Import by JSON file**.

![JSON file password](https://cdn.discordapp.com/attachments/1192753929533009923/1192754151424270336/subwallet-12.png?ex=65aa39de&is=6597c4de&hm=644d5092b188608d9f067b385c82b3335238df1d1a03a2725f8c68467d7015a0&)

:::note

If you want to import multiple accounts simultaneously from a JSON file, you are required to enter the password for each account you want to import.

:::

#### Using MetaMask private key

Once you have exported your private key, enter it into the text box then click on **Import account**.

![Import with private key](https://cdn.discordapp.com/attachments/1192753929533009923/1192757228751573074/subwallet-36.png?ex=65aa3cbb&is=6597c7bb&hm=06d080d57766904bdcefb4cafe4430ff550fe66bfee2a9fc80c432d4a016a90e&)

#### Using QR code

![Import with private key](https://cdn.discordapp.com/attachments/1192753929533009923/1192754151696891994/subwallet-13.png?ex=65aa39de&is=6597c4de&hm=c172dc62c5fb457dd8d39c93d64a8d184b255e8c5fb0c8eb5ce25de016589dec&)

Click on **Scan QR**. If you have not enabled camera access yet, a message will show up prompting you to **Go to settings**.

![Import with QR Code](https://cdn.discordapp.com/attachments/1192753929533009923/1192754151952764989/subwallet-14.png?ex=65aa39de&is=6597c4de&hm=9ae6003e1b5d0fa248e7e59ed456885fd00943bc18e185ca537e7062902729be&)

On the settings page, toggle on **Camera access for QR** then head back to the QR page, click on **Scan QR** and scan your accounts' QR code. After the successful import of your account by QR code, you will be directed to the Homepage.

![Enable camera access](https://cdn.discordapp.com/attachments/1192753929533009923/1192754152246354050/subwallet-15.png?ex=65aa39de&is=6597c4de&hm=dc7ce3c31be3ef1dd0f285860328f6197f71d07b2089f97ac1b0692015cc8cc0&)

#### Import additional accounts

You have finished importing your account! If you want to import additional accounts, follow these steps:

1. Choose the accounts tab on the top of the extension.

![Create additional accounts 1](https://cdn.discordapp.com/attachments/1192753929533009923/1192754115269382194/subwallet-5.png?ex=65aa39d5&is=6597c4d5&hm=cf6696db3edb5330180cc9a960f3712e9e7091bc2ef4814489599865a07f38f8&)

1. Click on the **Import** icon and repeat the steps above.

![Create additional accounts 2](https://cdn.discordapp.com/attachments/1192753929533009923/1192754152531558450/subwallet-16.png?ex=65aa39de&is=6597c4de&hm=c61d1d2a63cbc40a4d57154dc02f1c22ae7809f93ffb89ccb7f4ab4cc81dded5&)

## Interacting with HydraDX

### Managing HDX on SubWallet

To manage HDX on SubWallet, choose the **Customize asset display** icon next to the search icon.

![Customize asset display](https://cdn.discordapp.com/attachments/1192753929533009923/1192754152816791623/subwallet-17.png?ex=65aa39de&is=6597c4de&hm=1d44882690ed385d88a58ccce8cba4168f38a0e93b785bcead7d92e55218718d&)

On the search bar, search for **HydraDX**. Toggle on the network to enable it.

![Enable HydraDX](https://cdn.discordapp.com/attachments/1192753929533009923/1192754153110380544/subwallet-18.png?ex=65aa39de&is=6597c4de&hm=ebf3d41e123881de2c1482d9c59315635ad6b3331e2d3bdabefce1c9de2cb7b4&)

Head back to the home screen. You should be able to see that HydraDX has been connected and HDX should be displayed.

![Connected HydraDX](https://cdn.discordapp.com/attachments/1192753929533009923/1192754153349447760/subwallet-19.png?ex=65aa39de&is=6597c4de&hm=cd96917082d35ff78f93465dd8364a970eefd7b94df8d9527998ed4a6216742d&)

:::note

HydraDX is a Substrate-native chain, so you will only be able to view and interact with HydraDX using a Substrate account.

:::

## Receive token

From your home screen, choose the first blue icon under the eye.

![Receive](https://cdn.discordapp.com/attachments/1192753929533009923/1192754150849642536/subwallet-20.png?ex=65aa39dd&is=6597c4dd&hm=f89d43a622b4e6ab94506f08bbe23b8d682d6aa4aea065575a1eab3cc95b4e9b&)

:::important

**If you are in all-accounts mode**, you will be prompted to choose an account.

![All accounts mode](https://cdn.discordapp.com/attachments/1192753929533009923/1192754188506124299/subwallet-21.png?ex=65aa39e6&is=6597c4e6&hm=e7cf5fd35d622029077e7883e06d7765c91ff2bb9848f557a186971f3c91f5b5&)

:::

Search for the token that you would like to receive, in this case, **HDX**. You can either **Copy the address** or **View address QR**.

![Copy address](https://cdn.discordapp.com/attachments/1192753929533009923/1192754188761956392/subwallet-22.png?ex=65aa39e6&is=6597c4e6&hm=58da045340ecc434a1ae07099ee124d7867e4b9fe2c43780d17523e8b2573cf7&)

:::note

HDX is allowed to execute cross-chain transfer, so when choosing the token, make sure you are receiving HDX on the correct chain by checking the network icon under the tokens.

:::

Send the address or show the QR code to the sender and you'll be able to receive HDX from them!

![QR code](https://cdn.discordapp.com/attachments/1192753929533009923/1192754189034606663/subwallet-23.png?ex=65aa39e6&is=6597c4e6&hm=5d1734c427101d0249e031dd3353ef316d028470bc40de48166eaacf5bcf40ad&)

### Send a transaction

To get started with a simple token transfer to another address on HydraDX, you can click the send icon.

![Send transaction](https://cdn.discordapp.com/attachments/1192753929533009923/1192754189311410269/subwallet-24.png?ex=65aa39e7&is=6597c4e7&hm=82b5ce8f9b95d49458a2639f3fde04b08996b4c90753757ac4e82f94804e7e1b&)

Next, you can take the following steps:

1. Specify the asset to send and the destination chain.

   :::note

   HDX is allowed to execute cross-chain transfer, so when choosing the destination network, you can choose the drop-down menu to see the available options.

   :::

2. Enter the destination address
3. Enter the amount of tokens to send
4. Look over the transaction details, then press **Transfer**

![Transaction details](https://cdn.discordapp.com/attachments/1192753929533009923/1192754189563072552/subwallet-25.png?ex=65aa39e7&is=6597c4e7&hm=6da1df8db0167d1efb915a5107d1f1b2045189a31b0f725f7c9e2ec48ef1541e&)

On the next screen, you can review the transaction details and submit the transaction. If the transaction details look good, you can click **Approve** to send the transaction.

![Approve transaction](https://cdn.discordapp.com/attachments/1192753929533009923/1192754189814747207/subwallet-26.png?ex=65aa39e7&is=6597c4e7&hm=06c3d39e9e10dc7afba1bf5dd04b1697bbc6078257f4fbd03e9f907684e6c95f&)

After you send the transaction, you can review the transaction details.

### Connect to the HydraDX dApp

First, head to the [HydraDX dApp](https://app.hydradx.io/trade/swap). Once you arrive at the dApp, you will need to connect your wallet.

![HydraDX dApp](https://cdn.discordapp.com/attachments/1192753929533009923/1192754190062190613/subwallet-27.png?ex=65aa39e7&is=6597c4e7&hm=d228f28fdfa25173e7148adfe51408aa2117b0b9c7fe3deb1886aff212d7283d&)

Choose **Connect Wallet** at the top right corner and choose **SubWallet**.

![Connect SubWallet](https://cdn.discordapp.com/attachments/1192753929533009923/1192754190494224394/subwallet-28.png?ex=65aa39e7&is=6597c4e7&hm=8bb9fefbc673973b5b6d2ff74ef119fe851a7f9029e0fb6a139ce705294cf02e&)

A window will appear. Choose the account that you would like to connect then choose **Connect**.

![Choose account](https://cdn.discordapp.com/attachments/1192753929533009923/1192754190875885641/subwallet-29.png?ex=65aa39e7&is=6597c4e7&hm=6ab483b890aa82627e61007c2496cfa626f8883031659fa8bc401a0d5b20ab72&)

Once you have approved the connection, you will need to choose the account that you would like to use on the dApp.

![Choose accounts](https://cdn.discordapp.com/attachments/1192753929533009923/1192754188208312410/subwallet-30.png?ex=65aa39e6&is=6597c4e6&hm=1f3521c40f518b454bf572341fcd1582c651a4b5773d5761ce64008b50e62f76&)

You have successfully connected to the HydraDX dApp!
