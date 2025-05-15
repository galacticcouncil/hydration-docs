---
title: Create Memecoin
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**[Memepad](https://app.hydration.net/memepad)** is Hydration's tool for creating and launching meme coins. This guide covers the essential steps from creation to post-launch management, ensuring you can successfully deploy and maintain your token.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/guides/trade/memecoin/memepad.jpg')} />
</div>  

## Prerequisites
* **[Web3 wallet](/guides/wallets) with sufficient DOT for gas fees and liquidity pool**. 5 DOT is the lowest we recommend. How much DOT you need is determined by the value of the liquidity pool you want to create. The higher the DOT, the higher the value.
* **Token concept:** name, symbol, and initial supply planning.
* Optional but recommended: **logo file** (SVG/PNG, less than 30kb).

## Create Your Meme Coin
1. Go to **[Memepad](https://app.hydration.net/memepad)**
<div style={{textAlign: 'center'}}>
<img 
  src={useBaseUrl('/img/guides/trade/memecoin/create_memecoin.jpg')} 
  width="500px"
  style={{margin: '5px 0'}}
/>
</div>
2. Enter your **token configuration**:
   * Asset Name: Your token's full name
   * Symbol: Trading ticker (3-6 characters) i.e. DOT, HDX, vDOT
   * Total Supply: Maximum token amount
   * Initial Supply %: # of tokens available at launch
   * DOT Deposit: Affects initial token price. _Price = DOT amount / (Total Supply × Initial Supply %)_

3. Sign three **sequential transactions**:
   * Token registration
   * Liquidity transfer (may take several minutes)
   * Pool creation

<div style={{textAlign: 'center'}}>
<img 
  src={useBaseUrl('/img/guides/trade/memecoin/create_done.jpg')} 
  width="500px"
  style={{margin: '5px 0'}}
  />
</div>

## Post-Launch Management

1. **Burn Admin Rights** - To gain higher asset status on Hydration and earn trust from potential buyers, it is advisable to revoke your admin rights by burning them. This removes your ability to adjust the token supply and other details.

   **How**: Click the **BURN ADMIN RIGHTS** button and sign the transaction.

<div style={{textAlign: 'center'}}>
<img 
  src={useBaseUrl('/img/guides/trade/memecoin/meme_launched.jpg')} 
  width="500px"
  style={{margin: '5px 0'}}
  />
</div>

<div style={{textAlign: 'center'}}>
<img 
  src={useBaseUrl('/img/guides/trade/memecoin/admin_revoked.jpg')} 
  width="500px"
  style={{margin: '5px 0'}}
  />
</div>

2. **Add visual identity** - For a more professional feel, you can add your meme coin logo via GitHub. 
How:
   * Click **ADD LOGO THROUGH GITHUB** submission link.
   * Create new issue with logo file.
   * Wait for Hydration team approval (2-5 days).

<div style={{textAlign: 'center'}}>
<img 
  src={useBaseUrl('/img/guides/trade/memecoin/add_logo.jpg')} 
  width="500px"
  style={{margin: '5px 0'}}
  />
</div>

Need help? Join our [Discord](https://discord.com/invite/HDNPFFrcnW) for community support.