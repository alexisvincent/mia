// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EVERSIGN's EVERSIGN_AUDIT_LOG tool input.
 */
type EVERSIGN_AUDIT_LOG_INPUT = {
  /**
   * Document Hash
   * @description The unique identifier (hash) of the document to retrieve history for.
   */
  document_hash?: string;
};

/**
 * Type of EVERSIGN's EVERSIGN_AUDIT_LOG tool output.
 */
type EVERSIGN_AUDIT_LOG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * History
       * @description Ordered list of audit events for the specified document.
       */
      history: {
          /**
           * Event Date
           * @description UTC timestamp of the event in ISO 8601 format.
           */
          event_date: string;
          /**
           * Event Type
           * @description Type of the event, e.g., 'view', 'signature_complete', 'download'.
           */
          event_type: string;
          /**
           * Message
           * @description Human-readable description of the event.
           */
          message: string;
          /**
           * User
           * @description Details about the user involved in an audit event.
           * @default null
           */
          user: ({
              /**
               * Email
               * @description Email address of the user.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Full name of the user.
               * @default null
               */
              name: string | null;
          } & {
              [key: string]: unknown;
          }) | null;
      }[];
      /**
       * Success
       * @description Whether the request completed successfully.
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
 * Type of EVERSIGN's EVERSIGN_CREATE_DOCUMENT tool input.
 */
type EVERSIGN_CREATE_DOCUMENT_INPUT = {
  /**
   * Embedded Signing
   * @description Whether signing URL should be embedded
   * @default false
   */
  embedded_signing: boolean | null;
  /**
   * Fields
   * @description Document fields for signers
   * @default null
   */
  fields: {
      /**
       * Height
       * @description Height in mm of the field
       * @default null
       */
      height: number | null;
      /**
       * Identifier
       * @description Unique field ID
       */
      identifier: string;
      /**
       * Page
       * @description 1-indexed page number
       */
      page: number;
      /**
       * Required
       * @description Whether this field must be completed before signing
       * @default false
       */
      required: boolean | null;
      /**
       * Signer
       * @description SignerInvite id the field applies to
       */
      signer: string;
      /**
       * Type
       * @description Type of field to render
       * @enum {string}
       */
      type: "text" | "checkbox" | "signature" | "date" | "textarea" | "dropdown";
      /**
       * Width
       * @description Width in mm of the field
       * @default null
       */
      width: number | null;
      /**
       * X
       * @description X coordinate in mm from top-left
       */
      x: number;
      /**
       * Y
       * @description Y coordinate in mm from top-left
       */
      y: number;
  }[] | null;
  /**
   * Files
   * @description Files to include in the document
   * @default null
   */
  files: {
      /**
       * File Base64
       * @description Base64-encoded file content (mutually exclusive with file_url)
       * @default null
       */
      file_base64: string | null;
      /**
       * File Url
       * Format: uri
       * @description Public URL for Eversign to fetch the file (mutually exclusive with file_base64)
       * @default null
       */
      file_url: string | null;
      /**
       * Name
       * @description Name for the file in the document
       */
      name: string;
  }[] | null;
  /**
   * Message
   * @description Email message sent to signers
   * @default null
   */
  message: string | null;
  /**
   * Meta
   * @description Arbitrary metadata key/value pairs
   * @default null
   */
  meta: {
      [key: string]: string;
  } | null;
  /**
   * Recipients
   * @description Non-signing recipients
   * @default null
   */
  recipients: {
      /**
       * Email
       * Format: email
       * @description Email of the recipient
       */
      email: string;
      /**
       * Name
       * @description Name of the recipient
       */
      name: string;
  }[] | null;
  /**
   * Redirect
   * Format: uri
   * @description URL to redirect signers after signing
   * @default null
   */
  redirect: string | null;
  /**
   * Sandbox
   * @description Whether to create in sandbox mode
   * @default false
   */
  sandbox: boolean | null;
  /**
   * Signer Invites
   * @description List of signers to invite
   */
  signer_invites?: {
      /**
       * Email
       * Format: email
       * @description Email address of the signer
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for this signer within the document
       */
      id: string;
      /**
       * Name
       * @description Full name of the signer
       */
      name: string;
      /**
       * Order
       * @description Signing order index if multiple signers sign sequentially
       * @default 0
       */
      order: number | null;
      /**
       * Role
       * @description Business role name for this signer
       * @default null
       */
      role: string | null;
  }[];
  /**
   * Title
   * @description Document title
   */
  title?: string;
};

