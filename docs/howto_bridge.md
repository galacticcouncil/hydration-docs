---
id: howto_bridge
title: Bridge Assets
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page you will find a step-by-step guide on bridging tokens from the Ethereum ecosystem.  Currently there are two methods to bridging to and from Ethereum (via Wormhole):

- [Moonbeam routed liquidity](#moonbeam)
- [Acala](#acala)

Wormhole’s Portal Bridge allows you to bridge tokens across different chains. Instead of swapping or converting assets directly, Wormhole locks your source assets in a smart contract and mints new Wormhole-wrapped assets on the target chain. You can then swap Wormhole-wrapped assets on an exchange for other assets on the target chain.

## To/From Ethereum via Moonbeam {#moonbeam}

### Prerequisites

- A Polkadot wallet (Talisman or Polkadot.js/apps);
- An Ethereum wallet (Talisman or Metamask);

:::caution
Make sure to have enough tokens (ETH) in your wallets to pay for fees. Remember that fees will be charged for sending and redeeming tokens.
:::

### 01 Navigate to Carrier.so

https://www.carrier.so/

:::caution
Use with caution. All crypto applications can potentially carry risks related to smart contracts/pallets.
:::

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/mb1.jpg')} width="600px" />
</div>

### 02 Add the Wallets from Source and Destination Network

- Once you have navigated to Carrier.so, add the wallets needed to allow for bridging to and from the desired networks **(1 in image above).**
- In the example above, Metamask was selected as the wallet for Ethereum and Talisman for HydraDX.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/mb2.jpg')} width="600px" />
</div>

### 03 Select Networks and Wallets to Bridge

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/mb3.jpg')} width="600px" />
</div>

- Once Metamask and Talisman are connected, select the network chains **(2)** and select the previously connected wallets **(3)**.

### 04 Select Asset to Bridge

- Select the token asset and amount of tokens you would like to bridge **(4)**.

### 05 Bridge Tokens

- Within **Settings** **(5)**, you can select whether to Auto Relay the transaction.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/mb4.jpg')} width="600px" />
</div>

- Click **Confirm & Begin Transaction** **(6)** to proceed. This will prompt your wallet to sign the transactions. Once confirmed, you are all done!

In the example above, bridging from Ethereum to HydraDX, your assets will automatically appear in your wallet on HydraDX network. If you are bridging out of HydraDX to Ethereum, your assets should appear in your Metamask wallet afterwards.



## To/From Ethereum via Acala {#acala}

### Prerequisites

- A Polkadot wallet (Talisman or Polkadot.js/apps);
- An Ethereum wallet (Metamask);
- Bind your two wallets following [Acala's guide](https://guide.acalaapps.wiki/general/address-binding). Completing this action will require a small amount ACA.

:::caution
Make sure to have enough tokens (ETH and ACA) in your wallets to pay for fees. Remember that fees will be charged for sending and redeeming tokens, and for binding your wallet addresses.
:::

### 01 Navigate to Acala Bridge Page

https://apps.acala.network/bridge

Once you have been directed to Acala bridge page, follow the actions below:

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/aca1.jpg')} width="600px" />
</div>

### Step 2: Connect to Your Account

- Connect your account **(1)**.
- Select the chains you intend to bridge to and from **(2)**, in this case, it will be **Ethereum** as the Origin Chain and **HydraDX** as the Destination Chain.
- Connect to your Metamask account that you are bridging from **(3)**.

### Step 3: Bridge Tokens

- Enter the amount of tokens and the token for bridging **(4)**.
- To commence the bridge, click **Approve Tokens (5)** and sign the transaction using your Metamask wallet app.
- Once the tokens are approved for transfer, click **Send Tokens (5). T**his starts the bridging process cross-chain.
- Once the transaction has been processed by Wormhole, click **Redeem Tokens (5).** This action results in you receiving the tokens on the Acala chain.

In the example above, bridging from Ethereum to HydraDX, your assets will automatically appear in your wallet on HydraDX network. If you are bridging out of HydraDX to Ethereum, your assets should appear in your Metamask wallet afterwards.
