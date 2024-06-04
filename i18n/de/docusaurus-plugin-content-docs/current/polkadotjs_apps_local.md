---
id: polkadotjs_apps_local 
title: Mit einer lokalen Node verbinden
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sie können Polkadot/apps verwenden um sich mit ihrem Lokalen Hydration Node zu verbinden. Dafür ist es nötig Zugang zum Port `9944`zu haben, welcher für RPC Websocket verbindungen verwendet wird.
:::warning

Wenn Sie den Node als Validator verwenden, empfehlen wir den Port `9944`auf die Blacklist für Remote Zugriffe zu setzen. Dieser Port könnte sonst von Dritten dafür verwendet werden die Performance Ihres Nodes einzuschränken, was wiederum in Slashing oder unbeabsichtigen Verlust von Krypto führen könnte. Sie sollten den Port `9944` nur dann zum Verbinden zu Ihrem Node verwenden wenn dieser in Ihrem Lokalen Netzwerk ist.
:::

### Über Polkadot/apps mit einer lokalen Node verbinden {#accessing-your-local-node-using-polkadotapps}

Um auf Ihren Node zuzugreifen öffnen Sie[Polkadot/apps](https://polkadot.js.org/apps/) und klicken Sie in die obere linke Ecke um das Netzwerk zu wechseln.
<div>
  <img src={useBaseUrl('/polkadotjs-apps/PolkadotJS-APPS-1.png')} />
</div>

Nachdem das Menü sich öffnet klicken sie auf **Development** und wählen sie **Local node**.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-1.png')} />
</div>

Passen Sie die IP wenn nötig an und klicken Sie auf  ***Switch*** um zu Ihrer lokalen Node zu wechseln.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-2.png')} />
</div>

Jetzt sollten Sie mit Ihrer lokalen Node verbunden sein und können nun darauf zugreifen.