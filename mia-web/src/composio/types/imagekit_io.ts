// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_BULK_JOB_STATUS tool input.
 */
type IMAGEKIT_IO_BULK_JOB_STATUS_INPUT = {
  /**
   * Job Id
   * @description Identifier of the bulk copy/move folder job returned by the API.
   */
  jobId?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_BULK_JOB_STATUS tool output.
 */
type IMAGEKIT_IO_BULK_JOB_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Bulk job identifier
       */
      jobId: string;
      /**
       * Status
       * @description Current status of the bulk job
       */
      status: string;
      /**
       * Type
       * @description Type of the bulk job, e.g., 'copyFolder' or 'moveFolder'
       */
      type: string;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_BULK_MOVE_FILES tool input.
 */
type IMAGEKIT_IO_BULK_MOVE_FILES_INPUT = {
  /**
   * Destination Path
   * @description Destination folder path where files should be moved (e.g., '/new-folder/').
   */
  destinationPath?: string;
  /**
   * File Ids
   * @description List of ImageKit file IDs to move; maximum 100 file IDs per request.
   */
  fileIds?: string[];
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_BULK_MOVE_FILES tool output.
 */
type IMAGEKIT_IO_BULK_MOVE_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Details of per-file failures when partial success.
       * @default null
       */
      errors: {
          /**
           * Error
           * @description Reason the move failed for this file.
           */
          error: string;
          /**
           * File Id
           * @description The fileId that failed to move.
           */
          fileId: string;
      }[] | null;
      /**
       * Help
       * @description Support help text for failures.
       * @default null
       */
      help: string | null;
      /**
       * Message
       * @description Error message when the entire operation fails.
       * @default null
       */
      message: string | null;
      /**
       * Missing File Ids
       * @description List of file IDs not found when the operation fails.
       * @default null
       */
      missingFileIds: string[] | null;
      /**
       * Successfully Moved File Ids
       * @description File IDs moved successfully.
       */
      successfullyMovedFileIds: string[];
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_BULK_REMOVE_TAGS tool input.
 */
type IMAGEKIT_IO_BULK_REMOVE_TAGS_INPUT = {
  /**
   * File Ids
   * @description List of file IDs to remove tags from; maximum of 50 file IDs per request.
   */
  fileIds?: string[];
  /**
   * Tags
   * @description Tag values to remove from each of the specified files.
   */
  tags?: string[];
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_BULK_REMOVE_TAGS tool output.
 */
type IMAGEKIT_IO_BULK_REMOVE_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Successfully Updated File Ids
       * @description File IDs that were successfully processed and had tags removed.
       */
      successfullyUpdatedFileIds: string[];
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_COPY_FOLDER tool input.
 */
type IMAGEKIT_IO_COPY_FOLDER_INPUT = {
  /**
   * Destination Path
   * @description Destination folder path to receive the copy.
   */
  destinationPath?: string;
  /**
   * Include Versions
   * @description If true, copy all file versions. Defaults to false.
   * @default null
   */
  includeVersions: boolean | null;
  /**
   * Source Folder Path
   * @description Source folder path to copy.
   */
  sourceFolderPath?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_COPY_FOLDER tool output.
 */
type IMAGEKIT_IO_COPY_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Identifier for the bulk copy job. Use this with bulk job status to track progress.
       */
      jobId: string;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_CREATE_CUSTOM_METADATA_FIELD tool input.
 */
type IMAGEKIT_IO_CREATE_CUSTOM_METADATA_FIELD_INPUT = {
  /**
   * Label
   * @description Unique label across all non-deleted custom metadata fields
   */
  label?: string;
  /**
   * Name
   * @description Unique name across all custom metadata fields (including deleted)
   */
  name?: string;
  /**
   * Schema
   * @description Configuration rules for the custom metadata field
   */
  schema?: {
      /**
       * Default Value
       * @description Default value for the field; required if isValueRequired is true. Must conform to type and constraints.
       * @default null
       */
      defaultValue: string | null;
      /**
       * Is Value Required
       * @description Marks the field as required; defaultValue must be provided if true.
       * @default null
       */
      isValueRequired: boolean | null;
      /**
       * Max Length
       * @description Maximum string length; only allowed when type is Text or Textarea.
       * @default null
       */
      maxLength: number | null;
      /**
       * Max Value
       * @description Maximum value; only allowed when type is Date or Number.
       * @default null
       */
      maxValue: string | null;
      /**
       * Min Length
       * @description Minimum string length; only allowed when type is Text or Textarea.
       * @default null
       */
      minLength: number | null;
      /**
       * Min Value
       * @description Minimum value; only allowed when type is Date or Number.
       * @default null
       */
      minValue: string | null;
      /**
       * Select Options
       * @description Options to choose from; required if type is SingleSelect or MultiSelect.
       * @default null
       */
      selectOptions: (string | number | boolean)[] | null;
      /**
       * Type
       * @description One of Text, Textarea, Number, Date, Boolean, SingleSelect, MultiSelect. Date values must be ISO8601 strings.
       * @enum {string}
       */
      type: "Text" | "Textarea" | "Number" | "Date" | "Boolean" | "SingleSelect" | "MultiSelect";
  };
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_CREATE_CUSTOM_METADATA_FIELD tool output.
 */
type IMAGEKIT_IO_CREATE_CUSTOM_METADATA_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the custom metadata field
       */
      id: string;
      /**
       * Label
       * @description Field label
       */
      label: string;
      /**
       * Name
       * @description Field name
       */
      name: string;
      /**
       * Schema
       * @description Configured schema object for the field
       */
      schema: {
          /**
           * Default Value
           * @description Default value for the field; required if isValueRequired is true. Must conform to type and constraints.
           * @default null
           */
          defaultValue: string | null;
          /**
           * Is Value Required
           * @description Marks the field as required; defaultValue must be provided if true.
           * @default null
           */
          isValueRequired: boolean | null;
          /**
           * Max Length
           * @description Maximum string length; only allowed when type is Text or Textarea.
           * @default null
           */
          maxLength: number | null;
          /**
           * Max Value
           * @description Maximum value; only allowed when type is Date or Number.
           * @default null
           */
          maxValue: string | null;
          /**
           * Min Length
           * @description Minimum string length; only allowed when type is Text or Textarea.
           * @default null
           */
          minLength: number | null;
          /**
           * Min Value
           * @description Minimum value; only allowed when type is Date or Number.
           * @default null
           */
          minValue: string | null;
          /**
           * Select Options
           * @description Options to choose from; required if type is SingleSelect or MultiSelect.
           * @default null
           */
          selectOptions: (string | number | boolean)[] | null;
          /**
           * Type
           * @description One of Text, Textarea, Number, Date, Boolean, SingleSelect, MultiSelect. Date values must be ISO8601 strings.
           * @enum {string}
           */
          type: "Text" | "Textarea" | "Number" | "Date" | "Boolean" | "SingleSelect" | "MultiSelect";
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_CREATE_FOLDER tool input.
 */
type IMAGEKIT_IO_CREATE_FOLDER_INPUT = {
  /**
   * Folder Name
   * @description Name of the new folder to create.
   */
  folderName?: string;
  /**
   * Parent Folder Path
   * @description Path of the parent folder where the new folder will be created.
   */
  parentFolderPath?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_CREATE_FOLDER tool output.
 */
type IMAGEKIT_IO_CREATE_FOLDER_OUTPUT = {
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_DELETE_CUSTOM_METADATA_FIELD tool input.
 */
type IMAGEKIT_IO_DELETE_CUSTOM_METADATA_FIELD_INPUT = {
  /**
   * Field Id
   * @description The unique ID of the custom metadata field to delete
   */
  fieldId?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_DELETE_CUSTOM_METADATA_FIELD tool output.
 */
type IMAGEKIT_IO_DELETE_CUSTOM_METADATA_FIELD_OUTPUT = {
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_DELETE_FILE tool input.
 */
type IMAGEKIT_IO_DELETE_FILE_INPUT = {
  /**
   * File Id
   * @description The unique ID of the file to delete. This `fileId` is returned by the upload and list assets APIs.
   */
  fileId?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_DELETE_FILE tool output.
 */
type IMAGEKIT_IO_DELETE_FILE_OUTPUT = {
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_DELETE_FILE_VERSION tool input.
 */
type IMAGEKIT_IO_DELETE_FILE_VERSION_INPUT = {
  /**
   * File Id
   * @description Unique ID of the file. Returned by upload and list/search assets APIs.
   */
  fileId?: string;
  /**
   * Version Id
   * @description Unique ID of the file version to delete. Returned in version listings.
   */
  versionId?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_DELETE_FILE_VERSION tool output.
 */
type IMAGEKIT_IO_DELETE_FILE_VERSION_OUTPUT = {
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_DELETE_FOLDER tool input.
 */
type IMAGEKIT_IO_DELETE_FOLDER_INPUT = {
  /**
   * Folder Path
   * @description Absolute path of the folder to delete (e.g., "/new-folder").
   */
  folderPath?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_DELETE_FOLDER tool output.
 */
type IMAGEKIT_IO_DELETE_FOLDER_OUTPUT = {
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_DELETE_MULTIPLE_FILES tool input.
 */
type IMAGEKIT_IO_DELETE_MULTIPLE_FILES_INPUT = {
  /**
   * File Ids
   * @description Array of unique file IDs to delete. Maximum 100 IDs per request.
   */
  fileIds?: string[];
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_DELETE_MULTIPLE_FILES tool output.
 */
type IMAGEKIT_IO_DELETE_MULTIPLE_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Details of per-file failures when partial success (HTTP 207).
       * @default null
       */
      errors: {
          /**
           * Error
           * @description Reason the delete failed for this file.
           */
          error: string;
          /**
           * File Id
           * @description The fileId that failed deletion.
           */
          fileId: string;
      }[] | null;
      /**
       * Help
       * @description Support help text for failures.
       * @default null
       */
      help: string | null;
      /**
       * Message
       * @description Error message when the entire operation fails (HTTP 404).
       * @default null
       */
      message: string | null;
      /**
       * Missing File Ids
       * @description List of file IDs not found when the entire operation fails.
       * @default null
       */
      missingFileIds: string[] | null;
      /**
       * Successfully Deleted File Ids
       * @description List of file IDs that were deleted successfully.
       */
      successfullyDeletedFileIds: string[];
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_GET_AUTHENTICATION_PARAMETERS tool input.
 */
type IMAGEKIT_IO_GET_AUTHENTICATION_PARAMETERS_INPUT = {
  /**
   * Expire In
   * @description Expiration time in seconds for the signature (max 3600)
   * @default 3600
   */
  expireIn: number;
  /**
   * Token
   * @description Optional one-time token; if not provided, a UUID4 will be generated
   * @default null
   */
  token: string | null;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_GET_AUTHENTICATION_PARAMETERS tool output.
 */
type IMAGEKIT_IO_GET_AUTHENTICATION_PARAMETERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expire
       * @description Expiration Unix timestamp in seconds
       */
      expire: number;
      /**
       * Public Key
       * @description Your ImageKit public API key
       */
      publicKey: string;
      /**
       * Signature
       * @description HMAC-SHA1 signature of token+expire using private key
       */
      signature: string;
      /**
       * Token
       * @description One-time token string
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_GET_FILE_DETAILS tool input.
 */
type IMAGEKIT_IO_GET_FILE_DETAILS_INPUT = {
  /**
   * File Id
   * @description The unique fileId of the uploaded file; returned by list, search, or upload APIs.
   */
  fileId?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_GET_FILE_DETAILS tool output.
 */
type IMAGEKIT_IO_GET_FILE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ai Tags
       * @description List of AI-generated tags
       */
      AITags?: {
          /**
           * Confidence
           * @description Confidence score for the tag (0 to 1)
           */
          confidence: number;
          /**
           * Name
           * @description AI-detected tag name
           */
          name: string;
          /**
           * Source
           * @description Source of the AI tag (e.g., 'aws', 'google')
           */
          source: string;
      }[];
      /**
       * Created At
       * @description ISO8601 timestamp of creation
       */
      createdAt: string;
      /**
       * Custom Coordinates
       * @description Area of interest as 'x,y,width,height'
       * @default null
       */
      customCoordinates: string | null;
      /**
       * Custom Metadata
       * @description User-defined metadata object
       * @default null
       */
      customMetadata: {
          [key: string]: unknown;
      } | null;
      /**
       * File Id
       * @description Unique file identifier
       */
      fileId: string;
      /**
       * File Path
       * @description Full path of the file in the storage tree
       */
      filePath: string;
      /**
       * File Type
       * @description High-level file type (e.g., 'jpg', 'png')
       */
      fileType: string;
      /**
       * Has Alpha
       * @description Whether the image has an alpha channel
       * @default null
       */
      hasAlpha: boolean | null;
      /**
       * Height
       * @description Image/video height in pixels
       * @default null
       */
      height: number | null;
      /**
       * Is Private File
       * @description Whether the file is private
       */
      isPrivateFile: boolean;
      /**
       * Is Published
       * @description Whether the file is published
       */
      isPublished: boolean;
      /**
       * Mime
       * @description MIME type of the file
       */
      mime: string;
      /**
       * Name
       * @description Original file name
       */
      name: string;
      /**
       * Size
       * @description Size of the file in bytes
       */
      size: number;
      /**
       * Tags
       * @description User-provided list of tags
       */
      tags?: string[];
      /**
       * Thumbnail
       * @description URL of the auto-generated thumbnail
       * @default null
       */
      thumbnail: string | null;
      /**
       * Type
       * @description File category (e.g., 'image', 'video')
       */
      type: string;
      /**
       * Updated At
       * @description ISO8601 timestamp of last update
       */
      updatedAt: string;
      /**
       * Url
       * @description Secure URL of the file
       */
      url: string;
      /**
       * Version Info
       * @description Information about the file's version
       */
      versionInfo: {
          /**
           * Id
           * @description Version identifier
           */
          id: string;
          /**
           * Name
           * @description Human-readable version name
           */
          name: string;
      };
      /**
       * Width
       * @description Image/video width in pixels
       * @default null
       */
      width: number | null;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_GET_FILE_METADATA tool input.
 */
type IMAGEKIT_IO_GET_FILE_METADATA_INPUT = {
  /**
   * File Id
   * @description Unique ID of the uploaded file (returned by upload or list APIs).
   */
  fileId?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_GET_FILE_METADATA tool output.
 */
type IMAGEKIT_IO_GET_FILE_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Density
       * @description Image DPI (if available).
       * @default null
       */
      density: number | null;
      /**
       * Exif
       * @description EXIF and related metadata object; actual keys vary depending on what’s embedded in the file.
       * @default null
       */
      exif: {
          [key: string]: string | number | boolean | (string | number | boolean)[] | {
              [key: string]: string | number | boolean;
          };
      } | null;
      /**
       * Format
       * @description File format (e.g., jpg, png).
       * @default null
       */
      format: string | null;
      /**
       * Has Color Profile
       * @description Whether the file has an embedded color profile.
       * @default null
       */
      hasColorProfile: boolean | null;
      /**
       * Has Transparency
       * @description Whether the image has transparency.
       * @default null
       */
      hasTransparency: boolean | null;
      /**
       * Height
       * @description Image height in pixels.
       * @default null
       */
      height: number | null;
      /**
       * P Hash
       * @description Perceptual hash of the image.
       * @default null
       */
      pHash: string | null;
      /**
       * Quality
       * @description Detected quality metric (if available).
       * @default null
       */
      quality: number | null;
      /**
       * Size
       * @description File size in bytes.
       * @default null
       */
      size: number | null;
      /**
       * Width
       * @description Image width in pixels.
       * @default null
       */
      width: number | null;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_GET_FILE_VERSION_DETAILS tool input.
 */
type IMAGEKIT_IO_GET_FILE_VERSION_DETAILS_INPUT = {
  /**
   * File Id
   * @description Unique fileId of the uploaded file; returned by list, search, or upload APIs.
   */
  fileId?: string;
  /**
   * Version Id
   * @description Unique versionId of the specific file version to retrieve.
   */
  versionId?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_GET_FILE_VERSION_DETAILS tool output.
 */
type IMAGEKIT_IO_GET_FILE_VERSION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ai Tags
       * @description AI-generated labels for this version
       */
      AITags?: {
          /**
           * Confidence
           * @description Confidence score for the tag (0 to 1)
           */
          confidence: number;
          /**
           * Name
           * @description AI-generated tag name
           */
          name: string;
          /**
           * Source
           * @description Source of the AI tag (e.g., 'aws', 'google')
           */
          source: string;
      }[];
      /**
       * Created At
       * @description ISO 8601 creation timestamp for this version
       */
      createdAt: string;
      /**
       * Custom Coordinates
       * @description Custom crop coordinates in format 'x,y,width,height', if set
       * @default null
       */
      customCoordinates: string | null;
      /**
       * Custom Metadata
       * @description Custom metadata object, if defined
       * @default null
       */
      customMetadata: {
          [key: string]: unknown;
      } | null;
      /**
       * File Id
       * @description Unique identifier for this file
       */
      fileId: string;
      /**
       * File Path
       * @description Full path of the file (including folders) in the DAM
       */
      filePath: string;
      /**
       * File Type
       * @description High-level file type (e.g., image, video, non-media)
       */
      fileType: string;
      /**
       * Has Alpha
       * @description Whether the image has an alpha channel
       * @default null
       */
      hasAlpha: boolean | null;
      /**
       * Height
       * @description Asset height in pixels, when applicable
       * @default null
       */
      height: number | null;
      /**
       * Is Private File
       * @description Whether the asset is private (requires signed URL for delivery)
       */
      isPrivateFile: boolean;
      /**
       * Is Published
       * @description Whether the version is published (not draft)
       */
      isPublished: boolean;
      /**
       * Mime
       * @description MIME type of the file
       */
      mime: string;
      /**
       * Name
       * @description Original file name
       */
      name: string;
      /**
       * Size
       * @description File size in bytes
       */
      size: number;
      /**
       * Tags
       * @description User-defined tags on the file version
       */
      tags?: string[];
      /**
       * Thumbnail
       * @description Thumbnail URL
       * @default null
       */
      thumbnail: string | null;
      /**
       * Type
       * @description Asset type/category
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 last-updated timestamp for this version
       */
      updatedAt: string;
      /**
       * Url
       * @description URL to access this version of the file
       */
      url: string;
      /**
       * Version Info
       * @description Metadata about this file version
       */
      versionInfo: {
          /**
           * Id
           * @description Version identifier
           */
          id: string;
          /**
           * Name
           * @description Version name
           */
          name: string;
      };
      /**
       * Width
       * @description Asset width in pixels, when applicable
       * @default null
       */
      width: number | null;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_GET_USAGE tool input.
 */
type IMAGEKIT_IO_GET_USAGE_INPUT = {
  /**
   * End Date
   * @description End date in YYYY-MM-DD format; must be after startDate; range <= 90 days
   */
  endDate?: string;
  /**
   * Start Date
   * @description Start date in YYYY-MM-DD format; must be before endDate; range <= 90 days
   */
  startDate?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_GET_USAGE tool output.
 */
type IMAGEKIT_IO_GET_USAGE_OUTPUT = {
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_LIST_AND_SEARCH_ASSETS tool input.
 */
type IMAGEKIT_IO_LIST_AND_SEARCH_ASSETS_INPUT = {
  /**
   * File Type
   * @description Filter by fileType: 'all', 'image', or 'non-image'. Defaults to 'all'.
   * @default null
   * @enum {string|null}
   */
  fileType: "all" | "image" | "non-image" | null;
  /**
   * Limit
   * @description Maximum number of results to return (1-1000). Defaults to 1000.
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Filter by asset name; ignored if 'searchQuery' is provided.
   * @default null
   */
  name: string | null;
  /**
   * Path
   * @description Folder path to limit search (e.g., '/sales-banner/').
   * @default null
   */
  path: string | null;
  /**
   * Search Query
   * @description Lucene-like query string (e.g., createdAt > "7d"). When provided, 'type', 'name', and 'tags' filters are ignored.
   * @default null
   */
  searchQuery: string | null;
  /**
   * Skip
   * @description Number of results to skip. Defaults to 0.
   * @default null
   */
  skip: number | null;
  /**
   * Sort
   * @description Sort order for results. Defaults to 'ASC_CREATED'.
   * @default null
   * @enum {string|null}
   */
  sort: "ASC_NAME" | "DESC_NAME" | "ASC_CREATED" | "DESC_CREATED" | "ASC_UPDATED" | "DESC_UPDATED" | "ASC_HEIGHT" | "DESC_HEIGHT" | "ASC_WIDTH" | "DESC_WIDTH" | "ASC_SIZE" | "DESC_SIZE" | null;
  /**
   * Tags
   * @description Comma-separated tags to filter by; ignored if 'searchQuery' is provided.
   * @default null
   */
  tags: string | null;
  /**
   * Type
   * @description Scope results to 'file', 'file-version', 'folder', or 'all'. Defaults to 'file'.
   * @default null
   * @enum {string|null}
   */
  type: "file" | "file-version" | "folder" | "all" | null;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_LIST_AND_SEARCH_ASSETS tool output.
 */
type IMAGEKIT_IO_LIST_AND_SEARCH_ASSETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp of the first upload
       */
      createdAt: string;
      /**
       * Custom Coordinates
       * @description Custom crop coordinates as 'x,y,w,h'
       * @default null
       */
      customCoordinates: string | null;
      /**
       * File Id
       * @description Unique file identifier
       */
      fileId: string;
      /**
       * File Path
       * @description Full path of the asset in the media library
       */
      filePath: string;
      /**
       * File Type
       * @description Category of asset: 'image' or 'non-image'
       * @enum {string}
       */
      fileType: "image" | "non-image";
      /**
       * Has Alpha
       * @description Whether the image has an alpha channel
       * @default null
       */
      hasAlpha: boolean | null;
      /**
       * Height
       * @description Image height in pixels (images only)
       * @default null
       */
      height: number | null;
      /**
       * Is Private File
       * @description Whether the file is private
       */
      isPrivateFile: boolean;
      /**
       * Mime
       * @description MIME type of the asset, e.g., 'image/jpeg'
       */
      mime: string;
      /**
       * Name
       * @description File or folder name
       */
      name: string;
      /**
       * Size
       * @description File size in bytes
       */
      size: number;
      /**
       * Tags
       * @description Associated tags for the asset
       * @default null
       */
      tags: string[] | null;
      /**
       * Thumbnail
       * @description URL to the thumbnail image
       */
      thumbnail: string;
      /**
       * Type
       * @description Asset type: 'file' or 'folder'
       * @enum {string}
       */
      type: "file" | "folder";
      /**
       * Url
       * @description Absolute URL to the asset
       */
      url: string;
      /**
       * Width
       * @description Image width in pixels (images only)
       * @default null
       */
      width: number | null;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_LIST_CUSTOM_METADATA_FIELDS tool input.
 */
type IMAGEKIT_IO_LIST_CUSTOM_METADATA_FIELDS_INPUT = {
  /**
   * Include Deleted
   * @description If true, include deleted metadata fields
   * @default false
   */
  includeDeleted: boolean | null;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_LIST_CUSTOM_METADATA_FIELDS tool output.
 */
type IMAGEKIT_IO_LIST_CUSTOM_METADATA_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of custom metadata fields
       */
      fields: {
          /**
           * Id
           * @description Unique identifier of the metadata field
           */
          id: string;
          /**
           * Label
           * @description Label of the metadata field
           */
          label: string;
          /**
           * Name
           * @description Name of the metadata field
           */
          name: string;
          /**
           * Schema
           * @description Schema details of the field
           */
          schema: {
              /**
               * Default Value
               * @description Default value for the field
               * @default null
               */
              defaultValue: string | null;
              /**
               * Is Value Required
               * @description Whether a value is required for the field
               */
              isValueRequired: boolean;
              /**
               * Max Length
               * @description Maximum length (for Text types)
               * @default null
               */
              maxLength: number | null;
              /**
               * Max Value
               * @description Maximum value (for Number/Date types)
               * @default null
               */
              maxValue: number | null;
              /**
               * Min Length
               * @description Minimum length (for Text types)
               * @default null
               */
              minLength: number | null;
              /**
               * Min Value
               * @description Minimum value (for Number/Date types)
               * @default null
               */
              minValue: number | null;
              /**
               * Select Options
               * @description Allowed options for select fields
               * @default null
               */
              selectOptions: (string | number | boolean)[] | null;
              /**
               * Type
               * @description Type of the custom metadata field
               * @enum {string}
               */
              type: "Text" | "Textarea" | "Number" | "Date" | "Boolean" | "SingleSelect" | "MultiSelect";
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_LIST_FILE_VERSIONS tool input.
 */
type IMAGEKIT_IO_LIST_FILE_VERSIONS_INPUT = {
  /**
   * File Id
   * @description Unique fileId of the uploaded file whose versions you want to list
   */
  fileId?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_LIST_FILE_VERSIONS tool output.
 */
type IMAGEKIT_IO_LIST_FILE_VERSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ai Tags
       * @description Auto-generated tags with confidence scores
       */
      AITags?: {
          /**
           * Confidence
           * @description Confidence score for the tag (0 to 1)
           */
          confidence: number;
          /**
           * Name
           * @description AI-detected tag name
           */
          name: string;
          /**
           * Source
           * @description Source of the AI tag (e.g., 'aws', 'google')
           */
          source: string;
      }[];
      /**
       * Created At
       * @description ISO timestamp when version was created
       */
      createdAt: string;
      /**
       * Custom Coordinates
       * @description Region of interest as 'x,y,width,height'
       * @default null
       */
      customCoordinates: string | null;
      /**
       * Custom Metadata
       * @description User-defined metadata key-value pairs
       */
      customMetadata?: {
          [key: string]: unknown;
      };
      /**
       * File Id
       * @description Identifier of this file version
       */
      fileId: string;
      /**
       * File Path
       * @description Path of the asset in the Media Library
       */
      filePath: string;
      /**
       * File Type
       * @description High-level file type, e.g., 'image/jpeg'
       */
      fileType: string;
      /**
       * Has Alpha
       * @description Whether the image has an alpha channel
       */
      hasAlpha: boolean;
      /**
       * Height
       * @description Height in pixels (when applicable)
       * @default null
       */
      height: number | null;
      /**
       * Is Private File
       * @description Whether this file version is private
       */
      isPrivateFile: boolean;
      /**
       * Is Published
       * @description Whether this version is published
       */
      isPublished: boolean;
      /**
       * Mime
       * @description MIME type of the file
       */
      mime: string;
      /**
       * Name
       * @description File name with extension
       */
      name: string;
      /**
       * Size
       * @description File size in bytes
       */
      size: number;
      /**
       * Tags
       * @description User-defined tags
       */
      tags?: string[];
      /**
       * Thumbnail
       * @description Thumbnail URL for this version
       */
      thumbnail: string;
      /**
       * Type
       * @description File kind (e.g., 'image', 'video', 'other')
       */
      type: string;
      /**
       * Updated At
       * @description ISO timestamp when version was last updated
       */
      updatedAt: string;
      /**
       * Url
       * @description URL to access this file version
       */
      url: string;
      /**
       * Version Info
       * @description Version metadata
       */
      versionInfo: {
          /**
           * Id
           * @description Version identifier
           */
          id: string;
          /**
           * Name
           * @description Human-readable version name
           */
          name: string;
      };
      /**
       * Width
       * @description Width in pixels (when applicable)
       * @default null
       */
      width: number | null;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_MOVE_FOLDER tool input.
 */
type IMAGEKIT_IO_MOVE_FOLDER_INPUT = {
  /**
   * Destination Path
   * @description Absolute path of the destination folder where the source should be moved.
   */
  destinationPath?: string;
  /**
   * Source Folder Path
   * @description Absolute path of the source folder to move.
   */
  sourceFolderPath?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_MOVE_FOLDER tool output.
 */
type IMAGEKIT_IO_MOVE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Identifier for the bulk move job. Use this with bulk job status to track progress.
       */
      jobId: string;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_PURGE_CACHE tool input.
 */
type IMAGEKIT_IO_PURGE_CACHE_INPUT = {
  /**
   * Url
   * @description Full ImageKit URL to purge. Supports trailing wildcard (*) under documented constraints.
   */
  url?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_PURGE_CACHE tool output.
 */
type IMAGEKIT_IO_PURGE_CACHE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Id
       * @description Identifier for the submitted purge request.
       */
      requestId: string;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_PURGE_STATUS tool input.
 */
type IMAGEKIT_IO_PURGE_STATUS_INPUT = {
  /**
   * Request Id
   * @description The purge request ID returned by the Purge cache API
   */
  requestId?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_PURGE_STATUS tool output.
 */
type IMAGEKIT_IO_PURGE_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Header Request Id
       * @description Value of the 'x-ik-requestId' response header for this API call
       * @default null
       */
      header_request_id: string | null;
      /**
       * Status
       * @description Current status of the purge request, e.g., 'Completed'
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_RENAME_FILE tool input.
 */
type IMAGEKIT_IO_RENAME_FILE_INPUT = {
  /**
   * File Path
   * @description Full path of the file to rename (including folders).
   */
  filePath?: string;
  /**
   * New File Name
   * @description New file name for the asset (including extension).
   */
  newFileName?: string;
  /**
   * Purge Cache
   * @description Whether to purge CDN cache for the old URLs.
   * @default false
   */
  purgeCache: boolean | null;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_RENAME_FILE tool output.
 */
type IMAGEKIT_IO_RENAME_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Purge Request Id
       * @description ID of the CDN cache purge request; returned only when purgeCache is true.
       * @default null
       */
      purgeRequestId: string | null;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_RESTORE_FILE_VERSION tool input.
 */
type IMAGEKIT_IO_RESTORE_FILE_VERSION_INPUT = {
  /**
   * File Id
   * @description The unique fileId of the file to restore.
   */
  fileId?: string;
  /**
   * Version Id
   * @description The unique versionId of the file version to restore.
   */
  versionId?: string;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_RESTORE_FILE_VERSION tool output.
 */
type IMAGEKIT_IO_RESTORE_FILE_VERSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ai Tags
       * @description List of AI-generated tags
       */
      AITags?: {
          /**
           * Confidence
           * @description Confidence score for the tag (0 to 1)
           */
          confidence: number;
          /**
           * Name
           * @description AI-detected tag name
           */
          name: string;
          /**
           * Source
           * @description Source of the AI tag (e.g., 'aws', 'google')
           */
          source: string;
      }[];
      /**
       * Created At
       * @description ISO8601 timestamp of creation
       */
      createdAt: string;
      /**
       * Custom Coordinates
       * @description Area of interest as 'x,y,width,height'
       * @default null
       */
      customCoordinates: string | null;
      /**
       * Custom Metadata
       * @description User-defined metadata object
       * @default null
       */
      customMetadata: {
          [key: string]: unknown;
      } | null;
      /**
       * File Id
       * @description Unique file identifier
       */
      fileId: string;
      /**
       * File Path
       * @description Full path of the file in the storage tree
       */
      filePath: string;
      /**
       * File Type
       * @description High-level file type (e.g., 'jpg', 'png')
       */
      fileType: string;
      /**
       * Has Alpha
       * @description Whether the image has an alpha channel
       * @default null
       */
      hasAlpha: boolean | null;
      /**
       * Height
       * @description Image/video height in pixels
       * @default null
       */
      height: number | null;
      /**
       * Is Private File
       * @description Whether the file is private
       */
      isPrivateFile: boolean;
      /**
       * Is Published
       * @description Whether the file is published
       */
      isPublished: boolean;
      /**
       * Mime
       * @description MIME type of the file
       */
      mime: string;
      /**
       * Name
       * @description Original file name
       */
      name: string;
      /**
       * Size
       * @description Size of the file in bytes
       */
      size: number;
      /**
       * Tags
       * @description User-provided list of tags
       */
      tags?: string[];
      /**
       * Thumbnail
       * @description URL of the auto-generated thumbnail
       * @default null
       */
      thumbnail: string | null;
      /**
       * Type
       * @description File category (e.g., 'image', 'video')
       */
      type: string;
      /**
       * Updated At
       * @description ISO8601 timestamp of last update
       */
      updatedAt: string;
      /**
       * Url
       * @description Secure URL of the file
       */
      url: string;
      /**
       * Version Info
       * @description Information about the file's version
       */
      versionInfo: {
          /**
           * Id
           * @description Version identifier
           */
          id: string;
          /**
           * Name
           * @description Human-readable version name
           */
          name: string;
      };
      /**
       * Width
       * @description Image/video width in pixels
       * @default null
       */
      width: number | null;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_UPDATE_CUSTOM_METADATA_FIELD tool input.
 */
type IMAGEKIT_IO_UPDATE_CUSTOM_METADATA_FIELD_INPUT = {
  /**
   * Field Id
   * @description ID of the custom metadata field to update
   */
  fieldId?: string;
  /**
   * Label
   * @description New display label for the custom metadata field
   * @default null
   */
  label: string | null;
  /**
   * CustomMetadataFieldSchemaRequest
   * @description Schema updates for a custom metadata field.
   * @default null
   */
  schema: {
      /**
       * Default Value
       * @description Default value of the field
       * @default null
       */
      defaultValue: string | null;
      /**
       * Is Value Required
       * @description Whether the field value is required
       * @default null
       */
      isValueRequired: boolean | null;
      /**
       * Max Length
       * @description Maximum length of the field value
       * @default null
       */
      maxLength: number | null;
      /**
       * Max Value
       * @description Maximum value of the field
       * @default null
       */
      maxValue: string | null;
      /**
       * Min Length
       * @description Minimum length of the field value
       * @default null
       */
      minLength: number | null;
      /**
       * Min Value
       * @description Minimum value of the field
       * @default null
       */
      minValue: string | null;
  } | null;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_UPDATE_CUSTOM_METADATA_FIELD tool output.
 */
type IMAGEKIT_IO_UPDATE_CUSTOM_METADATA_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the custom metadata field
       */
      id: string;
      /**
       * Label
       * @description Current display label of the custom metadata field
       */
      label: string;
      /**
       * Name
       * @description Immutable name of the custom metadata field
       */
      name: string;
      /**
       * Schema
       * @description Current schema of the custom metadata field
       */
      schema: {
          /**
           * Default Value
           * @description Default value of the field
           * @default null
           */
          defaultValue: string | null;
          /**
           * Is Value Required
           * @description Whether the field value is required
           * @default null
           */
          isValueRequired: boolean | null;
          /**
           * Max Length
           * @description Maximum length of the field value
           * @default null
           */
          maxLength: number | null;
          /**
           * Max Value
           * @description Maximum value of the field
           * @default null
           */
          maxValue: string | null;
          /**
           * Min Length
           * @description Minimum length of the field value
           * @default null
           */
          minLength: number | null;
          /**
           * Min Value
           * @description Minimum value of the field
           * @default null
           */
          minValue: string | null;
          /**
           * Type
           * @description Data type of the field (e.g., 'TextArea', 'Boolean', etc.)
           */
          type: string;
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
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_UPDATE_FILE_DETAILS tool input.
 */
type IMAGEKIT_IO_UPDATE_FILE_DETAILS_INPUT = {
  /**
   * Custom Coordinates
   * @description Area of interest as x,y,width,height.
   * @default null
   */
  customCoordinates: string | null;
  /**
   * Custom Metadata
   * @description Custom metadata key-value pairs.
   * @default null
   */
  customMetadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Extensions
   * @description Extensions to apply, each with 'name' and optional 'options'.
   * @default null
   */
  extensions: {
      [key: string]: unknown;
  }[] | null;
  /**
   * File Id
   * @description Unique ID of the uploaded file.
   */
  fileId?: string;
  /**
   * Remove Ai Tags
   * @description AI tags to remove from the asset.
   * @default null
   */
  removeAITags: string[] | null;
  /**
   * Tags
   * @description Set or replace the file's tags.
   * @default null
   */
  tags: string[] | null;
  /**
   * Webhook Url
   * @description Webhook URL for async extension status.
   * @default null
   */
  webhookUrl: string | null;
};

/**
 * Type of IMAGEKIT_IO's IMAGEKIT_IO_UPDATE_FILE_DETAILS tool output.
 */
type IMAGEKIT_IO_UPDATE_FILE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ai Tags
       * @default null
       */
      AITags: {
          /** Confidence */
          confidence: number;
          /** Name */
          name: string;
          /** Source */
          source: string;
      }[] | null;
      /** Created At */
      createdAt: string;
      /**
       * Custom Coordinates
       * @default null
       */
      customCoordinates: string | null;
      /**
       * Custom Metadata
       * @default null
       */
      customMetadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Extension Status
       * @default null
       */
      extensionStatus: {
          [key: string]: string;
      } | null;
      /** File Id */
      fileId: string;
      /** File Path */
      filePath: string;
      /** File Type */
      fileType: string;
      /**
       * Has Alpha
       * @default null
       */
      hasAlpha: boolean | null;
      /**
       * Height
       * @default null
       */
      height: number | null;
      /** Is Private File */
      isPrivateFile: boolean;
      /** Is Published */
      isPublished: boolean;
      /** Mime */
      mime: string;
      /** Name */
      name: string;
      /** Size */
      size: number;
      /**
       * Tags
       * @description User-defined tags
       * @default null
       */
      tags: string[] | null;
      /**
       * Thumbnail
       * @description Thumbnail URL
       * @default null
       */
      thumbnail: string | null;
      /** Type */
      type: string;
      /** Updated At */
      updatedAt: string;
      /** Url */
      url: string;
      /** Version Info */
      versionInfo: {
          /** Id */
          id: string;
          /** Name */
          name: string;
      };
      /**
       * Width
       * @default null
       */
      width: number | null;
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
 * Type map of all available tool input types for toolkit "IMAGEKIT_IO".
 */
export type IMAGEKIT_IO_TOOL_INPUTS = {
  BULK_JOB_STATUS: IMAGEKIT_IO_BULK_JOB_STATUS_INPUT
  BULK_MOVE_FILES: IMAGEKIT_IO_BULK_MOVE_FILES_INPUT
  BULK_REMOVE_TAGS: IMAGEKIT_IO_BULK_REMOVE_TAGS_INPUT
  COPY_FOLDER: IMAGEKIT_IO_COPY_FOLDER_INPUT
  CREATE_CUSTOM_METADATA_FIELD: IMAGEKIT_IO_CREATE_CUSTOM_METADATA_FIELD_INPUT
  CREATE_FOLDER: IMAGEKIT_IO_CREATE_FOLDER_INPUT
  DELETE_CUSTOM_METADATA_FIELD: IMAGEKIT_IO_DELETE_CUSTOM_METADATA_FIELD_INPUT
  DELETE_FILE: IMAGEKIT_IO_DELETE_FILE_INPUT
  DELETE_FILE_VERSION: IMAGEKIT_IO_DELETE_FILE_VERSION_INPUT
  DELETE_FOLDER: IMAGEKIT_IO_DELETE_FOLDER_INPUT
  DELETE_MULTIPLE_FILES: IMAGEKIT_IO_DELETE_MULTIPLE_FILES_INPUT
  GET_AUTHENTICATION_PARAMETERS: IMAGEKIT_IO_GET_AUTHENTICATION_PARAMETERS_INPUT
  GET_FILE_DETAILS: IMAGEKIT_IO_GET_FILE_DETAILS_INPUT
  GET_FILE_METADATA: IMAGEKIT_IO_GET_FILE_METADATA_INPUT
  GET_FILE_VERSION_DETAILS: IMAGEKIT_IO_GET_FILE_VERSION_DETAILS_INPUT
  GET_USAGE: IMAGEKIT_IO_GET_USAGE_INPUT
  LIST_AND_SEARCH_ASSETS: IMAGEKIT_IO_LIST_AND_SEARCH_ASSETS_INPUT
  LIST_CUSTOM_METADATA_FIELDS: IMAGEKIT_IO_LIST_CUSTOM_METADATA_FIELDS_INPUT
  LIST_FILE_VERSIONS: IMAGEKIT_IO_LIST_FILE_VERSIONS_INPUT
  MOVE_FOLDER: IMAGEKIT_IO_MOVE_FOLDER_INPUT
  PURGE_CACHE: IMAGEKIT_IO_PURGE_CACHE_INPUT
  PURGE_STATUS: IMAGEKIT_IO_PURGE_STATUS_INPUT
  RENAME_FILE: IMAGEKIT_IO_RENAME_FILE_INPUT
  RESTORE_FILE_VERSION: IMAGEKIT_IO_RESTORE_FILE_VERSION_INPUT
  UPDATE_CUSTOM_METADATA_FIELD: IMAGEKIT_IO_UPDATE_CUSTOM_METADATA_FIELD_INPUT
  UPDATE_FILE_DETAILS: IMAGEKIT_IO_UPDATE_FILE_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IMAGEKIT_IO".
 */
export type IMAGEKIT_IO_TOOL_OUTPUTS = {
  BULK_JOB_STATUS: IMAGEKIT_IO_BULK_JOB_STATUS_OUTPUT
  BULK_MOVE_FILES: IMAGEKIT_IO_BULK_MOVE_FILES_OUTPUT
  BULK_REMOVE_TAGS: IMAGEKIT_IO_BULK_REMOVE_TAGS_OUTPUT
  COPY_FOLDER: IMAGEKIT_IO_COPY_FOLDER_OUTPUT
  CREATE_CUSTOM_METADATA_FIELD: IMAGEKIT_IO_CREATE_CUSTOM_METADATA_FIELD_OUTPUT
  CREATE_FOLDER: IMAGEKIT_IO_CREATE_FOLDER_OUTPUT
  DELETE_CUSTOM_METADATA_FIELD: IMAGEKIT_IO_DELETE_CUSTOM_METADATA_FIELD_OUTPUT
  DELETE_FILE: IMAGEKIT_IO_DELETE_FILE_OUTPUT
  DELETE_FILE_VERSION: IMAGEKIT_IO_DELETE_FILE_VERSION_OUTPUT
  DELETE_FOLDER: IMAGEKIT_IO_DELETE_FOLDER_OUTPUT
  DELETE_MULTIPLE_FILES: IMAGEKIT_IO_DELETE_MULTIPLE_FILES_OUTPUT
  GET_AUTHENTICATION_PARAMETERS: IMAGEKIT_IO_GET_AUTHENTICATION_PARAMETERS_OUTPUT
  GET_FILE_DETAILS: IMAGEKIT_IO_GET_FILE_DETAILS_OUTPUT
  GET_FILE_METADATA: IMAGEKIT_IO_GET_FILE_METADATA_OUTPUT
  GET_FILE_VERSION_DETAILS: IMAGEKIT_IO_GET_FILE_VERSION_DETAILS_OUTPUT
  GET_USAGE: IMAGEKIT_IO_GET_USAGE_OUTPUT
  LIST_AND_SEARCH_ASSETS: IMAGEKIT_IO_LIST_AND_SEARCH_ASSETS_OUTPUT
  LIST_CUSTOM_METADATA_FIELDS: IMAGEKIT_IO_LIST_CUSTOM_METADATA_FIELDS_OUTPUT
  LIST_FILE_VERSIONS: IMAGEKIT_IO_LIST_FILE_VERSIONS_OUTPUT
  MOVE_FOLDER: IMAGEKIT_IO_MOVE_FOLDER_OUTPUT
  PURGE_CACHE: IMAGEKIT_IO_PURGE_CACHE_OUTPUT
  PURGE_STATUS: IMAGEKIT_IO_PURGE_STATUS_OUTPUT
  RENAME_FILE: IMAGEKIT_IO_RENAME_FILE_OUTPUT
  RESTORE_FILE_VERSION: IMAGEKIT_IO_RESTORE_FILE_VERSION_OUTPUT
  UPDATE_CUSTOM_METADATA_FIELD: IMAGEKIT_IO_UPDATE_CUSTOM_METADATA_FIELD_OUTPUT
  UPDATE_FILE_DETAILS: IMAGEKIT_IO_UPDATE_FILE_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IMAGEKIT_IO toolkit.
 */
export const IMAGEKIT_IO = {
  slug: "imagekit_io",
  tools: {
    /**
     * Tool to check status of a bulk job. Use when monitoring progress of a bulk copy or move folder operation.
     */
    BULK_JOB_STATUS: "IMAGEKIT_IO_BULK_JOB_STATUS",
    /**
     * Tool to move multiple files in bulk. Use when you need to relocate up to 100 ImageKit files to a specified folder in one API call.
     */
    BULK_MOVE_FILES: "IMAGEKIT_IO_BULK_MOVE_FILES",
    /**
     * Tool to remove tags from multiple files in bulk. Use when you need to strip specified tags from up to 50 existing files in one API call.
     */
    BULK_REMOVE_TAGS: "IMAGEKIT_IO_BULK_REMOVE_TAGS",
    /**
     * Tool to initiate a bulk copy of a folder. Use when you need to asynchronously duplicate a directory (optionally including all versions) at another path in ImageKit. Returns a jobId to track progress with IMAGEKIT_IO_BULK_JOB_STATUS.
     */
    COPY_FOLDER: "IMAGEKIT_IO_COPY_FOLDER",
    /**
     * Tool to create a custom metadata field. Use when you need to define a new field in ImageKit DAM.
     */
    CREATE_CUSTOM_METADATA_FIELD: "IMAGEKIT_IO_CREATE_CUSTOM_METADATA_FIELD",
    /**
     * Tool to create a new folder. Use when you need to organize assets into a structured folder hierarchy.
     */
    CREATE_FOLDER: "IMAGEKIT_IO_CREATE_FOLDER",
    /**
     * Tool to delete a custom metadata field. Use when you have the field ID and need to permanently remove the metadata schema field. Call after confirming irreversible deletion.
     */
    DELETE_CUSTOM_METADATA_FIELD: "IMAGEKIT_IO_DELETE_CUSTOM_METADATA_FIELD",
    /**
     * Tool to delete a file. Use when you have the file ID and need to permanently remove the file. Call after confirming irreversible deletion.
     */
    DELETE_FILE: "IMAGEKIT_IO_DELETE_FILE",
    /**
     * Tool to delete a specific non-current file version. Use when permanently removing an older version of a file.
     */
    DELETE_FILE_VERSION: "IMAGEKIT_IO_DELETE_FILE_VERSION",
    /**
     * Tool to delete a folder. Use when you need to permanently remove an existing folder and its contents. Call after confirming irreversible deletion.
     */
    DELETE_FOLDER: "IMAGEKIT_IO_DELETE_FOLDER",
    /**
     * Tool to delete multiple files. Use when you need to remove up to 100 assets by their file IDs in one batch operation.
     */
    DELETE_MULTIPLE_FILES: "IMAGEKIT_IO_DELETE_MULTIPLE_FILES",
    /**
     * Tool to generate authentication parameters for client-side file uploads. Use when preparing client-side uploads.
     */
    GET_AUTHENTICATION_PARAMETERS: "IMAGEKIT_IO_GET_AUTHENTICATION_PARAMETERS",
    /**
     * Tool to retrieve details of a specific file. Use after uploading or listing assets to get full metadata.
     */
    GET_FILE_DETAILS: "IMAGEKIT_IO_GET_FILE_DETAILS",
    /**
     * Tool to retrieve metadata of an uploaded file. Use after confirming a successful upload to get EXIF, pHash, dimensions, and other image metadata.
     */
    GET_FILE_METADATA: "IMAGEKIT_IO_GET_FILE_METADATA",
    /**
     * Tool to retrieve details of a specific file version. Use after listing or uploading assets when you need to inspect version metadata.
     */
    GET_FILE_VERSION_DETAILS: "IMAGEKIT_IO_GET_FILE_VERSION_DETAILS",
    /**
     * Tool to retrieve account usage metrics. Use when you need usage stats for a specific date range (max 90 days).
     */
    GET_USAGE: "IMAGEKIT_IO_GET_USAGE",
    /**
     * Tool to list and search assets in your ImageKit account. Use when you want to retrieve or filter media library assets by criteria such as name, tags, folder path, or advanced queries.
     */
    LIST_AND_SEARCH_ASSETS: "IMAGEKIT_IO_LIST_AND_SEARCH_ASSETS",
    /**
     * Tool to list all custom metadata fields. Use when you need to retrieve all defined metadata fields, optionally including deleted ones.
     */
    LIST_CUSTOM_METADATA_FIELDS: "IMAGEKIT_IO_LIST_CUSTOM_METADATA_FIELDS",
    /**
     * Tool to list all versions of a file. Use after confirming the fileId to retrieve all historical and published versions of an asset.
     */
    LIST_FILE_VERSIONS: "IMAGEKIT_IO_LIST_FILE_VERSIONS",
    /**
     * Tool to initiate a bulk move of a folder. Use when you need to asynchronously relocate a directory to another path in ImageKit. Returns a jobId to track progress with IMAGEKIT_IO_BULK_JOB_STATUS.
     */
    MOVE_FOLDER: "IMAGEKIT_IO_MOVE_FOLDER",
    /**
     * Tool to purge CDN and ImageKit caches for a given URL. Use when you need to invalidate cached content on ImageKit.
     */
    PURGE_CACHE: "IMAGEKIT_IO_PURGE_CACHE",
    /**
     * Tool to check the status of a cache purge request. Use after initiating a purge to retrieve its current state. Example: "What's the status of purge request id abc123?"
     */
    PURGE_STATUS: "IMAGEKIT_IO_PURGE_STATUS",
    /**
     * Tool to rename a file. Use when you need to update an existing asset's name; optionally purge CDN cache for old URLs.
     */
    RENAME_FILE: "IMAGEKIT_IO_RENAME_FILE",
    /**
     * Tool to restore a specific non-current file version as the current one. Use when you need to revert a file to a previous version after confirming the versionId.
     */
    RESTORE_FILE_VERSION: "IMAGEKIT_IO_RESTORE_FILE_VERSION",
    /**
     * Tool to update an existing custom metadata field. Use when you need to modify the label or schema of a metadata field.
     */
    UPDATE_CUSTOM_METADATA_FIELD: "IMAGEKIT_IO_UPDATE_CUSTOM_METADATA_FIELD",
    /**
     * Tool to update details of a file. Use when you need to modify tags, coordinates, metadata, or extensions on an ImageKit asset.
     */
    UPDATE_FILE_DETAILS: "IMAGEKIT_IO_UPDATE_FILE_DETAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IMAGEKIT_IO".
 */
export type IMAGEKIT_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IMAGEKIT_IO".
 */
export type IMAGEKIT_IO_TRIGGER_EVENTS = {}
