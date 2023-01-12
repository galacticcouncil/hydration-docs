---
id: participate_in_referenda
title: Participer aux Référendums
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Ce post fournit un guide détaillé sur comment participer aux référendums - voter et proposer. Il y a deux outils que vous pouvez utiliser à ces fins - [Commonwealth.im](#cw) ou [Polkadot/apps](#polkajs).

Avant de vous décider à participer, nous vous encourageons fortement à lire [l'article informatif](/democracy_referenda) dans la section Apprendre / Démocratie. Là, vous trouverez des détails importants sur les mécanismes derrière les référendums.

:::caution
Le module de démocratie HydraDX sera lancé le, ou après le, **15 septembre 2021**. Veuillez ne pas tenter les actions montrées avant cette date.
:::

## Utiliser Commonwealth.im {#cw}
### Voter dans un Référendum {#cw-vote}
Vous pouvez voir tous les référendums qui sont ouverts au vote en naviguant sur [l'onglet Référendums](https://commonwealth.im/hydradx/referenda) sur la page Commonwealth de HydraDX.

Pour voter sur un référendum actif, vous devez cliquer dessus. Après quoi, vous verrez une page montrant tous les détails pertinents. 

Dans la section *Cast Your Vote* (*Voter*), remplissez les information suivantes:

* Le montant du vote - c'est le montant de tokens HDX que vous êtes prêt à verrouiller pour soutenir le référendum.
* Le multiplicateur de conviction (Conviction multiplier) - c'est le multiplicateur qui co-détermine le [poids de votre vote](/democracy_referenda#referenda-votes-weighing).

Après ça, votez en cliquant sur *Vote yes/oui* ou *Vote no/non* et signez la transaction.

### Proposer un Référendum {#cw-propose}
Pour proposer un référendum, visitez la [page Commonwealth HydraDX](https://commonwealth.im/hydradx/) et cliquez sur le menu du dessus sur *New Thread > New democracy proposal*.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/cw-proposal.jpg')} />
</div>

Remplissez les information des champs montrés ci-dessus. Les paramètres les plus importants sont: 
* Module
* Function
* Toute information supplémentaire comme spécifié par la fonction que proposer à être appelée
* Deposit - le montant de tokens HDX que vous êtes prêt à déposer en soutient à la proposition

Dans l'exemple ci-dessus, le module de proposition est *balances*, et la fonction est *SetBalance* qui modifie l'équilibre de solde libre et réservé d'un compte donnée.

Pour soumettre la proposition, cliquez sur *Send transaction* et signer en utilisant votre portefeuille (wallet).

Après avoir soumis la proposition sur-chaîne et avoir signé la transaction, la proposition devrait apparaître dans la [liste des référendums proposés](https://commonwealth.im/hydradx/referenda).

:::caution
À chaque période de vote, la proposition de référendum avec le soutient le plus important (*seconding* / *appui*) entre dans le tour de scrutin. À mesure que le nombre de référendums augmente, il n'y a aucune garantie que votre proposition atteigne jamais un appui suffisant pour entrer dans le scrutin. Il n'y a pas d'option pour retirer une proposition de référendum, ce qui veut dire que vos fonds peuvent rester verrouillés pour une période de temps plus longue.

Les propositions de référendum malveillantes sont sanctionnées. Le Conseil HydraDX et le Comité Technique ont le droit d'annuler tout référendum qui a été proposé de mauvaise foi. Par conséquent, les tokens déposés seront détruits.
:::

## Utiliser Polkadot/apps {#polkajs}

### Voter dans un Référendum {#polkajs-vote}
Vous pouvez voir tous les référendums qui sont ouverts au vote en naviguant sur [*Gouvernance > Démocratie*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy) dans Polkadot/apps.

Pour voter dans un référendum, cliquez sur le bouton *Vote* à son côté.

Dans la fenêtre contextuelle, remplissez les informations suivantes:

* Vote value - c'est le montant de tokens HDX que vous êtes prêts à verrouiller en soutient au référendum
* Conviction multiplier - c'est le multiplicateur qui co-détermine le [poids de votre vote](/democracy_referenda#referenda-votes-weighing).

Après ça, apportez votre vote en cliquant sur *Vote Nay* (Non) or *Vote Aye* (Oui) et signez la transaction.

### Proposer un Référendum {#polkajs-propose}
Proposer un référendum via Polkadot/apps consiste en deux étapes - soumettre une pré-image, et soumettre une proposition sur-chaîne.

#### 01 Soumettre une pré-image {#polkajs-propose-01}
Pour soumettre une pré-image, visitez Polkadot/apps et naviguez jusqu'à [*Gouvernance > Démocratie*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy).

Après avoir cliqué sur *Soumette la pré-image*, vous devriez voir la fenêtre contextuelle suivante:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-preimage.jpg')} />
</div>

Remplissez  les informations des champs montrés ci-dessus. Les paramètres les plus importants sont:
* Le compte depuis lequel la proposition est envoyée.
* La zone de proposition
* L'action de la proposition

Dans l'exemple ci-dessus, la zone de proposition est *balances*, et l'action est *forceTransfer* des tokens d'un compte vers un autre.

Avant de soumettre la pré-image et de signer la transaction, veuillez vous assurer de copier le "preimage hash" (hachage de la pré-image). vous en aurez besoin pour l'étape suivante.
#### 02 Soumettre la proposition {#polkajs-propose-02}
Pour soumettre la proposition de référendum, visitez [*Gouvernance > Démocratie*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy) dans Polkadot/apps. 

Après avoir cliqué sur *Soumettre la proposition*, vous devriez voir la fenêtre contextuelle suivante:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-proposal.jpg')} />
</div>

Entrez le hachage (hash) de la pré-image de l'étape précédente, et le montant de tokens que vous êtes prêt à déposer pour la proposition. Le minimum est de 100 000 HDX. 

Après avoir soumis la proposition sur-chaîne, et avoir signé la transaction, votre proposition devrait apparaître dans la liste des référendums proposés.

:::caution
À chaque période de vote, la proposition de référendum avec le soutient le plus important (*seconding* / *appui*) entre dans le tour de scrutin. À mesure que le nombre de référendums augmente, il n'y a aucune garantie que votre proposition atteigne jamais un appui suffisant pour entrer dans le scrutin. Il n'y a pas d'option pour retirer une proposition de référendum, ce qui veut dire que vos fonds peuvent rester verrouillés pour une période de temps plus longue.

Les propositions de référendum malveillantes sont sanctionnées. Le Conseil HydraDX et le Comité Technique ont le droit d'annuler tout référendum qui a été proposé de mauvaise foi. Par conséquent, les tokens déposés seront détruits.
:::
