---
id: influxdb
title: InfluxDB
---

This page provides simple instructions on how to install and maintain InfluxDB and Grafana.

:::tip
InfluxDB 1.8.x or newer is required. Version 1.8.10+ is recommended.
:::

:::warning
**Do not use InfluxDB 2.0 or greater at this time.**
There are no pre-built graphs to display the data it collects.
:::

## Installation

### Windows

Using Power Shell (Run as Administrator)
```shell
wget https://dl.influxdata.com/influxdb/releases/influxdb-1.8.10_windows_amd64.zip -UseBasicParsing -OutFile influxdb-1.8.10_windows_amd64.zip
Expand-Archive .\influxdb-1.8.10_windows_amd64.zip -DestinationPath 'C:\Program Files\InfluxData\influxdb\'
```
Windows InfluxDB 1.x directions came [from here](https://portal.influxdata.com/downloads/)

**Start & configure:**
- Run `influxd.exe`
- [Post setup](influxdb.md#post-setup) configuration

*Default install path: 'C:\Program Files\InfluxData\influxdb\'*


### CentOS 7

Provided by community: https://github.com/unpoller/unpoller/issues/30

### CentOS 8 / RHEL 8

Provided by community: https://computingforgeeks.com/how-to-install-influxdb-on-rhel-8-centos-8/

### Ubuntu 18.04

These directions came [from here](https://github.com/unpoller/unpoller/issues/26).

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
docker pull influxdb:1
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

If you're using InfluxDB 2.x (not recommended at this time), you can set the retention policy by exec-ing into the container:

```none
docker exec -it unpoller_influxdb_1 /bin/bash
```

Extracting the unpoller bucket ID from the result of the command `/usr/local/bin/influx bucket ls` (in the example below, it's `0af2f3c9840627f6`):

```none
root@515481c98cb9:/# /usr/local/bin/influx bucket ls
ID			Name		Retention	Shard group duration	Organization ID		Schema Type
6d12a2decc0d9b23	_monitoring	168h0m0s	24h0m0s			5b8f04254daaddb6	implicit
2e1c4e9d11b806e3	_tasks		72h0m0s		24h0m0s			5b8f04254daaddb6	implicit
0af2f3c9840627f6	unpoller	infinite	168h0m0s		5b8f04254daaddb6	implicit
```

And then updating the retention policy with the command `/usr/local/bin/influx bucket update -i 0af2f3c9840627f6 -r 32d`, susbtituting your bucket ID:

```none
root@515481c98cb9:/# /usr/local/bin/influx bucket update -i 0af2f3c9840627f6 -r 32d
ID			Name		Retention	Shard group duration	Organization ID		Schema Type
0af2f3c9840627f6	unpoller	768h0m0s	168h0m0s		5b8f04254daaddb6	implicit
```
