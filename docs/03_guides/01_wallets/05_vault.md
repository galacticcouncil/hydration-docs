---
title: Polkadot Vault
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Using Polkadot Vault With Hydration

[Polkadot Vault](https://www.parity.io/technologies/signer/) (formerly Parity Signer) is a mobile app which turns your iOS or Android device into a dedicated hardware wallet for Polkadot, Kusama, and any other Substrate-based chain. It allows you to keep your private keys offline while still being able to conveniently sign transactions in an air-gapped way using QR codes.

The Vault app is not technically a wallet, as it does not allow to transfer funds. It is more of a key-chain tool that will enable you the create, manage, and restore accounts. The app allows you to securely sign [extrinsics](https://wiki.polkadot.network/docs/learn-transactions) via QR codes without exposing your private keys to the internet.

## Before You Start: Stay Safe

- **Start clean**: Before installing Polkadot Vault, make sure that your phone is in a clean state. If it has been used, perform a factory reset and do not install any other apps besides Polkadot Vault.
- **Do not insert a SIM card**: If possible, don’t turn on WiFi. Or use a secure WiFi connection, preferably with no other connected devices and a reputable VPN provider to connect, update the device, and install the Parity signer app.
- **Use strong passwords**: For robust security, use long passwords for the device and the accounts you need to create to use it.
- **Setup brand new account**: Don’t use your old Google or Apple IDs. Create a new one specifically for this purpose, which will be used to only download updates and Polkadot Vault. In the case of an Android device, it is better to not use WiFi or a Google account at all. We recommend using some sort of OS that encrypts your data like [Lineage O.S.](https://lineageos.org/) If an email is required, create a new one. Alternatively, you can create new Apple ID and email on iOS.
- **No Biometrics**: Avoid fingerprint scanners, face ID, or short numeric codes because they are exploitable. Use a strong password instead.
- **Disable all signal-receiving features**: Use airplane mode and make sure to disable all of these features manually. If you are on an iOS device, turn it off and ask to auto-join networks and hotspots in the WiFi settings. Including:
    - Location services
    - WiFi (if required to upgrade or setup, disable right after the update)
    - Bluetooth
- **Logout from all accounts**: Log out from App stores, iCloud, and any other accounts you’ve joined.
- **Updating your device**: If you are using WiFi to update your device, remember to disable it right after the update and use it only in a secure environment, preferably through a secure and encrypted VPN channel. After the update is complete, forget the WiFi network to make sure you don't automatically rejoin.

## Create a New Polkadot Vault Account for Hydration

The following steps need to be carried out on your Polkadot Vault device.

- **Install Polkadot Vault**: First you must install the Polkadot Vault app on the phone you wish to use as your vault. After installation, turn on airplane mode.
    
<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/polkadot_vault_iOS.jpg')} width="350px" />
</div>
    
- **Set Up Network:** Click **Set Up Networks** and add Hydration as a network.
    
<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/polkadot_vault_network.jpg')} width="350px" />
</div>
    
- **Add key set**: Open the Polkadot Vault application. Select **Add Key Set.** Input the name for your new key set.
    
<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/polkadot_vault_keyset.jpg')} width="350px" />
</div>
    
- **Store your seed phrase**: Make a copy of your mnemonic passphrase ****and select Next. Confirm that you have written down your secret recovery phrase and that you understand that if you lose your secret phrase your funds will be lost forever.
- **Select Hydration**: From the networks list, select the networks that you would like to create keys for (you can add more later) and select **Done**. In this case, select Hydration.
- Polkadot Vault will now create keys for you that have the following derivation path format:
    - //polkadot for Polkadot, //hydration for Hydration, etc.

## Import Existing Polkadot Vault Account

The following steps need to be carried out on your Polkadot Vault device.

- Open the Polkadot Vault application.
- Select Recover Key Set.
- Input the name for your key set.
- Input your secret recovery phrase and then select next.
- Select the networks that you would like to import keys for (you can add more alter) and select Done.
- Polkadot Vault will now create keys for you that have the following derivation path format:
    - //polkadot for Polkadot, //kusama for Kusama, etc.

## Add Polkadot Vault Account to Wallets

Polkadot Vault is used in combination with the leading wallets in the ecosystem. Below are detailed guides created by the wallet teams to help you manage your PV accounts.

- [How to Add Polkadot Vault to Talisman](https://docs.talisman.xyz/talisman/start/importing-external-wallets/import-from-polkadot-vault)
- [How to Add Polkadot Vault to Nova Wallet](https://docs.novawallet.io/nova-wallet-wiki/wallet-management/hardware-wallets/polkadot-vault/add-polkadot-vault-account-to-nova-wallet)
- [How to Add Polkadot Vault to SubWallet](https://docs.subwallet.app/main/mobile-app-user-guide/account-management/attach-a-polkadot-vault-previously-parity-signer-account)

Optionally, you can add your Polkadot Vault account to the Polkadot.JS browser extension which will allow you to view your balances on the [Polkadot.js/apps accounts page](https://polkadot.js.org/apps/#/accounts) and to sign transactions more easily.

- On Polkadot.JS extension: Click on + and select Attach external QR-signer account.
- On Polkadot Vault: Open Keys tab in the bottom menu;
    - Select the network you will be using from the dropdown menu next to chain;
    - Select your desired account or sub-account;
    - You will see a QR code which you need to scan with your device camera.

## Update Chain Metadata in Polkadot Vault

Due to the fact that your **Polkadot Vault Device** is always offline and is air-gapped, there is a unique system in which you must partake to update the chain metadata so that your transactions are valid. You can use the [Novasama Technologies Metadata Portal](https://metadata.novasama.io/#/polkadot) to find QR codes which will provide your **Polkadot Vault Device** with the information required to update the chain metadata.

The following steps need to be carried out on your **Polkadot Vault Device**.

- Navigate to the [Novasama Technologies Metadata Portal](https://metadata.novasama.io/#/polkadot) . (Note: this should be done on a device which is not your Polkadot Vault device).
    
<div style={{textAlign: 'center'}}>
  <img alt="metadata" src={useBaseUrl('/howto_wallets/polkadot_vault_hydration.jpg')} width="350px" />
</div>
    
- On the metadata portal, select the blockchain that you wish to update the metadata for.
- If you are adding a chain for the first time, select the Chain Specs tab at the top of the metadata portal screen.
- Using your Polkadot Vault device select the QR code scanner.
- Scan the Chain specs QR code with your Polkadot Vault device
- Review the verifier certificate and then select Approve at the bottom of the screen on your Polkadot Vault device.
- Select the Metadata tab at the top of the metadata portal screen.
- Using your Polkadot Vault device select the QR code scanner.
- Scan the Metadata QR code with your Polkadot Vault device (Note: this can take a few minutes to complete).
- Review the Verifier Certificate and select Approve.

## Add Public Key for a Network

In Polkadot Vault after you add the chain specs and metadata for a network, you then need to add your Public Key for that network so that you can conduct transactions.

The following steps need to be carried out on your Polkadot Vault device.

- Ensure that you have added the desired network chain specs and metadata.
- On your Polkadot Vault device select the + icon at the top right of the screen.
- Select the network that you would like to add a key for (note: if you cannot see your desired network then you have not correctly added the chain specs and metadata).
- Select Create Key.

## Note on Smartphone Compatibility

Although the Vault app is available for old smartphones, different versions will be installed according to the phone's hardware.

For example, smartphones like iPhone 6 will install Parity Signer (the old brand name of the Vault app) with limited capabilities. There will be no log or warning if the phone was connected to the internet while not using the app. Also, no metadata updates are possible, and no option to add new networks.

This would not be as secure as the latest version of the app. We would recommend that you use smartphones compatible with the latest Polkadot Vault app.