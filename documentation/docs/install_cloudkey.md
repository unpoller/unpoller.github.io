---
id: install_cloudkey
title: Cloudkey
---

## Introduction

Two methods are available for installation on a Cloud Key (or Cloud Key Gen2 or Cloud Key Gen2 Plus), depending on whether the device is running `unifos` or not.

Note that these solutions are community-supplied and have a limited user base.


### Installing UnifiPoller on "legacy" firmware

Referenced from a user page [here](https://www.robertcampbell.dev/2020/07/installing-unifi-poller-influxdb-and.html)

1. Install Grafana (https://grafana.com/docs/grafana/latest/installation/debian/):
```
curl https://packages.grafana.com/gpg.key | sudo apt-key add -
apt install -y apt-transport-https
add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"

apt -y update && sudo apt -y install grafana
systemctl daemon-reload
systemctl start grafana-server
systemctl enable grafana-server.service
systemctl status grafana-server
```

2. Install Influxdb (comes in Xenial):
```
apt-get update
apt-get install -y influxdb influxdb-client
```
Add user to influx (https://v2.docs.influxdata.com/v2.0/users/create-user/):
```
influx -host localhost -port 8086
CREATE DATABASE unifi
USE unifi
CREATE USER unifipoller WITH PASSWORD 'unifipoller' WITH ALL PRIVILEGES
GRANT ALL ON unifi TO unifipoller
```
:::Note
For InfluxDB on a Cloud Key it is *highly* advisable to add a retention policy to prevent the database from growing in an uncontrolled fashion.
:::

3. Install unifi-poller (https://github.com/unifi-poller/unifi-poller/wiki/Installation#debian-variants-ubuntu-knoppix):
```
curl -s https://golift.io/gpgkey | sudo apt-key add -
echo deb https://dl.bintray.com/golift/ubuntu bionic main | sudo tee /etc/apt/sources.list.d/golift.list
apt update
apt install unifi-poller
```

4. Amend your config file `/etc/unifi-poller/up.conf` as set out in [Config file and Environment variables](configuration.md)

5. Follow the steps in [Final steps](install_finish.md)

### Installing UnifiPoller on `unifios`

There is an existing suite for installing `podman` containers to run on `unifios` - see [here](https://github.com/boostchicken/udm-utilities). At the time of writing we are not aware of any use implementing UniFi Poller using this method, but it should be straightforward.
