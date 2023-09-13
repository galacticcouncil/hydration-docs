"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[315],{3905:function(e,t,o){o.d(t,{Zo:function(){return i},kt:function(){return f}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},i=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return o?a.createElement(f,l(l({ref:t},i),{},{components:o})):a.createElement(f,l({ref:t},i))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<r;p++)l[p]=o[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7465:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return i}});var a=o(3117),n=(o(7294),o(3905)),r=o(4996);const l={id:"polkadotjs_apps_local",title:"Conectarse a un nodo local"},c=void 0,s={unversionedId:"polkadotjs_apps_local",id:"polkadotjs_apps_local",title:"Conectarse a un nodo local",description:"Puede usar Polkadot/apps para conectarse a su nodo HydraDX local. Para este prop\xf3sito, necesita tener acceso al puerto 9944 que se usa para conexiones de websocket RPC.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/polkadotjs_apps_local.md",sourceDirName:".",slug:"/polkadotjs_apps_local",permalink:"/es/polkadotjs_apps_local",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/polkadotjs_apps_local.md",tags:[],version:"current",frontMatter:{id:"polkadotjs_apps_local",title:"Conectarse a un nodo local"},sidebar:"sidebar",previous:{title:"Establecer tu Identidad",permalink:"/es/identity"},next:{title:"Conectarse a un nodo p\xfablico",permalink:"/es/polkadotjs_apps_public"}},p={},i=[{value:"Accediendo a su nodo local usando Polkadot/apps",id:"accessing-your-local-node-using-polkadotapps",level:3}],u={toc:i};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Puede usar Polkadot/apps para conectarse a su nodo HydraDX local. Para este prop\xf3sito, necesita tener acceso al puerto ",(0,n.kt)("inlineCode",{parentName:"p"},"9944")," que se usa para conexiones de websocket RPC."),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Si est\xe1 ejecutando el nodo como un validador, le recomendamos encarecidamente que ponga en la lista negra el puerto ",(0,n.kt)("inlineCode",{parentName:"p"},"9944")," para conexiones remotas. Este puerto podr\xeda ser abusado por terceros para degradar el rendimiento de su nodo, lo que puede resultar en cortes y p\xe9rdidas involuntarias de fondos. Debe usar el puerto ",(0,n.kt)("inlineCode",{parentName:"p"},"9944")," para conectarse a su nodo validador solo cuando el nodo est\xe1 en su red local.")),(0,n.kt)("h3",{id:"accessing-your-local-node-using-polkadotapps"},"Accediendo a su nodo local usando Polkadot/apps"),(0,n.kt)("p",null,"Para acceder a tu nodo usa ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot/apps")," y haga clic en en la esquina superior izquierda para cambiar la red."),(0,n.kt)("div",null,(0,n.kt)("img",{src:(0,r.Z)("/polkadotjs-apps/PolkadotJS-APPS-1.png")})),(0,n.kt)("p",null,"Luego de abrir el menu, haga  clic en ",(0,n.kt)("strong",{parentName:"p"},"desarrollo")," y selecciona ",(0,n.kt)("strong",{parentName:"p"},"Nodo local"),"."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:(0,r.Z)("/polkadotjs-apps/local-1.png")})),(0,n.kt)("p",null,"Ajuste la IP si es necesario y haga clic en ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Switch"))," para cambiar a su nodo local."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:(0,r.Z)("/polkadotjs-apps/local-2.png")})),(0,n.kt)("p",null,"Ahora deber\xeda estar conectado a su nodo local y poder interactuar con \xe9l."))}d.isMDXComponent=!0}}]);