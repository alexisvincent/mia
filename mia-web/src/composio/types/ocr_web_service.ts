// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OCR_WEB_SERVICE's OCR_WEB_SERVICE_GET_ACCOUNT_CREDENTIALS tool input.
 */
type OCR_WEB_SERVICE_GET_ACCOUNT_CREDENTIALS_INPUT = object;

/**
 * Type of OCR_WEB_SERVICE's OCR_WEB_SERVICE_GET_ACCOUNT_CREDENTIALS tool output.
 */
type OCR_WEB_SERVICE_GET_ACCOUNT_CREDENTIALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * License Code
       * @description OCRWebService account license code extracted from connection metadata
       */
      license_code: string;
      /**
       * User Name
       * @description OCRWebService account username extracted from connection metadata
       */
      user_name: string;
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
 * Type of OCR_WEB_SERVICE's OCR_WEB_SERVICE_GET_ACCOUNT_INFORMATION tool input.
 */
type OCR_WEB_SERVICE_GET_ACCOUNT_INFORMATION_INPUT = {
  /**
   * License Code
   * @description OCRWebService account license code (optional)
   * @default null
   */
  license_code: string | null;
  /**
   * User Name
   * @description OCRWebService account username (optional)
   * @default null
   */
  user_name: string | null;
};

/**
 * Type of OCR_WEB_SERVICE's OCR_WEB_SERVICE_GET_ACCOUNT_INFORMATION tool output.
 */
type OCR_WEB_SERVICE_GET_ACCOUNT_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Available Pages
       * @description Number of pages still available for the current subscription plan.
       */
      AvailablePages: number;
      /**
       * Error Message
       * @description Error message if retrieval failed.
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Expiration Date
       * @description Date when the current subscription expires.
       */
      ExpirationDate: string;
      /**
       * Last Processing Time
       * @description Last OCR processing duration in seconds.
       */
      LastProcessingTime: number;
      /**
       * Max Pages
       * @description Maximum number of pages allowed by the current subscription plan.
       */
      MaxPages: number;
      /**
       * Subcription Plan
       * @description The current subscription plan (as spelled by the API).
       */
      SubcriptionPlan: string;
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
 * Type of OCR_WEB_SERVICE's OCR_WEB_SERVICE_OCR_WEB_SERVICE_LOG tool input.
 */
type OCR_WEB_SERVICE_OCR_WEB_SERVICE_LOG_INPUT = {
  /**
   * From Date
   * @description Start date for log (YYYY-MM-DD)
   */
  from_date?: string;
  /**
   * License Code
   * @description Account license code
   */
  license_code?: string;
  /**
   * Reserved
   * @description Reserved values, if any
   */
  reserved?: string[];
  /**
   * To Date
   * @description End date for log (YYYY-MM-DD)
   */
  to_date?: string;
  /**
   * User Name
   * @description Account user name
   */
  user_name?: string;
};

/**
 * Type of OCR_WEB_SERVICE's OCR_WEB_SERVICE_OCR_WEB_SERVICE_LOG tool output.
 */
type OCR_WEB_SERVICE_OCR_WEB_SERVICE_LOG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ocr Web Service Log Result
       * @description Entire log content as a single string
       */
      OCRWebServiceLogResult: string;
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
 * Type of OCR_WEB_SERVICE's OCR_WEB_SERVICE_OCR_WEB_SERVICE_RECOGNIZE tool input.
 */
type OCR_WEB_SERVICE_OCR_WEB_SERVICE_RECOGNIZE_INPUT = {
  /**
   * Ocrws Input Image
   * @description Input file container (name + data)
   */
  OCRWSInputImage?: {
      /**
       * File Data
       * @description Base64-encoded content of the file to OCR
       */
      fileData: string;
      /**
       * File Name
       * @description Original file name of the input image/PDF
       */
      fileName: string;
  };
  /**
   * Ocrws Setting
   * @description OCR processing settings (languages, output, options)
   */
  OCRWSSetting?: {
      /**
       * Reserved
       * @description Reserved; use 'newline=1' to preserve newline characters
       * @default null
       */
      Reserved: string | null;
      /**
       * Convert To Bw
       * @description Convert image to black-and-white before OCR
       * @default false
       */
      convertToBW: boolean;
      /**
       * Create Output Document
       * @description Produce a formatted output document
       * @default true
       */
      createOutputDocument: boolean;
      /**
       * Get Ocr Text
       * @description Return extracted OCR text in response
       * @default true
       */
      getOCRText: boolean;
      /**
       * Multi Page Doc
       * @description Allow processing of multi-page documents
       * @default false
       */
      multiPageDoc: boolean;
      /**
       * Ocr Languages
       * @description One or more OCR recognition languages
       */
      ocrLanguages: string[];
      /**
       * Ocr Words
       * @description Include word-level coordinates in response
       * @default false
       */
      ocrWords: boolean;
      /**
       * Ocr Zones
       * @description List of rectangular zones for zonal OCR
       * @default null
       */
      ocrZones: {
          /**
           * Height
           * @description Height of zone in pixels
           */
          Height: number;
          /**
           * Left
           * @description Distance in pixels from left edge of source image
           */
          Left: number;
          /**
           * Top
           * @description Distance in pixels from top edge of source image
           */
          Top: number;
          /**
           * Width
           * @description Width of zone in pixels
           */
          Width: number;
          /**
           * Zone Type
           * @description Zone type identifier per OCRWebService docs
           */
          ZoneType: number;
      }[] | null;
      /**
       * Output Document Format
       * @description Format of the output document
       * @enum {string}
       */
      outputDocumentFormat: "DOC" | "PDF" | "EXCEL" | "HTML" | "TXT" | "RTF" | "PDFIMGTEXT" | "DOCX" | "XLSX";
      /**
       * Page Numbers
       * @description Pages or ranges to process, e.g. '1,3-5'
       * @default null
       */
      pageNumbers: string | null;
  };
  /**
   * License Code
   * @description OCRWebService account license code
   */
  license_code?: string;
  /**
   * User Name
   * @description OCRWebService account username
   */
  user_name?: string;
};

