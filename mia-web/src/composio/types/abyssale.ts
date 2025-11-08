// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ABYSSALE's ABYSSALE_AUTHENTICATION_TEST tool input.
 */
type ABYSSALE_AUTHENTICATION_TEST_INPUT = object;

/**
 * Type of ABYSSALE's ABYSSALE_AUTHENTICATION_TEST tool output.
 */
type ABYSSALE_AUTHENTICATION_TEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the /ready endpoint, 200 indicates valid authentication
       */
      status_code: number;
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
 * Type of ABYSSALE's ABYSSALE_CREATE_PROJECT tool input.
 */
type ABYSSALE_CREATE_PROJECT_INPUT = {
  /**
   * Name
   * @description Name of the project (2-100 characters)
   */
  name?: string;
};

/**
 * Type of ABYSSALE's ABYSSALE_CREATE_PROJECT tool output.
 */
type ABYSSALE_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At Ts
       * @description Timestamp (in seconds) when the project was created
       */
      created_at_ts: number;
      /**
       * Id
       * @description Unique identifier of the project
       */
      id: string;
      /**
       * Name
       * @description Name of the created project
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
 * Type of ABYSSALE's ABYSSALE_GET_DESIGNS tool input.
 */
type ABYSSALE_GET_DESIGNS_INPUT = {
  /**
   * Category Id
   * @description UUID of a category to filter designs by.
   * @default null
   */
  category_id: string | null;
  /**
   * Type
   * @description Filter designs by type: 'static', 'animated', 'printer', or 'printer_multipage'.
   * @default null
   * @enum {string|null}
   */
  type: "static" | "animated" | "printer" | "printer_multipage" | null;
};

/**
 * Type of ABYSSALE's ABYSSALE_GET_DESIGNS tool output.
 */
type ABYSSALE_GET_DESIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category Name
       * @description Name of the category this design belongs to
       * @default null
       */
      category_name: string | null;
      /**
       * Created At
       * @description Creation timestamp of the design (epoch seconds)
       */
      created_at: number;
      /**
       * Id
       * @description Unique identifier of the design (UUID)
       */
      id: string;
      /**
       * Name
       * @description Name of the design
       */
      name: string;
      /**
       * Preview Url
       * @description URL to preview the design
       */
      preview_url: string;
      /**
       * Type
       * @description Type of the design
       * @enum {string}
       */
      type: "static" | "animated" | "printer" | "printer_multipage";
      /**
       * Updated At
       * @description Last update timestamp of the design (epoch seconds)
       */
      updated_at: number;
  }[];
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
 * Type of ABYSSALE's ABYSSALE_GET_FONTS tool input.
 */
type ABYSSALE_GET_FONTS_INPUT = object;

/**
 * Type of ABYSSALE's ABYSSALE_GET_FONTS tool output.
 */
type ABYSSALE_GET_FONTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Available Weights
       * @description List of available font weights.
       */
      available_weights: number[];
      /**
       * Id
       * @description Unique identifier for the font (UUID).
       */
      id: string;
      /**
       * Name
       * @description Name of the font.
       */
      name: string;
      /**
       * Type
       * @description Type of the font: 'google' or 'custom'.
       * @enum {string}
       */
      type: "google" | "custom";
  }[];
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
 * Type map of all available tool input types for toolkit "ABYSSALE".
 */
export type ABYSSALE_TOOL_INPUTS = {
  AUTHENTICATION_TEST: ABYSSALE_AUTHENTICATION_TEST_INPUT
  CREATE_PROJECT: ABYSSALE_CREATE_PROJECT_INPUT
  GET_DESIGNS: ABYSSALE_GET_DESIGNS_INPUT
  GET_FONTS: ABYSSALE_GET_FONTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ABYSSALE".
 */
export type ABYSSALE_TOOL_OUTPUTS = {
  AUTHENTICATION_TEST: ABYSSALE_AUTHENTICATION_TEST_OUTPUT
  CREATE_PROJECT: ABYSSALE_CREATE_PROJECT_OUTPUT
  GET_DESIGNS: ABYSSALE_GET_DESIGNS_OUTPUT
  GET_FONTS: ABYSSALE_GET_FONTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ABYSSALE toolkit.
 */
export const ABYSSALE = {
  slug: "abyssale",
  tools: {
    /**
     * Tool to test api authentication via the /ready endpoint. use after configuring your api key to ensure credentials are valid before other requests.
     */
    AUTHENTICATION_TEST: "ABYSSALE_AUTHENTICATION_TEST",
    /**
     * Tool to create a new project to organize designs and images. use after deciding on a project name to group your templates and assets.
     */
    CREATE_PROJECT: "ABYSSALE_CREATE_PROJECT",
    /**
     * Tool to retrieve all designs with optional filtering by category or type. use after authenticating to list available templates.
     */
    GET_DESIGNS: "ABYSSALE_GET_DESIGNS",
    /**
     * Tool to list all available fonts, including custom and google fonts. use when you need to fetch font options before generating or editing designs.
     */
    GET_FONTS: "ABYSSALE_GET_FONTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ABYSSALE".
 */
export type ABYSSALE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ABYSSALE".
 */
export type ABYSSALE_TRIGGER_EVENTS = {}
