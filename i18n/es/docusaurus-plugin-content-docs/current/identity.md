---
id: identity
title: Establecer tu Identidad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Los titulares de cuentas tienen la posibilidad de establecer su identidad proporcionando información específica y almacenándola en la cadena. Además de eso, la información de identidad se puede enviar opcionalmente a los registradores de HydraDX para su verificación. Al establecer y verificar su identidad, los validadores y nominadores ayudan a salvaguardar la confianza en la red.

:::note
Si participa como validador de HydraDX, le recomendamos encarecidamente que establezca su identidad y se someta al proceso de verificación. Los validadores verificados parecen más confiables y atraen más nominaciones, lo que aumenta sus posibilidades de ser incluidos en el conjunto de validadores activos.
:::

## 01 Establece tu identidad {#01-set-identity}

Para establecer su identidad, abra Polkadot / apps (conectado a la red HydraDX Snakenet ) y navegue hasta Cuentas . Alternativamente, puede seguir este enlace:

https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/accounts

En dicha sección de "Cuentas", ubique la cuenta que contiene sus tokens HDX vinculados. Después de eso, haga clic en los tres puntos junto a la cuenta (en el lado derecho) y seleccione *Establecer identidad en cadena* .

<img alt="authorize" src={useBaseUrl('/identity/set-identity-1.jpg')} />

Verá una ventana emergente llamada *identidad de registro* . Aquí, puede ingresar la siguiente información:

* Nombre legal
* Correo electrónico
* Direccion web
* twitter
* riot name (en caso de que esté utilizando mensajes de Matrix)

:::note
Toda esta información es opcional; no dude en proporcionar solo la información que desee. Sin embargo, si está ejecutando un nodo de validación, le recomendamos que establezca su correo electrónico. Esto nos permitiría comunicarnos con usted en caso de que encontremos problemas con su nodo.
:::

En el último campo de la ventana emergente, puede ver la cantidad de HDX que necesita depositar para almacenar su información de identidad. Recibirá este depósito una vez que decida borrar su identidad en un momento posterior.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-2.jpg')} />

Después de completar la información, haga clic en *Establecer identidad* y firme la transacción con la extensión del navegador Polkadot.js. Una vez que se confirma la transacción, se establece su identidad.

## 02 Envie su identidad para verificación {#02-verify-identity}

Una vez que haya establecido su identidad, puede enviarla a los registradores de la red para su verificación. Para hacerlo, abra Polkadot / apps y vaya a *Desarrollador* > *Extrinsics* . Alternativamente, puede seguir este enlace:

https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics

After selecting the relevant HydraDX account from the last step, you need to fill out the following information:

* **extrinsic**: identity
* **action**: requestJudgement
* **reg_index**: aquí debe ingresar el ID del registrador que elija para realizar la verificación.
HydraDX tiene 2 registradores: Simon Kraus - HydraSik (ID: **0** ) y Jimmy Tudeski - stakenode (ID: **1** ).
* **max_fee**:aquí debe ingresar la tarifa máxima en HDX que está dispuesto a pagar al registrador por la verificación. Solo los registradores con una tarifa inferior a su max_fee serán elegibles para llevar a cabo la verificación.

Para enviar su solicitud de verificación, haga clic en *Enviar transacción* y firme la transacción.

<img alt="authorize" src={useBaseUrl('/identity/set-identity-3.jpg')} />

Tenga en cuenta que el proceso de verificación de identidad puede tardar algún tiempo en completarse. Para ver el estado de su solicitud, vaya a *Cuentas* y coloque el cursor sobre la sección que muestra su identidad; verá una ventana emergente que muestra el estado actual.

## 03 Resultado del procedimiento de verificación {#03-verification-outcome}

Después de procesar su solicitud de verificación, el registrador enviará uno de los siguientes juicios que se harán visibles en su estado de identidad:

* **Desconocido** : valor predeterminado, aún no se ha emitido ningún juicio.
* **Razonable** : la información proporcionada parece razonable, sin embargo, no se realizaron verificaciones en profundidad.
* **Conocido Bueno**: la información es correcta.
* **OutOfDate** : la información era correcta en el pasado, pero ahora está desactualizada.
* **Baja calidad** : la información no es precisa, pero se puede corregir actualizándola.
* **Erróneo** : la información proporcionada es incorrecta y puede indicar una intención maliciosa.
