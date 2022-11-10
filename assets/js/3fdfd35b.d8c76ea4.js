"use strict";(self.webpackChunkpollerdox=self.webpackChunkpollerdox||[]).push([[672],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),f=l,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(3117),l=(t(7294),t(3905));const i={id:"influxdb",title:"InfluxDB"},a=void 0,o={unversionedId:"dependencies/influxdb",id:"dependencies/influxdb",title:"InfluxDB",description:"This page provides simple instructions on how to install and maintain InfluxDB and Grafana.",source:"@site/docs/dependencies/influxdb.md",sourceDirName:"dependencies",slug:"/dependencies/influxdb",permalink:"/docs/dependencies/influxdb",draft:!1,tags:[],version:"current",frontMatter:{id:"influxdb",title:"InfluxDB"},sidebar:"someSidebar",previous:{title:"Loki",permalink:"/docs/dependencies/loki"},next:{title:"Webserver",permalink:"/docs/advanced/webserver"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"CentOS 7",id:"centos-7",level:3},{value:"CentOS 8 / RHEL 8",id:"centos-8--rhel-8",level:3},{value:"Ubuntu 18.04",id:"ubuntu-1804",level:3},{value:"macOS",id:"macos",level:3},{value:"Docker",id:"docker",level:3},{value:"Post Setup",id:"post-setup",level:2}],p={toc:u};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page provides simple instructions on how to install and maintain InfluxDB and Grafana."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"InfluxDB 1.7.7 or new is required. Version 1.8.4 is recommended.")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Do not use InfluxDB 2.0 or greater at this time."),"\nThere are no pre-built graphs to display the data it collects.")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("h3",{id:"centos-7"},"CentOS 7"),(0,l.kt)("p",null,"Provided by community: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/issues/30"},"https://github.com/unifi-poller/unifi-poller/issues/30")),(0,l.kt)("h3",{id:"centos-8--rhel-8"},"CentOS 8 / RHEL 8"),(0,l.kt)("p",null,"Provided by community: ",(0,l.kt)("a",{parentName:"p",href:"https://computingforgeeks.com/how-to-install-influxdb-on-rhel-8-centos-8/"},"https://computingforgeeks.com/how-to-install-influxdb-on-rhel-8-centos-8/")),(0,l.kt)("h3",{id:"ubuntu-1804"},"Ubuntu 18.04"),(0,l.kt)("p",null,"These directions came ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/issues/26"},"from here"),"."),(0,l.kt)("p",null,"Install:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://repos.influxdata.com/ubuntu bionic stable" | sudo tee /etc/apt/sources.list.d/influxdb.list\nsudo curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -\nsudo apt -y update\nsudo apt install -y influxdb\n')),(0,l.kt)("p",null,"Start: ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo systemctl start influxdb")),(0,l.kt)("h3",{id:"macos"},"macOS"),(0,l.kt)("p",null,"You need ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install influxdb\nbrew services restart influxdb\n")),(0,l.kt)("h3",{id:"docker"},"Docker"),(0,l.kt)("p",null,"Pull the container and run InfluxDB like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull influxdb:1.8\ndocker run -p 8086:8086 \\\n-e INFLUXDB_DB=unifi \\\n-e INFLUXDB_ADMIN_USER=unifi \\\n-e INFLUXDB_ADMIN_PASSWORD=changeme \\\n-v /YOURLOCALPATH/influxdb:/var/lib/influxdb \\\ninfluxdb:1.8\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"YOURLOCALPATH")," with a location for the data InfluxDB needs to write to disk."),(0,l.kt)("h2",{id:"post-setup"},"Post Setup"),(0,l.kt)("p",null,"Although InfluxDB is up and running, you may need to set up the database which was referenced in the configuration.\nThis shouldn't be needed if you followed the ",(0,l.kt)("a",{parentName:"p",href:"../install/dockercompose"},"Docker Compose")," instructions;\nhowever, you may wish to add in the retention policy as shown below."),(0,l.kt)("p",null,"Get shell access to wherever it is and run the command ",(0,l.kt)("inlineCode",{parentName:"p"},"influx")),(0,l.kt)("p",null,"Create the database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-none"},"CREATE DATABASE unifi\nUSE unifi\nCREATE USER unifipoller WITH PASSWORD 'unifipoller' WITH ALL PRIVILEGES\nGRANT ALL ON unifi TO unifipoller\n")),(0,l.kt)("p",null,"Optionally - and this is a very sensible idea - set limits on how much data you wish to retain\nby implementing a retention policy. For example, to hold data for 32 days add the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-none"},"CREATE RETENTION POLICY retention_policy ON unifi DURATION 32d REPLICATION 1\n")))}d.isMDXComponent=!0}}]);