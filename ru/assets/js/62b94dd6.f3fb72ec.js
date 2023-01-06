"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[306],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return y}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),i=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},u=function(t){var e=i(t.components);return n.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=i(r),f=o,y=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(y,p(p({ref:e},u),{},{components:r})):n.createElement(y,p({ref:e},u))}));function y(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,p=new Array(a);p[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:o,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7838:function(t,e,r){r.r(e),r.d(e,{assets:function(){return i},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905)),a=r(4996);const p={id:"polkadotjs_apps_public",title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043d\u043e\u0434\u0435"},l=void 0,c={unversionedId:"polkadotjs_apps_public",id:"polkadotjs_apps_public",title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043d\u043e\u0434\u0435",description:"\u0415\u0441\u0442\u044c \u0434\u0432\u0430 \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0443\u0437\u043b\u0430 RPC, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f HydraDX \u0438 \u043d\u0430\u0448\u0438\u043c\u0438 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430\u043c\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0443\u0437\u043b\u044b \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441\u043e Snakenet. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Polkadot/apps, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0438\u0436\u0435:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/polkadotjs_apps_public.md",sourceDirName:".",slug:"/polkadotjs_apps_public",permalink:"/ru/polkadotjs_apps_public",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/polkadotjs_apps_public.md",tags:[],version:"current",frontMatter:{id:"polkadotjs_apps_public",title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043d\u043e\u0434\u0435"},sidebar:"sidebar",previous:{title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 HydraDX",permalink:"/ru/polkadotjs_apps_local"},next:{title:"Introduction",permalink:"/ru/democracy_intro"}},i={},u=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0443\u0437\u043b\u0443 RPC \u0432\u0440\u0443\u0447\u043d\u0443\u044e",id:"connect-manually-to-an-rpc-node",level:2}],s={toc:u};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0415\u0441\u0442\u044c \u0434\u0432\u0430 \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0443\u0437\u043b\u0430 RPC, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f HydraDX \u0438 \u043d\u0430\u0448\u0438\u043c\u0438 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430\u043c\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0443\u0437\u043b\u044b \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441\u043e Snakenet. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Polkadot/apps, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0438\u0436\u0435:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/explorer"},"RPC node hosted by HydraDX"))),(0,o.kt)("h2",{id:"connect-manually-to-an-rpc-node"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0443\u0437\u043b\u0443 RPC \u0432\u0440\u0443\u0447\u043d\u0443\u044e"),(0,o.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 RPC \u0432\u0440\u0443\u0447\u043d\u0443\u044e, \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot/apps")," \u0438 \u0449\u0435\u043b\u043a\u043d\u0438\u0442\u0435 \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u043b\u0435\u0432\u043e\u043c \u0443\u0433\u043b\u0443, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0435\u0442\u044c."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,a.Z)("/polkadotjs-apps/PolkadotJS-APPS-1.png")})),(0,o.kt)("p",null,"\u0429\u0435\u043b\u043a\u043d\u0438\u0442\u0435 \u043f\u043e ",(0,o.kt)("strong",{parentName:"p"},"LIVE NETWORKS")," \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 ",(0,o.kt)("strong",{parentName:"p"},"HydraDX"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,a.Z)("/polkadotjs-apps/public-1.png")})),(0,o.kt)("p",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0443\u0437\u043b\u043e\u0432 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,o.kt)("strong",{parentName:"p"},"Switch"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,a.Z)("/polkadotjs-apps/public-2.png")})),(0,o.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443 \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 RPC."))}d.isMDXComponent=!0}}]);