"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[653],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},848:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(3117),o=(n(7294),n(3905)),a=n(4996);const i={id:"democracy_referenda",title:"Referenda"},d=void 0,c={unversionedId:"democracy_referenda",id:"democracy_referenda",title:"Referenda",description:"Referenda allow stakeholders to put a proposal to a weighted, stake-based vote by the wider community. The object of the referendum is some suggested action which affects the protocol - for example, a Treasury payout, or even a change in the runtime code.",source:"@site/docs/democracy_referenda.md",sourceDirName:".",slug:"/democracy_referenda",permalink:"/ru/democracy_referenda",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/democracy_referenda.md",tags:[],version:"current",frontMatter:{id:"democracy_referenda",title:"Referenda"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/ru/democracy_intro"},next:{title:"HydraDX Council",permalink:"/ru/democracy_council"}},l={},s=[{value:"Initiating a Referendum",id:"referenda-initiate",level:2},{value:"Public Referendum",id:"referenda-initiate-public",level:3},{value:"Council Referendum",id:"referenda-initiate-council",level:3},{value:"Emergency Proposals by the Technical Committee",id:"referenda-initiate-tech-committee",level:3},{value:"Canceling a Referendum",id:"cancel",level:3},{value:"Voting in a Referendum",id:"referenda-vote",level:2},{value:"Votes Weighing",id:"referenda-votes-weighing",level:3},{value:"Voting Modes",id:"referenda-voting-modes",level:3},{value:"Positive Turnout Bias",id:"positive-turnout-bias",level:4},{value:"Negative Turnout Bias",id:"negative-turnout-bias",level:4},{value:"Simple Majority",id:"simple-majority",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Referenda allow stakeholders to put a proposal to a weighted, stake-based vote by the wider community. The object of the referendum is some suggested action which affects the protocol - for example, a Treasury payout, or even a change in the runtime code."),(0,o.kt)("p",null,"Generally speaking, only one referendum is brought to a vote at a time. Other pending referendum proposals are put in a queue. There are separate queues for publicly submitted proposals and for Council proposals. Every 3 days, the referendum mechanism picks the top proposal with the highest amount of support, alternating between the two queues. After a referendum has been voted upon and accepted, there is a so-called ",(0,o.kt)("em",{parentName:"p"},"enactment delay")," period of 3 days which needs to pass before the decision is put into effect. An exception to these rules applies for emergency proposals by the Technical Committee which deal with major protocol problems and need to be fast-tracked."),(0,o.kt)("h2",{id:"referenda-initiate"},"Initiating a Referendum"),(0,o.kt)("p",null,"There are multiple ways to initiate a referendum which are described in greater detail below. The way the referendum was initiated is decisive for the applicable voting mode."),(0,o.kt)("h3",{id:"referenda-initiate-public"},"Public Referendum"),(0,o.kt)("p",null,"Any holder of HDX tokens can ",(0,o.kt)("a",{parentName:"p",href:"/participate_in_referenda"},"propose a referendum")," by depositing the minimum required amount of HDX tokens and submitting the proposal on-chain. Other community members can ",(0,o.kt)("a",{parentName:"p",href:"/participate_in_referenda"},"support (",(0,o.kt)("em",{parentName:"a"},"second"),") the proposal")," for a referendum by locking up an equal amount of tokens. At the beginning of every voting cycle, the referendum proposal with the highest amount of ",(0,o.kt)("em",{parentName:"p"},"seconding")," (total deposited tokens) is advanced to a vote by the community."),(0,o.kt)("p",null,"The voting mode which applies to public referenda is ",(0,o.kt)("a",{parentName:"p",href:"#referenda-voting-modes"},"Positive Turnout Bias"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"All HDX tokens which are deposited to propose or second a referendum are locked up for the whole period until the referendum has entered the voting cycle. It is important to remember that there is no guarantee that any given proposal will ever receive sufficient backing to move into the voting round, meaning that your funds might remain locked for an indefinite period.")),(0,o.kt)("h3",{id:"referenda-initiate-council"},"Council Referendum"),(0,o.kt)("p",null,"The HydraDX Council has the powers to propose a referendum for a community vote. If it does so unanimously, the applicable voting mode for the referendum is ",(0,o.kt)("a",{parentName:"p",href:"#referenda-voting-modes"},"Negative Turnout Bias"),". If the referendum is proposed with a simple majority of the Council votes, then the voting mode for accepting the proposals by the community is ",(0,o.kt)("a",{parentName:"p",href:"#referenda-voting-modes"},"Simple Majority"),"."),(0,o.kt)("h3",{id:"referenda-initiate-tech-committee"},"Emergency Proposals by the Technical Committee"),(0,o.kt)("p",null,"The Technical Committee can submit emergency proposals which deal with (critical) bug fixes or the quick adoption of battle-tested functionality. Emergency proposals skip the waiting queue and enter the voting round directly. The community can vote on emergency proposals in parallel to any regular proposal which has entered the voting round. Furthermore, emergency proposals have a shorter voting period to ensure that they can be fast-tracked."),(0,o.kt)("h3",{id:"cancel"},"Canceling a Referendum"),(0,o.kt)("p",null,"Once a referendum has been proposed, it cannot be revoked until it has entered the voting round. An exception to this rule is made for proposals which are deemed detrimental to the protocol (e.g. code changes introducing a bug). In this limited case, the referendum proposal can be cancelled by the ",(0,o.kt)("a",{parentName:"p",href:"/democracy_council"},"HydraDX Council")," (with a 60% super-majority) or the ",(0,o.kt)("a",{parentName:"p",href:"/democracy_technical_committee"},"Technical Committee")," (unanimously). All tokens wich were locked by supporters seconding the proposal are burned."),(0,o.kt)("h2",{id:"referenda-vote"},"Voting in a Referendum"),(0,o.kt)("p",null,"HydraDX referenda have a launch period of 3 days. At the beginning of every new period, the proposal with the highest amount of seconding is taken from the waiting queue and put into a voting round. Every voting round has a duration of 3 days. During this period, community members can vote on the referendum using a weighted, stake-base mechanism. They do so by locking up a certain amount of HDX tokens for a given timeframe."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Locked HDX tokens cannot be transferred for the duration of the chosen lock period. However, they can still be used for voting.")),(0,o.kt)("h3",{id:"referenda-votes-weighing"},"Votes Weighing"),(0,o.kt)("p",null,"There are two factors which determine the weight of each vote in a referendum. The first factor is the ",(0,o.kt)("strong",{parentName:"p"},"amount of HDX tokens")," which the voter locks up in support of the vote. The second factor is the so-called ",(0,o.kt)("strong",{parentName:"p"},"conviction multiplier")," which reflects the duration for which the voter is willing to lock up the tokens."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vote_weight = tokens * conviction_multiplier\n")),(0,o.kt)("p",null,"Vote lock periods have the same duration as the enactment delay. If tokens are locked for 1 voting period, this means that they will remain locked for ",(0,o.kt)("strong",{parentName:"p"},"3 days")," after the voting has ended. Voters can influence the weight of their votes by decreasing or increasing the amount of periods for which the tokens are locked. It is possible to bring out a vote with 0 lock periods, however its weight would be only a fraction (conviction multiplier of 0.1x). On the other hand, the conviction multiplier increases by 1 for every doubling of the lock periods. As shown in the table below, locking the votes for the maximum of 32 periods would raise the conviction multiplier to 6x."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Lock Periods"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Conviction Multiplier"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"0"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"4"),(0,o.kt)("td",{parentName:"tr",align:"center"},"3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"8"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"16"),(0,o.kt)("td",{parentName:"tr",align:"center"},"5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"32"),(0,o.kt)("td",{parentName:"tr",align:"center"},"6")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"An example:\n\nAlice votes with 5000 HDX and 0 lock periods.\nBob votes with 100 HDX and 32 lock periods.\n\nWeight Alice: 500\nWeight Bob: 600\n")),(0,o.kt)("h3",{id:"referenda-voting-modes"},"Voting Modes"),(0,o.kt)("p",null,"Another important aspect of the democracy module are the different voting modes which apply. The threshold of votes needed for approving or rejecting a referendum can vary depending on how the referendum was initiated and on the turnout of the vote. The turnout is calculated based on the total amount of HDX tokens which were used to vote in the referendum (conviction multipliers excluded). Whether the turnout was low or not is determined by the relationship between the turnout and the elactorate (i.e. the total amount of HDX tokens eligible to vote)."),(0,o.kt)("h4",{id:"positive-turnout-bias"},"Positive Turnout Bias"),(0,o.kt)("p",null,"This is the default voting mode when a referendum is proposed by the Community. At lower turnouts, a qualified super-majority of ",(0,o.kt)("inlineCode",{parentName:"p"},"yes")," votes is required in order to approve the referendum. As the turnout grows, the threshold decreases towards a simple majority."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,a.Z)("/democracy/positive-turnout-bias.png"),width:"300px"})),(0,o.kt)("h4",{id:"negative-turnout-bias"},"Negative Turnout Bias"),(0,o.kt)("p",null,"This voting mode applies to referenda which have been proposed by the Council unanimously. Such proposals require a qualified super-majority of ",(0,o.kt)("inlineCode",{parentName:"p"},"no")," votes to be rejected at low turnouts. As the turnout grows, the threshold for rejecting the referendum decreases towards a simple majority."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,a.Z)("/democracy/negative-turnout-bias.png"),width:"280px"})),(0,o.kt)("h4",{id:"simple-majority"},"Simple Majority"),(0,o.kt)("p",null,"Referenda which were initiated by the Council with majority agreement (i.e. not unanimously) can be accepted by the community with a simple majority of the votes (50% + 1)."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,a.Z)("/democracy/simple-majority.png"),width:"200px"})))}p.isMDXComponent=!0}}]);