// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of API2PDF's API2PDF_ADD_HEADER_FOOTER tool input.
 */
type API2PDF_ADD_HEADER_FOOTER_INPUT = {
  /**
   * File Name
   * @description Desired filename for the generated PDF (e.g., 'report.pdf'). If omitted, the API assigns a random name.
   * @default null
   */
  fileName: string | null;
  /**
   * Html
   * @description Raw HTML content to convert into a PDF. Must include any page structure needed.
   */
  html?: string;
  /**
   * Inline Pdf
   * @description If true, returns the PDF inline as base64; otherwise, returns a download URL.
   * @default false
   */
  inlinePdf: boolean;
  /**
   * HeaderFooterOptions
   * @description Advanced options for header and footer display in the PDF.
   * @default null
   */
  options: {
      /**
       * Display Header Footer
       * @description Whether to display headers and footers in the output PDF.
       * @default false
       */
      displayHeaderFooter: boolean;
      /**
       * Footer Template
       * @description HTML template for the footer. Use inline CSS and pagination tags.
       * @default null
       */
      footerTemplate: string | null;
      /**
       * Header Template
       * @description HTML template for the header. Use inline CSS and pagination tags.
       * @default null
       */
      headerTemplate: string | null;
      /**
       * Margin Bottom
       * @description Bottom margin in inches. Must be non-negative.
       * @default null
       */
      marginBottom: number | null;
      /**
       * Margin Left
       * @description Left margin in inches. Must be non-negative.
       * @default null
       */
      marginLeft: number | null;
      /**
       * Margin Right
       * @description Right margin in inches. Must be non-negative.
       * @default null
       */
      marginRight: number | null;
      /**
       * Margin Top
       * @description Top margin in inches. Must be non-negative.
       * @default null
       */
      marginTop: number | null;
  } | null;
};

/**
 * Type of API2PDF's API2PDF_ADD_HEADER_FOOTER tool output.
 */
type API2PDF_ADD_HEADER_FOOTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost
       * @description Cost of the operation in USD.
       */
      cost: number;
      /**
       * Mb In
       * @description Size of the input HTML in megabytes.
       */
      mbIn: number;
      /**
       * Mb Out
       * @description Size of the output PDF in megabytes.
       */
      mbOut: number;
      /**
       * Pdf
       * @description URL to download the generated PDF (or base64 PDF if inlinePdf=true).
       */
      pdf: string;
      /**
       * Success
       * @description True if the PDF conversion was successful.
       */
      success: boolean;
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
 * Type of API2PDF's API2PDF_DELETE_PDF tool input.
 */
type API2PDF_DELETE_PDF_INPUT = {
  /**
   * Response Id
   * @description Unique identifier of the PDF to delete.
   */
  response_id?: string;
};

/**
 * Type of API2PDF's API2PDF_DELETE_PDF tool output.
 */
type API2PDF_DELETE_PDF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information about the deletion status.
       */
      message: string;
      /**
       * Success
       * @description Indicates if the deletion was successful.
       */
      success: boolean;
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
 * Type of API2PDF's API2PDF_EXTRACT_PAGES tool input.
 */
type API2PDF_EXTRACT_PAGES_INPUT = {
  /**
   * End
   * @description Zero-based index of the last page to extract. Negative values count from end. Defaults to last page.
   * @default null
   */
  end: number | null;
  /**
   * Extra Http Headers
   * @description Key-value object specifying headers when fetching the source PDF.
   * @default null
   */
  extraHTTPHeaders: {
      [key: string]: string;
  } | null;
  /**
   * File Name
   * @description Desired filename for the extracted PDF (e.g., 'pages.pdf'). Random name if omitted.
   * @default null
   */
  fileName: string | null;
  /**
   * Inline
   * @description If true, returns the PDF inline; otherwise returns a download URL. Default is true.
   * @default true
   */
  inline: boolean | null;
  /**
   * Start
   * @description Zero-based index of the first page to extract. Negative values count from end (-1 is last page). Defaults to first page.
   * @default null
   */
  start: number | null;
  /**
   * Url
   * Format: uri
   * @description URL of the source PDF (must start with http:// or https://).
   */
  url?: string;
};

