---
id: identity
title: définir votre identité
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Les titulaires ed compte ont la possibilité de définir leur identité en fournissant des informations spécifiques et en les stockant on-chain (sur la chaîne). Par ailleurs, l'information de l'identité peut optionnellement être soumise aux gérants de registres pour vérification. En définissant et en vérifiant leur identité, les validateurs et les nominateurs aident à sauvegarder la confiance dans le réseau. 

:::note
Si vous participez en tant que validateur HydradDX nous **recommandons fortement** que vous définissiez votre identité et passiez par le procédé de vérification. Les validateurs vérifiés parraissent plus fiables et attirent plus de nominations, de ce fait augmentant leurs chances d'être inclus dans l'ensemble des validateurs actifs.
:::

## 01 Définir votre identité {#01-set-identity}

Pour définir votre identité, ouvrez Polkadot/apps (connecté au réseau *HydraDX Snakenet* ) et naviguez jusqu'à *Mes comptes*. Sinon, vous pouvez suivre ce lien:

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts

Sur la page des comptes, repérez le compte qui contient vos tokens HDX engagés. Après ça, cliquez sur les trois points à côté du compte (sur la droite) et sélectionnez *Définir l'identité sur la chaîne de bloc*.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-1.jpg')} />

Vous verrez une nouvelle fenêtre appelée *enregistrer votre identité*. Ici, vous pouvez entrer les informations suivantes:

* nom légal
* email
* adresse web (web)
* twitter
* nom matrix (riot name en anglais) (au cas où vous utilisez la messagerie Matrix)

Dans le dernier champs de la fenêtre, vous pouvez voir le montant de HDX que vous devez déposer pour stocker votre information d'identité. Vous récupérerez la caution quand vous déciderez d'enlever votre identité plus tard.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-2.jpg')} />

Après avoir rempli les informations, cliquez sur *Définir l'identité* et signer la transaction en utilisant l'extension de navigateur Polkadot.js. Une fois que la transaction est confirmée, votre identité est définie.

## 02 Soumettre votre identité pour vérification {#02-verify-identity}

Après avoir défini votre identité, vous pouvez la soumettre aux gérants de registres pour vérification. Pour se faire, ouvrez Polkadot/apps et naviguez jusqu'à *Développeur* > *Extrinsics*. vous pouvez aussi suivre ce lien:

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/extrinsics

Après avoir sélectionné le compte HydraDX approprié (de l'étape précédente), vous devez remplir les informations suivantes:

* **extrinsic**: identity
* **action**: requestJudgment
* **reg_index**: Ici vous devez entrez l'ID du gérant de registre que vous choisissez pour procéder à la vérification. HydraDX a deux gérants de registres: Simon Kraus - HydraSik (ID: **0**) et Jimmy Tudeski - stakenode (ID: **1**).
* **max_fee**: Ici vous devez entrer le montant de frais maximum en HDX  que vous êtes prêt à payer au registraire pour la vérification. Seuls les registraires avec des frais inférieurs à votre max_fee vont être éligible pour effectuer la vérification.

Pour soumettre la requête de vérification, cliquez sur *Soumettre la transaction* (*Submit Transaction* en anglais) et signez la transaction.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-3.jpg')} />

Veuillez noter que le processus de vérification d'identité peut prendre du temps pour aboutir. Pour voir le status de votre requête, navigez jusque **Mes comptes** et passez le curseur sur la section montrant votre identité - vous verrez une fenêtre popup montrant le statut actuel.

## 03 Résultat de la procédure de vérification {#03-verification-outcome}

Après avoir effectué votre requête de vérification, le registraire va soumettre un des jugements suivants qui va devenir visible dans votre statut d'identité:

* **Unknown** - valeur par défaut, aucun jugement n'a encore été émis.
* **Reasonable** - les informations fournies paraissent raisonnables, cependant, aucune vérification en profondeur n'a été effectuée.
* **KnownGood** - l'information est correcte.
* **OutOfDate** - l'information était correcte avant, mais est n'est maintenant plus à jour.
* **LowQuality** - l'information est imprécise mais peut être corrigée en la mettant à jour.
* **Erroneous** - l'information fournie est fausse et pourrait indiquer une intention malveillante.
