---
title: EVM Integration
description: Integrate with Hydration's EVM - RPC endpoints, precompiles, contract deployment, and testing
---

Hydration's EVM compatibility is provided by `pallet_evm` + `pallet_ethereum` — a Moonbeam-maintained fork of [Frontier](https://github.com/paritytech/frontier) embedded directly in the Substrate runtime, not a separate parachain or sidechain. This means:

- Standard Solidity tooling (Hardhat, Foundry) and EVM wallets (MetaMask) work against Hydration without a bridge or wrapped-chain layer.
- EVM transactions and Substrate extrinsics settle in the same block, on the same state.
- The EVM sits alongside Hydration's native pallets (Omnipool, money market, HOLLAR, etc.), and several of those pallets are exposed to EVM contracts via precompiles.

## Account mapping (Substrate ↔ EVM) {#account-mapping}

Hydration accounts live in two address spaces — 32-byte Substrate `AccountId`s and 20-byte EVM addresses — and the mapping between them (`pallet_evm_accounts`) is asymmetric.

**Substrate → EVM (always available, no action needed):** every Substrate `AccountId` already has an implicit EVM address — simply its **first 20 bytes**. This is how a Substrate-signed extrinsic's identity shows up inside the EVM (e.g. as the caller for calls routed through the [Dispatch precompile](#precompiles)).

**EVM → Substrate** has two cases:

- **Unbound (default).** For a raw EVM address with no explicit link, Hydration derives a synthetic "truncated" `AccountId`: `"ETH\0"` (4 bytes) + the 20-byte EVM address + 8 zero bytes = 32 bytes. This is what holds balance and pays fees for a plain `eth_sendRawTransaction` from a fresh EOA — a one-way derivation, not tied to any real sr25519/ed25519 keypair.
- **Bound, via `evmAccounts.bind_evm_address()`.** A user with an existing Substrate account can submit this extrinsic (no arguments — both sides are derived from the caller) to link the two. It stores the **last 12 bytes** of their real `AccountId` in on-chain storage, keyed by their EVM address (which, per the rule above, is just the first 20 bytes of that same `AccountId`). After binding, the runtime reconstructs their real account as `evm_address (20 bytes) + stored last 12 bytes` — so an existing Substrate account's HDX/asset balances become directly usable from the EVM side, instead of a separate synthetic shadow account. Binding is optional; most raw EOA-signed EVM transactions never bind anything and just use the synthetic form.

## Networks & RPC {#networks-rpc}

**Mainnet** — EVM chain ID `222222` (`0x3640e`). All endpoints below serve both Substrate WSS and Ethereum JSON-RPC (`eth_*`) on the same host — there is no separate EVM-only endpoint:

| Provider | Endpoint |
|---|---|
| Dwellir (default) | `wss://hydration-rpc.n.dwellir.com` |
| Rotko (SEA) | `wss://hydration.rotko.net` |
| sin | `wss://subway.sin.hydration.cloud` |
| coke | `wss://subway.coke.hydration.cloud` |
| kril | `wss://rpc.kril.hydration.cloud` |
| shellfish | `wss://subway.shellfish.hydration.cloud` |
| catfish-1 | `wss://rpc-catfish-1.catfish.hydration.cloud` |
| catfish-2 | `wss://rpc-catfish-2.catfish.hydration.cloud` |
| catfish-3 | `wss://rpc-catfish-3.catfish.hydration.cloud` |
| catfish-4 | `wss://rpc-catfish-4.catfish.hydration.cloud` |

For `eth_*` JSON-RPC, use the same hostnames over `https://` (e.g. `https://hydration-rpc.n.dwellir.com`).

