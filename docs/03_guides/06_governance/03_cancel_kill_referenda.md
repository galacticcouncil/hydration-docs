---
title: Cancel or Kill a Referenda
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page you will find a **step-by-step guide for cancelling or killing a referendum**.

Before proceeding, we encourage you to read the following articles to better understand the process:

* [Referenda](docs/07_governance/02_democracy_referenda.md)
* [Kill & Cancel](docs/07_governance/06_democracy_cancel_ref.md)

### 00 Access Polkadot-JS UI

* Visit the [Polkadot-JS UI](https://polkadot.js.org/apps/)
* Ensure you are connected to the **Hydration** network:
  * Look for the Hydration logo in the top left corner
  * If you see a different logo, click it to open the network selector
  * Scroll down to Hydration, select a server
  * Click 'Switch' to connect

<div style={{textAlign: 'center'}}>
<img alt="subsquare_UI_new_referendum" src={useBaseUrl('/img/guides/opengov/polkadot_js.jpg')} width="500px" />
</div>

### 01 Navigate to Referenda

* Go to **Governance > Referenda**
* Click the **Add Preimage** button
* Select your account in the **Send from Account** dialog

### 02 Configure Proposal

* In the **Propose** section, select **Referenda**
* Choose your intended action:
  * **cancel(index)** - Stop the referendum without slashing the decision deposit
  * **kill(index)** - Stop the referendum and slash the decision deposit

<div style={{textAlign: 'center'}}>
<img alt="subsquare_UI_new_referendum" src={useBaseUrl('/img/guides/opengov/submit_preimage.jpg')} width="500px" />
</div>

### 03 Specify Referendum

* Enter the index number of the referendum you wish to cancel/kill
* For example, enter '256' to target **Referendum #256**

### 04 Submit Transaction

* Review your configuration
* Sign the transaction through your wallet
* Wait for transaction confirmation

To learn more about governance processes, check out our [OpenGov guides](docs/07_governance).