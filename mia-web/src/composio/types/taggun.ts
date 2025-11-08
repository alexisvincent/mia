// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TAGGUN's TAGGUN_EXPORT_KNOWN_MERCHANTS tool input.
 */
type TAGGUN_EXPORT_KNOWN_MERCHANTS_INPUT = object;

/**
 * Type of TAGGUN's TAGGUN_EXPORT_KNOWN_MERCHANTS tool output.
 */
type TAGGUN_EXPORT_KNOWN_MERCHANTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw
       * @description Raw response payload (CSV or JSON) as string
       */
      raw: string;
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
 * Type of TAGGUN's TAGGUN_GENERATE_MERCHANTS_CSV tool input.
 */
type TAGGUN_GENERATE_MERCHANTS_CSV_INPUT = {
  /**
   * Row Count
   * @description Number of merchant rows to generate in the CSV
   */
  row_count?: number;
};

/**
 * Type of TAGGUN's TAGGUN_GENERATE_MERCHANTS_CSV tool output.
 */
type TAGGUN_GENERATE_MERCHANTS_CSV_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Path
       * @description Filesystem path of the generated CSV file
       */
      file_path: string;
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
 * Type of TAGGUN's TAGGUN_URL tool input.
 */
type TAGGUN_URL_INPUT = {
  /**
   * Content Type
   * @description MIME type of the file, e.g., 'image/jpeg'
   * @default null
   */
  contentType: string | null;
  /**
   * Filename
   * @description Optional filename for reference
   * @default null
   */
  filename: string | null;
  /**
   * Refresh
   * @description Whether to bypass cache and force fresh extraction
   * @default false
   */
  refresh: boolean | null;
  /**
   * Url
   * @description Public URL of the receipt or invoice image
   */
  url?: string;
};

/**
 * Type of TAGGUN's TAGGUN_URL tool output.
 */
type TAGGUN_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Confidence
       * @description Confidence scores for various extracted fields.
       * @default null
       */
      confidence: {
          /**
           * Date
           * @description Confidence score for date
           * @default null
           */
          date: number | null;
          /**
           * Invoice Number
           * @description Confidence score for invoice number
           * @default null
           */
          invoice_number: number | null;
          /**
           * Merchant Name
           * @description Confidence score for merchant name
           * @default null
           */
          merchant_name: number | null;
          /**
           * Total
           * @description Confidence score for total amount
           * @default null
           */
          total: number | null;
      } | null;
      /**
       * Currency
       * @description Detected currency code (ISO 4217)
       * @default null
       */
      currency: string | null;
      /**
       * Date
       * @description Detected purchase date in ISO 8601 format
       */
      date: string;
      /**
       * Invoice Number
       * @description Detected invoice or receipt number
       * @default null
       */
      invoiceNumber: string | null;
      /**
       * Line Items
       * @description List of detected line items
       * @default null
       */
      lineItems: {
          /**
           * Name
           * @description Item description or name, as detected by OCR
           * @default null
           */
          name: string | null;
          /**
           * Price
           * @description Unit price of the item, if available
           * @default null
           */
          price: number | null;
          /**
           * Quantity
           * @description Quantity purchased, if available
           * @default null
           */
          quantity: number | null;
          /**
           * Total Amount
           * @description Total amount for this line item
           * @default null
           */
          totalAmount: number | null;
      }[] | null;
      /**
       * Merchant Name
       * @description Detected merchant or store name
       */
      merchantName: string;
      /**
       * Raw Text
       * @description Raw OCR text extracted from the document
       * @default null
       */
      rawText: string | null;
      /**
       * Sub Total Amount
       * @description Detected subtotal amount before tax
       * @default null
       */
      subTotalAmount: number | null;
      /**
       * Tax Amount
       * @description Detected total tax amount
       * @default null
       */
      taxAmount: number | null;
      /**
       * Tip Amount
       * @description Detected tip amount, if any
       * @default null
       */
      tipAmount: number | null;
      /**
       * Total Amount
       * @description Detected total amount
       */
      totalAmount: number;
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
 * Type of TAGGUN's TAGGUN_URL_VALIDATION tool input.
 */
type TAGGUN_URL_VALIDATION_INPUT = {
  /**
   * Do Not Save
   * @description If true, the receipt will not be saved in the database.
   * @default false
   */
  doNotSave: boolean | null;
  /**
   * External Id
   * @description An external ID to link with the validation for tracking purposes.
   * @default null
   */
  externalId: string | null;
  /**
   * Filename
   * @description Optional filename to assign to the image.
   * @default null
   */
  filename: string | null;
  /**
   * Url
   * Format: uri
   * @description The URL of the receipt image to be validated.
   */
  url?: string;
};

/**
 * Type of TAGGUN's TAGGUN_URL_VALIDATION tool output.
 */
type TAGGUN_URL_VALIDATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Confidence
       * @description Confidence score of the validation result.
       */
      confidence: number;
      /**
       * Errors
       * @description List of errors if validation failed.
       */
      errors?: string[];
      /**
       * Is Valid
       * @description Indicates if the image at the URL is a valid receipt.
       */
      isValid: boolean;
      /**
       * Message
       * @description Validation result message or details.
       */
      message: string;
      /**
       * Request Id
       * @description Unique identifier for the validation request.
       */
      requestId: string;
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
 * Type of TAGGUN's TAGGUN_URL_VERBOSE tool input.
 */
