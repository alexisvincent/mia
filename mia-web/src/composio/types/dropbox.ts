// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DROPBOX's DROPBOX_CREATE_FILE_REQUEST tool input.
 */
type DROPBOX_CREATE_FILE_REQUEST_INPUT = {
  /**
   * FileRequestDeadlineRequest
   * @description Represents the deadline parameters for a file request.
   * @default null
   */
  deadline: {
      /**
       * Allow Late Uploads
       * @description Specifies the policy for uploads after the deadline. 'seven_days' or 'thirty_days' allows uploads for that period. 'always' allows indefinite late uploads. 'false' (or not set) means no late uploads.
       * @default null
       * @enum {unknown|null}
       */
      allow_late_uploads: "seven_days" | "thirty_days" | "always" | "false" | null;
      /**
       * Due Date
       * Format: date-time
       * @description The deadline for the file request. Timestamps should be in UTC. Example: '2024-08-15T17:00:00Z'
       * @default null
       */
      due_date: string | null;
  } | null;
  /**
   * Destination
   * @description The path in the user's Dropbox where uploaded files will be saved. Must be a path starting with '/'. Example: '/Homework/math'
   */
  destination?: string;
  /**
   * Open
   * @description Whether the file request should be open by default. If true, the file request will start accepting files immediately.
   * @default true
   */
  open: boolean | null;
  /**
   * Title
   * @description The title of the new file request. Must be 1 character or more.
   */
  title?: string;
};

/**
 * Type of DROPBOX's DROPBOX_CREATE_FILE_REQUEST tool output.
 */
type DROPBOX_CREATE_FILE_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * Format: date-time
       * @description The exact date and time when the file request was created, in UTC.
       */
      created: string;
      /**
       * FileRequestDeadlineResponse
       * @description Represents the deadline information as returned by the Dropbox API for a file request.
       * @default null
       */
      deadline: {
          /**
           * Allow Late Uploads
           * @description Specifies the policy for uploads after the deadline. 'seven_days' or 'thirty_days' allows uploads for that period after the deadline. 'always' allows indefinite late uploads. 'false' (or not set) means no late uploads allowed.
           * @default null
           * @enum {unknown|null}
           */
          allow_late_uploads: "seven_days" | "thirty_days" | "always" | "false" | null;
          /**
           * Due Date
           * Format: date-time
           * @description The deadline for the file request. This is a timestamp representing the exact date and time of the deadline.
           * @default null
           */
          due_date: string | null;
      } | null;
      /**
       * Destination
       * @description The path in the user's Dropbox where uploaded files will be saved. This path must be valid and accessible.
       */
      destination: string;
      /**
       * File Count
       * @description The number of files that have been uploaded to this file request so far.
       */
      file_count: number;
      /**
       * Id
       * @description The unique identifier for the created file request. Example: 'fr_1234567890abcdef'
       */
      id: string;
      /**
       * Is Open
       * @description Indicates whether the file request is currently open and accepting uploads.
       */
      is_open: boolean;
      /**
       * Title
       * @description The title of the file request as provided by the user.
       */
      title: string;
      /**
       * Url
       * Format: uri
       * @description The URL that can be shared with users to upload files to this request.
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
 * Type of DROPBOX's DROPBOX_CREATE_FOLDER tool input.
 */
type DROPBOX_CREATE_FOLDER_INPUT = {
  /**
   * Autorename
   * @description If there's a conflict, have Dropbox automatically rename the folder. The default for this field is False.
   * @default false
   */
  autorename: boolean;
  /**
   * Path
   * @description Path in the user's Dropbox to create the new folder.
   */
  path?: string;
};

/**
 * Type of DROPBOX's DROPBOX_CREATE_FOLDER tool output.
 */
