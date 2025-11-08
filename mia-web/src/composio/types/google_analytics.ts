// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLE_ANALYTICS's GOOGLE_ANALYTICS_CREATE_EXPANDED_DATA_SET tool input.
 */
type GOOGLE_ANALYTICS_CREATE_EXPANDED_DATA_SET_INPUT = {
  /**
   * Expanded Data Set
   * @description Definition of the ExpandedDataSet to create.
   */
  expandedDataSet?: {
      /**
       * Description
       * @description Optional. Description of the expanded data set.
       * @default null
       */
      description: string | null;
      /**
       * Dimension Names
       * @description Required. List of dimension names to include in the expanded data set.
       */
      dimensionNames: string[];
      /**
       * Display Name
       * @description Required. Human-readable display name for the expanded data set.
       */
      displayName: string;
      /**
       * Metric Names
       * @description Required. List of metric names to include in the expanded data set.
       */
      metricNames: string[];
  };
  /**
   * Parent
   * @description Parent property resource name. Format: properties/{propertyId}
   */
  parent?: string;
};

/**
 * Type of GOOGLE_ANALYTICS's GOOGLE_ANALYTICS_CREATE_EXPANDED_DATA_SET tool output.
 */
type GOOGLE_ANALYTICS_CREATE_EXPANDED_DATA_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expanded Data Set
       * @description The created ExpandedDataSet resource.
       */
      expandedDataSet: {
          /**
           * Create Time
           * @description Output only. Time when this ExpandedDataSet was created.
           * @default null
           */
          createTime: string | null;
          /**
           * Description
           * @description Optional. Description of the expanded data set.
           * @default null
           */
          description: string | null;
          /**
           * Dimension Names
           * @description Required. List of dimension names to include in the expanded data set.
           */
          dimensionNames: string[];
          /**
           * Display Name
           * @description Required. Human-readable display name for the expanded data set.
           */
          displayName: string;
          /**
           * Metric Names
           * @description Required. List of metric names to include in the expanded data set.
           */
          metricNames: string[];
          /**
           * Name
           * @description Output only. Resource name of the ExpandedDataSet.
           */
          name: string;
          /**
           * Update Time
           * @description Output only. Time when this ExpandedDataSet was last updated.
           * @default null
           */
          updateTime: string | null;
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
 * Type of GOOGLE_ANALYTICS's GOOGLE_ANALYTICS_GET_ACCOUNT tool input.
 */
type GOOGLE_ANALYTICS_GET_ACCOUNT_INPUT = {
  /**
   * Name
   * @description Required. The resource name of the Account to retrieve. Format: accounts/{account_id}, e.g., 'accounts/100'.
   */
  name?: string;
};

/**
 * Type of GOOGLE_ANALYTICS's GOOGLE_ANALYTICS_GET_ACCOUNT tool output.
 */
type GOOGLE_ANALYTICS_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Create Time
       * @description ISO 8601 timestamp when the account was created.
       */
      createTime: string;
      /**
       * Deleted
       * @description Whether this Account is soft-deleted. Deleted accounts are excluded from list results unless explicitly requested.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Display Name
       * @description Human-readable display name for this account.
       * @default null
       */
      displayName: string | null;
      /**
       * Name
       * @description Resource name of this account. Format: accounts/{account_id}.
       */
      name: string;
      /**
       * Region Code
       * @description Country/region code of the account (e.g., 'US').
       * @default null
       */
      regionCode: string | null;
      /**
       * Update Time
       * @description ISO 8601 timestamp when the account was last updated.
       */
      updateTime: string;
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
 * Type of GOOGLE_ANALYTICS's GOOGLE_ANALYTICS_LIST_ACCOUNTS tool input.
 */
type GOOGLE_ANALYTICS_LIST_ACCOUNTS_INPUT = {
  /**
   * Page Size
   * @description Optional. Maximum number of accounts to return. Must be ≥1.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Optional. Token for retrieving the next page of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * Show Deleted
   * @description Optional. Whether to include soft-deleted (trashed) Accounts.
   * @default null
   */
  showDeleted: boolean | null;
};

/**
 * Type of GOOGLE_ANALYTICS's GOOGLE_ANALYTICS_LIST_ACCOUNTS tool output.
 */
type GOOGLE_ANALYTICS_LIST_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of Account resources.
       */
      accounts: {
          /**
           * Create Time
           * @description ISO 8601 timestamp when the account was created.
           */
          createTime: string;
          /**
           * Deleted
           * @description Whether this Account is soft-deleted.
           * @default null
           */
          deleted: boolean | null;
          /**
           * Display Name
           * @description Human-readable display name for this account.
           * @default null
           */
          displayName: string | null;
          /**
           * Name
           * @description Resource name of this account. Format: accounts/{account_id}.
           */
          name: string;
          /**
           * Region Code
           * @description Country/region code of the account (e.g., 'US').
           * @default null
           */
          regionCode: string | null;
          /**
           * Update Time
           * @description ISO 8601 timestamp when the account was last updated.
           */
          updateTime: string;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if any.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLE_ANALYTICS's GOOGLE_ANALYTICS_LIST_AUDIENCES tool input.
 */
type GOOGLE_ANALYTICS_LIST_AUDIENCES_INPUT = {
  /**
   * Page Size
   * @description Optional. Maximum number of Audiences to return.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Optional. Token for retrieving the next page of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * Parent
   * @description Required. Resource name of the parent property. Format: properties/{property_id}
   */
  parent?: string;
};

/**
 * Type of GOOGLE_ANALYTICS's GOOGLE_ANALYTICS_LIST_AUDIENCES tool output.
 */
type GOOGLE_ANALYTICS_LIST_AUDIENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Audiences
       * @description List of Audience resources.
       */
      audiences: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if any.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type map of all available tool input types for toolkit "GOOGLE_ANALYTICS".
 */
export type GOOGLE_ANALYTICS_TOOL_INPUTS = {
  CREATE_EXPANDED_DATA_SET: GOOGLE_ANALYTICS_CREATE_EXPANDED_DATA_SET_INPUT
  GET_ACCOUNT: GOOGLE_ANALYTICS_GET_ACCOUNT_INPUT
  LIST_ACCOUNTS: GOOGLE_ANALYTICS_LIST_ACCOUNTS_INPUT
  LIST_AUDIENCES: GOOGLE_ANALYTICS_LIST_AUDIENCES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLE_ANALYTICS".
 */
export type GOOGLE_ANALYTICS_TOOL_OUTPUTS = {
  CREATE_EXPANDED_DATA_SET: GOOGLE_ANALYTICS_CREATE_EXPANDED_DATA_SET_OUTPUT
  GET_ACCOUNT: GOOGLE_ANALYTICS_GET_ACCOUNT_OUTPUT
  LIST_ACCOUNTS: GOOGLE_ANALYTICS_LIST_ACCOUNTS_OUTPUT
  LIST_AUDIENCES: GOOGLE_ANALYTICS_LIST_AUDIENCES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLE_ANALYTICS toolkit.
 */
export const GOOGLE_ANALYTICS = {
  slug: "google_analytics",
  tools: {
    /**
     * Tool to create an expanded data set for a property. use when you need to combine specific dimensions and metrics into a custom dataset after property creation.
     */
    CREATE_EXPANDED_DATA_SET: "GOOGLE_ANALYTICS_CREATE_EXPANDED_DATA_SET",
    /**
     * Tool to retrieve a single account by its resource name. use when you need detailed account info after confirming the account resource name (e.g., accounts/100).
     */
    GET_ACCOUNT: "GOOGLE_ANALYTICS_GET_ACCOUNT",
    /**
     * Tool to list all accounts accessible by the caller. use when you need to enumerate all google analytics accounts your credentials can access.
     */
    LIST_ACCOUNTS: "GOOGLE_ANALYTICS_LIST_ACCOUNTS",
    /**
     * Tool to list all audiences on a property. use when you need to fetch all audiences for a ga4 property after confirming its existence.
     */
    LIST_AUDIENCES: "GOOGLE_ANALYTICS_LIST_AUDIENCES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLE_ANALYTICS".
 */
export type GOOGLE_ANALYTICS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLE_ANALYTICS".
 */
export type GOOGLE_ANALYTICS_TRIGGER_EVENTS = {}
