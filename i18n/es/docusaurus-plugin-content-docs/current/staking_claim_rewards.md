---
id: staking_claim_rewards
title: Reclamar tus recompensas de Staking
---

import useBaseUrl from '@docusaurus/useBaseUrl';


Al final de cada era, a los pools de validadores se les asignan sus [recompensas de staking](/staking_rewards) que consisten en las recompensas base, recompensas de puntos de era y tips. Sin embargo, estas recompensas no se distribuyen automáticamente a las cuentas del validador y sus nominadores. Esto solo sucederá después de que las recompensas de staking hayan sido reclamadas,  **solicitando un pago**. Las recompensas de staking se deben reclamar **dentro de las 84 eras** posteriores a su obtención. Una vez que transcurre este período, la información de recompensas relevante se elimina de la cadena y el pool de validadores ya no puede recibir sus recompensas para esa era.

El proceso de solicitar manualmente un pago dentro de un período de tiempo limitado es una característica de seguridad importante. Al requerir que se envíe una transacción de pago para cada pool de validadores y para cada época, la distribución de recompensas se extiende a lo largo de varios bloques. Si todas las recompensas se distribuyeran a todos los validadores y nominadores dentro de un solo bloque, la estabilidad de la cadena posiblemente podría estar en peligro.

## Como solicitar el pago
Tanto los validadores como sus nominadores pueden soliictar fácilmente un pago mediante Polkadot/Apps Para ello, vaya a *Network> Participación> Payouts*. Alternativamente, puede utilizar el siguiente enlace:
https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/staking/payout

Al seleccionar *My stashes*, debería ver todas las recompensas que están disponibles por el stake de sus tokens, con una indicación de los números de época respectivos. Al hacer clic en *Pagar todo*, es posible enviar una serie de transacciones para reclamar todas las recompensas disponibles para las eras pasadas.


<img src={useBaseUrl('/staking-claim-rewards/payouts.jpg')} />

Después de solicitar el pago, se le pedirá que firme la(s) transacción(es) usando su cuenta HDX. Una vez confirmadas, las recompensas por las eras seleccionadas se distribuirán a los respectivos validadores y sus nominadores.

