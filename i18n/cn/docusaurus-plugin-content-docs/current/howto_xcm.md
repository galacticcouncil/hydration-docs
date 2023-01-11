---
id: howto_xcm
title: 跨链转账
---

import useBaseUrl from '@docusaurus/useBaseUrl';

在本页上，您将找到 **操作跨链转账的分步指南**。

跨链转账，允许您将非本地资产从其他 Polkadot 平行链或 Polkadot 本身，转账到 HydraDX 链。

目前，HydraDX 支持以下令牌进行跨链转账：
* DOT
* DAI（通过 Acala 虫洞桥）
* HDX

## 00 前提条件
在继续之前，请确保您在目标链上有足够数量的令牌来支付费用（ACA 或 DOT）。

## 01 导航至跨链转账
**[https://app.hydradx.io/#/cross-chain](https://app.hydradx.io/#/cross-chain)**

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_xcm/xcm_screen.jpg')} width="500px" />
</div>


## 02 连接您的账户
点击 `Connect Wallet`（连接钱包），连接到您常用的 Polkadot 钱包。之后，选择您的帐户。

## 03 跨链转账
* 选择源链和目标链；
* 选择您打算转账的资产并输入金额；
* 输入目的地址。它应该会自动填充您的链上地址，您也可以改为另一个地址；
* 点击 `Transfer`（转账），用您的钱包签署交易。
