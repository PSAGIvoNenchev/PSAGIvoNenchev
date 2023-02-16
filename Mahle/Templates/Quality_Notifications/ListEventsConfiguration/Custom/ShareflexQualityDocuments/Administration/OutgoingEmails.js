import ShareflexRules from 'ShareflexRules';
import { config } from 'outgoingEmails_defaults';
const rules = new ShareflexRules(config);

sendMail(rules)
  .then(result => {
    rules.logInfo(result);
  })
  .catch(err => {
    if (err instanceof Error) {
      rules.logError(err.message);
      rules.logError(err.stack);
    } else {
      rules.logError(err);
    }
  });

/**
 * Sends an email based on defined conditions to given recipients.
 * @param {ShareflexRules} rules
 */
async function sendMail(rules) {
  // Ignore deleting items
  if (rules.Context.eventType == `ItemDeleting`) return Promise.resolve(`ItemDeleting. No email sent.`);
  // Exit if sending emails is disabled
  if (rules.getPlaceholder(`sendMails`)?.toLowerCase() == `false`) return Promise.resolve(`'sendMails' is set to 'false'. No email sent.`);

  const listItem = await rules.getEventItem(`Title,nfEmailBody,nfEmailFrom,nfEmailTo,nfEmailCc,EmailBcc,MailStatus`);

  // PreConditions
  if (listItem.MailStatus != `Sending` && listItem.MailStatus != 'Processing') return Promise.resolve(`'MailStatus' is not in state 'Processing' or 'Sending'. No email sent.`);
  if (!listItem.nfEmailTo || listItem.nfEmailTo == ``) {
    await setStatus(rules, `Error`);
    return Promise.reject(`'nfEmailTo' is empty. No email sent.`);
  }
//   if (!listItem.nfEmailFrom || listItem.nfEmailFrom == ``) {
//     await setStatus(rules, `Error`);
//     return Promise.reject(`'nfEmailFrom' is empty. No email sent.`);
//   }
  if (!listItem.Title || listItem.Title == ``) {
    await setStatus(rules, `Error`);
    return Promise.reject(`'Title' (subject) is empty. No email sent.`);
  }

  // Extract recipients
  const toRecipientsTmp = listItem.nfEmailTo.split(` `).join(``).split(`;`);  /** Create array of emails and remove possible blanks */
  const ccRecipientsTmp = listItem.nfEmailCc ? listItem.nfEmailCc.split(` `).join(``).split(`;`) : []; /** Create array of emails and remove possible blanks; can also be an empty field */
  const bccRecipientsTmp = listItem.EmailBcc ? listItem.EmailBcc.split(` `).join(``).split(`;`) : []; /** Create array of emails and remove possible blanks; can also be an empty field */

  // Collect recipients and eliminate empty array values while on it.
  // Also validate if the address given is in a valid email format.
  const toRecipients = [],
    ccRecipients = [],
    bccRecipients = [];
  for (const to of toRecipientsTmp) {
    if (!to) continue; /** Empty value */
    if (!validateEmail(to)) {
      await setStatus(rules, `Error`);
      return Promise.reject(`'${to}' has no proper email format. No email sent.`);
    }
    toRecipients.push(to);
  }
  for (const cc of ccRecipientsTmp) {
    if (!cc) continue; /** Empty value */
    if (!validateEmail(cc)) {
      await setStatus(rules, `Error`);
      return Promise.reject(`'${cc}' has no proper email format. No email sent.`);
    }
    ccRecipients.push(cc);
  }
  for (const bcc of bccRecipientsTmp) {
    if (!bcc) continue; /** Empty value */
    if (!validateEmail(bcc)) {
      await setStatus(rules, `Error`);
      return Promise.reject(`'${bcc}' has no proper email format. No email sent.`);
    }
    bcc && bccRecipients.push(bcc);
  }

  // rules.logInfo(toRecipients);
  // rules.logInfo(ccRecipients);
  // rules.logInfo(bccRecipients);

  // Check if the sent email has to be stored in the users Sent folder
  let saveToSentItems = false;
  if (rules.getPlaceholder(`saveToSentItems`)?.toLowerCase() == `true`) {
    saveToSentItems = true;
  }

  // Sending email
  const sendEmailResult = await sendGraphEmail(rules, {
    mailSubject: listItem.Title,
    senderMail: rules.getPlaceholder(`fromUserName`),
    mailFormat: `HTML`,
    toRecipients: toRecipients,
    ccRecipients: ccRecipients,
    bccRecipients: bccRecipients,
    mailBody: listItem.nfEmailBody,
    saveToSentItems: saveToSentItems
  })

  // Process the result of sending the email
  if (sendEmailResult == true) {
    await setStatus(rules, `Sent`);
    return Promise.resolve(true);
  } else {
    await setStatus(rules, `Error`);
    return Promise.reject(sendEmailResult);
  }
}

