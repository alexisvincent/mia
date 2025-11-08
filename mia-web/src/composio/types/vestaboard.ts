// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of VESTABOARD's VESTABOARD_LIST_SUBSCRIPTIONS tool input.
 */
type VESTABOARD_LIST_SUBSCRIPTIONS_INPUT = object;

/**
 * Type of VESTABOARD's VESTABOARD_LIST_SUBSCRIPTIONS tool output.
 */
type VESTABOARD_LIST_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscriptions
       * @description Array of subscription objects for the authenticated user
       */
      subscriptions: {
          /**
           * Board Id
           * @description Board ID tied to the subscription, if any
           * @default null
           */
          boardId: string | null;
          /**
           * Created
           * @description ISO 8601 timestamp when the subscription was created
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the subscription
           */
          id: string;
          /**
           * Organization Id
           * @description Organization ID for the subscription
           */
          organizationId: string;
          /**
           * Plan
           * @description Plan associated with the subscription
           */
          plan: string;
          /**
           * Status
           * @description Subscription status (e.g., active, cancelled)
           */
          status: string;
          /**
           * Updated
           * @description ISO 8601 timestamp when the subscription was last updated
           */
          updated: string;
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
 * Type of VESTABOARD's VESTABOARD_SUBSCRIPTION_API_SEND_MESSAGE tool input.
 */
type VESTABOARD_SUBSCRIPTION_API_SEND_MESSAGE_INPUT = {
  /**
   * Characters
   * @description 6×22 matrix of integer character codes. Either this or 'text' is required.
   * @default null
   */
  characters: number[][] | null;
  /**
   * Subscription Id
   * @description The unique subscription ID to target.
   */
  subscription_id?: string;
  /**
   * Text
   * @description Message as plain text. Either this or 'characters' is required.
   * @default null
   */
  text: string | null;
};

/**
 * Type of VESTABOARD's VESTABOARD_SUBSCRIPTION_API_SEND_MESSAGE tool output.
 */
type VESTABOARD_SUBSCRIPTION_API_SEND_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Characters
       * @description Echo of the sent character-code matrix, if provided
       * @default null
       */
      characters: number[][] | null;
      /**
       * Created
       * @description Timestamp when the message was created
       */
      created: string;
      /**
       * Id
       * @description ID of the created message
       */
      id: string;
      /**
       * Subscription Id
       * @description The subscription ID
       */
      subscriptionId: string;
      /**
       * Text
       * @description Echo of the sent plain text, if provided
       * @default null
       */
      text: string | null;
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
 * Type map of all available tool input types for toolkit "VESTABOARD".
 */
export type VESTABOARD_TOOL_INPUTS = {
  LIST_SUBSCRIPTIONS: VESTABOARD_LIST_SUBSCRIPTIONS_INPUT
  SUBSCRIPTION_API_SEND_MESSAGE: VESTABOARD_SUBSCRIPTION_API_SEND_MESSAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "VESTABOARD".
 */
export type VESTABOARD_TOOL_OUTPUTS = {
  LIST_SUBSCRIPTIONS: VESTABOARD_LIST_SUBSCRIPTIONS_OUTPUT
  SUBSCRIPTION_API_SEND_MESSAGE: VESTABOARD_SUBSCRIPTION_API_SEND_MESSAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's VESTABOARD toolkit.
 */
export const VESTABOARD = {
  slug: "vestaboard",
  tools: {
    /**
     * Tool to list all subscriptions accessible to the authenticated user. use when you need to retrieve your subscriptions. example: "list my subscriptions on vestaboard."
     */
    LIST_SUBSCRIPTIONS: "VESTABOARD_LIST_SUBSCRIPTIONS",
    /**
     * Tool to send a message to a specific vestaboard subscription. use after confirming you have the subscription id. example: "send 'hello!' to subscription sub ab12cd34ef."
     */
    SUBSCRIPTION_API_SEND_MESSAGE: "VESTABOARD_SUBSCRIPTION_API_SEND_MESSAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "VESTABOARD".
 */
export type VESTABOARD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "VESTABOARD".
 */
export type VESTABOARD_TRIGGER_EVENTS = {}
