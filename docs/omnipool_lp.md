---
id: omnipool_lp
title: Single-Sided LPing
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The cutting-edge design of the HydraDX Omnipool unlocks the possibility of single-sided liquidity provisioning: Anyone can provide liquidity only for the asset they want, and as much as they want (up to the respective TVL cap for the asset). This resolves one of the main drawbacks of standard XYK AMMs which require that liquidity providers (LPs) deposit a pair of assets in equivalent value.

Liquidity in the HydraDX Omnipool is concentrated, meaning that by providing your asset you gain instant exposure to all other assets in the Omnipool. Forget about liquidity fragmentation and the need to spread your liquidity across several trading pools.

## The Hub Token LRNA

Single-sided liquidity provisioning is made possible by our hub token called Lerna (LRNA). Every time liquidity is added, the Omnipool will mint a corresponding amount of LRNA to keep the pool in balance. Accordingly, LRNA will be burnt to reflect any removal of liquidity. These mechanisms ensure that the value of LRNA does not significantly fluctuate when assets are added or removed from the Omnipool.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/omnipool/lrna.png')} width="300px" />
</div>


Another way to understand the hub token concept is to imagine every single asset within the Omnipool as a synthetic 50/50 liquidity pool, with the only difference being that the 2nd leg of the pair is always LRNA i.e. TKN:LRNA.

This design allows the Protocol to use LRNA as a proxy which reflects the value locked in the Omnipool, including trading activity and price fluctuations, in an abstract manner.