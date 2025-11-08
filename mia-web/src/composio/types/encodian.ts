// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ENCODIAN's ENCODIAN_BASE64_DECODE tool input.
 */
type ENCODIAN_BASE64_DECODE_INPUT = {
  /**
   * Base64 String
   * @description The Base64-encoded content to decode.
   */
  Base64String?: string;
  /**
   * File Name
   * @description Desired output filename including extension (e.g., 'output.pdf').
   */
  FileName?: string;
};

/**
 * Type of ENCODIAN's ENCODIAN_BASE64_DECODE tool output.
 */
type ENCODIAN_BASE64_DECODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description The decoded file content.
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
           * @description S3 URL of the downloaded file.
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
 * Type of ENCODIAN's ENCODIAN_BASE64_ENCODE tool input.
 */
type ENCODIAN_BASE64_ENCODE_INPUT = {
  /**
   * Value
   * @description The string to encode to Base64.
   */
  value?: string;
};

/**
 * Type of ENCODIAN's ENCODIAN_BASE64_ENCODE tool output.
 */
type ENCODIAN_BASE64_ENCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description Base64-encoded string result.
       */
      value: string;
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
 * Type of ENCODIAN's ENCODIAN_COMPARE_TEXT tool input.
 */
type ENCODIAN_COMPARE_TEXT_INPUT = {
  /**
   * Ignore Case
   * @description Whether to ignore case when comparing the text values.
   * @default false
   */
  ignoreCase: boolean;
  /**
   * Primary Text
   * @description The first text value to compare.
   */
  primaryText?: string;
  /**
   * Secondary Text
   * @description The second text value to compare.
   */
  secondaryText?: string;
};

/**
 * Type of ENCODIAN's ENCODIAN_COMPARE_TEXT tool output.
 */
type ENCODIAN_COMPARE_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error messages (if any).
       * @default null
       */
      errors: string[] | null;
      /**
       * Http Status Code
       * @description HTTP status code for the response.
       */
      httpStatusCode: number;
      /**
       * Http Status Message
       * @description HTTP status message for the response.
       */
      httpStatusMessage: string;
      /**
       * Operation Id
       * @description Unique ID assigned to the operation.
       */
      operationId: string;
      /**
       * Operation Status
       * @description Indicates whether the operation has completed, queued, or failed.
       */
      operationStatus: string;
      /**
       * Result
       * @description True if the two strings are equal; otherwise false.
       */
      result: boolean;
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
 * Type of ENCODIAN's ENCODIAN_GENERAL_HASH tool input.
 */
type ENCODIAN_GENERAL_HASH_INPUT = {
  /**
   * Case
   * @description Character casing for the output hash: Upper | Lower.
   * @default null
   * @enum {string|null}
   */
  Case: "Upper" | "Lower" | null;
  /**
   * Data
   * @description The input to hash. For DataType=FILE, this should be a base64-encoded file content.
   */
  Data?: string;
  /**
   * Data Type
   * @description Format of the input data: Text | HEX | BASE64 | FILE.
   * @enum {string}
   */
  DataType?: "Text" | "HEX" | "BASE64" | "FILE";
  /**
   * Digest Algorithm
   * @description Hash algorithm to use: SHA1 | SHA256 | SHA384 | SHA512 | MD5 | RIPEMD160.
   * @enum {string}
   */
  DigestAlgorithm?: "SHA1" | "SHA256" | "SHA384" | "SHA512" | "MD5" | "RIPEMD160";
  /**
   * Encoding Type
   * @description Character encoding used to process the data (e.g., 'utf-8').
   * @default null
   */
  EncodingType: string | null;
  /**
   * Output Type
   * @description Output format of the hash: Text | HEX | BASE64.
   * @enum {string}
   */
  OutputType?: "Text" | "HEX" | "BASE64";
};

/**
 * Type of ENCODIAN's ENCODIAN_GENERAL_HASH tool output.
 */
type ENCODIAN_GENERAL_HASH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error details if any occurred.
       * @default null
       */
      Errors: string[] | null;
      /**
       * Hash Code
       * @description The computed hash value.
       */
      HashCode: string;
      /**
       * Http Status Code
       * @description HTTP status code returned by the API.
       */
      HttpStatusCode: number;
      /**
       * Http Status Message
       * @description HTTP status message returned by the API.
       */
      HttpStatusMessage: string;
      /**
       * Operation Id
       * @description Unique identifier for the operation.
       */
      OperationId: string;
      /**
       * Operation Status
       * @description Status of the operation: Completed | Queued | Failed.
       */
      OperationStatus: string;
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
 * Type of ENCODIAN's ENCODIAN_GENERAL_UNZIP_FILE tool input.
 */
