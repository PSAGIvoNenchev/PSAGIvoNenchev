declare module 'ShareflexAddonsHelper' {
	/**
	 * @private
	 * @param {Object} options
	 * @param {SF} options.contextGUI  SF instance to add the side pane to
	 * @param {UrlPickerSidePaneOptions} options.sidePaneOptions  Options to configure the side pane
	 * @param {Object} options.data
	 * @param {number} options.level
	 */
	declare function createTreeView(options: {
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		sidePaneOptions: UrlPickerSidePaneOptions;
		data: any;
		level: number;
	}): any;
	/**
	 * @private
	 * @param {Object} options
	 * @param {SF} options.contextGUI
	 * @param {UrlPickerCustomStateConnectionKeys} options.customStateConnections
	 * @param {string} options.nodeId
	 */
	declare function getClassName(options: {
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		customStateConnections: UrlPickerCustomStateConnectionKeys;
		nodeId: string;
	}): '' | 'UrlPicker UrlPickerSelected' | 'UrlPicker';
	/**
	 * @private
	 * @param {Object} options
	 * @param {SF} options.contextGUI  SF instance to add the side pane to
	 * @param {UrlPickerSidePaneOptions} options.sidePaneOptions  Options to configure the side pane
	 * @param {Object[]} options.lists
	 */
	declare function buildListItems(options: {
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		sidePaneOptions: UrlPickerSidePaneOptions;
		lists: any[];
	}): any[];
	/**
	 * @private
	 * @param {Object} options
	 * @param {SF} options.contextGUI  SF instance to add the side pane to
	 * @param {UrlPickerSidePaneOptions} options.sidePaneOptions  Options to configure the side pane
	 */
	declare function createListsList(options: {
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		sidePaneOptions: UrlPickerSidePaneOptions;
	}): any;
	/**
	 * @component
	 * @name permissionsView
	 * @param {Object} options
	 * @param {SF} options.contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {boolean} options.tabHasIcon Flag if tab has icon
	 * @returns {React.DetailedReactHTMLElement<{},HTMLElement>} Section that holds the heading for permissions, permissions groups and users, and checkbox for filtering 'Limited Access' permission level
	 * @description Creates the section of the permissions groups and users.
	 */
	declare function permissionsView(options: {
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		tabHasIcon: boolean;
	}): React.DetailedReactHTMLElement<{}, HTMLElement>;
	/**
	 * @param {SF} contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {string} url The request URL.
	 * @param {object} options Includes the request type and headers.
	 * @param {function} successCallback Executes if request is successfully executed.
	 * @param {function} callback Executes if request is NOT successfully executed.
	 */
	declare function requestData(
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState,
		url: string,
		options: object,
		successCallback: Function,
		callback: Function
	): void;
	/**
	 * @param {SF} contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {string} caption
	 * @param {boolean} tabHasIcon
	 * @returns {React.DetailedReactHTMLElement} Customised heading element
	 * @example
	 * const caption = 'Heading 1';
	 * createHeading(caption);
	 */
	declare function createHeading(
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState,
		caption: string,
		tabHasIcon: boolean
	): React.DetailedReactHTMLElement;
	/**
	 * @component
	 * @name createPermissionsTable
	 * @param {SF} contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {Array} items
	 * @param {number} isFullControlAccess
	 * @param {boolean} tabHasIcon
	 * @returns {React.DetailedReactHTMLElement<{},HTMLElement>} React html element that holds permissions groups and users
	 */
	declare function createPermissionsTable(
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState,
		items: any[],
		isFullControlAccess: number,
		tabHasIcon: boolean
	): React.DetailedReactHTMLElement<{}, HTMLElement>;
	/**
	 * @component
	 * @name usersView
	 * @param {object} props
	 * @param {Array} props.users
	 * @param {SF} props.contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {boolean} props.tabHasIcon Flag if tab has icon
	 * @returns {React.DetailedReactHTMLElement<{},HTMLElement>} Section that holds the heading for members and all the members of the group
	 * @description Creates the section of the group's members.
	 */
	declare function usersView(props: {
		users: any[];
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		tabHasIcon: boolean;
	}): React.DetailedReactHTMLElement<{}, HTMLElement>;
	/**
	 * @component
	 * @name createUsersView
	 * @param {SF} contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {Array} users
	 * @returns {React.DetailedReactHTMLElement<{},HTMLElement>} React html element that holds group's members
	 */
	declare function createUsersView(
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState,
		users: any[]
	): React.DetailedReactHTMLElement<{}, HTMLElement>;
	/**
	 * @function
	 * @name openProfile
	 * @param {SF} contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {string} loginName
	 * @description Opens the Delve profile of the selected user.
	 */
	declare function openProfile(contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState, loginName: string): void;
	/**
	 * @component
	 * @name createPager
	 * @param {SF} contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {number} pages
	 * @param {number} selectedPage
	 * @param {function} setSelectedPage
	 * @param {string} lastClickedPageHolder
	 * @returns {React.DetailedReactHTMLElement<{},HTMLElement>} React html element that holds permissions groups and users
	 */
	declare function createPager(
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState,
		pages: number,
		selectedPage: number,
		setSelectedPage: Function,
		lastClickedPageHolder: string
	): React.DetailedReactHTMLElement<{}, HTMLElement>;
	/**
	 * @function
	 * @param {SF} contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {string} caption
	 * @returns{string} Formated permission group caption
	 * @description Check if the permission group caption is coming from sharing link and formats the caption properly.
	 */
	declare function formatTitle(contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState, caption: string): string;
	/**
	 * @function
	 * @param {SF} contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {Array} permissionsArr
	 * @param {boolean} isLink
	 * @returns{Object} Object that holds permission entries and link entries.
	 * @description Returns Object that holds permission entries and link entries.
	 */
	declare function iterateSharingInformation(
		contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState,
		permissionsArr: any[],
		isLink: boolean
	): any;
	/**
	 * @function
	 * @param {SF} contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {Array} links
	 * @returns{Array} Array that holds entries with properties: name, type, roleId.
	 * @description Returns Array that holds entries with properties: name, type, roleId.
	 */
	declare function iterateLinks(contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState, links: any[]): any[];
	/**
	 * @function
	 * @param {SF} contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {number} role
	 * @returns{string} String that indicates the permission level
	 * @description Returns string that indicates the permission level of the entry.
	 */
	declare function formatRole(contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState, role: number): string;
	/**
	 * @function
	 * @param {SF} contextGUI Shareflex-SF-object corresponding to the current UI
	 * @param {number} type
	 * @returns{string} String that indicates if the entry is SharePoint User or SharePoint Group
	 * @description Returns string that indicates if the entry is SharePoint User or SharePoint Group depending on the type.
	 */
	declare function formatType(contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState, type: number): string;
	/**
	 * @typedef GetUrlPropertiesResult
	 * @type {Object}
	 * @property {string} webUrl
	 * @property {string} listUrl
	 * @property {string} listName
	 * @property {string} entityTypeName
	 */
	/**
	 * @typedef GetItemsOptions
	 * @type {Object}
	 * @property {string} listUrl Absolute list url
	 * @property {string|string[]} [fields] Comma separated list or array of internal field names (e.g. 'Title,ID,Author' or ['Title','ID','Author'])
	 * @property {string} [filter] SharePoint REST API filter query (e.g. 'Id eq 1') to limit the result
	 * @property {string} [order] SharePoint REST API order fields (e.g. 'Title desc') to sort the result
	 * @property {number} [rowLimit] Limit amount of returned items (max. 5000)
	 */
	/**
	 * Object to pass secondary tab configuration to be mapped to SF.connectSecondaryView
	 * @typedef {Object} SecondaryConfigItem
	 * @property {string} id  Unique identifier of secondary tab
	 * @property {string} list  Web-relative list path
	 * @property {boolean} allowNew  Whether new items can be created (if permitted for the user and supported by the list provider, defaults to true)
	 * @property {string} icon  Icon to display on the tab
	 * @property {string} tabTitle  Custom text to show on the tab
	 * @property {string} [primaryField]  Field name for relation primaryKey
	 */
	/**
	 * @typedef ListProperties
	 * @type {Object}
	 * @property {string} title  Title of list
	 * @property {'List'|'Library'}  type  Kind of list
	 * @property {number} baseType  Number of list kind
	 * @property {string} url  Absolute list url
	 */
	/**
	 * @typedef WebObject
	 * @type {Object}
	 * @property {string} title  Title of web
	 * @property {ListProperties[]} lists  Collection of list from web
	 */
	/**
	 * @typedef StructureSubWeb
	 * @type { WebObject & {[subWeb: string]: StructureSubWeb} }
	 */
	/**
	 * @typedef StructuredWebObject
	 * @type { {[subWeb: string]: StructureSubWeb} }
	 */
	/**
	 * @typedef FlattenSubWeb
	 * @type { WebObject & {[subWebs: string]: string[]} }
	 */
	/**
	 * @typedef FlattenedWebObject
	 * @type { {[subWebs: string]: FlattenSubWeb} }
	 */
	/**
	 * @typedef GetWebsAndListsResult
	 * @type {Object}
	 * @property {StructuredWebObject} webStructure
	 * @property {FlattenedWebObject} flattenedWebs
	 */
	/**
	 * @typedef FieldPickerCustomStateConnectionKeys
	 * @type {Object}
	 * @property {string} isRenderReady Name of SF.customFormState key: if fields loaded and availableFields are filled out {boolean}
	 * @property {string} showHiddenFields Name of SF.customFormState key: if hidden fields should be visible {boolean}
	 * @property {string} isCharFilterActive Name of SF.customFormState key: if character filter is active  {boolean}
	 * @property {string} filterChar Name of SF.customFormState key: only show field starting with this character {string}
	 * @property {string} availableFields Name of SF.customFormState key: distinct list of all fields (result of addonsHelper.getListFields) {ListFieldObject[]}
	 * @property {string} fieldNameFirstChars Name of SF.customFormState key: distinct list of all first characters of all fields (result of addonsHelper.getListFields) - {string[]}
	 * @property {string} selectedFields Name of SF.customFormState key: distinct list of currently selected fields {string[]}
	 */
	/**

/**
 * @typedef ChildProps
 * @type {Object}
 * @property {string[]} [User]
 * @property {string[]} [Lookup]
 */
	/**
	 * @typedef FieldPickerSidePaneOptions
	 * @type {Object}
	 * @property {string} sidePaneId  A unique id of the side pane
	 * @property {FieldPickerCustomStateConnectionKeys} customStateConnections  References to the SF.customFormState keys
	 * @property {'single'|'multi'|'copy'|'none'} nodeStyle  Define select icon and onClick style of field nodes
	 * @property {Function} onFieldClick  onClick handler of field node (to set SF.customFormState)
	 * @property {string} [loadingMessage]  Loading message by language [default={ en: 'Please wait...', de: 'Bitte warten...' }]
	 * @property {ChildProps} [preventChildPropsSelection]  Not selectable fields for User or Lookup child properties
	 * @property {boolean} [addInternalLookupId]  If system fields should be added (e.g. EditorId) [default=false]
	 * @property {Function} [isFieldSelectable] custom handler should return true / false
	 */
	/**
	 * @typedef ListFieldProperties
	 * @type {Object}
	 * @property {string} title
	 * @property {string} name
	 * @property {string} staticName
	 * @property {string} type
	 * @property {string} lookupField
	 * @property {string} lookupList
	 * @property {string} description
	 * @property {boolean} hidden
	 */
	/**
	 * @typedef GetListFieldsResult
	 * @type {Object}
	 * @property {ListFieldProperties[]} fields
	 * @property {string[]} firstChars
	 * @property {string[]} fieldNames
	 */
	/**
	 * @typedef UrlPickerCustomStateConnectionKeys
	 * @type {Object}
	 * @property {string} isUrlPickerReady Name of SF.customFormState key: if web and list content is loaded {boolean}
	 * @property {string} availableUrls Name of SF.customFormState key: structured and filtered data to display - web/lists {Object[]}
	 * @property {string} selectable Name of SF.customFormState key: if values are selectable - in disp form not selectable {boolean}
	 * @property {string} selectedUrls Name of SF.customFormState key: Helper object - key is the url, value is true or false {SelectedUrlObject}
	 * @property {string} configuredUrls Name of SF.customFormState key: distinct list of currently selected urls {string[]}
	 * @property {string} color Name of SF.customFormState key: color {string}
	 * @property {string} scope Name of SF.customFormState key: scope - List or Web [default=List] {string}
	 * @property {string} type Name of SF.customFormState key: type of picker - Global (multi picker) and Local (single picker) {string}
	 * @property {string} [level] Name of SF.customFormState key: Level {Object}
	 * @property {string} [itemId] Name of SF.customFormState key: itemId {number}
	 */
	/**
	 * @typedef UrlPickerSidePaneOptions
	 * @type {Object}
	 * @property {string} sidePaneId  A unique id of the side pane
	 * @property {UrlPickerCustomStateConnectionKeys} customStateConnections  References to the SF.customFormState keys
	 * @property {'list'|'tree'} viewMode  Define mode of the view - either List view or Tree view
	 * @property {Function} onUrlClick  onClick handler of Url node (to set SF.customFormState)
	 */
	declare class AddonsHelper {
		/**
		 * Function to add tags script, link or style to the html header
		 * ```
		 * const addons = new AddonsHelper();
		 * addons.addNodeToHeader(nodeType, value, id);
		 * nodeType : 'style'|'link'|'script' String,  // Type of header node
		 * value : String,  // Content 'cssText'|'href'|'src'
		 * id : String,  // Id of HTML node
		 * overwrite? : Boolean  // Replace exist node (remove and set)
		 *
		 * ```
		 * @param {'style'|'link'|'script'} nodeType
		 * @param {string} value
		 * @param {string} id
		 * @param {boolean} [overwrite]
		 */
		addNodeToHeader(nodeType: 'style' | 'link' | 'script', value: string, id: string, overwrite?: boolean): void;
		/**
		 * Function to get the webs and their lists
		 * ```
		 * const addons = new AddonsHelper();
		 *
		 * getWebsAndLists(rootWebUrl).then(GetWebsAndListsResult => {});
		 * rootWebUrl : String  // Absolute web url for interest
		 *
		 * GetWebsAndListsResult = {
		 *   webStructure : RootWeb  // Structure of web and their lists
		 *   flattenWebs : { [webUrl: string]: ListProperties[] }
		 * }
		 *
		 * RootWeb = {
		 *  [subWeb: string] : SubWeb
		 * }
		 *
		 * SubWeb = { WebObject & {[subWeb: string]: SubWeb} }
		 *
		 * WebObject = {
		 *   title : String,  // Title of web
		 *   lists : ListProperties[]  // Collection of lists from web
		 * }
		 *
		 * ListProperties = {
		 *   title : String,  // Title of list
		 *   type : 'List'|'Library',  // Kind of list
		 *   baseType : Number,  // Number of list template kind
		 *   url : String  // Absolute list url
		 * }
		 *
		 * ```
		 * @param {string} rootWebUrl
		 * @param {SF} SF
		 * @returns {Promise<GetWebsAndListsResult>}
		 */
		getWebsAndLists(rootWebUrl: string, SF: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState): Promise<GetWebsAndListsResult>;
		/**
		 * Function to get the field for a specific list
		 * ```
		 * const addons = new AddonsHelper();
		 *
		 * getListFields(listUrl, SF, excludeFields?, preferedFieldTypes?).then(result => {});
		 * listUrl : String  // Absolute list url for interest
		 *
		 * ```
		 * @param {string} listUrl
		 * @param {*} SF
		 * @param {string[]} [excludeFields]
		 * @param {string[]} [preferedFieldTypes]
		 * @returns {Promise<GetListFieldsResult>}
		 */
		getListFields(listUrl: string, SF: any, excludeFields?: string[], preferedFieldTypes?: string[]): Promise<GetListFieldsResult>;
		/**
		 * Function extacts gets the web url, list name and entityTypeName for a specific list url
		 * ```
		 * let result = addons.getUrlProperties(listUrl : String // Absolute list url);
		 * result = {
		 *   webUrl : String,  // Absolute url of the web
		 *   listUrl : String,  // Absolute url of the list
		 *   listName : String,  // List name of url part
		 *   entityTypeName : String  // SharePoint entity type name
		 * }
		 * ```
		 * @param {string} listUrl
		 * @returns {GetUrlPropertiesResult}
		 */
		getUrlProperties(listUrl: string): GetUrlPropertiesResult;
		/**
		 * This function returns items of a specific list (max. 5000 items)
		 *
		 * ```
		 *
		 * const result = await addons.getItems({
		 *   listUrl : String,  // Absolute list url
		 *   fields? : String | String[],  // Comma separated list or array of interal field names (e.g. 'Title,ID,Author' or ['Title','ID','Author'])
		 *   filter? : String,  // SharePoint REST API filter query (e.g. 'Id eq 1') to limit the result
		 *   order? : String,  // SharePoint REST API order fields (e.g. 'Title desc') to sort the result
		 *   rowLimit? : Number,  // Limit amount of returned items (max. 5000)
		 * });
		 *
		 * // Promise.resolve
		 * result = Object[]  // List items
		 *
		 * ```
		 * @param {GetItemsOptions} options
		 */
		getItems(options: GetItemsOptions): Promise<any>;
		/**
		 * @private
		 * @param {*} fields
		 */
		private prepareFields;
		/**
		 * @private
		 * @param {*} options
		 */
		private ensureObjectKeys;
		/**
		 * Function to convert comma separated list of fieldNames to an array
		 * @private
		 * @param {string} fields
		 */
		private convertFields;
		/**
		 * Function to check if Form can be unlocked and handles lock notification
		 *
		 * ```
		 * const result = await addons.checkFormUnlock({
		 *   SF : SF,  // Shareflex Forms object
		 *   checkMaintenance? : "Permissions" | "Flow",  // Check maintenance mode of this Shareflex Addons module
		 *   checkUrlAccess? : String,  // To unlock the UI, the current user has to have read permissions to this url
		 * })
		 * ```
		 *
		 * @param {Object} options
		 * @param {SF} options.SF Shareflex Forms object
		 * @param {"Permissions" | "Flow"} [options.checkMaintenance] Check maintenance mode of this Shareflex Addons module
		 * @param {string} [options.checkUrlAccess] To unlock the UI, the current user has to have read permissions to this url
		 * @returns {Promise<boolean>} If form can be unlocked
		 */
		checkFormUnlock(options: {
			SF: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
			checkMaintenance?: 'Permissions' | 'Flow';
			checkUrlAccess?: string;
		}): Promise<boolean>;
		/**
		 * Function to determine if a people picker has a SharePoint group picked
		 * @param {SF} SF Shareflex Forms object
		 * @param {*} values PeoplePicker field value
		 * @returns {string} Error message if a SharePoint group is picked
		 */
		validateUserFieldWithoutSpGroups(SF: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState, values: any): string;
		/**
		 * Function build a field picker pane for field selection cases
		 * @param {Object} options
		 * @param {SF} options.contextGUI  SF instance to add the side pane to
		 * @param {FieldPickerSidePaneOptions} options.sidePaneOptions  Options to configure the side pane
		 */
		FieldPickerSidePane(options: {
			contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
			sidePaneOptions: FieldPickerSidePaneOptions;
		}): any;
		/**
		 * Function build an URL picker pane for web/list selection cases
		 * @param {Object} options
		 * @param {SF} options.contextGUI  SF instance to add the side pane to
		 * @param {UrlPickerSidePaneOptions} options.sidePaneOptions  Options to configure the side pane
		 */
		UrlPickerPane(options: { contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState; sidePaneOptions: UrlPickerSidePaneOptions }): any;
		/**
		 * Function that looks for a PermissionsTab-FormConfig-file, fills the placeholders 'permissionsDataAddons' and 'usersAddons' and makes the tab visible (if #hidden).
		 * In SF.customFormState.peScope {string} you can pass 'Web'/'List'/'Folder', in SF.customFormState.peScopeUrl you can pass the relative URL and SF.customFormState.peScopeFolderPath is for Folders.
		 * If no 'peScope' and 'peScopeUrl' passed in customFormState then the permissions of the currently opened item are shown.
		 * @param {Object} options
		 * @param {SF} options.contextGUI  Shareflex-SF-object corresponding to the current UI
		 * @param {string} [options.filename=Form_TabPermissionsAddons.xml] - name of the FormConfig-file to be prepared
		 * @see {@link https://docs.shareflex.de/de/ShareflexAddons/Pages/Useful/CustomizePermissionTab}
		 */
		addPermissionsTab(options: { contextGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState; filename?: string }): void;
	}
	type GetUrlPropertiesResult = {
		webUrl: string;
		listUrl: string;
		listName: string;
		entityTypeName: string;
	};
	type GetItemsOptions = {
		/**
		 * Absolute list url
		 */
		listUrl: string;
		/**
		 * Comma separated list or array of internal field names (e.g. 'Title,ID,Author' or ['Title','ID','Author'])
		 */
		fields?: string | string[];
		/**
		 * SharePoint REST API filter query (e.g. 'Id eq 1') to limit the result
		 */
		filter?: string;
		/**
		 * SharePoint REST API order fields (e.g. 'Title desc') to sort the result
		 */
		order?: string;
		/**
		 * Limit amount of returned items (max. 5000)
		 */
		rowLimit?: number;
	};
	/**
	 * Object to pass secondary tab configuration to be mapped to SF.connectSecondaryView
	 */
	type SecondaryConfigItem = {
		/**
		 * Unique identifier of secondary tab
		 */
		id: string;
		/**
		 * Web-relative list path
		 */
		list: string;
		/**
		 * Whether new items can be created (if permitted for the user and supported by the list provider, defaults to true)
		 */
		allowNew: boolean;
		/**
		 * Icon to display on the tab
		 */
		icon: string;
		/**
		 * Custom text to show on the tab
		 */
		tabTitle: string;
		/**
		 * Field name for relation primaryKey
		 */
		primaryField?: string;
	};
	type ListProperties = {
		/**
		 * Title of list
		 */
		title: string;
		/**
		 * Kind of list
		 */
		type: 'List' | 'Library';
		/**
		 * Number of list kind
		 */
		baseType: number;
		/**
		 * Absolute list url
		 */
		url: string;
	};
	type WebObject = {
		/**
		 * Title of web
		 */
		title: string;
		/**
		 * Collection of list from web
		 */
		lists: ListProperties[];
	};
	type StructureSubWeb = WebObject & {
		[subWeb: string]: StructureSubWeb;
	};
	type StructuredWebObject = {
		[subWeb: string]: StructureSubWeb;
	};
	type FlattenSubWeb = WebObject & {
		[subWebs: string]: string[];
	};
	type FlattenedWebObject = {
		[subWebs: string]: FlattenSubWeb;
	};
	type GetWebsAndListsResult = {
		webStructure: StructuredWebObject;
		flattenedWebs: FlattenedWebObject;
	};
	type FieldPickerCustomStateConnectionKeys = {
		/**
		 * Name of SF.customFormState key: if fields loaded and availableFields are filled out {boolean}
		 */
		isRenderReady: string;
		/**
		 * Name of SF.customFormState key: if hidden fields should be visible {boolean}
		 */
		showHiddenFields: string;
		/**
		 * Name of SF.customFormState key: if character filter is active  {boolean}
		 */
		isCharFilterActive: string;
		/**
		 * Name of SF.customFormState key: only show field starting with this character {string}
		 */
		filterChar: string;
		/**
		 * Name of SF.customFormState key: distinct list of all fields (result of addonsHelper.getListFields) {ListFieldObject[]}
		 */
		availableFields: string;
		/**
		 * Name of SF.customFormState key: distinct list of all first characters of all fields (result of addonsHelper.getListFields) - {string[]}
		 */
		fieldNameFirstChars: string;
		/**
		 * Name of SF.customFormState key: distinct list of currently selected fields {string[]}
		 */
		selectedFields: string;
	};
	/**
	 *
	 * /**
	 */
	type ChildProps = {
		User?: string[];
		Lookup?: string[];
	};
	type FieldPickerSidePaneOptions = {
		/**
		 * A unique id of the side pane
		 */
		sidePaneId: string;
		/**
		 * References to the SF.customFormState keys
		 */
		customStateConnections: FieldPickerCustomStateConnectionKeys;
		/**
		 * Define select icon and onClick style of field nodes
		 */
		nodeStyle: 'single' | 'multi' | 'copy' | 'none';
		/**
		 * onClick handler of field node (to set SF.customFormState)
		 */
		onFieldClick: Function;
		/**
		 * Loading message by language [default={ en: 'Please wait...', de: 'Bitte warten...' }]
		 */
		loadingMessage?: string;
		/**
		 * Not selectable fields for User or Lookup child properties
		 */
		preventChildPropsSelection?: ChildProps;
		/**
		 * If system fields should be added (e.g. EditorId) [default=false]
		 */
		addInternalLookupId?: boolean;
		/**
		 * custom handler should return true / false
		 */
		isFieldSelectable?: Function;
	};
	type ListFieldProperties = {
		title: string;
		name: string;
		staticName: string;
		type: string;
		lookupField: string;
		lookupList: string;
		description: string;
		hidden: boolean;
	};
	type GetListFieldsResult = {
		fields: ListFieldProperties[];
		firstChars: string[];
		fieldNames: string[];
	};
	type UrlPickerCustomStateConnectionKeys = {
		/**
		 * Name of SF.customFormState key: if web and list content is loaded {boolean}
		 */
		isUrlPickerReady: string;
		/**
		 * Name of SF.customFormState key: structured and filtered data to display - web/lists {Object[]}
		 */
		availableUrls: string;
		/**
		 * Name of SF.customFormState key: if values are selectable - in disp form not selectable {boolean}
		 */
		selectable: string;
		/**
		 * Name of SF.customFormState key: Helper object - key is the url, value is true or false {SelectedUrlObject}
		 */
		selectedUrls: string;
		/**
		 * Name of SF.customFormState key: distinct list of currently selected urls {string[]}
		 */
		configuredUrls: string;
		/**
		 * Name of SF.customFormState key: color {string}
		 */
		color: string;
		/**
		 * Name of SF.customFormState key: scope - List or Web [default=List] {string}
		 */
		scope: string;
		/**
		 * Name of SF.customFormState key: type of picker - Global (multi picker) and Local (single picker) {string}
		 */
		type: string;
		/**
		 * Name of SF.customFormState key: Level {Object}
		 */
		level?: string;
		/**
		 * Name of SF.customFormState key: itemId {number}
		 */
		itemId?: string;
	};
	type UrlPickerSidePaneOptions = {
		/**
		 * A unique id of the side pane
		 */
		sidePaneId: string;
		/**
		 * References to the SF.customFormState keys
		 */
		customStateConnections: UrlPickerCustomStateConnectionKeys;
		/**
		 * Define mode of the view - either List view or Tree view
		 */
		viewMode: 'list' | 'tree';
		/**
		 * onClick handler of Url node (to set SF.customFormState)
		 */
		onUrlClick: Function;
	};
}
