module.exports = {
  sidebar: {
    Intro: ["intro"],
    "Knowledge base": [
      "staking"
    ],
    Snakenet: [
      "snakenet",
      "claim",
      {
        type: "category",
        label: "Become a validator",
        items: ["node_setup", "start_validating"],
      },
      "start_nominating",
      {
        type: "category",
        label: "Connecting to node",
        items: ["polkadotjs_apps_local", "polkadotjs_apps_public"],
      },
      {
        type: "category",
        label: "Other",
        items: ["performance_benchmark"],
      },
    ],
    Contributing: ["contributing"],
  },
};
