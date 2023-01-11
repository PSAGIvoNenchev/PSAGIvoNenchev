/// <reference path="../../../../../src/Core/ShareflexAddons/@types/ShareflexRules.d.ts" />
/// <reference path="../../../../../src/Core/ShareflexAddons/@types/ShareflexAddons.d.ts" />
/// <reference path="../../../../../src/Core/ShareflexAddons/@types/ShareflexFlow.d.ts" />

/**
 * EXAMPLE: custom function for Rule Set Configuration type 'P-900'
 * @param {import('ShareflexPermissions').SetConfigCustomFnOptions} options
 * @returns {Promise<import('ShareflexPermissions').SetConfigCustomFnResult>}
 */
export async function customFnForOssenberg(options) {
	const { addons, roleDefObj, listUrl, itemId } = options;
	const rules = addons.rules;

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
		shortClientNames.push(shortClientName[0]);
	}

	//storing the names of the matched Role
	const getAddedRoleNames = [];

	const contributeMembers = [];
	const readMembers = [];

	//getting only these Roles that are matched by the condition bellow
	for (const clientRoleNames of shortClientNames) {
		for (const departmentName of departmentNames) {
			getAddedRoleNames.push(...getExistingRoleNames.filter((roleName) => roleName.Title.startsWith(clientRoleNames) && roleName.Title.includes(departmentName)));
		}
	}

	//sorting which Role must have Contribute or Read rights
	for (const roleName of getAddedRoleNames) {
		if (roleName.Title.endsWith('-L')) {
			readMembers.push(roleName.Title);
		} else if (roleName.Title.endsWith('-M')) {
			contributeMembers.push(roleName.Title);
		}
	}

	await rules.resetItemRoleInheritance({ listUrl, itemId, clear: true });

	await rules.breakItemRoleInheritance({ listUrl, itemId });

	//creating the virtual permission set that will be used to assign the correct item permissions
	let permissionMappings = rules.createPermissionMappings();

	permissionMappings.addRoleDefId(contributeRoleDefId, contributeMembers);
	permissionMappings.addRoleDefId(readRoleDefId, readMembers);

	const result = await rules.assignItemPermissions({
		listUrl,
		itemId,
		permissionMappings,
	});

	rules.logInfo('test ends');
	return Promise.resolve(result);
}
