---
id: start_nominating
title: Conviértete en un nominador
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Al convertirse en nominador, apuesta algunos de sus tokens HDX para ayudar a asegurar la red HydraDX y ganar recompensas. A diferencia de ejecutar un nodo validador, el proceso de nominación no requiere habilidades técnicas avanzadas, por lo que es la opción recomendada para cualquiera que no esté completamente seguro de convertirse en validador.

Al nominar, los nominadores asignan su participación a un validador de su elección. Al hacerlo, los nominadores eligen el conjunto activo de validadores y reciben recompensas por su participación. La cantidad de premios que recibe como nominador depende del porcentaje de comisión de recompensa del validador elegido: cuanto mayor sea la comisión de recompensa del validador, menos recompensas recibirá por su stake.

:::warning
La nominación es una forma más accesible de participación en el proceso de participación, sin embargo, también conlleva un cierto grado de riesgo. Si el validador que ha designado se comporta mal (por ejemplo, no mantiene el tiempo de actividad requerido), pueden producirse recortes que pueden conducir a una pérdida parcial involuntaria de los fondos que ha apostado. Le recomendamos encarecidamente que haga su debida diligencia antes de nominar a un validador.

:::

## 00 Staking UI {#00-staking-ui}

Para acceder a la interfaz de staking, primero debe abrir Polkadot/apps, conectarlo a uno de los [nodos públicos de HydraDX RPC](/polkadotjs_apps_public) y asegurarse de que puede ver su cuenta [saldo](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts)

:::note

¿Sigues en posesión de los tokens xHDX que compraste durante el evento Balancer LBP? Primero debe [reclamar su HDX](/claim) antes de continuar.

:::

Después de verificar que puede ver su saldo de HDX, puede navegar a la IU de Stking:

*Network* > *Participacion*

El menu de staking IU, tiene las siguientes pestañas:

* **Resumen de Staking**aquí, encontrará una lista de todos los validadores activos y cierta información básica sobre cada validador, como la cantidad de HDX apostada en el nodo, la cantidad de la propia participación del validador y la comisión de recompensa que se cobra. Además, puede ver el número de puntos de era obtenidos por cada validador en la era actual y el número del último bloque producido por el validador.
* **Acciones de la cuenta**: aquí, puede stakear y nominar.
* **Payouts**: aquí, puede reclamar sus recompensas de participación.
* **Objetivos**: aquí, puede estimar sus ganancias. Este es un buen lugar para comenzar al elegir un nodo validador para nominar
* **Esperando**:aquí, puede encontrar la cola de espera donde se colocan los validadores inactivos antes de ser incluidos en el conjunto de validadores activos. Un validador permanecerá en la cola de espera hasta que haya recibido una cantidad suficiente de HDX apostado para ingresar al conjunto de validador activo.
* **Estadísticas del validador**:aquí, puede consultar la dirección de stash de un validador para ver información histórica detallada sobre los puntos ganados de la era, la apuesta elegida, las recompensas y el recorte. Le recomendamos encarecidamente que estudie esta información antes de confiar su nominación a un validador.

## 01 Vincula tus HDX tokens {#01-bond-hdx-tokens}

:::warning

Los tokens HDX vinculados están en juego para garantizar la seguridad de la red. El comportamiento inadecuado del nodo validador que ha designado puede ser castigado con recortes, lo que puede provocar una pérdida involuntaria de sus fondos. Le recomendamos encarecidamente que haga su debida diligencia al seleccionar qué validador nominar.

:::

Para vincular tokens HDX, navegue hasta *Acciones de la cuenta* en la IU de Staking:

*Network* > *Participacion* > *Acciones de la cuenta* > *+ Stash*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-1.png')} />
</div>

Después de hacer clic en el botón *Stash*, debería ver las preferencias de vinculación con cuatro campos editables:
* **cuenta stash**: la cuenta que tiene la mayoría de sus tokens HDX. HDX se va a stakear desde esta cuenta.
* **cuenta controller**: la cuenta que tiene una porción más pequeña de HDX necesaria para cubrir las tarifas asociadas con el inicio y la detención del proceso de nominación.
* **valor vinculado**: la cantidad de HDX que está vinculando. No vincule todos los HDX que tenga; en su lugar, deje algunos para cubrir las tarifas de transacción que se producirán más adelante.
* **destino de pago**: la cuenta a la que se enviarán las recompensas de stake.

:::warning

No vincule todos sus tokens HDX disponibles. Deje una pequeña reserva para cubrir las tarifas de transacción. Si vincula todos los tokens HDX que tiene, es posible que no pueda firmar la transacción para iniciar el proceso de nominación.

:::

Después de ajustar las preferencias de vinculación, haga clic en **Vinculo** y firme la transacción para completar el proceso de vinculación.


:::caution

Por razones de seguridad, no se recomienda tener las mismas cuentas Stash y Controller. Sin embargo, dado que las transferencias están deshabilitadas en Snakenet, actualmente no es posible usar cuentas separadas. Recomendamos encarecidamente que cambie a cuentas Stash y Controller separadas tan pronto como sea posible en el futuro.

