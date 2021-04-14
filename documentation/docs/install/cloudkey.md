---
id: cloudkey
title: CloudKey
---

## Introduction

Two methods are available for installation on a CloudKey, CloudKey Gen2 or CloudKey G2+.
The method depends on whether the device is running `unifos` or not.

:::note
These solutions are community-supplied and have a limited user base.
:::

## Installation

### Legacy Firmware

These directions are for devices not running UnifiOS.
Referenced from a user page [here](https://www.robertcampbell.dev/2020/07/installing-unifi-poller-influxdb-and.html).

#### Install Grafana

- From: https://grafana.com/docs/grafana/latest/installation/debian/

```shell
curl https://packages.grafana.com/gpg.key | sudo apt-key add -
apt install -y apt-transport-https
add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"
apt -y update && sudo apt -y install grafana
systemctl daemon-reload
systemctl start grafana-server
systemctl enable grafana-server.service
systemctl status grafana-server
```

#### Install InfluxDB

```shell
apt-get update
apt-get install -y influxdb influxdb-client
```

Add user to influx; [from here](https://v2.docs.influxdata.com/v2.0/users/create-user/):

```shell
influx -host localhost -port 8086
CREATE DATABASE unifi
USE unifi
CREATE USER unifipoller WITH PASSWORD 'unifipoller' WITH ALL PRIVILEGES
GRANT ALL ON unifi TO unifipoller
```

:::note
For InfluxDB on a CloudKey it is *highly* advisable to add a retention policy to
prevent the database from growing in uncontrollably.
:::

#### Install UniFi Poller

Linux repository hosting provided by
[![packagecloud](https://docs.golift.io/integrations/packagecloud-full.png "PackageCloud.io")](http://packagecloud.io)

Install the Go Lift package repo and UniFi Poller with this command:

```shell
curl -s https://golift.io/repo.sh | sudo bash -s - unifi-poller
```

### Current Firmware: `unifios`

There is an existing suite for installing `podman` containers to run on `unifios` -
see [here](https://github.com/boostchicken/udm-utilities).  At the time of writing  we are not
aware of any use implementing UniFi Poller  using this method, but it should be straightforward.

## Configuration

The config file is located at `/etc/unifi-poller/up.conf` and
it is explained on the [Application Configuration](../install/configuration) page.

## Next steps

1. Don't forget the [Grafana Plugins](../dependencies/grafana#plugins).
1. Finish [Setting-up Grafana](../install/grafana).
