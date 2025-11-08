// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_AI_JPG_TO_JSON tool input.
 */
type CONVERSION_TOOLS_CONVERT_AI_JPG_TO_JSON_INPUT = {
  /**
   * File Id
   * @description Identifier of a previously uploaded JPG file.
   * @default null
   */
  file_id: string | null;
  /**
   * File Url
   * Format: uri
   * @description Publicly accessible URL of the JPG image.
   * @default null
   */
  file_url: string | null;
};

/**
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_AI_JPG_TO_JSON tool output.
 */
type CONVERSION_TOOLS_CONVERT_AI_JPG_TO_JSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if operation failed, null on success.
       * @default null
       */
      error: string | null;
      /**
       * Task Id
       * @description Identifier of the created conversion task.
       */
      task_id: string;
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
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_EXCEL_TO_CSV tool input.
 */
type CONVERSION_TOOLS_CONVERT_EXCEL_TO_CSV_INPUT = {
  /**
   * Delimiter
   * @description Delimiter character for the output CSV.
   * @default ,
   * @enum {string}
   */
  delimiter: "," | ";" | "|" | "\t";
  /**
   * File Id
   * @description ID of a previously uploaded Excel file. Mutually exclusive with file_url.
   * @default null
   */
  file_id: string | null;
  /**
   * File Url
   * @description Public URL of the Excel file to convert. Mutually exclusive with file_id.
   * @default null
   */
  file_url: string | null;
  /**
   * Quote All
   * @description Whether to quote all non-empty fields in the CSV.
   * @default false
   */
  quote_all: boolean;
  /**
   * Utf8 Bom
   * @description Whether to include a UTF-8 BOM in the output CSV.
   * @default false
   */
  utf8_bom: boolean;
};

/**
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_EXCEL_TO_CSV tool output.
 */
type CONVERSION_TOOLS_CONVERT_EXCEL_TO_CSV_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message returned by the API, if any.
       * @default null
       */
      error: string | null;
      /**
       * Task Id
       * @description Identifier of the created conversion task.
       */
      task_id: string;
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
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_EXCEL_TO_HTML tool input.
 */
type CONVERSION_TOOLS_CONVERT_EXCEL_TO_HTML_INPUT = {
  /**
   * File Url
   * Format: uri
   * @description Public URL to the Excel file; required when input='url'.
   * @default null
   */
  file_url: string | null;
  /**
   * Input
   * @description Mode of input: 'upload' or 'url'.
   * @enum {string}
   */
  input?: "upload" | "url";
  /**
   * Options
   * @description Optional conversion settings, e.g., {'sheet': 'Sheet1'}.
   * @default null
   */
  options: {
      [key: string]: unknown;
  } | null;
  /**
   * UploadModel
   * @description Model for uploading an Excel file.
   * @default null
   */
  upload: {
      /**
       * File Content
       * Format: binary
       * @description Binary content of the Excel file.
       */
      file_content: string;
      /**
       * File Name
       * @description Name of the Excel file including extension.
       */
      file_name: string;
  } | null;
};

/**
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_EXCEL_TO_HTML tool output.
 */
type CONVERSION_TOOLS_CONVERT_EXCEL_TO_HTML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorDetail
       * @description Error details if the conversion task fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code if available.
           * @default null
           */
          code: string | null;
          /**
           * Message
           * @description Human-readable error message.
           * @default null
           */
          message: string | null;
      } | null;
      /**
       * Id
       * @description Unique identifier for the conversion task.
       */
      id: string;
      /**
       * TaskResult
       * @description Container for output files from the conversion task.
       * @default null
       */
      result: {
          /**
           * Files
           * @description List of output files (usually one).
           */
          files: {
              /**
               * Name
               * @description Name of the converted HTML file.
               */
              name: string;
              /**
               * Size
               * @description Size of the output file in bytes.
               */
              size: number;
              /**
               * Type
               * @description MIME type of the converted file, e.g., 'text/html'.
               */
              type: string;
              /**
               * Url
               * Format: uri
               * @description Download URL for the converted HTML file.
               */
              url: string;
          }[];
      } | null;
      /**
       * Status
       * @description Task status: 'pending', 'success', or 'error'.
       * @enum {string}
       */
      status: "pending" | "success" | "error";
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
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_MARKDOWN_TO_HTML tool input.
 */
