---
id: staking_claim_rewards
title: Beanspruchen Ihrer Staking Rewards
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Am Ende jeder Ära werden den Validator-Pools ihre [Staking rewards](/staking_rewards) zugewiesen, die aus Base rewards, Era points und Tipps bestehen. Diese "Rewards" werden jedoch nicht automatisch auf die Konten des Validators und seiner Nominatoren verteilt. Dies geschieht erst, nachdem die Einsatzprämien durch **Beanspruchen einer Auszahlung** ausgezahlt wurden. _Staking rewards_ müssen **innerhalb von 84 Epochen** beansprucht werden, nachdem sie verdient wurden. Nach Ablauf dieser Frist werden die relevanten Reward-Informationen aus Chain gelöscht und der Validator-Pool kann seine Rewards für diese Zeit nicht mehr erhalten.

Das manuelle Beanspruchen einer Auszahlung innerhalb eines begrenzten Zeitraums ist ein wichtiges Sicherheitsmerkmal. Durch die Anforderung, dass für jeden Validatorpool und für jede Epoche eine Auszahlungstransaktion eingereicht wird, wird die Verteilung von Rewards auf mehrere Blöcke gewährleistet. Wenn alle Rewards innerhalb eines Blocks an alle Validatoren und Nominatoren verteilt würden, könnte die Chain-Stabilität  möglicherweise gefährdet sein.

## Auslösung der Auszahlung
Eine Auszahlung kann sowohl von Validatoren als auch von deren Nominatoren mithilfe von Polkadot / Apps problemlos ausgelöst werden. Navigieren Sie bitte zu *Network > Staking > Payouts*. Alternativ können Sie den folgenden Link verwenden: 
https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/staking/payout

Unter *My stashes*, sollten Sie alle Rewards sehen, die für die Auszahlung von gesetzten Token verfügbar sind, mit Angabe der jeweiligen Epochennummern. Durch Klicken auf *Payout all* ist es möglich, eine Reihe von Transaktionen einzureichen, um alle verfügbaren Rewards für die vergangenen Epochen zu erhalten.

<img src={useBaseUrl('/staking-claim-rewards/payouts.jpg')} />

Nach dem Auslösen der Auszahlung werden Sie aufgefordert, die Transaktion(en) mit Ihrem HDX-Konto zu unterzeichnen. Nach der Bestätigung werden Rewards für die ausgewählten Epochen an die jeweiligen Validatoren und deren Nominatoren verteilt.
