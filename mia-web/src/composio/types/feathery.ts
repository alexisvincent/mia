// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FEATHERY's FEATHERY_ACCOUNT_EDIT tool input.
 */
type FEATHERY_ACCOUNT_EDIT_INPUT = {
  /**
   * Account Id
   * @description The UUID of the account to edit. Required if email is not provided.
   * @default null
   */
  account_id: string | null;
  /**
   * Email
   * @description The email of the account to edit. Required if account_id is not provided.
   * @default null
   */
  email: string | null;
  /**
   * Permission Edit Collaborator Template
   * @description Allow editing collaborator settings.
   * @default null
   */
  permission_edit_collaborator_template: boolean | null;
  /**
   * Permission Edit Form Results
   * @description Allow editing form results.
   * @default null
   */
  permission_edit_form_results: boolean | null;
  /**
   * Permission Edit Logic
   * @description Allow editing custom logic rules.
   * @default null
   */
  permission_edit_logic: boolean | null;
  /**
   * Permission Edit Theme
   * @description Allow editing form themes.
   * @default null
   */
  permission_edit_theme: boolean | null;
  /**
   * Permission Invite Collaborators
   * @description Allow inviting form collaborators.
   * @default null
   */
  permission_invite_collaborators: boolean | null;
  /**
   * Role
   * @description New role for the account.
   * @default null
   * @enum {string|null}
   */
  role: "admin" | "editor" | "viewer" | null;
};

/**
 * Type of FEATHERY's FEATHERY_ACCOUNT_EDIT tool output.
 */
type FEATHERY_ACCOUNT_EDIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
 * Type of FEATHERY's FEATHERY_ACCOUNT_GET_INFO tool input.
 */
type FEATHERY_ACCOUNT_GET_INFO_INPUT = object;

/**
 * Type of FEATHERY's FEATHERY_ACCOUNT_GET_INFO tool output.
 */
type FEATHERY_ACCOUNT_GET_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of accounts belonging to your Feathery team
       */
      accounts: {
          /**
           * Email
           * @description User's email address
           */
          email: string;
          /**
           * Id
           * @description Unique account identifier
           */
          id: string;
          /**
           * Role
           * @description User's role within the team
           */
          role: string;
      }[];
      /**
       * Team
       * @description The name of your Feathery team
       */
      team: string;
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
 * Type of FEATHERY's FEATHERY_DOCUMENT_FILL_TEMPLATE tool input.
 */
type FEATHERY_DOCUMENT_FILL_TEMPLATE_INPUT = {
  /**
   * Document
   * @description UUID of the document template to fill.
   */
  document?: string;
  /**
   * Field Values
   * @description Mapping of field IDs to values to populate in the document.
   * @default null
   */
  field_values: {
      [key: string]: unknown;
  } | null;
  /**
   * Signer Email
   * @description Email address to route the filled document for signature.
   * @default null
   */
  signer_email: string | null;
  /**
   * User Id
   * @description Associate an existing Feathery user with the generated document.
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of FEATHERY's FEATHERY_DOCUMENT_FILL_TEMPLATE tool output.
 */
type FEATHERY_DOCUMENT_FILL_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Disabled
       * @description True when Feathery Documents is not enabled for this account.
       * @default null
       */
      disabled: boolean | null;
      /**
       * File Url
       * @description URL where the completed document can be downloaded.
       */
      file_url: string;
      /**
       * Message
       * @description Additional context message from the API if available.
       * @default null
       */
      message: string | null;
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
 * Type of FEATHERY's FEATHERY_DOCUMENT_LIST_ENVELOPES tool input.
 */
type FEATHERY_DOCUMENT_LIST_ENVELOPES_INPUT = {
  /**
   * Id
   * @description Document ID when type='document'; User ID when type='user'.
   */
  id?: string;
  /**
   * Type
   * @description Lookup mode: 'document' to list envelopes by document ID; 'user' to list envelopes by user ID.
   * @enum {string}
   */
  type?: "document" | "user";
};

/**
 * Type of FEATHERY's FEATHERY_DOCUMENT_LIST_ENVELOPES tool output.
 */
type FEATHERY_DOCUMENT_LIST_ENVELOPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the envelope was created.
       */
      created_at: string;
      /**
       * Document
       * @description Source document template ID.
       * @default null
       */
      document: string | null;
      /**
       * File
       * @description URL of the associated envelope file.
       */
      file: string;
      /**
       * Id
       * @description Envelope ID.
       */
      id: string;
      /**
       * Sender
       * @description Sender email address.
       * @default null
       */
      sender: string | null;
      /**
       * Signed
       * @description Whether the signer has signed the envelope.
       */
      signed: boolean;
      /**
       * Signer
       * @description Signer email address.
       * @default null
       */
      signer: string | null;
      /**
       * Tags
       * @description Metadata tags associated with the envelope.
       */
      tags: string[];
      /**
       * Type
       * @description File format of the envelope.
       * @enum {string}
       */
      type: "pdf" | "docx" | "xlsx";
      /**
       * User
       * @description Feathery user ID who filled the envelope.
       * @default null
       */
      user: string | null;
      /**
       * Viewed
       * @description Whether the signer has viewed the envelope.
       */
      viewed: boolean;
  }[];
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
 * Type of FEATHERY's FEATHERY_FORM_CREATE_HIDDEN_FIELD tool input.
 */
