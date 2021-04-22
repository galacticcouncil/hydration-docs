---
id: performance_benchmark
title: Benchmark de desempeño
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Puede asegurarse de que su máquina cumpla con las [especificaciones técnicas requeridas](/node_setup#00-required-technical-specifications) ejecutando una evaluación comparativa de rendimiento. Para hacerlo, siga los pasos a continuación:

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

Después de que se ejecute benchmark, debería ver un resultado similar al siguiente:

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

Si los valores en el campo `diff` son positivos en los tres casos, entonces su máquina es adecuada para ejecutar un nodo validador HydraDX.

Únase a nosotros en Discord si desea discutir sus resultados de referencia, nuestra comunidad siempre estará feliz de ayudar.