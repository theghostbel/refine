"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41452],{58860:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>b});var t=n(37953);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),y=o,b=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return n?t.createElement(b,a(a({ref:r},l),{},{components:n})):t.createElement(b,a({ref:r},l))}));function b(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},39650:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>u});n(37953);var t=n(58860);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"useSubscription",title:"useSubscription",source:"packages/core/src/hooks/live/useSubscription/index.ts"},s=void 0,c={unversionedId:"api-reference/core/hooks/live/useSubscription",id:"version-3.xx.xx/api-reference/core/hooks/live/useSubscription",title:"useSubscription",description:"useSubscription calls the subscribe method from liveProvider when mounted. It is useful when you want to subscribe to a Realtime channel.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/live/useSubscription.md",sourceDirName:"api-reference/core/hooks/live",slug:"/api-reference/core/hooks/live/useSubscription",permalink:"/docs/3.xx.xx/api-reference/core/hooks/live/useSubscription",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/live/useSubscription.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1718348180,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"useSubscription",title:"useSubscription",source:"packages/core/src/hooks/live/useSubscription/index.ts"},sidebar:"someSidebar",previous:{title:"usePublish",permalink:"/docs/3.xx.xx/api-reference/core/hooks/live/usePublish"},next:{title:"useNavigation",permalink:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:3},{value:"channel <PropTag required/>",id:"channel-",level:3},{value:"onLiveEvent <PropTag required/>",id:"onliveevent-",level:3},{value:"types",id:"types",level:3},{value:"enabled",id:"enabled",level:3},{value:"params",id:"params",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",r)},y=d("DocThumbsUpDownFeedbackWidget"),b=d("PropTag"),m=d("PropsTable"),v={toc:u},f="wrapper";function g(e){var{components:r}=e,n=a(e,["components"]);return(0,t.yg)(f,i(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){o(e,r,n[r])}))}return e}({},v,n),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"useSubscription")," calls the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#subscribe"},(0,t.yg)("inlineCode",{parentName:"a"},"subscribe"))," method from ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},(0,t.yg)("inlineCode",{parentName:"a"},"liveProvider"))," when mounted. It is useful when you want to subscribe to a Realtime channel."),(0,t.yg)("admonition",{type:"info-tip"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("strong",{parentName:"p"},"refine")," use this hook internally in data hooks to ",(0,t.yg)("inlineCode",{parentName:"p"},"subscribe")," Realtime data. You can refer liveProvider's ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#supported-hooks-subscription"},"Supported Hooks Subscriptions")," section for more information.")),(0,t.yg)("h2",{id:"usage"},"Usage"),(0,t.yg)(y,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useSubscription } from "@pankod/refine-core";\n\nuseSubscription({\n    channel: "channel-name",\n    types: ["event-name", "another-event-name"]\n    onLiveEvent: (event) => {},\n});\n\n'))),(0,t.yg)("h3",{id:"properties"},"Properties"),(0,t.yg)(y,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Will be passed to the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#subscribe"},"subscribe")," method from the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},"liveProvider")," as a parameter. You can use these properties from the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},(0,t.yg)("inlineCode",{parentName:"a"},"liveProvider")),"'s ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#subscribe"},(0,t.yg)("inlineCode",{parentName:"a"},"subscribe"))," method and use them to subscribe to a channel.")),(0,t.yg)("h3",{id:"channel-"},"channel ",(0,t.yg)(b,{required:!0,mdxType:"PropTag"})),(0,t.yg)(y,{id:"channel-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Channel name to subscribe.")),(0,t.yg)("h3",{id:"onliveevent-"},"onLiveEvent ",(0,t.yg)(b,{required:!0,mdxType:"PropTag"})),(0,t.yg)(y,{id:"onliveevent-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Callback that is run when new events from subscription arrive.")),(0,t.yg)("h3",{id:"types"},"types"),(0,t.yg)(y,{id:"types",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Default: ",(0,t.yg)("inlineCode",{parentName:"p"},'["*"]'))),(0,t.yg)("p",null,"Type of events to subscribe. ",(0,t.yg)("inlineCode",{parentName:"p"},'"\\*"')," means all events.")),(0,t.yg)("h3",{id:"enabled"},"enabled"),(0,t.yg)(y,{id:"enabled",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Default: ",(0,t.yg)("inlineCode",{parentName:"p"},"true")))),(0,t.yg)("h3",{id:"params"},"params"),(0,t.yg)(y,{id:"params",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"You can pass any additional parameters to the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},(0,t.yg)("inlineCode",{parentName:"a"},"liveProvider")),"'s ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#subscribe"},(0,t.yg)("inlineCode",{parentName:"a"},"subscribe"))," method."),(0,t.yg)("p",null,"Hooks that use ",(0,t.yg)("inlineCode",{parentName:"p"},"useSubscription")," internally, send the query's parameters(pagination, metaData, sort, filters, etc.) information along with this prop."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#supported-hooks-subscription"},'Refer to LiveProvider\'s "Supported Hooks Subscription" section for which hooks are using ',(0,t.yg)("inlineCode",{parentName:"a"},"useSubscription")," internally ","\u2192"))),(0,t.yg)("h2",{id:"api-reference"},"API Reference"),(0,t.yg)("h3",{id:"properties-1"},"Properties"),(0,t.yg)(y,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)(m,{module:"@pankod/refine-core/useSubscription",mdxType:"PropsTable"})))}g.isMDXComponent=!0}}]);