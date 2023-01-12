---
id: omnipool_lp
title: 单边提供流动性
---

import useBaseUrl from '@docusaurus/useBaseUrl';

HydraDX Omnipool（万能池）的尖端设计提供了单边流动性供应的可能性：任何人都可以只为他们想要的资产提供流动性，而且数量不限（不超过 Omnipool 设定的对应资产 TVL 上限）。 这解决了标准 XYK AMM 的一个主要缺点，即要求流动性提供者（LP）存入一对等值资产。 

HydraDX Omnipool 中的流动性是集中的，这意味着通过提供您的资产，您可以立即接触到 Omnipool 中所有的其他资产，不再有流动性碎片化以及将流动性分散到多个交易池的需要。

## 枢纽令牌 LRNA

我们的枢纽令牌 Lerna（LRNA）使单边流动性供应成为可能。 每次增加流动性时，Omnipool 都会铸造相应数量的 LRNA 以保持池中的平衡。同理，LRNA 将被销毁以反映任何流动性的去除。 这些机制确保了在 Omnipool 中添加或移除资产时，LRNA 的价值不会出现明显波动。

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/omnipool/lrna.png')} width="300px" />
</div>


理解枢纽令牌概念的另一种方法是，将 Omnipool 中的每一项资产想象成一个合成的 50/50 流动性池，唯一的区别是，该资产的第二条腿始终是 LRNA，即 TKN:LRNA。

这种设计允许协议使用 LRNA 作为代理，以抽象的方式反映锁定 Omnipool 中的价值，包括交易活动和价格波动。
