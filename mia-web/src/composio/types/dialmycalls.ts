// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DIALMYCALLS's DIALMYCALLS_ADD_ACCESS_ACCOUNT tool input.
 */
type DIALMYCALLS_ADD_ACCESS_ACCOUNT_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address for the new access (sub) account.
   */
  email?: unknown;
  /**
   * Name
   * @description The name of the access (sub) account to create.
   */
  name?: string;
  /**
   * Password
   * @description Password for the new access (sub) account; follow strong password policy.
   */
  password?: string;
  /**
   * Permissions
   * @description Optional list of permissions to assign. Eg: ['CALL_CREATE','VIEW_REPORTS']. If omitted, default permissions apply.
   * @default null
   */
  permissions: string[] | null;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_ADD_ACCESS_ACCOUNT tool output.
 */
type DIALMYCALLS_ADD_ACCESS_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * Format: uuid
       * @description Unique identifier for the created access account.
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
 * Type of DIALMYCALLS's DIALMYCALLS_ADD_CONTACT tool input.
 */
type DIALMYCALLS_ADD_CONTACT_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address of the contact.
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description The first name of the contact.
   * @default null
   */
  first_name: string | null;
  /**
   * Group Id
   * @description The unique identifier of the group to which the contact should be added.
   * @default null
   */
  group_id: string | null;
  /**
   * Last Name
   * @description The last name of the contact.
   * @default null
   */
  last_name: string | null;
  /**
   * Phone
   * @description The phone number of the contact.
   */
  phone?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_ADD_CONTACT tool output.
 */
type DIALMYCALLS_ADD_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier for the newly created contact.
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
 * Type of DIALMYCALLS's DIALMYCALLS_ADD_GROUP tool input.
 */
