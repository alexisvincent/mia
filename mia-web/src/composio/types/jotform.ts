// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of JOTFORM's JOTFORM_GET_SYSTEM_PLAN tool input.
 */
type JOTFORM_GET_SYSTEM_PLAN_INPUT = {
  /**
   * Plan Name
   * @description Name of the system plan to retrieve.
   * @enum {string}
   */
  planName?: "FREE" | "BRONZE" | "SILVER" | "GOLD" | "PLATINUM";
};

/**
 * Type of JOTFORM's JOTFORM_GET_SYSTEM_PLAN tool output.
 */
type JOTFORM_GET_SYSTEM_PLAN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Detailed information about the system plan
       */
      content: {
          /**
           * Fast Spring Ur Ls
           * @description FastSpring purchase URLs
           */
          fastSpringURLs: {
              /**
               * Biyearly
               * @description FastSpring URL for bi-yearly plan purchase
               */
              biyearly: string;
              /**
               * Monthly
               * @description FastSpring URL for monthly plan purchase
               */
              monthly: string;
              /**
               * Yearly
               * @description FastSpring URL for yearly plan purchase
               */
              yearly: string;
          };
          /**
           * Limits
           * @description Limit details for the plan
           */
          limits: {
              /**
               * Api Daily Limit
               * @description Daily API call limit
               */
              "api-daily-limit": number;
              /**
               * Over Submissions
               * @description Overage submissions limit
               */
              overSubmissions: number;
              /**
               * Payments
               * @description Monthly payment submission limit
               */
              payments: number;
              /**
               * Ssl Submissions
               * @description Monthly SSL submission limit
               */
              sslSubmissions: number;
              /**
               * Submissions
               * @description Monthly submission limit
               */
              submissions: number;
              /**
               * Subusers
               * @description Number of sub-users allowed
               */
              subusers: number;
              /**
               * Tickets
               * @description Number of support tickets allowed
               */
              tickets: number;
              /**
               * Uploads
               * @description Monthly upload space in bytes
               */
              uploads: number;
          };
          /**
           * Name
           * @description Name of the system plan
           */
          name: string;
          /**
           * Plimus I Ds
           * @description Plimus product IDs for plan purchase
           */
          plimusIDs: {
              /**
               * Biyearly
               * @description Plimus product ID for bi-yearly plan
               */
              biyearly: number;
              /**
               * Monthly
               * @description Plimus product ID for monthly plan
               */
              monthly: number;
              /**
               * Yearly
               * @description Plimus product ID for yearly plan
               */
              yearly: number;
          };
          /**
           * Prices
           * @description Pricing details for the plan
           */
          prices: {
              /**
               * Biyearly
               * @description Bi-yearly price in USD cents
               */
              biyearly: number;
              /**
               * Monthly
               * @description Monthly price in USD cents
               */
              monthly: number;
              /**
               * Yearly
               * @description Yearly price in USD cents
               */
              yearly: number;
          };
      };
      /**
       * Limit Left
       * @description Remaining daily API calls allowed
       */
      "limit-left": number;
      /**
       * Message
       * @description API response message, e.g., 'success'
       */
      message: string;
      /**
       * Response Code
       * @description HTTP-style response code, 200 on success
       */
      responseCode: number;
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
 * Type of JOTFORM's JOTFORM_GET_USER_DETAILS tool input.
 */
type JOTFORM_GET_USER_DETAILS_INPUT = object;

/**
 * Type of JOTFORM's JOTFORM_GET_USER_DETAILS tool output.
 */
