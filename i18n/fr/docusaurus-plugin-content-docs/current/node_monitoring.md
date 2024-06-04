---
id: node_monitoring
title: Supervision de node
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 

Dans ce chapitre nous allons vous guider tout au long du réglage d'une solution de monitoring locale pour votre node validateur.

## Prérequis {#prerequisites}

Vous devez avoir votre [node collateur](/collator_setup) installé et actif.
Ce guide a été  testé sous la version Ubuntu 20.04 LTS.

## Réglages de Prometheus {#prometheus-setup}

Dans la première étape nous allons installer le serveur Prometheus.

### User et Directories {#user-and-directories}

Nous créons un user (utilisateur), _prometheus_, juste à des fins de monitoring qui n'a pas de répertoire home et ne peut pas être utilisé pour ouvrir une session.

```shell script
$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus
```

Puis nous créons des répertoires pour le fichier exécutable et les fichiers de configuration.

```shell script
$ sudo mkdir /etc/prometheus
$ sudo mkdir /var/lib/prometheus
```

Nous allons changer le propriétaire des répertoires pour restreindre l'accès au nouvel utilisateur, _prometheus_.

```shell script
$ sudo chown -R prometheus:prometheus /etc/prometheus
$ sudo chown -R prometheus:prometheus /var/lib/prometheus
```

### Installer Prometheus {#install-prometheus}

