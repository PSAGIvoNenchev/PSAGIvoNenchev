//@ts-check
/// <reference path="../../../src/Core/ShareflexAddons/@types/ShareflexRules.d.ts" />
/// <reference path="../../../src/Core/ShareflexAddons/@types/ShareflexAddons.d.ts" />
/// <reference path="../../../src/Core/ShareflexAddons/@types/ShareflexPermissions.d.ts" />

import ShareflexRules from 'ShareflexRules';

// @ts-ignore
import { config } from 'aoWebApp_Defaults_CUSTOM';

const rules = new ShareflexRules(config);

async function deleteItems() {
	const webUrl = 'https://sflx.sharepoint.com/sites/AddonsOnlineSite-psc-qs-59831';
	const batchOperations = rules.createBatchOperations(webUrl);
	const listUrl = `${webUrl}/Lists/ResultList`;

	const batchCount = 90;

	const resultItems = [];
	await rules.processItems({
		listUrl,
		fields: 'ID',
		callback: ({ items }) => {
			resultItems.push(...items);
			return Promise.resolve();
		},
	});

	for (const resultItem of resultItems) {
		batchOperations.addDeleteItem({
			listUrl,
			itemId: resultItem.ID,
		});
	}

	const result = await batchOperations.execute({ batchSize: batchCount, returnOperationResults: true });

	return result;
}

await deleteItems();
