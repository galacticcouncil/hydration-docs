---
title: Ledger
description: Connect your Ledger hardware wallet
---

import useBaseUrl from '@docusaurus/useBaseUrl';


# Using Ledger on Hydration

Securing your HDX tokens in cold storage while signing transactions on the Hydration network is possible thanks to the Universal Polkadot Ledger App.

---

## 00 Setting Up Ledger

### Prepare Your Ledger Device

1. Download and install **Ledger Live** on your computer. You can learn more about how to get started with Ledger Live [here](https://support.ledger.com/article/4404389503889-zd?redirect=false).
2. Open Ledger Live, connect your Ledger device to **My Ledger**, and ensure your device is running the latest firmware version. If not, **update the firmware** of your Ledger Nano S / Nano S Plus / Nano X.

### Install the Polkadot App

1. Open **Ledger Live** and navigate to the **My Ledger** tab.
2. **Connect** and **unlock** your Ledger device.
3. If prompted, allow **My Ledger** on your device.
4. Search for the **Polkadot App** in the app catalog and click Install.

<div style={{textAlign: 'center'}}>
  <img alt="Nova Wallet Landing Page" src={useBaseUrl('/howto_wallet_ledger/ledgerlive_polkadot.jpg')}
  width="700px" />
</div>

### Create Your Account

1. Open **Ledger Live** and navigate to the **Accounts** tab.
2. Click **Add Account**.
3. Select **Polkadot** and click **Continue**.
4. **Connect** and **unlock** your device, then open the **Polkadot App**.
5. **Ledger Live** will display existing accounts. In the **Accounts** step, tick the account(s) you want to add:
    - Add Existing Accounts
    - Add New Account
    - Accounts Already in Portfolio (cannot be added again)
6. Click **Add Account**. Your Polkadot account is now added to your Ledger Portfolio and is fully compatible with the Hydration network.

<div style={{textAlign: 'center'}}>
  <img alt="Nova Wallet Landing Page" src={useBaseUrl('/howto_wallet_ledger/ledger_polkadotwarning.jpg')}
  width="700px" />
</div>

---

## 01 Using Ledger with Talisman

1. Open the **Talisman Wallet extension**. Click the three horizontal dots at the bottom-right, and select **Add Account**.
    
 <div style={{textAlign: 'center'}}>
  <img alt="Nova Wallet Landing Page" src={useBaseUrl('/howto_wallet_ledger/talisman_extension.jpg')}
  width="400px" />
</div>
    
2. On the Add Account page, select **Connect**.
    
 <div style={{textAlign: 'center'}}>
  <img alt="Nova Wallet Landing Page" src={useBaseUrl('/howto_wallet_ledger/talisman_addaccount.jpg')}
  width="400px" />
</div>
    
3. Click **Connect Ledger**.
4. Select **Polkadot** and the **Polkadot App** to add the account.

 <div style={{textAlign: 'center'}}>
  <img alt="Nova Wallet Landing Page" src={useBaseUrl('/howto_wallet_ledger/talisman_importledger.jpg')}
  width="400px" />
</div>
    
5. Ensure your Ledger is unlocked, open the Polkadot app, and **confirm connection**. If it's the first time you connect your Ledger to Talisman, you will see a popup prompting you to select the Ledger you wish to connect.
    
 <div style={{textAlign: 'center'}}>
  <img alt="Nova Wallet Landing Page" src={useBaseUrl('/howto_wallet_ledger/talisman_ledger.jpg')}
  width="400px" />
</div>
    
6. Click **Continue** and choose the Ledger account(s) to import into Talisman Wallet.
    
  <div style={{textAlign: 'center'}}>
  <img alt="Nova Wallet Landing Page" src={useBaseUrl('/howto_wallet_ledger/talisman_ledgerimport.jpg')}
  width="400px" />
</div>
    

Your Ledger account(s) should now appear in your Talisman Wallet Accounts tab. You can operate from the Universal Polkadot app on any network.

---

## 02 Using Ledger with SubWallet

1. Open the **SubWallet extension** and click on the **Account Name** to open the account selection tab.
    
  <div style={{textAlign: 'center'}}>
  <img alt="Nova Wallet Landing Page" src={useBaseUrl('/howto_wallet_ledger/subwallet_extension.jpg')}
  width="400px" />
</div>
    
2. Choose the **Attach Account icon** at the bottom-right corner.
    
<div style={{textAlign: 'center'}}>
  <img alt="Nova Wallet Landing Page" src={useBaseUrl('/howto_wallet_ledger/subwallet_addaccount.jpg')}
  width="400px" />
</div>
    
3. Select **Connect a Ledger device**.
    
 <div style={{textAlign: 'center'}}>
  <img alt="Nova Wallet Landing Page" src={useBaseUrl('/howto_wallet_ledger/subwallet_connectledger.jpg')}
  width="400px" />
</div>
    
4. Select **Polkadot App** to add the account.
    
 <div style={{textAlign: 'center'}}>
  <img alt="Nova Wallet Landing Page" src={useBaseUrl('/howto_wallet_ledger/subwallet_ledger.jpg')}
  width="400px" />
</div>
    
5. Click **Continue** and choose the Ledger account(s) to import into SubWallet.

Your Ledger account(s) should now appear in your SubWallet Accounts tab. You can operate from the Universal Polkadot app on any network.

---

## 03 Signing Transactions with Ledger

1. Ensure your Ledger device is connected to the wallet you wish to use (Talisman or SubWallet).
2. Go to [app.hydration.net](https://app.hydration.net/).
3. Perform any action (swap, provide liquidity, stake, etc.) and continue to sign the transaction.
4. Your wallet extension will pop up with an option to Approve the transaction. Click this and complete the transaction on your Ledger device.

Congratulations! The transaction is now complete. If you encounter any issues, ensure your Ledger device is connected to the wallet extension.

---

## 04 Need Help?

If you are having any issues with the Polkadot Ledger App, check out the following resources:
1. Polkadot Forum post on [New Polkadot Ledger App](https://forum.polkadot.network/t/new-polkadot-ledger-app/8817).
2. Polkadot Support post on [How to Migrate to the New Ledger Generic App](https://support.polkadot.network/support/solutions/articles/65000188075-talisman-migrate-to-the-new-ledger-universal-app).
3. If your issue is still not resolved you can always contact us on Discord or Telegram.
