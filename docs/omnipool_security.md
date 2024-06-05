---
id: omnipool_security
title: State of the Art Security
---

The Hydration Protocol pursues a multi-layered security strategy. On this page you will find a description of the various measures which work together to keep your funds safe.

The most basic layer of the Hydration security strategy consists carefully conducted research and development, as well as rigorous peer review processes. On top of that, Hydration strives to have all mission-critical code undergo rigorous audits. The next layer of the security strategy is a generous bug bounty program which makes it worthwhile to find and disclose vulnerabilities (as opposed to exploiting them).

Finally, the protocol has implemented a combination of state-of-the-art measures which are designed to [protect your liquidity](https://docs.hydration.net/omnipool_security#protecting-liquidity) against unfortunate events such as toxic assets or (economic) exploits.

## Audits {#audits}

The Hydration protocol conducts audits of all mission-critical code and [publishes the audit reports](https://github.com/galacticcouncil/Hydration-audit-reports) on a regular basis. 

The security audit of the Rust implementation of the Hydration Omnipool was performed by [Runtime Verification](https://runtimeverification.com/) - an established industry leader with clients such as NASA, Ethereum and Polkadot. The scope of the security audit includes the source code of [Hydration Omnipool pallet](https://github.com/galacticcouncil/HydraDX-node/blob/master/pallets/omnipool/src/),its [mathematical logic](https://github.com/galacticcouncil/HydraDX-math/tree/main/src/omnipool) and [asset registry](https://github.com/galacticcouncil/warehouse/tree/main/asset-registry), as well as 3rd party libraries which have been included as a (Substrate) dependency. The results of the audit were published in September 2022, you can [consult the full report here](https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220907-Runtime-Verification-Security-Audit.pdf).

In March 2022, the economic/math audit of the Omnipool was completed by [BlockScience](https://block.science/) - a leading web3 native firm dedicated to analyzing complex systems for the likes of Graph Protocol and Protocol Labs (Filecoin). The scope of this audit was to provide an overview of the AMM specification with a special attention to the mathematical and economic concepts underpinning the Omnipool, together with the implications of those mechanisms for liquidity provisioning and trading activity. You can [consult the full report here](https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220322-BlockScience-Omnipool-Report%2Baddendum-by-HydraDX.pdf), including the addendum by Hydration with post-factum changes.

## Bug Bounty Program {#bug-bounties}

Hydration has set up a [generous bug bounty program](https://immunefi.com/bounty/hydradx/) which provides strong incentives for the detection and responsible disclosure of bugs and other vulnerabilities. 

Rewards are distributed according to the impact of the vulnerability based on the [Immunefi Vulnerability Severity Classification System V2.2](https://immunefi.com/immunefi-vulnerability-severity-classification-system-v2-2/). This is a simplified 5-level scale, with separate scales for websites/apps, smart contracts, and blockchains/DLTs, focusing on the impact of the vulnerability reported.

## Mechanisms for Protecting Omnipool Liquidity {#protecting-liquidity}

The Hydration protocol is continuously researching and implementing mechanisms that keep the Omnipool liquidity safe. These mechanisms are activated in the unfortunate (but not impossible) scenario that an actor tries to drain liquidity from the Omnipool by abusing a toxic asset situation (LUNA-like scenario) or some malicious exploit.

### TVL Caps {#tvl-caps}

All assets are subject to a specific TVL cap defining the maximum proportion of liquidity which any given asset can represent in the Omnipool. Riskier assets will have lower caps compared to less risky (high mcap or stable) assets. This allows the Hydration protocol to significantly limit the damage which may potentially be caused from toxic asset flows: Using a hyper-inflationary asset, attackers cannot drain more liquidity than its TVL cap.

### Oracles {#oracles}

On-chain oracles provide average price information for a specified Omnipool asset during a given timeframe (e.g. 10 blocks). Oracles are an essential monitoring tool that allow the Hydration protocol to detect irregularities and potential price manipulation attacks - and to act accordingly.

### Dynamic Withdrawal Fees {#dynamic-withdrawal-fees}

To protect the Omnipool liquidity, all withdrawals of liquidity positions are subject to a fee. The withdrawal fee is dynamic, ranging between 0.01% and 1% of the total amount. The exact fee amount is determined at the time of withdrawal based on the asset in question.

The withdrawal fee covers the spread between the current spot price of the asset and the its average price over the previous 10 blocks (fetched from the Hydration oracles). A large discrepancy between spot and average price indicates a potential price manipulation attack, and a higher withdrawal fee is applied to eliminate the economic incentives for carrying out such an attack.

In the scenario that extreme volatility leads to the spread between the spot price and average oracle price of an asset being greater than 1%, liquidity addition or withdrawal for that asset will be temporarily paused. These operations will again resume once this threshold is respected.

### In-block Trade Limits {#trade-limits}

To protect the Omnipool against economic exploits, there is a limit in place that no more than 50% of an asset's liquidity can be traded in a single block - trades that are greater than this amount should be spread across multiple blocks.

### Targeted Function Pausing {#tfp}

If some suspicious behaviour is detected on-chain, Targeted Function Pausing allows the Hydration Technical Committee to take swift action and temporarily pause certain or all actions relating to specific assets. This action of last resort can help mitigate the damage and allow for further investigation.
