---
id: controllerlogin
title: Unifi Controller Login
---

## Configuring the Unifi controller

The only requirement of the controller is that UniFi Poller can log in to it and extract data.
For this purpose go ahead and create a new user now. Make a note of the username and password you have chosen.

If your controller is on a UDM, UXG, or UDM-Pro or UCK running UnifiOS then it is recommended that a
Limited Admin user is created with Read-Only rights to the UniFi Network app. Other access
levels may not work correctly.

For example,the screenshot below show the username chosen as `unifipoller`.
This is the default, will be used throughout these docs.

![img](../../static/img/UDM_user.png)

If you are using another controller type (eg. Cloudkey or Virtual) then create a read-only user.

## Next Steps
[Installation Overview](overview)

- [Create Config](applicationconfig)
