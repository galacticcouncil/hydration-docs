---
id: claim
title: Reclamar tus HDX
---

import useBaseUrl from '@docusaurus/useBaseUrl';


Tu puedes reclamar tus HDX con los xHDX tokens (ERC-20) que obtuvo durante nuestro [Balancer LBP](https://hydradx.substack.com/p/lbp-announcement) mientras etsuvo activo.

:::note

¿No tiene ningún token xHDX pero, de todos modos, le gustaría obtener algunos HDX? Gracias por el interés, pero en este momento no es posible comprar ningún token HDX; las transferencias de HDX se congelan hasta la red principal. Sin embargo, a medida que avanzamos hacia la red principal, lanzaremos programas comunitarios incentivados que podrían generarle algunos HDX anticipados. Si está interesado, [suscríbase a nuestro boletín](https://hydradx.substack.com) y únase a nuestro servidor Discord para mantenerse actualizado.

:::

## Pre-requisitos {#prequisites}
Hay dos requisitos previos para reclamar su HDX. En primer lugar, debe instalar la [extensión del navegador Polkadot.js](https://polkadot.js.org/extension/) que se utilizará para crear su billetera HDX. En segundo lugar, necesita acceso a sus tokens xHDX, que deben almacenarse en una billetera que admita la firma de mensajes relacionados con tokens ERC-20 (por ejemplo, Metamask).

Si sus tokens xHDX están almacenados en Coinbase Wallet o Trust Wallet, deberá utilizar una de las siguientes soluciones para reclamar su HDX, ya que estas carteras no admiten la firma de mensajes:
* Metamask: puede usar la extensión del navegador Metamask e importar su billetera usando la frase inicial de recuperación.
* MEW (MyEtherWallet): también puede usar MEW importando su frase inicial de recuperación (* Frase mnemónica *) o usando la opción de conexión WalletLink. Se puede acceder a ambas opciones desde la [página de acceso a la billetera MEW](https://www.myetherwallet.com/access-my-wallet). Si está utilizando Coinbase Wallet, puede usar WalletLink, que puede encontrar la Configuración de Coinbase Wallet.

## Proceso de Reclamo {#claim-process}

Después de asegurarse de que ha cumplido con los requisitos previos descritos anteriormente, puede navegar a la [aplicación HydraDX Claim](https://claim.hydradx.io) y continuar con el proceso de reclamación.

Durante el proceso de reclamo, usará sus tokens xHDX (ERC-20) para reclamar su parte de tokens HDX.

### 00 Autorización {#00-authorize}

La aplicación HydraDX Claim solicitará la autorización de la extensión del navegador Polkadot.js.

:::warning
Asegúrese de no ser víctima de un ataque de phishing y preste atención a la ventana emergente de autorización: la aplicación debe identificarse como **CLAIM.HYDRADX.IO** y la solicitud debe provenir de **https://reclamo .hidradx.io**.

:::

<img alt="authorize" src={useBaseUrl('/claim/authorize.jpg')} />

Después de autorizar, se le pedirá que actualice los metadatos para la extensión del navegador Polkadot.js. Esto permitirá que Polkadot.js cree direcciones específicas de HydraDX que se requieren para completar el proceso de reclamo.

<img alt="authorize" src={useBaseUrl('/claim/metadata.jpg')} />

### 01 Selecciona tu dirección ETH {#01-select-your-eth-address}

En el primer paso del proceso de reclamo, se le pedirá que seleccione la cuenta que contiene sus tokens xHDX. Esto se puede hacer conectándose a su billetera con los tokens ERC-20 (por ejemplo, Metamask) o ingresando su dirección ETH manualmente en el cuadro de entrada (en ese caso, deberá firmar el mensaje manualmente más tarde).

Después de ingresar su dirección ETH, debería ver el saldo de tokens HDX que puede reclamar, incluido el [reembolso de las tarifas del gas](https://hydradx.substack.com/p/first-governance-vote) que ha gastado para obtener su xHDX en Balancer.

:::note

No es elegible para un reembolso de gasolina si ha obtenido su xHDX en algún otro lugar que no sea el grupo oficial de Balancer (como Uniswap), o si ha sacado sus tokens de la billetera de compra original.

:::

<img alt="authorize" src={useBaseUrl('/claim/claim-01.jpg')} />

### 02 Crea y Selecciona una dirección HDX  {#02-create-and-select-an-hdx-address}

En el segundo paso, se le pedirá que seleccione su dirección HDX.

Para crear una nueva dirección HDX, abra la extensión del navegador Polkadot.js y haga clic en el signo + para crear una nueva cuenta. En el primer paso de la creación de la cuenta, verá la frase mnemotécnica de 12 trabajos que se puede utilizar para recuperar su cuenta. Después de guardar su frase inicial en un lugar seguro, haga clic en *Siguiente paso*. Aquí, debe cambiar la **Red** seleccionando la opción **HydraDX Snakenet**. Ingrese un nombre y contraseña para su cuenta y finalice la creación de la cuenta.

<img alt="authorize" src={useBaseUrl('/claim/create-account.png')} />

:::warning 

Asegúrese de hacer una copia de seguridad de su frase inicial de recuperación guardándola en un lugar seguro y nunca la comparta con nadie. Usar la frase inicial es la única forma en que puede recuperar su cuenta y, si la pierde o filtra, sus fondos podrían verse comprometidos. Tenga en cuenta que debe proteger su acceso a esta billetera hasta que se inicie la red principal, ya que todos los saldos de HDX están actualmente bloqueados. Si pierde el acceso a su billetera HDX, también perderá su HDX.

:::

Después de crear su cuenta HDX, debería poder seleccionarla en la aplicación HydraDX Claim. Después de hacerlo, la aplicación debería proporcionarle una descripción general de las direcciones ETH y HDX utilizadas para el proceso de reclamo. Haga clic en siguiente para continuar con la firma del mensaje.

<img alt="authorize" src={useBaseUrl('/claim/claim-02.jpg')} />

### 03 Firma {#03-sign}

En el tercer paso del proceso de reclamo utilizando la aplicación HydraDX Claim, se le proporcionará la opción de firmar el mensaje para usar sus tokens xHDX para reclamar HDX.

:::note

Tenga en cuenta que en este paso verá la **clave pública** de su dirección HDX, y no la dirección en su forma legible por humanos como se mostró en el paso anterior y en la extensión de su navegador Polkadot.js (para más detalles consulte los [ss58 docs](https://polkadot.js.org/docs/keyring/start/ss58)). Si ha seguido todos los pasos descritos anteriormente, no hay nada de qué preocuparse y es seguro continuar con la firma del mensaje. También verificaremos que la cuenta HDX que está utilizando para firmar la transacción de reclamo en el paso final corresponda con la cuenta que recibe el HDX reclamado.

:::

Dependiendo de la elección que haya hecho en el primer paso, tiene dos opciones para firmar el mensaje para usar los tokens xHDX en el proceso de reclamo:

* Si está utilizando **Metamask**, después de hacer clic en el botón *Firmar*, Metamask le pedirá que firme el mensaje. Siga las instrucciones en Metamask.

* Si ingresó su dirección ETH manualmente, deberá firmar el mensaje a través de la billetera externa que contiene las claves privadas de sus tokens xHDX. Una vez que haya firmado el mensaje, copie la firma (comenzando con *0x*) en el campo respectivo en la aplicación HydraDX Claim.

<img alt="authorize" src={useBaseUrl('/claim/claim-03.jpg')} />

### 04 Reclamo {#04-claim}

Después de firmar el mensaje con la billetera que contiene sus tokens xHDX, la extensión Polkadot.js debería abrirse y se le pedirá que firme la transacción para reclamar el HDX a su cuenta. Ingrese la contraseña de su cuenta HDX y haga clic en *Firmar la transacción*.

¡Ya ha completado el proceso de reclamación, convirtiéndose así oficialmente en propietario de HDX!

Puede consultar su saldo utilizando [Polkadot/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts) conectado a HydraDX Red Snakenet. Tenga en cuenta que no puede ver su saldo HDX directamente en la extensión del navegador Polkadot.js.

### 05 Que sigue? {#05-whats-next}

Después de completar el proceso de reclamo, los tokens HDX permanecerán bloqueados en su billetera hasta el lanzamiento de mainnet.

Los tokens xHDX (que solía reclamar HDX), por otro lado, permanecerán bloqueados en su billetera ERC-20 para siempre, lo que significa que puede ocultarlos de su billetera (o mantenerlos visibles como una insignia de adopción temprana).

¿Quiere poner a trabajar sus tokens HDX y ayudar a mejorar la seguridad de la red HydraDX? Entonces podrías participar en nuestra red de prueba incentivada llamada **Snakenet** haciendo stake de tu HDX. Si está interesado, puede continuar familiarizándose con el [proceso de staking](/staking), después de lo cual puede decidir participar como [validador](/start_validating) o como [nominador](/start_nominating).

