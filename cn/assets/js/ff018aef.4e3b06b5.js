"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[612],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=l(r),f=o,y=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(y,i(i({ref:e},p),{},{components:r})):n.createElement(y,i({ref:e},p))}));function y(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c[d]="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5920:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var n=r(3117),o=(r(7294),r(3905));const a={id:"intro",title:"\u524d\u8a00",slug:"/"},i=void 0,c={unversionedId:"intro",id:"intro",title:"\u524d\u8a00",description:"\u6b22\u8fce\u4f7f\u7528 HydraDX \u5b98\u65b9\u6587\u6863\uff01\u5728\u8fd9\u91cc\uff0c\u60a8\u53ef\u4ee5\u627e\u5230\u6709\u5173 HydraDX \u534f\u8bae\u7684\u5404\u79cd\u6709\u7528\u8d44\u6e90\u3002\u6211\u4eec\u7684\u76ee\u7684\u662f\u8ba9\u5b83\u6210\u4e3a\u4e00\u4e2a\u9002\u5408\u6240\u6709\u4eba\u7684\u597d\u5730\u65b9\uff0c\u6db5\u76d6\u666e\u901a\u8bbf\u5ba2\u3001\u9a8c\u8bc1\u4eba\u3001\u63d0\u540d\u4eba\u548c\u60f3\u8981\u5e2e\u52a9\u6784\u5efa HydraDX \u7684\u5f00\u53d1\u8005\u4e4b\u95f4\u7684\u65b9\u65b9\u9762\u9762\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/cn/",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/intro.md",tags:[],version:"current",frontMatter:{id:"intro",title:"\u524d\u8a00",slug:"/"},sidebar:"sidebar",next:{title:"Efficient Trading",permalink:"/cn/omnipool_trading"}},u={},l=[{value:"\u4ec0\u4e48\u662f HydraDX \uff1f",id:"what-is-hydradx",level:2}],p={toc:l};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6b22\u8fce\u4f7f\u7528 HydraDX \u5b98\u65b9\u6587\u6863\uff01\u5728\u8fd9\u91cc\uff0c\u60a8\u53ef\u4ee5\u627e\u5230\u6709\u5173 HydraDX \u534f\u8bae\u7684\u5404\u79cd\u6709\u7528\u8d44\u6e90\u3002\u6211\u4eec\u7684\u76ee\u7684\u662f\u8ba9\u5b83\u6210\u4e3a\u4e00\u4e2a\u9002\u5408\u6240\u6709\u4eba\u7684\u597d\u5730\u65b9\uff0c\u6db5\u76d6\u666e\u901a\u8bbf\u5ba2\u3001\u9a8c\u8bc1\u4eba\u3001\u63d0\u540d\u4eba\u548c\u60f3\u8981\u5e2e\u52a9\u6784\u5efa HydraDX \u7684\u5f00\u53d1\u8005\u4e4b\u95f4\u7684\u65b9\u65b9\u9762\u9762\u3002"),(0,o.kt)("p",null,"HydraDX \u662f\u793e\u533a\u9a71\u52a8\u7684\uff0c\u8fd9\u4e9b\u6587\u6863\u4e5f\u662f\u5982\u6b64\u3002\u6211\u4eec\u5f88\u9ad8\u5174\u770b\u5230\u60a8\u7684\u8d21\u732e\uff0c\u5b83\u53ef\u4ee5\u6709\u591a\u79cd\u65b9\u5f0f\u6765\u5448\u73b0\uff0c\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u64b0\u5199\u65b0\u6587\u7ae0\u6216\u7ffb\u8bd1\u73b0\u6709\u6587\u7ae0\u3002\u8bf7\u67e5\u770b\u6211\u4eec\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/galacticcouncil/HydraDX-docs"},"GitHub \u4ee3\u7801\u5e93"))," \u53ca ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/contributing"},"\u6295\u7a3f\u6307\u5357"))," \u3002"),(0,o.kt)("h2",{id:"what-is-hydradx"},"\u4ec0\u4e48\u662f HydraDX \uff1f"),(0,o.kt)("p",null,"HydraDX \u662f\u5efa\u7acb\u5728 Substrate \u4e0a\u7684\u8de8\u94fe\u6d41\u52a8\u6027\u534f\u8bae\u3002\u6211\u4eec\u7684\u4f7f\u547d\u662f\u901a\u8fc7\u5efa\u7acb\u9996\u4e2a\u590d\u5408\u8d44\u4ea7\u6d41\u52a8\u6027\u6c60 \u2014\u2014 HydraDX \u4e07\u80fd\u6c60\uff0c\u4e3a\u6240\u6709\u52a0\u5bc6\u8d44\u4ea7\u63d0\u4f9b\u65e0\u969c\u788d\u7684\u6d41\u52a8\u6027\u3002\u5728\u4e07\u80fd\u6c60\u4e2d\uff0c\u5404\u79cd\u8d44\u4ea7\u901a\u8fc7\u4f7f\u7528\u6211\u4eec\u7684\u539f\u751f\u4ee4\u724c HDX \u4f5c\u4e3a\u786e\u5b9a\u5176\u76f8\u5bf9\u4ef7\u503c\u7684\u6307\u6807\uff0c\u6765\u76f8\u4e92\u5b9a\u4ef7\u3002\u6709\u4e86\u4e07\u80fd\u6c60\uff0cHydraDX \u7a81\u7834\u4e86\u8d44\u4ea7\u4f7f\u7528\u5b64\u7acb\u6c60\u6210\u5bf9\u4ea4\u6613\u7684\u4f20\u7edf\u6982\u5ff5\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u6211\u4eec\u5f88\u9ad8\u5174\u6210\u4e3a Polkadot \u751f\u6001\u7cfb\u7edf\u7684\u4e00\u90e8\u5206\uff0c\u5e76\u671f\u5f85\u6210\u4e3a\u6240\u6709\u5efa\u7acb\u5728 Substrate \u4e0a\u7684\u8d44\u4ea7\u6d41\u52a8\u6027\u7684\u9996\u9009\u63d0\u4f9b\u8005\u3002"))}d.isMDXComponent=!0}}]);