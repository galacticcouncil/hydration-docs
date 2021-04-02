module.exports = {
  sidebar: {
    Intro: ["intro"],
    Snakenet: [
      "snakenet/snakenet",
      "snakenet/claim",
      "snakenet/start_nominating",
      "snakenet/start_validating",
      {
        type: "category",
        label: "Connecting to node",
        items: ["snakenet/polkadotjs_apps_local", "snakenet/polkadotjs_apps_public"],
      }
    ],
    "Learn": [
      "learn/staking"
    ],
    "Maintain": [
      "maintain/node_setup",
      "maintain/performance_benchmark",
      "maintain/node_monitoring"
    ],
    "Build": [],
    Contributing: ["contributing"],
  },
};
