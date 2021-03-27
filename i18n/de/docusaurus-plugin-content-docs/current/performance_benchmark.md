---
id: performance_benchmark
title: Leistungs-Benchmark
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sie können sicherstellen, dass ihre Hardware die [technischen Mindestanforderungen](/node_setup#00-required-technical-specifications) erfüllt, indem Sie einen Leistungs-Benchmark ausführen.  
Nutzen Sie hierfür Folgenden Befehl:

```bash
# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable
$ cd HydraDX-node/

# Prepare for running the benchmark
$ ./scripts/init.sh
$ rustup default nightly
$ apt install python3-pip
$ pip3 install bench-wizard

# Run the benchmark
$ ./scripts/check_performance.sh
```

Nachdem Ihr Benchmark ausgeführt wurde sollte ihre Ausgabe ähnlich zu folgedem sein:

```
         Pallet          |   Time comparison (µs)    |     diff*     |            |   Rerun
amm                      |    1066.00 vs 1045.80     |      20       |     OK     |
exchange                 |    1105.00 vs 1049.10     |      55       |     OK     |
transaction_multi_payment|     289.00 vs 279.96      |       9       |     OK     |
```

Wenn die Werte in der Spalte `diff` alle drei positive Zahlenwerte sind, ist ihre Hardware geeignet um eine HydraDX Validator Node zu betreiben.
Sie können gerne unserem Discord Channel beitreten wenn sie Ihre Benchmark Ergebnisse diskutieren wollen oder Hilfe brauchen. Unsere Community hilft Ihnen gerne!