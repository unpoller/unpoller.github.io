---
id: grafana
title: Grafana
---


This page provides simple instructions on how to install Grafana.

You can find official instructions in the [Grafana Docs](https://grafana.com/docs/grafana/latest/installation/).

Grafana 7.4.0+ is recommended. Grafana 7.x or newer is required.

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
