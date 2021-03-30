---
id: macos
title: MacOS
---


This page assumes that you have decided to install UniFi Poller on to an existing Linux operating system.

## Before this

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of Grafana (though see the Plugins section below) and at
least one of InfluxDB or Prometheus. If you don't have then, follow these instructions for installing [InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).

## Installation

1. Install [Homebrew](https://brew.sh/)
2. `brew install golift/mugs/unifi-poller`
3. Edit the config file after installing the brew. See the page [Config file and Environment variables](../install/configuration) for more information
```
nano /usr/local/etc/unifi-poller/up.conf
```
or
```
vi /usr/local/etc/unifi-poller/up.conf
```
4. Start the service:
```
# do not use sudo
brew services start unifi-poller
```
  - The log file should show up at ``/usr/local/var/log/unifi-poller.log``
  - If it does not show up, make sure your user has permissions to create the file
5. To restart (** required after upgrade**)
```
brew services restart unifi-poller
```

## Grafana Plugins

This application uses a few Grafana plugins. Install them:

    Clock, Discrete (InfluxDB only), PieChart, Singlestat (standard), Table (standard)

```
grafana-cli plugins install grafana-clock-panel
grafana-cli plugins install natel-discrete-panel
grafana-cli plugins install grafana-piechart-panel
```

## Next steps

Go to the section [Final Steps](../install/finish).
