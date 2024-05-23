"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56186],{58860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>c});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,c=d["".concat(s,".").concat(g)]||d[g]||m[g]||o;return t?a.createElement(c,l(l({ref:n},u),{},{components:t})):a.createElement(c,l({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},88549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>N,frontMatter:()=>i,metadata:()=>p,toc:()=>d});t(37953);var a=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i={id:"useDrawerForm",title:"useDrawerForm"},s=void 0,p={unversionedId:"api-reference/mantine/hooks/form/useDrawerForm",id:"version-3.xx.xx/api-reference/mantine/hooks/form/useDrawerForm",title:"useDrawerForm",description:"useModalForm hook allows you to manage a form within a ` as well as a . It provides some useful methods to handle the form  or form `.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/hooks/form/useDrawerForm.md",sourceDirName:"api-reference/mantine/hooks/form",slug:"/api-reference/mantine/hooks/form/useDrawerForm",permalink:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useDrawerForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/hooks/form/useDrawerForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1716450433,formattedLastUpdatedAt:"May 23, 2024",frontMatter:{id:"useDrawerForm",title:"useDrawerForm"},sidebar:"someSidebar",previous:{title:"Mantine API",permalink:"/docs/3.xx.xx/api-reference/mantine"},next:{title:"useForm",permalink:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"}},u={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>refineCoreProps</code>",id:"refinecoreprops",level:3},{value:"<code>initialValues</code>",id:"initialvalues",level:3},{value:"<code>defaultVisible</code>",id:"defaultvisible",level:3},{value:"<code>autoSubmitClose</code>",id:"autosubmitclose",level:3},{value:"<code>autoResetForm</code>",id:"autoresetform",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>visible</code>",id:"visible",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"<code>submit</code>",id:"submit",level:3},{value:"<code>show</code>",id:"show",level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return values",id:"return-values-1",level:3},{value:"Example",id:"example",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},g=m("DocThumbsUpDownFeedbackWidget"),c=m("Tabs"),y=m("TabItem"),h=m("CodeSandboxExample"),f={toc:d},b="wrapper";function N(e){var{components:n}=e,t=l(e,["components"]);return(0,a.yg)(b,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useModalForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useModalForm"))," hook allows you to manage a form within a ",(0,a.yg)("inlineCode",{parentName:"p"},"<Modal>")," as well as a ",(0,a.yg)("inlineCode",{parentName:"p"},"<Drawer>"),". It provides some useful methods to handle the form ",(0,a.yg)("inlineCode",{parentName:"p"},"<Modal>")," or form ",(0,a.yg)("inlineCode",{parentName:"p"},"<Drawer>"),"."),(0,a.yg)("p",null,"We will use ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useModalForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useModalForm"))," hook as a ",(0,a.yg)("inlineCode",{parentName:"p"},"useDrawerForm")," to manage a form within a ",(0,a.yg)("inlineCode",{parentName:"p"},"<Drawer>"),"."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"useDrawerForm")," hook is extended from ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useForm"))," hook from the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/mantine"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-mantine"))," package. This means that you can use all the features of ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useForm"))," hook.")),(0,a.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.yg)(g,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,a.yg)("inlineCode",{parentName:"p"},"useDrawerForm")," is used in both."),(0,a.yg)(c,{defaultValue:"create",values:[{label:"create",value:"create"},{label:"edit",value:"edit"}],mdxType:"Tabs"},(0,a.yg)(y,{value:"create",mdxType:"TabItem"},(0,a.yg)("p",null,"In this example, we will show you how to ",(0,a.yg)("inlineCode",{parentName:"p"},'"create"')," a record with ",(0,a.yg)("inlineCode",{parentName:"p"},"useDrawerForm"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts",live:!0,url:"http://localhost:3000/posts"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport React from "react";\nimport { IResourceComponentsProps } from "@pankod/refine-core";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\nimport { GetManyResponse, useMany } from "@pankod/refine-core";\nimport {\n  Box,\n  Group,\n  List,\n  ScrollArea,\n  Table,\n  Pagination,\n  // highlight-next-line\n  useModalForm as useDrawerForm,\n  Drawer,\n  Select,\n  TextInput,\n  SaveButton,\n} from "@pankod/refine-mantine";\n\nconst PostList: React.FC<IResourceComponentsProps> = () => {\n  // highlight-start\n  const {\n    getInputProps,\n    saveButtonProps,\n    modal: { show, close, title, visible },\n  } = useDrawerForm({\n    refineCoreProps: { action: "create" },\n    initialValues: {\n      title: "",\n      status: "",\n      content: "",\n    },\n    validate: {\n      title: (value) => (value.length < 2 ? "Too short title" : null),\n      status: (value) => (value.length <= 0 ? "Status is required" : null),\n    },\n  });\n  // highlight-end\n\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n        meta: {\n          filterOperator: "contains",\n        },\n      },\n      {\n        id: "status",\n        header: "Status",\n        accessorKey: "status",\n        meta: {\n          filterElement: function render(props: FilterElementProps) {\n            return (\n              <Select\n                defaultValue="published"\n                data={[\n                  { label: "Published", value: "published" },\n                  { label: "Draft", value: "draft" },\n                  { label: "Rejected", value: "rejected" },\n                ]}\n                {...props}\n              />\n            );\n          },\n          filterOperator: "eq",\n        },\n      },\n    ],\n    [],\n  );\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    setOptions,\n    refineCore: {\n      setCurrent,\n      pageCount,\n      current,\n      tableQueryResult: { data: tableData },\n    },\n  } = useTable({\n    columns,\n  });\n\n  return (\n    <>\n      {/* highlight-start */}\n      <Drawer\n        opened={visible}\n        onClose={close}\n        title={title}\n        padding="xl"\n        size="xl"\n        position="right"\n      >\n        <TextInput\n          mt={8}\n          label="Title"\n          placeholder="Title"\n          {...getInputProps("title")}\n        />\n        <Select\n          mt={8}\n          label="Status"\n          placeholder="Pick one"\n          data={[\n            { label: "Published", value: "published" },\n            { label: "Draft", value: "draft" },\n            { label: "Rejected", value: "rejected" },\n          ]}\n          {...getInputProps("status")}\n        />\n        <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n          <SaveButton {...saveButtonProps} />\n        </Box>\n      </Drawer>\n      {/* highlight-end */}\n      <ScrollArea>\n        {/* highlight-next-line */}\n        <List createButtonProps={{ onClick: () => show() }}>\n          <Table highlightOnHover>\n            <thead>\n              {getHeaderGroups().map((headerGroup) => (\n                <tr key={headerGroup.id}>\n                  {headerGroup.headers.map((header) => {\n                    return (\n                      <th key={header.id}>\n                        {!header.isPlaceholder && (\n                          <Group spacing="xs" noWrap>\n                            <Box>\n                              {flexRender(\n                                header.column.columnDef.header,\n                                header.getContext(),\n                              )}\n                            </Box>\n                          </Group>\n                        )}\n                      </th>\n                    );\n                  })}\n                </tr>\n              ))}\n            </thead>\n            <tbody>\n              {getRowModel().rows.map((row) => {\n                return (\n                  <tr key={row.id}>\n                    {row.getVisibleCells().map((cell) => {\n                      return (\n                        <td key={cell.id}>\n                          {flexRender(\n                            cell.column.columnDef.cell,\n                            cell.getContext(),\n                          )}\n                        </td>\n                      );\n                    })}\n                  </tr>\n                );\n              })}\n            </tbody>\n          </Table>\n          <br />\n          <Pagination\n            position="right"\n            total={pageCount}\n            page={current}\n            onChange={setCurrent}\n          />\n        </List>\n      </ScrollArea>\n    </>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n  status: "published" | "draft" | "rejected";\n}\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      list: PostList,\n    },\n  ],\n});\n\nrender(<RefineMantineDemo />);\n'))),(0,a.yg)(y,{value:"edit",mdxType:"TabItem"},(0,a.yg)("p",null,"In this example, we will show you how to ",(0,a.yg)("inlineCode",{parentName:"p"},'"edit"')," a record with ",(0,a.yg)("inlineCode",{parentName:"p"},"useDrawerForm"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts",live:!0,url:"http://localhost:3000/posts"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport React from "react";\nimport { IResourceComponentsProps } from "@pankod/refine-core";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\nimport { GetManyResponse, useMany } from "@pankod/refine-core";\nimport {\n  Box,\n  Group,\n  List,\n  ScrollArea,\n  Table,\n  Pagination,\n  // highlight-next-line\n  useModalForm as useDrawerForm,\n  Drawer,\n  Select,\n  TextInput,\n  EditButton,\n  SaveButton,\n} from "@pankod/refine-mantine";\n\nconst PostList: React.FC<IResourceComponentsProps> = () => {\n  // highlight-start\n  const {\n    getInputProps,\n    saveButtonProps,\n    modal: { show, close, title, visible },\n  } = useDrawerForm({\n    refineCoreProps: { action: "edit" },\n    initialValues: {\n      title: "",\n      status: "",\n      content: "",\n    },\n    validate: {\n      title: (value) => (value.length < 2 ? "Too short title" : null),\n      status: (value) => (value.length <= 0 ? "Status is required" : null),\n    },\n  });\n  // highlight-end\n\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n        meta: {\n          filterOperator: "contains",\n        },\n      },\n      {\n        id: "status",\n        header: "Status",\n        accessorKey: "status",\n        meta: {\n          filterElement: function render(props: FilterElementProps) {\n            return (\n              <Select\n                defaultValue="published"\n                data={[\n                  { label: "Published", value: "published" },\n                  { label: "Draft", value: "draft" },\n                  { label: "Rejected", value: "rejected" },\n                ]}\n                {...props}\n              />\n            );\n          },\n          filterOperator: "eq",\n        },\n      },\n      {\n        id: "actions",\n        header: "Actions",\n        accessorKey: "id",\n        enableColumnFilter: false,\n        enableSorting: false,\n        cell: function render({ getValue }) {\n          return (\n            <Group spacing="xs" noWrap>\n              {/* highlight-start */}\n              <EditButton hideText onClick={() => show(getValue() as number)} />\n              {/* highlight-end */}\n            </Group>\n          );\n        },\n      },\n    ],\n    [],\n  );\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    setOptions,\n    refineCore: {\n      setCurrent,\n      pageCount,\n      current,\n      tableQueryResult: { data: tableData },\n    },\n  } = useTable({\n    columns,\n  });\n\n  return (\n    <>\n      {/* highlight-start */}\n      <Drawer\n        opened={visible}\n        onClose={close}\n        title={title}\n        padding="xl"\n        size="xl"\n        position="right"\n      >\n        <TextInput\n          mt={8}\n          label="Title"\n          placeholder="Title"\n          {...getInputProps("title")}\n        />\n        <Select\n          mt={8}\n          label="Status"\n          placeholder="Pick one"\n          data={[\n            { label: "Published", value: "published" },\n            { label: "Draft", value: "draft" },\n            { label: "Rejected", value: "rejected" },\n          ]}\n          {...getInputProps("status")}\n        />\n        <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n          <SaveButton {...saveButtonProps} />\n        </Box>\n      </Drawer>\n      {/* highlight-end */}\n      <ScrollArea>\n        <List>\n          <Table highlightOnHover>\n            <thead>\n              {getHeaderGroups().map((headerGroup) => (\n                <tr key={headerGroup.id}>\n                  {headerGroup.headers.map((header) => {\n                    return (\n                      <th key={header.id}>\n                        {!header.isPlaceholder && (\n                          <Group spacing="xs" noWrap>\n                            <Box>\n                              {flexRender(\n                                header.column.columnDef.header,\n                                header.getContext(),\n                              )}\n                            </Box>\n                          </Group>\n                        )}\n                      </th>\n                    );\n                  })}\n                </tr>\n              ))}\n            </thead>\n            <tbody>\n              {getRowModel().rows.map((row) => {\n                return (\n                  <tr key={row.id}>\n                    {row.getVisibleCells().map((cell) => {\n                      return (\n                        <td key={cell.id}>\n                          {flexRender(\n                            cell.column.columnDef.cell,\n                            cell.getContext(),\n                          )}\n                        </td>\n                      );\n                    })}\n                  </tr>\n                );\n              })}\n            </tbody>\n          </Table>\n          <br />\n          <Pagination\n            position="right"\n            total={pageCount}\n            page={current}\n            onChange={setCurrent}\n          />\n        </List>\n      </ScrollArea>\n    </>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n  status: "published" | "draft" | "rejected";\n}\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      list: PostList,\n    },\n  ],\n});\n\nrender(<RefineMantineDemo />);\n')),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"refine")," doesn't automatically add a ",(0,a.yg)("inlineCode",{parentName:"p"},"<EditButton/>")," to the each record in ",(0,a.yg)("inlineCode",{parentName:"p"},"<PostList>")," which opens ",(0,a.yg)("inlineCode",{parentName:"p"},'"edit"')," form in ",(0,a.yg)("inlineCode",{parentName:"p"},"<Drawer>")," when clicked."),(0,a.yg)("p",{parentName:"admonition"},"So, we have to put the ",(0,a.yg)("inlineCode",{parentName:"p"},"<EditButton/>")," on our list. In that way, ",(0,a.yg)("inlineCode",{parentName:"p"},'"edit"')," form in ",(0,a.yg)("inlineCode",{parentName:"p"},"<Drawer>")," can fetch data by the record ",(0,a.yg)("inlineCode",{parentName:"p"},"id"),"."),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const columns = React.useMemo<ColumnDef<IPost>[]>(\n  () => [\n    // --\n    {\n      id: "actions",\n      header: "Actions",\n      accessorKey: "id",\n      enableColumnFilter: false,\n      enableSorting: false,\n      cell: function render({ getValue }) {\n        return (\n          <Group spacing="xs" noWrap>\n            <EditButton hideText onClick={() => show(getValue() as number)} />\n          </Group>\n        );\n      },\n    },\n  ],\n  [],\n);\n\nconst table = useTable({\n  columns,\n});\n'))),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Don't forget to pass the record ",(0,a.yg)("inlineCode",{parentName:"p"},'"id"')," to ",(0,a.yg)("inlineCode",{parentName:"p"},"show")," to fetch the record data. This is necessary for both ",(0,a.yg)("inlineCode",{parentName:"p"},'"edit"')," and ",(0,a.yg)("inlineCode",{parentName:"p"},'"clone"')," forms."))))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"refinecoreprops"},(0,a.yg)("inlineCode",{parentName:"h3"},"refineCoreProps")),(0,a.yg)(g,{id:"refinecoreprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"All ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useForm"))," properties also available in ",(0,a.yg)("inlineCode",{parentName:"p"},"useStepsForm"),". You can find descriptions on ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm/#properties"},(0,a.yg)("inlineCode",{parentName:"a"},"useForm"))," docs."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const drawerForm = useDrawerForm({\n  refineCoreProps: {\n    action: "edit",\n    resource: "posts",\n    id: "1",\n  },\n});\n'))),(0,a.yg)(g,{id:"modalpropstype",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("h3",{id:"initialvalues"},(0,a.yg)("inlineCode",{parentName:"h3"},"initialValues")),(0,a.yg)(g,{id:"modalreturnvalues",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(g,{id:"initialvalues",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Only available in ",(0,a.yg)("inlineCode",{parentName:"p"},'"create"')," form.")),(0,a.yg)("p",null,"Default values for the form. Use this to pre-populate the form with data that needs to be displayed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const drawerForm = useDrawerForm({\n  initialValues: {\n    title: "Hello World",\n  },\n});\n'))),(0,a.yg)("h3",{id:"defaultvisible"},(0,a.yg)("inlineCode",{parentName:"h3"},"defaultVisible")),(0,a.yg)(g,{id:"defaultvisible",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Default: ",(0,a.yg)("inlineCode",{parentName:"p"},"false"))),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", drawer will be visible by default."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const drawerForm = useDrawerForm({\n  modalProps: {\n    defaultVisible: true,\n  },\n});\n"))),(0,a.yg)("h3",{id:"autosubmitclose"},(0,a.yg)("inlineCode",{parentName:"h3"},"autoSubmitClose")),(0,a.yg)(g,{id:"autosubmitclose",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Default: ",(0,a.yg)("inlineCode",{parentName:"p"},"true"))),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", drawer will be closed after successful submit."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const drawerForm = useDrawerForm({\n  modalProps: {\n    autoSubmitClose: false,\n  },\n});\n"))),(0,a.yg)("h3",{id:"autoresetform"},(0,a.yg)("inlineCode",{parentName:"h3"},"autoResetForm")),(0,a.yg)(g,{id:"autoresetform",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Default: ",(0,a.yg)("inlineCode",{parentName:"p"},"true"))),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", form will be reset after successful submit."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const drawerForm = useDrawerForm({\n  modalProps: {\n    autoResetForm: false,\n  },\n});\n"))),(0,a.yg)("h2",{id:"return-values"},"Return Values"),(0,a.yg)(g,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"All ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useForm"))," return values also available in ",(0,a.yg)("inlineCode",{parentName:"p"},"useDrawerForm"),". You can find descriptions on ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm/#return-values"},(0,a.yg)("inlineCode",{parentName:"a"},"useForm"))," docs."),(0,a.yg)("p",{parentName:"admonition"},"All ",(0,a.yg)("a",{parentName:"p",href:"https://mantine.dev/form/use-form/"},(0,a.yg)("inlineCode",{parentName:"a"},"mantine useForm"))," return values also available in ",(0,a.yg)("inlineCode",{parentName:"p"},"useDrawerForm"),". You can find descriptions on ",(0,a.yg)("a",{parentName:"p",href:"https://mantine.dev/form/use-form/"},(0,a.yg)("inlineCode",{parentName:"a"},"mantine"))," docs."))),(0,a.yg)("h3",{id:"visible"},(0,a.yg)("inlineCode",{parentName:"h3"},"visible")),(0,a.yg)(g,{id:"visible",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Current visibility state of the drawer."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const drawerForm = useDrawerForm({\n  defaultVisible: true,\n});\n\nconsole.log(drawerForm.modal.visible); // true\n"))),(0,a.yg)("h3",{id:"title"},(0,a.yg)("inlineCode",{parentName:"h3"},"title")),(0,a.yg)(g,{id:"title",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Title of the drawer. Based on resource and action values"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const {\n  modal: { title },\n} = useDrawerForm({\n  refineCoreProps: {\n    resource: "posts",\n    action: "create",\n  },\n});\n\nconsole.log(title); // "Create Post"\n'))),(0,a.yg)("h3",{id:"close"},(0,a.yg)("inlineCode",{parentName:"h3"},"close")),(0,a.yg)(g,{id:"close",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"A function that can close the drawer. It's useful when you want to close the drawer manually."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const {\n  getInputProps,\n  modal: { close, visible, title },\n} = useDrawerForm();\n\nreturn (\n  <Drawer opened={visible} onClose={close} title={title}>\n    <TextInput\n      mt={8}\n      label="Title"\n      placeholder="Title"\n      {...getInputProps("title")}\n    />\n    <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n      <SaveButton {...saveButtonProps} />\n      <Button onClick={close}>Cancel</Button>\n    </Box>\n  </Drawer>\n);\n'))),(0,a.yg)("h3",{id:"submit"},(0,a.yg)("inlineCode",{parentName:"h3"},"submit")),(0,a.yg)(g,{id:"submit",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"A function that can submit the form. It's useful when you want to submit the form manually."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const {\n  modal: { submit },\n} = useDrawerForm();\n\n// ---\n\nreturn (\n  <Drawer opened={visible} onClose={close} title={title}>\n    <TextInput\n      mt={8}\n      label="Title"\n      placeholder="Title"\n      {...getInputProps("title")}\n    />\n    <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n      <Button onClick={submit}>Save</Button>\n    </Box>\n  </Drawer>\n);\n'))),(0,a.yg)("h3",{id:"show"},(0,a.yg)("inlineCode",{parentName:"h3"},"show")),(0,a.yg)(g,{id:"show",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"A function that can show the drawer."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const {\n  getInputProps,\n  modal: { close, visible, title, show },\n} = useDrawerForm();\n\nconst onFinishHandler = (values) => {\n  onFinish(values);\n  show();\n};\n\nreturn (\n  <>\n    <Button onClick={}>Show Modal</Button>\n    <Drawer opened={visible} onClose={close} title={title}>\n      <TextInput\n        mt={8}\n        label="Title"\n        placeholder="Title"\n        {...getInputProps("title")}\n      />\n      <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n        <SaveButton {...saveButtonProps} />\n      </Box>\n    </Drawer>\n  </>\n);\n'))),(0,a.yg)("h3",{id:"savebuttonprops"},(0,a.yg)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,a.yg)(g,{id:"savebuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,'It contains all the props needed by the "submit" button within the drawer (disabled,loading etc.). You can manually pass these props to your custom button.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { getInputProps, modal, saveButtonProps } = useDrawerForm();\n\nreturn (\n  <Drawer {...modal}>\n    <TextInput\n      mt={8}\n      label="Title"\n      placeholder="Title"\n      {...getInputProps("title")}\n    />\n    <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n      <Button\n        {...saveButtonProps}\n        onClick={(e) => {\n          // -- your custom logic\n          saveButtonProps.onClick(e);\n        }}\n      />\n    </Box>\n  </Drawer>\n);\n'))),(0,a.yg)("h2",{id:"api-reference"},"API Reference"),(0,a.yg)("h3",{id:"properties-1"},"Properties"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"modalProps"),(0,a.yg)("td",{parentName:"tr",align:null},"Configuration object for the modal or drawer"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#modalpropstype"},(0,a.yg)("inlineCode",{parentName:"a"},"ModalPropsType")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"refineCoreProps"),(0,a.yg)("td",{parentName:"tr",align:null},"Configuration object for the core of the ",(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useForm"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm#properties"},(0,a.yg)("inlineCode",{parentName:"a"},"UseFormProps")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"@mantine/form"),"'s ",(0,a.yg)("inlineCode",{parentName:"td"},"useForm")," properties"),(0,a.yg)("td",{parentName:"tr",align:null},"See ",(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},"useForm")," documentation"),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("br",null),(0,a.yg)("blockquote",null,(0,a.yg)("ul",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("h4",{parentName:"li",id:"modalpropstype"},"ModalPropsType"))),(0,a.yg)("table",{parentName:"blockquote"},(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"defaultVisible"),(0,a.yg)("td",{parentName:"tr",align:null},"Initial visibility state of the modal"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"boolean")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"false"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"autoSubmitClose"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether the form should be submitted when the modal is closed"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"boolean")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"true"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"autoResetForm"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether the form should be reset when the form is submitted"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"boolean")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"true"))))))),(0,a.yg)("h3",{id:"return-values-1"},"Return values"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"modal"),(0,a.yg)("td",{parentName:"tr",align:null},"Relevant states and methods to control the modal or drawer"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#modalreturnvalues"},(0,a.yg)("inlineCode",{parentName:"a"},"ModalReturnValues")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"refineCore"),(0,a.yg)("td",{parentName:"tr",align:null},"The return values of the ",(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useForm"))," in the core"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm#return-values"},(0,a.yg)("inlineCode",{parentName:"a"},"UseFormReturnValues")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"@mantine/form"),"'s ",(0,a.yg)("inlineCode",{parentName:"td"},"useForm")," return values"),(0,a.yg)("td",{parentName:"tr",align:null},"See ",(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},"useForm")," documentation"),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("br",null),(0,a.yg)("blockquote",null,(0,a.yg)("ul",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("h4",{parentName:"li",id:"modalreturnvalues"},"ModalReturnValues"))),(0,a.yg)("table",{parentName:"blockquote"},(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"visible"),(0,a.yg)("td",{parentName:"tr",align:null},"State of modal visibility"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"boolean"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"show"),(0,a.yg)("td",{parentName:"tr",align:null},"Sets the visible state to true"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"(id?: BaseKey) => void"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"close"),(0,a.yg)("td",{parentName:"tr",align:null},"Sets the visible state to false"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"() => void"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"submit"),(0,a.yg)("td",{parentName:"tr",align:null},"Submits the form"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"(values: TVariables) => void"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"title"),(0,a.yg)("td",{parentName:"tr",align:null},"Modal title based on resource and action value"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"string"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,a.yg)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{ disabled: boolean, onClick: (e: React.FormEvent<HTMLFormElement>) => void; }"))))))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(g,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(h,{path:"form-mantine-use-drawer-form",mdxType:"CodeSandboxExample"})))}N.isMDXComponent=!0}}]);