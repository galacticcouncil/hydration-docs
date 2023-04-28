---
id: identity
title: 设置您的身份
---

import useBaseUrl from '@docusaurus/useBaseUrl';

帐户持有人，可通过提供特定信息并将其存储在链上来设置身份。除此之外，身份信息还可以提交给 HydraDX 注册商进行认证。通过设置并认证身份，有助于验证人及提名人保护其网络信用。

:::note
如果您是 HydraDX 整理人，我们 **强烈建议** 您设置身份并通过认证程序。经过认证的整理人似乎更值得信任。
:::

## 01 设置身份 {#01-set-identity}
要设置身份，请打开 Polkadot/apps（连接到 *HydraDX* 网络），然后导航到 *My accounts* （我的账户）。或者，直接点击这个链接：
**https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/accounts**

在帐户页面，找到持有您 HDX 令牌的帐户。然后，点击帐号旁边的三个点（在右侧），并选择 *Set on-chain identity* （设置链上身份）。

<img alt="authorize" src={useBaseUrl('/identity/set-identity-1.jpg')} />

您将看到一个名为 *register identity*（注册身份）的弹窗。在这里，您可以输入以下信息：

* legal name（法定名称）；
* email（邮件）；
* web（网络）；
* twitter（推特）；
* riot name（roit 姓名）（如果使用 Matrix 信息）。

:::note

所有这些信息都是可选的，您可以有选择地提供。但是，如果您正在运行整理器节点，建议您设置电子邮件，以便在您的节点遇到问题时，方便和您联系。

:::

在弹出窗口的最后一个字段，你可以看到需存入的 HDX 数量，作为存储您身份信息的保证金。以后，一旦决定清除身份信息，您会收回这笔保证金。

<img alt="authorize" src={useBaseUrl('/identity/set-identity-2.jpg')} />

填写完信息后，单击 `Set Identity`（设置身份），并使用 Polkadot.js 浏览器扩展程序对交易进行签名。一旦确认了交易，您的身份就设置好了。

## 02 提交身份证明 {#02-verify-identity}
在您设置好身份后，您可以将它提交给网络注册商进行认证。要做到这一点，请打开 Polkadot/apps 并导航到 *Developer*（开发者）> *Extrinsics*（交易）。或者，直接点击这个链接：
**https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics**

在上一步选择相应 HydraDX 帐户后，您需要填写以下信息：

* **submit the following extrinsic**（提交下面的外部信息）： 左边选 *identity*（身份）；中间选 *requestJudgement(reg_index, max_fee)*（请求判定）。
* **regindex**（注册商 ID）: 在这里需要输入您选择的注册商 ID 进行验证。
HydraDX 有两个注册商：Simon Kraus - HydraSik（ID: **0**）、Jimmy Tudeski - stakenode （ID: **1**）
* **maxFee**（最大费用）：在这里需要输入您愿意用 HDX 支付给注册商的最高费用。费用只有低于您支付最高费用的注册商，才有资格为您认证。

若要提交认证请求，请单击 `Submit Transaction`（提交交易）并签署交易。

<img alt="authorize" src={useBaseUrl('/identity/set-identity-3.jpg')} />

请注意，身份认证可能需要一些时间。要查看您的请求状态，导航到 **My accounts**（我的账户）并将鼠标停在显示您身份的部分，您将看到一个显示当前状态的弹出框。

## 03 认证结果 {#03-verification-outcome}

在处理您的认证请求后，注册商将提交以下其中一项判断，该判断将在您的身份状态中显示：

* **Unknown** - 默认值，尚未开始；
* **Reasonable** - 提供的资料看起来合理，但还没进行深入检查；
* **KnownGood** - 信息正确；
* **OutOfDate** - 信息过去是正确的，现在已过时；
* **LowQuality** - 信息不准确，但可通过修改进行更正；
* **Erroneous** - 提供信息错误，可能存在恶意意图。