type FEATHERY_FORM_CREATE_HIDDEN_FIELD_INPUT = {
  /**
   * Field Id
   * @description A new unique ID for the hidden field to create.
   */
  field_id?: string;
};

/**
 * Type of FEATHERY's FEATHERY_FORM_CREATE_HIDDEN_FIELD tool output.
 */
type FEATHERY_FORM_CREATE_HIDDEN_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Field Id
       * @description The ID of the hidden field created (mirrors the request).
       */
      field_id: string;
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
 * Type of FEATHERY's FEATHERY_FORM_DELETE tool input.
 */
type FEATHERY_FORM_DELETE_INPUT = {
  /**
   * Confirm Delete
   * @description Must be set to true to confirm deletion of the form.
   * @constant
   */
  confirm_delete?: true;
  /**
   * Form Id
   * @description Unique identifier of the form to delete.
   */
  form_id?: string;
};

/**
 * Type of FEATHERY's FEATHERY_FORM_DELETE tool output.
 */
type FEATHERY_FORM_DELETE_OUTPUT = {
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
 * Type of FEATHERY's FEATHERY_FORM_GET_SCHEMA tool input.
 */
type FEATHERY_FORM_GET_SCHEMA_INPUT = {
  /**
   * Form Id
   * @description ID of the form to retrieve.
   */
  form_id?: string;
};

/**
 * Type of FEATHERY's FEATHERY_FORM_GET_SCHEMA tool output.
 */
type FEATHERY_FORM_GET_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Form Id
       * @description Your form’s ID.
       */
      form_id: string;
      /**
       * Form Name
       * @description Your form’s name.
       */
      form_name: string;
      /**
       * Rules
       * @description Array of rule objects.
       */
      rules: {
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when rule was created
           */
          created_at: string;
          /**
           * Description
           * @description Human-readable description of the rule
           */
          description: string;
          /**
           * Elements
           * @description List of element IDs that trigger the rule
           */
          elements?: string[];
          /**
           * Enabled
           * @description Whether the rule is enabled
           */
          enabled: boolean;
          /**
           * Index
           * @description Order index of the rule
           */
          index: number;
          /**
           * Mode
           * @description Mode of the rule ('code' or 'no-code')
           */
          mode: string;
          /**
           * Name
           * @description Name of the rule
           */
          name: string;
          /**
           * Steps
           * @description List of step IDs this rule runs on
           */
          steps?: string[];
          /**
           * Trigger Event
           * @description Event that triggers the rule (e.g., 'step_enter')
           */
          trigger_event: string;
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when rule was last updated
           */
          updated_at: string;
          /**
           * Valid
           * @description Whether the rule configuration is valid
           */
          valid: boolean;
      }[];
      /**
       * Steps
       * @description Array of step objects.
       */
      steps: {
          /**
           * Buttons
           * @description Array of button elements
           */
          buttons?: {
              /**
               * Hide Rules
               * @description Rules that hide this element (if any)
               */
              hide_rules?: {
                  [key: string]: unknown;
              }[];
              /**
               * Id
               * @description Element ID (unique within form)
               */
              id: string;
          }[];
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when step was created
           */
          created_at: string;
          /**
           * Fields
           * @description Array of form field elements
           */
          fields?: {
              /**
               * Hide Rules
               * @description Rules that hide this element (if any)
               */
              hide_rules?: {
                  [key: string]: unknown;
              }[];
              /**
               * Id
               * @description Element ID (unique within form)
               */
              id: string;
          }[];
          /**
           * Id
           * @description Step ID (unique within form)
           */
          id: string;
          /**
           * Images
           * @description Array of image elements
           */
          images?: {
              /**
               * Hide Rules
               * @description Rules that hide this element (if any)
               */
              hide_rules?: {
                  [key: string]: unknown;
              }[];
              /**
               * Id
               * @description Element ID (unique within form)
               */
              id: string;
          }[];
          /**
           * Internal Id
           * @description Globally unique internal ID
           */
          internal_id: string;
          /**
           * Next Conditions
           * @description Navigation conditions to subsequent steps
           */
          next_conditions?: {
              [key: string]: unknown;
          }[];
          /**
           * Origin
           * @description Whether this is the first step
           */
          origin: boolean;
          /**
           * Previous Conditions
           * @description Navigation conditions from prior steps
           */
          previous_conditions?: {
              [key: string]: unknown;
          }[];
          /**
           * Progress Bars
           * @description Array of progress bar elements
           */
          progress_bars?: {
              /**
               * Hide Rules
               * @description Rules that hide this element (if any)
               */
              hide_rules?: {
                  [key: string]: unknown;
              }[];
              /**
               * Id
               * @description Element ID (unique within form)
               */
              id: string;
          }[];
          /**
           * Texts
           * @description Array of text elements
           */
          texts?: {
              /**
               * Hide Rules
               * @description Rules that hide this element (if any)
               */
              hide_rules?: {
                  [key: string]: unknown;
              }[];
              /**
               * Id
               * @description Element ID (unique within form)
               */
              id: string;
          }[];
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when step was last updated
           */
          updated_at: string;
          /**
           * Videos
           * @description Array of video elements
           */
          videos?: {
              /**
               * Hide Rules
               * @description Rules that hide this element (if any)
               */
              hide_rules?: {
                  [key: string]: unknown;
              }[];
              /**
               * Id
               * @description Element ID (unique within form)
               */
              id: string;
          }[];
      }[];
      /**
       * Translations
       * @description Map of default text strings to their translations.
       */
      translations?: {
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
 * Type of FEATHERY's FEATHERY_FORM_LIST tool input.
 */
type FEATHERY_FORM_LIST_INPUT = {
  /**
   * Tags
   * @description Only return forms that have all of these tags.
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of FEATHERY's FEATHERY_FORM_LIST tool output.
 */
type FEATHERY_FORM_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Is the form turned on.
       */
      active: boolean;
      /**
       * Created At
       * Format: date-time
       * @description When this form was created.
       */
      created_at: string;
      /**
       * Id
       * @description The form ID.
       */
      id: string;
      /**
       * Internal Id
       * Format: uuid
       * @description Feathery-specific identifier; returned only for white label workspaces.
       * @default null
       */
      internal_id: string | null;
      /**
       * Name
       * @description The form name.
       */
      name: string;
      /**
       * Tags
       * @description Tags associated with the form.
       */
      tags: string[];
      /**
       * Updated At
       * Format: date-time
       * @description When this form was last updated.
       */
      updated_at: string;
  }[];
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
 * Type of FEATHERY's FEATHERY_FORM_LIST_HIDDEN_FIELDS tool input.
 */
type FEATHERY_FORM_LIST_HIDDEN_FIELDS_INPUT = object;

/**
 * Type of FEATHERY's FEATHERY_FORM_LIST_HIDDEN_FIELDS tool output.
 */
type FEATHERY_FORM_LIST_HIDDEN_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the hidden field was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique ID of the hidden field
       */
      id: string;
      /**
       * Internal Id
       * @description Feathery-internal identifier of the hidden field
       */
      internal_id: string;
      /**
       * Type
       * @description Type of value stored in the hidden field
       */
      type: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the hidden field was last updated
       */
      updated_at: string;
  }[];
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
 * Type of FEATHERY's FEATHERY_LOG_LIST_API_CONNECTOR_ERRORS tool input.
 */
type FEATHERY_LOG_LIST_API_CONNECTOR_ERRORS_INPUT = {
  /**
   * End Time
   * Format: date-time
   * @description Only return errors before this ISO8601 timestamp.
   * @default null
   */
  end_time: string | null;
  /**
   * Form Id
   * @description ID of the form to retrieve error logs for.
   */
  form_id?: string;
  /**
   * Start Time
   * Format: date-time
   * @description Only return errors after this ISO8601 timestamp.
   * @default null
   */
  start_time: string | null;
};

/**
 * Type of FEATHERY's FEATHERY_LOG_LIST_API_CONNECTOR_ERRORS tool output.
 */
type FEATHERY_LOG_LIST_API_CONNECTOR_ERRORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when this error was recorded.
       */
      created_at: string;
      /**
       * Request
       * @description API request parameters as JSON string; truncated if >400 chars.
       */
      request: string;
      /**
       * Response
       * @description API response as JSON string; truncated if >400 chars.
       */
      response: string;
      /**
       * Status Code
       * @description The HTTP status code returned by the API.
       */
      status_code: number;
      /**
       * Url
       * @description The endpoint URL that returned an error.
       */
      url: string;
  }[];
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
 * Type of FEATHERY's FEATHERY_LOG_LIST_EMAILS tool input.
 */
