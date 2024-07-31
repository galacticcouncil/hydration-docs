---
id: omnipool_trading
title: Efficient Trading
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The traditional DeFi landscape is characterised by fragmented liquidity which is dispersed across several trading pools. This leads to economic inefficiencies: More hops and shallower liquidity create higher price impact and slippage. By combining all liquidity in a single trading pool, the Hydration Omnipool enables efficient trading like no other AMM.

## Traditional AMMs: Liquidity Fragmentation

The pioneer XYK AMM model marked a pivotal moment for DeFi which made decentralized and permissionless trading possible. The simplicity of XYK pools boosted the initial adoption of DeFi, however today we stand at a point where the resulting economic inefficiencies hinder the continued adoption.

<div style={{textAlign: 'center'}}>
  <img alt="Omnipool" src={useBaseUrl('/omnipool/trading-1.jpg')} width="300px" />
</div>

One of the flaws of the XYK model is that trading pools are constrained to pairs of assets. Fragmented liquidity results in a higher price impact due to more hops and slippage. The route of the ETH-AAVE trade in the screenshot above provides a practical example:
- 85% direct from ETH to AAVE (incurring 0.3% fee);
- 15% ETH traded for UNI first then the UNI is swapped for AAVE (incurring two 0.3% swap fees).

## Hydration Omnipool: Unified Liquidity

Thanks to the cutting-edge design, liquidity in the Omnipool truly *acts as* *one*. By having all the liquidity connected through LRNA, the assets within the Omnipool have direct access to the entirety of liquidity for any other asset that is also deposited into the Omnipool. This allows for a **seamless on-chain execution** and enables swaps to be completed in a **single transaction** with no hopping required between various isolated trading pools. 

Furthermore, based on internal research, the increase in the number of tokens and total value locked (TVL) within the Omnipool lead to exponential improvements in slippage reduction.

<div style={{textAlign: 'left'}}>
  <img alt="login" src={useBaseUrl('/omnipool/trading-2.jpg')} width="300px" />
</div>

To illustrate with an example, imagine the TKN asset is distributed across 4 different liquidity pools with varying levels of liquidity. In the scenario that a trader wants to trade DAI for TKN, they would only have access to the direct liquidity of the \$1M TKN-DAI pool. If their trade size is substantial (e.g. \$100K+), the majority of the trade will likely be routed through a DAI-ETH pool followed by the TKN-ETH pool in the traditional XYK landscape.

However, with the Omnipool, that same \$5mm (50% of the total \$10mm TVL) of the TKN asset and \$3mm of DAI would be concentrated in one pool. As such, if a trader proceeds to make the same trade in the Hydration Omnipool, they will get the entire benefit of the \$5mm of TKN and \$3mm of DAI liquidity in their direct swap, materially reducing the overall price impact.
