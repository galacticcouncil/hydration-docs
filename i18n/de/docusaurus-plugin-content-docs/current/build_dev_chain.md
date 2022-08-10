---
id: build_dev_chain
title: Einrichten einer Dev-Chain
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Dieser Abschnitt führt Sie durch den Prozess des Einrichtens einer lokalen HydraDX-Chain für die Entwicklung. 

:::note
Möchten Sie eine Validator Node einrichten? Bitte lesen Sie unseren [collator setup guide](/collator_setup).
:::

## 01 Abhängigkeiten installieren {#01-install-dependencies}

Um eine lokale HydraDX-Chain für die Entwicklung vorzubereiten, muss Ihr Computer alle Abhängigkeiten für die Ausführung einer Substrat-Chain abdecken. Sie müssen eine Rust-Entwicklerumgebung installieren und sicherstellen, dass sie ordnungsgemäß für das Kompilieren des Substrate-Laufzeitcodes auf das WebAssembly (Wasm) konfiguriert ist.

Sie können alle Abhängigkeiten manuell installieren und konfigurieren, lesen Sie dazu bitte den [Substrate guide](https://substrate.dev/docs/en/knowledgebase/getting-started), oder Sie können dieses Skript die ganze Arbeit für Sie erledigen lassen:

```bash
$ curl https://getsubstrate.io -sSf | bash -s -- --fast
$ source ~/.cargo/env
```

## 02 Build {#02-build}

Erstellen Sie die Wasm- und native Ausführungsumgebungen:

```bash
# Rufen Sie die Quelle der neuesten stabilen Version ab
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Erstellen Sie die Binärdatei
$ cd HydraDX-node/
$ cargo build --release
```

Sie können die Binärdatei hier finden: `./target/release/hydra-dx`.

## 03 Ausführen {#03-run}

Bevor Sie Ihr Build ausführen, können Sie alle vorhandenen Dev-Chains auf Ihrem Computer löschen (dies müssen Sie im Entwicklungsprozess häufig tun):

```bash
$ ./target/release/hydra-dx purge-chain --dev
```

Führen Sie Ihr Build mit einem der folgenden Befehle aus:

```bash
$ ./target/release/hydra-dx --dev

# Führen Sie mit detaillierter Protokollierung aus
$ RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/hydra-dx -lruntime=debug --dev
```

## 04 Mit der lokalen Chain verbinden {#04-connect-to-your-local-chain-instance}

Sie können mit Polkadot/apps eine Verbindung zu Ihrer HydraDX Dev-Node herstellen indem Sie das Netzwerk in "Development" ändern. Sie können auch diesen Link verwenden:
https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer

<img alt="connect to node" src={useBaseUrl('/building/connect-to-node.jpg')} />