type FEATHERY_LOG_LIST_EMAILS_INPUT = {
  /**
   * End Time
   * Format: date-time
   * @description Only return emails sent before this time
   * @default null
   */
  end_time: string | null;
  /**
   * Form Id
   * @description ID of the form to list email logs for
   */
  form_id?: string;
  /**
   * Start Time
   * Format: date-time
   * @description Only return emails sent after this time
   * @default null
   */
  start_time: string | null;
};

/**
 * Type of FEATHERY's FEATHERY_LOG_LIST_EMAILS tool output.
 */
type FEATHERY_LOG_LIST_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description When this email was sent
       */
      created_at: string;
      /**
       * Recipients
       * @description Recipient addresses this email was sent to
       */
      recipients: string[];
      /**
       * Subject
       * @description Subject of this email
       */
      subject: string;
      /**
       * Template Id
       * @description ID of the email template in the integration this email was based on
       */
      template_id: string;
  }[];
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
 * Type of FEATHERY's FEATHERY_LOG_LIST_EMAIL_ISSUES tool input.
 */
type FEATHERY_LOG_LIST_EMAIL_ISSUES_INPUT = {
  /**
   * End Time
   * Format: date-time
   * @description Only return events occurring before this ISO 8601 timestamp.
   * @default null
   */
  end_time: string | null;
  /**
   * Event Type
   * @description Filter by event type. If omitted, returns both bounce and complaint events.
   * @default null
   * @enum {string|null}
   */
  event_type: "Bounce" | "Complaint" | null;
  /**
   * Start Time
   * Format: date-time
   * @description Only return events occurring at or after this ISO 8601 timestamp.
   * @default null
   */
  start_time: string | null;
};

