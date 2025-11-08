// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GUMROAD's GUMROAD_GET_RESOURCE_SUBSCRIPTIONS tool input.
 */
type GUMROAD_GET_RESOURCE_SUBSCRIPTIONS_INPUT = {
  /**
   * Resource Name
   * @description Name of the resource to list subscriptions for. One of the eight supported event types.
   * @enum {string}
   */
  resource_name?: "sale" | "refund" | "dispute" | "dispute_won" | "cancellation" | "subscription_updated" | "subscription_ended" | "subscription_restarted";
};

/**
 * Type of GUMROAD's GUMROAD_GET_RESOURCE_SUBSCRIPTIONS tool output.
 */
type GUMROAD_GET_RESOURCE_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Resource Subscriptions
       * @description List of active subscriptions for the given resource.
       */
      resource_subscriptions: {
          /**
           * Id
           * @description Unique identifier of this resource subscription.
           */
          id: string;
          /**
           * Post Url
           * @description Webhook URL receiving notifications for this resource.
           */
          post_url: string;
          /**
           * Resource Name
           * @description Name of the subscribed resource.
           */
          resource_name: string;
      }[];
      /**
       * Success
       * @description Indicates if the request was successful.
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
 * Type of GUMROAD's GUMROAD_GET_SALES tool input.
 */
type GUMROAD_GET_SALES_INPUT = {
  /**
   * After
   * @description Only include sales after this ISO8601 date/time (e.g., '2023-01-01T00:00:00Z').
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Only include sales before this ISO8601 date/time.
   * @default null
   */
  before: string | null;
  /**
   * Email
   * @description Filter sales by customer email address.
   * @default null
   */
  email: string | null;
  /**
   * Page
   * @description Page number for paginated results; minimum is 1.
   * @default null
   */
  page: number | null;
  /**
   * Product Id
   * @description Filter sales by a specific product ID.
   * @default null
   */
  product_id: string | null;
};

/**
 * Type of GUMROAD's GUMROAD_GET_SALES tool output.
 */
type GUMROAD_GET_SALES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Url
       * @description URL to fetch the next page of sales, if paginated.
       * @default null
       */
      next_page_url: string | null;
      /**
       * Sales
       * @description List of sales objects.
       */
      sales: {
          /**
           * Created At
           * @description Timestamp of the sale in ISO8601 format.
           */
          created_at: string;
          /**
           * Email
           * @description Customer's email address.
           */
          email: string;
          /**
           * Id
           * @description Unique ID for the sale.
           */
          id: string;
          /**
           * License Key
           * @description License key issued for this sale, if applicable.
           * @default null
           */
          license_key: string | null;
          /**
           * Offer Code
           * @description Offer code used for the sale, if any.
           * @default null
           */
          offer_code: string | null;
          /**
           * Product Id
           * @description ID of the product purchased.
           */
          product_id: string;
          /**
           * Refunded
           * @description Whether the sale has been refunded.
           */
          refunded: boolean;
      }[];
      /**
       * Success
       * @description Whether the API request was successful.
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
 * Type of GUMROAD's GUMROAD_GET_USER tool input.
 */
type GUMROAD_GET_USER_INPUT = object;

/**
 * Type of GUMROAD's GUMROAD_GET_USER tool output.
 */