/**
 * Sets the 'MailStatus' field to a given value.
 * @param {ShareflexRules} rules
 * @param {string} status the desired status to set
 * @returns
 */
async function setStatus(rules, status) {
  const newFields = rules.createItemFields(`1033`);
  newFields.setChoice(`MailStatus`, status);
  await rules.updateEventItem(newFields);
  return Promise.resolve(true);
}


/**
* Sends an email via Graph-API.
* **NOTE:** When using a dedicated Azure APP, ensure the placeholders GraphTenantId, GraphClientId and GraphSecret are set in the config.
* @param {ShareflexRules} rules
* @param {object} options the options for the email to send
* @param {string} options.mailSubject the subject of the email
* @param {string} options.senderMail sender of the email
* @param {string} options.mailFormat email format (HTML; Text)
* @param {string[]} options.toRecipients array of recipients directly addressed
* @param {string[]} options.ccRecipients array of recipients addressed as coal copy
* @param {string[]} options.bccRecipients array of recipients addressed as blind copy
* @param {string} options.mailBody the actual body of the email
* @param {boolean} options.saveToSentItems decide if the email will be stored in the "Sent" folder of the sender
* @param {Object[]} [options.attachments] Array of attachmentObjects
* @example
* const attachments = [{
      '@odata.type': '#microsoft.graph.fileAttachment',
      'name': 'Test.pdf',
      'contentType': 'application/pdf',
      'contentBytes': FILECONTENTASBASE64
    }, {
      '@odata.type': '#microsoft.graph.fileAttachment',
      'name': 'Test2.docx',
      'contentType': 'application/msword',
      'contentBytes': FILECONTENTASBASE64_2
    },
  ]
*/
async function sendGraphEmail(rules, options) {
  const useDedicatedAzureApp = rules.getPlaceholder(`useDedicatedAzureApp`)?.toLowerCase() == `true` ? true : false;
  rules.logInfo('Sendermail: ' + options.senderMail);
  let connection = null;
  if (useDedicatedAzureApp) {
    // Establishing the Graph connection from dedicated Azure App
    connection = rules.ConnectionManager.createMicrosoftGraphAppOnlyConnection({
      tenant: rules.getPlaceholder(`GraphTenantId`),
      clientId: rules.getPlaceholder(`GraphClientId`),
      encryptedClientSecret: rules.getPlaceholder(`GraphSecret`),
    });
  } else {
    // Use built-in connection
    connection = rules.ConnectionManager.getConnection(`MicrosoftGraphBuildInConnection`);
  }

  // Preparing the default body structure
  const body = {
    "message": {
      "subject": options.mailSubject,
      "body": {
        "contentType": "HTML",
        "content": options.mailBody
      },
      "attachments": options.attachments ? options.attachments : [],
    },
    "saveToSentItems": options.saveToSentItems,
  }

  // Collecting the recipients
  const toRecipients = [],
    ccRecipients = [],
    bccRecipients = [];

  for (const emailTo of options.toRecipients) {
    toRecipients.push({
      "emailAddress": {
        "address": emailTo
      }
    });
  }
  for (const emailCc of options.ccRecipients) {
    ccRecipients.push({
      "emailAddress": {
        "address": emailCc
      }
    });
  }
  for (const emBcc of options.bccRecipients) {
    bccRecipients.push({
      "emailAddress": {
        "address": emBcc
      }
    });
  }

  // Add recipients to body
  body.message.toRecipients = toRecipients;
  body.message.ccRecipients = ccRecipients;
  body.message.bccRecipients = bccRecipients;
  // rules.logInfo(body);

  // Sending the email in context of given user
  const result = await rules.graphService({
    method: 'POST',
    resource: `/users/${options.senderMail}/sendMail`,
    body: JSON.stringify(body),
    connectionId: connection.id,
  });

  if (result.status != `202` && result.status != `200`) {
    return Promise.reject(result);
  }

  return Promise.resolve(true);
}

/**
 * Checks a simple email pattern
 * @param {string} email email as string
 * @returns {boolean} true/false (--> valid/invalid)
 */
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}