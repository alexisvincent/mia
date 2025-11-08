// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of COINBASE's COINBASE_LIST_WALLETS tool input.
 */
type COINBASE_LIST_WALLETS_INPUT = object;

/**
 * Type of COINBASE's COINBASE_LIST_WALLETS tool output.
 */
type COINBASE_LIST_WALLETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Message indicating the success of the list wallet action
       * @default Successfully retrieved all wallets.
       */
      message: string;
      /**
       * Wallets
       * @description List of wallets returned by the CDP API
       */
      wallets?: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "COINBASE".
 */
export type COINBASE_TOOL_INPUTS = {
  LIST_WALLETS: COINBASE_LIST_WALLETS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "COINBASE".
 */
export type COINBASE_TOOL_OUTPUTS = {
  LIST_WALLETS: COINBASE_LIST_WALLETS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's COINBASE toolkit.
 */
export const COINBASE = {
  slug: "coinbase",
  tools: {
    /**
     * Retrieve all wallets from coinbase via the cdp sdk.
     */
    LIST_WALLETS: "COINBASE_LIST_WALLETS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "COINBASE".
 */
export type COINBASE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "COINBASE".
 */
export type COINBASE_TRIGGER_EVENTS = {}
