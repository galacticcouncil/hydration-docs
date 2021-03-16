---
id: node_setup
title: Setup validator node
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Initial setup

### Requirements

The most common way to run a validator is on a cloud server running Linux. You may choose whatever VPS provider that you prefer and we recommend using Linux as operating system, but you can choose whatever operating system you are comfortable with. For this tutorial we will be using **Ubuntu 20.04**, but the instructions should be similar for other platforms.

#### Recommended hardware
We recommend using at least **Intel Core i7-7700K CPU with 64GB of RAM and an NVMe SSD with capacity 100-200GB** *(this capacity should be ok for next 6-months, but it should be monitored and adjusted as required)*. This are not *minimum requirements*, however you should be aware that you might hit performance issues if you decide to use less performant hadware.

#### Install and configure network time protocol (NTP) client

NTP is a networking protocol designed to synchronize the clocks of computers over a network. NTP allows you to synchronize the clocks of all the systems within the network. Currently it is required that validator's local clocks stay reasonably in sync, so you should be running NTP or a similar service. You can check whether you have the NTP client by running:

*On ubuntu 20.04 NTP Client should be installed by default.*
```bash
timedatectl
```
If NTP is installed and running, you should see `System clock synchronized: yes` (or a similar message). If you do not see it, you can install it by executing:
```bash
sudo apt install ntp
```
ntpd will be started automatically after install. You can query ntpd for status information to verify that everything is working:
```bash
sudo ntpq -p
```

#### Firewal requirements 

* `30333` *allowed* - p2p port have to be exposed publicly to allow other nodes to connect to your node
* `9944`  *optional* - rpc websocket port, expose this port only if want to allow external apps connect to your node (e.g https://polkadot.js.org/apps/) 
* `9933`  *optional* - http rpc port, expose this port only if want to allow external http req to your node

:::caution
We highly recommend **TO NOT** expose RPC ports (`9944, 9933`) publicly if you are running node as validator. This ports can be abused by 3-rd party to manipulate with your node and cause slashing. 
:::



### Getting binaries 

#### Download binaries

You can download released binaries from our [github](https://github.com/galacticcouncil/HydraDX-node/releases).

#### Building binary from source

:::important
Please use `git tags` with lates version *(e.g v2.0.0)* if you are building binary from souce.
:::
```bash
git clone git@github.com:galacticcouncil/HydraDX-node.git
cd HydraDX-node/
git checkout v2.0.0 #this is latest release in the time of writing this doc. Please check github for latest release tag before running this cmd

curl https://getsubstrate.io -sSf | bash -s -- --fast

cargo build --release
```

##### Running binary
```bash
./target/release/hydra-dx --chain lerna --name your-validator-name --validator
```

:::important
`--name` will be dislayed in [Telemetry](https://telemetry.polkadot.io/#list/HydraDX%20Snakenet). Telemetry show all nodes in HydraDX network. It is important to use unique name so you can identify your node.
:::

### Running validator node

#### Systemd
You can run your validator as a systemd process so that it will automatically restart on server reboots or crashes.

First create file `hydradx-validator.service` in `/etc/systemd/system/`
```bash
touch /etc/systemd/system/hydradx-validator.service
```

whith content:
:::important
replace `{...}` with correct values e.g `User={YOUR_SYSTEM_USER}` -> `User=Hydra`
:::

```
[Unit]
Description=HydraDX validator

[Service]
Type=exec
User={YOUR_SYSTEM_USER}
ExecStart={PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_TELEMETRY_NAME} --validator
Restart=always
RestartSec=120

[Install]
WantedBy=multi-user.target
```
:::caution
It's recommended to delay the restart of a node with `RestartSec` in the case of node crashes. It's possible that when a node crashes, consensus votes in GRANDPA aren't persisted to disk. In this case, there is potential to equivocate when immediately restarting. What can happen is the node will not recognize votes that didn't make it to disk, and will then cast conflicting votes. Delaying the restart will allow the network to progress past potentially conflicting votes, at which point other nodes will not accept them.
:::

Enable to autostart on bootup:
```bash
systemctl enable hydradx-validator.service
```

Start your validator manually:
```bash
systemctl start hydradx-validator.service
```

You can check that it's working with:
```bash
systemctl status hydradx-validator.service
```

You can see logs with `journalctl`:
```bash
journalctl -f -u hydradx-validator.service
```
