// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EXTRACTA_AI's EXTRACTA_AI_CREATE_EXTRACTION tool input.
 */
type EXTRACTA_AI_CREATE_EXTRACTION_INPUT = {
  /**
   * Extraction Details
   * @description Extraction configuration details.
   */
  extractionDetails?: {
      /**
       * Description
       * @description Brief description of what to extract.
       */
      description: string;
      /**
       * Fields
       * @description List of fields to extract with details.
       */
      fields: {
          /**
           * Description
           * @description Description of the field for guidance.
           */
          description: string;
          /**
           * Example
           * @description Example value for the field.
           */
          example: string;
          /**
           * Key
           * @description Unique key for the field to extract.
           */
          key: string;
      }[];
      /**
       * Language
       * @description Language of the document content.
       */
      language: string;
      /**
       * Name
       * @description Name for the extraction job.
       */
      name: string;
      /**
       * Options
       * @description Processing options for the extraction.
       */
      options: {
          /**
           * Handwritten Text Recognition
           * @description Whether to enable handwritten text recognition.
           */
          handwrittenTextRecognition: boolean;
          /**
           * Has Table
           * @description Whether the document contains tables that need extraction.
           */
          hasTable: boolean;
      };
  };
};

/**
 * Type of EXTRACTA_AI's EXTRACTA_AI_CREATE_EXTRACTION tool output.
 */
type EXTRACTA_AI_CREATE_EXTRACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Extraction Id
       * @description Unique identifier assigned to the extraction job.
       */
      extractionId: string;
      /**
       * Message
       * @description Optional additional information about the request.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status of the creation request, e.g., 'success' or 'error'.
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
 * Type of EXTRACTA_AI's EXTRACTA_AI_DELETE_EXTRACTION tool input.
 */
type EXTRACTA_AI_DELETE_EXTRACTION_INPUT = {
  /**
   * Extraction Id
   * @description The unique identifier of the extraction to delete.
   */
  extractionId?: string;
};

/**
 * Type of EXTRACTA_AI's EXTRACTA_AI_DELETE_EXTRACTION tool output.
 */
type EXTRACTA_AI_DELETE_EXTRACTION_OUTPUT = {
  /**
   * DeleteExtractionResponseData
   * @description Any additional data returned by the API.
   * @default null
   */
  data: {
      /**
       * Deleted Id
       * @description The ID of the extraction that was deleted, if returned.
       * @default null
       */
      deletedId: string | null;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional message detailing the result.
   */
  message?: string;
  /**
   * Status
   * @description Status of the deletion request (e.g., 'success').
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EXTRACTA_AI's EXTRACTA_AI_VIEW_EXTRACTION tool input.
 */
type EXTRACTA_AI_VIEW_EXTRACTION_INPUT = {
  /**
   * Extraction Id
   * @description Unique identifier of the extraction job.
   */
  extractionId?: string;
};

/**
 * Type of EXTRACTA_AI's EXTRACTA_AI_VIEW_EXTRACTION tool output.
 */
type EXTRACTA_AI_VIEW_EXTRACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Extraction Result
       * @description Detailed extraction results and any failures.
       */
      extractionResult: {
          /**
           * Data
           * @description List of extracted data objects per result row.
           */
          data: {
              [key: string]: unknown;
          }[];
          /**
           * Failed Rows
           * @description List of rows that failed extraction, if any.
           * @default null
           */
          failedRows: {
              [key: string]: unknown;
          }[] | null;
      };
      /**
       * Message
       * @description Informational or error message regarding the extraction.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status of the extraction request (e.g., 'pending', 'completed', 'failed').
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
 * Type map of all available tool input types for toolkit "EXTRACTA_AI".
 */
export type EXTRACTA_AI_TOOL_INPUTS = {
  CREATE_EXTRACTION: EXTRACTA_AI_CREATE_EXTRACTION_INPUT
  DELETE_EXTRACTION: EXTRACTA_AI_DELETE_EXTRACTION_INPUT
  VIEW_EXTRACTION: EXTRACTA_AI_VIEW_EXTRACTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EXTRACTA_AI".
 */
export type EXTRACTA_AI_TOOL_OUTPUTS = {
  CREATE_EXTRACTION: EXTRACTA_AI_CREATE_EXTRACTION_OUTPUT
  DELETE_EXTRACTION: EXTRACTA_AI_DELETE_EXTRACTION_OUTPUT
  VIEW_EXTRACTION: EXTRACTA_AI_VIEW_EXTRACTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EXTRACTA_AI toolkit.
 */
export const EXTRACTA_AI = {
  slug: "extracta_ai",
  tools: {
    /**
     * Tool to initiate a new document extraction process. use when you have prepared extraction details and need to start processing the document. returns a unique extraction id for tracking.
     */
    CREATE_EXTRACTION: "EXTRACTA_AI_CREATE_EXTRACTION",
    /**
     * Tool to delete an extraction process. use after confirming the extraction id to remove. example: delete extraction with id '123e4567-e89b-12d3-a456-426614174000'.
     */
    DELETE_EXTRACTION: "EXTRACTA_AI_DELETE_EXTRACTION",
    /**
     * Tool to retrieve details of an existing extraction process. use after starting an extraction to monitor its status and retrieve results.
     */
    VIEW_EXTRACTION: "EXTRACTA_AI_VIEW_EXTRACTION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EXTRACTA_AI".
 */
export type EXTRACTA_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EXTRACTA_AI".
 */
export type EXTRACTA_AI_TRIGGER_EVENTS = {}
