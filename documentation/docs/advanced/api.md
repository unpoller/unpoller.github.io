---
id: api
title: API
---

These are the available API paths that the [built-in web server](webserver) provides.

-   The web server was added in UniFi Poller v2.0.2.

## `/debug/vars`

This path prints [expvar](https://golang.org/pkg/expvar/) data,
which currently contains only memory statistics.

## `/health`

Prints `OK`.

## `/api/v1/config`

Prints `poller` config, uptime and plugins.

The empty `plugins` list under `poller` represents configured and loaded `*.so`
shared-object plugins. These are rare and that list will almost always be empty.

```shell
$ curl unifi.poller:37288/api/v1/config | jq .
{
  "arch": "linux amd64",
  "branch": "dn2_events",
  "built": "2020-08-17T04:20:00Z",
  "cpus": 16,
  "gid": 0,
  "gover": "go1.14.4",
  "inputs": {
    "unifi": {
      "name": "unifi",
      "version": "v0.0.9",
      "path": "github.com/unifi-poller/inputunifi"
    }
  },
  "malloc": 9353240,
  "memsys": 75055360,
  "mtalloc": 33876272,
  "numgc": 1234,
  "outputs": {
    "influxdb": {
      "name": "influxdb",
      "version": "v0.0.11",
      "path": "github.com/unifi-poller/influxunifi"
    },
    "loki": {
      "name": "loki",
      "version": "v0.0.1",
      "path": "github.com/unifi-poller/lokiunifi"
    },
    "prometheus": {
      "name": "prometheus",
      "version": "v0.0.10",
      "path": "github.com/unifi-poller/promunifi"
    }
  },
  "pid": 1,
  "poller": {
    "plugins": [],
    "debug": true,
    "quiet": false
  },
  "uid": 0,
  "uptime": 1234,
  "version": "2.0.2-999"
}
```

## `/api/v1/config/plugins`

Prints list of plugins only. Output and Input. These are also in `/config` (above).

```shell
$ curl unifi.poller:37288/api/v1/config/plugins | jq .
{
  "inputs": {
    "unifi": {
      "name": "unifi",
      "version": "v0.0.9",
      "path": "github.com/unifi-poller/inputunifi"
    }
  },
  "outputs": {
    "influxdb": {
      "name": "influxdb",
      "version": "v0.0.11",
      "path": "github.com/unifi-poller/influxunifi"
    },
    "loki": {
      "name": "loki",
      "version": "v0.0.1",
      "path": "github.com/unifi-poller/lokiunifi"
    },
    "prometheus": {
      "name": "prometheus",
      "version": "v0.0.10",
      "path": "github.com/unifi-poller/promunifi"
    }
  }
}
```

## `/api/v1/output/<output>`

Prints configuration for `<output>` output plugin.

```shell
$ curl -s unifi.poller:37288/api/v1/output/Loki | jq .
{
  "disable": false,
  "verify_ssl": false,
  "url": "http://loki:3100",
  "user": "",
  "pass": "false",
  "tenant_id": "",
  "interval": {
    "Duration": 120000000000
  },
  "timeout": {
    "Duration": 10000000000
  }
}
```

## `/api/v1/output/<output>/eventgroups`

Prints all event-groups present for the requested output plugin.
Output plugins currently only have one event group but there
is nothing limiting them from adding more.

```shell
$ curl -s unifi.poller:37288/api/v1/output/Loki/eventgroups
["Loki"]

$ curl -s unifi.poller:37288/api/v1/output/Prometheus/eventgroups
["Prometheus"]

$ curl -s unifi.poller:37288/api/v1/output/WebServer/eventgroups
["WebServer"]

$ curl -s unifi.poller:37288/api/v1/output/InfluxDB/eventgroups
["InfluxDB"]
```

## `/api/v1/output/<output>/events/<group>`

Prints events specific to the requested output and group.
Looks like output plugin events with one less dictionary.

## `/api/v1/output/<output>/events`

Prints all events for the specified plugin.

```shell
$ curl -s unifi.poller:37288/api/v1/output/Loki/events | jq .
{
  "Loki": {
    "latest": "2020-07-03T04:05:58.656262803-07:00",
    "events": [
      {
        "ts": "2020-07-03T03:09:58.376113474-07:00",
        "msg": "Loki Event collection started, interval: 2m0s, URL: http://loki:3100",
        "tags": {
          "type": "info"
        }
      },
      {
        "ts": "2020-07-03T04:05:58.656262803-07:00",
        "msg": "Events sent to Loki. Event: 0, IDS: 0, Alarm: 0, Anomaly: 0, Dur: 280ms",
        "tags": {
          "type": "info"
      }
    }
  ]
```

## `/api/v1/input/<input>`

Prints configuration for `<input>` input plugin.

```shell
$ curl -s unifi.poller:37288/api/v1/input/unifi | jq .
{
  "defaults": {
    "verify_ssl": false,
    "save_anomalies": false,
    "save_alarms": false,
    "save_events": false,
    "save_ids": false,
    "save_dpi": false,
    "hash_pii": false,
    "save_sites": true,
    "user": "unifipoller",
    "pass": "true",
    "url": "https://127.0.0.1:8443",
    "sites": [
      "all"
    ]
  },
  "disable": false,
  "dynamic": false,
  "controllers": [
    {
      "verify_ssl": false,
      "save_anomalies": true,
      "save_alarms": true,
      "save_events": true,
      "save_ids": true,
      "save_dpi": true,
      "hash_pii": false,
      "save_sites": true,
      "user": "unifipoller",
      "pass": "true",
      "url": "https://unifi-controller:8443",
      "sites": [
        "all"
      ],
      "id": "572e0211-a02a-4d09-b6a5-bad63fb76f1c"
    }
  ]
}
```

## `/api/v1/input/<input>/eventgroups`

Prints all event-groups present for the requested input plugin.
Currently the `unifi` input plugin has one group for the plugin
itself, and four groups for each configured site. The
four groups are `alarms`, `events`, `ids`, `anomalies`, and each
is prefixed with the site ID.

```shell
$ curl -s unifi.poller:37288/api/v1/input/unifi/eventgroups | jq .
[
"unifi",
"574e86664333ffb999a2683f_alarms",
"574e86664333ffb999a2683f_events",
"574e86664333ffb999a2683f_ids",
"574e86664333ffb999a2683f_anomalies"
]
```

## `/api/v1/input/<input>/eventgroups/<siteID>`

Prints all event-groups present for the requested input plugin and siteID.

```shell
$ curl -s unifi.poller:37288/api/v1/input/unifi/eventgroups/574e86664333ffb999a2683f | jq .
[
"574e86664333ffb999a2683f_alarms",
"574e86664333ffb999a2683f_events",
"574e86664333ffb999a2683f_ids",
"574e86664333ffb999a2683f_anomalies"
]
```

## `/api/v1/input/<input>/events/<group>`

Prints events specific to the requested input and group.

```json
curl -s unifi.poller:37288/api/v1/input/unifi/events/unifi | jq .
{
  "latest": "2020-07-04T00:30:04.461330789-07:00",
  "events": [
    {
      "ts": "2020-07-04T00:28:31.824048428-07:00",
      "msg": "Requested https://unifi-controller:8443/api/s/default/stat/anomalies?scale=hourly&end=1593847711000: elapsed 7ms, returned 421 bytes",
      "tags": {
        "type": "debug"
      }
    },
    {
      "ts": "2020-07-04T00:32:04.45699961-07:00",
      "msg": "Unmarshalling Device Type: usw, site Home (default) ",
      "tags": {
        "type": "debug"
      }
    },
    {
      "ts": "2020-07-04T00:32:04.461339777-07:00",
      "msg": "Unmarshalling Device Type: uap, site Home (default) ",
      "tags": {
        "type": "debug"
      }
    }
  ]
}
```

## `/api/v1/input/<input>/events`

Prints all events for the specified plugin.
Looks like output plugin events.

## `/api/v1/input/<input>/sites`

Prints the most recently collected sites and some meta data.

```shell
$ curl -s unifi.poller:37288/api/v1/input/unifi/sites | jq .
[
  {
    "id": "574e86664333ffb999a2683f",
    "name": "default",
    "desc": "Home",
    "source": "https://unifi-controller:8443",
    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c"
  }
]
```

## `/api/v1/input/<input>/clients`

Prints the most recently collected clients and some meta data.

```shell
$ curl -s unifi.poller:37288/api/v1/input/unifi/clients | jq .
[
  {
    "rx_bytes": 2273696,
    "tx_bytes": 4029181,
    "name": "RMPROPLUS-43-3c-88",
    "site_id": "574e86664333ffb999a2683f",
    "source": "https://unifi-controller:8443",
    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",
    "mac": "34:ea:34:43:3c:88",
    "ip": "192.168.1.17",
    "type": "wireless",
    "device_mac": "b4:fb:e4:d2:74:39",
    "since": "2020-03-29T04:37:32-07:00",
    "last": "2020-07-03T04:10:36-07:00"
  },
  {
    "rx_bytes": 1530352814,
    "tx_bytes": 205398316,
    "name": "ubuntu",
    "site_id": "574e86664333ffb999a2683f",
    "source": "https://unifi-controller:8443",
    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",
    "mac": "52:54:00:9a:ea:9e",
    "ip": "",
    "type": "wired",
    "device_mac": "80:2a:a8:5d:86:32",
    "since": "2020-05-03T04:37:21-07:00",
    "last": "2020-07-03T04:10:46-07:00"
  }
]
```

## `/api/v1/input/<input>/clients/<siteID>`

Prints the most recently collected clients from a specific site.

```shell
$ curl -s unifi.poller:37288/api/v1/input/unifi/clients/574e86664333ffb999a2683f | jq .
# Looks the same as above.
```

## `/api/v1/input/<input>/devices`

Prints the most recently collected devices and some meta data.

```shell
$ curl -s unifi.poller:37288/api/v1/input/unifi/devices | jq .
[
  {
    "clients": 3,
    "uptime": 4835552,
    "name": "wap-lower",
    "site_id": "574e86664333ffb999a2683f",
    "source": "https://unifi-controller:8443",
    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",
    "mac": "80:2a:a8:11:ea:78",
    "ip": "192.168.1.14",
    "type": "uap",
    "model": "U7PG2",
    "version": "4.3.13.11253"
  },
  {
    "clients": 14,
    "uptime": 4834600,
    "name": "wap-upper",
    "site_id": "574e86664333ffb999a2683f",
    "source": "https://unifi-controller:8443",
    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",
    "mac": "b4:fb:e4:d2:46:93",
    "ip": "192.168.1.215",
    "type": "uap",
    "model": "U7NHD",
    "version": "4.3.13.11253"
  },
  {
    "clients": 2,
    "uptime": 4834344,
    "name": "wap-wall",
    "site_id": "574e86664333ffb999a2683f",
    "source": "https://unifi-controller:8443",
    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",
    "mac": "74:83:c2:d4:22:d3",
    "ip": "192.168.1.190",
    "type": "uap",
    "model": "UHDIW",
    "version": "4.3.13.11253"
  },
  {
    "clients": 19,
    "uptime": 4834869,
    "name": "switch",
    "site_id": "574e86664333ffb999a2683f",
    "source": "https://unifi-controller:8443",
    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",
    "mac": "80:2a:a8:5d:68:23",
    "ip": "192.168.1.7",
    "type": "usw",
    "model": "US48P750",
    "version": "4.3.13.11253"
  },
  {
    "clients": 26,
    "uptime": 4921914,
    "name": "gateway",
    "site_id": "574e86664333ffb999a2683f",
    "source": "https://unifi-controller:8443",
    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",
    "mac": "74:83:c2:1a:53:93",
    "ip": "67.181.75.120",
    "type": "ugw",
    "model": "UGW4",
    "version": "4.4.51.5287926"
  }
]
```

## `/api/v1/input/<input>/devices/<siteID>`

Prints the most recently collected devices from a specific site.

```shell
$ curl -s unifi.poller:37288/api/v1/input/unifi/devices/574e86664333ffb999a2683f | jq .
# Looks the same as above.
```
