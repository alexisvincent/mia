// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_CUSTOMERS_LIST tool input.
 */
type HOTSPOTSYSTEM_CUSTOMERS_LIST_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of field names to include in the response.
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Limits number of returned objects; must be >= 1.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Start index of returned range; must be >= 0.
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort by any field; prepend '-' for descending order.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_CUSTOMERS_LIST tool output.
 */
type HOTSPOTSYSTEM_CUSTOMERS_LIST_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the API
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier returned in response headers, if available
   * @default null
   */
  request_id: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_CUSTOMERS_LIST_BY_LOCATION tool input.
 */
type HOTSPOTSYSTEM_CUSTOMERS_LIST_BY_LOCATION_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to include in the response (e.g., 'id,email,name')
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Number of items to return per page; must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Location Id
   * @description ID of the location
   */
  location_id?: string;
  /**
   * Offset
   * @description Zero-based page index when paginating; must be >= 0
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Property name to sort by; prepend '-' for descending order (e.g., '-registered_at')
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_CUSTOMERS_LIST_BY_LOCATION tool output.
 */
type HOTSPOTSYSTEM_CUSTOMERS_LIST_BY_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the API
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier returned in response headers, if available
   * @default null
   */
  request_id: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_GENERATE_VOUCHER_V1 tool input.
 */