type JOTFORM_GET_USER_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description User account details
       */
      content: {
          /**
           * Account Type
           * Format: uri
           * @description URL of the user's account type plan
           */
          account_type: string;
          /**
           * Avatar Url
           * Format: uri
           * @description URL of user's avatar
           * @default null
           */
          avatarUrl: string | null;
          /**
           * Company
           * @description Company of the user
           * @default null
           */
          company: string | null;
          /**
           * Created At
           * @description Account creation timestamp in YYYY-MM-DD HH:MM:SS format
           */
          created_at: string;
          /**
           * Do Not Clone
           * @description Flag indicating if user can clone forms
           * @default null
           */
          doNotClone: boolean | null;
          /**
           * Email
           * Format: email
           * @description Email address of the user
           */
          email: string;
          /**
           * Folder Layout
           * @description JSON string representing folder layout
           * @default null
           */
          folderLayout: string | null;
          /**
           * Industry
           * @description Industry of the user
           * @default null
           */
          industry: string | null;
          /**
           * Is Verified
           * @description True if the user is verified
           */
          is_verified: boolean;
          /**
           * Language
           * @description Preferred language of the user
           */
          language: string;
          /**
           * Name
           * @description Full name of the user
           */
          name: string;
          /**
           * Security Answer
           * @description Security answer of the user
           * @default null
           */
          securityAnswer: string | null;
          /**
           * Security Question
           * @description Security question set for the user
           * @default null
           */
          securityQuestion: string | null;
          /**
           * Status
           * @description Status of the user's account
           * @enum {string}
           */
          status: "ACTIVE" | "DELETED" | "SUSPENDED";
          /**
           * Time Zone
           * @description IANA time zone of the user
           * @default null
           */
          time_zone: string | null;
          /**
           * Updated At
           * @description Account last update timestamp in YYYY-MM-DD HH:MM:SS format
           */
          updated_at: string;
          /**
           * Usage
           * Format: uri
           * @description URL to retrieve user's monthly usage
           */
          usage: string;
          /**
           * Username
           * @description User's username
           */
          username: string;
          /**
           * Webhooks
           * @description List of webhook URLs set for the user
           * @default null
           */
          webhooks: string[] | null;
          /**
           * Website
           * Format: uri
           * @description Website URL of the user
           * @default null
           */
          website: string | null;
      };
      /**
       * Limit Left
       * @description Remaining daily API calls
       */
      "limit-left": number;
      /**
       * Message
       * @description Response message
       */
      message: string;
      /**
       * Response Code
       * @description Response status code
       */
      responseCode: number;
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
 * Type of JOTFORM's JOTFORM_GET_USER_FOLDERS tool input.
 */
type JOTFORM_GET_USER_FOLDERS_INPUT = object;

/**
 * Type of JOTFORM's JOTFORM_GET_USER_FOLDERS tool output.
 */
type JOTFORM_GET_USER_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description List of folders created by the authenticated user
       */
      content: {
          /**
           * Forms
           * @description List of forms contained in the folder
           */
          forms: {
              /**
               * Id
               * @description Unique identifier of the form in the folder
               */
              id: string;
              /**
               * Title
               * @description Title of the form in the folder
               */
              title: string;
          }[];
          /**
           * Id
           * @description Unique identifier of the folder
           */
          id: string;
          /**
           * Name
           * @description Name of the folder
           */
          name: string;
          /**
           * Owner
           * @description Owner of the folder, for shared folders
           */
          owner: string;
      }[];
      /**
       * Message
       * @description Response message
       */
      message: string;
      /**
       * Response Code
       * @description Status code of the response
       */
      responseCode: number;
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
 * Type of JOTFORM's JOTFORM_GET_USER_FORMS tool input.
 */
type JOTFORM_GET_USER_FORMS_INPUT = {
  /**
   * Folder
   * @description Filter by folder ID
   * @default null
   */
  folder: string | null;
  /**
   * Limit
   * @description Number of forms to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Orderby
   * @description Order by field
   * @default null
   */
  orderby: string | null;
  /**
   * Search
   * @description Search query
   * @default null
   */
  search: string | null;
  /**
   * Sorting
   * @description Sorting direction: ASC or DESC
   * @default null
   */
  sorting: string | null;
};

/**
 * Type of JOTFORM's JOTFORM_GET_USER_FORMS tool output.
 */
type JOTFORM_GET_USER_FORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description List of forms created by the authenticated user
       */
      content: {
          /**
           * Count
           * @description Total number of submissions
           */
          count?: string;
          /**
           * Created At
           * @description Creation time (ISO 8601)
           */
          created_at?: string;
          /**
           * Favorite
           * @description Indicates if the form is favorited ("Yes" or "No")
           */
          favorite?: string;
          /**
           * Height
           * @description Form height
           */
          height?: string;
          /**
           * Id
           * @description Unique form ID
           */
          id: string;
          /**
           * Last Submission
           * @description Time of the last submission (ISO 8601), may be null
           * @default null
           */
          last_submission: string | null;
          /**
           * New
           * @description Number of new submissions
           */
          new?: string;
          /**
           * Status
           * @description Status of the form (e.g., ACTIVE)
           */
          status?: string;
          /**
           * Title
           * @description Title of the form
           */
          title?: string;
          /**
           * Type
           * @description Type of form
           */
          type?: string;
          /**
           * Updated At
           * @description Last update time (ISO 8601)
           */
          updated_at?: string;
          /**
           * Username
           * @description JotForm username
           */
          username?: string;
      }[];
      /**
       * Message
       * @description Response message
       */
      message: string;
      /**
       * Response Code
       * @description API response code
       */
      responseCode: number;
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
 * Type of JOTFORM's JOTFORM_GET_USER_HISTORY tool input.
 */
