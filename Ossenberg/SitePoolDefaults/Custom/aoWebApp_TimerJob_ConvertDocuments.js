/// <reference path="../../../src/Core/ShareflexAddons/@types/ShareflexRules.d.ts" />
/// <reference path="../../../src/Core/ShareflexAddons/@types/ShareflexAddons.d.ts" />

const configuration = {
	listUrl: '/Documents',
	conversionJobsUrl: '/Workspace/ConversionJobs',
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
export async function convertDocuments(_rules) {
	const rules = _rules;
	const webUrl = rules.Context.siteUrl;
	const listUrl = rules.Utils.combineUrls(webUrl, configuration.listUrl);
	const conversionJobsUrl = rules.Utils.combineUrls(webUrl, configuration.conversionJobsUrl);

	//Amount of items per single get request because SharePoint might throttle when a documents are copied
	const processedItemsLimit = 1;

	const resultItems = [];

	//Getting items that are filtered by file extension which is part from the 'FileLeafRef' field
	await rules.processItems({
		listUrl,
		fields: `ID,FileLeafRef,qmRecordNo`,
		filter: `substringof('.docx',FileLeafRef)`,
		processedItemsLimit,
		callback: ({ items }) => {
			resultItems.push(...items);
			return Promise.resolve();
		},
	});

	//Disabling the timer job configuration if there is no items to be updated
	if (!resultItems.length) {
		const timerJobConfigItem = await getTimerJobItem(rules, webUrl);

		await rules.updateItem({
			listUrl: rules.Utils.combineUrls(webUrl, configuration.masterBafTimerJobConfigUrl),
			itemId: timerJobConfigItem[0].ID,
			fields: rules.createItemFields().setChoice('TimerJobEnabled', 'No'),
			eventsActivated: true,
		});

		return;
	}

	//Saving the folder name
	const folderName = resultItems[0].qmRecordNo;
	//Saving the file name
	const fileName = resultItems[0].FileLeafRef;

	//Copying the item requires the full path of that file including the filename + extension (sourcePath) and where the file must be copied (destinationPath)
	const copyItem = await rules.copyDocument({
		sourcePath: `${listUrl}/${folderName}/${fileName}`,
		destinationPath: `${conversionJobsUrl}/${fileName}`,
		copyAuthorAndCreated: true,
	});

	return copyItem;
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
	const [foundItem] = timerJobItems.filter((item) => item.LinkFilename === 'ConvertDocuments_TimerJob_Configuration.js');

	return [foundItem];
}
