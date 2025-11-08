// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PDF_API_IO's PDF_API_IO_LIST_TEMPLATES tool input.
 */
type PDF_API_IO_LIST_TEMPLATES_INPUT = object;

/**
 * Type of PDF_API_IO's PDF_API_IO_LIST_TEMPLATES tool output.
 */
type PDF_API_IO_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description Array of template objects.
       */
      templates: {
          /**
           * Created At
           * @description ISO timestamp when the template was created.
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the template.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier for the template.
           */
          id: string;
          /**
           * Name
           * @description The name of the template.
           */
          name: string;
          /**
           * Preview Url
           * @description URL to preview the template.
           */
          previewUrl: string;
          /**
           * Updated At
           * @description ISO timestamp when the template was last updated.
           */
          updatedAt: string;
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
 * Type map of all available tool input types for toolkit "PDF_API_IO".
 */
export type PDF_API_IO_TOOL_INPUTS = {
  LIST_TEMPLATES: PDF_API_IO_LIST_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PDF_API_IO".
 */
export type PDF_API_IO_TOOL_OUTPUTS = {
  LIST_TEMPLATES: PDF_API_IO_LIST_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PDF_API_IO toolkit.
 */
export const PDF_API_IO = {
  slug: "pdf_api_io",
  tools: {
    /**
     * Tool to list all available templates. use after authentication to retrieve user's templates.
     */
    LIST_TEMPLATES: "PDF_API_IO_LIST_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PDF_API_IO".
 */
export type PDF_API_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PDF_API_IO".
 */
export type PDF_API_IO_TRIGGER_EVENTS = {}
