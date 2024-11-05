"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41252],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",slug:"bun-js-vs-node",authors:"victor_uma",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-04-bun-vs-node/social-3.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/bun-js-vs-node",source:"@site/blog/2024-08-12-bun-vs-node.md",title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",date:"2024-08-12T00:00:00.000Z",formattedDate:"August 12, 2024",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:16.915,hasTruncateMarker:!1,authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],frontMatter:{title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",slug:"bun-js-vs-node",authors:"victor_uma",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-04-bun-vs-node/social-3.png",hide_table_of_contents:!1},prevItem:{title:"Zsh and Bash",permalink:"/blog/zsh-vs-bash"},nextItem:{title:"Beginner's Guide to React Query",permalink:"/blog/react-query-guide"},relatedPosts:[{title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",permalink:"/blog/react-design-patterns",formattedDate:"September 5, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:13.895,date:"2024-09-05T00:00:00.000Z"},{title:"A complete guide to Kubectl exec",description:"We'll go over the basics of kubectl exec, including its syntax, parameters, and how to use it to interact with containers in a Kubernetes pod.",permalink:"/blog/kubectl-exec-command",formattedDate:"October 19, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.53,date:"2023-10-19T00:00:00.000Z"},{title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",permalink:"/blog/uri-vs-url",formattedDate:"September 18, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:14.455,date:"2024-09-18T00:00:00.000Z"}],authorPosts:[{title:"What is Vite? & Vite vs Webpack",description:"We will explore what is Vite.js and compare it to Webpack.",permalink:"/blog/what-is-vite-vs-webpack",formattedDate:"July 30, 2024",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:11.55,date:"2024-07-30T00:00:00.000Z"},{title:"Next.js 13.4's Server Actions and Data Fetching",description:"We'll delve into the Next.js alpha feature Server actions and data fetching techniques.",permalink:"/blog/next-js-server-actions-and-data-fetching",formattedDate:"August 7, 2024",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:16.025,date:"2024-08-07T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"What is a runtime",id:"what-is-a-runtime",level:2},{value:"The Javascript runtime",id:"the-javascript-runtime",level:3},{value:"What is Bun",id:"what-is-bun",level:2},{value:"Why is Bun Fast",id:"why-is-bun-fast",level:2},{value:"Installing the Bun runtime",id:"installing-the-bun-runtime",level:2},{value:"How does Bun compare with Node",id:"how-does-bun-compare-with-node",level:2},{value:"Benchmarking Bun",id:"benchmarking-bun",level:2},{value:"Node.js Cross-Platform Support",id:"nodejs-cross-platform-support",level:3},{value:"Bun Cross-Platform Support",id:"bun-cross-platform-support",level:3},{value:"Comparison of Bun with Other JavaScript Runtimes (e.g., Deno and Node.js)",id:"comparison-of-bun-with-other-javascript-runtimes-eg-deno-and-nodejs",level:2},{value:"Overview of Runtimes",id:"overview-of-runtimes",level:3},{value:"Performance",id:"performance",level:3},{value:"Security",id:"security",level:3},{value:"Ecosystem and Tooling",id:"ecosystem-and-tooling",level:3},{value:"TypeScript Support",id:"typescript-support",level:3},{value:"Community and Adoption",id:"community-and-adoption",level:3},{value:"Conclusion",id:"conclusion",level:3}],m={toc:c},d="wrapper";function g(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on August 12, 2024 to add sections for Cross-Platform Support and Comparison with Other Runtimes (e.g., Deno).")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Do you want to try out a new runtime environment? ",(0,a.yg)("a",{parentName:"p",href:"https://bun.sh/"},"Bun")," is the new Javascript runtime that claims to be better than ",(0,a.yg)("a",{parentName:"p",href:"https://nodejs.org/en"},"Node.js"),". This article will show how we can test this with benchmark scores."),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("p",null,"While there is no prerequisite to follow in this tutorial, you should at least know the fundamentals of Javascript and building basic web applications."),(0,a.yg)("p",null,"You need the followings:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://nodejs.org/en"},"Node 14")," or higher"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://bun.sh/"},"Bun runtime")," installed"),(0,a.yg)("li",{parentName:"ul"},"npm installed"),(0,a.yg)("li",{parentName:"ul"},"A code editor")),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"In this tutorial, we will go over the new Bun runtime that has created a buzz in the tech space lately. We will talk about what a runtime does and why some developers are switching over to using bun. We will also carry out some benchmark test to see if bun really has the fastest runtime as the Bun team says. Let's dive rignt in."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-a-runtime"},"What is a runtime")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-bun"},"What is Bun")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#why-is-bun-fast"},"Why is Bun Fast")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#installing-the-bun-runtime"},"Installing the Bun runtime")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-does-bun-compare-with-node"},"How does Bun compare with Node")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#benchmarking-bun"},"Benchmarking Bun")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#comparison-of-bun-with-other-javascript-runtimes-eg-deno-and-nodejs"},"Comparison of Bun with Other JavaScript Runtimes (e.g., Deno and Node.js)"))),(0,a.yg)("h2",{id:"what-is-a-runtime"},"What is a runtime"),(0,a.yg)("p",null,"Imagine you have a big box of LEGO blocks and you want to build a cool spaceship. You have all the instructions on how to put the pieces together, but you need something to actually assemble the spaceship and make it work. That's where a runtime comes in!\nA runtime is like a special helper that takes care of building and running your LEGO spaceship. It's a program that makes sure all the pieces fit together correctly and that the spaceship does what it's supposed to do."),(0,a.yg)("p",null,"When you give the instructions to the runtime, it reads them step by step and starts putting the LEGO pieces in the right places. It follows the instructions precisely, making sure each piece is connected properly and that everything is in the right order.\nOnce the spaceship is built, the runtime also takes care of making it work. It powers up the spaceship, activates its engines, and controls all its cool features. It's like a small computer inside the spaceship that runs all the commands and makes sure everything runs smoothly."),(0,a.yg)("p",null,"In the world of programming, a runtime is similar. It's a special program that helps run other programs. It reads the instructions of a program, executes them step by step, and makes sure everything works as intended.\nSo, just like the helper in assembling the LEGO spaceship, a runtime is the special program that helps build and run other programs correctly. It's like a smart assistant that makes sure everything works smoothly, just like you'd expect from your awesome LEGO spaceship!."),(0,a.yg)("h3",{id:"the-javascript-runtime"},"The Javascript runtime"),(0,a.yg)("p",null,"The JavaScript runtime is like a translator between JavaScript and the computer. When you tell JavaScript to do something, like add two numbers together, the runtime listens and understands what you want. It then takes that instruction and talks to the computer in a language it understands."),(0,a.yg)("p",null,"The runtime also takes care of other important things. It makes sure JavaScript follows the rules and doesn't make any mistakes. It keeps an eye on JavaScript as it runs, like a teacher watching over a student to make sure they're doing their work correctly."),(0,a.yg)("p",null,"When the runtime talks to the computer and gets the result, it passes it back to JavaScript. It's like the runtime whispers the answer to JavaScript, and then JavaScript can do something with that answer. Maybe it shows the answer on the screen or uses it to make a cool animation."),(0,a.yg)("h2",{id:"what-is-bun"},"What is Bun"),(0,a.yg)("p",null,"Bun is a JavaScript runtime built from scratch using the ",(0,a.yg)("a",{parentName:"p",href:"https://ziglang.org/"},"Zig")," programming language, with a focus on fast startup, efficient code execution, and a cohesive developer experience. It provides tools and features to optimize and streamline the development of JavaScript applications and is designed to be compatible with existing JavaScript ecosystems."),(0,a.yg)("p",null,"When you tell Bun what you want it to do, it listens carefully. It takes your instructions, which are written in a special language called JavaScript, and starts executing them step by step. It's like telling the a car where you want to go and how you want to get there.\nBut Bun doesn't just understand JavaScript\u2014it's also really good at making JavaScript code run really fast! It's like having a car engine that can make your car zoom down the road faster than any other car."),(0,a.yg)("p",null,"Bun is built using a special programming language called Zig. Zig is like a magical tool that allows the people who created Bun to build it in a way that makes it very efficient and fast. It's like the secret recipe that makes Bun so powerful.\nWith Bun, you can do all sorts of things. You can build websites and applications that work really quickly and smoothly. You can also use the Bun CLI (Command Line Interface) to run your JavaScript and TypeScript files, bundle your code together, and even manage your project's dependencies."),(0,a.yg)("h2",{id:"why-is-bun-fast"},"Why is Bun Fast"),(0,a.yg)("p",null,"The Bun runtime exhibits impressive speed due to several key factors:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Lightweight Design"),": Bun is designed to be lightweight, resulting in a smaller codebase and reduced resource requirements. This optimized design allows Bun to deliver better performance in terms of both speed and memory usage compared to other runtimes."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Low-Level Implementation"),": The Bun runtime is built using Zig, a relatively new low-level programming language. Zig's characteristics enable developers to write code with fine-grained control over memory management and execution, contributing to the runtime's efficiency."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Performance Optimization"),": Instead of relying on the V8 engine, Bun utilizes the JavaScriptCore from WebKit, which is widely recognized for its superior performance. By leveraging this core engine, Bun benefits from its optimized execution of JavaScript code, resulting in improved runtime speed."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Integrated Functionality"),": Bun offers native tools and features that streamline the development process. It includes a built-in bundler, replacing the need for external tools like Webpack, as well as a native transpiler that supports writing TypeScript code directly. Additionally, Bun incorporates a test runner similar to Jest and automatically loads environment variables without requiring additional installations of packages like dotenv."),(0,a.yg)("h2",{id:"installing-the-bun-runtime"},"Installing the Bun runtime"),(0,a.yg)("p",null,"To install Bun, you can follow these steps:\nOpen your computer's terminal or command prompt. In the terminal, enter the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"curl -fsSL https://bun.sh/install | bash\n")),(0,a.yg)("p",null,"For macOS users, run this after:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"exec / bin / zsh;\n")),(0,a.yg)("p",null,"This command will initiate the installation process for Bun by downloading the installation script from the official Bun website. Press Enter and allow the installation script to run. It will handle the necessary steps to install Bun and its dependencies on your system. Wait for the installation process to complete. The script will take care of all the required tasks to ensure Bun is properly installed on your computer."),(0,a.yg)("p",null,"Once the installation is finished, you will have successfully installed Bun. You can now start using the Bun runtime to run your JavaScript and TypeScript applications and take advantage of its bundled tools and optimized performance."),(0,a.yg)("h2",{id:"how-does-bun-compare-with-node"},"How does Bun compare with Node"),(0,a.yg)("p",null,"In this section, we'll look at how Bun compares to Node and do some benchmarking between this two runtime."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Performance"),": Bun emphasizes faster startup times and runtime performance by utilizing the JavaScriptCore engine from WebKit, renowned for its speed. In contrast, Node.js relies on the V8 engine, which is also highly optimized but may have performance distinctions compared to JavaScriptCore."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Size and Dependencies"),": Bun strives to be a lightweight runtime with a smaller codebase and minimal dependencies. It incorporates built-in tools like a bundler and transpiler, reducing reliance on external dependencies. In contrast, Node.js is a more comprehensive runtime with a larger codebase and extensive support for external modules and libraries."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Compatibility"),": Although Bun aims to serve as a drop-in replacement for Node.js, there may be variances in API compatibility. While Bun natively implements many Node.js and Web APIs, some specific Node.js modules or APIs might not be fully supported."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Tooling"),": Bun provides an integrated toolkit for JavaScript development, including a bundler, transpiler, and package manager. Node.js, on the other hand, boasts a rich ecosystem of third-party tools and libraries for diverse development tasks, such as popular bundlers like Webpack and package managers like npm or Yarn."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Community and Ecosystem"),": Node.js benefits from a mature and extensive community, offering substantial support, well-documented resources, and a vast ecosystem of modules and libraries. In contrast, Bun, being relatively newer, may have a smaller community and a more focused ecosystem.")),(0,a.yg)("h2",{id:"benchmarking-bun"},"Benchmarking Bun"),(0,a.yg)("p",null,"This benchmarking test is running on my Mac M1, 8gb ram computer. For the benchmarking tool, we will be using ",(0,a.yg)("a",{parentName:"p",href:"https://k6.io/"},"k6")," an open source tool by Grafana labs. You can find the installation guide for this tool ",(0,a.yg)("a",{parentName:"p",href:"https://k6.io/docs/get-started/installation/"},"here"),"."),(0,a.yg)("p",null,"Here is our computer software version:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Node v16.14.2"),(0,a.yg)("li",{parentName:"ul"},"Bun v0.4.0")),(0,a.yg)("p",null,"For our code, I have gotten a simple HTTP server code from the ",(0,a.yg)("a",{parentName:"p",href:"https://bun.sh/"},"Bun")," and ",(0,a.yg)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/getting-started-guide"},"Node.js")," official sites. Here is the Hello World code in Bun and Node"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Node")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const http = require("http");\nconst hostname = "127.0.0.1";\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader("Content-Type", "text/plain");\n  res.end("Hello World");\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n')),(0,a.yg)("p",null,"Run the command in your terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"node server.js\n")),(0,a.yg)("p",null,"Your node server will be running on port: http://localhost:3000/"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Bun")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'export default {\n  port: 3001,\n  fetch(_) {\n    return new Response("Hello World");\n  },\n};\n')),(0,a.yg)("p",null,"Your Bun server will be running on port: http://localhost:3001/"),(0,a.yg)("p",null,"Run the command in your terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"bun run bunserver.js\n")),(0,a.yg)("p",null,"Create a ",(0,a.yg)("inlineCode",{parentName:"p"},"script.js")," file and paste this test script:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import http from "k6/http";\nimport { sleep } from "k6";\n\nexport default function () {\n  http.get("http://localhost:3001/"); // this will change depending on the server you\'re testing for\n  sleep(1);\n}\n')),(0,a.yg)("p",null,"In your terminal run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"k6 run script.js\n")),(0,a.yg)("p",null,"Here is the result for our Node server:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-04-bun-vs-node/node.png",alt:"bun vs node js"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Here is the result for our Bun server:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-04-bun-vs-node/bun.png ",alt:"bun vs node js"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"We can now see and compare Bun speed to Node. If you want to go further you can introduce different latencies, more users and duration with the script:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"k6 run --vus 10 --duration 30s script.js\n")),(0,a.yg)("p",null,"##\xa0Cross-Platform Support with Bun and Node.js"),(0,a.yg)("p",null,"I wanted to discuss the cross-platform support of Bun and Node.js, which I think is a really critical point that we should consider when choosing a runtime for our projects. Here, I've pointed out performance across various operating systems with some command examples:"),(0,a.yg)("h3",{id:"nodejs-cross-platform-support"},"Node.js Cross-Platform Support"),(0,a.yg)("p",null,"Over the last ten years, Node.js has become one of the prominent things to all OSs\u2014macOS, Linux, or Windows. At such time, this makes Node.js a very reliable choice for any developer working with diverse environments. Here are some key points:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"macOS and Linux"),": Node.js works very well on Unix-based systems like macOS and Linux. It fits so well into things such as shell scripting, package management with npm, or Yarn, and many other tools more at home most typically in these environments.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# macOS/Linux\nIf you are using macOS or Linux, Node.js can be installed using\ncurl -fsSL https://deb.nodesource.com/setup_14.x | sudo\nsudo apt-get install -y nodejs\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Windows"),": Node.js also interfaces very well with Windows; it has native installers and is properly integrated, even though this also implies being able to properly work with Windows Subsystem for Linux. The Node.js team has worked out most of the historical differences in path handling and command execution.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-powershell"},"## Installing Node.js on Windows with the Node.js Installer\nwinget install OpenJS.NodeJS\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"ARM and Other Architectures"),": Node.js supports a bunch of processor architectures, including ARM. The major importance here is due to the fact that the devices like Raspberry Pis and Apple M1/M2 are seeing increased adoption.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Install Node.js on Raspberry Pi, which has an ARM architecture\ncurl -fsSL https://deb.nodesource.com/setup_14.x | sudo\nsudo apt-get install -y nodejs\n")),(0,a.yg)("h3",{id:"bun-cross-platform-support"},"Bun Cross-Platform Support"),(0,a.yg)("p",null,"Bun is a pretty new runtime for which many impressive gains have been made in terms of performance and features; cross-platform support is still young. Here's an overview of its current state:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"macOS"),": Bun works great with macOS, especially on Apple's M1/M2 chips. Its performance is at the best level with this platform, and it provides a good service for developers working on macOS.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Install Bun on macOS\ncurl -fsSL https://bun.sh/install | bash\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Linux"),": Bun also works on Linux but, since it's newer, there might be some rough edges, or things could be not as good as with Node.js in terms of community tooling.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Install Bun on Linux\ncurl -fsSL https://bun.sh/install | bash\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Windows"),": Windows support for Bun is still very new. It should be possible to run Bun on Windows, but you might require WSL or possibly come across other limitations when running on a native Windows environment.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Install Bun on Windows using WSL\ncurl -fsSL https://bun.sh/install | bash\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"ARM and Other Architectures"),": Bun is being gradually developed to work with a growing number of architectures; ARM is one example. However, the performance and stability on these architectures have not reached that of Node.js quite yet.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Install Bun on ARM architecture\ncurl -fsSL https://bun.sh/install | bash\n")),(0,a.yg)("h2",{id:"comparison-of-bun-with-other-javascript-runtimes-eg-deno-and-nodejs"},"Comparison of Bun with Other JavaScript Runtimes (e.g., Deno and Node.js)"),(0,a.yg)("p",null,"It will be good to benchmark Bun vs. other JavaScript runtimes like Deno and Node.js. That might put us in perspective about how Bun compares to other JavaScript run-times out there so that we can make a little more educated decision about our use case for the project. Here is a rundown of comparison:"),(0,a.yg)("h3",{id:"overview-of-runtimes"},"Overview of Runtimes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Node.js"),": This is the most established JavaScript runtime, best known for its vast ecosystem, mature tooling, and solid community support. It is based on the V8 JavaScript engine and has been the primary runtime utilized for server-side JavaScript over the last decade.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deno"),": Deno is a new runtime created by Ryan Dahl, the original creator of Node.js. It tries to fix some problems in Node.js, such as security issues and dependency management. Built using V8 and Rust, with its primary focus being on having modern features\u2014like having out-of-the-box support for TypeScript, secured by default, and an inbuilt package manager\u2014this is Deno.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Bun"),": Bun is a newcomer to the JavaScript runtime arena, focusing on performance, speed, and developer experience. It's built with the Zig programming language and uses WebKit's JavaScriptCore engine. It comes with built-in tools, such as a bundler, transpiler, and test runner, to make everything easy for developers."))),(0,a.yg)("h3",{id:"performance"},"Performance"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Node.js"),": Known for good performance in general, especially with I/O-bound applications. It relies on V8, which is optimized around the best possible speed and efficiency, meaning that in certain scenarios it may not be as fast as some newer runtimes.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deno"),": Deno is comparable in performance to Node.js, and it has some advantages in certain areas, such as cold start times and memory usage. Because it uses Rust for the core runtime, it will be that much more memory-safe and, sometimes, even faster.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Bun"),": Bun is particularly speed-optimized with very fast start-up and execution time compared to Node.js and Deno. It achieves this with the help of JavaScriptCore engine and lightweight design, making it an excellent choice for performance-critical applications."))),(0,a.yg)("h3",{id:"security"},"Security"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Node.js"),": Security features are not turned on by default for Node.js; hence, developers need to be proactive for securing their application\u2014careful management of dependencies and configuration of runtime to avoid basic security pitfalls.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deno"),": Security is one of the things that are greatly advertised by Deno. Deno runs by default in a secured, sandboxed environment with explicit permission required for file, network, and environment access, thus reducing the risks of vulnerabilities from third-party packages.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Bun"),": Bun is yet to mature for its security model. It might have the best of a few security characteristics, but it still may not match Deno's inbuilt protection. A developer using Bun has to be extra cautious in practicing security, more so because it's a younger runtime than Deno, and the community is quite smaller."))),(0,a.yg)("h3",{id:"ecosystem-and-tooling"},"Ecosystem and Tooling"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Node.js"),": It has a very large ecosystem since it contains millions of packages available via npm. Also, it is very flexible in use; this is because mature tooling is provided to do anything with it, from build processes to deployment.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deno"),": Growing quickly in an ecosystem, Deno is on its expanding front yet stands way much smaller than Node.js. The module system in Deno is decentralized \u2014 it fetches packages directly from URLs as compared to the centralized repository in npm. This allows more fragmentation but then, even better flexibility.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Bun"),": Bun aims to be a middle ground with a built-in bundler, transpiler, and test runner that reduces the amount of external dependencies but also makes developing easy. However, it is emerging and doesn't have as many third-party packages as Node.js does."))),(0,a.yg)("h3",{id:"typescript-support"},"TypeScript Support"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Node.js"),": Although Node.js does not come natively with TypeScript, it plays along very well with TypeScript due to the commonly used transpilers Babel or using the TypeScript compiler\u200a(tsc). And now due to the strong community support, the TypeScript is being welcomed on strongly, and most of the packages have TypeScript definitions.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deno"),": Deno was designed from the ground up with TypeScript being a first-class language; there isn't any need for the user to need special configuration. This makes it good for developers looking to use TypeScript without any extra setup.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Bun"),": Bun also supports native TypeScript. One can do author in TypeScript without any need for additional configuration or tooling. This helps greatly in easing the pain in the adoption of TypeScript within projects that make use of Bun."))),(0,a.yg)("h3",{id:"community-and-adoption"},"Community and Adoption"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Node.js"),": The largest and most active community, extensive documentation, tutorials, and support\u2014literally, it is applied in any work, from small projects to enterprise-level applications.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deno"),": Around Deno, a community is developing very quickly, mostly for developers who are using modern JavaScript features and focusing on security. Although not as big as the Node.js ecosystem, it has a more alive and friendly community and is more focused on modern best practices.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Bun"),": It is quite a new runtime, so naturally the community around it is small, albeit rapidly developing. It generates a lot of interest due to claims of performance, but it might take yet a while for adoption on the level of Node.js and even Deno."))),(0,a.yg)("p",null,"Final words;"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Node.js"),": Good for developers who need a stable, fully-supported runtime with rich features in tools and libraries.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Deno"),": A good option for a security-centric project looking for JavaScript features at the forefront with first-class TypeScript integration. This is also a good alternative for developers who don't want to get lost in the way package management is done in Node.js.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Bun"),": Ideal for developers with the need for maximum performance, fast startup time, and all-in-one development based on built-in tools; however, its ecosystem is still in maturity, so at this stage, it can better match with critical performance or smaller projects."))),(0,a.yg)("h3",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"In conclusion, Bun and Node.js are two JavaScript runtimes that offer different approaches and features for developers. Bun focuses on delivering fast startup times, optimized performance, and a lightweight design with integrated tools like a bundler and transpiler. It utilizes the JavaScriptCore engine from WebKit to achieve its performance goals. On the other hand, Node.js has a larger ecosystem, extensive community support, and compatibility with a wide range of programming languages. It relies on the V8 engine and offers a rich set of third-party tools and libraries. Choosing between Bun and Node.js depends on factors such as performance requirements, specific project needs, and the availability of suitable tooling and community support. Ultimately, developers can leverage the strengths of each runtime to build robust and efficient JavaScript applications."))}g.isMDXComponent=!0}}]);