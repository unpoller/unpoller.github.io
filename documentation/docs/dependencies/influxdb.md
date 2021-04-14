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

## Installation

### CentOS 7

Provided by community: https://github.com/unifi-poller/unifi-poller/issues/30

### CentOS 8 / RHEL 8

Provided by community: https://computingforgeeks.com/how-to-install-influxdb-on-rhel-8-centos-8/

### Ubuntu 18.04

These directions came [from here](https://github.com/unifi-poller/unifi-poller/issues/26).

Install:

```shell
echo "deb https://repos.influxdata.com/ubuntu bionic stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
sudo curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -
sudo apt -y update
sudo apt install -y influxdb
```

Start: `sudo systemctl start influxdb`

### macOS

You need [Homebrew](https://brew.sh):

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
```shell
brew install influxdb
brew services restart influxdb
```

### Docker

Pull the container and run InfluxDB like this:

```shell
docker pull influxdb:1.8
docker run -p 8086:8086 \
-e INFLUXDB_DB=unifi \
-e INFLUXDB_ADMIN_USER=unifi \
-e INFLUXDB_ADMIN_PASSWORD=changeme \
-v /YOURLOCALPATH/influxdb:/var/lib/influxdb \
influxdb:1.8
```

Replace `YOURLOCALPATH` with a location for the data InfluxDB needs to write to disk.

## Post Setup

Although InfluxDB is up and running, you may need to set up the database which was referenced in the configuration.
This shouldn't be needed if you followed the [Docker Compose](../install/dockercompose) instructions;
however, you may wish to add in the retention policy as shown below.

Get shell access to wherever it is and run the command `influx`

Create the database:

```none
CREATE DATABASE unifi
USE unifi
CREATE USER unifipoller WITH PASSWORD 'unifipoller' WITH ALL PRIVILEGES
GRANT ALL ON unifi TO unifipoller
```

Optionally - and this is a very sensible idea - set limits on how much data you wish to retain
by implementing a retention policy. For example, to hold data for 32 days add the command:

```none
CREATE RETENTION POLICY retention_policy ON unifi DURATION 32d REPLICATION 1
```
