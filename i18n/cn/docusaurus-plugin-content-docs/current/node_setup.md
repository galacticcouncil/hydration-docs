---
id: node_setup
title: 搭建 HydraDX 节点
---

import useBaseUrl from '@docusaurus/useBaseUrl';

本节将引导您搭建及运行 HydraDX 验证节点。

:::warning

保证验证节点在线运行时间，运行并合理设置节点，需要一定的技术知识。如果对相关技术知识不是很了解，我们建议您把令牌以 **[提名](/start_nominating)** 的方式质押给有经验和技术的验证人。如此一来，您可以同时保护自己和可能质押您节点的提名人免受非自愿损失。

:::

## 00 基本性能要求 {#00-required-technical-specifications}

以下是运行验证节点的硬件及系统的基本性能要求： 

* 系统：Ubuntu 20.04；
* CPU：Intel Core i7-7700K @ 4.5Ghz (或同等单核性能)；
* 内存：64GB RAM；
* 硬盘：NVMe SSD ≥200GB (随着链的增长，数据会越来越多)。

:::note

以上是运行验证节点的最低要求。如果您不确定自己的计算机是否满足要求，请您做 **[基本性能测试](/performance_benchmark)** 。

:::


## 01 确保系统时间同步 {#01-check-whether-your-system-clock-is-synchronized}

在运行验证节点之前，请确认您的系统时间已经与网络同步。所有的验证节点是在同步工作的，因此这一步很关键。Ubuntu 20.04 的时钟默认是与网络同步的，如要验证，执行以下命令，并检查输出：

```bash
$ timedatectl | grep "System clock"
System clock synchronized: yes
```

如果输出不一样，那么您可以手动安装 NTP，并再次验证您的系统时钟是同步的：

```bash
$ apt install ntp
$ ntpq -p
```

## 02 调整防火墙设置 {#02-adjust-your-firewall-settings}

端口 `30333` 是 Hydradx 用于网络所有节点服务器的 P2P 服务。如果您的计算机是以验证人的身份运行的，我们建议把防火墙设置为仅可以此端口用于远端访问。

如果您的机器 *不* 用作验证节点，那您可考虑同时打开端口 `9944`（用于 RPC Websocket 服务）和端口 `9933`（用于 HTTP 服务）。您可以使用端口 `9944` 通过 **[Polkadot/apps](/polkadotjs_apps_local)** 连接到您的节点。

## 03 下载或安装编译文件 {#03-download-or-build-a-binary}
您可以在 **[GitHub](https://github.com/galacticcouncil/HydraDX-node/releases)** 上下载最新的编译文件。

或者您可以用以下代码自己构建：

```bash
# Install dependencies
$ curl https://getsubstrate.io -sSf | bash -s -- --fast

# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Build the binary
$ cd HydraDX-node/
$ cargo build --release
```

如果您是用以上代码来构建的，您的编译文件就在：
```
target/release/hydra-dx
```

## 04 运行编译文件 {#04-run-the-binary}
您可以通过以下命令来运行编译文件：

```bash
$ {PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator
```

:::note

验证节点需要完整的数据链。如果您之前设置过节点并没有开启 `--validator` 的话，在加入并运行您的验证节点之前需要重置及更新数据链：
```bash
$ {PATH_TO_YOUR_BINARY} purge-chain --chain lerna
```

:::

在运行编译文件前，您需要为您的节点起名，这个名称将会和所有在 Hydradx Snakenet （蛇网）运行的节点一起，在 **[遥测页面](https://telemetry.hydradx.io/#/HydraDX%20Snakenet%20Gen2)** 中列出。

## 05 将程序设置为开机自动运行 {#05-running-with-systemd}
我们建议将 Hydradx 节点加入系统服务，以避免重启后程序不会自动开启。为此，请创建以下文件，并替换 `{VARIABLE}` 中的变量为您的节点名称：

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
建议设置 RestartSec，如果发生崩溃，它会延迟节点的重新启动。延迟重启，为计算机将所有非持久性数据（如共识投票）写入磁盘，预留了时间。如果在程序崩溃后立即重启节点，可能会导致混乱或二次签名，从而触发责罚机制。
:::

在将 Hydradx 设置为系统运行程序后，可以通过以下代码与程序交流：

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

恭喜您，现在您已经完成验证节点搭建并正在运行！

接下来前往 **[开始验证](/start_validating)** ，完成剩下的步骤。

