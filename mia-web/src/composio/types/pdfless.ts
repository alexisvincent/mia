// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PDFLESS's PDFLESS_LIST_DOCUMENT_TEMPLATES tool input.
 */
type PDFLESS_LIST_DOCUMENT_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number for pagination. Default is 1.
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page. Default is 25.
   * @default null
   */
  pageSize: number | null;
};

/**
 * Type of PDFLESS's PDFLESS_LIST_DOCUMENT_TEMPLATES tool output.
 */
type PDFLESS_LIST_DOCUMENT_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description An array of document templates.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the template was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the document template.
       */
      id: string;
      /**
       * Name
       * @description Name of the document template.
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the template was last updated.
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
   * Pagination
   * @description Pagination details.
   */
  pagination?: {
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Page Size
       * @description Number of items per page.
       */
      pageSize: number;
      /**
       * Total Items
       * @description Total number of document templates.
       */
      totalItems: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      totalPages: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "PDFLESS".
 */
export type PDFLESS_TOOL_INPUTS = {
  LIST_DOCUMENT_TEMPLATES: PDFLESS_LIST_DOCUMENT_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PDFLESS".
 */
export type PDFLESS_TOOL_OUTPUTS = {
  LIST_DOCUMENT_TEMPLATES: PDFLESS_LIST_DOCUMENT_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PDFLESS toolkit.
 */
export const PDFLESS = {
  slug: "pdfless",
  tools: {
    /**
     * Tool to list document templates. use when you need to fetch available templates before generating a pdf.
     */
    LIST_DOCUMENT_TEMPLATES: "PDFLESS_LIST_DOCUMENT_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PDFLESS".
 */
export type PDFLESS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PDFLESS".
 */
export type PDFLESS_TRIGGER_EVENTS = {}
