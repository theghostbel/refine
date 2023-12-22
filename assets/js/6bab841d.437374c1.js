"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19522],{3905:(e,r,o)=>{o.d(r,{Zo:()=>s,kt:()=>f});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=t.createContext({}),m=function(e){var r=t.useContext(i),o=r;return e&&(o="function"==typeof e?e(r):c(c({},r),e)),o},s=function(e){var r=m(e.components);return t.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(o),f=n,d=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return o?t.createElement(d,c(c({ref:r},s),{},{components:o})):t.createElement(d,c({ref:r},s))}));function f(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=p;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var m=2;m<a;m++)c[m]=o[m];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},80728:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>m,toc:()=>u});o(67294);var t=o(3905);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})),e}function c(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const l={id:"useModalForm",title:"useModalForm","example-tags":["form","headless","react-hook-form"]},i=void 0,m={unversionedId:"examples/form/react-hook-form/useModalForm",id:"version-3.xx.xx/examples/form/react-hook-form/useModalForm",title:"useModalForm",description:"useModalForm hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal. For more information, you can view the live example or review the source code.",source:"@site/versioned_docs/version-3.xx.xx/examples/form/react-hook-form/useModalForm.md",sourceDirName:"examples/form/react-hook-form",slug:"/examples/form/react-hook-form/useModalForm",permalink:"/docs/3.xx.xx/examples/form/react-hook-form/useModalForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/form/react-hook-form/useModalForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1703245933,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{id:"useModalForm",title:"useModalForm","example-tags":["form","headless","react-hook-form"]},sidebar:"someSidebar",previous:{title:"useForm",permalink:"/docs/3.xx.xx/examples/form/react-hook-form/useForm"},next:{title:"useStepsForm",permalink:"/docs/3.xx.xx/examples/form/react-hook-form/useStepsForm"}},s={},u=[],p=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",e)});var f;const d={toc:u};function y(e){var{components:r}=e,o=c(e,["components"]);return(0,t.kt)("wrapper",a(function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),t.forEach((function(r){n(e,r,o[r])}))}return e}({},d,o),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal. For more information, you can view the live example or review the source code."),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-hook-form/useModalForm"},"Refer to the useModalForm documentation for more information. \u2192")),(0,t.kt)(p,{path:"form-react-hook-form-use-steps-form",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);