/**
 * Type of FEATHERY's FEATHERY_LOG_LIST_EMAIL_ISSUES tool output.
 */
type FEATHERY_LOG_LIST_EMAIL_ISSUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when this event occurred
       */
      created_at: string;
      /**
       * Event Type
       * @description Type of the event
       * @enum {string}
       */
      event_type: "Bounce" | "Complaint";
      /**
       * Recipients
       * @description Email addresses the message was sent to
       */
      recipients: string[];
      /**
       * Rejected Recipients
       * @description Email addresses that were rejected
       */
      rejected_recipients: string[];
      /**
       * Sender
       * @description Sender email address
       */
      sender: string;
      /**
       * Subject
       * @description Subject line of the email
       */
      subject: string;
  }[];
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
 * Type of FEATHERY's FEATHERY_LOG_LIST_QUICK_REQUESTS tool input.
 */
type FEATHERY_LOG_LIST_QUICK_REQUESTS_INPUT = {
  /**
   * End Time
   * Format: date-time
   * @description Only return requests made before this time (ISO 8601 format)
   * @default null
   */
  end_time: string | null;
  /**
   * Form Id
   * @description ID of the form whose Quik logs to retrieve
   */
  form_id?: string;
  /**
   * Start Time
   * Format: date-time
   * @description Only return requests made after this time (ISO 8601 format)
   * @default null
   */
  start_time: string | null;
};

