---
id: build_dev_chain
title: 建立开发链
---

import useBaseUrl from '@docusaurus/useBaseUrl';

本节将引导您完成设置本地HydraDX链实例进行开发的过程。

:::note
您是否希望搭建一个用于验证目的的节点？请转到我们的 **[验证节点搭建指南](/node_setup)** 。
:::

## 01 安装依赖项 {#01-install-dependencies}

要设置本地 HydraDX 开发链实例，您的机器需涵盖运行 Substrate 链的所有依赖项。您需要安装 Rust 开发人员环境，并确保已对其进行正确配置，以便可将 Substrate 运行代码编译到 WebAssembly（Wasm）目标。

您可以按照 **[Substrate 指南](https://substrate.dev/docs/en/knowledgebase/getting-started)** 手动安装和配置所有依赖项，也可以用以下脚本完成所有工作：

```bash
$ curl https://getsubstrate.io -sSf | bash -s -- --fast
$ source ~/.cargo/env
```

## 02 构建 {#02-build}

构建 Wasm 和本地执行环境：

```bash
# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Build the binary
$ cd HydraDX-node/
$ cargo build --release
```

您应该可以在 `./target/release/hydra-dx` 下找到该构建。

## 03 运行 {#03-run}

在运行构建之前，您可以清除机器上任何现有的开发链（在开发过程中经常需要这样做）：

```bash
$ ./target/release/hydra-dx purge-chain --dev
```

使用以下命令之一运行构建：

```bash
$ ./target/release/hydra-dx --dev

# Run with detailed logging
$ RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/hydra-dx -lruntime=debug --dev
```

## 04 连接到本地链实例 {#04-connect-to-your-local-chain-instance}

您可以使用 Polkadot/apps 连接到 HydraDX 开发节点，并将网络更改为 `Development` 。您也可以使用这个链接：  
https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer

<img alt="connect to node" src={useBaseUrl('/building/connect-to-node.jpg')} />
