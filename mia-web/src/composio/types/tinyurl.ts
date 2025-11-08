// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TINYURL's TINYURL_CREATE_SHORT_URL tool input.
 */
type TINYURL_CREATE_SHORT_URL_INPUT = {
  /**
   * Alias
   * @description Custom alias for the shortened URL (optional)
   * @default null
   */
  alias: string | null;
  /**
   * Domain
   * @description The domain to use for the shortened URL (optional)
   * @default null
   */
  domain: string | null;
  /**
   * Expires At
   * @description Expiration date for the URL in ISO 8601 format (optional)
   * @default null
   */
  expires_at: string | null;
  /**
   * Tags
   * @description Tags to associate with the URL (optional)
   * @default null
   */
  tags: string[] | null;
  /**
   * Url
   * @description The long URL that needs to be shortened
   */
  url?: string;
};

/**
 * Type of TINYURL's TINYURL_CREATE_SHORT_URL tool output.
 */
type TINYURL_CREATE_SHORT_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alias
       * @description The alias used in the shortened URL
       */
      alias: string;
      /**
       * Expires At
       * @description Expiration date of the URL if set
       * @default null
       */
      expires_at: string | null;
      /**
       * Tags
       * @description Tags associated with the URL
       */
      tags?: string[];
      /**
       * Tiny Url
       * @description The shortened URL
       */
      tiny_url: string;
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
 * Type map of all available tool input types for toolkit "TINYURL".
 */
export type TINYURL_TOOL_INPUTS = {
  CREATE_SHORT_URL: TINYURL_CREATE_SHORT_URL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TINYURL".
 */
export type TINYURL_TOOL_OUTPUTS = {
  CREATE_SHORT_URL: TINYURL_CREATE_SHORT_URL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TINYURL toolkit.
 */
export const TINYURL = {
  slug: "tinyurl",
  tools: {
    /**
     * Creates a shortened url using tinyurl's api. this action takes a long url and returns a shortened version, with optional parameters for customization like domain, alias, tags, and expiration date.
     */
    CREATE_SHORT_URL: "TINYURL_CREATE_SHORT_URL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TINYURL".
 */
export type TINYURL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TINYURL".
 */
export type TINYURL_TRIGGER_EVENTS = {}
