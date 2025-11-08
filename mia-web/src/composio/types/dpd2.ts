// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DPD2's DPD2_GET_STOREFRONT tool input.
 */
type DPD2_GET_STOREFRONT_INPUT = {
  /**
   * Id
   * @description Unique ID of the storefront to retrieve
   */
  id?: number;
};

/**
 * Type of DPD2's DPD2_GET_STOREFRONT tool output.
 */
type DPD2_GET_STOREFRONT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Email
       * @description Contact email
       */
      contact_email: string;
      /**
       * Contact Name
       * @description Contact name
       */
      contact_name: string;
      /**
       * Created At
       * @description When the storefront was created (UNIX timestamp)
       */
      created_at: number;
      /**
       * Currency
       * @description Currency code of the storefront
       */
      currency: string;
      /**
       * Id
       * @description Unique ID of the storefront
       */
      id: number;
      /**
       * Name
       * @description Storefront name
       */
      name: string;
      /**
       * Subdomain
       * @description Subdomain (v2 storefronts only)
       * @default null
       */
      subdomain: string | null;
      /**
       * Type
       * @description Type of storefront: 'cart', 'subscription', or 'clickbank'
       * @enum {string}
       */
      type: "cart" | "subscription" | "clickbank";
      /**
       * Updated At
       * @description When the storefront was last updated (UNIX timestamp)
       */
      updated_at: number;
      /**
       * Url
       * @description Storefront URL
       */
      url: string;
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
 * Type of DPD2's DPD2_LIST_CUSTOMERS tool input.
 */
type DPD2_LIST_CUSTOMERS_INPUT = {
  /**
   * Limit
   * @description Number of customers to return (max 100, default 50).
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number of results to fetch (default 1).
   * @default null
   */
  page: number | null;
  /**
   * Since Id
   * @description Only return customers with ID greater than this value.
   * @default null
   */
  since_id: number | null;
};

/**
 * Type of DPD2's DPD2_LIST_CUSTOMERS tool output.
 */
