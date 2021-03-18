---
id: performance_benchmark
title: Performance benchmark
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can make sure that your machine satisfies the [required technical specifications](/node_setup#00-required-technical-specifications) by running a performance benchmark. To do so, follow the steps below:

```bash
# Fetch source and switch to latest release
$ git clone https://github.com/galacticcouncil/HydraDX-node.git
$ cd HydraDX-node/
$ git checkout v2.0.0

# Prepare for running the benchmark
$ ./scripts/init.sh
$ rustup default nightly

# Run the benchmark
$ ./scripts/check_performance.sh
```

After the benchmark executes you should see an output similar to the following:

```
         Pallet          |   Time comparison (µs)    |     diff*     |            |   Rerun
amm                      |    1066.00 vs 1045.80     |      20       |     OK     |
exchange                 |    1105.00 vs 1049.10     |      55       |     OK     |
transaction_multi_payment|     289.00 vs 279.96      |       9       |     OK     |
```

If the values in the `diff` field are positive in all three cases, then your machine is suitable to run a HydraDX validator node.

Join us at Discord if you would like to discuss your benchmark results, our community is always happy to help.