type DIALMYCALLS_ADD_GROUP_INPUT = {
  /**
   * Name
   * @description Name of the group to create. Must be non-empty.
   */
  name?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_ADD_GROUP tool output.
 */
type DIALMYCALLS_ADD_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Group Id
       * @description ID of the newly created group.
       */
      group_id: string;
      /**
       * Message
       * @description Status message returned by the API.
       */
      message: string;
      /**
       * Success
       * @description True if the group was created successfully.
       */
      success: boolean;
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
 * Type of DIALMYCALLS's DIALMYCALLS_DELETE_ACCESS_ACCOUNT tool input.
 */
type DIALMYCALLS_DELETE_ACCESS_ACCOUNT_INPUT = {
  /**
   * Id
   * @description The ID or UUID of the access (sub) account to delete.
   */
  id?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_DELETE_ACCESS_ACCOUNT tool output.
 */
type DIALMYCALLS_DELETE_ACCESS_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Operation status message returned by the API.
       */
      message: string;
      /**
       * Success
       * @description True if the access account was deleted successfully.
       */
      success: boolean;
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
 * Type of DIALMYCALLS's DIALMYCALLS_DELETE_CALLER_ID tool input.
 */
type DIALMYCALLS_DELETE_CALLER_ID_INPUT = {
  /**
   * Caller Id
   * @description The unique identifier of the caller ID to delete.
   */
  caller_id?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_DELETE_CALLER_ID tool output.
 */
type DIALMYCALLS_DELETE_CALLER_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation or error message regarding the deletion.
       */
      message: string;
      /**
       * Success
       * @description Indicates if the deletion was successful.
       */
      success: boolean;
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
 * Type of DIALMYCALLS's DIALMYCALLS_DELETE_CONTACT tool input.
 */
type DIALMYCALLS_DELETE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier of the contact to delete (path parameter)
   */
  contact_id?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_DELETE_CONTACT tool output.
 */
type DIALMYCALLS_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional message or details about the deletion
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the contact was successfully deleted
       */
      success: boolean;
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
 * Type of DIALMYCALLS's DIALMYCALLS_DELETE_GROUP tool input.
 */
type DIALMYCALLS_DELETE_GROUP_INPUT = {
  /**
   * Group Id
   * @description The unique identifier (UUID) of the group to delete
   */
  group_id?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_DELETE_GROUP tool output.
 */
type DIALMYCALLS_DELETE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from the API
       */
      message: string;
      /**
       * Success
       * @description Indicates if the request was successful [1=Yes, 0=No]
       */
      success: number;
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
 * Type of DIALMYCALLS's DIALMYCALLS_DELETE_RECORDING tool input.
 */
type DIALMYCALLS_DELETE_RECORDING_INPUT = {
  /**
   * Recording Id
   * @description The ID of the recording to delete
   */
  recording_id?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_DELETE_RECORDING tool output.
 */
type DIALMYCALLS_DELETE_RECORDING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message describing the result of the operation
       */
      message: string;
      /**
       * Status
       * @description Status of the action ('success' or 'error')
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of DIALMYCALLS's DIALMYCALLS_GET_ACCESS_ACCOUNT tool input.
 */
type DIALMYCALLS_GET_ACCESS_ACCOUNT_INPUT = {
  /**
   * Id
   * @description The ID of the access (sub) account to retrieve.
   */
  id?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_GET_ACCESS_ACCOUNT tool output.
 */
type DIALMYCALLS_GET_ACCESS_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Account Id
       * @description Unique identifier of the Access Account.
       */
      access_account_id: string;
      /**
       * Account Id
       * @description Parent account's ID.
       */
      account_id: string;
      /**
       * Created
       * @description Timestamp when the Access Account was created (ISO 8601).
       */
      created: string;
      /**
       * Email
       * @description Email address for the Access Account.
       */
      email: string;
      /**
       * Name
       * @description Name of the Access Account.
       */
      name: string;
      /**
       * Permissions
       * @description Mapping of permissions assigned to the Access Account.
       */
      permissions: {
          [key: string]: boolean;
      };
      /**
       * Updated
       * @description Timestamp when the Access Account was last updated (ISO 8601).
       */
      updated: string;
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
 * Type of DIALMYCALLS's DIALMYCALLS_GET_ACCOUNT tool input.
 */
type DIALMYCALLS_GET_ACCOUNT_INPUT = object;

/**
 * Type of DIALMYCALLS's DIALMYCALLS_GET_ACCOUNT tool output.
 */
type DIALMYCALLS_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description The unique account identifier.
       */
      account_id: number;
      /**
       * Calls Made
       * @description Total broadcasted calls made.
       */
      calls_made: number;
      /**
       * Calls Remaining
       * @description Remaining calls available.
       */
      calls_remaining: number;
      /**
       * Credits
       * @description Credits available on the account.
       */
      credits: number;
      /**
       * Date Created
       * @description Date/time account was created (ISO 8601 format).
       */
      date_created: string;
      /**
       * Email
       * @description Email address associated with account.
       */
      email: string;
      /**
       * Status
       * @description Status of the account (e.g., active).
       */
      status: string;
      /**
       * Username
       * @description Username for the account.
       */
      username: string;
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
 * Type of DIALMYCALLS's DIALMYCALLS_GET_CALLER_ID tool input.
 */
type DIALMYCALLS_GET_CALLER_ID_INPUT = {
  /**
   * Caller Id
   * @description The unique identifier of the caller ID to retrieve.
   */
  caller_id?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_GET_CALLER_ID tool output.
 */
type DIALMYCALLS_GET_CALLER_ID_OUTPUT = {
  /**
   * Data
   * @description The details of the requested Caller ID.
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp in ISO 8601 format.
       */
      created: string;
      /**
       * Id
       * @description The unique identifier for the caller ID.
       */
      id: string;
      /**
       * Phone Number
       * @description The caller's phone number in E.164 format.
       */
      phone_number: string;
      /**
       * Status
       * @description Status of the caller ID (e.g., 'verified', 'pending').
       */
      status: string;
      /**
       * Updated
       * @description Last updated timestamp in ISO 8601 format.
       */
      updated: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description A human-readable message about the result.
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call (e.g., 'success').
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_GET_CONTACT tool input.
 */
type DIALMYCALLS_GET_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier (UUID) of the contact to retrieve.
   */
  contact_id?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_GET_CONTACT tool output.
 */
type DIALMYCALLS_GET_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with contact
       */
      account_id: number;
      /**
       * Created
       * @description Date/time created (ISO format)
       * @default null
       */
      created: string | null;
      /**
       * Email
       * @description Contact's email address
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description Contact first name
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Contact's unique identifier
       */
      id: number;
      /**
       * Last Name
       * @description Contact last name
       * @default null
       */
      last_name: string | null;
      /**
       * List Id
       * @description List associated with contact
       * @default null
       */
      list_id: number | null;
      /**
       * Phone Number
       * @description Contact's phone number
       * @default null
       */
      phone_number: string | null;
      /**
       * Sms Enabled
       * @description If contact accepts SMS
       * @default null
       */
      sms_enabled: boolean | null;
      /**
       * Unique Id
       * @description User-defined unique identifier
       * @default null
       */
      unique_id: string | null;
      /**
       * Updated
       * @description Date/time last updated (ISO format)
       * @default null
       */
      updated: string | null;
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
 * Type of DIALMYCALLS's DIALMYCALLS_GET_GROUP tool input.
 */
type DIALMYCALLS_GET_GROUP_INPUT = {
  /**
   * Group Id
   * @description The ID of the group to retrieve
   */
  group_id?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_GET_GROUP tool output.
 */
type DIALMYCALLS_GET_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts in the group
       */
      contacts: {
          /**
           * Email
           * Format: email
           * @description The contact's email address
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description The contact's unique identifier
           */
          id: string;
          /**
           * Name
           * @description The contact's name
           * @default null
           */
          name: string | null;
          /**
           * Phone
           * @description The contact's phone number
           */
          phone: string;
      }[];
      /**
       * Created
       * Format: date-time
       * @description Date/time when the group was created (ISO 8601 format)
       */
      created: string;
      /**
       * Id
       * @description The group's unique identifier
       */
      id: number;
      /**
       * Modified
       * Format: date-time
       * @description Date/time when the group was last modified (ISO 8601 format)
       */
      modified: string;
      /**
       * Name
       * @description The group name
       */
      name: string;
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
 * Type of DIALMYCALLS's DIALMYCALLS_GET_RECORDING tool input.
 */
type DIALMYCALLS_GET_RECORDING_INPUT = {
  /**
   * Recording Id
   * @description The unique identifier of the recording to retrieve.
   */
  recording_id?: string;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_GET_RECORDING tool output.
 */
type DIALMYCALLS_GET_RECORDING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the recording.
       */
      account_id: string;
      /**
       * Date Created
       * @description Date/time the recording was created (YYYY-MM-DD HH:MM:SS).
       */
      date_created: string;
      /**
       * Description
       * @description Recording's description.
       * @default null
       */
      description: string | null;
      /**
       * File Url
       * @description URL to access the recording file.
       */
      file_url: string;
      /**
       * Id
       * @description Unique ID of the recording.
       */
      id: string;
      /**
       * Length
       * @description Length of the recording in seconds.
       */
      length: number;
      /**
       * Status
       * @description Status of the recording (e.g., 'completed').
       */
      status: string;
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
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_ACCESS_ACCOUNTS tool input.
 */
type DIALMYCALLS_LIST_ACCESS_ACCOUNTS_INPUT = {
  /**
   * Page
   * @description Page number for paginated results (default: 1).
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of results per page (default: 20).
   * @default 20
   */
  per_page: number;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_ACCESS_ACCOUNTS tool output.
 */
type DIALMYCALLS_LIST_ACCESS_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Accounts
       * @description List of access (sub) accounts.
       */
      access_accounts: {
          /**
           * Created
           * @description Timestamp when the access account was created (ISO 8601).
           */
          created: string;
          /**
           * Email
           * @description Email associated with the access account.
           */
          email: string;
          /**
           * Id
           * @description Unique identifier of the access account.
           */
          id: number;
          /**
           * Last Login
           * @description Timestamp of the last login (ISO 8601).
           */
          last_login: string;
          /**
           * Name
           * @description Name of the access account.
           */
          name: string;
          /**
           * Permission Set
           * @description Permission set assigned to the access account.
           */
          permission_set: string;
          /**
           * Status
           * @description Current status of the access account (e.g., active, inactive).
           */
          status: string;
          /**
           * Username
           * @description Username of the access account.
           */
          username: string;
      }[];
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Pages
       * @description Total number of pages available.
       */
      pages: number;
      /**
       * Per Page
       * @description Number of results per page.
       */
      per_page: number;
      /**
       * Total
       * @description Total number of access accounts.
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
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_CALLER_I_DS tool input.
 */
type DIALMYCALLS_LIST_CALLER_I_DS_INPUT = object;

/**
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_CALLER_I_DS tool output.
 */
type DIALMYCALLS_LIST_CALLER_I_DS_OUTPUT = {
  /**
   * Data
   * @description List of caller IDs associated with the account.
   */
  data?: {
      /**
       * Caller Id
       * @description The phone number of the caller ID in E.164 format.
       */
      caller_id: string;
      /**
       * Date Added
       * @description Date the caller ID was added in 'YYYY-MM-DD HH:MM:SS' format.
       */
      date_added: string;
      /**
       * Verified
       * @description Verification status of the caller ID ('yes' or 'no').
       * @enum {string}
       */
      verified: "yes" | "no";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Message about the request success or failure.
   */
  message?: string;
  /**
   * Success
   * @description Indicates if the request was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_CALLS tool input.
 */
type DIALMYCALLS_LIST_CALLS_INPUT = {
  /**
   * End Date
   * @description Filter broadcasts created on or before this date (YYYY-MM-DD).
   * @default null
   */
  end_date: string | null;
  /**
   * Keyword
   * @description Search filter for the call name.
   * @default null
   */
  keyword: string | null;
  /**
   * Limit
   * @description Number of records to return (max 1000).
   * @default 100
   */
  limit: number | null;
  /**
   * Offset
   * @description Record offset for pagination.
   * @default 0
   */
  offset: number | null;
  /**
   * Order
   * @description Sort order.
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field to sort by.
   * @default id
   * @enum {string|null}
   */
  sort: "id" | "created" | null;
  /**
   * Start Date
   * @description Filter broadcasts created on or after this date (YYYY-MM-DD).
   * @default null
   */
  start_date: string | null;
  /**
   * Status
   * @description Status of the broadcast to filter.
   * @default null
   * @enum {string|null}
   */
  status: "draft" | "sent" | "scheduled" | "stopped" | null;
  /**
   * Type
   * @description Type of voice broadcast to filter.
   * @default null
   * @enum {string|null}
   */
  type: "normal" | "survey" | "poll" | "reminder" | null;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_CALLS tool output.
 */
type DIALMYCALLS_LIST_CALLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calls
       * @description List of call broadcasts matching the filters.
       */
      calls: {
          /**
           * Created At
           * @description Timestamp when the broadcast was created (YYYY-MM-DD HH:MM:SS).
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the call broadcast.
           */
          id: number;
          /**
           * Message
           * @description Content of the message used in the broadcast.
           */
          message: string;
          /**
           * Name
           * @description Name of the call broadcast.
           */
          name: string;
          /**
           * Status
           * @description Current status of the broadcast (draft, sent, scheduled, stopped).
           */
          status: string;
          /**
           * Type
           * @description Type of voice broadcast (normal, survey, poll, reminder).
           */
          type: string;
      }[];
      /**
       * Limit
       * @description Limit used in the query.
       */
      limit: number;
      /**
       * Offset
       * @description Offset used in the query.
       */
      offset: number;
      /**
       * Total
       * @description Total number of available call broadcasts.
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
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_CONTACTS tool input.
 */
type DIALMYCALLS_LIST_CONTACTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of contacts to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based index to start returning contacts from.
   * @default null
   */
  offset: number | null;
  /**
   * Search
   * @description Keyword to filter contacts by name, phone, or email.
   * @default null
   */
  search: string | null;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_CONTACTS tool output.
 */
type DIALMYCALLS_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts matching the query.
       */
      contacts: {
          /**
           * Created
           * @description Timestamp when the contact was created (ISO 8601).
           */
          created: string;
          /**
           * Email
           * @description Email address of the contact.
           */
          email: string;
          /**
           * Id
           * @description Unique identifier for the contact.
           */
          id: string;
          /**
           * Name
           * @description Full name of the contact.
           */
          name: string;
          /**
           * Phone
           * @description Phone number of the contact in E.164 format.
           */
          phone: string;
          /**
           * Sms Enabled
           * @description Whether SMS is enabled for this contact.
           */
          sms_enabled: boolean;
      }[];
      /**
       * Status
       * @description Status of the request (e.g., 'success').
       */
      status: string;
      /**
       * Total
       * @description Total number of contacts.
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
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_CONTACTS_IN_GROUP tool input.
 */
type DIALMYCALLS_LIST_CONTACTS_IN_GROUP_INPUT = {
  /**
   * Group Id
   * @description The unique ID of the contact group to list contacts from.
   */
  group_id?: string;
  /**
   * Limit
   * @description Number of contacts to return (default 100, max 1000).
   * @default 100
   */
  limit: number;
  /**
   * Offset
   * @description Number of contacts to skip for pagination (default 0).
   * @default 0
   */
  offset: number;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_CONTACTS_IN_GROUP tool output.
 */
type DIALMYCALLS_LIST_CONTACTS_IN_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts in the specified group.
       */
      contacts: {
          /**
           * Created
           * @description Creation date/time of the contact (ISO 8601).
           * @default null
           */
          created: string | null;
          /**
           * Email
           * @description Contact's email address.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description Contact's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Groups
           * @description List of group IDs the contact belongs to.
           */
          groups: number[];
          /**
           * Id
           * @description Unique identifier for the contact.
           */
          id: number;
          /**
           * Last Name
           * @description Contact's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Phone
           * @description Contact's phone number.
           * @default null
           */
          phone: string | null;
      }[];
      /**
       * Status
       * @description Status message returned by the API.
       * @default null
       */
      status: string | null;
      /**
       * Total
       * @description Total number of contacts found in the group.
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
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_DO_NOT_CONTACTS tool input.
 */
type DIALMYCALLS_LIST_DO_NOT_CONTACTS_INPUT = {
  /**
   * Limit
   * @description Number of records to return (default 10, max 1000).
   * @default 10
   */
  limit: number;
  /**
   * Offset
   * @description Number of records to skip for pagination (default 0).
   * @default 0
   */
  offset: number;
  /**
   * Search
   * @description Search term to filter matching phone numbers or emails.
   * @default null
   */
  search: string | null;
  /**
   * Type
   * @description Filter entries by type: 'phone' or 'email'.
   * @default null
   * @enum {string|null}
   */
  type: "phone" | "email" | null;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_DO_NOT_CONTACTS tool output.
 */
type DIALMYCALLS_LIST_DO_NOT_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Donotcontacts
       * @description List of Do Not Contact entries.
       */
      donotcontacts: {
          /**
           * Created
           * @description Timestamp when the entry was created (ISO 8601).
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for this Do Not Contact entry.
           */
          id: number;
          /**
           * Type
           * @description Entry type: 'phone' for phone numbers or 'email'.
           * @enum {string}
           */
          type: "phone" | "email";
          /**
           * Value
           * @description The phone number or email address on the Do Not Contact list.
           */
          value: string;
      }[];
      /**
       * Success
       * @description Indicates whether the request was successful.
       */
      success: boolean;
      /**
       * Total
       * @description Total number of entries returned.
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
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_GROUPS tool input.
 */
type DIALMYCALLS_LIST_GROUPS_INPUT = object;

/**
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_GROUPS tool output.
 */
type DIALMYCALLS_LIST_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groups
       * @description List of contact group objects.
       */
      groups: {
          /**
           * Contact Count
           * @description Number of contacts in this group.
           */
          contact_count: number;
          /**
           * Id
           * @description The unique identifier of the contact group.
           */
          id: number;
          /**
           * Name
           * @description The name of the contact group.
           */
          name: string;
      }[];
      /**
       * Message
       * @description Error message if the request failed.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Indicates whether the request was successful ('success' or 'error').
       */
      status: string;
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
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_RECORDINGS tool input.
 */
type DIALMYCALLS_LIST_RECORDINGS_INPUT = {
  /**
   * Limit
   * @description Number of results per page (default is 10, max is 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number of results to retrieve (first page is 1)
   * @default null
   */
  page: number | null;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_RECORDINGS tool output.
 */
type DIALMYCALLS_LIST_RECORDINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Number of recordings returned per page.
       */
      limit: number;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Recordings
       * @description List of recording objects returned.
       */
      recordings: {
          /**
           * Date Added
           * @description Date the recording was added (ISO 8601 format).
           */
          date_added: string;
          /**
           * Duration
           * @description Duration of the recording in seconds.
           */
          duration: number;
          /**
           * Id
           * @description Unique ID of the recording.
           */
          id: number;
          /**
           * Name
           * @description Name of the recording.
           */
          name: string;
          /**
           * Status
           * @description Status of the recording (e.g., 'completed').
           */
          status: string;
      }[];
      /**
       * Status
       * @description Indicates whether the request was successful ('success' or 'error').
       */
      status: string;
      /**
       * Total
       * @description Total number of recordings.
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
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_TEXTS tool input.
 */
type DIALMYCALLS_LIST_TEXTS_INPUT = {
  /**
   * End
   * @description Filter texts created before this date (YYYY-MM-DD).
   * @default null
   */
  end: string | null;
  /**
   * Limit
   * @description Number of results to return per page (default 10 if not set, max 100).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set.
   * @default null
   */
  offset: number | null;
  /**
   * Start
   * @description Filter texts created after this date (YYYY-MM-DD).
   * @default null
   */
  start: string | null;
  /**
   * Status
   * @description Filter texts by status (e.g., 'sent', 'queued', 'failed').
   * @default null
   */
  status: string | null;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_TEXTS tool output.
 */
type DIALMYCALLS_LIST_TEXTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total count of matching text broadcasts.
       */
      count: number;
      /**
       * Texts
       * @description List of text broadcast summaries.
       */
      texts: {
          /**
           * Caller Id
           * @description Caller ID used to send the text.
           */
          caller_id: string;
          /**
           * Created
           * @description Timestamp when the broadcast was created (ISO 8601).
           */
          created: string;
          /**
           * Id
           * @description Unique identifier of the text broadcast.
           */
          id: number;
          /**
           * Message
           * @description Content of the text message.
           */
          message: string;
          /**
           * Send Date
           * @description Timestamp when the broadcast was sent (ISO 8601).
           * @default null
           */
          send_date: string | null;
          /**
           * Status
           * @description Overall status of the broadcast (e.g., 'sent', 'queued', 'failed').
           */
          status: string;
          /**
           * To
           * @description List of recipients with individual statuses.
           */
          to: {
              /**
               * Name
               * @description Recipient's name, if available.
               * @default null
               */
              name: string | null;
              /**
               * Number
               * @description Recipient's phone number in E.164 format.
               */
              number: string;
              /**
               * Status
               * @description Delivery status for this recipient.
               */
              status: string;
          }[];
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
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_VANITY_NUMBERS tool input.
 */
type DIALMYCALLS_LIST_VANITY_NUMBERS_INPUT = {
  /**
   * Limit
   * @description Number of records to return per page (max 100).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Record offset for pagination.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_LIST_VANITY_NUMBERS tool output.
 */
type DIALMYCALLS_LIST_VANITY_NUMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Number of records returned per page.
       */
      limit: number;
      /**
       * Offset
       * @description Record offset for the current page.
       */
      offset: number;
      /**
       * Total
       * @description Total number of available records.
       */
      total: number;
      /**
       * Vanity Numbers
       * @description List of vanity number objects.
       */
      vanity_numbers: {
          /**
           * Cost
           * @description Cost associated with the vanity number.
           */
          cost: string;
          /**
           * Formatted
           * @description Formatted version of the vanity number.
           */
          formatted: string;
          /**
           * Id
           * @description Unique identifier for the vanity number.
           */
          id: string;
          /**
           * Number
           * @description The vanity number itself.
           */
          number: string;
          /**
           * Status
           * @description Availability status of the vanity number.
           * @enum {string}
           */
          status: "available" | "unavailable";
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
 * Type of DIALMYCALLS's DIALMYCALLS_UPDATE_ACCESS_ACCOUNT tool input.
 */
type DIALMYCALLS_UPDATE_ACCESS_ACCOUNT_INPUT = {
  /**
   * Access Account Id
   * @description The ID of the access account to update.
   */
  access_account_id?: string;
  /**
   * Email
   * Format: email
   * @description New email address for the access account.
   * @default null
   */
  email: unknown;
  /**
   * Is Active
   * @description Activation flag: 1 to activate, 0 to deactivate.
   * @default null
   * @enum {integer|null}
   */
  is_active: 0 | 1 | null;
  /**
   * Name
   * @description New display name for the access account.
   * @default null
   */
  name: string | null;
  /**
   * Password
   * @description New password for the access account; must follow strength policy.
   * @default null
   */
  password: string | null;
  /**
   * Phone
   * @description New phone number for the access account (E.164 format).
   * @default null
   */
  phone: string | null;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_UPDATE_ACCESS_ACCOUNT tool output.
 */
type DIALMYCALLS_UPDATE_ACCESS_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Account Id
       * @description The ID of the access account that was updated.
       */
      access_account_id: number;
      /**
       * Message
       * @description A message describing the result of the update operation.
       */
      message: string;
      /**
       * Success
       * @description 1 if the update was successful, 0 otherwise.
       */
      success: number;
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
 * Type of DIALMYCALLS's DIALMYCALLS_UPDATE_CALLER_ID tool input.
 */
type DIALMYCALLS_UPDATE_CALLER_ID_INPUT = {
  /**
   * Caller Id
   * @description The unique identifier of the caller ID to update.
   */
  caller_id?: string;
  /**
   * Name
   * @description New friendly name for the caller ID.
   * @default null
   */
  name: string | null;
  /**
   * Phone Number
   * @description New caller ID phone number in E.164 format (e.g., '+15551234567')
   */
  phone_number?: unknown;
};

/**
 * Type of DIALMYCALLS's DIALMYCALLS_UPDATE_CALLER_ID tool output.
 */
type DIALMYCALLS_UPDATE_CALLER_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Callerid
       * @description Details of the updated caller ID.
       */
      callerid: {
          /**
           * Id
           * @description Unique identifier for the caller ID.
           */
          id: string;
          /**
           * Name
           * @description The updated display name of the caller ID.
           */
          name: string;
          /**
           * Phone Number
           * @description The updated phone number of the caller ID.
           */
          phone_number: string;
      };
      /**
       * Message
       * @description Message regarding the update operation.
       */
      message: string;
      /**
       * Success
       * @description Whether the update was successful.
       */
      success: boolean;
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
 * Type map of all available tool input types for toolkit "DIALMYCALLS".
 */
export type DIALMYCALLS_TOOL_INPUTS = {
  ADD_ACCESS_ACCOUNT: DIALMYCALLS_ADD_ACCESS_ACCOUNT_INPUT
  ADD_CONTACT: DIALMYCALLS_ADD_CONTACT_INPUT
  ADD_GROUP: DIALMYCALLS_ADD_GROUP_INPUT
  DELETE_ACCESS_ACCOUNT: DIALMYCALLS_DELETE_ACCESS_ACCOUNT_INPUT
  DELETE_CALLER_ID: DIALMYCALLS_DELETE_CALLER_ID_INPUT
  DELETE_CONTACT: DIALMYCALLS_DELETE_CONTACT_INPUT
  DELETE_GROUP: DIALMYCALLS_DELETE_GROUP_INPUT
  DELETE_RECORDING: DIALMYCALLS_DELETE_RECORDING_INPUT
  GET_ACCESS_ACCOUNT: DIALMYCALLS_GET_ACCESS_ACCOUNT_INPUT
  GET_ACCOUNT: DIALMYCALLS_GET_ACCOUNT_INPUT
  GET_CALLER_ID: DIALMYCALLS_GET_CALLER_ID_INPUT
  GET_CONTACT: DIALMYCALLS_GET_CONTACT_INPUT
  GET_GROUP: DIALMYCALLS_GET_GROUP_INPUT
  GET_RECORDING: DIALMYCALLS_GET_RECORDING_INPUT
  LIST_ACCESS_ACCOUNTS: DIALMYCALLS_LIST_ACCESS_ACCOUNTS_INPUT
  LIST_CALLER_I_DS: DIALMYCALLS_LIST_CALLER_I_DS_INPUT
  LIST_CALLS: DIALMYCALLS_LIST_CALLS_INPUT
  LIST_CONTACTS: DIALMYCALLS_LIST_CONTACTS_INPUT
  LIST_CONTACTS_IN_GROUP: DIALMYCALLS_LIST_CONTACTS_IN_GROUP_INPUT
  LIST_DO_NOT_CONTACTS: DIALMYCALLS_LIST_DO_NOT_CONTACTS_INPUT
  LIST_GROUPS: DIALMYCALLS_LIST_GROUPS_INPUT
  LIST_RECORDINGS: DIALMYCALLS_LIST_RECORDINGS_INPUT
  LIST_TEXTS: DIALMYCALLS_LIST_TEXTS_INPUT
  LIST_VANITY_NUMBERS: DIALMYCALLS_LIST_VANITY_NUMBERS_INPUT
  UPDATE_ACCESS_ACCOUNT: DIALMYCALLS_UPDATE_ACCESS_ACCOUNT_INPUT
  UPDATE_CALLER_ID: DIALMYCALLS_UPDATE_CALLER_ID_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DIALMYCALLS".
 */
export type DIALMYCALLS_TOOL_OUTPUTS = {
  ADD_ACCESS_ACCOUNT: DIALMYCALLS_ADD_ACCESS_ACCOUNT_OUTPUT
  ADD_CONTACT: DIALMYCALLS_ADD_CONTACT_OUTPUT
  ADD_GROUP: DIALMYCALLS_ADD_GROUP_OUTPUT
  DELETE_ACCESS_ACCOUNT: DIALMYCALLS_DELETE_ACCESS_ACCOUNT_OUTPUT
  DELETE_CALLER_ID: DIALMYCALLS_DELETE_CALLER_ID_OUTPUT
  DELETE_CONTACT: DIALMYCALLS_DELETE_CONTACT_OUTPUT
  DELETE_GROUP: DIALMYCALLS_DELETE_GROUP_OUTPUT
  DELETE_RECORDING: DIALMYCALLS_DELETE_RECORDING_OUTPUT
  GET_ACCESS_ACCOUNT: DIALMYCALLS_GET_ACCESS_ACCOUNT_OUTPUT
  GET_ACCOUNT: DIALMYCALLS_GET_ACCOUNT_OUTPUT
  GET_CALLER_ID: DIALMYCALLS_GET_CALLER_ID_OUTPUT
  GET_CONTACT: DIALMYCALLS_GET_CONTACT_OUTPUT
  GET_GROUP: DIALMYCALLS_GET_GROUP_OUTPUT
  GET_RECORDING: DIALMYCALLS_GET_RECORDING_OUTPUT
  LIST_ACCESS_ACCOUNTS: DIALMYCALLS_LIST_ACCESS_ACCOUNTS_OUTPUT
  LIST_CALLER_I_DS: DIALMYCALLS_LIST_CALLER_I_DS_OUTPUT
  LIST_CALLS: DIALMYCALLS_LIST_CALLS_OUTPUT
  LIST_CONTACTS: DIALMYCALLS_LIST_CONTACTS_OUTPUT
  LIST_CONTACTS_IN_GROUP: DIALMYCALLS_LIST_CONTACTS_IN_GROUP_OUTPUT
  LIST_DO_NOT_CONTACTS: DIALMYCALLS_LIST_DO_NOT_CONTACTS_OUTPUT
  LIST_GROUPS: DIALMYCALLS_LIST_GROUPS_OUTPUT
  LIST_RECORDINGS: DIALMYCALLS_LIST_RECORDINGS_OUTPUT
  LIST_TEXTS: DIALMYCALLS_LIST_TEXTS_OUTPUT
  LIST_VANITY_NUMBERS: DIALMYCALLS_LIST_VANITY_NUMBERS_OUTPUT
  UPDATE_ACCESS_ACCOUNT: DIALMYCALLS_UPDATE_ACCESS_ACCOUNT_OUTPUT
  UPDATE_CALLER_ID: DIALMYCALLS_UPDATE_CALLER_ID_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DIALMYCALLS toolkit.
 */
export const DIALMYCALLS = {
  slug: "dialmycalls",
  tools: {
    /**
     * Tool to add a new access (sub) account. use when you need to delegate dialing capabilities to another user after setting up your master account.
     */
    ADD_ACCESS_ACCOUNT: "DIALMYCALLS_ADD_ACCESS_ACCOUNT",
    /**
     * Tool to add a contact to your contact list. use when you need to store a new contact's phone (and optional name, email, or group) before sending messages.
     */
    ADD_CONTACT: "DIALMYCALLS_ADD_CONTACT",
    /**
     * Tool to add a new contact group. use after deciding the group name to organize recipients into groups.
     */
    ADD_GROUP: "DIALMYCALLS_ADD_GROUP",
    /**
     * Tool to delete an access (sub) account by id. use when removing a sub account after deprovisioning.
     */
    DELETE_ACCESS_ACCOUNT: "DIALMYCALLS_DELETE_ACCESS_ACCOUNT",
    /**
     * Tool to delete a caller id. use when you need to permanently remove an existing caller id no longer in use.
     */
    DELETE_CALLER_ID: "DIALMYCALLS_DELETE_CALLER_ID",
    /**
     * Tool to delete a contact by id. use when you need to permanently remove a contact from your list.
     */
    DELETE_CONTACT: "DIALMYCALLS_DELETE_CONTACT",
    /**
     * Tool to delete a contact group by id. use when you need to remove an existing contact group after confirming its id.
     */
    DELETE_GROUP: "DIALMYCALLS_DELETE_GROUP",
    /**
     * Tool to delete a recording by id. use when you need to permanently remove a custom recording after confirming its recording id.
     */
    DELETE_RECORDING: "DIALMYCALLS_DELETE_RECORDING",
    /**
     * Tool to retrieve an access (sub) account by id. use when you need to inspect the details of a specific sub-account.
     */
    GET_ACCESS_ACCOUNT: "DIALMYCALLS_GET_ACCESS_ACCOUNT",
    /**
     * Tool to retrieve your main account details. use when you need to confirm account id, remaining credits, and status.
     */
    GET_ACCOUNT: "DIALMYCALLS_GET_ACCOUNT",
    /**
     * Tool to retrieve a caller id by id. use when you need its details such as phone number and verification status.
     */
    GET_CALLER_ID: "DIALMYCALLS_GET_CALLER_ID",
    /**
     * Tool to retrieve a contact by its unique id. use when you need to fetch details of a specific contact from your account.
     */
    GET_CONTACT: "DIALMYCALLS_GET_CONTACT",
    /**
     * Tool to retrieve a contact group by id. use when you need to fetch group details after creating or updating a group.
     */
    GET_GROUP: "DIALMYCALLS_GET_GROUP",
    /**
     * Tool to retrieve a recording by id. use when you need details and file url of an existing recording.
     */
    GET_RECORDING: "DIALMYCALLS_GET_RECORDING",
    /**
     * Tool to list all access (sub) accounts. use when you need to retrieve paginated sub-account information for administration or reporting.
     */
    LIST_ACCESS_ACCOUNTS: "DIALMYCALLS_LIST_ACCESS_ACCOUNTS",
    /**
     * Tool to list all caller ids on the account. use when you need to enumerate existing caller ids before performing other operations.
     */
    LIST_CALLER_I_DS: "DIALMYCALLS_LIST_CALLER_I_DS",
    /**
     * Tool to list all call broadcasts on the account. use when you need to retrieve or manage call records with optional filters like name, type, status, dates, pagination, and sorting.
     */
    LIST_CALLS: "DIALMYCALLS_LIST_CALLS",
    /**
     * Tool to list all contacts in your contact list. use when fetching paginated or filtered contact data for review (e.g., after adding or updating contacts).
     */
    LIST_CONTACTS: "DIALMYCALLS_LIST_CONTACTS",
    /**
     * Tool to list contacts by contact group id. use when you need to retrieve all contacts belonging to a specific group for management or reporting.
     */
    LIST_CONTACTS_IN_GROUP: "DIALMYCALLS_LIST_CONTACTS_IN_GROUP",
    /**
     * Tool to list all do not contact entries. use when you need to review or manage blocked phone numbers or emails in your account. supports pagination and filtering by type and search.
     */
    LIST_DO_NOT_CONTACTS: "DIALMYCALLS_LIST_DO_NOT_CONTACTS",
    /**
     * Tool to list all contact groups. use when you need an overview of existing groups before sending messages.
     */
    LIST_GROUPS: "DIALMYCALLS_LIST_GROUPS",
    /**
     * Tool to list all recordings. use when you need to retrieve your account's recordings for auditing or bulk management.
     */
    LIST_RECORDINGS: "DIALMYCALLS_LIST_RECORDINGS",
    /**
     * Tool to list all outgoing text broadcasts. use when you need to review past text broadcasts with filters for date, status, and pagination.
     */
    LIST_TEXTS: "DIALMYCALLS_LIST_TEXTS",
    /**
     * Tool to list all vanity numbers. use when you need to retrieve available vanity phone numbers with pagination support.
     */
    LIST_VANITY_NUMBERS: "DIALMYCALLS_LIST_VANITY_NUMBERS",
    /**
     * Tool to update an existing access (sub) account by id. use when you need to change details like email, phone, name, password, or activation status after account creation.
     */
    UPDATE_ACCESS_ACCOUNT: "DIALMYCALLS_UPDATE_ACCESS_ACCOUNT",
    /**
     * Tool to update an existing caller id by id. use when you need to change its phone number or display name.
     */
    UPDATE_CALLER_ID: "DIALMYCALLS_UPDATE_CALLER_ID",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DIALMYCALLS".
 */
export type DIALMYCALLS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DIALMYCALLS".
 */
export type DIALMYCALLS_TRIGGER_EVENTS = {}
