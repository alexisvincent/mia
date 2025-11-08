// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of APITEMPLATE_IO's APITEMPLATE_IO_CREATE_PDF tool input.
 */
type APITEMPLATE_IO_CREATE_PDF_INPUT = {
  /**
   * Data
   * @description JSON data object to populate the template.
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Template Id
   * @description ID of the template to use for PDF generation.
   */
  template_id?: string;
};

/**
 * Type of APITEMPLATE_IO's APITEMPLATE_IO_CREATE_PDF tool output.
 */
type APITEMPLATE_IO_CREATE_PDF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Download Url
       * @description URL to download the generated PDF.
       */
      download_url: string;
      /**
       * Status
       * @description Status of the request (e.g., 'success').
       */
      status: string;
      /**
       * Template Id
       * @description ID of the template used.
       */
      template_id: string;
      /**
       * Transaction Ref
       * @description Reference ID for the PDF generation transaction.
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
 * Type of APITEMPLATE_IO's APITEMPLATE_IO_DELETE_OBJECT tool input.
 */
type APITEMPLATE_IO_DELETE_OBJECT_INPUT = {
  /**
   * Transaction Ref
   * @description Transaction reference of the object to delete.
   */
  transaction_ref?: string;
};

/**
 * Type of APITEMPLATE_IO's APITEMPLATE_IO_DELETE_OBJECT tool output.
 */
type APITEMPLATE_IO_DELETE_OBJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Status of the deletion operation.
       */
      status: string;
      /**
       * Transaction Ref
       * @description Transaction reference of the deleted object.
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
 * Type of APITEMPLATE_IO's APITEMPLATE_IO_LIST_OBJECTS tool input.
 */
type APITEMPLATE_IO_LIST_OBJECTS_INPUT = {
  /**
   * End Date
   * @description ISO8601 timestamp to include objects created on or before, e.g. '2022-09-30T23:59:59Z'.
   * @default null
   */
  end_date: string | null;
  /**
   * Object Type
   * @description Filter by object type. One of 'pdf', 'image', 'excel', 'docx'.
   * @default null
   * @enum {string|null}
   */
  object_type: "pdf" | "image" | "excel" | "docx" | null;
  /**
   * Page
   * @description Page number for pagination (>= 1). Default is 1.
   * @default 1
   */
  page: number;
  /**
   * Size
   * @description Number of items per page (>= 1). Default is 20.
   * @default 20
   */
  size: number;
  /**
   * Start Date
   * @description ISO8601 timestamp to include objects created on or after, e.g. '2022-09-18T00:00:00Z'.
   * @default null
   */
  start_date: string | null;
  /**
   * Template Id
   * @description Filter by the template ID that generated the objects.
   * @default null
   */
  template_id: string | null;
};

/**
 * Type of APITEMPLATE_IO's APITEMPLATE_IO_LIST_OBJECTS tool output.
 */
type APITEMPLATE_IO_LIST_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of matching objects.
       */
      count: number;
      /**
       * Next
       * @description URL for the next page, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of object details.
       */
      results: {
          /**
           * Created At
           * @description ISO8601 timestamp when the object was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the object.
           */
          id: string;
          /**
           * Object Type
           * @description Type of the object.
           * @enum {string}
           */
          object_type: "pdf" | "image" | "excel" | "docx";
          /**
           * Size
           * @description File size in bytes.
           */
          size: number;
          /**
           * Template Id
           * @description Template ID used to generate this object.
           */
          template_id: string;
          /**
           * Url
           * @description Download URL for the object.
           */
          url: string;
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
 * Type of APITEMPLATE_IO's APITEMPLATE_IO_LIST_TEMPLATES tool input.
 */
type APITEMPLATE_IO_LIST_TEMPLATES_INPUT = object;

/**
 * Type of APITEMPLATE_IO's APITEMPLATE_IO_LIST_TEMPLATES tool output.
 */
type APITEMPLATE_IO_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Description
       * @description A brief description of the template
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The unique identifier of the template
       */
      id: string;
      /**
       * Name
       * @description The name of the template
       */
      name: string;
      /**
       * Updated At
       * @description The last update timestamp in ISO 8601 format
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "APITEMPLATE_IO".
 */
export type APITEMPLATE_IO_TOOL_INPUTS = {
  CREATE_PDF: APITEMPLATE_IO_CREATE_PDF_INPUT
  DELETE_OBJECT: APITEMPLATE_IO_DELETE_OBJECT_INPUT
  LIST_OBJECTS: APITEMPLATE_IO_LIST_OBJECTS_INPUT
  LIST_TEMPLATES: APITEMPLATE_IO_LIST_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "APITEMPLATE_IO".
 */
export type APITEMPLATE_IO_TOOL_OUTPUTS = {
  CREATE_PDF: APITEMPLATE_IO_CREATE_PDF_OUTPUT
  DELETE_OBJECT: APITEMPLATE_IO_DELETE_OBJECT_OUTPUT
  LIST_OBJECTS: APITEMPLATE_IO_LIST_OBJECTS_OUTPUT
  LIST_TEMPLATES: APITEMPLATE_IO_LIST_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's APITEMPLATE_IO toolkit.
 */
export const APITEMPLATE_IO = {
  slug: "apitemplate_io",
  tools: {
    /**
     * Tool to create a pdf file using json data and a specified template. use after confirming the template id is valid when you need to generate a pdf.
     */
    CREATE_PDF: "APITEMPLATE_IO_CREATE_PDF",
    /**
     * Tool to delete a generated pdf or image object. use when you want to remove a previously generated object by its transaction reference after confirming it's no longer needed.
     */
    DELETE_OBJECT: "APITEMPLATE_IO_DELETE_OBJECT",
    /**
     * Tool to list all generated pdfs and images with filtering options. use when you need to browse or manage generated assets after creation.
     */
    LIST_OBJECTS: "APITEMPLATE_IO_LIST_OBJECTS",
    /**
     * Tool to retrieve a list of all templates available in your account. use after authenticating to apitemplate.io when you need to enumerate all templates.
     */
    LIST_TEMPLATES: "APITEMPLATE_IO_LIST_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "APITEMPLATE_IO".
 */
export type APITEMPLATE_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "APITEMPLATE_IO".
 */
export type APITEMPLATE_IO_TRIGGER_EVENTS = {}
