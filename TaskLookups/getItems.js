SF.setFieldHidden('Result', true);
async function getItems() {
	const encodedMasterDataList1Url = encodeURIComponent(`${SF.currentValues.siteUrl}/Lists/MasterDataList1`);
	const encodedMasterDataList2Url = encodeURIComponent(`${SF.currentValues.siteUrl}/Lists/MasterDataList2`);
	const masterDataListOneEndPoint = `${SF.currentValues.siteUrl}/_api/web/GetList(@listUrl)/items?@listUrl='${encodedMasterDataList1Url}'&$select=Title&$top=5000`;
	const masterDataListTwoEndPoint = `${SF.currentValues.siteUrl}/_api/web/GetList(@listUrl)/items?@listUrl='${encodedMasterDataList2Url}'&$select=Title&$top=5000`;

	const [responseOne, responseTwo] = await Promise.all([SF.request(masterDataListOneEndPoint), SF.request(masterDataListTwoEndPoint)]);

	const finalValues = [...responseOne.value, ...responseTwo.value];

	const choiceOptions = [];

	finalValues.forEach((element, index) => {
		choiceOptions.push({ key: `${index}`, text: element.Title });
	});

	SF.setChoiceFieldOptions('MultiChoiceCompany', choiceOptions);

	SF.registerHook('saving', (args) => {
		// args: { cancel } (called before an item is being updated or created; use setFieldError to prevent saving (or set args.cancel to true, but user should get feedback) and setFieldValue to modify values to be committed)

		const multiChoiceValue = SF.getFieldValue('MultiChoiceCompany')
			?.split(';#')
			.filter((value) => value);

		console.log(multiChoiceValue);

		if (!multiChoiceValue?.length) {
			SF.setFieldError('MultiChoiceCompany', 'A MultiChoice is required.'); // will abort saving
		}

		const selectedCompanies = multiChoiceValue.map((value) => finalValues[value].Title).join(';');

		SF.setFieldValue('Result', selectedCompanies); // will change the value to be saved

		// to cancel silently (make sure the user gets some form of feedback, s.g. SF.showNotification):
		//args.cancel = true;
	});
}

getItems();

// Note: this can also appear in the list-view like this, but this code needs to be added to a UI.js scoped to Filter form mode (or via Global Add-On).
// To create Filter form Bottom code, set FormType empty and Title=* (or =Filter). Note you don't need a Form.xml for this (to use the default Filter form).
