---
id: democracy_referenda
title: Referéndum
---

import useBaseUrl from '@docusaurus/useBaseUrl';


Los referéndums permiten a las partes interesadas someter una propuesta a una votación ponderada y basada en stake por parte de la comunidad en general. El objeto del referéndum es alguna acción sugerida que afecte al protocolo, por ejemplo, un pago de la Tesorería o incluso un cambio en el código runtime

En términos generales, solo se somete a votación un referéndum a la vez. Otras propuestas de referéndum pendientes se ponen en cola. Hay colas separadas para las propuestas presentadas públicamente y para las propuestas del Consejo. Cada 3 días, el mecanismo de referéndum elige la primera propuesta con la mayor cantidad de apoyo, alternando entre las dos colas. Una vez que se ha votado y aceptado un referéndum, hay un período de * promulgación* de 3 días que debe transcurrir antes de que la decisión entre en vigor. Se aplica una excepción a estas reglas para las propuestas de emergencia del Comité Técnico que se ocupan de los principales problemas de protocolo y deben acelerarse.

## Iniciando  un referéndum {#referenda-initiate}

Hay varias formas de iniciar un referéndum que se describen con mayor detalle a continuación. La forma en que se inició el referéndum es decisiva para el modo de votación aplicable.

### Referéndum Público {#referenda-initiate-public}

Cualquier titular de tokens HDX puede [proponer un referéndum](/participate_in_referenda)) depositando la cantidad mínima requerida de tokens HDX y enviando la propuesta on-chain. Otros miembros de la comunidad pueden [apoyar (*secundar*) la propuesta](/participate_in_referenda) para un referéndum bloqueando una cantidad igual de tokens. Al comienzo de cada ciclo de votación, la propuesta de referéndum con la mayor cantidad de *secundaciones* (total de tokens depositados) se avanza a votación por parte de la comunidad.

