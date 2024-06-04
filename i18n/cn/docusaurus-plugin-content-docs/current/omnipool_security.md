---
id: omnipool_security
title: 最先进的安全性
---

Hydration 协议采用多层安全策略，该策略专为确保您的资金安全量身定制。HydraDX Omnipool（万能池）背后的概念，以及它们在 Rust 中的运行时实现，都经过了 **[严格的审计](#audits)**。我们防御策略的第二层，是慷慨的漏洞赏金计划，奖励负责任的漏洞披露。 最后，还有一系列措施共同来 **[保护您的流动性](#protecting-liquidity)**（抵御有毒资产或黑客攻击等不幸事件）。

## 审计 {#audits}

对 Hydration Omnipool 的 Rust 实现安全审计，是由 **[Runtime Verification](https://runtimeverification.com/)** 执行的。 Runtime Verification 是知名的行业领导者，客户包括 NASA、Ethereum 和 Polkadot。安全审计的范围包括 **[Hydration Omnipool pallet](https://github.com/galacticcouncil/HydraDX-node/blob/master/pallets/omnipool/src/)** 源代码，及其 **[数学逻辑](https://github.com/galacticcouncil/HydraDX-math/tree/main/src/omnipool)** 和 **[资产注册表](https://github.com/galacticcouncil/warehouse/tree/main/asset-registry)**，以及作为（Substrate）依赖项包含的第三方库。 审计结果于 2022 年 9 月公布，您可以在 **[此处](https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220907-Runtime-Verification-Security-Audit.pdf)** 查阅完整报告。

2022 年 3 月，Omnipool 的经济/数学审计由 **[BlockScience](https://block.science/)** 完成。 BlockScience 是一家领先的 web3 原生公司，致力于为 Graph Protocol 和 Protocol Labs（Filecoin）等分析复杂系统。本次审计的范围是概述 AMM 规范，特别关注支撑 Omnipool 的数学和经济概念，以及这些机制对流动性供应和交易活动的影响。 您可以在 **[此处](https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220322-BlockScience-Omnipool-Report%2Baddendum-by-HydraDX.pdf)** 查阅完整报告，包括我们事后整改的附录。

## 漏洞赏金计划 {#bug-bounties}

Hydration 正在与区块链安全领域的另一行业领导者 **[Immunefi](https://immunefi.com/)** 合作， 建立一个全面的激励系统，奖励负责任的漏洞和潜在漏洞披露行为。

基于 **[Immunefi 漏洞严重程度分级系统 V2.2](https://immunefi.com/immunefi-vulnerability-severity-classification-system-v2-2/)**，根据漏洞的影响进行奖励分配。这是一个简化的 5 级量表，网站/apps、智能合约和区块链/分布式账本技术具有单独的量表，重点关注所报告漏洞的影响。 

我们正处在设置漏洞赏金计划的最后阶段，很快就会有更多信息。

## Omnipool 流动性保护机制 {#protecting-liquidity}

我们花了一年多的时间研究和设计机制，这些机制将在以下不幸情况下（并非不可能）被激活：参与者试图通过滥用有害资产（类似 LUNA 的情况）或一些恶意利用，来耗尽 Omnipool 的流动性。 我们提出了一系列措施并进行整合，建立了行业领先的安全标准。

其中一项措施，是 *TVL 上限*（又名 Omnipool 权重），它定义了为特定资产提供流动性相对于池中其他所有资产的最大比例。 TVL 上限，将依据 Hydration 民主决策流程对每项资产进行设置。 与新项目令牌相比，为 DOT 或 DAI 等已上市资产设置更高的上限，是合理的。 这将限制潜在的流动性攻击可能会造成的损害。

另一种防御机制，是 *目标函数暂停*。通过这一机制，HydraDX 技术委员会可暂停调用我们 pallet 特定函数的交易，以便我们能够做出快速反应（如暂停提款）从而保护 Omnipool 的流动性。

以上这些，只是我们已经实施的一些机制。 作为未来迭代的一部分，我们正在研究和开发其他的机制，例如可靠的预言机、动态费用（在累积 POL 的同时，降低砸盘的经济效益）、自动交易节流和其它熔断机制的使用。

