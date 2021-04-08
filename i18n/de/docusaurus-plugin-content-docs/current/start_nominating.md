---
id: start_nominating
title: Werde ein Nominator
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Als Nominator staken Sie Ihre HDX und helfen dadurch das HydraDX Netzwerk sicherer zu machen. Wörtlich gesehen halten sie die Token zurück und nehmen sie temporär aus dem Umlaufversorgung. Dafür erhalten Sie Belohnungen(Staking Rewards) in Form von HDX. Im Gegensatz zum Validator Node brauchen Sie zum Nominieren kein großes technisches Verständnis und es ist somit für jeden zu empfehlen, der es sich nicht zutraut eine Validator Node zu betreiben.  

Beim Nominieren weisen Sie Ihren Stake einem oder mehreren von Ihnen gewählten Validatoren zu. Durch diesen Auswahlprozess werden die aktiven Validatoren gewählt und die Nominatoren erhalten für ihren Beitrag Belohnungen. Die Höhe der Belohnung, die Sie als Nominator erhalten ist abhängig von der Kommission des gewählten Validators - je höher dessen Kommission, desto geringer fällt Ihre Belohnung aus.

:::warning

Das Nominieren ist eine zugänglichere Art der Teilnahme am Staking-Prozess, allerdings bietet dies ebenfalls ein gewisses Risiko. Wenn der von Ihnen gewählte Validator sich falsch verhält (zum Beispiel nicht die Mindestbetriebszeit einhält), kann es zum Slashing kommen, was widerum zu einem ungewollten teilweisen oder kompletten Verlust Ihrer HDX führen kann. Darum empfehlen wir dringlichst sich zuvor sorgfältig zu informieren, bevor Sie sich einem Validator anschließen.

:::

## 00 Staking Benutzeroberfläche {#00-staking-ui}

Um Zugriff auf die Staking-Benutzeroberfläche zu erhalten öffnen Sie zunächst [Polkadot/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts) und vergewissern sich, dass Sie mit einer [öffentlichen HydraDX RPC Node](/polkadotjs_apps_public) verbunden sind und dort Ihren Kontostand sehen können.
:::note

Besitzen Sie noch xHDX-Token, die Sie während des Balancer LBP-Event gekauft haben? Dann müssen Sie diese zuerst [beanspruchen](/claim) bevor Sie fortfahren können.

:::

Nachdem Sie sichergestellt haben, dass Sie Ihren HDX Kontostand einsehen können, fahren Sie mit der Staking Benutzeroberfläche fort.  
*Network* > *Staking*

Die Staking Benutzeroberfläche hat folgende Menüpunkte:  

* **Staking overview**: Hier finden Sie eine Liste mit allen aktiven Validatoren und grundlegende Informationen über jeden Validator, wie beispielsweise die Menge an HDX welche auf der jeweiligen Node gestaked ist, wie viel HDX der Validator selbst staked und wie hoch die Kommission des Validators ist. Des Weiteren können Sie auch einsehen wie viele Era Punkte vom jeweiligen Validator in der aktuellen Era verdient werden und die Nummer des Blocks den der Validator zuletzt erstellt hat.  
* **Account actions**: Hier können Sie Staken und Nominieren.  
* **Payouts**:  Hier können Sie Ihre Staking Rewards einfordern.  
* **Targets**: Hier sehen Sie ihre vorraussichtlichen Einnahmen. Diese Information ist hilfreich bei der Auswahl eines Validators.  
* **Waiting**: Hier finden Sie die Warteliste inaktiver Validatoren, welche dort verharren bis Sie aktive Validatoren werden. Ein Validator verbleibt so lange in der Warteschalnge bis er genügend HDX gesammelt hat um sich den aktiven Validatoren anschließen zu dürfen.  
* **Validator stats**: Hier können Sie die Stash Adressen der Validatoren anfragen um detaillierte Informationen wie verdiente Era Punkte, gewählter Stake, Rewards und Slashes einsehen. Wir empfehlen Ihnen dringlichst sich diese Informationen zuvor anzueignen bevor Sie sich für einen Validator entscheiden.  

## 01 HDX Token binden {#01-bond-hdx-tokens}

:::warning

Gebundene HDX-Token werden getaked um die Sicherheit des Netzwerkes garantieren zu können. Unangebrachtes Verhalten eines Validators, den sie nominiert haben, könnte in Slashing resultieren, was widerum ungewollt zu teilweisem oder kompletten Verlust ihres gebundenen Vermögens führen kann. Wir empfehlen daher dringlichst, dass Sie sich vor Ihrer Wahl eines Validators über diesen ausgiebig informieren.

:::

Um HDX zu binden navigieren Sie zu *Account actions* in der Staking Nutzeroberfläche:  
*Network* > *Staking* > *Account actions* > *+ Stash*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-1.png')} />
</div>

Nachdem Sie auf die *Stash* Schaltfläche geklickt haben sollten Sie die Bonding-Einstellungen sehen mit vier editierbaren Feldern:

