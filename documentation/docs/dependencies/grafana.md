---
id: grafana
title: Grafana
---

This page provides simple instructions on how to install Grafana.
Configuration is documented in [another page](../install/grafana).

:::tip
Grafana 7.4.0+ is recommended. Grafana 7.x or newer is required.
:::

## Plugins

This application uses a few Grafana plugins. Install them. Grafana must be installed first, see below.

- Clock
- Discrete (InfluxDB only)
- PieChart

```shell
grafana-cli plugins install grafana-clock-panel
grafana-cli plugins install natel-discrete-panel
grafana-cli plugins install grafana-piechart-panel
```

If you're running Grafana in Docker, pass this environment variable/value to Grafana to install the plugins:
```shell
GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel
```

## Installing

:::note
You can find official instructions in the [Grafana Docs](https://grafana.com/docs/grafana/latest/installation/).
:::

This will set it up on localhost:3000 with admin/admin login.

### Linux

#### CentOS 7

Get an RPM. https://grafana.com/docs/installation/rpm/

#### Ubuntu 18.04

```shell
curl https://packages.grafana.com/gpg.key | sudo apt-key add -
sudo apt install -y apt-transport-https
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"

sudo apt -y update && sudo apt -y install grafana
sudo systemctl daemon-reload
sudo systemctl start grafana-server
sudo systemctl enable grafana-server.service
sudo systemctl status grafana-server
```

### macOS

You need [Homebrew](https://brew.sh):

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
```shell
brew install grafana
brew services restart grafana
brew services list
```

### Docker

Pull the container and run Grafana like this:

```shell
docker pull grafana/grafana
docker run -p 3000:3000 \
-v /YOURLOCALPATH/grafana:/var/lib/grafana \
-e GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel \
grafana/grafana
```

Replace `YOURLOCALPATH` with a location for the data Grafana needs to write to disk.

## Configuring

To configure Grafana, you need to add a data source and import the dashboards.
Learn how to do that in [Grafana Setup](../install/grafana).
