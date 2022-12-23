---
id: controllerlogin
title: Unifi Controller Login
---

## Configuring the Unifi controller

The only requirement of the controller is that UniFi Poller can log in to it and extract data.
For this purpose go ahead and create a new user. Make a note of the username and password you have chosen.

Adding a user depends on the type of controller you have.

### UnifiOS Controller

If your controller is on a UDM, UXG, or UDM-Pro or UCK running UnifiOS then it is recommended that a
Limited Admin user is created with Read-Only rights to the UniFi Network app. Other access
levels may not work correctly.

For example,the screenshot below show the username chosen as `unifipoller`.
This is the default, will be used throughout these docs.

![img](../../static/img/UDM_user.png)

### Non UnifiOS Controller

If you are using another controller type (eg. Cloudkey or Virtual) then create a menual read-only user.

The `Email` field will be the 'username' you will need to create the config file.

The Unifi controller currently requires the email be formated correctly. If you don't have your own domain try using @example.com so you don't inadvertantly give access to a random user.

## Next Steps
[Installation Overview](overview)

- [Create Config](applicationconfig)
