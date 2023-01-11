---
id: howto_bridge
title: Bridge Assets
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page you will find a step-by-step guide on bridging tokens from the Ethereum ecosystem using Acala's Wormhole implementation.

Wormhole’s Portal Bridge allows you to bridge tokens across different chains. Instead of swapping or converting assets directly, Wormhole locks your source assets in a smart contract and mints new Wormhole-wrapped assets on the target chain. You can then swap Wormhole-wrapped assets on an exchange for other assets on the target chain.

## Prerequisites
* A Polkadot wallet (Talisman or Polkadot.js/apps);
* An Ethereum wallet (Metamask);
* Bind your two wallets following [Acala's guide](https://guide.acalaapps.wiki/general/address-binding). Completing this action will require a small amount ACA.
    

:::caution
Make sure to have enough tokens (ETH and ACA) in your wallets to pay for fees. Remember that fees will be charged for sending and redeeming tokens, and for binding your wallet addresses. In the interim, HydraDX has created an ACA faucet to help faciliate initial bridging activities. The faucet can be access via directly messaging the **Bridge Fee Faucet** bot located at the top of the member list on [Discord](https://discord.gg/kkmY35UxAG). Note that DMs must be enabled.
:::

## Bridging Assets ETH -> Acala
### 01 Navigate to Wormhole Token Bridge
[https://www.portalbridge.com/#/transfer](https://www.portalbridge.com/#/transfer)

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/inbound_1.jpg')} width="800px" />
</div>

### 02 Select Networks and Connect to Your Account

* Once you have redirected to the Token Bridge Page, select the chains you intend to bridge to and from **(1).** In our case, it will be **Ethereum** as the Source Chain and **Acala** as the Target Chain;
* Connect to your Metamask account that you are bridging from **(2)**.

### 03 Select Asset to Bridge

* Once Metamask is connected, select the token asset you would like to bridge **(3)**. If the token is not found in the dropdown, you can paste in the token contract address (which can be confirmed via Etherscan);
* Enter the amount of tokens you would like to bridge **(4)**;
* Click **Next (5)**. This will prompt Metamask to request a network switch from Ethereum to Acala.

:::caution
Note that the only asset(s) currently able to be bridged to Acala from Ethereum is: 
* DAI: 0x6B175474E89094C44Da98b954EedeAC495271d0F (always double check contract address)
:::

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/inbound_2.jpg')} width="800px" />
</div>

### 04 Select Payment for Gas
* Following the network switch to Acala, select the payment method for gas **(6).** Note that the bridge minimum for feeless bridge (on Acala side) is ≥10 $DAI;
* Click **Next** **(7)** to proceed. This will prompt Metamask to request a network switch back to Ethereum from Acala.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/inbound_3.jpg')} width="800px" />
</div>

### Step 5: Bridge Tokens
* Following the network switch back to Ethereum, click **Approve** **(8)** to proceed. This will prompt a  first transaction within your Metamask wallet to approve the tokens to be transferred;
* Once this has been executed, click **Transfer** **(8)** (which will appear in place of Approve). This will prompt a second transaction within your Metamask wallet to execute the bridge transfer.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/inbound_4.jpg')} width="800px" />
</div>

Once the transaction has been processed by Wormhole, click Redeem (9). This action results in you receiving the tokens on the Acala chain.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/inbound_5.jpg')} width="800px" />
</div>

You are all set!

## Bridging Assets Acala -> ETH
After transferring bridged assets back to Acala (using [cross-chain transfers](/howto_xcm)), you can bridge them back to the Ethereum ecosystem following

### 01 Navigate to Wormhole Token Bridge Page
[https://www.portalbridge.com/#/transfer](https://www.portalbridge.com/#/transfer)

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/outbound_1.jpg')} width="800px" />
</div>

### 02 Select Networks and Connect to Your Account
* Once you have redirected to the Token Bridge Page, select the chains you intend to bridge to and from **(1).** In this case, it will be **Acala** as the Source Chain and **Ethereum** as the Target Chain;
* Connect to your Metamask account that you are bridging from **(2)**.

### 03 Select Asset to Bridge
* Once Metamask is connected, select the token asset you would like to bridge **(3)**. If the token is not found in the dropdown, you can paste in the token contract address (which can be confirmed via [Acala Blockscout](https://blockscout.acala.network/)).

:::caution
Note that the only asset(s) currently able to be bridged to Acala from Ethereum is: 
* DAI: 0x54A37A01cD75B616D63E0ab665bFfdb0143c52AE (always double check contract address)
:::

* Enter the amount of tokens you would like to bridge **(4)**;
* Click **Next (5)**. This will prompt Metamask to request a network switch from Acala to Ethereum.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/outbound_2.jpg')} width="800px" />
</div>

### 04 Select Payment for Gas
* Following the network switch to Ethereum, select the payment method for gas **(6).** Note that Manual Payment is the only option bridging from Acala to Ethereum;
* Click **Next** **(7)** to proceed. This will prompt Metamask to request a network switch back to Acala from Ethereum.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/outbound_3.jpg')} width="800px" />
</div>

### 05 Bridge Tokens
* Following the network switch back to Acala, click **Approve** **(8)** to proceed. This will prompt a  first transaction within your Metamask wallet to approve the tokens to be transferred;
* Once this has been executed, click **Transfer** **(8)** (which will appear in place of Approve). This will prompt a second transaction within your Metamask wallet to execute the bridge transfer.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/outbound_4.jpg')} width="800px" />
</div>

Once the transaction has been processed by Wormhole, click Redeem (9). This action results in you receiving the tokens on the Ethereum chain.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/outbound_5.jpg')} width="800px" />
</div>

You are all done!
