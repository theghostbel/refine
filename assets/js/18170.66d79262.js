"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18170],{18170:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/mui/src/index.tsx","description":"By using useDataGrid, you are able to get properties that are compatible with\\nMaterial UI {@link https://mui.com/x/react-data-grid/ `<DataGrid>`} component.\\nAll features such as sorting, filtering and pagination comes as out of box.","displayName":"useDataGrid","props":{"resource":{"defaultValue":{"value":"Resource name that it reads from route"},"description":"Resource name for API data interactions","name":"resource","required":false,"type":{"name":"string"},"tags":{"default":"Resource name that it reads from route"}},"meta":{"defaultValue":null,"description":"Metadata query for dataProvider","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"dataProviderName":{"defaultValue":null,"description":"If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((data?: GetListResponse<TData>, values?: { config?: UseListConfig; ... 6 more ...; dataProviderName?: string | undefined; } | undefined, resource?: string | undefined) => false | OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((error?: TError, values?: { config?: UseListConfig; pagination?: Pagination | undefined; ... 5 more ...; dataProviderName?: string | undefined; } | undefined, resource?: string | undefined) => false | OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"metaData":{"defaultValue":null,"description":"Metadata query for dataProvider","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"initialCurrent":{"defaultValue":{"value":"1"},"description":"Initial page index","name":"initialCurrent","required":false,"type":{"name":"number"},"tags":{"default":"1","deprecated":"`initialCurrent` property is deprecated. Use `pagination.current` instead."}},"initialPageSize":{"defaultValue":{"value":"25"},"description":"Initial number of items per page","name":"initialPageSize","required":false,"type":{"name":"number"},"tags":{"default":"10","deprecated":"`initialPageSize` property is deprecated. Use `pagination.pageSize` instead."}},"sorters":{"defaultValue":null,"description":"Sort configs","name":"sorters","required":false,"type":{"name":"{ initial?: CrudSorting; permanent?: CrudSorting; mode?: \\"off\\" | \\"server\\" | undefined; } | undefined"},"tags":{}},"initialSorter":{"defaultValue":null,"description":"Initial sorter state","name":"initialSorter","required":false,"type":{"name":"[CrudSorting](/docs/core/interface-references/#crudsorting)"},"tags":{"deprecated":"`initialSorter` property is deprecated. Use `sorters.initial` instead."}},"permanentSorter":{"defaultValue":{"value":"`[]`"},"description":"Default and unchangeable sorter state","name":"permanentSorter","required":false,"type":{"name":"[CrudSorting](/docs/core/interface-references/#crudsorting)"},"tags":{"default":"`[]`","deprecated":"`permanentSorter` property is deprecated. Use `sorters.permanent` instead."}},"initialFilter":{"defaultValue":null,"description":"Initial filter state","name":"initialFilter","required":false,"type":{"name":"[CrudFilters](/docs/core/interface-references/#crudfilters)"},"tags":{"deprecated":"`initialFilter` property is deprecated. Use `filters.initial` instead."}},"permanentFilter":{"defaultValue":{"value":"`[]`"},"description":"Default and unchangeable filter state","name":"permanentFilter","required":false,"type":{"name":"[CrudFilters](/docs/core/interface-references/#crudfilters)"},"tags":{"default":"`[]`","deprecated":"`permanentFilter` property is deprecated. Use `filters.permanent` instead."}},"defaultSetFilterBehavior":{"defaultValue":{"value":"replace"},"description":"Default behavior of the `setFilters` function","name":"defaultSetFilterBehavior","required":false,"type":{"name":"\\"replace\\" | \\"merge\\"","raw":"SetFilterBehavior","value":[{"value":"\\"replace\\""},{"value":"\\"merge\\""}]},"tags":{"default":"`\\"merge\\"`","deprecated":"`defaultSetFilterBehavior` property is deprecated. Use `filters.defaultBehavior` instead."}},"hasPagination":{"defaultValue":{"value":"true"},"description":"Whether to use server side pagination or not.","name":"hasPagination","required":false,"type":{"name":"boolean"},"tags":{"default":"`true`","deprecated":"`hasPagination` property is deprecated. Use `pagination.mode` instead."}},"syncWithLocation":{"defaultValue":{"value":"Value set in [Refine](/docs/api-reference/core/components/refine-config/#syncwithlocation). If a custom resource is given, it will be `false`"},"description":"Sortings, filters, page index and records shown per page are tracked by browser history","name":"syncWithLocation","required":false,"type":{"name":"boolean"},"tags":{"default":"Value set in [Refine](/docs/api-reference/core/components/refine-config/#syncwithlocation). If a custom resource is given, it will be `false`"}},"queryOptions":{"defaultValue":null,"description":"react-query\'s [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options","name":"queryOptions","required":false,"type":{"name":"UseQueryOptions<GetListResponse<TQueryFnData>, TError, GetListResponse<TData>, QueryKey>"},"tags":{}},"liveMode":{"defaultValue":{"value":"`\\"off\\"`"},"description":"Whether to update data automatically (\\"auto\\") or not (\\"manual\\") if a related live event is received. The \\"off\\" value is used to avoid creating a subscription.","name":"liveMode","required":false,"type":{"name":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`](/docs/api-reference/core/providers/live-provider/#livemode)"},"tags":{"type":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`] (/docs/api-reference/core/providers/live-provider/#livemode)","default":"`\\"off\\"`"}},"onLiveEvent":{"defaultValue":{"value":"`undefined`"},"description":"Callback to handle all related live events of this hook.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`(event: LiveEvent) => void`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"liveParams":{"defaultValue":{"value":"`undefined`"},"description":"Params to pass to liveProvider\'s subscribe method if liveMode is enabled.","name":"liveParams","required":false,"type":{"name":"[`{ ids?: BaseKey[]; [key: string]: any; }`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`{ ids?: BaseKey[]; [key: string]: any; }`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"overtimeOptions":{"defaultValue":null,"description":"","name":"overtimeOptions","required":false,"type":{"name":"UseLoadingOvertimeCoreOptions"},"tags":{}},"onSearch":{"defaultValue":null,"description":"","name":"onSearch","required":false,"type":{"name":"((data: TSearchVariables) => CrudFilters | Promise<CrudFilters>)"},"tags":{}},"pagination":{"defaultValue":null,"description":"","name":"pagination","required":false,"type":{"name":"{ mode?: \\"off\\" | \\"server\\" | \\"client\\"; current?: number; pageSize?: number | undefined; } | undefined"},"tags":{}},"filters":{"defaultValue":null,"description":"","name":"filters","required":false,"type":{"name":"{ mode?: \\"off\\" | \\"server\\"; initial?: CrudFilters; permanent?: CrudFilters | undefined; defaultBehavior?: \\"replace\\" | \\"merge\\" | undefined; } | undefined"},"tags":{}}},"generatedAt":1708512692325}')}}]);