---
id: kubernetes
title: Kubernetes
---

This page assumes that you have decided to install UnPoller onto a Kubernetes cluster.
Installing a cluster is not in the scope of this guide.

## First

All the possible configuration can be found on the [main page](https://github.com/unpoller/helm-chart)
hosting the chart.
This chart uses CRDs from the Prometheus Operator, which can be installed with their
[community repository](https://github.com/prometheus-community/helm-charts).

---

## Installation

The two main ways to install the Helm chart are through the CLI or through a GitOps tool such as Flux.

```shell
helm repo add unpoller https://unpoller.github.io/helm-chart
helm repo update
```

If you are using Flux, you can rely on their CR:

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
      sourceRef:
        kind: HelmRepository
        name: unpoller
        namespace: flux-system
      interval: 10m
  values:
    allPossibleValues:
```

Pin `spec.chart.spec.version` to a [chart release](https://github.com/unpoller/helm-chart/releases)
if you do not want Flux to track latest.

## Maintenance

When a new release of the chart (or UnPoller) is generated you can update UnPoller
by running Helm:

```bash
helm upgrade --reuse-values your-release-name unpoller/unpoller
```

In case of Flux or Argo CD, updating the version of the chart should be enough.
