---
id: omnipool_trading
title: 高效交易
---

import useBaseUrl from '@docusaurus/useBaseUrl';

传统的 DeFi 系统的特点是流动性分散化，将流动性分散在多个交易池中。 这导致了经济效率的低下：更多的跃点和更浅的流动性，造成更高的价格影响和滑点。通过将所有流动性合并到一个交易池中，HydraDX Omnipool（万能池）实现了其他 AMM 无法比拟的高效交易。

## 传统 AMM：流动性碎片化

先驱 XYK AMM 模型标志着 DeFi 的一个关键时刻，它使去中心化和无需许可的交易成为可能。 XYK 池的简单性促进了 DeFi 的最初采用，但今天我们面临的，是由此产生的经济效率低下阻碍了 DeFi 的深化采用。

<div style={{textAlign: 'center'}}>
  <img alt="Omnipool" src={useBaseUrl('/omnipool/trading-1.jpg')} width="300px" />
</div>

XYK 模型的缺陷之一是，交易池仅限于成对资产。 碎片化的流动性，导致更高的价格影响和更多的跳跃和滑点。 上面截图中 ETH-AAVE 的交易路线，提供了一个实际例子：
- 85% 为将 ETH 与 AAVE 直接 Swap（产生 0.3% 的费用）;
- 15% 为将 ETH 换成 UNI，然后将 UNI 换为 AAVE（产生两次 0.3% 的交易费用）。

## HydraDX Ominipool：统一流动性

得益于尖端的设计，Omnipool 中的流动性真正发挥了作用。 通过 LRNA 连接所有流动性，Omnipool 内的资产可以直接访问那些存入 Omnipool 的任何其他资产的全部流动性。 这允许无缝的链上执行，并使 Swap 能够在单笔交易中完成，而无需在各个独立的交易池之间跳跃。 

此外，根据内部研究，Omnipool 中令牌数量和总锁定价值（TVL）的增加导致滑点减少，呈指数级改善。

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/omnipool/trading-2.jpg')} width="300px" />
</div>

举个例子，假设 TKN 资产分布在 4 个不同的流动性池中，流动性水平各不相同。 在交易者想要用 DAI 换取 TKN 的情况下，他们只能使用 100 万美元的 TKN-DAI 池的直接流动性。 如果他们的交易规模很大（例如 10 万美元以上），大部分交易可能会先通过 DAI-ETH 池，然后是传统 XYK 环境中的 TKN-ETH 池。

然而，对于 Omnipool，同样的 500万 美元 TKN 资产（1000 万美元 TVL 的 50%）和 300 万美元的 DAI 将集中在一个池中。 因此，如果交易者继续在 HydraDX Omnipool 中进行相同的交易，他们将在直接 Swap 中，获得 500 万美元 TKN 和 300 万美元 DAI 流动性的全部效益，从而大大降低了价格的整体影响。
