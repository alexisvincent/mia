// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of U301's U301_SHORTEN_LINK tool input.
 */
type U301_SHORTEN_LINK_INPUT = {
  /**
   * Custom
   * @description Custom alias for the short URL
   * @default null
   */
  custom: string | null;
  /**
   * Domain
   * @description Domain to use for the short URL
   * @default null
   */
  domain: string | null;
  /**
   * Expiration Date
   * Format: date-time
   * @description Expiry date/time in ISO 8601 format
   */
  expiration_date?: unknown;
  /**
   * Password
   * @description Password to protect the short URL
   * @default null
   */
  password: string | null;
  /**
   * Reuse
   * @description If true, return existing short URL if already shortened
   * @default false
   */
  reuse: boolean;
  /**
   * Url
   * Format: uri
   * @description The long URL to be shortened
   */
  url?: unknown;
};

/**
 * Type of U301's U301_SHORTEN_LINK tool output.
 */
type U301_SHORTEN_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Time of creation (ISO 8601 format)
       */
      created_at: unknown;
      /**
       * Custom
       * @description The custom alias, if specified
       * @default null
       */
      custom: string | null;
      /**
       * Domain
       * @description Domain used for the short URL
       */
      domain: string;
      /**
       * Expiration Date
       * @description The expiration date/time, if set
       * @default null
       */
      expiration_date: string | null;
      /**
       * Password
       * @description The password for the link, if set
       * @default null
       */
      password: string | null;
      /**
       * Short Url
       * Format: uri
       * @description The newly created shortened URL
       */
      short_url: unknown;
      /**
       * Status
       * @description The status of the operation
       */
      status: string;
      /**
       * Updated At
       * Format: date-time
       * @description Time of last update (ISO 8601 format)
       */
      updated_at: unknown;
      /**
       * Url
       * Format: uri
       * @description The original long URL
       */
      url: unknown;
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
 * Type map of all available tool input types for toolkit "U301".
 */
export type U301_TOOL_INPUTS = {
  SHORTEN_LINK: U301_SHORTEN_LINK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "U301".
 */
export type U301_TOOL_OUTPUTS = {
  SHORTEN_LINK: U301_SHORTEN_LINK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's U301 toolkit.
 */
export const U301 = {
  slug: "u301",
  tools: {
    /**
     * Tool to shorten a long url into a compact short link. use after obtaining the long url when you need a shareable link.
     */
    SHORTEN_LINK: "U301_SHORTEN_LINK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "U301".
 */
export type U301_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "U301".
 */
export type U301_TRIGGER_EVENTS = {}
