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
      "tokenomics",
    ],
    "How-to": [
      "howto_trade",
      "howto_lp",
      "howto_xcm",
      "howto_bridge",
      {
        type: "category",
        label: "Wallets",
        items: [
          "create_account",
          "howto_wallet_parity_signer"
        ]
      },
      {
        type: "category",
        label: "Democracy",
        items: [
          "tip_request",
          "participate_in_referenda",
          "participate_in_council_elections"
        ]
      },
      "claim",
      "identity",
      {
        type: "category",
        label: "Connect to a Node",
        items: ["polkadotjs_apps_local", "polkadotjs_apps_public"],
      }
    ],
    "Learn": [
      "learn_amm",
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
    Contribute: ["new_deal", "contributing"]
  }
};
