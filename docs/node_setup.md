---
id: node_setup
title: Set up a HydraDX node
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This section walks you through the process of setting up and running a HydraDX node.

:::warning

Running a validator node requires a certain technical skillset needed for the proper setup of the node, and for guaranteeing its uptime. If you are not sure what you are doing here, we recommend that you [nominate your HDX](/start_nominate) to an experienced validator instead. By doing so, you protect yourself and your nominators against an involuntary loss of funds.

:::

### 00 Required technical specifications

The following technical specifications are required as a minimum for running a HydraDX validator node: 

* OS: Ubuntu 20.04
* CPU: Intel Core i7-7700K (or equivalent single core performance)
* Memory: 64GB RAM
* Storage: NVMe SSD with a capacity of at least 200GB (the data footprint will grow over time)

:::note

These are the minimum technical requirements which have been verified by the team. Want to make sure that your machine has sufficient resources to run a node? Run a [performance benchmark](/performance_benchmark) to find out.

:::


### 01 Check whether your system clock is synchronized

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

### 02 Adjust your firewall settings
Port `30333` is used for peer-to-peer connections with other nodes. If you are running the node as a validator, this is the only port we recommend exposing in your firewall.

If you are *not* running the node as a validator, you can also consider exposing `9944` (for RPC websocket connections with external apps) and `9933` (for HTTP requests to your node).

### 03 Download or build a binary
You can download a binary of our latest release on [github](https://github.com/galacticcouncil/HydraDX-node/releases).

Alternatively, you can build the binary from source:

```bash
# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Install Rust and Substrate
$ curl https://getsubstrate.io -sSf | bash -s -- --fast

# Build the binary
$ cd HydraDX-node/
$ cargo build --release
```

If you built the binary following the steps above, the path to your binary is:
```
target/release/hydra-dx
```

### 04 Run the binary
You can run the binary by executing the following command:

```bash
$ {PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator
```

Besides the path to your binary (see above), you need to specify a node name which will be used to identify your node in [Telemetry](https://telemetry.polkadot.io/#list/HydraDX%20Snakenet) where you can find a list of all nodes running on HydraDX Snakenet.

### 05 Running with systemd
To make sure that your node is automatically started when your machine reboots, we recommend running the HydraDX node as a systemd process. To do so, create the following file and insert the content while replacing the variables indicated as `{VARIABLE}`:

```bash
$ touch /etc/systemd/system/hydradx-validator.service
```

```
[Unit]
Description=HydraDX validator

[Service]
Type=exec
User={YOUR_SYSTEM_USER}
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

You can now complete the last steps for [becoming a validator](start_validating).