type ENCODIAN_GENERAL_UNZIP_FILE_INPUT = {
  /**
   * FileUploadable
   * @description The archive file to unzip (e.g., a .zip file).
   * @default null
   */
  file: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  } | null;
  /**
   * File Content Base64
   * @description Base64-encoded content of the archive. If provided, takes precedence over other sources.
   * @default null
   */
  file_content_base64: string | null;
  /**
   * Local Path
   * @description Absolute local file path strictly within the repository for the archive.
   * @default null
   */
  local_path: string | null;
  /**
   * Password
   * @description Password for encrypted archives, if required.
   * @default null
   */
  password: string | null;
  /**
   * Recursive
   * @description Whether to extract files from subfolders within the archive.
   * @default null
   */
  recursive: boolean | null;
};

/**
 * Type of ENCODIAN's ENCODIAN_GENERAL_UNZIP_FILE tool output.
 */
type ENCODIAN_GENERAL_UNZIP_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description Collection of extracted files.
       */
      documents: {
          /**
           * File Content
           * @description Base64-encoded content of the extracted file.
           */
          fileContent: string;
          /**
           * Filename
           * @description Name of the extracted file.
           */
          filename: string;
      }[];
      /**
       * Errors
       * @description Error messages if the operation failed.
       * @default null
       */
      errors: string[] | null;
      /**
       * Http Status Code
       * @description HTTP status code returned by the API.
       */
      httpStatusCode: number;
      /**
       * Http Status Message
       * @description HTTP status message returned by the API.
       */
      httpStatusMessage: string;
      /**
       * Operation Id
       * @description Unique ID for the operation.
       */
      operationId: string;
      /**
       * Operation Status
       * @description Status of the operation (e.g., completed, queued, or failed).
       */
      operationStatus: string;
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
 * Type of ENCODIAN's ENCODIAN_GET_FILE_PROPERTIES tool input.
 */
type ENCODIAN_GET_FILE_PROPERTIES_INPUT = {
  /**
   * Blob Name
   * @description Path or name of the blob/file to inspect.
   */
  BlobName?: string;
  /**
   * Container Name
   * @description Name of the container holding the file.
   */
  ContainerName?: string;
  /**
   * Include Metadata
   * @description Whether to include user-defined metadata in the response.
   * @default false
   */
  IncludeMetadata: boolean | null;
};

/**
 * Type of ENCODIAN's ENCODIAN_GET_FILE_PROPERTIES tool output.
 */
type ENCODIAN_GET_FILE_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Blob Name
       * @description Name or path of the blob.
       * @default null
       */
      BlobName: string | null;
      /**
       * Container Name
       * @description Name of the container containing the blob.
       * @default null
       */
      ContainerName: string | null;
      /**
       * Content Length
       * @description Size of the blob in bytes.
       * @default null
       */
      ContentLength: number | null;
      /**
       * Content Type
       * @description MIME type of the blob.
       * @default null
       */
      ContentType: string | null;
      /**
       * E Tag
       * @description HTTP ETag of the blob.
       * @default null
       */
      ETag: string | null;
      /**
       * Last Modified
       * Format: date-time
       * @description Date and time when the blob was last modified (UTC).
       * @default null
       */
      LastModified: string | null;
      /**
       * Metadata
       * @description User-defined metadata for the blob, if requested.
       * @default null
       */
      Metadata: {
          [key: string]: unknown;
      } | null;
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
 * Type of ENCODIAN's ENCODIAN_IMAGE_RESIZE tool input.
 */
type ENCODIAN_IMAGE_RESIZE_INPUT = {
  /**
   * FileUploadable
   * @description The source image file to resize.
   * @default null
   */
  FileContent: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  } | null;
  /**
   * File Content Base64
   * @description Base64-encoded image content. If provided, this will be used instead of FileContent/FilePath.
   * @default null
   */
  FileContentBase64: string | null;
  /**
   * File Name
   * @description Filename of the source image including extension, e.g., 'image.png'.
   */
  FileName?: string;
  /**
   * File Path
   * @description Absolute path to a local image file. If provided, this will be used instead of FileContent.
   * @default null
   */
  FilePath: string | null;
  /**
   * Image Height
   * @description Target height in pixels. Required when ImageResizeType is 'dimensions' unless MaintainAspectRatio is true.
   * @default null
   */
  ImageHeight: number | null;
  /**
   * Image Resize Type
   * @description Resize by Percentage or Specific dimensions.
   * @enum {string}
   */
  ImageResizeType?: "Percentage" | "Specific";
  /**
   * Image Resolution
   * @description Output DPI (dots per inch). Defaults to the source image resolution if omitted.
   * @default null
   */
  ImageResolution: number | null;
  /**
   * Image Width
   * @description Target width in pixels. Required when ImageResizeType is 'dimensions'.
   * @default null
   */
  ImageWidth: number | null;
  /**
   * Maintain Aspect Ratio
   * @description If true and ImageWidth is set, height is auto-determined; provided ImageHeight is ignored.
   * @default false
   */
  MaintainAspectRatio: boolean | null;
  /**
   * Resize Percentage
   * @description Percentage to scale the image. Required when ImageResizeType is 'ratio'.
   * @default null
   */
  ResizePercentage: number | null;
};

