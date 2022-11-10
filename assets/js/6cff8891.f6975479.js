"use strict";(self.webpackChunkpollerdox=self.webpackChunkpollerdox||[]).push([[291],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),h=r,m=c["".concat(i,".").concat(h)]||c[h]||p[h]||a;return o?n.createElement(m,l(l({ref:t},d),{},{components:o})):n.createElement(m,l({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3594:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(3117),r=(o(7294),o(3905));const a={id:"common",title:"Common Solutions"},l=void 0,s={unversionedId:"help/common",id:"help/common",title:"Common Solutions",description:"Below are some common solutions and possible symptoms.",source:"@site/docs/help/common.md",sourceDirName:"help",slug:"/help/common",permalink:"/docs/help/common",draft:!1,tags:[],version:"current",frontMatter:{id:"common",title:"Common Solutions"},sidebar:"someSidebar",previous:{title:"API",permalink:"/docs/advanced/api"},next:{title:"Getting Help",permalink:"/docs/help/"}},i={},u=[{value:"Empty Dashboards",id:"empty-dashboards",level:3},{value:"Check the port used to connect to the controller",id:"check-the-port-used-to-connect-to-the-controller",level:3},{value:"Run Updated Components",id:"run-updated-components",level:3},{value:"Check Log Files",id:"check-log-files",level:3},{value:"Double-Check Data Source",id:"double-check-data-source",level:3},{value:"Double-Check Passwords",id:"double-check-passwords",level:3},{value:"Dashboard Variables",id:"dashboard-variables",level:3},{value:"InfluxDB Write Errors",id:"influxdb-write-errors",level:3}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Below are some common solutions and possible symptoms."),(0,r.kt)("h3",{id:"empty-dashboards"},"Empty Dashboards"),(0,r.kt)("p",null,"The number one cause of empty dashboards is an old version of InfluxDB.\nMake sure you are on version 1.7.x or 1.8.x. ",(0,r.kt)("strong",{parentName:"p"},"Use of 1.6.x will cause empty dashboards.")),(0,r.kt)("p",null,"If your DPI dashboards are empty ",(0,r.kt)("inlineCode",{parentName:"p"},"DPI")," is like still disabled.\nIt must be enabled in both the poller config and in your UniFi controller. Two spots."),(0,r.kt)("h3",{id:"check-the-port-used-to-connect-to-the-controller"},"Check the port used to connect to the controller"),(0,r.kt)("p",null,"It should be ",(0,r.kt)("inlineCode",{parentName:"p"},"8443")," if you are using a non-unifios interface (eg the original Cloudkey with\nold firmware) and ",(0,r.kt)("inlineCode",{parentName:"p"},"443")," (or just omitted) if you are using a unifios device (UDM-Pro, UDM, UXG, etc)"),(0,r.kt)("h3",{id:"run-updated-components"},"Run Updated Components"),(0,r.kt)("p",null,"Running out of date components may result in missing data, or errors from Grafana."),(0,r.kt)("p",null,"Make sure you're running up-to-date software. InfluxDB must be at least 1.7.x.\nVersion 1.7.9 is out and it works great. Grafana 6.5.2 also works great,\nand any version older than 6.4.x is going to give you problems.\nUniFi Poller should be at least version 1.6.3 if you are seeking help."),(0,r.kt)("h3",{id:"check-log-files"},"Check Log Files"),(0,r.kt)("p",null,"UniFi Poller has great logs that help when troubleshooting.\nIf you're seeking help please enable debug mode and copy/paste some of your logs.\nAll of this data helps figure out what's going on.\nDebug mode can be enable in up.conf or by passing the env variable UP_POLLER_DEBUG=true."),(0,r.kt)("p",null,"Grafana, Prometheus and InfluxDB also have logs files, but they're probably less useful.\nYou can still check them for errors."),(0,r.kt)("p",null,"If you are a Docker user then check out ",(0,r.kt)("a",{parentName:"p",href:"https://dozzle.dev/"},"Dozzle")),(0,r.kt)("h3",{id:"double-check-data-source"},"Double-Check Data Source"),(0,r.kt)("p",null,"Many users make typos in their data source. Sometimes on the URLs, sometimes on the passwords.\nThis will cause data to not show up and the dashboards may provide red error messages.\nMost data sources do not have paths; just ",(0,r.kt)("inlineCode",{parentName:"p"},"http://ip:port"),"."),(0,r.kt)("h3",{id:"double-check-passwords"},"Double-Check Passwords"),(0,r.kt)("p",null,"The default username used to be ",(0,r.kt)("inlineCode",{parentName:"p"},"influxdb"),", but has been changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"unifipoller"),".\nKeep this in mind when setting things up. Can't tell you how many times someone had\nissues only to find a bad password. Check it, check it again; log in with it yourself.\nThe poller log should give you clues if this is the problem."),(0,r.kt)("h3",{id:"dashboard-variables"},"Dashboard Variables"),(0,r.kt)("p",null,'If your dashboards have some data, but it looks like most of it is missing,\nthis often indicates a problem with the variables, or the data source the variables are using.\nEdit the affected dashboards: go to Settings then to Variables, and click on the variables.\nMake sure they have the correct data source listed, and check for "preview of values" to\nmake sure things are showing up. Let me know if you see values when you make a report.'),(0,r.kt)("h3",{id:"influxdb-write-errors"},"InfluxDB Write Errors"),(0,r.kt)("p",null,"If you're getting errors like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-none"},'[ERROR] infdb.Write(bp): {"error":"field type conflict"}\n[ERROR] infdb.Write(bp): {"error":"partial write: field type conflict: input field "tx_power" on measurement "uap_radios" is type integer, already exists as type float dropped="}\n')),(0,r.kt)("p",null,"This usually indicates a bug was fixed and the resulting fixed has caused an incompatibility\nwith your existing InfluxDB database. This could also indicate you've found a new bug.\nPlease open an issue if you are running the latest version and dropping the database\ndid not solve the error. There are generally two fixes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Downgrade. Do not upgrade to a new version."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"DROP")," and re-",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE")," the InfluxDB database.")))}p.isMDXComponent=!0}}]);