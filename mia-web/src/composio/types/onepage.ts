// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ONEPAGE's ONEPAGE_SEARCH_INPUT_POST_REQUEST tool input.
 */
type ONEPAGE_SEARCH_INPUT_POST_REQUEST_INPUT = {
  /**
   * L
   * @description Language specifies the language code for the search results.
   */
  l?: string;
  /**
   * O
   * @description Output specifies the format of the search results (e.g., JSON, TEXT).
   */
  o?: string;
  /**
   * S
   * @description Search specifies the search query. This field is required.
   */
  s?: string;
};

/**
 * Type of ONEPAGE's ONEPAGE_SEARCH_INPUT_POST_REQUEST tool output.
 */
type ONEPAGE_SEARCH_INPUT_POST_REQUEST_OUTPUT = {
  /** Data */
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ONEPAGE's ONEPAGE_TOKEN_DETAILS_REQUEST tool input.
 */
type ONEPAGE_TOKEN_DETAILS_REQUEST_INPUT = {
  /**
   * Token
   * @description Token
   */
  token?: string;
};

/**
 * Type of ONEPAGE's ONEPAGE_TOKEN_DETAILS_REQUEST tool output.
 */
type ONEPAGE_TOKEN_DETAILS_REQUEST_OUTPUT = {
  /** Data */
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "ONEPAGE".
 */
export type ONEPAGE_TOOL_INPUTS = {
  SEARCH_INPUT_POST_REQUEST: ONEPAGE_SEARCH_INPUT_POST_REQUEST_INPUT
  TOKEN_DETAILS_REQUEST: ONEPAGE_TOKEN_DETAILS_REQUEST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ONEPAGE".
 */
export type ONEPAGE_TOOL_OUTPUTS = {
  SEARCH_INPUT_POST_REQUEST: ONEPAGE_SEARCH_INPUT_POST_REQUEST_OUTPUT
  TOKEN_DETAILS_REQUEST: ONEPAGE_TOKEN_DETAILS_REQUEST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ONEPAGE toolkit.
 */
export const ONEPAGE = {
  slug: "onepage",
  tools: {
    /**
     * The searchinput endpoint allows users to perform a search query within the onepage platform. it accepts a required search string and optional parameters for language and output format customization. this endpoint is designed for retrieving relevant information based on user-specified search terms, with the ability to filter results by language and choose between structured (json) or plain text output. use this endpoint when you need to search for specific content or information within the onepage ecosystem. it's particularly useful for integrating search functionality into applications or workflows that interact with onepage data. note that this endpoint focuses solely on search functionality and does not provide additional features like content creation or modification.
     */
    SEARCH_INPUT_POST_REQUEST: "ONEPAGE_SEARCH_INPUT_POST_REQUEST",
    /**
     * Retrieves detailed information about a specific token in the onepage system. this endpoint should be used when you need to obtain comprehensive data about a token, such as its associated permissions, expiration date, or other metadata. it's particularly useful for token management tasks, such as verifying token validity or checking token attributes. the endpoint accepts a single token and returns its corresponding details. it should not be used for token creation, deletion, or modification operations. note that the specific details returned may vary based on the onepage implementation and the token's type or purpose.
     */
    TOKEN_DETAILS_REQUEST: "ONEPAGE_TOKEN_DETAILS_REQUEST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ONEPAGE".
 */
export type ONEPAGE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ONEPAGE".
 */
export type ONEPAGE_TRIGGER_EVENTS = {}
