---
id: node_monitoring
title: Node Monitoring
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 

In diesem Kapitel durchlaufen wir den Einrichtungsprozess eines lokalen Monoitoring-Systems der Validator Node.

## Prerequisites {#prerequisites}

Sie müssen Ihre [Validator Node](/node_setup) fertig eingerichtet und aktiv haben.  
Dieser Guide wurde unter dem Ubuntu 20.04 LTS Release getestet.

## Prometheus Setup {#prometheus-setup}

Im ersten Schritt werden wir den Prometheus Server einrichten.

### Benutzer und Ordner {#user-and-directories}

Sie erstellen einen separaten Benutzer für die Überwachungszwecke, für den kein Home-Verzeichnis angelegt wird und der sich nicht einloggen kann.

```shell script
$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus
```

Als nächstes erstellen Sie Verzeichnisse für die ausführbaren Dateien und die Konfigurationsdateien.

```shell script
$ sudo mkdir /etc/prometheus
$ sudo mkdir /var/lib/prometheus
```

Ändern Sie den Eigentümer der Verzeichnisse auf den neu erstellten Benutzer.

```shell script
$ sudo chown -R prometheus:prometheus /etc/prometheus
$ sudo chown -R prometheus:prometheus /var/lib/prometheus
```

### Prometheus installieren {#install-prometheus}

