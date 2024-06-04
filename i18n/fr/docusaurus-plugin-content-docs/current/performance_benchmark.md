---
id: performance_benchmark
title: Benchmark de performance
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Vous pouvez vous assurer que votre machine correspond aux [spécifications techniques requises](/collator_setup#technical-specifications) en exécutant un benchmark de performance. Pour ce faire, suivez les étapes ci-dessous:

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

Après que le benchmark s'exécute, vous devriez voir une sortie similaire à ce qui suit:

```
         Pallet          |   Time comparison (µs)    |  diff* (µs)   |   diff* (%)    |            |   Rerun
amm                      |     773.00 vs 680.00      |      93.00    |      12.03     |     OK     |
exchange                 |     804.00 vs 720.00      |      84.00    |      10.44     |     OK     |
transaction_multi_payment|     218.00 vs 198.00      |      20.00    |       9.17     |     OK     |

Notes:
- dans les champs "diff" vous pouvez voir la différence entre le temps benchmark de référence et le temps benchmark de votre machine
- Si diff est positif pour les trois données, votre machine répond aux exigences minimums pour faire fonctionner un node Hydration
- Si diff dévie de -10% ou plus pour certaines données, votre machine pourrait ne pas convenir pour faire fonctionner un node
```

Vous pouvez voir la différence de performance entre votre machine et la configuration minimale requise dans la colonne **diff* (%)**. Si les trois valeurs dans cette colonne sont positives, votre machine devrait convenir pour faire fonctionner un node validateur Hydration. Si une des valeurs est en dessous de *-10 %*, il est déconseillé de faire fonctionner un node Hydration.

Rejoignez nous sur Discord si vous voulez discuter des résultats du benchmark, notre communauté vous aidera volontiers.
