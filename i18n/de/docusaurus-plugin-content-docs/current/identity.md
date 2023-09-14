---
id: identity
title: Identität festlegen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Kontoinhaber haben die Möglichkeit, ihre eigene Identität festzulegen, indem sie bestimmte Informationen bereitstellen und in der Blockchain speichern. Außerdem können die Identitätsinformationen optional zur Überprüfung an die HydraDX-Registratoren übermittelt werden. Durch das Festlegen und Überprüfen ihrer Identität tragen Validatoren und Nominatoren dazu bei, das Vertrauen in das Netzwerk zu stärken.

:::note
Wenn Sie als HydraDX-Validator teilnehmen, empfehlen wir Ihnen dringend, sowohl Ihre Identität festzulegen als auch den Überprüfungsprozess durchzuführen. Verifizierte Validatoren erscheinen vertrauenswürdiger und ziehen mehr Nominierungen an, wodurch sich ihre Chancen erhöhen, in die Gruppe der aktiven Validatoren aufgenommen zu werden.
:::

## 01 Identität festlegen {#01-set-identity}

Um Ihre Identität festzulegen, öffnen Sie Polkadot/apps (verbunden mit *HydraDX Snakenet* network) und navigieren Sie zu *My accounts*. Man kann auch diesem Link folgen:

https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/accounts

Suchen Sie auf der Kontoseite das Konto, auf dem sich Ihre gebundenen HDX-Token befinden. Klicken Sie auf die drei Punkte neben dem Konto (auf der rechten Seite) und wählen Sie *Set on-chain identity*.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-1.jpg')} />

Sie sehen ein Popup mit dem Namen *register identity*. Hier können Sie folgende Informationen eingeben:

* Offizieller Name
* E-Mail
* Webadresse
* Twitter
* Riotname (falls Sie Matrix verwenden)

:::note
Sämtliche Angaben sind optional. Sie können nach Belieben entscheiden welche Angaben Sie hinterlegen möchten. Wenn Sie jedoch eine Validator Node betreiben möchten wir Sie darum bitten Ihre E-Mail-Adresse anzugeben. Dies ermöglicht es uns Sie zu kontaktieren, falls wir Probleme an Ihrer Node feststellen.
:::

Im letzten Feld des Popups sehen Sie die Menge von HDX, die Sie hinterlegen müssen, um Ihre Identitätsinformationen zu speichern. Sie erhalten diese Kaution zurück, sobald Sie sich entschließen, Ihre Identität zu einem späteren Zeitpunkt zu löschen.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-2.jpg')} />

Klicken Sie nach dem Ausfüllen der Informationen auf *Set Identity* und signieren Sie die Transaktion mit der Browsererweiterung Polkadot.js. Sobald die Transaktion bestätigt würde, wird Ihre Identität festgelegt.

## 02 Senden Sie Ihre Identität zur Überprüfung {#02-verify-identity}

Nachdem Sie Ihre Identität festgelegt haben, kann man sie zur Überprüfung an die Netzwerkregister senden. Öffnen Sie dazu Polkadot / apps und navigieren Sie zu *Developer* > *Extrinsics*. Man kann auch diesem Link folgen:

https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics

Nachdem Sie im letzten Schritt das entsprechende HydraDX-Konto ausgewählt haben, müssen Sie die folgenden Informationen eingeben:

* **extrinsic**: identity
* **action**: requestJudgment
* **reg_index**: Hier müssen Sie die ID des Registers eingeben, den Sie für die Überprüfung ausgewählt haben.  
HydraDX hat 2 Registratoren: Simon Kraus - HydraSik (ID: **0**) and Jimmy Tudeski - stakenode (ID: **1**).
* **max_fee**: Hier müssen Sie die maximale Gebühr in HDX eingeben, die Sie zur Überprüfung an den Registrator zahlen möchten. Nur Registratoren mit einer Gebühr unter Ihrer max_fee können die Überprüfung durchführen.

Um Ihre Bestätigungsanfrage einzureichen, klicken Sie auf *Submit Transaction* und signieren Sie die Transaktion.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-3.jpg')} />

Bitte beachten Sie, dass der Vorgang der Identitätsprüfung einige Zeit in Anspruch nehmen kann. Um den Status Ihrer Anfrage anzuzeigen, navigieren Sie zu **My accounts** und bewegen Sie den Mauszeiger über den Abschnitt, in dem Ihre Identität angezeigt wird. Es wird ein Popup mit dem aktuellen Status angezeigt.

## 03 Ergebnis des Überprüfungsverfahrens {#03-verification-outcome}

Nach der Bearbeitung Ihrer Bestätigungsanfrage wird der Registrator einen der folgenden Status festlegen, die in Ihrem Identitätsstatus sichtbar werden:

* **Unknown** - Standardwert, es wurde noch kein Urteil gefällt.
* **Reasonable** - Die bereitgestellte Informationen erscheinen angemessen, es wurden jedoch keine eingehenden Überprüfungen durchgeführt.
* **KnownGood** - Die Informationen sind korrekt.
* **OutOfDate** - Die Informationen waren in der Vergangenheit korrekt, sind aber jetzt veraltet.
* **LowQuality** - Die Informationen sind ungenau, können jedoch durch Aktualisierung behoben werden.
* **Erroneous** - Die angegebenen Informationen sind falsch und weist möglicherweise auf eine böswillige Absicht hin.