/**
 * Type of ENCODIAN's ENCODIAN_IMAGE_RESIZE tool output.
 */
type ENCODIAN_IMAGE_RESIZE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages if any occurred.
       * @default null
       */
      Errors: string[] | null;
      /**
       * File Content
       * @description Base64-encoded content of the resized image.
       */
      FileContent: string;
      /**
       * Filename
       * @description Filename of the resized image.
       */
      Filename: string;
      /**
       * Http Status Code
       * @description HTTP status code returned by the API.
       */
      HttpStatusCode: number;
      /**
       * Http Status Message
       * @description HTTP status message returned by the API.
       */
      HttpStatusMessage: string;
      /**
       * Operation Id
       * @description Unique ID assigned to this operation.
       */
      OperationId: string;
      /**
       * Operation Status
       * @description Operation status: Completed, Queued, or Failed.
       */
      OperationStatus: string;
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
 * Type of ENCODIAN's ENCODIAN_MOVE_FILE tool input.
 */
type ENCODIAN_MOVE_FILE_INPUT = {
  /**
   * Destination Blob
   * @description Path/name for the moved file in the destination container.
   */
  DestinationBlob?: string;
  /**
   * Destination Container
   * @description Name of the container where to move the file.
   */
  DestinationContainer?: string;
  /**
   * Overwrite
   * @description If true, overwrites the destination file if it already exists.
   * @default false
   */
  Overwrite: boolean | null;
  /**
   * Source Blob
   * @description Path of the source blob/file to move.
   */
  SourceBlob?: string;
  /**
   * Source Container
   * @description Name of the container holding the source file.
   */
  SourceContainer?: string;
};

/**
 * Type of ENCODIAN's ENCODIAN_MOVE_FILE tool output.
 */
type ENCODIAN_MOVE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Identifier for the move job, if provided by the service.
       * @default null
       */
      JobId: string | null;
      /**
       * Message
       * @description Optional message returned by the API.
       * @default null
       */
      Message: string | null;
      /**
       * Success
       * @description Indicates whether the move operation completed successfully.
       * @default null
       */
      Success: boolean | null;
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
 * Type of ENCODIAN's ENCODIAN_PDF_ADD_HEADER_FOOTER tool input.
 */
type ENCODIAN_PDF_ADD_HEADER_FOOTER_INPUT = {
  /**
   * Apply To
   * @description Pages to apply header/footer to. If 'Specific', use PageNumbers/IgnorePageNumbers.
   * @default null
   * @enum {string|null}
   */
  ApplyTo: "All" | "Odd" | "Even" | "Specific" | null;
  /**
   * FileUploadable
   * @description Binary content of the source PDF. Provide this if the file is not accessible by name.
   * @default null
   */
  FileContent: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  } | null;
  /**
   * File Content Base64
   * @description Base64-encoded PDF content. If provided, takes precedence over FileContent/FilePath.
   * @default null
   */
  FileContentBase64: string | null;
  /**
   * File Name
   * @description Name of the source PDF file, including extension.
   */
  FileName?: string;
  /**
   * File Path
   * @description Absolute local file path strictly within the repository.
   * @default null
   */
  FilePath: string | null;
  /**
   * Final Operation
   * @description If true, returns processed file content inline instead of only an operation ID.
   * @default null
   */
  FinalOperation: boolean | null;
  /**
   * Html Header Footer
   * @description HTML markup to embed as header or footer.
   */
  HtmlHeaderFooter?: string;
  /**
   * Html Header Footer Location
   * @description Where to apply the HTML: Header, Footer, or Both.
   * @enum {string}
   */
  HtmlHeaderFooterLocation?: "Header" | "Footer" | "Both";
  /**
   * Ignore Page Numbers
   * @description Specific page numbers to exclude when ApplyTo = 'Specific'.
   * @default null
   */
  IgnorePageNumbers: number[] | null;
  /**
   * Margin Bottom
   * @description Bottom margin in points.
   * @default null
   */
  MarginBottom: number | null;
  /**
   * Margin Left
   * @description Left margin in points.
   * @default null
   */
  MarginLeft: number | null;
  /**
   * Margin Right
   * @description Right margin in points.
   * @default null
   */
  MarginRight: number | null;
  /**
   * Margin Top
   * @description Top margin in points.
   * @default null
   */
  MarginTop: number | null;
  /**
   * Operation Id
   * @description Advanced: parent operation identifier for chaining.
   * @default null
   */
  OperationId: string | null;
  /**
   * Page Numbers
   * @description Specific page numbers to include when ApplyTo = 'Specific'.
   * @default null
   */
  PageNumbers: number[] | null;
  /**
   * Return File
   * @description When true (default), returns processed file content; when false, returns only OperationId.
   * @default null
   */
  ReturnFile: boolean | null;
  /**
   * Skip First Page
   * @description Whether to skip adding header/footer on the first page.
   * @default null
   */
  SkipFirstPage: boolean | null;
};

