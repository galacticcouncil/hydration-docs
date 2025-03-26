---
title: Referenda
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In Hydration OpenGov, all referenda are public. Anyone can start a referendum at any time and as often as they wish. 

Key components of referenda in OpenGov include:

1. **Referenda Timeline**: The lifecycle of a referendum involves several stages, including the Lead-in Period, Decision Period, Confirmation Period, and Enactment Period. Each stage has specific requirements and durations based on the track.
2. **Decision Deposit**: A necessary deposit that must be provided for a referendum to enter its Decision Period. The amount depends on the track’s privilege level.
3. **Origins and Tracks**: Origins refer to specific levels of privilege or authority for referenda, determining the Track a proposal follows. Tracks are pathways through which a referendum progresses, with each track having different parameters and thresholds.
4. **Approval and Support**: To be approved, a referendum must meet the criteria for approval and support during the Confirmation Period. Approval measures the percentage of 'yes' votes compared to the total votes, while Support measures the overall turnout of voters in favor or neutral.
5. **Conviction Voting**: A mechanism that allows token holders to increase their voting power by locking up their tokens for a specified period. The number of votes is calculated by multiplying tokens by the conviction multiplier.
6. **Cancelling & Killing Referenda**: Mechanisms to reject referenda before the voting period ends. The Referendum Canceller cancels ongoing referenda without slashing deposits, while the Referendum Killer instantly kills referenda and slashes deposits.
7. **Delegations**: The ability for voters to delegate their voting power to another voter. OpenGov introduces multirole delegation, allowing different delegates for different types of referenda.

These components work together to ensure a robust and decentralized decision-making process within the Hydration protocol.

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

### **Decision Deposit**

In OpenGov, someone must provide the Decision Deposit for a referendum to enter its Decision Period (see Origins and Tracks for more details). The number of tokens required for the Decision Deposit depends on the track’s privilege level. The higher the privilege, the higher the deposit. For example, malicious referenda posted on the Small Tipper track inflict low economic damage to the network. In contrast, malicious referenda on the Root track can inflict more significant harm, such as changing the entire network's runtime.

---

If you would like to use OpenGov, read the [user guides](/guides/governance).