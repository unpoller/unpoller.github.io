---
id: docker
title: Docker
---

This page assumes that you have decided to start UniFi Poller with Docker using the command line.

## First

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of [Grafana](../dependencies/grafana) and at
least one of [InfluxDB](../dependencies/influxDB) or [Prometheus](../dependencies/prometheus).
If you don't have then, follow these instructions for installing
[InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).

## Pull the Image

First pull the image from Docker Hub using

```shell
docker pull golift/unifi-poller
```

:::info
Details of tags available are described in [Docker - FAQ](../install/docker_faq).
:::

## Configuring and starting the container

A decision should be made which method of configuration to use.
All configuration options can be found on the [Application Configuration](configuration) page.

:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller
if you are using `unifios`. Those are: UDM Pro, UDM, or CkoudKey with recent firmware.
:::

### Alternative 1 - Using environment variables

If you are using the command line and have decided to use environment variables then start the
container using the following command (and pass in other environment variables you wish to).

```shell
docker run -e UP_UNIFI_DEFAULT_PASS="your-secret-pasword"  golift/unifi-poller:latest
```

### Alternative 2 - Using a configuration file

If you choose to use a configuration file:

- Copy this [example config file](https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example)
- Edit it as necessary (in particular ensure that the `[unifi]`/`user` and `pass` variables are set)
- Save it as `unifi-poller.conf` in the local location you use for Docker storage.

Start the container by running:

```shell
docker run -v /your-local-location/unifi-poller.conf:/config/unifi-poller.conf golift/unifi-poller
```

:::note
Make sure that UniFi Poller is actively writing to the database before going any further.
:::

In both cases, if all has worked then you should start seeing lines like this:

```none
unifi-poller    | 2020/06/18 12:08:50 [INFO] UniFi Metrics Recorded. Sites: 1, Clients: 67, UAP: 6, USG/UDM: 1, USW: 5, IDS Events: 0, Points: 1837, Fields: 11307, Errs: 0, Elapsed: 599ms
```

If you don't see this then go back and check what you have done so far.
If you do then you can stop the container, and then start it again daemonised by adding the `-d` flag.

## Next steps

1. Install [Grafana and Plugins](../dependencies/grafana.md).
1. Install [InfluxDB](../dependencies/influxdb.md) or [Prometheus](../dependencies/prometheus.md).
1. Go to the section [Final Steps](../install/finish).
