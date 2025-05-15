---
title: Voting
---

import useBaseUrl from '@docusaurus/useBaseUrl';

### Conviction Voting

Hydration utilizes an idea called voluntary locking that allows token holders to increase their voting power by declaring how long they are willing to lock up their tokens; hence, the number of votes for each token holder will be calculated by the following formula:

votes = tokens * conviction_multiplier

The conviction multiplier increases the vote multiplier by one every time the number of lock periods double.

| Lock Periods | Vote Multiplier | Length in Days |
| --- | --- | --- |
| 0 | 0.1 | 0 |
| 1 | 1 | 7 |
| 2 | 2 | 14 |
| 4 | 3 | 28 |
| 8 | 4 | 56 |
| 16 | 5 | 112 |
| 32 | 6 | 224 |

Votes are always "counted" at the same time (at the end of the voting period), no matter how long the tokens are locked.

See below an example that shows how voluntary locking works.

- Peter: Votes No with 10 DOT for a 32-week lock period => 10 x 6 = 60 Votes
- Logan: Votes Yes with 20 DOT for one week lock period => 20 x 1 = 20 Votes
- Kevin: Votes Yes with 15 DOT for a 2-week lock period => 15 x 2 = 30 Votes

Even though both Logan and Kevin vote with more DOT than Peter, the lock period for both of them is less than Peter’s, leading to their voting power counting as less.

### Approval and Support

When a referendum exits the Lead-in Period and enters the Voting Period, it must meet two criteria for the duration of the Confirmation Period to be approved: **Approval** and **Support**.

**Approval** - this measures the percentage of 'yes' (aye) votes compared to the total of 'yes' (aye) and 'no' (nay) votes, but with a twist: each vote can have different weights, known as convictions.

- **Conviction-Weighted Votes**: Conviction multiplies the power of a vote. For example, if someone votes with 4x conviction, their vote counts four times more. What is gained in voting power is paid for with extended token locks. The higher your conviction, the longer your tokens will be locked.
- **Approval Calculation**: Approval is calculated as the share of conviction-weighted 'aye' votes against the total conviction-weighted 'aye' and 'nay' votes.

**Support -** this measures the overall turnout of voters who are in favor or neutral (abstain), compared to the total possible votes in the system.

- **Total Active Issuance**: This includes all possible votes.
- **Support Calculation**: Support is the total number of 'aye' and 'abstain' votes (without considering conviction) compared to the total active issuance.

**Example 1: Calculating Approval & Support**

Imagine the total active issuance is 100 DOT:

- **Account A** votes "Aye" with 10 DOT and 4x conviction.
- **Account B** votes "Nay" with 5 DOT and 2x conviction.
- **Account C** votes "Abstain" with 20 DOT (no conviction for abstain votes).

In this scenario, only 35 DOT from the total active issuance participated in voting.

**Approval**

1. Multiply votes by their conviction:
    - Aye' = 10 DOT * 4 = 40
    - Nay' = 5 DOT * 2 = 10
