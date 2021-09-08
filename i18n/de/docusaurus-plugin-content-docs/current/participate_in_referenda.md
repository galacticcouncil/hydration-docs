---
id: participate_in_referenda
title: Teilnahme an Referenda
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Dieser Beitrag bietet eine Schritt-für-Schritt-Anleitung zur Teilnahme an Referenden – Abstimmung und Vorschlag. Es gibt zwei alternative Tools, die Sie zu diesem Zweck verwenden können - [Commonwealth.im](#cw) oder [Polkadot/apps](#polkajs).

Bevor Sie sich für eine Teilnahme entscheiden, empfehlen wir Ihnen dringend, den [Wissensartikel](/democracy_referenda) im Abschnitt Lernen / Demokratie durchzulesen. Dort finden Sie einige wichtige Details zu den Mechanismen hinter Volksabstimmungen.

:::caution
Das HydraDX-Demokratiemodul wird am oder nach dem **15. September 2021** eingeführt. Bitte versuchen Sie vor diesem Datum keine der angezeigten Aktionen.
:::

## Verwendung von Commonwealth.im {#cw}
### Abstimmung auf Referendum {#cw-vote}
Sie können alle Volksabstimmungen einsehen, die zur Abstimmung offen sind, indem Sie auf das [Referenda tab](https://commonwealth.im/hydradx/referenda) auf der HydraDX Commonwealth-Seite navigieren.

Um über ein aktives Referendum abzustimmen, müssen Sie darauf klicken. Danach sehen Sie eine Seite mit allen relevanten Details.

Geben Sie im Abschnitt *Cast Your Vote* die folgenden Informationen ein:

* Abstimmungsbetrag - Dies ist die Menge an HDX-Token, die Sie bereit sind, zur Unterstützung des Referendums zu sperren
* Überzeugungsmultiplikator - Dies ist der Multiplikator, der das [Gewicht Ihrer Stimme](/democracy_referenda#referenda-votes-weighing) mitbestimmt.

Geben Sie anschließend Ihre Stimme durch Klick auf *Vote yes* oder *Vote no* ab und unterschreiben Sie die Transaktion.

### Referendum vorschlagen {#cw-propose}
Um ein Referendum vorzuschlagen, besuchen Sie die [HydraDX Commonwealth-Seite](https://commonwealth.im/hydradx/) und klicken Sie im oberen Menü auf *New Thread > New democracy proposal*.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/cw-proposal.jpg')} />
</div>

Füllen Sie die Informationen in den oben angezeigten Feldern aus. Die wichtigsten Parameter sind:
* Modul
* Funktion
* Alle zusätzlichen Informationen, die von der Funktion angegeben werden, die Sie aufrufen möchten
* Einzahlung - die Menge an HDX-Token, die Sie bereit sind, zur Unterstützung des Vorschlags einzuzahlen

Im obigen Beispiel ist das Angebotsmodul *balances* und die Funktion *setBalance*, die die freien und Reservesalden eines bestimmten Kontos ändert.

Um den Vorschlag einzureichen, klicken Sie auf *Send transaction* und unterschreiben Sie mit Ihrem Wallet.

Nachdem Sie den Vorschlag in der Kette eingereicht und die Transaktion unterzeichnet haben, sollte Ihr Vorschlag in der [Liste der vorgeschlagenen Referenden](https://commonwealth.im/hydradx/referenda) erscheinen.

:::caution
In jeder Abstimmungsperiode geht der Referendumsvorschlag mit der höchsten Unterstützung (*Seconding*) in die Abstimmungsrunde. Da die Zahl der Referenden zunimmt, gibt es keine Garantie dafür, dass Ihr Vorschlag jemals genügend Abordnungen erhält, um an der Abstimmung teilzunehmen. Es gibt keine Möglichkeit, einen Referendumsvorschlag zurückzuziehen, was bedeutet, dass Ihre Gelder möglicherweise für einen längeren Zeitraum gesperrt bleiben.

Böswillige Referendumsvorschläge werden bestraft. Der HydraDX-Rat und das Technische Komitee haben das Recht, ein bösgläubiges Referendum abzubrechen. Infolgedessen werden die hinterlegten Token verbrannt.
:::

## Verwendung von Polkadot/apps {#polkajs}
### Abstimmung auf Referendum {#polkajs-vote}
Sie können alle Referenden einsehen, die zur Abstimmung offen sind, indem Sie zu [*Governance > Democracy*](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy) in Polkadot/apps navigieren.

Um bei einem Referendum abzustimmen, klicken Sie daneben auf die Schaltfläche *Vote*.

Geben Sie im Popup die folgenden Informationen ein:

* Stimmenwert - Dies ist die Menge an HDX-Token, die Sie bereit sind, zur Unterstützung des Referendums zu sperren
* Überzeugungsmultiplikator - Dies ist der Multiplikator, der das [Gewicht Ihrer Stimme] 
(/democracy_referenda#referenda-votes-weighing) mitbestimmt.

Bringen Sie anschließend Ihre Stimme mit einem Klick auf *Vote Nay* (No) or *Vote Aye* (Yes) *  heraus und unterschreiben Sie die Transaktion.

### Referendum vorschlagen {#polkajs-propose}
Der Vorschlag eines Referendums über Polkadot/Apps besteht aus zwei Schritten – dem Einreichen eines Vorabbilds und dem Einreichen des Vorschlags in der Kette.

#### 01 Vorabbild senden {#polkajs-propose-01}
Um das Preimage einzureichen, besuchen Sie Polkadot/Apps und navigieren Sie zu
 [*Governance > Democracy*](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy).

Nachdem Sie auf *Submit preimage* geklickt haben, sollten Sie das folgende Popup sehen:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-preimage.jpg')} />
</div>

Füllen Sie die Informationen in den oben angezeigten Feldern aus. Die wichtigsten Parameter sind:
* Konto, von dem das Angebot gesendet wird
* Angebotsbereich
* Vorgeschlagene Maßnahmen

Im obigen Beispiel lautet der Angebotsbereich *balances* und die Aktion *forceTransfer* von Token von einem Konto auf ein anderes.

Bevor Sie das Preimage einreichen und die Transaktion unterzeichnen, kopieren Sie bitte den Preimage-Hash. Sie benötigen es für den nächsten Schritt.

#### 02 Vorschlag einreichen {#polkajs-propose-02}
Um den Referendumsvorschlag einzureichen, besuchen Sie
 [*Governance > Democracy*](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy) in Polkadot/apps.

Nachdem Sie auf *Submit proposal* geklickt haben, sollten Sie das folgende Popup sehen:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-proposal.jpg')} />
</div>

Geben Sie den Preimage-Hash aus dem vorherigen Schritt und die Anzahl der Token ein, die Sie für das Angebot hinterlegen möchten. Das Minimum ist 100.000 HDX.

Nachdem Sie den Vorschlag in der Kette eingereicht und die Transaktion unterzeichnet haben, sollte Ihr Vorschlag in der Liste der vorgeschlagenen Referenden erscheinen.

:::caution
In jeder Abstimmungsperiode geht der Referendumsvorschlag mit der höchsten Unterstützung (*Seconding*) in die Abstimmungsrunde. Da die Zahl der Referenden zunimmt, gibt es keine Garantie dafür, dass Ihr Vorschlag jemals genügend Abordnungen erhält, um an der Abstimmung teilzunehmen. Es gibt keine Möglichkeit, einen Referendumsvorschlag zurückzuziehen, was bedeutet, dass Ihre Gelder möglicherweise für einen längeren Zeitraum gesperrt bleiben.

Böswillige Referendumsvorschläge werden bestraft. Der HydraDX-Rat und das Technische Komitee haben das Recht, ein bösgläubiges Referendum abzubrechen. Infolgedessen werden die hinterlegten Token verbrannt.
:::