Vérifier le numéro de la dernière version de Prometheus sur la [page de sorties GitHub](https://github.com/prometheus/prometheus/releases/).
Au moment de l'écriture de l'article, la dernière version est la v2.25.2. Insérer la dernière version dans les lignes de commandes suivantes.

```shell script
# download prometheus
$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz

# unpack the binaries
$ tar xfz prometheus-*.tar.gz

# enter the unpacked directory
$ cd prometheus-2.25.2.linux-amd64
```

Maintenant copier les binaires dans votre dossier local.

```shell script
$ sudo cp ./prometheus /usr/local/bin/
$ sudo cp ./promtool /usr/local/bin/
```

Nous devons maintenant définir le nouvel utilisateur, _prometheus_, comme étant propriétaire de ces binaires.

```shell script
$ sudo chown prometheus:prometheus /usr/local/bin/prometheus
$ sudo chown prometheus:prometheus /usr/local/bin/promtool
```

Ensuite nous allons copier l'interface web et les pré-configurations.

```shell script
$ sudo cp -r ./consoles /etc/prometheus
$ sudo cp -r ./console_libraries /etc/prometheus
```

Vous l'avez peut-être deviné, mais nous allons aussi changer le propriétaire de ces répertoires.

```shell script
$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles
$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries
```

Maintenant que nous avons tous les paquets nécessaires, nous pouvons remonter d'un niveau et supprimer le dossier contenant les sources.

```shell script
$ cd .. && rm -rf prometheus*
```

Création du fichier de configuration, _prometheus.yml_, avec l'éditeur de votre choix (nano / vim / pico).

```shell script
$ sudo nano /etc/prometheus/prometheus.yml
```

Notre config est divisé en trois sections:

* `global`: sets the default values for `scrape_interval` and the rule-execution interval with `evaluation_interval`
* `rule_files`: specify rule-files the Prometheus server should load
* `scrape_configs`: this is where you set the monitoring-resources

Nous allons rester simples et terminer avec cette configuration:

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

La première tâche d'organisation de données (scrape) exporte les données de Prometheus, la seconde exporte les mesures du node Hydration.
Nous avons réglé le `scrape_interval` de chaque tâche pour avoir des statistiques plus détaillées. Cela remplace les valeurs globales.
Le `target` dans `static_configs` définit où les exportateurs fonctionnent, nous nous en tenons aux ports par défaut ici.

Après avoir sauvegardé la configuration nous allons - encore une fois - changer le propriétaire.

```shell script
$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml
```

### Démarrer Prometheus {#starting-prometheus}

Pour faire démarrer Prometheus automatiquement et fonctionner en arrière-plan nous allons créer un service Prometheus avec `systemd`.
Créez un nouveau config (encore avec l'éditeur de votre choix):

````shell script
$ sudo nano /etc/systemd/system/prometheus.service
````

Coller les configurations suivantes et sauvegardez le fichier.

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

Ensuite nous allons effectuer les trois étapes suivantes:
`systemctl daemon-reload` charge les nouvelles configurations et met à jour celles existantes.
`systemctl enable` active notre nouveau service
`systemctl start` déclenche l'exécution du service.

Vous pouvez effectuer les étapes au dessus en une commande en exécutant:

```shell script
$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus
```

Vous devriez maintenant être capable d'accéder à l'interface web de Prometheus à http://localhost:9090/.

## Node Exporter {#node-exporter}

Nous allons installer Node Exporter pour organiser les métriques du serveur qui vont être remontées dans le tableau de bord.
Veuillez vérifier le numéro de la dernière version [ici](https://github.com/prometheus/node_exporter/releases/) et mettez la commande à jour.
Au moment de l'écriture de l'article la dernière version est `1.1.2`.

### Installer Node Exporter {#install-node-exporter}

Télécharger la dernière version.

```shell script
$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz
```

Extraire l'archive que vous venez de télécharger. Cela créera un dossier appelé `node_exporter-1.1.2.linux-amd64`.

```shell script
$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz
```

Ensuite nous copions le binaire dans notre répertoire local d'application and l'assignons à notre utilisateur superviseur.

```shell script
# copy binary
$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin

# set ownership
$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter
```

Nous pouvons maintenant faire un peu de ménage et supprimer les paquets téléchargés et extraits.

```shell script
$ rm -rf node_exporter*
```

### Créer un Service Systemd  {#create-a-systemd-service}

De la même façon que Prometheus nous voulons que Node Exporter fonctionne comme un service aussi.
Créez un service systemd avec l'éditeur de votre choix.

```shell script
$ sudo nano /etc/systemd/system/node_exporter.service
```

Et copiez y la configuration suivante.

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

Nous allons maintenant activer et démarrer le service avec cette simple ligne de commande.

```shell script
$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter
```

### Ajouter Scrape Job pour Node Exporter {#add-scrape-job-for-node-exporter}

Le Node Exporter est maintenant actif et opérationnel mais nous devons dire à Prometheus d'organiser (scrape) ses données.
Nous allons ouvre le fichier de configuration, _prometheus.yml_, encore une fois avec l'éditeur de votre choix.

```shell script
$ sudo nano /etc/prometheus/prometheus.yml
```

Et à la toute fin du fichier nous allons ajouter un scrape config de plus.
Coller le contenu suivant et sauvegarder le ficher.

```yaml
  - job_name: 'node_exporter'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9100']
```

L'application des changements de configuration au redémarrage du service Prometheus est requise.

```shell script
$ sudo systemctl restart prometheus.service 
```

Les métriques de votre serveur sont maintenant organisées (scraped) et peuvent être trouvées dans l'interface web Prometheus.
Nous allons en avoir besoin plus tard pour notre tableau de bord.

## Configuration de Grafana {#grafana-setup}

Nous pouvons voir nos métriques dans l'interface web, mais ce n'est pas la façon dont on veut les superviser.
On les veut belles et propres. C'est là que Grafana entre en jeu.

### Installer Grafana {#install-grafana}

Veuillez vérifier quelle est la dernière version de Grafana [avec ce lien](https://grafana.com/grafana/download?platform=linux). 
Vous pouvez soit changer le numéro de version dans les commandes suivantes ou copier les commandes d'installation directement depuis le lien.
Au moment de l'écriture de l'article la dernière version est `7.5.1`.

```shell script
$ sudo apt-get install -y adduser libfontconfig1
$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb
$ sudo dpkg -i grafana_7.5.1_amd64.deb
```

Le paquet est fourni avec un service `systemd` intégré que nous allons configurer et démarrer exactement comme le service Prometheus.

```shell script
$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server
```

### Accéder à l'interface web {#accessing-the-web-interface}
 
Nous allons être capable d'ouvrir l'interface web Grafana à http://localhost:3000/.
Les identifiants de session de Grafana par défaut sont:
User: `admin`  
Password: `admin`  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-home.png')} />
</div>

### Configurer les Datasource {#configuring-the-datasource}

Veuillez cliquer sur la roue des paramètres dans le menu et choisissez source de données (datasource).
Dans la fenêtre suivante cliquez "ajouter Datasource" et sélectionnez "Prometheus".

Dans le formulaire suivant vous n'avez pas besoin de changer quoi que ce soit excepté l'URL.
Entrez `http://localhost:9090/` et cliquez `Save and Test`.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-datasource.png')} />
</div>

### Importer le tableau de bord {#importing-the-dashboard}
 
Veuillez cliquer sur le bouton `Plus` dans le menu principal de navigation et sélectionnez `import`.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-import.png')} />
</div>  

Nous allons utiliser le [Tableau de bord Hydration](https://grafana.com/grafana/dashboards/14158) pour le charger vous entrez l'id `14158` et cliquez sur le bouton `Load`.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-import-options.png')} />
</div>  

Il n'y a pas besoin de beaucoup de configuration ici, assurez vous juste que Prometheus est utilisé comme source de donnée.
Vous pouvez maintenant terminer l'importation.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-dashboard.png')} />
</div>  

Vous devriez maintenant voir votre tableau de bord directement.
Si certains panneaux sont vides, assurez vous que la sélection au dessus des panneaux est comme suit:
* `Chain Metrics`: Substrate  
* `Chain Instance`: localhost:9615  
* `Server Job`: node_exporter  
* `Server Host`: localhost:9100  
