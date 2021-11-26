---
id: overview
title: Installation Overview
---

## Installation Overview
If you prefer you can keep this page open as you walk though the installation steps.

### 1) Choose an Installation Method


[Chosing an Install Method](../install/installmethod)

### 2) Setup Unifi login for Unpoller
No matter which method of installation you choose you will need to give Unpoller a way to access the infomation in your controller.
You can setup Unpoller to get information from multiple controllers if you want, however we recommend getting one controller working before linking multiple.

[Adding a login for Unpoller](unifilogin)

### 3) Create Config
The config tells Unpoller where to find the Unifi controller(s), database, and other infomation.
(If you are doing a Manual installation you may need some information from step 3 to compleate the config.)

[Creating/Modifying Config](applicationconfig)

### 4) Install Unpoller Suite
Option 1 - Using a Docker image

- [Installing via docker-compose](dockercompose)
- [Installing via command line](docker)

<details>
  <summary>Option 2 - Manual installation</summary>

**Install Database:**
[InfluxDB](../dependencies/influxdb) and [Prometheus](../dependencies/prometheus) are both supported. You only need one.

InfluxDB is recomended, as it supports both metrics and logging.
Prometheus can hold only metrics. Loki is made by the Devs of Prometheus to hold logs. If you want both metrics & logging you will need to install Loki alongside Prometheus.

**Install Grafana:**
[Grafana Installation](../dependencies/grafana)

**Install Unpoller:**
Platform specific install docs:
- [Windows](windows)
- [MacOS](macos)
- [Linux](linux)
- [FreeBSD](freebsd)

</details>
  
### 5) Setup Grafana
[Setup Grafana](grafana)

### You're Done!

If you're having issues:
- Check for some [Common Problems](../help/common)
- If you have question regarding Docker check out the [Docker FAQ](../help/docker_faq)
- Contact us on [Discord](https://golift.io/discord)
- Or try [this](https://community.ui.com/questions/UniFi-Poller-Store-UniFi-Controller-Metrics-in-Prometheus-or-InfluxDB/58a0ea34-d2b3-41cd-93bb-d95d3896d1a1)
thread on the UI community.
- Alternatively, raise an [issue](https://github.com/unifi-poller/unifi-poller/issues) on Github.

### Customization and Advanced Setup