type JOTFORM_GET_USER_HISTORY_INPUT = {
  /**
   * Action
   * @description Filter history by action type (e.g., userCreation, formUpdate, apiKeyCreated, userLogout)
   * @default null
   */
  action: string | null;
  /**
   * Date
   * @description Predefined date range to limit history
   * @default null
   * @enum {string|null}
   */
  date: "lastWeek" | "lastMonth" | "last3Months" | "last6Months" | "lastYear" | "all" | null;
  /**
   * End Date
   * @description End date (MM/DD/YYYY) to filter history
   * @default null
   */
  endDate: string | null;
  /**
   * Sort By
   * @description Sort order of results
   * @default null
   * @enum {string|null}
   */
  sortBy: "ASC" | "DESC" | null;
  /**
   * Start Date
   * @description Start date (MM/DD/YYYY) to filter history
   * @default null
   */
  startDate: string | null;
};

/**
 * Type of JOTFORM's JOTFORM_GET_USER_HISTORY tool output.
 */
type JOTFORM_GET_USER_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description List of user history records
       */
      content: {
          /**
           * Email
           * @description Email associated with the action, if any
           * @default null
           */
          email: string | null;
          /**
           * Form Id
           * @description ID of the form related to the action
           * @default null
           */
          formID: string | null;
          /**
           * Form Status
           * @description Status of the form at the time of action
           * @default null
           */
          formStatus: string | null;
          /**
           * Form Title
           * @description Title of the form
           * @default null
           */
          formTitle: string | null;
          /**
           * Ip
           * @description IP address from which action was performed
           */
          ip: string;
          /**
           * Parent
           * @description Parent reference for the action, if any
           * @default null
           */
          parent: string | null;
          /**
           * Server
           * @description Server where the action was processed
           * @default null
           */
          server: string | null;
          /**
           * Timestamp
           * @description Unix timestamp of when the action occurred
           */
          timestamp: number;
          /**
           * Type
           * @description Type of user action
           */
          type: string;
          /**
           * Username
           * @description Username who performed the action
           */
          username: string;
      }[];
      /**
       * Limit Left
       * @description Remaining daily API call quota
       */
      "limit-left": number;
      /**
       * Message
       * @description Response message from the API
       */
      message: string;
      /**
       * Response Code
       * @description HTTP status code returned by the API
       */
      responseCode: number;
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
 * Type of JOTFORM's JOTFORM_GET_USER_SETTINGS tool input.
 */
type JOTFORM_GET_USER_SETTINGS_INPUT = object;

/**
 * Type of JOTFORM's JOTFORM_GET_USER_SETTINGS tool output.
 */
