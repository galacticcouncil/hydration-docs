---
id: remote_swaps
title: Remote swaps
description: Integrate Hydration swaps into your application
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Building cross-chain swaps.

## Introduction {#intro}
With _xcm::execute_ call being gradually whitelisted on various chains, it is now possible to use Hydration as a universal atomic swapping engine. In practice, that means withdrawing funds on one chain, sending it to Hydration, swapping the asset for another and sending it back or another chain in one transaction. This enables cross-chain swaps and opening doors for use cases such as acquiring fee payment asset for a chain before a transaction happens and allowing for much better UX.

## Example {#example}
For demonstration purposes, let's consider the following scenario:
User has 100 DOT on the Polkadot core chain and wants to swap it for USDT and have it available on Asset Hub. User facing application can offer one signature solution with a good UX and do the heavy lifting in the background. It just needs to construct an XCM message with a correct set of instructions which will differ depending on the nativeness of the asset, or in other words, where the reserve of the swapped asset reside.

The extrinsic would be in this example constructed as a _polkadotXcm.send_ call containing the following [instructions](https://github.com/paritytech/xcm-format):

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/devs/remote_swaps/xcm_execute.png')} />
</div>

## Learn more
To know more about remote swaps, you can head over to our github repository where you can find [integration tests](https://github.com/galacticcouncil/HydraDX-node/blob/769c33d63d24356791c2f0e276350ebdc2914005/integration-tests/src/exchange_asset.rs#L341) covering more advanced scenarios.

