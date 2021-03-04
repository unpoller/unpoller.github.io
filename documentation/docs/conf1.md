---
id: conf1
title: Final steps
---

This page assume that you have successfully completed the installation of Unifi Poller, Grafana and either InfluxDB or Prometheus.

## Before this

You should have seen log entries showing that data has been collected by Unifi Poller, and should be able to see that data is arriving in the database.

There are just a few remaining steps to complete the installation

## 1 - Only for InfluxDB users

Although InfluxDB is up and running, you need to set up the database which was referenced in the configuration. Get shell access to wherever it is and run the command `influx`

Create the database:
```
CREATE DATABASE unifi
USE unifi
CREATE USER unifipoller WITH PASSWORD 'unifipoller' WITH ALL PRIVILEGES
GRANT ALL ON unifi TO unifipoller
```

Optionally - and this is a very sensible idea - set limits on how much data you wish to retain by implementing a retention policy. For example, to hold data for 32 days add the command
```
CREATE RETENTION POLICY retention_policy ON unifi DURATION 32d REPLICATION 1
```

(If ever you need to reset the database it can be deleted by the command `DROP DATABASE unifi` and then recreated using the commands above.)


## 2 - Configuring Grafana Datasource

Grafana needs to be set up to use the database that Poller is writing to as a source. Here we set out the steps for InfluxDB; the Prometheus steps are very similar

- Click Add your first data source on the home page you see after logon.
- Select the influxdb option
- Set the following fields:
        Name = UniFi InfluxDB (or whatever name you want) and set to default
        URL = http://influxdb1:8086
        Database = unifi
        Username = unifipoller
        Password = unifipoller
- No other fields need to be changed or set on this page.
- Click Save & Test
- You should get green banner above the save and test that says 'Data Source is Working'
- To return to the homepage click the icon with 4 squares on the left nav-bar and select home

## 3 - Import Grafana Dashboards

This project provides a few Grafana dashboards. They are available on [Grafana.com](https://grafana.com/grafana/dashboards).

Keep in mind these dashboards are just examples. You should make a single dedicated folder in Grafana to keep all of them in, and copy the graphs to new dashboards that you want to maintain. From time to time I will release new features (like multi-site support and multi-controller support) that brings new benefits to the existing dashboards. When that happens I update them. Keeping an example set allows you to update too, inspect the changes, and apply them to your own custom dashboards.

### Recommendations

- Import the provided dashboards into their own folder, so they're easy to find.
    + Do not make one folder per dashboard.
    + Make one folder for all of them.
    + The folder name cannot be the same as the dashboard names, or Grafana will throw an error.
- Changing the unique identifier allows you to re-import a dashboard, but this is not recommended.
- Don't edit them, instead:
    + Copy these dashboards or graphs to your own.
    + Edit the copies to get the data how you want it.
    + Keeping the original dashboards unedited allows you to continue referencing them, and copying graphs out of them.
    + This also allows you to identify problems with them and open an Issue.

### Import Dashboards

- Simply click the + on the left nav bar in Grafana and click Import.
- Put in the ID for the dashboard (below) and click the blue Load button.
- Select the InfluxDB or Prometheus data source you created previously.
- Click the Green Import button on the last screen.

Repeat this for each dashboard you want. The IDs for each database platform are below. You only need Prometheus or Influx, not both. Unless you really want both.

| App |	Prometheus ID |	Influx ID |	Get this if you... |
| --- | ------------- | --------- | ------------------ |
Client DPI |  [11310](https://grafana.com/grafana/dashboards/11310)	| [10419](https://grafana.com/grafana/dashboards/10419) |	...enabled `save_dpi` in the config
Sites      |	[11311](https://grafana.com/grafana/dashboards/11311) |	[10414](https://grafana.com/grafana/dashboards/10414) |	...enabled `save_sites`
USW        |	[11312](https://grafana.com/grafana/dashboards/11312) |	[10417](https://grafana.com/grafana/dashboards/10417) |	...have UniFi Switches
USG        |	[11313](https://grafana.com/grafana/dashboards/11313) |	[10416](https://grafana.com/grafana/dashboards/10416) |	...have a UniFi gateway (UDM-P, UDM, USG, ...)
UAP        |	[11314](https://grafana.com/grafana/dashboards/11314) |	[10415](https://grafana.com/grafana/dashboards/10416) |	...have UniFi Access Points
Clients    |	[11315](https://grafana.com/grafana/dashboards/11315) |	[10418](https://grafana.com/grafana/dashboards/10418) |	...love nano


#### Dashboard Update Notes

When the dashboards are updated, you have a couple options to update them in Grafana. You can either import them and replace the existing ones (use the same unique identifier), or you can import them as fresh new dashboards by changing the unique identifier. This allows you to keep updating the provided dashboards while maintaining your own. From time to time the dashboards get new features, new graphs, new variables, etc. Giving yourself an easy way to import the updated dashboards provided by this project is ideal. You're able to inspect the changes and apply them to your dashboards with this method.
