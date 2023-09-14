---
id: participate_in_referenda
title: Participar en Referéndums
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Esta publicación proporciona una guía paso a paso sobre cómo participar en referéndums: votar y proponer. Hay dos herramientas alternativas que puede utilizar para este propósito: [Commonwealth.im](#cw) o [Polkadot/apps](#polkajs).

Antes de que decida participar, le recomendamos encarecidamente que lea [este artículo](/democracy_referenda)  en la sección Aprender / Democracia. Allí encontrará algunos detalles importantes sobre la mecánica de los referendos.

:::caution
El módulo de democracia HydraDX se lanzará a partir del **15 de septiembre de 2021**. No intente ninguna de las acciones mostradas antes de esa fecha.
:::

## Usando Commonwealth.im {#cw}
### Votar en un referéndum {#cw-vote}
Puede ver todos los referendos que están abiertos para votación navegando a la [Referenda tab](https://commonwealth.im/hydradx/referenda) en la página HydraDX Commonwealth.

Para votar en un referéndum activo, debe hacer clic en él. Después de eso, verá una página que muestra todos los detalles relevantes..

En la sección *Cast Your Vote*, complete la siguiente información:

* Cantidad para votar: esta es la cantidad de tokens HDX que está dispuesto a bloquear en apoyo del referéndum.
* Multiplicador de convicciones: este es el multiplicador que co-determina el [peso de su voto](/democracy_referenda#referenda-votes-weighing)

Después de eso, saque su voto haciendo clic en * Vote yes * o * Vote no * y firme la transacción.

### Proponer un referéndum {#cw-propose}

Para proponer un referéndum, visite la [página de HydraDX Commonwealth](https://commonwealth.im/hydradx/) y haga clic en el menú superior en *New Thread > New democracy proposal*.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/cw-proposal.jpg')} />
</div>

Complete la información en los campos que se muestra arriba. Los parámetros más importantes son:
* Module
* Function
* Cualquier información adicional según lo especificado por la función a la que está proponiendo que se realice
* Depósito: la cantidad de tokens HDX que está dispuesto a depositar para respaldar la propuesta.

En el ejemplo anterior, el módulo de propuesta es *balances* y la función es *setBalance*, que modifica los saldos libres y de reserva de una cuenta determinada.

Para enviar la propuesta, haga clic en *Send transaction* y firme con su billetera.

Después de enviar la propuesta on-chain y firmar la transacción, su propuesta debe aparecer en la [list of proposed referenda](https://commonwealth.im/hydradx/referenda).

:::caution
En cada período de votación, la propuesta de referéndum con el mayor respaldo (*secundando*) ingresa a la ronda de votación. A medida que aumenta la cantidad de referendos, no hay garantía de que su propuesta obtenga el apoyo suficiente para entrar en votación. No hay opción para retirar una propuesta de referéndum, lo que significa que sus fondos pueden permanecer bloqueados por un período de tiempo más largo.

Las propuestas de referéndum maliciosas son castigadas. El Consejo de HydraDX y el Comité Técnico tienen derecho a cancelar cualquier referéndum propuesto de mala fe. Como resultado, los tokens depositados se quemarán.
:::

## Usando Polkadot/apps {#polkajs}

###  Votar en un referéndum {#polkajs-vote}

Puede ver todos los referendos que están abiertos para votación navegando a [*Governance> Democracia*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy) en Polkadot/apps.


Para votar en un referéndum, haga clic en el botón *Votar* al lado

En la ventana emergente, complete la siguiente información:

* Valor de voto: esta es la cantidad de tokens HDX que está dispuesto a bloquear en apoyo del referéndum.
* Multiplicador de convicciones: este es el multiplicador que co-determina el [peso de su voto](/democracy_referenda#referenda-votes-weighing).

Después de eso, saque su voto haciendo clic en *Vote Nay* (No) o *Vote Aye* (Sí) y firme la transacción.

### Proponer un referéndum {#polkajs-propose}

Proponer un referéndum a través de Polkadot/apps  consta de dos pasos: enviar una preimagen y enviar la propuesta on-chain.

#### 01 Enviar  preimagen {#polkajs-propose-01}
Para enviar la preimagen, visite Polkadot/apps y navegue hasta [*Governance > Democracia*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy).

Después de hacer clic en *Enviar preimagen*, debería ver la siguiente ventana emergente:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-preimage.jpg')} />
</div>

Complete la información en los campos que se muestran arriba. Los parámetros más importantes son:
* Enviar desde la cuenta
* Área donde dice Proponer 
* Acción propuesta

En el ejemplo anterior, el área de propuesta es *balances* y la acción es *forceTransfer* de tokens de una cuenta a otra.

Antes de enviar la preimagen y firmar la transacción, asegúrese de copiar el hash de la preimagen. Lo necesitará para el siguiente paso.

#### 02 Subir propuesta {#polkajs-propose-02}
Para presentar la propuesta de referéndum, visite [*Governance > Democracia*](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/democracy) en Polkadot/apps.

Después de hacer clic en *Subir propuesta*, debería ver la siguiente ventana emergente:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/participate_in_referenda/polkajs-proposal.jpg')} />
</div>


Ingrese el hash de la preimagen del paso anterior y la cantidad de tokens que está dispuesto a depositar para la propuesta. El mínimo es 100.000 HDX.

Después de enviar la propuesta on-chain y firmar la transacción, su propuesta debería aparecer en la lista de referendos propuestos.

:::caution
En cada período de votación, la propuesta de referéndum con el mayor respaldo (*secundando*) ingresa a la ronda de votación. A medida que aumenta la cantidad de referendos, no hay garantía de que su propuesta obtenga el apoyo suficiente para entrar en votación. No hay opción para retirar una propuesta de referéndum, lo que significa que sus fondos pueden permanecer bloqueados por un período de tiempo más largo.

Las propuestas de referéndum maliciosas son castigadas. El Consejo de HydraDX y el Comité Técnico tienen derecho a cancelar cualquier referéndum propuesto de mala fe. Como resultado, los tokens depositados se quemarán.
:::
