---
id: start_nominate 
title: Nominate
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Nominators are one type of participant in the staking subsystem. They are responsible for appointing their stake to the validators who are the second type of participant. By appointing their stake, they are able to elect the active set of validators and share in the rewards that are paid out.

Validators are active participants in the network that engage in the block production and finality mechanisms, nominators take a more passive role with a "set-it-and-forget-it" approach. Being a nominator does not require running a node of your own or worrying about online uptime. However, a good nominator performs due diligence on the validators that they elect. When looking for validators to nominate, a nominator should pay attention to their own reward percentage for nominating a specific validator.

:::caution
By nominating to validator you are also at risk of beeing slashed if validator gets slashed.
:::

:::warning
Transfers are disabled on snakenet. This means that you have to setup nominate with single(stash) account. We **highly recommend** to you to change to stash/controller accounts as soon as possible. 
:::

:::important
Text bellow will describe current setup with single account, but we HIGHLY RECOMMEND controller and stash account to be separate accounts.
:::

To follow steps bellow you need PolkadotJS-APPS to be connected to snakenet node. To find more about how to connect to snakenet node go to [connect to public node](polkadotjs_apps_public).


Go to *"Network"* > *"Staking"*.

* *"Staking overview"* section will show you all the active validators and their information. You can find here amount of HDX staked on them, amount of their own stake, how much they charge in commission, the era points they've earned in the current era, and the last block number that they produced. If you click on the chart button it will take you to the *"Validator Stats"* page for that validator that shows you more detailed and historical information about the validator's stake, rewards and slashes.
* *"Account actions"* section allows you to stake and nominate.
* *"Payouts"* section allows you to claim rewards from staking.
* *"Targets"* section will help you estimate your earnings and this is where it's good to start picking favorites.
* *"Waiting"* section lists all pending validators that are awaiting more nominations to enter the active validator set. Validators will stay in the waiting queue until they have enough HDX backing them. It is possible validator can remain in the queue for a very long time if they never get enough backing.
* *"Validator Stats"* section allows you to query a validator's stash address and see historical charts on era points, elected stake, rewards, and slashes.

## Bond HDX
:::warning
Transfers are disabled on snakenet. This means that you have to setup validator with single(stash) account. We **highly recommend** to you to change to stash/controller accounts as soon as possible. 
:::

:::important
Text bellow will describe current setup with single account, but we HIGHLY RECOMMEND controller and stash account to be separate accounts.
:::

Go to *"Network"* > *"Staking"* > *"Account actions"* and click *"+ Stash"* button.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-1.png')} />
</div>

:::caution
Do not bond all your HDX because you will not be able to pay transaction fees. 
:::
Bonded HDX will be at stake and may be slashed. You should perform due diligence on the validators you are nominating.

* *"Stash account"* - Account with majority of your HDX. Please make sure this account have more HDX as you are going to bond + transaction fees. 
* *"Controller account"* - This account also need some HDX to start/stop nominating and pay transaction fees. (As stated before - for now this is same as stash account, but we are recommending to change to two different accounts as soon as possible).
* *"Value bonded*" - Amount of HDX you are going to bond.
* *"Payment destination"* -  The account where the rewards from validating are sent.

When everything is filled properly click *"Bond"* button and sign transaction.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-2.png')} />
</div>

Now you should be bonded. This means your tokens are locked and could be slashed if the validators you nominate misbehave. All bonded funds can now be distributed to up to multiple validators. Be careful about the validators you choose since you will be slashed if your validator commits an offence.

## Nominate a validator

Go to *"Network"* > *"Staking"* > *"Account actions"* and click *"Nominate"* on account you've bonded in previous step.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-1.png')} />
</div>

You will be presented with popup asking you to select validators you want to nominate. Select one or multiple validators you want to nominate and click "Nominate" button and sign transacion. If you select multiple validators, your stake may be dispersed in different proportions to any subset or all of the validators your choose.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>

Now you should be nominating. Your nominations will became active in the next era. If at least on of your nominations end up in active validator set, you will start to get rewards allocated to you.

To check your waiting nominations go to *"Network"* > *"Staking"* > *"Account actions"* and click *"Waiting nominations"* to show you list of your waiting nominations.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-3.png')} />
</div>

After era change there will be also list of *"Active nominations"*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-4.png')} />
</div>
