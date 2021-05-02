---
id: staking_rewards
title: Récompenses de délégation (staking)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Les récompenses de staking (délégation) incitent les validateurs et nominateurs à [déléguer leurs tokens HDX](/staking). Il y a trois types de récompenses de staking qui sont détaillés dans l'article: [les récompenses de base](#base-rewards), [les points d'ère](#era-points) et [les pourboires (tips)](#tips).

## Récompenses de base {#base-rewards}

À la fin de chaque ère (24h), toutes les pools de validateurs actifs reçoivent des récompenses de base sous la forme de tokens HDX. Une poule de validateur est constitué d'un validateur élu (qui garde ses propres HDX délégué (staked)) et toutes les nominations actives qui soutiennent le validateur (pour plus d'informations, voir [Staking (déléguer)](/staking)). Un principe central de la mécanique de consensus du Nominated Proof-of-Stake (NPOS) (en français, Preuve de délégation nominée) est que **à travail égal, récompenses égales**. En autres termes, puisque toutes les pools de validateur produisent essentiellement le même travail, **les récompenses de base disponibles sont partagées de manière égale** entre elles. Cela signifie que les pools de validateurs **ne sont pas** récompensées en fonction de leur délégation totale, ce qui est un différence majeure avec avec les réseaux PoS (preuve de délégation) traditionnels. 

La mécanique de partager les récompenses de base de manière égale entre les poules validatrices participantes contribue à la sécurité du réseau en empêchant la concentration de pouvoir chez une petite partie des poules validatrices, renforçant ainsi la décentralisation. Au fil du temps, cela incite les nominateurs à nominer des validateurs avec des délégations de HDX plus petites. Ce processus équilibrera à la longue la relation de pouvoir dans le réseau et mènera à une situation dans laquelle toutes les poules validatrices auront plus ou moins un montant de HDX délégués équivalent.

La distribution de récompenses se passe comme suit. Après avoir calculé le montant (égal) de récompenses pour chaque pool validatrice, le validateur reçoit sa part sous la forme de **frais de commission** pour maintenir le node (nœud). pour la deuxième étape, les tokens restants sont distribués parmi tous les stakes (délégations) **proportionnellement** (en incluant la propre délégation (stake) du validateur). Cela signifie que des délégations plus élevées recevront une plus grosse proportion des récompenses attribuées à une poule validatrice particulière.

:::note
Dans notre testnet récompensé appelé Snakenet, le montant de récompenses reçues pour la délégation de vos tokens HDX est estimé aux alentours de **50% de APY (taux de rendement moyen annuel)**.
:::

## Points d'ère {#era-points}

Les validateurs peuvent gagner des récompenses supplémentaires en proportions des points d'ère qu'ils ont gagnés sur l'ère passée. Ces récompenses sont ajoutées aux récompenses de base décrites ci-dessus. Les validateurs peuvent gagner des points d'ère en accomplissant certaines tâches spécifiques, telles que:

* Produire un bloc non-oncle (non-uncle) dans la chaîne relai.
* produire une référence à un bloc oncle (uncle block) non encore référencé.
* produire un bloc oncle référencé.

:::note
Un bloc oncle est un bloc valide de la chaîne relai sous tout aspect, qui cependant ne peut pas être canonique. Cela peut arriver quand deux validateurs ou plus sont producteurs de blocs dans un seul slot (créneau), et que le bloc produit par un validateur atteint le producteur de bloc suivant avant les autres. Les blocs en retards sont appelés blocs oncles.
:::

## Pourboires {#tips}

Enfin, les validateurs peuvent gagner des pourboires qui seront aussi ajoutés aux récompenses de base à la fin de chaque ère. Les pourboire représentent un frais de transaction supplémentaire qui peut être payé optionnellement par les utilisateurs qui donnent une plus haute priorité à leur transaction.
