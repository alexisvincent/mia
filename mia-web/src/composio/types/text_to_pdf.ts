// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TEXT_TO_PDF's TEXT_TO_PDF_CONVERT_TEXT_TO_PDF tool input.
 */
type TEXT_TO_PDF_CONVERT_TEXT_TO_PDF_INPUT = {
  /**
   * File Type
   * @description The type of file to convert to, choose between txt and markdown
   * @enum {string}
   */
  file_type?: "txt" | "markdown";
  /**
   * Text
   * @description The text to convert to the specified file type
   */
  text?: string;
};

/**
 * Type of TEXT_TO_PDF's TEXT_TO_PDF_CONVERT_TEXT_TO_PDF tool output.
 */
type TEXT_TO_PDF_CONVERT_TEXT_TO_PDF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description The file to download
       */
      file: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description URL of the file.
           */
          s3url: string;
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
 * Type map of all available tool input types for toolkit "TEXT_TO_PDF".
 */
export type TEXT_TO_PDF_TOOL_INPUTS = {
  CONVERT_TEXT_TO_PDF: TEXT_TO_PDF_CONVERT_TEXT_TO_PDF_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TEXT_TO_PDF".
 */
export type TEXT_TO_PDF_TOOL_OUTPUTS = {
  CONVERT_TEXT_TO_PDF: TEXT_TO_PDF_CONVERT_TEXT_TO_PDF_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TEXT_TO_PDF toolkit.
 */
export const TEXT_TO_PDF = {
  slug: "text_to_pdf",
  tools: {
    /**
     * Convert text to pdf
     */
    CONVERT_TEXT_TO_PDF: "TEXT_TO_PDF_CONVERT_TEXT_TO_PDF",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TEXT_TO_PDF".
 */
export type TEXT_TO_PDF_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TEXT_TO_PDF".
 */
export type TEXT_TO_PDF_TRIGGER_EVENTS = {}
