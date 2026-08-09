---
id: participate_in_referenda
title: Participer aux Référendums
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Cet article fournit un guide étape par étape sur la façon de participer aux référendums - voter et proposer. Il existe deux outils alternatifs que vous pouvez utiliser à cette fin - [Commonwealth.im](#cw) ou [Polkadot/apps](#polkajs).

Avant de décider de participer, nous vous encourageons fortement à lire l'[article sur les connaissances](/democracy_referenda) dans la section Apprendre / Démocratie. Vous y trouverez quelques détails importants sur la mécanique des référendums.

:::caution
Le module de démocratie d'HydraDX sera lancé à partir du **15 septembre 2021**. Veuillez ne pas tenter l'une des actions indiquées avant cette date.
:::

## En utilisant Commonwealth.im {#cw}
### Voter dans un Référendum {#cw-vote}
Vous pouvez voir tous les référendums ouverts au vote en accédant à l'onglet [Référendums] (https://commonwealth.im/hydradx/referenda) sur la page HydraDX Commonwealth.

Pour voter sur un référendum actif, vous devez cliquer dessus. Après cela, vous verrez une page montrant tous les détails pertinents.

Dans la section *Énoncez votre vote*, remplissez les informations suivantes :

* Montant à voter - il s'agit du nombre de jetons HDX que vous êtes prêt à bloquer pour soutenir le référendum

* Multiplicateur de conviction - il s'agit du multiplicateur qui co-détermine le [poids de votre vote](/democracy_referenda#referenda-votes-weighing).

Après cela, faites ressortir votre vote en cliquant sur *Voter oui* ou *Voter non* et signez la transaction.

### Proposer un Référendum {#cw-propose}
Pour proposer un référendum, visitez la [page HydraDX Commonwealth](https://commonwealth.im/hydradx/) et cliquez dans le menu du haut sur *Nouveau fil > Nouvelle proposition de démocratie*.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/cw-proposal.jpg')} />
</div>

Remplissez les informations dans les champs ci-dessus. Les paramètres les plus importants sont :
* Module
* Fonction
* Toute information supplémentaire telle que spécifiée par la fonction que vous proposez d'appeler
* Dépôt - le montant de jetons HDX que vous êtes prêt à déposer à l'appui de la proposition

Dans l'exemple ci-dessus, le module de proposition est *balances*, et la fonction est *setBalance* qui modifie les soldes libres et de réserve d'un compte donné.

Pour soumettre la proposition, cliquez sur *Envoyer la transaction* et signez à l'aide de votre portefeuille.

Après avoir soumis la proposition sur la chaîne et signé la transaction, votre proposition doit apparaître dans la [liste des référendums proposés](https://commonwealth.im/hydradx/referenda).

:::caution
A chaque période de vote, la proposition référendaire la plus soutenue entre dans le tour de scrutin. À mesure que le nombre de référendums augmente, rien ne garantit que votre proposition sera un jour suffisamment appuyée pour entrer dans le vote. Il n'y a pas d'option pour retirer une proposition de référendum, ce qui signifie que vos fonds pourraient rester bloqués plus longtemps.

Les propositions référendaires malveillantes sont punies. Le Conseil HydraDX et le Comité technique ont le droit d'annuler tout référendum proposé de mauvaise foi. En conséquence, les jetons déposés seront brûlés.
:::

## En utilisant Polkadot/apps {#polkajs}

### Voter dans un Référendum {#polkajs-vote}
Vous pouvez voir tous les référendums ouverts au vote en accédant à [*Gouvernance > Démocratie*](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/démocratie) dans Polkadot/apps.

Pour voter lors d'un référendum, cliquez sur le bouton *Vote* à côté de celui-ci.

Dans la fenêtre contextuelle, remplissez les informations suivantes :

* Valeur du vote - il s'agit du nombre de jetons HDX que vous êtes prêt à bloquer pour soutenir le référendum
* Multiplicateur de conviction - il s'agit du multiplicateur qui co-détermine le [poids de votre vote](/democracy_referenda#referenda-votes-weighing).

Après cela, faites ressortir votre vote en cliquant sur *Voter Non* (Non) ou *Voter Oui* (Oui) et signez la transaction.

### Proposer un Référendum {#polkajs-propose}
Proposer un référendum via Polkadot/apps consiste en deux étapes : soumettre une pré-image et soumettre la proposition sur chaîne.

#### 01 Soumettre une préimage {#polkajs-propose-01}
Pour soumettre la préimage, visitez Polkadot/apps et accédez à [*Gouvernance > Démocratie*](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy).

Après avoir cliqué sur *Soumettre la préimage*, vous devriez voir la fenêtre contextuelle suivante :

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-preimage.jpg')} />
</div>

Remplissez les informations dans les champs ci-dessus. Les paramètres les plus importants sont :
* Compte à partir duquel la proposition est envoyée
* Zone de proposition
* Action proposée

Dans l'exemple ci-dessus, la zone de proposition est *soldes* et l'action est *forceTransfer* de jetons d'un compte à un autre.

Avant de soumettre la pré-image et de signer la transaction, assurez-vous de copier le hachage de la pré-image. Vous en aurez besoin pour la prochaine étape.

#### 02 Soumettre la Proposition {#polkajs-propose-02}
Pour soumettre votre proposition de Référendum, allez voir [*Governance > Democracy*](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy) dans Polkadot/apps.

Après avoir cliqué sur *Soumettre la proposition*, vous devriez voir la fenêtre contextuelle suivante :

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-proposal.jpg')} />
</div>

Entrez le hachage de la préimage de l'étape précédente et le nombre de jetons que vous êtes prêt à déposer pour la proposition. Le minimum est de 100 000 HDX.

Après avoir soumis la proposition sur chaîne et signé la transaction, votre proposition devrait apparaître dans la liste des référendums proposés.

:::caution
A chaque période de vote, la proposition référendaire la plus soutenue (*soutenue*) entre dans le tour de scrutin. À mesure que le nombre de référendums augmente, rien ne garantit que votre proposition sera un jour suffisamment appuyée pour entrer dans le vote. Il n'y a pas d'option pour retirer une proposition de référendum, ce qui signifie que vos fonds pourraient rester bloqués plus longtemps.

Les propositions référendaires malveillantes sont punies. Le Conseil HydraDX et le Comité technique ont le droit d'annuler tout référendum proposé de mauvaise foi. En conséquence, les jetons déposés seront brûlés.
:::
