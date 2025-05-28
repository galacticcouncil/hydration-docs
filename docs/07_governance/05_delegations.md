---
title: Delegations
description: Learn how delegations work
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In OpenGov, delegations build on the vote delegation feature from Governance v1, allowing voters to delegate their voting power to another voter. OpenGov introduces a feature called **Multirole Delegation**, where voters can choose different delegates for different types of referenda in the system. Delegation can be done per track, and accounts can select different delegates (or no delegation) for each track.

For example, suppose a token holder does not have the technical background to consider the merits and vote on the referenda submitted to the Root track. In that case, they can delegate their voting power just for the Root track to a trusted expert who (according to them) acts in the best interest of the protocol. In this way, token holders do not need to be up-to-date with governance matters and can still make their votes count through delegates.

### Purpose of Delegations

- Ensure enough support for proposals to be enacted while keeping the system censorship-free.
- Help voters who may not have the technical knowledge or time to judge all referenda.
- Allow voters to participate hands-free by delegating their voting power to trusted entities.

### Key Points about Delegations

1. **Delegate with conviction locks -** When you undelegate your votes (take back your voting power), any conviction locks (periods during which your tokens are locked) will start immediately, whether or not your delegate used your votes for any referenda. This means your tokens will be locked for the conviction period even if they weren't used for voting.
    
    If you delegate votes to different delegates with different convictions, there will be various unlocking periods based on the conviction multipliers.
    
2. **Undelegate without conviction -** If you delegate without conviction and then undelegate, you can unlock your tokens immediately.
3. **Undelegate with conviction -** If you delegate with a conviction (e.g., 1x or 2x) and then undelegate and re-delegate with a different conviction, multiple conviction locks are created. The highest conviction lock will determine when your tokens can be unlocked.

### Important Details

- Before delegating a specific track, you must remove any vote on that track.
- Delegating voting power does not give the delegate control over your account's funds. The delegate can vote with your power but cannot transfer balances, choose validators, or execute any other actions besides voting on the defined tracks.
- Delegated votes do not give action points for staking rewards on Hydration. To understand what this means, read about [HDX staking](/products/staking).

---

If you would like to use OpenGov, read the [user guides](/guides/governance).