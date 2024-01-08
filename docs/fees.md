---
id: fees
title: Fees
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The HydraDX Protocol charges users fees for its products. Some of these fees go to the HydraDX Treasury, while others are distributed as rewards to Liquidity Providers (LPs), stakers, referrers or trades. In some cases, fees in HDX may be even burned.

Here is an overview of all fees:

| Product       | Type fee                             | Amount         | Details                                                | Recipient              |
| ------------- | ------------------------------------ | -------------- | ------------------------------------------------------ | ---------------------- |
| Protocol      | [Transaction fee](#transaction-fee)  | ~1.60 HDX+     | Fee paid per transaction for any action on the network | Treasury               |
| Omnipool      | [Asset fee](#asset-fee)              | 0.25% to 5.00% | Dynamic fee on every Omnipool trade                    | LPs, referrers, traders & staking |
| Omnipool      | [Protocol fee](#protocol-fee)        | 0.05% to 0.10% | Dynamic fee on every Omnipool trade                    | Burned or HDX subpool  |
| Omnipool      | [Withdrawal fee](#withdrawal-fee-omnipool)| 0.01% to 1.00% | Dynamic fee on Omnipool LP liquidity withdrawals  | Liquidity providers    |
| Isolated Pool | [Trade fee](#trade-fee-isolated-pool)| 0.3%           | Fee on every Isolated Pool trade                       | Liquidity providers    |
| Stablepool    | [Trade fee](#trade-fee-stablepool)   | 0.04%          | Fee on every Stablepool trade                          | Liquidity providers    |
| Stablepool    | [Withdrawal fee](#withdrawal-fee-stablepool)| 0.04%   | Fee on Stablepool LP liquidity withdrawals             | Liquidity providers    |
| LBP           | [Repayment fee](#repayment-fee-lbp)  | variable       | Fee on all LBP trades until repay target is hit        | Pool owner             |
| LBP           | [Trade fee](#trade-fee-lbp)          | variable       | Fee on all LBP trades after repay target has been hit  | Liquidity providers    |
| OTC           | Trade fee                            | 0%             | Currently there are no fees on OTC trades              |                        |

## Transaction fee
To submit any transaction on the HydraDX network (e.g. trade an asset, transfer tokens, submit a governance vote), users must pay a **transaction fee.** In Ethereum, this is commonly referred to as **gas**.

On HydraDX, users are able to pay these transaction fees in **any Omnipool asset**. In order to reduce user friction, the Protocol will automatically set the first asset sent to HydraDX as the fee payment asset. This can be changed at any time on the wallet page of the app.

Note: If you are using **a 0x address with MetaMask**, it is currently only possible to pay for transaction fees in **WETH (MRL)**.

## Asset fee
Asset fees are are paid by users whenever they make a trade in the Omnipool. These fees are charged in the asset that is “bought” from the Omnipool. Asset fees are dynamic, meaning that they can increase or decrease based on the current volatility of the traded assets.

With the introduction of **Referrals** to HydraDX, asset fees are distributed in the following way:

- 50% remains in the Omnipool as a reward for LPs
- 50% is distributed for referrals to 3 distinctive groups: Referrers, traders & HDX stakers. The proportions vary based on the tier of referral code linked to the trader account (learn more in [Referrals](/referrals))
- HDX asset fees are currently excluded from Referrals, they are distributed in their fullest to the HDX Staking pot (learn more in [Staking](/staking))

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/referrals/rewards.jpg')} width="800px" />
</div>

## Protocol fee
Protocol fees are paid by users whenever they make a trade in the Omnipool. These fees - paid in LRNA - are burned after the trades to mitigate any negative imbalance between the ratio of LRNA and the other assets in the Omnipool.

When there is no negative imbalance, the protocol fee will be redirected to the HDX pool within the Omnipool. This will result in the value of HDX increasing relative to all other assets in the Omnipool. An arbitrageur will observe this and swap HDX with other assets, setting a new (likely higher) price for HDX.

## Withdrawal fee (Omnipool)
The withdrawal fee is a dynamic fee paid whenever users withdraws liquidity from the Omnipool. It is designed to ensure that LPs do not lose money when liquidity is withdrawn immediately after a price change. The fee is calculated as the percentage difference between the spot price and the oracle price. This is also designed to ensure that any potential manipulation of the spot price will not be profitable.

## Trade fee (Isolated Pool)
Trade fees are are paid by users whenever they make a trade in an Isolated pool. These fees are paid in the asset that is “bought” from the pool. Trade fees are fixed at 0.3% and remain in the pool as rewards for LPs.

## Trade fee (Stablepool)
Trade fees are are paid by users whenever they make a trade in a Stablepool. These fees are paid in the asset that is “bought” from the pool. Trade fees are set for each Stablepool upon its creation by the Protocol and the proceeds remain in the pool as rewards for LPs.

## Withdrawal fee (Stablepool)
Withdrawal fees are paid by users whenever they withdraw an asset from a Stablepool. These fees are paid in the asset that is withdrawn from the pool. Withdrawal fees are equal to the trade fee for a given Stablepool and remain in the pool as rewards for LPs.

## Repayment fee (LBP)
Repayment fees are paid by users whenever they sell back a distributed asset during a Liquidity Bootstrapping Pool (LBP) event. These fees are payable until the **Repayment target** is met. If no repayment target is set, users will instead pay a **Swap fee.** Repayment fees are set in advance by the pool creator. The proceeds are distributed to an address of their choice.

## Trade fee (LBP)
Swap fees are paid by users whenever they sell back a distributed asset during a Liquidity Bootstrapping Pool (LBP) event. These fees are payable once the repayment target is met, or if no repayment target has been set. Swap fees are set in advance by the pool creator. The proceeds remain in the pool.