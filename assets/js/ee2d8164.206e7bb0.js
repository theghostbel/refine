"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||r;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(67294);var o=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",slug:"react-design-patterns",authors:"peter_osah",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-17-react-patterns/social.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/react-design-patterns",source:"@site/blog/2023-10-17-react-patterns.md",title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",date:"2023-10-17T00:00:00.000Z",formattedDate:"October 17, 2023",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:10.365,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",slug:"react-design-patterns",authors:"peter_osah",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-17-react-patterns/social.png",hide_table_of_contents:!1},prevItem:{title:"Introduction to Docker Networking",permalink:"/blog/docker-networking"},nextItem:{title:"Mojo - A New Programming Language for AI",permalink:"/blog/mojo-programming-language"},relatedPosts:[{title:"Kubectl config set context Tutorial and Best Practices",description:"We'll discuss the kubectl config set-context command and how it can be used to manage contexts in Kubernetes. We'll also cover some best practices for managing contexts.",permalink:"/blog/kubectl-config-set-context",formattedDate:"October 27, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.835,date:"2023-10-27T00:00:00.000Z"},{title:"Unraveling the Kubernetes ImagePullBackOff Error",description:"We'll discuss the ImagePullBackOff error in Kubernetes, its causes, and how to resolve it.",permalink:"/blog/kubernetes-imagepullbackoff-error",formattedDate:"November 4, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.275,date:"2023-11-04T00:00:00.000Z"},{title:"A complete guide to Kubectl exec",description:"We'll go over the basics of kubectl exec, including its syntax, parameters, and how to use it to interact with containers in a Kubernetes pod.",permalink:"/blog/kubectl-exec-command",formattedDate:"October 19, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.53,date:"2023-10-19T00:00:00.000Z"}],authorPosts:[{title:"Building a Complete React CRUD App with Airtable",description:"We will be building a Complete React CRUD application using Refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/react-crud-app-airtable",formattedDate:"January 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:29.52,date:"2023-01-17T00:00:00.000Z"},{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",permalink:"/blog/react-virtual-dom",formattedDate:"November 23, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:12.11,date:"2023-11-23T00:00:00.000Z"},{title:"An Intro to Server Components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",permalink:"/blog/react-server-components",formattedDate:"January 25, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:11.33,date:"2024-01-25T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction:",id:"introduction",level:2},{value:"Container and presentation patterns",id:"container-and-presentation-patterns",level:2},{value:"Component composition with Hooks",id:"component-composition-with-hooks",level:2},{value:"State management with Reducers",id:"state-management-with-reducers",level:2},{value:"Data management with Providers",id:"data-management-with-providers",level:2},{value:"Component enhancement with HOCs (higher-order components)",id:"component-enhancement-with-hocs-higher-order-components",level:2},{value:"Compound Components",id:"compound-components",level:2},{value:"Prop combination",id:"prop-combination",level:2},{value:"Controlled inputs",id:"controlled-inputs",level:2},{value:"Manage custom components with forwardRefs",id:"manage-custom-components-with-forwardrefs",level:2}],m=(h="AvatarComponent",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var h;const d={toc:u};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction:"),(0,o.kt)("p",null,"React developers can save time and effort by using design patterns, which provide a quick approach to addressing problems using tested-and-trusted solutions. They enable cohesive modules with lower coupling, which in turn helps React developers create maintainable, scalable, and efficient applications. In this article, we will explore React design patterns and examine how they might improve the development of React applications."),(0,o.kt)("p",null,"Steps we'll cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#container-and-presentation-patterns"},"Container and presentation patterns")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#component-composition-with-hooks"},"Component composition with Hooks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#state-management-with-reducers"},"State management with Reducers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#data-management-with-providers"},"Data management with Providers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#component-enhancement-with-hocs-higher-order-components"},"Component enhancement with HOCs (higher-order components)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#compound-components"},"Compound Components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#prop-combination"},"Prop combination")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#controlled-inputs"},"Controlled inputs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#manage-custom-components-with-fowardrefs"},"Manage custom components with forwardRefs"))),(0,o.kt)("h2",{id:"container-and-presentation-patterns"},"Container and presentation patterns"),(0,o.kt)("p",null,"The Container and presentation pattern is a pattern that aims to separate the presentation logic from the business logic in a react code, thereby making it modular, testable, and one that follows the separations of concern principle.\nMostly in react applications, there arise cases where we are required to fetch data from a backend/store or to compute a logic and represent the resultant of that computation on a react component. In these cases, the container and presentation pattern shines as it can be used to categorize the components into two namely:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The container component, which acts as the component responsible for the data fetching or computation."),(0,o.kt)("li",{parentName:"ul"},"the presentation component, whose job is to render the fetched data or computed value on the UI(user interface).")),(0,o.kt)("p",null,"An example of Container and presentation pattern is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useEffect } from 'react';\nimport CharacterList from './CharacterList';\n\nconst StarWarsCharactersContainer:React.FC = () => {\n    const [characters, setCharacters] = useState<Character>([])\n    const [isLoading, setIsLoading] = useState<boolean>(false);\n    const [error, setError] = useState<boolean>(false);\n\n    const getCharacters = async () => {\n        setIsLoading(true);\n        try {\n            const response = await fetch(\"https://akabab.github.io/starwars-api/api/all.json\");\n            const data = await response.json();\n            setIsLoading(false);\n            if (!data) return;\n            setCharacters(data);\n        } catch(err) {\n            setError(true);\n        } finally {\n            setIsLoading(true);\n        }\n    };\n\n    useEffect(() => {\n        getCharacters();\n    }, []);\n\n    return <CharacterList loading={loading} error={error} characters={characters} />;\n};\n\nexport default StarWarsCharactersContainer;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// the component is responsible for displaying the characters\n\nimport React from 'react';\nimport { Character } from './types';\n\ninterface CharacterListProps {\n    loading: boolean;\n    error: boolean;\n    users: Character[];\n}\n\nconst CharacterList: React.FC<CharacterListProps> = ({ loading, error, characters }) => {\n    \n    if (loading && !error) return <div>Loading...</div>;\n    if (!loading && error) return <div>error occurred.unable to load characters</div>;\n    if (!characters) return null;\n\n    return (\n        <ul>\n            {characters.map((user) => (\n                <li key={user.id}>{user.name}</li>\n            ))}\n        </ul>\n    );\n};\n\nexport default CharacterList;\n")),(0,o.kt)("h2",{id:"component-composition-with-hooks"},"Component composition with Hooks"),(0,o.kt)("p",null,"Hooks are a brand-new feature that debuted in React 16.8. Since then, they have played a crucial role in developing react applications. Hooks are basic functions that grant functional components access to state and lifecycle methods (which were previously exclusively available to class components). Hooks, on the other hand, can be specifically designed to meet a component requirement and have additional use cases."),(0,o.kt)("p",null,"We can now isolate all stateful logic\u2014a type of logic that needs reactive state variable(s)\u2014and compose or use it in the components using custom hooks. As a result, the code is more modularized and testable because the hooks are loosely tied to the component and can therefore be tested separately."),(0,o.kt)("p",null,"An example of component composition with hooks is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// creating a custom hook that fetches star wars characters\n\nexport const useFetchStarWarsCharacters = () => {\n\n    const [characters, setCharacters] = useState<Character>([])\n    const [isLoading, setIsLoading] = useState(false);\n    const [error, setError] = useState(false);\n    const controller = new AbortController()\n\n    const getCharacters = async () => {\n        setIsLoading(true);\n        try {\n            const response = await fetch(\n                \"https://akabab.github.io/starwars-api/api/all.json\", \n                {\n                    method: \"GET\", \n                    credentials: \"include\",\n                    mode: \"cors\",\n                    headers: {\n                        'Content-Type': 'application/json',\n                        'Access-Control-Allow-Origin': '*'\n                    },\n                    signal: controller.signal\n                }\n            );\n            const data = await response.json();\n            setIsLoading(false);\n            if (!data) return;\n            setCharacters(data);\n        } catch(err) {\n            setError(true);\n        } finally {\n            setIsLoading(true);\n        }\n    };\n\n    useEffect(() => {\n        getCharacters();\n        return () => {\n            controller.abort();\n        }\n    }, []);\n\n    return [\n        characters,\n        isLoading,\n        error\n    ];\n};\n")),(0,o.kt)("p",null,"After creating the custom hook, we will import it into our ",(0,o.kt)("strong",{parentName:"p"},"StarWarsCharactersContainer")," component and use it;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// importing the custom hook to a component and fetch the characters \n\nimport React from 'react';\nimport { Character } from './types';\nimport { useFetchStarWarsCharacters } from './useFetchStarWarsCharacters';\n\nconst StarWarsCharactersContainer:React.FC = () => {\n\n    const [ characters, isLoading, error ] = useFetchStarWarsCharacters();\n\n    return <CharacterList loading={loading} error={error} characters={characters} />;\n};\n\nexport default StarWarsCharactersContainer;\n\n")),(0,o.kt)("h2",{id:"state-management-with-reducers"},"State management with Reducers"),(0,o.kt)("p",null,"Most often, handling many states in a component leads to issues with many ungrouped states, which can be burdensome and challenging to handle. The reducer pattern can be a helpful option in this situation. We can categorize states using reducers into certain actions that, when executed, can change the grouped states. "),(0,o.kt)("p",null,"This pattern allows the developer who uses it to control the component's and/or hook's state management, letting them manage state changes when events are sent."),(0,o.kt)("p",null,"An example of using the reducer pattern is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useReducer } from 'react';\n\nconst initState = {\n    loggedIn: false,\n    user: null,\n    token: null\n}\n\nfunction authReducer(state, action) {\n    switch (action.type) {\n        case 'login':\n            return {\n                loggedIn: true,\n                user: action.payload.user,\n                token: action.payload.token\n            }\n        case 'logout':\n            return initState;\n        default:\n            break;\n    }\n}\n\nconst AuthComponent = () => {\n    const [state, dispatch] = useReducer(authReducer, initState);\n\n    const logIn = () => {\n        dispatch({ type: 'login', payload: { \n            user: { name: 'John Doe'},\n            token: 'token' \n        } });\n    }\n\n    const logOut = () => {\n        dispatch({ type: 'logout' });\n    }\n\n    return (\n        <div>\n            { state.loggedIn ? (\n                    <div>\n                        <p> Welcome { state.user.name } </p>\n                        <button onClick={logOut}></button>\n                    </div>\n                ): (\n                    <form onSubmit={logIn}>\n                        <input type=\"text\" />\n                        <input type=\"password\" />\n                        <button type=\"submit\"></button>\n                    </form>\n                )\n            }\n        </div>\n    )\n};\n")),(0,o.kt)("p",null,"In the above code, the component dispatches two actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The '",(0,o.kt)("strong",{parentName:"li"},"login"),"' action type triggers a state change that affects three state values namely ",(0,o.kt)("strong",{parentName:"li"},"loggedIn"),", ",(0,o.kt)("strong",{parentName:"li"},"user"),", ",(0,o.kt)("strong",{parentName:"li"},"token"),". "),(0,o.kt)("li",{parentName:"ul"},"The '",(0,o.kt)("strong",{parentName:"li"},"logout"),"' action simply resets the state to its initial value.")),(0,o.kt)("h2",{id:"data-management-with-providers"},"Data management with Providers"),(0,o.kt)("p",null,"The provider pattern is very useful for data management as it utilizes the context API to pass data through the application's component tree. This pattern is an effective solution to prop drilling, which has been a common concern in react development."),(0,o.kt)("p",null,"To implement the provider pattern, we will first create a Provider Component. A Provider is a higher-order component that the Context object provides to us. We can construct a Context object by utilizing the createContext method provided by React."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'export const ThemeContext = React.createContext(null);\n\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = React.useState("light");\n\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n')),(0,o.kt)("p",null,"After creating the provider, we will enclose components dependent on the data from context API with the created Provider Component."),(0,o.kt)("p",null,"To obtain the data from context API, we call useContext hook, which accepts a context as a parameter(in this case, ",(0,o.kt)("strong",{parentName:"p"},"ThemeContext"),"). "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'impor { useContext } from \'react\';\nimport { ThemeProvider, ThemeContext } from "../context";\n\n\nconst HeaderSection = () => {\n  <ThemeProvider>\n    <TopNav />\n  </ThemeProvider>;\n};\n\n\nconst TopNav = () => {\n  const { theme, setTheme } = useContext(ThemeContext);\n    \n  return (\n    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000 " }}>\n      ...\n    </div>\n  );\n};\n\n')),(0,o.kt)("h2",{id:"component-enhancement-with-hocs-higher-order-components"},"Component enhancement with HOCs (higher-order components)"),(0,o.kt)("p",null,"A higher-order component takes in a component as an argument and returns a supercharged component injected with additional data or functionality. The possibility of HOCs in React is due to React preference of composition over inheritance."),(0,o.kt)("p",null,"The Higher-Order Component (HOC) pattern offers a mechanism to increase or modify a component's functionality, facilitating component reuse and code sharing."),(0,o.kt)("p",null,"An example of the HOC pattern is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\'\n\nconst higherOrderComponent = Component => {\n  return class HOC extends React.Component {\n    state = {\n      name: \'John Doe\'\n    }\n     \n    render() {\n      return <Component name={this.state.name {...this.props} />\n    }\n }\n  \n  \nconst AvatarComponent = (props) => {\n  return (\n    <div class="flex items-center justify-between">\n      <div class="rounded-full bg-red p-4">\n          {props.name}\n      </div>\n      <div>\n          <p>I am a {props.description}.</p>\n      </div>\n    </div>\n  )\n}\n      \n      \nconst SampleHOC = higherOrderComponent(AvatarComponent);\n\n\nconst App = () => {\n  return (\n    <div>\n      <SampleHOC description="Frontend Engineer" />\n    </div>\n  )\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"In the code above, the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(m,{mdxType:"AvatarComponent"}))," is supplied props by the ",(0,o.kt)("strong",{parentName:"p"},"higherOrderComponent"),", which it will utilize internally."),(0,o.kt)("h2",{id:"compound-components"},"Compound Components"),(0,o.kt)("p",null,"The Compound Components Pattern is a React design pattern for managing parent components that are made up of child components. "),(0,o.kt)("p",null,"The principle behind this pattern is to break down the parent component into smaller components and then manage the interactions between these smaller components with either props, context or other react data management techniques."),(0,o.kt)("p",null,"This pattern comes in handy when there is a need to create reusable, versatile components made up of smaller components. It enables developers to create sophisticated UI components that can be readily customized and extended while maintaining a clear and simple code structure."),(0,o.kt)("p",null,"An example of a use case of the compound components pattern is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { createContext, useState } from 'react';\n\nconst ToggleContext = createContext();\n\nfunction Toggle({ children }) {\n  const [on, setOn] = useState(false);\n  const toggle = () => setOn(!on);\n\n  return (\n    <ToggleContext.Provider value={{ on, toggle }}>\n      {children}\n    </ToggleContext.Provider>\n  );\n}\n\nToggle.On = function ToggleOn({ children }) {\n  const { on } = useContext(ToggleContext);\n  return on ? children : null;\n}\n\nToggle.Off = function ToggleOff({ children }) {\n  const { on } = useContext(ToggleContext);\n  return on ? null : children;\n}\n\nToggle.Button = function ToggleButton(props) {\n  const { on, toggle } = useContext(ToggleContext);\n  return <button onClick={toggle} {...props} />;\n}\n\nfunction App() {\n  return (\n    <Toggle>\n      <Toggle.On>The button is on</Toggle.On>\n      <Toggle.Off>The button is off</Toggle.Off>\n      <Toggle.Button>Toggle</Toggle.Button>\n    </Toggle>\n  );\n}\n")),(0,o.kt)("h2",{id:"prop-combination"},"Prop combination"),(0,o.kt)("p",null,"This entails creating a single object out of several related props and passing it as a single prop to the component."),(0,o.kt)("p",null,"This pattern allows us to clean up our code and make it simpler to manage the props, making it especially helpful when we want to pass a lot of related properties to a component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\n\nfunction P(props) {\n  const { color, size, children, ...rest } = props;\n  return (\n    <p style={{ color, fontSize: size }} {...rest}>\n      { children }\n    </p>\n  );\n}\n\nfunction App() {\n  const paragraphProps = {\n    color: "red",\n    size: "20px",\n    lineHeight: "22px"\n  };\n  return <P {...paragraphProps}>This is a P</P>;\n}\n')),(0,o.kt)("h2",{id:"controlled-inputs"},"Controlled inputs"),(0,o.kt)("p",null,"The Controlled Input pattern can be used to handle input fields. This pattern involves using an event handler to update the component state if the value of an input field changes, as well as storing the current value of the input field in the component state."),(0,o.kt)("p",null,"Because React controls the state and behavior of the component, this pattern makes code more predictable and readable than the uncontrolled inputs pattern, which does not use the component's state and instead controls it directly through the DOM (Document object model)."),(0,o.kt)("p",null,"An example of a use case of a controlled inputs pattern is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useState } from 'react';\n\nfunction ControlledInput() {\n  const [inputValue, setInputValue] = useState('');\n\n  const handleChange = (event) => {\n    setInputValue(event.target.value);\n  };\n\n  return (\n    <input type=\"text\" value={inputValue} onChange={handleChange} />\n  );\n}\n")),(0,o.kt)("h2",{id:"manage-custom-components-with-forwardrefs"},"Manage custom components with forwardRefs"),(0,o.kt)("p",null,"A higher-order component called a ForwardRef takes another component as input and outputs a new component that passes the original component's ref. By doing this, the child component's ref, which can be used to retrieve the underlying DOM node or component instance, is made accessible to the parent component."),(0,o.kt)("p",null,"When creating a custom component that interacts with a third-party library or another custom component within your application, it is highly helpful to include the ForwardRef pattern in your workflow. By granting access to the library's DOM node or another component's DOM instance, it helps transfer control of such components to you."),(0,o.kt)("p",null,"An example of a use case of the forwardRef pattern is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n \nconst CustomInput = React.forwardRef((props, ref) => (\n  <input type="text" {...props} ref={ref} />\n));\n \nconst ParentComponent = () => {\n  const inputRef = useRef(null);\n \n  useEffect(() => {\n    inputRef.current.focus();\n  }, []);\n \n  return <CustomInput ref={inputRef} />;\n};\n')),(0,o.kt)("p",null,"In the code above, we triggered the focus of another component ",(0,o.kt)("inlineCode",{parentName:"p"},"<CustomInput/>")," from our component ",(0,o.kt)("inlineCode",{parentName:"p"},"<ParentComponent/>")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"forwardRefs"),"."),(0,o.kt)("h1",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We discussed React design patterns in this article, including Higher-Order Components, Container-Presentational Component Patterns, Compound Components, Controlled Components, and many more. You can enhance code quality, promote team collaboration, and make your apps more scalable, flexible, and maintainable by incorporating these design patterns and best practices into your React projects."))}g.isMDXComponent=!0}}]);