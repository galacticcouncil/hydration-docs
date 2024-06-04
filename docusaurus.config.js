const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "Hydration Docs",
  tagline: "Let's learn this",
  url: "https://docs.hydradx.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.png",
  organizationName: "galacticcouncil", // Usually your GitHub org/user name.
  projectName: "Hydration-docs", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['rust'],
    },
    navbar: {
      title: "Hydration Documentation",
      logo: {
        alt: "Hydration logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "/",
          label: "Docs",
          position: "left",
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: "https://hydradx.io",
          label: "Hydration Homepage",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/HDNPFFrcnW",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/hydra_dx",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intergalactic, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: "https://github.com/galacticcouncil/Hydration-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    }
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ru', 'es', 'fr', 'cn'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      de: {
        label: 'Deutsch',
      },
      ru: {
        label: 'русский',
      },
      es: {
        label: 'español',
      },
      fr: {
        label: 'français',
      },
      cn: {
        label: '中文',
      }
    },
  },
};