type TAGGUN_URL_VERBOSE_INPUT = {
  /**
   * External Id
   * @description Optional user-provided identifier for the document.
   * @default null
   */
  externalId: string | null;
  /**
   * Incognito
   * @description If true, excludes this document from Taggun's learning dataset.
   * @default false
   */
  incognito: boolean;
  /**
   * Ip Address
   * @description End-user IP address for fraud assessment.
   * @default null
   */
  ipAddress: string | null;
  /**
   * Language
   * @description Language hint for OCR (e.g., 'en' for English').
   * @default null
   */
  language: string | null;
  /**
   * Refresh
   * @description If true, forces reprocessing even if cached results exist.
   * @default false
   */
  refresh: boolean;
  /**
   * Tags
   * @description Custom key/value tags to attach to this request.
   * @default null
   */
  tags: {
      [key: string]: string;
  } | null;
  /**
   * Url
   * @description Publicly accessible URL of the receipt or invoice image.
   */
  url?: string;
};

/**
 * Type of TAGGUN's TAGGUN_URL_VERBOSE tool output.
 */
type TAGGUN_URL_VERBOSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * UrlVerboseAmount
       * @description Breakdown of amounts.
       * @default null
       */
      amount: {
          /**
           * Currency
           * @description Currency code (e.g., 'USD').
           * @default null
           */
          currency: string | null;
          /**
           * Sub Total
           * @description Sub-total amount, if provided.
           * @default null
           */
          subTotal: number | null;
          /**
           * Tax
           * @description Total tax amount, if detected.
           * @default null
           */
          tax: number | null;
          /**
           * Tip
           * @description Tip amount, if detected.
           * @default null
           */
          tip: number | null;
          /**
           * Total
           * @description Total amount from the receipt.
           */
          total: number;
      } | null;
      /**
       * Confidence Level
       * @description Overall confidence level (0.0	1.0).
       */
      confidenceLevel: number;
      /**
       * UrlVerboseDateInfo
       * @description Receipt/invoice date and time details.
       * @default null
       */
      date: {
          /**
           * Date
           * @description Date extracted.
           * @default null
           */
          date: string | null;
          /**
           * Datetime
           * @description Full datetime string, if available.
           * @default null
           */
          datetime: string | null;
          /**
           * Time
           * @description Time extracted.
           * @default null
           */
          time: string | null;
      } | null;
      /**
       * Fields
       * @description Verbose itemized fields (items, taxes, etc.).
       * @default null
       */
      fields: {
          [key: string]: unknown;
      } | null;
      /**
       * UrlVerboseMerchant
       * @description Merchant information.
       * @default null
       */
      merchant: {
          /**
           * Address
           * @description Merchant address.
           * @default null
           */
          address: string | null;
          /**
           * Contact
           * @description Merchant contact details.
           * @default null
           */
          contact: string | null;
          /**
           * Name
           * @description Merchant name.
           * @default null
           */
          name: string | null;
          /**
           * Region
           * @description Merchant region or country.
           * @default null
           */
          region: string | null;
          /**
           * Website
           * @description Merchant website URL.
           * @default null
           */
          website: string | null;
      } | null;
      /**
       * Process Id
       * @description Unique process identifier.
       */
      processID: string;
      /**
       * Raw
       * @description Full raw parsed payload from Taggun.
       * @default null
       */
      raw: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Code
       * @description OCR status code from Taggun.
       */
      statusCode: number;
      /**
       * Text
       * @description Full OCR text extracted from the URL provided.
       */
      text: string;
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
 * Type map of all available tool input types for toolkit "TAGGUN".
 */
export type TAGGUN_TOOL_INPUTS = {
  EXPORT_KNOWN_MERCHANTS: TAGGUN_EXPORT_KNOWN_MERCHANTS_INPUT
  GENERATE_MERCHANTS_CSV: TAGGUN_GENERATE_MERCHANTS_CSV_INPUT
  URL: TAGGUN_URL_INPUT
  URL_VALIDATION: TAGGUN_URL_VALIDATION_INPUT
  URL_VERBOSE: TAGGUN_URL_VERBOSE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TAGGUN".
 */
export type TAGGUN_TOOL_OUTPUTS = {
  EXPORT_KNOWN_MERCHANTS: TAGGUN_EXPORT_KNOWN_MERCHANTS_OUTPUT
  GENERATE_MERCHANTS_CSV: TAGGUN_GENERATE_MERCHANTS_CSV_OUTPUT
  URL: TAGGUN_URL_OUTPUT
  URL_VALIDATION: TAGGUN_URL_VALIDATION_OUTPUT
  URL_VERBOSE: TAGGUN_URL_VERBOSE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TAGGUN toolkit.
 */
export const TAGGUN = {
  slug: "taggun",
  tools: {
    /**
     * Tool to export the current list of known merchants. use when you need a full merchant registry (e.g. sync or audit).
     */
    EXPORT_KNOWN_MERCHANTS: "TAGGUN_EXPORT_KNOWN_MERCHANTS",
    /**
     * Tool to generate a csv file of mock merchants for import known merchants testing. use when sample merchant csv is needed before bulk import. returns a path to a temporary csv file ready for upload.
     */
    GENERATE_MERCHANTS_CSV: "TAGGUN_GENERATE_MERCHANTS_CSV",
    /**
     * Tool to process a receipt or invoice from its public image url. use when you have a hosted image or pdf link and need basic data extraction. call after ensuring the url is accessible and points to a supported image or pdf.
     */
    URL: "TAGGUN_URL",
    /**
     * Tool to validate a receipt image by url against campaign settings. use after obtaining the receipt url to confirm validity.
     */
    URL_VALIDATION: "TAGGUN_URL_VALIDATION",
    /**
     * Tool to process a receipt or invoice from a url for detailed data extraction. use when you have a publicly accessible receipt or invoice url and require comprehensive output including line items, merchant details, and confidence metrics. call after verifying the url is reachable.
     */
    URL_VERBOSE: "TAGGUN_URL_VERBOSE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TAGGUN".
 */
export type TAGGUN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TAGGUN".
 */
export type TAGGUN_TRIGGER_EVENTS = {}
