---
id: staking
title: Staking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Dieser Abschnitt dient als kurze Einführung wie Staking im HydraDX Netzwerk funktioniert. Wenn Sie bisher keinerlei Erfahrung mit dem Staking in Substrate Netzwerken haben, empfehlen wir, dass Sie dies lesen bevor Sie sich entschließen teilzunehmen.
Der Mechanismus des HydraDX Stakings funktioniert im Kern nach dem NPoS (Nominated-Proof-of-Stake). NPoS ist eine Variation des Proof-of-Stakes und wird in Substrate-basierten Netzwerken verwendet wie beispielsweise Polkadot und Kusama. Die zwei zentralen Säulen im NPoS sind die [**Validatoren**](#validators) und die [**Nominatoren**](#nominators).

### Validatoren {#validators}

Die Validatoren betreiben die Validator Nodes im Netzwerk, welche die Infrastruktur für das HydraDX Netzwerk bereistellen um sicher funktionieren zu können. Validator Nodes erfüllen drei äußerst wichtige Funktionen. Erstens validieren Sie die Informationen in den Blocks, wie beispielsweise die Identität der Parteien oder den Inhalt der Verträge. Zweitens nehmen Validatoren an dem Prozess der Produktion neuer Blocks teil basierend auf den Validitätsbestätigungen der anderen Validatoren. Drittens garantieren sie die Endgültigkeit von Blockchain Transaktionen.
Eine wichtige Eigenschaft des NPoS ist, dass nicht alle Validatoren an dem Validierungsprozess gleichzeitig teilnehmen. Lediglich jene Validatoren, die im *aktiven Validator Set* sind, führen die oben genannten Vorgänge durch und verdienen dadurch Belohnungen. Die Gruppe der aktiven Validatoren ist beschränkt durch die feste Anzahl der Nodes. Im [HydraDX Snakenet](/snakenet) erwarten wir eine Anzahl von ungefähr 300 Nodes, mit dem Plan der Erweiterung auf dem Weg zum Mainnet.
Validatoren werden nach dem Prinzip der *proportional justified representation* in das aktive Set gewählt. Dieses Prinzip schützt die Dezentralisierung und die faire Repräsentation indem die verfügbaren Slots in Proportion zu der Menge an gestaketen Tokens verteilt werden. Das bedeutet, je mehr Token bei einem Validator gestaked sind, desto höher ist die Wahrscheinlichkeit, dass diese Node in das aktive Set von Validatoren gewählt wird. Validatoren, welche nicht im aktiven Set sind, kommen auf eine Warteliste. Das Set von aktiven Validatoren wird zu Beginn jeder Ära aktualisiert, dies bietet jedem neuen Validator die Möglichkeit ins aktive Set aufgenommen zu werden.

:::note
In einem Substrate-basierten Netzwerk ist die Zeit in **Äras** eingeteilt. Im [HydraDX Snakenet](/snakenet) dauert eine Ära 24 Stunden.
:::

Das Betreiben und Erstellen einer Validator Node setzt ein gewisses Maß an technischen Fähigkeiten voraus, die benötigt werden um den fehlerfreien Betrieb der Node zu gewährleisten. Wenn Sie sich mit Validator Nodes nicht auskennen empfehlen wir, dass Sie einen erfahrenen Validator [mit Ihren HDX nominieren](/start_nominating). Wenn Sie allerdings der Meinung sind das nötige technische Know-How mitzubringen können Sie sich gern unseren [Validator guide](/node_setup) ansehen.

### Nominatoren {#nominators}

Nominatoren helfen das Netzwerk sicherer zu machen, indem sie Validatoren nominieren, damit diese wiederum ins aktive Validator Set gewählt werden. Dies tun die Nominatoren indem sie ihre HDX Token bei einem Validator ihrer Wahl staken. Das Nominieren bedarf nicht dem Betrieb einer Node, was diesen Vorgang ideal für Einsteiger macht. Token, die gestaked wurden, sind *gebunden*. Das bedeutet, dass diese eingefroren sind und nicht für andere Zwecke einsetzbar sind. Es ist allerdings jederzeit möglich die Nominierung zu stoppen, allerdings wird dies immer erst am Ende der laufenden Ära aktiv. Es ist aber auch möglich Teile oder alle Token zu entbinden, allerdings wird dies auch erst nach 28 Tagen durchgeführt.
Vor dem Nominieren sollten Sie sich über die Validatoren, die Sie in Betracht ziehen, ausgiebig informieren. Dies können Sie zum Beispiel durch die Performance des Validators in der Vergangenheit überprüfen, wie zum Beispiel Ära Points, vergangene Rewards oder ob und wie oft es zum Slashing kam. Zu Beginn des Snakenet kann es schwierig sein an all diese Informationen zu kommen, im Zweifel können Sie gerne in unserem Discord vorbeischauen und wir teilen unsere von der Community erstellte Liste mit vertrauenswürdigen Validatoren.
Ein weiterer Punkt der bei der Wahl eines Validators zu erwägen ist ist dessen *Kommission*. Dieser Wert in Prozent gibt an wieviel die Nominatoren von Ihren Rewards an den Validator abgeben müssen dafür das Sie dessen Node verwenden. Die niedrigste Kommision ist nicht immer die beste - denn das Betreiben einer Node is mit hohen Betriebskosten verbunden, die der Validator auch decken muss und er erhebt hierfür eine hoffentlich realistische Kommision.
In HydraDX ist es möglich **maximal 16 Validatoren** mit Ihren Tokens zu nominieren. Wenn Sie mehr als einen Validator nominieren bedeutet dies nicht direkt, dass Ihr Stake allen von Ihnen gewählten Validatoren gleichzeitig zugewiesen wird. Bei Beginn einer neuen Ära, wird durch eine Abfolge mehrerer komplexer Algorithmen die optimale Verteilung aller Nominierungen errechnet, mit dem übergeordneten Ziel zu entscheiden welche Validatoren in das aktive Set der Validatoren kommen. Wenn keiner der von Ihnen gewählten Validatoren ins aktive Set gelangt, bleiben Ihre Nominierungen inaktiv für diese Ära (24 Stunden) und Sie erhalten natürlich für inaktive Nominierungen keine Rewards. Um Ihre Chancen, dass Ihr Stake in das aktive Set von Validatoren landet, zu maximieren empfehlen wir dringlichst, dass Sie **mehrere Validatoren nominieren**, was wiederum der Dezentralisierung zugute kommt.

:::note
Beachten Sie, dass Sie keine Validatoren nominieren sollten, die bereits voll oder überfüllt sind. Momentan gibt es pro Validator ein **Limit von 64 Nominierungen**, bei mehr ist er überbelegt. Wenn die neue Ära beginnt wird ein überbelegter Validator nur mit der maximalen Nominierungsanzahl aktiv. Wenn dies passiert bleiben die höchsten Nominierungen erhalten, während die Nominierungen mit den niedrigsten Stakingbeträgen nicht beachtet werden und keine Rewards erhalten.
Nominieren ist eine einfachere Art des Stakings, allerdings birgt es auch Risiken. Validatoren, die sich nicht an die Regeln halten, könnten mit Slashing bestraft werden, was zum teilweisen oder kompletten Verlust des Kapitals des Validators und der Nominatoren führen kann. Nominieren Sie deshalb nur bekannte und bewährte Validator Nodes.
:::

Haben Sie Interesse Ihre HDX Token zu staken indem Sie Nominator werden? Dann könnte Ihnen [unser Nominator Guide](/start_nominating) weiterhelfen.