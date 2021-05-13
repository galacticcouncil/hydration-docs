---
id: staking_rewards
title: Recompesas de Staking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Las recompensas del staking incentivan a los validadores y nominadores a [hacer stake de sus tokens HDX](/staking) . Hay tres tipos de recompensas por staking que se analizan en este artículo:  [base rewards](#base-rewards), [era points](#era-points) y los [tips](#tips)

## Recompensas Base  {#base-rewards}

Al final de cada era (24 horas), todos los grupos de validadores activos reciben recompensas básicas en forma de tokens HDX. Un pool de validación consiste en un validador elegido (teniendo su propio HDX en stake ) y todas las nominaciones activos que respaldan el validador (para más información leer en [Staking](/staking) ). Un principio central del mecanismo de consenso de Proof-of-Stake (NPoS) es que **trabajos iguales traen recompensas iguales** . En otras palabras, dado que todos los grupos de validadores realizan esencialmente el mismo trabajo, las recompensas básicas disponibles se dividen por igual entre ellos. Esto significa que los grupos de validadores no son recompensados en proporción a su participación total, lo cual es una gran diferencia con las redes tradicionales de PoS.

El mecanismo de compartir las recompensas básicas por igual entre todos los grupos de validadores participantes contribuye a la seguridad de la red al evitar la concentración de poder en unos pocos grupos de validadores, fortaleciendo así la descentralización. Con el tiempo, incentiva a los nominadores a nominar validadores con una participación menor de HDX. Este proceso eventualmente equilibrará las relaciones de poder en la red y conducirá a una situación en la que todos los grupos de validadores tengan aproximadamente una cantidad equivalente de HDX apostado.

La distribución de recompensas se lleva a cabo de la siguiente manera. Después de calcular la cantidad (igual) de recompensas para cada grupo de validadores, el validador recibe su parte en forma de **comisiones** por mantener el nodo. Como segundo paso, los tokens restantes se distribuyen entre todas las apuestas de manera **proporcional** (incluido el monto del propio validadorr). Esto significa que los stake más altos recibirán una mayor proporción de las recompensas que se atribuyen al grupo de validadores en particular.

:::note
En nuestra red de prueba incentivada llamada Snakenet, la cantidad de recompensas recibidas por hacer stake de sus tokens HDX se estima en alrededor del **50% APY** .
:::

## Puntos Era  {#era-points}

Los validadores pueden ganar recompensas adicionales en proporción a los puntos de era que hayan ganado en la era pasada. Estas recompensas se suman a las recompensas básicas descritas anteriormente. Los validadores pueden ganar puntos de era mediante la realización de determinadas acciones específicas como:

* Produciendo un non-uncle block en la Relay 
* Produciendo una referencia a un uncle block no referenciado previamente
* Produciendo un uncle block referenciado

:::note
 Un uncle block es un bloque de la Relay Chain que es válido en todos los aspectos, que sin embargo no ha logrado convertirse en canonical. Esto puede suceder cuando dos o más validadores son productores de bloques en una sola ranura, y el bloque producido por un validador llega al siguiente productor de bloques antes que los demás. Los bloques rezagados se denominan uncle block
:::

## Tips {#tips}

Finalmente, los validadores pueden ganar tips que también se agregan a las recompensas básicas al final de cada era. Los tips representan una tarifa de transacción adicional que los usuarios pueden pagar opcionalmente para darle a su transacción una prioridad más alta.
