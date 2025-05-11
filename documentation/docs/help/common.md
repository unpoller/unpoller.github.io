---
id: common
title: Common Solutions
---

Below are some common solutions and possible symptoms.

### Empty Dashboards

The number one cause of empty dashboards is an old version of InfluxDB.
Make sure you are on version 1.7.x or 1.8.x. **Use of 1.6.x will cause empty dashboards.**

If your DPI dashboards are empty `DPI` is like still disabled.
It must be enabled in both the poller config and in your UniFi controller. Two spots.

### Check the port used to connect to the controller

It should be `8443` if you are using a non-unifios interface (eg the original Cloudkey with
old firmware) and `443` (or just omitted) if you are using a unifios device (UDM-Pro, UDM, UXG, etc)

### Check Log Files

UniFi Poller has great logs that help when troubleshooting.
If you're seeking help please enable debug mode and copy/paste some of your logs.
All of this data helps figure out what's going on.
Debug mode can be enable in up.conf or by passing the env variable UP_POLLER_DEBUG=true.

Grafana, Prometheus and InfluxDB also have logs files, but they're probably less useful.
You can still check them for errors.

If you are a Docker user then check out [Dozzle](https://dozzle.dev/)

### Double-Check Data Source

Many users make typos in their data source. Sometimes on the URLs, sometimes on the passwords.
This will cause data to not show up and the dashboards may provide red error messages.
Most data sources do not have paths; just `http://ip:port`.

### Double-Check Passwords

Keep this in mind when setting things up. Can't tell you how many times someone had
issues only to find a bad password. Check it, check it again; **log in with it yourself**.
The poller log should give you clues if this is the problem.

### Dashboard Variables

If your dashboards have some data, but it looks like most of it is missing,
this often indicates a problem with the variables, or the data source the variables are using.
Edit the affected dashboards: go to Settings then to Variables, and click on the variables.
Make sure they have the correct data source listed, and check for "preview of values" to
make sure things are showing up. Let me know if you see values when you make a report.

### InfluxDB Write Errors

If you're getting errors like this:

```none
[ERROR] infdb.Write(bp): {"error":"field type conflict"}
[ERROR] infdb.Write(bp): {"error":"partial write: field type conflict: input field "tx_power" on measurement "uap_radios" is type integer, already exists as type float dropped="}
```

This usually indicates a bug was fixed and the resulting fixed has caused an incompatibility
with your existing InfluxDB database. This could also indicate you've found a new bug.
Please open an issue if you are running the latest version and dropping the database
did not solve the error. There are generally two fixes:

1. Downgrade. Do not upgrade to a new version.
1. `DROP` and re-`CREATE` the InfluxDB database.
