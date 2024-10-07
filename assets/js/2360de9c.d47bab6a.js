"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45529],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(37953);var a=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"How to use Material UI Select in React",description:"We'll discover the Material UI select component with examples",slug:"material-ui-select-component",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-30-mui-select/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/material-ui-select-component",source:"@site/blog/2022-10-30-mui-select.md",title:"How to use Material UI Select in React",description:"We'll discover the Material UI select component with examples",date:"2022-10-30T00:00:00.000Z",formattedDate:"October 30, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"}],readingTime:9.155,hasTruncateMarker:!1,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"How to use Material UI Select in React",description:"We'll discover the Material UI select component with examples",slug:"material-ui-select-component",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-30-mui-select/social.png",hide_table_of_contents:!1},prevItem:{title:"What is Next.js getInitialProps and getServerSideProps?",permalink:"/blog/next-js-getinitialprops-and-getserversideprops"},nextItem:{title:"How to Use Tailwind CSS Grid",permalink:"/blog/tailwind-grid"},relatedPosts:[{title:"Framer Motion React Animations",description:"We'll walk you through the features and functionalities of Framer Motion.",permalink:"/blog/framer-motion",formattedDate:"June 20, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:15.475,date:"2024-06-20T00:00:00.000Z"},{title:"How to use Material UI Checkbox",description:"We'll discover the Material UI Checkbox component with examples",permalink:"/blog/material-ui-checkbox-component",formattedDate:"December 15, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.47,date:"2022-12-15T00:00:00.000Z"},{title:"Introduction to Mantine UI",description:"Let's explore Mantine UI React Component Library.",permalink:"/blog/mantine-ui-react",formattedDate:"September 9, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:18.305,date:"2024-09-09T00:00:00.000Z"}],authorPosts:[{title:"Material UI Grid System in React",description:"We'll discover the Material UI Grid system with React examples",permalink:"/blog/material-ui-grid",formattedDate:"May 22, 2024",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.435,date:"2024-05-22T00:00:00.000Z"},{title:"How to use Material UI Card Component",description:"We'll discover the Material UI Card component with examples",permalink:"/blog/material-ui-card",formattedDate:"January 4, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.22,date:"2023-01-04T00:00:00.000Z"},{title:"How to use Material UI Modal",description:"We'll learn how to use Material UI Modal to create a popup window that can display important information or facilitate user input.",permalink:"/blog/material-ui-modal",formattedDate:"May 9, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:11.215,date:"2023-05-09T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"What is Material UI",id:"what-is-material-ui",level:2},{value:"Getting Started with Material UI Select",id:"getting-started-with-material-ui-select",level:2},{value:"The Option component",id:"the-option-component",level:2},{value:"Other Material UI Select features",id:"other-material-ui-select-features",level:2},{value:"Indicator",id:"indicator",level:3},{value:"Decorator",id:"decorator",level:3},{value:"Grouped Options",id:"grouped-options",level:3},{value:"Clearing the Select field",id:"clearing-the-select-field",level:2},{value:"Accessibility",id:"accessibility",level:2},{value:"Building a Sign-up Form UI with React and Material UI Select",id:"building-a-sign-up-form-ui-with-react-and-material-ui-select",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:m},d="wrapper";function g(e){var{components:t}=e,n=r(e,["components"]);return(0,a.yg)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Material UI provides a plethora of available styled components that assist developers in creating responsive and aesthetically pleasing web designs. One of these components is Material UI's Select, which is an input field that showcases a list of customizable options. In this tutorial, we will deeply dive into ",(0,a.yg)("strong",{parentName:"p"},"Material UI Select"),", look at its prop possibilities, and highlight its features. We will also investigate a potential use case in a real-world application."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-material-ui"},"What is Material UI")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#getting-started-with-material-ui-select"},"Getting Started with Material UI Select")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#the-option-component"},"The Option component")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#other-material-ui-select-features"},"Other Material UI Select features"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#indicator"},"Indicator")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#decorator"},"Decorator")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#grouped-options"},"Grouped Options")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#clearing-the-select-field"},"Clearing the Select field")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#accessibility"},"Accessibility")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#building-a-sign-up-form-ui-with-react-and-material-ui-select"},"Building a Sign-up Form UI with React and Material UI Select"))),(0,a.yg)("h2",{id:"what-is-material-ui"},"What is Material UI"),(0,a.yg)("p",null,"Material UI is a React framework based on ",(0,a.yg)("a",{parentName:"p",href:"https://material.io/design/introduction"},"Google's Material Design")," that contains all the tools required to create a web application. Material UI empowers developers to build desktop and mobile web apps for companies by leveraging widely available responsive components. Many developers now use Material UI to structure their projects since it simplifies and improves web design."),(0,a.yg)("p",null,"The following component categories are available in Material UI: Navigation components, Input components, Data Display components, and Surfaces components. 'Select' is an illustrative example of an Input component."),(0,a.yg)("p",null,"You can add Material UI to your React project with the following commands:"),(0,a.yg)("p",null,"npm: ",(0,a.yg)("inlineCode",{parentName:"p"},"npm install @mui/material @emotion/react @emotion/styled")),(0,a.yg)("p",null,"yarn: ",(0,a.yg)("inlineCode",{parentName:"p"},"yarn add @mui/material @emotion/react @emotion/styled")),(0,a.yg)("h2",{id:"getting-started-with-material-ui-select"},"Getting Started with Material UI Select"),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"Material UI Select")," component displays a pop-up with a list of configurable options. It emulates the traditional ",(0,a.yg)("inlineCode",{parentName:"p"},"<Select></Select")," element in regular HTML. The built-in props in this component allow you to design interfaces that can be specific to your application's requirements."),(0,a.yg)("p",null,"Below is a simple illustration of how to use the Material UI Select component in your next React project:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Select from "@mui/joy/Select";\nimport Option from "@mui/joy/Option";\n\nexport default function topCarBrands() {\n  return (\n    <Select\n      defaultValue="Benz"\n      placeholder="Enter Car Brand"\n      sx={{\n        width: 200,\n        height: 50,\n      }}\n    >\n      <Option value="mercedes benz">Mercedes Benz</Option>\n      <Option value="tesla">Tesla</Option>\n      <Option value="rolls royce">Rolls Royce</Option>\n      <Option value="bugatti">Bugatti</Option>\n      <Option value="ferrari">Ferrari</Option>\n    </Select>\n  );\n}\n')),(0,a.yg)("p",null,"The code above showcases a ",(0,a.yg)("strong",{parentName:"p"},"Material UI Select")," input field with popular car brands as the option values."),(0,a.yg)("p",null,"Here\u2019s the result:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-30-mui-select/first.png",alt:"Material UI select initial"})),(0,a.yg)("h2",{id:"the-option-component"},"The Option component"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Option")," component represents the choosable alternatives in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Select")," component. The selected option inherits the ",(0,a.yg)("inlineCode",{parentName:"p"},"color")," prop value from the ",(0,a.yg)("inlineCode",{parentName:"p"},"parent(Select)")," and, by default, uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"primary")," palette. It does not, however, inherit the Select ",(0,a.yg)("inlineCode",{parentName:"p"},"variant")," value."),(0,a.yg)("p",null,"Here\u2019s a simple illustration of how to combine them:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Avatar from "@mui/joy/Avatar";\nimport ListItemDecorator from "@mui/joy/ListItemDecorator";\nimport ListDivider from "@mui/joy/ListDivider";\nimport Select from "@mui/joy/Select";\nimport Option from "@mui/joy/Option";\n\nexport default function topCarBrands() {\n  return (\n    <Select\n      defaultValue="1"\n      componentsProps={{\n        listbox: {\n          sx: {\n            "--List-decorator-size": "45px",\n          },\n        },\n      }}\n      sx={{\n        "--List-decorator-size": "45px",\n        minWidth: 240,\n      }}\n    >\n      <Option value="1">\n        <ListItemDecorator>\n          <Avatar size="sm" />\n        </ListItemDecorator>\n        Chevrolet\n      </Option>\n      <ListDivider role="none" inset="startContent" />\n      <Option value="2">\n        <ListItemDecorator>\n          <Avatar size="sm" />\n        </ListItemDecorator>\n        Honda\n      </Option>\n      <ListDivider role="none" inset="startContent" />\n      <Option value="3">\n        <ListItemDecorator>\n          <Avatar size="sm" />\n        </ListItemDecorator>\n        Nissan\n      </Option>\n      <ListDivider role="none" inset="startContent" />\n      <Option value="4">\n        <ListItemDecorator>\n          <Avatar size="sm" />\n        </ListItemDecorator>\n        Ford\n      </Option>\n      <ListDivider role="none" inset="startContent" />\n      <Option value="5">\n        <ListItemDecorator>\n          <Avatar size="sm" />\n        </ListItemDecorator>\n        Fiat\n      </Option>\n    </Select>\n  );\n}\n')),(0,a.yg)("p",null,"The code above showcases a list of car brands as ",(0,a.yg)("inlineCode",{parentName:"p"},"<Option />")," values. The ",(0,a.yg)("inlineCode",{parentName:"p"},"ListItemDecorator")," component creates space between the avatars, while the ",(0,a.yg)("inlineCode",{parentName:"p"},"ListDivider")," serves as a visual separator."),(0,a.yg)("p",null,"Here\u2019s the result:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-30-mui-select/mui-select-option.gif",alt:"Material UI select option"})),(0,a.yg)("h2",{id:"other-material-ui-select-features"},"Other Material UI Select features"),(0,a.yg)("h3",{id:"indicator"},"Indicator"),(0,a.yg)("p",null,"You can modify the default indicator in the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Select></Select>")," component by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"indicator")," prop. The value of the prop can be a string, array, component, or any other React element."),(0,a.yg)("p",null,"Consider the code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Select, { selectClasses } from "@mui/joy/Select";\nimport Option from "@mui/joy/Option";\nimport KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";\n\nexport default function SelectIndicator() {\n  return (\n    <Select\n      placeholder="what\'s your favorite car?"\n      indicator={<KeyboardArrowDown />}\n      sx={{\n        width: 240,\n        [`& .${selectClasses.indicator}`]: {\n          transition: "0.2s",\n          [`&.${selectClasses.expanded}`]: {\n            transform: "rotate(-180deg)",\n          },\n        },\n      }}\n    >\n      <Option value="jeep">Jeep</Option>\n      <Option value="volkswagen">Volkswagen</Option>\n      <Option value="volvo">Volvo</Option>\n      <Option value="jaguar">Jaguar</Option>\n      <Option value="audi">Audi</Option>\n    </Select>\n  );\n}\n')),(0,a.yg)("p",null,"In the code above, we used the ",(0,a.yg)("inlineCode",{parentName:"p"},"indicator")," prop to replace the standard ",(0,a.yg)("inlineCode",{parentName:"p"},"UnfoldMoreIcon")," with the ",(0,a.yg)("inlineCode",{parentName:"p"},"KeyboardArrowDown")," icon for the Select options indicator symbol."),(0,a.yg)("p",null,"Here\u2019s the result:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-30-mui-select/mui-select-indicator.gif",alt:"Material UI select indicator"})),(0,a.yg)("h3",{id:"decorator"},"Decorator"),(0,a.yg)("p",null,"You can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"startDecorator")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"endDecorator")," props to add supporting icons to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Select")," input field for more context and better emphasis. The ",(0,a.yg)("inlineCode",{parentName:"p"},"startDecorator")," places the icon at the beginning of the Select field, while the ",(0,a.yg)("inlineCode",{parentName:"p"},"endDecorator")," places the icon at the end."),(0,a.yg)("p",null,"Here\u2019s an illustration:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Select from "@mui/joy/Select";\nimport Option from "@mui/joy/Option";\nimport Chip from "@mui/joy/Chip";\nimport AttachMoneyIcon from "@mui/icons-material/AttachMoney";\nimport AddCircleIcon from "@mui/icons-material/AddCircle";\n\nexport default function SelectDecorators() {\n  return (\n    <Select\n      placeholder="Select a Car\u2026"\n      startDecorator={<AttachMoneyIcon />}\n      endDecorator={<AddCircleIcon />}\n      sx={{ width: 350 }}\n    >\n      <Option value="porsche">Porsche</Option>\n      <Option value="lexus">Lexus</Option>\n      <Option value="land rover">Land Rover</Option>\n      <Option value="toyota">Toyota</Option>\n      <Option value="toyota">Bugatti</Option>\n    </Select>\n  );\n}\n')),(0,a.yg)("p",null,"The code above depicts a simple Select field with the start and end decorators represented by Material UI's ",(0,a.yg)("inlineCode",{parentName:"p"},"AttachMoneyIcon")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"AddCircleIcon"),", respectively."),(0,a.yg)("p",null,"Here\u2019s the result:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-30-mui-select/mui-select-decorator.gif",alt:"Material UI select decorator"})),(0,a.yg)("h3",{id:"grouped-options"},"Grouped Options"),(0,a.yg)("p",null,"Wrap the ",(0,a.yg)("inlineCode",{parentName:"p"},"Option")," component in the ",(0,a.yg)("inlineCode",{parentName:"p"},"<List />")," to group your ",(0,a.yg)("inlineCode",{parentName:"p"},"Select")," option values. With the ",(0,a.yg)("inlineCode",{parentName:"p"},"ListItem")," component, you can now provide the ",(0,a.yg)("inlineCode",{parentName:"p"},"Select")," field with an accompanying label, providing uniform height and the easy use of nested CSS variables."),(0,a.yg)("p",null,"Consider the code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Select from "@mui/joy/Select";\nimport Option, { optionClasses } from "@mui/joy/Option";\nimport Chip from "@mui/joy/Chip";\nimport List from "@mui/joy/List";\nimport ListItemDecorator, {\n  listItemDecoratorClasses,\n} from "@mui/joy/ListItemDecorator";\nimport ListDivider from "@mui/joy/ListDivider";\nimport ListItem from "@mui/joy/ListItem";\nimport Typography from "@mui/joy/Typography";\nimport Check from "@mui/icons-material/Check";\n\nexport default function Demo() {\n  const group = {\n    Land: ["Car", "Truck", "Train", "Motorcycle", "Bus"],\n    Water: ["Ship", "Boat", "Sub Marine"],\n    Air: ["Airplane", "Jet", "Helicopter"],\n  };\n  const colors = {\n    Land: "neutral",\n    Water: "primary",\n    Air: "success",\n  };\n  return (\n    <Select\n      placeholder="Choose your transport mode"\n      componentsProps={{\n        listbox: {\n          component: "div",\n          sx: {\n            maxHeight: 240,\n            overflow: "auto",\n            "--List-padding": "0px",\n          },\n        },\n      }}\n      sx={{ width: 350 }}\n    >\n      {Object.entries(group).map(([name, transports], index) => (\n        <React.Fragment key={name}>\n          {index !== 0 && <ListDivider role="none" />}\n          <List\n            aria-labelledby={`select-group-${name}`}\n            sx={{ "--List-decorator-size": "28px" }}\n          >\n            <ListItem id={`select-group-${name}`} sticky>\n              <Typography\n                level="body3"\n                textTransform="uppercase"\n                letterSpacing="md"\n              >\n                {name} ({transports.length})\n              </Typography>\n            </ListItem>\n            {transports.map((transport) => (\n              <Option\n                key={transport}\n                value={transport}\n                label={\n                  <React.Fragment>\n                    <Chip\n                      size="sm"\n                      color={colors[name]}\n                      sx={{ borderRadius: "xs", mr: 1, ml: -0.5 }}\n                    >\n                      {name}\n                    </Chip>{" "}\n                    {transport}\n                  </React.Fragment>\n                }\n                sx={{\n                  [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:\n                    {\n                      opacity: 1,\n                    },\n                }}\n              >\n                <ListItemDecorator sx={{ opacity: 0 }}>\n                  <Check />\n                </ListItemDecorator>\n                {transport}\n              </Option>\n            ))}\n          </List>\n        </React.Fragment>\n      ))}\n    </Select>\n  );\n}\n')),(0,a.yg)("p",null,"The preceding code shows a ",(0,a.yg)("inlineCode",{parentName:"p"},"Select")," field with organized input values. As shown below, these values are represented by three modes of transportation (land, air, and water), each with its own set of values. These values are placed in an array that is mapped through to generate the output on the DOM."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-30-mui-select/mui-select-grouped.gif",alt:"Material UI select grouped"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note"),": If you wish to specify the maximum height for a list of accessible ",(0,a.yg)("inlineCode",{parentName:"p"},"Select")," options, simply do so in the ",(0,a.yg)("inlineCode",{parentName:"p"},"listbox")," component to ensure proper keyboard navigation."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"<Select\n  optionProps={{\n    listbox: {\n      sx: {\n        maxHeight: 250,\n        overflow: 'auto', // to enable scrolling\n      }\n    }\n  }}\n>\n")),(0,a.yg)("br",null),(0,a.yg)("div",null,(0,a.yg)("a",{href:"https://discord.gg/refine"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.yg)("h2",{id:"clearing-the-select-field"},"Clearing the Select field"),(0,a.yg)("p",null,"You can clear the values in the ",(0,a.yg)("strong",{parentName:"p"},"Material UI Select")," field just like any other input component. Use the ",(0,a.yg)("inlineCode",{parentName:"p"},"IconButton")," component as a Select decorator, then add the logic that clears the values."),(0,a.yg)("p",null,"Here\u2019s how:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState, useRef } from "react";\nimport Select from "@mui/joy/Select";\nimport Option from "@mui/joy/Option";\nimport IconButton from "@mui/joy/IconButton";\nimport CloseRounded from "@mui/icons-material/CloseRounded";\n\nexport default function SelectBasic() {\n  const [value, setValue] = useState("tesla");\n  const action = useRef(null);\n  return (\n    <Select\n      action={action}\n      value={value}\n      placeholder="Favorite car"\n      onChange={(e, newValue) => setValue(newValue)}\n      {...(value && {\n        // When the user has selected a value, the button is displayed, and the select indicator is removed.\n        endDecorator: (\n          <IconButton\n            size="sm"\n            variant="plain"\n            color="neutral"\n            onMouseDown={(event) => {\n              // stops the popup from appearing when this button is clicked\n              event.stopPropagation();\n            }}\n            onClick={() => {\n              setValue(null);\n              action.current?.focusVisible();\n            }}\n          >\n            <CloseRounded />\n          </IconButton>\n        ),\n        indicator: null,\n      })}\n      sx={{ minWidth: 300 }}\n    >\n      <Option value="tesla">Tesla</Option>\n      <Option value="bmw">BMW</Option>\n      <Option value="bentley">Bentley</Option>\n      <Option value="bugatti">Bugatti</Option>\n    </Select>\n  );\n}\n')),(0,a.yg)("p",null,"Here\u2019s the result:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center",width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-30-mui-select/mui-select-clearing.gif",alt:"Material UI select clearing"})),(0,a.yg)("h2",{id:"accessibility"},"Accessibility"),(0,a.yg)("p",null,"To make ",(0,a.yg)("strong",{parentName:"p"},"Material UI Select")," accessible, you must associate it with a ",(0,a.yg)("inlineCode",{parentName:"p"},"label"),". The ",(0,a.yg)("inlineCode",{parentName:"p"},"FormControl")," component automatically produces a unique id that ties the ",(0,a.yg)("inlineCode",{parentName:"p"},"Select")," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"FormLabel")," component."),(0,a.yg)("p",null,"Consider the code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<FormControl>\n  <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">\n    {/* Define a random label */}\n  </FormLabel>\n  <Select\n    componentsProps={{\n      button: {\n        id: "select-field-demo-button",\n        "aria-labelledby": "select-field-demo-label select-field-demo-button",\n      },\n    }}\n  >\n    <Option>...</Option>\n  </Select>\n</FormControl>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note that"),": When making use of ",(0,a.yg)("inlineCode",{parentName:"p"},"FormControl")," with the ",(0,a.yg)("inlineCode",{parentName:"p"},"outlined")," variant of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Select")," component, you must provide a ",(0,a.yg)("inlineCode",{parentName:"p"},"label")," in two places: in the ",(0,a.yg)("inlineCode",{parentName:"p"},"InputLabel")," component and the ",(0,a.yg)("inlineCode",{parentName:"p"},"label")," prop of the Select component."),(0,a.yg)("h2",{id:"building-a-sign-up-form-ui-with-react-and-material-ui-select"},"Building a Sign-up Form UI with React and Material UI Select"),(0,a.yg)("p",null,"You can use Material UI ",(0,a.yg)("inlineCode",{parentName:"p"},"Select")," for a wide range of purposes on a website, but nothing fully demonstrates its capabilities like a form component. For the sake of this tutorial, we will showcase the use of Material UI ",(0,a.yg)("inlineCode",{parentName:"p"},"Select")," in a simple Sign-up form."),(0,a.yg)("p",null,"Here\u2019s the code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState, useRef } from "react";\nimport Select from "@mui/joy/Select";\nimport Option from "@mui/joy/Option";\nimport IconButton from "@mui/joy/IconButton";\nimport CloseRounded from "@mui/icons-material/CloseRounded";\n\nexport default function SelectBasic() {\n  const [value, setValue] = useState("tesla");\n  const action = useRef(null);\n  return (\n    <div>\n      <section className="login">\n        <div className="loginContainer">\n          <label>Name</label>\n          <input type="text" autoFocus required />\n          <label>Email</label>\n          <input type="email" required />\n\n          <label>Gender</label>\n          <Select\n            action={action}\n            value={value}\n            placeholder="What is your Gender?"\n            onChange={(e, newValue) => setValue(newValue)}\n            {...(value && {\n              // When the user has selected a value, the button is displayed, and the select indicator is removed.\n              endDecorator: (\n                <IconButton\n                  size="sm"\n                  variant="plain"\n                  color="neutral"\n                  backgroundColor="none"\n                  onMouseDown={(event) => {\n                    // stops the popup from appearing when this button is clicked\n                    event.stopPropagation();\n                  }}\n                  onClick={() => {\n                    setValue(null);\n                    action.current?.focusVisible();\n                  }}\n                >\n                  <CloseRounded />\n                </IconButton>\n              ),\n              indicator: null,\n            })}\n            sx={{ minWidth: 300, backgroundColor: "#202124" }}\n          >\n            <Option value="male">Male</Option>\n            <Option value="female">Female</Option>\n            <Option value="non-binary">Non-Binary</Option>\n            <Option value="other">Other</Option>\n            <Option value="no-answer">Prefer not to answer</Option>\n          </Select>\n        </div>\n      </section>\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"And the result:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-30-mui-select/mui-select-result.gif",alt:"Material UI select option"})),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"This article covered the ",(0,a.yg)("strong",{parentName:"p"},"Material UI Select")," component, navigated its features, and highlighted its functionalities in a React application. We also investigated a use case by developing a Sign-up form UI in React with ",(0,a.yg)("strong",{parentName:"p"},"Material UI Select"),". I hope you find this post helpful."))}g.isMDXComponent=!0}}]);