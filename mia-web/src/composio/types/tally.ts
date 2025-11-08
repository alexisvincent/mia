// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TALLY's TALLY_CREATE_FORM tool input.
 */
type TALLY_CREATE_FORM_INPUT = {
  /**
   * Blocks
   * @description Ordered list of blocks defining the form content.
   * @default null
   */
  blocks: {
      /**
       * Group Type
       * @description Type/category of this block group.
       */
      groupType: string;
      /**
       * Group Uuid
       * @description Identifier for the block group.
       */
      groupUuid: string;
      /**
       * Payload
       * @description Block-specific configuration payload.
       */
      payload: {
          [key: string]: unknown;
      };
      /**
       * Type
       * @description Type of block (e.g., FORM_TITLE, INPUT_TEXT).
       */
      type: string;
      /**
       * Uuid
       * @description Unique identifier for this block.
       */
      uuid: string;
  }[] | null;
  /**
   * FormSettings
   * @description Optional form appearance and behavior settings.
   * @default null
   */
  settings: {
      /**
       * Is Closed
       * @description Whether the form is closed to new submissions.
       * @default null
       */
      isClosed: boolean | null;
      /**
       * Language
       * @description Locale code for form language.
       * @default null
       */
      language: string | null;
      /**
       * Redirect On Completion
       * @description URL to redirect after completion.
       * @default null
       */
      redirectOnCompletion: string | null;
  } | null;
  /**
   * Status
   * @description Form status: BLANK or PUBLISHED.
   * @default null
   * @enum {string|null}
   */
  status: "BLANK" | "PUBLISHED" | null;
  /**
   * Template Id
   * @description Template ID to base the form on.
   * @default null
   */
  templateId: string | null;
  /**
   * Workspace Id
   * @description Workspace ID to create the form under.
   * @default null
   */
  workspaceId: string | null;
};

/**
 * Type of TALLY's TALLY_CREATE_FORM tool output.
 */
type TALLY_CREATE_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601).
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the created form.
       */
      id: string;
      /**
       * Is Closed
       * @description Whether the form is closed to responses.
       */
      isClosed: boolean;
      /**
       * Number Of Submissions
       * @description Number of submissions received.
       */
      numberOfSubmissions: number;
      /**
       * Payments
       * @description List of payment objects attached to the form.
       */
      payments: {
          /**
           * Amount
           * @description Amount in smallest currency unit.
           */
          amount: number;
          /**
           * Currency
           * @description Currency code (ISO 4217).
           */
          currency: string;
      }[];
      /**
       * Status
       * @description Current form status.
       * @enum {string}
       */
      status: "BLANK" | "PUBLISHED";
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601).
       */
      updatedAt: string;
      /**
       * Workspace Id
       * @description Workspace ID where the form was created.
       */
      workspaceId: string;
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
 * Type of TALLY's TALLY_CREATE_WEBHOOK tool input.
 */
type TALLY_CREATE_WEBHOOK_INPUT = {
  /**
   * Event Types
   * @description List of event types that trigger the webhook. Currently only 'FORM_RESPONSE' is supported.
   * @default [
   *       "FORM_RESPONSE"
   *     ]
   */
  eventTypes: "FORM_RESPONSE"[] | null;
  /**
   * External Subscriber
   * @description Optional external identifier for the subscriber.
   * @default null
   */
  externalSubscriber: string | null;
  /**
   * Form Id
   * @description ID of the form to associate with the webhook.
   */
  formId?: string;
  /**
   * Http Headers
   * @description Optional list of custom HTTP headers to send with each webhook call.
   * @default null
   */
  httpHeaders: {
      /**
       * Name
       * @description Name of the HTTP header to include.
       */
      name: string;
      /**
       * Value
       * @description Value of the HTTP header.
       */
      value: string;
  }[] | null;
  /**
   * Signing Secret
   * @description Optional secret used to sign payloads for verification.
   * @default null
   */
  signingSecret: string | null;
  /**
   * Url
   * Format: uri
   * @description Callback endpoint URL for webhook notifications.
   */
  url?: string;
};

/**
 * Type of TALLY's TALLY_CREATE_WEBHOOK tool output.
 */
type TALLY_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the webhook was created.
       */
      createdAt: string;
      /**
       * Event Types
       * @description Event types that will trigger this webhook.
       */
      eventTypes: "FORM_RESPONSE"[];
      /**
       * Id
       * @description Unique identifier of the created webhook.
       */
      id: string;
      /**
       * Is Enabled
       * @description Whether the webhook is currently enabled.
       */
      isEnabled: boolean;
      /**
       * Url
       * Format: uri
       * @description Endpoint URL receiving webhook notifications.
       */
      url: string;
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
 * Type of TALLY's TALLY_DELETE_FORM tool input.
 */
type TALLY_DELETE_FORM_INPUT = {
  /**
   * Form Id
   * @description The unique identifier of the form to delete.
   */
  formId?: string;
};

/**
 * Type of TALLY's TALLY_DELETE_FORM tool output.
 */
type TALLY_DELETE_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of TALLY's TALLY_DELETE_WEBHOOK tool input.
 */
type TALLY_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete
   */
  webhookId?: string;
};

/**
 * Type of TALLY's TALLY_DELETE_WEBHOOK tool output.
 */
