/**
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 *
 * See following wiki page for instructions on how to regenerate:
 *   https://dev.azure.com/mseng/VSOnline/_wiki/wikis/VSOnline.wiki?pagePath=%2FOrphaned%20pages%2FDocQuality%2FDocQuality%252DInProgress%2FRest%20Client%20Generation
 *
 * Configuration file:
 *   distributedtask\shared\common\contracts\clientgeneratorconfigs\genclient.json
 */
export interface AuthorizationHeader {
    name: string;
    value: string;
}
/**
 * Represents binding of data source for the service endpoint request.
 */
export interface DataSourceBindingBase {
    /**
     * Pagination format supported by this data source(ContinuationToken/SkipTop).
     */
    callbackContextTemplate: string;
    /**
     * Subsequent calls needed?
     */
    callbackRequiredTemplate: string;
    /**
     * Gets or sets the name of the data source.
     */
    dataSourceName: string;
    /**
     * Gets or sets the endpoint Id.
     */
    endpointId: string;
    /**
     * Gets or sets the url of the service endpoint.
     */
    endpointUrl: string;
    /**
     * Gets or sets the authorization headers.
     */
    headers: AuthorizationHeader[];
    /**
     * Defines the initial value of the query params
     */
    initialContextTemplate: string;
    /**
     * Gets or sets the parameters for the data source.
     */
    parameters: {
        [key: string]: string;
    };
    /**
     * Gets or sets the result selector.
     */
    resultSelector: string;
    /**
     * Gets or sets the result template.
     */
    resultTemplate: string;
    /**
     * Gets or sets the target of the data source.
     */
    target: string;
}
export interface ProcessParameters {
    dataSourceBindings: DataSourceBindingBase[];
    inputs: TaskInputDefinitionBase[];
    sourceDefinitions: TaskSourceDefinitionBase[];
}
export interface TaskInputDefinitionBase {
    aliases: string[];
    defaultValue: string;
    groupName: string;
    helpMarkDown: string;
    label: string;
    name: string;
    options: {
        [key: string]: string;
    };
    properties: {
        [key: string]: string;
    };
    required: boolean;
    type: string;
    validation: TaskInputValidation;
    visibleRule: string;
}
export interface TaskInputValidation {
    /**
     * Conditional expression
     */
    expression: string;
    /**
     * Message explaining how user can correct if validation fails
     */
    message: string;
}
export interface TaskSourceDefinitionBase {
    authKey: string;
    endpoint: string;
    keySelector: string;
    selector: string;
    target: string;
}
