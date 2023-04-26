---
id: howto_wallet_parity_signer
title: 使用 Parity Signer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**[Parity Signer](https://www.parity.io/technologies/signer/)**（奇偶校验签名器）是一个移动应用程序，它可以把您的 IOS 或 Android 设备变成 Polkadot、Kusama 和任何其他基于 Substrate 链的专用硬件钱包。它可以让您保持私钥离线，同时仍能使用二维码以一种物理隔离的方式方便地签署交易。

## 设置 Parity Signer
### 在您开始之前：请确保安全
#### 开始清理
在安装 Parity Signer 之前，请确保您的手机纯净，如已使用过，请进行出厂设置，且不要安装除 Parity Signer 之外的任何其他应用程序。

#### 不要插入 SIM 卡
如果可能的话，不要打开 WiFi 或者使用安全的 WiFi 连接，最好不要连接其他设备并使用信誉良好的 VPN 提供商来连接、更新设备并安装 Parity signer 应用程序。

#### 使用强密码
为了获得更强的安全性，请为设备和使用设备创建的帐户设置长密码。

#### 设置新账户
不要使用旧的谷歌 ID 或 Apple ID，创建一个专门用于下载更新以及 Parity Signer 的新 ID。对于 Android 设备，最好不要使用 WiFi 或谷歌帐户。我们建议使用一些操作系统加密您的数据，如 **[Lineage O.S](https://lineageos.org)**，如果需要电子邮件，请创建一个新邮箱。或者，您也可以在 IOS 上创建新的 Apple ID 和电子邮件。

#### 勿用生物识别
避免使用指纹扫描、面部识别系统或短数字码，因为它们很容易被利用。请改用强密码。

#### 禁用所有信号接收功能
使用飞行模式，并确保手动禁用所有类似的功能。如果您使用的是 IOS 设备，请将其关闭，以及在 WiFi 设置中请求自动加入网络和热点的功能。包括:

* 定位服务
* WiFi（如果需要升级或设置，请在更新后立即禁用）
* 蓝牙

#### 退出所有账户
退出 APP 商店，iCloud 和您加入的任何其他帐户。

#### 更新您的设备
如果您使用 WiFi 更新设备，请记得更新后立即禁用 WiFi，并且仅在安全的环境中使用，最好是通过安全加密的 VPN 通道。更新完成后，忘记 WiFi 网络，以确保您不会自动重新加入。

### 安装 Parity Signer
从官方应用商店为您的设备（IOS / Android）安装 Parity Signer。确保您正在下载的应用程序，是由 Parity Technologies 发布的。

### 创建一个新账户
按以下步骤创建新账户。

#### 01 添加种子短语
打开 Parity Signer 应用程序，选择 `New seed`。
<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/parity_signer_seed.jpg')} width="350px" />
</div>

#### 02 备份您的恢复短语
应用程序将显示您的种子短语。把它写下来，放在安全的地方。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/parity_signer_seed_2.jpg')} width="350px" />
</div>

完成这些之后，您就可以开始了！您可以在 Parity Signer 中使用您的手机密码或身份验证方法（指纹/面部识别）。

:::danger
请确保安全！

任何拥有您种子短语的人，都可以访问您的资金，并且对于窃取您种子短语的人没有追索权。

为保护您的种子短语，可参考以下建议：
* 不要把您的种子短语做成数字文件保存在任何设备上。
* 总是选择用纸和笔记录您的种子短语。
* 把您的种子短语放在安全的地方。
* 不要向任何人提供您的种子短语，包括客服。
:::

### 连接到 Polkadot.js/apps
任何时候，您都可以在 polkadot.js 浏览器扩展程序中添加您的 Parity Signer 帐户，以方便您在 **[polkadot.js 应用程序账户页面](https://polkadot.js.org/apps/#/accounts)** 查看余额及签署事务。

#### 在 Polkadot.js 应用程序上
要添加您的帐户，请打开 polkadot.js 浏览器扩展程序，单击 `+` 并选择 `Attach external QR-signer account`。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/parity_signer_polkajs_attach.jpg')} width="350px" />
</div>

#### 在 Parity Signer 上
  * 打开底部菜单的 `Keys` 选项卡；
  * 从链旁边的下拉菜单中选择您将使用的网络；
  * 选择您需要的帐户或子帐户；
  * 您会看到一个二维码，您需要用您的设备摄像头扫描。

### 添加 HydraDX 链
要使用 Parity Signer，首先需要向 Parity Signer 添加新链。如果您只想对 Polkadot 或 Kusama 使用 Parity，可跳过此步，继续更新元数据。要添加一条新链，您需扫描带有该链基本信息的二维码。

#### 01 获取链规格
桌面导航至 **https://nova-wallet.github.io/metadata-portal/** ，选择 HydraDX 作为所需的链。然后，点击 `Chain Specs`。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/parity_signer_add_chain.jpg')} />
</div>

#### 02 添加规格
在您的 Parity Signer 上，点击 `Scanner`（扫描器），扫描二维码并点击 `Add new chain`（添加新链）。

## 使用 Parity Signer
:::warning
一定要确保您扫描的二维码，是由可信的验证人签署的。
:::

### 签署交易
为便于使用，我们建议将其添加到 polkadot.js 扩展中。直到更多的链可以直接使用 Parity Signer，这将是桌面应用程序使用它的最佳方式。

当使用 Parity Signer 签署交易时，polkadot.js 应用程序将显示二维码。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/parity_signer_sign_1.jpg')} width="350px" />
</div>

使用 Parity Signer 扫描二维码，然后点击 `Unlock key and sign` （解锁键并签署)。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/parity_signer_sign_2.jpg')} width="350px" />
</div>

您的 Parity Signer 现在将显示一个二维码。要完成交易的签署，切换回 polkadot.js 应用程序，然后点击 `Scan signature via camera` （通过摄像头扫描签署）。

### 更新元数据
要使用 Parity Signer，您需用最新元数据解码 Parity Signer 中的事务。您可以通过扫描包含此数据的多重部分二维码，来获取元数据，允许 Parity Signer 解码实际交易，并在您签署前正确显示它。这一步，类似于更新分类帐应用程序。

#### 01 获取元数据
桌面导航至 **https://nova-wallet.github.io/metadata-portal/** 并选择所需的链。之后，点击 `Metadata`（元数据）。

<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/parity_signer_metadata.jpg')} />
</div>

#### 02 更新
在您的 Parity Signer 上，点击 `Scanner`（扫描器），扫描二维码更新元数据。
