---
id: installmethod
title: Install Method
---

## Chosing an Install Method

There are three main methods to install the Unpollor 'suite' (Unpoller and accociated programs)

### Docker image
This is recommended way to install

#### Advantages of Docker

- Easy to configure, as you can rely on pre-existing work.
- Easy to update.
- Reliable and well-supported.

#### Disadvantages of Docker

- Some performance impact (though not likely to impact UniFi Poller, there is an overhead).
- Relies on a base system for persistence of data.
- May not be implemented on some useful platforms (eg NAS).

### Manual Install
Install each of the components individually

#### Advantages of Manual

- Works on systems that don't support Docker
- You can make use of any components you already have
- Less performance impact
- Don't need VM support

#### Disadvantages of Manual

- Harder to update
- Requires manual configuration

### Device Specific
Some devices have specific install methods

#### unRAID Template
An unRAID Template is available in the Community Applications.

#### CloudKey
You may also install this on a [CloudKey](cloudkey), but that's an advanced setup and not generally recommended.

## Installation Overview
If you prefer you can keep this page open as you walk though the installion steps.

### 1) Setup Unifi login for Unpoller
No matter which method of installation you choose you will need to give Unpoller a way to access the infomation in your controller.
You can setup Unpoller to get information from multiple controllers if you want, however we recommend getting one controller working before linking multiple.

[Adding a login for Unpoller](unifilogin)

### 2) Create Config
The config tells Unpoller where to find the Unifi controller(s), database, and other infomation.

UnPoller can be configured for use in two ways:
- Using environment variables (often used in Docker).
- With a configuration file.

[Creating/Modifiing Config](applicationconfig)

### 3) Install Unpoller Suite
#### Using a Docker image
Docker can be installed using `docker-compose` or using command line

[Installing via docker-compose](dockercompose)
[Installing via command line](docker)

#### Using Manual installation
##### Install Prerequisite Software

**__Database__**
[InfluxDB](../dependencies/influxdb) and [Prometheus](../dependencies/prometheus) are both supported. You only need one.

InfluxDB is recomended, as it supports both metrics and logging.
Prometheus can hold only metrics. Loki is made by the Devs of Prometheus to hold logs. If you want both metrics & logging you will need to install Loki alongside Prometheus.

**__Grafana__**
[Grafana Installation](Grafana)

##### Install Unpoller
Platform specific install docs:
- [Windows](windows)
- [MacOS](macos)
- [Linux](linux)
- [FreeBSD](freebsd)

### 4) Setup Grafana
Setup Grafana