/**
 * Type of ENCODIAN's ENCODIAN_PDF_ADD_HEADER_FOOTER tool output.
 */
type ENCODIAN_PDF_ADD_HEADER_FOOTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages, if any.
       * @default null
       */
      Errors: string[] | null;
      /**
       * File Content
       * @description Base64-encoded processed PDF content when ReturnFile=true.
       * @default null
       */
      FileContent: string | null;
      /**
       * Http Status Code
       * @description HTTP status code returned by the API.
       */
      HttpStatusCode: number;
      /**
       * Http Status Message
       * @description HTTP status message returned by the API.
       */
      HttpStatusMessage: string;
      /**
       * Operation Id
       * @description Unique identifier for the operation.
       * @default null
       */
      OperationId: string | null;
      /**
       * Operation Status
       * @description Current status of the operation (e.g., Completed, Queued, Failed).
       */
      OperationStatus: string;
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
 * Type of ENCODIAN's ENCODIAN_PDF_GET_METADATA tool input.
 */
type ENCODIAN_PDF_GET_METADATA_INPUT = {
  /**
   * Filename
   * @description Original filename including extension.
   * @default null
   */
  Filename: string | null;
  /**
   * FileUploadable
   * @description PDF file to extract metadata from.
   * @default null
   */
  file: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  } | null;
  /**
   * File Path
   * @description Absolute path to a local PDF file. Use when a temporary S3 key is not available.
   * @default null
   */
  filePath: string | null;
};

/**
 * Type of ENCODIAN's ENCODIAN_PDF_GET_METADATA tool output.
 */
type ENCODIAN_PDF_GET_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author
       * @description Author metadata from the PDF.
       * @default null
       */
      Author: string | null;
      /**
       * Created Date
       * @description Creation date from PDF properties.
       * @default null
       */
      CreatedDate: string | null;
      /**
       * Creator
       * @description Creator metadata from the PDF.
       * @default null
       */
      Creator: string | null;
      /**
       * Custom Properties
       * @description All custom properties present within the PDF.
       * @default null
       */
      CustomProperties: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Errors
       * @description Error messages if an error occurs.
       * @default null
       */
      Errors: string[] | null;
      /**
       * File Size
       * @description File size as returned by the API.
       * @default null
       */
      FileSize: string | null;
      /**
       * File Size M Bs
       * @description Size of the PDF in megabytes.
       * @default null
       */
      FileSizeMBs: number | null;
      /**
       * Filename
       * @description The filename provided in the request.
       */
      Filename: string;
      /**
       * Has Text Layer
       * @description Indicates if the PDF has a text layer.
       * @default null
       */
      HasTextLayer: boolean | null;
      /**
       * Height
       * @description Document height in points.
       * @default null
       */
      Height: number | null;
      /**
       * Http Status Code
       * @description HTTP status code returned by the API.
       */
      HttpStatusCode: number;
      /**
       * Http Status Message
       * @description HTTP status message returned by the API.
       */
      HttpStatusMessage: string;
      /**
       * Is Encrypted
       * @description Indicates if the PDF is encrypted.
       * @default null
       */
      IsEncrypted: boolean | null;
      /**
       * Is Pdfa Compliant
       * @description PDF/A compliance flag.
       * @default null
       */
      IsPDFACompliant: boolean | null;
      /**
       * Is Pdfua Compliant
       * @description PDF/UA compliance flag.
       * @default null
       */
      IsPDFUACompliant: boolean | null;
      /**
       * Is Pdf A Compliant
       * @description PDF/A compliance flag (alt casing).
       * @default null
       */
      IsPdfACompliant: boolean | null;
      /**
       * Is Pdf Ua Compliant
       * @description PDF/UA compliance flag (alt casing).
       * @default null
       */
      IsPdfUACompliant: boolean | null;
      /**
       * Keywords
       * @description Keywords metadata from the PDF.
       * @default null
       */
      Keywords: string | null;
      /**
       * Modified Date
       * @description Last modified date from PDF properties.
       * @default null
       */
      ModifiedDate: string | null;
      /**
       * Number Of Pages
       * @description Number of pages in the PDF.
       */
      NumberOfPages: number;
      /**
       * Operation Id
       * @description Unique ID assigned to the operation.
       */
      OperationId: string;
      /**
       * Operation Status
       * @description Operation status: Completed, Queued, or Failed.
       */
      OperationStatus: string;
      /**
       * Orientation
       * @description Page orientation.
       * @default null
       */
      Orientation: string | null;
      /**
       * Pdf Format
       * @description PDF format version.
       * @default null
       */
      PDFFormat: string | null;
      /**
       * Pdf Format
       * @description PDF format version (alt casing).
       * @default null
       */
      PdfFormat: string | null;
      /**
       * Producer
       * @description Producer metadata from the PDF.
       * @default null
       */
      Producer: string | null;
      /**
       * Subject
       * @description Subject metadata from the PDF.
       * @default null
       */
      Subject: string | null;
      /**
       * Title
       * @description Title metadata from the PDF.
       * @default null
       */
      Title: string | null;
      /**
       * Width
       * @description Document width in points.
       * @default null
       */
      Width: number | null;
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
 * Type of ENCODIAN's ENCODIAN_PDF_WATERMARK tool input.
 */