/**
 * Type of EVERSIGN's EVERSIGN_CREATE_DOCUMENT tool output.
 */
type EVERSIGN_CREATE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Hash
       * @description Unique hash identifier of the document
       */
      document_hash: string;
      /**
       * Document Id
       * @description Numeric ID assigned by Eversign
       */
      document_id: number;
      /**
       * Error
       * @description Error message if creation failed
       * @default null
       */
      error: string | null;
      /**
       * Success
       * @description True if creation succeeded
       */
      success: boolean;
      /**
       * Url
       * Format: uri
       * @description URL where signers start signing
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
 * Type of EVERSIGN's EVERSIGN_CREATE_TEMPLATE tool input.
 */
type EVERSIGN_CREATE_TEMPLATE_INPUT = {
  /**
   * Expires
   * @description Expiration time in seconds (non-negative).
   * @default null
   */
  expires: number | null;
  /**
   * Fields
   * @description List of form fields to place on the template.
   * @default null
   */
  fields: {
      /**
       * Height
       * @description Height of the field in pixels.
       * @default null
       */
      height: number | null;
      /**
       * Name
       * @description Unique identifier for the field.
       */
      name: string;
      /**
       * Page
       * @description 1-based page number.
       */
      page: number;
      /**
       * Required
       * @description Whether this field is mandatory.
       * @default false
       */
      required: boolean | null;
      /**
       * Type
       * @description Type of field (e.g., 'text', 'date', 'signature').
       */
      type: string;
      /**
       * Width
       * @description Width of the field in pixels.
       * @default null
       */
      width: number | null;
      /**
       * X
       * @description X-coordinate on the page.
       */
      x: number;
      /**
       * Y
       * @description Y-coordinate on the page.
       */
      y: number;
  }[] | null;
  /**
   * Files
   * @description List of file objects to attach to the template.
   * @default null
   */
  files: {
      /**
       * File Base64
       * @description Inline file content encoded in base64.
       * @default null
       */
      file_base64: string | null;
      /**
       * File Hash
       * @description Previously uploaded file reference.
       * @default null
       */
      file_hash: string | null;
      /**
       * File Name
       * @description Name of the file; required when using file_base64.
       * @default null
       */
      file_name: string | null;
      /**
       * File Url
       * Format: uri
       * @description Remote link to the file.
       * @default null
       */
      file_url: string | null;
  }[] | null;
  /**
   * Recipients
   * @description List of recipients for signatures or CCs.
   * @default null
   */
  recipients: {
      /**
       * Email
       * Format: email
       * @description Email address of the recipient.
       */
      email: unknown;
      /**
       * Name
       * @description Full name of the recipient.
       */
      name: string;
      /**
       * Order
       * @description Signing order (0-indexed); lower numbers sign first.
       * @default null
       */
      order: number | null;
      /**
       * Role
       * @description Role identifier (e.g., 'signer', 'cc').
       */
      role: string;
  }[] | null;
  /**
   * ReminderConfig
   * @description Reminder settings for the template.
   * @default null
   */
  reminders: {
      /**
       * Reminder Cycle
       * @description Cycle in days between reminder emails.
       * @default null
       */
      reminder_cycle: number | null;
      /**
       * Reminder Overdue Email
       * @description Send an email when the document is overdue.
       * @default null
       */
      reminder_overdue_email: boolean | null;
  } | null;
  /**
   * Require All Signers
   * @description If true, all signers must complete before finalization.
   * @default null
   */
  require_all_signers: boolean | null;
  /**
   * Sandbox
   * @description If true, the template is created in the sandbox environment.
   * @default null
   */
  sandbox: boolean | null;
  /**
   * Template Message
   * @description Optional message body to associate with the template.
   * @default null
   */
  template_message: string | null;
  /**
   * Template Note
   * @description Optional internal notes for the template.
   * @default null
   */
  template_note: string | null;
  /**
   * Template Title
   * @description Title of the template to be created.
   */
  template_title?: string;
};

/**
 * Type of EVERSIGN's EVERSIGN_CREATE_TEMPLATE tool output.
 */
