---
id: howto_dca
title: 下达 DCA 订单
---

import useBaseUrl from '@docusaurus/useBaseUrl';

在此页面，您将找到 **在 HydraDX Omnipool（万能池）中设置 DCA 订单** 的分步指南。

正式开始前，请先访问我们的 **[DCA 产品页面](/omnipool_dca)**，熟悉 HydraDX 实施的成本平均策略。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/howto_dca/dca.jpg')} />
</div>  

### 步骤 1：导航到 HydraDX DCA 页面

https://app.hydradx.io/dca

### 步骤 2：连接您的账户

点击**`Connect Account`**（连接账户）（上图中的 **1**），连接您的钱包至 HydraDX。

### 步骤 3：设置 DCA 订单
* 选择您将用于支付交易费用的资产；输入每笔 DCA 交易的订单金额，以及总订单规模 **(2)**；
* 选择每次 DCA 交易的时间间隔 **(3)**；
* 选择您希望从交易中获得的资产 **(4)**；
* 对于想以特定区块间隔下达订单的高级用户，可以点击 **Advanced Settings**（高级设置）**(5)** 切换开关来设置；
* 如果您想调整滑点首选项，可通过单击 **设置图标 (6)** 来实现；
* 要完成 DCA 订单，请点击 **`Schedule DCA trades`**（实施 DCA 交易）**(7)**，并使用您的钱包应用程序签署交易。

### 步骤 4：查看您的 DCA 订单
* 提交后，您的 DCA 订单将出现在 **DCA Orders**（DCA 订单）下；
* 要查看详情，请点击 **下拉箭头 (8)**;
* 您可以通过点击 **`Terminate`**（终止）**(9)**，取消剩余金额的 DCA 订单。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/howto_dca/dca_overview.jpg')} width="600px" />
</div>  
