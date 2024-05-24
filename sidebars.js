module.exports = {
  sidebar: {
    HydraDX: [
      "intro",
      "omnipool_trading",
      "omnipool_dca",
      "omnipool_lp",
      "staking",
      "referrals",
      "yield_dca",
      "omnipool_treasuries",
      "omnipool_security",
      "omnipool_impermanent_loss",
      "omnipool_hydrated_farms",
      "bonds",
      "lbp",
      "fees",
      "tokenomics",
      "spending_fw",
    ],
    "How-to": [
      "trade_metamask",
      "bridge_from_ethereum",
      "howto_xcm",
      "howto_trade",
      "howto_dca",
      "howto_lp",
      "howto_hydrated_farms",
      "howto_stake",
      "howto_bonds_lbp",
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
      },
      "howto_list_token_in_omnipool",
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
    Contribute: ["contributing"],
  }
};
