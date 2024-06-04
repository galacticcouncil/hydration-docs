---
id: build_dev_chain
title: Configura una Cadena para desarrolladores.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Esta sección le muestra el proceso de configuración de una instancia de cadena Hydration local para el desarrollo.

## 01 Instalar dependencias

Para preparar una instancia local de Hydration Chain para el desarrollo, su máquina debe cubrir todas las dependencias para ejecutar una cadena de substrate. Deberá instalar un entorno de desarrollador de Rust y asegurarse de que esté configurado correctamente para compilar el Substrate runtime code  para el destino WebAssembly (Wasm).


Puede instalar y configurar todas las dependencias  manualmente siguiendo la [Substrate guide](https://substrate.dev/docs/en/knowledgebase/getting-started), o puede dejar que este script haga todo el trabajo por usted.

```bash
$ curl https://getsubstrate.io -sSf | bash -s -- --fast
$ source ~/.cargo/env
```

## 02 Crea

Cree los entornos de ejecución nativos y de Wasm:

```bash
# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Build the binary
$ cd HydraDX-node/
$ cargo build --release
```

Debería poder encontrar la compilación bajo  `./target/release/hydra-dx`.

## 03 Ejecuta

Antes de ejecutar su compilación, puede purgar cualquier cadena de desarrollo existente en su máquina (deberá hacer esto a menudo en el proceso de desarrollo):



```bash
$ ./target/release/hydra-dx purge-chain --dev
```

Ejecute su compilación usando uno de los siguientes comandos:



```bash
$ ./target/release/hydra-dx --dev

# Run with detailed logging
$ RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/hydra-dx -lruntime=debug --dev
```

## 04 Conéctese a su instancia de cadena local

Puede conectarse a su nodo de desarrollo Hydration usando Polkadot / apps y cambiando la red a Desarrollo. También puede utilizar este enlace:
https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer

<img alt="connect to node" src={useBaseUrl('/building/connect-to-node.jpg')} />
