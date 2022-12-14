module.exports = {
  sidebar: {
    HydraDX: [
      "intro",
      "omnipool_trading",
      "omnipool_lp",
      "omnipool_treasuries",
      "omnipool_security",
      "omnipool_impermanent_loss",
      "omnipool_hydrated_farms",
      "new_deal"
    ],
    "How-to": [
      {
        type: "category",
        label: "Democracy",
        items: [
          "tip_request",
          "participate_in_referenda",
          "participate_in_council_elections"
        ]
      },
      "create_account",
      "claim",
      "identity",
      {
        type: "category",
        label: "Connect to a Node",
        items: ["polkadotjs_apps_local", "polkadotjs_apps_public"],
      }
    ],
    "Learn": [
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
      "collator_setup",
      "performance_benchmark",
      "node_monitoring"
    ],
    Build: [
      "dev_intro",
      "build_dev_chain",
    ],
    Archive: ["archive_hydradx_crowdloan"],
    Contribute: ["contributing"]
  }
};
