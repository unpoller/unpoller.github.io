---
id: windows
title: Windows
---

This application compiles and runs just fine on Windows.

## First

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of [Grafana](../dependencies/grafana) and at
least one of [InfluxDB](../dependencies/influxDB) or [Prometheus](../dependencies/prometheus).
If you don't have then, follow these instructions for installing
[InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).

## Install

As it is now, a pre-compiled windows binary (.exe) is provided on the Releases page.
Combine this with a valid config file and you can run this on Windows.
Please contact us on Discord if you need any help.

```shell
unifi-poller.exe -c up.conf
```

:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller
if you are using `unifios`. Those are: UDM Pro, UDM, or CkoudKey with recent firmware.
:::
