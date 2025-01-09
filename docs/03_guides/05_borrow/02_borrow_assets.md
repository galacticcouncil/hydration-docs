---
title: Borrow Assets
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This guide covers:

- [How to borrow assets](#borrow)
- [How to manage liquidation risk](#risk-management)
- [How to repay borrowed assets](#repay)

You can also check out our [Borrowing product docs](/products/borrowing/overview).

## How to Borrow Assets {#borrow}

### Step 1: Access the Borrowing Dashboard

- Go to the **Lending UI.**

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/guides/borrow/borrow/01.png')} />
</div>

### Step 2: Choose an Asset to Borrow
- Navigate to the **"Assets to Borrow"** section.
- Click the **"Borrow"** button on the asset you wish to borrow.
- Alternatively, you can click anywhere outside the borrow button on the asset to see more detailed information, such as **Max LTV**, **Liquidation Threshold**, and **Liquidation Penalty**.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/guides/borrow/borrow/02.png')} width="600px" />
</div>

### Step 3: Specify the Amount

- In the **Borrow Asset** dialog box, enter the amount you want to borrow.
- Review the details to ensure accuracy.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/guides/borrow/borrow/03.png')} width="600px" />
</div>

### Step 4: Confirm the Transaction

- Sign the transaction to finalize your borrowing request.

**Congratulations!** You have successfully signed the borrowing contract.

## How to Manage Liquidation Risk {#risk-management}

Liquidation is the process where a portion of your supplied collateral is sold off to repay borrowed funds. This occurs if your borrowing position becomes too risky, typically when your Health Factor drops below 1 or your Loan-to-Value (LTV) ratio exceeds the allowed threshold. Liquidation helps protect the platform from potential losses by ensuring that outstanding loans are adequately backed by collateral.

On Hydration, the Health Factor and Loan-to-Value (LTV) ratio are essential to maintaining the security of your collateral against borrowed assets. Keeping these metrics in check helps you avoid liquidation risk and manage your borrowing position effectively.

### Health Factor

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/guides/borrow/borrow/04.png')} width="800px" />
</div>

The Health Factor measures how secure your collateral is in relation to your borrowed assets. The higher the Health Factor, the safer your position. A Health Factor below 1 indicates a high-risk zone where liquidation could occur.

- **Above 2.0** – Safe: Your position is secure.
- **1.0 or Lower** – Risky: Your collateral is at risk of liquidation.

### Loan-to-Value (LTV)

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/guides/borrow/borrow/05.png')} width="800px" />
</div>

The Current LTV ratio shows how much of your collateral's value is being used as debt. Keeping this ratio below the Liquidation Threshold reduces the chance of liquidation. Reducing your LTV can help secure your position.

### Liquidation Threshold

The Liquidation Threshold is the maximum Loan-to-Value (LTV) ratio you can reach before being at risk of liquidation. If your LTV exceeds this threshold, part of your collateral may be liquidated to cover the debt.

**Example:** With a 65% Liquidation Threshold, you can borrow up to 65% of your collateral’s value before facing liquidation risk.

### How to Manage Liquidation Risk

Increase your health factor by:

- Supplying more collateral to raise your Health Factor.
- Repaying borrowed assets to lower your debt and improve both Health Factor and LTV.

## How to Repay Borrowed Assets {#repay}

### Step 1: Access Your Dashboard

- Go to the **Lending UI**.

### Step 2: Locate Your Borrowed Assets

- In the **"Your Borrows"** section, find the asset you want to repay.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/guides/borrow/borrow/06.png')} width="600px" />
</div>

### Step 3: Initiate Repayment

- Click the **"Repay"** button next to the asset you wish to repay.

### Step 4: Enter Repayment Amount

- In the **Repay Asset** dialog box, enter the amount you wish to repay.
- Double-check the amount to ensure it's correct.

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/img/guides/borrow/borrow/07.png')} width="600px" />
</div>

### Step 5: Confirm the Transaction

- Sign the transaction to complete the repayment process.

**Congratulations!** You have successfully repaid your borrowed asset.
