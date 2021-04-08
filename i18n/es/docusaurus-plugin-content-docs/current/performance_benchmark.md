---
id: performance_benchmark
title: Benchmark de desempeño
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Puede asegurarse de que su máquina cumpla con las [especificaciones técnicas requeridas](/node_setup__#-00-required-technical-specifications) ejecutando una evaluación comparativa de rendimiento. Para hacerlo, siga los pasos a continuación:

```bash
# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable
$ cd HydraDX-node/

# Prepárese para ejecutar el benchmark
$ ./scripts/init.sh
$ rustup default nightly
$ apt install python3-pip
$ pip3 install bench-wizard

# Ejecute el benchmark
$ ./scripts/check_performance.sh
```

Después de que se ejecute benchmark, debería ver un resultado similar al siguiente:

```
         Pallet          |   Time comparison (µs)    |     diff*     |            |   Rerun
amm                      |    1066.00 vs 1045.80     |      20       |     OK     |
exchange                 |    1105.00 vs 1049.10     |      55       |     OK     |
transaction_multi_payment|     289.00 vs 279.96      |       9       |     OK     |
```

Si los valores en el campo `diff` son positivos en los tres casos, entonces su máquina es adecuada para ejecutar un nodo validador HydraDX.

Únase a nosotros en Discord si desea discutir sus resultados de referencia, nuestra comunidad siempre estará feliz de ayudar.