/**
 * Type of OCR_WEB_SERVICE's OCR_WEB_SERVICE_OCR_WEB_SERVICE_RECOGNIZE tool output.
 */
type OCR_WEB_SERVICE_OCR_WEB_SERVICE_RECOGNIZE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Available Pages
       * @description Remaining OCR pages in account plan
       * @default null
       */
      availablePages: number | null;
      /**
       * Error Message
       * @description Error details if OCR failed
       * @default null
       */
      errorMessage: string | null;
      /**
       * File Data
       * @description Base64-encoded output document data
       * @default null
       */
      fileData: string | null;
      /**
       * File Name
       * @description Generated output document name
       * @default null
       */
      fileName: string | null;
      /**
       * Ocr Text
       * @description Extracted text per page and zone
       */
      ocrText: string[][];
      /**
       * Ocr Ws Words
       * @description Per-word coordinates and text if requested
       * @default null
       */
      ocrWSWords: {
          /**
           * Confidence
           * @description Recognition confidence percentage
           * @default null
           */
          confidence: number | null;
          /**
           * Height
           * @description Height of word bounding box in pixels
           */
          height: number;
          /**
           * Left
           * @description X coordinate of left edge of word bounding box
           */
          left: number;
          /**
           * Top
           * @description Y coordinate of top edge of word bounding box
           */
          top: number;
          /**
           * Width
           * @description Width of word bounding box in pixels
           */
          width: number;
          /**
           * Word
           * @description Recognized word text
           */
          word: string;
      }[] | null;
      /**
       * Output Information
       * @description Additional service output information
       * @default null
       */
      outputInformation: string | null;
      /**
       * Processed Pages
       * @description Pages consumed by this call
       * @default null
       */
      processedPages: number | null;
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
 * Type map of all available tool input types for toolkit "OCR_WEB_SERVICE".
 */
export type OCR_WEB_SERVICE_TOOL_INPUTS = {
  GET_ACCOUNT_CREDENTIALS: OCR_WEB_SERVICE_GET_ACCOUNT_CREDENTIALS_INPUT
  GET_ACCOUNT_INFORMATION: OCR_WEB_SERVICE_GET_ACCOUNT_INFORMATION_INPUT
  OCR_WEB_SERVICE_LOG: OCR_WEB_SERVICE_OCR_WEB_SERVICE_LOG_INPUT
  OCR_WEB_SERVICE_RECOGNIZE: OCR_WEB_SERVICE_OCR_WEB_SERVICE_RECOGNIZE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OCR_WEB_SERVICE".
 */
export type OCR_WEB_SERVICE_TOOL_OUTPUTS = {
  GET_ACCOUNT_CREDENTIALS: OCR_WEB_SERVICE_GET_ACCOUNT_CREDENTIALS_OUTPUT
  GET_ACCOUNT_INFORMATION: OCR_WEB_SERVICE_GET_ACCOUNT_INFORMATION_OUTPUT
  OCR_WEB_SERVICE_LOG: OCR_WEB_SERVICE_OCR_WEB_SERVICE_LOG_OUTPUT
  OCR_WEB_SERVICE_RECOGNIZE: OCR_WEB_SERVICE_OCR_WEB_SERVICE_RECOGNIZE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OCR_WEB_SERVICE toolkit.
 */
export const OCR_WEB_SERVICE = {
  slug: "ocr_web_service",
  tools: {
    /**
     * Tool to extract ocrwebservice credentials. use when credentials need to be retrieved from connection metadata before invoking service operations.
     */
    GET_ACCOUNT_CREDENTIALS: "OCR_WEB_SERVICE_GET_ACCOUNT_CREDENTIALS",
    /**
     * Tool to retrieve current account details such as remaining pages, subscription plan, and expiration date. use when checking account status before submitting ocr jobs.
     */
    GET_ACCOUNT_INFORMATION: "OCR_WEB_SERVICE_GET_ACCOUNT_INFORMATION",
    /**
     * Tool to retrieve ocr processing logs. use after specifying date range for your account.
     */
    OCR_WEB_SERVICE_LOG: "OCR_WEB_SERVICE_OCR_WEB_SERVICE_LOG",
    /**
     * Tool to call soap recognize operation. use when performing ocr on an image to retrieve text, output document, word coordinates, and errors.
     */
    OCR_WEB_SERVICE_RECOGNIZE: "OCR_WEB_SERVICE_OCR_WEB_SERVICE_RECOGNIZE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OCR_WEB_SERVICE".
 */
export type OCR_WEB_SERVICE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OCR_WEB_SERVICE".
 */
export type OCR_WEB_SERVICE_TRIGGER_EVENTS = {}
