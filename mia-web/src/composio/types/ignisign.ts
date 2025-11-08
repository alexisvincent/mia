// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IGNISIGN's IGNISIGN_API_AUTHENTICATION tool input.
 */
type IGNISIGN_API_AUTHENTICATION_INPUT = {
  /**
   * App Env
   * @description Execution environment. Allowed values: DEVELOPMENT, STAGING, PRODUCTION.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description The application identifier (e.g., appId_d9cf31d7-6f48-4b11-8168-ded211c1296d).
   */
  appId?: string;
  /**
   * Secret
   * @description Secret tied to the application and environment; obtainable from Ignisign Console.
   */
  secret?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_API_AUTHENTICATION tool output.
 */
type IGNISIGN_API_AUTHENTICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jwt Token
       * @description JWT token to use as Bearer authorization in subsequent API calls.
       */
      jwtToken: string;
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
 * Type of IGNISIGN's IGNISIGN_CANCEL_SIGNATURE_REQUEST tool input.
 */
type IGNISIGN_CANCEL_SIGNATURE_REQUEST_INPUT = {
  /**
   * Request Id
   * @description Unique identifier of the signature request to cancel.
   */
  requestId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_CANCEL_SIGNATURE_REQUEST tool output.
 */
type IGNISIGN_CANCEL_SIGNATURE_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Signature Request Id
       * @description ID of the cancelled signature request.
       */
      signatureRequestId: string;
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
 * Type of IGNISIGN's IGNISIGN_CREATE_DOCUMENT tool input.
 */
type IGNISIGN_CREATE_DOCUMENT_INPUT = {
  /**
   * App Env
   * @description Target application environment
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description Application identifier
   */
  appId?: string;
  /**
   * Description
   * @description Human-readable description of the document
   * @default null
   */
  description: string | null;
  /**
   * External Id
   * @description Free-text external reference; not interpreted by IgniSign
   * @default null
   */
  externalId: string | null;
  /**
   * Label
   * @description Human-friendly label for the document
   * @default null
   */
  label: string | null;
  /**
   * Signature Request Id
   * @description ID of the signature request to associate the document with
   */
  signatureRequestId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_CREATE_DOCUMENT tool output.
 */
type IGNISIGN_CREATE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description Identifier of the initialized document
       */
      documentId: string;
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
 * Type of IGNISIGN's IGNISIGN_CREATE_SIGNER tool input.
 */
type IGNISIGN_CREATE_SIGNER_INPUT = {
  /**
   * App Env
   * @description The application environment.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description The application identifier.
   */
  appId?: string;
  /**
   * Birth Country
   * @description Birth country as ISO 3166-1 alpha-2 code; required if demanded by the signer profile.
   * @default null
   */
  birthCountry: string | null;
  /**
   * Birth Date
   * @description Birth date as YYYY-MM-DD; required if demanded by the signer profile.
   * @default null
   */
  birthDate: string | null;
  /**
   * Birth Place
   * @description Place of birth; required if demanded by the signer profile.
   * @default null
   */
  birthPlace: string | null;
  /**
   * Email
   * @description Signer’s email address; required if demanded by the signer profile.
   * @default null
   */
  email: string | null;
  /**
   * External Id
   * @description External reference; not used by Ignisign for identification.
   * @default null
   */
  externalId: string | null;
  /**
   * First Name
   * @description Signer’s first name; required if demanded by the signer profile.
   * @default null
   */
  firstName: string | null;
  /**
   * Last Name
   * @description Signer’s last name; required if demanded by the signer profile.
   * @default null
   */
  lastName: string | null;
  /**
   * Nationality
   * @description Nationality as ISO 3166-1 alpha-2 code; required if demanded by the signer profile.
   * @default null
   */
  nationality: string | null;
  /**
   * Phone Number
   * @description Phone number in E.164 format; required if demanded by the signer profile.
   * @default null
   */
  phoneNumber: string | null;
  /**
   * Signer Profile Id
   * @description Signer profile ID to which the signer must conform.
   */
  signerProfileId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_CREATE_SIGNER tool output.
 */
type IGNISIGN_CREATE_SIGNER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auth Secret
       * @description Signer authentication secret.
       */
      authSecret: string;
      /**
       * Entity Type
       * @description The signer’s entity type, e.g., NATURAL.
       */
      entityType: string;
      /**
       * Signer Id
       * @description The created or updated signer identifier.
       */
      signerId: string;
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
 * Type of IGNISIGN's IGNISIGN_CREATE_WEBHOOK_ENDPOINT tool input.
 */
type IGNISIGN_CREATE_WEBHOOK_ENDPOINT_INPUT = {
  /**
   * App Env
   * @description The application environment.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description The application identifier.
   */
  appId?: string;
  /**
   * Description
   * @description Human-readable description of the webhook endpoint.
   * @default null
   */
  description: string | null;
  /**
   * Url
   * @description The webhook endpoint URL to receive Ignisign events.
   */
  url?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_CREATE_WEBHOOK_ENDPOINT tool output.
 */
type IGNISIGN_CREATE_WEBHOOK_ENDPOINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Created At
       * Format: date-time
       * @description Creation timestamp in ISO 8601 format.
       */
      _createdAt: string;
      /**
       *  Id
       * @description Webhook identifier.
       */
      _id: string;
      /**
       * Description
       * @description Description of the webhook.
       * @default null
       */
      description: string | null;
      /**
       * Url
       * @description Target URL for event notifications.
       */
      url: string;
  }[];
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
 * Type of IGNISIGN's IGNISIGN_DELETE_DOCUMENT tool input.
 */
type IGNISIGN_DELETE_DOCUMENT_INPUT = {
  /**
   * Document Id
   * @description The unique identifier of the document to delete.
   */
  documentId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_DELETE_DOCUMENT tool output.
 */
type IGNISIGN_DELETE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description Identifier of the deleted document.
       */
      documentId: string;
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
 * Type of IGNISIGN's IGNISIGN_DELETE_SIGNATURE_REQUEST tool input.
 */
type IGNISIGN_DELETE_SIGNATURE_REQUEST_INPUT = {
  /**
   * Signature Request Id
   * @description Unique identifier of the signature request to delete.
   */
  signatureRequestId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_DELETE_SIGNATURE_REQUEST tool output.
 */
type IGNISIGN_DELETE_SIGNATURE_REQUEST_OUTPUT = {
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
 * Type of IGNISIGN's IGNISIGN_DELETE_SIGNER tool input.
 */
type IGNISIGN_DELETE_SIGNER_INPUT = {
  /**
   * App Env
   * @description The application environment.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description The application identifier (e.g., appId_d9cf31d7-6f48-4b11-8168-ded211c1296d).
   */
  appId?: string;
  /**
   * Signer Id
   * @description Unique identifier of the signer to revoke.
   */
  signerId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_DELETE_SIGNER tool output.
 */
type IGNISIGN_DELETE_SIGNER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Signer Id
       * @description The revoked signer ID returned on success.
       */
      signerId: string;
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
 * Type of IGNISIGN's IGNISIGN_DELETE_WEBHOOK_ENDPOINT tool input.
 */
type IGNISIGN_DELETE_WEBHOOK_ENDPOINT_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete.
   */
  webhookId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_DELETE_WEBHOOK_ENDPOINT tool output.
 */
type IGNISIGN_DELETE_WEBHOOK_ENDPOINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  }[];
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
 * Type of IGNISIGN's IGNISIGN_GET_APPLICATION_CONTEXT tool input.
 */
type IGNISIGN_GET_APPLICATION_CONTEXT_INPUT = {
  /**
   * App Id
   * @description Unique identifier of the Ignisign application
   */
  app_id?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_APPLICATION_CONTEXT tool output.
 */
type IGNISIGN_GET_APPLICATION_CONTEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Created At
       * @description Timestamp when the application was created
       */
      _createdAt: string;
      /**
       * App Id
       * @description Application identifier
       */
      appId: string;
      /**
       * App Name
       * @description Human-readable application name
       */
      appName: string;
      /**
       * Config
       * @description Global configuration for the application
       */
      config: {
          /**
           * App Id
           * @description Application identifier
           */
          appId: string;
          /**
           * Org Id
           * @description Organization identifier
           */
          orgId: string;
      };
      /**
       * Env Settings
       * @description Environment-specific settings keyed by environment name (e.g., DEVELOPMENT, STAGING, PRODUCTION)
       */
      envSettings: {
          [key: string]: {
              /**
               * Appid
               * @description Environment-specific application identifier
               */
              appId: string;
              /**
               * Orgid
               * @description Environment-specific organization identifier
               */
              orgId: string;
          };
      };
      /**
       * Org Id
       * @description Organization identifier
       */
      orgId: string;
      /**
       * Status
       * @description Application status, e.g., 'ACTIVE'
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
 * Type of IGNISIGN's IGNISIGN_GET_DOCUMENT_INFORMATION tool input.
 */
type IGNISIGN_GET_DOCUMENT_INFORMATION_INPUT = {
  /**
   * Document Id
   * @description The unique identifier of the document.
   */
  documentId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_DOCUMENT_INFORMATION tool output.
 */
type IGNISIGN_GET_DOCUMENT_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Created At
       * Format: date-time
       * @description Creation timestamp in ISO 8601 format.
       */
      _createdAt: string;
      /**
       *  Id
       * @description Document identifier.
       */
      _id: string;
      /**
       * App Env
       * @description Application environment.
       */
      appEnv: string;
      /**
       * App Id
       * @description Application identifier.
       */
      appId: string;
      /**
       * Data Json Content
       * @description JSON data content if used for data-based docs.
       * @default null
       */
      dataJsonContent: string | null;
      /**
       * Description
       * @description Document description.
       * @default null
       */
      description: string | null;
      /**
       * Document Hash
       * @description SHA-256 hash for the document, if provided.
       * @default null
       */
      documentHash: string | null;
      /**
       * Document Nature
       * @description Document nature (e.g., PDF).
       */
      documentNature: string;
      /**
       * Document Request Id
       * @description Related document request ID.
       */
      documentRequestId: string;
      /**
       * External Id
       * @description External identifier if set.
       * @default null
       */
      externalId: string | null;
      /**
       * File Name
       * @description Original file name.
       */
      fileName: string;
      /**
       * File Size
       * @description File size in bytes.
       */
      fileSize: number;
      /**
       * Label
       * @description Human-friendly label.
       * @default null
       */
      label: string | null;
      /**
       * Mime Type
       * @description MIME type of the file.
       */
      mimeType: string;
      /**
       * Related Document Id
       * @description ID of related document, if any.
       * @default null
       */
      relatedDocumentId: string | null;
      /**
       * Related Document Type
       * @description Type of related document (e.g., PDF).
       * @default null
       */
      relatedDocumentType: string | null;
      /**
       * Signature Request Id
       * @description Associated signature request ID.
       */
      signatureRequestId: string;
      /**
       * Status
       * @description Document status (e.g., CREATED).
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
 * Type of IGNISIGN's IGNISIGN_GET_MISSING_SIGNER_INPUTS tool input.
 */
type IGNISIGN_GET_MISSING_SIGNER_INPUTS_INPUT = {
  /**
   * App Env
   * @description The execution environment where requests are executed.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description The application identifier used to identify the application.
   */
  appId?: string;
  /**
   * Signature Profile Id
   * @description The unique identifier of the signature profile.
   */
  signatureProfileId?: string;
  /**
   * Signer Id
   * @description The unique identifier of the signer.
   */
  signerId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_MISSING_SIGNER_INPUTS tool output.
 */
type IGNISIGN_GET_MISSING_SIGNER_INPUTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Missing Inputs
       * @description List of missing input field names for this signer.
       */
      missingInputs: string[];
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
 * Type of IGNISIGN's IGNISIGN_GET_SIGNATURE_REQUESTS tool input.
 */
type IGNISIGN_GET_SIGNATURE_REQUESTS_INPUT = {
  /**
   * App Env
   * @description The application execution environment.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description The application identifier.
   */
  appId?: string;
  /**
   * Page
   * @description The page number to return (1-indexed).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description The number of items to return per page.
   * @default null
   */
  pageSize: number | null;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_SIGNATURE_REQUESTS tool output.
 */
type IGNISIGN_GET_SIGNATURE_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Signature Requests
       * @description List of signature requests for the requested page.
       */
      signatureRequests: {
          /**
           *  Id
           * @description Unique identifier of the signature request.
           */
          _id: string;
          /**
           * App Env
           * @description Application environment.
           */
          appEnv: string;
          /**
           * App Id
           * @description Application identifier.
           */
          appId: string;
          /**
           * Description
           * @description Description of the signature request.
           */
          description: string;
          /**
           * Document Ids
           * @description List of related document IDs.
           */
          documentIds: string[];
          /**
           * Expiration Date
           * Format: date-time
           * @description Expiration date in ISO 8601 format.
           */
          expirationDate: string;
          /**
           * Expiration Date Is Activated
           * @description Indicates if expiration is activated.
           */
          expirationDateIsActivated: boolean;
          /**
           * Language
           * @description Language code of the signature request.
           */
          language: string;
          /**
           * Signature Profile Id
           * @description Signature profile identifier.
           */
          signatureProfileId: string;
          /**
           * Status
           * @description Current status of the signature request.
           */
          status: string;
          /**
           * Title
           * @description Title of the signature request.
           */
          title: string;
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
 * Type of IGNISIGN's IGNISIGN_GET_SIGNATURE_REQUEST_DETAILS tool input.
 */
type IGNISIGN_GET_SIGNATURE_REQUEST_DETAILS_INPUT = {
  /**
   * Signature Request Id
   * @description The unique identifier of the signature request.
   */
  signatureRequestId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_SIGNATURE_REQUEST_DETAILS tool output.
 */
type IGNISIGN_GET_SIGNATURE_REQUEST_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Internal identifier of the signature request.
       * @default null
       */
      _id: string | null;
      /**
       * App Env
       * @description Application environment (e.g., DEVELOPMENT, STAGING, PRODUCTION).
       * @default null
       * @enum {string|null}
       */
      appEnv: "DEVELOPMENT" | "STAGING" | "PRODUCTION" | null;
      /**
       * App Id
       * @description Identifier of the application owning the request.
       * @default null
       */
      appId: string | null;
      /**
       * Description
       * @description Description of the signature request.
       * @default null
       */
      description: string | null;
      /**
       * Document Ids
       * @description List of document IDs associated with this request.
       * @default null
       */
      documentIds: string[] | null;
      /**
       * Expiration Date
       * Format: date-time
       * @description Expiration date of the request in ISO 8601 format.
       * @default null
       */
      expirationDate: string | null;
      /**
       * Expiration Date Is Activated
       * @description Indicates whether expiration is active for this request.
       * @default null
       */
      expirationDateIsActivated: boolean | null;
      /**
       * Language
       * @description Language code of the signature request (e.g., EN).
       * @default null
       */
      language: string | null;
      /**
       * Signature Profile Id
       * @description Identifier of the signature profile used by this request.
       * @default null
       */
      signatureProfileId: string | null;
      /**
       * Status
       * @description Current status of the signature request.
       * @default null
       */
      status: string | null;
      /**
       * Title
       * @description Title of the signature request.
       * @default null
       */
      title: string | null;
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
 * Type of IGNISIGN's IGNISIGN_GET_SIGNATURE_REQUEST_DOCUMENT tool input.
 */
type IGNISIGN_GET_SIGNATURE_REQUEST_DOCUMENT_INPUT = {
  /**
   * Document Id
   * @description Optional: specify a concrete documentId to download. If omitted, the first documentId found on the signature request will be used.
   * @default null
   */
  documentId: string | null;
  /**
   * Request Id
   * @description Unique identifier of the signature request.
   */
  requestId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_SIGNATURE_REQUEST_DOCUMENT tool output.
 */
type IGNISIGN_GET_SIGNATURE_REQUEST_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The binary content of the signature request document as a downloadable file.
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
 * Type of IGNISIGN's IGNISIGN_GET_SIGNATURE_REQUEST_STATUS tool input.
 */
type IGNISIGN_GET_SIGNATURE_REQUEST_STATUS_INPUT = {
  /**
   * Request Id
   * @description Unique identifier of the signature request to retrieve status for.
   */
  requestId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_SIGNATURE_REQUEST_STATUS tool output.
 */
type IGNISIGN_GET_SIGNATURE_REQUEST_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Current status of the specified signature request.
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
 * Type of IGNISIGN's IGNISIGN_GET_SIGNED_DOCUMENT tool input.
 */
type IGNISIGN_GET_SIGNED_DOCUMENT_INPUT = {
  /**
   * Request Id
   * @description Unique identifier of the signature request to download the signed document for.
   */
  requestId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_SIGNED_DOCUMENT tool output.
 */
type IGNISIGN_GET_SIGNED_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The downloaded document file (PDF format).
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
 * Type of IGNISIGN's IGNISIGN_GET_SIGNER_CREATION_CONSTRAINTS tool input.
 */
type IGNISIGN_GET_SIGNER_CREATION_CONSTRAINTS_INPUT = {
  /**
   * App Env
   * @description Execution environment where requests are executed.
   * @enum {string}
   */
  app_env?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description Application identifier used to identify the application.
   */
  app_id?: string;
  /**
   * Signature Profile Id
   * @description Unique identifier of the signature profile.
   */
  signature_profile_id?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_SIGNER_CREATION_CONSTRAINTS tool output.
 */
type IGNISIGN_GET_SIGNER_CREATION_CONSTRAINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Constraints
       * @description List of signer creation constraints
       */
      constraints: {
          /**
           * Inputs Needed
           * @description List of required input keys needed to create a compatible signer.
           */
          inputsNeeded: string[];
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
 * Type of IGNISIGN's IGNISIGN_GET_SIGNER_INPUTS tool input.
 */
type IGNISIGN_GET_SIGNER_INPUTS_INPUT = {
  /**
   * Request Id
   * @description Unique identifier of the signature request
   */
  requestId?: string;
  /**
   * Signer Id
   * @description Unique identifier of the signer whose inputs to retrieve
   */
  signerId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_SIGNER_INPUTS tool output.
 */
type IGNISIGN_GET_SIGNER_INPUTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Inputs
       * @description List of inputs provided by the signer
       */
      inputs: {
          /**
           * Created At
           * @description ISO-8601 timestamp when the signer submitted this input
           * @default null
           */
          createdAt: string | null;
          /**
           * File Url
           * @description URL to download the file if the input is a file
           * @default null
           */
          fileUrl: string | null;
          /**
           * Id
           * @description Identifier of the input field
           */
          id: string;
          /**
           * Name
           * @description Name or label of the input field
           */
          name: string;
          /**
           * Type
           * @description Type of the input provided by the signer
           * @enum {string}
           */
          type: "text" | "checkbox" | "date" | "file";
          /**
           * Value
           * @description Value provided by the signer (for non-file inputs)
           * @default null
           */
          value: string | null;
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
 * Type of IGNISIGN's IGNISIGN_GET_SIGNER_INPUT_CONSTRAINTS tool input.
 */
type IGNISIGN_GET_SIGNER_INPUT_CONSTRAINTS_INPUT = {
  /**
   * App Env
   * @description The execution environment where requests are executed.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description The application identifier used to identify the application.
   */
  appId?: string;
  /**
   * Signer Profile Id
   * @description The unique identifier of the signer profile.
   */
  signerProfileId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_SIGNER_INPUT_CONSTRAINTS tool output.
 */
type IGNISIGN_GET_SIGNER_INPUT_CONSTRAINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Constraints
       * @description List of signer input constraints.
       */
      constraints: {
          /**
           * Inputs Needed
           * @description List of required signer input identifiers (e.g., 'firstName').
           */
          inputsNeeded: string[];
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
 * Type of IGNISIGN's IGNISIGN_GET_SIGNER_PROFILE tool input.
 */
type IGNISIGN_GET_SIGNER_PROFILE_INPUT = {
  /**
   * App Env
   * @description Execution environment where requests are executed.
   * @enum {string}
   */
  app_env?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description Application identifier for the Ignisign application.
   */
  app_id?: string;
  /**
   * Signer Profile Id
   * @description Unique identifier of the signer profile to retrieve.
   */
  signerProfileId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_SIGNER_PROFILE tool output.
 */
type IGNISIGN_GET_SIGNER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_SIGNER_PROFILES tool input.
 */
type IGNISIGN_GET_SIGNER_PROFILES_INPUT = {
  /**
   * App Env
   * @description Application environment
   * @enum {string}
   */
  app_env?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description Application identifier
   */
  app_id?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_SIGNER_PROFILES tool output.
 */
type IGNISIGN_GET_SIGNER_PROFILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Profile identifier
       */
      _id: string;
      /**
       * App Env
       * @description Application environment
       */
      appEnv: string;
      /**
       * App Id
       * @description Application identifier
       */
      appId: string;
      /**
       * Auth Methods
       * @description Authentication methods
       */
      authMethods: string[];
      /**
       * Auth Session Enabled
       * @description Authentication session enabled flag
       */
      authSessionEnabled: boolean;
      /**
       * Created By Default
       * @description Flag if created by default
       */
      createdByDefault: boolean;
      /**
       * Default Language
       * @description Default language
       */
      defaultLanguage: string;
      /**
       * Document Request Activated
       * @description Document request activated flag
       */
      documentRequestActivated: boolean;
      /**
       * Document Types
       * @description Document types
       */
      documentTypes: string[];
      /**
       * Id Proofings
       * @description ID proofing methods
       */
      idProofings: string[];
      /**
       * Integration Mode
       * @description Integration mode
       */
      integrationMode: string;
      /**
       * Language Can Be Changed
       * @description Flag if language can be changed
       */
      languageCanBeChanged: boolean;
      /**
       * Name
       * @description Profile name
       */
      name: string;
      /**
       * Org Id
       * @description Organization identifier
       */
      orgId: string;
      /**
       * Signature Method Ref
       * @description Signature method reference
       */
      signatureMethodRef: string;
      /**
       * Statements Enabled
       * @description Statements enabled flag
       */
      statementsEnabled: boolean;
      /**
       * Status
       * @description Profile status
       */
      status: string;
      /**
       * Template Displayer Id
       * @description Template display identifier
       */
      templateDisplayerId: string;
  }[];
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
 * Type of IGNISIGN's IGNISIGN_GET_WEBHOOKS tool input.
 */
type IGNISIGN_GET_WEBHOOKS_INPUT = {
  /**
   * App Env
   * @description Execution environment for the application.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description The application identifier (e.g., appId_XXXX).
   */
  appId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_WEBHOOKS tool output.
 */
type IGNISIGN_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of configured webhook endpoints.
       */
      webhooks: {
          /**
           *  Created At
           * Format: date-time
           * @description Timestamp when the webhook endpoint was created.
           */
          _createdAt: string;
          /**
           *  Id
           * @description Unique identifier of the webhook endpoint.
           */
          _id: string;
          /**
           * Description
           * @description Optional human-readable description of this webhook endpoint.
           * @default null
           */
          description: string | null;
          /**
           * Url
           * @description The HTTP(S) URL to which Ignisign will send event notifications.
           */
          url: string;
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
 * Type of IGNISIGN's IGNISIGN_GET_WEBHOOK_DETAILS tool input.
 */
type IGNISIGN_GET_WEBHOOK_DETAILS_INPUT = {
  /**
   * App Env
   * @description Execution environment for the application.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description The application identifier (e.g., appId_XXXX).
   */
  appId?: string;
  /**
   * Webhook Id
   * @description Unique identifier of the webhook endpoint.
   */
  webhookId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_GET_WEBHOOK_DETAILS tool output.
 */
type IGNISIGN_GET_WEBHOOK_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Created At
       * Format: date-time
       * @description Timestamp when the webhook endpoint was created.
       */
      _createdAt: string;
      /**
       *  Id
       * @description Unique identifier of the webhook endpoint.
       */
      _id: string;
      /**
       * Description
       * @description Optional human-readable description of the webhook endpoint.
       * @default null
       */
      description: string | null;
      /**
       * Url
       * @description The HTTP(S) URL to which Ignisign will send event notifications.
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
 * Type of IGNISIGN's IGNISIGN_IGNISIGN_CLOSE_SIGNATURE_REQUEST tool input.
 */
type IGNISIGN_IGNISIGN_CLOSE_SIGNATURE_REQUEST_INPUT = {
  /**
   * Signature Request Id
   * @description Unique identifier of the signature request to close.
   */
  signatureRequestId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_IGNISIGN_CLOSE_SIGNATURE_REQUEST tool output.
 */
type IGNISIGN_IGNISIGN_CLOSE_SIGNATURE_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Signature Request Id
       * @description The closed signature request ID.
       */
      signatureRequestId: string;
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
 * Type of IGNISIGN's IGNISIGN_IGNISIGN_UPDATE_SIGNER tool input.
 */
type IGNISIGN_IGNISIGN_UPDATE_SIGNER_INPUT = {
  /**
   * App Env
   * @description Application environment.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description Application identifier.
   */
  appId?: string;
  /**
   * Signer Id
   * @description Unique identifier of the signer to update.
   */
  signerId?: string;
  /**
   * Signer Profile Id
   * @description Signer profile ID to apply; replaces signatureProfileId in v4.
   */
  signerProfileId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_IGNISIGN_UPDATE_SIGNER tool output.
 */
type IGNISIGN_IGNISIGN_UPDATE_SIGNER_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response for the updated signer.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IGNISIGN's IGNISIGN_INIT_SIGNATURE_REQUEST tool input.
 */
type IGNISIGN_INIT_SIGNATURE_REQUEST_INPUT = {
  /**
   * App Env
   * @description Target environment for the application
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description Application identifier
   */
  appId?: string;
  /**
   * Signature Profile Id
   * @description Signature profile ID to use for the request
   */
  signatureProfileId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_INIT_SIGNATURE_REQUEST tool output.
 */
type IGNISIGN_INIT_SIGNATURE_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Signature Request Id
       * @description The initialized signature request ID returned by Ignisign
       */
      signatureRequestId: string;
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
 * Type of IGNISIGN's IGNISIGN_LIST_DOCUMENTS tool input.
 */
type IGNISIGN_LIST_DOCUMENTS_INPUT = {
  /**
   * App Env
   * @description The application execution environment.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description The application identifier.
   */
  appId?: string;
  /**
   * Signature Request Id
   * @description Signature request whose documents to list.
   */
  signatureRequestId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_LIST_DOCUMENTS tool output.
 */
type IGNISIGN_LIST_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description List of document summaries attached to the signature request.
       */
      documents: {
          /**
           *  Created At
           * Format: date-time
           * @description Creation timestamp in ISO 8601 format.
           * @default null
           */
          _createdAt: string | null;
          /**
           *  Id
           * @description Unique identifier of the document.
           */
          _id: string;
          /**
           * App Env
           * @description Application environment.
           */
          appEnv: string;
          /**
           * App Id
           * @description Application identifier.
           */
          appId: string;
          /**
           * Document Nature
           * @description Nature of the document (e.g., PDF).
           * @default null
           */
          documentNature: string | null;
          /**
           * External Id
           * @description External identifier, if set.
           * @default null
           */
          externalId: string | null;
          /**
           * File Name
           * @description Original file name.
           * @default null
           */
          fileName: string | null;
          /**
           * File Size
           * @description Size of the document in bytes.
           * @default null
           */
          fileSize: number | null;
          /**
           * Mime Type
           * @description MIME type of the document.
           * @default null
           */
          mimeType: string | null;
          /**
           * Status
           * @description Current status of the document.
           * @default null
           */
          status: string | null;
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
 * Type of IGNISIGN's IGNISIGN_PROVIDE_DOCUMENT_CONTENT_DATA_JSON tool input.
 */
type IGNISIGN_PROVIDE_DOCUMENT_CONTENT_DATA_JSON_INPUT = {
  /**
   * Document Id
   * @description The unique identifier of the document.
   */
  documentId?: string;
  /**
   * Json Content
   * @description The JSON object that will be attached to the document.
   */
  jsonContent?: {
      [key: string]: unknown;
  };
};

/**
 * Type of IGNISIGN's IGNISIGN_PROVIDE_DOCUMENT_CONTENT_DATA_JSON tool output.
 */
type IGNISIGN_PROVIDE_DOCUMENT_CONTENT_DATA_JSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Created At
       * Format: date-time
       * @description Creation timestamp in ISO 8601 format.
       */
      _createdAt: string;
      /**
       *  Id
       * @description Document identifier.
       */
      _id: string;
      /**
       * App Env
       * @description Application execution environment.
       */
      appEnv: string;
      /**
       * App Id
       * @description Application identifier.
       */
      appId: string;
      /**
       * Data Json Content
       * @description Stored JSON content as string.
       */
      dataJsonContent: string;
      /**
       * Description
       * @description Document description.
       * @default null
       */
      description: string | null;
      /**
       * Document Hash
       * @description Document hash.
       */
      documentHash: string;
      /**
       * Document Nature
       * @description Document nature (e.g., PDF).
       */
      documentNature: string;
      /**
       * Document Request Id
       * @description Related document request ID.
       * @default null
       */
      documentRequestId: string | null;
      /**
       * External Id
       * @description External reference.
       * @default null
       */
      externalId: string | null;
      /**
       * File Name
       * @description Original file name.
       */
      fileName: string;
      /**
       * File Size
       * @description File size in bytes.
       */
      fileSize: number;
      /**
       * Label
       * @description Document label.
       * @default null
       */
      label: string | null;
      /**
       * Mime Type
       * @description MIME type.
       */
      mimeType: string;
      /**
       * Related Document Id
       * @description Related document ID.
       * @default null
       */
      relatedDocumentId: string | null;
      /**
       * Related Document Type
       * @description Type of related document.
       * @default null
       */
      relatedDocumentType: string | null;
      /**
       * Signature Request Id
       * @description Related signature request ID.
       * @default null
       */
      signatureRequestId: string | null;
      /**
       * Status
       * @description Document status.
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
 * Type of IGNISIGN's IGNISIGN_PROVIDE_DOCUMENT_CONTENT_FILE tool input.
 */
type IGNISIGN_PROVIDE_DOCUMENT_CONTENT_FILE_INPUT = {
  /**
   * Document Id
   * @description The unique identifier of the document to attach the file to.
   */
  documentId?: string;
  /**
   * FileUploadable
   * @description The file to upload as the document content (e.g., a PDF).
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
   * File Name
   * @description Optional override for the uploaded file name when using filePath.
   * @default null
   */
  fileName: string | null;
  /**
   * File Path
   * @description Absolute local file path to upload if `file` is not provided.
   * @default null
   */
  filePath: string | null;
  /**
   * File Url
   * @description HTTP URL to a file to fetch and upload if neither `file` nor `filePath` is provided.
   * @default null
   */
  fileUrl: string | null;
  /**
   * Mime Type
   * @description Optional override MIME type when using filePath. If not provided, attempts to guess.
   * @default null
   */
  mimeType: string | null;
};

/**
 * Type of IGNISIGN's IGNISIGN_PROVIDE_DOCUMENT_CONTENT_FILE tool output.
 */
type IGNISIGN_PROVIDE_DOCUMENT_CONTENT_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Created At
       * Format: date-time
       * @description Timestamp when the document was created.
       */
      _createdAt: string;
      /**
       *  Id
       * @description Unique identifier of the document.
       */
      _id: string;
      /**
       * App Env
       * @description Application environment.
       */
      appEnv: string;
      /**
       * App Id
       * @description Application identifier.
       */
      appId: string;
      /**
       * Data Json Content
       * @description JSON content attached to the document.
       * @default null
       */
      dataJsonContent: unknown;
      /**
       * Description
       * @description User-defined document description.
       * @default null
       */
      description: string | null;
      /**
       * Document Hash
       * @description Hash of the document content.
       * @default null
       */
      documentHash: string | null;
      /**
       * Document Nature
       * @description Nature/type of the document.
       * @default null
       */
      documentNature: string | null;
      /**
       * Document Request Id
       * @description ID of the associated document request.
       * @default null
       */
      documentRequestId: string | null;
      /**
       * External Id
       * @description External identifier if set.
       * @default null
       */
      externalId: string | null;
      /**
       * File Name
       * @description Uploaded file name.
       * @default null
       */
      fileName: string | null;
      /**
       * File Size
       * @description Size of the uploaded file in bytes.
       * @default null
       */
      fileSize: number | null;
      /**
       * Label
       * @description User-defined document label.
       * @default null
       */
      label: string | null;
      /**
       * Mime Type
       * @description MIME type of the uploaded file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Related Document Id
       * @description ID of a related document.
       * @default null
       */
      relatedDocumentId: string | null;
      /**
       * Related Document Type
       * @description Type of a related document.
       * @default null
       */
      relatedDocumentType: string | null;
      /**
       * Signature Request Id
       * @description ID of the associated signature request.
       * @default null
       */
      signatureRequestId: string | null;
      /**
       * Status
       * @description Current document status.
       * @default null
       */
      status: string | null;
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
 * Type of IGNISIGN's IGNISIGN_PROVIDE_DOCUMENT_CONTENT_PRIVATE_FILE tool input.
 */
type IGNISIGN_PROVIDE_DOCUMENT_CONTENT_PRIVATE_FILE_INPUT = {
  /**
   * Document Hash
   * @description Hex-encoded SHA-256 hash of the private document to be signed.
   */
  documentHash?: string;
  /**
   * Document Id
   * @description Unique identifier of the document.
   */
  documentId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_PROVIDE_DOCUMENT_CONTENT_PRIVATE_FILE tool output.
 */
type IGNISIGN_PROVIDE_DOCUMENT_CONTENT_PRIVATE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Created At
       * @description Creation timestamp in ISO 8601 format.
       * @default null
       */
      _createdAt: string | null;
      /**
       *  Id
       * @description Unique document identifier.
       */
      _id: string;
      /**
       * App Env
       * @description Application environment.
       */
      appEnv: string;
      /**
       * App Id
       * @description Application identifier.
       */
      appId: string;
      /**
       * Data Json Content
       * @description JSON content for data-driven document.
       * @default null
       */
      dataJsonContent: string | null;
      /**
       * Description
       * @description Description of the document.
       * @default null
       */
      description: string | null;
      /**
       * Document Hash
       * @description SHA-256 hash stored for the document.
       * @default null
       */
      documentHash: string | null;
      /**
       * Document Nature
       * @description Nature of the document.
       * @default null
       */
      documentNature: string | null;
      /**
       * Document Request Id
       * @description Associated document request ID.
       * @default null
       */
      documentRequestId: string | null;
      /**
       * External Id
       * @description External identifier of the document.
       * @default null
       */
      externalId: string | null;
      /**
       * File Name
       * @description Original file name.
       * @default null
       */
      fileName: string | null;
      /**
       * File Size
       * @description Size of the file in bytes.
       * @default null
       */
      fileSize: number | null;
      /**
       * Label
       * @description Label of the document.
       * @default null
       */
      label: string | null;
      /**
       * Mime Type
       * @description MIME type of the document.
       * @default null
       */
      mimeType: string | null;
      /**
       * Related Document Id
       * @description ID of a related document.
       * @default null
       */
      relatedDocumentId: string | null;
      /**
       * Related Document Type
       * @description Type of related document.
       * @default null
       */
      relatedDocumentType: string | null;
      /**
       * Signature Request Id
       * @description Associated signature request ID.
       * @default null
       */
      signatureRequestId: string | null;
      /**
       * Status
       * @description Current status of the document.
       * @default null
       */
      status: string | null;
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
 * Type of IGNISIGN's IGNISIGN_PUBLISH_SIGNATURE_REQUEST tool input.
 */
type IGNISIGN_PUBLISH_SIGNATURE_REQUEST_INPUT = {
  /**
   * Signature Request Id
   * @description The unique identifier of the draft signature request to publish.
   */
  signatureRequestId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_PUBLISH_SIGNATURE_REQUEST tool output.
 */
type IGNISIGN_PUBLISH_SIGNATURE_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Signature Request Id
       * @description The ID of the signature request that was successfully published.
       */
      signatureRequestId: string;
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
 * Type of IGNISIGN's IGNISIGN_SEARCH_SIGNERS tool input.
 */
type IGNISIGN_SEARCH_SIGNERS_INPUT = {
  /**
   * App Env
   * @description The application execution environment.
   * @enum {string}
   */
  appEnv?: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
  /**
   * App Id
   * @description The application identifier (e.g., appId_XXXX-XXXX-XXXX-XXXX-XXXX)
   */
  appId?: string;
  /**
   * Filter
   * @description Optional filter string to search signers by name, email, or external ID.
   * @default null
   */
  filter: string | null;
};

/**
 * Type of IGNISIGN's IGNISIGN_SEARCH_SIGNERS tool output.
 */
type IGNISIGN_SEARCH_SIGNERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Signers
       * @description List of signers matching the filter.
       */
      signers: {
          /**
           * Already Provided Inputs
           * @description Inputs that this signer has already provided.
           */
          alreadyProvidedInputs: string[];
          /**
           * Email
           * @description Signer email address.
           */
          email: string;
          /**
           * External Id
           * @description Client-provided external ID.
           * @default null
           */
          externalId: string | null;
          /**
           * First Name
           * @description Signer first name.
           */
          firstName: string;
          /**
           * Last Name
           * @description Signer last name.
           */
          lastName: string;
          /**
           * Signer Id
           * @description Unique signer identifier.
           */
          signerId: string;
          /**
           * Status
           * @description Current status of the signer (e.g., CREATED).
           */
          status: string;
      }[];
      /**
       * Total
       * @description Total number of matching signers.
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
 * Type of IGNISIGN's IGNISIGN_UPDATE_DOCUMENT_INFORMATION tool input.
 */
type IGNISIGN_UPDATE_DOCUMENT_INFORMATION_INPUT = {
  /**
   * Description
   * @description A detailed, human-readable description of the document.
   * @default null
   */
  description: string | null;
  /**
   * Document Id
   * @description The unique identifier of the document to update.
   */
  documentId?: string;
  /**
   * External Id
   * @description Optional external identifier used by external systems (free text; not interpreted by Ignisign).
   * @default null
   */
  externalId: string | null;
  /**
   * Label
   * @description A user-friendly label to identify the document.
   * @default null
   */
  label: string | null;
};

/**
 * Type of IGNISIGN's IGNISIGN_UPDATE_DOCUMENT_INFORMATION tool output.
 */
type IGNISIGN_UPDATE_DOCUMENT_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Created At
       * @description Timestamp when the document was created.
       * @default null
       */
      _createdAt: string | null;
      /**
       *  Id
       * @description The unique document ID.
       */
      _id: string;
      /**
       * App Env
       * @description The application environment.
       */
      appEnv: string;
      /**
       * App Id
       * @description The application ID.
       */
      appId: string;
      /**
       * Data Json Content
       * @description JSON content embedded in the document.
       * @default null
       */
      dataJsonContent: string | null;
      /**
       * Description
       * @description Human-readable document description.
       * @default null
       */
      description: string | null;
      /**
       * Document Hash
       * @description Hash of the document content.
       * @default null
       */
      documentHash: string | null;
      /**
       * Document Nature
       * @description Nature of the document.
       * @default null
       */
      documentNature: string | null;
      /**
       * Document Request Id
       * @description Associated document request ID.
       * @default null
       */
      documentRequestId: string | null;
      /**
       * External Id
       * @description External system ID.
       * @default null
       */
      externalId: string | null;
      /**
       * File Name
       * @description Original filename.
       * @default null
       */
      fileName: string | null;
      /**
       * File Size
       * @description Size of the file in bytes.
       * @default null
       */
      fileSize: number | null;
      /**
       * Label
       * @description User-friendly document label.
       * @default null
       */
      label: string | null;
      /**
       * Mime Type
       * @description Document MIME type.
       * @default null
       */
      mimeType: string | null;
      /**
       * Related Document Id
       * @description ID of a related document.
       * @default null
       */
      relatedDocumentId: string | null;
      /**
       * Related Document Type
       * @description Type of the related document.
       * @default null
       */
      relatedDocumentType: string | null;
      /**
       * Signature Request Id
       * @description Associated signature request ID.
       * @default null
       */
      signatureRequestId: string | null;
      /**
       * Status
       * @description Current status of the document.
       * @default null
       */
      status: string | null;
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
 * Type of IGNISIGN's IGNISIGN_UPDATE_SIGNATURE_REQUEST tool input.
 */
type IGNISIGN_UPDATE_SIGNATURE_REQUEST_INPUT = {
  /**
   * Description
   * @description New description for the signature request.
   * @default null
   */
  description: string | null;
  /**
   * Diffusion Date
   * Format: date-time
   * @description Scheduled send date (required if diffusionMode = SCHEDULED).
   * @default null
   */
  diffusionDate: string | null;
  /**
   * Diffusion Mode
   * @description When to send the signature request.
   * @default null
   * @enum {string|null}
   */
  diffusionMode: "WHEN_READY" | "SCHEDULED" | null;
  /**
   * Document Ids
   * @description List of document IDs to associate with the request.
   * @default null
   */
  documentIds: string[] | null;
  /**
   * Expiration Date
   * Format: date-time
   * @description Expiration date in ISO 8601 format.
   * @default null
   */
  expirationDate: string | null;
  /**
   * Expiration Date Is Activated
   * @description Whether the expiration date is active.
   * @default null
   */
  expirationDateIsActivated: boolean | null;
  /**
   * External Id
   * @description External reference ID for your system.
   * @default null
   */
  externalId: string | null;
  /**
   * Language
   * @description Language code of the signature request.
   * @default null
   * @enum {string|null}
   */
  language: "EN" | "FR" | "DE" | null;
  /**
   * Signature Request Id
   * @description Unique identifier of the signature request to update.
   */
  signatureRequestId?: string;
  /**
   * Signer Ids
   * @description List of signer IDs to include in the request.
   * @default null
   */
  signerIds: string[] | null;
  /**
   * Statements
   * @description List of statement objects to attach to the request.
   * @default null
   */
  statements: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Title
   * @description New title of the signature request.
   * @default null
   */
  title: string | null;
};

/**
 * Type of IGNISIGN's IGNISIGN_UPDATE_SIGNATURE_REQUEST tool output.
 */
type IGNISIGN_UPDATE_SIGNATURE_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Updated signature request ID.
       */
      _id: string;
      /**
       * App Env
       * @description Execution environment.
       */
      appEnv: string;
      /**
       * App Id
       * @description Application identifier.
       */
      appId: string;
      /**
       * Description
       * @description Description of the signature request.
       * @default null
       */
      description: string | null;
      /**
       * Diffusion Date
       * Format: date-time
       * @description Scheduled send date.
       * @default null
       */
      diffusionDate: string | null;
      /**
       * Diffusion Mode
       * @description When the request will be sent.
       * @default null
       */
      diffusionMode: string | null;
      /**
       * Document Ids
       * @description Associated document IDs.
       * @default null
       */
      documentIds: string[] | null;
      /**
       * Expiration Date
       * Format: date-time
       * @description Expiration date in ISO 8601 format.
       * @default null
       */
      expirationDate: string | null;
      /**
       * Expiration Date Is Activated
       * @description Indicates if expiration is active.
       * @default null
       */
      expirationDateIsActivated: boolean | null;
      /**
       * External Id
       * @description External reference ID.
       * @default null
       */
      externalId: string | null;
      /**
       * Language
       * @description Language code of the request.
       * @default null
       */
      language: string | null;
      /**
       * Signature Profile Id
       * @description Signature profile identifier.
       */
      signatureProfileId: string;
      /**
       * Signer Ids
       * @description List of signer IDs included.
       * @default null
       */
      signerIds: string[] | null;
      /**
       * Status
       * @description Current status of the signature request.
       */
      status: string;
      /**
       * Title
       * @description Title of the signature request.
       * @default null
       */
      title: string | null;
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
 * Type of IGNISIGN's IGNISIGN_UPDATE_WEBHOOK_ENDPOINT tool input.
 */
type IGNISIGN_UPDATE_WEBHOOK_ENDPOINT_INPUT = {
  /**
   * Description
   * @description Human-readable description of the webhook endpoint.
   * @default null
   */
  description: string | null;
  /**
   * Url
   * @description Destination URL that the webhook will call.
   */
  url?: string;
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to update.
   */
  webhookId?: string;
};

/**
 * Type of IGNISIGN's IGNISIGN_UPDATE_WEBHOOK_ENDPOINT tool output.
 */
type IGNISIGN_UPDATE_WEBHOOK_ENDPOINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Created At
       * @description Creation timestamp in ISO 8601 format.
       */
      _createdAt: string;
      /**
       *  Id
       * @description Webhook identifier.
       */
      _id: string;
      /**
       * Description
       * @description Description of the endpoint.
       * @default null
       */
      description: string | null;
      /**
       * Url
       * @description Webhook endpoint URL.
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
 * Type map of all available tool input types for toolkit "IGNISIGN".
 */
export type IGNISIGN_TOOL_INPUTS = {
  API_AUTHENTICATION: IGNISIGN_API_AUTHENTICATION_INPUT
  CANCEL_SIGNATURE_REQUEST: IGNISIGN_CANCEL_SIGNATURE_REQUEST_INPUT
  CREATE_DOCUMENT: IGNISIGN_CREATE_DOCUMENT_INPUT
  CREATE_SIGNER: IGNISIGN_CREATE_SIGNER_INPUT
  CREATE_WEBHOOK_ENDPOINT: IGNISIGN_CREATE_WEBHOOK_ENDPOINT_INPUT
  DELETE_DOCUMENT: IGNISIGN_DELETE_DOCUMENT_INPUT
  DELETE_SIGNATURE_REQUEST: IGNISIGN_DELETE_SIGNATURE_REQUEST_INPUT
  DELETE_SIGNER: IGNISIGN_DELETE_SIGNER_INPUT
  DELETE_WEBHOOK_ENDPOINT: IGNISIGN_DELETE_WEBHOOK_ENDPOINT_INPUT
  GET_APPLICATION_CONTEXT: IGNISIGN_GET_APPLICATION_CONTEXT_INPUT
  GET_DOCUMENT_INFORMATION: IGNISIGN_GET_DOCUMENT_INFORMATION_INPUT
  GET_MISSING_SIGNER_INPUTS: IGNISIGN_GET_MISSING_SIGNER_INPUTS_INPUT
  GET_SIGNATURE_REQUESTS: IGNISIGN_GET_SIGNATURE_REQUESTS_INPUT
  GET_SIGNATURE_REQUEST_DETAILS: IGNISIGN_GET_SIGNATURE_REQUEST_DETAILS_INPUT
  GET_SIGNATURE_REQUEST_DOCUMENT: IGNISIGN_GET_SIGNATURE_REQUEST_DOCUMENT_INPUT
  GET_SIGNATURE_REQUEST_STATUS: IGNISIGN_GET_SIGNATURE_REQUEST_STATUS_INPUT
  GET_SIGNED_DOCUMENT: IGNISIGN_GET_SIGNED_DOCUMENT_INPUT
  GET_SIGNER_CREATION_CONSTRAINTS: IGNISIGN_GET_SIGNER_CREATION_CONSTRAINTS_INPUT
  GET_SIGNER_INPUTS: IGNISIGN_GET_SIGNER_INPUTS_INPUT
  GET_SIGNER_INPUT_CONSTRAINTS: IGNISIGN_GET_SIGNER_INPUT_CONSTRAINTS_INPUT
  GET_SIGNER_PROFILE: IGNISIGN_GET_SIGNER_PROFILE_INPUT
  GET_SIGNER_PROFILES: IGNISIGN_GET_SIGNER_PROFILES_INPUT
  GET_WEBHOOKS: IGNISIGN_GET_WEBHOOKS_INPUT
  GET_WEBHOOK_DETAILS: IGNISIGN_GET_WEBHOOK_DETAILS_INPUT
  IGNISIGN_CLOSE_SIGNATURE_REQUEST: IGNISIGN_IGNISIGN_CLOSE_SIGNATURE_REQUEST_INPUT
  IGNISIGN_UPDATE_SIGNER: IGNISIGN_IGNISIGN_UPDATE_SIGNER_INPUT
  INIT_SIGNATURE_REQUEST: IGNISIGN_INIT_SIGNATURE_REQUEST_INPUT
  LIST_DOCUMENTS: IGNISIGN_LIST_DOCUMENTS_INPUT
  PROVIDE_DOCUMENT_CONTENT_DATA_JSON: IGNISIGN_PROVIDE_DOCUMENT_CONTENT_DATA_JSON_INPUT
  PROVIDE_DOCUMENT_CONTENT_FILE: IGNISIGN_PROVIDE_DOCUMENT_CONTENT_FILE_INPUT
  PROVIDE_DOCUMENT_CONTENT_PRIVATE_FILE: IGNISIGN_PROVIDE_DOCUMENT_CONTENT_PRIVATE_FILE_INPUT
  PUBLISH_SIGNATURE_REQUEST: IGNISIGN_PUBLISH_SIGNATURE_REQUEST_INPUT
  SEARCH_SIGNERS: IGNISIGN_SEARCH_SIGNERS_INPUT
  UPDATE_DOCUMENT_INFORMATION: IGNISIGN_UPDATE_DOCUMENT_INFORMATION_INPUT
  UPDATE_SIGNATURE_REQUEST: IGNISIGN_UPDATE_SIGNATURE_REQUEST_INPUT
  UPDATE_WEBHOOK_ENDPOINT: IGNISIGN_UPDATE_WEBHOOK_ENDPOINT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IGNISIGN".
 */
export type IGNISIGN_TOOL_OUTPUTS = {
  API_AUTHENTICATION: IGNISIGN_API_AUTHENTICATION_OUTPUT
  CANCEL_SIGNATURE_REQUEST: IGNISIGN_CANCEL_SIGNATURE_REQUEST_OUTPUT
  CREATE_DOCUMENT: IGNISIGN_CREATE_DOCUMENT_OUTPUT
  CREATE_SIGNER: IGNISIGN_CREATE_SIGNER_OUTPUT
  CREATE_WEBHOOK_ENDPOINT: IGNISIGN_CREATE_WEBHOOK_ENDPOINT_OUTPUT
  DELETE_DOCUMENT: IGNISIGN_DELETE_DOCUMENT_OUTPUT
  DELETE_SIGNATURE_REQUEST: IGNISIGN_DELETE_SIGNATURE_REQUEST_OUTPUT
  DELETE_SIGNER: IGNISIGN_DELETE_SIGNER_OUTPUT
  DELETE_WEBHOOK_ENDPOINT: IGNISIGN_DELETE_WEBHOOK_ENDPOINT_OUTPUT
  GET_APPLICATION_CONTEXT: IGNISIGN_GET_APPLICATION_CONTEXT_OUTPUT
  GET_DOCUMENT_INFORMATION: IGNISIGN_GET_DOCUMENT_INFORMATION_OUTPUT
  GET_MISSING_SIGNER_INPUTS: IGNISIGN_GET_MISSING_SIGNER_INPUTS_OUTPUT
  GET_SIGNATURE_REQUESTS: IGNISIGN_GET_SIGNATURE_REQUESTS_OUTPUT
  GET_SIGNATURE_REQUEST_DETAILS: IGNISIGN_GET_SIGNATURE_REQUEST_DETAILS_OUTPUT
  GET_SIGNATURE_REQUEST_DOCUMENT: IGNISIGN_GET_SIGNATURE_REQUEST_DOCUMENT_OUTPUT
  GET_SIGNATURE_REQUEST_STATUS: IGNISIGN_GET_SIGNATURE_REQUEST_STATUS_OUTPUT
  GET_SIGNED_DOCUMENT: IGNISIGN_GET_SIGNED_DOCUMENT_OUTPUT
  GET_SIGNER_CREATION_CONSTRAINTS: IGNISIGN_GET_SIGNER_CREATION_CONSTRAINTS_OUTPUT
  GET_SIGNER_INPUTS: IGNISIGN_GET_SIGNER_INPUTS_OUTPUT
  GET_SIGNER_INPUT_CONSTRAINTS: IGNISIGN_GET_SIGNER_INPUT_CONSTRAINTS_OUTPUT
  GET_SIGNER_PROFILE: IGNISIGN_GET_SIGNER_PROFILE_OUTPUT
  GET_SIGNER_PROFILES: IGNISIGN_GET_SIGNER_PROFILES_OUTPUT
  GET_WEBHOOKS: IGNISIGN_GET_WEBHOOKS_OUTPUT
  GET_WEBHOOK_DETAILS: IGNISIGN_GET_WEBHOOK_DETAILS_OUTPUT
  IGNISIGN_CLOSE_SIGNATURE_REQUEST: IGNISIGN_IGNISIGN_CLOSE_SIGNATURE_REQUEST_OUTPUT
  IGNISIGN_UPDATE_SIGNER: IGNISIGN_IGNISIGN_UPDATE_SIGNER_OUTPUT
  INIT_SIGNATURE_REQUEST: IGNISIGN_INIT_SIGNATURE_REQUEST_OUTPUT
  LIST_DOCUMENTS: IGNISIGN_LIST_DOCUMENTS_OUTPUT
  PROVIDE_DOCUMENT_CONTENT_DATA_JSON: IGNISIGN_PROVIDE_DOCUMENT_CONTENT_DATA_JSON_OUTPUT
  PROVIDE_DOCUMENT_CONTENT_FILE: IGNISIGN_PROVIDE_DOCUMENT_CONTENT_FILE_OUTPUT
  PROVIDE_DOCUMENT_CONTENT_PRIVATE_FILE: IGNISIGN_PROVIDE_DOCUMENT_CONTENT_PRIVATE_FILE_OUTPUT
  PUBLISH_SIGNATURE_REQUEST: IGNISIGN_PUBLISH_SIGNATURE_REQUEST_OUTPUT
  SEARCH_SIGNERS: IGNISIGN_SEARCH_SIGNERS_OUTPUT
  UPDATE_DOCUMENT_INFORMATION: IGNISIGN_UPDATE_DOCUMENT_INFORMATION_OUTPUT
  UPDATE_SIGNATURE_REQUEST: IGNISIGN_UPDATE_SIGNATURE_REQUEST_OUTPUT
  UPDATE_WEBHOOK_ENDPOINT: IGNISIGN_UPDATE_WEBHOOK_ENDPOINT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IGNISIGN toolkit.
 */
export const IGNISIGN = {
  slug: "ignisign",
  tools: {
    /**
     * Tool to authenticate an application over Ignisign API and retrieve a JWT. Use when obtaining a bearer token before making other API calls.
     */
    API_AUTHENTICATION: "IGNISIGN_API_AUTHENTICATION",
    /**
     * Tool to cancel a signature request. Use after identifying the signature request to abort.
     */
    CANCEL_SIGNATURE_REQUEST: "IGNISIGN_CANCEL_SIGNATURE_REQUEST",
    /**
     * Tool to initialize a document for a signature request. Use when linking a new document to an existing signature request after creating that request.
     */
    CREATE_DOCUMENT: "IGNISIGN_CREATE_DOCUMENT",
    /**
     * Tool to create a new signer. Use when onboarding a signer to an application environment after selecting a signer profile.
     */
    CREATE_SIGNER: "IGNISIGN_CREATE_SIGNER",
    /**
     * Tool to create a new webhook endpoint for an application. Use after obtaining application ID and environment to register for event notifications.
     */
    CREATE_WEBHOOK_ENDPOINT: "IGNISIGN_CREATE_WEBHOOK_ENDPOINT",
    /**
     * Tool to delete a specific document by its ID. Use when you need to permanently remove a document after processing is complete.
     */
    DELETE_DOCUMENT: "IGNISIGN_DELETE_DOCUMENT",
    /**
     * Tool to delete a signature request. Use when you need to permanently remove a signature request by its ID.
     */
    DELETE_SIGNATURE_REQUEST: "IGNISIGN_DELETE_SIGNATURE_REQUEST",
    /**
     * Tool to delete a signer. Use when you need to remove a signer from a specific application environment after confirming signer ID.
     */
    DELETE_SIGNER: "IGNISIGN_DELETE_SIGNER",
    /**
     * Tool to delete a specific webhook endpoint. Use when you want to remove an existing webhook by its ID.
     */
    DELETE_WEBHOOK_ENDPOINT: "IGNISIGN_DELETE_WEBHOOK_ENDPOINT",
    /**
     * Tool to retrieve the global context of an application. Use when you need configuration and environment settings for a given app.
     */
    GET_APPLICATION_CONTEXT: "IGNISIGN_GET_APPLICATION_CONTEXT",
    /**
     * Tool to retrieve document metadata by ID. Use when you need detailed information of a specific document after obtaining its ID.
     */
    GET_DOCUMENT_INFORMATION: "IGNISIGN_GET_DOCUMENT_INFORMATION",
    /**
     * Tool to determine missing inputs needed for a signer in a specific signature profile. Use after selecting a signature profile and signer to identify required fields.
     */
    GET_MISSING_SIGNER_INPUTS: "IGNISIGN_GET_MISSING_SIGNER_INPUTS",
    /**
     * Tool to retrieve a paginated list of signature requests for an application. Use after confirming the application ID and environment.
     */
    GET_SIGNATURE_REQUESTS: "IGNISIGN_GET_SIGNATURE_REQUESTS",
    /**
     * Tool to retrieve detailed information for a specific signature request. Use after creating or listing a signature request to inspect its details.
     */
    GET_SIGNATURE_REQUEST_DETAILS: "IGNISIGN_GET_SIGNATURE_REQUEST_DETAILS",
    /**
     * Tool to retrieve the document associated with a specific signature request. The action downloads the original file of a document. Provide `documentId` to select a specific document or omit to use the first available document of the request.
     */
    GET_SIGNATURE_REQUEST_DOCUMENT: "IGNISIGN_GET_SIGNATURE_REQUEST_DOCUMENT",
    /**
     * Tool to retrieve the current status of a specific signature request. Use when you need to check the state of a single request by its ID.
     */
    GET_SIGNATURE_REQUEST_STATUS: "IGNISIGN_GET_SIGNATURE_REQUEST_STATUS",
    /**
     * Tool to download the signed document (signature proof) for a signature request. The action will: 1) Resolve the first documentId from the signature request details. 2) Try v4: GET /documents/{documentId}/signatures/PDF_WITH_SIGNATURES 3) Fallback v3: GET /v3/documents/{documentId}/signature-proof 4) Final fallback: GET /documents/{documentId}/file (original file)
     */
    GET_SIGNED_DOCUMENT: "IGNISIGN_GET_SIGNED_DOCUMENT",
    /**
     * Tool to retrieve input constraints required to create a signer for a specific signature profile. Use after selecting a signature profile to determine required signer inputs.
     */
    GET_SIGNER_CREATION_CONSTRAINTS: "IGNISIGN_GET_SIGNER_CREATION_CONSTRAINTS",
    /**
     * Tool to retrieve inputs provided by a signer for a signature request. Use after a signer has completed their input steps to fetch submitted values.
     */
    GET_SIGNER_INPUTS: "IGNISIGN_GET_SIGNER_INPUTS",
    /**
     * Tool to get signer input constraints. Use when you need to know which fields are required from signers for a given signer profile.
     */
    GET_SIGNER_INPUT_CONSTRAINTS: "IGNISIGN_GET_SIGNER_INPUT_CONSTRAINTS",
    /**
     * Tool to retrieve a signer profile. Use after obtaining the signer profile ID.
     */
    GET_SIGNER_PROFILE: "IGNISIGN_GET_SIGNER_PROFILE",
    /**
     * Tool to retrieve signer profiles. Use when listing all profiles for a given app environment after confirming app ID and environment.
     */
    GET_SIGNER_PROFILES: "IGNISIGN_GET_SIGNER_PROFILES",
    /**
     * Tool to list all webhook endpoints configured for an application environment. Use after confirming the application ID and environment.
     */
    GET_WEBHOOKS: "IGNISIGN_GET_WEBHOOKS",
    /**
     * Tool to retrieve details of a specific webhook endpoint. Use after you have the webhook ID to inspect its URL, description, and creation timestamp.
     */
    GET_WEBHOOK_DETAILS: "IGNISIGN_GET_WEBHOOK_DETAILS",
    /**
     * Tool to close an active signature request. Use when you need to end or abort a signature process.
     */
    IGNISIGN_CLOSE_SIGNATURE_REQUEST: "IGNISIGN_IGNISIGN_CLOSE_SIGNATURE_REQUEST",
    /**
     * Tool to update details of an existing signer. Use after fetching a signer when you need to change its profile.
     */
    IGNISIGN_UPDATE_SIGNER: "IGNISIGN_IGNISIGN_UPDATE_SIGNER",
    /**
     * Tool to initialize a new signature request. Use when starting a signature flow in a specific application environment.
     */
    INIT_SIGNATURE_REQUEST: "IGNISIGN_INIT_SIGNATURE_REQUEST",
    /**
     * Tool to retrieve documents linked to a signature request. The action works by calling the signature request context endpoint and extracting its documentIds, then fetching each document detail.
     */
    LIST_DOCUMENTS: "IGNISIGN_LIST_DOCUMENTS",
    /**
     * Tool to provide JSON content for a document. Use when you need to attach or update the JSON data of a document.
     */
    PROVIDE_DOCUMENT_CONTENT_DATA_JSON: "IGNISIGN_PROVIDE_DOCUMENT_CONTENT_DATA_JSON",
    /**
     * Tool to provide file content for a document. Use after creating a document to attach its file content.
     */
    PROVIDE_DOCUMENT_CONTENT_FILE: "IGNISIGN_PROVIDE_DOCUMENT_CONTENT_FILE",
    /**
     * Tool to provide private content for a document via its SHA-256 hash. Use after creating a document placeholder and needing to submit the private content hash for signing.
     */
    PROVIDE_DOCUMENT_CONTENT_PRIVATE_FILE: "IGNISIGN_PROVIDE_DOCUMENT_CONTENT_PRIVATE_FILE",
    /**
     * Tool to publish a draft signature request. Use after adding all documents and signer details to the draft.
     */
    PUBLISH_SIGNATURE_REQUEST: "IGNISIGN_PUBLISH_SIGNATURE_REQUEST",
    /**
     * Tool to search for signers within an application. Use after obtaining application ID and environment. Allows optional filtering by name, email, or external ID.
     */
    SEARCH_SIGNERS: "IGNISIGN_SEARCH_SIGNERS",
    /**
     * Tool to update document metadata. Use when you need to change a document's label, description, or external identifier after creation.
     */
    UPDATE_DOCUMENT_INFORMATION: "IGNISIGN_UPDATE_DOCUMENT_INFORMATION",
    /**
     * Tool to partially update a signature request in DRAFT state. Use when you need to modify draft request metadata before sending.
     */
    UPDATE_SIGNATURE_REQUEST: "IGNISIGN_UPDATE_SIGNATURE_REQUEST",
    /**
     * Tool to update an existing webhook endpoint. Use when you have a webhook ID and want to modify its destination URL or description. Example: Update the URL of webhook `wbh_123` to `https://example.com/webhook`.
     */
    UPDATE_WEBHOOK_ENDPOINT: "IGNISIGN_UPDATE_WEBHOOK_ENDPOINT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IGNISIGN".
 */
export type IGNISIGN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IGNISIGN".
 */
export type IGNISIGN_TRIGGER_EVENTS = {}