type ENCODIAN_PDF_WATERMARK_INPUT = {
  /**
   * Apply As Image
   * @description Render watermark text as raster image.
   * @default null
   */
  ApplyAsImage: boolean | null;
  /**
   * Apply To
   * @description Which pages to apply watermark to.
   * @default null
   * @enum {string|null}
   */
  ApplyTo: "All" | "Odd" | "Even" | "Specific" | null;
  /**
   * Auto Scale
   * @description Automatically scale text to fit the watermark area.
   * @default null
   */
  AutoScale: boolean | null;
  /**
   * Auto Scale Text Height
   * @description Container height in pixels when auto-scaling.
   * @default null
   */
  AutoScaleTextHeight: number | null;
  /**
   * Auto Scale Text Width
   * @description Container width in pixels when auto-scaling.
   * @default null
   */
  AutoScaleTextWidth: number | null;
  /**
   * Encoding Type
   * @description Text encoding (default: Winansi).
   * @default null
   */
  EncodingType: string | null;
  /**
   * FileUploadable
   * @description The PDF file to watermark.
   * @default null
   */
  FileContent: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  } | null;
  /**
   * File Content Base64
   * @description Base64-encoded PDF content. If provided, this will be used instead of FileContent/FilePath.
   * @default null
   */
  FileContentBase64: string | null;
  /**
   * File Path
   * @description Absolute path to a local PDF file (strictly within the repository).
   * @default null
   */
  FilePath: string | null;
  /**
   * Filename
   * @description Filename of the source PDF including extension.
   */
  Filename?: string;
  /**
   * Font
   * @description Font for the text watermark (default: Helvetica).
   * @default null
   */
  Font: string | null;
  /**
   * Horizontal Alignment
   * @description Horizontal alignment of watermark on the page.
   * @default null
   * @enum {string|null}
   */
  HorizontalAlignment: "Left" | "Center" | "Right" | null;
  /**
   * Ignore Page Numbers
   * @description Pages to exclude when applying to Specific pages.
   * @default null
   */
  IgnorePageNumbers: number[] | null;
  /**
   * Opacity
   * @description Opacity of watermark text (0.0 transparent to 1.0 opaque).
   * @default null
   */
  Opacity: number | null;
  /**
   * Operation Id
   * @description Parent operation ID for advanced traceability.
   * @default null
   */
  OperationId: string | null;
  /**
   * Page Numbers
   * @description Pages to include when applying to Specific pages.
   * @default null
   */
  PageNumbers: number[] | null;
  /**
   * Return File
   * @description Return file content inline if true, else output OperationId only.
   * @default null
   */
  ReturnFile: boolean | null;
  /**
   * Rotation Angle
   * @description Rotation angle of watermark in degrees.
   * @default null
   */
  RotationAngle: number | null;
  /**
   * Skip First Page
   * @description If true, do not watermark the first page.
   * @default null
   */
  SkipFirstPage: boolean | null;
  /**
   * Text
   * @description Text to embed as watermark.
   */
  Text?: string;
  /**
   * Text Alignment
   * @description Alignment of text within the watermark area.
   * @default null
   * @enum {string|null}
   */
  TextAlignment: "Left" | "Center" | "Right" | "Justify" | null;
  /**
   * Text Colour
   * @description Watermark text color as HTML code.
   * @default null
   */
  TextColour: string | null;
  /**
   * Text Layer
   * @description Add watermark on bottom layer if true.
   * @default null
   */
  TextLayer: boolean | null;
  /**
   * Text Size
   * @description Font size in points (default: 34).
   * @default null
   */
  TextSize: number | null;
  /**
   * Text Wrap
   * @description Whether to wrap watermark text.
   * @default null
   */
  TextWrap: boolean | null;
  /**
   * Text Wrap Row Width
   * @description Row width for wrapping in characters.
   * @default null
   */
  TextWrapRowWidth: number | null;
  /**
   * Vertical Alignment
   * @description Vertical alignment of watermark on the page.
   * @default null
   * @enum {string|null}
   */
  VerticalAlignment: "Top" | "Middle" | "Bottom" | null;
  /**
   * Watermark Id
   * @description Override the watermark identifier.
   * @default null
   */
  WatermarkId: string | null;
  /**
   * X Indent
   * @description Horizontal indent in pixels from left, overrides HorizontalAlignment.
   * @default null
   */
  XIndent: number | null;
  /**
   * Y Indent
   * @description Vertical indent in pixels from bottom, overrides VerticalAlignment.
   * @default null
   */
  YIndent: number | null;
};

