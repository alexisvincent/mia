// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TAVILY's TAVILY_TAVILY_SEARCH tool input.
 */
type TAVILY_TAVILY_SEARCH_INPUT = {
  /**
   * Exclude Domains
   * @description A list of domain names (e.g., `['exclude.com', 'othersite.net']`) to exclude from search results; results from these domains will be filtered out.
   */
  exclude_domains?: unknown[];
  /**
   * Include Answer
   * @description If true, attempts to include a direct answer to the query (suitable for factual questions) in search results.
   * @default false
   */
  include_answer: boolean;
  /**
   * Include Domains
   * @description A list of specific domain names (e.g., `['example.com', 'website.org']`) to restrict the search to; only results from these domains are returned.
   */
  include_domains?: unknown[];
  /**
   * Include Images
   * @description If true, includes links to relevant images in search results.
   * @default false
   */
  include_images: boolean;
  /**
   * Include Raw Content
   * @description If true, includes raw content from visited websites (e.g., unprocessed HTML or text) in search results.
   * @default false
   */
  include_raw_content: boolean;
  /**
   * Max Results
   * @description Maximum number of search results to return.
   * @default 5
   */
  max_results: number;
  /**
   * Query
   * @description The search query string to find relevant information online.
   */
  query?: string;
  /**
   * Search Depth
   * @description Specifies search depth: 'basic' (standard, 1 API Credit) or 'advanced' (in-depth, 2 API Credits).
   * @default basic
   */
  search_depth: string;
};

/**
 * Type of TAVILY's TAVILY_TAVILY_SEARCH tool output.
 */
type TAVILY_TAVILY_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full JSON response from the Tavily Search API. This includes search results, query context, and any other information provided by the API.
       */
      response_data: {
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
 * Type map of all available tool input types for toolkit "TAVILY".
 */
export type TAVILY_TOOL_INPUTS = {
  TAVILY_SEARCH: TAVILY_TAVILY_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TAVILY".
 */
export type TAVILY_TOOL_OUTPUTS = {
  TAVILY_SEARCH: TAVILY_TAVILY_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TAVILY toolkit.
 */
export const TAVILY = {
  slug: "tavily",
  tools: {
    /**
     * Use this to perform a web search via the tavily api; offers controls for search depth, content types, result count, and domain filtering.
     */
    TAVILY_SEARCH: "TAVILY_TAVILY_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TAVILY".
 */
export type TAVILY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TAVILY".
 */
export type TAVILY_TRIGGER_EVENTS = {}