type GUMROAD_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the API request was successful.
       */
      success: boolean;
      /**
       * User
       * @description The authenticated user's data.
       */
      user: {
          /**
           * Avatar Url
           * @description URL to the user's avatar image.
           */
          avatar_url: string;
          /**
           * Bio
           * @description The user's bio.
           */
          bio: string;
          /**
           * Can Change Password
           * @description Whether the user can change their password.
           */
          can_change_password: boolean;
          /**
           * Currency
           * @description The user's currency code.
           */
          currency: string;
          /**
           * Id
           * @description The user's unique ID.
           */
          id: string;
          /**
           * Name
           * @description The user's full name.
           */
          name: string;
          /**
           * Paypal Email
           * @description The user's PayPal email address.
           */
          paypal_email: string;
          /**
           * Url
           * @description The user's Gumroad profile URL.
           */
          url: string;
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
 * Type of GUMROAD's GUMROAD_SUBSCRIBE_TO_RESOURCE tool input.
 */
type GUMROAD_SUBSCRIBE_TO_RESOURCE_INPUT = {
  /**
   * Post Url
   * Format: uri
   * @description Your endpoint URL that will receive HTTP POST notifications.
   */
  post_url?: string;
  /**
   * Resource Name
   * @description One of the eight supported Gumroad resources to subscribe to.
   * @enum {string}
   */
  resource_name?: "sale" | "refund" | "dispute" | "dispute_won" | "cancellation" | "subscription_updated" | "subscription_ended" | "subscription_restarted";
};

/**
 * Type of GUMROAD's GUMROAD_SUBSCRIBE_TO_RESOURCE tool output.
 */
type GUMROAD_SUBSCRIBE_TO_RESOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Resource Subscription
       * @description Details of the created resource subscription.
       */
      resource_subscription: {
          /**
           * Id
           * @description Subscription identifier.
           */
          id: string;
          /**
           * Post Url
           * Format: uri
           * @description Endpoint URL receiving notifications.
           */
          post_url: string;
          /**
           * Resource Name
           * @description Subscribed resource name.
           */
          resource_name: string;
      };
      /**
       * Success
       * @description Indicates if the API call succeeded.
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
 * Type of GUMROAD's GUMROAD_UNSUBSCRIBE_FROM_RESOURCE tool input.
 */
type GUMROAD_UNSUBSCRIBE_FROM_RESOURCE_INPUT = {
  /**
   * Resource Subscription Id
   * @description Unique ID of the resource subscription to delete
   */
  resource_subscription_id?: string;
};

/**
 * Type of GUMROAD's GUMROAD_UNSUBSCRIBE_FROM_RESOURCE tool output.
 */
type GUMROAD_UNSUBSCRIBE_FROM_RESOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Human-readable confirmation or error message
       */
      message: string;
      /**
       * Success
       * @description Indicates if the unsubscribe request succeeded
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
 * Type map of all available tool input types for toolkit "GUMROAD".
 */
export type GUMROAD_TOOL_INPUTS = {
  GET_RESOURCE_SUBSCRIPTIONS: GUMROAD_GET_RESOURCE_SUBSCRIPTIONS_INPUT
  GET_SALES: GUMROAD_GET_SALES_INPUT
  GET_USER: GUMROAD_GET_USER_INPUT
  SUBSCRIBE_TO_RESOURCE: GUMROAD_SUBSCRIBE_TO_RESOURCE_INPUT
  UNSUBSCRIBE_FROM_RESOURCE: GUMROAD_UNSUBSCRIBE_FROM_RESOURCE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GUMROAD".
 */
export type GUMROAD_TOOL_OUTPUTS = {
  GET_RESOURCE_SUBSCRIPTIONS: GUMROAD_GET_RESOURCE_SUBSCRIPTIONS_OUTPUT
  GET_SALES: GUMROAD_GET_SALES_OUTPUT
  GET_USER: GUMROAD_GET_USER_OUTPUT
  SUBSCRIBE_TO_RESOURCE: GUMROAD_SUBSCRIBE_TO_RESOURCE_OUTPUT
  UNSUBSCRIBE_FROM_RESOURCE: GUMROAD_UNSUBSCRIBE_FROM_RESOURCE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GUMROAD toolkit.
 */
export const GUMROAD = {
  slug: "gumroad",
  tools: {
    /**
     * Tool to show all active subscriptions of the user for the input resource. use when you need to review existing webhooks before adding a new one.
     */
    GET_RESOURCE_SUBSCRIPTIONS: "GUMROAD_GET_RESOURCE_SUBSCRIPTIONS",
    /**
     * Tool to retrieve all successful sales by the authenticated user. use when you need to list your gumroad sales, optionally filtering by email, date range, product, or pagination.
     */
    GET_SALES: "GUMROAD_GET_SALES",
    /**
     * Tool to retrieve the authenticated user's data. use when you need the current user's profile details after authentication.
     */
    GET_USER: "GUMROAD_GET_USER",
    /**
     * Tool to subscribe to a resource. use when you need to receive real-time event webhooks after creating your webhook endpoint.
     */
    SUBSCRIBE_TO_RESOURCE: "GUMROAD_SUBSCRIBE_TO_RESOURCE",
    /**
     * Tool to unsubscribe from a resource. use after verifying the subscription id exists to remove webhook.
     */
    UNSUBSCRIBE_FROM_RESOURCE: "GUMROAD_UNSUBSCRIBE_FROM_RESOURCE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GUMROAD".
 */
export type GUMROAD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GUMROAD".
 */
export type GUMROAD_TRIGGER_EVENTS = {}