type CONVERSION_TOOLS_CONVERT_MARKDOWN_TO_HTML_INPUT = {
  /**
   * File Id
   * @description Identifier of a previously uploaded Markdown file.
   * @default null
   */
  file_id: string | null;
  /**
   * File Url
   * Format: uri
   * @description Publicly accessible URL of the Markdown file.
   * @default null
   */
  file_url: string | null;
};

/**
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_MARKDOWN_TO_HTML tool output.
 */
type CONVERSION_TOOLS_CONVERT_MARKDOWN_TO_HTML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if operation failed, null on success.
       * @default null
       */
      error: string | null;
      /**
       * Task Id
       * @description Identifier of the created conversion task.
       */
      task_id: string;
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
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_OXPS_TO_PDF tool input.
 */
type CONVERSION_TOOLS_CONVERT_OXPS_TO_PDF_INPUT = {
  /**
   * File Id
   * @description Identifier of the uploaded OXPS file. Required if `url` is not provided.
   * @default null
   */
  file_id: string | null;
  /**
   * Url
   * Format: uri
   * @description Public URL of the OXPS file. Required if `file_id` is not provided.
   * @default null
   */
  url: string | null;
};

/**
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_OXPS_TO_PDF tool output.
 */
type CONVERSION_TOOLS_CONVERT_OXPS_TO_PDF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message returned by the API, if any.
       * @default null
       */
      error: string | null;
      /**
       * Task Id
       * @description Identifier of the created conversion task.
       */
      task_id: string;
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
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PDF tool input.
 */
type CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PDF_INPUT = {
  /**
   * Filename
   * @description Desired name for the output PDF file.
   * @default null
   */
  filename: string | null;
  /**
   * Pages
   * @description Page ranges to convert, e.g., '1-5,7'.
   * @default null
   */
  pages: string | null;
  /**
   * Url
   * Format: uri
   * @description Website URL to convert to PDF.
   */
  url?: string;
};

/**
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PDF tool output.
 */
type CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PDF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message returned by the API, if any.
       * @default null
       */
      error: string | null;
      /**
       * Task Id
       * @description Identifier of the created conversion task.
       */
      task_id: string;
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
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PNG tool input.
 */
type CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PNG_INPUT = {
  /**
   * Conversion
   * @description Conversion type identifier.
   * @default website_to_png
   * @constant
   */
  conversion: "website_to_png";
  /**
   * ConvertWebsiteToPngOptions
   * @description Optional settings for the PNG conversion output.
   * @default null
   */
  options: {
      /**
       * Full Page
       * @description Whether to capture the full scrollable page (true) or only the viewport (false).
       * @default null
       */
      full_page: boolean | null;
      /**
       * Height
       * @description Desired image height in pixels.
       * @default null
       */
      height: number | null;
      /**
       * Width
       * @description Desired image width in pixels.
       * @default null
       */
      width: number | null;
  } | null;
  /**
   * Url
   * Format: uri
   * @description Full URL of the website to convert.
   */
  url?: string;
};

/**
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PNG tool output.
 */
type CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PNG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the conversion failed.
       * @default null
       */
      error: string | null;
      /**
       * Id
       * @description Unique task identifier.
       */
      id: string;
      /**
       * ConversionResult
       * @description Result details when task is completed.
       * @default null
       */
      result: {
          /**
           * Files
           * @description List of output file objects.
           */
          files: {
              /**
               * Filename
               * @description Name of the converted PNG file.
               */
              filename: string;
              /**
               * Url
               * Format: uri
               * @description Download URL for the converted file.
               */
              url: string;
          }[];
      } | null;
      /**
       * Status
       * @description Task status: 'pending', 'processing', or 'completed'.
       * @enum {string}
       */
      status: "pending" | "processing" | "completed";
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
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_WORD_TO_TEXT tool input.
 */
