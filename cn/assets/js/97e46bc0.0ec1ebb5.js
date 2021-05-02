(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(93)),c=(t(94),{id:"performance_benchmark",title:"\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5"}),i={unversionedId:"performance_benchmark",id:"performance_benchmark",isDocsHomePage:!1,title:"\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5",description:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u6d4b\u8bd5\u7a0b\u5e8f\u6765\u786e\u5b9a\u81ea\u5df1\u7684\u8ba1\u7b97\u673a\u662f\u5426\u7b26\u5408 \u57fa\u672c\u6027\u80fd\u8981\u6c42 \u3002 \u8bf7\u8fd0\u884c\u4e00\u4e0b\u4ee3\u7801\uff1a",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/performance_benchmark.md",slug:"/performance_benchmark",permalink:"/cn/performance_benchmark",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/performance_benchmark.md",version:"current",sidebar:"sidebar",previous:{title:"\u642d\u5efa HydraDX \u8282\u70b9",permalink:"/cn/node_setup"},next:{title:"\u8282\u70b9\u76d1\u63a7",permalink:"/cn/node_monitoring"}},u=[],s={toc:u};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u6d4b\u8bd5\u7a0b\u5e8f\u6765\u786e\u5b9a\u81ea\u5df1\u7684\u8ba1\u7b97\u673a\u662f\u5426\u7b26\u5408 ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/node_setup#00-required-technical-specifications"},"\u57fa\u672c\u6027\u80fd\u8981\u6c42"))," \u3002 \u8bf7\u8fd0\u884c\u4e00\u4e0b\u4ee3\u7801\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n$ cd HydraDX-node/\n\n# Prepare for running the benchmark\n## Install Rust following https://rustup.rs\n$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n\n## Configure Rust\n$ ./scripts/init.sh\n$ rustup default nightly\n\n## Install additional libraries\n$ apt install python3-pip\n$ apt install clang\n\n# Run the benchmark\n$ ./scripts/check_performance.sh\n")),Object(o.b)("p",null,"\u5728\u6d4b\u8bd5\u7a0b\u5e8f\u8fd0\u884c\u5b8c\u6bd5\u540e\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u4e0e\u4ee5\u4e0b\u7c7b\u4f3c\u7684\u8f93\u51fa\u7ed3\u679c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"         Pallet          |   Time comparison (\xb5s)    |  diff* (\xb5s)   |   diff* (%)    |            |   Rerun\namm                      |     773.00 vs 680.00      |      93.00    |      12.03     |     OK     |\nexchange                 |     804.00 vs 720.00      |      84.00    |      10.44     |     OK     |\ntransaction_multi_payment|     218.00 vs 198.00      |      20.00    |       9.17     |     OK     |\n\nNotes:\n- in the diff fields you can see the difference between the reference benchmark time and the benchmark time of your machine\n- if diff is positive for all three pallets, your machine covers the minimum requirements for running a HydraDX node\n- if diff deviates by -10% or more for some of the pallets, your machine might not be suitable to run a node\n")),Object(o.b)("p",null,"\u60a8\u53ef\u4ee5\u5728 ",Object(o.b)("strong",{parentName:"p"},"diff* (%)")," \u5217\u4e2d\u770b\u5230\u60a8\u7684\u8ba1\u7b97\u673a\u7ee9\u6548\u53c2\u6570\u4e0e\u542f\u52a8\u8282\u70b9\u6240\u9700\u6700\u4f4e\u8981\u6c42\u4e4b\u95f4\u7684\u5dee\u5f02\u3002 \u5982\u679c\u6b64\u5217\u7684\u4e09\u4e2a\u6570\u503c\u5747\u4e3a\u6b63\u6570\uff0c\u5219\u8868\u793a\u60a8\u7684\u8ba1\u7b97\u673a\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c HydraDX \u9a8c\u8bc1\u8282\u70b9\u3002 \u4e09\u4e2a\u6570\u503c\uff0c\u5982\u679c\u4efb\u4f55\u4e00\u4e2a\u6570\u503c\u4f4e\u4e8e ",Object(o.b)("em",{parentName:"p"},"-10\uff05")," \uff0c\u5219\u4e0d\u5efa\u8bae\u4f7f\u7528\u8be5\u673a\u8fd0\u884c HydraDX \u8282\u70b9\u3002"),Object(o.b)("p",null,"\u5982\u679c\u60a8\u60f3\u8ba8\u8bba\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5\u7ed3\u679c\uff0c\u8bf7\u52a0\u5165\u6211\u4eec\u7684 Discord \uff0c\u793e\u533a\u5f88\u4e50\u610f\u63d0\u4f9b\u60a8\uff01"))}l.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),b=r,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return t?a.a.createElement(d,i(i({ref:n},s),{},{components:t})):a.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return c}));var r=t(16),a=t(95);function o(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,i=void 0!==c&&c,u=o.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(i)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+l:l}(o,t,e,n)}}}function c(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},95:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))}}]);