//@ts-check
/// <reference path="../../src/Core/ShareflexAddons/@types/ShareflexRules.d.ts" />
/// <reference path="../../src/Core/ShareflexAddons/@types/ShareflexAddons.d.ts" />
/// <reference path="../../src/Core/ShareflexAddons/@types/ShareflexPermissions.d.ts" />

import ShareflexRules from 'ShareflexRules';

// @ts-ignore
import { config } from 'aoWebApp_Defaults_CUSTOM';

const rules = new ShareflexRules(config);

async function createItems() {
	const webUrl = 'https://sflx.sharepoint.com/sites/AddonsOnlineSite-psc-qs-59831';
	const batchOperations = rules.createBatchOperations(webUrl);

	const batchCount = 90;
	const itemsCount = 10;

	for (let i = 0; i < itemsCount; i++) {
		batchOperations.addCreateItem({
			listUrl: `${webUrl}/Lists/ResultList`,
			fields: rules.createItemFields().setText('Title', `TestItem-${i}`).setLookup('DefaultLookUp1', generateRandom()).setLookup('DefaultLookUp2', generateRandom()),
		});
	}

	const result = await batchOperations.execute({ batchSize: batchCount, returnOperationResults: true });

	return result;
}

await createItems();

function generateRandom(min = 0, max = 6) {
	// find diff
	let difference = max - min;

	// generate random number
	let rand = Math.random();

	// multiply with difference
	rand = Math.floor(rand * difference);

	// add with min value
	rand = rand + min;

	return rand;
}
