"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52495],{58860:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var a=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,u=d["".concat(l,".").concat(g)]||d[g]||p[g]||r;return t?a.createElement(u,i(i({ref:n},m),{},{components:t})):a.createElement(u,i({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},49870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});t(37953);var a=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",slug:"docker-run-command",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/docker-run-command",source:"@site/blog/2023-06-24-docker-run-command.md",title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",date:"2023-06-24T00:00:00.000Z",formattedDate:"June 24, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:11.855,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",slug:"docker-run-command",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/social.png",hide_table_of_contents:!1},prevItem:{title:"Building a React Admin Dashboard with Tremor Library",permalink:"/blog/building-react-admin-dashboard-with-tremor"},nextItem:{title:"TypeScript Record Type with Examples",permalink:"/blog/typescript-record-type"},relatedPosts:[{title:"Django REST Framework - How to use it to create APIs?",description:"Explore the Django REST Framework and learn how to create APIs using it.",permalink:"/blog/django-rest-framework",formattedDate:"April 3, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.68,date:"2024-04-03T00:00:00.000Z"},{title:"Kubernetes CrashLoopBackOff - What is it and how to fix it?",description:"In this article, we will discuss the Kubernetes CrashLoopBackOff error, its causes, and how to fix it.",permalink:"/blog/crashloopbackoff-kubernetes",formattedDate:"November 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.76,date:"2023-11-22T00:00:00.000Z"},{title:"Kubectl Scale - DevOps Guide",description:"Kubectl scale is a powerful command that allows you to scale your Kubernetes resources. This article will explore different scenarios to scale your Kubernetes replica/nodes.",permalink:"/blog/kubectl-scale",formattedDate:"December 25, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.4,date:"2023-12-25T00:00:00.000Z"}],authorPosts:[{title:"A complete guide to Kubectl exec",description:"We'll go over the basics of kubectl exec, including its syntax, parameters, and how to use it to interact with containers in a Kubernetes pod.",permalink:"/blog/kubectl-exec-command",formattedDate:"October 19, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.53,date:"2023-10-19T00:00:00.000Z"},{title:"Synchronous vs. Asynchronous Programming",description:"This article explains the differences between the Synchronous and Asynchronous programming and when to use each.",permalink:"/blog/synchronous-vs-asynchronous",formattedDate:"October 24, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:15.16,date:"2024-10-24T00:00:00.000Z"},{title:"What is Version Control and Benefits of Using It?",description:"Version control systems are essential to any successful software project. Understand version control fundamentals and compare version control systems.",permalink:"/blog/version-control",formattedDate:"February 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.705,date:"2024-02-26T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},d=[{value:"What is the Docker run command?",id:"what-is-the-docker-run-command",level:2},{value:"When to use the Docker run command",id:"when-to-use-the-docker-run-command",level:3},{value:"Containerization and application deployment:",id:"containerization-and-application-deployment",level:3},{value:"Isolated Development and Testing Environments:",id:"isolated-development-and-testing-environments",level:3},{value:"Fast Prototyping:",id:"fast-prototyping",level:3},{value:"Syntax of Docker run command",id:"syntax-of-docker-run-command",level:2},{value:"Overview of the syntax",id:"overview-of-the-syntax",level:2},{value:"Compulsory:",id:"compulsory",level:3},{value:"Optional:",id:"optional",level:3},{value:"Explanation of each part of the syntax with examples and screenshots",id:"explanation-of-each-part-of-the-syntax-with-examples-and-screenshots",level:2},{value:"Container image",id:"container-image",level:3},{value:"Container options",id:"container-options",level:3},{value:"Naming the Container",id:"naming-the-container",level:4},{value:"Mapping Port",id:"mapping-port",level:4},{value:"Setting up Environment Variables",id:"setting-up-environment-variables",level:4},{value:"Command",id:"command",level:3},{value:"Examples of using the Docker run command",id:"examples-of-using-the-docker-run-command",level:2},{value:"Basic examples",id:"basic-examples",level:3},{value:"Advanced examples",id:"advanced-examples",level:2},{value:"Run container in Network",id:"run-container-in-network",level:3},{value:"Run container with volumes",id:"run-container-with-volumes",level:3},{value:"Connecting Multiple Containers:",id:"connecting-multiple-containers",level:3},{value:"4. Best practices for using the Docker run command",id:"4-best-practices-for-using-the-docker-run-command",level:2},{value:"Security considerations",id:"security-considerations",level:3},{value:"Do not use root user",id:"do-not-use-root-user",level:3},{value:"Restricting Container Capabilities",id:"restricting-container-capabilities",level:3},{value:"Isolating Containers",id:"isolating-containers",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"<strong>Resource Allocation</strong>",id:"resource-allocation",level:3},{value:"<strong>Container Restart Policies</strong>",id:"container-restart-policies",level:3},{value:"<strong>Utilizing Cache Mechanisms</strong>",id:"utilizing-cache-mechanisms",level:3},{value:"Optimize Container Startup",id:"optimize-container-startup",level:3},{value:"Summary",id:"summary",level:2},{value:"Recap of the key points covered in the article, emphasizing the importance and versatility of the Docker run command",id:"recap-of-the-key-points-covered-in-the-article-emphasizing-the-importance-and-versatility-of-the-docker-run-command",level:3},{value:"Encouragement to further explore and experiment with the Docker run command to leverage its full potential:",id:"encouragement-to-further-explore-and-experiment-with-the-docker-run-command-to-leverage-its-full-potential",level:3}],p={toc:d},g="wrapper";function u(e){var{components:n}=e,t=i(e,["components"]);return(0,a.yg)(g,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){o(e,n,t[n])}))}return e}({},p,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"what-is-the-docker-run-command"},"What is the Docker run command?"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"docker run")," command starts a new container, executes a command inside it, and pulls an image if needed. You can use the Docker run command to create and execute containers based on Docker images."),(0,a.yg)("h3",{id:"when-to-use-the-docker-run-command"},"When to use the Docker run command"),(0,a.yg)("p",null,"Docker commands have revolutionized the business by utilizing containerization technology, most commonly used for enabling quicker innovation, easier deployments, and better resource management."),(0,a.yg)("h3",{id:"containerization-and-application-deployment"},"Containerization and application deployment:"),(0,a.yg)("p",null,"The lightweight, isolated environments known as containers, which encapsulate applications and their dependencies, are created and executed using the Docker run the command through which application deployment is simplified."),(0,a.yg)("h3",{id:"isolated-development-and-testing-environments"},"Isolated Development and Testing Environments:"),(0,a.yg)("p",null,"Docker run makes setting up isolated environments for development and testing easier. To ensure consistent and reproducible results during the development and testing phases, developers can spin up containers with specific configurations, dependencies, and software versions."),(0,a.yg)("h3",{id:"fast-prototyping"},"Fast Prototyping:"),(0,a.yg)("p",null,"Developers can quickly update containers with multiple configurations, libraries, or dependencies without affecting the host system to test new scenarios with new prototypes. Docker run is the perfect tool for experimenting with new ideas and quickly iterating on development projects because of its flexibility and isolation."),(0,a.yg)("h2",{id:"syntax-of-docker-run-command"},"Syntax of Docker run command"),(0,a.yg)("h2",{id:"overview-of-the-syntax"},"Overview of the syntax"),(0,a.yg)("p",null,"The syntax of the docker run command is as follows:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker run \\[OPTIONS\\] IMAGE \\[COMMAND\\] \\[ARG...\\]")),(0,a.yg)("p",null,"The basic structure of the Docker run command consists of four different parts. Two parts are compulsory, and two are optional. It's important to remember that the OPTIONS and COMMAND ","[","ARGS","]"," sections offer flexibility and let you customize the execution, configuration, and behavior\xa0of the container."),(0,a.yg)("h3",{id:"compulsory"},"Compulsory:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"docker run"),": This is the command's core part used to create and run containers.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"IMAGE:")," This part is specifically for the Docker image from which the container is created. Every dependency is included in an image, which is a read-only template."))),(0,a.yg)("p",null,"In the most basic version of the command, where you need to create and run the container using the default settings, you just need 'docker run' and the Image ID or Name. ",(0,a.yg)("strong",{parentName:"p"},"For example"),":",(0,a.yg)("inlineCode",{parentName:"p"},"docker run \\[image_id_or_name\\]"),"."),(0,a.yg)("h3",{id:"optional"},"Optional:"),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"[","OPTIONS","]",":")," The configuration of the container features is made possible by various options, including networking, resource allocation, volumes, environment variables, and more.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"[","COMMAND","]"," ","[","ARG...","]",":")," This part of the command allows you to run the specified '","[","COMMAND","]","' inside the container by overriding the default command of the image."))),(0,a.yg)("h2",{id:"explanation-of-each-part-of-the-syntax-with-examples-and-screenshots"},"Explanation of each part of the syntax with examples and screenshots"),(0,a.yg)("h3",{id:"container-image"},"Container image"),(0,a.yg)("p",null,"The IMAGE parameter is specified right after 'docker run' in the command(if options are not specified) and requires an IMAGE Id or Name to search the image locally and pulls the image automatically from the docker hub repository if the image is not found locally."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Syntax:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"docker run IMAGE")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"For Example, Let's run an image that exists locally:")," We have an image with the name '",(0,a.yg)("strong",{parentName:"p"},"sample_docker_run"),"' in our local repository."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image1.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")," Let's run an image that does not exist locally but in the docker hub. We will use the 'Nginx' image that is not available locally but on the docker hub."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image2.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"'nginx' image is not found locally, so 'docker run' will now pull the nginx image from the docker hub repository.")),(0,a.yg)("h3",{id:"container-options"},"Container options"),(0,a.yg)("p",null,"Using different OPTIONS in the 'docker run' command, you can name the containers, map the ports, and set up the environment variables."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Syntax:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"docker run \\[OPTIONS\\] IMAGE")),(0,a.yg)("h4",{id:"naming-the-container"},"Naming the Container"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"For example:")," I want to name the container with the sample image in the docker run command."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image3.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Adding '--name' parameter along with the container name of our choice and the sample image.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The specified name is assigned to the container of the sample image."))),(0,a.yg)("h4",{id:"mapping-port"},"Mapping Port"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"For example:")," I want to map the port between the container and the host system that allows access to the containerized application on the host. Let's run my sample image container by mapping the port '8080:80'"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image4.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Adding '-p' or '\u2014publish' parameter along with the port to map against the container. In this example, we have mapped 8888:80 with the container name 'MapPortDockerRun' while using the 'docker run' command.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The port has been mapped to the container."))),(0,a.yg)("h4",{id:"setting-up-environment-variables"},"Setting up Environment Variables"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")," I want to set up the value of the environment variable inside the container that is needed for the application configuration by using the docker run command."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Here is the default value of my environment variable:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image5.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Default value set against environment variable.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Now, I have to change the default value to 'custom_value_set_up_via_docker_run'")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image6.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Used '-e' or '--env' with the environment variable name and its value that I want to set up and get the desired results.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"As a result of assigning value through the 'docker run' options, the application successfully responds with the configured value."))),(0,a.yg)("h3",{id:"command"},"Command"),(0,a.yg)("p",null,"The command parameter comes at the end of the 'docker run' command and allows you to run your defined command inside the container along with the arguments passed. There is a predefined entrypoint script for some images. Use the '\u2014entrypoint' option to replace the entrypoint with your command."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Syntax:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"docker run \\[OPTIONS\\] IMAGE \\[COMMAND\\]\\[ARGS..\\]")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")," I want to change my default image(sample_docker_run) command by overriding the command passed through 'docker run'."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image7.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Default Image(sample_docker_run) command:")," echo ",(0,a.yg)("strong",{parentName:"p"},'"'),'Hello, this is my custom image for Docker run command guide!"')),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Docker run command section that overrides the existing one:"),' echo "Hello, this is the custom image that has to override the defined command of docker image."')),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"'",(0,a.yg)("strong",{parentName:"p"},"echo'"),' is the command, and "',(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},'Hello, this is the custom image that has to override the defined command of docker image."'))," is the argument passed to the command for running it inside the container."))),(0,a.yg)("h2",{id:"examples-of-using-the-docker-run-command"},"Examples of using the Docker run command"),(0,a.yg)("h3",{id:"basic-examples"},"Basic examples"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")," Let's run the Friendica container, a platform for distributed messaging such as social media communication."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image8.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The command '",(0,a.yg)("strong",{parentName:"li"},"docker run friendica:fpm"),"' couldn't be able to find this image locally, so it pulled the image from the docker hub repository and started the new instance of Friendica.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")," Now, we run another container of Friendica in detached mode with the port mapping so that you can access the Friendica installation wizard at ",(0,a.yg)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/")," from your host system."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image9.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The command 'docker run -d -p 8080:80 friendica' download the image from the docker hub repository and utilize the '-d' option to run this container in detached mode(running in the background) and also map the container with the '8080:80' port by utilizing the '-p' option.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"As a result, I can access the Friendica installation page from the host system(localhost) at port 8080."))),(0,a.yg)("h2",{id:"advanced-examples"},"Advanced examples"),(0,a.yg)("h3",{id:"run-container-in-network"},"Run container in Network"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example"),": Let's create a network named 'advance-friendica-example' and run the Friendica container in that specific network as it allows the Friendica container to communicate with other containers in the same network."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image10.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"We created our network with the name 'advance-friendica-example' using the 'docker network ","[","network_name","]","' command.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Once the network is created, we execute the ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"docker run -d -p 8080:80 --network advance-friendica-example friendica"))," command to run the Friendica container inside the specified network. As a result, it returns the container ID.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Now, we check whether the container is running in the specified network or not; for that purpose, we run the command ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"docker network inspect advance-friendica-example"))," and compare the Container ID we got in the output of the second command."))),(0,a.yg)("h3",{id:"run-container-with-volumes"},"Run container with volumes"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")," We want to run the Friendica container with the volume, allowing us to mount the directory of our host system with the container."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image11.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"We use '-v' to mount the volume of the host system with the friendica container. In the above Example, we have executed the command '",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"docker run -d -p 8080:80 -v path/to/host:/var/www/html friendica")),"'. Where '",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"path/to/host")),"' is the path of the host machine, and '",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"/var/www/html")),"' is the path of the container directory.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"To ensure that the volume is successfully mounted, you can run 'docker inspect \\<container_name_or_id",">","' and then navigate to the 'mount' section of the output."))),(0,a.yg)("h3",{id:"connecting-multiple-containers"},"Connecting Multiple Containers:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")," Let's run the Redis container along with the friendica container in the newly created network name '",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"advance-containers-connection")),"' and ensure that both containers are connected by accessing the Redis container from the friendica container command line."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-24-docker-run-command/image12.png",alt:"docker run command"})),(0,a.yg)("br",null),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run the Redis container inside the new network(i.e., '",(0,a.yg)("strong",{parentName:"p"},"advance-containers-connection"),"') with the name 'redis-container' and map the port of this container to '",(0,a.yg)("strong",{parentName:"p"},"6379"),"'")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run the Friendica container by linking it with the 'redis-container', using the '",(0,a.yg)("strong",{parentName:"p"},"--link"),"' parameter along with the other container name required to link. Keep this container in the same network, i.e., '",(0,a.yg)("strong",{parentName:"p"},"advance-containers-connection"),"'.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"To check the connection between these two containers, switch to the Friendica container command line interface. For Example (",(0,a.yg)("strong",{parentName:"p"},"Run command"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"docker exec it \\<friendica-container-id\\> bash"),").")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Once you switch to the Friendica command-line interface, use telnet to ping the Redis container(Command: ",(0,a.yg)("inlineCode",{parentName:"p"},"telnet redis 6379"),") from the Friendica container. If you get the output 'Connected to Redis', both containers are connected Successfully."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note:")," If your container does not have 'telnet', then you can install it by using the following commands:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"apt-get update")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"apt-get install -y telnet"))),(0,a.yg)("h2",{id:"4-best-practices-for-using-the-docker-run-command"},"4. Best practices for using the Docker run command"),(0,a.yg)("h3",{id:"security-considerations"},"Security considerations"),(0,a.yg)("h3",{id:"do-not-use-root-user"},"Do not use root user"),(0,a.yg)("p",null,"Using non-root users while running the containers is recommended to reduce the potential security risks. While executing the 'docker run' command, you can specify the user by using the '--user' parameter(For Example: ",(0,a.yg)("inlineCode",{parentName:"p"},"docker run --user myuser \\<image\\>"),"). You must also ensure that the specified user has only the necessary permissions to perform tasks."),(0,a.yg)("h3",{id:"restricting-container-capabilities"},"Restricting Container Capabilities"),(0,a.yg)("p",null,"Restricting the container capabilities helps you to enhance your security, as by default, containers inherit the capabilities of the host system and allow access to all system resources. By using, 'the --cap-drop' and '--cap-add options', you can limit or add particular capabilities to containers."),(0,a.yg)("h3",{id:"isolating-containers"},"Isolating Containers"),(0,a.yg)("p",null,"Docker provides different mechanisms to isolate containers. Two commonly used methods are user namespaces and Seccomp profiles; through user namespaces, you have a separate namespace for each container, which means if you enable user namespaces, then even the process in the container that has root access will only be able to utilize non-privileged user capabilities. Using Seccomp profiles divide the system calls into Whitelisted(allowed ones) and Blacklisted(Not Allowed), adding an additional layer of security."),(0,a.yg)("h2",{id:"performance-considerations"},"Performance considerations"),(0,a.yg)("h3",{id:"resource-allocation"},(0,a.yg)("strong",{parentName:"h3"},"Resource Allocation")),(0,a.yg)("p",null,"You must ensure containers have the resources they need to perform well by setting appropriate resource limits, as it prevents resource contention or system overload. It enhances the overall stability of the containerized environment while helping improve individual containers' performance."),(0,a.yg)("h3",{id:"container-restart-policies"},(0,a.yg)("strong",{parentName:"h3"},"Container Restart Policies")),(0,a.yg)("p",null,"This method is useful for ensuring the availability and resilience of your containers. Docker offers different restart policies to specify how containers should behave when they shut down or when the Docker daemon restarts. You can also automate the recovery process for container failures or system reboots using an appropriate restart policy."),(0,a.yg)("h3",{id:"utilizing-cache-mechanisms"},(0,a.yg)("strong",{parentName:"h3"},"Utilizing Cache Mechanisms")),(0,a.yg)("p",null,"Docker's caching features can speed up build and deployment times significantly. Layers can be cached and reused in later builds via Docker's layer caching feature if the instructions and their context haven't changed. The size of the final image can be decreased by using multi-stage builds, which separate the build environment from the runtime environment."),(0,a.yg)("h3",{id:"optimize-container-startup"},"Optimize Container Startup"),(0,a.yg)("p",null,"It's important to reduce container starting time for efficient deployment and scalability. Minimizing unnecessary dependencies and processes in your container image is one method to accomplish this. Another method is to use multi-stage builds during the build process to keep the build environment separate from the final runtime environment."),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("h3",{id:"recap-of-the-key-points-covered-in-the-article-emphasizing-the-importance-and-versatility-of-the-docker-run-command"},"Recap of the key points covered in the article, emphasizing the importance and versatility of the Docker run command"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"'docker run' is the most important command for running containers as it allows you to control the behavior of containers by specifying the names of containers and images with a variety of other options.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Through arguments like port mappings (-p), environment variables (-e), volumes (-v), and more, the command enables flexibility as you can customize container behavior according to the requirements of your application.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"By reusing cached layers, Docker caching technology and proper Dockerfile structure can\xa0reduce build and deployment times.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In case of failures or system reboots, container restart rules can be configured to restart containers automatically.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Using the Docker Run command, you can quickly prototype, test, and iterate on applications in isolated container environments.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},'A huge set of precompiled images, which can be used with the command "Docker Run," is available in the extensive Docker Hub registry.'))),(0,a.yg)("h3",{id:"encouragement-to-further-explore-and-experiment-with-the-docker-run-command-to-leverage-its-full-potential"},"Encouragement to further explore and experiment with the Docker run command to leverage its full potential:"),(0,a.yg)("p",null,'The "docker run" command is a gateway to the vast world of Docker and containerization, as it will not only give you the power and flexibility to create a container that can be easily operated and managed but also allow you to explore different container images available in the Docker Hub or to create your own. Define multi-container applications, communicate among them, and simplify the deployment of your application. This is a constant improvement and learning journey as we embrace the "docker run" command. You can deepen your knowledge by engaging yourself in the community of Docker, reading documents, and participating in forums, as the docker run command is constantly evolving, and you need to keep up-to-date with the latest advancements.'))}u.isMDXComponent=!0}}]);