/**
 * Type of ENCODIAN's ENCODIAN_PDF_WATERMARK tool output.
 */
type ENCODIAN_PDF_WATERMARK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error messages if the operation failed.
       * @default null
       */
      Errors: string[] | null;
      /**
       * File Content
       * @description Base64-encoded content of the watermarked PDF if ReturnFile=true.
       * @default null
       */
      FileContent: string | null;
      /**
       * Filename
       * @description Filename of the watermarked PDF.
       */
      Filename: string;
      /**
       * Http Status Code
       * @description HTTP status code returned by the API.
       */
      HttpStatusCode: number;
      /**
       * Http Status Message
       * @description HTTP status message returned by the API.
       */
      HttpStatusMessage: string;
      /**
       * Operation Id
       * @description Unique ID for this operation.
       */
      OperationId: string;
      /**
       * Operation Status
       * @description Final status of the operation.
       * @enum {string}
       */
      OperationStatus: "Completed" | "Queued" | "Failed";
      /**
       * Watermark Id
       * @description Identifier of the applied watermark.
       * @default null
       */
      WatermarkId: string | null;
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
 * Type of ENCODIAN's ENCODIAN_VALIDATE_EMAIL_ADDRESS tool input.
 */
type ENCODIAN_VALIDATE_EMAIL_ADDRESS_INPUT = {
  /**
   * Email Address
   * Format: email
   * @description The email address to validate
   */
  emailAddress?: string;
  /**
   * Regex
   * @description The regular expression pattern to validate the email address
   */
  regex?: string;
};

/**
 * Type of ENCODIAN's ENCODIAN_VALIDATE_EMAIL_ADDRESS tool output.
 */
type ENCODIAN_VALIDATE_EMAIL_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error details if the operation failed
       * @default null
       */
      errors: unknown;
      /**
       * Http Status Code
       * @description HTTP status code returned by the API
       * @default null
       */
      httpStatusCode: number | null;
      /**
       * Http Status Message
       * @description HTTP status message returned by the API
       * @default null
       */
      httpStatusMessage: string | null;
      /**
       * Operation Id
       * @description Unique ID assigned to this operation
       * @default null
       */
      operationId: string | null;
      /**
       * Operation Status
       * @description High-level status of the operation
       * @default null
       */
      operationStatus: string | null;
      /**
       * Result
       * @description Indicates whether the email address matched the regex pattern
       */
      result: boolean;
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
 * Type of ENCODIAN's ENCODIAN_VALIDATE_URL_AVAILABILITY tool input.
 */
type ENCODIAN_VALIDATE_URL_AVAILABILITY_INPUT = {
  /**
   * Url
   * @description The URL to verify. Include https:// or http:// in the request.
   */
  url?: string;
  /**
   * Validate Url
   * @description Whether to validate URL syntax before checking availability.
   * @default null
   */
  validateURL: boolean | null;
};

