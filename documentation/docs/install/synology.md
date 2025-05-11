---
id: synology
title: Synology
---

## Introduction

We are not claiming this is the only way to do this.
However this is designed to use the official packages for UniFi Poller,
InfluxDB and Grafana with the aim to make this maintainable as possible.

We use a custom bridge network for some very good reasons and we highly recommend most people use it:

- This ensures name resolution works between the containers without needing to use the
  deprecated link functionality
- The default bridge on docker does NOT have name resolution enabled and requires mucking
  about with host files (this is a docker feature not anything to do with Synology)
- This also means in the event the container IP changes (it happens) you don't need to reconfigure
- This also means, due to the ICC, that no host port mappings are required other than for the
  Grafana 3000:3000 mapping in the Grafana contained, you can choose to remove other port mappings if you desire
- The reason for not using host port mappings for container not equalling container comms is we
  keep this solution self-container and don't have to worry about weird things that might have been
  on the Synology (changing of Synology IP, other containers with host mappings etc).
  Customize in your environment as needed.

**NOTE:** If you want to use this flow for updates you will need to use Method
1 for Grafana documented here.

Assumptions:

1. You already installed Docker from [package center](https://www.synology.com/en-us/dsm/packages/Docker).
1. [Enable SSH](https://www.synology.com/en-global/knowledgebase/DSM/help/DSM/AdminCenter/system_terminal)
   on Synology

**Note:** You should always logon with your default admin account you created when you setup
you Synology, logging on as root no longer works.

## Prepare Synology & Docker

### Run docker & configure network

Click on network and select add to create new network:

1. Name it something like `Grafana_Net`
1. Enable IPv4
1. Ensure `Get network configuration automatically` is selected
1. Click `add`

We do this because the default bridge doesn't have name resolution but new bridge do,
so you don't have to mess with host files etc inside the container. (need to verify this is actually true)

I don't recommend you use host network, using the bridge network keeps it self contained at
helps avoid conflicts with the host or other containers you might have that we cannot predict.

### Prepare mapped volumes

1. Create the following structure in your preferred location (mine is a shared folder called
   docker):
   - `/docker/grafana` and `/docker/influxdb`

### Download needed images from the registry

1. Select `Registry`
1. Use the search box to find the following:
   - unpoller for `ghcr.io/unpoller/unpoller:latest` https://github.com/unpoller/unpoller/pkgs/container/unpoller
   - grafana for `grafana/grafana:latest` https://hub.docker.com/r/grafana/grafana/
   - influxdb for `influxdb:1.8` https://hub.docker.com/_/influxdb/

:::note
The unpoller container requires the InfluxDB database to already exist, so you _must_ create the containers in the order below.
:::

### Create influxdb container

1. In `Image`, select `influxdb:` and click `launch`
1. Leave `General Settings` alone - container name should be `influxdb1`, unless you created other influxdb's
1. Click `Advanced Settings`
1. On volume tab add the following:
   - The `/docker/influxdb` folder from above to mount path `/var/lib/influxdb` - leave as read/write
1. On the `Network` tab
   - Add your network - in this example: `Grafana_Net`
   - Remove the default bridge (usually called `Bridge`)
   - Ensure that `use the same network as docker host` is unchecked
1. On port settings
   - Change local port from `Auto` to one you have free on host - this makes it predictable. Something like `3456`
   - Leave container port as `8086` and type as `TCP`
1. On environment tab add the following vars
   - `INFLUXDB_DATA_DIR` | `/var/lib/influxdb/data`
   - `INFLUXDB_DATA_WAL_DIR` | `/var/lib/influxdb/wal`
   - `INFLUXDB_DATA_META_DIR` | `/var/lib/influxdb/meta`
1. Finalize container and:
   - Click `APPLY`
   - Click `NEXT`
   - Click `APPLY`
1. We now need to create the database that the unpoller container will use.
   - SSH into your Synology
   - Run the command `sudo docker exec -it influxdb1 bash`
   - Follow the [InfluxDB Post Setup instructions](../dependencies/influxdb#post-setup).

## Create unpoller container

1. In `Image` select `ghcr.io/unpoller/unpoller:latest` and click launch
1. Leave general settings alone - container name should be `unpoller1`,
   unless you created other unpollers
1. Click Advanced Settings
1. On the network tab:
   - Add your network - in this example: `Grafana_Net`
   - Remove the default bridge (usually called `Bridge`)
   - Ensure that `use the same network as docker host` is unchecked
1. On the Environment tab, add the following vars:
   - `UP_INFLUXDB_URL` | `http://influxdb1:8086`
   - `UP_UNIFI_DEFAULT_URL` | `https://your.unifi.controller.ip:8443`
   - `UP_UNIFI_DEFAULT_AUTH_TOKEN` | auth token for account created earlier. e.g. `unifipoller`
   - `UP_UNIFI_DEFAULT_ORG` | org created earlier
   - `UP_UNIFI_DEFAULT_BUCKET` | bucket created earlier
   - (optional) `UP_POLLER_DEBUG` | `true`
1. Finalize the container by:
   - Click `APPLY`
   - Click `NEXT`
   - Click `APPLY`

:::important
When configuring make sure that you do **not** include `:8443` on the url of the controller
if you are using `unifios`. Those are: UDM Pro, UDM, UXG, or CloudKey with recent firmware.
:::

## Check that poller and influx are working

1. Select the `Container` tab in the Docker UI
1. Double click `unpoller1`
1. Select the `Log` tab
1. After a couple of minutes you should see an entry like the following,
   if you do then everything is working ok:

```none
[INFO] UniFi Measurements Recorded. Sites: 1, Clients: 78, Wireless APs: 6, Gateways: 1, Switches: 6, Points: 193, Fields: 7398
```

## Grafana Container

This container is a little difficult on Synology.
There are two methods that have been to shown to work.
If you have an even better method let us know!
The two different methods do have their pros and cons.

Options:

**Method 1** - Create the container in the Docker UI, use SSH on the Synology to change some file permissions.

- Advantages - the Docker Clean action in the UI continues to work.
- Disadvantages - be careful not to break the container by modifying folder attributes in the UI.

**Method 2** - Create the container via SSH command on the Synology.

- Advantages - no need to change file system ownership attributes.
- Disadvantages - you have to create a user account, delete the container,
  and re-run the docker command each time you want to update the base image.

### Method 1 - Recommended

#### Method 1 Preparation

1. SSH into your Synology
1. You will need to `cd` to the root `Docker Directory` you created earlier
   (In this example, the `/docker` folder containing the `/grafana` folder)
1. The command is:
   - `cd /volume{x}/[dirname]`
   - On my system this shared folder is on volume 3 so, for me it is: cd `/volume3/docker`
1. Now, you need to change the permissions of the grafana folder:
   - `sudo chown 472 grafana`

- **NOTE:** If you look at the grafana folder ownership in file station it
  will say `472` rather than any user you have created.

#### Method 1 Container

1. In the `Image` tab, select `grafana/grafana:latest` and click `Launch`
1. Leave the `General Settings` alone - the container name should be `grafana-grafana1`,
   unless you created other Grafanas.
1. Click `Advanced Settings`
1. On the `Volume` tab, add the following:
   - `docker/grafana` folder to mount path `/var/lib/grafana` and leave as `read/write`
1. On the `Network` tab:
   - Add your network, in this example, `Grafana_Net`
   - Remove the default bridge (usually called `bridge`)
   - Ensure that `use the same network as docker host` is Unchecked
1. On Port Settings
   - Change `local port` from `Auto` to one you have free on host -
     this makes it predictable. Something like `3000`
   - Leave container port as `3000` and type as `TCP`
1. On the `Environment` tab, add the following vars:
   - `GF_INSTALL_PLUGINS` | `grafana-clock-panel,grafana-piechart-panel,natel-discrete-panel`
1. Finalize container and:
   - Click `APPLY`
   - Click `NEXT`
   - Click `APPLY`

**NOTE:** Don't change ownership in file station of the Grafana folder or you will break the container.

Skip to 'running the container section below'

### Method 2

#### Method 2 Preparation

1. Create a new user account on the Synology from the `Control Panel`:
   - Call the user `grafana`
   - Set the password (you don't need to logon as grafana and change it)
   - `Disallow Password Change`
   - Assign them to the user group `users`
   - Give them `r/w` permission to the folder you created e.g. `/docker/grafana`
   - Don't assign them anything else
1. `SSH` into your Synology
1. Run the following command to find the `PID` of the user you created and note it for later:
   - `sudo id grafana`

#### Method 2 Container

1. Run the following command.
   ```shell
   sudo docker run --user 1031 --name grafana-grafana1 \
     --net=Grafana_Net -p 300:3000 \
     --volume /volume1/docker/grafanatest:/var/lib/grafana \
     -e "GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-piechart-panel,natel-discrete-panel" \
     grafana/grafana:latest
   ```
1. Use the pid you got in step 3 above, use the network name you created if you didn't use
   `Grafana_Net` AND you will need to use the volume # of your docker folder (the one you
   created manually is on) by default this will be on `/volume1`, but if you have multiple
   volumes, this may not be the case.

#### Method 2 Notes

- If you use the clean action in the Synology docker UI, you will break this VM and you
  will need to delete and rerun the `docker run` command.
- If you use the Synology docker UI to export the configuration and import it again later,
  docker will break and you will need to rerun the `docker run` command.
- I have no idea if hyperbackup or any other backup / restore will also break the config
- This all derives from the fact there is no way to do `--user {PID}` in the Synology docker UI / JSON.

### Running the container

At this point your containers should have been created, hopefully with no issues.

If so! Start the container. The first time it should take a while to initialize the database.
Check the logs to make sure you have no file / folder permissions issues.
If you did you will need to check and make sure you used the right PID and set the
ownership of the host Grafana folder correctly.

From your host browser, access `http://{ip address of your synology}:3000`
and you should see the Grafana logon (the default is admin:admin)

You will be prompted to change the default password, do so.

## Next Steps

1. Finish [Setting-up Grafana](../install/grafana).
