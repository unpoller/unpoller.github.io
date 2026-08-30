/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  someSidebar: [
    'poller/introduction',
    {
      Installation: [
        'install/gettingstarted',
        'install/overview',
        'install/installmethod',
        'install/controllerlogin',
        {
          Docker: [
            'install/dockercompose',
            'install/docker',
            'install/synology',
            'install/cloudkey',
          ],
        },
        'install/kubernetes',
        'install/freebsd',
        'install/macos',
        'install/linux',
        'install/windows',
        'install/configuration',
        'install/grafana',
      ],
    },
    {
      Dependencies: [
        'dependencies/grafana',
        'dependencies/prometheus',
        'dependencies/loki',
        'dependencies/influxdb',
      ],
    },
    {
      Advanced: ['advanced/webserver', 'advanced/api'],
    },
    {
      Help: ['help/common', 'help/help', 'help/docker_faq', 'help/manualbuild'],
    },
    'poller/examples',
    'poller/howitworks',
    'poller/faq',
    'poller/otherguides',
    'poller/contributors',
    'poller/changelog',
    {
      type: 'html',
      value: '<a href="https://golift.io"><img src="https://docs.golift.io/integrations/golift.png" /></a>',
      defaultStyle: true,
    },
  ],
};

export default sidebars;
