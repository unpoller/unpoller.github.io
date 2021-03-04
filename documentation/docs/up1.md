---
id: up1
title: Introduction
---

Unifi Poller allows you to collect data from your Unifi network controller, save it to a database, and then display it on pre-supplied attractive and data-rich Grafana dashboards

## Main attractions

- Simple to use
- Fast and efficient
- Easy access to data to help with troubleshooting or analysis
- Customisable - make your own dashboards of change the ones supplied
- Works with either InfluxDB or Prometheus
- Can re-use existing implementations of database or Grafana installations

## Description

[Ubiquiti](https://www.ui.com/) makes networking devices like switches, gateways (routers) and wireless access points. They have a line of equipment named [UniFi](https://www.ui.com/products/#unifi) that uses a controller to keep stats and simplify network device configuration. This controller can be installed on Windows, macOS, FreeBSD, Linux or Docker. Ubiquiti also provides a dedicated hardware device called a CloudKey that runs the controller software. And more recently they've developed the Dream Machine - an all-in-one controller, switch, gateway and accesspoint or NVR

UniFi Poller is a small [Golang](https://golang.org/) application that runs on Windows, macOS, FreeBSD, Linux or Docker. In Influx-mode it polls a UniFi controller every 30 seconds for measurements and exports the data to an Influx database. In Prometheus mode the poller opens a web port and accepts Prometheus polling. It converts the UniFi Controller API data into Prometheus exports on the fly

This application requires your controller to be running all the time. If you run a UniFi controller, there's no excuse not to install Influx or Prometheus, Grafana and this app. You'll have a plethora of data at your fingertips and the ability to craft custom graphs to slice the data any way you choose. Good luck!

## Backstory

I found a simple piece of code on GitHub that sorta did what I needed; we all know that story. I wanted more data, so I added more data collection. I probably wouldn't have made it this far if Garrett hadn't written the original code I started with. Many props my man. The original code pulled only the client data. This app now pulls data for clients, access points, security gateways, dream machines and switches.

I've been trying to get my UAP data into Grafana. Sure, google search that. You'll find this. What if you don't want to deal with SNMP? Well, here you go. I've replicated 400% of what you see on those SNMP-powered dashboards with this Go app running on the same mac as my UniFi controller. All without enabling SNMP nor trying to understand those OIDs. Mad props to waterside for making this dashboard; it gave me a fantastic start to making my own dashboards.

## Examples
Here are a couple of samples of the dashboards that Unifi Poller can produce (the ones shown are from InfluxDB) -

This the USG dashboard
![img](../static/img/USG_dashboard.jpg)

This is the Client dashboaard
![img](../static/img/Client_dashboard.jpg)
