---
id: xchain
title: Cross-Chain Integration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Pursuing its mission to **enable permissionless liquidity within and beyond the Polkadot ecosystem**, Hydration generally **welcomes integrations** with other projects which would like to leverage some of the functionalities that Hydration has to offer.

This page provides a **step-by-step guide** that explains how to **integrate your chain and its assets** with Hydration.

## Establishing cross-chain (XC) communication {#establishing-xc}
The Polkadot ecosystem was designed with multichain interoperability support in mind from day 1. The protocol that allows two chains to exchange Cross-Consensus messages (XCM) with each other is called **Cross-Chain Message Passing (XCMP)**. While full XCMP is still under development, a stop-gap protocol called **Horizontally Relay-routed Message Passing (HRMP)** is used by parachains to establish communication channels. An HRMP channel has the same capabilities as an XCMP channel but is more demanding on resources as messages are not routed directly between parachains, but need to first pass via the relay chain.

## Onboarding projects to Hydration {#onboarding-assets}
As Hydration is a permissionless and decentralized protocol, anyone can propose a cross-chain integration. A common case for this would be to list tokens on Hydration, bootstrapping liquidity, enable DCAing, but other use cases may also come to mind.

The procedure for proposing to open a channel to Hydration consists of the following steps:

### Step 0: Spark a discussion with the community {#discussion}
Before deciding to open a new cross-chain channel, you should initiate a discussion with the broader Hydration community. This step is important because it allows users to express interest in tokens that they would like to see trading on our platform and to red-flag potentially toxic assets.

