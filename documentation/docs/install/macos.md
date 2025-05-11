---
id: macos
title: MacOS
---

This page assumes that you have decided to install UniFi Poller on to an existing macOS operating system.

## First

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of [Grafana](../dependencies/grafana) and at
least one of [InfluxDB](../dependencies/influxdb) or [Prometheus](../dependencies/prometheus).
If you don't have them, follow these instructions for installing
[InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).

---

## Installation

1. Install [Homebrew](https://brew.sh/)

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

1. Install Poller

```
brew install golift/mugs/unpoller
```

1. Edit the config file after installing the brew.
   :::important
   When configuring make sure that you do **not** include `:8443` on the url of the controller
   if you are using `unifios`. Those are: UDM Pro, UDM, UXG, or CloudKey with recent firmware.
   :::
   See [Application Configuration](../install/configuration) for more information

```shell
nano /usr/local/etc/unpoller/up.conf
# or
vi /usr/local/etc/unpoller/up.conf
```

1. Start the service:

```shell
# do not use sudo
brew services start unpoller
```

    - The log file should show up at `/usr/local/var/log/unpoller.log`
    - If it does not show up, make sure your user has permissions to create the file.

1. To restart (** required after upgrade**)

```shell
brew services restart unpoller
```

## Maintenance

All maintenance is done with homebrew. Example commands:

```shell
# list all services brew controls.
brew services list
# restart poller.
brew services restart unpoller
# running stop will make it not run on boot.
brew services stop unpoller
# start makes it start now and on boot.
brew services start unpoller
# run starts it but will not re-start on boot.
brew services run unpoller
```

## Next Steps

1. Don't forget the [Grafana Plugins](../dependencies/grafana#plugins).
1. Finish [Setting-up Grafana](../install/grafana).
