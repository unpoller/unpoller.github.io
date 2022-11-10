"use strict";(self.webpackChunkpollerdox=self.webpackChunkpollerdox||[]).push([[987],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,h=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},0:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={id:"faq",title:"FAQs"},l=void 0,i={unversionedId:"poller/faq",id:"poller/faq",title:"FAQs",description:"What are the requirements?",source:"@site/docs/poller/faq.md",sourceDirName:"poller",slug:"/poller/faq",permalink:"/docs/poller/faq",draft:!1,tags:[],version:"current",frontMatter:{id:"faq",title:"FAQs"},sidebar:"someSidebar",previous:{title:"How it works",permalink:"/docs/poller/howitworks"},next:{title:"Other Guides",permalink:"/docs/poller/otherguides"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What are the requirements?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Grafana 7.4.0+ is recommended. Grafana 7.x or newer is required."),(0,o.kt)("li",{parentName:"ul"},"InfluxDB 1.7.7 or newer is needed, if you choose to use InfluxDB."),(0,o.kt)("li",{parentName:"ul"},"Prometheus 2.x if you choose to use Prometheus.")),(0,o.kt)("admonition",{title:"InfluxDB 2.0",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"UniFi Poller does not currently work with versions of InfluxDB newer than 1.8.x.")),(0,o.kt)("p",null,"UniFi Poller has not been fully tested with InfluxDB 2.0 or newer. While InfluxDB\n2.0 may be able to scrape metrics from Poller, there are no pre-built dashboards\navailable to display the data."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Here's a great idea - show me the amount of WAN data I've used this month!")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Yes, it is a great idea. Sadly, this information is not produced by the UniFi controller.\nHowever, it should be possible to calculate it from the data already stored and work\nis on-going to produce something useful."),(0,o.kt)("li",{parentName:"ul"},"If you have a method of doing this already then please share!")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why is UniFi Poller showing me XXXX?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Almost all of the time this is because it is what the controller is telling it!\nAlthough the UniFi controller has many strengths, it is not flawless,\nand the data that UniFi Poller shows on Grafana is only what it is given.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UniFi Poller is showing me YYYY - what does this actually mean?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Because UniFi Poller just picks up data from the controller using the API,\nthe only way of getting an accurate answer about what is shown is by asking UI themselves.\nGiven that they don't officially support the API there may be little chance of an answer")))}p.isMDXComponent=!0}}]);