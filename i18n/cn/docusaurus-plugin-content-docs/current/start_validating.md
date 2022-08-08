---
id: start_validating 
title: 成为验证人
---

import useBaseUrl from '@docusaurus/useBaseUrl';

在 **[搭建 HydraDX 节点](/node_setup)** 后，您需要绑定 HDX 令牌并设置验证密钥，然后才能开始验证。

## 01 绑定 HDX 令牌 {#01-bond-hdx-tokens}

为作为验证节点参与网络，您需要绑定一定数量的 HDX 令牌。 如果您没有任何 HDX ，则无法参与测试网的_初始_ 阶段。 但是，在接下来的几周内，团队将宣布一些令人振奋的消息，因此请关注通告并 **[订阅我们的新闻通讯](https://hydradxcn.substack.com/)** 。

:::note

您是否仍然拥有 Balancer LBP 期间购买的 xHDX 令牌？ 在继续操作之前，您首先需要 **[申领您的 HDX](/claim)** 。
:::

要绑定HDX，请打开 Polkadot/apps ，然后连接到 **[公共 HydraDX RPC 节点](/polkadotjs_apps_public)** 之一，确保您可以看到 **[账户余额](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts)** 。

:::warning

绑定的 HDX 令牌，对于保证网络的安全性至关重要。验证节点的不当行为，可能会受到严厉惩罚，这可能会导致资金的非自愿损失。我们强烈建议您只在真正明白自己在做什么的情况下继续操作。

:::

下一步，请转到 *Network*（网络）> *Staking*（质押）> *Account actions*（账户操作）> *+ Stash*（存储账户）

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-1.png')} />
</div>

单击 + Stash（存储账户）按钮后，您应该看到带有四个可编辑字段的绑定偏好设置选项：
* **stash account**（存储账户）: 拥有您大多数 HDX 令牌的帐户。HDX 将通过此帐户质押；
* **controller account**（控制账户）: 拥有少量 HDX 的帐户，用于支付与开始和停止提名过程相关的费用；
* **value bonded**（绑定的金额）：您要绑定的 HDX 数量。不要绑定所有的 HDX ，而是留下一些以支付后续发生的交易费用；
* **payment destination**（支付目的账户）：质押奖励将被发送到的帐户。 

:::warning

不要绑定所有可用的 HDX 令牌。留下少量 HDX ，以支付交易费用。如果您绑定了所有的 HDX 令牌，则可能无法签署交易以开始提名过程。

:::

调整偏好设置后，单击 Bond（绑定）并签署交易完成绑定流程。

:::caution

出于安全原因，不建议拥有相同的 **存储** 和 **控制** 帐户。但是，因目前 Snakenet （蛇网）禁用了转账，现在无法使用单独的帐户。强烈建议您在将来有可能时尽快切换到单独的**存储** 和 **控制** 帐户。

:::

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-2.png')} />
</div>

## 02 生成会话密钥 {#02-generate-session-keys}

第二步是生成您的会话密钥。会话密钥用于将验证节点与您的 Controller （控制）帐户和质押的 HDX 关联。因此，正确设置它们很重要。

要生成会话密钥，请在节点上运行：

```bash
$ curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933

# Example output
{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}
```

您可以在输出的 _结果_ 部分下找到会话密钥（ `0x9257...` 如上所示）。  

## 03 设置您的会话密钥 {#03-set-your-session-keys}

要生成的会话密钥与控制帐户相关联，在 Polkadot/apps 中打开:
*Developer*（开发者）> *Extrinsics*（交易）

填写以下字段：

* _using selected account_（使用已选的账户）: 选择您的控制账户；
* _submit the following extrinsic_（提交下面的外部信息）: 左侧选择 `session` 右侧选择 `setKeys` ；
* _keys_（密钥）: 输入上一步生成的会话密钥；
* _proof_（认证）: `0` 。

要完成此操作，请单击 _Submit Transaction_（提交交易）并签署该事务。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/set-session-keys-1.png')} />
</div>

## 04 确保您的节点已完全同步{#04-make-sure-that-your-node-is-fully-synced}

在下一步之前，您应确保节点正在运行并且同步过程已充分完成。检查同步状态的最直接的方法是直接在节点本身：

```bash

$ journalctl -f -u hydradx-validator.service

# The output will be similar to this
Mar 22 18:37:38 Ubuntu-2010-groovy-64-minimal hydra-dx[232761]: 2021-03-22 18:37:38  💤 
Idle (52 peers), best: #622028 (0x5f5a…1041), finalized #622025 (0x5b21…a746), ⬇ 9.1kiB/s ⬆ 6.1kiB/s

```

您可以将输出中的区块高度（如上所示：`#622025` ）与您可以在 **[Polkadot/apps 浏览器](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/explorer)** 中找到的当前区块高度进行比较。在编写本文时，当前区块高度为 #622240 ，这意味着示例中使用的节点尚未完全同步。

请等待，直到本地日志中显示的区块高度与网络的当前区块高度匹配为止。

## 05 开始验证 {#05-start-validating}

要开始验证，请在 Polkadot/apps 中导航：

*Network*（网络）> *Staking*（质押）> *Account actions*（账户操作）> *Validate* （验证）(绑定 HDX 旁边的按钮)

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-1.png')} />
</div>

单击 *Validate* （验证）按钮后，您应该会看到一个名为 *set validator preferences*（验证人偏好设置）的弹窗。在这里，您需要设置 _reward commission percentage_ (奖励佣金百分比)，这是将支付给您的奖励比例。剩余的奖励将根据提名人的质押份额，分配给提名人。如果您决定不收取任何奖励佣金，则可以将百分比设置为 0 。

请单击 *Validate*（验证）并签署交易确认。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-2.png')} />
</div>

## 06 检查验证节点的状态 {#06-check-the-status-of-your-validator-node}

您可以在 Polkadot/apps 中的以下位置检查验证节点的状态：

*Network*（网络）> *Staking*（质押）> *Staking overview*（概览）

此选项卡提供了连接到网络的所有活跃验证人的概况。在顶部，指示可用的验证节点插槽的数量，以及已发信号表示要成为验证节点的节点数量。您可以单击 _Waiting_ （等待中）选项卡来确认您的节点是否在等待队列中。

您的验证节点将保留在等待队列中，直到被网络选择将其包含在验证人集中。验证人集会在每个 era （时代）进行更新，只要有空置插槽，就允许接纳新节点。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-3.png')} />
</div>

感谢您以 Snakenet （蛇网）验证人身份支持 HydraDX！ 🎉
