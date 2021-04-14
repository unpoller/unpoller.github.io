---
id: prometheus
title: Prometheus
---

This page explains how to configure Prometheus and UniFi-Poller.
For help installing Prometheus you'll have to look elsewhere; that's not in this wiki.
If you need help getting started,
[InfluxDB](../dependencies/influxdb) is recommended.

:::note
Prometheus support was added in the 1.6 release, but was not very well documented.
Release 2.0 brings with it a re-write of the prometheus integration.
Many changes were made to how one may configure a controller. This page only applies to version 2.0.1+.
:::

---

## Single Controller

Configure a single controller in `up.conf` (or using environment variables).
See [Application Configuration](../install/configuration) and the
[example config file](https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example)
for help with that.

Then you simply point prometheus at unifi-poller using a config like this:

```yaml
scrape_configs:
  - job_name: 'unifipoller'
    scrape_interval: 30s
    static_configs:
    - targets: ['localhost:9130']
```

If you have other scrape configs, leave them there. Just add a new one for `unifipoller`.
Replace localhost with the IP of the host running Poller.
That's it! Restart Prometheus and it should begin to scrape data from your controller through Poller.

:::important
UniFi Poller needs to be accessible on TCP port 9130.
This may require exposing ports or modifying firewalls.
:::

## Multiple Controllers

You can either configure the controllers in unifi-poller or poll them unconfigured.
When polling unconfigured, you must enable dynamic.
You can scrape multiple controllers in several ways. Here is a list of options:

1. Set all controller user/passwords the same and pass in controller URLs from Prometheus.
   To do this, you set the username and password as the default in the unifi config.
1. Configure each controller in unifi-poller and pass in urls from Prometheus.
   This allows them to have different usernames and passwords.
1. **NOT Recommended:** Configure each controller in unifi-poller and configure
   prometheus as shown above in the Single Controller section. This is useful when you
   want to poll all the controllers at the same time from a single prometheus instance.

### First Approach

This describes approach 1 above.

Using this approach all you need to configure for controllers in unifi-poller is the name
and password. Example below. Any settings you provide to [unifi.defaults] will be used
for all controllers passed in from Prometheus. All other settings are optional.
```toml
[unifi]
  # This must be enabled to do dynamic polls against unconfigured urls.
  dynamic = true
[unifi.defaults]
  user       = "unifipoller"
  pass       = "unifipoller"
  sites      = ["all"]
  save_ids   = false
  save_dpi   = false
  save_sites = true
  verify_ssl = false
```
Or with env variables:
```shell
UP_UNIFI_DYNAMIC=true
UP_UNIFI_DEFAULT_USER="unifipoller"
UP_UNIFI_DEFAULT_PASS="unifipoller"
```
### Second Approach

This describes approach 2 above.

Configure each controller in up.conf or using environment variables.
When Prometheus scrapes from unifi-poller the poller will map the URL directly to the one configured
in up.conf (or using env vars). Just make sure the url you put into the prometheus configuration
 matches the url put into the poller configuration.

Example polling two controllers:
```toml
[unifi]
  # Not needed since not dynamic.
  dynamic = false
[[unifi.controller]]
  url = "http://unifi.controller:8443"
  user = "unifipoller1"
  pass = "unifipoller1"
[[unifi.controller]]
  url = "http://another.controller:8443"
  user = "unifipoller2"
  pass = "unifipoller2"
```
Or with env variables:
```
UP_UNIFI_DYNAMIC=false
UP_UNIFI_CONTROLLER_0_URL="http://unifi.controller:8443"
UP_UNIFI_CONTROLLER_0_USER="unifipoller"
UP_UNIFI_CONTROLLER_0_PASS="unifipoller"
UP_UNIFI_CONTROLLER_1_URL="http://another.controller:8443"
UP_UNIFI_CONTROLLER_1_USER="unifipoller"
UP_UNIFI_CONTROLLER_1_PASS="unifipoller"
```

#### Prometheus Configuration for URLs

This applies to both approaches above. Configure prometheus like this:

```yaml
scrape_configs:
  - job_name: 'unifipoller'
    scrape_interval: 30s
    static_configs:
      - targets:
        - https://unifi.controller:8443
        - https://another.controller:8443
    metrics_path: /scrape
    relabel_configs:
     - source_labels: [__address__]
       target_label: __param_target
     - source_labels: [__param_target]
       target_label: instance
     - target_label: __address__
       replacement: localhost:9130
```

Replace `localhost` with the IP of your unifi-poller host, and replace `unifi.controller`
and another.controller with the IPs of your controllers.

### Final Approach, NOT Recommended

Just configure your controllers in `up.conf` or using env variables as explained in the
[Application Configuration](../install/configuration) page. Then setup Prometheus like this:

```yaml
scrape_configs:
  - job_name: 'unifipoller'
    scrape_interval: 30s
    static_configs:
    - targets: ['localhost:9130']
```

The standard ``/metrics`` path that the above snippet uses returns metrics for all configured controllers.
