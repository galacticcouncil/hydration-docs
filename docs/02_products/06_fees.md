---
id: fees
title: Fees
---

Hydration operates multiple fee structures across different products and pool types. These fees fund protocol operations, reward [liquidity providers](/products/trading/liquidity), and ensure network security and stability. The fee structures are designed to attract trading volume while maximizing benefits for liquidity providers.

## Fee Overview

| Product | Fee Type | Amount | Recipient |
| --- | --- | --- | --- |
| Network | Transaction fee | 0.4 HDX+ | Treasury |
| Omnipool | Asset fee | 0.25% - 5.00% | LPs, referrers, traders & staking |
| Omnipool | Protocol fee | 0.05% to 0.25% | 50% burned, 50% Treasury |
| Omnipool | Withdrawal fee | 0.01% to 1.00% | Liquidity providers |
| Isolated Pool | Trade fee | 0.3% | Liquidity providers |
| Stablepool (Standard) | Trade & withdrawal fee | 0.02% | Liquidity providers |
| Stablepool (GIGA) | Trade & withdrawal fee | 0.069% | Liquidity providers |
| Stablepool (HOLLAR) | Trade & withdrawal fee | 0.04% | Liquidity providers |
| Supply & Borrow | Liquidation penalty | 1.5 - 8% | Liquidator (90%), Treasury (10%) |
| Supply & Borrow | Liquidation penalty (PEPL) | 1.5 - 8% | Treasury |
| Supply & Borrow | Asset reserve | 20% of borrow interest | Treasury |
| HOLLAR | Borrow APR | 100% of borrow interest | HOLLAR Treasury |

### Transaction Fees

All network actions require a transaction fee (similar to gas on Ethereum). Users can pay transaction fees in any *whitelisted* asset. In practice, it's almost every asset but we cannot use:

- aTokens which are created from the Borrow markets
- Assets that don't have pools with DOT

The protocol automatically sets the first asset sent to Hydration as the default fee payment asset. This can be changed anytime on the wallet page.

### Asset Fees

Asset fees are charged on the "buy" side of Omnipool trades - when users purchase assets from the pool. These fees are collected from Omnipool trades, with a portion remaining in the Omnipool. When asset fees stay in the Omnipool, the system mints H2O tokens to match this amount, reducing impermanent loss impact on liquidity providers. H2O is Hydration's hub token that helps the Omnipool function—it's only minted by the protocol and serves as an intermediary that all other tokens can trade against.

Asset fees have a baseline rate and can increase during periods of high volatility before normalizing back to the baseline.

**Asset Fee Distribution:**

- 50% remains in the Omnipool as rewards for LPs
- 50% distributed based on referral status: goes entirely to HDX stakers for non-referred trades, or split between referral rewards and HDX stakers for referred trades (proportions vary by referral tier)
- **Exception:** HDX asset fees go entirely to the HDX staking pot, excluded from referral distribution

### Protocol Fees

Protocol fees are a separate fee layer charged on Omnipool trades to fund protocol operations and development. Unlike asset fees which are distributed to various participants, protocol fees go directly to protocol maintenance and governance functions. They reach a maximum rate, decreasing as trading activity normalizes. These fees are paid in H2O, with 50% burned and 50% sent to the Treasury. Governance can adjust these parameters.

### Withdrawal Fees

Withdrawal fees protect liquidity providers from losses when liquidity is withdrawn immediately after price changes.

**Omnipool Withdrawal Fees:**
Dynamic fees calculated as the percentage difference between the spot price and oracle price. This mechanism also prevents profitable manipulation of spot prices.

**Stablepool Withdrawal Fees:**
Different stablepool types have different withdrawal fee rates. All withdrawal fees are paid in the asset being withdrawn and remain in the pool as LP rewards.

### Trade Fees

Trade fees are charged when users make trades in different pool types across Hydration. **Isolated Pools** charge a fixed trade fee on all trades, with fees paid in the asset being purchased and remaining in the pool as rewards for liquidity providers. Stablepools have varying trade fee rates depending on the type, with all stablepool trade fees paid in the asset being purchased and remaining in the pool as LP rewards.

## IL Protection Through Fee Design

The H2O minting mechanism provides significant protection for liquidity providers through intelligent fee handling. When asset fees remain in the Omnipool, they function essentially as liquidity additions, and the H2O minting behavior matches this reality.

**Example:** If 1,000 USD in asset fees remains in the Omnipool from trading activity, the system mints $1,000 worth of H2O tokens to match this liquidity addition.

This mechanism:

- Reduces impermanent loss impact on liquidity providers
- Better distributes IL protection across the entire system

Combined with the more responsive dynamic fee system, this approach ensures that increased trading activity benefits both traders (through lower fees) and liquidity providers (through better protection).