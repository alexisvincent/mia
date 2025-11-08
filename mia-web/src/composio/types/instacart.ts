// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of INSTACART's INSTACART_CREATE_RECIPE_PAGE tool input.
 */
type INSTACART_CREATE_RECIPE_PAGE_INPUT = {
  /**
   * Expires In
   * @description Optional days until link expiration (1-365)
   * @default null
   */
  expires_in: number | null;
  /**
   * Image Url
   * @description Optional image for the recipe
   * @default null
   */
  image_url: string | null;
  /**
   * Ingredients
   * @description Recipe ingredients
   */
  ingredients?: {
      /**
       * Name
       * @description Ingredient name
       */
      name: string;
      /**
       * Quantity
       * @description Requested quantity for the ingredient
       * @default null
       */
      quantity: number | null;
      /**
       * Unit
       * @description Unit of measure (e.g., each, lb, oz, g, ml)
       * @default null
       */
      unit: string | null;
  }[];
  /**
   * Instructions
   * @description Optional list of instructions/steps
   * @default null
   */
  instructions: string[] | null;
  /**
   * Title
   * @description Title of the recipe
   */
  title?: string;
};

/**
 * Type of INSTACART's INSTACART_CREATE_RECIPE_PAGE tool output.
 */
type INSTACART_CREATE_RECIPE_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description Instacart URL for the generated recipe page
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
 * Type of INSTACART's INSTACART_CREATE_SHOPPING_LIST_PAGE tool input.
 */
type INSTACART_CREATE_SHOPPING_LIST_PAGE_INPUT = {
  /**
   * Expires In
   * @description Optional days until link expiration (1-365)
   * @default null
   */
  expires_in: number | null;
  /**
   * Image Url
   * @description Optional image for the page
   * @default null
   */
  image_url: string | null;
  /**
   * Instructions
   * @description Optional instructions/context shown on the page
   * @default null
   */
  instructions: string | null;
  /**
   * Line Items
   * @description List of items to include on the shopping list
   */
  line_items?: {
      /**
       * Name
       * @description Product or ingredient name
       */
      name: string;
      /**
       * Quantity
       * @description Requested quantity for the item
       * @default null
       */
      quantity: number | null;
      /**
       * Unit
       * @description Unit of measure for quantity (e.g., each, lb, oz, g, ml)
       * @default null
       */
      unit: string | null;
  }[];
  /**
   * Title
   * @description Optional title for the generated shopping list page
   * @default null
   */
  title: string | null;
};

/**
 * Type of INSTACART's INSTACART_CREATE_SHOPPING_LIST_PAGE tool output.
 */
type INSTACART_CREATE_SHOPPING_LIST_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description Instacart URL for the generated shopping list
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
 * Type of INSTACART's INSTACART_GET_NEARBY_RETAILERS tool input.
 */
type INSTACART_GET_NEARBY_RETAILERS_INPUT = {
  /**
   * Country Code
   * @description Country code (US or CA)
   */
  country_code?: string;
  /**
   * Postal Code
   * @description Postal code
   */
  postal_code?: string;
};

/**
 * Type of INSTACART's INSTACART_GET_NEARBY_RETAILERS tool output.
 */
type INSTACART_GET_NEARBY_RETAILERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Retailers
       * @description List of nearby retailers
       */
      retailers: {
          /**
           * Name
           * @description Retailer name
           */
          name: string;
          /**
           * Retailer Key
           * @description Retailer key identifier
           */
          retailer_key: string;
          /**
           * Retailer Logo Url
           * @description Retailer logo URL if available
           * @default null
           */
          retailer_logo_url: string | null;
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
 * Type map of all available tool input types for toolkit "INSTACART".
 */
export type INSTACART_TOOL_INPUTS = {
  CREATE_RECIPE_PAGE: INSTACART_CREATE_RECIPE_PAGE_INPUT
  CREATE_SHOPPING_LIST_PAGE: INSTACART_CREATE_SHOPPING_LIST_PAGE_INPUT
  GET_NEARBY_RETAILERS: INSTACART_GET_NEARBY_RETAILERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "INSTACART".
 */
export type INSTACART_TOOL_OUTPUTS = {
  CREATE_RECIPE_PAGE: INSTACART_CREATE_RECIPE_PAGE_OUTPUT
  CREATE_SHOPPING_LIST_PAGE: INSTACART_CREATE_SHOPPING_LIST_PAGE_OUTPUT
  GET_NEARBY_RETAILERS: INSTACART_GET_NEARBY_RETAILERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's INSTACART toolkit.
 */
export const INSTACART = {
  slug: "instacart",
  tools: {
    /**
     * Create a recipe page on instacart + return shareable url. attempts prod first then falls back to dev; errors from prod bubble up if both fail.
     */
    CREATE_RECIPE_PAGE: "INSTACART_CREATE_RECIPE_PAGE",
    /**
     * Create a shopping list page on instacart + return shareable url. attempts prod first then falls back to dev; errors from prod bubble up if both fail.
     */
    CREATE_SHOPPING_LIST_PAGE: "INSTACART_CREATE_SHOPPING_LIST_PAGE",
    /**
     * Get nearby retailers by postal code + country code. attempts prod first then falls back to dev; errors from prod bubble up if both fail.
     */
    GET_NEARBY_RETAILERS: "INSTACART_GET_NEARBY_RETAILERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "INSTACART".
 */
export type INSTACART_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "INSTACART".
 */
export type INSTACART_TRIGGER_EVENTS = {}
