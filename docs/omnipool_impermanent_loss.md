---
id: omnipool_impermanent_loss
title: Impermanent Loss
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page provides guidance which will help you understand how impermanent loss (IL) may affect Liquidity Providers (LPs) in the Hydration Omnipool.

It begins with a brief introduction to the concept of impermanent loss, followed by a description of how Omnipool’s design interacts with IL. There are many factors which may influence the IL which any given LP suffers, and this makes it very difficult to make any reliable predictions. Keeping this disclaimer in mind, we have simulated some model scenarios which will help you get a better grasp of IL in the Omnipool.

## What is IL?
Impermanent loss (or divergence loss) is the risk faced by liquidity providers to Automated Market Makers (AMMs). It occurs when there is a difference in value between providing tokens in an AMM liquidity pool as opposed to simply holding them in a wallet.

AMMs consist of multiple tokens (usually two) which are paired together in a liquidity pool. IL occurs when the tokens inside the pool diverge in price. The greater the divergence, the greater the risk of negative returns for the pool's LPs.

The risk is referred to as "impermanent" because the loss is only realized when LPs withdraw their tokens from the pool. If the relative prices of tokens in the pool return to their original state when the tokens were deposited, the loss is minimized or eliminated. If, on the other hand, an LP decides to exit their position with IL, the loss becomes “permanent”.

## Design of the Hydration Omnipool

The Hydration Omnipool, in its most basic form, can be thought of as a collection of XYK AMM pools in which each of the different TKN assets is paired with the hub token LRNA. This design lies at the core of one of our distinguishing features: Single-sided LPing, or the ability of LPs to provide liquidity for a single asset only.

To enable single-sided LPing, the Protocol will automatically mint/burn a corresponding amount of LRNA tokens every time liquidity is provided/withdrawn. Since all tokens have a pair with the hub token, LRNA acts as a price proxy providing an efficient way to determine the relative value of any two given assets in the Omnipool.

## IL in the Hydration Omnipool

The impermanent loss experienced by any TKN position in the Omnipool is determined by the divergence in value between TKN and LRNA. A stronger price correlation between TKN and LRNA suggests a smaller IL (and vice versa).

