---
id: installmethod
title: Install Method
---

## Chosing an Install Method

There are three main methods to install the Unpollor 'suite' (Unpoller and accociated programs)

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
- Don't need hardware VM support

#### Disadvantages of Manual

- Harder to update
- Requires manual configuration

### Kubernetes
Run Unpoller in a k8s cluster through the usage of the helm chart. 

#### Advantages of Kubernetes
- Automatic updates when combined with flux
- Integration with prometheus operator and grafana operator
- Pre packed solution

#### Disadvantages of Kubernetes
- Requires a kubernetes cluster + all associated complexities
- Requires kubernetes knowledge to troubleshoot
- Higher complexity

### Device Specific
Some devices have specific install methods. If you have one of those devices the instructions for that device take precedence.

- unRAID Template -- An unRAID Template is available in the Community Applications.
- [Synology](Synology) -- Via Docker Image
- [CloudKey](cloudkey) -- You may also install directly on a CloudKey, but that's an advanced setup and not generally recommended.

## Next Steps
[Installation Overview](overview)

- [Setup controller login for Unpoller](controllerlogin)
