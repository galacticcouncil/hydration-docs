---
id: node_setup
title: Installer un node HydraDX
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Cette section vous guide à travers le procédé d'installation et de fonctionnement d'un node HydraDX.

:::caution

Faire fonctionner un node validateur requiert une certaine compétence technique nécessaire pour l'installation correcte du node, et pour garantir sa disponibilité. Si vous n'êtes pas sûr de ce que vous faites ici, nous recommandons de [Déléguer vos HDX](/start_nominating) à un validateur expérimenté à la place. En déléguant vos HDX, vous vous protégez vous, et vos nominateurs contre une perte de fonds involontaire.

:::

## 00 configurations techniques requises {#00-required-technical-specifications}


Voici la configuration minimale pour faire fonctionner un node validateur HydraDX : 

* Système d'exploitation: Ubuntu 20.04
* Processeur: Intel Core i7-7700K @ 4.5Ghz (ou monocœur à performance équivalente)
* Mémoire: 64GB RAM
* Stockage: NVMe SSD avec une capacité d'au moins 200GB (l'empreinte de donnée va croître à l'avenir)

:::note

Ce sont les exigences techniques minimales qui ont été vérifiées et approuvées par l'équipe. Si vous voulez vous assurer que votre machine a les ressources suffisantes pour faire fonctionner un node, lancer un [benchamark de performance](/performance_benchmark) pour le découvrir.

:::


## 01 vérifier si votre horloge système est synchronisée {#01-check-whether-your-system-clock-is-synchronized}

Avant de faire fonctionner un node, vous devriez vous assurer que votre horloge système est synchronisée - c'est important car les validateurs travaillent ensemble. Sur Ubuntu 20.04 l'horloge système devrait être synchronisée par défaut. Pour le vérifier, lancer la commande suivante et vérifier le résultat :

```bash
$ timedatectl | grep "System clock"
System clock synchronized: yes
```

Si le résultat est différent, alors vous pouvez installer le paquet _NTP_ manuellement et vérifier que votre horloge système est synchronisée:

```bash
$ apt install ntp
$ ntpq -p
```

## 02 Règler vos paramètres de firewall {#02-adjust-your-firewall-settings}
Le port `30333` est utilisé pour des connexions peer-to-peer avec d'autres nodes. Si vous faites fonctionner le node en tant que validateur, nous recommandons que vous installiez un firewall et le configuriez pour exposer ce port seulement aux connexions distantes.

Si vous ne faites pas fonctionner le node en tant que validateur, vous pouvez aussi exposer `9944`  (pour des connexions websocket avec des applications externes) et `9933` (pour les requêtes HTTP à votre node). Vous pouvez utiliser le port `9944` pour vous connecter à votre node avec [Polkadot/apps](/polkadotjs_apps_local).   

## 03 Télécharger et construire un binary {#03-download-or-build-a-binary}
Vous pouvez télécharger un binaire de notre dernière version sur [github](https://github.com/galacticcouncil/HydraDX-node/releases).

Vous pouvez aussi construire un binaire depuis la source :

```bash
# Install dependencies
$ curl https://getsubstrate.io -sSf | bash -s -- --fast

# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Build the binary
$ cd HydraDX-node/
$ cargo build --release
```

Si vous avez construit un binaire selon les étapes ci-dessus, le chemin de votre binaire se trouve ici :
```
target/release/hydra-dx
```

## 04 exécuter le binaire {#04-run-the-binary}
Vous pouvez lancer le binaire en exécutant la commande suivante:

```bash
$ {PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator
```

:::note

Les nodes validateurs requierent la base de donnée de la chaîne entière. Si vous avez lancé le node avant sans le flag `--validator`, vous allez avoir besoin de resynchroniser la base de donnée en purgeant la chaîne avant de lancer le node.
```bash
$ {PATH_TO_YOUR_BINARY} purge-chain --chain lerna
```

:::

Outre le chemin de votre binaire (voir au dessus), vous devez spécifier un nom de node qui sera utilisé pour identifier votre node dans [Telemetry](https://telemetry.polkadot.io/#list/HydraDX%20Snakenet) où vous pouvez trouver une liste de toutes les nodes fonctionnement sur le Snakenet HydraDX.

## 05 Fonctionnement avec systemd {#05-running-with-systemd}

Pour vous assurer que votre node est lancé automatiquement au redémarrage de votre machine, nous recommandons de lancer le node HydraDX en tant que processus de systemd. Pour ce faire, créer le fichier suivant et insérer le contenu en remplaçant les variables indiquées comme `{VARIABLE}`:

```bash
$ touch /etc/systemd/system/hydradx-validator.service
```

```
[Unit]
Description=HydraDX validator

[Service]
Type=exec
User={UNIX_USER}
ExecStart={PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator
Restart=always
RestartSec=120

[Install]
WantedBy=multi-user.target
```

:::note
Régler **RestartSec** est recommandé parce que cela retarde la remise en route du node en cas de crash. Cela permet à n'importe quelle donnée imperturbable (comme les votes de consensus) d'être écrite sur le disque avant que le node ne se remette en route. Relancer le node immédiatement après qu'il ait crashé peut provoquer une ambiguïté ou une double signature, provoquant ainsi un slashing (punition).
:::

Après avoir créé le fichier de configuration vous pouvez réagir avec votre node validateur HydraDX comme un processus du système:
```bash
# Start the node at system boot
$ systemctl enable hydradx-validator.service

# Start the node manually
$ systemctl start hydradx-validator.service

# Check the status of the node
$ systemctl status hydradx-validator.service

# Check the logs of the node
$ journalctl -f -u hydradx-validator.service
```

Votre node HydraDX est maintenant configuré et fonctionnel !

Vous pouvez maintenant compléter les dernières étapes pour [Commencer à valider](/start_validating).
