---
title: GIGAHDX Staking
description: Stake HDX, earn protocol rewards, vote in governance, and borrow HOLLAR
---

GIGAHDX is Hydration's upgraded HDX staking experience. It lets HDX holders stake their HDX, earn protocol rewards, participate in governance, and use their staked position as collateral to borrow HOLLAR.

When you stake HDX, you receive GIGAHDX. GIGAHDX represents your share of the total HDX backing the staking pool. As the pool earns yield, each GIGAHDX becomes redeemable for more HDX over time.

You can use GIGAHDX staking in the Hydration app:

https://app.hydration.net/staking

Legacy staking remains available for existing positions at:

https://app.hydration.net/staking-old

## Why Stake With GIGAHDX?

GIGAHDX is designed for users who want their HDX to stay productive without managing several separate positions.

- **Earn passive staking yield** from protocol revenue distributed to the GIGAHDX pool.
- **Earn additional voting rewards** when you vote on eligible referenda.
- **Keep governance power** by voting with your staked HDX value.
- **Borrow HOLLAR** against your GIGAHDX position without unstaking.
- **Auto-compound rewards** because claimed GIGAHDX rewards are added back into your staked position.

## How GIGAHDX Works

When you stake HDX, your HDX enters the GIGAHDX pool and you receive GIGAHDX in return. The exchange rate between GIGAHDX and HDX changes over time.

For example, if the pool grows through rewards, your GIGAHDX position can represent more HDX than you originally staked. This growth is reflected in your position value. You do not need to claim passive yield separately.

The app shows your position primarily in HDX terms, with the GIGAHDX amount shown as the position token amount.

## Earning Yield

GIGAHDX has two main yield sources.

### Passive Yield

Passive yield is applied automatically to all GIGAHDX holders. It comes from HDX that enters the GIGAHDX pool and increases the value backing each GIGAHDX.

You do not need to claim passive yield. It is reflected in the GIGAHDX-to-HDX rate and therefore in the HDX value of your position.

### Voting Rewards

GIGAHDX holders can earn extra rewards by voting in Hydration governance. These rewards are linked to eligible referenda and are separate from passive yield.

Voting rewards are strongest when you vote with higher conviction. Higher conviction increases your voting power and potential reward share, but it also locks the voted amount for longer. The app shows projected voting APR as an estimate, not a guarantee.

Only standard Aye and Nay votes are eligible for GIGAHDX voting rewards. Split and Abstain votes still count for governance, but they do not earn GIGAHDX voting rewards.

When voting rewards are claimed, they are auto-compounded into your GIGAHDX position. This means the reward increases your staked position instead of arriving as free HDX in your wallet.

## Claiming Rewards

The rewards panel shows voting rewards that are ready to claim. Claiming rewards adds them to your GIGAHDX position automatically.

Some earned voting rewards may be locked until the relevant conviction period ends. The app may show these as locked rewards so you can see what has been earned but is not claimable yet.

Passive yield is not shown as a claimable reward because it is already included in your position value.

## Borrowing HOLLAR Against GIGAHDX

GIGAHDX can be used as collateral to borrow HOLLAR. This lets you access liquidity while keeping your HDX staked.

Borrowing introduces liquidation risk. If the value of your collateral falls too far relative to your HOLLAR debt, part of your position can be liquidated to repay debt and protect the protocol.

The app shows key borrowing data for your position:

- **Health factor**: how safe your borrowing position is. A health factor above 1 is required to avoid liquidation.
- **Liquidation price**: the approximate HDX price at which your position reaches liquidation.
- **Borrow APY**: the current variable cost of borrowing HOLLAR.
- **Borrowing power used**: how much of your available borrowing capacity is already in use.

If you borrow against GIGAHDX, some of your position may not be available to unstake until you repay enough HOLLAR.

## Unstaking

Unstaking converts GIGAHDX directly back into HDX in your wallet. However, the returned HDX is locked and cannot be transferred until the lock expires.

The minimum lock duration is 28 days. The lock can be longer depending on your past voting behaviour and any governance voting locks on the position, such as locks from higher-conviction votes. Even if you did not vote, the 28-day minimum still applies.

You can have multiple unstaking positions at the same time. Each one has its own countdown showing when the locked HDX becomes transferable.

Your available unstake amount can be lower than your full GIGAHDX position when:

- part of your position is needed as collateral for HOLLAR debt,
- an unstake is already locked and waiting to become transferable.

You can cancel a pending unstake before the lock expires. Canceling returns the position to GIGAHDX staking, but the lock progress is lost.

## Migrating From Legacy Staking

If you still have HDX in legacy staking, the GIGAHDX staking page will show a migration banner. Migration moves your legacy staking position into GIGAHDX staking.

Legacy staking is available at https://app.hydration.net/staking-old for existing positions, but new staking should use GIGAHDX at https://app.hydration.net/staking.

## Risks And Things To Know

- GIGAHDX is tied to HDX. If HDX falls in value, the USD value of your position can fall.
- Borrowing HOLLAR against GIGAHDX creates liquidation risk.
- Higher conviction votes can earn more voting rewards, but they lock the voted amount for longer.
- Split and Abstain votes do not earn GIGAHDX voting rewards.
- Unstaked HDX is locked for at least 28 days before it becomes transferable.
- Pool limits can restrict lending or borrowing when capacity is full.

