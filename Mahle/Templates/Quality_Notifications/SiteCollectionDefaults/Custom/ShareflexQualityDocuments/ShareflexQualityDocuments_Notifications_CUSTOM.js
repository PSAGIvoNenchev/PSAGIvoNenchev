export async function Notifications_DocumentCheckout(options) {
	// Mail notifications
	const rules = options.addons.getCurrentRulesAPI();
	const [docEditItem] = await rules.getItems({
		listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/DocumentsEdit'),
		filter: `qmRecordNo eq '${options.stateConfig.itemContext.primaryKeyFieldValue}'`,
		fields: 'Id',
	});
	const [recordItem] = await rules.getItems({
		listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'),
		filter: `qmRecordNo eq '${options.stateConfig.itemContext.primaryKeyFieldValue}'`,
		fields: 'Id',
	});

	if (docEditItem && docEditItem.Id && recordItem && recordItem.Id) {
		const fields = rules.createItemFields();
		fields.setText('Title', 'Document Checkout Editor');
		fields.setText('ItemId', docEditItem.Id);
		fields.setText('ListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/DocumentsEdit'));
		fields.setText('ParentItemId', recordItem.Id);
		fields.setText('ParentListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'));
		await rules.createItem({
			listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Administration/Lists/MailEvents'),
			fields,
			eventsActivated: true,
		});
		fields.setText('Title', 'Document Checkout Notification');
		await rules.createItem({
			listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Administration/Lists/MailEvents'),
			fields,
			eventsActivated: true,
		});
	} else {
		rules.logWarning("Error creating mail event for 'Document Checkout'");
		rules.logWarning(`docEditItem.Id: '${docEditItem.Id}'`);
		rules.logWarning(`recordItem.Id: '${recordItem.Id}'`);
	}
}

export async function Notifications_DocumentNumberAssigned(options) {
	// Mail notifications
	const rules = options.addons.getCurrentRulesAPI();
	const [docEditItem] = await rules.getItems({
		listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/DocumentsEdit'),
		filter: `qmRecordNo eq '${options.stateConfig.itemContext.primaryKeyFieldValue}'`,
		fields: 'Id',
	});
	const [recordItem] = await rules.getItems({
		listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'),
		filter: `qmRecordNo eq '${options.stateConfig.itemContext.primaryKeyFieldValue}'`,
		fields: 'Id',
	});

	if (docEditItem && docEditItem.Id && recordItem && recordItem.Id) {
		const fields = rules.createItemFields();
		fields.setText('Title', 'Document Number Assigned');
		fields.setText('ItemId', docEditItem.Id);
		fields.setText('ListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/DocumentsEdit'));
		fields.setText('ParentItemId', recordItem.Id);
		fields.setText('ParentListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'));
		await rules.createItem({
			listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Administration/Lists/MailEvents'),
			fields,
			eventsActivated: true,
		});
	} else {
		rules.logWarning("Error creating mail event for 'Document Number Assigned'");
		rules.logWarning(`docEditItem.Id: '${docEditItem.Id}'`);
		rules.logWarning(`recordItem.Id: '${recordItem.Id}'`);
	}
}

export async function Notifications_DocumentNumberRejected(options) {
	// Mail notifications
	const rules = options.addons.getCurrentRulesAPI();
	const [docNewItem] = await rules.getItems({
		listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/DocumentsNew'),
		filter: `qmRecordNo eq '${options.stateConfig.itemContext.primaryKeyFieldValue}'`,
		fields: 'Id',
	});

	if (docNewItem && docNewItem.Id) {
		const fields = rules.createItemFields();
		fields.setText('Title', 'Document Number Creation Rejected');
		fields.setText('ItemId', docNewItem.Id);
		fields.setText('ListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/DocumentsNew'));
		fields.setText('ParentItemId', docNewItem.Id);
		fields.setText('ParentListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/DocumentsNew'));
		await rules.createItem({
			listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Administration/Lists/MailEvents'),
			fields,
			eventsActivated: true,
		});
	} else {
		rules.logWarning("Error creating mail event for 'Document Number Creation Rejected'");
		rules.logWarning(`docNewItem.Id: '${docNewItem.Id}'`);
	}
}

export async function Notifications_DocumentRetracted(options) {
    const rules = options.addons.getCurrentRulesAPI();
		const [recordItem] = await rules.getItems({
			listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'),
			filter: `qmRecordNo eq '${options.stateConfig.itemContext.primaryKeyFieldValue}'`,
			fields: 'Id',
		});

		if (recordItem && recordItem.Id) {
			const fields = rules.createItemFields();
			fields.setText('Title', 'Document Retracted');
			fields.setText('ItemId', recordItem.Id);
			fields.setText('ListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'));
			fields.setText('ParentItemId', recordItem.Id);
			fields.setText('ParentListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'));
			await rules.createItem({
				listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Administration/Lists/MailEvents'),
				fields,
				eventsActivated: true,
			});
		} else {
			rules.logWarning("Error creating mail event for 'Document Retracted'");
			rules.logWarning(`recordItem.Id: '${recordItem.Id}'`);
		}
}


