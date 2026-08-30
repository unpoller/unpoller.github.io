---
id: overview
title: Installation Overview
---

## Installation Overview

If you prefer you can keep this page open as you walk through the installation steps of
the UnPoller suite.

The UnPoller suite allows you to collect data from your UniFi network controller, save it
to a database, and then display it on pre-supplied attractive and data-rich Grafana dashboards.

The suite consists of three main programs that work together:

UnPoller itself --> The Database --> Grafana viewer dashboards

For more information check out [how it works](../poller/howitworks).
If you're ready to get started, follow our step by step install guide below.

### 1) Choose an Installation Method

[Choosing an Install Method](../install/installmethod)

### 2) Setup UniFi login for UnPoller

No matter which method of installation you choose you will need to give UnPoller a way to
access the information in your controller.
You can set up UnPoller to get information from multiple controllers if you want, however we
recommend getting one controller working before linking multiple.

[Adding a login for UnPoller](controllerlogin)

### 3) Create Config

The config tells UnPoller where to find the UniFi controller(s), database, and other information.
(If you are doing a Manual installation you may need some information from Step-4 to complete
the config.)

[Creating/Modifying Config](configuration.md)

### 4) Install UnPoller Suite

Option 1 - Using a Docker image

- [Installing via Docker Compose](dockercompose)
- [Installing via command line](docker)

<details>
  <summary>Option 2 - Manual installation</summary>

**Install Database:**
[InfluxDB](../dependencies/influxdb) and [Prometheus](../dependencies/prometheus) are both
supported. You only need one.

InfluxDB is recommended, as it supports both metrics and logging.
Prometheus can hold only metrics. Loki is made by the developers of Prometheus to hold logs.
If you want both metrics and logging you will need to install Loki alongside Prometheus.

**Install Grafana:**
[Grafana Installation](../dependencies/grafana)

**Install UnPoller:**
Platform specific install docs:

- [Windows](windows)
- [macOS](macos)
- [Linux](linux)
- [FreeBSD](freebsd)
- [Kubernetes](kubernetes)

</details>

### 5) Setup Grafana

[Setup Grafana](grafana)

### You're Done!

If you're having issues:

- Check for some [Common Problems](../help/common)
- Check the [UnPoller FAQ](../poller/faq)
- If you have questions regarding Docker check out the [Docker FAQ](../help/docker_faq)
- Contact us on [Discord](https://golift.io/discord)
- Or try [this](https://community.ui.com/questions/UniFi-Poller-Store-UniFi-Controller-Metrics-in-Prometheus-or-InfluxDB/58a0ea34-d2b3-41cd-93bb-d95d3896d1a1)
  thread on the UI community.
- Alternatively, raise an [issue](https://github.com/unpoller/unpoller/issues) on GitHub.

### Advanced Setup and Customization

[Multiple Controllers](configuration.md#multiple-controllers)

Grafana documents how to [create and edit dashboards](https://grafana.com/docs/grafana/latest/dashboards/).
Copy the provided UnPoller dashboards into your own folder before customizing them so you can
still import updates later. See [Setup Grafana](grafana) for import IDs and tips.
