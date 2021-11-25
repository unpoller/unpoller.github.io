---
id: installmethod
title: Install Method
---

## Chosing an Install Method

There are two main methods to install the Unpollor 'suite' (Unpoller and accociated programs)

### Docker Image
This is the recommended way to install and the best option for new users.

#### Advantages of Docker

- Easy to configure, as you can rely on pre-existing work.
- Easy to update.
- Reliable and well-supported.

#### Disadvantages of Docker

- Some performance impact (though not likely to impact UniFi Poller, there is an overhead).
- Relies on a base system for persistence of data.
- May not be implemented on some useful platforms (eg NAS).

### Manual Install
Install each of the components individually

#### Advantages of Manual

- Works on systems that don't support Docker
- You can make use of any components you already have
- Less performance impact
- Don't need VM support

#### Disadvantages of Manual

- Harder to update
- Requires manual configuration

### Device Specific
Some devices have specific install methods

- unRAID Template -- An unRAID Template is available in the Community Applications.
- [Synology](Synology) -- Via Docker Image
- [CloudKey](cloudkey) -- You may also install directly on a [CloudKey](cloudkey), but that's an advanced setup and not generally recommended.

## Next Steps
[Installation Overview](overview)

- [Setup controller login for Unpoller](controllerlogin)
- [Create Config](applicationconfig)
- Install Unpoller Suite
- [Setup Grafana](grafana)
