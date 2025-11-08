// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of UPLOADCARE's UPLOADCARE_CREATE_WEBHOOK tool input.
 */
type UPLOADCARE_CREATE_WEBHOOK_INPUT = {
  /**
   * Event
   * @description Type of event to subscribe to (e.g., 'file.uploaded', 'file.deleted').
   */
  event?: string;
  /**
   * Inactive
   * @description Mark webhook as inactive after creation.
   * @default null
   */
  inactive: boolean | null;
  /**
   * Project
   * Format: uuid
   * @description UUID of the project to associate the webhook with.
   */
  project?: unknown;
  /**
   * Signing Secret
   * @description Custom secret for webhook signature. If not provided, a random secret will be generated.
   * @default null
   */
  signing_secret: string | null;
  /**
   * Target Url
   * Format: uri
   * @description Target URL to send the webhook events to.
   */
  target_url?: unknown;
};

/**
 * Type of UPLOADCARE's UPLOADCARE_CREATE_WEBHOOK tool output.
 */
type UPLOADCARE_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * Format: date-time
       * @description ISO date/time when the webhook was created.
       */
      created: string;
      /**
       * Event
       * @description Subscribed event type.
       */
      event: string;
      /**
       * Id
       * @description Unique identifier of the created webhook.
       */
      id: string;
      /**
       * Is Active
       * @description Whether the webhook is active.
       */
      is_active: boolean;
      /**
       * Project
       * Format: uuid
       * @description UUID of the associated project.
       */
      project: unknown;
      /**
       * Signing Secret
       * @description Secret used to sign webhook payloads.
       */
      signing_secret: string;
      /**
       * Target Url
       * Format: uri
       * @description Target URL of the webhook.
       */
      target_url: unknown;
      /**
       * Updated
       * Format: date-time
       * @description ISO date/time when the webhook was last updated.
       */
      updated: string;
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
 * Type of UPLOADCARE's UPLOADCARE_DELETE_FILE_METADATA_KEY tool input.
 */
type UPLOADCARE_DELETE_FILE_METADATA_KEY_INPUT = {
  /**
   * Key
   * @description The metadata key to delete.
   */
  key?: string;
  /**
   * Uuid
   * @description The UUID of the file.
   */
  uuid?: string;
};

/**
 * Type of UPLOADCARE's UPLOADCARE_DELETE_FILE_METADATA_KEY tool output.
 */
type UPLOADCARE_DELETE_FILE_METADATA_KEY_OUTPUT = {
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
 * Type of UPLOADCARE's UPLOADCARE_DELETE_WEBHOOK tool input.
 */
type UPLOADCARE_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the webhook to delete.
   */
  id?: string;
};

/**
 * Type of UPLOADCARE's UPLOADCARE_DELETE_WEBHOOK tool output.
 */
type UPLOADCARE_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicator that the webhook was successfully deleted.
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
 * Type of UPLOADCARE's UPLOADCARE_GET_FILE_DOWNLOAD_URL tool input.
 */
type UPLOADCARE_GET_FILE_DOWNLOAD_URL_INPUT = {
  /**
   * File Id
   * @description The unique identifier of the file to retrieve the download URL for.
   */
  file_id?: string;
};

/**
 * Type of UPLOADCARE's UPLOADCARE_GET_FILE_DOWNLOAD_URL tool output.
 */
type UPLOADCARE_GET_FILE_DOWNLOAD_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description Temporary direct download URL for the file.
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
 * Type of UPLOADCARE's UPLOADCARE_GET_FILE_INFO tool input.
 */
type UPLOADCARE_GET_FILE_INFO_INPUT = {
  /**
   * Uuid
   * @description The UUID of the file to retrieve info for.
   */
  uuid?: string;
};

/**
 * Type of UPLOADCARE's UPLOADCARE_GET_FILE_INFO tool output.
 */
