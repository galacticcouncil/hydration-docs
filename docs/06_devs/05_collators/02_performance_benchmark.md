---
title: Performance Benchmark
description: Test and optimize node performance
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can make sure that your machine satisfies the [required technical specifications](./collator_setup#technical-specifications) by running the `hydradx` binary's built-in hardware benchmark. Build or download the binary first (see [Set up a Development Chain](../build_dev_chain) or the [latest release](https://github.com/galacticcouncil/hydration-node/releases/latest)), then run:

```bash
$ ./hydradx benchmark machine
```

This runs Substrate's standard reference-hardware check (CPU, memory, and disk read/write throughput) and prints a pass/fail score for each category against the reference spec, for example:

```
+----------+----------------------------------------+----------------+----------------+--------+
| Category | Function                                | Score          | Minimum        | Result |
+----------+----------------------------------------+----------------+----------------+--------+
| CPU      | BLAKE2-256 hashing                      | 1234.56 MB/s   | 1000.00 MB/s   | Pass   |
| Memory   | Copy                                     | 12345.67 MB/s  | 8000.00 MB/s   | Pass   |
| Disk     | Random write                            | 234.56 MB/s    | 150.00 MB/s    | Pass   |
| Disk     | Random write with latency guarantee     | 100 MB/s        | 80 MB/s        | Pass   |
+----------+----------------------------------------+----------------+----------------+--------+
```

If any category shows `Fail`, your machine falls short of the reference hardware for that category — consider upgrading before running a production collator.

Join us at Discord if you would like to discuss your benchmark results, our community is always happy to help.
