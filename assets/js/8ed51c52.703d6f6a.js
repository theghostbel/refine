"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5758],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>p});var i=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(n),h=a,p=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return n?i.createElement(p,r(r({ref:t},c),{},{components:n})):i.createElement(p,r({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var m=2;m<s;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>u});n(37953);var i=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"rem vs em - Everything you need to know",description:"We'll look at everything em and rem, their differences, when and how to use them, and practical examples of em and rem in action",slug:"rem-vs-em",authors:"fimber_elemuwa",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-21-em-vs-rem/social-2.png",hide_table_of_contents:!1},l=void 0,m={permalink:"/blog/rem-vs-em",source:"@site/blog/2024-11-28-em-vs-rem.md",title:"rem vs em - Everything you need to know",description:"We'll look at everything em and rem, their differences, when and how to use them, and practical examples of em and rem in action",date:"2024-11-28T00:00:00.000Z",formattedDate:"November 28, 2024",tags:[{label:"css",permalink:"/blog/tags/css"}],readingTime:13.495,hasTruncateMarker:!1,authors:[{name:"Fimber Elemuwa",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"fimber_elemuwa"}],frontMatter:{title:"rem vs em - Everything you need to know",description:"We'll look at everything em and rem, their differences, when and how to use them, and practical examples of em and rem in action",slug:"rem-vs-em",authors:"fimber_elemuwa",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-21-em-vs-rem/social-2.png",hide_table_of_contents:!1},nextItem:{title:"Beginner's Guide to React Query",permalink:"/blog/react-query-guide"},relatedPosts:[{title:"Neumorphism with CSS - A new design trend",description:"Overview and examples for Neumorphic CSS implementations.",permalink:"/blog/neumorphic-css",formattedDate:"August 20, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.46,date:"2022-08-20T00:00:00.000Z"},{title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",permalink:"/blog/framer-motion-react-animations",formattedDate:"September 1, 2022",authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],readingTime:8.235,date:"2022-09-01T00:00:00.000Z"},{title:"CSS Grid vs Flexbox - A brief guide",description:"In this brief guide, we compare some concepts of the two most popular CSS layout methods - Grid and Flexbox.",permalink:"/blog/css-grid-vs-flexbox",formattedDate:"June 13, 2024",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:8.225,date:"2024-06-13T00:00:00.000Z"}],authorPosts:[]},c={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"What is em and rem in CSS?",id:"what-is-em-and-rem-in-css",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"em and rem units in CSS",id:"em-and-rem-units-in-css",level:2},{value:"What is CSS em",id:"what-is-css-em",level:2},{value:"What is CSS rem",id:"what-is-css-rem",level:2},{value:"Advanced Usage of em and rem",id:"advanced-usage-of-em-and-rem",level:2},{value:"Compound Scaling with em",id:"compound-scaling-with-em",level:3},{value:"Responsive Typography with rem",id:"responsive-typography-with-rem",level:3},{value:"Padding and Margins with rem",id:"padding-and-margins-with-rem",level:3},{value:"Combining em and rem",id:"combining-em-and-rem",level:3},{value:"Differences between em and rem units",id:"differences-between-em-and-rem-units",level:2},{value:"When to use em and rem units in CSS",id:"when-to-use-em-and-rem-units-in-css",level:2},{value:"Accessibility Considerations",id:"accessibility-considerations",level:2},{value:"Scalable Font Sizes",id:"scalable-font-sizes",level:3},{value:"Consistent Spacing",id:"consistent-spacing",level:3},{value:"Responsive Design",id:"responsive-design",level:3},{value:"User Preferences",id:"user-preferences",level:3},{value:"Reduced Motion and Distraction",id:"reduced-motion-and-distraction",level:3},{value:"Implications on Performance",id:"implications-on-performance",level:2},{value:"Reflow and Repaint",id:"reflow-and-repaint",level:3},{value:"Maintaining Consistency",id:"maintaining-consistency",level:3},{value:"Memory Usage",id:"memory-usage",level:3},{value:"CSS Calculations",id:"css-calculations",level:3},{value:"Layout Stability",id:"layout-stability",level:3},{value:"Readability and Maintenance",id:"readability-and-maintenance",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u},h="wrapper";function p(e){var{components:t}=e,n=r(e,["components"]);return(0,i.yg)(h,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"This article was last updated on November 28, 2024, to add sections for clear introduction to rem vs em.")),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"CSS is a crucial part of any website\u2019s design, but understanding the nuances of how to use it can be tricky. One of the most important things to understand is the difference between using rem and em in CSS and why/when you should be using either."),(0,i.yg)("p",null,"Understanding the differences between these two units is crucial for web developers who want to create flexible and responsive web pages that are easy to maintain and modify. It also helps your website meet current web accessibility guidelines."),(0,i.yg)("h3",{id:"what-is-em-and-rem-in-css"},"What is em and rem in CSS?"),(0,i.yg)("p",null,"In CSS, ",(0,i.yg)("inlineCode",{parentName:"p"},"em")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"rem")," represent relative units that display the scalable and responsive results."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"em"),":")," It is relative to the font size of the parent. For example, if a parent font size is 20px, then ",(0,i.yg)("inlineCode",{parentName:"li"},"2em")," will equal 40px."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},":rem"),":")," It's relative to root element font size, usually ",(0,i.yg)("inlineCode",{parentName:"li"},"<html>"),". For example, if root font size is 16px, then ",(0,i.yg)("inlineCode",{parentName:"li"},"1rem")," equals 16px.")),(0,i.yg)("p",null,"Both units scale well and are suitable for accessibility and responsive design: use ",(0,i.yg)("inlineCode",{parentName:"p"},"rem")," when you want to look for consistency across a project, and ",(0,i.yg)("inlineCode",{parentName:"p"},"em")," to act on modules."),(0,i.yg)("p",null,"In this article, we'll look at everything em and rem, their differences, when and how to use them, and practical examples of em and rem in action. At the end of this article, you should have a solid understanding of both values. Without further ado, let\u2019s jump right into it."),(0,i.yg)("p",null,"Steps we'll cover in this article:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#em-and-rem-units-in-css"},"em and rem units in CSS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#what-is-css-em"},"What is CSS em")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#what-is-css-rem"},"What is CSS rem")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#differences-between-em-and-rem-units"},"Differences between em and rem units")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#when-to-use-em-and-rem-units-in-css"},"When to use em and rem units in CSS"))),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("p",null,"This article expects the reader to have a solid grasp of CSS. While you don\u2019t have to be a CSS god(Hi Kevin Powell), it\u2019d help if basic CSS terms do not confuse you."),(0,i.yg)("h2",{id:"em-and-rem-units-in-css"},"em and rem units in CSS"),(0,i.yg)("p",null,"When looking for ways of specifying lengths in CSS, we\u2019re quite spoiled for choices. All units for specifying lengths in CSS fall under two categories."),(0,i.yg)("p",null,"Absolute lengths: Absolute lengths, as the name suggests, are absolute; they\u2019re fixed and don\u2019t react relative to anything. This means no matter what happens, they\u2019ll be the same size. Absolute lengths include cm, mm, in, px, pts, and pc.\nRelative lengths: Relative lengths are units that specify a length relative to another unit, i.e., they respond based on other specified units or elements. They include %, vmax, vmin, vh, vw, ch, ex, and the units we\u2019ll be talking about, em and rem."),(0,i.yg)("p",null,"If you\u2019d like to know more about these units, you can do so here. Now let\u2019s look at the two units we came here for."),(0,i.yg)("h2",{id:"what-is-css-em"},"What is CSS em"),(0,i.yg)("p",null,"Like I said above, em units in CSS are a relative unit of measurement used to size elements on a web page, mostly font size. Because it\u2019s relative to its parent element, 1 em is equal to the font-size set in the parent element."),(0,i.yg)("p",null,"This means if you set the font-size in a parent div to 20px and set the font-size of the child div to 2 em, the font-size in the child div will equal 40px. Here\u2019s an example."),(0,i.yg)("p",null,"First, let\u2019s write the HTML"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n   <div class="parent">\n    I\'m parent div set to 20px\n    <div class="child">\n        I\'m the child div set to 2em, i.e 40px.\n    </div>\n   </div>\n</body>\n</html>\n\nNext, the CSS.\n\n.parent{\n    font-size: 20px;\n}\n\n.child{\n    font-size: 2em;\n}\n\np {\n    font-size: 1.5em;\n }\n')),(0,i.yg)("p",null,"That will give us this."),(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-21-em-vs-rem/em-vs-rem-1.png",alt:"em-vs-rem"}),(0,i.yg)("br",null),(0,i.yg)("p",null,"The em unit is useful because it allows you to adjust the size of elements on a page based on the font-size of a previously stated element, which helps create a consistent visual hierarchy. This can be useful for creating accessible websites that are easy to read for users with visual impairments."),(0,i.yg)("p",null,"It\u2019s important to note that if you don\u2019t specify the value of a parent element, the default value of the browser is taken as the parent element."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"p {\n    font-size: 1.5em;\n }\n")),(0,i.yg)("p",null,"In this example, the font-size property is set to 1.5em, meaning that the text size in the ",(0,i.yg)("inlineCode",{parentName:"p"},"<p>")," element will be 1.5 times the size of the browser's default font-size if there\u2019s no direct parent element."),(0,i.yg)("p",null,"Since most browsers scale their default font-size according to the screen size, this allows you to create flexible and responsive layouts that can adapt to different screen and font sizes."),(0,i.yg)("p",null,"Using the appropriate CSS properties, em units can also be used to set the size of other elements, such as margins, padding, and borders."),(0,i.yg)("h2",{id:"what-is-css-rem"},"What is CSS rem"),(0,i.yg)("p",null,'Now that we know what em is, let\u2019s look at rem. rem is another unit of measuring length in CSS, which stands for "root em". Since we know that an em is equal to the point size of the current font, we can deduce that the "root em" refers to the font size of the root element, which is usually the ',(0,i.yg)("inlineCode",{parentName:"p"},"<html>")," element."),(0,i.yg)("p",null,"Confused? Let\u2019s break it down more."),(0,i.yg)("p",null,"Like em, rem inherits its size from a parent element, but the parent element that rem looks at is not the div or section above it, but the very first element that surrounds it, which is the html element. Let\u2019s make an example using the previous code. Same html code, with just an extra div."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n   <div class="parent">\n    I\'m parent div set to 20px\n    <div class="child">\n        I\'m the child div set to 2em, i.e 40px.\n    </div>\n    <div class="child-2">\n        I\'m the child div set to 2em, i.e 60px.\n    </div>\n   </div>\n</body>\n</html>\n')),(0,i.yg)("p",null,"Next, we\u2019ll add the following CSS code to our CSS file."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"html{\n    font-size: 30px;\n }\n\n .child-2{\n    font-size: 2rem;\n }\n")),(0,i.yg)("p",null,"The result would be this."),(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-21-em-vs-rem/em-vs-rem-2.png",alt:"em-vs-rem"}),(0,i.yg)("br",null),(0,i.yg)("p",null,"As you can see, despite the child-2 div being inside another divs, it goes back all the way to the html element to inherit its font size."),(0,i.yg)("p",null,'Using the "rem" unit allows for a more scalable and flexible way to size elements on a page because if you change the font-size of the root element, all elements sized with the "rem" unit will be updated automatically to maintain their relative size.'),(0,i.yg)("h2",{id:"advanced-usage-of-em-and-rem"},"Advanced Usage of em and rem"),(0,i.yg)("p",null,"I thought it would be useful to dive deeper into some advanced techniques for using em and rem units in our CSS. These units offer a lot of flexibility, and we can leverage them to create more dynamic and responsive designs."),(0,i.yg)("p",null,"Here are a few advanced strategies for using em and rem units:"),(0,i.yg)("h3",{id:"compound-scaling-with-em"},"Compound Scaling with em"),(0,i.yg)("p",null,"We can use em units to create compound scaling effects within nested elements. For instance, if we set a parent element to have a font size of 2em, and a child element to have a font size of 1.5em, the child\u2019s font size will be 1.5 times the parent\u2019s size, creating a scalable hierarchy."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".parent {\n  font-size: 2em;\n}\n\n.child {\n  font-size: 1.5em; /* This will be 1.5 * 2em = 3em */\n}\n")),(0,i.yg)("h3",{id:"responsive-typography-with-rem"},"Responsive Typography with rem"),(0,i.yg)("p",null,"Using rem units for typography ensures that all text scales relative to the root font size. By adjusting the root font size with media queries, we can easily create responsive typography."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},"html {\n  font-size: 16px; /* Default root font size */\n}\n\n@media (max-width: 600px) {\n  html {\n    font-size: 14px; /* Smaller font size for small screens */\n  }\n}\n\nbody {\n  font-size: 1rem; /* 1rem = 16px by default, 14px on small screens */\n}\n")),(0,i.yg)("h3",{id:"padding-and-margins-with-rem"},"Padding and Margins with rem"),(0,i.yg)("p",null,"We can use rem units for padding and margins to maintain consistent spacing across different screen sizes. This approach ensures that spacing scales appropriately when the root font size changes."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".container {\n  padding: 2rem; /* Padding will scale with the root font size */\n  margin: 1rem auto;\n}\n")),(0,i.yg)("h3",{id:"combining-em-and-rem"},"Combining em and rem"),(0,i.yg)("p",null,"In some cases, combining em and rem can offer the best of both worlds. For example, we can use rem units for global settings and em units for local, relative adjustments within components."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},".global {\n  font-size: 1rem; /* Relative to root */\n}\n\n.component {\n  font-size: 1.5em; /* Relative to its parent, .global in this case */\n}\n")),(0,i.yg)("p",null,"###\xa0Creating Modular Scales\nWe can use em or rem units to create modular scales, which are predefined ratios for scaling text and other elements. This method provides a consistent visual rhythm across the site."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},"html {\n  font-size: 16px; /* Base font size */\n}\n\n.h1 {\n  font-size: 3rem; /* 48px */\n}\n\n.h2 {\n  font-size: 2.25rem; /* 36px */\n}\n\n.h3 {\n  font-size: 1.5rem; /* 24px */\n}\n")),(0,i.yg)("p",null,"By using these advanced techniques, we can create more adaptable and visually consistent designs."),(0,i.yg)("h2",{id:"differences-between-em-and-rem-units"},"Differences between em and rem units"),(0,i.yg)("p",null,"By now, you already know the difference between em and rem, but just for the sake of clarity, I\u2019d like to restate the difference between both values."),(0,i.yg)("p",null,"In CSS, the rem unit is only relative to the document's root element, while the em unit is only relative to the immediate parent of the targeted element. This means that em sizes are inherited from parent elements, while rem sizes are inherited only from the root element."),(0,i.yg)("h2",{id:"when-to-use-em-and-rem-units-in-css"},"When to use em and rem units in CSS"),(0,i.yg)("p",null,"It is a good idea to use the rem unit for global values such as font-sizes, margins, and padding, especially if you want to specify a font-size for the entire document and have it scale uniformly rather than being influenced by the font sizes of parent elements."),(0,i.yg)("p",null,"em is more suited for values that are specific to a particular element and its children. This allows you to create a consistent and flexible layout that adjusts well to different screen sizes and font sizes.\nPotential problems with using em and rem units in CSS\nem and rem are by far the best units to use today when specifying length, but like all things in life, they\u2019re not perfect. These are a couple of problems you may run into when using em and rem:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Complex calculations:")," Using em and rem units can lead to complex calculations, especially when nested elements are involved. This can make it difficult to accurately predict and control the size of elements on a page."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Inheritance issues:")," Because em units are relative to the font size of their parent element, it can be difficult to understand and control how sizes are inherited across the page. This can lead to unexpected results and require additional debugging to resolve."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Performance issues:")," In some very rare cases, using em and rem units can have a negative impact on performance, especially when combined with complex calculations or used excessively on a page.")),(0,i.yg)("p",null,"Overall, while em and rem units can be helpful in certain situations, it's important to consider their potential drawbacks carefully and whether they are the best choice for your project."),(0,i.yg)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,i.yg)("p",null,"Let me share some thoughts on the ways in which we could make our web designs much more accessible using em and rem units in CSS. Things that really make a difference, for instance, are how the content would be perceived or accessed by a user with disabilities."),(0,i.yg)("p",null,"You can increase the accessibility of our web pages using em and rem units. Here's why:"),(0,i.yg)("h3",{id:"scalable-font-sizes"},"Scalable Font Sizes"),(0,i.yg)("p",null,"Because I used either ",(0,i.yg)("inlineCode",{parentName:"p"},"em")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"rem")," for the font sizes, then text on the webpage gets scalable to respond to user needs. This is beneficial to people with visual impairments who may desire a larger text size for comfort in reading. Browsers can scale these units more easily than fixed units."),(0,i.yg)("h3",{id:"consistent-spacing"},"Consistent Spacing"),(0,i.yg)("p",null,"By using rem for margins, padding, and other spacing properties, it's certain everything scales consistently. This could improve the predictability of the layout structure, which can help users with cognitive disabilities."),(0,i.yg)("h3",{id:"responsive-design"},"Responsive Design"),(0,i.yg)("p",null,"As already explained, both 'em' and 'rem' units are relative units, so designing a responsible layout becomes a lot easier. The layout then dynamically adapts according to screen size because the sizes of screens change, which is paramount as users are from diverse devices and can use assistive technologies."),(0,i.yg)("h3",{id:"user-preferences"},"User Preferences"),(0,i.yg)("p",null,"Some users set up their browser to have a different font size from the default to increase readability. By designing with ",(0,i.yg)("inlineCode",{parentName:"p"},"rem")," units, user styles get respected, and our content stays accessible."),(0,i.yg)("h3",{id:"reduced-motion-and-distraction"},"Reduced Motion and Distraction"),(0,i.yg)("p",null,"Em and rem units make it more in control to resize and reposition the elements, reducing unnecessary movement and distractions visually\u2014a very challenging experience for users with attention-related disabilities. In short, we use em and rem units in our CSS to make the design more accessible and user-friendly. It is such a small but powerful way of using inclusive and adaptive design to cater to a wider scope of user needs."),(0,i.yg)("h2",{id:"implications-on-performance"},"Implications on Performance"),(0,i.yg)("p",null,"I just want to share with you some insights on what impacts performance when using em or rem units within CSS. Understanding them can serve to make better decisions for the design of our stylesheets to ensure the applications run smoothly."),(0,i.yg)("h3",{id:"reflow-and-repaint"},"Reflow and Repaint"),(0,i.yg)("p",null,"When we use em units, the browser needs to calculate sizes relative to their parent elements. That can lead to reflows and repaints when structures are deeply nested. This is one reason using rem units can make for less complexity; in this case, all calculations are only relative to the root element."),(0,i.yg)("h3",{id:"maintaining-consistency"},"Maintaining Consistency"),(0,i.yg)("p",null,"The application will use rem units consistently. This is really helpful for responsive design. Changing the root font size will scale all other elements that use rem units in a proportional manner. It could lead to an easier rendering process within the browser."),(0,i.yg)("h3",{id:"memory-usage"},"Memory Usage"),(0,i.yg)("p",null,"Em units might mean more memory usage: Since each element with an em unit needs to remember the computed value based on its parent, rem units based on the root may keep memory usage small and predictable."),(0,i.yg)("h3",{id:"css-calculations"},"CSS Calculations"),(0,i.yg)("p",null,"The browser computes the size and position of elements used by CSS calculations. This makes em units slightly heavy computationally, as they have to reference parents in any given case. Rem units in some calculations have only one reference point; therefore, it can be much simpler, making it computationally faster."),(0,i.yg)("h3",{id:"layout-stability"},"Layout Stability"),(0,i.yg)("p",null,"Units in rem can maintain layout stability between multiple screen sizes and resolutions. Because the base font size inside the root element is set, and the unit for element sizes is rem, all other elements will be resized proportionally; as a result, layout shifting will be lesser, and user experience will increase."),(0,i.yg)("h3",{id:"readability-and-maintenance"},"Readability and Maintenance"),(0,i.yg)("p",null,"Using rem units will allow you to have more readability and maintainability in your stylesheet. Defining this base value globally makes the size of elements at a glance predictable and visible in your stylesheets. This could cut down on hours spent debugging layout concerns and actually make development a whole lot more productive."),(0,i.yg)("p",null,"For example, let's consider this quick example to draw out the points above:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},"html {\n  font-size: 16px; /* Base font size */\n}\n\n.container {\n  padding: 2rem; /* Easier for the browser to calculate */\n  margin: 1rem auto;\n}\n\n.child {\n  font-size: 1.5em; /* Less work for the browser to calculate */\n}\n")),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"If you made it here, congratulations! You now know all there is to know about em and rem and why we need them. Though they\u2019re both similar, they\u2019re distinctly different and should be treated accordingly."),(0,i.yg)("p",null,"Personally, I prefer using rem over em for components, but I usually use em for headers and text elements. No real reason, just my quirk. I hope you found this article helpful, and I hope it becomes your cheatsheet whenever you get confused about em and rem."))}p.isMDXComponent=!0}}]);