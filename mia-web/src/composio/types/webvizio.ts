// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WEBVIZIO's WEBVIZIO_LIST_WEBHOOKS tool input.
 */
type WEBVIZIO_LIST_WEBHOOKS_INPUT = object;

/**
 * Type of WEBVIZIO's WEBVIZIO_LIST_WEBHOOKS tool output.
 */
type WEBVIZIO_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of all configured webhook subscriptions
       */
      webhooks: {
          /**
           * Created At
           * @description Timestamp when the webhook was created (ISO 8601)
           */
          created_at: string;
          /**
           * Event
           * @description Event type the webhook is subscribed to
           */
          event: string;
          /**
           * Id
           * @description Unique identifier for the webhook subscription
           */
          id: string;
          /**
           * Target Url
           * @description The callback URL for the webhook subscription
           */
          target_url: string;
          /**
           * Updated At
           * @description Timestamp when the webhook was last updated (ISO 8601)
           */
          updated_at: string;
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
 * Type map of all available tool input types for toolkit "WEBVIZIO".
 */
export type WEBVIZIO_TOOL_INPUTS = {
  LIST_WEBHOOKS: WEBVIZIO_LIST_WEBHOOKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WEBVIZIO".
 */
export type WEBVIZIO_TOOL_OUTPUTS = {
  LIST_WEBHOOKS: WEBVIZIO_LIST_WEBHOOKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WEBVIZIO toolkit.
 */
export const WEBVIZIO = {
  slug: "webvizio",
  tools: {
    /**
     * Tool to list all configured outgoing webhook subscriptions. use when you need an overview of active webhooks before managing them.
     */
    LIST_WEBHOOKS: "WEBVIZIO_LIST_WEBHOOKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WEBVIZIO".
 */
export type WEBVIZIO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WEBVIZIO".
 */
export type WEBVIZIO_TRIGGER_EVENTS = {}
