---
id: omnipool_design
title: Omnipool 设计
---

import useBaseUrl from '@docusaurus/useBaseUrl';

HydraDX Omnipool（万能池）是一种新型的 AMM，它将所有流动性集中在一个交易池中，从而提高了一系列效率。本文档包含 Omnipool 的机制的理论规范。

## Omnipool

### 中心令牌

Omnipool 使用 LRNA 作为“中心”令牌，通过它链接所有交易，避免了传统 AMM 因需要为一对令牌提供流动性造成的流动性碎片化。 交易费用和部分无常损失补偿都以 LRNA 支付。

### 符号定义

在本节中，我们把 $A$ 数量上的一些变化称为 $\Delta A$。当 $A$ 是池变量（如池中某些资产的数量）时，我们约定：如果池变量正在减少（如一些资产正在离开池），则 $\Delta A$ 是负值；相反，如果池变量正在增加（如一些资产正在进入池），则为正值。特别要注意的是，当我们考虑将一种资产的 $\Delta A$ 换成另一种资产的 $\Delta B$ 时，这意味着其中一个将为负值。

与此同时，约定一个变量 $s$，流向用户的用 $+\Delta s$ 表示，而从用户流出的用 $-\Delta s$ 表示。特别是对于某些令牌转入/转出池，我们将有 $\Delta t = -\Delta T$。

我们还采用以下符号约定 $A^+ = A + \Delta A$。

### 执行交易

在版本 1 中，价格表现得好像每个 TKN1/LRNA 池都是一个恒积的 CFMM，尽管其他 CFMM 仍在研究中。

设 $Q_1$ 为 TKN1 池中 LRNA 的数量，$T_1$ 是 TKN1 的数量。对于交易者，假定他们为获得 TKN2 而出售 TKN1 的一部分为 $\Delta T_1$，则 $Q_1 T_1 = Q_1^+ T_1^+$。另设资产费 $f_A$ 和 协议/LRNA 费 $f_P$，那么：

$$
\Delta Q_1 = Q_1 \frac{-\Delta T_1}{T_1^+}\\
\Delta Q_2 = -\Delta Q_1 (1 - f_P)\\
\Delta T_2 = T_2 \frac{-\Delta Q_2}{Q_2^+} (1 - f_A)\\
$$

协议/LRNA 费是 $- f_P \Delta Q_1$（此为正值，因 $\Delta Q_1$ 为负值)，资产费是 $- f_A T_2 \frac{-\Delta Q_2}{Q_2^+}$ 。

### 为 Omnipool 提供流动性
流动性提供者（LP）可以提供单一资产，作为回报，他们可以获得该资产池的一部分权益。 当 LP 移除流动性时，他们可能会同时收到提供的资产和 LRNA。
某些 TKN 的单一资产流动性提供者，不会始终仅仅获得他们贡献的令牌，因为：如果 TKN 的价格上涨且有大量的 TKN 离开池子，TKN 的现有 LP 将共享一个更小的池子，同时，协议已有大量的 LRNA，被交易为 TKN。 也就是说，协议不是简单地让 LP 承担损失，而是将匹配池与 LP *分开*。如果 TKN 价格上涨（通过将 LRNA 出售给矿池换取 TKN），LP 有权获得部分 LRNA。 另一方面，如果 TKN 的价格下降（通过将 TKN 出售给矿池换取 LRNA），协议有权获得一些 TKN。

令 $p$ 为 TKN 的当前价格，$p_0$ 为 LP 最初提高流动性时的价格，$\Delta s$ 是 LP 希望提取的权益数量，$B$ 为协议拥有的 TKN 权益数量。

请注意，由于流动性移除时权益就消失了，$\Delta s < 0$。

如果 TKN 的价格下降了（$p < p_0$），LP 将仅能提取 TKN（无 LRNA）。该协议将从他们那里拿走一些 TKN 份额，而一些份额将被销毁。

我们首先计算协议 TKN 份额所有权的变化：

$$
\Delta B = max\left(-\frac{p_0 - p}{p + p_0} \Delta s, 0\right)
$$

请注意，如果 $p < p_0$ （TKN 的价格已经下跌），$\Delta B$ 为正值, 这意味着该协议正在从 LP 那里索取部分 $\Delta s$ 权益。如果 $p > p0$，协议就不向 LP 索取任何资产权益。

接下来，我们找到要销毁的权益数量:
$$
\Delta S = \Delta s + \Delta B
$$
然后我们可以计算出 LP 收到的 TKN 总量，这是成比例的:
$$
\Delta T = T \frac{\Delta S}{S}\\
\Delta t = -\Delta T
$$
如果 $p > p_0$，很多 LRNA 被交易到 Ominipool 来换取 TKN，所以协议有额外的 LRNA 去给 LP。总的来说，
$$
\Delta q = - p \left(\frac{2p}{p + p0} \frac{\Delta s}{S} T + \Delta t\right)\\
\Delta Q = Q \frac{\Delta T}{T}
$$
请注意，由于 $\Delta Q \neq -\Delta q$，没有分配给正在提取流动性的 LP 的 LRNA 被协议销毁。

### 单一资产 LP 的无常损失
鉴于上述机制，单个资产 LP 的“无常损失”是
$$
\frac{2\sqrt{p p_0}}{p_0 + p} - 1
$$
单一资产 LP 仅对 TKN/LRNA 价格敏感，对 Omnipool 中其他令牌的价格不敏感（间接通过 LRNA 除外）。