type EVERSIGN_CREATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Hash
       * @description Unique hash identifier of the created template document.
       */
      document_hash: string;
      /**
       * Document Id
       * @description ID of the created template.
       */
      document_id: string;
      /**
       * Message
       * @description API response message.
       */
      message: string;
      /**
       * Success
       * @description True if the template creation succeeded.
       */
      success: boolean;
      /**
       * Template
       * @description Full template object as returned by Eversign.
       */
      template: {
          [key: string]: unknown;
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
 * Type of EVERSIGN's EVERSIGN_DELETE_DOCUMENT_OR_TEMPLATE tool input.
 */
type EVERSIGN_DELETE_DOCUMENT_OR_TEMPLATE_INPUT = {
  /**
   * Document Hash
   * @description The unique identifier (hash) of the document or template to delete.
   */
  document_hash?: string;
};

/**
 * Type of EVERSIGN's EVERSIGN_DELETE_DOCUMENT_OR_TEMPLATE tool output.
 */
type EVERSIGN_DELETE_DOCUMENT_OR_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the delete operation was successful.
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
 * Type of EVERSIGN's EVERSIGN_GET_BULK_JOBS_LIST tool input.
 */
type EVERSIGN_GET_BULK_JOBS_LIST_INPUT = {
  /**
   * Limit
   * @description Number of bulk jobs to return (default 100)
   * @default 100
   */
  limit: number;
  /**
   * Offset
   * @description Number of bulk jobs to skip (default 0)
   * @default 0
   */
  offset: number;
};

/**
 * Type of EVERSIGN's EVERSIGN_GET_BULK_JOBS_LIST tool output.
 */
type EVERSIGN_GET_BULK_JOBS_LIST_OUTPUT = {
  /**
   * Data
   * @description List of bulk job objects
   */
  data?: {
      /**
       * Business Id
       * @description ID of the business that owns this job
       */
      business_id: number;
      /**
       * Created At
       * @description UTC timestamp (ISO 8601) when the job was created
       */
      created_at: string;
      /**
       * Document Count
       * @description Number of documents successfully created
       */
      document_count: number;
      /**
       * Document Title
       * @description Title of the source template used
       */
      document_title: string;
      /**
       * Entry Id
       * @description Unique database ID of the bulk job
       */
      entry_id: number;
      /**
       * Status
       * @description Current status of the bulk job
       * @enum {string}
       */
      status: "DOCUMENTS_CREATED" | "DOCUMENTS_CREATED_WITH_ERRORS";
      /**
       * Template Hash
       * @description Hash identifier of the template used
       */
      template_hash: string;
      /**
       * User Id
       * @description ID of the user who initiated the job
       */
      user_id: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination information
   */
  pagination?: {
      /**
       * Count
       * @description Number of items returned in current set
       */
      count: number;
      /**
       * Limit
       * @description Maximum number of items fetched
       */
      limit: number;
      /**
       * Offset
       * @description Number of items skipped
       */
      offset: number;
      /**
       * Total
       * @description Total number of items available
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EVERSIGN's EVERSIGN_LIST_BUSINESSES tool input.
 */
type EVERSIGN_LIST_BUSINESSES_INPUT = {
  /**
   * Business Id
   * @description Optional business ID to filter the listed businesses.
   * @default null
   */
  business_id: number | null;
};

/**
 * Type of EVERSIGN's EVERSIGN_LIST_BUSINESSES tool output.
 */
type EVERSIGN_LIST_BUSINESSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Businesses
       * @description List of businesses available to the user.
       */
      businesses: {
          /**
           * Id
           * @description Unique identifier of the business.
           */
          id: number;
          /**
           * Name
           * @description Name of the business.
           */
          name: string;
      }[];
      /**
       * Error
       * @description Error message if the request was not successful.
       * @default null
       */
      error: string | null;
      /**
       * Success
       * @description Indicates whether the request was successful.
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
 * Type of EVERSIGN's EVERSIGN_LIST_DOCUMENTS tool input.
 */
type EVERSIGN_LIST_DOCUMENTS_INPUT = {
  /**
   * From Date
   * @description Filter documents created after this date (YYYY-MM-DD).
   * @default null
   */
  from_date: string | null;
  /**
   * Page
   * @description Page number for paginated results, must be >=1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of documents per page.
   * @default 50
   */
  per_page: number | null;
  /**
   * Query
   * @description Filter documents by search phrase.
   * @default null
   */
  query: string | null;
  /**
   * Signer Email
   * @description Filter documents containing this signer’s email address.
   * @default null
   */
  signer_email: string | null;
  /**
   * To Date
   * @description Filter documents created before this date (YYYY-MM-DD).
   * @default null
   */
  to_date: string | null;
  /**
   * Type
   * @description Filter by document type.
   * @default all
   * @enum {string|null}
   */
  type: "all" | "waiting_for_me" | "completed" | "canceled" | "archived" | "draft" | "action_required" | null;
};

/**
 * Type of EVERSIGN's EVERSIGN_LIST_DOCUMENTS tool output.
 */
type EVERSIGN_LIST_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description List of documents returned by the API.
       */
      documents: {
          /**
           * Created
           * @description Document creation date in ISO 8601 format.
           */
          created: string;
          /**
           * Document Hash
           * @description Unique document identifier (hash).
           */
          document_hash: string;
          /**
           * Expire Date
           * @description Expiry date in YYYY-MM-DD format.
           * @default null
           */
          expire_date: string | null;
          /**
           * Expires
           * @description Whether the document expires.
           */
          expires: boolean;
          /**
           * Message
           * @description Optional document message.
           * @default null
           */
          message: string | null;
          /**
           * Reminder
           * @description Whether reminders are enabled for the document.
           */
          reminder: boolean;
          /**
           * Status
           * @description Current status of the document.
           */
          status: string;
          /**
           * Title
           * @description Document title.
           */
          title: string;
          /**
           * Updated
           * @description Last update date in ISO 8601 format.
           */
          updated: string;
      }[];
      /**
       * Page
       * @description Current page number returned.
       */
      page: number;
      /**
       * Success
       * @description Indicates whether the request was successful.
       */
      success: boolean;
      /**
       * Total
       * @description Total number of documents found.
       */
      total: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
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
 * Type of EVERSIGN's EVERSIGN_LIST_TEMPLATES tool input.
 */
type EVERSIGN_LIST_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number for paginated results; must be at least 1
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page; must be between 1 and 50
   * @default 20
   */
  per_page: number | null;
};

/**
 * Type of EVERSIGN's EVERSIGN_LIST_TEMPLATES tool output.
 */
type EVERSIGN_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Per Page
       * @description Number of results per page
       */
      per_page: number;
      /**
       * Templates
       * @description List of template objects
       */
      templates: {
          /**
           * Allow Decline
           * @description Whether signers can decline
           */
          allow_decline: boolean;
          /**
           * Created
           * @description Creation timestamp (UNIX epoch)
           */
          created: number;
          /**
           * Id
           * @description The unique template identifier
           */
          id: string;
          /**
           * Message
           * @description Default message text for the template
           */
          message: string;
          /**
           * Reminders
           * @description Number of reminders set
           */
          reminders: number;
          /**
           * Require All Signers
           * @description Whether all signers are required
           */
          require_all_signers: boolean;
          /**
           * Status
           * @description Current status of the template
           */
          status: string;
          /**
           * Title
           * @description Title of the template
           */
          title: string;
          /**
           * Updated
           * @description Last updated timestamp (UNIX epoch)
           */
          updated: number;
      }[];
      /**
       * Total
       * @description Total number of available templates
       */
      total: number;
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
 * Type of EVERSIGN's EVERSIGN_REASSIGN_SIGNER tool input.
 */
type EVERSIGN_REASSIGN_SIGNER_INPUT = {
  /**
   * Document Hash
   * @description The hash identifying the document
   */
  document_hash?: string;
  /**
   * New Signer Email
   * Format: email
   * @description Email address of the new signer
   */
  new_signer_email?: string;
  /**
   * New Signer Name
   * @description Full name of the new signer
   */
  new_signer_name?: string;
  /**
   * Signer Email
   * Format: email
   * @description Email address of the existing signer to be replaced
   */
  signer_email?: string;
};

/**
 * Type of EVERSIGN's EVERSIGN_REASSIGN_SIGNER tool output.
 */
type EVERSIGN_REASSIGN_SIGNER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ReassignSignerError
       * @description Detailed error information when reassignment fails.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Human-readable error message
           */
          message: string;
          /**
           * Type
           * @description Category of the error
           */
          type: string;
      } | null;
      /**
       * Success
       * @description Whether the signer was reassigned successfully
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
 * Type map of all available tool input types for toolkit "EVERSIGN".
 */
export type EVERSIGN_TOOL_INPUTS = {
  AUDIT_LOG: EVERSIGN_AUDIT_LOG_INPUT
  CREATE_DOCUMENT: EVERSIGN_CREATE_DOCUMENT_INPUT
  CREATE_TEMPLATE: EVERSIGN_CREATE_TEMPLATE_INPUT
  DELETE_DOCUMENT_OR_TEMPLATE: EVERSIGN_DELETE_DOCUMENT_OR_TEMPLATE_INPUT
  GET_BULK_JOBS_LIST: EVERSIGN_GET_BULK_JOBS_LIST_INPUT
  LIST_BUSINESSES: EVERSIGN_LIST_BUSINESSES_INPUT
  LIST_DOCUMENTS: EVERSIGN_LIST_DOCUMENTS_INPUT
  LIST_TEMPLATES: EVERSIGN_LIST_TEMPLATES_INPUT
  REASSIGN_SIGNER: EVERSIGN_REASSIGN_SIGNER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EVERSIGN".
 */
export type EVERSIGN_TOOL_OUTPUTS = {
  AUDIT_LOG: EVERSIGN_AUDIT_LOG_OUTPUT
  CREATE_DOCUMENT: EVERSIGN_CREATE_DOCUMENT_OUTPUT
  CREATE_TEMPLATE: EVERSIGN_CREATE_TEMPLATE_OUTPUT
  DELETE_DOCUMENT_OR_TEMPLATE: EVERSIGN_DELETE_DOCUMENT_OR_TEMPLATE_OUTPUT
  GET_BULK_JOBS_LIST: EVERSIGN_GET_BULK_JOBS_LIST_OUTPUT
  LIST_BUSINESSES: EVERSIGN_LIST_BUSINESSES_OUTPUT
  LIST_DOCUMENTS: EVERSIGN_LIST_DOCUMENTS_OUTPUT
  LIST_TEMPLATES: EVERSIGN_LIST_TEMPLATES_OUTPUT
  REASSIGN_SIGNER: EVERSIGN_REASSIGN_SIGNER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EVERSIGN toolkit.
 */
export const EVERSIGN = {
  slug: "eversign",
  tools: {
    /**
     * Tool to retrieve the audit log for a document. use after obtaining the document hash to view its full event history.
     */
    AUDIT_LOG: "EVERSIGN_AUDIT_LOG",
    /**
     * Tool to create a new document for signature. use after finalizing document details and signer list.
     */
    CREATE_DOCUMENT: "EVERSIGN_CREATE_DOCUMENT",
    /**
     * Tool to create a new template. use when you need to programmatically set up reusable document templates after confirming your business settings.
     */
    CREATE_TEMPLATE: "EVERSIGN_CREATE_TEMPLATE",
    /**
     * Tool to delete a document or template by its hash. use when you need to permanently remove a document or template.
     */
    DELETE_DOCUMENT_OR_TEMPLATE: "EVERSIGN_DELETE_DOCUMENT_OR_TEMPLATE",
    /**
     * Tool to retrieve a list of bulk jobs for a business. use when you need to view or paginate existing bulk jobs.
     */
    GET_BULK_JOBS_LIST: "EVERSIGN_GET_BULK_JOBS_LIST",
    /**
     * Tool to retrieve a list of businesses associated with your account. use when you need to fetch all businesses available to the authenticated user.
     */
    LIST_BUSINESSES: "EVERSIGN_LIST_BUSINESSES",
    /**
     * Tool to list documents for a business. use when you need to retrieve documents with optional filters after setting business id in query params.
     */
    LIST_DOCUMENTS: "EVERSIGN_LIST_DOCUMENTS",
    /**
     * Tool to list templates for a business with optional pagination. use when you need to retrieve a paginated list of templates.
     */
    LIST_TEMPLATES: "EVERSIGN_LIST_TEMPLATES",
    /**
     * Tool to reassign a signer to a new person. use when you need to replace an existing signer on a document before signing is complete. example: "reassign the signer alice@example.com on document abc123 to bob@example.com".
     */
    REASSIGN_SIGNER: "EVERSIGN_REASSIGN_SIGNER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EVERSIGN".
 */
export type EVERSIGN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EVERSIGN".
 */
export type EVERSIGN_TRIGGER_EVENTS = {}
