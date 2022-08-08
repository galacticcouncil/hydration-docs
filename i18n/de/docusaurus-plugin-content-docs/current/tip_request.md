---
id: tip_request
title: Die Anfrage vom Finanzministerium
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Mit der Einführung des [HydraDX New Deal-Incentive-Programms](#link-to-new-deal) können Community-Mitglieder HDX-Tipps vom Finanzministerium als Belohnung für ihre Beiträge anfordern. Dieser Leitfaden führt Sie durch den Prozess der Trinkgeldanfragen. Weitere Informationen zu den verschiedenen Arten von Aktivitäten, die belohnt werden, finden Sie in [diesem Beitrag](/new_deal).

Das Anfordern eines Treasury-Tipps besteht aus zwei Schritten. Im ersten Schritt müssen Beitragende ihre Tipp-Anfrage in Commonwealth.im mit einer Beschreibung des Beitrags veröffentlichen. Als zweiter Schritt muss die Treasury-Tipp-Anfrage mithilfe von Polkadot/Apps on-chain eingereicht werden.

## 01 Veröffentlichung  der Trinkgeldanfrage in Commonwealth.im {#01-publish-tip-request}

Um die Transparenz zu gewährleisten, müssen alle Treasury-Tipp-Anfragen in einem Thread auf der [HydraDX Commonwealth-Seite] (https://commonwealth.im/hydradx) veröffentlicht werden. Bevor Sie einen Thread öffnen, müssen Sie Ihre HydraDX-Brieftasche mit Commonwealth.im verknüpfen: Klick *Log in* (obere rechte Ecke) und wähl *Connect with wallet > polkadot-js*.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/login.jpg')} width="300px" />
</div>

Nachdem Sie im Popup Ihre HDX-Adresse ausgewählt haben, werden Sie aufgefordert, die Nachricht mit Ihrem Wallet zu signieren und einen Anzeigenamen für dieses Wallet festzulegen.

Nachdem Sie sich eingeloggt haben, müssen Sie einen neuen Thread für Ihre Trinkgeldanfrage erstellen. Navigieren Sie zum oberen rechten Teil der Seite und klicken Sie auf *New thread > New thread*. Sie können auch direkt diesen Link verwenden: https://commonwealth.im/hydradx/new/thread.

Sie können den Titel des Threads verwenden, um das Thema (Tippanfrage) und das Thema des Beitrags anzugeben. Geben Sie im Hauptteil des Threads bitte die folgenden Informationen an:

* Zeitraum, in dem der Beitrag geleistet wurde
* Eine kurze Zusammenfassung des Beitrags
* Die Höhe des angeforderten Trinkgelds (in HDX)
* Zeitaufwand für den Beitrag (in Stunden)
* Bei Bedarf eine genauere Beschreibung einschließlich der Relevanz des Beitrags zu HydraDX
* Geben Sie ggf. weitere Informationen an, z. B. die Relevanz des Beitrags zu HydraDX und einen Link zur PR (bei technischen Beiträgen)

Als Referenz können Sie einen Blick auf [diese Beispiel-Tipp-Anfrage] (https://commonwealth.im/hydradx/proposal/discussion/1165-tip-request-add-documentation-for-staking) werfen.

Nachdem Sie die Informationen ausgefüllt haben, posten Sie den Thread und er sollte in der allgemeinen Liste verfügbar sein.

:::note

Nominatoren und Validatoren, die ihr HDX überschuldet haben und „steckengeblieben“ sind, können ein Treasury-Tipp von 1 HDX anfordern, das es ihnen ermöglicht, einige ihrer Token aufzulösen. Wenn dies auf Ihren Fall zutrifft, erstellen Sie bitte einen Commonwealth-Thread nach [diesem Beispiel](https://commonwealth.im/hydradx/proposal/discussion/1166-tip-request-overbonded-staker).

:::

## 02 Senden der Tippanforderung On-Chain {#02-submit-on-chain}

Nachdem Sie Ihre Treasury-Tipp-Anfrage veröffentlicht haben, müssen Sie sie in der Kette einreichen. Zu diesem Zweck muss Ihr Wallet eine kleine Menge HDX enthalten, um die Transaktionsgebühren zu decken. Wenn Sie derzeit kein HDX besitzen, müssen Sie diesen Schritt nicht ausführen – jemand anderes wird Ihre Trinkgeldanforderung für Sie in der Kette einreichen.

Treasury-Tipp-Anfragen können mit Polkadot / Apps über den folgenden Link in der Kette eingereicht werden: https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/treasury/tips.

Um eine neue Trinkgeldanfrage zu stellen, klicken Sie auf *Propose tip* und geben Sie die folgenden Informationen ein:

* **submit with account** - wählen Sie das Konto aus, das die Transaktion zum Senden der Trinkgeldanforderung in der Kette unterschreibt. Dieses Konto muss eine kleine Menge HDX für Transaktionskosten halten.
* **beneficiary** - wählen oder geben Sie die Adresse des Kontos ein, das den Treasury-Tipp erhält. Dieses Konto muss dem Konto entsprechen, das den Commonwealth-Thread eröffnet hat.
* **tip reason** - geben Sie eine URL zum Commonwealth-Thread an.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/submit-on-chain.jpg')} />
</div>

Um die Trinkgeldanfrage zu senden, klicken Sie auf *Propose tip* und unterschreiben Sie die Transaktion.

Sobald die Transaktion bestätigt ist, sollten Sie die Trinkgeldanfrage auf der Übersichtsseite sehen.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/tip-requests.jpg')} />
</div>
