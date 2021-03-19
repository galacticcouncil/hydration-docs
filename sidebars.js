module.exports = {
  sidebar: {
    Intro: ["intro"],
    Snakenet: ["snakenet", "claim",
      "start_nominating",
      {
        "type": "category",
        "label": "Become a validator",
        "items": [
          "node_setup",
          "start_validating"
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