type UPLOADCARE_GET_FILE_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Appdata
       * @description Application data if present.
       */
      appdata: {
          [key: string]: unknown;
      };
      /**
       * Content Info
       * @description Content-specific information (e.g., image dimensions).
       */
      content_info: {
          [key: string]: unknown;
      };
      /**
       * Datetime Removed
       * @description Removal timestamp in ISO 8601 format, or null if not removed.
       * @default null
       */
      datetime_removed: string | null;
      /**
       * Datetime Stored
       * @description Storage timestamp in ISO 8601 format, or null if not stored.
       * @default null
       */
      datetime_stored: string | null;
      /**
       * Datetime Uploaded
       * @description Upload timestamp in ISO 8601 format.
       */
      datetime_uploaded: string;
      /**
       * Is Image
       * @description Whether the file is an image.
       */
      is_image: boolean;
      /**
       * Is Ready
       * @description Whether the file is ready for use.
       */
      is_ready: boolean;
      /**
       * Metadata
       * @description User-provided metadata attached to the file.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Mime Type
       * @description File MIME type.
       */
      mime_type: string;
      /**
       * Original File Url
       * @description Temporary download link, valid for 24 hours.
       * @default null
       */
      original_file_url: string | null;
      /**
       * Original Filename
       * @description Original filename at upload.
       */
      original_filename: string;
      /**
       * Size
       * @description File size in bytes.
       */
      size: number;
      /**
       * Url
       * @description API URL path to this file.
       */
      url: string;
      /**
       * Uuid
       * @description The file's UUID.
       */
      uuid: string;
      /**
       * Variations
       * @description File variations if applicable.
       * @default null
       */
      variations: {
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
 * Type of UPLOADCARE's UPLOADCARE_GET_PROJECT_INFO tool input.
 */
type UPLOADCARE_GET_PROJECT_INFO_INPUT = object;

/**
 * Type of UPLOADCARE's UPLOADCARE_GET_PROJECT_INFO tool output.
 */
type UPLOADCARE_GET_PROJECT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auto Store
       * @description Whether files are auto-stored by default.
       */
      auto_store: boolean;
      /**
       * Collaborators
       * @description List of project collaborators.
       */
      collaborators: {
          /**
           * Email
           * @description Collaborator's email address.
           */
          email: string;
          /**
           * Id
           * @description Collaborator's unique identifier.
           */
          id: string;
          /**
           * Name
           * @description Collaborator's name.
           */
          name: string;
          /**
           * Roles
           * @description Roles assigned to the collaborator.
           */
          roles: string[];
      }[];
      /**
       * Datetime Created
       * @description Project creation timestamp in ISO 8601 format.
       */
      datetime_created: string;
      /**
       * Datetime Updated
       * @description Last project update timestamp in ISO 8601 format.
       */
      datetime_updated: string;
      /**
       * Name
       * @description Project name.
       */
      name: string;
      /**
       * Pub Key
       * @description Public API key for the project.
       */
      pub_key: string;
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
 * Type of UPLOADCARE's UPLOADCARE_LIST_FILES tool input.
 */
type UPLOADCARE_LIST_FILES_INPUT = {
  /**
   * From Date
   * @description Return files uploaded after this ISO 8601 datetime.
   * @default null
   */
  from_date: string | null;
  /**
   * Include
   * @description Include total file count in the response by specifying 'total'.
   * @default null
   * @constant
   */
  include: "total";
  /**
   * Limit
   * @description Number of files to return (1-1000).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Pagination offset, zero-based.
   * @default null
   */
  offset: number | null;
  /**
   * Ordering
   * @description Comma-separated fields to sort by, e.g., 'datetime_uploaded' or '-size'.
   * @default null
   */
  ordering: string | null;
  /**
   * Removed
   * @description Filter by removal status ('true' or 'false').
   * @default null
   * @enum {string|null}
   */
  removed: "true" | "false" | null;
  /**
   * Stored
   * @description Filter by storage status ('true' or 'false').
   * @default null
   * @enum {string|null}
   */
  stored: "true" | "false" | null;
  /**
   * To Date
   * @description Return files uploaded before this ISO 8601 datetime.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of UPLOADCARE's UPLOADCARE_LIST_FILES tool output.
 */
type UPLOADCARE_LIST_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files Total
       * @description Estimated total number of files (only present if include=total).
       * @default null
       */
      files_total: number | null;
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
       * @description List of file metadata objects.
       */
      results: {
          /**
           * Cdn Url
           * @description CDN URL for this file, or null.
           * @default null
           */
          cdn_url: string | null;
          /**
           * Datetime Removed
           * @description Removal datetime in ISO 8601 format, or null if not removed.
           * @default null
           */
          datetime_removed: string | null;
          /**
           * Datetime Stored
           * @description Storage datetime in ISO 8601 format, or null if not stored.
           * @default null
           */
          datetime_stored: string | null;
          /**
           * Datetime Uploaded
           * @description Upload datetime in ISO 8601 format.
           */
          datetime_uploaded: string;
          /**
           * Is Image
           * @description Whether the file is an image.
           */
          is_image: boolean;
          /**
           * Is Ready
           * @description Whether the file is ready for use.
           */
          is_ready: boolean;
          /**
           * Metadata
           * @description User-provided metadata attached to the file.
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Mime Type
           * @description File MIME type, or null if unknown.
           * @default null
           */
          mime_type: string | null;
          /**
           * Original File Url
           * @description Temporary download link valid for 24 hours, or null if not available.
           * @default null
           */
          original_file_url: string | null;
          /**
           * Original Filename
           * @description Original filename on upload.
           */
          original_filename: string;
          /**
           * Removed
           * @description Whether the file is removed.
           */
          removed: boolean;
          /**
           * Size
           * @description File size in bytes.
           */
          size: number;
          /**
           * Stored
           * @description Whether the file is stored.
           */
          stored: boolean;
          /**
           * Url
           * @description API URL path to this file.
           */
          url: string;
          /**
           * Uuid
           * @description File UUID.
           */
          uuid: string;
          /**
           * Variations
           * @description Variations for video conversion or other processed variants.
           * @default null
           */
          variations: {
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
 * Type of UPLOADCARE's UPLOADCARE_LIST_GROUPS tool input.
 */
type UPLOADCARE_LIST_GROUPS_INPUT = {
  /**
   * Limit
   * @description Number of groups to return per page (1-100).
   * @default 20
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of groups to skip before starting the result set.
   * @default 0
   */
  offset: number | null;
  /**
   * Ordering
   * @description Sort by 'datetime_created'; prefix with '-' for descending.
   * @default datetime_created
   * @enum {string|null}
   */
  ordering: "datetime_created" | "-datetime_created" | null;
};

/**
 * Type of UPLOADCARE's UPLOADCARE_LIST_GROUPS tool output.
 */
type UPLOADCARE_LIST_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
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
       * @description List of groups returned by the API.
       */
      results: {
          /**
           * Cdn Url
           * @description CDN URL for the group.
           */
          cdn_url: string;
          /**
           * Datetime Created
           * @description Timestamp when the group was created (ISO 8601).
           */
          datetime_created: string;
          /**
           * Datetime Stored
           * @description Timestamp when the group was stored (ISO 8601), if available.
           * @default null
           */
          datetime_stored: string | null;
          /**
           * Files
           * @description List of file resource URLs in the group.
           */
          files: string[];
          /**
           * Files Count
           * @description Number of files in the group.
           */
          files_count: number;
          /**
           * Id
           * @description UUID of the group.
           */
          id: string;
          /**
           * Url
           * @description API URL of the group.
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
 * Type of UPLOADCARE's UPLOADCARE_LIST_WEBHOOKS tool input.
 */
type UPLOADCARE_LIST_WEBHOOKS_INPUT = {
  /**
   * Limit
   * @description Maximum number of webhook subscriptions to return (pagination).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of webhook subscriptions to skip before starting the page (pagination).
   * @default null
   */
  offset: number | null;
};

/**
 * Type of UPLOADCARE's UPLOADCARE_LIST_WEBHOOKS tool output.
 */
type UPLOADCARE_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
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
       * @description List of webhook subscription objects.
       */
      results: {
          /**
           * Created
           * @description ISO 8601 datetime when the webhook was created.
           */
          created: string;
          /**
           * Event
           * @description Event type that triggers the webhook (e.g., 'file.uploaded').
           */
          event: string;
          /**
           * Id
           * @description Webhook subscription ID.
           */
          id: string;
          /**
           * Is Active
           * @description Whether the webhook subscription is active.
           */
          is_active: boolean;
          /**
           * Project
           * @description UUID of the project associated with the webhook.
           */
          project: string;
          /**
           * Signing Secret
           * @description Secret used to sign webhook payloads (only returned on creation).
           * @default null
           */
          signing_secret: string | null;
          /**
           * Target Url
           * @description URL to which webhook event notifications are sent.
           */
          target_url: string;
          /**
           * Updated
           * @description ISO 8601 datetime when the webhook was last updated.
           */
          updated: string;
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
 * Type of UPLOADCARE's UPLOADCARE_ROTATE_IMAGE tool input.
 */
type UPLOADCARE_ROTATE_IMAGE_INPUT = {
  /**
   * Degrees
   * @description Rotation angle in degrees clockwise. Must be one of [90, 180, 270].
   * @enum {integer}
   */
  degrees?: 90 | 180 | 270;
  /**
   * Uuid
   * @description UUID of the image to rotate. Must follow 8-4-4-4-12 hex format.
   */
  uuid?: string;
};

/**
 * Type of UPLOADCARE's UPLOADCARE_ROTATE_IMAGE tool output.
 */
type UPLOADCARE_ROTATE_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description CDN URL of the rotated image.
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
 * Type of UPLOADCARE's UPLOADCARE_STORE_FILE tool input.
 */
type UPLOADCARE_STORE_FILE_INPUT = {
  /**
   * Uuid
   * @description UUID of the Uploadcare file to mark as stored. Must follow 8-4-4-4-12 hex format.
   */
  uuid?: string;
};

/**
 * Type of UPLOADCARE's UPLOADCARE_STORE_FILE tool output.
 */
type UPLOADCARE_STORE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datetime Removed
       * @description Date/time the file was removed in ISO 8601 format, or null if not removed.
       * @default null
       */
      datetime_removed: string | null;
      /**
       * Datetime Stored
       * @description Date/time the file was stored in ISO 8601 format, or null if not stored.
       * @default null
       */
      datetime_stored: string | null;
      /**
       * Is Image
       * @description Whether the file is an image.
       */
      is_image: boolean;
      /**
       * Is Ready
       * @description Whether the file is ready for use.
       */
      is_ready: boolean;
      /**
       * Mime Type
       * @description MIME type of the file.
       */
      mime_type: string;
      /**
       * Original Filename
       * @description Original filename at upload.
       */
      original_filename: string;
      /**
       * Size
       * @description Size of the file in bytes.
       */
      size: number;
      /**
       * Url
       * @description CDN URL to access the file.
       */
      url: string;
      /**
       * Uuid
       * @description UUID of the file.
       */
      uuid: string;
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
 * Type of UPLOADCARE's UPLOADCARE_UPLOADCARE_IMAGE_MIRROR tool input.
 */
type UPLOADCARE_UPLOADCARE_IMAGE_MIRROR_INPUT = {
  /**
   * Uuid
   * @description The Uploadcare file UUID (e.g., '3e0923f2-e05a-4b37-9f0d-343b981c9d70') or full CDN URL (e.g., 'https://ucarecdn.com/3e0923f2-e05a-4b37-9f0d-343b981c9d70/').
   */
  uuid?: string;
};

/**
 * Type of UPLOADCARE's UPLOADCARE_UPLOADCARE_IMAGE_MIRROR tool output.
 */
type UPLOADCARE_UPLOADCARE_IMAGE_MIRROR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Mirror Url
       * @description CDN URL of the horizontally mirrored image.
       */
      mirror_url: string;
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
 * Type map of all available tool input types for toolkit "UPLOADCARE".
 */
export type UPLOADCARE_TOOL_INPUTS = {
  CREATE_WEBHOOK: UPLOADCARE_CREATE_WEBHOOK_INPUT
  DELETE_FILE_METADATA_KEY: UPLOADCARE_DELETE_FILE_METADATA_KEY_INPUT
  DELETE_WEBHOOK: UPLOADCARE_DELETE_WEBHOOK_INPUT
  GET_FILE_DOWNLOAD_URL: UPLOADCARE_GET_FILE_DOWNLOAD_URL_INPUT
  GET_FILE_INFO: UPLOADCARE_GET_FILE_INFO_INPUT
  GET_PROJECT_INFO: UPLOADCARE_GET_PROJECT_INFO_INPUT
  LIST_FILES: UPLOADCARE_LIST_FILES_INPUT
  LIST_GROUPS: UPLOADCARE_LIST_GROUPS_INPUT
  LIST_WEBHOOKS: UPLOADCARE_LIST_WEBHOOKS_INPUT
  ROTATE_IMAGE: UPLOADCARE_ROTATE_IMAGE_INPUT
  STORE_FILE: UPLOADCARE_STORE_FILE_INPUT
  UPLOADCARE_IMAGE_MIRROR: UPLOADCARE_UPLOADCARE_IMAGE_MIRROR_INPUT
}

/**
 * Type map of all available tool input types for toolkit "UPLOADCARE".
 */
export type UPLOADCARE_TOOL_OUTPUTS = {
  CREATE_WEBHOOK: UPLOADCARE_CREATE_WEBHOOK_OUTPUT
  DELETE_FILE_METADATA_KEY: UPLOADCARE_DELETE_FILE_METADATA_KEY_OUTPUT
  DELETE_WEBHOOK: UPLOADCARE_DELETE_WEBHOOK_OUTPUT
  GET_FILE_DOWNLOAD_URL: UPLOADCARE_GET_FILE_DOWNLOAD_URL_OUTPUT
  GET_FILE_INFO: UPLOADCARE_GET_FILE_INFO_OUTPUT
  GET_PROJECT_INFO: UPLOADCARE_GET_PROJECT_INFO_OUTPUT
  LIST_FILES: UPLOADCARE_LIST_FILES_OUTPUT
  LIST_GROUPS: UPLOADCARE_LIST_GROUPS_OUTPUT
  LIST_WEBHOOKS: UPLOADCARE_LIST_WEBHOOKS_OUTPUT
  ROTATE_IMAGE: UPLOADCARE_ROTATE_IMAGE_OUTPUT
  STORE_FILE: UPLOADCARE_STORE_FILE_OUTPUT
  UPLOADCARE_IMAGE_MIRROR: UPLOADCARE_UPLOADCARE_IMAGE_MIRROR_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's UPLOADCARE toolkit.
 */
export const UPLOADCARE = {
  slug: "uploadcare",
  tools: {
    /**
     * Tool to create a new webhook. use when you need to subscribe to file events and receive notifications at your service. ensure you have an existing project uuid before using this tool.
     */
    CREATE_WEBHOOK: "UPLOADCARE_CREATE_WEBHOOK",
    /**
     * Tool to delete a specific metadata key from an uploadcare file. use when you need to remove obsolete metadata after file processing.
     */
    DELETE_FILE_METADATA_KEY: "UPLOADCARE_DELETE_FILE_METADATA_KEY",
    /**
     * Tool to delete a specific webhook. use when you need to remove a webhook by its id after confirming its details.
     */
    DELETE_WEBHOOK: "UPLOADCARE_DELETE_WEBHOOK",
    /**
     * Tool to retrieve a temporary download url for a file. use when you need a direct download link after uploading a file.
     */
    GET_FILE_DOWNLOAD_URL: "UPLOADCARE_GET_FILE_DOWNLOAD_URL",
    /**
     * Tool to get information about a specific file. use after uploading a file to retrieve detailed metadata and usage information.
     */
    GET_FILE_INFO: "UPLOADCARE_GET_FILE_INFO",
    /**
     * Tool to get information about the current uploadcare project. use when you need to retrieve project configuration details.
     */
    GET_PROJECT_INFO: "UPLOADCARE_GET_PROJECT_INFO",
    /**
     * Tool to list files in a project. use when you need to retrieve uploaded files with optional filters, pagination, or include total count.
     */
    LIST_FILES: "UPLOADCARE_LIST_FILES",
    /**
     * Tool to list groups in the project. use when you need to retrieve paginated groups of files.
     */
    LIST_GROUPS: "UPLOADCARE_LIST_GROUPS",
    /**
     * Tool to list webhook subscriptions. use when you need a paginated list of webhooks for your project after configuring authentication.
     */
    LIST_WEBHOOKS: "UPLOADCARE_LIST_WEBHOOKS",
    /**
     * Tool to rotate an image by specified degrees clockwise. use when you need to rotate an uploaded image by 90, 180, or 270 degrees. use after confirming the file uuid.
     */
    ROTATE_IMAGE: "UPLOADCARE_ROTATE_IMAGE",
    /**
     * Tool to mark an uploadcare file as permanently stored. use after uploading a file when you need to store it permanently.
     */
    STORE_FILE: "UPLOADCARE_STORE_FILE",
    /**
     * Tool to mirror an image horizontally via uploadcare cdn. use when you need the url of a horizontally flipped image.
     */
    UPLOADCARE_IMAGE_MIRROR: "UPLOADCARE_UPLOADCARE_IMAGE_MIRROR",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "UPLOADCARE".
 */
export type UPLOADCARE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "UPLOADCARE".
 */
export type UPLOADCARE_TRIGGER_EVENTS = {}
