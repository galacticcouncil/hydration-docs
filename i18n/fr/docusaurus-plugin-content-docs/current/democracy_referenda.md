---
id: democracy_referenda
title: Référendums
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Les référendums permettent aux parties prenantes de soumettre une proposition à un vote pondéré, basé sur la délégation, par la communauté au sens large. L'objet du référendum est une action suggérée qui affecte le protocole - par exemple, un paiement de trésorerie, ou même un changement dans le code runtime.

De manière générale, seul un référendum est amené à être voté à la fois. Les autres propositions de référendums en suspens sont mis dans une file d'attente. Il y a des files séparées pour des propositions soumises publiquement et pour des des propositions de Conseil. Tous les 3 jours, le mécanisme de référendums choisit la meilleure proposition avec le plus haut montant de soutient, en alternant entre les deux files d'attente. Après qu'un référendum a été voté et accepté, il y a une période de *délai d'adoption* de 3 jours qui devront s'écouler avant que la décision ne soit effective. Une exception à ces règles s'applique pour les propositions d'urgence par le Comité Technique qui gèrent les problèmes majeurs de protocole et ont besoin d'être accélérées.

## Lancer un Référendum {#referenda-initiate}
Il y a plusieurs façons de lancer un référendum qui sont décrites plus en détail ci-dessous. La façon dont un référendum est initié est décisive pour le mode de vote applicable.

### Référendum Public {#referenda-initiate-public}
N'importe quel détenteur de tokens HDX peut [proposer un référendum](/participate_in_referenda) en déposant le montant minimum requis de tokens HDX et en soumettant la proposition sur-chaîne. D'autres membres de la communauté peuvent [soutenir (*appuyer*) la proposition](/participate_in_referenda) pour un référendum en verrouillant un montant égal de tokens. Au début de chaque cycle de vote, la proposition de référendum avec le plus important montant d'*appui* (tokens totaux déposés) est avancé pour un vote par la communauté.

Le mode de vote qui s'applique aux référendums publics est [Biais de Participation Positif](#referenda-voting-modes).

:::note
Tous les tokens HDX qui sont déposés pour proposer ou appuyer un référendum sont verouillés jusqu'à ce que le référendum soit entré dans un cycle de vote. Il est important de se rappeler qu'il n'y a pas de garantie qu'une proposition donnée va recevoir assez de soutient pour entrer dans un tour de scrutin, ce qui veut dire que vos fonds pourraient rester verrouillés pendant une période indéfinie.
:::

