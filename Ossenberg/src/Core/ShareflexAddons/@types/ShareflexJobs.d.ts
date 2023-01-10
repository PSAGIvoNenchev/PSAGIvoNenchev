declare module 'ShareflexJobs' {
	/**
	 * Wrapper class for Shareflex Jobs API
	 */
	export default class ShareflexJobs {
		/**
		 * @param {import('ShareflexRules').default} rules Shareflex Rules API
		 * @param {import('ShareflexAddons').default} addons Shareflex Addons API
		 */
		constructor(rules: import('ShareflexRules').default, addons: import('ShareflexAddons').default);
		adminJobs: ShareflexAdminJobs;
		transactionJobs: ShareflexTransactionJobs;
	}
	export type TransactionJobItem = {
		Id: string;
		Title?: string;
		aoInputDataJSON?: string;
		aoTransactionJobJSON?: string;
		aoInternalDataJSON?: string;
		aoLastSuccessfulStep?: string;
		aoTransactionJobStatus?: string;
		aoExecutionCount?: string;
	};
	export type TransactionJob = {
		steps: TransactionJobStep[];
	};
	export type TransactionJobFunctionOptions = {
		rules: import('ShareflexRules').default;
		addons: import('ShareflexAddons').default;
		/**
		 * Data that was defined while creating/registering the transaction job
		 */
		inputData: any;
		/**
		 * Data object that can be used to transfer data between different job steps
		 */
		internalData: any;
	};
	export type TransactionJobStep = {
		/**
		 * Sequence number to determine the order of the steps
		 */
		stepId: number;
		label?: string;
		/**
		 * Name of the function. Needs to be implemented in the TransactionJobs Module
		 */
		functionName: string;
	};
	export type TransactionJobStatus = {
		lastSuccessfulStep?: string;
		lastError?: string;
		jobStatus?: 'Waiting' | 'Executing' | 'Finished' | 'Failed';
	};
	export type TransactionJobDefinition = {
		title: string;
		contextItemPrimaryKey?: string;
		job: TransactionJob;
		inputData: any;
	};
	export type TransactionJobDefinitionSetExecuteOptions = {
		/**
		 * Execute the jobs synchronously and sequentially. Wait for its execution [Default = true]
		 */
		performSynchronously?: boolean;
	};
	export type TransactionJobExecuteSetOptions = {
		/**
		 * Set of job definitions
		 */
		jobDefinitionSet: ShareflexTransactionJobDefinitionSet;
		/**
		 * Execute the jobs synchronously and sequentially. Wait for its execution [Default = true]
		 */
		performSynchronously?: boolean;
	};
	export type AdminJobBatchAddOptions = {
		/**
		 * Custom object to be used for single batch processing (stringified to aoBatchConfigJSON). Can be passed as `Object` or `String`
		 */
		batchConfig: any;
		/**
		 * Custom `Title` of AdminJobBatch item
		 */
		batchTitle?: string;
	};
	export type AdminJobBatchItemConfig = {
		/**
		 * Stringified custom object to be used for single batch processing (aoBatchConfigJSON value)
		 */
		batchConfig: string;
		/**
		 * Custom `Title` of AdminJobBatch item
		 */
		batchTitle?: string;
	};
	export type RelevantTimerjobConfigurationItem = {
		Id: number;
		TimerJobEnabled: boolean;
		ConfigurationId: string;
		ConfigurationStatus: string;
	};
	export type TimerjobItem = {
		Id: number;
		ConfigurationId: string;
		Status: string;
		Log: string;
	};
	export type EnableTimerJobResult = {
		/**
		 * Id of activated TimerJob configuration
		 */
		timerJobConfigurationId: string;
		/**
		 * If TimerJob is enabled now
		 */
		configFileIsEnabled: boolean;
		/**
		 * If this function call did enable the TimerJob (otherwise it already was enabled)
		 */
		configFileHasBeenEnabled: boolean;
	};
	export type AdminJobQueueListItem = {
		/**
		 * ListItem Id of queued item
		 */
		Id: number;
		/**
		 * Information about context which created this queued item
		 */
		aoContextData: string;
		/**
		 * `aoAdminJobTypeID` to start a public AdminJob with
		 */
		aoAdminJobTypeID: string;
		/**
		 * `aoInternalAdminJobFnName` to start an internal AdminJob with
		 */
		aoInternalAdminJobFnName: string;
		/**
		 * Amount of times how often this items caused an AdminJob to be started
		 */
		aoExecutionCount: string;
	};
	export type QueuedInternalAdminJobsByFnName = {
		[aoInternalAdminJobFnName: string]: AdminJobQueueListItem[];
	};
	export type QueuedPublicAdminJobsByTypeID = {
		[aoAdminJobTypeID: string]: AdminJobQueueListItem[];
	};
	export type QueuedAdminJobs = {
		/**
		 * To be executed as internal AdminJob
		 */
		internal: QueuedInternalAdminJobsByFnName;
		/**
		 * To be executed as public AdminJob
		 */
		public: QueuedPublicAdminJobsByTypeID;
	};
	export type GetQueuedJobsByNameCallbackOptions = {
		/**
		 * Array to push relevant items into
		 */
		queuedItems: AdminJobQueueListItem[];
		/**
		 * Value of `aoInternalAdminJobFnName` (e.g. 'pe200')
		 */
		internalFnName: string;
		/**
		 * Value of `aoAdminJobTypeID` (e.g. 'AJPE-0200')
		 */
		typeID: string;
	};
	export type AddInternalAdminJobToQueueOptions = {
		/**
		 * Name of AdminJob JavaScript function (e.g. 'pe100', 'we900', 'cm100' ...)
		 */
		aoInternalAdminJobFnName: string;
		/**
		 * Options object value to set `aoOptions` field of created AdminJob with
		 */
		aoOptions?: string;
		/**
		 * Context information to be used in AdminJob implementation
		 */
		jobContextData?: string;
		/**
		 * Custom Title of queued item
		 */
		jobTitle?: string;
	};
	export type AddPublicAdminJobToQueueOptions = {
		/**
		 * Type of public AdminJob (e.g. 'AJPE-0100', 'AJWE-0900', 'AJCM-0100' ...)
		 */
		aoAdminJobTypeID: string;
		/**
		 * Options object value to set `aoOptions` field of created AdminJob with
		 */
		aoOptions?: string;
		/**
		 * Context information to be used in AdminJob implementation
		 */
		jobContextData?: string;
		/**
		 * Custom Title of queued item
		 */
		jobTitle?: string;
	};
	export type AddAdminJobOptions = {
		addons: import('ShareflexAddons').default;
		internalOptions?: AddInternalAdminJobToQueueOptions;
		publicOptions?: AddPublicAdminJobToQueueOptions;
	};
	export type FunctionResult = {
		/**
		 * If operation was successful
		 */
		result: boolean;
		/**
		 * Error message if result is false
		 */
		message: string;
	};
	export type StartBatchItemProcessingResult = {
		/**
		 * If start of processing was successful
		 */
		result: boolean;
		adminJobResult: import('ShareflexAddons').AdminJobResult;
	};
	/**
	 * @typedef AdminJobQueueListItem
	 * @property {number} Id  ListItem Id of queued item
	 * @property {string} aoContextData  Information about context which created this queued item
	 * @property {string} aoAdminJobTypeID  `aoAdminJobTypeID` to start a public AdminJob with
	 * @property {string} aoInternalAdminJobFnName  `aoInternalAdminJobFnName` to start an internal AdminJob with
	 * @property {string} aoExecutionCount  Amount of times how often this items caused an AdminJob to be started
	 *
	 * @typedef QueuedInternalAdminJobsByFnName
	 * @type { { [aoInternalAdminJobFnName: string]: AdminJobQueueListItem[] } }
	 *
	 * @typedef QueuedPublicAdminJobsByTypeID
	 * @type { { [aoAdminJobTypeID: string]: AdminJobQueueListItem[] } }
	 *
	 * @typedef QueuedAdminJobs
	 * @type {Object}
	 * @property {QueuedInternalAdminJobsByFnName} internal  To be executed as internal AdminJob
	 * @property {QueuedPublicAdminJobsByTypeID} public  To be executed as public AdminJob
	 *
	 * @typedef GetQueuedJobsByNameCallbackOptions
	 * @type {Object}
	 * @property {AdminJobQueueListItem[]} queuedItems  Array to push relevant items into
	 * @property {string} options.internalFnName  Value of `aoInternalAdminJobFnName` (e.g. 'pe200')
	 * @property {string} options.typeID  Value of `aoAdminJobTypeID` (e.g. 'AJPE-0200')
	 *
	 * @typedef AddInternalAdminJobToQueueOptions
	 * @type {Object}
	 * @property {string} aoInternalAdminJobFnName  Name of AdminJob JavaScript function (e.g. 'pe100', 'we900', 'cm100' ...)
	 * @property {string} [aoOptions]  Options object value to set `aoOptions` field of created AdminJob with
	 * @property {string} [jobContextData]  Context information to be used in AdminJob implementation
	 * @property {string} [jobTitle] Custom Title of queued item
	 *
	 * @typedef AddPublicAdminJobToQueueOptions
	 * @type {Object}
	 * @property {string} aoAdminJobTypeID  Type of public AdminJob (e.g. 'AJPE-0100', 'AJWE-0900', 'AJCM-0100' ...)
	 * @property {string} [aoOptions]  Options object value to set `aoOptions` field of created AdminJob with
	 * @property {string} [jobContextData]  Context information to be used in AdminJob implementation
	 * @property {string} [jobTitle] Custom Title of queued item
	 *
	 * @typedef AddAdminJobOptions
	 * @type {Object}
	 * @property {import('ShareflexAddons').default} addons
	 * @property {AddInternalAdminJobToQueueOptions} [internalOptions]
	 * @property {AddPublicAdminJobToQueueOptions} [publicOptions]
	 *
	 * @typedef FunctionResult
	 * @type {Object}
	 * @property {boolean} result  If operation was successful
	 * @property {string} message  Error message if result is false
	 *
	 * @typedef StartBatchItemProcessingResult
	 * @type {Object}
	 * @property {boolean} result If start of processing was successful
	 * @property {import('ShareflexAddons').AdminJobResult} adminJobResult
	 */
	/**
	 * API for handling admin jobs.
	 */
	declare class ShareflexAdminJobs {
		/**
		 * @param {import('ShareflexRules').default} rules
		 * @param {import('ShareflexAddons').default} addons Shareflex Addons API
		 */
		constructor(rules: import('ShareflexRules').default, addons: import('ShareflexAddons').default);
		/**
		 * @private
		 * @type {import('ShareflexRules').default}
		 */
		private rules;
		/**
		 * @private
		 * @type {number}
		 */
		private heartbeatId;
		/**
		 * @private
		 * @type {import('ShareflexAddons').AdminJobResult}
		 */
		private adminJobResult;
		/**
		 * Start time to measure processing duration
		 * @private
		 * @type {number}
		 */
		private startTime;
		/**
		 * @private
		 * @type {number}
		 */
		private batchItemId;
		/**
		 * @private
		 * @type {import('ShareflexAddons').AdminJobItem}
		 */
		private jobItem;
		/** @type {import('ShareflexAddons').default} */
		addons: import('ShareflexAddons').default;
		/**
		 * Function to add an AdminJob to the queue.
		 * This AdminJob will be processed as internal job.
		 *
		 * @example
		 * const result = await shareflexJobsAPI.adminJobs.addInternalAdminJobToQueue({
		 *   aoInternalAdminJobFnName : String,  // Name of AdminJob JavaScript function (e.g. 'pe100', 'we900', 'cm100' ...)
		 *   aoOptions? : String,  // Options object value to set `aoOptions` field of created AdminJob with
		 *   jobTitle? : String,  // Custom Title of queued item
		 *   jobContextData? : String,  // Context information to be used in AdminJob implementation
		 * });
		 *
		 * result = {
		 *   result : Boolean,  // If operation was successful
		 *   message : String,  // Error message if result is false
		 * }
		 *
		 * //EXAMPLE
		 * const shareflexJobsAPI = addons.initJobsAPI();
		 * const result = await shareflexJobsAPI.adminJobs.addInternalAdminJobToQueue({
		 *   aoInternalAdminJobFnName: 'nf900',
		 *   jobTitle: myCustomTitle,
		 *   jobContextData: JSON.stringify(contextDataForAdminJob),
		 * });
		 *
		 *
		 * @param {AddInternalAdminJobToQueueOptions} options
		 * @returns {Promise<FunctionResult>}
		 */
		addInternalAdminJobToQueue(options: AddInternalAdminJobToQueueOptions): Promise<FunctionResult>;
		/**
		 * Function to add an AdminJob to the queue.
		 * This AdminJob will be processed as a public job.
		 *
		 * @example
		 * const result = await shareflexJobsAPI.adminJobs.addPublicAdminJobToQueue({
		 *   aoAdminJobTypeID : String,  // Type of public AdminJob (e.g. 'AJPE-0100', 'AJWE-0900', 'AJCM-0100' ...)
		 *   aoOptions? : String,  // Options object value to set `aoOptions` field of created AdminJob with
		 *   jobTitle? : String,  // Custom Title of queued item
		 *   jobContextData? : String,  // Context information to be used in AdminJob implementation
		 * });
		 *
		 * result = {
		 *   result : Boolean,  // If operation was successful
		 *   message : String,  // Error message if result is false
		 * }
		 *
		 * //EXAMPLE
		 * const shareflexJobsAPI = addons.initJobsAPI();
		 * const result = await shareflexJobsAPI.adminJobs.addPublicAdminJobToQueue({
		 *   aoAdminJobTypeID: 'AJNF-0900',
		 *   jobTitle: myCustomTitle,
		 *   jobContextData: JSON.stringify(contextDataForAdminJob),
		 * });
		 *
		 *
		 * @param {AddPublicAdminJobToQueueOptions} options
		 * @returns {Promise<FunctionResult>}
		 */
		addPublicAdminJobToQueue(options: AddPublicAdminJobToQueueOptions): Promise<FunctionResult>;
		/**
		 * Function to get all queued AdminJobs.
		 *
		 * @example
		 * const result = await shareflexJobsAPI.adminJobs.getQueuedJobs();
		 *
		 * result = {
		 *   internal: {
		 *     [aoInternalAdminJobFnName: string]: AdminJobQueueListItem[],  // To be executed as internal AdminJob
		 *   },
		 *   public: {
		 *     [aoAdminJobTypeID: string]: AdminJobQueueListItem[],  // To be executed as public AdminJob
		 *   },
		 * }
		 *
		 * AdminJobQueueListItem = {
		 *   Id : String,  // ListItem Id of queued item
		 *   aoContextData : String,  // Information about context which created this queued item
		 *   aoAdminJobTypeID : String,  // `aoAdminJobTypeID` to start a public AdminJob with
		 *   aoInternalAdminJobFnName : String,  // `aoInternalAdminJobFnName` to start an internal AdminJob with
		 *   aoExecutionCount : String,  // Amount of times how often this items caused an AdminJob to be started
		 * }
		 *
		 * //EXAMPLE
		 * const shareflexJobsAPI = addons.initJobsAPI();
		 * const result = await shareflexJobsAPI.adminJobs.getQueuedJobs();
		 *
		 * @returns {Promise<QueuedAdminJobs>}
		 */
		getQueuedJobs(): Promise<QueuedAdminJobs>;
		/**
		 * Function to get queued AdminJobs for a certain AdminJob definition.
		 * The AdminJob can be identified by passing internal JavaScript function name or public AdminJobTypeID
		 *
		 * @example
		 * const result = await shareflexJobsAPI.adminJobs.getQueuedJobsByName({
		 *   internalFnName? : String,  // Value of `aoInternalAdminJobFnName` (e.g. 'pe200')
		 *   typeID? : String,  // Value of `aoAdminJobTypeID` (e.g. 'AJPE-0200')
		 * });
		 *
		 * result = AdminJobQueueListItem[]
		 *
		 * AdminJobQueueListItem = {
		 *   Id : String,  // ListItem Id of queued item
		 *   aoContextData : String,  // Information about context which created this queued item
		 *   aoAdminJobTypeID : String,  // `aoAdminJobTypeID` to start a public AdminJob with
		 *   aoInternalAdminJobFnName : String,  // `aoInternalAdminJobFnName` to start an internal AdminJob with
		 *   aoExecutionCount : String,  // Amount of times how often this items caused an AdminJob to be started
		 * }
		 *
		 * //EXAMPLE
		 * const shareflexJobsAPI = addons.initJobsAPI();
		 * const result = await shareflexJobsAPI.adminJobs.getQueuedJobsByName({
		 *   internalFnName: 'nf900',
		 *   typeID: 'AJNF-0900',
		 * });
		 *
		 * @param {Object} options
		 * @param {string} [options.internalFnName]  Value of `aoInternalAdminJobFnName` (e.g. 'pe200')
		 * @param {string} [options.typeID]  Value of `aoAdminJobTypeID` (e.g. 'AJPE-0200')
		 * @returns {Promise<AdminJobQueueListItem[]>}
		 */
		getQueuedJobsByName(options: { internalFnName?: string; typeID?: string }): Promise<AdminJobQueueListItem[]>;
		/**
		 * Function to delete AdminJobQueue items by ListItem.Id array
		 *
		 * @example
		 * const result = await shareflexJobsAPI.adminJobs.deleteQueuedJobs(ItemIds);
		 *
		 * ItemIds : Number[],  // Array of AdminJobQueue ListItem.Id values to be deleted
		 *
		 * result = {
		 *   result : Boolean,  // If operation was successful
		 *   message : String,  // Error message if result is false
		 * }
		 *
		 * //EXAMPLE
		 * const shareflexJobsAPI = addons.initJobsAPI();
		 * const result = await shareflexJobsAPI.adminJobs.deleteQueuedJobs([14, 37, 38]);
		 *
		 * @param {Object} options
		 * @param {number[]} options.itemIds Array of ListItem.Id values to be deleted
		 * @returns {Promise<FunctionResult>}
		 */
		deleteQueuedJobs(options: { itemIds: number[] }): Promise<FunctionResult>;
		/**
		 * Method to initialize a contain of AdminJobBatches for an AdminJob item
		 *
		 * @example
		 * const shareflexJobs = addons.initJobsAPI();
		 * const adminJobBatches = shareflexJobs.adminJobs.createAdminJobBatches(jobItem, adminJobResult);
		 *
		 * adminJobBatches.add({...});
		 * adminJobBatches.add({...});
		 * adminJobBatches.add({...});
		 *
		 * adminJobResult = await adminJobBatches.execute();
		 *
		 * @param {import('ShareflexAddons').AdminJobItem} jobItem AdminJob item (provided by custom AdminJob function call options)
		 * @param {import('ShareflexAddons').AdminJobResult} adminJobResult AdminJob result object (provided by custom AdminJob function call options)
		 * @returns {ShareflexAdminJobBatches} Helper object to handle AdminJobBatch processing
		 */
		createAdminJobBatches(jobItem: import('ShareflexAddons').AdminJobItem, adminJobResult: import('ShareflexAddons').AdminJobResult): ShareflexAdminJobBatches;
		/**
		 * Method to start processing an AdminJobBatch item for an AdminJob
		 *
		 * @example
		 * const shareflexJobs = addons.initJobsAPI();
		 * const startProcessingResult = await shareflexJobs.adminJobs.startBatchItemProcessing({
		 *   jobItem: jobItem,
		 *   adminJobResult: adminJobResult,
		 * });
		 * if (!startProcessingResult.result) return adminJobResult;
		 *
		 * // custom logic to handle AdminJobBatch item
		 * let batchStatus = addons.adminJobStates.failed
		 * try {
		 *   const config = JSON.parse(jobItem.aoOptions);
		 *   // ...
		 *   batchStatus = addons.adminJobStates.finished
		 * } catch (error) {
		 *   adminJobResult.executionLog.push('AdminJob failed');
		 * }
		 *
		 * adminJobResult = await shareflexJobs.adminJobs.stopBatchItemProcessing({
		 *   batchStatus,
		 *   adminJobResult,
		 * });
		 *
		 * @param {Object} options
		 * @param {import('ShareflexAddons').AdminJobItem} options.jobItem AdminJob item (provided by custom AdminJob function call options)
		 * @param {import('ShareflexAddons').AdminJobResult} [options.adminJobResult] AdminJob result object (provided by custom AdminJob function call options) [default=new minimal result object]
		 * @returns {Promise<StartBatchItemProcessingResult>} Updated AdminJob result object
		 */
		startBatchItemProcessing(options: {
			jobItem: import('ShareflexAddons').AdminJobItem;
			adminJobResult?: import('ShareflexAddons').AdminJobResult;
		}): Promise<StartBatchItemProcessingResult>;
		/**
		 * Function to finish processing of a AdminJobBatch item
		 *
		 * @example
		 * const shareflexJobs = addons.initJobsAPI();
		 * const startProcessingResult = await shareflexJobs.adminJobs.startBatchItemProcessing({
		 *   jobItem: jobItem,
		 *   adminJobResult: adminJobResult,
		 * });
		 * if (!startProcessingResult.result) return adminJobResult;
		 *
		 * // custom logic to handle AdminJobBatch item
		 * let batchStatus = addons.adminJobStates.failed
		 * try {
		 *   const config = JSON.parse(jobItem.aoOptions);
		 *   // ...
		 *   batchStatus = addons.adminJobStates.finished
		 * } catch (error) {
		 *   adminJobResult.executionLog.push('AdminJob failed');
		 * }
		 *
		 * adminJobResult = await shareflexJobs.adminJobs.stopBatchItemProcessing({
		 *   batchStatus,
		 *   adminJobResult,
		 * });
		 *
		 * @param {Object} options
		 * @param {*} options.batchStatus Final status value of processed AdminJobBatch item
		 * @param {import('ShareflexAddons').AdminJobResult} [options.adminJobResult] AdminJob result object [default=Object provided by adminJobs.startBatchItemProcessing()]
		 * @returns {Promise<import('ShareflexAddons').AdminJobResult>} Updated AdminJob result object
		 */
		stopBatchItemProcessing(options: { batchStatus: any; adminJobResult?: import('ShareflexAddons').AdminJobResult }): Promise<import('ShareflexAddons').AdminJobResult>;
	}
	/**
	 * API for handling transaction jobs.
	 *
	 * Transaction jobs are persisted in the List 'Administration/Lists/aoTransactionJobs'.
	 */
	declare class ShareflexTransactionJobs {
		/**
		 * @param {import('ShareflexRules').default} rules
		 * @param {import('ShareflexAddons').default} addons
		 */
		constructor(rules: import('ShareflexRules').default, addons: import('ShareflexAddons').default);
		/** @private */ private addons;
		/** @private */ private rules;
		/** @private */ private heartbeatId;
		/** @private */ private urls;
		/**
		 * Create a new job definition set to perform.
		 *
		 * Functions that are called within the job steps must be exported from 'aoSite_Module_TransactionJobs_CUSTOM'
		 *
		 * @example
		 * const shareflexJobs = addons.initJobsAPI();
		 * const jobDefinitionSet = shareflexJobs.transactionJobs.createJobDefinitionSet();
		 *
		 *	jobDefinitionSet.add({
		 *		title: `Example transaction job`,
		 *		job: {
		 *			steps: [
		 *				{ stepId: 100, functionName: 'example100', label: 'Example Function 100' },
		 *				{ stepId: 200, functionName: 'example200', label: 'Example Function 300' },
		 *				{ stepId: 300, functionName: 'example200', label: 'Example Function 200' },
		 *			],
		 *		},
		 *		inputData: {
		 *			inputText: 'Example run',
		 *		},
		 *		contextItemPrimaryKey: 'n/a',
		 *	})
		 *
		 *	await jobDefinitionSet.execute({
		 *		performSynchronously: true,
		 *	})
		 * @returns {ShareflexTransactionJobDefinitionSet}
		 */
		createJobDefinitionSet(): ShareflexTransactionJobDefinitionSet;
		/**
		 * Execute a job definition set
		 *
		 * Functions that are called within the job steps must be exported from 'aoSite_Module_TransactionJobs_CUSTOM'
		 *
		 * @example
		 * const shareflexJobs = addons.initJobsAPI();
		 * const jobDefinitionSet = shareflexJobs.transactionJobs.createJobDefinitionSet();
		 *
		 *	jobDefinitionSet.add({
		 *		title: `Example transaction job`,
		 *		job: {
		 *			steps: [
		 *				{ stepId: 100, functionName: 'example100', label: 'Example Function 100' },
		 *				{ stepId: 200, functionName: 'example200', label: 'Example Function 300' },
		 *				{ stepId: 300, functionName: 'example200', label: 'Example Function 200' },
		 *			],
		 *		},
		 *		inputData: {
		 *			inputText: 'Example run',
		 *		},
		 *		contextItemPrimaryKey: 'n/a',
		 *	})
		 *
		 *	await jobDefinitionSet.execute({
		 *		performSynchronously: true, // Default = true
		 *	})
		 * @param {TransactionJobExecuteSetOptions} options
		 * @returns {Promise<string[]>}
		 */
		executeJobDefinitionSet({ jobDefinitionSet, performSynchronously }: TransactionJobExecuteSetOptions): Promise<string[]>;
		/**
		 * Perform multiple transaction jobs synchronously and  sequentially
		 * In case of an error in one transaction job the other jobs will be created and started
		 * and the timer job will be started
		 *
		 * @param {string[]} transactionJobItemIds Item Ids of the transaction job items
		 * @private
		 */
		private performMultipleTransactionJobItems;
		/**
		 * Perform an already existing transaction job
		 * @param  {string} transactionJobItemId Item Id of the transaction job item in Administration/Lists/aoTransactionJobs
		 */
		performTransactionJobItem(transactionJobItemId: string): Promise<void>;
		/**
		 * Enable the transaction timer job
		 */
		enableTransactionJobsTimerJob(): Promise<void>;
		/**
		 * Get the current status of a transaction job
		 * @param {string | number} transactionJobId
		 * @returns { Promise<TransactionJobStatus> }
		 */
		getTransactionJobStatus(transactionJobId: string | number): Promise<TransactionJobStatus>;
		/**
		 * Create multiple transaction job items in a batch in the Transaction Jobs list (aoTransactionJobs) in admin web
		 * @param {Object} options
		 * @param {TransactionJobDefinition[]} options.jobDefinitions
		 * @returns {Promise<string[]>}
		 * @private
		 */
		private createTransactionJobItemsInBatch;
		/**
		 * Extract the item Ids of a batch result.
		 *
		 * The batch execution must have been started with returnOperationResults: true
		 * @param {import('ShareflexRules').ExecuteResult} batchResult
		 * @private
		 * @returns {string[]}
		 */
		private extractItemIdsFromBatchResult;
		/**
		 * Create a field update item for Shareflex Rules API to create a transaction job item
		 * @param {TransactionJobDefinition} transactionJob
		 * @return {import('ShareflexRules').ItemFields}
		 * @private
		 */
		private createItemFields;
		/**
		 * Prepare several objects for performing a transaction job on base of a transaction job list item
		 * @param {string | number} transactionJobItemId
		 * @private
		 */
		private prepareJobData;
		/**
		 * Perform a single transaction job
		 * @param {Object} options
		 * @param {TransactionJob} options.job
		 * @param {Object} options.inputData
		 * @param {Object} options.internalData
		 * @param {number} options.lastSuccessfulStep
		 * @param {string} options.currentJobStatus
		 * @param {string | number} options.transactionJobItemId
		 * @param {string} options.executionCount
		 * @private
		 */
		private performJob;
		/**
		 * Determine if a job is performable in its current state
		 * @param {Object} options
		 * @param {string} options.currentJobStatus
		 * @private
		 */
		private isJobPerformable;
		/**
		 * Start updating the transaction job item with a heartbeat timestamp every (10) seconds
		 * @param {Object} options
		 * @param {string | number} options.transactionJobItemId
		 * @returns
		 * @private
		 */
		private startHeartbeat;
		/**
		 * Update the heartbeat
		 * @param {Object} options
		 * @param {string | number} options.transactionJobItemId
		 * @private
		 */
		private updateHeartbeat;
		/**
		 * Stop updating the transaction job item with a heartbeat timestamp
		 * @private
		 */
		private stopHeartbeat;
		/**
		 * Check if all given functionNames in the job object are implemented.
		 * Otherwise throws an error
		 * @param {TransactionJob} job
		 * @private
		 */
		private checkFunctionImplementations;
		/**
		 *	Perform unperformed steps in a job
		 * @param {Object} options
		 * @param {TransactionJob} options.job
		 * @param {Object} options.inputData
		 * @param {Object} options.internalData
		 * @param {number} options.lastSuccessfulStep
		 * @param {string | number} options.transactionJobItemId
		 * @private
		 */
		private performUnfinishedSteps;
		/**
		 * Get all steps of the job that were not processed successfully yet in ascending order (by stepId)
		 * @param {TransactionJob} job
		 * @param {number} lastSuccessfulStep
		 * @private
		 */
		private getUnprocessedStepsSorted;
		/**
		 * Perform a single step
		 * @param {TransactionJobStep} step
		 * @param {Object} inputData
		 * @param {Object} internalData
		 * @private
		 */
		private performStep;
		/**
		 * Parse a JSON string into an object. Throws an error in case of a problem
		 * @param {string} title Caption/Label to be used in error message
		 * @param {string} json JSON as string
		 * @returns
		 * @private
		 */
		private parseJSON;
		/**
		 * Persist the last successful step and the current internal data
		 * @param {TransactionJobStep} step
		 * @param {Object} internalData
		 * @param {string | number} jobItemId
		 * @private
		 */
		private persistSuccessfulStep;
		/**
		 * Set job as 'finished'
		 * @param {string | number} jobItemId
		 * @param {string} executionCount
		 * @private
		 */
		private setFinishedStatus;
		/**
		 * (Private) Get the status of a transaction job
		 * @param {string | number} jobItemId
		 * @returns {Promise<TransactionJobStatus>}
		 * @private
		 */
		private _getTransactionJobStatus;
		/**
		 * Handle a error in performJob
		 * @param {string | number} jobItemId
		 * @param {any} err
		 * @private
		 */
		private handleError;
		/**
		 * Gets the next execution count on base of the current
		 * @param {string} count
		 * @returns
		 * @private
		 */
		private getNextCount;
	}
	/**
	 * Class to represent a set of transaction job definitions
	 * @private
	 */
	declare class ShareflexTransactionJobDefinitionSet {
		/**
		 * Create a new job definition set
		 * @param {import('ShareflexRules').default} rules
		 * @param {ShareflexTransactionJobs} transactionJobsAPI
		 */
		constructor(rules: import('ShareflexRules').default, transactionJobsAPI: ShareflexTransactionJobs);
		/** @private */ private rules;
		/** @private */ private transactionJobsAPI;
		/** @private */ private urls;
		/**
		 * @type {TransactionJobDefinition[]}
		 * @private
		 * */ private jobDefinitions;
		/**
		 * Add a job definition (or an array of job definitions) to the job definition set
		 *
		 * @example
		 * const shareflexJobs = addons.initJobsAPI();
		 * const jobDefinitionSet = shareflexJobs.transactionJobs.createJobDefinitionSet();
		 *
		 * jobDefinitionSet.add(...);
		 * jobDefinitionSet.add(...);
		 *
		 * await jobDefinitionSet.execute({
		 * 	performSynchronously: true //(DEFAULT = true)
		 * });
		 *
		 * @param {TransactionJobDefinition} jobDefinition
		 */
		add(jobDefinition: TransactionJobDefinition): void;
		/**
     * Get all job definitions from the set
     
    * @example
     * const shareflexJobs = addons.initJobsAPI();
     * const jobDefinitionSet = shareflexJobs.transactionJobs.createJobDefinitionSet();
     *
     * jobDefinitionSet.add(...);
     * jobDefinitionSet.add(...);
     *
     * const jobs = jobDefinitionSet.getAllJobDefinitions();
     *
     * @returns {TransactionJobDefinition[]}
     */
		getAllJobDefinitions(): TransactionJobDefinition[];
		/**
		 * Execute the job definition.
		 *
		 * @example
		 * const shareflexJobs = addons.initJobsAPI();
		 * const jobDefinitionSet = shareflexJobs.transactionJobs.createJobDefinitionSet();
		 *
		 * jobDefinitionSet.add(...);
		 * jobDefinitionSet.add(...);
		 *
		 * await jobDefinitionSet.execute({
		 * 	performSynchronously: true //(DEFAULT = true)
		 * });
		 *
		 * @param {TransactionJobDefinitionSetExecuteOptions} [options]
		 * @return {Promise<string[]>}
		 */
		execute(options?: TransactionJobDefinitionSetExecuteOptions): Promise<string[]>;
	}
	/**
	 * @typedef AdminJobBatchAddOptions
	 * @type {Object}
	 * @property {Object} batchConfig Custom object to be used for single batch processing (stringified to aoBatchConfigJSON). Can be passed as `Object` or `String`
	 * @property {string} [batchTitle] Custom `Title` of AdminJobBatch item
	 */
	/**
	 * @typedef AdminJobBatchItemConfig
	 * @type {Object}
	 * @property {string} batchConfig Stringified custom object to be used for single batch processing (aoBatchConfigJSON value)
	 * @property {string} [batchTitle] Custom `Title` of AdminJobBatch item
	 */
	/**
	 * @typedef RelevantTimerjobConfigurationItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {boolean} TimerJobEnabled
	 * @property {string} ConfigurationId
	 * @property {string} ConfigurationStatus
	 */
	/**
	 * @typedef TimerjobItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} ConfigurationId
	 * @property {string} Status
	 * @property {string} Log
	 *
	 * @typedef EnableTimerJobResult
	 * @type {Object}
	 * @property {string} timerJobConfigurationId  Id of activated TimerJob configuration
	 * @property {boolean} configFileIsEnabled  If TimerJob is enabled now
	 * @property {boolean} configFileHasBeenEnabled  If this function call did enable the TimerJob (otherwise it already was enabled)
	 */
	declare class ShareflexAdminJobBatches {
		/**
		 * @param {import('ShareflexRules').default} rules Shareflex Rules API
		 * @param {import('ShareflexAddons').AdminJobItem} jobItem AdminJob item (provided by custom AdminJob function call options)
		 * @param {import('ShareflexAddons').AdminJobResult} adminJobResult AdminJob result object (provided by custom AdminJob function call options)
		 */
		constructor(rules: import('ShareflexRules').default, jobItem: import('ShareflexAddons').AdminJobItem, adminJobResult: import('ShareflexAddons').AdminJobResult);
		/**
		 *  @private
		 * @type {import('ShareflexRules').default}
		 */
		private rules;
		/**
		 * @private
		 * @type {import('ShareflexAddons').AdminJobItem}
		 *  */
		private jobItem;
		/**
		 * @private
		 * AdminJobBatch configs to be created
		 * @type {AdminJobBatchItemConfig[]}
		 */
		private batchConfigs;
		/**
		 * @private
		 * @type {import('ShareflexAddons').default}
		 */
		private addons;
		/**
		 * @private
		 * @type {import('ShareflexAddons').AdminJobResult}
		 */
		private adminJobResult;
		/**
		 * Method to add AdminJobBatches item to be created via ShareflexAdminJobBatches.execute()
		 *
		 * @example
		 * const shareflexJobs = addons.initJobsAPI();
		 * const adminJobBatches = shareflexJobs.adminJobs.createAdminJobBatches(jobItem, adminJobResult);
		 *
		 * adminJobBatches.add({...});
		 * adminJobBatches.add({...});
		 * adminJobBatches.add({...});
		 *
		 * adminJobResult = await adminJobBatches.execute();
		 *
		 * @param {AdminJobBatchAddOptions} options Properties of AdminJobBatch item to be created
		 */
		add(options: AdminJobBatchAddOptions): void;
		/**
		 * Create all AdminJobBatches if required and ensure activated AdminJobs Timerjob
		 *
		 * @example
		 * const shareflexJobs = addons.initJobsAPI();
		 * const adminJobBatches = shareflexJobs.adminJobs.createAdminJobBatches(jobItem, adminJobResult);
		 *
		 * adminJobBatches.add({...});
		 * adminJobBatches.add({...});
		 * adminJobBatches.add({...});
		 *
		 * adminJobResult = await adminJobBatches.execute();
		 *
		 * @returns {Promise<import('ShareflexAddons').AdminJobResult>} Updated AdminJob result object
		 */
		execute(): Promise<import('ShareflexAddons').AdminJobResult>;
	}
}
