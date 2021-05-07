---
id: staking_claim_rewards
title: Auslösen Ihrer Staking Rewards
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Am Ende jeder Ära werden die Validator-Pools ihre [Staking rewards](/staking_rewards) zugewiesen, die aus Base rewards, Era points und Tipps bestehen. Diese "Rewards" werden jedoch nicht automatisch auf die Konten des Validators und seiner Nominatoren verteilt. Dies geschieht erst, nachdem die Einsatzprämien durch **Auslösen einer Auszahlung** beansprucht wurden. "Staking rewards" müssen **innerhalb von 84 Epochen** beansprucht werden, nachdem sie verdient wurden. Nach Ablauf dieser Frist werden die relevanten "Rewards" Informationen aus "Chain" gelöscht und der Validator-Pool kann seine "Rewards" für diese Zeit nicht mehr erhalten.

Das manuelle Auslösen einer Auszahlung innerhalb eines begrenzten Zeitraums ist ein wichtiges Sicherheitsmerkmal. Durch die Anforderung, dass für jeden Validatorpool und für jede Epoche eine Auszahlungstransaktion eingereicht wird, wird die Verteilung von "Rewards" auf mehrere Blöcke verteilt. Wenn alle "Rewards" innerhalb eines Blocks an alle Prüfer und Nominatoren verteilt würden, könnte die Chain-Stabilität  möglicherweise gefährdet sein.

## Auslösung der Auszahlung
Eine Auszahlung kann sowohl von Validatoren als auch von deren Nominatoren mithilfe von Polkadot / Apps problemlos ausgelöst werden. Navigieren Sie bitte zu *Network > Staking > Payouts*. Alternativ können Sie den folgenden Link verwenden: 
https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/staking/payout

Während der Auswahl *My stashes*, man soll alle "Rewards" sehen, die für die Auszahlung von gesetzten Token verfügbar sind, mit Angabe der jeweiligen Epochenzahlen. Durch Klicken auf *Payout all*, ist es möglich, eine Reihe von Transaktionen einzureichen, um alle verfügbaren "Rewards" für die vergangenen Epochen zu erhalten.

<img src={useBaseUrl('/staking-claim-rewards/payouts.jpg')} />

Nach dem Auslösen der Auszahlung werden Sie aufgefordert, die Transaktion(en) mit Ihrem HDX-Konto zu unterzeichnen. Nach der Bestätigung werden "Rewards" für die ausgewählten Epochen an die jeweiligen Validatoren und deren Nominatoren verteilt.
