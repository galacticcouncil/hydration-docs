---
id: start_validating 
title: Validierung starten
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Nachdem Sie Ihre [HydraDX Node eingerichtet](/node_setup) haben, müssen Sie Ihre HDX-Token binden und die Validator Schlüssel erstellen bevor es mit dem Validieren losgehen kann.
:::warning

Das Betreiben und Erstellen einer Validator Node setzt ein gewisses Maß an technischen Fähigkeiten vorraus, die benötigt werden um den fehlerfreien Betrieb der Node zu gewährleisten. Zudem verpflichten wir die Validatoren Ihre Node immer auf dem neuesten Stabilen Release zu betreiben. Wenn Sie mit dem Thema Validatoren nicht vertraut sind, empfehlen wir Ihnen einen erfahrenen Validator mit Ihren HDX zu nominieren. Wenn Sie das Betreiben der Validator Nodes den erfahreneren Akteuren überlassen, schützen Sie sich und andere vor dem Verlust des eigenen Kryptokapitals.

:::

## 01 Das Binden von HDX Token {#01-bond-hdx-tokens}

Um im Netzwerk als Validator teilnehmen zu können müssen Sie HDX Token binden. Wenn Sie keine HDX besitzen ist es zum aktuellen Zeitpunkt nicht möglich am Testnet teilzunehmen. Allerdings gibt es in den nächsten Wochen aufregende Neuigkeiten von unserem Team, also bleiben Sie auf dem Laufenden indem Sie unseren Newsletter abonnieren.
:::note

Sind Sie immernoch im Besitz von xHDX Token, die Sie während dem Balancer LBP Event gekauft haben? Dann müssen Sie zuerst Ihre [HDX beanspruchen](/claim) bevor Sie hier fortfahren können.

:::

Zum Binden von HDX öffnen Sie Polkadot/apps und verbinden sich mit einen der [öffentlichen HydraDX RPC nodes](/polkadotjs_apps_public). Vergewissern Sie sich, dass Sie ihren [Kontostand](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts) sehen können.

:::warning

Gebundene HDX im Stake garantieren die Sicherheit des Netzwerkes. Falsches Verhalten von Validator Nodes kann zu Bestrafung durch Slashing führen, was unbeabsichtigen zu einem teilweisen oder kompletten  Verlust der gebundenen Token zuf Folge haben kann. Wir empfehlen nachdrücklich den Betrieb einer Validator Node nur zu erwägen, wenn Sie sich der Tragweite ihres Handelns bewusst sind und über die nötige Erfahrung verfügen.

:::

Für den nächsten Schritt navigieren Sie zu *Network* > *Staking* > *Account actions* > *+ Stash*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-1.png')} />
</div>

Nachdem Sie auf die *Stash* Schaltfläche geklickt haben sollten Sie die Bonding-Einstellungen sehen mit vier editierbaren Feldern:  

* **stash account**: Dieser Account hält die Mehrheit Ihrer HDX Token. HDX werden von diesem Account aus gestaked.  
* **controller account**: Dieser Accoount hält eine kleinere Menge an HDX welche benötigt werden um die Transaktionsgebühren für den Start und Stopp des Nominierungsvorganges decken zu können.  
* **value bonded**: Hier sehen Sie die Menge an HDX, die Sie staken. Staken Sie nicht Ihren vollständigen HDX Bestand, denn Sie benötigen später weitere HDX Token um anfallende Transaktionsgebühren bezahlen zu können.  
* **payment destination**: Dies ist der Account an welchen die Belohnungen aus dem Staking ausgezahlt werden.  

:::warning

Staken Sie nicht Ihren vollständigen HDX Bestand, denn Sie benötigen später weitere HDX Token um anfallende Transaktionsgebühren bezahlen zu können. Wenn Sie alle Ihre HDX staken, können Sie eventuell die Transaktion nicht signieren, die Sie brauchen um den Nominierungsprozess starten zu können.

:::

Nach ausfüllen der Bonding-Einstellungen betätigen Sie die _Bond_-Schaltfläche und signieren die Transaktion um den Prozess abzuschließen.

:::caution

Aus Sicherheitsgründen ist es nicht empfehlenswert den gleichen Account für Stash und Controller zu verwenden. Da allerdings im Snakenet Token-Transfers deaktiviert sind ist es momentan nicht möglich verschiede Accounts zu verwenden. Wir empfehlen daher Stash und Controller zu trennen sobald dies in Zukunft möglich sein wird.

:::

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-2.png')} />
</div>

## 02 Session Keys erstellen {#02-generate-session-keys}

