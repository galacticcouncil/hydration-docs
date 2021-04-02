---
id: claim
title: HDX beanspruchen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Um Ihre HDX Token aus der xHDX ERC-20 Token-Repräsentation beanspruchen zu können, benötigen sie Ihr originales Wallet in welchem Sie Ihre Token im Ethereum Netzwerk aufbewahren, die polkadot.js Browsererweiterung, und ein paar Minuten Zeit.

## Vorbereitung {#prequisites}

Stellen Sie sicher das ihr Browser die polkadot.js Erweiterung unterstützt. Die Polkadot.js Erweiterung ist momentan der einzig offizielle Weg Ihre Accounts mit HydraDX zu verwenden. Es wäre empfehlenswert das Ethereum Wallet bereit zu haben um eine Nachricht zu signieren um den Beanspruchungsvorgang zu starten, aber wir haben uns bemüht den Vorgang so einfach wie möglich zu machen. Wenn Sie die [polkadot.js extension] (https://polkadot.js.org/extension/) besitzen und Metamask installiert und funktionsbereit haben, sind Sie bereit loszulegen.

## Beanspruchungsprozess {#claim-process}

Besuchen sie die Website https://claim.hydradx.io, die App prüft ob alle benötigten zuvor genannten Vorbereitungen getroffen wurden, und sollte Sie durch den Vorgang der Beanspruchung führen. Es ist Ihnen möglich die Beanspruchung von Metamask oder einem Externen Wallet durchzuführen insofern es die signierung einer Nachricht unterstützt.
Wenn sie Ihre XHDX in einer Coinbase Wallet oder in einem Trust Wallet liegen haben, bedarf es einem Workaroung da diese Wallets eine signierte Nachricht nicht ermöglichen.  
<u>Metamask</u>: Wenn Sie die Metamask Erweiterung das erste mal verwenden können Sie mit einem Seed Phrase eine Wallet importieren. Sie finden die Seed Phrase in den Einstellungen der Wallet App unter "Recovery Phrase" 
<u>MEW (MyEtherWallet)</u>: Gehen sie zu [MEW Access My Wallet site](https://www.myetherwallet.com/access-my-wallet). Wenn Sie ein Coinbase Wallet verwenden klicken sie auf MEW Wallet und wählen sie WalletLink connecting Option und koppeln sie diese. Der WalletLink ist in den Einstellungen der Coinbase Wallet App zu finden.  

Die andere Herangehensweise funktioniert mit beiden Wallets: Wählen sie "Software" auf der MEW Access Seite und fahren sie mit "Mnemonic Phrase" fort. Hier können sie dann in der selben Art und Weise wie in Metamask oben beschrieben, Ihre Seed Phrase eingeben.

### 00 Authorisierung {#00-authorize}

Sie werden daraufhin von der polkadot.js Erweiterung aufgefordert die Benutzung der Beanspruchungsseite zu authorisieren. Stellen Sie sicher das die Aufforderung CLAIM.HYDRADX.IO anzeigt und  https://claim.hydradx.io, andererseits könnten sie einem Phishing Angriff zum Opfer fallen!
<img alt="authorize" src={useBaseUrl('/claim/authorize.png')} />


Nach der Authorisierung, werden sie aufgefordert ihre Metadaten für die polkadot.js Erweiterung zu aktualisieren. Dies bedeutet das die Polkadot.js Erweiterung dazu in der Lage sein wird HydraDX spezifische Adressen zu erstellen, welche notwendig sind um den Beanspruchungsprozess in der Benutzeroberfläche zu vervollständigen.
<img alt="authorize" src={useBaseUrl('/claim/metadata.png')} />

### 01 ETH Adresse auswählen {#01-select-your-eth-address}

Im ersten Schritt, müssen sie einen Account auswählen von dem Sie die Token beanspruchen wollen. Dies geschieht entweder durch die Verbindung zu Metamask oder indem Sie ihre Adresse in das Eingabefeld eingeben. Im Falle der zweiten Variante müssen sie später die Nachricht manuell signieren. 

### 02 HDX Adresse erstellen {#02-create-and-select-an-hdx-address}

Um Ihre HDX beanspruchen zu können müssen sie eine Adresse auswählen. Wenn sie dem Metadaten Upgrade in Schritt Eins zugestimmt haben, können Sie nun ihre HydraDX Adresse in der Polkadot.js Erweiterung erstellen. Bitte tun Sie dies jetzt.

:::warning 
Geben sie ihre Seed Phrase an niemanden weiter. Erstellen sie davon ein Backup und bewahren Sie sie an einem sicheren PLatz auf. Es ist der einzige Weg ihren Account wiederzuerlangen und wenn Sie ihn verlieren oder versehentlich veröffentlichen, sind ihre Anlagen in Gefahr. Bitte nehmen Sie zu Kenntnis das Sie dieses Wallet bis zum Start des Mainnets behalten müssen, da alle Bestände bis dahin gesperrt bleiben. Wenn Sie den Zugang zu ihrer Wallet verlieren, verlieren sie auch Ihre HDX. Sichern sie es. Bitte.
:::

<img alt="authorize" src={useBaseUrl('/claim/create-account.png')} />

Sobald sie Ihre Adresse erstellt haben, können Sie diese in der Benutzeroberfläche auswählen und mit dem Beanspruchungsprozess fortfahren.

### 03 Signieren {#03-sign}

:::info
Aufgrund der Eigenschaften des  [ss58](https://polkadot.js.org/docs/keyring/start/ss58/) Adressformats welche die Polkadot Chain benutzt um Adressen in einer für Menschen lesbaren Darstellung anzuzeigen, werden die Adresse die Sie signieren und der Adresse die Sie in der Polkadot.js Erweiterung sehen werden, nicht übereinstimmen.
Was Sie in der Mitteilungs Box sehen ist ihr tatsächlicher öffentlicher Schlüssel zu Ihrer Adresse. Während sie in der Erweiterung eine für Menschen lesbare Repräsentation ihrer Adresse sehen werden.
Dies ist vollständig sicher da wir die Adresse die sie signieren, mit der Adresse des von Ihnen zur Beanspruchung verwendeten Accounts abgleichen. Dadurch ist es nicht möglich HDX von einer anderen Adresse zu beanspruchen außer von der die Sie im vorangegangen Schritt verwendet haben.
:::

Abhängig von der von Ihnen verwendeten Möglichkeit die sie in Schritt Eins ausgewählt haben werden Ihnen hier nun eine von Zwei möglichen Optionen angezeigt.
1.   Signieren der Nachricht durch Metamask.

        Wenn sie ihr Metamask verbunden haben, werden sie aufgefordert eine Nachricht zu signieren wenn sie auf den Sign Knopf klicken. Folgen sie den Anweisungen in Metamask um die Nachricht zu signieren.
		
2. Signieren Sie die Nachricht über ihre externe Wallet.

	Wenn sie Ihre Ethereum Adresse manuell eingegeben haben müssen sie die Nachricht durch ihre externe Wallet signieren die sie zum kauf der Token verwendet haben und sie den privaten Schlüssel dazu besitzen. Sobald sie Ihre Nachricht signiert haben, fügen sie sie Signatur (beginnt mit "0x") in das dafür vorgesehene Feld ein.

### 04 Beanspruchen {#04-claim}

Sobald die Nachricht signiert ist, müssen sie eine Transaktion senden und sie mit ihrer Polkadot.js Erweiterung signieren. Wenn sie dies abgeschlossen haben sind Sie nun offizieller HDX Besitzer. Sie können ihren HDX Kontostand überprüfen unter [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts). Falls es nicht bereits in der Erweiterung angezeigt werden sollte.

### 05 Was kommt danach? {#05-whats-next}

In den nächsten Tagen, bereiten wir eine Anleitung vor wie sie Ihre Token zum Betreiben einer Validator Node oder zum nominieren eines Validators einsetzen und staken können. Es gibt nichts was Sie jetzt mit ihren Token nicht tun könnten. 
Sie werden weiterhin ihren xHDX Kontostand in ihrer alten Wallet angezeigt bekommen. Da sie dort für immer gesperrt bleiben, könnten sie diese Sichtbar lassen als eine Art "Early-Supporter Medaille" oder sie eben in ihrer Wallet ausblenden lassen.
Die HDX token sind ebenfalls gesperrt bis das Mainnet gestartet wird. Sie können sie im Moment nicht übertragen, handeln oder umtauschen. 
Was sie allerdings tun könnten, wäre uns zu helfen mit Dingen wie, anderen zu helfen den Claim vorgang durchzuführen, diese Anleitung zu verbesserun oder andere Probleme anzugehen unter [github](https://github.com/galacticcouncil).

