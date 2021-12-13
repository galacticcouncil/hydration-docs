---
id: omnipool_design
title: Omnipool Design
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Omnipool design

## Tokens

The HydraDX system includes two tokens: LHDX (liquid HDX) and HDX. HDX will be the governance token, while LHDX will
be the "hub" token used by the Omnipool. HydraDX chain fees will be paid in LHDX, and partial impermanent loss
mitigation will also be paid in LHDX.

## The Omnipool

### Hub token

The Omnipool uses LHDX as a "hub" token through which all trades are routed, avoiding the segmentation of liquidity
inherent in AMMs which require LPs to provide liquidity in all tokens.

### Order batching

In each block, swaps are split into their TKN/LHDX pairs and then batch executed at uniform clearing prices. 

As a collator builds the block, they first split each trade intention into TKN/LHDX trades. (Swaps
that already are buying or selling LHDX do not need to be split.)
They then net all TKN/LHDX trades for each TKN in the Omnipool, leaving a single netted TKN/LHDX trade for each TKN.
Next, they prune trades for which the slippage limit is violated, until all trades 
Finally, they execute each of these netted trades against the Omnipool AMM.

### Swap Execution

Mathematically, the TKN1/LHDX and TKN2/LHDX prices are calculated as though they are in separate pools, so the order
in which the netted trades are executed does not matter. In version 1, the prices behave as though each TKN1/LHDX pool
is a constant product CFMM, although other CFMMs continue to be under investigation.

Let Q1 be the quantity of LHDX in the TKN1 pool and T1 be the quantity of TKN1. Then Q1 * T1 = Q1^+ * T1^+, so
(ignoring fees for now)

$$
\Delta Q1 = Q1 (-\Delta T1)/(T1^+)
$$

### Providing Liquidity to Omnipool
Liquidity providers (LPs) may contribute a single asset, and in return receive a share of the pool *of that asset*. When
the LP removes liquidity, they may receive both the asset they provided and LHDX.

Single-asset liquidity providers for some TKN cannot always be given only the token they contributed, because if the
price of TKN has gone up and substantial amounts of TKN have left the pool, LPs of TKN are splitting a much smaller pot.
The protocol, meanwhile, has a much larger amount of LHDX that has been traded in for TKN. Instead of simply allowing
LPs to take the loss, the protocol *splits* the matched pool with the LPs. If the price of TKN goes up (via LHDX
being traded into the pool for TKN), the LPs are entitled to some of that LHDX. On the other hand, if the price of TKN
goes down (via TKN being sold to the pool for LHDX), the protocol is entitled to some TKN.

Let p be the current price of TKN, p0 the price when an LP initially provided liquidity, \Delta s the number of shares
the LP wishes to withdraw, B the number of TKN shares owned *by the protocol*.

If the price of TKN has gone down (p < p0), the LP will be withdrawing only TKN (no LHDX). The protocol will take
control of some TKN shares from them, while some shares will be burned.

We first calculate the change to the protocol share ownership of TKN:

$\Delta B = max((p0 - p)/(p + p0) \Delta s, -B)$

Note that if p < p0 (the price of TKN has gone down), \Delta B is positive, meaning that the protocol is claiming
some of the \Delta s shares from the LP. If p > p0, the protocol tries to give the LP any TKN shares it may have.

Next, we find the number of shares to burn:

\Delta S = \Delta s - \Delta B

We can then calculate the total about of TKN the LP receives, which is simply proportional:

\Delta T = T (\Delta S)/S

If p > p0, it is possible the protocol could not give the LP enough shares. In this case, lots of LHDX was traded into
the Omnipool for TKN, so the protocol has extra LHDX go give the LP. Specifically,

\Delta Q = p * (2p/(p + p0) * (\Delta s)/S * T - \Delta T)

### Impermanent Loss of Single-Asset Liquidity Provider
Given the mechanisms described above, the "impermanent loss" of a single asset LP is

2\sqrt{p*p0}/(p0 + p) - 1

The single-asset LP has sensitivity only to the TKN/LHDX price, not to prices of other tokens in the Omnipool (except
indirectly via LHDX).