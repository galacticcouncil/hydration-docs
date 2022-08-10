---
id: claim
title: 申领您的 HDX
---

import useBaseUrl from '@docusaurus/useBaseUrl';

您可以使用 **[Balancer LBP](https://hydradxcn.substack.com/p/lbpgg)** 期间获得的 xHDX 令牌（ERC-20）申领您的 HDX 。 

## 前提条件 {#prequisites}

想要申领您的 HDX，需满足两个前提条件。首先，需要在浏览器上安装 **[Polkadot.js 扩展程序](https://polkadot.js.org/extension/)** ，该扩展程序将用于创建您的 HDX 钱包。其次，需要访问存储您的 xHDX 令牌且支持 ERC-20 令牌消息签名的钱包（如 Metamask ）。

如果您的 xHDX 令牌存储在 Coinbase Wallet 或 Trust Wallet 中，则需要使用以下其中一个方法申领 HDX ，因为它们不支持消息签名：
* Metamask：您可以使用 Metamask 扩展程序，并使用恢复种子短语（*助记词* ）导入您的钱包。
* MEW (MyEtherWallet)：您可以通过导入恢复种子短语(*助记词* ) 或使用 WalletLink 连接选项来使用 MEW 。可从 **[MEW 钱包访问页面](https://www.myetherwallet.com/access-my-wallet)** 访问这两个选项。如果您使用的是 Coinbase 钱包，则可以使用 WalletLink ，该钱包可以找到 Coinbase 的设置。

## 申领过程 {#claim-process}

满足上述前提条件后，您可以导航到 **[HydraDX 申领程序](https://claim.hydradx.io)** ，进入申领过程。

在申领过程中，您将使用 xHDX 令牌（ERC-20）申领属于您的 HDX 令牌份额。

### 00 授权 {#00-authorize}

HydraDX 申领程序，需要 Polkadot.js 扩展程序的授权。

:::warning

请确保您不是钓鱼攻击的受害者，注意授权弹出：申领程序应自我标识为**CLAIM.HYDRADX.IO**，且请求来自于 **https://claim.hydradx.io** 。

:::

<img alt="authorize" src={useBaseUrl('/claim/authorize.jpg')} />

授权后，会提示您更新 Polkadot.js 扩展程序的元数据。使用 Polkadot.js 创建一个特定于 HydraDX 的地址，这是完成申领过程所必需的。

<img alt="authorize" src={useBaseUrl('/claim/metadata.jpg')} />

### 01 选择您的 ETH 地址 {#01-select-your-eth-address}

在这一步，系统将要求选择持有您 xHDX 令牌的帐户。可通过连接到支持 ERC-20 令牌（如 Metamask）的钱包，或在输入框手动输入 ETH 地址完成（在此情况下，稍后需手动签名该消息）。

确认 ETH 地址后，您应该能看到可申领的 HDX 令牌余额，包括在 Balancer 上获得 xHDX 所花费的 **[Gas 退款](https://hydradxcn.substack.com/p/sczltp)** （手续费，含交易失败的）。

:::note

如果您在 Balancer 官方池以外的其它地方（如 Uniswap）获得了 xHDX，或已将 xHDX 令牌从原始购买钱包中移出，则无资格获得 Gas 退款。

:::

<img alt="authorize" src={useBaseUrl('/claim/claim-01.jpg')} />

### 02 创建并选择一个 HDX 地址 {#02-create-and-select-an-hdx-address}

在这一步，将要求您选择 HDX 地址。

要创建一个新的 HDX 地址，请打开 Polkadot.js 扩展程序，单击 + 号创建一个新帐户。在帐户创建的第一步，您会看到由 12 个英语单词组成、用于恢复帐户的助记词。将助记词保存在安全的地方后，点击 *Next step* （下一步）。在这里，选择 **HydraDX Snakenet** （蛇网）来切换 **NETWORK** （网络）。输入您的帐户名称和密码，完成帐户创建。

<img alt="authorize" src={useBaseUrl('/claim/create-account.png')} />

:::warning 

确保通过安全的方式保存备份您的助记词，并且永远不要分享给任何人。助记词，是恢复账户的唯一方法，丢失或泄漏它可能会造成加密资产的损失。请注意，当前所有的 HDX 令牌均被锁定，主网启动前，您需要确保拥有对钱包的访问权限。如无法访问 HDX 钱包，那您也就丢失了所拥有的 HDX 。

:::

创建 HDX 帐户后，您应能在 HydraDX 申领程序中选择它。之后，该应用程序应为您提供用于申领过程的 ETH 和 HDX 地址概况。单击 *Next* （下一步）继续对消息签名。

<img alt="authorize" src={useBaseUrl('/claim/claim-02.jpg')} />

### 03 签名 {#03-sign}

在这一步，将为您提供用于签名消息的选项，以使用 xHDX 令牌申领 HDX 。

:::note

请注意，在此步骤中，您将看到 HDX 地址的 **公钥** ，而不是上一步和 Polkadot.js 扩展程序中显示的该地址的可读格式形式的地址（更多详细信息，请参阅 **[ss58 docs](https://polkadot.js.org/docs/keyring/start/ss58)** ）。如果您已严格按照上述步骤进行操作，则无需担心，可以安全地对消息进行签名。我们还将验证，您最后一步用于签署申领交易的 HDX 帐户与接收所申领 HDX 的帐户是否相对应。

:::

根据您在第一步做的选择，有两个方法可对消息进行签名，以在申领过程中使用 xHDX 令牌：

* 如果您用的是 **Metamask** , 则在单击 *Sign* （签名）按钮后，将由 Metamask 提示您对信息进行签名。请按照 Metamask 中的说明进行操作。 

* 如果您手动输入了 ETH 地址，则需通过外部钱包对消息签名，该外部钱包保留了您 xHDX 令牌的私钥。签名消息后，将签名（以 *0x* 开头）复制粘贴到 HydraDX 申领程序的相应对话框中。

<img alt="authorize" src={useBaseUrl('/claim/claim-03.jpg')} />

### 04 申领 {#04-claim}

使用持有 xHDX 令牌的钱包签名消息后，Polkadot.js 扩展程序应自动打开，并将要求签署交易，以将 HDX 申领到您的帐户中。输入您的 HDX 帐户密码，然后点击 *Sign the transaction*（签署交易）。

<img alt="authorize" src={useBaseUrl('/claim/claim-sign.jpg')} />

此时您已完成申领过程，从而正式成为 HDX 的所有者。

您可以使用连接到 HydraDX Snakenet 网络的 **[Polkadot/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/accounts)** 检查令牌数额
