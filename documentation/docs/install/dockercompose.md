---
id: dockercompose
title: Docker Compose
---

This page assumes that you have decided to start UniFi Poller using `docker-compose`.
The setup detailed below will install containers for UniFi Poller, Grafana and InfluxDB

## Before this

Make sure you have set up a user on your controller for UniFi Poller to use

## Installing the UniFi Poller package for Docker

 UniFi Poller's Docker container can be configured for use in two ways:
 - by using environment variables or
 - via a configuration file

Which to use is a matter of personal choice. The environmental path has the advantage that
all settings are in one place (albeit a hidden file, and one where all information is available
  to all containers). The config file method has the advantage that UniFi Poller specific
  settings can be saved in the same shared Docker folder as the rest of the app's data.

There is a detailed description of the configuration parameters on the
[Application Configuration](../install/configuration) page.

Both of the alternatives described here will pull containers not just for UniFi Poller,
but also for InfluxDB and Grafana. If you wish to use existing instances then amend the files as necessary.

### Alternative 1 - Using environment variables

In order to pass environment variables via `docker-compose` you need to have a
file called `.env` in the same folder as the `docker-compose` yaml file

- Copy the example [environment file](https://github.com/unifi-poller/unifi-poller/blob/master/init/docker/docker-compose.env.example)
- Edit it as necessary (in particular ensure that `UNIFI_USER` and `UNIFI_PASS` are set)
- Save it as `.env` in the same folder as your `docker-compose.yml` (if you have one; if not see below)

Download the [example](https://github.com/unifi-poller/unifi-poller/blob/master/init/docker/docker-compose.yml)
`docker-compose.yml` and add it to your existing one (if you have one; if not just make sure it is
saved in the same folder as the `.env` file)

### Alternative 2 - Using a configuration file

Alternatively, if you choose to use a configuration file:

- Copy the example [config file](https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example)
- Edit it as necessary (in particular ensure that the `[unifi]`/`user` and `pass` variables are set)
- In the `[influxdb]` section change ``url  = "http://127.0.0.1:8086"`` to become
  `url  = "http://THE_IP_OF_YOUR_DOCKER_HOST:8086"`
- Save it as `unifi-poller.conf` in the local location you use for Docker storage in a
  folder called `unifi-poller`

:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller
if you are using `unifios`. Those are: UDM Pro, UDM, or CkoudKey with recent firmware.
:::

Add the following to your `docker-compose.yml` after amending `YOURLOCALPATH`
to be the local location you use for Docker storage.

```yaml
version: "3"
services:
  influxdb:
    container_name: up_influxdb
    restart: unless-stopped
    image: influxdb:1.8
    ports:
      - '8086:8086'
    volumes:
      - /YOURLOCALPATH/influxdb:/var/lib/influxdb
    environment:
      - INFLUXDB_DB=unifi
      - INFLUXDB_ADMIN_USER=unifi
      - INFLUXDB_ADMIN_PASSWORD=unifi

  grafana:
    container_name: up_grafana
    image: grafana/grafana
    restart: unless-stopped
    ports:
      - '3000:3000'
    volumes:
      - /YOURLOCALPATH/grafana:/var/lib/grafana
    depends_on:
      - influxdb
    environment:
      - GF_SECURITY_ADMIN_USER=admin
      - GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel

  unifi-poller:
    container_name: up-poller
    restart: unless-stopped
    image: golift/unifi-poller:latest
    depends_on:
      - influxdb
      - grafana
    volumes:
      - /YOURLOCALPATH/unifi-poller:/config
```

:::info
Details of tags available are described in [Docker - FAQ](../install/docker_faq).
:::

## Starting up

Whichever alternative you chose, all that is need to pull the containers and start them is a simple
`docker-compose up`

If all has worked then after it has downloaded and started you should start seeing lines like

```none
unifi-poller    | 2020/06/18 12:08:50 [INFO] UniFi Metrics Recorded. Sites: 1, Clients: 67, UAP: 6, USG/UDM: 1, USW: 5, IDS Events: 0, Points: 1837, Fields: 11307, Errs: 0, Elapsed: 599ms
```

If you don't see this then go back and check what you have done so far.

:::tip
You can see the logs for a container with `docker logs CONTAINER_NAME`
(eg `docker logs unifi_poller`) at a command prompt
:::

Finally, start the containers in a daemonised fashion,
just stop the `docker-compose` and run `docker-compose up -d`

## Next steps

Go to the section [Final Steps](../install/finish).
