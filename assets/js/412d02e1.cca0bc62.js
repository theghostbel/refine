"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2880],{58860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,y=u["".concat(p,".").concat(c)]||u[c]||g[c]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(37953);var r=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"useExport"},p=void 0,s={unversionedId:"core/hooks/utilities/use-export/index",id:"core/hooks/utilities/use-export/index",title:"useExport",description:"useExport hook allows you to export data as a CSV file. It calls the getList method of your data provider and downloads the data as a CSV file.",source:"@site/docs/core/hooks/utilities/use-export/index.md",sourceDirName:"core/hooks/utilities/use-export",slug:"/core/hooks/utilities/use-export/",permalink:"/docs/core/hooks/utilities/use-export/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/utilities/use-export/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1720161219,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"useExport"},sidebar:"mainSidebar",previous:{title:"useImport",permalink:"/docs/core/hooks/utilities/use-import/"},next:{title:"Buttons",permalink:"/docs/core/hooks/utilities/buttons/"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"resource",id:"resource",level:3},{value:"mapData",id:"mapdata",level:3},{value:"sorters",id:"sorters",level:3},{value:"filters",id:"filters",level:3},{value:"maxItemCount",id:"maxitemcount",level:3},{value:"pageSize",id:"pagesize",level:3},{value:"download",id:"download",level:3},{value:"unparseConfig",id:"unparseconfig",level:3},{value:"meta",id:"meta",level:3},{value:"dataProviderName",id:"dataprovidername",level:3},{value:"onError",id:"onerror",level:3},{value:"<del>exportOptions</del> <PropTag deprecated />",id:"exportoptions-",level:3},{value:"<del>resourceName</del> <PropTag deprecated />",id:"resourcename-",level:3},{value:"<del>sorter</del> <PropTag deprecated />",id:"sorter-",level:3},{value:"Return Values",id:"return-values",level:2},{value:"triggerExport",id:"triggerexport",level:3},{value:"isLoading",id:"isloading",level:3},{value:"FAQ",id:"faq",level:2},{value:"Handling Relational Data",id:"handling-relational-data",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return Values",id:"return-values-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},c=g("DocThumbsUpDownFeedbackWidget"),y=g("PropTag"),m=g("PropsTable"),f={toc:u},h="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(h,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useExport")," hook allows you to export data as a ",(0,r.yg)("inlineCode",{parentName:"p"},"CSV")," file. It calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"getList")," method of your data provider and downloads the data as a ",(0,r.yg)("inlineCode",{parentName:"p"},"CSV")," file."),(0,r.yg)("p",null,"Internally, it uses ",(0,r.yg)("a",{parentName:"p",href:"https://www.papaparse.com/"},"Papa Parse")," to create the ",(0,r.yg)("inlineCode",{parentName:"p"},"CSV")," file."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(c,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Here is a basic usage example of the ",(0,r.yg)("inlineCode",{parentName:"p"},"useExport")," hook:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useExport } from "@refinedev/core";\n\ninterface IPost {\n  id: number;\n  slug: string;\n  title: string;\n  content: string;\n}\n\nexport const PostList: React.FC = () => {\n  const { triggerExport } = useExport<IPost>();\n\n  return <button onClick={triggerExport}>Export Button</button>;\n};\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"resource"},"resource"),(0,r.yg)(c,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Determines which resource is passed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"getList")," method of your data provider. By default, it reads the resource name from the current route."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'useExport({\n  resource: "posts",\n});\n')),(0,r.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.yg)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,r.yg)("h3",{id:"mapdata"},"mapData"),(0,r.yg)(c,{id:"mapdata",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you want to map the data before exporting it, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"mapData")," property."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"interface IPost {\n  id: number;\n  slug: string;\n  title: string;\n  content: string;\n  category: {\n    id: number;\n  };\n}\n\nuseExport<IPost>({\n  mapData: (item) => {\n    return {\n      id: item.id,\n      slug: item.slug,\n      title: item.title,\n      content: item.content,\n      categoryId: item.category.id,\n    };\n  },\n});\n"))),(0,r.yg)("h3",{id:"sorters"},"sorters"),(0,r.yg)(c,{id:"sorters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you want to sort the data before exporting it, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"sorters")," property. It will be passed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"getList")," method of your data provider."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/interface-references#crudsorting"},(0,r.yg)("inlineCode",{parentName:"a"},"CrudSorting")," interface","\u2192"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'useExport({\n  sorters: [\n    {\n      field: "title",\n      order: "asc",\n    },\n  ],\n});\n'))),(0,r.yg)("h3",{id:"filters"},"filters"),(0,r.yg)(c,{id:"filters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you want to filter the data before exporting it, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"filters")," property. It will be passed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"getList")," method of your data provider."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/interface-references#crudfilters"},(0,r.yg)("inlineCode",{parentName:"a"},"CrudFilters")," interface ","\u2192"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'useExport({\n  filters: [\n    {\n      field: "title",\n      operator: "contains",\n      value: "foo",\n    },\n  ],\n});\n'))),(0,r.yg)("h3",{id:"maxitemcount"},"maxItemCount"),(0,r.yg)(c,{id:"maxitemcount",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"By default, the ",(0,r.yg)("inlineCode",{parentName:"p"},"useExport")," hook will export all the data. If you want to limit the number of items to be exported, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"maxItemCount")," property."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"useExport({\n  maxItemCount: 100,\n});\n"))),(0,r.yg)("h3",{id:"pagesize"},"pageSize"),(0,r.yg)(c,{id:"pagesize",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Requests to fetch data are made in batches of 20 by default. The ",(0,r.yg)("inlineCode",{parentName:"p"},"pageSize")," property determines the number of items to be fetched in each request."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"useExport({\n  pageSize: 50,\n});\n"))),(0,r.yg)("h3",{id:"download"},"download"),(0,r.yg)(c,{id:"download",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Whether to generate download of the CSV in browser environments, defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"useExport({\n  download: false,\n});\n"))),(0,r.yg)("h3",{id:"unparseconfig"},"unparseConfig"),(0,r.yg)(c,{id:"unparseconfig",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can pass additional options to the ",(0,r.yg)("a",{parentName:"p",href:"https://www.papaparse.com/"},"Papa Parse")," package by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"unparseConfig")," property."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://www.papaparse.com/docs#config"},(0,r.yg)("inlineCode",{parentName:"a"},"Papa Parse")," options ","\u2192"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'useExport({\n  unparseConfig: {\n    complete: (results, file) => {\n      console.log("Parsing complete:", results, file);\n    },\n  },\n});\n'))),(0,r.yg)("h3",{id:"meta"},"meta"),(0,r.yg)(c,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you want to send additional data to the ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"createMany")," method of your data provider, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," property."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'useExport({\n  meta: {\n    foo: "bar",\n  },\n});\n'))),(0,r.yg)("h3",{id:"dataprovidername"},"dataProviderName"),(0,r.yg)(c,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If there is more than one ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'useExport({\n  dataProviderName: "second-data-provider",\n});\n'))),(0,r.yg)("h3",{id:"onerror"},"onError"),(0,r.yg)(c,{id:"onerror",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Callback function that is called when an error occurs while fetching data."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"useExport({\n  onError: (error) => {\n    console.log(error);\n  },\n});\n"))),(0,r.yg)("h3",{id:"exportoptions-"},(0,r.yg)("del",{parentName:"h3"},"exportOptions")," ",(0,r.yg)(y,{deprecated:!0,mdxType:"PropTag"})),(0,r.yg)(c,{id:"exportoptions-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Use ",(0,r.yg)("a",{parentName:"p",href:"#unparseconfig"},(0,r.yg)("inlineCode",{parentName:"a"},"unparseConfig"))," prop instead."),(0,r.yg)("p",null,"You can pass additional options to the ",(0,r.yg)("inlineCode",{parentName:"p"},"export-to-csv")," package by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"exportOptions")," property."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/alexcaza/export-to-csv#api"},(0,r.yg)("inlineCode",{parentName:"a"},"ExportToCsv")," options ","\u2192"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'useExport({\n  exportOptions: {\n    filename: "posts",\n  },\n});\n'))),(0,r.yg)("h3",{id:"resourcename-"},(0,r.yg)("del",{parentName:"h3"},"resourceName")," ",(0,r.yg)(y,{deprecated:!0,mdxType:"PropTag"})),(0,r.yg)(c,{id:"resourcename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," instead.")),(0,r.yg)("h3",{id:"sorter-"},(0,r.yg)("del",{parentName:"h3"},"sorter")," ",(0,r.yg)(y,{deprecated:!0,mdxType:"PropTag"})),(0,r.yg)(c,{id:"sorter-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"sorters")," instead.")),(0,r.yg)("h2",{id:"return-values"},"Return Values"),(0,r.yg)("h3",{id:"triggerexport"},"triggerExport"),(0,r.yg)(c,{id:"triggerexport",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"A function that triggers the export process."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const { triggerExport } = useExport();\n\nreturn <button onClick={triggerExport}>Export Button</button>;\n"))),(0,r.yg)("h3",{id:"isloading"},"isLoading"),(0,r.yg)(c,{id:"isloading",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"A boolean value that indicates whether the export process is in progress."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const { isLoading } = useExport();\n\nreturn isLoading ? <div>Loading...</div> : <div>Loaded</div>;\n"))),(0,r.yg)("h2",{id:"faq"},"FAQ"),(0,r.yg)("h3",{id:"handling-relational-data"},"Handling Relational Data"),(0,r.yg)(c,{id:"handling-relational-data",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"A mapping function can be run on all entries before saving them, which is useful in cases where you need to reference relational data or save files in a specific format for processing in other applications."),(0,r.yg)("p",null,"Consider this endpoint containing some relational data:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n {\n    "id": 2,\n    "title": "Et architecto et aut ex.",\n    "slug": "dolorum-et-quia",\n    "content": "Reprehenderit qui voluptatem in cum qui odio et.",\n    "category": {\n      "id": 35\n    },\n    "user": {\n      "id": 10\n    },\n  },\n  {\n    "id": 3,\n    "title": "Quam maiores officia suscipit quia vel asperiores nisi non excepturi.",\n    "slug": "delectus-laborum-provident",\n    "content": "Placeat eos esse.",\n    "category": {\n      "id": 4\n    },\n    "user": {\n      "id": 50\n    },\n  },\n  ...\n]\n')),(0,r.yg)("p",null,"We have the ",(0,r.yg)("inlineCode",{parentName:"p"},"category")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"user")," fields as possible relational data keys. Their data is not responsibility of this export operation."),(0,r.yg)("p",null,"If we want to save their ",(0,r.yg)("inlineCode",{parentName:"p"},"id"),"'s without any other related data, we can use a mapping function to save ",(0,r.yg)("inlineCode",{parentName:"p"},"category.id")," as ",(0,r.yg)("inlineCode",{parentName:"p"},"categoryId")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"user.id")," as ",(0,r.yg)("inlineCode",{parentName:"p"},"userId"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"useExport<IPost>({\n  mapData: (item) => {\n    return {\n      id: item.id,\n      title: item.title,\n      slug: item.slug,\n      content: item.content,\n      categoryId: item.category.id,\n      userId: item.user.id,\n    };\n  },\n});\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  slug: string;\n  category: { id: number };\n  user: { id: number };\n}\n")),(0,r.yg)("p",null,"This will save the data as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 2,\n    "title": "Et architecto et aut ex.",\n    "slug": "dolorum-et-quia",\n    "content": "Reprehenderit qui voluptatem in cum qui odio et.",\n    "categoryId": 35,\n    "userId": 10\n  },\n  {\n    "id": 3,\n    "title": "Quam maiores officia suscipit quia vel asperiores nisi non excepturi.",\n    "slug": "delectus-laborum-provident",\n    "content": "Placeat eos esse.",\n    "categoryId": 4,\n    "userId": 50\n  },\n  ...\n]\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(c,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(m,{module:"@refinedev/core/useExport",mdxType:"PropsTable"})),(0,r.yg)("h3",{id:"return-values-1"},"Return Values"),(0,r.yg)(c,{id:"return-values-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"isLoading"),(0,r.yg)("td",{parentName:"tr",align:null},"Shows true when there is an export process"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"boolean"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"triggerExport"),(0,r.yg)("td",{parentName:"tr",align:null},"When invoked, starts the exporting process"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"async () => void")))))),(0,r.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.yg)(c,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TData"),(0,r.yg)("td",{parentName:"tr",align:null},"Result type of the data query type that extends ",(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TVariables"),(0,r.yg)("td",{parentName:"tr",align:null},"Values for params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"any")))))))}b.isMDXComponent=!0}}]);