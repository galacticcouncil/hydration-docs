---
id: listing_a_token_in_omnipool
title: Listing a token in the Omnipool
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page you will find the **requirements and process for listing a project's token in the Omnipool**.

## 00 Prerequisites

With all tokens pooled into a single pool, we must take extra precautions to avoid exposing the Omnipool to large swings in token values due to market manipulation. Therefore the requirements for listing a token in the Omnipool are listed below. There may be exceptions, or additional criteria preventing a token from being listed in the Omnipool since it is difficult to define absolute rules that apply in all situations. The actual decision lies with HDX token holders who may still reject a token that meets all criteria and may accept a token that does not.

1. The token must have already gone through price discovery for at least eight months. Must be listed on a DEX with at least \$100k liquidity and/or listed on a CEX with active market maker support maintaining a 2% depth of at least \$2k. Ideally the token is listed on at least two exchanges.
2. Sudo control of the chain/token must have been removed or revoked. This could involve the removal of the `sudo` pallet entirely, removing a registered sudo key, or in the case of AssetHub tokens the provable burning of any administrative control over the token.
3. The project must have active token holder governance. Ideally through the use of OpenGov. We recommend setting up automated governance notifications (such as web3alerts) to mitigate governance attacks.
4. The project must have transparent market data available, including the ability to inspect transactions via a block explorer.
5. The token must be sufficiently distributed to avoid individuals causing large price swings. At least 40% of the token supply must be distributed and in circulation.
6. The token must have a market cap of at least $1M.
7. Initial liquidity
  - For tokens with an FDV up to \$50M, the minimum team/treasury deposit into the Omnipool is \$300k worth of tokens.
  - For tokens with an FDV above \$50M, the minimum team/treasury deposit into the Omnipool is \$500k worth of tokens.

For new projects, a typical token launch sequence would be to perform a fair token launch using a [Liquidity Boostrapping Pool (LBP)](https://docs.hydration.net/daos/lbp) followed by the LBP liquidity being deposited into an Isolated Pair. Isolated Pairs can be permissionlessly created and swaps on the Hydration platform are automatically routed through both the Omnipool and Isolated Pairs, so new projects can still create their first DEX liquidity on Hydration even before their token qualifies for listing in the Omnipool. After eight months of continued price discovery, the team can apply for the token to be listed in the Omnipool if it meets the criteria above.


## 01 Listing Process

Initial listing of a token in the Omnipool is controlled by Hydration governance.

1. Open XCM channel (bidirectional HRMP channels).
2. List the token in the Hydration asset registry.
3. Hydration community vote on whether to allow listing the token in the Omnipool. The governance vote will not directly list the token but instead will include a remark to authorize listing in the Omnipool. Hydra community will also decide what the cap will be for the token as a percentage of overall Omnipool TVL. Currently each parachain token is capped at 5% of the Omnipool but will be lowered as the Omnipool asset list diversifies.
3. Initial token liquidity is transferred from team or treasury into either the chain's sibling acct on the Hydration chain or into the Omnipool account (`7L53bUTBbfuj14UpdCNPwmgzzHSsrsTWBHX5pys32mVWM3C1`).
4. Hydration DAO passes a motion (including initial asset price) to add the initial liquidity to the Omnipool and enable trading. The resulting ownership NFT will be placed in the chain's sibling acct (or designated project/team acct for non-parachain tokens).

Each community should consider depositing additional tokens later to bring the deposit up to $1M or up to 2.5% of FDV, in line with other community deposits. Hydra's DCA feature allows swaps to be spread out, enabling larger trades over time, but loan liquidations need to happen within a single block and therefore deeper token liquidity enables larger money markets for the token.

## 02 Managing Treasury Deposits in the Omnipool

Once initial Omnipool listing has been performed, a parachain/token's governance body can control their deposit remotely over XCM. Note that as a security precaution no account can add or remove more than 5% of the liquidity of a token within a single block and therefore large deposits and withdrawals must be performed incrementally unless assisted by Hydra governance.

### Depositing Additional Liquidity

The general process to make a large deposit remotely is:
1. Manually try to deposit tokens as liquidity in the Hydration UI to see what the current maximum deposit limit is.
2. Use `xtokens.transfer` or similar to transfer the new tokens to the chain's sibling acct on Hydration (plus like 20 tokens to use to pay XCM fees)
3. Schedule once every 1 block repeating x times to deposit a chunk of tokens into the Omnipool. LP NFTs will automatically be placed in the account that the deposit is happening from. If your chain does not have the ability to schedule XCM transactions (using the `scheduler` pallet) then you likely should seek Hydra governance assistance in performing the deposit.

**Example from Centrifuge:**
Transfer 750k CFG, then deposit 37500 tokens 20 times   (costs 0.442 CFG in XCM fees)
encoded call data: `0x3e02083e0300016d6f646c70792f747273727900000000000000000000000000000000000000007c00000000904cbb5f69aad29e00000000000003010200c91f01007369626cef070000000000000000000000000000000000000000000000000000003f040100000001010000001400000000790003010100c91f0314000400010200bd1f060200010000000000000000000000000000000000000000000000000000000000000013000064a7b3b6e00d1300010200bd1f060200010000000000000000000000000000000000000000000000000000000000000013000064a7b3b6e00d0006010700f2052a0102000400583b020d0000000000701c7cf40ae1f007000000000000140d0100000101007369626cef070000000000000000000000000000000000000000000000000000`

**Example from Phala:**
Transfer 4.08M PHA, then deposit 48000 PHA 85 times   (costs 6.9 PHA in XCM fees)
encoded call data: `0x030208030300016d6f646c70792f747273727900000000000000000000000000000000000000005200000000001300407db892249f38010200c91f01007369626cf30700000000000000000000000000000000000000000000000000000007040100000001010000005500000001210003010100c91f0314000400010100cd1f00070010a5d4e81300010100cd1f00070010a5d4e80006010700f2052a0102000400583b0208000000000038e5be87aa000000000000000000140d0100000101007369626cf3070000000000000000000000000000000000000000000000000000`

### Removing Liquidity

Omnipool liquidity must be removed using the number of each specific LP NFT. It is again limited to 5% of the liquidity for that individual token.

1. Use `assetRegistry->assetIds()` to find the index for your token in the Hydration asset registry.
2. Use `uniques->acount(acct, 1337)` to find the IDs of the LP NFTs.
3. Use `omnipool->positions(ID)` to get the details about each LP NFT. Specifically, the `amount` of tokens it represents. If the amount is greater than 5% of the token's liquidity in the Omnipool you can't remove all of liquidity of that LP in a single block and need to split it up.
4. Create a series of XCM messages to call `omnipool.removeLiquidity(positionID, amount)` for each of the LP NFTs.