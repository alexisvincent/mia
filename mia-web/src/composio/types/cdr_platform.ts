// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CDR_PLATFORM's CDR_PLATFORM_GET_CDR_PRICE tool input.
 */
type CDR_PLATFORM_GET_CDR_PRICE_INPUT = {
  /**
   * Currency
   * @description Currency code for pricing. Only 'usd' is supported.
   * @constant
   */
  currency?: "usd";
  /**
   * Items
   * @description List of removal methods and corresponding CO₂ amounts.
   */
  items?: {
      /**
       * Cdr Amount
       * @description Amount of CO₂ to remove for this method, must be > 0.
       */
      cdr_amount: number;
      /**
       * Method Type
       * @description The type of removal method (e.g., 'bio-oil', 'kelp-sinking').
       */
      method_type: string;
  }[];
  /**
   * Weight Unit
   * @description Unit of weight for CDR amounts. Only 'kg' is supported.
   * @constant
   */
  weight_unit?: "kg";
};

/**
 * Type of CDR_PLATFORM's CDR_PLATFORM_GET_CDR_PRICE tool output.
 */
type CDR_PLATFORM_GET_CDR_PRICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost
       * @description Detailed cost breakdown.
       */
      cost: {
          /**
           * Items
           * @description Costs per removal method.
           */
          items: {
              /**
               * Cdr Amount
               * @description Amount of CO₂ removed.
               */
              cdr_amount: number;
              /**
               * Cost
               * @description Cost for the specified method and amount.
               */
              cost: number;
              /**
               * Method Type
               * @description Removal method type.
               */
              method_type: string;
          }[];
          /**
           * Removal
           * @description Total removal cost excluding fees.
           */
          removal: number;
          /**
           * Total
           * @description Total cost including fees.
           */
          total: number;
          /**
           * Variable Fees
           * @description Additional variable fees.
           */
          variable_fees: number;
      };
      /**
       * Currency
       * @description Currency used for pricing.
       */
      currency: string;
      /**
       * Weight Unit
       * @description Unit of weight for CDR.
       */
      weight_unit: string;
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
 * Type of CDR_PLATFORM's CDR_PLATFORM_GET_HEALTH_CHECK tool input.
 */
type CDR_PLATFORM_GET_HEALTH_CHECK_INPUT = object;

/**
 * Type of CDR_PLATFORM's CDR_PLATFORM_GET_HEALTH_CHECK tool output.
 */
