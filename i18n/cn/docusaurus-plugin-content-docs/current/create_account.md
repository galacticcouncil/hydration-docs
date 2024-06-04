---
id: create_account
title: 创建 HDX 新账户
---

import useBaseUrl from '@docusaurus/useBaseUrl';

创建 HDX 新帐户的过程包括三个简单的步骤。

## 01 安装 Polkadot.js {#01-install-polkadot-js}

为了创建和管理您的 HDX 钱包，您需要安装 **[Polkadot.js 浏览器扩展程序](https://polkadot.js.org/extension/)**。

## 02 升级 metadata（元数据） {#02-upgrade-metadata}

安装 Polkadot.js 浏览器扩展程序后，您应确保它已更新为最新的链元数据。 为此，可访问以下链接并在出现提示时更新元数据：
**https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/settings/metadata**

## 03 创建您的 HDX 账户 {#03-create-hdx-account}

要创建 HDX 新地址，请打开 Polkadot.js 浏览器扩展程序并单击 ` + ` > `Create new account`（创建新账户）。

您将看到一个 12 个短语的助记词，可用于恢复您的帐户。 确保在安全的位置备份您的种子短语。 点击 `Next step` （下一步）并填写以下信息：

* **Network**（网络）: 请选择 `Hydration`
* **Descriptive name of the account**（账户的描述性名称）
* **Password**（账户密码）

单击 `Add the account with the generated seed`（使用生成的种子添加账户）后，将创建您的帐户。

<div style={{textAlign: 'center'}}>
  <img alt="create-account" src={useBaseUrl('/create-account/create-account.png')} width="350px" />
</div>

:::warning 

确保通过将其存储在安全位置来备份您的恢复种子短语。 永远不要与任何人分享您的种子短语。 种子短语可用于访问您的帐户。 如果丢失或泄露，您可能还会丢失帐户中存储的所有 HDX。 请注意，在主网启动之前，所有 HDX 余额都会被锁定，因此您需要确保在此之前保持持有令牌的帐户安全。

:::
