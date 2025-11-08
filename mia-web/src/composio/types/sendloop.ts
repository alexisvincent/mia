// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SENDLOOP's SENDLOOP_GET_OVERALL_LIST_REPORT tool input.
 */
type SENDLOOP_GET_OVERALL_LIST_REPORT_INPUT = {
  /**
   * List Id
   * @description Unique identifier of the subscriber list.
   */
  ListID?: number;
};

/**
 * Type of SENDLOOP's SENDLOOP_GET_OVERALL_LIST_REPORT tool output.
 */
type SENDLOOP_GET_OVERALL_LIST_REPORT_OUTPUT = {
  /**
   * Data
   * @description Overall report data for the list
   */
  data?: {
      /**
       * Complaints
       * @description Number of spam complaints
       */
      Complaints: number;
      /**
       * Confirmed
       * @description Number of confirmed subscribers
       */
      Confirmed: number;
      /**
       * Hard Bounces
       * @description Number of hard bounces
       */
      HardBounces: number;
      /**
       * List Id
       * @description Unique identifier of the subscriber list
       */
      ListID: number;
      /**
       * List Name
       * @description Name of the subscriber list
       */
      ListName: string;
      /**
       * Soft Bounces
       * @description Number of soft bounces
       */
      SoftBounces: number;
      /**
       * Subscribers
       * @description Total number of subscribers in the list
       */
      Subscribers: number;
      /**
       * Total Clicked
       * @description Total number of clicks across all campaigns
       */
      TotalClicked: number;
      /**
       * Total Opened
       * @description Total number of opens across all campaigns
       */
      TotalOpened: number;
      /**
       * Unconfirmed
       * @description Number of unconfirmed subscribers
       */
      Unconfirmed: number;
      /**
       * Unsubscribes
       * @description Number of unsubscribes
       */
      Unsubscribes: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDLOOP's SENDLOOP_LIST_CAMPAIGNS tool input.
 */
type SENDLOOP_LIST_CAMPAIGNS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (1-based indexing)
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of campaigns per page
   * @default 50
   */
  per_page: number;
  /**
   * Status
   * @description Filter campaigns by status: 'active', 'draft', 'scheduled', 'archived', or 'all'
   * @default null
   * @enum {string|null}
   */
  status: "active" | "draft" | "scheduled" | "archived" | "all" | null;
};

/**
 * Type of SENDLOOP's SENDLOOP_LIST_CAMPAIGNS tool output.
 */
type SENDLOOP_LIST_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description List of campaigns returned by the API
   */
  data?: {
      /**
       * Campaign Id
       * @description Unique ID of the campaign
       */
      campaignID: string;
      /**
       * Campaign Status
       * @description Status of the campaign
       */
      campaignStatus: string;
      /**
       * Campaign Title
       * @description Title of the campaign
       */
      campaignTitle: string;
      /**
       * Creation Date
       * @description ISO date when the campaign was created
       */
      creationDate: string;
      /**
       * Report Url
       * @description URL to access the campaign report
       */
      reportURL: string;
      /**
       * Scheduled
       * @description Whether the campaign is scheduled ('Yes' or 'No')
       */
      scheduled: string;
      /**
       * Scheduled Date
       * @description Scheduled date if applicable
       * @default null
       */
      scheduledDate: string | null;
      /**
       * Sent Date
       * @description ISO date when the campaign was sent, if sent
       * @default null
       */
      sentDate: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional information or message from the API
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description API response status, e.g., 'SUCCESS'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDLOOP's SENDLOOP_LIST_LISTS tool input.
 */
type SENDLOOP_LIST_LISTS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of SENDLOOP's SENDLOOP_LIST_LISTS tool output.
 */
type SENDLOOP_LIST_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Lists
       * @description List of subscriber lists
       */
      lists: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the list was created
           */
          created_at: string;
          /**
           * Display Name
           * @description Human-readable display name of the list
           */
          display_name: string;
          /**
           * List Id
           * @description Unique ID of the mailing list
           */
          list_id: number;
          /**
           * Name
           * @description Programmatic name of the mailing list
           */
          name: string;
          /**
           * Subscribers Count
           * @description Total number of subscribers in this list
           */
          subscribers_count: number;
          /**
           * Unsubscribe Page Url
           * @description URL for the unsubscribe page
           */
          unsubscribe_page_url: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the list was last updated
           */
          updated_at: string;
      }[];
      /**
       * Page
       * @description Page number requested
       */
      page: number;
      /**
       * Per Page
       * @description Number of items per page requested
       */
      per_page: number;
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
 * Type of SENDLOOP's SENDLOOP_LIST_SUBSCRIBERS tool input.
 */
type SENDLOOP_LIST_SUBSCRIBERS_INPUT = {
  /**
   * Limit
   * @description Number of items per page. Range 1-100. Defaults to 10
   * @default 10
   */
  limit: number;
  /**
   * List Id
   * @description Unique identifier of the subscriber list to retrieve subscribers from
   */
  list_id?: string;
  /**
   * Page
   * @description Page number for paginated results. Must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Status
   * @description Filter subscribers by status. Defaults to 'all'
   * @default all
   * @enum {string}
   */
  status: "all" | "active" | "inactive" | "unconfirmed" | "bounced" | "unsubscribed";
};

/**
 * Type of SENDLOOP's SENDLOOP_LIST_SUBSCRIBERS tool output.
 */
type SENDLOOP_LIST_SUBSCRIBERS_OUTPUT = {
  /**
   * Current Page
   * @description Current page number
   */
  current_page?: number;
  /**
   * Data
   * @description List of subscribers for the specified list
   */
  data?: {
      /**
       * Added At
       * @description ISO 8601 timestamp when the subscriber was added
       */
      added_at: string;
      /**
       * Email
       * @description Email address of the subscriber
       */
      email: string;
      /**
       * Name
       * @description Name of the subscriber
       * @default null
       */
      name: string | null;
      /**
       * Status
       * @description Subscription status of the subscriber
       */
      status: string;
      /**
       * Subscriber Id
       * @description Unique identifier of the subscriber
       */
      subscriberID: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Indicates if the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Count
   * @description Total number of subscribers matching the query
   */
  total_count?: number;
  /**
   * Total Pages
   * @description Total number of pages available
   */
  total_pages?: number;
};

/**
 * Type of SENDLOOP's SENDLOOP_SENDLOOP_GET_ACCOUNT_INFO tool input.
 */
type SENDLOOP_SENDLOOP_GET_ACCOUNT_INFO_INPUT = object;

/**
 * Type of SENDLOOP's SENDLOOP_SENDLOOP_GET_ACCOUNT_INFO tool output.
 */
type SENDLOOP_SENDLOOP_GET_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description The account's unique identifier
       */
      account_id: number;
      /**
       * Account Type
       * @description Plan type, e.g., 'paid' or 'trial'
       * @enum {string}
       */
      account_type: "paid" | "trial";
      /**
       * Api Key
       * @description API key for the account
       */
      api_key: string;
      /**
       * Company Name
       * @description Name of the company
       */
      company_name: string;
      /**
       * Currency
       * @description Account currency
       */
      currency: string;
      /**
       * Email
       * Format: email
       * @description Account email address
       */
      email: string;
      /**
       * Plan
       * @description Account plan
       */
      plan: string;
      /**
       * Sender Email
       * Format: email
       * @description Default sender email
       */
      sender_email: string;
      /**
       * Sender Name
       * @description Default sender name
       */
      sender_name: string;
      /**
       * Timezone
       * @description Timezone for the account
       */
      timezone: string;
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
 * Type map of all available tool input types for toolkit "SENDLOOP".
 */
export type SENDLOOP_TOOL_INPUTS = {
  GET_OVERALL_LIST_REPORT: SENDLOOP_GET_OVERALL_LIST_REPORT_INPUT
  LIST_CAMPAIGNS: SENDLOOP_LIST_CAMPAIGNS_INPUT
  LIST_LISTS: SENDLOOP_LIST_LISTS_INPUT
  LIST_SUBSCRIBERS: SENDLOOP_LIST_SUBSCRIBERS_INPUT
  SENDLOOP_GET_ACCOUNT_INFO: SENDLOOP_SENDLOOP_GET_ACCOUNT_INFO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SENDLOOP".
 */
export type SENDLOOP_TOOL_OUTPUTS = {
  GET_OVERALL_LIST_REPORT: SENDLOOP_GET_OVERALL_LIST_REPORT_OUTPUT
  LIST_CAMPAIGNS: SENDLOOP_LIST_CAMPAIGNS_OUTPUT
  LIST_LISTS: SENDLOOP_LIST_LISTS_OUTPUT
  LIST_SUBSCRIBERS: SENDLOOP_LIST_SUBSCRIBERS_OUTPUT
  SENDLOOP_GET_ACCOUNT_INFO: SENDLOOP_SENDLOOP_GET_ACCOUNT_INFO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SENDLOOP toolkit.
 */
export const SENDLOOP = {
  slug: "sendloop",
  tools: {
    /**
     * Tool to retrieve overall report for a subscriber list. use after sending campaigns to get summary metrics.
     */
    GET_OVERALL_LIST_REPORT: "SENDLOOP_GET_OVERALL_LIST_REPORT",
    /**
     * Tool to list campaigns. use when you need to filter by campaign status and handle pagination for campaign retrieval.
     */
    LIST_CAMPAIGNS: "SENDLOOP_LIST_CAMPAIGNS",
    /**
     * Tool to retrieve subscriber lists. use when you need to get all mailing lists with optional pagination.
     */
    LIST_LISTS: "SENDLOOP_LIST_LISTS",
    /**
     * Tool to list subscribers in a specified sendloop list with pagination. use when you need to retrieve subscribers for a given list id, optionally filtering by status, page number, and page size.
     */
    LIST_SUBSCRIBERS: "SENDLOOP_LIST_SUBSCRIBERS",
    /**
     * Tool to retrieve account information. use when you need details about the current sendloop account.
     */
    SENDLOOP_GET_ACCOUNT_INFO: "SENDLOOP_SENDLOOP_GET_ACCOUNT_INFO",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SENDLOOP".
 */
export type SENDLOOP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SENDLOOP".
 */
export type SENDLOOP_TRIGGER_EVENTS = {}
