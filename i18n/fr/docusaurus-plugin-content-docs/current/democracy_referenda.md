---
id: democracy_referenda
title: Référendum
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Les référendums permettent aux parties prenantes de soumettre une proposition à un vote pondéré et basé sur les enjeux de la communauté au sens large. L'objet du référendum est une action suggérée qui affecte le protocole - par exemple, un paiement de la  trésorerie, ou même un changement dans le code d'exécution.

De manière générale, un seul référendum est soumis au vote à la fois. D'autres propositions référendaires en attente sont mises en file d'attente. Il existe des files d'attente distinctes pour les propositions soumises publiquement et pour les propositions du Conseil. Tous les 3 jours, le mécanisme référendaire sélectionne la meilleure proposition avec le plus de soutien, en alternant entre les deux files d'attente. Après qu'un référendum ait été voté et accepté, il y a une période dite de *délai de promulgation* de 3 jours qui doit s'écouler avant que la décision ne soit mise en vigueur. Une exception à ces règles s'applique aux propositions d'urgence du Comité technique qui traitent de problèmes majeurs de protocole et doivent être traitées rapidement.

## Initier un Référendum {#referenda-initiate}
Il existe plusieurs façons de lancer un référendum qui sont décrites plus en détail ci-dessous. La manière dont le référendum a été initié est déterminante pour le mode de scrutin applicable.

### Référendum Public {#referenda-initiate-public}
Tout détenteur de jetons HDX peut [proposer un référendum](/participate_in_referenda) en déposant le montant minimum requis de jetons HDX et en soumettant la proposition sur chaîne. Les autres membres de la communauté peuvent [soutenir la proposition](/participate_in_referenda) pour un référendum en verrouillant un nombre égal de jetons. Au début de chaque cycle de vote, la proposition de référendum avec le montant le plus élevé de *soutien* (total des jetons déposés) est soumise au vote de la communauté.

Le mode de vote qui s'applique aux référendums publics est le [Biais de Participation Positif](#referenda-voting-modes).

:::note
Tous les tokens HDX déposés pour proposer ou soutenir un référendum sont bloqués pendant toute la période jusqu'à ce que le référendum soit entré dans le cycle de vote. Il est important de se rappeler qu'il n'y a aucune garantie qu'une proposition donnée recevra un jour un soutien suffisant pour passer au tour de scrutin, ce qui signifie que vos fonds pourraient rester bloqués pour une période indéterminée.
:::

### Référendum du Conseil {#referenda-initiate-council}
Le Conseil HydraDX a le pouvoir de proposer un référendum pour un vote communautaire. S'il le fait à l'unanimité, le mode de vote applicable pour le référendum est le [Biais de Participation Positif](#referenda-voting-modes). Si le référendum est proposé à la majorité simple des voix du Conseil, alors le mode de vote pour l'acceptation des propositions par la communauté est la [Majorité simple](#referenda-voting-modes).

### Propositions d'urgence du Comité Technique {#referenda-initiate-tech-committee}
Le comité technique peut soumettre des propositions d'urgence qui traitent des corrections de bugs (critiques) ou de l'adoption rapide de fonctionnalités testées au combat. Les propositions d'urgence évitent la file d'attente et entrent directement dans le tour de scrutin. La communauté peut voter sur les propositions d'urgence en parallèle de toute proposition régulière qui est entrée dans le tour de scrutin. De plus, les propositions d'urgence ont une période de vote plus courte pour garantir qu'elles peuvent être accélérées.

### Annuler un référendum {#cancel}
Une fois qu'un référendum a été proposé, il ne peut être révoqué tant qu'il n'est pas entré dans le tour de scrutin. Une exception à cette règle est faite pour les propositions jugées préjudiciables au protocole (par exemple, des changements de code introduisant un bug). Dans ce cas limité, la proposition de référendum peut être annulée par le [Conseil HydraDX](/democracy_council) (avec une majorité qualifiée de 60%) ou le [Comité technique](/democracy_technical_committee) (à l'unanimité). Tous les jetons qui ont été verrouillés par les supporters appuyant la proposition sont brûlés.

