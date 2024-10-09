---
id: opengov_theory
title: Understanding OpenGov
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

On Hydration, all decisions which affect the protocol are adopted through a governance process that puts token holders at the centre of decision making.

---

## **Components of OpenGov**

This section covers all the relevant elements of OpenGov and what they mean.

### **Participants**

These are the groups of decision makers and their roles in the governance process.

#### **1. Public**

This group is inclusive of all HDX token holders. They can propose and vote on referenda.

#### **2. Technical Committee**

This is a group of experienced engineers who are appointed by OpenGov referenda on the GeneralAdmin track (read [Origins and Tracks](https://www.notion.so/Understanding-OpenGov-30557548d5bc4a7eae58c6a0a737bcef?pvs=21) section to understand what this means). Their main task is to safeguard the technical stability of the protocol.

The Technical Committee has the power to whitelist referenda, which are then placed on the Whitelisted Caller track.  This is a quicker track with lower thresholds that can dispatch Root origin referenda that can alter the runtime. This enables the TC to swiftly fix any problems that may arise.

In addition to whitelisting referenda, the TC has another key function related to the security of the [Omnipool](https://docs.hydration.net/): targeted function pausing. This allows the TC to temporarily pause certain or all actions relating to specific assets. Thus, in the case of an emergency or detection of suspicious behaviour, the TC has the power to make any asset non-tradable.

---

## **Referenda**

In OpenGov, all referenda are public. Anyone can start a referendum at any time and as often as they wish. 

Key components of referenda in OpenGov include:

1. **Decision Deposit**: A necessary deposit that must be provided for a referendum to enter its Decision Period. The amount depends on the track’s privilege level.
2. **Referenda Timeline**: The lifecycle of a referendum involves several stages, including the Lead-in Period, Decision Period, Confirmation Period, and Enactment Period. Each stage has specific requirements and durations based on the track.
3. **Origins and Tracks**: Origins refer to specific levels of privilege or authority for referenda, determining the Track a proposal follows. Tracks are pathways through which a referendum progresses, with each track having different parameters and thresholds.
4. **Approval and Support**: To be approved, a referendum must meet the criteria for approval and support during the Confirmation Period. Approval measures the percentage of 'yes' votes compared to the total votes, while Support measures the overall turnout of voters in favor or neutral.
5. **Conviction Voting**: A mechanism that allows token holders to increase their voting power by locking up their tokens for a specified period. The number of votes is calculated by multiplying tokens by the conviction multiplier.
6. **Cancelling & Killing Referenda**: Mechanisms to reject referenda before the voting period ends. The Referendum Canceller cancels ongoing referenda without slashing deposits, while the Referendum Killer instantly kills referenda and slashes deposits.
7. **Delegations**: The ability for voters to delegate their voting power to another voter. OpenGov introduces multirole delegation, allowing different delegates for different types of referenda.

These components work together to ensure a robust and decentralized decision-making process within the Hydration protocol.

---

### **Decision Deposit**

In OpenGov, someone must provide the Decision Deposit for a referendum to enter its Decision Period (see Origins and Tracks for more details). The number of tokens required for the Decision Deposit depends on the track’s privilege level. The higher the privilege, the higher the deposit. For example, malicious referenda posted on the Small Tipper track inflict low economic damage to the network. In contrast, malicious referenda on the Root track can inflict more significant harm, such as changing the entire network's runtime.

---

### **Referenda Timeline**

Understanding the lifecycle of a referendum is crucial to grasping how decisions are made in OpenGov. When a referendum is created, the community can vote on it right away. However, it can't be finalized or enacted immediately. Instead, the referendum stays in a **Lead-in Period** until it meets three criteria:

1. **Minimum Time Requirement**: The referendum must stay in the lead-in period for a set amount of time. This prevents quick decisions and allows everyone enough time to vote and participate, mitigating the risk of "decision sniping" (where an attacker might try to pass a proposal immediately without giving others time to vote).
2. **Decision Capacity**: Each origin (or level of authority) has a limit on how many referenda can be decided at once. For example, the highest authority, called Root, can only handle one referendum at a time.
3. **Decision Deposit**: A deposit must be submitted for the referendum to be reviewed and decided on. This deposit, which is more significant than the initial creation deposit, helps prevent spam and ensures only serious proposals move forward. If the deposit isn't submitted, the proposal will timeout.

While in the Lead-in period, proposals are undecided. Once the three criteria are met, the referendum moves to the **Decision Period**, where votes are counted.

Voting continues in this period until it meets the approval and support criteria for at least the **Confirmation Period** before it is approved. If it doesn't, the proposal is automatically rejected but can be resubmitted anytime.

Once approved, a referendum enters the **Enactment Period**, after which the proposed changes are executed.

The lengths of the lead-in, decision, confirmation, and enactment periods vary depending on the track. For example, the Root track has longer periods and can only handle one proposal at a time. In contrast, other tracks, like Small Tipper, can handle many proposals simultaneously.

When a track's capacity is full, additional proposals in the lead-in period will queue until there is space to move into the decision period.

---

### **Conviction Voting**

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

---

### **Origins and Tracks**

An **Origin** refers to a specific level of privilege or authority for referenda. Each Origin has its own tracks, which are the pipelines for proposals. Origins differ in their parameter requirements for referenda to pass, with more permissions resulting in higher requirements.

For example, a runtime upgrade on the Root Origin has more significant implications than the approval of a treasury tip. Therefore, different parameter requirements are needed for these actions.

Each Origin has distinct thresholds for decision deposits, support and approval requirements, and minimum enactment periods. Here are the key parameters:

- **Maximum Deciding or Capacity**: the limit for the number of referenda that can be decided at once (i.e., the number of tracks within each origin).
- **Decision Deposit:** the amount of funds that must be placed on deposit for a referendum to enter the Decision Period (note that more requirements must be met to enter the Decision Period).
- **Preparation Period:** the minimum amount of voting time needed before entering the Decision Period (given capacity and deposit are met).
- **Decision Period:** the time interval during which a proposal's outcome can be decided.
- **Confirmation Period:** the minimum amount of time the approval and support criteria must hold before the proposal is approved and moved to the enactment period. The confirmation period should start before the end of the decision period.
- **Voting Period:** the total time allowed for voting, including preparation, decision, and confirmation periods.
- **Minimum Enactment Period:** the minimum amount of waiting time before the approved changes are applied.
- **Approval Curve:** a curve that shows the minimum percentage of 'aye' votes needed over time for a proposal to pass, ensuring strong voter support.
- **Support Curve:** a curve that shows the minimum overall support needed from all voters (including abstentions) over time, ensuring broad support among potential voters.

For a quick overview of Hydration OpenGov tracks and their parameter values, see the table below.

| OpenGov track | Description | Max Deciding | Decision Deposit | Prepare Period | Decision Period | Confirm Period | Min Enactment Period | Approval Curve | Support Curve |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Root | For referenda that changes the runtime of the network. Has the highest level of privilege and requires a high degree of approval and support. | 1 | 5,000,000 HDX | 1 Day | 7 Days | 1 Day | 1 Day | *Reciprocal | **Linear Decreasing |
| Whitelisted Caller | For referenda whitelisted by the Technical Committee. Has shorter Prepare Period due to possible emergencies. | 10 | 50,000 HDX | 10 Minutes | 7 Days | 10 Minutes | 10 Minutes | Reciprocal | Reciprocal |
| Referendum Canceller | For referenda that seek to cancel other referenda without slashing the Decision Deposit. | 10 | 500,000 HDX | 1 Hour | 3 Days | 1 Hour | 10 Minutes | Linear Decreasing | Reciprocal |
| Referendum Killer | For referenda that seek to cancel other referenda and slash the Decision Deposit. | 10 | 2,500,000 HDX | 1 Hour | 7 Days | 3 Hours | 10 Minutes | Linear Decreasing | Reciprocal |
| General Admin | For referenda that seeks to manage the registrar and permissioned HRMP channel operations. | 10 | 500,000 HDX | 1 Hour | 7 Days | 3 Hours | 10 Minutes | Reciprocal | Reciprocal |
| Omnipool | For referenda aimed at changing parameters of the Omnipool. | 10 | 500,000 HDX | 1 Hour | 7 Days | 3 Hours | 10 Minutes | Linear Decreasing | Reciprocal |
| Treasurer | For referenda that seeks to spend up to $500,000. | 10 | 1,200,000 HDX | 1 Hour | 7 Days | 12 Hours | 10 Minutes | Reciprocal | Linear Decreasing |
| Small Spender | For referenda that seeks to spend up to $5,000. | 10 | 100,000 HDX | 1 Hour | 7 Days | 3 Hours | 10 Minutes | Linear Decreasing | Reciprocal |
| Small Tipper | For referenda that seek to spend up to $500. | 10 | 10,000 HDX | 1 Hour | 7 Days | 3 Hours | 10 Minutes | Linear Decreasing | Reciprocal |

***Reciprocal** - Initially, a high level of approval is required for the referenda to enter the Confirmation Period. As time goes on, the level of approval needed decreases more slowly.

****Linear Decreasing** - Initially, a high level of approval is required for referenda to enter their Confirmation Period. However, the level of approval needed decreases at a steady, predictable rate over time.

---

### **Approval and Support**

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
  <img alt="opengov_approval_support_curve" src={useBaseUrl('/opengov_theory/opengov_as.jpg')} width="700px" />
</div>


The figure above shows the following:

- Even if the approval threshold is reached (i.e., % of current approval is greater than the approval curve), the proposal only enters the confirmation period once the support threshold is also reached (i.e., % current support is greater than the underlying support curve).
- If the referendum meets the approval and support thresholds for the duration of the confirmation period, the proposal will be approved and will be scheduled for enactment. Each track has a default minimum Enactment Period, and the approved referendum needs to wait till the end of it to be executed. Powerful Tracks like Root enforce a larger Enactment Period to ensure the network has ample time to prepare for any changes the proposal may bring. The referendum proposers can also set the enactment period higher than its default value.
- A referendum may exit the confirmation period when the thresholds are no longer met due to new *Nay* votes or a change of existing *Aye* or *Abstain* votes to *Nay* . Each time it exits, the confirmation period clock is reset. For example, suppose the confirmation period is 20 minutes, and a referendum enters it just for 5 min before exiting. The next time it enters, it must be confirmed for 20 minutes (not 15 minutes).
- It is possible that a referendum meets the approval and support thresholds almost at the end of the decision period. In this case, even though the decision period elapses, the referendum can pass if it stays confirming for the duration of the track-specific confirmation period. It is rejected immediately if it exits the confirmation period after the decision period elapses.
- The approval curve starts at 100% and gradually decreases to 50%, but never below 50%. Assuming all the active token supply has voted on a proposal, the conviction vote-weighted support should always be above 50% to pass.

### **Approval & Support Curves for OpenGov Tracks**

Different Origins have varying Confirmation Periods and requirements for Approval and Support. Referenda using less privileged origins may have lower support requirements compared to those using highly privileged origins like Root. Below are the approval and support curves for the different Origins of Hydration OpenGov.

<div style={{textAlign: 'left'}}>
  <img alt="root_approval_support_curve" src={useBaseUrl('/opengov_theory/root_curve.jpg')} width="400px" />
</div>

**Root** - For referenda that seeks to change the protocol’s runtime

<div style={{textAlign: 'left'}}>
  <img alt="whitelisted_caller_approval_support_curve" src={useBaseUrl('/opengov_theory/whitelisted_caller_curve.jpg')} width="400px" />
</div>

**Whitelisted Caller** - For referenda submitted by the Technical Committee

<div style={{textAlign: 'left'}}>
  <img alt="referendum_canceller_approval_support_curve" src={useBaseUrl('/opengov_theory/ref_canceller_curve.jpg')} width="400px" />
</div>

**Referendum Canceller** - For referenda that seek to cancel other referenda without slashing the Decision Deposit

<div style={{textAlign: 'left'}}>
  <img alt="referendum_killer_approval_support_curve" src={useBaseUrl('/opengov_theory/ref_killer_curve.jpg')} width="400px" />
</div>

**Referendum Killer** - For referenda that seek to cancel other referenda and slash the Decision Deposit

<div style={{textAlign: 'left'}}>
  <img alt="general_admin_approval_support_curve" src={useBaseUrl('/opengov_theory/general_admin_curve.jpg')} width="400px" />
</div>

**General Admin** - For referenda that seeks to manage the registrar and permissioned HRMP channel operations

<div style={{textAlign: 'left'}}>
  <img alt="omnipool_approval_support_curve" src={useBaseUrl('/opengov_theory/omnipool_curve.jpg')} width="400px" />
</div>

**Omnipool** - For referenda aimed at changing parameters of the Omnipool

<div style={{textAlign: 'left'}}>
  <img alt="treasurer_approval_support_curve" src={useBaseUrl('/opengov_theory/treasurer_curve.jpg')} width="400px" />
</div>

**Treasurer** - For referenda that seeks to spend up to $500,000

<div style={{textAlign: 'left'}}>
  <img alt="spender_approval_support_curve" src={useBaseUrl('/opengov_theory/spender_curve.jpg')} width="400px" />
</div>

**Spender** - For referenda that seeks to spend up to $5,000

<div style={{textAlign: 'left'}}>
  <img alt="tipper_approval_support_curve" src={useBaseUrl('/opengov_theory/tipper_curve.jpg')} width="400px" />
</div>

**Tipper** - For referenda that seeks to spend up to $500

---

### **Cancelling & Killing Referenda**

In OpenGov, referenda can be rejected in two ways before the voting period ends: by submitting a referendum in the Referendum Canceller and Referendum Killer tracks.

**Referendum Canceller** aims to cancel an already ongoing referendum. When this origin cancels a referendum, the Submission and Decision Deposit are refunded to their originators. An example of when a referendum might be considered to be canceled is if the originator has made some errors in creating the preimage and did not necessarily do anything malicious. Cancellation has a lower Decision Period, and Approval and Support criteria are much easier to meet over time than most other Origins. This is because the cancellation of a referendum usually comes with a sense of urgency.

**Referendum Killer** aims to instantly kill an ongoing referendum, slashing submission and decision deposit (the account(s) that posted these deposits will lose those funds). This origin can be engaged if, for example, a malicious actor submits a referendum on the Root Track to set the code of the chains' runtime to stop block production.

The Decision Deposit for the Referendum Killer track itself is high to prevent malicious actors from attempting to slash deposits of good referenda. A subsequent Referendum Killer can kill an existing Referendum Killer.

---

## **Delegations**

In OpenGov, delegations build on the vote delegation feature from Governance v1, allowing voters to delegate their voting power to another voter. OpenGov introduces a feature called **Multirole Delegation**, where voters can choose different delegates for different types of referenda in the system. Delegation can be done per track, and accounts can select different delegates (or no delegation) for each track.

For example, suppose a token holder does not have the technical background to consider the merits and vote on the referenda submitted to the Root track. In that case, they can delegate their voting power just for the Root track to a trusted expert who (according to them) acts in the best interest of the protocol. In this way, token holders do not need to be up-to-date with governance matters and can still make their votes count through delegates.

### **Purpose of Delegations**

- Ensure enough support for proposals to be enacted while keeping the system censorship-free.
- Help voters who may not have the technical knowledge or time to judge all referenda.
- Allow voters to participate hands-free by delegating their voting power to trusted entities.

### **Key Points about Delegations**

1. **Delegate with conviction locks -** When you undelegate your votes (take back your voting power), any conviction locks (periods during which your tokens are locked) will start immediately, whether or not your delegate used your votes for any referenda. This means your tokens will be locked for the conviction period even if they weren't used for voting.
    
    If you delegate votes to different delegates with different convictions, there will be various unlocking periods based on the conviction multipliers.
    
2. **Undelegate without conviction -** If you delegate without conviction and then undelegate, you can unlock your tokens immediately.
3. **Undelegate with conviction -** If you delegate with a conviction (e.g., 1x or 2x) and then undelegate and re-delegate with a different conviction, multiple conviction locks are created. The highest conviction lock will determine when your tokens can be unlocked.

### **Important Details**

- Before delegating a specific track, you must remove any vote on that track.
- Delegating voting power does not give the delegate control over your account's funds. The delegate can vote with your power but cannot transfer balances, choose validators, or execute any other actions besides voting on the defined tracks.
- Delegated votes do not give action points for staking rewards on Hydration. To understand what this means, read about [HDX staking](https://docs.hydration.net/staking).

## **How to Use OpenGov**
For tutorials (how-to guides) on how to use OpenGov, read this [page](docs/opengov_tutorials.md).