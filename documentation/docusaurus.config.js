module.exports = {
  title: 'Unpoller - UniFi Poller',
  tagline: 'Telemetry and Observability for your UniFi Network',
  url: 'https://unpoller.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'unpoller', // Usually your GitHub org/user name.
  projectName: 'unpoller.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'UniFi Poller',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/poller/introduction',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'Docusaurus',
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
              href: 'https://golift.io/unpoller/issues/new',
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
              label: 'Go Lift Discord',
              href: 'https://golift.io/discord',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
