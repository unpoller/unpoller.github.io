---
id: linux
title: Linux
---

This page assumes that you have decided to install UniFi Poller on to an existing Linux operating system.

## First

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of [Grafana](../dependencies/grafana) and at
least one of [InfluxDB](../dependencies/influxDB) or [Prometheus](../dependencies/prometheus).
If you don't have them, follow these instructions for installing
[InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).

---

## Installation

Linux repository hosting provided by
[![packagecloud](https://docs.golift.io/integrations/packagecloud-full.png "PackageCloud.io")](http://packagecloud.io)

:::warning
JFrog Bintray shut down and packages are no longer available from that repo.
Packages are now on [PackageCloud.io](https://packagecloud.io).
See below for how to install that repo!
:::

This works on any system with apt or yum. If your system does not use APT or YUM,
then download a package from the [Releases](https://github.com/unifi-poller/unifi-poller/releases) page.
Install the Go Lift package repo and UniFi Poller with this command:

```shell
curl -s https://golift.io/repo.sh | sudo bash -s - unifi-poller
```

## Maintenance

See [Application Configuration](../install/configuration) and the
[example config](https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example)
file for additional post-install configuration information.

- Edit the config file after installing the package, and correct the authentication
  information for your setup:
  ```shell
  sudo nano /etc/unifi-poller/up.conf
  # or
  sudo vi /etc/unifi-poller/up.conf
  ```

:::important
When configuring make sure that you do **not** include `:8443` on the url of the
controller if you are using `unifios`. Those are: UDM Pro, UDM, or CkoudKey with recent firmware.
:::

- Restart the service:
  ```shell
  sudo systemctl restart unifi-poller
  ```
- Check the log:
  ```shell
  tail -f -n100  /var/log/syslog /var/log/messages | grep unifi-poller
  ```

## Next Steps

1. Don't forget the [Grafana Plugins](../dependencies/grafana#plugins).
1. Finish [Setting-up Grafana](../install/grafana).
