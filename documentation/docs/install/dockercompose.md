---
id: dockercompose
title: Docker Compose
---

This page assumes that you have decided to start Unpoller using `docker-compose`.
The setup detailed below will install containers for Unpoller, Grafana and InfluxDB

## First

Make sure you have [set up a user](controllerlogin) on your controller for Unpoller. 

---

## Installation

Unpoller's Docker container can be configured in two ways:

1. Using environment variables.
1. Using a configuration file.

Which to use is a matter of personal choice. The environmental path has the advantage that
all settings are in one place (albeit a hidden file, and one where all information is available
to all containers). The config file method has the advantage that Unpoller specific
settings can be saved in the same shared Docker folder as the rest of the app's data.

There is a detailed description of the configuration parameters on the
[Application Configuration](../install/configuration) page.

Both of the alternatives described here will pull containers not just for Unpoller,
but also for InfluxDB and Grafana. If you wish to use existing instances then amend the files as necessary.

### Using Environment Variables

The easiest way to pass environment variables via `docker-compose` is to have a
file called `.env` in the same folder as the `docker-compose` yaml file

:::tip Hidden Files
Files beginning with a period `.` are generally hidden. You may need to use `ls -a` to find the `.env` file.
:::

- Copy the example [environment file](https://github.com/unpoller/unpoller/blob/master/init/docker/docker-compose.env.example)
- Edit it as necessary (in particular ensure that `UNIFI_USER` and `UNIFI_PASS` are set)
- Save it as `.env` in the same folder as your `docker-compose.yml` (if you have one; if not see below)

Download the [example](https://github.com/unpoller/unpoller/blob/master/init/docker/docker-compose.yml)
`docker-compose.yml` and add it to your existing one (if you have one; if not just make sure it is
saved in the same folder as the `.env` file)

#### Prometheus Example

This example is advanced, for demonstration only, and not recommend for newbies.

<details>
  <summary>Advanced Prometheus Example</summary>

---

The following example illustrates launching Grafana, Prometheus and Unpoller with docker compose.
This does not utilize a `.env` file nor a configuration file and instead puts all the env variables
directly into the docker-compose file.
This still requires a [Prometheus configuration](../dependencies/prometheus) to scrape Poller.

:::note
This is a [community provided](https://github.com/unpoller/unpoller/issues/309#issuecomment-796870916)
example.
:::

```yaml
version: '3'
services:
  prometheus:
    image: prom/prometheus:latest
    restart: unless-stopped
    ports:
      - '9090:9090'
    volumes:
      - /root/prometheus:/etc/prometheus
      - prometheus-data:/prometheus
  grafana:
    image: grafana/grafana:latest
    restart: unless-stopped
    ports:
      - '3000:3000'
    volumes:
      - grafana-storage:/var/lib/grafana
    depends_on:
      - prometheus
    environment:
      - GF_SECURITY_ADMIN_USER=admin
      - GF_SECURITY_ADMIN_PASSWORD=admin123
      - GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel
  unpoller:
    image: ghcr.io/unpoller/unpoller:latest
    restart: unless-stopped
    ports:
      - '9130:9130'
    container_name: unpoller
    environment:
      UP_INFLUXDB_DISABLE="true"
      UP_POLLER_DEBUG="false"
      UP_UNIFI_DYNAMIC="false"
      UP_PROMETHEUS_HTTP_LISTEN=0.0.0.0:9130
      UP_PROMETHEUS_NAMESPACE=unifipoller
      UP_UNIFI_CONTROLLER_0_PASS=unifipoller123
      UP_UNIFI_CONTROLLER_0_SAVE_ALARMS="true"
      UP_UNIFI_CONTROLLER_0_SAVE_ANOMALIES="true"
      UP_UNIFI_CONTROLLER_0_SAVE_DPI="true"
      UP_UNIFI_CONTROLLER_0_SAVE_EVENTS="true"
      UP_UNIFI_CONTROLLER_0_SAVE_IDS="true"
      UP_UNIFI_CONTROLLER_0_SAVE_SITES="true"
      UP_UNIFI_CONTROLLER_0_URL=https://192.168.14.250:8443
      UP_UNIFI_CONTROLLER_0_USER=unifipoller

volumes:
  grafana-storage:
  prometheus-data:
```
</details>

### Using Configuration File

Alternatively, if you choose to use a configuration file:

- Copy the example [config file](https://github.com/unpoller/unpoller/blob/master/examples/up.conf.example)
- Edit it as necessary (in particular ensure that the `[unifi]`/`user` and `pass` variables are set)
- In the `[influxdb]` section change ``url  = "http://127.0.0.1:8086"`` to become
  `url  = "http://THE_IP_OF_YOUR_DOCKER_HOST:8086"`
- Save it as `unpoller.conf` in the local location you use for Docker storage in a
  folder called `unpoller`

:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller
if you are using `unifios`. Those are: UDM Pro, UDM, UXG, or CloudKey with recent firmware.
:::

Add the following to your `docker-compose.yml` after replacing `YOURLOCALPATH`
to a local location for Docker storage.

#### InfluxDB Example

Create this environment file `docker-compose.env` and reference this with `-e /your/path/docker-compose.env`:

```text
#influxdb
INFLUXDB_HTTP_AUTH_ENABLED=true
INFLUXDB_ADMIN_USER=unpoller
INFLUXDB_ADMIN_PASSWORD=CHANGEME
INFLUXDB_DB=unpoller
INFLUXDB_ORG=unpoller
INFLUXDB_BUCKET=unpoller
INFLUXDB_ADMIN_TOKEN=unpollersecret

#grafana
GRAFANA_USERNAME=admin
GRAFANA_PASSWORD=grafanaadmin

#unifi-poller
POLLER_TAG=latest
POLLER_DEBUG=false
POLLER_SAVE_DPI=false
UNIFI_USER=unpoller
UNIFI_PASS=set_this_on_your_controller
UNIFI_URL=https://127.0.0.1:8443
```

The `docker-compose.yml` file: 

```yaml
# This is for unifi-poller v2.
version: '3'
services:
  influxdb:
    restart: always
    image: influxdb:1.8
    ports:
      - '8086:8086'
    volumes:
      - influxdb-storage:/var/lib/influxdb
    environment:
      - INFLUXDB_DB=${INFLUXDB_DB}
      - INFLUXDB_HTTP_AUTH_ENABLED=${INFLUXDB_HTTP_AUTH_ENABLED}
      - DOCKER_INFLUXDB_INIT_MODE=setup
      - DOCKER_INFLUXDB_INIT_USERNAME=${INFLUXDB_ADMIN_USER}
      - DOCKER_INFLUXDB_INIT_PASSWORD=${INFLUXDB_ADMIN_PASSWORD}
      - DOCKER_INFLUXDB_INIT_ORG=${INFLUXDB_ORG}
      - DOCKER_INFLUXDB_INIT_BUCKET=${INFLUXDB_BUCKET}
      - DOCKER_INFLUXDB_INIT_ADMIN_TOKEN=${INFLUXDB_ADMIN_TOKEN}
  chronograf:
    image: chronograf:latest
    restart: always
    ports:
      - '8888:8888'
    volumes:
      - chronograf-storage:/var/lib/chronograf
    depends_on:
      - influxdb
    environment:
      - INFLUXDB_URL=http://influxdb:8086
      - INFLUXDB_USERNAME=${INFLUXDB_ADMIN_USER}
      - INFLUXDB_PASSWORD=${INFLUXDB_ADMIN_PASSWORD}
  grafana:
    image: grafana/grafana:latest
    restart: always
    ports:
      - '3000:3000'
    volumes:
      - grafana-storage:/var/lib/grafana
    depends_on:
      - influxdb
    environment:
      - GF_SECURITY_ADMIN_USER=${GRAFANA_USERNAME}
      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}
      - GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel
  unpoller:
    restart: always
    image: ghcr.io/unpoller/unpoller:${POLLER_TAG}
    depends_on:
      - grafana
      - influxdb
      - chronograf
    environment:
      - UP_INFLUXDB_DB=${INFLUXDB_DB}
      - UP_INFLUXDB_USER=${INFLUXDB_ADMIN_USER}
      - UP_INFLUXDB_PASS=${INFLUXDB_ADMIN_PASSWORD}
      - UP_INFLUXDB_ORG=${INFLUXDB_ORG}
      - UP_INFLUXDB_BUCKET=${INFLUXDB_BUCKET}
      - UP_INFLUXDB_AUTH_TOKEN=${INFLUXDB_ADMIN_TOKEN}
      - UP_INFLUXDB_URL=http://influxdb:8086
      - UP_UNIFI_DEFAULT_USER=${UNIFI_USER}
      - UP_UNIFI_DEFAULT_PASS=${UNIFI_PASS}
      - UP_UNIFI_DEFAULT_URL=${UNIFI_URL}
      - UP_POLLER_DEBUG=${POLLER_DEBUG}
      - UP_UNIFI_DEFAULT_SAVE_DPI=${POLLER_SAVE_DPI}
    volumes:
      - YOURPATH/up.conf:/etc/unpoller/up.conf
volumes:
  influxdb-storage:
  chronograf-storage:
  grafana-storage:
```

:::info
Details of tags available are described in [Docker - FAQ](../help/docker_faq).
:::

## Starting

Whichever configuration method you chose, this is how you start the contianers:

```shell
docker-compose up -e docker-compose.env
```

If everything is working, after a few minutes you should see like likes this:

```none
[INFO] UniFi Metrics Recorded. Sites: 1, Clients: 67, UAP: 6, USG/UDM: 1, USW: 5, IDS Events: 0, Points: 1837, Fields: 11307, Errs: 0, Elapsed: 599ms
```

If you don't see these lines then look for errors and double-check your work.

:::tip
You can see the logs for a container with `docker logs container-id`.
Get the container id with `docker ps`.
:::

Stop the containers and restart them in daemon mode, like this:

```shell
docker-compose up -e docker-compose.env -d
```

## Next Steps

1. Creating an InfluxDB database and retention policy is explained on the
  [InfluxDB](../dependencies/influxdb#post-setup) page.
1. Finish [Setting-up Grafana](../install/grafana).
