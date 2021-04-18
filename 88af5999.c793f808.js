(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,b=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return t?o.a.createElement(b,s(s({ref:n},c),{},{components:t})):o.a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(7),i=(t(0),t(106)),r={id:"loki",title:"Loki"},s={unversionedId:"dependencies/loki",id:"dependencies/loki",isDocsHomePage:!1,title:"Loki",description:"Poller optionally provides support for writing UniFi's Events, Anomalies, Alarms and IDS data to Loki.",source:"@site/docs/dependencies/loki.md",slug:"/dependencies/loki",permalink:"/docs/dependencies/loki",version:"current",sidebar:"someSidebar",previous:{title:"Prometheus",permalink:"/docs/dependencies/prometheus"},next:{title:"InfluxDB",permalink:"/docs/dependencies/influxdb"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Advanced",id:"advanced",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Poller optionally provides support for writing UniFi's Events, Anomalies, Alarms and IDS data to Loki.\nThere are no dashboards for this data, but it's pretty simple. Just add a \"Logs\" panel.\nYou can also use this data as an Annotation source."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Loki support was added in UniFi Poller v2.0.2."))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Installation of Loki is documented ",Object(i.b)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/installation/"},"here"),".\nIf you're only using Poller, you don't need Promtail."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Just add the Loki URL to your poller config to enable this output plugin."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-toml"},'[loki]\n  url = "http://127.0.0.1:3100"\n')),Object(i.b)("p",null,"Use the UniFi input plugin settings to choose which logs to collect and save. Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-toml"},"[unifi.defaults]\n  save_ids       = true\n  save_events    = true\n  save_alarms    = true\n  save_anomalies = true\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Loki must be added as a data source to Grafana, and panels or annotations should be created with that data.\nGrafana Labs documents ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"https://grafana.com/docs/grafana/latest/datasources/loki/"},"Loki with Grafana usage")),".\nHere's a ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"https://grafana.com/blog/2020/04/08/loki-quick-tip-how-to-create-a-grafana-dashboard-for-searching-logs-using-loki-and-prometheus/"},"bonus blog post")),"\nabout using Loki with Grafana."))),Object(i.b)("h2",{id:"advanced"},"Advanced"),Object(i.b)("p",null,"The Loki output plugin has a few advanced settings that most folks won't use. These are their default values."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-toml"},'user       = ""\npass       = ""\nverify_ssl = false\ntenant_id  = ""\ninterval   = "2m"\ntimeout    = "10s"\n')),Object(i.b)("p",null,"You can set a user and pass if your Loki instance requires auth. This currently only supports Basic Auth.\nPlease open an ",Object(i.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/issues/"},"Issue")," if you need support for something\nelse. Alternatively you can pass the Tenant ID header directly by setting ",Object(i.b)("inlineCode",{parentName:"p"},"tenant_id"),".\nIf your Loki instance is using/behind an SSL proxy that has a valid SSL cert you may set ",Object(i.b)("inlineCode",{parentName:"p"},"verify_ssl")," to true.\nThe recommended interval is ",Object(i.b)("inlineCode",{parentName:"p"},"2m")," but anything from ",Object(i.b)("inlineCode",{parentName:"p"},"1m")," to ",Object(i.b)("inlineCode",{parentName:"p"},"15m")," should work fine.\nThe timeout is ",Object(i.b)("inlineCode",{parentName:"p"},"10s"),", adjust it if you get timeout errors."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose")," example below (using Loki and Prometheus) was kindly provided by a community member.\nThe Loki Docker logging driver if you don't have it installed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.0\'\nservices:\n  unifi-poller:\n    container_name: unifi-poller\n    environment:\n      UP_INFLUXDB_DISABLE: "true"\n      UP_LOKI_URL: http://log01.tylephony.com:3100\n      UP_POLLER_DEBUG: "false"\n      UP_PROMETHEUS_HTTP_LISTEN: 0.0.0.0:9130\n      UP_PROMETHEUS_NAMESPACE: unifipoller\n      UP_UNIFI_DEFAULT_PASS: password\n      UP_UNIFI_DEFAULT_SAVE_ALARMS: "true"\n      UP_UNIFI_DEFAULT_SAVE_ANOMALIES: "true"\n      UP_UNIFI_DEFAULT_SAVE_DPI: "true"\n      UP_UNIFI_DEFAULT_SAVE_EVENTS: "true"\n      UP_UNIFI_DEFAULT_SAVE_IDS: "true"\n      UP_UNIFI_DEFAULT_SAVE_SITES: "true"\n      UP_UNIFI_DEFAULT_URL: https://unifi.tylephony.com:443\n      UP_UNIFI_DEFAULT_USER: unifipoller\n    image: golift/unifi-poller:2.0.2-beta1\n    logging:\n      driver: loki\n      options:\n        loki-url: http://log01.tylephony.com:3100/loki/api/v1/push\n    ports:\n    - 9130:9130/tcp\n    restart: always\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The above is a community-provided example."))))}p.isMDXComponent=!0}}]);