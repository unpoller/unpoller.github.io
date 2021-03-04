---
id: ins3
title: Docker - using command line
---

This page assumes that you have decided to start Unifi Poller with Docker using the command line

## Before this

Make sure you have set up a user on your controller for Unifi Poller to use

It is assumed that you have working (and supported) versions of Grafana (though see the Grafana plugins section below) and at least one of InfluxDB/Prometheus

## Pull the images

First pull the image from Docker Hub using
```
docker pull golift/unifi-poller
```

Details of tags available are described in [Docker - FAQs](ins4.md) below.


## Configuring and starting the container

See [Config file and Environment variables](ins9.md)

A decision should be made which method of configuration to use.

### Alternative 1 - Using environment variables

If you are using the command line and have decided to use environment variables then start the container using the following command (changed as necessary to pass the other environment variables you wish to)
```
docker run -e UP_UNIFI_DEFAULT_PASS="your-secret-pasword"  golift/unifi-poller:latest
```


### Alternative 2 - Using a configuration file

If you choose to use a configuration file
- Copy this [example config file](https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example)
- Edit it as necessary (in particular ensure that the `[unifi]`/`user` and `pass` variables are set)
- Save it as `unifi-poller.conf` in the local location you use for Docker storage

Start the container using
```
docker run -v /your-local-location/unifi-poller.conf:/config/unifi-poller.conf golift/unifi-poller
```

:::note
Make sure that Unifi Poller is actively writing to the database before going any further
:::

In both alternatives, if all has worked then you should start seeing lines like
```
unifi-poller    | 2020/06/18 12:08:50 [INFO] UniFi Metrics Recorded. Sites: 1, Clients: 67, UAP: 6, USG/UDM: 1, USW: 5, IDS Events: 0, Points: 1837, Fields: 11307, Errs: 0, Elapsed: 599ms
```
If you don't see this then go back and check what you have done so far

If you do then you can stop the container, and then start it again daemonised by adding the `-d` flag

## Grafana Plugins

This application uses a few Grafana plugins. Install them:

    Clock, Discrete (InfluxDB only), PieChart, Singlestat (standard), Table (standard)

```
grafana-cli plugins install grafana-clock-panel
grafana-cli plugins install natel-discrete-panel
grafana-cli plugins install grafana-piechart-panel
```

If you're running Grafana in Docker, pass this environment variable/value to Grafana to install the plugins:
```
GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel
```

## Next steps

Go to the section [Final steps](ins10.md)