> Live latency benchmarks for these endpoints (p50/p90/p99, 3 regions, updated every 60 s): [OpenChainBench Hydration RPC](https://openchainbench.com/benchmarks/hydration-rpc)

**Test networks** — Hydration doesn't run a separate long-lived public testnet with independent state; instead, mainnet-forked "lark" nodes serve as the disposable test environment, regularly reset to current mainnet state:

- `https://0.lark.hydration.cloud`
- `https://1.lark.hydration.cloud`
- `https://2.lark.hydration.cloud`
- `https://3.lark.hydration.cloud`

Same chain ID as mainnet (`222222`) — there is no chain-ID-based way to distinguish a lark fork from mainnet. State can be reset at any time; don't rely on persistent test data across sessions.

**Wallet configuration (EIP-3085 `wallet_addEthereumChain`):**

```json
{
  "chainId": "0x3640e",
  "chainName": "Hydration",
  "rpcUrls": ["https://hydration-rpc.n.dwellir.com"],
  "nativeCurrency": { "name": "Wrapped Ether", "symbol": "WETH", "decimals": 18 }
}
```

Note the EVM "native" gas currency is a WETH-wrapped asset (`WethCurrency`), not HDX — Hydration's dynamic multi-currency fee system can also accept other registered assets for gas, but WETH is the default/primary one.

## JSON-RPC surface {#json-rpc-surface}

**Supported:** `eth_*` (including filters and `eth_subscribe` pubsub), `net_*`, `web3_*`.

**Not supported:** `debug_*`, `trace_*`, `txpool_*` — there is no `debug_traceTransaction` or mempool introspection.

**Gas estimation:** `eth_estimateGas` had a known reliability issue for bounded Substrate accounts; this was fixed in a `hydration-node` runtime upgrade (April 2026). Standard `eth_estimateGas`-based flows (MetaMask, ethers/viem defaults) should work without needing a manual safety multiplier.

## Precompiles {#precompiles}

Registered in `HydraDXPrecompiles<R>`:

| Address | Name | Purpose |
|---|---|---|
| `0x...0001`–`0x...0009` | Standard Ethereum precompiles | ECRecover, SHA256, RIPEMD160, Identity, Modexp, BN128Add, BN128Mul, BN128Pairing, Blake2F |
| `0x...0401` | Dispatch | Executes a Substrate runtime call from EVM context — the general Substrate↔EVM bridge |
| `0x...0806` | LockManager | Backs GIGAHDX's `LockableAToken.sol`; restricted caller |
| `0x...080a` | CallPermit | EIP-712-style typed call permit (permit + relayer pattern) |
| `0x...090a` | FlashLoanReceiver | ERC-3156-compatible flashloan callback; restricted to the configured flash-minter |
| `0x00000000000000000000000000000001XXXXXXXX` | Per-asset ERC-20 | Every registered Hydration asset is exposed as a standard ERC-20 at this address (last 4 bytes = big-endian `AssetId`) — trade/transfer native Hydration assets from EVM contracts as if they were ordinary ERC-20 tokens |
| `0x000001XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` | Chainlink-style oracle | AggregatorV3-compatible interface backed by Hydration's on-chain EMA oracle |

The EVM's execution target is **Osaka** (a superset of Shanghai/Cancun/Prague) — `PUSH0`, transient storage (`TSTORE`/`TLOAD`), and `MCOPY` are all supported.

## Contract deployment {#contract-deployment}

Standard Hardhat/Foundry deployment flows work against the mainnet RPC endpoints above (chain ID `222222`). Note: transactions must be **legacy (type-0)** — some deploy scripts explicitly pass `--legacy`/set `type: 0` for reliability.

**Contract-deployer allowlist:** Hydration gates who may deploy new contracts via `pallet_evm_accounts`'s `ContractDeployer` allowlist. Adding an address requires an on-chain governance action (`add_contract_deployer`, via root or an OpenGov `GeneralAdmin`-track referendum) — this is not self-serve. If you're planning to deploy contracts on Hydration mainnet, reach out to the Hydration team ahead of time (e.g. via [Discord](https://discord.gg/hydration-net) or a [Subsquare](https://hydration.subsquare.io/posts/create) discussion thread) to get your deployer address whitelisted through governance.

## Contract verification {#contract-verification}

Hydration's block explorer is [hydration.subscan.io](https://hydration.subscan.io). It provides transaction/block lookup across both the Substrate and EVM sides of the chain, but does not offer Blockscout/Etherscan-style contract source verification.

If you need verified-source publication for your contracts, contact the Hydration team directly — this is a known gap rather than a self-serve flow today.

## Local mainnet-fork testing with Chopsticks {#chopsticks}

For local development against a fork of Hydration mainnet state, use the **`@galacticcouncil/chopsticks`** fork — not vanilla `@acala-network/chopsticks`, which lacks Frontier `eth_*` RPC support.

```bash
npx @galacticcouncil/chopsticks@latest --config=hydradx
```

This serves both Substrate and `eth_*` JSON-RPC on the same port (default `ws://localhost:8000`), forked from current Hydration mainnet state. Instant block production is the default build-block mode.

**Gotchas:**
- `eth_feeHistory` and `eth_maxPriorityFeePerGas` are synthetic, derived from a static `eth_gasPrice` under a fork — don't rely on fee-history-based gas estimation in this environment.
- Legacy (type-0) transactions only, same as mainnet.

**Whitelisting a deployer address on your fork:** the mainnet governance process above doesn't apply here — on Chopsticks you control the chain state directly. `ContractDeployer` is a plain `StorageMap<EvmAddress, ()>`, so Chopsticks' `dev_setStorage` RPC can write the entry directly, bypassing governance entirely:

```js
import { ApiPromise, WsProvider } from "@polkadot/api";

const api = await ApiPromise.create({ provider: new WsProvider("ws://localhost:8000") });
const evmAddress = "0xYourAddress...";

// Resolve the storage value's encoding dynamically rather than hardcoding it —
// ContractDeployer's value type isn't a plain unit in this runtime's metadata.
const valueTypeId = api.query.evmAccounts.contractDeployer.creator.meta.type.asMap.value.toNumber();
const valueTypeName = api.registry.createLookupType(valueTypeId);
let value = api.createType(valueTypeName, valueTypeName === "bool" ? true : undefined).toHex();
if (value === "0x00") value = "0x01";

const key = api.query.evmAccounts.contractDeployer.key(evmAddress);
await api.rpc("dev_setStorage", [[key, value]]);

// Verify:
console.log((await api.query.evmAccounts.contractDeployer(evmAddress)).toHuman());
```
