---
id: start_nominating
title: 成为提名人
---

import useBaseUrl from '@docusaurus/useBaseUrl';

您可以通过质押 HDX 令牌成为提名人，来帮助保护 HydraDX 网络并获得奖励。与运行验证节点不同，提名过程不需要高级技术技能，因此对于没有足够信心成为验证人的人，推荐使用此选项。

提名时，提名人将其令牌质押给他们选择的验证人。通过这样做，提名人选出了活跃验证人集，并因其参与而获得奖励。作为提名人，您获得的奖励金额，取决于所选验证人设定的佣金百分比：验证人的佣金百分比越高，您获得的质押奖励就越少。

:::warning

提名是一种更容易参与的质押获利方式，但它也有一定程度的风险。如果您质押的验证人行为不当（例如，无法维持所需的正常运行时间），则可能会受到严厉处罚，这可能会导致您质押的令牌发生部分非自愿损失。我们强烈建议您在提名验证人前进行尽职调查！

:::

## 00 质押（Staking）界面 {#00-staking-ui}

要访问质押（Staking）界面，您首先要打开 Polkadot/apps，将其连接到 [公共 HydraDX RPC 节点](/polkadotjs_apps_public) 之一，并确保可以看到您的[帐户余额](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts) 。

:::note

您是否拥有在 Balancer LBP 期间购买的 xHDX？ 在继续操作之前，需您先要 [申领您的 HDX](/claim) 。

:::

确认您可以看到 HDX 余额后，您可以导航到质押（Staking）界面：

*Network* > *Staking*

质押（Staking）界面，具有以下菜单选项：

* **Staking overview**（质押概览）: 在这里，您将找到所有活动验证人的列表以及有关每个验证人的一些基本信息，例如，节点上已质押的 HDX 数量，验证人自己质押的数量，以及收取的佣金。此外，您还可以看到每个验证人获得的 ear 积分以及验证人生成的最后一个区块数。
* **Account actions**（账户操作）: 您可以在此处质押并指定。
* **Payouts**（支付）: 您可以在这里申领您的质押奖励。
* **Targets**（目标）: 您可以在这里估算您的收入。在选择要质押的验证节点时，这是一个不错的开始。
* **Waiting**（等待中）: 在这里，您可以找到等待队列，在队列中，非活跃验证人被置于活跃验证人集前。非活跃验证人将一直留在等待队列中，直到质押足够数量的 HDX 才能进入活跃验证人集。
* **Validator stats**（验证人统计）: 在这里，你可以查询验证人隐藏的地址，可以查看其 era 积分、当选质押量、奖励/惩罚、佣金百分比等详细的历史信息。我们强烈建议您在提名信任的验证节点前，研究这些信息。

## 01 绑定 HDX 代币 {#01-bond-hdx-tokens}

:::warning

绑定的 HDX 令牌对于保证网络的安全性至关重要。您所选定验证节点的不当行为可能会受到惩罚，这可能会导致您的资金发生非自愿损失。我们强烈建议您在选择提名验证人时进行尽职调查。

:::

要绑定 HDX 令牌，请在 质押（Staking）界面中导航到 *Account actions* ：

*Network* > *Staking* > *Account actions* > *+ Stash*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-1.png')} />
</div>

单击 *Stash* （存放账户）按钮后，您应该看到带有四个可编辑字段的绑定偏好设置选项： 
* **stash account**（存储账户）: 拥有您大多数 HDX 令牌的帐户，HDX 将通过此帐户质押。
* **controller account**（控制账户）: 拥有少量 HDX 的帐户，用于支付质押过程中的费用（开始、停止提名等操作）。
* **value bonded**（绑定的金额）: 您要绑定的 HDX 数量。不要绑定您拥有的所有 HDX ，而是留下一些以支付后续发生的交易费用。
* **payment destination**（支付目的账户）: 质押奖励将被发送到的帐户。

:::warning