type CONVERSION_TOOLS_CONVERT_WORD_TO_TEXT_INPUT = {
  /**
   * File
   * Format: binary
   * @description Binary content of the Word document to convert.
   * @default null
   */
  file: string | null;
  /**
   * File Url
   * Format: uri
   * @description Publicly accessible URL of the Word document to convert.
   * @default null
   */
  file_url: string | null;
};

/**
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_CONVERT_WORD_TO_TEXT tool output.
 */
type CONVERSION_TOOLS_CONVERT_WORD_TO_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the conversion failed.
       * @default null
       */
      error: string | null;
      /**
       * File
       * Format: uri
       * @description URL to download the converted text file.
       */
      file: string;
      /**
       * Id
       * @description Unique identifier for the conversion task.
       */
      id: string;
      /**
       * Status
       * @description Current status of the task (e.g., 'queued', 'processing', 'finished', 'error').
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
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_DOWNLOAD_FILE tool input.
 */
type CONVERSION_TOOLS_DOWNLOAD_FILE_INPUT = {
  /**
   * File Id
   * @description Unique identifier of the file to download.
   */
  file_id?: string;
};

/**
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_DOWNLOAD_FILE tool output.
 */
type CONVERSION_TOOLS_DOWNLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * Format: binary
       * @description Binary content of the downloaded file.
       */
      file: string;
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
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_UPLOAD_FILE tool input.
 */
type CONVERSION_TOOLS_UPLOAD_FILE_INPUT = {
  /**
   * File
   * Format: binary
   * @description Binary content of the file to upload
   */
  file?: string;
  /**
   * Filename
   * @description Name of the file including extension
   */
  filename?: string;
};

/**
 * Type of CONVERSION_TOOLS's CONVERSION_TOOLS_UPLOAD_FILE tool output.
 */
type CONVERSION_TOOLS_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Id
       * @description Unique identifier of the uploaded file
       */
      file_id: string;
      /**
       * Filename
       * @description Original name of the uploaded file
       */
      filename: string;
      /**
       * Message
       * @description Additional informational message, typically on errors
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status of the upload operation, e.g., 'success'
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
 * Type map of all available tool input types for toolkit "CONVERSION_TOOLS".
 */
