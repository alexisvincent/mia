// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAILBLUSTER's MAILBLUSTER_CREATE_LEAD tool input.
 */
type MAILBLUSTER_CREATE_LEAD_INPUT = {
  /**
   * Email
   * Format: email
   * @description Lead's email address
   */
  email?: unknown;
  /**
   * Fields
   * @description Additional custom fields as key-value pairs or list of such objects
   * @default null
   */
  fields: {
      [key: string]: unknown;
  } | null;
  /**
   * First Name
   * @description First name of the lead
   * @default null
   */
  firstName: string | null;
  /**
   * Last Name
   * @description Last name of the lead
   * @default null
   */
  lastName: string | null;
  /**
   * Subscribed
   * @description Subscription status. true = subscribed, false = unsubscribed
   * @default true
   */
  subscribed: boolean | null;
  /**
   * Tags
   * @description List of tags to assign to this lead
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_CREATE_LEAD tool output.
 */
type MAILBLUSTER_CREATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Creation timestamp (ISO 8601)
       */
      createdAt: string;
      /**
       * Email
       * @description Lead's email address
       */
      email: string;
      /**
       * Fields
       * @description Custom fields, if any
       * @default null
       */
      fields: {
          [key: string]: unknown;
      } | null;
      /**
       * First Name
       * @description First name of the lead
       * @default null
       */
      firstName: string | null;
      /**
       * Id
       * @description Unique identifier for the lead
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the lead
       * @default null
       */
      lastName: string | null;
      /**
       * Status
       * @description Current status of the lead
       */
      status: string;
      /**
       * Tags
       * @description Tags assigned to the lead
       */
      tags: string[];
      /**
       * Updated At
       * Format: date-time
       * @description Last update timestamp (ISO 8601)
       */
      updatedAt: string;
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
 * Type of MAILBLUSTER's MAILBLUSTER_CREATE_ORDER tool input.
 */
type MAILBLUSTER_CREATE_ORDER_INPUT = {
  /**
   * Currency
   * @description Currency code, e.g. 'USD'
   */
  currency?: string;
  /**
   * Customer
   * @description Customer information, expects {'email': '...'}
   */
  customer?: {
      [key: string]: unknown;
  };
  /**
   * Id
   * @description Unique identifier for the order
   */
  id?: string;
  /**
   * Items
   * @description List of items in the order
   */
  items?: {
      /**
       * Id
       * @description Identifier of the product
       */
      id: string;
      /**
       * Name
       * @description Name of the product
       */
      name: string;
      /**
       * Price
       * @description Price per unit in USD, must be non-negative
       */
      price: number;
      /**
       * Quantity
       * @description Quantity of the product, must be at least 1
       */
      quantity: number;
  }[];
  /**
   * Order Date
   * @description Date of the order in ISO8601
   */
  orderDate?: string;
  /**
   * Total Price
   * @description Total price of the order
   */
  totalPrice?: number;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_CREATE_ORDER tool output.
 */
type MAILBLUSTER_CREATE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp of creation
       */
      createdAt: string;
      /** Currency */
      currency: string;
      /** Customer */
      customer: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Unique identifier of the created order
       */
      id: string;
      /**
       * Items
       * @description List of items in the order
       */
      items: {
          /**
           * Id
           * @description Identifier of the product
           */
          id: string;
          /**
           * Name
           * @description Name of the product
           */
          name: string;
          /**
           * Price
           * @description Price per unit in USD, must be non-negative
           */
          price: number;
          /**
           * Quantity
           * @description Quantity of the product, must be at least 1
           */
          quantity: number;
      }[];
      /**
       * Status
       * @description Status of the order
       */
      status: string;
      /** Total Price */
      totalPrice: number;
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
 * Type of MAILBLUSTER's MAILBLUSTER_CREATE_PRODUCT tool input.
 */
type MAILBLUSTER_CREATE_PRODUCT_INPUT = {
  /**
   * Id
   * @description Optional external system identifier for the product.
   * @default null
   */
  id: string | null;
  /**
   * Image Url
   * Format: uri
   * @description URL pointing to the product image.
   */
  imageUrl?: unknown;
  /**
   * Name
   * @description Title of the product.
   */
  name?: string;
  /**
   * Price
   * @description Price of the product in USD, must be non-negative.
   */
  price?: number;
  /**
   * Published
   * @description Whether the product should be published immediately.
   * @default false
   */
  published: boolean | null;
  /**
   * Url
   * Format: uri
   * @description Public URL of the product.
   */
  url?: unknown;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_CREATE_PRODUCT tool output.
 */
type MAILBLUSTER_CREATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the product was created.
       */
      createdAt: string;
      /**
       * External Id
       * @description External system identifier, if provided.
       * @default null
       */
      externalId: string | null;
      /**
       * Id
       * @description Unique identifier assigned by MailBluster.
       */
      id: string;
      /**
       * Image Url
       * @description URL of the product image.
       */
      imageUrl: string;
      /**
       * Price
       * @description Price of the product.
       */
      price: number;
      /**
       * Published
       * @description Publication status of the product.
       */
      published: boolean;
      /**
       * Title
       * @description Title of the product.
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when the product was last updated.
       */
      updatedAt: string;
      /**
       * Url
       * @description Public URL of the product.
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
 * Type of MAILBLUSTER's MAILBLUSTER_DELETE_ORDER tool input.
 */
type MAILBLUSTER_DELETE_ORDER_INPUT = {
  /**
   * Order Id
   * @description The unique identifier of the order to delete.
   */
  order_id?: string;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_DELETE_ORDER tool output.
 */
type MAILBLUSTER_DELETE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description The ID of the deleted order.
       */
      _id: string;
      /**
       * Message
       * @description Additional message regarding the deletion result.
       */
      message: string;
      /**
       * Success
       * @description Indicates if the order was deleted successfully.
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
 * Type of MAILBLUSTER's MAILBLUSTER_DELETE_PRODUCT tool input.
 */
type MAILBLUSTER_DELETE_PRODUCT_INPUT = {
  /**
   * Product Id
   * @description The unique identifier of the product to delete.
   */
  product_id?: string;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_DELETE_PRODUCT tool output.
 */
type MAILBLUSTER_DELETE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * DeleteProductError
       * @description Error details returned by Mailbluster if deletion fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code returned by API
           * @default null
           */
          code: number | null;
          /**
           * Message
           * @description Error message returned by API
           * @default null
           */
          message: string | null;
      } | null;
      /**
       * Message
       * @description Additional message regarding the result.
       */
      message: string;
      /**
       * Success
       * @description Indicates if the product was deleted successfully.
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
 * Type of MAILBLUSTER's MAILBLUSTER_GET_ORDER tool input.
 */
type MAILBLUSTER_GET_ORDER_INPUT = {
  /**
   * Order Id
   * @description The unique identifier of the order to retrieve
   */
  order_id?: string;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_GET_ORDER tool output.
 */
type MAILBLUSTER_GET_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the order was created
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code for the order, e.g., 'USD'
       */
      currency: string;
      /**
       * Customer Id
       * @description Unique identifier of the customer associated with the order
       */
      customer_id: string;
      /**
       * Id
       * @description Unique identifier of the order
       */
      id: string;
      /**
       * Items
       * @description List of items included in the order
       */
      items: {
          /**
           * Price
           * @description Price per unit of the product, must be non-negative
           */
          price: number;
          /**
           * Product Id
           * @description Unique identifier of the product
           */
          product_id: string;
          /**
           * Quantity
           * @description Quantity of the product ordered, must be at least 1
           */
          quantity: number;
      }[];
      /**
       * Status
       * @description Current status of the order, e.g., 'pending', 'completed'
       */
      status: string;
      /**
       * Total Amount
       * @description Total amount for the order, must be non-negative
       */
      total_amount: number;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the order was last updated
       */
      updated_at: string;
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
 * Type of MAILBLUSTER's MAILBLUSTER_GET_PRODUCT tool input.
 */
type MAILBLUSTER_GET_PRODUCT_INPUT = {
  /**
   * Product Id
   * @description Unique identifier of the product to retrieve
   */
  product_id?: string;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_GET_PRODUCT tool output.
 */
type MAILBLUSTER_GET_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when the product was created
       */
      createdAt: string;
      /**
       * Currency
       * @description Currency code (e.g., USD)
       */
      currency: string;
      /**
       * Description
       * @description Product description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the product
       */
      id: string;
      /**
       * Image Url
       * @description URL to the product image
       * @default null
       */
      imageUrl: string | null;
      /**
       * Name
       * @description Name of the product
       */
      name: string;
      /**
       * Price
       * @description Product price
       */
      price: number;
      /**
       * Status
       * @description Current status of the product
       */
      status: string;
      /**
       * Updated At
       * @description ISO timestamp when the product was last updated
       */
      updatedAt: string;
      /**
       * Url
       * @description Product URL
       * @default null
       */
      url: string | null;
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
 * Type of MAILBLUSTER's MAILBLUSTER_LIST_ORDERS tool input.
 */
type MAILBLUSTER_LIST_ORDERS_INPUT = {
  /**
   * Limit
   * @description Number of orders per page.
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Search term to filter the orders.
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Field to sort by (e.g., 'id', 'email', 'createdAt').
   * @default null
   */
  sort: string | null;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_LIST_ORDERS tool output.
 */
type MAILBLUSTER_LIST_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Array of order objects.
   */
  data?: ({
      /**
       * Created At
       * @description Order creation time in ISO8601 format.
       */
      createdAt: string;
      /**
       * Email
       * @description Email address of the customer.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the order.
       */
      id: number;
      /**
       * Items
       * @description List of items in the order.
       */
      items: {
          [key: string]: string | number | boolean | {
              [key: string]: unknown;
          } | unknown[] | null;
      }[];
      /**
       * Status
       * @description Status of the order.
       */
      status: string;
      /**
       * Updated At
       * @description Last update time in ISO8601 format.
       */
      updatedAt: string;
  } & {
      [key: string]: unknown;
  })[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata including pagination.
   */
  meta?: {
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Count
           * @description Number of orders in the current page.
           */
          count: number;
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Orders per page.
           */
          per_page: number;
          /**
           * Total
           * @description Total number of orders.
           */
          total: number;
          /**
           * Total Pages
           * @description Total number of pages.
           */
          total_pages: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_LIST_PRODUCTS tool input.
 */
type MAILBLUSTER_LIST_PRODUCTS_INPUT = {
  /**
   * Filter
   * @description Filter expression for products, e.g., 'status:active'.
   * @default null
   */
  filter: string | null;
  /**
   * Limit
   * @description Number of results per page.
   * @default 10
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip.
   * @default 0
   */
  offset: number | null;
  /**
   * Sort
   * @description Field and order for sorting, e.g., 'createdAt:desc'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_LIST_PRODUCTS tool output.
 */
type MAILBLUSTER_LIST_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Limit value used for this response
       */
      limit: number;
      /**
       * Offset
       * @description Offset value used for this response
       */
      offset: number;
      /**
       * Products
       * @description Array of product objects
       */
      products: {
          /**
           * Created At
           * @description ISO8601 timestamp when the product was created.
           * @default null
           */
          createdAt: string | null;
          /**
           * Description
           * @description Description of the product.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the product.
           */
          id: string;
          /**
           * Name
           * @description Name of the product.
           */
          name: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the product was last updated.
           * @default null
           */
          updatedAt: string | null;
      }[];
      /**
       * Total
       * @description Total number of products
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
 * Type of MAILBLUSTER's MAILBLUSTER_MAILBLUSTER_LIST_FIELDS tool input.
 */
type MAILBLUSTER_MAILBLUSTER_LIST_FIELDS_INPUT = object;

/**
 * Type of MAILBLUSTER's MAILBLUSTER_MAILBLUSTER_LIST_FIELDS tool output.
 */
type MAILBLUSTER_MAILBLUSTER_LIST_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Array of custom field objects.
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the field was created.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the custom field.
       */
      id: number;
      /**
       * Label
       * @description Display label of the custom field.
       */
      label: string;
      /**
       * Name
       * @description Internal name/key of the custom field.
       */
      name: string;
      /**
       * Type
       * @description Data type of the custom field (e.g., 'text', 'number').
       */
      type: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the field was last updated.
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata including pagination.
   */
  meta?: {
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Count
           * @description Number of custom fields in the current page.
           */
          count: number;
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Maximum number of custom fields per page.
           */
          per_page: number;
          /**
           * Total
           * @description Total number of custom fields.
           */
          total: number;
          /**
           * Total Pages
           * @description Total number of pages.
           */
          total_pages: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_UPDATE_PRODUCT tool input.
 */
type MAILBLUSTER_UPDATE_PRODUCT_INPUT = {
  /**
   * Currency
   * @description Currency code (e.g., USD)
   * @default null
   */
  currency: string | null;
  /**
   * Description
   * @description Description of the product
   * @default null
   */
  description: string | null;
  /**
   * Image Url
   * @description URL to the product's image
   * @default null
   */
  imageUrl: string | null;
  /**
   * Name
   * @description New name for the product
   * @default null
   */
  name: string | null;
  /**
   * Price
   * @description New price of the product, must be non-negative
   * @default null
   */
  price: number | null;
  /**
   * Product Id
   * @description Unique identifier of the product to update
   */
  product_id?: string;
  /**
   * Url
   * @description New URL where the product can be found
   * @default null
   */
  url: string | null;
};

/**
 * Type of MAILBLUSTER's MAILBLUSTER_UPDATE_PRODUCT tool output.
 */
type MAILBLUSTER_UPDATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Date/time when the product was created
       */
      createdAt: string;
      /**
       * Currency
       * @description The currency code
       */
      currency: string;
      /**
       * Description
       * @description Product description
       */
      description: string;
      /**
       * Id
       * @description Unique identifier for the product
       */
      id: string;
      /**
       * Image Url
       * @description Image URL of the product
       */
      imageUrl: string;
      /**
       * Name
       * @description The name of the product
       */
      name: string;
      /**
       * Price
       * @description The price of the product
       */
      price: number;
      /**
       * Updated At
       * @description Date/time when the product was last updated
       */
      updatedAt: string;
      /**
       * Url
       * @description The URL of the product
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
 * Type map of all available tool input types for toolkit "MAILBLUSTER".
 */
export type MAILBLUSTER_TOOL_INPUTS = {
  CREATE_LEAD: MAILBLUSTER_CREATE_LEAD_INPUT
  CREATE_ORDER: MAILBLUSTER_CREATE_ORDER_INPUT
  CREATE_PRODUCT: MAILBLUSTER_CREATE_PRODUCT_INPUT
  DELETE_ORDER: MAILBLUSTER_DELETE_ORDER_INPUT
  DELETE_PRODUCT: MAILBLUSTER_DELETE_PRODUCT_INPUT
  GET_ORDER: MAILBLUSTER_GET_ORDER_INPUT
  GET_PRODUCT: MAILBLUSTER_GET_PRODUCT_INPUT
  LIST_ORDERS: MAILBLUSTER_LIST_ORDERS_INPUT
  LIST_PRODUCTS: MAILBLUSTER_LIST_PRODUCTS_INPUT
  MAILBLUSTER_LIST_FIELDS: MAILBLUSTER_MAILBLUSTER_LIST_FIELDS_INPUT
  UPDATE_PRODUCT: MAILBLUSTER_UPDATE_PRODUCT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAILBLUSTER".
 */
export type MAILBLUSTER_TOOL_OUTPUTS = {
  CREATE_LEAD: MAILBLUSTER_CREATE_LEAD_OUTPUT
  CREATE_ORDER: MAILBLUSTER_CREATE_ORDER_OUTPUT
  CREATE_PRODUCT: MAILBLUSTER_CREATE_PRODUCT_OUTPUT
  DELETE_ORDER: MAILBLUSTER_DELETE_ORDER_OUTPUT
  DELETE_PRODUCT: MAILBLUSTER_DELETE_PRODUCT_OUTPUT
  GET_ORDER: MAILBLUSTER_GET_ORDER_OUTPUT
  GET_PRODUCT: MAILBLUSTER_GET_PRODUCT_OUTPUT
  LIST_ORDERS: MAILBLUSTER_LIST_ORDERS_OUTPUT
  LIST_PRODUCTS: MAILBLUSTER_LIST_PRODUCTS_OUTPUT
  MAILBLUSTER_LIST_FIELDS: MAILBLUSTER_MAILBLUSTER_LIST_FIELDS_OUTPUT
  UPDATE_PRODUCT: MAILBLUSTER_UPDATE_PRODUCT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAILBLUSTER toolkit.
 */
export const MAILBLUSTER = {
  slug: "mailbluster",
  tools: {
    /**
     * Tool to create a new lead in mailbluster. use after gathering the lead's email and optional data.
     */
    CREATE_LEAD: "MAILBLUSTER_CREATE_LEAD",
    /**
     * Tool to create a new order in mailbluster.
     */
    CREATE_ORDER: "MAILBLUSTER_CREATE_ORDER",
    /**
     * Tool to create a new product in mailbluster. use when you have all product details ready to add it to your mailbluster catalog.
     */
    CREATE_PRODUCT: "MAILBLUSTER_CREATE_PRODUCT",
    /**
     * Tool to delete a specific order. use after confirming the order id to remove an order from mailbluster.
     */
    DELETE_ORDER: "MAILBLUSTER_DELETE_ORDER",
    /**
     * Tool to delete a product. use after confirming product existence.
     */
    DELETE_PRODUCT: "MAILBLUSTER_DELETE_PRODUCT",
    /**
     * Tool to retrieve details of a specific order. use when you have the order's id.
     */
    GET_ORDER: "MAILBLUSTER_GET_ORDER",
    /**
     * Tool to retrieve details of a specific product. use when you have a valid product id and need full product information.
     */
    GET_PRODUCT: "MAILBLUSTER_GET_PRODUCT",
    /**
     * Tool to list all orders. use when you need to retrieve orders with optional pagination, sorting, or searching after authenticating with mailbluster.
     */
    LIST_ORDERS: "MAILBLUSTER_LIST_ORDERS",
    /**
     * Tool to list all products. use when you need to retrieve products with optional pagination, sorting, or filtering.
     */
    LIST_PRODUCTS: "MAILBLUSTER_LIST_PRODUCTS",
    /**
     * Tool to list all custom fields. use when you need to retrieve all defined custom fields after authenticating with mailbluster.
     */
    MAILBLUSTER_LIST_FIELDS: "MAILBLUSTER_MAILBLUSTER_LIST_FIELDS",
    /**
     * Tool to update a product in mailbluster by its id. use after confirming the product id to modify attributes.
     */
    UPDATE_PRODUCT: "MAILBLUSTER_UPDATE_PRODUCT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAILBLUSTER".
 */
export type MAILBLUSTER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAILBLUSTER".
 */
export type MAILBLUSTER_TRIGGER_EVENTS = {}
