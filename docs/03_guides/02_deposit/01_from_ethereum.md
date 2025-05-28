---
title: From Ethereum
description: Bridge assets from Ethereum to Hydration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Deposit from Ethereum

Bridging assets from the Ethereum ecosystem is easy. Hydration uses two bridges for this purpose:
* **Wormhole** - an industry-leading bridge that connects to various chains
* **Snowbridge** - a trustless bridge between Polkadot and Ethereum

When bridging an asset, it is locked on the source network and an equivalent amount is minted on a Polkadot parachain. The assets are then transferred to the Hydration chain where they can be used for all DeFi activities.

**Which chain the asset will be minted on Polkadot is dependent on which asset and/or bridge you use.**
* **Using Wormhole** will mint assets on **Moonbeam**
* **Using Snowbridge** will mint assets on **Asset Hub** (Polkadot's canonical home for all assets)

To bridge assets from Ethereum to Hydration, follow the steps below.

## Prerequisites
* A Polkadot wallet
* An Ethereum wallet
* ETH for transaction fees

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/guides/deposit/cross_chain_UI2.jpg')} width="400px" />
</div>


## Step-by-step
1. Go to the `Cross-Chain` tab https://app.hydration.net/cross-chain
2. For `Source Chain`, select `Ethereum`
3. For `Asset to Transfer`, enter the asset you wish to bridge
4. For `Destination Chain`, enter `Hydration`
5. For `Asset to Receive`, choose the version of the asset you prefer. Depending on the asset you are bridging, you may have different options. For example, if you are transferring ETH, you will have the option of selecting native ETH bridged via Snowbridge or Wormhole-bridged ETH.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/guides/deposit/asset_to_recieve.jpg')} width="300px" />
</div>

6. For `Destination Address`, select where you want the asset to be deposited to
7. Click `Transfer` and sign the transactions

Once finalized, the assets will appear in your Hydration wallet.


