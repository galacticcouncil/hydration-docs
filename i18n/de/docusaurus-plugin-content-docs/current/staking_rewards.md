---
id: staking_rewards
title: Staking Rewards
---

import useBaseUrl from '@docusaurus/useBaseUrl';

"Staking rewards" ist ein Anreiz für Validatoren und Nominatoren [ihre HDX-Token einzusetzen](/staking). Es gibt drei Arten von "Staking rewards" , die in diesem Artikel behandelt werden: [base rewards](#base-rewards), [era points](#era-points) und [tips](#tips).

## Base Rewards {#base-rewards}

Am Ende jeder Ära (24 Stunden) erhalten alle aktiven Validator-Pools Basisbelohnungen in Form von HDX-Token. Ein Validator-Pool besteht aus einem gewählten Validator (der seinen selbst gesetzten HDX hält) und allen aktiven Nominierungen, die den Validator unterstützen (weitere Informationen finden Sie unter [Staking](/Staking)). Ein zentrales Prinzip des NPoS-Konsensmechanismus (Nominated Proof-of-Stake) ist, dass **gleiche Arbeit gleiche "Rewards" bringt**. Mit anderen Worten, da alle Validator-Pools im Wesentlichen die gleiche Arbeit ausführen, **werden die verfügbaren "Base Rewards" zu gleichen Teilen** unter ihnen aufgeteilt. Dies bedeutet, dass Validator-Pools im Verhältnis zu ihrem Gesamteinsatz **nicht** belohnt werden, was einen großen Unterschied zu herkömmlichen PoS-Netzwerken darstellt.

Der Mechanismus der gleichmäßigen Aufteilung von "Base rewards" auf alle teilnehmenden Validator-Pools trägt zur Sicherheit des Netzwerks bei, indem die Machtkonzentration in einigen Validator-Pools verhindert und dadurch die Dezentralisierung gestärkt wird. Im Laufe der Zeit werden Nominatoren dazu angeregt, Validatoren mit einem geringeren HDX-Anteil zu nominieren. Dieser Prozess wird schließlich die Leistungsverhältnisse im Netzwerk ausgleichen und zu einer Situation führen, in der alle Validator-Pools ungefähr die gleiche Menge an abgestecktem HDX haben.

Die Verteilung von "Rewards" erfolgt wie folgt. Nach der Berechnung des (gleichen) Betrags an "Rewards für jeden Validatorpool erhält der Validator seinen Anteil in Form von **Provisionsgebühren** für die Wartung des Knotens. In einem zweiten Schritt werden die verbleibenden Token **proportional** auf alle Einsätze verteilt (einschließlich des Eigeneinsatzes des Validators). Dies bedeutet, dass höhere Einsätze einen größeren Anteil von "Rewards" erhalten, die dem jeweiligen Validator-Pool zugeordnet werden.

:::note
In unserem Testnetz,das man auch "Snakenet" nennt, wird die Anzahl von "Rewards" für  Staking Ihrer HDX-Token auf etwa 50% APY geschätzt..
:::

## Era points {#era-points}

Validatoren können zusätzliche "Rewards" im Verhältnis zu den Era points verdienen, die sie in der vergangenen Ära gesammelt haben. Diese "Rewards" werden zu den oben beschriebenen "Base Rewards" hinzugefügt. Validatoren können Era points verdienen, indem sie bestimmte Aktionen ausführen, wie z.B :

* Herstellung von "non-uncle block in  Relay Chain".
* Herstellung eines Verweises auf eine zuvor nicht referenzierte "uncle block".
* Herstellung referenzierten "uncle block".

:::note
 "Uncle block" ist ein "Relay Chain block" gültig in jeder Hinsicht, der jedoch nicht kanonisch geworden ist. Dies kann passieren, wenn zwei oder mehr Validatoren Blockproduzenten in einem einzelnen Slot sind und der von einem Validator erzeugte Block den nächsten Blockproduzenten vor den anderen erreicht. Die nacheilenden Blöcke werden "Uncle block" genannt.
:::

## Tips {#tips}

Schließlich können Validatoren Tipps verdienen, die am Ende jeder Ära auch zu den "Base rewards" hinzugefügt werden. Tipps stellen eine zusätzliche Transaktionsgebühr dar, die optional von Benutzern gezahlt werden kann, um ihrer Transaktion eine höhere Priorität zu geben.