type DROPBOX_CREATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Async Job Id
       * @description If the operation is asynchronous, this is the ID of the asynchronous job. Otherwise, this field is not present.
       * @default null
       */
      async_job_id: string | null;
      /**
       * Metadata
       * @description Metadata of the created folder.
       */
      metadata: {
          /**
           * .Tag
           * @description The type of the metadata, always 'folder'.
           */
          ".tag": string;
          /**
           * Id
           * @description A unique identifier for the folder.
           */
          id: string;
          /**
           * Name
           * @description The last component of the path (including extension).
           */
          name: string;
          /**
           * Path Display
           * @description The cased path to be used for display purposes only. This field will be null if the file or folder is not mounted.
           * @default null
           */
          path_display: string | null;
          /**
           * Path Lower
           * @description The lowercased full path in the user's Dropbox. This always starts with a slash. This field will be null if the file or folder is not mounted.
           * @default null
           */
          path_lower: string | null;
          /**
           * Property Groups
           * @description Additional information if the file has custom properties with the property template specified. This field will be null if the file or folder is not mounted.
           * @default null
           */
          property_groups: {
              /**
               * Fields
               * @description The property field values for this property group.
               */
              fields: {
                  /**
                   * Name
                   * @description The name or key of a custom property.
                   */
                  name: string;
                  /**
                   * Value
                   * @description The value of a custom property.
                   */
                  value: string;
              }[];
              /**
               * Template Id
               * @description A unique identifier for a property template type.
               */
              template_id: string;
          }[] | null;
          /**
           * FolderSharingInfo
           * @description Set if the folder is contained in a shared folder or is a shared folder mount point.
           * @default null
           */
          sharing_info: {
              /**
               * No Access
               * @description True if the user is not allowed to access the CSLF member folder. This field will be null if the file or folder is not mounted.
               * @default null
               */
              no_access: boolean | null;
              /**
               * Parent Shared Folder Id
               * @description The ID of the parent shared folder.
               * @default null
               */
              parent_shared_folder_id: string | null;
              /**
               * Read Only
               * @description True if the folder is a read-only CSLF for this user.
               */
              read_only: boolean;
              /**
               * Shared Folder Id
               * @description The ID of the shared folder.
               * @default null
               */
              shared_folder_id: string | null;
              /**
               * Traverse Only
               * @description True if the folder is a traverse-only CSLF for this user. This field will be null if the file or folder is not mounted.
               * @default null
               */
              traverse_only: boolean | null;
          } | null;
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
 * Type of DROPBOX's DROPBOX_CREATE_PAPER tool input.
 */
type DROPBOX_CREATE_PAPER_INPUT = {
  /**
   * Content
   * @description Content of the paper document
   */
  content?: string;
  /**
   * Import Format
   * @description Format of the provided content
   * @default html
   */
  import_format: string;
  /**
   * Path
   * @description Path in Dropbox where the Paper document will be created. Do NOT include any file extension - Paper docs don't use extensions.
   */
  path?: string;
};

/**
 * Type of DROPBOX's DROPBOX_CREATE_PAPER tool output.
 */
type DROPBOX_CREATE_PAPER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Id
       * @description The unique identifier for the created Paper document.
       */
      file_id: string;
      /**
       * Paper Revision
       * @description The revision number of the Paper document.
       */
      paper_revision: number;
      /**
       * Result Path
       * @description The path where the Paper document was created in Dropbox.
       */
      result_path: string;
      /**
       * Url
       * Format: uri
       * @description A URL to view the newly created Paper document.
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
 * Type of DROPBOX's DROPBOX_DELETE_FILE_OR_FOLDER tool input.
 */
type DROPBOX_DELETE_FILE_OR_FOLDER_INPUT = {
  /**
   * Path
   * @description The path to the file or folder to delete
   */
  path?: string;
};

/**
 * Type of DROPBOX's DROPBOX_DELETE_FILE_OR_FOLDER tool output.
 */
type DROPBOX_DELETE_FILE_OR_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** FileMetadata */
      metadata: {
          /**
           * .Tag
           * @constant
           */
          ".tag": "file";
          /**
           * Client Modified
           * Format: date-time
           */
          client_modified: string;
          /**
           * Content Hash
           * @default null
           */
          content_hash: string | null;
          /** Id */
          id: string;
          /** Is Downloadable */
          is_downloadable: boolean;
          /** Name */
          name: string;
          /** Path Display */
          path_display: string;
          /** Path Lower */
          path_lower: string;
          /** Rev */
          rev: string;
          /**
           * Server Modified
           * Format: date-time
           */
          server_modified: string;
          /** Size */
          size: number;
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
 * Type of DROPBOX's DROPBOX_GET_ABOUT_ME tool input.
 */
type DROPBOX_GET_ABOUT_ME_INPUT = object;

/**
 * Type of DROPBOX's DROPBOX_GET_ABOUT_ME tool output.
 */
type DROPBOX_GET_ABOUT_ME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description The user's unique Dropbox account ID.
       */
      account_id: string;
      /**
       * Account Type
       * @description Details about the user's account type.
       */
      account_type: {
          /**
           * .Tag
           * @description The type of the user's account (e.g., 'basic', 'pro', 'business').
           * @enum {string}
           */
          ".tag": "basic" | "pro" | "business" | "team_member" | "team_admin";
      };
      /**
       * Country
       * @description The user's two-letter country code, if available (e.g., 'US').
       * @default null
       */
      country: string | null;
      /**
       * Disabled
       * @description Indicates whether the user's account is disabled.
       */
      disabled: boolean;
      /**
       * Email
       * @description The user's email address.
       */
      email: string;
      /**
       * Email Verified
       * @description Indicates whether the user's email address has been verified.
       */
      email_verified: boolean;
      /**
       * Is Paired
       * @description Indicates whether this account is part of a paired account (team and personal).
       */
      is_paired: boolean;
      /**
       * Locale
       * @description The user's locale tag (e.g., 'en', 'en_US').
       */
      locale: string;
      /**
       * Name
       * @description The user's name details.
       */
      name: {
          /**
           * Abbreviated Name
           * @description A shortened version of the user's name.
           */
          abbreviated_name: string;
          /**
           * Display Name
           * @description The user's full name, suitable for display.
           */
          display_name: string;
          /**
           * Familiar Name
           * @description The name typically used to refer to the user.
           */
          familiar_name: string;
          /**
           * Given Name
           * @description The user's first name.
           */
          given_name: string;
          /**
           * Surname
           * @description The user's last name.
           */
          surname: string;
      };
      /**
       * Referral Link
       * @description The user's Dropbox referral link.
       */
      referral_link: string;
      /**
       * Root Info
       * @description Information about the user's root namespace.
       */
      root_info: {
          /**
           * .Tag
           * @description Type of the root namespace (e.g., 'user' or 'team').
           * @enum {string}
           */
          ".tag": "user" | "team";
          /**
           * Home Namespace Id
           * @description The ID of the home namespace. For users with a team membership, this is the ID of their personal namespace. For users without a team membership, this is the ID of their root namespace.
           */
          home_namespace_id: string;
          /**
           * Root Namespace Id
           * @description The ID of the root namespace.
           */
          root_namespace_id: string;
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
 * Type of DROPBOX's DROPBOX_LIST_FILES_IN_FOLDER tool input.
 */
type DROPBOX_LIST_FILES_IN_FOLDER_INPUT = {
  /**
   * Include Deleted
   * @description If true, includes deleted (but potentially recoverable) files and folders in the listing.
   * @default false
   */
  include_deleted: boolean;
  /**
   * Include Media Info
   * @description If true, includes media metadata (e.g., dimensions, location) for photo and video files.
   * @default false
   */
  include_media_info: boolean;
  /**
   * Include Non Downloadable Files
   * @description If true, includes non-downloadable files (e.g., Google Docs, Dropbox Paper) in the listing.
   * @default true
   */
  include_non_downloadable_files: boolean;
  /**
   * Limit
   * @description The maximum number of results to return per request. Default is 2000. Max is 2000.
   * @default 2000
   */
  limit: number;
  /**
   * Path
   * @description The folder path (e.g., "/europe/invoices", "" for root) or folder ID (e.g., "id:aBcDeFgH123") to list contents from.
   * @default
   */
  path: string;
  /**
   * Recursive
   * @description If true, recursively lists contents of nested subfolders; otherwise, lists only immediate contents.
   * @default false
   */
  recursive: boolean;
};

/**
 * Type of DROPBOX's DROPBOX_LIST_FILES_IN_FOLDER tool output.
 */
type DROPBOX_LIST_FILES_IN_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Pass the cursor into /files/list_folder/continue to see what's changed in the folder since your last query.
       */
      cursor: string;
      /**
       * Entries
       * @description The files, folders, and deleted entries in the specified path.
       */
      entries: {
          [key: string]: unknown;
      }[];
      /**
       * Has More
       * @description If true, then there are more entries available. Pass the cursor to /files/list_folder/continue to retrieve the rest.
       */
      has_more: boolean;
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
 * Type of DROPBOX's DROPBOX_LIST_FOLDERS tool input.
 */
type DROPBOX_LIST_FOLDERS_INPUT = {
  /**
   * Include Deleted
   * @description Whether to include folders that have been deleted but may be recoverable
   * @default false
   */
  include_deleted: boolean;
  /**
   * Limit
   * @description Maximum number of folder entries to return per request; an approximate upper bound.
   * @default 2000
   */
  limit: number;
  /**
   * Path
   * @description Path to the folder (e.g., "" for root, "/folder/subfolder", or "id:abc123xyz"). If a path string, it must start with / and not end with / or whitespace.
   * @default
   */
  path: string;
  /**
   * Recursive
   * @description Whether to include folders in nested subfolders (True) or only immediate subfolders (False)
   * @default false
   */
  recursive: boolean;
};

/**
 * Type of DROPBOX's DROPBOX_LIST_FOLDERS tool output.
 */
type DROPBOX_LIST_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Pagination cursor for retrieving more results.
       */
      cursor: string;
      /**
       * Entries
       * @description List of file, folder, or deleted metadata entries.
       */
      entries: ({
          /** .Tag */
          ".tag": string;
          /**
           * Client Modified
           * Format: date-time
           */
          client_modified: string;
          /**
           * Content Hash
           * @description A hash of the file content.
           * @default null
           */
          content_hash: string | null;
          /**
           * Has Explicit Shared Members
           * @description True if the file has any explicit shared members.
           * @default null
           */
          has_explicit_shared_members: boolean | null;
          /** Id */
          id: string;
          /**
           * Is Downloadable
           * @default true
           */
          is_downloadable: boolean | null;
          /** Name */
          name: string;
          /**
           * Path Display
           * @default null
           */
          path_display: string | null;
          /**
           * Path Lower
           * @default null
           */
          path_lower: string | null;
          /**
           * Property Groups
           * @default null
           */
          property_groups: {
              /** Fields */
              fields: {
                  [key: string]: string;
              }[];
              /** Template Id */
              template_id: string;
          }[] | null;
          /** Rev */
          rev: string;
          /**
           * Server Modified
           * Format: date-time
           */
          server_modified: string;
          /** @default null */
          sharing_info: {
              /**
               * Modified By
               * @default null
               */
              modified_by: string | null;
              /**
               * No Access
               * @description True if the folder is a shared folder mount point that the user cannot access.
               * @default null
               */
              no_access: boolean | null;
              /**
               * Parent Shared Folder Id
               * @default null
               */
              parent_shared_folder_id: string | null;
              /** Read Only */
              read_only: boolean;
              /**
               * Traverse Only
               * @description True if the folder is a shared folder mount point that the user can traverse but not access its contents.
               * @default null
               */
              traverse_only: boolean | null;
          } | null;
          /** Size */
          size: number;
      } | {
          /** .Tag */
          ".tag": string;
          /**
           * Has Explicit Shared Members
           * @description True if the folder has any explicit shared members.
           * @default null
           */
          has_explicit_shared_members: boolean | null;
          /** Id */
          id: string;
          /** Name */
          name: string;
          /**
           * Path Display
           * @default null
           */
          path_display: string | null;
          /**
           * Path Lower
           * @default null
           */
          path_lower: string | null;
          /**
           * Property Groups
           * @default null
           */
          property_groups: {
              /** Fields */
              fields: {
                  [key: string]: string;
              }[];
              /** Template Id */
              template_id: string;
          }[] | null;
          /** @default null */
          sharing_info: {
              /**
               * Modified By
               * @default null
               */
              modified_by: string | null;
              /**
               * No Access
               * @description True if the folder is a shared folder mount point that the user cannot access.
               * @default null
               */
              no_access: boolean | null;
              /**
               * Parent Shared Folder Id
               * @default null
               */
              parent_shared_folder_id: string | null;
              /** Read Only */
              read_only: boolean;
              /**
               * Traverse Only
               * @description True if the folder is a shared folder mount point that the user can traverse but not access its contents.
               * @default null
               */
              traverse_only: boolean | null;
          } | null;
      } | {
          /** .Tag */
          ".tag": string;
          /** Name */
          name: string;
          /**
           * Path Display
           * @default null
           */
          path_display: string | null;
          /**
           * Path Lower
           * @default null
           */
          path_lower: string | null;
      })[];
      /**
       * Has More
       * @description Whether there are more entries to retrieve using the cursor.
       */
      has_more: boolean;
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
 * Type of DROPBOX's DROPBOX_MOVE_FILE_OR_FOLDER tool input.
 */
type DROPBOX_MOVE_FILE_OR_FOLDER_INPUT = {
  /**
   * Allow Ownership Transfer
   * @description Allow moves by owner even if it would result in an ownership transfer for the content being moved. This does not apply to copies. The default is false.
   * @default false
   */
  allow_ownership_transfer: boolean | null;
  /**
   * Allow Shared Folder
   * @description If true, allows moving shared folders. The default is false.
   * @default false
   */
  allow_shared_folder: boolean | null;
  /**
   * Autorename
   * @description If there's a conflict (e.g., a file with the same name already exists at the destination), have the Dropbox server try to auto-rename the file to avoid the conflict. The default is false.
   * @default false
   */
  autorename: boolean | null;
  /**
   * From Path
   * @description Path in the user's Dropbox to be moved. This path is case-sensitive.
   */
  from_path?: string;
  /**
   * To Path
   * @description Path in the user's Dropbox that is the destination. This path is case-sensitive.
   */
  to_path?: string;
};

/**
 * Type of DROPBOX's DROPBOX_MOVE_FILE_OR_FOLDER tool output.
 */
type DROPBOX_MOVE_FILE_OR_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Metadata
       * @description Metadata for the moved file or folder.
       */
      metadata: {
          /**
           * .Tag
           * @description Indicates whether the entry is a 'file' or a 'folder'.
           * @enum {string}
           */
          ".tag": "file" | "folder";
          /**
           * Client Modified
           * Format: date-time
           * @description For files, this is the modification time as reported by the client. For folders, this is unspecified. May not be present for all entries.
           * @default null
           */
          client_modified: string | null;
          /**
           * Content Hash
           * @description A hex-encoded SHA-256 hash of the file's contents. This field is present for files only. Not present for folders.
           * @default null
           */
          content_hash: string | null;
          /**
           * Has Explicit Shared Members
           * @description Whether the file or folder has explicit shared members (members who have been directly invited to the content). This field is present for files and folders.
           * @default null
           */
          has_explicit_shared_members: boolean | null;
          /**
           * Id
           * @description A unique identifier for the file or folder. Format is 'id:...'.
           */
          id: string;
          /**
           * Name
           * @description The last component of the path (including extension). This never contains a slash.
           */
          name: string;
          /**
           * Path Display
           * @description The cased-preserved full path in the user's Dropbox. This always starts with a slash. This field will be null for the root folder.
           * @default null
           */
          path_display: string | null;
          /**
           * Path Lower
           * @description The lowercased full path in the user's Dropbox. This always starts with a slash. This field will be null for the root folder.
           * @default null
           */
          path_lower: string | null;
          /**
           * Property Groups
           * @description Additional properties associated with the file or folder, if any. This field will be present only if property groups are associated with the file or folder.
           * @default null
           */
          property_groups: {
              /**
               * Fields
               * @description The actual properties making up the property group.
               */
              fields: {
                  /**
                   * Name
                   * @description The name of the property field.
                   */
                  name: string;
                  /**
                   * Value
                   * @description The value of the property field.
                   */
                  value: unknown;
              }[];
              /**
               * Template Id
               * @description A unique identifier for the property template used.
               */
              template_id: string;
          }[] | null;
          /**
           * Rev
           * @description A unique revision identifier for files. This field is present for files only. Not present for folders.
           * @default null
           */
          rev: string | null;
          /**
           * Server Modified
           * Format: date-time
           * @description The last time the file or folder was modified on Dropbox.
           * @default null
           */
          server_modified: string | null;
          /**
           * SharingInfo
           * @description Detailed information about the sharing state of a file or folder.
           *     This model is based on common fields in Dropbox sharing metadata;
           *     it might need adjustment based on the specific context of move_v2 response.
           * @default null
           */
          sharing_info: {
              /**
               * Parent Shared Folder Id
               * @description The ID of the parent shared folder, if applicable.
               * @default null
               */
              parent_shared_folder_id: string | null;
              /**
               * Read Only
               * @description If true, the file or folder is read-only.
               * @default null
               */
              read_only: boolean | null;
              /**
               * Shared Folder Id
               * @description The ID of the shared folder, if this item is a shared folder.
               * @default null
               */
              shared_folder_id: string | null;
          } | null;
          /**
           * Size
           * @description The size of the file in bytes. This field is present for files only. Not present for folders.
           * @default null
           */
          size: number | null;
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
 * Type of DROPBOX's DROPBOX_READ_FILE tool input.
 */
type DROPBOX_READ_FILE_INPUT = {
  /**
   * Path
   * @description The path to search in
   */
  path?: string;
};

/**
 * Type of DROPBOX's DROPBOX_READ_FILE tool output.
 */
type DROPBOX_READ_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Content Bytes
       * Format: binary
       * @description The raw binary content of the downloaded file.
       */
      file_content_bytes: string;
      /**
       * File Name
       * @description Name of the file, extracted from metadata for convenience.
       */
      file_name: string;
      /**
       * Message
       * @description A status message indicating the outcome of the read operation.
       * @default File read successfully.
       */
      message: string;
      /**
       * Metadata
       * @description Detailed metadata of the downloaded file.
       */
      metadata: {
          /**
           * Client Modified
           * Format: date-time
           * @description For files, this is the modification time set by the desktop client when the file was added to Dropbox. This time is not verified by Dropbox servers.
           */
          client_modified: string;
          /**
           * Id
           * @description A unique identifier for the file.
           */
          id: string;
          /**
           * Name
           * @description The last component of the path (including extension). This never contains a slash.
           */
          name: string;
          /**
           * Path Display
           * @description The cased path to be used for display purposes only. Null if the file or folder is not mounted.
           * @default null
           */
          path_display: string | null;
          /**
           * Path Lower
           * @description The lowercased full path in the user's Dropbox. This always starts with a slash. Null if the file or folder is not mounted.
           * @default null
           */
          path_lower: string | null;
          /**
           * Rev
           * @description A unique identifier for the current revision of a file. Can be used to detect changes and avoid conflicts.
           */
          rev: string;
          /**
           * Server Modified
           * Format: date-time
           * @description The last time the file was modified on Dropbox.
           */
          server_modified: string;
          /**
           * Size
           * @description The file size in bytes.
           */
          size: number;
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
 * Type of DROPBOX's DROPBOX_SEARCH_FILE_OR_FOLDER tool input.
 */
type DROPBOX_SEARCH_FILE_OR_FOLDER_INPUT = {
  /**
   * SearchOptions
   * @description Additional options for the search. If not provided, default search options will be used.
   */
  options?: {
      /**
       * Account Id
       * @description The account ID to search on. If not specified, searches the current user's Dropbox. Must be 40 characters or less.
       * @default null
       */
      account_id: string | null;
      /**
       * File Categories
       * @description Restricts search to only match files in the given categories.
       * @default null
       */
      file_categories: string[] | null;
      /**
       * File Extensions
       * @description Restricts search to only match files with the given extensions (e.g., ['jpg', 'png']). This is case-insensitive.
       * @default null
       */
      file_extensions: string[] | null;
      /**
       * File Status
       * @description Restricts search to files with the given status. Can be 'active', 'deleted', or 'all'.
       * @default active
       * @enum {string|null}
       */
      file_status: "active" | "deleted" | "all" | null;
      /**
       * Filename Only
       * @description Restricts search to only match on filenames.
       * @default false
       */
      filename_only: boolean | null;
      /**
       * Image Content Search
       * @description If true, performs content search within images for Business accounts.
       * @default false
       */
      image_content_search: boolean | null;
      /**
       * Include Highlights
       * @description If true, highlight information for the matches will be returned.
       * @default false
       */
      include_highlights: boolean | null;
      /**
       * Max Results
       * @description The maximum number of search results to return per request. Default is 100, min 1, max 1000.
       * @default 100
       */
      max_results: number | null;
      /**
       * Order By
       * @description Specifies the field and direction to order search results by. Example: {".tag": "relevance"} or {".tag": "last_modified_at"}. Default is relevance.
       * @default null
       */
      order_by: {
          [key: string]: string;
      } | null;
      /**
       * Path
       * @description Scopes the search to the given path and its subfolders. Provide an empty string to search the root. If None, searches the entire Dropbox.
       * @default null
       */
      path: string | null;
  } | null;
  /**
   * Query
   * @description The search string. Must be 1 or more characters. Queries are case-insensitive.
   */
  query?: string;
};

/**
 * Type of DROPBOX's DROPBOX_SEARCH_FILE_OR_FOLDER tool output.
 */
type DROPBOX_SEARCH_FILE_OR_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description The cursor to pass to subsequent search requests to get the next page of results. Present only if has_more is true.
       * @default null
       */
      cursor: string | null;
      /**
       * Has More
       * @description If true, then there are more search results available.
       */
      has_more: boolean;
      /**
       * Matches
       * @description A list of matches for the search query.
       */
      matches: {
          /**
           * Highlight Info
           * @description Information about how the query matched the file. Present if 'include_highlights' was true in the request.
           * @default null
           */
          highlight_info: {
              [key: string]: unknown;
          } | null;
          /**
           * Match Type
           * @description The type of the match, indicating how the query matched (e.g., filename, content).
           */
          match_type: {
              /**
               * .Tag
               * @description The type of the match, e.g., 'filename', 'content', 'both'.
               */
              ".tag": string;
          };
          /**
           * Metadata
           * @description Metadata of the matched file or folder.
           */
          metadata: {
              /**
               * .Tag
               * @description Type of metadata (e.g., 'file', 'folder', 'deleted').
               */
              ".tag": string;
              /**
               * Client Modified
               * @description For files, the modification time set by the desktop client (RFC3339 timestamp).
               * @default null
               */
              client_modified: string | null;
              /**
               * Content Hash
               * @description A hash of the file content (files only). This field is 64 characters long.
               * @default null
               */
              content_hash: string | null;
              /**
               * Id
               * @description A unique identifier for the file or folder, starting with 'id:'.
               */
              id: string;
              /**
               * Name
               * @description The last component of the path (including extension).
               */
              name: string;
              /**
               * Path Display
               * @description The cased path to be used for display purposes only.
               * @default null
               */
              path_display: string | null;
              /**
               * Path Lower
               * @description The lowercased full path in the user's Dropbox. This always starts with a slash.
               * @default null
               */
              path_lower: string | null;
              /**
               * Server Modified
               * @description The last time the file was modified on Dropbox (RFC3339 timestamp).
               * @default null
               */
              server_modified: string | null;
              /**
               * Size
               * @description The file size in bytes (files only).
               * @default null
               */
              size: number | null;
          };
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
 * Type of DROPBOX's DROPBOX_UPLOAD_FILE tool input.
 */
type DROPBOX_UPLOAD_FILE_INPUT = {
  /**
   * Autorename
   * @description If true and a file already exists at the path, the new file will be renamed to avoid conflict.
   * @default false
   */
  autorename: boolean;
  /**
   * FileUploadable
   * @description File to be uploaded; supports various formats including images, PDFs, and text files.
   */
  content?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Mode
   * @description Specifies how to handle the upload if a file already exists at the specified path.
   * @default add
   */
  mode: string;
  /**
   * Mute
   * @description If true, the user will not be notified of the new file via desktop or mobile notifications.
   * @default false
   */
  mute: boolean;
  /**
   * Path
   * @description Path in the user's Dropbox to save the file.
   */
  path?: string;
  /**
   * Strict Conflict
   * @description If true, the upload will be rejected if the file already exists, regardless of the autorename setting.
   * @default false
   */
  strict_conflict: boolean;
};

/**
 * Type of DROPBOX's DROPBOX_UPLOAD_FILE tool output.
 */
type DROPBOX_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Client Modified
       * Format: date-time
       * @description Timestamp of the last modification on the client.
       */
      client_modified: string;
      /**
       * Content Hash
       * @description A hash of the file content.
       */
      content_hash: string;
      /**
       * FileLockInfo
       * @description Information about file locking.
       * @default null
       */
      file_lock_info: {
          /**
           * Created
           * Format: date-time
           * @description The time the lock was created.
           * @default null
           */
          created: string | null;
          /**
           * Is Lockholder
           * @description True if the current user is the lockholder.
           * @default null
           */
          is_lockholder: boolean | null;
          /**
           * Lockholder Name
           * @description The display name of the lockholder.
           * @default null
           */
          lockholder_name: string | null;
      } | null;
      /**
       * Has Explicit Shared Members
       * @description Indicates if the file has explicit shared members.
       * @default null
       */
      has_explicit_shared_members: boolean | null;
      /**
       * Id
       * @description Unique identifier for the file.
       */
      id: string;
      /**
       * Is Downloadable
       * @description Indicates if the file can be downloaded.
       */
      is_downloadable: boolean;
      /**
       * Name
       * @description Name of the uploaded file.
       */
      name: string;
      /**
       * Path Display
       * @description Display path of the file.
       */
      path_display: string;
      /**
       * Path Lower
       * @description Lowercase path of the file.
       */
      path_lower: string;
      /**
       * Property Groups
       * @description List of custom properties associated with the file.
       * @default null
       */
      property_groups: {
          /**
           * Fields
           * @description A list of property field key-value pairs.
           */
          fields: {
              [key: string]: unknown;
          }[];
          /**
           * Template Id
           * @description A unique identifier for a property template.
           */
          template_id: string;
      }[] | null;
      /**
       * Rev
       * @description Revision identifier of the file.
       */
      rev: string;
      /**
       * Server Modified
       * Format: date-time
       * @description Timestamp of the last modification on the server.
       */
      server_modified: string;
      /**
       * SharingInfo
       * @description Information about file sharing.
       * @default null
       */
      sharing_info: {
          /**
           * Modified By
           * @description The display name of the user who last modified the file's sharing settings.
           * @default null
           */
          modified_by: string | null;
          /**
           * Parent Shared Folder Id
           * @description The ID of the parent shared folder.
           * @default null
           */
          parent_shared_folder_id: string | null;
          /**
           * Read Only
           * @description If true, the file is read-only.
           * @default null
           */
          read_only: boolean | null;
      } | null;
      /**
       * Size
       * @description Size of the file in bytes.
       */
      size: number;
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
 * Type map of all available tool input types for toolkit "DROPBOX".
 */
export type DROPBOX_TOOL_INPUTS = {
  CREATE_FILE_REQUEST: DROPBOX_CREATE_FILE_REQUEST_INPUT
  CREATE_FOLDER: DROPBOX_CREATE_FOLDER_INPUT
  CREATE_PAPER: DROPBOX_CREATE_PAPER_INPUT
  DELETE_FILE_OR_FOLDER: DROPBOX_DELETE_FILE_OR_FOLDER_INPUT
  GET_ABOUT_ME: DROPBOX_GET_ABOUT_ME_INPUT
  LIST_FILES_IN_FOLDER: DROPBOX_LIST_FILES_IN_FOLDER_INPUT
  LIST_FOLDERS: DROPBOX_LIST_FOLDERS_INPUT
  MOVE_FILE_OR_FOLDER: DROPBOX_MOVE_FILE_OR_FOLDER_INPUT
  READ_FILE: DROPBOX_READ_FILE_INPUT
  SEARCH_FILE_OR_FOLDER: DROPBOX_SEARCH_FILE_OR_FOLDER_INPUT
  UPLOAD_FILE: DROPBOX_UPLOAD_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DROPBOX".
 */
export type DROPBOX_TOOL_OUTPUTS = {
  CREATE_FILE_REQUEST: DROPBOX_CREATE_FILE_REQUEST_OUTPUT
  CREATE_FOLDER: DROPBOX_CREATE_FOLDER_OUTPUT
  CREATE_PAPER: DROPBOX_CREATE_PAPER_OUTPUT
  DELETE_FILE_OR_FOLDER: DROPBOX_DELETE_FILE_OR_FOLDER_OUTPUT
  GET_ABOUT_ME: DROPBOX_GET_ABOUT_ME_OUTPUT
  LIST_FILES_IN_FOLDER: DROPBOX_LIST_FILES_IN_FOLDER_OUTPUT
  LIST_FOLDERS: DROPBOX_LIST_FOLDERS_OUTPUT
  MOVE_FILE_OR_FOLDER: DROPBOX_MOVE_FILE_OR_FOLDER_OUTPUT
  READ_FILE: DROPBOX_READ_FILE_OUTPUT
  SEARCH_FILE_OR_FOLDER: DROPBOX_SEARCH_FILE_OR_FOLDER_OUTPUT
  UPLOAD_FILE: DROPBOX_UPLOAD_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DROPBOX toolkit.
 */
export const DROPBOX = {
  slug: "dropbox",
  tools: {
    /**
     * Tool to create a new file request in dropbox. use when you need to request files from others by generating a unique link for uploads to a specified dropbox folder, optionally with a deadline.
     */
    CREATE_FILE_REQUEST: "DROPBOX_CREATE_FILE_REQUEST",
    /**
     * Tool to create a new folder at a specified path in dropbox. use when you need to organize files by creating a new directory. requires the 'files.content.write' scope.
     */
    CREATE_FOLDER: "DROPBOX_CREATE_FOLDER",
    /**
     * Creates a new dropbox paper document at the specified path using html or markdown content.
     */
    CREATE_PAPER: "DROPBOX_CREATE_PAPER",
    /**
     * Permanently deletes the file or folder at the specified path in dropbox. use when you need to remove a specific file or folder. requires the `files.content.write` scope.
     */
    DELETE_FILE_OR_FOLDER: "DROPBOX_DELETE_FILE_OR_FOLDER",
    /**
     * Tool to get information about the current user's dropbox account. use when you need to retrieve account details like email, name, or account type.
     */
    GET_ABOUT_ME: "DROPBOX_GET_ABOUT_ME",
    /**
     * Tool to list files and folders in a specified dropbox directory. use when you need to see the contents of a folder, including subfolders if recursive is true.
     */
    LIST_FILES_IN_FOLDER: "DROPBOX_LIST_FILES_IN_FOLDER",
    /**
     * Retrieves a list of folders, files, and deleted entries from a specified dropbox path.
     */
    LIST_FOLDERS: "DROPBOX_LIST_FOLDERS",
    /**
     * Move file or folder
     */
    MOVE_FILE_OR_FOLDER: "DROPBOX_MOVE_FILE_OR_FOLDER",
    /**
     * Downloads a file from the specified dropbox path, requiring `files.content.read` scope.
     */
    READ_FILE: "DROPBOX_READ_FILE",
    /**
     * Tool to search for files and folders in dropbox. use when you need to find an item by name or content, optionally within a specific path or with other filters, and paginate through results. example: search for 'report.docx' in the '/finance' folder.
     */
    SEARCH_FILE_OR_FOLDER: "DROPBOX_SEARCH_FILE_OR_FOLDER",
    /**
     * Uploads a file to a specified path in the user's dropbox, with options for handling existing files.
     */
    UPLOAD_FILE: "DROPBOX_UPLOAD_FILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DROPBOX".
 */
export type DROPBOX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DROPBOX".
 */
export type DROPBOX_TRIGGER_EVENTS = {}
