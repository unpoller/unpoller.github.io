---
id: loki
title: Loki
---

Poller optionally provides support for writing UniFi's Events, Anomalies, Alarms and IDS data to Loki.
There are no dashboards for this data, but it's pretty simple. Just add a "Logs" panel.
You can also use this data as an Annotation source.

:::note
Loki support was added in UniFi Poller v2.0.2.
:::

---

## Installation

Installation of Loki is documented [here](https://grafana.com/docs/loki/latest/installation/).
If you're only using Poller, you don't need Promtail.

## Usage

Just add the Loki URL to your poller config to enable this output plugin.

```toml
[loki]
  url = "http://127.0.0.1:3100"
```

Use the UniFi input plugin settings to choose which logs to collect and save. Example:

```toml
[unifi.defaults]
  save_ids       = true
  save_events    = true
  save_alarms    = true
  save_anomalies = true
```

You'll also need to add Loki as a data source to Grafana, and create panels or annotations with that data.
Grafana documents [Loki with Grafana usage here](https://grafana.com/docs/grafana/latest/datasources/loki/).

## Advanced

The Loki output plugin has a few advanced settings that most folks won't use. These are their default values.

```toml
user       = ""
pass       = ""
verify_ssl = false
tenant_id  = ""
interval   = "2m"
timeout    = "10s"
```

You can set a user and pass if your Loki instance requires auth. This currently only supports Basic Auth.
Please open an [Issue](https://github.com/unifi-poller/unifi-poller/issues/) if you need support for something
else. Alternatively you can pass the Tenant ID header directly by setting `tenant_id`.
If your Loki instance is using/behind an SSL proxy that has a valid SSL cert you may set `verify_ssl` to true.
The recommended interval is `2m` but anything from `1m` to `15m` should work fine.
The timeout is `10s`, adjust it if you get timeout errors.

## Examples

The `docker-compose` example below (using Loki and Prometheus) was kindly provided by a community member.
The Loki Docker logging driver if you don't have it installed.

```yaml
version: '3.0'
services:
  unifi-poller:
    container_name: unifi-poller
    environment:
      UP_INFLUXDB_DISABLE: "true"
      UP_LOKI_URL: http://log01.tylephony.com:3100
      UP_POLLER_DEBUG: "false"
      UP_PROMETHEUS_HTTP_LISTEN: 0.0.0.0:9130
      UP_PROMETHEUS_NAMESPACE: unifipoller
      UP_UNIFI_DEFAULT_PASS: password
      UP_UNIFI_DEFAULT_SAVE_ALARMS: "true"
      UP_UNIFI_DEFAULT_SAVE_ANOMALIES: "true"
      UP_UNIFI_DEFAULT_SAVE_DPI: "true"
      UP_UNIFI_DEFAULT_SAVE_EVENTS: "true"
      UP_UNIFI_DEFAULT_SAVE_IDS: "true"
      UP_UNIFI_DEFAULT_SAVE_SITES: "true"
      UP_UNIFI_DEFAULT_URL: https://unifi.tylephony.com:443
      UP_UNIFI_DEFAULT_USER: unifipoller
    image: golift/unifi-poller:2.0.2-beta1
    logging:
      driver: loki
      options:
        loki-url: http://log01.tylephony.com:3100/loki/api/v1/push
    ports:
    - 9130:9130/tcp
    restart: always
```

:::note
This is a community-provided example.
:::
