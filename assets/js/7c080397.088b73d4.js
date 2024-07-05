"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47374],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var o=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});n(37953);var o=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const c={title:"useNotification",source:"https://github.com/refinedev/refine/blob/master/packages/core/src/hooks/notification/useNotification/index.ts"},s=void 0,l={unversionedId:"notification/hooks/use-notification/index",id:"notification/hooks/use-notification/index",title:"useNotification",description:"useNotification can be used to open or close notification at any time. It returns the open and close method from notificationProvider under the hood.",source:"@site/docs/notification/hooks/use-notification/index.md",sourceDirName:"notification/hooks/use-notification",slug:"/notification/hooks/use-notification/",permalink:"/docs/notification/hooks/use-notification/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/notification/hooks/use-notification/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1720161219,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"useNotification",source:"https://github.com/refinedev/refine/blob/master/packages/core/src/hooks/notification/useNotification/index.ts"},sidebar:"mainSidebar",previous:{title:"Notification Provider",permalink:"/docs/notification/notification-provider/"},next:{title:"React Toastify",permalink:"/docs/examples/notification-provider/react-toastify"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"open",id:"open",level:3},{value:"close",id:"close",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to use a undoable notification?",id:"how-to-use-a-undoable-notification",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Return Values",id:"return-values",level:3}],d=(f="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var f;const y={toc:u},g="wrapper";function m(e){var{components:t}=e,n=a(e,["components"]);return(0,o.yg)(g,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"useNotification")," can be used to ",(0,o.yg)("inlineCode",{parentName:"p"},"open")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," notification at any time. It returns the ",(0,o.yg)("inlineCode",{parentName:"p"},"open")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," method from ",(0,o.yg)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,o.yg)("inlineCode",{parentName:"a"},"notificationProvider"))," under the hood."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Here is a basic example of how to use ",(0,o.yg)("inlineCode",{parentName:"p"},"useNotification")," hook."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const { open, close } = useNotification();\n\n// open notification\nopen?.({\n  type: "success",\n  message: "Success",\n  description: "This is a success message",\n});\n\n// close notification\nclose?.("notification-key");\n'))),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"open"},"open"),(0,o.yg)(d,{id:"open",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"You can call this method to open a new notification box."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const { open } = useNotification();\n\nopen?.({\n  type: "success",\n  message: "Success",\n  description: "This is a success message",\n});\n')),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/interface-references#open-notification-params"},(0,o.yg)("inlineCode",{parentName:"a"},"Open Notification Params")," interface\u2192")))),(0,o.yg)("h3",{id:"close"},"close"),(0,o.yg)(d,{id:"close",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"You can close a notification with a ",(0,o.yg)("inlineCode",{parentName:"p"},"key"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const { close } = useNotification();\n\nclose?.("notification-key");\n')),(0,o.yg)("p",null,"You must pass a ",(0,o.yg)("inlineCode",{parentName:"p"},"key")," to the ",(0,o.yg)("inlineCode",{parentName:"p"},"open")," method. This key is used to close the notification.")),(0,o.yg)("h2",{id:"faq"},"FAQ"),(0,o.yg)("h3",{id:"how-to-use-a-undoable-notification"},"How to use a undoable notification?"),(0,o.yg)(d,{id:"how-to-use-a-undoable-notification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"It should be ",(0,o.yg)("inlineCode",{parentName:"p"},"type=progress")," to show undoable notifications. A function can then be triggered."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const { open } = useNotification();\n\nopen?.({\n  type: "progress",\n  message: "Progress",\n  undoableTimeout: 5,\n  cancelMutation: () => {\n    // when undo button is clicked, run this callback\n  },\n});\n'))),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"return-values"},"Return Values"),(0,o.yg)(d,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Property"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"open"),(0,o.yg)("td",{parentName:"tr",align:null},"Open Notification Params"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"/docs/core/interface-references#open-notification-params"},(0,o.yg)("inlineCode",{parentName:"a"},"Open Notification Params")))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"close"),(0,o.yg)("td",{parentName:"tr",align:null},"Close Notification Params"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"(key: string) => void;")))))))}m.isMDXComponent=!0}}]);