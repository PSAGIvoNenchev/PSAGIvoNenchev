/// <reference path="../../src/Core/ShareflexAddons/@types/ShareflexRules.d.ts" />
/// <reference path="../../src/Core/ShareflexAddons/@types/ShareflexAddons.d.ts" />

const configuration = {
	listUrl: '/Lists/ResultList',
	masterBafUrl: '/pscBAF/TimerJobsConfiguration',
	lookUpFields: {
		field1: 'DefaultLookUp1/Title',
		field2: 'DefaultLookUp2/Title',
	},
	resultField: 'Result',
};

/**
 *
 * @param {import('ShareflexRules').default} _rules
 */
export async function addCompanies(_rules) {
	const rules = _rules;
	const webUrl = rules.Context.siteUrl;
	const listUrl = rules.Utils.combineUrls(webUrl, configuration.listUrl);

	const batchOperations = rules.createBatchOperations(webUrl);
	const batchCount = 60;
	const processedItemsLimit = 2500;

	const resultItems = [];
	await rules.processItems({
		listUrl,
		fields: `ID,${configuration.resultField},${configuration.lookUpFields.field1},${configuration.lookUpFields.field2}}`,
		filter: `${configuration.resultField} eq null`,
		processedItemsLimit,
		callback: ({ items }) => {
			resultItems.push(...items);
			return Promise.resolve();
		},
	});

	const emptyResultItems = resultItems.filter((item) => item.DefaultLookUp1.length != 0 || item.DefaultLookUp2.length != 0);

	if (!emptyResultItems.length) {
		const timerJobConfigItem = await getTimerJobItem(rules, webUrl);

		await rules.updateItem({
			listUrl: rules.Utils.combineUrls(webUrl, configuration.masterBafUrl),
			itemId: timerJobConfigItem[0].ID,
			fields: rules.createItemFields().setChoice('TimerJobEnabled', 'No'),
			eventsActivated: true,
		});

		return;
	}

	for (const emptyResultItem of emptyResultItems) {
		let finalResultValue = '';

		if (emptyResultItem.DefaultLookUp1.Title && emptyResultItem.DefaultLookUp2.Title) {
			finalResultValue = `${emptyResultItem.DefaultLookUp1.Title};${emptyResultItem.DefaultLookUp2.Title}`;
		} else if (emptyResultItem.DefaultLookUp1.Title) {
			finalResultValue = emptyResultItem.DefaultLookUp1.Title;
		} else if (emptyResultItem.DefaultLookUp2.Title) {
			finalResultValue = emptyResultItem.DefaultLookUp2.Title;
		}

		batchOperations.addUpdateItem({
			listUrl,
			itemId: emptyResultItem.ID,
			fields: rules.createItemFields().setText('Result', finalResultValue),
		});
	}

	const result = await batchOperations.execute({ batchSize: batchCount, returnOperationResults: true });

	return result;
}

async function getTimerJobItem(rules, webUrl) {
	const timerJobItems = await rules.getItems({
		listUrl: rules.Utils.combineUrls(webUrl, configuration.masterBafUrl),
		fields: 'ID,LinkFilename',
	});
	const [foundItem] = timerJobItems.filter((item) => item.LinkFilename === 'AddCompanies_TimerJob_Configuration.js');

	return [foundItem];
}