type TALLY_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of TALLY's TALLY_GET_FORM_DETAILS tool input.
 */
type TALLY_GET_FORM_DETAILS_INPUT = {
  /**
   * Form Id
   * @description The unique identifier of the form to retrieve details for.
   */
  formId?: string;
};

/**
 * Type of TALLY's TALLY_GET_FORM_DETAILS tool output.
 */
type TALLY_GET_FORM_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Blocks
       * @description List of blocks in the form.
       */
      blocks: {
          /**
           * Group Type
           * @description Type of the group.
           */
          groupType: string;
          /**
           * Group Uuid
           * @description Group identifier of the block.
           */
          groupUuid: string;
          /**
           * Payload
           * @description Additional data for the block.
           */
          payload: {
              [key: string]: unknown;
          };
          /**
           * Type
           * @description Type of the block (e.g., 'FORM_TITLE').
           */
          type: string;
          /**
           * Uuid
           * @description Unique identifier of the block.
           */
          uuid: string;
      }[];
      /**
       * Created At
       * @description Timestamp of form creation.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the form.
       */
      id: string;
      /**
       * Is Closed
       * @description Indicates if the form is closed.
       */
      isClosed: boolean;
      /**
       * Name
       * @description Name of the form.
       */
      name: string;
      /**
       * Number Of Submissions
       * @description Total number of submissions received.
       */
      numberOfSubmissions: number;
      /**
       * Payments
       * @description List of payment details associated with the form.
       */
      payments: {
          /**
           * Amount
           * @description Payment amount.
           */
          amount: number;
          /**
           * Currency
           * @description Currency of the payment.
           */
          currency: string;
      }[];
      /**
       * Settings
       * @description Form settings.
       */
      settings: {
          /**
           * Close Date
           * @description Date when the form closes.
           */
          closeDate: string;
          /**
           * Close Message Description
           * @description Description of the close message.
           */
          closeMessageDescription: string;
          /**
           * Close Message Title
           * @description Title of the close message.
           */
          closeMessageTitle: string;
          /**
           * Close Time
           * @description Time when the form closes.
           */
          closeTime: string;
          /**
           * Close Timezone
           * @description Timezone for closing the form.
           */
          closeTimezone: string;
          /**
           * Has Partial Submissions
           * @description Indicates if partial submissions are allowed.
           */
          hasPartialSubmissions: boolean;
          /**
           * Has Progress Bar
           * @description Indicates if a progress bar is displayed.
           */
          hasProgressBar: boolean;
          /**
           * Has Respondent Email Notifications
           * @description Indicates if respondent email notifications are enabled.
           */
          hasRespondentEmailNotifications: boolean;
          /**
           * Has Self Email Notifications
           * @description Indicates if self email notifications are enabled.
           */
          hasSelfEmailNotifications: boolean;
          /**
           * Is Closed
           * @description Indicates if the form is closed.
           */
          isClosed: boolean;
          /**
           * Language
           * @description Language of the form.
           */
          language: string;
          /**
           * Page Auto Jump
           * @description Indicates if auto-jump between pages is enabled.
           */
          pageAutoJump: boolean;
          /**
           * Password
           * @description Password for accessing the form.
           */
          password: string;
          /**
           * Redirect On Completion
           * @description URL to redirect upon completion.
           */
          redirectOnCompletion: string;
          /**
           * Respondent Email Body
           * @description Body of respondent email notifications.
           */
          respondentEmailBody: string;
          /**
           * Respondent Email From Name
           * @description Sender name for respondent email notifications.
           */
          respondentEmailFromName: string;
          /**
           * Respondent Email Reply To
           * @description Reply-to address for respondent email notifications.
           */
          respondentEmailReplyTo: string;
          /**
           * Respondent Email Subject
           * @description Subject of respondent email notifications.
           */
          respondentEmailSubject: string;
          /**
           * Respondent Email To
           * @description Recipient of respondent email notifications.
           */
          respondentEmailTo: string;
          /**
           * Save For Later
           * @description Indicates if 'save for later' is enabled.
           */
          saveForLater: boolean;
          /**
           * Self Email Body
           * @description Body of self email notifications.
           */
          selfEmailBody: string;
          /**
           * Self Email From Name
           * @description Sender name for self email notifications.
           */
          selfEmailFromName: string;
          /**
           * Self Email Reply To
           * @description Reply-to address for self email notifications.
           */
          selfEmailReplyTo: string;
          /**
           * Self Email Subject
           * @description Subject of self email notifications.
           */
          selfEmailSubject: string;
          /**
           * Self Email To
           * @description Recipient of self email notifications.
           */
          selfEmailTo: string;
          /**
           * Styles
           * @description Custom styles applied to the form.
           */
          styles: string;
          /**
           * Submissions Data Retention Duration
           * @description Duration for retaining submission data.
           */
          submissionsDataRetentionDuration: number;
          /**
           * Submissions Data Retention Unit
           * @description Unit of time for data retention duration.
           */
          submissionsDataRetentionUnit: string;
          /**
           * Submissions Limit
           * @description Limit on the number of submissions.
           */
          submissionsLimit: number;
          /**
           * Unique Submission Key
           * @description Key for unique submissions.
           */
          uniqueSubmissionKey: string;
      };
      /**
       * Status
       * @description Status of the form (e.g., 'BLANK').
       */
      status: string;
      /**
       * Updated At
       * @description Timestamp of last update.
       */
      updatedAt: string;
      /**
       * Workspace Id
       * @description ID of the workspace containing the form.
       */
      workspaceId: string;
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
 * Type of TALLY's TALLY_GET_FORM_FIELDS tool input.
 */
