---
id: howitworks
title: How it works
---

## Overview

UniFi Poller pulls data from a controller's API every 30 seconds, and then pushes
it to an InfluxDB. The other option is to configure Prometheus to scrape metrics from poller on an
interval. You may output to InfluxDB and Prometheus simultaneously.

Once the data is in a time-series database, Grafana is used for visualization.
The information flow is:

Controller ----> **UniFi Poller** ----> Database ----> Grafana

Each of these four components must be properly configured for the dashboards to work.

UniFi Poller is very flexible in its configuration options, which can be confusing at first.
This documentation sets out many options for installing and configuring UniFi Poller alongside
a database and Grafana. Using a pre-existing Grafana and/or time-series database is acceptable.

## Supported Platforms

UniFi Poller itself can be run on bare metal (Windows, macOS, FreeBSD and Linux),
in Docker or on a virtual machine.

In the Installation section you will find instructions on how to install UniFi Poller.
Many people find that the easiest way to get started - even with little or no prior
experience - is with Docker. But the choice is yours.

If you already have an instance of a suitable time-series database and/or Grafana in use
you will probably find it most efficient to use those, amending the installation appropriately.

## What's Next

- Check out the [Getting Started](../install/gettingstarted) page.
- And the [Other Guides](../poller/otherguides) page for third party guides
  from the community, including detailed Raspberry Pi instructions.
