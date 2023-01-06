/// <reference path="../../src/Core/ShareflexAddons/@types/ShareflexRules.d.ts" />
/// <reference path="../../src/Core/ShareflexAddons/@types/ShareflexAddons.d.ts" />

const configuration = {
	listUrl: '/Lists/ResultList',
	masterBafTimerJobConfigUrl: '/pscBAF/TimerJobsConfiguration',
	lookUpFields: {
		lookUpFieldName1: 'DefaultLookUp1/Title',
		lookUpFieldName2: 'DefaultLookUp2/Title',
	},
	resultFieldName: 'Result',
};

/**
 * Function
 * @param {import('ShareflexRules').default} _rules
 */
export async function addCompanies(_rules) {
	const rules = _rules;
	const webUrl = rules.Context.siteUrl;
	const listUrl = rules.Utils.combineUrls(webUrl, configuration.listUrl);

	//Setting the batch operations
	const batchOperations = rules.createBatchOperations(webUrl);
	//Amount of operations per single batched request
	const batchCount = 60;
	//Amount of items per single get request
	const processedItemsLimit = 10;

	const resultItems = [];
	//Getting items that are filtered by empty result field
	await rules.processItems({
		listUrl,
		fields: `ID,${configuration.resultFieldName},${configuration.lookUpFields.lookUpFieldName1},${configuration.lookUpFields.lookUpFieldName2}`,
		filter: `${configuration.resultFieldName} eq null`,
		processedItemsLimit,
		callback: ({ items }) => {
			resultItems.push(...items);
			return Promise.resolve();
		},
	});

	//Filtering the result to get all items that have value in Company1 or Company2 field
	const emptyResultItems = resultItems.filter((item) => item.DefaultLookUp1.length != 0 || item.DefaultLookUp2.length != 0);

	//Disabling the timer job configuration if there is no items to be updated
	if (!emptyResultItems.length) {
		const timerJobConfigItem = await getTimerJobItem(rules, webUrl);

		await rules.updateItem({
			listUrl: rules.Utils.combineUrls(webUrl, configuration.masterBafTimerJobConfigUrl),
			itemId: timerJobConfigItem[0].ID,
			fields: rules.createItemFields().setChoice('TimerJobEnabled', 'No'),
			eventsActivated: true,
		});

		return;
	}

	//Updating items to add the company names if they are available into the empty result field
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
			fields: rules.createItemFields().setText(configuration.resultFieldName, finalResultValue),
		});
	}

	const result = await batchOperations.execute({ batchSize: batchCount, returnOperationResults: true });

	return result;
}

/**
 * Function that returns the the timer job configuration file to be disabled after it's finished
 * @param {Object} rules
 * @param {string} webUrl
 * @returns {Promise<Object>}
 */
async function getTimerJobItem(rules, webUrl) {
	const timerJobItems = await rules.getItems({
		listUrl: rules.Utils.combineUrls(webUrl, configuration.masterBafTimerJobConfigUrl),
		fields: 'ID,LinkFilename',
	});
	const [foundItem] = timerJobItems.filter((item) => item.LinkFilename === 'AddCompanies_TimerJob_Configuration.js');

	return [foundItem];
}
