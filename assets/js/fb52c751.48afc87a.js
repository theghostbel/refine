"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91362],{58860:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var r=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>p});n(37953);var r=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const c={title:"Migrating a React-Admin Application to Refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to Refine to battle test our new framework and improve our productivity.",slug:"migrating-a-react-admin-application-to-refine",authors:"umut",tags:["Refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/migrating-a-react-admin-application-to-refine",source:"@site/blog/2021-10-6-migrating-react-admin-application-to-refine.md",title:"Migrating a React-Admin Application to Refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to Refine to battle test our new framework and improve our productivity.",date:"2021-10-06T00:00:00.000Z",formattedDate:"October 6, 2021",tags:[{label:"Refine",permalink:"/blog/tags/refine"}],readingTime:5.315,hasTruncateMarker:!0,authors:[{name:"Umut \xd6zdemir",title:"Frontend Developer",url:"https://github.com/umutzd",imageURL:"https://avatars.githubusercontent.com/u/22444985?v=4",key:"umut"}],frontMatter:{title:"Migrating a React-Admin Application to Refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to Refine to battle test our new framework and improve our productivity.",slug:"migrating-a-react-admin-application-to-refine",authors:"umut",tags:["Refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase"},nextItem:{title:"Build Fast and Customizable Admin Panel with NestJS",permalink:"/blog/customizable-admin-panel-with-nestjs"},relatedPosts:[{title:"Refine.new - Technical Architecture and Engineering Decisions Explored Part - 1",description:"We'll discuss the technical architecture, key-concepts, and engineering design decisions made during the development process of Refine.new.",permalink:"/blog/refine-new-explored-part-1",formattedDate:"July 25, 2024",authors:[{name:"Batuhan \xd6zdemir",title:"Tech Lead at Refine",github:"https://github.com/BatuhanW",twitter:"https://twitter.com/kakamelatte",imageURL:"https://github.com/BatuhanW.png",key:"batuhan"}],readingTime:10.795,date:"2024-07-25T00:00:00.000Z"},{title:"Announcing the Refine Open Source Hackathon 2 Winners",description:"We're thrilled to announce the winners of the Refine Open Source Hackathon 2!",permalink:"/blog/refine-hackathon-2-winners",formattedDate:"August 4, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.005,date:"2023-08-04T00:00:00.000Z"},{title:"Creating Mission and Invoice Pages",description:"We add more CRUD views to the Pdf Invoice Generator app we have been building using Refine and Strapi last few days.",permalink:"/blog/refine-react-invoice-generator-4",formattedDate:"April 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.78,date:"2023-04-13T00:00:00.000Z"}],authorPosts:[]},s={authorsImageUrls:[void 0]},p=[],m={toc:p},f="wrapper";function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.yg)(f,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to Refine to battle test our new framework and improve our productivity. My mission was to migrate it and it took one and a half days for me to rewrite the panel in refine."))}d.isMDXComponent=!0}}]);