type TALLY_GET_FORM_FIELDS_INPUT = {
  /**
   * Form Id
   * @description Unique identifier of the form to retrieve fields for.
   */
  formId?: string;
};

/**
 * Type of TALLY's TALLY_GET_FORM_FIELDS tool output.
 */
type TALLY_GET_FORM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of form field blocks.
       */
      fields: {
          /**
           * Payload
           * @description Field-specific configuration payload.
           */
          payload: {
              [key: string]: unknown;
          };
          /**
           * Type
           * @description Type of the field block (e.g., INPUT_TEXT, MULTIPLE_CHOICE).
           */
          type: string;
          /**
           * Uuid
           * @description Unique identifier for the field block.
           */
          uuid: string;
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
 * Type of TALLY's TALLY_GET_FORM_RESPONSES tool input.
 */
type TALLY_GET_FORM_RESPONSES_INPUT = {
  /**
   * Form Id
   * @description The unique identifier of the form to retrieve responses for.
   */
  formId?: string;
  /**
   * Limit
   * @description Number of submissions per page (>=1).
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (>=1).
   * @default null
   */
  page: number | null;
};

/**
 * Type of TALLY's TALLY_GET_FORM_RESPONSES tool output.
 */
type TALLY_GET_FORM_RESPONSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Whether more pages are available.
       */
      hasMore: boolean;
      /**
       * Limit
       * @description Number of submissions per page.
       */
      limit: number;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Questions
       * @description List of questions in the form.
       */
      questions: {
          /**
           * Fields
           * @description List of fields associated with the question.
           */
          fields: {
              /**
               * Question Type
               * @description Type of the question (e.g., 'INPUT_TEXT').
               */
              questionType: string;
              /**
               * Title
               * @description Title of the field.
               */
              title: string;
              /**
               * Type
               * @description Type of the field (e.g., 'INPUT_FIELD').
               */
              type: string;
              /**
               * Uuid
               * @description Unique identifier for the field.
               */
              uuid: string;
          }[];
          /**
           * Id
           * @description Question identifier.
           */
          id: string;
          /**
           * Title
           * @description Question title.
           */
          title: string;
          /**
           * Type
           * @description Type of the question (e.g., 'INPUT_TEXT').
           */
          type: string;
      }[];
      /**
       * Submissions
       * @description List of submissions.
       */
      submissions: {
          /**
           * Form Id
           * @description Identifier of the form.
           */
          formId: string;
          /**
           * Id
           * @description Submission identifier.
           */
          id: string;
          /**
           * Is Completed
           * @description Whether the submission is completed.
           */
          isCompleted: boolean;
          /**
           * Respondent Id
           * @description Identifier of the respondent.
           */
          respondentId: string;
          /**
           * Responses
           * @description List of responses for this submission.
           */
          responses: {
              /**
               * Answer
               * @description Respondent's answer.
               */
              answer: string;
              /**
               * Id
               * @description Response identifier.
               */
              id: string;
              /**
               * Question Id
               * @description Identifier of the question.
               */
              questionId: string;
          }[];
          /**
           * Submitted At
           * @description Timestamp of submission (ISO 8601).
           */
          submittedAt: string;
      }[];
      /**
       * Total Number Of Submissions Per Filter
       * @description Submission counts by status.
       */
      totalNumberOfSubmissionsPerFilter: {
          /**
           * All
           * @description Total number of submissions.
           */
          all: number;
          /**
           * Completed
           * @description Number of completed submissions.
           */
          completed: number;
          /**
           * Partial
           * @description Number of partial submissions.
           */
          partial: number;
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
 * Type of TALLY's TALLY_GET_FORM_SETTINGS tool input.
 */
type TALLY_GET_FORM_SETTINGS_INPUT = {
  /**
   * Form Id
   * @description The unique identifier of the form to retrieve settings for.
   */
  formId?: string;
};

/**
 * Type of TALLY's TALLY_GET_FORM_SETTINGS tool output.
 */
type TALLY_GET_FORM_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Blocks
       * @description Content blocks of the form.
       */
      blocks: {
          /**
           * Group Type
           * @description Type of the block group.
           */
          groupType: string;
          /**
           * Group Uuid
           * @description Unique group identifier for the block.
           */
          groupUuid: string;
          /**
           * Payload
           * @description Configuration payload for the block.
           */
          payload: {
              [key: string]: unknown;
          };
          /**
           * Type
           * @description Block type, e.g., 'INPUT_TEXT'.
           */
          type: string;
          /**
           * Uuid
           * @description Unique block identifier.
           */
          uuid: string;
      }[];
      /**
       * Created At
       * @description ISO 8601 timestamp when the form was created.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the form.
       */
      id: string;
      /**
       * Is Closed
       * @description Whether the form is closed to new submissions.
       */
      isClosed: boolean;
      /**
       * Name
       * @description Name of the form.
       */
      name: string;
      /**
       * Number Of Submissions
       * @description Total number of submissions received.
       */
      numberOfSubmissions: number;
      /**
       * Payments
       * @description Payment configurations for the form.
       */
      payments?: {
          /**
           * Amount
           * @description Amount in smallest currency unit.
           */
          amount: number;
          /**
           * Currency
           * @description Currency code (ISO 4217).
           */
          currency: string;
      }[];
      /**
       * FormSettings
       * @description Comprehensive settings for a form.
       * @default null
       */
      settings: {
          /**
           * Close Date
           * @description Date when the form closes (ISO 8601).
           * @default null
           */
          closeDate: string | null;
          /**
           * Close Message Description
           * @description Description of the message shown when form is closed.
           * @default null
           */
          closeMessageDescription: string | null;
          /**
           * Close Message Title
           * @description Title of the message shown when form is closed.
           * @default null
           */
          closeMessageTitle: string | null;
          /**
           * Close Time
           * @description Time when the form closes (HH:MM).
           * @default null
           */
          closeTime: string | null;
          /**
           * Close Timezone
           * @description Timezone for closing the form.
           * @default null
           */
          closeTimezone: string | null;
          /**
           * Has Partial Submissions
           * @description Whether partial submissions are allowed.
           * @default null
           */
          hasPartialSubmissions: boolean | null;
          /**
           * Has Progress Bar
           * @description Whether a progress bar is displayed.
           * @default null
           */
          hasProgressBar: boolean | null;
          /**
           * Has Respondent Email Notifications
           * @description Whether respondent email notifications are enabled.
           * @default null
           */
          hasRespondentEmailNotifications: boolean | null;
          /**
           * Has Self Email Notifications
           * @description Whether self email notifications are enabled.
           * @default null
           */
          hasSelfEmailNotifications: boolean | null;
          /**
           * Is Closed
           * @description Whether the form is closed to responses.
           * @default null
           */
          isClosed: boolean | null;
          /**
           * Language
           * @description Locale code, e.g., 'en'.
           * @default null
           */
          language: string | null;
          /**
           * Page Auto Jump
           * @description Whether pages auto-jump on answer.
           * @default null
           */
          pageAutoJump: boolean | null;
          /**
           * Password
           * @description Password protection for the form.
           * @default null
           */
          password: string | null;
          /**
           * Redirect On Completion
           * @description URL to redirect after completion.
           * @default null
           */
          redirectOnCompletion: string | null;
          /**
           * Respondent Email Body
           * @description Body content for respondent email notifications.
           * @default null
           */
          respondentEmailBody: string | null;
          /**
           * Respondent Email From Name
           * @description From name for respondent email notifications.
           * @default null
           */
          respondentEmailFromName: string | null;
          /**
           * Respondent Email Reply To
           * @description Reply-to email for respondent notifications.
           * @default null
           */
          respondentEmailReplyTo: string | null;
          /**
           * Respondent Email Subject
           * @description Subject for respondent email notifications.
           * @default null
           */
          respondentEmailSubject: string | null;
          /**
           * Respondent Email To
           * @description Recipient email for respondent notifications.
           * @default null
           */
          respondentEmailTo: string | null;
          /**
           * Save For Later
           * @description Whether save-for-later is enabled.
           * @default null
           */
          saveForLater: boolean | null;
          /**
           * Self Email Body
           * @description Body content for self email notifications.
           * @default null
           */
          selfEmailBody: string | null;
          /**
           * Self Email From Name
           * @description From name for self email notifications.
           * @default null
           */
          selfEmailFromName: string | null;
          /**
           * Self Email Reply To
           * @description Reply-to email for self notifications.
           * @default null
           */
          selfEmailReplyTo: string | null;
          /**
           * Self Email Subject
           * @description Subject for self email notifications.
           * @default null
           */
          selfEmailSubject: string | null;
          /**
           * Self Email To
           * @description Recipient email for self notifications.
           * @default null
           */
          selfEmailTo: string | null;
          /**
           * Styles
           * @description Custom styles applied to the form.
           * @default null
           */
          styles: string | null;
          /**
           * Submissions Data Retention Duration
           * @description Duration for retaining submission data.
           * @default null
           */
          submissionsDataRetentionDuration: number | null;
          /**
           * Submissions Data Retention Unit
           * @description Unit of time for data retention duration.
           * @default null
           */
          submissionsDataRetentionUnit: string | null;
          /**
           * Submissions Limit
           * @description Maximum number of submissions allowed.
           * @default null
           */
          submissionsLimit: number | null;
          /**
           * Unique Submission Key
           * @description Key to ensure unique submissions.
           * @default null
           */
          uniqueSubmissionKey: string | null;
      } | null;
      /**
       * Status
       * @description Current status of the form.
       */
      status: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the form was last updated.
       */
      updatedAt: string;
      /**
       * Workspace Id
       * @description Workspace ID containing the form.
       */
      workspaceId: string;
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
 * Type of TALLY's TALLY_GET_USER_INFO tool input.
 */
type TALLY_GET_USER_INFO_INPUT = object;

/**
 * Type of TALLY's TALLY_GET_USER_INFO tool output.
 */
type TALLY_GET_USER_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL to the user's avatar image
       * @default null
       */
      avatarUrl: string | null;
      /**
       * Created At
       * @description Timestamp when the user account was created (ISO 8601)
       */
      createdAt: string;
      /**
       * Email
       * @description User's email address
       */
      email: string;
      /**
       * First Name
       * @description User's first name
       */
      firstName: string;
      /**
       * Full Name
       * @description User's full name
       */
      fullName: string;
      /**
       * Has Two Factor Enabled
       * @description Indicates if two-factor authentication is enabled
       */
      hasTwoFactorEnabled: boolean;
      /**
       * Id
       * @description User's unique identifier
       */
      id: string;
      /**
       * Is Deleted
       * @description Indicates if the user account is deleted
       */
      isDeleted: boolean;
      /**
       * Last Name
       * @description User's last name
       */
      lastName: string;
      /**
       * Organization Id
       * @description ID of the organization the user belongs to
       */
      organizationId: string;
      /**
       * Subscription Plan
       * @description User's subscription plan (e.g., 'FREE')
       * @default null
       */
      subscriptionPlan: string | null;
      /**
       * Updated At
       * @description Timestamp of the last update to the user account (ISO 8601)
       */
      updatedAt: string;
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
 * Type of TALLY's TALLY_GET_WEBHOOK_EVENTS tool input.
 */
type TALLY_GET_WEBHOOK_EVENTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to list events for
   */
  webhookId?: string;
};

/**
 * Type of TALLY's TALLY_GET_WEBHOOK_EVENTS tool output.
 */
type TALLY_GET_WEBHOOK_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of webhook events
       */
      events: {
          /**
           * Created At
           * @description When the event was created (ISO-8601)
           */
          createdAt: string;
          /**
           * Delivery Status
           * @description Delivery status of the webhook
           */
          deliveryStatus: string;
          /**
           * Event Type
           * @description Type of event
           */
          eventType: string;
          /**
           * Id
           * @description Event ID
           */
          id: string;
          /**
           * Payload
           * @description The webhook payload that was sent
           */
          payload: {
              [key: string]: unknown;
          };
          /**
           * Response
           * @description Response body from the webhook endpoint
           * @default null
           */
          response: string | null;
          /**
           * Retry
           * @description Number of retry attempts
           */
          retry: number;
          /**
           * Status Code
           * @description HTTP status code returned by the webhook endpoint
           * @default null
           */
          statusCode: number | null;
          /**
           * Updated At
           * @description When the event was last updated (ISO-8601)
           */
          updatedAt: string;
          /**
           * Webhook Id
           * @description Webhook ID
           */
          webhookId: string;
          /**
           * Webhook Url
           * @description The URL the webhook was sent to
           */
          webhookUrl: string;
      }[];
      /**
       * Has More
       * @description Whether there are more pages available
       */
      hasMore: boolean;
      /**
       * Limit
       * @description Number of events per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total Number Of Events
       * @description Total number of webhook events
       */
      totalNumberOfEvents: number;
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
 * Type of TALLY's TALLY_LIST_FORMS tool input.
 */
type TALLY_LIST_FORMS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (>=1).
   * @default null
   */
  page: number | null;
};

