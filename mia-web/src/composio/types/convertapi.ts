// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CONVERTAPI's CONVERTAPI_ASYNC_CONVERT tool input.
 */
type CONVERTAPI_ASYNC_CONVERT_INPUT = {
  /**
   * File
   * Format: uri
   * @description URL of the file to be converted.
   */
  File?: unknown;
  /**
   * Job Id
   * @description Optional self-generated 32-character lowercase alphanumeric job identifier.
   * @default null
   */
  JobId: unknown;
  /**
   * Web Hook
   * Format: uri
   * @description Optional callback URL to receive a POST when conversion completes.
   * @default null
   */
  WebHook: unknown;
  /**
   * Destination Format
   * @description Destination file format (path parameter), e.g., 'pdf'.
   */
  destination_format?: string;
  /**
   * Source Format
   * @description Source file format (path parameter), e.g., 'docx'.
   */
  source_format?: string;
};

/**
 * Type of CONVERTAPI's CONVERTAPI_ASYNC_CONVERT tool output.
 */
type CONVERTAPI_ASYNC_CONVERT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Unique identifier for the conversion job.
       */
      JobId: string;
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
 * Type of CONVERTAPI's CONVERTAPI_ASYNC_DELETE_JOB tool input.
 */
type CONVERTAPI_ASYNC_DELETE_JOB_INPUT = {
  /**
   * Job Id
   * @description 32-character lowercase alphanumeric JobId returned by an async conversion request.
   */
  JobId?: string;
};

/**
 * Type of CONVERTAPI's CONVERTAPI_ASYNC_DELETE_JOB tool output.
 */
type CONVERTAPI_ASYNC_DELETE_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_DELETE_UPLOADED_FILE tool input.
 */
type CONVERTAPI_CONVERT_DELETE_UPLOADED_FILE_INPUT = {
  /**
   * File Id
   * @description ID of the uploaded file to delete.
   */
  FileId?: string;
};

/**
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_DELETE_UPLOADED_FILE tool output.
 */
type CONVERTAPI_CONVERT_DELETE_UPLOADED_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_GET_SUPPORTED_INPUT_FORMATS_FOR_OUTPUT tool input.
 */
type CONVERTAPI_CONVERT_GET_SUPPORTED_INPUT_FORMATS_FOR_OUTPUT_INPUT = {
  /**
   * Output Format
   * @description Desired output file format (path parameter), e.g., 'pdf'.
   */
  output_format?: string;
};

/**
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_GET_SUPPORTED_INPUT_FORMATS_FOR_OUTPUT tool output.
 */
type CONVERTAPI_CONVERT_GET_SUPPORTED_INPUT_FORMATS_FOR_OUTPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description List of input formats supported for the specified output format.
       */
      Result: string[];
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
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_PDF_TO_DOCX tool input.
 */
type CONVERTAPI_CONVERT_PDF_TO_DOCX_INPUT = {
  /**
   * File
   * Format: binary
   * @description PDF file to convert. Provide raw binary or a publicly accessible URL.
   */
  File?: string | null;
  /**
   * File Name
   * @description Desired output DOCX file name. Required when sending raw file content.
   * @default null
   */
  FileName: string | null;
  /**
   * Ocr Engine
   * @description OCR engine to use: 'native' or 'tesseract'.
   * @default native
   * @enum {string|null}
   */
  OcrEngine: "native" | "tesseract" | null;
  /**
   * Ocr Language
   * @description OCR language code or 'auto' for automatic detection.
   * @default auto
   * @enum {string|null}
   */
  OcrLanguage: "auto" | "ar" | "ca" | "zh" | "da" | "nl" | "en" | "fi" | "fr" | "de" | "gr" | "ko" | "it" | "ja" | "no" | "pl" | "pt" | "ro" | "ru" | "sl" | "es" | "sv" | "tr" | "ua" | "th" | null;
  /**
   * Ocr Mode
   * @description OCR behavior: 'auto', 'force', or 'never'.
   * @default auto
   * @enum {string|null}
   */
  OcrMode: "auto" | "force" | "never" | null;
  /**
   * Page Range
   * @description Page range to convert, e.g., '1-10' or '1,3,5'.
   * @default 1-2000
   */
  PageRange: string | null;
  /**
   * Password
   * @description Password to open protected PDF documents.
   * @default null
   */
  Password: string | null;
  /**
   * Store File
   * @description Store converted file on server and return a download URL.
   * @default false
   */
  StoreFile: boolean | null;
  /**
   * Timeout
   * @description Conversion timeout in seconds.
   * @default 600
   */
  Timeout: number | null;
  /**
   * Wysiwyg
   * @description Persist exact formatting using text boxes.
   * @default false
   */
  Wysiwyg: boolean | null;
};

