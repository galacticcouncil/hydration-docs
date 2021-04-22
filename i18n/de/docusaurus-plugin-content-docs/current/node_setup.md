---
id: node_setup
title: Eine HydraDX Node einrichten
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Dieser Abschnitt soll Sie durch Prozess zum Aufbau und zum Betrieb einer HydraDX node führen.

:::warning

Das Betreiben und Erstellen einer Validator node setzt ein gewisses Maß an technischen Fähigkeiten vorraus, die benötigt werden um den Fehlerfreien Betrieb der Node zu gewährleisten. Wenn Sie nicht genau was Sie hier genau vorhaben, empfehlen wir das Sie einen erfahrenen Validator mit ihren HDX nominieren [nominate your HDX](/start_nominating) to an experienced validator instead. Wenn Sie das Betreiben der Validator Nodes den erfahreneren überlassen, schützen Sie sich und andere vor dem Verlust des eigenen Kryptokapitals.


:::

## 00 Systemanforderungen {#00-required-technical-specifications}

Folgende Hardware stellt das minimum dar, dass zum Betreiben einer HydraDX Validator Node aufgebracht werden muss:


* Betriebssystem: Ubuntu 20.04
* CPU: Intel Core i7-7700K (oder höhere Single-Thread-Leistung)
* Arbeitsspeicher: 64GB RAM
* Speicher: NVMe SSD mit mindestens 200GB Speicherplatz (Speicherbedarf steigt mit der Zeit)

:::note

Die oben genannten Mindestvorraussetzungen wurden von unserem Team überprüft. Um sicherzugehen ob Ihre Hardware die Anforderungen erfüllt können sie diesen [Leistungs-Benchmark](/performance_benchmark) nutzen.

:::


## 01 Prüfen ob die Systemuhr synchronisiert ist {#01-check-whether-your-system-clock-is-synchronized}

Bevor Sie einen Validator Node betreiben, überprüfen sie ob ihre Systemuhr synchronisiert ist. Dies ist wichtig da alle Validatoren zusammen arbeiten, was eine gemeinsam synchronisierte Systemuhr vorraussetzt. Unter Ubuntu 20.04 sollte die Synchronisation bereits voreingestellt sein. Um dies zu überprüfen, führen sie den nachfolgenden Befehl aus und überprüfen die Ausgabe der Konsole:

```bash
$ timedatectl | grep "System clock"
System clock synchronized: yes
```

Sollte sich ihre Folgeausgabe auf den Befehl unterscheiden, können sie NTP auch manuell mit dem folgenden Befehl installieren, und erneut überprüfen ob die Systemuhr synchronisiert ist:

```bash
$ apt install ntp
$ ntpq -p
```

## 02 Firewall-Einstellungen anpassen {#02-adjust-your-firewall-settings}
Der Port `30333` wird zur Verbindung zu anderen Nodes verwendet. Wenn Sie den Node als Validator verwenden möchten, empfehlen wir eine Firewall einzurichten und nur diesen Port für Remote Verbindungen freizugeben.

Wenn Sie den Node nicht als Validator verwenden, können Sie auch den Port `9944`freigeben (für RPC websocket Verbdinungen mit externen Apps) und `9933`(für HTTP Anfragen an Ihren Node). Sie können den Port `9944`verwenden um ihren Node mit [Polkadot/apps](/polkadotjs_apps_local) zu verbinden. 
 
## 03 Herunterladen oder Binary erstellen {#03-download-or-build-a-binary}
Sie können unter folgendem Githublink den aktuellsten Release unserer Binary herunterladen (https://github.com/galacticcouncil/HydraDX-node/releases).

Alternativ ist es auch möglich mit folgendem Befehl den aktuellen Build zu beziehen:

```bash
# Install dependencies
$ curl https://getsubstrate.io -sSf | bash -s -- --fast

# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Build the binary
$ cd HydraDX-node/
$ cargo build --release
```

Wenn Sie die Binary über die Oben genannten Schritte bezogen haben, lautet der Dateipfad wiefolgt:
```
target/release/hydra-dx
```

## 04 Binary ausführen {#04-run-the-binary}
Ausführen können Sie die binary indem sie folgenden Befehl ausführen:

```bash
$ {PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator
```

:::note

Validator Nodes benötigen die gesamte Chain Database. Wenn Sie die Node ohne die  `--validator` flag ausgeführt haben, müssen Sie Database neu synchronisieren indem sie die Chain vor dem Start der Node mit folgendem Befehl löschen.

```bash
$ {PATH_TO_YOUR_BINARY} purge-chain --chain lerna
```

:::

Neben dem Dateipfad zu der Binary müssen Sie noch einen Namen für Ihre Node festlegen welcher zur Identifikation in [Telemetry](https://telemetry.hydradx.io/#/HydraDX%20Snakenet%20Gen2) genutzt wird. Dort finden Sie ebenfalls eine Liste aller Nodes im HydraDX Snakenet.

## 05 Mit systemd starten {#05-running-with-systemd}
Um gewährleisten zu können das ihr Node automatisch bei einem Systemneustart startet, empfehlen wir den HydraDX node als System Prozess zu betreiben. Diese Einstellungen können sie mit folgendem Befehl vornehmen (in die "{}" Klammern müssen sie Ihre Daten eingeben) :


```bash
$ touch /etc/systemd/system/hydradx-validator.service
```

```
[Unit]
Description=HydraDX validator

[Service]
Type=exec
User={UNIX_USER}
ExecStart={PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator
Restart=always
RestartSec=120

[Install]
WantedBy=multi-user.target
```

:::note
Die Einstellung "RestartSec" ist empfehlenswert da es den Neustart der Node im Falle eines Crashs verzögert. Dies ermöglicht das volatile Daten (wie zb consensus votes) auf die Festplatte geschrieben werden bevor der Node neugestartet wird. Wenn die Node direkt nach einem Crash neugestartet wird kann dies zu Mehrdeutigkeiten oder doppelten Signierungen führen welche möglicherweise zu slashing führen kann.
:::

Nachdem die Konfigurations Datei erstellt wurde können sie mit Ihrem HydraDX Validator Node als Systemprozess interagieren:

```bash
# Start the node at system boot
$ systemctl enable hydradx-validator.service

# Start the node manually
$ systemctl start hydradx-validator.service

# Check the status of the node
$ systemctl status hydradx-validator.service

# Check the logs of the node
$ journalctl -f -u hydradx-validator.service
```

Ihre HydraDX node ist jetzt konfiguriert und in Betrieb!
Jetzt können sie die letzten Schritte ausführen um mit dem [validieren zu beginnen](/start_validating).
