---
id: polkadotjs_apps_local 
title: 连接到本地节点 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

您可以使用 Polkadot/apps 连接到 HydraDX 本地节点。为此，需要访问用于 RPC Websocket 连接的 `9944` 端口。

:::warning

如果您是运行验证节点的验证人，我们强烈建议您将 `9944` 端口列入黑名单，以禁止第三方进行远程连接。第三方可能会滥用此端口，从而降低您的节点性能，并可能导致严厉惩罚或资金的非自愿损失。仅当您的验证节点处于本地网络时，才可使用 `9944` 端口连接。

:::

### 使用 Polkadot/apps 连接本地节点 {#accessing-your-local-node-using-polkadotapps}

请打开 [Polkadot/apps](https://polkadot.js.org/apps/) ，单击左上角来更改网络去访问您的节点。 

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/PolkadotJS-APPS-1.png')} />
</div>

打开菜单后，单击 **DEVELOPMENT** (开发)，然后选择 **Local Node** （本地节点）。
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-1.png')} />
</div>

如有必要，请调整IP后，单击 ***Switch***（转换）以切换到您的本地节点。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-2.png')} />
</div>

至此，您应该已连接到您的本地节点，并能够进行交互。
