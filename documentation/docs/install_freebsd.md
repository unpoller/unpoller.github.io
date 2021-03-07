---
id: install_freebsd
title: Bare metal - FreeBSD
---


This page assumes that you have decided to install UniFi Poller on to an existing operating system

## Before this

Make sure you have set up a user on your controller for UniFi Poller to use

It is assumed that you have working (and supported) versions of Grafana (though see the Plugins section below) and at least one of InfluxDB/Prometheus

(If you don't have then, brief instructions on installing InfluxDB and Grafana are given on [InfluxDB and Grafana Installation](install_influxdb.md))

## FreeBSD

Install compiled binary from ports run:

```
pkg install net/unifi-poller
```

To build and install from ports run:
```
cd /usr/ports/net-mgmt/unifi-poller
make install clean
```

Use these commands to maintain the service:
```
# View manual.
man unifi-poller

# Edit config file.
# A defualt configuration file is placed in /usr/local/etc/unifi-poller/up.conf which is not overwritten on upgrades
# A sample configuration is placed in /usr/local/etc/unifi-poller/up.conf.sample
vi /usr/local/etc/unifi-poller/up.conf

# enable the service. Or edit /etc/rc.conf
sysrc unifi_poller_enable="YES"

# Start, Restart, Stop service.
service unifi-poller start
service unifi-poller restart
service unifi-poller stop
# Check service status, useful for scripts.
service unifi-poller status

# Logs should wind up in this file, but your syslog may differ.
grep unifi-poller /var/log/messages
```
:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller if you are using `unifios` (that is, a UDM-Pro, UDM, or Ckoudkey with modern firmware)
:::

## Grafana Plugins

This application uses a few Grafana plugins. Install them:

    Clock, Discrete (InfluxDB only), PieChart, Singlestat (standard), Table (standard)

```
grafana-cli plugins install grafana-clock-panel
grafana-cli plugins install natel-discrete-panel
grafana-cli plugins install grafana-piechart-panel
```

If you're running Grafana in Docker, pass this environment variable/value to Grafana to install the plugins:
```
GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel
```
## Next steps

Go to the section [Final steps](install_finish.md)
