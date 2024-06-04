---
id: build_dev_chain
title: Создание цепочки разработки
---

import useBaseUrl from '@docusaurus/useBaseUrl';

В этом разделе вы познакомитесь с процессом настройки локального экземпляра цепочки Hydration для разработки. 

## 01 Установить зависимостей

Чтобы подготовить локальный экземпляр цепочки Hydration для разработки, ваш сервер должен покрыть все зависимости для запуска цепочки субстратов. Вам нужно будет установить среду разработчика Rust и убедиться, что она правильно настроена для компиляции кода среды выполнения Substrate для цели WebAssembly (Wasm).

Вы можете установить и настроить все зависимости вручную, следуя [Руководству по субстратам](https://substrate.dev/docs/en/knowledgebase/getting-started), или вы можете позволить этому скрипту сделать всю работу за вас:

```bash
$ curl https://getsubstrate.io -sSf | bash -s -- --fast
$ source ~/.cargo/env
```

## 02 Сборка

Соберите Wasm и родную среду выполнения:

```bash
# Получить исходный код последней стабильной версии
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Сборка бинарных файлов
$ cd HydraDX-node/
$ cargo build --release
```

Вы должны найти результат сборки в `./target/release/hydra-dx`.

## 03 Запуск

Перед запуском сборки вы можете очистить все существующие цепочки разработки на вашем компьютере (вам нужно будет часто делать это в процессе разработки):

```bash
$ ./target/release/hydra-dx purge-chain --dev
```

Запустите вашу сборку, используя одну из следующих команд:

```bash
$ ./target/release/hydra-dx --dev

# Запуск с подробным ведением журнала
$ RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/hydra-dx -lruntime=debug --dev
```

## 04 Подключитесь к экземпляру локальной сети

Вы можете подключиться к своей ноде разработки Hydration, используя Polkadot/apps и изменив сеть на `Development`. Вы также можете использовать эту ссылку:
https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer

<img alt="connect to node" src={useBaseUrl('/building/connect-to-node.jpg')} />
