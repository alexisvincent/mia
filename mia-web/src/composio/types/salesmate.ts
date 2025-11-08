// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SALESMATE's SALESMATE_ADD_PRODUCT tool input.
 */
type SALESMATE_ADD_PRODUCT_INPUT = {
  /**
   * Cost Per Unit
   * @description Optional cost per unit (non-negative)
   * @default null
   */
  costPerUnit: number | null;
  /**
   * Currency
   * @description Three-letter ISO currency code, uppercase
   */
  currency?: string;
  /**
   * Description
   * @description Optional description (max 2000 chars)
   * @default null
   */
  description: string | null;
  /**
   * Direct Cost
   * @description Optional direct cost of the product (non-negative)
   * @default null
   */
  directCost: number | null;
  /**
   * Is Active
   * @description Whether the product is active for sales
   * @default true
   */
  isActive: boolean;
  /**
   * Name
   * @description Name of the product
   */
  name?: string;
  /**
   * Owner
   * @description Salesmate user ID that owns the product
   * @default null
   */
  owner: number | null;
  /**
   * Sku
   * @description Unique SKU/code of the product
   * @default null
   */
  sku: string | null;
  /**
   * Tags
   * @description Comma-separated tags (max 5000 chars)
   * @default null
   */
  tags: string | null;
  /**
   * Unit Price
   * @description Sale price of the product (non-negative)
   */
  unitPrice?: number;
};

/**
 * Type of SALESMATE's SALESMATE_ADD_PRODUCT tool output.
 */
type SALESMATE_ADD_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description Details of the created product
       */
      Data: {
          /**
           * Currency
           * @description Currency details of the product
           */
          currency: {
              /**
               * Code
               * @description Currency code, e.g., USD.
               */
              code: string;
              /**
               * Display Label
               * @description Currency display label, e.g., USD - $.
               */
              displayLabel: string;
              /**
               * Value
               * @description Value of the currency code.
               */
              value: string;
          };
          /**
           * Description
           * @description Description of the product
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique ID of the product
           */
          id: number;
          /**
           * Is Active
           * @description Whether the product is active for sales
           */
          isActive: boolean;
          /**
           * Name
           * @description Name of the product
           */
          name: string;
          /**
           * Owner
           * @description ID of the user who owns the product
           * @default null
           */
          owner: number | null;
          /**
           * Prices
           * @description List of price entries for the product
           */
          prices: {
              /**
               * Currency
               * @description Currency code for this price.
               */
              currency: string;
              /**
               * Id
               * @description ID of this price entry.
               */
              id: number;
              /**
               * Is Default
               * @description Whether this price is the default one.
               */
              isDefault: boolean;
              /**
               * Unit Price
               * @description Unit price for this product.
               */
              unitPrice: number;
          }[];
          /**
           * Sku
           * @description SKU/code of the product
           * @default null
           */
          sku: string | null;
          /**
           * Tags
           * @description Tags associated with the product
           * @default null
           */
          tags: string | null;
      };
      /**
       * Status
       * @description API call status.
       * @enum {string}
       */
      Status: "success" | "failure";
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
 * Type of SALESMATE's SALESMATE_CREATE_COMPANY tool input.
 */
type SALESMATE_CREATE_COMPANY_INPUT = {
  /**
   * Billing Address Line1
   * @description Billing address line 1
   * @default null
   */
  billingAddressLine1: string | null;
  /**
   * Billing Address Line2
   * @description Billing address line 2
   * @default null
   */
  billingAddressLine2: string | null;
  /**
   * Billing City
   * @description Billing city
   * @default null
   */
  billingCity: string | null;
  /**
   * Billing Country
   * @description Billing country
   * @default null
   */
  billingCountry: string | null;
  /**
   * Billing State
   * @description Billing state
   * @default null
   */
  billingState: string | null;
  /**
   * Billing Zip Code
   * @description Billing ZIP/postal code
   * @default null
   */
  billingZipCode: string | null;
  /**
   * Currency
   * @description Three-letter ISO currency code (uppercase)
   * @default null
   */
  currency: string | null;
  /**
   * Description
   * @description Description for the company
   * @default null
   */
  description: string | null;
  /**
   * Facebook Handle
   * @description Facebook profile or handle of the company
   * @default null
   */
  facebookHandle: string | null;
  /**
   * Google Plus Handle
   * @description Google Plus profile link of the company
   * @default null
   */
  googlePlusHandle: string | null;
  /**
   * Linked In Handle
   * @description LinkedIn profile link of the company
   * @default null
   */
  linkedInHandle: string | null;
  /**
   * Name
   * @description Name of the company (max 255 chars)
   */
  name?: string;
  /**
   * Other Phone
   * @description Secondary phone number of the company
   * @default null
   */
  otherPhone: string | null;
  /**
   * Owner
   * @description ID of the owner user for this company
   */
  owner?: number;
  /**
   * Phone
   * @description Primary phone number of the company
   * @default null
   */
  phone: string | null;
  /**
   * Skype Id
   * @description Skype ID of the company
   * @default null
   */
  skypeId: string | null;
  /**
   * Tags
   * @description Comma-separated tags for the company
   * @default null
   */
  tags: string | null;
  /**
   * Twitter Handle
   * @description Twitter handle of the company
   * @default null
   */
  twitterHandle: string | null;
  /**
   * Website
   * @description Website URL of the company
   * @default null
   */
  website: string | null;
};

