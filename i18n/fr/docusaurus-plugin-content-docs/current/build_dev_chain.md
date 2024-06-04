---
id: build_dev_chain
title: Configurer une chaîne de développement
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Cette section vous guide tout au long du processus de configuration de votre instance locale Hydration à des fins de développement.

## 01 installer les dépendances {#01-install-dependencies}

Pour préparer une instance locale Hydration pour le développement, votre machine doit avoir toutes les dépendances pour faire fonctionner une chaîne Substrate. Vous devrez installer un environnement de développement Rust et vous assurer qu'il est configuré convenablement pour compiler du code d'exécution Substrate pour une finalité en WebAssembly (Wasm).

Vous pouvez installer et configurer toutes les dépendances manuellement en suivant le [guide de Substrate](https://substrate.dev/docs/en/knowledgebase/getting-started), ou vous pouvez utiliser le script suivant :

```bash
$ curl https://getsubstrate.io -sSf | bash -s -- --fast
$ source ~/.cargo/env
```

## 02 Construire (build) {#02-build}

Construire le Wasm et les environnements d'exécution natifs:

```bash
# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Build the binary
$ cd HydraDX-node/
$ cargo build --release
```

Vous trouverez le build (la construction) dans le dossier suivant `./target/release/hydra-dx`.

## 03 exécuter {#03-run}

Avant d'exécuter votre build vous pouvez purger n'importe quel chaîne de développement existante sur votre machine (vous devrez faire ça souvent dans le processus de développement):

```bash
$ ./target/release/hydra-dx purge-chain --dev
```

Exécuter votre build en utilisant une des commandes suivantes:

```bash
$ ./target/release/hydra-dx --dev

# Run with detailed logging
$ RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/hydra-dx -lruntime=debug --dev
```

## 04 Connectez vous à voitre instance de chaîne locale {#04-connect-to-your-local-chain-instance}

Vous pouvez vous connecter à votre node de développement Hydration en utilisant Polkadot/apps et en changeant le réseau en `Développement`. Vous pouvez aussi utilisez ce lien: 
https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer

<img alt="connect to node" src={useBaseUrl('/building/connect-to-node.jpg')} />
