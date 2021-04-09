---
id: 开始_提名
title: 成为提名人
---

import useBaseUrl from '@docusaurus/useBaseUrl';

通过成为提名人，您可以质押一些HDX代币来帮助保护HydraDX网络并获得奖励。与运行验证节点不同，提名过程不需要高级技术技能，因此对于不完全有信心成为验证节点的任何人，推荐使用此选项。

提名时，提名人将其代币质押给他们选择的验证人。通过这样做，提名人选出了活跃的验证人集，并因其参与而获得奖励。作为提名人，您获得的奖励金额取决于所选验证人设定的佣金百分比：验证人的奖励佣金百分比越高，您获得的质押奖励就越少。

:::警告

提名是一种更容易参与的质押获利方式，但它也带有一定程度的风险。如果您质押的验证人行为异常（例如，无法维持所需的正常运行时间），大幅消减的惩罚就会发生，这可能会导致您质押的代币发生部分非自愿损失。我们强烈建议您在提名验证人之前进行尽职调查！

:::

## 00 Staking界面 {#00-staking界面}

要访问staking界面，您首先需要打开Polkadot /应用程序，将其连接到 [公共HydraDX RPC节点](/polkadotjs_apps_public) 之一，并确保可以看到您的帐户余额 [balance](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts)

:::提示

您是否拥有在Balancer LBP事件期间购买的xHDX？在继续操作之前，您首先需要 [申领您的HDX](/claim) 。

:::

确认您可以看到HDX余额后，您可以导航到Staking界面：

*Network* > *Staking*

Staking 界面，具有以下菜单选项：

* **Staking overview**: 在这里，您将找到所有活动验证人的列表以及有关每个验证人的一些基本信息，例如，节点上已质押的HDX数量，验证人自己质押的数量以及收取的佣金。此外，您还可以看到每个验证人获得的当前积分以及验证人生成的最后一个区块数。
* **Account actions**: 您可以在此处质押并指定。
* **Payouts**: 您可以在这里申领您的质押奖励。
* **Targets**: 您可以在这里估算您的收入。在选择要质押的验证节点时，这是一个不错的起点。
* **Waiting**: 在这里，您可以找到等待队列，在该队列中，非活跃验证人放置于活跃验证人集前。验证人将保留在等待队列中，直到质押足够数量的HDX才能进入活跃验证人集。
* **Validator stats**: 在这里，你可以查询验证人隐藏的地址，可以看到era积分、当选股份、奖励和斜线等详细的历史信息。我们强烈建议您在提名信任的验证节点前研究这些信息。

## 01 绑定HDX代币 {#01-绑定hdx代币}

:::警告

绑定的HDX代币对于保证网络的安全性至关重要。您指定的验证人节点的不当行为可能会受到大幅削减的惩罚，这可能会导致您的资金非自愿损失。我们强烈建议您在选择提名验证人时进行尽职调查。

:::

要绑定HDX代币，请在Staking UI中导航到 *Account actions* ：

*Network* > *Staking* > *Account actions* > *+ Stash*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-1.png')} />
</div>

单击 *Stash* 按钮后，您应该看到带有四个可编辑字段的绑定选项： 
* **stash account**: 拥有大多数HDX令牌的帐户，HDX将通过此帐户质押。
* **controller account**: 持有少量HDX的帐户，用于支付质押过程中的费用（开始和停止提名等）。
* **value bonded**: 您要绑定的HDX数量。不要绑定您拥有的所有HDX，而是留下一些以支付以后发生的交易费用。
* **payment destination**: 权益奖励将被发送到的帐户。

:::警告

不要绑定所有可用的HDX代币。留下少量HDX以支付交易费用。如果您绑定了所有拥有的HDX代币，则可能无法签署交易以启动提名程序。

:::

调整完绑定选项后，单击 **Bond** 并签署交易完成绑定程序。 

:::警示

出于安全原因，“存储”和“控制”帐户，不建议采用相同的。但是，由于在Snakenet上禁止转账，因此当前无法使用单独的帐户。强烈建议您在将来可能的情况下尽快切换到单独的“存储”和“控制”帐户。

:::

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-2.png')} />
</div>

## 02 提名验证人 {#02-提名验证人}

绑定HDX之后，您现在可以指定一个验证人。 在继续之前，您应该进行尽职调查，并根据其（过去）的表现来决定要提名哪些验证人。 为此，请参考[上面讨论](#00-staking界面)的Staking界面中的信息。

:::提示

HydraDX Snakenet每个验证节点 **最多只能有64个提名人**。选择要提名的节点时，请确保验证者未达到提名的最大数量，否则您的提名将无效，且您将不会获得本金的奖励。可以在Staking UI的 *Waiting* 菜单选项卡中，找到每个验证者的提名数量。

:::

要提名一个或多个验证者，请导航至：

*Network* > *Staking* > *Account actions* > *Nominate* (button next to your bonded HDX)

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-1.png')} />
</div>

单击 *Nominate* 按钮后，您应该会看到一个名为 *nominate validators* 的弹出窗口。在这里，您可以从可用验证者列表中选择一个或多个验证者进行提名。强烈建议您提名多个验证者，以防止如果您在一个验证者中没有获得一席之地（例如，验证者过于拥挤或未被选入有效的验证人集中）而被停用。您最多可以提名16位验证人。在每个era中，只有一个提名是有效的，不能同时由多个验证者选择。 您的股份将自动分配给您选择的验证人中的一个，以最大程度地分散投资和获利。您只需选择绑定的HDX的数量和您信任的验证器。  

要提名选定的验证者，请单击 _Nominate_ 并签署交易。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>


## 03 检查您的提名状态 {#03-检查您的提名状态}

完成提名过程后，您的提名将在当前era的其余时间处于无效状态。 一旦下一个era开始，只要您提名的验证人节点中的至少一个包含在活动的验证人集中且不会过于拥挤而将您拒之门外，您的提名就会生效。 如果您所有的验证人都在等待队列中，那么您各自的提名也将保持无效，并且您将在这个era不会获得任何奖励。

要查看提名状态，请导航至：

*Network* > *Staking* > *Account actions*

您可以在 *Waiting nominations* 下看到您的无效提名：

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-3.png')} />
</div>

提名被激活后，您应该在 *Active nominations* 列表中找到它：

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-4.png')} />
</div>  

:::提示

确保您不定时重新审查提名。您的某些验证人可能会更改其佣金百分比，这会对您的奖励产生负面影响。通过经常检查提名状态，您将能够通过更新提名验证人列表来做出反应。  

:::

## 04 调整提名

如果您的某些验证人被超额认购或更改其佣金，则可能需要调整提名。

为此，请打开Polkadot / apps并导航至：
*Network* > *Staking* > *Account actions*

点击您的帐户详细信息旁边的三个点，然后选择 _Set nominees_：

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-set-nominees.png')} />
</div>

在下面可能已经熟悉的窗口中，您可以删除验证器和/或添加新的验证人。
调整提名可以随时进行，无需停止提名。 当下一个era开始（24h）时，将应用更改。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>  


感谢您成为Snakenet提名人对HydraDX的支持！ 🎉
