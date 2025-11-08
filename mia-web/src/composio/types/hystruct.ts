// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HYSTRUCT's HYSTRUCT_LIST_ALL_WEBHOOKS tool input.
 */
type HYSTRUCT_LIST_ALL_WEBHOOKS_INPUT = object;

/**
 * Type of HYSTRUCT's HYSTRUCT_LIST_ALL_WEBHOOKS tool output.
 */
type HYSTRUCT_LIST_ALL_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description Array of webhook objects associated with the account
       */
      webhooks: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the webhook was created
           */
          createdAt: string;
          /**
           * Events
           * @description List of event types the webhook is subscribed to
           */
          events: string[];
          /**
           * Id
           * @description Unique identifier for the webhook
           */
          id: string;
          /**
           * Url
           * @description The callback URL that will receive webhook events
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
 * Type map of all available tool input types for toolkit "HYSTRUCT".
 */
export type HYSTRUCT_TOOL_INPUTS = {
  LIST_ALL_WEBHOOKS: HYSTRUCT_LIST_ALL_WEBHOOKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HYSTRUCT".
 */
export type HYSTRUCT_TOOL_OUTPUTS = {
  LIST_ALL_WEBHOOKS: HYSTRUCT_LIST_ALL_WEBHOOKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HYSTRUCT toolkit.
 */
export const HYSTRUCT = {
  slug: "hystruct",
  tools: {
    /**
     * Tool to list all webhooks associated with the account. Use when you need to retrieve every configured webhook for your team.
     */
    LIST_ALL_WEBHOOKS: "HYSTRUCT_LIST_ALL_WEBHOOKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HYSTRUCT".
 */
export type HYSTRUCT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HYSTRUCT".
 */
export type HYSTRUCT_TRIGGER_EVENTS = {}
