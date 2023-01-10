---
id: participate_in_referenda
title: 参加公投
---

import useBaseUrl from '@docusaurus/useBaseUrl';

这篇文章提供了关于如何参与公投的分步指南：投票和提案。为此，您可以选择使用两种工具：**[Commonwealth.im](#cw)** 或 **[Polkadot/apps](#polkajs)**。 

在您决定参与之前，我们强烈建议您通读“学习/民主”部分中的 **[知识文章](/democracy_referenda)** 。在那里你会找到一些关于公投背后机制的重要细节。

:::caution
HydraDX 民主模块将于 **2021 年 9 月 15 日** 或之后推出。请不要在该日期之前尝试任何显示的操作。
:::

## 使用 Commonwealth.im {#cw}

### 在公投中投票 {#cw-vote}
您可以通过导航到 HydraDX Commonwealth 页面上的 **[公投选项卡](https://commonwealth.im/hydradx/referenda)** 来查看所有可供投票的公投。

要对正在进行的公投进行投票，您需要单击它。之后，您将看到一个显示所有相关详细信息的页面。

在 *Cast Your Vote* （投您的票）部分，填写以下信息：

* Amount to vote （投票数量）- 这是您愿意锁定以支持公投的 HDX 令牌数量
* Conviction multiplier （信念系数）- 这是共同决定您 **[投票权重](/democracy_referenda#referenda-votes-weighing)** 的系数。

之后，通过单击 `Vote yes`（投票是）或 `Vote no`（投票否）并签署交易进行投票。

### 提出公投提案 {#cw-propose}
要提出公投，请访问 **[HydraDX Commonwealth 页面](https://commonwealth.im/hydradx/)**，然后单击顶部菜单中的 *New Thread*（新帖子）> *New democracy proposal*（民主新提案）。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/cw-proposal.jpg')} />
</div>

在上面显示的字段中填写信息。最重要的参数是：
* Module（模块）
* Function（功能）
* 您提议调用的函数指定的任何附加信息
* Deposit（存款）- 您愿意为支持该提案而存入的 HDX 令牌数量

在上面的例子中，Module（模块）是 *余额*，而 Function（功能）是 *设置余额*，用于修改一个给定帐户的自由和储备余额。

要提交提案，请单击 `Send transaction`（发送交易）并使用您的钱包签名。

在链上提交提案并签署交易后，您的提案应出现在 **[提议公投列表](https://commonwealth.im/hydradx/referenda)** 中。

:::caution
每个投票期间，获得最高支持（*附议* ）的公投提案进入投票轮次。随着公投数量的增加，无法保证您的提案将获得足够的支持以进入投票。无法撤回公投提案，这意味着您的资金可能会被长期锁定。

恶意公投提案受到惩罚。HydraDX 议会和技术委员会有权取消任何恶意提出的公投。结果是存入的令牌将被烧毁。
:::

## 使用 Polkadot/apps {#polkajs}

### 在公投中投票 {#polkajs-vote}
<<<<<<< Updated upstream
您可以通过导航到 Polkadot/apps 中的 [*Governance*（治理）> *Democracy*（民主）](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy) 来查看所有公开投票的公投。
=======
您可以通过导航到 Polkadot/apps 中的 **[*Governance*（治理）> *Democracy*（民主）](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy)** 来查看所有公开投票的公投。
>>>>>>> Stashed changes

要在公投中投票，请单击旁边的 `Vote`（投票）按钮。

在弹出窗口中，填写以下信息：

* Vote value（投票值） - 这是您愿意锁定以支持公投的 HDX 令牌数量
* Conviction multiplier（信念系数） - 这是共同决定您 **[投票权重](/democracy_referenda#referenda-votes-weighing)** 的系数

之后，通过单击 `Vote Nay`（否） 或 `Vote Aye`（是）来投票并签署交易。

### 提出公投 {#polkajs-propose}
通过 Polkadot/apps 提出公投包括两个步骤：提交原像，以及在链上提交提案。

#### 01 提交原像 {#polkajs-propose-01}
<<<<<<< Updated upstream
要提交原像，请访问 Polkadot/apps 并导航至 [*Governance*（治理） > *Democracy*（民主）](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy)。
=======
要提交原像，请访问 Polkadot/apps 并导航至 **[*Governance*（治理） > *Democracy*（民主）](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy)**。
>>>>>>> Stashed changes

单击 *Submit preimage* （提交原像）后，您应该会看到以下弹出窗口：

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-preimage.jpg')} />
</div>

在上面显示的字段中填写信息。最重要的参数是：
* 发送提案的帐户
* 提案范围
* 提案操作

在上面的例子中，提案范围是 *余额* ，操作是将令牌从一个帐户 *强制转移* 到另一个帐户。

在提交原像并签署交易之前，请确保复制原像哈希以在下一步使用它。

#### 02 提交提案 {#polkajs-propose-02}
<<<<<<< Updated upstream
要提交公投提案，请访问 Polkadot/apps 中的 [*Governance*（治理）> *Democracy*（民主）](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy)。
=======
要提交公投提案，请访问 Polkadot/apps 中的 **[*Governance*（治理）> *Democracy*（民主）](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy)**。
>>>>>>> Stashed changes

单击 `Submit proposal`（提交提案）后，您应该会看到以下弹出窗口：

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-proposal.jpg')} />
</div>

输入上一步中的原像哈希值，以及您愿意为提案存入的令牌数量。最低为 10,000 HDX。

在链上提交提案并签署交易后，您的提案应出现在提议的公投列表中。

:::caution
每个投票期间，获得最高支持（*附议* ）的公投提案进入投票轮次。随着公投数量的增加，无法保证您的提案将获得足够的支持以进入投票。无法撤回公投提案，这意味着您的资金可能会被长期锁定。

恶意公投提案受到惩罚。HydraDX 议会和技术委员会有权取消任何恶意提出的公投。结果是存入的令牌将被烧毁。
:::
