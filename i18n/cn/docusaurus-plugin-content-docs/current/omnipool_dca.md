---
id: omnipool_dca
title: DCA 交易
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**[HydraDX DCA](https://app.hydradx.io/dca)** 和 **[拆分交易](https://app.hydradx.io/trade)** (简易 DCA) ，是两个用户友好型功能，允许交易者在 Omnipool 中进行交易时，以无需许可和非托管的方式，实施美元成本平均（DCA）策略。

按照 DCA 策略，订单不是一次下达，而是分成较小的交易后定期执行。通过这样做，交易员可以保护自己免受价格波动的影响，并获得平均价格。此外，将大订单分成较小的块，滑点会减少。

HydraDX DCA 有两种实现方式 - [完整功能 DCA](#hydradx-dca) 和 [拆分交易](#split-trade)（简易 DCA），您可在主交易页面上找到它们。 往下，您可以了解这些功能的更多有关信息。

如果您正在寻找分步指南，请查看 **[下达 DCA 订单指南](/howto_dca)**。

## HydraDX DCA {#hydradx-dca}

**[HydraDX DCA](https://app.hydradx.io/dca)** 提供了直观的 UI，用户可以在 Omnipool 中微调 DCA 订单。

在设置订单时，用户可以指定他们想花费的资产 A 数量，以获得资产 B，以及交易频率 - 以小时（近似值）或区块（更精细）为单位。

下达订单后，HydraDX DCA 托盘，确定会按照指定的时间间隔安排交易，直到预设数量的资产 A 被花完。支持下达多个并列执行的 DCA 订单。

用户可在 UI 上跟踪订单状态。未平仓的订单，可随时终止剩余的金额。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/omnipool_dca/dca.jpg')} />
</div>  


## 拆分交易 (简易 DCA) {#split-trade}

**[拆分交易](https://app.hydradx.io/trade)** 是在交易页面上更加直接简单地实现 DCA。它为用户提供了“一键”解决方案，用于拆分较大的订单，以保护自己免受滑点影响。

激活后，拆分交易会将订单分割成更小的块，直到交易规模小到可以实现 <0.1% 的滑点（这仅是估计 - 未来交易的确切滑点，永远无法预测）。

用户可以随时终止执行中的拆分交易订单，就像常规的 DCA 订单一样。
