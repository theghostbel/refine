"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41702],{58860:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,y=u["".concat(p,".").concat(c)]||u[c]||g[c]||o;return t?a.createElement(y,i(i({ref:n},d),{},{components:t})):a.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},84641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>u});t(37953);var a=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const l={title:"useRadioGroup"},p=void 0,s={unversionedId:"ui-integrations/ant-design/hooks/use-radio-group/index",id:"ui-integrations/ant-design/hooks/use-radio-group/index",title:"useRadioGroup",description:"useRadioGroup hook allows you to manage an Ant Design Radio.Group component when records in a resource needs to be used as radio options.",source:"@site/docs/ui-integrations/ant-design/hooks/use-radio-group/index.md",sourceDirName:"ui-integrations/ant-design/hooks/use-radio-group",slug:"/ui-integrations/ant-design/hooks/use-radio-group/",permalink:"/docs/ui-integrations/ant-design/hooks/use-radio-group/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/hooks/use-radio-group/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1720161219,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"useRadioGroup"},sidebar:"mainSidebar",previous:{title:"useCheckboxGroup",permalink:"/docs/ui-integrations/ant-design/hooks/use-checkbox-group/"},next:{title:"useImport",permalink:"/docs/ui-integrations/ant-design/hooks/use-import/"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"resource",id:"resource",level:3},{value:"defaultValue",id:"defaultvalue",level:3},{value:"optionLabel and optionValue",id:"optionlabel-and-optionvalue",level:3},{value:"searchField",id:"searchfield",level:3},{value:"filters",id:"filters",level:3},{value:"sorters",id:"sorters",level:3},{value:"fetchSize",id:"fetchsize",level:3},{value:"queryOptions",id:"queryoptions",level:3},{value:"pagination",id:"pagination",level:3},{value:"<del>sort</del> <PropTag deprecated />",id:"sort-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values",level:3},{value:"Example",id:"example",level:2}],g=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},c=g("DocThumbsUpDownFeedbackWidget"),y=g("Image"),m=g("PropTag"),h=g("PropsTable"),f=g("CodeSandboxExample"),b={toc:u},N="wrapper";function v(e){var{components:n}=e,t=i(e,["components"]);return(0,a.yg)(N,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},b,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useRadioGroup")," hook allows you to manage an Ant Design ",(0,a.yg)("a",{parentName:"p",href:"https://ant.design/components/radio/#components-radio-demo-radiogroup-with-name"},"Radio.Group")," component when records in a resource needs to be used as radio options."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(c,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We will demonstrate how to get data at ",(0,a.yg)("inlineCode",{parentName:"p"},"/languages")," endpoint from the ",(0,a.yg)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev")," REST API."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/languages"',title:'"https://api.fake-rest.refine.dev/languages"'},'{\n  [\n    {\n      id: 1,\n      title: "Turkish",\n    },\n    {\n      id: 2,\n      title: "English",\n    },\n    {\n      id: 3,\n      title: "German",\n    },\n  ];\n}\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { useRadioGroup } from "@refinedev/antd";\nimport { Form, Radio } from "antd";\n\nexport const PostCreate = () => {\n  // highlight-start\n  const { radioGroupProps } = useRadioGroup<ILanguage>({\n    resource: "languages",\n  });\n  // highlight-end\n\n  return (\n    <Form>\n      <Form.Item label="Languages" name="languages">\n        // highlight-next-line\n        <Radio.Group {...radioGroupProps} />\n      </Form.Item>\n    </Form>\n  );\n};\n\ninterface ILanguage {\n  id: number;\n  title: string;\n}\n')),(0,a.yg)(y,{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/hooks/useRadioGroup/basic-usage.png",alt:"Radio group",mdxType:"Image"}),(0,a.yg)("p",null,"All we have to do is pass the ",(0,a.yg)("inlineCode",{parentName:"p"},"radioGroupProps")," it returns to the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Radio.Group>")," component."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useRadioGroup")," uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"useList")," hook for fetching data."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-list"},"Refine Core's ",(0,a.yg)("inlineCode",{parentName:"a"},"useList")," hook documentation ","\u2192")))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("h3",{id:"resource"},"resource"),(0,a.yg)(c,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n});\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"resource")," property determines API resource endpoint to fetch records from ",(0,a.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"dataProvider")),". It returns properly configured ",(0,a.yg)("inlineCode",{parentName:"p"},"options")," values for radio buttons."),(0,a.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,a.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,a.yg)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,a.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"https://ant.design/components/radio"},"Ant Design's ",(0,a.yg)("inlineCode",{parentName:"a"},"Radio.Group")," component documentation ","\u2192")))),(0,a.yg)("h3",{id:"defaultvalue"},"defaultValue"),(0,a.yg)(c,{id:"defaultvalue",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-next-line\n  defaultValue: 1,\n});\n')),(0,a.yg)("p",null,"The easiest way to selecting a default value for an radio button field is by passing in ",(0,a.yg)("inlineCode",{parentName:"p"},"defaultValue"),".")),(0,a.yg)("h3",{id:"optionlabel-and-optionvalue"},"optionLabel and optionValue"),(0,a.yg)(c,{id:"optionlabel-and-optionvalue",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  optionLabel: "title",\n  optionValue: "id",\n  // highlight-end\n});\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"optionValue")," allows you to change the values and appearances of your options. Default values are ",(0,a.yg)("inlineCode",{parentName:"p"},'optionLabel = "title"')," and ",(0,a.yg)("inlineCode",{parentName:"p"},'optionValue = "id"'),"."),(0,a.yg)("p",null,"These properties also support nested property access with ",(0,a.yg)("a",{parentName:"p",href:"https://lodash.com/docs/4.17.15#get"},"Object path")," syntax."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useRadioGroup({\n  resource: "categories",\n  // highlight-start\n  optionLabel: "nested.title",\n  optionValue: "nested.id",\n  // highlight-end\n});\n')),(0,a.yg)("p",null,"It's also possible to pass function to these props. These functions will receive ",(0,a.yg)("inlineCode",{parentName:"p"},"item")," argument."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const { options } = useRadioGroup({\n  optionLabel: (item) => `${item.firstName} ${item.lastName}`,\n  optionValue: (item) => item.id,\n});\n"))),(0,a.yg)("h3",{id:"searchfield"},"searchField"),(0,a.yg)(c,{id:"searchfield",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Can be used to specify which field will be searched with value given to ",(0,a.yg)("inlineCode",{parentName:"p"},"onSearch")," function."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { onSearch } = useRadioGroup({ searchField: "name" });\n\nonSearch("John"); // Searches by `name` field with value John.\n')),(0,a.yg)("p",null,"By default, it uses ",(0,a.yg)("inlineCode",{parentName:"p"},"optionLabel"),"'s value, if ",(0,a.yg)("inlineCode",{parentName:"p"},"optionLabel")," is a string. Uses ",(0,a.yg)("inlineCode",{parentName:"p"},"title")," field otherwise."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'// When `optionLabel` is string.\nconst { onSearch } = useRadioGroup({ optionLabel: "name" });\n\nonSearch("John"); // Searches by `name` field with value John.\n\n// When `optionLabel` is function.\nconst { onSearch } = useRadioGroup({\n  optionLabel: (item) => `${item.id} - ${item.name}`,\n});\n\nonSearch("John"); // Searches by `title` field with value John.\n'))),(0,a.yg)("h3",{id:"filters"},"filters"),(0,a.yg)(c,{id:"filters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"filters")," allows us to add filters while fetching the data. For example, if you want to list only the ",(0,a.yg)("inlineCode",{parentName:"p"},"titles"),' that are equal to "German":'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  filters: [\n    {\n      field: "title",\n      operator: "eq",\n      value: "German",\n    },\n  ],\n  // highlight-end\n});\n'))),(0,a.yg)("h3",{id:"sorters"},"sorters"),(0,a.yg)(c,{id:"sorters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sorters")," allows us to sort the ",(0,a.yg)("inlineCode",{parentName:"p"},"options"),". For example, if you want to sort your list according to ",(0,a.yg)("inlineCode",{parentName:"p"},"title")," by ascending:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  sorters: [\n    {\n      field: "title",\n      order: "asc",\n    },\n  ],\n  // highlight-end\n});\n'))),(0,a.yg)("h3",{id:"fetchsize"},"fetchSize"),(0,a.yg)(c,{id:"fetchsize",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"fetchSize")," is the amount of records to fetch in checkboxes."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-next-line\n  fetchSize: 20,\n});\n'))),(0,a.yg)("h3",{id:"queryoptions"},"queryOptions"),(0,a.yg)(c,{id:"queryoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Passing the ",(0,a.yg)("inlineCode",{parentName:"p"},"queryOptions")," property allows us to set the ",(0,a.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  queryOptions: {\n    onError: () => {\n      console.log("triggers when on query return Error");\n    },\n  },\n  // highlight-end\n});\n'))),(0,a.yg)("h3",{id:"pagination"},"pagination"),(0,a.yg)(c,{id:"pagination",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"pagination")," allows us to set page and items per page values."),(0,a.yg)("p",null,"For example, lets say that we have 1000 post records:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { selectProps } = useRadioGroup({\n  resource: "categories",\n  // highlight-next-line\n  pagination: { current: 3, pageSize: 8 },\n});\n')),(0,a.yg)("p",null,"The listing will start from page 3, showing 8 records per page.")),(0,a.yg)("h3",{id:"sort-"},(0,a.yg)("del",{parentName:"h3"},"sort")," ",(0,a.yg)(m,{deprecated:!0,mdxType:"PropTag"})),(0,a.yg)(c,{id:"sort-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"sorters")," instead.")),(0,a.yg)("h2",{id:"api-reference"},"API Reference"),(0,a.yg)("h3",{id:"properties"},"Properties"),(0,a.yg)(c,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(h,{module:"@refinedev/antd/useRadioGroup",mdxType:"PropsTable"})),(0,a.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.yg)(c,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TQueryFnData"),(0,a.yg)("td",{parentName:"tr",align:null},"Result data returned by the query function. Extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TError"),(0,a.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TData"),(0,a.yg)("td",{parentName:"tr",align:null},"Result data returned by the ",(0,a.yg)("inlineCode",{parentName:"td"},"select")," function. Extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord")),". If not specified, the value of ",(0,a.yg)("inlineCode",{parentName:"td"},"TQueryFnData")," will be used as the default value."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"TQueryFnData")))))),(0,a.yg)("h3",{id:"return-values"},"Return values"),(0,a.yg)(c,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"radioGroupProps"),(0,a.yg)("td",{parentName:"tr",align:null},"Ant design radio group props"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://ant.design/components/radio/#RadioGroup"},(0,a.yg)("inlineCode",{parentName:"a"},"Radio Group")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"queryResult"),(0,a.yg)("td",{parentName:"tr",align:null},"Results of the query of a record"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,a.yg)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>"))))))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(c,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(f,{path:"field-antd-use-radio-group",mdxType:"CodeSandboxExample"})))}v.isMDXComponent=!0}}]);