export async function Notifications_DocumentPublished(options) {
	const { actionTrigger, stateConfig, addons, customOptions, flow } = options;
	const rules = addons.getCurrentRulesAPI();
	/** @type {import('ShareflexPermissions').default} */
	const qmRecordNo = (await flow.getWorkflowVariables(stateConfig.instanceID, true)).qm_ContextItem_qmRecordNo;

	const [recordItem] = await rules.getItems({
		listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, 'Workspace/Lists/Records'),
		fields: 'Id, qmPublicationType',
		filter: `qmRecordNo eq '${qmRecordNo}'`,
	});
	const [docRootItem] = await rules.getItems({
		listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, 'Documents'),
		fields: 'Id',
		filter: `qmRecordNo eq '${qmRecordNo}'`,
	});
	if (docRootItem && docRootItem.Id && recordItem && recordItem.Id) {
		const fields = rules.createItemFields();
		fields.setText('Title', 'Document Published');
		fields.setText('ItemId', docRootItem.Id);
		fields.setText('ListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Documents'));
		fields.setText('ParentItemId', recordItem.Id);
		fields.setText('ParentListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'));
		await rules.createItem({
			listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Administration/Lists/MailEvents'),
			fields,
			eventsActivated: true,
		});
	} else {
		rules.logWarning("Error creating mail event for 'Document Published'");
		rules.logWarning(`docRootItem.Id: '${docRootItem.Id}'`);
		rules.logWarning(`recordItem.Id: '${recordItem.Id}'`);
	}
}

/**
 * 
 * @param {import('QualityDocumentsTypes').FlowCustomFnOptions} options 
 * @returns 
 */
export async function Notifications_DocumentRetractionDeclined(options) {
    // Mail notifications
	const rules = options.addons.getCurrentRulesAPI();
	const [recordItem] = await rules.getItems({
		listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'),
		filter: `qmRecordNo eq '${options.stateConfig.itemContext.primaryKeyFieldValue}'`,
		fields: 'Id',
	});

	if (recordItem && recordItem.Id) {
		const fields = rules.createItemFields();
		fields.setText('Title', 'Document Retraction Declined');
		fields.setText('ItemId', recordItem.Id);
		fields.setText('ListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'));
		fields.setText('ParentItemId', recordItem.Id);
		fields.setText('ParentListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'));
		await rules.createItem({
			listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Administration/Lists/MailEvents'),
			fields,
			eventsActivated: true,
		});
	} else {
		rules.logWarning("Error creating mail event for 'Retracted'");
		rules.logWarning(`recordItem.Id: '${recordItem.Id}'`);
	}
	return true;
}

export async function Notifications_DocumentWorkflowCancelled(options) {
    const rules = options.addons.getCurrentRulesAPI();
		const [recordItem] = await rules.getItems({
			listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'),
			filter: `qmRecordNo eq '${options.stateConfig.itemContext.primaryKeyFieldValue}'`,
			fields: 'Id',
		});

		if (recordItem && recordItem.Id) {
			const fields = rules.createItemFields();
			fields.setText('Title', 'Document Workflow Cancelled');
			fields.setText('ItemId', recordItem.Id);
			fields.setText('ParentListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'));
			fields.setText('ParentItemId', recordItem.Id);
			fields.setText('ParentListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, '/Workspace/Lists/Records'));
			await rules.createItem({
				listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Administration/Lists/MailEvents'),
				fields,
				eventsActivated: true,
			});
		} else {
			rules.logWarning("Error creating mail event for 'Document Workflow Cancelled'");
			rules.logWarning(`recordItem.Id: '${recordItem.Id}'`);
		}
}

export async function Notifications_NewTask(options) {
    const rules = options.addons.getCurrentRulesAPI();
	const items = await rules.getItems({
		listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, options.stateConfig.taskConfiguration.taskListUrl),
		filter: `weStateID eq '${options.stateConfig.stateID}'`,
		fields: 'Id'
	});
	for (const item of items) {
		const fields = rules.createItemFields().setText('Title', 'New Task')
		.setText('ItemId', item.Id)
		.setText('ListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, options.stateConfig.taskConfiguration.taskListUrl))
		.setText('ParentItemId', options.stateConfig.itemContext.itemID.toString())
		.setText('ParentListUrl', rules.Utils.combineUrls(rules.Context.siteUrl, options.stateConfig.itemContext.listUrl));
		await rules.createItem({
			listUrl: rules.Utils.combineUrls(rules.Context.siteUrl, '/Administration/Lists/MailEvents'),
			fields,
			eventsActivated: true
		});
	}
}