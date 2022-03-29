

This is a step-by-step how-to so you can get your HydraDX collator up and running. In this guide, we use Ubuntu 20.04 LTS

## Create a technical `hydra` user and add it to Sudoers

```bash
sudo adduser hydra
sudo usermod -aG sudo hydra
su - hydra
```

## Download and configure the `hydradx` binary

Pick a release, for instance, let's use the latest release to date (11.2.1) from our assets repository:

```bash
wget https://github.com/galacticcouncil/HydraDX-node/releases/download/v11.2.1/hydra-dx
sudo cp hydra-dx /usr/local/bin
sudo chmod +x hydra-dx
sudo chown hydra:hydra /usr/local/bin/hydra-dx

```

## Command to run your collator

Best is to run your collator as a `service` using `systemctl`. To do so, let's first create a bash script, `run-node.sh`, to run our binary with its necessary parameters. Replace with your own values:

```bash
#!/bin/bash
hydradx --name YOUR_COLLATOR_NAME --base-path /path/to/base-path --prometheus-external --node-key-file ~/.node-config/node-key --collator -- --execution wasm --name YOUR_COLLATOR_NAME --base-path /path/to/base-path --telemetry-url "wss://telemetry.hydradx.io:9000/submit/ 0"
```

Note that `--prometheus-external` is optional, but highly advisable so you can be able to export prometheus metrics and monitor your node's health through Grafana. For more details about monitoring, please visit [this link](https://docs.hydradx.io/node_monitoring/).

Depending on your setup, you might also want to override certain parameters like the websocket, rpc or your node p2p port. Please use `hydra-dx --help` for more information about the available options.

Save your `run-node.sh` file and put it where it belongs with the necessary permissions and ownership:

```bash
sudo cp run-node.sh /usr/local/bin
sudo chmod +x run-node.sh
sudo chown hydra:hydra /usr/local/bin/run-node.sh
```

## Service configuration

To be able to run your node as a service, create a file, namely `hydradx-collator.service` under `/etc/systemd/system/hydradx-collator.service`:

```bash
sudo vim /etc/systemd/system/hydradx-collator.service
```

Then paste the following:

```bash
[Unit]
Description=hydradx validator
[Service]
Type=exec
User=hydra
ExecStart=run-node.sh
Restart=always
RestartSec=120
[Install]
WantedBy=multi-user.target
```

After saving your file, run the following commands to start your node:

```bash
sudo systemctl daemon-reload
sudo systemctl start hydradx-collator.service
```

And voilà ! Your node should be up and running now. Make sure your `hydra` user has the necessary permissions to access your `base-path` and key file.

If you need to troubleshoot your running service, you can use the `journalctl` with `-f` option for tailing command as follows:

```bash
journalctl -u hydradx-collator -f 
```

## Inject your keys!

We're nearly done! Once your node is running, and you made sure that it is connected to the network, you can inject your keys. First create a file, `inject.json` and paste the following while making sure to replace `SECRET_SEED` and `PUBLIC_KEY(HEX)` with your own values:

``` json
{
  "jsonrpc":"2.0",
  "id":1,
  "method":"author_insertKey",
  "params": [
    "aura",
    "SECRET_SEED",
    "PUBLIC_KEY(HEX)"
  ]
}
```

Last step, run the following command and you're done!

```bash
curl http://localhost:9933 -H "Content-Type:application/json;charset=utf-8" -d "@./inject.json"
```



Check your node logs, and make sure it is properly syncing. Congrats! You're officially a ssssnek!