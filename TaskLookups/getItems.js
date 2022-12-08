SF.setFieldHidden('Result', true);

const encodedMasterDataList1Url = encodeURIComponent(`${SF.currentValues.siteUrl}/Lists/MasterDataList1`);
const encodedMasterDataList2Url = encodeURIComponent(`${SF.currentValues.siteUrl}/Lists/MasterDataList2`);

const masterDataListEndPoints = [
	`${SF.currentValues.siteUrl}/_api/web/GetList(@listUrl)/items?@listUrl='${encodedMasterDataList1Url}'&$select=Title&$top=1`,
	`${SF.currentValues.siteUrl}/_api/web/GetList(@listUrl)/items?@listUrl='${encodedMasterDataList2Url}'&$select=Title&$top=1`,
];

async function getItems(masterDataListEndPoint, callBack) {
	const content = await SF.request(masterDataListEndPoint, {
		method: 'GET',
		headers: {
			Accept: 'application/json;odata=nometadata',
			'Content-type': 'application/json;odata=nometadata',
			'odata-version': '',
		},
	});

	const finalResult = content.value.filter((item) => item.Title.length);

	callBack(finalResult);

	const nextUrlPage = content['odata.nextLink'];

	if (nextUrlPage) {
		await getItems(nextUrlPage, callBack);
	}
}

async function initialCall() {
	const finalResult = [];

	await getItems(masterDataListEndPoints[0], (items) => {
		finalResult.push(...items);
	});
	await getItems(masterDataListEndPoints[1], (items) => {
		finalResult.push(...items);
	});

	console.log(finalResult);

	const choiceOptions = [];

	finalResult.forEach((element, index) => {
		choiceOptions.push({ key: `${index}`, text: element.Title });
	});

	SF.setChoiceFieldOptions('MultiChoiceCompany', choiceOptions);

	SF.registerHook('saving', (args) => {
		// args: { cancel } (called before an item is being updated or created; use setFieldError to prevent saving (or set args.cancel to true, but user should get feedback) and setFieldValue to modify values to be committed)

		const multiChoiceValue = SF.getFieldValue('MultiChoiceCompany')
			?.split(';#')
			.filter((value) => value);

		if (!multiChoiceValue?.length) {
			SF.setFieldError('MultiChoiceCompany', 'A MultiChoice is required.'); // will abort saving
		}

		const selectedCompanies = multiChoiceValue.map((value) => finalResult[value].Title).join(';');

		SF.setFieldValue('Result', selectedCompanies); // will change the value to be saved
	});
}

initialCall();