Der zweite Schritt ist es die Session Keys zu erstellen. Diese werden benutzt um die Validator Node mit dem entsprechenden Controller Account mit den gestaketen HDX zu verknüpfen. Es ist daher sehr wichtig diesen Schritt korrekt durchzuführen.  

Um die Session Keys zu erstellen führen Sie folgenden Befehl im CLI ihrer Node aus:  

```bash
$ curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933

# Example output
{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}
```

In der Ausgabe finden sie den generierten Session Key in der Variable _result_ (`0x9257...` im obigen Beispiel).

## 03 Session Key festlegen {#03-set-your-session-keys}

Um den generierten Session Key mit dem Controller Account zu verbinden öffnen Sie die Polkadot/apps und navigieren zu:  
*Developer* > *Extrinsics*

Füllen Sie folgende Felder aus:  

* _using selected account_: wählen Sie Ihren Controller Account;  
* _submit the following extrinsic_: wählen Sie `session` auf der linken und `setKeys` auf der rechten Seite;  
* _keys_: geben Sie hier die generieten Session Keys aus dem letzten Schritt ein;  
* _proof_: `0`.  

Um den Vorgang abzuschließen klicken Sie  _Submit Transaction_ und signieren die Transaktion.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/set-session-keys-1.png')} />
</div>

## 04 Überprüfe die Synchronisation der Node {#04-make-sure-that-your-node-is-fully-synced}

Bevor Sie fortfahren sollten sie sicherstellen, dass die Node läuft und der Synchronisationsprozess der Chain komplett abgeschlossen ist. Die zuverlässigste Methode dies zu überprüfen ist es den folgenden Befehl direkt im CLI der Node auszuführen:   

```bash

$ journalctl -f -u hydradx-validator.service

# The output will be similar to this
Mar 22 18:37:38 Ubuntu-2010-groovy-64-minimal hydra-dx[232761]: 2021-03-22 18:37:38  💤 
Idle (52 peers), best: #622028 (0x5f5a…1041), finalized #622025 (0x5b21…a746), ⬇ 9.1kiB/s ⬆ 6.1kiB/s

```

Sie können die Blocknummer aus dem Log (im obigen Beispiel `#622025`) mit der aktuellen Blocknummer vergleichen, die Sie im [Polkadot/apps Explorer](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/explorer) einsehen können.  
Ist Ihre Blocknummer niedriger als der aktuelle Block, so ist die Synchronisation noch nicht abgeschlossen.  

Bitte warten Sie bis die Blocknummer uas dem Log mit dem aktuellsten Block des Netzwerkes übereinstimmt.  

## 05 Validation starten {#05-start-validating}

Um die Validation zu starten befolgen Sie diese Schritte in Polkadot/apps:  

*Network* > *Staking* > *Account actions* > *Validate* (Button neben Ihren gebundenen HDX)  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-1.png')} />
</div>

Nachdem Sie den *Validate*-Button geklickt haben sollten Sie ein PopUp mit der Bezeichnung *set validator preferences* sehen. Hier müssen Sie Ihre _reward commission percentage_ eingeben, was die prozentuale Kommission ist, mit der Sie als Validator an den Staking-Belohnungen beteiligt werden. Die verbleibenden Belohnungen werden unter den Nominatoren unter Berücksichtigung derer Staking-Anteile aufgeteilt. Wenn Sie entscheiden keine Kommission an den Belohnungen einnehmen zu wollen können Sie den Prozentsatz auf 0 setzen.    

Um die Einstellungen zu bestätigen klicken Sie *Validate* und signieren die Transaktion.  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-2.png')} />
</div>

## 06 Den Status der Validator Node überprüfen {#06-check-the-status-of-your-validator-node}

Sie können den Status Ihrer Validator Node in Polkadot/apps unter folgendem Menüpunkt überprüfen:  

*Network* > *Staking* > *Staking overview*

Dieser Reiter bietet eine Übersicht aller Staking-Aktivitäten, die mit dem Netzwerk verbunden sind. Ganz oben gibt es sowohl eine Anzeige der verfügbaren aktiven Validator-Slots, als auch die Anzahl der wartenden Nodes, die ihre Absicht bekundet haben ein Validator zu werden. Sie können überprüfen ob Ihre Node in der Warteliste ist indem Sie zum _Waiting_-Tab wechseln.  

Ihre Validator Node bleibt so lange in der Warteschlange, bis sie in das aktive Validator-Set gewählt wird. Die aktiven Validatoren werden jede Era neu gewählt, was anderen Nodes den Zugang ermöglicht solange es freie Plätze gibt oder ein Validator die Mindestgrenze des Total-Stake überschreitet.  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-3.png')} />
</div>

Vielen Dank, dass Sie das HydraDX Snakenet als Validator unterstützen! 🎉
