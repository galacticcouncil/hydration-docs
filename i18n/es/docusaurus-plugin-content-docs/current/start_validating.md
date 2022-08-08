---
id: start_validating 
title: Empezar a validar
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Despues de [Configurar un nodo HydraDX](/node_setup), debe vincular los tokens HDX y configurar las claves del validador antes de poder comenzar a validar.

:::warning

La ejecución de un nodo de validación requiere un cierto conjunto de habilidades técnicas necesarias para la configuración adecuada del nodo y para garantizar su tiempo de actividad. También requerimos que los validadores estén siempre ejecutando el nodo utilizando la última versión estable. Si no está seguro de lo que está haciendo aquí, le recomendamos que Nominar tu HDX
:::

## 01 Vincula tus HDX tokens {#01-bond-hdx-tokens}

Para participar en la red como un nodo validador, debe vincular una cierta cantidad de tokens HDX. Si no tiene ningún HDX, no es posible participar en la etapa _inicial_ de la red de prueba. Sin embargo, el equipo anunciará algunas noticias interesantes en las próximas semanas, así que manténgase informado y suscríbase a nuestro boletín.

:::note

¿Sigues en posesión de los tokens xHDX que compraste durante el evento Balancer LBP? Primero debe [reclamar su HDX](/claim) antes de continuar.

:::

Para vincular HDX, abra Polkadot/apps y conéctese a uno de los [nodos RPC públicos de HydraDX](/polkadotjs_apps_public). Asegúrese de poder ver el [saldo de su cuenta](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts).

:::warning

Los tokens HDX vinculados están en juego para garantizar la seguridad de la red. El comportamiento inadecuado del nodo validador puede ser castigado con cortes que pueden conducir a una pérdida involuntaria de fondos. Le recomendamos encarecidamente que solo continúe si realmente sabe lo que está haciendo.

:::

Para el siguiente paso, vaya a *Network* > *Participacion* > *Acciones de la cuenta* > *+ Stash*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-1.png')} />
</div>

Después de hacer clic en el botón *Stash*, debería ver las preferencias de vinculación con cuatro campos editables:
* **cuenta stash**: la cuenta que tiene la mayoría de sus tokens HDX. HDX se va a stakear desde esta cuenta.
* **cuenta controller**: la cuenta que tiene una porción más pequeña de HDX necesaria para cubrir las tarifas asociadas con el inicio y la detención del proceso de nominación.
* **valor vinculado**: la cantidad de HDX que está vinculando. No vincule todos los HDX que tenga; en su lugar, deje algunos para cubrir las tarifas de transacción que se producirán más adelante.
* **destino de pago**: la cuenta a la que se enviarán las recompensas de stake.

:::warning

No vincule todos sus tokens HDX disponibles. Deje una pequeña reserva para cubrir las tarifas de transacción. Si vincula todos los tokens HDX que tiene, es posible que no pueda firmar la transacción para iniciar el proceso de validación.

:::

Después de ajustar las preferencias de vinculación, haga clic en **Vinculo** y firme la transacción para completar el proceso de vinculación.

:::caution

Por razones de seguridad, no se recomienda tener las mismas cuentas Stash y Controller. Sin embargo, dado que las transferencias están deshabilitadas en Snakenet, actualmente no es posible usar cuentas separadas. Recomendamos encarecidamente que cambie a cuentas Stash y Controller separadas tan pronto como sea posible en el futuro.

:::

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-2.png')} />
</div>

## 02 Generar claves de sesión {#02-generate-session-keys}

El segundo paso es generar sus claves de sesión. Las claves de sesión se utilizan para asociar el nodo de validación con su cuenta de Controlador y el HDX en stake. Por lo tanto, es importante que estén configurados correctamente.

Para generar sus claves de sesión, ejecute en el nodo:

```bash
$ curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933

# Example output
{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}
```

Puede encontrar sus claves de sesión en la parte _result_ de la salida (`0x9257 ...` en la salida de ejemplo anterior).

## 03 Configura tus claves de sesión {#03-set-your-session-keys}

Para asociar las claves de sesión generadas con su cuenta de controlador, abra en Polkadot/apps:
*Desarrollador* > *Extrinsics*

Complete los campos:

* _usando la cuenta seleccionada_: selecciona tu cuenta Controller;
* _enviar el siguiente extrinsic_: selecciona `session` en la izquierda y  `setKeys` en la derecha;
* _keys_: Coloca las claves de sesión generadas en el paso anterior;
* _proof_: `0`.

Para completar, haga clic en _Submit Transaction_ y firme la transacción.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/set-session-keys-1.png')} />
</div>

## 04 Asegúrate de que tu nodo esté completamente sincronizado {#04-make-sure-that-your-node-is-fully-synced}

Antes de continuar, debe asegurarse de que su nodo se esté ejecutando y de que el proceso de sincronización se haya completado por completo. La forma más segura de comprobar el estado de sincronización es directamente en el propio nodo:

```bash

$ journalctl -f -u hydradx-validator.service

# The output will be similar to this
Mar 22 18:37:38 Ubuntu-2010-groovy-64-minimal hydra-dx[232761]: 2021-03-22 18:37:38  💤 
Idle (52 peers), best: #622028 (0x5f5a…1041), finalized #622025 (0x5b21…a746), ⬇ 9.1kiB/s ⬆ 6.1kiB/s

```
Puede comparar el número de bloque de la salida (en el ejemplo anterior: `#622025`) con el número de bloque actual que puede encontrar en [Polkadot/apps Explorer](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/explorer), lo que significa que el nodo utilizado para el ejemplo no está completamente sincronizado.

Espere hasta que el número de bloque que se muestra en sus registros locales coincida con el número de bloque actual de la red.

## 05 Empiece a validar {#05-start-validating}

Para comenzar a validar navegue en Polkadot/apps:

*Network* > *Participacion* > *Acciones de la cuenta* > *Validador* (button next to your bonded HDX)

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-1.png')} />
</div>

Después de hacer clic en el botón *Validar*, debería ver una ventana emergente llamada *establecer preferencias de validación*. Aquí, debe establecer su _porcentaje de comisión de recompensa_. Esta es la proporción de las recompensas que se le pagarán. Las recompensas restantes se dividirán entre los nominadores de acuerdo con su participación. Si decide no aceptar ninguna comisión de recompensa, puede establecer el porcentaje en 0.

Para confirmar, haga clic en *Validar* y firme la transacción


<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-2.png')} />
</div>

## 06 Verifique el estado de su nodo validador {#06-check-the-status-of-your-validator-node}

Puede comprobar el estado de su nodo validador navegue en Polkadot/apps:

*Network* > *Participacion* > *Resumen*

Esta pestaña proporciona una descripción general de todos los validadores activos conectados a la red. En la parte superior, hay una indicación de la cantidad de espacios de validación disponibles, así como la cantidad de nodos que han señalado su intención de ser un validador. Puede confirmar si su nodo está en la cola de espera haciendo clic en la pestaña _Esperando_.

Su nodo validador permanecerá en la cola de espera hasta que sea seleccionado para ser incluido en el conjunto validador. El conjunto de validadores se actualiza en cada era, lo que permite incluir nuevos nodos, siempre que haya espacios vacíos.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-3.png')} />
</div>

¡Gracias por apoyar a HydraDX convirtiéndose en un validador de Snakenet! 🎉
