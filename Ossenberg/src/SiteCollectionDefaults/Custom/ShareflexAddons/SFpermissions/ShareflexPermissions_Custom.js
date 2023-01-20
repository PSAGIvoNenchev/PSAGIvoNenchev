/// <reference path="../../../../../../src/Core/ShareflexAddons/@types/ShareflexRules.d.ts" />
/// <reference path="../../../../../../src/Core/ShareflexAddons/@types/ShareflexAddons.d.ts" />
/// <reference path="../../../../../../src/Core/ShareflexAddons/@types/ShareflexFlow.d.ts" />

/**
 * EXAMPLE: custom function for Rule Set Configuration type 'P-900'
 * @param {import('ShareflexPermissions').SetConfigCustomFnOptions} options
 * @returns {Promise<import('ShareflexPermissions').SetConfigCustomFnResult>}
 */
export async function customFnForOssenberg(options) {
	const { addons, roleDefObj, listUrl, itemId } = options;
	const rules = addons.rules;
	/** @type {import('ShareflexPermissions').default} */
	const permissions = addons.initPermissionsAPI();

	const configuration = {
		peRolesUrl: '/Administration/Lists/peRoles',
		fields: {
			clientsFieldName: 'qmClient',
			departmentsFieldName: 'qmDepartment',
		},
	};

	const clientField = configuration.fields.clientsFieldName;
	const departmentField = configuration.fields.departmentsFieldName;

	rules.logInfo('test start');

	//getting the ID's of the required roles
	let contributeRoleDefId = roleDefObj.getRoleDefId('Contribute');
	let readRoleDefId = roleDefObj.getRoleDefId('Read');

	//getting the existing role names that will be used to find the matches between them and the client/department field values
	const getExistingRoleNames = await rules.getItems({
		listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, configuration.peRolesUrl),
		fields: 'ID,Title',
	});

	//getting the newly created/saved item to get the values of the client/department fields
	const getAddedItem = await rules.getItemById({
		listUrl,
		itemId,
		fields: `${clientField},${departmentField}`,
	});
	//storing the full client names from the field qmClient
	let fullClientNames = [];
	//storing the full department names from the field departmentField
	let departmentNames = [];

	//checking if there are more than two clients added to the field qmClient
	if (getAddedItem[clientField].includes('; ')) {
		fullClientNames = getAddedItem[clientField].split('; ');
	} else {
		fullClientNames.push(getAddedItem[clientField]);
	}

	//checking if there are more than two departments added to the field departmentField
	if (getAddedItem[departmentField].includes('; ')) {
		departmentNames = getAddedItem[departmentField].split('; ');
	} else {
		departmentNames.push(getAddedItem[departmentField]);
	}

	//storing the short client names 'Erwin Kowsky GmbH & Co. KG' => 'Erwin'
	const shortClientNames = [];

	//getting the first part of the clients name/title 'Erwin Kowsky GmbH & Co. KG' => 'Erwin'
	for (const clientName of fullClientNames) {
		const shortClientName = clientName.split(' ');
		if (shortClientName[1] == 'GmbH' || shortClientName[1] == 'UG') {
			shortClientNames.push(shortClientName[0]);
		} else {
			shortClientNames.push(shortClientName.slice(0, 2).join(''));
		}
	}

	//storing the names of the matched Role
	const getAddedRoleNames = [];

	//filter departments to check if there is any Department name added to the field
	const filteredDepartments = departmentNames.filter((departmentName) => departmentName.length);

	//getting only these Roles that either have departments added or not
	for (const clientRoleName of shortClientNames) {
		if (filteredDepartments.length) {
			for (const departmentName of filteredDepartments) {
				//getting the roles and departments
				getAddedRoleNames.push(...getExistingRoleNames.filter((roleName) => roleName.Title.startsWith(clientRoleName) && roleName.Title.includes(departmentName)));
			}
		} else {
			//getting the roles only => Rheima-L, Rheima-M
			getAddedRoleNames.push(...getExistingRoleNames.filter((roleName) => roleName.Title === `${clientRoleName}-L` || roleName.Title === `${clientRoleName}-M`));
		}
	}

	const contributeMembers = [];
	const readMembers = [];

	//sorting which Role must have Contribute or Read rights and get their SharePoint Group IDs
	for (const roleName of getAddedRoleNames) {
		if (roleName.Title.endsWith('-L')) {
			let readerRole = await permissions.getRoles({ roleName: roleName.Title });
			readMembers.push(parseInt(readerRole.rolesObj[roleName.Title].peSharePointGroupID));
		} else if (roleName.Title.endsWith('-M')) {
			let contributeRole = await permissions.getRoles({ roleName: roleName.Title });
			contributeMembers.push(parseInt(contributeRole.rolesObj[roleName.Title].peSharePointGroupID));
		}
	}

	/** @type {import('ShareflexPermissions').SetConfigCustomFnResult} */
	let result = {};

	// check exists the role definition
	if (contributeRoleDefId && readRoleDefId) {
		// add the two Contribute and Read members to the item permissions
		result.add = {};
		result.add[contributeRoleDefId] = contributeMembers;
		result.add[readRoleDefId] = readMembers;
	}

	return result;
}
