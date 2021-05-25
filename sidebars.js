module.exports = {
  sidebar: {
    Intro: [
      "intro",
      "snakenet",
      "new_deal"
    ],
    "How-to": [
      "claim",
      "start_nominating",
      "start_validating",
      "identity",
      "staking_claim_rewards",
      "tip_request",
      {
        type: "category",
        label: "Connect to a Node",
        items: ["polkadotjs_apps_local", "polkadotjs_apps_public"],
      }
    ],
    "Learn": [
      "staking",
      "staking_rewards"
    ],
    "Maintain": [
      "node_setup",
      "performance_benchmark",
      "node_monitoring"
    ],
    Build: [
      "build_dev_chain"
    ],
    Contribute: ["contributing"],
    "Hydra Dev Intro": ["dev_intro", "dev_pools",
      "dev_primitives",
      "dev_math",
      {type: "category",
      label: "Pallets", items: ["dev_pallets","pallet_asset_registry", "pallet_xyk", "pallet_hdx", "pallet_exchange", "pallet_payment" ]},
    "dev_benchmarking"]
  },
};
