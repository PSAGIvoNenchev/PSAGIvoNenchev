/// <reference path="../../../../../src/Core/ShareflexAddons/@types/ShareflexRules.d.ts" />
/// <reference path="../../../../../src/Core/ShareflexAddons/@types/ShareflexAddons.d.ts" />
/// <reference path="../../../../../src/Core/ShareflexAddons/@types/ShareflexFlow.d.ts" />

/**
 * EXAMPLE: custom function for Rule Set Configuration type 'P-900'
 * @param {import('ShareflexPermissions').SetConfigCustomFnOptions} options
 * @returns {Promise<import('ShareflexPermissions').SetConfigCustomFnResult>}
 */
export async function customFnForOssenberg(options) {
	const configuration = {
		peRolesUrl: '/Administration/Lists/peRoles',
		fields: {
			clientsFieldName: 'Clients/Title',
			departmentsFieldName: 'Departments/Title',
		},
	};

	const { addons, roleDefObj, listUrl, itemId } = options;
	const rules = addons.rules;

	rules.logInfo('test start');

	let contributeRoleDefId = roleDefObj.getRoleDefId('Contribute');
	let readRoleDefId = roleDefObj.getRoleDefId('Read');

	const getExistingRoleNames = await rules.getItems({
		listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, configuration.peRolesUrl),
		fields: 'ID,Title',
	});

	const getAddedItem = await rules.getItemById({
		listUrl,
		itemId,
		fields: `ID,${configuration.fields.clientsFieldName},${configuration.fields.departmentsFieldName}`,
	});

	const clientNames = [];
	const departmentNames = [];

	for (const clientName of getAddedItem.Clients) {
		const firstPartOfClientName = clientName.Title.split(' ');
		clientNames.push(firstPartOfClientName[0]);
	}
	for (const departmentName of getAddedItem.Departments) {
		departmentNames.push(departmentName.Title);
	}

	const getAddedRoleNames = [];

	const contributeMembers = [];
	const readMembers = [];

	for (const clientName of clientNames) {
		for (const departmentName of departmentNames) {
			getAddedRoleNames.push(...getExistingRoleNames.filter((roleName) => roleName.Title.startsWith(clientName) && roleName.Title.includes(departmentName)));
		}
	}

	for (const roleName of getAddedRoleNames) {
		if (roleName.Title.endsWith('-L')) {
			readMembers.push(roleName.Title);
		} else if (roleName.Title.endsWith('-M')) {
			contributeMembers.push(roleName.Title);
		}
	}

	await rules.breakItemRoleInheritance({ listUrl, itemId, clear: true });
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
