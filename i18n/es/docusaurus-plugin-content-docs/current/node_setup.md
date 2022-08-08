---
id: node_setup
title: Configurar un nodo HydraDX
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Esta sección lo guía a través del proceso de configuración y ejecución de un nodo HydraDX.

## 00 Especificaciones técnica requeridas {#00-required-technical-specifications}

Las siguientes especificaciones técnicas son necesarias como mínimo para ejecutar un nodo validador HydraDX:

* OS: Ubuntu 20.04
* CPU: Intel Core i7-7700K @ 4.5Ghz (o rendimiento equivalente de un solo núcleo)
* Memory: 64GB RAM
* Storage: SSD NVMe con una capacidad de al menos 200 GB (la huella de datos aumentará con el tiempo)

:::note

Estos son los requisitos técnicos mínimos que han sido verificados por el equipo. ¿Quiere asegurarse de que su máquina tenga recursos suficientes para ejecutar un nodo? Ejecute una [evaluación comparativa de rendimiento](/performance_benchmark) para averiguarlo.

:::


## 01 Compruebe si el reloj de su sistema está sincronizado {#01-check-whether-your-system-clock-is-synchronized}

Antes de ejecutar un nodo, debe asegurarse de que el reloj de su sistema esté sincronizado; esto es importante porque los validadores trabajan juntos. En Ubuntu 20.04, el reloj del sistema debería estar sincronizado de forma predeterminada. Para verificar, ejecute el siguiente comando y verifique el resultado:

```bash
$ timedatectl | grep "System clock"
System clock synchronized: yes
```

Si el resultado es diferente, puede instalar NTP manualmente y verificar nuevamente que el reloj de su sistema esté sincronizado:

```bash
$ apt install ntp
$ ntpq -p
```

## 02 Ajusta la configuración de tu firewall {#02-adjust-your-firewall-settings}

El puerto `30333` se utiliza para conexiones peer-to-peer  con otros nodos. Si está ejecutando el nodo como validador, le recomendamos que configure un firewall y lo configure para exponer solo este puerto para conexiones remotas.

Si *no* está ejecutando el nodo como validador, también puede considerar exponer `9944` (para conexiones de websocket RPC con aplicaciones externas) y `9933` (para solicitudes HTTP a su nodo). Puede usar el puerto `9944` para conectarse a su nodo con [Polkadot/apps](/polkadotjs_apps_local).

## 03 Descarga o crea un binario {#03-download-or-build-a-binary}

Puede descargar un archivo binario de nuestra última versión en [github](https://github.com/galacticcouncil/HydraDX-node/releases).

Alternativamente, puede construir el binario desde la fuente:

```bash
# Install dependencies
$ curl https://getsubstrate.io -sSf | bash -s -- --fast

# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Build the binary
$ cd HydraDX-node/
$ cargo build --release
```

Si construyó el binario siguiendo los pasos anteriores, la ruta a su binario es:
```
target/release/hydra-dx
```

## 04 Corre el Binario {#04-run-the-binary}

Puede ejecutar el binario ejecutando el siguiente comando:

```bash
$ {PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator
```

:::note
Los nodos de validación requieren toda la base de datos de la cadena. Si ejecutó el nodo antes sin el indicador `--validator`, necesitará resincronizar la base de datos purgando la cadena antes de lanzar el nodo.
```bash
$ {PATH_TO_YOUR_BINARY} purge-chain --chain lerna
```

:::

Además de la ruta a su binario (ver arriba), debe especificar un nombre de nodo que se utilizará para identificar su nodo en [Telemetry](https://telemetry.hydradx.io/#/HydraDX%20Snakenet%20Gen2) donde puede encontrar una lista de todos los nodos que se ejecutan en HydraDX Snakenet.

## 05 Ejecutando con systemd {#05-running-with-systemd}

Para asegurarse de que su nodo se inicie automáticamente cuando su máquina se reinicia, recomendamos ejecutar el nodo HydraDX como un proceso systemd. Para hacerlo, cree el siguiente archivo e inserte el contenido mientras reemplaza las variables indicadas como `{VARIABLE}`:

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
Se recomienda configurar RestartSec porque retrasa el reinicio del nodo en caso de un bloqueo. Esto permite que los datos no persistentes (como los votos de consenso) se escriban en el disco antes de que se reinicie el nodo. Reiniciar el nodo inmediatamente después de que se haya bloqueado puede causar equívocos o doble firma, lo que eventualmente resulta en una reducción.
:::

Después de crear el archivo de configuración, puede interactuar con su nodo validador HydraDX como un proceso del sistema:

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

¡Su nodo HydraDX ahora está configurado y funcionando!
