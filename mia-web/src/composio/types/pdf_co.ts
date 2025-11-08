// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PDF_CO's PDF_CO_ACCOUNT_BALANCE_INFO tool input.
 */
type PDF_CO_ACCOUNT_BALANCE_INFO_INPUT = object;

/**
 * Type of PDF_CO's PDF_CO_ACCOUNT_BALANCE_INFO tool output.
 */
type PDF_CO_ACCOUNT_BALANCE_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Balance
       * @description The current credit balance
       */
      balance: number;
      /**
       * Error
       * @description Error message if any
       * @default null
       */
      error: string | null;
      /**
       * Status
       * @description Status of the request, e.g., 'success'
       */
      status: string;
  } & {
      [key: string]: unknown;
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
 * Type of PDF_CO's PDF_CO_BARCODE_GENERATE tool input.
 */
type PDF_CO_BARCODE_GENERATE_INPUT = {
  /**
   * Add Text
   * @description Display human-readable text below the barcode.
   * @default null
   */
  addText: boolean | null;
  /**
   * Aspect Ratio
   * @description Aspect ratio (width/height) for 2D barcodes.
   * @default null
   */
  aspectRatio: number | null;
  /**
   * Async
   * @description Process request asynchronously.
   * @default null
   */
  async_: boolean | null;
  /**
   * Back Color
   * @description Barcode background color (hex or rgba).
   * @default null
   */
  backColor: string | null;
  /**
   * Barcode Height
   * @description Height of the barcode image in pixels.
   * @default null
   */
  barcodeHeight: number | null;
  /**
   * Barcode Width
   * @description Width of the barcode image in pixels.
   * @default null
   */
  barcodeWidth: number | null;
  /**
   * Case Sensitive
   * @description Treat barcode value as case-sensitive.
   * @default null
   */
  caseSensitive: boolean | null;
  /**
   * Font Name
   * @description Font name for human-readable text (e.g., 'Arial').
   * @default null
   */
  fontName: string | null;
  /**
   * Font Size
   * @description Font size (points) for human-readable text.
   * @default null
   */
  fontSize: number | null;
  /**
   * Fore Color
   * @description Barcode foreground color (hex e.g., '#000000' or rgba string).
   * @default null
   */
  foreColor: string | null;
  /**
   * Margin
   * @description Margin (white border) size around barcode in pixels.
   * @default null
   */
  margin: number | null;
  /**
   * Name
   * @description Filename for the generated barcode (extension added automatically).
   * @default null
   */
  name: string | null;
  /**
   * Output Format
   * @description Output image format ('png', 'jpg', 'pdf').
   * @default null
   */
  outputFormat: string | null;
  /**
   * Pdf Password
   * @description Password to protect PDF if output format is 'pdf'.
   * @default null
   */
  pdfPassword: string | null;
  /**
   * Resolution
   * @description Image resolution in DPI.
   * @default null
   */
  resolution: number | null;
  /**
   * Type
   * @description Barcode type (e.g., Code128, QRCode, Code39, PDF417).
   */
  type?: string;
  /**
   * Value
   * @description Data/content to encode in the barcode.
   */
  value?: string;
};

/**
 * Type of PDF_CO's PDF_CO_BARCODE_GENERATE tool output.
 */
type PDF_CO_BARCODE_GENERATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error flag indicating if the request failed.
       */
      error: boolean;
      /**
       * Message
       * @description Error or status message.
       */
      message: string;
      /**
       * Url
       * @description URL of the generated barcode image.
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
 * Type of PDF_CO's PDF_CO_CONVERT_EXCEL_TO_CSV tool input.
 */
type PDF_CO_CONVERT_EXCEL_TO_CSV_INPUT = {
  /**
   * Inline
   * @description If true, returns CSV data inline; otherwise returns URL to CSV
   * @default null
   */
  inline: boolean | null;
  /**
   * Name
   * @description Desired name for the output CSV file
   * @default null
   */
  name: string | null;
  /**
   * Pages
   * @description Pages to convert (e.g., '0-2,4'), default is all pages
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for a protected Excel file, if applicable
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Conversion profiles in JSON format, see PDF.co docs for structure
   * @default null
   */
  profiles: string | null;
  /**
   * Url
   * @description Link to source XLS or XLSX file to be converted to CSV
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_CONVERT_EXCEL_TO_CSV tool output.
 */
type PDF_CO_CONVERT_EXCEL_TO_CSV_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred during conversion
       */
      error: boolean;
      /**
       * Message
       * @description Error message if any
       * @default null
       */
      message: string | null;
      /**
       * Remaining Credits
       * @description Number of remaining credits after the call
       */
      remainingCredits: number;
      /**
       * Status
       * @description HTTP status code returned by the API
       */
      status: number;
      /**
       * Url
       * @description Link to the generated CSV file or inline data
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
 * Type of PDF_CO's PDF_CO_CONVERT_EXCEL_TO_HTML tool input.
 */
type PDF_CO_CONVERT_EXCEL_TO_HTML_INPUT = {
  /**
   * Async
   * @description Set to true to run the conversion asynchronously.
   * @default false
   */
  async: boolean | null;
  /**
   * Extra Params
   * @description Additional parameters as a JSON string.
   * @default null
   */
  extraParams: string | null;
  /**
   * File
   * Format: binary
   * @description Binary content of the Excel file to upload as an alternative to 'url'.
   * @default null
   */
  file: string | null;
  /**
   * Name
   * @description Name for the resulting HTML file (e.g., 'report.html').
   * @default null
   */
  name: string | null;
  /**
   * Profiles
   * @description Conversion profiles as a JSON string.
   * @default null
   */
  profiles: string | null;
  /**
   * Url
   * @description URL to the source Excel file (xls, xlsx, or csv).
   * @default null
   */
  url: string | null;
};

/**
 * Type of PDF_CO's PDF_CO_CONVERT_EXCEL_TO_HTML tool output.
 */
type PDF_CO_CONVERT_EXCEL_TO_HTML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred, otherwise False.
       */
      error: boolean;
      /**
       * Message
       * @description Error or status message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL of the generated HTML file.
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
 * Type of PDF_CO's PDF_CO_CONVERT_EXCEL_TO_JSON tool input.
 */
type PDF_CO_CONVERT_EXCEL_TO_JSON_INPUT = {
  /**
   * Name
   * @description Desired name for the generated JSON file.
   * @default null
   */
  name: string | null;
  /**
   * Pages
   * @description Comma-separated page indices or ranges to process, e.g., '1,3-5'.
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for password-protected files.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Custom processing profiles in JSON format.
   * @default null
   */
  profiles: string | null;
  /**
   * Url
   * @description Public URL of the source Excel/CSV file.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_CONVERT_EXCEL_TO_JSON tool output.
 */
type PDF_CO_CONVERT_EXCEL_TO_JSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description False indicates success.
       */
      error: boolean;
      /**
       * Message
       * @description Error or confirmation message.
       */
      message: string;
      /**
       * Status
       * @description Status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL of the generated JSON file.
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
 * Type of PDF_CO's PDF_CO_CONVERT_EXCEL_TO_TEXT tool input.
 */
type PDF_CO_CONVERT_EXCEL_TO_TEXT_INPUT = {
  /**
   * Encrypt
   * @description Set to true to encrypt the resulting file.
   * @default false
   */
  encrypt: boolean;
  /**
   * Inline
   * @description Set to true to return data inline in response instead of URL.
   * @default false
   */
  inline: boolean;
  /**
   * Name
   * @description Optional name for the output file.
   * @default null
   */
  name: string | null;
  /**
   * Pages
   * @description Comma-separated list of sheet indices to convert, e.g., '0,2'.
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for password-protected Excel files.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Conversion profiles in JSON format.
   * @default null
   */
  profiles: string | null;
  /**
   * Url
   * @description Link to the source Excel file (xls, xlsx, or csv).
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_CONVERT_EXCEL_TO_TEXT tool output.
 */
type PDF_CO_CONVERT_EXCEL_TO_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error flag; true if an error occurred.
       */
      error: boolean;
      /**
       * Message
       * @description Error or result message.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status code returned by the API.
       * @default null
       */
      status: number | null;
      /**
       * Url
       * @description Link to the generated text file.
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_CONVERT_EXCEL_TO_XML tool input.
 */
type PDF_CO_CONVERT_EXCEL_TO_XML_INPUT = {
  /**
   * Data Decryption Algorithm
   * @description Decryption algorithm (AES128, AES192, AES256).
   * @default null
   * @enum {string|null}
   */
  DataDecryptionAlgorithm: "AES128" | "AES192" | "AES256" | null;
  /**
   * Data Decryption Iv
   * @description Initialization vector for decryption.
   * @default null
   */
  DataDecryptionIV: string | null;
  /**
   * Data Decryption Key
   * @description Decryption key.
   * @default null
   */
  DataDecryptionKey: string | null;
  /**
   * Data Encryption Algorithm
   * @description Encryption algorithm (AES128, AES192, AES256).
   * @default null
   * @enum {string|null}
   */
  DataEncryptionAlgorithm: "AES128" | "AES192" | "AES256" | null;
  /**
   * Data Encryption Iv
   * @description Initialization vector for encryption.
   * @default null
   */
  DataEncryptionIV: string | null;
  /**
   * Data Encryption Key
   * @description Encryption key.
   * @default null
   */
  DataEncryptionKey: string | null;
  /**
   * Async
   * @description Set true to run asynchronously, returning a jobId.
   * @default false
   */
  async: boolean;
  /**
   * Callback
   * @description Callback URL for async mode, used when async is true.
   * @default null
   */
  callback: string | null;
  /**
   * Expiration
   * @description Link expiration time in minutes.
   * @default 60
   */
  expiration: number;
  /**
   * Httppassword
   * @description HTTP auth password for source URL.
   * @default null
   */
  httppassword: string | null;
  /**
   * Httpusername
   * @description HTTP auth user name for source URL.
   * @default null
   */
  httpusername: string | null;
  /**
   * Inline
   * @description Set true to return XML inline, otherwise returns file URL.
   * @default false
   */
  inline: boolean;
  /**
   * Name
   * @description Output file name.
   * @default null
   */
  name: string | null;
  /**
   * Profiles
   * @description Profiles settings.
   * @default null
   */
  profiles: {
      [key: string]: unknown;
  } | null;
  /**
   * Url
   * @description URL to the source file (xls, xlsx or csv).
   */
  url?: string;
  /**
   * Worksheet Index
   * @description Worksheet index (1-based).
   * @default null
   */
  worksheetIndex: number | null;
};

/**
 * Type of PDF_CO's PDF_CO_CONVERT_EXCEL_TO_XML tool output.
 */
type PDF_CO_CONVERT_EXCEL_TO_XML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits
       * @description Number of credits consumed by the request.
       * @default null
       */
      credits: number | null;
      /**
       * Duration
       * @description Time taken for the operation in milliseconds.
       * @default null
       */
      duration: number | null;
      /**
       * Error
       * @description Indicates if an error occurred (false means success).
       */
      error: boolean;
      /**
       * Name
       * @description Name of the output file.
       * @default null
       */
      name: string | null;
      /**
       * Output Link Valid Till
       * @description Expiration timestamp of the output link.
       */
      outputLinkValidTill: string;
      /**
       * Remaining Credits
       * @description Number of credits remaining in account.
       * @default null
       */
      remainingCredits: number | null;
      /**
       * Status
       * @description Status code of the request.
       */
      status: string;
      /**
       * Url
       * @description Direct URL to the generated XML file.
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
 * Type of PDF_CO's PDF_CO_DOCUMENT_PARSER tool input.
 */
type PDF_CO_DOCUMENT_PARSER_INPUT = {
  /**
   * Async Req
   * @description Run parsing asynchronously and return a result URL instead of inline data.
   * @default false
   */
  async_req: boolean;
  /**
   * File
   * Format: binary
   * @description Raw PDF file bytes to upload directly. Required if not providing a URL.
   * @default null
   */
  file: string | null;
  /**
   * Name
   * @description Custom name for the output/result file.
   * @default null
   */
  name: string | null;
  /**
   * Template
   * @description Inline YAML/JSON parsing template to extract structured data
   */
  template?: string;
  /**
   * Url
   * Format: uri
   * @description Public URL of the PDF to parse. Required if not uploading a file.
   * @default null
   */
  url: string | null;
};

/**
 * Type of PDF_CO's PDF_CO_DOCUMENT_PARSER tool output.
 */
type PDF_CO_DOCUMENT_PARSER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Parsed output/result, structure defined by the template
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Error
       * @description Indicates if the operation encountered an error
       */
      error: boolean;
      /**
       * Message
       * @description Error or status message
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description HTTP status code returned by the API
       */
      status: number;
      /**
       * Url
       * Format: uri
       * @description URL to output file (if async or external storage requested)
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_FILE_UPLOAD tool input.
 */
type PDF_CO_FILE_UPLOAD_INPUT = {
  /**
   * File Path
   * @description Local filesystem path to the file to upload.
   */
  file_path?: string;
  /**
   * Name
   * @description Optional filename to assign on PDF.co (defaults to original name).
   * @default null
   */
  name: string | null;
  /**
   * Run Async
   * @description Whether to execute the upload asynchronously (defaults to false).
   * @default null
   */
  run_async: boolean | null;
};

/**
 * Type of PDF_CO's PDF_CO_FILE_UPLOAD tool output.
 */
type PDF_CO_FILE_UPLOAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred.
       */
      error: boolean;
      /**
       * Message
       * @description Error message if any.
       * @default null
       */
      message: string | null;
      /**
       * Name
       * @description Name of the uploaded file on PDF.co.
       */
      name: string;
      /**
       * Status
       * @description Status code of the operation.
       */
      status: number;
      /**
       * Url
       * @description URL to the uploaded file.
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
 * Type of PDF_CO's PDF_CO_JOB_CHECK tool input.
 */
type PDF_CO_JOB_CHECK_INPUT = {
  /**
   * Jobid
   * @description The unique identifier of the asynchronous job to check status for
   */
  jobid?: string;
};

/**
 * Type of PDF_CO's PDF_CO_JOB_CHECK tool output.
 */
type PDF_CO_JOB_CHECK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created Time
       * @description Date and time when the job was created
       */
      createdTime: string;
      /**
       * Ended Time
       * @description Date and time when the job ended
       * @default null
       */
      endedTime: string | null;
      /**
       * Log
       * @description Processing log or error details (e.g., failure messages)
       * @default null
       */
      log: string | null;
      /**
       * Status
       * @description Current job status
       * @enum {string}
       */
      status: "working" | "failed" | "success";
      /**
       * Url
       * @description Download URL of the result when status is 'success'
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_ADD tool input.
 */
type PDF_CO_PDF_ADD_INPUT = {
  /**
   * Name
   * @description Desired name for the result PDF file
   * @default null
   */
  name: string | null;
  /**
   * Objects
   * @description List of objects to add (text, image, barcode, link, document, etc.). See API docs for structure.
   */
  objects?: {
      [key: string]: unknown;
  }[];
  /**
   * Pages
   * @description Comma-separated page indices (e.g., '0,2-4') to process; defaults to all pages
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for protected PDF, if needed
   * @default null
   */
  password: string | null;
  /**
   * Run Async
   * @description Run the process asynchronously; if true, returns a jobId for status checking
   * @default null
   */
  run_async: boolean | null;
  /**
   * Url
   * @description Link to the source PDF file
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_ADD tool output.
 */
type PDF_CO_PDF_ADD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred
       */
      error: boolean;
      /**
       * Job Id
       * @description Job ID for async execution when async=true
       * @default null
       */
      jobId: string | null;
      /**
       * Message
       * @description Status or error message
       */
      message: string;
      /**
       * Page Count
       * @description Number of pages in the result PDF
       */
      pageCount: number;
      /**
       * Status
       * @description HTTP status code returned by the API
       */
      status: number;
      /**
       * Url
       * @description URL of the result PDF file
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
 * Type of PDF_CO's PDF_CO_PDF_CHANGE_TEXT_SEARCHABLE tool input.
 */
type PDF_CO_PDF_CHANGE_TEXT_SEARCHABLE_INPUT = {
  /**
   * Inline
   * @description Whether to return the processed PDF data inline (base64) or as a URL. Set to true for inline response, false for URL.
   * @default false
   */
  inline: boolean;
  /**
   * Language
   * @description Language code for OCR (default: eng).
   * @default eng
   */
  language: string | null;
  /**
   * Pages
   * @description Pages to process (e.g., '0,2-5,7'). Defaults to all pages.
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for encrypted PDF, if applicable.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description JSON string with advanced OCR profiles and configurations.
   * @default null
   */
  profiles: string | null;
  /**
   * Rect
   * @description Comma-separated rectangle coordinates 'left,top,width,height' to limit OCR.
   * @default null
   */
  rect: string | null;
  /**
   * Url
   * @description Public URL of the source PDF file.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_CHANGE_TEXT_SEARCHABLE tool output.
 */
type PDF_CO_PDF_CHANGE_TEXT_SEARCHABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred during processing.
       */
      error: boolean;
      /**
       * Message
       * @description Error or informational message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Remaining
       * @description Remaining API credits on the account.
       * @default null
       */
      remaining: number | null;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL of the processed PDF file with searchable text.
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
 * Type of PDF_CO's PDF_CO_PDF_DELETE_PAGES tool input.
 */
type PDF_CO_PDF_DELETE_PAGES_INPUT = {
  /**
   * Async Job
   * @description Process request asynchronously. If true, returns a job ID instead of immediate URL.
   * @default null
   */
  async_job: boolean | null;
  /**
   * Name
   * @description Optional name for the resulting PDF file.
   * @default null
   */
  name: string | null;
  /**
   * Pages
   * @description Comma-separated list of page indices or ranges to delete (0-based). E.g., '0,2-4'.
   */
  pages?: string;
  /**
   * Password
   * @description Password for protected PDF file.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Optional JSON string for advanced configuration.
   * @default null
   */
  profiles: string | null;
  /**
   * Url
   * @description URL or base64-encoded content of the source PDF.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_DELETE_PAGES tool output.
 */
type PDF_CO_PDF_DELETE_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred.
       */
      error: boolean;
      /**
       * Message
       * @description Error or operation message.
       * @default null
       */
      message: string | null;
      /**
       * Page Count
       * @description Number of pages in the output PDF document.
       */
      pageCount: number;
      /**
       * Status
       * @description HTTP status code of the operation.
       */
      status: number;
      /**
       * Url
       * @description URL of the PDF file with pages deleted.
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
 * Type of PDF_CO's PDF_CO_PDF_EXTRACT_ATTACHMENTS tool input.
 */
type PDF_CO_PDF_EXTRACT_ATTACHMENTS_INPUT = {
  /**
   * Async Job
   * @description Run processing asynchronously. If true, returns a jobId for async processing.
   * @default false
   */
  async_job: boolean;
  /**
   * Password
   * @description Password for protected PDF file (if applicable).
   * @default null
   */
  password: string | null;
  /**
   * Url
   * @description URL of the input PDF file to process.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_EXTRACT_ATTACHMENTS tool output.
 */
type PDF_CO_PDF_EXTRACT_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachments
       * @description List of extracted attachments.
       */
      attachments: {
          /**
           * File Name
           * @description Name of the extracted attachment file.
           */
          fileName: string;
          /**
           * Url
           * @description URL to download the extracted attachment.
           */
          url: string;
      }[];
      /**
       * Error
       * @description True if an error occurred.
       */
      error: boolean;
      /**
       * Message
       * @description Error or status message.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description HTTP status code of the operation.
       */
      status: number;
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
 * Type of PDF_CO's PDF_CO_PDF_FIND tool input.
 */
type PDF_CO_PDF_FIND_INPUT = {
  /**
   * Case Sensitive
   * @description Whether the search is case-sensitive (default: false).
   * @default false
   */
  caseSensitive: boolean | null;
  /**
   * Pages
   * @description Comma-separated page ranges to search, e.g., '1-3,5'.
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for protected PDF, if applicable.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Advanced JSON configuration for PDF processing.
   * @default null
   */
  profiles: string | null;
  /**
   * Regex Search
   * @description Whether to treat searchString as a regular expression (default: false).
   * @default false
   */
  regexSearch: boolean | null;
  /**
   * Search String
   * @description Keyword or regex pattern to find in the document.
   */
  searchString?: string;
  /**
   * Url
   * @description Publicly accessible URL of the PDF file to search.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_FIND tool output.
 */
type PDF_CO_PDF_FIND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message, if any.
       * @default null
       */
      error: string | null;
      /**
       * Found
       * @description Total number of occurrences found.
       */
      found: number;
      /**
       * Matches
       * @description List of match details.
       */
      matches: {
          /**
           * Height
           * @description Height of the matched area.
           */
          height: number;
          /**
           * Left
           * @description Left coordinate of the match on the page.
           */
          left: number;
          /**
           * Page Index
           * @description Zero-based index of the page where found.
           */
          pageIndex: number;
          /**
           * Page Number
           * @description One-based number of the page where found.
           */
          pageNumber: number;
          /**
           * Text
           * @description The exact matched text.
           */
          text: string;
          /**
           * Top
           * @description Top coordinate of the match on the page.
           */
          top: number;
          /**
           * Width
           * @description Width of the matched area.
           */
          width: number;
      }[];
      /**
       * Status
       * @description API call status, e.g., 'success'.
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
 * Type of PDF_CO's PDF_CO_PDF_FORMS_INFO_READER tool input.
 */
type PDF_CO_PDF_FORMS_INFO_READER_INPUT = {
  /**
   * Inline
   * @description If true, returns form fields details inline in the response.
   * @default false
   */
  inline: boolean | null;
  /**
   * Password
   * @description Password for encrypted PDF, if applicable.
   * @default null
   */
  password: string | null;
  /**
   * Url
   * Format: uri
   * @description Publicly accessible URL of the PDF file containing form fields.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_FORMS_INFO_READER tool output.
 */
type PDF_CO_PDF_FORMS_INFO_READER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred during processing.
       */
      error: boolean;
      /**
       * Fields
       * @description List of form fields found in the document.
       */
      fields: {
          /**
           * Name
           * @description Internal name of the form field.
           */
          name: string;
          /**
           * Type
           * @description Type of the form field, e.g., text, checkbox, radio.
           */
          type: string;
          /**
           * Value
           * @description Current value of the form field, if any.
           * @default null
           */
          value: string | null;
      }[];
      /**
       * Message
       * @description Error or status message.
       * @default null
       */
      message: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_FROM_DOCUMENT_TXT tool input.
 */
type PDF_CO_PDF_FROM_DOCUMENT_TXT_INPUT = {
  /**
   * Async Job
   * @description Run processing asynchronously; if true, returns a jobId for status checking.
   * @default false
   */
  async_job: boolean;
  /**
   * Name
   * @description Name of the resulting PDF file (e.g., 'result.pdf').
   */
  name?: string;
  /**
   * Profiles
   * @description Optional JSON-formatted string with advanced API options.
   * @default null
   */
  profiles: string | null;
  /**
   * Url
   * @description Link to source text file or raw text content.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_FROM_DOCUMENT_TXT tool output.
 */
type PDF_CO_PDF_FROM_DOCUMENT_TXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error flag indicating if the request failed.
       */
      error: boolean;
      /**
       * Job Id
       * @description Job identifier returned for async requests. Use to poll job status.
       * @default null
       */
      jobId: string | null;
      /**
       * Message
       * @description Additional information about processing or error message.
       */
      message: string;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL of the generated PDF document.
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
 * Type of PDF_CO's PDF_CO_PDF_FROM_EMAIL tool input.
 */
type PDF_CO_PDF_FROM_EMAIL_INPUT = {
  /**
   * Async Job
   * @description Run processing asynchronously; if true, returns a jobId for status checking.
   * @default false
   */
  async_job: boolean;
  /**
   * Name
   * @description Optional name for the resulting PDF file.
   * @default null
   */
  name: string | null;
  /**
   * Profiles
   * @description Advanced configuration options as JSON-formatted string.
   * @default null
   */
  profiles: string | null;
  /**
   * Url
   * @description Direct URL to the input EML or MSG file.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_FROM_EMAIL tool output.
 */
type PDF_CO_PDF_FROM_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred.
       */
      error: boolean;
      /**
       * Job Id
       * @description Job ID for async execution when async=true.
       * @default null
       */
      jobId: string | null;
      /**
       * Message
       * @description Error or status message.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL to the generated PDF file.
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
 * Type of PDF_CO's PDF_CO_PDF_FROM_HTML tool input.
 */
type PDF_CO_PDF_FROM_HTML_INPUT = {
  /**
   * Do Not Wait Full Load
   * @description If true, speeds up conversion by not waiting for full page load.
   * @default null
   */
  DoNotWaitFullLoad: boolean | null;
  /**
   * Async Job
   * @description Run conversion as background job; returns jobId when true.
   * @default null
   */
  async_job: boolean | null;
  /**
   * Callback
   * @description Webhook URL to receive asynchronous results when async=true.
   * @default null
   */
  callback: string | null;
  /**
   * Expiration
   * @description Expiration time in minutes for the output file link.
   * @default null
   */
  expiration: number | null;
  /**
   * Footer
   * @description HTML snippet for page footers applied to each page.
   * @default null
   */
  footer: string | null;
  /**
   * Header
   * @description HTML snippet for page headers applied to each page.
   * @default null
   */
  header: string | null;
  /**
   * Margins
   * @description Custom page margins in '{top} {right} {bottom} {left}' format (units: px, mm, cm, in).
   * @default null
   */
  margins: string | null;
  /**
   * Media Type
   * @description CSS media type: 'print', 'screen', or 'none'.
   * @default null
   */
  mediaType: string | null;
  /**
   * Name
   * @description Desired output filename for the PDF result.
   * @default null
   */
  name: string | null;
  /**
   * Orientation
   * @description Document orientation: 'Portrait' or 'Landscape'.
   * @default null
   */
  orientation: string | null;
  /**
   * Paper Size
   * @description Paper size: standard like 'Letter', 'Legal', 'A4'–'A6', or custom '200px 300px', '8in 10in'.
   * @default null
   */
  paperSize: string | null;
  /**
   * Print Background
   * @description Include background graphics (colors/images) if true.
   * @default null
   */
  printBackground: boolean | null;
  /**
   * Profiles
   * @description Advanced conversion profiles/settings as JSON string.
   * @default null
   */
  profiles: string | null;
  /**
   * Url
   * @description The HTML page or resource URL to convert into PDF.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_FROM_HTML tool output.
 */
type PDF_CO_PDF_FROM_HTML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred.
       */
      error: boolean;
      /**
       * Job Id
       * @description Asynchronous job ID if async=true.
       * @default null
       */
      jobId: string | null;
      /**
       * Message
       * @description Error or informational message.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Processing status of the request.
       */
      status: string;
      /**
       * Url
       * @description Link to the generated PDF file.
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
 * Type of PDF_CO's PDF_CO_PDF_INFO_READER tool input.
 */
type PDF_CO_PDF_INFO_READER_INPUT = {
  /**
   * Url
   * Format: uri
   * @description URL to the source PDF file
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_INFO_READER tool output.
 */
type PDF_CO_PDF_INFO_READER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Indicates if an error occurred
       */
      error: boolean;
      /**
       * Info
       * @description Extracted metadata and security permissions of the PDF
       */
      info: {
          [key: string]: unknown;
      };
      /**
       * Remaining Credits
       * @description Remaining API credits for the account
       */
      remainingCredits: number;
      /**
       * Status
       * @description HTTP status code returned by the API
       */
      status: number;
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
 * Type of PDF_CO's PDF_CO_PDF_MERGE tool input.
 */
type PDF_CO_PDF_MERGE_INPUT = {
  /**
   * Name
   * @description Optional name for the resulting PDF file (must end with .pdf)
   * @default null
   */
  name: string | null;
  /**
   * Profiles
   * @description (Advanced) Custom JSON profiles for processing.
   * @default null
   */
  profiles: string | null;
  /**
   * Run Async
   * @description Run the merge asynchronously; if true returns a jobId for status checking.
   * @default null
   */
  run_async: boolean | null;
  /**
   * Urls
   * @description Comma-separated string of PDF URLs or a list of PDF URLs to merge. Each URL must point to a publicly accessible or presigned PDF file.
   */
  urls?: string | null;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_MERGE tool output.
 */
type PDF_CO_PDF_MERGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred
       */
      error: boolean;
      /**
       * Job Id
       * @description Job ID when running in asynchronous mode
       * @default null
       */
      jobId: string | null;
      /**
       * Message
       * @description Error or informational message from the API
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description HTTP status code returned by the API
       */
      status: number;
      /**
       * Url
       * @description URL to the resulting merged PDF file
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_ROTATE tool input.
 */
type PDF_CO_PDF_ROTATE_INPUT = {
  /**
   * Angle
   * @description Rotation angle in degrees; must be one of 90, 180, or 270
   * @enum {integer}
   */
  angle?: 90 | 180 | 270;
  /**
   * Name
   * @description Optional filename for the resulting PDF (should end with .pdf)
   * @default null
   */
  name: string | null;
  /**
   * Pages
   * @description Comma-separated list of page indices or ranges to rotate (e.g., '0,2-5')
   */
  pages?: string;
  /**
   * Password
   * @description Password for encrypted PDFs, if required
   * @default null
   */
  password: string | null;
  /**
   * Run Async
   * @description Run the operation asynchronously; if true, returns a jobId for status checking
   * @default null
   */
  run_async: boolean | null;
  /**
   * Url
   * @description URL of the source PDF file to rotate
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_ROTATE tool output.
 */
type PDF_CO_PDF_ROTATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred
       */
      error: boolean;
      /**
       * Message
       * @description Success or error message from the API
       * @default null
       */
      message: string | null;
      /**
       * Remaining Credits
       * @description Number of remaining API credits after the call
       * @default null
       */
      remaining_credits: number | null;
      /**
       * Status
       * @description HTTP status code returned by the API
       */
      status: number;
      /**
       * Url
       * @description URL to the resulting rotated PDF file
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_SEARCH_AND_DELETE_TEXT tool input.
 */
type PDF_CO_PDF_SEARCH_AND_DELETE_TEXT_INPUT = {
  /**
   * Async Job
   * @description Run operation asynchronously. Returns jobId if true.
   * @default null
   */
  async_job: boolean | null;
  /**
   * Case Sensitive
   * @description Enable case-sensitive matching.
   * @default false
   */
  caseSensitive: boolean | null;
  /**
   * Pages
   * @description Comma-separated list of page indices or ranges to process (0-based), e.g., '0,2-5'.
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for protected PDF if required.
   * @default null
   */
  password: string | null;
  /**
   * Regex Search
   * @description Treat searchString as regular expression.
   * @default false
   */
  regexSearch: boolean | null;
  /**
   * Search String
   * @description Text string or regex pattern to search and delete.
   */
  searchString?: string;
  /**
   * Url
   * @description URL or base64 content of the source PDF file.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_SEARCH_AND_DELETE_TEXT tool output.
 */
type PDF_CO_PDF_SEARCH_AND_DELETE_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the operation failed.
       * @default null
       */
      error: string | null;
      /**
       * Page Count
       * @description Number of pages in the output PDF.
       */
      pageCount: number;
      /**
       * Remaining Credits
       * @description Remaining API credits after the request.
       */
      remainingCredits: number;
      /**
       * Status
       * @description Status code of the operation.
       */
      status: number;
      /**
       * Url
       * @description URL to the resulting PDF file after text deletion.
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
 * Type of PDF_CO's PDF_CO_PDF_SEARCH_AND_REPLACE_TEXT tool input.
 */
type PDF_CO_PDF_SEARCH_AND_REPLACE_TEXT_INPUT = {
  /**
   * Async Job
   * @description Set to true to run process asynchronously (returns jobId).
   * @default null
   */
  async_job: boolean | null;
  /**
   * Name
   * @description Optional name for the resulting PDF file.
   * @default null
   */
  name: string | null;
  /**
   * Password
   * @description Password for protected PDF, if required.
   * @default null
   */
  password: string | null;
  /**
   * Regex Search
   * @description Enable regular expression search if true.
   * @default null
   */
  regexSearch: boolean | null;
  /**
   * Replace String
   * @description Text to replace each found occurrence with.
   */
  replaceString?: string;
  /**
   * Search String
   * @description Text to search for in the document.
   */
  searchString?: string;
  /**
   * Url
   * @description Publicly accessible URL of the source PDF file.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_SEARCH_AND_REPLACE_TEXT tool output.
 */
type PDF_CO_PDF_SEARCH_AND_REPLACE_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Indicates whether an error occurred.
       */
      error: boolean;
      /**
       * Message
       * @description Error or status message.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description HTTP-like status code of the operation.
       */
      status: number;
      /**
       * Url
       * @description URL of the modified PDF file.
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_SPLIT tool input.
 */
type PDF_CO_PDF_SPLIT_INPUT = {
  /**
   * Data Encryption Algorithm
   * @description Algorithm for user-controlled output encryption (AES128, AES192, AES256).
   * @default null
   */
  DataEncryptionAlgorithm: string | null;
  /**
   * Data Encryption Iv
   * @description Base64-encoded IV for output data encryption.
   * @default null
   */
  DataEncryptionIV: string | null;
  /**
   * Data Encryption Key
   * @description Base64-encoded key for output data encryption.
   * @default null
   */
  DataEncryptionKey: string | null;
  /**
   * Callback
   * @description Webhook URL for async notifications; only used when run_async is True.
   * @default null
   */
  callback: string | null;
  /**
   * Expiration
   * @description Minutes before temporary output links expire; default is service default.
   * @default null
   */
  expiration: number | null;
  /**
   * File Path
   * @description Local path to the PDF file to upload instead of using URL.
   * @default null
   */
  file_path: string | null;
  /**
   * Httppassword
   * @description HTTP basic auth password if the source URL is protected.
   * @default null
   */
  httppassword: string | null;
  /**
   * Httpusername
   * @description HTTP basic auth username if the source URL is protected.
   * @default null
   */
  httpusername: string | null;
  /**
   * Inline
   * @description Return split documents inline (base64) instead of URLs.
   * @default false
   */
  inline: boolean | null;
  /**
   * Name
   * @description Base name for output files; each part receives a suffix.
   * @default null
   */
  name: string | null;
  /**
   * Output Data Format
   * @description Set to 'base64' to return split PDFs as base64 strings.
   * @default null
   */
  outputDataFormat: string | null;
  /**
   * Pages
   * @description Comma-separated or dash page ranges to split, e.g. '1-2,4'. 1-based indexing; omit to split all pages.
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Owner password for encrypted PDF files, if any.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Advanced processing profiles as JSON-formatted dict.
   * @default null
   */
  profiles: {
      [key: string]: unknown;
  } | null;
  /**
   * Run Async
   * @description Run processing asynchronously; returns jobId instead of immediate results.
   * @default false
   */
  run_async: boolean | null;
  /**
   * Url
   * @description Public URL of the PDF file to split.
   * @default null
   */
  url: string | null;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_SPLIT tool output.
 */
type PDF_CO_PDF_SPLIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description Base64-encoded split PDF documents when inline is True.
       * @default null
       */
      documents: string[] | null;
      /**
       * Error
       * @description True if an error occurred.
       */
      error: boolean;
      /**
       * Job Id
       * @description Job ID for asynchronous operations.
       * @default null
       */
      jobId: string | null;
      /**
       * Message
       * @description Error or informational message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status code returned by the API.
       */
      status: number;
      /**
       * Urls
       * @description URLs of the resulting split PDF files.
       * @default null
       */
      urls: string[] | null;
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
 * Type of PDF_CO's PDF_CO_PDF_TO_CSV tool input.
 */
type PDF_CO_PDF_TO_CSV_INPUT = {
  /**
   * Encrypt
   * @description If true, encrypts the output CSV file.
   * @default null
   */
  encrypt: boolean | null;
  /**
   * Inline
   * @description If true, returns CSV data inline; otherwise returns a URL to the CSV.
   * @default null
   */
  inline: boolean | null;
  /**
   * Lang
   * @description Language for OCR text recognition (e.g., 'eng', 'deu').
   * @default null
   */
  lang: string | null;
  /**
   * Name
   * @description Optional name for the output CSV file (must end with .csv).
   * @default null
   */
  name: string | null;
  /**
   * Pages
   * @description Comma-separated page indices or ranges to convert (e.g., '1,3-5').
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for protected PDF files, if required.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Advanced conversion settings in JSON format.
   * @default null
   */
  profiles: string | null;
  /**
   * Run Async
   * @description Run job asynchronously; returns jobId for status checking.
   * @default null
   */
  run_async: boolean | null;
  /**
   * Url
   * @description Link to the PDF file to be converted.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_TO_CSV tool output.
 */
type PDF_CO_PDF_TO_CSV_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred during conversion.
       */
      error: boolean;
      /**
       * Estimated Execution Time
       * @description Estimated time for async request processing.
       * @default null
       */
      estimatedExecutionTime: string | null;
      /**
       * Message
       * @description Error or informational message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Remaining Credits
       * @description Number of remaining credits after the call.
       * @default null
       */
      remainingCredits: number | null;
      /**
       * Status
       * @description Status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL to the resulting CSV file or inline CSV data.
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_TO_HTML tool input.
 */
type PDF_CO_PDF_TO_HTML_INPUT = {
  /**
   * Encrypt
   * @description Whether to encrypt the output HTML file.
   * @default false
   */
  encrypt: boolean | null;
  /**
   * File
   * Format: binary
   * @description Binary content of the PDF file to upload as an alternative to 'url'.
   * @default null
   */
  file: string | null;
  /**
   * Inline
   * @description If true, returns raw HTML in the 'html' field instead of a link.
   * @default false
   */
  inline: boolean | null;
  /**
   * Name
   * @description Desired name for the resulting HTML file (e.g., 'result.html').
   * @default null
   */
  name: string | null;
  /**
   * Profiles
   * @description Additional conversion profiles as a JSON string.
   * @default null
   */
  profiles: string | null;
  /**
   * Run Async
   * @description Set to true to run the conversion asynchronously.
   * @default false
   */
  run_async: boolean | null;
  /**
   * Url
   * @description URL to the source PDF file.
   * @default null
   */
  url: string | null;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_TO_HTML tool output.
 */
type PDF_CO_PDF_TO_HTML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred, otherwise False.
       */
      error: boolean;
      /**
       * Html
       * @description Raw HTML output (present if inline=true).
       * @default null
       */
      html: string | null;
      /**
       * Message
       * @description Status or error message from the API.
       */
      message: string;
      /**
       * Remaining Credits
       * @description Number of API credits left.
       * @default null
       */
      remaining_credits: number | null;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL of the generated HTML file (present if inline=false).
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_TO_IMAGE tool input.
 */
type PDF_CO_PDF_TO_IMAGE_INPUT = {
  /**
   * Async Job
   * @description Run processing asynchronously. Returns jobId when true.
   * @default false
   */
  async_job: boolean;
  /**
   * Dpi
   * @description Resolution in DPI for the output images (1-300).
   * @default null
   */
  dpi: number | null;
  /**
   * Image Format
   * @description Output image format: PNG (default), JPG, or TIFF.
   * @default null
   * @enum {string|null}
   */
  imageFormat: "PNG" | "JPG" | "TIFF" | null;
  /**
   * Pages
   * @description Comma-separated list of page indices or ranges to convert. For example: '1,3-5' to convert pages 1, 3, 4, and 5.
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for protected PDF files, if required.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Custom JSON profiles for advanced conversion options.
   * @default null
   */
  profiles: string | null;
  /**
   * Url
   * @description Link to the source PDF file.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_TO_IMAGE tool output.
 */
type PDF_CO_PDF_TO_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred.
       */
      error: boolean;
      /**
       * Job Id
       * @description Job ID for asynchronous processing.
       * @default null
       */
      jobId: string | null;
      /**
       * Message
       * @description Detailed error or status message.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Operation status message.
       */
      status: string;
      /**
       * Url
       * @description URL or list of URLs to the generated image(s).
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_TO_JSON tool input.
 */
type PDF_CO_PDF_TO_JSON_INPUT = {
  /**
   * Async
   * @description If true, runs the job asynchronously; returns jobId for status checking.
   * @default null
   */
  async: boolean | null;
  /**
   * File
   * Format: binary
   * @description Binary content of the PDF file to convert.
   * @default null
   */
  file: string | null;
  /**
   * Inline
   * @description If true, returns JSON data inline; otherwise returns a URL.
   * @default null
   */
  inline: boolean | null;
  /**
   * Name
   * @description Optional name for the output JSON file (should end with .json).
   * @default null
   */
  name: string | null;
  /**
   * Pages
   * @description Comma-separated page indices or ranges to convert (e.g., '1,3-5').
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for protected PDF files, if required.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Advanced conversion configuration in JSON format.
   * @default null
   */
  profiles: string | null;
  /**
   * Search String
   * @description Optional text to search for in the PDF before conversion.
   * @default null
   */
  searchString: string | null;
  /**
   * Url
   * @description Link to the PDF file to be converted.
   * @default null
   */
  url: string | null;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_TO_JSON tool output.
 */
type PDF_CO_PDF_TO_JSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Inline JSON data (if inline=True).
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Error
       * @description True if an error occurred during conversion.
       */
      error: boolean;
      /**
       * Message
       * @description Error or status message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL to the resulting JSON file (if inline=False).
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_TO_TEXT tool input.
 */
type PDF_CO_PDF_TO_TEXT_INPUT = {
  /**
   * Callback
   * @description Webhook URL to receive callback when async=true.
   * @default null
   */
  callback: string | null;
  /**
   * Expiration
   * @description Expiration time in minutes for the output file link.
   * @default 60
   */
  expiration: number | null;
  /**
   * Httppassword
   * @description HTTP auth password for source URL.
   * @default null
   */
  httppassword: string | null;
  /**
   * Httpusername
   * @description HTTP auth username for source URL.
   * @default null
   */
  httpusername: string | null;
  /**
   * Inline
   * @description Return text inline in response instead of URL.
   * @default false
   */
  inline: boolean | null;
  /**
   * Lang
   * @description OCR language(s) code, e.g. 'eng', or 'eng+deu'.
   * @default eng
   */
  lang: string | null;
  /**
   * Line Grouping
   * @description Line grouping mode: '1', '2', or '3'.
   * @default null
   */
  lineGrouping: string | null;
  /**
   * Name
   * @description Desired name for the output file (e.g. 'result.txt').
   * @default null
   */
  name: string | null;
  /**
   * Pages
   * @description Comma-separated page indices or ranges to process (e.g. '0,2-4').
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for protected PDF files.
   * @default null
   */
  password: string | null;
  /**
   * Rect
   * @description Extraction rectangle in format '{x} {y} {width} {height}'.
   * @default null
   */
  rect: string | null;
  /**
   * Run Async
   * @description Run process asynchronously; returns jobId if true.
   * @default false
   */
  run_async: boolean | null;
  /**
   * Unwrap
   * @description Unwrap lines into a single line within table cells (only when lineGrouping='1').
   * @default false
   */
  unwrap: boolean | null;
  /**
   * Url
   * @description URL to the source PDF or image file.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_TO_TEXT tool output.
 */
type PDF_CO_PDF_TO_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Extracted text (present if inline=true).
       * @default null
       */
      body: string | null;
      /**
       * Credits
       * @description API credits consumed by this call.
       * @default null
       */
      credits: number | null;
      /**
       * Error
       * @description True if an error occurred.
       */
      error: boolean;
      /**
       * Name
       * @description Name of the generated file.
       * @default null
       */
      name: string | null;
      /**
       * Page Count
       * @description Number of pages processed.
       * @default null
       */
      pageCount: number | null;
      /**
       * Remaining Credits
       * @description Remaining API credits after the call.
       * @default null
       */
      remainingCredits: number | null;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL to the resulting text file (present if inline=false).
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_TO_XLS tool input.
 */
type PDF_CO_PDF_TO_XLS_INPUT = {
  /**
   * Name
   * @description Optional name for the output XLS file (must end with .xls).
   * @default null
   */
  name: string | null;
  /**
   * Pages
   * @description Comma-separated page indices or ranges to convert (e.g., '1,3-5').
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for protected PDF files, if required.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Advanced conversion settings in JSON format.
   * @default null
   */
  profiles: string | null;
  /**
   * Run Async
   * @description Run job asynchronously; returns jobId for status checking.
   * @default null
   */
  run_async: boolean | null;
  /**
   * Url
   * @description Link to the PDF file to be converted.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_TO_XLS tool output.
 */
type PDF_CO_PDF_TO_XLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred during conversion.
       */
      error: boolean;
      /**
       * Expiration
       * @description Expiration date/time of the result file.
       * @default null
       */
      expiration: string | null;
      /**
       * Message
       * @description Error or informational message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Remaining
       * @description Number of remaining credits after the call.
       * @default null
       */
      remaining: number | null;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL to the resulting XLS file.
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_TO_XLSX tool input.
 */
type PDF_CO_PDF_TO_XLSX_INPUT = {
  /**
   * Columns0 Based
   * @description Set to true if column indices in profiles are zero-based.
   * @default null
   */
  columns0Based: boolean | null;
  /**
   * Encrypt
   * @description If true, encrypts the output XLSX file.
   * @default null
   */
  encrypt: boolean | null;
  /**
   * Expiration
   * @description Expiration time for the output link in minutes (default is 60).
   * @default null
   */
  expiration: number | null;
  /**
   * Inline
   * @description If true, returns XLSX data inline; otherwise returns a URL to the XLSX.
   * @default null
   */
  inline: boolean | null;
  /**
   * Name
   * @description Optional name for the output XLSX file (must end with .xlsx).
   * @default null
   */
  name: string | null;
  /**
   * Optimization
   * @description Optimization mode, e.g., 'ocr'.
   * @default null
   */
  optimization: string | null;
  /**
   * Pages
   * @description Comma-separated page indices or ranges to convert (e.g., '1,3-5').
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for protected PDF files, if required.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Advanced conversion settings in JSON format.
   * @default null
   */
  profiles: string | null;
  /**
   * Run Async
   * @description Run job asynchronously; returns processId for status checking.
   * @default null
   */
  run_async: boolean | null;
  /**
   * Url
   * @description Link to the PDF file to be converted.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_TO_XLSX tool output.
 */
type PDF_CO_PDF_TO_XLSX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred during conversion.
       */
      error: boolean;
      /**
       * Inline
       * @description Base64-encoded XLSX data if inline was requested.
       * @default null
       */
      inline: string | null;
      /**
       * Message
       * @description Error or informational message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Page Count
       * @description Number of pages processed.
       * @default null
       */
      pageCount: number | null;
      /**
       * Process Id
       * @description ID of the async process (if async was requested).
       * @default null
       */
      processId: string | null;
      /**
       * Remaining
       * @description Number of remaining credits after the call.
       * @default null
       */
      remaining: number | null;
      /**
       * Status
       * @description Status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL to the resulting XLSX file.
       * @default null
       */
      url: string | null;
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
 * Type of PDF_CO's PDF_CO_PDF_TO_XML tool input.
 */
type PDF_CO_PDF_TO_XML_INPUT = {
  /**
   * Pages
   * @description Comma-separated page indices or ranges to convert (e.g., '1,3-5').
   * @default null
   */
  pages: string | null;
  /**
   * Password
   * @description Password for protected PDF files, if required.
   * @default null
   */
  password: string | null;
  /**
   * Profiles
   * @description Advanced conversion settings in JSON format.
   * @default null
   */
  profiles: string | null;
  /**
   * Run Async
   * @description Run job asynchronously; returns jobId for status checking.
   * @default null
   */
  run_async: boolean | null;
  /**
   * Url
   * @description Link to the PDF file to be converted.
   */
  url?: string;
};

/**
 * Type of PDF_CO's PDF_CO_PDF_TO_XML tool output.
 */
type PDF_CO_PDF_TO_XML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description True if an error occurred during conversion.
       */
      error: boolean;
      /**
       * Estimated Execution Time
       * @description Estimated time for async request processing.
       * @default null
       */
      estimatedExecutionTime: string | null;
      /**
       * Message
       * @description Error or informational message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Remaining Credits
       * @description Number of remaining credits after the call.
       * @default null
       */
      remainingCredits: number | null;
      /**
       * Status
       * @description Status code returned by the API.
       */
      status: number;
      /**
       * Url
       * @description URL to the resulting XML file or inline XML data.
       * @default null
       */
      url: string | null;
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
 * Type map of all available tool input types for toolkit "PDF_CO".
 */
export type PDF_CO_TOOL_INPUTS = {
  ACCOUNT_BALANCE_INFO: PDF_CO_ACCOUNT_BALANCE_INFO_INPUT
  BARCODE_GENERATE: PDF_CO_BARCODE_GENERATE_INPUT
  CONVERT_EXCEL_TO_CSV: PDF_CO_CONVERT_EXCEL_TO_CSV_INPUT
  CONVERT_EXCEL_TO_HTML: PDF_CO_CONVERT_EXCEL_TO_HTML_INPUT
  CONVERT_EXCEL_TO_JSON: PDF_CO_CONVERT_EXCEL_TO_JSON_INPUT
  CONVERT_EXCEL_TO_TEXT: PDF_CO_CONVERT_EXCEL_TO_TEXT_INPUT
  CONVERT_EXCEL_TO_XML: PDF_CO_CONVERT_EXCEL_TO_XML_INPUT
  DOCUMENT_PARSER: PDF_CO_DOCUMENT_PARSER_INPUT
  FILE_UPLOAD: PDF_CO_FILE_UPLOAD_INPUT
  JOB_CHECK: PDF_CO_JOB_CHECK_INPUT
  PDF_ADD: PDF_CO_PDF_ADD_INPUT
  PDF_CHANGE_TEXT_SEARCHABLE: PDF_CO_PDF_CHANGE_TEXT_SEARCHABLE_INPUT
  PDF_DELETE_PAGES: PDF_CO_PDF_DELETE_PAGES_INPUT
  PDF_EXTRACT_ATTACHMENTS: PDF_CO_PDF_EXTRACT_ATTACHMENTS_INPUT
  PDF_FIND: PDF_CO_PDF_FIND_INPUT
  PDF_FORMS_INFO_READER: PDF_CO_PDF_FORMS_INFO_READER_INPUT
  PDF_FROM_DOCUMENT_TXT: PDF_CO_PDF_FROM_DOCUMENT_TXT_INPUT
  PDF_FROM_EMAIL: PDF_CO_PDF_FROM_EMAIL_INPUT
  PDF_FROM_HTML: PDF_CO_PDF_FROM_HTML_INPUT
  PDF_INFO_READER: PDF_CO_PDF_INFO_READER_INPUT
  PDF_MERGE: PDF_CO_PDF_MERGE_INPUT
  PDF_ROTATE: PDF_CO_PDF_ROTATE_INPUT
  PDF_SEARCH_AND_DELETE_TEXT: PDF_CO_PDF_SEARCH_AND_DELETE_TEXT_INPUT
  PDF_SEARCH_AND_REPLACE_TEXT: PDF_CO_PDF_SEARCH_AND_REPLACE_TEXT_INPUT
  PDF_SPLIT: PDF_CO_PDF_SPLIT_INPUT
  PDF_TO_CSV: PDF_CO_PDF_TO_CSV_INPUT
  PDF_TO_HTML: PDF_CO_PDF_TO_HTML_INPUT
  PDF_TO_IMAGE: PDF_CO_PDF_TO_IMAGE_INPUT
  PDF_TO_JSON: PDF_CO_PDF_TO_JSON_INPUT
  PDF_TO_TEXT: PDF_CO_PDF_TO_TEXT_INPUT
  PDF_TO_XLS: PDF_CO_PDF_TO_XLS_INPUT
  PDF_TO_XLSX: PDF_CO_PDF_TO_XLSX_INPUT
  PDF_TO_XML: PDF_CO_PDF_TO_XML_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PDF_CO".
 */
export type PDF_CO_TOOL_OUTPUTS = {
  ACCOUNT_BALANCE_INFO: PDF_CO_ACCOUNT_BALANCE_INFO_OUTPUT
  BARCODE_GENERATE: PDF_CO_BARCODE_GENERATE_OUTPUT
  CONVERT_EXCEL_TO_CSV: PDF_CO_CONVERT_EXCEL_TO_CSV_OUTPUT
  CONVERT_EXCEL_TO_HTML: PDF_CO_CONVERT_EXCEL_TO_HTML_OUTPUT
  CONVERT_EXCEL_TO_JSON: PDF_CO_CONVERT_EXCEL_TO_JSON_OUTPUT
  CONVERT_EXCEL_TO_TEXT: PDF_CO_CONVERT_EXCEL_TO_TEXT_OUTPUT
  CONVERT_EXCEL_TO_XML: PDF_CO_CONVERT_EXCEL_TO_XML_OUTPUT
  DOCUMENT_PARSER: PDF_CO_DOCUMENT_PARSER_OUTPUT
  FILE_UPLOAD: PDF_CO_FILE_UPLOAD_OUTPUT
  JOB_CHECK: PDF_CO_JOB_CHECK_OUTPUT
  PDF_ADD: PDF_CO_PDF_ADD_OUTPUT
  PDF_CHANGE_TEXT_SEARCHABLE: PDF_CO_PDF_CHANGE_TEXT_SEARCHABLE_OUTPUT
  PDF_DELETE_PAGES: PDF_CO_PDF_DELETE_PAGES_OUTPUT
  PDF_EXTRACT_ATTACHMENTS: PDF_CO_PDF_EXTRACT_ATTACHMENTS_OUTPUT
  PDF_FIND: PDF_CO_PDF_FIND_OUTPUT
  PDF_FORMS_INFO_READER: PDF_CO_PDF_FORMS_INFO_READER_OUTPUT
  PDF_FROM_DOCUMENT_TXT: PDF_CO_PDF_FROM_DOCUMENT_TXT_OUTPUT
  PDF_FROM_EMAIL: PDF_CO_PDF_FROM_EMAIL_OUTPUT
  PDF_FROM_HTML: PDF_CO_PDF_FROM_HTML_OUTPUT
  PDF_INFO_READER: PDF_CO_PDF_INFO_READER_OUTPUT
  PDF_MERGE: PDF_CO_PDF_MERGE_OUTPUT
  PDF_ROTATE: PDF_CO_PDF_ROTATE_OUTPUT
  PDF_SEARCH_AND_DELETE_TEXT: PDF_CO_PDF_SEARCH_AND_DELETE_TEXT_OUTPUT
  PDF_SEARCH_AND_REPLACE_TEXT: PDF_CO_PDF_SEARCH_AND_REPLACE_TEXT_OUTPUT
  PDF_SPLIT: PDF_CO_PDF_SPLIT_OUTPUT
  PDF_TO_CSV: PDF_CO_PDF_TO_CSV_OUTPUT
  PDF_TO_HTML: PDF_CO_PDF_TO_HTML_OUTPUT
  PDF_TO_IMAGE: PDF_CO_PDF_TO_IMAGE_OUTPUT
  PDF_TO_JSON: PDF_CO_PDF_TO_JSON_OUTPUT
  PDF_TO_TEXT: PDF_CO_PDF_TO_TEXT_OUTPUT
  PDF_TO_XLS: PDF_CO_PDF_TO_XLS_OUTPUT
  PDF_TO_XLSX: PDF_CO_PDF_TO_XLSX_OUTPUT
  PDF_TO_XML: PDF_CO_PDF_TO_XML_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PDF_CO toolkit.
 */
export const PDF_CO = {
  slug: "pdf_co",
  tools: {
    /**
     * Tool to get account balance info. use after authenticating to check remaining credits.
     */
    ACCOUNT_BALANCE_INFO: "PDF_CO_ACCOUNT_BALANCE_INFO",
    /**
     * Tool to generate barcode images (qr, code128, code39, pdf417, etc.). use when you need to encode data into barcodes on the fly.
     */
    BARCODE_GENERATE: "PDF_CO_BARCODE_GENERATE",
    /**
     * Tool to convert an excel file (xls/xlsx) to csv. use when you have a public excel file url and need csv output. inline option returns data inline; otherwise provides download url.
     */
    CONVERT_EXCEL_TO_CSV: "PDF_CO_CONVERT_EXCEL_TO_CSV",
    /**
     * Tool to convert an excel file to html. use when you have an excel url or file bytes and need html output.
     */
    CONVERT_EXCEL_TO_HTML: "PDF_CO_CONVERT_EXCEL_TO_HTML",
    /**
     * Tool to convert an online excel or csv file to json format. use when you have a public file url and need structured data extraction.
     */
    CONVERT_EXCEL_TO_JSON: "PDF_CO_CONVERT_EXCEL_TO_JSON",
    /**
     * Tool to convert excel files to plain text. use after providing an excel file url to extract spreadsheet content.
     */
    CONVERT_EXCEL_TO_TEXT: "PDF_CO_CONVERT_EXCEL_TO_TEXT",
    /**
     * Tool to convert an excel file to xml. use when needing xml output from xls/xlsx/csv synchronously or asynchronously.
     */
    CONVERT_EXCEL_TO_XML: "PDF_CO_CONVERT_EXCEL_TO_XML",
    /**
     * Tool to parse documents based on predefined templates to extract structured data. use when you need to extract structured fields from a pdf by supplying a custom template.
     */
    DOCUMENT_PARSER: "PDF_CO_DOCUMENT_PARSER",
    /**
     * Tool to upload a local file to pdf.co. use when you need to stage a document on pdf.co for downstream processing.
     */
    FILE_UPLOAD: "PDF_CO_FILE_UPLOAD",
    /**
     * Tool to check status and result of an asynchronous job. use after submitting a job to poll for completion.
     */
    JOB_CHECK: "PDF_CO_JOB_CHECK",
    /**
     * Tool to add content to an existing pdf. use when you need to overlay text, images, barcodes, or links before distributing the file.
     */
    PDF_ADD: "PDF_CO_PDF_ADD",
    /**
     * Tool to make pdf text searchable using ocr. use when you need to add a searchable text layer to scanned or image-only pdf documents.
     */
    PDF_CHANGE_TEXT_SEARCHABLE: "PDF_CO_PDF_CHANGE_TEXT_SEARCHABLE",
    /**
     * Tool to delete specific pages from a pdf file. use when you need to remove unwanted pages before further processing.
     */
    PDF_DELETE_PAGES: "PDF_CO_PDF_DELETE_PAGES",
    /**
     * Tool to extract embedded attachments from a pdf. use when you need to retrieve embedded files from a pdf after uploading.
     */
    PDF_EXTRACT_ATTACHMENTS: "PDF_CO_PDF_EXTRACT_ATTACHMENTS",
    /**
     * Tool to find text in a pdf document. use when you need to locate keywords or regex patterns and get their page positions.
     */
    PDF_FIND: "PDF_CO_PDF_FIND",
    /**
     * Tool to extract form field information from a pdf. use when you need to retrieve names, types, and values of form fields.
     */
    PDF_FORMS_INFO_READER: "PDF_CO_PDF_FORMS_INFO_READER",
    /**
     * Tool to convert plain text data to pdf. use when you need to generate a pdf from raw text content or text file links.
     */
    PDF_FROM_DOCUMENT_TXT: "PDF_CO_PDF_FROM_DOCUMENT_TXT",
    /**
     * Tool to convert email files (.eml/.msg) to pdf. use when you need to transform standalone email messages into pdf documents.
     */
    PDF_FROM_EMAIL: "PDF_CO_PDF_FROM_EMAIL",
    /**
     * Tool to convert html code or webpage url into a pdf document. use when you need to capture a webpage or html snippet as a pdf file.
     */
    PDF_FROM_HTML: "PDF_CO_PDF_FROM_HTML",
    /**
     * Tool to retrieve detailed information and metadata of a pdf. use when you need page count, author, encryption details, and other document properties.
     */
    PDF_INFO_READER: "PDF_CO_PDF_INFO_READER",
    /**
     * Tool to merge multiple pdf files into one document. use when you need to combine several pdf urls into a single pdf file.
     */
    PDF_MERGE: "PDF_CO_PDF_MERGE",
    /**
     * Tool to rotate selected pages in a pdf. use when you need to adjust the orientation of specific pages in an online pdf file before further processing.
     */
    PDF_ROTATE: "PDF_CO_PDF_ROTATE",
    /**
     * Tool to search for and delete text in a pdf by keyword or regex. use when you need to remove sensitive or unwanted text from a pdf document.
     */
    PDF_SEARCH_AND_DELETE_TEXT: "PDF_CO_PDF_SEARCH_AND_DELETE_TEXT",
    /**
     * Tool to search for and replace text in a pdf document. use when you need to update specific text instances within an existing pdf file (e.g., changing invoice numbers).
     */
    PDF_SEARCH_AND_REPLACE_TEXT: "PDF_CO_PDF_SEARCH_AND_REPLACE_TEXT",
    /**
     * Tool to split a pdf into multiple files by page ranges. use when you need to extract specific pages or page ranges from a pdf.
     */
    PDF_SPLIT: "PDF_CO_PDF_SPLIT",
    /**
     * Tool to convert pdf or scanned images to csv format. use when you need to extract tabular data from a pdf into csv format.
     */
    PDF_TO_CSV: "PDF_CO_PDF_TO_CSV",
    /**
     * Tool to convert pdf documents to html. use when you need an html rendition of a pdf or scanned image.
     */
    PDF_TO_HTML: "PDF_CO_PDF_TO_HTML",
    /**
     * Tool to convert pdf pages to images (png, jpg, tiff). use when you need image previews of pdf content.
     */
    PDF_TO_IMAGE: "PDF_CO_PDF_TO_IMAGE",
    /**
     * Tool to convert pdf or scanned images to json format. use when you need a structured json representation of pdf content.
     */
    PDF_TO_JSON: "PDF_CO_PDF_TO_JSON",
    /**
     * Tool to convert pdf or scanned images to plain text. use when you need raw text output preserving layout.
     */
    PDF_TO_TEXT: "PDF_CO_PDF_TO_TEXT",
    /**
     * Tool to convert pdf or scanned images to xls format. use when you need to extract tabular data into an excel spreadsheet.
     */
    PDF_TO_XLS: "PDF_CO_PDF_TO_XLS",
    /**
     * Tool to convert pdf or scanned images to xlsx (excel) format. use when you need structured spreadsheet output from a pdf.
     */
    PDF_TO_XLSX: "PDF_CO_PDF_TO_XLSX",
    /**
     * Tool to convert pdf or scanned images to xml format. use when you need to extract structured data from pdf into xml.
     */
    PDF_TO_XML: "PDF_CO_PDF_TO_XML",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PDF_CO".
 */
export type PDF_CO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PDF_CO".
 */
export type PDF_CO_TRIGGER_EVENTS = {}
