---
id: linux
title: Linux
---

This page assumes that you have decided to install UniFi Poller on to an kubernetes cluster.
Installing a cluster is not in the scope of this guide.

## First
All the possible configuration can be found on the [main page](https://github.com/unpoller/helm-chart) hosting the chart 
This chart uses CRDs from the prometheus operator, which can be installed with their [community
repository](https://github.com/prometheus-community/helm-charts)

---
## Installation
The two main ways to install the helm chart is through the CLI or through a gitops tools as flux.

```shell
helm repo add unpoller https://unpoller.github.io/helm-chart
helm repo update
```

If you are using flux, you can rely on their CR:
```yaml
apiVersion: source.toolkit.fluxcd.io/v1
kind: HelmRepository
metadata:
  name: unpoller
  namespace: flux-system
spec:
  interval: 10m
  url: https://unpoller.github.io/helm-chart
```

Once the repository has been configured, you can proceed to install the chart.
```bash
helm install -f myvalues.yaml your-release-name unpoller/unpoller
```

```yaml
apiVersion: helm.toolkit.fluxcd.io/v2
kind: HelmRelease
metadata:
  name: unpoller
  namespace: flux-system
spec:
  interval: 5m
  targetNamespace: unifi
  chart:
    spec:
      chart: unpoller
      version: 2.11.2-Chart6
      sourceRef:
        kind: HelmRepository
        name: unpoller
        namespace: flux-system
      interval: 10m
  values:
    allPossibleValues:
```

## Maintenance
When a new release of the chart (or unpoller is generated) you can update unpoller
by running helm

```bash
helm upgrade --reuse-values yourreleasename ./redis
```

In case of flux/argocd, just updating the version of the chart, should be enough.