/**
 * Type of FEATHERY's FEATHERY_LOG_LIST_QUICK_REQUESTS tool output.
 */
type FEATHERY_LOG_LIST_QUICK_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when this log entry was created
       */
      created_at: string;
      /**
       * Request
       * @description JSON string of the request payload sent to Quik
       */
      request: string;
      /**
       * Response
       * @description JSON string of the response from Quik API
       */
      response: string;
      /**
       * Status Code
       * @description HTTP status code returned by Quik API
       */
      status_code: number;
      /**
       * Url
       * @description The Quik API URL called
       */
      url: string;
  }[];
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
 * Type of FEATHERY's FEATHERY_USER_CREATE_OR_FETCH tool input.
 */
type FEATHERY_USER_CREATE_OR_FETCH_INPUT = {
  /**
   * Id
   * @description Your unique user ID
   */
  id?: string;
};

/**
 * Type of FEATHERY's FEATHERY_USER_CREATE_OR_FETCH tool output.
 */
type FEATHERY_USER_CREATE_OR_FETCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description When this user was created
       */
      created_at: string;
      /**
       * Id
       * @description Your unique user ID
       */
      id: string;
      /**
       * Sdk Key
       * @description This user's SDK key
       */
      sdk_key: string;
      /**
       * Updated At
       * Format: date-time
       * @description When this user was last updated
       */
      updated_at: string;
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
 * Type of FEATHERY's FEATHERY_USER_DELETE tool input.
 */
type FEATHERY_USER_DELETE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the user to delete.
   */
  id?: string;
};

/**
 * Type of FEATHERY's FEATHERY_USER_DELETE tool output.
 */
type FEATHERY_USER_DELETE_OUTPUT = {
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
 * Type of FEATHERY's FEATHERY_USER_GET_ALL_DATA tool input.
 */
type FEATHERY_USER_GET_ALL_DATA_INPUT = {
  /**
   * Id
   * @description Your unique user ID. If omitted, returns data fields across all users.
   * @default null
   */
  id: string | null;
};

/**
 * Type of FEATHERY's FEATHERY_USER_GET_ALL_DATA tool output.
 */
type FEATHERY_USER_GET_ALL_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when this field was created.
       */
      created_at: string;
      /**
       * Display Text
       * @description Human-friendly text for this field.
       */
      display_text: string;
      /**
       * Hidden
       * @description If true, this is a hidden field; otherwise, a form field.
       */
      hidden: boolean;
      /**
       * Id
       * @description Unique field entry identifier.
       */
      id: string;
      /**
       * Internal Id
       * @description Feathery-internal static identifier for the field.
       */
      internal_id: string;
      /**
       * Type
       * @description The form field type.
       */
      type: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when this field was last updated.
       */
      updated_at: string;
      /**
       * Value
       * @description Submitted value for the specified user.
       */
      value?: unknown;
  }[];
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
 * Type of FEATHERY's FEATHERY_USER_GET_SESSION tool input.
 */
