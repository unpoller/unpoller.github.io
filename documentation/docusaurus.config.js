module.exports = {
  title: 'UniFi Poller',
  tagline: 'Telemetry and Observability for your UniFi Network',
  url: 'https://unifipoller.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'unifi-poller', // Usually your GitHub org/user name.
  projectName: 'unifi-poller.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'UniFi Poller',
      logo: {
        alt: 'UniFi Poller Logo',
        src: 'img/logo.svg',
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
              label: 'Open GitHub Issue',
              href: 'https://golift.io/unifi-poller/issues/new',
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
              label: 'Ubiquiti Discord',
              href: 'https://discord.gg/KnyKYt2',
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
      <a href="https://hub.docker.com/r/golift/unifi-poller">&#9733; THIS PROJECT ON DOCKERHUB</a>
      </div><div class="col footer__col" style="text-align:left;">
      Copyright © 2018-${new Date().getFullYear()} David Newhall II
      </div><div class="col footer__col"><img src="https://docs.golift.io/integrations/golift.png"></div></div>`,
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
