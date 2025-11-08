// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REMARKETY's REMARKETY_GET_CAMPAIGNS tool input.
 */
type REMARKETY_GET_CAMPAIGNS_INPUT = {
  /**
   * Limit
   * @description Number of campaigns to return per request (1-1000)
   * @default 100
   */
  limit: number | null;
  /**
   * Skip
   * @description Number of campaigns to skip
   * @default 0
   */
  skip: number | null;
  /**
   * Store Id
   * @description Identifier of the Remarkety store (path parameter)
   */
  store_id?: string;
};

/**
 * Type of REMARKETY's REMARKETY_GET_CAMPAIGNS tool output.
 */
type REMARKETY_GET_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description List of campaigns retrieved
       */
      campaigns: {
          /**
           * Created
           * @description Creation timestamp (ISO 8601)
           */
          created: string;
          /**
           * Id
           * @description Unique campaign ID
           */
          id: string;
          /**
           * Name
           * @description Campaign name
           */
          name: string;
          /**
           * Recipients
           * @description Number of recipients
           */
          recipients: number;
          /**
           * Sent Date
           * @description Date/time campaign was last sent (ISO 8601)
           * @default null
           */
          sentDate: string | null;
          /**
           * State
           * @description Status of the campaign (e.g., active, paused)
           */
          state: string;
          /**
           * Type
           * @description Type of campaign (e.g., email, SMS)
           */
          type: string;
          /**
           * Updated
           * @description Last updated timestamp (ISO 8601)
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
 * Type of REMARKETY's REMARKETY_GET_CUSTOMERS tool input.
 */
type REMARKETY_GET_CUSTOMERS_INPUT = {
  /**
   * Limit
   * @description Number of results to return (optional)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of results to skip (optional)
   * @default null
   */
  offset: number | null;
  /**
   * Store Id
   * @description Identifier of the Remarkety store (path parameter)
   */
  store_id?: string;
  /**
   * Updated At Max
   * @description Return customers updated before this date (ISO8601)
   * @default null
   */
  updatedAtMax: string | null;
  /**
   * Updated At Min
   * @description Return customers updated after this date (ISO8601)
   * @default null
   */
  updatedAtMin: string | null;
};

/**
 * Type of REMARKETY's REMARKETY_GET_CUSTOMERS tool output.
 */
type REMARKETY_GET_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customers
       * @description Array of customer objects
       */
      customers: {
          /**
           * Created At
           * @description Account creation timestamp (ISO8601)
           */
          createdAt: string;
          /**
           * Email
           * @description Customer email address
           */
          email: string;
          /**
           * First Name
           * @description Customer first name
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Customer identifier
           */
          id: string;
          /**
           * Last Name
           * @description Customer last name
           * @default null
           */
          lastName: string | null;
          /**
           * Tags
           * @description List of customer tags
           * @default null
           */
          tags: string[] | null;
          /**
           * Updated At
           * @description Last update timestamp (ISO8601)
           */
          updatedAt: string;
      }[];
      /**
       * Limit
       * @description Response limit
       */
      limit: number;
      /**
       * Offset
       * @description Response offset
       */
      offset: number;
      /**
       * Total
       * @description Total number of customers matching criteria
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
 * Type of REMARKETY's REMARKETY_REMARKETY_GET_PRODUCTS tool input.
 */
type REMARKETY_REMARKETY_GET_PRODUCTS_INPUT = {
  /**
   * Created At Max
   * @description Return products created before this date (ISO8601)
   * @default null
   */
  createdAtMax: string | null;
  /**
   * Created At Min
   * @description Return products created after this date (ISO8601)
   * @default null
   */
  createdAtMin: string | null;
  /**
   * Limit
   * @description Number of products to return (optional, default server-defined)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of products to skip (optional)
   * @default null
   */
  offset: number | null;
  /**
   * Product Id
   * @description Filter by specific product ID (SKU)
   * @default null
   */
  productId: string | null;
  /**
   * Store Id
   * @description Store identifier (path parameter)
   */
  storeId?: string;
  /**
   * Updated At Max
   * @description Return products updated before this date (ISO8601)
   * @default null
   */
  updatedAtMax: string | null;
  /**
   * Updated At Min
   * @description Return products updated after this date (ISO8601)
   * @default null
   */
  updatedAtMin: string | null;
};

/**
 * Type of REMARKETY's REMARKETY_REMARKETY_GET_PRODUCTS tool output.
 */
type REMARKETY_REMARKETY_GET_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Response limit
       */
      limit: number;
      /**
       * Offset
       * @description Response offset
       */
      offset: number;
      /**
       * Products
       * @description Array of product objects
       */
      products: {
          /**
           * Created At
           * @description Creation timestamp (ISO8601)
           */
          createdAt: string;
          /**
           * Description
           * @description Product description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique product identifier
           */
          id: string;
          /**
           * Images
           * @description List of product image URLs
           * @default null
           */
          images: string[] | null;
          /**
           * Name
           * @description Product name
           */
          name: string;
          /**
           * Price
           * @description Product price
           * @default null
           */
          price: number | null;
          /**
           * Updated At
           * @description Last update timestamp (ISO8601)
           */
          updatedAt: string;
          /**
           * Variants
           * @description List of product variants as JSON objects
           * @default null
           */
          variants: {
              [key: string]: unknown;
          }[] | null;
      }[];
      /**
       * Total
       * @description Total number of products matching criteria
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
 * Type of REMARKETY's REMARKETY_TRACK_CART tool input.
 */
type REMARKETY_TRACK_CART_INPUT = {
  /**
   * Cart Id
   * @description Unique cart identifier
   */
  cartId?: string;
  /**
   * Email
   * Format: email
   * @description Customer's email address
   */
  email?: unknown;
  /**
   * Fields
   * @description Additional custom fields for the cart
   * @default null
   */
  fields: {
      [key: string]: string;
  } | null;
  /**
   * First Name
   * @description Customer's first name
   * @default null
   */
  firstName: string | null;
  /**
   * Items
   * @description List of items in the cart
   */
  items?: {
      /**
       * Id
       * @description Product SKU or unique identifier
       */
      id: string;
      /**
       * Image Url
       * Format: uri
       * @description Product image URL
       * @default null
       */
      imageUrl: string | null;
      /**
       * Name
       * @description Product name
       * @default null
       */
      name: string | null;
      /**
       * Price
       * @description Price per unit, non-negative
       */
      price: number;
      /**
       * Quantity
       * @description Quantity of this item, must be at least 1
       */
      quantity: number;
      /**
       * Url
       * Format: uri
       * @description Link to the product page
       * @default null
       */
      url: string | null;
  }[];
  /**
   * Last Name
   * @description Customer's last name
   * @default null
   */
  lastName: string | null;
  /**
   * Phone
   * @description Customer's phone number
   * @default null
   */
  phone: string | null;
  /**
   * Store Id
   * @description Remarkety store identifier
   */
  store_id?: string;
  /**
   * Subtotal
   * @description Cart subtotal amount, non-negative
   * @default null
   */
  subtotal: number | null;
  /**
   * Url
   * Format: uri
   * @description Cart recovery URL
   * @default null
   */
  url: string | null;
};

/**
 * Type of REMARKETY's REMARKETY_TRACK_CART tool output.
 */
type REMARKETY_TRACK_CART_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages, if any
       * @default null
       */
      errors: string[] | null;
      /**
       * Status
       * @description Status message from Remarkety
       */
      status: string;
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
 * Type of REMARKETY's REMARKETY_UPLOAD_CONTACTS_BATCH tool input.
 */
type REMARKETY_UPLOAD_CONTACTS_BATCH_INPUT = {
  /**
   * Contacts
   * @description List of contact objects to upload or update
   */
  contacts?: {
      /**
       * Address
       * @description Street address
       * @default null
       */
      address: string | null;
      /**
       * City
       * @description City
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description ISO country code
       * @default null
       */
      country: string | null;
      /**
       * Custom Fields
       * @description Dictionary of custom fields (string:string)
       * @default null
       */
      customFields: {
          [key: string]: string;
      } | null;
      /**
       * Email
       * @description Contact email address
       */
      email: string;
      /**
       * First Name
       * @description Contact’s first name
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description Contact’s last name
       * @default null
       */
      lastName: string | null;
      /**
       * Phone
       * @description Contact phone number
       * @default null
       */
      phone: string | null;
      /**
       * State
       * @description State or province
       * @default null
       */
      state: string | null;
      /**
       * Subscribed
       * @description Whether the contact is subscribed; default is true
       * @default true
       */
      subscribed: boolean | null;
      /**
       * Zip
       * @description Postal or ZIP code
       * @default null
       */
      zip: string | null;
  }[];
  /**
   * Store Id
   * @description The Remarkety store ID
   */
  store_id?: string;
};

/**
 * Type of REMARKETY's REMARKETY_UPLOAD_CONTACTS_BATCH tool output.
 */
type REMARKETY_UPLOAD_CONTACTS_BATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Imported
       * @description Number of contacts imported
       */
      imported: number;
      /**
       * Invalid
       * @description List of invalid emails
       */
      invalid: string[];
      /**
       * Updated
       * @description Number of contacts updated
       */
      updated: number;
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
 * Type map of all available tool input types for toolkit "REMARKETY".
 */
export type REMARKETY_TOOL_INPUTS = {
  GET_CAMPAIGNS: REMARKETY_GET_CAMPAIGNS_INPUT
  GET_CUSTOMERS: REMARKETY_GET_CUSTOMERS_INPUT
  REMARKETY_GET_PRODUCTS: REMARKETY_REMARKETY_GET_PRODUCTS_INPUT
  TRACK_CART: REMARKETY_TRACK_CART_INPUT
  UPLOAD_CONTACTS_BATCH: REMARKETY_UPLOAD_CONTACTS_BATCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REMARKETY".
 */
export type REMARKETY_TOOL_OUTPUTS = {
  GET_CAMPAIGNS: REMARKETY_GET_CAMPAIGNS_OUTPUT
  GET_CUSTOMERS: REMARKETY_GET_CUSTOMERS_OUTPUT
  REMARKETY_GET_PRODUCTS: REMARKETY_REMARKETY_GET_PRODUCTS_OUTPUT
  TRACK_CART: REMARKETY_TRACK_CART_OUTPUT
  UPLOAD_CONTACTS_BATCH: REMARKETY_UPLOAD_CONTACTS_BATCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REMARKETY toolkit.
 */
export const REMARKETY = {
  slug: "remarkety",
  tools: {
    /**
     * Tool to retrieve a list of marketing campaigns. use when you need to page through campaigns with optional limit and skip.
     */
    GET_CAMPAIGNS: "REMARKETY_GET_CAMPAIGNS",
    /**
     * Tool to retrieve customers. use when you need to fetch a paginated list of customers from a remarkety store.
     */
    GET_CUSTOMERS: "REMARKETY_GET_CUSTOMERS",
    /**
     * Tool to retrieve products. use when you need to fetch a paginated list of products from a remarkety store.
     */
    REMARKETY_GET_PRODUCTS: "REMARKETY_REMARKETY_GET_PRODUCTS",
    /**
     * Tool to track cart events in remarkety. use after a customer updates their cart to sync cart data for remarketing.
     */
    TRACK_CART: "REMARKETY_TRACK_CART",
    /**
     * Tool to upload or update multiple contacts in batch. use when you need to import or synchronize many contacts at once.
     */
    UPLOAD_CONTACTS_BATCH: "REMARKETY_UPLOAD_CONTACTS_BATCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REMARKETY".
 */
export type REMARKETY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REMARKETY".
 */
export type REMARKETY_TRIGGER_EVENTS = {}
