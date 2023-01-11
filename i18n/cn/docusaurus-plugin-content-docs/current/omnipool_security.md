---
id: omnipool_security
title: 最先进的安全性
---

HydraDX 协议采用多层安全策略，该策略专为确保您的资金安全量身定制。HydraDX Omnipool 背后的概念，以及它们在 Rust 中的在线运行，都经过了 **[严格的审计](#audits)**。我们防御策略的第二层，是慷慨大方的漏洞赏金计划，奖励那些负责任的漏洞披露。 最后，一系列措施共同 **[保护您的流动性](#protecting-liquidity)**（防止不良资产或黑客攻击等不幸事件）。

## 审计 {#audits}

对 HydraDX Omnipool 的 Rust 部署安全审计，是由 **[Runtime Verification](https://runtimeverification.com/)** 执行的。 Runtime Verification 是知名的行业领导者，客户包括 NASA、Ethereum 和 Polkadot。安全审计的范围包括 **[HydraDX Omnipool pallet](https://github.com/galacticcouncil/HydraDX-node/blob/master/pallets/omnipool/src/)** 源代码，及其 **[数学逻辑](https://github.com/galacticcouncil/HydraDX-math/tree/main/src/omnipool)** 和 **[资产注册表](https://github.com/galacticcouncil/warehouse/tree/main/asset-registry)**，以及作为（Substrate）依赖项包含的第三方库。 审计结果于 2022 年 9 月公布，您可以在 **[此处](https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220907-Runtime-Verification-Security-Audit.pdf)** 查阅完整报告。

2022 年 3 月，Omnipool 的经济/数学审计由 **[BlockScience](https://block.science/)** 完成。 BlockScience 是一家领先的 web3 原生公司，致力于为 Graph Protocol 和 Protocol Labs（Filecoin）等分析复杂系统。本次审计的范围是概述 AMM 规范，特别关注支撑 Omnipool 的数学和经济概念，以及这些机制对流动性供应和交易活动的影响。 您可以在 **[此处](https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220322-BlockScience-Omnipool-Report%2Baddendum-by-HydraDX.pdf)** 查阅完整报告，包括我们事后整改的附录。

## 漏洞赏金计划 {#bug-bounties}

HydraDX 正在与区块链安全领域的另一行业领导者 **[Immunefi](https://immunefi.com/)** 合作， 建立一个全面的激励系统，奖励负责任的漏洞和潜在漏洞披露行为。

基于 **[Immunefi 漏洞严重程度分级系统 V2.2](https://immunefi.com/immunefi-vulnerability-severity-classification-system-v2-2/)**，根据漏洞的影响进行奖励分配。这是一个简化的 5 级量表，网站/apps、智能合约和区块链/分布式账本技术具有单独的量表，重点关注所报告漏洞的影响。 

我们正处在设置漏洞赏金计划的最后阶段，很快就会有更多信息。

## Ominipool 流动性保护机制 {#protecting-liquidity}

我们花了一年多的时间研究和设计机制，这些机制在不幸（但并非不可能）的情况下被激活，即参与者试图通过滥用有害资产情况（类似 LUNA 的情况）或一些恶意利用来耗尽 Omnipool 的流动性。 我们提出了一系列措施，这些措施结合在一起建立了行业领先的安全标准。

其中一项措施是 TVL 上限（又名 Omnipool 权重），它定义了可以为特定资产提供的流动性相对于池中所有其他资产的最大比例。 TVL 上限是按照 HydraDX 的民主决策流程为每项资产设置的。 与项目相关的令牌相比，DOT 或 DAI 等已建立的资产将具有更高的上限是有道理的。 这限制了潜在的流动性攻击可能造成的损害。

另一种防御机制是目标函数暂停，它使 HydraDX 技术委员会能够暂时暂停调用我们 pallet 特定函数的交易。 这使我们能够快速做出反应，例如暂停提款以保护 Omnipool 的流动性。

这些只是我们已经实施的一些机制。 作为未来迭代的一部分，我们正在研究和开发其他东西，例如可靠的预言机、动态费用（在累积 POL 的同时降低砸盘的经济效率）、自动交易节流和断路器的其他用法。
