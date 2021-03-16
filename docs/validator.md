---
id: validator 
title: Validate
---

import useBaseUrl from '@docusaurus/useBaseUrl';

To learn how to run validator node go read [setup validator node](node_setup).<br/>
To learn how to connect PolkadotJS-APPS go read [connect to public nodes](polkadotjs_apps_public). 

## Bon HDX
:::warning
Transfers are disabled on snakenet. This means that you have to setup validator with single(stash) account. We **highly recommend** to you to change to stash/controller accounts as soon as possible. 
:::
:::important
Text bellow will describe current setup with single account, but we HIGHLY RECOMMEND controller and stash account to be separate accounts.
:::

Go to *"Network"* > *"Staking"* > *"Account actions"* and click *"+ Stash"* button.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-1.png')} />
</div>

:::caution
Do not bond all your HDX because you will not be able to pay transaction fees. 
:::
Bonded HDX will be at stake and may be slashed. If you are not confident to run validator node by yourself, it may be better for you to nominate your HDX to some trusted validator.

* *"Stash account"* - Account with majority of your HDX. Please make sure this account have more HDX as you are going to bond + transaction fees. 
* *"Controller account"* - This account also need some HDX to start/stop validating and pay transaction fees. (As stated before - for now this is same as stash account, but we are recommending to change to two different accounts as soon as possible).
* *"Value bonded*" - Amount of HDX you are going to bond.
* *"Payment destination"* -  The account where the rewards from validating are sent.

When everything is filled properly click *"Bond"* button and sign transaction.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-2.png')} />
</div>

## Set session keys
:::important
The session keys are consensus critical, so please make sure you set your session keys properly.
:::

### Generating session keys
You can generate your session keys by using *cli on remote server* or *PolkadotJS-APPS*. This methods are equivalent and you should choose one of them. If you did not exposed PRC ports publicly and you are you are running node on remote server, you will have to use *cli on remote server* option.

#### Option 1: Cli on remote server
If you are on a remote server, you can run this command on remote server(if you didn't change default http rpc port):
```bash
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```
Example output of cmd above.*"result"* contains session keys(copy `0x...` and use it to set session keys)
```json
{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}
```

#### Option 2: PolkadotJS-APPS
After successful connection to your validator node, you can generate session keys by calling *"Developer"* > *"RPC calls"* > *author_rotateKeys*
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/gen-session-keys-1.png')} />
</div>
Example output: (copy `0x...` and use it to set session keys)
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/gen-session-keys-2.png')} />
</div>

### Setting session keys
You have to submit *"Extrinsics"* > *"session_setKeys"* transaction to tell chain your session keys. This transaction will associate your validator with your Controller account.

* "using the selected account" - controller account
* "keys" - *"result"* from [Generating session keys](validator/#generating-session-keys) (`0x...`)
* "proof" - `0`

Click *"Submit transaction"* and sign transaction.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/set-session-keys-1.png')} />
</div>

Now you are ready to strat validate.

## Validate

:::caution
Please make sure your node is fully synced and live before you start validating.
:::
You can verify that you node is live and synchronized in [Telemetry](https://telemetry.polkadot.io/#list/HydraDX%20Snakenet). 

Go to *"Network"* > *"Staking"* > *"Account actions"* and click *"Validate"* button on desired validator.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-1.png')} />
</div>

Set the percentage of the rewards that will be paid to you(reward commission percentage). Rest of the rewards will be split among your nominators. You can also set 0 reward for yourself 😇. And click *"Validate"* and sign transaction.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-2.png')} />
</div>

If you go to the *"Network"* > *"Staking"* > *"Staking overview"* tab, you will see a list of active validators currently running on the network. At the top of the page, it shows the number of validator slots that are available as well as the number of nodes that have signaled their intention to be a validator. You can go to the *"Waiting"* tab to double check to see whether your node is listed there.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-3.png')} />
</div>

Validator set is updated every era. If there will be slot in next era, you will be selected to valdiator set and your node will became validator. Your validator will stay in *Waiting queue* until he will be selected to validator set. You don't have to do anything if you are not selected in a particular era.
