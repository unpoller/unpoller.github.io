---
id: controllerlogin
title: Unifi Controller Login
---

## Configuring the Unifi controller

UniFi Poller supports three ways to authenticate to your UniFi environment. Pick the one
that matches your setup:

1. **Local controller account** - a username/password for a Limited Admin user on the
   controller. Works with every controller type. This is the method documented below and
   used throughout the rest of these docs.
1. **Local API key** - an API key generated directly on newer UnifiOS controllers (Network
   Server version dependent), used in place of a username/password. Set `api_key` instead
   of `user`/`pass` on the controller. This avoids storing a password, but is only
   available on controllers new enough to support API key generation in their UI.
1. **Remote API key** - an API key generated from your Ubiquiti (UI) account, used when
   UniFi Poller cannot reach the controller directly (for example, it runs on a different
   network than the controller). See [Application Configuration](configuration#remote-api-key)
   for how to configure this method.

The rest of this page covers the local controller account method.

The only requirement of the controller is that UniFi Poller can log in to it and extract data.
For this purpose go ahead and create a new user. Make a note of the username and password you have chosen.

Adding a user depends on the type of controller you have.

### UnifiOS Controller

UnifiOS is Ubiquiti's underlying OS/Network Server, not a specific device model - it runs on
UDM, UDM Pro, UDM SE, UDM Pro Max, UXG, UXG Pro, UXG Lite, UCG (Cloud Gateway) Ultra/Max/Fiber,
UCK G2/G2 Plus, and self-hosted UnifiOS Network Server installs. If your controller runs
UnifiOS (check under Settings > System in the UniFi Network app), it is recommended that a
Limited Admin user is created with Read-Only rights to the UniFi Network app. Other access
levels may not work correctly.

For example, the screenshot below shows the username chosen as `unifipoller`.
This is the default, and will be used throughout these docs.

![img](../../static/img/UDM_user.png)

### Non UnifiOS Controller

If you are using another controller type (eg. Cloudkey Gen1 or a software controller not
running UnifiOS) then create a manual read-only user.

The `Email` field will be the 'username' you will need to create the config file.

The UniFi controller currently requires the email be formatted correctly. If you don't have
your own domain try using `@example.com` so you don't inadvertently give access to a random user.

## Next Steps

[Installation Overview](overview)

- [Create Config](configuration)
