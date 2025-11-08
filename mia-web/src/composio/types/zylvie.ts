// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ZYLVIE's ZYLVIE_CREATE_PRODUCT tool input.
 */
type ZYLVIE_CREATE_PRODUCT_INPUT = {
  /**
   * Categories
   * @description List of categories under which to put this product. New categories will be created automatically.
   * @default null
   */
  categories: string[] | null;
  /**
   * Collect Address And Phone
   * @description Whether to collect buyer's address and phone number at checkout.
   * @default false
   */
  collect_address_and_phone: boolean | null;
  /**
   * Currency
   * @description The lower-cased 3-letter ISO currency code for your product.
   */
  currency?: unknown;
  /**
   * Description
   * @description The description for your product, in HTML format.
   * @default null
   */
  description: string | null;
  /**
   * Display
   * @description The display setting for your product.
   * @enum {string}
   */
  display?: "featured" | "listed" | "unlisted" | "unpublished";
  /**
   * Interval
   * @description The interval for subscription charging. Required if pricing_model is 'subscription'.
   * @default null
   * @enum {string|null}
   */
  interval: "day" | "week" | "month" | "year" | null;
  /**
   * Interval Count
   * @description How often to charge based on the interval. Required if pricing_model is 'subscription'.
   * @default null
   */
  interval_count: number | null;
  /**
   * Price
   * @description The base price of your product.
   */
  price?: number | null;
  /**
   * Pricing Model
   * @description The pricing model for your product.
   * @enum {string}
   */
  pricing_model?: "one-time" | "subscription" | "delayed";
  /**
   * Productfiles
   * @description List of URLs of files for this product.
   * @default null
   */
  productfiles: string[] | null;
  /**
   * Productimages
   * @description List of URLs of images for this product.
   * @default null
   */
  productimages: string[] | null;
  /**
   * Shipping Fee
   * @description The shipping fee for the product.
   * @default null
   */
  shipping_fee: number | null;
  /**
   * Shipping Type
   * @description The shipping fee type for your product.
   * @default null
   * @enum {string|null}
   */
  shipping_type: "flat" | "per_quantity" | null;
  /**
   * Subtitle
   * @description The subtitle of your product, which appears below the title.
   * @default null
   */
  subtitle: string | null;
  /**
   * Summary
   * @description The summary for your product, in HTML format.
   * @default null
   */
  summary: string | null;
  /**
   * Tags
   * @description List of tags to apply to this product. New tags will be created automatically.
   * @default null
   */
  tags: string[] | null;
  /**
   * Title
   * @description The title of your product.
   */
  title?: string;
  /**
   * Trial Period Days
   * @description Number of days of free trial before the subscriber is charged.
   * @default null
   */
  trial_period_days: number | null;
  /**
   * Url
   * @description The vanity URL for your product. Must be unique and contain alphanumeric, underscore, hyphen, or dot characters only.
   */
  url?: unknown;
};

/**
 * Type of ZYLVIE's ZYLVIE_CREATE_PRODUCT tool output.
 */
type ZYLVIE_CREATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description The categories of the product.
       * @default null
       */
      categories: string[] | null;
      /**
       * Collect Address And Phone
       * @description Whether address and phone are collected.
       * @default null
       */
      collect_address_and_phone: boolean | null;
      /**
       * Created
       * @description UTC timestamp indicating when the product was created.
       */
      created: number;
      /**
       * Currency
       * @description The currency code of the product.
       */
      currency: string;
      /**
       * Description
       * @description The description of the product.
       * @default null
       */
      description: string | null;
      /**
       * Display
       * @description The display setting of the product.
       */
      display: string;
      /**
       * Id
       * @description The unique identifier for the created product.
       */
      id: string;
      /**
       * Interval
       * @description The interval for subscription charging.
       * @default null
       */
      interval: string | null;
      /**
       * Interval Count
       * @description The interval count for subscription charging.
       * @default null
       */
      interval_count: number | null;
      /**
       * Price
       * @description The base price of the product.
       */
      price: number | null;
      /**
       * Pricing Model
       * @description The pricing model of the product.
       */
      pricing_model: string;
      /**
       * Productfiles
       * @description URLs of files for the product.
       * @default null
       */
      productfiles: string[] | null;
      /**
       * Productimages
       * @description URLs of images for the product.
       * @default null
       */
      productimages: string[] | null;
      /**
       * Shipping Fee
       * @description The shipping fee for the product.
       * @default null
       */
      shipping_fee: number | null;
      /**
       * Shipping Type
       * @description The shipping fee type for the product.
       * @default null
       */
      shipping_type: string | null;
      /**
       * Subtitle
       * @description The subtitle of the product.
       * @default null
       */
      subtitle: string | null;
      /**
       * Summary
       * @description The summary of the product.
       * @default null
       */
      summary: string | null;
      /**
       * Tags
       * @description The tags of the product.
       * @default null
       */
      tags: string[] | null;
      /**
       * Title
       * @description The title of the product.
       */
      title: string;
      /**
       * Trial Period Days
       * @description The trial period days for subscription.
       * @default null
       */
      trial_period_days: number | null;
      /**
       * Url
       * @description The vanity URL of the product.
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
 * Type of ZYLVIE's ZYLVIE_GET_AUTHENTICATING_USER tool input.
 */