/**
 * Type of API2PDF's API2PDF_EXTRACT_PAGES tool output.
 */
type API2PDF_EXTRACT_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost
       * @description Cost of the operation in USD.
       */
      Cost: number;
      /**
       * Error
       * @description Error message if the operation failed.
       * @default null
       */
      Error: string | null;
      /**
       * File Url
       * Format: uri
       * @description A URL to the extracted PDF pages (valid for 24 hours).
       */
      FileUrl: string;
      /**
       * Mb Out
       * @description Megabytes of bandwidth used by the resulting PDF.
       */
      MbOut: number;
      /**
       * Response Id
       * @description Identifier of the API call for future reference.
       */
      ResponseId: string;
      /**
       * Seconds
       * @description Time taken to perform the operation in seconds.
       */
      Seconds: number;
      /**
       * Success
       * @description Indicates whether the operation was successful.
       */
      Success: boolean;
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
 * Type of API2PDF's API2PDF_LIBREOFFICE_PDF_TO_HTML tool input.
 */
type API2PDF_LIBREOFFICE_PDF_TO_HTML_INPUT = {
  /**
   * File Name
   * @description Desired filename for the output HTML file (e.g., 'output.html').
   * @default null
   */
  fileName: string | null;
  /**
   * Inline
   * @description If true, returns HTML content inline in the JSON response; otherwise returns a URL.
   * @default false
   */
  inline: boolean;
  /**
   * Url
   * Format: uri
   * @description Direct URL to the source PDF file.
   */
  url?: string;
};

/**
 * Type of API2PDF's API2PDF_LIBREOFFICE_PDF_TO_HTML tool output.
 */
