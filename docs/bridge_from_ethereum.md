---
id: bridge_from_ethereum
title: Bridge Assets from Ethereum
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Bridging assets from the Ethereum ecosystem is easy using the [Wormhole](https://wormhole.com/) bridge which is implemented by the [Moonbeam network](https://moonbeam.network/).

When bridging an asset, Wormhole will lock it on the source network and mint an equivalent amount of Wormhole-wrapped assets on the Moonbeam network. The assets are then transferred to the HydraDX chain where they can be used for trading. In a few clicks and seamlessly.

To bridge assets from Ethereum to HydraDX, follow the steps below.

### Prerequisites

- A Polkadot wallet
- An Ethereum wallet
- ETH for transaction fees

### Step-by-step
1. Navigate to the [Carrier UI](https://www.carrier.so/)
2. As Destination, select `HydraDX`
3. Connect your Ethereum wallet
4. Connect your HydraDX wallet
5. Select the asset you wish the bridge and the amount
6. Click on `Settings` and turn on `Auto Relay`
7. Confirm and sign the transaction

Once finalized, the assets will appear in your HydraDX wallet.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/mb3.jpg')} width="600px" />
</div>
