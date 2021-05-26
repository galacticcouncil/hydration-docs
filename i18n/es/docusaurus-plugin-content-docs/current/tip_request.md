---
id: tip_request
title: Soliciar tips de la Tesorería
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Con el lanzamiento del [Programa de incentivos HydraDX New Deal ](#link-to-new-deal), los miembros de la comunidad pueden solicitar tips a la Tesorería  como recompensa por sus contribuciones. Con esta guía, podra tener un paso a paso, del proceso de solicitud de tips. Puede encontrar más información sobre los diferentes tipos de actividades que se recompensan en [este post](/new_deal).

El proceso para solicitar tips a la Tesorería consta de dos pasos. En el primer paso, los contribuyentes deben publicar su solicitud de tips en Commonwealth.im con una descripción de la contribución. Como segundo paso, la solicitud de tips a la Tesorería debe enviarse on-chain utilizando Polkadot/apps.

## 01 Publica la solicitud del tips en Commonwealth.im {#01-publish-tip-request}

Para salvaguardar la transparencia, todas las solicitudes de tips a la Tesorería deben publicarse en un hilo en la [pagina de HydraDX Commonwealth](https://commonwealth.im/hydradx). Before opening a thread, you need to link your HydraDX wallet to Commonwealth.im: Click *Log in* (top right corner) and select *Connect with wallet > polkadot-js*.Antes de abrir un hilo, debe vincular su billetera HydraDX a Commonwealth.im: haga clic en *Log in* (esquina superior derecha) y seleccione *Continue with wallet > polkadot-js*

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/login.jpg')} width="300px" />
</div>

Después de seleccionar su dirección HDX en la ventana emergente, se le pedirá que firme el mensaje con su billetera y que configure un nombre para mostrar con esta billetera.

Una vez que haya iniciado sesión, debe crear un nuevo hilo para su solicitud del tip. Navegue a la parte superior derecha de la página y haga clic en on *New thread > New thread*. También puede utilizar este link directamente: https://commonwealth.im/hydradx/new/thread . 

Puede utilizar el título del hilo para indicar el tema (tip request) y el tema de la contribución. En el cuerpo del hilo, proporcione la siguiente información en ingles por favor:

* Periodo en el que se realizó la contribución
* Un breve resumen de la contribución
* El monto del tip solicitado (en HDX)
* Tiempo dedicado a la contribución (en horas)
* Si es necesario, una descripción más detallada que incluya la relevancia de la contribución a HydraDX

Como referencia, puede echar un vistazo a [esta solicitud como ejemplo](https://commonwealth.im/hydradx/proposal/discussion/1165-tip-request-add-documentation-for-staking).

Después de completar la información, publique el hilo y debería estar disponible en la lista general.

:::note

Los nominadores y validadores que hicieron bond de todo su HDX y se "atascaron" pueden solicitar un tip de la Tesorería con valor de 1 HDX que les permitirá hacer unbond de algunos de sus tokens. Si esto se aplica a su caso, cree un hilo de Commonwealth siguiendo [este ejemplo](https://commonwealth.im/hydradx/proposal/discussion/1166-tip-request-overbonded-staker).

:::

## 02 Envia la solicitud del Tip On-Chain {#02-submit-on-chain}

Después de publicar su solicitud de Tips de la Tesorería, debe enviarla de modo on-chain. Para este propósito, su billetera debe contener una pequeña cantidad de HDX para cubrir el fees de la transacción. Si actualmente no tiene ningún HDX, no es necesario que ejecute este paso; alguien más enviará su solicitud del tip on-chain por usted.

Las solicitudes de los tips de la Tesorería se pueden enviar on-chain con Polkadot/apps usando el siguiente link: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/treasury/tips.

Para enviar una nueva solicitud de propina, haga clic en *Proponer gratificación* y proporcione la siguiente información:

* **enviar con la cuenta** - seleccione la cuenta que firmará la transacción para enviar la solicitud del tip on-chain. Esta cuenta debe tener una pequeña cantidad de HDX para los fees.
* **beneficiario** - seleccione o ingrese la dirección de la cuenta que recibirá el tip de la Tesorería. Esta cuenta debe corresponder a la cuenta que abrió el hilo de Commonwealth.
* **razón de la propina** - proporcione el URL al hilo  correspondiente a su Tip de Commonwealth.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/submit-on-chain.jpg')} />
</div>

Para enviar la solicitud del tip, haga clic en *Proponer gratificación* y firme la transacción.

Una vez que se confirma la transacción, debería ver la solicitud de propina en la página de descripción general.

<div style={{textAlign: 'center'}}>
  <img alt="login" src={useBaseUrl('/tip-request/tip-requests.jpg')} />
</div>