type FEATHERY_USER_GET_SESSION_INPUT = {
  /**
   * User Id
   * @description Unique user identifier to fetch session for.
   */
  user_id?: string;
};

/**
 * Type of FEATHERY's FEATHERY_USER_GET_SESSION tool output.
 */
type FEATHERY_USER_GET_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auth Id
       * @description Identity provider ID, if linked to external auth.
       * @default null
       */
      auth_id: string | null;
      /**
       * Forms
       * @description List of forms the user is working on.
       */
      forms: {
          /**
           * Completed At
           * @description Completion timestamp in ISO8601 format, or null if incomplete.
           * @default null
           */
          completed_at: string | null;
          /**
           * Current Step Id
           * @description ID of the most recently visited step.
           */
          current_step_id: string;
          /**
           * Id
           * @description Form ID.
           */
          id: string;
          /**
           * Name
           * @description Form name.
           */
          name: string;
          /**
           * Track Location
           * @description Whether the form remembers the user's location.
           */
          track_location: boolean;
      }[];
      /**
       * Internal Id
       * @description Unique internal user ID.
       */
      internal_id: string;
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
 * Type of FEATHERY's FEATHERY_USER_LIST tool input.
 */
type FEATHERY_USER_LIST_INPUT = {
  /**
   * Created After
   * Format: date-time
   * @description ISO 8601 datetime to limit users created after this timestamp.
   * @default null
   */
  created_after: string | null;
  /**
   * Created Before
   * Format: date-time
   * @description ISO 8601 datetime to limit users created before this timestamp.
   * @default null
   */
  created_before: string | null;
  /**
   * Filter Field Id
   * @description ID of a form or hidden field to filter users by.
   * @default null
   */
  filter_field_id: string | null;
  /**
   * Filter Field Value
   * @description Value of the field to filter on; must be used with filter_field_id.
   * @default null
   */
  filter_field_value: string | null;
};

/**
 * Type of FEATHERY's FEATHERY_USER_LIST tool output.
 */
type FEATHERY_USER_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the user was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique user identifier.
       */
      id: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the user was last updated.
       */
      updated_at: string;
  }[];
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
 * Type of FEATHERY's FEATHERY_WORKSPACE_GENERATE_LOGIN_TOKEN tool input.
 */
type FEATHERY_WORKSPACE_GENERATE_LOGIN_TOKEN_INPUT = {
  /**
   * Account Id
   * @description ID of the account to generate a login token for
   */
  account_id?: string;
  /**
   * Workspace Id
   * @description ID of the workspace to generate the token for
   */
  workspace_id?: string;
};

/**
 * Type of FEATHERY's FEATHERY_WORKSPACE_GENERATE_LOGIN_TOKEN tool output.
 */
type FEATHERY_WORKSPACE_GENERATE_LOGIN_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description The unique ID of the account
       */
      account_id: string;
      /**
       * Token
       * @description JWT token to log in to the workspace
       */
      token: string;
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
 * Type map of all available tool input types for toolkit "FEATHERY".
 */
