# node\_setup

{% hint style="warning" %}
It is recommended to use **Ubuntu 20.04**
{% endhint %}

Setting up an environment:

```text
sudo apt-get updatecurl https://getsubstrate.io -sSf | bash -s -- --fast source ~/.cargo/env
```

Clone repo and build the node:

```text
git clone https://github.com/galacticcouncil/HydraDX-node.gitcd HydraDX-nodecargo build --release
```

If you get an error that `git` is not installed on your system, install it:

```text
sudo apt install git
```

To run a benchmark Python 3.8+ is required.‌

Installing Python 3.9:

```text
sudo apt-get install software-properties-commonsudo add-apt-repository ppa:deadsnakes/ppasudo apt-get updatesudo apt-get install python3.9
```

If you have problems installing via `apt` you can compile `python3.9` from source according to the [guide](https://linuxize.com/post/how-to-install-python-3-9-on-ubuntu-20-04/#installing-python-39-on-ubuntu-from-source).‌

If you have different versions of Python installed and the benchmark runs on the old one by default, you can specify which version to use to run it:

```text
sed -i "s|python3 |python3.9 |g " ./scripts/check_performance.sh
```

Run the benchmark:

```text
./scripts/check_performance.sh
```

If you get an error `Toolchain ...... Nightly toolchain required`:

```text
git fetchgit checkout bench-perf-update./scripts/init.shrustup default nightly./scripts/check_performance.sh
```

After a few minutes you will get a result like:

```text
HydraDX Node Performance check ...Running benchmarks - this may take a while...Results:         Pallet          |   Time comparison (µs)    |     diff*     |amm                      |     1030.0 vs 1035.2      |      -5       |     OKexchange                 |    1108.08 vs 1109.01     |       0       |     OKtransaction_multi_payment|      281.0 vs 277.87      |       3       |     OK
```

If all 3 results are OK, your server has successfully passed the test and is ready to start the node.

At this stage you can stop until the HydraDX team publishes information about the upcoming testnet.

As a test, you can run a `stakenet` node in the `lerna` chain.

I recommend using tmux or systemd

```text
./target/release/hydra-dx --chain lerna
```

If you want to set a **name** for your node \(by default, a random one is generated on every startup\), use the --name key:

```text
./target/release/hydra-dx --chain lerna --name "User #NodeBook"
```

> I will really appreciate it if you include the **\#NodeBook** hashtag in the node name :\)

The list of nodes in the network can be found [**here**](https://telemetry.polkadot.io/#list/HydraDX%20Snakenet).‌

If your node is running "strange", you can restart it and display the logs to identify problems:

```text
RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/hydra-dx -lruntime=debug  --chain lerna
```

