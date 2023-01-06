declare module 'ShareflexPermissions' {
	/**
	 * @typedef GetStaticSetUsageOptions
	 * @type {Object}
	 * @property {import('ShareflexRules').default} rules Shareflex Rules JS API
	 * @property {ListsObject} lists  Object with all relevant Shareflex permission lists
	 * @property {string} name  Name as filter criteria
	 * @property {string} filterBy  Filter for user | role | permission set
	 */
	/**
	 *
	 * @typedef StaticSetConfigItem
	 * @type {Object}
	 * @property {number} Id  Id of SharePoint list item
	 * @property {string} Title  Title of the permission rule
	 * @property {string} peStaticSetConfigID  Id of the configuration item
	 * @property {string} peStaticSetID  Id of the parent permission static set item
	 */
	/**
	 * Options object for ensurePermissionSet()
	 *
	 * @typedef EnsurePermissionSetOptions
	 * @type {Object}
	 * @property {string} setName  Name of the permission set
	 * @property {string} [pePermissionSetID]  Id of the Shareflex configuration item (permission set), for Import / Export mechanism
	 * @property {boolean} [updateJSON]  Update settingsJSON on permission setting item [default=false]
	 *
	 */
	/**
	 * Result object of ensurePermissionSet()
	 *
	 * @typedef EnsurePermissionSetResult
	 * @type {Object}
	 * @property {string} listUrl  Absolute url from the list PermissionMatrix
	 * @property {number} id  Id of the SharePoint list item
	 * @property {string} setName  Name of the permission set
	 * @property {string} pePermissionSetID  Id of the Shareflex configuration item (permission role)
	 * @property {string} [members]  Members and their permission levels
	 *
	 */
	/**
	 * Options object for deletePermissionSet()
	 *
	 * @typedef DeletePermissionSetOptions
	 * @type {Object}
	 * @property {string} setName  Name of a specific permission set
	 * @property {boolean} [force]  Prevent usage check [default=false]
	 *
	 */
	/**
	 * Result object of deletePermissionSet()
	 *
	 * @typedef DeletePermissionSetResult
	 * @type {Object}
	 * @property {boolean} result  If PermissionSet has been deleted
	 * @property {string} [message]  Message if result is false
	 * @property {GetPermissionSetUsageResult} [usage]  Where this PermissionSet is used
	 */
	/**
	 * This describes the properties of a permission role item
	 *
	 * @typedef RoleItem
	 * @type {Object}
	 * @property {number} Id  Id of SharePoint list item
	 * @property {string} Title  Title
	 * @property {string} TitleLast  Current title
	 * @property {UserGroupField} peRoleResponsible  Responsible person of the role
	 * @property {string} peRoleID  ID of the configuration item
	 * @property {string|number} peSharePointGroupID  ID of the SharePoint group
	 *
	 */
	/**
	 * @typedef RoleItemObject
	 * @type { { [roleName: string]: RoleItem } }
	 *
	 */
	/**
	 * This describes the options object of an getRoles call
	 *
	 * @typedef GetRolesOptions
	 * @type {Object}
	 * @property {string} roleName  Name of a specific role
	 * @property {boolean} [searchByOldRoleName]  Search by old permission role name
	 *
	 */
	/**
	 * This describes the result object of an getRoles call
	 *
	 * @typedef GetRolesResult
	 * @type {Object}
	 * @property {string[]} roles  List of permission role configuration items
	 * @property {RoleItemObject} rolesObj  Normalized object of all permission role configurations items
	 *
	 */
	/**
	 * This describes an object that is normalized of the values from IGetUsersResult.users
	 *
	 * @typedef {Object.<string, UserListItem>} UserItemObject
	 */
	/**
	 * This describes the result object of a getUsers call
	 *
	 * @typedef GetUsersResult
	 * @type {Object}
	 * @property {UserListItem[]} users  List of permission user configuration items
	 * @property {UserItemObject} usersObj  Normalized object of all permission user configurations items
	 *
	 */
	/**
	 * This describes the result object of an getRoleUsage call
	 *
	 * @typedef GetRoleUsageResult
	 * @type {Object}
	 * @property {boolean} inUse  Is role in use
	 * @property {UserListItem[]} users  List of permission users
	 * @property {PermissionSetItem[]} permissionSetItems  List of permission set items
	 * @property {RuleItem[]} rules  List of permission rules
	 * @property {StaticSetConfigItem[]} staticSetItems  List of static set items
	 *
	 */
	/**
	 * This describes the result object of an addUserRoles call
	 *
	 * @typedef AddUserRolesResult
	 * @type {Object}
	 * @property {string} listUrl  Absolute url from the list PermissionRoleUsers
	 * @property {number} id  Id of the SharePoint list item
	 * @property {string} peUserID  Id of the Shareflex configuration item
	 * @property {string} loginName  LoginName of the user
	 * @property {string[]} memberOfRoles  List of permission roles where the user is member
	 * @property {string[]} ignoredRoles  List of permission roles does not exit
	 *
	 */
	/**
	 * This describes the result object of an deleteRole call
	 *
	 * @typedef DeleteRoleResult
	 * @type {Object}
	 * @property {boolean} result  Result of the function
	 * @property {string} [message]  Message if result is false
	 * @property {Object} [memberships]  Object with role memberships information
	 *
	 */
	/**
	 * This describes the result object of a removeUserRoles call
	 *
	 * @typedef RemoveUserRolesResult
	 * @type {Object}
	 * @property {string} listUrl  Absolute url from the list PermissionRoleUsers
	 * @property {number} id  Id of the SharePoint list item
	 * @property {string} peUserID  Id of the Shareflex configuration item (permission role)
	 * @property {string} loginName  LoginName of the user
	 * @property {string[]} memberOfRoles  List of permission roles where the user is member
	 * @property {string[]} ignoredRoles  List of permission roles does not exit
	 *
	 */
	/**
	 * This describes the result object of an getUserMemberships call
	 *
	 * @typedef GetUserMembershipsResult
	 * @type {Object}
	 * @property {boolean} isMember  Is role in use
	 * @property {RoleItem[]} roles // Array with roles where permission user is member
	 * @property {PermissionSetConfigItem[]} permissionSets  // Array with permission sets where permission user is configured
	 * @property {StaticSetConfigItem[]} staticSets  // Array with static sets where permission user is member
	 *
	 */
	/**
	 * @typedef PermissionSetItem
	 * @type {Object}
	 *
	 * @property {number} Id  // Id of SharePoint list item
	 * @property {string} Title  // Title
	 * @property {string} peTitleLast  // Current title
	 * @property {string} pePermissionSetConfigID  ID of the configuration item
	 * @property {string} pePermissionSetID  // Id of the configuration item
	 *
	 */
	/**
	 * @typedef PermissionSetObject
	 * @type { { [setName: string]: PermissionSetItem } }
	 *
	 */
	/**
	 * This describes the result object of an getPermissionSets call
	 *
	 * @typedef GetPermissionSetsResult
	 * @type {Object}
	 * @property {string[]} permissionSets  List of permission set configuration items
	 * @property {PermissionSetObject} permissionSetsObj  Normalized object of all permission set configurations items
	 *
	 */
	/**
	 * @typedef SyncRuleSetToSettingsOptions
	 * @type {Object}
	 * @property {string} peRuleSetID
	 * @property {string} peListUrls
	 * @property {boolean} peDeactivated
	 * @property {boolean} [delete]
	 */
	export default class ShareflexPermissions {
		constructor(rules: any, addons: any);
		/**
		 * @type {import('ShareflexRules').default}
		 * @private
		 */
		private rules;
		/**
		 * @type {import('ShareflexAddons').default}
		 * @private
		 */
		private addons;
		/**
		 * @type {ListsObject}
		 * @private
		 */
		private lists;
		/**
		 * Get all urls of the Shareflex Permissions configuration lists
		 *
		 * ```
		 * let permissionLists = permissions.getLists();
		 *
		 * permissionLists = {
		 *   settings : String,  // Absolute url from the list peSettings
		 *   roles : String,  // Absolute url from the list peRoles
		 *   users : String,  // Absolute url from the list peUsers
		 *   permissionSets : String,  // Absolute url from the list pePermissionSets
		 *   permissionSetConfigs : String,  // Absolute url from the list pePermissionSetConfig
		 *   ruleSets : String,  // Absolute url from the list peRuleSets
		 *   ruleSetConfigs : String,  // Absolute url from the list peRuleSetsConfigs
		 *   staticSets : String,  // Absolute url from the list peStaticSets
		 *   staticSetConfigs : String,  // Absolute url from the list peStaticSetConfigs
		 *   staticSetLogs : String  // Absolute url from the list peStaticSetLogs
		 * }
		 *
		 * ```
		 * @returns {ListsObject}
		 */
		getLists(): ListsObject;
		/**
		 * This describes the properties of a permission user
		 *
		 * @typedef PermissionUser
		 * @type {Object}
		 * @property {number} [Id]  Id of the user or group
		 * @property {string} [Title]  DisplayName of the user or group
		 * @property {string} Name  LoginName of the user or group
		 *
		 */
		/**
		 * This describes the object object for an ensureRole call
		 *
		 * @typedef EnsureRoleOptions
		 * @type {Object}
		 * @property {string} roleName  Name of the permission role
		 * @property {string} [roleResponsible]  LoginName of the user which is responsible
		 * @property {string} [peRoleID]  Id of the Shareflex configuration item (permission role), for Import / Export mechanism
		 * @property {boolean} [updateJSON]  Update settingsJSON on permission setting item [default=false]
		 *
		 */
		/**
		 * Create a permission role (SharePoint group)
		 *
		 * ```
		 * let result = await permissions.ensureRole({
		 *   roleName : String,  // Name of the permission role
		 *   roleResponsible? : String,  // LoginName of the permission role responsible
		 *   updateJSON? : Boolean  // Update settingsJSON on permission setting item [default=false]
		 * });
		 *
		 * result = EnsureRoleResult
		 *
		 * EnsureRoleResult = {
		 *   listUrl : String,  // Absolute List url from permission roles
		 *   id : Number | String,  // ID of Sharepoint list item
		 *   groupId: Number | String,  // ID of the SharePoint group
		 *   groupName: String,  // Name of the SharePoint group (not allowed chars will be replaced with nothing)
		 *   peRoleID: String  // Configuration id of the list item
		 * }
		 * ```
		 * @param {EnsureRoleOptions} options
		 * @returns {Promise<EnsureRoleResult>}
		 */
		ensureRole(options: {
			/**
			 * Name of the permission role
			 */
			roleName: string;
			/**
			 * LoginName of the user which is responsible
			 */
			roleResponsible?: string;
			/**
			 * Id of the Shareflex configuration item (permission role), for Import / Export mechanism
			 */
			peRoleID?: string;
			/**
			 * Update settingsJSON on permission setting item [default=false]
			 */
			updateJSON?: boolean;
		}): Promise<EnsureRoleResult>;
		/**
		 * Get the JSON configuration from the permission setting item
		 *
		 * ```
		 * let result = await permissions.getSettingsJSON(type?);
		 *
		 * result = {
		 *   peRoles? : RolesJson,  // Object with Role names as key and their principalId as value
		 *   pePermissionSets? : PermissionSetsJson,  // Object with Name of PermissionSet as key and Object of permission levels and their user/group loginNames and ids as value
		 *   peRuleSets? : RuleSetsJson  // Object with RuleSet ID as key and RuleSet object as value
		 * }
		 *
		 * RolesJson = {
		 *   [roleName] : Number,  // ID of Sharepoint list item (permission role configuration item)
		 * }
		 *
		 * PermissionSetsJson = {
		 *   [permissionSetName] : {
		 *     [permissionLevel] : {
		 *       loginNames : String[],  // Array of loginNames
		 *       ids : Number[],  // Array of principalIds
		 *     }
		 *   }
		 * }
		 *
		 * ```
		 * @param {'peRoles'|'pePermissionSets'|'peRuleSets'} [type]  Type of JSON 'peRoles', 'pePermissionSets' or 'peRuleSets'
		 * @returns {Promise<SettingsSyncJson>}
		 */
		getSettingsJSON(type?: 'peRoles' | 'pePermissionSets' | 'peRuleSets'): Promise<SettingsSyncJson>;
		/**
		 * Update the JSON for specific permission roles on the permission setting item
		 *
		 * ```
		 * const result = await permissions.syncRolesToSettings(roleInformation[]);
		 *
		 * roleInformation = {
		 *   groupId: Number | String,  // Id of the SharePoint group
		 *   groupName: String,  // Name of the SharePoint group
		 * }
		 *
		 * ```
		 * @param {RoleConfigItem[]} roleInformation
		 */
		syncRolesToSettings(roleInformation: RoleConfigItem[]): Promise<void>;
		/**
		 * @deprecated Use `permissions.syncRolesToSettings()` instead
		 * @param {RoleConfigItem[]} roleInformation
		 */
		updateSettingsRolesJSON(roleInformation: RoleConfigItem[]): Promise<void>;
		/**
		 * Rebuild the JSON for all permission roles on the permission setting item
		 * ```
		 *
		 * const result = await permissions.rebuildSettingsRolesJSON(updateSettingItem?);
		 *
		 * updateSettingItem = Boolean  // JSON update on settings item field peRoles [default=true]
		 *
		 * result = Object
		 *
		 * ```
		 * @param {boolean} [updateSettingItem] [default=true]
		 * @param {number} [settingItemId]
		 * @returns {Promise<Object>}
		 */
		rebuildSettingsRolesJSON(updateSettingItem?: boolean, settingItemId?: number): Promise<any>;
		/**
		 * Rebuild the JSON for all permission sets on the permission setting item
		 * ```
		 *
		 * const result = await permissions.rebuildSettingsPermissionSetsJSON(updateSettingItem?);
		 *
		 * updateSettingItem = Boolean  // JSON update on settings item field pePermissionSets [default=true]
		 *
		 * result = Object
		 * ```
		 * @param {boolean} [updateSettingItem] [default=true]
		 * @param {number} [settingItemId]
		 * @returns {Promise<Object>}
		 */
		rebuildSettingsPermissionSetsJSON(updateSettingItem?: boolean, settingItemId?: number): Promise<any>;
		/**
		 * Rebuild the JSON for all rule sets on the permission setting item
		 * ```
		 *
		 * await permissions.rebuildSettingsRuleSetsJSON();
		 * ```
		 * @returns {Promise<RuleSetsBasicJSON>}
		 */
		rebuildSettingsRuleSetsJSON(): Promise<RuleSetsBasicJSON>;
		/**
		 * Rebuild the JSON for all roles, permission sets and rule sets on the permission setting item
		 * ```
		 *
		 * const result = await permissions.rebuildSettingsJSON(updateSettingItem?);
		 *
		 * updateSettingItem = Boolean  // update all JSON fields of settings item field [default=true]
		 *
		 * result = {
		 *   rolesJSON : Object,  // Permission Roles object
		 *   permissionSetsJSON : Object,  // Permission Sets object
		 *   ruleSetsJSON : Object,  // Permission Rule Sets object
		 * }
		 *
		 * ```
		 * @param {boolean} [updateSettingItem] [default=true]
		 * @returns {Promise< { rolesJSON , permissionSetsJSON , ruleSetsJSON }>}
		 */
		rebuildSettingsJSON(updateSettingItem?: boolean): Promise<{
			rolesJSON: any;
			permissionSetsJSON: any;
			ruleSetsJSON: any;
		}>;
		/**
		 * This describes the options object for an renameRole call
		 *
		 * @typedef RenameRoleOptions
		 * @type {Object}
		 * @property {string} roleNameOld  Old Name of the permission role
		 * @property {string} roleName  New name of the permission role
		 *
		 */
		/**
		 * Rename a permission role
		 *
		 * ```
		 * let result = await permissions.renameRole(options);
		 *
		 * options = {
		 *   roleNameOld : String,  // Name of permission role to rename
		 *   roleName: String,  // New name for permission role
		 * }
		 *
		 * result = Boolean  // if permission role was renamed
		 *
		 * ```
		 * @param {RenameRoleOptions} options
		 * @returns {Promise<boolean>}
		 */
		renameRole(options: {
			/**
			 * Old Name of the permission role
			 */
			roleNameOld: string;
			/**
			 * New name of the permission role
			 */
			roleName: string;
		}): Promise<boolean>;
		/**
		 * Get all or a specific available permission role
		 *
		 * ```
		 * let result = await permissions.getRoles(options?);
		 *
		 * options = {
		 *   roleName : String,  // Name of a specific role
		 *   searchByOldRoleName? : Boolean,  // Search by old permission role name
		 * }
		 *
		 * result = {
		 *   roles : RoleItem[],  // Array with found role configuration items
		 *   roleObj: Object  // Object with for found role items key is the roleName value the IRoleItem
		 * }
		 * ```
		 * @param {GetRolesOptions} [options]
		 * @returns {Promise<GetRolesResult>}
		 */
		getRoles(options?: GetRolesOptions): Promise<GetRolesResult>;
		/**
		 * This describes the options object of an deleteRole call
		 *
		 * @typedef DeleteRoleOptions
		 * @type {Object}
		 * @property {string} roleName  Name of a specific role
		 * @property {boolean} [force]  Prevent usage check [default=false]
		 *
		 */
		/**
		 * Delete a specific permission role
		 *
		 * ```
		 * let result = await permissions.deleteRole(options);
		 *
		 * options = {
		 *   roleName : String,  // Name of a specific role
		 *   force? : Boolean,  // Prevent usage check [default=false]
		 * }
		 *
		 * result = DeleteRoleResult
		 *
		 * DeleteRoleResult = {
		 *   result : Boolean,  // if role was deleted
		 *   message? : String,  // Message if result is false
		 *   memberships? : GetRoleMembershipResult  //  if role is member
		 * }
		 *
		 * GetRoleMembershipResult = {
		 *   isMember : Boolean,  // if role is member
		 *   users: Object[],  // Array with role users which are member of role
		 *   permissionSetItems : Object[],  // Array with permission set items where role is member
		 *   rules : Object[],  // Array with rules where role is configured
		 *   staticSetItems : Object[],  // Array with static set items where role is configured
		 * }
		 * ```
		 * @param {DeleteRoleOptions} options
		 * @returns {Promise<DeleteRoleResult>}
		 */
		deleteRole(options: {
			/**
			 * Name of a specific role
			 */
			roleName: string;
			/**
			 * Prevent usage check [default=false]
			 */
			force?: boolean;
		}): Promise<DeleteRoleResult>;
		/**
		 * Get the usage of a specific permission role
		 *
		 * ```
		 * let result = await permissions.getRoleUsage(roleName);
		 *
		 * roleName = String  // Name of the permission role
		 *
		 * result = {
		 *   inUse : Boolean,  // if role is used anywhere
		 *   users: UserListItem[],  // Array with role users which are member of role
		 *   permissionSetItems : PermissionSetItem[],  // Array with permission sets configuration items where permission role is member
		 *   rules : RuleItem[],  // Array with rules where permission role is configured
		 *   staticSetItems : StaticSetConfigItem[],  // Array with static set configuration items where permission role is configured
		 * }
		 *
		 * UserListItem = {
		 *   Id : Number,
		 *   Title : String,
		 *   peUser : IUserGroupField,
		 *   peRoleLookup : IRole[],
		 *   peRoleLookupCurrent : IRole[],
		 *   peUserID: String,
		 * }
		 *
		 * UserGroupField = {
		 *   Id : Number,  // Id of user or group
		 *   Title : String,  // DisplayName
		 *   Name : String  // LoginName
		 * }
		 *
		 * Role = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String  // Name of permission role
		 * }
		 *
		 * PermissionSetItem = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String,  // Title of the permission set
		 *   pePermissionSetConfigID : String,  // Id of the configuration item
		 *   pePermissionSetID : String  // Id of the parent permission set
		 * }
		 *
		 * RuleItem = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String,  // Title of the permission rule
		 *   peRuleSetConfigID : String,  // Id of the configuration item
		 *   peRuleSetID : String  // Id of the parent permission RuleSet configuration item
		 * }
		 *
		 * StaticSetConfigItem = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String,  // Title of the permission object
		 *   peStaticSetConfigID : String,  // Id of the configuration item
		 *   peStaticSetID : String  // Id of the parent static set item
		 * }
		 * ```
		 * @param {string} roleName
		 * @returns {Promise<GetRoleUsageResult>}
		 */
		getRoleUsage(roleName: string): Promise<GetRoleUsageResult>;
		/**
		 * Get all members of a specific permission role
		 *
		 * ```
		 * let result = await permissions.getRoleMembers(roleName);
		 *
		 * roleName = String  // Name of the permission role
		 *
		 * result = UserListItem[]
		 *
		 * UserListItem = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String,  // Title
		 *   peUser : UserGroupField,  // User to handle / config the permission role membership
		 *   peRoleLookup : Role,  // Lookup values of the list permission roles
		 *   peRoleLookupCurrent: Role,  // Lookup values of the list permission roles
		 *   peUserID : String,  // Id of the configuration item
		 * }
		 *
		 * UserGroupField = {
		 *   Id : Number,  // Id of user or group
		 *   Title : String,  // DisplayName
		 *   Name : String  // LoginName
		 * }
		 *
		 * Role = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String  // Name of permission role
		 * }
		 *
		 * ```
		 * @param {string} roleName
		 * @returns {Promise<UserListItem[]>}
		 */
		getRoleMembers(roleName: string): Promise<UserListItem[]>;
		/**
		 * Removes all permission users from a specific permission role
		 *
		 * ```
		 * let result = await permissions.clearRoleMembers(roleName);
		 *
		 * roleName = String  // Name of the permission role
		 *
		 * result = Boolean
		 * ```
		 * @param {string} roleName
		 * @returns {Promise<boolean>}
		 */
		clearRoleMembers(roleName: string): Promise<boolean>;
		/**
		 * This describes the options object of an addRoleMembers call
		 *
		 * @typedef AddRoleMembersOptions
		 * @type {Object}
		 * @property {string} roleName  Name of a specific permission role
		 * @property {string[]} loginNames  Array of LoginNames
		 *
		 */
		/**
		 * Add a user or users to a specific permission role
		 *
		 * ```
		 * let result = await permissions.addRoleMembers(options);
		 *
		 * options = {
		 *   roleName : String,  // Name of a specific role
		 *   loginNames : String[]  // Array of LoginNames
		 * }
		 *
		 * result = Boolean
		 * ```
		 * @param {AddRoleMembersOptions} options
		 * @returns {Promise<boolean>}
		 */
		addRoleMembers({
			roleName,
			loginNames,
		}: {
			/**
			 * Name of a specific permission role
			 */
			roleName: string;
			/**
			 * Array of LoginNames
			 */
			loginNames: string[];
		}): Promise<boolean>;
		/**
		 * This describes the options object of an addRoleMembers call
		 *
		 * @typedef RemoveRoleMembersOptions
		 * @type {Object}
		 * @property {string} roleName  Name of a specific role
		 * @property {string[]} loginNames  Array of LoginNames
		 *
		 */
		/**
		 * Remove a permission user or permission users from a specific permission role
		 *
		 * ```
		 * let result = await permissions.removeRoleMembers(options);
		 *
		 * options = {
		 *   roleName : String,  // Name of a specific role
		 *   loginNames : String[]  // Array of LoginNames
		 * }
		 *
		 * result = Boolean
		 * ```
		 * @param {RemoveRoleMembersOptions} options
		 * @returns {Promise<boolean>}
		 */
		removeRoleMembers(options: {
			/**
			 * Name of a specific role
			 */
			roleName: string;
			/**
			 * Array of LoginNames
			 */
			loginNames: string[];
		}): Promise<boolean>;
		/**
		 * Get all or a specific permission user
		 *
		 * ```
		 * let result = await permissions.getUsers(loginName?);
		 *
		 * loginName = String
		 *
		 * result = GetUsersResult
		 *
		 * GetUsersResult = {
		 *   users : UserListItem[],  // List of permission user configuration items
		 *   userObj : UserItemObject  // Normalized object of all permission user configurations items
		 * }
		 *
		 * UserListItem = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String,  // Title
		 *   peUser : IUserGroupField,  // User to handle / config the permission role membership
		 *   peRoleLookup : IRole,  // Lookup values of the list permission roles
		 *   peRoleLookupCurrent: IRole,  // Lookup values of the list permission roles
		 *   peUserID : String,  // Id of the configuration item
		 * }
		 *
		 * IUserItemObject = {
		 *   [LoginName] = UserListItem
		 * }
		 * ```
		 * @param {string} [loginName]
		 * @returns {Promise<GetUsersResult>}
		 */
		getUsers(loginName?: string): Promise<GetUsersResult>;
		/**
		 * This describes the object for an ensureUser call
		 *
		 * @typedef EnsureUserOptions
		 * @type {Object}
		 * @property {string} loginName  LoginName of the permission user
		 * @property {string} [title]  Title of the permission user
		 * @property {string[]} [addRoleMemberships]  List of permission roles names
		 *
		 */
		/**
		 * Create a permission user
		 *
		 * ```
		 * let result = await permissions.ensureUsers(options);
		 *
		 * options = {
		 *   loginName : String,  // LoginName of a user
		 *   title? : String,  // Title of user
		 *   addRoleMemberships? : String[]  // List of permission roles names
		 * }
		 *
		 * result = EnsureUserResult
		 *
		 * EnsureUserResult = {
		 *   listUrl : String,  // Absolute url from the list PermissionRoleUsers
		 *   id : Number,  // Id of the SharePoint list item
		 *   peUserID : String,  // Id of the configuration item
		 *   loginName : String,  // LoginName of the user
		 *   memberOfRoles : String[],  // List of permission roles where the user is member
		 *   ignoredRoles : String[]  // List of permission roles does not exit
		 * }
		 * ```
		 * @param {EnsureUserOptions} options
		 * @returns {Promise<EnsureUserResult>}
		 */
		ensureUser(options: {
			/**
			 * LoginName of the permission user
			 */
			loginName: string;
			/**
			 * Title of the permission user
			 */
			title?: string;
			/**
			 * List of permission roles names
			 */
			addRoleMemberships?: string[];
		}): Promise<EnsureUserResult>;
		/**
		 * This describes the object for an addUserRoles call
		 *
		 * @typedef AddUserRolesOptions
		 * @type {Object}
		 * @property {string} loginName  LoginName of the permission user
		 * @property {string[]} roles  List of permission roles to add the membership
		 * @returns {Promise<boolean>}
		 *
		 */
		/**
		 * Add permission role memberships for a specific role user
		 *
		 * ```
		 * let result = await permissions.addUserRoles(options);
		 *
		 * options = {
		 *   loginName : String,  // LoginName of a user
		 *   roles : String[]  // List of permission roles names to add the membership
		 * }
		 *
		 * result = AddUserRolesResult
		 *
		 * AddUserRolesResult = {
		 *   listUrl : String,  // Absolute url from the list PermissionRoleUsers
		 *   id : Number,  // Id of the SharePoint list item
		 *   peUserID : String,  // Id of the configuration item
		 *   loginName : String,  // LoginName of the user
		 *   memberOfRoles : String[],  // List of permission roles where the user is member
		 *   ignoredRoles : String[]  // List of permission roles does not exit
		 * }
		 * ```
		 * @param {AddUserRolesOptions} options
		 * @returns {Promise<AddUserRolesResult|undefined>}
		 */
		addUserRoles(options: {
			/**
			 * LoginName of the permission user
			 */
			loginName: string;
			/**
			 * List of permission roles to add the membership
			 */
			roles: string[];
		}): Promise<AddUserRolesResult | undefined>;
		/**
		 * This describes the object for a removeUserRoles call
		 *
		 * @typedef RemoveUserRolesOptions
		 * @type {Object}
		 * @property {string} loginName  LoginName of the permission user
		 * @property {string[]} roles  List of permission roles to remove the membership
		 * @returns {Promise<boolean>}
		 *
		 */
		/**
		 * Remove permission role memberships for a specific role user
		 *
		 * ```
		 * let result = await permissions.removeUserRoles(options);
		 *
		 * options = {
		 *   loginName : String,  // LoginName of a user
		 *   roles : String[]  // List of permission roles names to remove the membership
		 * }
		 *
		 * result = RemoveUserRolesResult
		 *
		 * RemoveUserRolesResult = {
		 *   listUrl : String,  // Absolute url from the list PermissionRoleUsers
		 *   id : Number,  // Id of the SharePoint list item
		 *   peUserID : String,  // Id of the configuration item
		 *   loginName : String,  // LoginName of the user
		 *   memberOfRoles : String[],  // List of permission roles where the user is member
		 *   ignoredRoles : String[]  // List of permission roles does not exit
		 * }
		 * ```
		 * @param {RemoveUserRolesOptions} options
		 * @returns {Promise<RemoveUserRolesResult|undefined>}
		 */
		removeUserRoles(options: {
			/**
			 * LoginName of the permission user
			 */
			loginName: string;
			/**
			 * List of permission roles to remove the membership
			 */
			roles: string[];
		}): Promise<RemoveUserRolesResult | undefined>;
		/**
		 * Get the memberships of a specific permission user
		 *
		 * ```
		 * let result = await permissions.getUserMemberships(loginName);
		 *
		 * loginName = String  // LoginName of the permission user
		 *
		 * result = {
		 *   isMember : Boolean,  // if user is member
		 *   roles: RoleItem[],  // Array with roles where permission user is member
		 *   permissionSets : PermissionSetItem[],  // Array with permission sets where permission user is configured
		 *   staticSets : StaticSetConfigItem[]  // Array with static sets where role is configured
		 * }
		 *
		 * PermissionSetItem = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String,  // Title of the permission set
		 *   pePermissionSetConfigID : String,  // Id of the configuration item
		 *   pePermissionSetID : String  // Id of the parent permission set
		 * }
		 *
		 * StaticSetConfigItem = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String,  // Title of the permission object
		 *   peStaticSetConfigID : String,  // Id of the configuration item
		 *   peStaticConfigID : String  // Id of the parent static permissions configuration item
		 * }
		 * ```
		 * @param {string} loginName
		 * @returns {Promise<GetUserMembershipsResult>}
		 */
		getUserMemberships(loginName: string): Promise<GetUserMembershipsResult>;
		/**
		 * Get all permission role memberships for a specific role user
		 *
		 * ```
		 * let result = await permissions.getUserRoles(loginName);
		 *
		 * result = String[] | boolean  // List of permission roles or false if permission user does not exist
		 *
		 * ```
		 *
		 * @param {string} loginName
		 */
		getUserRoles(loginName: string): Promise<boolean | string[]>;
		/**
		 * This describes the options object of an deleteUsers call
		 *
		 * @typedef DeleteUserOptions
		 * @type {Object}
		 * @property {string} loginName  LoginName of a specific permission user
		 * @property {boolean} [force]  Prevent membership check [default=false]
		 *
		 */
		/**
		 * This describes the result object of an deleteUser call
		 *
		 * @typedef DeleteUserResult
		 * @type {Object}
		 * @property {boolean} result  Result of the function
		 * @property {string} [message]  Message if result is false
		 * @property {Object} [memberships]  Object with membership information
		 *
		 */
		/**
		 * Delete a specific permission user
		 *
		 * ```
		 * let result = await permissions.deleteUser(options);
		 *
		 * options = {
		 *   loginName : String,  // LoginName of a specific permission user
		 *   force? : Boolean,  // Prevent memberships check [default=false]
		 * }
		 *
		 * result = {
		 *   result : Boolean,  // if role user was deleted
		 *   message? : String,  // Message if result is false
		 *   memberships? : DeleteUserResult  //  if role user if user is member
		 * }
		 *
		 * DeleteUserResult = {
		 *   isMember : Boolean,  // if user is member
		 *   permissionSetItems : PermissionSetConfigItem[],  // Array with permission sets where role user is configured
		 *   staticSetConfigItems : StaticSetConfigItem[],  // Array with static set configuration items where role is configured
		 * }
		 *
		 * PermissionSetConfigItem = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String,  // Title of the permission set
		 *   pePermissionSetConfigID : String,  // Id of the configuration item
		 *   pePermissionSetID : String  // Id of the parent permission set
		 * }
		 *
		 * StaticSetConfigItem = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String,  // Title of the permission object
		 *   peStaticSetConfigID : String,  // Id of the configuration item
		 *   peStaticSetID : String  // Id of the parent static set
		 * }
		 * ```
		 * @param {DeleteUserOptions} options
		 */
		deleteUser({
			loginName,
			force,
		}: {
			/**
			 * LoginName of a specific permission user
			 */
			loginName: string;
			/**
			 * Prevent membership check [default=false]
			 */
			force?: boolean;
		}): Promise<{
			/**
			 * Result of the function
			 */
			result: boolean;
			/**
			 * Message if result is false
			 */
			message?: string;
			/**
			 * Object with membership information
			 */
			memberships?: any;
		}>;
		/**
		 * This describes the options of an getPermissionSets call
		 *
		 * @typedef GetPermissionSetsOptions
		 * @type {Object}
		 * @property {string} setName  // Name of a specific permission set
		 * @property {boolean} [searchByOldSetName]  // Search by old permission set name
		 *
		 */
		/**
		 * Get all or a specific permission set
		 *
		 * ```
		 * let result = await rules.getPermissionSets(options?);
		 *
		 * options = {
		 *   setName? : String,  // Name of the permission set
		 *   searchByOldSetName? : Boolean,  // Set search in field TitleLast (necessary for rename)
		 * }
		 *
		 * // Promise.resolve
		 * result = GetPermissionSetsResult
		 *
		 * GetPermissionSetsResult = {
		 *   permissionSets : String[],
		 *   permissionSetsObj: PermissionSetObject
		 * }
		 *
		 * PermissionSetObject = {
		 *   [setName: string]: PermissionSetItem // key is a permission set name from GetPermissionSetsResult.permissionSets
		 * }
		 *
		 * PermissionSetItem = {
		 *   Id : String,  // Id of SharePoint list item
		 *   Title : String,  // Title
		 *   peTitleLast : String,  // Current title
		 *   pePermissionSetID : String  // Id of the configuration item
		 * }
		 *
		 * ```
		 * @param {GetPermissionSetsOptions} [options]
		 * @returns {Promise<GetPermissionSetsResult>}
		 *
		 */
		getPermissionSets(options?: {
			/**
			 * // Name of a specific permission set
			 */
			setName: string;
			searchByOldSetName?: boolean;
		}): Promise<GetPermissionSetsResult>;
		/**
		 * Create a permission set
		 *
		 * ```
		 * let result = await permissions.ensurePermissionSet({
		 *   setName : String,  // Name of the permission set
		 *   pePermissionSetID? : String,  // Value of a unique key
		 *   updateJSON? : Boolean  // Update settingsJSON on permission setting item [default=false]
		 * });
		 *
		 * result = {
		 *   listUrl : String,  // Absolute List url from permission sets
		 *   id : Number | String,  // ID of Sharepoint list item
		 *   setName: String,  // Name of the permission set
		 *   pePermissionSetID: String  // Configuration id of the list item
		 *   members?:   Members and their permission levels
		 * }
		 * ```
		 * @param {EnsurePermissionSetOptions} options
		 * @returns {Promise<EnsurePermissionSetResult>}
		 */
		ensurePermissionSet(options: EnsurePermissionSetOptions): Promise<EnsurePermissionSetResult>;
		/**
		 * This describes the options object for an renamePermissionSet call
		 *
		 * @typedef RenamePermissionSetOptions
		 * @type {Object}
		 * @property {string} setNameOld  Old Name of the permission set
		 * @property {string} setName  New name of the permission set
		 *
		 */
		/**
		 * Rename a specific permission set
		 *
		 * ```
		 * let result = await permissions.renamePermissionSet(options);
		 *
		 * options = {
		 *   setNameOld : String,  // Name of permission set to rename
		 *   setName: String,  // New name for permission set
		 * }
		 *
		 * result = Boolean  // if permision set was renamed
		 *
		 * ```
		 * @param {RenamePermissionSetOptions} options
		 * @returns {Promise<boolean>}
		 */
		renamePermissionSet(options: {
			/**
			 * Old Name of the permission set
			 */
			setNameOld: string;
			/**
			 * New name of the permission set
			 */
			setName: string;
		}): Promise<boolean>;
		/**
		 * Update part of permission sets on the permission setting item
		 *
		 * ```
		 * let result = await permissions.syncPermissionSetToSettings(setInformation);
		 *
		 * setInformation = {
		 *   setName : String,  // Name of the permission set
		 *   members? : Object  // Object with permission level and user / groups
		 * }
		 *
		 * ```
		 * @param {string} setName
		 * @param {string} [removeSetName]
		 * @param {number} [excludeItemId]
		 */
		syncPermissionSetToSettings(setName: string, removeSetName?: string, excludeItemId?: number): Promise<void>;
		/**
		 * @deprecated Use 'permissions.syncPermissionSetToSettings()' instead
		 * @param {string} setName
		 * @param {string} [removeSetName]
		 * @param {number} [excludeItemId]
		 */
		updateSettingsPermissionSetsJSON(setName: string, removeSetName?: string, excludeItemId?: number): Promise<void>;
		/**
		 * @typedef LoginName
		 * @type {string[]}
		 */
		/**
		 * This describes an object for permission set members
		 * key is the permission level and value is an array of loginNames
		 *
		 * @typedef PermissionSetMemberAddOptions
		 * @type { { [permissionLevel: string]: LoginName } }
		 *
		 */
		/**
		 * This describes the options object for an addPermissionSetMembers call
		 *
		 * @typedef AddPermissionSetMembersOptions
		 * @type {Object}
		 * @property {string} setName  New name of the permission set
		 * @property {PermissionSetMemberAddOptions} memberOptions  Object with permission level and login names
		 * @property {boolean} [replace]  Replace unnamed permission entries
		 * @property {boolean} [updateJSON]  Update settingsJSON on permission setting item [default=false]
		 * @property {boolean} [force]  Ensure permission objects roles and users [default=false]
		 *
		 */
		/**
		 * Add members with permission levels for them to a specific permission set
		 * (optionally replace unnamed permission entries)
		 *
		 * ```
		 * let result = await permissions.addPermissionSetMembers(options);
		 *
		 * options = {
		 *   setName : String,  // Name of the permission set
		 *   memberOptions : PermissionSetMemberAddOptions  // Object with permission level and user / groups login names
		 *   replace : Boolean  // Replace unnamed permission entries
		 *   updateJSON? : Boolean  // Update settingsJSON on permission setting item [default=false]
		 * }
		 *
		 * result = Boolean
		 *
		 * PermissionSetMemberAddOptions = {
		 *   [PermissionLevel] : String = String[] // List of LoginNames
		 * }
		 *
		 * let result = await permissions.addPermissionSetMembers({
		 *   setName: "Test-Set",
		 *   memberOptions: {
		 *     "Contribute": ["i:0#.f|membership|writer@contos.onmicrosoft.com", "i:0#.f|membership|admin@contos.onmicrosoft.com"],
		 *     "Read":  ["i:0#.f|membership|reader@contos.onmicrosoft.com"],
		 *     "Custom contribute without delete":  ["i:0#.f|membership|user@contos.onmicrosoft.com"]
		 *   },
		 *   replace: true,
		 *   updateJSON: true
		 * });
		 * ```
		 * @param {AddPermissionSetMembersOptions} options
		 * @returns {Promise<boolean>}
		 */
		addPermissionSetMembers(options: {
			/**
			 * New name of the permission set
			 */
			setName: string;
			/**
			 * Object with permission level and login names
			 */
			memberOptions: {
				[permissionLevel: string]: string[];
			};
			/**
			 * Replace unnamed permission entries
			 */
			replace?: boolean;
			/**
			 * Update settingsJSON on permission setting item [default=false]
			 */
			updateJSON?: boolean;
			/**
			 * Ensure permission objects roles and users [default=false]
			 */
			force?: boolean;
		}): Promise<boolean>;
		/**
		 * This describes an object for permission set members
		 * key is the permission level and value is an array of loginNames
		 *
		 * @typedef {Object.<string, string[]>} PermissionSetMemberObject
		 */
		/**
		 * This describes the options object for an removePermissionSetMembers call
		 *
		 * @typedef RemovePermissionSetMemberOptions
		 * @type {Object}
		 * @property {string} setName  New name of the permission set
		 * @property {PermissionSetMemberObject} [byPermissionLevel]  Object with permission level and user / groups login names
		 * @property {string[]} [overall] List of login name to be remove complete from permission set
		 * @property {boolean} [updateJSON]  Update settingsJSON on permission setting item [default=false]
		 *
		 */
		/**
		 * Remove members from a specific permission set
		 *
		 * ```
		 * let result = await permissions.removePermissionSetMembers(options);
		 *
		 * options = {
		 *   setName : String,  // Name of the permission set
		 *   byPermissionLevel : PermissionSetMemberObject,  // Object with permission level and user / groups login names
		 *   overall? : String[],  // List of login name to be remove complete from permission set
		 *   updateJSON? : Boolean  // Update settingsJSON on permission setting item [default=false]
		 * }
		 *
		 * result = Boolean
		 *
		 * // remove permission level for a member
		 * let result = await permissions.removePermissionSetMembers({
		 *   setName: "Test-Set",
		 *   byPermissionLevel : {
		 *      "Read" : ["i:0#.f|membership|reader@contos.onmicrosoft.com"]
		 *   }
		 *   overall : ["i:0#.f|membership|admin@contos.onmicrosoft.com"],
		 *   updateJSON: true
		 * });
		 *
		 * ```
		 * @param {RemovePermissionSetMemberOptions} options
		 */
		removePermissionSetMembers(options: {
			/**
			 * New name of the permission set
			 */
			setName: string;
			/**
			 * Object with permission level and user / groups login names
			 */
			byPermissionLevel?: {
				[x: string]: string[];
			};
			/**
			 * List of login name to be remove complete from permission set
			 */
			overall?: string[];
			/**
			 * Update settingsJSON on permission setting item [default=false]
			 */
			updateJSON?: boolean;
		}): Promise<boolean>;
		/**
		 * Removes all members from a specific permission set
		 *
		 * ```
		 * let result = await permissions.clearPermissionSetMembers(setName);
		 *
		 * setName = String  // Name of the permission set
		 *
		 * result = Boolean
		 * ```
		 * @param {string} setName
		 * @param {boolean} [removeSet]
		 * @returns {Promise<boolean>}
		 */
		clearPermissionSetMembers(setName: string, removeSet?: boolean): Promise<boolean>;
		/**
		 * Delete a specific permission set
		 *
		 * ```
		 * let result = await permissions.deletePermissionSet(options);
		 *
		 * options = {
		 *   setName : String,  // Name of a specific permission set
		 *   force? : Boolean,  // Prevent usage check [default=false]
		 * }
		 *
		 * result = {
		 *   result : Boolean,  // if permission set was deleted
		 *   message? : String,  // Message if result is false
		 *   usage? : PermissionSetUsageResult  //  if permission set used where is set used
		 * }
		 *
		 * PermissionSetUsageResult = {
		 *   isMember : Boolean,  // if role is member
		 *   rules : Object[],  // Array with rules where permission set is configured
		 *   staticSetConifgItems : Object[],  // Array with static set configuration items where permission set is configured
		 * }
		 * ```
		 * @param {DeletePermissionSetOptions} options
		 * @returns {Promise<DeletePermissionSetResult>}
		 */
		deletePermissionSet(options: DeletePermissionSetOptions): Promise<DeletePermissionSetResult>;
		/**
		 * This describes the result object of an getPermissionSetUsage call
		 *
		 * @typedef GetPermissionSetUsageResult
		 * @type {Object}
		 * @property {boolean} inUse  Is role in use
		 * @property {RuleItem[]} rules  List of permission rules
		 * @property {StaticSetConfigItem[]} staticSetConifgItems  List of static set configuration items
		 *
		 */
		/**
		 * Get the usage of a specific permission set
		 *
		 * ```
		 * let result = await permissions.getPermissionSetUsage(setName);
		 *
		 * setName = String  // Name of the permission set
		 *
		 * result = {
		 *   inUse : Boolean,  // if permission set is used anywhere
		 *   rules : RuleItem[],  // Array with rules where permission set is configured
		 *   staticSetConfigItems : StaticSetConfigItem[],  // Array with static set configuration items where permission set is configured
		 * }
		 *
		 * RuleItem = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String,  // Title of the permission rule
		 *   peRuleSetConfigID : String,  // Id of the configuration item
		 *   peRuleSetID : String  // Id of the parent permission ruleset configuration item
		 * }
		 *
		 * StaticSetConfigItem = {
		 *   Id : Number,  // Id of SharePoint list item
		 *   Title : String,  // Title of the permission object
		 *   peStaticSetConfigID : String,  // Id of the configuration item
		 *   peStaticConfigID : String  // Id of the parent static permissions configuration item
		 * }
		 * ```
		 * @param {string} setName
		 * @returns {Promise<GetPermissionSetUsageResult>}
		 */
		getPermissionSetUsage(setName: string): Promise<{
			/**
			 * Is role in use
			 */
			inUse: boolean;
			/**
			 * List of permission rules
			 */
			rules: RuleItem[];
			/**
			 * List of static set configuration items
			 */
			staticSetConifgItems: StaticSetConfigItem[];
		}>;
		/**
		 * Get all members of a specific permission set
		 *
		 * ```
		 * let result = await permissions.getPermissionSetMembers(setName);
		 *
		 * setName = String
		 *
		 * result = {
		 *   [permissionLevel] : String = {
		 *      ids : Number[],  // List of user or group ids
		 *      loginNames : String[]  // List of loginNames
		 *   }
		 * }
		 *
		 * ```
		 *
		 * @param {string} setName
		 * @param {boolean} [internalUse]
		 * @param {number} [excludeItemId]
		 */
		getPermissionSetMembers(setName: string, internalUse?: boolean, excludeItemId?: number): Promise<{}>;
		/**
     * This describes the object object for an ensureStaticSet call
     *
     * @typedef EnsureStaticSetOptions
     * @type {Object}
     * @property {string} [title]  Title of set
     * @property {'Web'|'List'|'Folder'|'Template'} scope  Type of scope 'Web'|'List'|'Folder'|'Template'
     * @property {string} [url]  Url of Web or List [required if scope 'Web' or 'List']
     * @property {string} [folderPath]  Relative form list path to folder [required if scope 'Folder']
     * @property {string} [templateID]  Unique Id of template [required if scope 'Template']
     * @property {string} [peStaticSetID]  Value of a unique key
     *
     * /

    /**
     * This describes the result object of an ensurePermissionSet call
     *
     * @typedef EnsureStaticSetResult
     * @type {Object}
     * @property {string} listUrl  Absolute url from the list peStaticSets
     * @property {number} id  Id of the SharePoint list item
     * @property {string} title  Name of the static permission set
     * @property {string} peStaticSetID  Id of the Shareflex configuration item (static permission set item)
     * @property {'Web'|'List'|'Folder'|'Template'} scope  Type of scope 'Web'|'List'|'Folder'|'Template'
     * @property {string} [url]  Relative url of Web or List [required if scope 'Web' or 'List']
     * @property {string} [folderPath]  Relative form list path to folder [required if scope 'Folder']
     * @property {string} [templateID]  Unique Id of template [required if scope 'Template']
     * @property {boolean} updateNeccessary  Update of permissions necessary
     * @property {boolean} hasUniquePermissions  Scope object has unique permissions
     *
     */
		/**
		 * Create a static permission set
		 *
		 * ```
		 * let result = await permissions.ensureStaticSet({
		 *   title? : String,  // Title of set
		 *   scope : String,  // Type of scope 'Web'|'List'|'Folder'|'Template'
		 *   url? : String,  // Relative url of web or list [required if scope 'Web' or 'List']
		 *   folderPath? : String,  // Relative from list path to folder [required if scope 'Folder']
		 *   templateID? : String,  // Unique Id of template [required if scope 'Template']
		 *   peStaticSetID? : String  // Value of a unique key
		 * });
		 *
		 * result = EnsureStaticSetResult
		 *
		 * EnsureStaticSetResult = {
		 *   listUrl : String,  // Absolute List url from permission roles
		 *   id : Number | String,  // ID of Sharepoint list item
		 *   title : String,  // Name of the static permission set
		 *   peStaticSetID : String,  // Id of the Shareflex configuration item (static permission set item)
		 *   scope : String,  // Type of scope 'Web'|'List'|'Folder'|'Template'
		 *   url : String,  // Relative url of web or list
		 *   folderPath : String,  // Relative form list path to folder [required if scope 'Folder']
		 *   templateID : String  // Unique Id of template
		 * }
		 * ```
		 * @param {EnsureStaticSetOptions} options
		 * @returns {Promise<GetStaticSetsResult>}
		 */
		ensureStaticSet(options: {
			/**
			 * Title of set
			 */
			title?: string;
			/**
			 * Type of scope 'Web'|'List'|'Folder'|'Template'
			 */
			scope: 'Web' | 'List' | 'Folder' | 'Template';
			/**
			 * Url of Web or List [required if scope 'Web' or 'List']
			 */
			url?: string;
			/**
			 * Relative form list path to folder [required if scope 'Folder']
			 */
			folderPath?: string;
			/**
			 * Unique Id of template [required if scope 'Template']
			 */
			templateID?: string;
			/**
			 * Value of a unique key
			 *
			 * /
			 *
			 * /**
			 * This describes the result object of an ensurePermissionSet call
			 */
			peStaticSetID?: string;
		}): Promise<GetStaticSetsResult>;
		/**
		 * Get a specific static permission set
		 *
		 * @param {string} setId  Id of a static set item (peStaticSetID)
		 */
		getStaticSetById(setId: string): Promise<GetStaticSetsResult[]>;
		/**
		 * This describes the object object for an getStaticSet call
		 *
		 * @typedef GetStaticSetOptions
		 * @type {Object}
		 * @property {'Web'|'List'|'Folder'|'Template'} scope  pePermissionType scope 'Web'|'List'|'Folder'|'Template'
		 * @property {string} [url]  Relative url of web or list [required if scope 'Web' or 'List']
		 * @property {string} [folderPath]  Relative from list path to folder [required if scope 'Folder']
		 * @property {string} [templateID]  Unique Id of template [required if scope 'Template']
		 *
		 */
		/**
		 * Get a static permission set
		 *
		 * ```
		 * let result = await permissions.getStaticSets();
		 *
		 * let result = await permissions.getStaticSets({
		 *   setId : String,  // Id of a static permission set [required when scope is not set]
		 *   scope : String,  // Type of scope 'Web'|'List'|'Folder'|'Template' [required when setId is not set]
		 *   url? : String,  // Url of Web or List [required if scope 'Web' or 'List']
		 *   folderPath? : String,  // Relative path to folder [required if scope 'Folder']
		 *   templateID? : String  // Unique Id of template [required if scope 'Template']
		 * });
		 *
		 * result = GetStaticSetsResult[]
		 *
		 * GetStaticSetsResult = {
		 *   id : Number,  // Id of the SharePoint list item
		 *   title : String,  // Name of the static permission set
		 *   peStaticSetID : String,  // Id of the Shareflex configuration item (static permission set item)
		 *   scope : String,  // Type of scope 'Web'|'List'|'Folder'|'Template'
		 *   url : String,  // Url of Web or List [required if scope 'Web' or 'List']
		 *   folderPath : String,  // Relative path to folder [required if scope 'Folder']
		 *   templateID : String,  // Unique Id of template [required if scope 'Template']
		 *   updateNeccessary : Boolean,  // Update of permissions necessary
		 *   hasUniquePermissions : Boolean  // Scope object has unique permissions
		 * }
		 * ```
		 * @param {GetStaticSetOptions} [options]
		 * @returns {Promise<GetStaticSetsResult[]>}
		 */
		getStaticSets(options?: {
			/**
			 * pePermissionType scope 'Web'|'List'|'Folder'|'Template'
			 */
			scope: 'Web' | 'List' | 'Folder' | 'Template';
			/**
			 * Relative url of web or list [required if scope 'Web' or 'List']
			 */
			url?: string;
			/**
			 * Relative from list path to folder [required if scope 'Folder']
			 */
			folderPath?: string;
			/**
			 * Unique Id of template [required if scope 'Template']
			 */
			templateID?: string;
		}): Promise<GetStaticSetsResult[]>;
		/**
		 * This describes the object object for an renameStaticSet call
		 *
		 * @typedef RenameStaticSetOptions
		 * @type {Object}
		 * @property {string} peStaticSetID  Id of the Shareflex configuration item (static permission set item)
		 * @property {string} title  Title for set
		 *
		 */
		/**
		 * Rename a static permission set
		 *
		 * ```
		 * let result = await permissions.renameStaticSet({
		 *   peStaticSetID: "22D6-44BF",
		 *   title: "My new static set title"
		 * });
		 *
		 * let result = true | false
		 * ```
		 * @param {RenameStaticSetOptions} options
		 * @returns {Promise<boolean>}
		 */
		renameStaticSet(options: {
			/**
			 * Id of the Shareflex configuration item (static permission set item)
			 */
			peStaticSetID: string;
			/**
			 * Title for set
			 */
			title: string;
		}): Promise<boolean>;
		/**
		 * This describes the object of a Static Set configuration item
		 *
		 * @typedef RoleLookupValue
		 * @type {Object}
		 * @property {number} Id  Id of SharePoint list item
		 * @property {string} Title  DisplayName of the role / SharePoint group
		 * @property {string} peSharePointGroupID  SharePoint group id
		 *
		 */
		/**
		 * This describes the object of a Static Set configuration item
		 *
		 * @typedef StaticSetConfigurationItem
		 * @type {Object}
		 * @property {string} Id  Id of the SharePoint list item
		 * @property {string} pePermissionType  Type of permission handling
		 * @property {UserGroupField[]} peUsersOrRoles  Users or Groups
		 * @property {RoleLookupValue[]} peRoleLookup  Lookup to a permission role
		 * @property {PermissionSetLookup[]} pePermissionSetLookup  Lookup to a permission set
		 * @property {string[]} pePermissionLevel  List of permission levels
		 * @property {string} Title  Title of configuration item
		 * @property {number} peOrder  Order of the configuration in static set
		 * @property {string} peStaticSetConfigID  Id of the configuration item
		 */
		/**
		 * @param {GetStaticSetPermissionDifferencesOptions} options
		 * @returns {Promise<StaticSetPermissionDifferences>}
		 */
		getStaticSetPermissionDifferences(options: {
			setId: string;
			scope: string;
			url: string;
			/**
			 * scope folder
			 */
			folderPath?: string;
			/**
			 * scope template with item
			 */
			itemId?: number;
		}): Promise<{
			remove: any;
			add: any;
			hasDifferences: boolean;
			objectHasUniquePermissions: boolean;
		}>;
		/**
		 * Assign the effective permissions of the static set configuration
		 *
		 * ```
		 * await permissions.assignStaticSetPermissions(staticSetItem, templateOptions?);
		 *
		 * staticSetItem = StaticSetItem;
		 *
		 * StaticSetItem {
		 *   Id : Number,
		 *   Title : String,
		 *   peStaticSetID : String,
		 *   peScope : String,
		 *   peStaticSetTemplateID : String,
		 *   peScopeUrl : String,
		 *   peScopeFolderPath : String,
		 *   peUpdateNeccessary : Boolean,
		 *   peHasUniquePermissions : Boolean,
		 *   peSetUniquePermission : Boolean,
		 *   peDeleteUniquePermission : Boolean
		 * }
		 *
		 * templateOptions = {
		 *   scope : String,  // Type of scope 'Web'|'List'|'Folder'|'Item'
		 *   url : String,  // Absolute url to web or list
		 *   folderPath? : String,  // Relative from list path to folder [required if scope 'Folder']
		 *   itemId? : Number  // Id of SharePoint list item [required if scope 'Item']
		 * }
		 *
		 * ```
		 * @param {StaticSetItem} staticSetItem
		 * @param {AssignStaticSetPermissionsOptions} [templateOptions]
		 */
		assignStaticSetPermissions(staticSetItem: StaticSetItem, templateOptions?: AssignStaticSetPermissionsOptions): Promise<void>;
		/**
		 * Remove the effective permissions of the static set configuration and activate the role inheritance
		 *
		 * @param {StaticSetItem} staticSetItem
		 */
		removeStaticSetPermissions(staticSetItem: StaticSetItem): Promise<void>;
		/**
		 * Function to get the absolute url of a scoped url (e.g. peStaticSet.peScopeUrl)
		 * @param {string} scope Type of target (Web, List, Folder)
		 * @param {string} siteRelativeUrl site relative url of scope target
		 * @returns {string} Absolute Url of StaticSet target
		 */
		getUrlByScope(scope: string, siteRelativeUrl: string): string;
		/**
		 * Get the value from property 'HasUniqueRoleAssignments'
		 *
		 * ```
		 * let result = await permissions.getHasUniqueRoleAssignments({
		 *   scope : String,  // Type of scope 'Web'|'List'|'Folder'|'Item'
		 *   url : String,  // Absolute url of web, list or folder [required if scope 'Web' or 'List']
		 *   folderPath? : String,  // Relative form list path to folder [required if scope 'Folder']
		 *   itemId? : Number  // Id of SharePoint list item [required if scope = 'Item']
		 * });
		 *
		 * result = Boolean;
		 *
		 * ```
		 *
		 * @param {GetHasUniqueRoleAssignmentsOptions} options
		 * @returns {Promise<boolean>}
		 */
		getHasUniqueRoleAssignments(options: GetHasUniqueRoleAssignmentsOptions): Promise<boolean>;
		/**
		 * Get all configuration items of a specific permission static set
		 * @param {string} setId
		 * @returns {Promise<StaticSetConfigurationItem[]>}
		 */
		getStaticSetConfiguration(setId: string): Promise<
			{
				/**
				 * Id of the SharePoint list item
				 */
				Id: string;
				/**
				 * Type of permission handling
				 */
				pePermissionType: string;
				/**
				 * Users or Groups
				 */
				peUsersOrRoles: UserGroupField[];
				/**
				 * Lookup to a permission role
				 */
				peRoleLookup: {
					/**
					 * Id of SharePoint list item
					 */
					Id: number;
					/**
					 * DisplayName of the role / SharePoint group
					 */
					Title: string;
					/**
					 * SharePoint group id
					 */
					peSharePointGroupID: string;
				}[];
				/**
				 * Lookup to a permission set
				 */
				pePermissionSetLookup: PermissionSetLookup[];
				/**
				 * List of permission levels
				 */
				pePermissionLevel: string[];
				/**
				 * Title of configuration item
				 */
				Title: string;
				/**
				 * Order of the configuration in static set
				 */
				peOrder: number;
				/**
				 * Id of the configuration item
				 */
				peStaticSetConfigID: string;
			}[]
		>;
		/**
		 * @typedef AddStaticSetConfigItemOptions
		 * @type {Object}
		 * @property {string} setId  Id of the permission static set
		 * @property {string} [title]  Title of the configuration, when empty value equal peStaticSetID|pePermissionType
		 * @property {'111 - replace Set'|'112 - add Set'|'113 - remove Set'|'211 - replace Role'|'212 - add Role'|'213 - remove Role'|'311 - replace User'|'312 - add User'|'313 - remove User'} permissionType  Type of permission handling
		 * @property {string[]} permissionLevel  List of permission level (e.g. Contribute, Design, Edit, Full Control, Read and custom level)[mandatory unless permissionType = '111 - replace Set'|'112 - add Set'|'113 - remove Set']
		 * @property {string[]} permissionUsers  List of login names of users [required if permissionType = '311 - replace User'|'312 - add User'|'313 - remove User']
		 * @property {string[]} permissionRoles  List of name of permission roles [required if permissionType = '211 - replace Role'|'212 - add Role'|'213 - remove Role']
		 * @property {string[]} permissionSets  List of name of permission sets [required if permissionType = '111 - replace Set'|'112 - add Set'|'113 - remove Set']
		 */
		/**
		 * Add a new configuration to a specific permission static set
		 *
		 * ```
		 * let result = permissions.addStaticSetConfigItem({
		 *   setId : String,  // Id of the permission static set
		 *   title? : String,  // Title of the configuration, when empty value equal peStaticSetID|pePermissionType
		 *   pePermissionType : String,  // Type of permission handling '111 - replace Set'|'112 - add Set'|'113 - remove Set'|'211 - replace Role'|'212 - add Role'|'213 - remove Role'|'311 - replace User'|'312 - add User'|'313 - remove User'
		 *   permissionLevel : String[],  // List of permission level (e.g. Contribute, Design, Edit, Full Control, Read and custom level)[mandatory unless permissionType = '111 - replace Set'|'112 - add Set'|'113 - remove Set']
		 *   permissionUsers : String[],  // List of login names of users [required if permissionType = '311 - replace User'|'312 - add User'|'313 - remove User']
		 *   permissionRoles : String[],  // List of name of permission roles [required if permissionType = '211 - replace Role'|'212 - add Role'|'213 - remove Role']
		 *   permissionSets : String[],  // List of name of permission sets [required if permissionType = '111 - replace Set'|'112 - add Set'|'113 - remove Set']
		 * });
		 *
		 * result = StaticSetConfigurationItem
		 * ```
		 * @param {AddStaticSetConfigItemOptions} options
		 * @returns {Promise<StaticSetConfigurationItem>}
		 */
		addStaticSetConfigItem(options: {
			/**
			 * Id of the permission static set
			 */
			setId: string;
			/**
			 * Title of the configuration, when empty value equal peStaticSetID|pePermissionType
			 */
			title?: string;
			/**
			 * Type of permission handling
			 */
			permissionType:
				| '111 - replace Set'
				| '112 - add Set'
				| '113 - remove Set'
				| '211 - replace Role'
				| '212 - add Role'
				| '213 - remove Role'
				| '311 - replace User'
				| '312 - add User'
				| '313 - remove User';
			/**
			 * List of permission level (e.g. Contribute, Design, Edit, Full Control, Read and custom level)[mandatory unless permissionType = '111 - replace Set'|'112 - add Set'|'113 - remove Set']
			 */
			permissionLevel: string[];
			/**
			 * List of login names of users [required if permissionType = '311 - replace User'|'312 - add User'|'313 - remove User']
			 */
			permissionUsers: string[];
			/**
			 * List of name of permission roles [required if permissionType = '211 - replace Role'|'212 - add Role'|'213 - remove Role']
			 */
			permissionRoles: string[];
			/**
			 * List of name of permission sets [required if permissionType = '111 - replace Set'|'112 - add Set'|'113 - remove Set']
			 */
			permissionSets: string[];
		}): Promise<{
			/**
			 * Id of the SharePoint list item
			 */
			Id: string;
			/**
			 * Type of permission handling
			 */
			pePermissionType: string;
			/**
			 * Users or Groups
			 */
			peUsersOrRoles: UserGroupField[];
			/**
			 * Lookup to a permission role
			 */
			peRoleLookup: {
				/**
				 * Id of SharePoint list item
				 */
				Id: number;
				/**
				 * DisplayName of the role / SharePoint group
				 */
				Title: string;
				/**
				 * SharePoint group id
				 */
				peSharePointGroupID: string;
			}[];
			/**
			 * Lookup to a permission set
			 */
			pePermissionSetLookup: PermissionSetLookup[];
			/**
			 * List of permission levels
			 */
			pePermissionLevel: string[];
			/**
			 * Title of configuration item
			 */
			Title: string;
			/**
			 * Order of the configuration in static set
			 */
			peOrder: number;
			/**
			 * Id of the configuration item
			 */
			peStaticSetConfigID: string;
		}>;
		/**
		 *
		 */
		updateStaticSetConfigItem(options: any): Promise<void>;
		/**
		 *
		 */
		removeStaticSetConfigItem(options: any): Promise<void>;
		/**
		 * This describes the properties of an object for the synchronization process
		 *
		 * @typedef RuleSetInformation
		 * @type {Object}
		 * @property {string} peRuleSetID  Id of the Shareflex configuration item (permission rule set item)
		 * @property {string} [Title]  Title
		 * @property {'Local'|'Global'} [peRuleSetType]  Type of rule set scope
		 * @property {string} [peListUrls]  List of relative list urls
		 * @property {boolean} [peDeactivated]  Is rule set deactivated [default=false]
		 * @property {boolean} [peInheritanceCheck]  Reset role inheritance when no rule matches [default=true]
		 * @property {RuleSetConfigListItem[]} [rules]  List of rules for the rule set
		 * @property {string[]} [rulesSelectFields]  List of internal field names relevant for rules handling (get item request in function assignRuleSetPermissions)
		 * @property {RuleSetFolderListItem[]} [folders]  List of secondary folders for the rule set
		 * @property {string[]} [foldersSelectFields]  List of internal field names relevant for folders handling (get item request in function assignRuleSetPermissions)
		 * @property {string[]} [relevantRuleSetFields]  List of internal field names relevant for custom function C-900 and P-900
		 * @property {boolean} [delete]  Remove from Shareflex configuration
		 *
		 */
		/**
		 * Update the JSON for specific permission rule set on the permission setting item
		 *
		 * ```
		 * let result = await permissions.updateSettingsRuleSetsJSON(ruleSetInformation, rules?);
		 *
		 * ruleSetInformation = {
		 *   peRuleSetID : String,  // Id of the Shareflex configuration item (permission rule set item)
		 *   Title? : String,  // Title
		 *   peRuleSetType? 'Local'|'Global',  // Type of rule set scope
		 *   peListUrls? : String,  // List of relative list urls
		 *   peDeactivated? : Boolean,  // Is rule set deactivated [default=false]
		 *   peInheritanceCheck? Boolean,  // Reset role inheritance when no rule matches [default=true]
		 *   rules? : Object[],  // List of rules for the rule set
		 *   rulesSelectFields? : String[],  // List of internal field names relevant for rules handling (get item request in function assignRuleSetPermissions)
		 *   folders? : Object[],  // List of secondary folders for the rule set
		 *   foldersSelectFields? : String[],  // List of internal field names relevant for folders handling (get item request in function assignRuleSetPermissions)
		 *   delete? : Boolean  Remove from Shareflex configuration
		 * }
		 *
		 * ```
		 * @param {RuleSetInformation} ruleSetInformation
		 */
		updateSettingsRuleSetsJSON(ruleSetInformation: {
			/**
			 * Id of the Shareflex configuration item (permission rule set item)
			 */
			peRuleSetID: string;
			/**
			 * Title
			 */
			Title?: string;
			/**
			 * Type of rule set scope
			 */
			peRuleSetType?: 'Local' | 'Global';
			/**
			 * List of relative list urls
			 */
			peListUrls?: string;
			/**
			 * Is rule set deactivated [default=false]
			 */
			peDeactivated?: boolean;
			/**
			 * Reset role inheritance when no rule matches [default=true]
			 */
			peInheritanceCheck?: boolean;
			/**
			 * List of rules for the rule set
			 */
			rules?: RuleSetConfigListItem[];
			/**
			 * List of internal field names relevant for rules handling (get item request in function assignRuleSetPermissions)
			 */
			rulesSelectFields?: string[];
			/**
			 * List of secondary folders for the rule set
			 */
			folders?: RuleSetFolderListItem[];
			/**
			 * List of internal field names relevant for folders handling (get item request in function assignRuleSetPermissions)
			 */
			foldersSelectFields?: string[];
			/**
			 * List of internal field names relevant for custom function C-900 and P-900
			 */
			relevantRuleSetFields?: string[];
			/**
			 * Remove from Shareflex configuration
			 */
			delete?: boolean;
		}): Promise<void>;
		/**
		 * Function to synchronize relevant data for a specific RuleSet to the permissions settings
		 * @param {SyncRuleSetToSettingsOptions} options
		 */
		syncRuleSetToSettings(options: SyncRuleSetToSettingsOptions): Promise<void>;
		/**
		 * Function to synchronize relevant data for all existing RuleSets to the permissions settings (rebuild)
		 * @param {boolean} [doUpdate]
		 * @returns {Promise<{ruleSetsBasics: {Id: number, peRuleSetID: string}[], ruleSetsBasicsJSON: Object}>}
		 */
		syncAllRuleSetsToSettings(doUpdate?: boolean): Promise<{
			ruleSetsBasics: {
				Id: number;
				peRuleSetID: string;
			}[];
			ruleSetsBasicsJSON: any;
		}>;
		/**
		 * Synchronize the configurations (rules) for a specific RuleSet to the RuleSet item
		 * ```
		 * await permissions.syncRuleSetConfigsToRuleSet(setId,excludeItemId?);
		 *
		 * setId = String  // Id of a specific rule set (peRuleSetId)
		 * excludeItemId? = Number  // Id of SharePoint list item (Type of event = 'ItemDeleting')
		 * ```
		 * @param {string} ruleSetID
		 * @param {number} [excludeItemId]
		 */
		syncRuleSetConfigsToRuleSet(ruleSetID: string, excludeItemId?: number): Promise<void>;
		/**
		 * Synchronize the configurations (folders) for a specific RuleSet to the RuleSet item
		 * ```
		 * await permissions.syncRuleSetFoldersToRuleSet(setId,excludeItemId?);
		 *
		 * setId = String  // Id of a specific rule set (peRuleSetId)
		 * excludeItemId? = Number  // Id of SharePoint list item (Type of event = 'ItemDeleting')
		 * ```
		 * @param {string} ruleSetID
		 * @param {number} [excludeItemId]
		 */
		syncRuleSetFoldersToRuleSet(ruleSetID: string, excludeItemId?: number): Promise<void>;
		/**
		 * @typedef CreateSetPermissionsJobOptions
		 * @type {Object}
		 * @property {string} listUrl  Absolute list url
		 * @property {number|string} itemId  Id of SharePoint list item
		 * @property {string} [title]  Title of job
		 * @property {boolean} [simulation]  Only RuleSet check no permission actions
		 */
		/**
		 * @typedef CreateSetPermissionsJobResult
		 * @type {Object}
		 * @property {boolean} result  Is job created
		 * @property {number} jobItemId  Id of SharePoint list item
		 * @property {string} jobListUrl  Absolute list url of the job list
		 */
		/**
		 * Create a job to assign the effective permissions of the rule set configuration for a specific list item (async),
		 * the new created job item will be trigger the Shareflex Rules Event
		 * ```
		 * let result = await permissions.createSetPermissionsJob(CreateSetPermissionsJobOptions);
		 *
		 * CreateSetPermissionsJobOptions = {
		 *   listUrl : String,  // Absolute list url
		 *   itemId : Number,  // Id of SharePoint list item
		 *   title : String,  // Title of job
		 *   simulation? : Boolean  // Only RuleSet check no permission actions
		 * }
		 *
		 * result = CreateSetPermissionsJobResult
		 *
		 * CreateSetPermissionsJobResult = {
		 *   result : Boolean,  // Job item was created
		 *   jobItemId : Number,  // Id of SharePoint list item
		 *   jobListUrl : String  // Absolute list url of the job list
		 * }
		 *
		 * ```
		 * @param {CreateSetPermissionsJobOptions} options
		 * @returns {Promise<CreateSetPermissionsJobResult>}
		 */
		createSetPermissionsJob(options: {
			/**
			 * Absolute list url
			 */
			listUrl: string;
			/**
			 * Id of SharePoint list item
			 */
			itemId: number | string;
			/**
			 * Title of job
			 */
			title?: string;
			/**
			 * Only RuleSet check no permission actions
			 */
			simulation?: boolean;
		}): Promise<{
			/**
			 * Is job created
			 */
			result: boolean;
			/**
			 * Id of SharePoint list item
			 */
			jobItemId: number;
			/**
			 * Absolute list url of the job list
			 */
			jobListUrl: string;
		}>;
		/**
		 * @typedef RuleObject
		 * @type {Object}
		 * @property {boolean} peDeactivated
		 * @property {string} pePermissionType
		 * @property {Lookup} pePermissionSetLookup
		 * @property {Lookup} peRoleLookup
		 * @property {string} peRolePrefix
		 * @property {string} peFieldName
		 * @property {string} peRoleSuffix
		 * @property {string} peConditionType
		 * @property {string} peFormulaString
		 * @property {boolean} peAutoCreate
		 * @property {string} peCondition
		 * @property {string} peFieldValue
		 * @property {string[]} pePermissionLevel
		 * @property {string} peFieldValueType
		 * @property {string} peFunctionName
		 * @property {boolean} peSkipAtInheritanceCheck
		 * @property {boolean} peBreakRulesetCheck
		 * @property {number} peOrder
		 * @property {UserGroupField[]} peUsersOrRoles
		 */
		/**
		 * Minimal object to describe a secondary RuleSet folder item for permission assignment
		 * @typedef RuleSetFolderObject
		 * @type {Object}
		 * @property {string} peLists  Web relative List Urls separated by lineBreaks ('\n')
		 * @property {string} peFolderPath  Path to folder, can contain variables declared by leading '$'
		 * @property {string} peAssignmentType  How permissions are assigned to the folder
		 * @property {string} [pePermissionLevel]  Name of permission level for F-200
		 * @property {string} [peFunctionName]  Custom function to be called for F-900
		 */
		/**
		 * @typedef RuleSet
		 * @type {Object}
		 * @property {string} title  Title of RuleSet
		 * @property {'Global'|"Local"} type  If RuleSet is relevant for one single list only (Local) or for multiple lists (Global)
		 * @property {string[]} lists  Site relative Urls of all lists, separated by line break ('\n')
		 * @property {boolean} active  If RuleSet is enabled
		 * @property {boolean} inheritanceCheck  If role inheritance has to be restored if no rule matches
		 * @property {RuleObject[]} rules  All logical rules of RuleSet
		 * @property {string[]} rulesSelectFields  Array of fields to be relevant for logical rule checks (have to be requested via REST)
		 * @property {RuleSetFolderObject[]} folders  All configured secondary folders of RuleSet
		 * @property {string[]} foldersSelectFields  Array of fields to be relevant to resolve folder path (have to be requested via REST)
		 * @property {string[]} [relevantRuleSetFields]  Array of fields to be relevant for logical rule checks (have to be requested via REST) global configured via GUI
		 */
		/**
		 * @typedef RuleSetProperties
		 * @type {Object}
		 * @property {string} title
		 * @property {'Global'|"Local"} type
		 */
		/**
		 * @typedef PermissionTypeObject
		 * @type {Object}
		 * @property {string} code
		 * @property {'set'|'role'|'people/group'|'inheritance'|'function'|'undefined'} category
		 * @property {'none'|'condition'|'dynamic'|'formula'|'undefined'} checkType
		 * @property {'unknown'|'replace'|'add'|'remove'|'undefined'} appliedAs
		 *
		 */
		/**
		 * @typedef RuleSetTypeResult
		 * @type {Object}
		 * @property {boolean} inheritanceCheck
		 * @property {boolean} relevantRulesMatched
		 */
		/**
		 *
		 * @typedef RuleAnalysisOptions
		 * @type {Object}
		 * @property {boolean} inheritanceCheck
		 * @property {RuleObject} rule
		 * @property {Object} checkItem
		 * @property {import('ShareflexAddons').default} addons
		 * @property {RoleDefinitionsObject} roleDefObj  Object with keys for all Sharepoint Permission Role Names and Kinds, value is their RoleDefId
		 * @property {RuleSetTypeResult} ruleSetTypeResult
		 *
		 */
		/**
		 * @typedef EffectivePermissionSet
		 * @type { { [roleDefId: number]: number[] } }
		 */
		/**
		 * @typedef EffectivePermissionsObject
		 * @type {Object}
		 * @property {boolean} replace
		 * @property {boolean} remove
		 * @property {EffectivePermissionSet} effectiveSet
		 * @property {number[]} removeSet
		 * @property {number[]} matchedRemovedPrincipals
		 * @property {boolean} inheritanceCheck
		 * @property {boolean} relevantRulesMatched
		 * @property {boolean} setInheritance
		 * @property {boolean} matchedInheritance
		 * @property {boolean} itemHasUniquePermissions
		 */
		/**
		 * @typedef GetEffectiveStaticSetPermissionsOptions
		 * @type {Object}
		 * @property {string} setId
		 * @property {string} scope
		 * @property {string} url
		 * @property {string} [folderPath] scope folder
		 * @property {number} [itemId] scope template with item
		 */
		/**
		 * @typedef GetEffectiveStaticSetPermissionsResult
		 * @type {Object}
		 * @property {boolean} replace
		 * @property {boolean} remove
		 * @property {EffectivePermissionSet} effectiveSet
		 * @property {number[]} removeSet
		 * @property {number[]} matchedRemovedPrincipals
		 */
		/**
		 * @typedef GetStaticSetPermissionDifferencesOptions
		 * @type {Object}
		 * @property {string} setId
		 * @property {string} scope
		 * @property {string} url
		 * @property {string} [folderPath] scope folder
		 * @property {number} [itemId] scope template with item
		 */
		/**
		 * @typedef StaticSetPermissionDifferences
		 * @type {Object}
		 * @property {*} remove
		 * @property {*} add
		 * @property {boolean} hasDifferences
		 * @property {boolean} objectHasUniquePermissions
		 */
		/**
		 * @typedef HandleSecondaryFoldersOptions
		 * @type {Object}
		 * @property {string} listUrl  Absolute Url of context list
		 * @property {Object} listItem  Context list item
		 * @property {RelevantRuleSets} relevantRuleSets  All RuleSets being relevant for primary item
		 * @property {RoleDefinitionsObject} roleDefObj  Object with keys for all Sharepoint Permission Role Names and Kinds, value is their RoleDefId
		 * @property {EffectivePermissionSet} effectivePermissionSet  Object with effective roleDef ids and their principal ids from primary item
		 * @property {import('ShareflexAddons').default} addons
		 */
		/**
		 * @typedef SecondaryFoldersByAssignmentType
		 * @type {Object}
		 * @property {"F-100"|"F-110"|"F-200"} assignmentType
		 * @property {string[]} folderUrls
		 */
		/**
		 * @typedef HandleSecondaryFoldersResult
		 * @type {Object}
		 * @property {boolean} changedSecondaryFolderPermissions If any permission of a secondary folder has been changed
		 * @property {SecondaryFoldersByAssignmentType[]} failed Secondary folders that have not been processed completely
		 */
		/**
		 * @typedef { "F-100" | "F-110" | "F-200" | "F-900" } AssignmentCode
		 */
		/**
		 * @typedef FolderAssignmentInfo
		 * @type {Object}
		 * @property {string} folderPath  List relative pth of folder
		 * @property {AssignmentCode} assignmentCode  method how to assign permissions (prefix of peAssignmentType)
		 * @property {string} [permissionLevel]  Name of permission level for F-200
		 * @property {string} [functionName]  Custom function to be called for F-900
		 */
		/**
		 * Object with all relevant folders (by web relative Url) and the
		 * @typedef EffectiveFolderAssignmentCodes
		 * @type { { [listUrl: string]: FolderAssignmentInfo} }
		 */
		/**
		 * Assign the effective permissions of the rule set configuration for a specific list item
		 *
		 * ```
		 * let result = await permissions.assignRuleSetPermissions(AssignRuleSetPermissionsOptions);
		 *
		 * AssignRuleSetPermissionsOptions = {
		 *   listUrl : String,  // Absolute list url
		 *   itemId : Number,  // Id of SharePoint list item
		 *   simulation? : Boolean  // Only ruleset check no permission actions [default=false]
		 * }
		 *
		 * result = {
		 *   result : Boolean,  // If all permissions have been set correctly
		 *   messages : String[],  // Messages of check and result information
		 *   uniquePermissions : Boolean,  // Has item unique permissions
		 *   permissionOperations : String[],  // Batch request endpoint templates
		 *   changedPermissions : Boolean,  // If any permissions have been changed
		 *   changedSecondaryFolderPermissions : Boolean,  // If any permission of a secondary folder has been changed
		 *   failedFolderUrls : String[],  // Absolute url of folders that have not been processed correctly
		 *   timeUsed : String  // Time for checking and assigning the permissions
		 * }
		 *
		 * ```
		 *
		 * @param {AssignRuleSetPermissionsOptions} options
		 * @param {PushPermissionOptions} [pushPermissionOptions] for internal use
		 * @returns {Promise<AssignRuleSetPermissionsResult>}
		 */
		assignRuleSetPermissions(options: AssignRuleSetPermissionsOptions, pushPermissionOptions?: PushPermissionOptions): Promise<AssignRuleSetPermissionsResult>;
		/**
		 * Ensure folder permissions
		 * ```
		 * let result = await permissions.ensureFoldersPermissions(EnsureFoldersPermissionsOptions);
		 *
		 * EnsureFoldersPermissionsOptions = {
		 *   webUrl : String,  // Absolute web url
		 *   webRelativeFolderUrls : String[],  // Relative urls to folder to be handled
		 *   targetPermissions? : EffectivePermissionSet,  // Permission to be set
		 *   setRoleInheritance? : Boolean  // Should be ensure the role inheritance
		 * }
		 *
		 * EffectivePermissionSet = {
		 *   [roleDefId : Number]: principalId[]
		 * }
		 *
		 * principalId : Number
		 *
		 * result = {
		 *   result : Boolean,  // If all permissions have been set correctly
		 *   changedPermissions : Boolean,  // If any permission has been changed
		 *   failedFolderUrls : String[],  // Absolute url of folders that have not been processed correctly
		 *   messages : String[],  // Messages of check and result information
		 *   timeUsed : String  // Time for checking and assigning the permissions
		 * }
		 * ```
		 * @param {EnsureFoldersPermissionsOptions} options
		 * @returns {Promise<SetPermissionsResult>}
		 */
		ensureFoldersPermissions(options: EnsureFoldersPermissionsOptions): Promise<SetPermissionsResult>;
		/**
		 * Function to get active Permissions RuleSets for a list
		 *
		 * ´´´
		 *
		 * const result = await permissions.getActiveRuleSets(listUrl);
		 *
		 * listUrl : String  // Absolute url of list
		 *
		 * result = {
		 *   count : Number,  // Amount of active Rule Sets for list
		 *   global : RuleSet,  // Active global Rule Set for list
		 *   local : RuleSet,  // Active local Rule Set for list
		 * }
		 * ´´´
		 *
		 * @param {string} listUrl Absolute url of list
		 * @param {RuleSetsBasicJSON} [ruleSetsBasicJSON]
		 * @returns {Promise<RelevantRuleSets>}
		 */
		getActiveRuleSets(listUrl: string, ruleSetsBasicJSON?: RuleSetsBasicJSON): Promise<RelevantRuleSets>;
		/**
		 *
		 * @typedef RuleCheckParams
		 * @type {Object}
		 * @property {boolean} deactivated
		 * @property {boolean} inheritanceCheck
		 * @property {PermissionTypeObject} permissionType
		 * @property {string} conditionTypeCode code of peConditionType (e.g. 'C-200')
		 * @property {string|string[]|Object[]} itemFieldValue
		 * @property {string} fieldType
		 * @property {string} conditionCode code of peCondition (e.g. '<=')
		 * @property {Function} checkFunction
		 * @property {string} referenceValue
		 * @property {string} formula
		 * @property {Object} checkItem
		 * @property {string} role
		 * @property {string} set
		 * @property {string} dynamicTemplateString
		 * @property {boolean} autoCreate
		 * @property {boolean} breakRulesetCheck
		 * @property {boolean} skipAtInheritanceCheck
		 * @property {string} functionName
		 * @property {number[]} roleDefIds
		 * @property {number[]} principalIds Array of Principal Ids to be checked
		 * @property {number} order
		 * @property {import('ShareflexAddons').default} addons
		 * @property {Object} roleDefObj  Object with keys for all Sharepoint Permission Role Names and Kinds, value is their RoleDefId
		 * @property {RuleSetTypeResult} ruleSetTypeResult
		 */
		/**
		 * @typedef PrepareEffectivePermissionsOptions
		 * @type {Object}
		 * @property {RuleCheckParams} ruleCheckParams
		 * @property {boolean} ruleCheckResult
		 * @property {Object} [customEffectivePermissions]
		 * @property {RuleSetTypeResult} ruleSetTypeResult
		 */
		/**
		 * @typedef GetEffectiveRuleSetPermissionsOptions
		 * @type {Object}
		 * @property {string} listUrl  Absolute list url
		 * @property {number|string} itemId  Id of SharePoint list item
		 * @property {RelevantRuleSets} relevantRuleSets  Object with relevant rule sets for given list item
		 * @property {Object} peRoles  Object with all available permission roles
		 * @property {Object} pePermissionSets  Object with all available permission sets
		 * @property {Object} [item]  List item with correct properties (push permissions)
		 * @property {RoleDefinitionsObject} [roleDefObj]  Object with keys for all Sharepoint Permission Role Names and Kinds, value is their RoleDefId
		 * @property {string[]} [selectFields] Array with relevant fields (push permissions)
		 */
		/**
		 * @typedef GetEffectiveRuleSetPermissionsResult
		 * @type {Object}
		 * @property {boolean} result  Result of function call
		 * @property {string[]} messages  Messages and list of matched rules of rule sets
		 * @property {EffectivePermissionsObject} effectivePermissions  Object with permission information for assigning function
		 * @property {Object} currentPermissions  Object with current permissions
		 * @property {Object} listItem  Context list item with all relevant fields
		 * @property {Object} roleDefObj  Object with keys for all Sharepoint Permission Role Names and Kinds, value is their RoleDefId
		 * @property {import('ShareflexRules').default} [rules]
		 */
		/**
		 * Function to extract the leading language independent permission type code
		 * @param {string} permissionTypeString Value of pePermissionType
		 * @param {number} [ruleOrder]
		 * @param {Function} [callbackOnError]
		 * @returns {string}
		 */
		getPermissionTypeCode(permissionTypeString: string, ruleOrder?: number, callbackOnError?: Function): string;
		/**
		 * Function to build a permission type object for a specific code
		 * @param {string} permissionTypeCode Identifier of PermissionType (e.g. 'P-112')
		 * @returns {PermissionTypeObject}
		 */
		getPermissionTypeObject(permissionTypeCode: string): {
			code: string;
			category: 'set' | 'role' | 'people/group' | 'inheritance' | 'function' | 'undefined';
			checkType: 'none' | 'condition' | 'dynamic' | 'formula' | 'undefined';
			appliedAs: 'unknown' | 'replace' | 'add' | 'remove' | 'undefined';
		};
		/**
		 * Method to get the effective permission after rule set check
		 * @private
		 * @param {GetEffectiveRuleSetPermissionsOptions} options
		 * @returns {Promise<GetEffectiveRuleSetPermissionsResult>}
		 */
		private getEffectiveRuleSetPermissions;
		/**
		 * Function convert a result of rules.getItemPermissions to an object for better checks
		 * @private
		 * @returns {RoleDefIdsByPrincipalIdObj}
		 * */
		private convertToEffectivePermissions;
		/**
		 * Describes a mapping of Principal and its assigned Permissions
		 * @typedef RoleAssignment
		 * @type {Object}
		 * @property { { Id: number} } Member  Assigned Principal
		 * @property { { Id: number}[] } RoleDefinitionBindings  Array of assigned RoleDefinition IDs
		 */
		/**
		 * Function convert an array of item role assignment to an object for better checks
		 *
		 * 'Limited Access' assignments are skipped by default!
		 * @private
		 * @param {RoleAssignment[]} itemRoleAssignments  Assigned item permissions
		 * @param {boolean} [keepLimitedAccessLevel]  If 'Limited Access' assignments have to be converted too
		 * @returns {ConvertCurrentPermissionsResult}
		 * */
		private convertCurrentPermissions;
		/**
		 * Function to join global and local selected fields if necessary and returns as a distinct collection
		 * @private
		 * @param {RelevantRuleSets} relevantRuleSets
		 */
		private _getJoinedRuleSetSelectFields;
		/**
		 * Function to copy permissions from an item (primary) to folders and/or items (secondary).
		 *
		 * Override Mode [overrideMappings]: It's also possible to assign a certain permission level to all principals permitted on primary item.
		 *
		 * 'Limited Access' assignments to primary item will be ignored
		 *
		 * ```
		 * let result = await permissions.copyItemPermissions({
		 *   listUrl : String,  // Absolute url from the list from primary item
		 *   itemId: Number,  // Id of the SharePoint list item (primary item)
		 *   folders? : FolderUrlObject[],  // List with folder information objects
		 *   items? : ItemUrlObjects[],  // List with item information objects
		 *   overrideMappings?: OverrideDefinition[],  // Assign same principals like primary item but with a certain permission level
		 *   force? : Boolean  // Force the primary item permissions to the secondary folder/items they then have unique permissions [default=false]
		 * });
		 *
		 * FolderUrlObject = {
		 *   listUrl : String,  // Absolute url from folder list
		 *   folderPath : String  // List relative path to folder
		 * }
		 *
		 * ItemUrlObject = {
		 *   listUrl : String,  // Absolute list url
		 *   itemId : Number  // Id of the SharePoint list item
		 * }
		 *
		 * OverrideDefinition = {
		 *   roleDefName? : String,  // Name of Permission Level to override with (required if no roleDefId)
		 *   roleDefId? : Number,  // ID of Permission Level to override with (required if no roleDefName)
		 *   folders? : FolderUrlObject[],  // List with folder information objects
		 *   items? : ItemUrlObjects[],  // List with item information objects
		 * }
		 *
		 * result = {
		 *   result : Boolean,  // If all permissions have been set correctly
		 *   changedPermissions : Boolean,  // If any permission has been changed
		 *   failedFolderUrls : String[],  // Absolute url of folders that have not been processed correctly
		 *   messages : String[],  // Messages of check and result information
		 *   timeUsed : String  // Time for checking and assigning the permissions
		 * }
		 * ```
		 *
		 * @param {CopyItemPermissionsOptions} options
		 * @returns {Promise<SetPermissionsResult>}
		 */
		copyItemPermissions(options: CopyItemPermissionsOptions): Promise<SetPermissionsResult>;
		/**
		 * Function to get all available role definition ids as object with keys for all names and all role type kinds
		 * @returns {Promise<RoleDefinitionsObject>}
		 */
		getRoleDefinitionsObject(): Promise<RoleDefinitionsObject>;
	}
	/**
	 * This describes an object with all relevant Shareflex permission lists
	 */
	export type ListsObject = {
		/**
		 * Absolute url from list peSettings
		 */
		settings: string;
		/**
		 * Absolute url from list peRoles
		 */
		roles: string;
		/**
		 * Absolute url from list peUsers
		 */
		users: string;
		/**
		 * Absolute url from list pePermissionSets
		 */
		permissionSets: string;
		/**
		 * Absolute url from list pePermissionSetConfig
		 */
		permissionSetConfigs: string;
		/**
		 * Absolute url from list peRuleSets
		 */
		ruleSets: string;
		/**
		 * Absolute url from list peRuleSetsConfigs
		 */
		ruleSetConfigs: string;
		/**
		 * Absolute url from list peRuleSetsFolders
		 */
		ruleSetFolders: string;
		/**
		 * Absolute url from list peStaticSets
		 */
		staticSets: string;
		/**
		 * Absolute url from list peStaticSetConfigs
		 */
		staticSetConfigs: string;
		/**
		 * Absolute url from list peStaticSetLogs
		 */
		staticSetLogs: string;
		/**
		 * Absolute url from list peSetPermissions
		 */
		setPermissions: string;
	};
	/**
	 * This describes the properties of a permission settings list item
	 */
	export type SettingListItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Current title
		 */
		Title: string;
		/**
		 * JSON content of available Roles
		 */
		peRoles: string;
		/**
		 * JSON content of available PermissionSets
		 */
		pePermissionSets: string;
		/**
		 * JSON content of available RuleSets
		 */
		peRuleSets: string;
		/**
		 * ID of the configuration item
		 */
		peSettingID: string;
	};
	export type SettingsSyncJson = {
		peRoles?: RolesJson;
		pePermissionSets?: PermissionSetsJson;
		peRuleSets?: RuleSetsJson;
	};
	/**
	 * Object with Role names as key and their principalId as value
	 */
	export type RolesJson = {
		[roleName: string]: number;
	};
	/**
	 * Object with RuleSet ID as key and RuleSet object as value
	 */
	export type RuleSetsJson = {
		[ruleSetId: string]: RuleSetBasic;
	};
	export type RuleSetBasic = {
		active: boolean;
		lists: string[];
	};
	/**
	 * Object with RuleSet ID as key and RuleSet basic object as value
	 */
	export type RuleSetsBasicJSON = {
		[ruleSetId: string]: RuleSetBasic;
	};
	export type RuleSetSubObject = {
		ruleSetConfigsItems: RuleSetConfigListItem[];
		ruleSetFoldersItems: RuleSetFolderListItem[];
	};
	export type RuleSetsObject = {
		[ruleSetId: string]: RuleSetSubObject;
	};
	/**
	 * Object with Name of PermissionSet as key and Object of permission levels and their user/group loginNames and ids as value
	 */
	export type PermissionSetsJson = {
		[permissionSetName: string]: PermissionSetConfiguration;
	};
	/**
	 * This describes the properties of an SharePoint user field
	 */
	export type UserGroupField = {
		/**
		 * Id of the user or group
		 */
		Id?: number;
		/**
		 * Display name of the user or group
		 */
		Title?: string;
		/**
		 * Login name of the user or group
		 */
		Name?: string;
	};
	/**
	 * This describes the properties of a lookup
	 */
	export type Lookup = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Value of lookup field
		 */
		Title: string;
	};
	/**
	 * This describes the properties of a permission role lookup item
	 */
	export type RoleLookup = {
		/**
		 * Display name of the role / SharePoint group
		 */
		Title: string;
		/**
		 * Id of SharePoint list item
		 */
		Id?: number;
	};
	/**
	 * This describes the properties of a permission role list item
	 */
	export type RoleListItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title
		 */
		Title: string;
		/**
		 * Current title
		 */
		peTitleLast: string;
		/**
		 * Responsible person of the role
		 */
		peRoleResponsible: UserGroupField;
		/**
		 * ID of the configuration item
		 */
		peRoleID: string;
		/**
		 * ID of the SharePoint group
		 */
		peSharePointGroupID: string | number;
		/**
		 * Users to add as member of the role
		 */
		peAddMembers: UserGroupField[];
		/**
		 * Users to add as member of the role
		 */
		peRemoveMembers: UserGroupField[];
		/**
		 * Comment
		 */
		peComment?: string;
	};
	/**
	 * This describes the properties for the permission user item
	 */
	export type UserListItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title
		 */
		Title: string;
		/**
		 * User to handle / config the permission role membership
		 */
		peUser: UserGroupField;
		/**
		 * Users to add as member of the role
		 */
		peRoleLookup: RoleLookup[];
		/**
		 * Users to add as member of the role
		 */
		peRoleLookupCurrent: RoleLookup[];
		/**
		 * ID of the configuration item
		 */
		peUserID: string;
	};
	/**
	 * This describes the properties of a permission set list item
	 */
	export type PermissionSetListItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title
		 */
		Title: string;
		/**
		 * Current title
		 */
		peTitleLast: string;
		/**
		 * Id of the configuration item
		 */
		pePermissionSetID: string;
	};
	/**
	 * This describes the properties of a permission set lookup
	 */
	export type PermissionSetLookup = {
		/**
		 * Title of the permission set
		 */
		Title: string;
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
	};
	/**
	 * This describes the properties of a permission set configuration list item
	 */
	export type PermissionSetConfigListItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title of SharePoint list item
		 */
		Title: string;
		/**
		 * Array of assigned Users / Groups
		 */
		peUsersOrRoles: UserOrGroup[];
		/**
		 * Permission Level
		 */
		pePermissionLevel: string;
		/**
		 * Current title
		 */
		pePermissionSetLookup: PermissionSetLookup;
		/**
		 * Id of the parent permission set
		 */
		pePermissionSetID: string;
		/**
		 * ID of the configuration item
		 */
		pePermissionSetConfigID: string;
	};
	/**
	 * This describes the properties of an SharePoint user field
	 */
	export type UserOrGroup = {
		/**
		 * Id of the user or group
		 */
		Id: number;
		/**
		 * LoginName of the user or group
		 */
		Name: string;
	};
	/**
	 * This describes the properties of a permission set config JSON item
	 */
	export type PermissionSetConfigJSONItem = {
		/**
		 * User or SharePoint group
		 */
		userOrGroup: UserOrGroup;
		/**
		 * SharePoint permission level
		 */
		permissionLevel: string[];
		/**
		 * Id of the configuration item
		 */
		pePermissionSetConfigID: string;
	};
	/**
	 * This describes an object that is normalized of the values from IGetRolesResult.roles
	 */
	export type PermissionLevelObject = {
		loginNames: string[];
		ids: number[];
	};
	/**
	 * This describes an object that is normalized of the values from IGetRolesResult.roles
	 */
	export type PermissionSetConfiguration = {
		[permissionLevel: string]: PermissionLevelObject;
	};
	export type GetRoleUsageOptions = {
		/**
		 * Shareflex Rules JS API
		 */
		rules: import('ShareflexRules').default;
		/**
		 * Object with all relevant Shareflex permission lists
		 */
		lists: ListsObject;
		/**
		 * Name as filter criteria
		 */
		name: string;
	};
	export type GetRuleUsageOptions = {
		/**
		 * Shareflex Rules JS API
		 */
		rules: import('ShareflexRules').default;
		/**
		 * Object with all relevant Shareflex permission lists
		 */
		lists: ListsObject;
		/**
		 * Name as filter criteria
		 */
		name: string;
		/**
		 * Filter for Role | Permission Set
		 */
		filterBy: string;
	};
	/**
	 * peRuleSetConfigs item object
	 */
	export type RuleItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title of the Permission Rule
		 */
		Title: string;
		/**
		 * Id of the configuration item
		 */
		peRuleSetConfigID: string;
		/**
		 * Id of the parent Permission RuleSet configuration item
		 */
		peRuleSetID: string;
	};
	/**
	 * ListItem of Static Permission Set list
	 */
	export type StaticSetListItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title
		 */
		Title: string;
		/**
		 * Id of the Shareflex configuration item (static permission set item)
		 */
		peStaticSetID: string;
		/**
		 * Type of scope 'Web'|'List'|'Folder'|'Template'
		 */
		peScope: string;
		/**
		 * Id of the template
		 */
		peStaticSetTemplateID?: string;
		/**
		 * Url of Web or List [required if scope 'Web' or 'List']
		 */
		peScopeUrl: string;
		/**
		 * Relative path to folder
		 */
		peScopeFolderPath: string;
		/**
		 * Update of permissions necessary
		 */
		peUpdateNeccessary?: boolean;
		/**
		 * Scope object has unique permissions
		 */
		peHasUniquePermissions: boolean;
		/**
		 * Set unique permissions (use static set configurations)
		 */
		peSetUniquePermission?: boolean;
		/**
		 * Remove unique permissions
		 */
		peDeleteUniquePermission?: boolean;
		/**
		 * Comment
		 */
		peComment?: string;
	};
	/**
	 * This describes the properties for the static permission set item
	 */
	export type StaticSetItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title
		 */
		Title: string;
		/**
		 * Id of the Shareflex configuration item (static permission set item)
		 */
		peStaticSetID: string;
		/**
		 * Type of scope 'Web'|'List'|'Folder'|'Template'
		 */
		peScope: string;
		/**
		 * Id of the template
		 */
		peStaticSetTemplateID: string;
		/**
		 * Url of Web or List [required if scope 'Web' or 'List']
		 */
		peScopeUrl: string;
		/**
		 * Relative path to folder
		 */
		peScopeFolderPath: string;
		/**
		 * Update of permissions necessary
		 */
		peUpdateNeccessary: boolean;
		/**
		 * Scope object has unique permissions
		 */
		peHasUniquePermissions: boolean;
		/**
		 * Set unique permissions (use static set configurations)
		 */
		peSetUniquePermission: boolean;
		/**
		 * Remove unique permissions
		 */
		peDeleteUniquePermission: boolean;
	};
	export type AssignStaticSetPermissionsOptions = {
		/**
		 * Type of scope 'Web'|'List'|'Folder'|'Item'
		 */
		scope: 'Web' | 'List' | 'Folder' | 'Item';
		/**
		 * Absolute url to web or list
		 */
		url: string;
		/**
		 * Relative from list path to folder [required if scope 'Folder']
		 */
		folderPath?: string;
		/**
		 * Id of SharePoint list item [required if scope 'Item']
		 */
		itemId?: number;
	};
	/**
	 * This describes the properties of a static permission set lookup
	 */
	export type StaticSetLookup = {
		/**
		 * Title of the permission set
		 */
		Title: string;
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
	};
	/**
	 * This describes the properties for the static permission set configuration item
	 */
	export type StaticSetConfigListItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title
		 */
		Title: string;
		/**
		 * Id of the Shareflex configuration item (static permission set item)
		 */
		peStaticSetID: string;
		/**
		 * Lookup to parent static permission set item
		 */
		peStaticSetLookup: StaticSetLookup;
		/**
		 * Type of permission handling, multilingual with static prefix (e.g. "P-101 - replace Set", "P-203 - Rolle entfernen")
		 */
		pePermissionType: string;
		/**
		 * Users or Groups for permission handling
		 */
		peUsersOrRoles?: UserGroupField[];
		/**
		 * Lookup to permission role for permission handling
		 */
		peRoleLookup?: RoleLookup[];
		/**
		 * List of permission level (e.g. Contribute, Design, Edit, Full Control, Read and custom level)
		 */
		pePermissionLevel?: string[];
		/**
		 * Lookup to permission set for permission handling
		 */
		pePermissionSetLookup?: PermissionSetLookup[];
		/**
		 * Id of the configuration item
		 */
		peStaticSetConfigID: string;
		/**
		 * Order of static permission configuration items
		 */
		peOrder: number;
		/**
		 * Comment
		 */
		peComment?: string;
		/**
		 * History of configuration item properties
		 */
		aoChangeTracker: string;
	};
	/**
	 * ListItem of peRuleSets list
	 */
	export type RuleSetListItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title
		 */
		Title: string;
		/**
		 * Id of the Shareflex configuration item (permission rule set item)
		 */
		peRuleSetID: string;
		/**
		 * Type of rule set scope
		 */
		peRuleSetType: 'Local' | 'Global';
		/**
		 * List of relative list urls
		 */
		peListUrls: string;
		/**
		 * Activation state of rule set [default=false]
		 */
		peDeactivated: boolean;
		/**
		 * Reset role inheritance when no rule matches [default=true]
		 */
		peInheritanceCheck: boolean;
		/**
		 * History of configuration item properties
		 */
		aoChangeTracker: string;
		/**
		 * JSON string for extended configurations
		 */
		peRuleSetConfigJSON: string;
		/**
		 * JSON string with synchronized configurations (rules)
		 */
		peRuleSetConfigsJSON: string;
		/**
		 * JSON string with synchronized configurations (folders)
		 */
		peRuleSetFoldersJSON: string;
	};
	/**
	 * ListItem of peRuleSetConfigs list
	 */
	export type RuleSetConfigListItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title
		 */
		Title: string;
		/**
		 * Id of the Shareflex configuration item (permission rule set item)
		 */
		peRuleSetID: string;
		/**
		 * Is rule config item deactivated
		 */
		peDeactivated: boolean;
		/**
		 * Type of permission handling, multilingual with static prefix (e.g. "P-111 - replace Set", "P-223 - Rolle entfernen (dynamisch)")
		 */
		pePermissionType: string;
		/**
		 * Lookup to permission set for permission handling
		 */
		pePermissionSetLookup: PermissionSetLookup;
		/**
		 * Type of condition, multilingual with static prefix (e.g. "C-100 - Field value", "C-200 - Formel")
		 */
		peConditionType: string;
		/**
		 * Lookup to permission role for permission handling
		 */
		peRoleLookup: RoleLookup;
		/**
		 * Prefix for permission role combination (dynamic)
		 */
		peRolePrefix: string;
		/**
		 * FieldName for simple condition check
		 */
		peFieldName: string;
		/**
		 * Suffix for permission role combination (dynamic)
		 */
		peRoleSuffix: string;
		/**
		 * Complex formula string
		 */
		peFormulaString: string;
		/**
		 * Create permission role (dynamic)
		 */
		peAutoCreate: boolean;
		/**
		 * Type operant for field value condition check, multilingual with static suffix (e.g. "equals - (==)", "ist nicht falsch - (!false)")
		 */
		peCondition: string;
		/**
		 * Value of simple condition check
		 */
		peFieldValue: string;
		/**
		 * List of permission level (e.g. Contribute, Design, Edit, Full Control, Read and custom level)
		 */
		pePermissionLevel: string;
		/**
		 * Field type (Text,Note,User,MultiUser,DateTime,Lookup...)
		 */
		peFieldValueType: string;
		/**
		 * Name of custom function that returns true/false
		 */
		peFunctionName: string;
		/**
		 * Skip rule match check
		 */
		peSkipAtInheritanceCheck: boolean;
		/**
		 * Skip next rule checks when rule matches
		 */
		peBreakRulesetCheck: boolean;
		/**
		 * Id of the configuration item
		 */
		peRuleSetConfigID: string;
		/**
		 * Order of rule set configuration items
		 */
		peOrder: number;
		/**
		 * Comment
		 */
		peComment: string;
		/**
		 * History
		 */
		aoChangeTracker: string;
		/**
		 * Array of assigned Users / Groups
		 */
		peUsersOrRoles: UserOrGroup[];
	};
	export type RuleSetFolderListItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Type of permission assignment, multilingual with static prefix (e.g. "F-100 - Copy Permissions", "F-900 - Funktion")
		 */
		peAssignmentType: string;
		/**
		 * Comment
		 */
		peComment: string;
		/**
		 * Relative path to folder
		 */
		peFolderPath: string;
		/**
		 * Name of custom function to be called
		 */
		peFunctionName: string;
		/**
		 * List of web relative list urls
		 */
		peLists: string;
		/**
		 * List of permission level (e.g. Contribute, Design, Edit, Full Control, Read and custom level)
		 */
		pePermissionLevel: string;
		/**
		 * Unique ID
		 */
		peRuleSetFolderID: string;
		/**
		 * Id of the Shareflex configuration item (peRuleSets item)
		 */
		peRuleSetID: string;
		/**
		 * History
		 */
		aoChangeTracker: string;
		/**
		 * Title
		 */
		Title: string;
	};
	/**
	 * This describes the result object of an ensurePermissionSet call
	 */
	export type GetStaticSetsResult = {
		/**
		 * Absolute url from the list peStaticSets
		 */
		listUrl: string;
		/**
		 * Id of the SharePoint list item
		 */
		Id: number;
		/**
		 * Name of the static permission set
		 */
		Title: string;
		/**
		 * Id of the Shareflex configuration item (static permission set item)
		 */
		peStaticSetID: string;
		/**
		 * Id of the Shareflex configuration item (static permission set item)
		 */
		peStaticSetTemplateID: string;
		/**
		 * Type of scope 'Web'|'List'|'Folder'|'Template'
		 */
		scope: string;
		/**
		 * Type of scope 'Web'|'List'|'Folder'|'Template'
		 */
		peScope: string;
		/**
		 * Type of scope 'Web'|'List'|'Folder'|'Template'
		 */
		peScopeUrl: string;
		/**
		 * Relative url of Web or List [required if scope 'Web' or 'List']
		 */
		url?: string;
		/**
		 * Relative from list path to folder [required if scope 'Folder']
		 */
		folderPath?: string;
		/**
		 * Relative from list path to folder [required if scope 'Folder']
		 */
		peScopeFolderPath: string;
		/**
		 * Unique Id of template [required if scope 'Template']
		 */
		templateID?: string;
		/**
		 * Update of permissions necessary
		 */
		updateNeccessary: boolean;
		/**
		 * Update of permissions necessary
		 */
		peUpdateNeccessary: boolean;
		/**
		 * Scope object has unique permissions
		 */
		hasUniquePermissions: boolean;
		peHasUniquePermissions: boolean;
		peSetUniquePermission: boolean;
		peDeleteUniquePermission: boolean;
	};
	export type AssignRuleSetPermissionsOptions = {
		/**
		 * Absolute list url
		 */
		listUrl: string;
		/**
		 * Id of SharePoint list item
		 */
		itemId: number | string;
		/**
		 * Only ruleset check no permission actions
		 */
		simulation?: boolean;
	};
	export type SetPermissionsResult = {
		/**
		 * If all permissions have been updated successfully
		 */
		result: boolean;
		/**
		 * Messages
		 */
		messages: string[];
		/**
		 * Time for checking and assigning the permissions
		 */
		timeUsed: string;
		/**
		 * Absolute url of folders that have not been processed correctly
		 */
		failedFolderUrls: string[];
		/**
		 * If any permission has been changed
		 */
		changedPermissions: boolean;
	};
	export type EnsureFoldersPermissionsOptions = {
		/**
		 * Absolute web url
		 */
		webUrl: string;
		/**
		 * Relative urls to folder to be handled
		 */
		webRelativeFolderUrls: string[];
		/**
		 * Permission to be set
		 */
		targetPermissions?: {
			[roleDefId: number]: number[];
		};
		/**
		 * Should be ensure the role inheritance
		 */
		setRoleInheritance?: boolean;
	};
	export type InternalAssignRuleSetPermissionsResult = {
		/**
		 * Item has unique permissions
		 */
		uniquePermissions: boolean;
		/**
		 * If any permission of a secondary folder has been changed
		 */
		changedSecondaryFolderPermissions: boolean;
	};
	export type AssignRuleSetPermissionsResult = SetPermissionsResult & InternalAssignRuleSetPermissionsResult;
	export type FolderUrlObject = {
		/**
		 * Absolute url list
		 */
		listUrl: string;
		/**
		 * List relative path of folder
		 */
		folderPath: string;
	};
	export type ItemUrlObject = {
		/**
		 * Absolute url list
		 */
		listUrl: string;
		/**
		 * Id of the SharePoint list item
		 */
		itemId: number;
	};
	export type OverrideDefinition = {
		roleDefName?: string;
		roleDefId?: number;
		/**
		 * List with folder information objects
		 */
		folders?: FolderUrlObject[];
		/**
		 * List with item information objects
		 */
		items?: ItemUrlObject[];
	};
	export type CopyItemPermissionsOptions = {
		/**
		 * Absolute url from the list from primary item
		 */
		listUrl: string;
		/**
		 * Id of the SharePoint list item (primary item)
		 */
		itemId: number;
		/**
		 * List with folder information objects
		 */
		folders?: FolderUrlObject[];
		/**
		 * List with item information objects
		 */
		items?: ItemUrlObject[];
		/**
		 * Configuration object of elements to override with a certain permission level for all principals
		 */
		overrideMappings?: OverrideDefinition[];
		/**
		 * Force unique permissions from primary item to secondary folder/items
		 */
		force?: boolean;
		/**
		 * Object with effective roleDef ids and their principal ids from primary item
		 */
		effectivePermissionSet?: {
			[roleDefId: number]: number[];
		};
		/**
		 * Object with keys for all Sharepoint Permission Role Names and Kinds, value is their RoleDefId
		 */
		roleDefObj?: RoleDefinitionsObject;
	};
	/**
	 * This describes the properties of an object for the synchronization process
	 */
	export type RoleConfigItem = {
		/**
		 * Name of the SharePoint group
		 */
		groupName: string;
		/**
		 * Id of the SharePoint group
		 */
		groupId: number | string;
		/**
		 * Remove from Shareflex configuration
		 */
		delete?: boolean;
	};
	/**
	 * This describes the result object of an ensureRole call
	 */
	export type EnsureRoleResult = {
		/**
		 * Absolute url from the list PermissionRoles
		 */
		listUrl: string;
		/**
		 * Id of the SharePoint list item
		 */
		id: number;
		/**
		 * Id of the Shareflex configuration item (permission role)
		 */
		peRoleID: string;
		/**
		 * Id of the SharePoint group
		 */
		groupId: number | string;
		/**
		 * Name of the SharePoint group
		 */
		groupName: string;
	};
	/**
	 * This describes the result object of an ensureUser call
	 */
	export type EnsureUserResult = {
		/**
		 * Absolute url from the list PermissionRoleUsers
		 */
		listUrl: string;
		/**
		 * Id of the SharePoint list item
		 */
		id: number;
		/**
		 * Id of the Shareflex configuration item (permission role)
		 */
		peUserID: string;
		/**
		 * LoginName of the user
		 */
		loginName: string;
		/**
		 * List of permission roles where the user is member
		 */
		memberOfRoles: string[];
		/**
		 * List of permission roles does not exit
		 */
		ignoredRoles: string[];
	};
	export type RelevantRuleSets = {
		count: number;
		global: {
			/**
			 * Title of RuleSet
			 */
			title: string;
			/**
			 * If RuleSet is relevant for one single list only (Local) or for multiple lists (Global)
			 */
			type: 'Local' | 'Global';
			/**
			 * Site relative Urls of all lists, separated by line break ('\n')
			 */
			lists: string[];
			/**
			 * If RuleSet is enabled
			 */
			active: boolean;
			/**
			 * If role inheritance has to be restored if no rule matches
			 */
			inheritanceCheck: boolean;
			/**
			 * All logical rules of RuleSet
			 */
			rules: {
				peDeactivated: boolean;
				pePermissionType: string;
				pePermissionSetLookup: Lookup;
				peRoleLookup: Lookup;
				peRolePrefix: string;
				peFieldName: string;
				peRoleSuffix: string;
				peConditionType: string;
				peFormulaString: string;
				peAutoCreate: boolean;
				peCondition: string;
				peFieldValue: string;
				pePermissionLevel: string[];
				peFieldValueType: string;
				peFunctionName: string;
				peSkipAtInheritanceCheck: boolean;
				peBreakRulesetCheck: boolean;
				peOrder: number;
				peUsersOrRoles: UserGroupField[];
			}[];
			/**
			 * Array of fields to be relevant for logical rule checks (have to be requested via REST)
			 */
			rulesSelectFields: string[];
			/**
			 * All configured secondary folders of RuleSet
			 */
			folders: {
				/**
				 * Web relative List Urls separated by lineBreaks ('\n')
				 */
				peLists: string;
				/**
				 * Path to folder, can contain variables declared by leading '$'
				 */
				peFolderPath: string;
				/**
				 * How permissions are assigned to the folder
				 */
				peAssignmentType: string;
				/**
				 * Name of permission level for F-200
				 */
				pePermissionLevel?: string;
				/**
				 * Custom function to be called for F-900
				 */
				peFunctionName?: string;
			}[];
			/**
			 * Array of fields to be relevant to resolve folder path (have to be requested via REST)
			 */
			foldersSelectFields: string[];
			/**
			 * Array of fields to be relevant for logical rule checks (have to be requested via REST) global configured via GUI
			 */
			relevantRuleSetFields?: string[];
		};
		local: {
			/**
			 * Title of RuleSet
			 */
			title: string;
			/**
			 * If RuleSet is relevant for one single list only (Local) or for multiple lists (Global)
			 */
			type: 'Local' | 'Global';
			/**
			 * Site relative Urls of all lists, separated by line break ('\n')
			 */
			lists: string[];
			/**
			 * If RuleSet is enabled
			 */
			active: boolean;
			/**
			 * If role inheritance has to be restored if no rule matches
			 */
			inheritanceCheck: boolean;
			/**
			 * All logical rules of RuleSet
			 */
			rules: {
				peDeactivated: boolean;
				pePermissionType: string;
				pePermissionSetLookup: Lookup;
				peRoleLookup: Lookup;
				peRolePrefix: string;
				peFieldName: string;
				peRoleSuffix: string;
				peConditionType: string;
				peFormulaString: string;
				peAutoCreate: boolean;
				peCondition: string;
				peFieldValue: string;
				pePermissionLevel: string[];
				peFieldValueType: string;
				peFunctionName: string;
				peSkipAtInheritanceCheck: boolean;
				peBreakRulesetCheck: boolean;
				peOrder: number;
				peUsersOrRoles: UserGroupField[];
			}[];
			/**
			 * Array of fields to be relevant for logical rule checks (have to be requested via REST)
			 */
			rulesSelectFields: string[];
			/**
			 * All configured secondary folders of RuleSet
			 */
			folders: {
				/**
				 * Web relative List Urls separated by lineBreaks ('\n')
				 */
				peLists: string;
				/**
				 * Path to folder, can contain variables declared by leading '$'
				 */
				peFolderPath: string;
				/**
				 * How permissions are assigned to the folder
				 */
				peAssignmentType: string;
				/**
				 * Name of permission level for F-200
				 */
				pePermissionLevel?: string;
				/**
				 * Custom function to be called for F-900
				 */
				peFunctionName?: string;
			}[];
			/**
			 * Array of fields to be relevant to resolve folder path (have to be requested via REST)
			 */
			foldersSelectFields: string[];
			/**
			 * Array of fields to be relevant for logical rule checks (have to be requested via REST) global configured via GUI
			 */
			relevantRuleSetFields?: string[];
		};
	};
	/**
	 * Describes the option object provided for a custom function called for
	 * RuleSetConfig type 'P-900' or StaticSetConfig type 'S-900'
	 */
	export type SetConfigCustomFnOptions = {
		/**
		 * Absolute url of list
		 */
		listUrl: string;
		/**
		 * ID of SharePoint context list item
		 */
		itemId: number;
		/**
		 * Requested context item with all relevant fields of a RuleSet configuration
		 */
		item: any;
		/**
		 * Shareflex Addons API
		 */
		addons: import('ShareflexAddons').default;
		/**
		 * Custom options for function call
		 */
		customOptions: string | any;
		/**
		 * Object with keys for all Sharepoint Permission Role Names and Kinds, value is their RoleDefId
		 */
		roleDefObj: RoleDefinitionsObject;
	};
	/**
	 * Describes the expected result object of a custom function call
	 */
	export type SetConfigCustomFnResult = {
		/**
		 * value of roleDefId should be principal ids
		 */
		replace?: {
			[roleDefId: number]: number[];
		};
		/**
		 * value of roleDefId should be principal ids
		 */
		add?: {
			[roleDefId: number]: number[];
		};
		/**
		 * value should be principal ids
		 */
		remove?: number[];
	};
	/**
	 * Option object provided for a custom function called for
	 * RuleSetFolders type 'F-900'
	 */
	export type FolderCustomFnOptions = {
		/**
		 * Context information of primary item
		 */
		contextItemObject: {
			listUrl: string;
			listItem: {
				[fieldName: string]: any;
			};
		};
		/**
		 * Relative list urls form config item
		 */
		secondaryLists: string[];
		/**
		 * Shareflex Addons API
		 */
		addons: import('ShareflexAddons').default;
		/**
		 * Custom options for function call
		 */
		customOptions: string | any;
		/**
		 * Object with keys for all Sharepoint Permission Role Names and Kinds, value is their RoleDefId
		 */
		roleDefObj: RoleDefinitionsObject;
		/**
		 * Object with effective roleDef ids and their principal ids from primary item
		 */
		primaryItemPermissions: {
			[roleDefId: number]: number[];
		};
		/**
		 * Folder path to the folder for which permissions are to be assigned (e.g. primary key)
		 */
		folderPath: string;
	};
	export type RuleSetContextItem = {
		/**
		 * Absolute url of context list
		 */
		listUrl: string;
		/**
		 * Context list item object with relevant properties for RuleSet logic
		 */
		listItem: any;
	};
	/**
	 * Describes the option object provided for a custom function called for RuleSetFolders type 'F-900'
	 */
	export type SecondaryFoldersCustomFnOptions = {
		/**
		 * Context information of primary item
		 */
		contextItemObject: RuleSetContextItem;
		/**
		 * Array of web relative List urls configured for function call
		 */
		secondaryLists: string[];
		/**
		 * Shareflex Addons API
		 */
		addons: import('ShareflexAddons').default;
		/**
		 * Custom options for function call
		 */
		customOptions: string | any;
		/**
		 * Object with keys for all Sharepoint Permission Role Names and Kinds, value is their RoleDefId
		 */
		roleDefObj: RoleDefinitionsObject;
		/**
		 * Permissions of the primary item (role def ids and their principal ids)
		 */
		primaryItemPermissions: {
			[roleDefId: number]: number[];
		};
	};
	export type GetHasUniqueRoleAssignmentsOptions = {
		/**
		 * Type of scope 'Web'|'List'|'Folder'|'Item'
		 */
		scope: 'Web' | 'List' | 'Folder' | 'Item';
		/**
		 * Absolute url of web, list or folder [required if scope 'Web' or 'List']
		 */
		url: string;
		/**
		 * Relative form list path to folder [required if scope 'Folder']
		 */
		folderPath?: string;
		/**
		 * Id of SharePoint list item [required if scope 'Item']
		 */
		itemId?: number;
	};
	export type RuleSetConfigsJSON = {
		rules: {
			peDeactivated: boolean;
			pePermissionType: string;
			pePermissionSetLookup: Lookup;
			peRoleLookup: Lookup;
			peRolePrefix: string;
			peFieldName: string;
			peRoleSuffix: string;
			peConditionType: string;
			peFormulaString: string;
			peAutoCreate: boolean;
			peCondition: string;
			peFieldValue: string;
			pePermissionLevel: string[];
			peFieldValueType: string;
			peFunctionName: string;
			peSkipAtInheritanceCheck: boolean;
			peBreakRulesetCheck: boolean;
			peOrder: number;
			peUsersOrRoles: UserGroupField[];
		}[];
		rulesSelectFields: string[];
	};
	export type RuleSetFoldersJSON = {
		folders: {
			/**
			 * Web relative List Urls separated by lineBreaks ('\n')
			 */
			peLists: string;
			/**
			 * Path to folder, can contain variables declared by leading '$'
			 */
			peFolderPath: string;
			/**
			 * How permissions are assigned to the folder
			 */
			peAssignmentType: string;
			/**
			 * Name of permission level for F-200
			 */
			pePermissionLevel?: string;
			/**
			 * Custom function to be called for F-900
			 */
			peFunctionName?: string;
		}[];
		foldersSelectFields: string[];
	};
	export type RoleDefId = number;
	export type PrincipalId = number;
	export type RoleDefIdsByPrincipalIdObj = {
		[principalId: string]: number[];
	};
	export type PrincipalIdsByRoleDefIdObj = {
		[roleDefId: string]: number[];
	};
	export type ConvertCurrentPermissionsResult = {
		effective: PrincipalIdsByRoleDefIdObj;
		principals: RoleDefIdsByPrincipalIdObj;
	};
	/**
	 * Helper Object to get RoleDefinition ID by kind or by name
	 */
	export type RoleDefinitionsObject = {
		/**
		 * Object of all RoleDefinition IDs with kind as key
		 */
		byKind: {
			[kind: string]: number;
		};
		/**
		 * Object of all RoleDefinition IDs with name as key
		 */
		byName: {
			[name: string]: number;
		};
		/**
		 * Helper function to get specific RoleDefinition ID by kind or name
		 */
		getRoleDefId: (kindOrName: string) => number;
	};
	export type PushPermissionOptions = {
		configJSON: SettingsSyncJson;
		relevantRuleSets: RelevantRuleSets;
		selectFields: string[];
		roleDefObj: RoleDefinitionsObject;
		item?: any;
	};
	export type GetPermissionSetUsageOptions = {
		/**
		 * Shareflex Rules JS API
		 */
		rules: import('ShareflexRules').default;
		/**
		 * Object with all relevant Shareflex permission lists
		 */
		lists: ListsObject;
		/**
		 * Name as filter criteria
		 */
		name: string;
	};
	export type PermissionSetConfigItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title of the permission set
		 */
		Title: string;
		/**
		 * ID of the configuration item
		 */
		pePermissionSetConfigID: string;
		/**
		 * Id of the parent permission set item
		 */
		pePermissionSetID: string;
	};
	export type RelatedStaticSetItem = {
		Id: number;
		peStaticSetID: string;
		peUpdateNeccessary: boolean;
	};
	export type GetStaticSetUsageOptions = {
		/**
		 * Shareflex Rules JS API
		 */
		rules: import('ShareflexRules').default;
		/**
		 * Object with all relevant Shareflex permission lists
		 */
		lists: ListsObject;
		/**
		 * Name as filter criteria
		 */
		name: string;
		/**
		 * Filter for user | role | permission set
		 */
		filterBy: string;
	};
	export type StaticSetConfigItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title of the permission rule
		 */
		Title: string;
		/**
		 * Id of the configuration item
		 */
		peStaticSetConfigID: string;
		/**
		 * Id of the parent permission static set item
		 */
		peStaticSetID: string;
	};
	/**
	 * Options object for ensurePermissionSet()
	 */
	export type EnsurePermissionSetOptions = {
		/**
		 * Name of the permission set
		 */
		setName: string;
		/**
		 * Id of the Shareflex configuration item (permission set), for Import / Export mechanism
		 */
		pePermissionSetID?: string;
		/**
		 * Update settingsJSON on permission setting item [default=false]
		 */
		updateJSON?: boolean;
	};
	/**
	 * Result object of ensurePermissionSet()
	 */
	export type EnsurePermissionSetResult = {
		/**
		 * Absolute url from the list PermissionMatrix
		 */
		listUrl: string;
		/**
		 * Id of the SharePoint list item
		 */
		id: number;
		/**
		 * Name of the permission set
		 */
		setName: string;
		/**
		 * Id of the Shareflex configuration item (permission role)
		 */
		pePermissionSetID: string;
		/**
		 * Members and their permission levels
		 */
		members?: string;
	};
	/**
	 * Options object for deletePermissionSet()
	 */
	export type DeletePermissionSetOptions = {
		/**
		 * Name of a specific permission set
		 */
		setName: string;
		/**
		 * Prevent usage check [default=false]
		 */
		force?: boolean;
	};
	/**
	 * Result object of deletePermissionSet()
	 */
	export type DeletePermissionSetResult = {
		/**
		 * If PermissionSet has been deleted
		 */
		result: boolean;
		/**
		 * Message if result is false
		 */
		message?: string;
		/**
		 * Where this PermissionSet is used
		 */
		usage?: {
			/**
			 * Is role in use
			 */
			inUse: boolean;
			/**
			 * List of permission rules
			 */
			rules: RuleItem[];
			/**
			 * List of static set configuration items
			 */
			staticSetConifgItems: StaticSetConfigItem[];
		};
	};
	/**
	 * This describes the properties of a permission role item
	 */
	export type RoleItem = {
		/**
		 * Id of SharePoint list item
		 */
		Id: number;
		/**
		 * Title
		 */
		Title: string;
		/**
		 * Current title
		 */
		TitleLast: string;
		/**
		 * Responsible person of the role
		 */
		peRoleResponsible: UserGroupField;
		/**
		 * ID of the configuration item
		 */
		peRoleID: string;
		/**
		 * ID of the SharePoint group
		 */
		peSharePointGroupID: string | number;
	};
	export type RoleItemObject = {
		[roleName: string]: RoleItem;
	};
	/**
	 * This describes the options object of an getRoles call
	 */
	export type GetRolesOptions = {
		/**
		 * Name of a specific role
		 */
		roleName: string;
		/**
		 * Search by old permission role name
		 */
		searchByOldRoleName?: boolean;
	};
	/**
	 * This describes the result object of an getRoles call
	 */
	export type GetRolesResult = {
		/**
		 * List of permission role configuration items
		 */
		roles: string[];
		/**
		 * Normalized object of all permission role configurations items
		 */
		rolesObj: RoleItemObject;
	};
	/**
	 * This describes an object that is normalized of the values from IGetUsersResult.users
	 */
	export type UserItemObject = {
		[x: string]: UserListItem;
	};
	/**
	 * This describes the result object of a getUsers call
	 */
	export type GetUsersResult = {
		/**
		 * List of permission user configuration items
		 */
		users: UserListItem[];
		/**
		 * Normalized object of all permission user configurations items
		 */
		usersObj: UserItemObject;
	};
	/**
	 * This describes the result object of an getRoleUsage call
	 */
	export type GetRoleUsageResult = {
		/**
		 * Is role in use
		 */
		inUse: boolean;
		/**
		 * List of permission users
		 */
		users: UserListItem[];
		/**
		 * List of permission set items
		 */
		permissionSetItems: PermissionSetItem[];
		/**
		 * List of permission rules
		 */
		rules: RuleItem[];
		/**
		 * List of static set items
		 */
		staticSetItems: StaticSetConfigItem[];
	};
	/**
	 * This describes the result object of an addUserRoles call
	 */
	export type AddUserRolesResult = {
		/**
		 * Absolute url from the list PermissionRoleUsers
		 */
		listUrl: string;
		/**
		 * Id of the SharePoint list item
		 */
		id: number;
		/**
		 * Id of the Shareflex configuration item
		 */
		peUserID: string;
		/**
		 * LoginName of the user
		 */
		loginName: string;
		/**
		 * List of permission roles where the user is member
		 */
		memberOfRoles: string[];
		/**
		 * List of permission roles does not exit
		 */
		ignoredRoles: string[];
	};
	/**
	 * This describes the result object of an deleteRole call
	 */
	export type DeleteRoleResult = {
		/**
		 * Result of the function
		 */
		result: boolean;
		/**
		 * Message if result is false
		 */
		message?: string;
		/**
		 * Object with role memberships information
		 */
		memberships?: any;
	};
	/**
	 * This describes the result object of a removeUserRoles call
	 */
	export type RemoveUserRolesResult = {
		/**
		 * Absolute url from the list PermissionRoleUsers
		 */
		listUrl: string;
		/**
		 * Id of the SharePoint list item
		 */
		id: number;
		/**
		 * Id of the Shareflex configuration item (permission role)
		 */
		peUserID: string;
		/**
		 * LoginName of the user
		 */
		loginName: string;
		/**
		 * List of permission roles where the user is member
		 */
		memberOfRoles: string[];
		/**
		 * List of permission roles does not exit
		 */
		ignoredRoles: string[];
	};
	/**
	 * This describes the result object of an getUserMemberships call
	 */
	export type GetUserMembershipsResult = {
		/**
		 * Is role in use
		 */
		isMember: boolean;
		/**
		 * // Array with roles where permission user is member
		 */
		roles: RoleItem[];
		/**
		 * // Array with permission sets where permission user is configured
		 */
		permissionSets: PermissionSetConfigItem[];
		/**
		 * // Array with static sets where permission user is member
		 */
		staticSets: StaticSetConfigItem[];
	};
	export type PermissionSetItem = {
		/**
		 * // Id of SharePoint list item
		 */
		Id: number;
		/**
		 * // Title
		 */
		Title: string;
		/**
		 * // Current title
		 */
		peTitleLast: string;
		/**
		 * ID of the configuration item
		 */
		pePermissionSetConfigID: string;
		/**
		 * // Id of the configuration item
		 */
		pePermissionSetID: string;
	};
	export type PermissionSetObject = {
		[setName: string]: PermissionSetItem;
	};
	/**
	 * This describes the result object of an getPermissionSets call
	 */
	export type GetPermissionSetsResult = {
		/**
		 * List of permission set configuration items
		 */
		permissionSets: string[];
		/**
		 * Normalized object of all permission set configurations items
		 */
		permissionSetsObj: PermissionSetObject;
	};
	export type SyncRuleSetToSettingsOptions = {
		peRuleSetID: string;
		peListUrls: string;
		peDeactivated: boolean;
		delete?: boolean;
	};
}
