---
id: windows
title: Windows
---


This application compiles and runs just fine on Windows.

As it is now, a pre-compiled windows binary (.exe) is provided on the Releases page. Combine this with a valid config file and you can run this on Windows. Please contact us on Discord
if you need any help.

```
unifi-poller.exe -c up.conf
```

:::important
Do **not** include `:8443` on the url of the controller in `up.conf` if you are using `unifios` (that is, a UDM-Pro, UDM, or Ckoudkey with modern firmware)
:::
