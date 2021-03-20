---
id: polkadotjs_apps_local 
title: Connect to a local node 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use the Polkadot.JS app to connect to your local HydraDX node. For this purpose, you need to have access to port `9944` which is used for RPC websocket connections.

:::warning

If you are running the node as a validator, we highly recommend that you blacklist port `9944` for remote connections. This port could be abused by third parties to degrade the performance of your node, which may result in slashing and involuntary loss of funds. You should use port `9944` to connect to your validator node only when the node is in your local network.

:::

### Accessing your local node using Polkadot.JS app

To access your node, open the [Polkadot.JS app](https://polkadot.js.org/apps/) and click in the upper left corner to change the network.

<div>
  <img src={useBaseUrl('/polkadotjs-apps/PolkadotJS-APPS-1.png')} />
</div>

After opening the menu, click on **Development** and select **Local node**.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-1.png')} />
</div>

Adjust the IP if necessary and click on ***Switch*** to switch to your local node.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-2.png')} />
</div>

Now you should be connected to your local node and be able to interact with it.
