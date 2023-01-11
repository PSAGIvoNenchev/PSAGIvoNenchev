//@ts-check
/// <reference path="../src/Core/ShareflexAddons/@types/ShareflexRules.d.ts" />
/// <reference path="../src/Core/ShareflexAddons/@types/ShareflexAddons.d.ts" />
/// <reference path="../src/Core/ShareflexAddons/@types/ShareflexPermissions.d.ts" />

import ShareflexRules from 'ShareflexRules';

// @ts-ignore
import { config } from 'aoWebApp_Defaults_CUSTOM';

const rules = new ShareflexRules(config);

/**
 * Function init and provide keys for test cases
 * @param {import('ShareflexRules').TestCaseOptions} options
 */
export function initTestCaseProperties(options) {
	const { rules, helpers, name } = options;
	const moduleName = options.customOptions.moduleName;

	const customOptions = options.customOptions;
	const { addons, flow, notifications, permissions } = customOptions;

	/** @type {import('ShareflexRules').TestCaseResult} */
	const testResult = {
		result: false,
		failedMessage: '',
	};
	const testCaseId = rules.Utils.generateGUID({ format: '####-####' });

	return {
		rules,
		addons,
		flow,
		permissions,
		notifications,
		helpers,
		moduleName,
		testCaseId,
		testCaseName: name,
		testResult,
	};
}

/**
 * Test to create context list item and folders
 * @param {import('ShareflexRules').TestCaseOptions} options
 */
async function createItems(options) {
	const { permissions, roleDefObj } = initTestCaseProperties(options);

	const listUrl = rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/DocumentsNew');
	//getting the ID's of the required roles
	let contributeRoleDefId = roleDefObj.getRoleDefId('Contribute');
	let readRoleDefId = roleDefObj.getRoleDefId('Read');

	const item = await rules.getItemById({
		listUrl,
		itemId: 3,
		fields: 'qmClient,qmDepartment',
	});
	debugger;

	let permissionMappings = rules.createPermissionMappings();

	permissionMappings.addRoleDefId(contributeRoleDefId, []);
	permissionMappings.addRoleDefId(readRoleDefId, []);

	const assignPermissions = await rules.assignItemPermissions({
		listUrl,
		itemId: 3,
		permissionMappings,
	});
	debugger;
	return assignPermissions;
}

// @ts-ignore
await createItems();
