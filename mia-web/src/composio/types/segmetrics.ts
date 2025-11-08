// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SEGMETRICS's SEGMETRICS_CREATE_PRODUCT tool input.
 */
type SEGMETRICS_CREATE_PRODUCT_INPUT = {
  /**
   * Description
   * @description Description of the product.
   * @default null
   */
  description: string | null;
  /**
   * External Id
   * @description External system reference ID for the product.
   * @default null
   */
  external_id: string | null;
  /**
   * Id
   * @description Unique identifier for the product.
   */
  id?: string;
  /**
   * Name
   * @description Name of the product.
   */
  name?: string;
  /**
   * Price
   * @description Default price of the product, must be non-negative.
   * @default null
   */
  price: number | null;
  /**
   * Type
   * @description Type of product. Must be 'digital' or 'physical'.
   * @enum {string}
   */
  type?: "digital" | "physical";
};

/**
 * Type of SEGMETRICS's SEGMETRICS_CREATE_PRODUCT tool output.
 */
type SEGMETRICS_CREATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the product was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the product.
       * @default null
       */
      description: string | null;
      /**
       * External Id
       * @description External system reference ID for the product.
       * @default null
       */
      external_id: string | null;
      /**
       * Id
       * @description Unique identifier for the created product.
       */
      id: string;
      /**
       * Name
       * @description Name of the product.
       */
      name: string;
      /**
       * Price
       * @description Default price of the product.
       * @default null
       */
      price: number | null;
      /**
       * Type
       * @description Type of the product.
       */
      type: string;
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
 * Type of SEGMETRICS's SEGMETRICS_DELETE_CONTACT tool input.
 */
type SEGMETRICS_DELETE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier of the contact to delete.
   */
  contact_id?: string;
};

/**
 * Type of SEGMETRICS's SEGMETRICS_DELETE_CONTACT tool output.
 */
type SEGMETRICS_DELETE_CONTACT_OUTPUT = {
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
 * Type of SEGMETRICS's SEGMETRICS_V1_ADD_OR_UPDATE_CONTACT tool input.
 */
type SEGMETRICS_V1_ADD_OR_UPDATE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier for the contact (string or numeric).
   */
  contact_id?: string;
  /**
   * Date Created
   * @description Creation timestamp (YYYY-MM-DD HH:MM:SS).
   * @default null
   */
  date_created: string | null;
  /**
   * Email
   * Format: email
   * @description Contact's email address.
   */
  email?: unknown;
  /**
   * First Name
   * @description Contact's first name.
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Contact's last name.
   * @default null
   */
  last_name: string | null;
  /**
   * Last Updated
   * @description Last-update timestamp (YYYY-MM-DD HH:MM:SS).
   * @default null
   */
  last_updated: string | null;
  /**
   * Status
   * @description Contact status, either 'active' or 'inactive'.
   * @default null
   * @enum {string|null}
   */
  status: "active" | "inactive" | null;
  /**
   * Utm Campaign
   * @description UTM campaign parameter.
   * @default null
   */
  utm_campaign: string | null;
  /**
   * Utm Content
   * @description UTM content parameter.
   * @default null
   */
  utm_content: string | null;
  /**
   * Utm Medium
   * @description UTM medium parameter.
   * @default null
   */
  utm_medium: string | null;
  /**
   * Utm Source
   * @description UTM source parameter.
   * @default null
   */
  utm_source: string | null;
  /**
   * Utm Term
   * @description UTM term parameter.
   * @default null
   */
  utm_term: string | null;
};

/**
 * Type of SEGMETRICS's SEGMETRICS_V1_ADD_OR_UPDATE_CONTACT tool output.
 */
type SEGMETRICS_V1_ADD_OR_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description API response status, expected 'success'.
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
 * Type map of all available tool input types for toolkit "SEGMETRICS".
 */
export type SEGMETRICS_TOOL_INPUTS = {
  CREATE_PRODUCT: SEGMETRICS_CREATE_PRODUCT_INPUT
  DELETE_CONTACT: SEGMETRICS_DELETE_CONTACT_INPUT
  V1_ADD_OR_UPDATE_CONTACT: SEGMETRICS_V1_ADD_OR_UPDATE_CONTACT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SEGMETRICS".
 */
export type SEGMETRICS_TOOL_OUTPUTS = {
  CREATE_PRODUCT: SEGMETRICS_CREATE_PRODUCT_OUTPUT
  DELETE_CONTACT: SEGMETRICS_DELETE_CONTACT_OUTPUT
  V1_ADD_OR_UPDATE_CONTACT: SEGMETRICS_V1_ADD_OR_UPDATE_CONTACT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SEGMETRICS toolkit.
 */
export const SEGMETRICS = {
  slug: "segmetrics",
  tools: {
    /**
     * Tool to create a new product in segmetrics. use after confirming product details.
     */
    CREATE_PRODUCT: "SEGMETRICS_CREATE_PRODUCT",
    /**
     * Tool to delete a specific contact by id. use after confirming the contact id exists.
     */
    DELETE_CONTACT: "SEGMETRICS_DELETE_CONTACT",
    /**
     * Tool to add or update a contact in segmetrics. use when you need to upsert the contact record during data import.
     */
    V1_ADD_OR_UPDATE_CONTACT: "SEGMETRICS_V1_ADD_OR_UPDATE_CONTACT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SEGMETRICS".
 */
export type SEGMETRICS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SEGMETRICS".
 */
export type SEGMETRICS_TRIGGER_EVENTS = {}