type CDR_PLATFORM_GET_HEALTH_CHECK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Db Up
       * @description Mapping of database connection names to their availability status.
       */
      db_up: {
          [key: string]: boolean;
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
 * Type of CDR_PLATFORM's CDR_PLATFORM_GET_PRICING_AND_BILLING_INFO tool input.
 */
type CDR_PLATFORM_GET_PRICING_AND_BILLING_INFO_INPUT = {
  /**
   * Currency
   * @description Currency code for pricing.
   * @enum {string}
   */
  currency?: "usd" | "eur" | "gbp" | "chf";
  /**
   * Items
   * @description List of removal methods and their corresponding CO₂ amounts.
   */
  items?: {
      /**
       * Cdr Amount
       * @description Amount of CO₂ to remove for this method, must be > 0.
       */
      cdr_amount: number;
      /**
       * Method Type
       * @description The type of removal method.
       * @enum {string}
       */
      method_type: "bio-oil" | "kelp-sinking" | "forestation" | "direct-air-capture-and-storage" | "olivine-distribution" | "biochar";
  }[];
  /**
   * Weight Unit
   * @description Unit of weight for CDR amounts.
   * @enum {string}
   */
  weight_unit?: "kg" | "t";
};

/**
 * Type of CDR_PLATFORM's CDR_PLATFORM_GET_PRICING_AND_BILLING_INFO tool output.
 */
type CDR_PLATFORM_GET_PRICING_AND_BILLING_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost
       * @description Detailed cost breakdown.
       */
      cost: {
          /**
           * Items
           * @description Costs per removal method.
           */
          items: {
              /**
               * Cdr Amount
               * @description Amount of CO₂ removed.
               */
              cdr_amount: number;
              /**
               * Cost
               * @description Cost for the specified method and amount.
               */
              cost: number;
              /**
               * Method Type
               * @description Removal method type.
               */
              method_type: string;
          }[];
          /**
           * Removal
           * @description Total removal cost excluding fees.
           */
          removal: number;
          /**
           * Total
           * @description Total cost including fees.
           */
          total: number;
          /**
           * Variable Fees
           * @description Additional variable fees.
           */
          variable_fees: number;
      };
      /**
       * Currency
       * @description Currency used for pricing.
       */
      currency: string;
      /**
       * Weight Unit
       * @description Unit of weight for CDR.
       */
      weight_unit: string;
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
 * Type of CDR_PLATFORM's CDR_PLATFORM_POST_CDR_PURCHASE tool input.
 */
type CDR_PLATFORM_POST_CDR_PURCHASE_INPUT = {
  /**
   * Certificate Display Name
   * @description Optional display name for the resulting certificate.
   * @default null
   */
  certificate_display_name: string | null;
  /**
   * Client Reference Id
   * @description Optional client-provided reference ID to track this transaction.
   * @default null
   */
  client_reference_id: string | null;
  /**
   * Currency
   * @description 3-letter currency code for the transaction (ISO 4217), in lowercase.
   */
  currency?: string;
  /**
   * Items
   * @description List of removal method items to purchase.
   */
  items?: {
      /**
       * Cdr Amount
       * @description Amount of CO₂ to remove using this method, must be non-negative.
       */
      cdr_amount: number;
      /**
       * Method Type
       * @description Type of carbon removal method (e.g., 'bio-oil', 'kelp-sinking').
       */
      method_type: string;
  }[];
  /**
   * Weight Unit
   * @description Unit for specifying CDR amounts: grams ('g'), kilograms ('kg'), or tonnes ('t').
   * @enum {string}
   */
  weight_unit?: "g" | "kg" | "t";
};

/**
 * Type of CDR_PLATFORM's CDR_PLATFORM_POST_CDR_PURCHASE tool output.
 */
type CDR_PLATFORM_POST_CDR_PURCHASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Transaction Uuid
       * @description Unique UUID assigned to this removal purchase transaction.
       */
      transaction_uuid: string;
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
 * Type map of all available tool input types for toolkit "CDR_PLATFORM".
 */
export type CDR_PLATFORM_TOOL_INPUTS = {
  GET_CDR_PRICE: CDR_PLATFORM_GET_CDR_PRICE_INPUT
  GET_HEALTH_CHECK: CDR_PLATFORM_GET_HEALTH_CHECK_INPUT
  GET_PRICING_AND_BILLING_INFO: CDR_PLATFORM_GET_PRICING_AND_BILLING_INFO_INPUT
  POST_CDR_PURCHASE: CDR_PLATFORM_POST_CDR_PURCHASE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CDR_PLATFORM".
 */
export type CDR_PLATFORM_TOOL_OUTPUTS = {
  GET_CDR_PRICE: CDR_PLATFORM_GET_CDR_PRICE_OUTPUT
  GET_HEALTH_CHECK: CDR_PLATFORM_GET_HEALTH_CHECK_OUTPUT
  GET_PRICING_AND_BILLING_INFO: CDR_PLATFORM_GET_PRICING_AND_BILLING_INFO_OUTPUT
  POST_CDR_PURCHASE: CDR_PLATFORM_POST_CDR_PURCHASE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CDR_PLATFORM toolkit.
 */
export const CDR_PLATFORM = {
  slug: "cdr_platform",
  tools: {
    /**
     * Tool to retrieve the cost of carbon dioxide removal. use after specifying cdr methods and amounts to estimate pricing.
     */
    GET_CDR_PRICE: "CDR_PLATFORM_GET_CDR_PRICE",
    /**
     * Tool to perform a health check of the cdr platform service. use when you need to verify api and database connectivity and core service status.
     */
    GET_HEALTH_CHECK: "CDR_PLATFORM_GET_HEALTH_CHECK",
    /**
     * Tool to get current pricing, fees, and billing thresholds for carbon removal. use when calculating costs before purchase.
     */
    GET_PRICING_AND_BILLING_INFO: "CDR_PLATFORM_GET_PRICING_AND_BILLING_INFO",
    /**
     * Tool to initiate the purchase of carbon dioxide removal credits. use after confirming cost and methods to finalize the order.
     */
    POST_CDR_PURCHASE: "CDR_PLATFORM_POST_CDR_PURCHASE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CDR_PLATFORM".
 */
export type CDR_PLATFORM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CDR_PLATFORM".
 */
export type CDR_PLATFORM_TRIGGER_EVENTS = {}
