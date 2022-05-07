---
id: omnipool_design
title: Omnipool Design
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The HydraDX Omnipool is a novel type of AMM which concentrates all liquidity in a single trading pool, thus unlocking
an array of efficiencies. This doc specifies the mechanics which power the Omnipool.

## Tokens

The HydraDX system includes two tokens: LRNA and HDX. HDX is the governance token, while LRNA is the
"hub" token used by the Omnipool. HydraDX chain fees is paid in LRNA, and partial impermanent loss
mitigation is also be paid in LRNA.

## The Omnipool

### Hub token

The Omnipool uses LRNA as a "hub" token through which all trades are routed, avoiding the segmentation of liquidity
inherent in AMMs which require LPs to provide liquidity in all tokens.

### A note on notation

Throughout this page, we will refer to the change in some amount $A$ as $\Delta A$. When $A$ is a pool variable
(e.g. the quantity of some asset in the pool), we adopt the convention that $\Delta A$ is negative if the pool
variable is decreasing (e.g. some amount of the asset is leaving the pool) and $\Delta A$ is positive if the pool
variable is increasing (e.g. some amount of the asset is entering the pool). In particular, note that this means
when we consider a swap of $\Delta A$ of one asset for $\Delta B$ of another asset, one of these will be negative.

A user variable $s$ meanwhile will have the sign convention that flows to the user are denoted by positive $\Delta s$
while flows away from the user are denoted by negative $\Delta s$. In particular, for a token transfer to/from the pool
for some token $T$, we will have $\Delta t = -\Delta T$.

We will also adopt the notational convention that $A^+ = A + \Delta A$.

### Swap Execution

In version 1, the prices behave as though each TKN1/LRNA pool
is a constant product CFMM, although other CFMMs continue to be under investigation.

Let $Q_1$ be the quantity of LRNA in the TKN1 pool and $T_1$ be the quantity of TKN1.
Suppose a trader stipulates they wish to sell $\Delta T_1$ of TKN1 for TKN2. Then $Q_1 T_1 = Q_1^+ T_1^+$, so
with asset fee $f_A$ and protocol/LRNA fee $f_P$, we have

$$
\Delta Q_1 = Q_1 \frac{-\Delta T_1}{T_1^+}\\
\Delta Q_2 = -\Delta Q_1 (1 - f_P)\\
\Delta T_2 = T_2 \frac{-\Delta Q_2}{Q_2^+} (1 - f_A)\\
$$

The LRNA or "protocol" fee is $- f_P \Delta Q_1$ (which is positive since $\Delta Q_1$ is negative)
and the asset fee is $- f_A T_2 \frac{-\Delta Q_2}{Q_2^+}$.

### Providing Liquidity to Omnipool
Liquidity providers (LPs) may contribute a single asset, and in return receive a share of the pool *of that asset*. When
the LP removes liquidity, they may receive both the asset they provided and LRNA.

Single-asset liquidity providers for some TKN cannot always be given only the token they contributed, because if the
price of TKN has gone up and substantial amounts of TKN have left the pool, LPs of TKN are splitting a much smaller pot.
The protocol, meanwhile, has a much larger amount of LRNA that has been traded in for TKN. Instead of simply allowing
LPs to take the loss, the protocol *splits* the matched pool with the LPs. If the price of TKN goes up (via LRNA
being traded into the pool for TKN), the LPs are entitled to some of that LRNA. On the other hand, if the price of TKN
goes down (via TKN being sold to the pool for LRNA), the protocol is entitled to some TKN.

Let $p$ be the current price of TKN, $p_0$ the price when an LP initially provided liquidity, $\Delta s$ the number of shares
the LP wishes to withdraw, $B$ the number of TKN shares owned *by the protocol*.

Note that since shares are burned when liquidity is removed, $\Delta s < 0$.

If the price of TKN has gone down ($p < p_0$), the LP will be withdrawing only TKN (no LRNA). The protocol will take
control of some TKN shares from them, while some shares will be burned.

We first calculate the change to the protocol share ownership of TKN:
$$
\Delta B = max\left(-\frac{p_0 - p}{p + p_0} \Delta s, 0\right)
$$

Note that if $p < p_0$ (the price of TKN has gone down), $\Delta B$ is positive, meaning that the protocol is claiming
some of the $\Delta s$ shares from the LP. If $p > p0$, the protocol claims no asset shares from the LP.

Next, we find the number of shares to burn:
$$
\Delta S = \Delta s + \Delta B
$$
We can then calculate the total amount of TKN the LP receives, which is simply proportional:
$$
\Delta T = T \frac{\Delta S}{S}\\
\Delta t = -\Delta T
$$
If $p > p_0$, lots of LRNA was traded into
the Omnipool for TKN, so the protocol has extra LRNA go give the LP. Specifically,
$$
\Delta q = - p \left(\frac{2p}{p + p0} \frac{\Delta s}{S} T + \Delta t\right)\\
\Delta Q = Q \frac{\Delta T}{T}
$$
Note that since $\Delta Q \neq -\Delta q$, the LRNA that is not distributed to the LP who is withdrawing liquidity
is burned by the protocol.

### Impermanent Loss of Single-Asset Liquidity Provider
Given the mechanisms described above, the "impermanent loss" of a single asset LP is
$$
\frac{2\sqrt{p p_0}}{p_0 + p} - 1
$$
The single-asset LP has sensitivity only to the TKN/LRNA price, not to prices of other tokens in the Omnipool (except
indirectly via LRNA).
