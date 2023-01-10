//@ts-check
/// <reference path="../src/Core/ShareflexAddons/@types/ShareflexRules.d.ts" />
/// <reference path="../src/Core/ShareflexAddons/@types/ShareflexAddons.d.ts" />
/// <reference path="../src/Core/ShareflexAddons/@types/ShareflexPermissions.d.ts" />

import ShareflexRules from 'ShareflexRules';

// @ts-ignore
import { config } from 'aoWebApp_Defaults_CUSTOM';

const rules = new ShareflexRules(config);

async function createItems() {
	const listUrl = rules.Utils.combineUrls(rules.Context.siteUrl, '/Administration/Lists/ResultList');

	const createItem = await rules.createItem({
		listUrl,
		fields: rules.createItemFields().setText('Title', 'test1'),
		eventsActivated: true,
	});
	debugger;

	return createItem;
}

await createItems();