type ZYLVIE_GET_AUTHENTICATING_USER_INPUT = object;

/**
 * Type of ZYLVIE's ZYLVIE_GET_AUTHENTICATING_USER tool output.
 */
type ZYLVIE_GET_AUTHENTICATING_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Brands
       * @description List of brands associated with the user
       */
      brands: {
          /**
           * Id
           * @description Brand’s unique identifier
           */
          id: string;
          /**
           * Name
           * @description Brand’s name
           */
          name: string;
      }[];
      /**
       * Email
       * Format: email
       * @description The authenticated user’s email address
       */
      email: unknown;
      /**
       * Id
       * @description User’s unique identifier
       */
      id: string;
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
 * Type of ZYLVIE's ZYLVIE_UNSUBSCRIBE_WEBHOOK tool input.
 */
type ZYLVIE_UNSUBSCRIBE_WEBHOOK_INPUT = {
  /**
   * Webhook Url
   * @description The webhook URL for the workflow you intend to delete.
   */
  webhook_url?: string;
};

/**
 * Type of ZYLVIE's ZYLVIE_UNSUBSCRIBE_WEBHOOK tool output.
 */
type ZYLVIE_UNSUBSCRIBE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type map of all available tool input types for toolkit "ZYLVIE".
 */
export type ZYLVIE_TOOL_INPUTS = {
  CREATE_PRODUCT: ZYLVIE_CREATE_PRODUCT_INPUT
  GET_AUTHENTICATING_USER: ZYLVIE_GET_AUTHENTICATING_USER_INPUT
  UNSUBSCRIBE_WEBHOOK: ZYLVIE_UNSUBSCRIBE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ZYLVIE".
 */
export type ZYLVIE_TOOL_OUTPUTS = {
  CREATE_PRODUCT: ZYLVIE_CREATE_PRODUCT_OUTPUT
  GET_AUTHENTICATING_USER: ZYLVIE_GET_AUTHENTICATING_USER_OUTPUT
  UNSUBSCRIBE_WEBHOOK: ZYLVIE_UNSUBSCRIBE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ZYLVIE toolkit.
 */
export const ZYLVIE = {
  slug: "zylvie",
  tools: {
    /**
     * Tool to create a new product. use when you need to add a product with detailed custom options in zylvie platform.
     */
    CREATE_PRODUCT: "ZYLVIE_CREATE_PRODUCT",
    /**
     * Tool to retrieve information about the currently authenticated user. use when you have a valid bearer token and need to fetch the authenticated user's profile.
     */
    GET_AUTHENTICATING_USER: "ZYLVIE_GET_AUTHENTICATING_USER",
    /**
     * Tool to unsubscribe from a webhook by deleting the workflow object associated with the specified webhook url. use after confirming the webhook url to remove.
     */
    UNSUBSCRIBE_WEBHOOK: "ZYLVIE_UNSUBSCRIBE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ZYLVIE".
 */
export type ZYLVIE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ZYLVIE".
 */
export type ZYLVIE_TRIGGER_EVENTS = {}
