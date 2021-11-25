---
id: installmethod
title: Install Method
---

## Chosing an Install Method

There are two main methods to install the Unpollor 'suite' (Unpoller and accociated programs)

### Docker image
This is the recommended way to install and the best option for new users.

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

- unRAID Template -- An unRAID Template is available in the Community Applications.
- [Synology](Synology) -- Via Docker Image
- [CloudKey](cloudkey) -- You may also install directly on a [CloudKey](cloudkey), but that's an advanced setup and not generally recommended.

## Installation Overview
If you prefer you can keep this page open as you walk though the installion steps.

### 1) Setup Unifi login for Unpoller
No matter which method of installation you choose you will need to give Unpoller a way to access the infomation in your controller.
You can setup Unpoller to get information from multiple controllers if you want, however we recommend getting one controller working before linking multiple.

[Adding a login for Unpoller](unifilogin)

### 2) Create Config
The config tells Unpoller where to find the Unifi controller(s), database, and other infomation.
(If you are doing a Manual installation you may need some information from step 3 to compleate the config.)

[Creating/Modifiing Config](applicationconfig)

### 3) Install Unpoller Suite
#### Option 1 - Using a Docker image

- [Installing via docker-compose](dockercompose)
- [Installing via command line](docker)

#### Option 2 - Manual installation

**Install Database:**
[InfluxDB](../dependencies/influxdb) and [Prometheus](../dependencies/prometheus) are both supported. You only need one.

InfluxDB is recomended, as it supports both metrics and logging.
Prometheus can hold only metrics. Loki is made by the Devs of Prometheus to hold logs. If you want both metrics & logging you will need to install Loki alongside Prometheus.

**Install Grafana:**
[Grafana Installation](Grafana)

**Install Unpoller:**
Platform specific install docs:
- [Windows](windows)
- [MacOS](macos)
- [Linux](linux)
- [FreeBSD](freebsd)

### 4) Setup Grafana
Setup Grafana
