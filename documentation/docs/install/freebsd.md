---
id: freebsd
title: FreeBSD
---

This page assumes that you have decided to install UniFi Poller on to an existing FreeBSD operating system.

## First

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of [Grafana](../dependencies/grafana) and at
least one of [InfluxDB](../dependencies/influxdb) or [Prometheus](../dependencies/prometheus).
If you don't have them, follow these instructions for installing
[InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).

---

## Installation

Install compiled binary from ports run:

```shell
pkg install net/unpoller
```

## Compile

To build and install from ports run:

```shell
cd /usr/ports/net-mgmt/unpoller
make install clean
```

## Maintenance

See [Application Configuration](../install/configuration) and the
[example config](https://github.com/unpoller/unpoller/blob/master/examples/up.conf.example)
file for additional post-install configuration information.

:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller
if you are using `unifios`. Those are: UDM Pro, UDM, UXG, or CloudKey with recent firmware.
:::

Use these commands to maintain the service:

```shell
# View manual.
man unpoller

# Edit config file.
# A defualt configuration file is placed in /usr/local/etc/unpoller/up.conf which is not overwritten on upgrades
# A sample configuration is placed in /usr/local/etc/unpoller/up.conf.sample
vi /usr/local/etc/unpoller/up.conf

# enable the service. Or edit /etc/rc.conf
sysrc unpoller_enable="YES"

# Start, Restart, Stop service.
service unpoller start
service unpoller restart
service unpoller stop
# Check service status, useful for scripts.
service unpoller status

# Logs should wind up in this file, but your syslog may differ.
grep unpoller /var/log/messages
```

## Next Steps

1. Don't forget the [Grafana Plugins](../dependencies/grafana#plugins).
1. Finish [Setting-up Grafana](../install/grafana).
