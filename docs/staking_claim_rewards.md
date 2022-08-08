---
id: staking_claim_rewards
title: Claim your Staking Rewards
---

import useBaseUrl from '@docusaurus/useBaseUrl';

At the end of every era, validator pools are assigned their [staking rewards](/staking_rewards) which consist of base rewards, era point rewards and tips. These rewards, however, are not distributed automatically to the accounts of the validator and its nominators. This will only happen after the staking rewards have been claimed by **triggering a payout**. Staking rewards must be claimed **within 84 eras** after they have been earned. Once this period lapses, the relevant rewards information is deleted from the chain and the validator pool can no longer receive its rewards for that era. 

The process of manually triggering a payout within a limited timeframe is an important security feature. By requiring that a payout transaction is submitted for every validator pool and for every era, the distribution of rewards is spread across several blocks. If all rewards were to be distributed to all validators and nominators within a single block, the stability of the chain could possibly be endangered.

## How to trigger a payout
A payout can be triggered easily by both validators and their nominators using Polkadot/apps. For this purpose, navigate to *Network > Staking > Payouts*. Alternatively, you can use the following link:  
https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/staking/payout

When selecting *My stashes* you should see all rewards which are available for payout for your staked tokens with an indication of the respective era numbers. By clicking on *Payout all*, it is possible to submit a series of transactions in order to claim all available rewards for the past eras.

<img src={useBaseUrl('/staking-claim-rewards/payouts.jpg')} />

After triggering the payout, you will be asked to sign the transaction(s) using your HDX account. Once confirmed, the rewards for the selected eras will be distributed to the respective validators and their nominators.