2. Total weighted votes = 40 (Aye') + 10 (Nay') = 50
3. Approval = (Aye' / Total weighted votes) * 100 = (40 / 50) * 100 = 80%

**Support**

1. Add 'aye' and 'abstain' votes:
    - Aye + Abstain = 10 + 20 = 30
2. Support = (Total 'aye' + Abstain) / Total active issuance * 100 = (30 / 100) * 100 = 30%

**Note**: Nay votes are not counted towards Support. Support measures voters who turned out either in favor or who consciously abstained.

**Example 2: Understanding Approval & Support Curves**

<div style={{textAlign: 'left'}}>
  <img alt="opengov_approval_support_curve" src={useBaseUrl('/img/community/opengov/opengov_as.jpg')} width="700px" />
</div>


The figure above shows the following:

- Even if the approval threshold is reached (i.e., % of current approval is greater than the approval curve), the proposal only enters the confirmation period once the support threshold is also reached (i.e., % current support is greater than the underlying support curve).
- If the referendum meets the approval and support thresholds for the duration of the confirmation period, the proposal will be approved and will be scheduled for enactment. Each track has a default minimum Enactment Period, and the approved referendum needs to wait till the end of it to be executed. Powerful Tracks like Root enforce a larger Enactment Period to ensure the network has ample time to prepare for any changes the proposal may bring. The referendum proposers can also set the enactment period higher than its default value.
- A referendum may exit the confirmation period when the thresholds are no longer met due to new *Nay* votes or a change of existing *Aye* or *Abstain* votes to *Nay* . Each time it exits, the confirmation period clock is reset. For example, suppose the confirmation period is 20 minutes, and a referendum enters it just for 5 min before exiting. The next time it enters, it must be confirmed for 20 minutes (not 15 minutes).
- It is possible that a referendum meets the approval and support thresholds almost at the end of the decision period. In this case, even though the decision period elapses, the referendum can pass if it stays confirming for the duration of the track-specific confirmation period. It is rejected immediately if it exits the confirmation period after the decision period elapses.
- The approval curve starts at 100% and gradually decreases to 50%, but never below 50%. Assuming all the active token supply has voted on a proposal, the conviction vote-weighted support should always be above 50% to pass.

### Approval & Support Curves for Tracks

Different Origins have varying Confirmation Periods and requirements for Approval and Support. Referenda using less privileged origins may have lower support requirements compared to those using highly privileged origins like Root. Below are the approval and support curves for the different Origins of Hydration OpenGov.

<div style={{textAlign: 'left'}}>
  <img alt="root_approval_support_curve" src={useBaseUrl('/img/community/opengov/root_curve.jpg')} width="400px" />
</div>

**Root** - For referenda that seeks to change the protocol’s runtime

<div style={{textAlign: 'left'}}>
  <img alt="whitelisted_caller_approval_support_curve" src={useBaseUrl('/img/community/opengov/whitelisted_caller_curve.jpg')} width="400px" />
</div>

**Whitelisted Caller** - For referenda submitted by the Technical Committee

<div style={{textAlign: 'left'}}>
  <img alt="referendum_canceller_approval_support_curve" src={useBaseUrl('/img/community/opengov/ref_canceller_curve.jpg')} width="400px" />
</div>

**Referendum Canceller** - For referenda that seek to cancel other referenda without slashing the Decision Deposit

<div style={{textAlign: 'left'}}>
  <img alt="referendum_killer_approval_support_curve" src={useBaseUrl('/img/community/opengov/ref_killer_curve.jpg')} width="400px" />
</div>

**Referendum Killer** - For referenda that seek to cancel other referenda and slash the Decision Deposit

<div style={{textAlign: 'left'}}>
  <img alt="general_admin_approval_support_curve" src={useBaseUrl('/img/community/opengov/general_admin_curve.jpg')} width="400px" />
</div>

**General Admin** - For referenda that seeks to manage the registrar and permissioned HRMP channel operations

<div style={{textAlign: 'left'}}>
  <img alt="omnipool_approval_support_curve" src={useBaseUrl('/img/community/opengov/omnipool_curve.jpg')} width="400px" />
</div>

**Omnipool** - For referenda aimed at changing parameters of the Omnipool

<div style={{textAlign: 'left'}}>
  <img alt="treasurer_approval_support_curve" src={useBaseUrl('/img/community/opengov/treasurer_curve.jpg')} width="400px" />
</div>

**Treasurer** - For referenda that seeks to spend up to $500,000

<div style={{textAlign: 'left'}}>
  <img alt="spender_approval_support_curve" src={useBaseUrl('/img/community/opengov/spender_curve.jpg')} width="400px" />
</div>

**Spender** - For referenda that seeks to spend up to $5,000

<div style={{textAlign: 'left'}}>
  <img alt="tipper_approval_support_curve" src={useBaseUrl('/img/community/opengov/tipper_curve.jpg')} width="400px" />
</div>

**Tipper** - For referenda that seeks to spend up to $500

---

If you would like to use OpenGov, read the [user guides](/guides/governance).