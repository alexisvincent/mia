// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SMS_ALERT's SMS_ALERT_GET_BALANCE_CHECK tool input.
 */
type SMS_ALERT_GET_BALANCE_CHECK_INPUT = object;

/**
 * Type of SMS_ALERT's SMS_ALERT_GET_BALANCE_CHECK tool output.
 */
type SMS_ALERT_GET_BALANCE_CHECK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Contains details about the balance
       */
      description: {
          /**
           * Desc
           * @description Summary of available credits per route, e.g., 'transactional:85-nondnd:5'
           */
          desc: string;
          /**
           * Routes
           * @description List of objects detailing credits available for each route
           */
          routes: {
              /**
               * Credits
               * @description Number of credits available for the route
               */
              credits: string;
              /**
               * Display Name
               * @description User-friendly name of the route
               */
              display_name: string;
              /**
               * Route
               * @description Name of the route
               */
              route: string;
          }[];
      };
      /**
       * Status
       * @description Indicates whether the request succeeded or failed
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
 * Type of SMS_ALERT's SMS_ALERT_GET_GROUP_DETAIL tool input.
 */
type SMS_ALERT_GET_GROUP_DETAIL_INPUT = {
  /**
   * Group Id
   * @description ID of the group to fetch details
   */
  group_id?: number;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_GET_GROUP_DETAIL tool output.
 */
type SMS_ALERT_GET_GROUP_DETAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description List of contacts or error description from the API
       */
      description: {
          [key: string]: unknown;
      }[];
      /**
       * Status
       * @description API call status, e.g., 'success' or 'error'
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
 * Type of SMS_ALERT's SMS_ALERT_GET_GROUP_LIST tool input.
 */
type SMS_ALERT_GET_GROUP_LIST_INPUT = object;

/**
 * Type of SMS_ALERT's SMS_ALERT_GET_GROUP_LIST tool output.
 */
type SMS_ALERT_GET_GROUP_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Additional information about the status
       */
      description: string;
      /**
       * Group List
       * @description List of groups in your SMS Alert account
       */
      group_list: {
          /**
           * Created At
           * @description Date and time when the group was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the group
           */
          id: number;
          /**
           * Name
           * @description Name of the group
           */
          name: string;
      }[];
      /**
       * Status
       * @description Indicates the status of the request, e.g., 'success'
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
 * Type of SMS_ALERT's SMS_ALERT_GET_SENDER_ID_LIST tool input.
 */
type SMS_ALERT_GET_SENDER_ID_LIST_INPUT = object;

/**
 * Type of SMS_ALERT's SMS_ALERT_GET_SENDER_ID_LIST tool output.
 */
type SMS_ALERT_GET_SENDER_ID_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sender
       * @description List of sender ID objects.
       */
      sender: {
          /**
           * Sender
           * @description The sender ID.
           */
          sender: string;
      }[];
      /**
       * Status
       * @description API call status (e.g., 'success' or 'error').
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
 * Type of SMS_ALERT's SMS_ALERT_GET_TEMPLATE_LIST tool input.
 */
type SMS_ALERT_GET_TEMPLATE_LIST_INPUT = {
  /**
   * Template Type
   * @description Filter templates by type, e.g., 'transactional' or 'promotional'.
   * @default null
   */
  template_type: string | null;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_GET_TEMPLATE_LIST tool output.
 */
type SMS_ALERT_GET_TEMPLATE_LIST_OUTPUT = {
  /**
   * Data
   * @description List of SMS template objects.
   */
  data?: {
      /**
       * Entity Id
       * @description DLT Entity ID of the template.
       */
      entity_id: string;
      /**
       * Status
       * @description Status of the template, e.g., approved, pending.
       */
      status: string;
      /**
       * Template Content
       * @description Content/text of the template.
       */
      template_content: string;
      /**
       * Template Id
       * @description DLT Template ID.
       */
      template_id: string;
      /**
       * Template Name
       * @description Name/identifier of the template.
       */
      template_name: string;
      /**
       * Template Type
       * @description Type of the template, e.g., transactional.
       */
      template_type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional information or error message from the API.
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description API call status, 'success' or 'error'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_CREATE_CONTACT tool input.
 */
type SMS_ALERT_POST_CREATE_CONTACT_INPUT = {
  /**
   * Group
   * @description Name of the group to which the contact(s) will be added
   */
  group?: string;
  /**
   * Mobile
   * @description Mobile number(s) as a 10-digit string, comma-separated for multiple contacts
   */
  mobile?: string;
  /**
   * Name
   * @description Full name of the contact
   */
  name?: string;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_CREATE_CONTACT tool output.
 */
type SMS_ALERT_POST_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Detailed message about the operation result
       */
      message: string;
      /**
       * Type
       * @description Indicates whether the operation succeeded or failed
       * @enum {string}
       */
      type: "success" | "error";
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
 * Type of SMS_ALERT's SMS_ALERT_POST_CREATE_GROUP tool input.
 */
type SMS_ALERT_POST_CREATE_GROUP_INPUT = {
  /**
   * Name
   * @description Name of the group to create. Only letters, numbers, hyphens, and underscores are allowed. Spaces are not permitted.
   */
  name?: string;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_CREATE_GROUP tool output.
 */
type SMS_ALERT_POST_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Success message or nested error description object
       */
      description: string | null;
      /**
       * Status
       * @description Indicates whether the operation succeeded or failed
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
 * Type of SMS_ALERT's SMS_ALERT_POST_CREATE_SHORT_URL tool input.
 */
type SMS_ALERT_POST_CREATE_SHORT_URL_INPUT = {
  /**
   * Alias
   * @description Custom alias for the short URL; omit or set to null for system-generated alias
   * @default null
   */
  alias: string | null;
  /**
   * Url
   * @description The original long URL to shorten
   */
  url?: string;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_CREATE_SHORT_URL tool output.
 */
type SMS_ALERT_POST_CREATE_SHORT_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alias
       * @description The alias used for the short URL (custom or system-generated)
       * @default null
       */
      alias: string | null;
      /**
       * Message
       * @description Additional message or error detail from the API
       * @default null
       */
      message: string | null;
      /**
       * Short Url
       * @description The generated shortened URL
       */
      short_url: string;
      /**
       * Status
       * @description Indicates whether the operation succeeded ('success') or failed
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
 * Type of SMS_ALERT's SMS_ALERT_POST_CREATE_TEMPLATE tool input.
 */
type SMS_ALERT_POST_CREATE_TEMPLATE_INPUT = {
  /**
   * Name
   * @description Name of the SMS template
   */
  name?: string;
  /**
   * Text
   * @description Text content of the SMS template
   */
  text?: string;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_CREATE_TEMPLATE tool output.
 */
type SMS_ALERT_POST_CREATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Provides additional information about the request outcome
       */
      description: string;
      /**
       * Status
       * @description Indicates whether the operation succeeded ('success') or failed ('error')
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
 * Type of SMS_ALERT's SMS_ALERT_POST_DELETE_CONTACT tool input.
 */
type SMS_ALERT_POST_DELETE_CONTACT_INPUT = {
  /**
   * Id
   * @description The Contact Number ID of the contact to delete.
   */
  id?: string;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_DELETE_CONTACT tool output.
 */
type SMS_ALERT_POST_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Provides additional information about the result of the request.
       */
      description: string;
      /**
       * Status
       * @description Indicates the success or failure of the request. Possible values are "success" or "error".
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
 * Type of SMS_ALERT's SMS_ALERT_POST_DELETE_GROUP tool input.
 */
type SMS_ALERT_POST_DELETE_GROUP_INPUT = {
  /**
   * Id
   * @description The unique identifier of the SMS Alert group to delete.
   */
  id?: number;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_DELETE_GROUP tool output.
 */
type SMS_ALERT_POST_DELETE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Provides additional information about the result of the request.
       */
      description: string;
      /**
       * Status
       * @description Indicates the success or failure of the request. Possible values are "success" or "error".
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
 * Type of SMS_ALERT's SMS_ALERT_POST_DELETE_SHORT_URL tool input.
 */
type SMS_ALERT_POST_DELETE_SHORT_URL_INPUT = {
  /**
   * Id
   * @description The unique identifier of the short URL to delete.
   */
  id?: string;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_DELETE_SHORT_URL tool output.
 */
type SMS_ALERT_POST_DELETE_SHORT_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Provides additional information about the result of the request.
       */
      description: string;
      /**
       * Status
       * @description Indicates the success or failure of the request. Possible values are "success" or "error".
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
 * Type of SMS_ALERT's SMS_ALERT_POST_DELETE_TEMPLATE tool input.
 */
type SMS_ALERT_POST_DELETE_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description The unique identifier of the SMS template to delete.
   */
  template_id?: string;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_DELETE_TEMPLATE tool output.
 */
type SMS_ALERT_POST_DELETE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Provides additional information about the result of the request.
       */
      message: string;
      /**
       * Status
       * @description Indicates the success or failure of the request. Possible values are "success" or "error".
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
 * Type of SMS_ALERT's SMS_ALERT_POST_EDIT_CONTACT tool input.
 */
type SMS_ALERT_POST_EDIT_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to update
   */
  contact_id?: string;
  /**
   * Email
   * @description New email address for the contact
   * @default null
   */
  email: string | null;
  /**
   * Group Id
   * @description ID of the group to assign the contact to
   * @default null
   */
  group_id: string | null;
  /**
   * Mobileno
   * @description New mobile number for the contact; must be unique
   * @default null
   */
  mobileno: string | null;
  /**
   * Name
   * @description New name for the contact
   * @default null
   */
  name: string | null;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_EDIT_CONTACT tool output.
 */
type SMS_ALERT_POST_EDIT_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Additional information about the result
       */
      description: string;
      /**
       * Status
       * @description Indicates whether the update was successful or not
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
 * Type of SMS_ALERT's SMS_ALERT_POST_EDIT_GROUP tool input.
 */
type SMS_ALERT_POST_EDIT_GROUP_INPUT = {
  /**
   * Id
   * @description Unique identifier of the group to update
   */
  id?: string;
  /**
   * Name
   * @description New name for the group
   */
  name?: string;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_EDIT_GROUP tool output.
 */
type SMS_ALERT_POST_EDIT_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Additional information about the result
       */
      description: string;
      /**
       * Status
       * @description Indicates whether the update was successful
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
 * Type of SMS_ALERT's SMS_ALERT_POST_EDIT_PROFILE tool input.
 */
type SMS_ALERT_POST_EDIT_PROFILE_INPUT = {
  /**
   * Address
   * @description Physical address
   * @default null
   */
  address: string | null;
  /**
   * City
   * @description City name
   * @default null
   */
  city: string | null;
  /**
   * Company
   * @description Company name
   * @default null
   */
  company: string | null;
  /**
   * Country
   * @description Country
   * @default null
   */
  country: string | null;
  /**
   * Email
   * @description Email address
   * @default null
   */
  email: string | null;
  /**
   * Gst
   * @description GST number
   * @default null
   */
  gst: string | null;
  /**
   * Mobileno
   * @description Registered mobile number
   */
  mobileno?: string;
  /**
   * Pincode
   * @description Postal PIN code
   * @default null
   */
  pincode: string | null;
  /**
   * State
   * @description State name
   * @default null
   */
  state: string | null;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_EDIT_PROFILE tool output.
 */
type SMS_ALERT_POST_EDIT_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Description or status message
       */
      message: string;
      /**
       * Status
       * @description Result of the update request
       * @enum {string}
       */
      status: "success" | "failure";
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
 * Type of SMS_ALERT's SMS_ALERT_POST_EDIT_TEMPLATE tool input.
 */
type SMS_ALERT_POST_EDIT_TEMPLATE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the template to update
   */
  id?: string;
  /**
   * Name
   * @description New name for the template
   */
  name?: string;
  /**
   * Text
   * @description New SMS content for the template
   */
  text?: string;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_EDIT_TEMPLATE tool output.
 */
type SMS_ALERT_POST_EDIT_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Additional information about the result
       */
      description: string;
      /**
       * Status
       * @description Indicates whether the update was successful
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
 * Type of SMS_ALERT's SMS_ALERT_POST_GENERATE_OTP tool input.
 */
type SMS_ALERT_POST_GENERATE_OTP_INPUT = {
  /**
   * Mobileno
   * @description Mobile number(s) to send OTP, comma-separated, with or without country code
   */
  mobileno?: string;
  /**
   * Sender
   * @description Sender ID approved by SMS Alert, up to 6 characters
   * @default null
   */
  sender: string | null;
  /**
   * Template
   * @description Template for OTP containing the [otp] tag, e.g., '[otp]'
   */
  template?: string;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_GENERATE_OTP tool output.
 */
type SMS_ALERT_POST_GENERATE_OTP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * SuccessDescription
       * @description Details of the OTP generation or error
       */
      description: {
          /**
           * Batch Dtl
           * @description List of details for each message in the batch
           */
          batch_dtl: {
              /**
               * Mobileno
               * @description Mobile number to which the OTP was sent
               */
              mobileno: string;
              /**
               * Msgid
               * @description Message ID of the sent OTP
               */
              msgid: string;
              /**
               * Status
               * @description Delivery status of the OTP message
               */
              status: string;
          }[];
          /**
           * Batchid
           * @description Batch ID of the scheduled OTP message
           */
          batchid: string;
          /**
           * Desc
           * @description Description of the success status, e.g., number of messages scheduled
           */
          desc: string;
      } | null;
      /**
       * Status
       * @description Indicates whether the request succeeded or failed
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
 * Type of SMS_ALERT's SMS_ALERT_POST_SENT_SMS_REPORT tool input.
 */
type SMS_ALERT_POST_SENT_SMS_REPORT_INPUT = {
  /**
   * Campaignuniqueid
   * @description Filter by specific campaign unique ID
   * @default null
   */
  campaignuniqueid: string | null;
  /**
   * Limit
   * @description Records per page (≥ 1)
   * @default 20
   */
  limit: number | null;
  /**
   * Mobile
   * @description Comma-separated mobile numbers to filter the report
   * @default null
   */
  mobile: string | null;
  /**
   * Page
   * @description Page number for results (≥ 1)
   * @default 1
   */
  page: number | null;
};

/**
 * Type of SMS_ALERT's SMS_ALERT_POST_SENT_SMS_REPORT tool output.
 */
type SMS_ALERT_POST_SENT_SMS_REPORT_OUTPUT = {
  /**
   * Data
   * @description List of sent SMS log entries
   */
  data?: {
      /**
       * Circle
       * @description Telecom circle, if available
       * @default null
       */
      circle: string | null;
      /**
       * Message
       * @description Content of the SMS sent
       */
      message: string;
      /**
       * Mobile
       * @description Recipient mobile number
       */
      mobile: string;
      /**
       * Operator
       * @description Telecom operator name, if available
       * @default null
       */
      operator: string | null;
      /**
       * Senttime
       * @description Timestamp when message was sent (YYYY-MM-DD HH:MM:SS)
       */
      senttime: string;
      /**
       * Status
       * @description Delivery status of the SMS
       */
      status: string;
      /**
       * Uniquecampaignid
       * @description Unique campaign identifier
       */
      uniquecampaignid: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Limit
   * @description Limit of records per page
   */
  limit?: number;
  /**
   * Message
   * @description Response message from API
   */
  message?: string;
  /**
   * Page
   * @description Current page number returned
   */
  page?: number;
  /**
   * Status
   * @description API response status, success or failure
   * @enum {string}
   */
  status?: "success" | "failure";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Records
   * @description Total records matching the query
   */
  total_records?: number;
};

/**
 * Type map of all available tool input types for toolkit "SMS_ALERT".
 */
export type SMS_ALERT_TOOL_INPUTS = {
  GET_BALANCE_CHECK: SMS_ALERT_GET_BALANCE_CHECK_INPUT
  GET_GROUP_DETAIL: SMS_ALERT_GET_GROUP_DETAIL_INPUT
  GET_GROUP_LIST: SMS_ALERT_GET_GROUP_LIST_INPUT
  GET_SENDER_ID_LIST: SMS_ALERT_GET_SENDER_ID_LIST_INPUT
  GET_TEMPLATE_LIST: SMS_ALERT_GET_TEMPLATE_LIST_INPUT
  POST_CREATE_CONTACT: SMS_ALERT_POST_CREATE_CONTACT_INPUT
  POST_CREATE_GROUP: SMS_ALERT_POST_CREATE_GROUP_INPUT
  POST_CREATE_SHORT_URL: SMS_ALERT_POST_CREATE_SHORT_URL_INPUT
  POST_CREATE_TEMPLATE: SMS_ALERT_POST_CREATE_TEMPLATE_INPUT
  POST_DELETE_CONTACT: SMS_ALERT_POST_DELETE_CONTACT_INPUT
  POST_DELETE_GROUP: SMS_ALERT_POST_DELETE_GROUP_INPUT
  POST_DELETE_SHORT_URL: SMS_ALERT_POST_DELETE_SHORT_URL_INPUT
  POST_DELETE_TEMPLATE: SMS_ALERT_POST_DELETE_TEMPLATE_INPUT
  POST_EDIT_CONTACT: SMS_ALERT_POST_EDIT_CONTACT_INPUT
  POST_EDIT_GROUP: SMS_ALERT_POST_EDIT_GROUP_INPUT
  POST_EDIT_PROFILE: SMS_ALERT_POST_EDIT_PROFILE_INPUT
  POST_EDIT_TEMPLATE: SMS_ALERT_POST_EDIT_TEMPLATE_INPUT
  POST_GENERATE_OTP: SMS_ALERT_POST_GENERATE_OTP_INPUT
  POST_SENT_SMS_REPORT: SMS_ALERT_POST_SENT_SMS_REPORT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SMS_ALERT".
 */
export type SMS_ALERT_TOOL_OUTPUTS = {
  GET_BALANCE_CHECK: SMS_ALERT_GET_BALANCE_CHECK_OUTPUT
  GET_GROUP_DETAIL: SMS_ALERT_GET_GROUP_DETAIL_OUTPUT
  GET_GROUP_LIST: SMS_ALERT_GET_GROUP_LIST_OUTPUT
  GET_SENDER_ID_LIST: SMS_ALERT_GET_SENDER_ID_LIST_OUTPUT
  GET_TEMPLATE_LIST: SMS_ALERT_GET_TEMPLATE_LIST_OUTPUT
  POST_CREATE_CONTACT: SMS_ALERT_POST_CREATE_CONTACT_OUTPUT
  POST_CREATE_GROUP: SMS_ALERT_POST_CREATE_GROUP_OUTPUT
  POST_CREATE_SHORT_URL: SMS_ALERT_POST_CREATE_SHORT_URL_OUTPUT
  POST_CREATE_TEMPLATE: SMS_ALERT_POST_CREATE_TEMPLATE_OUTPUT
  POST_DELETE_CONTACT: SMS_ALERT_POST_DELETE_CONTACT_OUTPUT
  POST_DELETE_GROUP: SMS_ALERT_POST_DELETE_GROUP_OUTPUT
  POST_DELETE_SHORT_URL: SMS_ALERT_POST_DELETE_SHORT_URL_OUTPUT
  POST_DELETE_TEMPLATE: SMS_ALERT_POST_DELETE_TEMPLATE_OUTPUT
  POST_EDIT_CONTACT: SMS_ALERT_POST_EDIT_CONTACT_OUTPUT
  POST_EDIT_GROUP: SMS_ALERT_POST_EDIT_GROUP_OUTPUT
  POST_EDIT_PROFILE: SMS_ALERT_POST_EDIT_PROFILE_OUTPUT
  POST_EDIT_TEMPLATE: SMS_ALERT_POST_EDIT_TEMPLATE_OUTPUT
  POST_GENERATE_OTP: SMS_ALERT_POST_GENERATE_OTP_OUTPUT
  POST_SENT_SMS_REPORT: SMS_ALERT_POST_SENT_SMS_REPORT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SMS_ALERT toolkit.
 */
export const SMS_ALERT = {
  slug: "sms_alert",
  tools: {
    /**
     * Tool to retrieve the current sms credit balance. use when you need an up-to-date credit status before sending messages.
     */
    GET_BALANCE_CHECK: "SMS_ALERT_GET_BALANCE_CHECK",
    /**
     * Tool to retrieve details of a specific sms alert group. use after confirming the group id.
     */
    GET_GROUP_DETAIL: "SMS_ALERT_GET_GROUP_DETAIL",
    /**
     * Tool to retrieve a list of sms alert groups. use when you need to fetch all groups associated with your account. call after authenticating your api key.
     */
    GET_GROUP_LIST: "SMS_ALERT_GET_GROUP_LIST",
    /**
     * Tool to fetch the list of available sender ids. use when you need to retrieve all sender ids associated with your account. use after configuring your api key.
     */
    GET_SENDER_ID_LIST: "SMS_ALERT_GET_SENDER_ID_LIST",
    /**
     * Tool to retrieve list of sms templates from your smsalert account. use when you need to display or manage your smsalert templates.
     */
    GET_TEMPLATE_LIST: "SMS_ALERT_GET_TEMPLATE_LIST",
    /**
     * Create new contact
     */
    POST_CREATE_CONTACT: "SMS_ALERT_POST_CREATE_CONTACT",
    /**
     * Tool to create a new contact group. use when needing to organize contacts into a new group.
     */
    POST_CREATE_GROUP: "SMS_ALERT_POST_CREATE_GROUP",
    /**
     * Tool to create a short url for a given long url. use when you need to shorten a url before sharing.
     */
    POST_CREATE_SHORT_URL: "SMS_ALERT_POST_CREATE_SHORT_URL",
    /**
     * Tool to create a new sms template. use when you need to define reusable message content.
     */
    POST_CREATE_TEMPLATE: "SMS_ALERT_POST_CREATE_TEMPLATE",
    /**
     * Tool to delete a specified contact. use after confirming the contact's id.
     */
    POST_DELETE_CONTACT: "SMS_ALERT_POST_DELETE_CONTACT",
    /**
     * Tool to delete a specified group. use after confirming the group's id.
     */
    POST_DELETE_GROUP: "SMS_ALERT_POST_DELETE_GROUP",
    /**
     * Tool to delete an existing short url. use after confirming the short url's id.
     */
    POST_DELETE_SHORT_URL: "SMS_ALERT_POST_DELETE_SHORT_URL",
    /**
     * Tool to delete an existing sms template. use when you have the template id to remove it.
     */
    POST_DELETE_TEMPLATE: "SMS_ALERT_POST_DELETE_TEMPLATE",
    /**
     * Tool to edit an existing contact’s details. use when you need to update a contact’s information after confirming the contact id.
     */
    POST_EDIT_CONTACT: "SMS_ALERT_POST_EDIT_CONTACT",
    /**
     * Tool to edit an existing groups name. use when you need to rename a group after confirming the group id.
     */
    POST_EDIT_GROUP: "SMS_ALERT_POST_EDIT_GROUP",
    /**
     * Tool to update user account profile details. use when modifying authenticated user profile after login.
     */
    POST_EDIT_PROFILE: "SMS_ALERT_POST_EDIT_PROFILE",
    /**
     * Tool to edit an existing sms template. use when you need to update a template after confirming the template id.
     */
    POST_EDIT_TEMPLATE: "SMS_ALERT_POST_EDIT_TEMPLATE",
    /**
     * Tool to generate a one-time password (otp). use when you need to send an otp to a mobile number using a predefined template.
     */
    POST_GENERATE_OTP: "SMS_ALERT_POST_GENERATE_OTP",
    /**
     * Tool to retrieve sms campaign sent report details. use after campaigns are sent to analyze delivery results.
     */
    POST_SENT_SMS_REPORT: "SMS_ALERT_POST_SENT_SMS_REPORT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SMS_ALERT".
 */
export type SMS_ALERT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SMS_ALERT".
 */
export type SMS_ALERT_TRIGGER_EVENTS = {}