### Référendum du Conseil {#referenda-initiate-council}
Le Conseil Hydration a les pouvoirs de proposer un référendum pour un vote à la communauté. Si cela se fait anonymement, le mode de vote applicable pour le référendum est le [Biais de Participation Négatif](#referenda-voting-modes). Si le référendum est proposé avec une majorité simple des votes du Conseil, alors le mode de vote pour accepter les propositions par la communauté est la [Simple Majorité](#referenda-voting-modes).

### Propositons d'Urgence par le Comité Technique {#referenda-initiate-tech-committee}
Le comité technique peut soumettre des propositions d'urgence qui gère les corrections de bugs (critiques) ou l'adoption rapide de fonctionalité éprouvée. Les propositions d'urgence sautent la file d'attente et entre directement dans la phase de scrutin. La communauté peut voter les propositions d'urgence en parallèle avec n'importe quelle autre proposition qui a intégré le tour de scrutin. De plus, les propositions d'urgence ont une période de vote plus courtes afin de s'assurer qu'elles sont accélérées. 

### Annuler un Référendum {#cancel}
Une fois qu'un référendum a été proposé, il ne peut pas être révoqué avant d'entrer le tour de scrutin. Une exception à cette règle est faite pour les propositions qui sont jugées préjudiciables au protocole (ex: des changement de code qui introduisent un bug). Dans ce cas précis, la proposition de référendum peut être annulée par le [conseil Hydration](/democracy_council) (avec une super majorité de 60%) ou le [Comité Technique](/democracy_technical_committee) (à l'unanimité). Tous les tokens qui étaient verrouillés par les soutiens appuyant la proposition sont détruits.

## Voter dans un référendum {#referenda-vote}
Les référendums Hydration ont une période de lancement de 3 jours. Au début de chaque période, la proposition avec le plus au montant d'appuis est prise depuis la file d'attente et soumise au tour de scrutin. Chaque tour de scrutin a une durée de 3 jours. Pendant cette période, les membres de la communauté peuvent voter au référendum en utilisant un mécanisme pondéré, basé sur la délégation. Ils le font en verrouillant un certain montant de tokens HDX pour une période de temps donnée.

:::note
Les tokens HDX verrouillés ne peuvent pas être transférés pendant la durée de la période de verrouillage choisie. Cependant, ils peuvent toujours être utilisés pour la délégation et le vote.
:::

### Pesée des Votes {#referenda-votes-weighing}
Il y a deux facteurs qui déterminent le poids de chaque vote dans un référendum. Le premier facteur est le **montant de tokens HDX** que le votant verrouille en soutient au vote. Le second facteur est le soi-disant **conviction multiplier (multiplicateur de conviction)** qui reflète la durée pendant laquelle le votant est prêt à verrouiller ses tokens.

```
poids_du_vote = tokens * multiplicateur_de_conviction
```

Les périodes de verrouillage de vote ont la même durée que les délais d'adoption. Si les tokens sont verrouillés pour 1 période de vote, cela signifie qu'ils vont rester verrouillés pour **3 jours** après que le vote soit terminé. Les votants peuvent influencer le poids de leur vote en diminuant ou en augmentant le montant de périodes pendant lesquelles les tokens seront verrouillés. Il est possible de participer à un vote avec une période de verrouillage de 0 jour, cependant son poids serait seulement une fraction de ce qu'il serait autrement (multiplicateur de conviction de 0,1). D'un autre côté, le multiplicateur de conviction augmente de 1 pour chaque doublement des périodes de verrouillages. Comme montré dans le tableau ci-dessous, verrouiller les votes pour un maximum de 32 période augmenterait le multiplicateur de conviction à 6.

| Périodes de verrouillages      | Multiplicateur de conviction |
|:------------------------------:|:----------------------------:|
| 0                              |  0.1                         |
| 1                              |  1                           |
| 2                              |  2                           |
| 4                              |  3                           |
| 8                              |  4                           |
| 16                             |  5                           |
| 32                             |  6                           |

```
Un exemple:

Alice vote avec 5000 HDX et 0 période de verrouillage.
Bob vote avec 100 HDX et une 32 périodes de verrouillage. 

Poids du vote d'Alice: 500
Poids du vote de Bob: 600
```

### Modes de Scrutins {#referenda-voting-modes}
Un autre aspect important du module de démocratie sont les différents modes de scrutin qui s'appliquent. Le seuil de votes requis pour approuver ou rejeter un référendum peut varier selon comment le référendum a été lancer et selon la participation au vote. La participation est calculée en se basant sur le montant total de HDX qui étaient utilisés pour voter le référendum (multiplicateurs de conviction exclus). Que la participation soit basse ou non est déterminé par la relation entre la participation et l'électorat (Le nombre total de HDX éligible au vote).

#### Biais de Participation Positif
C'est le mode de scrutin par défaut quand un référendum est proposé par la communauté. Avec des participations basses, une super majorité qualifié de `yes`/`oui` est requise afin d'approuver le référendum. Au fur et à mesure que la participation augmente, le seuil diminue jusqu'à une simple majorité.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/positive-turnout-bias.png')} width="300px" />
</div>

#### Biais de Participation Négatif
Ce mode de scrutin s'applique aux référendums qui ont été proposés par le Conseil à l'unanimité. De telles propositions exigent une super majorité qualifiée de vote `no`/`non` pour être rejetées avec des participations basses. Au fur et à mesure que la participation augmente, le seuil pour rejeter le référendum diminue à une simple majorité.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/negative-turnout-bias.png')} width="280px" />
</div>

#### Simple Majorité
Les référendums qui ont été lancés par le Conseil avec un accord majoritaire (non anonymement) peuvent être acceptés par la communauté avec une simple majorité des votes (50% + 1).

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/simple-majority.png')} width="200px" />
</div>
