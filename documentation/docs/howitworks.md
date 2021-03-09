---
id: howitworks
title: How it works
---

## Overview

UniFi Poller pulls data from a controller every 30 seconds with an API, and then either
- pushes it to an InfluxDB database, or
- converts it in to a Prometheus export for pulling

Once it is in a database, Grafana is used to pull information and display it graphically.

So the information flow is

| Controller |  ----> | **UniFi Poller** | ----> | Database | ----> | Grafana |

Each of these four components needs to be set up correctly in order to get the dashboards to work.

UniFi Poller is very flexible in its configuration options, which can be confusing at first. This documentation sets out many options for installing UniFi Poller alongside a database and Grafana, though using a pre-existing setup is, of course, possible.

## What platform?

UniFi Poller itself can be run on bare metal (Windows, OSX, FreeBSD, Linux, ...) or using Docker.

In the Installation section below you will find instructions on how to install UniFi Poller. Many people find that the easiest way to get started - even with little or no prior experience - is with Docker. But the choice is yours.

If you already have an instance of a suitable database or Grafana in use you will probably find it most efficient to use that, and will need to amend the installation appropriately.

## I'm convinced! How do I start?

Have a look at the [Getting Started](gettingstarted.md) page.
Or, for an easy step-by-step on Raspberry Pi, have a look at [this](rpi.md) page.
