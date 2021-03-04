---
id: ins6
title: Bare metal - Linux/MacOS
---


This page assumes that you have decided to install Unifi Poller on to an existing Linux operating system

## Before this

Make sure you have set up a user on your controller for Unifi Poller to use

It is assumed that you have working (and supported) versions of Grafana (though see the Plugins section below) and at least one of InfluxDB/Prometheus

(If you don't have then, brief instructions on installing InfluxDB and Grafana are given on [InfluxDB and Grafana Installation](id13))

## Linux

JFrog Bintray provides package hosting with RedHat, CentOS, Debian and Ubuntu repos.

Follow these directions to configure the repo and install poller.

The same package is in all the repos, but you can set the name to match your OS as shown below.

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


## MacOS - brew

1. Install [Homebrew](https://brew.sh/)
2. `brew install golift/mugs/unifi-poller`
3. Edit the config file after installing the brew. See the page [Config file and Environment variables](ins9.md) for more information
```
nano /usr/local/etc/unifi-poller/up.conf
```
or
```
vi /usr/local/etc/unifi-poller/up.conf
```
4. Start the service:
```
# do not use sudo
brew services start unifi-poller
```
  - The log file should show up at ``/usr/local/var/log/unifi-poller.log``
  - If it does not show up, make sure your user has permissions to create the file
5. To restart (** required after upgrade**)
```
brew services restart unifi-poller
```

## Manual package

Recommend reading the note at the bottom if you're using a mac.

1. Install [FPM](https://fpm.readthedocs.io/en/latest/installing.html)
2. Install [Go](https://golang.org/doc/install)
3. Clone this repo and change your working directory to the checkout.
```
    git clone https://github.com/unifi-poller/unifi-poller.git
    cd unifi-poller
```
4. Install local Golang dependencies:
  - Build a package (or two!):
    + `make deb` will build a Debian package
    + `make rpm` builds a RHEL package.
  - Install it:
    + `sudo dpkg -i *.deb || sudo rpm -Uvh *.rpm`

#### Manual Build Notes

If you're building linux packages on a mac you can run `brew install rpmbuild gnu-tar` to get the additional tools you need. That means you're going to need Homebrew. And if you're going to install Homebrew, or already have, you can simply do something like this to get your Go environment up and build the packages:
```
brew install rpmbuild gnu-tar go dep
sudo gem install --no-document fpm
mkdir ~/go/{src,mod}
export GOPATH=~/go
cd ~go/src
git clone https://github.com/unifi-poller/unifi-poller.git
cd unifi-poller
make rpm deb
 ```


## Linux post-install

See the [Config file and Environment variables](ins9.md) page and the example config file for additional post-install configuration information.

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

If you're running Grafana in Docker, pass this environment variable/value to Grafana to install the plugins:
```
GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel
```
## Next steps

Go to the section [Final steps](ins10.md)
