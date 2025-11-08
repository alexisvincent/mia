// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FILES_COM's FILES_COM_DELETE_API_KEY tool input.
 */
type FILES_COM_DELETE_API_KEY_INPUT = {
  /**
   * Api Key Id
   * @description The unique identifier of the API key to delete.
   */
  api_key_id?: number;
};

/**
 * Type of FILES_COM's FILES_COM_DELETE_API_KEY tool output.
 */
type FILES_COM_DELETE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information or error details if deletion failed.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the API key was successfully deleted.
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
 * Type of FILES_COM's FILES_COM_DELETE_PERMISSION tool input.
 */
type FILES_COM_DELETE_PERMISSION_INPUT = {
  /**
   * Permission Id
   * @description The unique identifier of the permission to delete.
   */
  permission_id?: number;
};

/**
 * Type of FILES_COM's FILES_COM_DELETE_PERMISSION tool output.
 */
type FILES_COM_DELETE_PERMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information or error details if deletion failed.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the permission was successfully deleted.
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
 * Type of FILES_COM's FILES_COM_DELETE_SHARE tool input.
 */
type FILES_COM_DELETE_SHARE_INPUT = {
  /**
   * Share Id
   * @description ID of the share link to delete.
   */
  share_id?: number;
};

/**
 * Type of FILES_COM's FILES_COM_DELETE_SHARE tool output.
 */
type FILES_COM_DELETE_SHARE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the API. 204 indicates successful deletion.
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
 * Type of FILES_COM's FILES_COM_GET_S3_KEY_FOR_UPLOAD tool input.
 */
type FILES_COM_GET_S3_KEY_FOR_UPLOAD_INPUT = {
  /**
   * FileUploadable
   * @description File object to upload for temporary hosting on Files.com
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
   * @description Absolute local path to the file to upload (fallback).
   * @default null
   */
  file_path: string | null;
};

/**
 * Type of FILES_COM's FILES_COM_GET_S3_KEY_FOR_UPLOAD tool output.
 */
type FILES_COM_GET_S3_KEY_FOR_UPLOAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Mimetype
       * @description MIME type of the uploaded file.
       */
      mimetype: string;
      /**
       * Name
       * @description Original filename of the uploaded file.
       */
      name: string;
      /**
       * S3Key
       * @description Generated temporary object key (Files.com path) for the uploaded file.
       */
      s3key: string;
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
 * Type of FILES_COM's FILES_COM_LIST_FOLDERS tool input.
 */
type FILES_COM_LIST_FOLDERS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (1-indexed).
   * @default 1
   */
  page: number | null;
  /**
   * Parent Id
   * @description ID of the parent folder to list folders for. Defaults to root.
   * @default null
   */
  parent_id: number | null;
  /**
   * Per Page
   * @description Number of folders per page.
   * @default 50
   */
  per_page: number | null;
  /**
   * Search
   * @description Partial name filter for folders.
   * @default null
   */
  search: string | null;
  /**
   * Sort By
   * @description Field to sort by.
   * @default null
   * @enum {string|null}
   */
  sort_by: "id" | "name" | "created_at" | "updated_at" | null;
  /**
   * Sort Direction
   * @description Direction to sort: ascending or descending.
   * @default null
   * @enum {string|null}
   */
  sort_direction: "asc" | "desc" | null;
};

/**
 * Type of FILES_COM's FILES_COM_LIST_FOLDERS tool output.
 */
