module.exports = {
  title: 'Unifi Poller',
  tagline: 'Showing you the info that you want to see from your Unifi controller',
  url: 'https://unifi-poller.github.io',
  baseUrl: '/pollerdox/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PianSom', // Usually your GitHub org/user name.
  projectName: 'pollerdox', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Unifi Poller',
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
              href: 'https://discord.gg/XNQSYwYH',
            },
          ],
        },
        {
          title: 'Project home',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/unifi-poller/unifi-poller',
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