Schauen Sie nach der aktuellsten Version auf der [GitHub Release Seite](https://github.com/prometheus/prometheus/releases/).  
Zum Zeitpunkt der Veröffentlichung ist dies v2.25.2. Setzen Sie die aktuellste Version in die folgenden Befehle ein.

```shell script
# download prometheus
$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz

# unpack the binaries
$ tar xfz prometheus-*.tar.gz

# enter the unpacked directory
$ cd prometheus-2.25.2.linux-amd64
```

Nun kopieren Sie die Binaries in das lokale Verzeichnis.

```shell script
$ sudo cp ./prometheus /usr/local/bin/
$ sudo cp ./promtool /usr/local/bin/
```

Als Besitzer der Dateien wird ebenfalls unser neuer Benutzer gesetzt.

```shell script
$ sudo chown prometheus:prometheus /usr/local/bin/prometheus
$ sudo chown prometheus:prometheus /usr/local/bin/promtool
```

Danach kopieren Sie die Benutzeroberfläche und die Konfigurationsdateien.

```shell script
$ sudo cp -r ./consoles /etc/prometheus
$ sudo cp -r ./console_libraries /etc/prometheus
```

Sie ahnen es sicher bereits, doch wir müssen mal wieder die Benutzer der Verzeichnisse ändern.

```shell script
$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles
$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries
```

Sie haben nun alles, was Sie aus dem heruntergeladenen Paket benötigen, also navigieren Sie einen Schritt zurück und räumen etwas auf.

```shell script
$ cd .. && rm -rf prometheus*
```

Nun erstellen Sie eine `YAML`-Komnfigurationsdatei für Prometheus mit einem Editor Ihrer Wahl (nano / vim / pico).

```shell script
$ sudo nano /etc/prometheus/prometheus.yml
```

Die Konfigurationsdatei ist in drei Bereiche gegliedert:

* `global`: setzt die Standardwerte für das Abtastungsintervall `scrape_interval` und das Ausführungsintervall der Regeln `evaluation_interval`
* `rule_files`: legt die Regel-Dateien fest, die Prometheus laden soll
* `scrape_configs`: hier wird festgelegt welche Resourcen überwacht werden sollen

Wir werden uns auf die Grundsätze beschränken und folgende Konfiguration erstellen:

```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  # - "weHaveNo.rules"

scrape_configs:
  - job_name: "prometheus"
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:9090"]
  - job_name: "substrate_node"
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:9615"]
```

Der erste Job exportiert Daten von Prommetheus selbst, der zweite exportiert die Metriken der HydraDX Node.
Wir ändern das `scrape_interval` beider Jobs um ein detaillierteres Dashboard zu erstellen. Dies überschreibt die globalen Variablen.
Das `target` in `static_configs` legt fest, wo die Exporter laufen, wir belassen dies bei den Standardwerten.

Nachdem die Konfiguration gespeichert wurde, wird erneut der Besitzer geändert.

```shell script
$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml
```

### Prometheus starten {#starting-prometheus}

Damit Prometheus automatisch startet und im Hintergrund läuft werden wir `systemd` verwenden.
Erstellen Sie eine neue Konfiguration (wieder mit einem Editor Ihrer Wahl):

````shell script
$ sudo nano /etc/systemd/system/prometheus.service
````

Fügen Sie folgende Konfiguration ein und speichern sie ab.

```
[Unit]
  Description=Prometheus Monitoring
  Wants=network-online.target
  After=network-online.target

[Service]
  User=prometheus
  Group=prometheus
  Type=simple
  ExecStart=/usr/local/bin/prometheus \
  --config.file /etc/prometheus/prometheus.yml \
  --storage.tsdb.path /var/lib/prometheus/ \
  --web.console.templates=/etc/prometheus/consoles \
  --web.console.libraries=/etc/prometheus/console_libraries
  ExecReload=/bin/kill -HUP $MAINPID

[Install]
  WantedBy=multi-user.target
```

Danach führen Sie die drei folgenden Schritte aus:
`systemctl deamon-reload` lädt neue Konfigurationen und aktualisiert die bestehende 
`systemctl enable` aktiviert Ihren neuen Service
`systemctl start` startet den Service

Hiermit können Sie alle drei Befehle in einer Zeile ausführen:

```shell script
$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus
```

Sie sollten nun in der Lage sein die Benutzeroberfläche von Prometheus unter http://localhost:9090/ aufzurufen.

## Node Exporter {#node-exporter}

Wir werden Node Exporter installieren um Hardware-Werte für das Dashboard abzugreifen.
Bitte schauen Sie [hier](https://github.com/prometheus/node_exporter/releases/) nach, welches die aktuellste Version ist und ersetzen die Versionsnummer im folgenden Befehl.  
Zum Veröffentlichungszeitpunkt war die aktuellste Version `1.1.2`.

### Node Exporter installieren {#install-node-exporter}

Laden Sie die neuste Version herunter.

```shell script
$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz
```

Entpacken Sie das eben heruntergeladene Paket. Dadurch wird ein Verzeichnis mit dem Namen `node_exporter-1.1.2.linux-amd64` erstellt.

```shell script
$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz
```

Als Nächstes kopieren Sie die Binary in das lokale Applikationsverzeichnis und weisen es dem entsprechenden Benutzer zu.

```shell script
# copy binary
$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin

# set ownership
$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter
```

Sie können etwas aufräumen und das heruntergeladene Paket und die entpackten Dateien entfernen.

```shell script
$ rm -rf node_exporter*
```

### Einen Systemd Service erstellen {#create-a-systemd-service}

Genau wie bei Prometheus starten Sie Node Exporter als Service im Hintergrund.
Erstellen Sie einen systemd Service mit einem Editor Ihrer Wahl.

```shell script
$ sudo nano /etc/systemd/system/node_exporter.service
```

Und fügen Sie folgende Konfiguration ein.

```
[Unit]
Description=Node Exporter
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=multi-user.target
```

Aktivieren und starten Sie den Service mit folgendem Einzeiler.

```shell script
$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter
```

### Scrape Job für Node Exporter hinzufügen {#add-scrape-job-for-node-exporter}

Der Node Exporter ist nun einsatzbereit, Sie müssen Prometheus jedoch noch anleiten die Daten zu erheben.
Öffnen Sie die Konfiguration mit einem beliebigen Editor.

```shell script
$ sudo nano /etc/prometheus/prometheus.yml
```

Fügen Sie ganz unten am Ende der Datei eine weitere Scrape-Konfiguration ein.
Kopieren Sie folgenden Codeblock hinein und speichern die Datei.

```yaml
  - job_name: 'node_exporter'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9100']
```

Um die neue Konfiguration anzuwenden muss der Prometheus Service neugestartet werden.

```shell script
$ sudo systemctl restart prometheus.service 
```

Ihre Server-Metriken werden nun ausgelesen und können in der Prometheus Benutzeroberfläche eingesehen werden.
Sie werden sie später für das Dashboard benötigen.

## Grafana Setup {#grafana-setup}

Sie können die Daten in der Benutzeroberfläche sehen, das war jedoch nicht das Ziel dieser Anleitung.
Wir möchten die Daten hübsch angezeigt bekommen und da kommt Grafana ins Spiel.

### Grafana installieren {#install-grafana}

Bitte überprüfen Sie mit [diesem Link](https://grafana.com/grafana/download?platform=linux), welches die neuste Version von Grafana ist.
Sie können entweder die Versionsnummer in folgendem Befehl anpassen oder die Befehle aus der verlinkten Seite kopieren und direkt benutzen.
Zum Veröffentlichungszeitpunkt war die aktuellste Version `7.5.1`.

```shell script
$ sudo apt-get install -y adduser libfontconfig1
$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb
$ sudo dpkg -i grafana_7.5.1_amd64.deb
```

Das Paket enthält einen fertigen `systemd`-Service, welchen Sie direkt verwenden können.

```shell script
$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server
```

### Die Benutzeroberfläche aufrufen {#accessing-the-web-interface}

Sie können die Benutzeroberfläche von Grafana nun unter http://localhost:3000/ aufrufen.
Die standardmäßigen Login-Daten für Grafana sind:  
Benutzer: `admin`  
Passwort: `admin`  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-home.png')} />
</div>

### Die Datenquelle konfigurieren {#configuring-the-datasource}

Bitte klicken Sie das Einstellungs-Zahnrad im Menü und wählen `Datasources`.
Im nächsten Fenster klicken Sie `Add Datasource` und wählen Sie `Prometheus`.

Im nachfolgenden Formular müssen Sie nichts ändern außer die URL.
Stellen Sie `http://localhost:9090/` ein und klicken `Save and Test`.  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-datasource.png')} />
</div>

### Das Dashboard importieren {#importing-the-dashboard}

Bitte klicken Sie den `Plus`-Button im Hauptmenü und wählen `import`.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-import.png')} />
</div>  

Sie können das [HydraDX Dashboard](https://grafana.com/grafana/dashboards/14158) nutzen und um es zu laden geben Sie einfach die ID `14158` ein und klicken auf `Load`.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-import-options.png')} />
</div>  

Hier müssen Sie nicht viel einstellen, vergewissern Sie sich lediglich, dass `Prometheus` als `Datasource` eingestellt ist.
Sie können den Importvorgang nun abschließen.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-dashboard.png')} />
</div>  

Sie sollten das Dashboard sofort mit ihren Daten sehen.
Falls einzelne Panele leer sind, vergewissern Sie sich bitte, dass die Auswahlfelder ganz oben folgende Werte enthalten:
* `Chain Metrics`: Substrate  
* `Chain Instance`: localhost:9615  
* `Server Job`: node_exporter  
* `Server Host`: localhost:9100  