type HOTSPOTSYSTEM_GENERATE_VOUCHER_V1_INPUT = {
  /**
   * Format
   * @description Response format, either 'json' or 'xml'. Defaults to 'json'.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Location Id
   * @description ID of the location from which voucher credits will be deducted.
   */
  location_id?: string;
  /**
   * Package
   * @description Custom package ID defining voucher parameters. Defaults to the location's default free access if omitted.
   * @default null
   */
  package: string | null;
  /**
   * Validity
   * @description Location ID or location group ID where the voucher can be activated. Defaults to the same location if omitted.
   * @default null
   */
  validity: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_GENERATE_VOUCHER_V1 tool output.
 */
type HOTSPOTSYSTEM_GENERATE_VOUCHER_V1_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Code
       * @description Generated access voucher code.
       */
      access_code: string;
      /**
       * Success
       * @description Indicates if voucher generation was successful.
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
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_LOCATIONS_LIST tool input.
 */
type HOTSPOTSYSTEM_LOCATIONS_LIST_INPUT = {
  /**
   * Fields
   * @description Comma-separated location property names to include in the response.
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Number of items to return per page; must be >= 1.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based page offset; must be >= 0.
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Property name to sort by; prepend '-' for descending order.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_LOCATIONS_LIST tool output.
 */
type HOTSPOTSYSTEM_LOCATIONS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of location objects
       */
      items: ({
          /**
           * Id
           * @description Unique identifier of the location
           */
          id: string;
          /**
           * Name
           * @description Name of the location
           */
          name: string;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Metadata
       * @description Paging metadata
       */
      metadata: {
          /**
           * Total Count
           * @description Total number of locations available
           */
          total_count: number;
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
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_MISC_PING tool input.
 */
type HOTSPOTSYSTEM_MISC_PING_INPUT = {
  /**
   * Echo
   * @description Optional echo value sent as query parameter for testing; the API ignores it.
   * @default null
   */
  echo: string | null;
  /**
   * Q
   * @description Additional optional query parameter for edge-case testing (unicode/special chars).
   * @default null
   */
  q: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_MISC_PING tool output.
 */
type HOTSPOTSYSTEM_MISC_PING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ping
       * @description Echo 'pong' when API is reachable
       */
      ping: string;
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
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_SUBSCRIBERS_LIST tool input.
 */
type HOTSPOTSYSTEM_SUBSCRIBERS_LIST_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of subscriber fields to include in the response (e.g., 'id,email,name').
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Number of items to return per page; must be >= 1.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based page index when paginating; must be >= 0.
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Property name to sort by; prepend '-' for descending order (e.g., '-registered_at').
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_SUBSCRIBERS_LIST tool output.
 */
type HOTSPOTSYSTEM_SUBSCRIBERS_LIST_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the API.
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier returned in response headers, if available.
   * @default null
   */
  request_id: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API.
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_SUBSCRIBERS_LIST_BY_LOCATION tool input.
 */
type HOTSPOTSYSTEM_SUBSCRIBERS_LIST_BY_LOCATION_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to include in the response (e.g., 'id,email,name')
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Number of items to return per page; must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Location Id
   * @description ID of the location
   */
  location_id?: string;
  /**
   * Offset
   * @description Zero-based page index when paginating; must be >= 0
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Property name to sort by; prepend '-' for descending order (e.g., '-registered_at')
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_SUBSCRIBERS_LIST_BY_LOCATION tool output.
 */
type HOTSPOTSYSTEM_SUBSCRIBERS_LIST_BY_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the API
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier returned in response headers, if available
   * @default null
   */
  request_id: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC tool input.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of field names to include in the response.
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Maximum number of items to return; must be >= 1.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based offset for pagination; must be >= 0.
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort by any field; prepend '-' for descending order.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC tool output.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the API
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier returned in response headers, if available
   * @default null
   */
  request_id: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC_BY_LOCATION tool input.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC_BY_LOCATION_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of field names to include in the response
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Maximum number of items to return; must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Location Id
   * @description ID of the location
   */
  location_id?: string;
  /**
   * Offset
   * @description Zero-based offset for pagination; must be >= 0
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort by any field; prepend '-' for descending order
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC_BY_LOCATION tool output.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC_BY_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the API
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier returned in response headers, if available
   * @default null
   */
  request_id: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_PAID_BY_LOCATION tool input.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_PAID_BY_LOCATION_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of field names to include in the response
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Maximum number of items to return; must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Location Id
   * @description ID of the location
   */
  location_id?: string;
  /**
   * Offset
   * @description Zero-based offset for pagination; must be >= 0
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort by any field; prepend '-' for descending order
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_PAID_BY_LOCATION tool output.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_PAID_BY_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the API
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier returned in response headers, if available
   * @default null
   */
  request_id: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL tool input.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of field names to include in the response.
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Maximum number of items to return; must be >= 1.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based offset for pagination; must be >= 0.
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort by any field; prepend '-' for descending order.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL tool output.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the API
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier returned in response headers, if available
   * @default null
   */
  request_id: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL_BY_LOCATION tool input.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL_BY_LOCATION_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of field names to include in the response
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Maximum number of items to return; must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Location Id
   * @description ID of the location
   */
  location_id?: string;
  /**
   * Offset
   * @description Zero-based offset for pagination; must be >= 0
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort by any field; prepend '-' for descending order
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL_BY_LOCATION tool output.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL_BY_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the API
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier returned in response headers, if available
   * @default null
   */
  request_id: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER tool input.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of field names to include in the response
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Maximum number of items to return; must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based offset for pagination; must be >= 0
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort by any field; prepend '-' for descending order
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER tool output.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the API
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier returned in response headers, if available
   * @default null
   */
  request_id: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER_BY_LOCATION tool input.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER_BY_LOCATION_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of field names to include in the response
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Maximum number of items to return; must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Location Id
   * @description ID of the location
   */
  location_id?: string;
  /**
   * Offset
   * @description Zero-based offset for pagination; must be >= 0
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort by any field; prepend '-' for descending order
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER_BY_LOCATION tool output.
 */
type HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER_BY_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from the API
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique request identifier returned in response headers, if available
   * @default null
   */
  request_id: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_VOUCHERS_LIST tool input.
 */
type HOTSPOTSYSTEM_VOUCHERS_LIST_INPUT = {
  /**
   * Fields
   * @description Comma-separated voucher property names to return.
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Number of items to return per page; must be >= 1.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based page index when paginated by limit; must be >= 0.
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Property name to sort by; prepend '-' for descending order.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_VOUCHERS_LIST tool output.
 */
type HOTSPOTSYSTEM_VOUCHERS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of voucher objects
       */
      items: {
          /**
           * Currency
           * @description Price currency
           */
          currency: string;
          /**
           * Limit Dl
           * @description Download limit in bytes; -1 if no location context set
           */
          limit_dl: number;
          /**
           * Limit Tl
           * @description Traffic limit in bytes; -1 if no location context set
           */
          limit_tl: number;
          /**
           * Limit Ul
           * @description Upload limit in bytes; -1 if no location context set
           */
          limit_ul: number;
          /**
           * Price Enduser
           * @description Price sold for
           */
          price_enduser: number;
          /**
           * Serial
           * @description Unique identifier of the voucher
           */
          serial: string;
          /**
           * Simultaneous Use
           * @description Allowed simultaneous connections
           */
          simultaneous_use: number;
          /**
           * Usage Exp
           * @description Expiration time left from today
           */
          usage_exp: string;
          /**
           * Validity
           * @description Usable minutes
           */
          validity: number;
          /**
           * Voucher Code
           * @description Additional code users must type
           */
          voucher_code: string;
      }[];
      /**
       * Metadata
       * @description Paging metadata
       */
      metadata: {
          /**
           * Total Count
           * @description Total number of vouchers available
           */
          total_count: number;
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
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_VOUCHERS_LIST_BY_LOCATION tool input.
 */
type HOTSPOTSYSTEM_VOUCHERS_LIST_BY_LOCATION_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of response fields to include.
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Number of items to return per page (minimum 1).
   * @default null
   */
  limit: number | null;
  /**
   * Location Id
   * @description ID of the location.
   */
  location_id?: string;
  /**
   * Offset
   * @description Zero-based page index used with limit (minimum 0).
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Field to sort by; prepend '-' for descending.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of HOTSPOTSYSTEM's HOTSPOTSYSTEM_VOUCHERS_LIST_BY_LOCATION tool output.
 */
type HOTSPOTSYSTEM_VOUCHERS_LIST_BY_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of vouchers.
       */
      items: {
          /**
           * Currency
           * @description Currency of the price.
           */
          currency: string;
          /**
           * Limit Dl
           * @description Download limit in bytes; -1 means no location context.
           */
          limit_dl: number;
          /**
           * Limit Tl
           * @description Traffic limit in bytes; -1 means no location context.
           */
          limit_tl: number;
          /**
           * Limit Ul
           * @description Upload limit in bytes; -1 means no location context.
           */
          limit_ul: number;
          /**
           * Price Enduser
           * @description Price the voucher was sold for.
           */
          price_enduser: number;
          /**
           * Serial
           * @description Unique identifier of the voucher.
           */
          serial: string;
          /**
           * Simultaneous Use
           * @description Number of simultaneous connections allowed.
           */
          simultaneous_use: number;
          /**
           * Usage Exp
           * @description Expiration time left from today.
           */
          usage_exp: string;
          /**
           * Validity
           * @description Minutes the voucher can be used.
           */
          validity: number;
          /**
           * Voucher Code
           * @description Additional code users must type.
           */
          voucher_code: string;
      }[];
      /**
       * Metadata
       * @description Collection metadata, including total_count.
       */
      metadata: {
          /**
           * Total Count
           * @description Total number of vouchers available.
           */
          total_count: number;
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
 * Type map of all available tool input types for toolkit "HOTSPOTSYSTEM".
 */
export type HOTSPOTSYSTEM_TOOL_INPUTS = {
  CUSTOMERS_LIST: HOTSPOTSYSTEM_CUSTOMERS_LIST_INPUT
  CUSTOMERS_LIST_BY_LOCATION: HOTSPOTSYSTEM_CUSTOMERS_LIST_BY_LOCATION_INPUT
  GENERATE_VOUCHER_V1: HOTSPOTSYSTEM_GENERATE_VOUCHER_V1_INPUT
  LOCATIONS_LIST: HOTSPOTSYSTEM_LOCATIONS_LIST_INPUT
  MISC_PING: HOTSPOTSYSTEM_MISC_PING_INPUT
  SUBSCRIBERS_LIST: HOTSPOTSYSTEM_SUBSCRIBERS_LIST_INPUT
  SUBSCRIBERS_LIST_BY_LOCATION: HOTSPOTSYSTEM_SUBSCRIBERS_LIST_BY_LOCATION_INPUT
  TRANSACTIONS_LIST_MAC: HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC_INPUT
  TRANSACTIONS_LIST_MAC_BY_LOCATION: HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC_BY_LOCATION_INPUT
  TRANSACTIONS_LIST_PAID_BY_LOCATION: HOTSPOTSYSTEM_TRANSACTIONS_LIST_PAID_BY_LOCATION_INPUT
  TRANSACTIONS_LIST_SOCIAL: HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL_INPUT
  TRANSACTIONS_LIST_SOCIAL_BY_LOCATION: HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL_BY_LOCATION_INPUT
  TRANSACTIONS_LIST_VOUCHER: HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER_INPUT
  TRANSACTIONS_LIST_VOUCHER_BY_LOCATION: HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER_BY_LOCATION_INPUT
  VOUCHERS_LIST: HOTSPOTSYSTEM_VOUCHERS_LIST_INPUT
  VOUCHERS_LIST_BY_LOCATION: HOTSPOTSYSTEM_VOUCHERS_LIST_BY_LOCATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HOTSPOTSYSTEM".
 */
export type HOTSPOTSYSTEM_TOOL_OUTPUTS = {
  CUSTOMERS_LIST: HOTSPOTSYSTEM_CUSTOMERS_LIST_OUTPUT
  CUSTOMERS_LIST_BY_LOCATION: HOTSPOTSYSTEM_CUSTOMERS_LIST_BY_LOCATION_OUTPUT
  GENERATE_VOUCHER_V1: HOTSPOTSYSTEM_GENERATE_VOUCHER_V1_OUTPUT
  LOCATIONS_LIST: HOTSPOTSYSTEM_LOCATIONS_LIST_OUTPUT
  MISC_PING: HOTSPOTSYSTEM_MISC_PING_OUTPUT
  SUBSCRIBERS_LIST: HOTSPOTSYSTEM_SUBSCRIBERS_LIST_OUTPUT
  SUBSCRIBERS_LIST_BY_LOCATION: HOTSPOTSYSTEM_SUBSCRIBERS_LIST_BY_LOCATION_OUTPUT
  TRANSACTIONS_LIST_MAC: HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC_OUTPUT
  TRANSACTIONS_LIST_MAC_BY_LOCATION: HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC_BY_LOCATION_OUTPUT
  TRANSACTIONS_LIST_PAID_BY_LOCATION: HOTSPOTSYSTEM_TRANSACTIONS_LIST_PAID_BY_LOCATION_OUTPUT
  TRANSACTIONS_LIST_SOCIAL: HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL_OUTPUT
  TRANSACTIONS_LIST_SOCIAL_BY_LOCATION: HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL_BY_LOCATION_OUTPUT
  TRANSACTIONS_LIST_VOUCHER: HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER_OUTPUT
  TRANSACTIONS_LIST_VOUCHER_BY_LOCATION: HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER_BY_LOCATION_OUTPUT
  VOUCHERS_LIST: HOTSPOTSYSTEM_VOUCHERS_LIST_OUTPUT
  VOUCHERS_LIST_BY_LOCATION: HOTSPOTSYSTEM_VOUCHERS_LIST_BY_LOCATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HOTSPOTSYSTEM toolkit.
 */
export const HOTSPOTSYSTEM = {
  slug: "hotspotsystem",
  tools: {
    /**
     * Tool to list customers. Use when you need to retrieve customers with optional pagination, sorting, and field selection.
     */
    CUSTOMERS_LIST: "HOTSPOTSYSTEM_CUSTOMERS_LIST",
    /**
     * Tool to list customers by location. Use when you need to retrieve customers for a specific location with optional field selection, sorting, and pagination.
     */
    CUSTOMERS_LIST_BY_LOCATION: "HOTSPOTSYSTEM_CUSTOMERS_LIST_BY_LOCATION",
    /**
     * Tool to generate an access voucher on the fly. Use when you need a single-use voucher for a specified location after ensuring sufficient credits.
     */
    GENERATE_VOUCHER_V1: "HOTSPOTSYSTEM_GENERATE_VOUCHER_V1",
    /**
     * Tool to list the resource owner's locations. Use when you need to retrieve locations with optional filtering, sorting, or pagination.
     */
    LOCATIONS_LIST: "HOTSPOTSYSTEM_LOCATIONS_LIST",
    /**
     * Tool to perform health check against the HotspotSystem API. Use when verifying connectivity and availability.
     */
    MISC_PING: "HOTSPOTSYSTEM_MISC_PING",
    /**
     * Tool to list newsletter subscribers. Use when you need to retrieve subscribers with optional field selection, sorting, and pagination.
     */
    SUBSCRIBERS_LIST: "HOTSPOTSYSTEM_SUBSCRIBERS_LIST",
    /**
     * Tool to list subscribers by location. Use when you need to retrieve subscribers for a specific location with optional field selection, sorting, and pagination.
     */
    SUBSCRIBERS_LIST_BY_LOCATION: "HOTSPOTSYSTEM_SUBSCRIBERS_LIST_BY_LOCATION",
    /**
     * Tool to list MAC-based transactions. Use when you need to retrieve MAC transaction records with optional pagination and sorting.
     */
    TRANSACTIONS_LIST_MAC: "HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC",
    /**
     * Tool to list MAC transactions by location. Use when you need to retrieve MAC transaction records for a specific location with optional pagination and sorting.
     */
    TRANSACTIONS_LIST_MAC_BY_LOCATION: "HOTSPOTSYSTEM_TRANSACTIONS_LIST_MAC_BY_LOCATION",
    /**
     * Tool to list paid transactions by location. Use when you need to retrieve paid transaction records for a specific location with optional pagination and sorting.
     */
    TRANSACTIONS_LIST_PAID_BY_LOCATION: "HOTSPOTSYSTEM_TRANSACTIONS_LIST_PAID_BY_LOCATION",
    /**
     * Tool to list social transactions. Use when you need to retrieve social transaction records with optional pagination and sorting.
     */
    TRANSACTIONS_LIST_SOCIAL: "HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL",
    /**
     * Tool to list social transactions by location. Use when you need to retrieve social transaction records for a specific location with optional pagination and sorting.
     */
    TRANSACTIONS_LIST_SOCIAL_BY_LOCATION: "HOTSPOTSYSTEM_TRANSACTIONS_LIST_SOCIAL_BY_LOCATION",
    /**
     * Tool to list voucher transactions globally across all locations.
     */
    TRANSACTIONS_LIST_VOUCHER: "HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER",
    /**
     * Tool to list voucher transactions by location. Use when you need to retrieve voucher transaction records for a specific location with optional pagination and sorting.
     */
    TRANSACTIONS_LIST_VOUCHER_BY_LOCATION: "HOTSPOTSYSTEM_TRANSACTIONS_LIST_VOUCHER_BY_LOCATION",
    /**
     * Tool to list the resource owner's vouchers across all locations. Use when you need to retrieve vouchers with optional filtering, sorting, or pagination.
     */
    VOUCHERS_LIST: "HOTSPOTSYSTEM_VOUCHERS_LIST",
    /**
     * Tool to list vouchers by location. Use when you need to retrieve vouchers for a specific location with optional filtering and pagination.
     */
    VOUCHERS_LIST_BY_LOCATION: "HOTSPOTSYSTEM_VOUCHERS_LIST_BY_LOCATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HOTSPOTSYSTEM".
 */
export type HOTSPOTSYSTEM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HOTSPOTSYSTEM".
 */
export type HOTSPOTSYSTEM_TRIGGER_EVENTS = {}
