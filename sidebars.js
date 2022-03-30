module.exports = {
  sidebar: {
    Intro: [
      "intro",
      "hydradx_crowdloan",
      "snakenet",
      "new_deal"
    ],
    "How-to": [
      "create_account",
      "claim",
      "start_nominating",
      "start_validating",
      "identity",
      "staking_claim_rewards",
      "tip_request",
      "participate_in_referenda",
      "participate_in_council_elections",
      {
        type: "category",
        label: "Connect to a Node",
        items: ["polkadotjs_apps_local", "polkadotjs_apps_public"],
      }
    ],
    "Learn": [
      "staking",
      "staking_rewards",
      {
        type: "category",
        label: "Democracy",
        items: [
          "democracy_intro",
          "democracy_referenda",
          "democracy_council",
          "democracy_technical_committee"
        ]
      },
      {
        type: "category",
        label: "Omnipool",
        items: [
          "omnipool_design"
        ]
      }
    ],
    "Maintain": [
      "node_setup",
      "collator_setup",
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
      },
      "dev_exercise",
    ],
    Contribute: ["contributing"]
  }
};
