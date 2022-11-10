"use strict";(self.webpackChunkpollerdox=self.webpackChunkpollerdox||[]).push([[220],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>v});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=i.createContext({}),o=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=o(e.components);return i.createElement(r.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=o(t),v=a,f=d["".concat(r,".").concat(v)]||d[v]||c[v]||l;return t?i.createElement(f,p(p({ref:n},s),{},{components:t})):i.createElement(f,p({ref:n},s))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=d;var u={};for(var r in n)hasOwnProperty.call(n,r)&&(u[r]=n[r]);u.originalType=e,u.mdxType="string"==typeof e?e:a,p[1]=u;for(var o=2;o<l;o++)p[o]=t[o];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var i=t(3117),a=(t(7294),t(3905));const l={id:"api",title:"API"},p=void 0,u={unversionedId:"advanced/api",id:"advanced/api",title:"API",description:"These are the available API paths that the built-in web server provides.",source:"@site/docs/advanced/api.md",sourceDirName:"advanced",slug:"/advanced/api",permalink:"/docs/advanced/api",draft:!1,tags:[],version:"current",frontMatter:{id:"api",title:"API"},sidebar:"someSidebar",previous:{title:"Webserver",permalink:"/docs/advanced/webserver"},next:{title:"Common Solutions",permalink:"/docs/help/common"}},r={},o=[{value:"<code>/debug/vars</code>",id:"debugvars",level:2},{value:"<code>/health</code>",id:"health",level:2},{value:"<code>/api/v1/config</code>",id:"apiv1config",level:2},{value:"<code>/api/v1/config/plugins</code>",id:"apiv1configplugins",level:2},{value:"<code>/api/v1/output/&lt;output&gt;</code>",id:"apiv1outputoutput",level:2},{value:"<code>/api/v1/output/&lt;output&gt;/eventgroups</code>",id:"apiv1outputoutputeventgroups",level:2},{value:"<code>/api/v1/output/&lt;output&gt;/events/&lt;group&gt;</code>",id:"apiv1outputoutputeventsgroup",level:2},{value:"<code>/api/v1/output/&lt;output&gt;/events</code>",id:"apiv1outputoutputevents",level:2},{value:"<code>/api/v1/input/&lt;input&gt;</code>",id:"apiv1inputinput",level:2},{value:"<code>/api/v1/input/&lt;input&gt;/eventgroups</code>",id:"apiv1inputinputeventgroups",level:2},{value:"<code>/api/v1/input/&lt;input&gt;/eventgroups/&lt;siteID&gt;</code>",id:"apiv1inputinputeventgroupssiteid",level:2},{value:"<code>/api/v1/input/&lt;input&gt;/events/&lt;group&gt;</code>",id:"apiv1inputinputeventsgroup",level:2},{value:"<code>/api/v1/input/&lt;input&gt;/events</code>",id:"apiv1inputinputevents",level:2},{value:"<code>/api/v1/input/&lt;input&gt;/sites</code>",id:"apiv1inputinputsites",level:2},{value:"<code>/api/v1/input/&lt;input&gt;/clients</code>",id:"apiv1inputinputclients",level:2},{value:"<code>/api/v1/input/&lt;input&gt;/clients/&lt;siteID&gt;</code>",id:"apiv1inputinputclientssiteid",level:2},{value:"<code>/api/v1/input/&lt;input&gt;/devices</code>",id:"apiv1inputinputdevices",level:2},{value:"<code>/api/v1/input/&lt;input&gt;/devices/&lt;siteID&gt;</code>",id:"apiv1inputinputdevicessiteid",level:2}],s={toc:o};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are the available API paths that the ",(0,a.kt)("a",{parentName:"p",href:"webserver"},"built-in web server")," provides."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The web server was added in UniFi Poller v2.0.2.")),(0,a.kt)("h2",{id:"debugvars"},(0,a.kt)("inlineCode",{parentName:"h2"},"/debug/vars")),(0,a.kt)("p",null,"This path prints ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/expvar/"},"expvar")," data,\nwhich currently contains only memory statistics."),(0,a.kt)("h2",{id:"health"},(0,a.kt)("inlineCode",{parentName:"h2"},"/health")),(0,a.kt)("p",null,"Prints ",(0,a.kt)("inlineCode",{parentName:"p"},"OK"),"."),(0,a.kt)("h2",{id:"apiv1config"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/config")),(0,a.kt)("p",null,"Prints ",(0,a.kt)("inlineCode",{parentName:"p"},"poller")," config, uptime and plugins."),(0,a.kt)("p",null,"The empty ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," list under ",(0,a.kt)("inlineCode",{parentName:"p"},"poller")," represents configured and loaded ",(0,a.kt)("inlineCode",{parentName:"p"},"*.so"),"\nshared-object plugins. These are rare and that list will almost always be empty."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl unifi.poller:37288/api/v1/config | jq .\n{\n  "arch": "linux amd64",\n  "branch": "dn2_events",\n  "built": "2020-08-17T04:20:00Z",\n  "cpus": 16,\n  "gid": 0,\n  "gover": "go1.14.4",\n  "inputs": {\n    "unifi": {\n      "name": "unifi",\n      "version": "v0.0.9",\n      "path": "github.com/unifi-poller/inputunifi"\n    }\n  },\n  "malloc": 9353240,\n  "memsys": 75055360,\n  "mtalloc": 33876272,\n  "numgc": 1234,\n  "outputs": {\n    "influxdb": {\n      "name": "influxdb",\n      "version": "v0.0.11",\n      "path": "github.com/unifi-poller/influxunifi"\n    },\n    "loki": {\n      "name": "loki",\n      "version": "v0.0.1",\n      "path": "github.com/unifi-poller/lokiunifi"\n    },\n    "prometheus": {\n      "name": "prometheus",\n      "version": "v0.0.10",\n      "path": "github.com/unifi-poller/promunifi"\n    }\n  },\n  "pid": 1,\n  "poller": {\n    "plugins": [],\n    "debug": true,\n    "quiet": false\n  },\n  "uid": 0,\n  "uptime": 1234,\n  "version": "2.0.2-999"\n}\n')),(0,a.kt)("h2",{id:"apiv1configplugins"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/config/plugins")),(0,a.kt)("p",null,"Prints list of plugins only. Output and Input. These are also in ",(0,a.kt)("inlineCode",{parentName:"p"},"/config")," (above)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl unifi.poller:37288/api/v1/config/plugins | jq .\n{\n  "inputs": {\n    "unifi": {\n      "name": "unifi",\n      "version": "v0.0.9",\n      "path": "github.com/unifi-poller/inputunifi"\n    }\n  },\n  "outputs": {\n    "influxdb": {\n      "name": "influxdb",\n      "version": "v0.0.11",\n      "path": "github.com/unifi-poller/influxunifi"\n    },\n    "loki": {\n      "name": "loki",\n      "version": "v0.0.1",\n      "path": "github.com/unifi-poller/lokiunifi"\n    },\n    "prometheus": {\n      "name": "prometheus",\n      "version": "v0.0.10",\n      "path": "github.com/unifi-poller/promunifi"\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"apiv1outputoutput"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/output/<output>")),(0,a.kt)("p",null,"Prints configuration for ",(0,a.kt)("inlineCode",{parentName:"p"},"<output>")," output plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -s unifi.poller:37288/api/v1/output/Loki | jq .\n{\n  "disable": false,\n  "verify_ssl": false,\n  "url": "http://loki:3100",\n  "user": "",\n  "pass": "false",\n  "tenant_id": "",\n  "interval": {\n    "Duration": 120000000000\n  },\n  "timeout": {\n    "Duration": 10000000000\n  }\n}\n')),(0,a.kt)("h2",{id:"apiv1outputoutputeventgroups"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/output/<output>/eventgroups")),(0,a.kt)("p",null,"Prints all event-groups present for the requested output plugin.\nOutput plugins currently only have one event group but there\nis nothing limiting them from adding more."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -s unifi.poller:37288/api/v1/output/Loki/eventgroups\n["Loki"]\n\n$ curl -s unifi.poller:37288/api/v1/output/Prometheus/eventgroups\n["Prometheus"]\n\n$ curl -s unifi.poller:37288/api/v1/output/WebServer/eventgroups\n["WebServer"]\n\n$ curl -s unifi.poller:37288/api/v1/output/InfluxDB/eventgroups\n["InfluxDB"]\n')),(0,a.kt)("h2",{id:"apiv1outputoutputeventsgroup"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/output/<output>/events/<group>")),(0,a.kt)("p",null,"Prints events specific to the requested output and group.\nLooks like output plugin events with one less dictionary."),(0,a.kt)("h2",{id:"apiv1outputoutputevents"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/output/<output>/events")),(0,a.kt)("p",null,"Prints all events for the specified plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -s unifi.poller:37288/api/v1/output/Loki/events | jq .\n{\n  "Loki": {\n    "latest": "2020-07-03T04:05:58.656262803-07:00",\n    "events": [\n      {\n        "ts": "2020-07-03T03:09:58.376113474-07:00",\n        "msg": "Loki Event collection started, interval: 2m0s, URL: http://loki:3100",\n        "tags": {\n          "type": "info"\n        }\n      },\n      {\n        "ts": "2020-07-03T04:05:58.656262803-07:00",\n        "msg": "Events sent to Loki. Event: 0, IDS: 0, Alarm: 0, Anomaly: 0, Dur: 280ms",\n        "tags": {\n          "type": "info"\n      }\n    }\n  ]\n')),(0,a.kt)("h2",{id:"apiv1inputinput"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/input/<input>")),(0,a.kt)("p",null,"Prints configuration for ",(0,a.kt)("inlineCode",{parentName:"p"},"<input>")," input plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -s unifi.poller:37288/api/v1/input/unifi | jq .\n{\n  "defaults": {\n    "verify_ssl": false,\n    "save_anomalies": false,\n    "save_alarms": false,\n    "save_events": false,\n    "save_ids": false,\n    "save_dpi": false,\n    "hash_pii": false,\n    "save_sites": true,\n    "user": "unifipoller",\n    "pass": "true",\n    "url": "https://127.0.0.1:8443",\n    "sites": [\n      "all"\n    ]\n  },\n  "disable": false,\n  "dynamic": false,\n  "controllers": [\n    {\n      "verify_ssl": false,\n      "save_anomalies": true,\n      "save_alarms": true,\n      "save_events": true,\n      "save_ids": true,\n      "save_dpi": true,\n      "hash_pii": false,\n      "save_sites": true,\n      "user": "unifipoller",\n      "pass": "true",\n      "url": "https://unifi-controller:8443",\n      "sites": [\n        "all"\n      ],\n      "id": "572e0211-a02a-4d09-b6a5-bad63fb76f1c"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"apiv1inputinputeventgroups"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/input/<input>/eventgroups")),(0,a.kt)("p",null,"Prints all event-groups present for the requested input plugin.\nCurrently the ",(0,a.kt)("inlineCode",{parentName:"p"},"unifi")," input plugin has one group for the plugin\nitself, and four groups for each configured site. The\nfour groups are ",(0,a.kt)("inlineCode",{parentName:"p"},"alarms"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"events"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ids"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"anomalies"),", and each\nis prefixed with the site ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -s unifi.poller:37288/api/v1/input/unifi/eventgroups | jq .\n[\n"unifi",\n"574e86664333ffb999a2683f_alarms",\n"574e86664333ffb999a2683f_events",\n"574e86664333ffb999a2683f_ids",\n"574e86664333ffb999a2683f_anomalies"\n]\n')),(0,a.kt)("h2",{id:"apiv1inputinputeventgroupssiteid"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/input/<input>/eventgroups/<siteID>")),(0,a.kt)("p",null,"Prints all event-groups present for the requested input plugin and siteID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -s unifi.poller:37288/api/v1/input/unifi/eventgroups/574e86664333ffb999a2683f | jq .\n[\n"574e86664333ffb999a2683f_alarms",\n"574e86664333ffb999a2683f_events",\n"574e86664333ffb999a2683f_ids",\n"574e86664333ffb999a2683f_anomalies"\n]\n')),(0,a.kt)("h2",{id:"apiv1inputinputeventsgroup"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/input/<input>/events/<group>")),(0,a.kt)("p",null,"Prints events specific to the requested input and group."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'curl -s unifi.poller:37288/api/v1/input/unifi/events/unifi | jq .\n{\n  "latest": "2020-07-04T00:30:04.461330789-07:00",\n  "events": [\n    {\n      "ts": "2020-07-04T00:28:31.824048428-07:00",\n      "msg": "Requested https://unifi-controller:8443/api/s/default/stat/anomalies?scale=hourly&end=1593847711000: elapsed 7ms, returned 421 bytes",\n      "tags": {\n        "type": "debug"\n      }\n    },\n    {\n      "ts": "2020-07-04T00:32:04.45699961-07:00",\n      "msg": "Unmarshalling Device Type: usw, site Home (default) ",\n      "tags": {\n        "type": "debug"\n      }\n    },\n    {\n      "ts": "2020-07-04T00:32:04.461339777-07:00",\n      "msg": "Unmarshalling Device Type: uap, site Home (default) ",\n      "tags": {\n        "type": "debug"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"apiv1inputinputevents"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/input/<input>/events")),(0,a.kt)("p",null,"Prints all events for the specified plugin.\nLooks like output plugin events."),(0,a.kt)("h2",{id:"apiv1inputinputsites"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/input/<input>/sites")),(0,a.kt)("p",null,"Prints the most recently collected sites and some meta data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -s unifi.poller:37288/api/v1/input/unifi/sites | jq .\n[\n  {\n    "id": "574e86664333ffb999a2683f",\n    "name": "default",\n    "desc": "Home",\n    "source": "https://unifi-controller:8443",\n    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c"\n  }\n]\n')),(0,a.kt)("h2",{id:"apiv1inputinputclients"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/input/<input>/clients")),(0,a.kt)("p",null,"Prints the most recently collected clients and some meta data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -s unifi.poller:37288/api/v1/input/unifi/clients | jq .\n[\n  {\n    "rx_bytes": 2273696,\n    "tx_bytes": 4029181,\n    "name": "RMPROPLUS-43-3c-88",\n    "site_id": "574e86664333ffb999a2683f",\n    "source": "https://unifi-controller:8443",\n    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",\n    "mac": "34:ea:34:43:3c:88",\n    "ip": "192.168.1.17",\n    "type": "wireless",\n    "device_mac": "b4:fb:e4:d2:74:39",\n    "since": "2020-03-29T04:37:32-07:00",\n    "last": "2020-07-03T04:10:36-07:00"\n  },\n  {\n    "rx_bytes": 1530352814,\n    "tx_bytes": 205398316,\n    "name": "ubuntu",\n    "site_id": "574e86664333ffb999a2683f",\n    "source": "https://unifi-controller:8443",\n    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",\n    "mac": "52:54:00:9a:ea:9e",\n    "ip": "",\n    "type": "wired",\n    "device_mac": "80:2a:a8:5d:86:32",\n    "since": "2020-05-03T04:37:21-07:00",\n    "last": "2020-07-03T04:10:46-07:00"\n  }\n]\n')),(0,a.kt)("h2",{id:"apiv1inputinputclientssiteid"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/input/<input>/clients/<siteID>")),(0,a.kt)("p",null,"Prints the most recently collected clients from a specific site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -s unifi.poller:37288/api/v1/input/unifi/clients/574e86664333ffb999a2683f | jq .\n# Looks the same as above.\n")),(0,a.kt)("h2",{id:"apiv1inputinputdevices"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/input/<input>/devices")),(0,a.kt)("p",null,"Prints the most recently collected devices and some meta data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -s unifi.poller:37288/api/v1/input/unifi/devices | jq .\n[\n  {\n    "clients": 3,\n    "uptime": 4835552,\n    "name": "wap-lower",\n    "site_id": "574e86664333ffb999a2683f",\n    "source": "https://unifi-controller:8443",\n    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",\n    "mac": "80:2a:a8:11:ea:78",\n    "ip": "192.168.1.14",\n    "type": "uap",\n    "model": "U7PG2",\n    "version": "4.3.13.11253"\n  },\n  {\n    "clients": 14,\n    "uptime": 4834600,\n    "name": "wap-upper",\n    "site_id": "574e86664333ffb999a2683f",\n    "source": "https://unifi-controller:8443",\n    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",\n    "mac": "b4:fb:e4:d2:46:93",\n    "ip": "192.168.1.215",\n    "type": "uap",\n    "model": "U7NHD",\n    "version": "4.3.13.11253"\n  },\n  {\n    "clients": 2,\n    "uptime": 4834344,\n    "name": "wap-wall",\n    "site_id": "574e86664333ffb999a2683f",\n    "source": "https://unifi-controller:8443",\n    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",\n    "mac": "74:83:c2:d4:22:d3",\n    "ip": "192.168.1.190",\n    "type": "uap",\n    "model": "UHDIW",\n    "version": "4.3.13.11253"\n  },\n  {\n    "clients": 19,\n    "uptime": 4834869,\n    "name": "switch",\n    "site_id": "574e86664333ffb999a2683f",\n    "source": "https://unifi-controller:8443",\n    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",\n    "mac": "80:2a:a8:5d:68:23",\n    "ip": "192.168.1.7",\n    "type": "usw",\n    "model": "US48P750",\n    "version": "4.3.13.11253"\n  },\n  {\n    "clients": 26,\n    "uptime": 4921914,\n    "name": "gateway",\n    "site_id": "574e86664333ffb999a2683f",\n    "source": "https://unifi-controller:8443",\n    "controller": "572e0211-a02a-4d09-b6a5-bad63fb76f1c",\n    "mac": "74:83:c2:1a:53:93",\n    "ip": "67.181.75.120",\n    "type": "ugw",\n    "model": "UGW4",\n    "version": "4.4.51.5287926"\n  }\n]\n')),(0,a.kt)("h2",{id:"apiv1inputinputdevicessiteid"},(0,a.kt)("inlineCode",{parentName:"h2"},"/api/v1/input/<input>/devices/<siteID>")),(0,a.kt)("p",null,"Prints the most recently collected devices from a specific site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -s unifi.poller:37288/api/v1/input/unifi/devices/574e86664333ffb999a2683f | jq .\n# Looks the same as above.\n")))}c.isMDXComponent=!0}}]);