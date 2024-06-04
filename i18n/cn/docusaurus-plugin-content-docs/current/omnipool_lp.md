---
id: omnipool_lp
title: 单边提供流动性
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Hydration Omnipool（万能池）的尖端设计提供了单边流动性供应的可能性：任何人都可以只为他们想要的资产提供流动性，而且数量不限（不超过 Omnipool 设定的资产 TVL 上限）。 这根除了标准 XYK AMM 的一个主要痛点：流动性提供者（LP）必须存入一对等价值的资产。 

Hydration Omnipool 的流动性是集中的，这意味着通过提供资产，您可以获得在 Omnipool 中所有其他资产面前即时曝光的机会。请忘掉流动性碎片化和将流动性分散到多个交易池的需求吧！

## 枢纽令牌 LRNA

我们的枢纽令牌 Lerna（LRNA）让提供单边流动性成为可能。 每次增加流动性时，Omnipool 都会铸造相应数量的 LRNA 以保持池的平衡。同理，LRNA 销毁，将被用于反映任何流动性的去除。 这些机制确保了在 Omnipool 中添加或移除资产时，LRNA 的价值不会出现明显波动。

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/omnipool/lrna.png')} width="300px" />
</div>


理解枢纽令牌概念的另一种方法是，将 Omnipool 中的每项资产，想象成为一个合成的 50/50 流动性资产对池。唯一的区别，是该资产对的“第二条腿”，始终是 LRNA，即 TKN:LRNA。

这种设计允许协议以 LRNA 为代理，以抽象的方式反映 Omnipool 中锁定的价值，包括交易活动和价格波动。

