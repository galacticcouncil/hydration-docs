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
      "dev_intro",
      "build_dev_chain",
      "dev_pools",
      "dev_primitives",
      "dev_math",
      {
        type: "category",
        label: "Pallets",
        items: [
          "dev_pallets",
          "dev_pallet_asset_registry",
          "dev_pallet_xyk",
          "dev_pallet_hdx",
          "dev_pallet_exchange",
          "dev_pallet_payment"
        ]
      }
    ],
    Contribute: ["contributing"]
  }
};
