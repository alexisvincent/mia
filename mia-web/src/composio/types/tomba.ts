// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TOMBA's TOMBA_ATTRIBUTES_LIST tool input.
 */
type TOMBA_ATTRIBUTES_LIST_INPUT = object;

/**
 * Type of TOMBA's TOMBA_ATTRIBUTES_LIST tool output.
 */
type TOMBA_ATTRIBUTES_LIST_OUTPUT = {
  /**
   * Data
   * @description List of available lead attributes
   */
  data?: {
      /**
       * Description
       * @description Detailed description of the attribute
       */
      description: string;
      /**
       * Id
       * @description Unique identifier of the attribute
       */
      id: number;
      /**
       * Name
       * @description Name of the attribute
       */
      name: string;
      /**
       * Type
       * @description Type/category of the attribute
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Message returned by the API
   */
  message?: string;
  /**
   * Success
   * @description Indicates if the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TOMBA's TOMBA_DOMAIN_STATUS tool input.
 */
type TOMBA_DOMAIN_STATUS_INPUT = {
  /**
   * Domain
   * @description The domain name to check the status for (e.g., 'gmail.com')
   */
  domain?: string;
};

/**
 * Type of TOMBA's TOMBA_DOMAIN_STATUS tool output.
 */
type TOMBA_DOMAIN_STATUS_OUTPUT = {
  /**
   * Data
   * @description Domain status details
   */
  data?: {
      /**
       * Accept All
       * @description True if the domain accepts all emails
       */
      accept_all: boolean;
      /**
       * Disposable
       * @description True if the domain is disposable
       */
      disposable: boolean;
      /**
       * Dns
       * @description True if DNS is registered for the domain
       */
      dns: boolean;
      /**
       * Domain
       * @description The domain name for which status is returned
       */
      domain: string;
      /**
       * Generic
       * @description True if the domain is generic
       */
      generic: boolean;
      /**
       * Mx Records
       * @description True if MX records exist for the domain
       */
      mx_records: boolean;
      /**
       * Status
       * @description Status of the domain (e.g., "valid", "invalid")
       */
      status: string;
      /**
       * Webmail
       * @description True if the domain is a webmail provider
       */
      webmail: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Indicates if the request was successful
   */
  status?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TOMBA's TOMBA_KEYS_DELETE tool input.
 */
type TOMBA_KEYS_DELETE_INPUT = {
  /**
   * Key
   * @description The unique identifier of the API key to delete
   */
  key?: string;
};

/**
 * Type of TOMBA's TOMBA_KEYS_DELETE tool output.
 */
type TOMBA_KEYS_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Informational message about the deletion result
       */
      message: string;
      /**
       * Status
       * @description Indicates if the API key was successfully deleted
       */
      status: boolean;
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
 * Type of TOMBA's TOMBA_KEYS_LIST tool input.
 */
type TOMBA_KEYS_LIST_INPUT = object;

/**
 * Type of TOMBA's TOMBA_KEYS_LIST tool output.
 */
type TOMBA_KEYS_LIST_OUTPUT = {
  /**
   * Data
   * @description Object containing API keys list.
   */
  data?: {
      /**
       * Keys
       * @description List of API key objects.
       */
      keys: {
          /**
           * Created At
           * @description ISO8601 timestamp when the key was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique numeric ID of the API key.
           */
          id: number;
          /**
           * Key
           * @description The API key string.
           */
          key: string;
          /**
           * Last Used At
           * @description ISO8601 timestamp when the key was last used, or null if never used.
           * @default null
           */
          last_used_at: string | null;
          /**
           * Name
           * @description The name of the API key.
           */
          name: string;
          /**
           * Permissions
           * @description List of permissions granted to the API key.
           */
          permissions: string[];
          /**
           * Status
           * @description Status of the API key (e.g., 'active').
           */
          status: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Informational message from the API.
   * @default null
   */
  message: string | null;
  /**
   * Meta
   * @description Metadata about the response.
   */
  meta?: {
      /**
       * Total
       * @description Total number of API keys.
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TOMBA's TOMBA_LEADS_CREATE tool input.
 */
type TOMBA_LEADS_CREATE_INPUT = {
  /**
   * City
   * @description City of the lead
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
   * @description Country of the lead
   * @default null
   */
  country: string | null;
  /**
   * Email
   * @description Lead's email address
   */
  email?: string;
  /**
   * First Name
   * @description Lead's first name
   */
  first_name?: string;
  /**
   * Last Name
   * @description Lead's last name
   * @default null
   */
  last_name: string | null;
  /**
   * Linkedin
   * @description LinkedIn profile URL
   * @default null
   */
  linkedin: string | null;
  /**
   * Phone
   * @description Phone number
   * @default null
   */
  phone: string | null;
  /**
   * Position
   * @description Job position
   * @default null
   */
  position: string | null;
  /**
   * State
   * @description State of the lead
   * @default null
   */
  state: string | null;
  /**
   * Tags
   * @description List of tags associated with the lead
   * @default null
   */
  tags: string[] | null;
  /**
   * Twitter
   * @description Twitter profile URL
   * @default null
   */
  twitter: string | null;
  /**
   * Website
   * @description Lead's website URL
   * @default null
   */
  website: string | null;
};

/**
 * Type of TOMBA's TOMBA_LEADS_CREATE tool output.
 */
type TOMBA_LEADS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Details of the created lead
   */
  data?: {
      /**
       * City
       * @description City
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
       * @description Lead's email address
       */
      email: string;
      /**
       * First Name
       * @description Lead's first name
       */
      first_name: string;
      /**
       * Id
       * @description Unique identifier of the lead
       */
      id: number;
      /**
       * Last Name
       * @description Lead's last name
       * @default null
       */
      last_name: string | null;
      /**
       * Linkedin
       * @description LinkedIn profile URL
       * @default null
       */
      linkedin: string | null;
      /**
       * Phone
       * @description Phone number
       * @default null
       */
      phone: string | null;
      /**
       * Position
       * @description Job position
       * @default null
       */
      position: string | null;
      /**
       * State
       * @description State
       * @default null
       */
      state: string | null;
      /**
       * Tags
       * @description List of tags
       * @default null
       */
      tags: string[] | null;
      /**
       * Twitter
       * @description Twitter profile URL
       * @default null
       */
      twitter: string | null;
      /**
       * Website
       * @description Website URL
       * @default null
       */
      website: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message from Tomba
   */
  message?: string;
  /**
   * Request Id
   * @description Unique request identifier
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TOMBA's TOMBA_LEADS_LIST tool input.
 */
type TOMBA_LEADS_LIST_INPUT = {
  /**
   * Limit
   * @description Number of leads per page, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Search leads by name or email
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Filter leads by status ('active', 'archived', 'starred')
   * @default null
   * @enum {string|null}
   */
  status: "active" | "archived" | "starred" | null;
};

/**
 * Type of TOMBA's TOMBA_LEADS_LIST tool output.
 */
type TOMBA_LEADS_LIST_OUTPUT = {
  /**
   * Data
   * @description List of leads
   */
  data?: {
      /**
       * Created At
       * @description Date when the lead was created
       */
      created_at: string;
      /**
       * Email
       * @description Lead's email address
       */
      email: string;
      /**
       * First Name
       * @description Lead's first name
       */
      first_name: string;
      /**
       * Id
       * @description Lead ID
       */
      id: number;
      /**
       * Last Name
       * @description Lead's last name
       */
      last_name: string;
      /**
       * Organization
       * @description Lead's organization
       * @default null
       */
      organization: string | null;
      /**
       * Status
       * @description Lead status
       */
      status: string;
      /**
       * Updated At
       * @description Date when the lead was last updated
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
   * Message
   * @description Response message from the API
   * @default null
   */
  message: string | null;
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Limit
       * @description Number of leads per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total
       * @description Total number of leads
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TOMBA's TOMBA_LISTS_DELETE tool input.
 */
type TOMBA_LISTS_DELETE_INPUT = {
  /**
   * Id
   * @description The unique identifier of the leads list to delete
   */
  id?: string;
};

/**
 * Type of TOMBA's TOMBA_LISTS_DELETE tool output.
 */
type TOMBA_LISTS_DELETE_OUTPUT = {
  /**
   * Code
   * @description HTTP status code returned by the API
   */
  code?: number;
  /**
   * ListsDeleteData
   * @description Data model for additional information returned by the delete leads list endpoint.
   *     Accepts arbitrary fields from the API response.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Operation status message
   */
  message?: string;
  /**
   * Success
   * @description Indicates if the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TOMBA's TOMBA_LISTS_LIST tool input.
 */
type TOMBA_LISTS_LIST_INPUT = {
  /**
   * Limit
   * @description Number of items per page, between 1 and 100
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of TOMBA's TOMBA_LISTS_LIST tool output.
 */
type TOMBA_LISTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Array of lead list objects
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 datetime when the list was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique ID of the lead list
       */
      id: number;
      /**
       * Name
       * @description Name of the lead list
       */
      name: string;
      /**
       * Total Leads
       * @description Total number of leads in the list
       */
      total_leads: number;
      /**
       * Updated At
       * @description ISO8601 datetime when the list was last updated
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
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * Last Page
       * @description Last available page number
       */
      last_page: number;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * Total
       * @description Total number of lead lists
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TOMBA's TOMBA_LISTS_UPDATE tool input.
 */
type TOMBA_LISTS_UPDATE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the list to update
   */
  id?: string;
  /**
   * Name
   * @description New name for the list
   * @default null
   */
  name: string | null;
};

/**
 * Type of TOMBA's TOMBA_LISTS_UPDATE tool output.
 */
type TOMBA_LISTS_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Updated list object
   */
  data?: {
      /**
       * Created At
       * @description Creation date of the list
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the list
       */
      id: string;
      /**
       * Name
       * @description Name of the list
       */
      name: string;
      /**
       * Total
       * @description Number of emails in the list
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
   * Message
   * @description Additional information or error message
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates if update was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TOMBA's TOMBA_USAGE_STATS tool input.
 */
type TOMBA_USAGE_STATS_INPUT = object;

/**
 * Type of TOMBA's TOMBA_USAGE_STATS tool output.
 */
type TOMBA_USAGE_STATS_OUTPUT = {
  /**
   * Data
   * @description Usage details object
   */
  data?: {
      /**
       * Period
       * @description The billing period for these stats, e.g., '2023-08'
       */
      period: string;
      /**
       * Reset
       * @description Date when the usage counters will reset, e.g., '2023-09-01'
       */
      reset: string;
      /**
       * Usage
       * @description Detailed usage breakdown
       */
      usage: {
          /**
           * Requests
           * @description Used requests this period
           */
          requests: number;
          /**
           * Requests Left
           * @description Remaining requests for the period
           */
          requests_left: number;
          /**
           * Requests Limit
           * @description Total allowed requests per period
           */
          requests_limit: number;
          /**
           * Verification
           * @description Verification lookups used this period
           */
          verification: number;
          /**
           * Verification Left
           * @description Remaining verification lookups for the period
           */
          verification_left: number;
          /**
           * Verification Limit
           * @description Verification lookup limit
           */
          verification_limit: number;
      } & {
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
   * Message
   * @description Informative message about usage retrieval
   */
  message?: string;
  /**
   * Status
   * @description HTTP status code of the response
   */
  status?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "TOMBA".
 */
export type TOMBA_TOOL_INPUTS = {
  ATTRIBUTES_LIST: TOMBA_ATTRIBUTES_LIST_INPUT
  DOMAIN_STATUS: TOMBA_DOMAIN_STATUS_INPUT
  KEYS_DELETE: TOMBA_KEYS_DELETE_INPUT
  KEYS_LIST: TOMBA_KEYS_LIST_INPUT
  LEADS_CREATE: TOMBA_LEADS_CREATE_INPUT
  LEADS_LIST: TOMBA_LEADS_LIST_INPUT
  LISTS_DELETE: TOMBA_LISTS_DELETE_INPUT
  LISTS_LIST: TOMBA_LISTS_LIST_INPUT
  LISTS_UPDATE: TOMBA_LISTS_UPDATE_INPUT
  USAGE_STATS: TOMBA_USAGE_STATS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TOMBA".
 */
export type TOMBA_TOOL_OUTPUTS = {
  ATTRIBUTES_LIST: TOMBA_ATTRIBUTES_LIST_OUTPUT
  DOMAIN_STATUS: TOMBA_DOMAIN_STATUS_OUTPUT
  KEYS_DELETE: TOMBA_KEYS_DELETE_OUTPUT
  KEYS_LIST: TOMBA_KEYS_LIST_OUTPUT
  LEADS_CREATE: TOMBA_LEADS_CREATE_OUTPUT
  LEADS_LIST: TOMBA_LEADS_LIST_OUTPUT
  LISTS_DELETE: TOMBA_LISTS_DELETE_OUTPUT
  LISTS_LIST: TOMBA_LISTS_LIST_OUTPUT
  LISTS_UPDATE: TOMBA_LISTS_UPDATE_OUTPUT
  USAGE_STATS: TOMBA_USAGE_STATS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TOMBA toolkit.
 */
export const TOMBA = {
  slug: "tomba",
  tools: {
    /**
     * Tool to list all lead attributes. use when you need to discover available attributes before enrichment.
     */
    ATTRIBUTES_LIST: "TOMBA_ATTRIBUTES_LIST",
    /**
     * Tool to check if a domain is webmail or disposable. use when validating email deliverability constraints.
     */
    DOMAIN_STATUS: "TOMBA_DOMAIN_STATUS",
    /**
     * Tool to delete an api key by id. use when you need to permanently revoke an api key before its expiration.
     */
    KEYS_DELETE: "TOMBA_KEYS_DELETE",
    /**
     * Tool to list all api keys. use when you want to retrieve information about your existing tomba api keys.
     */
    KEYS_LIST: "TOMBA_KEYS_LIST",
    /**
     * Tool to add a new lead. use when you have lead details and need to save them to tomba.
     */
    LEADS_CREATE: "TOMBA_LEADS_CREATE",
    /**
     * Tool to list all leads. use when you need to retrieve and paginate your leads list.
     */
    LEADS_LIST: "TOMBA_LEADS_LIST",
    /**
     * Tool to delete a leads list by id. use when you need to permanently remove a list after confirming its id.
     */
    LISTS_DELETE: "TOMBA_LISTS_DELETE",
    /**
     * Tool to list all lead lists. use when you need to retrieve and paginate your lead lists.
     */
    LISTS_LIST: "TOMBA_LISTS_LIST",
    /**
     * Tool to update a leads list's name by id. use when renaming an existing list after obtaining its id.
     */
    LISTS_UPDATE: "TOMBA_LISTS_UPDATE",
    /**
     * Tool to get api usage statistics. use when you need to monitor account usage and avoid hitting limits.
     */
    USAGE_STATS: "TOMBA_USAGE_STATS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TOMBA".
 */
export type TOMBA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TOMBA".
 */
export type TOMBA_TRIGGER_EVENTS = {}
