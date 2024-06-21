"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69614],{58860:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>f});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,f=u["".concat(d,".").concat(g)]||u[g]||c[g]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},42411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(37953);var r=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}},d=void 0,p={unversionedId:"tutorial/adding-crud-pages/headless/add-delete-feature",id:"version-3.xx.xx/tutorial/adding-crud-pages/headless/add-delete-feature",title:"5. Adding Delete Feature",description:"Let's start by adding the delete feature to the list page by adding a delete button to the table. To do this, we will use the useDelete hook.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/headless/add-delete-feature.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/add-delete-feature",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/headless/add-delete-feature",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/headless/add-delete-feature.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718962775,formattedLastUpdatedAt:"Jun 21, 2024",frontMatter:{id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}}},s={},u=[],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},g=c("Checklist"),f=c("ChecklistItem"),y={toc:u},m="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Let's start by adding the delete feature to the list page by adding a delete button to the table. To do this, we will use the ",(0,r.yg)("inlineCode",{parentName:"p"},"useDelete")," hook."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useDelete")," is a ",(0,r.yg)("strong",{parentName:"p"},"refine")," hook that is used to delete a record. It returns mutation functions that can be used to delete a record. When the mutation function is called, the parameters of the function are passed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"delete")," method of the data provider."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"useDelete")," documentation for more information ","\u2192")),(0,r.yg)("p",null,"To add a delete feature to the blog posts table, you can follow the steps below:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open the ",(0,r.yg)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file on your editor.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Import the ",(0,r.yg)("inlineCode",{parentName:"p"},"useOne")," hook from ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-core"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useOne } from "@pankod/refine-core";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Call the ",(0,r.yg)("inlineCode",{parentName:"p"},"useDelete")," hook in the ",(0,r.yg)("inlineCode",{parentName:"p"},"BlogPostList")," component:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const BlogPostList: React.FC = () => {\n    const { mutate: deleteBlog Post } = useDelete();\n};\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"deleteBlogPost")," mutation takes ",(0,r.yg)("inlineCode",{parentName:"p"},"id"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," etc. You can check the parameters of the mutation function in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/#properties"},"documentation"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add the ",(0,r.yg)("inlineCode",{parentName:"p"},"<button/>")," component to the ",(0,r.yg)("inlineCode",{parentName:"p"},"actions")," column of the table as shown below:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n            id: "actions",\n            accessorKey: "id",\n            header: "Actions",\n            cell: function render({ getValue }) {\n                return (\n                    <div\n                        style={{\n                            display: "flex",\n                            flexDirection: "row",\n                            flexWrap: "wrap",\n                            gap: "4px",\n                        }}\n                    >\n                        <button\n                            onClick={() => {\n                                show("blog_posts", getValue() as string);\n                            }}\n                        >\n                            Show\n                        </button>\n                        <button\n                            onClick={() => {\n                                edit("blog_posts", getValue() as string);\n                            }}\n                        >\n                            Edit\n                        </button>\n                        //highlight-start\n                        <button\n                            onClick={() => {\n                                deleteBlogPost({\n                                    resource: "blog_posts",\n                                    id: getValue() as string,\n                                });\n                            }}\n                        >\n                            Delete\n                        </button>\n                        //highlight-end\n                    </div>\n                );\n            },\n        },\n')))),(0,r.yg)("p",null,"Now, you can try to delete a record from the list page. Just click on the delete button of the record you want to delete."),(0,r.yg)("br",null),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"You can also use ",(0,r.yg)("inlineCode",{parentName:"p"},"useDelete")," hook provided by ",(0,r.yg)("strong",{parentName:"p"},"refine")," to delete a record."),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"useDelete")," documentation for more information information ","\u2192"))),(0,r.yg)("br",null),(0,r.yg)(g,{mdxType:"Checklist"},(0,r.yg)(f,{id:"add-delete-feature-headless",mdxType:"ChecklistItem"},"I added the delete feature to the list page."),(0,r.yg)(f,{id:"add-delete-feature-headless-2",mdxType:"ChecklistItem"},"I enabled the delete feature on the show page and edit page.")))}h.isMDXComponent=!0}}]);