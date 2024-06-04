---
id: howto_bonds_lbp
title: Acquire Bonds (LBP)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Hydration Protocol uses **Bonds** as part of its strategy to **grow and diversify its Protocol-owned liquidity (POL)**. For this purpose, the Hydration Governance can at any time decide to **issue a given amount of bonds** which will be traded against assets that the Hydration Treasury wishes to accumulate.

This page contains a step-by-step guide on how to acquire Bonds via LBP on Hydration. Before proceeding, we recommend that you get familiar with Bonds: https://docs.hydradx.io/bonds.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bonds_lbp/bonds1.jpg')} />
</div>

### Step 0: Navigate to Hydration Bonds Page

https://app.hydradx.io/trade/bonds

Connect your wallet to Hydration by clicking **`Connect Account` (1 in image above).**

### Step 1: Pick the Bond you want to support

- You will be able to see all current active Bond campaigns **(2)** as well as past campaigns **(3)**.
- Click on **`Trade`**  to enter into the dedicated Bonds campaign which you want to contribute to.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_bonds_lbp/bonds2.jpg')} />
</div>

### Step 2: Participate in the Bonds LBP
:::caution
Before participating in a Liquidity Bootstrapping Pool (LBP), you should first get familiar with how an LBP works.

Find more info [in our docs](https://docs.hydradx.io/lbp).
:::

The Hydration Bonds LBP UI allows you to intuitively execute the swap:

- Select the token you intend to use and enter the amount **(4)**.
- A price graph tracking the LBP price history and price trajectory (without any new trades) is provided for users to reference.

:::note
If the user conducts the swap with any asset other than the targeted asset (USDT in the example above), the protocol will automatically swap that asset into the target asset, meaning that the user will experience additional swap fees and price impact. 

Note that if the user were to sell back the Bond at any time during the LBP auction, there will also be an additional return fee incurred.
:::

- If you would like to adjust your slippage preferences, you can do so by clicking on the **Settings Icon (5).**
- To complete the trade, click on **Swap** **(7)** and sign the transaction using your wallet app.
- Once you have completed the swap, the acquired bonds will show up under My Bonds **(8)**.
