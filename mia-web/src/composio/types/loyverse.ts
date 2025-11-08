// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LOYVERSE's LOYVERSE_CREATE_SUPPLIER tool input.
 */
type LOYVERSE_CREATE_SUPPLIER_INPUT = {
  /**
   * Address 1
   * @description Supplier address line 1
   * @default null
   */
  address_1: string | null;
  /**
   * Address 2
   * @description Supplier address line 2
   * @default null
   */
  address_2: string | null;
  /**
   * City
   * @description Supplier city
   * @default null
   */
  city: string | null;
  /**
   * Contact
   * @description Contact person at the supplier
   * @default null
   */
  contact: string | null;
  /**
   * Country Code
   * @description Supplier country code (ISO 3166-1 alpha-2)
   * @default null
   */
  country_code: string | null;
  /**
   * Email
   * @description Supplier email address
   * @default null
   */
  email: string | null;
  /**
   * Name
   * @description Name of the supplier
   */
  name?: string;
  /**
   * Note
   * @description Additional notes about the supplier
   * @default null
   */
  note: string | null;
  /**
   * Phone Number
   * @description Supplier phone number
   * @default null
   */
  phone_number: string | null;
  /**
   * Postal Code
   * @description Supplier postal code
   * @default null
   */
  postal_code: string | null;
  /**
   * Region
   * @description Supplier region (state or province)
   * @default null
   */
  region: string | null;
  /**
   * Website
   * @description Supplier website URL
   * @default null
   */
  website: string | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_CREATE_SUPPLIER tool output.
 */
type LOYVERSE_CREATE_SUPPLIER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address 1
       * @description Supplier address line 1
       * @default null
       */
      address_1: string | null;
      /**
       * Address 2
       * @description Supplier address line 2
       * @default null
       */
      address_2: string | null;
      /**
       * City
       * @description Supplier city
       * @default null
       */
      city: string | null;
      /**
       * Contact
       * @description Contact person at the supplier
       * @default null
       */
      contact: string | null;
      /**
       * Country Code
       * @description Supplier country code (ISO 3166-1 alpha-2)
       * @default null
       */
      country_code: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the supplier was created
       */
      created_at: string;
      /**
       * Email
       * @description Supplier email address
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the created supplier
       */
      id: string;
      /**
       * Name
       * @description Name of the supplier
       */
      name: string;
      /**
       * Note
       * @description Additional notes about the supplier
       * @default null
       */
      note: string | null;
      /**
       * Phone Number
       * @description Supplier phone number
       * @default null
       */
      phone_number: string | null;
      /**
       * Postal Code
       * @description Supplier postal code
       * @default null
       */
      postal_code: string | null;
      /**
       * Region
       * @description Supplier region (state or province)
       * @default null
       */
      region: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the supplier was last updated
       */
      updated_at: string;
      /**
       * Website
       * @description Supplier website URL
       * @default null
       */
      website: string | null;
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
 * Type of LOYVERSE's LOYVERSE_DELETE_CATEGORY tool input.
 */
type LOYVERSE_DELETE_CATEGORY_INPUT = {
  /**
   * Id
   * @description The unique ID of the category to delete.
   */
  id?: string;
};

/**
 * Type of LOYVERSE's LOYVERSE_DELETE_CATEGORY tool output.
 */
type LOYVERSE_DELETE_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted Object Ids
       * @description The list of deleted object ids
       */
      deleted_object_ids: string[];
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
 * Type of LOYVERSE's LOYVERSE_DELETE_SUPPLIER tool input.
 */
type LOYVERSE_DELETE_SUPPLIER_INPUT = {
  /**
   * Supplier Id
   * @description The unique ID of the supplier to delete.
   */
  supplier_id?: string;
};

/**
 * Type of LOYVERSE's LOYVERSE_DELETE_SUPPLIER tool output.
 */
type LOYVERSE_DELETE_SUPPLIER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted Object Ids
       * @description The list of deleted object ids
       */
      deleted_object_ids: string[];
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
 * Type of LOYVERSE's LOYVERSE_GET_CATEGORY tool input.
 */
type LOYVERSE_GET_CATEGORY_INPUT = {
  /**
   * Id
   * @description The unique ID of the category to retrieve.
   */
  id?: string;
};

/**
 * Type of LOYVERSE's LOYVERSE_GET_CATEGORY tool output.
 */
type LOYVERSE_GET_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description The category color (e.g., GREY, RED, PINK, ORANGE, GREEN, BLUE, PURPLE).
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description Timestamp when this category was created (ISO 8601 format).
       * @default null
       */
      created_at: string | null;
      /**
       * Deleted At
       * @description Timestamp when this category was deleted (ISO 8601 format), if applicable.
       * @default null
       */
      deleted_at: string | null;
      /**
       * Id
       * @description The unique ID of the category.
       */
      id: string;
      /**
       * Name
       * @description The name of the category.
       */
      name: string;
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
 * Type of LOYVERSE's LOYVERSE_GET_DISCOUNT tool input.
 */
type LOYVERSE_GET_DISCOUNT_INPUT = {
  /**
   * Discount Id
   * @description UUID of the discount to retrieve.
   */
  discount_id?: string;
};

/**
 * Type of LOYVERSE's LOYVERSE_GET_DISCOUNT tool output.
 */
type LOYVERSE_GET_DISCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when this discount was created (ISO 8601 format).
       */
      created_at: string;
      /**
       * Deleted At
       * @description Timestamp when this discount was deleted (ISO 8601 format), if applicable.
       * @default null
       */
      deleted_at: string | null;
      /**
       * Discount Amount
       * @description The discount value in money (only for FIXED_AMOUNT type).
       * @default null
       */
      discount_amount: number | null;
      /**
       * Discount Percent
       * @description The discount value in percent (only for percent-based discounts).
       * @default null
       */
      discount_percent: number | null;
      /**
       * Id
       * @description The unique ID of the discount.
       */
      id: string;
      /**
       * Name
       * @description The name of the discount.
       */
      name: string;
      /**
       * Restricted Access
       * @description If true, password verification is required to apply this discount.
       * @default false
       */
      restricted_access: boolean;
      /**
       * Stores
       * @description List of store IDs where this discount is available.
       */
      stores: string[];
      /**
       * Type
       * @description The type of the discount (e.g., FIXED_PERCENT, FIXED_AMOUNT, VARIABLE_PERCENT, VARIABLE_AMOUNT, DISCOUNT_BY_POINTS).
       */
      type: string;
      /**
       * Updated At
       * @description Timestamp when this discount was last updated (ISO 8601 format).
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
 * Type of LOYVERSE's LOYVERSE_GET_EMPLOYEE tool input.
 */
type LOYVERSE_GET_EMPLOYEE_INPUT = {
  /**
   * Id
   * @description The unique UUID of the employee to retrieve.
   */
  id?: string;
};

/**
 * Type of LOYVERSE's LOYVERSE_GET_EMPLOYEE tool output.
 */
type LOYVERSE_GET_EMPLOYEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when employee was created
       */
      created_at: string;
      /**
       * Deleted At
       * @description Timestamp when employee was deleted, if applicable
       * @default null
       */
      deleted_at: string | null;
      /**
       * Email
       * @description Employee's email address
       */
      email: string;
      /**
       * Id
       * @description Employee's UUID
       */
      id: string;
      /**
       * Is Owner
       * @description Whether the employee is owner
       */
      is_owner: boolean;
      /**
       * Name
       * @description Employee's name
       */
      name: string;
      /**
       * Phone Number
       * @description Employee's phone number
       * @default null
       */
      phone_number: string | null;
      /**
       * Stores
       * @description List of store IDs the employee belongs to
       */
      stores: string[];
      /**
       * Updated At
       * @description Timestamp when employee was last updated
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
 * Type of LOYVERSE's LOYVERSE_GET_JWKS tool input.
 */
type LOYVERSE_GET_JWKS_INPUT = object;

/**
 * Type of LOYVERSE's LOYVERSE_GET_JWKS tool output.
 */
type LOYVERSE_GET_JWKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Keys
       * @description Array of JSON Web Keys
       */
      keys: {
          /**
           * Alg
           * @description Algorithm (e.g., 'RS256')
           */
          alg: string;
          /**
           * E
           * @description Exponent for the RSA key (base64url-encoded)
           */
          e: string;
          /**
           * Kid
           * @description Key identifier
           */
          kid: string;
          /**
           * Kty
           * @description Key type (e.g., 'RSA')
           */
          kty: string;
          /**
           * N
           * @description Modulus value for the RSA key (base64url-encoded)
           */
          n: string;
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
 * Type of LOYVERSE's LOYVERSE_GET_MERCHANT_INFO tool input.
 */
type LOYVERSE_GET_MERCHANT_INFO_INPUT = object;

/**
 * Type of LOYVERSE's LOYVERSE_GET_MERCHANT_INFO tool output.
 */
type LOYVERSE_GET_MERCHANT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Business Name
       * @description The merchant business name.
       */
      business_name: string;
      /**
       * Country
       * @description Country code associated with the merchant account (ISO 3166-1 alpha-2).
       */
      country: string;
      /**
       * Created At
       * @description Timestamp when the merchant account was created (ISO 8601 format).
       */
      created_at: string;
      /**
       * Currency
       * @description Currency object with code and decimal places.
       */
      currency: {
          /**
           * Code
           * @description Currency code (e.g., 'USD').
           */
          code: string;
          /**
           * Decimal Places
           * @description Number of decimal places for the currency.
           */
          decimal_places: number;
      };
      /**
       * Email
       * @description The merchant email address.
       */
      email: string;
      /**
       * Id
       * @description The unique merchant ID (UUID).
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
 * Type of LOYVERSE's LOYVERSE_GET_OPEN_ID_CONFIGURATION tool input.
 */
type LOYVERSE_GET_OPEN_ID_CONFIGURATION_INPUT = object;

/**
 * Type of LOYVERSE's LOYVERSE_GET_OPEN_ID_CONFIGURATION tool output.
 */
type LOYVERSE_GET_OPEN_ID_CONFIGURATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorization Endpoint
       * @description URL of the authorization endpoint.
       */
      authorization_endpoint: string;
      /**
       * Issuer
       * @description The issuer identifier URL of the OpenID provider.
       */
      issuer: string;
      /**
       * Jwks Uri
       * @description URL of the JSON Web Key Set endpoint.
       */
      jwks_uri: string;
      /**
       * Response Types Supported
       * @description List of supported response types.
       */
      response_types_supported: string[];
      /**
       * Scopes Supported
       * @description List of supported scopes.
       */
      scopes_supported: string[];
      /**
       * Token Endpoint
       * @description URL of the token endpoint.
       */
      token_endpoint: string;
      /**
       * Userinfo Endpoint
       * @description URL of the userinfo endpoint.
       */
      userinfo_endpoint: string;
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
 * Type of LOYVERSE's LOYVERSE_GET_PAYMENT_TYPE tool input.
 */
type LOYVERSE_GET_PAYMENT_TYPE_INPUT = {
  /**
   * Payment Type Id
   * @description The unique ID of the payment type to retrieve.
   */
  payment_type_id?: string;
};

/**
 * Type of LOYVERSE's LOYVERSE_GET_PAYMENT_TYPE tool output.
 */
type LOYVERSE_GET_PAYMENT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when this payment type was created (ISO 8601 format).
       */
      created_at: string;
      /**
       * Deleted At
       * @description Timestamp when this payment type was deleted (ISO 8601 format), if applicable.
       * @default null
       */
      deleted_at: string | null;
      /**
       * Id
       * @description The unique ID of the payment type.
       */
      id: string;
      /**
       * Name
       * @description The name of the payment type.
       */
      name: string;
      /**
       * Stores
       * @description List of store IDs where this payment type is available.
       */
      stores: string[];
      /**
       * Type
       * @description The payment provider type (e.g., CASH, NONINTEGRATEDCARD, CHECK, etc.).
       */
      type: string;
      /**
       * Updated At
       * @description Timestamp when this payment type was last updated (ISO 8601 format).
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
 * Type of LOYVERSE's LOYVERSE_GET_STORE tool input.
 */
type LOYVERSE_GET_STORE_INPUT = {
  /**
   * Store Id
   * @description The unique ID of the store to retrieve.
   */
  store_id?: string;
};

/**
 * Type of LOYVERSE's LOYVERSE_GET_STORE tool output.
 */
type LOYVERSE_GET_STORE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The street address of the store.
       * @default null
       */
      address: string | null;
      /**
       * City
       * @description The city where the store is located.
       * @default null
       */
      city: string | null;
      /**
       * Country Code
       * @description The two-letter country code (ISO 3166-1 alpha-2) of the store.
       * @default null
       */
      country_code: string | null;
      /**
       * Created At
       * @description Timestamp when this store was created (ISO 8601 format).
       */
      created_at: string;
      /**
       * Deleted At
       * @description Timestamp when this store was deleted (ISO 8601 format), if applicable.
       * @default null
       */
      deleted_at: string | null;
      /**
       * Description
       * @description Optional description of the store.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The unique ID of the store.
       */
      id: string;
      /**
       * Name
       * @description The name of the store.
       */
      name: string;
      /**
       * Phone Number
       * @description The contact phone number of the store.
       * @default null
       */
      phone_number: string | null;
      /**
       * Postal Code
       * @description The postal code of the store.
       * @default null
       */
      postal_code: string | null;
      /**
       * Region
       * @description The state or region where the store is located.
       * @default null
       */
      region: string | null;
      /**
       * Updated At
       * @description Timestamp when this store was last updated (ISO 8601 format).
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
 * Type of LOYVERSE's LOYVERSE_LIST_CATEGORIES tool input.
 */
type LOYVERSE_LIST_CATEGORIES_INPUT = {
  /**
   * Categories Ids
   * @description Comma-separated list of category IDs to filter by
   * @default null
   */
  categories_ids: string | null;
  /**
   * Cursor
   * @description Cursor for pagination from a previous response
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of categories to return (1-250). Default is 50.
   * @default null
   */
  limit: number | null;
  /**
   * Show Deleted
   * @description Include soft-deleted categories when true
   * @default null
   */
  show_deleted: boolean | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_CATEGORIES tool output.
 */
type LOYVERSE_LIST_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of categories sorted by created_at descending
       */
      categories: {
          /**
           * Color
           * @description Category color (GREY, RED, PINK, ORANGE, GREEN, BLUE, PURPLE)
           * @default null
           */
          color: string | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the category was created
           */
          created_at: string;
          /**
           * Deleted At
           * @description ISO 8601 timestamp when the category was soft-deleted, if applicable
           * @default null
           */
          deleted_at: string | null;
          /**
           * Id
           * @description UUID of the category
           */
          id: string;
          /**
           * Name
           * @description Name of the category
           */
          name: string;
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
 * Type of LOYVERSE's LOYVERSE_LIST_CUSTOMERS tool input.
 */
type LOYVERSE_LIST_CUSTOMERS_INPUT = {
  /**
   * Customer Id
   * @description Filter by a specific customer ID.
   * @default null
   */
  customer_id: string | null;
  /**
   * Limit
   * @description Maximum number of customers to return (1-250).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of customers to skip for pagination.
   * @default null
   */
  offset: number | null;
  /**
   * Phone Number
   * @description Filter by customer's phone number (include country code).
   * @default null
   */
  phone_number: string | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_CUSTOMERS tool output.
 */
type LOYVERSE_LIST_CUSTOMERS_OUTPUT = {
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
           * Balance
           * @description Current loyalty balance.
           */
          balance: number;
          /**
           * Created At
           * @description Timestamp when created (ISO 8601).
           */
          created_at: string;
          /**
           * Customer Code
           * @description Unique loyalty code.
           * @default null
           */
          customer_code: string | null;
          /**
           * Email
           * @description Customer's email address.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique customer ID.
           */
          id: string;
          /**
           * Name
           * @description Customer's name.
           * @default null
           */
          name: string | null;
          /**
           * Phone Number
           * @description Customer's phone number.
           * @default null
           */
          phone_number: string | null;
          /**
           * Spend
           * @description Total spend by the customer.
           */
          spend: number;
          /**
           * Updated At
           * @description Timestamp when last updated (ISO 8601).
           */
          updated_at: string;
          /**
           * Visits Count
           * @description Total number of visits.
           */
          visits_count: number;
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
 * Type of LOYVERSE's LOYVERSE_LIST_DISCOUNTS tool input.
 */
type LOYVERSE_LIST_DISCOUNTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of discounts to return (>=1).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of discounts to skip for pagination (>=0).
   * @default null
   */
  offset: number | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_DISCOUNTS tool output.
 */
type LOYVERSE_LIST_DISCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Discounts
       * @description List of discounts.
       */
      discounts: {
          /**
           * Archived
           * @description True if this discount is archived, if provided.
           * @default null
           */
          archived: boolean | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when created.
           */
          created_at: string;
          /**
           * Deleted At
           * @description ISO 8601 timestamp when deleted, if applicable.
           * @default null
           */
          deleted_at: string | null;
          /**
           * Id
           * @description Unique identifier of the discount.
           */
          id: string;
          /**
           * Name
           * @description Name of the discount.
           */
          name: string;
          /**
           * Restricted Access
           * @description True if discount has restricted access.
           * @default null
           */
          restricted_access: boolean | null;
          /**
           * Stores
           * @description List of store IDs where this discount is available.
           * @default null
           */
          stores: string[] | null;
          /**
           * Type
           * @description Type of discount as returned by the API.
           */
          type: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when last updated.
           */
          updated_at: string;
          /**
           * Value
           * @description Numeric value of the discount if applicable.
           * @default null
           */
          value: number | null;
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
 * Type of LOYVERSE's LOYVERSE_LIST_EMPLOYEES tool input.
 */
type LOYVERSE_LIST_EMPLOYEES_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination; pass value from previous response to fetch next page
   * @default null
   */
  cursor: string | null;
  /**
   * Employee Ids
   * @description Comma-separated list of employee UUIDs to filter results
   * @default null
   */
  employee_ids: string | null;
  /**
   * Limit
   * @description Number of employees to return per page
   * @default null
   */
  limit: number | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_EMPLOYEES tool output.
 */
type LOYVERSE_LIST_EMPLOYEES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Cursor for the next page of results
       * @default null
       */
      cursor: string | null;
      /**
       * Employees
       * @description List of employee records
       */
      employees: {
          /**
           * Created At
           * @description Timestamp when the employee was created
           */
          created_at: string;
          /**
           * Deleted At
           * @description Timestamp when the employee was deleted, if applicable
           * @default null
           */
          deleted_at: string | null;
          /**
           * Email
           * @description Email address of the employee
           */
          email: string;
          /**
           * Id
           * @description Unique employee UUID
           */
          id: string;
          /**
           * Is Owner
           * @description Whether the employee is the owner
           */
          is_owner: boolean;
          /**
           * Name
           * @description Full name of the employee
           */
          name: string;
          /**
           * Phone Number
           * @description Phone number of the employee
           * @default null
           */
          phone_number: string | null;
          /**
           * Stores
           * @description List of store UUIDs this employee has access to
           */
          stores: string[];
          /**
           * Updated At
           * @description Timestamp when the employee was last updated
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
 * Type of LOYVERSE's LOYVERSE_LIST_ITEMS tool input.
 */
type LOYVERSE_LIST_ITEMS_INPUT = {
  /**
   * After
   * @description Cursor for pagination; returns items after this cursor.
   * @default null
   */
  after: string | null;
  /**
   * Category Id
   * @description Filter items by category ID.
   * @default null
   */
  category_id: string | null;
  /**
   * Limit
   * @description Maximum number of items to return (1-250).
   * @default null
   */
  limit: number | null;
  /**
   * Location Id
   * @description Filter items by a specific location ID.
   * @default null
   */
  location_id: string | null;
  /**
   * Modifier Id
   * @description Return only items that have this modifier ID attached.
   * @default null
   */
  modifier_id: string | null;
  /**
   * Updated At Max
   * @description Only items updated before this ISO 8601 date/time.
   * @default null
   */
  updated_at_max: string | null;
  /**
   * Updated At Min
   * @description Only items updated after this ISO 8601 date/time.
   * @default null
   */
  updated_at_min: string | null;
  /**
   * Vendor Id
   * @description Filter items by vendor ID.
   * @default null
   */
  vendor_id: string | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_ITEMS tool output.
 */
type LOYVERSE_LIST_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Cursor to retrieve the next page of results.
       * @default null
       */
      cursor: string | null;
      /**
       * Items
       * @description List of item objects.
       */
      items: {
          /**
           * Category Id
           * @description Category ID the item belongs to.
           * @default null
           */
          category_id: string | null;
          /**
           * Category Name
           * @description Category name the item belongs to.
           * @default null
           */
          category_name: string | null;
          /**
           * Cost
           * @description Cost of the item.
           * @default null
           */
          cost: number | null;
          /**
           * Id
           * @description Unique ID of the item.
           */
          id: string;
          /**
           * In Stock
           * @description True if the item is currently in stock.
           */
          in_stock: boolean;
          /**
           * Name
           * @description Name of the item.
           */
          name: string;
          /**
           * Options
           * @description Variants or options associated with the item, if any.
           * @default null
           */
          options: {
              [key: string]: unknown;
          } | null;
          /**
           * Price
           * @description Price of the item.
           */
          price: number;
          /**
           * Quantity
           * @description Quantity in stock.
           */
          quantity: number;
          /**
           * Sku
           * @description Stock keeping unit.
           * @default null
           */
          sku: string | null;
          /**
           * Sold By
           * @description Unit used for sale, e.g., 'qty' or 'weight'.
           * @default null
           */
          sold_by: string | null;
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
 * Type of LOYVERSE's LOYVERSE_LIST_MODIFIERS tool input.
 */
type LOYVERSE_LIST_MODIFIERS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination; use value from previous response to fetch next page
   * @default null
   */
  cursor: string | null;
  /**
   * Ids
   * @description Comma-separated list of modifier IDs to filter results
   * @default null
   */
  ids: string | null;
  /**
   * Limit
   * @description Number of modifiers to return per page (1-250)
   * @default null
   */
  limit: number | null;
  /**
   * Updated At Max
   * @description Filter modifiers updated before this datetime (ISO 8601)
   * @default null
   */
  updated_at_max: string | null;
  /**
   * Updated At Min
   * @description Filter modifiers updated after this datetime (ISO 8601)
   * @default null
   */
  updated_at_min: string | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_MODIFIERS tool output.
 */
type LOYVERSE_LIST_MODIFIERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Cursor for the next page of results.
       * @default null
       */
      cursor: string | null;
      /**
       * Modifiers
       * @description List of modifier records.
       */
      modifiers: {
          /**
           * Id
           * @description Unique ID of the modifier.
           */
          id: string;
          /**
           * Name
           * @description Name of the modifier.
           */
          name: string;
          /**
           * Options
           * @description List of options associated with the modifier.
           */
          options: {
              /**
               * Id
               * @description Unique ID of the option.
               */
              id: string;
              /**
               * Name
               * @description Name of the option.
               */
              name: string;
              /**
               * Price
               * @description Price associated with the option.
               */
              price: number;
          }[];
          /**
           * Updated At
           * @description Timestamp when last updated (ISO 8601).
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
 * Type of LOYVERSE's LOYVERSE_LIST_PAYMENT_TYPES tool input.
 */
type LOYVERSE_LIST_PAYMENT_TYPES_INPUT = {
  /**
   * Created At Max
   * @description Only include payment types created at or before this ISO 8601 timestamp
   * @default null
   */
  created_at_max: string | null;
  /**
   * Created At Min
   * @description Only include payment types created at or after this ISO 8601 timestamp
   * @default null
   */
  created_at_min: string | null;
  /**
   * Cursor
   * @description Cursor for pagination; pass value from previous response to retrieve next page
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of payment types to return (1-250)
   * @default null
   */
  limit: number | null;
  /**
   * Payment Type Ids
   * @description Comma-separated list of payment type UUIDs to filter results
   * @default null
   */
  payment_type_ids: string | null;
  /**
   * Show Deleted
   * @description Whether to include soft-deleted payment types
   * @default false
   */
  show_deleted: boolean;
  /**
   * Updated At Max
   * @description Only include payment types updated at or before this ISO 8601 timestamp
   * @default null
   */
  updated_at_max: string | null;
  /**
   * Updated At Min
   * @description Only include payment types updated at or after this ISO 8601 timestamp
   * @default null
   */
  updated_at_min: string | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_PAYMENT_TYPES tool output.
 */
type LOYVERSE_LIST_PAYMENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Cursor for the next page of results
       * @default null
       */
      cursor: string | null;
      /**
       * Payment Types
       * @description List of payment type objects
       */
      payment_types: {
          /**
           * Created At
           * @description ISO 8601 timestamp when this payment type was created
           */
          created_at: string;
          /**
           * Deleted At
           * @description ISO 8601 timestamp when this payment type was soft-deleted, if applicable
           * @default null
           */
          deleted_at: string | null;
          /**
           * Id
           * @description Unique payment type UUID
           */
          id: string;
          /**
           * Name
           * @description Name of the payment type
           */
          name: string;
          /**
           * Stores
           * @description List of store IDs where this payment type is available
           */
          stores: string[];
          /**
           * Type
           * @description The payment provider type (e.g., CASH, NONINTEGRATEDCARD, CHECK, etc.)
           */
          type: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when this payment type was last updated
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
 * Type of LOYVERSE's LOYVERSE_LIST_RECEIPTS tool input.
 */
type LOYVERSE_LIST_RECEIPTS_INPUT = {
  /**
   * Before Receipt Number
   * @description Return only receipts before this receipt number
   * @default null
   */
  before_receipt_number: string | null;
  /**
   * Created At Max
   * @description Include receipts created before this ISO 8601 date/time
   * @default null
   */
  created_at_max: string | null;
  /**
   * Created At Min
   * @description Include receipts created at or after this ISO 8601 date/time
   * @default null
   */
  created_at_min: string | null;
  /**
   * Cursor
   * @description Cursor for pagination; pass value from previous response to fetch next page
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of receipts to return (1-250)
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Filter receipts by order ID
   * @default null
   */
  order: string | null;
  /**
   * Receipt Numbers
   * @description Comma-separated list of receipt numbers to filter results
   * @default null
   */
  receipt_numbers: string | null;
  /**
   * Since Receipt Number
   * @description Return only receipts after this receipt number
   * @default null
   */
  since_receipt_number: string | null;
  /**
   * Source
   * @description Filter receipts by source application
   * @default null
   */
  source: string | null;
  /**
   * Store Id
   * @description Filter receipts by store ID
   * @default null
   */
  store_id: string | null;
  /**
   * Updated At Max
   * @description Include receipts updated before this ISO 8601 date/time
   * @default null
   */
  updated_at_max: string | null;
  /**
   * Updated At Min
   * @description Include receipts updated at or after this ISO 8601 date/time
   * @default null
   */
  updated_at_min: string | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_RECEIPTS tool output.
 */
type LOYVERSE_LIST_RECEIPTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Cursor to retrieve the next page of results
       * @default null
       */
      cursor: string | null;
      /**
       * Receipts
       * @description List of receipt objects.
       */
      receipts: {
          /**
           * Cancelled At
           * @description Timestamp when receipt was cancelled, if applicable (ISO 8601)
           * @default null
           */
          cancelled_at: string | null;
          /**
           * Created At
           * @description Timestamp when receipt was created (ISO 8601)
           */
          created_at: string;
          /**
           * Customer Id
           * @description Identifier of the customer associated with this receipt
           * @default null
           */
          customer_id: string | null;
          /**
           * Dining Option
           * @description Dining option selected (e.g., 'Dine in')
           */
          dining_option: string;
          /**
           * Employee Id
           * @description Identifier of the employee who processed the receipt
           */
          employee_id: string;
          /**
           * Line Items
           * @description Detailed line items included in the receipt
           */
          line_items: {
              /**
               * Cost
               * @description Cost per unit of this line item
               */
              cost: number;
              /**
               * Cost Total
               * @description Total cost for this line item
               */
              cost_total: number;
              /**
               * Gross Total Money
               * @description Gross total before discounts
               */
              gross_total_money: number;
              /**
               * Id
               * @description Identifier of the line item entry
               */
              id: string;
              /**
               * Item Id
               * @description Item identifier for this line
               */
              item_id: string;
              /**
               * Item Name
               * @description Name of the item on this line
               */
              item_name: string;
              /**
               * Line Discounts
               * @description Discounts applied to this line item
               */
              line_discounts: {
                  /**
                   * Id
                   * @description Identifier of the discount applied to this line item
                   */
                  id: string;
                  /**
                   * Money Amount
                   * @description Monetary amount of discount on this line item
                   */
                  money_amount: number;
                  /**
                   * Name
                   * @description Name of the discount on this line item
                   */
                  name: string;
                  /**
                   * Percentage
                   * @description Percentage of discount on this line item, if applicable
                   * @default null
                   */
                  percentage: number | null;
                  /**
                   * Type
                   * @description Type of discount on this line item
                   * @enum {string}
                   */
                  type: "FIXED_PERCENT" | "FIXED_AMOUNT" | "VARIABLE_PERCENT" | "VARIABLE_AMOUNT" | "DISCOUNT_BY_POINTS";
              }[];
              /**
               * Line Modifiers
               * @description Modifiers applied to this line item
               */
              line_modifiers: {
                  /**
                   * Id
                   * @description Identifier of the modifier entry
                   */
                  id: string;
                  /**
                   * Modifier Option Id
                   * @description Modifier option identifier applied to this line
                   */
                  modifier_option_id: string;
                  /**
                   * Money Amount
                   * @description Total modifier amount on this line
                   */
                  money_amount: number;
                  /**
                   * Name
                   * @description Name of the modifier group
                   */
                  name: string;
                  /**
                   * Option
                   * @description Selected modifier option name
                   */
                  option: string;
                  /**
                   * Price
                   * @description Modifier unit price
                   */
                  price: number;
              }[];
              /**
               * Line Note
               * @description Additional notes for this line item
               * @default null
               */
              line_note: string | null;
              /**
               * Line Taxes
               * @description Taxes applied to this line item
               */
              line_taxes: {
                  /**
                   * Id
                   * @description Identifier of the tax applied to this line item
                   */
                  id: string;
                  /**
                   * Money Amount
                   * @description Tax amount for this line item
                   */
                  money_amount: number;
                  /**
                   * Name
                   * @description Name of the tax for this line item
                   */
                  name: string;
                  /**
                   * Rate
                   * @description Tax rate percentage for this line item
                   */
                  rate: number;
                  /**
                   * Type
                   * @description Tax application type for this line item
                   * @enum {string}
                   */
                  type: "INCLUDED" | "ADDED";
              }[];
              /**
               * Price
               * @description Unit price on this line
               */
              price: number;
              /**
               * Quantity
               * @description Quantity sold on this line
               */
              quantity: number;
              /**
               * Sku
               * @description SKU of the variant
               */
              sku: string;
              /**
               * Total Discount
               * @description Total discount amount on this line
               */
              total_discount: number;
              /**
               * Total Money
               * @description Total after discounts and taxes
               */
              total_money: number;
              /**
               * Variant Id
               * @description Variant identifier for this line
               */
              variant_id: string;
              /**
               * Variant Name
               * @description Name of the variant, if any
               * @default null
               */
              variant_name: string | null;
          }[];
          /**
           * Note
           * @description Receipt's note
           * @default null
           */
          note: string | null;
          /**
           * Order
           * @description Order number or name associated with this receipt
           * @default null
           */
          order: string | null;
          /**
           * Payments
           * @description Payment methods and amounts used for this receipt
           */
          payments: {
              /**
               * Money Amount
               * @description Amount paid by this method
               */
              money_amount: number;
              /**
               * Name
               * @description Name of the payment method
               */
              name: string;
              /**
               * Paid At
               * @description Timestamp when payment was made (ISO 8601)
               */
              paid_at: string;
              /**
               * PaymentDetails
               * @description Additional details for a payment.
               * @default null
               */
              payment_details: {
                  /**
                   * Authorization Code
                   * @description Authorization code for integrated payments
                   * @default null
                   */
                  authorization_code: string | null;
                  /**
                   * Card Company
                   * @description Card company name, if applicable
                   * @default null
                   */
                  card_company: string | null;
                  /**
                   * Card Number
                   * @description Masked card number, if applicable
                   * @default null
                   */
                  card_number: string | null;
                  /**
                   * Entry Method
                   * @description Method used to enter payment details
                   * @default null
                   */
                  entry_method: string | null;
                  /**
                   * Reference Id
                   * @description Reference ID returned by payment processor
                   * @default null
                   */
                  reference_id: number | null;
              } | null;
              /**
               * Payment Type Id
               * @description Type identifier of the payment method
               */
              payment_type_id: string;
              /**
               * Type
               * @description Payment type code
               */
              type: string;
          }[];
          /**
           * Points Balance
           * @description Customer points balance after this receipt
           */
          points_balance: number;
          /**
           * Points Deducted
           * @description Loyalty points deducted by this receipt
           */
          points_deducted: number;
          /**
           * Points Earned
           * @description Loyalty points awarded for this receipt
           */
          points_earned: number;
          /**
           * Pos Device Id
           * @description Identifier of the POS device used
           */
          pos_device_id: string;
          /**
           * Receipt Date
           * @description Timestamp representing the receipt date (ISO 8601)
           */
          receipt_date: string;
          /**
           * Receipt Number
           * @description Unique internal identifier of the receipt
           */
          receipt_number: string;
          /**
           * Receipt Type
           * @description Type of the receipt: sale or refund
           * @enum {string}
           */
          receipt_type: "SALE" | "REFUND";
          /**
           * Refund For
           * @description Original sales receipt number for this refund
           * @default null
           */
          refund_for: string | null;
          /**
           * Source
           * @description Source application or POS that created the receipt
           */
          source: string;
          /**
           * Store Id
           * @description Identifier of the store where receipt was paid
           */
          store_id: string;
          /**
           * Surcharge
           * @description Total surcharge amount on the receipt
           */
          surcharge: number;
          /**
           * Tip
           * @description Total tip amount on the receipt
           */
          tip: number;
          /**
           * Total Discount
           * @description Total discount amount on the receipt
           */
          total_discount: number;
          /**
           * Total Discounts
           * @description Breakdown of discounts applied at the receipt level
           */
          total_discounts: {
              /**
               * Id
               * @description Unique identifier of the discount
               */
              id: string;
              /**
               * Money Amount
               * @description Monetary amount of the discount
               */
              money_amount: number;
              /**
               * Name
               * @description Name of the discount
               */
              name: string;
              /**
               * Percentage
               * @description Percentage value of the discount, if applicable
               * @default null
               */
              percentage: number | null;
              /**
               * Type
               * @description Type of the discount applied
               * @enum {string}
               */
              type: "FIXED_PERCENT" | "FIXED_AMOUNT" | "VARIABLE_PERCENT" | "VARIABLE_AMOUNT" | "DISCOUNT_BY_POINTS";
          }[];
          /**
           * Total Money
           * @description Total paid (or refunded) including discounts, taxes, tips
           */
          total_money: number;
          /**
           * Total Tax
           * @description Total tax amount on the receipt
           */
          total_tax: number;
          /**
           * Total Taxes
           * @description Breakdown of taxes applied at the receipt level
           */
          total_taxes: {
              /**
               * Id
               * @description Unique identifier of the tax line
               */
              id: string;
              /**
               * Money Amount
               * @description Monetary amount of this tax line
               */
              money_amount: number;
              /**
               * Name
               * @description Name of the tax
               */
              name: string;
              /**
               * Rate
               * @description Tax rate percentage (e.g., 5.545)
               */
              rate: number;
              /**
               * Type
               * @description Tax application type: included in or added to price
               * @enum {string}
               */
              type: "INCLUDED" | "ADDED";
          }[];
          /**
           * Updated At
           * @description Timestamp when receipt was last updated (ISO 8601)
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
 * Type of LOYVERSE's LOYVERSE_LIST_SHIFTS tool input.
 */
type LOYVERSE_LIST_SHIFTS_INPUT = {
  /**
   * Created At Max
   * @description Show shifts opened before this date/time (ISO 8601)
   * @default null
   */
  created_at_max: string | null;
  /**
   * Created At Min
   * @description Show shifts opened at or after this date/time (ISO 8601)
   * @default null
   */
  created_at_min: string | null;
  /**
   * Cursor
   * @description Cursor for pagination; use the cursor from previous response to fetch next page
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of shifts to return (1-250)
   * @default null
   */
  limit: number | null;
  /**
   * Store Ids
   * @description Comma-separated list of store IDs to filter shifts
   * @default null
   */
  store_ids: string | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_SHIFTS tool output.
 */
type LOYVERSE_LIST_SHIFTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Cursor to retrieve the next page of results
       * @default null
       */
      cursor: string | null;
      /**
       * Shifts
       * @description List of shift objects
       */
      shifts: {
          /**
           * Actual Cash
           * @description Actual cash amount counted at the end of the shift
           */
          actual_cash: number;
          /**
           * Cash Movements
           * @description List of cash movements recorded during the shift
           */
          cash_movements: {
              /**
               * Comment
               * @description Comment for this cash movement
               */
              comment: string;
              /**
               * Created At
               * @description Timestamp when the cash movement was recorded (ISO 8601)
               */
              created_at: string;
              /**
               * Employee Id
               * @description Employee ID who performed the cash movement
               */
              employee_id: string;
              /**
               * Money Amount
               * @description Money amount moved in this action
               */
              money_amount: number;
              /**
               * Type
               * @description Type of cash movement (e.g., 'PAY_IN' or 'PAY_OUT')
               */
              type: string;
          }[];
          /**
           * Cash Payments
           * @description Total cash payments during the shift
           */
          cash_payments: number;
          /**
           * Cash Refunds
           * @description Total cash refunds during the shift
           */
          cash_refunds: number;
          /**
           * Closed At
           * @description Timestamp when the shift was closed (ISO 8601)
           * @default null
           */
          closed_at: string | null;
          /**
           * Closed By Employee
           * @description Employee ID who closed the shift
           * @default null
           */
          closed_by_employee: string | null;
          /**
           * Discounts
           * @description Total discounts amount during the shift
           */
          discounts: number;
          /**
           * Expected Cash
           * @description Expected cash amount at the end of the shift
           */
          expected_cash: number;
          /**
           * Gross Sales
           * @description Gross sales amount before discounts
           */
          gross_sales: number;
          /**
           * Id
           * @description Unique ID of the shift
           */
          id: string;
          /**
           * Net Sales
           * @description Net sales amount after discounts and refunds
           */
          net_sales: number;
          /**
           * Opened At
           * @description Timestamp when the shift was opened (ISO 8601)
           */
          opened_at: string;
          /**
           * Opened By Employee
           * @description Employee ID who opened the shift
           */
          opened_by_employee: string;
          /**
           * Paid In
           * @description Money amount added to the cash drawer
           */
          paid_in: number;
          /**
           * Paid Out
           * @description Money amount removed from the cash drawer
           */
          paid_out: number;
          /**
           * Payments
           * @description List of payment totals for the shift
           */
          payments: {
              /**
               * Money Amount
               * @description Total money amount for this payment type during the shift
               */
              money_amount: number;
              /**
               * Payment Type Id
               * @description Type identifier of the payment method
               */
              payment_type_id: string;
          }[];
          /**
           * Pos Device Id
           * @description POS device identifier associated with this shift
           */
          pos_device_id: string;
          /**
           * Refunds
           * @description Total refund amount during the shift
           */
          refunds: number;
          /**
           * Starting Cash
           * @description Initial cash amount at the start of the shift
           */
          starting_cash: number;
          /**
           * Store Id
           * @description Store identifier associated with this shift
           */
          store_id: string;
          /**
           * Surcharge
           * @description Total surcharges applied during the shift
           */
          surcharge: number;
          /**
           * Taxes
           * @description List of tax totals for the shift
           */
          taxes: {
              /**
               * Money Amount
               * @description Total monetary amount of this tax for the shift
               */
              money_amount: number;
              /**
               * Tax Id
               * @description Identifier of the tax line
               */
              tax_id: string;
          }[];
          /**
           * Tip
           * @description Total tips collected during the shift
           */
          tip: number;
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
 * Type of LOYVERSE's LOYVERSE_LIST_SUPPLIERS tool input.
 */
type LOYVERSE_LIST_SUPPLIERS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor from a previous request. Use to fetch the next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of suppliers to return (1-250). Default is 50.
   * @default 50
   */
  limit: number;
  /**
   * Show Deleted
   * @description Whether to include soft-deleted suppliers in the results.
   * @default false
   */
  show_deleted: boolean;
  /**
   * Suppliers Ids
   * @description Return only suppliers specified by a comma-separated list of IDs
   * @default null
   */
  suppliers_ids: string | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_SUPPLIERS tool output.
 */
type LOYVERSE_LIST_SUPPLIERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suppliers
       * @description List of suppliers sorted by created_at descending
       */
      suppliers: {
          /**
           * Address 1
           * @description Supplier address line 1
           * @default null
           */
          address_1: string | null;
          /**
           * Address 2
           * @description Supplier address line 2
           * @default null
           */
          address_2: string | null;
          /**
           * City
           * @description Supplier city
           * @default null
           */
          city: string | null;
          /**
           * Contact
           * @description Supplier contact person name
           * @default null
           */
          contact: string | null;
          /**
           * Country Code
           * @description Supplier country code (ISO 3166-1 alpha-2)
           * @default null
           */
          country_code: string | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the supplier was created
           */
          created_at: string;
          /**
           * Deleted At
           * @description ISO 8601 timestamp when the supplier was soft-deleted, if applicable
           * @default null
           */
          deleted_at: string | null;
          /**
           * Email
           * @description Supplier email address
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description UUID of the supplier
           */
          id: string;
          /**
           * Name
           * @description Supplier company name
           */
          name: string;
          /**
           * Note
           * @description Additional notes for the supplier
           * @default null
           */
          note: string | null;
          /**
           * Phone Number
           * @description Supplier phone number
           * @default null
           */
          phone_number: string | null;
          /**
           * Postal Code
           * @description Supplier postal code
           * @default null
           */
          postal_code: string | null;
          /**
           * Region
           * @description Supplier region (state or province)
           * @default null
           */
          region: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the supplier was last updated
           */
          updated_at: string;
          /**
           * Website
           * @description Supplier website URL
           * @default null
           */
          website: string | null;
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
 * Type of LOYVERSE's LOYVERSE_LIST_TAXES tool input.
 */
type LOYVERSE_LIST_TAXES_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page. Must be between 1 and 250. Default is 50.
   * @default 50
   */
  limit: number;
  /**
   * Offset
   * @description Initial index from which to return the results (zero-based). Default is 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_TAXES tool output.
 */
type LOYVERSE_LIST_TAXES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Indicates if more taxes exist beyond the current page of results.
       * @default false
       */
      has_more: boolean;
      /**
       * Taxes
       * @description List of tax objects.
       */
      taxes: {
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID of the tax.
           */
          id: string;
          /**
           * Is Enable
           * @description Indicates if the tax is enabled.
           */
          is_enable: boolean;
          /**
           * Is Included In Price
           * @description Indicates if the tax is included in the item price.
           */
          is_included_in_price: boolean;
          /**
           * Modified At
           * @description Last modification timestamp in ISO 8601 format.
           */
          modified_at: string;
          /**
           * Name
           * @description Name of the tax.
           */
          name: string;
          /**
           * Rate
           * @description Tax rate as a percentage.
           */
          rate: number;
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
 * Type of LOYVERSE's LOYVERSE_LIST_VARIANTS tool input.
 */
type LOYVERSE_LIST_VARIANTS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination; use the value from previous response to fetch the next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Item Id
   * @description Filter variants by the associated item ID.
   * @default null
   */
  item_id: string | null;
  /**
   * Limit
   * @description Number of variants to return per page (default is 100).
   * @default null
   */
  limit: number | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_VARIANTS tool output.
 */
type LOYVERSE_LIST_VARIANTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Cursor for the next page of results; provided if more results are available.
       * @default null
       */
      cursor: string | null;
      /**
       * Variants
       * @description List of variant objects.
       */
      variants: {
          /**
           * Barcode
           * @description Barcode of the variant.
           * @default null
           */
          barcode: string | null;
          /**
           * Cost
           * @description Cost of the variant.
           * @default null
           */
          cost: number | null;
          /**
           * Id
           * @description Unique identifier for the variant.
           */
          id: string;
          /**
           * Item Id
           * @description ID of the associated item.
           */
          item_id: string;
          /**
           * Name
           * @description Name of the variant.
           * @default null
           */
          name: string | null;
          /**
           * Option Values
           * @description List of variation option values (e.g., size, color).
           */
          option_values: string[];
          /**
           * Price
           * @description Selling price of the variant.
           */
          price: number;
          /**
           * Quantity
           * @description Inventory quantity of the variant.
           */
          quantity: number;
          /**
           * Sku
           * @description Stock keeping unit of the variant.
           * @default null
           */
          sku: string | null;
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
 * Type of LOYVERSE's LOYVERSE_LIST_WEBHOOKS tool input.
 */
type LOYVERSE_LIST_WEBHOOKS_INPUT = {
  /**
   * Limit
   * @description Maximum number of webhooks to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of webhooks to skip for pagination.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of LOYVERSE's LOYVERSE_LIST_WEBHOOKS tool output.
 */
type LOYVERSE_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhook configurations.
       */
      webhooks: {
          /**
           * Created At
           * @description Timestamp when the webhook was created (ISO 8601).
           */
          created_at: string;
          /**
           * Event
           * @description The event name that triggers the webhook.
           */
          event: string;
          /**
           * Id
           * @description Unique identifier of the webhook.
           */
          id: string;
          /**
           * Is Active
           * @description Indicates if the webhook is currently active.
           */
          is_active: boolean;
          /**
           * Updated At
           * @description Timestamp when the webhook was last updated (ISO 8601).
           */
          updated_at: string;
          /**
           * Url
           * @description The URL to which the webhook will send payloads.
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
 * Type map of all available tool input types for toolkit "LOYVERSE".
 */
export type LOYVERSE_TOOL_INPUTS = {
  CREATE_SUPPLIER: LOYVERSE_CREATE_SUPPLIER_INPUT
  DELETE_CATEGORY: LOYVERSE_DELETE_CATEGORY_INPUT
  DELETE_SUPPLIER: LOYVERSE_DELETE_SUPPLIER_INPUT
  GET_CATEGORY: LOYVERSE_GET_CATEGORY_INPUT
  GET_DISCOUNT: LOYVERSE_GET_DISCOUNT_INPUT
  GET_EMPLOYEE: LOYVERSE_GET_EMPLOYEE_INPUT
  GET_JWKS: LOYVERSE_GET_JWKS_INPUT
  GET_MERCHANT_INFO: LOYVERSE_GET_MERCHANT_INFO_INPUT
  GET_OPEN_ID_CONFIGURATION: LOYVERSE_GET_OPEN_ID_CONFIGURATION_INPUT
  GET_PAYMENT_TYPE: LOYVERSE_GET_PAYMENT_TYPE_INPUT
  GET_STORE: LOYVERSE_GET_STORE_INPUT
  LIST_CATEGORIES: LOYVERSE_LIST_CATEGORIES_INPUT
  LIST_CUSTOMERS: LOYVERSE_LIST_CUSTOMERS_INPUT
  LIST_DISCOUNTS: LOYVERSE_LIST_DISCOUNTS_INPUT
  LIST_EMPLOYEES: LOYVERSE_LIST_EMPLOYEES_INPUT
  LIST_ITEMS: LOYVERSE_LIST_ITEMS_INPUT
  LIST_MODIFIERS: LOYVERSE_LIST_MODIFIERS_INPUT
  LIST_PAYMENT_TYPES: LOYVERSE_LIST_PAYMENT_TYPES_INPUT
  LIST_RECEIPTS: LOYVERSE_LIST_RECEIPTS_INPUT
  LIST_SHIFTS: LOYVERSE_LIST_SHIFTS_INPUT
  LIST_SUPPLIERS: LOYVERSE_LIST_SUPPLIERS_INPUT
  LIST_TAXES: LOYVERSE_LIST_TAXES_INPUT
  LIST_VARIANTS: LOYVERSE_LIST_VARIANTS_INPUT
  LIST_WEBHOOKS: LOYVERSE_LIST_WEBHOOKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LOYVERSE".
 */
export type LOYVERSE_TOOL_OUTPUTS = {
  CREATE_SUPPLIER: LOYVERSE_CREATE_SUPPLIER_OUTPUT
  DELETE_CATEGORY: LOYVERSE_DELETE_CATEGORY_OUTPUT
  DELETE_SUPPLIER: LOYVERSE_DELETE_SUPPLIER_OUTPUT
  GET_CATEGORY: LOYVERSE_GET_CATEGORY_OUTPUT
  GET_DISCOUNT: LOYVERSE_GET_DISCOUNT_OUTPUT
  GET_EMPLOYEE: LOYVERSE_GET_EMPLOYEE_OUTPUT
  GET_JWKS: LOYVERSE_GET_JWKS_OUTPUT
  GET_MERCHANT_INFO: LOYVERSE_GET_MERCHANT_INFO_OUTPUT
  GET_OPEN_ID_CONFIGURATION: LOYVERSE_GET_OPEN_ID_CONFIGURATION_OUTPUT
  GET_PAYMENT_TYPE: LOYVERSE_GET_PAYMENT_TYPE_OUTPUT
  GET_STORE: LOYVERSE_GET_STORE_OUTPUT
  LIST_CATEGORIES: LOYVERSE_LIST_CATEGORIES_OUTPUT
  LIST_CUSTOMERS: LOYVERSE_LIST_CUSTOMERS_OUTPUT
  LIST_DISCOUNTS: LOYVERSE_LIST_DISCOUNTS_OUTPUT
  LIST_EMPLOYEES: LOYVERSE_LIST_EMPLOYEES_OUTPUT
  LIST_ITEMS: LOYVERSE_LIST_ITEMS_OUTPUT
  LIST_MODIFIERS: LOYVERSE_LIST_MODIFIERS_OUTPUT
  LIST_PAYMENT_TYPES: LOYVERSE_LIST_PAYMENT_TYPES_OUTPUT
  LIST_RECEIPTS: LOYVERSE_LIST_RECEIPTS_OUTPUT
  LIST_SHIFTS: LOYVERSE_LIST_SHIFTS_OUTPUT
  LIST_SUPPLIERS: LOYVERSE_LIST_SUPPLIERS_OUTPUT
  LIST_TAXES: LOYVERSE_LIST_TAXES_OUTPUT
  LIST_VARIANTS: LOYVERSE_LIST_VARIANTS_OUTPUT
  LIST_WEBHOOKS: LOYVERSE_LIST_WEBHOOKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LOYVERSE toolkit.
 */
export const LOYVERSE = {
  slug: "loyverse",
  tools: {
    /**
     * Tool to create a new supplier. use when you need to register a supplier in loyverse before purchases.
     */
    CREATE_SUPPLIER: "LOYVERSE_CREATE_SUPPLIER",
    /**
     * Tool to delete a single category by id. use when you need to remove an unused or deprecated category.
     */
    DELETE_CATEGORY: "LOYVERSE_DELETE_CATEGORY",
    /**
     * Tool to delete a specific supplier by id. use after confirming the supplier id to remove an existing supplier.
     */
    DELETE_SUPPLIER: "LOYVERSE_DELETE_SUPPLIER",
    /**
     * Tool to get a single category by id. use when you need to fetch details of an existing category in loyverse.
     */
    GET_CATEGORY: "LOYVERSE_GET_CATEGORY",
    /**
     * Tool to get a single discount by id. use after confirming the discount id to retrieve its details.
     */
    GET_DISCOUNT: "LOYVERSE_GET_DISCOUNT",
    /**
     * Tool to get a single employee by id. use after confirming the employee id to fetch its details.
     */
    GET_EMPLOYEE: "LOYVERSE_GET_EMPLOYEE",
    /**
     * Tool to fetch json web key set for openid connect. use when verifying loyverse id token signatures.
     */
    GET_JWKS: "LOYVERSE_GET_JWKS",
    /**
     * Tool to get merchant information. use after authenticating to retrieve merchant account details.
     */
    GET_MERCHANT_INFO: "LOYVERSE_GET_MERCHANT_INFO",
    /**
     * Tool to retrieve the openid connect discovery document. use when integrating authentication and need endpoints and supported features.
     */
    GET_OPEN_ID_CONFIGURATION: "LOYVERSE_GET_OPEN_ID_CONFIGURATION",
    /**
     * Tool to get a single payment type by its id. use when you need to fetch full details of a specific payment method before processing a transaction.
     */
    GET_PAYMENT_TYPE: "LOYVERSE_GET_PAYMENT_TYPE",
    /**
     * Tool to retrieve details of a specific store by its id. use when you need store metadata (address, contact) after obtaining the store id.
     */
    GET_STORE: "LOYVERSE_GET_STORE",
    /**
     * Tool to list categories with optional filtering and pagination.
     */
    LIST_CATEGORIES: "LOYVERSE_LIST_CATEGORIES",
    /**
     * Tool to get a list of customers. use when you need paginated customer lists with optional filters.
     */
    LIST_CUSTOMERS: "LOYVERSE_LIST_CUSTOMERS",
    /**
     * Tool to list discounts. use when fetching a paginated set of discounts for display or sync.
     */
    LIST_DISCOUNTS: "LOYVERSE_LIST_DISCOUNTS",
    /**
     * Tool to get a list of employees. use when you need paginated employee lists with optional filters. works after authenticating.
     */
    LIST_EMPLOYEES: "LOYVERSE_LIST_EMPLOYEES",
    /**
     * Tool to list items with filtering and pagination. use when you need to retrieve inventory items with optional filters and handle pagination for large result sets.
     */
    LIST_ITEMS: "LOYVERSE_LIST_ITEMS",
    /**
     * Tool to list modifiers. use when you need a paginated list of modifiers with optional filters.
     */
    LIST_MODIFIERS: "LOYVERSE_LIST_MODIFIERS",
    /**
     * Tool to list payment types. use when you need to fetch available payment methods with optional filters and pagination.
     */
    LIST_PAYMENT_TYPES: "LOYVERSE_LIST_PAYMENT_TYPES",
    /**
     * Tool to retrieve a list of receipts. use when you need to fetch receipts with optional filters and handle pagination.
     */
    LIST_RECEIPTS: "LOYVERSE_LIST_RECEIPTS",
    /**
     * Tool to list shifts. use when you need to retrieve shift records for reporting or auditing with optional filters.
     */
    LIST_SHIFTS: "LOYVERSE_LIST_SHIFTS",
    /**
     * Tool to retrieve a list of suppliers. use when you need a paginated supplier directory with optional filters.
     */
    LIST_SUPPLIERS: "LOYVERSE_LIST_SUPPLIERS",
    /**
     * Tool to list taxes. use when you need to fetch tax configurations with pagination for reporting or synchronization purposes. example: "list taxes with limit 100 and offset 0".
     */
    LIST_TAXES: "LOYVERSE_LIST_TAXES",
    /**
     * Tool to list variants. use when you need to retrieve item variants with optional filtering by item and pagination.
     */
    LIST_VARIANTS: "LOYVERSE_LIST_VARIANTS",
    /**
     * Tool to list webhooks. use when you need to retrieve all configured webhooks.
     */
    LIST_WEBHOOKS: "LOYVERSE_LIST_WEBHOOKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LOYVERSE".
 */
export type LOYVERSE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LOYVERSE".
 */
export type LOYVERSE_TRIGGER_EVENTS = {}
