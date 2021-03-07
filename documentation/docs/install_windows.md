---
id: install_windows
title: Bare metal - Windows
---


This application compiles and runs just fine on Windows. There is very little support provided. If you know how to package apps on windows, how and where config files should live, and how to auto-start a binary, open an Issue or submit a pull request so we can make this better.

As it is now, a pre-compiled windows binary (.exe) is provided on the Releases page. Combine this with a valid config file and you can run this on Windows.

```
unifi-poller.exe -c up.conf
```

:::important
Do **not** include `:8443` on the url of the controller in `up.conf` if you are using `unifios` (that is, a UDM-Pro, UDM, or Ckoudkey with modern firmware)
:::