type FILES_COM_LIST_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description List of folders.
   */
  data?: {
      /**
       * Available Inherited Permissions
       * @description Available permissions to inherit.
       * @default null
       */
      available_inherited_permissions: string[] | null;
      /**
       * Created At
       * @description Creation timestamp in ISO 8601.
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description Folder description.
       * @default null
       */
      description: string | null;
      /**
       * Full Path
       * @description Full path from server root.
       * @default null
       */
      full_path: string | null;
      /**
       * Group Ids
       * @description IDs of groups that have access.
       * @default null
       */
      group_ids: number[] | null;
      /**
       * Id
       * @description Unique folder ID.
       * @default null
       */
      id: number | null;
      /**
       * Inherited Permissions
       * @description Inherited permissions.
       * @default null
       */
      inherited_permissions: string[] | null;
      /**
       * Name
       * @description Folder name.
       * @default null
       */
      name: string | null;
      /**
       * Parent Id
       * @description Parent folder ID.
       * @default null
       */
      parent_id: number | null;
      /**
       * Path
       * @description Relative path from root.
       * @default null
       */
      path: string | null;
      /**
       * Private
       * @description Folder privacy flag.
       * @default null
       */
      private: boolean | null;
      /**
       * Roles
       * @description Roles associated with this folder.
       * @default null
       */
      roles: string[] | null;
      /**
       * Total Items
       * @description Number of items inside the folder.
       * @default null
       */
      total_items: number | null;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601.
       * @default null
       */
      updated_at: string | null;
      /**
       * User Ids
       * @description IDs of users that have access.
       * @default null
       */
      user_ids: number[] | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination information.
   */
  pagination?: {
      /**
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * Per Page
       * @description Items per page.
       */
      per_page: number;
      /**
       * Total Entries
       * @description Total number of entries.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FILES_COM's FILES_COM_LIST_GROUPS tool input.
 */
type FILES_COM_LIST_GROUPS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (1-indexed).
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of groups to return per page (max 1000).
   * @default 100
   */
  per_page: number;
};

/**
 * Type of FILES_COM's FILES_COM_LIST_GROUPS tool output.
 */
type FILES_COM_LIST_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groups
       * @description List of group objects returned.
       */
      groups: {
          /**
           * Created At
           * @description ISO8601 timestamp when the group was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Description
           * @description Optional description of the group.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the group.
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description Name of the group.
           * @default null
           */
          name: string | null;
          /**
           * Updated At
           * @description ISO8601 timestamp when the group was last updated.
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of groups returned per page.
       */
      per_page: number;
      /**
       * Total Entries
       * @description Total number of groups available.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description Total pages available based on per_page.
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
 * Type of FILES_COM's FILES_COM_LIST_PERMISSIONS tool input.
 */
type FILES_COM_LIST_PERMISSIONS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination.
   * @default null
   */
  per_page: number | null;
  /**
   * Resource Id
   * @description Identifier of the resource.
   */
  resource_id?: number;
  /**
   * Resource Type
   * @description Type of the resource to list permissions for.
   * @enum {string}
   */
  resource_type?: "file" | "folder" | "site" | "user";
  /**
   * Sort
   * @description Sort order of the permissions list. Prepend '-' for descending.
   * @default null
   * @enum {string|null}
   */
  sort: "created_at" | "-created_at" | "updated_at" | "-updated_at" | null;
};

/**
 * Type of FILES_COM's FILES_COM_LIST_PERMISSIONS tool output.
 */
type FILES_COM_LIST_PERMISSIONS_OUTPUT = {
  /**
   * Data
   * @description List of permission records.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the permission was created (ISO 8601).
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description Unique identifier of the permission record.
       */
      id: number;
      /**
       * Permissions
       * @description List of permissions granted (e.g., ['read', 'write']).
       */
      permissions: string[];
      /**
       * Resource Id
       * @description Identifier of the resource.
       */
      resource_id: number;
      /**
       * Resource Type
       * @description Resource type (e.g., 'file').
       */
      resource_type: string;
      /**
       * Subject
       * @description Subject type (e.g., 'user', 'group').
       */
      subject: string;
      /**
       * Subject Id
       * @description Identifier of the subject (user or group).
       */
      subject_id: number;
      /**
       * Updated At
       * @description Timestamp when the permission was last updated (ISO 8601).
       * @default null
       */
      updated_at: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata for the result set.
   */
  meta?: {
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * Total Entries
       * @description Total number of entries available.
       */
      total_entries: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "FILES_COM".
 */
export type FILES_COM_TOOL_INPUTS = {
  DELETE_API_KEY: FILES_COM_DELETE_API_KEY_INPUT
  DELETE_PERMISSION: FILES_COM_DELETE_PERMISSION_INPUT
  DELETE_SHARE: FILES_COM_DELETE_SHARE_INPUT
  GET_S3_KEY_FOR_UPLOAD: FILES_COM_GET_S3_KEY_FOR_UPLOAD_INPUT
  LIST_FOLDERS: FILES_COM_LIST_FOLDERS_INPUT
  LIST_GROUPS: FILES_COM_LIST_GROUPS_INPUT
  LIST_PERMISSIONS: FILES_COM_LIST_PERMISSIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FILES_COM".
 */
export type FILES_COM_TOOL_OUTPUTS = {
  DELETE_API_KEY: FILES_COM_DELETE_API_KEY_OUTPUT
  DELETE_PERMISSION: FILES_COM_DELETE_PERMISSION_OUTPUT
  DELETE_SHARE: FILES_COM_DELETE_SHARE_OUTPUT
  GET_S3_KEY_FOR_UPLOAD: FILES_COM_GET_S3_KEY_FOR_UPLOAD_OUTPUT
  LIST_FOLDERS: FILES_COM_LIST_FOLDERS_OUTPUT
  LIST_GROUPS: FILES_COM_LIST_GROUPS_OUTPUT
  LIST_PERMISSIONS: FILES_COM_LIST_PERMISSIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FILES_COM toolkit.
 */
export const FILES_COM = {
  slug: "files_com",
  tools: {
    /**
     * Tool to delete an API key. Use when you need to revoke an API key after confirming its identifier.
     */
    DELETE_API_KEY: "FILES_COM_DELETE_API_KEY",
    /**
     * Tool to delete a specified permission. Use when you need to remove a permission by its ID after verifying the identifier.
     */
    DELETE_PERMISSION: "FILES_COM_DELETE_PERMISSION",
    /**
     * Tool to delete a specified share link. Use when you need to revoke access to a shared item after confirming its share ID.
     */
    DELETE_SHARE: "FILES_COM_DELETE_SHARE",
    /**
     * Tool to generate a temporary key for file uploads by uploading the file to Files.com. Useful when you need to host a local file temporarily before importing or sharing.
     */
    GET_S3_KEY_FOR_UPLOAD: "FILES_COM_GET_S3_KEY_FOR_UPLOAD",
    /**
     * Tool to list folders. Use when you need to retrieve folders under a parent with pagination.
     */
    LIST_FOLDERS: "FILES_COM_LIST_FOLDERS",
    /**
     * Tool to list groups. Use when you need to retrieve a paginated list of all groups before performing group-related operations.
     */
    LIST_GROUPS: "FILES_COM_LIST_GROUPS",
    /**
     * Tool to retrieve permissions for a specified resource. Use when you need to inspect who has access and what level for a given file or folder.
     */
    LIST_PERMISSIONS: "FILES_COM_LIST_PERMISSIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FILES_COM".
 */
export type FILES_COM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FILES_COM".
 */
export type FILES_COM_TRIGGER_EVENTS = {}
