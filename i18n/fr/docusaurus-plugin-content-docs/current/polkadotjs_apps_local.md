---
id: polkadotjs_apps_local 
title: Se connecter à un node local 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Vous pouvez utiliser Polkadot/apps pour vous connecter à votre node Hydration local. Pour ce faire, vous devez avoir accès au port `9944` qui est utilisé connexions websockets RPC.

:::caution

Si vous faites fonctionner un node en tant que validateur, nous recommandons fortement que vous blacklistiez le port `9944` pour des connexions à distance (hors LAN). Ce port pourrait être exploité par des personnes tierces pour altérer la performance de votre node, ce qui peut résulter par un slashing et une perte involontaire de fonds. Vous devriez utiliser le port `9944`  pour vous connecter à votre node validateur seulement quand le node est dans votre réseau local.

:::

### Accéder à votre  node local en utilisant Polkadot/apps {#accessing-your-local-node-using-polkadotapps}

Pour accéder à votre node, ouvrez [Polkadot/apps](https://polkadot.js.org/apps/) et cliquez dans le coin supérieur gauche pour changer de réseau.

<div>
  <img src={useBaseUrl('/polkadotjs-apps/PolkadotJS-APPS-1.png')} />
</div>

Après avoir ouvert le menu, cliquez sur **Development** et choisissez **Local node**.

ou dans l'interface en français: 

**Développement** et choisissez **Nœud local(propre Nœud)**
<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-1.png')} />
</div>

Régler l'IP si nécessaire et cliquez sur ***Switch*** pour passer à votre node local.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-2.png')} />
</div>

Maintenant vous devriez être connecté à votre node local et être capable d'interagir avec.
