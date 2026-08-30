// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UnPoller',
  tagline: 'Telemetry and Observability for your UniFi Network',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      fasterByDefault: true,
      siteStorageNamespacing: true,
      mdx1CompatDisabledByDefault: true,
      // Infima cascade layers restyle the existing custom CSS.
      useCssCascadeLayers: false,
    },
  },

  url: 'https://unpoller.com',
  baseUrl: '/',
  organizationName: 'unpoller',
  projectName: 'unpoller.github.io',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
    mdx1Compat: {
      // Keep :::tip Title working; docs also use :::tip[Title].
      admonitions: true,
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'UnPoller',
          src: 'img/logo.png',
        },
        items: [
          {
            to: 'docs/poller/introduction',
            label: 'Documentation',
            position: 'left',
          },
          {
            href: 'https://github.com/unpoller/unpoller',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Support',
            items: [
              {
                label: 'Go Lift Discord',
                href: 'https://golift.io/discord',
              },
              {
                label: 'Send Feedback',
                href: 'https://github.com/unpoller/unpoller/issues/new',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Ubiquiti Forums',
                href: 'https://community.ui.com/questions/Unifi-Poller-Store-Unifi-Controller-Metrics-in-InfluxDB-without-SNMP/58a0ea34-d2b3-41cd-93bb-d95d3896d1a1',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/unpoller/unpoller',
              },
            ],
          },
          {
            title: 'Downloads',
            items: [
              {
                label: 'Packagecloud',
                href: 'https://packagecloud.io/golift',
              },
              {
                label: 'Latest Release',
                href: 'https://github.com/unpoller/unpoller/releases/latest',
              },
            ],
          },
          {
            title: 'Information',
            items: [
              {
                label: 'Contact Us',
                href: 'mailto:code@golift.io',
              },
              {
                label: 'Software License',
                href: '/docs/poller/license',
              },
            ],
          },
        ],
        copyright: `<div class="row"><div class="col footer__col">
      <a href="https://github.com/unpoller/unpoller/pkgs/container/unpoller">&#9733; THIS PROJECT ON GHCR.IO</a>
      </div><div class="col footer__col" style="text-align:left;">
      Copyright © 2018-${new Date().getFullYear()} Go Lift
      </div><div class="col footer__col"><a href="https://golift.io"><img src="https://docs.golift.io/integrations/golift.png" /></a></div></div>`,
      },
    }),
};

export default config;
