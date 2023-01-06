/// <reference path="../@types/ShareflexRules.d.ts" />
/// <reference path="../@types/ShareflexAddons.d.ts" />
declare module 'ShareflexFlow' {
	/**
	 * Function to get operations to update all internal references of Steps.
	 *
	 * _NOTE:_ currently only relevant to fix weSteps 'S-800' items
	 *
	 * @param {Object} options
	 * @param  {import('ShareflexRules').default} options.rules  Shareflex Rules JS API object
	 * @param {string} options.listUrl Url of Steps list
	 * @param {import('ShareflexFlow').StepListItem[]} options.allStepItems  All weSteps items
	 * @returns {import('ShareflexFlow').GetStepReferenceUpdatesResult}
	 */
	export function getStepReferenceUpdates(options: {
		rules: import('ShareflexRules').default;
		listUrl: string;
		allStepItems: import('ShareflexFlow').StepListItem[];
	}): import('ShareflexFlow').GetStepReferenceUpdatesResult;
	/**
	 * ShareflexFlow module.
	 * @module ShareflexFlow
	 */
	/** Generic  *********************************/
	/**
	 * Object with absolute urls all relevant Shareflex flow lists
	 *
	 * @typedef ListsObject
	 * @type {Object}
	 * @property {string} definitions  Absolute url from list weDefinitions
	 * @property {string} steps  Absolute url from list weSteps
	 * @property {string} stepChoices  Absolute url from list weStepChoices
	 * @property {string} stepChoiceConditions  Absolute url from list weStepChoiceConditions
	 * @property {string} actions  Absolute url from list weActions
	 * @property {string} variables  Absolute url from list weVariables
	 * @property {string} bindings  Absolute url from list weDefinitionBindings
	 * @property {string} instances  Absolute url from list weInstances
	 * @property {string} states  Absolute url from list weStates
	 * @property {string} publicConfigs  Absolute url from list aoPublicConfigurations
	 * @property {string} triggers  Absolute url from list weWorkflowTriggers
	 * @property {string} emailTemplates  Absolute url from list EMailTemplates
	 * @property {string} outgoingEMails  Absolute url from list OutgoingEMails
	 * @property {string} setPermissions  Absolute url form list peSetPermissions
	 *
	 */
	/**
	 * @typedef InstanceCache
	 * @type {Object}
	 * @property { { [varName: string]: any } } [variables]  All variables with name (object key) and resolved value
	 * @property {*} [instanceItemID]  Item ID of flow instance item (Administration web)
	 * @property {FlowBlockJSON} [history]  Workflow history chain
	 * @property { { [templateID: string]: EmailTemplateObject } } [emailTemplates]  Mail templates
	 */
	/**
	 * @typedef BasicListItemInfo
	 * @type {Object}
	 * @property {string} listUrl
	 * @property {number} itemId
	 */
	/**
	 * Context information for flow instance items
	 *
	 * @typedef InstanceItemsInfo
	 * @type {Object}
	 * @property {BasicListItemInfo} adminWeb
	 * @property {BasicListItemInfo} contextWeb
	 */
	/**
	 * Helper object with valid values for weStateStatus field
	 *
	 * @typedef StateStatusObject
	 * @type {Object}
	 * @property {string} active
	 * @property {string} waiting
	 * @property {string} finished
	 */
	/**
	 * @typedef TaskStatus
	 * @type {Object}
	 * @property {string} notStarted
	 * @property {string} completed
	 */
	/**
	 * This describes the properties of an SharePoint user field
	 *
	 * @typedef UserGroupField
	 * @type {Object}
	 * @property {number} [Id]  Id of the user or group
	 * @property {string} [Title]  Displayname of the user or group
	 * @property {string} [Name]  LoginName of the user or group
	 *
	 */
	/**
	 * This describes the configuration item for a workflow definition
	 * @typedef DefinitionListItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} weDefinitionID
	 * @property {UserGroupField} weAdministrator
	 * @property {UserGroupField} weClearing
	 * @property {string} weBindingUrls
	 * @property {string} wePreEmailFunction
	 * @property {{Url: string, Description: string}} weChartUrl
	 * @property {string} weComment
	 */
	/**
	 * This describes the configuration item for a workflow step
	 * @typedef StepListItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} weDefinitionID
	 * @property {string} weStepID
	 * @property {string} weStepNo
	 * @property {string} weStepType
	 * @property {string} weStepConfigJSON  Stringified StepConfigJSON object
	 * @property {string} weComment
	 */
	/**
	 * @typedef StepLookup
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} weStepID
	 */
	/**
	 * This describes the configuration item for a workflow step choice
	 * @typedef StepChoiceListItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} weDefinitionID
	 * @property {string} weStepID
	 * @property {string} weStepChoiceID
	 * @property {StepLookup} weTargetStep
	 * @property {number} weOrder
	 * @property {string} weComment
	 * @property {string} weStepChoiceConfigJSON
	 * @property {string} aoChangeTracker
	 */
	/**
	 * This describes the configuration item for a workflow action
	 * @typedef ActionListItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} weDefinitionID
	 * @property {string} weStepID
	 * @property {string} weStepChoiceID
	 * @property {string} weStepChoiceConditionID
	 * @property {string} weActionID
	 * @property {string} weActionType
	 * @property {string} weActionTrigger
	 * @property {number} weOrder
	 * @property {string} weComment
	 * @property {string} weActionConfigJSON
	 * @property {string} aoChangeTracker
	 */
	/**
	 * @typedef StepChoiceSelectionLookup
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} [weStepChoiceID]
	 */
	/**
	 * This describes the configuration item for a step choice condition
	 * @typedef StepChoiceConditionListItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} weDefinitionID
	 * @property {string} weStepID
	 * @property {string} weStepChoiceConditionID
	 * @property {string} weStepChoiceConditionType
	 * @property {string} weAnswerCountTarget
	 * @property {StepChoiceSelectionLookup} weStepChoiceSelection
	 * @property {string} weStepChoiceConditionFunction
	 * @property {number} weOrder
	 * @property {string} weComment
	 * @property {string} aoChangeTracker
	 */
	/**
	 * @typedef DefinitionBindingListItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} weDefinitionID
	 * @property {string} weBindingID
	 * @property {boolean} weActive
	 * @property {string} weStartEvent
	 * @property {string} weStartEvent
	 * @property {StepLookup} weStartStep
	 * @property {StepLookup} weEndStep
	 * @property {string} weContextListUrl
	 * @property {string} weTaskListUrl
	 * @property {string} weTaskStatusCompletedValue
	 * @property {string} weContextPrimaryKeyFieldName
	 * @property {string} weTaskFolderPath
	 * @property {boolean} weDeleteWorkflowTasks
	 * @property {string} weStartEventContextFieldName
	 * @property {string} weStartEventContextFieldValue
	 * @property {string} weStartEventFunctionName
	 * @property {string} weStartEventFormulaString
	 * @property {string} weStartEventManualOptionsJSON
	 */
	/**
	 * @typedef InstanceListItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} weDefinitionID
	 * @property {string} weBindingID
	 * @property {string} weInstanceID
	 * @property {string} weStartEvent
	 * @property {string} weContextListUrl
	 * @property {string} weContextItemID
	 * @property {string} weInstanceConfigJSON
	 * @property {string} weInstanceVariablesJSON
	 * @property {string} weStateProgressJSON
	 * @property {string} weWorkflowHistoryJSON
	 */
	/**
	 * @typedef ShareflexFlowWorkflowListItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} weCurrentState
	 * @property {string} weStartEvent
	 * @property {string} weInstanceID
	 * @property {string} weStartDate
	 * @property {string} weEndDate
	 * @property {string} weContextListUrl
	 * @property {string} weContextItemID
	 * @property {string} wePrimaryKey
	 * @property {string} weInstanceConfigJSON
	 * @property {string} weWorkflowHistoryJSON
	 * @property {string} weManualStartOptionJSON
	 * @property {string} weLog
	 * @property {string} weCycleTime
	 * @property {UserGroupField} Author
	 */
	/**
	 * @typedef WorkflowStartButtonOptionOptionsHooks
	 * @type {Object}
	 * @property {string} onClick
	 */
	/**
	 * @typedef WorkflowStartButtonOptionOptions
	 * @type {Object}
	 * @property {string} iconName
	 * @property {boolean|string} deactivated
	 * @property {boolean|string} hidden
	 * @property {WorkflowStartButtonOptionOptionsHooks} hooks
	 */
	/**
	 * @typedef WorkflowStartFormFormField
	 * @type {Object}
	 * @property {boolean} show
	 * @property {boolean} required
	 */
	/**
	 * @typedef WorkflowStartFormFormFields
	 * @type {Object}
	 * @property {WorkflowStartFormFormField} Title
	 * @property {WorkflowStartFormFormField} weResponsible
	 * @property {WorkflowStartFormFormField} weDueDate
	 * @property {WorkflowStartFormFormField} weComment
	 */
	/**
	 * @typedef WorkflowStartFormOptionsHooks
	 * @type {Object}
	 * @property {string} onOpen
	 * @property {string} onSave
	 */
	/**
	 * @typedef WorkflowStartFormOptions
	 * @type {Object}
	 * @property {WorkflowStartFormFormFields} formFields
	 * @property {WorkflowStartFormOptionsHooks} hooks
	 * @property {boolean} selfAssignment
	 */
	/**
	 * @typedef StartEventManualOptions
	 * @type {Object}
	 * @property {Boolean} allowMultiInstances
	 * @property {WorkflowStartButtonOptionOptions} workflowStartButtonOptionOptions
	 * @property {WorkflowStartFormOptions} workflowStartFormOptions
	 */
	/**
	 * @typedef UpdateFieldObject
	 * @type {Object}
	 * @property {string} name
	 * @property {string} type
	 * @property {*} value
	 */
	/**
	 * @typedef ActionType100
	 * @type {Object}
	 * @property {boolean} eventsActivated	[default=false]
	 * @property {boolean} incrementVersion [default=true]
	 * @property {UpdateFieldObject[]} updateFields
	 * @property {string} formDataContextItemField
	 * @property {string} formDataContextItemValue
	 */
	/**
	 * @typedef ActionType110
	 * @type {Object}
	 * @property {boolean} eventsActivated	[default=false]
	 * @property {boolean} incrementVersion [default=false]
	 * @property {UpdateFieldObject[]} updateFields
	 * @property {string} formDataTaskItemField
	 * @property {string} formDataTaskItemValue
	 */
	/**
	 * @typedef SendMailRecipients
	 * @type {Object}
	 * @property {FormUserObject[]} users
	 * @property {string[]} emailAddresses  Resolve workflow variable
	 * @property {string} formDataEmailAddesses
	 */
	/**
	 * @typedef SendMailTemplate
	 * @type {Object}
	 * @property {string} templateID
	 * @property {string} formDataEmailTemplate
	 */
	/**
	 * @typedef ActionType200
	 * @type {Object}
	 * @property {SendMailTemplate} template
	 * @property {string} mailSubject
	 * @property {SendMailRecipients} sendTo
	 * @property {SendMailRecipients} sendCc
	 * @property {SendMailRecipients} sendBcc
	 * @property {string} prepareFunctionName
	 */
	/**
	 * @typedef ActionType300
	 * @type {Object}
	 */
	/**
	 * @typedef ActionType310
	 * @type {Object}
	 */
	/**
	 * @typedef ActionType500
	 * @type {Object}
	 * @property {string} finishStepID
	 * @property {string} taskResult
	 * @property {string} formDataFinishSteps
	 */
	/**
	 * @typedef ActionType510
	 * @type {Object}
	 * @property {string} taskResult
	 */
	/**
	 * @typedef ActionType900
	 * @type {Object}
	 * @property {string} functionName
	 */
	/**
	 * @typedef ActionType999
	 * @type {Object}
	 * @property {string} taskResult
	 */
	/**
	 * @typedef ActionTypeConfig
	 * @type {Object}
	 * @property {ActionType100} [A-100]  Update context item
	 * @property {ActionType110} [A-110]  Update workflow task
	 * @property {ActionType200} [A-200]  Send Mail
	 * @property {ActionType300} [A-300]  Set context item permissions
	 * @property {ActionType310} [A-310]  Set workflow task permissions
	 * @property {ActionType500} [A-500]  Finish Open Tasks (Step)
	 * @property {ActionType510} [A-510]  Finish Open Tasks (All)
	 * @property {ActionType900} [A-900]  Function
	 * @property {ActionType999} [A-999]  Finish Workflow
	 */
	/**
	 * S-100 - No assignment
	 * @typedef StepType100
	 * @type {Object}
	 */
	/**
	 * @typedef FormUserObject
	 * @type {Object}
	 * @property {string} Key
	 * @property {boolean} IsResolved
	 * @property {string} DisplayText
	 */
	/**
	 * S-200 - Fixed assignment
	 * @typedef StepType200
	 * @type {Object}
	 * @property {FormUserObject[]} assignTo
	 */
	/**
	 * S-210 - User field on context item
	 * @typedef StepType210
	 * @type {Object}
	 * @property {string} contextItemUserField  SharePoint internal field name
	 * @property {string} formDataContextItemUserField  String for virtual form field
	 */
	/**
	 * @typedef ReferenceFieldsObject
	 * @type {Object}
	 * @property {string[]} contextItemFields
	 * @property {string} formDataContextItemField  String for virtual form field
	 * @property {string[]} configurationItemFields
	 * @property {string} formDataConfigurationItemField  String for virtual form field
	 */
	/**
	 * S-220 - Configuration list
	 * @typedef StepType220
	 * @type {Object}
	 * @property {string} configurationListUrl
	 * @property {string} configurationItemUserField
	 * @property {string} formDataConfigurationItemUserField  String for virtual form field
	 * @property {ReferenceFieldsObject} referenceFields
	 */
	/**
	 * S-800 - Parallel steps
	 * @typedef StepType800
	 * @type {Object}
	 * @property {string} targetSteps
	 * @property {string[]} targetStepIDs
	 * @property {boolean} manualChoiceRequired
	 */
	/**
	 * S-900 - Function result (login names)
	 * @typedef StepType900
	 * @type {Object}
	 * @property {string} functionName
	 */
	/**
	 * @typedef StepTypeConfig
	 * @type {Object}
	 * @property {StepType100} [S-100]  No assignment
	 * @property {StepType200} [S-200]  Fix assignment
	 * @property {StepType210} [S-210]  User Field on context item
	 * @property {StepType220} [S-220]  Configuration List
	 * @property {StepType800} [S-800]  Parallel Steps
	 * @property {StepType900} [S-900]  Function result (Login names)
	 */
	/**
	 * @typedef StepTaskHooks
	 * @type {Object}
	 * @property {string} onOpen
	 * @property {string} onSave
	 */
	/**
	 * @typedef StepTaskOptions
	 * @type {Object}
	 * @property {boolean} extractGroupMembers
	 * @property {number|string} dueInDays
	 * @property {boolean} showLastComment
	 * @property {boolean} allowDelegation
	 * @property {StepTaskHooks} hooks
	 */
	/**
	 * @typedef StepContextItemHooks
	 * @type {Object}
	 * @property {string} onOpen
	 */
	/**
	 * @typedef StepContextItemOptions
	 * @type {Object}
	 * @property {'Disp'|'Disp+Edit'|'Edit'} formMode
	 * @property {StepContextItemHooks} hooks
	 */
	/**
	 * @typedef StepNotificationOptions
	 * @type {Object}
	 * @property {boolean} sendMail
	 * @property {SendMailTemplate} template
	 * @property {string} preEmailFunction
	 */
	/**
	 * @typedef StepNextStepOptions
	 * @type {Object}
	 * @property {boolean} finishedByFirstAnswer
	 */
	/**
	 * @typedef StepProcessVisualisationOptions
	 * @type {Object}
	 * @property {string} svgShapeNodeID
	 * @property {string} svgShapeNodeStyle
	 */
	/**
	 * @typedef StepConfigJSON
	 * @type {Object}
	 * @property {boolean} waitForPredecessors
	 * @property {StepTypeConfig} typeOptions
	 * @property {StepTaskOptions} taskOptions
	 * @property {StepContextItemOptions} contextItemOptions
	 * @property {StepNotificationOptions} notificationOptions
	 * @property {StepNextStepOptions} nextStepOptions
	 * @property {StepProcessVisualisationOptions} processVisualisationOptions
	 * @property {string} comment
	 */
	/**
	 * @typedef StepChoiceTaskHooks
	 * @type {Object}
	 * @property {string} onSave
	 */
	/**
	 * @typedef StepChoiceTargetStepOptions
	 * @type {Object}
	 * @property {string} [stepNo] StepNo, added while creating a flow instance
	 * @property {string} stepID
	 * @property {string} assigmentOverloadTypeCode
	 */
	/**
	 * @typedef StepChoiceTaskOptions
	 * @type {Object}
	 * @property {boolean} commentRequired
	 * @property {StepChoiceTaskHooks} hooks
	 */
	/**
	 * @typedef StepChoiceConfigJSON
	 * @type {Object}
	 * @property {StepChoiceTargetStepOptions} targetStepOptions
	 * @property {StepChoiceTaskOptions} taskFormOptions
	 */
	/**
	 * @typedef GetBindingsOptions
	 * @type {Object}
	 * @property {string} contextListUrl  Absolute list url
	 * @property {boolean} [isManual]  Filter by event type equal E-100 - Manually otherwise not equal [default=false]
	 */
	/**
	 * @typedef CheckWorkflowStartResult
	 * @type {Object}
	 * @property {boolean} started
	 * @property {Object} instanceProperties // ShareflexInstances Item Id  url..
	 */
	/**
	 * @typedef GetActiveWorkflowInstancesOptions
	 * @type {Object}
	 * @property {string} contextListUrl  Relative list url of workflow context item
	 * @property {number|string} contextItemID  SharePoint item id of the workflow context item
	 */
	/**
	 * @typedef WorkflowInstanceUserLookupItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} Name
	 */
	/**
	 * @typedef WorkflowInstanceDefinitionItem
	 * @type {Object}
	 * @property {string} Title
	 * @property {WorkflowInstanceUserLookupItem} weAdministrator
	 * @property {WorkflowInstanceUserLookupItem} weClearing
	 * @property {string} wePreEmailFunction
	 * @property {string} weChartUrl
	 * @property {string} weComment
	 */
	/**
	 * @typedef WorkflowInstanceStepLookupItem
	 * @type {Object}
	 * @property {string} Title
	 * @property {string} weStepNo
	 * @property {string} weStepID
	 */
	/**
	 * @typedef WorkflowInstanceDefinitionBindingItem
	 * @type {Object}
	 * @property {string} Title
	 * @property {string} weStartEvent
	 * @property {WorkflowInstanceStepLookupItem} weStartStep
	 * @property {WorkflowInstanceStepLookupItem} weEndStep
	 * @property {string} weContextListUrl
	 * @property {string} weTaskListUrl
	 * @property {string} weTaskStatusCompletedValue
	 * @property {string} weContextPrimaryKeyFieldName
	 * @property {string} weTaskFolderPath
	 * @property {boolean} weDeleteWorkflowTasks
	 */
	/**
	 * @typedef WorkflowInstanceStepItem
	 * @type {Object}
	 * @property {string} Title
	 * @property {string} weStepNo
	 * @property {string} weStepID
	 * @property {string} weStepType
	 * @property {StepConfigJSON} weStepConfigJSON
	 * @property {string} weComment
	 * @property {string[]} [predecessors] Array of StepNo of all direct predecessor steps, add be creating weInstanceConfigJSON
	 */
	/**
	 * @typedef WorkflowInstanceStepChoiceItem
	 * @type {Object}
	 * @property {string} Title
	 * @property {string} weStepID
	 * @property {string} weStepChoiceID
	 * @property {WorkflowInstanceStepLookupItem} weTargetStep
	 * @property {string} weStepChoiceConfigJSON
	 * @property {number} weOrder
	 * @property {string} weComment
	 */
	/**
	 * @typedef WorkflowInstanceStepChoiceSelectionLookupItem
	 * @type {Object}
	 * @property {string} Title
	 * @property {string} weStepChoiceID
	 */
	/**
	 * @typedef WorkflowInstanceStepChoiceConditionItem
	 * @type {Object}
	 * @property {string} Title
	 * @property {string} weStepID
	 * @property {string} weStepChoiceConditionID
	 * @property {string} weStepChoiceConditionType
	 * @property {string} weAnswerCountTarget
	 * @property {WorkflowInstanceStepChoiceSelectionLookupItem} weStepChoiceSelection
	 * @property {string} weStepChoiceConditionFunction
	 * @property {number} weOrder
	 * @property {string} weComment
	 */
	/**
	 * @typedef WorkflowInstanceActionItem
	 * @type {Object}
	 * @property {string} Title
	 * @property {string} weStepID
	 * @property {string} weStepChoiceID
	 * @property {string} weStepChoiceConditionID
	 * @property {string} weActionID
	 * @property {string} weActionType
	 * @property {string} weActionTrigger
	 * @property {string} weActionConfigJSON
	 * @property {number} weOrder
	 * @property {string} weComment
	 */
	/**
	 * @typedef WorkflowInstanceVariableItem
	 * @type {Object}
	 * @property {string} Title
	 * @property {string} weVarValue
	 * @property {string} weComment
	 * @property {string} weVariableConfigJSON
	 */
	/**
	 * @typedef VariableListItem
	 * @type { WorkflowInstanceVariableItem & { weDefinitionID: string, weSystemVar: boolean } }
	 */
	/**
	 * @typedef WorkflowInstanceActionConfigItem
	 * @type {Object}
	 * @property {string} weActionID
	 * @property {string} weActionTrigger
	 * @property {number} weOrder
	 */
	/**
	 * @typedef WorkflowInstanceStepChoiceConfigItem
	 * @type {Object}
	 * @property {string} title
	 * @property {string} weStepChoiceID
	 * @property {number} weOrder
	 * @property {WorkflowInstanceActionConfigItem[]} actions
	 */
	/**
	 * @typedef WorkflowInstanceStepChoiceConditionConfigItem
	 * @type {Object}
	 * @property {string} weStepChoiceConditionID
	 * @property {number} weOrder
	 * @property {WorkflowInstanceActionConfigItem[]} actions
	 */
	/**
	 * @typedef WorkflowInstanceConfigurationData
	 * @type {Object}
	 * @property {{[stepID: string]: WorkflowInstanceStepItem}} steps
	 * @property {{[stepChoiceID: string]: WorkflowInstanceStepChoiceItem}} stepChoices
	 * @property {{[stepChoiceConditionID: string]: WorkflowInstanceStepChoiceConditionItem}} stepChoiceConditions
	 * @property {{[actionID: string]: WorkflowInstanceActionItem}} actions
	 * @property {{[title: string]: WorkflowInstanceVariableItem}} [variables]
	 */
	/**
	 * @typedef WorkflowInstanceStepConfigItem
	 * @type {Object}
	 * @property {string} title
	 * @property {string} weStepID
	 * @property {WorkflowInstanceStepChoiceConfigItem[]} choices
	 * @property {WorkflowInstanceStepChoiceConditionConfigItem[]} choiceConditions
	 * @property {WorkflowInstanceActionConfigItem[]} actions
	 * @property {ParallelStepContext} [parallelStepContext]  Information about parallel execution if this step has sibling steps (started by S-800 - Parallel Steps)
	 */
	/**
	 * @typedef StateConfigJSON
	 * @type {Object}
	 * @property {string} instanceID
	 * @property {string} stateID
	 * @property {WorkflowInformation} parameters
	 * @property {WorkflowItemContext} itemContext
	 * @property {WorkflowTaskContext} taskConfiguration
	 * @property {WorkflowInstanceStepConfigItem} step
	 * @property {WorkflowInstanceConfigurationData} configurationData
	 * @property {ParallelStepContext} [parallelStepContext]  Information about parallel execution if this state is part of a 'Parallel step' construct (S-800)
	 */
	/**
	 * @typedef CompletedByObject
	 * @type {Object}
	 * @property {string} email
	 * @property {string} displayName
	 * @property {string} loginName
	 */
	/**
	 * @typedef ParallelStepContext
	 * @type {Object}
	 * @property {string} parentStepNo  Step of type S-800
	 * @property {string[]} childStepsNo  All possible steps for parallel execution
	 * @property {string[]} notRelevantChildStepsNo  Optional steps that were not selected by user
	 */
	/**
	 * @typedef TaskCompletedJSON
	 * @type {Object}
	 * @property {number} taskItemID
	 * @property {string} taskTitle
	 * @property {string} currentStepID
	 * @property {string} stepChoiceID
	 * @property {ParallelStepContext} [parallelStepContext]  Information about parallel execution if choosen choice(s) are part of parallel step
	 * @property {string[]} nextStepIDs
	 * @property {boolean} isDelegated
	 * @property {FormUserObject[]} delegateTo
	 * @property {{displayName: string, loginName: string}} assignedTo
	 * @property {CompletedByObject} completedBy
	 * @property {{[stepChoiceIDStepID: string]: FormUserObject[]}} adhocUsers  Key = stepChoiceID|stepID
	 * @property {string} comment
	 * @property {string} result
	 * @property { "action" | "start state" } [triggeredBy] 'action' | 'start state'
	 * @property {string} [adhocDueDate] Overload due date (e.g. provided by manual start form 'start state')
	 */
	/**
	 * @typedef TriggerConfiguration
	 * @type {Object}
	 * @property {string} cycleTime
	 * @property {string} stateID
	 * @property {StateConfigJSON} stateConfigJSON
	 * @property {TaskCompletedJSON} taskCompletedJSON
	 * @property {string} [utcTimestamp] UTC-0 timestamp of trigger creation
	 */
	/**
	 * @typedef HandleWorkflowStartOptions
	 * @type {Object}
	 * @property {string} contextListUrl  Relative list url of the context item
	 * @property {number|string} contextItemID  SharePoint list item id of the context item
	 * @property {string} eventType  Event type of the context item
	 * @property {Object[]} [bindings]  Workflow definition configuration items
	 * @property {boolean} [isManual]  Filter by event type equal E-100 - Manually otherwise not equal [default=false]
	 * @property {ManualStartOptionJSON} [manualStartOptions] Options of manual start
	 * @property {string} [initiatorAccount]  Loginname of the user who created the workflow start formular
	 * @property {{responsible: string[], creator: string}} [overloadUsers]  Loginname of the user who started the workflow and responsible if set
	 * @property {string} [bindingID]  Relevant binding for manual workflow
	 * @property {number|string} [startItemId] SharePoint item id of the start form item
	 * @property {string} [utcTimestamp] UTC-0 timestamp of trigger creation
	 * @property {string} listUrl
	 */
	/**
	 * @typedef ManualOptionsJSON
	 * @type {Object}
	 * @property {boolean} active
	 * @property {string} title
	 * @property {string} weDefinitionID
	 * @property {string} weBindingID
	 * @property {string} weContextListUrl
	 * @property {string} weContextPrimaryKeyFieldName
	 * @property {string} weStartStepNo
	 * @property {{Url: string, Description: string}} weChartUrl
	 * @property {StartEventManualOptions} weStartEventManualOptionsJSON
	 */
	/**
	 * @typedef WorkflowButtonConfig
	 * @type {Object}
	 * @property {boolean} [showInWorkflowContext]  Display also in the context of a workflow task [Default=false]
	 * @property {string} [commandTitle]  Title of the toolbar command (button)
	 * @property {string} [commandIcon] Name of Fluent UI Icon https://developer.microsoft.com/en-us/fabric#/styles/web/icons
	 */
	/**
	 * @typedef ManualWorkflowConfigProps
	 * @type {Object}
	 * @property {string} title
	 * @property {string} workflowName
	 * @property {string} weID
	 * @property {{Url: string, Description: string}} weWFChartUrl
	 * @property {string} weAssociationID
	 * @property {string} weList
	 * @property {string} wePrimaryKeyField
	 * @property {string} weStepNo
	 * @property {boolean} allowMultiInstances
	 * @property {WorkflowStartFormOptions} formConfig
	 * @property {WorkflowStartButtonOptionOptions} buttonOptions
	 * @property {string} [itemID]
	 */
	/**
	 * @typedef WorkflowButtonClickOptions
	 * @type {Object}
	 * @property {string} hook
	 * @property {ManualWorkflowConfigProps} config
	 * @property {SF} contextItemGUI
	 * @property {{openStartForm: Function, createStartItem: Function, addNodeToHeader: Function}} workflowStartHelper
	 * @property {*} customParams
	 */
	/**
	 * @typedef WorkflowButtonHandleMenuOptions
	 * @type {Object}
	 * @property {string} hook
	 * @property {ManualWorkflowConfigProps} config
	 * @property {*} customParams
	 */
	/**
	 * @typedef ValidateStartFormOptions
	 * @type {Object}
	 * @property {string} hook
	 * @property {ManualWorkflowConfigProps} config
	 * @property {SF} contextItemGUI
	 * @property {SF} startItemGUI
	 * @property {*} customParams
	 */
	/**
	 * @typedef OpenStartFormOptions
	 * @type {Object}
	 * @property {string} hook
	 * @property {ManualWorkflowConfigProps} config
	 * @property {SF} contextItemGUI
	 * @property {SF} startItemGUI
	 * @property {{addNodeToHeader: Function}} startItemHelper
	 * @property {*} customParams
	 */
	/**
	 * @typedef UserFormField
	 * @type {Object}
	 * @property {string} Key  Loginname of user
	 * @property {string} DisplayText  Displayname of user
	 * @property {boolean} [IsResolved]  Resolve flag
	 */
	/**
	 * @typedef ManualStartOptionJSON
	 * @type {Object}
	 * @property {string} contextListUrl  Relative list url of the context item
	 * @property {number|string} contextItemID  SharePoint list item id of the context item
	 * @property {string} primaryKey  Value of primary key field (if configured)
	 * @property {string} bindingID
	 * @property {string} startStepNo
	 * @property {string} Title
	 * @property {UserFormField[]} weResponsible
	 * @property {string} weDueDate  Custom DueDate in UTC0 ISO format
	 * @property {string} weComment
	 * @property {UserFormField} startedBy User which started the workflow
	 * @property {Object} [customJSON]  Value of custom virtual fields
	 * @property {number} [triggersItemID]  SharePoint item id of trigger item (start form)
	 */
	/**
	 * @typedef PublicFlowConfigItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {ManualOptionsJSON} aoConfigJSON
	 */
	/**
	 * Options of custom function to determin Task Responsibles for step type 'S-900'
	 * @typedef TaskResponsibleCustomFunctionOptions
	 * @type {Object}
	 * @property {string} hook custom entry hook [default='S-900']
	 * @property {StateConfigJSON} stateConfig,
	 * @property {any} customOptions Custom options
	 * @property {ShareflexFlow} flow Shareflex Flow API
	 * @property {import('ShareflexAddons').default} addons Shareflex Addons API
	 */
	/**
	 * Options of custom function to determin Task Responsibles for step type 'S-900'
	 * @typedef PreEmailCustomFunctionOptions
	 * @type {Object}
	 * @property {string} hook custom entry hook [default='preEmailFunction']
	 * @property {StateConfigJSON} stateConfig,
	 * @property {any} customOptions Custom options
	 * @property {ShareflexFlow} flow Shareflex Flow API
	 * @property {import('ShareflexAddons').default} addons Shareflex Addons API
	 */
	/**
	 * @typedef StepChoiceConditionCustomFunctionOptions
	 * @type {Object}
	 * @property {string} hook
	 * @property {StateConfigJSON} stateConfig Object of current state configuration
	 * @property {any} taskCompleted Object of current state configuration
	 * @property {any} tasks
	 * @property {any} customOptions Custom options
	 * @property {ShareflexFlow} flow Shareflex Flow API
	 * @property {import('ShareflexAddons').default} addons Shareflex Addons API
	 */
	/**
	 * @typedef StepChoiceConditionCustomFunctionResult
	 * @type { { [nextStepNo: string]: string[] } }
	 */
	/**
	 * @typedef StateItem
	 * @type {Object}
	 * @property {number} Id
	 * @property { "Active" | "Waiting" | "Finished" } weStateStatus
	 */
	/**
	 * @typedef FlowTaskItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {{Name: string}} ContentType
	 * @property {string} weName
	 * @property {string} weStateID
	 * @property {string} weStateConfigJSON  stringified StateConfigJSON
	 * @property {"Not Started" | "Completed"} weTaskStatus
	 * @property {string} weCycleTime
	 * @property {string} weTaskCompletedJSON  stringified TaskCompletedJSON
	 * @property {string} weResult
	 * @property {string} Predecessors
	 * @property {string} Created
	 * @property {string} Modified
	 * @property {Object} Editor
	 * @property {string} Editor.Name
	 * @property {string} Editor.Title
	 * @property {string} weComment
	 * @property {string} aoDelegationStatus
	 * @property {string} FileRef  serverrelative path to item (e.g. '/sites/contoso/Lists/ShareflexFlowWorkflowTasks/3D49-66D5/15_.000')
	 */
	/**
	 * @typedef StepChoiceResult
	 * @type {Object}
	 * @property {string} stepID
	 * @property {Set<string>} overloadUsers
	 * @property {Set<string>} stepChoiceBy
	 */
	/**
	 * Object for StepNo (key) and loginNames of overloadUsers for this step (value)
	 * @typedef StepChoiceInfo
	 * @type { { [stepNo: string]: StepChoiceResult } }
	 */
	/**
	 * @typedef ChoiceResult
	 * @type {Object}
	 * @property {number} amount Count of all tasks completed with this choice
	 * @property {StepChoiceInfo} nextSteps All selected next steps for this choice
	 */
	/**
	 * @typedef StateCompletedResult
	 * @type { { [stepChoiceID: string]: ChoiceResult} }
	 */
	/**
	 * @typedef WorkflowInstanceVariablesObject
	 * @type {FlowVariables}
	 */
	/**
	 * @typedef EnsureWorkflowVariableResult
	 * @type {FlowVariables}
	 */
	/**
	 * @typedef EnsureWorkflowVariableObject
	 * @type {FlowVariables}
	 */
	/**
	 * @typedef WorkflowInstanceEmailTemplateObject
	 * @type {Object}
	 * @property {string} subject
	 * @property {string} header
	 * @property {string} body
	 * @property {string} footer
	 */
	/**
	 * @typedef StateSuccessorInfo
	 * @type {Object}
	 * @property {string} [stateID] ID of State, added for startable next states
	 * @property {string} stepNo Number of Step (e.g. '100')
	 * @property {string[]} stepChoiceBy LoginNames of users who have choosen this step by completing tasks of current state
	 * @property {string[]} overloadUsers LoginNames of users to assign step tasks to (to override default)
	 * @property {boolean} started If state was started (or 'Wait for predecessors')
	 */
	/**
	 * @typedef StatePredecessorInfo
	 * @type {Object}
	 * @property {string} stateID ID of State
	 * @property {string} stepNo Number of Step (e.g. '100')
	 * @property {string[]} stepChoiceBy LoginNames of users whose selection led to the current state
	 */
	/**
	 * Object to descript a completed step of a flow instance
	 * @typedef CompletedStateObject
	 * @type {Object}
	 * @property {number} index Zerobased index of state
	 * @property {string} stateID ID of State
	 * @property {string} stepID ID of Flow Step
	 * @property {string} stepNo Number indicator of step (e.g. '100')
	 * @property {ParallelStepContext} [parallelStepContext]  Information about parallel execution if state was part of parallel step
	 * @property {string[]} stepChoicesBy LoginNames of all users who have completed a task for current state (may include choices without resulting next step)
	 * @property {StatePredecessorInfo} predecessor Previous step
	 * @property {StateSuccessorInfo[]} successors All next steps
	 */
	/**
	 * Object with all states of a workflow instance and their progress chain
	 * @typedef InstanceStatesProgress
	 * @type { { [stateID: string]: CompletedStateObject } }
	 */
	/**
	 * @typedef ActionCustomFunctionOptions
	 * @type {Object}
	 * @property {string} hook
	 * @property {StateConfigJSON} stateConfig,
	 * @property {string|Object} customOptions
	 * @property {ShareflexFlow} flow
	 * @property {import('ShareflexAddons').default} addons
	 */
	/**
	 * @typedef WorkflowStartCustomFunctionOptions
	 * @type {Object}
	 * @property {string} hook
	 * @property {string} listUrl Absolute list url of context item
	 * @property {number|string} itemId SharePoint item id of context item
	 * @property {string|Object} customOptions
	 * @property {import('ShareflexAddons').default} addons
	 */
	/**
	 * @typedef TaskBasicInformation
	 * @type {Object}
	 * @property {number} Id
	 * @property {Object} AssignedTo
	 * @property {string} AssignedTo.Id
	 * @property {string} AssignedTo.Name
	 * @property {string} AssignedTo.Title
	 * @property {string} Title
	 * @property {string} weTaskStatus
	 */
	/**
	 * @typedef FlowBlockUser
	 * @type {{Key: string, DisplayText: string}}
	 */
	/**
	 * @typedef FlowContext
	 * @type {Object}
	 * @property {string} listUrl  Absolute url of context list
	 * @property {number} listItemID  ID of context ListItem
	 * @property {string} primaryKeyFieldName  Internal name of field containing the primary key of context element
	 * @property {string} primaryKeyFieldValue  Value of primary key field if primaryKeyFieldName is set
	 */
	/**
	 * @typedef FlowBlockHeader
	 * @type {Object}
	 * @property {string} title
	 * @property {string} id
	 * @property {FlowBlockUser} administrator
	 * @property {FlowBlockUser} clearing
	 * @property {FlowContext} context
	 */
	/**
	 * @typedef FlowBlockManualStart
	 * @type {Object}
	 * @property {FlowBlockUser} StartedBy
	 * @property {string} Title
	 * @property {FlowBlockUser[]} Responsible
	 * @property {string} Comment
	 */
	/**
	 * @typedef FlowBlockCreatedTasks
	 * @type {{[taskID: string]: {AssignedTo: FlowBlockUser}}}
	 */
	/**
	 * @typedef FlowBlockCompletedTasks
	 * @type {{[taskID: string]: {CompletedBy: FlowBlockUser, Result: string, Comment: string}}}
	 */
	/**
	 * @typedef FlowBlockChangedContext
	 * @type {Object}
	 * @property {string} reason
	 * @property {FlowContext} oldContext
	 * @property {FlowContext} newContext
	 */
	/**
	 * @typedef FlowNewBlockData
	 * @type {Object}
	 * @property {string} type 'manual start'|'created task'|'completed task|'changed context'|'state progress'
	 * @property {string} [stepNo]
	 * @property {string} [stateID]
	 * @property {string} [title]
	 * @property {string} [dueDate]
	 * @property {number} [sourceTaskID]
	 * @property {FlowBlockManualStart} [manualStartInfo]
	 * @property {FlowBlockCreatedTasks} [createdTasks]
	 * @property {FlowBlockCompletedTasks} [completedTasks]
	 * @property {InstanceStatesProgress} [stateProgress]
	 * @property {FlowBlockChangedContext} [changedContext]
	 */
	/**
	 * @typedef FlowBlockChainData
	 * @type {Object}
	 * @property {number} index
	 * @property {string} timestamp
	 * @property {string} hash
	 * @property {string} previousBlockHash
	 */
	/**
	 * @typedef FlowBlockData
	 * @type {FlowBlockChainData & FlowNewBlockData}
	 */
	/**
	 * @typedef FlowBlockJSON
	 * @type {Object}
	 * @property {FlowBlockHeader} flow
	 * @property {FlowBlockData[]} flowChain
	 */
	/**
	 * @typedef CompletedTasksBlockData
	 * @type {Object}
	 * @property {number[]} taskIds,
	 * @property {FlowNewBlockData} newBlockData
	 */
	/**
	 * @typedef CompletedStateTasksBlockInfo
	 * @type { { [stateID: string]: CompletedTasksBlockData } }
	 */
	/**
	 * @typedef  CreateCheckWorkflowStartJobOptions
	 * @type {Object}
	 * @property {string} listUrl  Absolute url of context list
	 * @property {number} listItemID  ID of context ListItem
	 */
	/**
	 * @typedef CheckWorkflowStartOptions
	 * @type {Object}
	 * @property {boolean} [createJob] If Workflow check has to be done async by a job item [default: false]
	 * @property {string} [listUrl]  Absolute url of context list
	 * @property {number} [listItemID]  ID of context ListItem
	 */
	/**
	 * @typedef StaticRoleDefIds
	 * @type {Object}
	 * @property {number} FullControl
	 * @property {number} Contribute
	 * @property {number} Read
	 */
	/**
	 * @typedef OpenTaskItem
	 * @type {Object}
	 * @property {number} Id
	 * @property {string} Title
	 * @property {string} weStateID
	 * @property {string} weCurrentStepID
	 * @property {string} weStateConfigJSON
	 * @property {string} weCycleTime
	 */
	/**
	 * @typedef ManualWorkflowConfig
	 * @type {{[bindingID : string]: ManualWorkflowConfigProps}}
	 */
	/**
	 * @typedef WorkflowButtonMenuItem
	 * @type {{key: string, text: string, config: ManualWorkflowConfigProps, clickHandler: *, iconProps: {iconName: string}, title: string, disabled: boolean, onClick: Function,  }}
	 */
	/**
	 * @typedef ButtonIsDeactivatedOptions
	 * @type {Object}
	 * @property {string} hook   Entry point 'isDeactivated'
	 * @property {ManualWorkflowConfigProps} config  Manually workflow start options
	 * @property {string|Object} customParams  Optional parameter of configuration item
	 */
	/**
	 * @typedef ButtonIsDeactivatedResult
	 * @type {{ deactivated: boolean, tooltip: string }}
	 */
	/**
	 * @typedef ButtonIsHiddenOptions
	 * @type {Object}
	 * @property {string} hook   Entry point 'isHidden'
	 * @property {ManualWorkflowConfigProps} config  Manually workflow start options
	 * @property {string|Object} customParams  Optional parameter of configuration item
	 */
	/**
	 * @typedef ButtonIsHiddenResult
	 * @type {boolean}
	 */
	/**
	 * @typedef ButtonOnClickOptions
	 * @type {Object}
	 * @property {string} hook   Entry point 'onClick'
	 * @property {ManualWorkflowConfigProps} config  Manually workflow start options
	 * @property {string|Object} customParams  Optional parameter of configuration item
	 * @property {SF} contextItemGUI
	 * @property  {{openStartForm: Function, createStartItem: Function, addNodeToHeader: Function}} workflowStartHelper
	 */
	/**
	 * @typedef OnOpenStartFormOptions
	 * @property {string} hook   Entry point 'onOpenStartForm'
	 * @property {ManualWorkflowConfigProps} config  Manually workflow start options
	 * @property {string|Object} customParams  Optional parameter of configuration item
	 * @property {SF} contextItemGUI
	 * @property {SF} startItemGUI
	 */
	/**
	 * @typedef OnSaveStartFormOptions
	 * @property {string} hook   Entry point 'onSaveStartForm'
	 * @property {ManualWorkflowConfigProps} config  Manually workflow start options
	 * @property {string|Object} customParams  Optional parameter of configuration item
	 * @property {SF} contextItemGUI
	 * @property {SF} startItemGUI
	 */
	/**
	 * @typedef ChoiceSubOptionItem
	 * @type {Object}
	 * @property {boolean} show
	 * @property {string} title
	 * @property {number} order
	 * @property {string} stepID
	 * @property {string} stepNo
	 * @property {string} choiceID
	 * @property {boolean} checked
	 * @property {boolean} disabled
	 */
	/**
	 * @typedef ChoiceOptionItem
	 * @type {Object}
	 * @property {string} choiceID
	 * @property {string} title
	 * @property {string} stepNo
	 * @property {number} order
	 * @property {ChoiceSubOptionItem[]} subOptions
	 */
	/**
	 * @typedef NextStepHelper
	 * @type {Object}
	 * @property {() => ChoiceOptionItem[]} getOptions
	 * @property {(title: string) => ChoiceOptionItem} getOptionByTitle
	 * @property {(stepNo: string) => ChoiceOptionItem} getOptionByStepNo
	 * @property {(order: number) => ChoiceOptionItem} getOptionByOrder
	 * @property {(choiceID: string) => ChoiceSubOptionItem[]} getSubOptions
	 * @property {(choiceID: string, title: string) => ChoiceSubOptionItem} getSubOptionByTitle
	 * @property {(choiceID: string, stepNo: string) => ChoiceSubOptionItem} getSubOptionByStepNo
	 * @property {(choiceID: string, order: number) => ChoiceSubOptionItem} getSubOptionByOrder
	 * @property {(choiceID: string) => void} hideOption
	 * @property {(title: string) => void} hideOptionByTitle
	 * @property {(stepNo: string) => void} hideOptionByStepNo
	 * @property {(order: number) => void} hideOptionByOrder
	 * @property {() => void} hideAllOptions
	 * @property {(subOption: ChoiceSubOptionItem) => void} hideSubOption
	 * @property {(choiceID: string, title: string) => void} hideSubOptionByTitle
	 * @property {(choiceID: string, stepNo: string) => void} hideSubOptionByStepNo
	 * @property {(choiceID: string, order: number) => void} hideSubOptionByOrder
	 * @property {(choiceID: string) => void} hideAllSubOptions
	 * @property {(choiceID: string) => void} showOption
	 * @property {(title: string) => void} showOptionByTitle
	 * @property {(stepNo: string) => void} showOptionByStepNo
	 * @property {(order: number) => void} showOptionByOrder
	 * @property {() => void} showAllOptions
	 * @property {(subOption: ChoiceSubOptionItem) => void} showSubOption
	 * @property {(choiceID: string, title: string) => void} showSubOptionByTitle
	 * @property {(choiceID: string, stepNo: string) => void} showSubOptionByStepNo
	 * @property {(choiceID: string, order: number) => void} showSubOptionByOrder
	 * @property {(choiceID: string) => void} showAllSubOptions
	 * @property {() => void} setOptionState
	 */
	/**
	 * @typedef OnOpenTaskFormOptions
	 * @type {Object}
	 * @property {string} hook  'onOpenTaskForm'
	 * @property {SF} taskItemGUI
	 * @property {WorkflowInstanceStepItem} config
	 * @property {string|Object} customParams  Optional parameter of configuration item
	 * @property {NextStepHelper} nextStepHelper
	 */
	/**
	 * @typedef OnSaveTaskFormOptions
	 * @type {Object}
	 * @property {string} hook  'onSaveTaskForm'
	 * @property {SF} taskItemGUI
	 * @property {SF} contextItemGUI
	 * @property {WorkflowInstanceStepChoiceItem} config
	 * @property {string|Object} customParams  Optional parameter of configuration item
	 */
	/**
	 * @typedef OnSaveTaskFormForChoiceOptions
	 * @type {Object}
	 * @property {string} hook  'onSaveTaskFormChoice'
	 * @property {SF} taskItemGUI
	 * @property {SF} contextItemGUI
	 * @property {WorkflowInstanceStepChoiceItem} config
	 * @property {string|Object} customParams  Optional parameter of configuration item
	 */
	/**
	 * @typedef OnSaveTaskFormResult
	 * @type {Object}
	 * @property {boolean} result
	 * @property {string} message
	 */
	/**
	 * @typedef OnOpenContextItemFormOptions
	 * @type {Object}
	 * @property {string} hook  'onOpenContextItemForm'
	 * @property {SF} taskItemGUI
	 * @property {SF} contextItemGUI
	 * @property {WorkflowInstanceStepItem} config
	 * @property {string|Object} customParams  Optional parameter of configuration item
	 * @property {NextStepHelper} nextStepHelper
	 */
	/**
	 * @typedef TriggerListItemProps
	 * @type {Object}
	 * @property {string} listUrl
	 * @property {number} listItemId
	 */
	/**
	 * @typedef CreateWorkflowStartTriggerInput
	 * @type {TriggerListItemProps[]}
	 */
	/**
	 * @typedef ChangeContextOptions
	 * @type {Object}
	 * @property {string} instanceID  ID of Workflow Instance to change context for
	 * @property {string} listUrl  Absolute url of list to set context to
	 * @property {number} itemId  ID of SharePoint list item to set context to
	 * @property {string} [primaryKeyFieldName]  Internal name of new primary field
	 * @property {string} reason  Reason why the context has to be changed
	 */
	/**
	 * Object with information to all tasks to be delegated
	 * @typedef DelegatedTasksInfo
	 * @type { { [taskItemID: number]: { taskCompletedJSON: TaskCompletedJSON, folderPath: string } } }
	 */
	/**
	 * @typedef FlowCustomFnOptions
	 * @type {Object}
	 * @property {string} actionTrigger
	 * @property {StateConfigJSON} stateConfig,
	 * @property {string|Object} customOptions
	 * @property {ShareflexFlow} flow
	 * @property {import('ShareflexAddons').default} addons
	 */
	/**
	 * This describes the default available flow variables
	 * @typedef DefaultFlowVariables
	 * @type {Object}
	 * @property {string} [Flow_ContextItem_ListUrl]
	 * @property {string} [Flow_ContextItem_ItemID]
	 * @property {string} [Flow_ContextItem_Title]
	 * @property {string} [Flow_ContextItem_PrimaryKey]
	 * @property {string} [Flow_ContextItem_Url_DispForm]
	 * @property {string} [Flow_ContextItem_Url_EditForm]
	 * @property {string} [Flow_Workflow_Title]
	 * @property {string} [Flow_Workflow_InstanceID]
	 * @property {string} [Flow_WorkflowStep_No]
	 * @property {string} [Flow_WorkflowStep_Title]
	 * @property {string} [Flow_WorkflowStep_StateID]
	 * @property {string} [Flow_TaskItem_Title]
	 * @property {string} [Flow_TaskItem_AssignedTo]
	 * @property {string} [Flow_TaskItem_Editor]
	 * @property {string} [Flow_TaskItem_Url_DispForm]
	 * @property {string} [Flow_TaskItem_Url_EditForm]
	 * @property {string} [Flow_TaskItem_ListUrl]
	 * @property {string} [Flow_TaskItem_ItemID]
	 * @property {string} [Flow_Setting_SvgShapeNodeStyle]
	 */
	/**
	 * This describes the custom flow variables
	 * @typedef CustomFlowVariables
	 * @type { { [variableName: string]: string | number | boolean | object } }
	 */
	/**
	 * @typedef FlowVariables
	 * @type { DefaultFlowVariables & CustomFlowVariables }
	 */
	/**
	 * @typedef CheckWorkflowTaskCompletedOptions
	 * @type {Object}
	 * @property {string} listUrl  Absolute list url
	 * @property {number} itemId
	 * @property {{[fieldName: string]: any}} [item]
	 * @property {import('ShareflexRules').ItemFields} [updateFields]
	 * @property {boolean} skipPermissionHandling Permissions will be handled by external logic [default=false]
	 */
	/**
	 * @typedef WorkflowTaskItem
	 * @type {Object}
	 * @property { {Name: string} } ContentType
	 * @property {string} weStateID
	 * @property {string} weStateConfigJSON
	 * @property {string} weTaskStatus
	 * @property {string} weTaskCompletedJSON
	 * @property {string} weCycleTime
	 * @property {string} Created
	 * @property {string} Modified
	 * @property {string} aoDelegationStatus
	 */
	/**
	 * @typedef TaskItemContext
	 * @type {Object}
	 * @property {string} listUrl
	 * @property {number} itemId
	 */
	/**
	 * @typedef GetTaskCompletedUpdateFieldsOptions
	 * @type {Object}
	 * @property {WorkflowTaskItem} [item] Requested task item with at least fields of flow.getTaskCompletedLoadFields() [default=request task item]
	 * @property {TaskItemContext} [taskItemContext] List url and item id of task [default=rules.Event context]
	 */
	/**
	 * @typedef FinalizeWorkflowTaskCompletedOptions
	 * @type {Object}
	 * @property {WorkflowTaskItem} taskItem
	 * @property {TaskItemContext} [taskItemContext]
	 * @property {import('ShareflexRules').ItemFields} [taskUpdateFields]
	 * @property {string} [cycleTime]
	 * @property {boolean} [skipPermissionHandling]
	 */
	/**
	 * @typedef FinalizeResult
	 * @property {boolean} successful If finalization was processed correctly
	 * @property {string} message Error message
	 * @property {'' | 'S010' | 'S020' | 'S031' | 'S032' | 'S999' | 'E010' | 'E020' | 'E999'} result Status code of last operation
	 */
	/**
	 * @typedef GetStepReferenceUpdatesResult
	 * @type {Object}
	 * @property {import('ShareflexRules').BatchOperations} updateBatch  Batch container with all resulting update operations to be executed
	 * @property {string[]} logMessages  Messages to be logged
	 */
	/** Shareflex Flow API */
	export default class ShareflexFlow {
		constructor(rules: any, addons: any);
		/**
		 * @type {import('ShareflexRules').default}
		 * @private
		 */
		private _rules;
		/**
		 * @type {import('ShareflexAddons').default}
		 * @private
		 */
		private _addons;
		/**
		 * @type {ListsObject}
		 * @private
		 */
		private lists;
		/**
		 * @type {string[]}
		 * @private
		 */
		private systemVariables;
		/**
		 * @type {StateStatusObject}
		 * @private
		 */
		private stateStatus;
		/**
		 * Object with static SharePoint default Role Definition IDs
		 * @type {StaticRoleDefIds}
		 * @private
		 */
		private staticRoleDefIds;
		/**
		 * @type {TaskStatus}
		 * @private
		 */
		private taskStatus;
		/**
		 * @type {{ [instanceID: string]: InstanceCache }}
		 * @private
		 */
		private _cache;
		get rules(): import('ShareflexRules').default;
		get addons(): import('ShareflexAddons').default;
		/**
		 * Get all urls of the Shareflex Flow configuration lists
		 *
		 * ```
		 * let flowLists = flow.getLists();
		 *
		 * flowLists = {
		 *   definitions : String,  // Absolute url from list weDefinitions
		 *   steps : String,  // Absolute url from list weSteps
		 *   stepChoices : String,  // Absolute url form list weStepChoices
		 *   stepChoiceConditions : String,  // Absolute url form list weStepChoiceConditions
		 *   actions : String,  // Absolute url from list weActions
		 *   variables : String,  // Absolute url from list weVariables
		 *   bindings : String  // Absolute url from list weDefinitionBindings
		 *   publicConfigs : String  // Absolute url from list aoPublicConfigurations
		 * }
		 *
		 * ```
		 * @returns {ListsObject}
		 */
		getLists(): ListsObject;
		/**
		 * Get all names of Shareflex Flow system variables
		 * ```
		 * let systemVars = flow.getSystemVariableNames();
		 *
		 * systemVars = [
		 *   'Flow_Workflow_Title',
		 *   'Flow_ContextItem_Url_DispForm',
		 *   ...
		 * ]
		 * ```
		 * @returns {String[]}
		 */
		getSystemVariableNames(): string[];
		/**
		 * Function to get active binding configuration for a specific list
		 *
		 * ```
		 * let result = await flow.getBindings({
		 *   contextListUrl : String,  // Absolute list url for check
		 *   isManual? : Boolean  // Filter by event type equal E-100 - Manually otherwise not equal [default=false]
		 * });
		 *
		 * result = DefinitionBindingListItem[];
		 *
		 * DefinitionBindingListItem = {
		 *    weDefinitionID : String,
		 *    weBindingID : String,
		 *    weActive : Boolean,
		 *    weStartEvent : String,
		 *    weStartEvent : String,
		 *    weStartStep : StepLookup,
		 *    weEndStep : StepLookup,
		 *    weContextListUrl : String,
		 *    weTaskListUrl : String,
		 *    weTaskStatusCompletedValue : String,
		 *    weContextPrimaryKeyFieldName : String,
		 *    weTaskFolderPath : String,
		 *    weDeleteWorkflowTasks : String,
		 *    weStartEventContextFieldName : String,
		 *    weStartEventContextFieldValue : String,
		 *    weStartEventFunctionName : String,
		 *    weStartEventFormulaString : String,
		 *    weStartEventManualOptionsJSON : String
		 * }
		 *
		 * StepLookup = {
		 *   Id : Number,
		 *   Title : String,
		 *   weStepID : String
		 * }
		 *
		 * ```
		 *
		 * @param {GetBindingsOptions} options
		 * @returns {Promise<DefinitionBindingListItem[]>}
		 */
		getBindings(options: GetBindingsOptions): Promise<DefinitionBindingListItem[]>;
		/**
		 * Function to get active workflow instances of a specific item
		 *
		 * ```
		 * let result = await flow.getActiveWorkflowInstances({
		 *   weContextListUrl : String,
		 *   weContextItemID : Number
		 * });
		 *
		 * result = InstanceListItem[];
		 *
		 * InstanceListItem = {
		 *   Id : number;
		 *   Title : String;
		 *   weDefinitionID : String;
		 *   weBindingID : String;
		 *   weInstanceID : String;
		 *   weStartEvent : String;
		 *   weContextListUrl : String;
		 *   weContextItemID : String;
		 *   weInstanceConfigJSON : String;
		 *   weInstanceVariablesJSON : String;
		 *   weStateProgressJSON: String;
		 * }
		 * ```
		 * @param {GetActiveWorkflowInstancesOptions} options
		 * @returns {Promise<InstanceListItem[]>}
		 */
		getActiveWorkflowInstances(options: GetActiveWorkflowInstancesOptions): Promise<InstanceListItem[]>;
		/**
		 * @typedef CreateWorkflowInstanceOptions
		 * @type {Object}
		 * @property {string} weBindingID
		 * @property {string} weDefinitionID
		 * @property {number|string} weContextItemID
		 * @property {string} initiatorAccount
		 * @property {string} [weInstanceID]  For instance update
		 */
		/**
		 * @typedef WorkflowInformation
		 * @type {Object}
		 * @property {string} name
		 * @property {string} eventType
		 * @property {string} startStepNo
		 * @property {string} endStepNo
		 * @property {{Key: string, DisplayText: string, Id: number}} adminAccount
		 * @property {{Key: string, DisplayText: string, Id: number}} clearingAccount
		 * @property {string} initiatorAccount
		 * @property {string} preEmailFunction
		 * @property {{Description: string, Url: string}|string} chartUrl
		 */
		/**
		 * @typedef WorkflowItemContext
		 * @type {Object}
		 * @property {string} listUrl
		 * @property {number|string} itemID
		 * @property {string} primaryKeyFieldName
		 * @property {string} primaryKeyFieldValue
		 *
		 */
		/**
		 * @typedef TaskJSONSingle
		 * @type {{Id: number, AssignedTo: string, DueDate: string, weTaskStatus: string}}
		 * @returns
		 */
		/**
		 * @typedef TasksJSONObject
		 * @type {{[taskItemId: number]: TaskJSONSingle}}
		 */
		/**
		 * @typedef WorkflowTaskContext
		 * @type {Object}
		 * @property {string} taskContentTypeID
		 * @property {string} taskListUrl
		 * @property {string} taskStatusCompletedValue
		 * @property {string} taskFolderPath
		 * @property {boolean} deleteWorkflowTasks
		 * @property {boolean} extractGroupMembers
		 * @property {boolean} [setPrimaryKeyField]
		 * @property {string[]} [taskResponsibles]
		 * @property {TaskJSONSingle|TasksJSONObject} [taskJSON]
		 */
		/**
		 * @typedef WorkflowInstanceConfig
		 * @type {Object}
		 * @property {string} instanceID
		 * @property {WorkflowInformation} parameters
		 * @property {WorkflowItemContext} itemContext
		 * @property {WorkflowTaskContext} taskConfiguration
		 * @property {{[stepNo: string]: WorkflowInstanceStepConfigItem}} workflow
		 * @property {WorkflowInstanceConfigurationData} configurationData
		 */
		/**
		 * @private
		 * @param {CreateWorkflowInstanceOptions} options
		 * @returns {Promise<WorkflowInstanceConfig>} WorkflowInstanceConfig
		 */
		private _createWorkflowInstance;
		/**
		 * Function is called by Workflow Trigger to start a workflow
		 * @private
		 * @param {ShareflexFlow} flow
		 * @param {HandleWorkflowStartOptions} options
		 * @param {string} [siteUrl]
		 */
		private _handleWorkflowStart;
		/**
		 * Function create a job to check and start Shareflex Flow Workflow when necessary
		 *
		 * ```
		 * await flow.createCheckWorkflowStartJob();
		 *
		 * await flow.createCheckWorkflowStartJob({listUrl, listItemId}); // check a job for an external item context
		 * ```
		 * @param {CreateCheckWorkflowStartJobOptions} [options]
		 */
		createCheckWorkflowStartJob(options?: CreateCheckWorkflowStartJobOptions): Promise<void>;
		/**
		 * Function to check and start Shareflex Flow Workflow when necessary (immediately in event)
		 *
		 * ```
		 * await flow.checkWorkflowStart();
		 *
		 * await flow.checkWorkflwoStart({listUrl, listItemId}); // check start for an external item context
		 * ```
		 *
		 * @param {CheckWorkflowStartOptions} [options]
		 */
		checkWorkflowStart(options?: CheckWorkflowStartOptions): Promise<void>;
		/**
		 * Function to create trigger job for workflow start
		 *
		 * ```
		 * await flow.createWorkflowStartTriggerJobs(siteUrl : String, listItems : CreateWorkflowStartTriggerInput);
		 *
		 * CreateWorkflowStartTriggerInput = TriggerListItemProps[]
		 *
		 * TriggerListItemProps = {
		 *   listUrl : String,  // Absolute list url
		 *   listItemId : Number  // SharePoint list item id
		 * }
		 * ```
		 * @param {string} siteUrl
		 * @param {CreateWorkflowStartTriggerInput} listItems
		 */
		createWorkflowStartTriggerJobs(siteUrl: string, listItems: CreateWorkflowStartTriggerInput): Promise<void>;
		/**
		 * @typedef StartWorkflowStateOptions
		 * @type {Object}
		 * @property {string} [stateID]  Identifier of state
		 * @property {string} stepNo  Workflow step no
		 * @property {string} weInstanceID  Workflow instance id
		 * @property {FlowBlockJSON} weWorkflowHistoryJSON  Workflow history
		 * @property {WorkflowInstanceConfig} [weInstanceConfigJSON]  Workflow instance configuration object
		 * @property {InstanceStatesProgress} [weStateProgressJSON]  Workflow process object
		 * @property {InstanceItemsInfo} [instanceItems]  Web and item information of instances items
		 * @property {string[]} [overloadUsers]  LoginNames of users to overload the configured assignment with
		 * @property {string} [weDueDate]  Custom Due Date for new State tasks in UTC-0 ISO format
		 * @property {ParallelStepContext} [parallelStepContext]  Information about parallel execution if State is started as part of a parallel Step construct (S-800)
		 */
		/**
		 * Function to ensure correct permission for tasks
		 *
		 * Creates Shareflex Permissions SetPermissions items if a RuleSet exists for tasks list
		 * or directly set default permissions batched for all tasks
		 *
		 * @private
		 * @param {ShareflexFlow} flow
		 * @param {Object} options
		 * @param {string} options.taskListUrl
		 * @param {TaskBasicInformation[]} options.tasks
		 * @param {import("ShareflexPermissions").RelevantRuleSets} options.relevantRulesSets
		 * @param {WorkflowInstanceConfig} options.weInstanceConfigJSON
		 */
		private _setInitialTaskPermissions;
		/**
		 * Function to start a workflow state, create the state item and workflow tasks if necessary
		 * @private
		 * @param {ShareflexFlow} flow
		 * @param {StartWorkflowStateOptions} options
		 */
		private _startWorkflowState;
		/**
		 * Function get the options from a manually trigger item
		 *
		 * ```
		 * let startOptions = await flow.getManualStartOptions(instanceID: string);
		 *
		 * startOptions = ManualStartOptionJSON
		 *
		 * ManualStartOptionJSON = {
		 *   contextListUrl : String,  // Relative list url of the context item
		 *   contextItemID : String,  // SharePoint list item id of the context item
		 *   primaryKey : String,  // Value of primary key field (if configured)
		 *   bindingID : String,  // Id of the workflow definition binding
		 *   startStepNo : String,  // Number of workflow start step
		 *   Title : String,  // Title of workflow
		 *   weResponsible : UserFormField,
		 *   weDueDate : String,  // Custom DueDate form start form, UTC0 ISO format
		 *   weComment : String,  // Comment from start form
		 *   startedBy : UserFormField,  // User which started the workflow
		 *   customJSON : Object,  // Value of custom virtual fields
		 *   triggersItemID : Id  // SharePoint item id of trigger item (start form)
		 * }
		 * ```
		 * @param {string} instanceID
		 * @returns {Promise<ManualStartOptionJSON>}
		 */
		getManualStartOptions(instanceID: string): Promise<ManualStartOptionJSON>;
		/**
		 * @typedef CheckManualWorkflowStartResult
		 * @type {Object}
		 * @property {boolean} created
		 * @property {import('ShareflexRules').ItemFields} itemFields
		 * weInstanceID
		 * weDefinitionID
		 * weBindingID
		 * startTime
		 */
		/**
		 *
		 * @param {ManualStartOptionJSON} options
		 * @param {UserFormField} creatorAccount
		 * @returns {Promise<Object>}
		 */
		checkManualWorkflowStart(options: ManualStartOptionJSON, creatorAccount: UserFormField): Promise<any>;
		/**
		 * Function to extract custom parameter
		 * @private
		 * @param {string} paramsString
		 */
		private _prepareCustomParams;
		/**
		 * @typedef PermformWorkflowActionsByTriggerCodeOptions
		 * @type {Object}
		 * @property {string} actionTriggerCode
		 * @property {{type: string, id: string}} actionSource
		 * @property {StateConfigJSON} stateConfig
		 * @property {import('ShareflexRules').BatchOperations} [emailBatch]
		 * @property {import('ShareflexRules').BatchOperations} [taskBatch]
		 * @property {import('ShareflexRules').BatchOperations} [permissionJobsBatch]
		 * @property {{taskListUrl: string, taskItemId: number[]}} [updateTaskOptions]
		 * @property {string[]} [taskResponsibles]
		 * @property {TaskJSONSingle|TasksJSONObject} [taskJSON]
		 * @property {{adminWeb: { listUrl: string, itemId: number}, contextWeb: { listUrl: string, itemId: number}}} [instanceItems]
		 */
		/**
		 * Function to perform actions for a specific action trigger
		 * @private
		 * @param {ShareflexFlow} flow
		 * @param {PermformWorkflowActionsByTriggerCodeOptions} options
		 */
		private _permformWorkflowActionsByTriggerCode;
		/**
		 * Function get all relevant fields to check is a flow task completed use by function 'checkWorkflowTaskCompleted'
		 *
		 * ```
		 * const flowTaskFields = flow.getTaskCompletedLoadFields();
		 *
		 * flowTaskFields = String[]
		 * ```
		 * @returns {string[]}
		 */
		getTaskCompletedLoadFields(): string[];
		/**
		 * Function to get flow task relevant update fields if tasklist is integrated in a solution logic and update should be done by solution logic
		 * ```
		 * const taskUpdateFields = await flow.getTaskCompletedUpdateFields(options?);
		 *
		 * options = {
		 *   item?: WorkflowTaskItem,  // Requested task item with at least fields of flow.getTaskCompletedLoadFields() [default=request task item]
		 *   taskItemContext?: TaskItemContext  // List url and item id of task [default=rules.Event context]
		 * }
		 *
		 *
		 * ```
		 * @param {GetTaskCompletedUpdateFieldsOptions} [options]
		 * @returns {Promise<import('ShareflexRules').ItemFields>}
		 */
		getTaskCompletedUpdateFields(options?: GetTaskCompletedUpdateFieldsOptions): Promise<import('ShareflexRules').ItemFields>;
		/**
		 * Function ensure the flow logic if tasklist is integrated in a solution logic
		 * ```
		 * const result = await flow.finalizeWorkflowTaskCompleted({
		 *   taskItem: WorkflowTaskItem,  // Requested task item with at least fields of flow.getTaskCompletedLoadFields()
		 *   taskItemContext?: TaskItemContext,  // List url and item id of task [default=rules.Event context]
		 *   taskUpdateFields?: ItemFields,  // Update fields if task update is not already done
		 *   cycleTime?: String,  // Cycle time of flow task (necessary if no taskUpdateFields are passed)
		 *   skipPermissionHandling?: Boolean  // If permission handling is already done
		 * })
		 *
		 * result = {
		 *   successful : Boolean,  // If finalization was processed correctly
		 *   message : String,  // Error message
		 *   result : String,  // Status Code of last operation
		 * }
		 *
		 * Status Codes:
		 *   'S010' - Flow Trigger has been created
		 *   'S020' - Task item was updated [optional]
		 *   'S031' - Permission inheritance has been reset
		 *   'S032' - Permissions job item has been created
		 *   'S999' - All operations successfully processed
		 *   'E010' - Value of weStateConfigJSON or weTaskCompletedJSON is missing
		 *   'E020' - Invalid cycleTime
		 * ```
		 * @param {FinalizeWorkflowTaskCompletedOptions} options
		 * @returns {Promise<FinalizeResult>} Result of finalization
		 */
		finalizeWorkflowTaskCompleted(options: FinalizeWorkflowTaskCompletedOptions): Promise<FinalizeResult>;
		/**
		 * Function check the task status, calc cycle time and create next state job is necessary.
		 * ```
		 * await flow.checkWorkflowTaskCompleted(TaskItemContext?);
		 *
		 * TaskItemContext = {
		 *   listUrl?: String,  // Absolute list url of task list
		 *   itemId?: Number,  // SharePoint item id of task
		 * }
		 *
		 * ```
		 * @param {TaskItemContext} [taskItemContext]
		 * @returns {Promise<boolean>}
		 */
		checkWorkflowTaskCompleted(taskItemContext?: TaskItemContext): Promise<boolean>;
		/**
		 * @private
		 * @param {ShareflexFlow} flow
		 * @param {TriggerConfiguration} options
		 * */
		private _handleWorkflowStateUpdate;
		/**
		 * Function to close provided tasks.
		 * - add operations to batch
		 * - handle operations for permissions
		 * - generate history chain data
		 *
		 * @private
		 * @param {object} options
		 * @param {string} options.taskListUrl
		 * @param {CompletedStateTasksBlockInfo} options.stateTasks  Object with taskIds to be finished for each state and block data object to be extended
		 * @param {boolean} options.useShareflexPermissions  If permissions of completed task are handled by a Shareflex Permissions RulesSet
		 * @param {string} options.taskStatusCompletedValue  'Status' field value of a completed task
		 * @param {import("ShareflexRules").BatchOperations} options.adminWebBatchWithEvents Batch object for 'Administration' web to be executed with events
		 * @param {import("ShareflexRules").BatchOperations} options.taskWebBatch  Batch object for web of task list
		 * @param {ShareflexFlow} options.flow  Shareflex Flow API instance
		 * @returns {CompletedStateTasksBlockInfo}
		 */
		private _closeTasksToBatch;
		/**
		 * Function to get all workflow variables and their current value of a specific Shareflex Flow workflow instance
		 * ```
		 * let result = await flow.getWorkflowVariables(instanceID: String);
		 *
		 * result = {
		 *     [varName : String] : *
		 * }
		 * ```
		 * @param {string} instanceID
		 * @returns {Promise<WorkflowInstanceVariablesObject>}
		 */
		getWorkflowVariables(instanceID: string, force: any): Promise<WorkflowInstanceVariablesObject>;
		/**
		 * Function to create or update a workflow variable
		 *
		 * ```
		 * await flow.ensureWorkflowVariable(instanceID : String, variableObject : EnsureWorkflowVariableObject);
		 *
		 * EnsureWorkflowVariableObject = {
		 *   [varName : String] : *
		 * }
		 *
		 * // EXAMPLE
		 * let result = await flow.ensureWorkflowVariable(MYINSTANCEID, {
		 *   myCustomVar: 'my custom var value'
		 * });
		 *
		 * result = {
		 *   myCustomVar: 'my custom var value',
		 *   ...
		 *   [varName : String] : *
		 * }
		 * ```
		 *
		 * @param {string} instanceID
		 * @param {EnsureWorkflowVariableObject} variableObject
		 * @returns {Promise<WorkflowInstanceVariablesObject>}
		 */
		ensureWorkflowVariable(instanceID: string, variableObject: EnsureWorkflowVariableObject): Promise<WorkflowInstanceVariablesObject>;
		/**
		 * Function resolves a placeholder string or array of strings with value of workflow variables
		 * ```
		 * let resolvedString = await flow.resolveWorkflowVariable(instanceID : String, inputToResolve : String | String[]);
		 *
		 * //EXAMPLE
		 *
		 * let resolvedString = await flow.resolveWorkflowVariable(MYINSTANCEID, 'WorkflowStep: ${Flow_Step_Title}');
		 *
		 * let resolvedStrings = await flow.resolveWorkflowVariable(MYINSTANCEID, ['WorkflowStep: ${Flow_Step_Title}', '${DueInDays}']);
		 *
		 * ```
		 * @param {string} instanceID
		 * @param {string|string[]} inputToResolve
		 * @param {boolean} [stringify]
		 * @returns {Promise}
		 */
		resolveWorkflowVariable(instanceID: string, inputToResolve: string | string[], stringify?: boolean): Promise<any>;
		/**
		 * @typedef EmailTemplateObject
		 * @type {{ subject: string, header: string, body: string, footer: string}}
		 */
		/**
		 * Function to request email templates and memorize in cache
		 * @private
		 * @param {ShareflexFlow} flow
		 * @param {string} instanceID
		 */
		private _getEmailTemplates;
		/**
		 * @typedef PrepareEmailOptions
		 * @type {Object}
		 * @property {string} preEmailFunction
		 * @property {string} [subject]
		 * @property {string[]} recipientsTo
		 * @property {string[]} [recipientsCc]
		 * @property {string[]} [recipientsBcc]
		 * @property {EmailTemplateObject} templateObj
		 * @property {import('ShareflexRules').BatchOperations} emailBatch
		 * @property {StateConfigJSON} stateConfigJSON
		 */
		/**
		 * Function to call custom prepare functions and build a outgoing email item for a batch
		 * @private
		 * @param {PrepareEmailOptions} options
		 */
		private prepareEmail;
		/**
		 * Function to hash block data (JSON) with previous block hash
		 * @private
		 * @param {string} previousBlockHash
		 * @param {*} currentBlockData
		 */
		private _hashFlowBlockData;
		/**
		 * Function to add a provided block to history chain and also update cache object
		 * @private
		 * @param {FlowBlockJSON} flowBlockJSON
		 * @param {FlowNewBlockData} newBlockData
		 * @param {string} instanceID
		 * @param {string} [timeStamp]
		 * @returns
		 */
		private _createNewFlowBlock;
		/**
		 * Function check a workflow history protocol if valid
		 * @param {string|object} flowBlockJSON
		 * @returns {boolean}
		 */
		isFlowBlockChainValid(flowBlockJSON: string | object): boolean;
		/**
		 * Function to get Workflow History from cache or read it from Instance item
		 * @private
		 * @param {string} instanceID
		 * @returns {Promise<FlowBlockJSON>}
		 */
		private _getWorkflowHistoryJSON;
		/**
		 * Function to change the Context Item of a Workflow Instance
		 *
		 * NOTE:
		 * Only supported within the same SharePoint web
		 *
		 * @param {ChangeContextOptions} options
		 * @returns {Promise<boolean>}  If workflow context has been changed successfully
		 */
		changeContext(options: ChangeContextOptions): Promise<boolean>;
	}
	/**
	 * Object with absolute urls all relevant Shareflex flow lists
	 */
	export type ListsObject = {
		/**
		 * Absolute url from list weDefinitions
		 */
		definitions: string;
		/**
		 * Absolute url from list weSteps
		 */
		steps: string;
		/**
		 * Absolute url from list weStepChoices
		 */
		stepChoices: string;
		/**
		 * Absolute url from list weStepChoiceConditions
		 */
		stepChoiceConditions: string;
		/**
		 * Absolute url from list weActions
		 */
		actions: string;
		/**
		 * Absolute url from list weVariables
		 */
		variables: string;
		/**
		 * Absolute url from list weDefinitionBindings
		 */
		bindings: string;
		/**
		 * Absolute url from list weInstances
		 */
		instances: string;
		/**
		 * Absolute url from list weStates
		 */
		states: string;
		/**
		 * Absolute url from list aoPublicConfigurations
		 */
		publicConfigs: string;
		/**
		 * Absolute url from list weWorkflowTriggers
		 */
		triggers: string;
		/**
		 * Absolute url from list EMailTemplates
		 */
		emailTemplates: string;
		/**
		 * Absolute url from list OutgoingEMails
		 */
		outgoingEMails: string;
		/**
		 * Absolute url form list peSetPermissions
		 */
		setPermissions: string;
	};
	export type InstanceCache = {
		/**
		 * All variables with name (object key) and resolved value
		 */
		variables?: {
			[varName: string]: any;
		};
		/**
		 * Item ID of flow instance item (Administration web)
		 */
		instanceItemID?: any;
		/**
		 * Workflow history chain
		 */
		history?: FlowBlockJSON;
		/**
		 * Mail templates
		 */
		emailTemplates?: {
			[templateID: string]: {
				subject: string;
				header: string;
				body: string;
				footer: string;
			};
		};
	};
	export type BasicListItemInfo = {
		listUrl: string;
		itemId: number;
	};
	/**
	 * Context information for flow instance items
	 */
	export type InstanceItemsInfo = {
		adminWeb: BasicListItemInfo;
		contextWeb: BasicListItemInfo;
	};
	/**
	 * Helper object with valid values for weStateStatus field
	 */
	export type StateStatusObject = {
		active: string;
		waiting: string;
		finished: string;
	};
	export type TaskStatus = {
		notStarted: string;
		completed: string;
	};
	/**
	 * This describes the properties of an SharePoint user field
	 */
	export type UserGroupField = {
		/**
		 * Id of the user or group
		 */
		Id?: number;
		/**
		 * Displayname of the user or group
		 */
		Title?: string;
		/**
		 * LoginName of the user or group
		 */
		Name?: string;
	};
	/**
	 * This describes the configuration item for a workflow definition
	 */
	export type DefinitionListItem = {
		Id: number;
		Title: string;
		weDefinitionID: string;
		weAdministrator: UserGroupField;
		weClearing: UserGroupField;
		weBindingUrls: string;
		wePreEmailFunction: string;
		weChartUrl: {
			Url: string;
			Description: string;
		};
		weComment: string;
	};
	/**
	 * This describes the configuration item for a workflow step
	 */
	export type StepListItem = {
		Id: number;
		Title: string;
		weDefinitionID: string;
		weStepID: string;
		weStepNo: string;
		weStepType: string;
		/**
		 * Stringified StepConfigJSON object
		 */
		weStepConfigJSON: string;
		weComment: string;
	};
	export type StepLookup = {
		Id: number;
		Title: string;
		weStepID: string;
	};
	/**
	 * This describes the configuration item for a workflow step choice
	 */
	export type StepChoiceListItem = {
		Id: number;
		Title: string;
		weDefinitionID: string;
		weStepID: string;
		weStepChoiceID: string;
		weTargetStep: StepLookup;
		weOrder: number;
		weComment: string;
		weStepChoiceConfigJSON: string;
		aoChangeTracker: string;
	};
	/**
	 * This describes the configuration item for a workflow action
	 */
	export type ActionListItem = {
		Id: number;
		Title: string;
		weDefinitionID: string;
		weStepID: string;
		weStepChoiceID: string;
		weStepChoiceConditionID: string;
		weActionID: string;
		weActionType: string;
		weActionTrigger: string;
		weOrder: number;
		weComment: string;
		weActionConfigJSON: string;
		aoChangeTracker: string;
	};
	export type StepChoiceSelectionLookup = {
		Id: number;
		Title: string;
		weStepChoiceID?: string;
	};
	/**
	 * This describes the configuration item for a step choice condition
	 */
	export type StepChoiceConditionListItem = {
		Id: number;
		Title: string;
		weDefinitionID: string;
		weStepID: string;
		weStepChoiceConditionID: string;
		weStepChoiceConditionType: string;
		weAnswerCountTarget: string;
		weStepChoiceSelection: StepChoiceSelectionLookup;
		weStepChoiceConditionFunction: string;
		weOrder: number;
		weComment: string;
		aoChangeTracker: string;
	};
	export type DefinitionBindingListItem = {
		Id: number;
		Title: string;
		weDefinitionID: string;
		weBindingID: string;
		weActive: boolean;
		weStartEvent: string;
		weStartStep: StepLookup;
		weEndStep: StepLookup;
		weContextListUrl: string;
		weTaskListUrl: string;
		weTaskStatusCompletedValue: string;
		weContextPrimaryKeyFieldName: string;
		weTaskFolderPath: string;
		weDeleteWorkflowTasks: boolean;
		weStartEventContextFieldName: string;
		weStartEventContextFieldValue: string;
		weStartEventFunctionName: string;
		weStartEventFormulaString: string;
		weStartEventManualOptionsJSON: string;
	};
	export type InstanceListItem = {
		Id: number;
		Title: string;
		weDefinitionID: string;
		weBindingID: string;
		weInstanceID: string;
		weStartEvent: string;
		weContextListUrl: string;
		weContextItemID: string;
		weInstanceConfigJSON: string;
		weInstanceVariablesJSON: string;
		weStateProgressJSON: string;
		weWorkflowHistoryJSON: string;
	};
	export type ShareflexFlowWorkflowListItem = {
		Id: number;
		Title: string;
		weCurrentState: string;
		weStartEvent: string;
		weInstanceID: string;
		weStartDate: string;
		weEndDate: string;
		weContextListUrl: string;
		weContextItemID: string;
		wePrimaryKey: string;
		weInstanceConfigJSON: string;
		weWorkflowHistoryJSON: string;
		weManualStartOptionJSON: string;
		weLog: string;
		weCycleTime: string;
		Author: UserGroupField;
	};
	export type WorkflowStartButtonOptionOptionsHooks = {
		onClick: string;
	};
	export type WorkflowStartButtonOptionOptions = {
		iconName: string;
		deactivated: boolean | string;
		hidden: boolean | string;
		hooks: WorkflowStartButtonOptionOptionsHooks;
	};
	export type WorkflowStartFormFormField = {
		show: boolean;
		required: boolean;
	};
	export type WorkflowStartFormFormFields = {
		Title: WorkflowStartFormFormField;
		weResponsible: WorkflowStartFormFormField;
		weDueDate: WorkflowStartFormFormField;
		weComment: WorkflowStartFormFormField;
	};
	export type WorkflowStartFormOptionsHooks = {
		onOpen: string;
		onSave: string;
	};
	export type WorkflowStartFormOptions = {
		formFields: WorkflowStartFormFormFields;
		hooks: WorkflowStartFormOptionsHooks;
		selfAssignment: boolean;
	};
	export type StartEventManualOptions = {
		allowMultiInstances: boolean;
		workflowStartButtonOptionOptions: WorkflowStartButtonOptionOptions;
		workflowStartFormOptions: WorkflowStartFormOptions;
	};
	export type UpdateFieldObject = {
		name: string;
		type: string;
		value: any;
	};
	export type ActionType100 = {
		/**
		 * [default=false]
		 */
		eventsActivated: boolean;
		/**
		 * [default=true]
		 */
		incrementVersion: boolean;
		updateFields: UpdateFieldObject[];
		formDataContextItemField: string;
		formDataContextItemValue: string;
	};
	export type ActionType110 = {
		/**
		 * [default=false]
		 */
		eventsActivated: boolean;
		/**
		 * [default=false]
		 */
		incrementVersion: boolean;
		updateFields: UpdateFieldObject[];
		formDataTaskItemField: string;
		formDataTaskItemValue: string;
	};
	export type SendMailRecipients = {
		users: FormUserObject[];
		/**
		 * Resolve workflow variable
		 */
		emailAddresses: string[];
		formDataEmailAddesses: string;
	};
	export type SendMailTemplate = {
		templateID: string;
		formDataEmailTemplate: string;
	};
	export type ActionType200 = {
		template: SendMailTemplate;
		mailSubject: string;
		sendTo: SendMailRecipients;
		sendCc: SendMailRecipients;
		sendBcc: SendMailRecipients;
		prepareFunctionName: string;
	};
	export type ActionType300 = {};
	export type ActionType310 = {};
	export type ActionType500 = {
		finishStepID: string;
		taskResult: string;
		formDataFinishSteps: string;
	};
	export type ActionType510 = {
		taskResult: string;
	};
	export type ActionType900 = {
		functionName: string;
	};
	export type ActionType999 = {
		taskResult: string;
	};
	export type ActionTypeConfig = {
		/**
		 * Update context item
		 */
		'A-100'?: ActionType100;
		/**
		 * Update workflow task
		 */
		'A-110'?: ActionType110;
		/**
		 * Send Mail
		 */
		'A-200'?: ActionType200;
		/**
		 * Set context item permissions
		 */
		'A-300'?: ActionType300;
		/**
		 * Set workflow task permissions
		 */
		'A-310'?: ActionType310;
		/**
		 * Finish Open Tasks (Step)
		 */
		'A-500'?: ActionType500;
		/**
		 * Finish Open Tasks (All)
		 */
		'A-510'?: ActionType510;
		/**
		 * Function
		 */
		'A-900'?: ActionType900;
		/**
		 * Finish Workflow
		 */
		'A-999'?: ActionType999;
	};
	/**
	 * S-100 - No assignment
	 */
	export type StepType100 = {};
	export type FormUserObject = {
		Key: string;
		IsResolved: boolean;
		DisplayText: string;
	};
	/**
	 * S-200 - Fixed assignment
	 */
	export type StepType200 = {
		assignTo: FormUserObject[];
	};
	/**
	 * S-210 - User field on context item
	 */
	export type StepType210 = {
		/**
		 * SharePoint internal field name
		 */
		contextItemUserField: string;
		/**
		 * String for virtual form field
		 */
		formDataContextItemUserField: string;
	};
	export type ReferenceFieldsObject = {
		contextItemFields: string[];
		/**
		 * String for virtual form field
		 */
		formDataContextItemField: string;
		configurationItemFields: string[];
		/**
		 * String for virtual form field
		 */
		formDataConfigurationItemField: string;
	};
	/**
	 * S-220 - Configuration list
	 */
	export type StepType220 = {
		configurationListUrl: string;
		configurationItemUserField: string;
		/**
		 * String for virtual form field
		 */
		formDataConfigurationItemUserField: string;
		referenceFields: ReferenceFieldsObject;
	};
	/**
	 * S-800 - Parallel steps
	 */
	export type StepType800 = {
		targetSteps: string;
		targetStepIDs: string[];
		manualChoiceRequired: boolean;
	};
	/**
	 * S-900 - Function result (login names)
	 */
	export type StepType900 = {
		functionName: string;
	};
	export type StepTypeConfig = {
		/**
		 * No assignment
		 */
		'S-100'?: StepType100;
		/**
		 * Fix assignment
		 */
		'S-200'?: StepType200;
		/**
		 * User Field on context item
		 */
		'S-210'?: StepType210;
		/**
		 * Configuration List
		 */
		'S-220'?: StepType220;
		/**
		 * Parallel Steps
		 */
		'S-800'?: StepType800;
		/**
		 * Function result (Login names)
		 */
		'S-900'?: StepType900;
	};
	export type StepTaskHooks = {
		onOpen: string;
		onSave: string;
	};
	export type StepTaskOptions = {
		extractGroupMembers: boolean;
		dueInDays: number | string;
		showLastComment: boolean;
		allowDelegation: boolean;
		hooks: StepTaskHooks;
	};
	export type StepContextItemHooks = {
		onOpen: string;
	};
	export type StepContextItemOptions = {
		formMode: 'Disp' | 'Disp+Edit' | 'Edit';
		hooks: StepContextItemHooks;
	};
	export type StepNotificationOptions = {
		sendMail: boolean;
		template: SendMailTemplate;
		preEmailFunction: string;
	};
	export type StepNextStepOptions = {
		finishedByFirstAnswer: boolean;
	};
	export type StepProcessVisualisationOptions = {
		svgShapeNodeID: string;
		svgShapeNodeStyle: string;
	};
	export type StepConfigJSON = {
		waitForPredecessors: boolean;
		typeOptions: StepTypeConfig;
		taskOptions: StepTaskOptions;
		contextItemOptions: StepContextItemOptions;
		notificationOptions: StepNotificationOptions;
		nextStepOptions: StepNextStepOptions;
		processVisualisationOptions: StepProcessVisualisationOptions;
		comment: string;
	};
	export type StepChoiceTaskHooks = {
		onSave: string;
	};
	export type StepChoiceTargetStepOptions = {
		/**
		 * StepNo, added while creating a flow instance
		 */
		stepNo?: string;
		stepID: string;
		assigmentOverloadTypeCode: string;
	};
	export type StepChoiceTaskOptions = {
		commentRequired: boolean;
		hooks: StepChoiceTaskHooks;
	};
	export type StepChoiceConfigJSON = {
		targetStepOptions: StepChoiceTargetStepOptions;
		taskFormOptions: StepChoiceTaskOptions;
	};
	export type GetBindingsOptions = {
		/**
		 * Absolute list url
		 */
		contextListUrl: string;
		/**
		 * Filter by event type equal E-100 - Manually otherwise not equal [default=false]
		 */
		isManual?: boolean;
	};
	export type CheckWorkflowStartResult = {
		started: boolean;
		/**
		 * // ShareflexInstances Item Id  url..
		 */
		instanceProperties: any;
	};
	export type GetActiveWorkflowInstancesOptions = {
		/**
		 * Relative list url of workflow context item
		 */
		contextListUrl: string;
		/**
		 * SharePoint item id of the workflow context item
		 */
		contextItemID: number | string;
	};
	export type WorkflowInstanceUserLookupItem = {
		Id: number;
		Title: string;
		Name: string;
	};
	export type WorkflowInstanceDefinitionItem = {
		Title: string;
		weAdministrator: WorkflowInstanceUserLookupItem;
		weClearing: WorkflowInstanceUserLookupItem;
		wePreEmailFunction: string;
		weChartUrl: string;
		weComment: string;
	};
	export type WorkflowInstanceStepLookupItem = {
		Title: string;
		weStepNo: string;
		weStepID: string;
	};
	export type WorkflowInstanceDefinitionBindingItem = {
		Title: string;
		weStartEvent: string;
		weStartStep: WorkflowInstanceStepLookupItem;
		weEndStep: WorkflowInstanceStepLookupItem;
		weContextListUrl: string;
		weTaskListUrl: string;
		weTaskStatusCompletedValue: string;
		weContextPrimaryKeyFieldName: string;
		weTaskFolderPath: string;
		weDeleteWorkflowTasks: boolean;
	};
	export type WorkflowInstanceStepItem = {
		Title: string;
		weStepNo: string;
		weStepID: string;
		weStepType: string;
		weStepConfigJSON: StepConfigJSON;
		weComment: string;
		/**
		 * Array of StepNo of all direct predecessor steps, add be creating weInstanceConfigJSON
		 */
		predecessors?: string[];
	};
	export type WorkflowInstanceStepChoiceItem = {
		Title: string;
		weStepID: string;
		weStepChoiceID: string;
		weTargetStep: WorkflowInstanceStepLookupItem;
		weStepChoiceConfigJSON: string;
		weOrder: number;
		weComment: string;
	};
	export type WorkflowInstanceStepChoiceSelectionLookupItem = {
		Title: string;
		weStepChoiceID: string;
	};
	export type WorkflowInstanceStepChoiceConditionItem = {
		Title: string;
		weStepID: string;
		weStepChoiceConditionID: string;
		weStepChoiceConditionType: string;
		weAnswerCountTarget: string;
		weStepChoiceSelection: WorkflowInstanceStepChoiceSelectionLookupItem;
		weStepChoiceConditionFunction: string;
		weOrder: number;
		weComment: string;
	};
	export type WorkflowInstanceActionItem = {
		Title: string;
		weStepID: string;
		weStepChoiceID: string;
		weStepChoiceConditionID: string;
		weActionID: string;
		weActionType: string;
		weActionTrigger: string;
		weActionConfigJSON: string;
		weOrder: number;
		weComment: string;
	};
	export type WorkflowInstanceVariableItem = {
		Title: string;
		weVarValue: string;
		weComment: string;
		weVariableConfigJSON: string;
	};
	export type VariableListItem = WorkflowInstanceVariableItem & {
		weDefinitionID: string;
		weSystemVar: boolean;
	};
	export type WorkflowInstanceActionConfigItem = {
		weActionID: string;
		weActionTrigger: string;
		weOrder: number;
	};
	export type WorkflowInstanceStepChoiceConfigItem = {
		title: string;
		weStepChoiceID: string;
		weOrder: number;
		actions: WorkflowInstanceActionConfigItem[];
	};
	export type WorkflowInstanceStepChoiceConditionConfigItem = {
		weStepChoiceConditionID: string;
		weOrder: number;
		actions: WorkflowInstanceActionConfigItem[];
	};
	export type WorkflowInstanceConfigurationData = {
		steps: {
			[stepID: string]: WorkflowInstanceStepItem;
		};
		stepChoices: {
			[stepChoiceID: string]: WorkflowInstanceStepChoiceItem;
		};
		stepChoiceConditions: {
			[stepChoiceConditionID: string]: WorkflowInstanceStepChoiceConditionItem;
		};
		actions: {
			[actionID: string]: WorkflowInstanceActionItem;
		};
		variables?: {
			[title: string]: WorkflowInstanceVariableItem;
		};
	};
	export type WorkflowInstanceStepConfigItem = {
		title: string;
		weStepID: string;
		choices: WorkflowInstanceStepChoiceConfigItem[];
		choiceConditions: WorkflowInstanceStepChoiceConditionConfigItem[];
		actions: WorkflowInstanceActionConfigItem[];
		/**
		 * Information about parallel execution if this step has sibling steps (started by S-800 - Parallel Steps)
		 */
		parallelStepContext?: ParallelStepContext;
	};
	export type StateConfigJSON = {
		instanceID: string;
		stateID: string;
		parameters: {
			name: string;
			eventType: string;
			startStepNo: string;
			endStepNo: string;
			adminAccount: {
				Key: string;
				DisplayText: string;
				Id: number;
			};
			clearingAccount: {
				Key: string;
				DisplayText: string;
				Id: number;
			};
			initiatorAccount: string;
			preEmailFunction: string;
			chartUrl:
				| string
				| {
						Description: string;
						Url: string;
				  };
		};
		itemContext: {
			listUrl: string;
			itemID: string | number;
			primaryKeyFieldName: string;
			primaryKeyFieldValue: string;
		};
		taskConfiguration: {
			taskContentTypeID: string;
			taskListUrl: string;
			taskStatusCompletedValue: string;
			taskFolderPath: string;
			deleteWorkflowTasks: boolean;
			extractGroupMembers: boolean;
			setPrimaryKeyField?: boolean;
			taskResponsibles?: string[];
			taskJSON?:
				| {
						Id: number;
						AssignedTo: string;
						DueDate: string;
						weTaskStatus: string;
				  }
				| {
						[taskItemId: number]: {
							Id: number;
							AssignedTo: string;
							DueDate: string;
							weTaskStatus: string;
						};
				  };
		};
		step: WorkflowInstanceStepConfigItem;
		configurationData: WorkflowInstanceConfigurationData;
		/**
		 * Information about parallel execution if this state is part of a 'Parallel step' construct (S-800)
		 */
		parallelStepContext?: ParallelStepContext;
	};
	export type CompletedByObject = {
		email: string;
		displayName: string;
		loginName: string;
	};
	export type ParallelStepContext = {
		/**
		 * Step of type S-800
		 */
		parentStepNo: string;
		/**
		 * All possible steps for parallel execution
		 */
		childStepsNo: string[];
		/**
		 * Optional steps that were not selected by user
		 */
		notRelevantChildStepsNo: string[];
	};
	export type TaskCompletedJSON = {
		taskItemID: number;
		taskTitle: string;
		currentStepID: string;
		stepChoiceID: string;
		/**
		 * Information about parallel execution if choosen choice(s) are part of parallel step
		 */
		parallelStepContext?: ParallelStepContext;
		nextStepIDs: string[];
		isDelegated: boolean;
		delegateTo: FormUserObject[];
		assignedTo: {
			displayName: string;
			loginName: string;
		};
		completedBy: CompletedByObject;
		/**
		 * Key = stepChoiceID|stepID
		 */
		adhocUsers: {
			[stepChoiceIDStepID: string]: FormUserObject[];
		};
		comment: string;
		result: string;
		/**
		 * 'action' | 'start state'
		 */
		triggeredBy?: 'action' | 'start state';
		/**
		 * Overload due date (e.g. provided by manual start form 'start state')
		 */
		adhocDueDate?: string;
	};
	export type TriggerConfiguration = {
		cycleTime: string;
		stateID: string;
		stateConfigJSON: StateConfigJSON;
		taskCompletedJSON: TaskCompletedJSON;
		/**
		 * UTC-0 timestamp of trigger creation
		 */
		utcTimestamp?: string;
	};
	export type HandleWorkflowStartOptions = {
		/**
		 * Relative list url of the context item
		 */
		contextListUrl: string;
		/**
		 * SharePoint list item id of the context item
		 */
		contextItemID: number | string;
		/**
		 * Event type of the context item
		 */
		eventType: string;
		/**
		 * Workflow definition configuration items
		 */
		bindings?: any[];
		/**
		 * Filter by event type equal E-100 - Manually otherwise not equal [default=false]
		 */
		isManual?: boolean;
		/**
		 * Options of manual start
		 */
		manualStartOptions?: ManualStartOptionJSON;
		/**
		 * Loginname of the user who created the workflow start formular
		 */
		initiatorAccount?: string;
		/**
		 * Loginname of the user who started the workflow and responsible if set
		 */
		overloadUsers?: {
			responsible: string[];
			creator: string;
		};
		/**
		 * Relevant binding for manual workflow
		 */
		bindingID?: string;
		/**
		 * SharePoint item id of the start form item
		 */
		startItemId?: number | string;
		/**
		 * UTC-0 timestamp of trigger creation
		 */
		utcTimestamp?: string;
		listUrl: string;
	};
	export type ManualOptionsJSON = {
		active: boolean;
		title: string;
		weDefinitionID: string;
		weBindingID: string;
		weContextListUrl: string;
		weContextPrimaryKeyFieldName: string;
		weStartStepNo: string;
		weChartUrl: {
			Url: string;
			Description: string;
		};
		weStartEventManualOptionsJSON: StartEventManualOptions;
	};
	export type WorkflowButtonConfig = {
		/**
		 * Display also in the context of a workflow task [Default=false]
		 */
		showInWorkflowContext?: boolean;
		/**
		 * Title of the toolbar command (button)
		 */
		commandTitle?: string;
		/**
		 * Name of Fluent UI Icon https://developer.microsoft.com/en-us/fabric#/styles/web/icons
		 */
		commandIcon?: string;
	};
	export type ManualWorkflowConfigProps = {
		title: string;
		workflowName: string;
		weID: string;
		weWFChartUrl: {
			Url: string;
			Description: string;
		};
		weAssociationID: string;
		weList: string;
		wePrimaryKeyField: string;
		weStepNo: string;
		allowMultiInstances: boolean;
		formConfig: WorkflowStartFormOptions;
		buttonOptions: WorkflowStartButtonOptionOptions;
		itemID?: string;
	};
	export type WorkflowButtonClickOptions = {
		hook: string;
		config: ManualWorkflowConfigProps;
		contextItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		workflowStartHelper: {
			openStartForm: Function;
			createStartItem: Function;
			addNodeToHeader: Function;
		};
		customParams: any;
	};
	export type WorkflowButtonHandleMenuOptions = {
		hook: string;
		config: ManualWorkflowConfigProps;
		customParams: any;
	};
	export type ValidateStartFormOptions = {
		hook: string;
		config: ManualWorkflowConfigProps;
		contextItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		startItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		customParams: any;
	};
	export type OpenStartFormOptions = {
		hook: string;
		config: ManualWorkflowConfigProps;
		contextItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		startItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		startItemHelper: {
			addNodeToHeader: Function;
		};
		customParams: any;
	};
	export type UserFormField = {
		/**
		 * Loginname of user
		 */
		Key: string;
		/**
		 * Displayname of user
		 */
		DisplayText: string;
		/**
		 * Resolve flag
		 */
		IsResolved?: boolean;
	};
	export type ManualStartOptionJSON = {
		/**
		 * Relative list url of the context item
		 */
		contextListUrl: string;
		/**
		 * SharePoint list item id of the context item
		 */
		contextItemID: number | string;
		/**
		 * Value of primary key field (if configured)
		 */
		primaryKey: string;
		bindingID: string;
		startStepNo: string;
		Title: string;
		weResponsible: UserFormField[];
		/**
		 * Custom DueDate in UTC0 ISO format
		 */
		weDueDate: string;
		weComment: string;
		/**
		 * User which started the workflow
		 */
		startedBy: UserFormField;
		/**
		 * Value of custom virtual fields
		 */
		customJSON?: any;
		/**
		 * SharePoint item id of trigger item (start form)
		 */
		triggersItemID?: number;
	};
	export type PublicFlowConfigItem = {
		Id: number;
		aoConfigJSON: ManualOptionsJSON;
	};
	/**
	 * Options of custom function to determin Task Responsibles for step type 'S-900'
	 */
	export type TaskResponsibleCustomFunctionOptions = {
		/**
		 * custom entry hook [default='S-900']
		 */
		hook: string;
		/**
		 * ,
		 */
		stateConfig: StateConfigJSON;
		/**
		 * Custom options
		 */
		customOptions: any;
		/**
		 * Shareflex Flow API
		 */
		flow: ShareflexFlow;
		/**
		 * Shareflex Addons API
		 */
		addons: import('ShareflexAddons').default;
	};
	/**
	 * Options of custom function to determin Task Responsibles for step type 'S-900'
	 */
	export type PreEmailCustomFunctionOptions = {
		/**
		 * custom entry hook [default='preEmailFunction']
		 */
		hook: string;
		/**
		 * ,
		 */
		stateConfig: StateConfigJSON;
		/**
		 * Custom options
		 */
		customOptions: any;
		/**
		 * Shareflex Flow API
		 */
		flow: ShareflexFlow;
		/**
		 * Shareflex Addons API
		 */
		addons: import('ShareflexAddons').default;
	};
	export type StepChoiceConditionCustomFunctionOptions = {
		hook: string;
		/**
		 * Object of current state configuration
		 */
		stateConfig: StateConfigJSON;
		/**
		 * Object of current state configuration
		 */
		taskCompleted: any;
		tasks: any;
		/**
		 * Custom options
		 */
		customOptions: any;
		/**
		 * Shareflex Flow API
		 */
		flow: ShareflexFlow;
		/**
		 * Shareflex Addons API
		 */
		addons: import('ShareflexAddons').default;
	};
	export type StepChoiceConditionCustomFunctionResult = {
		[nextStepNo: string]: string[];
	};
	export type StateItem = {
		Id: number;
		weStateStatus: 'Active' | 'Waiting' | 'Finished';
	};
	export type FlowTaskItem = {
		Id: number;
		ContentType: {
			Name: string;
		};
		weName: string;
		weStateID: string;
		/**
		 * stringified StateConfigJSON
		 */
		weStateConfigJSON: string;
		weTaskStatus: 'Not Started' | 'Completed';
		weCycleTime: string;
		/**
		 * stringified TaskCompletedJSON
		 */
		weTaskCompletedJSON: string;
		weResult: string;
		Predecessors: string;
		Created: string;
		Modified: string;
		Editor: {
			Name: string;
			Title: string;
		};
		weComment: string;
		aoDelegationStatus: string;
		/**
		 * serverrelative path to item (e.g. '/sites/contoso/Lists/ShareflexFlowWorkflowTasks/3D49-66D5/15_.000')
		 */
		FileRef: string;
	};
	export type StepChoiceResult = {
		stepID: string;
		overloadUsers: Set<string>;
		stepChoiceBy: Set<string>;
	};
	/**
	 * Object for StepNo (key) and loginNames of overloadUsers for this step (value)
	 */
	export type StepChoiceInfo = {
		[stepNo: string]: StepChoiceResult;
	};
	export type ChoiceResult = {
		/**
		 * Count of all tasks completed with this choice
		 */
		amount: number;
		/**
		 * All selected next steps for this choice
		 */
		nextSteps: StepChoiceInfo;
	};
	export type StateCompletedResult = {
		[stepChoiceID: string]: ChoiceResult;
	};
	export type WorkflowInstanceVariablesObject = FlowVariables;
	export type EnsureWorkflowVariableResult = FlowVariables;
	export type EnsureWorkflowVariableObject = FlowVariables;
	export type WorkflowInstanceEmailTemplateObject = {
		subject: string;
		header: string;
		body: string;
		footer: string;
	};
	export type StateSuccessorInfo = {
		/**
		 * ID of State, added for startable next states
		 */
		stateID?: string;
		/**
		 * Number of Step (e.g. '100')
		 */
		stepNo: string;
		/**
		 * LoginNames of users who have choosen this step by completing tasks of current state
		 */
		stepChoiceBy: string[];
		/**
		 * LoginNames of users to assign step tasks to (to override default)
		 */
		overloadUsers: string[];
		/**
		 * If state was started (or 'Wait for predecessors')
		 */
		started: boolean;
	};
	export type StatePredecessorInfo = {
		/**
		 * ID of State
		 */
		stateID: string;
		/**
		 * Number of Step (e.g. '100')
		 */
		stepNo: string;
		/**
		 * LoginNames of users whose selection led to the current state
		 */
		stepChoiceBy: string[];
	};
	/**
	 * Object to descript a completed step of a flow instance
	 */
	export type CompletedStateObject = {
		/**
		 * Zerobased index of state
		 */
		index: number;
		/**
		 * ID of State
		 */
		stateID: string;
		/**
		 * ID of Flow Step
		 */
		stepID: string;
		/**
		 * Number indicator of step (e.g. '100')
		 */
		stepNo: string;
		/**
		 * Information about parallel execution if state was part of parallel step
		 */
		parallelStepContext?: ParallelStepContext;
		/**
		 * LoginNames of all users who have completed a task for current state (may include choices without resulting next step)
		 */
		stepChoicesBy: string[];
		/**
		 * Previous step
		 */
		predecessor: StatePredecessorInfo;
		/**
		 * All next steps
		 */
		successors: StateSuccessorInfo[];
	};
	/**
	 * Object with all states of a workflow instance and their progress chain
	 */
	export type InstanceStatesProgress = {
		[stateID: string]: CompletedStateObject;
	};
	export type ActionCustomFunctionOptions = {
		hook: string;
		/**
		 * ,
		 */
		stateConfig: StateConfigJSON;
		customOptions: string | any;
		flow: ShareflexFlow;
		addons: import('ShareflexAddons').default;
	};
	export type WorkflowStartCustomFunctionOptions = {
		hook: string;
		/**
		 * Absolute list url of context item
		 */
		listUrl: string;
		/**
		 * SharePoint item id of context item
		 */
		itemId: number | string;
		customOptions: string | any;
		addons: import('ShareflexAddons').default;
	};
	export type TaskBasicInformation = {
		Id: number;
		AssignedTo: {
			Id: string;
			Name: string;
			Title: string;
		};
		Title: string;
		weTaskStatus: string;
	};
	export type FlowBlockUser = {
		Key: string;
		DisplayText: string;
	};
	export type FlowContext = {
		/**
		 * Absolute url of context list
		 */
		listUrl: string;
		/**
		 * ID of context ListItem
		 */
		listItemID: number;
		/**
		 * Internal name of field containing the primary key of context element
		 */
		primaryKeyFieldName: string;
		/**
		 * Value of primary key field if primaryKeyFieldName is set
		 */
		primaryKeyFieldValue: string;
	};
	export type FlowBlockHeader = {
		title: string;
		id: string;
		administrator: FlowBlockUser;
		clearing: FlowBlockUser;
		context: FlowContext;
	};
	export type FlowBlockManualStart = {
		StartedBy: FlowBlockUser;
		Title: string;
		Responsible: FlowBlockUser[];
		Comment: string;
	};
	export type FlowBlockCreatedTasks = {
		[taskID: string]: {
			AssignedTo: FlowBlockUser;
		};
	};
	export type FlowBlockCompletedTasks = {
		[taskID: string]: {
			CompletedBy: FlowBlockUser;
			Result: string;
			Comment: string;
		};
	};
	export type FlowBlockChangedContext = {
		reason: string;
		oldContext: FlowContext;
		newContext: FlowContext;
	};
	export type FlowNewBlockData = {
		/**
		 * 'manual start'|'created task'|'completed task|'changed context'|'state progress'
		 */
		type: string;
		stepNo?: string;
		stateID?: string;
		title?: string;
		dueDate?: string;
		sourceTaskID?: number;
		manualStartInfo?: FlowBlockManualStart;
		createdTasks?: FlowBlockCreatedTasks;
		completedTasks?: FlowBlockCompletedTasks;
		stateProgress?: InstanceStatesProgress;
		changedContext?: FlowBlockChangedContext;
	};
	export type FlowBlockChainData = {
		index: number;
		timestamp: string;
		hash: string;
		previousBlockHash: string;
	};
	export type FlowBlockData = FlowBlockChainData & FlowNewBlockData;
	export type FlowBlockJSON = {
		flow: FlowBlockHeader;
		flowChain: FlowBlockData[];
	};
	export type CompletedTasksBlockData = {
		/**
		 * ,
		 */
		taskIds: number[];
		newBlockData: FlowNewBlockData;
	};
	export type CompletedStateTasksBlockInfo = {
		[stateID: string]: CompletedTasksBlockData;
	};
	export type CreateCheckWorkflowStartJobOptions = {
		/**
		 * Absolute url of context list
		 */
		listUrl: string;
		/**
		 * ID of context ListItem
		 */
		listItemID: number;
	};
	export type CheckWorkflowStartOptions = {
		/**
		 * If Workflow check has to be done async by a job item [default: false]
		 */
		createJob?: boolean;
		/**
		 * Absolute url of context list
		 */
		listUrl?: string;
		/**
		 * ID of context ListItem
		 */
		listItemID?: number;
	};
	export type StaticRoleDefIds = {
		FullControl: number;
		Contribute: number;
		Read: number;
	};
	export type OpenTaskItem = {
		Id: number;
		Title: string;
		weStateID: string;
		weCurrentStepID: string;
		weStateConfigJSON: string;
		weCycleTime: string;
	};
	export type ManualWorkflowConfig = {
		[bindingID: string]: ManualWorkflowConfigProps;
	};
	export type WorkflowButtonMenuItem = {
		key: string;
		text: string;
		config: ManualWorkflowConfigProps;
		clickHandler: any;
		iconProps: {
			iconName: string;
		};
		title: string;
		disabled: boolean;
		onClick: Function;
	};
	export type ButtonIsDeactivatedOptions = {
		/**
		 * Entry point 'isDeactivated'
		 */
		hook: string;
		/**
		 * Manually workflow start options
		 */
		config: ManualWorkflowConfigProps;
		/**
		 * Optional parameter of configuration item
		 */
		customParams: string | any;
	};
	export type ButtonIsDeactivatedResult = {
		deactivated: boolean;
		tooltip: string;
	};
	export type ButtonIsHiddenOptions = {
		/**
		 * Entry point 'isHidden'
		 */
		hook: string;
		/**
		 * Manually workflow start options
		 */
		config: ManualWorkflowConfigProps;
		/**
		 * Optional parameter of configuration item
		 */
		customParams: string | any;
	};
	export type ButtonIsHiddenResult = boolean;
	export type ButtonOnClickOptions = {
		/**
		 * Entry point 'onClick'
		 */
		hook: string;
		/**
		 * Manually workflow start options
		 */
		config: ManualWorkflowConfigProps;
		/**
		 * Optional parameter of configuration item
		 */
		customParams: string | any;
		contextItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		workflowStartHelper: {
			openStartForm: Function;
			createStartItem: Function;
			addNodeToHeader: Function;
		};
	};
	export type OnOpenStartFormOptions = {
		/**
		 * Entry point 'onOpenStartForm'
		 */
		hook: string;
		/**
		 * Manually workflow start options
		 */
		config: ManualWorkflowConfigProps;
		/**
		 * Optional parameter of configuration item
		 */
		customParams: string | any;
		contextItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		startItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
	};
	export type OnSaveStartFormOptions = {
		/**
		 * Entry point 'onSaveStartForm'
		 */
		hook: string;
		/**
		 * Manually workflow start options
		 */
		config: ManualWorkflowConfigProps;
		/**
		 * Optional parameter of configuration item
		 */
		customParams: string | any;
		contextItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		startItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
	};
	export type ChoiceSubOptionItem = {
		show: boolean;
		title: string;
		order: number;
		stepID: string;
		stepNo: string;
		choiceID: string;
		checked: boolean;
		disabled: boolean;
	};
	export type ChoiceOptionItem = {
		choiceID: string;
		title: string;
		stepNo: string;
		order: number;
		subOptions: ChoiceSubOptionItem[];
	};
	export type NextStepHelper = {
		getOptions: () => ChoiceOptionItem[];
		getOptionByTitle: (title: string) => ChoiceOptionItem;
		getOptionByStepNo: (stepNo: string) => ChoiceOptionItem;
		getOptionByOrder: (order: number) => ChoiceOptionItem;
		getSubOptions: (choiceID: string) => ChoiceSubOptionItem[];
		getSubOptionByTitle: (choiceID: string, title: string) => ChoiceSubOptionItem;
		getSubOptionByStepNo: (choiceID: string, stepNo: string) => ChoiceSubOptionItem;
		getSubOptionByOrder: (choiceID: string, order: number) => ChoiceSubOptionItem;
		hideOption: (choiceID: string) => void;
		hideOptionByTitle: (title: string) => void;
		hideOptionByStepNo: (stepNo: string) => void;
		hideOptionByOrder: (order: number) => void;
		hideAllOptions: () => void;
		hideSubOption: (subOption: ChoiceSubOptionItem) => void;
		hideSubOptionByTitle: (choiceID: string, title: string) => void;
		hideSubOptionByStepNo: (choiceID: string, stepNo: string) => void;
		hideSubOptionByOrder: (choiceID: string, order: number) => void;
		hideAllSubOptions: (choiceID: string) => void;
		showOption: (choiceID: string) => void;
		showOptionByTitle: (title: string) => void;
		showOptionByStepNo: (stepNo: string) => void;
		showOptionByOrder: (order: number) => void;
		showAllOptions: () => void;
		showSubOption: (subOption: ChoiceSubOptionItem) => void;
		showSubOptionByTitle: (choiceID: string, title: string) => void;
		showSubOptionByStepNo: (choiceID: string, stepNo: string) => void;
		showSubOptionByOrder: (choiceID: string, order: number) => void;
		showAllSubOptions: (choiceID: string) => void;
		setOptionState: () => void;
	};
	export type OnOpenTaskFormOptions = {
		/**
		 * 'onOpenTaskForm'
		 */
		hook: string;
		taskItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		config: WorkflowInstanceStepItem;
		/**
		 * Optional parameter of configuration item
		 */
		customParams: string | any;
		nextStepHelper: NextStepHelper;
	};
	export type OnSaveTaskFormOptions = {
		/**
		 * 'onSaveTaskForm'
		 */
		hook: string;
		taskItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		contextItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		config: WorkflowInstanceStepChoiceItem;
		/**
		 * Optional parameter of configuration item
		 */
		customParams: string | any;
	};
	export type OnSaveTaskFormForChoiceOptions = {
		/**
		 * 'onSaveTaskFormChoice'
		 */
		hook: string;
		taskItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		contextItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		config: WorkflowInstanceStepChoiceItem;
		/**
		 * Optional parameter of configuration item
		 */
		customParams: string | any;
	};
	export type OnSaveTaskFormResult = {
		result: boolean;
		message: string;
	};
	export type OnOpenContextItemFormOptions = {
		/**
		 * 'onOpenContextItemForm'
		 */
		hook: string;
		taskItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		contextItemGUI: import('@shareflex/forms-sdk/@types/lib/ShareflexAppState').ShareflexAppState;
		config: WorkflowInstanceStepItem;
		/**
		 * Optional parameter of configuration item
		 */
		customParams: string | any;
		nextStepHelper: NextStepHelper;
	};
	export type TriggerListItemProps = {
		listUrl: string;
		listItemId: number;
	};
	export type CreateWorkflowStartTriggerInput = TriggerListItemProps[];
	export type ChangeContextOptions = {
		/**
		 * ID of Workflow Instance to change context for
		 */
		instanceID: string;
		/**
		 * Absolute url of list to set context to
		 */
		listUrl: string;
		/**
		 * ID of SharePoint list item to set context to
		 */
		itemId: number;
		/**
		 * Internal name of new primary field
		 */
		primaryKeyFieldName?: string;
		/**
		 * Reason why the context has to be changed
		 */
		reason: string;
	};
	/**
	 * Object with information to all tasks to be delegated
	 */
	export type DelegatedTasksInfo = {
		[taskItemID: number]: {
			taskCompletedJSON: TaskCompletedJSON;
			folderPath: string;
		};
	};
	export type FlowCustomFnOptions = {
		actionTrigger: string;
		/**
		 * ,
		 */
		stateConfig: StateConfigJSON;
		customOptions: string | any;
		flow: ShareflexFlow;
		addons: import('ShareflexAddons').default;
	};
	/**
	 * This describes the default available flow variables
	 */
	export type DefaultFlowVariables = {
		Flow_ContextItem_ListUrl?: string;
		Flow_ContextItem_ItemID?: string;
		Flow_ContextItem_Title?: string;
		Flow_ContextItem_PrimaryKey?: string;
		Flow_ContextItem_Url_DispForm?: string;
		Flow_ContextItem_Url_EditForm?: string;
		Flow_Workflow_Title?: string;
		Flow_Workflow_InstanceID?: string;
		Flow_WorkflowStep_No?: string;
		Flow_WorkflowStep_Title?: string;
		Flow_WorkflowStep_StateID?: string;
		Flow_TaskItem_Title?: string;
		Flow_TaskItem_AssignedTo?: string;
		Flow_TaskItem_Editor?: string;
		Flow_TaskItem_Url_DispForm?: string;
		Flow_TaskItem_Url_EditForm?: string;
		Flow_TaskItem_ListUrl?: string;
		Flow_TaskItem_ItemID?: string;
		Flow_Setting_SvgShapeNodeStyle?: string;
	};
	/**
	 * This describes the custom flow variables
	 */
	export type CustomFlowVariables = {
		[variableName: string]: any;
	};
	export type FlowVariables = DefaultFlowVariables & CustomFlowVariables;
	export type CheckWorkflowTaskCompletedOptions = {
		/**
		 * Absolute list url
		 */
		listUrl: string;
		itemId: number;
		item?: {
			[fieldName: string]: any;
		};
		updateFields?: import('ShareflexRules').ItemFields;
		/**
		 * Permissions will be handled by external logic [default=false]
		 */
		skipPermissionHandling: boolean;
	};
	export type WorkflowTaskItem = {
		ContentType: {
			Name: string;
		};
		weStateID: string;
		weStateConfigJSON: string;
		weTaskStatus: string;
		weTaskCompletedJSON: string;
		weCycleTime: string;
		Created: string;
		Modified: string;
		aoDelegationStatus: string;
	};
	export type TaskItemContext = {
		listUrl: string;
		itemId: number;
	};
	export type GetTaskCompletedUpdateFieldsOptions = {
		/**
		 * Requested task item with at least fields of flow.getTaskCompletedLoadFields() [default=request task item]
		 */
		item?: WorkflowTaskItem;
		/**
		 * List url and item id of task [default=rules.Event context]
		 */
		taskItemContext?: TaskItemContext;
	};
	export type FinalizeWorkflowTaskCompletedOptions = {
		taskItem: WorkflowTaskItem;
		taskItemContext?: TaskItemContext;
		taskUpdateFields?: import('ShareflexRules').ItemFields;
		cycleTime?: string;
		skipPermissionHandling?: boolean;
	};
	export type FinalizeResult = {
		/**
		 * If finalization was processed correctly
		 */
		successful: boolean;
		/**
		 * Error message
		 */
		message: string;
		/**
		 * Status code of last operation
		 */
		result: '' | 'S010' | 'S020' | 'S031' | 'S032' | 'S999' | 'E010' | 'E020' | 'E999';
	};
	export type GetStepReferenceUpdatesResult = {
		/**
		 * Batch container with all resulting update operations to be executed
		 */
		updateBatch: import('ShareflexRules').BatchOperations;
		/**
		 * Messages to be logged
		 */
		logMessages: string[];
	};
}
