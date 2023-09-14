---
id: performance_benchmark
title: 基本性能测试
---

import useBaseUrl from '@docusaurus/useBaseUrl';

您可以通过运行测试程序来确定自己的计算机是否符合 **[基本性能要求](/collator_setup#technical-specifications)** 。 请运行一下代码：

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

在测试程序运行完毕后，您可以看到与以下类似的输出结果：

```
         Pallet          |   Time comparison (µs)    |  diff* (µs)   |   diff* (%)    |            |   Rerun
amm                      |     773.00 vs 680.00      |      93.00    |      12.03     |     OK     |
exchange                 |     804.00 vs 720.00      |      84.00    |      10.44     |     OK     |
transaction_multi_payment|     218.00 vs 198.00      |      20.00    |       9.17     |     OK     |

Notes:
- in the diff fields you can see the difference between the reference benchmark time and the benchmark time of your machine
- if diff is positive for all three pallets, your machine covers the minimum requirements for running a HydraDX node
- if diff deviates by -10% or more for some of the pallets, your machine might not be suitable to run a node
```

您可以在 **diff* (%)** 列中看到您的计算机绩效参数与启动节点所需最低要求之间的差异。 如果此列的三个数值均为正数，则表示您的计算机可以正常运行 HydraDX 验证节点。 三个数值，如果任何一个数值低于 *-10％* ，则不建议使用该机运行 HydraDX 节点。

如果您想讨论基本性能测试结果，请加入我们的 Discord ，社区很乐意提供您！

*（如发现翻译错误，请电报联系 @PDMCnode）*
