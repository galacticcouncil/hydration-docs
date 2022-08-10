---
id: tip_request
title: 申请国库小费
---

import useBaseUrl from '@docusaurus/useBaseUrl';

随着 **[HydraDX 新政激励计划](#link-to-new-deal)** 的推出，社区成员可以向国库申请 HDX 小费，作为对其贡献的奖励。本指南将引导您完成小费申请过程。您可以在 **[这篇文章](/new_deal)** 中找到有关获得奖励的不同类型活动的更多信息。 

申请国库小费的过程包括两个步骤。第一步，贡献者需要在 Commonwealth.im 中发布他们的小费申请，并附上贡献的相关描述。第二步，必须使用 Polkadot/apps 在链上提交国库小费申请。

## 01 在 Commonwealth.im 中发布小费申请 {#01-publish-tip-request}

为了确保透明度，所有国库小费申请必须在 **[HydraDX Commonwealth 页面](https://commonwealth.im/hydradx)** 的线程中发布。打开一个线程前，您需要将您的 HydraDX 钱包链接到 Commonwealth.im：点击 *Log in*（登录）（右上角），选择 *Connect with wallet*（用钱包连接）> *polkadot-js* 。

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/login.jpg')} width="300px" />
</div>

在弹出窗口中选择 HDX 地址后，将要求您使用钱包对消息签名并为此钱包设置显示名称。 

登录后，您需要为小费申请创建一个新线程。 导航到页面的右上部分，然后单击 *New thread*（新建线程）> *New thread*（新建线程）。 您也可以直接使用此链接：https://commonwealth.im/hydradx/new/thread 。

您可以使用线程标题来表明主题 （Tip request)）（小费申请）和贡献主体。 线程内容中，请提供以下信息：

* **Period of the contribution**（贡献期间）
* **Summary**（对贡献简要总结）
* **Requested tip**（申请小费金额，以 HDX 为单位）
* **Time spent**（花费时间，以小时为单位）
* **Description**（描述）- 如果需要，可以进行更详细描述，如对 HydraDX 的贡献的相关性和 PR 链接（如果是技术贡献）

作为参考，您可查看这个 **[小费申请示例](https://commonwealth.im/hydradx/proposal/discussion/1165-tip-request-add-documentation-for-staking)** 。

填写完信息后，发布线程，该线程应该在常规列表中可用。

:::note

过度绑定 HDX 并被“卡住”的提名人和验证人，可发起 1 HDX 国库小费申请，这将有助于他们取消对部分令牌的绑定。如果这种情况适用于您，请按照 **[示例](https://commonwealth.im/hydradx/proposal/discussion/1166-tip-request-overbonded-staker)** 创建一个 Commonwealth 线程。

:::

## 02 在链上提交小费申请 {#02-submit-on-chain}

发布国库小费申请后，您需要在链上提交它。为此，您的钱包需要持有少量 HDX 来支付交易费用。如果目前没有任何 HDX ，您不需要执行这个步骤 —— 其他人会在链上为您提交小费申请。

国库小费申请可以通过以下链接使用 Polkadot/apps 在链上提交：https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/treasury/tips 。

提交新的小费申请，请点击 *Propose tip*（提出小费）并提供以下信息：

* **submit with account** （随帐户提交）- 选择将签署交易的帐户，以提交链上小费申请。这个账户需要持有少量 HDX 以支付交易费用。
* **beneficiary** （受益者）- 选择或输入将收到国库小费的帐户地址。这个帐号必须与打开 Commonwealth 线程的帐号相对应。
* **tip reason** （小费原因）- 提供一个 Commonwealth 线程 URL 。

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/submit-on-chain.jpg')} />
</div>

要提交小费申请，点击 *Propose tip*（提出小费）并签署交易。

一旦交易被确认，您应该可以在 Tips（小费） 页面上看到小费申请：

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/tip-requests.jpg')} />
</div>
