// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PDF4ME's PDF4ME_CONVERT_TO_PDF tool input.
 */
type PDF4ME_CONVERT_TO_PDF_INPUT = {
  /**
   * Document
   * @description Document object with base64 data and optional filename.
   */
  document?: {
      /**
       * Doc Data
       * @description Base64-encoded file data to convert.
       */
      docData: string;
      /**
       * Name
       * @description Original file name including extension, e.g., 'sample.docx'.
       * @default null
       */
      name: string | null;
  };
  /**
   * Pdf Convert Actions
   * @description List of conversion option sets. If omitted, default conversion is applied.
   * @default null
   */
  pdfConvertActions: {
      /**
       * Language
       * @description OCR language code, e.g., 'eng', 'deu'.
       * @default null
       */
      language: string | null;
      /**
       * Ocr
       * @description Run OCR on images if true.
       * @default false
       */
      ocr: boolean | null;
      /**
       * Page Selection
       * @description Page ranges to convert, e.g., '1-3,5-7'.
       * @default null
       */
      pageSelection: string | null;
      /**
       * Pdf A Conversion
       * @description Convert to PDF/A if true.
       * @default false
       */
      pdfAConversion: boolean | null;
  }[] | null;
};

/**
 * Type of PDF4ME's PDF4ME_CONVERT_TO_PDF tool output.
 */
type PDF4ME_CONVERT_TO_PDF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document
       * @description Converted PDF document object.
       */
      document: {
          /**
           * Doc Data
           * @description Base64-encoded converted PDF document payload.
           */
          docData: string;
          /**
           * Name
           * @description File name of the converted PDF, e.g., 'converted.pdf'.
           */
          name: string;
      };
      /**
       * Errors
       * @description List of error messages, if any.
       */
      errors: string[];
      /**
       * Job Id
       * @description Job ID for tracking the conversion request.
       */
      jobId: string;
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
 * Type map of all available tool input types for toolkit "PDF4ME".
 */
export type PDF4ME_TOOL_INPUTS = {
  CONVERT_TO_PDF: PDF4ME_CONVERT_TO_PDF_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PDF4ME".
 */
export type PDF4ME_TOOL_OUTPUTS = {
  CONVERT_TO_PDF: PDF4ME_CONVERT_TO_PDF_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PDF4ME toolkit.
 */
export const PDF4ME = {
  slug: "pdf4me",
  tools: {
    /**
     * Tool to convert various document and image formats to pdf. use when you need to transform base64-encoded files into pdfs before further processing.
     */
    CONVERT_TO_PDF: "PDF4ME_CONVERT_TO_PDF",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PDF4ME".
 */
export type PDF4ME_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PDF4ME".
 */
export type PDF4ME_TRIGGER_EVENTS = {}
