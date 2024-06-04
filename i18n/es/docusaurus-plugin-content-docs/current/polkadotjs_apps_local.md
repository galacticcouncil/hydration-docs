---
id: polkadotjs_apps_local 
title: Conectarse a un nodo local
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Puede usar Polkadot/apps para conectarse a su nodo Hydration local. Para este propósito, necesita tener acceso al puerto `9944` que se usa para conexiones de websocket RPC.

:::warning

Si está ejecutando el nodo como un validador, le recomendamos encarecidamente que ponga en la lista negra el puerto `9944` para conexiones remotas. Este puerto podría ser abusado por terceros para degradar el rendimiento de su nodo, lo que puede resultar en cortes y pérdidas involuntarias de fondos. Debe usar el puerto `9944` para conectarse a su nodo validador solo cuando el nodo está en su red local.

:::

### Accediendo a su nodo local usando Polkadot/apps {#accessing-your-local-node-using-polkadotapps}

Para acceder a tu nodo usa [Polkadot/apps](https://polkadot.js.org/apps/) y haga clic en en la esquina superior izquierda para cambiar la red.

<div>
  <img src={useBaseUrl('/polkadotjs-apps/PolkadotJS-APPS-1.png')} />
</div>

Luego de abrir el menu, haga  clic en **desarrollo** y selecciona **Nodo local**.
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-1.png')} />
</div>

Ajuste la IP si es necesario y haga clic en ***Switch*** para cambiar a su nodo local.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-2.png')} />
</div>

Ahora debería estar conectado a su nodo local y poder interactuar con él.