To initiate the discussion, please [open a discussion thread on Subsquare](https://hydration.subsquare.io/posts/create) which touches upon the following points:
- introduction of your project
- how it plans to leverage the functionality offered by Hydration
- tokenomics
- any other important info

After creating the thread, please post a link in **#gov-discussion** on the [Hydration Discord](https://discord.gg/hydration-net).

### Step 1: Gather asset registry info {#asset-registry-info}
A chain's asset registry requires metadata about its tokens to function properly. For example, our native token HDX would be registered as follows: 

|Field|Example|
|-------------|:-----------:|
|name|Hydration|
|symbol|HDX|
|decimals |12|
|existential deposit |1 HDX|
|location| (X2, (Parachain(2034), GeneralIndex(0))|

Prepare this table for all the currencies you want to register.

### Step 2: Integrate on Polkadot network {#live}

:::important
Both parachain [sovereign accounts](https://substrate.stackexchange.com/questions/1200/how-to-calculate-sovereignaccount-for-parachain/1210) must have enough funds (approx. 10.1 DOT) on the relay chain to reserve a deposit for HRMP channels and to process the XCM messages.
:::

:::warning
Always test the encoded hash of the call is valid on the appropriate chain, sending transaction data to an incorrect relay chain may lead to a loss of funds. 
:::

##### 1) Your parachain
To initiate a request for opening a channel to Hydration on the relay chain, please follow these steps:

- prepare encoded transact call that will be executed on the relay chain:
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/devs/xchain/hrmp_init.png')} />
</div>

 _Encoded: 0x3c00f2070000e803000000900100_

:::note
The following actions can be performed only from root origin via governance or the sudo module of the respective chain.
:::

- send an XCM message from the parachain to the relay chain using the _polkadotXcm.send_ call containing the following [instructions](https://github.com/paritytech/xcm-format):

  - WithdrawAsset
  - BuyExecution
  - Transact (input previously prepared call here)
  - RefundSurplus
  - DepositAsset

##### 2) Hydration
On the Hydration side, the following actions need to be performed:
- accept the Parachain &#8594; Hydration channel request;
- initiate a request for opening Hydration &#8594; Parachain channel;
- register Parachain's native asset(s) in the Hydration asset registry.

Prepare a batch call that contains all the necessary actions and before submitting, test its successful execution in [Chopsticks](https://github.com/AcalaNetwork/chopsticks).

1. Run local chopsticks setup with `npx @acala-network/chopsticks@latest xcm --relaychain=configs/polkadot.yml --parachain=configs/hydradx.yml`
2. Prepare calldata (can be similar to [this](https://hydration.subsquare.io/democracy/referenda/158) example)
3. Propose via Polkadot.js Apps on the Root track
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/devs/xchain/submit_referendum.png')} />
</div>

4. Use [Moonbeam tools](https://github.com/Moonsong-Labs/moonbeam-tools) to execute the proposal by running `npx ts-node src/tools/fast-execute-chopstick-proposal.ts --url ws://localhost:8000 --proposal-index 12`. Proposal index can be found on the left side of the Referenda page.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/devs/xchain/proposal_index.png')} />
</div>

5. Check that all actions in the proposal were executed successfully (e.g. HRMP channels were requested on the relay chain at `ws://localhost:8001`, assets were registered on Hydration etc.)

After successfully testing the proposal, repeat the process on the live network.

In order to queue the referendum for voting, a decision deposit needs to be placed.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/devs/xchain/decision_deposit.png')} />
</div>

##### 3) Your parachain
If the referendum in previous step passed and was executed successfully, hrmp channel needs to be accepted also on the other parachain. 
 - accept Hydration &#8594; Parachain channel request on the relay chain with the following Transact call, analogically to step 1:
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/devs/xchain/hrmp_accept.png')} />
</div>

 _Encoded: 0x17012a080000_

- send an XCM message from the parachain to the relay chain using the _polkadotXcm.send_ call containing the following [instructions](https://github.com/paritytech/xcm-format):

  - WithdrawAsset
  - BuyExecution
  - Transact (input previously prepared call here)
  - RefundSurplus
  - DepositAsset

 - optionally register HDX in your parachain's asset registry.

##### 4) Polkadot
Wait for one session after each acceptance for the channels to be opened.

##### 5) Add icons to the Hydration app
Open a new issue in [Hydration UI repository](https://github.com/galacticcouncil/HydraDX-ui) with title "Add icons for _projectname_" and attach icons for the chain and all assets. Icon should have maximum size of 10kB and SVG/PNG format.

##### 6) Add tokens to cross-chain UI
To add your tokens to our [Cross-chain](https://app.hydration.net/cross-chain) page, it is necessary to open a pull request to the [sdk repository](https://github.com/galacticcouncil/sdk).

1. **Fork the sdk repository**.
2. **Extend xcm-cfg package**.
    1. If necessary, add a [new chain](https://github.com/galacticcouncil/sdk/blob/master/packages/xcm-cfg/src/chains/)
    2. Add new [assets](https://github.com/galacticcouncil/sdk/blob/master/packages/xcm-cfg/src/assets.ts)
    3. Add new AssetRoute to both chain config files, [Hydration](https://github.com/galacticcouncil/sdk/blob/master/packages/xcm-cfg/src/configs/polkadot/hydration/index.ts) and [your chain's](https://github.com/galacticcouncil/sdk/tree/master/packages/xcm-cfg/src/configs/polkadot)
3. (Optional / Recommended) **Test your changes locally in developer console**.
    1. Build the project by following [README.md](https://github.com/galacticcouncil/sdk/blob/master/README.md)
    2. Change current directory to `/examples/xcm-transfer/`
    3. Adjust chains, asset, adresses and balance definitions in the [index file](https://github.com/galacticcouncil/sdk/blob/master/examples/xcm-transfer/src/index.ts)
    4. Test your changes by running `npm run dev` and check the developer console output in your browser, typically at `localhost:3000` 
3. **Open a PR from your fork to the main repository** and wait until the workflow is approved. UI preview with your changes will be deployed and appear in the PR description.
4. **Try sending each of the registered tokens back and forth** from one chain to the other, and verify the deposits were successful and balances configuration is correct.
5. **Add a comment that configuration is ready to be merged.**

__Congratulations for registering your tokens on Hydration, and a warm welcome from Hydration!__