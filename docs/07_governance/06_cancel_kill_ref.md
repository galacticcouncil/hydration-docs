---
title: Cancelling & Killing Referenda
description: Learn about emergency governance procedures
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In OpenGov, referenda can be rejected in two ways before the voting period ends: by submitting a referendum in the Referendum Canceller and Referendum Killer tracks.

**Referendum Canceller** aims to cancel an already ongoing referendum. When this origin cancels a referendum, the Submission and Decision Deposit are refunded to their originators. An example of when a referendum might be considered to be canceled is if the originator has made some errors in creating the preimage and did not necessarily do anything malicious. Cancellation has a lower Decision Period, and Approval and Support criteria are much easier to meet over time than most other Origins. This is because the cancellation of a referendum usually comes with a sense of urgency.

**Referendum Killer** aims to instantly kill an ongoing referendum, slashing submission and decision deposit (the account(s) that posted these deposits will lose those funds). This origin can be engaged if, for example, a malicious actor submits a referendum on the Root Track to set the code of the chains' runtime to stop block production.

The Decision Deposit for the Referendum Killer track itself is high to prevent malicious actors from attempting to slash deposits of good referenda. A subsequent Referendum Killer can kill an existing Referendum Killer.

---

If you would like to use OpenGov, read the [user guides](/guides/governance).