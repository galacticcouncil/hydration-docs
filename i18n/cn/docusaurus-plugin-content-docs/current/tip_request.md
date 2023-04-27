---
id: tip_request
title: 申请财政小费
---

import useBaseUrl from '@docusaurus/useBaseUrl';

作为社区成员对协议贡献的奖励，他们可向 HydraDX 财政申请 HDX 小费。本指南将指导您如何申请小费。您可以在 **[这篇文章](/spending_fw)** 中找到更多获得奖励的各种活动信息。

申请财政小费的流程，包括两个步骤：第一步，贡献者需要在 Subsquare 中 **[发布小费申请](#01-publish-tip-request)**，并附上贡献描述；第二步，财政小费申请必须使用 Polkadot/apps **[链上提交](#02-submit-on-chain)**。

## 01 在 Subsquare 发布 {#01-publish-tip-request}

为确保透明度，所有财政小费申请必须在 **[HydraDX Subsquare 页面](https://hydradx.subsquare.io/discussions)** 上以讨论帖子的形式公布。

:::note
打开帖子之前，请确保 Subsquare 链接到您的 HDX 钱包。点击 `Sign-Up`（注册）（首次使用）或 `Login`（登录）（二次使用），并选择 `with Web3 address`（Web3 地址）选项。在弹出窗口中选择您的 HDX 地址后，您将被要求使用钱包签署消息。
:::

登录后，您需要为小费申请创建一个新讨论帖。您可以点击以下链接：**https://hydradx.subsquare.io/post/create**

您可以使用帖子标题来表明主旨（小费申请）和贡献主题。在帖子正文中，请提供以下信息:

* 贡献期间；
* 贡献摘要；
* 申请小费金额（HDX）；
* 贡献耗时（h）；
* 如果可能，请提供更详细的信息，例如：与 HydraDX 贡献相关的链接和 PR 链接（若是技术贡献）。

发布帖子之前，请确保选择 `Treasury`（财政）标签，以表明讨论性质。

作为参考，您可以查看这个 **[小费申请示例](https://hydradx.subsquare.io/post/192)**。

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/post-thread.jpg')} />
</div>

点击 `Create`（创建）发布您的讨论帖子。此时，它应该立即在 **[讨论列表](https://hydradx.subsquare.io/discussions)** 中可见。

## 02 链上提交 {#02-submit-on-chain}

发布财政小费申请后，您需在链上提交。出于这个目的，您的钱包需要持有少量 HDX 来支付交易费用。如果您目前没有任何 HDX，则不需要执行此步骤 - 其他人会帮您完成小费申请的链上提交。

财政小费申请，可通过以下链接在 Polkadot/app 上完成链上提交：**https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/treasury/tips**

要提交新的小费请求，请点击 `Propose tip`（提出小费）并提供以下信息：

* **submit with account**（随账户提交）- 选择签署交易、小费申请提交链上的帐户。这个账户需要持有少量 HDX 作为交易费用。
* **beneficiary**（受益者）- 选择或输入接收财政小费的帐户地址。此帐户必须与打开 Subsquare 帖子的帐户相对应。
* **tip reason**（小费原因）- 提供一个 Subsquare 帖子的 URL。

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/submit-on-chain.jpg')} />
</div>

要提交小费请求，请点击 `Propose tip`（提出小费）并签署交易。

确认交易后，您应该能在 Overview （概览）页面上看到小费申请。

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/tip-requests.jpg')} />
</div>

*（如发现翻译错误，请电报联系 @PDMCnode）*
