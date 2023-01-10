declare module 'ShareflexNotifications' {
	/**
	 * @typedef SendMailConnection
	 * @type {Object}
	 * @property {string} tenant  Name (e.g. 'contoso.onmicrosoft.com') or Id of tenant
	 * @property {string} clientId  Application Client Id
	 * @property {string} encryptedClientSecret  Encrypted Application Client Secret (see documentation)
	 */
	/**
	 * @typedef NotificationCustomDefault
	 * @type {Object}
	 * @property {string} defaultSendEmailAddress  Email address of an account (system) to send mails as sender
	 * @property {SendMailConnection} [defaultSendMailConnection]  required if no default Microsoft Graph connection 'MicrosoftGraphBuildInConnection' or missing 'send.mail' permissions
	 */
	/**
	 * @typedef NotificationCustomOptions
	 * @type { { [customProperty: string]: any } }
	 */
	/**
	 * @typedef NotificationCustomConfig
	 * @type { NotificationCustomDefault & NotificationCustomOptions }
	 */
	/**
	 * @typedef ConnectionOptions
	 * @type {Object}
	 * @property {string} id
	 * @property {string} type
	 */
	/**
	 * @typedef SendGraphMailOptions
	 * @type {Object}
	 * @property {ConnectionOptions} connection
	 * @property {string} senderMail
	 * @property {string} subject
	 * @property {string} mailBody
	 * @property {string[]} toRecipients
	 * @property {string[]} [ccRecipients]
	 * @property {string[]} [bccRecipients]
	 * @property {boolean} [saveToSentItems]
	 * @property {string[]} [attachments]
	 */
	export default class ShareflexNotifications {
		constructor(rules: any, addons: any);
		/**
		 * @type {import('ShareflexRules').default}
		 * @private
		 */
		private rules;
		/**
		 * @type {import('ShareflexAddons').default}
		 * @private
		 */
		private addons;
		/**
		 *
		 * @type {import('ShareflexNotifications').NotificationCustomConfig}
		 * @private
		 */
		private _customConfig;
		/**
		 * Shareflex Notifications custom properties
		 * @returns {import('ShareflexNotifications').NotificationCustomConfig}
		 */
		get customConfig(): any;
		/**
		 * Function to send an email over Microsoft Graph API
		 * ```
		 * let result = notifications.sendGraphEmail(SendGraphMailOptions);
		 *
		 * SendGraphMailOptions = {
		 *   connection : ConnectionOptions,
		 *   senderMail : String,
		 *   subject : String,
		 *   mailBody : String,
		 *   toRecipients : String[],
		 *   ccRecipients? : String[]
		 *   bccRecipients? : String[],
		 *   saveToSentItems? : Boolean,
		 *   attachments? : String[]
		 * }
		 *
		 * ConnectionOptions = {
		 *   id : String,
		 *   type : String
		 * }
		 * ```
		 * @param {SendGraphMailOptions} options
		 * @returns {Promise<boolean|any>}
		 */
		sendGraphEmail(options: SendGraphMailOptions): Promise<boolean | any>;
		/**
		 * Function to check an email address
		 *
		 * ```
		 * let result = notifications.validateEmail('user@contos.onmicrosoft.com');
		 *
		 * result = Boolean;
		 *
		 * ```
		 * @param {*} email
		 * @returns
		 */
		validateEmail(email: any): boolean;
	}
	export type SendMailConnection = {
		/**
		 * Name (e.g. 'contoso.onmicrosoft.com') or Id of tenant
		 */
		tenant: string;
		/**
		 * Application Client Id
		 */
		clientId: string;
		/**
		 * Encrypted Application Client Secret (see documentation)
		 */
		encryptedClientSecret: string;
	};
	export type NotificationCustomDefault = {
		/**
		 * Email address of an account (system) to send mails as sender
		 */
		defaultSendEmailAddress: string;
		/**
		 * required if no default Microsoft Graph connection 'MicrosoftGraphBuildInConnection' or missing 'send.mail' permissions
		 */
		defaultSendMailConnection?: SendMailConnection;
	};
	export type NotificationCustomOptions = {
		[customProperty: string]: any;
	};
	export type NotificationCustomConfig = NotificationCustomDefault & NotificationCustomOptions;
	export type ConnectionOptions = {
		id: string;
		type: string;
	};
	export type SendGraphMailOptions = {
		connection: ConnectionOptions;
		senderMail: string;
		subject: string;
		mailBody: string;
		toRecipients: string[];
		ccRecipients?: string[];
		bccRecipients?: string[];
		saveToSentItems?: boolean;
		attachments?: string[];
	};
}
