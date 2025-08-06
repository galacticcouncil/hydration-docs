---
title: Origins & Tracks
description: Learn about referenda origins and decision tracks
---

import useBaseUrl from '@docusaurus/useBaseUrl';

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

| OpenGov track        | Description                                                                                                                                    | Max Deciding | Decision Deposit | Prepare Period | Decision Period | Confirm Period | Min Enactment Period | Approval Curve | Support Curve                 |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------| --- |------------------|----------------|-----------------|----------------|----------------------| --- |-------------------------------|
| Root                 | Any action on the chain (e.g. upgrade the chain). Has the highest level of privilege and requires a high degree of approval and support.       | 1 | 5,000,000 HDX    | 10 Minutes     | 7 Days          | 1 Day          | 4 Hours              | Reciprocal | Linear Decreasing             |
| Whitelisted Caller   | For referenda whitelisted by the Technical Committee, typically used in emergencies. Shorter decision period and require less support to pass. | 10 | 50,000 HDX       | 10 Minutes     | 3 Days          | 4 Hours        | 10 Minutes           | Reciprocal | Reciprocal Whitelisted Caller |
| Referendum Canceller | For referenda that seek to cancel other referenda without slashing the Decision Deposit.                                                       | 10 | 500,000 HDX      | 1 Hour         | 3 Days          | 1 Hour         | 10 Minutes           | Linear Decreasing | Reciprocal                    |
| Referendum Killer    | For referenda that seek to cancel other referenda and slash the Decision Deposit.                                                              | 10 | 2,500,000 HDX    | 1 Hour         | 3 Days          | 3 Hours        | 10 Minutes           | Linear Decreasing | Reciprocal                    |
| General Admin        | For general Protocol management, e.g. registrar or permissioned HRMP channel operations.                                                       | 10 | 500,000 HDX      | 1 Hour         | 7 Days          | 3 Hours        | 10 Minutes           | Reciprocal | Reciprocal                    |
| Omnipool             | For referenda aimed at changing parameters of the Omnipool.                                                                                    | 10 | 500,000 HDX      | 1 Hour         | 7 Days          | 3 Hours        | 10 Minutes           | Linear Decreasing | Reciprocal                    |
| Treasurer            | For referenda that seek to spend up to 50,000,000 HDX.                                                                                         | 10 | 1,250,000 HDX    | 1 Hour         | 7 Days          | 12 Hours       | 10 Minutes           | Reciprocal | Linear Decreasing             |
| Small Spender        | For referenda that seek to spend up to 2,222,222 HDX.                                                                                          | 10 | 100,000 HDX      | 1 Hour         | 7 Days          | 3 Hours        | 10 Minutes           | Linear Decreasing | Reciprocal                    |
| Small Tipper         | For referenda that seek to spend up to 50,000 HDX.                                                                                             | 10 | 10,000 HDX       | 1 Hour         | 7 Days          | 3 Hours        | 10 Minutes           | Linear Decreasing | Reciprocal                    |

***Reciprocal** - Initially, a high level of approval is required for the referenda to enter the Confirmation Period. As time goes on, the level of approval needed decreases more slowly.

****Linear Decreasing** - Initially, a high level of approval is required for referenda to enter their Confirmation Period. However, the level of approval needed decreases at a steady, predictable rate over time.