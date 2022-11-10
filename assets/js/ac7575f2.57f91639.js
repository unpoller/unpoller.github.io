"use strict";(self.webpackChunkpollerdox=self.webpackChunkpollerdox||[]).push([[93],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=p(n),k=l,h=s["".concat(d,".").concat(k)]||s[k]||m[k]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=s;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(3117),l=(n(7294),n(3905));const i={id:"synology",title:"Synology"},o=void 0,r={unversionedId:"install/synology",id:"install/synology",title:"Synology",description:"Introduction",source:"@site/docs/install/synology.md",sourceDirName:"install",slug:"/install/synology",permalink:"/docs/install/synology",draft:!1,tags:[],version:"current",frontMatter:{id:"synology",title:"Synology"},sidebar:"someSidebar",previous:{title:"CloudKey",permalink:"/docs/install/cloudkey"},next:{title:"Application Configuration",permalink:"/docs/install/configuration"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prepare Synology &amp; Docker",id:"prepare-synology--docker",level:2},{value:"Run docker &amp; configure network",id:"run-docker--configure-network",level:3},{value:"Prepare mapped volumes",id:"prepare-mapped-volumes",level:3},{value:"Download needed images from the registry",id:"download-needed-images-from-the-registry",level:3},{value:"Create influxdb container",id:"create-influxdb-container",level:3},{value:"Create unifi-poller container",id:"create-unifi-poller-container",level:2},{value:"Check that poller and influx are working",id:"check-that-poller-and-influx-are-working",level:2},{value:"Grafana Container",id:"grafana-container",level:2},{value:"Method 1 - Recommended",id:"method-1---recommended",level:3},{value:"Method 1 Preparation",id:"method-1-preparation",level:4},{value:"Method 1 Container",id:"method-1-container",level:4},{value:"Method 2",id:"method-2",level:3},{value:"Method 2 Preparation",id:"method-2-preparation",level:4},{value:"Method 2 Container",id:"method-2-container",level:4},{value:"Method 2 Notes",id:"method-2-notes",level:4},{value:"Running the container",id:"running-the-container",level:3},{value:"Next Steps",id:"next-steps",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"We are not claiming this is the only way to do this.\nHowever this is designed to use the official packages for UniFi Poller,\nInfluxDB and Grafana with the aim to make this maintainable as possible."),(0,l.kt)("p",null,"We use a custom bridge network for some very good reasons and we highly recommend most people use it:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This ensures name resolution works between the containers without needing to use the\ndeprecated link functionality"),(0,l.kt)("li",{parentName:"ul"},"The default bridge on docker does NOT have name resolution enabled and requires mucking\nabout with host files (this is a docker feature not anything to do with Synology)"),(0,l.kt)("li",{parentName:"ul"},"This also means in the event the container IP changes (it happens) you don't need to reconfigure"),(0,l.kt)("li",{parentName:"ul"},"This also means, due to the ICC, that no host port mappings are required other than for the\nGrafana 3000:3000 mapping in the Grafana contained, you can choose to remove other port mappings if you desire"),(0,l.kt)("li",{parentName:"ul"},"The reason for not using host port mappings for container not equalling container comms is we\nkeep this solution self-container and don't have to worry about weird things that might have been\non the Synology (changing of Synology IP, other containers with host mappings etc).\nCustomize in your environment as needed.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE:")," If you want to use this flow for updates you will need to use Method\n1 for Grafana documented here."),(0,l.kt)("p",null,"Assumptions:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"You already installed Docker from ",(0,l.kt)("a",{parentName:"li",href:"https://www.synology.com/en-us/dsm/packages/Docker"},"package center"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.synology.com/en-global/knowledgebase/DSM/help/DSM/AdminCenter/system_terminal"},"Enable SSH"),"\non Synology")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," You should always logon with your default admin account you created when you setup\nyou Synology, logging on as root no longer works."),(0,l.kt)("h2",{id:"prepare-synology--docker"},"Prepare Synology & Docker"),(0,l.kt)("h3",{id:"run-docker--configure-network"},"Run docker & configure network"),(0,l.kt)("p",null,"Click on network and select add to create new network:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Name it something like ",(0,l.kt)("inlineCode",{parentName:"li"},"Grafana_Net")),(0,l.kt)("li",{parentName:"ol"},"Enable IPv4"),(0,l.kt)("li",{parentName:"ol"},"Ensure ",(0,l.kt)("inlineCode",{parentName:"li"},"Get network configuration automatically")," is selected"),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"add"))),(0,l.kt)("p",null,"We do this because the default bridge doesn't have name resolution but new bridge do,\nso you don't have to mess with host files etc inside the container. (need to verify this is actually true)"),(0,l.kt)("p",null,"I don't recommend you use host network, using the bridge network keeps it self contained at\nhelps avoid conflicts with the host or other containers you might have that we cannot predict."),(0,l.kt)("h3",{id:"prepare-mapped-volumes"},"Prepare mapped volumes"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create the following structure in your preferred location (mine is a shared folder called\ndocker):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/docker/grafana")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"/docker/influxdb"))))),(0,l.kt)("h3",{id:"download-needed-images-from-the-registry"},"Download needed images from the registry"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Select ",(0,l.kt)("inlineCode",{parentName:"li"},"Registry")),(0,l.kt)("li",{parentName:"ol"},"Use the search box to find the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"unifi-poller for ",(0,l.kt)("inlineCode",{parentName:"li"},"golift/unifi-poller:latest")," ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/golift/unifi-poller/"},"https://hub.docker.com/r/golift/unifi-poller/")),(0,l.kt)("li",{parentName:"ul"},"grafana for ",(0,l.kt)("inlineCode",{parentName:"li"},"grafana/grafana:latest")," ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/grafana/grafana/"},"https://hub.docker.com/r/grafana/grafana/")),(0,l.kt)("li",{parentName:"ul"},"influxdb for ",(0,l.kt)("inlineCode",{parentName:"li"},"influxdb:1.8")," ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/influxdb/"},"https://hub.docker.com/_/influxdb/"))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The unifi-poller container requires the InfluxDB database to already exist, so you ",(0,l.kt)("em",{parentName:"p"},"must")," create the containers in the order below.")),(0,l.kt)("h3",{id:"create-influxdb-container"},"Create influxdb container"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"Image"),", select ",(0,l.kt)("inlineCode",{parentName:"li"},"influxdb:latest")," and click ",(0,l.kt)("inlineCode",{parentName:"li"},"launch")),(0,l.kt)("li",{parentName:"ol"},"Leave ",(0,l.kt)("inlineCode",{parentName:"li"},"General Settings")," alone - container name should be ",(0,l.kt)("inlineCode",{parentName:"li"},"influxdb1"),", unless you created other influxdb's"),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Advanced Settings")),(0,l.kt)("li",{parentName:"ol"},"On volume tab add the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"/docker/influxdb")," folder from above to mount path ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/influxdb")," - leave as read/write"))),(0,l.kt)("li",{parentName:"ol"},"On the ",(0,l.kt)("inlineCode",{parentName:"li"},"Network")," tab",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Add your network - in this example: ",(0,l.kt)("inlineCode",{parentName:"li"},"Grafana_Net")),(0,l.kt)("li",{parentName:"ul"},"Remove the default bridge (usually called ",(0,l.kt)("inlineCode",{parentName:"li"},"Bridge"),")"),(0,l.kt)("li",{parentName:"ul"},"Ensure that ",(0,l.kt)("inlineCode",{parentName:"li"},"use the same network as docker host")," is unchecked"))),(0,l.kt)("li",{parentName:"ol"},"On port settings ",(0,l.kt)("strong",{parentName:"li"}," <--- why do i have host mapped port, not sure we need this for -\nthis set of 3 as all traffic is internal "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Change local port from ",(0,l.kt)("inlineCode",{parentName:"li"},"Auto")," to one you have free on host - this makes it predictable. Something like ",(0,l.kt)("inlineCode",{parentName:"li"},"3456")),(0,l.kt)("li",{parentName:"ul"},"Leave container port as ",(0,l.kt)("inlineCode",{parentName:"li"},"8086")," and type as ",(0,l.kt)("inlineCode",{parentName:"li"},"TCP")))),(0,l.kt)("li",{parentName:"ol"},"On environment tab add the following vars",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INFLUXDB_DATA_DIR"),"      | ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/influxdb/data")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INFLUXDB_DATA_WAL_DIR"),"  | ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/influxdb/wal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INFLUXDB_DATA_META_DIR")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/influxdb/meta")))),(0,l.kt)("li",{parentName:"ol"},"Finalize container and:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"APPLY")),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"NEXT")),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"APPLY")))),(0,l.kt)("li",{parentName:"ol"},"We now need to create the database that the unifi-poller container will use.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SSH into your Synology"),(0,l.kt)("li",{parentName:"ul"},"Run the command ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo docker exec -it influxdb1 bash")),(0,l.kt)("li",{parentName:"ul"},"Follow the ",(0,l.kt)("a",{parentName:"li",href:"../dependencies/influxdb#post-setup"},"InfluxDB Post Setup instructions"),".")))),(0,l.kt)("h2",{id:"create-unifi-poller-container"},"Create unifi-poller container"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"Image")," select ",(0,l.kt)("inlineCode",{parentName:"li"},"golift/unifi-poller:latest")," and click launch"),(0,l.kt)("li",{parentName:"ol"},"Leave general settings alone - container name should be ",(0,l.kt)("inlineCode",{parentName:"li"},"golift-unifi-poller1"),",\nunless you created other unifi-pollers"),(0,l.kt)("li",{parentName:"ol"},"Click Advanced Settings"),(0,l.kt)("li",{parentName:"ol"},"On the network tab:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Add your network - in this example: ",(0,l.kt)("inlineCode",{parentName:"li"},"Grafana_Net")),(0,l.kt)("li",{parentName:"ul"},"Remove the default bridge (usually called ",(0,l.kt)("inlineCode",{parentName:"li"},"Bridge"),")"),(0,l.kt)("li",{parentName:"ul"},"Ensure that ",(0,l.kt)("inlineCode",{parentName:"li"},"use the same network as docker host")," is unchecked"))),(0,l.kt)("li",{parentName:"ol"},"On the Environment tab, add the following vars:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UP_INFLUXDB_URL"),"       | ",(0,l.kt)("inlineCode",{parentName:"li"},"http://influxdb1:8086")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UP_UNIFI_DEFAULT_URL"),"  | ",(0,l.kt)("inlineCode",{parentName:"li"},"https://your.unifi.controller.ip:8443")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UP_UNIFI_DEFAULT_USER")," | username for account created earlier. e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"unifipoller")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UP_UNIFI_DEFAULT_PASS")," | password for above user"),(0,l.kt)("li",{parentName:"ul"},"(optional) ",(0,l.kt)("inlineCode",{parentName:"li"},"UP_POLLER_DEBUG")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"true")))),(0,l.kt)("li",{parentName:"ol"},"Finalize the container by:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"APPLY")),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"NEXT")),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"APPLY"))))),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"When configuring make sure that you do ",(0,l.kt)("strong",{parentName:"p"},"not")," include ",(0,l.kt)("inlineCode",{parentName:"p"},":8443")," on the url of the controller\nif you are using ",(0,l.kt)("inlineCode",{parentName:"p"},"unifios"),". Those are: UDM Pro, UDM, UXG, or CkoudKey with recent firmware.")),(0,l.kt)("h2",{id:"check-that-poller-and-influx-are-working"},"Check that poller and influx are working"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Select the ",(0,l.kt)("inlineCode",{parentName:"li"},"Container")," tab in the Docker UI"),(0,l.kt)("li",{parentName:"ol"},"Double click ",(0,l.kt)("inlineCode",{parentName:"li"},"golift-unifi-poller1")),(0,l.kt)("li",{parentName:"ol"},"Select the ",(0,l.kt)("inlineCode",{parentName:"li"},"Log")," tab"),(0,l.kt)("li",{parentName:"ol"},"After a couple of minutes you should see an entry like the following,\nif you do then everything is working ok:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-none"},"[INFO] UniFi Measurements Recorded. Sites: 1, Clients: 78, Wireless APs: 6, Gateways: 1, Switches: 6, Points: 193, Fields: 7398\n")),(0,l.kt)("h2",{id:"grafana-container"},"Grafana Container"),(0,l.kt)("p",null,"This container is a little difficult on Synology.\nThere are two methods that have been to shown to work.\nIf you have an even better method let us know!\nThe two different methods do have their pros and cons."),(0,l.kt)("p",null,"Options:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Method 1")," - Create the container in the Docker UI, use SSH on the Synology to change some file permissions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Advantages - the Docker Clean action in the UI continues to work."),(0,l.kt)("li",{parentName:"ul"},"Disadvantages - be careful not to break the container by modifying folder attributes in the UI.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Method 2")," - Create the container via SSH command on the Synology."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Advantages - no need to change file system ownership attributes."),(0,l.kt)("li",{parentName:"ul"},"Disadvantages - you have to create a user account, delete the container,\nand re-run the docker command each time you want to update the base image.")),(0,l.kt)("h3",{id:"method-1---recommended"},"Method 1 - Recommended"),(0,l.kt)("h4",{id:"method-1-preparation"},"Method 1 Preparation"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"SSH into your Synology"),(0,l.kt)("li",{parentName:"ol"},"You will need to ",(0,l.kt)("inlineCode",{parentName:"li"},"cd")," to the root ",(0,l.kt)("inlineCode",{parentName:"li"},"Docker Directory")," you created earlier\n(In this example, the ",(0,l.kt)("inlineCode",{parentName:"li"},"/docker")," folder containing the ",(0,l.kt)("inlineCode",{parentName:"li"},"/grafana")," folder)"),(0,l.kt)("li",{parentName:"ol"},"The command is:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cd /volume{x}/[dirname]")),(0,l.kt)("li",{parentName:"ul"},"On my system this shared folder is on volume 3 so, for me it is: cd ",(0,l.kt)("inlineCode",{parentName:"li"},"/volume3/docker")))),(0,l.kt)("li",{parentName:"ol"},"Now, you need to change the permissions of the grafana folder:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sudo chown 472 grafana"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"NOTE:")," If you look at the grafana folder ownership in file station it\nwill say ",(0,l.kt)("inlineCode",{parentName:"li"},"472")," rather than any user you have created.")),(0,l.kt)("h4",{id:"method-1-container"},"Method 1 Container"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("inlineCode",{parentName:"li"},"Image")," tab, select ",(0,l.kt)("inlineCode",{parentName:"li"},"grafana/grafana:latest")," and click ",(0,l.kt)("inlineCode",{parentName:"li"},"Launch")),(0,l.kt)("li",{parentName:"ol"},"Leave the ",(0,l.kt)("inlineCode",{parentName:"li"},"General Settings")," alone - the container name should be ",(0,l.kt)("inlineCode",{parentName:"li"},"grafana-grafana1"),",\nunless you created other Grafanas."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Advanced Settings")),(0,l.kt)("li",{parentName:"ol"},"On the ",(0,l.kt)("inlineCode",{parentName:"li"},"Volume")," tab, add the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docker/grafana")," folder to mount path ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/grafana")," and leave as ",(0,l.kt)("inlineCode",{parentName:"li"},"read/write")))),(0,l.kt)("li",{parentName:"ol"},"On the ",(0,l.kt)("inlineCode",{parentName:"li"},"Network")," tab:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Add your network, in this example, ",(0,l.kt)("inlineCode",{parentName:"li"},"Grafana_Net")),(0,l.kt)("li",{parentName:"ul"},"Remove the default bridge (usually called ",(0,l.kt)("inlineCode",{parentName:"li"},"bridge"),")"),(0,l.kt)("li",{parentName:"ul"},"Ensure that ",(0,l.kt)("inlineCode",{parentName:"li"},"use the same network as docker host")," is Unchecked"))),(0,l.kt)("li",{parentName:"ol"},"On Port Settings",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Change ",(0,l.kt)("inlineCode",{parentName:"li"},"local port")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"Auto")," to one you have free on host -\nthis makes it predictable. Something like ",(0,l.kt)("inlineCode",{parentName:"li"},"3000")),(0,l.kt)("li",{parentName:"ul"},"Leave container port as ",(0,l.kt)("inlineCode",{parentName:"li"},"3000")," and type as ",(0,l.kt)("inlineCode",{parentName:"li"},"TCP")))),(0,l.kt)("li",{parentName:"ol"},"On the ",(0,l.kt)("inlineCode",{parentName:"li"},"Environment")," tab, add the following vars:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GF_INSTALL_PLUGINS")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"grafana-clock-panel,grafana-piechart-panel,natel-discrete-panel")))),(0,l.kt)("li",{parentName:"ol"},"Finalize container and:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"APPLY")),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"NEXT")),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"APPLY"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE:")," Don't change ownership in file station of the Grafana folder or you will break the container."),(0,l.kt)("p",null,"Skip to 'running the container section below'"),(0,l.kt)("h3",{id:"method-2"},"Method 2"),(0,l.kt)("h4",{id:"method-2-preparation"},"Method 2 Preparation"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a new user account on the Synology from the ",(0,l.kt)("inlineCode",{parentName:"li"},"Control Panel"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call the user ",(0,l.kt)("inlineCode",{parentName:"li"},"grafana")),(0,l.kt)("li",{parentName:"ul"},"Set the password (you don't need to logon as grafana and change it)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Disallow Password Change")),(0,l.kt)("li",{parentName:"ul"},"Assign them to the user group ",(0,l.kt)("inlineCode",{parentName:"li"},"users")),(0,l.kt)("li",{parentName:"ul"},"Give them ",(0,l.kt)("inlineCode",{parentName:"li"},"r/w")," permission to the folder you created e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"/docker/grafana")),(0,l.kt)("li",{parentName:"ul"},"Don't assign them anything else"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"SSH")," into your Synology"),(0,l.kt)("li",{parentName:"ol"},"Run the following command to find the ",(0,l.kt)("inlineCode",{parentName:"li"},"PID")," of the user you created and note it for later:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sudo id grafana"))))),(0,l.kt)("h4",{id:"method-2-container"},"Method 2 Container"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run the following command.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sudo docker run --user 1031 --name grafana-grafana1 \\\n  --net=Grafana_Net -p 300:3000 \\\n  --volume /volume1/docker/grafanatest:/var/lib/grafana \\\n  -e "GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-piechart-panel,natel-discrete-panel" \\\n  grafana/grafana:latest\n'))),(0,l.kt)("li",{parentName:"ol"},"Use the pid you got in step 3 above, use the network name you created if you didn't use\n",(0,l.kt)("inlineCode",{parentName:"li"},"Grafana_Net")," AND you will need to use the volume # of your docker folder (the one you\ncreated manually is on) by default this will be on ",(0,l.kt)("inlineCode",{parentName:"li"},"/volume1"),", but if you have multiple\nvolumes, this may not be the case.")),(0,l.kt)("h4",{id:"method-2-notes"},"Method 2 Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you use the clean action in the Synology docker UI, you will break this VM and you\nwill need to delete and rerun the ",(0,l.kt)("inlineCode",{parentName:"li"},"docker run")," command."),(0,l.kt)("li",{parentName:"ul"},"If you use the Synology docker UI to export the configuration and import it again later,\ndocker will break and you will need to rerun the ",(0,l.kt)("inlineCode",{parentName:"li"},"docker run")," command."),(0,l.kt)("li",{parentName:"ul"},"I have no idea if hyperbackup or any other backup / restore will also break the config"),(0,l.kt)("li",{parentName:"ul"},"This all derives from the fact there is no way to do ",(0,l.kt)("inlineCode",{parentName:"li"},"--user {PID}")," in the Synology docker UI / JSON.")),(0,l.kt)("h3",{id:"running-the-container"},"Running the container"),(0,l.kt)("p",null,"At this point your containers should have been created, hopefully with no issues."),(0,l.kt)("p",null,"If so! Start the container. The first time it should take a while to initialize the database.\nCheck the logs to make sure you have no file / folder permissions issues.\nIf you did you will need to check and make sure you used the right PID and set the\nownership of the host Grafana folder correctly."),(0,l.kt)("p",null,"From your host browser, access ",(0,l.kt)("inlineCode",{parentName:"p"},"http://{ip address of your synology}:3000"),"\nand you should see the Grafana logon (the default is admin:admin)"),(0,l.kt)("p",null,"You will be prompted to change the default password, do so."),(0,l.kt)("h2",{id:"next-steps"},"Next Steps"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Finish ",(0,l.kt)("a",{parentName:"li",href:"../install/grafana"},"Setting-up Grafana"),".")))}m.isMDXComponent=!0}}]);