/**
 * Type of SALESMATE's SALESMATE_CREATE_COMPANY tool output.
 */
type SALESMATE_CREATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description Response Data containing the newly created company ID.
       */
      Data: {
          /**
           * Id
           * @description Identifier of the created company
           */
          id: number;
      };
      /**
       * Status
       * @description Status of the API call, e.g., 'success'
       */
      Status: string;
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
 * Type of SALESMATE's SALESMATE_DELETE_PRODUCT tool input.
 */
type SALESMATE_DELETE_PRODUCT_INPUT = {
  /**
   * Product Id
   * @description Unique identifier of the product to delete
   */
  product_id?: number;
};

/**
 * Type of SALESMATE's SALESMATE_DELETE_PRODUCT tool output.
 */
type SALESMATE_DELETE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description Empty object on successful deletion
       */
      Data: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Status of the API call, 'success' or 'failure'
       */
      Status: string;
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
 * Type of SALESMATE's SALESMATE_GET_ACTIVE_USERS tool input.
 */
type SALESMATE_GET_ACTIVE_USERS_INPUT = object;

/**
 * Type of SALESMATE's SALESMATE_GET_ACTIVE_USERS tool output.
 */
type SALESMATE_GET_ACTIVE_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of active users returned by the Salesmate API
       */
      users: {
          /**
           * Email
           * @description Email address of the user
           */
          email: string;
          /**
           * First Name
           * @description First name of the user
           */
          firstName: string;
          /**
           * Id
           * @description Unique identifier of the user
           */
          id: number;
          /**
           * Last Name
           * @description Last name of the user
           */
          lastName: string;
          /**
           * Role
           * @description Role of the user within the organization
           */
          role: string;
          /**
           * Status
           * @description Current status of the user
           */
          status: string;
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
 * Type of SALESMATE's SALESMATE_GET_COMPANY tool input.
 */
type SALESMATE_GET_COMPANY_INPUT = {
  /**
   * Company Id
   * @description Unique identifier of the company to retrieve
   */
  company_id?: number;
};

/**
 * Type of SALESMATE's SALESMATE_GET_COMPANY tool output.
 */
type SALESMATE_GET_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description Detailed information of the requested company
       */
      Data: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description API response status, e.g., 'success'
       */
      Status: string;
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
 * Type of SALESMATE's SALESMATE_LIST_MODULES tool input.
 */
type SALESMATE_LIST_MODULES_INPUT = object;

/**
 * Type of SALESMATE's SALESMATE_LIST_MODULES tool output.
 */
type SALESMATE_LIST_MODULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Modules
       * @description List of module metadata objects
       */
      modules: {
          /**
           * Id
           * @description Unique identifier of the module
           */
          id: number;
          /**
           * Name
           * @description Name of the module
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
 * Type map of all available tool input types for toolkit "SALESMATE".
 */
export type SALESMATE_TOOL_INPUTS = {
  ADD_PRODUCT: SALESMATE_ADD_PRODUCT_INPUT
  CREATE_COMPANY: SALESMATE_CREATE_COMPANY_INPUT
  DELETE_PRODUCT: SALESMATE_DELETE_PRODUCT_INPUT
  GET_ACTIVE_USERS: SALESMATE_GET_ACTIVE_USERS_INPUT
  GET_COMPANY: SALESMATE_GET_COMPANY_INPUT
  LIST_MODULES: SALESMATE_LIST_MODULES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SALESMATE".
 */
export type SALESMATE_TOOL_OUTPUTS = {
  ADD_PRODUCT: SALESMATE_ADD_PRODUCT_OUTPUT
  CREATE_COMPANY: SALESMATE_CREATE_COMPANY_OUTPUT
  DELETE_PRODUCT: SALESMATE_DELETE_PRODUCT_OUTPUT
  GET_ACTIVE_USERS: SALESMATE_GET_ACTIVE_USERS_OUTPUT
  GET_COMPANY: SALESMATE_GET_COMPANY_OUTPUT
  LIST_MODULES: SALESMATE_LIST_MODULES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SALESMATE toolkit.
 */
export const SALESMATE = {
  slug: "salesmate",
  tools: {
    /**
     * Tool to add a new product. use when you need to create a new product in salesmate before referencing it (e.g., in deals or orders). example: "add a product named 'widget pro' (sku wpro1) priced at 199.99 usd."
     */
    ADD_PRODUCT: "SALESMATE_ADD_PRODUCT",
    /**
     * Tool to create a new company in the salesmate crm. use when you need to register a new organization.
     */
    CREATE_COMPANY: "SALESMATE_CREATE_COMPANY",
    /**
     * Tool to delete a product by productid. use when you need to remove a product from the catalog after confirming the correct productid.
     */
    DELETE_PRODUCT: "SALESMATE_DELETE_PRODUCT",
    /**
     * Tool to retrieve all active users. use when you need to fetch only users currently marked active for tasks, assignments, or user management audits.
     */
    GET_ACTIVE_USERS: "SALESMATE_GET_ACTIVE_USERS",
    /**
     * Tool to retrieve details of a specific company by id. use when you have a company id and need its full record. example: "get company 42".
     */
    GET_COMPANY: "SALESMATE_GET_COMPANY",
    /**
     * Tool to list all modules. use after authentication to retrieve available module ids and names.
     */
    LIST_MODULES: "SALESMATE_LIST_MODULES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SALESMATE".
 */
export type SALESMATE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SALESMATE".
 */
export type SALESMATE_TRIGGER_EVENTS = {}
