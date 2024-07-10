"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30640],{58860:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=o,f=p["".concat(d,".").concat(g)]||p[g]||s[g]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},26067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"audit-log-antd",title:"Audit Log with Antd","example-tags":["audit-log-provider","antd"],"example-title":"Audit Log with Antd"},d=void 0,c={unversionedId:"examples/audit-log/audit-log-antd",id:"examples/audit-log/audit-log-antd",title:"Audit Log with Antd",description:"Refine allows you to track changes and who made them in your data by sending a new log event record whenever a new record is created, updated or deleted. This example demonstrates creating an audit log with Ant Design.",source:"@site/docs/examples/audit-log/audit-log-antd.md",sourceDirName:"examples/audit-log",slug:"/examples/audit-log/audit-log-antd",permalink:"/docs/examples/audit-log/audit-log-antd",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/audit-log/audit-log-antd.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1720597039,formattedLastUpdatedAt:"Jul 10, 2024",frontMatter:{id:"audit-log-antd",title:"Audit Log with Antd","example-tags":["audit-log-provider","antd"],"example-title":"Audit Log with Antd"},sidebar:"mainSidebar",previous:{title:"useLogList",permalink:"/docs/audit-logs/hooks/use-log-list/"},next:{title:"Audit Log Provider",permalink:"/docs/examples/audit-log/audit-log-provider"}},u={},p=[],s=(g="CodeSandboxExample",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var g;const f={toc:p},m="wrapper";function y(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(m,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Refine allows you to track changes and who made them in your data by sending a new log event record whenever a new record is created, updated or deleted. This example demonstrates creating an audit log with ",(0,n.yg)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design"),"."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/audit-logs/audit-log-provider"},"Refer to the Refine Audit Log Provider documentation for more information. \u2192")),(0,n.yg)(s,{path:"antd-audit-log",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);