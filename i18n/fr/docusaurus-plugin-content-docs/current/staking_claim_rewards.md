---
id: staking_claim_rewards
title: Récupérer vos récompenses de délégation (staking rewards)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

À la fin de chaque ère, les pools de validateurs se voient attribuer leurs [récompenses de délégation](/staking_rewards) qui consistent en une récompense de base, des récompenses de points d'ère et des pourboires. Ces récompenses, cependant, ne sont pas automatiquement distribuées aux comptes du validateur et de ses nominateurs. Cela se produira seulement après que les récompenses de délégation (de staking) aient été réclamées par **déclencher un paiement** (**triggering a payout**). Les récompenses de délégation doivent être réclamées **sous 84 ères**  après qu'elles aient été gagnées. Une fois cette période passée, les informations de récompenses justificatives sont effacées de la chaîne et la pool de validateurs ne peut plus recevoir ses récompenses pour cette ère.

Le procédé de déclencher manuellement un paiement dans un délai limité est une importante fonction de sécurité. En exigeant qu'une transaction de paiement soit soumise pour chaque poule de validateur et pour chaque ère, la distribution des récompenses est répartie sur plusieurs blocs. Si toutes les récompenses devaient être distribuées à tous les validateurs et nominateurs en un seul bloc, la stabilité de la chaîne pourrait être mise en danger.

## Comment déclencher un paiement
Un paiement peut être déclenché facilement par les validateurs et leurs nominateurs en utilisant Polkadot/apps. À cette fin, naviguez jusqu'à *Réseau > Staking > Paiements* (en anglais *Network > Staking > Payouts*). Sinon, vous pouvez utiliser le lien suivant:
https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/staking/payout


En sélectionnant *Mes réserves* (en anglais : *My stashes*) vous devriez voir vos récompenses qui sont disponibles pour paiement pour vos tokens délégués avec une information des numéros d'ère respectives. en cliquant sur *Paiement de tous* (en anglais *Payout all*), il est possible de soumettre une série de transactions afin de réclamer toutes les récompenses pour les ères passées.

<img src={useBaseUrl('/staking-claim-rewards/payouts.jpg')} />

Après avoir déclenché le paiement, on vous demandera de signer la/les transaction(s) en utilisant vous compte HDX. Une fois confirmés, les récompenses pour les ères sélectionnées vont être distribuées aux validateurs respectifs et leurs nominateurs.
