---
id: influxdb
title: InfluxDB
---

This page provides simple instructions on how to install and maintain InfluxDB and Grafana.

:::tip
InfluxDB 1.7.7 or new is required. Version 1.8.4 is recommended.
:::

:::warning
**Do not use InfluxDB 2.0 or greater at this time.**
There are no pre-built graphs to display the data it collects.
:::

### CentOS 7

Provided by community: https://github.com/unifi-poller/unifi-poller/issues/30

### CentOS 8 / RHEL 8

Provided by community: https://computingforgeeks.com/how-to-install-influxdb-on-rhel-8-centos-8/

### Ubuntu 18.04

These directions came [from here](https://github.com/unifi-poller/unifi-poller/issues/26).

Install:
```
echo "deb https://repos.influxdata.com/ubuntu bionic stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
sudo curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -
sudo apt -y update
sudo apt install -y influxdb
```
Start:
`sudo systemctl start influxdb`

### macOS

You need Homebrew:
```
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
```
brew install influxdb
brew services restart influxdb
```
