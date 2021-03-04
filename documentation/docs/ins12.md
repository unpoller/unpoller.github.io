---
id: ins12
title: Loki
---


Poller provides support for writing UniFi's Events, Anomalies, Alarms and IDS data to Loki. There are no dashboards for this data, but it's pretty simple. Just add a "Logs" panel. You can also use this data as an Annotation source. Loki support was added in UniFi Poller v2.0.2.

### Installation

Installation of Loki is documented [here](https://grafana.com/docs/loki/latest/installation/). If you're only using Poller, you don't need Promtail.

### Usage

Just add the Loki URL to your poller config to enable this output plugin.
```
[loki]
  url = "http://127.0.0.1:3100"
```
Use the UniFi input plugin settings to choose which logs to collect and save. Example:
```
[unifi.defaults]
  save_ids       = true
  save_events    = true
  save_alarms    = true
  save_anomalies = true
```
### Advanced

The Loki output plugin has a few advanced settings that most folks won't use. These are their default values.
```
user       = ""
pass       = ""
verify_ssl = false
tenant_id  = ""
interval   = "2m"
timeout    = "10s"
```
You can set a user and pass if your Loki instance requires auth. This currently only supports Basic Auth. Please open an [Issue](https://github.com/unifi-poller/unifi-poller/issues/) if you need support for something else. Alternatively you can pass the Tenant ID header directly by setting `tenant_id`. If your Loki instance is using/behind an SSL proxy that has a valid SSL cert you may set `verify_ssl` to true. The recommended interval is `2m` but anything from `1m` to `15m` should work fine. The timeout is `10s`, adjust it if you get timeout errors.
