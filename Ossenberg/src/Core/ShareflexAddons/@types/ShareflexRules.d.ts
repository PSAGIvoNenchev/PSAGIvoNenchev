declare module "APIVersionInfo" {
    const VersionInfo: {
        APIVersion: string;
    };
    export default VersionInfo;
}
declare module "core/Bridges" {
    /** internal objects passed by C# */
    export interface PlaceholdersBridge {
        BafWebUrl: string;
        Environment: 'CLI' | 'Remote Event Receiver' | 'WebJob';
        EventType?: 'ItemAdded' | 'ItemUpdated' | 'ItemDeleting';
        /** added by ShareflexRules.getContextInfo() */
        ExecutionContext?: 'CLI' | 'Remote Event Receiver' | 'WebJob';
        /** added by ShareflexRules.getContextInfo() */
        HostUrl?: string;
        ListId?: string;
        ListItemId?: string;
        ListTitle?: string;
        ListUrl: string;
        MasterBafWebUrl: string;
        ShareflexAppServiceUrl: string;
        SiteRelativeWebUrl: string;
        SiteUrl: string;
        UserDisplayName?: string;
        UserId?: number;
        UserLCID?: number;
        UserLoginName?: string;
        Version: string;
        WebLCID?: number;
        WebUrl: string;
        AppEnvironment: 'Dedicated' | 'Shared';
    }
    export interface Headers {
        [key: string]: string;
    }
    export interface HttpResult {
        /** HTTP body of response */
        body: string | Uint8Array;
        /** HTTP status code of response */
        status: number;
        /** HTTP status text of response */
        statusText: string;
    }
    /** Provides additional information sending the request and parsing the response */
    export interface HttpOptions {
        responseContentReadMethod: 'ReadAsString' | 'ReadAsByteArray' | 'ReadAsBase64ByteArray' | 'ReadAsStream';
        responseContentType: 'string' | 'Uint8Array';
    }
    export interface HttpBridge {
        copyStream(originEndpoint: string, originMethod: string, originHeader: Object, originBody: string, originConnectionId: string, targetEndpoint: string, targetMethod: string, targetHeader: Object, targetConnectionId: string, originContentEncoding: string): Promise<any>;
        readDocumentAsBase64String(endpoint: string, method: string, headers: Headers, body: string, connectionId: string): Promise<HttpResult>;
        executeRequest(endpoint: string, method: string, headers: Headers, body: string, connectionId: string, retryPolicyId: string, hasSecretsInBody: boolean, timeoutInSeconds: number, httpOptions: HttpOptions): Promise<HttpResult>;
    }
    export interface ConnectionObject {
        /** Type of connection */
        type: 'SharePointElevatedConnection' | 'SharePointRemoteEventConnection' | 'SharePointUserConnection' | 'MicrosoftGraphAppOnlyConnection' | 'MicrosoftGraphUserConnection' | 'GenericHttpConnection';
        /** Identifier of connection */
        id: string;
        retryPolicyId: string;
    }
    export interface ConnectionManagerBridge {
        createGenericHttpConnection(connectionId: string, baseUrl: string, defaultRequestHeaders: Object, defaultRequestHeadersWithEncryptedHeaderValues: Object): ConnectionObject;
        createMicrosoftGraphAppOnlyConnection(connectionId: string, tenantId: string, appId: string, clientSecret: string): ConnectionObject;
        createSharePointUserConnection(connectionId: string, webUrl: string, userLogin: string, password: string): ConnectionObject;
        getConnection(connectionId: string): ConnectionObject;
        setRetryPolicy(connectionId: string, enabled: boolean, retryPolicyId?: string): ConnectionObject;
    }
    export interface RetryPolicyObject {
        id: string;
        type: string;
        retryOnHttpRequestException: boolean;
        logRetriesToMonitoring: boolean;
        maximumNumberOfRetries: boolean;
        retryStatusCodes: Object;
        retryInitialWaitDurationInMs: number;
        retryAfterHeaderName: string;
    }
    export interface RetryPolicyManagerBridge {
        getRetryPolicy(id: string): RetryPolicyObject;
        createRetryPolicy(type: string, id: string, retryStatusCodes: Array<string>, maximumNumberOfRetries: number, retryOnHttpRequestException: boolean, logRetriesToMonitoring: boolean, retryInitialWaitDurationInMs: number, retryAfterHeaderName: string): RetryPolicyObject;
        updateRetryPolicy(type: string, id: string, retryStatusCodes: Array<string>, maximumNumberOfRetries: number, retryOnHttpRequestException: boolean, logRetriesToMonitoring: boolean, retryInitialWaitDurationInMs: number, retryAfterHeaderName: string): RetryPolicyObject;
    }
    export interface FileSystemObject {
        /** Type of filesystem object */
        Type: string;
        /** Absolute path of filesystem object */
        Path: string;
    }
    export interface FileSystemBridge {
        /**
         * Function to create a directory in local filesystem
         *
         * ```
         *
         * const result = fs.createDirectory('D:\\temp');
         *
         * result : Boolean  // If operation was successful
         * ```
         */
        createDirectory(
        /** Absolut path of dircetory to create (recursive) */
        directoryPath: string): boolean;
        /**
         * Function to create a file in local filesystem
         *
         * ```
         *
         * const result = fs.createFile( filePath, content, encodingAsString?);
         *
         * filePath : String,  // Absolute path of file
         * content : String,  // Content of file
         * encodingAsString? : String,  // Type of encoding to encode provided content with ('Base64' supported only) [default='']
         *
         * result : Boolean  // If operation was successful
         *
         * ```
         * ```
         *
         * // EXAMPLE
         * const myJSON = {
         *   "Title": "Demo Object",
         *   "Id": 1
         * };
         *
         * const fs = rules.Utils.getCliFileSystemHandler();
         * const result = fs.createFile( 'D:\\temp\\sample.json', JSON.stringify(myJSON) );
         * ```
         */
        createFile(
        /** Absolute path of file */
        filePath: string, 
        /** Content of file */
        content: string, 
        /** Type of encoding to encode provided content with ('Base64' supported only) [default=''] */
        encodingAsString?: string): boolean;
        /**
         * Function to delete a named directory from local filesystem
         *
         * ```
         *
         * const result = fs.deleteDirectory(directoryPath);
         *
         * directoryPath : String  // Path to local directory
         *
         * result : Boolean  // If operation was successful
         * ```
         */
        deleteDirectory(
        /** Absolute path of directory to be deleted */
        directoryPath: string): boolean;
        /**
         * Function to delete a specific file from local filesystem
         *
         * ```
         *
         * const result = fs.deleteFile(filePath);
         *
         * filePath : String  // Absolut path of file to be deleted
         *
         * result : Boolean  // If operation was successful
         * ```
         */
        deleteFile(
        /** Absolut path of file to be deleted */
        filePath: string): boolean;
        /**
         * If a named directory does exist in local filesystem
         *
         * ```
         * const result = fs.directoryExists(directoryPath);
         *
         * directoryPath : String  // Absolute path of directory to search for
         *
         * result : Boolean  // If directory exists
         * ```
         */
        directoryExists(
        /** Absolute path of directory to search for */
        directoryPath: string): boolean;
        /**
         * If a named file does exist in local filesystem
         *
         * ```
         * const result = fs.fileExists(filePath);
         *
         * filePath : String  // Absolute path of file to search for
         *
         * result : Boolean  // If file exists
         * ```
         */
        fileExists(
        /** Absolute path of file to search for */
        filePath: string): boolean;
        /**
         * Returns the current path of execution context
         *
         * ```
         * const result = fs.getExecutingDirectory();
         *
         * result : String  // Local path of current execution context
         * ```
         */
        getExecutingDirectory(): string;
        /**
         * Function to get all files and sub-directories of a directory
         *
         * ```
         *
         * const result = fs.readDirectory(directoryPath);
         *
         * directoryPath : String  // Absolute path to get elements from
         * ```
         */
        readDirectory(
        /** Absolute path to get elements from */
        directoryPath: string): FileSystemObject[];
        /**
         * Function to get content of a local file
         *
         * ```
         *
         * const result = fs.readFile(filePath, encodingAsString?);
         *
         * filePath : String,  // Absolute path of file
         * encodingAsString? : String,  // Encoding of file content (e.g. 'Base64') [default='']
         *
         * result : string  // Content of file
         * ```
         * ```
         *
         * //EXAMPLE:
         * const fs = rules.Utils.getCliFileSystemHandler();
         * const result = fs.readFile('D:\\temp\\sample.txt');
         * ```
         */
        readFile(
        /** Absolute path of file */
        filePath: string, 
        /** Encoding of file content (e.g. 'Base64') [default=''] */
        encodingAsString?: string): string;
        /**
         * Function to search files in a specific directory
         *
         * ```
         *
         * const result = fs.searchFiles(directoryPath, searchPattern, searchOption);
         *
         * directoryPath : String,  // Absolut path of dircetory to search files in
         * searchPattern : String,  // File search pattern (e.g. '*.pdf')
         * searchOption : 'top' | 'all'  // Search in directory only ('top') or recursiv in all sub directories also ('all')
         *
         * result : FileSystemObject[]  // Array of file objects
         *
         * FileSystemObject = {
         *   Type : String,  // Type of object ('File')
         *   Path : String,  // Absolute path of filesystem object
         * }
         *
         * ```
         * ```
         *
         * // EXAMPLE:
         * const fs = rules.Utils.getCliFileSystemHandler();
         * const files = fs.searchFiles( 'D:\\temp', '*.txt', 'top' )
         * ```
         */
        searchFiles(
        /** Absolut path of dircetory to search files in */
        directoryPath: string, 
        /** File search pattern (e.g. '*.pdf') */
        searchPattern: string, 
        /** Search in directory only ('top') or recursiv in all sub directories also ('all') */
        searchOption: 'top' | 'all'): FileSystemObject[];
    }
    export interface MonitoringBridge {
        traceCritical(text: string): void;
        traceError(text: string): void;
        traceWarning(text: string): void;
        traceInformation(text: string): void;
        traceVerbose(text: string): void;
        exception(text: string): void;
    }
    export interface TimerBridge {
        setTimeout(func: () => any, interval: number): Object;
        clearTimeout(timer: Object): void;
        setInterval(func: () => any, interval: number): Object;
        clearInterval(timer: Object): void;
    }
    export interface ExecutionManagerBridge {
        cancelSharePointEvent(message: string): void;
    }
    export interface HashingBridge {
        generateMd5Hash(stringToHash: string): string;
        generateSha256Hash(stringToHash: string): string;
    }
    export interface EncodingBridge {
        changeEncoding(input: string, sourceEncodingString: string, destinationEncodingString: string): string;
    }
    export interface ProvisioningScriptInfo {
        /** True, if the script started successful */
        success: boolean;
        /** Provisioning Trace Id */
        beeTraceId: string;
        /** Provisioning Instance Id */
        beeInstanceId: string;
        /** Potential Provisioning error message */
        beeErrorMessage?: string;
    }
    export interface ProvisioningJobInfo {
        /** True if a job was found. */
        jobInfoFound: boolean;
        /** The Job type */
        jobType?: string;
        /** The id of the job */
        jobId?: string;
        /** Provisioning beeTraceId */
        beeTraceId?: string;
        /** Provisioning beeInstanceId */
        beeInstanceId?: string;
        /** The start time of the script */
        startTime?: string;
        /** Url to the startWeb */
        startWeb?: string;
        /** The user that started the script */
        startUser?: string;
        /** The targeted SharePoint tenant */
        tenant?: string;
        /** The maximum amount of memory allocated to the script */
        maxAllocatedMemoryInMB?: number;
        /** The run time of the script in seconds */
        runTimeInSeconds?: number;
        /** The current state of the script */
        runState?: string;
        /** Indicates whether script execution was successful */
        terminationMode?: string;
        /** The time when the script execution terminated */
        terminationTime?: string;
        /** Name of the Provisioning Script */
        scriptFullName?: string;
        /** Name of the Provisioning Script */
        scriptName?: string;
        /** The Local (App) Start Time of the script execution - depends on the timezone of the App */
        startTimeLocal?: string;
        /** The Local (App) Termination Time - depends on the timezone of the App */
        terminationTimeLocal?: string;
        /** Contains an error message, if no JobInfo was found. */
        beeErrorMessage?: string;
    }
    export interface ProvisioningBridge {
        startScript(connectionId: string, scriptName: string, scriptCode: string, isSynchronous?: boolean, startWebUrl?: string): ProvisioningScriptInfo;
        getJobInfo(connectionId: string, beeTraceId: string): ProvisioningJobInfo;
    }
    export interface SendGraphMailResult {
        /** True, if the mail was sent correctly */
        success: boolean;
        /** Contains an errorMessage, when success is false */
        errorMessage?: string;
    }
    export interface MailAttachment {
        /** The type of attachment */
        type: 'Base64ContentStringAttachment' | 'Base64DownloadAttachment' | 'SharePointAttachment';
        /** The id of the connection to get the attachment [default='Elevated'] */
        connectionId?: string;
        /** The relative or absolute url to get the attachment */
        url?: string;
        /** The method for the request to get the attachment [default='GET'] */
        method?: string;
        /** The headers for the request to get the attachment */
        headers?: Object;
        /** The file name of the attachment */
        name: string;
        /** The content type of the attachment */
        contentType: string;
        /** The content of the attachment as a Base64 string - required for Base64ContentStringAttachment */
        content?: string;
        /** A JSON path expression to get the JSON property value. Test here: https://jsonpath.com/ */
        jsonPathExpression?: string;
    }
    export interface MailBridge {
        sendGraphMail(connectionId: string, senderMailAddress: string, torecipients: string[], ccrecipients: string[], bccrecipients: string[], subject: string, body: string, bodyContentType: 'text' | 'html', saveToSentItems: boolean, attachments: MailAttachment[]): SendGraphMailResult;
    }
}
declare module "core/Expect" {
    export default class Expect {
        /** Object (any) to be checked */
        private _checkObj;
        /** If an Error should be throw if a condition does not match */
        private _throwError;
        constructor(checkObj: any, throwError?: boolean);
        /** If check object is a String object */
        isString(customFailedMessage?: string): boolean;
        /** If check object is not a String object */
        isNotString(customFailedMessage?: string): boolean;
        /** If check object is a Number object */
        isNumber(customFailedMessage?: string): boolean;
        /** If check object is not a Number object */
        isNotNumber(customFailedMessage?: string): boolean;
        /** If check value is equal to reference (==) */
        isEqual(reference: unknown, customFailedMessage?: string): boolean;
        /** If check value is not equal to reference (!=) */
        isNotEqual(reference: unknown, customFailedMessage?: string): boolean;
        /** If check object is a Boolean object */
        isBoolean(customFailedMessage?: string): boolean;
        /** If check object is not a Boolean object */
        isNotBoolean(customFailedMessage?: string): boolean;
        /** If check object is `true` Boolean */
        isTrue(customFailedMessage?: string): boolean;
        /** If check object is `false` Boolean */
        isFalse(customFailedMessage?: string): boolean;
        /** If check value is a truthy value (e.g. not undefined, not null, greater than 0, no empty string) */
        isTruthy(customFailedMessage?: string): boolean;
        /** If check value is a falsy value (e.g. undefined, null, 0 or less, empty string) */
        isFalsy(customFailedMessage?: string): boolean;
        /** If check value is greater than the reference */
        isGreater(reference: unknown, customFailedMessage?: string): boolean;
        /** If check value is greater or equal than the reference */
        isGreaterOrEqual(reference: unknown, customFailedMessage?: string): boolean;
        /** If check value is lower than the reference */
        isLower(reference: unknown, customFailedMessage?: string): boolean;
        /** If check value is lower or equal than the reference */
        isLowerOrEqual(reference: unknown, customFailedMessage?: string): boolean;
        /** If check value is strict equal to reference (===) */
        isStrictEqual(reference: unknown, customFailedMessage?: string): boolean;
        /** If check value is not strict equal to reference (!==) */
        isNotStrictEqual(reference: unknown, customFailedMessage?: string): boolean;
        /** If check value is an empty String */
        isEmptyString(customFailedMessage?: string): boolean;
        /** If check value is not an empty String */
        isNotEmptyString(customFailedMessage?: string): boolean;
        /** If check object is null */
        isNull(customFailedMessage?: string): boolean;
        /** If check object is not null */
        isNotNull(customFailedMessage?: string): boolean;
        /** If check object is not defined */
        isUndefined(customFailedMessage?: string): boolean;
        /** If check object is defined */
        isNotUndefined(customFailedMessage?: string): boolean;
        /** If check object is an Object */
        isObject(customFailedMessage?: string): boolean;
        /** If check object is an Array */
        isArray(customFailedMessage?: string): boolean;
        /** If check object is a Function */
        isFunction(customFailedMessage?: string): boolean;
        /** If check object is not a Function */
        isNotFunction(customFailedMessage?: string): boolean;
        /** If check object is a synchronous Function */
        isSyncFunction(customFailedMessage?: string): boolean;
        /** If check object is not a synchronous Function */
        isNotSyncFunction(customFailedMessage?: string): boolean;
        /** If check object is an asynchronous Function */
        isAsyncFunction(customFailedMessage?: string): boolean;
        /** If check object is not an asynchronous Function */
        isNotAsyncFunction(customFailedMessage?: string): boolean;
        /** If check object is a generator Function */
        isGeneratorFunction(customFailedMessage?: string): boolean;
        /** If check object is not a generator Function */
        isNotGeneratorFunction(customFailedMessage?: string): boolean;
        /** If check object is a Regular Expression */
        isRegEx(customFailedMessage?: string): boolean;
        /** If check object is not a Regular Expression */
        isNotRegEx(customFailedMessage?: string): boolean;
        /** If check object is a Date object */
        isDate(customFailedMessage?: string): boolean;
        /** If check object is not a Date object */
        isNotDate(customFailedMessage?: string): boolean;
        /** If check object is an Error object */
        isError(customFailedMessage?: string): boolean;
        /** If check object is not an Error object */
        isNotError(customFailedMessage?: string): boolean;
        /** If check object is a Map object */
        isMap(customFailedMessage?: string): boolean;
        /** If check object is not a Map object */
        isNotMap(customFailedMessage?: string): boolean;
        /** If check object is a Weak Map object */
        isWeakMap(customFailedMessage?: string): boolean;
        /** If check object is not a Weak Map object */
        isNotWeakMap(customFailedMessage?: string): boolean;
        /** If check object is a Promise object */
        isPromise(customFailedMessage?: string): boolean;
        /** If check object is not a Promise object */
        isNotPromise(customFailedMessage?: string): boolean;
        /** If check object is a Symbol */
        isSymbol(customFailedMessage?: string): boolean;
        /** If check object is not a Symbol */
        isNotSymbol(customFailedMessage?: string): boolean;
        /** If check object has a certain object key */
        hasProperty(key: string, customFailedMessage?: string): boolean;
        /** If check object has certain object keys */
        hasProperties(keys: string[], customFailedMessage?: string): boolean;
        private typeOf;
        private checkCondition;
        private prepareErrorMessage;
    }
}
declare module "core/TestEngine" {
    import ShareflexRules from "ShareflexRules";
    import Expect from "core/Expect";
    interface TestFunctionOptions {
        /** Current rules API */
        rules: ShareflexRules;
        /** Object that has been set as 'customOptions' by creating the test engine instance */
        customOptions: any;
        /** Helper functions of test engine */
        helpers: TestEngineHelpers;
    }
    export interface TestPreparationOptions extends TestFunctionOptions {
    }
    export interface TestCleanupOptions extends TestFunctionOptions {
    }
    export interface TestCaseOptions extends TestFunctionOptions {
        name: string;
    }
    export interface TextExecutionOptions {
        /** If XML result files should be create (relevant for pipeline!) [default=true] */
        createXML: boolean;
    }
    interface TestEngineDataStoreResult {
        /** Create or Update a data storage key */
        set: (key: string, value: any) => void;
        /** Get data of a specific storage key */
        get: (key: string) => any;
        /** Delete a specific storage key */
        remove: (key: string) => void;
        /** Get the whole data storage object */
        getAll: () => any;
    }
    export interface TestEngineHelpers {
        /** Data storage object to provide and handle data in whole Test Suite run */
        dataStorage: TestEngineDataStoreResult;
        getShortTenantName: () => string;
        /** Create data file in SharePoint to provide data for other Test Suites */
        createTestModuleDataFile: (moduleName: string, dataObject: Object) => Promise<boolean>;
        /** Get data file of test module from SharePoint */
        getTestModuleData: (moduleName: string) => Promise<any>;
        /** Delete data file of test module in SharePoint */
        deleteTestModuleDataFile: (moduleName: string) => Promise<boolean>;
        /** Helper object to to perform checks */
        expect: (/** Object to be checked */ checkObj: any, /** If failed check should throw an Error [default=true] */ throwError?: boolean) => Expect;
    }
    export interface TestCaseResult {
        /** If test case was successful */
        result: boolean;
        /** Why test case failed */
        failedMessage?: string;
    }
    export interface RegisterTestCaseOptions {
        /** Name of test case [default=testCaseFn.name] */
        testCaseName?: string;
        /** Function which holds the test implementation */
        testCaseFn: (testCaseOptions: TestCaseOptions) => Promise<TestCaseResult>;
        /** Name of the test case(s) that must have run successfully beforehand */
        dependency?: string | string[];
    }
    export interface TestEngineOptions {
        /** Name of the Test Suite (Test Engine Instance) */
        testSuiteName: string;
        /** Function that is executed once before the test cases are processed */
        preparationFn?: (options: TestPreparationOptions) => Promise<boolean>;
        /** Function that is executed once after all test cases have been processed */
        cleanupFn?: (options: TestCleanupOptions) => Promise<void>;
        /** Object that is passed to all test function to provide custom data (e.g. custom API to be tested) */
        customOptions?: Object;
    }
    export class TestEngine {
        /** Current Shareflex Rules instance */
        private _rules;
        /** Configuration object of Test Engine instance */
        private engineConfig;
        /** Internal object to store data */
        private dataStorage;
        /** Custom data object to be provided to each Test Case function */
        private customOptions;
        /** Message to be printed to log if a test was not executed */
        private notExecutedMessage;
        constructor(rules: ShareflexRules, options: TestEngineOptions);
        /**
         * Register a new Test Case
         *
         * ```
         *
         * testEngine.registerTestCase({
         *   testCaseName? : String,  // Name of test case [default=testCaseFn.name]
         *   testCaseFn : Function,  // Function which holds the test implementation
         *   dependency? : String | String[],  // Name of the test case(s) that must have run successfully beforehand
         * })
         * ```
         */
        registerTestCase(options: RegisterTestCaseOptions): void;
        /**
         * Function to perform all registered Test Cases.
         *
         * The test results can be exported as XML files to be consumed by a Azure DevOps Pipeline.
         *
         * ```
         *
         * //EXAMPLES 1
         * // perform tests and generate XML result files
         * const testSuiteResult = await testEngine.execute();
         *
         * //EXAMPLES 2
         * // perform tests without generating XML result files
         * const testSuiteResult = await testEngine.execute({
         *   createXML: false,
         * });
         * ```
         */
        execute(options?: TextExecutionOptions): Promise<boolean>;
        private createTestModuleDataFile;
        private getTestModuleData;
        private deleteTestModuleDataFile;
        private testDataStorage;
        private getShortTenantName;
        private dependencyCheck;
        private calcDuration;
        /**
         * Print a log message
         * @param {string} message
         */
        private printLog;
        /**
         * Print an error log
         * @param {Error|Object} err
         */
        private printError;
        private printTestResult;
        private toXML;
        private expect;
    }
}
declare module "core/Utils/FunctionOptions" {
    import ShareflexRules from "ShareflexRules";
    interface HandleRequiredOptions {
        /** Function name which called this function */
        callerFnName: string;
        /** Options keys to check */
        requiredKeys: string[];
        /** Options from caller function */
        options: any;
    }
    export function handleRequiredOptions(handleOptions: HandleRequiredOptions): any;
    interface PrepareFunctionOptionsOptions {
        /** Shareflex Rules API object  */
        rules: ShareflexRules;
        /** Function name which called this function */
        callerFnName: string;
        /** Options from caller function */
        options: Object;
        /** Default options from caller function */
        defaultOptions: Object;
        /** Options keys to check */
        requiredKeys?: string[];
    }
    export function prepareFunctionOptions(handleOptions: PrepareFunctionOptionsOptions): any;
}
declare module "core/Utils/RestServiceRequests" {
    import ShareflexRules, { Headers, RestServiceResult } from "ShareflexRules";
    interface SendPostRequestOptions {
        /** Shareflex Rules API object  */
        rules: ShareflexRules;
        /** Function name which called this function */
        callerFnName: string;
        /** Post request url */
        url: string;
        /** Options from caller function */
        options: any;
        /** Custom headers [default={Accept: 'application/json;odata=nometadata'}] */
        headers?: Headers;
        /** HTTP request body (as string e.g. JSON.stringify({ __metadata: { type: 'SP.ListNameItem'} })) */
        body?: string;
        /** Function to check additional condition if the result is valid (basic check is `result.status.startsWith('2')`) */
        additionalResultValidationFn?: (RestServiceResult: any) => boolean;
        /** If result status should not be analyzed. Return the result directly without validation. */
        skipResultValidation?: boolean;
    }
    export function sendPostRequest(requestOptions: SendPostRequestOptions): Promise<RestServiceResult>;
}
declare module "core/Utils/Utils_Index" {
    export * from "core/Utils/FunctionOptions";
    export * from "core/Utils/RestServiceRequests";
    export * from "core/Utils/WaitUntil";
}
declare module "core/Utils/WaitUntil" {
    import ShareflexRules from "ShareflexRules";
    export interface WaitInterval {
        /** Amount of repetitions to wait for provided time */
        repetitions: number;
        /** Time (in milliseconds) to wait between repetitions */
        time: number;
    }
    export interface WaitUntilCheckFnOptions {
        /** Shareflex Rules API */
        rules: ShareflexRules;
        /** Options for check function  */
        options: any;
        /** Index of current wait interval */
        intervalIndex: number;
    }
    export interface WaitUntilOptions {
        /** Time intervals to check the result of the check function */
        waitIntervals: WaitIntervals;
        /** Callback function that has to return `true` to stop waitUntil */
        checkFn: (options: WaitUntilCheckFnOptions) => Promise<boolean>;
        /** Options passed to check function call */
        checkFnOptions?: any;
    }
    export class WaitIntervals {
        private _intervals;
        private rules;
        constructor(rules: any);
        /**
         * Method to add a wait interval
         *
         * ```
         *
         * const waitIntervals = rules.Utils.createWaitIntervals();
         *
         * waitIntervals.add({
         *   time : Number,  // Time (in milliseconds) to wait between repetitions
         *   repetitions : Number  // Amount of repetitions to wait for provided time
         * });
         *
         * // EXAMPLE
         *
         * const waitIntervals = rules.Utils.createWaitIntervals();
         *
         * waitIntervals
         *   .add({
         *     time: 20 * 1000,
         *     repetitions: 6
         *   })
         *   .add({
         *     time: 10 * 1000,
         *     repetitions: 4
         *   });
         *
         * const result = await rules.Utils.waitUntil({
         *   waitIntervals,
         *   checkFn: isMyConditionFullFilled,
         *   checkFnOptions: {myCustomKey: 'myCustomValue'}
         * });
         *
         * result = Boolean;  // If checkFn return true in the waiting time
         *
         * ```
         */
        add(interval: WaitInterval): WaitIntervals;
        /**
         * All intervals which were added
         */
        get intervals(): WaitInterval[];
    }
    export function waitUntil(rules: ShareflexRules, options: WaitUntilOptions): Promise<boolean>;
}
declare module "core/Utils" {
    import { FileSystemBridge } from "core/Bridges";
    import { TestEngine, TestEngineOptions } from "core/TestEngine";
    import { WaitIntervals, WaitUntilOptions } from "core/Utils/WaitUntil";
    /**
     * Combines a base url with a relative part by inserting a "/" where required (does not resolve or change anything)
     *
     * ```
     *
     * const result = rules.Utils.combineUrls(baseUrl, relativeUrl);
     *
     * baseUrl = String  // First part of url
     * relativeUrl = String  // Second part of url
     *
     * result = String  // Combined url
     * ```
     *
     */
    export function combineUrls(baseUrl: string, relativeUrl: string): string;
    /**
     * Supports absolute, already server-relative and URLs relative to a given contextual URL.
     */
    export function makeServerRelative(absOrServerRelOrContextRelUrl: string, contextualUrl?: string): string;
    /**
     * Returns a absolute Site Url from an absolute SharePoint Online Url (by string operations)
     */
    export function getSiteUrlFromAbsUrl(absoluteUrl: string): string;
    export interface GenerateGUIDOptions {
        /** Pass custom format like '####-####' where all '#' are replaced by random hexadecimal number (0..f) */
        format?: string;
        /** All characters in upper case [default=false] */
        upperCase?: boolean;
        /** GUID without hyphens [default=false] */
        withoutHyphens?: boolean;
    }
    /**
     * Function to generate a unique GUID string
     */
    export function generateGUID(options?: GenerateGUIDOptions): string;
    /** An empty GUID without hyphens */
    export const emptyGuid = "00000000000000000000000000000000";
    export interface GetErrorObjectOptions {
        /** name of error causing function */
        name: string;
        /** configuration object of error causing function */
        options: any;
        /** Error().stack of error causing segment */
        ApiStack: string;
        /** name of missing parameter (otherwise options.text has to be provided) */
        missingParam?: string;
        /** individual error text (if no options.missingParam is provided) */
        text?: string;
    }
    export interface ApiFunctionInfo {
        /** Name of API function */
        name: string;
        /** Provided API function parameters */
        options: any;
    }
    export interface ErrorObject {
        /** error text */
        message: string;
        /** Information about of error causing API function */
        ApiFn: ApiFunctionInfo;
        /** Error().stack of error causing segment */
        ApiStack: string;
    }
    /**
     * Function to generate an error information object
     *
     * ```
     *
     * //EXAMPLE:
     * return Promise.reject(Utils.getErrorObject({
     *   name : String,  // name of error causing function
     *   options : Object,  // configuration object of error causing function
     *   ApiStack : String,  // Error().stack of error causing segment
     *   missingParam? : String,  // name of missing parameter (otherwise options.text has to be provided)
     *   text? : String,  // individual error text (if no options.missingParam is provided)
     * }));
     *
     * // Promise.resolve
     * result = {
     *   message : String,  // error text
     *   ApiFn: {
     *     name : String,  // Name of API function
     *     options : Object,  // Provided API function parameters
     *   },
     *   ApiStack : String,  // Error().stack of error causing segment
     * }
     *
     * ```
     */
    export function getErrorObject(options: GetErrorObjectOptions): ErrorObject;
    /**
     * Function to handle leading or trailing slash of url string.
     * ```
     *
     * // ensure leading slash for relative urls
     * const myRelativeUrl = rules.Utils.fixLeadingTrailingUrlSlash('sites/mySite/');
     * -> myRelativeUrl : '/sites/mySite'
     *
     * // remove trailing slash
     * const myAbsUrl = rules.Utils.fixLeadingTrailingUrlSlash('http://contoso.sharepoint.com/sites/mySite/');
     * -> myAbsUrl : 'http://contoso.sharepoint.com/sites/mySite'
     * ```
     */
    export function fixLeadingTrailingUrlSlash(url: string): string;
    /**
     * Class to handle the logging text for multiline text field 'Log'
     */
    export class LogText {
        _logText: string;
        constructor();
        /**
         * Method to get the whole logging text (lines joined by line breaks)
         * ```
         *
         * rules.logInfo(myLog.get());
         * ```
         */
        get(): string;
        /**
         * Method to add logging text as new line.
         * ```
         *
         * myLog.add('... some text ...');
         * ```
         */
        add(/** additional logging text line */ text: string): void;
        /**
         * Method to clear the logging text of LogText instance.
         * ```
         *
         * myLog.clear();
         * ```
         */
        clear(): void;
    }
    export interface ReplaceObjectsNullValuesOptions {
        /** Object to be updated */
        object: object;
        /** Value to replace missing values with [default=''] */
        replaceWith?: any;
        /** If values have to be replaced recursively [default=true] */
        recursive?: boolean;
    }
    /**
     * Function to replace all missing (null, undefined) values of an javascript object (recursive)
     */
    export function replaceObjectsNullValues({ object, replaceWith, recursive }: ReplaceObjectsNullValuesOptions): object;
    export interface EnsureObjectKeysOptions {
        /** Object to ensure keys and clean values */
        object: object;
        /** Array of required object keys */
        requiredKeys: string[];
        /** Replace null and undefined object values with this value */
        defaultValue?: string;
    }
    /**
     * Function to ensure an Object with required keys and without null or undefined values
     */
    export function ensureObjectKeys(options: EnsureObjectKeysOptions): {};
    /** Function to check if an Object is empty (best performant way) */
    export function isEmptyObj(obj: object): boolean;
    export interface ValidateUpdateItemFieldResult {
        /** Error code (0 = no exception) */
        ErrorCode: number;
        /** Error message */
        ErrorMessage: string;
        /** Internal name of list field */
        FieldName: string;
        /** Provided value for setting the field */
        FieldValue: string;
        /** If setting the field was not successful */
        HasException: boolean;
        /** Id of list item which has been processed */
        ItemId: number;
    }
    export interface ValidateUpdateItemResponse {
        /** Array of results for processed fields */
        value: ValidateUpdateItemFieldResult[];
    }
    /** If item field updates have caused exceptions (REST AddValidateUpdateItemUsingPath, ValidateUpdateListItem) */
    export function validateUpdateItemHasException(responseBody: string | ValidateUpdateItemResponse): boolean | undefined;
    /** Transform a REST ValidateUpdateItem result to an object for effective field updates without exceptions */
    export function validateUpdateItemResultToItemObject(responseBody: ValidateUpdateItemResponse): object;
    export interface BuildSpSendMailAdditionalHeadersObject {
        [header: string]: string;
    }
    export interface SpSendMailAdditionalHeaders {
        __metadata: {
            type: 'Collection(SP.KeyValue)';
        };
        results: {
            __metadata: {
                type: 'SP.KeyValue';
            };
            Key: string;
            Value: string;
            ValueType: 'Edm.String';
        }[];
    }
    /** Transform key-values object into SP.Utilities.Utility.SendEmail request body "AdditionalHeaders" object */
    export function buildSpSendMailAdditionalHeadersObject(object: BuildSpSendMailAdditionalHeadersObject): SpSendMailAdditionalHeaders;
    /** Return an array based on input element. Push element to new array or keep provided array */
    export function transformElementToArray(element: any): any[];
    /**
     * This function waits some time in milliseconds
     *
     * ```
     * await rules.Utils.sleep(time);
     *
     * time = Number  // time to wait in milliseconds (e.g. 1000 for a second)
     * ```
     *
     */
    export function sleep(/** time in milliseconds (e.g. 1000 for a second) */ time: number): Promise<void>;
    interface ChangeEncodingOptions {
        /** String to change encoding for */
        value: string;
        /** Encoding of provided value string (Encoding name or the encoding code page) */
        sourceEncoding: string;
        /** Encoding to convert value string to (Encoding name or the encoding code page) */
        destinationEncoding: string;
    }
    /**
     * Function to get amount of Bytes of a string.
     *
     * _faster version, which doesn't use regular expressions, nor encodeURIComponent()_
     *
     *
     * It just computes the length in UTF8 of each unicode codepoints returned by charCodeAt() (based on wikipedia's descriptions of UTF8, and UTF16 surrogate characters).
     *
     * It follows RFC3629 (where UTF-8 characters are at most 4-bytes long).
     */
    export function getByteLength(input: string): number;
    /**
     * Function to precheck if a value is a know not parsable strings
     *
     * - empty string
     * - batch response string like '--batchresponse_...'
     * - xml string (starting with '<')
     * - 'OK' string
     */
    export function checkForParseableJsonString(value: any): boolean;
    /**
     * Function to remove a trailing slash from an url.
     * Note: You can use regex but regex can pose a DDOS risk due to backtracking.
     *
     */
    export function stripTrailingSlash(input: string): string;
    /**
     * Function to get a Deep Copy of a JavaScript Object
     * (copy of an Object without references to source Object)
     *
     * _NOTE:_ Function references in Object will get lost.
     *
     * ```
     *
     * const sourceObject = {
     *   Title: 'Example',
     *   Choices: ['A', 'B'],
     *   LookupItem: {
     *     Title: 'Subitem',
     *   },
     *   StartDate: new Date('2022-03-03 00:00:00')
     * }
     *
     * const myIndependentObject = rules.Utils.getDeepCopy(sourceObject)
     *
     * // Changing sourceObject will not affect myIndependentObject:
     * sourceObject.Choices.push('C');
     * sourceObject.LookupItem.Title = 'new Sub Title';
     * sourceObject.StartDate = new Date('2021-01-01 00:00:00');
     *
     * ```
     */
    export function getDeepCopy(obj: any): any;
    /**
     * Function to deeply assign Objects.
     * Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
     * Works like native `Object.assign()`, but nested Objects are merged too (not overwritten).
     *
     * _NOTE:_ Function references of source Objects will be ignored
     *
     * @param target The target object — what to apply the sources' properties to, which is returned after it is modified
     * @param sources The source object(s) — objects containing the properties you want to apply.
     * @returns The target object
     */
    export function getDeepAssignedObject(target: Object, ...sources: Object[]): Object;
    /**
     * Function to convert comma separated list of fieldNames to an array
     */
    export function convertFields(fields: string): string[];
    export interface RestRequestFieldsObject {
        /** All native field names (unexpanded) */
        keys: string[];
        /** All '$select' values for REST request */
        selects: string[];
        /** All '$expand' values for REST request */
        expands: string[];
    }
    /**
     * Function to prepare $select, $expand fields and keys for a REST GET request based on provided field names
     */
    export function getRestRequestFieldsObject(fields: string[]): RestRequestFieldsObject;
    type LogLevel = 'Debug' | 'Info' | 'Warning' | 'Error';
    /**
     * Function to log an Array of messages
     */
    export function logMessages(messages: unknown[], level: LogLevel): void;
    /**
     * Function to rebuild object without circular references.
     * Prevent errors for JSON.stringify like 'Converting circular structure to JSON'
     */
    export function handleCircularReferences(obj: Object, level?: number): Object;
    interface GetValidUrlsOptions {
        /** First (static) part of REST url without $select and $expand */
        startUrl: string;
        /** Fields that have to be added to startUrl request */
        fields: string[];
        /** Container of valid URLs */
        urls?: string[];
    }
    interface GetValidUrlsResult {
        /** Container of valid URLs */
        urls: string[];
        /** Fields that could not be added to valid URL due to to long string size */
        remainingFields: string[];
    }
    /**
     * Function to get REST GET-Request urls that fit max. length
     * To long urls are splitted into multiple valid urls
     */
    export function getValidUrls(options: GetValidUrlsOptions): GetValidUrlsResult;
    interface BuildRestGetRequestParametersOptions {
        /** Absolute url of endpoints web context */
        contextUrl: string;
        /** REST endpoint without $select and $expand (e.g. '/_api/web') */
        staticEndpoint: string;
        /** Fields that have to be requested (to be transmitted into $select and $expand) */
        fields?: string | string[];
    }
    interface RestGetRequestParameters {
        /** Urls to be requested to get all information */
        requestUrls: string[];
        /** Properties of requested objects that are involved in GET-Requests */
        involvedBaseFields: string[];
    }
    /**
     * Function to build REST GET-Request urls respecting the max. length of an url.
     *
     */
    export function buildRestGetRequestParameters(options: BuildRestGetRequestParametersOptions): RestGetRequestParameters;
    export interface GetUrlPropertiesResult {
        /** Absolute web url */
        webUrl: string;
        /** Name of web */
        webName: string;
        /** Absolute list url */
        listUrl: string;
        /** Name of list */
        listName: string;
        /** Value of internal property 'EntityTypeName' of list */
        entityTypeName: string;
        /** The tenant the list belongs to */
        tenant: string;
    }
    /**
     * Function returns an object with web, list urls and there list name
     *
     * ```
     *
     * const result = rules.Utils.getListUrlProperties(listUrl);
     *
     * listUrl = String  // Absolute list url
     *
     * result = {
     *   listUrl : String,  // Absolute list url
     *   listName : String,  // Name of list
     *   webUrl : String,  // Absolute web url
     *   webName : String,  // Name of web
     *   entityTypeName : String,  // Value of internal property 'EntityTypeName' of list
     *   tenant : String  // The tenant the list belongs to
     * }
     *
     * ```
     */
    export function getListUrlProperties(listUrl: string): GetUrlPropertiesResult;
    /**
     * Function returns the name of the list from a document path.
     *
     * ```
     *
     * const result = Utils.getListNameFromDocumentPath(documentPath);
     *
     * documentPath = String  // Web-relative path to a document
     *
     * result : String
     *
     * // EXAMPLE:
     *
     * const listName = Utils.getListNameFromDocumentPath('/someList/someSubfolder/someFile.pdf');
     *
     * result : someList
     *
     * ```
     */
    export function getListNameFromDocumentPath(documentPath: string): string;
    export interface CutStringToMaxLengthOptions {
        /** String to be checked and cut if too long */
        inputString: string;
        /** Maximum count of chars allowed */
        maxLength: number;
        /** If ellipsis ('...') should be added at the end when the string has been cut off [default=false] */
        addEllipsis?: boolean;
    }
    export interface CutStringToMaxLengthResult {
        /** Resulting string (not longer than maximum length) */
        outputString: string;
        /** If string has been cut off */
        isCut: boolean;
    }
    export function cutStringToMaxLength(options: CutStringToMaxLengthOptions): CutStringToMaxLengthResult;
    export interface UtilMethods {
        /**
         * Function to change the encoding of a string.
         *
         * Supports using two-way conversion between most encodings.
         * Encodings can be specified using the encoding name or the encoding code page
         * (see https://docs.microsoft.com/de-de/dotnet/api/system.text.encoding?view=netframework-4.7.2#list-of-encodings)
         *
         * Throws InvalidEncodingException, if encoding is not supported by Shareflex Rules.
         * ```
         * const encodedString = rules.Utils.changeEncoding({
         *   value : String,  // String to change encoding for
         *   sourceEncoding : String,  // Encoding of provided value string (Encoding name or the encoding code page)
         *   destinationEncoding : String,  // Encoding to convert value string to (Encoding name or the encoding code page)
         * });
         *
         *
         * // EXAMPLES
         * const encodedString = rules.Utils.changeEncoding({
         *   value:'test',
         *   sourceEncoding: 'UTF-8',
         *   destinationEncoding: 'Base64',
         * });
         * // encodedString :  dGVzdA==
         *
         * const encodedString = rules.Utils.changeEncoding({
         *   value: 'dGVzdA==',
         *   sourceEncoding: 'Base64',
         *   destinationEncoding: 'UTF-8',
         * });
         * // encodedString : test
         *
         * const encodedString = rules.Utils.changeEncoding({
         *   value: '\u00AC',
         *   sourceEncoding: 'Unicode',
         *   destinationEncoding: '65001',
         * })
         * // encodedString : ¬
         * ```
         */
        changeEncoding: (options: ChangeEncodingOptions) => string;
        /**
         * Function to pre-check if a string value is known to be not parsable
         *
         * Known not parsable kinds of strings are:
         * - empty string
         * - batch response string like '--batchresponse_...'
         * - xml string (starting with '<')
         * - 'OK' string
         *
         * ```
         * const result = rules.Utils.checkForParseableJsonString(myString);
         *
         * result = Boolean  // If provided value might be parsed successfully with JSON.parse()
         *
         * //EXAMPLE prevent known parsing exceptions
         * let myResult;
         * try {
         *   myResult = rules.Utils.checkForParseableJsonString(myValue) ? JSON.parse(myValue) : myValue;
         * } catch (error) {
         *   myResult = myValue;
         * }
         * ```
         */
        checkForParseableJsonString: (value: string) => boolean;
        /**
         * Combines a base url with a relative part by inserting a "/" where required (does not resolve or change anything)
         *
         * ```
         *
         * const result = rules.Utils.combineUrls(baseUrl, relativeUrl);
         *
         * baseUrl = String  // First part of url
         * relativeUrl = String  // Second part of url
         *
         * result = String  // Combined url
         *
         * ```
         */
        combineUrls: (baseUrl: string, relativeUrl: string) => string;
        /**
         * Returns an instance of class `LogText` to handle the logging text for multiline text field (e.g. 'Log')
         *
         * ```
         *
         * // init log helper object
         * const myLog = rules.Utils.createLogText();
         *
         * // add some text lines
         * myLog.add('Start line');
         * myLog.add('... some text ...');
         * myLog.add('Last line line');
         *
         * // write whole content of log helper to real Log
         * rules.logInfo(myLog.get());
         * ```
         */
        createLogText: () => LogText;
        /**
         * Returns an instance of class `TestEngine` to prepare and perform backend tests.
         *
         * The test results can be exported as XML files to be consumed by a Azure DevOps Pipeline.
         *
         * ```
         * const testEngine = rules.Utils.createTestEngine({
         *   testSuiteName : String,  // Name of the Test Suite (Test Engine Instance)
         *   preparationFn?: Function,  // Function that is executed once before the test cases are processed
         *   cleanupFn?: Function,  // Function that is executed once after all test cases have been processed
         *   customOptions?: Object,  // Object that is passed to all test function to provide custom data (e.g. custom API to be tested)
         * }
         *
         *
         * //EXAMPLE
         * // register test engine (test suite)
         * const testEngine = rules.Utils.createTestEngine({
         *   testSuiteName: 'first test',
         *   customOptions: {
         *	   addons: addonsAPI,
         *     myCustomProp: 'my custom property value'
         *   },
         *   preparationFn: myTestPrepareFn,
         *   cleanupFn: myTestCleanupFn
         * });
         *
         * // register test cases
         * testEngine.registerTestCase({
         *   testCaseName: 'myTestCase 1 name',
         *   testCaseFn: myTestCaseFn01
         * });
         * testEngine.registerTestCase({
         *   testCaseName: 'myTestCase 2 name',
         *   testCaseFn: myTestCaseFn02,
         *   dependency: ['myTestCase 1 name'],
         * });
         *
         * // perform tests (whole test suite)
         * const testSuiteResult = await testEngine.execute();
         *
         * ```
         */
        createTestEngine: (options: TestEngineOptions) => TestEngine;
        /**
         * Returns an instance of class `WaitIntervals` to prepare intervals for usage in rules.Utils.waitUntil
         *
         * const waitIntervals = rules.Utils.createWaitIntervals();
         *
         * waitIntervals.add({
         *   time : Number,  // Time (in milliseconds) to wait between repetitions
         *   repetitions : Number,  // Amount of repetitions to wait for provided time
         * });
         */
        createWaitIntervals: () => WaitIntervals;
        /**
         * This function ensures that a string is not to long.
         *
         * ```
         * const result = await rules.Utils.cutStringToMaxLength({
         *   inputString : String,  // String to be checked and cut if too long
         *   maxLength : Number,  // Maximum count of chars allowed
         *   addEllipsis? : Boolean, // If ellipsis ('...') should be added at the end when the string has been cut off [default=false]
         * });
         *
         * result = {
         *   outputString : String,  // Resulting string (not longer than maximum length)
         *   isCut : Boolean,  // If string has been cut off
         * }
         *
         * ```
         *
         */
        cutStringToMaxLength: (options: CutStringToMaxLengthOptions) => CutStringToMaxLengthResult;
        /**
         * Function to handle leading or trailing slash of url string.
         * ```
         *
         * // ensure leading slash for relative urls
         * const myRelativeUrl = rules.Utils.fixLeadingTrailingUrlSlash('sites/mySite/');
         * -> myRelativeUrl : '/sites/mySite'
         *
         * // remove trailing slash
         * const myAbsUrl = rules.Utils.fixLeadingTrailingUrlSlash('http://contoso.sharepoint.com/sites/mySite/');
         * -> myAbsUrl : 'http://contoso.sharepoint.com/sites/mySite'
         * ```
         */
        fixLeadingTrailingUrlSlash: (urlString: string) => string;
        /**
         * Function to generate a unique GUID string.
         * Options can be provided to generate a GUID in a custom format.
         *
         * ```
         *
         * const result = rules.Utils.generateGUID({
         *   format?: String,  // Pass custom format like '####-####' where all '#' are replaced by random hexadecimal number (0..f)
         *   upperCase? : Boolean,  // All characters in upper case [default=false]
         *   withoutHyphens? : Boolean,  // GUID without hyphens [default=false]
         * }?);
         *
         * ```
         */
        generateGUID: (options?: GenerateGUIDOptions) => string;
        /**
         * Function to generate a MD5 hash for a string.
         * ```
         *
         * const result = rules.Utils.generateMd5Hash("someString");
         * ```
         */
        generateMd5Hash: (stringToHash: string) => string;
        /**
         * Function to generate a SHA256 hash for a string.
         * ```
         *
         * const result = rules.generateSha256Hash("someString");
         * ```
         */
        generateSha256Hash: (stringToHash: string) => string;
        /**
         * Function to get amount of Bytes of a string.
         *
         * _faster version, which doesn't use regular expressions, nor encodeURIComponent()_
         *
         *
         * It just computes the length in UTF8 of each unicode codepoints returned by charCodeAt() (based on wikipedia's descriptions of UTF8, and UTF16 surrogate characters).
         *
         * It follows RFC3629 (where UTF-8 characters are at most 4-bytes long).
         *
         * ```
         *
         * const result = rules.Utils.getByteLength("some string to analyze");
         * ```
         */
        getByteLength: (stringToCheck: string) => number;
        /**
         * Returns handler to perform file system operations on local client.
         *
         * _NOTE:_ Only available for Rules CLI execution context!
         *
         * ```
         *
         * const result = rules.Utils.getCliFileSystemHandler();
         *
         * result = {
         *   createDirectory(directoryPath),
         *   createFile(filePath, content, encodingAsString?),
         *   deleteDirectory(directoryPath),
         *   deleteFile(filePath),
         *   directoryExists(directoryPath),
         *   fileExists(filePath),
         *   getExecutingDirectory(),
         *   readDirectory(directoryPath),
         *   readFile(),
         *   searchFiles(directoryPath, searchPattern, searchOption),
         * }
         * ```
         */
        getCliFileSystemHandler: () => FileSystemBridge;
        /**
         * Function to get a Deep Copy of a JavaScript Object
         * (copy of an Object without references to source Object)
         *
         * _NOTE:_ Function references in Object will get lost.
         *
         * ```
         *
         * const sourceObject = {
         *   Title: 'Example',
         *   Choices: ['A', 'B'],
         *   LookupItem: {
         *     Title: 'Subitem',
         *   },
         *   StartDate: new Date('2022-03-03 00:00:00')
         * }
         *
         * const myIndependentObject = rules.Utils.getDeepCopy(sourceObject)
         *
         * // Changing sourceObject will not affect myIndependentObject:
         * sourceObject.Choices.push('C');
         * sourceObject.LookupItem.Title = 'new Sub Title';
         * sourceObject.StartDate = new Date('2021-01-01 00:00:00');
         *
         * ```
         */
        getDeepCopy: (obj: any) => any;
        /**
         * Function to deeply assign Objects.
         * Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
         * Works like native `Object.assign()`, but nested Objects are merged too (not overwritten).
         *
         * _NOTE:_ Function references of source Objects will be ignored
         *
         * ```
         *
         * // EXAMPLE Data:
         * const obj1 = {
         *   Title: 'template',
         *   Lists: {
         *     default: {
         *       DefaultListA: {},
         *     },
         *     custom: {},
         *   },
         * };
         * const obj2 = {
         *   Lists: {
         *     custom: {
         *       MyCustListA: {
         *         Title: 'Title A 22',
         *         Editor: 'he'
         *       },
         *       MyCustListB: {
         *         Title: 'Title B 22',
         *       },
         *     },
         *   },
         * };
         * const obj3 = {
         *   Lists: {
         *     custom: {
         *       MyCustListA: {
         *         Title: 'Title A 333',
         *       },
         *       MyCustListC: {
         *         Title: 'Title C 333',
         *         Author: 'me',
         *       },
         *     },
         *   },
         * };
         *
         * //
         * // EXAMPLE: get new merged Object without changing source objects
         * const newObject = rules.Utils.getDeepAssignedObject({}, obj1, obj2, obj3);
         *
         * //Result:
         * newObject = {
         *   Title: "template",
         *   Lists: {
         *     default: {
         *       DefaultListA: {
         *       },
         *     },
         *     custom: {
         *       MyCustListA: {
         *         Title: "Title A 333",
         *         Editor: "he",
         *       },
         *       MyCustListB: {
         *         Title: "Title B 22",
         *       },
         *       MyCustListC: {
         *         Title: "Title C 333",
         *         Author: "me",
         *       },
         *     },
         *   },
         * }
         * obj1 = {
         *   Title: 'template',
         *   Lists: {
         *     default: {
         *       DefaultListA: {},
         *     },
         *     custom: {},
         *   },
         * }
         *
         * //
         * //EXAMPLE: merge objects into target object
         * rules.Utils.getDeepAssignedObject(obj1, obj2, obj3);
         *
         * //Result:
         * obj1 = {
         *   Title: "template",
         *   Lists: {
         *     default: {
         *       DefaultListA: {
         *       },
         *     },
         *     custom: {
         *       MyCustListA: {
         *         Title: "Title A 333",
         *         Editor: "he",
         *       },
         *       MyCustListB: {
         *         Title: "Title B 22",
         *       },
         *       MyCustListC: {
         *         Title: "Title C 333",
         *         Author: "me",
         *       },
         *     },
         *   },
         * }
         *
         * ```
         *
         * @param target The target object — what to apply the sources' properties to, which is returned after it is modified
         * @param sources The source object(s) — objects containing the properties you want to apply.
         * @returns The target object
         */
        getDeepAssignedObject: (target: Object, ...sources: Object[]) => Object;
        /**
         * Function to get all fields causing an exception in a create or update request.
         * Therefor the result of the `create` or `update` REST request (or the caught error object of a corresponding function) has to be provided.
         *
         * _NOTE:_ For this function to work the corresponding `create` or `update` function has to use an `ItemFields` object for the `fields` option.
         *
         * ```
         *
         * const result = rules.Utils.getFieldExceptions(requestResult);
         *
         * result = {
         *   [fieldName] : String,  // Error message for all fields with an exception
         * }
         *
         * //EXAMPLE
         * try {
         *   // try to set a required field to an empty value
         *   const requestResult = await rules.updateEventItem(rules.createItemFields().setText('Title', ''));
         * } catch (err) {
         *   // get all fields that caused an exception
         *   const fieldExceptions = rules.Utils.getFieldExceptions(err);
         * }
         *
         * // result object:
         * fieldExceptions = {
         *   Title: "You must specify a value for this required field."
         * }
         * ```
         */
        getFieldExceptions: (requestResult: any) => {
            [fieldName: string]: string;
        };
        /**
         * Function to get helper object for '$select' and '$expand' parameters of REST request based on provided field names.
         * All native field names are returned in 'keys' array.
         *
         * ```
         * const fieldsObj = rules.Utils.getRestRequestFieldsObject(['Title', 'Editor/Name', 'Editor/Title', 'MyLookupField/Title']);
         *
         * //RESULT:
         * fieldsObj = {
         *   keys: ["Title","Editor","MyLookupField"],
         *   selects: ["Title","Editor/Name","Editor/Title","MyLookupField/Title"],
         *   expands: ["Editor","MyLookupField"]
         * }
         * ```
         *
         */
        getRestRequestFieldsObject: (fields: string[]) => RestRequestFieldsObject;
        /**
         * Function returns an object with web and list urls and the list name
         *
         * ```
         *
         * const result = rules.Utils.getUrlProperties(listUrl);
         *
         * listUrl = String  // Absolute list url
         *
         * result = {
         *   listUrl : String,  // Absolute list url
         *   listName : String,  // Name of list
         *   webUrl : String,  // Absolute web url
         *   webName : String,  // Name of web
         *   entityTypeName : String,  // Value of internal property 'EntityTypeName' of list
         * }
         *
         * ```
         */
        getListUrlProperties: (listUrl: string) => GetUrlPropertiesResult;
        /**
         * Function to get the absolute url of `pscBAF` web in Shareflex Master Site
         *
         * _NOTE:_ rules.Context.masterBafWebUrl differs depending on execution context (Event Receiver vs. TimerJob)
         */
        getMasterBafWebUrl: () => string;
        /**
         * Function to get url of web by a given list url
         */
        getWebUrlByListUrl: (listUrl: string) => string;
        /**
         * Supports absolute, already server-relative and URLs relative to a given contextual URL.
         * ```
         *
         * const serverRelativeListUrl = rules.Utils.makeServerRelative(rules.Event.webUrl, '/Lists/MyList');
         *
         * serverRelativeListUrl : '/sites/mySite/mySubWeb/Lists/MyList'
         * ```
         */
        makeServerRelative: (absOrServerRelOrContextRelUrl: string, contextualUrl?: string) => string;
        /**
         * This function waits some time in milliseconds
         *
         * ```
         * await rules.Utils.sleep(time);
         *
         * time = Number  // time to wait in milliseconds (e.g. 1000 for a second)
         * ```
         *
         */
        sleep: (/** time in milliseconds (e.g. 1000 for a second) */ time: number) => Promise<void>;
        /**
         * Function to wait for a specific condition.
         * The condition is checked periodically by a provided callback function.
         * All periods can be defined by wait intervals.
         *
         * ```
         * const result = await rules.Utils.waitUntil({
         *   waitIntervals : WaitIntervals,  // Time intervals to check the result of the check function
         *   checkFn : async (WaitUntilCheckFnOptions) => Promise<Boolean>,  // Callback function that has to return `true` to stop waitUntil
         *   checkFnOptions? : Any,  // Options passed to check function call
         * });
         *
         * WaitUntilCheckFnOptions = {
         *   rules : ShareflexRules,  // Shareflex Rules API
         *   options : Any,  // Options for check function
         *   intervalIndex : Number, // Index of current wait interval
         * }
         * ```
         *
         * ```
         *
         * // EXAMPLE
         *
         * const waitIntervals = rules.Utils.createWaitIntervals();
         *
         * waitIntervals.add({
         *   time: 20 * 1000,
         *   repetitions: 6,
         * });
         * waitIntervals.add({
         *   time: 10 * 1000,
         *   repetitions: 4,
         * });
         *
         * const result = await rules.Utils.waitUntil({
         *   waitIntervals,
         *   checkFn: isMyConditionFullFilled,
         *   checkFnOptions: {myCustomKey: 'myCustomValue'},
         * });
         *
         * result = Boolean;  // If checkFn return true in the waiting time
         *
         * ```
         */
        waitUntil: (options: WaitUntilOptions) => Promise<boolean>;
    }
    export const PublicUtilMethods: UtilMethods;
}
declare module "core/ItemFields" {
    export interface FieldObject {
        /** internal name of field */
        FieldName: string;
        /** final value */
        FieldValue: string;
    }
    export class ItemFields {
        private _fieldsObj;
        private _lcid;
        constructor(lcid: string);
        /**
         * Get amount of object keys (field names)
         */
        get length(): number;
        /**
         * Get amount of object keys (field names)
         */
        get lcid(): string;
        /**
         * Method to get a fields value from object or the complete fields object with key value pairs
         */
        get(/** Internal field name */ fieldName?: string): any;
        /**
         * Method to clear a fields value or the whole fields object
         */
        reset(/** Internal field name */ fieldName?: string): ItemFields;
        /**
         * Method to remove a field from fields object
         */
        remove(/** Internal field name */ fieldName: string): ItemFields;
        /**
         * Function to merge another ItemFields object into this object.
         *
         * For matching fields existing field values will be overwritten.
         *
         * ```
         *
         * //EXAMPLE:
         *
         * const defaultFields = rules.createItemFields();
         * defaultFields.setText('cmContractID', 'A3DS-59F1');
         * defaultFields.setText('ContentTypeId', '0x010075255A6AD9FE4F5EBEFC8B8AF83B30EB');
         *
         * const customFields = rules.createItemFields();
         * customFields.setText('Title', 'Cool Item');
         * customFields.setText('cmContractID', 'foo');
         *
         * // merge defaultFields into customFields:
         * customFields.merge(defaultFields);
         *
         * // Result:
         * customFields = {
         *   Title: 'Cool Item',
         *   cmContractID: 'A3DS-59F1',
         *   ContentTypeId: '0x010075255A6AD9FE4F5EBEFC8B8AF83B30EB'
         * }
         * ```
         */
        merge(additionalItemFields: ItemFields): ItemFields;
        /**
         * Method to set a value for a field to the fields object. Value has to be well formatted based on field type!
         * Provided value string will not be interpreted and will be directly passed as FieldValue to REST endpoint (setValidateUpdateItemUsingPath / ValidateUpdateListItem).
         *
         * It's also possible to provide an array of field value sets as an array.
         *
         * Value of existing fieldNames are overwritten with the new values.
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj();
         *
         * // single field
         * updateFields.set("MyCurrencyField", "119,99");
         *
         * // multiple fields
         * updateFields.set([
         *   {
         *     FieldName: "MyUrlField",
         *     FieldValue: "https://lmgtfy.com/?q=Shareflex, Shareflex rocks!",
         *   },
         *   {
         *     FieldName: "MyMultiUserField",
         *     FieldValue: "[{\"Key\":\"SiteCollection Members\"},{\"Key\":\"i:0#.f|membership|kylo@contoso.onmicrosoft.com\"}]",
         *   },
         *   {
         *     FieldName: "MyMultiLookupField",
         *     FieldValue: "1;#;#2;#;#5;#",
         *   },
         * ]);
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         * ```
         */
        set(fieldName: string | FieldObject[], fieldValue?: string): ItemFields;
        /**
         * Method to clear a fields value
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj();
         *
         * updateFields.setEmpty('MyNumberField');
         *
         * updateFields
         *   .setText('MyTextField', 'foo')
         *   .setDateTime('MyDateField', new Date());
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyTextField": "foo",
         *   "MyNumberField": "",
         *   "MyDateField": "2020-08-18T11:57:03.057Z"
         * }
         *
         * ```
         */
        setEmpty(fieldName: string): ItemFields;
        /**
         * Method to set a value for a boolean field in the fields object
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj();
         *
         * updateFields.setBoolean('MyBooleanField', true );
         *
         * updateFields
         *   .setText('MyTextField', 'foo' )
         *   .setDateTime('MyDateField', new Date() );
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyBooleanField": true,
         *   "MyTextField": "foo",
         *   "MyDateField": "2020-08-18T11:57:03.057Z"
         * }
         *
         * ```
         */
        setBoolean(/** Internal field name */ fieldName: string, /** Field value as Boolean */ fieldValue: boolean): ItemFields;
        /**
         * Method to set a value for a choice field in the fields object as string or array of strings
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj();
         *
         * updateFields.setChoice('MyChoiceField', 'Pizza' );
         * updateFields.setChoice('MyMultiChoiceField', ['Pizza', 'Ice', 'Mango Lassi'] );
         *
         * updateFields
         *   .setText('MyTextField', 'foo' )
         *   .setNumber('MyNumberField', 27 );
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyChoiceField": "Pizza",
         *   "MyMultiChoiceField": ["Pizza", "Ice", "Mango Lassi"],
         *   "MyTextField": "foo",
         *   "MyNumberField": 27,
         * }
         *
         * ```
         */
        setChoice(
        /** Internal field name */ fieldName: string, 
        /** Choice value as string or array of strings */ fieldValue: string | string[], 
        /** optional: 'add' or 'remove' this value to/from existing fieldName value */ mode?: string): ItemFields;
        /**
         * Method to set a value for a currency field in the fields object.
         * Create ItemFields object by passing a specific LCID if it differs from current Webs LCID.
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj('1031');
         *
         * updateFields.setCurrency('MyCurrencyField', 31.99 );
         *
         * updateFields
         *   .setText('MyTextField', 'foo' )
         *   .setDateTime('MyDateField', new Date() );
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyCurrencyField": 31.99,
         *   "MyTextField": "foo",
         *   "MyDateField": "2020-08-18T11:57:03.057Z"
         * }
         *
         * ```
         */
        setCurrency(/** Internal field name */ fieldName: string, /** Field value as Number */ fieldValue: number): ItemFields;
        /**
         * Method to set a value for a 'Date only' field in the fields object.
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj();
         *
         * updateFields.setDate('MyDateOnlyField', new Date('2020-08-18') );
         *
         * updateFields
         *   .setNumber('MyNumberField', 27 )
         *   .setText('MyTextField', 'foo' );
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyDateOnlyField": "2020-08-18T00:00:00.000Z"
         *   "MyNumberField": 27,
         *   "MyTextField": "foo",
         * }
         *
         * ```
         */
        setDate(/** Internal field name */ fieldName: string, /** Field value as Date */ fieldValue: Date): ItemFields;
        /**
         * Method to set a value for a 'Date and Time' field in the fields object
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj();
         *
         * updateFields.setDateTime('MyDateTimeField', new Date('2020-08-18 16:57') );
         *
         * updateFields
         *   .setNumber('MyNumberField', 27 )
         *   .setText('MyTextField', 'foo' );
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyDateTimeField": "2020-08-18T16:57:03.057Z"
         *   "MyNumberField": 27,
         *   "MyTextField": "foo",
         * }
         *
         * ```
         */
        setDateTime(/** Internal field name */ fieldName: string, /** Field value as Date */ fieldValue: Date): ItemFields;
        /**
         * Method to set a value for a lookup field in the fields object.
         *
         * Value has to be provided as Item ID of Lookup item or array of Item IDs
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj();
         *
         * updateFields.setLookup('MyLookupField', '12' );
         * updateFields.setLookup('MyMultiLookupField', [3, '45'] );
         *
         * updateFields
         *   .setText('MyTextField', 'foo' )
         *   .setNumber('MyNumberField', 27 );
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyLookupField": "12",
         *   "MyMultiLookupField": [3, "45"],
         *   "MyTextField": "foo",
         *   "MyNumberField": 27,
         * }
         *
         * ```
         */
        setLookup(
        /** Internal field name */ fieldName: string, 
        /** Item ID of Lookup item or array of Item IDs */ fieldValue: string | number | any[], 
        /** optional: 'add' or 'remove' this value to/from existing fieldName value */ mode?: string): ItemFields;
        /**
         * Method to set a value for a number field in the fields object.
         *
         * Create ItemFields object by passing a specific LCID if it differs from current Webs LCID.
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj('1031');
         *
         * updateFields.setNumber('MyNumberField', 27.87 );
         *
         * updateFields
         *   .setText('MyTextField', 'foo' )
         *   .setDateTime('MyDateField', new Date() );
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyNumberField": 27.87,
         *   "MyTextField": "foo",
         *   "MyDateField": "2020-08-18T11:57:03.057Z"
         * }
         *
         * ```
         */
        setNumber(/** Internal field name */ fieldName: string, /** Field value as Number */ fieldValue: number): ItemFields;
        /**
         * Method to set a value for a text field in the fields object
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj();
         *
         * updateFields.setText('MyTextField', 'foo' );
         *
         * updateFields
         *   .setNumber('MyNumberField', 27 )
         *   .setDateTime('MyDateField', new Date() );
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyTextField": "foo",
         *   "MyNumberField": 27,
         *   "MyDateField": "2020-08-18T11:57:03.057Z"
         * }
         *
         * ```
         */
        setText(/** Internal field name */ fieldName: string, /** Field value as Text */ fieldValue: string): ItemFields;
        /**
         * Method to set a value for a text field in the fields object
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj();
         *
         * updateFields.setUrl('MyUrlField', 'https://lmgtfy.com/?q=Shareflex' , 'Shareflex rocks!' );
         *
         * updateFields
         *   .setText('MyTextField', 'foo' )
         *   .setNumber('MyNumberField', 27 );
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyUrlField": 'https://lmgtfy.com/?q=Shareflex, Shareflex rocks!',
         *   "MyTextField": "foo",
         *   "MyNumberField": 27,
         * }
         *
         * ```
         */
        setUrl(/** Internal field name */ fieldName: string, /** Url of Hyperlink */ fieldValue: string, /** Description text of Hyperlink */ description?: string): ItemFields;
        /**
         * Method to set a value for a user field in the fields object.
         *
         * Field value can be a user token or a SharePoint group name as string or array of strings.
         *
         * ```
         *
         * // EXAMPLE:
         * const updateFields = rules.createItemFieldsObj();
         *
         * updateFields.setUser('MyUserField', 'i:0#.f|membership|luke@contoso.onmicrosoft.com' );
         * updateFields.setUser('MyMultiUserField', ['SiteCollection Members', 'i:0#.f|membership|kylo@contoso.onmicrosoft.com'] );
         *
         * updateFields
         *   .setText('MyTextField', 'foo' )
         *   .setNumber('MyNumberField', 27 );
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyUserField": "i:0#.f|membership|luke@contoso.onmicrosoft.com",
         *   "MyMultiUserField": ["SiteCollection Members", "i:0#.f|membership|kylo@contoso.onmicrosoft.com"],
         *   "MyTextField": "foo",
         *   "MyNumberField": 27,
         * }
         *
         * ```
         */
        setUser(
        /** Internal field name */ fieldName: string, 
        /** User token or SharePoint group name as string or array of strings */ fieldValue: string | string[], 
        /** optional: 'add' or 'remove' this value to/from existing fieldName value */ mode?: string): ItemFields;
        /**
         * Returns an array to be used as 'formValues' by REST endpoint AddValidateUpdateItemUsingPath and ValidateUpdateListItem
         */
        get formValues(): FieldObject[];
        /**
         * Build default value Object for a fieldObject key
         */
        private buildFieldProperties;
        /**
         * Transform date object into formatted string "YYYY-MM-DD hh:mm:ss"
         * @param {Date} dateObj  Specific date object
         * @param {Boolean} addTimestamp  If timestamp of dateObj has to be added. Otherwise timestamp '00:00:00' will be added due to SharePoint default behavior
         */
        private transformDateTimeToString;
        /**
         * Manipulate a multi-fields value by adding or removing elements
         */
        private modifyValue;
    }
}
declare module "core/BatchOperations" {
    import { ItemFields } from "core/ItemFields";
    import ShareflexRules from "ShareflexRules";
    export interface AddCreateFolderOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder */
        folderPath: string;
        /** Specific content type id [default='0x0120'] */
        contentTypeId?: string;
        /** Fields object containing all fields and their values to be set */
        fields?: ItemFields;
        /** Operation identifier */
        operationId?: string;
    }
    export interface AddCreateItemOptions {
        /** Url of list */
        listUrl: string;
        /** ItemFields object */
        fields: ItemFields;
        /** List-relative path of folder */
        folderPath?: string;
        /** Operation identifier */
        operationId?: string;
    }
    export interface AddUpdateFolderOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder */
        folderPath: string;
        /** Set a specific content type by id */
        contentTypeId?: string;
        /** Fields object containing all fields and their values to be set */
        fields: ItemFields;
        /** Create a new version by updating the folder [default=true] */
        incrementVersion?: boolean;
        /** Operation identifier */
        operationId?: string;
    }
    export interface AddUpdateItemOptions {
        /** Url of list */
        listUrl: string;
        /** ListItem ID of item to be updated */
        itemId: number | string;
        /** ItemFields object */
        fields: ItemFields;
        /** Create a new version by updating the item? [default=true] */
        incrementVersion?: boolean;
        /** Operation identifier */
        operationId?: string;
    }
    export interface AddDeleteFolderOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder */
        folderPath: string;
        /** If folder has to be moved to recycle bin [default=false] */
        recycle?: boolean;
        /** Operation identifier */
        operationId?: string;
    }
    export interface AddDeleteItemOptions {
        /** Url of list */
        listUrl: string;
        /** ListItem ID of item to be deleted */
        itemId: number | string;
        /** If items has to be moved to recycle bin [default=false] */
        recycle?: boolean;
        /** Operation identifier */
        operationId?: string;
    }
    export interface AddCopyDocumentOptions {
        /** Url of source document */
        sourcePath: string;
        /** Url of the new document destination (incl. Document name) */
        destinationPath: string;
        /** What to do if file does already exist in destination ('skip', 'overwrite', 'keepBoth') [default=skip] */
        fileExistsAction?: 'skip' | 'overwrite' | 'keepBoth';
        /** Operation identifier */
        operationId?: string;
    }
    export interface AddMoveDocumentOptions {
        /** Url of source document */
        sourcePath: string;
        /** Url of the new document destination (incl. Document name) */
        destinationPath: string;
        /** What to do if file does already exist in destination ('skip', 'overwrite', 'keepBoth') [default=skip] */
        fileExistsAction?: 'skip' | 'overwrite' | 'keepBoth';
        /** Operation identifier */
        operationId?: string;
    }
    export interface Headers {
        /** 'Accept' header */
        Accept?: string;
        /** 'Content-Type' header */
        'Content-Type'?: string;
        /** 'If-Match' header */
        'If-Match'?: string;
        /** Any custom header */
        [key: string]: string;
    }
    export interface AddGenericOptions {
        /** Method of REST request */
        method: string;
        /** Url of REST endpoint */
        url: string;
        /** Object with request headers  */
        headers?: Headers;
        /** Request body */
        body?: object | string;
        /** Operation identifier */
        operationId?: string;
    }
    export interface RestServiceResult {
        /** HTTP status code of response */
        status: string;
        /** HTTP status text of response */
        statusText: string;
        /** HTTP body of response */
        body: Object | string | any;
        /** Error stack */
        /** API information */
        ApiFn?: any;
        ApiStack?: any;
    }
    export interface BatchChangeset {
        /** URL of list */
        listUrl: string;
        /** Kind of Changeset operation (POST = create, MERGE = update, DELETE = delete) */
        method: string;
        /** ID of Sharepoint item (required for method MERGE and DELETE) */
        itemId?: string;
        /** Individual 'Accept' value for Operation */
        accept?: string;
        /** Individual 'Content-Type' value for operation */
        contentType?: string;
        /** Individual 'If-Match' value for operation */
        ifMatch?: string;
        /** Fields as fields object (required for method CREATE and UPDATE) or key value pairs (required for method POST and MERGE) */
        fields?: ItemFields;
        /** List relative path to folder (supported by method CREATE) */
        folderPath?: string;
    }
    export interface HttpStatus {
        /** HTTP Status Code of response */
        status: string;
        /** @deprecated Use key 'result' instead */
        statusText: string;
        /** Response body */
        result: any;
    }
    export interface OperationResult extends HttpStatus {
        /** Configuration object for changeset that has been batched */
        operation: BatchChangeset;
        /** Index of operation element in batch object */
        operationIndex: number;
    }
    export interface ChangesetResult extends HttpStatus {
        /** Configuration object for changeset that has been batched */
        operation: BatchChangeset;
        /** Index of operation element in batch object */
        operationIndex: number;
        /** Operation identifier */
        operationId: string;
    }
    export interface ExecuteOptions {
        /** If Shareflex Rules list event execution has to be triggered for each operation [default=false] */
        eventsActivated?: boolean;
        /** @deprecated Use 'returnOperationResults' instead */
        returnAllOperations?: boolean;
        /** If to also return an array with results of all processed operations [default=false] */
        returnOperationResults?: boolean;
        /** Amount of max. parallel running batch requests during processing [default=1] */
        maxParallelRequests?: number;
        /** Amount of operations (between 10 and 100) per single batched request [default=100]  */
        batchSize?: number;
    }
    interface BatchOperationResultObject {
        /** Result object of operation in an object with operationId as key */
        [operationId: string]: any;
    }
    export interface ExecuteResult extends HttpStatus {
        /** Array of all operations that has not been successfully processed (no 2xx status code) */
        failedOperations: ChangesetResult[];
        /** @deprecated Replaced by 'operationResults' - Array of all operations that have been batched in this request */
        allOperations?: ChangesetResult[];
        /** Result object for all operations that have been batched in this request */
        operationResults?: {
            [operationId: string]: OperationResult;
        };
        /** values of 'GET' requests grouped by operationId */
        values?: BatchOperationResultObject;
    }
    export interface BatchOperationsConstructor {
        /** Url of context web */
        webUrl: string;
        /** Shareflex Rules class object */
        rules: ShareflexRules;
    }
    export class BatchOperations {
        private _operations;
        private _webUrl;
        private _rules;
        private _methodCounter;
        private static readonly _acceptDefault;
        private static readonly _contentTypeDefault;
        private static readonly _ifMatchDefault;
        constructor({ rules, webUrl }: BatchOperationsConstructor);
        /**
         * All operations changesets of current batch object
         */
        get operations(): string[][];
        /**
         * Amount of operations to batch
         */
        get length(): number;
        /**
         * Url of context web for batch processing
         */
        get webUrl(): string;
        /**
         * Method to add a 'Create Folder' operation to batch object
         *
         * IMPORTANT:
         *
         * Path to folder has to exist. This operation can only create the deepest folder provided in _folderPath_.
         *
         * ```
         *
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * batchOperations.addCreateFolder({
         *   listUrl : String,  // Absolute list url
         *   folderPath : String, // Folder name or list relative path to folder including folder name
         *   contentTypeId? : String,  // Specific content type id [default='0x0120']
         *   fields? : Object,  // Fields object containing all fields and their values to be set [see rules.createItemFields()]
         *   operationId? : String,  // Custom operation identifier
         * });
         * const result = await batchOperations.execute();
         *
         *
         * // EXAMPLES:
         *
         * // SIMPLE:
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * // add operation to create folder 'subFolderCCC'
         * // NOTE: folderpath '/subFolderA/subFolderBB' has to exist!
         * batchOperations.addCreateFolder({
         *   listUrl: `${myWebUrl}/Lists/SampleList`,
         *   folderPath: `/subFolderA/subFolderBB/subFolderCCC`,
         * });
         * // process batched operations
         * const result = await batchOperations.execute();
         *
         *
         * // SIMPLE MULTIPATH:
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * // add operations to create folderpath '/subFolderA/subFolderBB/subFolderCCC'
         * batchOperations.addCreateFolder({
         *   listUrl: `${myWebUrl}/Lists/SampleList`,
         *   folderPath: `/subFolderA`,
         * });
         * batchOperations.addCreateFolder({
         *   listUrl: `${myWebUrl}/Lists/SampleList`,
         *   folderPath: `/subFolderA/subFolderBB`,
         * });
         * batchOperations.addCreateFolder({
         *   listUrl: `${myWebUrl}/Lists/SampleList`,
         *   folderPath: `/subFolderA/subFolderBB/subFolderCCC`,
         * });
         * // process batched operations
         * const result = await batchOperations.execute();
         *
         *
         * // COMPLEX: create subfolders for primary item
         * const fields = rules.createItemFields().setText(`primaryTitle`, myPrimaryItem.Title);
         * // method chaining is also possible:
         * const result = await rules
         *   .createBatchOperations(myWebUrl)
         *   .addCreateFolder({
         *     listUrl: `${myWebUrl}/Lists/Notes`,
         *     folderPath: myPrimaryId,
         *     fields,
         *    })
         *   .addCreateFolder({
         *     listUrl: `${myWebUrl}/Lists/Tasks`,
         *     folderPath: myPrimaryId,
         *     fields,
         *    })
         *   .addCreateFolder({
         *     listUrl: `${myWebUrl}/Documents`,
         *     folderPath: myPrimaryId,
         *     fields,
         *    })
         *   .execute();
         *
         * ```
         *
         * REST endpoint : /_api/web/lists/AddValidateUpdateItemUsingPath
         */
        addCreateFolder(options: AddCreateFolderOptions): BatchOperations;
        /**
         * Method to add a 'Create Item' operation to batch object
         *
         * ```
         *
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * batchOperations.addCreateItem({
         *   listUrl : String,  // Url of list to create item in
         *   fields : ItemFields,  // Shareflex Rules ItemFields object ( rules.createItemFields() )
         *   folderPath? : String,  // List-relative subfolder path to create item in
         *   operationId? : String,  // Custom operation identifier
         * });
         * const result = await batchOperations.execute();
         *
         *
         * // EXAMPLE:
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         *
         * // create demo data operations
         * for (let i = 0; i < 500; i++) {
         *   const fields = rules.createItemFields().setText(`Title`, `new title ${i}`);
         *   batchOperations.addCreateItem({
         *     listUrl: `${myWebUrl}/Lists/SampleList`,
         *     folderPath: `/subFolder1/subfolder12`,
         *     fields,
         *    });
         *  }
         *
         * // process batched operations
         * const result = await batchOperations.execute();
         *
         * ```
         *
         * REST endpoint : /_api/web/lists/AddValidateUpdateItemUsingPath
         */
        addCreateItem(options: AddCreateItemOptions): BatchOperations;
        /**
         * Method to add a 'Update Folder' operation to batch object
         *
         * ```
         *
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * batchOperations.addUpdateFolder({
         *   listUrl : String,  // Absolute list url
         *   folderPath : String,  // List relative path to folder
         *   fields : Object,  // Fields object containing all fields and their values to be set [see rules.createItemFields()]
         *   incrementVersion? : Boolean,  // Create a new version by updating the folder? [default=true]
         *   contentTypeId? : String,  // Set a specific content type by id
         *   operationId? : String,  // Custom operation identifier
         * });
         * const result = await batchOperations.execute();
         *
         *
         * // EXAMPLES:
         *
         * // SIMPLE:
         * const fields = rules.createItemFields().setText(`primaryTitle`, myPrimaryItem.Title);
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * // add operation to batch object
         * batchOperations.addUpdateFolder({
         *   listUrl: `${myWebUrl}/Lists/SampleList`,
         *   folderPath: `/subFolderA/subFolderBBsubFolderCCC`,
         *   fields,
         * });
         * // process batched operations
         * const result = await batchOperations.execute();
         *
         * // COMPLEX: update subfolders of a primary item
         * // method chaining is also possible:
         * const result = await rules
         *   .createBatchOperations(myWebUrl)
         *   .addUpdateFolder({
         *     listUrl: `${myWebUrl}/Lists/Notes`,
         *     folderPath: myPrimaryId,
         *     fields: myUpdateFields,
         *    })
         *   .addCreateFolder({
         *     listUrl: `${myWebUrl}/List/CustomList`,
         *     folderName: myPrimaryId,
         *     fields: customListFields,
         *    })
         *   .addCreateItem({
         *     listUrl: `${myWebUrl}/Lists/SampleList`,
         *     folderPath: `/subFolder1/subfolder12`,
         *     fields: sampleListFields,
         *    })
         *   .execute();
         *
         * ```
         *
         * REST endpoint : /_api/web/lists/ValidateUpdateListItem
         */
        addUpdateFolder(options: AddUpdateFolderOptions): BatchOperations;
        /**
         * Method to add a 'Update Item' operation to batch object
         *
         * ```
         *
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * batchOperations.addUpdateItem({
         *   listUrl : String,  // Url of list containing item to be updated
         *   itemId : Number | String,  // ListItem ID of item to be updated
         *   fields : ItemFields,  // Shareflex Rules ItemFields object ( rules.createItemFields() )
         *   incrementVersion? : Boolean,  // Create a new version by updating the item? [default=true]
         *   operationId? : String,  // Custom operation identifier
         * });
         * const result = await batchOperations.execute();
         *
         *
         * // EXAMPLE:
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         *
         * // create demo data operations
         * for (let i = 0; i < 500; i++) {
         *   const fields = rules.createItemFields().setText(`Title`, `updated title ${i}`);
         *   batchOperations.addUpdateItem({
         *     listUrl: `${myWebUrl}/Lists/SampleList`,
         *     itemId: i+1,
         *     fields,
         *    });
         *  }
         *
         * // process batched operations
         * const result = batchOperations.execute();
         *
         * ```
         *
         * REST endpoint : /_api/web/lists/items/ValidateUpdateListItem
         */
        addUpdateItem(options: AddUpdateItemOptions): BatchOperations;
        /**
         * Method to add a 'Delete Folder' operation to batch object
         *
         * ```
         *
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * batchOperations.addDeleteFolder({
         *   listUrl : String,  // Absolute list url
         *   folderPath : String,  // List relative path to folder
         *   recycle? : Boolean,  // If folder has to be moved to recycle bin [default=false]
         *   operationId? : String,  // Custom operation identifier
         * });
         * const result = await batchOperations.execute();
         *
         *
         * // EXAMPLE:
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         *
         * // create operations
         * for (let i = 0; i < 500; i++) {
         *   batchOperations.addDeleteFolder({
         *     listUrl: `${myWebUrl}/Lists/SampleList`,
         *     folderPath: `myFolderName${i}`,
         *    });
         *  }
         *
         * // process batched operations
         * const result = await batchOperations.execute();
         *
         * ```
         *
         * REST endpoint : /_api/web/lists/items
         */
        addDeleteFolder(options: AddDeleteFolderOptions): BatchOperations;
        /**
         * Method to add a 'Delete Item' operation to batch object
         *
         * ```
         *
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * batchOperations.addDeleteItem({
         *   listUrl : String,  // Url of list containing item to be deleted
         *   itemId : Number | String,  // ListItem ID of item to be deleted
         *   recycle? : Boolean,  // If items has to be moved to recycle bin [default=false]
         *   operationId? : String,  // Custom operation identifier
         * });
         * const result = await batchOperations.execute();
         *
         *
         * // EXAMPLE:
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         *
         * // create operations
         * for (let i = 0; i < 500; i++) {
         *   batchOperations.addDeleteItem({
         *     listUrl: `${myWebUrl}/Lists/SampleList`,
         *     itemId: i+1,
         *    });
         *  }
         *
         * // process batched operations
         * const result = await batchOperations.execute();
         *
         * ```
         *
         * REST endpoint : /_api/web/lists/items
         */
        addDeleteItem(options: AddDeleteItemOptions): BatchOperations;
        /**
         * Method to add a 'Copy Document' operation to batch object
         *
         * _NOTE: currently `fileExistsAction: 'skip'` will result in a failed operation if target exists. This will be fixed in a next release._
         *
         * ```
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * batchOperations.addCopyDocument({
         *   sourcePath : String,  // Absolute Url of source document (incl. filename)
         *   destinationPath : String,  // Absolute Url of the new document destination (incl. filename)
         *   fileExistsAction? : String,  // What to do if file does already exist in destination ('skip', 'overwrite', 'keepBoth') [default=skip]
         *   operationId? : String,  // Custom operation identifier
         * });
         * const result = await batchOperations.execute();
         *
         * ```
         *
         * REST endpoint : /_api/SP.MoveCopyUtil.CopyFileByPath
         */
        addCopyDocument(options: AddCopyDocumentOptions): BatchOperations;
        /**
         * Method to add a 'Move Document' operation to batch object
         *
         * _NOTE: currently `fileExistsAction: 'skip'` will result in a failed operation if target exists. This will be fixed in a next release._
         *
         * ```
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * batchOperations.addMoveDocument({
         *   sourcePath : String,  // Absolute Url of source document (incl. filename)
         *   destinationPath : String,  // Absolute Url of the new document destination (incl. filename)
         *   fileExistsAction? : String,  // What to do if file does already exist in destination ('skip', 'overwrite', 'keepBoth') [default=skip]
         *   operationId? : String,  // Custom operation identifier
         * });
         * const result = await batchOperations.execute();
         *
         * ```
         *
         * REST endpoint : /_api/SP.MoveCopyUtil.CopyFileByPath
         */
        addMoveDocument(options: AddMoveDocumentOptions): BatchOperations;
        /**
         * Add a generic operation to batch
         *
         * ```
         *
         * const batchOperations = rules.createBatchOperations(webUrl);
         * batchOperations.addGeneric({
         *   method : String,  // Method of operation (e.g. POST, MERGE, DELETE)
         *   url : String,  // Url of REST endpoint (absolute or server-relative)
         *   headers : {
         *     'Accept'? : String,  // 'Accept' header of operation request [default='application/json;odata=nometadata']
         *     'Content-Type'? : String,  // 'Content-Type' header of operation request [default='application/json;odata=verbose']
         *     'If-Match'? : String  // 'If-Match' header of operation request
         *     *? : String,  // any other header parameter for operation request
         *   }
         *   body? : Object | String,  // request body as object or string
         * });
         *
         *
         * // EXAMPLE
         * const batchOperations = rules.createBatchOperations(`https://contoso.sharepoint.com/sites/sampleSite/subWeb`);
         * batchOperations.addGeneric({
         *   method: `POST`,
         *   url: `https://contoso.sharepoint.com/sites/sampleSite/subWeb/_api/web/lists/getbytitle('SampleList')/items(8)/ValidateUpdateListItem`,
         *   headers: {
         *     'Accept': `application/json;odata=nometadata`,
         *     'Content-Type': `application/json;odata=verbose`,
         *   }
         *   body: `{"formValues":[{"FieldName":"Title","FieldValue":"Updated Title"},{"FieldName":"Modified","FieldValue":"2/20/2012 2:28 PM"}],"bNewDocumentUpdate":true}`
         * });
         * const result = await batchOperations.execute();
         *
         * ```
         */
        addGeneric(options: AddGenericOptions): BatchOperations;
        /** Function to check if required key are provided by an options object */
        private checkRequirements;
        /**
         * Function to send multiple operations as batched request(s)
         *
         * ```
         *
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         * batchOperations.addCreateItem(options);
         *
         * const result = await batchOperations.execute({
         *   eventsActivated? : Boolean,  // If Shareflex Rules list event execution has to be triggered for each operation [default=false]
         *   maxParallelRequests? : Number,  // Amount of max. parallel running batch requests during processing [default=1]
         *   returnOperationResults? : Boolean,  // If to also return results of all processed operations [default=false]
         *   batchSize?: Number,  // Amount of operations (between 10 and 100) per single batched request [default=100]
         * });
         *
         *
         * // Promise.resolve
         * result = {
         *   status : String,  // HTTP status code of batch request
         *   result : Object | String,  // Operation response
         *   failedOperations : ChangesetResult[],  // Array of all operations that has not been successfully processed (no 2xx status code)
         *   operationResults? : {  // Object with result of all operations that have been batched in this request (grouped by operationId)
         *     [operationId: string] : ChangesetResult,  // Result object of operation
         *   },
         *   values?: {  // Result objects of all GET-requests (for GET-only-Batches)
         *     [operationId: string] : Object,  // GET-Request response grouped by operationId
         *   },
         * }
         *
         * ChangesetResult = {
         *   status : String,  // HTTP status code of batch request
         *   result : Object | String,  // Operation response
         *   operation : BatchChangeset,  // Request body of changeset that has been batched
         *   operationIndex : Number,  // Index of operation element in batchOperation object
         *   operationId : String,  // Operation identifier
         * }
         *
         * ```
         */
        execute(options?: ExecuteOptions): Promise<ExecuteResult>;
        /**
         * Function to process the HTTP request for batched changesets
         */
        private sendBatchRequest;
        /**
         * Function to increase counter for a specific request method
         */
        private increaseMethodCounter;
        /**
         * Function to ensure an operation identifier
         */
        private ensureOperationId;
        /**
         * @deprecated Renamed to `rules.Utils.getByteLength()`
         *
         * Function to get amount of Bytes of a string.
         *
         * _faster version, which doesn't use regular expressions, nor encodeURIComponent()_
         *
         *
         * It just computes the length in UTF8 of each unicode codepoints returned by charCodeAt() (based on wikipedia's descriptions of UTF8, and UTF16 surrogate characters).
         *
         * It follows RFC3629 (where UTF-8 characters are at most 4-bytes long).
         */
        byteLength(requestBody: string): number;
    }
}
declare module "core/ConnectionManager" {
    import ShareflexRules from "ShareflexRules";
    import { ConnectionObject } from "core/Bridges";
    type StringObject = {
        [key: string]: string;
    };
    export interface CreateMicrosoftGraphAppOnlyConnectionOptions {
        /** Name (e.g. 'contoso.onmicrosoft.com') or Id of tenant */
        tenant: string;
        /** Application Client Id  */
        clientId: string;
        /** Encrypted Application Client Secret (see documentation) */
        encryptedClientSecret: string;
        /** Id of connection */
        id?: string;
    }
    export interface CreateGenericHttpConnectionOptions {
        /** Id of connection */
        id?: string;
        /** Absolute Url */
        baseUrl: string;
        /** Header object with plain string values */
        headers: StringObject;
        /** Header object with encrypted string values (encrypted via Shareflex Online Service Management Page) */
        encryptedHeaders: StringObject;
    }
    export interface CreateSharePointUserConnectionOptions {
        /** Id of connection */
        id?: string;
        /** Absolute url of web */
        webUrl: string;
        /** Username */
        userName: string;
        /** Encrypted password (encrypted via Shareflex Online Service Management Page) */
        password: string;
    }
    export interface SetRetryPolicyOptions {
        /** Id of connection [default=default SharePoint connection] */
        connectionId?: string;
        /** Enable (true) or disable (false) Retry Policy [default=true] */
        enabled?: boolean;
        /** Id of retry policy */
        retryPolicyId?: string;
    }
    interface CheckResult {
        /** If check was successful */
        result: boolean;
        /** Check response text */
        message: string;
    }
    export class ConnectionManager {
        private _rules;
        constructor(rules: ShareflexRules);
        /**
         * Function to get the id of the elevated default Shareflex Rules connection.
         *
         * ```
         * const result = rules.getAdminConnectionId();
         *
         * result = String  // Id of connection [default='Elevated']
         *
         * ```
         */
        getAdminConnectionId(): string;
        /**
         * Check if Connection exists and is of passed type.
         *
         * @param connectionId
         * @param connectionType String to be included in type of connection string
         */
        checkConnectionType(connectionId: string, connectionType: string): CheckResult;
        /**
         * Function to initialize a generic HTTP Connection.
         *
         * ```
         *
         * const myConnection = rules.ConnectionManager.createGenericHttpConnection({
         *   baseUrl : String,  // Absolute url
         *   headers : Object,  // Object with for Header information (values as plain string)
         *   encryptedHeaders : Object,  // Headers object with encrypted values (encrypted via Shareflex Online Service Management Page)
         *   id? : String,  // Id of connection
         * })
         *
         * //EXAMPLE
         * const myConnection = rules.ConnectionManager.createGenericHttpConnection({
         *   baseUrl: 'https://my.generic.website',
         *   headers: {
         *     customHeader: "value",
         *   },
         *   encryptedHeaders: {
         *     secretHeaderKey: "{==gDSDhd34FsgFG3242==}",
         *   },
         * });
         *
         * const result = await http.executeRequest( 'https://my.generic.website', 'GET', {}, '', myConnection );
         * ```
         */
        createGenericHttpConnection(options: CreateGenericHttpConnectionOptions): ConnectionObject;
        /**
         * Function to initialize a Microsoft Graph AppOnly Connection.
         *
         * ```
         *
         * const myConnection = rules.ConnectionManager.createMicrosoftGraphAppOnlyConnection({
         *   tenant : String,  // Name (e.g. 'contoso.onmicrosoft.com') or Id of tenant
         *   clientId : String,  // Application Client Id
         *   encryptedClientSecret : String,  // Encrypted Application Client Secret (see documentation)
         *   id? : String,  // Id of connection
         * })
         *
         * //EXAMPLE
         * const myConnection = rules.ConnectionManager.createMicrosoftGraphAppOnlyConnection({
         *   tenant: 'e428de6f-f400-45aa-bf32-8cf1ee7a4e17',
         *   clientId: 'bd0c615a-6f55-4d5d-9c60-19c1e191155f',
         *   encryptedClientSecret: myEncryptedSecret,
         * });
         *
         * const result = await rules.graphService({
         *   method : 'GET',
         *   resource : '/users',
         *   connectionId : myConnection.Id
         * });
         * ```
         */
        createMicrosoftGraphAppOnlyConnection(options: CreateMicrosoftGraphAppOnlyConnectionOptions): ConnectionObject;
        /**
         * Function to initialize a SharePoint Connection for a specific user context.
         *
         * ```
         *
         * const myConnection = rules.ConnectionManager.createSharePointUserConnection({
         *   webUrl : String,  // Absolute url of web
         *   userName : String,  // Username as mail address
         *   password : String,  // Encrypted password (encrypted via Shareflex Online Service Management Page)
         *   id? : String,  // Id of connection
         * })
         *
         * //EXAMPLE
         * const myConnection = rules.ConnectionManager.createSharePointUserConnection({
         *   webUrl: 'https://contoso.sharepoint.com/sites/MySpecialSite',
         *   userName: 'luke@contoso.onmicrosoft.com',
         *   password: '{==dfgDSFGwe43F==}',
         * });
         *
         * const result = await http.executeRequest( 'https://contoso.sharepoint.com/sites/MySpecialSite', method, headers, body, myConnection );
         * ```
         */
        createSharePointUserConnection(options: CreateSharePointUserConnectionOptions): ConnectionObject;
        /**
         * Function to get a Connection object by Id
         *
         * ```
         *
         * const result = rules.ConnectionManager.getConnection(connectionId);
         *
         * connectionId : String;  // Identifier of connection (default SharePoint connectionIds: 'Elevated', 'User')
         *
         * result = {
         *   id : String,  // Identifier of connection
         *   type : 'SharePointElevatedConnection' | 'SharePointRemoteEventConnection' | 'SharePointUserConnection' | 'MicrosoftGraphAppOnlyConnection' | 'MicrosoftGraphUserConnection' | 'GenericHttpConnection',  // Type of connection
         *   retryPolicyId: string; // The id of the RetryPolicy currently configured for the connection
         * }
         * ```
         */
        getConnection(connectionId: string): ConnectionObject;
        /**
         * Method to set up Shareflex Rules internal 'Retry' handling
         * if requests fail due to retriable reasons (e.g. HTTP Status 429, 503)
         *
         * ```
         *
         * const result = rules.ConnectionManager.setRetryPolicy({
         *   connectionId? : String,  // Id of connection [default=default SharePoint connection]
         *   enabled? : Boolean,  // Enable (true) or disable (false) Retry Policy [default=true]
         * })
         *
         * result = Connection
         *
         * ```
         * ```
         *
         * //EXAMPLE: disable internal retry for default SharePoint requests
         * rules.ConnectionManager.setRetryPolicy({
         *   enabled: false,
         * });
         *
         * ```
         */
        setRetryPolicy(options: SetRetryPolicyOptions): ConnectionObject;
    }
}
declare module "core/Logger" {
    type LogLevel = 'Debug' | 'Information' | 'Warning' | 'Error';
    export interface LoggerMethods {
        /**
         * Function to set status field of resulting log entry in the pscBAF Logs list
         *
         * ```
         * rules.Logger.setLogStatus('Error');
         *
         * ```
         */
        setLogStatus: (status: LogLevel) => void;
        /**
         * Function to set title field of resulting log entry in the pscBAF Logs list
         *
         * ```
         * rules.Logger.setLogTitle("Some new title");
         *
         * ```
         */
        setLogTitle: (title: string) => void;
        /**
         * Function to set source field of resulting log entry in the pscBAF Logs list
         *
         * ```
         * rules.Logger.setLogSource("Shareflex Permissions");
         *
         * ```
         */
        setLogSource: (source: string) => void;
        /**
         * Sets log level for logger.
         *
         * ```
         * rules.Logger.setLogLevel("Information");
         *
         * ```
         */
        setLogLevel: (logLevel: LogLevel) => void;
        /**
         * Sets DateTime culture for logger as text or LCID.
         *
         * ```
         * rules.Logger.setLogDateTimeCulture("en-US");
         * rules.Logger.setLogDateTimeCulture(1033);
         *
         * ```
         */
        setLogDateTimeCulture: (cultureString: string) => void;
        /**
         * Clears log cache for script. Any log messages prior to this call will not be logged.
         *
         * ```
         * rules.Logger.clearLog();
         *
         * ```
         */
        clearLog: () => void;
        /**
         * Created the SharePoint log list item immediately.
         *
         * Will not have any effect, if no SharePoint logger is configured.
         * (therefor the option `-l` has to be used in Shareflex Rules CLI)
         *
         * ```
         * rules.Logger.writeLog();
         *
         * ```
         */
        writeLog: () => void;
    }
    export const LoggerMethods: LoggerMethods;
}
declare module "core/MicrosoftGraph" {
    import ShareflexRules from "ShareflexRules";
    type graphVersion = 'v1.0' | 'beta';
    enum EGraphMethods {
        GET = "GET",
        POST = "POST",
        PATCH = "PATCH",
        PUT = "PUT",
        DELETE = "DELETE"
    }
    interface Headers {
        [key: string]: string;
    }
    export interface GraphServiceOptions {
        /** HTTP method ('GET', 'POST', 'PATCH', 'PUT', 'DELETE') */
        method: EGraphMethods | string;
        /** Microsoft Graph API endpoint (e.g. '/me/sendMail') */
        resource: string;
        /** Name of connection, connection must be type of MicrosoftGraph connection like createMicrosoftGraphAppOnlyConnection [default='MicrosoftGraphBuildInConnection'] */
        connectionId?: string;
        /** Microsoft Graph version 'v1.0' for production or 'beta'  */
        version?: graphVersion;
        /** HTTP headers object with key value pairs (e.g. { 'Accept': 'application/json' }) */
        headers?: Headers;
        /** HTTP request body (as string e.g. JSON.stringify({ graphProperty: 'graphPropertyValue' })) */
        body?: string;
        /** Identifier of Shareflex Retry Policy. Default is 'None'. Note: Retry Policies are currently not supported for MicrosoftGraphConnections. */
        retryPolicyId?: string;
    }
    export interface GraphServiceResult {
        /** HTTP status code of response */
        status: string;
        /** HTTP status text of response */
        statusText: string;
        /** HTTP body of response */
        body: Object | string | any;
        /** Error stack */
        /** API information */
        ApiFn?: any;
        ApiStack?: any;
    }
    export interface GetGraphDocumentResourceUrl {
        listUrl: string;
        /** ID of Sharepoint list item (file) */
        itemId: string | number;
    }
    /**
     * Function to send a http request to a Microsoft Graph resource
     *
     * ```
     *
     * const result = await rules.graphService({
     *   method : String,  // HTTP method ('GET', 'POST', 'PATCH', 'PUT', 'DELETE')
     *   resource : String,  // Microsoft Graph API resource (e.g. '/me/sendMail')
     *   connectionId : String,  // Name of connection, connection must be type of MicrosoftGraph connection like (see rules.ConnectionManager.createMicrosoftGraphAppOnlyConnection ) // REVIEW
     *   version? : String,  // Microsoft Graph version 'v1.0' for production or 'beta' [default='v1.0']
     *   headers? : Object.<String, String>,  // HTTP headers object with key value pairs (e.g. { 'Accept': 'application/json' })
     *   body? : String,  // HTTP request body (as string e.g. JSON.stringify({ graphProperty: 'graphPropertyValue' }))
     * });
     *
     * // Promise.resolve
     * result = Object | String  // HTTP body of response
     *
     * ```
     */
    export function graphService(options: GraphServiceOptions): Promise<GraphServiceResult>;
    export function getGraphDocumentResourceUrl(rules: ShareflexRules, options: GetGraphDocumentResourceUrl): string;
}
declare module "core/Monitoring" {
    interface AppInsightsMethods {
        /**
         * Function to trace a message with severity 'Critical' in Application Insights
         *
         * ```
         *
         * rules.Monitoring.AppInsights.traceCritical(text);
         *
         * text : String | Number | Object | Boolean  // Message to be traced
         * ```
         */
        traceCritical: (text: any) => void;
        /**
         * Function to trace a message with severity 'Error' in Application Insights
         *
         * ```
         *
         * rules.Monitoring.AppInsights.traceError(text);
         *
         * text : String | Number | Object | Boolean  // Message to be traced
         * ```
         */
        traceError: (text: any) => void;
        /**
         * Function to trace a message with severity 'Warning' in Application Insights
         *
         * ```
         *
         * rules.Monitoring.AppInsights.traceWarning(text);
         *
         * text : String | Number | Object | Boolean  // Message to be traced
         * ```
         */
        traceWarning: (text: any) => void;
        /**
         * Function to trace a message with severity 'Information' in Application Insights
         *
         * ```
         *
         * rules.Monitoring.AppInsights.traceInformation(text);
         *
         * text : String | Number | Object | Boolean  // Message to be traced
         * ```
         */
        traceInformation: (text: any) => void;
        /**
         * Function to trace a message with severity 'Verbose' in Application Insights
         *
         * ```
         *
         * rules.Monitoring.AppInsights.traceVerbose(text);
         *
         * text : String | Number | Object | Boolean  // Message to be traced
         * ```
         */
        traceVerbose: (text: any) => void;
        /**
         * Function to trace an exception message in Application Insights
         *
         * ```
         *
         * rules.Monitoring.AppInsights.exception(text);
         *
         * text : String | Number | Object | Boolean  // Message to be traced
         * ```
         */
        exception: (text: any) => void;
    }
    export interface MonitoringObject {
        /** All monitoring method for Azure Application Insights logging */
        AppInsights: AppInsightsMethods;
    }
    export const MonitoringObject: MonitoringObject;
}
declare module "core/PermissionMappings" {
    export interface RoleDefIdMapping {
        /** Principals per permission level Id */
        [roleDefId: number]: (string | number)[];
    }
    export interface RoleNameMapping {
        /** Principals per permission level Title */
        [roleName: string]: (string | number)[];
    }
    export interface RoleTypeMapping {
        /** Principals per permission level Type */
        [roleType: string]: (string | number)[];
    }
    export interface PermissionMappingContent {
        /** all mappings passed in by roleDefId */
        byRoleDefId: RoleDefIdMapping;
        /** all mappings passed in by roleName */
        byRoleName: RoleNameMapping;
        /** all mappings passed in by roleType */
        byRoleType: RoleTypeMapping;
        /** Principals to be removed with all assigned roles */
        removeAllPrincipalRoles: (string | number)[];
    }
    /**
     * Object to manage mapping of principals to role definitions
     */
    export class PermissionMappings {
        private _permissionMappingContent;
        constructor();
        /** All provided mapping information in a well formatted object */
        get content(): PermissionMappingContent;
        /**
         * Add one or more principals (AD Users, AD Groups, SharePoint groups) for a specific Role Definition Id (Id of Permission Level)
         *
         * ```
         *
         * // EXAMPLE:
         *
         * // create Permission Mapping object
         * const permissionMappings = rules.createPermissionMappings();
         *
         * // add Permission mappings
         * permissionMappings.addRoleDefId(1073741826, 23); // add 'Read' permissions for User with Id 23
         * permissionMappings.addRoleDefId(1073741827, [24, 'i:0#.f|membership|bill@contoso.onmicrosoft.com']); // add 'Contribute' permissions for User with Id 24 and for User with LoginName 'i:0#.f|membership|bill@contoso.onmicrosoft.com'
         * permissionMappings.addRoleDefId(1073741830, 'My SharePoint Group'); // add 'Edit' permissions to SharePoint group named 'My SharePoint Group'
         * permissionMappings.addRoleDefId(1073741828, 'c:0o.c|federateddirectoryclaimprovider|549d61db-f0ca-445a-8c51-726db1b542c0'); // add 'Design' permissions to AD group
         *
         * // assign these permissions to an item
         * const result = await rules.assignItemPermissions({
         *   listUrl: myListUrl,
         *   itemId: 42,
         *   permissionMappings,
         * })
         *
         * ```
         */
        addRoleDefId(
        /** Id of SharePoint role definition */ roleDefId: number | string, 
        /** SharePoint principals (Users, Groups) by Id or LoginName */ principals: number | string | (string | number)[]): PermissionMappings;
        /**
         * Add one or more principals (AD Users, AD Groups, SharePoint groups) for a specific Role Definition Name (Name of Permission Level)
         *
         * ```
         *
         * // EXAMPLE:
         *
         * // create Permission Mapping object
         * const permissionMappings = rules.createPermissionMappings();
         *
         * // add Permission mappings
         * permissionMappings.addRoleName('Read', 23); // add 'Read' permissions for User with Id 23
         * permissionMappings.addRoleName('Contribute', [24, 'i:0#.f|membership|bill@contoso.onmicrosoft.com']); // add 'Contribute' permissions for User with Id 24 and for User with LoginName 'i:0#.f|membership|bill@contoso.onmicrosoft.com'
         * permissionMappings.addRoleName('Edit', 'My SharePoint Group'); // add 'Edit' permissions to SharePoint group named 'My SharePoint Group'
         * permissionMappings.addRoleName('Design', 'c:0o.c|federateddirectoryclaimprovider|549d61db-f0ca-445a-8c51-726db1b542c0'); // add 'Design' permissions to AD group
         *
         * // assign these permissions to an item
         * const result = await rules.assignItemPermissions({
         *   listUrl: myListUrl,
         *   itemId: 42,
         *   permissionMappings,
         * })
         *
         * ```
         */
        addRoleName(
        /** Title of SharePoint permission level (e.g. 'Read', 'Vollzugriff', 'Contributor without delete') */ roleName: string, 
        /** SharePoint principals (Users, Groups) by Id or LoginName */ principals: number | string | (string | number)[]): PermissionMappings;
        /**
         * Add one or more principals (AD Users, AD Groups, SharePoint groups) for a specific default Role Definition Type (Type of Permission Level).
         * Valid types are: 'Guest','Reader','Contributor','WebDesigner','Administrator'
         *
         * ```
         *
         * // EXAMPLE:
         *
         * // create Permission Mapping object
         * const permissionMappings = rules.createPermissionMappings();
         *
         * // add Permission mappings
         * permissionMappings.addRoleType('Reader', 23); // add 'Read' permissions for User with Id 23
         * permissionMappings.addRoleType('Contributor', [24, 'i:0#.f|membership|bill@contoso.onmicrosoft.com']); // add 'Contribute' permissions for User with Id 24 and for User with LoginName 'i:0#.f|membership|bill@contoso.onmicrosoft.com'
         * permissionMappings.addRoleType('Administrator', 'My SharePoint Group'); // add 'Full Control' permissions to SharePoint group named 'My SharePoint Group'
         * permissionMappings.addRoleType('WebDesigner', 'c:0o.c|federateddirectoryclaimprovider|549d61db-f0ca-445a-8c51-726db1b542c0'); // add 'Design' permissions to AD group
         *
         * // assign these permissions to an item
         * const result = await rules.assignItemPermissions({
         *   listUrl: myListUrl,
         *   itemId: 42,
         *   permissionMappings,
         * })
         *
         * ```
         */
        addRoleType(
        /** SharePoint default permission level ('Guest','Reader','Contributor','WebDesigner','Administrator') */ roleType: 'Guest' | 'Reader' | 'Contributor' | 'WebDesigner' | 'Administrator', 
        /** SharePoint principals (Users, Groups) by Id or LoginName */ principals: number | string | (string | number)[]): PermissionMappings;
        /**
         * Function to name principals which have to be removed in general (all permissions) from context.
         *
         * ```
         *
         * // EXAMPLE:
         *
         * // create Permission Mapping object
         * const permissionMappings = rules.createPermissionMappings();
         *
         * // add Permission mappings
         * permissionMappings.addRemoveAllPermissions(23); // add User with Id 23 to be removed with all assigned permissions
         * permissionMappings.addRemoveAllPermissions([24, 'i:0#.f|membership|bill@contoso.onmicrosoft.com']); // add User with Id 24 and User with LoginName 'i:0#.f|membership|bill@contoso.onmicrosoft.com' to be removed with all assigned permissions
         * permissionMappings.addRemoveAllPermissions('My SharePoint Group'); // add SharePoint group named 'My SharePoint Group' to be removed with all assigned permissions
         * permissionMappings.addRemoveAllPermissions('c:0o.c|federateddirectoryclaimprovider|549d61db-f0ca-445a-8c51-726db1b542c0'); // add AD group to be removed with all assigned permissions
         *
         * permissionMappings.addRoleType('Reader', 21); // add User with Id 21 to remove his 'Read' permissions
         *
         * // assign these permissions to an item
         * const result = await rules.removeItemPermissions({
         *   listUrl: myListUrl,
         *   itemId: 42,
         *   permissionMappings,
         * })
         *
         * ```
         */
        addRemoveAllPermissions(/** SharePoint principals (Users, Groups) by Id or LoginName */ principals: number | string | (string | number)[]): PermissionMappings;
    }
}
declare module "core/RetryPolicyManager" {
    import ShareflexRules from "ShareflexRules";
    import { RetryPolicyObject } from "core/Bridges";
    export interface RetryPolicyOptions {
        /** Id of the policy - default: auto generated (createRetryPolicy(...)) or BuildInSharePointRetryPolicy (getRetryPolicy(...) and updateRetryPolicy(...))*/
        id?: string;
        /** Type of the policy - required for createRetryPolicy(...) - default: ExponentialRetryPolicy (getRetryPolicy(...) and updateRetryPolicy(...))*/
        type?: string;
        /** Status code to retry - default: [] */
        retryStatusCodes?: Array<string>;
        /** Maximum number to retries - default: 3 */
        maximumNumberOfRetries: number;
        /** Enables or disables retries of HttpRequestException (Client-side timeout, protocol errors, ...) - default: true */
        retryOnHttpRequestException?: boolean;
        /** Enables or disables logging to the monitoring system - default: true */
        logRetriesToMonitoring?: boolean;
        /** Initial wait duration on first retry - default: 20 */
        retryInitialWaitDurationInMs?: number;
        /** Name of the header to use for retry request duration termination - default: '' */
        retryAfterHeaderName?: string;
    }
    export class RetryPolicyManager {
        private _rules;
        constructor(rules: ShareflexRules);
        /**
         * Function to get a retry policy by id.
         *
         * ```
         *
         * const result = rules.RetryPolicyManager.getRetryPolicy(retryPolicyId);
         *
         * retryPolicyId : String;  // Identifier of the retry policy.
         *
         * result = {
         *   "id": String,  //Id of the ShareflexRetryPolicy
         *   "type": String,  //Type of the ShareflexRetryPolicy
         *   "retryOnHttpRequestException": Boolean,  //Enables or disables retries of HttpRequestException (Client-side timeout, ...)
         *   "logRetriesToMonitoring": Boolean,  //Enables or disables logging to the monitoring system
         *   "maximumNumberOfRetries": Number,  //Specifies the maximum number of retries
         *   "retryStatusCodes": Array<String>,  //Specifies status codes on which the app will execute a retry.
         *   "retryInitialWaitDurationInMs":  Number,  //Specifies the starting time for the first retry in milliseconds.
         *   "retryAfterHeaderName": String  //If the server sends a header with this header, the value is used as the wait duration in s.
         * }
         *
         * //EXAMPLE
         * //Get BuildInSharePointRetryPolicy
         * const result = rules.RetryPolicyManager.getRetryPolicy()
         *
         * result = {
         *   "id":"BuildInSharePointRetryPolicy",
         *   "type":"ExponentialRetryPolicy",
         *   "retryOnHttpRequestException":true,
         *   "logRetriesToMonitoring":true,
         *   "maximumNumberOfRetries":3,
         *   "retryStatusCodes":"[\"429\",\"503\"]",
         *   "retryInitialWaitDurationInMs":20,
         *   "retryAfterHeaderName":"Retry-After"
         * }
         * ```
         */
        getRetryPolicy(retryPolicyId: string): RetryPolicyObject;
        /**
         * Function to create a retry policy.
         *
         * ```
         *
         * const myRetryPolicy = rules.RetryPolicyManager.createRetryPolicy({
         *   "id": String,  //Id of the ShareflexRetryPolicy
         *   "type": String,  //Type of the ShareflexRetryPolicy
         *   "retryOnHttpRequestException": Boolean,  //Enables or disables retries of HttpRequestException (Client-side timeout, ...)
         *   "logRetriesToMonitoring": Boolean,  //Enables or disables logging to the monitoring system
         *   "maximumNumberOfRetries": Number,  //Specifies the maximum number of retries
         *   "retryStatusCodes": Array<String>,  //Specifies status codes on which the app will execute a retry.
         *   "retryInitialWaitDurationInMs":  Number,  //Specifies the starting time for the first retry in milliseconds.
         *   "retryAfterHeaderName": String  //If the server sends a header with this header, the value is used as the wait duration in s.
         * })
         *
         * //EXAMPLE
         * //Create a new ExponentialRetryPolicy with exponential wait time scaling. Retry computation: retryInitialWaitDurationInMs^currentRetry
         * const result = rules.RetryPolicyManager.createRetryPolicy({
         *   type: 'ExponentialRetryPolicy',
         * });
         *
         * result = {
         *   "id":"33c04fe1-6580-4674-88af-2e1154ddb3cf",
         *   "type":"ExponentialRetryPolicy",
         *   "retryOnHttpRequestException":true,
         *   "logRetriesToMonitoring":true,
         *   "maximumNumberOfRetries":3,
         *   "retryStatusCodes":"[]",
         *   "retryInitialWaitDurationInMs":20,
         *   "retryAfterHeaderName":""
         * }
         *
         * //EXAMPLE
         * //Create a new AdditiveRetryPolicy with linear wait time scaling. Retry computation: retryInitialWaitDurationInMs + retryInitialWaitDurationInMs * (currentRetry-1)
         * const result = rules.RetryPolicyManager.createRetryPolicy({
         *   type: 'AdditiveRetryPolicy',
         * });
         *
         * result = {
         *   "id":"33c04fe1-6580-4674-88af-2e1154ddb3cf",
         *   "type":"AdditiveRetryPolicy",
         *   "retryOnHttpRequestException":true,
         *   "logRetriesToMonitoring":true,
         *   "maximumNumberOfRetries":3,
         *   "retryStatusCodes":"[]",
         *   "retryInitialWaitDurationInMs":20,
         *   "retryAfterHeaderName":""
         * }
         * ```
         */
        createRetryPolicy(options: RetryPolicyOptions): RetryPolicyObject;
        /**
         * Function to update a retry policy.
         * The update takes effect immediately on all connections that have been linked to the RetryPolicy by using rules.ConnectionManager.setRetryPolicy(...).
         * Before script start, the policy 'BuildInSharePointRetryPolicy' is linked to all SharePoint connections provided by Shareflex.
         *
         * ```
         * const result = rules.RetryPolicyManager.updateRetryPolicy({
         *   "id": String,  //Id of the ShareflexRetryPolicy
         *   "type": String,  //Type of the ShareflexRetryPolicy
         *   "retryOnHttpRequestException": Boolean,  //Enables or disables retries of HttpRequestException (Client-side timeout, ...)
         *   "logRetriesToMonitoring": Boolean,  //Enables or disables logging to the monitoring system
         *   "maximumNumberOfRetries": Number,  //Specifies the maximum number of retries
         *   "retryStatusCodes": Array<String>,  //Specifies status codes on which the app will execute a retry.
         *   "retryInitialWaitDurationInMs":  Number,  //Specifies the starting time for the first retry in milliseconds.
         *   "retryAfterHeaderName": String  //If the server sends a header with this header, the value is used as the wait duration in s.
         * });
         *
         * result = {
         *   "id": String,  //Id of the ShareflexRetryPolicy
         *   "type": String,  //Type of the ShareflexRetryPolicy
         *   "retryOnHttpRequestException": Boolean,  //Enables or disables retries of HttpRequestException (Client-side timeout, ...)
         *   "logRetriesToMonitoring": Boolean,  //Enables or disables logging to the monitoring system
         *   "maximumNumberOfRetries": Number,  //Specifies the maximum number of retries
         *   "retryStatusCodes": Array<String>,  //Specifies status codes on which the app will execute a retry.
         *   "retryInitialWaitDurationInMs":  Number,  //Specifies the starting time for the first retry in milliseconds.
         *   "retryAfterHeaderName": String  //If the server sends a header with this header, the value is used as the wait duration in s.
         * }
         *
         * //EXAMPLE:
         * //Remove 503 (Gateway Timeout) from default SharePoint retry policy for this script
         * const result = rules.RetryPolicyManager.updateRetryPolicy({
         *   retryStatusCodes: ["429"]
         * });
         *
         * result = {
         *   "id":"BuildInSharePointRetryPolicy",
         *   "type":"ExponentialRetryPolicy",
         *   "retryOnHttpRequestException":true,
         *   "logRetriesToMonitoring":true,
         *   "maximumNumberOfRetries":3,
         *   "retryStatusCodes":"[\"429\"]",
         *   "retryInitialWaitDurationInMs":20,
         *   "retryAfterHeaderName":"Retry-After"
         * }
         * ```
         */
        updateRetryPolicy(options: RetryPolicyOptions): RetryPolicyObject;
    }
}
declare module "util/XmlConverter" {
    export interface Attributes {
        [key: string]: string | number | undefined;
    }
    export interface DeclarationAttributes {
        version?: string | number;
        encoding?: 'utf-8' | string;
        standalone?: 'yes' | 'no';
    }
    export interface ElementCompact {
        [key: string]: any;
        _declaration?: {
            _attributes?: DeclarationAttributes;
        };
        _instruction?: {
            [key: string]: string;
        };
        _attributes?: Attributes;
        _cdata?: string;
        _doctype?: string;
        _comment?: string;
        _text?: string | number;
    }
    export interface Element {
        declaration?: {
            attributes?: DeclarationAttributes;
        };
        instruction?: string;
        attributes?: Attributes;
        cdata?: string;
        doctype?: string;
        comment?: string;
        text?: string | number | boolean;
        type?: string;
        name?: string;
        elements?: Array<Element>;
    }
    namespace Options {
        interface XML2JSON extends XML2JS {
            spaces?: number | string;
        }
        interface XML2JS extends ChangingKeyNames, IgnoreOptions {
            compact?: boolean;
            trim?: boolean;
            sanitize?: boolean;
            nativeType?: boolean;
            addParent?: boolean;
            alwaysArray?: boolean | Array<string>;
            alwaysChildren?: boolean;
            instructionHasAttributes?: boolean;
            captureSpacesBetweenElements?: boolean;
            doctypeFn?: (value: string, parentElement: object) => void;
            instructionFn?: (instructionValue: string, instructionName: string, parentElement: string) => void;
            cdataFn?: (value: string, parentElement: object) => void;
            commentFn?: (value: string, parentElement: object) => void;
            textFn?: (value: string, parentElement: object) => void;
            instructionNameFn?: (instructionName: string, instructionValue: string, parentElement: string) => void;
            elementNameFn?: (value: string, parentElement: object) => void;
            attributeNameFn?: (attributeName: string, attributeValue: string, parentElement: string) => void;
            attributeValueFn?: (attributeValue: string, attributeName: string, parentElement: string) => void;
            attributesFn?: (value: string, parentElement: string) => void;
        }
        interface JS2XML extends ChangingKeyNames, IgnoreOptions {
            spaces?: number | string;
            compact?: boolean;
            indentText?: boolean;
            indentCdata?: boolean;
            indentAttributes?: boolean;
            indentInstruction?: boolean;
            fullTagEmptyElement?: boolean;
            noQuotesForNativeAttributes?: boolean;
            doctypeFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
            instructionFn?: (instructionValue: string, instructionName: string, currentElementName: string, currentElementObj: object) => void;
            cdataFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
            commentFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
            textFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
            instructionNameFn?: (instructionName: string, instructionValue: string, currentElementName: string, currentElementObj: object) => void;
            elementNameFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
            attributeNameFn?: (attributeName: string, attributeValue: string, currentElementName: string, currentElementObj: object) => void;
            attributeValueFn?: (attributeValue: string, attributeName: string, currentElementName: string, currentElementObj: object) => void;
            attributesFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
            fullTagEmptyElementFn?: (currentElementName: string, currentElementObj: object) => void;
        }
        interface IgnoreOptions {
            ignoreDeclaration?: boolean;
            ignoreInstruction?: boolean;
            ignoreAttributes?: boolean;
            ignoreComment?: boolean;
            ignoreCdata?: boolean;
            ignoreDoctype?: boolean;
            ignoreText?: boolean;
        }
        interface ChangingKeyNames {
            declarationKey?: string;
            instructionKey?: string;
            attributesKey?: string;
            textKey?: string;
            cdataKey?: string;
            doctypeKey?: string;
            commentKey?: string;
            parentKey?: string;
            typeKey?: string;
            nameKey?: string;
            elementsKey?: string;
        }
    }
    interface XmlConverter {
        js2xml(obj: Element | ElementCompact, options?: Options.JS2XML): string;
        json2xml(json: string, options?: Options.JS2XML): string;
        xml2json(xml: string, options?: Options.XML2JSON): string;
        xml2js(xml: string, options?: Options.XML2JS): Element | ElementCompact;
    }
    export var XmlConverter: XmlConverter;
}
declare module "core/Wrapper" {
    export interface ILogParameter {
        /**
        * Message text
        * */
        text: string;
    }
    export class breWrapper {
        _breBridge: any;
        _internalBre: any;
        action: any;
        /**
         * @param defaults
         */
        constructor(defaults: object, breBridge: any);
        GetExecutionContext(): string;
        /**
         * GetPlaceholderKeys
         */
        GetPlaceholderKeys(): string[];
        /**
         * SetPlaceholder
         */
        SetPlaceholder(name: string, value: string): void;
        /**
         * GetPlaceholder
         */
        GetPlaceholder(name: string): string;
        DebugAction(config: ILogParameter, callback?: Function): Object | void;
        InfoAction(config: ILogParameter, callback?: Function): Object | void;
        WarningAction(config: ILogParameter, callback?: Function): Object | void;
        ErrorAction(config: ILogParameter, callback?: Function): Object | void;
    }
}
declare module "core/Provisioning" {
    import ShareflexRules from "ShareflexRules";
    import { ProvisioningJobInfo, ProvisioningScriptInfo } from "core/Bridges";
    export interface ProvisioningStartScriptOptions {
        /** Name of the Provisioning script */
        scriptName: string;
        /** Provisioning code to execute */
        scriptCode: string;
        /** Id of the SharePoint connection [default=Elevated] */
        connectionId?: string;
        /** Url of the StartWeb [default=SiteCollectionUrl of used connection] */
        startWebUrl?: string;
    }
    export interface ProvisioningGetJobInfoOptions {
        /** Provisioning Trace Id */
        beeTraceId: string;
        /** Id of the SharePoint connection [default=Elevated] */
        connectionId?: string;
    }
    export class Provisioning {
        private _rules;
        constructor(rules: ShareflexRules);
        /**
         * Function to start an asynchronous Provisioning script.
         * Note: Rules does not wait for the Provisioning script to complete. Rules only waits for Provisioning to accept the job.
         *
         * ```
         *
         * const result = await rules.Provisioning.startScript({
         *   scriptName : String,  // Name of the Provisioning script
         *   scriptCode : String,  // Provisioning code to execute
         *   connectionId? : String,  // Id of connection [default=Elevated]
         *   startWebUrl? : String  // Url of the StartWeb [default=SiteCollectionUrl of used connection]
         * })
         *
         * //EXAMPLE
         * const result = await rules.Provisioning.startScript({
         *   scriptName: 'test.xml',
         *   scriptCode: '<?xml version="1.0" encoding="utf-8"?><BeeScript><EnsureWeb name="HelloFromRulesApp"/></BeeScript>'
         * });
         *
         * //Promise.resolve
         * result = {
         *   success: Boolean, // True, if the script started successfully
         *   beeTraceId: String, // Provisioning Trace Id
         *   beeInstanceId: String // Provisioning Instance Id
         *   beeErrorMessage?: String // Potential Provisioning error message
         * }
         *
         * ```
         */
        startScript(options: ProvisioningStartScriptOptions): Promise<ProvisioningScriptInfo>;
        /**
         * Function to get information about a Provisioning job.
         *
         * ```
         *
         * const result = await rules.Provisioning.getJobInfo({
         *   beeTraceId : String,  // BeeTraceId of the script
         *   connectionId? : String,  // Id of connection [default=Elevated]
         * })
         *
         * //EXAMPLE
         * const result = await rules.Provisioning.getJobInfo({
         *   beeTraceId: 'someId'
         * });
         *
         * //Promise.resolve
         * result = {
         *   jobInfoFound : Boolean, // True if a job was found.
         *   jobType?: String, // The Job type
         *   jobId?: String, // The id of the job
         *   beeTraceId?: String, // beeTraceId
         *   beeInstanceId?: String, // beeInstanceId
         *   startTime?: String, // The start time of the script
         *   startWeb?: String, // Url to the startWeb
         *   startUser?: String, // The user that started the script
         *   tenant?: String, // The targeted SharePoint tenant
         *   maxAllocatedMemoryInMB?: Number, // The maximum amount of memory allocated to the script
         *   runTimeInSeconds?: Number, // The run time of the script in seconds
         *   runState?: String, // The current state of the script
         *   terminationMode?: String, // Indicates whether script execution was successful
         *   terminationTime?: String, // The time when the script execution terminated
         *   scriptFullName?: String, // Name of the Provisioning Script
         *   scriptName?: String, // Name of the Provisioning Script
         *   startTimeLocal?: String, // The Local (App) Start Time of the script execution - depends on the timezone of the App
         *   terminationTimeLocal?: String, // The Local (App) Termination Time - depends on the timezone of the App
         *   beeErrorMessage?: String // Contains an error message, if no JobInfo was found.
         * }
         *
         * ```
         */
        getJobInfo(options: ProvisioningGetJobInfoOptions): Promise<ProvisioningJobInfo>;
    }
}
declare module "core/Mail" {
    import ShareflexRules from "ShareflexRules";
    import { SendGraphMailResult, Headers, MailAttachment } from "core/Bridges";
    export interface SendSharePointMailOptions {
        /** Recipient Email address as string or multiple as array of strings (only valid site users!) */
        to: string | string[];
        /** Subject of Email */
        subject: string;
        /** Email content (plain text or HTML) */
        body: string;
        /** Email address of sender (only valid site user) [default=Name of site collection] */
        from?: string;
        /** Carbon copy Email address as string or multiple as array of strings (only valid site users!) */
        cc?: string | string[];
        /** Blind carbon copy Email address as string or multiple as array of strings (only valid site users!) */
        bcc?: string | string[];
        /** Absolute url of context web */
        webUrl?: string;
        /** Key-value object for additional Email headers */
        additionalHeaders?: Headers;
    }
    export interface SendGraphMailOptions {
        /** Id of the Microsoft Graph connection [default=MicrosoftGraphBuildInConnection] */
        connectionId?: string;
        /** Email address of the sender */
        from: string;
        /** Recipients */
        to: string[];
        /** CC-Recipients */
        cc?: string[];
        /** BCC-Recipients */
        bcc?: string[];
        /** Subject of Email */
        subject: string;
        /** Body of Email */
        body?: string;
        /** Content type for the body [default=text] */
        bodyContentType?: 'text' | 'html';
        /** Set to true to save the mail in the sent folder [default=false] */
        saveToSentItems?: boolean;
        /** One or more attachments */
        attachments?: MailAttachments;
    }
    export class Mail {
        private _rules;
        constructor(rules: ShareflexRules);
        /**
         * Send an Email using SharePoint API.
         *
         * _Limitations:_
         * - only internal Emails (valid site users only)
         * - no Attachment support
         *
         * ```
         *
         * await rules.Mail.sendSharePointMail({
         *   to : String|String[],  // Recipient Email address as string or multiple as array of strings (only valid site users!)
         *   subject : String,  // Subject of Email
         *   body? : String,  // Email content (plain text or HTML)
         *   cc? : String|String[],  // CC Recipient Email address as String or multiple as Array of Strings (only valid site users!)
         *   bcc? : String|String[],  // BCC Recipient Email address as String or multiple as Array of Strings (only valid site users!)
         *   from? : String,  // Email address of sender (only valid site user) [default=Name of web <no-reply@sharepointonline.com>]
         *   webUrl? : String,  // Absolute url of context web [default=rules.Context.webUrl]
         *   additionalHeaders? : Object,  // Key-value object for additional Email headers
         * });
         * ```
         * ```
         * //EXAMPLE:
         * const mailBody = `<p>Luke,</p><p>I'm your <i>father</i>!</p>`;
         * await rules.Mail.sendSharePointMail({
         *   to: 'luke@contoso.onmicrosoft.com',
         *   cc: ['leia@contoso.onmicrosoft.com', 'han@contoso.onmicrosoft.com'],
         *   bcc: 'imperator@contoso.onmicrosoft.com',
         *   subject: 'for your information',
         *   body: JSON.stringify(mailBody),
         *   additionalHeaders: { "X-MC-Tags": "StarWars" },
         * })
         *
         * ```
         */
        sendSharePointMail(options: SendSharePointMailOptions): Promise<void>;
        /**
         * Function to send an email via MicrosoftGraph.
         *
         * ```
         *
         * const result = await rules.Mail.sendGraphMail({
         *   from : String,  // Email address of the sender
         *   subject : String,  // Subject of Email
         *   to : String[],  // Recipients
         *   cc? : String[],  // CC-Recipients
         *   bcc? : String[],  // BCC-Recipients
         *   body? : String,  // Body of Email
         *   bodyContentType? : String,  // Content type for the body [default=text]
         *   saveToSentItems? : String,  // Set to true to save the mail in the sent folder [default=false]
         *   connectionId? : String, // Id of connection [default=BuildInMicrosoftGraphConnection]
         *   attachments?: MailAttachments // One or more attachments
         * })
         *
         * //EXAMPLE 1: Send E-Mail without attachment
         * const result = await rules.Mail.sendGraphMail({
         *  from: "john@contoso.de",
         *  to: ["paul@contoso.de"],
         *  subject: "Hello from Shareflex Rules",
         * });
         *
         * //Promise.resolve
         * result = {
         *   success: Boolean, // True, if the mail was sent successfully
         *   errorMessage: String, // Contains an error message when success is false
         * }
         *
         * //EXAMPLE 2: Send E-Mail with attachment
         * const mailAttachments = rules.Mail.createMailAttachments();
         *
         * mailAttachments.addFromSharePoint({
         *   listUrl: "https://imperium.sharepoint.com/sites/deathstar/performancereports",
         *   itemId: 27
         * });
         *
         * const result = await rules.Mail.sendGraphMail({
         *   from: "lord.vader@iamyourfather.gx",
         *   to: ["emperor.palpatine@ilovetherepublic.gx"],
         *   subject: "Hail the emperor!!!",
         *   body: '<b>See attachment</b>',
         *   bodyContentType: 'html',
         *   attachments: mailAttachments
         * });
         *
         * //Promise.resolve
         * result = {
         *   success: Boolean, // True, if the mail was sent successfully
         *   errorMessage: String, // Contains an error message when success is false
         * }
         *
         * ```
         */
        sendGraphMail(options: SendGraphMailOptions): Promise<SendGraphMailResult>;
        /**
         * Some metadata required for attachments is requested from SharePoint to improve usability.
         */
        private requestAttachmentMetaData;
        private sendAttachmentMetaDataRequests;
        createMailAttachments(): MailAttachments;
    }
    interface SharePointMailAttachment extends MailAttachment {
        /** SharePoint Item Id */
        itemId?: string | number;
        /** SharePoint Web-relative Item Path */
        documentPath?: string;
        /** SharePoint Web Url */
        webUrl?: string;
        /** SharePoint List Url */
        listUrl?: string;
        /** A guid to uniquely identify a SharePointMailAttachment */
        id?: string;
    }
    export interface AddByContentOptions {
        /** The file name of the attachment */
        name: string;
        /** The content type of the attachment */
        contentType: string;
        /** The content of the attachment as a Base64 string - required for Base64ContentStringAttachment */
        content?: string;
    }
    export interface AddByUrlOptions {
        /** The file name of the attachment */
        name: string;
        /** The content type of the attachment */
        contentType: string;
        /** The id of the connection to get the attachment [default='Elevated'] */
        connectionId?: string;
        /** The relative or absolute url to get the attachment */
        url: string;
        /** The method for the request to get the attachment [default='GET'] */
        method?: string;
        /** The headers for the request to get the attachment */
        headers?: Object;
        /** A JSON path expression to get the JSON property value. Test here: https://jsonpath.com/ */
        jsonPathExpression?: string;
    }
    export interface AddFromSharePointByIdOptions {
        listUrl: string;
        /** ID of Sharepoint list item (file) */
        itemId: string | number;
        /** The file name of the attachment [default=Name of the file in SharePoint] */
        name?: string;
        /** The content type of the attachment [default=Content-Type of the file in SharePoint] */
        contentType?: string;
        /** The id of the connection to get the attachment [default='Elevated'] */
        connectionId?: string;
        /** The method for the request to get the attachment [default='GET'] */
        method?: string;
        /** The headers for the request to get the attachment */
        headers?: Object;
    }
    export interface AddFromSharePointByUrlOptions {
        webUrl: string;
        documentPath?: string;
        /** The file name of the attachment [default=Name of the file in SharePoint] */
        name?: string;
        /** The content type of the attachment [default=Content-Type of the file in SharePoint] */
        contentType?: string;
        /** The id of the connection to get the attachment [default='Elevated'] */
        connectionId?: string;
        /** The method for the request to get the attachment [default='GET'] */
        method?: string;
        /** The headers for the request to get the attachment */
        headers?: Object;
    }
    export class MailAttachments {
        private _mailAttachments;
        private _rules;
        constructor(rules: ShareflexRules);
        get mailAttachments(): (MailAttachment | SharePointMailAttachment)[];
        /**
         * Function to add a Base64-String as an attachment.
         *
         * ```
         *
         * const mailAttachments = rules.Mail.createMailAttachments();
         * mailAttachments.addByContent({
         *  name: String, // The file name of the attachment
         *  contentType: String, // The content type of the attachment
         *  content: String; // The content of the attachment as a Base64 string
         * });
         *
         * // Result
         * result = MailAttachment[]
         *
         * // EXAMPLE:
         * mailAttachments.addByContent({
         *  name: "hailTheEmperor.txt",
         *  contentType: "text/plain",
         *  content: "SGFpbCB0aGUgZW1wZXJvciEhIQ"
         * });
         *
         * ```
         */
        addByContent(options: AddByContentOptions): MailAttachments;
        /**
         * Function to add an attachment accessible via an url.
         *
         * ```
         *
         * const mailAttachments = rules.Mail.createMailAttachments();
         * mailAttachments.addByUrl({
         *  name: String, // The file name of the attachment
         *  contentType: String, // The content type of the attachment
         *  connectionId?: String, // The id of the connection to get the attachment [default='Elevated']
         *  url: String, // The relative or absolute url to get the attachment
         *  method?: String, // The method for the request to get the attachment [default='GET']
         *  headers?: Object, // The headers for the request to get the attachment
         *  jsonPathExpression?: String // A JSON path expression to get the JSON property value. Test here: https://jsonpath.com/
         * });
         *
         * // Result
         * result = MailAttachment[]
         *
         * // EXAMPLE:
         * mailAttachments.addByUrl({
         *  name: "DeathStar_PerformanceReport_TestAldarin.txt",
         *  connectionId: testApiConnection.id,
         *  contentType: 'text/plain',
         *  url: `https://localhost:7214/api/getbase64injsonattribute`,
         *  jsonPathExpression: 'content'
         * });
         *
         * ```
         */
        addByUrl(options: AddByUrlOptions): MailAttachments;
        /**
         * Function to add an attachment from a SharePoint document library using the listUrl and itemId.
         *
         * ```
         *
         * const mailAttachments = rules.Mail.createMailAttachments();
         * mailAttachments.addFromSharePointById({
         *  listUrl: String, // Absolute Url of list
         *  itemId: String | number // ID of Sharepoint list item (file)
         *  name?: String, // The file name of the attachment
         *  contentType?: String, // The content type of the attachment
         *  connectionId?: String, // The id of the connection to get the attachment [default='Elevated']
         *  method?: String, // The method for the request to get the attachment [default='GET']
         *  headers?: Object, // The headers for the request to get the attachment
         * });
         *
         * // Result
         * result = MailAttachment[]
         *
         * // EXAMPLE:
         * mailAttachments.addFromSharePointById({
         *  listUrl: "https://imperium.sharepoint.com/sites/deathstar/performancereports",
         *  itemId: 27
         * });
         *
         * ```
         */
        addFromSharePointById(options: AddFromSharePointByIdOptions): MailAttachments;
        /**
         * Function to add an attachment from a SharePoint document library using the webUrl and documentUrl.
         *
         * ```
         *
         * const mailAttachments = rules.Mail.createMailAttachments();
         * mailAttachments.addFromSharePointByUrl({
         *  webUrl: String, // Absolute Url of web
         *  documentPath: String, // Web relative url to the file
         *  name?: String, // The file name of the attachment
         *  contentType?: String, // The content type of the attachment
         *  connectionId?: String, // The id of the connection to get the attachment [default='Elevated']
         *  method?: String, // The method for the request to get the attachment [default='GET']
         *  headers?: Object, // The headers for the request to get the attachment
         * });
         *
         * // Result
         * result = MailAttachment[]
         *
         * // EXAMPLE:
         * mailAttachments.addFromSharePointByUrl({
         *  webUrl: "https://imperium.sharepoint.com/sites/deathstar",
         *  documentPath: '/performancereports/tests/test_aldarin.pdf'
         * });
         *
         * ```
         */
        addFromSharePointByUrl(options: AddFromSharePointByUrlOptions): MailAttachments;
    }
}
declare module "core/Document/checkOut" {
    import ShareflexRules from "ShareflexRules";
    export interface CheckOutDocumentOptions {
        /** Absolute web url where the library is located  */
        webUrl: string;
        /** Absolute or relative url to the document */
        documentPath: string;
    }
    /**
     * Function checks out a document
     *
     * @example
     * await rules.checkOutDocument({
     *   webUrl : String, // Absolute web url where the library is located
     *   documentPath: String // Absolute or relative url to the document
     * });
     */
    export function checkOut(rules: ShareflexRules, options: CheckOutDocumentOptions): Promise<string>;
}
declare module "core/Document/undoCheckOut" {
    import ShareflexRules from "ShareflexRules";
    export interface UndoCheckOutDocumentOptions {
        /** Absolute web url where the library is located  */
        webUrl: string;
        /** Absolute or relative url to the document */
        documentPath: string;
    }
    /**
     * Function undoes a check out of a document
     *
     * @example
     * await rules.undoCheckOutDocument({
     *   webUrl : String, // Absolute web url where the library is located
     *   documentPath: String // Absolute or relative url to the document
     * });
     */
    export function undoCheckOut(rules: ShareflexRules, options: UndoCheckOutDocumentOptions): Promise<string>;
}
declare module "core/Document/Document_Helpers" {
    import ShareflexRules from "ShareflexRules";
    interface HandleCommentLengthResult {
        /** Resulting comment (not longer than 1023 chars) */
        comment: string;
        /** If string has been shortened */
        isShortened: boolean;
        /** Message if string has been shortened  */
        message: string;
    }
    interface MoveCopyUtilBodyProperties {
        /** If old and new file should be kept */
        keepBoth: boolean;
        /** If old file should be overwritten */
        overwrite: boolean;
        /** If function can ignore 400 result status */
        skip: boolean;
    }
    interface GetMoveCopyUtilBodyOptions {
        /** Absolute Url of source document (incl. filename) */
        sourcePath: string;
        /** Absolute Url of the new document destination (incl. filename) */
        destinationPath: string;
        /** If Author and Created should be overwritten  */
        resetAuthorAndCreatedOnCopy: boolean;
        /** If old and new file should be kept */
        keepBoth: boolean;
        /** If old file should be overwritten */
        overwrite: boolean;
    }
    interface BuildAndSendMoveCopyRequestOptions {
        /** Shareflex Rules API */
        rules: ShareflexRules;
        /** Name of function which called this function */
        callerFnName: string;
        /** Last part for endpoint `/_api/SP.MoveCopyUtil.` */
        endpoint: 'MoveFileByPath' | 'CopyFileByPath';
        /** Options of the caller function */
        options: {
            siteUrl?: string;
            fileExistsAction?: string;
            sourcePath: string;
            destinationPath: string;
        };
        /** If Author and Created should be overwritten  */
        resetAuthorAndCreatedOnCopy: boolean;
    }
    export function handleCommentLength(comment: string): HandleCommentLengthResult;
    export function getMoveCopyUtilBody(options: GetMoveCopyUtilBodyOptions): string;
    export function getMoveCopyUtilBodyProperties(fileExistsAction: string): MoveCopyUtilBodyProperties;
    export function buildAndSendMoveCopyRequest(options: BuildAndSendMoveCopyRequestOptions): Promise<void>;
}
declare module "core/Document/checkIn" {
    import ShareflexRules from "ShareflexRules";
    export interface CheckInDocumentOptions {
        /** Absolute web url where the library is located  */
        webUrl: string;
        /** Absolute or relative url to the document */
        documentPath: string;
        /** Type of check in 'Minor' | 'Major' | 'Overwrite' [default=Major] */
        checkInType?: 'Minor' | 'Major' | 'Overwrite';
        /** Comment of the check in (max. 1023 chars) */
        comment?: string;
    }
    /**
     * Function checks in a document
     *
     * @example
     * const result = await rules.checkInDocument({
     *   webUrl: String, // Absolute web url where the library is located
     *   documentPath: String, // Absolute or relative url to the document
     *   checkInType?: String, // Type of check in 'Minor' | 'Major' | 'Overwrite' [default=Major]
     *   comment?: string // Comment of the check in (max. 1023 chars)
     * });
     *
     * result : String; // Warning message if comment was shortened
     */
    export function checkIn(rules: ShareflexRules, options: CheckInDocumentOptions): Promise<string>;
}
declare module "core/Document/publish" {
    import ShareflexRules from "ShareflexRules";
    export interface PublishDocumentOptions {
        /** Absolute web url where the library is located  */
        webUrl: string;
        /** Absolute or relative url to the document */
        documentPath: string;
        /** Comment of the check in (max. 1023 chars) */
        comment?: string;
    }
    /**
     * Function publish a document
     *
     * @example
     * const result = await rules.publishDocument({
     *   webUrl : String, // Absolute web url where the library is located
     *   documentPath: String, // Absolute or relative url to the document
     *   comment?: String // Comment of the check in (max. 1023 chars)
     * });
     *
     * result : String; // Warning message if comment was shortened
     */
    export function publish(rules: ShareflexRules, options: PublishDocumentOptions): Promise<string>;
}
declare module "core/Document/unPublish" {
    import ShareflexRules from "ShareflexRules";
    export interface UnPublishDocumentOptions {
        /** Absolute web url where the library is located  */
        webUrl: string;
        /** Absolute or relative url to the document */
        documentPath: string;
        /** Comment of the check in (max. 1023 chars) */
        comment?: string;
    }
    /**
     * Function unpublish a document
     *
     * @example
     * const result = await rules.unpublishDocument({
     *   webUrl : String, // Absolute web url where the library is located
     *   documentPath: String, // Absolute or relative url to the document
     *   comment?: String // Comment of the check in (max. 1023 chars)
     * });
     *
     * result : String; // Warning message if comment was shortened
     *
     */
    export function unpublish(rules: ShareflexRules, options: UnPublishDocumentOptions): Promise<string>;
}
declare module "core/Document/copy" {
    import ShareflexRules from "ShareflexRules";
    export interface CopyDocumentOptions {
        /** Url of source document */
        sourcePath: string;
        /** Url of the new document destination (incl. Document name) */
        destinationPath: string;
        /** What to do if file does already exist in destination ('skip', 'overwrite', 'keepBoth') [default=skip] */
        fileExistsAction?: 'skip' | 'overwrite' | 'keepBoth';
        /** Keep `Author` and `Created` timestamp for destination file or reset on copy [default=false]. Supported in same web only. */
        copyAuthorAndCreated?: boolean;
        /** Absolute url of site collection to override execution context */
        siteUrl?: string;
    }
    /**
     * Function to copy a SharePoint document.
     *
     * ```
     *
     * await rules.copyDocument({
     *   sourcePath : String,  // Absolute Url of source document (incl. filename)
     *   destinationPath : String,  // Absolute Url of the new document destination (incl. filename)
     *   fileExistsAction? : String,  // What to do if file does already exist in destination ('skip', 'overwrite', 'keepBoth') [default=skip]
     *   copyAuthorAndCreated? : Boolean,  // Keep `Author` and `Created` timestamp for destination file or reset on copy [default=false]. Supported in same web only.
     *   siteUrl? : String,  // Absolute url of site collection to override execution context
     * });
     *
     * ```
     */
    export function copy(rules: ShareflexRules, options: CopyDocumentOptions): Promise<void>;
}
declare module "core/Document/move" {
    import ShareflexRules from "ShareflexRules";
    export interface MoveDocumentOptions {
        /** Url of source document */
        sourcePath: string;
        /** Url of the new document destination (incl. Document name) */
        destinationPath: string;
        /** What to do if file does already exist in destination ('skip', 'overwrite', 'keepBoth') [default=skip] */
        fileExistsAction?: 'skip' | 'overwrite' | 'keepBoth';
        /** Keep `Author` and `Created` timestamp for destination file or reset on copy [default=true]. Supported in same web only. */
        copyAuthorAndCreated?: boolean;
        /** Absolute url of site collection to override execution context */
        siteUrl?: string;
    }
    /**
     * Function to move a SharePoint document.
     *
     * ```
     *
     * await rules.moveDocument({
     *   sourcePath : String,  // Absolute Url of source document (incl. filename)
     *   destinationPath : String,  // Absolute Url of the new document destination (incl. filename)
     *   fileExistsAction? : String,  // What to do if file does already exist in destination ('skip', 'overwrite', 'keepBoth') [default=skip]
     *   copyAuthorAndCreated? : Boolean,  // Keep `Author` and `Created` timestamp for destination file or reset on move [default=true]. Supported in same web only.
     *   siteUrl? : String,  // Absolute url of site collection to override execution context
     * });
     *
     * ```
     */
    export function move(rules: ShareflexRules, options: MoveDocumentOptions): Promise<void>;
}
declare module "core/Document/getBinaryFileContent" {
    import ShareflexRules from "ShareflexRules";
    export interface GetBinaryFileContentByIdOptions {
        listUrl: string;
        /** ID of Sharepoint list item (file) */
        itemId: string | number;
    }
    export interface GetBinaryFileContentByUrlOptions {
        listUrl: string;
        documentPath: string;
    }
    export function getBinaryFileContentById(rules: ShareflexRules, options: GetBinaryFileContentByIdOptions): Promise<Uint8Array>;
    export function getBinaryFileContentByUrl(rules: ShareflexRules, options: GetBinaryFileContentByUrlOptions): Promise<Uint8Array>;
}
declare module "core/Document/convertDocument" {
    import ShareflexRules from "ShareflexRules";
    import { HttpResult } from "core/Bridges";
    export interface ConvertDocumentByResourceUrlOptions {
        /** Microsoft Graph API resource (e.g. '/me/sendMail') */
        resource: string;
        /** Name of connection, connection must be type of MicrosoftGraph connection like (see rules.ConnectionManager.createMicrosoftGraphAppOnlyConnection(options) ) */
        connectionId?: string;
        /** Microsoft Graph version 'v1.0' for production or 'beta' [default='v1.0'] */
        version?: string;
    }
    export interface ConvertDocumentByIdOptions {
        /** Absolute Url of list */
        listUrl: string;
        /** ID of Sharepoint list item (file) */
        itemId: string | number;
        /** Name of connection, connection must be type of MicrosoftGraph connection like (see rules.ConnectionManager.createMicrosoftGraphAppOnlyConnection(options) ) */
        connectionId?: string;
        /** Microsoft Graph version 'v1.0' for production or 'beta' [default='v1.0'] */
        version?: string;
    }
    export function convertDocumentByResourceUrl(rules: ShareflexRules, options: ConvertDocumentByResourceUrlOptions): Promise<HttpResult>;
    export function convertDocumentById(rules: ShareflexRules, options: ConvertDocumentByIdOptions): Promise<HttpResult>;
}
declare module "core/Document/Document_Index" {
    export * from "core/Document/checkOut";
    export * from "core/Document/undoCheckOut";
    export * from "core/Document/checkIn";
    export * from "core/Document/publish";
    export * from "core/Document/unPublish";
    export * from "core/Document/copy";
    export * from "core/Document/move";
    export * from "core/Document/getBinaryFileContent";
    export * from "core/Document/convertDocument";
}
declare module "core/Blob" {
    export interface BlobOptions {
        /** The content type of the blob */
        type: string;
    }
    export interface CreateBlobOptions {
        /** The array of the blob */
        array: ArrayBuffer;
        /** The content type of the blob */
        type: string;
    }
    export class Blob {
        type: string;
        private readonly _arrayBuffer;
        constructor(array: ArrayBuffer, options: BlobOptions);
        /**
         * Function to get the saved ArrayBuffer.
         */
        arraybuffer(): ArrayBuffer;
    }
}
declare module "core/FormData" {
    import { Blob } from "core/Blob";
    export interface MultiPartFormDataSegment {
        /** The name of the segment */
        name: string;
        /** An ArrayBuffer storing the binary content */
        content: ArrayBuffer;
        /** The content type of the file contained in the content */
        contentType: string;
        /** The file name of the file contained in the content*/
        fileName: string;
    }
    export class FormData {
        private _segments;
        constructor();
        /**
         * Method to add a blob to the FormData class.
         *
         * ```
         *
         * const formData = new FormData();
         * formData.append(
         *   name : String,  // The name of the parameter
         *   value : Blob,  // Binary data object
         *   fileName : String,  // The name of the file
         * );
         *
         * // EXAMPLE:
         * const fileBytesForFile = await rules.getBinaryFileContentById({
         *   listUrl: 'https://contoso.sharepoint.com/sites/contosoweb/contosodoclib',
         *   itemId: 40
         * });
         *
         * const blob = new Blob(fileBytesForFile, { type: "application/pdf" });
         * const formData = new FormData();
         * formData.append("file", blob, "file1.pdf");
         *
         * ```
         */
        append(name: string, value: Blob, fileName: string): void;
    }
}
declare module "ShareflexRules" {
    import { BatchOperations, ChangesetResult } from "core/BatchOperations";
    import { ConnectionManager, CreateMicrosoftGraphAppOnlyConnectionOptions } from "core/ConnectionManager";
    import { FieldObject, ItemFields } from "core/ItemFields";
    import * as Logger from "core/Logger";
    import { GetGraphDocumentResourceUrl, GraphServiceOptions, GraphServiceResult } from "core/MicrosoftGraph";
    import * as Monitoring from "core/Monitoring";
    import { PermissionMappings } from "core/PermissionMappings";
    import { RetryPolicyManager } from "core/RetryPolicyManager";
    import * as Utils from "core/Utils";
    import { breWrapper } from "core/Wrapper";
    import { Headers, HttpResult } from "core/Bridges";
    import { Provisioning } from "core/Provisioning";
    import { Mail, SendSharePointMailOptions } from "core/Mail";
    import * as Document from "core/Document/Document_Index";
    import { Blob, CreateBlobOptions } from "core/Blob";
    import { FormData } from "core/FormData";
    export { Blob } from "core/Blob";
    export { FormData } from "core/FormData";
    export { BatchOperations, ChangesetResult, ExecuteResult, OperationResult } from "core/BatchOperations";
    export { ConnectionObject, FileSystemObject, Headers, HttpResult } from "core/Bridges";
    export { ItemFields } from "core/ItemFields";
    export { RegisterTestCaseOptions, TestCaseOptions, TestCaseResult, TestCleanupOptions, TestEngineHelpers, TestEngineOptions, TestPreparationOptions } from "core/TestEngine";
    export { RestRequestFieldsObject, GetUrlPropertiesResult } from "core/Utils";
    export { CheckOutDocumentOptions, UndoCheckOutDocumentOptions, CheckInDocumentOptions, PublishDocumentOptions, UnPublishDocumentOptions, CopyDocumentOptions, MoveDocumentOptions, ConvertDocumentByResourceUrlOptions, ConvertDocumentByIdOptions } from "core/Document/Document_Index";
    export { WaitInterval, WaitUntilOptions, WaitUntilCheckFnOptions } from "core/Utils/WaitUntil";
    /**
     * @deprecated
     */
    export interface Fields {
        [fieldName: string]: string | any;
    }
    export enum ERestMethods {
        GET = "GET",
        POST = "POST"
    }
    export interface RestServiceOptions {
        /** Absolute web url of endpoint */
        url: string;
        /** SharePoint REST API endpoint (e.g. '/_api/web/lists') */
        endpoint?: string;
        /** HTTP method ('GET' or 'POST') */
        method: ERestMethods | string;
        /** HTTP headers object with key value pairs (e.g. { 'Accept': 'application/json;odata=nometadata' }) */
        headers?: Headers;
        /** HTTP request body (as string e.g. JSON.stringify({ __metadata: { type: 'SP.ListNameItem'} })) */
        body?: string;
        /** Identifier of SharePoint connection */
        connectionId?: string;
        /** Identifier of Shareflex Retry Policy. Overrides the configured RetryPolicy for the SharePointConnection for this request. Note: User-specified retry policies are currently not supported.*/
        retryPolicyId?: string;
        /** Enables or disables the Shareflex Retry Policy for this request only [default=true] */
        enableRetryPolicy?: boolean;
    }
    export interface RestServiceResult {
        /** HTTP status code of response */
        status: string;
        /** HTTP status text of response */
        statusText: string;
        /** HTTP body of response */
        body: Object | string | any;
        /** Error stack */
        /** API information */
        ApiFn?: any;
        ApiStack?: any;
    }
    export interface HttpServiceOptions {
        /** Identifier of Generic HTTP connection */
        connectionId: string;
        /** Absolute url of endpoint */
        url: string;
        /** HTTP method (e.g. 'GET' or 'POST') */
        method: ERestMethods | string;
        /** HTTP headers object with key value pairs (e.g. { 'Accept': 'application/json;odata=nometadata' }) */
        headers?: Headers;
        /** HTTP request body */
        body?: string;
        /** Identifier of Shareflex Retry Policy. Default: Uses the retry policy from the connection. Note: Generic HttpConnection do not have a retry policy by default.*/
        retryPolicyId?: string;
        /** Enables or disables the Shareflex Retry Policy for this request [default=true] */
        enableRetryPolicy?: boolean;
        /** Enable if Rules should search the body for secrets and decrypt them before sending the request [default=false] */
        hasSecretsInBody?: boolean;
    }
    export interface GetListByIdOptions {
        /** Absolute web url of list containing web */
        webUrl: string;
        /** List GUID */
        listId: string;
        /** List properties [SPList Properties] to return (comma separated) */
        select?: string | string[];
    }
    export interface SiteUserUserIdObject {
        NameId: string;
        NameIdIssuer: string;
    }
    export interface SiteUser {
        Id?: number;
        IsHiddenInUI?: boolean;
        LoginName?: string;
        Title?: string;
        PrincipalType?: number;
        Email?: string;
        Expiration?: string;
        IsEmailAuthenticationGuestUser?: boolean;
        IsShareByEmailGuestUser?: boolean;
        IsSiteAdmin?: boolean;
        UserId?: SiteUserUserIdObject;
        UserPrincipalName?: string;
    }
    export interface GetUsersOptions {
        /** Filter by single LoginName of SharePoint User */
        userLoginName?: string;
        /** Filter by single Id of SharePoint User */
        userId?: number;
        /** Filter by single EMail address of SharePoint User */
        userEmail?: string;
        /** SharePoint REST API filter query (e.g. 'IsSiteAdmin eq true') to limit the result */
        filter?: string;
        /** SharePoint User properties [SPUser Properties] to return (comma separated) */
        select?: string;
        /** Absolute site collection url [default=rules.Event.siteUrl] */
        siteUrl?: string;
    }
    export interface SiteGroup {
        Id?: number;
        IsHiddenInUI?: boolean;
        LoginName?: string;
        Title?: string;
        PrincipalType?: number;
        AllowMembersEditMembership?: boolean;
        AllowRequestToJoinLeave?: boolean;
        AutoAcceptRequestToJoinLeave?: boolean;
        Description?: string;
        OnlyAllowMembersViewMembership?: boolean;
        OwnerTitle?: string;
        RequestToJoinLeaveEmailSetting?: string;
    }
    export interface GetGroupsOptions {
        /** Filter by Name of SharePoint Group */
        groupName?: string;
        /** SharePoint REST API filter query (e.g. 'IsSiteAdmin eq true') to limit the result */
        filter?: string;
        /** SharePoint group properties [SPGroup Properties] to return (comma separated) */
        select?: string | string[];
        /** Absolute site collection url */
        siteUrl?: string;
    }
    export interface CreateGroupOptions {
        /** Name of new SharePoint group */
        Title: string;
        /** Flag to handle permission for viewing the group members */
        OnlyAllowMembersViewMembership?: boolean;
        /** Description of new SharePoint group */
        Description?: string;
        /** Login for user or SharePoint group */
        Owner?: string;
        /** Absolute site collection url */
        siteUrl?: string;
        /** Check existence of the group before creating [default=false] */
        preCheck?: boolean;
    }
    export interface DeleteGroupOptions {
        /** Name of SharePoint group to be deleted */
        title: string;
        /** Absolute site collection url */
        siteUrl?: string;
    }
    export interface ValidateUpdateItem {
        /** Information about the list and folder where the item should be created */
        listItemCreateInfo?: {
            /** Object about URL of the folder path where the item should be created */
            FolderPath: {
                /** Absolute URL of the folder where the item should be created */
                DecodedUrl: string;
            };
            /** Type of item to create. For more information, see FileSystemObjectType (e.g. 0 = item, 1 = folder) */
            UnderlyingObjectType: number;
        };
        /** Array of field names and values to set on the item */
        formValues: FieldObject[];
        /** If no new version should be created by this writing process */
        bNewDocumentUpdate: boolean;
        /** Optional check in comment */
        checkInComment?: string;
    }
    export interface UpdateFields {
        /** object with key (internal fieldName) value pairs (e.g. { Title: 'my custom Title' }) */
        [fieldName: string]: string | number | any;
    }
    export interface UpdateItemOptions {
        /** Absolute list url */
        listUrl: string;
        /** ID of Sharepoint list item to be updated */
        itemId: number | string;
        /** Fields object containing all fields and their values to be set */
        fields: UpdateFields | ItemFields;
        /** Trigger a Shareflex rules list event [default=false] */
        eventsActivated?: boolean;
        /** Create a new version by updating the item [default=true] */
        incrementVersion?: boolean;
    }
    export interface CreateItemOptions {
        /** Absolute list url */
        listUrl: string;
        /** Fields object containing all fields and their values to be set */
        fields: ItemFields | any;
        /** List relative path to folder */
        folderPath?: string;
        /** Ensure existence of folderPath, create missing parts [default=false] */
        ensureFolderPath?: boolean;
        /** Trigger a Shareflex rules list event [default=false]*/
        eventsActivated?: boolean;
    }
    export interface CopyItemFieldValuesOptions {
        /** Absolute list url of source list */
        sourceListUrl: string;
        /** ID of source list item */
        sourceItemId: number | string;
        /** Absolute list url of destination list [default=options.sourceListUrl] */
        targetListUrl?: string;
        /** ID of destination list item */
        targetItemId: number | string;
        /** Names of fields to be copied [default: all matching fields] */
        fields?: string | string[];
        /** Mapping object of source field name as key and target field names as value to copy values to fields with different name (e.g. `{Title: 'Title_Backup', Id: 'MyItemId'}` )
         *
         * Can also be used to also copy hidden fields without losing generic field determination due to options.fields (e.g. `{myHiddenField: 'myHiddenField'}` ) */
        mappings?: {
            [sourceFieldName: string]: string;
        };
        /** Names of fields to be skipped when copying all matching fields */
        skipFields?: string | string[];
        /** If empty source item fields should be skipped when copying [default=false] */
        skipEmptySourceFields?: boolean;
        /** Retry copying of field values without fields that cause an exception on the first attempt [default=false] */
        skipFailedFields?: boolean;
        /** Configured regional setting (LCID) of target web [default=LCID of Rules execution context] */
        lcid?: string | number;
        /** Trigger a Shareflex Rules list event on target item [default=false] */
        eventsActivated?: boolean;
        /** Create a new version by updating the target item [default=true] */
        incrementVersion?: boolean;
    }
    export interface FailedFields {
        /** Field that caused an Exception on update */
        [fieldName: string]: Utils.ValidateUpdateItemFieldResult;
    }
    export interface RenameGroupOptions {
        /** Current title of SharePoint group */
        Title: string;
        /** New title for SharePoint group */
        newTitle: string;
        /** Absolute site collection url */
        siteUrl?: string;
    }
    export interface AddGroupMemberOptions {
        /** SharePoint group name */
        groupName: string;
        /** User loginName */
        userLoginName: string;
        /** Absolute site collection url */
        siteUrl?: string;
    }
    export interface AddGroupMembersOptions {
        /** SharePoint group name */
        groupName: string;
        /** User LoginName as String or multiple Loginnames as Array */
        userLoginNames: string | string[];
        /** Absolute site collection url [default=rules.Event.siteUrl] */
        siteUrl?: string;
    }
    export interface RemoveGroupMembersOptions {
        /** SharePoint group name */
        groupName: string;
        /** User LoginName as String or multiple Loginnames as Array */
        userLoginNames: string | string[];
        /** Absolute site collection url [default=rules.Event.siteUrl] */
        siteUrl?: string;
    }
    export interface ItemEventContextInformation {
        /** Id of current list item */
        itemId: string;
        /** Id of current list */
        listId: string;
        /** Title of current list */
        listTitle: string;
        /** Absolute url of current list */
        listUrl: string;
        /** Absolute url of current site collection */
        siteUrl: string;
        /** Type of triggered event (e.g. 'ItemAdded', 'ItemUpdated', 'ItemDeleting') */
        type: string;
        /** Display name of user triggering the event execution */
        userDisplayName: string;
        /** Id of user triggering the event execution */
        userId: number;
        /** LCID of user triggering the event execution */
        userLCID: number;
        /** LoginName of user triggering the event execution */
        userLoginName: string;
        /** LCID of current web */
        webLCID: number;
        /** Absolute url of current web */
        webUrl: string;
    }
    export interface ContextInformation {
        /** Absolute url of current Shareflex Core web */
        bafWebUrl: string;
        /** Type of environment */
        environment: 'CLI' | 'Remote Event Receiver' | 'WebJob';
        /** Type of triggered event (e.g. 'ItemAdded', 'ItemUpdated', 'ItemDeleting') */
        eventType?: 'ItemAdded' | 'ItemUpdated' | 'ItemDeleting';
        /** Type of execution context */
        executionContext: 'CLI' | 'Remote Event Receiver' | 'WebJob';
        /** Url of tenant (e.g. 'https://contoso.sharepoint.com') */
        hostUrl: string;
        /** Id of current list */
        listId?: string;
        /** Id of current list item */
        listItemId?: string;
        /** Title of current list */
        listTitle?: string;
        /** Absolute url of current list */
        listUrl: string;
        /** Absolute url of MasterBAF web */
        masterBafWebUrl: string;
        /** Absolute url of Shareflex Online App */
        shareflexAppServiceUrl: string;
        /** Site Collection relative url of current web */
        siteRelativeWebUrl: string;
        /** Absolute url of current site collection */
        siteUrl: string;
        /** Display name of user triggering the event execution */
        userDisplayName?: string;
        /** Id of user triggering the event execution */
        userId?: number;
        /** LCID of user triggering the event execution */
        userLCID?: number;
        /** LoginName of user triggering the event execution */
        userLoginName?: string;
        /** Build no. of Shareflex Rules */
        version: string;
        /** LCID of current web */
        webLCID?: number;
        /** Absolute url of current web */
        webUrl: string;
        /** Type of AppEnvironment [default for CLI: Dedicated]*/
        appEnvironment: 'Dedicated' | 'Shared';
    }
    export interface DeleteFolderOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder as string or array of strings for multiple folders */
        folderPath: string | string[];
        /** If content of folder has to be deleted recursively first [default=false] */
        clearFolderFirst?: boolean;
        /** If folder has to be moved to recycle bin [default=false] */
        recycle?: boolean;
    }
    export interface ClearFolderOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder as string or array of strings for multiple folders */
        folderPath: string | string[];
        /** If deleted child elements have to be moved to recycle bin [default=false] */
        recycle?: boolean;
    }
    export interface EnsureFolderOptions {
        /** Absolute list url */
        listUrl: string;
        /** Name of folder */
        folderName: string;
        /** Folder path if folder not in list root */
        subFolderPath?: string;
        /** Specific content type id [default='0x0120'] */
        contentTypeId?: string;
        /** Fields object containing all fields and their values to be set */
        fields?: ItemFields;
    }
    export interface CreateFolderOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder */
        folderPath: string;
        /** Ensure existence of the whole folderPath structures, create missing parts [default=false] */
        ensureFolderPath?: boolean;
        /**
         * @deprecated Please use option `folderPath` instead of `subFolderPath`/`folderName`
         *
         * Name of new folder */
        folderName?: string;
        /**
         * @deprecated Please use option `folderPath` instead of `subFolderPath`/`folderName`
         *
         * Folder path if folder not in list root */
        subFolderPath?: string;
        /** Specific content type id [default='0x0120'] */
        contentTypeId?: string;
        /** Fields object containing all fields and their values to be set */
        fields?: ItemFields;
        /** Check existence of the folder before creating [default=false] */
        preCheck?: boolean;
    }
    export interface UpdateFolderOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder */
        folderPath: string;
        /** Fields object containing all fields and their values to be set */
        fields: ItemFields;
        /** Create a new version by updating the folder [default=true] */
        incrementVersion?: boolean;
    }
    export interface GetWebsOptions {
        /** Absolute web url to search subwebs in */
        webUrl: string;
        /** Limit request to specific web properties as comma separated list or array (e.g. 'Title,Url,RegionalSettings/LocaleId' or ['Title','Url','RegionalSettings/LocaleId']) */
        props?: string | string[];
        /** SharePoint REST API filter query (e.g. 'IsMultilingual eq true') to limit the result */
        filter?: string;
        /** SharePoint REST API order fields (e.g. 'Title desc') to sort the result */
        order?: string;
        /** Limit amount of returned items (max. 5000) */
        rowLimit?: number;
    }
    export interface GetWebOptions {
        /** Absolute web url */
        webUrl: string;
        /** Comma separated list of properties (e.g. 'Title,Id') */
        select?: string;
    }
    export interface GetWebByUrlOptions {
        /** Absolute web url */
        webUrl: string;
        /** Comma separated list of properties (e.g. 'Title,Id') */
        select?: string | string[];
    }
    export interface DeleteItemOptions {
        /** Absolute list url */
        listUrl: string;
        /** ID of Sharepoint list item to be deleted */
        itemId: string | number;
        /** If items has to be moved to recycle bin [default=false] */
        recycle?: boolean;
        /** Trigger a Shareflex rules list event [default=false]*/
        eventsActivated?: boolean;
    }
    export interface GetFolderByUrlOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder */
        folderPath: string;
        /** Comma separated list of properties (e.g. 'Title,Id') */
        select?: string | string[];
    }
    export interface GetListFieldsOptions {
        /** Absolute list url */
        listUrl: string;
        /** SharePoint REST API filter query (e.g. StaticName eq 'Status') to limit the result */
        filter?: string;
        /** Comma separated list of properties (e.g. 'StaticName,Choices') */
        select?: string;
        /** SharePoint REST API order fields (e.g. 'Title desc') to sort the result [default=Title] */
        order?: string;
    }
    export interface GetListsOptions {
        /** Absolute web url to get lists from */
        webUrl: string;
        /** Limit request to specific list properties as comma separated list or array (e.g. 'Title,Id,RootFolder/ServerRelativeUrl' or ['Title','Id','RootFolder/ServerRelativeUrl']) */
        props?: string | string[];
        /** SharePoint REST API filter query (e.g. BaseType eq 0) to limit the result */
        filter?: string;
        /** SharePoint REST API order fields (e.g. 'Title desc') to sort the result */
        order?: string;
        /** Limit amount of returned items (max. 5000) */
        rowLimit?: number;
    }
    export interface GetListOptions {
        /** Absolute list url */
        listUrl: string;
        /** Comma separated list of properties (e.g. 'Title,Id') */
        select?: string;
    }
    export interface GetListByNameOptions {
        /** Absolute web url */
        webUrl: string;
        /** Name of list */
        listName: string;
        /** Comma separated list of properties (e.g. 'Title,Id') */
        select?: string | string[];
    }
    export interface GetListByUrlOptions {
        /** Absolute list url */
        listUrl: string;
        /** Comma separated list of properties (e.g. 'Title,Id') */
        select?: string | string[];
    }
    export interface CreateListOptions {
        /** Absolute web url */
        webUrl: string;
        /** Name of new list */
        name: string;
        /** Description of new list */
        description?: string;
        /** Allow list content types */
        contentTypesEnabled?: boolean;
        /** Show list in quicklaunch navigation */
        quickLaunchEnabled?: boolean;
        /** Allow folder creation in list */
        enableFolderCreation?: boolean;
        /** Activate version control for list items */
        enableVersioning?: boolean;
        /** Check existence of the list before creating [default=false] */
        preCheck?: boolean;
    }
    export interface GetWebContentTypesOptions {
        /** Absolute web url */
        webUrl: string;
        /** SharePoint REST API filter query (e.g. Name eq 'Item') to limit the result */
        filter?: string;
        /** Comma separated list of properties (e.g. 'StringId,Name') */
        select?: string | string[];
    }
    export interface AddListContentTypeOptions {
        /** Absolute list url */
        listUrl: string;
        /** ID of content type to be added to the list */
        contentTypeId: string;
    }
    export interface RemoveListContentTypeOptions {
        /** Absolute list url */
        listUrl: string;
        /** ID of content type to be added to the list */
        contentTypeId: string;
    }
    export interface GetListContentTypesOptions {
        /** Absolute list url */
        listUrl: string;
        /** SharePoint REST API filter query (e.g. Name eq 'Item') to limit the result */
        filter?: string;
        /** Comma separated list of properties (e.g. 'StringId,Name') */
        select?: string;
    }
    export interface GetRoleDefinitionsOptions {
        /** SharePoint default permission level ('Guest','Reader','Contributor','WebDesigner','Administrator') */
        roleType?: 'Guest' | 'Reader' | 'Contributor' | 'WebDesigner' | 'Administrator';
        /** SharePoint custom permission level (e.g. 'Contributor without delete') */
        roleName?: string;
        /** Absolute site collection url */
        siteUrl?: string;
    }
    export interface RolePrincipalMapping {
        /** ID of SharePoint principal (User, Group, SP Group) in hidden users list */
        principalId: number;
        /** ID of SharePoint role definition  */
        roleDefId: number;
    }
    export interface RoleMultiPrincipalMapping {
        /** ID of SharePoint principal (User, Group, SP Group) in hidden users list */
        principalId: number | number[];
        /** ID of SharePoint role definition  */
        roleDefId: number;
    }
    export interface AssignItemPermissionsOptions {
        /** Absolute list url */
        listUrl: string;
        /** ID of Sharepoint list item */
        itemId: number | string;
        /** PermissionMappings object */
        permissionMappings: PermissionMappings;
    }
    export interface AssignFolderPermissionsOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder */
        folderPath: string;
        /** PermissionMappings object */
        permissionMappings: PermissionMappings;
    }
    export interface AssignListPermissionsOptions {
        /** Absolute list url */
        listUrl: string;
        /** PermissionMappings object */
        permissionMappings: PermissionMappings;
    }
    export interface AssignWebPermissionsOptions {
        /** Absolute web url */
        webUrl: string;
        /** PermissionMappings object */
        permissionMappings: PermissionMappings;
    }
    export interface BatchedOperationsResult {
        /** If all operations were successful */
        successful: boolean;
        /** failed operations */
        failedOperations?: ChangesetResult[];
    }
    export interface GetItemPermissionsOptions {
        /** Absolute list url */
        listUrl: string;
        /** ID of Sharepoint list item */
        itemId: number | string;
        /** ID of SharePoint principal */
        principalId?: number | number[];
    }
    export interface ElementPermissions {
        /** Object with all permitted principals (users) */
        roleAssignments: {
            /** ID of SharePoint principal as key of this object */
            [principalId: string]: {
                /** IDs of all assigned role definitions */
                roleDefIds: number[];
                /** Names of all assigned role definitions */
                roleDefNames: string[];
            };
        };
        /** If element has unique permissions */
        hasUniqueRoleAssignments: boolean;
    }
    export interface GetFolderPermissionsOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder */
        folderPath: string;
        /** ID of SharePoint principal */
        principalId?: number | number[];
    }
    export interface GetListPermissionsOptions {
        /** Absolute list url */
        listUrl: string;
        /** ID of SharePoint principal */
        principalId?: number | number[];
    }
    export interface GetWebPermissionsOptions {
        /** Absolute web url */
        webUrl: string;
        /** ID of SharePoint principal */
        principalId?: number | number[];
    }
    export interface RemoveRoleMultiPrincipalMapping {
        /** ID of SharePoint principal (User, Group, SP Group) in hidden users list */
        principalId: number | number[];
        /** ID of SharePoint role definition  */
        roleDefId?: number;
        /** Required if 'roleDefId' is not provided */
        removeAllRoleDefIds?: boolean;
    }
    export interface RemoveItemPermissionsOptions {
        /** Absolute list url */
        listUrl: string;
        /** ID of Sharepoint list item */
        itemId: number | string;
        /** PermissionMapping object */
        permissionMappings: PermissionMappings;
    }
    export interface RemoveFolderPermissionsOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder */
        folderPath: string;
        /** PermissionMapping object */
        permissionMappings: PermissionMappings;
    }
    export interface RemoveListPermissionsOptions {
        /** Absolute list url */
        listUrl: string;
        /** PermissionMapping object */
        permissionMappings: PermissionMappings;
    }
    export interface RemoveWebPermissionsOptions {
        /** Absolute web url */
        webUrl: string;
        /** PermissionMapping object */
        permissionMappings: PermissionMappings;
    }
    export interface BreakItemRoleInheritanceOptions {
        /** Absolute list url */
        listUrl: string;
        /** ID of Sharepoint list item */
        itemId: string | number;
        /** Remove current item permissions [default=false] */
        clear?: boolean;
    }
    export interface ResetItemRoleInheritanceOptions {
        /** Absolute list url */
        listUrl: string;
        /** ID of Sharepoint list item*/
        itemId: string | number;
    }
    export interface BreakFolderRoleInheritanceOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder */
        folderPath: string;
        /** Remove current folder permissions [default=false] */
        clear?: boolean;
    }
    export interface ResetFolderRoleInheritanceOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path to folder */
        folderPath: string;
    }
    export interface BreakListRoleInheritanceOptions {
        /** Absolute list url */
        listUrl: string;
        /** Remove current list permissions [default=false] */
        clear?: boolean;
    }
    export interface ResetListRoleInheritanceOptions {
        /** Absolute list url */
        listUrl: string;
    }
    export interface BreakWebRoleInheritanceOptions {
        /** Absolute Url of web */
        webUrl: string;
        /** Remove current web permissions [default=false] */
        clear?: boolean;
    }
    export interface ResetWebRoleInheritanceOptions {
        /** Absolute Url of web */
        webUrl: string;
    }
    export interface GenerateGUIDOptions {
        /** Pass custom format like '####-####' where all '#' are replaced by random hexadecimal number (0..f) */
        format?: string;
        /** All characters in upper case [default=false] */
        upperCase?: boolean;
        /** GUID without hyphens [default=false] */
        withoutHyphens?: boolean;
    }
    export interface BatchChangeset {
        /** URL of list */
        listUrl: string;
        /** Kind of Changeset operation (POST = create, MERGE = update, DELETE = delete) */
        method: string;
        /** ID of Sharepoint item (required for method MERGE and DELETE) */
        itemId?: string;
        /** Individual 'Accept' value for Operation */
        accept?: string;
        /** Individual 'Content-Type' value for operation */
        contentType?: string;
        /** Individual 'If-Match' value for operation */
        ifMatch?: string;
        /** Fields as fields object (required for method CREATE and UPDATE) or key value pairs (required for method POST and MERGE) */
        fields?: ItemFields | any;
        /** List relative path to folder (supported by method CREATE) */
        folderPath?: string;
    }
    export interface GetItemsOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative path of folder to get items from (not recursive) */
        folderPath?: string;
        /** Comma separated list or array of internal field names (e.g. 'Title,ID,Author/Name' or ['Title','ID','Author/Name']) */
        fields?: string | string[];
        /** SharePoint REST API filter query (e.g. 'Id eq 1') to limit the result */
        filter?: string;
        /** SharePoint REST API order fields (e.g. 'Title desc') to sort the result */
        order?: string;
        /** Limit amount of returned items (max. 5000) */
        rowLimit?: number;
    }
    export interface GetItemByIdOptions {
        /** Absolute list url */
        listUrl: string;
        /** ID of Sharepoint list item */
        itemId: string | number;
        /** Comma separated list or array of internal field names (e.g. 'Title,Author/Name' or ['Title','Author/Name']) */
        fields?: string | string[];
    }
    export interface GetItemByUrlOptions {
        /** Absolute list url */
        listUrl: string;
        /** List relative url of file */
        filePath: string;
        /** Comma separated list or array of internal field names (e.g. 'Title,AuthorId' or ['Title','AuthorId']). No expand fields supported! */
        fields?: string | string[];
    }
    export interface ProcessItemsCallbackOptions {
        /** Shareflex Rules object */
        rules: ShareflexRules;
        /** Absolute url of processed list */
        listUrl: string;
        /** Array of items to be processed */
        items: any[];
        /** Custom options passed by `rules.processItems({callbackOptions})` */
        options: any;
    }
    export interface ProcessItemsOptions {
        /** Url of requested list */
        listUrl: string;
        /** Comma separated list or array of internal field names (e.g. 'Title,ID,Author/Name' or ['Title','ID','Author/Name']) */
        fields?: string | string[];
        /** SharePoint REST API filter query (e.g. 'Id eq 1') to limit the result */
        filter?: string;
        /** SharePoint REST API order fields (e.g. 'Title desc') to sort the result */
        order?: string;
        /** Limit the amount of items per request [default=100] */
        packageSize?: number;
        /** Function to handle the result of items */
        callback(options: ProcessItemsCallbackOptions): Promise<any>;
        /** Options for callback function */
        callbackOptions?: object | string;
        /** Perform callback sync [default=false] */
        callbackSync?: boolean;
        /** Limit amount of processed items */
        processedItemsLimit?: number;
    }
    export interface WebRegionalSettings {
        AdjustHijriDays: number;
        AlternateCalendarType: number;
        AM: string;
        CalendarType: number;
        Collation: number;
        CollationLCID: number;
        DateFormat: number;
        DateSeparator: string;
        DecimalSeparator: string;
        DigitGrouping: string;
        FirstDayOfWeek: number;
        FirstWeekOfYear: number;
        IsEastAsia: boolean;
        IsRightToLeft: boolean;
        IsUIRightToLeft: boolean;
        ListSeparator: string;
        LocaleId: number;
        NegativeSign: string;
        NegNumberMode: number;
        PM: string;
        PositiveSign: string;
        ShowWeeks: boolean;
        ThousandSeparator: string;
        Time24: boolean;
        TimeMarkerPosition: number;
        TimeSeparator: string;
        WorkDayEndHour: number;
        WorkDays: number;
        WorkDayStartHour: number;
    }
    export interface CreateFileOptions {
        listUrl: string;
        fileName: string;
        content: string;
        folderPath?: string;
        ensureFolderPath?: boolean;
        overwrite?: boolean;
        encoding?: string;
    }
    export interface GetFileContentOptions {
        listUrl: string;
        filePath?: string;
        /** ID of Sharepoint list item (file) */
        itemId?: string | number;
        /** Encoding of the content (e.g. "Base64") */
        encoding?: string;
    }
    export interface StreamEndpointInformation {
        /** Identifier of connection */
        connectionId: string;
        /** Absolute url of stream endpoint */
        url: string;
        /** Request Method */
        method: string;
        /** Request Header object */
        headers?: Object;
        /** Request Body string */
        body?: string;
    }
    export interface StreamSourceEndpointInformation extends StreamEndpointInformation {
        /** Encoding of the content (e.g. "Base64") */
        encoding?: string;
    }
    export interface CopyDocumentAsStreamOptions {
        /** Object to describe stream source */
        source: StreamSourceEndpointInformation;
        /** Object to describe destination source */
        destination: StreamEndpointInformation;
    }
    export interface GetLocalDateTimeByWebOptions {
        /** Absolute web url of list containing web */
        webUrl: string;
        /** UTC-0 DateTime in ISO format to convert to local DateTime of web timezone (e.g. '2021-06-20T22:00:00' or ['2021-06-20T00:00:00', '2021-06-10']) */
        utcDateTime: string | string[];
    }
    export interface GetUtcDateTimeByWebOptions {
        /** Absolute web url of list containing web */
        webUrl: string;
        /** Local DateTime of web timezone in ISO format to convert to UTC-0 DateTime (e.g. '2021-12-31' or ['2021-06-20T00:00:00Z', '2021-06-10']) */
        localDateTime: string | string[];
    }
    export default class ShareflexRules {
        /**
         * Current version number of Shareflex Rules JS API
         *
         * ```
         *
         * const result = rules.APIVersion;
         *
         * result = String  // version number (e.g. '1.0.0')
         *
         * ```
         */
        APIVersion: string;
        /**
         * Object with context information about triggered Shareflex Rules event.
         *
         * ```
         *
         * const result = rules.Event;
         *
         * result = {
         *   itemId : String,  // Id of current list item
         *   listId : String,  // Id of current list
         *   listTitle : String, // Title of current list
         *   listUrl : String, // Absolute url of current list
         *   siteUrl : String,  // Absolute url of current site collection
         *   type : String,  // Type of triggered event (e.g. 'ItemAdded', 'ItemUpdated', 'ItemDeleting')
         *   userDisplayName : String,  // Display name of user triggering the event execution
         *   userId : Number,  // Id of user triggering the event execution
         *   userLCID : Number,  // LCID of user triggering the event execution
         *   userLoginName : String,  // LoginName of user triggering the event execution
         *   webLCID : Number,  // LCID of current web
         *   webUrl : String,  // Absolute url of current web
         * }
         *
         * ```
         */
        Event: ItemEventContextInformation;
        /**
         * Object with context information of execution which are available on script start
         *
         * Optional properties differ dependent on type of execution context (Remote Event Receiver vs. WebJob vs. CLI)
         *
         * ```
         *
         * const result = rules.Context;
         *
         * result = {
         *   bafWebUrl : String,  // Absolute url of current Shareflex Core web
         *   environment : 'CLI' | 'Remote Event Receiver' | 'WebJob',  // Type of environment
         *   eventType? : 'ItemAdded' | 'ItemUpdated' | 'ItemDeleting',  // Type of triggered event (e.g. 'ItemAdded', 'ItemUpdated', 'ItemDeleting')
         *   executionContext : 'CLI' | 'Remote Event Receiver' | 'WebJob',  // Type of execution context
         *   hostUrl : String,  // Url of tenant (e.g. 'https://contoso.sharepoint.com')
         *   listId? : String,  // Id of current list
         *   listItemId? : String,  // Id of current list item
         *   listTitle? : String,  // Title of current list
         *   listUrl : String,  // Absolute url of current list
         *   masterBafWebUrl : String,  // Absolute url of MasterBAF web
         *   shareflexAppServiceUrl : String,  // Absolute url of Shareflex Online App
         *   siteUrl : String,  // Absolute url of current site collection
         *   userDisplayName? : String,  // Display name of user triggering the event execution
         *   userId?: number,  // Id of user triggering the event execution
         *   userLCID?: number,  // LCID of user triggering the event execution
         *   userLoginName? : String,  // LoginName of user triggering the event execution
         *   version : String,  // Build no. of Shareflex Rules
         *   webLCID?: number,  // LCID of current web
         *   webUrl : String,  // Absolute url of current web
         * }
         * ```
         *
         */
        Context: ContextInformation;
        /**
         * Generic object to enable storing temporary information in Shareflex Rules object.
         * Can be used in custom code to provide data across one script.
         */
        CurrentState: object;
        /**
         * Methods to configure logging.
         */
        Logger: Logger.LoggerMethods;
        /**
         * Object for monitoring purposes.
         */
        Monitoring: Monitoring.MonitoringObject;
        /**
         * Object with helpful utility methods.
         */
        Utils: Utils.UtilMethods;
        /**
         * Shareflex Rules Connection Manager
         */
        ConnectionManager: ConnectionManager;
        /**
         * Shareflex Rules Retry Manager
         */
        RetryPolicyManager: RetryPolicyManager;
        /**
         * Methods to utilize Shareflex Provisioning
         */
        Provisioning: Provisioning;
        /**
         * Methods regarding Emails
         */
        Mail: Mail;
        /** Internal object to store runtime information and make them available for other internal components */
        private _cache;
        /**
         * @deprecated Request digest is handled internally now. No need to be determined by script.
         * Contains value of last requested digest by this.getRequestDigest() */
        private xRequestDigest;
        /** Contains value of current Shareflex Rules connection [default='Elevated] */
        private connectionId;
        /** Names of placeholders object keys that can not be updated by user via this.setPlaceholder() */
        private protectedPlaceholderKeys;
        constructor(defaults: object | breWrapper);
        /**
         * Function to add additional keys (passed in be rules configuration object) to global placeholders object
         *
         * Relevant in case of inline object passed in by initializing ShareflexRules class (C# can only handle imported config objects)
         */
        private ensureAdditionalPlaceholdersKeys;
        /**
         * Function to build an item fields object.
         * LCID can be provided to transform language specific values (e.g. date, number). Otherwise LCID '1033' is used.
         *
         * ```
         * // EXAMPLE:
         * const updateFields = rules.createItemFields("1033"); // init ItemFields object
         * updateFields.setNumber('MyNumberField', 27 ); // add field values to be set
         *
         * // method chaining is also possible to manipulate the ItemFields object:
         * updateFields
         *   .setText('MyTextField', 'foo' )
         *   .setDateTime('MyDateField', new Date() );
         *
         * // use fields object to update an item:
         * const result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields,
         *   incrementVersion: false
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyNumberField": 27,
         *   "MyTextField": "foo",
         *   "MyDateField": "2020-08-18T11:57:03.057Z"
         * }
         * ```
         *
         */
        createItemFields(/** Locale ID */ lcid?: string | number): ItemFields;
        /**
         * @deprecated Use `rules.createItemFields()` instead
         *
         * Function to build an item fields object.
         * LCID can be provided to transform language specific values (e.g. date, number). Otherwise LocaleId of context web is used.
         *
         * ```
         * // Example:
         * let updateFields = rules.createItemFields("1033");
         *
         * updateFields.addNumber('MyNumberField', 27 );
         * updateFields.addText('MyTextField', 'foo' );
         * updateFields.addDateTime('MyDateField', new Date() );
         *
         * // use fields object to update an item:
         * let result = rules.updateItem({
         *   listUrl: myListUrl,
         *   itemId: 2,
         *   fields: updateFields,
         *   incrementVersion: false
         * })
         *
         * // get complete fields object as key value JSON:
         * let myUpdateFields = updateFields.get();
         * myUpdateFields: {
         *   "MyNumberField": 27,
         *   "MyTextField": "foo",
         *   "MyDateField": "2020-08-18T11:57:03.057Z"
         * }
         * ```
         *
         */
        createItemFieldsObj(/** Locale ID */ lcid?: string | number): ItemFields;
        /**
         * @deprecated Renamed to rules.Utils.createLogText()
         *
         * Class to handle the logging text for multiline text field (e.g. 'Log')
         */
        createLogText(): Utils.LogText;
        /**
         * Function to build a BatchOperations object.
         *
         * All batch operations have to address the same SharePoint web.
         *
         * ```
         *
         * const batchOperations = rules.createBatchOperations(webUrl);
         *
         * webUrl : String  // Absolute Url of context web for batching
         *
         *
         * // EXAMPLE:
         * const batchOperations = rules.createBatchOperations(myWebUrl);
         *
         * // create demo data operations
         * for (let i = 0; i < 500; i++) {
         *   const fields = rules.createItemFields().setText(`Title`, `new title ${i}`);
         *   batchOperations.addCreateItem({
         *     listUrl: `${myWebUrl}/Lists/SampleList`,
         *     folderPath: `/subFolder1/subfolder12`,
         *     fields,
         *    });
         *  }
         *
         * // process batched operations
         * const result = await batchOperations.execute({
         *   eventsActivated? : Boolean,  // If Shareflex Rules list event execution has to be triggered for each operation [default=false]
         *   maxParallelRequests? : Number,  // Amount of max. parallel running batch requests during processing [default=1]
         *   returnOperationResults? : Boolean,  // If to also return results of all processed operations [default=false]
         * });
         *
         * // Promise.resolve
         * result = {
         *   status : String,  // HTTP status code of batch request
         *   result : Object | String,  // Operation response
         *   failedOperations : ChangesetResult[],  // Array of all operations that has not been successfully processed (no 2xx status code)
         *   operationResults? : {  // Object with result of all operations that have been batched in this request (grouped by operationId)
         *     [operationId: string] : ChangesetResult,  // Result object of operation
         *   },
         *   values?: {  // Result objects of all GET-requests (for GET-only-Batches) grouped by operationId
         *     operationId : Object,  // GET-Request response object
         *   },
         * }
         *
         * ChangesetResult = {
         *   status : String,  // HTTP status code of batch request
         *   result : Object | String,  // Operation response
         *   operation : BatchChangeset,  // Request body of changeset that has been batched
         *   operationIndex : Number,  // Index of operation element in batchOperation object
         *   operationId? : String,  // Operation identifier
         * }
         * ```
         *
         */
        createBatchOperations(/** Absolute Url of context web for batching */ webUrl: string): BatchOperations;
        /**
         * Function to create a FormData object.
         *
         * ```
         *
         * const formData = rules.createFormData();
         *
         * //EXAMPLE
         * const formData = rules.createFormData();
         *
         * ```
         *
         */
        createFormData(): FormData;
        /**
         * Function to create a Blob object.
         *
         * ```
         *
         * const blob = rules.createBlob({
         *   array : ArrayBuffer,  // A binary array
         *   type : String  // The content type of the blob
         * });
         *
         * //EXAMPLE
         * const formData = rules.createBlob({
         *   array: aUint8Array,
         *   type: 'application/pdf'
         * });
         *
         * ```
         *
         */
        createBlob(options: CreateBlobOptions): Blob;
        /**
         * Function to build a Connection Manager object.
         *
         * ```
         *
         * const connectionManager = rules.createConnectionManager();
         *
         * //EXAMPLE:
         * const connectionManager = rules.createConnectionManager();
         * const myConnection
         *
         * ```
         */
        /**
         * @deprecated Renamed to rules.ConnectionManager.createMicrosoftGraphAppOnlyConnection()
         *
         * Function to initialize a Microsoft Graph AppOnly Connection.
         *
         * ```
         *
         * const myConnection = rules.createMicrosoftGraphAppOnlyConnection({
         *   tenant : String,  // Name (e.g. 'contoso.onmicrosoft.com') or Id of tenant
         *   clientId : String,  // Application Client Id
         *   encryptedClientSecret : String,  // Encrypted Application Client Secret (see documentation)
         *   id? : String,  // Id of connection
         * })
         *
         * //EXAMPLE
         * const myConnection = rules.createMicrosoftGraphAppOnlyConnection({
         *   tenant: 'e428de6f-f400-45aa-bf32-8cf1ee7a4e17',
         *   clientId: 'bd0c615a-6f55-4d5d-9c60-19c1e191155f',
         *   encryptedClientSecret: myEncryptedSecret,
         * });
         * const result = await rules.graphService({
         *   method : 'GET',
         *   resource : '/users',
         *   connectionId : myConnection.Id
         * });
         * ```
         */
        createMicrosoftGraphAppOnlyConnection(options: CreateMicrosoftGraphAppOnlyConnectionOptions): import("core/Bridges").ConnectionObject;
        /**
         * Function to build an object for Permission mappings.
         *
         * ```
         * // EXAMPLE:
         *
         * // create Permission Mapping object
         * const permissionMappings = rules.createPermissionMappings();
         *
         * // add Permission mappings
         * permissionMappings.addRoleType('Reader', 23); // add 'Read' permissions for User with Id 23
         * permissionMappings.addRoleDefId(1073741827, [24, 'i:0#.f|membership|bill@contoso.onmicrosoft.com']); // add 'Contribute' permissions for User with Id 24 and for User with LoginName 'i:0#.f|membership|bill@contoso.onmicrosoft.com'
         * permissionMappings.addRoleName('Edit', 'My SharePoint Group'); // add 'Edit' permissions to SharePoint group named 'My SharePoint Group'
         *
         * // assign these permissions to an item
         * const result = await rules.assignItemPermissions({
         *   listUrl: myListUrl,
         *   itemId: 42,
         *   permissionMappings: permissionMappings,
         * })
         * ```
         *
         */
        createPermissionMappings(): PermissionMappings;
        /**
         * get the execution context event, timerjob or CLI
         */
        private get ExecutionContext();
        /**
         * Function to get the name of all available Shareflex Rules placeholders
         *
         * ```
         * const placeholderKeys = rules.getPlaceholderKeys();
         *
         * placeholderKeys = String[]  // All available placeholder keys
         *
         * ```
         */
        getPlaceholderKeys(): string[];
        /**
         * Function to set the value of a specific Shareflex Rules placeholder.
         * Create the placeholder if it does not already exist.
         *
         * ```
         * rules.setPlaceholder("myPlaceholder", "my placeholder value");
         *
         * ```
         */
        setPlaceholder(name: string, value: string): any;
        /**
         * Function to get the value of a specific Shareflex Rules placeholder.
         *
         * ```
         * const result = rules.getPlaceholder("myPlaceholder");
         *
         * result = String  // Value of placeholder
         *
         * ```
         */
        getPlaceholder(name: string): string;
        /**
         * Function to switch the connection (execution context) of the appended Shareflex Rules API function call.
         *
         * Connection has to be a SharePoint connection.
         *
         * ```
         * // Example to update event item with a specific impersonation
         * await rules.setContext(connectionId).updateEventItem(fields);
         *
         * connectionId = String  // Id of the specific Shareflex Rules connection
         *
         * ```
         */
        setContext(connectionId: string): ShareflexRules;
        /**
         * Function to map C# placeholders object to this.Event object
         */
        private getEventData;
        /**
         * Function to map C# placeholders object to this.Context object
         */
        private getContextData;
        /**
         * @deprecated replaced by optimized getContextData()
         *
         * Function to map C# placeholders object into this.Context object
         */
        private getContextInfo;
        /**
         * Function to convert a UTC-0 DateTime to a DateTime in Timezone of a specific SharePoint web.
         *
         * Required for DateTime values which have been read from SharePoint items
         * (due to SharePoint stores DateTimes converted to UTC-0).
         *
         * DateTime (UTC-0 value) is passed in ISO format. Can be of type string or an array of strings.
         *
         * ```
         * const result = await rules.getLocalDateTimeByWeb({
         *   webUrl : String,  // Absolute web url of list containing web
         *   utcDateTime : String | String[],  // UTC-0 DateTime string or array of strings in ISO format to convert to web local time (e.g. '2021-12-31' or ['2021-06-20T00:00:00', '2021-06-10'])
         * });
         *
         * // Promise.resolve
         * result = String | String[]  // DateTime timestamp converted to TimeZone of web
         *
         *
         * //EXAMPLE : copy DateTime values to another item
         *
         * // handle multiple DateTime values (of same web) at once
         * const contractItem = await rules.getItemById({
         *   listUrl: `${contractWebUrl}/Lists/Contracts`,
         *   itemId: contractItemId,
         *   fields: 'myDateTimeField, myDateField',
         * });
         * // convert to web local timestamps
         * const [myDateTimeFieldValue, myDateFieldValue] = await rules.getLocalDateTimeByWeb({
         *   webUrl: contractWebUrl,
         *   utcDateTime: [contractItem.myDateTimeField, contractItem.myDateField],
         * });
         *
         * // handle single DateTime value
         * const documentItem = await rules.getItemById({
         *   listUrl: `${documentsWebUrl}/Documents`,
         *   itemId: documentItemId,
         *   fields: 'Modified',
         * });
         * // convert to web local timestamp
         * const modifiedValue = await rules.getLocalDateTimeByWeb({
         *   webUrl: documentsWebUrl,
         *   utcDateTime: documentItem.Modified,
         * });
         *
         * // use converted DateTime values to set fields correctly
         * await rules.updateItem({
         *   listUrl: targetListUrl,
         *   itemId: targetItemId,
         *   fields: rules
         *     .createItemFields()
         *     .setDateTime('CopyOfMyDateTimeField', new Date(myDateTimeFieldValue))
         *     .setDateTime('CopyOfMyDateField', new Date(myDateFieldValue))
         *     .setDateTime('CopyOfModified', new Date(modifiedValue)),
         * });
         * ```
         */
        getLocalDateTimeByWeb(options: GetLocalDateTimeByWebOptions): Promise<any>;
        /**
         * Function to convert a DateTime from web Timezone into a UTC-0 DateTime.
         *
         * For example, helpful for being able to filter for meaningful date values using REST API
         * (due to SharePoint stores DateTimes converted to UTC-0).
         *
         * DateTime (web local time) is passed in ISO format. Can be of type string or an array of strings.
         *
         * ```
         * const result = await rules.getUtcDateTimeByWeb({
         *   webUrl : String,  // Absolute web url of list containing web
         *   localDateTime : String | String[],  // Local DateTime of web timezone in ISO format to convert to UTC-0 DateTime (e.g. '2021-12-31' or ['2021-06-20T00:00:00Z', '2021-06-10'])
         * });
         *
         * // Promise.resolve
         * result = String | String[]  // DateTime timestamp converted to UTC-0 time
         *
         *
         * //EXAMPLE : GET request filtered by DateTime
         * // set up time visible for user (e.g. in browser)
         * const myDate = '2020-09-15';
         *
         * // get UTC-0 equivalent time
         * const myUtcDateTime = await rules.getUtcDateTimeByWeb({
         *   webUrl: myWebUrl,
         *   localDateTime: myDate,
         * });
         *
         * // get items with exactly this 'myDate' timestamp
         * const items = await rules.getItems({
         *   listUrl: myListUrl,
         *   fields: 'Id, myDateField',
         *   filter: `myDateField eq '${myUtcDateTime}'`,
         * });
         * ```
         */
        getUtcDateTimeByWeb(options: GetUtcDateTimeByWebOptions): Promise<any>;
        private getResultValue;
        private handleItemFields;
        /**
         * @deprecated Use `Utils.getListUrlProperties()` instead
         *
         * Function returns an object with web, list urls and there list name
         *
         * ```
         *
         * const result = rules.getUrlProperties(listUrl);
         *
         * listUrl = String  // Absolute list url
         *
         * result = {
         *   listUrl : String,  // Absolute list url
         *   listName : String,  // Name of list
         *   webUrl : String,  // Absolute web url
         *   webName : String,  // Name of web
         *   entityTypeName : String,  // Value of internal property 'EntityTypeName' of list
         * }
         *
         * ```
         */
        getUrlProperties(listUrl: string): Utils.GetUrlPropertiesResult;
        /**
         * Function to log a message with logLevel 'Debug' for configured Shareflex Rules loggers
         *
         * ```
         * rules.logDebug("my debug message");
         *
         * ```
         */
        logDebug(...messages: unknown[]): void;
        /**
         * Function to log a message with logLevel 'Information' for configured Shareflex Rules loggers
         *
         * ```
         * rules.logInfo('my info message');
         *
         * //EXAMPLE: log multiple lines
         * rules.logInfo('log message A', 'log message B', 'and so on...');
         *
         * const logLines = ['line one', 'line two', 'line three'];
         * rules.logInfo(...logLines);
         *
         * ```
         */
        logInfo(...messages: unknown[]): void;
        /**
         * Function to log a message with logLevel 'Warning' for configured Shareflex Rules loggers
         *
         * ```
         * rules.logWarning("my warning message");
         *
         * ```
         */
        logWarning(...messages: unknown[]): void;
        /**
         * Function to log a message with logLevel 'Error' for configured Shareflex Rules loggers
         *
         * ```
         * rules.logError("my error message");
         *
         * ```
         * ```
         *
         * //EXAMPLE: usage with normal try-catch
         * try {
         *   //...
         * } catch(error) {
         *   rules.logError(error);
         * }
         *
         * //EXAMPLE: usage by Promise.catch() like for list event main function
         * main().catch(rules.logError);
         *
         * async function main() {
         *   //...
         * }
         * ```
         */
        logError(...messages: (unknown | Error)[]): void;
        /**
         * @deprecated see `cancelSharePointEvent()` instead
         *
         * Function to stop the script execution.
         *
         * ```
         * rules.cancelExecution(msg);
         *
         * msg = String  // Message for reason of script cancellation
         *
         * // Example to prevent item deleting
         * if (rules.Event.type === 'ItemDeleting') {
         *   rules.cancelExecution("Deleting item is forbidden!");
         * }
         *
         * ```
         */
        cancelExecution(msg: string): Error;
        /**
         * Function to send signal to stop SharePoint event execution.
         * A synchronous event will be canceled after the current script has been finished (e.g. ItemDeleting).
         *
         * **NOTE:** This function will not stop the execution of the current JavaScript logic.
         *
         * ```
         * rules.cancelSharePointEvent(msg);
         *
         * msg = String  // Message for reason of script cancellation
         *
         * // Example to prevent item deleting
         * if (rules.Event.type === 'ItemDeleting') {
         *   return rules.cancelSharePointEvent("Deleting item is forbidden!");
         * }
         *
         * ```
         */
        cancelSharePointEvent(msg: string): boolean;
        /**
         * Function to send a http request to a service endpoint (not SharePoint)
         *
         * ```
         *
         * const result = await rules.httpService({
         *   connectionId : String,  // Identifier of Generic HTTP connection
         *   url : String,  // Absolute url of endpoint
         *   method : String,  // HTTP method (e.g. 'GET' or 'POST')
         *   headers? : Object.<String, String>,  // HTTP headers object with key value pairs (e.g. { 'Accept': 'application/json;odata=nometadata' })
         *   body? : String,  // HTTP request body
         *   retryPolicyId?: String // Id of the RetryPolicy to overwrite the connection's RetryPolicy for this request [default: '']
         *   enableRetryPolicy?: Boolean // Enables or disables the retryPolicy for this request [default: false]
         *   hasSecretsInBody?: boolean // Enables or disables resolving secrets in the request body before sending the request
         * });
         *
         * // Promise.resolve
         * result = {
         *   status : String,  // HTTP status code of response
         *   statusText: String,  // HTTP status text of response
         *   body : Object | String,  // HTTP body of response
         *   headers : Object.<String, String> // HTTP header of response
         * }
         *
         * ```
         */
        httpService(options: HttpServiceOptions): Promise<any>;
        /**
         * Function to send a http request to a SharePoint REST endpoint
         *
         * ```
         *
         * const result = await rules.restService({
         *   url : String,  // Absolute web url of endpoint
         *   endpoint?: String,  // SharePoint REST API endpoint (e.g. '/_api/web/lists')
         *   method : String,  // HTTP method ('GET' or 'POST')
         *   headers? : Object.<String, String>,  // HTTP headers object with key value pairs (e.g. { 'Accept': 'application/json;odata=nometadata' })
         *   body? : String,  // HTTP request body (as string e.g. JSON.stringify({ __metadata: { type: 'SP.ListNameItem'} }))
         *   connectionId? : String,  // Identifier of SharePoint connection to be used for the request [default:'Elevated']
         *   retryPolicyId?: String, // Id of the RetryPolicy to overwrite the connection's RetryPolicy for this request
         *   enableRetryPolicy?: Boolean // Enables or disables the retryPolicy for this request [default: true]
         * });
         *
         * // Promise.resolve
         * result = {
         *   status : String,  // HTTP status code of response
         *   statusText: String,  // HTTP status text of response
         *   body : Object | String,  // HTTP body of response
         *   headers : Object.<String, String> // HTTP header of response
         * }
         *
         * ```
         */
        restService(options: RestServiceOptions): Promise<RestServiceResult>;
        /**
         * Function to send a http request to a Microsoft Graph resource
         *
         * ```
         *
         * const result = await rules.graphService({
         *   method : String,  // HTTP method ('GET', 'POST', 'PATCH', 'PUT', 'DELETE')
         *   resource : String,  // Microsoft Graph API resource (e.g. '/me/sendMail')
         *   connectionId : String,  // Name of connection, connection must be type of MicrosoftGraph connection like (see rules.ConnectionManager.createMicrosoftGraphAppOnlyConnection(options) )
         *   version? : String,  // Microsoft Graph version 'v1.0' for production or 'beta' [default='v1.0']
         *   headers? : Object.<String, String>,  // HTTP headers object with key value pairs (e.g. { 'Accept': 'application/json' })
         *   body? : String,  // HTTP request body (as string e.g. JSON.stringify({ graphProperty: 'graphPropertyValue' }))
         * });
         *
         * // Promise.resolve
         * result = {
         *   status : String,  // HTTP status code of response
         *   statusText: String,  // HTTP status text of response
         *   body : Object | String,  // HTTP body of response
         * }
         *
         * //EXAMPLE
         * // set up connection to Microsoft Graph
         * const myConnection = rules.ConnectionManager.createMicrosoftGraphAppOnlyConnection({
         *   tenant: 'e428de6f-f400-45aa-bf32-8cf1ee7a4e17',
         *   clientId: 'bd0c615a-6f55-4d5d-9c60-19c1e191155f',
         *   encryptedClientSecret: myEncryptedSecret,
         * });
         * // request https://graph.microsoft.com/v1.0/users
         * const result = await rules.graphService({
         *   method : 'GET',
         *   resource : '/users',
         *   connectionId : myConnection.Id
         * });
    
         * ```
         */
        graphService(options: GraphServiceOptions): Promise<GraphServiceResult>;
        /**
         *
         * This function returns a Microsoft Graph resource url for a document from a listUrl and itemId.
         *
         * ```
         *
         * const result = rules.getGraphDocumentResourceUrl({
         *    listUrl: String, // Absolute Url to the document library
         *    itemId: String | Number // ItemId of the SharePoint item
         * });
         *
         * result = String // Microsoft Graph Resource Url
         *
         * ```
         */
        getGraphDocumentResourceUrl(options: GetGraphDocumentResourceUrl): string;
        /**
         * @deprecated Request digest is handled internaly now. No need to be determined by script.
         *
         * This function returns a digest for the current SharePoint connection
         *
         * ```
         *
         * const result = await rules.getRequestDigest(url);
         *
         * url = String  // Absolute url
         *
         * // Promise.resolve
         * result = String // Digest
         *
         * ```
         */
        getRequestDigest(url: string): Promise<any>;
        /**
         * Function to retrieve list folder and its properties.
         * Returns null if folder does not exist
         *
         * ```
         *
         * const result = await rules.getFolderByUrl({
         *   listUrl : String,  // Absolute list url
         *   folderPath: String,  // List relative path to folder
         *   select? : String | String[],  // Comma separated list or array of strings of properties (e.g. 'Title,Id')
         * });
         *
         * // Promise.resolve
         * result = Object  // Folder object
         *
         * ```
         */
        getFolderByUrl(options: GetFolderByUrlOptions): Promise<any>;
        /**
         * Function to get list properties by given listId
         *
         * ```
         *
         * const result = await rules.getListById({
         *   webUrl : String,  // Absolute web url of list containing web
         *   listId : String,  // List GUID
         *   select? : String | String[],  // List properties [SPList Properties] to return (comma separated or array ofd strings)
         * });
         *
         * // Promise.resolve
         * result = Object | String  // List object
         *
         * ```
         *
         */
        getListById(options: GetListByIdOptions): Promise<any>;
        /**
         * Function to get one or more SharePoint users and it's properties.
         * To get one single User use `userLoginName` or `userId` or `userEmail` (or use a proper `filter`).
         * To get all SharePoint users, don't `filter`.
         *
         * ```
         *
         * const result = await rules.getUsers({
         *   userLoginName? : String,  // Filter by single LoginName of SharePoint User
         *   userId? : Number,  // Filter by single Id of SharePoint User
         *   userEmail? : String,  // Filter by single EMail address of SharePoint User
         *   filter?: String,  // SharePoint REST API filter query (e.g. 'IsSiteAdmin eq true') to limit the result (ignored if user* parameter is filled)
         *   select? : String | String[],  // SharePoint User properties [SPUser Properties] to return (comma separated string or array of strings)
         *   siteUrl? : String,  // Absolute site collection url [default=rules.Event.siteUrl]
         * });
         *
         * // Promise.resolve
         * result = Object[]  // Array of SPUser objects
         *
         * ```
         *
         * *REST endpoint: /_api/web/SiteUsers*
         */
        getUsers(options?: GetUsersOptions): Promise<SiteUser[]>;
        /**
         * Function to get one or more SharePoint Groups and it's properties.
         * To get multiple SharePoint groups, don't pass one groupName.
         *
         * ```
         *
         * const result = await rules.getGroups({
         *   groupName? : String,  // Get single SharePoint Group by this name
         *   filter? : String,  // SharePoint REST API filter query (e.g. 'OnlyAllowMembersViewMembership eq true') to limit the result (ignored if groupName is filled)
         *   select? : String | String[],  // SharePoint Group properties [SPGroup Properties] to return (comma separated)
         *   siteUrl? : String,  // Absolute site collection url [default=rules.Event.siteUrl]
         * });
         *
         * // Promise.resolve
         * result = Object[]  // Array of SPGroup objects
         *
         * ```
         *
         * *REST endpoint: /_api/web/SiteGroups*
         */
        getGroups(options?: GetGroupsOptions): Promise<SiteGroup[]>;
        /**
         * Function to create a new SharePoint group by given title
         *
         * ```
         *
         * const result = await rules.createGroup({
         *   Title : String,  // Name of new SharePoint group
         *   OnlyAllowMembersViewMembership? : Boolean,  // Flag to handle permission for viewing the group members
         *   Description? : String,  // Description of new SharePoint group
         *   Owner? : String,  // Login for user or SharePoint group
         *   siteUrl? : String,  // Absolute site collection url
         *   preCheck?: Boolean,  // Check existence of the group before creating [default=false]
         * }
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        createGroup(options: CreateGroupOptions): Promise<RestServiceResult | any>;
        /**
         * Function to delete a SharePoint group from Site Collection
         *
         * ```
         *
         * const result = await rules.deleteGroup({
         *   title : String,  // Name of SharePoint group to be deleted
         *   siteUrl? : String,  // Absolute site collection url
         * }
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        deleteGroup(options: DeleteGroupOptions): Promise<RestServiceResult | any>;
        /**
         * Function to add an user to SharePoint group
         * @deprecated use `rules.addGroupMembers()` instead
         *
         * ```
         *
         * const result = await rules.addGroupMember({
         *   groupName : String,  // SharePoint group name
         *   userLoginName : String,  // User loginName
         *   siteUrl? : String,  // Absolute site collection url
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        addGroupMember(options: AddGroupMemberOptions): Promise<RestServiceResult | any>;
        /**
         * Function to add users to SharePoint group
         *
         * ```
         *
         * const result = await rules.addGroupMembers({
         *   groupName : String,  // SharePoint group name
         *   userLoginNames : String, String[],  // User Loginname as String or multiple Loginnames as Array
         *   siteUrl? : String,  // Absolute site collection url [default=rules.Event.siteUrl]
         * });
         *
         * // Promise.resolve
         * result = {
         *   successful : Boolean,  // if adding members was successful
         *   failedOperations? : Object[],  // HTTP results of failed assignments
         * }
         *
         * ```
         */
        addGroupMembers(options: AddGroupMembersOptions): Promise<BatchedOperationsResult | any>;
        /**
         * Function to remove users from SharePoint group
         *
         * ```
         * const result = await rules.removeGroupMembers({
         *   groupName : String,  // SharePoint group name
         *   userLoginNames : String, String[],  // User Loginname as String or multiple Loginnames as Array
         *   siteUrl? : String,  // Absolute site collection url [default=rules.Event.siteUrl]
         * });
         *
         * // Promise.resolve
         * result = {
         *   successful : Boolean,  // if removal of members was successful
         *   failedOperations? : Object[],  // HTTP results of failed removals
         * }
         *
         * ```
         */
        removeGroupMembers(options: RemoveGroupMembersOptions): Promise<BatchedOperationsResult | any>;
        /**
         * Function to rename a SharePoint group
         *
         * ```
         *
         * const result = await rules.renameGroup({
         *   Title : String,  // Current title of SharePoint group
         *   newTitle : String,  // New title for SharePoint group
         *   siteUrl? : String,  // Absolute site collection url
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        renameGroup(options: RenameGroupOptions): Promise<RestServiceResult | any>;
        /**
         * Function to update SharePoint list item properties
         *
         * ```
         *
         * const result = await rules.updateItem({
         *   listUrl : String,  // Absolute list url
         *   itemId : Number | String,  // ID of Sharepoint list item to be updated
         *   fields : Object,  // Fields object containing all fields and their values to be set [see rules.createItemFields()]
         *   eventsActivated? : Boolean,  // Trigger a Shareflex rules list event [default=false]
         *   incrementVersion? : Boolean,  // Create a new version by updating the item? [default=true]
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        updateItem(options: UpdateItemOptions): Promise<RestServiceResult | any>;
        /**
         * Function to copy values of fields from one item to another item.
         * - Source and target field have to be of same type
         * - Hidden fields are ignored by default (can be added via options.fields or options.mappings)
         * - Ignores fields that are ReadOnly and fields of Type 'Computed' or 'Guid'
         * - ContentType field is not handled (Type 'Computed')
         * - Modified / Created infos are not handled (Type 'ReadOnlyField')
         * - Filename of documents is not modified
         *
         * ```
         *
         * const result = await rules.copyItemFieldValues({
         *   sourceListUrl : String,  // Absolute list url of source list
         *   sourceItemId : Number | String,  // ID of source list item
         *   targetListUrl? : String,  // Absolute list url of destination list
         *   targetItemId : Number | String,  // ID of destination list item
         *   fields? : String | String[],  // Names of fields to be copied [default: all matching fields]
         *   mappings? : { [sourceFieldName: String]: String }, // Mapping object of source field name as key and target field names as value to copy values to fields with different name (e.g. `{Title: 'Title_Backup', Id: 'MyItemId'}` )
         *   skipFields? : String | String[],  // Names of fields to be skipped when copying all matching fields
         *   skipEmptySourceFields? : Boolean,  // If empty source item fields should be skipped when copying [default=false]
         *   skipFailedFields? : Boolean,  // Retry copying of field values without fields that cause an exception on the first attempt [default=false]
         *   lcid? : String | Number,  // Configured regional setting (LCID) of target web [default=LCID of Rules execution context]
         *   eventsActivated? : Boolean,  // Trigger a Shareflex Rules list event for target item [default=false]
         *   incrementVersion? : Boolean,  // Create a new version by updating the target item? [default=true]
         * })
         *
         * // Promise.resolve
         * result = {
         *   value : ValidateUpdateItemFieldResult[],  // Array of all field update results
         *   failedFields? : {  // only if options.skipFailedFields = true and field exception occurred
         *     [fieldName] : ValidateUpdateItemFieldResult,  // Each field that caused an exception
         *   }
         * }
         *
         * ```
         */
        copyItemFieldValues(options: CopyItemFieldValuesOptions): Promise<RestServiceResult & {
            failedFields: FailedFields;
        }>;
        /**
         * Function to create new folder in SharePoint list
         *
         * ```
         *
         * const result = await rules.createFolder({
         *   listUrl : String,  // Absolute list url
         *   folderPath : String, // List relative path to folder
         *   contentTypeId? : String,  // Specific content type id [default='0x0120']
         *   fields? : Object,  // Fields object containing all fields and their values to be set [see rules.createItemFields()]
         *   preCheck?: Boolean,  // Check existence of the folder before creating [default=false]
         *   ensureFolderPath?: Boolean,  // Ensure existence of folderPath, create missing parts [default=false]
         * });
         *
         * // Promise.resolve
         * result = Object  // Object with affected folder item fields
         *
         *
         * // EXAMPLE
         * // create simple folder:
         * const result = await rules.createFolder({
         *   listUrl: myListUrl,
         *   folderName: 'Folder A B C',
         * });
         *
         * // complex example: create folder with metadata
         * const fields = rules.createItemFields();
         * fields.setText('myCustomField', 'some value ...');
         * const ContentTypeResult = await rules.getWebContentTypes({
         *   webUrl: rules.Event.siteUrl,
         *   filter: `Name eq 'Vertragsordner'`,
         *   select: 'Id',
         * });
         * const result = await rules.createFolder({
         *   listUrl: `${rules.Event.webUrl}/Lists/Notes`,
         *   folderName: `FolderWithMetadata`,
         *   contentTypeId: ContentTypeResult[0].Id.StringValue,
         *   fields: fields,
         * });
         *
         * ```
         */
        createFolder(options: CreateFolderOptions): Promise<RestServiceResult | any>;
        /**
         * @deprecated use `rules.createFolder({preCheck: true})` instead
         *
         * Function to get or create (if necessary) a folder in a SharePoint list
         *
         * ```
         *
         * const result = await rules.ensureFolder({
         *   listUrl : String,  // Absolute list url
         *   folderName : String,  // Name of new folder
         *   subFolderPath? : String,  // Folder path if folder not in list root
         *   contentTypeId? : String,  // Specific content type id [default='0x0120']
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        ensureFolder(options: EnsureFolderOptions): Promise<any>;
        /**
         * Function to update properties of a folder in a SharePoint list
         *
         * ```
         *
         * const result = await rules.updateFolder({
         *   listUrl : String,  // Absolute list url
         *   folderPath : String,  // List relative path to folder
         *   fields : Object,  // Fields object containing all fields and their values to be set [see rules.createItemFields()]
         *   incrementVersion? : Boolean,  // Create a new version by updating the folder? [default=true]
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         *
         * // EXAMPLE
         * // complex example: rename a folder
         * const fields = rules.createItemFields();
         * fields.setText('Title', 'newFolderName');
         * fields.setText('FileLeafRef', 'newFolderName');
         * result = await rules.updateFolder({
         *   listUrl: `${rules.Event.webUrl}/Lists/Notes`,
         *   folderPath: `oldFolderName`,
         *   fields: fields,
         * });
         *
         * ```
         */
        updateFolder(options: UpdateFolderOptions): Promise<RestServiceResult | any>;
        /**
         * Delete a folder in SharePoint list
         *
         * Option `folderPath` can be passed as array of strings to delete multiple folders of same list.
         *
         * ```
         *
         * const result = await rules.deleteFolder({
         *   listUrl : String,  // Absolute list url
         *   folderPath : String | String[],  // List relative path to folder as string or array of strings for multiple folders
         *   clearFolderFirst? : Boolean,  // If content of folder has to be deleted recursively before [default=false]
         *   recycle? : Boolean,  // If folder has to be moved to recycle bin [default=false]
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        deleteFolder(options: DeleteFolderOptions): Promise<RestServiceResult | any>;
        /**
         * Function to delete all child elements inside a folder recursively.
         * The folder itself will not be deleted.
         *
         * Option `folderPath` can be passed as array of strings to clear multiple folders of same list.
         *
         * ```
         *
         * const result = await rules.clearFolder({
         *   listUrl : String,  // Absolute list url
         *   folderPath : String | String[],  // List relative path to folder as string or array of strings for multiple folders
         *   recycle? : Boolean,  // If deleted child elements have to be moved to recycle bin [default=false]
         * });
         *
         * // Promise.resolve
         * result = Boolean  // If content of folder was deleted successfully
         *
         * ```
         *
         */
        clearFolder(options: ClearFolderOptions): Promise<boolean>;
        /**
         * Function to create an item in SharePoint list
         *
         * ```
         *
         * const result = await rules.createItem({
         *   listUrl : String,  // Absolute list url
         *   fields : Object,  // Fields object containing all fields and their values to be set [see rules.createItemFields()]
         *   folderPath? : String,  // List relative path to folder
         *   ensureFolderPath? : Boolean,  // Ensure existence of folderPath, create missing parts [default=false]
         *   eventsActivated? : Boolean,  // Trigger a Shareflex rules list event [default=false]
         * });
         *
         * // Promise.resolve
         * result = String  // ID of created item
         *
         * ```
         */
        createItem(options: CreateItemOptions): Promise<RestServiceResult | any>;
        /**
         * Ensure existence of are certain folder path in a SharePoint list
         */
        private ensureListFolderPath;
        /**
         * @deprecated Renamed to rules.Utils.combineUrls()
         *
         * Combines a base url with a relative part by inserting a "/" where required (does not resolve or change anything)
         *
         * ```
         *
         * const result = rules.combineUrls(baseUrl, relativeUrl);
         *
         * baseUrl = String  // First part of url
         * relativeUrl = String  // Second part of url
         *
         * result = String  // Combined url
         *
         * ```
         */
        combineUrls(baseUrl: string, relativeUrl: string): string;
        /**
         * @deprecated Renamed to rules.Utils.makeServerRelative()
         *
         * Supports absolute, already server-relative and URLs relative to a given contextual URL.
         */
        makeServerRelative(absOrServerRelOrContextRelUrl: string, contextualUrl?: string): string;
        /**
         * @deprecated Renamed to rules.Utils.generateGUID()
         *
         * Function to generate a unique GUID string.
         * Options can be provided to generate a GUID in a custom format.
         *
         * ```
         *
         * const result = rules.generateGUID({
         *   format?: String,  // Pass custom format like '####-####' where all '#' are replaced by random hexadecimal number (0..f)
         *   upperCase? : Boolean,  // All characters in upper case [default=false]
         *   withoutHyphens? : Boolean,  // GUID without hyphens [default=false]
         * }?);
         *
         * ```
         */
        generateGUID(options?: GenerateGUIDOptions): string;
        /**
         * @deprecated breEvents is handled internally
         * ----
         * Function to provide a GUID for field breEvents to prevent Shareflex rules event logic
         * (e.g. updateFields.breEvents = rules.getEventsValue(item.breEvents);)
         *
         * ```
         *
         * const result = rules.getEventsValue(currentEventGUID);
         *
         * // Example:
         * const item = await rules.getEventItem("Title,breEvents");  // get current list item
         * let breEventsGUID = rules.getEventsValue(item.breEvents);  // performance optimization for event prevent mechanism
         * const updateFields = {}; // prepare update fields object;
         * updateFields.breEvents = breEventsGUID;  // add new or old GUID
         * updateFields.Title = 'my new Title';  // prepare field object for update
         * await rules.updateEventItem(updateFields);  // update list item with new values without event
         *
         *  ```
         */
        getEventsValue(currentValue?: string): string;
        /**
         * Function to get all subwebs of a web.
         *
         * ```
         *
         * const result = await rules.getWebs({
         *   webUrl : String,  // Absolute web url to search subwebs in
         *   props? : String | String[],  // Limit request to specific web properties as comma separated list or array (e.g. 'Title,Url,RegionalSettings/LocaleId' or ['Title','Url','RegionalSettings/LocaleId'])
         *   filter? : String,  // SharePoint REST API filter query (e.g. 'IsMultilingual eq true') to limit the result
         *   order? : String,  // SharePoint REST API order fields (e.g. 'Title desc') to sort the result
         *   rowLimit? : Number,  // Limit amount of returned items (max. 5000)
         * });
         *
         * // Promise.resolve
         * result = Object[]  // Webs
         *
         * ```
         */
        getWebs(options: GetWebsOptions): Promise<any[]>;
        /**
         * @deprecated renamed to rules.getWebByUrl()
         */
        getWeb(options: GetWebByUrlOptions): Promise<RestServiceResult | any>;
        /**
         * Function to get properties of a specific SharePoint web
         *
         * ```
         *
         * const result = await rules.getWebByUrl({
         *   webUrl : String,  // Absolute web url
         *   select? : String | String[],  // Comma separated list or array of strings of properties (e.g. 'Title,Id')
         * }
         *
         * // Promise.resolve
         * result = Object | String  // Web object
         *
         * ```
         */
        getWebByUrl(options: GetWebByUrlOptions): Promise<any>;
        /**
         * Function to delete a SharePoint list item by id
         *
         * ```
         *
         * const result = await rules.deleteItem({
         *   listUrl : String,  // Absolute list url
         *   itemId : Number | String,  // ID of Sharepoint list item to be deleted
         *   recycle? : Boolean,  // If items has to be moved to recycle bin [default=false]
         *   eventsActivated? : Boolean,  // Trigger a Shareflex rules list event [default=false]
         * }
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        deleteItem(options: DeleteItemOptions): Promise<RestServiceResult | any>;
        /**
         * Function to get field properties of a specific SharePoint list.
         * Returns an array of one or more fields
         *
         * ```
         *
         * const result = await rules.getListFields({
         *   listUrl : String,  // Absolute list url
         *   filter? : String,  // SharePoint REST API filter query (e.g. StaticName eq 'Status') to limit the result
         *   select? : String,  // Comma separated list of properties (e.g. 'StaticName,Choices')
         *   order? : String,  // SharePoint REST API order fields (e.g. 'Title desc') to sort the result [default=Title]
         * });
         *
         * // Promise.resolve
         * result = Object[]  // Field objects
         *
         * ```
         */
        getListFields(options: GetListFieldsOptions): Promise<any[]>;
        /**
         * Function to get all lists from a SharePoint web
         *
         * ```
         *
         * const result = await rules.getLists({
         *   webUrl : String,  // Absolute web url to search lists in
         *   props? : String | String[],  // Limit request to specific list properties as comma separated list or array (e.g. 'Title,Id,RootFolder/ServerRelativeUrl' or ['Title','Id','RootFolder/ServerRelativeUrl'])
         *   filter? : String,  // SharePoint REST API filter query (e.g. BaseType eq 0) to limit the result
         *   order? : String,  // SharePoint REST API order fields (e.g. 'Title desc') to sort the result
         *   rowLimit? : Number,  // Limit amount of returned items (max. 5000)
         * });
         *
         * // Promise.resolve
         * result = Object[]  // Lists
         *
         * ```
         */
        getLists(options: GetListsOptions): Promise<any[]>;
        /**
         * Function to retrieve list and its properties by list name.
         * Returns null if list does not exist
         *
         * __IMPORTANT:__ For SharePoint lists the suffix 'List' has to be added to the list name
         * (e.g. listUrl '.../myWeb/Lists/TestData' -> listName : 'TestDataList')
         *
         * ```
         *
         * const result = await rules.getListByName({
         *   webUrl : String,  // Absolute url of web where list is located
         *   listName : String,  // Name of list (e.g. 'Documents' or 'TasksList')
         *   select? : String | String[],  // Comma separated list of properties (e.g. 'Title,Id')
         * });
         *
         * // Promise.resolve
         * result = Object  // List object
         *
         * ```
         */
        getListByName(options: GetListByNameOptions): Promise<any>;
        /**
         * @deprecated renamed to rules.getListByName()
         */
        getList(options: GetListOptions): Promise<RestServiceResult | any>;
        /**
         * Function to retrieve list and its properties.
         * Returns null if list does not exist
         *
         * ```
         *
         * const result = await rules.getListByUrl({
         *   listUrl : String,  // Absolute list url
         *   select? : String | String[],  // Comma separated list or array of strings of properties (e.g. 'Title,Id')
         * });
         *
         * // Promise.resolve
         * result = Object  // List object
         *
         * ```
         */
        getListByUrl(options: GetListByUrlOptions): Promise<any>;
        /**
         * Function to create a custom list (BaseTemplate=100)
         *
         * ```
         *
         * const result = await rules.createList({
         *   webUrl : String,  // Absolute web url
         *   name : String,  // Name of new list
         *   description? : String,  // Description of new list
         *   contentTypesEnabled? : Boolean,  // Allow list content types
         *   quickLaunchEnabled? : Boolean,  // Show list in quicklaunch navigation
         *   enableFolderCreation? : Boolean,  // Allow folder creation in list
         *   enableVersioning? : Boolean,  // Activate version control for list items
         *   preCheck?: Boolean,  // Check existence of the folder before creating [default=false]
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        createList(options: CreateListOptions): Promise<RestServiceResult | any>;
        /**
         * Function to get specific web content types and their properties
         *
         * ```
         *
         * const result = await rules.getWebContentTypes({
         *   webUrl : String,  // Absolute web url
         *   filter? : String,  // SharePoint REST API filter query (e.g. Name eq 'Item') to limit the result
         *   select? : String | String[],  // Comma separated list or array of strings of properties (e.g. 'StringId,Name')
         * });
         *
         * // Promise.resolve
         * result = Object[]  // ContentType objects
         *
         * ```
         */
        getWebContentTypes(options: GetWebContentTypesOptions): Promise<any[]>;
        /**
         * Function to add a content type to a specific list
         *
         * ```
         *
         * const result = await rules.addListContentType({
         *   listUrl : String,  // Absolute list url
         *   contentTypeId : String,  // ID of content type to be added to the list
         * });
         *
         * // Promise.resolve
         * result = String  // ID of list content type
         *
         * ```
         */
        addListContentType(options: AddListContentTypeOptions): Promise<RestServiceResult | any>;
        /**
         * Function to remove a content type from a specific list
         *
         * ```
         *
         * const result = await rules.removeListContentType({
         *   listUrl : String,  // Absolute list url
         *   contentTypeId : String,  // ID of content type to be added to the list
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        removeListContentType(options: RemoveListContentTypeOptions): Promise<RestServiceResult | any>;
        /**
         * Function to get specific list content types and their properties
         *
         * ```
         *
         * const result = await rules.getListContentTypes({
         *   listUrl : String,  // Absolute list url
         *   filter? : String,  // SharePoint REST API filter query (e.g. Name eq 'Item') to limit the result
         *   select? : String,  // Comma separated list of properties (e.g. 'StringId,Name')
         * });
         *
         * // Promise.resolve
         * result = Object[]  // List content types
         *
         * ```
         */
        getListContentTypes(options: GetListContentTypesOptions): Promise<any[]>;
        /**
         * Function to get properties of a specific SharePoint permission level.
         * Returns a Role Definition object (for roleType / roleName) or an Array of all Role Definition object if no options were provided.
         *
         * __Notice:__ `roleName` has to be passed in correct translation for multilingual sites while `roleType` is not translated.
         *
         * ```
         *
         * const result = await rules.getRoleDefinitions({
         *   roleType? : String,  // SharePoint default permission type ('Guest', 'Reader', 'Contributor', 'WebDesigner' or 'Administrator')
         *   roleName? : String,  // Title of SharePoint permission level (e.g. 'Read', 'Vollzugriff', 'Contributor without delete')
         *   siteUrl? : String,  // Absolute site collection url
         * });
         *
         * // Promise.resolve
         * result = Object | Object[]  // Role definition
         *
         * ```
         */
        getRoleDefinitions(options?: GetRoleDefinitionsOptions): Promise<RestServiceResult | any>;
        /**
         * Function to assign permissions to a SharePoint item.
         *
         * ```
         *
         * const result = await rules.assignItemPermissions({
         *   listUrl: String,  // Absolute list url
         *   itemId : Number | String,  // ID of Sharepoint list item
         *   permissionMappings : Object,  // Object of Principals and RoleDef mappings [see rules.createPermissionMappings]
         * });
         *
         * // Promise.resolve
         * result = {
         *   successful : Boolean,  // if assignment of permissions was successful
         *   failedOperations? : Object[],  // HTTP results of failed permission assignments
         * }
         *
         * ```
         */
        assignItemPermissions(options: AssignItemPermissionsOptions): Promise<BatchedOperationsResult>;
        /**
         * Function to assign permissions to a folder of a SharePoint list.
         *
         * ```
         *
         * const result = await rules.assignFolderPermissions({
         *   listUrl: String,  // Absolute list url
         *   folderPath : String,  // List relative path to folder
         *   permissionMappings : Object,  // Object of Principals and RoleDef mappings [see rules.createPermissionMappings]
         * });
         *
         * // Promise.resolve
         * result = {
         *   successful : Boolean,  // if assignment of permissions was successful
         *   failedOperations? : Object[],  // HTTP results of failed permission assignments
         * }
         *
         * ```
         */
        assignFolderPermissions(options: AssignFolderPermissionsOptions): Promise<BatchedOperationsResult>;
        /**
         * Function to assign permissions to a SharePoint list.
         *
         * ```
         * const result = await rules.assignListPermissions({
         *   listUrl: String,  // Absolute list url
         *   permissionMappings : Object,  // Object of Principals and RoleDef mappings [see rules.createPermissionMappings]
         * });
         *
         * // Promise.resolve
         * result = {
         *   successful : Boolean,  // if assignment of permissions was successful
         *   failedOperations? : Object[],  // HTTP results of failed permission assignments
         * }
         *
         * ```
         */
        assignListPermissions(options: AssignListPermissionsOptions): Promise<BatchedOperationsResult>;
        /**
         * Function to assign permissions to a SharePoint web.
         *
         * ```
         *
         * const result = await rules.assignWebPermissions({
         *   webUrl: String,  // Absolute web url
         *   permissionMappings : Object,  // Object of Principals and RoleDef mappings [see rules.createPermissionMappings]
         * }
         *
         * // Promise.resolve
         * result = {
         *   successful : Boolean,  // if assignment of permissions was successful
         *   failedOperations? : Object[],  // HTTP results of failed permission assignments
         * }
         *
         * ```
         */
        assignWebPermissions(options: AssignWebPermissionsOptions): Promise<BatchedOperationsResult>;
        /**
         * Function to split up IRolePrincipalMapping to single pairs of principalId (no arrays) and roleDefId
         */
        private getSinglePrincipleRoleDefPairsForAssign;
        /**
         * Function to get Permissions assigned to a specific SharePoint ListItem.
         * Get all assigned permissions or provide specific principalIds to filter the result.
         *
         * ```
         *
         * const result = await rules.getItemPermissions({
         *   listUrl : String,  // Absolute list url
         *   itemId : Number | String,  // ID of Sharepoint list item
         *   principalId? : Number | Number[],  // ID of SharePoint principal
         * });
         *
         * // Promise.resolve
         * result = {
         *   roleAssignments: {  // Object with all permitted principals (users)
         *     <principalId> : {  // ID of SharePoint principal as key of this object
         *       roleDefIds : Number[],  // IDs of all assigned role definitions
         *       roleDefNames : String[],  // Names of all assigned role definitions
         *     },
         *   },
         *   hasUniqueRoleAssignments : Boolean,  // If item has unique permissions
         * }
         *
         * ```
         */
        getItemPermissions(options: GetItemPermissionsOptions): Promise<ElementPermissions>;
        /**
         * Function to build a Permissions Object on base of REST requests result with
         *
         * REST:
         * $expand=RoleAssignments/RoleDefinitionBindings
         * $select=RoleAssignments/PrincipalId,RoleAssignments/RoleDefinitionBindings/Name,RoleAssignments/RoleDefinitionBindings/Id,HasUniqueRoleAssignments
         */
        private buildElementPermissionsResult;
        /**
         * Function to get Permissions assigned to a specific folder in a SharePoint list.
         * Get all assigned permissions or provide specific principalIds to filter the result.
         *
         * ```
         *
         * const result = await rules.getFolderPermissions({
         *   listUrl : String,  // Absolute list url
         *   folderPath : String,  // List relative path to folder
         *   principalId? : Number | Number[],  // ID of SharePoint principal
         * });
         *
         * // Promise.resolve
         * result = {
         *   roleAssignments: {  // Object with all permitted principals (users)
         *     <principalId> : {  // ID of SharePoint principal as key of this object
         *       roleDefIds : Number[],  // IDs of all assigned role definitions
         *       roleDefNames : String[],  // Names of all assigned role definitions
         *     },
         *   },
         *   hasUniqueRoleAssignments : Boolean,  // If folder has unique permissions
         * }
         *
         * ```
         */
        getFolderPermissions(options: GetFolderPermissionsOptions): Promise<ElementPermissions>;
        /**
         * Function to get Permissions assigned to a specific SharePoint list.
         * Get all assigned permissions or provide specific principalIds to filter the result.
         *
         * ```
         *
         * const result = await rules.getListPermissions({
         *   listUrl : String,  // Absolute list url
         *   principalId? : Number | Number[],  // ID of SharePoint principal
         * });
         *
         * // Promise.resolve
         * result = {
         *   roleAssignments: {  // Object with all permitted principals (users)
         *     <principalId> : {  // ID of SharePoint principal as key of this object
         *       roleDefIds : Number[],  // IDs of all assigned role definitions
         *       roleDefNames : String[],  // Names of all assigned role definitions
         *     },
         *   },
         *   hasUniqueRoleAssignments : Boolean,  // If list has unique permissions
         * }
         *
         * ```
         */
        getListPermissions(options: GetListPermissionsOptions): Promise<ElementPermissions>;
        /**
         * Function to get Permissions assigned to a specific SharePoint web.
         * Get all assigned permissions or provide specific principalIds to filter the result.
         *
         * ```
         *
         * const result = await rules.getWebPermissions({
         *   webUrl : String,  // Absolute web url
         *   principalId? : Number | Number[],  // ID of SharePoint principal
         * });
         *
         * // Promise.resolve
         * result = {
         *   roleAssignments: {  // Object with all permitted principals (users)
         *     <principalId> : {  // ID of SharePoint principal as key of this object
         *       roleDefIds : Number[],  // IDs of all assigned role definitions
         *       roleDefNames : String[],  // Names of all assigned role definitions
         *     },
         *   },
         *   hasUniqueRoleAssignments : Boolean,  // If web has unique permissions
         * }
         *
         * ```
         */
        getWebPermissions(options: GetWebPermissionsOptions): Promise<ElementPermissions>;
        /**
         * Function to transform a PermissionMapping object into an Array of single RoleDefId-PrincipalId pairs
         */
        private toRoleDefIdPrincipalIdPairs;
        /**
         * Function to transform Permission Mapping objects (based on Name or RoleTypeKind) to a RoleDefId based object
         */
        private translateRoleMappingToRoleDefId;
        /**
         * Function to generate a RoleDefId based Permission Mapping object for all passed users
         */
        private transformPermissionWildcardsToRoleDefIdMapping;
        /**
         * Function to split up IRolePrincipalMapping to single pairs of principalId (no arrays) and roleDefId.
         * Also resolve wildcard roleDefIds (roleDefAssignments > removeAllRoleDefIds === true).
         */
        private getSinglePrincipleRoleDefPairsForRemove;
        /**
         * Function to remove permissions from a SharePoint ListItem.
         *
         * ```
         *
         * const result = await rules.removeItemPermissions({
         *   listUrl: String,  // Absolute list url
         *   itemId : Number | String,  // ID of Sharepoint list item
         *   permissionMappings : Object,  // Object of Principals and RoleDef mappings [see rules.createPermissionMappings]
         * });
         *
         * // Promise.resolve
         * result = {
         *   successful : Boolean,  // if removal of all permissions was successful
         *   failedOperations? : Object[],  // HTTP results of failed permission removals
         * }
         *
         * ```
         */
        removeItemPermissions(options: RemoveItemPermissionsOptions): Promise<BatchedOperationsResult>;
        /**
         * Function to remove permissions from a folder in a SharePoint List.
         *
         * ```
         *
         * const result = await rules.removeFolderPermissions({
         *   listUrl: String,  // Absolute list url
         *   folderPath : String,  // List relative path to folder
         *   permissionMappings : Object,  // Object of Principals and RoleDef mappings [see rules.createPermissionMappings]
         * });
         *
         * // Promise.resolve
         * result = {
         *   successful : Boolean,  // if removal of all permissions was successful
         *   failedOperations? : Object[],  // HTTP results of failed permission removals
         * }
         *
         * ```
         */
        removeFolderPermissions(options: RemoveFolderPermissionsOptions): Promise<BatchedOperationsResult>;
        /**
         * Function to remove permissions from a SharePoint list.
         *
         * ```
         *
         * const result = await rules.removeListPermissions({
         *   listUrl: String,  // Absolute list url
         *   permissionMappings : Object,  // Object of Principals and RoleDef mappings [see rules.createPermissionMappings]
         * });
         *
         * // Promise.resolve
         * result = {
         *   successful : Boolean,  // if removal of all permissions was successful
         *   failedOperations? : Object[],  // HTTP results of failed permission removals
         * }
         *
         * ```
         */
        removeListPermissions(options: RemoveListPermissionsOptions): Promise<BatchedOperationsResult>;
        /**
         * Function to remove permissions from a SharePoint web.
         *
         * ```
         *
         * const result = await rules.removeWebPermissions({
         *   webUrl: String,  // Absolute web url
         *   permissionMappings : Object,  // Object of Principals and RoleDef mappings [see rules.createPermissionMappings]
         * });
         *
         * // Promise.resolve
         * result = {
         *   successful : Boolean,  // if removal of all permissions was successful
         *   failedOperations? : Object[],  // HTTP results of failed permission removals
         * }
         *
         * ```
         */
        removeWebPermissions(options: RemoveWebPermissionsOptions): Promise<BatchedOperationsResult>;
        /**
         * Function to stop the permission role inheritance of a specific list item
         *
         * ```
         *
         * const result = await rules.breakItemRoleInheritance({
         *   listUrl : String,  // Absolute list url
         *   itemId : Number | String,  // ID of Sharepoint list item
         *   clear? : Boolean,  // Remove current item permissions [default=false]
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        breakItemRoleInheritance(options: BreakItemRoleInheritanceOptions): Promise<RestServiceResult | any>;
        /**
         * Function to remove individual item permissions
         *
         * ```
         *
         * const result = await rules.resetItemRoleInheritance({
         *   listUrl : String,  // Absolute list url
         *   itemId : Number | String,  // ID of Sharepoint list item
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        resetItemRoleInheritance(options: ResetItemRoleInheritanceOptions): Promise<RestServiceResult | any>;
        /**
         * Function to stop inheriting permissions for a specific folder of a SharePoint list
         *
         * ```
         *
         * const result = await rules.breakFolderRoleInheritance({
         *   listUrl : String,  // Absolute list url
         *   folderPath : String,  // List relative path to folder
         *   clear? : Boolean,  // Remove current folder permissions [default=false]
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        breakFolderRoleInheritance(options: BreakFolderRoleInheritanceOptions): Promise<RestServiceResult | any>;
        /**
         * Function to delete unique permissions for a specific folder of a SharePoint list
         *
         * ```
         *
         * const result = await rules.resetFolderRoleInheritance({
         *   listUrl : String,  // Absolute list url
         *   folderPath : String,  // List relative path to folder
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        resetFolderRoleInheritance(options: ResetFolderRoleInheritanceOptions): Promise<RestServiceResult | any>;
        /**
         * Function to stop the permission role inheritance of a specific list
         *
         * ```
         *
         * const result = await rules.breakListRoleInheritance({
         *   listUrl : String,  // Absolute list url
         *   clear? : Boolean,  // Remove current list permissions [default=false]
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        breakListRoleInheritance(options: BreakListRoleInheritanceOptions): Promise<RestServiceResult | any>;
        /**
         * Function to remove individual list permissions
         *
         * ```
         *
         * const result = await rules.resetListRoleInheritance({
         *   listUrl : String,  // Absolute list url
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        resetListRoleInheritance(options: ResetListRoleInheritanceOptions): Promise<RestServiceResult | any>;
        /**
         * Function to stop inheriting permissions for a specific SharePoint web
         *
         * ```
         *
         * const result = await rules.breakWebRoleInheritance({
         *   webUrl : String,  // Absolute Url of web
         *   clear? : Boolean,  // Remove current folder permissions [default=false]
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        breakWebRoleInheritance(options: BreakWebRoleInheritanceOptions): Promise<RestServiceResult | any>;
        /**
         * Function to delete unique permissions for a specific SharePoint web
         *
         * ```
         *
         * const result = await rules.resetWebRoleInheritance({
         *   webUrl : String,  // Absolute Url of web
         * });
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        resetWebRoleInheritance(options: ResetWebRoleInheritanceOptions): Promise<RestServiceResult | any>;
        /**
         * This function returns items of a specific list (max. 5000 items)
         *
         * NOTE: Usage of 'folderPath' will cause an Exception if there are more than 5000 direct child elements (not recursive)
         *
         * ```
         *
         * const result = await rules.getItems({
         *   listUrl : String,  // Absolute list url
         *   folderPath? : String,  // List relative path of folder to get items from (not recursive) [watch out for Threshold]
         *   fields? : String | String[],  // Comma separated list or array of internal field names (e.g. 'Title,ID,Author/Name' or ['Title','ID','Author/Name'])
         *   filter? : String,  // SharePoint REST API filter query (e.g. 'Id eq 1') to limit the result
         *   order? : String,  // SharePoint REST API order fields (e.g. 'Title desc') to sort the result
         *   rowLimit? : Number,  // Limit amount of returned items (max. 5000)
         * });
         *
         * // Promise.resolve
         * result = Object[]  // List items
         *
         * ```
         */
        getItems(options: GetItemsOptions): Promise<any[]>;
        /**
         * Get a list item by its ID.
         *
         * ```
         *
         * const result = await rules.getItemById({
         *   listUrl : String,  // Absolute list url
         *   itemId: Number | String,  // ID of Sharepoint list item
         *   fields? : String | String[],  // Comma separated list or array of internal field names (e.g. 'Title,Id,Author/Name' or ['Title','Id','Author/Name'])
         * });
         *
         * // Promise.resolve
         * result = Object  // List item
         *
         * ```
         */
        getItemById(options: GetItemByIdOptions): Promise<any>;
        /**
         * Get a list item (document) by its url.
         *
         * NOTE: This method does not support expanding of (lookup / user) fields
         *
         * ```
         *
         * const result = await rules.getItemByUrl({
         *   listUrl : String,  // Absolute list url
         *   filePath: String,  // List relative url of file
         *   fields? : String | String[],  // Comma separated list or array of internal field names (e.g. 'Title,Id,AuthorId' or ['Title','Id','AuthorId']). No expand fields supported!
         * });
         *
         * // Promise.resolve
         * result = Object  // List item
         *
         * // EXAMPLE:
         * result = await rules.getItemByUrl({
         *   listUrl: `${rules.Event.siteUrl}/pscBAF/Custom`,
         *   filePath: `/myFolder/Lorem_Ipsum.txt`,
         *   fields: 'Id'
         * });
         *
         * ```
         */
        getItemByUrl(options: GetItemByUrlOptions): Promise<any>;
        /**
         * Function to process list items by a given callback function.
         * Items are processed in packages to support mass data operations.
         *
         * ```
         *
         * const result = await rules.processItems({
         *   listUrl : String,  // Url of requested list
         *   callback : Function,  // Function to handle and array of items
         *   callbackOptions? : Object | String,  // Options for callback function
         *   callbackSync? : Boolean,  // Perform callback sync [default=false]
         *   fields? : String | String[],  // Comma separated list or array of internal field names (e.g. 'Title,ID,Author/Name' or ['Title','ID','Author/Name'])
         *   filter? : String,  // SharePoint REST API filter query (e.g. 'Id eq 1') to limit the result
         *   order? : String,  // SharePoint REST API order fields (e.g. 'Title desc') to sort the result
         *   packageSize? : Number,  // Amount of items per request to be processed by callback function [default=100]
         *   processedItemsLimit? : Number,  // Amount of max. processed items (total)
         * });
         *
         * // Promise.resolve
         * result = Array  // results of processed callback functions
         *
         * async function myCallback ({
         *   rules: ShareflexRules,  // Shareflex Rules object
         *   listUrl: String,  // Url of requested list
         *   items: Object[]  // Array of list item objects (structure according to processItems options.fields)
         *   options: Object | String  // 'callbackOptions' of processItems options
         * }) {}
         *
         * ```
         */
        processItems(options: ProcessItemsOptions, parallelJobs?: Promise<any>[], results?: any[]): Promise<any[]>;
        /**
         * @deprecated Renamed to rules.Utils.sleep()
         *
         * This function waits some time in milliseconds
         *
         * ```
         * await rules.sleep(time);
         *
         * time = Number  // time to wait in milliseconds (e.g. 1000 for a second)
         * ```
         *
         */
        sleep(/** time in milliseconds (e.g. 1000 for a second) */ time: number): Promise<void>;
        /**
         * Function to get item properties of current item which triggered the event
         *
         * ```
         * const result = await rules.getEventItem(fields);
         *
         * fields = String | String[]  // Comma separated list of field names or an array containing field names as strings to limit the result
         *
         * // Promise.resolve
         * result = Object  // List item
         *
         * ```
         */
        getEventItem(fields?: string | string[]): Promise<any>;
        /**
         * Function to set item properties of current item which triggered the event
         *
         * ```
         * const result = await rules.updateEventItem(fields)
         *
         * fields = Object  // Fields object containing all fields and their values to be set [see rules.createItemFields()]
         *
         * // Promise.resolve
         * result = Object | String  // HTTP response body
         *
         * ```
         */
        updateEventItem(fields: UpdateFields): Promise<any>;
        /**
         * Function to get the site collection url of an absolute url
         */
        getSiteUrl(url: string): string;
        /**
         * This function returns the Regional Settings of a SharePoint web
         *
         * ```
         * const result = await rules.getWebRegionalSettings(webUrl);
         *
         * webUrl : String  // Absolute URL of web
         *
         * // Promise.resolve
         * result = Object // Regional Settings of the web as JSON
         * ```
         *
         */
        getWebRegionalSettings(/** Absolute URL of web */ webUrl: string): Promise<WebRegionalSettings>;
        /**
         * This function returns the Regional Settings TimeZone information of a SharePoint web
         *
         * ```
         * const result = await rules.getWebTimeZone(webUrl);
         *
         * webUrl : String  // Absolute URL of web
         *
         * // Promise.resolve
         * result = Object // TimeZone information of the web as JSON
         * ```
         *
         */
        getWebTimeZone(/** Absolute URL of web */ webUrl: string): Promise<any>;
        /**
         * Function to copy a SharePoint document.
         *
         * ```
         *
         * await rules.copyDocument({
         *   sourcePath : String,  // Absolute Url of source document (incl. filename)
         *   destinationPath : String,  // Absolute Url of the new document destination (incl. filename)
         *   fileExistsAction? : String,  // What to do if file does already exist in destination ('skip', 'overwrite', 'keepBoth') [default=skip]
         *   copyAuthorAndCreated? : Boolean,  // Keep `Author` and `Created` timestamp for destination file or reset on copy [default=false]. Supported in same web only.
         *   siteUrl? : String,  // Absolute url of site collection to override execution context
         * });
         *
         * ```
         */
        copyDocument(options: Document.CopyDocumentOptions): Promise<void>;
        /**
         * Function to move a SharePoint document.
         *
         * ```
         *
         * await rules.moveDocument({
         *   sourcePath : String,  // Absolute Url of source document (incl. filename)
         *   destinationPath : String,  // Absolute Url of the new document destination (incl. filename)
         *   fileExistsAction? : String,  // What to do if file does already exist in destination ('skip', 'overwrite', 'keepBoth') [default=skip]
         *   copyAuthorAndCreated? : Boolean,  // Keep `Author` and `Created` timestamp for destination file or reset on move [default=true]. Supported in same web only.
         *   siteUrl? : String,  // Absolute url of site collection to override execution context
         * });
         *
         * ```
         */
        moveDocument(options: Document.MoveDocumentOptions): Promise<void>;
        /**
         * @experimental
         *
         * Function to copy a document as stream.
         *
         * ```
         *
         * const result = await rules.copyDocumentAsStream({
         *   source : {
         *     connectionId : String,  // Identifier of connection
         *     url : String,  // Absolute url of stream endpoint
         *     method : String,  // Request Method
         *     headers? : Object,  // Request Header object
         *     body? : String,  // Request Body as string
         *   },
         *   destination : {
         *     connectionId : String,  // Identifier of connection
         *     url : String,  // Absolute url of stream endpoint
         *     method : String,  // Request Method
         *     headers? : Object,  // Request Header object
         *   }
         * });
         *
         *
         * //EXAMPLE
         * // connection to source environment
         * const dexproConnection = rules.connectionManager.createGenericHttpConnection({
         *   id: `DEXPRO`,
         *   baseUrl: `https://contoso.dexpro-solutions.de/api`,
         *   headers: { Accept: 'application/pdf' },
         *   encryptedHeaders: { 'X-API-KEY': encryptedKey },
         * });
         *
         * // connection to destination environment
         * const graphConnection = rules.connectionManager.createMicrosoftGraphAppOnlyConnection({
         *   id: `MSGraphTestConnection`,
         *   tenant: 'e428de6f-f400-45aa-bf32-8cf1ee7a4e17',
         *   clientId: 'bd0c615a-6f55-4d5d-9c60-19c1e191155f',
         *   encryptedClientSecret: myEncryptedSecret,
         * });
         *
         * let downloadUrl = `https://contoso.dexpro-solutions.de/api/getPdfAttachment?documentId=42`;
         * let uploadUrl = `https://graph.microsoft.com/v1.0/sites/contoso.sharepoint.com,aa09435b-5ad1-418d-832e-528deff592b1,cbff8300-681e-4743-9328-d3c0a18b232c/drives/04e130b68f7c414f8264c724e40f6588-bd5676bc89ac4663b5b1719196ca1e4e/items/2622F5CB-61C4-430D-B070-AF2F976DD9A2:/InvoiceFromDexpro.pdf:/content`;
         *
         * // copy document as stream
         * const result = await rules.copyDocumentAsStream({
         *   source : {
         *     connectionId : dexproConnection.id,
         *     url : downloadUrl,
         *     method : 'GET',
         *   },
         *   destination : {
         *     connectionId : 'MSGraphTestConnection',
         *     url : uploadUrl,
         *     method : 'PUT',
         *   }
         * });
         * ```
         */
        copyDocumentAsStream(options: CopyDocumentAsStreamOptions): Promise<any>;
        /**
         * @deprecated Renamed to rules.Mail.sendSharePointMail()
         *
         * Send an Email using SharePoint API.
         *
         * _Limitations:_
         * - only internal Emails (valid site users only)
         * - no Attachment support
         *
         * ```
         *
         * await rules.sendSharePointMail({
         *   to : String|String[],  // Recipient Email address as string or multiple as array of strings (only valid site users!)
         *   subject : String,  // Subject of Email
         *   body? : String,  // Email content (plain text or HTML)
         *   cc? : String|String[],  // CC Recipient Email address as String or multiple as Array of Strings (only valid site users!)
         *   bcc? : String|String[],  // BCC Recipient Email address as String or multiple as Array of Strings (only valid site users!)
         *   from? : String,  // Email address of sender (only valid site user) [default=Name of web <no-reply@sharepointonline.com>]
         *   webUrl? : String,  // Absolute url of context web [default=rules.Context.webUrl]
         *   additionalHeaders? : Object,  // Key-value object for additional Email headers
         * });
         * ```
         * ```
         * //EXAMPLE:
         * const mailBody = `<p>Luke,</p><p>I'm your <i>father</i>!</p>`;
         * await rules.sendSharePointMail({
         *   to: 'luke@contoso.onmicrosoft.com',
         *   cc: ['leia@contoso.onmicrosoft.com', 'han@contoso.onmicrosoft.com'],
         *   bcc: 'imperator@contoso.onmicrosoft.com',
         *   subject: 'for your information',
         *   body: JSON.stringify(mailBody),
         *   additionalHeaders: { "X-MC-Tags": "StarWars" },
         * })
         *
         * ```
         */
        sendSharePointMail(options: SendSharePointMailOptions): Promise<void>;
        /**
         * Create a file with text based content (binary files are not supported).
         * Supports creating files with a Base64-encoded string.
         *
         * _NOTE_:
         * The function returns the SharePoint item id of created file.
         * If option.overwrite=`false` and file already exists the function returns `undefined`.
         * ```
         *
         * const result = await rules.createFile({
         *   listUrl: String, // Absolute Url of list
         *   fileName: String, // Name of file (incl. file extension)
         *   content: String, // File Content as string
         *   folderPath?: String, // List relative url of file
         *   ensureFolderPath?: Boolean, // Ensure existence of folderPath, create missing parts [default=false]
         *   overwrite?: Boolean, // Overwrite existing file [default=true]
         * 	 encoding?: String // Desired encoding of the content (currently only "Base64" is supported)
         * });
         *
         * result = Number; // SharePoint item id of file
         *
         * //EXAMPLE: file does not exist or file can be overwritten
         * let fileItemId = await rules.createFile({
         *   listUrl,
         *   fileName: 'Lorem_ipsum.json'
         *   content: JSON.stringify({ customKey: 'custom value' })
         *   folderPath: `/subFolder`
         * });
         * // fileItemId = 42
         *
         * //EXAMPLE: overwrite=false and file already exists
         * let fileItemId = await rules.createFile({
         *   listUrl,
         *   fileName: 'Lorem_ipsum.json'
         *   content: JSON.stringify({ customKey: 'new custom value' })
         *   folderPath: `/subFolder`
         *   overwrite: false
         * });
         * // fileItemId = undefined
         * ```
         */
        createFile(options: CreateFileOptions): Promise<Number | void>;
        /**
         * Gets the content of a file (binary files are not supported).
         * File is identified by filePath or itemId.
         * Supports retrieval of files as a Base64-encoded string.
         * ```
         *
         * const result = await rules.getFileContent({
         *   listUrl: String, // Absolute Url of list
         *   filePath?: String, // List relative url of file
         *   itemId?: Number|String, // ID of Sharepoint list item (file)
         * 	 encoding?: string // Desired encoding of the content (currently only "Base64" is supported)
         * });
         *
         * result = String; // String with content of file
         *
         * //EXAMPLE:
         * const fileContent = await rules.getFileContent({
         *   listUrl,
         *   filePath: `/subFolder/Lorem_ipsum.txt`
         *   encoding: 'Base64'
         * });
         * // iterate each line of file content
         * const lines = fileContent.split('\r\n');
         * for (let line of lines) {
         *   rules.logInfo(line);
         * }
         *
         * ```
         */
        getFileContent(options: GetFileContentOptions): Promise<string>;
        /**
         * Gets the binary content of a file.
         * File is identified by the listUrl and the itemId.
         * ```
         *
         * const result = await rules.getBinaryFileContentById({
         *   listUrl: String, // Absolute Url of list
         *   itemId: Number|String, // ID of Sharepoint list item (file)
         * });
         *
         * result = Uint8Array; // Binary array with content of file
         *
         * //EXAMPLE:
         * const fileContent = await rules.getBinaryFileContentById({
         *   listUrl: 'https://contoso.sharepoint.com/sites/contososite/contosodoclib',
         *   itemId: 1
         * });
         *
         * ```
         */
        getBinaryFileContentById(options: Document.GetBinaryFileContentByIdOptions): Promise<Uint8Array>;
        /**
         * Gets the binary content of a file.
         * File is identified by listUrl and the documentPath.
         * ```
         *
         * const result = await rules.getBinaryFileContentByUrl({
         *   listUrl: String, // Absolute Url of list
         *   documentPath: String, // List relative url of file
         * });
         *
         * result = Uint8Array; // Binary array with content of file
         *
         * //EXAMPLE:
         * const fileContent = await rules.getBinaryFileContentByUrl({
         *   listUrl: 'https://contoso.sharepoint.com/sites/contososite/contosodoclib',
         *   documentPath: `/subFolder/Lorem_ipsum.txt`
         * });
         *
         * ```
         */
        getBinaryFileContentByUrl(options: Document.GetBinaryFileContentByUrlOptions): Promise<Uint8Array>;
        /**
         * Function checks out a document
         *
         * @example
         * await rules.checkOutDocument({
         *   webUrl : String, // Absolute web url where the library is located
         *   documentPath: String // Absolute or relative url to the document
         * });
         */
        checkOutDocument(options: Document.CheckOutDocumentOptions): Promise<void>;
        /**
         * Function undoes a check out of a document
         *
         * @example
         * await rules.undoCheckOutDocument({
         *   webUrl : String, // Absolute web url where the library is located
         *   documentPath: String // Absolute or relative url to the document
         * });
         */
        undoCheckOutDocument(options: Document.UndoCheckOutDocumentOptions): Promise<void>;
        /**
         * Function checks in a document
         *
         * @example
         * const result = await rules.checkInDocument({
         *   webUrl: String, // Absolute web url where the library is located
         *   documentPath: String, // Absolute or relative url to the document
         *   checkInType?: String, // Type of check in 'Minor' | 'Major' | 'Overwrite' [default=Major]
         *   comment?: string // Comment of the check in (max. 1023 chars)
         * });
         *
         * result : String; // Warning message if comment was shortened
         */
        checkInDocument(options: Document.CheckInDocumentOptions): Promise<void>;
        /**
         * Function publish a document
         *
         * @example
         * const result = await rules.publishDocument({
         *   webUrl : String, // Absolute web url where the library is located
         *   documentPath: String, // Absolute or relative url to the document
         *   comment?: String // Comment of the check in (max. 1023 chars)
         * });
         *
         * result : String; // Warning message if comment was shortened
         */
        publishDocument(options: Document.PublishDocumentOptions): Promise<void>;
        /**
         * Function unpublish a document
         *
         * @example
         * const result = await rules.unpublishDocument({
         *   webUrl : String, // Absolute web url where the library is located
         *   documentPath: String, // Absolute or relative url to the document
         *   comment?: String // Comment of the check in (max. 1023 chars)
         * });
         *
         * result : String; // Warning message if comment was shortened
         *
         */
        unpublishDocument(options: Document.UnPublishDocumentOptions): Promise<void>;
        /**
         * Function to convert a document to another file format using it's Microsoft Graph resource url. Currently only conversion to PDF is supported.
         * A list of all file formats that can be converted can be found here:
         * https://learn.microsoft.com/en-us/graph/api/driveitem-get-content-format?view=graph-rest-1.0
         *
         * @example
         * const result = await rules.convertDocument({
         *   resource : String, // Microsoft Graph API resource link to a document in SharePoint or OneDrive
         *   version?: String, // Microsoft Graph version 'v1.0' for production or 'beta' [default='v1.0']
         *   connectionId?: String // Name of connection, connection must be type of MicrosoftGraph connection [default: 'MicrosoftGraphBuildInConnection']
         * });
         *
         * // Promise.resolve
         * result = {
         *   status : String,  // HTTP status code of response
         *   statusText: String,  // HTTP status text of response
         *   body : Uint8Array | String,  // HTTP body of response: Returns String, when StatusCode != 200, otherwise Uint8Array
         *   headers : Object.<String, String> // HTTP header of response
         * }
         *
         */
        convertDocumentByResourceUrl(options: Document.ConvertDocumentByResourceUrlOptions): Promise<HttpResult>;
        /**
         * Function to convert a document to another file format using Microsoft Graph. Currently only conversion to PDF is supported.
         * A list of all file formats that can be converted can be found here:
         * https://learn.microsoft.com/en-us/graph/api/driveitem-get-content-format?view=graph-rest-1.0
         *
         * @example
         * const result = await rules.convertDocument({
         *   listUrl: String, // Absolute Url of the list
         *   itemId: String | Number, // ItemId of the SharePoint document
         *   version?: String, // Microsoft Graph version 'v1.0' for production or 'beta' [default='v1.0']
         *   connectionId?: String // Name of connection, connection must be type of MicrosoftGraph connection [default: 'MicrosoftGraphBuildInConnection']
         * });
         *
         * // Promise.resolve
         * result = {
         *   status : String,  // HTTP status code of response
         *   statusText: String,  // HTTP status text of response
         *   body : Uint8Array | String,  // HTTP body of response: Returns String, when StatusCode != 200, otherwise Uint8Array
         *   headers : Object.<String, String> // HTTP header of response
         * }
         *
         */
        convertDocumentById(options: Document.ConvertDocumentByIdOptions): Promise<HttpResult>;
        /**
         * Function to get the binary content of a SharePoint document as a Base64 string.
         */
        private getDocumentAsBase64String;
        /**
         * Helper function to return a new test engine instance
         */
        private getTestEngineInstance;
        /**
         * Helper function to return a new WaitIntervals instance
         */
        private createWaitIntervals;
        /**
         * Helper function to bind the ShareflexRules on waitUntil
         */
        private bindWaitUntil;
    }
}
declare module "core/RequestBuilder" {
    import ShareflexRules, { RestServiceOptions } from "ShareflexRules";
    import { ItemFields } from "core/ItemFields";
    export interface PrepareCreateFolderRequestOptions {
        rules: ShareflexRules;
        options: {
            /** Absolute list url */
            listUrl: string;
            /** Name of new folder */
            folderName: string;
            /** Folder path if folder not in list root */
            subFolderPath?: string;
            /** Specific content type id [default='0x0120'] */
            contentTypeId?: string;
            /** Fields object containing all fields and their values to be set */
            fields?: ItemFields;
        };
        requestDigest?: string;
    }
    export function prepareCreateFolderRequest({ rules, options: { listUrl, folderName, subFolderPath, contentTypeId, fields }, requestDigest, }: PrepareCreateFolderRequestOptions): RestServiceOptions;
}
declare module "xml/xml" {
    export { XmlConverter } from "util/XmlConverter";
}
