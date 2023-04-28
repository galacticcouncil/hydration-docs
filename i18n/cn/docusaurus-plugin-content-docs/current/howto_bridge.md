---
id: howto_bridge
title: 桥接资产
---

import useBaseUrl from '@docusaurus/useBaseUrl';

在此页面上，您将找到有关使用 Acala 通过 Wormhole（虫洞）实现从以太坊生态系统桥接令牌的分步指南。

Wormhole 的 Portal Bridge（传送桥）允许您在不同链之间桥接令牌。Wormhole 不是直接交换或转换资产，而是将您的源资产锁定在智能合约中，并在目标链上铸造新的 Wormhole 包装资产。然后，您可以在交易所将 Wormhole 包装的资产，交换成目标链上的其他资产。

## 必备条件
* Polkadot 钱包（Talisman 或 Polkadot.js 应用程序）；
* 一个以太坊钱包（Metamask）；
* 按照 **[Acala 绑定指南](https://guide.acalaapps.wiki/general/address-binding)** 将以太坊钱包和您的 Acala 钱包地址绑定。完成这个动作需要少量的 ACA（＜ 1 ACA）。
    
:::caution
请确保您的钱包中有足够的令牌（ETH 和 ACA）来支付费用。请记住，发送和兑换令牌以及绑定您的钱包地址将收取费用。
:::

## 桥接资产 ETH -> Acala
### 01 导航到虫洞令牌桥
**[https://www.portalbridge.com/#/transfer](https://www.portalbridge.com/#/transfer)**

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/inbound_1.jpg')} width="800px" />
</div>

### 02 选择网络并连接您的账户

* 重新定向到 Token Bridge 页面后，选择您要桥接的链 **（1）**。在我们的例子中，**Ethereum（以太坊）** 为源链，**Acala** 为目标链；
* 点击 `Connect` 连接到您桥接的 Metamask 帐户 **（2）**。

### 03 选择要桥接的资产

* 连接 Metamask 后，选择您想要桥接的令牌资产 **（3）** 。如果在下拉列表中没有找到令牌，您可以粘贴令牌合约地址（可以通过 Etherscan 确认）；
* 输入您想要桥接的令牌数量 **（4）** ;
* 单击 `Next` **（5）**。这时 Metamask 将出现提示，请求将网络从以太坊切换到 Acala。

:::caution
请注意，目前唯一能够从以太坊桥接到 Acala 的资产是： 
* DAI: 0x6B175474E89094C44Da98b954EedeAC495271d0F（始终仔细检查合约地址）
:::

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/inbound_2.jpg')} width="800px" />
</div>

### 04 选择 Gas 支付方式
* 在网络切换到 Acala 之后，选择 Gas 的支付方式 **（6）** 。请注意，免费桥接的最小值（在 Acala 一侧）为 ≥10 $DAI；
* 单击 `Next` **（7）** 继续。这时将出现 Metamask 提示，请求将网络从 Acala 切换回以太坊。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/inbound_3.jpg')} width="800px" />
</div>

### 05 桥接令牌
* 在网络切换回以太坊后，单击 `Approve` **（8）** 继续。Metamask 钱包将提示，第一笔令牌转移交易需要批准;
* 执行此操作后，单击 `Transfer` **（8）** （将出现在 Approve 位置）。Metamask 钱包将提示，第二笔交易需要执行以桥接转账。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/inbound_4.jpg')} width="800px" />
</div>

Wormhole 处理交易后，单击 `Redeem` **（9）**（兑换）。此操作，会让您在 Acala 链上收到令牌。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/inbound_5.jpg')} width="800px" />
</div>

至此，您已完成了第一步！

## 桥接资产 Acala - > ETH 
将桥接资产转回 Acala 后使用（**[跨链转账](/howto_xcm)**），可将它们桥接回以太坊生态系统，如下所示：

### 01 导航到 Wormhole 令牌桥页面
**[https://www.portalbridge.com/#/transfer](https://www.portalbridge.com/#/transfer)**

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/outbound_1.jpg')} width="800px" />
</div>

### 02 选择网络并连接您的账户
* 重新定向到 Token Bridge（令牌桥）页面后，选择您要桥接的链 **（1）** 。此时，**Acala** 为源链，**Ethereum** 为目标链
* 点击 `Connect` 连接到您桥接的 Metamask 帐户 **（2）**。

### 03 选择要桥接的资产
* 连接 Metamask 后，选择您想要桥接的令牌资产 **（3）**。如果在下拉列表中没有找到令牌，您可以粘贴令牌合约地址（可以通过 Acala Blockscout 确认）；

:::caution
请注意，目前唯一能够从以太坊桥接到 Acala 的资产是： 
* DAI: 0x6B175474E89094C44Da98b954EedeAC495271d0F（始终仔细检查合约地址）
:::

* 输入您想要桥接的令牌数量 **（4）**；
* 单击 `Next` **（5）**。这时将出现 Metamask 提示，请求将网络从 Acala 切换到 Ethereum。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/outbound_2.jpg')} width="800px" />
</div>

### 04 选择 Gas 支付方式
* 在网络切换到以太坊后，选择 Gas 的支付方式 **（6）** 。请注意，手动支付是从 Acala 到 Ethereum 的唯一选择；
* 单击 `Next` **（7）**。这时将出现 Metamask 提示，请求将网络从 Ethereum 切换回 Acala。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/outbound_3.jpg')} width="800px" />
</div>

### 05 桥接令牌
* 在网络切换回 Acala 后，单击 `Approve` **（8）** 继续。Metamask 钱包将会提示您，第一笔交易需要批准以转移令牌；
* 执行此操作后，单击 `Transfer` **（8）**（将出现在 Approve 的位置）。Metamask 钱包将会提示您，第二笔交易需要执行以桥接转账。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/outbound_4.jpg')} width="800px" />
</div>

Wormhole 交易处理后，单击 `Redeem` **（9）**（兑换）。此操作，会让您在以太坊链上收到令牌。
<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bridge/outbound_5.jpg')} width="800px" />
</div>

恭喜您，您已全部完成！

