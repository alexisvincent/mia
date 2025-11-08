// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OCRSPACE's OCRSPACE_OCR_PARSE_IMAGE_POST tool input.
 */
type OCRSPACE_OCR_PARSE_IMAGE_POST_INPUT = {
  /**
   * Ocr Engine
   * @description OCR engine: 1=standard, 2=experimental
   * @default 1
   * @enum {integer}
   */
  OCREngine: 1 | 2;
  /**
   * Base64 Image
   * @description Base64-encoded image data (data URI)
   * @default null
   */
  base64Image: string | null;
  /**
   * Detect Orientation
   * @description Whether to detect text orientation
   * @default false
   */
  detectOrientation: boolean;
  /**
   * File
   * Format: binary
   * @description Binary content of image or PDF file (multipart upload)
   * @default null
   */
  file: string | null;
  /**
   * Filetype
   * @description File type hint for URL or base64 input
   * @default null
   */
  filetype: string | null;
  /**
   * Is Create Searchable Pdf
   * @description Whether to return searchable PDF
   * @default false
   */
  isCreateSearchablePdf: boolean;
  /**
   * Is Overlay Required
   * @description Whether to return text overlay data
   * @default false
   */
  isOverlayRequired: boolean;
  /**
   * Is Searchable Pdf Hide Text Layer
   * @description Whether to hide text layer in searchable PDF
   * @default false
   */
  isSearchablePdfHideTextLayer: boolean;
  /**
   * Is Table
   * @description Whether to attempt table recognition
   * @default false
   */
  isTable: boolean;
  /**
   * Language
   * @description OCR language code
   * @default eng
   * @enum {string}
   */
  language: "eng" | "spa" | "deu";
  /**
   * Scale
   * @description Whether to scale low-resolution image
   * @default false
   */
  scale: boolean;
  /**
   * Url
   * @description Public URL of image or PDF
   * @default null
   */
  url: string | null;
};

/**
 * Type of OCRSPACE's OCRSPACE_OCR_PARSE_IMAGE_POST tool output.
 */
type OCRSPACE_OCR_PARSE_IMAGE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Error Details */
      ErrorDetails: string | null;
      /** Error Message */
      ErrorMessage: string[] | null;
      /** Is Errored On Processing */
      IsErroredOnProcessing: boolean;
      /** Ocr Exit Code */
      OCRExitCode: number;
      /** Parsed Results */
      ParsedResults: {
          /** Error Details */
          ErrorDetails: string | null;
          /** Error Message */
          ErrorMessage: string | null;
          /** File Parse Exit Code */
          FileParseExitCode: number;
          /** Parsed Text */
          ParsedText: string;
          /** Text Orientation */
          TextOrientation: string | null;
          /** TextOverlay */
          TextOverlay: {
              /** Has Overlay */
              HasOverlay: boolean;
              /** Lines */
              Lines: {
                  /** Height */
                  Height: number;
                  /** Line Text */
                  LineText: string;
                  /** Min Left */
                  MinLeft: number;
                  /** Min Top */
                  MinTop: number;
                  /** Width */
                  Width: number;
              }[];
              /** Message */
              Message: string | null;
          } | null;
      }[];
      /** Processing Time In Milliseconds */
      ProcessingTimeInMilliseconds: string;
      /** Searchable Pdfurl */
      SearchablePDFURL: string | null;
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
 * Type map of all available tool input types for toolkit "OCRSPACE".
 */
export type OCRSPACE_TOOL_INPUTS = {
  OCR_PARSE_IMAGE_POST: OCRSPACE_OCR_PARSE_IMAGE_POST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OCRSPACE".
 */
export type OCRSPACE_TOOL_OUTPUTS = {
  OCR_PARSE_IMAGE_POST: OCRSPACE_OCR_PARSE_IMAGE_POST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OCRSPACE toolkit.
 */
export const OCRSPACE = {
  slug: "ocrspace",
  tools: {
    /**
     * Tool to submit image or pdf to ocr.space for ocr processing.
     */
    OCR_PARSE_IMAGE_POST: "OCRSPACE_OCR_PARSE_IMAGE_POST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OCRSPACE".
 */
export type OCRSPACE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OCRSPACE".
 */
export type OCRSPACE_TRIGGER_EVENTS = {}