export type FEATHERY_TOOL_INPUTS = {
  ACCOUNT_EDIT: FEATHERY_ACCOUNT_EDIT_INPUT
  ACCOUNT_GET_INFO: FEATHERY_ACCOUNT_GET_INFO_INPUT
  DOCUMENT_FILL_TEMPLATE: FEATHERY_DOCUMENT_FILL_TEMPLATE_INPUT
  DOCUMENT_LIST_ENVELOPES: FEATHERY_DOCUMENT_LIST_ENVELOPES_INPUT
  FORM_CREATE_HIDDEN_FIELD: FEATHERY_FORM_CREATE_HIDDEN_FIELD_INPUT
  FORM_DELETE: FEATHERY_FORM_DELETE_INPUT
  FORM_GET_SCHEMA: FEATHERY_FORM_GET_SCHEMA_INPUT
  FORM_LIST: FEATHERY_FORM_LIST_INPUT
  FORM_LIST_HIDDEN_FIELDS: FEATHERY_FORM_LIST_HIDDEN_FIELDS_INPUT
  LOG_LIST_API_CONNECTOR_ERRORS: FEATHERY_LOG_LIST_API_CONNECTOR_ERRORS_INPUT
  LOG_LIST_EMAILS: FEATHERY_LOG_LIST_EMAILS_INPUT
  LOG_LIST_EMAIL_ISSUES: FEATHERY_LOG_LIST_EMAIL_ISSUES_INPUT
  LOG_LIST_QUICK_REQUESTS: FEATHERY_LOG_LIST_QUICK_REQUESTS_INPUT
  USER_CREATE_OR_FETCH: FEATHERY_USER_CREATE_OR_FETCH_INPUT
  USER_DELETE: FEATHERY_USER_DELETE_INPUT
  USER_GET_ALL_DATA: FEATHERY_USER_GET_ALL_DATA_INPUT
  USER_GET_SESSION: FEATHERY_USER_GET_SESSION_INPUT
  USER_LIST: FEATHERY_USER_LIST_INPUT
  WORKSPACE_GENERATE_LOGIN_TOKEN: FEATHERY_WORKSPACE_GENERATE_LOGIN_TOKEN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FEATHERY".
 */
export type FEATHERY_TOOL_OUTPUTS = {
  ACCOUNT_EDIT: FEATHERY_ACCOUNT_EDIT_OUTPUT
  ACCOUNT_GET_INFO: FEATHERY_ACCOUNT_GET_INFO_OUTPUT
  DOCUMENT_FILL_TEMPLATE: FEATHERY_DOCUMENT_FILL_TEMPLATE_OUTPUT
  DOCUMENT_LIST_ENVELOPES: FEATHERY_DOCUMENT_LIST_ENVELOPES_OUTPUT
  FORM_CREATE_HIDDEN_FIELD: FEATHERY_FORM_CREATE_HIDDEN_FIELD_OUTPUT
  FORM_DELETE: FEATHERY_FORM_DELETE_OUTPUT
  FORM_GET_SCHEMA: FEATHERY_FORM_GET_SCHEMA_OUTPUT
  FORM_LIST: FEATHERY_FORM_LIST_OUTPUT
  FORM_LIST_HIDDEN_FIELDS: FEATHERY_FORM_LIST_HIDDEN_FIELDS_OUTPUT
  LOG_LIST_API_CONNECTOR_ERRORS: FEATHERY_LOG_LIST_API_CONNECTOR_ERRORS_OUTPUT
  LOG_LIST_EMAILS: FEATHERY_LOG_LIST_EMAILS_OUTPUT
  LOG_LIST_EMAIL_ISSUES: FEATHERY_LOG_LIST_EMAIL_ISSUES_OUTPUT
  LOG_LIST_QUICK_REQUESTS: FEATHERY_LOG_LIST_QUICK_REQUESTS_OUTPUT
  USER_CREATE_OR_FETCH: FEATHERY_USER_CREATE_OR_FETCH_OUTPUT
  USER_DELETE: FEATHERY_USER_DELETE_OUTPUT
  USER_GET_ALL_DATA: FEATHERY_USER_GET_ALL_DATA_OUTPUT
  USER_GET_SESSION: FEATHERY_USER_GET_SESSION_OUTPUT
  USER_LIST: FEATHERY_USER_LIST_OUTPUT
  WORKSPACE_GENERATE_LOGIN_TOKEN: FEATHERY_WORKSPACE_GENERATE_LOGIN_TOKEN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FEATHERY toolkit.
 */
export const FEATHERY = {
  slug: "feathery",
  tools: {
    /**
     * Tool to edit an existing account’s role and permissions. Use when modifying account settings after confirming identity.
     */
    ACCOUNT_EDIT: "FEATHERY_ACCOUNT_EDIT",
    /**
     * Tool to get your Feathery team name and list of accounts. Use when you need to fetch your team's account info.
     */
    ACCOUNT_GET_INFO: "FEATHERY_ACCOUNT_GET_INFO",
    /**
     * Tool to fill or sign a Feathery document template. Use when you need to generate a completed or signed document file after mapping template fields.
     */
    DOCUMENT_FILL_TEMPLATE: "FEATHERY_DOCUMENT_FILL_TEMPLATE",
    /**
     * Tool to list generated document envelopes by document or user ID. Use when you need to retrieve envelope records for auditing or tracking.
     */
    DOCUMENT_LIST_ENVELOPES: "FEATHERY_DOCUMENT_LIST_ENVELOPES",
    /**
     * Tool to create a new hidden field in a form. Use when you need to add a non-visible field after confirming you have a unique field_id.
     */
    FORM_CREATE_HIDDEN_FIELD: "FEATHERY_FORM_CREATE_HIDDEN_FIELD",
    /**
     * Tool to delete an existing form. Use when you need to permanently remove a form after confirmation.
     */
    FORM_DELETE: "FEATHERY_FORM_DELETE",
    /**
     * Tool to retrieve the schema of a specific form. Use after confirming the form ID.
     */
    FORM_GET_SCHEMA: "FEATHERY_FORM_GET_SCHEMA",
    /**
     * Tool to list all forms in your Feathery account. Use when you need to view or filter available forms.
     */
    FORM_LIST: "FEATHERY_FORM_LIST",
    /**
     * Tool to list all hidden form fields in the account. Use when you need to retrieve hidden field configuration before processing form submissions.
     */
    FORM_LIST_HIDDEN_FIELDS: "FEATHERY_FORM_LIST_HIDDEN_FIELDS",
    /**
     * Tool to list recent API connector error logs for a form. Use after confirming the form ID to troubleshoot integration issues.
     */
    LOG_LIST_API_CONNECTOR_ERRORS: "FEATHERY_LOG_LIST_API_CONNECTOR_ERRORS",
    /**
     * Tool to list recently sent emails for a form. Use when you need to review email logs after sending form-based emails.
     */
    LOG_LIST_EMAILS: "FEATHERY_LOG_LIST_EMAILS",
    /**
     * Tool to list email bounce and complaint events. Use when you need to diagnose delivery issues for sent emails.
     */
    LOG_LIST_EMAIL_ISSUES: "FEATHERY_LOG_LIST_EMAIL_ISSUES",
    /**
     * Tool to list recent Quik integration request logs for a form. Use when you need to review API requests sent to Quik for a specific form.
     */
    LOG_LIST_QUICK_REQUESTS: "FEATHERY_LOG_LIST_QUICK_REQUESTS",
    /**
     * Tool to create a new user or fetch an existing one. Use when you need to ensure a user exists and get their SDK key.
     */
    USER_CREATE_OR_FETCH: "FEATHERY_USER_CREATE_OR_FETCH",
    /**
     * Tool to delete a specific user by ID. Use when you need to remove a user after confirming the user exists.
     */
    USER_DELETE: "FEATHERY_USER_DELETE",
    /**
     * Tool to retrieve all stored data fields for a user. Use when you need to fetch all field entries associated with a specific user.
     */
    USER_GET_ALL_DATA: "FEATHERY_USER_GET_ALL_DATA",
    /**
     * Tool to get a user's form session and progress. Use after authenticating and when you need to retrieve session data.
     */
    USER_GET_SESSION: "FEATHERY_USER_GET_SESSION",
    /**
     * Tool to list all users in your Feathery account. Use when you need to retrieve users with optional creation time or field-based filters.
     */
    USER_LIST: "FEATHERY_USER_LIST",
    /**
     * Tool to generate a login JWT for a workspace. Use after obtaining the workspace and account IDs to get a token.
     */
    WORKSPACE_GENERATE_LOGIN_TOKEN: "FEATHERY_WORKSPACE_GENERATE_LOGIN_TOKEN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FEATHERY".
 */
export type FEATHERY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FEATHERY".
 */
export type FEATHERY_TRIGGER_EVENTS = {}
