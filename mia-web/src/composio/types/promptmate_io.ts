// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PROMPTMATE_IO's PROMPTMATE_IO_CREATE_WEBHOOK tool input.
 */
type PROMPTMATE_IO_CREATE_WEBHOOK_INPUT = {
  /**
   * Endpoint Url
   * Format: uri
   * @description The HTTP(S) URL where Promptmate will send webhook POST callbacks.
   */
  endpointUrl?: unknown;
  /**
   * Restricted App Ids
   * @description List of Promptmate app IDs that are allowed to trigger this webhook.
   * @default null
   */
  restrictedAppIds: string[] | null;
  /**
   * Webhook Name
   * @description Optional friendly name for the webhook.
   * @default null
   */
  webhookName: string | null;
  /**
   * Webhook Reference
   * @description Client-defined identifier for correlation or de-duplication.
   * @default null
   */
  webhookReference: string | null;
  /**
   * Webhook Type
   * @description Type of events to subscribe to ('job' or 'row').
   * @default null
   * @enum {string|null}
   */
  webhookType: "job" | "row" | null;
};

/**
 * Type of PROMPTMATE_IO's PROMPTMATE_IO_CREATE_WEBHOOK tool output.
 */
type PROMPTMATE_IO_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Endpoint Url
       * Format: uri
       * @description Callback URL for webhook events.
       */
      endpointUrl: unknown;
      /**
       * Restricted App Ids
       * @description App IDs that can trigger this webhook.
       */
      restrictedAppIds?: string[];
      /**
       * Webhook Id
       * @description System-assigned unique identifier for the webhook.
       */
      webhookId: string;
      /**
       * Webhook Name
       * @description Name of the webhook.
       * @default null
       */
      webhookName: string | null;
      /**
       * Webhook Reference
       * @description Client-provided reference identifier.
       * @default null
       */
      webhookReference: string | null;
      /**
       * Webhook Type
       * @description Subscribed event type ('job' or 'row').
       * @enum {string}
       */
      webhookType: "job" | "row";
  }[];
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
 * Type of PROMPTMATE_IO's PROMPTMATE_IO_DELETE_WEBHOOK tool input.
 */
type PROMPTMATE_IO_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete
   */
  webhook_id?: string;
};

/**
 * Type of PROMPTMATE_IO's PROMPTMATE_IO_DELETE_WEBHOOK tool output.
 */
type PROMPTMATE_IO_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message detailing the outcome
       */
      message: string;
      /**
       * Success
       * @description Indicates if the deletion was successful
       */
      success: boolean;
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
 * Type of PROMPTMATE_IO's PROMPTMATE_IO_LIST_APPS tool input.
 */
type PROMPTMATE_IO_LIST_APPS_INPUT = object;

/**
 * Type of PROMPTMATE_IO's PROMPTMATE_IO_LIST_APPS tool output.
 */
type PROMPTMATE_IO_LIST_APPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Apps
       * @description List of available apps
       */
      apps: {
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the app was created (ISO 8601 format)
           */
          createdAt: string;
          /**
           * Description
           * @description Detailed description of the app's purpose
           */
          description: string;
          /**
           * Id
           * @description Unique identifier of the app
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the app
           */
          name: string;
          /**
           * Tags
           * @description List of tags assigned to this app
           */
          tags?: string[];
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when the app was last updated (ISO 8601 format)
           */
          updatedAt: string;
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
 * Type of PROMPTMATE_IO's PROMPTMATE_IO_LIST_WEBHOOKS tool input.
 */
type PROMPTMATE_IO_LIST_WEBHOOKS_INPUT = object;

/**
 * Type of PROMPTMATE_IO's PROMPTMATE_IO_LIST_WEBHOOKS tool output.
 */
type PROMPTMATE_IO_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total
       * @description Total number of webhooks returned
       */
      total: number;
      /**
       * Webhooks
       * @description Array of all registered webhooks.
       */
      webhooks: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the webhook was created
           */
          created_at: string;
          /**
           * Events
           * @description List of event names subscribed by the webhook
           */
          events: string[];
          /**
           * Id
           * @description Webhook identifier
           */
          id: string;
          /**
           * Is Active
           * @description Indicates if the webhook is currently active
           */
          is_active: boolean;
          /**
           * Updated At
           * @description ISO 8601 timestamp of the last update to the webhook
           */
          updated_at: string;
          /**
           * Url
           * @description Endpoint URL that receives webhook events
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
 * Type map of all available tool input types for toolkit "PROMPTMATE_IO".
 */
export type PROMPTMATE_IO_TOOL_INPUTS = {
  CREATE_WEBHOOK: PROMPTMATE_IO_CREATE_WEBHOOK_INPUT
  DELETE_WEBHOOK: PROMPTMATE_IO_DELETE_WEBHOOK_INPUT
  LIST_APPS: PROMPTMATE_IO_LIST_APPS_INPUT
  LIST_WEBHOOKS: PROMPTMATE_IO_LIST_WEBHOOKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PROMPTMATE_IO".
 */
export type PROMPTMATE_IO_TOOL_OUTPUTS = {
  CREATE_WEBHOOK: PROMPTMATE_IO_CREATE_WEBHOOK_OUTPUT
  DELETE_WEBHOOK: PROMPTMATE_IO_DELETE_WEBHOOK_OUTPUT
  LIST_APPS: PROMPTMATE_IO_LIST_APPS_OUTPUT
  LIST_WEBHOOKS: PROMPTMATE_IO_LIST_WEBHOOKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PROMPTMATE_IO toolkit.
 */
export const PROMPTMATE_IO = {
  slug: "promptmate_io",
  tools: {
    /**
     * Tool to create a new webhook. use when you need to subscribe an endpoint url to job or row events.
     */
    CREATE_WEBHOOK: "PROMPTMATE_IO_CREATE_WEBHOOK",
    /**
     * Tool to delete a webhook by its unique id. use after confirming the webhookid to remove.
     */
    DELETE_WEBHOOK: "PROMPTMATE_IO_DELETE_WEBHOOK",
    /**
     * Tool to list all available apps. use when you need to retrieve the catalogue of promptmate apps.
     */
    LIST_APPS: "PROMPTMATE_IO_LIST_APPS",
    /**
     * Tool to list all configured webhooks. use when you need to inspect current webhook subscriptions.
     */
    LIST_WEBHOOKS: "PROMPTMATE_IO_LIST_WEBHOOKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PROMPTMATE_IO".
 */
export type PROMPTMATE_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PROMPTMATE_IO".
 */
export type PROMPTMATE_IO_TRIGGER_EVENTS = {}
