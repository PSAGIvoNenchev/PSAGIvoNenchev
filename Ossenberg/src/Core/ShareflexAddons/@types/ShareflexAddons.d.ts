/// <reference path="../@types/ShareflexRules.d.ts" />
/// <reference path="../@types/ShareflexPermissions.d.ts" />
/// <reference path="../@types/ShareflexFlow.d.ts" />
/// <reference path="../@types/ShareflexJobs.d.ts" />
/// <reference path="../@types/ShareflexNotifications.d.ts" />
declare module 'ShareflexAddons' {
	/**
	 * @typedef GetErrorObjectOptions
	 * @type {Object}
	 * @property {string} name  name of error causing function
	 * @property {*} options  configuration object of error causing function
	 * @property {string} ApiStack  Error().stack of error causing segment
	 * @property {string} [missingParam] name of missing parameter (otherwise options.text has to be provided)
	 * @property {string} [text] individual error text (if no options.missingParam is provided)
	 */
	/**
	 * @typedef ApiFunctionInfo
	 * @type {Object}
	 * @property {string} name  Name of API function
	 * @property {*} options  Provided API function parameters
	 */
	/**
	 * @typedef ErrorObject
	 * @type {Object}
	 * @property {string} message error text
	 * @property {ApiFunctionInfo} ApiFn  Information about of error causing API function
	 * @property {string} ApiStack  Error().stack of error causing segment
	 */
	export default class ShareflexAddons {
		constructor(rules: any);
		/**
		 * @type {import('ShareflexRules').default}
		 * @private
		 */
		private _rules;
		/**
		 * @type {DelegationResource}
		 * @private
		 */
		private delegationRESX;
		/**
		 * @private
		 * @type {AddonsLists}
		 */
		private _listUrls;
		/**
		 * @deprecated Renamed to 'addons.rules'
		 *
		 * Get the current rules object (Shareflex Rules API)
		 * ```
		 * const rules = addons.getCurrentRulesAPI();
		 *
		 * rules = ShareflexRules
		 * ```
		 */
		getCurrentRulesAPI(): import('ShareflexRules').default;
		/**
		 * Get the current rules object (Shareflex Rules API)
		 * ```
		 * const rules = addons.rules;
		 *
		 * rules = ShareflexRules API
		 * ```
		 */
		get rules(): import('ShareflexRules').default;
		/**
		 * All valid values for AdminJob status field (aoAdminJobStatus)
		 * @returns {AdminJobStates}
		 */
		get adminJobStates(): AdminJobStates;
		/**
		 * @returns {AddonsLists}
		 */
		get listUrls(): AddonsLists;
		/**
		 * Get language keys for absence and delegation
		 * ```
		 * let result = addons.getDelegationLanguageKeys();
		 *
		 * result = DelegationResource;
		 *
		 * DelegationResource = {
		 *   [LCID : String] : {
		 *     statusCompleted : String,
		 *     taskDelegation : String,
		 *     taskDelegationReturn : String,
		 *     batchDelegation : String,
		 *     batchDelegationReturn : String,
		 *     statusActive : String,
		 *     statusInactive : String,
		 *     statusReturning : String,
		 *     preventDeletingMsg : String
		 *   }
		 * }
		 * ```
		 * @returns {DelegationResource}
		 */
		getDelegationLanguageKeys(): DelegationResource;
		/**
		 * Initialize a Shareflex Permissions functions object (Shareflex Permissions API)
		 *
		 * ```
		 * const addons = new ShareflexAddons(rules);
		 * const permissions = addons.initPermissionsAPI();
		 *
		 * permissions = ShareflexPermissions (see documentation)
		 *
		 * ```
		 * @returns {ShareflexPermissions}
		 */
		initPermissionsAPI(): ShareflexPermissions;
		/**
		 * Initialize a Shareflex Flow functions object (Shareflex Flow API)
		 *
		 * ```
		 * const addons = new ShareflexAddons(rules);
		 * const flow = addons.initFlowAPI();
		 *
		 *
		 * flow = ShareflexFlow (see documentation)
		 *
		 * ```
		 * @returns {ShareflexFlow}
		 */
		initFlowAPI(): ShareflexFlow;
		/**
		 * Initialize a Shareflex Jobs functions object (Shareflex Jobs API)
		 *
		 * ```
		 * const addons = new ShareflexAddons(rules);
		 * const jobs = addons.initJobsAPI(siteUrl?);
		 *
		 * siteUrl? : String  // Absolute url to a SiteCollection [default=rules.Event.siteUrl]
		 *
		 * jobs = {
		 *   adminJobs : ShareflexAdminJobs,  // Shareflex AdminJobs API
		 *   transactionJobs : ShareflexTransactionJobs,  // Shareflex TransactionJobs API
		 * }
		 *
		 * ```
		 * @param {string} [siteUrl]  Url of the SiteCollection
		 * @returns {ShareflexJobs}
		 */
		initJobsAPI(siteUrl?: string): ShareflexJobs;
		/**
		 * Initialize a Shareflex Flow functions object (Shareflex Flow API)
		 *
		 * ```
		 * const addons = new ShareflexAddons(rules);
		 * const notifications = addons.initNotificationsAPI();
		 *
		 * notifications = ShareflexNotifications (see documentation)
		 *
		 * ```
		 * @returns {ShareflexNotifications}
		 */
		initNotificationsAPI(): ShareflexNotifications;
		/**
		 * Create a new Shareflex Addons ChangeTracker functions object (Shareflex Addons API)
		 *
		 * ```
		 * const addons = new ShareflexAddons(rules);
		 * const changeTracker = addons.createChangeTracker();
		 *
		 * changeTracker.init();
		 *
		 * changeTracker.finalize();
		 *
		 * ```
		 * @returns {ChangeTracker}
		 */
		createChangeTracker(): ChangeTracker;
		/**
		 * @typedef SortItemsByFieldOptions
		 * @type {Object}
		 * @property {string} listUrl  Url of list
		 * @property {string} filter  Filter to identify elements to be sorted
		 * @property {string} sortByField  Field name to order elements by (ascending order)
		 * @property {Object} [refItem]  Reference item for order logic (event)
		 * @property {boolean} [excludeRefItem]  Order all filtered items, but exclude reference item (e.g. ItemDeleting event of reference item)
		 * @property {Number[]} [excludeItemIds]  Array of ListItem.Ids to be excluded from sorting (e.g. when deleting multiple Elements from external at the same time)
		 * @property {ChangeTrackerInitOptions} [changeTrackerConfig]  ChangeTracker configuration for update changes on other items
		 */
		/**
		 * Function to sort Items of a list by one single field and ensure straight values starting by 1 to max.
		 *
		 * _NOTE:_
		 * If `refItem` is passed, this function will only update all other elements and
		 * will return the correct order number of the refItem.
		 *
		 * ```
		 * let result = await addons.sortItemsByField({
		 *   listUrl : String,  // Url of list
		 *   filter : String,  // Filter to identify elements to be sorted
		 *   sortByField : String,  // Field name to order elements by (ascending order)
		 *   refItem? : Object,  // Reference item for order logic (event)
		 *   excludeRefItem? : Boolean,  // Order all filtered items, but exclude reference item (e.g. ItemDeleting event of reference item)
		 *   excludeItemIds? : Number[] | String[],  // Array of ListItem.Ids to be excluded from sorting (e.g. when deleting multiple Elements from external at the same time)
		 *   changeTrackerConfig? : ChangeTrackerInitOptions  // ChangeTracker configuration for update changes on other items (see documentation)
		 * });
		 *
		 * result = number;  // Correct order number of passed 'refItem'
		 * ```
		 * @param {SortItemsByFieldOptions} options
		 * @returns {Promise<number>}  Correct order number of passed 'refItem'
		 */
		sortItemsByField(options: {
			/**
			 * Url of list
			 */
			listUrl: string;
			/**
			 * Filter to identify elements to be sorted
			 */
			filter: string;
			/**
			 * Field name to order elements by (ascending order)
			 */
			sortByField: string;
			/**
			 * Reference item for order logic (event)
			 */
			refItem?: any;
			/**
			 * Order all filtered items, but exclude reference item (e.g. ItemDeleting event of reference item)
			 */
			excludeRefItem?: boolean;
			/**
			 * Array of ListItem.Ids to be excluded from sorting (e.g. when deleting multiple Elements from external at the same time)
			 */
			excludeItemIds?: number[];
			/**
			 * ChangeTracker configuration for update changes on other items
			 */
			changeTrackerConfig?: ChangeTrackerInitOptions;
		}): Promise<number>;
		/**
		 * Function to check the absence of a specific user, checked by today
		 * ```
		 * let result = await addons.isUserAbsent(userId);
		 *
		 * result = {
		 *   isAbsent : Boolean,  // If user is currently absent
		 *   absenceConfigItem : AbsenceItem  // Configuration object with further information
		 * }
		 *
		 * AbsenceItem = {
		 *   Id : Number,  // SharePoint item id
		 *   aoDelegateFrom : UserFieldProperties,  // User who is absent
		 *   aoDelegateTo : UserFieldProperties,  // User who is the deputy
		 *   aoDelegateDateStart : String,  // UTC dateTime string
		 *   aoDelegateDateEnd : String,  // UTC dateTime string
		 *   aoDelegateComment : String,  // Reason of absence
		 * }
		 *
		 * UserFieldProperties = {
		 *   Id : Number,  // Id of users list
		 *   Title : String,  // Display name of user
		 *   Name : String,  // Login name of user
		 * }
		 *
		 * ```
		 * @param {number} userId
		 * @returns {Promise<IsUserAbsentResult>}
		 */
		isUserAbsent(userId: number): Promise<IsUserAbsentResult>;
		/**
		 * Function to get all non expired absence configurations or for a specific user, checked by today
		 * ```
		 * let result = await addons.getNonExpiredAbsences();
		 *
		 * result = AbsenceItem[]
		 *
		 * AbsenceItem = {
		 *   Id : Number,  // SharePoint item id
		 *   aoDelegateFrom : UserFieldProperties,  // User who is absent
		 *   aoDelegateTo : UserFieldProperties,  // User who is the deputy
		 *   aoDelegateDateStart : String,  // UTC dateTime string
		 *   aoDelegateDateEnd : String,  // UTC dateTime string
		 *   aoDelegateComment : String,  // Reason of absence
		 * }
		 *
		 * UserFieldProperties = {
		 *   Id : Number,  // Id of users list
		 *   Title : String,  // Display name of user
		 *   Name : String,  // Login name of user
		 * }
		 * ```
		 * @param {number} [userId]
		 * @returns {Promise<AbsenceItem[]>}
		 */
		getNonExpiredAbsences(userId?: number): Promise<AbsenceItem[]>;
		/**
		 * Function checks is task responsible (AssignedTo) absent and delegate the task if necessary
		 * @param {Object} options
		 * @param {string} options.taskListUrl
		 * @param {number} options.taskItemId
		 * @param {{AssignedToId: number, Title: string, Status: string, aoDelegationStatus: string, FileRef: string, FileSystemObjectType: number, ContentTypeId: string}} [taskItemFieldsObj]
		 */
		checkAbsenceAndHandleTaskDelegation(
			options: {
				taskListUrl: string;
				taskItemId: number;
			},
			taskItemFieldsObj?: {
				AssignedToId: number;
				Title: string;
				Status: string;
				aoDelegationStatus: string;
				FileRef: string;
				FileSystemObjectType: number;
				ContentTypeId: string;
			}
		): Promise<void>;
		/**
		 * This function executes passed functions one after the other and passes the result through the pipeline
		 *
		 * ```
		 * const fnPipe = addons.createFnPipeline(fn1,fn2,fn3);
		 *
		 * let result = await fnPipe(options);
		 *
		 * result = {
		 *   fn1Props,
		 *   fn2Props,
		 *   fn3Props
		 * }
		 *
		 * async function fn1(options) {
		 *   let result = await asyncFn(options);
		 *
		 *   return { nextOptions: options, result: result};
		 * }
		 * function fn2(options) {
		 *   let { beforeResult: result, nextOptions } = options;
		 *
		 *   let result = {...beforeResult};
		 *   result.fn2Props = "Props of fn2";
		 *
		 * 	 return { nextOptions: options, result: result};
		 * }
		 * async function fn3(options) {
		 *   let { beforeResult: result, nextOptions } = options;
		 *   let result = await asyncFn(options);
		 *
		 *   let result = {...beforeResult};
		 *   result.fn3Props = result;
		 *
		 *   return result;
		 * }
		 * ```
		 *
		 */
		createFnPipeline: (...fns: any[]) => (input: any) => any;
		/**
		 * Helper function to get REST query parameters based on 'select' fields
		 *
		 * ```
		 * const fields = ['Title','UserField/Id','UserField/Name'];
		 * const { selects, expands } = addons.prepareRestQueryFields(fields);
		 * const myRestQuery = `${RestEndpoint}?$select=${selects.join(',')}&$expand=${expands.join(',')}`
		 * ```
		 *
		 * @param {string[]} fields
		 * @returns { { keys: string[], selects: string[], expands: string[] }}
		 */
		prepareRestQueryFields(fields: string[]): {
			keys: string[];
			selects: string[];
			expands: string[];
		};
		/**
		 * Function to generate an error information object
		 *
		 * ```
		 *
		 * //EXAMPLE:
		 * return Promise.reject(addons.getErrorObject({
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
		 * @param {GetErrorObjectOptions} options
		 * @returns {ErrorObject}
		 */
		getErrorObject(options: GetErrorObjectOptions): ErrorObject;
		/**
		 * Function to get message text of an Error
		 *
		 * @example
		 *
		 * let errorText = '';
		 * try {
		 *   //... some code
		 * } catch (error) {
		 *   errorText = addons.getErrorMessage(error);
		 * }
		 *
		 * errorText : String  // Message of error
		 *
		 * @param {unknown} error
		 * @returns {string}
		 */
		getErrorMessage(error: unknown): string;
		/**
		 * Function get an item and resolve lookups, only Id and lookup column no other expand fields possible.
		 * @param {{ listUrl: string, itemId: number | string, fields: string | string []  }} options
		 * All lookups will be resolved also lookups from other webs.
		 * @returns {Promise<GetItemWithResolvedLookupsResult>}
		 */
		getItemWithResolvedLookups(options: { listUrl: string; itemId: number | string; fields: string | string[] }): Promise<GetItemWithResolvedLookupsResult>;
		/**
		 * Function get all lookup fields from a specific list and convert all information to a schema object.
		 * @param {string} listUrl
		 * @returns {Promise<LookupFieldSchemaObj>}
		 */
		getLookupFieldSchemaObj(listUrl: string): Promise<LookupFieldSchemaObj>;
		/**
		 * Function to build a helper object for value convert process
		 * @param {string[]} lookupFields
		 * @returns {LookupConvertProps}
		 */
		getLookupConvertProps(lookupFields: string[], listLookupFieldsSchemaObj: any): LookupConvertProps;
		/**
		 * Function provides a lookup values converter for single/multi lookup, fieldValues of a request over REST endpoint 'RenderListDataAsStream'
		 * @param {*} fieldValues
		 * @returns {LookupFieldValuesConverter}
		 */
		getLookupFieldValuesConverter(fieldValues: any): LookupFieldValuesConverter;
		/**
		 * Function checks the fields and separates the fields to general (all fields without type like lookup) and lookup (only fields type of Lookup and MultiLookup)
		 * @param {string | string[]} fields
		 * @param {LookupFieldSchemaObj} listLookupFieldsSchemaObj
		 * @returns {SeparatedFieldsObj}
		 */
		getSeparatedFields(fields: string | string[], listLookupFieldsSchemaObj: LookupFieldSchemaObj): SeparatedFieldsObj;
		/**
		 * // REVIEW: replace with rules.getItemDataAsStream when is available
		 * Function to get item data with 'RenderListDataAsStream' endpoint
		 * @param {{ listUrl: string, itemId: number | string, fields: string | string []  }} options
		 */
		getItemDataAsStream(options: { listUrl: string; itemId: number | string; fields: string | string[] }): Promise<any>;
		/**
		 * Function returns a collection of field references for a CAML viewField part
		 * @param {string|string[]} fields
		 * @returns {string}
		 */
		getViewFields(fields: string | string[]): string;
		/**
		 * Function to retrieve if folders have to be cleared before deletion.
		 *
		 * Can be used to centrally handle SharePoint Hold Policy.
		 *
		 * Usage:
		 * - add placeholder 'clearFolderFirstBeforeDeletion' (boolean) to Shareflex Rules configuration
		 *
		 * ```
		 *
		 * // EXAMPLE:
		 * await rules.deleteFolder({
		 *   listUrl: myListUrl,
		 *   folderPath: myFolderPath,
		 *   clearFolderFirst: addons.getClearFolderFirstConfig(),
		 * });
		 * ```
		 *
		 * @returns {boolean} If folders have to be cleared before deletion
		 */
		getClearFolderFirstConfig(): boolean;
		/**
		 * Function to check if a LoginName can be used to set a UserField value
		 *
		 * _NOTE:_ Can not handle deactivated user accounts
		 *
		 * ```
		 *
		 * //EXAMPLE
		 * const updateFields = rules.createItemFields();
		 * const loginName = 'i:0#.f|membership|foo@contoso.onmicrosoft.com';
		 *
		 * const isValid = addons.isValidUserFieldValue(loginName);
		 *
		 * if (isValid) {
		 *   updateFields.setUser('myUserField', loginName);
		 * }
		 *
		 * await rules.updateItem({
		 *   listUrl,
		 *   itemId,
		 *   fields: updateFields,
		 * });
		 * ```
		 *
		 * @param {string} loginName LoginName (Claims token) or SharePoint group name
		 * @returns {boolean} If LoginName can be used to set a UserField
		 */
		isValidUserFieldValue(loginName: string): boolean;
	}
	export type PublicConfigurationListItem = {
		Id: number;
		/**
		 * Title of solution configuration  (e.g. 'weManualBinding|id|id')
		 */
		Title: string;
		/**
		 * Relative url to a web or list which consume the configuration
		 */
		aoContextUrl: string;
		/**
		 * JSON with specific use case configuration (e.g 'weStartEventManualOptionsJSON')
		 */
		aoConfigJSON: string;
	};
	export type FieldValueInfo = {
		/**
		 * Field value
		 */
		value: any;
		/**
		 * Timestamp the current value has been set
		 */
		timestamp: string;
		/**
		 * Context that triggered this change (e.g. 'Event', 'Admin Tool', 'My Timerjob ABC')
		 */
		triggeredBy: string;
		/**
		 * Name of Editor if tracked
		 */
		editor?: string;
		/**
		 * Login of Editor if tracked
		 */
		login?: string;
	};
	/**
	 * Properties tracked for one field
	 */
	export type TrackedField = {
		/**
		 * If field value has changed since last tracked change
		 */
		changed: boolean;
		/**
		 * Current properties of field
		 */
		new: FieldValueInfo;
		/**
		 * Last version properties of field
		 */
		old?: FieldValueInfo;
	};
	/**
	 * Old and new value of a field stored in one ChangeTracker version
	 */
	export type VersionFieldValues = {
		/**
		 * New field value
		 */
		newValue: any;
		/**
		 * Previous field value if available
		 */
		oldValue?: any;
	};
	/**
	 * Default properties of a change
	 */
	export type ChangeTrackerVersionTemplate = {
		/**
		 * Timestamp of this version
		 */
		timestamp: string;
		/**
		 * Context that triggered this change (e.g. 'Event', 'Admin Tool', 'My Timerjob ABC')
		 */
		triggeredBy: string;
		/**
		 * Name of Editor if tracked
		 */
		editor?: string;
		/**
		 * Login of Editor if tracked
		 */
		login?: string;
	};
	/**
	 * All relevant information of tracked changes of one detected item update (if not deactivated)
	 */
	export type ChangeTrackerVersion = ChangeTrackerVersionTemplate & {
		fields: {
			[fieldName: string]: VersionFieldValues;
		};
	};
	/**
	 * ChangeTracker JSON
	 */
	export type ChangeTrackerJson = {
		/**
		 * DateTime of latest update in ISO format
		 */
		timestamp: string;
		/**
		 * Context that triggered this change (e.g. 'Event', 'Admin Tool', 'My Timerjob ABC')
		 */
		triggeredBy: string;
		/**
		 * Name of Editor if tracked
		 */
		editor?: string;
		/**
		 * Login of Editor if tracked
		 */
		login?: string;
		/**
		 * fields which have been changed since last tracked change
		 */
		changedFields: string[];
		/**
		 * Object with field names as keys and TrackedField objects as values
		 */
		fields: {
			[fieldName: string]: TrackedField;
		};
		/**
		 * History of all item changes
		 */
		versions: ChangeTrackerVersion[];
	};
	/**
	 * Result of tracked Changes
	 */
	export type ChangeTrackerResult = {
		/**
		 * if ChangeTracker was processed correctly
		 */
		result: boolean;
		/**
		 * status message
		 */
		message: string;
		/**
		 * Fields of ListItem with current values (based on loadFields)
		 */
		itemProperties?: any;
		/**
		 * new generated ChangeTracker JSON object
		 */
		changedJson?: ChangeTrackerJson;
		/**
		 * if JSON was initially generated
		 */
		isNew?: boolean;
		/**
		 * if any tracked field has changed
		 */
		hasChanged?: boolean;
		/**
		 * fields which have been changed since last tracked change
		 */
		changedFields?: string[];
	};
	export type ItemContextObject = {
		/**
		 * Absolute url of list
		 */
		listUrl: string;
		/**
		 * Id of SharePoint list item
		 */
		itemId: number;
	};
	export type ListFieldProperties = {
		/**
		 * Type of field
		 */
		TypeAsString: string;
		/**
		 * GUID of Lookup list (e.g. "{9dea1ee2-7e67-4992-9ffc-966d4d919e5c}")
		 */
		LookupList: string;
		/**
		 * If field is hidden
		 */
		Hidden: boolean;
	};
	export type ListFieldInfos = {};
	/**
	 * ChangeTracker init object
	 */
	export type ChangeTrackerInitOptions = {
		/**
		 * Internal item field name of JSON object
		 */
		targetField: string;
		/**
		 * Name of item fields to track
		 */
		trackedFields: string | string[];
		/**
		 * Name of item fields to read from DB (to be returned with current values)
		 */
		loadFields?: string | string[];
		/**
		 * The way how to track: all information or anonymous (= no editor data) : all (default), anonymous
		 */
		mode?: 'all' | 'anonymous';
		/**
		 * Track items version history by publishing results in versions object at every update [default=true]
		 */
		versions?: boolean;
		/**
		 * Update Item with final result directly. Otherwise finalizeChangeTracker has to write result [default=false]
		 */
		saveChanges?: boolean;
		/**
		 * If a new version of item should be created by `saveChanges=true` [default=false]
		 */
		incrementVersion?: boolean;
		/**
		 * Context object with information about item to be tracked
		 */
		context?: ItemContextObject;
		/**
		 * Object with all relevant item properties for ChangeTracker logic (to prevent DB read/write request)
		 */
		fieldValues?: any;
		/**
		 * Timestamp of changes passed as fieldValues in local web time (in combination with 'fieldValues' only!) [default= now as UTC-0]
		 */
		timestamp?: string;
		/**
		 * Context to initialize ChangeTracker for (e.g. 'Event', 'Admin Tool', 'My Timerjob ABC') [default='Event']
		 */
		triggeredBy?: string;
	};
	/**
	 * ChangeTracker finalize object
	 */
	export type ChangeTrackerFinalizeOptions = {
		/**
		 * Object with additional item properties to be updated in same request
		 */
		updateFields?: import('ShareflexRules').ItemFields;
		/**
		 * If tracked fields have to be read from DB again before final analysis of changes
		 */
		reloadItem?: boolean;
		/**
		 * If a new version of item should be created [default=false]
		 */
		incrementVersion?: boolean;
	};
	export type ListFieldsByType = {
		DateTime: string[];
		User: string[];
		UserMulti: string[];
	};
	/**
	 * Resource string object for multi language support
	 */
	export type DelegationResource = {
		[LCID: string]: {
			statusCompleted: string;
			taskDelegation: string;
			taskDelegationReturn: string;
			batchDelegation: string;
			batchDelegationReturn: string;
			statusActive: string;
			statusInactive: string;
			statusRetracted: string;
			statusReturning: string;
			preventDeletingMsg: string;
		};
	};
	export type UserFieldProperties = {
		Id: number;
		Title: string;
		Name: string;
	};
	export type UTCDateString = string;
	export type AbsenceItem = {
		/**
		 * SharePoint item id
		 */
		Id: number;
		/**
		 * Reason of absence
		 */
		Title: string;
		/**
		 * User
		 */
		aoDelegateFrom: UserFieldProperties;
		/**
		 * User
		 */
		aoDelegateTo: UserFieldProperties;
		aoDelegateDateStart: UTCDateString;
		aoDelegateDateEnd: UTCDateString;
		aoDelegateComment: string;
	};
	export type IsUserAbsentResult = {
		/**
		 * If user is currently absent
		 */
		isAbsent: boolean;
		/**
		 * Configuration object with further information
		 */
		absenceConfigItem: AbsenceItem;
	};
	/**
	 * Logs / TimerJobs
	 */
	export type CleanUpLogsConfig = {
		/**
		 * Logging: Number of days after elements with status "Success" are deleted [default=2]
		 */
		deleteLogSuccessDays?: number;
		/**
		 * Logging: Number of days after elements with status "Cancelled" are deleted [default=7]
		 */
		deleteLogCancelledDays?: number;
		/**
		 * Logging: Number of days after elements with status "Warning" are deleted [default=7]
		 */
		deleteLogWarningDays?: number;
		/**
		 * Logging: Number of days after elements with status "Error", "Task Error" and "Internal Error" are deleted [default=30]
		 */
		deleteLogErrorDays?: number;
		/**
		 * Logging: Number of days after elements with an unknown status are deleted [default=60]
		 */
		deleteLogDefaultDays?: number;
	};
	/**
	 * TimerJobs
	 */
	export type CleanUpTimerjobsConfig = {
		/**
		 * Logging: Number of days after aborted timer jobs are deleted [default=30]
		 */
		deleteTimerJobAbortedDays?: number;
	};
	/**
	 * ShareflexAbsences
	 */
	export type CleanUpDelegationsConfig = {
		/**
		 * Delegation: Number of days after 'aoDelegateDateEnd' after elements are deleted [default=30]
		 */
		deleteDelegationDays?: number;
	};
	/**
	 * internal Timerjobs
	 */
	export type CleanUpInternalTimerjobsConfig = {
		/**
		 * Internal TimerJobs: Number of hours after elements with status "Success" are deleted
		 */
		deleteTimerJobSuccessHours?: number;
		/**
		 * Internal TimerJobs: Number of hours after elements with status "Cancelled" are deleted
		 */
		deleteTimerJobCancelledHours?: number;
		/**
		 * Internal TimerJobs: Number of hours after elements with status "Warning" are deleted
		 */
		deleteTimerJobWarningHours?: number;
		/**
		 * Internal TimerJobs: Number of hours after elements with status "Error", "Task Error" and "Internal Error" are deleted
		 */
		deleteTimerJobErrorHours?: number;
		/**
		 * Internal TimerJobs: Number of hours after aborted timer jobs are deleted
		 */
		deleteTimerJobAbortedHours?: number;
	};
	/**
	 * internal AdminWeb lists cache
	 */
	export type CleanUpInternalAdminWebListsCache = {
		/**
		 * Internal SitePool AdminWebLists Cache: Number of hours after elements are deleted
		 */
		deleteAdminWebListsCache?: number;
	};
	/**
	 * peSetPermissions
	 */
	export type CleanUpSetPermissionsConfig = {
		/**
		 * SetPermissions: Number of days after elements with status "Finished" are deleted [default=0]
		 */
		deleteSetPermissionsFinishedDays?: number;
		/**
		 * SetPermissions: Number of days after elements with status "Error" or "" are deleted [default=30]
		 */
		deleteSetPermissionsErrorDays?: number;
	};
	/**
	 * weTriggers
	 */
	export type CleanUpFlowTriggersConfig = {
		/**
		 * Flow Triggers: Number of days after elements with status "Finished" are deleted [default=0]
		 */
		deleteFlowTriggersFinishedDays?: number;
		/**
		 * Flow Triggers: Number of days after elements are deleted by default [default=14]
		 */
		deleteFlowTriggersDefaultDays?: number;
	};
	/**
	 * aoAdminJobs
	 */
	export type CleanUpAdminJobs = {
		/**
		 * AdminJobs (internal only): Number of days after elements with status "Finished" are deleted [default=0]
		 */
		deleteInternalAdminJobsFinishedDays?: number;
		/**
		 * AdminJobs (internal only): Number of days after elements with status "Failed" are deleted [default=30]
		 */
		deleteInternalAdminJobsFailedDays?: number;
	};
	/**
	 * aoAdminJobQueue
	 */
	export type CleanUpAdminJobQueueConfig = {
		/**
		 * AdminJob Queue: Number of days after elements are deleted [default=1]
		 */
		deleteAdminJobQueueInDays?: number;
	};
	/**
	 * aoTransactionJobs
	 */
	export type CleanUpTransactionConfig = {
		/**
		 * TransactionJobs: Number of days after elements with status "Finished" are deleted [default=2]
		 */
		deleteTransactionJobsFinishedInDays?: number;
		/**
		 * TransactionJobs: Number of days after elements with status "Failed" are deleted [default=30]
		 */
		deleteTransactionJobsFailedInDays?: number;
		/**
		 * TransactionJobTriggers: Number of days after unhandled elements are deleted [default=30]
		 */
		deleteTransactionJobTriggersInDays?: number;
	};
	export type InternalCleanUpConfiguration = CleanUpFlowTriggersConfig &
		CleanUpSetPermissionsConfig &
		CleanUpInternalTimerjobsConfig &
		CleanUpInternalAdminWebListsCache &
		CleanUpAdminJobs &
		CleanUpAdminJobQueueConfig &
		CleanUpTransactionConfig;
	export type CleanUpConfigurationDefaults = {
		internal?: InternalCleanUpConfiguration;
		/**
		 * Max. amount of handled (deleted) items per timerjob execution [default=undefined]
		 */
		maxDeletedItems?: number;
	};
	export type CleanUpConfiguration = CleanUpConfigurationDefaults & CleanUpLogsConfig & CleanUpTimerjobsConfig & CleanUpDelegationsConfig;
	export type AdminJobCustomFormState = {
		headerPlaceholder: string;
		fieldsPlaceholder: string;
		footerPlaceholder: string;
		defaultFields: {
			title: string;
			adminJobType: string;
			options: string;
			comment: string;
			log: string;
			batchCallbackFnName: string;
		};
	};
	/**
	 * AdminJobs ListItem
	 */
	export type AdminJobItem = {
		ID: number;
		Title: string;
		aoAdminJobType: {
			Title: string;
		};
		aoAdminJobStatus: string;
		aoResumeJob: boolean;
		aoOptions: string;
		aoLog: string;
		aoInternalAdminJobFnName: string;
		aoParentAdminJobItemId: number;
		aoAdminJobBatchItemId: number;
	};
	export type ShareflexAddonsType = ShareflexAddons;
	export type AdminJobHeartbeatId = number;
	export type AdminJobBatchItemId = number;
	export type AdminJobStopHeartbeatOptions = {
		rules: import('ShareflexRules').default;
		heartbeatId: AdminJobHeartbeatId;
		batchItemId: AdminJobBatchItemId;
		batchItemFields: import('ShareflexRules').ItemFields;
	};
	export type AdminJobHelpers = {
		/**
		 * Function to start Heartbeat
		 */
		startHeartbeat: (rules: import('ShareflexRules').default, batchItemId: AdminJobBatchItemId) => Promise<AdminJobHeartbeatId>;
		/**
		 * Function to stop Heartbeat
		 */
		stopHeartbeat: (options: AdminJobStopHeartbeatOptions) => void;
	};
	/**
	 * AdminJob Result
	 */
	export type AdminJobResult = {
		/**
		 * If job was processed successfully
		 */
		result: boolean;
		/**
		 * Final state of AdminJob [default='Finished']
		 */
		finalState?: FinalAdminJobState;
		/**
		 * If batches are processed by external process (like timerjob) [default=false]
		 */
		externalBatchProcessing?: boolean;
		/**
		 * Messages of admin job processing
		 */
		executionLog?: string[];
		/**
		 * Duration of admin job running time
		 */
		duration?: string;
	};
	/**
	 * AdminJob Result
	 */
	export type AdminJobResultDefaults = {
		/**
		 * If job was processed successfully
		 */
		result: boolean;
		/**
		 * Messages of admin job processing
		 */
		executionLog: string[];
		/**
		 * If batches are processed by external process (like timerjob) [default=false]
		 */
		externalBatchProcessing: boolean;
		/**
		 * Final state of AdminJob [default='Finished']
		 */
		finalState?: FinalAdminJobState;
	};
	/**
	 * AdminJob Result
	 */
	export type AdminJobOptions = {
		/**
		 * Shareflex Rules API
		 */
		rules: import('ShareflexRules').default;
		/**
		 * AdminJob item
		 */
		jobItem: AdminJobItem;
		/**
		 * Absolute urls of AdminJob lists
		 */
		adminJobLists: {
			types: string;
			jobs: string;
			batches: string;
		};
		/**
		 * Shareflex Addons API
		 */
		addons: ShareflexAddonsType;
		/**
		 * Prepared Array for logging purposes
		 */
		executionLog: string[];
		/**
		 * Helper functions
		 */
		helpers: AdminJobHelpers;
		/**
		 * Prepared result object
		 */
		adminJobResult: AdminJobResultDefaults;
	};
	export type FinalAdminJobState = 'Finished' | 'Finished with Error' | 'Failed';
	export type LookupFieldSchemaObj = {
		[internalFieldName: string]: {
			lookupType: string;
			lookupField: string;
		};
	};
	export type LookupConvertProps = {
		[internalFieldName: string]: {
			type: string;
			props: string[];
		};
	};
	export type LookupFieldValuesConverter = {
		Lookup: (fieldName: string, keys: string[]) => {};
		LookupMulti: (fieldName: string, keys: string[]) => {};
	};
	export type SeparatedFieldsObj = {
		generalFields: string[];
		lookupFields: string[];
	};
	export type GetItemWithResolvedLookupsResult = GetItemWithResolvedLookupsResult;
	export type ChangeTrackerInstance = ChangeTracker;
	export type EnsureUpdateOptions = {
		/**
		 * Shareflex Rules API
		 */
		rules: import('ShareflexRules').default;
		/**
		 * Shareflex Rules method to perform Item update with
		 */
		updateItemOptions: import('ShareflexRules').UpdateItemOptions;
	};
	export type EnsureUpdateResult = {
		result: boolean;
		message: string;
	};
	export type AdminJobStates = {
		waiting: 'Waiting';
		executing: 'Executing';
		finished: 'Finished';
		finishedWithError: 'Finished with Error';
		failed: 'Failed';
		pending: 'Pending';
	};
	export type AddonsLists = {
		/**
		 * Absolute url of list aoAdminJobBatches
		 */
		adminJobBatches: string;
		/**
		 * Absolute url of list aoAdminJobQueue
		 */
		adminJobQueue: string;
		/**
		 * Absolute url of list aoAdminJobs
		 */
		adminJobs: string;
		/**
		 * Absolute url of list aoAdminJobTypes
		 */
		adminJobTypes: string;
		/**
		 * Absolute url of list aoTransactionJobs
		 */
		transactionJobs: string;
		/**
		 * Absolute url of list aoTransactionJobTriggers
		 */
		transactionJobTriggers: string;
	};
	export type GetErrorObjectOptions = {
		/**
		 * name of error causing function
		 */
		name: string;
		/**
		 * configuration object of error causing function
		 */
		options: any;
		/**
		 * Error().stack of error causing segment
		 */
		ApiStack: string;
		/**
		 * name of missing parameter (otherwise options.text has to be provided)
		 */
		missingParam?: string;
		/**
		 * individual error text (if no options.missingParam is provided)
		 */
		text?: string;
	};
	export type ApiFunctionInfo = {
		/**
		 * Name of API function
		 */
		name: string;
		/**
		 * Provided API function parameters
		 */
		options: any;
	};
	export type ErrorObject = {
		/**
		 * error text
		 */
		message: string;
		/**
		 * Information about of error causing API function
		 */
		ApiFn: ApiFunctionInfo;
		/**
		 * Error().stack of error causing segment
		 */
		ApiStack: string;
	};
	import ShareflexPermissions from 'ShareflexPermissions';
	import ShareflexFlow from 'ShareflexFlow';
	import ShareflexJobs from 'ShareflexJobs';
	import ShareflexNotifications from 'ShareflexNotifications';
	/**
	 * @typedef PublicConfigurationListItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title  Title of solution configuration  (e.g. 'weManualBinding|id|id')
	 * @property {string} aoContextUrl  Relative url to a web or list which consume the configuration
	 * @property {string} aoConfigJSON  JSON with specific use case configuration (e.g 'weStartEventManualOptionsJSON')
	 */
	/**
	 * @typedef FieldValueInfo
	 * @type {Object}
	 * @property {any} value  Field value
	 * @property {string} timestamp  Timestamp the current value has been set
	 * @property {string} triggeredBy  Context that triggered this change (e.g. 'Event', 'Admin Tool', 'My Timerjob ABC')
	 * @property {string} [editor]  Name of Editor if tracked
	 * @property {string} [login]  Login of Editor if tracked
	 */
	/**
	 * Properties tracked for one field
	 * @typedef TrackedField
	 * @type {Object}
	 * @property {boolean} changed  If field value has changed since last tracked change
	 * @property {FieldValueInfo} new  Current properties of field
	 * @property {FieldValueInfo} [old]  Last version properties of field
	 */
	/**
	 * Old and new value of a field stored in one ChangeTracker version
	 * @typedef VersionFieldValues
	 * @type {Object}
	 * @property {*} newValue  New field value
	 * @property {*} [oldValue]  Previous field value if available
	 */
	/**
	 * Default properties of a change
	 * @typedef ChangeTrackerVersionTemplate
	 * @type {Object}
	 * @property {string} timestamp  Timestamp of this version
	 * @property {string} triggeredBy  Context that triggered this change (e.g. 'Event', 'Admin Tool', 'My Timerjob ABC')
	 * @property {string} [editor]  Name of Editor if tracked
	 * @property {string} [login]  Login of Editor if tracked
	 */
	/**
	 * All relevant information of tracked changes of one detected item update (if not deactivated)
	 * @typedef ChangeTrackerVersion
	 * @type { ChangeTrackerVersionTemplate & { fields: { [fieldName: string]: VersionFieldValues } } }
	 */
	/**
	 * ChangeTracker JSON
	 * @typedef ChangeTrackerJson
	 * @type {Object}
	 * @property {string} timestamp  DateTime of latest update in ISO format
	 * @property {string} triggeredBy  Context that triggered this change (e.g. 'Event', 'Admin Tool', 'My Timerjob ABC')
	 * @property {string} [editor]  Name of Editor if tracked
	 * @property {string} [login]  Login of Editor if tracked
	 * @property {string[]} changedFields  fields which have been changed since last tracked change
	 * @property { { [fieldName: string]: TrackedField } } fields  Object with field names as keys and TrackedField objects as values
	 * @property {ChangeTrackerVersion[]} versions  History of all item changes
	 */
	/**
	 * Result of tracked Changes
	 * @typedef ChangeTrackerResult
	 * @type {Object}
	 * @property {boolean} result  if ChangeTracker was processed correctly
	 * @property {string} message  status message
	 * @property {Object} [itemProperties]  Fields of ListItem with current values (based on loadFields)
	 * @property {ChangeTrackerJson} [changedJson]  new generated ChangeTracker JSON object
	 * @property {boolean} [isNew]  if JSON was initially generated
	 * @property {boolean} [hasChanged]  if any tracked field has changed
	 * @property {string[]} [changedFields]  fields which have been changed since last tracked change
	 */
	/**
	 * @typedef ItemContextObject
	 * @type {Object}
	 * @property {string} listUrl  Absolute url of list
	 * @property {number} itemId  Id of SharePoint list item
	 */
	/**
	 * @typedef ListFieldProperties
	 * @type {Object}
	 * @property {string} TypeAsString  Type of field
	 * @property {string} LookupList  GUID of Lookup list (e.g. "{9dea1ee2-7e67-4992-9ffc-966d4d919e5c}")
	 * @property {boolean} Hidden  If field is hidden
	 */
	/**
	 * @typedef ListFieldInfos
	 * @type {Object}
	 */
	/**
	 * ChangeTracker init object
	 * @typedef ChangeTrackerInitOptions
	 * @type {Object}
	 * @property {string} targetField  Internal item field name of JSON object
	 * @property {string|string[]} trackedFields  Name of item fields to track
	 * @property {string|string[]} [loadFields]  Name of item fields to read from DB (to be returned with current values)
	 * @property {"all"|"anonymous"} [mode]  The way how to track: all information or anonymous (= no editor data) : all (default), anonymous
	 * @property {boolean} [versions]  Track items version history by publishing results in versions object at every update [default=true]
	 * @property {boolean} [saveChanges]  Update Item with final result directly. Otherwise finalizeChangeTracker has to write result [default=false]
	 * @property {boolean} [incrementVersion]  If a new version of item should be created by `saveChanges=true` [default=false]
	 * @property {ItemContextObject} [context]  Context object with information about item to be tracked
	 * @property {Object} [fieldValues]  Object with all relevant item properties for ChangeTracker logic (to prevent DB read/write request)
	 * @property {string} [timestamp]  Timestamp of changes passed as fieldValues in local web time (in combination with 'fieldValues' only!) [default= now as UTC-0]
	 * @property {string} [triggeredBy]  Context to initialize ChangeTracker for (e.g. 'Event', 'Admin Tool', 'My Timerjob ABC') [default='Event']
	 */
	/**
	 * ChangeTracker finalize object
	 * @typedef ChangeTrackerFinalizeOptions
	 * @type {Object}
	 * @property {import('ShareflexRules').ItemFields} [updateFields]  Object with additional item properties to be updated in same request
	 * @property {boolean} [reloadItem]  If tracked fields have to be read from DB again before final analysis of changes
	 * @property {boolean} [incrementVersion]  If a new version of item should be created [default=false]
	 */
	/**
	 * @typedef ListFieldsByType
	 * @type {Object}
	 * @property {string[]} DateTime
	 * @property {string[]} User
	 * @property {string[]} UserMulti
	 */
	/**
	 * Resource string object for multi language support
	 * @typedef DelegationResource
	 * @type {{ [LCID: string]: { statusCompleted: string, taskDelegation: string, taskDelegationReturn: string, batchDelegation: string, batchDelegationReturn: string, statusActive: string, statusInactive: string, statusRetracted: string, statusReturning: string, preventDeletingMsg: string }}}
	 */
	/**
	 * @typedef UserFieldProperties
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} Name
	 */
	/**
	 * @typedef UTCDateString
	 * @type {string}
	 */
	/**
	 * @typedef AbsenceItem
	 * @type {Object}
	 * @property {number} Id   SharePoint item id
	 * @property {string} Title  Reason of absence
	 * @property {UserFieldProperties} aoDelegateFrom  User
	 * @property {UserFieldProperties} aoDelegateTo  User
	 * @property {UTCDateString} aoDelegateDateStart
	 * @property {UTCDateString} aoDelegateDateEnd
	 * @property {string} aoDelegateComment
	 */
	/**
	 * @typedef IsUserAbsentResult
	 * @type {Object}
	 * @property {boolean} isAbsent  If user is currently absent
	 * @property {AbsenceItem} absenceConfigItem  Configuration object with further information
	 */
	/**
	 * @typedef CleanUpLogsConfig
	 * Logs / TimerJobs
	 * @type {Object}
	 * @property {number} [deleteLogSuccessDays]  Logging: Number of days after elements with status "Success" are deleted [default=2]
	 * @property {number} [deleteLogCancelledDays]  Logging: Number of days after elements with status "Cancelled" are deleted [default=7]
	 * @property {number} [deleteLogWarningDays]  Logging: Number of days after elements with status "Warning" are deleted [default=7]
	 * @property {number} [deleteLogErrorDays]  Logging: Number of days after elements with status "Error", "Task Error" and "Internal Error" are deleted [default=30]
	 * @property {number} [deleteLogDefaultDays]  Logging: Number of days after elements with an unknown status are deleted [default=60]
	 *
	 * @typedef CleanUpTimerjobsConfig
	 * TimerJobs
	 * @type {Object}
	 * @property {number} [deleteTimerJobAbortedDays]  Logging: Number of days after aborted timer jobs are deleted [default=30]
	 *
	 * @typedef CleanUpDelegationsConfig
	 * ShareflexAbsences
	 * @property {number} [deleteDelegationDays]  Delegation: Number of days after 'aoDelegateDateEnd' after elements are deleted [default=30]
	 * @type {Object}
	 *
	 * @typedef CleanUpInternalTimerjobsConfig
	 * internal Timerjobs
	 * @type {Object}
	 * @property {number} [deleteTimerJobSuccessHours]  Internal TimerJobs: Number of hours after elements with status "Success" are deleted
	 * @property {number} [deleteTimerJobCancelledHours]  Internal TimerJobs: Number of hours after elements with status "Cancelled" are deleted
	 * @property {number} [deleteTimerJobWarningHours]  Internal TimerJobs: Number of hours after elements with status "Warning" are deleted
	 * @property {number} [deleteTimerJobErrorHours]  Internal TimerJobs: Number of hours after elements with status "Error", "Task Error" and "Internal Error" are deleted
	 * @property {number} [deleteTimerJobAbortedHours]  Internal TimerJobs: Number of hours after aborted timer jobs are deleted
	 *
	 * @typedef CleanUpInternalAdminWebListsCache
	 * internal AdminWeb lists cache
	 * @type {Object}
	 * @property {number} [deleteAdminWebListsCache] Internal SitePool AdminWebLists Cache: Number of hours after elements are deleted
	 *
	 * @typedef CleanUpSetPermissionsConfig
	 * peSetPermissions
	 * @type {Object}
	 * @property {number} [deleteSetPermissionsFinishedDays]  SetPermissions: Number of days after elements with status "Finished" are deleted [default=0]
	 * @property {number} [deleteSetPermissionsErrorDays]  SetPermissions: Number of days after elements with status "Error" or "" are deleted [default=30]
	 *
	 * @typedef CleanUpFlowTriggersConfig
	 * weTriggers
	 * @type {Object}
	 * @property {number} [deleteFlowTriggersFinishedDays]  Flow Triggers: Number of days after elements with status "Finished" are deleted [default=0]
	 * @property {number} [deleteFlowTriggersDefaultDays]  Flow Triggers: Number of days after elements are deleted by default [default=14]
	 *
	 * @typedef CleanUpAdminJobs
	 * aoAdminJobs
	 * @property {number} [deleteInternalAdminJobsFinishedDays] AdminJobs (internal only): Number of days after elements with status "Finished" are deleted [default=0]
	 * @property {number} [deleteInternalAdminJobsFailedDays] AdminJobs (internal only): Number of days after elements with status "Failed" are deleted [default=30]
	 *
	 * @typedef CleanUpAdminJobQueueConfig
	 * aoAdminJobQueue
	 * @type {Object}
	 * @property {number} [deleteAdminJobQueueInDays]  AdminJob Queue: Number of days after elements are deleted [default=1]
	 *
	 * @typedef CleanUpTransactionConfig
	 * aoTransactionJobs
	 * @type {Object}
	 * @property {number} [deleteTransactionJobsFinishedInDays]  TransactionJobs: Number of days after elements with status "Finished" are deleted [default=2]
	 * @property {number} [deleteTransactionJobsFailedInDays]  TransactionJobs: Number of days after elements with status "Failed" are deleted [default=30]
	 * @property {number} [deleteTransactionJobTriggersInDays]  TransactionJobTriggers: Number of days after unhandled elements are deleted [default=30]
	 *
	 * @typedef InternalCleanUpConfiguration
	 * @type {CleanUpFlowTriggersConfig & CleanUpSetPermissionsConfig & CleanUpInternalTimerjobsConfig & CleanUpInternalAdminWebListsCache & CleanUpAdminJobs & CleanUpAdminJobQueueConfig & CleanUpTransactionConfig}
	 *
	 * @typedef CleanUpConfigurationDefaults
	 * @type {Object}
	 * @property {InternalCleanUpConfiguration} [internal]
	 * @property {number} [maxDeletedItems]  Max. amount of handled (deleted) items per timerjob execution [default=undefined]
	 *
	 * @typedef CleanUpConfiguration
	 * @type {CleanUpConfigurationDefaults & CleanUpLogsConfig & CleanUpTimerjobsConfig & CleanUpDelegationsConfig}
	 */
	/**
	 * @typedef AdminJobCustomFormState
	 * @type {Object}
	 * @property {string} headerPlaceholder
	 * @property {string} fieldsPlaceholder
	 * @property {string} footerPlaceholder
	 * @property { { title: string, adminJobType: string, options: string, comment: string, log: string, batchCallbackFnName: string } } defaultFields
	 */
	/**
	 * AdminJobs ListItem
	 * @typedef AdminJobItem
	 * @type {Object}
	 * @property {number} ID
	 * @property {string} Title
	 * @property {Object} aoAdminJobType
	 * @property {string} aoAdminJobType.Title
	 * @property {string} aoAdminJobStatus
	 * @property {boolean} aoResumeJob
	 * @property {string} aoOptions
	 * @property {string} aoLog
	 * @property {string} aoInternalAdminJobFnName
	 * @property {number} aoParentAdminJobItemId
	 * @property {number} aoAdminJobBatchItemId
	 */
	/**
	 * @typedef ShareflexAddonsType
	 * @type {ShareflexAddons}
	 */
	/**
	 * @typedef AdminJobHeartbeatId
	 * @type {number}
	 */
	/**
	 * @typedef AdminJobBatchItemId
	 * @type {number}
	 */
	/**
	 * @typedef AdminJobStopHeartbeatOptions
	 * @type {Object}
	 * @property {import('ShareflexRules').default} rules
	 * @property {AdminJobHeartbeatId} heartbeatId
	 * @property {AdminJobBatchItemId} batchItemId
	 * @property  {import('ShareflexRules').ItemFields} batchItemFields
	 */
	/**
	 * @typedef AdminJobHelpers
	 * @type {Object}
	 * @property { (rules: import('ShareflexRules').default, batchItemId: AdminJobBatchItemId) => Promise<AdminJobHeartbeatId> } startHeartbeat  Function to start Heartbeat
	 * @property { (options: AdminJobStopHeartbeatOptions) => void } stopHeartbeat  Function to stop Heartbeat
	 */
	/**
	 * AdminJob Result
	 * @typedef AdminJobResult
	 * @type {Object}
	 * @property {boolean} result  If job was processed successfully
	 * @property {FinalAdminJobState} [finalState]  Final state of AdminJob [default='Finished']
	 * @property {boolean} [externalBatchProcessing]  If batches are processed by external process (like timerjob) [default=false]
	 * @property {string[]} [executionLog]  Messages of admin job processing
	 * @property {string} [duration]  Duration of admin job running time
	 *
	 * @typedef AdminJobResultDefaults
	 * @type {Object}
	 * @property {boolean} result  If job was processed successfully
	 * @property {string[]} executionLog  Messages of admin job processing
	 * @property {boolean} externalBatchProcessing  If batches are processed by external process (like timerjob) [default=false]
	 * @property {FinalAdminJobState} [finalState]  Final state of AdminJob [default='Finished']
	 *
	 * @typedef AdminJobOptions
	 * @type {Object}
	 * @property {import('ShareflexRules').default} rules Shareflex Rules API
	 * @property {AdminJobItem} jobItem AdminJob item
	 * @property { { types: string, jobs: string, batches: string  } } adminJobLists Absolute urls of AdminJob lists
	 * @property {ShareflexAddonsType} addons Shareflex Addons API
	 * @property {string[]} executionLog Prepared Array for logging purposes
	 * @property {AdminJobHelpers} helpers Helper functions
	 * @property {AdminJobResultDefaults} adminJobResult Prepared result object
	 */
	/**
	 * @typedef FinalAdminJobState
	 * @type {"Finished" | "Finished with Error" | "Failed"}
	 */
	/**
	 * @typedef LookupFieldSchemaObj
	 * @type {{ [internalFieldName: string]: { lookupType: string, lookupField: string }  }}
	 */
	/**
	 * @typedef LookupConvertProps
	 * @type {{ [internalFieldName: string]: { type: string, props: string[] } }}
	 */
	/**
	 * @typedef LookupFieldValuesConverter
	 * @type { {Lookup: (fieldName: string, keys: string[]) => {}, LookupMulti: (fieldName: string, keys: string[]) => {} } }
	 */
	/**
	 * @typedef SeparatedFieldsObj
	 * @type { { generalFields: string[], lookupFields: string[] } }
	 */
	/**
	 * @typedef GetItemWithResolvedLookupsResult
	 * @type { { [fieldName: string]: string | number | Object } }
	 */
	/**
	 * @typedef ChangeTrackerInstance
	 * @type {ChangeTracker}
	 */
	/**
	 * @typedef EnsureUpdateOptions
	 * @type {Object}
	 * @property {import("ShareflexRules").default} rules Shareflex Rules API
	 * @property {import('ShareflexRules').UpdateItemOptions} updateItemOptions Shareflex Rules method to perform Item update with
	 *
	 * @typedef EnsureUpdateResult
	 * @type {Object}
	 * @property {boolean} result
	 * @property {string} message
	 */
	/**
	 * @typedef AdminJobStates
	 * @type {Object}
	 * @property {"Waiting"} waiting
	 * @property {"Executing"} executing
	 * @property {"Finished"} finished
	 * @property {"Finished with Error"} finishedWithError
	 * @property {"Failed"} failed
	 * @property {"Pending"} pending
	 */
	/**
	 * @typedef AddonsLists
	 * @type {Object}
	 * @property {string} adminJobBatches Absolute url of list aoAdminJobBatches
	 * @property {string} adminJobQueue Absolute url of list aoAdminJobQueue
	 * @property {string} adminJobs Absolute url of list aoAdminJobs
	 * @property {string} adminJobTypes Absolute url of list aoAdminJobTypes
	 * @property {string} transactionJobs Absolute url of list aoTransactionJobs
	 * @property {string} transactionJobTriggers Absolute url of list aoTransactionJobTriggers
	 */
	declare class ChangeTracker {
		constructor(addons: any);
		/**
		 * @private
		 * @type {import('ShareflexRules').default}
		 */
		private _rules;
		/**
		 * Shareflex Addons API
		 * @private
		 * @type {ShareflexAddons}
		 */
		private _addons;
		/**
		 * Array of all items fields to be read from DB
		 * @private
		 */
		private _allFieldsUnique;
		/**
		 * Array of all item fields necessary for ChangeTracker to work
		 * @private
		 */
		private _allRequiredFieldsUnique;
		/**
		 * Object containing default tracked information of change (timestamp, triggeredBy, [editor, login])
		 * @private
		 * @type {ChangeTrackerVersionTemplate}
		 */
		private _changePropertiesObj;
		/**
		 * Generated ChangeTracker JSON object
		 * @private
		 * @type {ChangeTrackerJson}
		 */
		private _changeTrackerJson;
		/**
		 * Object of item properties with their final values to check
		 * @private
		 */
		private _finalState;
		/**
		 * Array of fields that are not returned in results
		 * @private
		 */
		private _internalFields;
		/**
		 * If JSON is initially generated
		 * @private
		 */
		private _JsonIsNew;
		/**
		 * Object with relevant fields of list, grouped by field type
		 * @private
		 * @type {ListFieldsByType}
		 */
		private _listFields;
		/** @private */
		private _modifiedTimestamp;
		/**
		 * Internal item field name of JSON object
		 * @private
		 */
		private _targetField;
		/**
		 * Fields that are analyzed by the ChangeTracker
		 * @private
		 */
		private _trackedFields;
		/**
		 * The way how to track: all information or anonymous (= no editor data) : all (default), anonymous
		 * @private
		 * @type { "all" | "anonymous" }
		 * */
		private _trackingMode;
		/**
		 * If items version history should be tracked in versions object at every update
		 * @private
		 * */
		private _trackVersions;
		/**
		 * @private
		 * @type {ItemContextObject}
		 */
		private _context;
		/** @private */
		private _fieldValues;
		/**
		 * Source to initialize ChangeTracker for
		 * @private
		 * @type {string}
		 * */
		private _triggeredBy;
		/**
		 * state of Change Tracker instance.
		 * "undefined" > "initialized" > "finalized"
		 * @private
		 * @type {"undefined" | "initialized" | "finalized"}
		 */
		private _changeTrackerState;
		/**
		 * @param {ShareflexAddons} addons
		 */
		/**
		 * Fields that have at least to be read when loading item from SharePoint
		 * @private
		 * @type {string[]}
		 */
		private _minReadFields;
		/**
		 * Analyze changes of ListItem properties
		 * ```
		 * const addons = new ShareflexAddons(rules);
		 * const changeTracker = addons.createChangeTracker();
		 *
		 * let result = await changeTracker.init({
		 *   targetField : String,  // Internal item field name of JSON object
		 *   trackedFields : String|String[],  // Name of item fields to track
		 *   loadFields? : String|String[],  // Name of item fields to read from DB (to be returned with current values)
		 *   mode? : 'all'|'anonymous',  // The way how to track: all information or anonymous (= no editor data) [default=all]
		 *   versions? : Boolean,  // Track items version history by publishing results in versions object at every update [default=true]
		 *   saveChanges? : Boolean,  // Update Item with final result directly. Otherwise `finalize()` has to write result [default=false]
		 *   incrementVersion? : Boolean,  // If a new version of item should be created by `saveChanges=true` [default=false]
		 *   context? : ItemContextObject,  // Context object with information about item to be tracked [default=use context of rules.Event]
		 *   fieldValues? : {  // Object with all relevant item properties for ChangeTracker logic (to prevent DB read/write request)
		 *     [fieldName] : any,  // Name of field and value of field
		 *   },
		 *   timestamp? : String,  // timestamp of changes passed as fieldValues in local web time (in combination with 'fieldValues' only!) [default= now as UTC-0]
		 * });
		 *
		 * ItemContextObject = {
		 *     listUrl : String,
		 *     itemId : Number
		 * }
		 *
		 * result = ChangeTrackerResult;
		 *
		 * ChangeTrackerResult = {
		 *   result : Boolean,  // If ChangeTracker was processed correctly
		 *   message : String,  // Status message
		 *   itemProperties : Object,  // Fields of ListItem with current values (based on loadFields)
		 *   changedJson : JSON,  // New generated ChangeTracker JSON object
		 *   isNew : Boolean,  // If JSON was initially generated
		 *   hasChanged : Boolean,  // If any tracked field has changed
		 *   changedFields : String[]  // Fields which have been changed since last tracked change
		 * }
		 *
		 * ```
		 * @author CL
		 *
		 * @param {ChangeTrackerInitOptions} options  configuration of Change Tracker
		 * @returns {Promise<ChangeTrackerResult>} Promise object contains information about tracked changes
		 */
		init(options: ChangeTrackerInitOptions): Promise<ChangeTrackerResult>;
		/**
		 * Write changes of ListItem properties to ListItem
		 * ```
		 * const addons = new ShareflexAddons(rules);
		 * const changeTracker = addons.createChangeTracker();
		 *
		 * let result = await changeTracker.finalize();
		 * let result = await changeTracker.finalize({
		 *   updateFields? : ItemFields,  // object with additional item properties to be updated in same request (see rules.createItemFields())
		 *   reloadItem? : Boolean  // if tracked fields have to be read from DB again before final analysis of changes
		 * });
		 *
		 * result = ChangeTrackerResult;
		 *
		 * ChangeTrackerResult = {
		 *   result : Boolean,  // if ChangeTracker was processed correctly
		 *   message : String,  // status message
		 *   itemProperties : Object,  // Fields of ListItem with current values (based on loadFields)
		 *   changedJson : JSON,  // new generated ChangeTracker JSON object
		 *   isNew : Boolean,  // if JSON was initially generated
		 *   hasChanged : Boolean,  // if any tracked field has changed
		 *   changedFields : String[]  // fields which have been changed since last tracked change
		 * }
		 * ```
		 *
		 * @author CL
		 * @param {ChangeTrackerFinalizeOptions} [options]  configuration
		 * @returns {Promise<ChangeTrackerResult>} Promise object contains information about tracked changes
		 */
		finalize(options?: ChangeTrackerFinalizeOptions): Promise<ChangeTrackerResult>;
		/** =========================== */
		/** INTERNAL FUNCTIONS */
		/**
		 * Build a valid ChangeTracker JSON with updated timestamp
		 * @private
		 * @param {string} jsonStr stringified ChangeTrackerJson object or empty string
		 * @param {ChangeTrackerVersionTemplate} trackedPropertiesObj  tracked global properties of change
		 * @returns {ChangeTrackerJson} valid ChangeTracker JSON object with updated timestamp
		 */
		private _initChangeTrackerJson;
		/**
		 * Compare a ChangeTracker JSON with values of defined fields and update the ChangeTracker JSON object
		 * @author CL
		 *
		 * @private
		 * @param {ChangeTrackerJson} jsonObj  initial ChangeTracker JSON object
		 * @param {string[]} fields  field names to be processed
		 * @param {Object.<string, string>} state  object with item properties representing their final values
		 * @param {ChangeTrackerVersionTemplate} trackedPropertiesObj  global properties of tracked change
		 * @returns {ChangeTrackerJson}  updated ChangeTracker JSON object
		 */
		private _processTrackedFields;
		/**
		 * Add version element of latest changes to a ChangeTracker JSON object
		 * @author CL
		 *
		 * @private
		 * @param {ChangeTrackerJson} jsonObj  initial ChangeTracker JSON object
		 * @param {ChangeTrackerVersionTemplate} versionPropertiesObj  tracked global properties of change
		 * @returns {ChangeTrackerJson}  updated ChangeTracker JSON object
		 */
		private _addVersionToJson;
		/**
		 * Function to get all DateTime and User fields of a list
		 *
		 * @private
		 * @param {string} listUrl Absolute url of list to get fields from
		 * @returns {Promise<ListFieldsByType>} List fields grouped by relevant fields types
		 */
		private _getDateTimeAndUserFieldsFromList;
		/**
		 * @private
		 * @param {Object} options
		 * @param {import('ShareflexRules').default} options.rules
		 * @param {ItemContextObject} options.remoteContext
		 * @param {import('ShareflexRules').ItemFields} options.fields
		 * @param {boolean} options.incrementVersion
		 * @param { (options: EnsureUpdateOptions) => Promise<EnsureUpdateResult> } options.callback
		 * @returns {Promise<EnsureUpdateResult>}
		 */
		private _updateContextItem;
		/**
		 * Function to write Item Update
		 *
		 * If Update fails due to 'Editor' field only, retry without setting 'Editor'
		 *
		 * @private
		 * @param {EnsureUpdateOptions} options
		 * @returns {Promise<EnsureUpdateResult>} If update was successful plus error message
		 */
		private _ensureUpdate;
	}
}
