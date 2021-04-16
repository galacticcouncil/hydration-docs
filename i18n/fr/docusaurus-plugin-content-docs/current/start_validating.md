---
id: start_validating 
title: Devenez validateur
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Après avoir [mis en place votre node HydraDX](/node_setup), vous devez engager (bonding) vos tokens HDX et définir les clés de validateur avant de pouvoir commencer à valider.

:::attention

Faire fonctionner un node de validateur requiert certaines compétences techniques for l'installation correcte du node, et garantir sa durée de fonctionnement. Nous exigeons aussi que les validateurs fassent fonctionner leur node en utilisant la version stable la plus récente. Si vous n'êtes pas sûr de ce que vous faites ici, nous vous recommandons de [proposer vos HDX](/start_nominating) à un validateur expérimenté, à la place. En faisant ainsi, vous vous protégez vous-même et vos nominateurs contre une perte de fonds involontaire.

:::

## 01 Engagez vos tokens HDX {#01-bond-hdx-tokens}

Afin de prendre part au réseau en tant que node validateur, vous devez engager une certaine somme de tokens HDX. So vous n'avez aucun HDX, il n'est pas possible de participer à l'étape initiale du testnet. Cependant, de trépidantes nouvelles vont être annoncées par l'équipe dans les semaines à venir, donc restez à l'affût et souscrivez à notre newsletter.

:::note

Êtes vous toujours en possession de vos tokens xHDX que vous avez acheté pendant l'évènement de vente "Balancer LBP"? Vous devez d'abord [récupérer vos HDX](/claim) avant de continuer.

:::

Pour lier des HDX, ouvrez Polkadot/apps, et connectez vous à un des[Nodes HydraDX RPC publique](/polkadotjs_apps_public). Assurez vous que vous pouvez voir votre [solde](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts).

:::attention

Les tokens HDX engagés sont en jeu pour garantir la sécurité du réseau. Les comportements non conformes du node validateur peuvent être punis par un "slashing" qui peut résulter par une perte involontaire de fonds. Nous recommandons fortement que vous ne procédiez que si vous savez vraiment ce que vous faite.

:::

Pour la prochaine étape, allez dans *Network* > *Staking* > *Account actions* > *+ Stash*

ou pour l'interface en français:

*Réseau* > *Staking* > *Actions sur le compte* > *+ Réserve*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-1.png')} />
</div>

Après avoir cliqué sur le bouton Réserve, vous devriez voir les préférences d'engagement (bonding)  avec quatre champs de saisie modifiables:
* **Compte de la réserve**: Le compte contenant la plupart de vos tokens HDX. Les HDX vont être délégués depuis ce compte.
* **Compte contrôleur**: un compte contenant une petite partie de HDX nécessaires pour couvrir les frais associés à la mise en route et à l'arrêt du processus de validation.
* **value bonded**: La somme de HDX que vous engagez. N'engagez pas tous les HDX que vous possédez - à la place, laisser en quelques un pour couvrir les frais de transactions qui surviendront plus tard.
* **payment destination**: Le compte sur lequel les récompenses de validation seront envoyées.

:::attention

N'engagez pas tous vos tokens HDX disponibles. Gardez une petite réserve pour couvrir les frais de transaction. Si vous engagez tous vos tokens HDX, vous pourriez ne pas être capable de signer la transaction pour la mise en route du processus de validation.

:::

Après avoir ajusté vos préférences d'engagement, cliquez sur Allouer et signez la transaction pour compléter la procédure d'engagement.

:::attention

Pour raisons de sécurité, Il n'est pas recommandé d'avoir un seul compte pour le compte de contrôleur et celui de la réserve. Toutefois, puisque les transferts sont désactivés sur Snakenet, Il n'est pour l'instant pas possible d'utiliser des comptes séparés. Nous recommandons fortement que vous passiez à des comptes de réserve et contrôleur séparés aussitôt que cela devient possible à l'avenir.

:::

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-2.png')} />
</div>

## 02 Générez des clés de sessions {#02-generate-session-keys}

La deuxième étape consiste à générer vos clés de session. Les clés de session sont utilisées pour associer le node validateur avec votre compte de contrôleur and les HDX délégués (staked). Il est donc important qu'elles soient installées correctement. 

