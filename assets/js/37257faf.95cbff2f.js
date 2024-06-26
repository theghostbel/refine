"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23612],{58860:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(37953);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),s=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,m=p["".concat(u,".").concat(d)]||p[d]||g[d]||i;return a?t.createElement(m,o(o({ref:n},c),{},{components:a})):t.createElement(m,o({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2532:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});a(37953);var t=a(58860);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})),e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",slug:"javascript-variadic-currying",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-28-js-currying-functions/social-2.png",hide_table_of_contents:!1},u=void 0,s={permalink:"/blog/javascript-variadic-currying",source:"@site/blog/2024-05-27-js-currying-functions.md",title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",date:"2024-05-27T00:00:00.000Z",formattedDate:"May 27, 2024",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:13.68,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",slug:"javascript-variadic-currying",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-28-js-currying-functions/social-2.png",hide_table_of_contents:!1},prevItem:{title:"React useReducer Hook - The Basics",permalink:"/blog/react-usereducer"},nextItem:{title:"Using Google Lighthouse to improve app performance",permalink:"/blog/lighthouse-google-chrome"},relatedPosts:[{title:"How to become a modern Node.js developer?",description:"The most essential skills to have as a modern Node.js developer",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:8.74,date:"2022-09-06T00:00:00.000Z"},{title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",permalink:"/blog/grpc-vs-rest",formattedDate:"January 22, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:15.055,date:"2024-01-22T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with HTML",description:"In this guide, I'm going to show you how to multipart files upload with using HTML and JavaScript",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.515,date:"2021-12-27T00:00:00.000Z"}],authorPosts:[{title:"Building a CRUD app with Shadcn UI and Refine",description:"We demonstrate how to integrate Shadcn UI components to build a collection of components and pages within a Refine app.",permalink:"/blog/shadcn-ui",formattedDate:"March 19, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:31.02,date:"2024-03-19T00:00:00.000Z"},{title:"A Definitive guide on JavaScript every Method",description:"We expound with examples what the JavaScript every method is, how it works and when to use it.",permalink:"/blog/javascript-every-method",formattedDate:"February 7, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.06,date:"2024-02-07T00:00:00.000Z"},{title:"TypeScript keyof with Examples",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",permalink:"/blog/typescript-keyof",formattedDate:"April 1, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.1,date:"2024-04-01T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is JavaScript Currying?",id:"what-is-javascript-currying",level:2},{value:"What is Variadic Currying?",id:"what-is-variadic-currying",level:2},{value:"Benefits of Variadic Currying",id:"benefits-of-variadic-currying",level:3},{value:"Variadic Partial Application",id:"variadic-partial-application",level:2},{value:"Using <code>Function.prototype</code> Methods",id:"using-functionprototype-methods",level:2},{value:"Variadic Currying with Termination",id:"variadic-currying-with-termination",level:2},{value:"Performance Consideration when Using Javascript Currying",id:"performance-consideration-when-using-javascript-currying",level:2},{value:"Bonus: Advanced JavaScript Currying Techniques",id:"bonus-advanced-javascript-currying-techniques",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:p},d="wrapper";function m(e){var{components:n}=e,a=o(e,["components"]);return(0,t.yg)(d,i(function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(n){r(e,n,a[n])}))}return e}({},g,a),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"This article was last updated on May 27, 2024 to add new sections on advanced usage, explanations and performance consideration on JavaScript Currying"))),(0,t.yg)("h2",{id:"introduction"},"Introduction"),(0,t.yg)("p",null,"In this post, we first look at the confusion around currying in JavaScript, especially with respect to polyadic partial application. We find out that we're not really doing currying in the real sense that it is implemented in Haskell, rather in a much limited capacity."),(0,t.yg)("p",null,"In the later part, we delve into variadic currying in a stricter sense with an example that returns unary accumulators."),(0,t.yg)("p",null,"Steps we'll cover:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#what-is-javascript-currying"},"What is JavaScript Currying?")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#what-is-variadic-currying"},"What is Variadic Currying?"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#benefits-of-variadic-currying"},"Benefits of Variadic Currying")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#variadic-partial-application"},"Variadic Partial Application")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#using-functionprototype-methods"},"Using ",(0,t.yg)("inlineCode",{parentName:"a"},"Function.prototype")," Methods")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#variadic-currying-with-termination"},"Variadic Currying with Termination")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#performance-consideration-when-using-javascript-currying"},"Performance Consideration when Using Javascript Currying")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#bonus-advanced-javascript-currying-techniques"},"Bonus: Advanced JavaScript Currying Techniques"))),(0,t.yg)("p",null,"This post is about variadic currying in JavaScript. It is the fifth part of the series titled ",(0,t.yg)("a",{parentName:"p",href:"https://dev.to/anewman15/curry-functions-in-javascript-4jpa"},"Curry Functions in JavaScript"),"."),(0,t.yg)("h2",{id:"what-is-javascript-currying"},"What is JavaScript Currying?"),(0,t.yg)("p",null,"Currying is a way of transforming a multi-argument function into a sequence of functions with a single argument. In other words, if a function will generally receive multiple arguments, it can be represented as a series of functions in which the first one receives one argument and then returns another function to which the next argument is passed as an argument, and so on. This way, we build more modular functions, hence reusable."),(0,t.yg)("p",null,"As an instance here is a function that adds two numbers :"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"function add(a, b) {\n  return a + b;\n}\n")),(0,t.yg)("p",null,"Using currying, we can transform this into:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"function add(a) {\n  return function (b) {\n    return a + b;\n  };\n}\n")),(0,t.yg)("p",null,"Now ",(0,t.yg)("inlineCode",{parentName:"p"},"add(2)(3)")," would produce ",(0,t.yg)("inlineCode",{parentName:"p"},"5"),". That is pretty useful when we want to build partially applied functions for a better readability/maintainability of the code."),(0,t.yg)("p",null,"This property of currying also supports the development of higher-order functions and hence can be used to make function compositions easier in a way that makes the code more graceful and functional."),(0,t.yg)("p",null,"Currying is very powerful stuff in terms of writing reusable code and empowering our functions with a lot of flexibility. It may take a bit of time to get used to, but when one sees the patterns, it is soon recognized as a very useful tool in our JavaScript toolkit."),(0,t.yg)("h2",{id:"what-is-variadic-currying"},"What is Variadic Currying?"),(0,t.yg)("p",null,"Variadic currying is an advanced concept in functional programming. It is an extension of the idea of currying for functions that are supposed to handle variable arguments. In the case of currying with n arguments, the function gets converted into a succession of n functions where each function takes a single argument. Variadic currying extends that concept to handle functions when the number of function arguments is not fixed."),(0,t.yg)("p",null,"In the case of variadic currying, the function receives plural arguments in the first call and in all subsequent calls, but a requirement of each partial application is to still be able to receive a plural number of preferences. This allows the function to be called with plural arguments and made flexible to be useful and reusable with a dynamic number of parameters."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'function concatenate(...strings) {\n  return strings.join(" ");\n}\n\nfunction curry(f) {\n  return function curried(...args) {\n    if (args.length >= f.length) return f(...args);\n    return function (...nextArgs) {\n      return curried(...args, ...nextArgs);\n    };\n  };\n}\n\nconst curriedConcatenate = curry(concatenate);\nconsole.log(curriedConcatenate("Hello")("world!")("How", "are", "you?")()); // Outputs: "Hello world! How are you?"\n')),(0,t.yg)("h3",{id:"benefits-of-variadic-currying"},"Benefits of Variadic Currying"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Flexibility"),": Being able to partially apply functions regardless of the number of arguments, they lean more toward flexibility, molding them in various use cases."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Reusability"),": Functions can be modularized and then reused with different sets of arguments without developing the core logic again and again."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Modularity"),": It allows functions to be used in more modular ways, making the code modular"),(0,t.yg)("h2",{id:"variadic-partial-application"},"Variadic Partial Application"),(0,t.yg)("p",null,"In the previous article titled ",(0,t.yg)("a",{parentName:"p",href:"https://dev.to/anewman15/auto-currying-in-javascript-17il"},"Auto-currying in JavaScript"),", we focused on the ",(0,t.yg)("strong",{parentName:"p"},"unarity")," of curried functions, because that's what a curried function ought to be."),(0,t.yg)("p",null,"We defined two versions of the ",(0,t.yg)("inlineCode",{parentName:"p"},"curry()")," function. The first one maintains unarity of the accumulator function at every level of the recursive stack."),(0,t.yg)("p",null,"In the second definition of ",(0,t.yg)("inlineCode",{parentName:"p"},"curry()")," though, with the spread ",(0,t.yg)("inlineCode",{parentName:"p"},"...args")," arguments, we are introducing polyadic partial application to the first call of the curried function:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"function curry(f) {\n  return function curried(...args) {\n    if (args.length >= f.length) return f(...args);\n    return accumulator;\n\n    function accumulator(a) {\n      return curried(...args, a);\n    }\n  };\n}\n")),(0,t.yg)("p",null,"This is a good starting point to deviate from actual currying. So, now we can take an arbitrary number of arguments for our first call to the curried function:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'function createMessage(greeting, name, message) {\n  return `${greeting}, ${name}! ${message}`;\n}\n\nconst curriedCreateMessage = curry(createMessage);\n\n// First accumulator is a variadic function\nconsole.log(curriedCreateMessage("Hi")("Haskell")("Whadup?")); // Hi, Haskell! Whadup?\nconsole.log(curriedCreateMessage("Hi", "Haskell", "Whadup?")); // Hi, Haskell! Whadup?\nconsole.log(\n  curriedCreateMessage(\n    "Hi",\n    "Haskell",\n    "Whadup?",\n    "Say something",\n    `Let\'s talk.`,\n  ),\n);\n// Hi, Haskell! Whadup?\n\n// Subsequent accumulators are unary\nconsole.log(\n  curriedCreateMessage("Hi")(\n    "Haskell",\n    "Whadup?",\n    "Say something",\n    `Let\'s talk.`,\n  ),\n);\n// [Function: accumulator]\nconsole.log(\n  curriedCreateMessage("Hi")("Haskell")(\n    "Whadup?",\n    "Say something",\n    `Let\'s talk.`,\n  ),\n);\n// Hi, Haskell! Whadup?\n')),(0,t.yg)("p",null,"Notice, we have opened only the first accumulator to accept any number of arguments. Subsequent calls maintain unarity of the accumulator with ",(0,t.yg)("inlineCode",{parentName:"p"},"accumulator(a)")," accepting only one argument."),(0,t.yg)("p",null,"We can deviate more and allow the accumulator to be polyadic with ",(0,t.yg)("inlineCode",{parentName:"p"},"...a"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"function curry(f) {\n  return function curried(...args) {\n    if (args.length >= f.length) return f(...args);\n    return accumulator;\n\n    function accumulator(...a) {\n      return curried(...args, ...a);\n    }\n  };\n}\n")),(0,t.yg)("p",null,"Doing so allows ",(0,t.yg)("inlineCode",{parentName:"p"},"accumulator(...a)")," to be variadic at every level of the recursive stack. So, now we can take multiple arguments in the subsequent calls as well:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'console.log(\n  curriedCreateMessage("Hi")(\n    "Haskell",\n    "Whadup?",\n    "Say something",\n    `Let\'s talk.`,\n  ),\n);\n// Hi, Haskell! Whadup?\nconsole.log(\n  curriedCreateMessage("Hi", "Haskell")(\n    "Whadup?",\n    "Say something",\n    `Let\'s talk.`,\n  ),\n);\n// Hi, Haskell! Whadup?\n')),(0,t.yg)("p",null,"Notice, the additional arguments are gracefully ignored by JavaScript."),(0,t.yg)("p",null,"So basically, what we've done is allow the accumulator to take multiple arguments per call. It ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"can be"))," unary, as well as polyadic. We've lost the essence of currying."),(0,t.yg)("p",null,"But now our ",(0,t.yg)("inlineCode",{parentName:"p"},"curry()")," function is much more powerful. We can pass any number of arguments to an accumulator, as long as that is returned. And it is common to implement this with native JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"Function.prototype")," methods."),(0,t.yg)("h2",{id:"using-functionprototype-methods"},"Using ",(0,t.yg)("inlineCode",{parentName:"h2"},"Function.prototype")," Methods"),(0,t.yg)("p",null,"We can re-write the ",(0,t.yg)("inlineCode",{parentName:"p"},"curry()")," function with ",(0,t.yg)("inlineCode",{parentName:"p"},"Function.prototype.apply"),", and with ",(0,t.yg)("inlineCode",{parentName:"p"},"Function.prototype.bind"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"// with Function.prototype.apply\nfunction curry(f) {\n  return function curried(...args) {\n    if (args.length >= f.length) return f(...args);\n    return accumulator;\n\n    function accumulator(...a) {\n      return curried.apply(this, [...args, ...a]);\n    }\n  };\n}\n\n// with Function.prototype.bind\nfunction curryBound(f) {\n  return function curried(...args) {\n    if (args.length < f.length) return curried.bind(null, ...args);\n    return f(...args);\n  };\n}\n")),(0,t.yg)("p",null,"Refactoring ",(0,t.yg)("inlineCode",{parentName:"p"},"curry()")," with ",(0,t.yg)("inlineCode",{parentName:"p"},"Function.prototype.apply")," is not radically different in terms of the logic. We're just passing in the arguments ",(0,t.yg)("inlineCode",{parentName:"p"},"args")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"a")," as part of an array instead of a list."),(0,t.yg)("p",null,"However, with ",(0,t.yg)("inlineCode",{parentName:"p"},"Function.prototype.bind"),", we are returning a bound function that binds incoming arguments recursively to a copy of itself till we are able to receive all required arguments. So, inside ",(0,t.yg)("inlineCode",{parentName:"p"},"curryBound()"),", the ",(0,t.yg)("inlineCode",{parentName:"p"},"curried()")," function at a current execution context is a bound copy of the ",(0,t.yg)("inlineCode",{parentName:"p"},"curried()")," function called one level below it in the recursive stack with the arguments passed there."),(0,t.yg)("p",null,"To be semantically more accurate, we should rename ",(0,t.yg)("inlineCode",{parentName:"p"},"curryBound()")," to be ",(0,t.yg)("inlineCode",{parentName:"p"},"partialize()")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"curried()")," to be ",(0,t.yg)("inlineCode",{parentName:"p"},"bound()"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"function partialize(f) {\n  return function bound(...args) {\n    if (args.length < f.length) return bound.bind(null, ...args);\n    return f(...args);\n  };\n}\n")),(0,t.yg)("p",null,"This is because, ",(0,t.yg)("inlineCode",{parentName:"p"},"Function.prototype.bind")," applied here allows a variadic and more powerful partial application than unary currying. Really, this is nothing more than native JavaScript partial application with context binding and recursion."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"The Stunner"),"\nOk, so what about invoking our original function, ",(0,t.yg)("inlineCode",{parentName:"p"},"f()"),", when we have all arguments available ?"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"f(...args);\n")),(0,t.yg)("p",null,"We're just calling a polyadic function with all its required arguments. Is it currying ? To me, with ",(0,t.yg)("inlineCode",{parentName:"p"},"f(...args);")," we just embraced back what we wanted to avoid by accepting single arguments at a time. That is, we have not found a way around to call our original function, ",(0,t.yg)("inlineCode",{parentName:"p"},"f()"),", with single arguments sequentially."),(0,t.yg)("p",null,"In Haskell, currying does not involve calling the multary function with all arguments passed in collectively. In JavaScript, we are eventually calling it with all arguments together - and with the possibility of accepting additional ones. We're fooling around."),(0,t.yg)("p",null,"What we're actually doing is, generating a series of variadic accumulators returned in sequence - with good intentions, inspired by currying to begin with. This is probably what currying should idiomatically mean in the sphere of JavaScript."),(0,t.yg)("h2",{id:"variadic-currying-with-termination"},"Variadic Currying with Termination"),(0,t.yg)("p",null,"In a stricter sense, if we want to implement currying in JavaScript - at best - we can go as far as returning unary accumulators. Contrary to this, as we have seen above, variadic multary accumulators are also commonly returned."),(0,t.yg)("p",null,"However, we can go ahead and implement variadic currying by returning unary accumulators as well. This can be a case if our ",(0,t.yg)("inlineCode",{parentName:"p"},"f()")," is variadic itself. Below, we have modified our ",(0,t.yg)("inlineCode",{parentName:"p"},"createMessage()")," function to produce a message for a given arbitrary number of text strings."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'function createMessage(...texts) {\n  return texts.reduce(\n    (combinedText, currentText) => combinedText + currentText,\n    "",\n  );\n}\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Terminator"),"\nHere, we want to curry ",(0,t.yg)("inlineCode",{parentName:"p"},"createMessage()")," with unary accumulators. And we can keep receiving as many arguments we want, without stopping."),(0,t.yg)("p",null,"So, in order to produce a result from a curried variadic function, we have to decide on an arity for ",(0,t.yg)("inlineCode",{parentName:"p"},"f()")," at some point. After we fix an arity of our desire for ",(0,t.yg)("inlineCode",{parentName:"p"},"f()")," by passing in those arguments one at a time, we can terminate the accumulator."),(0,t.yg)("p",null,"The idea is to terminate the accumulator when we receive an empty (",(0,t.yg)("inlineCode",{parentName:"p"},"undefined"),") argument and invoke ",(0,t.yg)("inlineCode",{parentName:"p"},"f()")," with the available arguments. So, the empty parens, ",(0,t.yg)("inlineCode",{parentName:"p"},"()")," acts as the terminator in this case."),(0,t.yg)("p",null,"For a curried function, ",(0,t.yg)("inlineCode",{parentName:"p"},"vCurriedCreateMessage()"),", returned from ",(0,t.yg)("inlineCode",{parentName:"p"},"vCurry()")," by passing in ",(0,t.yg)("inlineCode",{parentName:"p"},"createMessage()"),", let's say we want to terminate the accumulator after 5 arguments. And we want to invoke ",(0,t.yg)("inlineCode",{parentName:"p"},"f()")," after that. It will look something like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'const vCurriedCreateMessage = vCurry(createMessage);\nconst messageHaskell = vCurriedCreateMessage("Hi Haskell,")(\n  `I hope you\'re doing good!`,\n)(`We\'re discussing currying here. Do you wanna join in?`)("See you soon!")(\n  "Bye.",\n);\n\nmessageHaskell();\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"The Plan"),"\nImplementing ",(0,t.yg)("inlineCode",{parentName:"p"},"vCurry()")," follows a slightly different logic, mostly due to the fact that we have to terminate the accumulator on demand with an empty argument, i.e. having a value of ",(0,t.yg)("inlineCode",{parentName:"p"},"undefined"),". And since sometimes a variadic function can potentially take infinite number of arguments, it can lead to infinite currying. We'll talk about infinite currying in an upcoming article, but for such cases ",(0,t.yg)("inlineCode",{parentName:"p"},"f.length")," doesn't play an important role in the currying logic. Instead, length of the incoming arguments is the main point of focus."),(0,t.yg)("p",null,"If we have an incoming argument, we keep accumulating. When we receive none, we terminate and invoke ",(0,t.yg)("inlineCode",{parentName:"p"},"f()")," with accumulated arguments:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"function vCurry(f) {\n  function curried(args) {\n    return function accumulator(a) {\n      if (args.length === 0 || a) return curried([...args, a]);\n      return f(...args);\n    };\n  }\n\n  return curried([]);\n}\n")),(0,t.yg)("p",null,"So, now currying ",(0,t.yg)("inlineCode",{parentName:"p"},"createMessage()")," and invoking the curried function with 5 arguments and then invoking returned function with ",(0,t.yg)("inlineCode",{parentName:"p"},"()")," (empty argument) will produce the message string;"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"const vCurriedCreateMessage = vCurry(createMessage);\nconst messageHaskellShorter = vCurriedCreateMessage(\n  \"Hi Haskell,\\n\",\n  `You can't see this.`,\n)(`I hope you're doing good!\\n`)(\n  `We're discussing currying here. Do you wanna join in?`,\n  \"Bye\",\n);\nconst messageHaskell = vCurriedCreateMessage(\"Hi Haskell,\\n\")(\n  `I hope you're doing good!\\n`,\n)(`We're discussing currying here. Do you wanna join in?\\n`)(\"See you soon!\\n\")(\n  \"Bye.\",\n);\nconst messageHaskellLonger = messageHaskell(\"\\nAbdullah Numan\");\n\nconsole.log(messageHaskellShorter()); // Additional arguments ignored: `You can't see this.`\n/*\nHi Haskell,\nI hope you're doing good!\nWe're discussing currying here. Do you wanna join in?\n*/\n\nconsole.log(messageHaskell()); // Additional arguments ignored:  'Bye'\n/*\nHi Haskell,\nI hope you're doing good!\nWe're discussing currying here. Do you wanna join in?\nSee you soon!\nBye.\n*/\n\nconsole.log(messageHaskellLonger()); // Extended from messageHaskell()\n/*\nHi Haskell,\nI hope you're doing good!\nWe're discussing currying here. Do you wanna join in?\nSee you soon!\nBye.\nAbdullah Numan\n*/\n")),(0,t.yg)("p",null,"Notice the ",(0,t.yg)("inlineCode",{parentName:"p"},"messageHaskellLonger")," function. The curried function can be extended basing on that of a smaller arity to any arbitrary arity, before it gets terminated."),(0,t.yg)("p",null,"Notice also that since we focused on unary implementation of variadic currying, the accumulators ignore the second arguments passed."),(0,t.yg)("p",null,"Currying a variadic function is quite different from currying functions with fixed arity in terms of the logic, especially with respect to how termination is achieved by passing an empty argument. Without termination, it can take infinite number of arguments. In the next article, we'll see an example of infinitely curried function that does not require termination at all."),(0,t.yg)("h2",{id:"performance-consideration-when-using-javascript-currying"},"Performance Consideration when Using Javascript Currying"),(0,t.yg)("p",null,"It, however, does have a bright side; the curried code could be much more readable and modular. On the flip side, however, there are issues related to performance. When a curried function is created, at least two functions are abstracted at that point in time to wrap around each other. This reinstates extra overhead, especially if the function is called from inside a performance-critical section or very frequently. Each level of currying adds a new level of function calling to the stack so, when the program is executed, unless that is well controlled, it's slower."),(0,t.yg)("p",null,"For instance, a simple curried addition function:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"function add(a) {\n  return function (b) {\n    return a + b;\n  };\n}\n")),(0,t.yg)("p",null,"That may look clean enough, but heavy use in a loop or in a performance-heavy application introduces a very noticeable latency compared to what a simple addition function would do."),(0,t.yg)("p",null,"Be cautious when using currying so that poor performance is avoided, especially in performance-critical paths. Prefer a direct usage style when currying in such paths. Besides, modern JavaScript engines try to optimize a lot around function calls. Knowledge about the trade-offs in the different ways those optimizations can be turned on or off will help you be sure to make a better decision when and where to apply currying."),(0,t.yg)("p",null,"While currying really helps to make the code readable and flexible, during such process we must not suffer much from performance at critical sections of our application. Striking the right balance between clean code and efficient execution is important."),(0,t.yg)("h2",{id:"bonus-advanced-javascript-currying-techniques"},"Bonus: Advanced JavaScript Currying Techniques"),(0,t.yg)("p",null,"Beyond the most basic kind of currying that we've already seen, there's a host of more sophisticated tricks to be played. One of them is ",(0,t.yg)("strong",{parentName:"p"},"partial application"),", in which we pre-fill some of the function's arguments, so as to create a more specialized version of the function, but without actually running it. That can be used, in particular, to 'configure' functions with common settings."),(0,t.yg)("p",null,"For example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"function multiply(a, b) {\n  return a * b;\n}\nconst double = multiply.bind(null, 2);\nconsole.log(double(5)); // Outputs 10\n")),(0,t.yg)("p",null,"Another operation is ",(0,t.yg)("strong",{parentName:"p"},"function composition")," which allows to combine several functions into a new one. Function composition is a way to make it easier to tap into the power of currying when transforming and passing data through a pipeline of functions. One can do that with a little help of utility functions from libraries like lodash and Ramda."),(0,t.yg)("p",null,"For instance:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"const compose =\n  (...fns) =>\n  (x) =>\n    fns.reduceRight((y, f) => f(y), x);\nconst add = (a) => (b) => a + b;\nconst square = (x) => x * x;\n\nconst addAndSquare = compose(square, add(2));\nconsole.log(addAndSquare(3)); // Outputs 25\n")),(0,t.yg)("p",null,"We can also consider ",(0,t.yg)("strong",{parentName:"p"},"infinite currying"),"; a function can continue to curry forever, holding its arguments, until enough arguments have been received, at which point it would carry out its computation. This is an attractive feature for function definition, but it needs to be used with care."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"function infiniteCurry(fn, seed) {\n  const reduceValue = (args, arg) => fn.apply(null, args.concat(arg));\n  const next =\n    (...args) =>\n    (arg) =>\n      arg ? next(...args, arg) : args.reduce(reduceValue, seed);\n  return next();\n}\n\nconst sum = infiniteCurry((a, b) => a + b, 0);\nconsole.log(sum(1)(2)(3)()); // Outputs 6\n")),(0,t.yg)("p",null,"These advanced feature additions can significantly enhance our functional programming capabilities within JavaScript. It is a great way to write cleaner, more modular, and reusable code in dealing with big codebases."),(0,t.yg)("h2",{id:"conclusion"},"Conclusion"),(0,t.yg)("p",null,"In this post, we found out that deviating from unary currying in leads to variadic partial application in JavaScript, which turns out to be more powerful. We also saw how currying an existing variadic function follows a different logic than those with fixed arity with a unary implementation."))}m.isMDXComponent=!0}}]);