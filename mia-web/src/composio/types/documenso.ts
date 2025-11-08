// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOCUMENSO's DOCUMENSO_CREATE_EMBEDDING_PRESIGN_TOKEN_V2_BETA tool input.
 */
type DOCUMENSO_CREATE_EMBEDDING_PRESIGN_TOKEN_V2_BETA_INPUT = {
  /**
   * Expires In Seconds
   * @description Custom lifetime of the presign token in seconds. If omitted, defaults to 3600 (1 hour).
   * @default null
   */
  expiresInSeconds: number | null;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_CREATE_EMBEDDING_PRESIGN_TOKEN_V2_BETA tool output.
 */
type DOCUMENSO_CREATE_EMBEDDING_PRESIGN_TOKEN_V2_BETA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expires In Seconds
       * @description Lifetime of the returned presign token in seconds.
       */
      expiresInSeconds: number;
      /**
       * Presign Token
       * @description The generated presign token for embedded authoring sessions.
       */
      presignToken: string;
      /**
       * Status Code
       * @description HTTP status code returned by the API.
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
 * Type of DOCUMENSO's DOCUMENSO_DELETE_DOCUMENT_FIELDS tool input.
 */
type DOCUMENSO_DELETE_DOCUMENT_FIELDS_INPUT = {
  /**
   * Document Id
   * @description Identifier of the document containing the fields to delete
   */
  documentId?: number | null;
  /**
   * Field Ids
   * @description Single field ID (int) for individual deletion, or a list of field IDs for batch deletion.
   */
  fieldIds?: number | null;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_DELETE_DOCUMENT_FIELDS tool output.
 */
type DOCUMENSO_DELETE_DOCUMENT_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Response data returned by the API on success
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Success
   * @description True if the delete operation succeeded (2xx status code)
   * @default null
   */
  success: boolean | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_DELETE_TEMPLATE tool input.
 */
type DOCUMENSO_DELETE_TEMPLATE_INPUT = {
  /**
   * Id
   * @description ID of the template to delete
   */
  id?: number;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_DELETE_TEMPLATE tool output.
 */
type DOCUMENSO_DELETE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Optional error payload returned by the API
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
      /**
       * Success
       * @description Indicates whether deletion was successful
       * @default null
       */
      success: boolean | null;
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
 * Type of DOCUMENSO's DOCUMENSO_DISTRIBUTE_DOCUMENT_V2 tool input.
 */
type DOCUMENSO_DISTRIBUTE_DOCUMENT_V2_INPUT = {
  /**
   * Document Id
   * @description Numeric ID of the document to distribute
   */
  documentId?: number;
  /**
   * Recipients
   * @description List of recipient IDs to target; omit to distribute to all pending recipients
   * @default null
   */
  recipients: number[] | null;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_DISTRIBUTE_DOCUMENT_V2 tool output.
 */
type DOCUMENSO_DISTRIBUTE_DOCUMENT_V2_OUTPUT = {
  /**
   * Data
   * @description Response payload data
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_DOWNLOAD_SIGNED_DOCUMENT tool input.
 */
type DOCUMENSO_DOWNLOAD_SIGNED_DOCUMENT_INPUT = {
  /**
   * File Name
   * @description Optional override for the downloaded filename. If not provided, uses the Content-Disposition header or defaults to `document_{id}.pdf`.
   * @default null
   */
  fileName: string | null;
  /**
   * Id
   * @description ID of the signed document to download.
   */
  id?: number | null;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_DOWNLOAD_SIGNED_DOCUMENT tool output.
 */
type DOCUMENSO_DOWNLOAD_SIGNED_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The downloaded signed document file content.
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
 * Type of DOCUMENSO's DOCUMENSO_DUPLICATE_DOCUMENT_V2 tool input.
 */
type DOCUMENSO_DUPLICATE_DOCUMENT_V2_INPUT = {
  /**
   * Document Id
   * @description Numeric ID of the document to duplicate
   */
  documentId?: number;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_DUPLICATE_DOCUMENT_V2 tool output.
 */
type DOCUMENSO_DUPLICATE_DOCUMENT_V2_OUTPUT = {
  /**
   * Data
   * @description Response payload data
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_FIND_DOCUMENTS_V2 tool input.
 */
type DOCUMENSO_FIND_DOCUMENTS_V2_INPUT = {
  /**
   * Order By
   * @description Field to sort results by.
   * @default null
   */
  orderBy: string | null;
  /**
   * Order Direction
   * @description Sort direction (asc or desc).
   * @default null
   * @enum {string|null}
   */
  orderDirection: "asc" | "desc" | null;
  /**
   * Page
   * @description Page number for pagination (must be >= 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of documents per page (must be >= 1).
   * @default null
   */
  perPage: number | null;
  /**
   * Query
   * @description Search term to filter document titles or metadata.
   * @default null
   */
  query: string | null;
  /**
   * Status
   * @description Filter documents by status.
   * @default null
   */
  status: string | null;
  /**
   * Team Id
   * @description Filter documents by team ID.
   * @default null
   */
  teamId: number | null;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_FIND_DOCUMENTS_V2 tool output.
 */
type DOCUMENSO_FIND_DOCUMENTS_V2_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description List of document objects.
       */
      documents: {
          /**
           * Completed At
           * @description Completion timestamp in ISO 8601 format, if applicable.
           * @default null
           */
          completedAt: string | null;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          createdAt: string;
          /**
           * Document Data Id
           * @description Identifier for the document data blob.
           */
          documentDataId: string;
          /**
           * External Id
           * @description External identifier of the document.
           */
          externalId: string;
          /**
           * Id
           * @description Unique identifier of the document.
           */
          id: number;
          /**
           * Status
           * @description Current status of the document.
           */
          status: string;
          /**
           * Team Id
           * @description Team ID associated with the document.
           */
          teamId: number;
          /**
           * Title
           * @description Title of the document.
           */
          title: string;
          /**
           * Updated At
           * @description Last updated timestamp in ISO 8601 format.
           */
          updatedAt: string;
          /**
           * User Id
           * @description User ID who owns the document.
           */
          userId: number;
      }[];
      /**
       * Total Pages
       * @description Total number of available pages.
       */
      totalPages: number;
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
 * Type of DOCUMENSO's DOCUMENSO_GET_TEMPLATE tool input.
 */
type DOCUMENSO_GET_TEMPLATE_INPUT = {
  /**
   * Id
   * @description ID of the template to fetch
   */
  id?: number;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_GET_TEMPLATE tool output.
 */
type DOCUMENSO_GET_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Optional error payload returned by the API
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
      /**
       * Template
       * @description Template object if found
       * @default null
       */
      template: {
          [key: string]: unknown;
      } | null;
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
 * Type of DOCUMENSO's DOCUMENSO_LIST_TEMPLATES tool input.
 */
type DOCUMENSO_LIST_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number for pagination (must be >= 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of templates per page (must be >= 1).
   * @default null
   */
  perPage: number | null;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_LIST_TEMPLATES tool output.
 */
type DOCUMENSO_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of template objects.
       */
      templates: {
          /**
           * Field
           * @description List of fields in the template.
           */
          Field: {
              /**
               * Height
               * @description Height of the field.
               */
              height: string;
              /**
               * Id
               * @description Field ID.
               */
              id: number;
              /**
               * Page
               * @description Page number where the field is located.
               */
              page: number;
              /**
               * Position X
               * @description X coordinate position of the field.
               */
              positionX: string;
              /**
               * Position Y
               * @description Y coordinate position of the field.
               */
              positionY: string;
              /**
               * Recipient Id
               * @description ID of the recipient for the field.
               */
              recipientId: number;
              /**
               * Type
               * @description Type of the field.
               */
              type: string;
              /**
               * Width
               * @description Width of the field.
               */
              width: string;
          }[];
          /**
           * Recipient
           * @description List of recipients for the template.
           */
          Recipient: {
              /**
               * Auth Options
               * @description Authentication options for the recipient.
               */
              authOptions: string;
              /**
               * Email
               * @description Email of the recipient.
               */
              email: string;
              /**
               * Id
               * @description Recipient ID for the template.
               */
              id: number;
              /**
               * Name
               * @description Name of the recipient.
               */
              name: string;
              /**
               * Role
               * @description Role of the recipient in the template.
               */
              role: string;
              /**
               * Signing Order
               * @description Signing order for the recipient.
               */
              signingOrder: number;
          }[];
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          createdAt: string;
          /**
           * Direct Link
           * @description Direct link details for the template.
           */
          directLink: {
              /**
               * Enabled
               * @description Whether the direct link is enabled.
               */
              enabled: boolean;
              /**
               * Token
               * @description Direct link token for the template.
               */
              token: string;
          };
          /**
           * External Id
           * @description External ID of the template.
           */
          externalId: string;
          /**
           * Id
           * @description Template ID.
           */
          id: number;
          /**
           * Team Id
           * @description ID of the team associated with the template.
           */
          teamId: number;
          /**
           * Template Document Data Id
           * @description ID of the template's document data.
           */
          templateDocumentDataId: string;
          /**
           * Title
           * @description Title of the template.
           */
          title: string;
          /**
           * Type
           * @description Type of the template.
           */
          type: string;
          /**
           * Updated At
           * @description Last updated timestamp in ISO 8601 format.
           */
          updatedAt: string;
          /**
           * User Id
           * @description ID of the user who created the template.
           */
          userId: number;
      }[];
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      totalPages: number;
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
 * Type of DOCUMENSO's DOCUMENSO_MOVE_DOCUMENT_V2 tool input.
 */
type DOCUMENSO_MOVE_DOCUMENT_V2_INPUT = {
  /**
   * Document Id
   * @description ID of the document to move
   */
  documentId?: string;
  /**
   * Team Id
   * @description ID of the target team to which the document will be moved
   */
  teamId?: string;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_MOVE_DOCUMENT_V2 tool output.
 */
type DOCUMENSO_MOVE_DOCUMENT_V2_OUTPUT = {
  /**
   * Data
   * @description Response payload data
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_REDISTRIBUTE_DOCUMENT_V2 tool input.
 */
type DOCUMENSO_REDISTRIBUTE_DOCUMENT_V2_INPUT = {
  /**
   * Document Id
   * @description Numeric ID of the document to redistribute
   */
  documentId?: number;
  /**
   * Recipients
   * @description List of recipient IDs (numeric) to redistribute the document to.
   */
  recipients?: number[];
};

/**
 * Type of DOCUMENSO's DOCUMENSO_REDISTRIBUTE_DOCUMENT_V2 tool output.
 */
type DOCUMENSO_REDISTRIBUTE_DOCUMENT_V2_OUTPUT = {
  /**
   * Data
   * @description Payload data returned by the API
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_REMOVE_TEAM_MEMBER_V1 tool input.
 */
type DOCUMENSO_REMOVE_TEAM_MEMBER_V1_INPUT = {
  /**
   * Member Id
   * @description ID of the member to remove from the team
   */
  member_id?: string;
  /**
   * Team Id
   * @description ID or slug of the team from which to remove the member
   */
  team_id?: string;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_REMOVE_TEAM_MEMBER_V1 tool output.
 */
type DOCUMENSO_REMOVE_TEAM_MEMBER_V1_OUTPUT = {
  /**
   * Data
   * @description Raw response payload if any
   * @default null
   */
  data: {
      [key: string]: string | number | boolean | {
          [key: string]: unknown;
      } | unknown[];
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Optional message returned by the API
   * @default null
   */
  message: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Success
   * @description Indicates whether removal was successful
   * @default null
   */
  success: boolean | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_RESEND_DOCUMENT_FOR_SIGNING_V1 tool input.
 */
type DOCUMENSO_RESEND_DOCUMENT_FOR_SIGNING_V1_INPUT = {
  /**
   * Body
   * @description Optional request body. Send {} as required by the API even if no fields are needed.
   */
  body?: {
      [key: string]: string | number | boolean | {
          [key: string]: unknown;
      } | unknown[];
  } | null;
  /**
   * Id
   * @description Numeric ID of the document to resend for signing
   */
  id?: number;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_RESEND_DOCUMENT_FOR_SIGNING_V1 tool output.
 */
type DOCUMENSO_RESEND_DOCUMENT_FOR_SIGNING_V1_OUTPUT = {
  /**
   * Data
   * @description Raw response payload if any
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Optional message returned by the API
   * @default null
   */
  message: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Success
   * @description Indicates whether the resend operation was successful
   * @default null
   */
  success: boolean | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_UPDATE_DOCUMENT_FIELDS tool input.
 */
type DOCUMENSO_UPDATE_DOCUMENT_FIELDS_INPUT = {
  /**
   * Document Id
   * @description Identifier of the document to update fields on
   */
  documentId?: number | null;
  /**
   * FieldUpdate
   * @description A single field update object. Must include the field `id`, and any other properties
   *     you wish to change.
   */
  updates?: {
      /**
       * Custom Text
       * @description Custom text to display inside this field
       * @default null
       */
      customText: string | null;
      /**
       * Field Meta
       * @description Additional arbitrary metadata for the field
       * @default null
       */
      fieldMeta: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description ID of the field to update
       */
      id: number;
      /**
       * Inserted
       * @description Whether the field has been newly inserted
       * @default null
       */
      inserted: boolean | null;
      /**
       * Page Height
       * @description Height of the field in document units
       * @default null
       */
      pageHeight: number | null;
      /**
       * Page Number
       * @description 1-based page number where the field appears
       * @default null
       */
      pageNumber: number | null;
      /**
       * Page Width
       * @description Width of the field in document units
       * @default null
       */
      pageWidth: number | null;
      /**
       * Page X
       * @description X coordinate from the left edge of the page
       * @default null
       */
      pageX: number | null;
      /**
       * Page Y
       * @description Y coordinate from the top edge of the page
       * @default null
       */
      pageY: number | null;
      /**
       * Recipient Id
       * @description ID of the recipient to assign this field to
       * @default null
       */
      recipientId: number | null;
      /**
       * Type
       * @description Type of the field (e.g., 'text', 'signature')
       * @default null
       */
      type: string | null;
  } | null;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_UPDATE_DOCUMENT_FIELDS tool output.
 */
type DOCUMENSO_UPDATE_DOCUMENT_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Response data returned by the API (typically updated field information as key-value pairs)
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Success
   * @description Whether the update operation succeeded
   * @default null
   */
  success: boolean | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_UPDATE_DOCUMENT_RECIPIENT tool input.
 */
type DOCUMENSO_UPDATE_DOCUMENT_RECIPIENT_INPUT = {
  /**
   * AuthOptions
   * @description Options for recipient authentication (enterprise only).
   * @default null
   */
  authOptions: {
      /**
       * Action Auth
       * @description One or more action-auth methods
       */
      actionAuth: string | null;
  } | null;
  /**
   * Email
   * @description Recipient's email address
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description Identifier of the document
   */
  id?: number | null;
  /**
   * Name
   * @description Recipient's name
   * @default null
   */
  name: string | null;
  /**
   * Recipient Id
   * @description Identifier of the recipient
   */
  recipientId?: number | null;
  /**
   * Role
   * @description Recipient's role
   * @default null
   * @enum {string|null}
   */
  role: "SIGNER" | "APPROVER" | "VIEWER" | "ASSISTANT" | "CC" | null;
  /**
   * Signing Order
   * @description Order in which the recipient should sign (0-based index)
   * @default null
   */
  signingOrder: number | null;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_UPDATE_DOCUMENT_RECIPIENT tool output.
 */
type DOCUMENSO_UPDATE_DOCUMENT_RECIPIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description Document ID
       * @default null
       */
      documentId: number | null;
      /**
       * Email
       * @description Recipient email
       */
      email: string;
      /**
       * Id
       * @description Recipient ID
       */
      id: number;
      /**
       * Name
       * @description Recipient name
       */
      name: string;
      /**
       * Read Status
       * @description Read status of the recipient
       */
      readStatus: string;
      /**
       * Role
       * @description Recipient role
       * @enum {string}
       */
      role: "SIGNER" | "APPROVER" | "VIEWER" | "ASSISTANT" | "CC";
      /**
       * Send Status
       * @description Send status of the recipient
       */
      sendStatus: string;
      /**
       * Signed At
       * @description ISO 8601 timestamp when recipient signed, null if not signed
       * @default null
       */
      signedAt: string | null;
      /**
       * Signing Order
       * @description Signing order of the recipient
       * @default null
       */
      signingOrder: number | null;
      /**
       * Signing Status
       * @description Signing status of the recipient
       */
      signingStatus: string;
      /**
       * Signing Url
       * @description URL for the recipient to sign/read the document
       */
      signingUrl: string;
      /**
       * Token
       * @description Unique token for recipient access
       */
      token: string;
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
 * Type of DOCUMENSO's DOCUMENSO_UPDATE_DOCUMENT_V2 tool input.
 */
type DOCUMENSO_UPDATE_DOCUMENT_V2_INPUT = {
  /**
   * Document Id
   * @description Numeric ID of the document to update
   */
  documentId?: number;
  /**
   * External Id
   * @description External or business identifier for the document
   * @default null
   */
  externalId: string | null;
  /**
   * Folder Id
   * @description ID of the folder to move the document into
   * @default null
   */
  folderId: number | null;
  /**
   * Team Id
   * @description ID of the team that owns the document
   * @default null
   */
  teamId: number | null;
  /**
   * Title
   * @description New title for the document
   * @default null
   */
  title: string | null;
  /**
   * Updates
   * @description Additional arbitrary metadata or options as a key-value map
   * @default null
   */
  updates: {
      [key: string]: unknown;
  } | null;
  /**
   * Visibility
   * @description Visibility setting of the document (e.g., 'private' or 'public')
   * @default null
   */
  visibility: string | null;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_UPDATE_DOCUMENT_V2 tool output.
 */
type DOCUMENSO_UPDATE_DOCUMENT_V2_OUTPUT = {
  /**
   * Data
   * @description Response payload data on successful update
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_USE_TEMPLATE_V2_BETA tool input.
 */
type DOCUMENSO_USE_TEMPLATE_V2_BETA_INPUT = {
  /**
   * Prefill Fields
   * @description Optional field values to prefill into the document
   * @default null
   */
  prefillFields: {
      /**
       * Id
       * @description Field ID from the template to prefill
       */
      id: number;
      /**
       * Label
       * @description Label of the field as defined on template
       * @default null
       */
      label: string | null;
      /**
       * Placeholder
       * @description Placeholder text for the field
       * @default null
       */
      placeholder: string | null;
      /**
       * Type
       * @description Field type, e.g. 'text', 'number', 'checkbox', 'radio', 'select'
       */
      type: string;
      /**
       * Value
       * @description Value to set for the field (string or list for multi-value fields)
       */
      value: string | null;
  }[] | null;
  /**
   * Recipients
   * @description List of recipients to populate in the document
   */
  recipients?: {
      /**
       * Email
       * @description Email address of the recipient
       */
      email: string;
      /**
       * Id
       * @description Recipient ID from the template
       */
      id: number;
      /**
       * Name
       * @description Name of the recipient
       */
      name: string;
      /**
       * Role
       * @description Role of the recipient, e.g., 'SIGNER'
       */
      role: string;
      /**
       * Signing Order
       * @description Order in which recipient signs the document
       */
      signingOrder: number;
  }[];
  /**
   * Template Id
   * @description ID of the template to use
   */
  templateId?: number;
};

/**
 * Type of DOCUMENSO's DOCUMENSO_USE_TEMPLATE_V2_BETA tool output.
 */
type DOCUMENSO_USE_TEMPLATE_V2_BETA_OUTPUT = {
  /**
   * Data
   * @description Full JSON response body returned by the API
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by Documenso
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "DOCUMENSO".
 */
export type DOCUMENSO_TOOL_INPUTS = {
  CREATE_EMBEDDING_PRESIGN_TOKEN_V2_BETA: DOCUMENSO_CREATE_EMBEDDING_PRESIGN_TOKEN_V2_BETA_INPUT
  DELETE_DOCUMENT_FIELDS: DOCUMENSO_DELETE_DOCUMENT_FIELDS_INPUT
  DELETE_TEMPLATE: DOCUMENSO_DELETE_TEMPLATE_INPUT
  DISTRIBUTE_DOCUMENT_V2: DOCUMENSO_DISTRIBUTE_DOCUMENT_V2_INPUT
  DOWNLOAD_SIGNED_DOCUMENT: DOCUMENSO_DOWNLOAD_SIGNED_DOCUMENT_INPUT
  DUPLICATE_DOCUMENT_V2: DOCUMENSO_DUPLICATE_DOCUMENT_V2_INPUT
  FIND_DOCUMENTS_V2: DOCUMENSO_FIND_DOCUMENTS_V2_INPUT
  GET_TEMPLATE: DOCUMENSO_GET_TEMPLATE_INPUT
  LIST_TEMPLATES: DOCUMENSO_LIST_TEMPLATES_INPUT
  MOVE_DOCUMENT_V2: DOCUMENSO_MOVE_DOCUMENT_V2_INPUT
  REDISTRIBUTE_DOCUMENT_V2: DOCUMENSO_REDISTRIBUTE_DOCUMENT_V2_INPUT
  REMOVE_TEAM_MEMBER_V1: DOCUMENSO_REMOVE_TEAM_MEMBER_V1_INPUT
  RESEND_DOCUMENT_FOR_SIGNING_V1: DOCUMENSO_RESEND_DOCUMENT_FOR_SIGNING_V1_INPUT
  UPDATE_DOCUMENT_FIELDS: DOCUMENSO_UPDATE_DOCUMENT_FIELDS_INPUT
  UPDATE_DOCUMENT_RECIPIENT: DOCUMENSO_UPDATE_DOCUMENT_RECIPIENT_INPUT
  UPDATE_DOCUMENT_V2: DOCUMENSO_UPDATE_DOCUMENT_V2_INPUT
  USE_TEMPLATE_V2_BETA: DOCUMENSO_USE_TEMPLATE_V2_BETA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOCUMENSO".
 */
export type DOCUMENSO_TOOL_OUTPUTS = {
  CREATE_EMBEDDING_PRESIGN_TOKEN_V2_BETA: DOCUMENSO_CREATE_EMBEDDING_PRESIGN_TOKEN_V2_BETA_OUTPUT
  DELETE_DOCUMENT_FIELDS: DOCUMENSO_DELETE_DOCUMENT_FIELDS_OUTPUT
  DELETE_TEMPLATE: DOCUMENSO_DELETE_TEMPLATE_OUTPUT
  DISTRIBUTE_DOCUMENT_V2: DOCUMENSO_DISTRIBUTE_DOCUMENT_V2_OUTPUT
  DOWNLOAD_SIGNED_DOCUMENT: DOCUMENSO_DOWNLOAD_SIGNED_DOCUMENT_OUTPUT
  DUPLICATE_DOCUMENT_V2: DOCUMENSO_DUPLICATE_DOCUMENT_V2_OUTPUT
  FIND_DOCUMENTS_V2: DOCUMENSO_FIND_DOCUMENTS_V2_OUTPUT
  GET_TEMPLATE: DOCUMENSO_GET_TEMPLATE_OUTPUT
  LIST_TEMPLATES: DOCUMENSO_LIST_TEMPLATES_OUTPUT
  MOVE_DOCUMENT_V2: DOCUMENSO_MOVE_DOCUMENT_V2_OUTPUT
  REDISTRIBUTE_DOCUMENT_V2: DOCUMENSO_REDISTRIBUTE_DOCUMENT_V2_OUTPUT
  REMOVE_TEAM_MEMBER_V1: DOCUMENSO_REMOVE_TEAM_MEMBER_V1_OUTPUT
  RESEND_DOCUMENT_FOR_SIGNING_V1: DOCUMENSO_RESEND_DOCUMENT_FOR_SIGNING_V1_OUTPUT
  UPDATE_DOCUMENT_FIELDS: DOCUMENSO_UPDATE_DOCUMENT_FIELDS_OUTPUT
  UPDATE_DOCUMENT_RECIPIENT: DOCUMENSO_UPDATE_DOCUMENT_RECIPIENT_OUTPUT
  UPDATE_DOCUMENT_V2: DOCUMENSO_UPDATE_DOCUMENT_V2_OUTPUT
  USE_TEMPLATE_V2_BETA: DOCUMENSO_USE_TEMPLATE_V2_BETA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOCUMENSO toolkit.
 */
export const DOCUMENSO = {
  slug: "documenso",
  tools: {
    /**
     * Tool to create a presign token for embedded authoring sessions. Use when initializing or renewing an embed session token.
     */
    CREATE_EMBEDDING_PRESIGN_TOKEN_V2_BETA: "DOCUMENSO_CREATE_EMBEDDING_PRESIGN_TOKEN_V2_BETA",
    /**
     * Tool to delete one or more fields from a document. Use when you have confirmed the field IDs to remove. Supports single-field and batch deletion.
     */
    DELETE_DOCUMENT_FIELDS: "DOCUMENSO_DELETE_DOCUMENT_FIELDS",
    /**
     * Tool to delete a template by ID.
     */
    DELETE_TEMPLATE: "DOCUMENSO_DELETE_TEMPLATE",
    /**
     * Tool to distribute a document for signing. Use when you need to send a document to all or specific pending recipients.
     */
    DISTRIBUTE_DOCUMENT_V2: "DOCUMENSO_DISTRIBUTE_DOCUMENT_V2",
    /**
     * Tool to download a signed document file. Use when you need to retrieve the finalized PDF after a document has been signed.
     */
    DOWNLOAD_SIGNED_DOCUMENT: "DOCUMENSO_DOWNLOAD_SIGNED_DOCUMENT",
    /**
     * Tool to duplicate a document. Use when you need to create an exact copy of an existing document. Ensure the source document ID is valid before calling.
     */
    DUPLICATE_DOCUMENT_V2: "DOCUMENSO_DUPLICATE_DOCUMENT_V2",
    /**
     * Tool to find documents. Use when retrieving a paginated list of documents for operations requiring a document ID.
     */
    FIND_DOCUMENTS_V2: "DOCUMENSO_FIND_DOCUMENTS_V2",
    /**
     * Tool to fetch a template by ID.
     */
    GET_TEMPLATE: "DOCUMENSO_GET_TEMPLATE",
    /**
     * Tool to list templates. Use when fetching available templates with optional pagination.
     */
    LIST_TEMPLATES: "DOCUMENSO_LIST_TEMPLATES",
    /**
     * Tool to move a document to a team. Use when transferring documents between personal and team accounts.
     */
    MOVE_DOCUMENT_V2: "DOCUMENSO_MOVE_DOCUMENT_V2",
    /**
     * Tool to redistribute a document to its pending recipients. Use when you need to re-send or re-distribute a sent document to recipients. Ensure the document has pending recipients or specific recipients selected before calling.
     */
    REDISTRIBUTE_DOCUMENT_V2: "DOCUMENSO_REDISTRIBUTE_DOCUMENT_V2",
    /**
     * Tool to remove a member from a team.
     */
    REMOVE_TEAM_MEMBER_V1: "DOCUMENSO_REMOVE_TEAM_MEMBER_V1",
    /**
     * Tool to re-send a document for signing via POST /api/v1/documents/{id}/resend.
     */
    RESEND_DOCUMENT_FOR_SIGNING_V1: "DOCUMENSO_RESEND_DOCUMENT_FOR_SIGNING_V1",
    /**
     * Tool to update one or more fields on a document. Use when you need to adjust properties of existing fields post-creation.
     */
    UPDATE_DOCUMENT_FIELDS: "DOCUMENSO_UPDATE_DOCUMENT_FIELDS",
    /**
     * Tool to update a document recipient. Use to change name, email, role, signing order or authentication options of a recipient.
     */
    UPDATE_DOCUMENT_RECIPIENT: "DOCUMENSO_UPDATE_DOCUMENT_RECIPIENT",
    /**
     * Tool to update document properties. Use after confirming the document ID is valid.
     */
    UPDATE_DOCUMENT_V2: "DOCUMENSO_UPDATE_DOCUMENT_V2",
    /**
     * Tool to create a document from a template. Use when you need to instantiate a template with recipients and optional prefills.
     */
    USE_TEMPLATE_V2_BETA: "DOCUMENSO_USE_TEMPLATE_V2_BETA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOCUMENSO".
 */
export type DOCUMENSO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOCUMENSO".
 */
export type DOCUMENSO_TRIGGER_EVENTS = {}
