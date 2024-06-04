---
id: democracy_referenda
title: Referenda
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Referenda ermöglicht es Interessenvertretern, einen Vorschlag einer gewichteten, beteiligungsbasierten Abstimmung durch die breitere Gemeinschaft zu unterbreiten. Gegenstand des Referendums ist ein Aktionsvorschlag, der das Protokoll betrifft – zum Beispiel eine Auszahlung durch das Finanzministerium oder sogar eine Änderung des Laufzeitcodes.

Grundsätzlich wird immer nur über ein Referendum abgestimmt. Andere anhängige Referendumsvorschläge werden in eine Warteschlange gestellt. Für öffentlich eingereichte Vorschläge und für Vorschläge des Rates gibt es separate Warteschlangen. Alle 3 Tage wählt der Referendumsmechanismus den besten Vorschlag mit der höchsten Unterstützung aus, abwechselnd zwischen den beiden Warteschlangen. Nach der Abstimmung und Annahme eines Referendums gibt es eine sogenannte *Verzögerungsfrist* von 3 Tagen, die verstreichen muss, bevor der Beschluss in Kraft tritt. Eine Ausnahme von diesen Regeln gilt für Dringlichkeitsvorschläge des Technischen Komitees, die sich mit größeren Protokollproblemen befassen und beschleunigt werden müssen.

## Initiierung eines Referendums {#referenda-initiate}
Es gibt mehrere Möglichkeiten, ein Referendum einzuleiten, die im Folgenden genauer beschrieben werden. Die Art und Weise, wie das Referendum eingeleitet wurde, ist entscheidend für den anzuwendenden Abstimmungsmodus.