## Voter lors d'un référendum {#referenda-vote}
Les référendums HydraDX ont une période de lancement de 3 jours. Au début de chaque nouvelle période, la proposition la plus appuyée est retirée de la file d'attente et soumise à un tour de scrutin. Chaque tour de scrutin a une durée de 3 jours. Pendant cette période, les membres de la communauté peuvent voter sur le référendum en utilisant un mécanisme pondéré basé sur les enjeux. Ils le font en verrouillant un certain nombre de jetons HDX pendant une période donnée.

:::note
Les jetons HDX verrouillés ne peuvent pas être transférés pendant la durée de la période de verrouillage choisie. Cependant, ils peuvent toujours être utilisés pour le staking et pour le vote.
:::

### Pesage des votes {#referenda-votes-weighing}
Deux facteurs déterminent le poids de chaque voix lors d'un référendum. Le premier facteur est le **montant de jetons HDX** que l'électeur bloque pour soutenir le vote. Le deuxième facteur est ce que l'on appelle le **multiplicateur de conviction** qui reflète la durée pendant laquelle l'électeur est prêt à bloquer les jetons.

```
poids_du_cote = tokens * multiplicateur_de_conviction
```

Les périodes de blocage des votes ont la même durée que le délai de promulgation. Si les tokens sont verrouillés pendant 1 période de vote, cela signifie qu'ils resteront verrouillés pendant **3 jours** après la fin du vote. Les électeurs peuvent influencer le poids de leurs votes en diminuant ou en augmentant le nombre de périodes pendant lesquelles les jetons sont verrouillés. Il est possible de faire sortir un vote avec 0 périodes de blocage, cependant son poids ne serait qu'une fraction (multiplicateur de conviction de 0,1x). D'autre part, le multiplicateur de conviction augmente de 1 pour chaque doublement des périodes de blocage. Comme le montre le tableau ci-dessous, bloquer les votes pour un maximum de 32 périodes augmenterait le multiplicateur de conviction à 6x.

| Période de vérouillage | Multiplicateur de Conviction |
|:----------------------:|:----------------------------:|
| 0                      |  0.1                         |
| 1                      |  1                           |
| 2                      |  2                           |
| 4                      |  3                           |
| 8                      |  4                           |
| 16                     |  5                           |
| 32                     |  6                           |

```
Un example:

Alice vote avec 5000 HDX et 0 période de vérouillage.
Bob vote avec 100 HDX et 32 périodes de vérouillage.

Poids d'Alice: 500
Poids de Bob: 600
```

### Modes de vote {#referenda-voting-modes}
Un autre aspect important du module de démocratie sont les différents modes de vote qui s'appliquent. Le seuil de suffrages requis pour approuver ou rejeter un référendum peut varier en fonction de la manière dont le référendum a été initié et du taux de participation. Le taux de participation est calculé sur la base du montant total de jetons HDX qui ont été utilisés pour voter lors du référendum (multiplicateurs de conviction exclus). Le fait que le taux de participation ait été faible ou non est déterminé par la relation entre le taux de participation et l'élactorat (c'est-à-dire le nombre total de jetons HDX éligibles pour voter).

#### Biais de Participation Positif
C'est le mode de vote par défaut lorsqu'un référendum est proposé par la Communauté. À des taux de participation inférieurs, une majorité qualifiée de `oui` est requise pour approuver le référendum. Au fur et à mesure que le taux de participation augmente, le seuil diminue vers une majorité simple.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/positive-turnout-bias.png')} width="300px" />
</div>

#### Biais de Participation Positif
Ce mode de vote s'applique aux référendums qui ont été proposés par le Conseil à l'unanimité. De telles propositions nécessitent une majorité qualifiée de `non` pour être rejetées à faible taux de participation. Au fur et à mesure que le taux de participation augmente, le seuil de rejet du référendum diminue vers une majorité simple.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/negative-turnout-bias.png')} width="280px" />
</div>

#### Majorité Simple
Les référendums qui ont été initiés par le Conseil avec un accord majoritaire (c'est-à-dire pas à l'unanimité) peuvent être acceptés par la communauté à la majorité simple des voix (50% + 1).

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/simple-majority.png')} width="200px" />
</div>
