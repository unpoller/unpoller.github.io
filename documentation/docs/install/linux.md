---
id: linux
title: Linux
---

This page assumes that you have decided to install UniFi Poller on to an existing Linux operating system.

## Before this

Make sure you have set up a user on your controller for UniFi Poller to poll. You must have
a working (and supported) version of Grafana (though see the Plugins section below) and at
least one of InfluxDB or Prometheus. If you don't have then, follow these instructions for installing [InfluxDB](../dependencies/influxdb) and [Grafana](../dependencies/grafana).

## Linux

:::warning
JFrog Bintray shut down and package are no longer available from that repo.
These directions need updating. We are likely moving to packagcloud.
:::

JFrog Bintray provides package hosting with RedHat, CentOS, Debian and Ubuntu repos.
Follow these directions to configure the repo and install poller. The same package
is in all the repos, but you can set the name to match your OS as shown below.

### RedHat variants (CentOS, Fedora)

Create a file at ``/etc/yum.repos.d/golift.repo`` with the following contents. You may replace `centos` with `el`, but they're the same thing either way.

```
    [golift]
    name=Go Lift Awesomeness - Main Repo
    baseurl=https://dl.bintray.com/golift/centos/main/$basearch/
    gpgcheck=1
    repo_gpgcheck=1
    enabled=1
    sslverify=1
    gpgkey=https://golift.io/gpgkey
```

Then install the package: `sudo yum install unifi-poller`
You'll have to respond `yes` to the prompts to install the Go Lift GPG key.

### Debian variants (Ubuntu, Knoppix)

Install the repo and package using the commands below.
Replace `ubuntu` with `debian` if you have Debian.

```
    curl -s https://golift.io/gpgkey | sudo apt-key add -
    echo deb https://dl.bintray.com/golift/ubuntu bionic main | sudo tee /etc/apt/sources.list.d/golift.list
    sudo apt update
    sudo apt install unifi-poller
```

Supported distributions:
        `xenial`, `bionic`, `focal`, `jesse`, `stretch`, `buster`, `bullseye`
If you have another distro, try one of these ^ (they're all the same).

## Linux post-install

See the [Config file and Environment variables](../install/configuration) page and the example config file for additional post-install configuration information.

- Edit the config file after installing the package, and correct the authentication information for your setup:
```
    sudo nano /etc/unifi-poller/up.conf
```
or
```
    sudo vi /etc/unifi-poller/up.conf
```

:::important
Do **not** include `:8443` on the url of the controller if you are using `unifios` (that is, a UDM-Pro, UDM, or Ckoudkey with modern firmware)
:::

- Restart the service:
```
    sudo systemctl restart unifi-poller
```
- Check the log:
```
    tail -f -n100  /var/log/syslog /var/log/messages | grep unifi-poller
```

## Grafana Plugins

This application uses a few Grafana plugins. Install them:

    Clock, Discrete (InfluxDB only), PieChart, Singlestat (standard), Table (standard)

```
grafana-cli plugins install grafana-clock-panel
grafana-cli plugins install natel-discrete-panel
grafana-cli plugins install grafana-piechart-panel
```

## Next steps

Go to the section [Final Steps](../install/finish).