type DPD2_LIST_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customers
       * @description List of customer objects.
       */
      customers: {
          /**
           * Created At
           * @description ISO8601 timestamp when the customer record was created.
           */
          created_at: string;
          /**
           * Email
           * @description Customer's email address.
           */
          email: string;
          /**
           * First Name
           * @description Customer's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique ID of the customer.
           */
          id: number;
          /**
           * Last Name
           * @description Customer's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * State
           * @description State of the customer: active, deleted, or disabled.
           * @enum {string}
           */
          state: "active" | "deleted" | "disabled";
          /**
           * Updated At
           * @description ISO8601 timestamp when the customer record was last updated.
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
 * Type of DPD2's DPD2_LIST_PURCHASES tool input.
 */
type DPD2_LIST_PURCHASES_INPUT = {
  /**
   * Limit
   * @description Number of purchases to return (max 1000)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for results pagination (default 1)
   * @default null
   */
  page: number | null;
  /**
   * Since
   * @description Only include purchases made on or after this date (YYYY-MM-DD)
   * @default null
   */
  since: string | null;
  /**
   * Until
   * @description Only include purchases made on or before this date (YYYY-MM-DD)
   * @default null
   */
  until: string | null;
};

/**
 * Type of DPD2's DPD2_LIST_PURCHASES tool output.
 */
type DPD2_LIST_PURCHASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * Per Page
       * @description Number of purchases per page
       */
      per_page: number;
      /**
       * Purchases
       * @description List of purchase objects
       */
      purchases: {
          /**
           * Buyer Email
           * @description Buyer's email address
           */
          buyer_email: string;
          /**
           * Created At
           * @description ISO8601 timestamp when purchase was created
           */
          created_at: string;
          /**
           * Custom Fields
           * @description List of custom field key/value objects provided during checkout
           */
          custom_fields: {
              [key: string]: unknown;
          }[];
          /**
           * Id
           * @description Purchase ID
           */
          id: number;
          /**
           * Products
           * @description Details of each product included in this purchase
           */
          products: {
              /**
               * Name
               * @description Name of the purchased product
               */
              name: string;
              /**
               * Product Id
               * @description ID of the purchased product
               */
              product_id: number;
              /**
               * Variants
               * @description List of variant identifiers selected for this product
               * @default null
               */
              variants: string[] | null;
          }[];
          /**
           * Status
           * @description Status of the purchase (e.g., 'completed')
           */
          status: string;
          /**
           * Transaction Id
           * @description Transaction ID
           */
          transaction_id: string;
      }[];
      /**
       * Total Entries
       * @description Total number of purchase records
       */
      total_entries: number;
      /**
       * Total Pages
       * @description Number of result pages based on per_page
       */
      total_pages: number;
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
 * Type of DPD2's DPD2_LIST_STOREFRONTS tool input.
 */
type DPD2_LIST_STOREFRONTS_INPUT = object;

/**
 * Type of DPD2's DPD2_LIST_STOREFRONTS tool output.
 */
type DPD2_LIST_STOREFRONTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Storefronts
       * @description Array of storefront objects
       */
      storefronts: {
          /**
           * Contact Email
           * @description Contact email for the storefront
           */
          contact_email: string;
          /**
           * Contact Name
           * @description Contact name for the storefront
           */
          contact_name: string;
          /**
           * Created At
           * @description When the storefront was created (UNIX timestamp)
           */
          created_at: number;
          /**
           * Currency
           * @description Currency code used by the storefront
           */
          currency: string;
          /**
           * Id
           * @description Unique ID of the storefront
           */
          id: number;
          /**
           * Name
           * @description Storefront name
           */
          name: string;
          /**
           * Subdomain
           * @description Subdomain (v2 storefronts only); append to dpdcart.com for the full domain
           * @default null
           */
          subdomain: string | null;
          /**
           * Type
           * @description Type of storefront. One of 'cart', 'subscription', or 'clickbank'
           * @enum {string}
           */
          type: "cart" | "subscription" | "clickbank";
          /**
           * Updated At
           * @description When the storefront was last updated (UNIX timestamp)
           */
          updated_at: number;
          /**
           * Url
           * @description Storefront URL
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
 * Type of DPD2's DPD2_LIST_SUBSCRIBERS tool input.
 */
type DPD2_LIST_SUBSCRIBERS_INPUT = {
  /**
   * Email
   * @description Filter by subscriber email address.
   * @default null
   */
  email: string | null;
  /**
   * Filter
   * @description Additional filter expression.
   * @default null
   */
  filter: string | null;
  /**
   * Page
   * @description Page number to retrieve (>=1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of subscribers per page.
   * @default null
   */
  per_page: number | null;
  /**
   * Since
   * @description Only return subscribers added or updated since this ISO8601 timestamp.
   * @default null
   */
  since: string | null;
  /**
   * Storefront Id
   * @description Storefront ID.
   */
  storefront_id?: string;
};

/**
 * Type of DPD2's DPD2_LIST_SUBSCRIBERS tool output.
 */
type DPD2_LIST_SUBSCRIBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Page number returned.
       */
      page: number;
      /**
       * Per Page
       * @description Number of subscribers returned per page.
       */
      per_page: number;
      /**
       * Subscribers
       * @description The list of subscribers returned by this request.
       */
      subscribers: {
          /**
           * Created At
           * @description ISO8601 creation timestamp.
           */
          created_at: string;
          /**
           * Custom Fields
           * @description Custom fields associated with the subscriber.
           */
          custom_fields?: {
              [key: string]: unknown;
          };
          /**
           * Email
           * @description Subscriber's email address.
           */
          email: string;
          /**
           * First Name
           * @description Subscriber's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier for the subscriber.
           */
          id: string;
          /**
           * Last Name
           * @description Subscriber's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Updated At
           * @description ISO8601 last update timestamp.
           */
          updated_at: string;
      }[];
      /**
       * Total
       * @description Total number of matching subscribers.
       */
      total: number;
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
 * Type of DPD2's DPD2_PING tool input.
 */
type DPD2_PING_INPUT = object;

/**
 * Type of DPD2's DPD2_PING tool output.
 */
type DPD2_PING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description API status, usually 'ok'
       */
      status: string;
      /**
       * Version
       * @description Current API version
       */
      version: string;
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
 * Type of DPD2's DPD2_VERIFY_NOTIFICATION tool input.
 */
type DPD2_VERIFY_NOTIFICATION_INPUT = {
  /**
   * Body
   * @description Complete JSON payload received from the webhook notification.
   */
  body?: {
      [key: string]: unknown;
  };
  /**
   * Headers
   * @description HTTP headers from the incoming webhook request. Must include 'X-DPD-Signature' to allow DPD to verify authenticity.
   */
  headers?: {
      [key: string]: string;
  };
};

/**
 * Type of DPD2's DPD2_VERIFY_NOTIFICATION tool output.
 */
type DPD2_VERIFY_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if verification fails.
       * @default null
       */
      error: string | null;
      /**
       * Valid
       * @description True if DPD confirms the notification is authentic.
       */
      valid: boolean;
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
 * Type map of all available tool input types for toolkit "DPD2".
 */
export type DPD2_TOOL_INPUTS = {
  GET_STOREFRONT: DPD2_GET_STOREFRONT_INPUT
  LIST_CUSTOMERS: DPD2_LIST_CUSTOMERS_INPUT
  LIST_PURCHASES: DPD2_LIST_PURCHASES_INPUT
  LIST_STOREFRONTS: DPD2_LIST_STOREFRONTS_INPUT
  LIST_SUBSCRIBERS: DPD2_LIST_SUBSCRIBERS_INPUT
  PING: DPD2_PING_INPUT
  VERIFY_NOTIFICATION: DPD2_VERIFY_NOTIFICATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DPD2".
 */
export type DPD2_TOOL_OUTPUTS = {
  GET_STOREFRONT: DPD2_GET_STOREFRONT_OUTPUT
  LIST_CUSTOMERS: DPD2_LIST_CUSTOMERS_OUTPUT
  LIST_PURCHASES: DPD2_LIST_PURCHASES_OUTPUT
  LIST_STOREFRONTS: DPD2_LIST_STOREFRONTS_OUTPUT
  LIST_SUBSCRIBERS: DPD2_LIST_SUBSCRIBERS_OUTPUT
  PING: DPD2_PING_OUTPUT
  VERIFY_NOTIFICATION: DPD2_VERIFY_NOTIFICATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DPD2 toolkit.
 */
export const DPD2 = {
  slug: "dpd2",
  tools: {
    /**
     * Tool to retrieve details of a specific storefront by its id. use when you need storefront metadata after you have its id.
     */
    GET_STOREFRONT: "DPD2_GET_STOREFRONT",
    /**
     * Tool to list customers in your dpd account. use when you need a filtered or paginated list of customers for reporting or synchronization.
     */
    LIST_CUSTOMERS: "DPD2_LIST_CUSTOMERS",
    /**
     * Tool to list all purchases made through your dpd account. use when you need to retrieve purchase records with optional date filters and pagination for reporting or analysis.
     */
    LIST_PURCHASES: "DPD2_LIST_PURCHASES",
    /**
     * Tool to list all storefronts in your dpd account. use after authenticating to fetch storefront details before managing products or purchases.
     */
    LIST_STOREFRONTS: "DPD2_LIST_STOREFRONTS",
    /**
     * Tool to list subscribers for a given storefront. use when you need a paginated and filtered list of subscribers after storefront setup.
     */
    LIST_SUBSCRIBERS: "DPD2_LIST_SUBSCRIBERS",
    /**
     * Tool to ping the api to check its status. use when verifying api connectivity before further operations.
     */
    PING: "DPD2_PING",
    /**
     * Tool to verify a webhook notification's authenticity by posting back the original signature and payload. use after receiving a notification to confirm it originates from dpd.
     */
    VERIFY_NOTIFICATION: "DPD2_VERIFY_NOTIFICATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DPD2".
 */
export type DPD2_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DPD2".
 */
export type DPD2_TRIGGER_EVENTS = {}