:::

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-2.png')} />
</div>

## 02 Nominar un validador {#02-nominate-a-validator}

Después de vincular HDX, ahora puede nominar un validador. Antes de continuar, debe hacer su debida diligencia y decidir qué validadores le gustaría nominar en función de su desempeño (pasado). Para hacerlo, consulte la información en la IU de replanteo [discutida anteriormente](#00-staking-ui).

:::note

HydraDX Snakenet tiene un **límite de 64 nominadores por nodo de validación**. Al seleccionar un nodo para nominar, asegúrese de que el validador no haya alcanzado la cantidad máxima de nominaciones; de lo contrario, su nominación no será válida y no recibirá recompensas por su stake. El número de nominaciones para cada validador se puede encontrar en la pestaña del menú *Esperando * en la IU de Participacion.

:::

Para nominar uno o más validadores, navegue hasta:

*Network* > *Participación* > *Acciones de la cuenta* > *Nominar* (button next to your bonded HDX)

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-1.png')} />
</div>

Después de hacer clic en el botón *Nominar*, debería ver una ventana emergente llamada *nominar validadores*. Aquí puede seleccionar uno o más validadores para nominar de la lista de validadores disponibles. Se recomienda encarecidamente nominar varios validadores para evitar estar inactivo si no obtiene un lugar en un validador (por ejemplo, el validador está sobrepoblado o no está elegido en el conjunto de validadores activos). Puede nominar hasta 16 validadores. En cada era, solo una de sus nominaciones puede estar activa, no puede ser elegido por varios validadores simultáneamente. Su participación se asignará automáticamente a uno de sus validadores seleccionados para maximizar la descentralización y las ganancias. Simplemente elige la cantidad de HDX enlazado y los validadores en los que confía.

Para nominar a los validadores seleccionados, haga clic en _Nominar_ y firme la transacción.


<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>


## 03 Verifique el estado de su nominación {#03-check-the-status-of-your-nominations}

Después de completar el proceso de nominación, sus nominaciones estarán inactivas durante el resto de la era actual. Una vez que comience la siguiente era, sus nominaciones se activarán, siempre que al menos uno de los nodos de validación que haya nominado esté incluido en el conjunto activo de validadores y no esté abarrotado dejándolo fuera. Si todos sus validadores permanecen en la cola de espera, sus respectivas nominaciones también permanecerán inactivas y no obtendrá ninguna recompensa por esta era.

Para verificar el estado de sus nominaciones, navegue a:

*Network* > *Participacion* > *Acciones de la cuenta*

Puede ver sus nominaciones inactivas en *Esperando nominacione *:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-3.png')} />
</div>

Una vez que una nominación se activa, debe encontrarla en la lista de *Nominaciones activas*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-4.png')} />
</div>

:::note

Asegúrese de revisar sus nominaciones de vez en cuando. Es posible que algunos de sus validadores cambien su porcentaje de comisión, lo que tendrá un impacto negativo en sus recompensas. Al verificar el estado de sus nominaciones con frecuencia, podrá reaccionar actualizando la lista de sus validadores nominados.

## 04 Ajusta tus nominaciones {#04-adjust-your-nominations}

 Si alguno de sus validadores esta sobre-suscrito o cambio su comisión, es posible que desees ajustar las nominaciones.
 
Para hacerlo, abre Polkadot/apss y dirígete a:
*Network* > *Participación* > *Acciones de la cuenta*

Das click en los 3 puntos que aparecen al lado de los detalles de tu cuenta y selecciona _Set nominees_.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-set-nominees.png')} />
</div>

En la siguiente ventana, que puede que ya le resulte familiar, puede eliminar validadores y/o agregar nuevos validadores
Puede ajustar sus nominaciones no hay necesidad de detener la nominación o hacer unbonding de sus tokens. Los cambios se aplicarán cuando comience la siguiente era (24h).


<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>  

## 05 Revincular o Rebond de tus tokens {#05-rebond-funds}

Si ha hecho unbond(desvinculado) de sus tokens, puede volver a vincularlos antes de que haya transcurrido el período de espera de 28 días.

Para hacerlo, abra Polkadot / apps y navegue hasta *Desarrolladora* > *Extrinsics*. Alternativamente, puede seguir este enlace:

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/extrinsics

Selecciona tu cuenta en el desplegable "_usando la cuenta seleccionada_".Despues, necesitas llenar los espacios con la siguiente información. 

* **extrinsic**: staking
* **action**: rebond(value)
* **value**: Aqui colocas el monto de HDX que deseas rebond(revincular)


<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/rebond.png')} />
</div>

Si todo está configurado correctamente, puede enviar el extrinsic haciendo clic en el botón _Enviar Transacción_ y firmar la transacción en la extensión Polkadot.js. Una vez completado, la cantidad seleccionada de HDX debe haberse revinculado.
:::

¡Gracias por apoyar a HydraDX convirtiéndose en un nominador de Snakenet! 🎉