/**
 * Type of TALLY's TALLY_LIST_FORMS tool output.
 */
type TALLY_LIST_FORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description True if more pages are available.
       */
      hasMore: boolean;
      /**
       * Items
       * @description Forms on the current page.
       */
      items: {
          /**
           * Created At
           * @description Timestamp of form creation (ISO 8601).
           * @default null
           */
          createdAt: string | null;
          /**
           * Has Draft Blocks
           * @description Indicates if the form has draft blocks.
           * @default null
           */
          hasDraftBlocks: boolean | null;
          /**
           * Id
           * @description Unique identifier of the form.
           */
          id: string;
          /**
           * Index
           * @description Index of the form.
           * @default null
           */
          index: number | null;
          /**
           * Is Closed
           * @description Indicates if the form is closed.
           * @default null
           */
          isClosed: boolean | null;
          /**
           * Is Name Modified By User
           * @description Indicates if the form name was modified by user.
           * @default null
           */
          isNameModifiedByUser: boolean | null;
          /**
           * Name
           * @description Name of the form.
           * @default null
           */
          name: string | null;
          /**
           * Number Of Submissions
           * @description Total number of submissions received.
           * @default null
           */
          numberOfSubmissions: number | null;
          /**
           * Organization Id
           * @description ID of the organization containing the form.
           * @default null
           */
          organizationId: string | null;
          /**
           * Payments
           * @description List of payment details associated with the form.
           */
          payments?: {
              /**
               * Amount
               * @description Payment amount in smallest currency unit.
               */
              amount: number;
              /**
               * Currency
               * @description Currency code (ISO 4217).
               */
              currency: string;
          }[];
          /**
           * Status
           * @description Status of the form (e.g., 'BLANK').
           * @default null
           */
          status: string | null;
          /**
           * Updated At
           * @description Timestamp of last update (ISO 8601).
           * @default null
           */
          updatedAt: string | null;
          /**
           * Workspace Id
           * @description ID of the workspace containing the form.
           * @default null
           */
          workspaceId: string | null;
      }[];
      /**
       * Limit
       * @description Number of forms per page.
       */
      limit: number;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Total
       * @description Total number of forms available.
       */
      total: number;
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
 * Type of TALLY's TALLY_LIST_SUBMISSIONS tool input.
 */
