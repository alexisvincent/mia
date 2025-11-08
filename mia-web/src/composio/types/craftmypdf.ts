// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CRAFTMYPDF's CRAFTMYPDF_CREATE_EDITOR_SESSION tool input.
 */
type CRAFTMYPDF_CREATE_EDITOR_SESSION_INPUT = {
  /**
   * Back Url
   * @description URL to navigate to when the user clicks the back button.
   * @default null
   */
  backURL: string | null;
  /**
   * Can Create Pdf
   * @description Allow generating PDF from the editor.
   * @default null
   */
  canCreatePDF: boolean | null;
  /**
   * Can Edit Json
   * @description Allow direct JSON editing of the template.
   * @default null
   */
  canEditJSON: boolean | null;
  /**
   * Can Preview
   * @description Allow previewing document within the editor.
   * @default null
   */
  canPreview: boolean | null;
  /**
   * Can Save
   * @description Allow saving changes in the editor.
   * @default null
   */
  canSave: boolean | null;
  /**
   * Can Show Data
   * @description Show or hide data tab in the editor.
   * @default null
   */
  canShowData: boolean | null;
  /**
   * Can Show Expression Doc
   * @description Show or hide expression documentation pane.
   * @default null
   */
  canShowExpressionDoc: boolean | null;
  /**
   * Can Show Header
   * @description Show CraftMyPDF header in the editor UI.
   * @default null
   */
  canShowHeader: boolean | null;
  /**
   * Can Show Help
   * @description Show or hide help/documentation panel.
   * @default null
   */
  canShowHelp: boolean | null;
  /**
   * Can Show Layers
   * @description Show layers panel in the editor.
   * @default null
   */
  canShowLayers: boolean | null;
  /**
   * Can Show Property Binding
   * @description Show or hide property binding options.
   * @default null
   */
  canShowPropertyBinding: boolean | null;
  /**
   * Can Show Property Panel
   * @description Show property panel for elements in the editor.
   * @default null
   */
  canShowPropertyPanel: boolean | null;
  /**
   * Can View Settings
   * @description Allow viewing editor settings.
   * @default null
   */
  canViewSettings: boolean | null;
  /**
   * Expiration
   * @description Session lifetime in minutes (e.g., 1440 for 24 hours).
   * @default null
   */
  expiration: number | null;
  /**
   * Json Mode
   * @description Mode for JSON: 1 = editor, 2 = viewer.
   * @default null
   */
  jsonMode: number | null;
  /**
   * Template Id
   * @description The PDF template ID to open in the editor.
   */
  template_id?: string;
};

/**
 * Type of CRAFTMYPDF's CRAFTMYPDF_CREATE_EDITOR_SESSION tool output.
 */
type CRAFTMYPDF_CREATE_EDITOR_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expire After
       * @description Expiration time in ISO 8601 format.
       */
      expire_after: string;
      /**
       * Expire After Unix Timestamp
       * @description Expiration time as a Unix timestamp.
       */
      expire_after_unix_timestamp: number;
      /**
       * Status
       * @description Operation result status, e.g., 'success'.
       */
      status: string;
      /**
       * Token Uuid
       * @description UUID identifier for the session token.
       */
      token_uuid: string;
      /**
       * Url
       * @description Embeddable editor session URL.
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
 * Type of CRAFTMYPDF's CRAFTMYPDF_CREATE_PDF_ASYNC tool input.
 */
type CRAFTMYPDF_CREATE_PDF_ASYNC_INPUT = {
  /**
   * Data
   * @description JSON payload to populate the template
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Expiration
   * @description Optional expiration time in minutes for the PDF link
   * @default null
   */
  expiration: number | null;
  /**
   * Template Id
   * @description ID of the template to render
   */
  template_id?: string;
  /**
   * Webhook Url
   * @description Webhook URL to receive the generated PDF when ready
   */
  webhook_url?: string;
};

/**
 * Type of CRAFTMYPDF's CRAFTMYPDF_CREATE_PDF_ASYNC tool output.
 */
type CRAFTMYPDF_CREATE_PDF_ASYNC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Transaction Ref
       * @description Reference ID returned immediately to track the job
       */
      transaction_ref: string;
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
 * Type of CRAFTMYPDF's CRAFTMYPDF_LIST_TEMPLATES tool input.
 */
type CRAFTMYPDF_LIST_TEMPLATES_INPUT = {
  /**
   * Group Name
   * @description Filter templates by group name
   * @default null
   */
  group_name: string | null;
  /**
   * Limit
   * @description Maximum number of templates to return, must be at least 1
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of templates to skip before returning results, must be non-negative
   * @default null
   */
  offset: number | null;
};

/**
 * Type of CRAFTMYPDF's CRAFTMYPDF_LIST_TEMPLATES tool output.
 */
type CRAFTMYPDF_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Request status indicator, e.g., 'success'
       */
      status: string;
      /**
       * Templates
       * @description List of template objects
       */
      templates: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the template was created
           */
          created_at: string;
          /**
           * Group Name
           * @description Associated group name, if any
           * @default null
           */
          group_name: string | null;
          /**
           * Name
           * @description Template name
           */
          name: string;
          /**
           * Status
           * @description Template status
           */
          status: string;
          /**
           * Template Id
           * @description Unique ID of the template
           */
          template_id: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the template was last updated
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
 * Type map of all available tool input types for toolkit "CRAFTMYPDF".
 */
export type CRAFTMYPDF_TOOL_INPUTS = {
  CREATE_EDITOR_SESSION: CRAFTMYPDF_CREATE_EDITOR_SESSION_INPUT
  CREATE_PDF_ASYNC: CRAFTMYPDF_CREATE_PDF_ASYNC_INPUT
  LIST_TEMPLATES: CRAFTMYPDF_LIST_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CRAFTMYPDF".
 */
export type CRAFTMYPDF_TOOL_OUTPUTS = {
  CREATE_EDITOR_SESSION: CRAFTMYPDF_CREATE_EDITOR_SESSION_OUTPUT
  CREATE_PDF_ASYNC: CRAFTMYPDF_CREATE_PDF_ASYNC_OUTPUT
  LIST_TEMPLATES: CRAFTMYPDF_LIST_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CRAFTMYPDF toolkit.
 */
export const CRAFTMYPDF = {
  slug: "craftmypdf",
  tools: {
    /**
     * Tool to create an embeddable editor session URL for a template. Use when you need to embed the PDF editor for a specific template.
     */
    CREATE_EDITOR_SESSION: "CRAFTMYPDF_CREATE_EDITOR_SESSION",
    /**
     * Tool to queue asynchronous PDF generation via webhook. Use when you need to generate a PDF in the background and receive the result via a webhook.
     */
    CREATE_PDF_ASYNC: "CRAFTMYPDF_CREATE_PDF_ASYNC",
    /**
     * Tool to retrieve a paginated list of PDF templates. Use when you need to browse available templates before generating a PDF.
     */
    LIST_TEMPLATES: "CRAFTMYPDF_LIST_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CRAFTMYPDF".
 */
export type CRAFTMYPDF_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CRAFTMYPDF".
 */
export type CRAFTMYPDF_TRIGGER_EVENTS = {}
