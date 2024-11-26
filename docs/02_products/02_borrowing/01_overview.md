---
title: Overview
---

# Borrowing

Hydration runs a fork of AAVE v3 to enable users to supply a range of crypto assets, earn APR, and borrow against their positions. Here's a breakdown of the core components, technical advantages, and risk management features.

## Core Components

1. **Lending Pool**
    - **Supply Assets**: Users can deposit tokens into one of Hydration's lending pools to earn interest.
    - **Variable Interest Rates**: Rates adjust dynamically with supply and demand, affecting rewards for lenders and costs for borrowers.
2. **Collateralized Borrowing**
    - **Borrowing Process**: Users can borrow by depositing approved collateral tokens.
    - **Borrowing Limit**: Each loan has a borrowing limit based on the type and value of the collateral, ensuring safer borrowing practices.
    - **Interest Fees**: Borrowed amounts incur interest fees, which contribute to the rewards pool for lenders.

## Efficiency & Sustainability

Hydration leverages its status as a scalable appchain on Polkadot to offer some unique advantages to its users that maximize the cost-efficiency of borrowing while redirecting profits towards the Protocol to enhance its sustainability:

1. **Prioritized On-Chain Liquidations**  
   In general-purpose blockchains, liquidations cannot be prioritized, meaning that they get stuck in the mempool where they compete with countless other transactions, especially in times of volatility. This causes liquidations to be delayed which may lead to capital inefficiencies or even solvency risks because the price of the collateral may further fall, and it also opens up MEV vectors such as frontrunning or sandwich attacks.

    Leveraging the Polkadot infrastructure, the Hydration Protocol is master of its own block production. This allows the Protocol to ensure that on-chain liquidations are executed by collators (block producers) at the beginning of every block, before any other transaction. This increases the efficiency of liquidations.

2. **MEV Internalized by the Protocol**  
   Normally, liquidations in AAVE v3 are performed by bots which receive a 4-8% of the collateral as an incentive to perform the liquidation (the so-called Liquidation Penalty). This traditional method of liquidations is still available for anyone to perform on Hydration, and also AAVE liquidation bots should be supported out of the box. The only notable difference is that they need to use their own funds (no flash loans).

    In parallel, Hydration introduces on-chain liquidations which can be called by anyone. These liquidations use custom flash loans which mint the assets needed to repay the debt, after which the received collateral is swapped into the borrowed currency in the Hydration Omnipool, and the flash loan is repaid by burning the relevant amount. In most cases, a surplus should remain after the token burn - the Liquidation Penalty which is normally absorbed by the liquidator. As the liquidation was performed using Protocol funds, this surplus is not absorbed by the liquidator as MEV. Instead, it is internalized by the Hydration Protocol which can redistribute it following a Governance decision (e.g. to HDX stakers).

3. **Enshrined & reliable oracles**  
   Hydration updates its oracles at the beginning of each block, ensuring reliability and preventing delays. Unlike platforms like Solana, where oracle updates are standard transactions that can get delayed or incur high fees, Hydration’s approach minimizes maximum extractable value (MEV) exploits by removing opportunities for front-running by bots or extractive block builders.

## Risk Management Features

Hydration’s design incorporates multiple layers of protection to safeguard users and ensure reliable platform operations:

1. **Collateralization Ratios**: Set borrowing limits based on collateral values to prevent excessive borrowing.
2. **Liquidation Parameters**: Clear thresholds protect lenders by ensuring that at-risk collateral is liquidated before losses escalate.
3. **Utilization Monitoring**: Tracks the portion of a user’s collateral in active use, alerting them when nearing borrowing limits.
4. **Enhanced Liquidation Security**: By handling liquidations on-chain and using flash loans, Hydration mitigates front-running risks and provides faster liquidation responses, reducing potential losses for lenders during volatile market conditions.

## Key Terminology

- **Liquidation Penalty**: A bonus paid to liquidators when they repay a portion of a borrower's debt and acquire collateral at a discount, stabilizing the system.
- **Liquidation Threshold**: The value limit where a borrower’s collateral is at risk of liquidation. For example, at a threshold of 80%, liquidation occurs if the borrowed amount surpasses 80% of collateral value.
- **Utilization Rate**: The percentage of collateral actively used in borrowing, with higher rates indicating increased risk.
- **E-Mode (Efficiency Mode)**: Increases borrowing power for correlated assets (e.g., stablecoin pairs like USDC and USDT) by adjusting LTV and liquidation parameters.

To get started, see our user guides for [supplying assets](/guides/borrow/supply_assets) and for [borrowing assets](/guides/borrow/borrow_assets) for step-by-step instructions.

You can find an overview of the [applicable risk parameters on this page](/products/borrowing/risk_parameters). 

For more information you can also consult the [AAVE documentation](https://aave.com/docs).