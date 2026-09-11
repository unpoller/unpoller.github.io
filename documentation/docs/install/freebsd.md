---
id: freebsd
title: FreeBSD
---

This page assumes that you have decided to install UniFi Poller on to an existing FreeBSD operating system.

## First

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of [Grafana](../dependencies/grafana) and at
least one of [InfluxDB](../dependencies/influxdb) or [Prometheus](../dependencies/prometheus).
If you don't have them, follow these instructions for installing
[InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).

---

## Installation

The official FreeBSD ports package is no longer published, so `pkg install net/unpoller`
will not find a package. Install the pre-built archive from
[GitHub Releases](https://github.com/unpoller/unpoller/releases) instead.

Pick the archive that matches `uname -m`:

| Architecture | Asset name |
|---|---|
| amd64 | `unpoller_<version>_freebsd_amd64.tar.xz` |
| arm64 | `unpoller_<version>_freebsd_arm64.tar.xz` |
| armv7 | `unpoller_<version>_freebsd_armv7.tar.xz` |

Run the following as root. Replace `VERSION` with the latest tag from GitHub Releases
(for example `5.2.4`) and set `ARCH` to `amd64`, `arm64`, or `armv7`.

```shell
# Create the service account once.
id unpoller >/dev/null 2>&1 || pw useradd unpoller -d /tmp -w no -s /bin/false

VERSION=5.2.4
ARCH=amd64
fetch -o /tmp/unpoller.tar.xz \
  https://github.com/unpoller/unpoller/releases/download/v${VERSION}/unpoller_${VERSION}_freebsd_${ARCH}.tar.xz

# Installs the binary, rc.d script, man page, docs, and example configs into /usr/local.
tar -xJf /tmp/unpoller.tar.xz -C /

# Keep an existing config on upgrades.
[ -f /usr/local/etc/unpoller/up.conf ] || \
  cp /usr/local/etc/unpoller/up.conf.example /usr/local/etc/unpoller/up.conf
```

Re-extracting a newer archive upgrades the binary and supporting files. It does not ship
`up.conf`, so your edited config is left in place.

## Build from source

To build the binary yourself instead of using a release archive:

```shell
pkg install git go
git clone https://github.com/unpoller/unpoller.git
cd unpoller
go build -o /usr/local/bin/unpoller .
install -m 755 init/bsd/unpoller /usr/local/etc/rc.d/unpoller
mkdir -p /usr/local/etc/unpoller
cp examples/up.conf.example /usr/local/etc/unpoller/up.conf.example
[ -f /usr/local/etc/unpoller/up.conf ] || \
  cp examples/up.conf.example /usr/local/etc/unpoller/up.conf
id unpoller >/dev/null 2>&1 || pw useradd unpoller -d /tmp -w no -s /bin/false
```

## Maintenance

See [Application Configuration](../install/configuration) and the
[example config](https://github.com/unpoller/unpoller/blob/master/examples/up.conf.example)
file for additional post-install configuration information.

:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller
if you are using `unifios`. Those are: UDM Pro, UDM, UXG, or CloudKey with recent firmware.
:::

Use these commands to maintain the service:

```shell
# View manual.
man unpoller

# Edit config file.
# A live config lives at /usr/local/etc/unpoller/up.conf and is not overwritten on upgrades.
# The example shipped with the archive is /usr/local/etc/unpoller/up.conf.example
vi /usr/local/etc/unpoller/up.conf

# enable the service. Or edit /etc/rc.conf
sysrc unpoller_enable="YES"

# Start, Restart, Stop service.
service unpoller start
service unpoller restart
service unpoller stop
# Check service status, useful for scripts.
service unpoller status

# Logs should wind up in this file, but your syslog may differ.
grep unpoller /var/log/messages
```

## Next Steps

1. Don't forget the [Grafana Plugins](../dependencies/grafana#plugins).
1. Finish [Setting-up Grafana](../install/grafana).
