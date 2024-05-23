"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78021],{58860:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var n=t(37953);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,g=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return t?n.createElement(g,i(i({ref:r},l),{},{components:t})):n.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26102:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>u});t(37953);var n=t(58860);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={id:"benchmarks",title:"Benchmarks"},s=void 0,p={unversionedId:"further-readings/benchmarks",id:"version-3.xx.xx/further-readings/benchmarks",title:"Benchmarks",description:"Many refine projects involve migrating an existing vanilla React application to the refine framework. By collecting data from various migration projects, we were able to do some benchmarking by comparing codebases.",source:"@site/versioned_docs/version-3.xx.xx/further-readings/benchmarks.md",sourceDirName:"further-readings",slug:"/further-readings/benchmarks",permalink:"/docs/3.xx.xx/further-readings/benchmarks",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/further-readings/benchmarks.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1716450433,formattedLastUpdatedAt:"May 23, 2024",frontMatter:{id:"benchmarks",title:"Benchmarks"},sidebar:"someSidebar",previous:{title:"Further Readings",permalink:"/docs/3.xx.xx/further-readings"},next:{title:"Telemetry",permalink:"/docs/3.xx.xx/further-readings/telemetry"}},l={},u=[],m={toc:u},f="wrapper";function g(e){var{components:r}=e,t=i(e,["components"]);return(0,n.yg)(f,o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},m,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Many ",(0,n.yg)("strong",{parentName:"p"},"refine")," projects involve migrating an existing vanilla React application to the ",(0,n.yg)("strong",{parentName:"p"},"refine")," framework. By collecting data from various migration projects, we were able to do some benchmarking by comparing codebases. "),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"refine")," makes your codebase significantly smaller, by eliminating redundant code such as ",(0,n.yg)("em",{parentName:"p"},"reducers"),", ",(0,n.yg)("em",{parentName:"p"},"actions"),", and ",(0,n.yg)("em",{parentName:"p"},"unit tests"),".  We've measured a significant reduction in project size in terms of ",(0,n.yg)("em",{parentName:"p"},'"lines of code"')," and ",(0,n.yg)("em",{parentName:"p"},'"number of files"'),":"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/getting-started/benchmark.png",width:"400px",align:"center"})))}g.isMDXComponent=!0}}]);