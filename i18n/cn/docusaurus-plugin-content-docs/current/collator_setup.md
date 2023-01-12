---
id: collator_setup
title: 搭建整理器节点
---

import useBaseUrl from '@docusaurus/useBaseUrl';

这是一个启动并运行 HydraDX 整理器的分步操作指南。在本指南中，我们使用 Ubuntu 20.04 LTS。

## 所需要的技术条件 {#technical-specifications}

运行 HydraDX 整理器节点至少需要满足以下技术要求：

* 操作系统：Ubuntu 20.04
* CPU: Intel Core i7-7700K @ 4.5Ghz (或同等单核性能)
* 内存: 64GB RAM
* 存储：容量至少为 200GB 的 NVMe SSD（数据占用空间会随着时间增长）

:::note

这些是经团队验证过的最低技术要求。想要确保您的机器有足够的资源来运行节点？请运行 **[基本性能测试](/performance_benchmark)** 以找出答案。

:::

## 创建技术 `hydra` 用户并将其添加到 Sudoers

```bash
sudo adduser hydra
sudo usermod -aG sudo hydra
su - hydra
```

## 下载并配置 `hydradx` 二进制文件

选择一个 12.x 版本，我们使用我们资产存储库中的 `v12.1.0` ：

```bash
wget https://github.com/galacticcouncil/HydraDX-node/releases/download/v12.1.0/hydradx
sudo mv hydradx /usr/local/bin
sudo chmod +x /usr/local/bin/hydradx
sudo chown hydra:hydra /usr/local/bin/hydradx

```

## 命令您的整理器运行

最好是使用 `systemctl` 将您的整理器作为 `service`。 为此，在 `/etc/systemd/system/hydradx-collator.service` 中创建一个名为 `hydradx-collator.service` 的文件。

```bash
sudo vim /etc/systemd/system/hydradx-collator.service
```

然后粘贴以下内容：

```bash
[Unit]
Description=hydradx validator
[Service]
Type=exec
User=hydra
ExecStart=/usr/local/bin/hydradx \
    --name YOUR_COLLATOR_NAME \
    --prometheus-external \
    --base-path /var/lib/hydradx \
    --collator \
    -- \
    --execution wasm \
    --telemetry-url "wss://telemetry.hydradx.io:9000/submit/ 0" \
    --base-path /var/lib/hydradx
    
Restart=always
RestartSec=120
[Install]
WantedBy=multi-user.target
```

在开始您的节点之前，让我们创建基本路径文件夹并赋予它必要的权限和所有权：

```bash
mkdir /var/lib/hydradx
chown hydra:hydra /var/lib/hydradx
```

:::caution
使用 `df -h` 命令确保您为 `base-path` 留有足够的空间。
:::

请注意，这 `--prometheus-external` 是可选的，但我们强烈建议您使用它，以便您能够导出 prometheus 指标并通过 Grafana 监控节点的健康状况。有关监控的更多详细信息，请访问 **[此链接](https://docs.hydradx.io/node_monitoring/)**。

如果您需要同时监控 `parachain` 和`relaychain` 指标，`--prometheus-external` 则应在这两个部分中设置选项。您还需要为中继链部分设置一个单独的端口，如下所示：`--prometheus-port YOUR_CUSTOM_PORT_NUMBER` 。

根据您的设置，您可能还想覆盖某些参数，如 websocket、rpc 或您的节点 p2p 端口。有关可用选项的更多信息，请使用 `hydradx --help` 。

保存文件后，运行以下命令启动节点：

```bash
sudo systemctl enable hydradx-collator
sudo systemctl start hydradx-collator.service
```

您的节点现在应该已启动并正在运行。确保您的 `hydra` 用户具有访问您 `base-path` 和密钥文件的必要权限。
如果您需要对正在运行的服务进行故障排除，可以使用带有拖尾选项的 `journalctl` 命令：`-f` ：

```bash
journalctl -fu hydradx-collator
```

## 生成您的密钥

为了让您的节点生成密钥，请运行以下命令：

```bash
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

完成后，您将看到似于以下内容的输出：

```json
{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}
```

## 设置您的密钥

要将生成的会话密钥与您的控制器帐户相关联，请导航到 Polkadot 平行链 HydraDX 上的 **[Polkadot/apps](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics)** 中的以下菜单项：*Developer* > *Extrinsics* 。

填写字段:

- *using selected account*（使用所选帐户）：选择您的控制器帐户；
- *submit the following extrinsic*（提交以下外部内容）：选择 `session` 左侧和`setKeys` 右侧；
- *keys*（密钥）：输入您刚刚生成的会话密钥；
- *proof*（证明）: `0`;

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/collator-node/session-keys.png')} />
</div>  

## 下一步是什么

确保您的节点已完全同步。一旦完成，请在专用的 Discord 频道中告诉我们（仅当您已被预选为整理器时）。
