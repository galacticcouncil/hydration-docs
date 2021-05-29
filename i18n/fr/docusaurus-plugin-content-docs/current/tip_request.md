---
id: tip_request
title: Réclamer une récompense de trésorerie
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Avec le lancement du [Programme récompensé de Nouvel Accord HydraDX](#link-to-new-deal), les membres de la communauté peuvent réclamer des récompenses HDX de la trésorerie en tant que récompense pour leurs contributions. Ce guide va vous guider tout au long du procédé de réclamation de récompense. Vous pouvez trouver plus d'informations sur les différents types d'activités qui sont récompensées dans [ce post](/new_deal).

Le processus pour réclamer une récompense de trésorie se compose de deux étapes. Dans un premier temps, les contributeurs doivent publier leur requête de récompense sur Commonwealth.im avec une description de la contribution. dans un second temps, la récompense de trésorerie doit être soumit sur la chaîne (on-chain) en utilisant Polkadot/apps.

## 01 Publier la requête de pourboire dans Commonwealth.im{#01-publish-tip-request}

Par soucis de transparence, toutes les réclamations de récompense doivent être publiées dans un fil (thread) sur la [Page HydraDX Commonwealth](https://commonwealth.im/hydradx).  Avant d'ouvrir un thread, vous devez lier votre portefeuille HydraDX à Commonwealth.im:
Cliquez sur *Log in* (en haut à droite) et sélectionnez *Connect with wallet > polkadot-js*.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/login.jpg')} width="300px" />
</div>

Après avoir choisi votre adresse HDX dans le popup, on vous demandera de signer le message en utilisant votre portefeuille et de configurer un nom d'affichage pour ce portefeuille.

Une fois connecté, vous devez créer un nouveau thread pour votre requête de récompense. Naviguez jusqu'à la partie en haut à droite de la page et cliquez sur *New thread > New thread*. Vous pouvez aussi directement utiliser ce lien: https://commonwealth.im/hydradx/new/thread. 

Vous pouvez utiliser le titre de ce thread pour indiquer le sujet (tip request) et la nature de la contribution. Dans le corps du thread, veuillez fournir les informations suivantes:

* La période pendant laquelle la contribution a été effectuée
* Un bref résumé de la contribution
* Le montant de la récompense réclamée (en HDX)
* Le temps passé pour la contribution (en heures)
* Si besoin est, un descriptif plus détaillé incluant la pertinence de la contribution à HydraDX

Pour référence, vous pouvez regarder [cet exemple de requête de pourboire](https://commonwealth.im/hydradx/proposal/discussion/1165-tip-request-add-documentation-for-staking). 

Après avoir rempli les informations, postez ce thread et il devrait devenir disponible dans la liste générale.

:::note

Les nominateurs et les validateurs qui ont alloués tout leurs HDXs et qui se retrouvent "coincés" peuvent réclamer une récompense de trésorerie de 1 HDX qui leur permettra de délier certains de leurs tokens. Si cela s'applique à votre cas, veuillez créer un thread Commonwealth en suivant [cet exemple](https://commonwealth.im/hydradx/proposal/discussion/1166-tip-request-overbonded-staker).

:::

## 02 Soumettre la réclamation de pouboire sur la chaîne (On-Chain) {#02-submit-on-chain}

Après avoir publié votre réclamation de récompense de trésorerie, vous devez la soumettre sur chaîne (on-chain). À cet effet, votre portefeuille doit contenir un petit montant de HDX pour couvrir les frais de transaction. Si vous n'avez pas de HDX actuellement, vous n'avez pas besoin d'effectuer cette étape - quelqu'un d'autre va soumettre votre requête de récompense sur chaîne pour vous.

Les réclamations de récompense de trésorerie peuvent être soumises sur chaîne  avec Polkadot/apps en utilisant le lien suivant:
https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/treasury/tips.

pour soumettre une nouvelle requête de récompense, cliquez sur *Proposez une récompense*

*  **soumettre avec le compte** ou **submit with account** (en anglais) - choisissez le compte qui va signer la transaction pour soumettre la requête de récompense sur chaîne. Ce compte doit contenir un petit montant de HDX pour les coûts de transaction.
* **bénéficiaire** ou **beneficiary** (en anglais) - choisissez ou entrez l'adresse du compte qui recevra la récompense de trésorerie. Ce compte doit correspondre au compte qui a ouvert le thread Commonwealth.
* **raison de la récompense** ou **tip reason** (en anglais) - fournissez l'URL du thread Commonwealth.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/submit-on-chain.jpg')} />
</div>

Pour soumettre la requête de récompense, cliquez sur *Proposez une récompense* ou *Propose tip* (en anglais) et signez la transaction. 

Une fois la transaction confirmée, vous devriez pouvoir voir votre réclamation de récompense sur la page overview.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/tip-requests.jpg')} />
</div>
