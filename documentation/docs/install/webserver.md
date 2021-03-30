---
id: webserver
title: Webserver
---


Poller has a built-in and **disabled by default** web server. The web server provides some very basic information about your UniFi environment, devices and clients. At the time of this writing it is [only an API](https://github.com/unifi-poller/unifi-poller/wiki/API), but a simple human interface (read-only) is planned.

    The web server was added in UniFi Poller v2.0.2.

## Usage

You must enable the web server if you wish to use it. To enable the web server without authentication this is all you need to do:
```
[webserver]
  enable = true
```
or, with an environment variable:
```
UP_WEBSERVER_ENABLE=true
```

## Authentication

By default there is no authentication. To enable authentication, add a username and password. Like this (`captain` is the username):
```
[webserver.accounts]
  username = "password hash goes here"
  captain = "$2a$04$a2XvB0gvTXW6d4rHUXQdduUDBrQB3/2lGTxZXQ32Sd9hYDxrz.oHm"
```

Using an env variable (`captain` is the username):
```
UP_WEBSERVER_ACCOUNTS_captain="$2a$04$a2XvB0gvTXW6d4rHUXQdduUDBrQB3/2lGTxZXQ32Sd9hYDxrz.oHm"
```

### Making a Password Hash

Use `unifi-poller` to make a web server account password hash. Like this:
```
unifi-poller -e -
Enter Password:
$2a$04$a2XvB0gvTXW6d4rHUXQdduUDBrQB3/2lGTxZXQ32Sd9hYDxrz.oHm
```

Using Docker:
```
docker pull golift/unifi-poller
docker -it golift/unifi-poller -e -
Enter Password:
$2a$04$yOE5zjJs2Gg0jsGQpE7j2ucKiNndUGEzpX6BsLoKl0hkxBvE81z8.
```

## Advanced

These are the advanced settings and their default values.
```
  port          = 37288
  html_path     = "/usr/lib/unifi-poller/web"
  ssl_cert_path = ""
  ssl_key_path  = ""
  max_events    = 200
```
The default HTML path is installed by any package or the Official Golift Docker image. This usually does not need to be changed. Exception are BSD and macOS. The HTML path on these OSes is /usr/local/lib/unifi-poller/web.

An SSL listener may be enabled instead of standard HTTP by providing an SSL Cert File and Key File paths.

The `max_events` setting controls memory usage. For small or home sites you can safely set this to 1000 or higher. This setting dictates how many logs are kept in memory. The setting is a global setting that applies to all log queues. There are several log queues per plugin.
