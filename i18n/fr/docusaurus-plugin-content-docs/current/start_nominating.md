---
id: start_nominating
title: Devenez nominateur
---

import useBaseUrl from '@docusaurus/useBaseUrl';

En devenant un nominateur, vous stakez (déléguez) certains de vos tokens HDX pour aider à sécuriser le réseau HydraDX et pour gagner des récompenses.  À l'inverse de faire fonctionner un node de validateur, le procédé de nominer ne requiert pas de compétences techniques avancées, faisant ainsi de la nomination le choix recommandé pour quiconque ne souhaite pas devenir validateur.


Au moment de nominer, les nominateurs fournissent leur stake (délégation) à un validateur de leur choix. Ainsi, les nominateurs élisent l'ensemble actif de validateurs et reçoivent des récompenses pour leur participation. La somme de récompenses que vous recevez en tant que nominateur dépend du pourcentage de la commission de récompense du validateur choisi - Plus la commission de récompense est grande, plus les récompenses que vous recevrez pour votre délégation seront réduites. 

:::warning

nominer est une forme de participation au processus de staking (délégation) plus accessible, cependant cela comporte un certain niveau de risque. Si le validateur que vous avez nominé se comporte de manière non conforme (par exemple : ne parvient pas à maintenir le temps de fonctionnement requis), un "slashing" peut survenir qui peut causer à une perte involontaire partielle des fonds que vous avez délégué. Nous recommandons fortement que vous fassiez vos recherches avant de nominez un validateur.
 
:::

## 00 Interface de staking (délégation) {#00-staking-ui}

Pour accéder à l'interface de staking (délégation), vous devez d'abord ouvrir Polkadot/apps, vous connecter à un de ses [nodes publiques HydraDX RPC](/polkadotjs_apps_public) et assurez vous que vous pouvez voir votre [solde](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts)

:::note

Êtes vous toujours en possession de vos tokens xHDX que vous avez acheté pendant l'évènement de vente "Balancer LBP"? Vous devez d'abord [récupérer vos HDX](/claim) avant de continuer.

:::

Après avoir vérifié que vous voyez votre solde HDX, vous pouvez naviguer dans l'interface de Staking (délégation): *Network* > *Staking*

ou pour l'interface en français:

*Réseau* > *Staking*

L'interface de Staking a les onglets de menu suivants:


* **Staking overview**: ici, vous trouverez une liste de tous les validateurs actifs et quelques informations basiques sur chaque validateur, comme le montant de HDX délégués sur le node, le montant de délégation du validateur lui-même, et le pourcentage de la comission de récompense. De plus, vous pouvez voir le nombre de points d'ère gagnés par chaque validateur pendant l'ère actuelle et le nombre du dernier bloc produit par le validateur.
* **Actions sur le compte**: Ici vous pouvez déléguer et nominer.
* **Paiements**: Ici, vous pouvez réclamer vos récompenses de délégation.
* **Cibles**: Ici, vous pouvez estimer vos gains. C'est un bon endroit pour commencer  lorsque vous cherchez un node validateur à nominer.
* **En attente**: Ici, vous pouvez trouver  la liste d'attente des validateurs inactifs, avant d'être inclus dans l'ensemble de validateurs actifs. Un validateur va rester dans la file d'attente jusqu'à ce qu'il reçoive un montant de HDX délégué suffisant pour entrer  dans l'ensemble des validateurs actifs.
* **Statistiques du validateur**: Ici, vous pouvez retrouver différentes informations, via l'adresse, d'un validateur un historique détaillé sur les points d'ère gagnés, stake élu, récompenses, et "slashes" (punitions). Nous recommandons fortement que vous étudiiez cette information avant de faire confiance à un nominateur avec votre nomination.

## 01 Engager vos tokens HDX {#01-bond-hdx-tokens}

:::warning

Les tokens HDX engagés sont en jeu pour garantir la sécurité du réseau. Les comportements non conformes du node validateur que vous avez nominé peuvent être punis de "slashing" qui peut mener à une perte involontaire de vos fonds. Nous recommandons fortement que vous fassiez vos recherches quand vous choisissez des validateurs à nominer.

:::

Pour engager les tokens HDX, naviguez dans "Actions sur le compte" dans l'interface de staking: *Network* > *Staking* > *Account actions* > *+ Stash*

ou pour l'interface en français: 

*Réseau* > *Staking* > *Actions sur le compte* > *+ Réserve*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-1.png')} />
</div>

Après avoir cliqué sur le bouton *Réserve*, vous devriez voir les préférences d'engagements avec quatre champs de saisie modifiables:
* **stash account**: Le compte contenant la plupart de vos tokens HDX. Les HDX vont être délégués depuis ce compte.
* **controller account**: un compte contenant une petite partie de HDX nécessaires pour couvrir les frais associés à la mise en route et à l'arrêt du processus de nomination.
* **value bonded**: La somme de HDX que vous engagez. N'engagez pas tous les HDX que vous possédez - à la place, gardez-en un petit montant pour couvrir les frais de transactions qui surviendront plus tard.
* **payment destination**: Le compte sur lequel les récompenses de staking (délégation) seront envoyées.

:::warning

N'engagez pas tous vos tokens HDX disponibles. Gardez une petite réserve pour couvrir les frais des transactions. Si vous engagez tous les tokens HDX que vous possédez, vous pourriez ne pas être capable de signer la transaction pour commencer le processus de nomination.

:::

Après avoir ajusté vos préférences d'engagement, cliquez sur **Allouer** et signer la transaction pour terminer le processus d'engagement.

:::caution

