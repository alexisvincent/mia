// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOCUGENERATE's DOCUGENERATE_DOCUMENT_GENERATE tool input.
 */
type DOCUGENERATE_DOCUMENT_GENERATE_INPUT = {
  /**
   * Attach
   * @description PDF URL(s) or Base64 data URIs to embed as attachments in the PDF
   * @default null
   */
  attach: string | null;
  /**
   * Data
   * @description Merge data as an object (single document) or list of objects for multiple documents
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * FileUploadable
   * @description Binary file (CSV/Excel/TSV) for bulk merge when `data` is not provided
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
   * Merge With
   * @description PDF URL(s) or Base64 data URIs to append after generated content. Ignored if invalid or unreachable. Only for PDF/PDF-A formats.
   * @default null
   */
  merge_with: string | null;
  /**
   * Name
   * @description Logical document name; supports merge tags when generating a single document
   * @default null
   */
  name: string | null;
  /**
   * Output Format
   * @description Output format; defaults to .docx. PDF/A variants supported
   * @default null
   * @enum {string|null}
   */
  output_format: ".docx" | ".pdf" | ".doc" | ".odt" | ".txt" | ".pdf/a-1b" | ".pdf/a-2b" | ".pdf/a-3b" | null;
  /**
   * Output Name
   * @description Output file name without extension; extension added automatically
   * @default null
   */
  output_name: string | null;
  /**
   * Page Break
   * @description Insert a page break between combined documents when `single_file` is true
   * @default false
   */
  page_break: boolean | null;
  /**
   * Single File
   * @description Combine multiple documents into one file (true) or return a ZIP (false)
   * @default false
   */
  single_file: boolean | null;
  /**
   * Template Id
   * @description ID of the template to use
   */
  template_id?: string;
};

/**
 * Type of DOCUGENERATE's DOCUGENERATE_DOCUMENT_GENERATE tool output.
 */
type DOCUGENERATE_DOCUMENT_GENERATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Unix timestamp (ms) when the document was created
       */
      created: number;
      /**
       * Data Length
       * @description Number of data items processed
       */
      data_length: number;
      /**
       * Document Uri
       * @description URL to download the generated document or ZIP archive
       */
      document_uri: string;
      /**
       * Filename
       * @description Generated file name with extension
       */
      filename: string;
      /**
       * Format
       * @description Output format, e.g., .pdf
       */
      format: string;
      /**
       * Id
       * @description Generated document identifier
       */
      id: string;
      /**
       * Name
       * @description Logical name of the generated document
       */
      name: string;
      /**
       * Template Id
       * @description Template ID used for generation
       */
      template_id: string;
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
 * Type of DOCUGENERATE's DOCUGENERATE_DOCUMENT_GENERATE_BULK_ZIP tool input.
 */
type DOCUGENERATE_DOCUMENT_GENERATE_BULK_ZIP_INPUT = {
  /**
   * Attach
   * @description URL(s) or data URI(s) of files to embed as attachments (PDF outputs only).
   * @default null
   */
  attach: string | null;
  /**
   * Data
   * @description Array of data objects for bulk generation (required if no file).
   * @default null
   */
  data: {
      [key: string]: unknown;
  }[] | null;
  /**
   * FileUploadable
   * @description Optional data file (e.g., Excel/CSV) for bulk generation (multipart/form-data).
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
   * Merge With
   * @description URL(s) or data URI(s) of PDFs to append (PDF outputs only).
   * @default null
   */
  merge_with: string | null;
  /**
   * Name
   * @description Logical name for the generated documents.
   * @default null
   */
  name: string | null;
  /**
   * Output Format
   * @description Export format; default is docx.
   * @default null
   * @enum {string|null}
   */
  output_format: "pdf" | "docx" | "doc" | "odt" | "txt" | null;
  /**
   * Page Break
   * @description Insert page breaks between documents when single_file=true.
   * @default null
   */
  page_break: boolean | null;
  /**
   * Single File
   * @description Combine outputs into a single file; omit or false for ZIP of separate docs.
   * @default null
   */
  single_file: boolean | null;
  /**
   * Template Id
   * @description ID of the template to merge.
   */
  template_id?: string;
};

/**
 * Type of DOCUGENERATE's DOCUGENERATE_DOCUMENT_GENERATE_BULK_ZIP tool output.
 */
