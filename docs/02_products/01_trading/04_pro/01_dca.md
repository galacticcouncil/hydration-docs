---
title: Automated Trading
---

import useBaseUrl from '@docusaurus/useBaseUrl';

[Hydration DCA](https://app.hydration.net/dca) and [Split Trade](https://app.hydration.net/trade) (easy DCA) are two user-friendly features which allow traders to implement the dollar-cost-averaging (DCA) strategy when trading in the Omnipool - in a permissionless and non-custodial way.

Following the DCA strategy, orders are not placed at once but instead split into smaller trades which are executed at regular intervals of time. By doing so, traders may protect themselves against price volatility and achieve an average price. Additionally, splitting a large order in smaller chunks will result in less slippage.

Hydration has two DCA implementations - the [full DCA feature](#hydration-dca), and [Split Trade](#split-trade) (easy DCA) which can be found on the main trading page. Further down, you can learn more about these features.

If you are looking for step-by-step guidance, check out the [how-to place a DCA order guide](/guides/trade/dca).

## Hydration DCA {#hydration-dca}

[Hydration DCA](https://app.hydration.net/dca) provides an intuitive UI which enables users to fine-tune their DCA orders in the Omnipool.

When setting up their order, users specify the amount of Asset A they would like to spend in order to obtain Asset B, as well as the frequency of the trades - in hours (approximation) or number of blocks (more granularity).

After placing the order, the Hydration DCA pallet makes sure that trades are scheduled at the specified intervals until the predetermined amount of Asset A has been spent. Placing multiple DCA orders which are executed in parallel is supported.

Users can track the status of their orders on the UI. Open orders can at any time be terminated for the remaining amount.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/omnipool_dca/dca.jpg')} />
</div>  


## Split Trade (easy DCA) {#split-trade}

[Split Trade](https://app.hydration.net/trade) is a more simple implementation of DCA directly into the main trade page. It provides users with a one-click solution for splitting larger orders in order to protect themselves from slippage.

When activated, Split Trade will split the order in smaller chunks until the size of the trades is small enough to achieve less than 0.1% slippage (estimate only - the exact slippage for future trades can never be predicted in advance).

Open Split Trade orders can be terminated by the user at any time, just like any regular DCA order.
