// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ADDRESSZEN's ADDRESSZEN_KEY_AVAILABILITY tool input.
 */
type ADDRESSZEN_KEY_AVAILABILITY_INPUT = {
  /**
   * Key
   * @description API key to check (starts with 'ak_' or 'sl_').
   */
  key?: string;
};

/**
 * Type of ADDRESSZEN's ADDRESSZEN_KEY_AVAILABILITY tool output.
 */
type ADDRESSZEN_KEY_AVAILABILITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Result object containing key availability details
       */
      result: {
          /**
           * Available
           * @description Whether the key is currently usable
           */
          available: boolean;
          /**
           * Code
           * @description Numeric status code; 2000 indicates success
           */
          code: number;
          /**
           * Context
           * @description Current context if set; either a Context object or a country code string
           */
          context: {
              /**
               * Description
               * @description Country descriptor to show in Address Finder
               */
              description: string;
              /**
               * Emoji
               * @description Emoji text icon for the country
               */
              emoji: string;
              /**
               * Iso 2
               * @description 2-letter ISO country code
               */
              iso_2: string;
              /**
               * Iso 3
               * @description 3-letter ISO country code
               */
              iso_3: string;
              /**
               * Rgeo
               * @description Indicates availability of reverse geolocation search
               */
              rgeo: boolean;
          } | null;
          /**
           * Contexts
           * @description A list of available contexts for this API key
           */
          contexts: {
              /**
               * Description
               * @description Country descriptor to show in Address Finder
               */
              description: string;
              /**
               * Emoji
               * @description Emoji text icon for the country
               */
              emoji: string;
              /**
               * Iso 2
               * @description 2-letter ISO country code
               */
              iso_2: string;
              /**
               * Iso 3
               * @description 3-letter ISO country code
               */
              iso_3: string;
              /**
               * Rgeo
               * @description Indicates availability of reverse geolocation search
               */
              rgeo: boolean;
          }[];
          /**
           * Message
           * @description Human-readable status message
           */
          message: string;
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
 * Type of ADDRESSZEN's ADDRESSZEN_RESOLVE_ADDRESS_USA tool input.
 */
type ADDRESSZEN_RESOLVE_ADDRESS_USA_INPUT = {
  /**
   * Address
   * @description ID of the address suggestion returned by the autocomplete endpoint
   */
  address?: string;
};

/**
 * Type of ADDRESSZEN's ADDRESSZEN_RESOLVE_ADDRESS_USA tool output.
 */
type ADDRESSZEN_RESOLVE_ADDRESS_USA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code indicating success (e.g., 2000)
       */
      code: number;
      /**
       * Message
       * @description Response message (e.g., 'Success')
       */
      message: string;
      /**
       * Result
       * @description Resolved address object
       */
      result: {
          /**
           * Country
           * @description Full country name, e.g., 'United States'
           */
          country: string;
          /**
           * Country Iso
           * @description 3-letter ISO country code, e.g., 'USA'
           */
          country_iso: string;
          /**
           * Country Iso 2
           * @description 2-letter ISO country code, e.g., 'US'
           */
          country_iso_2: string;
          /**
           * Dataset
           * @description Source dataset of the address, e.g., 'usps'
           */
          dataset: string;
          /**
           * Id
           * @description Global unique internally generated identifier for the address
           */
          id: string;
          /**
           * Language
           * @description 2-letter ISO language code, e.g., 'en'
           */
          language: string;
          /**
           * Last Line
           * @description City, state, ZIP code, and ZIP+4 combined line
           */
          last_line: string;
          /**
           * Line 1
           * @description Primary delivery line (street address) of the address
           */
          line_1: string;
          /**
           * Line 2
           * @description Secondary delivery line (building or firm name)
           * @default null
           */
          line_2: string | null;
          /**
           * Plus 4 Code
           * @description 4-digit ZIP add-on code
           */
          plus_4_code: string;
          /**
           * Primary Number
           * @description House, rural route, contract box, or PO Box number
           */
          primary_number: string;
          /**
           * Secondary Number
           * @description Apartment, suite, or secondary unit number
           * @default null
           */
          secondary_number: string | null;
          /**
           * Zip Code
           * @description 5-digit ZIP code
           */
          zip_code: string;
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
 * Type map of all available tool input types for toolkit "ADDRESSZEN".
 */
export type ADDRESSZEN_TOOL_INPUTS = {
  KEY_AVAILABILITY: ADDRESSZEN_KEY_AVAILABILITY_INPUT
  RESOLVE_ADDRESS_USA: ADDRESSZEN_RESOLVE_ADDRESS_USA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ADDRESSZEN".
 */
export type ADDRESSZEN_TOOL_OUTPUTS = {
  KEY_AVAILABILITY: ADDRESSZEN_KEY_AVAILABILITY_OUTPUT
  RESOLVE_ADDRESS_USA: ADDRESSZEN_RESOLVE_ADDRESS_USA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ADDRESSZEN toolkit.
 */
export const ADDRESSZEN = {
  slug: "addresszen",
  tools: {
    /**
     * Tool to get public information on an api key, including whether it is currently usable. use when you need to verify that a key is valid and available before making further api requests.
     */
    KEY_AVAILABILITY: "ADDRESSZEN_KEY_AVAILABILITY",
    /**
     * Tool to resolve an address autocompletion by its address id and return the full address in us format. use after obtaining an address suggestion id from the autocomplete endpoint.
     */
    RESOLVE_ADDRESS_USA: "ADDRESSZEN_RESOLVE_ADDRESS_USA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ADDRESSZEN".
 */
export type ADDRESSZEN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ADDRESSZEN".
 */
export type ADDRESSZEN_TRIGGER_EVENTS = {}
