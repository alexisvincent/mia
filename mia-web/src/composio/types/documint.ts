// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOCUMINT's DOCUMINT_DELETE_TEMPLATE tool input.
 */
type DOCUMINT_DELETE_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description The unique identifier of the template to delete.
   */
  template_id?: string;
};

/**
 * Type of DOCUMINT's DOCUMINT_DELETE_TEMPLATE tool output.
 */
type DOCUMINT_DELETE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional details regarding the deletion process.
       */
      message: string;
      /**
       * Success
       * @description Indicates if the template was successfully deleted.
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
 * Type of DOCUMINT's DOCUMINT_GET_TEMPLATE tool input.
 */
type DOCUMINT_GET_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description The unique identifier of the template to retrieve.
   */
  templateId?: string;
};

/**
 * Type of DOCUMINT's DOCUMINT_GET_TEMPLATE tool output.
 */
type DOCUMINT_GET_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier for the template.
       */
      _id: string;
      /**
       * Created At
       * @description ISO-8601 timestamp when the template was created.
       */
      createdAt: string;
      /**
       * Fields
       * @description List of fields defined in the template.
       */
      fields: {
          [key: string]: unknown;
      }[];
      /**
       * Meta
       * @description Additional template metadata.
       */
      meta: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Name of the template.
       */
      name: string;
      /**
       * Pdf
       * @description PDF template metadata.
       */
      pdf: {
          [key: string]: unknown;
      };
      /**
       * Updated At
       * @description ISO-8601 timestamp when the template was last updated.
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
 * Type of DOCUMINT's DOCUMINT_LIST_DOCUMENTS tool input.
 */
type DOCUMINT_LIST_DOCUMENTS_INPUT = object;

/**
 * Type of DOCUMINT's DOCUMINT_LIST_DOCUMENTS tool output.
 */
type DOCUMINT_LIST_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description List of documents associated with the authenticated user's account.
       */
      documents: ({
          /**
           * Created At
           * @description ISO 8601 timestamp when the document was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the document.
           */
          id: string;
          /**
           * Name
           * @description Name of the document.
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the document was last updated.
           */
          updated_at: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of DOCUMINT's DOCUMINT_LIST_TEMPLATES tool input.
 */
type DOCUMINT_LIST_TEMPLATES_INPUT = object;

/**
 * Type of DOCUMINT's DOCUMINT_LIST_TEMPLATES tool output.
 */
type DOCUMINT_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of document templates available in the user's account.
       */
      templates: ({
          /**
           * Created At
           * @description ISO 8601 timestamp when the template was created.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier for the template.
           */
          id: string;
          /**
           * Name
           * @description Name of the template.
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the template was last updated.
           */
          updatedAt: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of DOCUMINT's DOCUMINT_UPDATE_TEMPLATE tool input.
 */
type DOCUMINT_UPDATE_TEMPLATE_INPUT = {
  /**
   * Description
   * @description New description for the template
   * @default null
   */
  description: string | null;
  /**
   * Layout
   * @description New layout definition JSON for the template
   * @default null
   */
  layout: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description New name for the template
   * @default null
   */
  name: string | null;
  /**
   * Settings
   * @description Additional settings JSON for the template
   * @default null
   */
  settings: {
      [key: string]: unknown;
  } | null;
  /**
   * Template Id
   * @description ID of the template you wish to update
   */
  template_id?: string;
};

/**
 * Type of DOCUMINT's DOCUMINT_UPDATE_TEMPLATE tool output.
 */
type DOCUMINT_UPDATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the template
       */
      _id: string;
      /**
       * Created At
       * @description ISO timestamp when the template was created
       */
      createdAt: string;
      /**
       * Description
       * @description Template description
       * @default null
       */
      description: string | null;
      /**
       * Layout
       * @description Layout data for the template
       */
      layout: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Template name
       */
      name: string;
      /**
       * Settings
       * @description Template settings
       */
      settings: {
          [key: string]: unknown;
      };
      /**
       * Updated At
       * @description ISO timestamp when the template was last updated
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
 * Type map of all available tool input types for toolkit "DOCUMINT".
 */
export type DOCUMINT_TOOL_INPUTS = {
  DELETE_TEMPLATE: DOCUMINT_DELETE_TEMPLATE_INPUT
  GET_TEMPLATE: DOCUMINT_GET_TEMPLATE_INPUT
  LIST_DOCUMENTS: DOCUMINT_LIST_DOCUMENTS_INPUT
  LIST_TEMPLATES: DOCUMINT_LIST_TEMPLATES_INPUT
  UPDATE_TEMPLATE: DOCUMINT_UPDATE_TEMPLATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOCUMINT".
 */
export type DOCUMINT_TOOL_OUTPUTS = {
  DELETE_TEMPLATE: DOCUMINT_DELETE_TEMPLATE_OUTPUT
  GET_TEMPLATE: DOCUMINT_GET_TEMPLATE_OUTPUT
  LIST_DOCUMENTS: DOCUMINT_LIST_DOCUMENTS_OUTPUT
  LIST_TEMPLATES: DOCUMINT_LIST_TEMPLATES_OUTPUT
  UPDATE_TEMPLATE: DOCUMINT_UPDATE_TEMPLATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOCUMINT toolkit.
 */
export const DOCUMINT = {
  slug: "documint",
  tools: {
    /**
     * Tool to permanently delete a single template by its id. use when you need to remove an outdated or unused template; ensure the template id is correct before calling.
     */
    DELETE_TEMPLATE: "DOCUMINT_DELETE_TEMPLATE",
    /**
     * Tool to retrieve a single template by its id. use when you need to fetch details of a specific template before generating documents.
     */
    GET_TEMPLATE: "DOCUMINT_GET_TEMPLATE",
    /**
     * Tool to list all documents in the authenticated user's account. use after obtaining a valid api key.
     */
    LIST_DOCUMENTS: "DOCUMINT_LIST_DOCUMENTS",
    /**
     * Tool to list all templates in the authenticated user's account. use after obtaining a valid api key.
     */
    LIST_TEMPLATES: "DOCUMINT_LIST_TEMPLATES",
    /**
     * Tool to update a single template by its id. use when you need to modify an existing template's settings or layout after fetching its current details.
     */
    UPDATE_TEMPLATE: "DOCUMINT_UPDATE_TEMPLATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOCUMINT".
 */
export type DOCUMINT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOCUMINT".
 */
export type DOCUMINT_TRIGGER_EVENTS = {}
