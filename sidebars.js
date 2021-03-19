module.exports = {
  sidebar: {
    Intro: ["intro"],
    Snakenet: ["snakenet", "claim",
      {
        "type": "category",
        "label": "Validator guide",
        "items": [
          "node_setup",
          "start_validating"
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
      },
      {
        "type": "category",
        "label": "Other",
        "items": [
          "performance_benchmark"
        ]
      }
    ],
    Contributing: ["contributing"],
  },
};
