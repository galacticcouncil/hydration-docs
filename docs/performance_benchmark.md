---
id: performance_benchmark
title: Performance benchmark
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can make sure that your machine satisfies the [required technical specifications](/node_setup#00-required-technical-specifications) by running a performance benchmark. To do so, follow the steps below:

```bash
# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable
$ cd HydraDX-node/

# Prepare for running the benchmark
## Install Rust following https://rustup.rs
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

## Configure Rust
$ ./scripts/init.sh
$ rustup default nightly

## Install additional libraries
$ apt install python3-pip
$ apt install clang

# Run the benchmark
$ ./scripts/check_performance.sh
```

After the benchmark executes you should see an output similar to the following:

```
         Pallet          |   Time comparison (µs)    |  diff* (µs)   |   diff* (%)    |            |   Rerun
amm                      |     773.00 vs 680.00      |      93.00    |      12.03     |     OK     |
exchange                 |     804.00 vs 720.00      |      84.00    |      10.44     |     OK     |
transaction_multi_payment|     218.00 vs 198.00      |      20.00    |       9.17     |     OK     |

Notes:
* - diff means the difference between reference total time and total benchmark time of current machine
* - if diff > 10% of ref value -> performance is same or better
* - If diff < 10% of ref value -> performance is worse and might not be suitable to run node ( You may ask node devs for further clarifications)
```

You can see the difference in the performance between your machine and the minimum required setup in the column **diff* (%)**. If all three values in this column are positive, your machine should be suitable to run a HydraDX validator node. If any of the values is below *-10 %*, we do not recommend running a HydraDX node.

Join us at Discord if you would like to discuss your benchmark results, our community is always happy to help.
