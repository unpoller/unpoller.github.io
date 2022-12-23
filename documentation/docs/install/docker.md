---
id: docker
title: Docker
---

This page assumes that you have decided to start Unpoller with Docker using the command line.

## First

Make sure you have set up a user on your controller for Unpoller to poll. You must have
a working (and supported) version of [Grafana](../dependencies/grafana) and at
least one of [InfluxDB](../dependencies/influxDB) or [Prometheus](../dependencies/prometheus).
If you don't have them, follow these instructions for installing
[InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).

---

## Pull the Image

First pull the image from Docker Hub using

```shell
docker pull golift/unpoller
```

:::info
Details of tags available are described in [Docker - FAQ](../help/docker_faq).
:::

## Container Configuration

Unpoller's Docker container can be configured in two ways:

1. Using environment variables.
1. Using a configuration file.

There is a detailed description of the configuration parameters on the
[Application Configuration](../install/configuration) page.
A decision should be made which method of configuration to use. Both are explained below.

:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller
if you are using `unifios`. Those are: UDM Pro, UDM, UXG, or CkoudKey with recent firmware.
:::

### Using Environment Variables

If you are using the command line and have decided to use environment variables then start the
container using the following command (and pass in other environment variables you wish to).

```shell
docker run -e UP_UNIFI_DEFAULT_PASS="your-secret-pasword"  golift/unpoller:latest
```

### Using Configuration File

If you choose to use a configuration file:

- Copy this [example config file](https://github.com/unpoller/unpoller/blob/master/examples/up.conf.example)
- Edit it as necessary (in particular ensure that the `[unifi]`/`user` and `pass` variables are set)
- Save it as `unpoller.conf` in the local location you use for Docker storage.

Start the container by running:

```shell
docker run -v /your-local-location/unpoller.conf:/config/unpoller.conf golift/unpoller
```

:::note
Make sure that UniFi Poller is actively writing to the database before going any further.
:::

In both cases, if all has worked, then you should start seeing lines like this:

```none
[INFO] UniFi Metrics Recorded. Sites: 1, Clients: 67, UAP: 6, USG/UDM: 1, USW: 5, IDS Events: 0, Points: 1837, Fields: 11307, Errs: 0, Elapsed: 599ms
```

If you don't see these lines then look for errors and double-check your work.
If you do then you can stop the container, and then start it again in daemon mode by adding the `-d` flag.

## Next Steps

1. Install [Grafana and Plugins](../dependencies/grafana.md).
1. Finish [Setting-up Grafana](../install/grafana).
