"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91117],{58860:(t,e,n)=>{n.d(e,{xA:()=>s,yg:()=>g});var o=n(37953);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=o.createContext({}),c=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=c(t.components);return o.createElement(u.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(g,r(r({ref:e},s),{},{components:n})):o.createElement(g,r({ref:e},s))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[p]="string"==typeof t?t:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15977:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(37953);var o=n(58860);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function r(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"Material UI button in React",description:"A complete guide on using Material UI button in a React app",slug:"mui-button-in-react",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/social.png",hide_table_of_contents:!1},u=void 0,c={permalink:"/blog/mui-button-in-react",source:"@site/blog/2022-09-05-mui-button.md",title:"Material UI button in React",description:"A complete guide on using Material UI button in a React app",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"}],readingTime:8.705,hasTruncateMarker:!0,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"Material UI button in React",description:"A complete guide on using Material UI button in a React app",slug:"mui-button-in-react",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/social.png",hide_table_of_contents:!1},prevItem:{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills"},nextItem:{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui"},relatedPosts:[{title:"Create charts using Recharts",description:"We'll explore how to create charts in a Refine project using Recharts.",permalink:"/blog/recharts",formattedDate:"November 5, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:24.985,date:"2024-11-05T00:00:00.000Z"},{title:"A Guide to Using the useLayoutEffect Hook in React",description:"We'll explore the useLayoutEffect hook in-depth, how it differs from useEffect and learn how to properly leverage its capabilities to enhance the user experience.",permalink:"/blog/uselayouteffect-vs-useeffect",formattedDate:"August 9, 2024",authors:[{name:"Wisdom Ekpotu",title:"Software Engineer",imageURL:"https://github.com/wisdomekpotu.png",key:"wisdom_ekpotu"}],readingTime:13.58,date:"2024-08-09T00:00:00.000Z"},{title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref.",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"October 16, 2024",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:15.71,date:"2024-10-16T00:00:00.000Z"}],authorPosts:[{title:"Material UI Icons in React",description:"A complete guide on using Material UI Icons in a React app",permalink:"/blog/mui-icons-in-react",formattedDate:"August 24, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.5,date:"2022-08-24T00:00:00.000Z"},{title:"A Guide on Material UI AutoComplete in React",description:"We'll discover the Material UI AutoComplete component with examples",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"July 3, 2024",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:18.83,date:"2024-07-03T00:00:00.000Z"},{title:"How to use Material UI Card Component",description:"We'll discover the Material UI Card component with examples",permalink:"/blog/material-ui-card",formattedDate:"January 4, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.22,date:"2023-01-04T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is Material UI",id:"what-is-material-ui",level:2},{value:"Getting Started with the Material UI Button component",id:"getting-started-with-the-material-ui-button-component",level:2},{value:"Material UI Button Colors",id:"material-ui-button-colors",level:3},{value:"Material UI Button Sizes",id:"material-ui-button-sizes",level:3},{value:"How to use Material UI Button Component in your React project",id:"how-to-use-material-ui-button-component-in-your-react-project",level:2},{value:"Text Button",id:"text-button",level:3},{value:"Contained Button",id:"contained-button",level:3},{value:"Outlined Button",id:"outlined-button",level:3},{value:"IconButton",id:"iconbutton",level:3},{value:"Loading Button",id:"loading-button",level:3},{value:"Icon and Label Buttons",id:"icon-and-label-buttons",level:3},{value:"Creating a Calculator UI with light and dark mode using React Material UI Button Component",id:"creating-a-calculator-ui-with-light-and-dark-mode-using-react-material-ui-button-component",level:2},{value:"The Navbar Component",id:"the-navbar-component",level:3},{value:"The Main Component",id:"the-main-component",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:p},d="wrapper";function g(t){var{components:e}=t,n=r(t,["components"]);return(0,o.yg)(d,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){a(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"Material UI is a dynamic React library because it provides numerous component infrastructures for responsive web design. One such essential component is the ",(0,o.yg)("inlineCode",{parentName:"p"},"Button"),"."),(0,o.yg)("p",null,"In this article, we will deeply explore the Material UI ",(0,o.yg)("inlineCode",{parentName:"p"},"Button")," component, its variants, and the different ways it can be used in a React application."),(0,o.yg)("p",null,"Steps we'll cover:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#what-is-material-ui"},"What is Material UI"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#getting-started-with-the-material-ui-button-component"},"Getting Started with the Material UI Button component"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#how-to-use-material-ui-button-component-in-your-react-project"},"How to use Material UI Button Component in your React project"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#creating-a-calculator-ui-with-light-and-dark-mode-using-react-material-ui-button-component"},"Creating a Calculator UI with light and dark mode using React Material UI Button Component")))),(0,o.yg)("h2",{id:"what-is-material-ui"},"What is Material UI"),(0,o.yg)("p",null,"Material UI is a React component library that is open source and based on Google's Material Design. It includes a comprehensive set of UI tools to assist developers in building and maintaining React applications, as well as effectively importing components into various parts of their projects. More developers have incorporated Material UI into their projects over the years because it makes the web design process much easier and faster."),(0,o.yg)("p",null,"The categories of components that Material UI can provide you include Layout components, Navigation components, Input components, and Data Display components. The ",(0,o.yg)("inlineCode",{parentName:"p"},"Button")," is enlisted among the ",(0,o.yg)("inlineCode",{parentName:"p"},"Input")," components."),(0,o.yg)("p",null,"Install the Material UI library into your project as part of your ",(0,o.yg)("inlineCode",{parentName:"p"},"package.json")," dependencies with the following command:"),(0,o.yg)("p",null,"Use npm\n",(0,o.yg)("inlineCode",{parentName:"p"},"npm install @mui/material @emotion/react @emotion/styled")),(0,o.yg)("p",null,"Use yarn\n",(0,o.yg)("inlineCode",{parentName:"p"},"npm install @mui/material @emotion/react @emotion/styled")),(0,o.yg)("h2",{id:"getting-started-with-the-material-ui-button-component"},"Getting Started with the Material UI Button component"),(0,o.yg)("p",null,"The Material UI ",(0,o.yg)("inlineCode",{parentName:"p"},"Button")," component provides developers with the tools that are needed to allow users perform actions and make decisions with a single tap/click. Buttons represent actions that users can take.\nThey are typically placed throughout your user interface in forms, navigation bars, cards, modal popups e.t.c."),(0,o.yg)("p",null,"The ",(0,o.yg)("strong",{parentName:"p"},"Material UI Button")," component typically comes in three variants:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Text Button(The default variant)"),(0,o.yg)("li",{parentName:"ul"},"Contained Button"),(0,o.yg)("li",{parentName:"ul"},"Outlined Button")),(0,o.yg)("p",null,"Here\u2019s an illustration of how you can apply these Material UI Button variants in your React application:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Stack from "@mui/material/Stack";\nimport Button from "@mui/material/Button";\n\nconst BasicButtons = () => {\n  return (\n    <div>\n      <Stack spacing={2} direction="row">\n        <Button variant="text">Text</Button>\n        <Button variant="contained">Contained</Button>\n        <Button variant="outlined">Outlined</Button>\n      </Stack>\n    </div>\n  );\n};\n\nexport default BasicButtons;\n')),(0,o.yg)("p",null,"Here\u2019s what they look like:"),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/button1.png",alt:"button1"}),(0,o.yg)("h3",{id:"material-ui-button-colors"},"Material UI Button Colors"),(0,o.yg)("p",null,"You can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"color")," prop to apply a color to Material UI buttons from the theme palette."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'<Button color="secondary">Secondary color theme</Button>\n<Button variant="contained" color="success">\n    Success color theme\n</Button>\n<Button variant="outlined" color="error">\n    Error color theme\n</Button>\n')),(0,o.yg)("h3",{id:"material-ui-button-sizes"},"Material UI Button Sizes"),(0,o.yg)("p",null,"You can customize the size of Material UI buttons with the ",(0,o.yg)("inlineCode",{parentName:"p"},"size")," prop:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\n\nconst ButtonSizes = () => {\n  return (\n    <Box sx={{ "& button": { m: 1 } }}>\n      <div>\n        <Button size="small">Small Text Button</Button>\n        <Button size="medium">Medium Text Button</Button>\n        <Button size="large">Large Text Button</Button>\n      </div>\n      <div>\n        <Button variant="outlined" size="small">\n          Small Outlined Button\n        </Button>\n        <Button variant="outlined" size="medium">\n          Medium Outlined Button\n        </Button>\n        <Button variant="outlined" size="large">\n          Large Outlined Button\n        </Button>\n      </div>\n      <div>\n        <Button variant="contained" size="small">\n          Small Contained Button\n        </Button>\n        <Button variant="contained" size="medium">\n          Medium Contained Button\n        </Button>\n        <Button variant="contained" size="large">\n          Large Contained Button\n        </Button>\n      </div>\n    </Box>\n  );\n};\n\nexport default ButtonSizes;\n')),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/buttonSize.png",alt:"buttonSize"}),(0,o.yg)("h2",{id:"how-to-use-material-ui-button-component-in-your-react-project"},"How to use Material UI Button Component in your React project"),(0,o.yg)("h3",{id:"text-button"},"Text Button"),(0,o.yg)("p",null,"Text buttons are typically used for less visible actions, such as those found in dialogs and cards. Text buttons in cards help to keep the focus on the card content."),(0,o.yg)("p",null,"Here\u2019s a simple illustration of the Material UI Text Button"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'<Button>Primary</Button>\n<Button disabled>Disabled Text</Button>\n<Button href="#text-buttons">Link Button</Button>\n')),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/textButton.png",alt:"textButton"}),(0,o.yg)("br",null),(0,o.yg)("p",null,"This is the default state for the ",(0,o.yg)("strong",{parentName:"p"},"Material UI Button")," component so you do not necessarily have to define this particular variant prop when calling the ",(0,o.yg)("inlineCode",{parentName:"p"},"Button")," component."),(0,o.yg)("h3",{id:"contained-button"},"Contained Button"),(0,o.yg)("p",null,"Contained Buttons are high-emphasis buttons that can be identified by their elevation and fill. They indicate the primary actions of your apps. To use a contained button, you need to set the variant ",(0,o.yg)("inlineCode",{parentName:"p"},"contained")," when calling the Material UI ",(0,o.yg)("inlineCode",{parentName:"p"},"Button")," component."),(0,o.yg)("p",null,"Here\u2019s an example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'<Button variant="contained">Contained Button</Button>\n<Button variant="contained" disabled>\n    Disabled Contained Button\n</Button>\n<Button variant="contained" href="#contained-buttons">\n    Link Contained Button\n</Button>\n')),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/containedButton.png",alt:"containedButton"}),(0,o.yg)("h3",{id:"outlined-button"},"Outlined Button"),(0,o.yg)("p",null,"Outlined buttons are medium-emphasis buttons that contain actions that are crucial but not the primary action in your app. Additionally, outlined buttons can be used as a higher emphasis alternative to text buttons or a lower emphasis alternative to contained buttons."),(0,o.yg)("p",null,"You can use Outlined ",(0,o.yg)("strong",{parentName:"p"},"Material UI button")," by specifying the ",(0,o.yg)("inlineCode",{parentName:"p"},"outlined")," prop when calling the ",(0,o.yg)("inlineCode",{parentName:"p"},"Button")," component."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'<Button variant="outlined">Primary Outlined Button</Button>\n<Button variant="outlined" disabled>\n    Disabled Outlined Button\n</Button>\n<Button variant="outlined" href="#outlined-buttons">\n    Link Outlined Button\n</Button>\n')),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/outlinedButton.png",alt:"outlinedButton"}),(0,o.yg)("h3",{id:"iconbutton"},"IconButton"),(0,o.yg)("p",null,"An Icon button is a button represented by an icon set to perform a particular action. Icon buttons are typically found in app bars and toolbars. Icons are also appropriate for toggle buttons that allow for the selection or deselection of a single option, such as adding or removing a star from an item."),(0,o.yg)("p",null,"To include an icon button in your React app, import and use the ",(0,o.yg)("inlineCode",{parentName:"p"},"IconButton")," component. Then you can use whatever icon you want from Material UI."),(0,o.yg)("p",null,"Here\u2019s a simple illustration:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport IconButton from "@mui/material/IconButton";\nimport Stack from "@mui/material/Stack";\nimport CameraIcon from "@mui/icons-material/Camera";\nimport DeleteIcon from "@mui/icons-material/Delete";\nimport CancelIcon from "@mui/icons-material/Cancel";\nimport AttachEmailIcon from "@mui/icons-material/AttachEmail";\n\nconst IconButtons = () => {\n  return (\n    <Stack direction="row" spacing={1}>\n      <IconButton aria-label="camera">\n        <CameraIcon />\n      </IconButton>\n      <IconButton aria-label="delete" disabled color="primary">\n        <DeleteIcon />\n      </IconButton>\n      <IconButton color="secondary" aria-label="cancel">\n        <CancelIcon />\n      </IconButton>\n      <IconButton color="primary" aria-label="attach email">\n        <AttachEmailIcon />\n      </IconButton>\n    </Stack>\n  );\n};\n\nexport default IconButtons;\n')),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/IconButton.png",alt:"IconButton"}),(0,o.yg)("h3",{id:"loading-button"},"Loading Button"),(0,o.yg)("p",null,"Loading buttons are buttons that can display the loading status of actions in your React apps and disable interactions. To use the ",(0,o.yg)("inlineCode",{parentName:"p"},"LoadingButton")," component, you have to first install the Material UI ",(0,o.yg)("inlineCode",{parentName:"p"},"lab")," dependency with the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"npm i @mui/lab\n")),(0,o.yg)("p",null,"Now, you can import the ",(0,o.yg)("inlineCode",{parentName:"p"},"LoadingButton")," component from the Material UI ",(0,o.yg)("inlineCode",{parentName:"p"},"lab")," dependency and use it in whatever manner you please. You can customize your ",(0,o.yg)("inlineCode",{parentName:"p"},"LoadingButton")," components by adding a ",(0,o.yg)("inlineCode",{parentName:"p"},"loading")," prop which shows that the button is loading in your app\u2019s UI. You can also set a ",(0,o.yg)("inlineCode",{parentName:"p"},"loadingIndicator")," prop as well."),(0,o.yg)("p",null,"Here\u2019s a simple illustration of how to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"LoadingButton")," component in your React app:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport LoadingButton from "@mui/lab/LoadingButton";\nimport SaveIcon from "@mui/icons-material/Save";\nimport Stack from "@mui/material/Stack";\n\nconst LoadingButtons = () => {\n  return (\n    <Stack direction="row" spacing={2}>\n      <LoadingButton loading variant="outlined">\n        Submit\n      </LoadingButton>\n      <LoadingButton loading loadingIndicator="Loading\u2026" variant="outlined">\n        Fetch data\n      </LoadingButton>\n      <LoadingButton\n        loading\n        loadingPosition="start"\n        startIcon={<SaveIcon />}\n        variant="outlined"\n      >\n        Save\n      </LoadingButton>\n    </Stack>\n  );\n};\n\nexport default LoadingButtons;\n')),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/loadingButton.gif",alt:"loadingButton"}),(0,o.yg)("h3",{id:"icon-and-label-buttons"},"Icon and Label Buttons"),(0,o.yg)("p",null,"Since we are more likely to recognize logos than plain text, you might occasionally want to add icons to certain buttons to improve the user experience of the application. When the ",(0,o.yg)("inlineCode",{parentName:"p"},"icon")," component is assigned to the ",(0,o.yg)("inlineCode",{parentName:"p"},"startIcon")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"endIcon")," props, the icon is aligned to the label's left or right."),(0,o.yg)("p",null,"Here\u2019s a simple illustration:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Button from "@mui/material/Button";\nimport AddIcon from "@mui/icons-material/Add";\nimport DeleteIcon from "@mui/icons-material/Delete";\nimport Stack from "@mui/material/Stack";\n\nconst IconLabelButtons = () => {\n  return (\n    <Stack direction="row" spacing={2}>\n      <Button variant="outlined" startIcon={<AddIcon />}>\n        Add\n      </Button>\n      <Button variant="contained" endIcon={<DeleteIcon />}>\n        Remove\n      </Button>\n    </Stack>\n  );\n};\nexport default IconLabelButtons;\n')),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/labelButton.png",alt:"labelButton"}),(0,o.yg)("h2",{id:"creating-a-calculator-ui-with-light-and-dark-mode-using-react-material-ui-button-component"},"Creating a Calculator UI with light and dark mode using React Material UI Button Component"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Material UI Buttons")," can be used for a variety of purposes in your React application. You can use them to take actions, switch directories and execute specific commands in your app. We can showcase some of their uses and function in a Calculator UI with light and dark mode toggling features."),(0,o.yg)("p",null,"The app will have two components:\nThe Navbar component\nThe Main component"),(0,o.yg)("h3",{id:"the-navbar-component"},"The Navbar Component"),(0,o.yg)("p",null,"This component simply holds the light and dark mode toggler. To achieve this, we will make use of the ",(0,o.yg)("inlineCode",{parentName:"p"},"ToggleOn")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"ToggleOff")," icon buttons."),(0,o.yg)("p",null,"Here\u2019s the code for the Navbar component:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport IconButton from "@mui/material/IconButton";\nimport ToggleOnIcon from "@mui/icons-material/ToggleOn";\nimport ToggleOffIcon from "@mui/icons-material/ToggleOff";\n\nconst Navbar = () => {\n  return (\n    <>\n      <nav>\n        <p>Light</p>\n        <div>\n          {darkMode ? (\n            <IconButton>\n              <ToggleOnIcon\n                sx={{ fontSize: 50 }}\n                onClick={handleToggle}\n                className={darkMode ? "toggle-light" : "toggle-dark"}\n              />\n            </IconButton>\n          ) : (\n            <IconButton>\n              <ToggleOffIcon\n                sx={{ fontSize: 50 }}\n                onClick={handleToggle}\n                className={darkMode ? "toggle-light" : "toggle-dark"}\n              />\n            </IconButton>\n          )}\n        </div>\n        <p>Dark</p>\n      </nav>\n    </>\n  );\n};\n\nexport default Navbar;\n')),(0,o.yg)("p",null,"The code above showcases the use of Material UI toggle buttons to create an adequate light and dark mode toggle theme."),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/navbar.gif",alt:"navbar"}),(0,o.yg)("br",null),(0,o.yg)("div",null,(0,o.yg)("a",{href:"https://discord.gg/refine"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.yg)("h3",{id:"the-main-component"},"The Main Component"),(0,o.yg)("p",null,"This component houses the Calculator\u2019s grid system with all its buttons imported from Material UI."),(0,o.yg)("p",null,"Here\u2019s the code:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport Button from "@mui/material/Button";\n\nconst Main = () => {\n  const buttonTexts = [\n    "DEL",\n    "\xf7",\n    1,\n    2,\n    3,\n    "*",\n    4,\n    5,\n    6,\n    "+",\n    7,\n    8,\n    9,\n    "-",\n    ".",\n    0,\n  ];\n\n  return (\n    <main>\n      <div class="calculator-grid">\n        <div class="output">\n          <div data-previous-operand class="previous-operand"></div>\n          <div data-current-operand class="current-operand"></div>\n        </div>\n        <Button class="span-two" variant="contained">\n          AC\n        </Button>\n        {buttonTexts.map((buttonText) => (\n          <Button variant="contained">{buttonText}</Button>\n        ))}\n        <Button variant="contained" class="span-two">\n          =\n        </Button>\n      </div>\n    </main>\n  );\n};\n\nexport default Main;\n')),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/mainComponent.png",alt:"mainComponent"}),(0,o.yg)("br",null),(0,o.yg)("p",null,"You can toggle light and dark mode in the ",(0,o.yg)("inlineCode",{parentName:"p"},"App.js")," like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import "./App.css";\nimport React, { useState } from "react";\nimport Navbar from "./Components/Navbar";\nimport Main from "./Components/Main";\n\nfunction App() {\n  const [darkMode, setDarkMode] = useState("false");\n\n  const handleToggle = () => {\n    setDarkMode((prevDarkMode) => !prevDarkMode);\n  };\n\n  return (\n    <div className={darkMode ? "dark" : "App"}>\n      <Navbar handleToggle={handleToggle} darkMode={darkMode} />\n      <Main />\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.yg)("p",null,"Here\u2019s what our final app looks like:"),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/final.gif",alt:"final"}),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"This article covered ",(0,o.yg)("strong",{parentName:"p"},"Material UI Buttons")," and their applications in different areas of a React application. We also explored a possible use case in a calculator user interface with light and dark mode themes. You can access the source code on my ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Nomzy-kush/Calculator-UI-with-Light-and-Dark-mode-React-MUI"},"GitHub Repo"),".\nYou can also see the deployed application ",(0,o.yg)("a",{parentName:"p",href:"https://calculator-ui-with-light-and-dark-mode-react-mui.vercel.app/"},"here"),"."))}g.isMDXComponent=!0}}]);