---
id: claim
title: HDX beanspruchen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sie können ihre HDX Token aus der xHDX ERC-20 Token-Repräsentation beanspruchen, die Sie während des [Balancer LBP](https://hydradx.substack.com/p/lbp-announcement) erworben haben.

:::note
Sie besitzen keine xHDX Token aber möchten dennoch HDX Token erhalten? Vielen Dank für das Interesse aber momentan ist es nicht möglich HDX Token zu kaufen - Übertragungen von HDX sind bis zum Start des Mainnnets einngefroren. Auf dem Weg dorthin wird es jedoch die Möglichkeit geben im Testnet durch Teilnahme am Community-Programm HDX Token zu verdienen. Falls Sie darann interessiert sind [melden Sie sich für usneren Newsletter an](https://hydradx.substack.com) und treten Sie unserem Discord-Server bei um auf dem Laufenden zu bleiben.
:::

## Vorbereitung {#prequisites}

Es gibt zwei Voraussetzungen die für das Starten des Claim-Prozesses erfüllt sein müssen. Zum Einen benötigen Sie die [Polkadot.js Browsererweiterung](https://polkadot.js.org/extension/), mit welcher wir später das HDX Wallet erstellen werden und zum Anderen benötigen Sie Zugriff auf Ihr Wallet, in dem die xHDX Token aufbewahrt werden. Das Wallet muss in der Lage sein eine Nachricht signieren zu können.

Sollten Sie ihre xHDX Token in einem Coinbase Wallet oder Trust Wallet aufbewahren müssen Sie einen weiteren Schritt in der Vorbereitung erledigen, da diese Wallets nicht in der Lage sind eine Nachricht zu signieren:
* Metamask: Sie können die Metamask Browsererweiterung benutzen und das Wallet über die Recovery Seed Phrase importieren.
* MEW (MyEtherWallet): Sie können auch MEW benutzen und Ihr Wallet entweder mit der Recovery Seed Phrase(*Mnemonic Phrase*) importieren oder aber Ihr Wallet mit MEW verbinden. Auf beide Optionen können Sie über die [MEW wallet access Seite](https://www.myetherwallet.com/access-my-wallet) zugreifen. Wenn Sie Coinbase Wallet nutzen können Sie die WalletLink Funktion wählen, die Sie in den Einstellungen der Coinbase Wallet App finden.

## Beanspruchungsprozess {#claim-process}

Wenn alle Vorbereitungen abgeschlossen sind können Sie die [HydraDX Claim App](https://claim.hydradx.io) besuchen und den Prozess starten.

Während des Claim-Prozesses werden Sie ihre xHDX Token (ERC-20) verwenden um Ihre HDX Token zu erhalten.

### 00 Authorisierung {#00-authorize}

Sie werden daraufhin von der polkadot.js Erweiterung aufgefordert die Benutzung der Beanspruchungsseite zu authorisieren. 

:::warning
Stellen Sie sicher, dass die Aufforderung CLAIM.HYDRADX.IO anzeigt und  https://claim.hydradx.io, andererseits könnten Sie einem Phishing Angriff zum Opfer fallen!
:::

<img alt="authorize" src={useBaseUrl('/claim/authorize.jpg')} />


Nach der Authorisierung, werden Sie aufgefordert ihre Metadaten für die polkadot.js Erweiterung zu aktualisieren. Dies bedeutet, dass die Polkadot.js Erweiterung dazu in der Lage sein wird HydraDX spezifische Adressen zu erstellen, welche notwendig sind um den Beanspruchungsprozess in der Benutzeroberfläche zu vervollständigen.

Nachdem Sie Ihre Ethereum-Adresse eingegeben haben sollten Sie die Menge an HDX Token sehen, die Sie beanspruchen können und die [erstatteten Gas-Gebühren](https://hydradx.substack.com/p/first-governance-vote), die Sie während des Kaufvorgangs der xHDX Token bei Balancer bezahlt haben.

:::note
Sie sind nicht zur Erstattung der Gas-Gebühren berechtigt, falls Sie ihre xHDX an einem anderen Ort als dem offiziellen Balancer Pool (wie bspw. Uniswap) gekauft haben oder die xHDX in ein anderes Wallet deponiert haben als das mit dem Sie die Token gekauft haben.
:::

<img alt="authorize" src={useBaseUrl('/claim/metadata.jpg')} />

### 01 ETH Adresse auswählen {#01-select-your-eth-address}

Im ersten Schritt, müssen Sie einen Account auswählen von dem Sie die Token beanspruchen wollen. Dies geschieht entweder durch die Verbindung zu Metamask oder indem Sie Ihre Adresse in das Feld eingeben. Im Falle der zweiten Variante müssen Sie später die Nachricht manuell signieren. 

<img alt="authorize" src={useBaseUrl('/claim/claim-01.jpg')} />

### 02 HDX Adresse erstellen und auswählen {#02-create-and-select-an-hdx-address}

Im zweiten Schritt müssen Sie ihre HDX Adresse auswählen.

Um eine neue HDX Adresse zu erstellen öffnen Sie die Polkadot.js Browserextension und klicken das + Symbol.
Im ersten Schritt der Accounterstellung sehen Sie ihre Mnemonic Phrase, welche aus 12 Worten besteht und dazu verwendet werden kann den Account später wiederherzustellen.
Nachdem Sie ihre Seed Phrase an einem sicheren Ort gespeichert haben klicken Sie auf *Next step*. 
Hier müssen Sie das **Network** auf **HydraDX Snakenet Gen2** umstellen. 
Vergeben Sie einen Namen und ein Passwort für den Account und beenden die Accounterstellung.

<img alt="authorize" src={useBaseUrl('/claim/create-account.png')} />

:::warning 
Geben Sie Ihre Seed Phrase an niemanden weiter. Erstellen Sie davon ein Backup und bewahren Sie sie an einem sicheren Platz auf. Es ist der einzige Weg ihren Account wiederzuerlangen und wenn Sie ihn verlieren oder versehentlich veröffentlichen, sind ihre Anlagen in Gefahr. Bitte nehmen Sie zu Kenntnis das Sie dieses Wallet bis zum Start des Mainnets behalten müssen, da alle Bestände bis dahin gesperrt bleiben. Wenn Sie den Zugang zu ihrer Wallet verlieren, verlieren sie auch Ihre HDX. Bitte passen Sie auf sich auf!
:::

Sobald Sie Ihre Adresse erstellt haben, können Sie diese in der Benutzeroberfläche auswählen.
Danach sollten Sie eine Übersicht Ihrer ETH und HDX Adressen sehen, die für den Claiming-Prozess verwendet werden.
Klicken Sie auf _next_ um fortzufahren und die Nachricht zu signieren.

<img alt="authorize" src={useBaseUrl('/claim/claim-02.jpg')} />

### 03 Signieren {#03-sign}

Im dritten Schritt müssen Sie die Nachricht signieren um Ihre Account-Inhaberschaft zu bestätigen und den Claiming-Prozess abzuschließen.

:::note
Aufgrund der Eigenschaften des  [ss58](https://polkadot.js.org/docs/keyring/start/ss58/) Adressformats welche die Polkadot Chain benutzt um Adressen in einer für Menschen lesbaren Darstellung anzuzeigen, werden die Adresse die Sie signieren und der Adresse die Sie in der Polkadot.js Erweiterung sehen werden, nicht übereinstimmen.
Was Sie in der Mitteilungsbox sehen ist Ihr öffentlicher Schlüssel zu Ihrer Adresse, während Sie in der Erweiterung eine für Menschen lesbare Repräsentation Ihrer Adresse sehen werden.
Dies ist vollständig sicher da wir die Adresse die Sie signieren, mit der Adresse des von Ihnen zur Beanspruchung verwendeten Accounts abgleichen. Dadurch ist es nicht möglich HDX von einer anderen Adresse zu beanspruchen außer von der die Sie im vorangegangen Schritt verwendet haben.
:::

Abhängig von der von Ihnen verwendeten Möglichkeit die Sie in Schritt Eins ausgewählt haben werden Ihnen hier nun eine von Zwei möglichen Optionen angezeigt.
* Wenn Sie Ihr **Metamask** verbunden haben, werden Sie aufgefordert eine Nachricht zu signieren wenn Sie auf den _Sign_-Button klicken. Folgen Sie den Anweisungen in Metamask um die Nachricht zu signieren.		
* Wenn Sie Ihre Ethereum Adresse manuell eingegeben haben müssen Sie die Nachricht mit Ihrem externen Wallet signieren, das Sie zum Kauf der Token verwendet haben. Sobald sie Ihre Nachricht signiert haben, fügen Sie die Signatur (beginnt mit "0x") in das dafür vorgesehene Feld ein.

<img alt="authorize" src={useBaseUrl('/claim/claim-03.jpg')} />

### 04 Beanspruchen {#04-claim}

Sobald die Nachricht signiert ist, müssen Sie eine Transaktion senden und Sie mit ihrer Polkadot.js Erweiterung signieren. Wenn Sie dies abgeschlossen haben sind Sie nun offizieller HDX Besitzer. Sie können Ihren HDX Kontostand überprüfen unter [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts), falls es nicht bereits in der Erweiterung angezeigt werden sollte.

<img alt="authorize" src={useBaseUrl('/claim/claim-sign.jpg')} />

Sie habenn den Claim-Prozess erfolgreich abgeschlossen und sind nun offiziell ein HDX-Halter!

Sie können Ihren Kontostand mit Hilfe von [Polkadot/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts) überprüfen wenn Sie sich mit dem HydraDX Snakenet Netzwerk verbunden haben. Beachten Sie bitte, dass Sie Ihren Kontostand nicht direkt in der Polkadot.js Browsererweiterung sehen können.

### 05 Was kommt danach? {#05-whats-next}

Die HDX Token bleiben bis zum Start des Mainnets gesperrt.
Sie werden weiterhin Ihren xHDX Kontostand in ihrer alten Wallet angezeigt bekommen. Da diese dort für immer gesperrt bleiben, könnten Sie diese Sichtbar lassen als eine Art "Early-Supporter Medaille" oder sie eben in Ihrer Wallet ausblenden lassen.
Sie wollen mit Ihren HDX Token arbeiten und uns helfen die Sicherheit des HydraDX Netzwerkes zu verbessern? Dann können Sie in unserem vergüteten Testnetzwerkes Namens **Snakenet** teilnehmen indem Sie Ihre HDX Token staken. Gerne können Sie hier mehr über den [Staking-Prozess](/staking) erfahren und danach entscheidenn ob Sie als [validator](/start_validating) oder als [nominator](/start_nominating) aktiv werden möchten.
