"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38733],{38733:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/core/src/index.tsx","description":"`useExport` hook allows you to make your resources exportable.","displayName":"useExport","props":{"resourceName":{"defaultValue":{"value":"Resource name that it reads from route"},"description":"Resource name for API data interactions","name":"resourceName","required":false,"type":{"name":"string"},"tags":{"default":"Resource name that it reads from route","deprecated":"`resourceName` is deprecated. Use `resource` instead."}},"resource":{"defaultValue":{"value":"Resource name that it reads from route"},"description":"Resource name for API data interactions","name":"resource","required":false,"type":{"name":"string"},"tags":{"default":"Resource name that it reads from route"}},"mapData":{"defaultValue":{"value":"(item) => item as any"},"description":"A mapping function that runs for every record. Mapped data will be included in the file contents","name":"mapData","required":false,"type":{"name":"MapDataFn<TData, TVariables>"},"tags":{}},"sorter":{"defaultValue":null,"description":"Sorts records","name":"sorter","required":false,"type":{"name":"[CrudSorting](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{"deprecated":"`sorter` is deprecated. Use `sorters` instead."}},"sorters":{"defaultValue":null,"description":"Sorts records","name":"sorters","required":false,"type":{"name":"[CrudSorting](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{}},"filters":{"defaultValue":null,"description":"Filters records","name":"filters","required":false,"type":{"name":"[CrudFilters](/docs/api-reference/core/interfaceReferences/#crudfilters)"},"tags":{}},"maxItemCount":{"defaultValue":null,"description":"","name":"maxItemCount","required":false,"type":{"name":"number"},"tags":{}},"pageSize":{"defaultValue":{"value":"20"},"description":"Requests to fetch data are made as batches by page size. By default, it is 20. Used for `getList` method of `DataProvider`","name":"pageSize","required":false,"type":{"name":"number"},"tags":{}},"exportOptions":{"defaultValue":null,"description":"Used for exporting options","name":"exportOptions","required":false,"type":{"name":"[Options](https://github.com/alexcaza/export-to-csv)"},"tags":{"type":"[Options] (https://github.com/alexcaza/export-to-csv)"}},"meta":{"defaultValue":null,"description":"Metadata query for `dataProvider`","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"metaData":{"defaultValue":null,"description":"Metadata query for `dataProvider`","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"dataProviderName":{"defaultValue":null,"description":"If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{}},"onError":{"defaultValue":null,"description":"Callback to handle error events of this hook","name":"onError","required":false,"type":{"name":"((error: any) => void)"},"tags":{}}},"generatedAt":1703246128299}')}}]);