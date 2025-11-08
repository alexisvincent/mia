// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LINKUP's LINKUP_GET_ANSWER tool input.
 */
type LINKUP_GET_ANSWER_INPUT = {
  /**
   * Depth
   * @description Level of search depth ('standard' for faster results, 'deep' for more comprehensive results)
   * @default standard
   * @enum {string}
   */
  depth: "standard" | "deep";
  /**
   * Query
   * @description The natural language question to get an answer for
   */
  query?: string;
};

/**
 * Type of LINKUP's LINKUP_GET_ANSWER tool output.
 */
type LINKUP_GET_ANSWER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Answer
       * @description The natural language answer to the query
       */
      answer: string;
      /**
       * Sources
       * @description List of sources used to generate the answer
       */
      sources: {
          /**
           * Name
           * @description Name of the source
           */
          name: string;
          /**
           * Snippet
           * @description Relevant snippet from the source
           */
          snippet: string;
          /**
           * Url
           * @description URL of the source
           */
          url: string;
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
 * Type of LINKUP's LINKUP_SEARCH tool input.
 */
type LINKUP_SEARCH_INPUT = {
  /**
   * Depth
   * @description Defines the precision of the search. 'standard' returns results quickly, 'deep' takes longer but yields more comprehensive results
   * @enum {string}
   */
  depth?: "standard" | "deep";
  /**
   * Include Images
   * @description Whether to include images in the results
   * @default false
   */
  include_images: boolean | null;
  /**
   * Output Type
   * @description Type of output desired: sourcedAnswer (natural language with sources), searchResults (context chunks), or structured (custom JSON format)
   * @enum {string}
   */
  output_type?: "sourcedAnswer" | "searchResults" | "structured";
  /**
   * Query
   * @description The natural language question you want to retrieve context for
   */
  query?: string;
  /**
   * Structured Output Schema
   * @description Required only when output_type is 'structured'. JSON schema for response format
   * @default null
   */
  structured_output_schema: string | null;
};

/**
 * Type of LINKUP's LINKUP_SEARCH tool output.
 */
type LINKUP_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Answer
       * @description The answer to the query
       */
      answer: string;
      /**
       * Sources
       * @description List of sources used to generate the answer
       */
      sources: {
          /**
           * Name
           * @description Name of the source
           */
          name: string;
          /**
           * Snippet
           * @description Relevant snippet from the source
           */
          snippet: string;
          /**
           * Url
           * @description URL of the source
           */
          url: string;
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
 * Type map of all available tool input types for toolkit "LINKUP".
 */
export type LINKUP_TOOL_INPUTS = {
  GET_ANSWER: LINKUP_GET_ANSWER_INPUT
  SEARCH: LINKUP_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LINKUP".
 */
export type LINKUP_TOOL_OUTPUTS = {
  GET_ANSWER: LINKUP_GET_ANSWER_OUTPUT
  SEARCH: LINKUP_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LINKUP toolkit.
 */
export const LINKUP = {
  slug: "linkup",
  tools: {
    /**
     * This tool gets a natural language answer to a given question using linkup's api. it processes the question with provided parameters (query and depth) and returns a structured answer with text and sources used. it supports varying precision based on defined depth and is designed for natural language query responses.
     */
    GET_ANSWER: "LINKUP_GET_ANSWER",
    /**
     * This tool allows users to search and retrieve insights using the linkup api. it implements a search functionality via the post /search endpoint and supports various parameters including 'query', 'depth', and 'output type' (with options such as 'sourcedanswer', 'searchresults', and 'structured'). optional inclusion of images is available via the include images parameter.
     */
    SEARCH: "LINKUP_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LINKUP".
 */
export type LINKUP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LINKUP".
 */
export type LINKUP_TRIGGER_EVENTS = {}
