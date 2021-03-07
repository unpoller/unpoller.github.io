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
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/up1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://golift.io/discord',
            },
          ],
        },
        {
          title: 'UniFi Poller',
          items: [
            {
              label: 'GitHub',
              href: 'https://golift.io/unifi-poller',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
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
