//@ts-check
/// <reference path="../../src/Core/ShareflexAddons/@types/ShareflexRules.d.ts" />
/// <reference path="../../src/Core/ShareflexAddons/@types/ShareflexAddons.d.ts" />
/// <reference path="../../src/Core/ShareflexAddons/@types/ShareflexPermissions.d.ts" />

import ShareflexRules from 'ShareflexRules';

// @ts-ignore
import { config } from 'aoWebApp_Defaults_CUSTOM';
// @ts-ignore
import { addCompanies } from 'aoWebApp_TimerJob_AddCompanies';

// initialize Shareflex Rules
const rules = new ShareflexRules(config);

await addCompanies(rules).catch((error) => {
	if (error.status && error.status == '429') {
		rules.logWarning(
			`The Server returned Status '${error.status}' - too many requests. Therefor adding companies was paused. Adding companies will continue with the next run.`
		);
	} else if (error.status && error.status == '503') {
		rules.logWarning(`The Server returned Status '${error.status}' - server to busy. Therefor adding companies was paused. Adding companies will continue with the next run.`);
	} else {
		rules.logError(error);
	}
});
