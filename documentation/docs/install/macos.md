---
id: macos
title: MacOS
---

This page assumes that you have decided to install UniFi Poller on to an existing macOS operating system.

## Before this

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of [Grafana](../dependencies/grafana) and at
least one of [InfluxDB](../dependencies/influxDB) or [Prometheus](../dependencies/prometheus).
If you don't have then, follow these instructions for installing
[InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).

## Installation

1. Install [Homebrew](https://brew.sh/)
1. `brew install golift/mugs/unifi-poller`
1. Edit the config file after installing the brew.
  See [Application Configuration](../install/configuration) for more information
  ```shell
  nano /usr/local/etc/unifi-poller/up.conf
  ```
  or
  ```shell
  vi /usr/local/etc/unifi-poller/up.conf
  ```
1. Start the service:
  ```shell
  # do not use sudo
  brew services start unifi-poller
  ```
    - The log file should show up at `/usr/local/var/log/unifi-poller.log`
    - If it does not show up, make sure your user has permissions to create the file
1. To restart (** required after upgrade**)
  ```shell
  brew services restart unifi-poller
  ```

## Next steps

1. Don't forget the [Grafana Plugins](../dependencies/grafana#plugins).
1. Go to the section [Final Steps](../install/finish).
