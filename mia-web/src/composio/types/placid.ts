// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PLACID's PLACID_CREATE_TEMPLATE tool input.
 */
type PLACID_CREATE_TEMPLATE_INPUT = {
  /**
   * Custom Data
   * @description Optional arbitrary custom data fields.
   * @default null
   */
  custom_data: {
      [key: string]: unknown;
  } | null;
  /**
   * Height
   * @description Height of the template in pixels (must be >= 1).
   */
  height?: number;
  /**
   * Tags
   * @description Optional list of tags to organize templates.
   * @default null
   */
  tags: string[] | null;
  /**
   * Title
   * @description Name of the template.
   */
  title?: string;
  /**
   * Url
   * Format: uri
   * @description Optional URL pointing to a PSD or other template source.
   * @default null
   */
  url: unknown;
  /**
   * Width
   * @description Width of the template in pixels (must be >= 1).
   */
  width?: number;
};

/**
 * Type of PLACID's PLACID_CREATE_TEMPLATE tool output.
 */
type PLACID_CREATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp of creation.
       */
      created_at: string;
      /**
       * Custom Data
       * @description Custom data attached to the template.
       */
      custom_data: {
          [key: string]: unknown;
      };
      /**
       * Height
       * @description Template height in pixels.
       */
      height: number;
      /**
       * Id
       * @description Unique template identifier.
       */
      id: string;
      /**
       * Layers
       * @description Array of template layers.
       */
      layers: unknown[];
      /**
       * Tags
       * @description List of tags associated with the template.
       */
      tags: string[];
      /**
       * Title
       * @description Template title.
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp of last update.
       */
      updated_at: string;
      /**
       * Width
       * @description Template width in pixels.
       */
      width: number;
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
 * Type of PLACID's PLACID_DELETE_TEMPLATE tool input.
 */
type PLACID_DELETE_TEMPLATE_INPUT = {
  /**
   * Template Uuid
   * @description UUID of the template to delete
   */
  template_uuid?: string;
};

/**
 * Type of PLACID's PLACID_DELETE_TEMPLATE tool output.
 */
type PLACID_DELETE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional info or error message, if any
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if deletion was successful
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
 * Type of PLACID's PLACID_GET_COLLECTIONS tool input.
 */
type PLACID_GET_COLLECTIONS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (must be >= 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of collections per page (1-100). Server default is 15 if not specified.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of PLACID's PLACID_GET_COLLECTIONS tool output.
 */
type PLACID_GET_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description List of template collections
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO-8601 format
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the collection
       */
      id: string;
      /**
       * Name
       * @description Name of the collection
       */
      name: string;
      /**
       * Project Id
       * @description Identifier of the associated project
       */
      project_id: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO-8601 format
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From Item
       * @description Index of the first item on the current page
       */
      from_item: number;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Per Page
       * @description Number of collections per page
       */
      per_page: number;
      /**
       * To Item
       * @description Index of the last item on the current page
       */
      to_item: number;
      /**
       * Total
       * @description Total number of collections
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "PLACID".
 */
export type PLACID_TOOL_INPUTS = {
  CREATE_TEMPLATE: PLACID_CREATE_TEMPLATE_INPUT
  DELETE_TEMPLATE: PLACID_DELETE_TEMPLATE_INPUT
  GET_COLLECTIONS: PLACID_GET_COLLECTIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PLACID".
 */
export type PLACID_TOOL_OUTPUTS = {
  CREATE_TEMPLATE: PLACID_CREATE_TEMPLATE_OUTPUT
  DELETE_TEMPLATE: PLACID_DELETE_TEMPLATE_OUTPUT
  GET_COLLECTIONS: PLACID_GET_COLLECTIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PLACID toolkit.
 */
export const PLACID = {
  slug: "placid",
  tools: {
    /**
     * Tool to create a new placid template. use when you need a template with specific dimensions and optional tags or custom metadata. example: "create a social-media banner."
     */
    CREATE_TEMPLATE: "PLACID_CREATE_TEMPLATE",
    /**
     * Tool to delete a specific template identified by uuid. use after confirming the template is no longer needed.
     */
    DELETE_TEMPLATE: "PLACID_DELETE_TEMPLATE",
    /**
     * Tool to retrieve a list of all template collections. use after authentication to paginate through your placid collections.
     */
    GET_COLLECTIONS: "PLACID_GET_COLLECTIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PLACID".
 */
export type PLACID_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PLACID".
 */
export type PLACID_TRIGGER_EVENTS = {}
