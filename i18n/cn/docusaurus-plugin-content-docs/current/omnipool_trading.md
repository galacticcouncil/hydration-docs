---
id: omnipool_trading
title: 高效交易
---

import useBaseUrl from '@docusaurus/useBaseUrl';

传统 DeFi 系统的特点是流动性分散化，即：流动性分散在多个交易池中。这个系统跃点较多，流动性较浅，导致价格影响变大滑点升高、经济效率低下。HydraDX Omnipool（万能池）通过将所有流动性合并到一个交易池中，实现了其它 AMM 无法比拟的高效率交易。

## 传统 AMM：流动性碎片化

先驱 XYK AMM 的出现，标志着 DeFi 领域一个关键时刻的到来，因为它让去中心化和无需许可交易成为了可能。 简单的 XYK 池，对 DeFi 初期的广泛采用，起到了促进作用。但时值今日，我们不得不面临这样一个局面： XYK 模型低下的经济效率，已经阻碍了 DeFi 应用的进一步发展。

<div style={{textAlign: 'center'}}>
  <img alt="Omnipool" src={useBaseUrl('/omnipool/trading-1.jpg')} width="300px" />
</div>

XYK 模型的缺陷之一，是交易池只能由成对的资产构成。 流动性碎片化，导致更大的价格影响和更高的跃点和滑点。 上面截图 ETH-AAVE 的交易路线，为我们提供了一个生动的例子：
- 85% 的交易，将 ETH 直接交换成 AAVE（产生 0.3% 的费用）;
- 余下的 15% 交易，则要先将 ETH 交换成 UNI，然后再将 UNI 交换为 AAVE（在两个交易池里分别产生了 0.3% 的交易费用）。

## HydraDX Omnipool：统一流动性

得益于 Omnipool 的尖端设计，流动性才真正发挥出它应有的作用。 通过 LRNA 连接所有流动性，Omnipool 的任一资产，可直接访问池中所有资产统一形成的全部流动性，且与链上执行无缝衔接，交换在一次交易中完成，无需在彼此独立的交易池中间进行任何跳转。 

此外，根据内在研究，随着 Omnipool 令牌数量和锁定价值（TVL）的不断增加，对于滑点的减少将呈指数级改善。

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/omnipool/trading-2.jpg')} width="300px" />
</div>

举个例子（如上图），假设资产 TKN 分布在 4 个不同的流动池中，4 池流动性水平各不相同。 交易者如果想用（少量的）DAI 交换 TKN，他们可选择拥有 100 万美元流动性的 TKN-DAI 池。 但如果交易规模加大，如 10 万美元以上，大部分的交易，可能要先通过 DAI-ETH 池，然后是传统 XYK 环境的 TKN-ETH 池来完成。

然而，对于 HydraDX Omnipool，同样的 500 万美元 TKN 资产（1000 万美元 TVL 的 50%）和 300 万美元 DAI，将会集中到一个池子里。 如果交易者在 Omnipool 中执行以上相同的交易，他们将享受由 500 万美元 TKN 和 300 万美元 DAI 所形成的全部流动性效益，并在一次交换中完成交易，整体上的价格影响将大大降低。

