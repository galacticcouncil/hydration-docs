module.exports = {
  sidebar: {
    Intro: ["intro"],
    Snakenet: ["snakenet", "claim",
      {
        "type": "category",
        "label": "Validator guide",
        "items": [
          "node_setup",
          "performance_benchmark",
          "validator"
        ]
      },
      {
        "type": "category",
        "label": "Nominator guide",
        "items": [
          "start_nominate"
        ]
      },
      {
        "type": "category",
        "label": "PolkadotJS-APPS",
        "items": [
          "polkadotjs_apps_local",
          "polkadotjs_apps_public"
        ]
      }
    ],
    Contributing: ["contributing"],
  },
};
