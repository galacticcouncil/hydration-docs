module.exports = {
  sidebar: {
    Intro: ["intro"],
    Snakenet: ["snakenet", "claim",
      {
        "type": "category",
        "label": "Validator guide",
        "items": [
          "node_setup",
          "validator"
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