/**
 * Type of ENCODIAN's ENCODIAN_VALIDATE_URL_AVAILABILITY tool output.
 */
type ENCODIAN_VALIDATE_URL_AVAILABILITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error messages if an error occurs.
       * @default null
       */
      errors: string[] | null;
      /**
       * Http Status Code
       * @description HTTP status code for the response.
       */
      httpStatusCode: number;
      /**
       * Http Status Message
       * @description HTTP status message for the response.
       */
      httpStatusMessage: string;
      /**
       * Operation Id
       * @description Unique ID assigned to this operation.
       */
      operationId: string;
      /**
       * Operation Status
       * @description Indicates whether the operation completed, was queued, or failed.
       */
      operationStatus: string;
      /**
       * Result
       * @description True if the URL is available; otherwise false.
       */
      result: boolean;
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
 * Type of ENCODIAN's ENCODIAN_WRITE_RANGE tool input.
 */
type ENCODIAN_WRITE_RANGE_INPUT = {
  /**
   * FileUploadable
   * @description The Excel (.xlsx) file to update (S3-backed FileUploadable).
   * @default null
   */
  file: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  } | null;
  /**
   * File Path
   * @description Absolute path to a local Excel file. Use when a temporary S3 key is not available.
   * @default null
   */
  filePath: string | null;
  /**
   * Output Filename
   * @description Filename for the output Excel file.
   * @default null
   */
  outputFilename: string | null;
  /**
   * Range
   * @description Cell range to write values to (e.g., 'A1:B2').
   */
  range?: string;
  /**
   * Values
   * @description 2D array of values to write into the specified cell range.
   */
  values?: (string | number)[][];
  /**
   * Worksheet Name
   * @description Name of the worksheet to write to. If omitted, the first worksheet is used.
   * @default null
   */
  worksheetName: string | null;
};

/**
 * Type of ENCODIAN's ENCODIAN_WRITE_RANGE tool output.
 */
type ENCODIAN_WRITE_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages if any occurred.
       * @default null
       */
      Errors: string[] | null;
      /**
       * File Content
       * @description Base64-encoded content of the updated Excel file.
       */
      FileContent: string;
      /**
       * Filename
       * @description Name of the updated Excel file.
       */
      Filename: string;
      /**
       * Http Status Code
       * @description HTTP status code of the operation response.
       */
      HttpStatusCode: number;
      /**
       * Http Status Message
       * @description HTTP status message of the operation response.
       */
      HttpStatusMessage: string;
      /**
       * Operation Id
       * @description Unique ID for the operation.
       */
      OperationId: string;
      /**
       * Operation Status
       * @description Status of the operation (e.g., Completed/Failed).
       */
      OperationStatus: string;
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
 * Type map of all available tool input types for toolkit "ENCODIAN".
 */
