---
id: docker_faq
title: Docker FAQ
---

### Where are the Docker images?

Images are available on [Docker Hub](https://hub.docker.com/r/golift/unifi-poller/tags)

Linux images are available for `386`, `amd64`, `arm32v6` and `arm64v8` architectures.
There is no need to specify an architecture tag, docker will pull the correct image
automatically with the `latest` tag.

### What Docker tags are available?

It is recommended to use `latest`.

Using `master` is not recommended. You may be asked to give this a try while troubleshooting or debugging, but generally this will contain untested code or things that will break your graphs. The `master` docker tag is based from the `master` git branch and may contain bugs; you've been overly warned.

You can install a specific version by specifying a version like this:
```
docker pull golift/unifi-poller:2.0.1
```
or minor version like this:
```
docker pull golift/unifi-poller:2.0
```
or a major version like this:
```
docker pull golift/unifi-poller:2
```

### How can I build from source?

You can build your own image from source.
```
git clone https://github.com/unifi-poller/unifi-poller.git
cd unifi-poller
make docker
```

This builds a 64-bit amd64 linux image from scratch. If you need another architecture, use the `docker build` command directly with a correct ``--build-arg`` flag. Examples [here](https://github.com/unifi-poller/unifi-poller/tree/master/init/docker/hooks).
