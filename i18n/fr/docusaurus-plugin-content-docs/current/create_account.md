---
id: create_account
title: Créer un nouveau compte HDX
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Le processus de création d'un nouveau compte HDX se compose de trois étapes simples.

## 01 Installer Polkadot.js {#01-install-polkadot-js}

Afin de créer et de gérer votre portefeuille HDX, vous devez installer l'[extension de navigateur Polkadot.js](https://polkadot.js.org/extension/).

## 02 Mettre à jour les métadonnées {#02-upgrade-metadata}

Après avoir installé l'extension de navigateur Polkadot.js, vous devez vous assurer qu'elle a été mise à jour avec les dernières métadonnées de la chaîne. À cette fin, vous pouvez visiter le lien suivant et mettre à jour vos métadonnées, si vous y êtes invité :

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/settings/metadata

## 03 Créer votre compte HDX {#03-create-hdx-account}

Pour créer une nouvelle adresse HDX, ouvrez l'extension de navigateur Polkadot.js et cliquez sur `+` > `Créer un nouveau compte`.

Vous verrez s'afficher une phrase mnémonique de 12 mots qui peut être utilisée pour récupérer votre compte. Assurez-vous de sauvegarder votre phrase de départ dans un emplacement sécurisé. Cliquez sur « Étape suivante » et remplissez les informations suivantes :

* **Réseau**: Sélectionner `HydraDX Snakenet`
* **Nom decrivant le compte**
* **Mot de passe**

Votre compte sera créé après avoir cliqué sur `Ajouter le compte avec la graine générée`.

<div style={{textAlign: 'center'}}>
  <img alt="create-account" src={useBaseUrl('/create-account/create-account.png')} width="350px" />
</div>

:::warning 

Assurez-vous de sauvegarder votre phrase de départ en la stockant dans un emplacement sécurisé. Ne partagez jamais votre phrase de départ avec qui que ce soit. La phrase de départ peut être utilisée pour accéder à votre compte. Si vous le perdez ou le perdez, vous risquez également de perdre tout le HDX stocké dans votre compte. Veuillez noter que tous les soldes HDX sont verrouillés jusqu'au démarrage du réseau principal, vous devez donc vous assurer que le compte contenant vos jetons est sécurisé jusque-là.

:::