### Volksabstimmung {#referenda-initiate-public}
Jeder Inhaber von HDX-Token kann [ein Referendum vorschlagen](/participate_in_referenda#propose) indem er die erforderliche Mindestmenge an HDX-Token einzahlt und den Vorschlag in der Kette einreicht. Andere Community-Mitglieder können [den (*zweiten*) Vorschlag unterstützen](/participate_in_referenda#second) indem sie eine gleiche Anzahl von Token sperren. Zu Beginn jedes Abstimmungszyklus wird der Referendumsvorschlag mit der höchsten Anzahl an *Seconding* (Gesamtzahl der hinterlegten Token) von der Community zur Abstimmung gestellt.

Der Abstimmungsmodus, der für Volksabstimmungen gilt, ist [Positive Turnout Bias](#referenda-voting-modes).

:::note
Alle HDX-Token, die hinterlegt werden, um ein Referendum vorzuschlagen oder zu unterstützen, werden für den gesamten Zeitraum gesperrt, bis das Referendum in den Abstimmungszyklus eingetreten ist. Es ist wichtig, sich daran zu erinnern, dass es keine Garantie dafür gibt, dass ein bestimmter Vorschlag jemals genügend Unterstützung erhält, um in die Abstimmungsrunde einzutreten, was bedeutet, dass Ihre Gelder möglicherweise auf unbestimmte Zeit gesperrt bleiben.
:::

### Council Referendum {#referenda-initiate-council}
Der Hydration-Rat hat die Befugnis, ein Referendum für eine Gemeinschaftsabstimmung vorzuschlagen. Wenn sie dies einstimmig tut, ist der anwendbare Abstimmungsmodus für das Referendum [Negative Turnout Bias](#referenda-voting-modes). Wenn das Referendum mit einfacher Mehrheit der Ratsstimmen vorgeschlagen wird, ist der Abstimmungsmodus für die Annahme der Vorschläge durch die Gemeinschaft [einfache Mehrheit](#referenda-voting-modes).

### Dringlichkeitsvorschläge des Technischen Komitees {#referenda-initiate-tech-committee}
Das Technische Komitee kann Notfallvorschläge einreichen, die sich mit (kritischen) Fehlerkorrekturen oder der schnellen Übernahme kampferprobter Funktionen befassen. Notfallvorschläge überspringen die Warteschlange und treten direkt in die Abstimmungsrunde ein. Die Community kann parallel zu allen regulären Vorschlägen, die in die Abstimmungsrunde eingegangen sind, über Dringlichkeitsvorschläge abstimmen. Darüber hinaus haben Dringlichkeitsvorschläge eine kürzere Abstimmungsfrist, um sicherzustellen, dass sie beschleunigt werden können.

### Absage eines Referendums {#cancel}
Ein einmal vorgeschlagenes Referendum kann erst nach Eintritt in die Abstimmungsrunde widerrufen werden. Eine Ausnahme von dieser Regel gilt für Vorschläge, die als protokollschädlich erachtet werden (z. B. Codeänderungen, die einen Fehler einführen). In diesem begrenzten Fall kann der Referendumsvorschlag vom [Hydration Council](/democracy_council) (mit 60 % Supermehrheit) oder dem [Technical Committee](/democracy_technical_committee) (einstimmig) annulliert werden.Alle Token, die von Unterstützern gesperrt wurden, die den Vorschlag unterstützen, werden verbrannt.

## Abstimmung in einem Referendum {#referenda-vote}
Hydration-Referenden haben einen Startzeitraum von 3 Tagen. Zu Beginn jeder neuen Periode wird der Vorschlag mit der höchsten Anzahl von Entsendungen aus der Warteschlange genommen und in eine Abstimmungsrunde gestellt. Jede Abstimmungsrunde hat eine Dauer von 3 Tagen. Während dieser Zeit können die Mitglieder der Gemeinschaft über ein gewichtetes, stakebasiertes Verfahren über das Referendum abstimmen. Sie tun dies, indem sie eine bestimmte Anzahl von HDX-Token für einen bestimmten Zeitraum sperren.

:::note
Gesperrte HDX-Token können für die Dauer des gewählten Sperrzeitraums nicht übertragen werden. Sie können jedoch weiterhin zum Abstecken und zur Abstimmung verwendet werden.
:::

### Stimmengewichtung {#referenda-votes-weighing}
Es gibt zwei Faktoren, die das Gewicht jeder Stimme in einem Referendum bestimmen. Der erste Faktor ist die **Menge an HDX-Token**, die der Wähler zur Unterstützung der Abstimmung einsperrt. Der zweite Faktor ist der sogenannte **Conviction Multiplier**, der die Dauer widerspiegelt, für die der Wähler bereit ist, die Token zu sperren.

```
vote_weight = tokens * conviction_multiplier
```

Abstimmungssperrfristen haben die gleiche Dauer wie die Inkraftsetzungsverzögerung. Wenn Token für 1 Abstimmungsperiode gesperrt sind, bedeutet dies, dass sie nach Beendigung der Abstimmung noch **3 Tage** gesperrt bleiben. Wähler können das Gewicht ihrer Stimmen beeinflussen, indem sie die Anzahl der Zeiträume, für die die Token gesperrt sind, verringern oder erhöhen. Es ist möglich, eine Stimme mit 0 Sperrperioden herauszubringen, ihr Gewicht wäre jedoch nur ein Bruchteil (Überzeugungsmultiplikator von 0,1x). Andererseits erhöht sich der Überzeugungsmultiplikator um 1 für jede Verdoppelung der Sperrperioden. Wie in der Tabelle unten gezeigt, würde das Sperren der Stimmen für maximal 32 Perioden den Verurteilungsmultiplikator auf das 6-fache erhöhen.

| Sperrzeiten    | Überzeugungsmultiplikator |
|:-----------------:|:---------------------:|
| 0                 |  0.1                  |
| 1                 |  1                    |
| 2                 |  2                    |
| 4                 |  3                    |
| 8                 |  4                    |
| 16                |  5                    |
| 32                |  6                    |

```
Beispiel:

Alice stimmt mit 5000 HDX und 0 Sperrzeiten.
Bob stimmt mit 100 HDX und 32 Sperrperioden ab.

Alice Gewicht: 500
Bob Gewicht: 600

```

### Abstimmungsmodi {#referenda-voting-modes}
Ein weiterer wichtiger Aspekt des Demokratiemoduls sind die unterschiedlichen Wahlmodi. Die für die Annahme oder Ablehnung eines Referendums erforderliche Stimmenschwelle kann je nach Einleitung des Referendums und der Wahlbeteiligung variieren. Die Wahlbeteiligung wird anhand der Gesamtmenge der HDX-Token berechnet, die zur Abstimmung im Referendum verwendet wurden (ohne Überzeugungsmultiplikatoren). Ob die Wahlbeteiligung niedrig war oder nicht, wird durch das Verhältnis zwischen Wahlbeteiligung und Elaktorate (d. h. der Gesamtzahl der stimmberechtigten HDX-Token) bestimmt..

#### Positive Turnout Bias
Dies ist der Standard-Abstimmungsmodus, wenn von der Gemeinschaft ein Referendum vorgeschlagen wird. Bei geringerer Wahlbeteiligung ist eine qualifizierte Supermehrheit von Ja-Stimmen erforderlich, um das Referendum zu genehmigen. Mit steigender Wahlbeteiligung sinkt die Schwelle in Richtung einer einfachen Mehrheit.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/positive-turnout-bias.png')} width="300px" />
</div>

#### Negative Turnout Bias
Dieser Abstimmungsmodus gilt für Referenden, die vom Rat einstimmig vorgeschlagen wurden. Solche Vorschläge erfordern eine qualifizierte Supermehrheit von "Nein"-Stimmen, um bei geringer Wahlbeteiligung abgelehnt zu werden. Mit steigender Wahlbeteiligung sinkt die Schwelle zur Ablehnung des Referendums in Richtung einer einfachen Mehrheit.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/negative-turnout-bias.png')} width="280px" />
</div>

#### Einfache Mehrheit
Volksabstimmungen, die vom Rat mehrheitlich (also nicht einstimmig) initiiert wurden, können von der Gemeinde mit einfacher Stimmenmehrheit (50% + 1) angenommen werden.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/simple-majority.png')} width="200px" />
</div>
