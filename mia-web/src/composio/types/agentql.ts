// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AGENTQL's AGENTQL_AGENTQL_GET_USAGE tool input.
 */
type AGENTQL_AGENTQL_GET_USAGE_INPUT = object;

/**
 * Type of AGENTQL's AGENTQL_AGENTQL_GET_USAGE tool output.
 */
type AGENTQL_AGENTQL_GET_USAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Period End
       * @description End date of the current usage period, ISO 8601 format
       */
      period_end: string;
      /**
       * Period Start
       * @description Start date of the current usage period, ISO 8601 format
       */
      period_start: string;
      /**
       * Plan Name
       * @description Name of the subscription plan in use
       */
      plan_name: string;
      /**
       * Quota Remaining
       * @description Remaining quota for the current period
       */
      quota_remaining: number;
      /**
       * Quota Used
       * @description Amount of quota used in the current period
       */
      quota_used: number;
      /**
       * Total Quota
       * @description Total usage quota assigned to the API key
       */
      total_quota: number;
      /**
       * User Id
       * @description Identifier for the user or API key owner
       */
      user_id: string;
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
 * Type of AGENTQL's AGENTQL_AGENTQL_QUERY_DATA tool input.
 */
type AGENTQL_AGENTQL_QUERY_DATA_INPUT = {
  /**
   * Html
   * @description Raw HTML content to query. Provide either 'html' or 'url'.
   * @default null
   */
  html: string | null;
  /**
   * AgentqlQueryDataParams
   * @description Parameters controlling wait time, scrolling, extraction mode, and screenshot.
   * @default null
   */
  params: {
      /**
       * Is Screenshot Enabled
       * @description Whether to take a screenshot before extracting data. Included in metadata if enabled.
       * @default false
       */
      is_screenshot_enabled: boolean;
      /**
       * Is Scroll To Bottom Enabled
       * @description Whether to scroll to the bottom of the page before querying.
       * @default false
       */
      is_scroll_to_bottom_enabled: boolean;
      /**
       * Mode
       * @description Extraction mode: 'standard' for deeper analysis or 'fast' for speed.
       * @default fast
       * @enum {string}
       */
      mode: "standard" | "fast";
      /**
       * Wait For
       * @description Seconds to wait for the page to load before querying.
       * @default 0
       */
      wait_for: number;
  } | null;
  /**
   * Prompt
   * @description Natural language prompt describing data to extract. Provide either 'prompt' or 'query'.
   * @default null
   */
  prompt: string | null;
  /**
   * Query
   * @description AgentQL query string. Provide either 'query' or 'prompt'.
   * @default null
   */
  query: string | null;
  /**
   * Url
   * @description URL of the public web page to query. Provide either 'url' or 'html'.
   * @default null
   */
  url: string | null;
};

/**
 * Type of AGENTQL's AGENTQL_AGENTQL_QUERY_DATA tool output.
 */
type AGENTQL_AGENTQL_QUERY_DATA_OUTPUT = {
  /**
   * Data
   * @description Structured JSON data matching the query.
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
   * Metadata
   * @description Metadata returned with the query response.
   */
  metadata?: {
      /**
       * Request Id
       * @description UUID for the request.
       */
      request_id: string;
      /**
       * Screenshot
       * @description Base64-encoded screenshot if enabled; None otherwise.
       * @default null
       */
      screenshot: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENTQL's AGENTQL_CREATE_REMOTE_BROWSER_SESSION tool input.
 */
type AGENTQL_CREATE_REMOTE_BROWSER_SESSION_INPUT = {
  /**
   * Browser Ua Preset
   * @description User agent preset to simulate different operating systems. Supported values: 'windows', 'macos', 'linux'.
   * @default null
   * @enum {string|null}
   */
  browser_ua_preset: "windows" | "macos" | "linux" | null;
};

/**
 * Type of AGENTQL's AGENTQL_CREATE_REMOTE_BROWSER_SESSION tool output.
 */
type AGENTQL_CREATE_REMOTE_BROWSER_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Base Url
       * @description Base URL for accessing browser session resources and streaming endpoints.
       */
      base_url: string;
      /**
       * Cdp Url
       * @description Chrome DevTools Protocol URL for connecting to the remote browser instance.
       */
      cdp_url: string;
      /**
       * Session Id
       * @description Unique identifier for the browser session.
       */
      session_id: string;
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
 * Type map of all available tool input types for toolkit "AGENTQL".
 */
export type AGENTQL_TOOL_INPUTS = {
  AGENTQL_GET_USAGE: AGENTQL_AGENTQL_GET_USAGE_INPUT
  AGENTQL_QUERY_DATA: AGENTQL_AGENTQL_QUERY_DATA_INPUT
  CREATE_REMOTE_BROWSER_SESSION: AGENTQL_CREATE_REMOTE_BROWSER_SESSION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AGENTQL".
 */
export type AGENTQL_TOOL_OUTPUTS = {
  AGENTQL_GET_USAGE: AGENTQL_AGENTQL_GET_USAGE_OUTPUT
  AGENTQL_QUERY_DATA: AGENTQL_AGENTQL_QUERY_DATA_OUTPUT
  CREATE_REMOTE_BROWSER_SESSION: AGENTQL_CREATE_REMOTE_BROWSER_SESSION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AGENTQL toolkit.
 */
export const AGENTQL = {
  slug: "agentql",
  tools: {
    /**
     * Tool to retrieve subscription usage details for the current api key, including usage limits and billing period. use after confirming api connection is valid.
     */
    AGENTQL_GET_USAGE: "AGENTQL_AGENTQL_GET_USAGE",
    /**
     * Tool to query structured data as json from a web page using an agentql query or natural language prompt. use after defining your query or prompt and a url or html.
     */
    AGENTQL_QUERY_DATA: "AGENTQL_AGENTQL_QUERY_DATA",
    /**
     * Tool to create a remote browser session. use when you need to run browser automation on remote infrastructure.
     */
    CREATE_REMOTE_BROWSER_SESSION: "AGENTQL_CREATE_REMOTE_BROWSER_SESSION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AGENTQL".
 */
export type AGENTQL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AGENTQL".
 */
export type AGENTQL_TRIGGER_EVENTS = {}
