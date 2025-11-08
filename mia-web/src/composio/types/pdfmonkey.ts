// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PDFMONKEY's PDFMONKEY_CREATE_DOCUMENT tool input.
 */
type PDFMONKEY_CREATE_DOCUMENT_INPUT = {
  /**
   * Document
   * @description Document creation parameters wrapper.
   */
  document?: {
      /**
       * Document Template Id
       * Format: uuid
       * @description UUID of the source template.
       */
      document_template_id: string;
      /**
       * Meta
       * @description Arbitrary metadata; object or JSON string of a single object.
       * @default null
       */
      meta: {
          [key: string]: unknown;
      } | null;
      /**
       * Payload
       * @description Data for generation; object or JSON string of a single object.
       * @default null
       */
      payload: {
          [key: string]: unknown;
      } | null;
      /**
       * Status
       * @description Use 'pending' to trigger generation immediately; default 'draft'.
       * @default draft
       * @enum {string}
       */
      status: "draft" | "pending";
  };
};

/**
 * Type of PDFMONKEY's PDFMONKEY_CREATE_DOCUMENT tool output.
 */
type PDFMONKEY_CREATE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document
       * @description Created Document resource.
       */
      document: {
          /**
           * App Id
           * Format: uuid
           * @description Workspace (app) ID.
           */
          app_id: string;
          /**
           * Checksum
           * @description Internal checksum for previews.
           */
          checksum: string;
          /**
           * Created At
           * Format: date-time
           * @description Creation time (ISO 8601).
           */
          created_at: string;
          /**
           * Document Template Id
           * Format: uuid
           * @description Template ID used.
           */
          document_template_id: string;
          /**
           * Download Url
           * Format: uri
           * @description Download link valid for 1 hour or null if not generated.
           * @default null
           */
          download_url: string | null;
          /**
           * Failure Cause
           * @description Failure reason if any.
           * @default null
           */
          failure_cause: string | null;
          /**
           * Filename
           * @description Generated filename on success.
           * @default null
           */
          filename: string | null;
          /**
           * Generation Logs
           * @description Logs during generation.
           */
          generation_logs?: {
              /**
               * Message
               * @description Log message.
               */
              message: string;
              /**
               * Timestamp
               * Format: date-time
               * @description Log timestamp.
               */
              timestamp: string;
              /**
               * Type
               * @description Log type.
               * @enum {string}
               */
              type: "info" | "error";
          }[];
          /**
           * Id
           * Format: uuid
           * @description Unique document ID.
           */
          id: string;
          /**
           * Meta
           * @description Document metadata; object or JSON string.
           * @default null
           */
          meta: {
              [key: string]: unknown;
          } | null;
          /**
           * Payload
           * @description Payload used; object or JSON string.
           * @default null
           */
          payload: {
              [key: string]: unknown;
          } | null;
          /**
           * Preview Url
           * Format: uri
           * @description Preview embed URL (not download).
           * @default null
           */
          preview_url: string | null;
          /**
           * Public Share Link
           * Format: uri
           * @description Public share link if enabled.
           * @default null
           */
          public_share_link: string | null;
          /**
           * Status
           * @description Current status of the document.
           */
          status: string;
          /**
           * Updated At
           * Format: date-time
           * @description Last update time (ISO 8601).
           */
          updated_at: string;
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
 * Type of PDFMONKEY's PDFMONKEY_CREATE_DOCUMENT_SYNC tool input.
 */
type PDFMONKEY_CREATE_DOCUMENT_SYNC_INPUT = {
  /**
   * Document
   * @description Container for document attributes
   */
  document?: {
      /**
       * Document Template Id
       * @description UUID of the template to use for generation
       */
      document_template_id: string;
      /**
       * Meta
       * @description Arbitrary metadata to attach to the document
       * @default null
       */
      meta: {
          [key: string]: unknown;
      } | null;
      /**
       * Payload
       * @description Data used to generate the document; must be a single JSON object
       * @default null
       */
      payload: {
          [key: string]: unknown;
      } | null;
      /**
       * Status
       * @description Set to "pending" to queue generation on creation
       * @default null
       * @constant
       */
      status: "pending";
  };
};

/**
 * Type of PDFMONKEY's PDFMONKEY_CREATE_DOCUMENT_SYNC tool output.
 */
type PDFMONKEY_CREATE_DOCUMENT_SYNC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Card
       * @description Brief representation of the generated document
       */
      document_card: {
          /**
           * App Id
           * @description Workspace identifier
           */
          app_id: string;
          /**
           * Created At
           * @description ISO8601 creation timestamp
           */
          created_at: string;
          /**
           * Document Template Id
           * @description Template ID used for this document
           */
          document_template_id: string;
          /**
           * Document Template Identifier
           * @description Template name or identifier
           */
          document_template_identifier: string;
          /**
           * Download Url
           * @description Download link for the generated document; expires quickly
           * @default null
           */
          download_url: string | null;
          /**
           * Failure Cause
           * @description Reason for failure if generation failed
           * @default null
           */
          failure_cause: string | null;
          /**
           * Filename
           * @description Generated filename when available
           * @default null
           */
          filename: string | null;
          /**
           * Id
           * @description Unique document identifier
           */
          id: string;
          /**
           * Meta
           * @description Echoed metadata
           * @default null
           */
          meta: {
              [key: string]: unknown;
          } | null;
          /**
           * Preview Url
           * @description Preview URL for embedding or previewing
           */
          preview_url: string;
          /**
           * Public Share Link
           * @description Permalink when share links are enabled
           * @default null
           */
          public_share_link: string | null;
          /**
           * Status
           * @description Current generation status
           */
          status: string;
          /**
           * Updated At
           * @description ISO8601 last update timestamp
           */
          updated_at: string;
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
 * Type of PDFMONKEY's PDFMONKEY_CREATE_TEMPLATE tool input.
 */
type PDFMONKEY_CREATE_TEMPLATE_INPUT = {
  /**
   * App Id
   * @description Workspace (application) UUID. If omitted, server default workspace may be used if supported.
   * @default null
   */
  app_id: string | null;
  /**
   * Body
   * @description Published body (HTML + Liquid) used to generate documents
   * @default null
   */
  body: string | null;
  /**
   * Body Draft
   * @description Draft body (HTML + Liquid) used to preview changes
   * @default null
   */
  body_draft: string | null;
  /**
   * Edition Mode
   * @description Edition mode; defaults to 'code' if unset
   * @default null
   * @enum {string|null}
   */
  edition_mode: "code" | "visual" | null;
  /**
   * Id
   * @description UUID of the document template
   */
  id?: string;
  /**
   * Identifier
   * @description Human name of the document template
   */
  identifier?: string;
  /**
   * Pdf Engine Draft Id
   * @description PDF engine ID used to preview changes/test new engine
   */
  pdf_engine_draft_id?: string | null;
  /**
   * Pdf Engine Id
   * @description PDF engine ID used to generate documents
   * @default null
   */
  pdf_engine_id: string | null;
  /**
   * Sample Data
   * @description Sample data used only to allow reverting changes
   * @default null
   */
  sample_data: string | null;
  /**
   * Sample Data Draft
   * @description Draft sample data used for preview/testing
   * @default null
   */
  sample_data_draft: string | null;
  /**
   * Scss Style
   * @description Published (S)CSS used to generate documents
   * @default null
   */
  scss_style: string | null;
  /**
   * Scss Style Draft
   * @description Draft (S)CSS used to preview changes
   * @default null
   */
  scss_style_draft: string | null;
  /**
   * TemplateSettings
   * @description Document printing settings for PDF generation or preview.
   * @default null
   */
  settings: {
      /**
       * HeaderFooterConfig
       * @description Configuration for header or footer content, without HTML/Liquid support and with pagination tokens.
       * @default null
       */
      footer: {
          /**
           * Center
           * @description Center content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          center: string | null;
          /**
           * Left
           * @description Left content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          left: string | null;
          /**
           * Right
           * @description Right content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          right: string | null;
      } | null;
      /**
       * HeaderFooterConfig
       * @description Configuration for header or footer content, without HTML/Liquid support and with pagination tokens.
       * @default null
       */
      header: {
          /**
           * Center
           * @description Center content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          center: string | null;
          /**
           * Left
           * @description Left content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          left: string | null;
          /**
           * Right
           * @description Right content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          right: string | null;
      } | null;
      /**
       * Inject Javascript
       * @description Expose payload/test data to JS via $docPayload
       * @default null
       */
      inject_javascript: boolean | null;
      /**
       * MarginConfig
       * @description Page margins in millimeters.
       * @default null
       */
      margin: {
          /**
           * Bottom
           * @description Bottom margin in mm
           * @default null
           */
          bottom: number | null;
          /**
           * Left
           * @description Left margin in mm
           * @default null
           */
          left: number | null;
          /**
           * Right
           * @description Right margin in mm
           * @default null
           */
          right: number | null;
          /**
           * Top
           * @description Top margin in mm
           * @default null
           */
          top: number | null;
      } | null;
      /**
       * Orientation
       * @enum {string|null}
       */
      orientation: "portrait" | "landscape" | null;
      /**
       * Paper Format
       * @description Paper format for printing
       * @default null
       * @enum {string|null}
       */
      paper_format: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "letter" | "custom" | null;
      /**
       * Paper Height
       * @description Custom paper height in mm; used if paper_format='custom'
       * @default null
       */
      paper_height: number | null;
      /**
       * Paper Width
       * @description Custom paper width in mm; used if paper_format='custom'
       * @default null
       */
      paper_width: number | null;
      /**
       * Use Emojis
       * @description Enable emoji support in the rendered document
       * @default null
       */
      use_emojis: boolean | null;
      /**
       * Use Paged
       * @description Use PDF Engine v3 and wait for Paged.js completion
       * @default null
       */
      use_paged: boolean | null;
  } | null;
  /**
   * TemplateSettings
   * @description Document printing settings for PDF generation or preview.
   * @default null
   */
  settings_draft: {
      /**
       * HeaderFooterConfig
       * @description Configuration for header or footer content, without HTML/Liquid support and with pagination tokens.
       * @default null
       */
      footer: {
          /**
           * Center
           * @description Center content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          center: string | null;
          /**
           * Left
           * @description Left content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          left: string | null;
          /**
           * Right
           * @description Right content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          right: string | null;
      } | null;
      /**
       * HeaderFooterConfig
       * @description Configuration for header or footer content, without HTML/Liquid support and with pagination tokens.
       * @default null
       */
      header: {
          /**
           * Center
           * @description Center content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          center: string | null;
          /**
           * Left
           * @description Left content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          left: string | null;
          /**
           * Right
           * @description Right content; supports [page] and [topage] tokens; no HTML/Liquid
           * @default null
           */
          right: string | null;
      } | null;
      /**
       * Inject Javascript
       * @description Expose payload/test data to JS via $docPayload
       * @default null
       */
      inject_javascript: boolean | null;
      /**
       * MarginConfig
       * @description Page margins in millimeters.
       * @default null
       */
      margin: {
          /**
           * Bottom
           * @description Bottom margin in mm
           * @default null
           */
          bottom: number | null;
          /**
           * Left
           * @description Left margin in mm
           * @default null
           */
          left: number | null;
          /**
           * Right
           * @description Right margin in mm
           * @default null
           */
          right: number | null;
          /**
           * Top
           * @description Top margin in mm
           * @default null
           */
          top: number | null;
      } | null;
      /**
       * Orientation
       * @enum {string|null}
       */
      orientation: "portrait" | "landscape" | null;
      /**
       * Paper Format
       * @description Paper format for printing
       * @default null
       * @enum {string|null}
       */
      paper_format: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "letter" | "custom" | null;
      /**
       * Paper Height
       * @description Custom paper height in mm; used if paper_format='custom'
       * @default null
       */
      paper_height: number | null;
      /**
       * Paper Width
       * @description Custom paper width in mm; used if paper_format='custom'
       * @default null
       */
      paper_width: number | null;
      /**
       * Use Emojis
       * @description Enable emoji support in the rendered document
       * @default null
       */
      use_emojis: boolean | null;
      /**
       * Use Paged
       * @description Use PDF Engine v3 and wait for Paged.js completion
       * @default null
       */
      use_paged: boolean | null;
  } | null;
  /**
   * Ttl
   * @description Auto-deletion TTL in seconds; allowed values: 300,1200,3600,86400,604800,2592000,31536000,0. If too high, highest allowed is used
   * @default null
   * @enum {integer|null}
   */
  ttl: 300 | 1200 | 3600 | 86400 | 604800 | 2592000 | 31536000 | 0 | null;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_CREATE_TEMPLATE tool output.
 */
type PDFMONKEY_CREATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Template
       * @description The created document template
       */
      document_template: {
          /**
           * App Id
           * @description Workspace (application) UUID
           */
          app_id: string;
          /**
           * Auth Token
           * @description Authentication token for preview links
           * @default null
           */
          auth_token: string | null;
          /**
           * Body
           * @description Published HTML + Liquid content
           * @default null
           */
          body: string | null;
          /**
           * Body Draft
           * @description Draft HTML + Liquid content
           * @default null
           */
          body_draft: string | null;
          /**
           * Checksum
           * @description Internal checksum for previews
           * @default null
           */
          checksum: string | null;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format
           */
          created_at: string;
          /**
           * Edition Mode
           * @description Edition mode of the template
           * @enum {string}
           */
          edition_mode: "code" | "visual";
          /**
           * Id
           * @description Unique identifier of the template
           */
          id: string;
          /**
           * Identifier
           * @description Human name of the document template
           */
          identifier: string;
          /**
           * Pdf Engine Draft Id
           * @description PDF engine ID used for preview/testing
           * @default null
           */
          pdf_engine_draft_id: string | null;
          /**
           * Pdf Engine Id
           * @description PDF engine ID used for generation
           */
          pdf_engine_id: string;
          /**
           * Preview Url
           * Format: uri
           * @description Preview URL for draft properties
           * @default null
           */
          preview_url: string | null;
          /**
           * Sample Data
           * @description Published sample data (JSON)
           * @default null
           */
          sample_data: string | null;
          /**
           * Sample Data Draft
           * @description Draft sample data for testing/preview
           * @default null
           */
          sample_data_draft: string | null;
          /**
           * Scss Style
           * @description Published CSS/SCSS content
           * @default null
           */
          scss_style: string | null;
          /**
           * Scss Style Draft
           * @description Draft CSS/SCSS content
           * @default null
           */
          scss_style_draft: string | null;
          /**
           * DocumentTemplateSettings
           * @description Published printing settings for the created template.
           * @default null
           */
          settings: {
              /**
               * HeaderFooterConfig
               * @description Configuration for header or footer content, without HTML/Liquid support and with pagination tokens.
               */
              footer: {
                  /**
                   * Center
                   * @description Center content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  right: string | null;
              } | null;
              /**
               * HeaderFooterConfig
               * @description Configuration for header or footer content, without HTML/Liquid support and with pagination tokens.
               */
              header: {
                  /**
                   * Center
                   * @description Center content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  right: string | null;
              } | null;
              /** Inject Javascript */
              inject_javascript: boolean | null;
              /**
               * MarginConfig
               * @description Page margins in millimeters.
               */
              margin: {
                  /**
                   * Bottom
                   * @description Bottom margin in mm
                   * @default null
                   */
                  bottom: number | null;
                  /**
                   * Left
                   * @description Left margin in mm
                   * @default null
                   */
                  left: number | null;
                  /**
                   * Right
                   * @description Right margin in mm
                   * @default null
                   */
                  right: number | null;
                  /**
                   * Top
                   * @description Top margin in mm
                   * @default null
                   */
                  top: number | null;
              } | null;
              /**
               * Orientation
               * @enum {string|null}
               */
              orientation: "portrait" | "landscape" | null;
              /**
               * Paper Format
               * @enum {string|null}
               */
              paper_format: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "letter" | "custom" | null;
              /** Paper Height */
              paper_height: number | null;
              /** Paper Width */
              paper_width: number | null;
              /** Use Emojis */
              use_emojis: boolean | null;
              /** Use Paged */
              use_paged: boolean | null;
          } | null;
          /**
           * DocumentTemplateSettings
           * @description Published printing settings for the created template.
           * @default null
           */
          settings_draft: {
              /**
               * HeaderFooterConfig
               * @description Configuration for header or footer content, without HTML/Liquid support and with pagination tokens.
               */
              footer: {
                  /**
                   * Center
                   * @description Center content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  right: string | null;
              } | null;
              /**
               * HeaderFooterConfig
               * @description Configuration for header or footer content, without HTML/Liquid support and with pagination tokens.
               */
              header: {
                  /**
                   * Center
                   * @description Center content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right content; supports [page] and [topage] tokens; no HTML/Liquid
                   * @default null
                   */
                  right: string | null;
              } | null;
              /** Inject Javascript */
              inject_javascript: boolean | null;
              /**
               * MarginConfig
               * @description Page margins in millimeters.
               */
              margin: {
                  /**
                   * Bottom
                   * @description Bottom margin in mm
                   * @default null
                   */
                  bottom: number | null;
                  /**
                   * Left
                   * @description Left margin in mm
                   * @default null
                   */
                  left: number | null;
                  /**
                   * Right
                   * @description Right margin in mm
                   * @default null
                   */
                  right: number | null;
                  /**
                   * Top
                   * @description Top margin in mm
                   * @default null
                   */
                  top: number | null;
              } | null;
              /**
               * Orientation
               * @enum {string|null}
               */
              orientation: "portrait" | "landscape" | null;
              /**
               * Paper Format
               * @enum {string|null}
               */
              paper_format: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "letter" | "custom" | null;
              /** Paper Height */
              paper_height: number | null;
              /** Paper Width */
              paper_width: number | null;
              /** Use Emojis */
              use_emojis: boolean | null;
              /** Use Paged */
              use_paged: boolean | null;
          } | null;
          /**
           * Template Folder Id
           * @description Folder ID used to group the template
           * @default null
           */
          template_folder_id: string | null;
          /**
           * Ttl
           * @description Document expiration delay (TTL) in seconds
           */
          ttl: number;
          /**
           * Updated At
           * @description Last update timestamp in ISO 8601 format
           */
          updated_at: string;
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
 * Type of PDFMONKEY's PDFMONKEY_DELETE_DOCUMENT tool input.
 */
type PDFMONKEY_DELETE_DOCUMENT_INPUT = {
  /**
   * Id
   * @description UUID of the document to delete
   */
  id?: string;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_DELETE_DOCUMENT tool output.
 */
type PDFMONKEY_DELETE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code of the delete operation, 204 indicates success
       */
      status_code: number;
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
 * Type of PDFMONKEY's PDFMONKEY_DELETE_TEMPLATE tool input.
 */
type PDFMONKEY_DELETE_TEMPLATE_INPUT = {
  /**
   * Id
   * @description The ID of the document template to delete
   */
  id?: string;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_DELETE_TEMPLATE tool output.
 */
type PDFMONKEY_DELETE_TEMPLATE_OUTPUT = {
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
 * Type of PDFMONKEY's PDFMONKEY_DOWNLOAD_DOCUMENT_FILE tool input.
 */
type PDFMONKEY_DOWNLOAD_DOCUMENT_FILE_INPUT = {
  /**
   * Download Url
   * @description Time-limited presigned URL returned by the Documents API. Valid for 1 hour; if expired, retrieve a new URL via the Document details endpoint.
   */
  download_url?: string;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_DOWNLOAD_DOCUMENT_FILE tool output.
 */
type PDFMONKEY_DOWNLOAD_DOCUMENT_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Downloaded PDF file as a FileDownloadable object
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
 * Type of PDFMONKEY's PDFMONKEY_GET_CURRENT_USER tool input.
 */
type PDFMONKEY_GET_CURRENT_USER_INPUT = object;

/**
 * Type of PDFMONKEY's PDFMONKEY_GET_CURRENT_USER tool output.
 */
type PDFMONKEY_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current User
       * @description Details of the authenticated user
       */
      current_user: {
          /**
           * Auth Token
           * @description API token associated with the user
           */
          auth_token: string;
          /**
           * Available Documents
           * @description Number of documents remaining under the current plan
           */
          available_documents: number;
          /**
           * Block Resources
           * @description If true, user is prevented from creating new resources
           */
          block_resources: boolean;
          /**
           * Created At
           * @description Account creation timestamp (ISO 8601)
           */
          created_at: string;
          /**
           * Current Plan
           * @description Name of the active subscription plan
           */
          current_plan: string;
          /**
           * Current Plan Interval
           * @description Billing interval of the current plan
           */
          current_plan_interval: string;
          /**
           * Desired Name
           * @description User's display name
           */
          desired_name: string;
          /**
           * Email
           * @description User's email address (format: email)
           */
          email: string;
          /**
           * Id
           * @description Unique identifier of the user
           */
          id: string;
          /**
           * Lang
           * @description Locale code (e.g., 'en', 'en-US')
           */
          lang: string;
          /**
           * Paying Customer
           * @description Flag indicating whether the user is a paid subscriber
           */
          paying_customer: boolean;
          /**
           * Share Links
           * @description If true, user is allowed to generate shareable links
           */
          share_links: boolean;
          /**
           * Trial Ends On
           * @description Date when the free trial ends (YYYY-MM-DD), if applicable
           * @default null
           */
          trial_ends_on: string | null;
          /**
           * Updated At
           * @description Timestamp of the last account update (ISO 8601)
           */
          updated_at: string;
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
 * Type of PDFMONKEY's PDFMONKEY_GET_DOCUMENT tool input.
 */
type PDFMONKEY_GET_DOCUMENT_INPUT = {
  /**
   * Id
   * @description UUID of the document to retrieve
   */
  id?: string;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_GET_DOCUMENT tool output.
 */
type PDFMONKEY_GET_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document
       * @description The requested document object
       */
      document: {
          /**
           * App Id
           * @description Workspace (application) UUID
           */
          app_id: string;
          /**
           * Checksum
           * @description Internal checksum for previews
           */
          checksum: string;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format
           */
          created_at: string;
          /**
           * Document Template Id
           * @description Template UUID used to generate this document
           */
          document_template_id: string;
          /**
           * Download Url
           * Format: uri
           * @description Temporary download URL valid for ~1 hour
           */
          download_url: string;
          /**
           * Failure Cause
           * @description Reason for failure when status is 'failure'
           * @default null
           */
          failure_cause: string | null;
          /**
           * Filename
           * @description Original file name if generation succeeded
           * @default null
           */
          filename: string | null;
          /**
           * Generation Logs
           * @description List of generation log entries
           */
          generation_logs?: {
              /**
               * Message
               * @description Log message
               */
              message: string;
              /**
               * Timestamp
               * @description ISO 8601 timestamp of the log entry
               */
              timestamp: string;
              /**
               * Type
               * @description Log level: info or error
               * @enum {string}
               */
              type: "info" | "error";
          }[];
          /**
           * Id
           * @description Document UUID
           */
          id: string;
          /**
           * Meta
           * @description Arbitrary metadata stored with the document (JSON or string)
           * @default null
           */
          meta: unknown;
          /**
           * Payload
           * @description Data used to render the document; must be a JSON object
           */
          payload: {
              [key: string]: unknown;
          };
          /**
           * Preview Url
           * Format: uri
           * @description URL to preview the document
           * @default null
           */
          preview_url: string | null;
          /**
           * Public Share Link
           * Format: uri
           * @description Public share link if enabled on the plan
           * @default null
           */
          public_share_link: string | null;
          /**
           * Status
           * @description Current document status
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO 8601 format
           */
          updated_at: string;
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
 * Type of PDFMONKEY's PDFMONKEY_GET_DOCUMENT_CARD tool input.
 */
type PDFMONKEY_GET_DOCUMENT_CARD_INPUT = {
  /**
   * Id
   * @description UUID of the DocumentCard to fetch
   */
  id?: string;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_GET_DOCUMENT_CARD tool output.
 */
type PDFMONKEY_GET_DOCUMENT_CARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Card
       * @description The requested DocumentCard record
       */
      document_card: {
          /**
           * App Id
           * @description Workspace (app) identifier (UUID)
           */
          app_id: string;
          /**
           * Created At
           * Format: date-time
           * @description ISO 8601 timestamp of creation
           */
          created_at: string;
          /**
           * Document Template Id
           * @description Identifier of the source document template (UUID)
           */
          document_template_id: string;
          /**
           * Document Template Identifier
           * @description Name/identifier of the linked document template
           */
          document_template_identifier: string;
          /**
           * Download Url
           * Format: uri
           * @description Time-limited URL (≤1 hour) for downloading the generated document
           */
          download_url: string;
          /**
           * Failure Cause
           * @description Error reason if document generation failed
           * @default null
           */
          failure_cause: string | null;
          /**
           * Filename
           * @description Name of the generated file upon success
           * @default null
           */
          filename: string | null;
          /**
           * Id
           * @description DocumentCard identifier (UUID)
           */
          id: string;
          /**
           * Meta
           * @description Arbitrary user-defined metadata attached to the document
           * @default null
           */
          meta: unknown;
          /**
           * Public Share Link
           * Format: uri
           * @description Permalink when share links are enabled
           * @default null
           */
          public_share_link: string | null;
          /**
           * Status
           * @description Current document status (e.g., pending, success, failure)
           */
          status: string;
          /**
           * Updated At
           * Format: date-time
           * @description ISO 8601 timestamp of last update
           */
          updated_at: string;
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
 * Type of PDFMONKEY's PDFMONKEY_GET_TEMPLATE tool input.
 */
type PDFMONKEY_GET_TEMPLATE_INPUT = {
  /**
   * Id
   * @description UUID of the document template to retrieve
   */
  id?: string;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_GET_TEMPLATE tool output.
 */
type PDFMONKEY_GET_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Template
       * @description Retrieved document template object
       */
      document_template: {
          /**
           * App Id
           * @description Associated application UUID
           */
          app_id: string;
          /**
           * Auth Token
           * @description Token for document generation calls
           */
          auth_token: string;
          /**
           * Body
           * @description Rendered template body
           */
          body: string;
          /**
           * Body Draft
           * @description Draft version of the template body
           */
          body_draft: string;
          /**
           * Checksum
           * @description Content checksum for change detection
           */
          checksum: string;
          /**
           * Created At
           * @description ISO timestamp when created
           */
          created_at: string;
          /**
           * Edition Mode
           * @description Edition mode of the template
           * @enum {string}
           */
          edition_mode: "code" | "visual";
          /**
           * Id
           * @description Template UUID
           */
          id: string;
          /**
           * Identifier
           * @description Unique template identifier
           */
          identifier: string;
          /**
           * Pdf Engine Draft Id
           * @description Draft PDF engine UUID
           */
          pdf_engine_draft_id: string;
          /**
           * Pdf Engine Id
           * @description PDF engine UUID used for rendering
           */
          pdf_engine_id: string;
          /**
           * Preview Url
           * @description Preview URL for draft template
           */
          preview_url: string;
          /**
           * Sample Data
           * @description Sample data JSON for rendering
           */
          sample_data: string;
          /**
           * Sample Data Draft
           * @description Draft sample data JSON
           */
          sample_data_draft: string;
          /**
           * Scss Style
           * @description Template SCSS style
           */
          scss_style: string;
          /**
           * Scss Style Draft
           * @description Draft SCSS style
           */
          scss_style_draft: string;
          /**
           * Settings
           * @description Active template settings
           */
          settings: {
              /**
               * Footer
               * @description Footer settings
               */
              footer: {
                  /**
                   * Center
                   * @description Center section content
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left section content
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right section content
                   * @default null
                   */
                  right: string | null;
              };
              /**
               * Header
               * @description Header settings
               */
              header: {
                  /**
                   * Center
                   * @description Center section content
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left section content
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right section content
                   * @default null
                   */
                  right: string | null;
              };
              /**
               * Inject Javascript
               * @description Whether to inject custom JavaScript
               * @default false
               */
              inject_javascript: boolean;
              /**
               * Margin
               * @description Page margins
               */
              margin: {
                  /**
                   * Bottom
                   * @description Bottom margin in mm
                   */
                  bottom: number;
                  /**
                   * Left
                   * @description Left margin in mm
                   */
                  left: number;
                  /**
                   * Right
                   * @description Right margin in mm
                   */
                  right: number;
                  /**
                   * Top
                   * @description Top margin in mm
                   */
                  top: number;
              };
              /**
               * Orientation
               * @description Page orientation
               * @enum {string}
               */
              orientation: "portrait" | "landscape";
              /**
               * Paper Format
               * @description Paper format
               * @enum {string}
               */
              paper_format: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "letter" | "custom";
              /**
               * Paper Height
               * @description Custom paper height in mm (if format is custom)
               * @default null
               */
              paper_height: number | null;
              /**
               * Paper Width
               * @description Custom paper width in mm (if format is custom)
               * @default null
               */
              paper_width: number | null;
              /**
               * Use Emojis
               * @description Whether to render emojis in the PDF
               * @default false
               */
              use_emojis: boolean;
              /**
               * Use Paged
               * @description Use paged rendering mode (only effective with PDF Engine v3)
               * @default false
               */
              use_paged: boolean;
          };
          /**
           * Settings Draft
           * @description Draft template settings
           */
          settings_draft: {
              /**
               * Footer
               * @description Footer settings
               */
              footer: {
                  /**
                   * Center
                   * @description Center section content
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left section content
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right section content
                   * @default null
                   */
                  right: string | null;
              };
              /**
               * Header
               * @description Header settings
               */
              header: {
                  /**
                   * Center
                   * @description Center section content
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left section content
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right section content
                   * @default null
                   */
                  right: string | null;
              };
              /**
               * Inject Javascript
               * @description Whether to inject custom JavaScript
               * @default false
               */
              inject_javascript: boolean;
              /**
               * Margin
               * @description Page margins
               */
              margin: {
                  /**
                   * Bottom
                   * @description Bottom margin in mm
                   */
                  bottom: number;
                  /**
                   * Left
                   * @description Left margin in mm
                   */
                  left: number;
                  /**
                   * Right
                   * @description Right margin in mm
                   */
                  right: number;
                  /**
                   * Top
                   * @description Top margin in mm
                   */
                  top: number;
              };
              /**
               * Orientation
               * @description Page orientation
               * @enum {string}
               */
              orientation: "portrait" | "landscape";
              /**
               * Paper Format
               * @description Paper format
               * @enum {string}
               */
              paper_format: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "letter" | "custom";
              /**
               * Paper Height
               * @description Custom paper height in mm (if format is custom)
               * @default null
               */
              paper_height: number | null;
              /**
               * Paper Width
               * @description Custom paper width in mm (if format is custom)
               * @default null
               */
              paper_width: number | null;
              /**
               * Use Emojis
               * @description Whether to render emojis in the PDF
               * @default false
               */
              use_emojis: boolean;
              /**
               * Use Paged
               * @description Use paged rendering mode (only effective with PDF Engine v3)
               * @default false
               */
              use_paged: boolean;
          };
          /**
           * Template Folder Id
           * @description Template folder UUID or null
           * @default null
           */
          template_folder_id: string | null;
          /**
           * Ttl
           * @description Time-to-live for generated documents in seconds
           */
          ttl: number;
          /**
           * Updated At
           * @description ISO timestamp when last updated
           */
          updated_at: string;
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
 * Type of PDFMONKEY's PDFMONKEY_LIST_DOCUMENT_CARDS tool input.
 */
type PDFMONKEY_LIST_DOCUMENT_CARDS_INPUT = {
  /**
   * Page[Number]
   * @description Page number to return (default 1)
   * @default null
   */
  "page[number]": number | null;
  /**
   * Q[Document Template Id]
   * @description Filter by one or more document template UUIDs
   * @default null
   */
  "q[document_template_id]": string[] | null;
  /**
   * Q[Status]
   * @description Filter by document status
   * @default null
   * @enum {string|null}
   */
  "q[status]": "success" | "failure" | "draft" | null;
  /**
   * Q[Updated Since]
   * @description Return documents updated after given Unix timestamp
   * @default null
   */
  "q[updated_since]": number | null;
  /**
   * Q[Workspace Id]
   * @description Filter by workspace UUID
   * @default null
   */
  "q[workspace_id]": string | null;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_LIST_DOCUMENT_CARDS tool output.
 */
type PDFMONKEY_LIST_DOCUMENT_CARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Cards
       * @description List of DocumentCards matching the request filters
       */
      document_cards: {
          /**
           * App Id
           * @description Workspace (app) identifier (UUID)
           */
          app_id: string;
          /**
           * Created At
           * Format: date-time
           * @description ISO 8601 timestamp of creation
           */
          created_at: string;
          /**
           * Document Template Id
           * @description Identifier of the source document template (UUID)
           */
          document_template_id: string;
          /**
           * Document Template Identifier
           * @description Name/identifier of the linked document template
           */
          document_template_identifier: string;
          /**
           * Download Url
           * Format: uri
           * @description Time-limited URL for downloading the document (<1h validity)
           */
          download_url: string;
          /**
           * Failure Cause
           * @description Error reason if generation failed
           * @default null
           */
          failure_cause: string | null;
          /**
           * Filename
           * @description Generated filename upon success
           * @default null
           */
          filename: string | null;
          /**
           * Id
           * @description DocumentCard identifier (UUID)
           */
          id: string;
          /**
           * Meta
           * @description Arbitrary user-defined metadata attached to the document
           * @default null
           */
          meta: unknown;
          /**
           * Public Share Link
           * Format: uri
           * @description Permalink when share links are enabled
           * @default null
           */
          public_share_link: string | null;
          /**
           * Status
           * @description Current document status (success, failure, draft)
           */
          status: string;
          /**
           * Updated At
           * Format: date-time
           * @description ISO 8601 timestamp of last update
           */
          updated_at: string;
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
 * Type of PDFMONKEY's PDFMONKEY_LIST_PDF_ENGINES tool input.
 */
type PDFMONKEY_LIST_PDF_ENGINES_INPUT = object;

/**
 * Type of PDFMONKEY's PDFMONKEY_LIST_PDF_ENGINES tool output.
 */
type PDFMONKEY_LIST_PDF_ENGINES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata for the list
       */
      meta: {
          /**
           * Current Page
           * @description Current page number
           */
          current_page: number;
          /**
           * Next Page
           * @description Next page number, if any
           * @default null
           */
          next_page: number | null;
          /**
           * Prev Page
           * @description Previous page number, if any
           * @default null
           */
          prev_page: number | null;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          total_pages: number;
      };
      /**
       * Pdf Engines
       * @description List of available PDF engines with deprecation info
       */
      pdf_engines: {
          /**
           * Deprecated On
           * @description Date when this engine was deprecated (YYYY-MM-DD), if applicable
           * @default null
           */
          deprecated_on: string | null;
          /**
           * Id
           * @description Unique identifier of the PDF engine (UUID)
           */
          id: string;
          /**
           * Name
           * @description Name of the PDF engine
           */
          name: string;
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
 * Type of PDFMONKEY's PDFMONKEY_LIST_TEMPLATES tool input.
 */
type PDFMONKEY_LIST_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number to return (1-indexed)
   * @default null
   */
  page: number | null;
  /**
   * Q[Folders]
   * @description Comma-separated folder IDs to filter templates; use 'none' to list only those in the root folder
   * @default null
   */
  "q[folders]": string | null;
  /**
   * Q[Workspace Id]
   * @description The workspace ID to list templates from
   */
  "q[workspaceId]"?: string;
  /**
   * Sort
   * @description Attribute by which to sort results
   * @default null
   * @enum {string|null}
   */
  sort: "identifier" | "created_at" | "updated_at" | null;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_LIST_TEMPLATES tool output.
 */
type PDFMONKEY_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Template Cards
       * @description List of document template cards
       */
      document_template_cards: {
          /**
           * App Id
           * @description Workspace (application) UUID
           */
          app_id: string;
          /**
           * Auth Token
           * @description Auth token for template usage
           */
          auth_token: string;
          /**
           * Created At
           * @description ISO timestamp when created
           */
          created_at: string;
          /**
           * Edition Mode
           * @description Edition mode of the template card
           */
          edition_mode: string;
          /**
           * Id
           * @description Template card UUID
           */
          id: string;
          /**
           * Identifier
           * @description Unique template identifier
           */
          identifier: string;
          /**
           * Is Draft
           * @description Whether this template is a draft
           */
          is_draft: boolean;
          /**
           * Pdf Engine Deprecated On
           * @description ISO timestamp when engine was deprecated, if any
           * @default null
           */
          pdf_engine_deprecated_on: string | null;
          /**
           * Pdf Engine Name
           * @description Name of the PDF engine used
           */
          pdf_engine_name: string;
          /**
           * Template Folder Id
           * @description Folder UUID containing this template, if any
           * @default null
           */
          template_folder_id: string | null;
          /**
           * Template Folder Identifier
           * @description Identifier of the folder containing this template
           * @default null
           */
          template_folder_identifier: string | null;
          /**
           * Updated At
           * @description ISO timestamp when last updated
           */
          updated_at: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Current Page
           * @description Current page number
           */
          current_page: number;
          /**
           * Next Page
           * @description Next page number, if available
           * @default null
           */
          next_page: number | null;
          /**
           * Prev Page
           * @description Previous page number, if available
           * @default null
           */
          prev_page: number | null;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          total_pages: number;
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
 * Type of PDFMONKEY's PDFMONKEY_LIST_WORKSPACES tool input.
 */
type PDFMONKEY_LIST_WORKSPACES_INPUT = object;

/**
 * Type of PDFMONKEY's PDFMONKEY_LIST_WORKSPACES tool output.
 */
type PDFMONKEY_LIST_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Applications
       * @description List of workspaces (applications) available to the user
       */
      applications: {
          /**
           * Id
           * @description Unique identifier of the workspace (application)
           */
          id: string;
          /**
           * Name
           * @description Name of the workspace (application)
           */
          name: string;
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
 * Type of PDFMONKEY's PDFMONKEY_PREVIEW_DOCUMENT tool input.
 */
type PDFMONKEY_PREVIEW_DOCUMENT_INPUT = {
  /**
   * Id
   * @description UUID of the document to retrieve preview for
   */
  id?: string;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_PREVIEW_DOCUMENT tool output.
 */
type PDFMONKEY_PREVIEW_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Preview Url
       * Format: uri
       * @description URL to embed the document preview in a PDF viewer (iframe)
       */
      preview_url: string;
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
 * Type of PDFMONKEY's PDFMONKEY_PREVIEW_TEMPLATE tool input.
 */
type PDFMONKEY_PREVIEW_TEMPLATE_INPUT = {
  /**
   * Preview Url
   * @description Preview URL for draft template fetched from the Template object's `preview_url` attribute. Use this full URL to retrieve the PDF preview.
   */
  preview_url?: string;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_PREVIEW_TEMPLATE tool output.
 */
type PDFMONKEY_PREVIEW_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Downloaded PDF file content as a file download.
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
 * Type of PDFMONKEY's PDFMONKEY_UPDATE_DOCUMENT tool input.
 */
type PDFMONKEY_UPDATE_DOCUMENT_INPUT = {
  /**
   * Document
   * @description Document update parameters wrapper.
   */
  document?: {
      /**
       * Document Template Id
       * Format: uuid
       * @description UUID of the source template to use when updating the document.
       * @default null
       */
      document_template_id: string | null;
      /**
       * Meta
       * @description Arbitrary metadata; object or JSON string of a single object.
       * @default null
       */
      meta: {
          [key: string]: unknown;
      } | null;
      /**
       * Payload
       * @description Data for generation; object or JSON string of a single object.
       * @default null
       */
      payload: {
          [key: string]: unknown;
      } | null;
      /**
       * Status
       * @description Use 'pending' to trigger regeneration; default is no change.
       * @default null
       * @enum {string|null}
       */
      status: "draft" | "pending" | null;
  };
  /**
   * Id
   * @description UUID of the document to update
   */
  id?: string;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_UPDATE_DOCUMENT tool output.
 */
type PDFMONKEY_UPDATE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document
       * @description Updated Document resource.
       */
      document: {
          /**
           * App Id
           * Format: uuid
           * @description Workspace (app) ID.
           */
          app_id: string;
          /**
           * Checksum
           * @description Internal checksum for previews.
           */
          checksum: string;
          /**
           * Created At
           * Format: date-time
           * @description Creation time (ISO 8601).
           */
          created_at: string;
          /**
           * Document Template Id
           * Format: uuid
           * @description Template ID used.
           */
          document_template_id: string;
          /**
           * Download Url
           * Format: uri
           * @description Download link valid for 1 hour or null if not generated.
           * @default null
           */
          download_url: string | null;
          /**
           * Failure Cause
           * @description Failure reason if any.
           * @default null
           */
          failure_cause: string | null;
          /**
           * Filename
           * @description Generated filename on success.
           * @default null
           */
          filename: string | null;
          /**
           * Generation Logs
           * @description Logs during generation.
           */
          generation_logs?: {
              /**
               * Message
               * @description Log message.
               */
              message: string;
              /**
               * Timestamp
               * Format: date-time
               * @description Log timestamp.
               */
              timestamp: string;
              /**
               * Type
               * @description Log type.
               * @enum {string}
               */
              type: "info" | "error";
          }[];
          /**
           * Id
           * Format: uuid
           * @description Unique document ID.
           */
          id: string;
          /**
           * Meta
           * @description Document metadata; object or JSON string.
           * @default null
           */
          meta: {
              [key: string]: unknown;
          } | null;
          /**
           * Payload
           * @description Payload used; object or JSON string.
           * @default null
           */
          payload: {
              [key: string]: unknown;
          } | null;
          /**
           * Preview Url
           * Format: uri
           * @description Preview embed URL (not download).
           * @default null
           */
          preview_url: string | null;
          /**
           * Public Share Link
           * Format: uri
           * @description Public share link if enabled.
           * @default null
           */
          public_share_link: string | null;
          /**
           * Status
           * @description Current status of the document.
           */
          status: string;
          /**
           * Updated At
           * Format: date-time
           * @description Last update time (ISO 8601).
           */
          updated_at: string;
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
 * Type of PDFMONKEY's PDFMONKEY_UPDATE_TEMPLATE tool input.
 */
type PDFMONKEY_UPDATE_TEMPLATE_INPUT = {
  /**
   * App Id
   * @description Workspace ID
   */
  app_id?: string;
  /**
   * Body
   * @description Published HTML+Liquid body used to generate documents
   * @default null
   */
  body: string | null;
  /**
   * Body Draft
   * @description Draft HTML+Liquid body used for preview
   * @default null
   */
  body_draft: string | null;
  /**
   * Edition Mode
   * @enum {string|null}
   */
  edition_mode?: "code" | "visual" | null;
  /**
   * Id
   * @description UUID of the document template to update
   */
  id?: string;
  /**
   * Identifier
   * @description Human-readable name of the template
   */
  identifier?: string;
  /**
   * Pdf Engine Draft Id
   * @description PDF engine UUID used to preview changes
   * @default null
   */
  pdf_engine_draft_id: string | null;
  /**
   * Pdf Engine Id
   * @description PDF engine UUID used to generate documents
   * @default null
   */
  pdf_engine_id: string | null;
  /**
   * Preview Url
   * @description Draft preview URL (can be embedded)
   * @default null
   */
  preview_url: string | null;
  /**
   * Sample Data
   * @description Sample data for reverting changes
   * @default null
   */
  sample_data: string | null;
  /**
   * Sample Data Draft
   * @description Draft sample data for preview
   * @default null
   */
  sample_data_draft: string | null;
  /**
   * Scss Style
   * @description Published (S)CSS used to generate documents
   * @default null
   */
  scss_style: string | null;
  /**
   * Scss Style Draft
   * @description Draft (S)CSS used for preview
   * @default null
   */
  scss_style_draft: string | null;
  /**
   * Settings
   * @description Printing settings for published template
   * @default null
   */
  settings: {
      /**
       * Footer
       * @description Footer settings
       */
      footer: {
          /**
           * Center
           * @description Center section content
           * @default null
           */
          center: string | null;
          /**
           * Left
           * @description Left section content
           * @default null
           */
          left: string | null;
          /**
           * Right
           * @description Right section content
           * @default null
           */
          right: string | null;
      };
      /**
       * Header
       * @description Header settings
       */
      header: {
          /**
           * Center
           * @description Center section content
           * @default null
           */
          center: string | null;
          /**
           * Left
           * @description Left section content
           * @default null
           */
          left: string | null;
          /**
           * Right
           * @description Right section content
           * @default null
           */
          right: string | null;
      };
      /**
       * Inject Javascript
       * @description Whether to inject custom JavaScript
       * @default false
       */
      inject_javascript: boolean;
      /**
       * Margin
       * @description Page margins
       */
      margin: {
          /**
           * Bottom
           * @description Bottom margin in mm
           */
          bottom: number;
          /**
           * Left
           * @description Left margin in mm
           */
          left: number;
          /**
           * Right
           * @description Right margin in mm
           */
          right: number;
          /**
           * Top
           * @description Top margin in mm
           */
          top: number;
      };
      /**
       * Orientation
       * @description Page orientation
       * @enum {string}
       */
      orientation: "portrait" | "landscape";
      /**
       * Paper Format
       * @description Paper format
       * @enum {string}
       */
      paper_format: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "letter" | "custom";
      /**
       * Paper Height
       * @description Custom paper height in mm (required if format is custom)
       * @default null
       */
      paper_height: number | null;
      /**
       * Paper Width
       * @description Custom paper width in mm (required if format is custom)
       * @default null
       */
      paper_width: number | null;
      /**
       * Use Emojis
       * @description Whether to render emojis in the PDF
       * @default false
       */
      use_emojis: boolean;
      /**
       * Use Paged
       * @description Use paged rendering mode (only effective with PDF Engine v3)
       * @default false
       */
      use_paged: boolean;
  } | null;
  /**
   * Settings
   * @description Printing settings for draft preview
   * @default null
   */
  settings_draft: {
      /**
       * Footer
       * @description Footer settings
       */
      footer: {
          /**
           * Center
           * @description Center section content
           * @default null
           */
          center: string | null;
          /**
           * Left
           * @description Left section content
           * @default null
           */
          left: string | null;
          /**
           * Right
           * @description Right section content
           * @default null
           */
          right: string | null;
      };
      /**
       * Header
       * @description Header settings
       */
      header: {
          /**
           * Center
           * @description Center section content
           * @default null
           */
          center: string | null;
          /**
           * Left
           * @description Left section content
           * @default null
           */
          left: string | null;
          /**
           * Right
           * @description Right section content
           * @default null
           */
          right: string | null;
      };
      /**
       * Inject Javascript
       * @description Whether to inject custom JavaScript
       * @default false
       */
      inject_javascript: boolean;
      /**
       * Margin
       * @description Page margins
       */
      margin: {
          /**
           * Bottom
           * @description Bottom margin in mm
           */
          bottom: number;
          /**
           * Left
           * @description Left margin in mm
           */
          left: number;
          /**
           * Right
           * @description Right margin in mm
           */
          right: number;
          /**
           * Top
           * @description Top margin in mm
           */
          top: number;
      };
      /**
       * Orientation
       * @description Page orientation
       * @enum {string}
       */
      orientation: "portrait" | "landscape";
      /**
       * Paper Format
       * @description Paper format
       * @enum {string}
       */
      paper_format: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "letter" | "custom";
      /**
       * Paper Height
       * @description Custom paper height in mm (required if format is custom)
       * @default null
       */
      paper_height: number | null;
      /**
       * Paper Width
       * @description Custom paper width in mm (required if format is custom)
       * @default null
       */
      paper_width: number | null;
      /**
       * Use Emojis
       * @description Whether to render emojis in the PDF
       * @default false
       */
      use_emojis: boolean;
      /**
       * Use Paged
       * @description Use paged rendering mode (only effective with PDF Engine v3)
       * @default false
       */
      use_paged: boolean;
  } | null;
  /**
   * Template Folder Id
   * @description Template folder UUID or null
   * @default null
   */
  template_folder_id: string | null;
  /**
   * Ttl
   * @description Auto-deletion TTL for generated documents (seconds), e.g., 300, 1200, 3600, etc.
   * @default null
   */
  ttl: number | null;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_UPDATE_TEMPLATE tool output.
 */
type PDFMONKEY_UPDATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Template
       * @description Updated document template object
       */
      document_template: {
          /**
           * App Id
           * @description Workspace ID
           */
          app_id: string;
          /**
           * Auth Token
           * @description Token for document generation calls
           */
          auth_token: string;
          /**
           * Body
           * @description Published HTML+Liquid body
           */
          body: string;
          /**
           * Body Draft
           * @description Draft HTML+Liquid body
           */
          body_draft: string;
          /**
           * Checksum
           * @description Content checksum for change detection
           */
          checksum: string;
          /**
           * Created At
           * @description ISO8601 creation timestamp
           */
          created_at: string;
          /**
           * Edition Mode
           * @description Edition mode of the template
           * @enum {string}
           */
          edition_mode: "code" | "visual";
          /**
           * Id
           * @description Template UUID
           */
          id: string;
          /**
           * Identifier
           * @description Human-readable name of the template
           */
          identifier: string;
          /**
           * Pdf Engine Draft Id
           * @description PDF engine UUID used for preview
           * @default null
           */
          pdf_engine_draft_id: string | null;
          /**
           * Pdf Engine Id
           * @description PDF engine UUID used for rendering
           */
          pdf_engine_id: string;
          /**
           * Preview Url
           * @description Draft preview URL
           */
          preview_url: string;
          /**
           * Sample Data
           * @description Sample data JSON
           */
          sample_data: string;
          /**
           * Sample Data Draft
           * @description Draft sample data JSON
           */
          sample_data_draft: string;
          /**
           * Scss Style
           * @description Published (S)CSS style
           */
          scss_style: string;
          /**
           * Scss Style Draft
           * @description Draft (S)CSS style
           */
          scss_style_draft: string;
          /**
           * Settings
           * @description Printing settings for published template
           */
          settings: {
              /**
               * Footer
               * @description Footer settings
               */
              footer: {
                  /**
                   * Center
                   * @description Center section content
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left section content
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right section content
                   * @default null
                   */
                  right: string | null;
              };
              /**
               * Header
               * @description Header settings
               */
              header: {
                  /**
                   * Center
                   * @description Center section content
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left section content
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right section content
                   * @default null
                   */
                  right: string | null;
              };
              /**
               * Inject Javascript
               * @description Whether to inject custom JavaScript
               * @default false
               */
              inject_javascript: boolean;
              /**
               * Margin
               * @description Page margins
               */
              margin: {
                  /**
                   * Bottom
                   * @description Bottom margin in mm
                   */
                  bottom: number;
                  /**
                   * Left
                   * @description Left margin in mm
                   */
                  left: number;
                  /**
                   * Right
                   * @description Right margin in mm
                   */
                  right: number;
                  /**
                   * Top
                   * @description Top margin in mm
                   */
                  top: number;
              };
              /**
               * Orientation
               * @description Page orientation
               * @enum {string}
               */
              orientation: "portrait" | "landscape";
              /**
               * Paper Format
               * @description Paper format
               * @enum {string}
               */
              paper_format: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "letter" | "custom";
              /**
               * Paper Height
               * @description Custom paper height in mm (required if format is custom)
               * @default null
               */
              paper_height: number | null;
              /**
               * Paper Width
               * @description Custom paper width in mm (required if format is custom)
               * @default null
               */
              paper_width: number | null;
              /**
               * Use Emojis
               * @description Whether to render emojis in the PDF
               * @default false
               */
              use_emojis: boolean;
              /**
               * Use Paged
               * @description Use paged rendering mode (only effective with PDF Engine v3)
               * @default false
               */
              use_paged: boolean;
          };
          /**
           * Settings Draft
           * @description Printing settings for draft preview
           */
          settings_draft: {
              /**
               * Footer
               * @description Footer settings
               */
              footer: {
                  /**
                   * Center
                   * @description Center section content
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left section content
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right section content
                   * @default null
                   */
                  right: string | null;
              };
              /**
               * Header
               * @description Header settings
               */
              header: {
                  /**
                   * Center
                   * @description Center section content
                   * @default null
                   */
                  center: string | null;
                  /**
                   * Left
                   * @description Left section content
                   * @default null
                   */
                  left: string | null;
                  /**
                   * Right
                   * @description Right section content
                   * @default null
                   */
                  right: string | null;
              };
              /**
               * Inject Javascript
               * @description Whether to inject custom JavaScript
               * @default false
               */
              inject_javascript: boolean;
              /**
               * Margin
               * @description Page margins
               */
              margin: {
                  /**
                   * Bottom
                   * @description Bottom margin in mm
                   */
                  bottom: number;
                  /**
                   * Left
                   * @description Left margin in mm
                   */
                  left: number;
                  /**
                   * Right
                   * @description Right margin in mm
                   */
                  right: number;
                  /**
                   * Top
                   * @description Top margin in mm
                   */
                  top: number;
              };
              /**
               * Orientation
               * @description Page orientation
               * @enum {string}
               */
              orientation: "portrait" | "landscape";
              /**
               * Paper Format
               * @description Paper format
               * @enum {string}
               */
              paper_format: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "letter" | "custom";
              /**
               * Paper Height
               * @description Custom paper height in mm (required if format is custom)
               * @default null
               */
              paper_height: number | null;
              /**
               * Paper Width
               * @description Custom paper width in mm (required if format is custom)
               * @default null
               */
              paper_width: number | null;
              /**
               * Use Emojis
               * @description Whether to render emojis in the PDF
               * @default false
               */
              use_emojis: boolean;
              /**
               * Use Paged
               * @description Use paged rendering mode (only effective with PDF Engine v3)
               * @default false
               */
              use_paged: boolean;
          };
          /**
           * Template Folder Id
           * @description Template folder UUID or null
           * @default null
           */
          template_folder_id: string | null;
          /**
           * Ttl
           * @description Auto-deletion TTL for generated documents (seconds)
           */
          ttl: number;
          /**
           * Updated At
           * @description ISO8601 last update timestamp
           */
          updated_at: string;
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
 * Type of PDFMONKEY's PDFMONKEY_VIEW_PUBLIC_SHARE_LINK tool input.
 */
type PDFMONKEY_VIEW_PUBLIC_SHARE_LINK_INPUT = {
  /**
   * Filename
   * @description Filename of the PDF to retrieve, including .pdf extension.
   */
  filename?: string;
  /**
   * Public Share Url
   * @description Optional full URL to download the PDF (e.g., a time-limited download_url from a DocumentCard). When provided, this URL is used directly instead of constructing the /share/:token/:filename path.
   * @default null
   */
  public_share_url: string | null;
  /**
   * Token
   * @description Public share token from the document's public_share_link property.
   */
  token?: string;
};

/**
 * Type of PDFMONKEY's PDFMONKEY_VIEW_PUBLIC_SHARE_LINK tool output.
 */
type PDFMONKEY_VIEW_PUBLIC_SHARE_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description Resolved URL used to fetch the PDF (public share or direct presigned URL).
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
 * Type map of all available tool input types for toolkit "PDFMONKEY".
 */
export type PDFMONKEY_TOOL_INPUTS = {
  CREATE_DOCUMENT: PDFMONKEY_CREATE_DOCUMENT_INPUT
  CREATE_DOCUMENT_SYNC: PDFMONKEY_CREATE_DOCUMENT_SYNC_INPUT
  CREATE_TEMPLATE: PDFMONKEY_CREATE_TEMPLATE_INPUT
  DELETE_DOCUMENT: PDFMONKEY_DELETE_DOCUMENT_INPUT
  DELETE_TEMPLATE: PDFMONKEY_DELETE_TEMPLATE_INPUT
  DOWNLOAD_DOCUMENT_FILE: PDFMONKEY_DOWNLOAD_DOCUMENT_FILE_INPUT
  GET_CURRENT_USER: PDFMONKEY_GET_CURRENT_USER_INPUT
  GET_DOCUMENT: PDFMONKEY_GET_DOCUMENT_INPUT
  GET_DOCUMENT_CARD: PDFMONKEY_GET_DOCUMENT_CARD_INPUT
  GET_TEMPLATE: PDFMONKEY_GET_TEMPLATE_INPUT
  LIST_DOCUMENT_CARDS: PDFMONKEY_LIST_DOCUMENT_CARDS_INPUT
  LIST_PDF_ENGINES: PDFMONKEY_LIST_PDF_ENGINES_INPUT
  LIST_TEMPLATES: PDFMONKEY_LIST_TEMPLATES_INPUT
  LIST_WORKSPACES: PDFMONKEY_LIST_WORKSPACES_INPUT
  PREVIEW_DOCUMENT: PDFMONKEY_PREVIEW_DOCUMENT_INPUT
  PREVIEW_TEMPLATE: PDFMONKEY_PREVIEW_TEMPLATE_INPUT
  UPDATE_DOCUMENT: PDFMONKEY_UPDATE_DOCUMENT_INPUT
  UPDATE_TEMPLATE: PDFMONKEY_UPDATE_TEMPLATE_INPUT
  VIEW_PUBLIC_SHARE_LINK: PDFMONKEY_VIEW_PUBLIC_SHARE_LINK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PDFMONKEY".
 */
export type PDFMONKEY_TOOL_OUTPUTS = {
  CREATE_DOCUMENT: PDFMONKEY_CREATE_DOCUMENT_OUTPUT
  CREATE_DOCUMENT_SYNC: PDFMONKEY_CREATE_DOCUMENT_SYNC_OUTPUT
  CREATE_TEMPLATE: PDFMONKEY_CREATE_TEMPLATE_OUTPUT
  DELETE_DOCUMENT: PDFMONKEY_DELETE_DOCUMENT_OUTPUT
  DELETE_TEMPLATE: PDFMONKEY_DELETE_TEMPLATE_OUTPUT
  DOWNLOAD_DOCUMENT_FILE: PDFMONKEY_DOWNLOAD_DOCUMENT_FILE_OUTPUT
  GET_CURRENT_USER: PDFMONKEY_GET_CURRENT_USER_OUTPUT
  GET_DOCUMENT: PDFMONKEY_GET_DOCUMENT_OUTPUT
  GET_DOCUMENT_CARD: PDFMONKEY_GET_DOCUMENT_CARD_OUTPUT
  GET_TEMPLATE: PDFMONKEY_GET_TEMPLATE_OUTPUT
  LIST_DOCUMENT_CARDS: PDFMONKEY_LIST_DOCUMENT_CARDS_OUTPUT
  LIST_PDF_ENGINES: PDFMONKEY_LIST_PDF_ENGINES_OUTPUT
  LIST_TEMPLATES: PDFMONKEY_LIST_TEMPLATES_OUTPUT
  LIST_WORKSPACES: PDFMONKEY_LIST_WORKSPACES_OUTPUT
  PREVIEW_DOCUMENT: PDFMONKEY_PREVIEW_DOCUMENT_OUTPUT
  PREVIEW_TEMPLATE: PDFMONKEY_PREVIEW_TEMPLATE_OUTPUT
  UPDATE_DOCUMENT: PDFMONKEY_UPDATE_DOCUMENT_OUTPUT
  UPDATE_TEMPLATE: PDFMONKEY_UPDATE_TEMPLATE_OUTPUT
  VIEW_PUBLIC_SHARE_LINK: PDFMONKEY_VIEW_PUBLIC_SHARE_LINK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PDFMONKEY toolkit.
 */
export const PDFMONKEY = {
  slug: "pdfmonkey",
  tools: {
    /**
     * Tool to create a Document. Use when you need to instantiate a PDF from a template; set status='pending' to queue immediate generation. Ensure valid `document_template_id` is provided.
     */
    CREATE_DOCUMENT: "PDFMONKEY_CREATE_DOCUMENT",
    /**
     * Tool to create a document and wait for generation to finish. Use when immediate PDF is needed.
     */
    CREATE_DOCUMENT_SYNC: "PDFMONKEY_CREATE_DOCUMENT_SYNC",
    /**
     * Tool to create a new Document Template. Use when you need to define a template with custom content, styles, and settings before generating PDF documents.
     */
    CREATE_TEMPLATE: "PDFMONKEY_CREATE_TEMPLATE",
    /**
     * Tool to delete a Document by its ID. Use when you need to permanently remove a document after confirming its ID. Returns 204 No Content on success.
     */
    DELETE_DOCUMENT: "PDFMONKEY_DELETE_DOCUMENT",
    /**
     * Tool to delete a document template by ID. Use when you need to remove obsolete templates after validation.
     */
    DELETE_TEMPLATE: "PDFMONKEY_DELETE_TEMPLATE",
    /**
     * Tool to download a generated PDF file via a presigned URL. Use after obtaining a valid download_url from the Document details endpoint. The URL expires after 1 hour; fetch a new URL upon expiry (403 Forbidden).
     */
    DOWNLOAD_DOCUMENT_FILE: "PDFMONKEY_DOWNLOAD_DOCUMENT_FILE",
    /**
     * Tool to retrieve details about the currently authenticated user. Use when you need account info (quota, plan, email, locale) after authentication.
     */
    GET_CURRENT_USER: "PDFMONKEY_GET_CURRENT_USER",
    /**
     * Tool to fetch a Document by its ID. Use when you need the full document record including payload, meta, logs, and download URL.
     */
    GET_DOCUMENT: "PDFMONKEY_GET_DOCUMENT",
    /**
     * Tool to fetch a DocumentCard by ID. Use when you have a DocumentCard ID and need its download URLs, status, and metadata. Use after generating or updating a DocumentCard.
     */
    GET_DOCUMENT_CARD: "PDFMONKEY_GET_DOCUMENT_CARD",
    /**
     * Tool to fetch a Document Template by ID. Use when you need the template's content, styles, settings, and preview URL.
     */
    GET_TEMPLATE: "PDFMONKEY_GET_TEMPLATE",
    /**
     * Tool to list DocumentCards. Use when you need to retrieve multiple DocumentCards with optional pagination and filtering by template, status, workspace, or update time.
     */
    LIST_DOCUMENT_CARDS: "PDFMONKEY_LIST_DOCUMENT_CARDS",
    /**
     * Tool to list available PDF engines with deprecation metadata. Use when you need to choose a rendering engine before generating PDFs.
     */
    LIST_PDF_ENGINES: "PDFMONKEY_LIST_PDF_ENGINES",
    /**
     * Tool to list template cards for a workspace. Use when you need to retrieve templates with optional folder filters, pagination, and sorting.
     */
    LIST_TEMPLATES: "PDFMONKEY_LIST_TEMPLATES",
    /**
     * Tool to list workspaces (applications). Use when you need all available workspaces for the authenticated user after login.
     */
    LIST_WORKSPACES: "PDFMONKEY_LIST_WORKSPACES",
    /**
     * Tool to open a document preview via a PDF.js viewer. Use when you need to embed the PDF preview in an iframe after obtaining the document ID.
     */
    PREVIEW_DOCUMENT: "PDFMONKEY_PREVIEW_DOCUMENT",
    /**
     * Tool to preview a template draft as a real PDF via the preview_url. Use after obtaining a template's preview_url.
     */
    PREVIEW_TEMPLATE: "PDFMONKEY_PREVIEW_TEMPLATE",
    /**
     * Tool to update a Document’s payload, meta, or status. Use when you need to modify a document properties or regenerate it.
     */
    UPDATE_DOCUMENT: "PDFMONKEY_UPDATE_DOCUMENT",
    /**
     * Tool to update a document template’s properties. Use when you need to modify an existing template’s content, styles, settings, engine, folder, or TTL.
     */
    UPDATE_TEMPLATE: "PDFMONKEY_UPDATE_TEMPLATE",
    /**
     * Tool to download a publicly shared PDF via its permanent share link. Use when the document's public_share_link is enabled to fetch the PDF file directly.
     */
    VIEW_PUBLIC_SHARE_LINK: "PDFMONKEY_VIEW_PUBLIC_SHARE_LINK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PDFMONKEY".
 */
export type PDFMONKEY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PDFMONKEY".
 */
export type PDFMONKEY_TRIGGER_EVENTS = {}
