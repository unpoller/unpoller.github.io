---
id: configuration
title: Application Configuration
---

## Overview

This page describes the two methods for configuring UniFi Poller.
It also describes most of the common configuration values and the
environment variable alternative.

UniFi Poller can be configured for use in two ways:

- Using environment variables (often used in Docker).
- With a configuration file.
- Both may be used simultaneously; env variables win in case of duplicate settings.

Which to use is a matter of personal choice. Environment variables have the advantage
that all settings (referring to Docker) are in one place. The config file method has
the advantage that UniFi Poller specific settings can be saved in the same shared
Docker folder as other app's data. **Normally native installs use a
configuration file and Docker installations use environment variables.**

The variables to be set can be split into three categories:

1. Configuration of UniFi Poller itself.
1. Configuration of the UniFi controller.
    - Multiple controllers are permitted for different sites.
1. Configuration of the output databases (plugins).
    - UniFi Poller may output to both InfluxDB and Prometheus simultaneously.
    - Other outputs plugins can be created, but none exist currently.

More documentation on the configuration options is included in the
[example configuration file](https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example)
in the main Github repo.

The following sections break down the various configuration options available
for the three main categories mentioned previously.

## Poller

The poller section begins with the `[poller]` header and has the parameters below.
These control overall behavior of the application.

|**ENV**|**config**|**default and explanation**|
|---|---|---|
|UP_POLLER_DEBUG|debug|`false` turns on debug messages |
|UP_POLLER_QUIET|quiet|`false` turns off timer messages|
|UP_POLLER_PLUGINS_0|plugins |file list - `empty`; advanced! plugin file, use _1, _2, etc to add more|

Example:

```toml
quiet = true
debug = false
```

Docker Example:

```shell
docker run -e "UP_POLLER_DEBUG=true" -e "UP_POLLER_QUIET=false" golift/unifi-poller
```

## UniFi Controller

The unifi section begins with the `[unifi]` header and has the following parameters:

|**ENV**|**config**|**default and explanation**|
|---|---|---|
|UP_UNIFI_DISABLE |disable |`false`  turns off this input. don't do that! |
|UP_UNIFI_DYNAMIC |dynamic |`false`  enables dynamic lookups (from prometheus) |
|UP_UNIFI_DEFAULT_ROLE |unifi.defaults.role |`URL` allows grouping controllers |
|UP_UNIFI_DEFAULT_URL|unifi.defaults.url|`"https://127.0.0.1:8443"` only applies if no controllers are defined (next section) |
|UP_UNIFI_DEFAULT_USER |unifi.defaults.user |`"unifipoller"` default applies to any controller without a username |
|UP_UNIFI_DEFAULT_PASS |unifi.defaults.pass |`""` default applies to any controller without a password |
|UP_UNIFI_DEFAULT_SAVE_SITES |unifi.defaults.save_sites |`true`  |
|UP_UNIFI_DEFAULT_SAVE_IDS |unifi.defaults.save_ids |`false` Only works with InfluxDB / Loki|
|UP_UNIFI_DEFAULT_SAVE_EVENTS |unifi.defaults.save_events |`false` Only works with InfluxDB / Loki, added in v2.0.2|
|UP_UNIFI_DEFAULT_SAVE_ALARMS |unifi.defaults.save_alarms |`false` Only works with InfluxDB / Loki, added in v2.0.2|
|UP_UNIFI_DEFAULT_SAVE_ANOMALIES |unifi.defaults.save_anomalies |    `false` Only works with InfluxDB / Loki, added in v2.0.2|
|UP_UNIFI_DEFAULT_SAVE_DPI |unifi.defaults.save_dpi|`false`|
|UP_UNIFI_DEFAULT_VERIFY_SSL |unifi.defaults.verify_ssl |`false`|
|UP_UNIFI_DEFAULT_SITE_0 |unifi.defaults.site.0 |`["all"]` specify more sites with _1, _2, etc.|

---

:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller
if you are using `unifios`. Those are: UDM Pro, UDM, or CkoudKey with recent firmware.
:::

Most `unifi` configuration will look like this:

```toml
[unifi]
  url = "http://192.168.2.2"
  user = "unifipoller"
  pass = "unifip4assw0rd"
  save_sites = true
  save_ids = false
  save_events = false
  save_alarms = false
  save_dpi = false
  sites = [ "default" ]
```

Same example, but for Docker:

```shell
docker run
  -e "UP_UNIFI_DEFAULT_URL=http://127.0.0.1:8086" \
  -e "UP_UNIFI_DEFAULT_PASS=unifip4assw0rd" \
  -e "UP_UNIFI_DEFAULT_SAVE_SITES=true" \
  -e "UP_UNIFI_DEFAULT_PASS=unifipassw0rd" \
  -e "UP_UNIFI_DEFAULT_SITE_0=default" \
  golift/unifi-poller
```

### Multiple Controllers

