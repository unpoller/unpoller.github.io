---
id: freebsd
title: FreeBSD
---

This page assumes that you have decided to install UniFi Poller on to an existing FreeBSD operating system.

## Before this

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of [Grafana](../dependencies/grafana) and at
least one of [InfluxDB](../dependencies/influxDB) or [Prometheus](../dependencies/prometheus).
If you don't have then, follow these instructions for installing
[InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).

## Install

Install compiled binary from ports run:

```shell
pkg install net/unifi-poller
```

## Compile

To build and install from ports run:

```shell
cd /usr/ports/net-mgmt/unifi-poller
make install clean
```

## Maintain

See [Application Configuration](../install/configuration) and the
[example config](https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example)
file for additional post-install configuration information.

:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller
if you are using `unifios`. Those are: UDM Pro, UDM, or CkoudKey with recent firmware.
:::

Use these commands to maintain the service:

```shell
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

## Next steps

1. Don't forget the [Grafana Plugins](../dependencies/grafana#plugins).
1. Go to the section [Final Steps](../install/finish).
