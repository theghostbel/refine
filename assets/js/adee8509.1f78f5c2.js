"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37774],{58860:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>f});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},18162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"text",title:"Text",swizzle:!0},p=void 0,c={unversionedId:"api-reference/antd/components/fields/text",id:"version-3.xx.xx/api-reference/antd/components/fields/text",title:"Text",description:"This field lets you show basic text. It uses Ant Design's `` component.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/text.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/text",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/text",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/text.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1718348180,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"text",title:"Text",swizzle:!0},sidebar:"someSidebar",previous:{title:"Tag",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/tag"},next:{title:"Url",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/url"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},y=u("DocThumbsUpDownFeedbackWidget"),f=u("PropsTable"),m={toc:d},g="wrapper";function b(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This field lets you show basic text. It uses Ant Design's ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/typography/#Typography.Text"},(0,r.yg)("inlineCode",{parentName:"a"},"<Typography.Text>"))," component."),(0,r.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.yg)("strong",{parentName:"a"},"refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(y,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's see how to use it in a basic list page:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport { IResourceComponentsProps, useMany } from "@pankod/refine-core";\nimport {\n  List,\n  // highlight-next-line\n  TextField,\n  Table,\n  useTable,\n} from "@pankod/refine-antd";\n\nconst PostList: React.FC<IResourceComponentsProps> = (props) => {\n  const { tableProps } = useTable<IPost>();\n\n  const categoryIds =\n    tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n\n  const { data: categoriesData, isLoading } = useMany<ICategory>({\n    resource: "categories",\n    ids: categoryIds,\n    queryOptions: {\n      enabled: categoryIds.length > 0,\n    },\n  });\n\n  return (\n    <List {...props}>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="title" title="title" width="50%" />\n        <Table.Column\n          dataIndex={["category", "id"]}\n          title="category"\n          render={(value: number) => {\n            // highlight-start\n            if (isLoading) {\n              return <TextField value="Loading..." />;\n            }\n\n            return (\n              <TextField\n                strong\n                value={\n                  categoriesData?.data.find((item) => item.id === value)?.title\n                }\n              />\n            );\n            // highlight-end\n          }}\n          width="50%"\n        />\n      </Table>\n    </List>\n  );\n};\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  category: { id: number };\n}\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Table columns already render their data as text by default. If the rendered data is in text form and its text field won't be customized with any of Ant Design ",(0,r.yg)("inlineCode",{parentName:"p"},"<Typography.Text>")," properties, there isn't any need to use ",(0,r.yg)("inlineCode",{parentName:"p"},"<TextField>")," in a column's render function."))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(y,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(f,{module:"@pankod/refine-antd/TextField",mdxType:"PropsTable"}),(0,r.yg)("admonition",{title:"External Props",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/typography/#Typography.Text"},"Text"),"."))))}b.isMDXComponent=!0}}]);