* **stash account**: Dieser Account hält die Mehrheit Ihrer HDX Token. HDX werden von diesem Account aus gestaked.  
* **controller account**: Dieser Accoount hält eine kleinere Menge an HDX welche benötigt werden um die Transaktionsgebühren für den Start und Stopp des Nominierungsvorganges decken zu können.  
* **value bonded**: Hier sehen Sie die Menge an HDX, die Sie staken. Staken Sie nicht Ihren vollständigen HDX Bestand, denn Sie benötigen später weitere HDX Token um anfallende Transaktionsgebühren bezahlen zu können.  
* **payment destination**: Dies ist der Account an welchen die Belohnungen aus dem Staking ausgezahlt werden.  

:::warning

Staken Sie nicht Ihren vollständigen HDX Bestand, denn Sie benötigen später weitere HDX Token um anfallende Transaktionsgebühren bezahlen zu können. Wenn Sie alle Ihre HDX staken, können Sie eventuell die Transaktion nicht signieren, die Sie brauchen um den Nominierungsprozess starten zu können.
:::

Nachdem Sie die Bonding-Einstellungen angepasst haben, klicken sie auf **Bond** und singieren die Transaktion um den Prozess abzuschließen.

:::caution

Aus Sicherheitsgründen ist es nicht empfehlenswert den gleichen Account für Stash und Controller zu verwenden. Da allerdings im Snakenet Token-Transfers deaktiviert sind ist es momentan nicht möglich verschiede Accounts zu verwenden. Wir empfehlen daher Stash und Controller zu trennen sobald dies in Zukunft möglich sein wird.

:::

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-2.png')} />
</div>

## 02 Einen Validator nominieren {#02-nominate-a-validator}

Nachdem sie Ihre HDX gebunden haben können Sie einen oder mehrere Validatoren nominieren. Bevor Sie einen Validator nominieren informieren Sie sich über diesen und entscheiden Sie vor allem nach dessen bisheriger Performance. Informationen hierzu können sie in der Staking-Benutzeroberfläche beziehen [siehe oben](#00-staking-ui).
:::note

Das HydraDX Snakenet hat ein **Limit von 64 Nominatoren pro Validator Node**. Bevor Sie also einen Validator zum nominieren auserwählen, stellen Sie sicher, dass der Validator noch nicht die Maximalmenge an Nominierungen erreicht hat, sonst könnte ihre Nominierung eventuell inaktiv bleiben und Sie erhalten keine Rewards für Ihren Stake. Die Anzahl der Nominierungen für jeden Validator finden sie in dem Untermenü *Waiting* in der Staking Nutzeroberfläche.
:::

Um einen oder mehrere Validatoren zu nominieren, navigieren sie zu:  
*Network* > *Staking* > *Account actions* > *Nominate* (Schaltfläche neben ihren gebundenen HDX)

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-1.png')} />
</div>

Nachdem Sie auf *Nominate* geklickt haben sollte sich ein Popup öffnen mit dem Namen *nominate validators*. Hier können Sie einen oder mehrere Validatoren auswählen. Wenn Sie mehrere Validatoren auswählen wird ihr Stake Anteil automatisch einem der von Ihnen gewählten Validatoren zugewiesen. Dies geschieht in komplexen Algorithmen um die Dezentralisation des Netzwerkes und die Staking-Belohnungen bestmöglich zu maximieren.  
Um die ausgewählten Validatoren zu nominieren klicken sie auf _Nominate_ und signieren die Transaktion.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>


## 03 Überprüfen des Status Ihrer Nominierungen {#03-check-the-status-of-your-nominations}

Nachdem Sie die Nominierung abgeschlossen haben, bleibt Ihre Nominierung inaktiv bis die gegenwärtige Era vorbei ist. Sobald die nächste Era beginnt, wird Ihre Nominierung aktiv insofern die von Ihnen gewählten Validator Nodes im aktiven Set der Validatoren aufgenommen wurden. Verbleibt ein Validator in der Warteschlange bleibt Ihre Nominierung inaktiv und Sie erhalten dafür keine Belohnungen.  
Um den Status Ihrer Nominierungen zu überprüfen navigieren Sie zu:  

*Network* > *Staking* > *Account actions*  

Sie sehen Ihre inaktiven Nominierungen unter *Waiting nominations*:  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-3.png')} />
</div>

Sobald eine Nominierung aktiv wird, sollten Sie diese in der Liste der *Active nominations* finden können.  
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-4.png')} />
</div>

:::note

Überprüfen Sie Ihre Nominierungen in regelmäßigen Abständen. Es kann vorkommen, dass manche Validatoren ihre Kommission anpassen, was negative Auswirkugen auf Ihre Belohnungen haben kann. Wenn Sie also immer wieder Ihre Nominierungen überprüfen können Sie schnell auf solche Veränderungen reagieren.
:::

Vielen Dank, dass Sie das HydraDX Netzwerk unterstützen indem Sie ein Snakenet Nominator geworden sind! 🎉
