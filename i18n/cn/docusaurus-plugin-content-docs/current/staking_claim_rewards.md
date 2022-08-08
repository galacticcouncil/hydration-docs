---
id: staking_claim_rewards
title: 领取质押奖励
---

import useBaseUrl from '@docusaurus/useBaseUrl';

在每个 era （时代）结束时，都会向验证池分配其 **[质押奖励](/staking_rewards)** ，其中包括基本奖励、era （时代）得分奖励和小费。但是，这些奖励不会自动分配到验证人及其提名人账户，只有通过 **触发支付** 领取质押奖励后，才会启动分配。而质押奖励，必须在 **84 个 era （时代）内** 领取，一旦过了这个时限，相关奖励信息就会从链中删除，验证池将再也无法收到该 era （时代）的奖励。

在规定时限内触发支付的过程，是一个重要的安全特征。通过要求为每个验证池和每个 era （时代）提交支付交易，奖励的分配分散在多个区块中。如果将所有奖励分配给单个区块内的所有验证人和提名人，链的稳定性就可能会受到威胁。

## 如何触发支付
通过使用 Polkadot/apps ，验证人和他们的提名人都可以轻松触发支付。为此，导航到 *Network*（网络）> *Staking*（质押）> *Payouts*（支付）。或者，直接点击这个链接：https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/staking/payout

当选择 *My stashes* （我的 stash 账户）时，您应该会看到所有的奖励，这些奖励可用于支付您质押所得的令牌，并显示相应的 era （时代）号。点击 *Payout all* （支付所有），通过提交一系列交易，可以获得过去 era （时代）的所有奖励。

<img src={useBaseUrl('/staking-claim-rewards/payouts.jpg')} />

触发支付后，您将被要求使用您的 HDX 账户签署交易。一旦确认，选定的 era （时代）奖励，将分配给各自的验证人和他们的提名人。
