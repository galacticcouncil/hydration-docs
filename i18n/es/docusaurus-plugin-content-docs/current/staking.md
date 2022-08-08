---
id: staking
title: Staking
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Esta sección proporciona una breve introducción sobre cómo funciona el staking  en la red HydraDX. Si no está familiarizado conel stake en una red basada en substrate, le recomendamos que lea esto antes de decidirse a participar.

El mecanismo de consenso utilizado por HydraDX se denomina Prueba de participación nominada (NPoS). NPoS es una variación de Proof-of-Stake y se usa en blokchains basadas en substrate como Polkadot y Kusama. Los dos actores centrales en un entorno NPoS se denominan [**validadores**](#validadores) y [**nominadores**](#nominadores).
 
### Validadores {#validators}

Los validadores participan en la red ejecutando nodos de validación, que proporcionan la infraestructura que permite que la red HydraDX funcione de forma segura. Los nodos de validación cumplen tres funciones que son de suma importancia para el mecanismo de consenso. En primer lugar, validan la información contenida en bloques, como la identidad de las partes y el objeto del contrato. En segundo lugar, los validadores participan en la producción de nuevos bloques basados ​​en las declaraciones de validez de otros validadores. En tercer lugar, garantizan la finalidad de las transacciones blockchain.

Una característica importante de NPoS es que no todos los validadores participan en el proceso de validación al mismo tiempo. Solo los validadores del *conjunto de validadores activos* realizan las operaciones mencionadas anteriormente y obtienen recompensas por hacerlo. El conjunto de validadores activos está limitado a un número fijo de nodos. En HydraDX Snakenet esperamos que este número sea de alrededor de 300, ampliándolo a medida que avanzamos hacia la red principal.

Los validadores se eligen en el conjunto activo siguiendo el principio de *representación justificada proporcional*. Este principio tiene como objetivo salvaguardar la descentralización y la representación justa al asignar los espacios disponibles a los validadores en proporción a su participación nominada. Cuanto mayor sea la cantidad de tokens apostados con un validador determinado, mayor será la probabilidad de que el nodo sea elegido en el conjunto activo. Los validadores que no están incluidos en el conjunto activo se colocan en una lista de espera. El conjunto de validadores activos se actualiza al comienzo de cada era, proporcionando una posible ventana de entrada para nuevos validadores.

:::note
En una red basada en substrate, el tiempo se divide en unidades llamadas **eras**. En HydraDX Snakenet, *1 Era = 24 horas*.

:::

Participar como validador requiere un cierto nivel de conocimiento técnico para configurar y mantener de forma segura un nodo validador. El mal comportamiento del nodo validador puede ser castigado con recortes o slash, lo que resultará en una pérdida involuntaria de fondos para usted y sus nominadores. Si cree que tiene la experiencia necesaria para ejecutar un nodo de validación, puede consultar nuestra [guía de validación](/node_setup). De lo contrario, le recomendamos que considere participar como nominador.

### Nominadores {#nominators}

Los nominadores ayudan a asegurar la red al nominar validadores para ser elegidos en el conjunto de validadores activos. Lo hacen con el stake de sus tokens HDX con los validadores de su elección. El proceso de nominación no requiere ejecutar y mantener nodos, lo que hace que esta forma de participación sea más accesible para todos. Los tokens que se utilizan para nominar validadores están *bonded*, lo que significa que están congelados y no se pueden utilizar para otros fines. En cualquier momento es posible cambiar o detener sus nominaciones, lo que se reflejará al final de la era actual. Los nominadores también pueden liberar sus tokens, sin embargo, esto solo entrará en vigencia después de un período de espera de *28 días* después de la transacción de desvinculación.

Antes de nominar, siempre debe hacer su debida diligencia e investigar la credibilidad de los validadores elegidos. Puede hacerlo verificando su identidad, así como información histórica como puntos de era, participación elegida, recompensas y recortes. Sin embargo, al comienzo de Snakenet, podría ser difícil encontrar toda esta información. Si tiene dudas sobre la elección de los validadores, acérquese a nosotros en Discord y compartiremos con usted nuestra lista seleccionada por la comunidad de validadores de confianza.

Otro punto a considerar al elegir un validador es el *porcentaje de comisión de recompensa*. Esto representa la proporción de las recompensas que se pagarán al validador por brindar sus servicios a los nominadores. El porcentaje de comisión más bajo no siempre es el mejor: ejecutar un nodo disponible y con rendimiento tiene altos costos operativos que solo pueden cubrirse de manera sostenible exigiendo una comisión de recompensa realista.

En HydraDX, es posible nominar un **máximo de 16 validadores** con su stake. Sin embargo, nominar a más de un validador no significa necesariamente que su participación se asigne a todos los validadores elegidos cada vez. Cuando comience la siguiente era, Substrate ejecutará una serie de algoritmos complejos para determinar la distribución más óptima de todas las nominaciones dentro de la red, con el objetivo final de decidir qué validadores se incluirán en el conjunto de validadores activos. Si ninguno de los validadores que ha elegido recibe suficiente respaldo para ser incluido en el conjunto activo, sus **nominaciones permanecerán inactivas** durante la duración de la era (*24 horas*), y tampoco recibirá recompensas por esto. período. Para maximizar las posibilidades de que su participación se incluya en el conjunto de validadores activos, le recomendamos encarecidamente que **nomine varios validadores**, lo que también contribuirá a nuestros esfuerzos para mejorar la descentralización.

:::note

Asegúrese de no nominar validadores que estén suscritos en exceso. Actualmente, existe un **límite de 64 nominaciones** para un solo validador, después de lo cual se supera la suscripción. Cuando comience la siguiente era, un validador con exceso de suscripciones solo será elegido utilizando el número máximo permitido de nominadores. Si esto ocurre, los nominadores con la participación más alta tienen prioridad, mientras que los nominadores con la participación más baja serán ignorados y no ganarán ningún premio durante esa era.

Nominar es una forma más accesible de hacer stake, pero también conlleva riesgos. Los validadores que infrinjan las reglas de la red pueden ser castigados con recortes, lo que resultará en una pérdida de fondos tanto para el validador como para sus nominadores. Por eso es importante nominar solo nodos de validación acreditados.

:::

Si estas interesado en hacer stake con tus tokens, nominando con los validadores, puede leer nuestra guia para nominar.