You can configure a single controller by setting the `UP_UNIFI_DEFAULT` variables above,
but you can also configure a single, or multiple controllers by setting the variables below.

:::tip
If you only have one controller, use the `default` variables described above.

**Do not use the variables described below, if you only have 1 controller.**
:::

You may repeat the ``[[unifi.controller]]`` section as many times as you want to add more controllers.
If you're configuring controllers using env variables, start at `_0` and change `_0` to `_1`
to add a second, then `_2` and so on.

Like any configured list, you may configure controllers with a file or env vars, or both.

|**ENV**|**config**|**default and explanation**|
|---|---|---|
|UP_UNIFI_CONTROLLER_0_ROLE |unifi.controller.role |`URL` allows grouping controllers, default applies to any controller without a role
|UP_UNIFI_CONTROLLER_0_URL |unifi.controller.url |``"https://127.0.0.1:8443"``
|UP_UNIFI_CONTROLLER_0_USER |unifi.controller.user |``"unifipoller"``
|UP_UNIFI_CONTROLLER_0_PASS |unifi.controller.pass |``""``
|UP_UNIFI_CONTROLLER_0_SAVE_SITES |unifi.controller.save_sites |`true` Powers Network Sites dashboard
|UP_UNIFI_CONTROLLER_0_SAVE_IDS |unifi.controller.save_ids |`false` Only works with InfluxDB / Loki
|UP_UNIFI_CONTROLLER_0_SAVE_EVENTS |unifi.controller.save_events |   `false` Only works with InfluxDB / Loki, added in v2.0.2
|UP_UNIFI_CONTROLLER_0_SAVE_ALARMS |unifi.controller.save_alarms|`false` Only works with InfluxDB / Loki, added in v2.0.2
|UP_UNIFI_CONTROLLER_0_SAVE_ANOMALIES |unifi.controller.save_anomalies|`false` Only works with InfluxDB / Loki, added in v2.0.2
|UP_UNIFI_CONTROLLER_0_SAVE_DPI |unifi.controller.save_dpi |`false` Powers DPI dashboard
|UP_UNIFI_CONTROLLER_0_VERIFY_SSL |unifi.controller.verify_ssl |`false` Verify controller SSL certificate
|UP_UNIFI_CONTROLLER_0_SITE_0 |unifi.controller.site.0|``["all"]`` specify more sites with _1, _2, etc

## Output Plugins

### Prometheus

This section begins with ``[prometheus]`` and configures an HTTP listener where a scrape
daemon, such as Prometheus or InfluxDB 2.0 may obtain metrics. See the
[Prometheus](../dependencies/prometheus) page for Prometheus configuration instructions.

While Prometheus provides some configuration parameters, you shouldn't change them.
If you don't use Prometheus, set `disable` to `true`.

|**ENV**|**config**|**default and explanation**|
|---|---|---|
|UP_PROMETHEUS_DISABLE |    prometheus.disable     |`false`
|UP_PROMETHEUS_NAMESPACE |    prometheus.namespace |    `unifipoller`
|UP_PROMETHEUS_HTTP_LISTEN     |prometheus.http_listen     |`0.0.0.0:9130`
|UP_PROMETHEUS_REPORT_ERRORS |    prometheus.report_errors |    `false`
|UP_PROMETHEUS_BUFFER |    prometheus.buffer     |`50`

:::tip
The [Prometheus](../dependencies/prometheus) page has a full explanation of how to configure Poller.
:::

### InfluxDB

This section begins with ``[influxdb]`` and configures a single InfluxDB write destination.

|**ENV**|**config**|**default and explanation**|
|---|---|---|
|UP_INFLUXDB_URL |influxdb.url |`"http://127.0.0.1:8086"` influxdb URL|
|UP_INFLUXDB_DB|influxdb.db |`"unifi"` name of database you created in influx|
|UP_INFLUXDB_USER |influxdb.user|`"unifipoller"` username with access to database|
|UP_INFLUXDB_PASS |influxdb.pass |`"unifipoller"` password for username|
|UP_INFLUXDB_INTERVAL |influxdb.interval|`"30s"` how often to poll and collect metrics, ie "1m" or "90s"|

InfluxDB is very easy to use with UniFi Poller, and it's recommend if this whole
metrics ecosystem is new to you. All you do is add a small configuration like you
see below and poller sends all your glorious data into the database.

```toml
[influxdb]
  url = "http://127.0.0.1:8086"
  db = "unifi"
  interval="60s"
```

Using Docker it may look like this:

```shell
docker run
  -e "UP_INFLUXDB_URL=http://127.0.0.1:8086" \
  -e "UP_INFLUXDB_DB=unifi" \
  -e "UP_INFLUXDB_INTEVAL=60s" \
  -e "UP_UNIFI_DEFAULT_URL=https://192.168.1.2"
  -e "UP_UNIFI_DEFAULT_PASS=unifipassw0rd"
  golift/unifi-poller
```