type DOCUGENERATE_DOCUMENT_GENERATE_BULK_ZIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description ZIP archive containing generated documents.
       */
      content: {
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
      /**
       * Document Id
       * @description Unique ID of the generated document batch from X-Document-Id header.
       */
      document_id: string;
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
 * Type of DOCUGENERATE's DOCUGENERATE_DOCUMENT_GENERATE_WITH_ATTACHMENTS tool input.
 */
type DOCUGENERATE_DOCUMENT_GENERATE_WITH_ATTACHMENTS_INPUT = {
  /**
   * Attach
   * @description URL(s) or Base64 data-URI(s) of files to embed as PDF attachments.
   * @default null
   */
  attach: string | null;
  /**
   * Data
   * @description Merge data as JSON object or list. Required unless `file` is provided.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * FileUploadable
   * @description Excel/CSV file for bulk document generation. Required if `data` is omitted.
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
   * Merge With
   * @description URL(s) or Base64 data-URI(s) of PDF(s) to append after generation.
   * @default null
   */
  merge_with: string | null;
  /**
   * Name
   * @description Logical document name; defaults to template name.
   * @default null
   */
  name: string | null;
  /**
   * Output Format
   * @description Export format. Attachments only honored for PDF formats.
   * @default pdf
   * @enum {string}
   */
  output_format: "pdf" | "docx" | "doc" | "odt" | "txt" | "pdf/a-1b" | "pdf/a-2b" | "pdf/a-3b";
  /**
   * Output Name
   * @description Filename (without extension) for output document.
   * @default null
   */
  output_name: string | null;
  /**
   * Output Quality
   * @description Quality parameter appearing in examples; use if needed.
   * @default null
   */
  output_quality: number | null;
  /**
   * Page Break
   * @description Insert page breaks when `single_file` is true.
   * @default false
   */
  page_break: boolean;
  /**
   * Single File
   * @description Combine multiple documents into one file when `data` is a list.
   * @default false
   */
  single_file: boolean;
  /**
   * Template Id
   * @description ID of the template to merge.
   */
  template_id?: string;
};

/**
 * Type of DOCUGENERATE's DOCUGENERATE_DOCUMENT_GENERATE_WITH_ATTACHMENTS tool output.
 */
type DOCUGENERATE_DOCUMENT_GENERATE_WITH_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Generated document bytes with attachments embedded.
       */
      content: {
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
 * Type of DOCUGENERATE's DOCUGENERATE_DOCUMENT_GENERATE_WITH_MERGE tool input.
 */
type DOCUGENERATE_DOCUMENT_GENERATE_WITH_MERGE_INPUT = {
  /**
   * Data
   * @description Data object or list of objects to merge into the template.
   */
  data?: {
      [key: string]: unknown;
  } | null;
  /**
   * Merge With
   * @description List of PDF URLs or Base64 data URIs to append after the generated document.
   * @default null
   */
  merge_with: string[] | null;
  /**
   * Output Format
   * @description Output format; must be PDF variant when using merge_with.
   * @default pdf
   * @enum {string}
   */
  output_format: "pdf" | "pdf/a-1b" | "pdf/a-2b" | "pdf/a-3b";
  /**
   * Output Name
   * @description Filename for download; defaults to '<template_id>.pdf' or '.zip'.
   * @default null
   */
  output_name: string | null;
  /**
   * Page Break
   * @description Insert page breaks between items when single_file is true.
   * @default false
   */
  page_break: boolean;
  /**
   * Single File
   * @description Combine all pages into one file if true; otherwise returns a ZIP for batch runs.
   * @default true
   */
  single_file: boolean;
  /**
   * Template Id
   * @description ID of the pre-uploaded template to use.
   */
  template_id?: string;
};

/**
 * Type of DOCUGENERATE's DOCUGENERATE_DOCUMENT_GENERATE_WITH_MERGE tool output.
 */
type DOCUGENERATE_DOCUMENT_GENERATE_WITH_MERGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Merged PDF or ZIP file content.
       */
      content: {
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
 * Type of DOCUGENERATE's DOCUGENERATE_DOCUMENT_UPDATE tool input.
 */
type DOCUGENERATE_DOCUMENT_UPDATE_INPUT = {
  /**
   * Id
   * @description The unique identifier of the document to update
   */
  id?: string;
  /**
   * Name
   * @description New name for the document (optional)
   * @default null
   */
  name: string | null;
};

/**
 * Type of DOCUGENERATE's DOCUGENERATE_DOCUMENT_UPDATE tool output.
 */
type DOCUGENERATE_DOCUMENT_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Document creation timestamp in ISO 8601 format
       */
      created: string;
      /**
       * Data Length
       * @description Size of the document data in bytes
       */
      data_length: number;
      /**
       * Document Uri
       * @description URI to access the document
       */
      document_uri: string;
      /**
       * Filename
       * @description Filename of the document
       * @default null
       */
      filename: string | null;
      /**
       * Format
       * @description Document format, e.g., pdf
       * @default null
       */
      format: string | null;
      /**
       * Id
       * @description Document ID
       */
      id: string;
      /**
       * Name
       * @description Document name
       */
      name: string;
      /**
       * Template Id
       * @description Template ID used to generate the document
       */
      template_id: string;
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
 * Type of DOCUGENERATE's DOCUGENERATE_TEMPLATE_GET_OR_LIST tool input.
 */
type DOCUGENERATE_TEMPLATE_GET_OR_LIST_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (starting at 1)
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of templates per page
   * @default 50
   */
  per_page: number | null;
};

/**
 * Type of DOCUGENERATE's DOCUGENERATE_TEMPLATE_GET_OR_LIST tool output.
 */
type DOCUGENERATE_TEMPLATE_GET_OR_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of template objects
       */
      templates: ({
          /**
           * Created
           * @description Creation timestamp (ms since epoch)
           * @default null
           */
          created: number | null;
          /**
           * Id
           * @description Unique template identifier
           */
          id: string;
          /**
           * Name
           * @description Template name
           * @default null
           */
          name: string | null;
          /**
           * Updated
           * @description Last update timestamp (ms since epoch)
           * @default null
           */
          updated: number | null;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Total
       * @description Total number of templates available
       * @default null
       */
      total: number | null;
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
 * Type of DOCUGENERATE's DOCUGENERATE_TEMPLATE_UPDATE tool input.
 */
type DOCUGENERATE_TEMPLATE_UPDATE_INPUT = {
  /**
   * FileUploadable
   * @description The template file to upload (form field 'file')
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
   * Id
   * @description Template identifier to update
   */
  id?: string;
  /**
   * Name
   * @description Optional new name for the template
   * @default null
   */
  name: string | null;
  /**
   * Region
   * @description Processing region for the template (e.g., 'us', 'eu', 'uk', 'au')
   * @default null
   */
  region: string | null;
  /**
   * Versioning Enabled
   * @description Enable version history for the template
   * @default null
   */
  versioning_enabled: boolean | null;
};

/**
 * Type of DOCUGENERATE's DOCUGENERATE_TEMPLATE_UPDATE tool output.
 */
type DOCUGENERATE_TEMPLATE_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp in epoch milliseconds
       */
      created: number;
      /**
       * Delimiters
       * @description Tag delimiters in use
       */
      delimiters: {
          /**
           * Left
           * @description Left tag delimiter, e.g. '{{'
           */
          left: string;
          /**
           * Right
           * @description Right tag delimiter, e.g. '}}'
           */
          right: string;
      };
      /**
       * Enhanced Syntax
       * @description Whether enhanced syntax is enabled
       */
      enhanced_syntax: boolean;
      /**
       * Filename
       * @description Original file name
       */
      filename: string;
      /**
       * Format
       * @description File extension, e.g., '.docx'
       */
      format: string;
      /**
       * Id
       * @description Template identifier
       */
      id: string;
      /**
       * Image Uri
       * @description PNG preview image URL of the template
       */
      image_uri: string;
      /**
       * Name
       * @description Template name
       */
      name: string;
      /**
       * Page Count
       * @description Detected number of pages in the template
       */
      page_count: number;
      /**
       * Preview Uri
       * @description PDF preview URL of the template
       */
      preview_uri: string;
      /**
       * Region
       * @description Region where the template is processed/stored
       */
      region: string;
      /**
       * Tags
       * @description Detected valid and invalid tags
       */
      tags: {
          /**
           * Invalid
           * @description List of detected invalid tags
           */
          invalid: string[];
          /**
           * Valid
           * @description List of detected valid tags
           */
          valid: string[];
      };
      /**
       * Template Uri
       * @description Direct link to the uploaded template file
       */
      template_uri: string;
      /**
       * Updated
       * @description Last update timestamp in epoch milliseconds
       */
      updated: number;
      /**
       * Versioning Enabled
       * @description Whether version history is enabled
       */
      versioning_enabled: boolean;
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
 * Type map of all available tool input types for toolkit "DOCUGENERATE".
 */
export type DOCUGENERATE_TOOL_INPUTS = {
  DOCUMENT_GENERATE: DOCUGENERATE_DOCUMENT_GENERATE_INPUT
  DOCUMENT_GENERATE_BULK_ZIP: DOCUGENERATE_DOCUMENT_GENERATE_BULK_ZIP_INPUT
  DOCUMENT_GENERATE_WITH_ATTACHMENTS: DOCUGENERATE_DOCUMENT_GENERATE_WITH_ATTACHMENTS_INPUT
  DOCUMENT_GENERATE_WITH_MERGE: DOCUGENERATE_DOCUMENT_GENERATE_WITH_MERGE_INPUT
  DOCUMENT_UPDATE: DOCUGENERATE_DOCUMENT_UPDATE_INPUT
  TEMPLATE_GET_OR_LIST: DOCUGENERATE_TEMPLATE_GET_OR_LIST_INPUT
  TEMPLATE_UPDATE: DOCUGENERATE_TEMPLATE_UPDATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOCUGENERATE".
 */
export type DOCUGENERATE_TOOL_OUTPUTS = {
  DOCUMENT_GENERATE: DOCUGENERATE_DOCUMENT_GENERATE_OUTPUT
  DOCUMENT_GENERATE_BULK_ZIP: DOCUGENERATE_DOCUMENT_GENERATE_BULK_ZIP_OUTPUT
  DOCUMENT_GENERATE_WITH_ATTACHMENTS: DOCUGENERATE_DOCUMENT_GENERATE_WITH_ATTACHMENTS_OUTPUT
  DOCUMENT_GENERATE_WITH_MERGE: DOCUGENERATE_DOCUMENT_GENERATE_WITH_MERGE_OUTPUT
  DOCUMENT_UPDATE: DOCUGENERATE_DOCUMENT_UPDATE_OUTPUT
  TEMPLATE_GET_OR_LIST: DOCUGENERATE_TEMPLATE_GET_OR_LIST_OUTPUT
  TEMPLATE_UPDATE: DOCUGENERATE_TEMPLATE_UPDATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOCUGENERATE toolkit.
 */
export const DOCUGENERATE = {
  slug: "docugenerate",
  tools: {
    /**
     * Tool to generate document(s) from a template by merging JSON data or uploading a data file. Use when you need to programmatically produce one or more documents and receive metadata including a download URL.
     */
    DOCUMENT_GENERATE: "DOCUGENERATE_DOCUMENT_GENERATE",
    /**
     * Tool to bulk generate multiple documents into a ZIP archive. Use when you need a batch of docs packaged as ZIP.
     */
    DOCUMENT_GENERATE_BULK_ZIP: "DOCUGENERATE_DOCUMENT_GENERATE_BULK_ZIP",
    /**
     * Tool to generate a PDF with embedded attachments. Use when you need to bundle extra files into the PDF output.
     */
    DOCUMENT_GENERATE_WITH_ATTACHMENTS: "DOCUGENERATE_DOCUMENT_GENERATE_WITH_ATTACHMENTS",
    /**
     * Tool to generate a PDF and append additional PDF files. Use when you need to merge extra pages into a generated document.
     */
    DOCUMENT_GENERATE_WITH_MERGE: "DOCUGENERATE_DOCUMENT_GENERATE_WITH_MERGE",
    /**
     * Tool to update a document's metadata. Use when renaming an existing document after confirming the document ID.
     */
    DOCUMENT_UPDATE: "DOCUGENERATE_DOCUMENT_UPDATE",
    /**
     * Tool to retrieve or list existing templates. Use when needing template IDs and metadata before making updates or generating documents.
     */
    TEMPLATE_GET_OR_LIST: "DOCUGENERATE_TEMPLATE_GET_OR_LIST",
    /**
     * Tool to update a template’s file and settings. Use after confirming the template ID and desired inputs.
     */
    TEMPLATE_UPDATE: "DOCUGENERATE_TEMPLATE_UPDATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOCUGENERATE".
 */
export type DOCUGENERATE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOCUGENERATE".
 */
export type DOCUGENERATE_TRIGGER_EVENTS = {}
