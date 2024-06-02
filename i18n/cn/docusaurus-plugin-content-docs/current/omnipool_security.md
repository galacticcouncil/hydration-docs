---
id: omnipool_security
title: 最先进的安全性
---

HydraDX 协议采用多层安全策略。 在本页，您将找到各种措施的说明，这些措施共同保护您的资金安全。

HydraDX 安全策略的最基本层面，包括精心进行的研究和开发，以及严格的同行审查过程。最重要的是，HydraDX 努力让所有关键代码，都经过严格的审计。安全策略的下个层面，是慷慨的漏洞赏金计划，这使得发现和披露漏洞（而不是利用它们）变得有价值。

最后，协议还实施了一系列最先进的措施，旨在 **[保护您的流动性](#protecting-liquidity)**  免受有毒资产或（经济）剥削等不幸事件的影响。

## 审计 {#audits}

HydraDX 协议对所有关键任务代码进行审计，并定期 **[发布审计报告](https://github.com/gacticcouncil/HydraDX-audit-reports)**。

HydraDX Omnipool（万能池）的 Rust 实现安全审计，是由 **[Runtime Verification](https://runtimeverification.com/)** 执行的。 Runtime Verification 是成熟的行业领导者，它的客户涵盖了 NASA、Ethereum 和 Polkadot 这些知名的项目。安全审计的范围包括 **[HydraDX Omnipool Pallet](https://github.com/galacticcouncil/HydraDX-node/blob/master/pallets/omnipool/src/)** 的源代码，及其 **[数学逻辑](https://github.com/galacticcouncil/HydraDX-math/tree/main/src/omnipool)** 和 **[资产注册表](https://github.com/galacticcouncil/warehouse/tree/main/asset-registry)**，以及作为（Substrate）依赖项包含的第三方库。 审计结果于 2022 年 9 月公布，您可以在 **[此处](https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220907-Runtime-Verification-Security-Audit.pdf)** 查阅完整报告。

2022 年 3 月，Omnipool 的经济/数学审计由 **[BlockScience](https://block.science/)** 完成。 BlockScience 是一家领先的 web3 原生公司，致力于为 Graph Protocol 和 Protocol Labs（Filecoin）等分析复杂系统。本次审计的范围是概述 AMM 规范，特别关注支撑 Omnipool 的数学和经济概念，以及这些机制对流动性供应和交易活动的影响。 您可以在 **[此处](https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220322-BlockScience-Omnipool-Report%2Baddendum-by-HydraDX.pdf)** 查阅完整报告，包括我们事后整改的附录。

## 漏洞赏金计划 {#bug-bounties}

HydraDX 设立了 **[慷慨的漏洞赏金计划](https://immunefi.com/bounty/Hydradx/)**，为检测和负责任地披露错误和其他漏洞，提供了强有力的激励。

基于 **[Immunefi 漏洞严重程度分级系统 V2.2](https://immunefi.com/immunefi-vulnerability-severity-classification-system-v2-2/)**，根据漏洞的影响进行奖励分配。这是一个简化的 5 级量表，网站/APP、智能合约和区块链/DLT，分别进行分级，重点关注提报漏洞的影响。 

## Omnipool 流动性保护机制 {#protecting-liquidity}

HydraDX 协议正在不断研究和实施确保 Omnipool 流动性安全的各种机制。这些机制，将会在不幸（但并非不可能）的场景中被激活，即：参与者试图通过滥用有毒资产（类似 LUNA 的情况）或某种恶意利用来耗尽 Omnipool 的流动性。

### TVL 上限 {#tvl-caps}

所有资产，均受特定 TVL 上限的约束，该上限定义了任何给定资产在 Omnipool 中可以代表的最大流动性比例。 与风险较低（高市值或稳定）的资产相比，风险较高的资产，其上限会比较低。 这使得 HydraDX 协议可以显著降低有毒资产流动可能造成的损害：攻击者将无法使用恶性通胀资产，消耗超过其 TVL 上限的流动性。

### 预言机 {#oracles}

链上预言机，会提供 Omnipool 中任一资产在特定时间范围内（例如 10 个区块）的平均价格信息。预言机是一个重要的监控工具，通过它，HydraDX 协议可检测违规行为和潜在的价格操纵攻击，并采取相应行动。

### 动态提款费用 {#dynamic-withdrawal-fees}

为了保护 Omnipool 的流动性，所有流动性头寸的提取，均需缴纳费用。 提款费用是动态的，从总金额的 0.01% 到 1% 不等。 费用的确切金额，是在提款时根据所涉及的资产确定的。

提款费用，实现了与“资产当前现货价格和其前 10 个区块平均价格（来自 HydraDX 预言机）之间价差”的联动。 现货价格和平均价格之间出现巨大差异，表明可能存在价格操纵攻击，此时，提款费用的提高，可有效消除此类攻击的经济动机。

在价格剧烈波动导致某资产现货价格与预言机平均价格价差大于 1% 的情况下，该资产流动性的增加或提取将暂停。 一旦低于这个阈值，相关操作将会恢复。

### 区块内交易限制 {#trade-limits}

为了保护 Omnipool 免受经济剥削，有一个限制，即：一项资产的流动性在一个区块中的交易，不能超过 50% —— 超过这个限额的交易，应该分散在多个区块中。

### 目标功能暂停 {#tfp}

如果在链上检测到某些可疑行为，目标功能暂停允许 HydraDX 技术委员会迅速采取行动，暂停与特定资产相关的某些或所有操作。 这是一个最终的手段，可以帮助减轻损害，并为进一步调查提供了机会。
