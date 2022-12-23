---
id: changelog
title: Change Log
---

## Recent Releases (2020+)

### `v2.0.2` (TBD.2020) Ordenalogy

-   Adds collection of UniFi Events, Anomalies, Alarms and IDS.
    -   IDS collection existed before, but it wasn't as good as it is now.
    -   **WARNING**: This data is not correctly redacted when `hash_pii` is turned on.
-   Adds **Loki** output support for events, anomalies, alarms and IDS (in addition to InfluxDB).
-   Adds a built-in read-only web-server with minimal output data and an API.

### `v2.0.1` (06.15.2020) Enhancements

This release contains enhancements.
See [this pull request](https://github.com/unpoller/unpoller/pull/240) for more details.

-   Set timezone with TZ environment variable.
-   Fixes ARM64 Docker builds.
-   Fixes macOS Homebrew builds.
-   Adds temperatures for UDM.
-   Adds switch port data for UAP and UDM.
-   Can now read InfluxDB and UniFi controller passwords from dedicated secrets files.
-   Defaults for `save_ids`, `save_dpi` and `verify_ssl` now properly apply.
-   Prints controller configuration information on startup.
-   Can redact (md5 hash) personal info: mac address and hostname.
-   Various bug fixes.
-   Prometheus scrape config format updated.

### `v2.0` (02.06.2020) Multi-Controller Support, FreeBSD pkg + APT & YUM repos + DPI

[v2.0](https://github.com/unpoller/unpoller/releases/tag/v2.0.0)

#### v2 Breaking Changes

These things have changed and will require you to take action when you upgrade
to this version. Make sure to copy your old config file values to the new config
file format. If you use environment variables, they all need to be updated!

-   **Config file format changed.** All key names refactored for consistency.
-   **Environment variable names changed.** All key names refactored for consistency.
-   Some graphs require Grafana 6.6.0. Upgrade yours today!
-   All graphs require InfluxDB 1.7.x. Upgrade yours today!

#### v2 Updates

-   New [GitHub Org](https://github.com/unpoller) created for UniFi Poller. Moved from personal repo.
-   [InfluxDB output code moved to separate library](https://github.com/unpoller/pkg/influxunifi)
    as modular plugin. (output module)
-   [UniFi input code moved to separate library](https://github.com/unpoller/pkg/inputunifi)
    as modular plugin. (input module)
-   [Prometheus code moved to separate library](https://github.com/unpoller/pkg/promunifi)
    as modular plugin. (output module)
-   [Poller app code moved to separate library](https://github.com/unpoller/pkg/poller).
    The main repo only handles builds and golang vendors now.
-   [UniFi API code moved to new location](https://github.com/unpoller/unifi)
    from golift github org. It fits better in the new unpoller org.
-   [New library created](https://golift.io/cnfg) for config file and environment variable parsing.
-   Dynamic go plugin support added for output modules. May not prove useful.
-   [Example (MySQL) dynamic output module](https://github.com/unpoller/pkg/mysqlunifi)
    created (for above).
-   Support for latest UDM OS using 5.12.55+ controller version. API paths changed.
-   Switch from `dep` to go modules. Now using to Go 1.13, from 1.12.
-   **Clients' and Sites' DPI data added.** It was a lot of work.
-   Application refactored to use "registering module" approach.
    -   This means the main library knows nothing about the input or output modules.
        They register their own interfaces on load.
-   **Adds FreeBSD packages** and binaries for amd64, i386 and armhf.
-   **New dashboard: Client DPI** (for Prometheus and InfluxDB, 12 total)
-   New [JFrogg Bintray **YUM and APT repos**](http://bintray.com/golift) for users to keep up to date.
-   **Multiple controller support added to input module.**
    You may configure multiple controllers and group them with roles.
-   **Dynamic controller support added to input module and prometheus module.**
-   **All [dashboards updated](https://grafana.com/dashboards?search=unifi-poller).
    Multi-controller support added**, but hidden (since most users wont need it).
-   Many build fixes and improvements for packages, FreeBSD, Homebrew and Docker.
-   Type Conflict error fixes for InfluxDB (and probably more errors added, uhg).
-   [Install script](https://github.com/unpoller/unpoller/blob/master/scripts/install.sh)
    updates. Supports arm64 better and now supports FreeBSD packages.
-   unRAID [Community Applications template](https://github.com/selfhosters/unRAID-CA-templates/blob/master/templates/unifi-poller.xml)
    updated.
-   Many many [wiki updates](https://unpoller.com/).
-   The wiki was moved into its [own repo](https://github.com/unpoller/unpoller.github.io) and
    attached to a build pipeline that auto deploys tested changes to the main wiki (linked above)
-   The dashboards were moved into their [own repo](https://github.com/unpoller/dashboards)
    and attached to a build pipeline that auto deploys them to Grafana.com.

## Older (pre-2020) Releases

The following releases were drafted in this file from memory.
They are condensed and contain fewer details than the more recent releases above.

### `v1.6.3` (12.12.2019) Exit Behavior Changed

[v1.6.1](https://github.com/unpoller/unpoller/releases/tag/v1.6.1),
[v1.6.2](https://github.com/unpoller/unpoller/releases/tag/v1.6.2),
[v1.6.3](https://github.com/unpoller/unpoller/releases/tag/v1.6.3)

-   Prometheus bug fixes.
-   App no longer exits on error (yay unRAID users).

### `v1.6` (12.01.2019) Prometheus Support & InfluxDB Improvements + Dashboard Updates

[v1.6](https://github.com/unpoller/unpoller/releases/tag/v1.6.0)

-   **Prometheus support added.**
-   Five new Prometheus dashboards.
-   Lots of unused data trimmed from InfluxDB output.
-   Fixed UAP VAP data collection. It was all wrong.
-   Updated all InfluxDB dashboards.

### `v1.5.4` (10.08.2019) Bug Fixes

[v1.5.4](https://github.com/unpoller/unpoller/releases/tag/v1.5.4)

-   This release provides fixes for a handful of bugs that only affect a few controllers and use cases.
-   `max_errors` was removed from the config file. Any error will cause the poller to exit now.
-   InfluxDB SSL cert verification added.

### `v1.5.3` (09.09.2019) UDM and UDM Pro - Docker ENV Support

[v1.5.1](https://github.com/unpoller/unpoller/releases/tag/v1.5.1),
[v1.5.2](https://github.com/unpoller/unpoller/releases/tag/v1.5.2),
[v1.5.3](https://github.com/unpoller/unpoller/releases/tag/v1.5.3)

-   UDM and UDM Pro (UniFi Dream Machine) support added. 5.11.38
-   Dashboards Updated
-   A fix was put in place to make the application more resilient to a failing
    startup condition (on Linux using systemd).
-   The application can now be configured with environment variables,
    making it much easier to run in Docker.
-   Some "defaults" were changed to match documentation, but nothing major.
-   Also included is a new re-authenticate feature. Most people won't need this,
    but at least one person does.

### `v1.5` (07.11.2019) Intrusion Detection Data

[v1.4.1](https://github.com/unpoller/unpoller/releases/tag/v1.4.1),
[v1.4.2](https://github.com/unpoller/unpoller/releases/tag/v1.4.2),
[v1.5](https://github.com/unpoller/unpoller/releases/tag/v1.5.0)

-   UniFi 5.11.x support.
-   Multi-architecture Docker Images
-   IDS collection. Actually sucks.
-   Bug fix: The application was failing to restart after exiting on Linux.
-   Bug fix: Some beta controllers are failing to unmarshal a specific piece of data.
-   Bug fix: Devices without names were not selectable in the dashboard variables.
-   Build improvements thanks to [application-builder](https://github.com/golift/application-builder).

### `v1.4` (07.05.2019) Data Surplus

[v1.4](https://github.com/unpoller/unpoller/releases/tag/v1.4.0)

-   Clients and UAP dashboards overhauled.
-   Data formats changed.
-   Bug fixes.
-   Add additional config file support (yaml, json, xml).
-   Switched to a newer (better maintained) TOML library (only used for config file).
-   Dashboards are moved out of the package and into Grafana.com.
    This allows them to be updated independently of this application.
-   A new run-mode has been added. The application can start, collect metrics,
    report them to influx and exit. This mode is called "lambda".
-   RPM package will not overwrite up.conf now.
-   Homebrew file passes all audit tests now.
-   Makefile had a lot of updates.
-   32 bit rpm and deb packages are built now (in addition to the existing 64 bit packages)
-   A 64-bit windows exe binary is available now.
-   32 bit arm packages for deb and rpm are now available.
-   New script that automatically downloads (and optionally installs) the
    correct package for your system.

### `v1.3.3` (06.19.2019) Exit on Error

[v1.3.1](https://github.com/unpoller/unpoller/releases/tag/v1.3.1),
[v1.3.2](https://github.com/unpoller/unpoller/releases/tag/v1.3.2),
[v1.3.3](https://github.com/unpoller/unpoller/releases/tag/v1.3.3)

-   General code updates.
-   Bug fixes.
-   Dashboard fixes.
-   Adds very basic DPI counter stats, but no graphs.
-   Improved logging and debug.
-   Homebrew fixes.
-   Log file location change for macOS.
-   Manual updates.
-   **Adds fifth dashboard. (Network Sites)**
-   Adds Docker builds and release.

### `v1.3` (06.13.2019) Better Debug, Better Output, Better Build, Better Layout

[v1.2.3](https://github.com/unpoller/unpoller/releases/tag/v1.2.3),
[v1.2.2](https://github.com/unpoller/unpoller/releases/tag/v1.2.2),
[v1.3](https://github.com/unpoller/unpoller/releases/tag/v1.3.0)

-   Improved logging and debug.
-   Build pipeline updates.
-   Homebrew support.
-   Main routine put into a library.
-   Bug fixes and RPM build fix.
-   Dashboard updates.
-   **Adds USW dashboard.**

### `v1.2` (06.05.2019) Better Site support

[v1.2](https://github.com/unpoller/unpoller/releases/tag/v1.2.0)

-   Bug fixes.
-   Site name added to metrics making dashboards better.
-   Travis-CI builds packages now.

### `v1.1.1` (05.30.2019) Packages! Better run support

[v1.1.0](https://github.com/unpoller/unpoller/releases/tag/v1.1.0),
[v1.1.1](https://github.com/unpoller/unpoller/releases/tag/v1.1.1)

-   Adds multi site support. Was only working with `default`.
-   Provides precompiled binaries for linux amd64 and macos amd64.
-   Provides linux and macos packages. RPM, DEB, PKG for amd64 arch.
-   Bug fixes and small features.

### `v1.0` (01.26.2019) Cleanup and New Libraries

[v0.2a](https://github.com/unpoller/unpoller/releases/tag/v0.2a),
[v0.2b](https://github.com/unpoller/unpoller/releases/tag/V0.2b),
[v0.3](https://github.com/unpoller/unpoller/releases/tag/0.3.0),
[v1.0](https://github.com/unpoller/unpoller/releases/tag/v1.0.0)

-   **Adds more device support: UAP USG**
-   Adds better json parsing.
-   Avoid errors from different controllers rendering the same data in different ways.
-   Better log output.
-   Split UniFi API collection code into a library.

### `v0.2` (04.22.2018) Full Client Support

[v0.2](https://github.com/unpoller/unpoller/releases/tag/v0.2)

-   Adds Support for Pulling Client Data
