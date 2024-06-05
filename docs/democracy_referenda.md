---
id: democracy_referenda
title: Referenda
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Referenda allow stakeholders to put a proposal to a weighted, stake-based vote by the wider community. The object of the referendum is some suggested action which affects the protocol - for example, a Treasury payout, or even a change in the runtime code.

Generally speaking, only one referendum is brought to a vote at a time. Other pending referendum proposals are put in a queue. There are separate queues for publicly submitted proposals and for Council proposals. Every 3 days, the referendum mechanism picks the top proposal with the highest amount of support, alternating between the two queues. After a referendum has been voted upon and accepted, there is a so-called *enactment delay* period of 3 days which needs to pass before the decision is put into effect. An exception to these rules applies for emergency proposals by the Technical Committee which deal with major protocol problems and need to be fast-tracked.

## Initiating a Referendum {#referenda-initiate}
There are multiple ways to initiate a referendum which are described in greater detail below. The way the referendum was initiated is decisive for the applicable voting mode.

### Public Referendum {#referenda-initiate-public}
Any holder of HDX tokens can [propose a referendum](/participate_in_referenda) by depositing the minimum required amount of HDX tokens and submitting the proposal on-chain. Other community members can [support (*second*) the proposal](/participate_in_referenda) for a referendum by locking up an equal amount of tokens. At the beginning of every voting cycle, the referendum proposal with the highest amount of *seconding* (total deposited tokens) is advanced to a vote by the community.

The voting mode which applies to public referenda is [Positive Turnout Bias](#referenda-voting-modes).

:::note
All HDX tokens which are deposited to propose or second a referendum are locked up for the whole period until the referendum has entered the voting cycle. It is important to remember that there is no guarantee that any given proposal will ever receive sufficient backing to move into the voting round, meaning that your funds might remain locked for an indefinite period.
:::

### Council Referendum {#referenda-initiate-council}
The Hydration Council has the powers to propose a referendum for a community vote. If it does so unanimously, the applicable voting mode for the referendum is [Negative Turnout Bias](#referenda-voting-modes). If the referendum is proposed with a simple majority of the Council votes, then the voting mode for accepting the proposals by the community is [Simple Majority](#referenda-voting-modes).

### Emergency Proposals by the Technical Committee {#referenda-initiate-tech-committee}
The Technical Committee can submit emergency proposals which deal with (critical) bug fixes or the quick adoption of battle-tested functionality. Emergency proposals skip the waiting queue and enter the voting round directly. The community can vote on emergency proposals in parallel to any regular proposal which has entered the voting round. Furthermore, emergency proposals have a shorter voting period to ensure that they can be fast-tracked.

### Canceling a Referendum {#cancel}
Once a referendum has been proposed, it cannot be revoked until it has entered the voting round. An exception to this rule is made for proposals which are deemed detrimental to the protocol (e.g. code changes introducing a bug). In this limited case, the referendum proposal can be cancelled by the [Hydration Council](/democracy_council) (with a 60% super-majority) or the [Technical Committee](/democracy_technical_committee) (unanimously). All tokens wich were locked by supporters seconding the proposal are burned.

## Voting in a Referendum {#referenda-vote}
Hydration referenda have a launch period of 3 days. At the beginning of every new period, the proposal with the highest amount of seconding is taken from the waiting queue and put into a voting round. Every voting round has a duration of 3 days. During this period, community members can vote on the referendum using a weighted, stake-base mechanism. They do so by locking up a certain amount of HDX tokens for a given timeframe.

:::note
Locked HDX tokens cannot be transferred for the duration of the chosen lock period. However, they can still be used for voting.
:::

### Votes Weighing {#referenda-votes-weighing}
There are two factors which determine the weight of each vote in a referendum. The first factor is the **amount of HDX tokens** which the voter locks up in support of the vote. The second factor is the so-called **conviction multiplier** which reflects the duration for which the voter is willing to lock up the tokens.

```
vote_weight = tokens * conviction_multiplier
```

The table below contains an overview of the various Conviction Multipliers and the amount of days the tokens will be locked up for. It is possible to bring out a vote without locking your HDX, however its weight would be only a fraction (conviction multiplier of 0.1x). As shown in the table below, locking the tokens for the maximum of 192d would raise the conviction multiplier to 6x.

| Conviction Multiplier | Days Locked |
|:---------------------:|:-----------:|
| 0.1x                  |  0d         |
| 1x                    |  6d         |
| 2x                    |  12d        |
| 3x                    |  24d        |
| 4x                    |  48d        |
| 5x                    |  96d        |
| 6x                    |  192d       |

```
An example:

Alice votes with 5000 HDX and 0.1x Conviction Multiplier.
Bob votes with 100 HDX and 6x Conviction Multiplier.

Weight Alice: 500
Weight Bob: 600

Token lock Alice: 0 days
Token lock Bob: 192 days
```

### Voting Modes {#referenda-voting-modes}
Another important aspect of the democracy module are the different voting modes which apply. The threshold of votes needed for approving or rejecting a referendum can vary depending on how the referendum was initiated and on the turnout of the vote. The turnout is calculated based on the total amount of HDX tokens which were used to vote in the referendum (conviction multipliers excluded). Whether the turnout was low or not is determined by the relationship between the turnout and the elactorate (i.e. the total amount of HDX tokens eligible to vote).

#### Positive Turnout Bias
This is the default voting mode when a referendum is proposed by the Community. At lower turnouts, a qualified super-majority of `yes` votes is required in order to approve the referendum. As the turnout grows, the threshold decreases towards a simple majority.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/positive-turnout-bias.png')} width="300px" />
</div>

#### Negative Turnout Bias
This voting mode applies to referenda which have been proposed by the Council unanimously. Such proposals require a qualified super-majority of `no` votes to be rejected at low turnouts. As the turnout grows, the threshold for rejecting the referendum decreases towards a simple majority.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/negative-turnout-bias.png')} width="280px" />
</div>

#### Simple Majority
Referenda which were initiated by the Council with majority agreement (i.e. not unanimously) can be accepted by the community with a simple majority of the votes (50% + 1).

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/simple-majority.png')} width="200px" />
</div>