/**
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_PDF_TO_DOCX tool output.
 */
type CONVERTAPI_CONVERT_PDF_TO_DOCX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversion Cost
       * @description Credits deducted for this conversion.
       */
      ConversionCost: number;
      /**
       * Files
       * @description List of converted file metadata.
       */
      Files: {
          /**
           * File Data
           * @description Base64-encoded file data if returned inline.
           * @default null
           */
          FileData: string | null;
          /**
           * File Id
           * @description Unique ID of the converted file.
           * @default null
           */
          FileId: string | null;
          /**
           * File Size
           * @description Size of the converted file in bytes.
           */
          FileSize: number;
          /**
           * Url
           * @description Download URL of the converted file.
           * @default null
           */
          Url: string | null;
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
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_PDF_TO_JPG_AND_STORE tool input.
 */
type CONVERTAPI_CONVERT_PDF_TO_JPG_AND_STORE_INPUT = {
  /**
   * File
   * Format: binary
   * @description PDF data as raw bytes or a publicly accessible URL.
   */
  File?: string | null;
  /**
   * File Name
   * @description Desired output JPG file name when sending raw file bytes. Required if File is bytes. Example: 'page.jpg'
   * @default null
   */
  FileName: string | null;
  /**
   * Store File
   * @description Must be set to true to store converted JPG files on server for workflow processing.
   * @default true
   */
  StoreFile: boolean | null;
};

/**
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_PDF_TO_JPG_AND_STORE tool output.
 */
type CONVERTAPI_CONVERT_PDF_TO_JPG_AND_STORE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversion Cost
       * @description Credits deducted for this conversion.
       */
      ConversionCost: number;
      /**
       * Files
       * @description List of converted JPG file metadata stored on server.
       */
      Files: {
          /**
           * File Id
           * @description Unique ID of the converted JPG file on ConvertAPI server.
           */
          FileId: string;
          /**
           * File Name
           * @description Name of the converted JPG file.
           */
          FileName: string;
          /**
           * File Size
           * @description Size of the converted JPG file in bytes.
           */
          FileSize: number;
          /**
           * Url
           * @description Download URL of the converted JPG file.
           */
          Url: string;
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
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_UPLOAD_FILE_FROM_URL tool input.
 */
type CONVERTAPI_CONVERT_UPLOAD_FILE_FROM_URL_INPUT = {
  /**
   * File Id
   * @description Custom identifier for the uploaded file.
   * @default null
   */
  FileId: string | null;
  /**
   * File Name
   * @description Name for the uploaded file. Required if 'content-disposition' header is not set.
   * @default null
   */
  FileName: string | null;
  /**
   * Header Name
   * @description HTTP header name to send when fetching the remote URL. Must be paired with HeaderValue.
   * @default null
   */
  HeaderName: string | null;
  /**
   * Header Value
   * @description HTTP header value to send when fetching the remote URL. Must be paired with HeaderName.
   * @default null
   */
  HeaderValue: string | null;
  /**
   * Url
   * Format: uri
   * @description Remote file URL to fetch and upload.
   */
  Url?: unknown;
};

/**
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_UPLOAD_FILE_FROM_URL tool output.
 */
type CONVERTAPI_CONVERT_UPLOAD_FILE_FROM_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Ext
       * @description Extension of the uploaded file.
       */
      FileExt: string;
      /**
       * File Id
       * @description Unique identifier assigned to the uploaded file.
       */
      FileId: string;
      /**
       * File Name
       * @description Name assigned to the uploaded file.
       */
      FileName: string;
      /**
       * File Size
       * @description Size of the uploaded file in bytes.
       */
      FileSize: number;
      /**
       * Url
       * @description URL to access the uploaded file.
       */
      Url: string;
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
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_UPLOAD_FILE_MULTIPART tool input.
 */
type CONVERTAPI_CONVERT_UPLOAD_FILE_MULTIPART_INPUT = {
  /**
   * Content Type
   * @description Optional MIME type of the file (e.g., "application/pdf"); if omitted, guessed from the file extension.
   * @default null
   */
  ContentType: string | null;
  /**
   * File
   * Format: binary
   * @description Local path to the file to upload.
   */
  File?: unknown;
  /**
   * File Name
   * @description Optional override for the name of the uploaded file; if omitted, derived from the file path.
   * @default null
   */
  FileName: string | null;
};

/**
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_UPLOAD_FILE_MULTIPART tool output.
 */
type CONVERTAPI_CONVERT_UPLOAD_FILE_MULTIPART_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Ext
       * @description File extension of the uploaded file.
       */
      FileExt: string;
      /**
       * File Id
       * @description ID of the uploaded file.
       */
      FileId: string;
      /**
       * File Name
       * @description Filename of the uploaded file.
       */
      FileName: string;
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
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_UPLOAD_FILE_OCTET_STREAM tool input.
 */
type CONVERTAPI_CONVERT_UPLOAD_FILE_OCTET_STREAM_INPUT = {
  /**
   * File
   * Format: binary
   * @description Raw file bytes to upload as octet-stream.
   */
  File?: string;
  /**
   * File Name
   * @description Name of the file, will be set in the Content-Disposition header.
   */
  FileName?: string;
};

/**
 * Type of CONVERTAPI's CONVERTAPI_CONVERT_UPLOAD_FILE_OCTET_STREAM tool output.
 */
type CONVERTAPI_CONVERT_UPLOAD_FILE_OCTET_STREAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Ext
       * @description File extension of the uploaded file.
       */
      FileExt: string;
      /**
       * File Id
       * @description ID of the uploaded file.
       */
      FileId: string;
      /**
       * File Name
       * @description Name of the uploaded file.
       */
      FileName: string;
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
 * Type of CONVERTAPI's CONVERTAPI_DOWNLOAD_UPLOADED_FILE tool input.
 */
type CONVERTAPI_DOWNLOAD_UPLOADED_FILE_INPUT = {
  /**
   * File Id
   * @description ID of the uploaded file to download. Must match the FileId returned by the upload endpoint.
   */
  FileId?: string;
};

/**
 * Type of CONVERTAPI's CONVERTAPI_DOWNLOAD_UPLOADED_FILE tool output.
 */
type CONVERTAPI_DOWNLOAD_UPLOADED_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Data
       * Format: binary
       * @description Raw binary content of the downloaded file.
       */
      FileData: string;
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
 * Type of CONVERTAPI's CONVERTAPI_GET_SUPPORTED_OUTPUT_FORMATS_FOR_INPUT tool input.
 */
type CONVERTAPI_GET_SUPPORTED_OUTPUT_FORMATS_FOR_INPUT_INPUT = {
  /**
   * Source Format
   * @description Source file format (path parameter), e.g., 'pdf'.
   */
  source_format?: string;
};

/**
 * Type of CONVERTAPI's CONVERTAPI_GET_SUPPORTED_OUTPUT_FORMATS_FOR_INPUT tool output.
 */
type CONVERTAPI_GET_SUPPORTED_OUTPUT_FORMATS_FOR_INPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Formats
       * @description Supported output formats for the given input format.
       */
      Formats: string[];
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
 * Type map of all available tool input types for toolkit "CONVERTAPI".
 */
export type CONVERTAPI_TOOL_INPUTS = {
  ASYNC_CONVERT: CONVERTAPI_ASYNC_CONVERT_INPUT
  ASYNC_DELETE_JOB: CONVERTAPI_ASYNC_DELETE_JOB_INPUT
  CONVERT_DELETE_UPLOADED_FILE: CONVERTAPI_CONVERT_DELETE_UPLOADED_FILE_INPUT
  CONVERT_GET_SUPPORTED_INPUT_FORMATS_FOR_OUTPUT: CONVERTAPI_CONVERT_GET_SUPPORTED_INPUT_FORMATS_FOR_OUTPUT_INPUT
  CONVERT_PDF_TO_DOCX: CONVERTAPI_CONVERT_PDF_TO_DOCX_INPUT
  CONVERT_PDF_TO_JPG_AND_STORE: CONVERTAPI_CONVERT_PDF_TO_JPG_AND_STORE_INPUT
  CONVERT_UPLOAD_FILE_FROM_URL: CONVERTAPI_CONVERT_UPLOAD_FILE_FROM_URL_INPUT
  CONVERT_UPLOAD_FILE_MULTIPART: CONVERTAPI_CONVERT_UPLOAD_FILE_MULTIPART_INPUT
  CONVERT_UPLOAD_FILE_OCTET_STREAM: CONVERTAPI_CONVERT_UPLOAD_FILE_OCTET_STREAM_INPUT
  DOWNLOAD_UPLOADED_FILE: CONVERTAPI_DOWNLOAD_UPLOADED_FILE_INPUT
  GET_SUPPORTED_OUTPUT_FORMATS_FOR_INPUT: CONVERTAPI_GET_SUPPORTED_OUTPUT_FORMATS_FOR_INPUT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CONVERTAPI".
 */
export type CONVERTAPI_TOOL_OUTPUTS = {
  ASYNC_CONVERT: CONVERTAPI_ASYNC_CONVERT_OUTPUT
  ASYNC_DELETE_JOB: CONVERTAPI_ASYNC_DELETE_JOB_OUTPUT
  CONVERT_DELETE_UPLOADED_FILE: CONVERTAPI_CONVERT_DELETE_UPLOADED_FILE_OUTPUT
  CONVERT_GET_SUPPORTED_INPUT_FORMATS_FOR_OUTPUT: CONVERTAPI_CONVERT_GET_SUPPORTED_INPUT_FORMATS_FOR_OUTPUT_OUTPUT
  CONVERT_PDF_TO_DOCX: CONVERTAPI_CONVERT_PDF_TO_DOCX_OUTPUT
  CONVERT_PDF_TO_JPG_AND_STORE: CONVERTAPI_CONVERT_PDF_TO_JPG_AND_STORE_OUTPUT
  CONVERT_UPLOAD_FILE_FROM_URL: CONVERTAPI_CONVERT_UPLOAD_FILE_FROM_URL_OUTPUT
  CONVERT_UPLOAD_FILE_MULTIPART: CONVERTAPI_CONVERT_UPLOAD_FILE_MULTIPART_OUTPUT
  CONVERT_UPLOAD_FILE_OCTET_STREAM: CONVERTAPI_CONVERT_UPLOAD_FILE_OCTET_STREAM_OUTPUT
  DOWNLOAD_UPLOADED_FILE: CONVERTAPI_DOWNLOAD_UPLOADED_FILE_OUTPUT
  GET_SUPPORTED_OUTPUT_FORMATS_FOR_INPUT: CONVERTAPI_GET_SUPPORTED_OUTPUT_FORMATS_FOR_INPUT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CONVERTAPI toolkit.
 */
export const CONVERTAPI = {
  slug: "convertapi",
  tools: {
    /**
     * Tool to perform an asynchronous file conversion. use when converting large or long-running files to avoid client timeouts.
     */
    ASYNC_CONVERT: "CONVERTAPI_ASYNC_CONVERT",
    /**
     * Tool to delete a previously created asynchronous conversion job. use when the job is no longer required to free server resources.
     */
    ASYNC_DELETE_JOB: "CONVERTAPI_ASYNC_DELETE_JOB",
    /**
     * Tool to delete a previously uploaded file. use when the file is no longer needed and should be removed from temporary storage.
     */
    CONVERT_DELETE_UPLOADED_FILE: "CONVERTAPI_CONVERT_DELETE_UPLOADED_FILE",
    /**
     * Tool to list all input formats that can convert to a specified output format. use after deciding the target output format.
     */
    CONVERT_GET_SUPPORTED_INPUT_FORMATS_FOR_OUTPUT: "CONVERTAPI_CONVERT_GET_SUPPORTED_INPUT_FORMATS_FOR_OUTPUT",
    /**
     * Tool to convert pdf files to docx format. use when you need editable word documents from pdfs. provide pdf content or url and receive docx file metadata and download links.
     */
    CONVERT_PDF_TO_DOCX: "CONVERTAPI_CONVERT_PDF_TO_DOCX",
    /**
     * Tool to convert a pdf to jpg and store the result on the server. use when individual jpg pages are needed for further workflow steps.
     */
    CONVERT_PDF_TO_JPG_AND_STORE: "CONVERTAPI_CONVERT_PDF_TO_JPG_AND_STORE",
    /**
     * Tool to upload a file directly from a remote url. use when you need to import files hosted on a remote server without downloading locally.
     */
    CONVERT_UPLOAD_FILE_FROM_URL: "CONVERTAPI_CONVERT_UPLOAD_FILE_FROM_URL",
    /**
     * Tool to upload a file via multipart/form-data. use when you need to store a file on convertapi's servers (up to 3 hours) and obtain a fileid for subsequent conversions.
     */
    CONVERT_UPLOAD_FILE_MULTIPART: "CONVERTAPI_CONVERT_UPLOAD_FILE_MULTIPART",
    /**
     * Tool to upload a file with application/octet-stream. use when you need to upload raw file data efficiently for reuse in multiple conversions.
     */
    CONVERT_UPLOAD_FILE_OCTET_STREAM: "CONVERTAPI_CONVERT_UPLOAD_FILE_OCTET_STREAM",
    /**
     * Tool to download a previously uploaded file by its fileid. use when you need to retrieve the original file data stored temporarily on the server (expires after 3 hours). example prompt: "download uploaded file with id 25811safe8e61dd3f51ef00ee5f58b92"
     */
    DOWNLOAD_UPLOADED_FILE: "CONVERTAPI_DOWNLOAD_UPLOADED_FILE",
    /**
     * Tool to list all output formats a given input format can be converted into. use when you need to dynamically retrieve conversion options for a specific input format.
     */
    GET_SUPPORTED_OUTPUT_FORMATS_FOR_INPUT: "CONVERTAPI_GET_SUPPORTED_OUTPUT_FORMATS_FOR_INPUT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CONVERTAPI".
 */
export type CONVERTAPI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CONVERTAPI".
 */
export type CONVERTAPI_TRIGGER_EVENTS = {}
