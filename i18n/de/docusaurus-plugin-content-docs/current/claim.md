---
id: claim
title: HDX beanspruchen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Um Ihre HDX Token aus der xHDX ERC-20 Token-Repräsentation beanspruchen zu können, benötigen sie Ihr originales Wallet in welchem Sie Ihre Token im Ethereum Netzwerk aufbewahren, die polkadot.js Browsererweiterung, und ein paar Minuten Zeit.

## Vorbereitung {#prequisites}

Stellen Sie sicher, dass Ihr Browser die polkadot.js Erweiterung unterstützt. Die Polkadot.js Erweiterung ist momentan der einzige offizielle Weg Ihre Accounts mit HydraDX zu verwenden. Es wäre empfehlenswert das Ethereum Wallet bereit zu haben um eine Nachricht zu signieren um den Beanspruchungsvorgang zu starten, aber wir haben uns bemüht den Vorgang so einfach wie möglich zu machen. Wenn Sie die [polkadot.js extension] (https://polkadot.js.org/extension/) besitzen und Metamask installiert und funktionsbereit haben, sind Sie bereit loszulegen.

## Beanspruchungsprozess {#claim-process}

Besuchen Sie die Website https://claim.hydradx.io, die App prüft ob alle benötigten zuvor genannten Vorbereitungen getroffen wurden, und sollte Sie durch den Vorgang der Beanspruchung führen. Es ist Ihnen möglich die Beanspruchung von Metamask oder einem Externen Wallet durchzuführen insofern es die signierung einer Nachricht unterstützt.
Wenn Sie Ihre xHDX in einer Coinbase Wallet oder in einem Trust Wallet liegen haben, bedarf es einem Workaround, da diese Wallets eine signierte Nachricht nicht ermöglichen.  
<u>Metamask</u>: Wenn Sie die Metamask Erweiterung zum ersten Mal verwenden können Sie mit einem Seed Phrase eine Wallet importieren. Sie finden die Seed Phrase in den Einstellungen der Wallet App unter "Recovery Phrase" 
<u>MEW (MyEtherWallet)</u>: Gehen Sie zu [MEW Access My Wallet site](https://www.myetherwallet.com/access-my-wallet). Wenn Sie eine Coinbase Wallet verwenden klicken sie auf MEW Wallet und wählen sie WalletLink connecting Option und koppeln sie diese. Der WalletLink ist in den Einstellungen der Coinbase Wallet App zu finden.  

Die andere Herangehensweise funktioniert mit beiden Wallets: Wählen sie "Software" auf der MEW Access Seite und fahren sie mit "Mnemonic Phrase" fort. Hier können Sie dann in der selben Art und Weise wie in Metamask oben beschrieben, Ihre Seed Phrase eingeben.

### 00 Authorisierung {#00-authorize}

Sie werden daraufhin von der polkadot.js Erweiterung aufgefordert die Benutzung der Beanspruchungsseite zu authorisieren. Stellen Sie sicher, dass die Aufforderung CLAIM.HYDRADX.IO anzeigt und  https://claim.hydradx.io, andererseits könnten Sie einem Phishing Angriff zum Opfer fallen!
<img alt="authorize" src={useBaseUrl('/claim/authorize.jpg')} />


Nach der Authorisierung, werden Sie aufgefordert ihre Metadaten für die polkadot.js Erweiterung zu aktualisieren. Dies bedeutet, dass die Polkadot.js Erweiterung dazu in der Lage sein wird HydraDX spezifische Adressen zu erstellen, welche notwendig sind um den Beanspruchungsprozess in der Benutzeroberfläche zu vervollständigen.
<img alt="authorize" src={useBaseUrl('/claim/metadata.jpg')} />

### 01 ETH Adresse auswählen {#01-select-your-eth-address}

Im ersten Schritt, müssen Sie einen Account auswählen von dem Sie die Token beanspruchen wollen. Dies geschieht entweder durch die Verbindung zu Metamask oder indem Sie Ihre Adresse in das Feld eingeben. Im Falle der zweiten Variante müssen Sie später die Nachricht manuell signieren. 

<img alt="authorize" src={useBaseUrl('/claim/claim-01.jpg')} />

### 02 HDX Adresse erstellen {#02-create-and-select-an-hdx-address}

Um Ihre HDX beanspruchen zu können müssen Sie eine Adresse auswählen. Wenn Sie dem Metadaten Upgrade in Schritt Eins zugestimmt haben, können Sie nun ihre HydraDX Adresse in der Polkadot.js Erweiterung erstellen. Bitte tun Sie dies jetzt.

:::warning 
Geben Sie Ihre Seed Phrase an niemanden weiter. Erstellen Sie davon ein Backup und bewahren Sie sie an einem sicheren Platz auf. Es ist der einzige Weg ihren Account wiederzuerlangen und wenn Sie ihn verlieren oder versehentlich veröffentlichen, sind ihre Anlagen in Gefahr. Bitte nehmen Sie zu Kenntnis das Sie dieses Wallet bis zum Start des Mainnets behalten müssen, da alle Bestände bis dahin gesperrt bleiben. Wenn Sie den Zugang zu ihrer Wallet verlieren, verlieren sie auch Ihre HDX. Bitte bleiben Sie sicher.
:::

<img alt="authorize" src={useBaseUrl('/claim/create-account.png')} />

Sobald Sie Ihre Adresse erstellt haben, können Sie diese in der Benutzeroberfläche auswählen und mit dem Beanspruchungsprozess fortfahren.

<img alt="authorize" src={useBaseUrl('/claim/claim-02.jpg')} />

### 03 Signieren {#03-sign}

:::info
Aufgrund der Eigenschaften des  [ss58](https://polkadot.js.org/docs/keyring/start/ss58/) Adressformats welche die Polkadot Chain benutzt um Adressen in einer für Menschen lesbaren Darstellung anzuzeigen, werden die Adresse die Sie signieren und der Adresse die Sie in der Polkadot.js Erweiterung sehen werden, nicht übereinstimmen.
Was Sie in der Mitteilungsbox sehen ist Ihr öffentlicher Schlüssel zu Ihrer Adresse, während Sie in der Erweiterung eine für Menschen lesbare Repräsentation Ihrer Adresse sehen werden.
Dies ist vollständig sicher da wir die Adresse die Sie signieren, mit der Adresse des von Ihnen zur Beanspruchung verwendeten Accounts abgleichen. Dadurch ist es nicht möglich HDX von einer anderen Adresse zu beanspruchen außer von der die Sie im vorangegangen Schritt verwendet haben.
:::

Abhängig von der von Ihnen verwendeten Möglichkeit die Sie in Schritt Eins ausgewählt haben werden Ihnen hier nun eine von Zwei möglichen Optionen angezeigt.
1.   Signieren der Nachricht durch Metamask.

        Wenn Sie Ihr Metamask verbunden haben, werden Sie aufgefordert eine Nachricht zu signieren wenn Sie auf den Sign Knopf klicken. Folgen Sie den Anweisungen in Metamask um die Nachricht zu signieren.
		
2. Signieren Sie die Nachricht über Ihre externe Wallet.

	Wenn Sie Ihre Ethereum Adresse manuell eingegeben haben müssen Sie die Nachricht durch Ihre externe Wallet signieren die Sie zum kauf der Token verwendet haben und Sie den privaten Schlüssel dazu besitzen. Sobald sie Ihre Nachricht signiert haben, fügen Sie die Signatur (beginnt mit "0x") in das dafür vorgesehene Feld ein.

<img alt="authorize" src={useBaseUrl('/claim/claim-03.jpg')} />

### 04 Beanspruchen {#04-claim}

<img alt="authorize" src={useBaseUrl('/claim/claim-sign.jpg')} />

Sobald die Nachricht signiert ist, müssen Sie eine Transaktion senden und Sie mit ihrer Polkadot.js Erweiterung signieren. Wenn Sie dies abgeschlossen haben sind Sie nun offizieller HDX Besitzer. Sie können Ihren HDX Kontostand überprüfen unter [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts), falls es nicht bereits in der Erweiterung angezeigt werden sollte.

### 05 Was kommt danach? {#05-whats-next}

In den nächsten Tagen, bereiten wir eine Anleitung vor wie Sie Ihre Token zum Betreiben einer Validator Node oder zum nominieren eines Validators einsetzen und staken können. Es gibt nichts was Sie jetzt mit ihren Token nicht tun könnten. 
Sie werden weiterhin Ihren xHDX Kontostand in ihrer alten Wallet angezeigt bekommen. Da diese dort für immer gesperrt bleiben, könnten Sie diese Sichtbar lassen als eine Art "Early-Supporter Medaille" oder sie eben in Ihrer Wallet ausblenden lassen.
Die HDX token sind ebenfalls gesperrt bis das Mainnet gestartet wird. Sie können sie im Moment nicht übertragen, handeln oder umtauschen. 
Was sie allerdings tun könnten, wäre uns zu helfen mit Dingen wie, anderen zu helfen den Claim vorgang durchzuführen, diese Anleitung zu verbessern oder andere Probleme anzugehen unter [github](https://github.com/galacticcouncil).
