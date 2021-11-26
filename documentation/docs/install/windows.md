---
id: windows
title: Windows
---

This application compiles and runs just fine on Windows.

## First

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of [Grafana](../dependencies/grafana) and at
least one of [InfluxDB](../dependencies/influxDB) or [Prometheus](../dependencies/prometheus).
If you don't have them, follow these instructions for installing
[InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).
You can review the [installation overview](overview.md) if needed.

---

## Install

As it is now, a pre-compiled windows binary (.exe) is provided on the
[Releases](https://github.com/unifi-poller/unifi-poller/releases) page `unifi-poller.amd64.exe.zip`.
Unzip the file where you would like to install Unpoller.
Drop a valid config file `up.conf` in and you can run this on Windows.
Please contact us on [Discord](https://golift.io/discord) if you need any help.

```shell
unifi-poller.exe -c up.conf
```

:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller
if you are using `unifios`. Those are: UDM Pro, UDM, UXG, or CkoudKey with recent firmware.
:::

## Next Steps
[Installation Overview](overview)

- [Setup Grafana](grafana)
