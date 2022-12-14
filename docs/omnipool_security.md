---
id: omnipool_security
title: State of the Art Security
---

The HydraDX Protocol pursues a multi-layered security strategy which is specifically tailored to keep your funds safe. The concepts behind the HydraDX Omnipool, as well as their runtime implementation in Rust, have been subjected to [rigorous audits](#audits). The second layer of our defence strategy is a [generous bug bounty program](#bug-bounties) which rewards the responsible disclosure of any vulnerabilities. Finally, a combination of measures which work together to [protect your liquidity](#protecting-liquidity) (against unfortunate events such as toxic assets or hacks).

## Audits {#audits}

The security audit of the Rust implementation of the HydraDX Omnipool was performed by [Runtime Verification](https://runtimeverification.com/) - an established industry leader with clients such as NASA, Ethereum and Polkadot. The scope of the security audit includes the source code of [HydraDX Omnipool pallet](https://github.com/galacticcouncil/HydraDX-node/blob/master/pallets/omnipool/src/), its [mathematical logic](https://github.com/galacticcouncil/HydraDX-math/tree/main/src/omnipool) and [asset registry](https://github.com/galacticcouncil/warehouse/tree/main/asset-registry), as well as 3rd party libraries which have been included as a (Substrate) dependency. The results of the audit were published in September 2022, you can [consult the full report here](https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220907-Runtime-Verification-Security-Audit.pdf).

In March 2022, the economic/math audit of the Omnipool was completed by [BlockScience](https://block.science/) - a leading web3 native firm dedicated to analyzing complex systems for the likes of Graph Protocol and Protocol Labs (Filecoin). The scope of this audit was to provide an overview of the AMM specification with a special attention to the mathematical and economic concepts underpinning the Omnipool, together with the implications of those mechanisms for liquidity provisioning and trading activity. You can [consult the full report here](https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220322-BlockScience-Omnipool-Report%2Baddendum-by-HydraDX.pdf), including our addendum with post-factum changes.

## Bug Bounty Program {#bug-bounties}

HydraDX is working with [Immunefi](https://immunefi.com/) - another industry leader in the field of blockchain security, to set up a comprehensive system of incentives which rewards the responsible disclosure of bugs and potential exploits.

Rewards are distributed according to the impact of the vulnerability based on the [Immunefi Vulnerability Severity Classification System V2.2](https://immunefi.com/immunefi-vulnerability-severity-classification-system-v2-2/). This is a simplified 5-level scale, with separate scales for websites/apps, smart contracts, and blockchains/DLTs, focusing on the impact of the vulnerability reported. 

We are in the final stages of setting up the bug bounty program, more info soon.

## Mechanisms for Protecting Omnipool Liquidity {#protecting-liquidity}

We have spent over a year researching and designing mechanisms which are activated in the unfortunate (but not impossible) scenario that an actor tries to drain liquidity from the Omnipool by abusing a toxic asset situation (LUNA-like scenario) or some malicious exploit. We have come up with a bundle of measures which - combined together - establish industry-leading safety standards.

One of these measures are the TVL caps (aka Omnipool weights) which define the maximum proportion of liquidity which can be provided for a particular asset relative to all other assets in the pool. The TVL cap is set per asset by following the democratic decision-making process at HydraDX. It makes sense that established assets such as DOT or DAI will have higher caps as compared to project-related coins. This limits the damage a potential liquidity attack can inflict.

Another defensive mechanism is the targeted function pausing which enables the HydraDX Technical Committee to temporarily pause transactions calling specific functions of our pallets. This allows us to quickly react and e.g. pause withdrawals to protect the Omnipool liquidity.

These are just some of the mechanisms that we have already put into place. As part of future iterations, we are researching and developing additional stuff such as reliable oracles, dynamic fees (making dumps less economically efficient while accruing POL), automated transaction throttling and other usage of circuit breakers.