Pour des raisons de sécurité, il n'est pas recommandé d'avoir le même compte de Réserve et de contrôleur. Cependant, puisque les transferts sont désactivés sur Snakenet, Il n'est actuellement pas possible d'utiliser des comptes séparés. Nous recommandons fortement que vous passiez à des comptes de Réserve et de Contrôleur séparé dès que cela devient possible.

:::

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-2.png')} />
</div>

## 02 Nominer un validateur {#02-nominate-a-validator}

Après avoir alloué vos HDX, vous pouvez nominez un validateur. Avant de procéder, Faites vos recherches pour décider quel validateur vous aimeriez nominé selon leur performance (historique). Pour ce faire, référez vous aux informations dans l'interface de staking [mentionnée ci-dessus](#00-staking-ui).

:::note

Le Snakenet HydraDX a une **limite de 64 nominateurs  par node validateur**. Quand vous choisissez un node à nominez, assurez vous que le validateur n'a pas atteint son quota maximum de nominations, autrement votre nomination va être invalide et vous ne recevrez pas de récompense pour votre stake (délégation). Le nombre de nominations pour chaque validateur peut être trouvé dans l'onglet du menu "En attente" dans l'interface de staking.

:::

Pour nominer un ou plusieurs validateurs, naviguer dans : *Network* > *Staking* > *Account actions* > *Nominate* (Bouton à côté de vos HDX engagés)

*Réseau* > *Staking* > *Actions sur le compte* > *Désigner* (Bouton à côté de vos HDX engagés)

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-1.png')} />
</div>

Après avoir cliqué sur le bouton "désigner" vous devriez voir un popup appelé "Désignez des validateurs". Ici vous pouvez sélectionner un ou plusieurs validateurs à nominer dans la liste des validateurs disponibles. Il est fortement recommandé de désigner plusieurs validateurs pour éviter  d'être inactif si vous n'obtenez pas de place dans un validateur (par exemple : le validateur est surchargé ou pas intégré dans l'ensemble des validateurs actifs). vous pouvez désigner jusqu'à 16 validateurs. Pour chaque ère, seulement une de vos nominations peut être active, vous ne pouvez pas être choisi par plusieurs validateurs simultanément. Votre stake va être automatiquement assigné à un des validateurs que vous avec sélectionné de façon à maximiser la décentralisation et les profits. Vous choisissez juste le montant de HDX engagés et les validateurs en qui vous avez confiance.

Pour nominer les validateurs choisis, cliquez sur _Désigner_ et signez la transaction.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>


## 03 Vérifier le statut de vos nominations {#03-check-the-status-of-your-nominations}

Après  avoir complété le processus de nomination, vos nominations vont être inactives pour le restant de l'ère en cours. Au début de l'ère suivante, vos nominations vont devenir actives, à condition qu'au moins un des nodes validateurs que vous avez nominé soit inclus dans l'ensemble actif des validateurs et n'est pas surchargé, vous en excluant. Si tous vos validateurs restent en liste d'attente, vos nominations respectives vont aussi rester inactives et vous ne gagnerez pas de récompense pendant cette ère.

Pour vérifier le statut de vos nominations, naviguez à: *Network* > *Staking* > *Account actions*

ou pour l'interface en français:

*Réseau* > *Staking* > *Actions sur le compte*

Vous pouvez voir vos nominations actives dans "en attente de nominations":

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-3.png')} />
</div>

Quand une nomination devient active, vous devriez la trouver dans la liste de "Nominations active".

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-4.png')} />
</div>  

:::note

Assurez-vous de revisiter vos nominations de temps en temps. Il est possible que certains de vos validateurs changent leur pourcentage de commission ce qui impactera négativement vos récompenses. En vérifiant le statut de vos nominations fréquemment, vous serez capable de réagir en mettant à jour la liste de vos validateurs désignés.

:::

## 04 Adapter vos nominations

Si certains de vos validateurs deviennent surchargés ou changent leur commission, vous pourriez avoir envie de changer vos nominations.

Pour ce faire, ouvrez Polkadit/apps et naviguez dans: *Network* > *Staking* > *Account actions*

ou pour l'interface en français :

*Réseau* > *Staking* > *Actions sur le compte*

Cliquez sur les trois points à côté des détails de votre compte et sélectionnez _Définir les désignés_.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-set-nominees.png')} />
</div>

Dans la fenêtre suivante, vous pouvez enlever des validateurs, et/ou en ajouter des nouveaux.
Adapter vos nominations peut être fait à la volée, Il n'y a pas besoin d'arrêter de nominer. Les changements seront appliqués quand la nouvelle ère commence (24h).

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>  

## 05 Réengagez vos tokens

Si vous avez accidentellement désengagés vos tokens HDX, vous pouvez les réengager avant que la période de 28 jours soit passée.

Pour ce faire, ouvrez Polkadot/apps et naviguez jusqu'à Développeur > Extrinsics. Sinon, vous pouvez suivre ce lien:

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/extrinsics

Sélectionnez votre compte dans le menu déroulant de compte sélectionné. après ça, vous devez remplir les informations suivantes:

* **extrinsic**: staking
* **action**: rebond_value
* **value**: Ici vous devez entrer le montant de HDX  que vous voulez réengager.


<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/rebond.png')} />
</div>


Si tout est configuré correctement vous pouvez soumettre l'extrinsic (extrinsèque) en cliquant sur le bouton "Soumettre la transaction" et en signant la transaction dans l'extension Polkadot.js. La transaction complétée, le montant de HDX sélectionné devrait être réengagé.

Merci de soutenir HydraDX en devenant un nominateur Snakenet! 🎉