El modo de votación que se aplica a los referendos públicos es [Sesgo de participación positiva](#referenda-voting-modes)

:::note
Todos los tokens HDX que se depositan para proponer o apoyar un referéndum se bloquean durante todo el período hasta que el referéndum haya entrado en el ciclo de votación. Es importante recordar que no hay garantía de que una propuesta determinada reciba el respaldo suficiente para pasar a la ronda de votación, lo que significa que sus fondos pueden permanecer bloqueados por un período indefinido.
:::

### Referéndum del Consejo {#referenda-initiate-council}

El Consejo de HydraDX tiene el poder para proponer un referéndum para que la comunidad lo vote.Si lo hace por unanimidad, el modo de votación aplicable para el referéndum es [Sesgo de participación negativa](#referenda-voting-modes). Si el referéndum se propone con una mayoría simple de los votos del Consejo, entonces el modo de votación para aceptar las propuestas de la comunidad es [Mayoría simple](#referenda-voting-modes).

### Propuestas de emergencia del Comité Técnico {#referenda-initiate-tech-committee}

El Comité Técnico puede enviar propuestas de emergencia que se ocupen de la corrección de errores (críticos) o la rápida adopción de funciones probadas en batalla. Las propuestas de emergencia se saltan la cola de espera y entran directamente en la ronda de votación. La comunidad puede votar sobre propuestas de emergencia en paralelo a cualquier propuesta regular que haya entrado en la ronda de votación. Además, las propuestas de emergencia tienen un período de votación más corto para garantizar que puedan acelerarse.

### Cancelar un referéndum {#cancel}

Una vez que se ha propuesto un referéndum, no se puede revocar hasta que no haya entrado en la ronda de votación. Se hace una excepción a esta regla para las propuestas que se consideran perjudiciales para el protocolo (por ejemplo, cambios de código que introducen un error). En este caso limitado, la propuesta de referéndum puede ser cancelada por el [Consejo de HydraDX](/democracy_council) (con una supermayoría del 60%) o el [Comité Técnico](/democracy_technical_committee) (por unanimidad). Todos los tokens que fueron bloqueados por los partidarios que secundaban la propuesta se queman.

## Votación de un Referendum {#referenda-vote}

Los referendos de HydraDX tienen un período de lanzamiento de 3 días. Al comienzo de cada nuevo período, la propuesta con la mayor cantidad de apoyo se toma de la cola de espera y se coloca en una ronda de votación. Cada ronda de votación tiene una duración de 3 días. Durante este período, los miembros de la comunidad pueden votar en el referéndum utilizando un mecanismo ponderado de base de intereses. Lo hacen bloqueando una cierta cantidad de tokens HDX durante un período de tiempo determinado.

:::note
Los tokens HDX bloqueados no se pueden transferir durante el período de bloqueo elegido. Sin embargo, todavía se pueden usar para votar.
:::

### Ponderación de votos {#referenda-votes-weighing}

Hay dos factores que determinan el peso de cada voto en un referéndum. El primer factor es la **cantidad de tokens HDX** que el votante bloquea en apoyo del voto. El segundo factor es el llamado **multiplicador de convicciones** que refleja la duración durante la cual el votante está dispuesto a bloquear los tokens.

```
vote_weight = tokens * conviction_multiplier
```

Los períodos de bloqueo de votos tienen la misma duración que el periodo de promulgación. Si los tokens están bloqueados durante 1 período de votación, esto significa que permanecerán bloqueados durante **3 días** después de que finalice la votación. Los votantes pueden influir en el peso de sus votos disminuyendo o aumentando la cantidad de períodos durante los cuales los tokens están bloqueados. Es posible generar un voto con 0 períodos de bloqueo, sin embargo, su peso sería solo una fracción (multiplicador de convicción de 0.1x). Por otro lado, el multiplicador de convicciones aumenta en 1 por cada duplicación de los períodos de bloqueo. Como se muestra en la tabla a continuación, bloquear los votos por un máximo de 32 períodos elevaría el multiplicador de convicciones a 6x.

| Períodos de bloqueo | Multiplicador de convicciones |
|:-----------------:|:---------------------:|
| 0                 |  0.1                  |
| 1                 |  1                    |
| 2                 |  2                    |
| 4                 |  3                    |
| 8                 |  4                    |
| 16                |  5                    |
| 32                |  6                    |

```
Un ejemplo:

Alice vota con 5000 HDX y 0 períodos de bloqueo.
Bob vota con 100 HDX y 32 períodos de bloqueo.

Peso de Alice: 500
Peso de Bob: 600
```

### Modos de votación {#referenda-voting-modes}

Otro aspecto importante del módulo de democracia son los diferentes modos de votación que se aplican. El umbral de votos necesarios para aprobar o rechazar un referéndum puede variar dependiendo de cómo se inició el referéndum y de la participación de la votación. La participación se calcula en función de la cantidad total de tokens HDX que se utilizaron para votar en el referéndum (se excluyen los multiplicadores de convicciones). Si la participación fue baja o no está determinada por la relación entre la participación y el elactorado (es decir, la cantidad total de tokens HDX elegibles para votar).

#### Sesgo de participación positiva

Este es el modo de votación predeterminado cuando la Comunidad propone un referéndum. En participaciones más bajas, se requiere una supermayoría calificada de votos a favor para aprobar el referéndum. A medida que aumenta la participación, el umbral disminuye hacia una mayoría simple.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/positive-turnout-bias.png')} width="300px" />
</div>

#### Sesgo de participación negativa

Este modo de votación se aplica a los referendos propuestos por el Consejo por unanimidad. Tales propuestas requieren una supermayoría calificada de votos "no" para ser rechazadas con baja participación. A medida que crece la participación, el umbral para rechazar el referéndum disminuye hacia una mayoría simple.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/negative-turnout-bias.png')} width="280px" />
</div>

#### Mayoría simple
Los referémdus iniciados por el Consejo con un acuerdo mayoritario (es decir, no unánimemente) pueden ser aceptados por la comunidad con una mayoría simple de los votos (50% + 1).

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/democracy/simple-majority.png')} width="200px" />
</div>