type JOTFORM_GET_USER_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Authenticated user's settings data
       */
      content: {
          /**
           * Account Type
           * Format: uri
           * @description URL of the user's account type plan
           */
          account_type: string;
          /**
           * Avatar Url
           * Format: uri
           * @description URL of user's avatar
           * @default null
           */
          avatarUrl: string | null;
          /**
           * Company
           * @description Company of the user
           * @default null
           */
          company: string | null;
          /**
           * Created At
           * @description Account creation timestamp in YYYY-MM-DD HH:MM:SS format
           */
          created_at: string;
          /**
           * Do Not Clone
           * @description Flag indicating if user can clone forms
           * @default null
           */
          doNotClone: boolean | null;
          /**
           * Email
           * Format: email
           * @description Email address of the user
           */
          email: string;
          /**
           * Folder Layout
           * @description JSON string representing folder layout
           * @default null
           */
          folderLayout: string | null;
          /**
           * Industry
           * @description Industry of the user
           * @default null
           */
          industry: string | null;
          /**
           * Is Verified
           * @description True if the user is verified
           */
          is_verified: boolean;
          /**
           * Language
           * @description Preferred language of the user
           */
          language: string;
          /**
           * Name
           * @description Full name of the user
           */
          name: string;
          /**
           * Security Answer
           * @description Security answer of the user
           * @default null
           */
          securityAnswer: string | null;
          /**
           * Security Question
           * @description Security question set for the user
           * @default null
           */
          securityQuestion: string | null;
          /**
           * Status
           * @description Status of the user's account
           * @enum {string}
           */
          status: "ACTIVE" | "DELETED" | "SUSPENDED";
          /**
           * Time Zone
           * @description IANA time zone of the user
           * @default null
           */
          time_zone: string | null;
          /**
           * Updated At
           * @description Account last update timestamp in YYYY-MM-DD HH:MM:SS format
           */
          updated_at: string;
          /**
           * Usage
           * Format: uri
           * @description URL to retrieve user's monthly usage
           */
          usage: string;
          /**
           * Username
           * @description User's username
           */
          username: string;
          /**
           * Webhooks
           * @description List of webhook URLs set for the user
           * @default null
           */
          webhooks: string[] | null;
          /**
           * Website
           * Format: uri
           * @description Website URL of the user
           * @default null
           */
          website: string | null;
      };
      /**
       * Limit Left
       * @description Remaining daily API calls
       */
      "limit-left": number;
      /**
       * Message
       * @description Response message
       */
      message: string;
      /**
       * Response Code
       * @description Response status code
       */
      responseCode: number;
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
 * Type map of all available tool input types for toolkit "JOTFORM".
 */
export type JOTFORM_TOOL_INPUTS = {
  GET_SYSTEM_PLAN: JOTFORM_GET_SYSTEM_PLAN_INPUT
  GET_USER_DETAILS: JOTFORM_GET_USER_DETAILS_INPUT
  GET_USER_FOLDERS: JOTFORM_GET_USER_FOLDERS_INPUT
  GET_USER_FORMS: JOTFORM_GET_USER_FORMS_INPUT
  GET_USER_HISTORY: JOTFORM_GET_USER_HISTORY_INPUT
  GET_USER_SETTINGS: JOTFORM_GET_USER_SETTINGS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "JOTFORM".
 */
export type JOTFORM_TOOL_OUTPUTS = {
  GET_SYSTEM_PLAN: JOTFORM_GET_SYSTEM_PLAN_OUTPUT
  GET_USER_DETAILS: JOTFORM_GET_USER_DETAILS_OUTPUT
  GET_USER_FOLDERS: JOTFORM_GET_USER_FOLDERS_OUTPUT
  GET_USER_FORMS: JOTFORM_GET_USER_FORMS_OUTPUT
  GET_USER_HISTORY: JOTFORM_GET_USER_HISTORY_OUTPUT
  GET_USER_SETTINGS: JOTFORM_GET_USER_SETTINGS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's JOTFORM toolkit.
 */
export const JOTFORM = {
  slug: "jotform",
  tools: {
    /**
     * Tool to retrieve details of a specific system plan. use when you need to check limits and pricing of a plan.
     */
    GET_SYSTEM_PLAN: "JOTFORM_GET_SYSTEM_PLAN",
    /**
     * Tool to retrieve details of the authenticated user, including account and usage info. use after confirming valid api key.
     */
    GET_USER_DETAILS: "JOTFORM_GET_USER_DETAILS",
    /**
     * Tool to retrieve a list of folders created by the authenticated user. use when you need to enumerate user folders after confirming valid api credentials.
     */
    GET_USER_FOLDERS: "JOTFORM_GET_USER_FOLDERS",
    /**
     * Tool to retrieve a list of forms created by the authenticated user. use after setting up api key authentication.
     */
    GET_USER_FORMS: "JOTFORM_GET_USER_FORMS",
    /**
     * Tool to fetch user activity history records. use when auditing or filtering user actions by type or date.
     */
    GET_USER_HISTORY: "JOTFORM_GET_USER_HISTORY",
    /**
     * Tool to retrieve the settings of the authenticated user. use after confirming a valid api key.
     */
    GET_USER_SETTINGS: "JOTFORM_GET_USER_SETTINGS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "JOTFORM".
 */
export type JOTFORM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "JOTFORM".
 */
export type JOTFORM_TRIGGER_EVENTS = {}