type TALLY_LIST_SUBMISSIONS_INPUT = {
  /**
   * Form Id
   * @description The unique identifier of the form to list submissions for.
   */
  formId?: string;
  /**
   * Page
   * @description Page number for pagination (>=1).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of submissions per page (>=1).
   * @default null
   */
  pageSize: number | null;
};

/**
 * Type of TALLY's TALLY_LIST_SUBMISSIONS tool output.
 */
type TALLY_LIST_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @description Next page number, or null if last page.
       * @default null
       */
      nextPage: number | null;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Page Size
       * @description Number of submissions per page.
       */
      pageSize: number;
      /**
       * Submissions
       * @description List of submissions.
       */
      submissions: {
          /**
           * Created At
           * @description Creation timestamp (ISO 8601).
           */
          createdAt: string;
          /**
           * Data
           * @description Submission data mapping field IDs to their responses.
           */
          data: {
              [key: string]: string | boolean | number | (string | boolean | number)[];
          };
          /**
           * Form Id
           * @description Identifier of the form.
           */
          formId: string;
          /**
           * Id
           * @description Unique identifier of the submission.
           */
          id: string;
          /**
           * Updated At
           * @description Last update timestamp (ISO 8601).
           */
          updatedAt: string;
      }[];
      /**
       * Total
       * @description Total number of submissions.
       */
      total: number;
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
 * Type of TALLY's TALLY_LIST_WEBHOOKS tool input.
 */
