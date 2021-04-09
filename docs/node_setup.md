---
id: node_setup
title: Set up a validator node
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This section walks you through the process of setting up and running a HydraDX node.

:::warning

Running a validator node requires a certain technical skillset needed for the proper setup of the node, and for guaranteeing its uptime. If you are not sure what you are doing here, we recommend that you [nominate your HDX](/start_nominating) to an experienced validator instead. By doing so, you protect yourself and your nominators against an involuntary loss of funds.

:::

## 00 Required technical specifications {#00-required-technical-specifications}

The following technical specifications are required as a minimum for running a HydraDX validator node: 

* OS: Ubuntu 20.04
* CPU: Intel Core i7-7700K @ 4.5Ghz (or equivalent single core performance)
* Memory: 64GB RAM
* Storage: NVMe SSD with a capacity of at least 200GB (the data footprint will grow over time)

:::note

These are the minimum technical requirements which have been verified by the team. Want to make sure that your machine has sufficient resources to run a node? Run a [performance benchmark](/performance_benchmark) to find out.

:::


## 01 Check whether your system clock is synchronized {#01-check-whether-your-system-clock-is-synchronized}

Before running a node, you should make sure that your system clock is synchronized - this is important because validators work together. On Ubuntu 20.04 the system clock should be synchronized by default. To verify, run the following command and check the output:

```bash
$ timedatectl | grep "System clock"
System clock synchronized: yes
```

If the output is different, then you can install NTP manually and verify again that your system clock is synchronized:

```bash
$ apt install ntp
$ ntpq -p
```

## 02 Adjust your firewall settings {#02-adjust-your-firewall-settings}
Port `30333` is used for peer-to-peer connections with other nodes. If you are running the node as a validator, we recommend that you set up a firewall and configure to expose only this port for remote connections.

If you are *not* running the node as a validator, you can also consider exposing `9944` (for RPC websocket connections with external apps) and `9933` (for HTTP requests to your node). You can use port `9944` to connect to your node with [Polkadot/apps](/polkadotjs_apps_local).

## 03 Download or build a binary {#03-download-or-build-a-binary}
You can download a binary of our latest release on [github](https://github.com/galacticcouncil/HydraDX-node/releases).

Alternatively, you can build the binary from source:

```bash
# Install dependencies
$ curl https://getsubstrate.io -sSf | bash -s -- --fast

# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Build the binary
$ cd HydraDX-node/
$ cargo build --release
```

If you built the binary following the steps above, the path to your binary is:
```
target/release/hydra-dx
```

## 04 Run the binary {#04-run-the-binary}
You can run the binary by executing the following command:

```bash
$ {PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator
```

:::note

Validator nodes require the whole chain database. If you ran the node before without the `--validator` flag, you will need to resync the database by purging the chain before launching the node.
```bash
$ {PATH_TO_YOUR_BINARY} purge-chain --chain lerna
```

:::

Besides the path to your binary (see above), you need to specify a node name which will be used to identify your node in [Telemetry](https://telemetry.polkadot.io/#list/HydraDX%20Snakenet) where you can find a list of all nodes running on HydraDX Snakenet.

## 05 Running with systemd {#05-running-with-systemd}
To make sure that your node is automatically started when your machine reboots, we recommend running the HydraDX node as a systemd process. To do so, create the following file and insert the content while replacing the variables indicated as `{VARIABLE}`:

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
Setting RestartSec is recommended because it delays the restart of the node in the case of a crash. This allows for any unpersisted data (such as consensus votes) to be written to the disk before the node is restarted. Restarting the node immediately after it has crashed can cause equivocation or double signing, eventually resulting in slashing.
:::

After creating the configuration file you can interact with your HydraDX validator node as a system process:
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

Your HydraDX node is now configured and running!

You can now complete the last steps to [start validating](/start_validating).
