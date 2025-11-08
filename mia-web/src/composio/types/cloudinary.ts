// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLOUDINARY's CLOUDINARY_CREATE_FOLDER tool input.
 */
type CLOUDINARY_CREATE_FOLDER_INPUT = {
  /**
   * Folder
   * @description Full path of the new asset folder (e.g., 'images/events/2023').
   */
  folder?: string;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_CREATE_FOLDER tool output.
 */
type CLOUDINARY_CREATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the folder was created (ISO 8601).
       * @default null
       */
      created_at: string | null;
      /**
       * External Id
       * @description External identifier for the folder if provided by Cloudinary.
       * @default null
       */
      external_id: string | null;
      /**
       * Name
       * @description Name of the created folder.
       */
      name: string;
      /**
       * Path
       * @description Full path of the created folder.
       */
      path: string;
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
 * Type of CLOUDINARY's CLOUDINARY_CREATE_METADATA_FIELD tool input.
 */
type CLOUDINARY_CREATE_METADATA_FIELD_INPUT = {
  /**
   * Allow Dynamic List Values
   * @description Allow dynamic additions of set values (for 'set' type).
   * @default false
   */
  allow_dynamic_list_values: boolean;
  /**
   * MetadataFieldDatasource
   * @description Predefined list of values for enum or set metadata fields.
   * @default null
   */
  datasource: {
      /**
       * Values
       * @description List of possible values for the field (max 3000).
       */
      values: {
          /**
           * External Id
           * @description A unique immutable ID for this list value.
           */
          external_id: string;
          /**
           * Value
           * @description The display string for this list entry.
           */
          value: string;
      }[];
  } | null;
  /**
   * Default Disabled
   * @description Disable field by default for new assets (default false).
   * @default false
   */
  default_disabled: boolean;
  /**
   * Default Value
   * @description Default value for the field. Required if mandatory=true. Use list for 'set'.
   * @default null
   */
  default_value: number | null;
  /**
   * External Id
   * @description Unique ID for the field (max 255 chars). Auto-generated if omitted.
   * @default null
   */
  external_id: string | null;
  /**
   * Label
   * @description Human-readable label shown in the UI.
   */
  label?: string;
  /**
   * Mandatory
   * @description Whether a value is required (default false).
   * @default false
   */
  mandatory: boolean;
  /**
   * Restrictions
   * @description UI restrictions object, e.g., {'readonly_ui': True}.
   * @default null
   */
  restrictions: {
      [key: string]: boolean;
  } | null;
  /**
   * Type
   * @description Data type of the metadata field.
   * @enum {string}
   */
  type?: "string" | "integer" | "date" | "enum" | "set";
  /**
   * Validation
   * @description Validation rules object, e.g. greater_than, strlen, strregex.
   * @default null
   */
  validation: {
      [key: string]: boolean | number | string | (number | string)[];
  } | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_CREATE_METADATA_FIELD tool output.
 */
type CLOUDINARY_CREATE_METADATA_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow Dynamic List Values
       * @description Allow dynamic list additions for 'set' metadata fields.
       * @default false
       */
      allow_dynamic_list_values: boolean;
      /**
       * MetadataFieldDatasource
       * @description Predefined list of values for enum or set metadata fields.
       * @default null
       */
      datasource: {
          /**
           * Values
           * @description List of possible values for the field (max 3000).
           */
          values: {
              /**
               * External Id
               * @description A unique immutable ID for this list value.
               */
              external_id: string;
              /**
               * Value
               * @description The display string for this list entry.
               */
              value: string;
          }[];
      } | null;
      /**
       * Default Disabled
       * @description Whether the field is disabled by default.
       * @default false
       */
      default_disabled: boolean;
      /**
       * Default Value
       * @description Default value assigned to the field.
       * @default null
       */
      default_value: number | null;
      /**
       * External Id
       * @description Unique identifier of the field.
       */
      external_id: string;
      /**
       * Label
       * @description Human-readable label shown in the UI.
       */
      label: string;
      /**
       * Mandatory
       * @description Whether a value is required.
       */
      mandatory: boolean;
      /**
       * Restrictions
       * @description UI restrictions applied to the field.
       * @default {}
       */
      restrictions: {
          [key: string]: boolean;
      };
      /**
       * Type
       * @description Data type of the metadata field.
       * @enum {string}
       */
      type: "string" | "integer" | "date" | "enum" | "set";
      /**
       * Validation
       * @description Validation rules defined for the field.
       * @default null
       */
      validation: {
          [key: string]: boolean | number | string | (number | string)[];
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
 * Type of CLOUDINARY's CLOUDINARY_CREATE_TRIGGER tool input.
 */
type CLOUDINARY_CREATE_TRIGGER_INPUT = {
  /**
   * Event Type
   * @description The event type that triggers the webhook notification.
   * @enum {string}
   */
  event_type?: "all" | "access_control_changed" | "bulk_refresh_auto_fetch" | "create_folder" | "delete" | "delete_by_token" | "delete_folder" | "eager" | "error" | "explode" | "generate_archive" | "info" | "invalidate_custom_cdn" | "moderation" | "moderation_summary" | "move" | "move_or_rename_asset_folder" | "multi" | "publish" | "rename" | "report" | "resource_context_changed" | "resource_display_name_changed" | "resource_metadata_changed" | "resource_tags_changed" | "restore_asset_version" | "sprite" | "upload";
  /**
   * Uri
   * @description HTTPS URL to receive webhook notifications.
   */
  uri?: string;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_CREATE_TRIGGER tool output.
 */
type CLOUDINARY_CREATE_TRIGGER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Triggers
       * @description Definition of the created webhook trigger.
       */
      triggers: {
          /**
           * Created At
           * @description Timestamp when the trigger was created (ISO 8601).
           */
          created_at: string;
          /**
           * Event Type
           * @description The event type that triggers this webhook.
           */
          event_type: string;
          /**
           * Id
           * @description Unique trigger identifier.
           */
          id: string;
          /**
           * Product Environment Id
           * @description Immutable ID of the Cloudinary product environment.
           */
          product_environment_id: string;
          /**
           * Updated At
           * @description Timestamp when the trigger was last updated (ISO 8601).
           */
          updated_at: string;
          /**
           * Uri
           * @description The configured notification URL.
           */
          uri: string;
          /**
           * Uri Type
           * @description URI type; always 'webhook'.
           */
          uri_type: string;
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
 * Type of CLOUDINARY's CLOUDINARY_CREATE_UPLOAD_MAPPING tool input.
 */
type CLOUDINARY_CREATE_UPLOAD_MAPPING_INPUT = {
  /**
   * Folder
   * @description The name of the folder to map.
   */
  folder?: string;
  /**
   * Template
   * @description The URL prefix to be mapped to the folder.
   */
  template?: string;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_CREATE_UPLOAD_MAPPING tool output.
 */
type CLOUDINARY_CREATE_UPLOAD_MAPPING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * External Id
       * @description The immutable identifier of the created upload mapping.
       */
      external_id: string;
      /**
       * Folder
       * @description The name of the folder that was mapped.
       */
      folder: string;
      /**
       * Message
       * @description Status message of the creation request.
       */
      message: string;
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
 * Type of CLOUDINARY's CLOUDINARY_CREATE_UPLOAD_PRESET tool input.
 */
type CLOUDINARY_CREATE_UPLOAD_PRESET_INPUT = {
  /**
   * Accessibility Analysis
   * @description Whether to perform accessibility analysis.
   * @default false
   */
  accessibility_analysis: boolean | null;
  /**
   * Allowed Formats
   * @description Comma-separated list of allowed formats (e.g., jpg,png).
   * @default null
   */
  allowed_formats: string | null;
  /**
   * Auto Tagging
   * @description Confidence threshold (0.0-1.0) for auto-tagging.
   * @default null
   */
  auto_tagging: number | null;
  /**
   * Background Removal
   * @description Background removal add-on to apply.
   * @default null
   * @enum {string|null}
   */
  background_removal: "cloudinary_ai" | "pixelz" | null;
  /**
   * Callback
   * Format: uri
   * @description Callback URL to send upload responses.
   * @default null
   */
  callback: unknown;
  /**
   * Categorization
   * @description Comma-separated list of categorization add-on(s) to apply.
   * @default null
   */
  categorization: string | null;
  /**
   * Cinemagraph Analysis
   * @description Whether to perform cinemagraph analysis.
   * @default false
   */
  cinemagraph_analysis: boolean | null;
  /**
   * Context
   * @description Context metadata in key=value|key2=value2 format.
   * @default null
   */
  context: string | null;
  /**
   * Detection
   * @description Detection add-on to apply (e.g., 'adv_face').
   * @default null
   */
  detection: string | null;
  /**
   * Eager
   * @description Eager transformations to generate on upload (e.g., 'c_fill,g_face,h_150,w_150').
   * @default null
   */
  eager: string | null;
  /**
   * Folder
   * @description Folder path in your Cloudinary account to store uploads.
   * @default null
   */
  folder: string | null;
  /**
   * Moderation
   * @description Type of moderation to apply (if any).
   * @default null
   * @enum {string|null}
   */
  moderation: "manual" | "webpurify" | "aws_rek" | "aws_rek_video" | "perception_point" | "google_video_moderation" | "duplicate" | null;
  /**
   * Name
   * @description Name for the new preset. If omitted, Cloudinary generates one.
   * @default null
   */
  name: string | null;
  /**
   * Notification Url
   * Format: uri
   * @description Webhook URL to receive upload notifications.
   * @default null
   */
  notification_url: unknown;
  /**
   * Ocr
   * @description OCR add-on to apply.
   * @default null
   * @constant
   */
  ocr: "adv_ocr";
  /**
   * Overwrite
   * @description Overwrite any existing asset with the same public_id.
   * @default true
   */
  overwrite: boolean | null;
  /**
   * Proxy
   * Format: uri
   * @description Proxy URL for the upload request.
   * @default null
   */
  proxy: unknown;
  /**
   * Quality Analysis
   * @description Whether to perform quality analysis.
   * @default false
   */
  quality_analysis: boolean | null;
  /**
   * Resource Type
   * @description Asset type this preset applies to.
   * @default image
   * @enum {string}
   */
  resource_type: "image" | "video" | "raw";
  /**
   * Tags
   * @description Comma-separated list of tags to apply to uploads.
   * @default null
   */
  tags: string | null;
  /**
   * Transformation
   * @description Incoming transformation to apply on upload (e.g., 'c_limit,w_500').
   * @default null
   */
  transformation: string | null;
  /**
   * Unique Filename
   * @description Append a random suffix to the filename to avoid collisions.
   * @default true
   */
  unique_filename: boolean | null;
  /**
   * Unsigned
   * @description Allow unsigned uploads using this preset.
   * @default false
   */
  unsigned: boolean | null;
  /**
   * Use Filename
   * @description Use the original filename of the uploaded asset.
   * @default false
   */
  use_filename: boolean | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_CREATE_UPLOAD_PRESET tool output.
 */
type CLOUDINARY_CREATE_UPLOAD_PRESET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * External Id
       * @description A unique identifier for the created upload preset.
       */
      external_id: string;
      /**
       * Message
       * @description Result message, typically 'created'.
       */
      message: string;
      /**
       * Name
       * @description The name of the created upload preset.
       */
      name: string;
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
 * Type of CLOUDINARY's CLOUDINARY_DELETE_DERIVED_RESOURCES tool input.
 */
type CLOUDINARY_DELETE_DERIVED_RESOURCES_INPUT = {
  /**
   * Derived Resource Ids
   * @description Array of up to 100 derived resource IDs to delete.
   */
  derived_resource_ids?: string[];
};

/**
 * Type of CLOUDINARY's CLOUDINARY_DELETE_DERIVED_RESOURCES tool output.
 */
type CLOUDINARY_DELETE_DERIVED_RESOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Mapping of derived resource ID to deletion status (e.g., 'deleted').
       */
      deleted: {
          [key: string]: string;
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
 * Type of CLOUDINARY's CLOUDINARY_DELETE_ENTRIES_IN_METADATA_FIELD_DATASOURCE tool input.
 */
type CLOUDINARY_DELETE_ENTRIES_IN_METADATA_FIELD_DATASOURCE_INPUT = {
  /**
   * External Id
   * @description External ID of the metadata field whose datasource entries will be deleted.
   */
  external_id?: string;
  /**
   * External Ids
   * @description List of datasource entry external IDs to delete (inactivate).
   */
  external_ids?: string[];
};

/**
 * Type of CLOUDINARY's CLOUDINARY_DELETE_ENTRIES_IN_METADATA_FIELD_DATASOURCE tool output.
 */
type CLOUDINARY_DELETE_ENTRIES_IN_METADATA_FIELD_DATASOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Values
       * @description Remaining datasource entries with their external_id, value, and state after deletion
       */
      values: {
          /**
           * External Id
           * @description External ID of the datasource entry.
           */
          external_id: string;
          /**
           * State
           * @description State of the entry: 'active' or 'inactive'.
           * @enum {string}
           */
          state: "active" | "inactive";
          /**
           * Value
           * @description The display value of the datasource entry.
           */
          value: string;
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
 * Type of CLOUDINARY's CLOUDINARY_DELETE_FOLDER tool input.
 */
type CLOUDINARY_DELETE_FOLDER_INPUT = {
  /**
   * Folder
   * @description Full path of the empty folder to delete (e.g., 'product/test').
   */
  folder?: string;
  /**
   * Skip Backup
   * @description Whether to delete the folder even if it contains backed up assets. Default: false.
   * @default false
   */
  skip_backup: boolean;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_DELETE_FOLDER tool output.
 */
type CLOUDINARY_DELETE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description List of folder paths that were deleted.
       */
      deleted: string[];
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
 * Type of CLOUDINARY's CLOUDINARY_DELETE_METADATA_FIELD tool input.
 */
type CLOUDINARY_DELETE_METADATA_FIELD_INPUT = {
  /**
   * External Id
   * @description External ID of the metadata field to delete.
   */
  external_id?: string;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_DELETE_METADATA_FIELD tool output.
 */
type CLOUDINARY_DELETE_METADATA_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * External Id
       * @description External ID of the metadata field that was deleted.
       */
      external_id: string;
      /**
       * Message
       * @description Outcome message of the delete operation.
       */
      message: string;
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
 * Type of CLOUDINARY's CLOUDINARY_DELETE_RESOURCES_BY_ASSET_ID tool input.
 */
type CLOUDINARY_DELETE_RESOURCES_BY_ASSET_ID_INPUT = {
  /**
   * Asset Ids
   * @description Array of up to 100 immutable Cloudinary asset IDs to delete.
   */
  asset_ids?: string[];
  /**
   * Invalidate
   * @description Whether to also invalidate CDN cache for deleted assets.
   * @default null
   */
  invalidate: boolean | null;
  /**
   * Keep Original
   * @description If true, only delete derived resources, keeping the original assets.
   * @default null
   */
  keep_original: boolean | null;
  /**
   * Transformations
   * @description List of transformation strings; only delete derived resources matching these transformations.
   * @default null
   */
  transformations: string[] | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_DELETE_RESOURCES_BY_ASSET_ID tool output.
 */
type CLOUDINARY_DELETE_RESOURCES_BY_ASSET_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Mapping of asset ID to deletion status (e.g., 'deleted').
       */
      deleted: {
          [key: string]: string;
      };
      /**
       * Partial
       * @description True if there are more matching resources than were deleted in this call.
       * @default null
       */
      partial: boolean | null;
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
 * Type of CLOUDINARY's CLOUDINARY_DELETE_RESOURCES_BY_TAGS tool input.
 */
type CLOUDINARY_DELETE_RESOURCES_BY_TAGS_INPUT = {
  /**
   * Invalidate
   * @description If true, invalidate CDN cached copies of deleted resources.
   * @default false
   */
  invalidate: boolean;
  /**
   * Keep Original
   * @description If true, delete only derived assets and keep originals.
   * @default false
   */
  keep_original: boolean;
  /**
   * Next Cursor
   * @description Cursor for pagination when deleting more than 1000 resources.
   * @default null
   */
  next_cursor: string | null;
  /**
   * Resource Type
   * @description Type of asset to delete. Use 'video' for both video and audio assets.
   * @default image
   * @enum {string}
   */
  resource_type: "image" | "raw" | "video";
  /**
   * Tag
   * @description Name of the tag whose resources should be deleted.
   */
  tag?: string;
  /**
   * Transformations
   * @description Comma-separated transformation hashes to delete matching derived resources.
   * @default null
   */
  transformations: string | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_DELETE_RESOURCES_BY_TAGS tool output.
 */
type CLOUDINARY_DELETE_RESOURCES_BY_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Mapping from resource identifiers to deletion status.
       */
      deleted: {
          [key: string]: string;
      };
      /**
       * Next Cursor
       * @description Cursor to continue pagination when 'partial' is true.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Partial
       * @description Indicates if deletion was partial (more resources remain).
       */
      partial: boolean;
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
 * Type of CLOUDINARY's CLOUDINARY_DELETE_TRIGGER tool input.
 */
type CLOUDINARY_DELETE_TRIGGER_INPUT = {
  /**
   * Trigger Id
   * @description The unique identifier of the trigger (webhook) to delete.
   */
  trigger_id?: string;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_DELETE_TRIGGER tool output.
 */
type CLOUDINARY_DELETE_TRIGGER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Result of the delete operation; returns 'ok' on success.
       */
      message: string;
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
 * Type of CLOUDINARY's CLOUDINARY_GET_ADAPTIVE_STREAMING_PROFILES tool input.
 */
type CLOUDINARY_GET_ADAPTIVE_STREAMING_PROFILES_INPUT = object;

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_ADAPTIVE_STREAMING_PROFILES tool output.
 */
type CLOUDINARY_GET_ADAPTIVE_STREAMING_PROFILES_OUTPUT = {
  /**
   * Data
   * @description List of adaptive streaming profiles (built-in and custom).
   */
  data?: {
      /**
       * Display Name
       * @description Human-readable name of the streaming profile.
       */
      display_name: string;
      /**
       * Name
       * @description Identifier of the streaming profile.
       */
      name: string;
      /**
       * Predefined
       * @description Whether this profile is a built-in (true) or custom (false) profile.
       */
      predefined: boolean;
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
 * Type of CLOUDINARY's CLOUDINARY_GET_CONFIG tool input.
 */
type CLOUDINARY_GET_CONFIG_INPUT = {
  /**
   * Settings
   * @description Whether to include the current configuration settings in the response (e.g., folder_mode).
   * @default false
   */
  settings: boolean;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_CONFIG tool output.
 */
type CLOUDINARY_GET_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cloud Name
       * @description The cloud name of the product environment.
       * @default null
       */
      cloud_name: string | null;
      /**
       * Created At
       * @description The timestamp when the product environment was created (ISO 8601).
       * @default null
       */
      created_at: string | null;
      /**
       * SettingsModel
       * @description Settings detail for product environment.
       * @default null
       */
      settings: {
          /**
           * Folder Mode
           * @description The folder mode of the product environment (dynamic or fixed).
           * @default null
           */
          folder_mode: string | null;
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
 * Type of CLOUDINARY's CLOUDINARY_GET_METADATA_FIELD_BY_ID tool input.
 */
type CLOUDINARY_GET_METADATA_FIELD_BY_ID_INPUT = {
  /**
   * External Id
   * @description External ID of the metadata field to retrieve.
   */
  external_id?: string;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_METADATA_FIELD_BY_ID tool output.
 */
type CLOUDINARY_GET_METADATA_FIELD_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow Dynamic List Values
       * @description Whether 'set' fields allow dynamic list value additions.
       * @default false
       */
      allow_dynamic_list_values: boolean;
      /**
       * MetadataFieldDatasource
       * @description Predefined list of values for enum or set metadata fields.
       * @default null
       */
      datasource: {
          /**
           * Values
           * @description List of possible enum or set values (max 3000).
           */
          values: {
              /**
               * External Id
               * @description A unique immutable ID for this list value. Auto-generated if omitted.
               * @default null
               */
              external_id: string | null;
              /**
               * Value
               * @description The display string for this list entry.
               */
              value: string;
          }[];
      } | null;
      /**
       * Default Disabled
       * @description Whether the field is disabled by default for new assets.
       */
      default_disabled: boolean;
      /**
       * Default Value
       * @description Default value for the field (list for 'set' type).
       * @default null
       */
      default_value: number | null;
      /**
       * External Id
       * @description Field's external ID.
       */
      external_id: string;
      /**
       * Label
       * @description Display label for the metadata field.
       */
      label: string;
      /**
       * Mandatory
       * @description Whether the field is mandatory.
       */
      mandatory: boolean;
      /**
       * Restrictions
       * @description UI restrictions, e.g. {'readonly_ui': True}.
       * @default null
       */
      restrictions: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description Type of the metadata field.
       * @enum {string}
       */
      type: "string" | "integer" | "date" | "enum" | "set";
      /**
       * Validation
       * @description Validation rules for the metadata field.
       * @default null
       */
      validation: {
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
 * Type of CLOUDINARY's CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER tool input.
 */
type CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER_INPUT = {
  /**
   * Asset Folder
   * @description Name of the asset folder (case-insensitive) to list assets from.
   */
  asset_folder?: string;
  /**
   * Max Results
   * @description Maximum number of assets to return (1-500). Defaults to 50.
   * @default 50
   */
  max_results: number | null;
  /**
   * Next Cursor
   * @description Cursor for pagination; include to fetch the next page of results.
   * @default null
   */
  next_cursor: string | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER tool output.
 */
type CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Cursor
       * @description Cursor for fetching the next page of results, if more assets exist.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Resources
       * @description List of asset details stored directly in the specified folder.
       */
      resources: {
          /**
           * Created At
           * @description ISO8601 timestamp when the asset was created.
           */
          created_at: string;
          /**
           * Public Id
           * @description Unique identifier of the asset.
           */
          public_id: string;
          /**
           * Resource Type
           * @description Type of the resource, e.g., image, video, raw.
           */
          resource_type: string;
          /**
           * Secure Url
           * @description HTTPS URL of the asset.
           */
          secure_url: string;
          /**
           * Type
           * @description Delivery type of the resource, e.g., upload, private, authenticated.
           */
          type: string;
          /**
           * Url
           * @description Secure URL of the asset.
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
 * Type of CLOUDINARY's CLOUDINARY_GET_RESOURCES_BY_CONTEXT tool input.
 */
type CLOUDINARY_GET_RESOURCES_BY_CONTEXT_INPUT = {
  /**
   * Context
   * @description Include contextual metadata key/value pairs for each asset.
   * @default false
   */
  context: boolean;
  /**
   * Direction
   * @description Order by created_at date. 'desc' or '-1' (default) for newest first, 'asc' or '1' for oldest first.
   * @default desc
   * @enum {string}
   */
  direction: "desc" | "-1" | "asc" | "1";
  /**
   * Fields
   * @description Comma-separated list of resource fields to include in each asset.
   * @default null
   */
  fields: string | null;
  /**
   * Key
   * @description Contextual metadata key to filter assets on (required).
   */
  key?: string;
  /**
   * Max Results
   * @description Maximum number of assets to return (1-500). Defaults to 10.
   * @default 10
   */
  max_results: number;
  /**
   * Metadata
   * @description Include structured metadata fields for each asset.
   * @default false
   */
  metadata: boolean;
  /**
   * Moderations
   * @description Include image moderation status for each asset.
   * @default false
   */
  moderations: boolean;
  /**
   * Next Cursor
   * @description Cursor for pagination; include to fetch the next page of results.
   * @default null
   */
  next_cursor: string | null;
  /**
   * Resource Type
   * @description Type of asset to list. Defaults to 'image'.
   * @default image
   * @enum {string}
   */
  resource_type: "image" | "raw" | "video";
  /**
   * Tags
   * @description Include tag list for each asset.
   * @default false
   */
  tags: boolean;
  /**
   * Value
   * @description Contextual metadata value to filter assets. If omitted, returns all assets with the given key.
   * @default null
   */
  value: string | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_RESOURCES_BY_CONTEXT tool output.
 */
type CLOUDINARY_GET_RESOURCES_BY_CONTEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Cursor
       * @description Cursor for next page of results, if any.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Resources
       * @description List of assets matching the context filter.
       */
      resources: {
          /**
           * Asset Id
           * @description Unique asset ID.
           */
          asset_id: string;
          /**
           * Bytes
           * @description Size of the asset in bytes.
           */
          bytes: number;
          /**
           * Context
           * @description Contextual metadata key/value pairs.
           * @default null
           */
          context: {
              [key: string]: string;
          } | null;
          /**
           * Created At
           * @description ISO8601 timestamp when the asset was created.
           */
          created_at: string;
          /**
           * Format
           * @description Asset format, e.g., jpg, mp4.
           */
          format: string;
          /**
           * Height
           * @description Height of the asset in pixels.
           */
          height: number;
          /**
           * Metadata
           * @description Structured metadata fields and values.
           * @default null
           */
          metadata: {
              [key: string]: string;
          } | null;
          /**
           * Moderations
           * @description List of image moderation statuses for the asset.
           * @default null
           */
          moderations: {
              /**
               * Kind
               * @description Type of moderation, e.g., aws_rekog.
               */
              kind: string;
              /**
               * Status
               * @description Moderation status, e.g., pending, approved, rejected.
               */
              status: string;
              /**
               * Updated At
               * @description ISO8601 timestamp when moderation was last updated.
               */
              updated_at: string;
          }[] | null;
          /**
           * Public Id
           * @description Public identifier of the asset.
           */
          public_id: string;
          /**
           * Resource Type
           * @description Type of the resource.
           * @enum {string}
           */
          resource_type: "image" | "raw" | "video";
          /**
           * Secure Url
           * @description HTTPS URL of the asset.
           */
          secure_url: string;
          /**
           * Tags
           * @description List of tag names assigned to the asset.
           * @default null
           */
          tags: string[] | null;
          /**
           * Type
           * @description Delivery type of the asset, e.g., upload, private.
           */
          type: string;
          /**
           * Url
           * @description HTTP URL of the asset.
           */
          url: string;
          /**
           * Version
           * @description Version number of the asset.
           */
          version: number;
          /**
           * Width
           * @description Width of the asset in pixels.
           */
          width: number;
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
 * Type of CLOUDINARY's CLOUDINARY_GET_RESOURCES_IN_MODERATION tool input.
 */
type CLOUDINARY_GET_RESOURCES_IN_MODERATION_INPUT = {
  /**
   * Context
   * @description Include contextual metadata in the response.
   * @default null
   */
  context: boolean | null;
  /**
   * Direction
   * @description Sort direction of returned results.
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | "1" | "-1" | null;
  /**
   * Fields
   * @description Comma-separated list of fields to include in the response.
   * @default null
   */
  fields: string | null;
  /**
   * Max Results
   * @description Maximum number of results to return (1-500).
   * @default null
   */
  max_results: number | null;
  /**
   * Metadata
   * @description Include structured metadata in the response.
   * @default null
   */
  metadata: boolean | null;
  /**
   * Moderation Kind
   * @description Moderation list type to query.
   * @enum {string}
   */
  moderation_kind?: "manual" | "webpurify" | "aws_rek" | "aws_rek_video" | "perception_point" | "google_video_moderation" | "duplicate";
  /**
   * Moderations
   * @description Include asset moderation info in the response.
   * @default null
   */
  moderations: boolean | null;
  /**
   * Next Cursor
   * @description Cursor for pagination to fetch the next page.
   * @default null
   */
  next_cursor: string | null;
  /**
   * Resource Type
   * @description Type of resource to query; use 'video' for all videos and audio.
   * @default image
   * @enum {string}
   */
  resource_type: "image" | "raw" | "video";
  /**
   * Status
   * @description Moderation status to filter by.
   * @enum {string}
   */
  status?: "pending" | "approved" | "rejected" | "queued" | "aborted";
  /**
   * Tags
   * @description Include tags in the response.
   * @default null
   */
  tags: boolean | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_RESOURCES_IN_MODERATION tool output.
 */
type CLOUDINARY_GET_RESOURCES_IN_MODERATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Cursor
       * @description Cursor for the next page of results.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Rate Limit Allowed
       * @description Total rate limit allowed.
       * @default null
       */
      rate_limit_allowed: number | null;
      /**
       * Rate Limit Remaining
       * @description Remaining rate limit.
       * @default null
       */
      rate_limit_remaining: number | null;
      /**
       * Rate Limit Reset At
       * @description Timestamp when rate limit resets.
       * @default null
       */
      rate_limit_reset_at: string | null;
      /**
       * Resources
       * @description List of resources matching the moderation filter.
       */
      resources: {
          /**
           * Asset Id
           * @description Unique asset ID.
           */
          asset_id: string;
          /**
           * Bytes
           * @description Size in bytes.
           */
          bytes: number;
          /**
           * Created At
           * @description Creation timestamp (ISO 8601).
           */
          created_at: string;
          /**
           * Format
           * @description Format, e.g., jpg, mp4.
           */
          format: string;
          /**
           * Height
           * @description Height in pixels.
           * @default null
           */
          height: number | null;
          /**
           * Moderation Kind
           * @description Moderation queue kind.
           */
          moderation_kind: string;
          /**
           * Moderation Status
           * @description Moderation status.
           */
          moderation_status: string;
          /**
           * Public Id
           * @description Public ID of the resource.
           */
          public_id: string;
          /**
           * Resource Type
           * @description Resource type.
           * @enum {string}
           */
          resource_type: "image" | "raw" | "video";
          /**
           * Secure Url
           * @description Secure HTTPS URL.
           */
          secure_url: string;
          /**
           * Type
           * @description Delivery type, e.g., upload, private.
           */
          type: string;
          /**
           * Url
           * @description URL of the resource.
           */
          url: string;
          /**
           * Version
           * @description Version number.
           */
          version: number;
          /**
           * Width
           * @description Width in pixels.
           * @default null
           */
          width: number | null;
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
 * Type of CLOUDINARY's CLOUDINARY_GET_RESOURCE_BY_ASSET_ID tool input.
 */
type CLOUDINARY_GET_RESOURCE_BY_ASSET_ID_INPUT = {
  /**
   * Accessibility Analysis
   * @description Include accessibility analysis scores
   * @default false
   */
  accessibility_analysis: boolean;
  /**
   * Asset Id
   * @description Unique immutable asset ID
   */
  asset_id?: string;
  /**
   * Colors
   * @description Include color histogram and predominant colors
   * @default false
   */
  colors: boolean;
  /**
   * Coordinates
   * @description Include custom crop and face coordinates
   * @default false
   */
  coordinates: boolean;
  /**
   * Derived Next Cursor
   * @description Cursor for next page of derived assets
   * @default null
   */
  derived_next_cursor: string | null;
  /**
   * Faces
   * @description Include detected face coordinates
   * @default false
   */
  faces: boolean;
  /**
   * Image Metadata
   * @description Include IPTC, XMP, Exif metadata (returns ETag)
   * @default false
   */
  image_metadata: boolean;
  /**
   * Max Results
   * @description Max derived assets to return (1-500)
   * @default null
   */
  max_results: number | null;
  /**
   * Pages
   * @description Include page count for multi-page documents
   * @default false
   */
  pages: boolean;
  /**
   * Phash
   * @description Include perceptual hash for similarity detection
   * @default false
   */
  phash: boolean;
  /**
   * Quality Analysis
   * @description Include image quality analysis scores
   * @default false
   */
  quality_analysis: boolean;
  /**
   * Versions
   * @description Include backed-up version details
   * @default false
   */
  versions: boolean;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_RESOURCE_BY_ASSET_ID tool output.
 */
type CLOUDINARY_GET_RESOURCE_BY_ASSET_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asset Folder
       * @description Asset folder path if any
       * @default null
       */
      asset_folder: string | null;
      /**
       * Asset Id
       * @description Unique asset ID
       */
      asset_id: string;
      /**
       * Bytes
       * @description Resource size in bytes
       */
      bytes: number;
      /**
       * Colors
       * @description Color histogram array of [hex, percentage]
       * @default null
       */
      colors: (string | number)[][] | null;
      /**
       * Context
       * @description Contextual metadata; mapping of key->(key->value)
       * @default null
       */
      context: {
          [key: string]: {
              [key: string]: string;
          };
      } | null;
      /**
       * Created At
       * @description ISO8601 creation timestamp
       */
      created_at: string;
      /**
       * Derived
       * @description Details of derived assets
       * @default null
       */
      derived: {
          /**
           * Bytes
           * @description Size of the derived asset in bytes
           */
          bytes: number;
          /**
           * Format
           * @description Format of the derived asset
           */
          format: string;
          /**
           * Id
           * @description Identifier of the derived asset
           */
          id: string;
          /**
           * Secure Url
           * @description Secure URL of the derived asset
           */
          secure_url: string;
          /**
           * Transformation
           * @description Transformation applied to derive this asset
           */
          transformation: string;
          /**
           * Url
           * @description URL of the derived asset
           */
          url: string;
      }[] | null;
      /**
       * Display Name
       * @description User-friendly display name
       * @default null
       */
      display_name: string | null;
      /**
       * Etag
       * @description Resource ETag
       * @default null
       */
      etag: string | null;
      /**
       * Faces
       * @description Face coordinates per detection
       * @default null
       */
      faces: number[][] | null;
      /**
       * Format
       * @description Resource format
       */
      format: string;
      /**
       * Grayscale
       * @description Whether image is grayscale
       * @default null
       */
      grayscale: boolean | null;
      /**
       * Height
       * @description Height in pixels
       */
      height: number;
      /**
       * Illustration Score
       * @description Illustration likelihood score
       * @default null
       */
      illustration_score: number | null;
      /**
       * Metadata
       * @description Structured metadata; simple scalar or list of strings
       * @default null
       */
      metadata: {
          [key: string]: string | number | boolean | string[];
      } | null;
      /**
       * Predominant
       * @description Predominant color summary
       * @default null
       */
      predominant: {
          /**
           * Google
           * @description List of predominant colors and percentages
           */
          google: (string | number)[][];
      } | null;
      /**
       * Public Id
       * @description Public ID of the resource
       */
      public_id: string;
      /**
       * Resource Type
       * @description Resource type: image, video, or raw
       */
      resource_type: string;
      /**
       * Secure Url
       * @description Secure HTTPS URL
       */
      secure_url: string;
      /**
       * Semi Transparent
       * @description Whether semi-transparent pixels present
       * @default null
       */
      semi_transparent: boolean | null;
      /**
       * Tags
       * @description Assigned tags list
       * @default null
       */
      tags: string[] | null;
      /**
       * Type
       * @description Delivery type
       */
      type: string;
      /**
       * Url
       * @description Delivery URL
       */
      url: string;
      /**
       * Version
       * @description Version number or string
       */
      version: number | null;
      /**
       * Versions
       * @description Backup version details
       * @default null
       */
      versions: {
          /**
           * Format
           * @description Format of the versioned resource
           */
          format: string;
          /**
           * Restorable
           * @description Whether this version can be restored
           */
          restorable: boolean;
          /**
           * Size
           * @description Size of this version in bytes
           */
          size: number;
          /**
           * Time
           * @description Timestamp of version creation
           */
          time: string;
          /**
           * Version
           * @description Version number or string
           */
          version: number | null;
          /**
           * Version Id
           * @description Unique version ID
           */
          version_id: string;
      }[] | null;
      /**
       * Width
       * @description Width in pixels
       */
      width: number;
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
 * Type of CLOUDINARY's CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID tool input.
 */
type CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID_INPUT = {
  /**
   * Accessibility Analysis
   * @description Include accessibility analysis scores
   * @default false
   */
  accessibility_analysis: boolean;
  /**
   * Colors
   * @description Include color histogram and predominant colors
   * @default false
   */
  colors: boolean;
  /**
   * Coordinates
   * @description Include custom cropping and face coordinates
   * @default false
   */
  coordinates: boolean;
  /**
   * Derived Next Cursor
   * @description Cursor for next page of derived assets
   * @default null
   */
  derived_next_cursor: string | null;
  /**
   * Faces
   * @description Include detected face coordinates
   * @default false
   */
  faces: boolean;
  /**
   * Max Results
   * @description Max number of derived or related assets to return (1-500)
   * @default null
   */
  max_results: number | null;
  /**
   * Media Metadata
   * @description Include IPTC, XMP, and detailed metadata (returns ETag)
   * @default false
   */
  media_metadata: boolean;
  /**
   * Pages
   * @description Include page count for multi-page files
   * @default false
   */
  pages: boolean;
  /**
   * Phash
   * @description Include perceptual hash for similarity detection
   * @default false
   */
  phash: boolean;
  /**
   * Public Id
   * @description Public ID of the resource
   */
  public_id?: string;
  /**
   * Quality Analysis
   * @description Include image quality analysis scores
   * @default false
   */
  quality_analysis: boolean;
  /**
   * Related
   * @description Include list of related assets
   * @default false
   */
  related: boolean;
  /**
   * Related Next Cursor
   * @description Cursor for next page of related assets
   * @default null
   */
  related_next_cursor: string | null;
  /**
   * Resource Type
   * @description Resource type: image, video, or raw
   * @enum {string}
   */
  resource_type?: "image" | "video" | "raw";
  /**
   * Type
   * @description Delivery type: upload, private, etc.
   * @enum {string}
   */
  type?: "upload" | "private" | "authenticated" | "fetch" | "facebook" | "twitter" | "gravatar" | "youtube" | "hulu" | "vimeo" | "animoto" | "worldstarhiphop" | "dailymotion" | "list";
  /**
   * Versions
   * @description Include backed-up versions of the resource
   * @default false
   */
  versions: boolean;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID tool output.
 */
type CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asset Id
       * @description Immutable asset ID
       * @default null
       */
      asset_id: string | null;
      /**
       * Bytes
       * @description File size in bytes
       * @default null
       */
      bytes: number | null;
      /**
       * Colors Data
       * @description Color histogram array [hex, percentage]
       * @default null
       */
      colors_data: (string | number)[][] | null;
      /**
       * Context
       * @description Contextual metadata: mapping key to {subkey: value} pairs
       * @default null
       */
      context: {
          [key: string]: {
              [key: string]: string;
          };
      } | null;
      /**
       * Created At
       * @description Creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Derived
       * @description List of derived assets details
       * @default null
       */
      derived: {
          [key: string]: string | number;
      }[] | null;
      /**
       * Derived Next Cursor
       * @description Cursor for next page of derived assets
       * @default null
       */
      derived_next_cursor: string | null;
      /**
       * Etag
       * @description ETag for cache validation and metadata retrieval
       * @default null
       */
      etag: string | null;
      /**
       * Faces
       * @description Detected face coordinates per face [x,y,width,height]
       * @default null
       */
      faces: number[][] | null;
      /**
       * Format
       * @description File format extension
       * @default null
       */
      format: string | null;
      /**
       * Grayscale
       * @description Whether image is grayscale
       * @default null
       */
      grayscale: boolean | null;
      /**
       * Height
       * @description Height in pixels
       * @default null
       */
      height: number | null;
      /**
       * Last Updated
       * @description Timestamps of last updates to attributes
       * @default null
       */
      last_updated: {
          [key: string]: string;
      } | null;
      /**
       * Metadata
       * @description Structured metadata fields and values
       * @default null
       */
      metadata: {
          [key: string]: string | number | boolean | string[];
      } | null;
      /**
       * Next Cursor
       * @description Cursor for paging derived assets
       * @default null
       */
      next_cursor: string | null;
      /**
       * Predominant
       * @description Predominant colors data
       * @default null
       */
      predominant: {
          [key: string]: (string | number)[];
      } | null;
      /**
       * Public Id
       * @description Public ID of the resource
       * @default null
       */
      public_id: string | null;
      /**
       * Related
       * @description List of related assets details
       * @default null
       */
      related: {
          [key: string]: string | number;
      }[] | null;
      /**
       * Related Next Cursor
       * @description Cursor for next page of related assets
       * @default null
       */
      related_next_cursor: string | null;
      /**
       * Resource Type
       * @description Resource type
       * @default null
       */
      resource_type: string | null;
      /**
       * Secure Url
       * @description Secure HTTPS URL of the resource
       * @default null
       */
      secure_url: string | null;
      /**
       * Semi Transparent
       * @description Whether image has semi-transparent pixels
       * @default null
       */
      semi_transparent: boolean | null;
      /**
       * Tags
       * @description List of tags assigned to the resource
       * @default null
       */
      tags: string[] | null;
      /**
       * Type
       * @description Delivery type
       * @default null
       */
      type: string | null;
      /**
       * Url
       * @description Delivery URL of the resource
       * @default null
       */
      url: string | null;
      /**
       * Version
       * @description Version number
       * @default null
       */
      version: number | null;
      /**
       * Versions List
       * @description Backed-up versions detail
       * @default null
       */
      versions_list: {
          [key: string]: string | number | boolean;
      }[] | null;
      /**
       * Width
       * @description Width in pixels
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
 * Type of CLOUDINARY's CLOUDINARY_GET_ROOT_FOLDERS tool input.
 */
type CLOUDINARY_GET_ROOT_FOLDERS_INPUT = object;

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_ROOT_FOLDERS tool output.
 */
type CLOUDINARY_GET_ROOT_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Folders
       * @description List of root folders
       */
      folders: {
          /**
           * External Id
           * @description Immutable ID of the folder for later operations
           */
          external_id: string;
          /**
           * Name
           * @description Name of the folder
           */
          name: string;
          /**
           * Path
           * @description Full path of the folder
           */
          path: string;
      }[];
      /**
       * Next Cursor
       * @description Opaque cursor for pagination. Null if no more folders
       * @default null
       */
      next_cursor: string | null;
      /**
       * Total Count
       * @description Total number of root folders
       */
      total_count: number;
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
 * Type of CLOUDINARY's CLOUDINARY_GET_STREAMING_PROFILE_DETAILS tool input.
 */
type CLOUDINARY_GET_STREAMING_PROFILE_DETAILS_INPUT = {
  /**
   * Name
   * @description The name of the streaming profile to retrieve
   */
  name?: string;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_STREAMING_PROFILE_DETAILS tool output.
 */
type CLOUDINARY_GET_STREAMING_PROFILE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Display Name
       * @description Human-readable name of the streaming profile
       */
      display_name: string;
      /**
       * Name
       * @description Unique identifier of the streaming profile
       */
      name: string;
      /**
       * Options
       * @description Additional configuration options for a streaming profile.
       * @default null
       */
      options: {
          /**
           * Use Original Manifest
           * @description Whether to use the original manifest instead of regenerating it
           */
          use_original_manifest: boolean;
      } | null;
      /**
       * Representations
       * @description List of media representations defined in the profile
       */
      representations: {
          /**
           * Transformation
           * @description List of transformation objects for this representation.
           */
          transformation: {
              /**
               * Bit Rate
               * @description Bitrate identifier string.
               */
              bit_rate: string;
              /**
               * Crop
               * @description Crop mode for the transformation.
               */
              crop: string;
              /**
               * Height
               * @description Height of the video representation in pixels.
               */
              height: number;
              /**
               * Video Codec
               * @description Codec info string for video encoding.
               */
              video_codec: string;
              /**
               * Width
               * @description Width of the video representation in pixels.
               */
              width: number;
          }[];
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
 * Type of CLOUDINARY's CLOUDINARY_GET_TAGS tool input.
 */
type CLOUDINARY_GET_TAGS_INPUT = {
  /**
   * Max Results
   * @description Max number of tags to return (1-500). Default: 10.
   * @default null
   */
  max_results: number | null;
  /**
   * Next Cursor
   * @description Opaque cursor for pagination. Pass from prior response to get next page.
   * @default null
   */
  next_cursor: string | null;
  /**
   * Prefix
   * @description Only return tags that start with this prefix.
   * @default null
   */
  prefix: string | null;
  /**
   * Resource Type
   * @description The resource type to list tags for. 'image' (default), 'video' (for both video/audo), or 'raw'.
   * @default image
   * @enum {string}
   */
  resource_type: "image" | "video" | "raw";
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_TAGS tool output.
 */
type CLOUDINARY_GET_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Cursor
       * @description Cursor for next page of tags if more than `max_results`.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Tags
       * @description List of tag names used by the specified resource type
       */
      tags: string[];
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
 * Type of CLOUDINARY's CLOUDINARY_GET_TRANSFORMATIONS tool input.
 */
type CLOUDINARY_GET_TRANSFORMATIONS_INPUT = {
  /**
   * Max Results
   * @description Maximum number of transformations to return (1-500). Defaults to 10.
   * @default null
   */
  max_results: number | null;
  /**
   * Next Cursor
   * @description Cursor for pagination to retrieve the next set of results.
   * @default null
   */
  next_cursor: string | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_TRANSFORMATIONS tool output.
 */
type CLOUDINARY_GET_TRANSFORMATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Cursor
       * @description Cursor for the next page of results, if more are available.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Transformations
       * @description List of transformation definitions.
       */
      transformations: {
          /**
           * Allowed For Strict
           * @description Whether the transformation is allowed for strict transformations.
           */
          allowed_for_strict: boolean;
          /**
           * Deprecated
           * @description Whether the transformation is deprecated, if applicable.
           * @default null
           */
          deprecated: boolean | null;
          /**
           * Last Updated
           * @description Timestamp when the transformation was last updated.
           * @default null
           */
          last_updated: string | null;
          /**
           * Name
           * @description Name of the transformation. Null for unnamed transformations.
           * @default null
           */
          name: string | null;
          /**
           * Named
           * @description Whether the transformation is a named transformation.
           * @default null
           */
          named: boolean | null;
          /**
           * Transformation
           * @description String representation of the transformation steps.
           * @default null
           */
          transformation: string | null;
          /**
           * Unsafe
           * @description Whether the transformation is marked as unsafe.
           * @default null
           */
          unsafe: boolean | null;
          /**
           * Used
           * @description Whether the transformation is used in your account.
           */
          used: boolean;
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
 * Type of CLOUDINARY's CLOUDINARY_GET_TRIGGERS tool input.
 */
type CLOUDINARY_GET_TRIGGERS_INPUT = {
  /**
   * Event Type
   * @description Filter triggers by a specific event type (e.g., 'upload')
   * @default null
   */
  event_type: string | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_TRIGGERS tool output.
 */
type CLOUDINARY_GET_TRIGGERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Triggers
       * @description List of webhook triggers configured in the environment
       */
      triggers: {
          /**
           * Created At
           * @description Timestamp when the trigger was created (ISO 8601)
           */
          created_at: string;
          /**
           * Event Type
           * @description Event type that triggers the notification
           */
          event_type: string;
          /**
           * Id
           * @description Unique identifier of the trigger
           */
          id: string;
          /**
           * Product Environment Id
           * @description Identifier of the Cloudinary product environment
           */
          product_environment_id: string;
          /**
           * Updated At
           * @description Timestamp when the trigger was last updated (ISO 8601)
           */
          updated_at: string;
          /**
           * Uri
           * @description Notification endpoint URL for the trigger
           */
          uri: string;
          /**
           * Uri Type
           * @description Type of URI, e.g., 'webhook'
           */
          uri_type: string;
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
 * Type of CLOUDINARY's CLOUDINARY_GET_UPLOAD_MAPPINGS tool input.
 */
type CLOUDINARY_GET_UPLOAD_MAPPINGS_INPUT = {
  /**
   * Folder
   * @description Name of a specific upload-mapping folder to retrieve; omit to list all folders.
   * @default null
   */
  folder: string | null;
  /**
   * Max Results
   * @description Maximum number of mappings to return (1-500). If omitted, the server default is applied.
   * @default null
   */
  max_results: number | null;
  /**
   * Next Cursor
   * @description Cursor for paginating through results; omit or unset to start at the first page.
   * @default null
   */
  next_cursor: string | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_UPLOAD_MAPPINGS tool output.
 */
type CLOUDINARY_GET_UPLOAD_MAPPINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Mappings
       * @description List of upload mapping objects.
       */
      mappings: {
          /**
           * External Id
           * @description Immutable identifier of the upload mapping.
           */
          external_id: string;
          /**
           * Folder
           * @description Name of the folder mapped by this configuration.
           */
          folder: string;
          /**
           * Template
           * @description URL prefix template mapped to the folder.
           */
          template: string;
      }[];
      /**
       * Next Cursor
       * @description Cursor to retrieve the next page of results if more are available.
       * @default null
       */
      next_cursor: string | null;
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
 * Type of CLOUDINARY's CLOUDINARY_GET_UPLOAD_MAPPING_DETAILS tool input.
 */
type CLOUDINARY_GET_UPLOAD_MAPPING_DETAILS_INPUT = {
  /**
   * Folder
   * @description Name of the upload mapping folder to retrieve details for.
   */
  folder?: string;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_UPLOAD_MAPPING_DETAILS tool output.
 */
type CLOUDINARY_GET_UPLOAD_MAPPING_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * External Id
       * @description Immutable identifier of the upload mapping.
       */
      external_id: string;
      /**
       * Folder
       * @description Name of the upload mapping folder.
       */
      folder: string;
      /**
       * Template
       * @description URL prefix template mapped to the folder.
       */
      template: string;
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
 * Type of CLOUDINARY's CLOUDINARY_GET_USAGE tool input.
 */
type CLOUDINARY_GET_USAGE_INPUT = object;

/**
 * Type of CLOUDINARY's CLOUDINARY_GET_USAGE tool output.
 */
type CLOUDINARY_GET_USAGE_OUTPUT = {
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
 * Type of CLOUDINARY's CLOUDINARY_ORDER_METADATA_FIELD_DATASOURCE tool input.
 */
type CLOUDINARY_ORDER_METADATA_FIELD_DATASOURCE_INPUT = {
  /**
   * Direction
   * @description The direction for sorting: 'asc' (ascending) or 'desc' (descending).
   * @enum {string}
   */
  direction?: "asc" | "desc";
  /**
   * External Id
   * @description The external ID of the metadata field whose datasource will be reordered.
   */
  external_id?: string;
  /**
   * Order By
   * @description The criteria for sorting the datasource; currently supports only 'value'.
   * @constant
   */
  order_by?: "value";
};

/**
 * Type of CLOUDINARY's CLOUDINARY_ORDER_METADATA_FIELD_DATASOURCE tool output.
 */
type CLOUDINARY_ORDER_METADATA_FIELD_DATASOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Values
       * @description List of datasource entries in the new order.
       */
      values: {
          /**
           * External Id
           * @description Unique identifier of the datasource entry.
           */
          external_id: string;
          /**
           * Value
           * @description Value of the datasource entry.
           */
          value: string;
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
 * Type of CLOUDINARY's CLOUDINARY_PING_CLOUDINARY_SERVERS tool input.
 */
type CLOUDINARY_PING_CLOUDINARY_SERVERS_INPUT = object;

/**
 * Type of CLOUDINARY's CLOUDINARY_PING_CLOUDINARY_SERVERS tool output.
 */
type CLOUDINARY_PING_CLOUDINARY_SERVERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Current status of the Cloudinary servers, always 'ok'.
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
 * Type of CLOUDINARY's CLOUDINARY_RESTORE_ENTRIES_IN_METADATA_FIELD_DATASOURCE tool input.
 */
type CLOUDINARY_RESTORE_ENTRIES_IN_METADATA_FIELD_DATASOURCE_INPUT = {
  /**
   * External Id
   * @description External ID of the metadata field whose datasource entries will be restored.
   */
  external_id?: string;
  /**
   * External Ids
   * @description List of datasource entry external IDs to restore (unblock).
   */
  external_ids?: string[];
};

/**
 * Type of CLOUDINARY's CLOUDINARY_RESTORE_ENTRIES_IN_METADATA_FIELD_DATASOURCE tool output.
 */
type CLOUDINARY_RESTORE_ENTRIES_IN_METADATA_FIELD_DATASOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Values
       * @description Datasource entries with their external_id, value, and state after restoration
       */
      values: {
          /**
           * External Id
           * @description External ID of the datasource entry.
           */
          external_id: string;
          /**
           * State
           * @description State of the entry: 'active' or 'inactive'.
           * @enum {string}
           */
          state: "active" | "inactive";
          /**
           * Value
           * @description The display value of the datasource entry.
           */
          value: string;
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
 * Type of CLOUDINARY's CLOUDINARY_SEARCH_FOLDERS tool input.
 */
type CLOUDINARY_SEARCH_FOLDERS_INPUT = {
  /**
   * Expression
   * @description Lucene-like search expression to filter folders. For example: 'name:sample AND created_at>1w'.
   * @default null
   */
  expression: string | null;
  /**
   * Max Results
   * @description Maximum number of folders to return (1-500). Default is 50.
   * @default null
   */
  max_results: number | null;
  /**
   * Next Cursor
   * @description Cursor for next page of results, from a prior response's next_cursor.
   * @default null
   */
  next_cursor: string | null;
  /**
   * Sort By
   * @description List of sort fields and directions, e.g. ['name:asc','created_at:desc']. Valid fields: name, path, created_at, updated_at; directions: asc or desc.
   * @default null
   */
  sort_by: string[] | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_SEARCH_FOLDERS tool output.
 */
type CLOUDINARY_SEARCH_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Folders
       * @description List of folders matching the search criteria.
       */
      folders: {
          /**
           * Created At
           * @description Timestamp when the folder was created (ISO 8601).
           * @default null
           */
          created_at: string | null;
          /**
           * External Id
           * @description Immutable external ID of the folder.
           * @default null
           */
          external_id: string | null;
          /**
           * Name
           * @description Folder name.
           */
          name: string;
          /**
           * Path
           * @description Full path of the folder.
           */
          path: string;
      }[];
      /**
       * Next Cursor
       * @description Cursor for the next page of results.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Time
       * @description Time taken to perform the search (ms).
       * @default null
       */
      time: number | null;
      /**
       * Total Count
       * @description Total count of matching folders.
       */
      total_count: number;
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
 * Type of CLOUDINARY's CLOUDINARY_UPDATE_FOLDER tool input.
 */
type CLOUDINARY_UPDATE_FOLDER_INPUT = {
  /**
   * Folder
   * @description Full path of the existing asset folder to update, e.g., 'product/test'.
   */
  folder?: string;
  /**
   * To Folder
   * @description New full path of the asset folder. Changing only the last component renames, only the path moves, or both.
   */
  to_folder?: string;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_UPDATE_FOLDER tool output.
 */
type CLOUDINARY_UPDATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * From Folder
       * @description Original folder info before update.
       */
      from_folder: {
          /**
           * Name
           * @description Folder name component, e.g., 'test'.
           */
          name: string;
          /**
           * Path
           * @description Full folder path, e.g., 'product/test'.
           */
          path: string;
      };
      /**
       * To Folder
       * @description Updated folder info after update.
       */
      to_folder: {
          /**
           * Name
           * @description Folder name component, e.g., 'test'.
           */
          name: string;
          /**
           * Path
           * @description Full folder path, e.g., 'product/test'.
           */
          path: string;
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
 * Type of CLOUDINARY's CLOUDINARY_UPDATE_METADATA_FIELD tool input.
 */
type CLOUDINARY_UPDATE_METADATA_FIELD_INPUT = {
  /**
   * Allow Dynamic List Values
   * @description Allow dynamic additions of list values (for 'set' type).
   * @default null
   */
  allow_dynamic_list_values: boolean | null;
  /**
   * MetadataFieldDatasource
   * @description Predefined list of values for enum or set metadata fields.
   * @default null
   */
  datasource: {
      /**
       * Values
       * @description List of possible enum or set values (max 3000).
       */
      values: {
          /**
           * External Id
           * @description A unique immutable ID for this list value. Auto-generated if omitted.
           * @default null
           */
          external_id: string | null;
          /**
           * Value
           * @description The display string for this list entry.
           */
          value: string;
      }[];
  } | null;
  /**
   * Default Disabled
   * @description Whether the field is disabled by default for new assets.
   * @default null
   */
  default_disabled: boolean | null;
  /**
   * Default Value
   * @description Default value for the field (list for 'set' type).
   * @default null
   */
  default_value: number | null;
  /**
   * External Id
   * @description External ID of the metadata field to update.
   */
  external_id?: string;
  /**
   * Label
   * @description New label for the metadata field.
   * @default null
   */
  label: string | null;
  /**
   * Mandatory
   * @description Whether the field is mandatory.
   * @default null
   */
  mandatory: boolean | null;
  /**
   * Restrictions
   * @description UI restrictions object, e.g., {'readonly_ui': True}.
   * @default null
   */
  restrictions: {
      [key: string]: boolean;
  } | null;
  /**
   * Validation
   * @description Validation rules for the metadata field.
   * @default null
   */
  validation: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of CLOUDINARY's CLOUDINARY_UPDATE_METADATA_FIELD tool output.
 */
type CLOUDINARY_UPDATE_METADATA_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow Dynamic List Values
       * @description Whether 'set' fields allow dynamic list value additions.
       */
      allow_dynamic_list_values: boolean;
      /**
       * MetadataFieldDatasource
       * @description Predefined list of values for enum or set metadata fields.
       * @default null
       */
      datasource: {
          /**
           * Values
           * @description List of possible enum or set values (max 3000).
           */
          values: {
              /**
               * External Id
               * @description A unique immutable ID for this list value. Auto-generated if omitted.
               * @default null
               */
              external_id: string | null;
              /**
               * Value
               * @description The display string for this list entry.
               */
              value: string;
          }[];
      } | null;
      /**
       * Default Disabled
       * @description Whether the field is disabled by default for new assets.
       */
      default_disabled: boolean;
      /**
       * Default Value
       * @description Default value for the field (list for 'set').
       * @default null
       */
      default_value: number | null;
      /**
       * External Id
       * @description Field's external ID.
       */
      external_id: string;
      /**
       * Label
       * @description Display label for the metadata field.
       */
      label: string;
      /**
       * Mandatory
       * @description Whether the field is mandatory.
       */
      mandatory: boolean;
      /**
       * Restrictions
       * @description UI restrictions object, e.g. {'readonly_ui': True}.
       * @default null
       */
      restrictions: {
          [key: string]: boolean;
      } | null;
      /**
       * Type
       * @description Type of the metadata field.
       * @enum {string}
       */
      type: "string" | "integer" | "date" | "enum" | "set";
      /**
       * Validation
       * @description Validation rules for the metadata field.
       * @default null
       */
      validation: {
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
 * Type map of all available tool input types for toolkit "CLOUDINARY".
 */
export type CLOUDINARY_TOOL_INPUTS = {
  CREATE_FOLDER: CLOUDINARY_CREATE_FOLDER_INPUT
  CREATE_METADATA_FIELD: CLOUDINARY_CREATE_METADATA_FIELD_INPUT
  CREATE_TRIGGER: CLOUDINARY_CREATE_TRIGGER_INPUT
  CREATE_UPLOAD_MAPPING: CLOUDINARY_CREATE_UPLOAD_MAPPING_INPUT
  CREATE_UPLOAD_PRESET: CLOUDINARY_CREATE_UPLOAD_PRESET_INPUT
  DELETE_DERIVED_RESOURCES: CLOUDINARY_DELETE_DERIVED_RESOURCES_INPUT
  DELETE_ENTRIES_IN_METADATA_FIELD_DATASOURCE: CLOUDINARY_DELETE_ENTRIES_IN_METADATA_FIELD_DATASOURCE_INPUT
  DELETE_FOLDER: CLOUDINARY_DELETE_FOLDER_INPUT
  DELETE_METADATA_FIELD: CLOUDINARY_DELETE_METADATA_FIELD_INPUT
  DELETE_RESOURCES_BY_ASSET_ID: CLOUDINARY_DELETE_RESOURCES_BY_ASSET_ID_INPUT
  DELETE_RESOURCES_BY_TAGS: CLOUDINARY_DELETE_RESOURCES_BY_TAGS_INPUT
  DELETE_TRIGGER: CLOUDINARY_DELETE_TRIGGER_INPUT
  GET_ADAPTIVE_STREAMING_PROFILES: CLOUDINARY_GET_ADAPTIVE_STREAMING_PROFILES_INPUT
  GET_CONFIG: CLOUDINARY_GET_CONFIG_INPUT
  GET_METADATA_FIELD_BY_ID: CLOUDINARY_GET_METADATA_FIELD_BY_ID_INPUT
  GET_RESOURCES_BY_ASSET_FOLDER: CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER_INPUT
  GET_RESOURCES_BY_CONTEXT: CLOUDINARY_GET_RESOURCES_BY_CONTEXT_INPUT
  GET_RESOURCES_IN_MODERATION: CLOUDINARY_GET_RESOURCES_IN_MODERATION_INPUT
  GET_RESOURCE_BY_ASSET_ID: CLOUDINARY_GET_RESOURCE_BY_ASSET_ID_INPUT
  GET_RESOURCE_BY_PUBLIC_ID: CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID_INPUT
  GET_ROOT_FOLDERS: CLOUDINARY_GET_ROOT_FOLDERS_INPUT
  GET_STREAMING_PROFILE_DETAILS: CLOUDINARY_GET_STREAMING_PROFILE_DETAILS_INPUT
  GET_TAGS: CLOUDINARY_GET_TAGS_INPUT
  GET_TRANSFORMATIONS: CLOUDINARY_GET_TRANSFORMATIONS_INPUT
  GET_TRIGGERS: CLOUDINARY_GET_TRIGGERS_INPUT
  GET_UPLOAD_MAPPINGS: CLOUDINARY_GET_UPLOAD_MAPPINGS_INPUT
  GET_UPLOAD_MAPPING_DETAILS: CLOUDINARY_GET_UPLOAD_MAPPING_DETAILS_INPUT
  GET_USAGE: CLOUDINARY_GET_USAGE_INPUT
  ORDER_METADATA_FIELD_DATASOURCE: CLOUDINARY_ORDER_METADATA_FIELD_DATASOURCE_INPUT
  PING_CLOUDINARY_SERVERS: CLOUDINARY_PING_CLOUDINARY_SERVERS_INPUT
  RESTORE_ENTRIES_IN_METADATA_FIELD_DATASOURCE: CLOUDINARY_RESTORE_ENTRIES_IN_METADATA_FIELD_DATASOURCE_INPUT
  SEARCH_FOLDERS: CLOUDINARY_SEARCH_FOLDERS_INPUT
  UPDATE_FOLDER: CLOUDINARY_UPDATE_FOLDER_INPUT
  UPDATE_METADATA_FIELD: CLOUDINARY_UPDATE_METADATA_FIELD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLOUDINARY".
 */
export type CLOUDINARY_TOOL_OUTPUTS = {
  CREATE_FOLDER: CLOUDINARY_CREATE_FOLDER_OUTPUT
  CREATE_METADATA_FIELD: CLOUDINARY_CREATE_METADATA_FIELD_OUTPUT
  CREATE_TRIGGER: CLOUDINARY_CREATE_TRIGGER_OUTPUT
  CREATE_UPLOAD_MAPPING: CLOUDINARY_CREATE_UPLOAD_MAPPING_OUTPUT
  CREATE_UPLOAD_PRESET: CLOUDINARY_CREATE_UPLOAD_PRESET_OUTPUT
  DELETE_DERIVED_RESOURCES: CLOUDINARY_DELETE_DERIVED_RESOURCES_OUTPUT
  DELETE_ENTRIES_IN_METADATA_FIELD_DATASOURCE: CLOUDINARY_DELETE_ENTRIES_IN_METADATA_FIELD_DATASOURCE_OUTPUT
  DELETE_FOLDER: CLOUDINARY_DELETE_FOLDER_OUTPUT
  DELETE_METADATA_FIELD: CLOUDINARY_DELETE_METADATA_FIELD_OUTPUT
  DELETE_RESOURCES_BY_ASSET_ID: CLOUDINARY_DELETE_RESOURCES_BY_ASSET_ID_OUTPUT
  DELETE_RESOURCES_BY_TAGS: CLOUDINARY_DELETE_RESOURCES_BY_TAGS_OUTPUT
  DELETE_TRIGGER: CLOUDINARY_DELETE_TRIGGER_OUTPUT
  GET_ADAPTIVE_STREAMING_PROFILES: CLOUDINARY_GET_ADAPTIVE_STREAMING_PROFILES_OUTPUT
  GET_CONFIG: CLOUDINARY_GET_CONFIG_OUTPUT
  GET_METADATA_FIELD_BY_ID: CLOUDINARY_GET_METADATA_FIELD_BY_ID_OUTPUT
  GET_RESOURCES_BY_ASSET_FOLDER: CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER_OUTPUT
  GET_RESOURCES_BY_CONTEXT: CLOUDINARY_GET_RESOURCES_BY_CONTEXT_OUTPUT
  GET_RESOURCES_IN_MODERATION: CLOUDINARY_GET_RESOURCES_IN_MODERATION_OUTPUT
  GET_RESOURCE_BY_ASSET_ID: CLOUDINARY_GET_RESOURCE_BY_ASSET_ID_OUTPUT
  GET_RESOURCE_BY_PUBLIC_ID: CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID_OUTPUT
  GET_ROOT_FOLDERS: CLOUDINARY_GET_ROOT_FOLDERS_OUTPUT
  GET_STREAMING_PROFILE_DETAILS: CLOUDINARY_GET_STREAMING_PROFILE_DETAILS_OUTPUT
  GET_TAGS: CLOUDINARY_GET_TAGS_OUTPUT
  GET_TRANSFORMATIONS: CLOUDINARY_GET_TRANSFORMATIONS_OUTPUT
  GET_TRIGGERS: CLOUDINARY_GET_TRIGGERS_OUTPUT
  GET_UPLOAD_MAPPINGS: CLOUDINARY_GET_UPLOAD_MAPPINGS_OUTPUT
  GET_UPLOAD_MAPPING_DETAILS: CLOUDINARY_GET_UPLOAD_MAPPING_DETAILS_OUTPUT
  GET_USAGE: CLOUDINARY_GET_USAGE_OUTPUT
  ORDER_METADATA_FIELD_DATASOURCE: CLOUDINARY_ORDER_METADATA_FIELD_DATASOURCE_OUTPUT
  PING_CLOUDINARY_SERVERS: CLOUDINARY_PING_CLOUDINARY_SERVERS_OUTPUT
  RESTORE_ENTRIES_IN_METADATA_FIELD_DATASOURCE: CLOUDINARY_RESTORE_ENTRIES_IN_METADATA_FIELD_DATASOURCE_OUTPUT
  SEARCH_FOLDERS: CLOUDINARY_SEARCH_FOLDERS_OUTPUT
  UPDATE_FOLDER: CLOUDINARY_UPDATE_FOLDER_OUTPUT
  UPDATE_METADATA_FIELD: CLOUDINARY_UPDATE_METADATA_FIELD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLOUDINARY toolkit.
 */
export const CLOUDINARY = {
  slug: "cloudinary",
  tools: {
    /**
     * Tool to create a new asset folder. use when you need to organize assets into nested directories. use after confirming the folder path does not already exist.
     */
    CREATE_FOLDER: "CLOUDINARY_CREATE_FOLDER",
    /**
     * Tool to create a new metadata field definition. use when extending your metadata schema with new fields.
     */
    CREATE_METADATA_FIELD: "CLOUDINARY_CREATE_METADATA_FIELD",
    /**
     * Tool to create a new webhook trigger for a specified event type. use after configuring your webhook endpoint and choosing the event type. example: "create a trigger for uploads to https://example.com/hooks/cloudinary"
     */
    CREATE_TRIGGER: "CLOUDINARY_CREATE_TRIGGER",
    /**
     * Tool to create a new upload mapping folder and url template. use when you need to dynamically map external url prefixes to a cloudinary asset folder before uploading files.
     */
    CREATE_UPLOAD_MAPPING: "CLOUDINARY_CREATE_UPLOAD_MAPPING",
    /**
     * Tool to create a new upload preset. use when defining centralized upload options (tags, formats, transformations, etc.) before asset uploads.
     */
    CREATE_UPLOAD_PRESET: "CLOUDINARY_CREATE_UPLOAD_PRESET",
    /**
     * Tool to delete derived assets. use when you need to remove specific derived assets by their ids. example: "delete derived assets with ids [id1, id2]".
     */
    DELETE_DERIVED_RESOURCES: "CLOUDINARY_DELETE_DERIVED_RESOURCES",
    /**
     * Tool to delete datasource entries for a specified metadata field. use when you need to soft-delete (inactivate) specific entries in a field's datasource. example prompt: "delete entries ['color1','color2'] from metadata field 'color id'"
     */
    DELETE_ENTRIES_IN_METADATA_FIELD_DATASOURCE: "CLOUDINARY_DELETE_ENTRIES_IN_METADATA_FIELD_DATASOURCE",
    /**
     * Tool to delete an empty asset folder. use when the folder is confirmed empty and you need to remove it.
     */
    DELETE_FOLDER: "CLOUDINARY_DELETE_FOLDER",
    /**
     * Tool to delete a metadata field by external id. use when you need to remove a metadata field that is no longer required.
     */
    DELETE_METADATA_FIELD: "CLOUDINARY_DELETE_METADATA_FIELD",
    /**
     * Tool to delete resources by asset ids. use when you need to permanently remove specific resources by their immutable asset ids; irreversible.
     */
    DELETE_RESOURCES_BY_ASSET_ID: "CLOUDINARY_DELETE_RESOURCES_BY_ASSET_ID",
    /**
     * Tool to delete cloudinary assets by tag. use when you need to remove all assets associated with a given tag.
     */
    DELETE_RESOURCES_BY_TAGS: "CLOUDINARY_DELETE_RESOURCES_BY_TAGS",
    /**
     * Tool to delete a trigger (webhook notification). use when you need to remove a trigger by its id after confirming the correct id.
     */
    DELETE_TRIGGER: "CLOUDINARY_DELETE_TRIGGER",
    /**
     * Tool to list adaptive streaming profiles. use when retrieving built-in and custom adaptive streaming profiles for delivering video via hls or dash.
     */
    GET_ADAPTIVE_STREAMING_PROFILES: "CLOUDINARY_GET_ADAPTIVE_STREAMING_PROFILES",
    /**
     * Tool to get product environment config details. use when you need to fetch or verify environment configuration such as folder mode.
     */
    GET_CONFIG: "CLOUDINARY_GET_CONFIG",
    /**
     * Tool to get a single metadata field definition by external id. use after creating or updating a metadata field to fetch its full definition. example: "get metadata field definition for external id 'color id'."
     */
    GET_METADATA_FIELD_BY_ID: "CLOUDINARY_GET_METADATA_FIELD_BY_ID",
    /**
     * Tool to list assets stored directly in a specified folder. use when you need to view assets in a specific folder without including subfolder contents.
     */
    GET_RESOURCES_BY_ASSET_FOLDER: "CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER",
    /**
     * Tool to retrieve assets with a specified contextual metadata key/value. use when filtering resources by context metadata.
     */
    GET_RESOURCES_BY_CONTEXT: "CLOUDINARY_GET_RESOURCES_BY_CONTEXT",
    /**
     * Tool to retrieve assets in a moderation queue by status. use after moderation to process pending or reviewed assets.
     */
    GET_RESOURCES_IN_MODERATION: "CLOUDINARY_GET_RESOURCES_IN_MODERATION",
    /**
     * Get resource by asset id
     */
    GET_RESOURCE_BY_ASSET_ID: "CLOUDINARY_GET_RESOURCE_BY_ASSET_ID",
    /**
     * Tool to get details of a single resource by public id. use when you need full asset, derived, and related info.
     */
    GET_RESOURCE_BY_PUBLIC_ID: "CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID",
    /**
     * Tool to list all root folders in the product environment. use when you need to retrieve top-level asset folders.
     */
    GET_ROOT_FOLDERS: "CLOUDINARY_GET_ROOT_FOLDERS",
    /**
     * Tool to get details of a single streaming profile by name. use when you need to inspect an existing profile's configuration before making changes. example: "get details of streaming profile 'hd'."
     */
    GET_STREAMING_PROFILE_DETAILS: "CLOUDINARY_GET_STREAMING_PROFILE_DETAILS",
    /**
     * Tool to list all tags used for a specified resource type. use when you need to retrieve or page through the tags assigned to your assets.
     */
    GET_TAGS: "CLOUDINARY_GET_TAGS",
    /**
     * Tool to list all transformations (named and unnamed). use when you need to retrieve transformation definitions or paginate through transformation records.
     */
    GET_TRANSFORMATIONS: "CLOUDINARY_GET_TRANSFORMATIONS",
    /**
     * Tool to list all webhook triggers for event types in your environment. use when you need to retrieve or filter existing triggers by type.
     */
    GET_TRIGGERS: "CLOUDINARY_GET_TRIGGERS",
    /**
     * Tool to list all upload mappings by folder. use when you need to retrieve and paginate through upload mapping configurations, optionally filtering by folder.
     */
    GET_UPLOAD_MAPPINGS: "CLOUDINARY_GET_UPLOAD_MAPPINGS",
    /**
     * Tool to retrieve details of a single upload mapping by folder. use when you need the url prefix template associated with a specific mapping folder.
     */
    GET_UPLOAD_MAPPING_DETAILS: "CLOUDINARY_GET_UPLOAD_MAPPING_DETAILS",
    /**
     * Tool to get product environment usage details. use when you need to monitor your cloudinary account storage, bandwidth, requests, and other usage limits.
     */
    GET_USAGE: "CLOUDINARY_GET_USAGE",
    /**
     * Tool to update ordering of a metadata field datasource. use when you need to reorder enum or set values for a metadata field datasource before updating assets.
     */
    ORDER_METADATA_FIELD_DATASOURCE: "CLOUDINARY_ORDER_METADATA_FIELD_DATASOURCE",
    /**
     * Tool to ping cloudinary servers. use when testing api reachability and authentication.
     */
    PING_CLOUDINARY_SERVERS: "CLOUDINARY_PING_CLOUDINARY_SERVERS",
    /**
     * Tool to restore previously deleted datasource entries for a metadata field. use after deleting entries to reactivate soft-deleted datasource entries.
     */
    RESTORE_ENTRIES_IN_METADATA_FIELD_DATASOURCE: "CLOUDINARY_RESTORE_ENTRIES_IN_METADATA_FIELD_DATASOURCE",
    /**
     * Tool to search asset folders with filtering, sorting, and pagination. use when you need to locate specific folders by name, path, or creation date.
     */
    SEARCH_FOLDERS: "CLOUDINARY_SEARCH_FOLDERS",
    /**
     * Tool to rename or move an existing asset folder. use when you need to change the folder's name or location.
     */
    UPDATE_FOLDER: "CLOUDINARY_UPDATE_FOLDER",
    /**
     * Tool to update a metadata field definition by external id. use when modifying an existing schema field (e.g., changing label or validation) without redefining all properties.
     */
    UPDATE_METADATA_FIELD: "CLOUDINARY_UPDATE_METADATA_FIELD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLOUDINARY".
 */
export type CLOUDINARY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLOUDINARY".
 */
export type CLOUDINARY_TRIGGER_EVENTS = {}