不要绑定所有可用的 HDX 代币。留下少量 HDX 以支付交易费用。如果您绑定了所有拥有的 HDX 令牌，则可能无法签署交易以开始提名过程。

:::

调整偏好设置选项后，单击 **Bond** （绑定）并签署交易完成绑定程序。 

:::caution

出于安全原因，不建议拥有相同的“存储”和“控制”帐户。但是，因目前在 Snakenet 上禁止转账，现在还无法使用单独的帐户。强烈建议您在将来有可能时尽快切换到单独的“存储”和“控制”帐户。

:::

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-2.png')} />
</div>

## 02 提名验证人 {#02-nominate-a-validator}

绑定 HDX 之后，您现在可以指定一个验证人。 在决定提名之前，您应该进行尽职调查，并根据其当前及历史表现来决定要提名哪些验证人。 为此，请参考[上面讨论](#00-staking-ui)的质押（Staking）界面中的信息。

:::note

HydraDX Snakenet每个验证节点 **最多只能有64个提名人**。选择要提名的节点时，请确保验证人尚未达到提名的最大数量，否则您的提名将无效，而且您将不会获得质押奖励。每个验证人的提名数量，可在质押（Staking）界面的 *Waiting* （等待中）菜单选项卡中找到。

:::

要提名一个或多个验证人，请导航至：

*Network* > *Staking* > *Account actions* > *Nominate* (绑定 HDX 旁边的按钮)

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-1.png')} />
</div>

单击 *Nominate* （提名）按钮后，您应该会看到一个名为 *nominate validators* （提名验证人）的弹出窗口。在这里，您可以从可用验证人列表中选择一个或多个验证人进行提名。强烈建议您提名多个验证人，以防止如果您在一个验证人呢中没有获得一席之地（例如，验证人过于拥挤或未被选入活跃验证人集中）而被停用。您最多可以提名16位验证人。在每个 era 中，只有一个提名是有效的，您不能同时由多个验证人选择。 您的质押将自动分配给您选择的验证人中的一个，以最大程度地分散投资和获利。您只需选择绑定的 HDX 的数量和您信任的验证人。  

要提名选定的验证人，请单击 _Nominate_ （提名）并签署交易。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>


## 03 检查您的提名状态 {#03-check-the-status-of-your-nominations}

完成提名过程后，您的提名将在当前 era 的剩余时间内处于无效状态。 一旦下一个 era 开始，只要您提名的验证节点中的至少一个包含在活跃验证人集中且不会过于拥挤而将您拒之门外，您的提名就会生效。 如果您所有的验证人都在 Waiting （等待中）队列里，那么您的各个提名也将保持无效，并且您将在这个 era 不会获得任何奖励。

要查看提名状态，请导航至：

*Network* > *Staking* > *Account actions*

您可以在 *Waiting nominations* （等待提名）下看到您的无效提名：

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-3.png')} />
</div>

提名被激活后，您应该在 *Active nominations* （活跃提名）列表中找到它：

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-4.png')} />
</div>  

:::note

请您经常审查您所提名的验证节点。您的某些验证人可能会更改其佣金百分比，这会对您的奖励产生负面影响。通过经常检查节点提名状态，您将能够通过更新提名验证人列表来做出反应。  

:::

## 04 调整提名

如果您的某些验证人被超额认购或更改其佣金，则可能需要调整提名。

为此，请打开 Polkadot/apps 并导航至：
*Network* > *Staking* > *Account actions*

点击您的帐户详细信息旁边的三个点，然后选择 _Set nominees_（设置提名人）：

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-set-nominees.png')} />
</div>

在下面可能已经熟悉的窗口中，您可以删除验证人或添加新的验证人。
调整提名可以随时进行，无需停止提名。 当下一个 era 开始（24h）时，将应用这些更改。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>  


感谢您成为 Snakenet（蛇网）提名人，感谢您对 HydraDX 的支持！ 🎉
