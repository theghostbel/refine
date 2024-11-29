"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31565],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var a=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});n(37953);var a=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",slug:"react-createportal",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-12-react-createportal/social-2.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/react-createportal",source:"@site/blog/2024-08-21-react-createportal.md",title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",date:"2024-08-21T00:00:00.000Z",formattedDate:"August 21, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:9.43,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",slug:"react-createportal",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-12-react-createportal/social-2.png",hide_table_of_contents:!1},prevItem:{title:"Mojo - A New Programming Language for AI",permalink:"/blog/mojo-programming-language"},nextItem:{title:"Using React Hot Toast as a Notification Provider for CRUD apps",permalink:"/blog/react-hot-toast"},relatedPosts:[{title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",formattedDate:"May 23, 2024",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:17.725,date:"2024-05-23T00:00:00.000Z"},{title:"Using SVGs in React",description:"Let's talk about React SVG and how it makes the process of adding and handling images on modern websites more versatile and fun.",permalink:"/blog/react-svg",formattedDate:"November 17, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:13.3,date:"2023-11-17T00:00:00.000Z"},{title:"React useEffect Cleanup Function",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",permalink:"/blog/useeffect-cleanup",formattedDate:"March 22, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:5.865,date:"2024-03-22T00:00:00.000Z"}],authorPosts:[{title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",permalink:"/blog/usenavigate-react-router-redirect",formattedDate:"June 24, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.78,date:"2024-06-24T00:00:00.000Z"},{title:"How to Build a Web App in 10 steps in 2024",description:"In this article, we will explore some steps you can follow when building a web app.",permalink:"/blog/how-to-build-a-web-app",formattedDate:"December 26, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.43,date:"2023-12-26T00:00:00.000Z"},{title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",permalink:"/blog/react-router-useparams",formattedDate:"September 24, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:4.445,date:"2022-09-24T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Complete guide to the <code>createPortal</code> API",id:"complete-guide-to-the-createportal-api",level:2},{value:"Pros of the <code>createPortal</code> API",id:"pros-of-the-createportal-api",level:2},{value:"Rendering an element in another location in the DOM",id:"rendering-an-element-in-another-location-in-the-dom",level:3},{value:"Integrating third-party packages into your project",id:"integrating-third-party-packages-into-your-project",level:3},{value:"Best Practices for Using Portals in React",id:"best-practices-for-using-portals-in-react",level:2},{value:"Simplicity Is Bliss",id:"simplicity-is-bliss",level:3},{value:"State Management",id:"state-management",level:3},{value:"Styling Consistency",id:"styling-consistency",level:3},{value:"Accessibility",id:"accessibility",level:3},{value:"Cons of the <code>createPortal</code> API",id:"cons-of-the-createportal-api",level:2},{value:"CSS Inherited properties",id:"css-inherited-properties",level:3},{value:"Complex portals are difficult to maintain",id:"complex-portals-are-difficult-to-maintain",level:3},{value:"Accessibility issues",id:"accessibility-issues",level:3},{value:"Mismatch between location in the DOM and event bubbling",id:"mismatch-between-location-in-the-dom-and-event-bubbling",level:3},{value:"Use cases of the <code>createPortal</code> API",id:"use-cases-of-the-createportal-api",level:2},{value:"Testing Portals in React Applications",id:"testing-portals-in-react-applications",level:2},{value:"Make Sure the Portal is Displayed Properly",id:"make-sure-the-portal-is-displayed-properly",level:3},{value:"Test Interactivity within the Portal",id:"test-interactivity-within-the-portal",level:3},{value:"Check Accessibility",id:"check-accessibility",level:3},{value:"Unmounting Test",id:"unmounting-test",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d},m="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.yg)(m,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on August 21, 2024, to add sections on Best Practices for Using Portals and Testing Portals.")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API is part of the React DOM. You can use it to flexibly render the children of a React component in another location in the DOM. Though you can render a portal in another location, it still behaves like any other React child component."),(0,a.yg)("p",null,"This behavior of the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API makes it easy to create UIs such as tooltips, toasts, modals, and popups. This article will take a deep dive into the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API. We will explore its advantages, disadvantages, and possible use cases."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#complete-guide-to-the-createportal-api"},"Complete guide to the ",(0,a.yg)("inlineCode",{parentName:"a"},"createPortal")," API")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#pros-of-the-createportal-api"},"Pros of the ",(0,a.yg)("inlineCode",{parentName:"a"},"createPortal")," API")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#best-practices-for-using-portals-in-react"},"Best Practices for Using Portals in React")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#cons-of-the-createportal-api"},"Cons of the ",(0,a.yg)("inlineCode",{parentName:"a"},"createPortal")," API")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#use-cases-of-the-createportal-api"},"Use cases of the ",(0,a.yg)("inlineCode",{parentName:"a"},"createPortal")," API")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#testing-portals-in-react-applications"},"Testing Portals in React Applications"))),(0,a.yg)("h2",{id:"complete-guide-to-the-createportal-api"},"Complete guide to the ",(0,a.yg)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,a.yg)("p",null,"As explained above, the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API is part of the React DOM API. Therefore, before using it, you need to import it from ",(0,a.yg)("inlineCode",{parentName:"p"},"react-dom")," like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { createPortal } from "react-dom";\n')),(0,a.yg)("p",null,"Ordinarily, a React component and its children have a parent-child relationship, and all the children are nested within their parent after rendering."),(0,a.yg)("p",null,"However, with the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API, a React component can render all or some of its children in another location in the DOM rather than the parent. The code below shows its function signature."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"createPortal(children, domNode, key?)\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"children")," parameter of the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," function must be a React component, JSX, React Fragment, string, number, or an array of these."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"domNode")," parameter is the DOM Node in which you want to render the ",(0,a.yg)("inlineCode",{parentName:"p"},"children"),". You can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"document.getElementById")," method or any of the element-lookup methods of the ",(0,a.yg)("inlineCode",{parentName:"p"},"document")," object."),(0,a.yg)("p",null,"The last parameter is an optional key. It is a unique string or number that will be used as the portal's key."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," function returns a React Node. Therefore, you can return it from a React component or render it inside another component's JSX, as in the example below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { createPortal } from "react-dom";\n\nexport function PortalDemo() {\n  return (\n    <div>\n      <p>This child is placed in the parent div.</p>\n      {createPortal(\n        <p>This child is placed in the document body.</p>,\n        document.body,\n      )}\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"When you render a component using the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API, only the rendering of the component in the DOM changes. Everything else remains the same. The events generated from the portal will bubble in the React Node hierarchy not in the DOM hierarchy."),(0,a.yg)("p",null,"Though a portal is rendered in a different location in the DOM, it is still a child of the parent React Component that renders it. It re-renders whenever the props or context passed to it changes, and its parent re-renders."),(0,a.yg)("h2",{id:"pros-of-the-createportal-api"},"Pros of the ",(0,a.yg)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,a.yg)("p",null,"There are several benefits of the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API. Below are some of these benefits."),(0,a.yg)("h3",{id:"rendering-an-element-in-another-location-in-the-dom"},"Rendering an element in another location in the DOM"),(0,a.yg)("p",null,"The biggest benefit of the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API is that it gives you the flexibility to render an element outside its parent in another DOM element therefore breaking out of the usual parent-child relationship between components."),(0,a.yg)("p",null,"This helps you to easily build certain UIs, such as tooltips and modals which might otherwise be difficult without portals."),(0,a.yg)("h3",{id:"integrating-third-party-packages-into-your-project"},"Integrating third-party packages into your project"),(0,a.yg)("p",null,"More often than not, you may want to integrate third-party packages that do not use React in your React application. The ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API makes it easy because you can use it to render a React component anywhere in the DOM."),(0,a.yg)("h2",{id:"best-practices-for-using-portals-in-react"},"Best Practices for Using Portals in React"),(0,a.yg)("p",null,"I'd like to share some best practices for using the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API in React with you and have some examples of code to explain those rules in practice."),(0,a.yg)("h3",{id:"simplicity-is-bliss"},"Simplicity Is Bliss"),(0,a.yg)("p",null,"Make sure that the components you render are as simple as possible when working with portals. The complexity of portals can become very hard to maintain. Here's a simple modal example using ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from "react";\nimport { createPortal } from "react-dom";\n\nfunction Modal({ onClose }) {\n  return createPortal(\n    <div className="modal">\n      <p>This is a modal.</p>\n      <button onClick={onClose}>Close</button>\n    </div>,\n    document.body,\n  );\n}\n\nfunction App() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <div>\n      <button onClick={() => setIsOpen(true)}>Open Modal</button>\n      {isOpen && <Modal onClose={() => setIsOpen(false)} />}\n    </div>\n  );\n}\n')),(0,a.yg)("h3",{id:"state-management"},"State Management"),(0,a.yg)("p",null,"A better practice is to manage the state that affects the portal in the parent component rather than inside the portal itself. That way, all related logic is centralized within one place for easier debugging."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  const [showTooltip, setShowTooltip] = useState(false);\n\n  return (\n    <div>\n      <button\n        onMouseEnter={() => setShowTooltip(true)}\n        onMouseLeave={() => setShowTooltip(false)}\n      >\n        Hover me\n      </button>\n      {showTooltip && (\n        <Tooltip>\n          <p>This is a tooltip</p>\n        </Tooltip>\n      )}\n    </div>\n  );\n}\n")),(0,a.yg)("h3",{id:"styling-consistency"},"Styling Consistency"),(0,a.yg)("p",null,"Portals do not inherit styles from their parent component since the portal itself is outside of the DOM hierarchy of the parent. An example of passing styles directly into the portal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'function Tooltip({ children }) {\n  return createPortal(\n    <div\n      style={{\n        position: "absolute",\n        top: "50px",\n        left: "100px",\n        background: "black",\n        color: "white",\n      }}\n    >\n      {children}\n    </div>,\n    document.body,\n  );\n}\n')),(0,a.yg)("h3",{id:"accessibility"},"Accessibility"),(0,a.yg)("p",null,"Ensure that accessibility is achieved. Use ARIA roles and attributes to ensure the portal content is accessible for proper interaction with screen readers."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'function Modal({ onClose }) {\n  return createPortal(\n    <div role="dialog" aria-modal="true" className="modal">\n      <p>This is a modal.</p>\n      <button onClick={onClose}>Close</button>\n    </div>,\n    document.body,\n  );\n}\n')),(0,a.yg)("h2",{id:"cons-of-the-createportal-api"},"Cons of the ",(0,a.yg)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,a.yg)("p",null,"As hinted above, the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API comes in handy when you're looking to render a component in a different location in the DOM. It is without doubt a very useful feature of the ",(0,a.yg)("inlineCode",{parentName:"p"},"react-dom")," package and has very many useful applications."),(0,a.yg)("p",null,"However, the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API is not without drawbacks. Let's explore its disadvantages in this section."),(0,a.yg)("h3",{id:"css-inherited-properties"},"CSS Inherited properties"),(0,a.yg)("p",null,"Though a portal is still a child of its parent React component, it doesn't inherit CSS properties applied to its parent because it's rendered in a different location in the DOM. This may result in hard-to-find bugs, especially when dealing with complex portals."),(0,a.yg)("p",null,"In the example below, I'm applying ",(0,a.yg)("inlineCode",{parentName:"p"},"color: red")," to the parent ",(0,a.yg)("inlineCode",{parentName:"p"},"div"),". Ordinarily, the nested ",(0,a.yg)("inlineCode",{parentName:"p"},"p")," elements inherit the ",(0,a.yg)("inlineCode",{parentName:"p"},"color")," property from their parent. However, the ",(0,a.yg)("inlineCode",{parentName:"p"},"p")," element rendered using ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," won't because it is rendered in a different location in the DOM."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { createPortal } from "react-dom";\n\nfunction PortalDemo() {\n  return (\n    <div style={{ color: "red" }}>\n      <p>This will be red.</p>\n\n      {createPortal(\n        <p>This won\'t be red.</p>,\n        document.getElementById("portal"),\n      )}\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"Such behavior may result in bugs that may be difficult to trace, especially when dealing with complex applications."),(0,a.yg)("h3",{id:"complex-portals-are-difficult-to-maintain"},"Complex portals are difficult to maintain"),(0,a.yg)("p",null,"Portals may become difficult to maintain if you're dealing with complex interdependent portals. Similarly, it is difficult to reason about the components and the application because of the mismatch between the location of the portal in the DOM and where it is rendered in the React component."),(0,a.yg)("h3",{id:"accessibility-issues"},"Accessibility issues"),(0,a.yg)("p",null,"As we will discuss in the next subsection, the most common use-cases of the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API are for creating toasts, modals, and popups. You will need to go above and beyond to make them accessible."),(0,a.yg)("h3",{id:"mismatch-between-location-in-the-dom-and-event-bubbling"},"Mismatch between location in the DOM and event bubbling"),(0,a.yg)("p",null,"When you render an element in the DOM using ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal"),", the events bubble up the React tree, not the DOM tree. The mismatch between the location of a portal in the DOM and event bubbling may make debugging a little more difficult in complex applications."),(0,a.yg)("h2",{id:"use-cases-of-the-createportal-api"},"Use cases of the ",(0,a.yg)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,a.yg)("p",null,"As hinted above, the most common use-case of the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API is for building UIs such as modals, tooltips, popups, and toasts."),(0,a.yg)("p",null,"The example below shows how to use portals to implement a basic modal in React. You can also implement tooltips, popups, and toasts pretty much similarly."),(0,a.yg)("p",null,"The example below is a basic illustration of the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API without styling."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport { createPortal } from "react-dom";\n\nfunction Modal({ onClose }) {\n  return (\n    <div className="modal">\n      <p>This is a modal.</p>\n      <button onClick={onClose}>Close</button>\n    </div>\n  );\n}\n\nfunction App() {\n  const [showModal, setShowModal] = useState(false);\n  return (\n    <div>\n      <button onClick={() => setShowModal(true)}>Open modal.</button>\n      {showModal &&\n        createPortal(\n          <Modal onClose={() => setShowModal(false)} />,\n          document.body,\n        )}\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.yg)("p",null,"Furthermore, it is also possible to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API to integrate React in a static page or a non-react application because it enables rendering React components anywhere in the DOM."),(0,a.yg)("h2",{id:"testing-portals-in-react-applications"},"Testing Portals in React Applications"),(0,a.yg)("p",null,"I wanted to share some tips on testing React components using the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API. This can be a bit tricky due to the way portals work\u2014rendering outside the parent component's DOM hierarchy. Here are a few practices that should make it easier to test these components effectively."),(0,a.yg)("h3",{id:"make-sure-the-portal-is-displayed-properly"},"Make Sure the Portal is Displayed Properly"),(0,a.yg)("p",null,"First of all, make sure that the portal content actually renders in the correct place of the DOM. The following is an example of how you might test this using React Testing Library:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'import { render } from "@testing-library/react";\nimport { createPortal } from "react-dom";\nimport Modal from "./Modal"; // assume you have a Modal component\n\ntest("renders modal in a portal", () => {\n  const { getByText } = render(<Modal />);\n  expect(getByText("This is a modal.")).toBeInTheDocument();\n  expect(document.body).toContainElement(getByText("This is a modal."));\n});\n')),(0,a.yg)("h3",{id:"test-interactivity-within-the-portal"},"Test Interactivity within the Portal"),(0,a.yg)("p",null,"Test the interactions within the portal, such as how a modal would close after a button is clicked."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'import { render, fireEvent } from "@testing-library/react";\nimport Modal from "./Modal";\n\ntest("should close modal on button click", () => {\n  const onClose = jest.fn();\n  const { getByText } = render(<Modal onClose={onClose} />);\n\n  fireEvent.click(getByText("Close"));\n  expect(onClose).toHaveBeenCalledTimes(1);\n});\n')),(0,a.yg)("h3",{id:"check-accessibility"},"Check Accessibility"),(0,a.yg)("p",null,"If you're concerned about accessibility, you may test whether content in the portal is accessible to screen readers by testing for appropriate ARIA roles and attributes:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'import { render } from "@testing-library/react";\nimport Modal from "./Modal";\n\ntest("modal has correct accessibility attributes", () => {\n  const { getByRole } = render(<Modal />);\n  const modal = getByRole("dialog");\n  expect(modal).toHaveAttribute("aria-modal", "true");\n  expect(modal).toHaveTextContent("This is a modal.");\n});\n')),(0,a.yg)("h3",{id:"unmounting-test"},"Unmounting Test"),(0,a.yg)("p",null,"Make sure that the portal content is properly unmounted once the parent component unmounts. This is very critical to clean up resources and prevent memory leaks."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'import { render, unmountComponentAtNode } from "react-dom";\nimport Modal from "./Modal";\n\ntest("unmounts portal on component unmount", () => {\n  const div = document.createElement("div");\n  document.body.appendChild(div);\n\n  render(<Modal />, div);\n  expect(document.body).toContainElement(div);\n\n  unmountComponentAtNode(div);\n  expect(document.body).not.toContainElement(div);\n});\n')),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"As explained above, the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API is part of the React DOM API. It is for rendering the children of a React component in another location in the DOM."),(0,a.yg)("p",null,"Though a portal is rendered in another location, it behaves like any React child component. It re-renders when its state, props, or context changes and when the parent component re-renders."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," function takes the ",(0,a.yg)("inlineCode",{parentName:"p"},"children"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"domNode"),", and an optional ",(0,a.yg)("inlineCode",{parentName:"p"},"key")," as arguments and returns a React Node, which you can render in another React component or JSX."),(0,a.yg)("p",null,"You can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"createPortal")," API to create toasts, modals, tooltips, and popups such as cookie permissions popups. However, make sure any portal you create is accessible."))}h.isMDXComponent=!0}}]);