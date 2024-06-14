"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35282],{58860:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>m});var t=r(37953);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),y=o,m=l["".concat(s,".").concat(y)]||l[y]||d[y]||a;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},16213:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>l});r(37953);var t=r(58860);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"useResource",title:"useResource"},s=void 0,u={unversionedId:"api-reference/core/hooks/resource/useResource",id:"version-3.xx.xx/api-reference/core/hooks/resource/useResource",title:"useResource",description:"useResource is used to get the resources array that you defined in `. It also returns resource object, resourceName and query params id and action`.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResource.md",sourceDirName:"api-reference/core/hooks/resource",slug:"/api-reference/core/hooks/resource/useResource",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResource",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResource.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1718348180,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"useResource",title:"useResource"},sidebar:"someSidebar",previous:{title:"useTitle",permalink:"/docs/3.xx.xx/api-reference/core/hooks/refine/useTitle"},next:{title:"useResourceWithRoute",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>resources</code>",id:"resources",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>resourceName</code>",id:"resourcename",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>action</code>",id:"action",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return value",id:"return-value",level:3},{value:"Interfaces",id:"interfaces",level:4}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",n)},y=d("DocThumbsUpDownFeedbackWidget"),m=d("PropsTable"),g={toc:l},f="wrapper";function b(e){var{components:n}=e,r=i(e,["components"]);return(0,t.yg)(f,a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},g,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"useResource")," is used to get the resources array that you defined in ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine>"),". It also returns ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," object, ",(0,t.yg)("inlineCode",{parentName:"p"},"resourceName")," and query params ",(0,t.yg)("inlineCode",{parentName:"p"},"id")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"action"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@pankod/refine-core";\n\nconst { resources, resource, action, id } = useResource();\n')),(0,t.yg)("h2",{id:"properties"},"Properties"),(0,t.yg)("h3",{id:"resourcenameorroutename"},(0,t.yg)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,t.yg)(y,{id:"resourcenameorroutename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"It is used to get resource object by name or route name."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@pankod/refine-core";\n\nconst { resource } = useResource({\n    resourceNameOrRouteName: "posts",\n});\n'))),(0,t.yg)("h2",{id:"return-values"},"Return Values"),(0,t.yg)("h3",{id:"resources"},(0,t.yg)("inlineCode",{parentName:"h3"},"resources")),(0,t.yg)(y,{id:"resources",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"An array of resources that you defined in ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine>"),".")),(0,t.yg)("h3",{id:"resource"},(0,t.yg)("inlineCode",{parentName:"h3"},"resource")),(0,t.yg)(y,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Resource object.")),(0,t.yg)("h3",{id:"resourcename"},(0,t.yg)("inlineCode",{parentName:"h3"},"resourceName")),(0,t.yg)(y,{id:"resourcename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Resource name of resource object.")),(0,t.yg)("h3",{id:"id"},(0,t.yg)("inlineCode",{parentName:"h3"},"id")),(0,t.yg)(y,{id:"id",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Query param ",(0,t.yg)("inlineCode",{parentName:"p"},"id"),".")),(0,t.yg)("h3",{id:"action"},(0,t.yg)("inlineCode",{parentName:"h3"},"action")),(0,t.yg)(y,{id:"action",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Query param ",(0,t.yg)("inlineCode",{parentName:"p"},"action"),".")),(0,t.yg)("h2",{id:"api-reference"},"API Reference"),(0,t.yg)("h3",{id:"properties-1"},"Properties"),(0,t.yg)(y,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)(m,{module:"@pankod/refine-core/useResource",mdxType:"PropsTable"})),(0,t.yg)("h3",{id:"return-value"},"Return value"),(0,t.yg)(y,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Description"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"resources"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"#interfaces"},(0,t.yg)("inlineCode",{parentName:"a"},"IResourceItem[]")))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"resource"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"#interfaces"},(0,t.yg)("inlineCode",{parentName:"a"},"IResourceItem")))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"resourceName"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"string"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},(0,t.yg)("inlineCode",{parentName:"a"},"BaseKey")))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"action"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,t.yg)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,t.yg)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,t.yg)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,t.yg)("inlineCode",{parentName:"td"},'"clone"')))))),(0,t.yg)("h4",{id:"interfaces"},"Interfaces"),(0,t.yg)(y,{id:"interfaces",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"type OptionsProps<TExtends = { [key: string]: any }> = TExtends & {\n    label?: string;\n    route?: string;\n    hide?: boolean;\n    auditLog?: {\n        permissions?: AuditLogPermissions[number][] | string[];\n    };\n};\n\ninterface IResourceComponentsProps<\n    TCrudData = any,\n    TOptionsPropsExtends = { [key: string]: any },\n> {\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canDelete?: boolean;\n    canShow?: boolean;\n    name?: string;\n    initialData?: TCrudData;\n    options?: OptionsProps<TOptionsPropsExtends>;\n}\n\ninterface IResourceComponents {\n    list?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    create?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    edit?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    show?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n}\n\ninterface IResourceItem extends IResourceComponents {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n    options?: OptionsProps;\n    parentName?: string;\n}\n")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"The ",(0,t.yg)("inlineCode",{parentName:"p"},"canCreate"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"canShow")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"canEdit")," properties are defined automatically if the ",(0,t.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"show")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"edit")," components are defined on the ",(0,t.yg)("inlineCode",{parentName:"p"},"resources")," property in ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine>"),"."))))}b.isMDXComponent=!0}}]);