type TALLY_LIST_WEBHOOKS_INPUT = {
  /**
   * Limit
   * @description Number of webhooks per page (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (>=1).
   * @default null
   */
  page: number | null;
};

/**
 * Type of TALLY's TALLY_LIST_WEBHOOKS tool output.
 */
type TALLY_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description True if more pages are available
       */
      hasMore: boolean;
      /**
       * Limit
       * @description Number of webhooks per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total Count
       * @description Total number of webhooks available
       */
      totalCount: number;
      /**
       * Webhooks
       * @description List of webhooks on the current page
       */
      webhooks: {
          /**
           * Created At
           * @description ISO-8601 timestamp when the webhook was created
           */
          createdAt: string;
          /**
           * Event Types
           * @description Types of events this webhook subscribes to
           */
          eventTypes: string[];
          /**
           * External Subscriber
           * @description External subscriber identifier (may be null)
           * @default null
           */
          externalSubscriber: string | null;
          /**
           * Form Id
           * @description ID of the form this webhook is associated with
           */
          formId: string;
          /**
           * Http Headers
           * @description Custom HTTP headers included in each webhook request
           * @default null
           */
          httpHeaders: {
              /**
               * Name
               * @description Name of the HTTP header to include in webhook requests
               */
              name: string;
              /**
               * Value
               * @description Value of the HTTP header
               */
              value: string;
          }[] | null;
          /**
           * Id
           * @description Unique identifier of the webhook
           */
          id: string;
          /**
           * Is Enabled
           * @description Whether the webhook is currently enabled
           */
          isEnabled: boolean;
          /**
           * Last Synced At
           * @description ISO-8601 timestamp when this webhook last successfully synced
           * @default null
           */
          lastSyncedAt: string | null;
          /**
           * Signing Secret
           * @description Secret used to sign webhook payloads (may be null)
           * @default null
           */
          signingSecret: string | null;
          /**
           * Updated At
           * @description ISO-8601 timestamp when the webhook was last updated
           */
          updatedAt: string;
          /**
           * Url
           * @description The webhook endpoint URL
           */
          url: string;
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
 * Type of TALLY's TALLY_LIST_WORKSPACES tool input.
 */
type TALLY_LIST_WORKSPACES_INPUT = {
  /**
   * Page
   * @description Page number for pagination (>=1).
   * @default null
   */
  page: number | null;
};

/**
 * Type of TALLY's TALLY_LIST_WORKSPACES tool output.
 */
type TALLY_LIST_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description True if more pages are available.
       */
      hasMore: boolean;
      /**
       * Items
       * @description Workspaces on the current page.
       */
      items: {
          /**
           * Created At
           * @description Timestamp when the workspace was created (ISO 8601)
           */
          createdAt: string;
          /**
           * Created By User Id
           * @description ID of the user who created the workspace
           */
          createdByUserId: string;
          /**
           * Id
           * @description Workspace unique identifier
           */
          id: string;
          /**
           * Invites
           * @description List of pending invites for the workspace
           */
          invites: {
              /**
               * Email
               * @description Email address invited to the workspace
               */
              email: string;
              /**
               * Id
               * @description Invite unique identifier
               */
              id: string;
              /**
               * Workspace Ids
               * @description IDs of the workspaces this invite applies to
               */
              workspaceIds: string[];
          }[];
          /**
           * Members
           * @description List of members in the workspace
           */
          members: {
              /**
               * Avatar Url
               * @description URL of the member's avatar image
               * @default null
               */
              avatarUrl: string | null;
              /**
               * Created At
               * @description Timestamp when the member was created (ISO 8601)
               */
              createdAt: string;
              /**
               * Email
               * @description Member email address
               */
              email: string;
              /**
               * First Name
               * @description Member first name
               */
              firstName: string;
              /**
               * Full Name
               * @description Member full name
               */
              fullName: string;
              /**
               * Has Two Factor Enabled
               * @description Whether two-factor authentication is enabled for this member
               */
              hasTwoFactorEnabled: boolean;
              /**
               * Id
               * @description Member unique identifier
               */
              id: string;
              /**
               * Is Deleted
               * @description Whether the member account is deleted
               */
              isDeleted: boolean;
              /**
               * Last Name
               * @description Member last name
               */
              lastName: string;
              /**
               * Organization Id
               * @description Organization ID this member belongs to
               */
              organizationId: string;
              /**
               * Subscription Plan
               * @description Member subscription plan
               */
              subscriptionPlan: string;
              /**
               * Updated At
               * @description Timestamp when the member was last updated (ISO 8601)
               */
              updatedAt: string;
          }[];
          /**
           * Name
           * @description Workspace name
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the workspace was last updated (ISO 8601)
           */
          updatedAt: string;
      }[];
      /**
       * Limit
       * @description Number of workspaces per page.
       */
      limit: number;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Total
       * @description Total number of workspaces available.
       */
      total: number;
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
 * Type of TALLY's TALLY_UPDATE_FORM tool input.
 */
type TALLY_UPDATE_FORM_INPUT = {
  /**
   * Blocks
   * @description Updated ordered list of blocks defining the form content.
   * @default null
   */
  blocks: {
      /**
       * Group Type
       * @description Type/category of this block group.
       */
      groupType: string;
      /**
       * Group Uuid
       * @description Identifier for the block group.
       */
      groupUuid: string;
      /**
       * Payload
       * @description Block-specific configuration payload.
       */
      payload: {
          [key: string]: unknown;
      };
      /**
       * Type
       * @description Type of block (e.g., FORM_TITLE, INPUT_TEXT).
       */
      type: string;
      /**
       * Uuid
       * @description Unique identifier for this block.
       */
      uuid: string;
  }[] | null;
  /**
   * Form Id
   * @description The unique identifier of the form to update.
   */
  formId?: string;
  /**
   * Name
   * @description New name for the form.
   * @default null
   */
  name: string | null;
  /**
   * FormSettings
   * @description Optional appearance and behavior settings for a form.
   * @default null
   */
  settings: {
      /**
       * Is Closed
       * @description Whether the form is closed to new submissions.
       * @default null
       */
      isClosed: boolean | null;
      /**
       * Language
       * @description Locale code for form language.
       * @default null
       */
      language: string | null;
      /**
       * Redirect On Completion
       * @description URL to redirect after completion.
       * @default null
       */
      redirectOnCompletion: string | null;
  } | null;
  /**
   * Status
   * @description New status of the form.
   * @default null
   * @enum {string|null}
   */
  status: "BLANK" | "PUBLISHED" | null;
};

/**
 * Type of TALLY's TALLY_UPDATE_FORM tool output.
 */
type TALLY_UPDATE_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601).
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the form.
       */
      id: string;
      /**
       * Is Closed
       * @description Whether the form is closed to new submissions.
       */
      isClosed: boolean;
      /**
       * Name
       * @description Name of the form.
       */
      name: string;
      /**
       * Number Of Submissions
       * @description Number of submissions received.
       */
      numberOfSubmissions: number;
      /**
       * Payments
       * @description List of payment configurations attached to the form.
       */
      payments?: {
          /**
           * Amount
           * @description Payment amount in smallest currency unit.
           */
          amount: number;
          /**
           * Currency
           * @description Currency code (ISO 4217).
           */
          currency: string;
      }[];
      /**
       * Status
       * @description Current status of the form.
       * @enum {string}
       */
      status: "BLANK" | "PUBLISHED" | "DRAFT";
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601).
       */
      updatedAt: string;
      /**
       * Workspace Id
       * @description Workspace ID where the form resides.
       */
      workspaceId: string;
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
 * Type of TALLY's TALLY_UPDATE_WORKSPACE tool input.
 */
