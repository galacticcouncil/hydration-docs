---
id: omnipool_design
title: Omnipool Design
---

#Tokens

The HydraDX system includes two tokens: LHDX (liquid HDX) and HDX. HDX will be the governance token, while LHDX will
be the "hub" token used by the Omnipool. HydraDX chain fees will be paid in LHDX, and partial impermanent loss
mitigation will also be paid in LHDX.

#The Omnipool

###Hub token

The Omnipool uses LHDX as a "hub" token through which all trades are routed, avoiding the segmentation of liquidity
inherent in AMMs which require LPs to provide liquidity in all tokens.

###Order batching

In each block, swaps are split into their TKN/LHDX pairs and then batch executed at uniform clearing prices. 

As a collator builds the block, they first split each trade intention into TKN/LHDX trades. (Swaps
that already are buying or selling LHDX do not need to be split.)
They then net all TKN/LHDX trades for each TKN in the Omnipool, leaving a single netted TKN/LHDX trade for each TKN.
Next, they prune trades for which the slippage limit is violated, until all trades 
Finally, they execute each of these netted trades against the Omnipool AMM.

Mathematically, the TKN1/LHDX and TKN2/LHDX prices are calculated as though they are in separate pools, so the order
in which the netted trades are executed does not matter. In version 1, the prices behave as though each TKN1/LHDX pool
is a constant product CFMM, although other CFMMs continue to be under investigation.