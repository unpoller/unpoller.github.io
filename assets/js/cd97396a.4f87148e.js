"use strict";(self.webpackChunkpollerdox=self.webpackChunkpollerdox||[]).push([[688],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(3117),o=(r(7294),r(3905));const a={id:"otherguides",title:"Other Guides"},i=void 0,l={unversionedId:"poller/otherguides",id:"poller/otherguides",title:"Other Guides",description:"Many folks in the community have contributed their own installation guides for various platforms.",source:"@site/docs/poller/otherguides.md",sourceDirName:"poller",slug:"/poller/otherguides",permalink:"/docs/poller/otherguides",draft:!1,tags:[],version:"current",frontMatter:{id:"otherguides",title:"Other Guides"},sidebar:"someSidebar",previous:{title:"FAQs",permalink:"/docs/poller/faq"},next:{title:"Contributors",permalink:"/docs/poller/contributors"}},p={},u=[],s={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Many folks in the community have contributed their own installation guides for various platforms.\nYou can find some of them below. If you created a guide and want it listed here,\nplease let us know!"),(0,o.kt)("h1",{id:"raspberry-pi"},"Raspberry Pi"),(0,o.kt)("p",null,"If you'd like a simple step-by-step guide, written by a UniFi Poller user for implementation on\nDocker on a Raspberry Pi then have a look at this\n",(0,o.kt)("a",{parentName:"p",href:"https://nerdygeek.uk/2020/06/18/unifi-poller-an-easy-step-by-step-guide/"},"nerdygeek guide"),"!"),(0,o.kt)("p",null,"Note that a Pi is not recommended for use in a long term context -\nalthough many users have started this way, the amount and type of data collection\nis better done on a more capable server."),(0,o.kt)("p",null,"Here's another RPi guide (in video form) from MacTelecom:\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=OaKcQUb2gYc"},"https://www.youtube.com/watch?v=OaKcQUb2gYc")),(0,o.kt)("h1",{id:"more-guides"},"More Guides"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.eduitguy.com/2020/04/16/unifi-poller-amazing/"},"https://www.eduitguy.com/2020/04/16/unifi-poller-amazing/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jaas.ai/u/unifi-poller-charmers/unifi-poller"},"https://jaas.ai/u/unifi-poller-charmers/unifi-poller")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.neteye-blog.com/2019/03/monitoring-a-ubiquity-unifi-wireless-controller/"},"https://www.neteye-blog.com/2019/03/monitoring-a-ubiquity-unifi-wireless-controller/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.robertcampbell.dev/2020/07/installing-unifi-poller-influxdb-and.html"},"https://www.robertcampbell.dev/2020/07/installing-unifi-poller-influxdb-and.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.frankovic.net/2020/10/04/grafana-on-azure-part-2/"},"https://blog.frankovic.net/2020/10/04/grafana-on-azure-part-2/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bensonk.net/networking/2020/10/09/welcome-to-jekyll.html"},"https://bensonk.net/networking/2020/10/09/welcome-to-jekyll.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.johnminadeo.com/unifi-poller-setup-and-configuration/"},"https://blog.johnminadeo.com/unifi-poller-setup-and-configuration/"))))}c.isMDXComponent=!0}}]);