type TALLY_UPDATE_WORKSPACE_INPUT = {
  /**
   * Name
   * @description The new name for the workspace.
   * @default null
   */
  name: string | null;
  /**
   * Workspace Id
   * @description The unique identifier of the workspace to update.
   */
  workspaceId?: string;
};

/**
 * Type of TALLY's TALLY_UPDATE_WORKSPACE tool output.
 */
type TALLY_UPDATE_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type map of all available tool input types for toolkit "TALLY".
 */
export type TALLY_TOOL_INPUTS = {
  CREATE_FORM: TALLY_CREATE_FORM_INPUT
  CREATE_WEBHOOK: TALLY_CREATE_WEBHOOK_INPUT
  DELETE_FORM: TALLY_DELETE_FORM_INPUT
  DELETE_WEBHOOK: TALLY_DELETE_WEBHOOK_INPUT
  GET_FORM_DETAILS: TALLY_GET_FORM_DETAILS_INPUT
  GET_FORM_FIELDS: TALLY_GET_FORM_FIELDS_INPUT
  GET_FORM_RESPONSES: TALLY_GET_FORM_RESPONSES_INPUT
  GET_FORM_SETTINGS: TALLY_GET_FORM_SETTINGS_INPUT
  GET_USER_INFO: TALLY_GET_USER_INFO_INPUT
  GET_WEBHOOK_EVENTS: TALLY_GET_WEBHOOK_EVENTS_INPUT
  LIST_FORMS: TALLY_LIST_FORMS_INPUT
  LIST_SUBMISSIONS: TALLY_LIST_SUBMISSIONS_INPUT
  LIST_WEBHOOKS: TALLY_LIST_WEBHOOKS_INPUT
  LIST_WORKSPACES: TALLY_LIST_WORKSPACES_INPUT
  UPDATE_FORM: TALLY_UPDATE_FORM_INPUT
  UPDATE_WORKSPACE: TALLY_UPDATE_WORKSPACE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TALLY".
 */
export type TALLY_TOOL_OUTPUTS = {
  CREATE_FORM: TALLY_CREATE_FORM_OUTPUT
  CREATE_WEBHOOK: TALLY_CREATE_WEBHOOK_OUTPUT
  DELETE_FORM: TALLY_DELETE_FORM_OUTPUT
  DELETE_WEBHOOK: TALLY_DELETE_WEBHOOK_OUTPUT
  GET_FORM_DETAILS: TALLY_GET_FORM_DETAILS_OUTPUT
  GET_FORM_FIELDS: TALLY_GET_FORM_FIELDS_OUTPUT
  GET_FORM_RESPONSES: TALLY_GET_FORM_RESPONSES_OUTPUT
  GET_FORM_SETTINGS: TALLY_GET_FORM_SETTINGS_OUTPUT
  GET_USER_INFO: TALLY_GET_USER_INFO_OUTPUT
  GET_WEBHOOK_EVENTS: TALLY_GET_WEBHOOK_EVENTS_OUTPUT
  LIST_FORMS: TALLY_LIST_FORMS_OUTPUT
  LIST_SUBMISSIONS: TALLY_LIST_SUBMISSIONS_OUTPUT
  LIST_WEBHOOKS: TALLY_LIST_WEBHOOKS_OUTPUT
  LIST_WORKSPACES: TALLY_LIST_WORKSPACES_OUTPUT
  UPDATE_FORM: TALLY_UPDATE_FORM_OUTPUT
  UPDATE_WORKSPACE: TALLY_UPDATE_WORKSPACE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TALLY toolkit.
 */
export const TALLY = {
  slug: "tally",
  tools: {
    /**
     * Tool to create a new form. use after preparing block definitions and optional settings.
     */
    CREATE_FORM: "TALLY_CREATE_FORM",
    /**
     * Tool to create a new webhook for a form. use after confirming you have the form id and the callback url.
     */
    CREATE_WEBHOOK: "TALLY_CREATE_WEBHOOK",
    /**
     * Tool to delete a specific form identified by its id. use after confirming the form should be permanently removed.
     */
    DELETE_FORM: "TALLY_DELETE_FORM",
    /**
     * Tool to delete a specific webhook. use after confirming the webhook id.
     */
    DELETE_WEBHOOK: "TALLY_DELETE_WEBHOOK",
    /**
     * Tool to retrieve details of a specific form. use when you need comprehensive form metadata by id. use after confirming the form id to fetch its full configuration, blocks, and stats.
     */
    GET_FORM_DETAILS: "TALLY_GET_FORM_DETAILS",
    /**
     * Tool to retrieve the fields of a specific form. use when you need the form's field definitions after obtaining its id.
     */
    GET_FORM_FIELDS: "TALLY_GET_FORM_FIELDS",
    /**
     * Tool to retrieve the responses of a specific form. use after confirming the form id and when paginated data is needed.
     */
    GET_FORM_RESPONSES: "TALLY_GET_FORM_RESPONSES",
    /**
     * Tool to retrieve the settings of a specific form. use after confirming the form id. example: "get settings for form abc123."
     */
    GET_FORM_SETTINGS: "TALLY_GET_FORM_SETTINGS",
    /**
     * Tool to retrieve information about the authenticated user. use when you need to confirm account details before proceeding.
     */
    GET_USER_INFO: "TALLY_GET_USER_INFO",
    /**
     * Tool to list events associated with a specific webhook. use when you need to inspect delivery history after creating or listing a webhook.
     */
    GET_WEBHOOK_EVENTS: "TALLY_GET_WEBHOOK_EVENTS",
    /**
     * Tool to retrieve a paginated list of forms. use when you need to list all forms accessible to the authenticated user.
     */
    LIST_FORMS: "TALLY_LIST_FORMS",
    /**
     * Tool to list submissions for a specific form. use when you need to paginate through form submissions.
     */
    LIST_SUBMISSIONS: "TALLY_LIST_SUBMISSIONS",
    /**
     * Tool to retrieve a paginated list of configured webhooks. use when you need a full listing of webhooks across your accessible forms and workspaces.
     */
    LIST_WEBHOOKS: "TALLY_LIST_WEBHOOKS",
    /**
     * Tool to retrieve a paginated list of workspaces. use when you need to browse workspaces accessible to the authenticated user.
     */
    LIST_WORKSPACES: "TALLY_LIST_WORKSPACES",
    /**
     * Tool to update form details. use after confirming the form exists and obtaining its id.
     */
    UPDATE_FORM: "TALLY_UPDATE_FORM",
    /**
     * Tool to update the details of a specific workspace identified by its id. use when you need to rename a workspace after confirming the workspace id.
     */
    UPDATE_WORKSPACE: "TALLY_UPDATE_WORKSPACE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TALLY".
 */
export type TALLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TALLY".
 */
export type TALLY_TRIGGER_EVENTS = {}
