---
id: staking
title: Staking (déléguer)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Cette section apporte une brève présentation sur le fonctionnement du staking (délégation) sur le réseau HydraDX. Si vous n'êtes pas familier avec le staking sur un réseau basé sur Substrate, nous vous recommandons de lire ceci avant de décider de participer.

Le mécanisme de consensus utilisé par HydraDX est appelé Nominated Proof-of-Stake (NPoS) (Preuve de délégation nominée). Le NPoS est une variante du Proof-of-Stake (Preuve de délégation) et est utilisé dans les blockchains (chaînes de blocs) basées sur Substrate comme Polkadot et Kusama. Les deux acteurs principaux dans un environnement NPoS sont appelés [**validateurs**](#validators) and [**nominateurs**](#nominators).

### Validateurs {#validators}

Les validateurs participent au réseau en exécutant des nodes validateurs, qui fournissent l'infrastructure qui permet au réseau HydraDX de fonctionner en toute sécurité. Les nodes validateurs remplissent trois fonctions qui sont d'une importance capitale dans le mécanisme de consensus. En premier lieu, ils valident les informations contenues dans les blocs, comme l'identité des différent partis et l'objet du contrat. En second lieu, les validateurs participent dans la production de nouveaux blocs basé sur la validité des déclarations d'autres validateurs. En dernier lieu, Ils garantissent la finalité des transactions de la blockchain. 

Une caractéristique important du NPoS est que tous les validateurs ne participent pas au procédé de validation en même temps. Seuls les validateurs dans le *active validator set* (l'ensemble des validateurs actifs) effectuent les opérations mentionnées ci-dessus et gagnent des récompenses. L'ensemble des validateurs actifs est limité à un nombre de nodes fixe. Durant HydraDX Snakenet nous attendons que ce nombre soit d'environ 300, nombre qui augmentera au fur et à mesure que nous progresserons vers le mainnet (réseau principal).

Les validateurs son élus dans un ensemble actif en suivant les principe de la "représentation proportionnelle justifiée". Ce principe vise à garantir la décentralisation et la juste représentation en assignant les places disponibles aux validateurs en proportion de leur "nominated stake" (délégation nominée). Plus grand est le nombre de tokens délégués à un validateur donné, Plus grandes sont les chances que cette note va être élue dans l'ensemble actif. Les validateurs qui ne sont pas inclus dans l'ensemble actif sont placés en liste d'attente. L'ensemble des validateurs actifs est mis à jour au début de chaque ère, procurant une fenêtre d'entrée possible pour de nouveaux validateurs.

:::note

Dans un réseau basé sur Substrate, le temps est divisé en unités appelés **eras** (des ères). Dans HydraDX Snakenet, *1 Ère = 24 heures*.

:::

Participer en tant que validateur requiert un certain niveau de connaissances techniques pour installer et maintenir de manière sécurisée un node validateur. Les comportements non conformes du node validateur peut être punis de slashing, qui résulte en une perte involontaire des fonds de vos nominateurs. Si vous pensez que vous avez l'expérience nécessaire pour faire fonctionner un node validateur, vous pouvez vous référer à notre [guide du validateur](/node_setup). Autrement, nous recommandons fortement que vous considériez participer en tant que nominateur.

### Nominateurs {#nominators}

Les nominateurs aident à sécuriser le réseau en nominant les validateurs à élire dans l'ensemble des validateurs actifs. Ils le font en déléguant (staking) leurs tokens HDX aux validateurs de leur choix. Le procédé de nomination ne requiert pas de faire fonctionner et de maintenir des nodes, rendant cette forme de staking plus accessible à tous. Les tokens qui sont utilisés pour nominer les validateurs sont *bonded* (engagés / liés), ce qui veut dire qu'ils sont bloqués et ne peuvent pas être utilisés à d'autres fins. Il est possible à tout moment de changer ou d'arrêter vos nominations ce qui sera reflété à la fin de l'ère courante. Les nominateurs peuvent aussi libérer leurs tokens, cependant cela ne sera effectif qu'après une période d'attente de *28 jours* suivant la transaction de désengagement.

Avant de nominer, vous devriez toujours faire vos recherches et vérifier la crédibilité des validateurs choisis. Vous pouvez le faire en vérifiant leur identité aussi bien que leurs informations d'historique comme les points d'ère, leur délégation élue, les récompenses et les punitions. Cependant au début du Snakenet it pourrait être difficile de trouver ces informations. Si vous avez un doute à propos du choix des validateurs, contactez nous sur le Discord et nous partagerons la liste organisée de notre communauté, de validateurs de confiance, avec vous. 

Un autre point à considérer au moment de choisir un validateur est le *reward commission percentage* (pourcentage de commission de récompense). Cela représente la part de la récompense qui sera payée au validateur pour fournir ses services aux nominateurs. Le pourcentage de commission le plus bas n'est pas toujours le mieux - faire fonctionner une node performante et disponible comporte des coûts opérationnels élevés qui peuvent seulement être couverts durablement en demandant une commission de récompense réaliste. 

Dans HydraDX, il est possible de nominer un **maximum de 16 validateurs** avec votre stake. Nominer plus d'un validateur, cependant, ne veux pas nécessairement dire que votre stake va être assigné à tous les validateurs choisis à chaque fois. Quand l'ère suivante commence, Substrate va opérer une série d'algorithme complexes pour déterminer la distribution optimale de toutes les nominations au sein du réseau, avec le but ultime de décider quels validateurs vont être inclus dans l'ensemble de validateurs actifs. Si aucun des validateurs que vous avez choisis ne reçoivent suffisamment de soutient pour être inclus dans l'ensemble actif, vos **nominations resteront inactives** pour la durée de l'ère (*24 heures*), et vous ne recevrez pas de récompense non plus pour cette période. Pour maximiser vos chances d'avoir votre stake inclus dans l'ensemble des validateurs actifs, nous recommandons fortement que vous **nominiez plusieurs validateurs**, ce qui va contribuer à notre effort pour améliorer la décentralisation.

:::note

Assurez vous que vous ne nominiez pas des validateurs qui sont sur-souscrits. Actuellement, il y a une **limite de 64 nominations** par validateur , après quoi il devient sur-souscrit. Quand l'ère suivante commence, un validateur sur-souscrit va être élu seulement en utilisant la somme maximum autorisée de nominateurs. Si cela arrive, les nominateurs avec le plus grand stake ont priorité, tandis que les nominateurs avec le stake le plus petit seront ignorés et ne gagneront pas de récompense pendant cette ère.

Nominer est une forme de staking plus accessible, cependant, cela comportent aussi des risques. Les validateurs qui enfreignent les règles du réseau peuvent être punis de slashing, entraînant une perte de fonds pour les validateurs et les nominateurs. C'est pourquoi il est important de ne nominer que des nodes validateurs honnêtes.

:::

Êtes vous intéressés par le staking de vos HDX ? Regardez notre [guide pour nominateur](/start_nominating) pour commencer à nominer.
