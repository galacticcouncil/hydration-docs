---
id: node_monitoring
title: Monitoreo de nodo
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 

En este capítulo, lo guiaremos a través de la configuración del monitoreo local para su nodo validador.

## Pre-requisitos {#prerequisites}

Debe tener su [Nodo collator](/collator_setup) en funcionamiento.  
Esta guía se probó en la versión Ubuntu 20.04 LTS.

## Configuración de Prometheus {#prometheus-setup}

En el primer paso, configuraremos el servidor Prometheus.

### Usuario y directorios {#user-and-directories}

Creamos un usuario solo para fines de monitoreo que no tiene un directorio de inicio y no se puede usar para iniciar sesión.

```shell script
$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus
```

Luego creamos directorios para el ejecutable y el archivo de configuración.

```shell script
$ sudo mkdir /etc/prometheus
$ sudo mkdir /var/lib/prometheus
```

Cambie la propiedad de los directorios para restringirlos a nuestro nuevo usuario de monitoreo.

```shell script
$ sudo chown -R prometheus:prometheus /etc/prometheus
$ sudo chown -R prometheus:prometheus /var/lib/prometheus
```

### Instalar Prometheus {#install-prometheus}

Consulte el número de versión más reciente de Prometheus en [GitHub release page](https://github.com/prometheus/prometheus/releases/).  
En el momento de escribir este artículo es la v2.25.2. Inserte la última versión de lanzamiento en los siguientes comandos.

```shell script
# download prometheus
$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz

# unpack the binaries
$ tar xfz prometheus-*.tar.gz

# enter the unpacked directory
$ cd prometheus-2.25.2.linux-amd64
```

Ahora copie los binarios en la carpeta local.

```shell script
$ sudo cp ./prometheus /usr/local/bin/
$ sudo cp ./promtool /usr/local/bin/
```

Ahora necesitamos asignar esos binarios a nuestro usuario recién creado.

```shell script
$ sudo chown prometheus:prometheus /usr/local/bin/prometheus
$ sudo chown prometheus:prometheus /usr/local/bin/promtool
```

A continuación, copiaremos la interfaz web y los ajustes preestablecidos de configuración..

```shell script
$ sudo cp -r ./consoles /etc/prometheus
$ sudo cp -r ./console_libraries /etc/prometheus
```

Y Puede que ya lo hayas adivinado, pero también estamos cambiando la propiedad de esos directorios.

```shell script
$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles
$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries
```

Ahora tenemos todo lo que necesitamos del paquete descargado, así que daremos un paso atrás y realizaremos una limpieza.

```shell script
$ cd .. && rm -rf prometheus*
```

Creemos un archivo de configuración `YAML` para Prometheus con el editor de su elección (nano / vim / pico).

```shell script
$ sudo nano /etc/prometheus/prometheus.yml
```

Nuestra configuración se divide en tres secciones:

* `global`: establece los valores predeterminados para `scrape_interval` y el intervalo de ejecución de reglas con `Evaluation_interval´
* `rule_files`: especifica los archivos de reglas que el servidor Prometheus debe cargar
* `scrape_configs`: aquí es donde configuras los recursos de monitoreo

Lo mantendremos muy básico y terminaremos con algo como esto:

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

El primer trabajo de scrape exporta datos del propio Prometheus, el segundo exporta las métricas del nodo Hydration.
Ajustamos el `scrape_interval` de ambos trabajos para obtener estadísticas más detalladas. Esto anula los valores globales.
El `target` en` static_configs` establece dónde se ejecutan los exportadores, aquí nos ceñimos a los puertos predeterminados.

Después de guardar la configuración, cambiaremos, una vez más, la propiedad.

```shell script
$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml
```

### Iniciando Prometheus {#starting-prometheus}

Para que Prometheus se inicie automáticamente y se ejecute en segundo plano, usaremos `systemd`.
Cree una nueva configuración (nuevamente con el editor de su elección):

````shell script
$ sudo nano /etc/systemd/system/prometheus.service
````

Pegue la siguiente configuración y guarde el archivo.

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

A continuación realizaremos los siguientes tres pasos:
`systemctl deamon-reload` carga nuevas configuraciones y actualiza las existentes
`systemctl enable` activa nuestro nuevo servicio
`systemctl start` desencadena la ejecución del servicio

Puede realizar los pasos anteriores en un comando ejecutando:

```shell script
$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus
```

Ahora debería poder acceder a la interfaz web de Prometheus en http://localhost:9090/.

## Exportador de nodor {#node-exporter}

Instalaremos Node Exporter para extraer las métricas del servidor que se utilizarán en el panel.
Compruebe el número de versión de la última versión. [Aqui](https://github.com/prometheus/node_exporter/releases/) y actualice el comando.  
En el momento de redactar este artículo, la última versión estaba `1.1.2`.

### Instalar Node Exporter {#install-node-exporter}

Descargue la última versión.

```shell script
$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz
```

Desempaquete el archivo que acaba de descargar. Esto creará una carpeta llamada `node_exporter-1.1.2.linux-amd64`.

```shell script
$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz
```

A continuación, copiamos el binario en nuestro directorio de aplicaciones local y lo asignamos a nuestro usuario de monitoreo.

```shell script
# copy binary
$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin

# set ownership
$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter
```

Ahora podemos hacer una limpieza y eliminar el paquete descargado y descomprimido.

```shell script
$ rm -rf node_exporter*
```

### Crear un servicio Systemd {#create-a-systemd-service}

Al igual que prometheus, queremos que Node Exporter también se ejecute como un servicio.
Cree un servicio systemd con su editor de elección.

```shell script
$ sudo nano /etc/systemd/system/node_exporter.service
```

Y pega la siguiente configuración en él.

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

Ahora activaremos e iniciaremos el servicio con este resumen.

```shell script
$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter
```

### Añade Scrape Job para Node Exporter {#add-scrape-job-for-node-exporter}

El Exportador de nodos ya está en funcionamiento, pero debemos decirle a Prometheus que extraiga sus datos.
Abriremos el archivo de configuración una vez más con el editor que elijamos.

```shell script
$ sudo nano /etc/prometheus/prometheus.yml
```

Y en la parte inferior del archivo, agregaremos una configuración de scrape más.
Pegue el siguiente contenido y guarde el archivo.

```yaml
  - job_name: 'node_exporter'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9100']
```

Para aplicar la configuración de cambios, es necesario reiniciar el servicio Prometheus.

```shell script
$ sudo systemctl restart prometheus.service 
```

Las métricas de su servidor ahora se raspan y se pueden encontrar en la interfaz web de Prometheus.
Los necesitaremos más tarde para nuestro tablero.

## Grafana Configuración {#grafana-setup}

Podemos ver nuestras métricas en la interfaz web, pero no es así como queremos monitorearlas.
Lo queremos bonito y bonito. Ahí es donde entra en juego Grafana.

### Instalar Grafana {#install-grafana}

Compruebe cuál es la última versión de Grafana [con este link](https://grafana.com/grafana/download?platform=linux).  
Puede cambiar el número de versión en los siguientes comandos o copiar los comandos de instalación directamente desde el enlace.
En el momento de escribir este artículo, la última versión era "7.5.1".

```shell script
$ sudo apt-get install -y adduser libfontconfig1
$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb
$ sudo dpkg -i grafana_7.5.1_amd64.deb
```

El paquete viene con un servicio `systemd` incorporado que configuraremos e iniciaremos como el servicio Prometheus.

```shell script
$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server
```

### Acceder a la interfaz web {#accessing-the-web-interface}

Podremos abrir la interfaz web de Grafana en http://localhost:3000/.  
El inicio de sesión predeterminado de Grafana es: 
User: `admin`  
Password: `admin`  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-home.png')} />
</div>

### Configuración de la fuente de datos {#configuring-the-datasource}

Haga clic en el engranaje de configuración en el menú y seleccione fuentes de datos.
En la siguiente ventana, haga clic en "Agregar fuente de datos" y seleccione "Prometheus"..  

En el siguiente formulario, no necesita cambiar nada más que la URL.
Colocar`http://localhost:9090/` y clic `Save and Test`.  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-datasource.png')} />
</div>

### Importando the Dashboard {#importing-the-dashboard}

Por favor presione el bonton `Plus`en la navegacion principal y selecciona `import`.  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-import.png')} />
</div>  

Nosotros usaremos el [Hydration Dashboard](https://grafana.com/grafana/dashboards/14158) y para cargarlo, simplemente ingrese el id `14158` y presione el botón `Load`.  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-import-options.png')} />
</div>  

No necesita mucha configuración aquí, solo asegúrese de que Prometheus se use como fuente de datos.
Ahora puede finalizar la importación.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-dashboard.png')} />
</div>  

Ahora debería ver su panel de control de inmediato.
Si algunos paneles están vacíos, asegúrese de que su selección sobre los paneles sea así:
* `Chain Metrics`: Substrate  
* `Chain Instance`: localhost:9615  
* `Server Job`: node_exporter  
* `Server Host`: localhost:9100  
