---
id: windows
title: Windows
---

This application compiles and runs just fine on Windows.

## First

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of [Grafana](../dependencies/grafana) and at
least one of [InfluxDB](../dependencies/influxdb) or [Prometheus](../dependencies/prometheus).
If you don't have them, follow these instructions for installing
[InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).
You can review the [installation overview](overview.md) if needed.

---

## Install

As it is now, a pre-compiled windows binary (.exe) is provided on the
[Releases](https://github.com/unpoller/unpoller/releases) page `unpoller.amd64.exe.zip`.
Unzip the file where you would like to install Unpoller.
Drop a valid [config file](configuration) `up.conf` in the same directory, and you can run this on Windows by using the following command:

```shell
unpoller.amd64.exe -c up.conf
```

As long as Unpoller is running it should be retreiving updated data from your controller.

Please contact us on [Discord](https://golift.io/discord) if you need any help.

## Next Steps

[Installation Overview](overview)

- [Setup Grafana](grafana)