export type ENCODIAN_TOOL_INPUTS = {
  BASE64_DECODE: ENCODIAN_BASE64_DECODE_INPUT
  BASE64_ENCODE: ENCODIAN_BASE64_ENCODE_INPUT
  COMPARE_TEXT: ENCODIAN_COMPARE_TEXT_INPUT
  GENERAL_HASH: ENCODIAN_GENERAL_HASH_INPUT
  GENERAL_UNZIP_FILE: ENCODIAN_GENERAL_UNZIP_FILE_INPUT
  GET_FILE_PROPERTIES: ENCODIAN_GET_FILE_PROPERTIES_INPUT
  IMAGE_RESIZE: ENCODIAN_IMAGE_RESIZE_INPUT
  MOVE_FILE: ENCODIAN_MOVE_FILE_INPUT
  PDF_ADD_HEADER_FOOTER: ENCODIAN_PDF_ADD_HEADER_FOOTER_INPUT
  PDF_GET_METADATA: ENCODIAN_PDF_GET_METADATA_INPUT
  PDF_WATERMARK: ENCODIAN_PDF_WATERMARK_INPUT
  VALIDATE_EMAIL_ADDRESS: ENCODIAN_VALIDATE_EMAIL_ADDRESS_INPUT
  VALIDATE_URL_AVAILABILITY: ENCODIAN_VALIDATE_URL_AVAILABILITY_INPUT
  WRITE_RANGE: ENCODIAN_WRITE_RANGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ENCODIAN".
 */
export type ENCODIAN_TOOL_OUTPUTS = {
  BASE64_DECODE: ENCODIAN_BASE64_DECODE_OUTPUT
  BASE64_ENCODE: ENCODIAN_BASE64_ENCODE_OUTPUT
  COMPARE_TEXT: ENCODIAN_COMPARE_TEXT_OUTPUT
  GENERAL_HASH: ENCODIAN_GENERAL_HASH_OUTPUT
  GENERAL_UNZIP_FILE: ENCODIAN_GENERAL_UNZIP_FILE_OUTPUT
  GET_FILE_PROPERTIES: ENCODIAN_GET_FILE_PROPERTIES_OUTPUT
  IMAGE_RESIZE: ENCODIAN_IMAGE_RESIZE_OUTPUT
  MOVE_FILE: ENCODIAN_MOVE_FILE_OUTPUT
  PDF_ADD_HEADER_FOOTER: ENCODIAN_PDF_ADD_HEADER_FOOTER_OUTPUT
  PDF_GET_METADATA: ENCODIAN_PDF_GET_METADATA_OUTPUT
  PDF_WATERMARK: ENCODIAN_PDF_WATERMARK_OUTPUT
  VALIDATE_EMAIL_ADDRESS: ENCODIAN_VALIDATE_EMAIL_ADDRESS_OUTPUT
  VALIDATE_URL_AVAILABILITY: ENCODIAN_VALIDATE_URL_AVAILABILITY_OUTPUT
  WRITE_RANGE: ENCODIAN_WRITE_RANGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ENCODIAN toolkit.
 */
export const ENCODIAN = {
  slug: "encodian",
  tools: {
    /**
     * Tool to decode a Base64 string to a file. Use when you need to extract binary content (e.g., PDF, image) from Base64 data.
     */
    BASE64_DECODE: "ENCODIAN_BASE64_DECODE",
    /**
     * Tool to encode a string to Base64. Use when you need to convert text into Base64 representation for use in other operations.
     */
    BASE64_ENCODE: "ENCODIAN_BASE64_ENCODE",
    /**
     * Tool to compare two text strings and determine if they match. Use when you have two strings and need to verify if they are equal.
     */
    COMPARE_TEXT: "ENCODIAN_COMPARE_TEXT",
    /**
     * Tool to compute a cryptographic hash (MD5, SHA256, etc.) of text or file data. Use when you need to verify integrity or generate digests.
     */
    GENERAL_HASH: "ENCODIAN_GENERAL_HASH",
    /**
     * Tool to extract files from an archive. Use when you need to unzip a package and retrieve its contents.
     */
    GENERAL_UNZIP_FILE: "ENCODIAN_GENERAL_UNZIP_FILE",
    /**
     * Tool to retrieve properties of a file. Attempts multiple Encodian Filer endpoints and fallbacks.
     */
    GET_FILE_PROPERTIES: "ENCODIAN_GET_FILE_PROPERTIES",
    /**
     * Tool to resize an image by percentage or dimensions. Use when you need to scale or reshape an image with optional aspect-ratio enforcement.
     */
    IMAGE_RESIZE: "ENCODIAN_IMAGE_RESIZE",
    /**
     * Tool to move a file between containers. Use when you need to relocate a blob within your storage without manually copying then deleting.
     */
    MOVE_FILE: "ENCODIAN_MOVE_FILE",
    /**
     * Tool to add HTML header and footer to a PDF. Use when you need to embed consistent headers or footers across pages with margin and range options.
     */
    PDF_ADD_HEADER_FOOTER: "ENCODIAN_PDF_ADD_HEADER_FOOTER",
    /**
     * Tool to extract PDF metadata and properties. Use when you need to retrieve details like page count, author, file size, and custom attributes.
     */
    PDF_GET_METADATA: "ENCODIAN_PDF_GET_METADATA",
    /**
     * Tool to apply a text watermark to a PDF. Use when you need to annotate PDF pages with custom labels or marks; supports page selection, positioning, opacity, and rotation.
     */
    PDF_WATERMARK: "ENCODIAN_PDF_WATERMARK",
    /**
     * Tool to validate an email address. Use when checking email formats against a custom regex before processing user inputs.
     */
    VALIDATE_EMAIL_ADDRESS: "ENCODIAN_VALIDATE_EMAIL_ADDRESS",
    /**
     * Tool to validate the availability of a specified URL. Use when needing to confirm if a web address is reachable before processing.
     */
    VALIDATE_URL_AVAILABILITY: "ENCODIAN_VALIDATE_URL_AVAILABILITY",
    /**
     * Tool to write values to a cell range in an Excel worksheet. Use when you need to programmatically update worksheet data by specifying a range and a 2D array of values.
     */
    WRITE_RANGE: "ENCODIAN_WRITE_RANGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ENCODIAN".
 */
export type ENCODIAN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ENCODIAN".
 */
export type ENCODIAN_TRIGGER_EVENTS = {}
