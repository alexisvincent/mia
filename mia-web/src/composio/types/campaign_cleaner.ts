// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CAMPAIGN_CLEANER's CAMPAIGN_CLEANER_DELETE_CAMPAIGN tool input.
 */
type CAMPAIGN_CLEANER_DELETE_CAMPAIGN_INPUT = {
  /**
   * Campaign
   * @description Wrapper object containing the campaign ID to delete.
   */
  campaign?: {
      /**
       * Id
       * @description The unique identifier of the campaign to delete.
       */
      id: string;
  };
};

/**
 * Type of CAMPAIGN_CLEANER's CAMPAIGN_CLEANER_DELETE_CAMPAIGN tool output.
 */
type CAMPAIGN_CLEANER_DELETE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message returned if deletion failed.
       * @default null
       */
      error: string | null;
      /**
       * Status
       * @description Result of the delete operation; 'success' means the campaign was removed, 'failure' otherwise.
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
 * Type of CAMPAIGN_CLEANER's CAMPAIGN_CLEANER_GET_CAMPAIGN_LIST tool input.
 */
type CAMPAIGN_CLEANER_GET_CAMPAIGN_LIST_INPUT = {
  /**
   * Page
   * @description Page number of results; must be ≥1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page; must be ≥1
   * @default null
   */
  page_size: number | null;
  /**
   * Search
   * @description Search keyword to filter campaigns
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Filter campaigns by status: 'active' or 'archived'
   * @default null
   * @enum {string|null}
   */
  status: "active" | "archived" | null;
};

/**
 * Type of CAMPAIGN_CLEANER's CAMPAIGN_CLEANER_GET_CAMPAIGN_LIST tool output.
 */
type CAMPAIGN_CLEANER_GET_CAMPAIGN_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description List of campaign objects
       */
      campaigns: {
          /**
           * Created At
           * @description Campaign creation timestamp in ISO 8601 format
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the campaign
           */
          id: string;
          /**
           * Name
           * @description Name of the campaign
           */
          name: string;
          /**
           * Status
           * @description Status of the campaign
           * @enum {string}
           */
          status: "active" | "archived";
          /**
           * Updated At
           * @description Last updated timestamp in ISO 8601 format
           */
          updated_at: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Page Size
           * @description Number of items per page
           */
          page_size: number;
          /**
           * Total
           * @description Total campaigns matching the query
           */
          total: number;
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
 * Type of CAMPAIGN_CLEANER's CAMPAIGN_CLEANER_GET_CAMPAIGN_PDF_ANALYSIS tool input.
 */
type CAMPAIGN_CLEANER_GET_CAMPAIGN_PDF_ANALYSIS_INPUT = {
  /**
   * Campaign
   * @description Campaign object containing the campaign ID
   */
  campaign?: {
      /**
       * Id
       * @description The unique identifier of the campaign to fetch the PDF analysis report for
       */
      id: string;
  };
};

/**
 * Type of CAMPAIGN_CLEANER's CAMPAIGN_CLEANER_GET_CAMPAIGN_PDF_ANALYSIS tool output.
 */
type CAMPAIGN_CLEANER_GET_CAMPAIGN_PDF_ANALYSIS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw PDF content of the analysis report
       */
      content: string;
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
 * Type of CAMPAIGN_CLEANER's CAMPAIGN_CLEANER_GET_CAMPAIGN_STATUS tool input.
 */
type CAMPAIGN_CLEANER_GET_CAMPAIGN_STATUS_INPUT = {
  /**
   * Campaign
   * @description Campaign object containing the ID to query.
   */
  campaign?: {
      /**
       * Id
       * @description The unique identifier of the campaign to check.
       */
      id: string;
  };
};

/**
 * Type of CAMPAIGN_CLEANER's CAMPAIGN_CLEANER_GET_CAMPAIGN_STATUS tool output.
 */
type CAMPAIGN_CLEANER_GET_CAMPAIGN_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign Name
       * @description The name of the campaign.
       */
      campaign_name: string;
      /**
       * Date Added
       * @description Timestamp when the campaign was added (ISO 8601 format).
       */
      date_added: string;
      /**
       * Id
       * @description The unique identifier of the campaign.
       */
      id: string;
      /**
       * Status
       * @description The current status of the campaign.
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
 * Type map of all available tool input types for toolkit "CAMPAIGN_CLEANER".
 */
export type CAMPAIGN_CLEANER_TOOL_INPUTS = {
  DELETE_CAMPAIGN: CAMPAIGN_CLEANER_DELETE_CAMPAIGN_INPUT
  GET_CAMPAIGN_LIST: CAMPAIGN_CLEANER_GET_CAMPAIGN_LIST_INPUT
  GET_CAMPAIGN_PDF_ANALYSIS: CAMPAIGN_CLEANER_GET_CAMPAIGN_PDF_ANALYSIS_INPUT
  GET_CAMPAIGN_STATUS: CAMPAIGN_CLEANER_GET_CAMPAIGN_STATUS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CAMPAIGN_CLEANER".
 */
export type CAMPAIGN_CLEANER_TOOL_OUTPUTS = {
  DELETE_CAMPAIGN: CAMPAIGN_CLEANER_DELETE_CAMPAIGN_OUTPUT
  GET_CAMPAIGN_LIST: CAMPAIGN_CLEANER_GET_CAMPAIGN_LIST_OUTPUT
  GET_CAMPAIGN_PDF_ANALYSIS: CAMPAIGN_CLEANER_GET_CAMPAIGN_PDF_ANALYSIS_OUTPUT
  GET_CAMPAIGN_STATUS: CAMPAIGN_CLEANER_GET_CAMPAIGN_STATUS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CAMPAIGN_CLEANER toolkit.
 */
export const CAMPAIGN_CLEANER = {
  slug: "campaign_cleaner",
  tools: {
    /**
     * Tool to delete a saved campaign by id. use when you need to remove a campaign after confirming its id.
     */
    DELETE_CAMPAIGN: "CAMPAIGN_CLEANER_DELETE_CAMPAIGN",
    /**
     * Tool to list all campaigns in the account. use when you need to retrieve campaign listings for reporting or management.
     */
    GET_CAMPAIGN_LIST: "CAMPAIGN_CLEANER_GET_CAMPAIGN_LIST",
    /**
     * Tool to download a pdf analysis report for a processed campaign. use after a campaign has been processed.
     */
    GET_CAMPAIGN_PDF_ANALYSIS: "CAMPAIGN_CLEANER_GET_CAMPAIGN_PDF_ANALYSIS",
    /**
     * Tool to check the processing status of a submitted campaign. use after submitting a campaign to monitor its progress.
     */
    GET_CAMPAIGN_STATUS: "CAMPAIGN_CLEANER_GET_CAMPAIGN_STATUS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CAMPAIGN_CLEANER".
 */
export type CAMPAIGN_CLEANER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CAMPAIGN_CLEANER".
 */
export type CAMPAIGN_CLEANER_TRIGGER_EVENTS = {}