Pour générer vos clés de session, exécuter sur le node:

```bash
$ curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933

# Example output
{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}
```

Vous trouverez vos clés de session sous la partie _result_ de la sortie (`0x9257...` dans l'exemple de sortie ci-dessus).


## 03 Définissez vos clés de session {#03-set-your-session-keys}

Pour associer les clés de session générées avec votre compte de contrôleur, ouvrez dans Polkadot/apps:*Developer* > *Extrinsics*

ou pour l'interface en français:

*Développeur* > *Extrinsèques*

Remplissez les champs de saisie:

* _utiliser le compte sélectionné_: sélectionnez votre compte de contrôleur;
* _soumettre l'extrinsèque suivant_: choisissez `session` dans la barre de gauche et `setKeys` à droite;
* _keys_: entrez votre clé de session de l'étape précédente;
* _proof_: `0`.

Pour terminer, cliquez sur _soumettre la transaction_ et signez la transaction.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/set-session-keys-1.png')} />
</div>

## 04 Assurez vous que votre node est complètement synchronisée {#04-make-sure-that-your-node-is-fully-synced}

Avant de continuer, vous devriez vous assurer que votre node fonctionne et que le processus de synchronisation est entièrement terminée. La façon la plus certaine de vérifier l'état de la synchronisation est directement sur le node elle-même:

```bash

$ journalctl -f -u hydradx-validator.service

# The output will be similar to this
Mar 22 18:37:38 Ubuntu-2010-groovy-64-minimal hydra-dx[232761]: 2021-03-22 18:37:38  💤 
Idle (52 peers), best: #622028 (0x5f5a…1041), finalized #622025 (0x5b21…a746), ⬇ 9.1kiB/s ⬆ 6.1kiB/s

```

Vous pouvez comparer le numéro de bloc de la sortie (dans l'exemple ci-dessus:`#622025`) avec le numéro de bloc courant que vous pouvez trouver dans [Polkadot/apps Explorateur](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/explorer). Au moment de la rédaction le bloc courant est `#622240`, ce qui signifie que le node utilisée pour l'exemple n'est pas totalement synchronisée. 

Veuillez attendre que le numéro de bloc apparaissant dans votre journal local corresponde au numéro de bloc du réseau.

## 05 Commencer à valider {#05-start-validating}

Pour commencer à valider, naviguer dans Polkadot/apps:

*Network* > *Staking* > *Account actions* > *Validate* (Bouton à côté de vos HDX engagés)

ou pour l'interface en français:

*Réseau* > *Staking* > *Actions sur le compte* > *Valider* (Bouton à côté de vos HDX engagés)

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-1.png')} />
</div>

Après avoir cliqué sur le bouton *valider* vous devriez voir une fenêtre popup appelée *définissez vos préférences de validateur*. Ici, vous devez définir votre _Reward commission percentage_. C'est la part de récompense qui vous sera payée. Le reste des récompenses sera partagé parmi les nominateurs en accord avec leur stake (délégation).  Si vous décidez de ne prendre aucune commission de récompense, vous pouvez définir le pourcentage à 0.

Pour confirmer, Cliquez *Valider* et signez la transaction.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-2.png')} />
</div>

## 06 Vérifier le statut de votre node de validateur {#06-check-the-status-of-your-validator-node}

Vous pouvez vérifier le statut de votre node de validateur à Polkadot/apps dans: *Network* > *Staking* > *Staking overview*

ou pour l'interface en français:

*réseau* > *Staking* > *Staking overview*

Cette onglet offre un aperçu de tous les validateurs actifs connectés au réseau. En haut, il y a une indication du nombre de places de validateurs disponibles, ainsi que le nombre de nodes qui ont signalées leur intention d'être des validateurs. Vous pouvez confirmer si votre node est en liste d'attente en cliquant sur l'onglet _En attente_.

Votre node validateur va rester en liste d'attente jusqu'à ce qu'il soit choisi pour être inclus dans l'ensemble des validateurs. L'ensemble des validateurs est mis à jour à chaque ère ce qui permet à de nouveaux nodes d'être inclus, à condition qu'il y ait des places libres.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-3.png')} />
</div>

Merci de soutenir HydraDX en devenant un validateur Snakenet ! 🎉