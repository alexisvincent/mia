// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AFFINDA's AFFINDA_BATCH_UPDATE_ANNOTATIONS tool input.
 */
type AFFINDA_BATCH_UPDATE_ANNOTATIONS_INPUT = {
  /**
   * Annotations
   * @description List of annotation update objects.
   */
  annotations?: ({
      /**
       * Id
       * @description Unique identifier of the annotation to update.
       */
      id: number;
      /**
       * Parsed
       * @description New parsed value for the annotation.
       * @default null
       */
      parsed: string | null;
  } & {
      [key: string]: unknown;
  })[];
};

/**
 * Type of AFFINDA's AFFINDA_BATCH_UPDATE_ANNOTATIONS tool output.
 */
type AFFINDA_BATCH_UPDATE_ANNOTATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Annotations
       * @description List of updated annotation objects returned by the API.
       */
      annotations: ({
          /**
           * Id
           * @description Unique identifier of the annotation.
           */
          id: number;
          /**
           * Parsed
           * @description Parsed value of the annotation.
           */
          parsed: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of AFFINDA's AFFINDA_CREATE_COLLECTION tool input.
 */
type AFFINDA_CREATE_COLLECTION_INPUT = {
  /**
   * Extractor
   * @description The type of extractor to be used for the collection (e.g., 'resume').
   */
  extractor?: string;
  /**
   * Name
   * @description The name of the collection to be created.
   */
  name?: string;
  /**
   * Workspace
   * @description The identifier of the workspace where the collection will be created.
   */
  workspace?: string;
};

/**
 * Type of AFFINDA's AFFINDA_CREATE_COLLECTION tool output.
 */
type AFFINDA_CREATE_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Extractor
       * @description The extractor type associated with this collection.
       */
      extractor: string;
      /**
       * Identifier
       * @description The unique identifier of the newly created collection.
       */
      identifier: string;
      /**
       * Name
       * @description The name of the created collection.
       */
      name: string;
      /**
       * Workspace
       * @description The identifier of the workspace containing the collection.
       */
      workspace: string;
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
 * Type of AFFINDA's AFFINDA_CREATE_DOCUMENT tool input.
 */
type AFFINDA_CREATE_DOCUMENT_INPUT = {
  /**
   * Additional Extractions
   * @description Additional extraction parameters as JSON object.
   * @default null
   */
  additionalExtractions: {
      [key: string]: unknown;
  } | null;
  /**
   * Collection
   * @description Identifier for the collection to which the document belongs.
   * @default null
   */
  collection: string | null;
  /**
   * Expiry Time
   * @description Expiry time for document access, ISO 8601 format.
   * @default null
   */
  expiryTime: string | null;
  /**
   * File
   * Format: binary
   * @description Binary content of the document to upload (e.g., PDF, DOCX).
   * @default null
   */
  file: string | null;
  /**
   * File Name
   * @description Name of the file when uploading by URL. Ignored if `file` is provided.
   * @default null
   */
  fileName: string | null;
  /**
   * Identifier
   * @description Custom identifier for your own reference.
   * @default null
   */
  identifier: string | null;
  /**
   * Url
   * @description Public URL of the document. Alternative to `file` upload.
   * @default null
   */
  url: string | null;
  /**
   * Workspace
   * @description Workspace identifier. Defaults to primary workspace if omitted.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of AFFINDA's AFFINDA_CREATE_DOCUMENT tool output.
 */
type AFFINDA_CREATE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection
       * @description Collection identifier.
       * @default null
       */
      collection: string | null;
      /**
       * Created
       * Format: date-time
       * @description Timestamp when the document was created.
       */
      created: string;
      /**
       * Error
       * @description Error details if upload or parsing failed.
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * File Name
       * @description Original file name.
       */
      fileName: string;
      /**
       * Identifier
       * @description Unique document identifier assigned by Affinda.
       */
      identifier: string;
      /**
       * Page Count
       * @description Number of pages in the document.
       */
      pageCount: number;
      /**
       * Ready
       * @description True if the document has finished processing.
       */
      ready: boolean;
      /**
       * Redact Pdf Url
       * @description URL to download a redacted PDF, if available.
       * @default null
       */
      redactPdfUrl: string | null;
      /**
       * Result
       * @description Parsed data result. Structure depends on document type.
       */
      result: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Current processing status (e.g., pending, done).
       */
      status: string;
      /**
       * Workspace
       * @description Workspace identifier.
       * @default null
       */
      workspace: string | null;
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
 * Type of AFFINDA's AFFINDA_CREATE_ORGANIZATION tool input.
 */
type AFFINDA_CREATE_ORGANIZATION_INPUT = {
  /**
   * Name
   * @description Name of the organization to be created
   */
  name?: string;
};

/**
 * Type of AFFINDA's AFFINDA_CREATE_ORGANIZATION tool output.
 */
type AFFINDA_CREATE_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the organization was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the newly created organization
       */
      id: string;
      /**
       * Name
       * @description Name of the created organization
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the organization was last updated
       */
      updated_at: string;
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
 * Type of AFFINDA's AFFINDA_CREATE_RESTHOOK_SUBSCRIPTION tool input.
 */
type AFFINDA_CREATE_RESTHOOK_SUBSCRIPTION_INPUT = {
  /**
   * Event
   * @description The event to subscribe to.
   * @enum {string}
   */
  event?: "document.parse.completed" | "document.parse.succeeded" | "document.parse.failed" | "document.validate.completed" | "document.classify.completed" | "document.classify.succeeded" | "document.classify.failed" | "document.rejected";
  /**
   * Organization
   * @description The organization identifier for which the subscription is created.
   */
  organization?: string;
  /**
   * Target Url
   * @description The URL where webhook notifications will be sent.
   */
  targetUrl?: string;
};

/**
 * Type of AFFINDA's AFFINDA_CREATE_RESTHOOK_SUBSCRIPTION tool output.
 */
type AFFINDA_CREATE_RESTHOOK_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Indicates if the subscription is active.
       */
      active: boolean;
      /**
       * Auto Deactivate Reason
       * @description The reason for auto-deactivation, if applicable.
       * @default null
       */
      autoDeactivateReason: string | null;
      /**
       * Auto Deactivated
       * @description Indicates if the subscription was auto-deactivated.
       */
      autoDeactivated: boolean;
      /**
       * Event
       * @description The event subscribed to.
       */
      event: string;
      /**
       * Id
       * @description The unique identifier of the resthook subscription.
       */
      id: number;
      /**
       * Organization
       * @description Details of the organization.
       */
      organization: {
          /**
           * Avatar
           * @description The organization's avatar URL if set, otherwise null.
           * @default null
           */
          avatar: string | null;
          /**
           * Identifier
           * @description The organization's identifier.
           */
          identifier: string;
          /**
           * Is Trial
           * @description Indicates if the organization is on a trial.
           */
          isTrial: boolean;
          /**
           * Name
           * @description The organization's name.
           */
          name: string;
          /**
           * Resthook Signature Key
           * @description The signature key for validating resthook payloads.
           */
          resthookSignatureKey: string;
          /**
           * User Role
           * @description The role of the user within the organization.
           */
          userRole: string;
      };
      /**
       * Target Url
       * @description The URL where webhook notifications will be sent.
       */
      targetUrl: string;
      /**
       * Version
       * @description The API version.
       */
      version: string;
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
 * Type of AFFINDA's AFFINDA_CREATE_TAG tool input.
 */
type AFFINDA_CREATE_TAG_INPUT = {
  /**
   * Name
   * @description The name of the tag to be created.
   */
  name?: string;
  /**
   * Workspace
   * @description The identifier of the workspace where the tag will be created.
   */
  workspace?: string;
};

/**
 * Type of AFFINDA's AFFINDA_CREATE_TAG tool output.
 */
type AFFINDA_CREATE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Count
       * @description Number of documents tagged with this tag.
       */
      documentCount: number;
      /**
       * Id
       * @description The unique identifier of the created tag.
       */
      id: number;
      /**
       * Name
       * @description The name of the tag.
       */
      name: string;
      /**
       * Workspace
       * @description The workspace identifier owning this tag.
       */
      workspace: string;
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
 * Type of AFFINDA's AFFINDA_CREATE_VALIDATION_RESULT tool input.
 */
type AFFINDA_CREATE_VALIDATION_RESULT_INPUT = {
  /**
   * Annotations
   * @description List of annotation IDs that this validation result applies to.
   */
  annotations?: number[];
  /**
   * Document
   * @description Identifier of the document being validated.
   */
  document?: string;
  /**
   * Message
   * @description Message explaining why the validation passed or failed.
   */
  message?: string;
  /**
   * Passed
   * @description Indicates whether the validation passed. Omit or set to null if not applicable.
   * @default null
   */
  passed: boolean | null;
  /**
   * Rule Slug
   * @description The slug of the validation rule being applied.
   */
  ruleSlug?: string;
};

/**
 * Type of AFFINDA's AFFINDA_CREATE_VALIDATION_RESULT tool output.
 */
type AFFINDA_CREATE_VALIDATION_RESULT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Annotations
       * @description List of annotation IDs that were validated.
       */
      annotations: number[];
      /**
       * Document
       * @description Identifier of the document that was validated.
       */
      document: string;
      /**
       * Id
       * @description Unique identifier of the created validation result.
       */
      id: number;
      /**
       * Message
       * @description Message explaining the outcome of the validation.
       */
      message: string;
      /**
       * Passed
       * @description Indicates whether the validation passed.
       * @default null
       */
      passed: boolean | null;
      /**
       * Rule Slug
       * @description The slug of the validation rule applied.
       */
      ruleSlug: string;
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
 * Type of AFFINDA's AFFINDA_CREATE_WORKSPACE tool input.
 */
type AFFINDA_CREATE_WORKSPACE_INPUT = {
  /**
   * Name
   * @description Name of the workspace.
   */
  name?: string;
  /**
   * Organization
   * @description Identifier of the organization to which the workspace will belong.
   */
  organization?: string;
  /**
   * Reject Invalid Documents
   * @description Flag indicating whether to reject invalid documents.
   * @default null
   */
  reject_invalid_documents: boolean | null;
  /**
   * Visibility
   * @description Visibility setting of the workspace. Possible values are 'ORGANIZATION' or 'PRIVATE'.
   * @default null
   * @enum {string|null}
   */
  visibility: "ORGANIZATION" | "PRIVATE" | null;
};

/**
 * Type of AFFINDA's AFFINDA_CREATE_WORKSPACE tool output.
 */
type AFFINDA_CREATE_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Identifier
       * @description Unique identifier of the created workspace.
       */
      identifier: string;
      /**
       * Name
       * @description Name of the workspace.
       */
      name: string;
      /**
       * Organization
       * @description Identifier of the organization to which the workspace belongs.
       */
      organization: string;
      /**
       * Reject Invalid Documents
       * @description Flag indicating whether invalid documents are rejected.
       */
      reject_invalid_documents: boolean;
      /**
       * Visibility
       * @description Visibility setting of the workspace.
       * @enum {string}
       */
      visibility: "ORGANIZATION" | "PRIVATE";
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
 * Type of AFFINDA's AFFINDA_DELETE_COLLECTION tool input.
 */
type AFFINDA_DELETE_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description The unique identifier of the collection to delete.
   */
  collection_id?: string;
};

/**
 * Type of AFFINDA's AFFINDA_DELETE_COLLECTION tool output.
 */
type AFFINDA_DELETE_COLLECTION_OUTPUT = {
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
 * Type of AFFINDA's AFFINDA_DELETE_DOCUMENT tool input.
 */
type AFFINDA_DELETE_DOCUMENT_INPUT = {
  /**
   * Identifier
   * @description The unique identifier of the document to delete. Must match an existing document ID.
   */
  identifier?: string;
};

/**
 * Type of AFFINDA's AFFINDA_DELETE_DOCUMENT tool output.
 */
type AFFINDA_DELETE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code from the Affinda API. 204 indicates successful deletion.
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
 * Type of AFFINDA's AFFINDA_DELETE_ORGANIZATION tool input.
 */
type AFFINDA_DELETE_ORGANIZATION_INPUT = {
  /**
   * Identifier
   * @description The unique identifier of the organization to delete.
   */
  identifier?: string;
};

/**
 * Type of AFFINDA's AFFINDA_DELETE_ORGANIZATION tool output.
 */
type AFFINDA_DELETE_ORGANIZATION_OUTPUT = {
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
 * Type of AFFINDA's AFFINDA_DELETE_RESTHOOK_SUBSCRIPTION tool input.
 */
type AFFINDA_DELETE_RESTHOOK_SUBSCRIPTION_INPUT = {
  /**
   * Identifier
   * @description The unique identifier of the resthook subscription to delete
   */
  identifier?: number;
};

/**
 * Type of AFFINDA's AFFINDA_DELETE_RESTHOOK_SUBSCRIPTION tool output.
 */
type AFFINDA_DELETE_RESTHOOK_SUBSCRIPTION_OUTPUT = {
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
 * Type of AFFINDA's AFFINDA_DELETE_WORKSPACE tool input.
 */
type AFFINDA_DELETE_WORKSPACE_INPUT = {
  /**
   * Workspace Id
   * @description The unique identifier of the workspace to delete.
   */
  workspace_id?: string;
};

/**
 * Type of AFFINDA's AFFINDA_DELETE_WORKSPACE tool output.
 */
type AFFINDA_DELETE_WORKSPACE_OUTPUT = {
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
 * Type of AFFINDA's AFFINDA_DELETE_WORKSPACE_MEMBERSHIP tool input.
 */
type AFFINDA_DELETE_WORKSPACE_MEMBERSHIP_INPUT = {
  /**
   * Identifier
   * @description The unique identifier of the workspace membership to delete.
   */
  identifier?: string;
};

/**
 * Type of AFFINDA's AFFINDA_DELETE_WORKSPACE_MEMBERSHIP tool output.
 */
type AFFINDA_DELETE_WORKSPACE_MEMBERSHIP_OUTPUT = {
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
 * Type of AFFINDA's AFFINDA_GET_ALL_TAGS tool input.
 */
type AFFINDA_GET_ALL_TAGS_INPUT = {
  /**
   * Limit
   * @description Maximum number of tags to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Filter tags by name (partial match).
   * @default null
   */
  name: string | null;
  /**
   * Offset
   * @description Zero-based index of the first tag to return.
   * @default null
   */
  offset: number | null;
  /**
   * Workspace
   * @description Filter tags by a specific workspace identifier.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of AFFINDA's AFFINDA_GET_ALL_TAGS tool output.
 */
type AFFINDA_GET_ALL_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Count
       * @description Number of documents tagged with this tag.
       */
      documentCount: number;
      /**
       * Id
       * @description Unique identifier of the tag.
       */
      id: number;
      /**
       * Name
       * @description Name of the tag.
       */
      name: string;
      /**
       * Workspace
       * @description Workspace identifier owning this tag.
       */
      workspace: string;
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
 * Type of AFFINDA's AFFINDA_GET_ALL_VALIDATION_RESULTS tool input.
 */
type AFFINDA_GET_ALL_VALIDATION_RESULTS_INPUT = {
  /**
   * Document
   * @description Identifier of the document to filter validation results by.
   */
  document?: string;
  /**
   * Limit
   * @description Maximum number of validation results to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set (pagination offset).
   * @default null
   */
  offset: number | null;
  /**
   * Ordering
   * @description Field by which to order results. Prefix with '-' for descending order.
   * @default null
   */
  ordering: string | null;
  /**
   * Workspace
   * @description UUID of the workspace to filter validation results by.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of AFFINDA's AFFINDA_GET_ALL_VALIDATION_RESULTS tool output.
 */
type AFFINDA_GET_ALL_VALIDATION_RESULTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of validation results available.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of validation result objects for the current page.
       */
      results: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the validation result was created.
           */
          created_at: string;
          /**
           * Document
           * @description Summary of the associated document.
           */
          document: {
              /**
               * File Name
               * @description Name of the file for the document.
               */
              file_name: string;
              /**
               * Identifier
               * @description Unique identifier of the document.
               */
              identifier: string;
          };
          /**
           * Errors
           * @description List of validation errors, if any.
           */
          errors: string[];
          /**
           * Id
           * @description Unique identifier of the validation result.
           */
          id: string;
          /**
           * Status
           * @description Validation status of the document (e.g., 'valid', 'errors', 'warnings').
           */
          status: string;
          /**
           * Warnings
           * @description List of validation warnings, if any.
           */
          warnings: string[];
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
 * Type of AFFINDA's AFFINDA_GET_ALL_WORKSPACE_MEMBERSHIPS tool input.
 */
type AFFINDA_GET_ALL_WORKSPACE_MEMBERSHIPS_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set (pagination offset).
   * @default null
   */
  offset: number | null;
  /**
   * User
   * @description Partial, case-insensitive match on user's email.
   * @default null
   */
  user: string | null;
  /**
   * Workspace
   * @description Filter results by a specific workspace identifier.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of AFFINDA's AFFINDA_GET_ALL_WORKSPACE_MEMBERSHIPS tool output.
 */
type AFFINDA_GET_ALL_WORKSPACE_MEMBERSHIPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of workspace memberships.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of workspace membership objects for the current page.
       */
      results: {
          /**
           * Created At
           * @description ISO-8601 timestamp when the membership was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the membership.
           */
          id: number;
          /**
           * Role
           * @description Role of the user within the workspace.
           */
          role: string;
          /**
           * Updated At
           * @description ISO-8601 timestamp of the last update to the membership.
           */
          updated_at: string;
          /**
           * User
           * @description User associated with this membership.
           */
          user: {
              /**
               * Email
               * @description User's email address.
               */
              email: string;
              /**
               * Id
               * @description User's unique identifier.
               */
              id: number;
              /**
               * Name
               * @description User's full name.
               */
              name: string;
          };
          /**
           * Workspace
           * @description Identifier of the associated workspace.
           */
          workspace: string;
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
 * Type of AFFINDA's AFFINDA_GET_ANNOTATIONS tool input.
 */
type AFFINDA_GET_ANNOTATIONS_INPUT = {
  /**
   * After
   * @description Return only annotations created after this timestamp (ISO 8601 format).
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Return only annotations created before this timestamp (ISO 8601 format).
   * @default null
   */
  before: string | null;
  /**
   * Document
   * @description UUID of the document to filter annotations by.
   * @default null
   */
  document: string | null;
  /**
   * Limit
   * @description Maximum number of annotations to return. Must be ≥1.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of annotations to skip before collecting the result set. Must be ≥0.
   * @default null
   */
  offset: number | null;
  /**
   * Workspace
   * @description UUID of the workspace to filter annotations by.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of AFFINDA's AFFINDA_GET_ANNOTATIONS tool output.
 */
type AFFINDA_GET_ANNOTATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of annotations matching the filters.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of annotation objects.
       */
      results: {
          /**
           * Category
           * @description Category or label of the annotation.
           */
          category: string;
          /**
           * Confidence
           * @description Confidence score of the annotation (0.0 to 1.0).
           */
          confidence: number;
          /**
           * Document
           * @description UUID of the document this annotation belongs to.
           */
          document: string;
          /**
           * End Offset
           * @description End character offset of the annotation in the document text.
           */
          end_offset: number;
          /**
           * Id
           * @description Unique identifier of the annotation.
           */
          id: number;
          /**
           * Start Offset
           * @description Start character offset of the annotation in the document text.
           */
          start_offset: number;
          /**
           * Text
           * @description The text covered by this annotation.
           */
          text: string;
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
 * Type of AFFINDA's AFFINDA_GET_COLLECTION tool input.
 */
type AFFINDA_GET_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description The unique identifier of the collection to retrieve.
   */
  collection_id?: string;
};

/**
 * Type of AFFINDA's AFFINDA_GET_COLLECTION tool output.
 */
type AFFINDA_GET_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the collection was created.
       */
      created_at: string;
      /**
       * Created By
       * @description Details of the user who created the collection.
       */
      created_by: {
          /**
           * Id
           * @description Unique identifier of the user who created the collection.
           */
          id: string;
      };
      /**
       * Documents
       * @description List of documents in the collection.
       */
      documents: {
          /**
           * Id
           * @description Unique identifier of the document.
           */
          id: string;
      }[];
      /**
       * Id
       * @description Unique identifier for the collection.
       */
      id: string;
      /**
       * Name
       * @description Name of the collection.
       */
      name: string;
      /**
       * Organization
       * @description Details of the organization this collection belongs to.
       */
      organization: {
          /**
           * Id
           * @description Unique identifier of the organization.
           */
          id: string;
      };
      /**
       * Updated At
       * @description ISO 8601 timestamp when the collection was last updated.
       */
      updated_at: string;
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
 * Type of AFFINDA's AFFINDA_GET_COLLECTIONS tool input.
 */
type AFFINDA_GET_COLLECTIONS_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return. Default is 10 if not provided.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting the result set (pagination offset).
   * @default null
   */
  offset: number | null;
  /**
   * Workspace
   * @description Identifier of the workspace to filter collections by.
   */
  workspace?: string;
};

/**
 * Type of AFFINDA's AFFINDA_GET_COLLECTIONS tool output.
 */
type AFFINDA_GET_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of collections available.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of collection objects for the current page.
       */
      results: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the collection was created.
           */
          created_at: string;
          /**
           * Documents Url
           * @description API URL to fetch documents belonging to this collection.
           */
          documents_url: string;
          /**
           * Extractor
           * @description Extractor type associated with the collection.
           */
          extractor: string;
          /**
           * Identifier
           * @description Unique identifier of the collection.
           */
          identifier: string;
          /**
           * Name
           * @description Human-readable name of the collection.
           */
          name: string;
          /**
           * Workspace
           * @description Identifier of the workspace containing the collection.
           */
          workspace: string;
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
 * Type of AFFINDA's AFFINDA_GET_DOCUMENT tool input.
 */
type AFFINDA_GET_DOCUMENT_INPUT = {
  /**
   * Identifier
   * @description The unique identifier of the document to retrieve.
   */
  identifier?: string;
};

/**
 * Type of AFFINDA's AFFINDA_GET_DOCUMENT tool output.
 */
type AFFINDA_GET_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection
       * @description Collection identifier.
       * @default null
       */
      collection: string | null;
      /**
       * Created
       * Format: date-time
       * @description Timestamp when the document was created.
       */
      created: string;
      /**
       * Error
       * @description Error details if upload or parsing failed.
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * File Name
       * @description Original file name.
       */
      fileName: string;
      /**
       * Identifier
       * @description Unique document identifier assigned by Affinda.
       */
      identifier: string;
      /**
       * Page Count
       * @description Number of pages in the document.
       */
      pageCount: number;
      /**
       * Ready
       * @description True if the document has finished processing.
       */
      ready: boolean;
      /**
       * Redact Pdf Url
       * @description URL to download a redacted PDF, if available.
       * @default null
       */
      redactPdfUrl: string | null;
      /**
       * Result
       * @description Parsed data result. Structure depends on document type.
       */
      result: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Current processing status (e.g., pending, done).
       */
      status: string;
      /**
       * Workspace
       * @description Workspace identifier.
       * @default null
       */
      workspace: string | null;
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
 * Type of AFFINDA's AFFINDA_GET_DOCUMENTS tool input.
 */
type AFFINDA_GET_DOCUMENTS_INPUT = {
  /**
   * Collection
   * @description UUID of the collection to filter documents by.
   * @default null
   */
  collection: string | null;
  /**
   * Limit
   * @description Maximum number of items to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set (pagination offset).
   * @default null
   */
  offset: number | null;
  /**
   * Workspace
   * @description UUID of the workspace to filter documents by.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of AFFINDA's AFFINDA_GET_DOCUMENTS tool output.
 */
type AFFINDA_GET_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of documents available.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of document summary objects for the current page.
       */
      results: {
          /**
           * Collection
           * @description UUID of the collection the document belongs to.
           * @default null
           */
          collection: string | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the document was created.
           */
          created_at: string;
          /**
           * File Name
           * @description Name of the uploaded file.
           */
          file_name: string;
          /**
           * Identifier
           * @description Unique identifier of the document.
           */
          identifier: string;
          /**
           * Status
           * @description Processing status of the document.
           */
          status: string;
          /**
           * Workspace
           * @description UUID of the workspace the document belongs to.
           * @default null
           */
          workspace: string | null;
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
 * Type of AFFINDA's AFFINDA_GET_DOCUMENT_TYPE tool input.
 */
type AFFINDA_GET_DOCUMENT_TYPE_INPUT = {
  /**
   * Identifier
   * @description The unique identifier of the document type.
   */
  identifier?: string;
};

/**
 * Type of AFFINDA's AFFINDA_GET_DOCUMENT_TYPE tool output.
 */
type AFFINDA_GET_DOCUMENT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description A description of the document type.
       * @default null
       */
      description: string | null;
      /**
       * Identifier
       * @description Uniquely identify a document type.
       */
      identifier: string;
      /**
       * Ingest Email
       * @description The email address that can be used to email documents directly to this document type.
       */
      ingest_email: string;
      /**
       * Name
       * @description The name of the document type.
       */
      name: string;
      /**
       * Organization
       * @description The identifier of the organization this document type belongs to.
       */
      organization: string;
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
 * Type of AFFINDA's AFFINDA_GET_DOCUMENT_TYPES tool input.
 */
type AFFINDA_GET_DOCUMENT_TYPES_INPUT = {
  /**
   * Limit
   * @description Maximum number of document types to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Index of the first document type to return.
   * @default null
   */
  offset: number | null;
  /**
   * Ordering
   * @description Field by which to order the document types (e.g., 'name' or '-name').
   * @default null
   */
  ordering: string | null;
};

/**
 * Type of AFFINDA's AFFINDA_GET_DOCUMENT_TYPES tool output.
 */
type AFFINDA_GET_DOCUMENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of document types available.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, or null if none.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, or null if none.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of document type summaries.
       */
      results: {
          /**
           * Description
           * @description Description of the document type.
           */
          description: string;
          /**
           * Group
           * @description Group to which this document type belongs.
           */
          group: string;
          /**
           * Identifier
           * @description Unique identifier for the document type.
           */
          identifier: string;
          /**
           * Name
           * @description Name of the document type.
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
 * Type of AFFINDA's AFFINDA_GET_EXTRACTORS tool input.
 */
type AFFINDA_GET_EXTRACTORS_INPUT = {
  /**
   * Limit
   * @description Maximum number of extractors to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based index of the first extractor to return.
   * @default null
   */
  offset: number | null;
  /**
   * Organization
   * @description Identifier of the organization to filter extractors.
   */
  organization?: string;
};

/**
 * Type of AFFINDA's AFFINDA_GET_EXTRACTORS tool output.
 */
type AFFINDA_GET_EXTRACTORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of extractors available.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of extractor objects for the current page.
       */
      results: {
          /**
           * Description
           * @description Detailed description of the extractor.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the extractor.
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the extractor.
           */
          name: string;
          /**
           * Slug
           * @description URL-friendly slug of the extractor.
           */
          slug: string;
          /**
           * Versions
           * @description List of available versions for this extractor.
           */
          versions: string[];
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
 * Type of AFFINDA's AFFINDA_GET_ORGANIZATION tool input.
 */
type AFFINDA_GET_ORGANIZATION_INPUT = {
  /**
   * Identifier
   * @description The unique identifier of the organization to retrieve.
   */
  identifier?: string;
};

/**
 * Type of AFFINDA's AFFINDA_GET_ORGANIZATION tool output.
 */
type AFFINDA_GET_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar
       * @description URL to the organization's avatar image.
       * @default null
       */
      avatar: string | null;
      /**
       * Id
       * @description Unique identifier of the organization.
       */
      id: string;
      /**
       * Name
       * @description Name of the organization.
       */
      name: string;
      /**
       * Resthook Signature Key
       * @description Key used for signing resthook notifications.
       * @default null
       */
      resthook_signature_key: string | null;
      /**
       * ValidationToolConfig
       * @description Configuration settings for the organization's validation tool.
       *     Allows arbitrary keys.
       * @default null
       */
      validation_tool_config: {
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
 * Type of AFFINDA's AFFINDA_GET_ORGANIZATIONS tool input.
 */
type AFFINDA_GET_ORGANIZATIONS_INPUT = {
  /**
   * Limit
   * @description Maximum number of organizations to return. Default is server-defined if not provided.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of organizations to skip before starting to collect the result set (pagination offset).
   * @default null
   */
  offset: number | null;
};

/**
 * Type of AFFINDA's AFFINDA_GET_ORGANIZATIONS tool output.
 */
type AFFINDA_GET_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of organizations available.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of organization objects for the current page.
       */
      results: {
          /**
           * Avatar
           * @description URL to the organization's avatar image.
           * @default null
           */
          avatar: string | null;
          /**
           * Identifier
           * @description Unique identifier of the organization.
           */
          identifier: string;
          /**
           * Name
           * @description Human-readable name of the organization.
           */
          name: string;
          /**
           * Resthook Signature Key
           * @description Key used for signing resthook notifications.
           * @default null
           */
          resthook_signature_key: string | null;
          /**
           * Validation Tool Config
           * @description Configuration settings for the validation tool associated with the organization.
           * @default null
           */
          validation_tool_config: {
              [key: string]: unknown;
          } | null;
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
 * Type of AFFINDA's AFFINDA_GET_RESTHOOK_SUBSCRIPTION tool input.
 */
type AFFINDA_GET_RESTHOOK_SUBSCRIPTION_INPUT = {
  /**
   * Identifier
   * @description The unique identifier of the resthook subscription to retrieve
   */
  identifier?: number;
};

/**
 * Type of AFFINDA's AFFINDA_GET_RESTHOOK_SUBSCRIPTION tool output.
 */
type AFFINDA_GET_RESTHOOK_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Indicates if the resthook subscription is active
       */
      active: boolean;
      /**
       * Auto Deactivate Reason
       * @description Reason for automatic deactivation, if applicable
       * @default null
       */
      autoDeactivateReason: string | null;
      /**
       * Auto Deactivated
       * @description Indicates if the resthook was automatically deactivated
       */
      autoDeactivated: boolean;
      /**
       * Event
       * @description The event type the resthook is subscribed to
       */
      event: string;
      /**
       * Id
       * @description The unique identifier of the resthook subscription
       */
      id: number;
      /**
       * Organization
       * @description Information about the organization owning the subscription
       */
      organization: {
          /**
           * Avatar
           * @description URL to the organization's avatar image, or null if none
           * @default null
           */
          avatar: string | null;
          /**
           * Identifier
           * @description The organization's unique identifier
           */
          identifier: string;
          /**
           * Is Trial
           * @description Indicates if the organization is on a trial plan
           */
          isTrial: boolean;
          /**
           * Name
           * @description The organization's name
           */
          name: string;
          /**
           * Resthook Signature Key
           * @description Key used to sign resthook payloads
           */
          resthookSignatureKey: string;
          /**
           * User Role
           * @description The role of the user within the organization
           */
          userRole: string;
      };
      /**
       * Target Url
       * @description The URL where event notifications are sent
       */
      targetUrl: string;
      /**
       * Version
       * @description The API version of the resthook subscription
       */
      version: string;
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
 * Type of AFFINDA's AFFINDA_GET_RESTHOOK_SUBSCRIPTIONS tool input.
 */
type AFFINDA_GET_RESTHOOK_SUBSCRIPTIONS_INPUT = object;

/**
 * Type of AFFINDA's AFFINDA_GET_RESTHOOK_SUBSCRIPTIONS tool output.
 */
type AFFINDA_GET_RESTHOOK_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of resthook subscriptions.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of resthook subscription objects.
       */
      results: {
          /**
           * Active
           * @description Indicates if the subscription is active.
           */
          active: boolean;
          /**
           * Auto Deactivate Reason
           * @description Reason for auto-deactivation, if applicable.
           * @default null
           */
          autoDeactivateReason: string | null;
          /**
           * Auto Deactivated
           * @description Indicates if the subscription was auto-deactivated.
           */
          autoDeactivated: boolean;
          /**
           * Event
           * @description Event type the subscription is listening to.
           */
          event: string;
          /**
           * Id
           * @description Unique identifier of the resthook subscription.
           */
          id: number;
          /**
           * Organization
           * @description Associated organization details.
           */
          organization: {
              /**
               * Avatar
               * @description URL to the organization's avatar image, if any.
               * @default null
               */
              avatar: string | null;
              /**
               * Identifier
               * @description Organization's unique identifier.
               */
              identifier: string;
              /**
               * Is Trial
               * @description Indicates if the organization is on a trial plan.
               */
              isTrial: boolean;
              /**
               * Name
               * @description Organization's name.
               */
              name: string;
              /**
               * Resthook Signature Key
               * @description Key used to sign webhook payloads.
               */
              resthookSignatureKey: string;
              /**
               * User Role
               * @description User's role within the organization.
               */
              userRole: string;
          };
          /**
           * Target Url
           * @description URL where the webhook notifications are sent.
           */
          targetUrl: string;
          /**
           * Version
           * @description API version of the subscription.
           */
          version: string;
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
 * Type of AFFINDA's AFFINDA_GET_USAGE_BY_WORKSPACE tool input.
 */
type AFFINDA_GET_USAGE_BY_WORKSPACE_INPUT = {
  /**
   * End
   * @description End month for usage data in YYYY-MM format.
   * @default null
   */
  end: string | null;
  /**
   * Start
   * @description Start month for usage data in YYYY-MM format.
   * @default null
   */
  start: string | null;
  /**
   * Workspace Id
   * @description Unique identifier of the workspace to retrieve usage for.
   */
  workspace_id?: string;
};

/**
 * Type of AFFINDA's AFFINDA_GET_USAGE_BY_WORKSPACE tool output.
 */
type AFFINDA_GET_USAGE_BY_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of monthly usage data items.
       */
      results: {
          /**
           * Credits Used
           * @description Number of credits consumed during the specified month.
           */
          credits_used: number;
          /**
           * Date
           * @description Month and year of the usage data in YYYY-MM format.
           */
          date: string;
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
 * Type of AFFINDA's AFFINDA_GET_WORKSPACE tool input.
 */
type AFFINDA_GET_WORKSPACE_INPUT = {
  /**
   * Identifier
   * @description The unique identifier of the workspace to retrieve.
   */
  identifier?: string;
};

/**
 * Type of AFFINDA's AFFINDA_GET_WORKSPACE tool output.
 */
type AFFINDA_GET_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar
       * @description URL of the workspace's avatar.
       * @default null
       */
      avatar: string | null;
      /**
       * Collections
       * @description List of collections in the workspace.
       */
      collections: {
          /**
           * Confirmed Docs Count
           * @description Number of validated documents in the collection.
           * @default null
           */
          confirmedDocsCount: number | null;
          /**
           * Extractor
           * @description Extractor settings for the collection.
           */
          extractor: {
              [key: string]: unknown;
          };
          /**
           * Identifier
           * @description Unique identifier of the collection.
           */
          identifier: string;
          /**
           * Name
           * @description Name of the collection.
           */
          name: string;
          /**
           * Reject Duplicates
           * @description Whether duplicates should be rejected. Falls back to workspace setting if not provided.
           * @default null
           */
          rejectDuplicates: boolean | null;
          /**
           * Reject Invalid Documents
           * @description If true, rejects invalid documents without consuming credits.
           */
          rejectInvalidDocuments: boolean;
          /**
           * Unvalidated Docs Count
           * @description Number of unvalidated documents in the collection.
           * @default null
           */
          unvalidatedDocsCount: number | null;
      }[];
      /**
       * DocumentSplitter
       * @description Information about the document splitter used in the workspace.
       * @default null
       */
      documentSplitter: {
          /**
           * Identifier
           * @description Unique identifier of the document splitter.
           */
          identifier: string;
          /**
           * Name
           * @description Name of the document splitter.
           */
          name: string;
      } | null;
      /**
       * Identifier
       * @description Unique identifier of the workspace.
       */
      identifier: string;
      /**
       * Ingest Email
       * @description Email address for ingesting documents into this workspace.
       */
      ingestEmail: string;
      /**
       * Is Trial
       * @description Indicates whether the workspace is on a trial.
       */
      isTrial: boolean;
      /**
       * Members
       * @description List of members in the workspace.
       */
      members: {
          /**
           * Avatar
           * @description URL of the user's avatar.
           * @default null
           */
          avatar: string | null;
          /**
           * Confirmed Docs Count
           * @description Number of validated documents in the workspace by this user.
           */
          confirmedDocsCount: number;
          /**
           * Email
           * @description Email of the user.
           */
          email: string;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: number;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Unvalidated Docs Count
           * @description Number of unvalidated documents in the workspace by this user.
           */
          unvalidatedDocsCount: number;
          /**
           * Username
           * @description Username of the user.
           */
          username: string;
      }[];
      /**
       * Name
       * @description Name of the workspace.
       */
      name: string;
      /**
       * Organization
       * @description Organization details containing the workspace.
       */
      organization: {
          /**
           * Avatar
           * @description URL of the organization's avatar.
           * @default null
           */
          avatar: string | null;
          /**
           * Identifier
           * @description Unique identifier of the organization.
           */
          identifier: string;
          /**
           * Is Trial
           * @description Whether the workspace is on a trial.
           */
          isTrial: boolean;
          /**
           * Name
           * @description Name of the organization.
           */
          name: string;
          /**
           * Resthook Signature Key
           * @description Key used to sign webhook payloads so you can verify their integrity.
           * @default null
           */
          resthookSignatureKey: string | null;
          /**
           * User Role
           * @description The role of the logged in user within the organization.
           * @default null
           */
          userRole: string | null;
      };
      /**
       * Resthook Signature Key
       * @description Signature key for webhooks.
       * @default null
       */
      resthookSignatureKey: string | null;
      /**
       * Show Custom Field Creation
       * @description Whether to show custom field creation in the UI.
       */
      showCustomFieldCreation: boolean;
      /**
       * User Role
       * @description Role of the logged in user in this workspace.
       * @default null
       */
      userRole: string | null;
      /**
       * ValidationToolConfig
       * @description Configuration settings for the embeddable validation tool.
       *     Allows additional properties.
       * @default null
       */
      validationToolConfig: {
          [key: string]: unknown;
      } | null;
      /**
       * Visibility
       * @description Workspace visibility: 'organization' means everyone can access; 'private' means only explicit members.
       */
      visibility: string;
      /**
       * Whitelist Ingest Addresses
       * @description Allowed email addresses for ingestion. Wildcards allowed, e.g., '*@example.com'.
       * @default null
       */
      whitelistIngestAddresses: string[] | null;
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
 * Type of AFFINDA's AFFINDA_GET_WORKSPACES tool input.
 */
type AFFINDA_GET_WORKSPACES_INPUT = {
  /**
   * Name
   * @description Filter by workspace name (partial match).
   * @default null
   */
  name: string | null;
  /**
   * Organization
   * @description Filter by organization identifier.
   */
  organization?: string;
};

/**
 * Type of AFFINDA's AFFINDA_GET_WORKSPACES tool output.
 */
type AFFINDA_GET_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Identifier
       * @description Unique identifier of the workspace.
       */
      identifier: string;
      /**
       * Name
       * @description Name of the workspace.
       */
      name: string;
      /**
       * Organization
       * @description Organization this workspace belongs to.
       */
      organization: {
          /**
           * Identifier
           * @description Identifier of the organization.
           */
          identifier: string;
          /**
           * Name
           * @description Name of the organization.
           * @default null
           */
          name: string | null;
      };
      /**
       * Visibility
       * @description Workspace visibility: 'organization' or 'private'.
       * @enum {string}
       */
      visibility: "organization" | "private";
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
 * Type of AFFINDA's AFFINDA_GET_WORKSPACE_MEMBERSHIP tool input.
 */
type AFFINDA_GET_WORKSPACE_MEMBERSHIP_INPUT = {
  /**
   * Identifier
   * @description The unique identifier of the workspace membership to retrieve.
   */
  identifier?: string;
};

/**
 * Type of AFFINDA's AFFINDA_GET_WORKSPACE_MEMBERSHIP tool output.
 */
type AFFINDA_GET_WORKSPACE_MEMBERSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the membership was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the workspace membership.
       */
      id: string;
      /**
       * Role
       * @description Role assigned to the user within the workspace.
       */
      role: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the membership was last updated.
       */
      updated_at: string;
      /**
       * User
       * @description Identifier of the user associated with the membership.
       */
      user: string;
      /**
       * Workspace
       * @description Identifier of the associated workspace.
       */
      workspace: string;
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
 * Type of AFFINDA's AFFINDA_UPDATE_COLLECTION tool input.
 */
type AFFINDA_UPDATE_COLLECTION_INPUT = {
  /**
   * Custom Fields
   * @description Custom fields defined for this collection.
   * @default null
   */
  custom_fields: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Documents
   * @description List of document identifiers to set for this collection.
   * @default null
   */
  documents: string[] | null;
  /**
   * Identifier
   * @description Identifier of the collection to update.
   */
  identifier?: string;
  /**
   * Name
   * @description New name for the collection.
   * @default null
   */
  name: string | null;
  /**
   * Workspace
   * @description Identifier of the workspace to assign the collection to.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of AFFINDA's AFFINDA_UPDATE_COLLECTION tool output.
 */
type AFFINDA_UPDATE_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the collection was created.
       */
      created_at: string;
      /**
       * Created By
       * @description Details of the user who created the collection.
       */
      created_by: {
          /**
           * Id
           * @description Unique identifier of the user who created the collection.
           */
          id: string;
      };
      /**
       * Documents
       * @description List of documents in the collection.
       */
      documents: {
          /**
           * Id
           * @description Unique identifier of the document.
           */
          id: string;
      }[];
      /**
       * Id
       * @description Unique identifier for the collection.
       */
      id: string;
      /**
       * Name
       * @description Name of the collection.
       */
      name: string;
      /**
       * Organization
       * @description Details of the organization this collection belongs to.
       */
      organization: {
          /**
           * Id
           * @description Unique identifier of the organization.
           */
          id: string;
      };
      /**
       * Updated At
       * @description ISO 8601 timestamp when the collection was last updated.
       */
      updated_at: string;
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
 * Type of AFFINDA's AFFINDA_UPDATE_DOCUMENT tool input.
 */
type AFFINDA_UPDATE_DOCUMENT_INPUT = {
  /**
   * Collection
   * @description Identifier of the collection to move the document to.
   * @default null
   */
  collection: string | null;
  /**
   * Custom Identifier
   * @description Custom identifier for your own reference.
   * @default null
   */
  customIdentifier: string | null;
  /**
   * Delete After Parse
   * @description If true, no data will be stored after parsing. Only valid with synchronous parsing.
   * @default null
   */
  deleteAfterParse: boolean | null;
  /**
   * Enable Validation Tool
   * @description If false, validation UI is disabled to speed up parsing.
   * @default null
   */
  enableValidationTool: boolean | null;
  /**
   * Expiry Time
   * @description Expiry time in ISO 8601 format when the document will be automatically deleted.
   * @default null
   */
  expiryTime: string | null;
  /**
   * File Name
   * @description New file name for the document.
   * @default null
   */
  fileName: string | null;
  /**
   * Identifier
   * @description The unique identifier of the document to update.
   */
  identifier?: string;
  /**
   * Language
   * @description ISO 639-1 language code (e.g., 'en', 'fr', 'zh-cn').
   * @default null
   */
  language: string | null;
  /**
   * RegionBias
   * @description Geographic bias parameters to influence geocoding or location-based parsing.
   * @default null
   */
  regionBias: {
      /**
       * Latitude
       * @description Latitude of the bias center
       */
      latitude: number;
      /**
       * Longitude
       * @description Longitude of the bias center
       */
      longitude: number;
      /**
       * Radius
       * @description Radius in meters around the bias center
       * @default null
       */
      radius: number | null;
  } | null;
  /**
   * Workspace
   * @description Identifier of the workspace to move the document to.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of AFFINDA's AFFINDA_UPDATE_DOCUMENT tool output.
 */
type AFFINDA_UPDATE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection
       * @description Identifier of the collection containing the document.
       * @default null
       */
      collection: string | null;
      /**
       * Custom Identifier
       * @description Custom identifier of the document.
       * @default null
       */
      customIdentifier: string | null;
      /**
       * Delete After Parse
       * @description Indicates if data will be deleted after parsing.
       * @default null
       */
      deleteAfterParse: boolean | null;
      /**
       * Enable Validation Tool
       * @description Indicates if validation UI is enabled for the document.
       * @default null
       */
      enableValidationTool: boolean | null;
      /**
       * Expiry Time
       * @description Expiry time of the document in ISO 8601 format.
       * @default null
       */
      expiryTime: string | null;
      /**
       * File Name
       * @description Current file name of the document.
       */
      fileName: string;
      /**
       * Identifier
       * @description Unique identifier of the document.
       */
      identifier: string;
      /**
       * Language
       * @description ISO 639-1 language code of the document.
       * @default null
       */
      language: string | null;
      /**
       * RegionBias
       * @description Geographic bias parameters to influence geocoding or location-based parsing.
       * @default null
       */
      regionBias: {
          /**
           * Latitude
           * @description Latitude of the bias center
           */
          latitude: number;
          /**
           * Longitude
           * @description Longitude of the bias center
           */
          longitude: number;
          /**
           * Radius
           * @description Radius in meters around the bias center
           * @default null
           */
          radius: number | null;
      } | null;
      /**
       * Workspace
       * @description Identifier of the workspace containing the document.
       * @default null
       */
      workspace: string | null;
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
 * Type of AFFINDA's AFFINDA_UPDATE_DOCUMENT_DATA tool input.
 */
type AFFINDA_UPDATE_DOCUMENT_DATA_INPUT = {
  /**
   * Data
   * @description Structured data to update for the document. Only include fields you wish to change.
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Identifier
   * @description The unique identifier of the document to update.
   */
  identifier?: string;
};

/**
 * Type of AFFINDA's AFFINDA_UPDATE_DOCUMENT_DATA tool output.
 */
type AFFINDA_UPDATE_DOCUMENT_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection
       * @description Identifier of the collection containing the document.
       * @default null
       */
      collection: string | null;
      /**
       * Created
       * Format: date-time
       * @description Timestamp when the document was created.
       */
      created: string;
      /**
       * Error
       * @description Error details if update failed.
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * File Name
       * @description Name of the file for the document.
       */
      fileName: string;
      /**
       * Identifier
       * @description Unique document identifier assigned by Affinda.
       */
      identifier: string;
      /**
       * Page Count
       * @description Number of pages in the document.
       */
      pageCount: number;
      /**
       * Ready
       * @description True if the document has finished processing after update.
       */
      ready: boolean;
      /**
       * Redact Pdf Url
       * @description URL to download a redacted PDF, if available.
       * @default null
       */
      redactPdfUrl: string | null;
      /**
       * Result
       * @description Parsed data result for the document after update.
       */
      result: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Current processing status (e.g., pending, done).
       */
      status: string;
      /**
       * Workspace
       * @description Identifier of the workspace containing the document.
       * @default null
       */
      workspace: string | null;
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
 * Type of AFFINDA's AFFINDA_UPDATE_ORGANIZATION tool input.
 */
type AFFINDA_UPDATE_ORGANIZATION_INPUT = {
  /**
   * Avatar
   * Format: binary
   * @description Binary content of the new avatar image (e.g., PNG or JPEG).
   * @default null
   */
  avatar: string | null;
  /**
   * Identifier
   * @description Unique identifier of the organization to update.
   */
  identifier?: string;
  /**
   * Name
   * @description New name for the organization.
   * @default null
   */
  name: string | null;
  /**
   * Resthook Signature Key
   * @description New key for signing resthook notifications.
   * @default null
   */
  resthook_signature_key: string | null;
  /**
   * Validation Tool Config
   * @description New configuration settings for the organization's validation tool.
   * @default null
   */
  validation_tool_config: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of AFFINDA's AFFINDA_UPDATE_ORGANIZATION tool output.
 */
type AFFINDA_UPDATE_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar
       * @description URL to the organization's avatar image.
       * @default null
       */
      avatar: string | null;
      /**
       * Id
       * @description Unique identifier of the organization.
       */
      id: string;
      /**
       * Name
       * @description Name of the organization.
       */
      name: string;
      /**
       * Resthook Signature Key
       * @description Key used for signing resthook notifications.
       * @default null
       */
      resthook_signature_key: string | null;
      /**
       * Validation Tool Config
       * @description Configuration settings for the organization's validation tool.
       * @default null
       */
      validation_tool_config: {
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
 * Type of AFFINDA's AFFINDA_UPDATE_RESTHOOK_SUBSCRIPTION tool input.
 */
type AFFINDA_UPDATE_RESTHOOK_SUBSCRIPTION_INPUT = {
  /**
   * Active
   * @description Whether the subscription should be active
   * @default null
   */
  active: boolean | null;
  /**
   * Event
   * @description The event type to subscribe to
   * @default null
   */
  event: string | null;
  /**
   * Identifier
   * @description The unique identifier of the resthook subscription to update
   */
  identifier?: number;
  /**
   * Target Url
   * @description The new URL where webhook notifications will be sent
   * @default null
   */
  targetUrl: string | null;
};

/**
 * Type of AFFINDA's AFFINDA_UPDATE_RESTHOOK_SUBSCRIPTION tool output.
 */
type AFFINDA_UPDATE_RESTHOOK_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Indicates if the subscription is active.
       */
      active: boolean;
      /**
       * Auto Deactivate Reason
       * @description Reason for automatic deactivation, if applicable.
       * @default null
       */
      autoDeactivateReason: string | null;
      /**
       * Auto Deactivated
       * @description Indicates if the subscription was automatically deactivated.
       */
      autoDeactivated: boolean;
      /**
       * Event
       * @description The event type the resthook is subscribed to.
       */
      event: string;
      /**
       * Id
       * @description The unique identifier of the resthook subscription.
       */
      id: number;
      /**
       * Organization
       * @description Information about the organization owning the subscription.
       */
      organization: {
          /**
           * Avatar
           * @description URL to the organization's avatar image, if any.
           * @default null
           */
          avatar: string | null;
          /**
           * Identifier
           * @description The organization's unique identifier.
           */
          identifier: string;
          /**
           * Is Trial
           * @description Indicates if the organization is on a trial plan.
           */
          isTrial: boolean;
          /**
           * Name
           * @description The organization's name.
           */
          name: string;
          /**
           * Resthook Signature Key
           * @description Key used to sign resthook payloads.
           */
          resthookSignatureKey: string;
          /**
           * User Role
           * @description The role of the user within the organization.
           */
          userRole: string;
      };
      /**
       * Target Url
       * @description The URL where event notifications are sent.
       */
      targetUrl: string;
      /**
       * Version
       * @description The API version of the subscription.
       */
      version: string;
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
 * Type of AFFINDA's AFFINDA_UPDATE_WORKSPACE tool input.
 */
type AFFINDA_UPDATE_WORKSPACE_INPUT = {
  /**
   * Name
   * @description The new name for the workspace.
   * @default null
   */
  name: string | null;
  /**
   * Reject Invalid Documents
   * @description Flag indicating whether to reject invalid documents.
   * @default null
   */
  reject_invalid_documents: boolean | null;
  /**
   * Visibility
   * @description The visibility setting for the workspace. Possible values are 'ORGANIZATION' or 'PRIVATE'.
   * @default null
   * @enum {string|null}
   */
  visibility: "ORGANIZATION" | "PRIVATE" | null;
  /**
   * Workspace Id
   * @description The unique identifier of the workspace to update.
   */
  workspace_id?: string;
};

/**
 * Type of AFFINDA's AFFINDA_UPDATE_WORKSPACE tool output.
 */
type AFFINDA_UPDATE_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Identifier
       * @description Unique identifier of the workspace.
       */
      identifier: string;
      /**
       * Name
       * @description Name of the workspace.
       */
      name: string;
      /**
       * Organization
       * @description Identifier of the organization to which the workspace belongs.
       */
      organization: string;
      /**
       * Reject Invalid Documents
       * @description Flag indicating whether invalid documents are rejected.
       */
      reject_invalid_documents: boolean;
      /**
       * Visibility
       * @description Visibility setting of the workspace.
       * @enum {string}
       */
      visibility: "ORGANIZATION" | "PRIVATE";
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
 * Type map of all available tool input types for toolkit "AFFINDA".
 */
export type AFFINDA_TOOL_INPUTS = {
  BATCH_UPDATE_ANNOTATIONS: AFFINDA_BATCH_UPDATE_ANNOTATIONS_INPUT
  CREATE_COLLECTION: AFFINDA_CREATE_COLLECTION_INPUT
  CREATE_DOCUMENT: AFFINDA_CREATE_DOCUMENT_INPUT
  CREATE_ORGANIZATION: AFFINDA_CREATE_ORGANIZATION_INPUT
  CREATE_RESTHOOK_SUBSCRIPTION: AFFINDA_CREATE_RESTHOOK_SUBSCRIPTION_INPUT
  CREATE_TAG: AFFINDA_CREATE_TAG_INPUT
  CREATE_VALIDATION_RESULT: AFFINDA_CREATE_VALIDATION_RESULT_INPUT
  CREATE_WORKSPACE: AFFINDA_CREATE_WORKSPACE_INPUT
  DELETE_COLLECTION: AFFINDA_DELETE_COLLECTION_INPUT
  DELETE_DOCUMENT: AFFINDA_DELETE_DOCUMENT_INPUT
  DELETE_ORGANIZATION: AFFINDA_DELETE_ORGANIZATION_INPUT
  DELETE_RESTHOOK_SUBSCRIPTION: AFFINDA_DELETE_RESTHOOK_SUBSCRIPTION_INPUT
  DELETE_WORKSPACE: AFFINDA_DELETE_WORKSPACE_INPUT
  DELETE_WORKSPACE_MEMBERSHIP: AFFINDA_DELETE_WORKSPACE_MEMBERSHIP_INPUT
  GET_ALL_TAGS: AFFINDA_GET_ALL_TAGS_INPUT
  GET_ALL_VALIDATION_RESULTS: AFFINDA_GET_ALL_VALIDATION_RESULTS_INPUT
  GET_ALL_WORKSPACE_MEMBERSHIPS: AFFINDA_GET_ALL_WORKSPACE_MEMBERSHIPS_INPUT
  GET_ANNOTATIONS: AFFINDA_GET_ANNOTATIONS_INPUT
  GET_COLLECTION: AFFINDA_GET_COLLECTION_INPUT
  GET_COLLECTIONS: AFFINDA_GET_COLLECTIONS_INPUT
  GET_DOCUMENT: AFFINDA_GET_DOCUMENT_INPUT
  GET_DOCUMENTS: AFFINDA_GET_DOCUMENTS_INPUT
  GET_DOCUMENT_TYPE: AFFINDA_GET_DOCUMENT_TYPE_INPUT
  GET_DOCUMENT_TYPES: AFFINDA_GET_DOCUMENT_TYPES_INPUT
  GET_EXTRACTORS: AFFINDA_GET_EXTRACTORS_INPUT
  GET_ORGANIZATION: AFFINDA_GET_ORGANIZATION_INPUT
  GET_ORGANIZATIONS: AFFINDA_GET_ORGANIZATIONS_INPUT
  GET_RESTHOOK_SUBSCRIPTION: AFFINDA_GET_RESTHOOK_SUBSCRIPTION_INPUT
  GET_RESTHOOK_SUBSCRIPTIONS: AFFINDA_GET_RESTHOOK_SUBSCRIPTIONS_INPUT
  GET_USAGE_BY_WORKSPACE: AFFINDA_GET_USAGE_BY_WORKSPACE_INPUT
  GET_WORKSPACE: AFFINDA_GET_WORKSPACE_INPUT
  GET_WORKSPACES: AFFINDA_GET_WORKSPACES_INPUT
  GET_WORKSPACE_MEMBERSHIP: AFFINDA_GET_WORKSPACE_MEMBERSHIP_INPUT
  UPDATE_COLLECTION: AFFINDA_UPDATE_COLLECTION_INPUT
  UPDATE_DOCUMENT: AFFINDA_UPDATE_DOCUMENT_INPUT
  UPDATE_DOCUMENT_DATA: AFFINDA_UPDATE_DOCUMENT_DATA_INPUT
  UPDATE_ORGANIZATION: AFFINDA_UPDATE_ORGANIZATION_INPUT
  UPDATE_RESTHOOK_SUBSCRIPTION: AFFINDA_UPDATE_RESTHOOK_SUBSCRIPTION_INPUT
  UPDATE_WORKSPACE: AFFINDA_UPDATE_WORKSPACE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AFFINDA".
 */
export type AFFINDA_TOOL_OUTPUTS = {
  BATCH_UPDATE_ANNOTATIONS: AFFINDA_BATCH_UPDATE_ANNOTATIONS_OUTPUT
  CREATE_COLLECTION: AFFINDA_CREATE_COLLECTION_OUTPUT
  CREATE_DOCUMENT: AFFINDA_CREATE_DOCUMENT_OUTPUT
  CREATE_ORGANIZATION: AFFINDA_CREATE_ORGANIZATION_OUTPUT
  CREATE_RESTHOOK_SUBSCRIPTION: AFFINDA_CREATE_RESTHOOK_SUBSCRIPTION_OUTPUT
  CREATE_TAG: AFFINDA_CREATE_TAG_OUTPUT
  CREATE_VALIDATION_RESULT: AFFINDA_CREATE_VALIDATION_RESULT_OUTPUT
  CREATE_WORKSPACE: AFFINDA_CREATE_WORKSPACE_OUTPUT
  DELETE_COLLECTION: AFFINDA_DELETE_COLLECTION_OUTPUT
  DELETE_DOCUMENT: AFFINDA_DELETE_DOCUMENT_OUTPUT
  DELETE_ORGANIZATION: AFFINDA_DELETE_ORGANIZATION_OUTPUT
  DELETE_RESTHOOK_SUBSCRIPTION: AFFINDA_DELETE_RESTHOOK_SUBSCRIPTION_OUTPUT
  DELETE_WORKSPACE: AFFINDA_DELETE_WORKSPACE_OUTPUT
  DELETE_WORKSPACE_MEMBERSHIP: AFFINDA_DELETE_WORKSPACE_MEMBERSHIP_OUTPUT
  GET_ALL_TAGS: AFFINDA_GET_ALL_TAGS_OUTPUT
  GET_ALL_VALIDATION_RESULTS: AFFINDA_GET_ALL_VALIDATION_RESULTS_OUTPUT
  GET_ALL_WORKSPACE_MEMBERSHIPS: AFFINDA_GET_ALL_WORKSPACE_MEMBERSHIPS_OUTPUT
  GET_ANNOTATIONS: AFFINDA_GET_ANNOTATIONS_OUTPUT
  GET_COLLECTION: AFFINDA_GET_COLLECTION_OUTPUT
  GET_COLLECTIONS: AFFINDA_GET_COLLECTIONS_OUTPUT
  GET_DOCUMENT: AFFINDA_GET_DOCUMENT_OUTPUT
  GET_DOCUMENTS: AFFINDA_GET_DOCUMENTS_OUTPUT
  GET_DOCUMENT_TYPE: AFFINDA_GET_DOCUMENT_TYPE_OUTPUT
  GET_DOCUMENT_TYPES: AFFINDA_GET_DOCUMENT_TYPES_OUTPUT
  GET_EXTRACTORS: AFFINDA_GET_EXTRACTORS_OUTPUT
  GET_ORGANIZATION: AFFINDA_GET_ORGANIZATION_OUTPUT
  GET_ORGANIZATIONS: AFFINDA_GET_ORGANIZATIONS_OUTPUT
  GET_RESTHOOK_SUBSCRIPTION: AFFINDA_GET_RESTHOOK_SUBSCRIPTION_OUTPUT
  GET_RESTHOOK_SUBSCRIPTIONS: AFFINDA_GET_RESTHOOK_SUBSCRIPTIONS_OUTPUT
  GET_USAGE_BY_WORKSPACE: AFFINDA_GET_USAGE_BY_WORKSPACE_OUTPUT
  GET_WORKSPACE: AFFINDA_GET_WORKSPACE_OUTPUT
  GET_WORKSPACES: AFFINDA_GET_WORKSPACES_OUTPUT
  GET_WORKSPACE_MEMBERSHIP: AFFINDA_GET_WORKSPACE_MEMBERSHIP_OUTPUT
  UPDATE_COLLECTION: AFFINDA_UPDATE_COLLECTION_OUTPUT
  UPDATE_DOCUMENT: AFFINDA_UPDATE_DOCUMENT_OUTPUT
  UPDATE_DOCUMENT_DATA: AFFINDA_UPDATE_DOCUMENT_DATA_OUTPUT
  UPDATE_ORGANIZATION: AFFINDA_UPDATE_ORGANIZATION_OUTPUT
  UPDATE_RESTHOOK_SUBSCRIPTION: AFFINDA_UPDATE_RESTHOOK_SUBSCRIPTION_OUTPUT
  UPDATE_WORKSPACE: AFFINDA_UPDATE_WORKSPACE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AFFINDA toolkit.
 */
export const AFFINDA = {
  slug: "affinda",
  tools: {
    /**
     * Tool to update multiple annotations in one request. use when you need to modify parsed values or other fields across many annotations at once.
     */
    BATCH_UPDATE_ANNOTATIONS: "AFFINDA_BATCH_UPDATE_ANNOTATIONS",
    /**
     * Tool to create a new collection. use after you have a valid workspace id and want to group documents by a specific extractor within that workspace.
     */
    CREATE_COLLECTION: "AFFINDA_CREATE_COLLECTION",
    /**
     * Tool to upload a new document for parsing. use when you have the document file or a public url and need to extract structured data immediately.
     */
    CREATE_DOCUMENT: "AFFINDA_CREATE_DOCUMENT",
    /**
     * Tool to create a new organization. use when you have a unique organization name and want to group resources under it.
     */
    CREATE_ORGANIZATION: "AFFINDA_CREATE_ORGANIZATION",
    /**
     * Tool to create a new resthook subscription. use after confirming your webhook endpoint is ready to receive document event notifications.
     */
    CREATE_RESTHOOK_SUBSCRIPTION: "AFFINDA_CREATE_RESTHOOK_SUBSCRIPTION",
    /**
     * Tool to create a new tag. use when you need to label documents in a specific workspace.
     */
    CREATE_TAG: "AFFINDA_CREATE_TAG",
    /**
     * Tool to create a validation result. use when recording validation outcomes for a document after parsing.
     */
    CREATE_VALIDATION_RESULT: "AFFINDA_CREATE_VALIDATION_RESULT",
    /**
     * Tool to create a new workspace. use when you need to programmatically create a workspace container within an organization.
     */
    CREATE_WORKSPACE: "AFFINDA_CREATE_WORKSPACE",
    /**
     * Tool to delete a specific collection by its id. use when you need to remove an unused collection. use after verifying the collection id.
     */
    DELETE_COLLECTION: "AFFINDA_DELETE_COLLECTION",
    /**
     * Tool to delete a specific document by its id. use when you need to remove a document that is incorrect or no longer needed, after confirming the document id.
     */
    DELETE_DOCUMENT: "AFFINDA_DELETE_DOCUMENT",
    /**
     * Tool to delete a specific organization by its id. use when you need to remove an organization after confirming its identifier.
     */
    DELETE_ORGANIZATION: "AFFINDA_DELETE_ORGANIZATION",
    /**
     * Tool to delete a specific resthook subscription by id. use after confirming the subscription identifier when the webhook is no longer needed.
     */
    DELETE_RESTHOOK_SUBSCRIPTION: "AFFINDA_DELETE_RESTHOOK_SUBSCRIPTION",
    /**
     * Tool to delete a specific workspace by its id. use when you need to remove an unused workspace after confirming the workspace id.
     */
    DELETE_WORKSPACE: "AFFINDA_DELETE_WORKSPACE",
    /**
     * Tool to remove a user from a workspace by membership id. use after confirming the workspace membership id to revoke access.
     */
    DELETE_WORKSPACE_MEMBERSHIP: "AFFINDA_DELETE_WORKSPACE_MEMBERSHIP",
    /**
     * Tool to list all tags. use after confirming authentication to fetch tags across workspaces.
     */
    GET_ALL_TAGS: "AFFINDA_GET_ALL_TAGS",
    /**
     * Tool to list validation results for documents. use after processing documents to inspect validation outcomes.
     */
    GET_ALL_VALIDATION_RESULTS: "AFFINDA_GET_ALL_VALIDATION_RESULTS",
    /**
     * Tool to list all workspace memberships for the authenticated user. use when you need to see roles and access across all workspaces.
     */
    GET_ALL_WORKSPACE_MEMBERSHIPS: "AFFINDA_GET_ALL_WORKSPACE_MEMBERSHIPS",
    /**
     * Tool to retrieve a list of all annotations. use after parsing documents to list their annotations.
     */
    GET_ANNOTATIONS: "AFFINDA_GET_ANNOTATIONS",
    /**
     * Tool to retrieve details of a specific collection by its id. use when you need full metadata about a collection after confirming its identifier.
     */
    GET_COLLECTION: "AFFINDA_GET_COLLECTION",
    /**
     * Tool to retrieve a list of all collections. use when you need to list collections in your affinda workspace after authentication.
     */
    GET_COLLECTIONS: "AFFINDA_GET_COLLECTIONS",
    /**
     * Tool to retrieve details of a specific document by its id. use when you need full metadata and parsing results for a document after upload.
     */
    GET_DOCUMENT: "AFFINDA_GET_DOCUMENT",
    /**
     * Tool to retrieve a list of all documents. use when you need to list documents in your affinda workspace after authentication.
     */
    GET_DOCUMENTS: "AFFINDA_GET_DOCUMENTS",
    /**
     * Tool to retrieve details of a specific document type by its id. use when you need to confirm the configuration or metadata of a document type before processing documents.
     */
    GET_DOCUMENT_TYPE: "AFFINDA_GET_DOCUMENT_TYPE",
    /**
     * Tool to retrieve a list of all document types. use when you need to display or filter documents by type before processing.
     */
    GET_DOCUMENT_TYPES: "AFFINDA_GET_DOCUMENT_TYPES",
    /**
     * Tool to retrieve a list of all extractors. use when you need to paginate through available extractors.
     */
    GET_EXTRACTORS: "AFFINDA_GET_EXTRACTORS",
    /**
     * Tool to retrieve details of a specific organization by its id. use when you need to fetch an organization's metadata after confirming its identifier.
     */
    GET_ORGANIZATION: "AFFINDA_GET_ORGANIZATION",
    /**
     * Tool to retrieve a list of all organizations. use after authenticating to list all organizations available to the api key.
     */
    GET_ORGANIZATIONS: "AFFINDA_GET_ORGANIZATIONS",
    /**
     * Tool to retrieve details of a specific resthook subscription by its id. use after confirming its creation to verify its settings.
     */
    GET_RESTHOOK_SUBSCRIPTION: "AFFINDA_GET_RESTHOOK_SUBSCRIPTION",
    /**
     * Tool to retrieve a list of all resthook subscriptions. use after authenticating to list all webhook subscriptions associated with your account.
     */
    GET_RESTHOOK_SUBSCRIPTIONS: "AFFINDA_GET_RESTHOOK_SUBSCRIPTIONS",
    /**
     * Tool to retrieve monthly credits consumption for a workspace. use when tracking usage over a specific period before reporting.
     */
    GET_USAGE_BY_WORKSPACE: "AFFINDA_GET_USAGE_BY_WORKSPACE",
    /**
     * Tool to retrieve details of a specific workspace by its id. use when you need full workspace metadata after confirming its identifier.
     */
    GET_WORKSPACE: "AFFINDA_GET_WORKSPACE",
    /**
     * Tool to retrieve a list of all workspaces. use when you need to list workspaces filtered by organization and optional name.
     */
    GET_WORKSPACES: "AFFINDA_GET_WORKSPACES",
    /**
     * Tool to retrieve details of a specific workspace membership by its id. use when you need to confirm a user's role and details within a workspace after obtaining the membership identifier.
     */
    GET_WORKSPACE_MEMBERSHIP: "AFFINDA_GET_WORKSPACE_MEMBERSHIP",
    /**
     * Tool to update specific fields of a collection. use when you need to rename or reassign a collection after creation.
     */
    UPDATE_COLLECTION: "AFFINDA_UPDATE_COLLECTION",
    /**
     * Tool to update specific fields of a document. use when you need to rename, reassign, or adjust expiry and storage settings after document creation.
     */
    UPDATE_DOCUMENT: "AFFINDA_UPDATE_DOCUMENT",
    /**
     * Tool to update parsed data for a resume or job description document. use after retrieving the document when you want to correct or add parsed fields.
     */
    UPDATE_DOCUMENT_DATA: "AFFINDA_UPDATE_DOCUMENT_DATA",
    /**
     * Tool to update specific fields of an organization. use when you need to modify an organization's name, avatar, or webhook and validation settings after creation.
     */
    UPDATE_ORGANIZATION: "AFFINDA_UPDATE_ORGANIZATION",
    /**
     * Tool to update an existing resthook subscription. use after confirming the subscription identifier to modify its url, event, or activation status.
     */
    UPDATE_RESTHOOK_SUBSCRIPTION: "AFFINDA_UPDATE_RESTHOOK_SUBSCRIPTION",
    /**
     * Tool to update specific fields of a workspace. use when you need to modify a workspace’s name, visibility, or document rejection policy after creation.
     */
    UPDATE_WORKSPACE: "AFFINDA_UPDATE_WORKSPACE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AFFINDA".
 */
export type AFFINDA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AFFINDA".
 */
export type AFFINDA_TRIGGER_EVENTS = {}
