---
id: grafana
title: Setup Grafana
---

This page assumes that you have successfully completed the installation of UniFi Poller,
[Grafana](../dependencies/grafana) and either [InfluxDB](../dependencies/influxdb) or
[Prometheus](../dependencies/prometheus).
There are just a few remaining steps to complete the installation.

---

## Configure Datasource

Grafana needs to be set up to use the database that Poller is writing to as a source.
The following explains the steps for InfluxDB; the Prometheus steps are very similar.

- Click `Add your first data source` on the home page you see after login.
- Select the InfluxDB option
- Set the following fields:
        Name = UniFi InfluxDB (or whatever name you want) and set to default
        URL = `http://influxdb1:8086`
        Database = `unifi`
        Username = `unifipoller`
        Password = `unifipoller`
- No other fields need to be changed or set on this page.
- Click `Save & Test`
- You should get green banner above the save and test that says 'Data Source is Working'
- To return to the homepage click the icon with 4 squares on the left nav-bar and select home

## Import Dashboards

This project provides a few pre-built Grafana dashboards.
They are available on [Grafana.com](https://grafana.com/grafana/dashboards?search=unifi-poller).

Keep in mind these dashboards are just examples. You should make a single dedicated folder in
Grafana to keep all of them in, and copy the graphs to new dashboards that you want to maintain.
From time to time we release new features that bring new benefits to the existing dashboards.
When that happens they are updated. Keeping an example set allows you to update too, inspect
the changes, and apply them to your own custom dashboards.

### Recommendations

- Import the provided dashboards into their own folder, so they're easy to find.
    - Do not make one folder per dashboard.
    - Make one folder for all of them.
    - The folder name cannot be the same as the dashboard names, or Grafana will throw an error.
- Changing the unique identifier allows you to re-import a dashboard, but this is not recommended.
- Don't edit them, instead:
    - Copy these dashboards or graphs to your own.
    - Edit the copies to get the data how you want it.
    - Keeping the original dashboards unedited allows you to continue referencing them,
      and copying graphs out of them.
    - This also allows you to identify problems with them and open an Issue.

### Dashboards Instructions

- Simply click the + on the left nav bar in Grafana and click Import.
- Put in the ID for the dashboard (below) and click the blue Load button.
- Select the InfluxDB or Prometheus data source you created previously.
- Click the Green Import button on the last screen.

Repeat this for each dashboard you want. The IDs for each database platform are below.
You only need Prometheus or Influx, not both. Unless you really want both.

| App | Prometheus ID | Influx ID | Get this if you... |
| --- | --- | --- | --- |
Client DPI|[11310](https://grafana.com/grafana/dashboards/11310)|[10419](https://grafana.com/grafana/dashboards/10419)|...enabled `save_dpi` in the config
Sites|[11311](https://grafana.com/grafana/dashboards/11311)|[10414](https://grafana.com/grafana/dashboards/10414)|...enabled `save_sites`
USW|[11312](https://grafana.com/grafana/dashboards/11312)|[10417](https://grafana.com/grafana/dashboards/10417)|...have UniFi Switches
USG|[11313](https://grafana.com/grafana/dashboards/11313)|[10416](https://grafana.com/grafana/dashboards/10416)|...have a UniFi gateway (UDM-P, UDM, USG, ...)
UAP|[11314](https://grafana.com/grafana/dashboards/11314)|[10415](https://grafana.com/grafana/dashboards/10416)|...have UniFi Access Points
Clients|[11315](https://grafana.com/grafana/dashboards/11315)|[10418](https://grafana.com/grafana/dashboards/10418)| ..love nano

#### Dashboard Update Notes

When the dashboards are updated, you have a couple options to update them in Grafana.
You can either import them and replace the existing ones (use the same unique identifier),
or you can import them as fresh new dashboards by changing the unique identifier.
This allows you to keep updating the provided dashboards while maintaining your own.
From time to time the dashboards get new features, new graphs, new variables, etc.
Giving yourself an easy way to import the updated dashboards provided by this project is ideal.
You're able to inspect the changes and apply them to your dashboards with this method.

---

# CONGRATULATIONS - YOU ARE NOW DONE