export type CONVERSION_TOOLS_TOOL_INPUTS = {
  CONVERT_AI_JPG_TO_JSON: CONVERSION_TOOLS_CONVERT_AI_JPG_TO_JSON_INPUT
  CONVERT_EXCEL_TO_CSV: CONVERSION_TOOLS_CONVERT_EXCEL_TO_CSV_INPUT
  CONVERT_EXCEL_TO_HTML: CONVERSION_TOOLS_CONVERT_EXCEL_TO_HTML_INPUT
  CONVERT_MARKDOWN_TO_HTML: CONVERSION_TOOLS_CONVERT_MARKDOWN_TO_HTML_INPUT
  CONVERT_OXPS_TO_PDF: CONVERSION_TOOLS_CONVERT_OXPS_TO_PDF_INPUT
  CONVERT_WEBSITE_TO_PDF: CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PDF_INPUT
  CONVERT_WEBSITE_TO_PNG: CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PNG_INPUT
  CONVERT_WORD_TO_TEXT: CONVERSION_TOOLS_CONVERT_WORD_TO_TEXT_INPUT
  DOWNLOAD_FILE: CONVERSION_TOOLS_DOWNLOAD_FILE_INPUT
  UPLOAD_FILE: CONVERSION_TOOLS_UPLOAD_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CONVERSION_TOOLS".
 */
export type CONVERSION_TOOLS_TOOL_OUTPUTS = {
  CONVERT_AI_JPG_TO_JSON: CONVERSION_TOOLS_CONVERT_AI_JPG_TO_JSON_OUTPUT
  CONVERT_EXCEL_TO_CSV: CONVERSION_TOOLS_CONVERT_EXCEL_TO_CSV_OUTPUT
  CONVERT_EXCEL_TO_HTML: CONVERSION_TOOLS_CONVERT_EXCEL_TO_HTML_OUTPUT
  CONVERT_MARKDOWN_TO_HTML: CONVERSION_TOOLS_CONVERT_MARKDOWN_TO_HTML_OUTPUT
  CONVERT_OXPS_TO_PDF: CONVERSION_TOOLS_CONVERT_OXPS_TO_PDF_OUTPUT
  CONVERT_WEBSITE_TO_PDF: CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PDF_OUTPUT
  CONVERT_WEBSITE_TO_PNG: CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PNG_OUTPUT
  CONVERT_WORD_TO_TEXT: CONVERSION_TOOLS_CONVERT_WORD_TO_TEXT_OUTPUT
  DOWNLOAD_FILE: CONVERSION_TOOLS_DOWNLOAD_FILE_OUTPUT
  UPLOAD_FILE: CONVERSION_TOOLS_UPLOAD_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CONVERSION_TOOLS toolkit.
 */
export const CONVERSION_TOOLS = {
  slug: "conversion_tools",
  tools: {
    /**
     * Tool to convert jpg to structured json using ai. use after uploading the image or specifying its url.
     */
    CONVERT_AI_JPG_TO_JSON: "CONVERSION_TOOLS_CONVERT_AI_JPG_TO_JSON",
    /**
     * Tool to convert excel files to csv. use when you have an excel file (local upload or url) and need a csv output. use after uploading or providing file url.
     */
    CONVERT_EXCEL_TO_CSV: "CONVERSION_TOOLS_CONVERT_EXCEL_TO_CSV",
    /**
     * Tool to convert an excel file to html. use when you need an html table representation of a .xlsx file via upload or url.
     */
    CONVERT_EXCEL_TO_HTML: "CONVERSION_TOOLS_CONVERT_EXCEL_TO_HTML",
    /**
     * Tool to convert markdown to html. use after uploading the markdown file or specifying its url to generate html content.
     */
    CONVERT_MARKDOWN_TO_HTML: "CONVERSION_TOOLS_CONVERT_MARKDOWN_TO_HTML",
    /**
     * Tool to convert an oxps file to pdf. use when you have an oxps file either uploaded (file id) or via url and need a pdf output. provide only one of `file id` or `url`.
     */
    CONVERT_OXPS_TO_PDF: "CONVERSION_TOOLS_CONVERT_OXPS_TO_PDF",
    /**
     * Tool to convert a website url to pdf. use when you need a pdf snapshot of a web page; returns a task id to poll for completion.
     */
    CONVERT_WEBSITE_TO_PDF: "CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PDF",
    /**
     * Tool to convert a website url to a png image. use when you need a snapshot of an entire web page or specific viewport.
     */
    CONVERT_WEBSITE_TO_PNG: "CONVERSION_TOOLS_CONVERT_WEBSITE_TO_PNG",
    /**
     * Tool to convert word documents to plain text. use when you have a .doc or .docx file (binary or url) and need its plain text representation.
     */
    CONVERT_WORD_TO_TEXT: "CONVERSION_TOOLS_CONVERT_WORD_TO_TEXT",
    /**
     * Tool to download a conversion result file by its id. use after task completion to retrieve the output file.
     */
    DOWNLOAD_FILE: "CONVERSION_TOOLS_DOWNLOAD_FILE",
    /**
     * Tool to upload a file for conversion. use when you have a local file and need a file id for further conversion.
     */
    UPLOAD_FILE: "CONVERSION_TOOLS_UPLOAD_FILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CONVERSION_TOOLS".
 */
export type CONVERSION_TOOLS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CONVERSION_TOOLS".
 */
export type CONVERSION_TOOLS_TRIGGER_EVENTS = {}
