"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45681],{58860:(e,n,o)=>{o.d(n,{xA:()=>p,yg:()=>u});var t=o(37953);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),m=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},p=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(o),g=a,u=c["".concat(l,".").concat(g)]||c[g]||d[g]||i;return o?t.createElement(u,r(r({ref:n},p),{},{components:o})):t.createElement(u,r({ref:n},p))}));function u(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var m=2;m<i;m++)r[m]=o[m];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},36177:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>c});o(37953);var t=o(58860);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})),e}function r(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const s={title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",slug:"nodemon",authors:"necati",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-30-nodemon/social.png",hide_table_of_contents:!1},l=void 0,m={permalink:"/blog/nodemon",source:"@site/blog/2024-11-08-nodemon.md",title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",date:"2024-11-08T00:00:00.000Z",formattedDate:"November 8, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:10.62,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",slug:"nodemon",authors:"necati",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-30-nodemon/social.png",hide_table_of_contents:!1},prevItem:{title:"Dictionaries in TypeScript -  How to Ensure Type Safety",permalink:"/blog/typescript-dictionary"},nextItem:{title:"React useReducer Hook - The Basics",permalink:"/blog/react-usereducer"},relatedPosts:[{title:"How to Delete Local and Remote Git Branches",description:"We will take a look the example of deleting local and remote Git branches.",permalink:"/blog/git-delete-remote-branch-and-local-branch",formattedDate:"November 27, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.725,date:"2024-11-27T00:00:00.000Z"},{title:"Beginner's Guide to React Query",description:"We'll be looking at the basics of React Query, how to use it, and why you should use it.",permalink:"/blog/react-query-guide",formattedDate:"November 28, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:13.42,date:"2024-11-28T00:00:00.000Z"},{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",permalink:"/blog/docker-run-command",formattedDate:"June 24, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.855,date:"2023-06-24T00:00:00.000Z"}],authorPosts:[{title:"Announcing the Refine Open Source Hackathon 2 Winners",description:"We're thrilled to announce the winners of the Refine Open Source Hackathon 2!",permalink:"/blog/refine-hackathon-2-winners",formattedDate:"August 4, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.005,date:"2023-08-04T00:00:00.000Z"},{title:"refine Joins the Hacktoberfest Fun",description:"Hactoberfest is back and we are excited to be a part of it. Join us in making open source contributions.",permalink:"/blog/hacktoberfest-refine",formattedDate:"October 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.88,date:"2022-10-04T00:00:00.000Z"},{title:"Mocking API calls in React Tests with Nock",description:"How to test API calls in React?",permalink:"/blog/mocking-api-calls-in-react",formattedDate:"August 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.755,date:"2022-08-04T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"Update: Enhanced Watch Mode in Node.js Version 22",id:"update-enhanced-watch-mode-in-nodejs-version-22",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Installing Nodemon",id:"installing-nodemon",level:2},{value:"Using Nodemon",id:"using-nodemon",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Using Nodemon inside Docker Containers",id:"using-nodemon-inside-docker-containers",level:2},{value:"Why Use Nodemon with Docker?",id:"why-use-nodemon-with-docker",level:3},{value:"Basic Troubleshooting Tips",id:"basic-troubleshooting-tips",level:3},{value:"Memory Leak Handling in Longer Running Nodemon Processes",id:"memory-leak-handling-in-longer-running-nodemon-processes",level:2},{value:"Why memory leaks happen in long-running Nodemon processes",id:"why-memory-leaks-happen-in-long-running-nodemon-processes",level:3},{value:"Prevention strategies for memory leaks using Nodemon",id:"prevention-strategies-for-memory-leaks-using-nodemon",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},g="wrapper";function u(e){var{components:n}=e,o=r(e,["components"]);return(0,t.yg)(g,i(function(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),t.forEach((function(n){a(e,n,o[n])}))}return e}({},d,o),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"This article was last updated on November 8, 2024 to include advanced Nodemon configurations and best practices for handling memory management in long-running processes.")),(0,t.yg)("h2",{id:"update-enhanced-watch-mode-in-nodejs-version-22"},"Update: Enhanced Watch Mode in Node.js Version 22"),(0,t.yg)("p",null,"One of the standout features in the latest release of Node.js, ",(0,t.yg)("a",{parentName:"p",href:"https://nodejs.org/en/blog/announcements/v22-release-announce"},"version 22"),", is the improved watch mode. This feature is now considered stable, which means it's no longer experimental and can be relied upon for regular use."),(0,t.yg)("p",null,"Watch mode simplifies developers' lives by automatically restarting the Node.js process whenever it detects changes in the files being monitored. This is particularly useful if you're working on large projects where manual restarts can be tedious and time-consuming."),(0,t.yg)("p",null,"Previously, developers might have used tools like Nodemon and Watchman to manage file changes, especially on Windows, where detecting these changes could be challenging. Watch mode offers a more integrated and straightforward approach, eliminating the need for external tools and streamlining the development process."),(0,t.yg)("p",null,"By using watch mode, you no longer need to manually restart your server or tools like Nodemon after making changes to your code. This saves time and allows you to see the effects of your changes immediately, making your development workflow much more efficient."),(0,t.yg)("h2",{id:"introduction"},"Introduction"),(0,t.yg)("p",null,"As a developer, you know how tedious it is to restart the application every time you tweak the code. Nodemon eliminates this hassle by automatically restarting the app whenever any change is detected. It's incredibly helpful as it lets you concentrate on coding without interruption."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://nodemon.io/"},"Nodemon")," watches the files in your project and instantly applies updates by restarting your app\u2014no more manual resets. This has noticeably sped up my development process, making it smoother and more productive. It\u2019s especially crucial in a fast-paced work environment where every second counts."),(0,t.yg)("p",null,"Steps we'll cover in this guide:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#installing-nodemon"},"Installing Nodemon")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#using-nodemon"},"Using Nodemon")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#advanced-configuration"},"Advanced Configuration")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#using-nodemon-inside-docker-containers"},"Using Nodemon inside Docker Containers"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#why-use-nodemon-with-docker"},"Why Use Nodemon with Docker?")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#basic-troubleshooting-tips"},"Basic Troubleshooting Tips")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#memory-leak-handling-in-longer-running-nodemon-processes"},"Memory Leak Handling in Longer Running Nodemon Processes"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#why-memory-leaks-happen-in-long-running-nodemon-processes"},"Why memory leaks happen in long-running Nodemon processes")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#prevention-strategies-for-memory-leaks-using-nodemon"},"Prevention strategies for memory leaks using Nodemon"))))),(0,t.yg)("h2",{id:"installing-nodemon"},"Installing Nodemon"),(0,t.yg)("p",null,"I just went through setting up Nodemon. You install it using npm, the Node.js package manager. Just open your terminal and type:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"npm install -g nodemon\n")),(0,t.yg)("p",null,"This installs Nodemon globally on your system, so you can use it for any project. To make sure it's installed correctly, you can check its version with:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"nodemon --version\n")),(0,t.yg)("p",null,"If it shows the version, you're all set! Nodemon will now automatically restart your Node.js applications whenever you make changes. It\u2019s a real time-saver, making it smoother to develop without breaking your flow."),(0,t.yg)("h2",{id:"using-nodemon"},"Using Nodemon"),(0,t.yg)("p",null,"Here's a simple Express.js application example using Nodemon:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'// 1. First, install the Express.js and Nodemon modules\nconst express = require("express");\nconst app = express();\n\n// 2. Define a simple endpoint to listen for HTTP requests\napp.get("/", (req, res) => {\n  res.send("Hello, World!");\n});\n\n// 3. Start listening for the application on a specific port\nconst port = 3000;\napp.listen(port, () => {\n  console.log(`Server successfully connected to port ${port}.`);\n});\n')),(0,t.yg)("p",null,"This represents a basic Express.js application. The main file can be named ",(0,t.yg)("inlineCode",{parentName:"p"},"app.js"),", for example. Now let's demonstrate how to use Nodemon to automatically restart this application."),(0,t.yg)("p",null,"First, make sure you're in your project directory where your Node.js application, like an Express.js app, is located."),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Install Express.js and Nodemon if you haven\u2019t already.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"npm install express nodemon\n")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"After installing Nodemon, using it to automatically restart your Node.js apps is simple. Navigate to the directory where your Node.js application is located using the terminal or command prompt. Once you're in the project directory, you can start your Node.js application with Nodemon by typing:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"nodemon app.js\n")),(0,t.yg)("p",null,"This command fires up your application with Nodemon, so it automatically restarts whenever you change any files. For instance, if you update the response in your ",(0,t.yg)("inlineCode",{parentName:"p"},"app.js")," from 'Hello, World!' to something else and save, Nodemon immediately restarts and applies the update without you needing to do anything."),(0,t.yg)("p",null,"Also, here\u2019s what you typically see in the terminal when you start:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},"[nodemon] 2.0.15\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,json\n[nodemon] starting `node app.js`\nServer successfully connected to port 3000.\n")),(0,t.yg)("p",null,"It shows Nodemon is watching all your files and is ready to restart anytime you make edits."),(0,t.yg)("p",null,"In this output:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"[nodemon] 2.0.15"),": This indicates the version of Nodemon being used."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"[nodemon] to restart at any time, enter 'rs'"),": This message informs you that you can manually restart the application at any time by entering 'rs' in the terminal."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"[nodemon] watching path(s): *.*"),": Nodemon is watching for changes in all files and directories."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"[nodemon] watching extensions: js,json"),": Nodemon is specifically watching for changes in JavaScript and JSON files."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"[nodemon] starting 'node app.js'"),": Nodemon is starting the Node.js application (",(0,t.yg)("inlineCode",{parentName:"li"},"app.js")," in this case)."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"Server successfully connected to port 3000."),": This message indicates that the Express.js server has successfully started and is listening on port 3000.")),(0,t.yg)("h2",{id:"advanced-configuration"},"Advanced Configuration"),(0,t.yg)("p",null,"I\u2019ve been diving deeper into Nodemon\u2019s capabilities and found some cool ways to customize its behavior to better suit our projects. Nodemon allows you to tailor its restart rules according to our specific needs, which is super handy."),(0,t.yg)("p",null,"Here\u2019s a breakdown:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"File Watch Patterns"),": You can set Nodemon to watch only specific directories. This is great because it lets us focus on crucial parts of our project without getting distracted by unnecessary restarts."),(0,t.yg)("p",{parentName:"li"},"For instance, if you only want to watch the ",(0,t.yg)("inlineCode",{parentName:"p"},"src")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"config")," directories, your config would look like this:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "watch": ["src", "config"]\n}\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Ignore Patterns"),": We can also tell Nodemon to ignore certain directories that don\u2019t impact our app\u2019s functionality, like log files or public assets. This means Nodemon won\u2019t restart when changes occur in these areas."),(0,t.yg)("p",{parentName:"li"},"Here\u2019s how you could set it up to ignore the ",(0,t.yg)("inlineCode",{parentName:"p"},"logs")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"public")," directories:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "ignore": ["logs", "public"]\n}\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Delaying Restarts"),": If rapid successive changes are causing too many restarts, we can introduce a delay. This gives us a buffer after making changes before Nodemon restarts the app, helping stabilize our development environment."),(0,t.yg)("p",{parentName:"li"},"For adding a one-second delay, you\u2019d configure it like this:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "delay": 1000\n}\n')))),(0,t.yg)("p",null,"These tweaks have made a noticeable difference in managing the development flow, especially in complex projects. I think implementing these could really streamline how we handle automatic restarts in our development process!"),(0,t.yg)("h2",{id:"using-nodemon-inside-docker-containers"},"Using Nodemon inside Docker Containers"),(0,t.yg)("p",null,"I wanted to share this tutorial on how one integrates Nodemon with Docker, which turns out to be a game-changing setup when using Node.js applications running in Docker containers. This will allow it inside the Docker to, automatically restart the application in the container whenever changes are made to the code."),(0,t.yg)("h3",{id:"why-use-nodemon-with-docker"},"Why Use Nodemon with Docker?"),(0,t.yg)("p",null,"One of the most important advantages of developing in Docker containers is that we usually rebuild or restart the container for every change in the code, which really takes a lot of time. This step can be skipped by integrating Nodemon and letting Nodemon watch the changes in files and restart on its own inside the container."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Setting up Nodemon with Docker")),(0,t.yg)("p",null,"To use Nodemon inside a Docker container, we will add Nodemon in our project and make some changes to the Docker configuration. Here is how you can do this step by step:"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Integrate Nodemon into the Project")),(0,t.yg)("p",null,"First, ensure Nodemon is installed within the project:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev nodemon\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Dockerfile Update for Nodemon"),"\nNext, in Dockerfile, set Nodemon as a command to start our app. Here\u2019s a basic example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-dockerfile"},'FROM node:14\n\n# Set working directory\nWORKDIR /app\n\n# copy package.json and install dependencies\nCOPY package*.json ./\nRUN npm install\n\n# Copy the rest of the application\nCOPY . .\n\n# Require Nodemon installation globally\nRUN npm install -g nodemon\n\n# Expose the required port\nEXPOSURE 3000\n\n# Nodemon as default run command\nCMD ["nodemon", "app.js"]\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Create a Volume for Live Reloading"),"\nIn Docker, we will use volumes, so changes made to the files from our host machine reflect inside the container. By doing so, Nodemon will be able to detect real-time file change. Here\u2019s an example docker-compose.yml file to set that up:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  app:\n    build: .\n    volumes:\n      - .:/app # Mount current directory to /app in the container\n      - /app/node_modules # Avoids conflicts with the host node_modules\n    ports:\n      - "3000:3000"\n    command: nodemon app.js\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Running a Container")),(0,t.yg)("p",null,"Everything should now be set. Start your container:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,t.yg)("p",null,"This setup will allow you to make changes to the code on your local machine, which are instantly reflected inside the container because of the volume mount; then Nodemon will detect these changes and restart the application automatically."),(0,t.yg)("h3",{id:"basic-troubleshooting-tips"},"Basic Troubleshooting Tips"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Permissions Issues: Sometimes on some systems, file permissions can be why Nodemon does not detect changes. You might want to change permissions or run Docker as root if this exists."),(0,t.yg)("li",{parentName:"ul"},"Conflicting node_modules: Remember, while working with docker-compose.yml the application\u2019s node_modules should not be part of the volume mount. If different, this causes conflict between the host and container.")),(0,t.yg)("h2",{id:"memory-leak-handling-in-longer-running-nodemon-processes"},"Memory Leak Handling in Longer Running Nodemon Processes"),(0,t.yg)("p",null,"We would especially want to control the consumption of memory for applications that run continually through Nodemon during development. While Nodemon is great at watching and attempting to restart our application upon file changes, should it not be watched, a long-running Nodemon process can leak memory until eventually performance degrades and the app crashes. Following is how we could handle such a memory leak."),(0,t.yg)("h3",{id:"why-memory-leaks-happen-in-long-running-nodemon-processes"},"Why memory leaks happen in long-running Nodemon processes"),(0,t.yg)("p",null,"Memory leaks happen when, through our application, we keep references to data that is no longer needed and that prevents JavaScript\u2019s garbage collector from freeing up the memory. In a development process that could run for a longer period of time, Nodemon might take up more and more memory over time due to repeated file changes, event listeners, or unoptimized code."),(0,t.yg)("h3",{id:"prevention-strategies-for-memory-leaks-using-nodemon"},"Prevention strategies for memory leaks using Nodemon"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Memory Consumption Monitoring")),(0,t.yg)("p",null,"Use Node.js\u2019s built-in memory monitoring to observe memory usage. Insert this into your code and log memory usage at regular intervals:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"setInterval(() => {\n  const memoryUsage = process.memoryUsage();\n  console.log(`Memory Usage: RSS ${memoryUsage.rss / 1024 / 1024} MB`);\n}, 10000); // log memory usage every 10 seconds\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Limit Frequency of Restarts")),(0,t.yg)("p",null,"Not allowing the system time to clean up resources can cause a memory buildup with rapid restarts. To delay the restarts so the system can clear its memory, use the --delay flag inside of Nodemon:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"nodemon --delay 2 app.js\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Watch PATHS Optimizations")),(0,t.yg)("p",null,"Avoid watching unnecessary files or directories to save on memory consumption. Example - you would likely want to exclude files like logs or static assets:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n  "watch": ["src"],\n  "ignore": ["logs/*", "public/*"]\n}\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Identify and Optimize Code-related Leaks")),(0,t.yg)("p",null,"Identify unwanted listeners or event handlers not cleaned up. Usually, these are the most common sources of Node.js memory leaks. Use tools such as clinic.js or Chrome DevTools to trace heap snapshots and have detailed inspections of memory consumption."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Periodic Restart"),"\nIf it is still not enough and memory consumption remains a problem, periodic restarts of Nodemon will clean up its memory usage, too. Use a process manager like pm2 to schedule this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},'pm2 start nodemon --name "app" -- app.js --max-memory-restart 200M\n')),(0,t.yg)("p",null,"These practices will help us to keep our development process smooth, even during long-running sessions with Nodemon. Feel free to let me know if you\u2019d like to discuss setting up memory monitoring or provide a finger in the direction on how parts of this code could be optimized."),(0,t.yg)("h2",{id:"conclusion"},"Conclusion"),(0,t.yg)("p",null,"As we wrap up discussing Nodemon, I wanted to share some common issues you might run into and how to troubleshoot them. Even though Nodemon simplifies our development by auto-restarting our apps, sometimes it might not work as expected."),(0,t.yg)("p",null,"Here are a few things to check if you encounter problems:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Monitoring Files"),": If Nodemon isn't restarting when you change files, double-check your configuration to ensure it\u2019s watching the right files and directories. Sometimes, if we ignore too many files, Nodemon might miss changes in crucial areas.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Crashes or Non-starts"),": Make sure there are no errors in your Node.js app and that all environment variables are set correctly. These can often stop Nodemon from running properly.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Permissions on Windows"),": If you\u2019re on Windows and facing permission issues, try running Nodemon in an administrator command prompt, which can resolve these problems.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Software Updates"),": Lastly, keeping Nodemon and Node.js updated to their latest versions can solve a lot of known issues."))))}u.isMDXComponent=!0}}]);