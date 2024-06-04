---
id: claim
title: Récupérer vos HDX
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Vous pouvez récupérer vos HDX avec les tokens xHDX (ERC-20) que vous avez obtenus pendant la période où notre [Balancer LBP](https://hydradx.substack.com/p/lbp-announcement) était opérationnel. 

## Prérequis {#prequisites}

Il y a deux conditions préalables pour récupérer vos HDX. En premier lieu, vous  devez installer [l'extension de navigateur Polkadot.js](https://polkadot.js.org/extension/) qui sera utilisée pour créer votre portefeuille HDX. En second lieu, vous devez accéder à vos xHDX qui devraient être stockés dans un portefeuille supportant la signature de messages relatifs aux tokens ERC-20 (par exemple : Metamask).

Si vos tokens xHDX sont stockés dans un portefeuille Coinbase ou un portefeuille Trust, vous devrez utiliser une des solutions alternatives suivantes pour récupérer vos HDX, puisque ces portefeuilles ne supportent pas la signature de messages:
* Metamask: vous pouvez utiliser l'extension de navigateur Metamask et importer votre portefeuille en utilisant la "seed phrase" de récupération.
* MEW (MyEtherWallet): vous pouvez aussi utiliser MEW soit en important votre "seed phrase" de récupération (*Phrase Mnémontechnique*) ou en utilisant l'option de connexion WalletLink. Les deux options sont accessibles depuis [MEW wallet access page](https://www.myetherwallet.com/access-my-wallet). Si vous utilisez un portefeuille Coinbase, vous pouvez utiliser WalletLink que vous pouvez trouver dans les paramètres du portefeuille Coinbase.


## procédure de réclamation {#claim-process}

Après vous être assuré que vous satisfaites les prérequis décris ci-dessus, vous pouvez vous rendre sur [application de réclamation Hydration](https://claim.hydradx.io) et effectuer le procédé de récupération.

Pendant la procédure de récupération, vous allez utiliser vos tokens xHDX (ERC-20) pour récupérer votre part de tokens HDX.

### 00 Autoriser {#00-authorize}

L'application de réclamation Hydration va requérir une autorisation de l'extension de navigateur Polkadot.js.

:::warning

assurez vous que vous n'êtes pas victime d'une attaque d'hameçonnage, et soyez attentif au pop-up d'autorisation: L'application devrait s'identifier  elle-même comme **CLAIM.HYDRADX.IO** et la requête devrait venir de **https://claim.hydradx.io**.

:::

<img alt="authorize" src={useBaseUrl('/claim/authorize.jpg')} />

Après autorisation, vous serez invité à mettre à jour les métadonnées pour l'extension de navigateur Polkadot.js. Cela permettra à Polkadot.js de créer des adresses spécifiques à Hydration qui seront nécessaires pour terminer la procédure de récupération.

<img alt="authorize" src={useBaseUrl('/claim/metadata.jpg')} />

### 01 Sélectionnez votre adresse ETH {#01-select-your-eth-address}

Dans la première étape de la procédure de récupération, on vous demandera de choisir votre compte contenant vos tokens xHDX. Ca peut être fait soit en connectant votre portefeuille contenant les tokens ERC-20 (par exemple : Metamask), soit en entrant manuellement votre adresse ETH dans la zone de saisie (auquel cas vous devrez signer le message manuellement plus tard).

Après avoir entré votre adresse ETH, vous devriez voir le solde de tokens HDX que vous pouvez réclamer, dont le [remboursement des frais de gaz](https://hydradx.substack.com/p/first-governance-vote) que vous avez dépensé pour obtenir vos xHDX sur le Balancer.

:::note

Vous n'êtes pas éligible pour un remboursement de gaz si vous avez obtenu vos xHDX à un autre endroit que sur le Balancer pool officiel (par exemple sur Uniswap), ou si vous avez déplacé vos tokens en dehors de votre portefeuille utilisé au moment de l'achat.

:::

<img alt="authorize" src={useBaseUrl('/claim/claim-01.jpg')} />

### 02 créez et sélectionnez une adresse HDX {#02-create-and-select-an-hdx-address}

Dans la seconde étape, on vous demandera de choisir votre adresse HDX.

Pour créer une nouvelle adresse HDX, ouvre l'extension de navigateur Polkadot.js et cliquez sur le signe  "+" pour créer un nouveau compte. Dans la première étape de création de compte, vous verrez la phrase mnémotechnique de 12 mots qui pourra être utilisée pour récupérer votre compte. Après avoir enregistré votre "seed phrase" dans un endroit sûr, cliquez sur *Next step*. Ici, vous devriez changer le **Network** en choisissant l'option **Hydration Snakenet**.
Saisissez un nom et un mot de passe pour votre compte, et finissez la création de compte.

<img alt="authorize" src={useBaseUrl('/claim/create-account.png')} />

:::warning 

Assurez vous de conserver votre "seed phrase" de récupération en la stockant dans un endroit sûr et ne la partagez avec personne. Utilisez cette "seed phrase" est le seul moyen pour vous de recouvrer votre compte et si vous la perdez ou la faites fuiter, vos fonds pourraient être compromis. Veuillez noter que vous avez besoin de protéger l'accès à ce portefeuille jusqu'à ce que le mainnet commence, puisque tous les soldes HDX sont actuellement verrouillés. Si vous perdez l'accès à votre portefeuille HDX, vous perdrez en même temps vos HDX.

:::

Après avoir créé votre compte HDX, vous devriez être capable de le séléctionner dans l'application de récupération Hydration. Après l'avoir fait, l'application devrait vous fournir un aperçu des adresses ETH et HDX utilisées pour la procédure de récupération. Cliquez sur suivant pour procéder à la signature du message.

<img alt="authorize" src={useBaseUrl('/claim/claim-02.jpg')} />

### 03 Signer {#03-sign}

Dans la troisième étape du processus de récupération en utilisant l'application de récupération Hydration, vous aurez l'option de signer le message en utilisant vos tokens xHDX pour réclamer vos HDX.

:::note

Veuillez noter que dans cette étape vous verrez la **public key** (clé publique) de votre adresse HDX, et non pas l'adresse dans sa forme humainement lisible comme elle était présentée dans les étapes précédentes dans votre extension de navigateur Polkadot.js (pour plus de détails référez vous à [ss58 docs](https://polkadot.js.org/docs/keyring/start/ss58)). Si vous avez suivi toutes les étapes comme décrites ci-dessus, Il n'y a pas d'inquiétude à avoir et il est sûr de continuer avec la signature du message. Nous allons aussi vérifier que le compte HDX que vous utilisez pour signer la transaction de récupération à l'étape finale correspond au compte qui reçoit les HDX réclamés. 

:::

Selon le choix que vous avez fait à la première étape, vous avez deux options de signature de message pour utiliser les tokens xHDX dans le processus de récupération:

* Si vous utilisez **Metamask**, après avoir cliqué sur le bouton *sign* (signez) vous serez invité par Metamask à signer le message. Suivez les instructions dans Metamask.

* Si vous avez entré votre adresse ETH manuellement, vous devrez signer le message via le portefeuille externe qui contient la clé privée de vos tokens xHDX. Une fois que vous avez signé le message, copiez la signature (qui commence par "0x") dans le champ respectif sur l'application de récupération Hydration.

<img alt="authorize" src={useBaseUrl('/claim/claim-03.jpg')} />

### 04 Récupération {#04-claim}

Après avoir signé le message avec le portefeuille contenant vos tokens xHDX, l'extension Polkadot.js devrait s'ouvrir et il vous sera demandé de signer la transaction pour récupérer les HDX sur votre compte. Entrez votre mode de passe de votre compte HDX, et clickez sur *Sign the transaction* (signez la transaction).

<img alt="authorize" src={useBaseUrl('/claim/claim-sign.jpg')} />

Vous avez terminé la procédure de récupération, faisant ainsi de vous un propriétaire de HDX.

Vous pouvez visualiser votre solde en utilisant Polkadot/apps connecté au réseau Hydration: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/accounts
