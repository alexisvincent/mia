import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OUTLOOK's OUTLOOK_ADD_MAIL_ATTACHMENT tool input.
 */
type OUTLOOK_ADD_MAIL_ATTACHMENT_INPUT = {
  /**
   * Content Bytes
   * Format: byte
   * @description Base64-encoded content of the file attachment (max size 3 MB).
   */
  contentBytes?: unknown;
  /**
   * Content Id
   * @description Content ID for inline attachments, used in HTML body references.
   * @default null
   */
  contentId: string | null;
  /**
   * Content Location
   * @description URL location or path for reference attachments.
   * @default null
   */
  contentLocation: string | null;
  /**
   * Content Type
   * @description MIME type of the attachment (e.g., 'application/pdf').
   * @default null
   */
  contentType: string | null;
  /**
   * Is Inline
   * @description Set to true if the attachment should appear inline in the message body.
   * @default null
   */
  isInline: boolean | null;
  /**
   * Item
   * @description Embedded item (e.g., message, event) for itemAttachment; must include its own '@odata.type'.
   * @default null
   */
  item: {
      [key: string]: unknown;
  } | null;
  /**
   * Message Id
   * @description Unique identifier of the email message to attach to.
   */
  message_id?: string;
  /**
   * Name
   * @description Display name of the attachment (e.g., file name).
   */
  name?: string;
  /**
   * Odata Type
   * @description The OData type of the attachment. For file attachments, use '#microsoft.graph.fileAttachment'.
   */
  odata_type?: string;
  /**
   * User Id
   * @description The user's principal name or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_ADD_MAIL_ATTACHMENT tool output.
 */
type OUTLOOK_ADD_MAIL_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Bytes
       * Format: byte
       * @description Base64-encoded content of the attachment returned by the service.
       * @default null
       */
      contentBytes: unknown;
      /**
       * Content Id
       * @description Content ID for inline attachments.
       * @default null
       */
      contentId: string | null;
      /**
       * Content Location
       * @description Content location for reference attachments.
       * @default null
       */
      contentLocation: string | null;
      /**
       * Content Type
       * @description MIME type of the attachment.
       * @default null
       */
      contentType: string | null;
      /**
       * Id
       * @description Unique identifier of the new attachment.
       */
      id: string;
      /**
       * Is Inline
       * @description True if the attachment is inline.
       * @default null
       */
      isInline: boolean | null;
      /**
       * Last Modified Date Time
       * @description Timestamp of last modification for the attachment.
       */
      lastModifiedDateTime: string;
      /**
       * Name
       * @description Display name of the attachment.
       */
      name: string;
      /**
       * Size
       * @description Size of the attachment in bytes.
       * @default null
       */
      size: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_CREATE_CALENDAR tool input.
 */
type OUTLOOK_CREATE_CALENDAR_INPUT = {
  /**
   * Color
   * @description The theme color to assign to the calendar. Supported values: auto, lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightPurple, lightRed.
   * @default null
   * @enum {string|null}
   */
  color: "auto" | "lightBlue" | "lightGreen" | "lightOrange" | "lightGray" | "lightYellow" | "lightTeal" | "lightPink" | "lightBrown" | "lightPurple" | "lightRed" | null;
  /**
   * Hex Color
   * @description An optional hexadecimal color code for the calendar in the format '#RRGGBB'.
   * @default null
   */
  hexColor: string | null;
  /**
   * Name
   * @description The display name of the new calendar.
   */
  name?: string;
  /**
   * User Id
   * @description The UPN (User Principal Name) or object ID of the user where the calendar will be created. Use 'me' for the signed-in user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_CREATE_CALENDAR tool output.
 */
type OUTLOOK_CREATE_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The raw JSON response representing the created calendar object.
       */
      response_data: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_CREATE_CONTACT_FOLDER tool input.
 */
type OUTLOOK_CREATE_CONTACT_FOLDER_INPUT = {
  /**
   * Display Name
   * @description The display name of the new contact folder.
   */
  displayName?: string;
  /**
   * Parent Folder Id
   * @description The ID of the parent contact folder. If omitted, created under the default contacts folder.
   * @default null
   */
  parentFolderId: string | null;
  /**
   * User Id
   * @description The user's principal name or object ID. Use 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_CREATE_CONTACT_FOLDER tool output.
 */
type OUTLOOK_CREATE_CONTACT_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Child Folder Count
       * @description The number of child folders under this folder.
       * @default null
       */
      childFolderCount: number | null;
      /**
       * Display Name
       * @description The display name of the contact folder.
       */
      displayName: string;
      /**
       * Id
       * @description The unique identifier of the contact folder.
       */
      id: string;
      /**
       * Parent Folder Id
       * @description The ID of the parent contact folder.
       * @default null
       */
      parentFolderId: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_CREATE_EMAIL_RULE tool input.
 */
type OUTLOOK_CREATE_EMAIL_RULE_INPUT = {
  /**
   * Actions
   * @description Actions to take when the rule conditions are met.
   */
  actions?: {
      /**
       * Assign Categories
       * @description List of categories to assign to matching messages.
       * @default null
       */
      assignCategories: string[] | null;
      /**
       * Copy To Folder
       * @description Folder ID to copy matching messages to.
       * @default null
       */
      copyToFolder: string | null;
      /**
       * Delete
       * @description Whether to delete matching messages.
       * @default null
       */
      delete: boolean | null;
      /**
       * Forward To
       * @description List of email addresses to forward matching messages to.
       * @default null
       */
      forwardTo: string[] | null;
      /**
       * Mark As Read
       * @description Whether to mark matching messages as read.
       * @default null
       */
      markAsRead: boolean | null;
      /**
       * Move To Folder
       * @description Folder ID to move matching messages to.
       * @default null
       */
      moveToFolder: string | null;
  };
  /**
   * Conditions
   * @description Conditions that must be met for the rule to apply.
   */
  conditions?: {
      /**
       * Body Contains
       * @description List of strings that the message body must contain.
       * @default null
       */
      bodyContains: string[] | null;
      /**
       * From Addresses
       * @description List of sender email addresses to match.
       * @default null
       */
      fromAddresses: string[] | null;
      /**
       * Has Attachments
       * @description Whether the message must have attachments.
       * @default null
       */
      hasAttachments: boolean | null;
      /**
       * Importance
       * @description Message importance level to match (low, normal, high).
       * @default null
       */
      importance: string | null;
      /**
       * Subject Contains
       * @description List of strings that the message subject must contain.
       * @default null
       */
      subjectContains: string[] | null;
  };
  /**
   * Display Name
   * @description Display name for the email rule.
   */
  displayName?: string;
  /**
   * Is Enabled
   * @description Whether the rule is enabled.
   * @default true
   */
  isEnabled: boolean;
  /**
   * Sequence
   * @description Order in which the rule is executed (lower numbers execute first).
   * @default 1
   */
  sequence: number | null;
};

/**
 * Type of OUTLOOK's OUTLOOK_CREATE_EMAIL_RULE tool output.
 */
type OUTLOOK_CREATE_EMAIL_RULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Actions
       * @description Rule actions.
       */
      actions: {
          [key: string]: unknown;
      };
      /**
       * Conditions
       * @description Rule conditions.
       */
      conditions: {
          [key: string]: unknown;
      };
      /**
       * Display Name
       * @description Display name of the rule.
       */
      displayName: string;
      /**
       * Id
       * @description Unique identifier of the created rule.
       */
      id: string;
      /**
       * Is Enabled
       * @description Whether the rule is enabled.
       */
      isEnabled: boolean;
      /**
       * Sequence
       * @description Execution order of the rule.
       */
      sequence: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_CREATE_MAIL_FOLDER tool input.
 */
type OUTLOOK_CREATE_MAIL_FOLDER_INPUT = {
  /**
   * Display Name
   * @description The display name of the new mail folder.
   */
  displayName?: string;
  /**
   * Is Hidden
   * @description Indicates whether the new folder is hidden. Default is false. Once set, this property cannot be updated.
   * @default false
   */
  isHidden: boolean;
  /**
   * User Id
   * @description Identifier for the user whose mailbox the folder will be created in. Use 'me' for the authenticated user or provide the user's principal name or ID.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_CREATE_MAIL_FOLDER tool output.
 */
type OUTLOOK_CREATE_MAIL_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Child Folder Count
       * @description The number of child folders in the mail folder.
       */
      childFolderCount: number;
      /**
       * Display Name
       * @description The display name of the mail folder.
       */
      displayName: string;
      /**
       * Id
       * @description The unique identifier for the mail folder.
       */
      id: string;
      /**
       * Is Hidden
       * @description Indicates whether the folder is hidden.
       */
      isHidden: boolean;
      /**
       * Parent Folder Id
       * @description The unique identifier of the parent folder.
       */
      parentFolderId: string;
      /**
       * Total Item Count
       * @description The total number of items in the folder.
       */
      totalItemCount: number;
      /**
       * Unread Item Count
       * @description The number of unread items in the folder.
       */
      unreadItemCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_CREATE_MASTER_CATEGORY tool input.
 */
type OUTLOOK_CREATE_MASTER_CATEGORY_INPUT = {
  /**
   * Color
   * @description A pre-set color constant for the category. Allowed values: preset0 through preset24.
   * @default null
   * @enum {string|null}
   */
  color: "preset0" | "preset1" | "preset2" | "preset3" | "preset4" | "preset5" | "preset6" | "preset7" | "preset8" | "preset9" | "preset10" | "preset11" | "preset12" | "preset13" | "preset14" | "preset15" | "preset16" | "preset17" | "preset18" | "preset19" | "preset20" | "preset21" | "preset22" | "preset23" | "preset24" | null;
  /**
   * Display Name
   * @description Unique name that identifies the category in the user's mailbox.
   */
  displayName?: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_CREATE_MASTER_CATEGORY tool output.
 */
type OUTLOOK_CREATE_MASTER_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description The color assigned to the category.
       */
      color: string;
      /**
       * Display Name
       * @description The name of the category.
       */
      displayName: string;
      /**
       * Id
       * @description The unique identifier of the category.
       */
      id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_DELETE_MAIL_FOLDER tool input.
 */
type OUTLOOK_DELETE_MAIL_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier or well-known name of the mail folder to delete (e.g., folder ID or 'Drafts', 'SentItems').
   */
  folder_id?: string;
  /**
   * User Id
   * @description Identifier for the user whose mailbox contains the folder to delete. Use 'me' for the authenticated user or provide the user's principal name or ID.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_DELETE_MAIL_FOLDER tool output.
 */
type OUTLOOK_DELETE_MAIL_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description API response, typically empty for successful deletions (204 No Content).
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_DOWNLOAD_OUTLOOK_ATTACHMENT tool input.
 */
type OUTLOOK_DOWNLOAD_OUTLOOK_ATTACHMENT_INPUT = {
  /**
   * Attachment Id
   * @description The unique identifier of the attachment to be downloaded. This ID is typically obtained from the message's details when an email message object is retrieved.
   */
  attachment_id?: string;
  /**
   * File Name
   * @description The desired filename for the downloaded attachment. This name will be assigned to the `FileDownloadable` object.
   */
  file_name?: string;
  /**
   * Message Id
   * @description The unique identifier of the email message that contains the attachment to be downloaded. This ID is typically obtained when listing or retrieving messages.
   */
  message_id?: string;
  /**
   * User Id
   * @description The user's UPN (User Principal Name) or 'me' for the authenticated user. This identifies the mailbox where the message is located.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_DOWNLOAD_OUTLOOK_ATTACHMENT tool output.
 */
type OUTLOOK_DOWNLOAD_OUTLOOK_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description A `FileDownloadable` object representing the downloaded attachment, which includes its binary content and filename.
       */
      file: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description URL of the file.
           */
          s3url: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_MAILBOX_SETTINGS tool input.
 */
type OUTLOOK_GET_MAILBOX_SETTINGS_INPUT = {
  /**
   * Expand
   * @description OData $expand query to include related entities.
   * @default null
   */
  expand: string[] | null;
  /**
   * Select
   * @description OData $select query to specify mailbox settings properties to include.
   * @default null
   */
  select: string[] | null;
  /**
   * User Id
   * @description The user's unique identifier or principal name. Use 'me' for the signed-in user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_MAILBOX_SETTINGS tool output.
 */
type OUTLOOK_GET_MAILBOX_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * AutomaticRepliesSetting
       * @description Automatic replies settings for the mailbox.
       * @default null
       */
      automaticRepliesSetting: {
          /**
           * External Audience
           * @description Who will receive external automatic replies. Possible values: 'none', 'internal', 'external'.
           */
          externalAudience: string;
          /**
           * External Reply Message
           * @description Automatic reply message sent to external senders.
           * @default null
           */
          externalReplyMessage: string | null;
          /**
           * Internal Reply Message
           * @description Automatic reply message sent to internal senders.
           * @default null
           */
          internalReplyMessage: string | null;
          /**
           * DateTimeTimeZone
           * @description End date and time for scheduled automatic replies.
           * @default null
           */
          scheduledEndDateTime: {
              /**
               * Date Time
               * @description Date and time in ISO 8601 format.
               */
              dateTime: string;
              /**
               * Time Zone
               * @description Time zone of the dateTime value.
               */
              timeZone: string;
          } | null;
          /**
           * DateTimeTimeZone
           * @description Start date and time for scheduled automatic replies.
           * @default null
           */
          scheduledStartDateTime: {
              /**
               * Date Time
               * @description Date and time in ISO 8601 format.
               */
              dateTime: string;
              /**
               * Time Zone
               * @description Time zone of the dateTime value.
               */
              timeZone: string;
          } | null;
          /**
           * Status
           * @description The automatic replies status. Possible values: 'disabled', 'alwaysEnabled', 'scheduled'.
           */
          status: string;
      } | null;
      /**
       * Date Format
       * @description Preferred date format (e.g., 'MM/dd/yyyy').
       * @default null
       */
      dateFormat: string | null;
      /**
       * Delegate Meeting Message Delivery Options
       * @description Delegate meeting message delivery options.
       * @default null
       */
      delegateMeetingMessageDeliveryOptions: string | null;
      /**
       * LocaleInfo
       * @description Locale information for the mailbox.
       * @default null
       */
      language: {
          /**
           * Display Name
           * @description Display name of the locale (e.g., 'English (United States)').
           */
          displayName: string;
          /**
           * Locale
           * @description Locale in BCP 47 format (e.g., 'en-US').
           */
          locale: string;
      } | null;
      /**
       * Time Format
       * @description Preferred time format (e.g., 'hh:mm tt').
       * @default null
       */
      timeFormat: string | null;
      /**
       * Time Zone
       * @description Preferred time zone (e.g., 'UTC').
       * @default null
       */
      timeZone: string | null;
      /**
       * UserPurpose
       * @description Purpose of the mailbox.
       * @default null
       */
      userPurpose: {
          /**
           * Value
           * @description Purpose of the mailbox (e.g., 'user', 'shared').
           */
          value: string;
      } | null;
      /**
       * WorkingHours
       * @description Working hours settings for the mailbox.
       * @default null
       */
      workingHours: {
          /**
           * Days Of Week
           * @description Days of the week for working hours (e.g., ['monday','tuesday']).
           */
          daysOfWeek: string[];
          /**
           * End Time
           * @description End time in HH:mm:ss format.
           */
          endTime: string;
          /**
           * Start Time
           * @description Start time in HH:mm:ss format.
           */
          startTime: string;
          /**
           * Time Zone
           * @description Time zone for the working hours.
           */
          timeZone: {
              /**
               * Name
               * @description Time zone name for working hours (e.g., 'Pacific Standard Time').
               */
              name: string;
          };
      } | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_MAIL_DELTA tool input.
 */
type OUTLOOK_GET_MAIL_DELTA_INPUT = {
  /**
   * Count
   * @description Include count of total items in the response.
   * @default null
   */
  count: boolean | null;
  /**
   * Delta Token
   * @description Delta token from a previous call to get only changes since that state.
   * @default null
   */
  delta_token: string | null;
  /**
   * Expand
   * @description List of related entities to expand (e.g. ['attachments']).
   * @default null
   */
  expand: string[] | null;
  /**
   * Filter
   * @description OData filter string to filter messages (e.g. 'isRead eq false').
   * @default null
   */
  filter: string | null;
  /**
   * Folder Id
   * @description Mail folder identifier to scope the delta query to that folder (e.g., 'Inbox' or folder ID GUID).
   * @default null
   */
  folder_id: string | null;
  /**
   * Orderby
   * @description List of properties to sort by with direction (e.g. ['receivedDateTime desc']).
   * @default null
   */
  orderby: string[] | null;
  /**
   * Search
   * @description Search phrase to filter messages (e.g. 'project update').
   * @default null
   */
  search: string | null;
  /**
   * Select
   * @description List of message properties to include (e.g. ['subject','receivedDateTime']).
   * @default null
   */
  select: string[] | null;
  /**
   * Skip
   * @description Number of items to skip for pagination.
   * @default null
   */
  skip: number | null;
  /**
   * Skip Token
   * @description Skip token for paging through large result sets.
   * @default null
   */
  skip_token: string | null;
  /**
   * Top
   * @description Maximum number of items to return per page.
   * @default null
   */
  top: number | null;
  /**
   * User Id
   * @description User identifier: 'me' for the signed-in user or the user's email/UPN.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_MAIL_DELTA tool output.
 */
type OUTLOOK_GET_MAIL_DELTA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Delta response JSON containing 'value', '@odata.nextLink', and '@odata.deltaLink'.
       */
      response_data: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_MAIL_TIPS tool input.
 */
type OUTLOOK_GET_MAIL_TIPS_INPUT = {
  /**
   * Email Addresses
   * @description Collection of SMTP addresses of recipients to get MailTips for.
   */
  EmailAddresses?: string[];
  /**
   * Mail Tips Options
   * @description List of mail tip types to retrieve for each recipient.
   */
  MailTipsOptions?: string[];
  /**
   * User Id
   * @description User principal name (UPN) or 'me' for the signed-in user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_MAIL_TIPS tool output.
 */
type OUTLOOK_GET_MAIL_TIPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description Collection of MailTips objects for each recipient.
       */
      value: {
          /**
           * AutomaticReplies
           * @description Automatic replies settings for the recipient.
           * @default null
           */
          automaticReplies: {
              /**
               * Message
               * @description Automatic reply message content.
               * @default null
               */
              message: string | null;
              /**
               * MessageLanguage
               * @description Language and locale information for the reply message.
               * @default null
               */
              messageLanguage: {
                  /**
                   * Display Name
                   * @description Display name of the locale.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Locale
                   * @description Locale of the automatic reply message (e.g., 'en-US').
                   * @default null
                   */
                  locale: string | null;
              } | null;
              /**
               * DateTimeTimeZone
               * @description Scheduled end time for automatic replies.
               * @default null
               */
              scheduledEndTime: {
                  /**
                   * Date Time
                   * @description Date and time in ISO 8601 format.
                   */
                  dateTime: string;
                  /**
                   * Time Zone
                   * @description Time zone of the dateTime value.
                   */
                  timeZone: string;
              } | null;
              /**
               * DateTimeTimeZone
               * @description Scheduled start time for automatic replies.
               * @default null
               */
              scheduledStartTime: {
                  /**
                   * Date Time
                   * @description Date and time in ISO 8601 format.
                   */
                  dateTime: string;
                  /**
                   * Time Zone
                   * @description Time zone of the dateTime value.
                   */
                  timeZone: string;
              } | null;
          } | null;
          /**
           * Custom Mail Tip
           * @description Custom mail tip set for the recipient.
           * @default null
           */
          customMailTip: string | null;
          /**
           * Delivery Restricted
           * @description True if delivery to the recipient is restricted.
           * @default null
           */
          deliveryRestricted: boolean | null;
          /**
           * Email Address
           * @description Email address information of the recipient.
           */
          emailAddress: {
              /**
               * Address
               * @description SMTP address of the recipient.
               */
              address: string;
              /**
               * Name
               * @description Display name of the email address.
               * @default null
               */
              name: string | null;
          };
          /**
           * External Member Count
           * @description Number of external members in a distribution list recipient.
           * @default null
           */
          externalMemberCount: number | null;
          /**
           * Is Moderated
           * @description True if the recipient is moderated.
           * @default null
           */
          isModerated: boolean | null;
          /**
           * Mailbox Full
           * @description True if the recipient's mailbox is full.
           * @default null
           */
          mailboxFull: boolean | null;
          /**
           * Max Message Size
           * @description Maximum message size the recipient can accept.
           * @default null
           */
          maxMessageSize: number | null;
          /**
           * Recipient Scope
           * @description Scope of the recipient (e.g., 'internal' vs 'external').
           * @default null
           */
          recipientScope: string | null;
          /**
           * Recipient Suggestions
           * @description Suggestions for alternative recipients.
           * @default null
           */
          recipientSuggestions: {
              /**
               * Address
               * @description SMTP address of the recipient.
               */
              address: string;
              /**
               * Name
               * @description Display name of the email address.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Total Member Count
           * @description Total number of members in a distribution list recipient.
           * @default null
           */
          totalMemberCount: number | null;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_MASTER_CATEGORIES tool input.
 */
type OUTLOOK_GET_MASTER_CATEGORIES_INPUT = {
  /**
   * Filter
   * @description OData $filter query to filter master categories.
   * @default null
   */
  filter: string | null;
  /**
   * Orderby
   * @description OData $orderby query to order master categories by property values.
   * @default null
   */
  orderby: string[] | null;
  /**
   * Select
   * @description OData $select query to specify properties to include.
   * @default null
   */
  select: string[] | null;
  /**
   * Skip
   * @description Number of master categories to skip for pagination (OData $skip).
   * @default null
   */
  skip: number | null;
  /**
   * Top
   * @description Maximum number of master categories to return (OData $top).
   * @default null
   */
  top: number | null;
  /**
   * User Id
   * @description The user's unique identifier or principal name. Use 'me' for the signed-in user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_MASTER_CATEGORIES tool output.
 */
type OUTLOOK_GET_MASTER_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Context
       * @description The OData context URL for the response.
       * @default null
       */
      "@odata.context": string | null;
      /**
       * @Odata.Next Link
       * @description URL to fetch the next page of master categories, if any.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description List of master category objects.
       */
      value: {
          /**
           * Color
           * @description Color associated with the master category.
           */
          color: string;
          /**
           * Display Name
           * @description Name of the master category.
           */
          displayName: string;
          /**
           * Id
           * @description Unique identifier for the master category.
           */
          id: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_SUPPORTED_LANGUAGES tool input.
 */
type OUTLOOK_GET_SUPPORTED_LANGUAGES_INPUT = {
  /**
   * User Id
   * @description The user's unique identifier or principal name. Use 'me' for the signed-in user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_SUPPORTED_LANGUAGES tool output.
 */
type OUTLOOK_GET_SUPPORTED_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description A list of supported locale information objects.
       */
      value: {
          /**
           * Display Name
           * @description Display name of the locale (e.g., 'English (United States)').
           */
          displayName: string;
          /**
           * Locale
           * @description Locale in BCP 47 format (e.g., 'en-US').
           */
          locale: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_SUPPORTED_TIME_ZONES tool input.
 */
type OUTLOOK_GET_SUPPORTED_TIME_ZONES_INPUT = {
  /**
   * Time Zone Standard
   * @description Specifies the time zone format to return. Supported values: 'Windows' or 'Iana'. Default is 'Windows' if not specified.
   * @default null
   * @enum {string|null}
   */
  timeZoneStandard: "Windows" | "Iana" | null;
};

/**
 * Type of OUTLOOK's OUTLOOK_GET_SUPPORTED_TIME_ZONES tool output.
 */
type OUTLOOK_GET_SUPPORTED_TIME_ZONES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description A list of supported time zone objects.
       */
      value: {
          /**
           * Alias
           * @description The identifier for the time zone.
           */
          alias: string;
          /**
           * Display Name
           * @description The display name of the time zone.
           */
          displayName: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_LIST_CALENDARS tool input.
 */
type OUTLOOK_LIST_CALENDARS_INPUT = {
  /**
   * Filter
   * @description OData filter expression (OData $filter).
   * @default null
   */
  filter: string | null;
  /**
   * Orderby
   * @description Order by expressions (OData $orderby).
   * @default null
   */
  orderby: string[] | null;
  /**
   * Select
   * @description Properties to include (OData $select).
   * @default null
   */
  select: string[] | null;
  /**
   * Skip
   * @description Number of calendars to skip (OData $skip).
   * @default null
   */
  skip: number | null;
  /**
   * Top
   * @description Maximum number of calendars to return (OData $top).
   * @default null
   */
  top: number | null;
  /**
   * User Id
   * @description User ID or userPrincipalName. Use 'me' for the signed-in user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_LIST_CALENDARS tool output.
 */
type OUTLOOK_LIST_CALENDARS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Delta Link
       * @description Delta link for tracking changes.
       * @default null
       */
      "@odata.deltaLink": string | null;
      /**
       * @Odata.Next Link
       * @description URL for next page of results.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description List of calendar objects.
       */
      value: {
          /**
           * Can Edit
           * @description True if the calendar can be edited.
           */
          canEdit: boolean;
          /**
           * Can Share
           * @description True if the calendar can be shared.
           */
          canShare: boolean;
          /**
           * Can View Private Items
           * @description True if private items can be accessed.
           */
          canViewPrivateItems: boolean;
          /**
           * Change Key
           * @description Version identifier for the calendar.
           */
          changeKey: string;
          /**
           * Color
           * @description Color theme associated with the calendar.
           * @default null
           */
          color: string | null;
          /**
           * Id
           * @description Unique identifier for the calendar.
           */
          id: string;
          /**
           * Is Default Calendar
           * @description True if this is the default calendar.
           */
          isDefaultCalendar: boolean;
          /**
           * Name
           * @description Name of the calendar.
           */
          name: string;
          /**
           * Owner
           * @description Owner information for the calendar.
           */
          owner: {
              /**
               * Address
               * @description Email address of the calendar owner.
               */
              address: string;
              /**
               * Name
               * @description Name of the calendar owner's display name.
               */
              name: string;
          };
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_LIST_EVENT_ATTACHMENTS tool input.
 */
type OUTLOOK_LIST_EVENT_ATTACHMENTS_INPUT = {
  /**
   * Event Id
   * @description The unique identifier of the calendar event to retrieve attachments for.
   */
  event_id?: string;
  /**
   * Filter
   * @description OData filter string to filter the attachments (OData $filter).
   * @default null
   */
  filter: string | null;
  /**
   * Orderby
   * @description Order by clauses to sort the results (OData $orderby).
   * @default null
   */
  orderby: string[] | null;
  /**
   * Select
   * @description List of attachment properties to include (OData $select).
   * @default null
   */
  select: string[] | null;
  /**
   * Skip
   * @description Number of attachments to skip (OData $skip).
   * @default null
   */
  skip: number | null;
  /**
   * Top
   * @description Maximum number of attachments to return (OData $top).
   * @default null
   */
  top: number | null;
  /**
   * User Id
   * @description The user's primary SMTP address, UPN, or 'me' for the signed-in user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_LIST_EVENT_ATTACHMENTS tool output.
 */
type OUTLOOK_LIST_EVENT_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Next Link
       * @description URL to the next page of results, if any.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description List of attachment objects for the event.
       */
      value: {
          /**
           * @Odata.Type
           * @description The OData type of the attachment.
           * @default null
           */
          "@odata.type": string | null;
          /**
           * Content Bytes
           * @description Base64-encoded contents of the attachment.
           * @default null
           */
          contentBytes: string | null;
          /**
           * Content Id
           * @description Unique identifier for the content within the attachment.
           * @default null
           */
          contentId: string | null;
          /**
           * Content Location
           * @description Location of the content.
           * @default null
           */
          contentLocation: string | null;
          /**
           * Content Type
           * @description MIME type of the attachment.
           * @default null
           */
          contentType: string | null;
          /**
           * Id
           * @description Unique identifier of the attachment.
           */
          id: string;
          /**
           * Is Contact Photo
           * @description Indicates if the attachment is a contact photo.
           * @default null
           */
          isContactPhoto: boolean | null;
          /**
           * Is Inline
           * @description Indicates if the attachment is inline.
           * @default null
           */
          isInline: boolean | null;
          /**
           * Last Modified Date Time
           * @description Timestamp of the last modification of the attachment.
           * @default null
           */
          lastModifiedDateTime: string | null;
          /**
           * Name
           * @description Name of the attachment.
           * @default null
           */
          name: string | null;
          /**
           * Size
           * @description Size of the attachment in bytes.
           * @default null
           */
          size: number | null;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_LIST_OUTLOOK_ATTACHMENTS tool input.
 */
type OUTLOOK_LIST_OUTLOOK_ATTACHMENTS_INPUT = {
  /**
   * Message Id
   * @description The unique identifier of the email message from which to retrieve attachments. This ID is specific to the Outlook message.
   */
  message_id?: string;
  /**
   * User Id
   * @description The unique identifier of the user. Use the user's UPN (e.g., 'AdeleV@contoso.onmicrosoft.com') or 'me' for the currently authenticated user. This specifies the mailbox to query.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_LIST_OUTLOOK_ATTACHMENTS tool output.
 */
type OUTLOOK_LIST_OUTLOOK_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message Id
       * @description Unique identifier of the email message to which the listed attachments belong.
       */
      message_id: string;
      /**
       * Response Data
       * @description Dictionary with a list of attachment metadata (e.g., filename, size, type) for the specified message, excluding `contentBytes` to keep the payload small.
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_LIST_REMINDERS tool input.
 */
type OUTLOOK_LIST_REMINDERS_INPUT = {
  /**
   * End Date Time
   * @description The end date and time in ISO 8601 format defining the window for reminders. Example: '2023-10-26T20:00:00.0000000'.
   */
  endDateTime?: string;
  /**
   * Start Date Time
   * @description The start date and time in ISO 8601 format defining the window for reminders. Example: '2023-10-26T19:00:00.0000000'.
   */
  startDateTime?: string;
  /**
   * User Id
   * @description User Principal Name or ID. Use 'me' to indicate the signed-in user.
   * @default me
   */
  userId: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_LIST_REMINDERS tool output.
 */
type OUTLOOK_LIST_REMINDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Context
       * @description The OData context URL for the response.
       * @default null
       */
      "@odata.context": string | null;
      /**
       * Value
       * @description List of reminder objects within the specified time range.
       */
      value: {
          /**
           * Change Key
           * @description The version identifier of the event.
           */
          changeKey: string;
          /**
           * Event End Time
           * @description The end time of the event.
           */
          eventEndTime: {
              /**
               * Date Time
               * @description A single point in time, expressed in ISO 8601 format. Example: '2023-10-26T19:00:00.0000000'.
               */
              dateTime: string;
              /**
               * Time Zone
               * @description The time zone for the dateTime, e.g., 'UTC' or 'Pacific Standard Time'.
               */
              timeZone: string;
          };
          /**
           * Event Id
           * @description The unique identifier of the event.
           */
          eventId: string;
          /**
           * Location
           * @description Specifies the location of an event.
           * @default null
           */
          eventLocation: {
              /**
               * Display Name
               * @description The display name of the event location.
               * @default null
               */
              displayName: string | null;
          } | null;
          /**
           * Event Start Time
           * @description The start time of the event.
           */
          eventStartTime: {
              /**
               * Date Time
               * @description A single point in time, expressed in ISO 8601 format. Example: '2023-10-26T19:00:00.0000000'.
               */
              dateTime: string;
              /**
               * Time Zone
               * @description The time zone for the dateTime, e.g., 'UTC' or 'Pacific Standard Time'.
               */
              timeZone: string;
          };
          /**
           * Event Subject
           * @description The subject of the event.
           * @default null
           */
          eventSubject: string | null;
          /**
           * Event Web Link
           * @description URL to open the event in Outlook on the web.
           * @default null
           */
          eventWebLink: string | null;
          /**
           * Reminder Fire Time
           * @description The time when the reminder will fire.
           */
          reminderFireTime: {
              /**
               * Date Time
               * @description A single point in time, expressed in ISO 8601 format. Example: '2023-10-26T19:00:00.0000000'.
               */
              dateTime: string;
              /**
               * Time Zone
               * @description The time zone for the dateTime, e.g., 'UTC' or 'Pacific Standard Time'.
               */
              timeZone: string;
          };
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_ADD_EVENT_ATTACHMENT tool input.
 */
type OUTLOOK_OUTLOOK_ADD_EVENT_ATTACHMENT_INPUT = {
  /**
   * Content Bytes
   * @description Base64-encoded file contents; required when '@odata.type' is fileAttachment.
   * @default null
   */
  contentBytes: string | null;
  /**
   * Event Id
   * @description The unique identifier of the calendar event to which the attachment will be added.
   */
  event_id?: string;
  /**
   * Item
   * @description The nested item payload; required when '@odata.type' is itemAttachment.
   * @default null
   */
  item: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description The display name of the attachment.
   */
  name?: string;
  /**
   * Odata Type
   * @description Attachment type: '#microsoft.graph.fileAttachment' requires 'contentBytes'; '#microsoft.graph.itemAttachment' requires 'item'.
   * @enum {string}
   */
  odata_type?: "#microsoft.graph.fileAttachment" | "#microsoft.graph.itemAttachment";
  /**
   * User Id
   * @description The user's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_ADD_EVENT_ATTACHMENT tool output.
 */
type OUTLOOK_OUTLOOK_ADD_EVENT_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The JSON object representing the created attachment.
       */
      response_data: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_CALENDAR_CREATE_EVENT tool input.
 */
type OUTLOOK_OUTLOOK_CALENDAR_CREATE_EVENT_INPUT = {
  /**
   * Attendees Info
   * @description A list of attendees for the event. Each attendee object requires an 'email'. 'name' and 'type' ('required', 'optional', 'resource') are optional.
   * @default []
   */
  attendees_info: {
      /**
       * Email
       * @description The email address of the attendee.
       */
      email: string;
      /**
       * Name
       * @description The display name of the attendee.
       * @default
       */
      name: string;
      /**
       * Type
       * @description The type of attendee. Valid values are 'required', 'optional', and 'resource'.
       * @default required
       */
      type: string;
  }[];
  /**
   * Body
   * @description The body of the event. This can be in plain text or HTML format, as specified by the 'is_html' field.
   */
  body?: string;
  /**
   * Categories
   * @description A list of categories associated with the event. These categories must already exist in the user's mailbox.
   * @default []
   */
  categories: string[];
  /**
   * End Datetime
   * Format: date-time
   * @description The end date and time of the event in ISO 8601 format. Time zone is specified in 'time_zone'.
   */
  end_datetime?: string;
  /**
   * Is Html
   * @description Specifies whether the 'body' content is HTML. Set to true for HTML content; otherwise, it's treated as plain text.
   * @default false
   */
  is_html: boolean;
  /**
   * Is Online Meeting
   * @description Set to true to indicate that the event is an online meeting. This will automatically generate an online meeting link if 'online_meeting_provider' is set (e.g., a Microsoft Teams link).
   * @default false
   */
  is_online_meeting: boolean;
  /**
   * Location
   * @description The physical location of the event.
   * @default
   */
  location: string;
  /**
   * Online Meeting Provider
   * @description Specifies the online meeting provider. Currently, only 'teamsForBusiness' is supported. If 'is_online_meeting' is true and this is set, a meeting link for the provider will be created.
   * @default null
   */
  online_meeting_provider: string | null;
  /**
   * Show As
   * @description The status to show on the calendar for the duration of the event. Valid values are: 'free', 'tentative', 'busy', 'oof' (out of office), 'workingElsewhere', 'unknown'.
   * @default busy
   */
  show_as: string;
  /**
   * Start Datetime
   * Format: date-time
   * @description The start date and time of the event in ISO 8601 format. Time zone is specified in 'time_zone'.
   */
  start_datetime?: string;
  /**
   * Subject
   * @description The subject of the calendar event.
   */
  subject?: string;
  /**
   * Time Zone
   * @description The time zone for the start and end times of the event. Uses Windows time zone names (e.g., 'Pacific Standard Time') or IANA time zone names (e.g., 'America/Los_Angeles'). UTC is also a valid input.
   */
  time_zone?: string;
  /**
   * User Id
   * @description The UPN (User Principal Name) or object ID of the user whose calendar the event will be created in. Use 'me' for the currently authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_CALENDAR_CREATE_EVENT tool output.
 */
type OUTLOOK_OUTLOOK_CALENDAR_CREATE_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The raw JSON response from the Microsoft Graph API. This includes details of the created event or error information if the creation failed.
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_CREATE_CONTACT tool input.
 */
type OUTLOOK_OUTLOOK_CREATE_CONTACT_INPUT = {
  /**
   * Birthday
   * @description The contact's birthday in 'YYYY-MM-DD' format. The time component will be set to midnight UTC (e.g., '1990-01-01' becomes '1990-01-01T00:00:00Z' in the API request).
   * @default
   */
  birthday: string;
  /**
   * Business Phones
   * @description A list of business phone numbers for the contact. Each number should be a string.
   */
  businessPhones?: string[];
  /**
   * Categories
   * @description A list of categories to assign to the contact.
   */
  categories?: string[];
  /**
   * Company Name
   * @description The name of the company the contact is associated with.
   * @default
   */
  companyName: string;
  /**
   * Department
   * @description The department the contact belongs to within their company.
   * @default
   */
  department: string;
  /**
   * Display Name
   * @description The contact's display name, typically their full name.
   * @default
   */
  displayName: string;
  /**
   * Email Addresses
   * @description A list of email addresses for the contact.
   */
  emailAddresses?: {
      /**
       * Address
       * @description The contact's email address.
       */
      address: string;
      /**
       * Name
       * @description The display name for the contact's email address.
       * @default
       */
      name: string;
  }[];
  /**
   * Given Name
   * @description The contact's given (first) name.
   * @default
   */
  givenName: string;
  /**
   * Home Phone
   * @description The contact's home phone number. If provided, this will be stored in Outlook as a list containing this single number.
   * @default
   */
  homePhone: string;
  /**
   * Job Title
   * @description The contact's job title.
   * @default
   */
  jobTitle: string;
  /**
   * Mobile Phone
   * @description The contact's mobile phone number.
   * @default
   */
  mobilePhone: string;
  /**
   * Notes
   * @description Personal notes about the contact. These notes are stored as 'personalNotes' in the Outlook contact details.
   * @default
   */
  notes: string;
  /**
   * Office Location
   * @description The contact's office location.
   * @default
   */
  officeLocation: string;
  /**
   * Surname
   * @description The contact's surname (last name).
   * @default
   */
  surname: string;
  /**
   * User Id
   * @description Identifier for the user whose contact list will be modified. Use 'me' for the authenticated user, or provide the user's principal name (e.g., 'user@example.com').
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_CREATE_CONTACT tool output.
 */
type OUTLOOK_OUTLOOK_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Id
       * @description The unique ID of the newly created Outlook contact.
       */
      contact_id: string;
      /**
       * Message
       * @description A confirmation message indicating the outcome of the contact creation operation, typically 'Contact created successfully.'.
       */
      message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_CREATE_DRAFT tool input.
 */
type OUTLOOK_OUTLOOK_CREATE_DRAFT_INPUT = {
  /**
   * FileUploadable
   * @description Optional file to attach. If provided, must include the file's content, name, and mimetype.
   * @default null
   */
  attachment: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  } | null;
  /**
   * Bcc Recipients
   * @description Optional list of BCC (blind carbon copy) recipient email addresses.
   * @default []
   */
  bcc_recipients: string[];
  /**
   * Body
   * @description Content of the email draft; use `is_html` to specify if HTML or plain text.
   */
  body?: string;
  /**
   * Cc Recipients
   * @description Optional list of CC (carbon copy) recipient email addresses.
   * @default []
   */
  cc_recipients: string[];
  /**
   * Conversation Id
   * @description Optional conversation ID to create the draft as part of an existing email conversation thread. If provided, the draft will be part of the specified conversation instead of starting a new one.
   * @default null
   */
  conversation_id: string | null;
  /**
   * Is Html
   * @description Specifies if the `body` is HTML. If `False`, `body` is plain text.
   * @default false
   */
  is_html: boolean;
  /**
   * Subject
   * @description Subject line for the email draft.
   */
  subject?: string;
  /**
   * To Recipients
   * @description List of primary 'To' recipient email addresses.
   */
  to_recipients?: string[];
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_CREATE_DRAFT tool output.
 */
type OUTLOOK_OUTLOOK_CREATE_DRAFT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the response from the Microsoft Graph API upon successful creation of the email draft. This typically includes details of the created draft, such as its ID, subject, and recipients. If an attachment was part of the request, its `contentBytes` field in this response will be replaced with the placeholder string '[BASE64_CONTENT_REMOVED]'.
       * @default {}
       */
      response_data: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_CREATE_DRAFT_REPLY tool input.
 */
type OUTLOOK_OUTLOOK_CREATE_DRAFT_REPLY_INPUT = {
  /**
   * Bcc Emails
   * @description List of email addresses to add as BCC recipients to the draft reply.
   * @default []
   */
  bcc_emails: string[];
  /**
   * Cc Emails
   * @description List of email addresses to add as CC recipients to the draft reply.
   * @default []
   */
  cc_emails: string[];
  /**
   * Comment
   * @description Plain text comment to include in the body of the reply draft.
   * @default null
   */
  comment: string | null;
  /**
   * Message Id
   * @description Unique ID of the message to reply to, typically obtained from actions like 'List Messages' or 'Get Message'.
   */
  message_id?: string;
  /**
   * User Id
   * @description User's mailbox identifier (email or 'me') for the original message and new draft location.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_CREATE_DRAFT_REPLY tool output.
 */
type OUTLOOK_OUTLOOK_CREATE_DRAFT_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Detailed information of the created draft message, including ID, subject, recipients, and body, as returned by the Microsoft Graph API.
       */
      response_data: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_DELETE_CONTACT tool input.
 */
type OUTLOOK_OUTLOOK_DELETE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Identifier of the contact to be deleted, typically obtained from 'List User Contacts' or 'Get Contact'.
   */
  contact_id?: string;
  /**
   * User Id
   * @description The UPN (User Principal Name) or ID of the user; use 'me' for the signed-in user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_DELETE_CONTACT tool output.
 */
type OUTLOOK_OUTLOOK_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description An empty dictionary returned upon successful deletion of the contact, confirming the operation's success.
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_DELETE_EVENT tool input.
 */
type OUTLOOK_OUTLOOK_DELETE_EVENT_INPUT = {
  /**
   * Event Id
   * @description Unique identifier of the calendar event to delete, typically obtained from event listing or retrieval actions.
   */
  event_id?: string;
  /**
   * Send Notifications
   * @description If `True`, sends cancellation notifications to event attendees upon deletion.
   * @default true
   */
  send_notifications: boolean;
  /**
   * User Id
   * @description User's email address or 'me' for the current user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_DELETE_EVENT tool output.
 */
type OUTLOOK_OUTLOOK_DELETE_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description API response, typically empty for successful deletions (204 No Content).
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_CONTACT tool input.
 */
type OUTLOOK_OUTLOOK_GET_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier for the contact within the specified user's Outlook address book.
   */
  contact_id?: string;
  /**
   * User Id
   * @description User's principal name (e.g., 'AdeleV@contoso.onmicrosoft.com') or 'me' for the authenticated user. Using 'me' is recommended for accessing one's own contacts.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_CONTACT tool output.
 */
type OUTLOOK_OUTLOOK_GET_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Dictionary containing detailed properties of the retrieved contact, following the Microsoft Graph API's contact resource structure (e.g., 'id', 'displayName', 'emailAddresses').
       */
      response_data: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_CONTACT_FOLDERS tool input.
 */
type OUTLOOK_OUTLOOK_GET_CONTACT_FOLDERS_INPUT = {
  /**
   * Expand
   * @description Related entities to expand inline, e.g., ['contacts'].
   */
  expand?: string[];
  /**
   * Filter
   * @description OData filter expression, e.g., startswith(displayName,'A').
   * @default null
   */
  filter: string | null;
  /**
   * Orderby
   * @description List of properties to order results by, e.g., ['displayName asc'].
   */
  orderby?: string[];
  /**
   * Select
   * @description List of properties to include in the response, e.g., ['id','displayName'].
   */
  select?: string[];
  /**
   * Skip
   * @description Number of contact folders to skip for pagination.
   * @default null
   */
  skip: number | null;
  /**
   * Top
   * @description Maximum number of contact folders to return.
   * @default null
   */
  top: number | null;
  /**
   * User Id
   * @description User principal name or ID. Use 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_CONTACT_FOLDERS tool output.
 */
type OUTLOOK_OUTLOOK_GET_CONTACT_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Next Link
       * @description URL to fetch the next page of results, if any.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description Collection of contactFolder objects.
       */
      value: {
          /**
           * Child Folder Count
           * @description Number of child folders under this folder.
           * @default null
           */
          childFolderCount: number | null;
          /**
           * Display Name
           * @description Display name of the contact folder.
           */
          displayName: string;
          /**
           * Id
           * @description Unique identifier of the contact folder.
           */
          id: string;
          /**
           * Parent Folder Id
           * @description ID of the parent folder; null for top-level folders.
           * @default null
           */
          parentFolderId: string | null;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_EVENT tool input.
 */
type OUTLOOK_OUTLOOK_GET_EVENT_INPUT = {
  /**
   * Event Id
   * @description The unique identifier of the calendar event to retrieve.
   */
  event_id?: string;
  /**
   * User Id
   * @description The user's primary SMTP address, user principal name (UPN), or the alias 'me' (for the signed-in user) to identify the calendar owner.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_EVENT tool output.
 */
type OUTLOOK_OUTLOOK_GET_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Complete data for the retrieved calendar event, including properties like subject, body, times, attendees, and organizer.
       */
      response_data: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_MESSAGE tool input.
 */
type OUTLOOK_OUTLOOK_GET_MESSAGE_INPUT = {
  /**
   * Message Id
   * @description Unique ID of the Outlook email message to retrieve.
   */
  message_id?: string;
  /**
   * Select
   * @description Comma-separated list of properties to include. Use 'internetMessageHeaders' to get email headers for filtering automated messages.
   * @default null
   */
  select: string | null;
  /**
   * User Id
   * @description User's email address, UPN, or 'me' for the currently authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_MESSAGE tool output.
 */
type OUTLOOK_OUTLOOK_GET_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Dictionary with detailed properties of the retrieved email, including sender, recipients, subject, and body, from the Microsoft Graph API.
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_PROFILE tool input.
 */
type OUTLOOK_OUTLOOK_GET_PROFILE_INPUT = {
  /**
   * User Id
   * @description The user's unique identifier or principal name. Use 'me' to get the profile of the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_PROFILE tool output.
 */
type OUTLOOK_OUTLOOK_GET_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the user's profile information. Common fields include 'id', 'displayName', 'givenName', 'surname', 'mail', 'userPrincipalName', 'jobTitle', 'mobilePhone', and 'officeLocation'. The exact set of fields returned can vary.
       */
      response_data: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_SCHEDULE tool input.
 */
type OUTLOOK_OUTLOOK_GET_SCHEDULE_INPUT = {
  /**
   * End Time
   * @description The end date, time, and time zone for the period for which to retrieve schedules. The period can be up to 62 days.
   */
  EndTime?: {
      /**
       * Date Time
       * @description A single point in time, expressed in a combined date and time format (ISO 8601). Example: '2023-10-26T10:00:00'.
       */
      dateTime: string;
      /**
       * Time Zone
       * @description The time zone for the 'dateTime'. Uses standard time zone names. Example: 'Pacific Standard Time'.
       */
      timeZone: string;
  };
  /**
   * Schedules
   * @description A list of SMTP email addresses for users, distribution lists, or resources whose schedules are to be retrieved. Maximum of 20 addresses.
   */
  Schedules?: string[];
  /**
   * Start Time
   * @description The start date, time, and time zone for the period for which to retrieve schedules.
   */
  StartTime?: {
      /**
       * Date Time
       * @description A single point in time, expressed in a combined date and time format (ISO 8601). Example: '2023-10-26T10:00:00'.
       */
      dateTime: string;
      /**
       * Time Zone
       * @description The time zone for the 'dateTime'. Uses standard time zone names. Example: 'Pacific Standard Time'.
       */
      timeZone: string;
  };
  /**
   * Availability View Interval
   * @description The duration of each time slot in the availability view, specified in minutes. Minimum: 5, Maximum: 1440. Default: 30.
   * @default 30
   */
  availabilityViewInterval: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_GET_SCHEDULE tool output.
 */
type OUTLOOK_OUTLOOK_GET_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the raw response from the Microsoft Graph API. This typically includes a 'value' key, which is a list of schedule information objects. Each object corresponds to a requested schedule and contains details like 'scheduleId' (the email address), 'availabilityView' (a string indicating free/busy status for time slots), 'scheduleItems' (a list of calendar items), and 'workingHours'.
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_LIST_CONTACTS tool input.
 */
type OUTLOOK_OUTLOOK_LIST_CONTACTS_INPUT = {
  /**
   * Contact Folder Id
   * @description ID of a specific contact folder. If omitted, contacts are retrieved from the default contact folder.
   * @default null
   */
  contact_folder_id: string | null;
  /**
   * Filter
   * @description OData V4 filter expression for targeted retrieval.
   * @default null
   */
  filter: string | null;
  /**
   * Orderby
   * @description List of properties to sort results by. Each item is a string like 'displayName asc' or 'createdDateTime desc'. MUST be provided as a list, even for single sort criteria. 'asc' is default.
   * @default []
   */
  orderby: string[];
  /**
   * Select
   * @description List of specific contact properties to retrieve. Each item is a property name. MUST be provided as a list. If empty, a default set of properties is returned.
   * @default []
   */
  select: string[];
  /**
   * Top
   * @description Maximum number of contacts to retrieve.
   * @default 10
   */
  top: number;
  /**
   * User Id
   * @description User Principal Name (UPN) or ID of the user. 'me' refers to the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_LIST_CONTACTS tool output.
 */
type OUTLOOK_OUTLOOK_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Parsed JSON dictionary with the list of contacts and related data from the API.
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_LIST_EVENTS tool input.
 */
type OUTLOOK_OUTLOOK_LIST_EVENTS_INPUT = {
  /**
   * Expand Recurring Events
   * @description When true, automatically expands recurring events to show actual occurrences within the filtered date range instead of series masters. When false (default), returns series masters as before.
   * @default false
   */
  expand_recurring_events: boolean;
  /**
   * Filter
   * @description OData query string to filter events (e.g., "start/dateTime ge 'YYYY-MM-DDTHH:MM:SSZ'"); string literals use single quotes.
   * @default
   */
  filter: string;
  /**
   * Orderby
   * @description List of properties to sort results by. Each item is a string like 'start/dateTime desc' or 'subject asc'. MUST be provided as a list, even for single sort criteria. Use 'asc' (default) or 'desc' for order.
   * @default null
   */
  orderby: string[] | null;
  /**
   * Select
   * @description List of specific event property names to return. Each item is a property name like 'subject' or 'start'. MUST be provided as a list. If omitted, a default set of properties is returned.
   * @default null
   */
  select: string[] | null;
  /**
   * Skip
   * @description Number of initial events to bypass, used for pagination.
   * @default 0
   */
  skip: number;
  /**
   * Timezone
   * @description Preferred IANA or Windows timezone for event start/end times (e.g., 'America/New_York'); defaults to UTC if unspecified/invalid.
   * @default UTC
   */
  timezone: string;
  /**
   * Top
   * @description Maximum number of events to retrieve per page for pagination.
   * @default 10
   */
  top: number;
  /**
   * User Id
   * @description Email address of the target user (or 'me' for authenticated user), identifying the calendar for event listing.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_LIST_EVENTS tool output.
 */
type OUTLOOK_OUTLOOK_LIST_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The JSON response from the Microsoft Graph API as a dictionary. This typically includes a 'value' key containing a list of event objects and may include an '@odata.nextLink' key for pagination if more results are available.
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_LIST_MAIL_FOLDERS tool input.
 */
type OUTLOOK_OUTLOOK_LIST_MAIL_FOLDERS_INPUT = {
  /**
   * Include Hidden Folders
   * @description Include hidden mail folders (isHidden=true) when set to true.
   * @default false
   */
  include_hidden_folders: boolean;
  /**
   * User Id
   * @description User's id, userPrincipalName, or 'me' for the signed-in user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_LIST_MAIL_FOLDERS tool output.
 */
type OUTLOOK_OUTLOOK_LIST_MAIL_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Dictionary with 'value' (list of mail folders) and optional '@odata.nextLink'.
       */
      response_data: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_LIST_MESSAGES tool input.
 */
type OUTLOOK_OUTLOOK_LIST_MESSAGES_INPUT = {
  /**
   * Categories
   * @description Filter by categories (case-sensitive); matches if tagged with any specified category.
   */
  categories?: string[];
  /**
   * Conversation Id
   * @description Filter messages by conversation ID to retrieve all messages in a specific email thread.
   * @default null
   */
  conversationId: string | null;
  /**
   * Folder
   * @description ID or well-known name of the mail folder (e.g., 'Inbox', 'SentItems', 'Drafts', 'DeletedItems').
   * @default inbox
   */
  folder: string;
  /**
   * From Address
   * @description Filter by the sender's exact email address.
   * @default null
   */
  from_address: string | null;
  /**
   * Has Attachments
   * @description Filter by attachment presence: 'true' for messages with attachments, 'false' for those without.
   * @default null
   */
  has_attachments: boolean | null;
  /**
   * Importance
   * @description Filter by importance: 'low', 'normal', or 'high'.
   * @default null
   */
  importance: string | null;
  /**
   * Is Read
   * @description Filter by read status: 'true' for read, 'false' for unread. Unspecified means no filter by read status.
   * @default null
   */
  is_read: boolean | null;
  /**
   * Orderby
   * @description List of properties to sort results by, with direction. Each item is a string like 'receivedDateTime desc' or 'subject asc'. MUST be provided as a list, even for single sort criteria.
   * @default [
   *       "receivedDateTime desc"
   *     ]
   */
  orderby: string[];
  /**
   * Received Date Time Ge
   * @description Filter messages received on or after this ISO 8601 timestamp.
   * @default null
   */
  received_date_time_ge: string | null;
  /**
   * Received Date Time Gt
   * @description Filter messages received after this ISO 8601 timestamp (e.g., '2023-01-01T00:00:00Z').
   * @default null
   */
  received_date_time_gt: string | null;
  /**
   * Received Date Time Le
   * @description Filter messages received on or before this ISO 8601 timestamp.
   * @default null
   */
  received_date_time_le: string | null;
  /**
   * Received Date Time Lt
   * @description Filter messages received before this ISO 8601 timestamp.
   * @default null
   */
  received_date_time_lt: string | null;
  /**
   * Select
   * @description List of message properties to include. Each item is a property name like 'subject', 'from', or 'receivedDateTime'. MUST be provided as a list. Reduces data transfer.
   */
  select?: string[];
  /**
   * Sent Date Time Gt
   * @description Filter messages sent after this ISO 8601 timestamp.
   * @default null
   */
  sent_date_time_gt: string | null;
  /**
   * Sent Date Time Lt
   * @description Filter messages sent before this ISO 8601 timestamp.
   * @default null
   */
  sent_date_time_lt: string | null;
  /**
   * Skip
   * @description Number of messages to skip from the beginning of the result set, for pagination.
   * @default 0
   */
  skip: number;
  /**
   * Subject
   * @description Filter by exact match of the subject line.
   * @default null
   */
  subject: string | null;
  /**
   * Subject Contains
   * @description Filter messages where the subject contains the specified case-insensitive substring.
   * @default null
   */
  subject_contains: string | null;
  /**
   * Subject Endswith
   * @description Filter messages where the subject ends with the specified case-insensitive string.
   * @default null
   */
  subject_endswith: string | null;
  /**
   * Subject Startswith
   * @description Filter messages where the subject starts with the specified case-insensitive string.
   * @default null
   */
  subject_startswith: string | null;
  /**
   * Top
   * @description Maximum number of messages to return (1-1000).
   * @default 10
   */
  top: number;
  /**
   * User Id
   * @description Target user's email or 'me' for authenticated user. For delegated access, use shared mailbox or delegated user's email.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_LIST_MESSAGES tool output.
 */
type OUTLOOK_OUTLOOK_LIST_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Dictionary containing the list of retrieved messages and possible pagination info (e.g., '@odata.nextLink').
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_MOVE_MESSAGE tool input.
 */
type OUTLOOK_OUTLOOK_MOVE_MESSAGE_INPUT = {
  /**
   * Destination Id
   * @description The destination folder ID, or a well-known folder name (e.g., 'inbox', 'deleteditems', 'drafts', 'sentitems').
   */
  destination_id?: string;
  /**
   * Message Id
   * @description Unique ID of the Outlook email message to move.
   */
  message_id?: string;
  /**
   * User Id
   * @description User's email address, UPN, or 'me' for the currently authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_MOVE_MESSAGE tool output.
 */
type OUTLOOK_OUTLOOK_MOVE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Dictionary containing the full JSON representation of the moved message as returned by the Microsoft Graph API.
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_REPLY_EMAIL tool input.
 */
type OUTLOOK_OUTLOOK_REPLY_EMAIL_INPUT = {
  /**
   * Bcc Emails
   * @description List of email addresses for BCC recipients.
   * @default []
   */
  bcc_emails: string[];
  /**
   * Cc Emails
   * @description List of email addresses for CC recipients.
   * @default []
   */
  cc_emails: string[];
  /**
   * Comment
   * @description The plain text body of the reply email.
   */
  comment?: string;
  /**
   * Message Id
   * @description The unique ID of the message to reply to. This ID can be obtained from the `OUTLOOK_LIST_MESSAGES` action.
   */
  message_id?: string;
  /**
   * User Id
   * @description The user's email address or 'me' to indicate the authenticated user. This specifies the mailbox from which the reply will be sent.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_REPLY_EMAIL tool output.
 */
type OUTLOOK_OUTLOOK_REPLY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A confirmation message indicating that the email reply was sent successfully.
       */
      message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_SEARCH_MESSAGES tool input.
 */
type OUTLOOK_OUTLOOK_SEARCH_MESSAGES_INPUT = {
  /**
   * Enable Top Results
   * @description If `true`, sorts results by relevance; otherwise, sorts by date in descending order (newest first).
   * @default false
   */
  enable_top_results: boolean;
  /**
   * From Email
   * @description The sender's email address to filter messages; only Microsoft 365/Enterprise domains are supported.
   * @default null
   */
  fromEmail: string | null;
  /**
   * From Index
   * @description The 0-based starting index for the returned search results for pagination.
   * @default 0
   */
  from_index: number;
  /**
   * Has Attachments
   * @description Filters messages based on the presence of attachments.
   * @default null
   */
  hasAttachments: boolean | null;
  /**
   * Query
   * @description The free-text search string. Can include terms from the message body, attachments, sender, subject, or other properties.
   */
  query?: string;
  /**
   * Size
   * @description The maximum number of search results to return in a single response for pagination.
   * @default 25
   */
  size: number;
  /**
   * Subject
   * @description Text to search for within the message subject line.
   * @default null
   */
  subject: string | null;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_SEARCH_MESSAGES tool output.
 */
type OUTLOOK_OUTLOOK_SEARCH_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The raw JSON response from the Microsoft Graph Search API's message search endpoint.
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_SEND_EMAIL tool input.
 */
type OUTLOOK_OUTLOOK_SEND_EMAIL_INPUT = {
  /**
   * FileUploadable
   * @description Optional file to attach. If provided, its name, mimetype, and content must be valid and non-empty.
   * @default null
   */
  attachment: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  } | null;
  /**
   * Bcc Emails
   * @description List of email addresses for BCC recipients.
   * @default []
   */
  bcc_emails: string[];
  /**
   * Body
   * @description The content of the email body, plain text or HTML based on `is_html`.
   */
  body?: string;
  /**
   * Cc Emails
   * @description List of email addresses for CC recipients.
   * @default []
   */
  cc_emails: string[];
  /**
   * Is Html
   * @description Specifies if the email body is HTML; `True` for HTML, `False` for plain text.
   * @default false
   */
  is_html: boolean;
  /**
   * Save To Sent Items
   * @description Indicates if the email should be saved in 'Sent Items'.
   * @default true
   */
  save_to_sent_items: boolean;
  /**
   * Subject
   * @description The subject line of the email.
   */
  subject?: string;
  /**
   * To Email
   * @description The primary recipient's email address.
   */
  to_email?: string;
  /**
   * To Name
   * @description The display name of the primary recipient.
   * @default null
   */
  to_name: string | null;
  /**
   * User Id
   * @description The user's email address or the alias 'me' to represent the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_SEND_EMAIL tool output.
 */
type OUTLOOK_OUTLOOK_SEND_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A confirmation message indicating that the email was successfully sent, e.g., 'Email sent successfully.'
       */
      message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_UPDATE_CALENDAR_EVENT tool input.
 */
type OUTLOOK_OUTLOOK_UPDATE_CALENDAR_EVENT_INPUT = {
  /**
   * Attendees
   * @description A list of attendees for the event. Providing this list (even if empty) will replace all existing attendees on the event.
   * @default []
   */
  attendees: {
      /**
       * Email Address
       * @description The email address and optional name of the attendee.
       */
      emailAddress: {
          /**
           * Address
           * @description The complete email address of the attendee.
           */
          address: string;
          /**
           * Name
           * @description The display name of the attendee.
           * @default
           */
          name: string;
      };
      /**
       * Type
       * @description The attendee's type. Valid values are 'required' or 'optional'.
       */
      type: string;
  }[];
  /**
   * BodyContent
   * @description The body of the event, specifying content type ('Text' or 'HTML') and the content itself.
   * @default null
   */
  body: {
      /**
       * Content
       * @description The actual content of the event body, corresponding to the specified contentType.
       */
      content: string;
      /**
       * Content Type
       * @description The format of the event body. Must be 'Text' for plain text or 'HTML' for HTML content.
       */
      contentType: string;
  } | null;
  /**
   * Categories
   * @description A list of categories to associate with the event. Providing this list (even if empty) will replace all existing categories of the event.
   * @default []
   */
  categories: string[];
  /**
   * End Datetime
   * Format: date-time
   * @description The new end date and time for the event. Expects a datetime object or an ISO 8601 formatted string. Must be chronologically after `start_datetime`. The time zone for this datetime is specified by the `time_zone` field.
   * @default null
   */
  end_datetime: string | null;
  /**
   * Event Id
   * @description The unique identifier of the calendar event to be updated. This ID can be obtained from the OUTLOOK_LIST_EVENTS action.
   */
  event_id?: string;
  /**
   * Location
   * @description The location of the event, represented as a dictionary.
   * @default {}
   */
  location: {
      [key: string]: string;
  };
  /**
   * Show As
   * @description The availability status to show for the event. Valid values: 'free', 'tentative', 'busy', 'oof' (out of office).
   * @default busy
   */
  show_as: string;
  /**
   * Start Datetime
   * Format: date-time
   * @description The new start date and time for the event. Expects a datetime object or an ISO 8601 formatted string. The time zone for this datetime is specified by the `time_zone` field.
   * @default null
   */
  start_datetime: string | null;
  /**
   * Subject
   * @description The new subject for the event. If explicitly set to an empty string, the event's subject will be cleared.
   * @default
   */
  subject: string;
  /**
   * Time Zone
   * @description The time zone for the `start_datetime` and `end_datetime` of the event. Uses IANA time zone database names (e.g., 'America/Los_Angeles', 'UTC').
   * @default UTC
   */
  time_zone: string;
  /**
   * User Id
   * @description The identifier of the user whose calendar event is to be updated. Accepts the user's principal name, ID, or 'me' for the currently authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_UPDATE_CALENDAR_EVENT tool output.
 */
type OUTLOOK_OUTLOOK_UPDATE_CALENDAR_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full JSON response from the Microsoft Graph API after successfully updating the event, typically including the details of the updated event.
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_UPDATE_CONTACT tool input.
 */
type OUTLOOK_OUTLOOK_UPDATE_CONTACT_INPUT = {
  /**
   * Birthday
   * @description Contact's birthday (YYYY-MM-DD format).
   * @default
   */
  birthday: string;
  /**
   * Business Phones
   * @description Contact's business phone numbers.
   */
  businessPhones?: string[];
  /**
   * Categories
   * @description Categories for organizing the contact.
   */
  categories?: string[];
  /**
   * Company Name
   * @description Contact's company name.
   * @default
   */
  companyName: string;
  /**
   * Contact Id
   * @description Unique identifier of the contact to update.
   */
  contact_id?: string;
  /**
   * Department
   * @description Contact's department.
   * @default
   */
  department: string;
  /**
   * Display Name
   * @description Contact's full display name.
   * @default
   */
  displayName: string;
  /**
   * Email Addresses
   * @description Contact's email addresses.
   */
  emailAddresses?: {
      /**
       * Address
       * @description Email address.
       */
      address: string;
      /**
       * Name
       * @description Display name for the email address.
       * @default
       */
      name: string;
  }[];
  /**
   * Given Name
   * @description Contact's given (first) name.
   * @default
   */
  givenName: string;
  /**
   * Home Phones
   * @description Contact's home phone numbers.
   */
  homePhones?: string[];
  /**
   * Job Title
   * @description Contact's job title.
   * @default
   */
  jobTitle: string;
  /**
   * Mobile Phone
   * @description Contact's mobile phone number.
   * @default
   */
  mobilePhone: string;
  /**
   * Notes
   * @description Personal notes about the contact (maps to 'personalNotes' in Microsoft Graph API).
   * @default
   */
  notes: string;
  /**
   * Office Location
   * @description Contact's office location.
   * @default
   */
  officeLocation: string;
  /**
   * Surname
   * @description Contact's surname (last name).
   * @default
   */
  surname: string;
  /**
   * User Id
   * @description User's identifier; 'me' for the signed-in user, or user's principal name/ID.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_UPDATE_CONTACT tool output.
 */
type OUTLOOK_OUTLOOK_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full details of the updated contact from the Microsoft Graph API.
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_UPDATE_EMAIL tool input.
 */
type OUTLOOK_OUTLOOK_UPDATE_EMAIL_INPUT = {
  /**
   * Bcc Recipients
   * @description List of BCC recipients; replaces all existing BCCs. Omitting this field removes all current BCC recipients.
   */
  bcc_recipients?: {
      /**
       * Address
       * @description The SMTP email address of the recipient. For example, 'kat.hughes@example.com'.
       */
      address: string;
      /**
       * Name
       * @description Optional display name for the recipient (e.g., 'Katherine Hughes').
       * @default
       */
      name: string;
  }[];
  /**
   * BodyContent
   * @description New body content (Text or HTML). If omitted, the existing message body remains unchanged.
   * @default null
   */
  body: {
      /**
       * Content
       * @description The actual email body content, formatted according to the `contentType`. For example, if contentType is 'HTML', this would be HTML markup.
       */
      content: string;
      /**
       * Content Type
       * @description Specifies the format of the email body content. Must be either 'Text' (for plain text) or 'HTML' (for HTML markup).
       */
      contentType: string;
  } | null;
  /**
   * Cc Recipients
   * @description List of CC recipients; replaces all existing CCs. Omitting this field removes all current CC recipients.
   */
  cc_recipients?: {
      /**
       * Address
       * @description The SMTP email address of the recipient. For example, 'kat.hughes@example.com'.
       */
      address: string;
      /**
       * Name
       * @description Optional display name for the recipient (e.g., 'Katherine Hughes').
       * @default
       */
      name: string;
  }[];
  /**
   * Importance
   * @description New importance level ('low', 'normal', 'high'). If omitted, importance is set to 'normal'.
   * @default normal
   */
  importance: string;
  /**
   * Message Id
   * @description The unique identifier of the email message to be updated. This ID is typically obtained from listing messages or creating/sending a message.
   */
  message_id?: string;
  /**
   * Subject
   * @description New subject. Omitting or providing an empty string clears the subject. To preserve the current subject, provide its existing value.
   * @default
   */
  subject: string;
  /**
   * To Recipients
   * @description List of TO recipients; replaces all existing TOs. Omitting this field removes all current TO recipients.
   */
  to_recipients?: {
      /**
       * Address
       * @description The SMTP email address of the recipient. For example, 'kat.hughes@example.com'.
       */
      address: string;
      /**
       * Name
       * @description Optional display name for the recipient (e.g., 'Katherine Hughes').
       * @default
       */
      name: string;
  }[];
  /**
   * User Id
   * @description The UPN (User Principal Name) of the user whose mailbox contains the message, or 'me' for the currently authenticated user. This determines whose message is updated.
   * @default me
   */
  user_id: string;
};

/**
 * Type of OUTLOOK's OUTLOOK_OUTLOOK_UPDATE_EMAIL tool output.
 */
type OUTLOOK_OUTLOOK_UPDATE_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full JSON representation of the updated email message as returned by the Microsoft Graph API. This typically includes all properties of the message resource after the update operation.
       */
      response_data?: {
          [key: string]: unknown;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OUTLOOK's OUTLOOK_UPDATE_MAILBOX_SETTINGS tool input.
 */
type OUTLOOK_UPDATE_MAILBOX_SETTINGS_INPUT = {
  /**
   * AutomaticRepliesSetting
   * @description Configuration for automatic replies.
   * @default null
   */
  automaticRepliesSetting: {
      /**
       * External Audience
       * @description Audience for external automatic replies. Possible values: 'none', 'contactsOnly', 'all'.
       * @enum {string}
       */
      externalAudience: "none" | "contactsOnly" | "all";
      /**
       * External Reply Message
       * @description Automatic reply message sent to external senders.
       * @default null
       */
      externalReplyMessage: string | null;
      /**
       * Internal Reply Message
       * @description Automatic reply message sent to internal senders.
       * @default null
       */
      internalReplyMessage: string | null;
      /**
       * DateTimeTimeZone
       * @description End date and time for scheduled automatic replies.
       * @default null
       */
      scheduledEndDateTime: {
          /**
           * Date Time
           * @description Date and time in ISO 8601 format.
           */
          dateTime: string;
          /**
           * Time Zone
           * @description Time zone of the dateTime value.
           */
          timeZone: string;
      } | null;
      /**
       * DateTimeTimeZone
       * @description Start date and time for scheduled automatic replies.
       * @default null
       */
      scheduledStartDateTime: {
          /**
           * Date Time
           * @description Date and time in ISO 8601 format.
           */
          dateTime: string;
          /**
           * Time Zone
           * @description Time zone of the dateTime value.
           */
          timeZone: string;
      } | null;
      /**
       * Status
       * @description The automatic replies status. Possible values: 'disabled', 'alwaysEnabled', 'scheduled'.
       * @enum {string}
       */
      status: "disabled" | "alwaysEnabled" | "scheduled";
  } | null;
  /**
   * LocaleInfo
   * @description Locale preferences for date/time formatting.
   * @default null
   */
  language: {
      /**
       * Display Name
       * @description Display name of the locale (e.g., 'English (United States)').
       * @default null
       */
      displayName: string | null;
      /**
       * Locale
       * @description Locale in ISO 639-1 format (e.g., 'en-US').
       */
      locale: string;
  } | null;
  /**
   * Time Zone
   * @description Default mailbox time zone (e.g., 'Pacific Standard Time').
   * @default null
   */
  timeZone: string | null;
  /**
   * WorkingHours
   * @description Working hours configuration for the user.
   * @default null
   */
  workingHours: {
      /**
       * Days Of Week
       * @description Days of the week for working hours.
       */
      daysOfWeek: string[];
      /**
       * End Time
       * @description Workday end time in HH:mm:ss.
       */
      endTime: string;
      /**
       * Start Time
       * @description Workday start time in HH:mm:ss.
       */
      startTime: string;
      /**
       * Time Zone
       * @description Time zone details for working hours.
       */
      timeZone: {
          /**
           * Bias
           * @description UTC offset in minutes.
           */
          bias: number;
          /**
           * Daylight Offset
           * @description Daylight saving time offset rule.
           */
          daylightOffset: {
              /**
               * Day Occurrence
               * @description Occurrence of the day of week within the month (1-5).
               */
              dayOccurrence: number;
              /**
               * Day Of Week
               * @description Day of the week for the offset rule.
               * @enum {string}
               */
              dayOfWeek: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
              /**
               * Month
               * @description Month for the offset rule (1-12).
               */
              month: number;
              /**
               * Time
               * @description Time of day when the offset starts in HH:mm:ss.
               */
              time: string;
              /**
               * Year
               * @description Year for the offset rule.
               */
              year: number;
          };
          /**
           * Name
           * @description Time zone name for working hours (e.g., 'Pacific Standard Time').
           */
          name: string;
          /**
           * Standard Offset
           * @description Standard time offset rule.
           */
          standardOffset: {
              /**
               * Day Occurrence
               * @description Occurrence of the day of week within the month (1-5).
               */
              dayOccurrence: number;
              /**
               * Day Of Week
               * @description Day of the week for the offset rule.
               * @enum {string}
               */
              dayOfWeek: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
              /**
               * Month
               * @description Month for the offset rule (1-12).
               */
              month: number;
              /**
               * Time
               * @description Time of day when the offset starts in HH:mm:ss.
               */
              time: string;
              /**
               * Year
               * @description Year for the offset rule.
               */
              year: number;
          };
      };
  } | null;
};

/**
 * Type of OUTLOOK's OUTLOOK_UPDATE_MAILBOX_SETTINGS tool output.
 */
type OUTLOOK_UPDATE_MAILBOX_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * AutomaticRepliesSetting
       * @description Updated automatic replies settings.
       * @default null
       */
      automaticRepliesSetting: {
          /**
           * External Audience
           * @description Audience for external automatic replies. Possible values: 'none', 'contactsOnly', 'all'.
           * @enum {string}
           */
          externalAudience: "none" | "contactsOnly" | "all";
          /**
           * External Reply Message
           * @description Automatic reply message sent to external senders.
           * @default null
           */
          externalReplyMessage: string | null;
          /**
           * Internal Reply Message
           * @description Automatic reply message sent to internal senders.
           * @default null
           */
          internalReplyMessage: string | null;
          /**
           * DateTimeTimeZone
           * @description End date and time for scheduled automatic replies.
           * @default null
           */
          scheduledEndDateTime: {
              /**
               * Date Time
               * @description Date and time in ISO 8601 format.
               */
              dateTime: string;
              /**
               * Time Zone
               * @description Time zone of the dateTime value.
               */
              timeZone: string;
          } | null;
          /**
           * DateTimeTimeZone
           * @description Start date and time for scheduled automatic replies.
           * @default null
           */
          scheduledStartDateTime: {
              /**
               * Date Time
               * @description Date and time in ISO 8601 format.
               */
              dateTime: string;
              /**
               * Time Zone
               * @description Time zone of the dateTime value.
               */
              timeZone: string;
          } | null;
          /**
           * Status
           * @description The automatic replies status. Possible values: 'disabled', 'alwaysEnabled', 'scheduled'.
           * @enum {string}
           */
          status: "disabled" | "alwaysEnabled" | "scheduled";
      } | null;
      /**
       * LocaleInfo
       * @description Updated locale information.
       * @default null
       */
      language: {
          /**
           * Display Name
           * @description Display name of the locale (e.g., 'English (United States)').
           * @default null
           */
          displayName: string | null;
          /**
           * Locale
           * @description Locale in ISO 639-1 format (e.g., 'en-US').
           */
          locale: string;
      } | null;
      /**
       * Time Zone
       * @description Updated default mailbox time zone.
       * @default null
       */
      timeZone: string | null;
      /**
       * WorkingHours
       * @description Updated working hours configuration.
       * @default null
       */
      workingHours: {
          /**
           * Days Of Week
           * @description Days of the week for working hours.
           */
          daysOfWeek: string[];
          /**
           * End Time
           * @description Workday end time in HH:mm:ss.
           */
          endTime: string;
          /**
           * Start Time
           * @description Workday start time in HH:mm:ss.
           */
          startTime: string;
          /**
           * Time Zone
           * @description Time zone details for working hours.
           */
          timeZone: {
              /**
               * Bias
               * @description UTC offset in minutes.
               */
              bias: number;
              /**
               * Daylight Offset
               * @description Daylight saving time offset rule.
               */
              daylightOffset: {
                  /**
                   * Day Occurrence
                   * @description Occurrence of the day of week within the month (1-5).
                   */
                  dayOccurrence: number;
                  /**
                   * Day Of Week
                   * @description Day of the week for the offset rule.
                   * @enum {string}
                   */
                  dayOfWeek: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                  /**
                   * Month
                   * @description Month for the offset rule (1-12).
                   */
                  month: number;
                  /**
                   * Time
                   * @description Time of day when the offset starts in HH:mm:ss.
                   */
                  time: string;
                  /**
                   * Year
                   * @description Year for the offset rule.
                   */
                  year: number;
              };
              /**
               * Name
               * @description Time zone name for working hours (e.g., 'Pacific Standard Time').
               */
              name: string;
              /**
               * Standard Offset
               * @description Standard time offset rule.
               */
              standardOffset: {
                  /**
                   * Day Occurrence
                   * @description Occurrence of the day of week within the month (1-5).
                   */
                  dayOccurrence: number;
                  /**
                   * Day Of Week
                   * @description Day of the week for the offset rule.
                   * @enum {string}
                   */
                  dayOfWeek: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                  /**
                   * Month
                   * @description Month for the offset rule (1-12).
                   */
                  month: number;
                  /**
                   * Time
                   * @description Time of day when the offset starts in HH:mm:ss.
                   */
                  time: string;
                  /**
                   * Year
                   * @description Year for the offset rule.
                   */
                  year: number;
              };
          };
      } | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "OUTLOOK".
 */
export type OUTLOOK_TOOL_INPUTS = {
  ADD_MAIL_ATTACHMENT: OUTLOOK_ADD_MAIL_ATTACHMENT_INPUT
  CREATE_CALENDAR: OUTLOOK_CREATE_CALENDAR_INPUT
  CREATE_CONTACT_FOLDER: OUTLOOK_CREATE_CONTACT_FOLDER_INPUT
  CREATE_EMAIL_RULE: OUTLOOK_CREATE_EMAIL_RULE_INPUT
  CREATE_MAIL_FOLDER: OUTLOOK_CREATE_MAIL_FOLDER_INPUT
  CREATE_MASTER_CATEGORY: OUTLOOK_CREATE_MASTER_CATEGORY_INPUT
  DELETE_MAIL_FOLDER: OUTLOOK_DELETE_MAIL_FOLDER_INPUT
  DOWNLOAD_OUTLOOK_ATTACHMENT: OUTLOOK_DOWNLOAD_OUTLOOK_ATTACHMENT_INPUT
  GET_MAILBOX_SETTINGS: OUTLOOK_GET_MAILBOX_SETTINGS_INPUT
  GET_MAIL_DELTA: OUTLOOK_GET_MAIL_DELTA_INPUT
  GET_MAIL_TIPS: OUTLOOK_GET_MAIL_TIPS_INPUT
  GET_MASTER_CATEGORIES: OUTLOOK_GET_MASTER_CATEGORIES_INPUT
  GET_SUPPORTED_LANGUAGES: OUTLOOK_GET_SUPPORTED_LANGUAGES_INPUT
  GET_SUPPORTED_TIME_ZONES: OUTLOOK_GET_SUPPORTED_TIME_ZONES_INPUT
  LIST_CALENDARS: OUTLOOK_LIST_CALENDARS_INPUT
  LIST_EVENT_ATTACHMENTS: OUTLOOK_LIST_EVENT_ATTACHMENTS_INPUT
  LIST_OUTLOOK_ATTACHMENTS: OUTLOOK_LIST_OUTLOOK_ATTACHMENTS_INPUT
  LIST_REMINDERS: OUTLOOK_LIST_REMINDERS_INPUT
  OUTLOOK_ADD_EVENT_ATTACHMENT: OUTLOOK_OUTLOOK_ADD_EVENT_ATTACHMENT_INPUT
  OUTLOOK_CALENDAR_CREATE_EVENT: OUTLOOK_OUTLOOK_CALENDAR_CREATE_EVENT_INPUT
  OUTLOOK_CREATE_CONTACT: OUTLOOK_OUTLOOK_CREATE_CONTACT_INPUT
  OUTLOOK_CREATE_DRAFT: OUTLOOK_OUTLOOK_CREATE_DRAFT_INPUT
  OUTLOOK_CREATE_DRAFT_REPLY: OUTLOOK_OUTLOOK_CREATE_DRAFT_REPLY_INPUT
  OUTLOOK_DELETE_CONTACT: OUTLOOK_OUTLOOK_DELETE_CONTACT_INPUT
  OUTLOOK_DELETE_EVENT: OUTLOOK_OUTLOOK_DELETE_EVENT_INPUT
  OUTLOOK_GET_CONTACT: OUTLOOK_OUTLOOK_GET_CONTACT_INPUT
  OUTLOOK_GET_CONTACT_FOLDERS: OUTLOOK_OUTLOOK_GET_CONTACT_FOLDERS_INPUT
  OUTLOOK_GET_EVENT: OUTLOOK_OUTLOOK_GET_EVENT_INPUT
  OUTLOOK_GET_MESSAGE: OUTLOOK_OUTLOOK_GET_MESSAGE_INPUT
  OUTLOOK_GET_PROFILE: OUTLOOK_OUTLOOK_GET_PROFILE_INPUT
  OUTLOOK_GET_SCHEDULE: OUTLOOK_OUTLOOK_GET_SCHEDULE_INPUT
  OUTLOOK_LIST_CONTACTS: OUTLOOK_OUTLOOK_LIST_CONTACTS_INPUT
  OUTLOOK_LIST_EVENTS: OUTLOOK_OUTLOOK_LIST_EVENTS_INPUT
  OUTLOOK_LIST_MAIL_FOLDERS: OUTLOOK_OUTLOOK_LIST_MAIL_FOLDERS_INPUT
  OUTLOOK_LIST_MESSAGES: OUTLOOK_OUTLOOK_LIST_MESSAGES_INPUT
  OUTLOOK_MOVE_MESSAGE: OUTLOOK_OUTLOOK_MOVE_MESSAGE_INPUT
  OUTLOOK_REPLY_EMAIL: OUTLOOK_OUTLOOK_REPLY_EMAIL_INPUT
  OUTLOOK_SEARCH_MESSAGES: OUTLOOK_OUTLOOK_SEARCH_MESSAGES_INPUT
  OUTLOOK_SEND_EMAIL: OUTLOOK_OUTLOOK_SEND_EMAIL_INPUT
  OUTLOOK_UPDATE_CALENDAR_EVENT: OUTLOOK_OUTLOOK_UPDATE_CALENDAR_EVENT_INPUT
  OUTLOOK_UPDATE_CONTACT: OUTLOOK_OUTLOOK_UPDATE_CONTACT_INPUT
  OUTLOOK_UPDATE_EMAIL: OUTLOOK_OUTLOOK_UPDATE_EMAIL_INPUT
  UPDATE_MAILBOX_SETTINGS: OUTLOOK_UPDATE_MAILBOX_SETTINGS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OUTLOOK".
 */
export type OUTLOOK_TOOL_OUTPUTS = {
  ADD_MAIL_ATTACHMENT: OUTLOOK_ADD_MAIL_ATTACHMENT_OUTPUT
  CREATE_CALENDAR: OUTLOOK_CREATE_CALENDAR_OUTPUT
  CREATE_CONTACT_FOLDER: OUTLOOK_CREATE_CONTACT_FOLDER_OUTPUT
  CREATE_EMAIL_RULE: OUTLOOK_CREATE_EMAIL_RULE_OUTPUT
  CREATE_MAIL_FOLDER: OUTLOOK_CREATE_MAIL_FOLDER_OUTPUT
  CREATE_MASTER_CATEGORY: OUTLOOK_CREATE_MASTER_CATEGORY_OUTPUT
  DELETE_MAIL_FOLDER: OUTLOOK_DELETE_MAIL_FOLDER_OUTPUT
  DOWNLOAD_OUTLOOK_ATTACHMENT: OUTLOOK_DOWNLOAD_OUTLOOK_ATTACHMENT_OUTPUT
  GET_MAILBOX_SETTINGS: OUTLOOK_GET_MAILBOX_SETTINGS_OUTPUT
  GET_MAIL_DELTA: OUTLOOK_GET_MAIL_DELTA_OUTPUT
  GET_MAIL_TIPS: OUTLOOK_GET_MAIL_TIPS_OUTPUT
  GET_MASTER_CATEGORIES: OUTLOOK_GET_MASTER_CATEGORIES_OUTPUT
  GET_SUPPORTED_LANGUAGES: OUTLOOK_GET_SUPPORTED_LANGUAGES_OUTPUT
  GET_SUPPORTED_TIME_ZONES: OUTLOOK_GET_SUPPORTED_TIME_ZONES_OUTPUT
  LIST_CALENDARS: OUTLOOK_LIST_CALENDARS_OUTPUT
  LIST_EVENT_ATTACHMENTS: OUTLOOK_LIST_EVENT_ATTACHMENTS_OUTPUT
  LIST_OUTLOOK_ATTACHMENTS: OUTLOOK_LIST_OUTLOOK_ATTACHMENTS_OUTPUT
  LIST_REMINDERS: OUTLOOK_LIST_REMINDERS_OUTPUT
  OUTLOOK_ADD_EVENT_ATTACHMENT: OUTLOOK_OUTLOOK_ADD_EVENT_ATTACHMENT_OUTPUT
  OUTLOOK_CALENDAR_CREATE_EVENT: OUTLOOK_OUTLOOK_CALENDAR_CREATE_EVENT_OUTPUT
  OUTLOOK_CREATE_CONTACT: OUTLOOK_OUTLOOK_CREATE_CONTACT_OUTPUT
  OUTLOOK_CREATE_DRAFT: OUTLOOK_OUTLOOK_CREATE_DRAFT_OUTPUT
  OUTLOOK_CREATE_DRAFT_REPLY: OUTLOOK_OUTLOOK_CREATE_DRAFT_REPLY_OUTPUT
  OUTLOOK_DELETE_CONTACT: OUTLOOK_OUTLOOK_DELETE_CONTACT_OUTPUT
  OUTLOOK_DELETE_EVENT: OUTLOOK_OUTLOOK_DELETE_EVENT_OUTPUT
  OUTLOOK_GET_CONTACT: OUTLOOK_OUTLOOK_GET_CONTACT_OUTPUT
  OUTLOOK_GET_CONTACT_FOLDERS: OUTLOOK_OUTLOOK_GET_CONTACT_FOLDERS_OUTPUT
  OUTLOOK_GET_EVENT: OUTLOOK_OUTLOOK_GET_EVENT_OUTPUT
  OUTLOOK_GET_MESSAGE: OUTLOOK_OUTLOOK_GET_MESSAGE_OUTPUT
  OUTLOOK_GET_PROFILE: OUTLOOK_OUTLOOK_GET_PROFILE_OUTPUT
  OUTLOOK_GET_SCHEDULE: OUTLOOK_OUTLOOK_GET_SCHEDULE_OUTPUT
  OUTLOOK_LIST_CONTACTS: OUTLOOK_OUTLOOK_LIST_CONTACTS_OUTPUT
  OUTLOOK_LIST_EVENTS: OUTLOOK_OUTLOOK_LIST_EVENTS_OUTPUT
  OUTLOOK_LIST_MAIL_FOLDERS: OUTLOOK_OUTLOOK_LIST_MAIL_FOLDERS_OUTPUT
  OUTLOOK_LIST_MESSAGES: OUTLOOK_OUTLOOK_LIST_MESSAGES_OUTPUT
  OUTLOOK_MOVE_MESSAGE: OUTLOOK_OUTLOOK_MOVE_MESSAGE_OUTPUT
  OUTLOOK_REPLY_EMAIL: OUTLOOK_OUTLOOK_REPLY_EMAIL_OUTPUT
  OUTLOOK_SEARCH_MESSAGES: OUTLOOK_OUTLOOK_SEARCH_MESSAGES_OUTPUT
  OUTLOOK_SEND_EMAIL: OUTLOOK_OUTLOOK_SEND_EMAIL_OUTPUT
  OUTLOOK_UPDATE_CALENDAR_EVENT: OUTLOOK_OUTLOOK_UPDATE_CALENDAR_EVENT_OUTPUT
  OUTLOOK_UPDATE_CONTACT: OUTLOOK_OUTLOOK_UPDATE_CONTACT_OUTPUT
  OUTLOOK_UPDATE_EMAIL: OUTLOOK_OUTLOOK_UPDATE_EMAIL_OUTPUT
  UPDATE_MAILBOX_SETTINGS: OUTLOOK_UPDATE_MAILBOX_SETTINGS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of OUTLOOK's CONTACT_TRIGGER trigger payload.
 */
type OUTLOOK_CONTACT_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of event
   */
  event_type?: string;
  /**
   * Id
   * @description The unique identifier for the message
   */
  id?: string;
};

/**
 * Type of OUTLOOK's EVENT_CHANGE_TRIGGER trigger payload.
 */
type OUTLOOK_EVENT_CHANGE_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of event
   */
  event_type?: string;
  /**
   * Id
   * @description The unique identifier for the message
   */
  id?: string;
};

/**
 * Type of OUTLOOK's EVENT_TRIGGER trigger payload.
 */
type OUTLOOK_EVENT_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of event
   */
  event_type?: string;
  /**
   * Id
   * @description The unique identifier for the message
   */
  id?: string;
};

/**
 * Type of OUTLOOK's MESSAGE_TRIGGER trigger payload.
 */
type OUTLOOK_MESSAGE_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of event
   */
  event_type?: string;
  /**
   * Id
   * @description The unique identifier for the message
   */
  id?: string;
};

/**
 * Type of OUTLOOK's SENT_MESSAGE_TRIGGER trigger payload.
 */
type OUTLOOK_SENT_MESSAGE_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of event
   */
  event_type?: string;
  /**
   * Id
   * @description The unique identifier for the message
   */
  id?: string;
};

/**
 * Map of Composio's OUTLOOK toolkit.
 */
export const OUTLOOK = {
  slug: "outlook",
  tools: {
    /**
     * Tool to add an attachment to an email message. use when you have a message id and need to attach a small (<3 mb) file or reference.
     */
    ADD_MAIL_ATTACHMENT: "OUTLOOK_ADD_MAIL_ATTACHMENT",
    /**
     * Tool to create a new calendar in the signed-in user's mailbox. use when organizing events into a separate calendar.
     */
    CREATE_CALENDAR: "OUTLOOK_CREATE_CALENDAR",
    /**
     * Tool to create a new contact folder in the user's mailbox. use when needing to organize contacts into custom folders.
     */
    CREATE_CONTACT_FOLDER: "OUTLOOK_CREATE_CONTACT_FOLDER",
    /**
     * Create email rule filter with conditions and actions
     */
    CREATE_EMAIL_RULE: "OUTLOOK_CREATE_EMAIL_RULE",
    /**
     * Tool to create a new mail folder. use when you need to organize email into a new folder.
     */
    CREATE_MAIL_FOLDER: "OUTLOOK_CREATE_MAIL_FOLDER",
    /**
     * Tool to create a new category in the user's master category list. use after selecting a unique display name.
     */
    CREATE_MASTER_CATEGORY: "OUTLOOK_CREATE_MASTER_CATEGORY",
    /**
     * Delete a mail folder from the user's mailbox. use when you need to remove an existing mail folder.
     */
    DELETE_MAIL_FOLDER: "OUTLOOK_DELETE_MAIL_FOLDER",
    /**
     * Downloads a specific file attachment from an email message in a microsoft outlook mailbox; the attachment must contain 'contentbytes' (binary data) and not be a link or embedded item.
     */
    DOWNLOAD_OUTLOOK_ATTACHMENT: "OUTLOOK_DOWNLOAD_OUTLOOK_ATTACHMENT",
    /**
     * Tool to retrieve mailbox settings. use when you need to view settings such as automatic replies, time zone, and working hours for the signed-in or specified user.
     */
    GET_MAILBOX_SETTINGS: "OUTLOOK_GET_MAILBOX_SETTINGS",
    /**
     * Tool to retrieve incremental changes (delta) of messages in a mailbox. use when syncing mailbox updates since last checkpoint.
     */
    GET_MAIL_DELTA: "OUTLOOK_GET_MAIL_DELTA",
    /**
     * Tool to retrieve mail tips such as automatic replies and mailbox full status. use when you need to check recipient status before sending mail.
     */
    GET_MAIL_TIPS: "OUTLOOK_GET_MAIL_TIPS",
    /**
     * Tool to retrieve the user's master category list. use when you need to get all categories defined for the user.
     */
    GET_MASTER_CATEGORIES: "OUTLOOK_GET_MASTER_CATEGORIES",
    /**
     * Tool to retrieve supported languages in the user's mailbox. use when you need to display or select from available mailbox languages.
     */
    GET_SUPPORTED_LANGUAGES: "OUTLOOK_GET_SUPPORTED_LANGUAGES",
    /**
     * Tool to retrieve supported time zones in the user's mailbox. use when you need a list of time zones to display or choose from for event scheduling.
     */
    GET_SUPPORTED_TIME_ZONES: "OUTLOOK_GET_SUPPORTED_TIME_ZONES",
    /**
     * Tool to list calendars in the signed-in user's mailbox. use when you need to retrieve calendars with optional odata queries.
     */
    LIST_CALENDARS: "OUTLOOK_LIST_CALENDARS",
    /**
     * Tool to list attachments for a specific outlook calendar event. use when you have an event id and need to view its attachments.
     */
    LIST_EVENT_ATTACHMENTS: "OUTLOOK_LIST_EVENT_ATTACHMENTS",
    /**
     * Lists metadata (like name, size, and type, but not `contentbytes`) for all attachments of a specified outlook email message.
     */
    LIST_OUTLOOK_ATTACHMENTS: "OUTLOOK_LIST_OUTLOOK_ATTACHMENTS",
    /**
     * Tool to retrieve reminders for events occurring within a specified time range. use when you need to see upcoming reminders between two datetimes.
     */
    LIST_REMINDERS: "OUTLOOK_LIST_REMINDERS",
    /**
     * Adds an attachment to a specific outlook calendar event. use when you need to attach a file or nested item to an existing event.
     */
    OUTLOOK_ADD_EVENT_ATTACHMENT: "OUTLOOK_OUTLOOK_ADD_EVENT_ATTACHMENT",
    /**
     * Creates a new outlook calendar event, ensuring `start datetime` is chronologically before `end datetime`.
     */
    OUTLOOK_CALENDAR_CREATE_EVENT: "OUTLOOK_OUTLOOK_CALENDAR_CREATE_EVENT",
    /**
     * Creates a new contact in a microsoft outlook user's contacts folder.
     */
    OUTLOOK_CREATE_CONTACT: "OUTLOOK_OUTLOOK_CREATE_CONTACT",
    /**
     * Creates an outlook email draft with subject, body, recipients, and an optional attachment. supports creating drafts as part of existing conversation threads by specifying a conversationid; attachments require a name, mimetype, and content.
     */
    OUTLOOK_CREATE_DRAFT: "OUTLOOK_OUTLOOK_CREATE_DRAFT",
    /**
     * Creates a draft reply in the specified user's outlook mailbox to an existing message (identified by a valid `message id`), optionally including a `comment` and cc/bcc recipients.
     */
    OUTLOOK_CREATE_DRAFT_REPLY: "OUTLOOK_OUTLOOK_CREATE_DRAFT_REPLY",
    /**
     * Permanently deletes an existing contact, using its `contact id` (obtainable via 'list user contacts' or 'get contact'), from the outlook contacts of the user specified by `user id`.
     */
    OUTLOOK_DELETE_CONTACT: "OUTLOOK_OUTLOOK_DELETE_CONTACT",
    /**
     * Deletes an existing calendar event, identified by its unique `event id`, from a specified user's microsoft outlook calendar, with an option to send cancellation notifications to attendees.
     */
    OUTLOOK_DELETE_EVENT: "OUTLOOK_OUTLOOK_DELETE_EVENT",
    /**
     * Retrieves a specific outlook contact by its `contact id` from the contacts of a specified `user id` (defaults to 'me' for the authenticated user).
     */
    OUTLOOK_GET_CONTACT: "OUTLOOK_OUTLOOK_GET_CONTACT",
    /**
     * Tool to retrieve a list of contact folders in the signed-in user's mailbox. use after authentication when you need to browse or select among contact folders.
     */
    OUTLOOK_GET_CONTACT_FOLDERS: "OUTLOOK_OUTLOOK_GET_CONTACT_FOLDERS",
    /**
     * Retrieves the full details of a specific calendar event by its id from a user's outlook calendar, provided the event exists.
     */
    OUTLOOK_GET_EVENT: "OUTLOOK_OUTLOOK_GET_EVENT",
    /**
     * Retrieves a specific email message by its id from the specified user's outlook mailbox. use the 'select' parameter to include specific fields like 'internetmessageheaders' for filtering automated emails.
     */
    OUTLOOK_GET_MESSAGE: "OUTLOOK_OUTLOOK_GET_MESSAGE",
    /**
     * Retrieves the microsoft outlook profile for a specified user.
     */
    OUTLOOK_GET_PROFILE: "OUTLOOK_OUTLOOK_GET_PROFILE",
    /**
     * Retrieves free/busy schedule information for specified email addresses within a defined time window.
     */
    OUTLOOK_GET_SCHEDULE: "OUTLOOK_OUTLOOK_GET_SCHEDULE",
    /**
     * Retrieves a user's microsoft outlook contacts, from the default or a specified contact folder.
     */
    OUTLOOK_LIST_CONTACTS: "OUTLOOK_OUTLOOK_LIST_CONTACTS",
    /**
     * Retrieves events from a user's outlook calendar via microsoft graph api, supporting pagination, filtering, property selection, sorting, and timezone specification.
     */
    OUTLOOK_LIST_EVENTS: "OUTLOOK_OUTLOOK_LIST_EVENTS",
    /**
     * Tool to list a user's top-level mail folders. use when you need folders like inbox, drafts, sent items; set include hidden folders=true to include hidden folders.
     */
    OUTLOOK_LIST_MAIL_FOLDERS: "OUTLOOK_OUTLOOK_LIST_MAIL_FOLDERS",
    /**
     * Retrieves a list of email messages from a specified mail folder in an outlook mailbox, with options for filtering (including by conversationid to get all messages in a thread), pagination, and sorting; ensure 'user id' and 'folder' are valid, and all date/time strings are in iso 8601 format.
     */
    OUTLOOK_LIST_MESSAGES: "OUTLOOK_OUTLOOK_LIST_MESSAGES",
    /**
     * Move a message to another folder within the specified user's mailbox. this creates a new copy of the message in the destination folder and removes the original message.
     */
    OUTLOOK_MOVE_MESSAGE: "OUTLOOK_OUTLOOK_MOVE_MESSAGE",
    /**
     * Sends a plain text reply to an outlook email message, identified by `message id`, allowing optional cc and bcc recipients.
     */
    OUTLOOK_REPLY_EMAIL: "OUTLOOK_OUTLOOK_REPLY_EMAIL",
    /**
     * Searches messages in a microsoft 365 or enterprise outlook account mailbox, supporting filters for sender, subject, attachments, pagination, and sorting by relevance or date.
     */
    OUTLOOK_SEARCH_MESSAGES: "OUTLOOK_OUTLOOK_SEARCH_MESSAGES",
    /**
     * Sends an email with subject, body, recipients, and an optional attachment via microsoft graph api; attachments require a non-empty file with valid name and mimetype.
     */
    OUTLOOK_SEND_EMAIL: "OUTLOOK_OUTLOOK_SEND_EMAIL",
    /**
     * Updates specified fields of an existing outlook calendar event.
     */
    OUTLOOK_UPDATE_CALENDAR_EVENT: "OUTLOOK_OUTLOOK_UPDATE_CALENDAR_EVENT",
    /**
     * Updates an existing outlook contact, identified by `contact id` for the specified `user id`, requiring at least one other field to be modified.
     */
    OUTLOOK_UPDATE_CONTACT: "OUTLOOK_OUTLOOK_UPDATE_CONTACT",
    /**
     * Updates specified properties of an existing email message; `message id` must identify a valid message within the specified `user id`'s mailbox.
     */
    OUTLOOK_UPDATE_EMAIL: "OUTLOOK_OUTLOOK_UPDATE_EMAIL",
    /**
     * Tool to update mailbox settings for the signed-in user. use when you need to configure automatic replies, default time zone, language, or working hours. example: schedule automatic replies for vacation.
     */
    UPDATE_MAILBOX_SETTINGS: "OUTLOOK_UPDATE_MAILBOX_SETTINGS",
  },
  triggerTypes: {
    /**
     * Triggered when a new contact is added in the Outlook contacts.
     */
    CONTACT_TRIGGER: "OUTLOOK_CONTACT_TRIGGER",
    /**
     * Triggered when a new calendar event occurs (created, updated, or deleted) in the Outlook calendar.
     */
    EVENT_CHANGE_TRIGGER: "OUTLOOK_EVENT_CHANGE_TRIGGER",
    /**
     * Triggered when a new calendar event is created in the Outlook calendar.
     */
    EVENT_TRIGGER: "OUTLOOK_EVENT_TRIGGER",
    /**
     * Triggered when a new message is received in the Outlook mailbox.
     */
    MESSAGE_TRIGGER: "OUTLOOK_MESSAGE_TRIGGER",
    /**
     * Triggered when a new message is sent from the Outlook mailbox.
     */
    SENT_MESSAGE_TRIGGER: "OUTLOOK_SENT_MESSAGE_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "OUTLOOK".
 */
export type OUTLOOK_TRIGGER_PAYLOADS = {
  CONTACT_TRIGGER: OUTLOOK_CONTACT_TRIGGER_PAYLOAD
  EVENT_CHANGE_TRIGGER: OUTLOOK_EVENT_CHANGE_TRIGGER_PAYLOAD
  EVENT_TRIGGER: OUTLOOK_EVENT_TRIGGER_PAYLOAD
  MESSAGE_TRIGGER: OUTLOOK_MESSAGE_TRIGGER_PAYLOAD
  SENT_MESSAGE_TRIGGER: OUTLOOK_SENT_MESSAGE_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "OUTLOOK".
 */
export type OUTLOOK_TRIGGER_EVENTS = {
  CONTACT_TRIGGER: TriggerEvent<OUTLOOK_CONTACT_TRIGGER_PAYLOAD>
  EVENT_CHANGE_TRIGGER: TriggerEvent<OUTLOOK_EVENT_CHANGE_TRIGGER_PAYLOAD>
  EVENT_TRIGGER: TriggerEvent<OUTLOOK_EVENT_TRIGGER_PAYLOAD>
  MESSAGE_TRIGGER: TriggerEvent<OUTLOOK_MESSAGE_TRIGGER_PAYLOAD>
  SENT_MESSAGE_TRIGGER: TriggerEvent<OUTLOOK_SENT_MESSAGE_TRIGGER_PAYLOAD>
}
