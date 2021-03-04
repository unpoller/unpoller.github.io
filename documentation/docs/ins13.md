---
id: ins13
title: InfluxDB and Grafana Installation
---


This page provides simple instructions on how to install and maintain InfluxDB and Grafana.

## InfluxDB

Most of the production use of this software is with InfluxDB 1.7.7 = this version is well tested. Many users have reported missing data and empty graphs when using versions of InfluxDB prior to 1.7.x.
Linux. Do not use 2.0 or greater at this time.

### CentOS 7

Provided by community: https://github.com/unifi-poller/unifi-poller/issues/30

### CentOS 8 / RHEL 8

Provided by community: https://computingforgeeks.com/how-to-install-influxdb-on-rhel-8-centos-8/

### Ubuntu 18.04

These directions came from here.

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

## Grafana

You can find official instructions in the [Grafana Docs](https://grafana.com/docs/grafana/latest/installation/).

Grafana 7.0.5+ is recommended. Grafana 6.x or newer is required. Grafana 4.x will not work; 5.x may work.

### Installing

This will set it up on localhost:3000 with admin/admin login.

### Linux

#### CentOS 7

Get an RPM. https://grafana.com/docs/installation/rpm/

#### Ubuntu 18.04
```
curl https://packages.grafana.com/gpg.key | sudo apt-key add -
sudo apt install -y apt-transport-https
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"

sudo apt -y update && sudo apt -y install grafana
sudo systemctl daemon-reload
sudo systemctl start grafana-server
sudo systemctl enable grafana-server.service
sudo systemctl status grafana-server
```

#### macOS

You need Homebrew:
```
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
```
brew install grafana
brew services restart grafana
brew services list
```