type API2PDF_LIBREOFFICE_PDF_TO_HTML_OUTPUT = {
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
       * Html
       * @description HTML content of the converted PDF when inline=true.
       * @default null
       */
      html: string | null;
      /**
       * Success
       * @description Indicates if the conversion was successful.
       */
      success: boolean;
      /**
       * Url
       * Format: uri
       * @description URL to download the converted HTML file when inline=false.
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
 * Type of API2PDF's API2PDF_LIBREOFFICE_THUMBNAIL tool input.
 */
type API2PDF_LIBREOFFICE_THUMBNAIL_INPUT = {
  /**
   * Url
   * Format: uri
   * @description Direct URL to the PDF or Office document to thumbnail.
   */
  url?: string;
};

/**
 * Type of API2PDF's API2PDF_LIBREOFFICE_THUMBNAIL tool output.
 */
type API2PDF_LIBREOFFICE_THUMBNAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Url
       * Format: uri
       * @description URL to the generated thumbnail image (expires in 24 hours).
       */
      FileUrl: string;
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
 * Type of API2PDF's API2PDF_MERGE_PDFS tool input.
 */
type API2PDF_MERGE_PDFS_INPUT = {
  /**
   * Extra Http Headers
   * @description Optional headers to use when fetching each source PDF
   * @default null
   */
  extraHTTPHeaders: {
      [key: string]: string;
  } | null;
  /**
   * File Name
   * @description Desired filename for the merged PDF (e.g., 'output.pdf'). Random name if omitted
   * @default null
   */
  fileName: string | null;
  /**
   * Inline
   * @description If true, open the merged PDF in the browser; otherwise force download
   * @default true
   */
  inline: boolean | null;
  /**
   * StorageOptions
   * @description Custom storage settings for uploading the merged PDF.
   * @default null
   */
  storage: {
      /**
       * Extra Http Headers
       * @description Additional headers to include when storing the file
       * @default null
       */
      extraHTTPHeaders: {
          [key: string]: string;
      } | null;
      /**
       * Method
       * @description HTTP method for custom storage (e.g., 'PUT')
       * @default null
       */
      method: string | null;
      /**
       * Url
       * @description Presigned URL or endpoint to store the file
       * @default null
       */
      url: string | null;
  } | null;
  /**
   * Urls
   * @description List of URLs pointing to the PDFs to merge
   */
  urls?: string[];
  /**
   * Use Custom Storage
   * @description When true, upload the merged PDF via the provided storage settings
   * @default false
   */
  useCustomStorage: boolean | null;
};

/**
 * Type of API2PDF's API2PDF_MERGE_PDFS tool output.
 */
type API2PDF_MERGE_PDFS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost
       * @description Cost of the operation in USD
       */
      Cost: number;
      /**
       * Error
       * @description Error message if the operation failed
       * @default null
       */
      Error: string | null;
      /**
       * File Url
       * @description URL to access the merged PDF file
       */
      FileUrl: string;
      /**
       * Mb Out
       * @description Megabytes of bandwidth used by the resulting PDF
       */
      MbOut: number;
      /**
       * Response Id
       * @description Unique identifier for this API response
       */
      ResponseId: string;
      /**
       * Success
       * @description Indicates whether the merge operation was successful
       */
      Success: boolean;
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
 * Type of API2PDF's API2PDF_OPTIMIZE_PDF tool input.
 */
type API2PDF_OPTIMIZE_PDF_INPUT = {
  /**
   * Extra Http Headers
   * @description Headers to include when fetching the source PDF.
   * @default null
   */
  extraHTTPHeaders: {
      [key: string]: string;
  } | null;
  /**
   * File Name
   * @description Filename for the output PDF. Random name if omitted.
   * @default null
   */
  fileName: string | null;
  /**
   * Inline
   * @description If true, open the optimized PDF in a browser window. Defaults to True.
   * @default true
   */
  inline: boolean | null;
  /**
   * StorageOptions
   * @description Custom storage options: method, url, extraHTTPHeaders. Required if useCustomStorage is true.
   * @default null
   */
  storage: {
      /**
       * Extra Http Headers
       * @description Additional headers to include when storing the file
       * @default null
       */
      extraHTTPHeaders: {
          [key: string]: string;
      } | null;
      /**
       * Method
       * @description HTTP method for custom storage, e.g., PUT
       * @default null
       */
      method: string | null;
      /**
       * Url
       * Format: uri
       * @description Presigned URL or endpoint to store the file
       * @default null
       */
      url: string | null;
  } | null;
  /**
   * Url
   * Format: uri
   * @description URL of the PDF file to optimize. Must start with http:// or https://
   */
  url?: string;
  /**
   * Use Custom Storage
   * @description Whether to use custom storage options (see `storage`). Defaults to False.
   * @default false
   */
  useCustomStorage: boolean | null;
};

/**
 * Type of API2PDF's API2PDF_OPTIMIZE_PDF tool output.
 */
type API2PDF_OPTIMIZE_PDF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost
       * @description Cost of the operation in USD.
       */
      Cost: number;
      /**
       * Error
       * @description Error message if the operation failed.
       * @default null
       */
      Error: string | null;
      /**
       * File Url
       * Format: uri
       * @description URL to the optimized PDF (valid for 24 hours).
       */
      FileUrl: string;
      /**
       * Mb Out
       * @description Megabytes of bandwidth generated by the optimized PDF.
       */
      MbOut: number;
      /**
       * Response Id
       * @description Identifier of the API call for reference.
       */
      ResponseId: string;
      /**
       * Seconds
       * @description Time taken to perform the optimization, in seconds.
       */
      Seconds: number;
      /**
       * Success
       * @description True if the optimization succeeded.
       */
      Success: boolean;
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
 * Type of API2PDF's API2PDF_REORDER_PAGES tool input.
 */
type API2PDF_REORDER_PAGES_INPUT = {
  /**
   * Extra Http Headers
   * @description Key-value headers when fetching the source PDF.
   * @default null
   */
  extraHTTPHeaders: {
      [key: string]: string;
  } | null;
  /**
   * File Name
   * @description Desired filename for the reordered PDF (e.g., 'reordered.pdf'). Random name if omitted.
   * @default null
   */
  fileName: string | null;
  /**
   * Inline
   * @description If true, returns the PDF inline; otherwise returns a download URL.
   * @default true
   */
  inline: boolean | null;
  /**
   * Pages
   * @description List of zero-based page indices defining the new order (e.g., [2,0,1] for pages 3,1,2].
   */
  pages?: number[];
  /**
   * StorageOptions
   * @description Custom storage settings for uploading the PDF file.
   * @default null
   */
  storage: {
      /**
       * Extra Http Headers
       * @description Additional headers to include when storing the file
       * @default null
       */
      extraHTTPHeaders: {
          [key: string]: string;
      } | null;
      /**
       * Method
       * @description HTTP method for custom storage (e.g., 'PUT')
       * @default null
       */
      method: string | null;
      /**
       * Url
       * Format: uri
       * @description Presigned URL or endpoint to store the file
       * @default null
       */
      url: string | null;
  } | null;
  /**
   * Url
   * Format: uri
   * @description URL of the source PDF to reorder (must start with http:// or https://).
   */
  url?: string;
  /**
   * Use Custom Storage
   * @description When true, upload the final PDF via provided storage settings.
   * @default false
   */
  useCustomStorage: boolean | null;
};

/**
 * Type of API2PDF's API2PDF_REORDER_PAGES tool output.
 */
type API2PDF_REORDER_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cost
       * @description Cost of the operation in USD.
       */
      Cost: number;
      /**
       * Error
       * @description Error message if the operation failed.
       * @default null
       */
      Error: string | null;
      /**
       * File Url
       * Format: uri
       * @description URL to the reordered PDF file.
       */
      FileUrl: string;
      /**
       * Mb Out
       * @description Megabytes of bandwidth used by the resulting PDF.
       */
      MbOut: number;
      /**
       * Response Id
       * @description Identifier of the API call for future reference.
       */
      ResponseId: string;
      /**
       * Seconds
       * @description Time taken to perform the operation in seconds.
       */
      Seconds: number;
      /**
       * Success
       * @description Indicates whether the operation was successful.
       */
      Success: boolean;
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
 * Type of API2PDF's API2PDF_ZEBRA_GENERATE_BARCODE tool input.
 */
type API2PDF_ZEBRA_GENERATE_BARCODE_INPUT = {
  /**
   * Format
   * @description Barcode format to generate. Most common values: CODE_39 or QR_CODE.
   */
  format?: string;
  /**
   * Height
   * @description Height of the generated image in pixels.
   * @default null
   */
  height: number | null;
  /**
   * Showlabel
   * @description If true, display the human-readable text label below the barcode image.
   * @default null
   */
  showlabel: boolean | null;
  /**
   * Value
   * @description The text value to encode in the barcode or QR code.
   */
  value?: string;
  /**
   * Width
   * @description Width of the generated image in pixels.
   * @default null
   */
  width: number | null;
};

/**
 * Type of API2PDF's API2PDF_ZEBRA_GENERATE_BARCODE tool output.
 */
type API2PDF_ZEBRA_GENERATE_BARCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * Format: binary
       * @description PNG image data of the generated barcode or QR code.
       */
      image: string;
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
 * Type map of all available tool input types for toolkit "API2PDF".
 */
export type API2PDF_TOOL_INPUTS = {
  ADD_HEADER_FOOTER: API2PDF_ADD_HEADER_FOOTER_INPUT
  DELETE_PDF: API2PDF_DELETE_PDF_INPUT
  EXTRACT_PAGES: API2PDF_EXTRACT_PAGES_INPUT
  LIBREOFFICE_PDF_TO_HTML: API2PDF_LIBREOFFICE_PDF_TO_HTML_INPUT
  LIBREOFFICE_THUMBNAIL: API2PDF_LIBREOFFICE_THUMBNAIL_INPUT
  MERGE_PDFS: API2PDF_MERGE_PDFS_INPUT
  OPTIMIZE_PDF: API2PDF_OPTIMIZE_PDF_INPUT
  REORDER_PAGES: API2PDF_REORDER_PAGES_INPUT
  ZEBRA_GENERATE_BARCODE: API2PDF_ZEBRA_GENERATE_BARCODE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "API2PDF".
 */
export type API2PDF_TOOL_OUTPUTS = {
  ADD_HEADER_FOOTER: API2PDF_ADD_HEADER_FOOTER_OUTPUT
  DELETE_PDF: API2PDF_DELETE_PDF_OUTPUT
  EXTRACT_PAGES: API2PDF_EXTRACT_PAGES_OUTPUT
  LIBREOFFICE_PDF_TO_HTML: API2PDF_LIBREOFFICE_PDF_TO_HTML_OUTPUT
  LIBREOFFICE_THUMBNAIL: API2PDF_LIBREOFFICE_THUMBNAIL_OUTPUT
  MERGE_PDFS: API2PDF_MERGE_PDFS_OUTPUT
  OPTIMIZE_PDF: API2PDF_OPTIMIZE_PDF_OUTPUT
  REORDER_PAGES: API2PDF_REORDER_PAGES_OUTPUT
  ZEBRA_GENERATE_BARCODE: API2PDF_ZEBRA_GENERATE_BARCODE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's API2PDF toolkit.
 */
export const API2PDF = {
  slug: "api2pdf",
  tools: {
    /**
     * Tool to add headers and footers to a pdf document. use when you need consistent page numbering, titles, or custom branding on every page.
     */
    ADD_HEADER_FOOTER: "API2PDF_ADD_HEADER_FOOTER",
    /**
     * Tool to delete a previously generated pdf. use when you need to immediately remove a pdf by its response id.
     */
    DELETE_PDF: "API2PDF_DELETE_PDF",
    /**
     * Tool to extract specific pages from a pdf document. use when you need only certain pages from a larger pdf file.
     */
    EXTRACT_PAGES: "API2PDF_EXTRACT_PAGES",
    /**
     * Tool to convert a pdf document to html using libreoffice. use when you need html output of a pdf file (experimental; images may be excluded).
     */
    LIBREOFFICE_PDF_TO_HTML: "API2PDF_LIBREOFFICE_PDF_TO_HTML",
    /**
     * Tool to generate a thumbnail image of a document using libreoffice. use when you need a quick visual preview of a pdf or office file's first page.
     */
    LIBREOFFICE_THUMBNAIL: "API2PDF_LIBREOFFICE_THUMBNAIL",
    /**
     * Tool to merge multiple pdf documents into a single pdf. use when you need to concatenate several pdfs on the server-side.
     */
    MERGE_PDFS: "API2PDF_MERGE_PDFS",
    /**
     * Tool to optimize a pdf document to reduce file size while maintaining quality. use when you need to minimize storage or bandwidth for an existing pdf.
     */
    OPTIMIZE_PDF: "API2PDF_OPTIMIZE_PDF",
    /**
     * Tool to reorder pages of a pdf document. use when you need to rearrange pages into a new order by specifying page indices.
     */
    REORDER_PAGES: "API2PDF_REORDER_PAGES",
    /**
     * Tool to generate barcodes or qr codes using zebra crossing (zxing). use when you need a barcode or qr code image from text values.
     */
    ZEBRA_GENERATE_BARCODE: "API2PDF_ZEBRA_GENERATE_BARCODE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "API2PDF".
 */
export type API2PDF_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "API2PDF".
 */
export type API2PDF_TRIGGER_EVENTS = {}
