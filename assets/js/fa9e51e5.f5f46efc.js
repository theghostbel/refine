"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87214],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>p});var a=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,p=d["".concat(c,".").concat(m)]||d[m]||g[m]||o;return n?a.createElement(p,r(r({ref:t},u),{},{components:n})):a.createElement(p,r({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(37953);var a=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"A complete guide to Kubectl exec",description:"We'll go over the basics of kubectl exec, including its syntax, parameters, and how to use it to interact with containers in a Kubernetes pod.",slug:"kubectl-exec-command",authors:"muhammad_khabbab",tags:["kubernetes","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/social.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/kubectl-exec-command",source:"@site/blog/2023-10-19-kubecti-exec.md",title:"A complete guide to Kubectl exec",description:"We'll go over the basics of kubectl exec, including its syntax, parameters, and how to use it to interact with containers in a Kubernetes pod.",date:"2023-10-19T00:00:00.000Z",formattedDate:"October 19, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:9.53,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"A complete guide to Kubectl exec",description:"We'll go over the basics of kubectl exec, including its syntax, parameters, and how to use it to interact with containers in a Kubernetes pod.",slug:"kubectl-exec-command",authors:"muhammad_khabbab",tags:["kubernetes","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/social.png",hide_table_of_contents:!1},prevItem:{title:"Kubectl Restart Pod - Restarting Pods in Kubernetes",permalink:"/blog/kubectl-restart-pod"},nextItem:{title:"Introduction to Docker Networking",permalink:"/blog/docker-networking"},relatedPosts:[{title:"A Complete guide to pnpm",description:"We'll explore pnpm, an efficient alternative to npm.",permalink:"/blog/how-to-use-pnpm",formattedDate:"September 11, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:11.66,date:"2024-09-11T00:00:00.000Z"},{title:"What are Low Code Development Platforms?",description:"We'll looking into low-code platforms, when and where they can be used, and limitations you might face during the development.",permalink:"/blog/low-code",formattedDate:"March 18, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:8.97,date:"2024-03-18T00:00:00.000Z"},{title:"Developing Internal Tools in 2024",description:"Internal tools are specialized software applications used by a company's back-office departments.",permalink:"/blog/internal-tools",formattedDate:"March 7, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.38,date:"2024-03-07T00:00:00.000Z"}],authorPosts:[{title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",permalink:"/blog/kubernetes-operators",formattedDate:"January 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.425,date:"2024-01-12T00:00:00.000Z"},{title:"Docker Cheat Sheet - Most Commonly Used Commands",description:"A reference guide highlighting essential Docker commands to streamline container management tasks efficiently.",permalink:"/blog/docker-cheat-sheet",formattedDate:"February 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.675,date:"2024-02-12T00:00:00.000Z"},{title:"A Complete Guide to Listing Docker Containers",description:"We'll discuss the importance of listing docker containers, how to list running and stopped containers, listing the latest containers, and how to disable truncation of container names.",permalink:"/blog/docker-list-containers",formattedDate:"June 6, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.265,date:"2023-06-06T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},d=[{value:"Brief on Kubernetes",id:"brief-on-kubernetes",level:2},{value:"The need for shell access in Kubernetes",id:"the-need-for-shell-access-in-kubernetes",level:2},{value:"Introduction to kubectl exec",id:"introduction-to-kubectl-exec",level:2},{value:"Diving into kubectl exec",id:"diving-into-kubectl-exec",level:2},{value:"Understanding the Key Components and Parameters of the kubectl exec Command:",id:"understanding-the-key-components-and-parameters-of-the-kubectl-exec-command",level:3},{value:"Key Components:",id:"key-components",level:3},{value:"Parameters:",id:"parameters",level:3},{value:"Comparison with docker exec and ssh",id:"comparison-with-docker-exec-and-ssh",level:2},{value:"Practical Examples",id:"practical-examples",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Executing specific shell commands",id:"executing-specific-shell-commands",level:2},{value:"Interacting with multi-container pods",id:"interacting-with-multi-container-pods",level:2},{value:"Advanced techniques with kubectl exec",id:"advanced-techniques-with-kubectl-exec",level:2},{value:"Transfer Multiple Files between Pod and Local Machine:",id:"transfer-multiple-files-between-pod-and-local-machine",level:3},{value:"Interacting with Databases",id:"interacting-with-databases",level:3},{value:"Security Implications",id:"security-implications",level:2},{value:"Best practices for secure usage",id:"best-practices-for-secure-usage",level:3},{value:"Monitoring and logging exec activities",id:"monitoring-and-logging-exec-activities",level:2},{value:"Access control and RBAC",id:"access-control-and-rbac",level:2},{value:"Troubleshooting kubectl exec",id:"troubleshooting-kubectl-exec",level:2},{value:"Common errors and their solutions",id:"common-errors-and-their-solutions",level:3},{value:"CrashLoopBackOff Error:",id:"crashloopbackoff-error",level:3},{value:"ImagePullBackOff Error:",id:"imagepullbackoff-error",level:3},{value:"Tools and techniques for debugging",id:"tools-and-techniques-for-debugging",level:2},{value:"Conclusion &amp; Best Practices",id:"conclusion--best-practices",level:2},{value:"Recap and takeaways",id:"recap-and-takeaways",level:3},{value:"Further resources and learning",id:"further-resources-and-learning",level:3}],g={toc:d},m="wrapper";function p(e){var{components:t}=e,n=r(e,["components"]);return(0,a.yg)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"brief-on-kubernetes"},"Brief on Kubernetes"),(0,a.yg)("p",null,"Microservices are encapsulated in containers, which are increasingly used to deploy modern applications. In this environment, Kubernetes is a portable, extensible, open-source platform for the management of containerized workloads and services, with a framework for the resilient operation of distributed systems. It's a service that addresses your performance needs, failover, deployment patterns, scaling, load balancing, logging and monitoring as well. But, instead of being operated at the hardware level, it is operating at the container level."),(0,a.yg)("p",null,"Steps we'll cover in this guide:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#the-need-for-shell-access-in-kubernetes"},"The need for shell access in Kubernetes")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#introduction-to-kubectl-exec"},"Introduction to kubectl exec")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#diving-into-kubectl-exec"},"Diving into kubectl exec")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#comparison-with-docker-exec-and-ssh"},"Comparison with docker exec and ssh")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#practical-examples"},"Practical Examples")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#security-implications"},"Security Implications")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#troubleshooting-kubectl-exec"},"Troubleshooting kubectl exec")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#tools-and-techniques-for-debugging"},"Tools and techniques for debugging"))),(0,a.yg)("h2",{id:"the-need-for-shell-access-in-kubernetes"},"The need for shell access in Kubernetes"),(0,a.yg)("p",null,"If you are debugging an issue, it is possible to save considerable time by accessing pods and nodes in a Kubernetes cluster. This allows developers and operators to view the environment of a running container, see its logs or diagnose any problems using shell access. Most of the time, containers require some custom configuration, and shell access allows you to modify files or settings directly in the container."),(0,a.yg)("h2",{id:"introduction-to-kubectl-exec"},"Introduction to kubectl exec"),(0,a.yg)("p",null,"Connecting to a running container is very important as you need to view logs, verify processes, mount points, environment variables and package versions, among other things. kubectl exec will give you full shell access to the container, so modifying it and installing packages that are not part of the container image is possible but is not recommended unless for temporary troubleshooting purposes."),(0,a.yg)("h2",{id:"diving-into-kubectl-exec"},"Diving into kubectl exec"),(0,a.yg)("h3",{id:"understanding-the-key-components-and-parameters-of-the-kubectl-exec-command"},"Understanding the Key Components and Parameters of the kubectl exec Command:"),(0,a.yg)("p",null,"The kubectl exec command allows you to execute commands inside a container within a Kubernetes Pod. Let's go over the syntax in more detail:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"kubectl exec [OPTIONS] NAME_OF_POD -- COMMAND [ARGUMENTS]\n")),(0,a.yg)("h3",{id:"key-components"},"Key Components:"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"kubectl")," is a Kubernetes command line tool and ",(0,a.yg)("strong",{parentName:"p"},"exec")," used for executing commands in a container."),(0,a.yg)("h3",{id:"parameters"},"Parameters:"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"[OPTIONS]")," is a flag that can be used to modify how kubectl exec behaves. For Example, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"-it")," flag to run a command in interactive mode."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"NAME_OF_POD")," represents the name of the pod that contains the container in which you want to run commands."),(0,a.yg)("p",null,"\u2022 The double dashes ",(0,a.yg)("inlineCode",{parentName:"p"},"--")," indicate that all the arguments following this should be commands that will run inside the container."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"COMMAND")," that comes after the dashes is the actual command that you want to run inside the container."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"[ARGUMENTS]")," are specific parameters to pass to the command you run inside the container."),(0,a.yg)("h2",{id:"comparison-with-docker-exec-and-ssh"},"Comparison with docker exec and ssh"),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"kubectl exec")," service is based on the Kubernetes RBAC for security, and it works with containers in your Kubernetes pod. ",(0,a.yg)("strong",{parentName:"p"},"docker exec")," is running on a Docker level, interacting with containers directly and requiring access to the Docker daemon. ",(0,a.yg)("strong",{parentName:"p"},"SSH"),", which is a widely used tool for securing access to remote systems and functioning at the level of an Operating System, provides secure authentication by way of encryption keys."),(0,a.yg)("h2",{id:"practical-examples"},"Practical Examples"),(0,a.yg)("h2",{id:"basic-usage"},"Basic usage"),(0,a.yg)("p",null,"Let's suppose you have an nginx Pod running, and you are curious to see the current date and time in that container environment. It is as simple to fetch the information using kubectl exec as:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"kubectl exec my-demo-pod -- date\n")),(0,a.yg)("p",null,"In the above command, '",(0,a.yg)("strong",{parentName:"p"},"my-demo-pod"),"' is the name of the pod and '",(0,a.yg)("strong",{parentName:"p"},"date"),"' is the command that kubectl will run inside the container. It will return the following output:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/basic-usage.png",alt:"kubectl exec"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Let's take another basic example of accessing the container shell interactively, as it allows the container's filesystem, processes and other aspects to be explored directly via this interface. In order to achieve this purpose, we can use the command below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"kubectl exec -it my-demo-pod -- /bin/bash\n")),(0,a.yg)("p",null,"In the above command, ",(0,a.yg)("inlineCode",{parentName:"p"},"my-demo-pod")," remains the pod name and ",(0,a.yg)("inlineCode",{parentName:"p"},"/bin/bash")," runs inside the container for accessing the ",(0,a.yg)("inlineCode",{parentName:"p"},"bash")," shell. The ",(0,a.yg)("inlineCode",{parentName:"p"},"-it")," flags make it appear as though you are inside the container by making sure the session is interactive (-i) and allocating a pseudo-terminal (-t)."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/basic-usage-2.png",alt:"kubectl exec"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"executing-specific-shell-commands"},"Executing specific shell commands"),(0,a.yg)("p",null,"Let's suppose we want to view nginx container configurations using shell commands. The following ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl exec")," command will allow us to execute the shell command directly into the container:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"kubectl exec my-demo-pod -- cat /etc/nginx/nginx.conf\n")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/specific-shell.png",alt:"kubectl exec"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Similarly, to look at content in the Nginx web root directory through a shell command, which can give information about hosted web pages or assets, we can utilize the capability of `kubectl exec`` to list the content of a particular directory:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"kubectl exec my-demo-pod -- ls /usr/share/nginx/html\n")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/specific-shell-2.png",alt:"kubectl exec"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"interacting-with-multi-container-pods"},"Interacting with multi-container pods"),(0,a.yg)("p",null,"Pods in Kubernetes are capable of hosting more than one container and working together for a specific purpose. Sometimes, within such a multi-container pod, you might need to interact with a specific container. For this purpose, the kubectl exec utility will be helpful in specifying a container you wish to interact with."),(0,a.yg)("p",null,"To run the command inside the specific container, you need to follow the syntax below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"kubectl exec -it [NAME_OF_POD] -c [NAME_OF_CONTAINER] -- [COMMAND]\n")),(0,a.yg)("p",null,"Let's say we have a multi-container pod named ",(0,a.yg)("inlineCode",{parentName:"p"},"my-demo-pod")," that contains both nginx and redis containers. We are required to access the command shell of the ",(0,a.yg)("inlineCode",{parentName:"p"},"nginx")," container and inspect the logs of the `redis`` container."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"By running the command below, we can access the nginx container shell:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"kubectl exec -it my-demo-pod -c nginx -- /bin/sh\n")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/multi-container-1.png",alt:"kubectl exec"})),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"To check the redis version in a pod with multiple containers, we can run this command:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"kubectl exec my-demo-pod -c redis -- redis-cli \u2013version\n")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/multicontainer-2.png",alt:"kubectl exec"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"advanced-techniques-with-kubectl-exec"},"Advanced techniques with kubectl exec"),(0,a.yg)("h3",{id:"transfer-multiple-files-between-pod-and-local-machine"},"Transfer Multiple Files between Pod and Local Machine:"),(0,a.yg)("p",null,"Let's suppose that we want to transfer ",(0,a.yg)("em",{parentName:"p"},"demo-transfer.txt")," and ",(0,a.yg)("em",{parentName:"p"},"demo-transfer2.txt")," files to the ",(0,a.yg)("inlineCode",{parentName:"p"},"nginx")," container in our multi-container pod. kubectl exec with ",(0,a.yg)("inlineCode",{parentName:"p"},"tar")," allows more precise and effective transfers as compared to ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl cp"),". So, first, we need to package both files into a tarball named ",(0,a.yg)("inlineCode",{parentName:"p"},"demo_package.tar")," by running the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"tar cf demo_package.tar demo-transfer.txt demo-transfer2.txt\n")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/advance-1.png",alt:"kubectl exec"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Once we have packaged both files, we can run the command below to move them from the local machine to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/tmp")," folder in the nginx container:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"type demo_package.tar | kubectl exec -i my-demo-pod -c nginx -- /bin/sh -c 'tar xf - -C /tmp'\n")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"tar xf - -C /tmp")," command inside the pod's container will extract the tarball content streamed to its stdin into the ",(0,a.yg)("inlineCode",{parentName:"li"},"/tmp")," directory."),(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"cat demo_package.tgz |")," part sends the content of the tarball to the kubectl exec command.")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/advance-2.png",alt:"kubectl exec"})),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"interacting-with-databases"},"Interacting with Databases"),(0,a.yg)("p",null,"In order to interact with databases that are located in your cluster, you can use kubectl exec. For Example, in a container running Redis, you can access the Redis CLI by running the command below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"kubectl exec -it my-demo-pod -c redis -- redis-cli\n")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/interacting-database.png",alt:"kubectl exec"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"security-implications"},"Security Implications"),(0,a.yg)("h3",{id:"best-practices-for-secure-usage"},"Best practices for secure usage"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Restrict 'kubectl exec' Commands:")," It is possible to restrict or even prevent the use of exec commands for specific pods by using an admission controller. In order to protect crucial or sensitive Pods, this may be particularly useful.\n",(0,a.yg)("strong",{parentName:"p"},"Utilize TLS Verification:")," When using kubectl exec, you can prevent attacks by specifying certificate authority files for TLS verification.\n",(0,a.yg)("strong",{parentName:"p"},"Mandatory Authentication:")," Use client certificates and keys to authenticate users before they can execute commands in containers to enhance security."),(0,a.yg)("h2",{id:"monitoring-and-logging-exec-activities"},"Monitoring and logging exec activities"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Make sure the kubectl exec activity is checked on a regular basis. Suspecting behavior can be detected by unexpected or unknown commands."),(0,a.yg)("li",{parentName:"ol"},"Ensure that all executive activities are recorded. The output of a log can help detect an attempt to gain unauthorized access or the use of inappropriate commands.")),(0,a.yg)("h2",{id:"access-control-and-rbac"},"Access control and RBAC"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"RBAC Implementation:"),"\nIf you limit the number of users and entities who can run kubectl exec using Role Based Access Control, then this will be helpful to prevent the event of accidental misuse or deliberate infringement.\n",(0,a.yg)("strong",{parentName:"p"},"Permissions:"),"\nMake sure that users and service accounts are assigned only the necessary permissions. There is a decrease in the risk of misuse when permissions are limited."),(0,a.yg)("h2",{id:"troubleshooting-kubectl-exec"},"Troubleshooting kubectl exec"),(0,a.yg)("h3",{id:"common-errors-and-their-solutions"},"Common errors and their solutions"),(0,a.yg)("h3",{id:"crashloopbackoff-error"},"CrashLoopBackOff Error:"),(0,a.yg)("p",null,"The CrashLoopBackOff indicates that the Kubernetes service has failed to schedule a pod in most cases due to insufficient node resources, any application errors or an issue with volume mounting. To resolve this error, you need to ensure the correct configurations, adequate resources, validate your volume manifest or fix application errors.\nYou can identify this error by running the command below, and the output shows the status of CrashLoopBackOff against the affected pod:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"kubectl get pods\n")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/trouble-1.png",alt:"kubectl exec"})),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"imagepullbackoff-error"},"ImagePullBackOff Error:"),(0,a.yg)("p",null,'If Pods cannot generate the required container image, it is one of the more common issues. This may be because of a number of factors, e.g., an invalid name for the image, not being able to render it or problems with authentication.\nYou can use the following command to check for issues like "no pull access," "Manifest not found," or "authorization failed" in the Events section of output:'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"kubectl describe pod my-demo-pod\n")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-19-kubecti-exec/image-back-pull.png",alt:"kubectl exec"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"tools-and-techniques-for-debugging"},"Tools and techniques for debugging"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Often, the first step in troubleshooting is to see your pod's logs. To obtain container logs and analyze them for messages of errors or abnormal behavior, run the ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl log")," command."),(0,a.yg)("li",{parentName:"ol"},"In order to find detailed information about a container, including all events or warnings recorded by Kubernetes, use the ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl describe pod")," command."),(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl-debug")," tool also provides improved debugging capabilities. Using the command ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl debug [NAME_OF_POD] -it --image=[Debugging_Tool_Image]")," you can start a debugging session on a problematic pod.",(0,a.yg)("br",{parentName:"li"}),"Keep in mind that kubectl-debug is an extension and needs to be installed separately. ",(0,a.yg)("inlineCode",{parentName:"li"},"[Debugging_Tool_Image]")," is a container image that has the necessary debugging tools installed. For Example, you can use a debug image that offers tools such as ping, netstat, curl and nslookup if you are trying to look at some kind of pod with network problems.")),(0,a.yg)("h2",{id:"conclusion--best-practices"},"Conclusion & Best Practices"),(0,a.yg)("h3",{id:"recap-and-takeaways"},"Recap and takeaways"),(0,a.yg)("p",null,"Tools such as ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl exec")," allow Kubernetes to efficiently control containerized workloads, allowing for detailed pod interaction, which is of critical importance when it comes to resolving problems. Though its capabilities are enormous, it's vital to prioritize safety. In order to maintain a secure environment, a few measures must be taken that restrict the application of commands, such as TLS verification, user authentication and Role Based Access Control."),(0,a.yg)("h3",{id:"further-resources-and-learning"},"Further resources and learning"),(0,a.yg)("p",null,"You can learn more about Kubernetes, further your knowledge and keep up to date on the best practices of container orchestration by reading articles, workshops or courses. Just like ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl-debug"),", you can explore other extensions as well."))}p.isMDXComponent=!0}}]);