Since LRNA has a liquidity pair with all other tokens in the Omnipool, it can be seen as a weighted price index which reflects the aggregate movement of all different assets within the Omnipool. The [basket of Omnipool assets](https://app.hydradx.io/stats/overview) includes both stablecoins and other cryptocurrencies. 

This design has important implications for IL. If TKN achieves a price movement which is aligned with the rest of the crypto market (e.g. with DOT or BTC), then the expected IL of TKN in the Omnipool shall be lower as compared to an XYK pool between TKN/stablecoin, however that same IL will be higher as compared to an isolated XYK pool between TKN/DOT (or BTC).

### The Impact of Asset Weights

Another factor that affects IL is the weight of TKN in the Omnipool, which is the relative size of the liquidity for TKN compared to the Omnipool TVL. A TKN with a bigger weight in the Omnipool will display a stronger price correlation with LRNA. This means that an (isolated) price movement of TKN will cause lower IL as compared to the situation where TKN has a lower weight in the Omnipool.

### IL Modelling

The graphic below illustrates how much IL would be incurred based on the price change of TKN relative to LRNA, and the asset weight of TKN.

For example, based on a 1% TKN weight in the Omnipool, if TKN price decreases 35% relative to the price of LRNA, the resulting IL would be ~2%.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/omnipool_impermanent_loss/il_model.png')}  />
</div>

X-axis = TKN price change relative to LRNA  
Y-axis = Impermanent Loss  
Colored lines = Different initial weights assigned to TKN as a % of the total Omnipool

### IL Distribution Mechanisms

The design of the Omnipool described above requires safeguards which ensure that the IL experienced on any specific asset would not be unfairly leaked to other LPs.

For this purpose, the Protocol has put mechanisms in place for distributing IL according to the specific LP positions in the subpools. In both cases described above, the correction takes place when an LP withdraws their position.

#### TKN price went up
In cases where the spot price of the provided TKN went up, the Protocol will divert some of the LPed assets as POL and distribute LRNA to the LP to compensate for the IL.

Let’s suppose that Bob LPed 1000 DAI to the Omnipool when the price was $p_\alpha = 1$ LRNA/DAI, for which he received $s_\alpha = 500$ shares. We suppose there are $S_i = 10,000$ shares total in the DAI pool, and $R_i = 19,000$.

Bob would now like to withdraw liquidity. The current price is $p_i^Q = 1.2$ LRNA/DAI.

Since the price went *up*, the total quantity of DAI in the pool has gone *down*. The pool therefore will not confiscate any shares from Bob, and will have to give Bob some LRNA.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/omnipool_impermanent_loss/il_math_1.png')}  />
</div>

#### TKN price went down
If the spot price of the asset has decreased since the LP provided liquidity, some of the LP shares will get transferred into POL to balance out the IL. 

Let’s suppose that Alice LPed $100$ DOT to the Omnipool when the price was $p_\alpha = 10$ LRNA/DOT, and for which she received $s_\alpha = 200$ shares. We suppose there are $S_i = 1000$ shares total in the DOT pool, and $R_i = 710$ DOT.

She would now like to withdraw her liquidity. The current price is $p_i^Q = 5$ LRNA/DOT.

Note that the price going *down* means that the number of DOT in the Omnipool went *up*; we therefore will have plenty of DOT to give Alice, so she will not receive any LRNA. However, the protocol *will* confiscate some of her shares as protocol-owned-liquidity.

The equation is:
<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/omnipool_impermanent_loss/il_math_2.png')}  />
</div>

So $66.667$ of Alice’s $200$ shares are transferred to the protocol.

Alice is entitled to the proportion of DOT in the pool calculated from the ratio of her remaining $133.333$ shares to the total $1000$ shares in the DOT pool.

I.e., Alice is entitled to:
<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/omnipool_impermanent_loss/il_math_3.png')}  />
</div>

In this case, it is clear that not enough fees accrued to the DOT pool to overcome Alice’s impermanent loss. Higher fee revenue would result in $R_i > 710$, which could turn Alice’s loss into profit, even with a similar price movement.

## LRNA Imbalance Mechanisms
In one of the examples above, LRNA is distributed to LPs to balance out IL. This exit of LRNA from the Omnipool causes an imbalance as the Omnipool now has less LRNA than what was minted / burned as a result of LPs depositing / removing assets from the Omnipool.

Assuming the LP sells the LRNA obtained back into the Omnipool for an asset, this results in LRNA’s value to decrease which would affect all other liquidity positions within the Omnipool.

To mitigate the negative effects of the value depreciation of LRNA, the Hydration Protocol has implemented the following mechanisms:

### Fees

In the first place, there are three types of fees which act as a safeguard. For more info please refer to our [fees](/fees) page.

#### Protocol Fees
Hydration charges Protocol fees upon every swap which are paid in LRNA. Whenever there is a negative LRNA imbalance, Hydration will continually burn the Protocol fee until it has reached 2x the amount of any LRNA sold back into the Omnipool.

#### Dynamic Fees during Increased Volatility
Protocol fees are dynamic and adjusted based on the current market volatility. If prices in the Omnipool are volatile, each swap will incur higher Protocol fees which are potentially translated to a higher amount of LRNA which is burnt.

#### Withdrawal Fees

Withdrawal fees are another type of dynamic fees which are designed to ensure that the Protocol and its LPs are not at loss whenever liquidity is withdrawn immediately after a price change. These fees are calculated as the percentage difference between the spot price and the oracle price. This also ensures that any potential manipulation of the spot price would not be profitable.

### Protocol-Owned Liquidity

In the second place, Hydration owns a substantial amount of Protocol-owned liquidity (POL). POL is held by the Protocol itself and it acts as the “liquidity of last resort”. It ensures that there is always a base level of liquidity within the Omnipool. As such, POL helps set a floor on how much the price of LRNA could decrease even if all 3rd-party LPs were to withdraw their liquidity from the Omnipool. 

### Liquidity Restrictions

Finally, the Hydration Protocol has put some liquidity restrictions in place. One such restriction is to make **LRNA unvailable for purchase** on the market. The only way to obtain LRNA is to receive it as partial compensation for the IL experienced by LPing. This is meant to cap the total amount of LRNA that could leave the Omnipool, and therefore limit how much LRNA could suddenly be sold back to the Omnipool.

Asset caps are another type of liquidity restriction. Asset caps are defined per asset and they ensure that any token cannot make up a greater proportion of the Omnipool than initially defined by the cap.
