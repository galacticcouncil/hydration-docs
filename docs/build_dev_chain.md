---
id: build_dev_chain
title: Die Einrichtung von der Entwicklungskette
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Dieser Abschnitt führt Sie durch den Prozess des Einrichtens einer lokalen HydraDX-Ketteninstanz für die Entwicklung. 

:::note
Möchten Sie einen Knoten für Validierungszwecke einrichten? Bitte ziehen Sie zu unserem [validator setup guide](/node_setup).
:::

## 01 Installieren Sie Abhängigkeiten 

Um eine lokale HydraDX-Ketteninstanz für die Entwicklung vorzubereiten, muss Ihr Computer alle Abhängigkeiten für die Ausführung einer Substratkette abdecken. Sie müssen eine Rust-Entwicklerumgebung installieren und sicherstellen, dass sie ordnungsgemäß für das Kompilieren des Substrate-Laufzeitcodes auf das WebAssembly (Wasm) -Ziel konfiguriert ist.

Sie können alle Abhängigkeiten manuell installieren und konfigurieren,folgen Sie bitte [Substrate guide](https://substrate.dev/docs/en/knowledgebase/getting-started), oder Sie könnten dieses Skript die ganze Arbeit für Sie erledigen lassen:

```bash
$ curl https://getsubstrate.io -sSf | bash -s -- --fast
$ source ~/.cargo/env
```

## 02 Bauart

Erstellen Sie die Wasm- und native Ausführungsumgebungen:

```bash
# Rufen Sie die Quelle der neuesten stabilen Version ab
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Erstellen Sie die Binärdatei
$ cd HydraDX-node/
$ cargo build --release
```

Sie können den Aufbau hier finden `./target/release/hydra-dx`.

## 03 Start

Bevor Sie Ihre Bauart ausführen, können Sie alle vorhandenen Entwicklungsketten auf Ihrem Computer löschen (dies müssen Sie im Entwicklungsprozess häufig tun).:

```bash
$ ./target/release/hydra-dx purge-chain --dev
```

Führen Sie Ihre Bauart mit einem der folgenden Befehle aus:

```bash
$ ./target/release/hydra-dx --dev

# Führen Sie mit detaillierter Protokollierung aus
$ RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/hydra-dx -lruntime=debug --dev
```

## 04 Stellen Sie eine Verbindung zu Ihrer lokalen Ketteninstanz her

Sie können mit Polkadot/apps eine Verbindung zu Ihrem HydraDX-development herstellen und das Netzwerk in "Development" ändern. Sie können auch diesen Link verwenden:
https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer

<img alt="connect to node" src={useBaseUrl('/building/connect-to-node.jpg')} />
