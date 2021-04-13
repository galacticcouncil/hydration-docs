---
id: claim
title: 申领您的 HDX
---

import useBaseUrl from '@docusaurus/useBaseUrl';

您可以使用在 [Balancer LBP](https://hydradx.substack.com/p/lbp-announcement) 期间获得的 xHDX 令牌（ERC-20）申领您的 HDX 。 

:::note

没有 xHDX 令牌的你仍想获取一些 HDX 令牌么？感谢您对 HydraDX 的关注，但是目前无法购买任何 HDX 令牌——主网上线前 HDX 的转账路径将被冻结。但是，随着主网上线临近，我们将启动激励性社区计划，这些计划可能会给您带来一些早期的 HDX 令牌奖励。如果您感兴趣，请 [订阅我们的新闻通讯](https://hydradx.substack.com) 并加入我们的 Discord 服务器，关注最新发布的消息。

:::

## 基础条件 {#prequisites}

想要申领您的 HDX，需要满足两个基础条件。首先，您需要在浏览器上安装 [Polkadot.js 扩展程序](https://polkadot.js.org/extension/)，该扩展程序将用于创建您的 HDX 钱包。其次，您需要访问 xHDX 令牌，这些令牌应存储在支持 ERC-20 令牌消息签名的钱包中（例如 Metamask）。

如果您的 xHDX 令牌存储在 Coinbase Wallet 或 Trust Wallet 中，则需要使用以下方法之一来申领您的 HDX ，因为这些钱包不支持消息签名：
* Metamask: 您可以使用 Metamask 扩展程序，并使用恢复种子短语（助记词）导入您的钱包。
* MEW (MyEtherWallet): 您也可以通过导入恢复种子短语(*助记词*) 或使用 WalletLink 连接选项来使用 MEW 。可以从 [MEW 钱包访问页面](https://www.myetherwallet.com/access-my-wallet) 访问这两个选项。如果您使用的是 Coinbase 钱包，则可以使用 WalletLink ，该钱包可以找到 Coinbase 钱包的设置。

## 申领流程 {#claim-process}

在满足上述基础条件后，您可以导航到 [HydraDX 申领程序](https://claim.hydradx.io) ，进入申领流程。

在申领过程中，您将使用您的 xHDX 令牌（ERC-20）申领对等数量的 HDX 令牌。

### 00 授权 {#00-authorize}

HydraDX 申领程序，需要 Polkadot.js 扩展程序的授权。

:::warning

确保您并未处于可能存在钓鱼攻击的网络环境中，并请您留意授权弹出窗口：应用程序应将自己标识为**CLAIM.HYDRADX.IO**，并且请求应来自于 **https://claim.hydradx.io** 。

:::

<img alt="authorize" src={useBaseUrl('/claim/authorize.jpg')} />

授权后，将提示您更新 Polkadot.js 扩展程序的元数据。这将使 Polkadot.js 创建一个特定于 HydraDX 的地址，这是完成申领流程所必需的环节。

<img alt="authorize" src={useBaseUrl('/claim/metadata.jpg')} />

### 01 选择您的ETH地址 {#01-select-your-eth-address}

在申领过程的第一步，系统将要求您选择持有 xHDX 令牌的帐户。这可以通过连接到支持 ERC-20 令牌（例如 Metamask）的钱包，或通过输入框手动输入 ETH 地址来完成（在这种情况下，您稍后需要手动签名该消息）。

确认您的 ETH 地址后，您应该看到可以申领的HDX令牌余额，包括在 Balancer 用于购买 xHDX 所花费的 [随申领退还的 Gas](https://hydradx.substack.com/p/first-governance-vote)（手续费）。交易失败所发生的 Gas，也可（一并或单独）申请索赔。

:::note

如果您在官方 Balancer 池以外的其他地方（例如 Uniswap）获得了 xHDX，或者您已将 xHDX 令牌从原始购买钱包中移出，则您无资格获得 Gas 退款。

:::

<img alt="authorize" src={useBaseUrl('/claim/claim-01.jpg')} />

### 02 创建并选择一个HDX地址 {#02-create-and-select-an-hdx-address}

在第二步中，将要求您选择您的 HDX 地址。

要创建一个新的 HDX 地址，请打开 Polkadot.js 扩展程序，然后单击 + 号以创建一个新帐户。在帐户创建的第一步中，您会看到由 12 个英语单词组成、可用于恢复您帐户的助记词。将助记词保存在安全的地方后，点击 *Next step* 。在这里，您应该通过选择 **HydraDX Snakenet** 选项来切换 **Network** 。输入您的帐户名称和密码，然后完成帐户创建。

<img alt="authorize" src={useBaseUrl('/claim/create-account.png')} />

:::warning 

确保您已通过安全的方式保存备份您的助记词，并且永远不要分享给任何人。如果您丢失或泄漏了账户，使用助记词恢复账户是唯一的方法，否则可能会造成您加密资产的损失。请注意，由于当前所有 HDX 令牌均被锁定，因此在主网启动之前，您需要确保拥有对该钱包的访问权限。如果您无法访问 HDX 钱包，那么您也就丢失了所拥有的 HDX 。

:::

创建 HDX 帐户后，您应该可以在 HydraDX 申领程序中选择它。之后，该应用程序应为您提供用于申领过程的 ETH 和 HDX 地址的概况。单击 *Next* 继续对消息签名。

<img alt="authorize" src={useBaseUrl('/claim/claim-02.jpg')} />

### 03 签名 {#03-sign}

在使用 HydraDX 申领程序进行申领的第三步中，将为您提供用于签名消息的选项，以使用 xHDX 令牌申领 HDX 。

:::note

请注意，在此步骤中，您将看到 HDX 地址的**公钥**，而不是上一步和 Polkadot.js 扩展程序中显示的该地址的可读格式形式的地址（有关更多详细信息，请参阅 [ss58 docs](https://polkadot.js.org/docs/keyring/start/ss58) ）。如果您已按照上述所有步骤进行操作，则无需担心，可以安全地对消息进行签名。我们还将验证您在最后一步用于签署申领交易的 HDX 帐户是否与接收所申领的 HDX 的帐户相对应。

:::

根据您在第一步中所做的选择，您有两个方法可以对消息进行签名以在申领过程中使用 xHDX 令牌：

* 如果您用的是 **Metamask** , 则在单击 *Sign* （即签名）按钮后，将由 Metamask 提示您对信息进行签名。请按照 Metamask 中的说明进行操作。 

* 如果您手动输入了 ETH 地址，则需要通过外部钱包对消息签名，该外部钱包保留了您 xHDX 令牌的私钥。签名消息后，将签名（以 *0x* 开头）复制粘贴到 HydraDX 申领程序的相应对话框中。

<img alt="authorize" src={useBaseUrl('/claim/claim-03.jpg')} />

### 04 申领 {#04-claim}

使用持有 xHDX 令牌的钱包在信息上签名后，Polkadot.js 扩展程序应自动打开，并将要求您签署交易以将 HDX 申领到您的帐户中。输入您的 HDX 帐户密码，然后点击 *Sign the transaction*（签署交易）。

<img alt="authorize" src={useBaseUrl('/claim/claim-sign.jpg')} />

此时您已经完成了申领过程，已正式成为 HDX 令牌所有者。

您可以使用连接到 HydraDX Snakenet 网络的 [Polkadot/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts) 检查令牌数额。请注意，您无法直接在 Polkadot.js 扩展程序中看到您的 HDX 令牌数额。

### 05 接下来做什么? {#05-whats-next}

在完成申领流程后，令牌将在您的钱包中保持锁定状态直至主网启动。 

另一方面，xHDX 令牌（用于申领 HDX ）将永远锁定在您的 ERC-20 钱包中，这意味着您可以将其隐藏（或者您可以将其视为 HDX 令牌早期持有者的徽章，保持可见）。

您是否想使用您的 HDX 令牌并帮助提高 HydraDX 网络的安全性？那么您可以参与我们的激励性测试网——**Snakenet**（蛇网），将其质押。如果您有兴趣，那么请您熟悉下 [质押](/staking) 过程，然后再决定以 [验证人](/start_validating) 或 [提名人](/start_nominating) 的身份参加。
