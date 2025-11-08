// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BOX's BOX_ADD_CLASSIFICATION_TO_FILE tool input.
 */
type BOX_ADD_CLASSIFICATION_TO_FILE_INPUT = {
  /**
   * Box  Security  Classification  Key
   * @description The name of the classification to apply to this file. To list the available classifications in an enterprise, use the classification API to retrieve the [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema) which lists all available classification keys.
   */
  Box__Security__Classification__Key?: string;
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_ADD_CLASSIFICATION_TO_FILE tool output.
 */
type BOX_ADD_CLASSIFICATION_TO_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ADD_CLASSIFICATION_TO_FOLDER tool input.
 */
type BOX_ADD_CLASSIFICATION_TO_FOLDER_INPUT = {
  /**
   * Box  Security  Classification  Key
   * @description The name of the classification to apply to this folder. To list the available classifications in an enterprise, use the classification API to retrieve the [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema) which lists all available classification keys.
   */
  Box__Security__Classification__Key?: string;
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_ADD_CLASSIFICATION_TO_FOLDER tool output.
 */
type BOX_ADD_CLASSIFICATION_TO_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ADD_DOMAIN_TO_LIST_OF_ALLOWED_COLLABORATION_DOMAINS tool input.
 */
type BOX_ADD_DOMAIN_TO_LIST_OF_ALLOWED_COLLABORATION_DOMAINS_INPUT = {
  /**
   * Direction
   * @description The direction in which to allow collaborations.
   * @enum {string}
   */
  direction?: "both" | "inbound" | "outbound";
  /**
   * Domain
   * @description The domain to add to the list of allowed domains.
   */
  domain?: string;
};

/**
 * Type of BOX's BOX_ADD_DOMAIN_TO_LIST_OF_ALLOWED_COLLABORATION_DOMAINS tool output.
 */
type BOX_ADD_DOMAIN_TO_LIST_OF_ALLOWED_COLLABORATION_DOMAINS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ADD_INITIAL_CLASSIFICATIONS tool input.
 */
type BOX_ADD_INITIAL_CLASSIFICATIONS_INPUT = {
  /**
   * Copy Instance On Item Copy
   * @description Determines if classifications are copied along when the file or folder is copied.
   */
  copyInstanceOnItemCopy?: boolean;
  /**
   * Display Name
   * @description The name of the template as shown in web and mobile interfaces.
   * @enum {string}
   */
  displayName?: "Classification";
  /**
   * Fields
   * @description The classification template requires exactly one field, which holds all the valid classification values.
   */
  fields?: {
      /**
       * Display Name
       * @description A display name for the classification.
       * @enum {string}
       */
      displayName: "Classification";
      /**
       * Hidden
       * @description Determines if the classification template is hidden or available on web and mobile devices.
       */
      hidden?: boolean;
      /**
       * Key
       * @description Defines classifications  available in the enterprise.
       * @enum {string}
       */
      key: "Box__Security__Classification__Key";
      /**
       * Options
       * @description The actual list of classifications that are present on this template.
       */
      options: {
          /**
           * Key
           * @description The display name and key this classification. This will be show in the Box UI.
           */
          key: string;
          /**
           * Static Config  Classification  Classification Definition
           * @description A longer description of the classification.
           */
          staticConfig__classification__classificationDefinition?: string;
          /**
           * Static Config  Classification  Color Id
           * @description An identifier used to assign a color to a classification label. Mapping between a `colorID` and a color may change without notice. Currently, the color mappings are as follows. * `0`: Yellow * `1`: Orange * `2`: Watermelon red * `3`: Purple rain * `4`: Light blue * `5`: Dark blue * `6`: Light green * `7`: Gray
           */
          staticConfig__classification__colorID?: number;
      }[];
      /**
       * Type
       * @description The type of the field that is always enum.
       * @enum {string}
       */
      type: "enum";
  }[];
  /**
   * Hidden
   * @description Determines if the classification template is hidden or available on web and mobile devices.
   */
  hidden?: boolean;
  /**
   * Scope
   * @description The scope in which to create the classifications. This should be `enterprise` or `enterprise_{id}` where `id` is the unique ID of the enterprise.
   * @enum {string}
   */
  scope?: "enterprise";
  /**
   * Template Key
   * @description Defines the list of metadata templates.
   * @enum {string}
   */
  templateKey?: "securityClassification-6VMVochwUWo";
};

/**
 * Type of BOX's BOX_ADD_INITIAL_CLASSIFICATIONS tool output.
 */
type BOX_ADD_INITIAL_CLASSIFICATIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ADD_OR_UPDATE_USER_AVATAR tool input.
 */
type BOX_ADD_OR_UPDATE_USER_AVATAR_INPUT = {
  /**
   * Pic
   * Format: binary
   * @description Pic
   */
  pic?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_ADD_OR_UPDATE_USER_AVATAR tool output.
 */
type BOX_ADD_OR_UPDATE_USER_AVATAR_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ADD_SHARED_LINK_TO_FILE tool input.
 */
type BOX_ADD_SHARED_LINK_TO_FILE_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Shared  Link  Access
   * @description The level of access for the shared link. This can be restricted to anyone with the link (`open`), only people within the company (`company`) and only those who have been invited to the file (`collaborators`). If not set, this field defaults to the access level specified by the enterprise admin. To create a shared link with this default setting pass the `shared_link` object with no `access` field, for example `{ "shared_link": {} }`. The `company` access level is only available to paid accounts.
   * @enum {string}
   */
  shared__link__access?: "collaborators" | "company" | "open";
  /**
   * Shared  Link  Password
   * @description The password required to access the shared link. Set the password to `null` to remove it. Passwords must now be at least eight characters long and include a number, upper case letter, or a non-numeric or non-alphabetic character. A password can only be set when `access` is set to `open`.
   */
  shared__link__password?: string;
  /**
   * Shared  Link  Permissions  Can  Download
   * @description If the shared link allows for downloading of files. This can only be set when `access` is set to `open` or `company`.
   */
  shared__link__permissions__can__download?: boolean;
  /**
   * Shared  Link  Permissions  Can  Edit
   * @description If the shared link allows for editing of files. This can only be set when `access` is set to `open` or `company`. This value can only be `true` is `can_download` is also `true`.
   */
  shared__link__permissions__can__edit?: boolean;
  /**
   * Shared  Link  Permissions  Can  Preview
   * @description If the shared link allows for previewing of files. This value is always `true`. For shared links on folders this also applies to any items in the folder.
   */
  shared__link__permissions__can__preview?: boolean;
  /**
   * Shared  Link  Unshared  At
   * Format: date-time
   * @description The timestamp at which this shared link will expire. This field can only be set by users with paid accounts. The value must be greater than the current date and time.
   */
  shared__link__unshared__at?: string;
  /**
   * Shared  Link  Vanity  Name
   * @description Defines a custom vanity name to use in the shared link URL, for example `https://app.box.com/v/my-shared-link`. Custom URLs should not be used when sharing sensitive content as vanity URLs are a lot easier to guess than regular shared links.
   */
  shared__link__vanity__name?: string;
};

/**
 * Type of BOX's BOX_ADD_SHARED_LINK_TO_FILE tool output.
 */
type BOX_ADD_SHARED_LINK_TO_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ADD_SHARED_LINK_TO_FOLDER tool input.
 */
type BOX_ADD_SHARED_LINK_TO_FOLDER_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Shared  Link  Access
   * @description The level of access for the shared link. This can be restricted to anyone with the link (`open`), only people within the company (`company`) and only those who have been invited to the folder (`collaborators`). If not set, this field defaults to the access level specified by the enterprise admin. To create a shared link with this default setting pass the `shared_link` object with no `access` field, for example `{ "shared_link": {} }`. The `company` access level is only available to paid accounts.
   * @enum {string}
   */
  shared__link__access?: "collaborators" | "company" | "open";
  /**
   * Shared  Link  Password
   * @description The password required to access the shared link. Set the password to `null` to remove it. Passwords must now be at least eight characters long and include a number, upper case letter, or a non-numeric or non-alphabetic character. A password can only be set when `access` is set to `open`.
   */
  shared__link__password?: string;
  /**
   * Shared  Link  Permissions  Can  Download
   * @description If the shared link allows for downloading of files. This can only be set when `access` is set to `open` or `company`.
   */
  shared__link__permissions__can__download?: boolean;
  /**
   * Shared  Link  Permissions  Can  Edit
   * @description This value can only be `false` for items with a `type` of `folder`.
   */
  shared__link__permissions__can__edit?: boolean;
  /**
   * Shared  Link  Permissions  Can  Preview
   * @description If the shared link allows for previewing of files. This value is always `true`. For shared links on folders this also applies to any items in the folder.
   */
  shared__link__permissions__can__preview?: boolean;
  /**
   * Shared  Link  Unshared  At
   * Format: date-time
   * @description The timestamp at which this shared link will expire. This field can only be set by users with paid accounts. The value must be greater than the current date and time.
   */
  shared__link__unshared__at?: string;
  /**
   * Shared  Link  Vanity  Name
   * @description Defines a custom vanity name to use in the shared link URL, for example `https://app.box.com/v/my-shared-link`. Custom URLs should not be used when sharing sensitive content as vanity URLs are a lot easier to guess than regular shared links.
   */
  shared__link__vanity__name?: string;
};

/**
 * Type of BOX's BOX_ADD_SHARED_LINK_TO_FOLDER tool output.
 */
type BOX_ADD_SHARED_LINK_TO_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ADD_SHARED_LINK_TO_WEB_LINK tool input.
 */
type BOX_ADD_SHARED_LINK_TO_WEB_LINK_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * Shared  Link  Access
   * @description The level of access for the shared link. This can be restricted to anyone with the link (`open`), only people within the company (`company`) and only those who have been invited to the file (`collaborators`). If not set, this field defaults to the access level specified by the enterprise admin. To create a shared link with this default setting pass the `shared_link` object with no `access` field, for example `{ "shared_link": {} }`. The `company` access level is only available to paid accounts.
   * @enum {string}
   */
  shared__link__access?: "collaborators" | "company" | "open";
  /**
   * Shared  Link  Password
   * @description The password required to access the shared link. Set the password to `null` to remove it. Passwords must now be at least eight characters long and include a number, upper case letter, or a non-numeric or non-alphabetic character. A password can only be set when `access` is set to `open`.
   */
  shared__link__password?: string;
  /**
   * Shared  Link  Permissions  Can  Download
   * @description If the shared link allows for downloading of files. This can only be set when `access` is set to `open` or `company`.
   */
  shared__link__permissions__can__download?: boolean;
  /**
   * Shared  Link  Permissions  Can  Edit
   * @description This value can only be `true` is `type` is `file`.
   */
  shared__link__permissions__can__edit?: boolean;
  /**
   * Shared  Link  Permissions  Can  Preview
   * @description If the shared link allows for previewing of files. This value is always `true`. For shared links on folders this also applies to any items in the folder.
   */
  shared__link__permissions__can__preview?: boolean;
  /**
   * Shared  Link  Unshared  At
   * Format: date-time
   * @description The timestamp at which this shared link will expire. This field can only be set by users with paid accounts. The value must be greater than the current date and time.
   */
  shared__link__unshared__at?: string;
  /**
   * Shared  Link  Vanity  Name
   * @description Defines a custom vanity name to use in the shared link URL, for example `https://app.box.com/v/my-shared-link`. Custom URLs should not be used when sharing sensitive content as vanity URLs are a lot easier to guess than regular shared links.
   */
  shared__link__vanity__name?: string;
  /**
   * Web Link Id
   * @description The ID of the web link.
   */
  web_link_id?: string;
};

/**
 * Type of BOX's BOX_ADD_SHARED_LINK_TO_WEB_LINK tool output.
 */
type BOX_ADD_SHARED_LINK_TO_WEB_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ADD_USER_TO_GROUP tool input.
 */
type BOX_ADD_USER_TO_GROUP_INPUT = {
  /**
   * Configurable Permissions
   * @description Custom configuration for the permissions an admin if a group will receive. This option has no effect on members with a role of `member`. Setting these permissions overwrites the default access levels of an admin. Specifying a value of `null` for this object will disable all configurable permissions. Specifying permissions will set them accordingly, omitted permissions will be enabled by default.
   */
  configurable_permissions?: {
      [key: string]: boolean;
  };
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Group  Id
   * @description The ID of the group to add the user to
   */
  group__id?: string;
  /**
   * Role
   * @description The role of the user in the group.
   * @enum {string}
   */
  role?: "admin" | "member";
  /**
   * User  Id
   * @description The ID of the user to add to the group
   */
  user__id?: string;
};

/**
 * Type of BOX's BOX_ADD_USER_TO_GROUP tool output.
 */
type BOX_ADD_USER_TO_GROUP_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_APPLY_WATERMARK_TO_FILE tool input.
 */
type BOX_APPLY_WATERMARK_TO_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Watermark  Imprint
   * @description The type of watermark to apply. Currently only supports one option.
   * @enum {string}
   */
  watermark__imprint?: "default";
};

/**
 * Type of BOX's BOX_APPLY_WATERMARK_TO_FILE tool output.
 */
type BOX_APPLY_WATERMARK_TO_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_APPLY_WATERMARK_TO_FOLDER tool input.
 */
type BOX_APPLY_WATERMARK_TO_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Watermark  Imprint
   * @description The type of watermark to apply. Currently only supports one option.
   * @enum {string}
   */
  watermark__imprint?: "default";
};

/**
 * Type of BOX's BOX_APPLY_WATERMARK_TO_FOLDER tool output.
 */
type BOX_APPLY_WATERMARK_TO_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ASK_QUESTION tool input.
 */
type BOX_ASK_QUESTION_INPUT = {
  /**
   * Dialogue History
   * @description The history of prompts and answers previously passed to the LLM. This provides additional context to the LLM in generating the response.
   */
  dialogue_history?: {
      /**
       * Answer
       * @description The answer previously provided by the LLM.
       */
      answer?: string;
      /**
       * Created At
       * Format: date-time
       * @description The ISO date formatted timestamp of when the previous answer to the prompt was created.
       */
      created_at?: string;
      /**
       * Prompt
       * @description The prompt previously provided by the client and answered by the LLM.
       */
      prompt?: string;
  }[];
  /**
   * Include Citations
   * @description A flag to indicate whether citations should be returned.
   */
  include_citations?: boolean;
  /**
   * Items
   * @description The items to be processed by the LLM, often files.
   */
  items?: {
      /**
       * Content
       * @description The content of the item, often the text representation.
       */
      content?: string;
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * Type
       * @description The type of the item. A `hubs` item must be used as a single item.
       * @enum {string}
       */
      type: "file" | "hubs";
  }[];
  /**
   * Mode
   * @description Box AI handles text documents with text representations up to 1MB in size, or a maximum of 25 files, whichever comes first. If the text file size exceeds 1MB, the first 1MB of text representation will be processed. Box AI handles image documents with a resolution of 1024 x 1024 pixels, with a maximum of 5 images or 5 pages for multi-page images. If the number of image or image pages exceeds 5, the first 5 images or pages will be processed. If you set mode parameter to `single_item_qa`, the items array can have one element only. Currently Box AI does not support multi-modal requests. If both images and text are sent Box AI will only process the text.
   * @enum {string}
   */
  mode?: "multiple_item_qa" | "single_item_qa";
  /**
   * Prompt
   * @description The prompt provided by the client to be answered by the LLM. The prompt"s length is limited to 10000 characters.
   */
  prompt?: string;
};

/**
 * Type of BOX's BOX_ASK_QUESTION tool output.
 */
type BOX_ASK_QUESTION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ASSIGN_LEGAL_HOLD_POLICY tool input.
 */
type BOX_ASSIGN_LEGAL_HOLD_POLICY_INPUT = {
  /**
   * Assign  To  Id
   * @description The ID of item to assign the policy to
   */
  assign__to__id?: string;
  /**
   * Assign  To  Type
   * @description The type of item to assign the policy to
   * @enum {string}
   */
  assign__to__type?: "file" | "file_version" | "folder" | "user";
  /**
   * Policy Id
   * @description The ID of the policy to assign.
   */
  policy_id?: string;
};

/**
 * Type of BOX's BOX_ASSIGN_LEGAL_HOLD_POLICY tool output.
 */
type BOX_ASSIGN_LEGAL_HOLD_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ASSIGN_RETENTION_POLICY tool input.
 */
type BOX_ASSIGN_RETENTION_POLICY_INPUT = {
  /**
   * Assign  To  Id
   * @description The ID of item to assign the policy to. Set to `null` or omit when `type` is set to `enterprise`.
   */
  assign__to__id?: string;
  /**
   * Assign  To  Type
   * @description The type of item to assign the policy to.
   * @enum {string}
   */
  assign__to__type?: "enterprise" | "folder" | "metadata_template";
  /**
   * Filter Fields
   * @description If the `assign_to` type is `metadata_template`, then optionally add the `filter_fields` parameter which will require an array of objects with a field entry and a value entry. Currently only one object of `field` and `value` is supported.
   */
  filter_fields?: {
      /**
       * Field
       * @description The metadata attribute key id.
       */
      field?: string;
      /**
       * Value
       * @description The metadata attribute field id. For value, only enum and multiselect types are supported.
       */
      value?: string;
  }[];
  /**
   * Policy Id
   * @description The ID of the retention policy to assign
   */
  policy_id?: string;
  /**
   * Start Date Field
   * @description The date the retention policy assignment begins. If the `assigned_to` type is `metadata_template`, this field can be a date field"s metadata attribute key id.
   */
  start_date_field?: string;
};

/**
 * Type of BOX's BOX_ASSIGN_RETENTION_POLICY tool output.
 */
type BOX_ASSIGN_RETENTION_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ASSIGN_STORAGE_POLICY tool input.
 */
type BOX_ASSIGN_STORAGE_POLICY_INPUT = {
  /**
   * Assigned  To  Id
   * @description The ID of the user or enterprise
   */
  assigned__to__id?: string;
  /**
   * Assigned  To  Type
   * @description The type to assign the policy to.
   * @enum {string}
   */
  assigned__to__type?: "enterprise" | "user";
  /**
   * Storage  Policy  Id
   * @description The ID of the storage policy to assign.
   */
  storage__policy__id?: string;
  /**
   * Storage  Policy  Type
   * @description The type to assign.
   * @enum {string}
   */
  storage__policy__type?: "storage_policy";
};

/**
 * Type of BOX's BOX_ASSIGN_STORAGE_POLICY tool output.
 */
type BOX_ASSIGN_STORAGE_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_ASSIGN_TASK tool input.
 */
type BOX_ASSIGN_TASK_INPUT = {
  /**
   * Assign  To  Id
   * @description The ID of the user to assign to the task. To specify a user by their email address use the `login` parameter.
   */
  assign__to__id?: string;
  /**
   * Assign  To  Login
   * @description The email address of the user to assign to the task. To specify a user by their user ID please use the `id` parameter.
   */
  assign__to__login?: string;
  /**
   * Task  Id
   * @description The ID of the task
   */
  task__id?: string;
  /**
   * Task  Type
   * @description The type of the item to assign.
   * @enum {string}
   */
  task__type?: "task";
};

/**
 * Type of BOX's BOX_ASSIGN_TASK tool output.
 */
type BOX_ASSIGN_TASK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_AUTHORIZE_USER tool input.
 */
type BOX_AUTHORIZE_USER_INPUT = {
  /**
   * Client Id
   * @description The Client ID of the application that is requesting to authenticate the user. To get the Client ID for your application, log in to your Box developer console and click the **Edit Application** link for the application you"re working with. In the OAuth 2.0 Parameters section of the configuration page, find the item labelled `client_id`. The text of that item is your application"s Client ID.
   */
  client_id?: string;
  /**
   * Redirect Uri
   * @description The URI to which Box redirects the browser after the user has granted or denied the application permission. This URI match one of the redirect URIs in the configuration of your application. It must be a valid HTTPS URI and it needs to be able to handle the redirection to complete the next step in the OAuth 2.0 flow. Although this parameter is optional, it must be a part of the authorization URL if you configured multiple redirect URIs for the application in the developer console. A missing parameter causes a `redirect_uri_missing` error after the user grants application access.
   */
  redirect_uri?: string;
  /**
   * Response Type
   * @description The type of response we"d like to receive.
   * @enum {string}
   */
  response_type?: "code";
  /**
   * Scope
   * @description A space-separated list of application scopes you"d like to authenticate the user for. This defaults to all the scopes configured for the application in its configuration page.
   */
  scope?: string;
  /**
   * State
   * @description A custom string of your choice. Box will pass the same string to the redirect URL when authentication is complete. This parameter can be used to identify a user on redirect, as well as protect against hijacked sessions and other exploits.
   */
  state?: string;
};

/**
 * Type of BOX's BOX_AUTHORIZE_USER tool output.
 */
type BOX_AUTHORIZE_USER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CANCEL_BOX_SIGN_REQUEST tool input.
 */
type BOX_CANCEL_BOX_SIGN_REQUEST_INPUT = {
  /**
   * Sign Request Id
   * @description The ID of the signature request
   */
  sign_request_id?: string;
};

/**
 * Type of BOX's BOX_CANCEL_BOX_SIGN_REQUEST tool output.
 */
type BOX_CANCEL_BOX_SIGN_REQUEST_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CHANGE_SHIELD_INFORMATION_BARRIER_STATUS tool input.
 */
type BOX_CHANGE_SHIELD_INFORMATION_BARRIER_STATUS_INPUT = {
  /**
   * Id
   * @description The ID of the shield information barrier.
   */
  id?: string;
  /**
   * Status
   * @description The desired status for the shield information barrier.
   * @enum {string}
   */
  status?: "disabled" | "pending";
};

/**
 * Type of BOX's BOX_CHANGE_SHIELD_INFORMATION_BARRIER_STATUS tool output.
 */
type BOX_CHANGE_SHIELD_INFORMATION_BARRIER_STATUS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_COMMIT_UPLOAD_SESSION tool input.
 */
type BOX_COMMIT_UPLOAD_SESSION_INPUT = {
  /**
   * Parts
   * @description The list details for the uploaded parts
   */
  parts?: unknown[];
  /**
   * Upload Session Id
   * @description The ID of the upload session.
   */
  upload_session_id?: string;
};

/**
 * Type of BOX's BOX_COMMIT_UPLOAD_SESSION tool output.
 */
type BOX_COMMIT_UPLOAD_SESSION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_COPY_FILE tool input.
 */
type BOX_COPY_FILE_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Name
   * @description An optional new name for the copied file. There are some restrictions to the file name. Names containing non-printable ASCII characters, forward and backward slashes (`/`, ``), and protected names like `.` and `..` are automatically sanitized by removing the non-allowed characters.
   */
  name?: string;
  /**
   * Parent  Id
   * @description The ID of folder to copy the file to.
   */
  parent__id?: string;
  /**
   * Version
   * @description An optional ID of the specific file version to copy.
   */
  version?: string;
};

/**
 * Type of BOX's BOX_COPY_FILE tool output.
 */
type BOX_COPY_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_COPY_FILE_REQUEST tool input.
 */
type BOX_COPY_FILE_REQUEST_INPUT = {
  /**
   * File Request Id
   * @description The unique identifier that represent a file request. The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/filerequest/123` the `file_request_id` is `123`.
   */
  file_request_id?: string;
};

/**
 * Type of BOX's BOX_COPY_FILE_REQUEST tool output.
 */
type BOX_COPY_FILE_REQUEST_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_COPY_FOLDER tool input.
 */
type BOX_COPY_FOLDER_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique identifier of the folder to copy. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder with the ID `0` can not be copied.
   */
  folder_id?: string;
  /**
   * Name
   * @description An optional new name for the copied folder. There are some restrictions to the file name. Names containing non-printable ASCII characters, forward and backward slashes (`/`, ``), as well as names with trailing spaces are prohibited. Additionally, the names `.` and `..` are not allowed either.
   */
  name?: string;
  /**
   * Parent  Id
   * @description The ID of parent folder
   */
  parent__id?: string;
};

/**
 * Type of BOX's BOX_COPY_FOLDER tool output.
 */
type BOX_COPY_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_AI_AGENT tool input.
 */
type BOX_CREATE_AI_AGENT_INPUT = {
  /**
   * Access State
   * @description The state of the AI Agent. Possible values are: `enabled`, `disabled`, and `enabled_for_selected_users`.
   */
  access_state?: string;
  /**
   * Allowed Entities
   * @description List of allowed users or groups.
   */
  allowed_entities?: {
      [key: string]: unknown;
  }[];
  /**
   * Ask  Access  State
   * @description The state of the AI Agent capability. Possible values are: `enabled` and `disabled`.
   */
  ask__access__state?: string;
  /**
   * Ask  Custom  Instructions
   * @description Custom instructions for the agent.
   */
  ask__custom__instructions?: string;
  /**
   * Ask  Description
   * @description The description of the AI Agent.
   */
  ask__description?: string;
  /**
   * Ask  Type
   * @description The type of AI agent used to handle queries.
   * @enum {string}
   */
  ask__type?: "ai_agent_ask";
  /**
   * Extract  Access  State
   * @description The state of the AI Agent capability. Possible values are: `enabled` and `disabled`.
   */
  extract__access__state?: string;
  /**
   * Extract  Custom  Instructions
   * @description Custom instructions for the agent.
   */
  extract__custom__instructions?: string;
  /**
   * Extract  Description
   * @description The description of the AI Agent.
   */
  extract__description?: string;
  /**
   * Extract  Type
   * @description The type of AI agent to be used for extraction.
   * @enum {string}
   */
  extract__type?: "ai_agent_extract";
  /**
   * Icon Reference
   * @description The icon reference of the AI Agent. It should have format of the URL `https://cdn01.boxcdn.net/app-assets/aistudio/avatars/<file_name>` where possible values of `file_name` are: `logo_boxAi.png`,`logo_stamp.png`,`logo_legal.png`,`logo_finance.png`,`logo_config.png`,`logo_handshake.png`,`logo_analytics.png`,`logo_classification.png`
   */
  icon_reference?: string;
  /**
   * Name
   * @description The name of the AI Agent.
   */
  name?: string;
  /**
   * Text  Gen  Access  State
   * @description The state of the AI Agent capability. Possible values are: `enabled` and `disabled`.
   */
  text__gen__access__state?: string;
  /**
   * Text  Gen  Custom  Instructions
   * @description Custom instructions for the agent.
   */
  text__gen__custom__instructions?: string;
  /**
   * Text  Gen  Description
   * @description The description of the AI Agent.
   */
  text__gen__description?: string;
  /**
   * Text  Gen  Type
   * @description The type of AI agent used for generating text.
   * @enum {string}
   */
  text__gen__type?: "ai_agent_text_gen";
  /**
   * Type
   * @description The type of agent used to handle queries.
   * @enum {string}
   */
  type?: "ai_agent";
};

/**
 * Type of BOX's BOX_CREATE_AI_AGENT tool output.
 */
type BOX_CREATE_AI_AGENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_BOX_SIGN_REQUEST tool input.
 */
type BOX_CREATE_BOX_SIGN_REQUEST_INPUT = object;

/**
 * Type of BOX's BOX_CREATE_BOX_SIGN_REQUEST tool output.
 */
type BOX_CREATE_BOX_SIGN_REQUEST_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_BOX_SKILL_CARDS_ON_FILE tool input.
 */
type BOX_CREATE_BOX_SKILL_CARDS_ON_FILE_INPUT = {
  /**
   * Cards
   * @description A list of Box Skill cards to apply to this file.
   */
  cards?: {
      [key: string]: unknown;
  }[];
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_CREATE_BOX_SKILL_CARDS_ON_FILE tool output.
 */
type BOX_CREATE_BOX_SKILL_CARDS_ON_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_COLLABORATION tool input.
 */
type BOX_CREATE_COLLABORATION_INPUT = {
  /**
   * Accessible  By  Id
   * @description The ID of the user or group. Alternatively, use `login` to specify a user by email address.
   */
  accessible__by__id?: string;
  /**
   * Accessible  By  Login
   * @description The email address of the user to grant access to the item. Alternatively, use `id` to specify a user by user ID.
   */
  accessible__by__login?: string;
  /**
   * Accessible  By  Type
   * @description The type of collaborator to invite.
   * @enum {string}
   */
  accessible__by__type?: "group" | "user";
  /**
   * Can View Path
   * @description Determines if the invited users can see the entire parent path to the associated folder. The user will not gain privileges in any parent folder and therefore can not see content the user is not collaborated on. Be aware that this meaningfully increases the time required to load the invitee"s **All Files** page. We recommend you limit the number of collaborations with `can_view_path` enabled to 1,000 per user. Only owner or co-owners can invite collaborators with a `can_view_path` of `true`. `can_view_path` can only be used for folder collaborations.
   */
  can_view_path?: boolean;
  /**
   * Expires At
   * Format: date-time
   * @description Set the expiration date for the collaboration. At this date, the collaboration will be automatically removed from the item. This feature will only work if the **Automatically remove invited collaborators: Allow folder owners to extend the expiry date** setting has been enabled in the **Enterprise Settings** of the **Admin Console**. When the setting is not enabled, collaborations can not have an expiry date and a value for this field will be result in an error.
   */
  expires_at?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Is Access Only
   * @description If set to `true`, collaborators have access to shared items, but such items won"t be visible in the All Files list. Additionally, collaborators won"t see the the path to the root folder for the shared item.
   */
  is_access_only?: boolean;
  /**
   * Item  Id
   * @description The ID of the item that will be granted access to
   */
  item__id?: string;
  /**
   * Item  Type
   * @description The type of the item that this collaboration will be granted access to
   * @enum {string}
   */
  item__type?: "file" | "folder";
  /**
   * Notify
   * @description Determines if users should receive email notification for the action performed.
   */
  notify?: boolean;
  /**
   * Role
   * @description The level of access granted.
   * @enum {string}
   */
  role?: "co-owner" | "editor" | "previewer" | "previewer uploader" | "uploader" | "viewer" | "viewer uploader";
};

/**
 * Type of BOX's BOX_CREATE_COLLABORATION tool output.
 */
type BOX_CREATE_COLLABORATION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_COMMENT tool input.
 */
type BOX_CREATE_COMMENT_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Item  Id
   * @description The ID of the item
   */
  item__id?: string;
  /**
   * Item  Type
   * @description The type of the item that this comment will be placed on.
   * @enum {string}
   */
  item__type?: "comment" | "file";
  /**
   * Message
   * @description The text of the comment. To mention a user, use the `tagged_message` parameter instead.
   */
  message?: string;
  /**
   * Tagged Message
   * @description The text of the comment, including `@[user_id:name]` somewhere in the message to mention another user, which will send them an email notification, letting them know they have been mentioned. The `user_id` is the target user"s ID, where the `name` can be any custom phrase. In the Box UI this name will link to the user"s profile. If you are not mentioning another user, use `message` instead.
   */
  tagged_message?: string;
};

/**
 * Type of BOX's BOX_CREATE_COMMENT tool output.
 */
type BOX_CREATE_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_EMAIL_ALIAS tool input.
 */
type BOX_CREATE_EMAIL_ALIAS_INPUT = {
  /**
   * Email
   * @description The email address to add to the account as an alias. Note: The domain of the email alias needs to be registered  to your enterprise. See the [domain verification guide](   https://support.box.com/hc/en-us/articles/4408619650579-Domain-Verification   ) for steps to add a new domain.
   */
  email?: string;
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_CREATE_EMAIL_ALIAS tool output.
 */
type BOX_CREATE_EMAIL_ALIAS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_FOLDER tool input.
 */
type BOX_CREATE_FOLDER_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Name
   * @description The name for the new folder. There are some restrictions to the file name. Names containing non-printable ASCII characters, forward and backward slashes (`/`, ``), as well as names with trailing spaces are prohibited. Additionally, the names `.` and `..` are not allowed either.
   */
  name?: string;
  /**
   * Parent  Id
   * @description The ID of parent folder
   */
  parent__id?: string;
  /**
   * Sync State
   * @description Specifies whether a folder should be synced to a user"s device or not. This is used by Box Sync (discontinued) and is not used by Box Drive.
   * @enum {string}
   */
  sync_state?: "not_synced" | "partially_synced" | "synced";
};

/**
 * Type of BOX's BOX_CREATE_FOLDER tool output.
 */
type BOX_CREATE_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_FOLDER_LOCK tool input.
 */
type BOX_CREATE_FOLDER_LOCK_INPUT = {
  /**
   * Folder  Id
   * @description The ID of the folder.
   */
  folder__id?: string;
  /**
   * Folder  Type
   * @description The content type the lock is being applied to. Only `folder` is supported.
   */
  folder__type?: string;
  /**
   * Locked  Operations  Delete
   * @description Whether deleting the folder should be locked.
   */
  locked__operations__delete?: boolean;
  /**
   * Locked  Operations  Move
   * @description Whether moving the folder should be locked.
   */
  locked__operations__move?: boolean;
};

/**
 * Type of BOX's BOX_CREATE_FOLDER_LOCK tool output.
 */
type BOX_CREATE_FOLDER_LOCK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_GROUP tool input.
 */
type BOX_CREATE_GROUP_INPUT = {
  /**
   * Description
   * @description A human readable description of the group.
   */
  description?: string;
  /**
   * External Sync Identifier
   * @description An arbitrary identifier that can be used by external group sync tools to link this Box Group to an external group. Example values of this field could be an **Active Directory Object ID** or a **Google Group ID**. We recommend you use of this field in order to avoid issues when group names are updated in either Box or external systems.
   */
  external_sync_identifier?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Invitability Level
   * @description Specifies who can invite the group to collaborate on folders. When set to `admins_only` the enterprise admin, co-admins, and the group"s admin can invite the group. When set to `admins_and_members` all the admins listed above and group members can invite the group. When set to `all_managed_users` all managed users in the enterprise can invite the group.
   * @enum {string}
   */
  invitability_level?: "admins_and_members" | "admins_only" | "all_managed_users";
  /**
   * Member Viewability Level
   * @description Specifies who can see the members of the group. * `admins_only` - the enterprise admin, co-admins, group"s   group admin * `admins_and_members` - all admins and group members * `all_managed_users` - all managed users in the   enterprise
   * @enum {string}
   */
  member_viewability_level?: "admins_and_members" | "admins_only" | "all_managed_users";
  /**
   * Name
   * @description The name of the new group to be created. This name must be unique within the enterprise.
   */
  name?: string;
  /**
   * Provenance
   * @description Keeps track of which external source this group is coming, for example `Active Directory`, or `Okta`. Setting this will also prevent Box admins from editing the group name and its members directly via the Box web application. This is desirable for one-way syncing of groups.
   */
  provenance?: string;
};

/**
 * Type of BOX's BOX_CREATE_GROUP tool output.
 */
type BOX_CREATE_GROUP_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_JOBS_TO_TERMINATE_USERS_SESSION tool input.
 */
type BOX_CREATE_JOBS_TO_TERMINATE_USERS_SESSION_INPUT = {
  /**
   * User Ids
   * @description A list of user IDs
   */
  user_ids?: string[];
  /**
   * User Logins
   * @description A list of user logins
   */
  user_logins?: string[];
};

/**
 * Type of BOX's BOX_CREATE_JOBS_TO_TERMINATE_USERS_SESSION tool output.
 */
type BOX_CREATE_JOBS_TO_TERMINATE_USERS_SESSION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_JOBS_TO_TERMINATE_USER_GROUP_SESSION tool input.
 */
type BOX_CREATE_JOBS_TO_TERMINATE_USER_GROUP_SESSION_INPUT = {
  /**
   * Group Ids
   * @description A list of group IDs
   */
  group_ids?: string[];
};

/**
 * Type of BOX's BOX_CREATE_JOBS_TO_TERMINATE_USER_GROUP_SESSION tool output.
 */
type BOX_CREATE_JOBS_TO_TERMINATE_USER_GROUP_SESSION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_LEGAL_HOLD_POLICY tool input.
 */
type BOX_CREATE_LEGAL_HOLD_POLICY_INPUT = {
  /**
   * Description
   * @description A description for the policy.
   */
  description?: string;
  /**
   * Filter Ended At
   * Format: date-time
   * @description The filter end date. When this policy is applied using a `custodian` legal hold assignments, it will only apply to file versions created or uploaded inside of the date range. Other assignment types, such as folders and files, will ignore the date filter. Required if `is_ongoing` is set to `false`.
   */
  filter_ended_at?: string;
  /**
   * Filter Started At
   * Format: date-time
   * @description The filter start date. When this policy is applied using a `custodian` legal hold assignments, it will only apply to file versions created or uploaded inside of the date range. Other assignment types, such as folders and files, will ignore the date filter. Required if `is_ongoing` is set to `false`.
   */
  filter_started_at?: string;
  /**
   * Is Ongoing
   * @description Whether new assignments under this policy should continue applying to files even after initialization. When this policy is applied using a legal hold assignment, it will continue applying the policy to any new file versions even after it has been applied. For example, if a legal hold assignment is placed on a user today, and that user uploads a file tomorrow, that file will get held. This will continue until the policy is retired. Required if no filter dates are set.
   */
  is_ongoing?: boolean;
  /**
   * Policy Name
   * @description The name of the policy.
   */
  policy_name?: string;
};

/**
 * Type of BOX's BOX_CREATE_LEGAL_HOLD_POLICY tool output.
 */
type BOX_CREATE_LEGAL_HOLD_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_METADATA_CASCADE_POLICY tool input.
 */
type BOX_CREATE_METADATA_CASCADE_POLICY_INPUT = {
  /**
   * Folder Id
   * @description The ID of the folder to apply the policy to. This folder will need to already have an instance of the targeted metadata template applied to it.
   */
  folder_id?: string;
  /**
   * Scope
   * @description The scope of the targeted metadata template. This template will need to already have an instance applied to the targeted folder.
   * @enum {string}
   */
  scope?: "enterprise" | "global";
  /**
   * Template Key
   * @description The key of the targeted metadata template. This template will need to already have an instance applied to the targeted folder. In many cases the template key is automatically derived of its display name, for example `Contract Template` would become `contractTemplate`. In some cases the creator of the template will have provided its own template key. Please [list the templates for an enterprise][list], or get all instances on a [file][file] or [folder][folder] to inspect a template"s key. [list]: e://get-metadata-templates-enterprise [file]: e://get-files-id-metadata [folder]: e://get-folders-id-metadata
   */
  templateKey?: string;
};

/**
 * Type of BOX's BOX_CREATE_METADATA_CASCADE_POLICY tool output.
 */
type BOX_CREATE_METADATA_CASCADE_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_METADATA_INSTANCE_ON_FILE tool input.
 */
type BOX_CREATE_METADATA_INSTANCE_ON_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Scope
   * @description The scope of the metadata template
   * @enum {string}
   */
  scope?: "enterprise" | "global";
  /**
   * Template Key
   * @description The name of the metadata template
   */
  template_key?: string;
};

/**
 * Type of BOX's BOX_CREATE_METADATA_INSTANCE_ON_FILE tool output.
 */
type BOX_CREATE_METADATA_INSTANCE_ON_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_METADATA_INSTANCE_ON_FOLDER tool input.
 */
type BOX_CREATE_METADATA_INSTANCE_ON_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Scope
   * @description The scope of the metadata template
   * @enum {string}
   */
  scope?: "enterprise" | "global";
  /**
   * Template Key
   * @description The name of the metadata template
   */
  template_key?: string;
};

/**
 * Type of BOX's BOX_CREATE_METADATA_INSTANCE_ON_FOLDER tool output.
 */
type BOX_CREATE_METADATA_INSTANCE_ON_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_METADATA_TEMPLATE tool input.
 */
type BOX_CREATE_METADATA_TEMPLATE_INPUT = {
  /**
   * Copy Instance On Item Copy
   * @description Whether or not to copy any metadata attached to a file or folder when it is copied. By default, metadata is not copied along with a file or folder when it is copied.
   * @default false
   */
  copyInstanceOnItemCopy: boolean;
  /**
   * Display Name
   * @description The display name of the template.
   */
  displayName?: string;
  /**
   * Fields
   * @description An ordered list of template fields which are part of the template. Each field can be a regular text field, date field, number field, as well as a single or multi-select list.
   */
  fields?: {
      /**
       * Description
       * @description A description of the field. This is not shown to the user.
       */
      description?: string;
      /**
       * Display Name
       * @description The display name of the field as it is shown to the user in the web and mobile apps.
       */
      displayName: string;
      /**
       * Hidden
       * @description Whether this field is hidden in the UI for the user and can only be set through the API instead.
       */
      hidden?: boolean;
      /**
       * Key
       * @description A unique identifier for the field. The identifier must be unique within the template to which it belongs.
       */
      key: string;
      /**
       * Options
       * @description A list of options for this field. This is used in combination with the `enum` and `multiSelect` field types.
       */
      options?: {
          /**
           * Key
           * @description The text value of the option. This represents both the display name of the option and the internal key used when updating templates.
           */
          key: string;
      }[];
      /**
       * Type
       * @description The type of field. The basic fields are a `string` field for text, a `float` field for numbers, and a `date` fields to present the user with a date-time picker. Additionally, metadata templates support an `enum` field for a basic list of items, and ` multiSelect` field for a similar list of items where the user can select more than one value.
       * @enum {string}
       */
      type: "date" | "enum" | "float" | "multiSelect" | "string";
  }[];
  /**
   * Hidden
   * @description Defines if this template is visible in the Box web app UI, or if it is purely intended for usage through the API.
   * @default false
   */
  hidden: boolean;
  /**
   * Scope
   * @description The scope of the metadata template to create. Applications can only create templates for use within the authenticated user"s enterprise. This value needs to be set to `enterprise`, as `global` scopes can not be created by applications.
   */
  scope?: string;
  /**
   * Template Key
   * @description A unique identifier for the template. This identifier needs to be unique across the enterprise for which the metadata template is being created. When not provided, the API will create a unique `templateKey` based on the value of the `displayName`.
   */
  templateKey?: string;
};

/**
 * Type of BOX's BOX_CREATE_METADATA_TEMPLATE tool output.
 */
type BOX_CREATE_METADATA_TEMPLATE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_RETENTION_POLICY tool input.
 */
type BOX_CREATE_RETENTION_POLICY_INPUT = {
  /**
   * Are Owners Notified
   * @description Whether owner and co-owners of a file are notified when the policy nears expiration.
   */
  are_owners_notified?: boolean;
  /**
   * Can Owner Extend Retention
   * @description Whether the owner of a file will be allowed to extend the retention.
   */
  can_owner_extend_retention?: boolean;
  /**
   * Custom Notification Recipients
   * @description A list of users notified when the retention policy duration is about to end.
   */
  custom_notification_recipients?: unknown[];
  /**
   * Description
   * @description The additional text description of the retention policy.
   */
  description?: string;
  /**
   * Disposition Action
   * @description The disposition action of the retention policy. `permanently_delete` deletes the content retained by the policy permanently. `remove_retention` lifts retention policy from the content, allowing it to be deleted by users once the retention policy has expired.
   * @enum {string}
   */
  disposition_action?: "permanently_delete" | "remove_retention";
  /**
   * Policy Name
   * @description The name for the retention policy
   */
  policy_name?: string;
  /**
   * Policy Type
   * @description The type of the retention policy. A retention policy type can either be `finite`, where a specific amount of time to retain the content is known upfront, or `indefinite`, where the amount of time to retain the content is still unknown.
   * @enum {string}
   */
  policy_type?: "finite" | "indefinite";
  /**
   * Retention Length
   * Format: int32
   * @description The length of the retention policy. This value specifies the duration in days that the retention policy will be active for after being assigned to content.  If the policy has a `policy_type` of `indefinite`, the `retention_length` will also be `indefinite`.
   */
  retention_length?: string;
  /**
   * Retention Type
   * @description Specifies the retention type: * `modifiable`: You can modify the retention policy. For example, you can add or remove folders, shorten or lengthen the policy duration, or delete the assignment. Use this type if your retention policy is not related to any regulatory purposes. * `non_modifiable`: You can modify the retention policy only in a limited way: add a folder, lengthen the duration, retire the policy, change the disposition action or notification settings. You cannot perform other actions, such as deleting the assignment or shortening the policy duration. Use this type to ensure compliance with regulatory retention policies.
   * @enum {string}
   */
  retention_type?: "modifiable" | "non_modifiable";
};

/**
 * Type of BOX's BOX_CREATE_RETENTION_POLICY tool output.
 */
type BOX_CREATE_RETENTION_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_SHIELD_INFORMATION_BARRIER tool input.
 */
type BOX_CREATE_SHIELD_INFORMATION_BARRIER_INPUT = object;

/**
 * Type of BOX's BOX_CREATE_SHIELD_INFORMATION_BARRIER tool output.
 */
type BOX_CREATE_SHIELD_INFORMATION_BARRIER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_SHIELD_INFORMATION_BARRIER_REPORT tool input.
 */
type BOX_CREATE_SHIELD_INFORMATION_BARRIER_REPORT_INPUT = {
  /**
   * Shield  Information  Barrier  Id
   * @description The unique identifier for the shield information barrier
   */
  shield__information__barrier__id?: string;
  /**
   * Shield  Information  Barrier  Type
   * @description The type of the shield information barrier
   * @enum {string}
   */
  shield__information__barrier__type?: "shield_information_barrier";
};

/**
 * Type of BOX's BOX_CREATE_SHIELD_INFORMATION_BARRIER_REPORT tool output.
 */
type BOX_CREATE_SHIELD_INFORMATION_BARRIER_REPORT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT tool input.
 */
type BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_INPUT = {
  /**
   * Description
   * @description Description of the shield information barrier segment
   */
  description?: string;
  /**
   * Name
   * @description Name of the shield information barrier segment
   */
  name?: string;
  /**
   * Shield  Information  Barrier  Id
   * @description The unique identifier for the shield information barrier
   */
  shield__information__barrier__id?: string;
  /**
   * Shield  Information  Barrier  Type
   * @description The type of the shield information barrier
   * @enum {string}
   */
  shield__information__barrier__type?: "shield_information_barrier";
};

/**
 * Type of BOX's BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT tool output.
 */
type BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER tool input.
 */
type BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_INPUT = {
  /**
   * Shield  Information  Barrier  Id
   * @description The unique identifier for the shield information barrier
   */
  shield__information__barrier__id?: string;
  /**
   * Shield  Information  Barrier  Segment  Id
   * @description The ID reference of the requesting shield information barrier segment.
   */
  shield__information__barrier__segment__id?: string;
  /**
   * Shield  Information  Barrier  Segment  Type
   * @description The type of the shield barrier segment for this member.
   * @enum {string}
   */
  shield__information__barrier__segment__type?: "shield_information_barrier_segment";
  /**
   * Shield  Information  Barrier  Type
   * @description The type of the shield information barrier
   * @enum {string}
   */
  shield__information__barrier__type?: "shield_information_barrier";
  /**
   * Type
   * @description -| A type of the shield barrier segment member.
   * @enum {string}
   */
  type?: "shield_information_barrier_segment_member";
};

/**
 * Type of BOX's BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER tool output.
 */
type BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION tool input.
 */
type BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_INPUT = {
  /**
   * Restricted  Segment  Id
   * @description The ID reference of the restricted shield information barrier segment.
   */
  restricted__segment__id?: string;
  /**
   * Restricted  Segment  Type
   * @description The type of the restricted shield information barrier segment.
   * @enum {string}
   */
  restricted__segment__type?: "shield_information_barrier_segment";
  /**
   * Shield  Information  Barrier  Id
   * @description The unique identifier for the shield information barrier
   */
  shield__information__barrier__id?: string;
  /**
   * Shield  Information  Barrier  Segment  Id
   * @description The ID reference of the requesting shield information barrier segment.
   */
  shield__information__barrier__segment__id?: string;
  /**
   * Shield  Information  Barrier  Segment  Type
   * @description The type of the shield barrier segment for this member.
   * @enum {string}
   */
  shield__information__barrier__segment__type?: "shield_information_barrier_segment";
  /**
   * Shield  Information  Barrier  Type
   * @description The type of the shield information barrier
   * @enum {string}
   */
  shield__information__barrier__type?: "shield_information_barrier";
  /**
   * Type
   * @description The type of the shield barrier segment restriction for this member.
   * @enum {string}
   */
  type?: "shield_information_barrier_segment_restriction";
};

/**
 * Type of BOX's BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION tool output.
 */
type BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_SLACK_INTEGRATION_MAPPING tool input.
 */
type BOX_CREATE_SLACK_INTEGRATION_MAPPING_INPUT = object;

/**
 * Type of BOX's BOX_CREATE_SLACK_INTEGRATION_MAPPING tool output.
 */
type BOX_CREATE_SLACK_INTEGRATION_MAPPING_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_TASK tool input.
 */
type BOX_CREATE_TASK_INPUT = {
  /**
   * Action
   * @description The action the task assignee will be prompted to do. Must be * `review` defines an approval task that can be approved or rejected * `complete` defines a general task which can be completed
   * @default review
   * @enum {string}
   */
  action: "complete" | "review";
  /**
   * Completion Rule
   * @description Defines which assignees need to complete this task before the task is considered completed. * `all_assignees` (default) requires all assignees to review or approve the the task in order for it to be considered completed. * `any_assignee` accepts any one assignee to review or approve the the task in order for it to be considered completed.
   * @default all_assignees
   * @enum {string}
   */
  completion_rule: "all_assignees" | "any_assignee";
  /**
   * Due At
   * Format: date-time
   * @description Defines when the task is due. Defaults to `null` if not provided.
   */
  due_at?: string;
  /**
   * Item  Id
   * @description The ID of the file
   */
  item__id?: string;
  /**
   * Item  Type
   * @description `file`
   * @enum {string}
   */
  item__type?: "file";
  /**
   * Message
   * @description An optional message to include with the task.
   */
  message?: string;
};

/**
 * Type of BOX's BOX_CREATE_TASK tool output.
 */
type BOX_CREATE_TASK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_TEAMS_INTEGRATION_MAPPING tool input.
 */
type BOX_CREATE_TEAMS_INTEGRATION_MAPPING_INPUT = object;

/**
 * Type of BOX's BOX_CREATE_TEAMS_INTEGRATION_MAPPING tool output.
 */
type BOX_CREATE_TEAMS_INTEGRATION_MAPPING_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_TERMS_OF_SERVICE tool input.
 */
type BOX_CREATE_TERMS_OF_SERVICE_INPUT = {
  /**
   * Status
   * @description Whether this terms of service is active.
   * @enum {string}
   */
  status?: "disabled" | "enabled";
  /**
   * Text
   * @description The terms of service text to display to users. The text can be set to empty if the `status` is set to `disabled`.
   */
  text?: string;
  /**
   * Tos Type
   * @description The type of user to set the terms of service for.
   * @enum {string}
   */
  tos_type?: "external" | "managed";
};

/**
 * Type of BOX's BOX_CREATE_TERMS_OF_SERVICE tool output.
 */
type BOX_CREATE_TERMS_OF_SERVICE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_TERMS_OF_SERVICE_STATUS_FOR_NEW_USER tool input.
 */
type BOX_CREATE_TERMS_OF_SERVICE_STATUS_FOR_NEW_USER_INPUT = {
  /**
   * Is Accepted
   * @description Whether the user has accepted the terms.
   */
  is_accepted?: boolean;
  /**
   * Tos  Id
   * @description The ID of terms of service
   */
  tos__id?: string;
  /**
   * Tos  Type
   * @description The type of object.
   * @enum {string}
   */
  tos__type?: "terms_of_service";
  /**
   * User  Id
   * @description The ID of user
   */
  user__id?: string;
  /**
   * User  Type
   * @description The type of object.
   * @enum {string}
   */
  user__type?: "user";
};

/**
 * Type of BOX's BOX_CREATE_TERMS_OF_SERVICE_STATUS_FOR_NEW_USER tool output.
 */
type BOX_CREATE_TERMS_OF_SERVICE_STATUS_FOR_NEW_USER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_UPLOAD_SESSION tool input.
 */
type BOX_CREATE_UPLOAD_SESSION_INPUT = {
  /**
   * File Name
   * @description The name of new file
   */
  file_name?: string;
  /**
   * File Size
   * @description The total number of bytes of the file to be uploaded
   */
  file_size?: number;
  /**
   * Folder Id
   * @description The ID of the folder to upload the new file to.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_CREATE_UPLOAD_SESSION tool output.
 */
type BOX_CREATE_UPLOAD_SESSION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_UPLOAD_SESSION_FOR_EXISTING_FILE tool input.
 */
type BOX_CREATE_UPLOAD_SESSION_FOR_EXISTING_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * File Name
   * @description The optional new name of new file
   */
  file_name?: string;
  /**
   * File Size
   * @description The total number of bytes of the file to be uploaded
   */
  file_size?: number;
};

/**
 * Type of BOX's BOX_CREATE_UPLOAD_SESSION_FOR_EXISTING_FILE tool output.
 */
type BOX_CREATE_UPLOAD_SESSION_FOR_EXISTING_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_USER tool input.
 */
type BOX_CREATE_USER_INPUT = {
  /**
   * Address
   * @description The user’s address
   */
  address?: string;
  /**
   * Can See Managed Users
   * @description Whether the user can see other enterprise users in their contact list
   */
  can_see_managed_users?: boolean;
  /**
   * External App User Id
   * @description An external identifier for an app user, which can be used to look up the user. This can be used to tie user IDs from external identity providers to Box users.
   */
  external_app_user_id?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Is Exempt From Device Limits
   * @description Whether to exempt the user from enterprise device limits
   */
  is_exempt_from_device_limits?: boolean;
  /**
   * Is Exempt From Login Verification
   * @description Whether the user must use two-factor authentication
   */
  is_exempt_from_login_verification?: boolean;
  /**
   * Is External Collab Restricted
   * @description Whether the user is allowed to collaborate with users outside their enterprise
   */
  is_external_collab_restricted?: boolean;
  /**
   * Is Platform Access Only
   * @description Specifies that the user is an app user.
   */
  is_platform_access_only?: boolean;
  /**
   * Is Sync Enabled
   * @description Whether the user can use Box Sync
   */
  is_sync_enabled?: boolean;
  /**
   * Job Title
   * @description The user’s job title
   */
  job_title?: string;
  /**
   * Language
   * @description The language of the user, formatted in modified version of the [ISO 639-1](/guides/api-calls/language-codes) format.
   */
  language?: string;
  /**
   * Login
   * @description The email address the user uses to log in Required, unless `is_platform_access_only` is set to `true`.
   */
  login?: string;
  /**
   * Name
   * @description The name of the user
   */
  name?: string;
  /**
   * Phone
   * @description The user’s phone number
   */
  phone?: string;
  /**
   * Role
   * @description The user’s enterprise role
   * @enum {string}
   */
  role?: "coadmin" | "user";
  /**
   * Space Amount
   * @description The user’s total available space in bytes. Set this to `-1` to indicate unlimited storage.
   */
  space_amount?: number;
  /**
   * Status
   * @description The user"s account status
   * @enum {string}
   */
  status?: "active" | "cannot_delete_edit" | "cannot_delete_edit_upload" | "inactive";
  /**
   * Timezone
   * Format: timezone
   * @description The user"s timezone
   */
  timezone?: string;
  /**
   * Tracking Codes
   * @description Tracking codes allow an admin to generate reports from the admin console and assign an attribute to a specific group of users. This setting must be enabled for an enterprise before it can be used.
   */
  tracking_codes?: {
      /**
       * Name
       * @description The name of the tracking code, which must be preconfigured in the Admin Console
       */
      name?: string;
      /**
       * Type
       * @description `tracking_code`
       * @enum {string}
       */
      type?: "tracking_code";
      /**
       * Value
       * @description The value of the tracking code
       */
      value?: string;
  }[];
};

/**
 * Type of BOX's BOX_CREATE_USER tool output.
 */
type BOX_CREATE_USER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_USER_EXEMPTION_FROM_COLLABORATION_DOMAIN_RESTRICTIONS tool input.
 */
type BOX_CREATE_USER_EXEMPTION_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_INPUT = {
  /**
   * User  Id
   * @description The ID of the user to exempt.
   */
  user__id?: string;
};

/**
 * Type of BOX's BOX_CREATE_USER_EXEMPTION_FROM_COLLABORATION_DOMAIN_RESTRICTIONS tool output.
 */
type BOX_CREATE_USER_EXEMPTION_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_USER_INVITE tool input.
 */
type BOX_CREATE_USER_INVITE_INPUT = {
  /**
   * Actionable  By  Login
   * @description The login of the invited user
   */
  actionable__by__login?: string;
  /**
   * Enterprise  Id
   * @description The ID of the enterprise
   */
  enterprise__id?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
};

/**
 * Type of BOX's BOX_CREATE_USER_INVITE tool output.
 */
type BOX_CREATE_USER_INVITE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_WEBHOOK tool input.
 */
type BOX_CREATE_WEBHOOK_INPUT = {
  /**
   * Address
   * @description The URL that is notified by this webhook
   */
  address?: string;
  /**
   * Target  Id
   * @description The ID of the item to trigger a webhook
   */
  target__id?: string;
  /**
   * Target  Type
   * @description The type of item to trigger a webhook
   * @enum {string}
   */
  target__type?: "file" | "folder";
  /**
   * Triggers
   * @description An array of event names that this webhook is to be triggered for
   */
  triggers?: string[];
};

/**
 * Type of BOX's BOX_CREATE_WEBHOOK tool output.
 */
type BOX_CREATE_WEBHOOK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_WEB_LINK tool input.
 */
type BOX_CREATE_WEB_LINK_INPUT = {
  /**
   * Description
   * @description Description of the web link.
   */
  description?: string;
  /**
   * Name
   * @description Name of the web link. Defaults to the URL if not set.
   */
  name?: string;
  /**
   * Parent  Id
   * @description The ID of parent folder
   */
  parent__id?: string;
  /**
   * Url
   * @description The URL that this web link links to. Must start with `"http://"` or `"https://"`.
   */
  url?: string;
};

/**
 * Type of BOX's BOX_CREATE_WEB_LINK tool output.
 */
type BOX_CREATE_WEB_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_CREATE_ZIP_DOWNLOAD tool input.
 */
type BOX_CREATE_ZIP_DOWNLOAD_INPUT = {
  /**
   * Download File Name
   * @description The optional name of the `zip` archive. This name will be appended by the `.zip` file extension, for example `January Financials.zip`.
   */
  download_file_name?: string;
  /**
   * Items
   * @description A list of items to add to the `zip` archive. These can be folders or files.
   */
  items?: {
      /**
       * Id
       * @description The identifier of the item to add to the archive. When this item is a folder then this can not be the root folder with ID `0`.
       */
      id: string;
      /**
       * Type
       * @description The type of the item to add to the archive.
       * @enum {string}
       */
      type: "file" | "folder";
  }[];
};

/**
 * Type of BOX's BOX_CREATE_ZIP_DOWNLOAD tool output.
 */
type BOX_CREATE_ZIP_DOWNLOAD_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_AI_AGENT tool input.
 */
type BOX_DELETE_AI_AGENT_INPUT = {
  /**
   * Agent Id
   * @description The ID of the agent to delete.
   */
  agent_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_AI_AGENT tool output.
 */
type BOX_DELETE_AI_AGENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_FILE tool input.
 */
type BOX_DELETE_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_FILE tool output.
 */
type BOX_DELETE_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_FILE_REQUEST tool input.
 */
type BOX_DELETE_FILE_REQUEST_INPUT = {
  /**
   * File Request Id
   * @description The unique identifier that represent a file request. The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/filerequest/123` the `file_request_id` is `123`.
   */
  file_request_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_FILE_REQUEST tool output.
 */
type BOX_DELETE_FILE_REQUEST_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_FOLDER tool input.
 */
type BOX_DELETE_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Recursive
   * @description Delete a folder that is not empty by recursively deleting the folder and all of its content.
   */
  recursive?: boolean;
};

/**
 * Type of BOX's BOX_DELETE_FOLDER tool output.
 */
type BOX_DELETE_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_FOLDER_LOCK tool input.
 */
type BOX_DELETE_FOLDER_LOCK_INPUT = {
  /**
   * Folder Lock Id
   * @description The ID of the folder lock.
   */
  folder_lock_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_FOLDER_LOCK tool output.
 */
type BOX_DELETE_FOLDER_LOCK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_RETENTION_POLICY tool input.
 */
type BOX_DELETE_RETENTION_POLICY_INPUT = {
  /**
   * Retention Policy Id
   * @description The ID of the retention policy.
   */
  retention_policy_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_RETENTION_POLICY tool output.
 */
type BOX_DELETE_RETENTION_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT tool input.
 */
type BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_INPUT = {
  /**
   * Shield Information Barrier Segment Id
   * @description The ID of the shield information barrier segment.
   */
  shield_information_barrier_segment_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT tool output.
 */
type BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID tool input.
 */
type BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID_INPUT = {
  /**
   * Shield Information Barrier Segment Member Id
   * @description The ID of the shield information barrier segment Member.
   */
  shield_information_barrier_segment_member_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID tool output.
 */
type BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID tool input.
 */
type BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID_INPUT = {
  /**
   * Shield Information Barrier Segment Restriction Id
   * @description The ID of the shield information barrier segment Restriction.
   */
  shield_information_barrier_segment_restriction_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID tool output.
 */
type BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_SLACK_INTEGRATION_MAPPING tool input.
 */
type BOX_DELETE_SLACK_INTEGRATION_MAPPING_INPUT = {
  /**
   * Integration Mapping Id
   * @description An ID of an integration mapping
   */
  integration_mapping_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_SLACK_INTEGRATION_MAPPING tool output.
 */
type BOX_DELETE_SLACK_INTEGRATION_MAPPING_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_TEAMS_INTEGRATION_MAPPING tool input.
 */
type BOX_DELETE_TEAMS_INTEGRATION_MAPPING_INPUT = {
  /**
   * Integration Mapping Id
   * @description An ID of an integration mapping
   */
  integration_mapping_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_TEAMS_INTEGRATION_MAPPING tool output.
 */
type BOX_DELETE_TEAMS_INTEGRATION_MAPPING_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_USER tool input.
 */
type BOX_DELETE_USER_INPUT = {
  /**
   * Force
   * @description Whether the user should be deleted even if this user still own files
   */
  force?: boolean;
  /**
   * Notify
   * @description Whether the user will receive email notification of the deletion
   */
  notify?: boolean;
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_USER tool output.
 */
type BOX_DELETE_USER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DELETE_USER_AVATAR tool input.
 */
type BOX_DELETE_USER_AVATAR_INPUT = {
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_DELETE_USER_AVATAR tool output.
 */
type BOX_DELETE_USER_AVATAR_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DOWNLOAD_FILE tool input.
 */
type BOX_DOWNLOAD_FILE_INPUT = {
  /**
   * Access Token
   * @description An optional access token that can be used to pre-authenticate this request, which means that a download link can be shared with a browser or a third party service without them needing to know how to handle the authentication. When using this parameter, please make sure that the access token is sufficiently scoped down to only allow read access to that file and no other files or folders.
   */
  access_token?: string;
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Version
   * @description The file version to download
   */
  version?: string;
};

/**
 * Type of BOX's BOX_DOWNLOAD_FILE tool output.
 */
type BOX_DOWNLOAD_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_DOWNLOAD_ZIP_ARCHIVE tool input.
 */
type BOX_DOWNLOAD_ZIP_ARCHIVE_INPUT = {
  /**
   * Zip Download Id
   * @description The unique identifier that represent this `zip` archive.
   */
  zip_download_id?: string;
};

/**
 * Type of BOX's BOX_DOWNLOAD_ZIP_ARCHIVE tool output.
 */
type BOX_DOWNLOAD_ZIP_ARCHIVE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_EXTRACT_METADATA_FREEFORM tool input.
 */
type BOX_EXTRACT_METADATA_FREEFORM_INPUT = {
  /**
   * Items
   * @description The items that LLM will process. Currently, you can use files only.
   */
  items?: {
      /**
       * Content
       * @description The content of the item, often the text representation.
       */
      content?: string;
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * Type
       * @description The type of the item. Currently the value can be `file` only.
       * @enum {string}
       */
      type: "file";
  }[];
  /**
   * Prompt
   * @description The prompt provided to a Large Language Model (LLM) in the request. The prompt can be up to 10000 characters long and it can be an XML or a JSON schema.
   */
  prompt?: string;
};

/**
 * Type of BOX's BOX_EXTRACT_METADATA_FREEFORM tool output.
 */
type BOX_EXTRACT_METADATA_FREEFORM_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_EXTRACT_METADATA_STRUCTURED tool input.
 */
type BOX_EXTRACT_METADATA_STRUCTURED_INPUT = {
  /**
   * Fields
   * @description The fields to be extracted from the provided items. For your request to work, you must provide either `metadata_template` or `fields`, but not both.
   */
  fields?: {
      /**
       * Description
       * @description A description of the field.
       */
      description?: string;
      /**
       * Display Name
       * @description The display name of the field.
       */
      displayName?: string;
      /**
       * Key
       * @description A unique identifier for the field.
       */
      key: string;
      /**
       * Options
       * @description A list of options for this field. This is most often used in combination with the enum and multiSelect field types.
       */
      options?: {
          /**
           * Key
           * @description A unique identifier for the field.
           */
          key: string;
      }[];
      /**
       * Prompt
       * @description The context about the key that may include how to find and format it.
       */
      prompt?: string;
      /**
       * Type
       * @description The type of the field. It include but is not limited to string, float, date, enum, and multiSelect.
       */
      type?: string;
  }[];
  /**
   * Items
   * @description The items to be processed by the LLM. Currently you can use files only.
   */
  items?: {
      /**
       * Content
       * @description The content of the item, often the text representation.
       */
      content?: string;
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * Type
       * @description The type of the item. Currently the value can be `file` only.
       * @enum {string}
       */
      type: "file";
  }[];
  /**
   * Metadata  Template  Scope
   * @description The scope of the metadata template that can either be global or enterprise. * The **global** scope is used for templates that are available to any Box enterprise. * The **enterprise** scope represents templates created within a specific enterprise,   containing the ID of that enterprise.
   */
  metadata__template__scope?: string;
  /**
   * Metadata  Template  Template  Key
   * @description The name of the metadata template.
   */
  metadata__template__template__key?: string;
  /**
   * Metadata  Template  Type
   * @description Value is always `metadata_template`.
   * @enum {string}
   */
  metadata__template__type?: "metadata_template";
};

/**
 * Type of BOX's BOX_EXTRACT_METADATA_STRUCTURED tool output.
 */
type BOX_EXTRACT_METADATA_STRUCTURED_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_FIND_APP_ITEM_FOR_SHARED_LINK tool input.
 */
type BOX_FIND_APP_ITEM_FOR_SHARED_LINK_INPUT = object;

/**
 * Type of BOX's BOX_FIND_APP_ITEM_FOR_SHARED_LINK tool output.
 */
type BOX_FIND_APP_ITEM_FOR_SHARED_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_FIND_FILE_FOR_SHARED_LINK tool input.
 */
type BOX_FIND_FILE_FOR_SHARED_LINK_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
};

/**
 * Type of BOX's BOX_FIND_FILE_FOR_SHARED_LINK tool output.
 */
type BOX_FIND_FILE_FOR_SHARED_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_FIND_FOLDER_FOR_SHARED_LINK tool input.
 */
type BOX_FIND_FOLDER_FOR_SHARED_LINK_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
};

/**
 * Type of BOX's BOX_FIND_FOLDER_FOR_SHARED_LINK tool output.
 */
type BOX_FIND_FOLDER_FOR_SHARED_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_FIND_METADATA_TEMPLATE_BY_INSTANCE_ID tool input.
 */
type BOX_FIND_METADATA_TEMPLATE_BY_INSTANCE_ID_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Metadata Instance Id
   * @description The ID of an instance of the metadata template to find.
   */
  metadata_instance_id?: string;
};

/**
 * Type of BOX's BOX_FIND_METADATA_TEMPLATE_BY_INSTANCE_ID tool output.
 */
type BOX_FIND_METADATA_TEMPLATE_BY_INSTANCE_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_FIND_WEB_LINK_FOR_SHARED_LINK tool input.
 */
type BOX_FIND_WEB_LINK_FOR_SHARED_LINK_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
};

/**
 * Type of BOX's BOX_FIND_WEB_LINK_FOR_SHARED_LINK tool output.
 */
type BOX_FIND_WEB_LINK_FOR_SHARED_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_FORCE_APPLY_METADATA_CASCADE_POLICY_TO_FOLDER tool input.
 */
type BOX_FORCE_APPLY_METADATA_CASCADE_POLICY_TO_FOLDER_INPUT = {
  /**
   * Conflict Resolution
   * @description Describes the desired behavior when dealing with the conflict where a metadata template already has an instance applied to a child. * `none` will preserve the existing value on the file * `overwrite` will force-apply the templates values over   any existing values.
   * @enum {string}
   */
  conflict_resolution?: "none" | "overwrite";
  /**
   * Metadata Cascade Policy Id
   * @description The ID of the cascade policy to force-apply.
   */
  metadata_cascade_policy_id?: string;
};

/**
 * Type of BOX's BOX_FORCE_APPLY_METADATA_CASCADE_POLICY_TO_FOLDER tool output.
 */
type BOX_FORCE_APPLY_METADATA_CASCADE_POLICY_TO_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GENERATE_TEXT tool input.
 */
type BOX_GENERATE_TEXT_INPUT = {
  /**
   * Dialogue History
   * @description The history of prompts and answers previously passed to the LLM. This parameter provides the additional context to the LLM when generating the response.
   */
  dialogue_history?: {
      /**
       * Answer
       * @description The answer previously provided by the LLM.
       */
      answer?: string;
      /**
       * Created At
       * Format: date-time
       * @description The ISO date formatted timestamp of when the previous answer to the prompt was created.
       */
      created_at?: string;
      /**
       * Prompt
       * @description The prompt previously provided by the client and answered by the LLM.
       */
      prompt?: string;
  }[];
  /**
   * Items
   * @description The items to be processed by the LLM, often files. The array can include **exactly one** element. **Note**: Box AI handles documents with text representations up to 1MB in size. If the file size exceeds 1MB, the first 1MB of text representation will be processed.
   */
  items?: {
      /**
       * Content
       * @description The content to use as context for generating new text or editing existing text.
       */
      content?: string;
      /**
       * Id
       * @description The ID of the item.
       */
      id: string;
      /**
       * Type
       * @description The type of the item.
       * @enum {string}
       */
      type: "file";
  }[];
  /**
   * Prompt
   * @description The prompt provided by the client to be answered by the LLM. The prompt"s length is limited to 10000 characters.
   */
  prompt?: string;
};

/**
 * Type of BOX's BOX_GENERATE_TEXT tool output.
 */
type BOX_GENERATE_TEXT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_AI_AGENT_BY_AGENT_ID tool input.
 */
type BOX_GET_AI_AGENT_BY_AGENT_ID_INPUT = {
  /**
   * Agent Id
   * @description The agent id to get.
   */
  agent_id?: string;
  /**
   * Fields
   * @description The fields to return in the response.
   */
  fields?: string[];
};

/**
 * Type of BOX's BOX_GET_AI_AGENT_BY_AGENT_ID tool output.
 */
type BOX_GET_AI_AGENT_BY_AGENT_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_AI_AGENT_DEFAULT_CONFIGURATION tool input.
 */
type BOX_GET_AI_AGENT_DEFAULT_CONFIGURATION_INPUT = {
  /**
   * Language
   * @description The ISO language code to return the agent config for. If the language is not supported the default agent config is returned.
   */
  language?: string;
  /**
   * Mode
   * @description The mode to filter the agent config to return.
   * @enum {string}
   */
  mode?: "ask" | "extract" | "extract_structured" | "text_gen";
  /**
   * Model
   * @description The model to return the default agent config for.
   */
  model?: string;
};

/**
 * Type of BOX's BOX_GET_AI_AGENT_DEFAULT_CONFIGURATION tool output.
 */
type BOX_GET_AI_AGENT_DEFAULT_CONFIGURATION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_ALLOWED_COLLABORATION_DOMAIN tool input.
 */
type BOX_GET_ALLOWED_COLLABORATION_DOMAIN_INPUT = {
  /**
   * Collaboration Whitelist Entry Id
   * @description The ID of the entry in the list.
   */
  collaboration_whitelist_entry_id?: string;
};

/**
 * Type of BOX's BOX_GET_ALLOWED_COLLABORATION_DOMAIN tool output.
 */
type BOX_GET_ALLOWED_COLLABORATION_DOMAIN_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_BOX_SIGN_REQUEST_BY_ID tool input.
 */
type BOX_GET_BOX_SIGN_REQUEST_BY_ID_INPUT = {
  /**
   * Sign Request Id
   * @description The ID of the signature request
   */
  sign_request_id?: string;
};

/**
 * Type of BOX's BOX_GET_BOX_SIGN_REQUEST_BY_ID tool output.
 */
type BOX_GET_BOX_SIGN_REQUEST_BY_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_BOX_SIGN_TEMPLATE_BY_ID tool input.
 */
type BOX_GET_BOX_SIGN_TEMPLATE_BY_ID_INPUT = {
  /**
   * Template Id
   * @description The ID of a Box Sign template.
   */
  template_id?: string;
};

/**
 * Type of BOX's BOX_GET_BOX_SIGN_TEMPLATE_BY_ID tool output.
 */
type BOX_GET_BOX_SIGN_TEMPLATE_BY_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_CLASSIFICATION_ON_FILE tool input.
 */
type BOX_GET_CLASSIFICATION_ON_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_GET_CLASSIFICATION_ON_FILE tool output.
 */
type BOX_GET_CLASSIFICATION_ON_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_CLASSIFICATION_ON_FOLDER tool input.
 */
type BOX_GET_CLASSIFICATION_ON_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_GET_CLASSIFICATION_ON_FOLDER tool output.
 */
type BOX_GET_CLASSIFICATION_ON_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_COLLABORATION tool input.
 */
type BOX_GET_COLLABORATION_INPUT = {
  /**
   * Collaboration Id
   * @description The ID of the collaboration
   */
  collaboration_id?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
};

/**
 * Type of BOX's BOX_GET_COLLABORATION tool output.
 */
type BOX_GET_COLLABORATION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_COLLECTION_BY_ID tool input.
 */
type BOX_GET_COLLECTION_BY_ID_INPUT = {
  /**
   * Collection Id
   * @description The ID of the collection.
   */
  collection_id?: string;
};

/**
 * Type of BOX's BOX_GET_COLLECTION_BY_ID tool output.
 */
type BOX_GET_COLLECTION_BY_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_COMMENT tool input.
 */
type BOX_GET_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
};

/**
 * Type of BOX's BOX_GET_COMMENT tool output.
 */
type BOX_GET_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_CURRENT_USER tool input.
 */
type BOX_GET_CURRENT_USER_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
};

/**
 * Type of BOX's BOX_GET_CURRENT_USER tool output.
 */
type BOX_GET_CURRENT_USER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_DEVICE_PIN tool input.
 */
type BOX_GET_DEVICE_PIN_INPUT = {
  /**
   * Device Pinner Id
   * @description The ID of the device pin
   */
  device_pinner_id?: string;
};

/**
 * Type of BOX's BOX_GET_DEVICE_PIN tool output.
 */
type BOX_GET_DEVICE_PIN_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_EVENTS_LONG_POLL_ENDPOINT tool input.
 */
type BOX_GET_EVENTS_LONG_POLL_ENDPOINT_INPUT = object;

/**
 * Type of BOX's BOX_GET_EVENTS_LONG_POLL_ENDPOINT tool output.
 */
type BOX_GET_EVENTS_LONG_POLL_ENDPOINT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_FILES_UNDER_RETENTION tool input.
 */
type BOX_GET_FILES_UNDER_RETENTION_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Retention Policy Assignment Id
   * @description The ID of the retention policy assignment.
   */
  retention_policy_assignment_id?: string;
};

/**
 * Type of BOX's BOX_GET_FILES_UNDER_RETENTION tool output.
 */
type BOX_GET_FILES_UNDER_RETENTION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_FILE_INFORMATION tool input.
 */
type BOX_GET_FILE_INFORMATION_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested. Additionally this field can be used to query any metadata applied to the file by specifying the `metadata` field as well as the scope and key of the template to retrieve, for example `?fields=metadata.enterprise_12345.contractTemplate`.
   */
  fields?: string[];
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_GET_FILE_INFORMATION tool output.
 */
type BOX_GET_FILE_INFORMATION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_FILE_REQUEST tool input.
 */
type BOX_GET_FILE_REQUEST_INPUT = {
  /**
   * File Request Id
   * @description The unique identifier that represent a file request. The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/filerequest/123` the `file_request_id` is `123`.
   */
  file_request_id?: string;
};

/**
 * Type of BOX's BOX_GET_FILE_REQUEST tool output.
 */
type BOX_GET_FILE_REQUEST_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_FILE_THUMBNAIL tool input.
 */
type BOX_GET_FILE_THUMBNAIL_INPUT = {
  /**
   * Extension
   * @description The file format for the thumbnail
   * @enum {string}
   */
  extension?: "jpg" | "png";
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Max Height
   * @description The maximum height of the thumbnail
   */
  max_height?: number;
  /**
   * Max Width
   * @description The maximum width of the thumbnail
   */
  max_width?: number;
  /**
   * Min Height
   * @description The minimum height of the thumbnail
   */
  min_height?: number;
  /**
   * Min Width
   * @description The minimum width of the thumbnail
   */
  min_width?: number;
};

/**
 * Type of BOX's BOX_GET_FILE_THUMBNAIL tool output.
 */
type BOX_GET_FILE_THUMBNAIL_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_FILE_VERSION tool input.
 */
type BOX_GET_FILE_VERSION_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * File Version Id
   * @description The ID of the file version
   */
  file_version_id?: string;
};

/**
 * Type of BOX's BOX_GET_FILE_VERSION tool output.
 */
type BOX_GET_FILE_VERSION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_FILE_VERSIONS_UNDER_RETENTION tool input.
 */
type BOX_GET_FILE_VERSIONS_UNDER_RETENTION_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Retention Policy Assignment Id
   * @description The ID of the retention policy assignment.
   */
  retention_policy_assignment_id?: string;
};

/**
 * Type of BOX's BOX_GET_FILE_VERSIONS_UNDER_RETENTION tool output.
 */
type BOX_GET_FILE_VERSIONS_UNDER_RETENTION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_FILE_VERSION_LEGAL_HOLD tool input.
 */
type BOX_GET_FILE_VERSION_LEGAL_HOLD_INPUT = {
  /**
   * File Version Legal Hold Id
   * @description The ID of the file version legal hold
   */
  file_version_legal_hold_id?: string;
};

/**
 * Type of BOX's BOX_GET_FILE_VERSION_LEGAL_HOLD tool output.
 */
type BOX_GET_FILE_VERSION_LEGAL_HOLD_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_FOLDER_INFORMATION tool input.
 */
type BOX_GET_FOLDER_INFORMATION_INPUT = {
  /**
   * Direction
   * @description The direction to sort results in. This can be either in alphabetical ascending (`ASC`) or descending (`DESC`) order.
   * @enum {string}
   */
  direction?: "ASC" | "DESC";
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested. Additionally this field can be used to query any metadata applied to the file by specifying the `metadata` field as well as the scope and key of the template to retrieve, for example `?fields=metadata.enterprise_12345.contractTemplate`.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
  /**
   * Sort
   * @description Defines the **second** attribute by which items are sorted. The folder type affects the way the items are sorted:   * **Standard folder**:   Items are always sorted by   their `type` first, with   folders listed before files,   and files listed   before web links.   * **Root folder**:   This parameter is not supported   for marker-based pagination   on the root folder   (the folder with an `id` of `0`).   * **Shared folder with parent path   to the associated folder visible to   the collaborator**:   Items are always sorted by   their `type` first, with   folders listed before files,   and files listed   before web links.
   * @enum {string}
   */
  sort?: "date" | "id" | "name" | "size";
};

/**
 * Type of BOX's BOX_GET_FOLDER_INFORMATION tool output.
 */
type BOX_GET_FOLDER_INFORMATION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_GROUP tool input.
 */
type BOX_GET_GROUP_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Group Id
   * @description The ID of the group.
   */
  group_id?: string;
};

/**
 * Type of BOX's BOX_GET_GROUP tool output.
 */
type BOX_GET_GROUP_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_GROUP_MEMBERSHIP tool input.
 */
type BOX_GET_GROUP_MEMBERSHIP_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Group Membership Id
   * @description The ID of the group membership.
   */
  group_membership_id?: string;
};

/**
 * Type of BOX's BOX_GET_GROUP_MEMBERSHIP tool output.
 */
type BOX_GET_GROUP_MEMBERSHIP_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_LEGAL_HOLD_POLICY tool input.
 */
type BOX_GET_LEGAL_HOLD_POLICY_INPUT = {
  /**
   * Legal Hold Policy Id
   * @description The ID of the legal hold policy
   */
  legal_hold_policy_id?: string;
};

/**
 * Type of BOX's BOX_GET_LEGAL_HOLD_POLICY tool output.
 */
type BOX_GET_LEGAL_HOLD_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_LEGAL_HOLD_POLICY_ASSIGNMENT tool input.
 */
type BOX_GET_LEGAL_HOLD_POLICY_ASSIGNMENT_INPUT = {
  /**
   * Legal Hold Policy Assignment Id
   * @description The ID of the legal hold policy assignment
   */
  legal_hold_policy_assignment_id?: string;
};

/**
 * Type of BOX's BOX_GET_LEGAL_HOLD_POLICY_ASSIGNMENT tool output.
 */
type BOX_GET_LEGAL_HOLD_POLICY_ASSIGNMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_METADATA_CASCADE_POLICY tool input.
 */
type BOX_GET_METADATA_CASCADE_POLICY_INPUT = {
  /**
   * Metadata Cascade Policy Id
   * @description The ID of the metadata cascade policy.
   */
  metadata_cascade_policy_id?: string;
};

/**
 * Type of BOX's BOX_GET_METADATA_CASCADE_POLICY tool output.
 */
type BOX_GET_METADATA_CASCADE_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_METADATA_INSTANCE_ON_FILE tool input.
 */
type BOX_GET_METADATA_INSTANCE_ON_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Scope
   * @description The scope of the metadata template
   * @enum {string}
   */
  scope?: "enterprise" | "global";
  /**
   * Template Key
   * @description The name of the metadata template
   */
  template_key?: string;
};

/**
 * Type of BOX's BOX_GET_METADATA_INSTANCE_ON_FILE tool output.
 */
type BOX_GET_METADATA_INSTANCE_ON_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_METADATA_INSTANCE_ON_FOLDER tool input.
 */
type BOX_GET_METADATA_INSTANCE_ON_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Scope
   * @description The scope of the metadata template
   * @enum {string}
   */
  scope?: "enterprise" | "global";
  /**
   * Template Key
   * @description The name of the metadata template
   */
  template_key?: string;
};

/**
 * Type of BOX's BOX_GET_METADATA_INSTANCE_ON_FOLDER tool output.
 */
type BOX_GET_METADATA_INSTANCE_ON_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_METADATA_TEMPLATE_BY_ID tool input.
 */
type BOX_GET_METADATA_TEMPLATE_BY_ID_INPUT = {
  /**
   * Template Id
   * @description The ID of the template
   */
  template_id?: string;
};

/**
 * Type of BOX's BOX_GET_METADATA_TEMPLATE_BY_ID tool output.
 */
type BOX_GET_METADATA_TEMPLATE_BY_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_METADATA_TEMPLATE_BY_NAME tool input.
 */
type BOX_GET_METADATA_TEMPLATE_BY_NAME_INPUT = {
  /**
   * Scope
   * @description The scope of the metadata template
   * @enum {string}
   */
  scope?: "enterprise" | "global";
  /**
   * Template Key
   * @description The name of the metadata template
   */
  template_key?: string;
};

/**
 * Type of BOX's BOX_GET_METADATA_TEMPLATE_BY_NAME tool output.
 */
type BOX_GET_METADATA_TEMPLATE_BY_NAME_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_RETENTION_ON_FILE tool input.
 */
type BOX_GET_RETENTION_ON_FILE_INPUT = {
  /**
   * File Version Retention Id
   * @description The ID of the file version retention
   */
  file_version_retention_id?: string;
};

/**
 * Type of BOX's BOX_GET_RETENTION_ON_FILE tool output.
 */
type BOX_GET_RETENTION_ON_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_RETENTION_POLICY tool input.
 */
type BOX_GET_RETENTION_POLICY_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Retention Policy Id
   * @description The ID of the retention policy.
   */
  retention_policy_id?: string;
};

/**
 * Type of BOX's BOX_GET_RETENTION_POLICY tool output.
 */
type BOX_GET_RETENTION_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_RETENTION_POLICY_ASSIGNMENT tool input.
 */
type BOX_GET_RETENTION_POLICY_ASSIGNMENT_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Retention Policy Assignment Id
   * @description The ID of the retention policy assignment.
   */
  retention_policy_assignment_id?: string;
};

/**
 * Type of BOX's BOX_GET_RETENTION_POLICY_ASSIGNMENT tool output.
 */
type BOX_GET_RETENTION_POLICY_ASSIGNMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_SHARED_LINK_FOR_FILE tool input.
 */
type BOX_GET_SHARED_LINK_FOR_FILE_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_GET_SHARED_LINK_FOR_FILE tool output.
 */
type BOX_GET_SHARED_LINK_FOR_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_SHARED_LINK_FOR_FOLDER tool input.
 */
type BOX_GET_SHARED_LINK_FOR_FOLDER_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_GET_SHARED_LINK_FOR_FOLDER tool output.
 */
type BOX_GET_SHARED_LINK_FOR_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_SHARED_LINK_FOR_WEB_LINK tool input.
 */
type BOX_GET_SHARED_LINK_FOR_WEB_LINK_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * Web Link Id
   * @description The ID of the web link.
   */
  web_link_id?: string;
};

/**
 * Type of BOX's BOX_GET_SHARED_LINK_FOR_WEB_LINK tool output.
 */
type BOX_GET_SHARED_LINK_FOR_WEB_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_SHIELD_INFORMATION_BARRIER_REPORT_BY_ID tool input.
 */
type BOX_GET_SHIELD_INFORMATION_BARRIER_REPORT_BY_ID_INPUT = {
  /**
   * Shield Information Barrier Report Id
   * @description The ID of the shield information barrier Report.
   */
  shield_information_barrier_report_id?: string;
};

/**
 * Type of BOX's BOX_GET_SHIELD_INFORMATION_BARRIER_REPORT_BY_ID tool output.
 */
type BOX_GET_SHIELD_INFORMATION_BARRIER_REPORT_BY_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID tool input.
 */
type BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID_INPUT = {
  /**
   * Shield Information Barrier Segment Member Id
   * @description The ID of the shield information barrier segment Member.
   */
  shield_information_barrier_segment_member_id?: string;
};

/**
 * Type of BOX's BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID tool output.
 */
type BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID tool input.
 */
type BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID_INPUT = {
  /**
   * Shield Information Barrier Segment Restriction Id
   * @description The ID of the shield information barrier segment Restriction.
   */
  shield_information_barrier_segment_restriction_id?: string;
};

/**
 * Type of BOX's BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID tool output.
 */
type BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID tool input.
 */
type BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID_INPUT = {
  /**
   * Shield Information Barrier Segment Id
   * @description The ID of the shield information barrier segment.
   */
  shield_information_barrier_segment_id?: string;
};

/**
 * Type of BOX's BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID tool output.
 */
type BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_SHIELD_INFORMATION_BARRIER_WITH_SPECIFIED_ID tool input.
 */
type BOX_GET_SHIELD_INFORMATION_BARRIER_WITH_SPECIFIED_ID_INPUT = {
  /**
   * Shield Information Barrier Id
   * @description The ID of the shield information barrier.
   */
  shield_information_barrier_id?: string;
};

/**
 * Type of BOX's BOX_GET_SHIELD_INFORMATION_BARRIER_WITH_SPECIFIED_ID tool output.
 */
type BOX_GET_SHIELD_INFORMATION_BARRIER_WITH_SPECIFIED_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_STORAGE_POLICY tool input.
 */
type BOX_GET_STORAGE_POLICY_INPUT = {
  /**
   * Storage Policy Id
   * @description The ID of the storage policy.
   */
  storage_policy_id?: string;
};

/**
 * Type of BOX's BOX_GET_STORAGE_POLICY tool output.
 */
type BOX_GET_STORAGE_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_STORAGE_POLICY_ASSIGNMENT tool input.
 */
type BOX_GET_STORAGE_POLICY_ASSIGNMENT_INPUT = {
  /**
   * Storage Policy Assignment Id
   * @description The ID of the storage policy assignment.
   */
  storage_policy_assignment_id?: string;
};

/**
 * Type of BOX's BOX_GET_STORAGE_POLICY_ASSIGNMENT tool output.
 */
type BOX_GET_STORAGE_POLICY_ASSIGNMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_TASK tool input.
 */
type BOX_GET_TASK_INPUT = {
  /**
   * Task Id
   * @description The ID of the task.
   */
  task_id?: string;
};

/**
 * Type of BOX's BOX_GET_TASK tool output.
 */
type BOX_GET_TASK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_TASK_ASSIGNMENT tool input.
 */
type BOX_GET_TASK_ASSIGNMENT_INPUT = {
  /**
   * Task Assignment Id
   * @description The ID of the task assignment.
   */
  task_assignment_id?: string;
};

/**
 * Type of BOX's BOX_GET_TASK_ASSIGNMENT tool output.
 */
type BOX_GET_TASK_ASSIGNMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_TERMS_OF_SERVICE tool input.
 */
type BOX_GET_TERMS_OF_SERVICE_INPUT = {
  /**
   * Terms Of Service Id
   * @description The ID of the terms of service.
   */
  terms_of_service_id?: string;
};

/**
 * Type of BOX's BOX_GET_TERMS_OF_SERVICE tool output.
 */
type BOX_GET_TERMS_OF_SERVICE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_TRASHED_FILE tool input.
 */
type BOX_GET_TRASHED_FILE_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_GET_TRASHED_FILE tool output.
 */
type BOX_GET_TRASHED_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_TRASHED_FOLDER tool input.
 */
type BOX_GET_TRASHED_FOLDER_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_GET_TRASHED_FOLDER tool output.
 */
type BOX_GET_TRASHED_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_TRASHED_WEB_LINK tool input.
 */
type BOX_GET_TRASHED_WEB_LINK_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Web Link Id
   * @description The ID of the web link.
   */
  web_link_id?: string;
};

/**
 * Type of BOX's BOX_GET_TRASHED_WEB_LINK tool output.
 */
type BOX_GET_TRASHED_WEB_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_UPLOAD_SESSION tool input.
 */
type BOX_GET_UPLOAD_SESSION_INPUT = {
  /**
   * Upload Session Id
   * @description The ID of the upload session.
   */
  upload_session_id?: string;
};

/**
 * Type of BOX's BOX_GET_UPLOAD_SESSION tool output.
 */
type BOX_GET_UPLOAD_SESSION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_USER tool input.
 */
type BOX_GET_USER_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_GET_USER tool output.
 */
type BOX_GET_USER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_USER_AVATAR tool input.
 */
type BOX_GET_USER_AVATAR_INPUT = {
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_GET_USER_AVATAR tool output.
 */
type BOX_GET_USER_AVATAR_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_USER_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS tool input.
 */
type BOX_GET_USER_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_INPUT = {
  /**
   * Collaboration Whitelist Exempt Target Id
   * @description The ID of the exemption to the list.
   */
  collaboration_whitelist_exempt_target_id?: string;
};

/**
 * Type of BOX's BOX_GET_USER_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS tool output.
 */
type BOX_GET_USER_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_USER_INVITE_STATUS tool input.
 */
type BOX_GET_USER_INVITE_STATUS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Invite Id
   * @description The ID of an invite.
   */
  invite_id?: string;
};

/**
 * Type of BOX's BOX_GET_USER_INVITE_STATUS tool output.
 */
type BOX_GET_USER_INVITE_STATUS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_WATERMARK_FOR_FOLDER tool input.
 */
type BOX_GET_WATERMARK_FOR_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_GET_WATERMARK_FOR_FOLDER tool output.
 */
type BOX_GET_WATERMARK_FOR_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_WATERMARK_ON_FILE tool input.
 */
type BOX_GET_WATERMARK_ON_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_GET_WATERMARK_ON_FILE tool output.
 */
type BOX_GET_WATERMARK_ON_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_WEBHOOK tool input.
 */
type BOX_GET_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description The ID of the webhook.
   */
  webhook_id?: string;
};

/**
 * Type of BOX's BOX_GET_WEBHOOK tool output.
 */
type BOX_GET_WEBHOOK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_WEB_LINK tool input.
 */
type BOX_GET_WEB_LINK_INPUT = {
  /**
   * Web Link Id
   * @description The ID of the web link.
   */
  web_link_id?: string;
};

/**
 * Type of BOX's BOX_GET_WEB_LINK tool output.
 */
type BOX_GET_WEB_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_GET_ZIP_DOWNLOAD_STATUS tool input.
 */
type BOX_GET_ZIP_DOWNLOAD_STATUS_INPUT = {
  /**
   * Zip Download Id
   * @description The unique identifier that represent this `zip` archive.
   */
  zip_download_id?: string;
};

/**
 * Type of BOX's BOX_GET_ZIP_DOWNLOAD_STATUS tool output.
 */
type BOX_GET_ZIP_DOWNLOAD_STATUS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_AI_AGENTS tool input.
 */
type BOX_LIST_AI_AGENTS_INPUT = {
  /**
   * Agent State
   * @description The state of the agents to return. Possible values are: `enabled`, `disabled` and `enabled_for_selected_users`.
   */
  agent_state?: string[];
  /**
   * Fields
   * @description The fields to return in the response.
   */
  fields?: string[];
  /**
   * Include Box Default
   * @description Whether to include the Box default agents in the response.
   * @default false
   */
  include_box_default: boolean;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results.
   */
  marker?: string;
  /**
   * Mode
   * @description The mode to filter the agent config to return. Possible values are: `ask`, `text_gen`, and `extract`.
   */
  mode?: string[];
};

/**
 * Type of BOX's BOX_LIST_AI_AGENTS tool output.
 */
type BOX_LIST_AI_AGENTS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_ALLOWED_COLLABORATION_DOMAINS tool input.
 */
type BOX_LIST_ALLOWED_COLLABORATION_DOMAINS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_ALLOWED_COLLABORATION_DOMAINS tool output.
 */
type BOX_LIST_ALLOWED_COLLABORATION_DOMAINS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_ALL_CLASSIFICATIONS tool input.
 */
type BOX_LIST_ALL_CLASSIFICATIONS_INPUT = object;

/**
 * Type of BOX's BOX_LIST_ALL_CLASSIFICATIONS tool output.
 */
type BOX_LIST_ALL_CLASSIFICATIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_ALL_COLLECTIONS tool input.
 */
type BOX_LIST_ALL_COLLECTIONS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
};

/**
 * Type of BOX's BOX_LIST_ALL_COLLECTIONS tool output.
 */
type BOX_LIST_ALL_COLLECTIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_ALL_FILE_VERSIONS tool input.
 */
type BOX_LIST_ALL_FILE_VERSIONS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
};

/**
 * Type of BOX's BOX_LIST_ALL_FILE_VERSIONS tool output.
 */
type BOX_LIST_ALL_FILE_VERSIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_ALL_GLOBAL_METADATA_TEMPLATES tool input.
 */
type BOX_LIST_ALL_GLOBAL_METADATA_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_ALL_GLOBAL_METADATA_TEMPLATES tool output.
 */
type BOX_LIST_ALL_GLOBAL_METADATA_TEMPLATES_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_ALL_LEGAL_HOLD_POLICIES tool input.
 */
type BOX_LIST_ALL_LEGAL_HOLD_POLICIES_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Policy Name
   * @description Limits results to policies for which the names start with this search term. This is a case-insensitive prefix.
   */
  policy_name?: string;
};

/**
 * Type of BOX's BOX_LIST_ALL_LEGAL_HOLD_POLICIES tool output.
 */
type BOX_LIST_ALL_LEGAL_HOLD_POLICIES_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_ALL_METADATA_TEMPLATES_FOR_ENTERPRISE tool input.
 */
type BOX_LIST_ALL_METADATA_TEMPLATES_FOR_ENTERPRISE_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_ALL_METADATA_TEMPLATES_FOR_ENTERPRISE tool output.
 */
type BOX_LIST_ALL_METADATA_TEMPLATES_FOR_ENTERPRISE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_ALL_WEBHOOKS tool input.
 */
type BOX_LIST_ALL_WEBHOOKS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_ALL_WEBHOOKS tool output.
 */
type BOX_LIST_ALL_WEBHOOKS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_BOX_SIGN_REQUESTS tool input.
 */
type BOX_LIST_BOX_SIGN_REQUESTS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Senders
   * @description A list of sender emails to filter the signature requests by sender. If provided, `shared_requests` must be set to `true`.
   */
  senders?: string[];
  /**
   * Shared Requests
   * @description If set to `true`, only includes requests that user is not an owner, but user is a collaborator. Collaborator access is determined by the user access level of the sign files of the request. Default is `false`. Must be set to `true` if `senders` are provided.
   * @default false
   */
  shared_requests: boolean;
};

/**
 * Type of BOX's BOX_LIST_BOX_SIGN_REQUESTS tool output.
 */
type BOX_LIST_BOX_SIGN_REQUESTS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_BOX_SIGN_TEMPLATES tool input.
 */
type BOX_LIST_BOX_SIGN_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_BOX_SIGN_TEMPLATES tool output.
 */
type BOX_LIST_BOX_SIGN_TEMPLATES_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_BOX_SKILL_CARDS_ON_FILE tool input.
 */
type BOX_LIST_BOX_SKILL_CARDS_ON_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_LIST_BOX_SKILL_CARDS_ON_FILE tool output.
 */
type BOX_LIST_BOX_SKILL_CARDS_ON_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_COLLECTION_ITEMS tool input.
 */
type BOX_LIST_COLLECTION_ITEMS_INPUT = {
  /**
   * Collection Id
   * @description The ID of the collection.
   */
  collection_id?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
};

/**
 * Type of BOX's BOX_LIST_COLLECTION_ITEMS tool output.
 */
type BOX_LIST_COLLECTION_ITEMS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_ENTERPRISE_DEVICE_PINS tool input.
 */
type BOX_LIST_ENTERPRISE_DEVICE_PINS_INPUT = {
  /**
   * Direction
   * @description The direction to sort results in. This can be either in alphabetical ascending (`ASC`) or descending (`DESC`) order.
   * @enum {string}
   */
  direction?: "ASC" | "DESC";
  /**
   * Enterprise Id
   * @description The ID of the enterprise
   */
  enterprise_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_ENTERPRISE_DEVICE_PINS tool output.
 */
type BOX_LIST_ENTERPRISE_DEVICE_PINS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_ENTERPRISE_USERS tool input.
 */
type BOX_LIST_ENTERPRISE_USERS_INPUT = {
  /**
   * External App User Id
   * @description Limits the results to app users with the given `external_app_user_id` value. When creating an app user, an `external_app_user_id` value can be set. This value can then be used in this endpoint to find any users that match that `external_app_user_id` value.
   */
  external_app_user_id?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Filter Term
   * @description Limits the results to only users who"s `name` or `login` start with the search term. For externally managed users, the search term needs to completely match the in order to find the user, and it will only return one user at a time.
   */
  filter_term?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
  /**
   * Usemarker
   * @description Specifies whether to use marker-based pagination instead of offset-based pagination. Only one pagination method can be used at a time. By setting this value to true, the API will return a `marker` field that can be passed as a parameter to this endpoint to get the next page of the response.
   */
  usemarker?: boolean;
  /**
   * User Type
   * @description Limits the results to the kind of user specified. * `all` returns every kind of user for whom the   `login` or `name` partially matches the   `filter_term`. It will only return an external user   if the login matches the `filter_term` completely,   and in that case it will only return that user. * `managed` returns all managed and app users for whom   the `login` or `name` partially matches the   `filter_term`. * `external` returns all external users for whom the   `login` matches the `filter_term` exactly.
   * @enum {string}
   */
  user_type?: "all" | "external" | "managed";
};

/**
 * Type of BOX's BOX_LIST_ENTERPRISE_USERS tool output.
 */
type BOX_LIST_ENTERPRISE_USERS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_FILE_APP_ITEM_ASSOCIATIONS tool input.
 */
type BOX_LIST_FILE_APP_ITEM_ASSOCIATIONS_INPUT = {
  /**
   * Application Type
   * @description If given, only return app items for this application type
   */
  application_type?: string;
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_FILE_APP_ITEM_ASSOCIATIONS tool output.
 */
type BOX_LIST_FILE_APP_ITEM_ASSOCIATIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_FILE_COLLABORATIONS tool input.
 */
type BOX_LIST_FILE_COLLABORATIONS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_FILE_COLLABORATIONS tool output.
 */
type BOX_LIST_FILE_COLLABORATIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_FILE_COMMENTS tool input.
 */
type BOX_LIST_FILE_COMMENTS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
};

/**
 * Type of BOX's BOX_LIST_FILE_COMMENTS tool output.
 */
type BOX_LIST_FILE_COMMENTS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_FILE_VERSION_LEGAL_HOLDS tool input.
 */
type BOX_LIST_FILE_VERSION_LEGAL_HOLDS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Policy Id
   * @description The ID of the legal hold policy to get the file version legal holds for.
   */
  policy_id?: string;
};

/**
 * Type of BOX's BOX_LIST_FILE_VERSION_LEGAL_HOLDS tool output.
 */
type BOX_LIST_FILE_VERSION_LEGAL_HOLDS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_FILE_VERSION_RETENTIONS tool input.
 */
type BOX_LIST_FILE_VERSION_RETENTIONS_INPUT = {
  /**
   * Disposition Action
   * @description Filters results by the retention policy with this disposition action.
   * @enum {string}
   */
  disposition_action?: "permanently_delete" | "remove_retention";
  /**
   * Disposition After
   * @description Filters results by files that will have their disposition come into effect after this date.
   */
  disposition_after?: string;
  /**
   * Disposition Before
   * @description Filters results by files that will have their disposition come into effect before this date.
   */
  disposition_before?: string;
  /**
   * File Id
   * @description Filters results by files with this ID.
   */
  file_id?: string;
  /**
   * File Version Id
   * @description Filters results by file versions with this ID.
   */
  file_version_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Policy Id
   * @description Filters results by the retention policy with this ID.
   */
  policy_id?: string;
};

/**
 * Type of BOX's BOX_LIST_FILE_VERSION_RETENTIONS tool output.
 */
type BOX_LIST_FILE_VERSION_RETENTIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_FOLDER_APP_ITEM_ASSOCIATIONS tool input.
 */
type BOX_LIST_FOLDER_APP_ITEM_ASSOCIATIONS_INPUT = {
  /**
   * Application Type
   * @description If given, returns only app items for this application type
   */
  application_type?: string;
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_FOLDER_APP_ITEM_ASSOCIATIONS tool output.
 */
type BOX_LIST_FOLDER_APP_ITEM_ASSOCIATIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_FOLDER_COLLABORATIONS tool input.
 */
type BOX_LIST_FOLDER_COLLABORATIONS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`.
   */
  folder_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_FOLDER_COLLABORATIONS tool output.
 */
type BOX_LIST_FOLDER_COLLABORATIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_FOLDER_LOCKS tool input.
 */
type BOX_LIST_FOLDER_LOCKS_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_LIST_FOLDER_LOCKS tool output.
 */
type BOX_LIST_FOLDER_LOCKS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_GROUPS_FOR_ENTERPRISE tool input.
 */
type BOX_LIST_GROUPS_FOR_ENTERPRISE_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Filter Term
   * @description Limits the results to only groups whose `name` starts with the search term.
   */
  filter_term?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
};

/**
 * Type of BOX's BOX_LIST_GROUPS_FOR_ENTERPRISE tool output.
 */
type BOX_LIST_GROUPS_FOR_ENTERPRISE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_GROUP_COLLABORATIONS tool input.
 */
type BOX_LIST_GROUP_COLLABORATIONS_INPUT = {
  /**
   * Group Id
   * @description The ID of the group.
   */
  group_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
};

/**
 * Type of BOX's BOX_LIST_GROUP_COLLABORATIONS tool output.
 */
type BOX_LIST_GROUP_COLLABORATIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_ITEMS_IN_FOLDER tool input.
 */
type BOX_LIST_ITEMS_IN_FOLDER_INPUT = {
  /**
   * Direction
   * @description The direction to sort results in. This can be either in alphabetical ascending (`ASC`) or descending (`DESC`) order.
   * @enum {string}
   */
  direction?: "ASC" | "DESC";
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested. Additionally this field can be used to query any metadata applied to the file by specifying the `metadata` field as well as the scope and key of the template to retrieve, for example `?fields=metadata.enterprise_12345.contractTemplate`.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
  /**
   * Sort
   * @description Defines the **second** attribute by which items are sorted. The folder type affects the way the items are sorted:   * **Standard folder**:   Items are always sorted by   their `type` first, with   folders listed before files,   and files listed   before web links.   * **Root folder**:   This parameter is not supported   for marker-based pagination   on the root folder   (the folder with an `id` of `0`).   * **Shared folder with parent path   to the associated folder visible to   the collaborator**:   Items are always sorted by   their `type` first, with   folders listed before files,   and files listed   before web links.
   * @enum {string}
   */
  sort?: "date" | "id" | "name" | "size";
  /**
   * Usemarker
   * @description Specifies whether to use marker-based pagination instead of offset-based pagination. Only one pagination method can be used at a time. By setting this value to true, the API will return a `marker` field that can be passed as a parameter to this endpoint to get the next page of the response.
   */
  usemarker?: boolean;
};

/**
 * Type of BOX's BOX_LIST_ITEMS_IN_FOLDER tool output.
 */
type BOX_LIST_ITEMS_IN_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_LEGAL_HOLD_POLICY_ASSIGNMENTS tool input.
 */
type BOX_LIST_LEGAL_HOLD_POLICY_ASSIGNMENTS_INPUT = {
  /**
   * Assign To Id
   * @description Filters the results by the ID of item the policy was applied to.
   */
  assign_to_id?: string;
  /**
   * Assign To Type
   * @description Filters the results by the type of item the policy was applied to.
   * @enum {string}
   */
  assign_to_type?: "file" | "file_version" | "folder" | "user";
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Policy Id
   * @description The ID of the legal hold policy
   */
  policy_id?: string;
};

/**
 * Type of BOX's BOX_LIST_LEGAL_HOLD_POLICY_ASSIGNMENTS tool output.
 */
type BOX_LIST_LEGAL_HOLD_POLICY_ASSIGNMENTS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_MEMBERS_OF_GROUP tool input.
 */
type BOX_LIST_MEMBERS_OF_GROUP_INPUT = {
  /**
   * Group Id
   * @description The ID of the group.
   */
  group_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
};

/**
 * Type of BOX's BOX_LIST_MEMBERS_OF_GROUP tool output.
 */
type BOX_LIST_MEMBERS_OF_GROUP_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_METADATA_CASCADE_POLICIES tool input.
 */
type BOX_LIST_METADATA_CASCADE_POLICIES_INPUT = {
  /**
   * Folder Id
   * @description Specifies which folder to return policies for. This can not be used on the root folder with ID `0`.
   */
  folder_id?: string;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
  /**
   * Owner Enterprise Id
   * @description The ID of the enterprise ID for which to find metadata cascade policies. If not specified, it defaults to the current enterprise.
   */
  owner_enterprise_id?: string;
};

/**
 * Type of BOX's BOX_LIST_METADATA_CASCADE_POLICIES tool output.
 */
type BOX_LIST_METADATA_CASCADE_POLICIES_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_METADATA_INSTANCES_ON_FILE tool input.
 */
type BOX_LIST_METADATA_INSTANCES_ON_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_LIST_METADATA_INSTANCES_ON_FILE tool output.
 */
type BOX_LIST_METADATA_INSTANCES_ON_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_METADATA_INSTANCES_ON_FOLDER tool input.
 */
type BOX_LIST_METADATA_INSTANCES_ON_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_LIST_METADATA_INSTANCES_ON_FOLDER tool output.
 */
type BOX_LIST_METADATA_INSTANCES_ON_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_PARTS tool input.
 */
type BOX_LIST_PARTS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
  /**
   * Upload Session Id
   * @description The ID of the upload session.
   */
  upload_session_id?: string;
};

/**
 * Type of BOX's BOX_LIST_PARTS tool output.
 */
type BOX_LIST_PARTS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_PENDING_COLLABORATIONS tool input.
 */
type BOX_LIST_PENDING_COLLABORATIONS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
  /**
   * Status
   * @description The status of the collaborations to retrieve
   * @enum {string}
   */
  status?: "pending";
};

/**
 * Type of BOX's BOX_LIST_PENDING_COLLABORATIONS tool output.
 */
type BOX_LIST_PENDING_COLLABORATIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_PREVIOUS_FILE_VERSIONS_FOR_LEGAL_HOLD_POLICY_ASSIGNMENT tool input.
 */
type BOX_LIST_PREVIOUS_FILE_VERSIONS_FOR_LEGAL_HOLD_POLICY_ASSIGNMENT_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Legal Hold Policy Assignment Id
   * @description The ID of the legal hold policy assignment
   */
  legal_hold_policy_assignment_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_PREVIOUS_FILE_VERSIONS_FOR_LEGAL_HOLD_POLICY_ASSIGNMENT tool output.
 */
type BOX_LIST_PREVIOUS_FILE_VERSIONS_FOR_LEGAL_HOLD_POLICY_ASSIGNMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_RECENTLY_ACCESSED_ITEMS tool input.
 */
type BOX_LIST_RECENTLY_ACCESSED_ITEMS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_RECENTLY_ACCESSED_ITEMS tool output.
 */
type BOX_LIST_RECENTLY_ACCESSED_ITEMS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_RETENTION_POLICIES tool input.
 */
type BOX_LIST_RETENTION_POLICIES_INPUT = {
  /**
   * Created By User Id
   * @description Filters results by the ID of the user who created policy.
   */
  created_by_user_id?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.
   */
  marker?: string;
  /**
   * Policy Name
   * @description Filters results by a case sensitive prefix of the name of retention policies.
   */
  policy_name?: string;
  /**
   * Policy Type
   * @description Filters results by the type of retention policy.
   * @enum {string}
   */
  policy_type?: "finite" | "indefinite";
};

/**
 * Type of BOX's BOX_LIST_RETENTION_POLICIES tool output.
 */
type BOX_LIST_RETENTION_POLICIES_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_RETENTION_POLICY_ASSIGNMENTS tool input.
 */
type BOX_LIST_RETENTION_POLICY_ASSIGNMENTS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.
   */
  marker?: string;
  /**
   * Retention Policy Id
   * @description The ID of the retention policy.
   */
  retention_policy_id?: string;
  /**
   * Type
   * @description The type of the retention policy assignment to retrieve.
   * @enum {string}
   */
  type?: "enterprise" | "folder" | "metadata_template";
};

/**
 * Type of BOX's BOX_LIST_RETENTION_POLICY_ASSIGNMENTS tool output.
 */
type BOX_LIST_RETENTION_POLICY_ASSIGNMENTS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_SHIELD_INFORMATION_BARRIERS tool input.
 */
type BOX_LIST_SHIELD_INFORMATION_BARRIERS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_SHIELD_INFORMATION_BARRIERS tool output.
 */
type BOX_LIST_SHIELD_INFORMATION_BARRIERS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_SHIELD_INFORMATION_BARRIER_REPORTS tool input.
 */
type BOX_LIST_SHIELD_INFORMATION_BARRIER_REPORTS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Shield Information Barrier Id
   * @description The ID of the shield information barrier.
   */
  shield_information_barrier_id?: string;
};

/**
 * Type of BOX's BOX_LIST_SHIELD_INFORMATION_BARRIER_REPORTS tool output.
 */
type BOX_LIST_SHIELD_INFORMATION_BARRIER_REPORTS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENTS tool input.
 */
type BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENTS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Shield Information Barrier Id
   * @description The ID of the shield information barrier.
   */
  shield_information_barrier_id?: string;
};

/**
 * Type of BOX's BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENTS tool output.
 */
type BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENTS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBERS tool input.
 */
type BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBERS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Shield Information Barrier Segment Id
   * @description The ID of the shield information barrier segment.
   */
  shield_information_barrier_segment_id?: string;
};

/**
 * Type of BOX's BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBERS tool output.
 */
type BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBERS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTIONS tool input.
 */
type BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTIONS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Shield Information Barrier Segment Id
   * @description The ID of the shield information barrier segment.
   */
  shield_information_barrier_segment_id?: string;
};

/**
 * Type of BOX's BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTIONS tool output.
 */
type BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_SLACK_INTEGRATION_MAPPINGS tool input.
 */
type BOX_LIST_SLACK_INTEGRATION_MAPPINGS_INPUT = {
  /**
   * Box Item Id
   * @description Box item ID, for which the mappings should be returned
   */
  box_item_id?: string;
  /**
   * Box Item Type
   * @description Box item type, for which the mappings should be returned
   * @enum {string}
   */
  box_item_type?: "folder";
  /**
   * Is Manually Created
   * @description Whether the mapping has been manually created
   */
  is_manually_created?: boolean;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Partner Item Id
   * @description ID of the mapped item, for which the mapping should be returned
   */
  partner_item_id?: string;
  /**
   * Partner Item Type
   * @description Mapped item type, for which the mapping should be returned
   * @enum {string}
   */
  partner_item_type?: "channel";
};

/**
 * Type of BOX's BOX_LIST_SLACK_INTEGRATION_MAPPINGS tool output.
 */
type BOX_LIST_SLACK_INTEGRATION_MAPPINGS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_STORAGE_POLICIES tool input.
 */
type BOX_LIST_STORAGE_POLICIES_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_STORAGE_POLICIES tool output.
 */
type BOX_LIST_STORAGE_POLICIES_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_STORAGE_POLICY_ASSIGNMENTS tool input.
 */
type BOX_LIST_STORAGE_POLICY_ASSIGNMENTS_INPUT = {
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Resolved For Id
   * @description The ID of the user or enterprise to return assignments for
   */
  resolved_for_id?: string;
  /**
   * Resolved For Type
   * @description The target type to return assignments for
   * @enum {string}
   */
  resolved_for_type?: "enterprise" | "user";
};

/**
 * Type of BOX's BOX_LIST_STORAGE_POLICY_ASSIGNMENTS tool output.
 */
type BOX_LIST_STORAGE_POLICY_ASSIGNMENTS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_TASKS_ON_FILE tool input.
 */
type BOX_LIST_TASKS_ON_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_LIST_TASKS_ON_FILE tool output.
 */
type BOX_LIST_TASKS_ON_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_TASK_ASSIGNMENTS tool input.
 */
type BOX_LIST_TASK_ASSIGNMENTS_INPUT = {
  /**
   * Task Id
   * @description The ID of the task.
   */
  task_id?: string;
};

/**
 * Type of BOX's BOX_LIST_TASK_ASSIGNMENTS tool output.
 */
type BOX_LIST_TASK_ASSIGNMENTS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_TEAMS_INTEGRATION_MAPPINGS tool input.
 */
type BOX_LIST_TEAMS_INTEGRATION_MAPPINGS_INPUT = {
  /**
   * Box Item Id
   * @description Box item ID, for which the mappings should be returned
   */
  box_item_id?: string;
  /**
   * Box Item Type
   * @description Box item type, for which the mappings should be returned
   * @enum {string}
   */
  box_item_type?: "folder";
  /**
   * Partner Item Id
   * @description ID of the mapped item, for which the mapping should be returned
   */
  partner_item_id?: string;
  /**
   * Partner Item Type
   * @description Mapped item type, for which the mapping should be returned
   * @enum {string}
   */
  partner_item_type?: "channel" | "team";
};

/**
 * Type of BOX's BOX_LIST_TEAMS_INTEGRATION_MAPPINGS tool output.
 */
type BOX_LIST_TEAMS_INTEGRATION_MAPPINGS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_TERMS_OF_SERVICES tool input.
 */
type BOX_LIST_TERMS_OF_SERVICES_INPUT = {
  /**
   * Tos Type
   * @description Limits the results to the terms of service of the given type.
   * @enum {string}
   */
  tos_type?: "external" | "managed";
};

/**
 * Type of BOX's BOX_LIST_TERMS_OF_SERVICES tool output.
 */
type BOX_LIST_TERMS_OF_SERVICES_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_TERMS_OF_SERVICE_USER_STATUSES tool input.
 */
type BOX_LIST_TERMS_OF_SERVICE_USER_STATUSES_INPUT = {
  /**
   * Tos Id
   * @description The ID of the terms of service.
   */
  tos_id?: string;
  /**
   * User Id
   * @description Limits results to the given user ID.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_LIST_TERMS_OF_SERVICE_USER_STATUSES tool output.
 */
type BOX_LIST_TERMS_OF_SERVICE_USER_STATUSES_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_TRASHED_ITEMS tool input.
 */
type BOX_LIST_TRASHED_ITEMS_INPUT = {
  /**
   * Direction
   * @description The direction to sort results in. This can be either in alphabetical ascending (`ASC`) or descending (`DESC`) order.
   * @enum {string}
   */
  direction?: "ASC" | "DESC";
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
  /**
   * Sort
   * @description Defines the **second** attribute by which items are sorted. Items are always sorted by their `type` first, with folders listed before files, and files listed before web links. This parameter is not supported when using marker-based pagination.
   * @enum {string}
   */
  sort?: "date" | "name" | "size";
  /**
   * Usemarker
   * @description Specifies whether to use marker-based pagination instead of offset-based pagination. Only one pagination method can be used at a time. By setting this value to true, the API will return a `marker` field that can be passed as a parameter to this endpoint to get the next page of the response.
   */
  usemarker?: boolean;
};

/**
 * Type of BOX's BOX_LIST_TRASHED_ITEMS tool output.
 */
type BOX_LIST_TRASHED_ITEMS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_USERS_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS tool input.
 */
type BOX_LIST_USERS_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_LIST_USERS_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS tool output.
 */
type BOX_LIST_USERS_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_USER_AND_ENTERPRISE_EVENTS tool input.
 */
type BOX_LIST_USER_AND_ENTERPRISE_EVENTS_INPUT = {
  /**
   * Created After
   * @description The lower bound date and time to return events for. This can only be used when requesting the events with a `stream_type` of `admin_logs`. For any other `stream_type` this value will be ignored.
   */
  created_after?: string;
  /**
   * Created Before
   * @description The upper bound date and time to return events for. This can only be used when requesting the events with a `stream_type` of `admin_logs`. For any other `stream_type` this value will be ignored.
   */
  created_before?: string;
  /**
   * Event Type
   * @description A comma-separated list of events to filter by. This can only be used when requesting the events with a `stream_type` of `admin_logs` or `adming_logs_streaming`. For any other `stream_type` this value will be ignored.
   */
  event_type?: string[];
  /**
   * Limit
   * @description Limits the number of events returned Note: Sometimes, the events less than the limit requested can be returned even when there may be more events remaining. This is primarily done in the case where a number of events have already been retrieved and these retrieved events are returned rather than delaying for an unknown amount of time to see if there are any more results.
   * @default 100
   */
  limit: number;
  /**
   * Stream Position
   * @description The location in the event stream to start receiving events from. * `now` will return an empty list events and the latest stream position for initialization. * `0` or `null` will return all events.
   */
  stream_position?: string;
  /**
   * Stream Type
   * @description Defines the type of events that are returned * `all` returns everything for a user and is the default * `changes` returns events that may cause file tree changes   such as file updates or collaborations. * `sync` is similar to `changes` but only applies to synced folders * `admin_logs` returns all events for an entire enterprise and   requires the user making the API call to have admin permissions. This   stream type is for programmatically pulling from a 1 year history of   events across all users within the enterprise and within a   `created_after` and `created_before` time frame. The complete history   of events will be returned in chronological order based on the event   time, but latency will be much higher than `admin_logs_streaming`. * `admin_logs_streaming` returns all events for an entire enterprise and   requires the user making the API call to have admin permissions. This   stream type is for polling for recent events across all users within   the enterprise. Latency will be much lower than `admin_logs`, but   events will not be returned in chronological order and may   contain duplicates.
   * @default all
   * @enum {string}
   */
  stream_type: "admin_logs" | "admin_logs_streaming" | "all" | "changes" | "sync";
};

/**
 * Type of BOX's BOX_LIST_USER_AND_ENTERPRISE_EVENTS tool output.
 */
type BOX_LIST_USER_AND_ENTERPRISE_EVENTS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_USER_S_EMAIL_ALIASES tool input.
 */
type BOX_LIST_USER_S_EMAIL_ALIASES_INPUT = {
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_LIST_USER_S_EMAIL_ALIASES tool output.
 */
type BOX_LIST_USER_S_EMAIL_ALIASES_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_USER_S_GROUPS tool input.
 */
type BOX_LIST_USER_S_GROUPS_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_LIST_USER_S_GROUPS tool output.
 */
type BOX_LIST_USER_S_GROUPS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_LIST_WORKFLOWS tool input.
 */
type BOX_LIST_WORKFLOWS_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
  /**
   * Trigger Type
   * @description Type of trigger to search for.
   */
  trigger_type?: string;
};

/**
 * Type of BOX's BOX_LIST_WORKFLOWS tool output.
 */
type BOX_LIST_WORKFLOWS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_PERMANENTLY_REMOVE_FILE tool input.
 */
type BOX_PERMANENTLY_REMOVE_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_PERMANENTLY_REMOVE_FILE tool output.
 */
type BOX_PERMANENTLY_REMOVE_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_PERMANENTLY_REMOVE_FOLDER tool input.
 */
type BOX_PERMANENTLY_REMOVE_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_PERMANENTLY_REMOVE_FOLDER tool output.
 */
type BOX_PERMANENTLY_REMOVE_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_PERMANENTLY_REMOVE_WEB_LINK tool input.
 */
type BOX_PERMANENTLY_REMOVE_WEB_LINK_INPUT = {
  /**
   * Web Link Id
   * @description The ID of the web link.
   */
  web_link_id?: string;
};

/**
 * Type of BOX's BOX_PERMANENTLY_REMOVE_WEB_LINK tool output.
 */
type BOX_PERMANENTLY_REMOVE_WEB_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_PREFLIGHT_CHECK_BEFORE_UPLOAD tool input.
 */
type BOX_PREFLIGHT_CHECK_BEFORE_UPLOAD_INPUT = {
  /**
   * Name
   * @description The name for the file
   */
  name?: string;
  /**
   * Size
   * @description The size of the file in bytes
   */
  size?: number;
};

/**
 * Type of BOX's BOX_PREFLIGHT_CHECK_BEFORE_UPLOAD tool output.
 */
type BOX_PREFLIGHT_CHECK_BEFORE_UPLOAD_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_PROMOTE_FILE_VERSION tool input.
 */
type BOX_PROMOTE_FILE_VERSION_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Id
   * @description The file version ID
   */
  id?: string;
  /**
   * Type
   * @description The type to promote
   * @enum {string}
   */
  type?: "file_version";
};

/**
 * Type of BOX's BOX_PROMOTE_FILE_VERSION tool output.
 */
type BOX_PROMOTE_FILE_VERSION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_QUERY_FILES_FOLDERS_BY_METADATA tool input.
 */
type BOX_QUERY_FILES_FOLDERS_BY_METADATA_INPUT = {
  /**
   * Ancestor Folder Id
   * @description The ID of the folder that you are restricting the query to. A value of zero will return results from all folders you have access to. A non-zero value will only return results found in the folder corresponding to the ID or in any of its subfolders.
   */
  ancestor_folder_id?: string;
  /**
   * Fields
   * @description By default, this endpoint returns only the most basic info about the items for which the query matches. This attribute can be used to specify a list of additional attributes to return for any item, including its metadata. This attribute takes a list of item fields, metadata template identifiers, or metadata template field identifiers. For example: * `created_by` will add the details of the user who created the item to the response. * `metadata.<scope>.<templateKey>` will return the mini-representation of the metadata instance identified by the `scope` and `templateKey`. * `metadata.<scope>.<templateKey>.<field>` will return all the mini-representation of the metadata instance identified by the `scope` and `templateKey` plus the field specified by the `field` name. Multiple fields for the same `scope` and `templateKey` can be defined.
   */
  fields?: string[];
  /**
   * From
   * @description Specifies the template used in the query. Must be in the form `scope.templateKey`. Not all templates can be used in this field, most notably the built-in, Box-provided classification templates can not be used in a query.
   */
  from?: string;
  /**
   * Limit
   * @description A value between 0 and 100 that indicates the maximum number of results to return for a single request. This only specifies a maximum boundary and will not guarantee the minimum number of results returned.
   * @default 100
   */
  limit: number;
  /**
   * Marker
   * @description Marker to use for requesting the next page.
   */
  marker?: string;
  /**
   * Order By
   * @description A list of template fields and directions to sort the metadata query results by. The ordering `direction` must be the same for each item in the array.
   */
  order_by?: {
      /**
       * Direction
       * @description The direction to order by, either ascending or descending. The `ordering` direction must be the same for each item in the array.
       * @enum {string}
       */
      direction?: "ASC" | "DESC" | "asc" | "desc";
      /**
       * Field Key
       * @description The metadata template field to order by. The `field_key` represents the `key` value of a field from the metadata template being searched for.
       */
      field_key?: string;
  }[];
  /**
   * Query
   * @description The query to perform. A query is a logical expression that is very similar to a SQL `SELECT` statement. Values in the search query can be turned into parameters specified in the `query_param` arguments list to prevent having to manually insert search values into the query string. For example, a value of `:amount` would represent the `amount` value in `query_params` object.
   */
  query?: string;
  /**
   * Query Params
   * @description Set of arguments corresponding to the parameters specified in the `query`. The type of each parameter used in the `query_params` must match the type of the corresponding metadata template field.
   */
  query_params?: {
      [key: string]: unknown;
  };
};

/**
 * Type of BOX's BOX_QUERY_FILES_FOLDERS_BY_METADATA tool output.
 */
type BOX_QUERY_FILES_FOLDERS_BY_METADATA_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REFRESH_ACCESS_TOKEN tool input.
 */
type BOX_REFRESH_ACCESS_TOKEN_INPUT = {
  /**
   * Client Id
   * @description The client ID of the application requesting to refresh the token.
   */
  client_id?: string;
  /**
   * Client Secret
   * @description The client secret of the application requesting to refresh the token.
   */
  client_secret?: string;
  /**
   * Grant Type
   * Format: urn
   * @description The type of request being made, in this case a refresh request.
   * @enum {string}
   */
  grant_type?: "refresh_token";
  /**
   * Refresh Token
   * Format: token
   * @description The refresh token to refresh.
   */
  refresh_token?: string;
};

/**
 * Type of BOX's BOX_REFRESH_ACCESS_TOKEN tool output.
 */
type BOX_REFRESH_ACCESS_TOKEN_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_BOX_SKILL_CARDS_FROM_FILE tool input.
 */
type BOX_REMOVE_BOX_SKILL_CARDS_FROM_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_BOX_SKILL_CARDS_FROM_FILE tool output.
 */
type BOX_REMOVE_BOX_SKILL_CARDS_FROM_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_CLASSIFICATION_FROM_FILE tool input.
 */
type BOX_REMOVE_CLASSIFICATION_FROM_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_CLASSIFICATION_FROM_FILE tool output.
 */
type BOX_REMOVE_CLASSIFICATION_FROM_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_CLASSIFICATION_FROM_FOLDER tool input.
 */
type BOX_REMOVE_CLASSIFICATION_FROM_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_CLASSIFICATION_FROM_FOLDER tool output.
 */
type BOX_REMOVE_CLASSIFICATION_FROM_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_COLLABORATION tool input.
 */
type BOX_REMOVE_COLLABORATION_INPUT = {
  /**
   * Collaboration Id
   * @description The ID of the collaboration
   */
  collaboration_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_COLLABORATION tool output.
 */
type BOX_REMOVE_COLLABORATION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_COMMENT tool input.
 */
type BOX_REMOVE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_COMMENT tool output.
 */
type BOX_REMOVE_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_DEVICE_PIN tool input.
 */
type BOX_REMOVE_DEVICE_PIN_INPUT = {
  /**
   * Device Pinner Id
   * @description The ID of the device pin
   */
  device_pinner_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_DEVICE_PIN tool output.
 */
type BOX_REMOVE_DEVICE_PIN_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_DOMAIN_FROM_LIST_OF_ALLOWED_COLLABORATION_DOMAINS tool input.
 */
type BOX_REMOVE_DOMAIN_FROM_LIST_OF_ALLOWED_COLLABORATION_DOMAINS_INPUT = {
  /**
   * Collaboration Whitelist Entry Id
   * @description The ID of the entry in the list.
   */
  collaboration_whitelist_entry_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_DOMAIN_FROM_LIST_OF_ALLOWED_COLLABORATION_DOMAINS tool output.
 */
type BOX_REMOVE_DOMAIN_FROM_LIST_OF_ALLOWED_COLLABORATION_DOMAINS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_EMAIL_ALIAS tool input.
 */
type BOX_REMOVE_EMAIL_ALIAS_INPUT = {
  /**
   * Email Alias Id
   * @description The ID of the email alias.
   */
  email_alias_id?: string;
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_EMAIL_ALIAS tool output.
 */
type BOX_REMOVE_EMAIL_ALIAS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_FILE_VERSION tool input.
 */
type BOX_REMOVE_FILE_VERSION_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * File Version Id
   * @description The ID of the file version
   */
  file_version_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_FILE_VERSION tool output.
 */
type BOX_REMOVE_FILE_VERSION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_GROUP tool input.
 */
type BOX_REMOVE_GROUP_INPUT = {
  /**
   * Group Id
   * @description The ID of the group.
   */
  group_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_GROUP tool output.
 */
type BOX_REMOVE_GROUP_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_LEGAL_HOLD_POLICY tool input.
 */
type BOX_REMOVE_LEGAL_HOLD_POLICY_INPUT = {
  /**
   * Legal Hold Policy Id
   * @description The ID of the legal hold policy
   */
  legal_hold_policy_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_LEGAL_HOLD_POLICY tool output.
 */
type BOX_REMOVE_LEGAL_HOLD_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_METADATA_CASCADE_POLICY tool input.
 */
type BOX_REMOVE_METADATA_CASCADE_POLICY_INPUT = {
  /**
   * Metadata Cascade Policy Id
   * @description The ID of the metadata cascade policy.
   */
  metadata_cascade_policy_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_METADATA_CASCADE_POLICY tool output.
 */
type BOX_REMOVE_METADATA_CASCADE_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_METADATA_INSTANCE_FROM_FILE tool input.
 */
type BOX_REMOVE_METADATA_INSTANCE_FROM_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Scope
   * @description The scope of the metadata template
   * @enum {string}
   */
  scope?: "enterprise" | "global";
  /**
   * Template Key
   * @description The name of the metadata template
   */
  template_key?: string;
};

/**
 * Type of BOX's BOX_REMOVE_METADATA_INSTANCE_FROM_FILE tool output.
 */
type BOX_REMOVE_METADATA_INSTANCE_FROM_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_METADATA_INSTANCE_FROM_FOLDER tool input.
 */
type BOX_REMOVE_METADATA_INSTANCE_FROM_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Scope
   * @description The scope of the metadata template
   * @enum {string}
   */
  scope?: "enterprise" | "global";
  /**
   * Template Key
   * @description The name of the metadata template
   */
  template_key?: string;
};

/**
 * Type of BOX's BOX_REMOVE_METADATA_INSTANCE_FROM_FOLDER tool output.
 */
type BOX_REMOVE_METADATA_INSTANCE_FROM_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_METADATA_TEMPLATE tool input.
 */
type BOX_REMOVE_METADATA_TEMPLATE_INPUT = {
  /**
   * Scope
   * @description The scope of the metadata template
   * @enum {string}
   */
  scope?: "enterprise" | "global";
  /**
   * Template Key
   * @description The name of the metadata template
   */
  template_key?: string;
};

/**
 * Type of BOX's BOX_REMOVE_METADATA_TEMPLATE tool output.
 */
type BOX_REMOVE_METADATA_TEMPLATE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_RETENTION_POLICY_ASSIGNMENT tool input.
 */
type BOX_REMOVE_RETENTION_POLICY_ASSIGNMENT_INPUT = {
  /**
   * Retention Policy Assignment Id
   * @description The ID of the retention policy assignment.
   */
  retention_policy_assignment_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_RETENTION_POLICY_ASSIGNMENT tool output.
 */
type BOX_REMOVE_RETENTION_POLICY_ASSIGNMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_SHARED_LINK_FROM_FILE tool input.
 */
type BOX_REMOVE_SHARED_LINK_FROM_FILE_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_SHARED_LINK_FROM_FILE tool output.
 */
type BOX_REMOVE_SHARED_LINK_FROM_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_SHARED_LINK_FROM_FOLDER tool input.
 */
type BOX_REMOVE_SHARED_LINK_FROM_FOLDER_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_SHARED_LINK_FROM_FOLDER tool output.
 */
type BOX_REMOVE_SHARED_LINK_FROM_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_SHARED_LINK_FROM_WEB_LINK tool input.
 */
type BOX_REMOVE_SHARED_LINK_FROM_WEB_LINK_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * Web Link Id
   * @description The ID of the web link.
   */
  web_link_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_SHARED_LINK_FROM_WEB_LINK tool output.
 */
type BOX_REMOVE_SHARED_LINK_FROM_WEB_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_TASK tool input.
 */
type BOX_REMOVE_TASK_INPUT = {
  /**
   * Task Id
   * @description The ID of the task.
   */
  task_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_TASK tool output.
 */
type BOX_REMOVE_TASK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_UPLOAD_SESSION tool input.
 */
type BOX_REMOVE_UPLOAD_SESSION_INPUT = {
  /**
   * Upload Session Id
   * @description The ID of the upload session.
   */
  upload_session_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_UPLOAD_SESSION tool output.
 */
type BOX_REMOVE_UPLOAD_SESSION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_USER_DOMAIN_EXEMPTION tool input.
 */
type BOX_REMOVE_USER_DOMAIN_EXEMPTION_INPUT = {
  /**
   * Collaboration Whitelist Exempt Target Id
   * @description The ID of the exemption to the list.
   */
  collaboration_whitelist_exempt_target_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_USER_DOMAIN_EXEMPTION tool output.
 */
type BOX_REMOVE_USER_DOMAIN_EXEMPTION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_USER_FROM_GROUP tool input.
 */
type BOX_REMOVE_USER_FROM_GROUP_INPUT = {
  /**
   * Group Membership Id
   * @description The ID of the group membership.
   */
  group_membership_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_USER_FROM_GROUP tool output.
 */
type BOX_REMOVE_USER_FROM_GROUP_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_WATERMARK_FROM_FILE tool input.
 */
type BOX_REMOVE_WATERMARK_FROM_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_WATERMARK_FROM_FILE tool output.
 */
type BOX_REMOVE_WATERMARK_FROM_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_WATERMARK_FROM_FOLDER tool input.
 */
type BOX_REMOVE_WATERMARK_FROM_FOLDER_INPUT = {
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_WATERMARK_FROM_FOLDER tool output.
 */
type BOX_REMOVE_WATERMARK_FROM_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_WEBHOOK tool input.
 */
type BOX_REMOVE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description The ID of the webhook.
   */
  webhook_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_WEBHOOK tool output.
 */
type BOX_REMOVE_WEBHOOK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REMOVE_WEB_LINK tool input.
 */
type BOX_REMOVE_WEB_LINK_INPUT = {
  /**
   * Web Link Id
   * @description The ID of the web link.
   */
  web_link_id?: string;
};

/**
 * Type of BOX's BOX_REMOVE_WEB_LINK tool output.
 */
type BOX_REMOVE_WEB_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REQUEST_ACCESS_TOKEN tool input.
 */
type BOX_REQUEST_ACCESS_TOKEN_INPUT = {
  /**
   * Actor Token
   * Format: token
   * @description The token used to create an annotator token. This is a JWT assertion. Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as the `grant_type`.
   */
  actor_token?: string;
  /**
   * Actor Token Type
   * Format: urn
   * @description The type of `actor_token` passed in. Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as the `grant_type`.
   * @enum {string}
   */
  actor_token_type?: "urn:ietf:params:oauth:token-type:id_token";
  /**
   * Assertion
   * Format: jwt
   * @description A JWT assertion for which to request a new access token. Used in combination with `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`.
   */
  assertion?: string;
  /**
   * Box Shared Link
   * Format: url
   * @description Full URL of the shared link on the file or folder that the token should be generated for.
   */
  box_shared_link?: string;
  /**
   * Box Subject Id
   * @description Used in combination with `client_credentials` as the `grant_type`. Value is determined by `box_subject_type`. If `user` use user ID and if `enterprise` use enterprise ID.
   */
  box_subject_id?: string;
  /**
   * Box Subject Type
   * @description Used in combination with `client_credentials` as the `grant_type`.
   * @enum {string}
   */
  box_subject_type?: "enterprise" | "user";
  /**
   * Client Id
   * @description The Client ID of the application requesting an access token. Used in combination with `authorization_code`, `client_credentials`, or `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`.
   */
  client_id?: string;
  /**
   * Client Secret
   * @description The client secret of the application requesting an access token. Used in combination with `authorization_code`, `client_credentials`, or `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`.
   */
  client_secret?: string;
  /**
   * Code
   * Format: token
   * @description The client-side authorization code passed to your application by Box in the browser redirect after the user has successfully granted your application permission to make API calls on their behalf. Used in combination with `authorization_code` as the `grant_type`.
   */
  code?: string;
  /**
   * Grant Type
   * Format: urn
   * @description The type of request being made, either using a client-side obtained authorization code, a refresh token, a JWT assertion, client credentials grant or another access token for the purpose of downscoping a token.
   * @enum {string}
   */
  grant_type?: "authorization_code" | "client_credentials" | "refresh_token" | "urn:ietf:params:oauth:grant-type:jwt-bearer" | "urn:ietf:params:oauth:grant-type:token-exchange";
  /**
   * Refresh Token
   * Format: token
   * @description A refresh token used to get a new access token with. Used in combination with `refresh_token` as the `grant_type`.
   */
  refresh_token?: string;
  /**
   * Resource
   * Format: url
   * @description Full URL for the file that the token should be generated for.
   */
  resource?: string;
  /**
   * Scope
   * Format: space_delimited_list
   * @description The space-delimited list of scopes that you want apply to the new access token. The `subject_token` will need to have all of these scopes or the call will error with **401 Unauthorized**.
   */
  scope?: string;
  /**
   * Subject Token
   * Format: token
   * @description The token to exchange for a downscoped token. This can be a regular access token, a JWT assertion, or an app token. Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as the `grant_type`.
   */
  subject_token?: string;
  /**
   * Subject Token Type
   * @description The type of `subject_token` passed in. Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as the `grant_type`.
   * @enum {string}
   */
  subject_token_type?: "urn:ietf:params:oauth:token-type:access_token";
};

/**
 * Type of BOX's BOX_REQUEST_ACCESS_TOKEN tool output.
 */
type BOX_REQUEST_ACCESS_TOKEN_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_RESEND_BOX_SIGN_REQUEST tool input.
 */
type BOX_RESEND_BOX_SIGN_REQUEST_INPUT = {
  /**
   * Sign Request Id
   * @description The ID of the signature request
   */
  sign_request_id?: string;
};

/**
 * Type of BOX's BOX_RESEND_BOX_SIGN_REQUEST tool output.
 */
type BOX_RESEND_BOX_SIGN_REQUEST_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_RESTORE_FILE tool input.
 */
type BOX_RESTORE_FILE_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Name
   * @description An optional new name for the file.
   */
  name?: string;
};

/**
 * Type of BOX's BOX_RESTORE_FILE tool output.
 */
type BOX_RESTORE_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_RESTORE_FILE_VERSION tool input.
 */
type BOX_RESTORE_FILE_VERSION_INPUT = {
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * File Version Id
   * @description The ID of the file version
   */
  file_version_id?: string;
  /**
   * Trashed At
   * @description Set this to `null` to clear the date and restore the file.
   */
  trashed_at?: string;
};

/**
 * Type of BOX's BOX_RESTORE_FILE_VERSION tool output.
 */
type BOX_RESTORE_FILE_VERSION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_RESTORE_FOLDER tool input.
 */
type BOX_RESTORE_FOLDER_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Name
   * @description An optional new name for the folder.
   */
  name?: string;
};

/**
 * Type of BOX's BOX_RESTORE_FOLDER tool output.
 */
type BOX_RESTORE_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_RESTORE_WEB_LINK tool input.
 */
type BOX_RESTORE_WEB_LINK_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Name
   * @description An optional new name for the web link.
   */
  name?: string;
  /**
   * Web Link Id
   * @description The ID of the web link.
   */
  web_link_id?: string;
};

/**
 * Type of BOX's BOX_RESTORE_WEB_LINK tool output.
 */
type BOX_RESTORE_WEB_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REVIEW_FILES_ON_LEGAL_HOLD_POLICY_ASSIGNMENT tool input.
 */
type BOX_REVIEW_FILES_ON_LEGAL_HOLD_POLICY_ASSIGNMENT_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Legal Hold Policy Assignment Id
   * @description The ID of the legal hold policy assignment
   */
  legal_hold_policy_assignment_id?: string;
  /**
   * Limit
   * @description The maximum number of items to return per page.
   */
  limit?: number;
  /**
   * Marker
   * @description Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination. This requires `usemarker` to be set to `true`.
   */
  marker?: string;
};

/**
 * Type of BOX's BOX_REVIEW_FILES_ON_LEGAL_HOLD_POLICY_ASSIGNMENT tool output.
 */
type BOX_REVIEW_FILES_ON_LEGAL_HOLD_POLICY_ASSIGNMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_REVOKE_ACCESS_TOKEN tool input.
 */
type BOX_REVOKE_ACCESS_TOKEN_INPUT = {
  /**
   * Client Id
   * @description The Client ID of the application requesting to revoke the access token.
   */
  client_id?: string;
  /**
   * Client Secret
   * @description The client secret of the application requesting to revoke an access token.
   */
  client_secret?: string;
  /**
   * Token
   * Format: token
   * @description The access token to revoke.
   */
  token?: string;
};

/**
 * Type of BOX's BOX_REVOKE_ACCESS_TOKEN tool output.
 */
type BOX_REVOKE_ACCESS_TOKEN_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_SEARCH_FOR_CONTENT tool input.
 */
type BOX_SEARCH_FOR_CONTENT_INPUT = {
  /**
   * Ancestor Folder Ids
   * @description Limits the search results to items within the given list of folders, defined as a comma separated lists of folder IDs. Search results will also include items within any subfolders of those ancestor folders. The folders still need to be owned or shared with the currently authenticated user. If the folder is not accessible by this user, or it does not exist, a `HTTP 404` error code will be returned instead. To search across an entire enterprise, we recommend using the `enterprise_content` scope parameter which can be requested with our support team.
   */
  ancestor_folder_ids?: string[];
  /**
   * Content Types
   * @description Limits the search results to any items that match the search query for a specific part of the file, for example the file description. Content types are defined as a comma separated lists of Box recognized content types. The allowed content types are as follows. * `name` - The name of the item, as defined by its `name` field. * `description` - The description of the item, as defined by its   `description` field. * `file_content` - The actual content of the file. * `comments` - The content of any of the comments on a file or    folder. * `tags` - Any tags that are applied to an item, as defined by its    `tags` field.
   */
  content_types?: string[];
  /**
   * Created At Range
   * @description Limits the search results to any items created within a given date range. Date ranges are defined as comma separated RFC3339 timestamps. If the the start date is omitted (`,2014-05-17T13:35:01-07:00`) anything created before the end date will be returned. If the end date is omitted (`2014-05-15T13:35:01-07:00,`) the current date will be used as the end date instead.
   */
  created_at_range?: string[];
  /**
   * Deleted At Range
   * @description Limits the search results to any items deleted within a given date range. Date ranges are defined as comma separated RFC3339 timestamps. If the the start date is omitted (`2014-05-17T13:35:01-07:00`), anything deleted before the end date will be returned. If the end date is omitted (`2014-05-15T13:35:01-07:00`), the current date will be used as the end date instead. The `trash_content` parameter needs to be set to `trashed_only`. If searching in trash is not performed, then an empty result is returned. Data available from 2023-02-01 onwards.
   */
  deleted_at_range?: string[];
  /**
   * Deleted User Ids
   * @description Limits the search results to items that were deleted by the given list of users, defined as a list of comma separated user IDs. The `trash_content` parameter needs to be set to `trashed_only`. If searching in trash is not performed, an empty result set is returned. The items need to be owned or shared with the currently authenticated user for them to show up in the search results. If the user does not have access to any files owned by any of the users, an empty result set is returned. Data available from 2023-02-01 onwards.
   */
  deleted_user_ids?: string[];
  /**
   * Direction
   * @description Defines the direction in which search results are ordered. This API defaults to returning items in descending (`DESC`) order unless this parameter is explicitly specified. When results are sorted by `relevance` the ordering is locked to returning items in descending order of relevance, and this parameter is ignored.
   * @default DESC
   * @enum {string}
   */
  direction: "ASC" | "DESC";
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File Extensions
   * @description Limits the search results to any files that match any of the provided file extensions. This list is a comma-separated list of file extensions without the dots.
   */
  file_extensions?: string[];
  /**
   * Include Recent Shared Links
   * @description Defines whether the search results should include any items that the user recently accessed through a shared link. When this parameter has been set to true, the format of the response of this API changes to return a list of [Search Results with Shared Links](r://search_results_with_shared_links)
   * @default false
   */
  include_recent_shared_links: boolean;
  /**
   * Limit
   * @description Defines the maximum number of items to return as part of a page of results.
   * @default 30
   */
  limit: number;
  /**
   * Mdfilters
   * @description Limits the search results to any items for which the metadata matches the provided filter. This parameter is a list that specifies exactly **one** metadata template used to filter the search results.  The parameter is required unless the `query` parameter is provided.
   */
  mdfilters?: {
      /**
       * Filters
       * @description Specifies which fields on the template to filter the search results by. When more than one field is specified, the query performs a logical `AND` to ensure that the instance of the template matches each of the fields specified.
       */
      filters?: {
          [key: string]: unknown;
      };
      /**
       * Scope
       * @description Specifies the scope of the template to filter search results by. This will be `enterprise_{enterprise_id}` for templates defined for use in this enterprise, and `global` for general templates that are available to all enterprises using Box.
       * @enum {string}
       */
      scope?: "enterprise" | "enterprise_{enterprise_id}" | "global";
      /**
       * Template Key
       * @description The key of the template used to filter search results. In many cases the template key is automatically derived of its display name, for example `Contract Template` would become `contractTemplate`. In some cases the creator of the template will have provided its own template key. Please [list the templates for an enterprise][list], or get all instances on a [file][file] or [folder][folder] to inspect a template"s key. [list]: e://get-metadata-templates-enterprise [file]: e://get-files-id-metadata [folder]: e://get-folders-id-metadata
       */
      templateKey?: string;
  }[];
  /**
   * Offset
   * @description The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
   * @default 0
   */
  offset: number;
  /**
   * Owner User Ids
   * @description Limits the search results to any items that are owned by the given list of owners, defined as a list of comma separated user IDs. The items still need to be owned or shared with the currently authenticated user for them to show up in the search results. If the user does not have access to any files owned by any of the users an empty result set will be returned. To search across an entire enterprise, we recommend using the `enterprise_content` scope parameter which can be requested with our support team.
   */
  owner_user_ids?: string[];
  /**
   * Query
   * @description The string to search for. This query is matched against item names, descriptions, text content of files, and various other fields of the different item types. This parameter supports a variety of operators to further refine the results returns. * `""` - by wrapping a query in double quotes only exact matches are   returned by the API. Exact searches do not return search matches   based on specific character sequences. Instead, they return   matches based on phrases, that is, word sequences. For example:   A search for `"Blue-Box"` may return search results including   the sequence `"blue.box"`, `"Blue Box"`, and `"Blue-Box"`;   any item containing the words `Blue` and `Box` consecutively, in   the order specified. * `AND` - returns items that contain both the search terms. For   example, a search for `marketing AND BoxWorks` returns items   that have both `marketing` and `BoxWorks` within its text in any order.   It does not return a result that only has `BoxWorks` in its text. * `OR` - returns items that contain either of the search terms. For   example, a search for `marketing OR BoxWorks` returns a result that   has either `marketing` or `BoxWorks` within its text. Using this   operator is not necessary as we implicitly interpret multi-word   queries as `OR` unless another supported boolean term is used. * `NOT` - returns items that do not contain the search term provided.   For example, a search for `marketing AND NOT BoxWorks` returns a result   that has only `marketing` within its text. Results containing   `BoxWorks` are omitted. We do not support lower case (that is, `and`, `or`, and `not`) or mixed case (that is, `And`, `Or`, and `Not`) operators. This field is required unless the `mdfilters` parameter is defined.
   */
  query?: string;
  /**
   * Recent Updater User Ids
   * @description Limits the search results to any items that have been updated by the given list of users, defined as a list of comma separated user IDs. The items still need to be owned or shared with the currently authenticated user for them to show up in the search results. If the user does not have access to any files owned by any of the users an empty result set will be returned. This feature only searches back to the last 10 versions of an item.
   */
  recent_updater_user_ids?: string[];
  /**
   * Scope
   * @description Limits the search results to either the files that the user has access to, or to files available to the entire enterprise. The scope defaults to `user_content`, which limits the search results to content that is available to the currently authenticated user. The `enterprise_content` can be requested by an admin through our support channels. Once this scope has been enabled for a user, it will allow that use to query for content across the entire enterprise and not only the content that they have access to.
   * @default user_content
   * @enum {string}
   */
  scope: "enterprise_content" | "user_content";
  /**
   * Size Range
   * @description Limits the search results to any items with a size within a given file size range. This applied to files and folders. Size ranges are defined as comma separated list of a lower and upper byte size limit (inclusive). The upper and lower bound can be omitted to create open ranges.
   */
  size_range?: number[];
  /**
   * Sort
   * @description Defines the order in which search results are returned. This API defaults to returning items by relevance unless this parameter is explicitly specified. * `relevance` (default) returns the results sorted by relevance to the query search term. The relevance is based on the occurrence of the search term in the items name, description, content, and additional properties. * `modified_at` returns the results ordered in descending order by date at which the item was last modified.
   * @default relevance
   * @enum {string}
   */
  sort: "modified_at" | "relevance";
  /**
   * Trash Content
   * @description Determines if the search should look in the trash for items. By default, this API only returns search results for items not currently in the trash (`non_trashed_only`). * `trashed_only` - Only searches for items currently in the trash * `non_trashed_only` - Only searches for items currently not in   the trash * `all_items` - Searches for both trashed and non-trashed items.
   * @default non_trashed_only
   * @enum {string}
   */
  trash_content: "all_items" | "non_trashed_only" | "trashed_only";
  /**
   * Type
   * @description Limits the search results to any items of this type. This parameter only takes one value. By default the API returns items that match any of these types. * `file` - Limits the search results to files * `folder` - Limits the search results to folders * `web_link` - Limits the search results to web links, also known    as bookmarks
   * @enum {string}
   */
  type?: "file" | "folder" | "web_link";
  /**
   * Updated At Range
   * @description Limits the search results to any items updated within a given date range. Date ranges are defined as comma separated RFC3339 timestamps. If the start date is omitted (`,2014-05-17T13:35:01-07:00`) anything updated before the end date will be returned. If the end date is omitted (`2014-05-15T13:35:01-07:00,`) the current date will be used as the end date instead.
   */
  updated_at_range?: string[];
};

/**
 * Type of BOX's BOX_SEARCH_FOR_CONTENT tool output.
 */
type BOX_SEARCH_FOR_CONTENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_STARTS_WORKFLOW_BASED_ON_REQUEST_BODY tool input.
 */
type BOX_STARTS_WORKFLOW_BASED_ON_REQUEST_BODY_INPUT = {
  /**
   * Files
   * @description The array of files for which the workflow should start. All files must be in the workflow"s configured folder.
   */
  files?: {
      /**
       * Id
       * @description The id of the file
       */
      id?: string;
      /**
       * Type
       * @description The type of the file object
       * @enum {string}
       */
      type?: "file";
  }[];
  /**
   * Flow  Id
   * @description The id of the flow
   */
  flow__id?: string;
  /**
   * Flow  Type
   * @description The type of the flow object
   */
  flow__type?: string;
  /**
   * Folder  Id
   * @description The id of the folder
   */
  folder__id?: string;
  /**
   * Folder  Type
   * @description The type of the folder object
   * @enum {string}
   */
  folder__type?: "folder";
  /**
   * Outcomes
   * @description A configurable outcome the workflow should complete.
   */
  outcomes?: {
      /**
       * Id
       * @description ID of a specific outcome
       */
      id: string;
  }[];
  /**
   * Type
   * @description The type of the parameters object
   * @enum {string}
   */
  type?: "workflow_parameters";
  /**
   * Workflow Id
   * @description The ID of the workflow.
   */
  workflow_id?: string;
};

/**
 * Type of BOX's BOX_STARTS_WORKFLOW_BASED_ON_REQUEST_BODY tool output.
 */
type BOX_STARTS_WORKFLOW_BASED_ON_REQUEST_BODY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_TRANSFER_OWNED_FOLDERS tool input.
 */
type BOX_TRANSFER_OWNED_FOLDERS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Notify
   * @description Determines if users should receive email notification for the action performed.
   */
  notify?: boolean;
  /**
   * Owned  By  Id
   * @description The ID of the user who the folder will be transferred to
   */
  owned__by__id?: string;
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_TRANSFER_OWNED_FOLDERS tool output.
 */
type BOX_TRANSFER_OWNED_FOLDERS_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UNASSIGN_LEGAL_HOLD_POLICY tool input.
 */
type BOX_UNASSIGN_LEGAL_HOLD_POLICY_INPUT = {
  /**
   * Legal Hold Policy Assignment Id
   * @description The ID of the legal hold policy assignment
   */
  legal_hold_policy_assignment_id?: string;
};

/**
 * Type of BOX's BOX_UNASSIGN_LEGAL_HOLD_POLICY tool output.
 */
type BOX_UNASSIGN_LEGAL_HOLD_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UNASSIGN_STORAGE_POLICY tool input.
 */
type BOX_UNASSIGN_STORAGE_POLICY_INPUT = {
  /**
   * Storage Policy Assignment Id
   * @description The ID of the storage policy assignment.
   */
  storage_policy_assignment_id?: string;
};

/**
 * Type of BOX's BOX_UNASSIGN_STORAGE_POLICY tool output.
 */
type BOX_UNASSIGN_STORAGE_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UNASSIGN_TASK tool input.
 */
type BOX_UNASSIGN_TASK_INPUT = {
  /**
   * Task Assignment Id
   * @description The ID of the task assignment.
   */
  task_assignment_id?: string;
};

/**
 * Type of BOX's BOX_UNASSIGN_TASK tool output.
 */
type BOX_UNASSIGN_TASK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_AI_AGENT tool input.
 */
type BOX_UPDATE_AI_AGENT_INPUT = {
  /**
   * Access State
   * @description The state of the AI Agent. Possible values are: `enabled`, `disabled`, and `enabled_for_selected_users`.
   */
  access_state?: string;
  /**
   * Agent Id
   * @description The ID of the agent to update.
   */
  agent_id?: string;
  /**
   * Allowed Entities
   * @description List of allowed users or groups.
   */
  allowed_entities?: {
      [key: string]: unknown;
  }[];
  /**
   * Ask  Access  State
   * @description The state of the AI Agent capability. Possible values are: `enabled` and `disabled`.
   */
  ask__access__state?: string;
  /**
   * Ask  Custom  Instructions
   * @description Custom instructions for the agent.
   */
  ask__custom__instructions?: string;
  /**
   * Ask  Description
   * @description The description of the AI Agent.
   */
  ask__description?: string;
  /**
   * Ask  Type
   * @description The type of AI agent used to handle queries.
   * @enum {string}
   */
  ask__type?: "ai_agent_ask";
  /**
   * Extract  Access  State
   * @description The state of the AI Agent capability. Possible values are: `enabled` and `disabled`.
   */
  extract__access__state?: string;
  /**
   * Extract  Custom  Instructions
   * @description Custom instructions for the agent.
   */
  extract__custom__instructions?: string;
  /**
   * Extract  Description
   * @description The description of the AI Agent.
   */
  extract__description?: string;
  /**
   * Extract  Type
   * @description The type of AI agent to be used for extraction.
   * @enum {string}
   */
  extract__type?: "ai_agent_extract";
  /**
   * Icon Reference
   * @description The icon reference of the AI Agent. It should have format of the URL `https://cdn01.boxcdn.net/app-assets/aistudio/avatars/<file_name>` where possible values of `file_name` are: `logo_boxAi.png`,`logo_stamp.png`,`logo_legal.png`,`logo_finance.png`,`logo_config.png`,`logo_handshake.png`,`logo_analytics.png`,`logo_classification.png`
   */
  icon_reference?: string;
  /**
   * Name
   * @description The name of the AI Agent.
   */
  name?: string;
  /**
   * Text  Gen  Access  State
   * @description The state of the AI Agent capability. Possible values are: `enabled` and `disabled`.
   */
  text__gen__access__state?: string;
  /**
   * Text  Gen  Custom  Instructions
   * @description Custom instructions for the agent.
   */
  text__gen__custom__instructions?: string;
  /**
   * Text  Gen  Description
   * @description The description of the AI Agent.
   */
  text__gen__description?: string;
  /**
   * Text  Gen  Type
   * @description The type of AI agent used for generating text.
   * @enum {string}
   */
  text__gen__type?: "ai_agent_text_gen";
  /**
   * Type
   * @description The type of agent used to handle queries.
   * @enum {string}
   */
  type?: "ai_agent";
};

/**
 * Type of BOX's BOX_UPDATE_AI_AGENT tool output.
 */
type BOX_UPDATE_AI_AGENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_ALL_BOX_SKILL_CARDS_ON_FILE tool input.
 */
type BOX_UPDATE_ALL_BOX_SKILL_CARDS_ON_FILE_INPUT = {
  /**
   * File  Id
   * @description The ID of the file
   */
  file__id?: string;
  /**
   * File  Type
   * @description `file`
   * @enum {string}
   */
  file__type?: "file";
  /**
   * File  Version  Id
   * @description The ID of the file version
   */
  file__version__id?: string;
  /**
   * File  Version  Type
   * @description `file_version`
   * @enum {string}
   */
  file__version__type?: "file_version";
  /**
   * Metadata  Cards
   * @description A list of Box Skill cards to apply to this file.
   */
  metadata__cards?: {
      [key: string]: unknown;
  }[];
  /**
   * Skill Id
   * @description The ID of the skill to apply this metadata for.
   */
  skill_id?: string;
  /**
   * Status
   * @description Defines the status of this invocation. Set this to `success` when setting Skill cards.
   * @enum {string}
   */
  status?: "invoked" | "permanent_failure" | "processing" | "success" | "transient_failure";
  /**
   * Usage  Unit
   * @description `file`
   */
  usage__unit?: string;
  /**
   * Usage  Value
   * @description `1`
   */
  usage__value?: number;
};

/**
 * Type of BOX's BOX_UPDATE_ALL_BOX_SKILL_CARDS_ON_FILE tool output.
 */
type BOX_UPDATE_ALL_BOX_SKILL_CARDS_ON_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_COLLABORATION tool input.
 */
type BOX_UPDATE_COLLABORATION_INPUT = {
  /**
   * Can View Path
   * @description Determines if the invited users can see the entire parent path to the associated folder. The user will not gain privileges in any parent folder and therefore can not see content the user is not collaborated on. Be aware that this meaningfully increases the time required to load the invitee"s **All Files** page. We recommend you limit the number of collaborations with `can_view_path` enabled to 1,000 per user. Only owner or co-owners can invite collaborators with a `can_view_path` of `true`. `can_view_path` can only be used for folder collaborations.
   */
  can_view_path?: boolean;
  /**
   * Collaboration Id
   * @description The ID of the collaboration
   */
  collaboration_id?: string;
  /**
   * Expires At
   * Format: date-time
   * @description Update the expiration date for the collaboration. At this date, the collaboration will be automatically removed from the item. This feature will only work if the **Automatically remove invited collaborators: Allow folder owners to extend the expiry date** setting has been enabled in the **Enterprise Settings** of the **Admin Console**. When the setting is not enabled, collaborations can not have an expiry date and a value for this field will be result in an error. Additionally, a collaboration can only be given an expiration if it was created after the **Automatically remove invited collaborator** setting was enabled.
   */
  expires_at?: string;
  /**
   * Role
   * @description The level of access granted.
   * @enum {string}
   */
  role?: "co-owner" | "editor" | "owner" | "previewer" | "previewer uploader" | "uploader" | "viewer" | "viewer uploader";
  /**
   * Status
   * @description <!--alex ignore reject--> Set the status of a `pending` collaboration invitation, effectively accepting, or rejecting the invite.
   * @enum {string}
   */
  status?: "accepted" | "pending" | "rejected";
};

/**
 * Type of BOX's BOX_UPDATE_COLLABORATION tool output.
 */
type BOX_UPDATE_COLLABORATION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_COMMENT tool input.
 */
type BOX_UPDATE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Message
   * @description The text of the comment to update
   */
  message?: string;
};

/**
 * Type of BOX's BOX_UPDATE_COMMENT tool output.
 */
type BOX_UPDATE_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_FILE tool input.
 */
type BOX_UPDATE_FILE_INPUT = {
  /**
   * Collections
   * @description An array of collections to make this file a member of. Currently we only support the `favorites` collection. To get the ID for a collection, use the [List all collections][1] endpoint. Passing an empty array `[]` or `null` will remove the file from all collections. [1]: e://get-collections
   */
  collections?: {
      /**
       * Id
       * @description The unique identifier for this object
       */
      id?: string;
      /**
       * Type
       * @description The type for this object
       */
      type?: string;
  }[];
  /**
   * Description
   * @description The description for a file. This can be seen in the right-hand sidebar panel when viewing a file in the Box web app. Additionally, this index is used in the search index of the file, allowing users to find the file by the content in the description.
   */
  description?: string;
  /**
   * Disposition At
   * Format: date-time
   * @description The retention expiration timestamp for the given file. This date cannot be shortened once set on a file.
   */
  disposition_at?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Lock  Access
   * @description The type of this object.
   * @enum {string}
   */
  lock__access?: "lock";
  /**
   * Lock  Expires  At
   * Format: date-time
   * @description Defines the time at which the lock expires.
   */
  lock__expires__at?: string;
  /**
   * Lock  Is  Download  Prevented
   * @description Defines if the file can be downloaded while it is locked.
   */
  lock__is__download__prevented?: boolean;
  /**
   * Name
   * @description An optional different name for the file. This can be used to rename the file.
   */
  name?: string;
  /**
   * Permissions  Can  Download
   * @description Defines who is allowed to download this file. The possible values are either `open` for everyone or `company` for the other members of the user"s enterprise. This setting overrides the download permissions that are normally part of the `role` of a collaboration. When set to `company`, this essentially removes the download option for external users with `viewer` or `editor` a roles.
   * @enum {string}
   */
  permissions__can__download?: "company" | "open";
  /**
   * Tags
   * @description The tags for this item. These tags are shown in the Box web app and mobile apps next to an item. To add or remove a tag, retrieve the item"s current tags, modify them, and then update this field. There is a limit of 100 tags per item, and 10,000 unique tags per enterprise.
   */
  tags?: string[];
};

/**
 * Type of BOX's BOX_UPDATE_FILE tool output.
 */
type BOX_UPDATE_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_FILE_REQUEST tool input.
 */
type BOX_UPDATE_FILE_REQUEST_INPUT = {
  /**
   * Description
   * @description An optional new description for the file request. This can be used to change the description of the file request. This will default to the value on the existing file request.
   */
  description?: string;
  /**
   * Expires At
   * Format: date-time
   * @description The date after which a file request will no longer accept new submissions. After this date, the `status` will automatically be set to `inactive`. This will default to the value on the existing file request.
   */
  expires_at?: string;
  /**
   * File Request Id
   * @description The unique identifier that represent a file request. The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/filerequest/123` the `file_request_id` is `123`.
   */
  file_request_id?: string;
  /**
   * Is Description Required
   * @description Whether a file request submitter is required to provide a description of the files they are submitting. When this setting is set to true, the Box UI will show a description field on the file request form. This will default to the value on the existing file request.
   */
  is_description_required?: boolean;
  /**
   * Is Email Required
   * @description Whether a file request submitter is required to provide their email address. When this setting is set to true, the Box UI will show an email field on the file request form. This will default to the value on the existing file request.
   */
  is_email_required?: boolean;
  /**
   * Status
   * @description An optional new status of the file request. When the status is set to `inactive`, the file request will no longer accept new submissions, and any visitor to the file request URL will receive a `HTTP 404` status code. This will default to the value on the existing file request.
   * @enum {string}
   */
  status?: "active" | "inactive";
  /**
   * Title
   * @description An optional new title for the file request. This can be used to change the title of the file request. This will default to the value on the existing file request.
   */
  title?: string;
};

/**
 * Type of BOX's BOX_UPDATE_FILE_REQUEST tool output.
 */
type BOX_UPDATE_FILE_REQUEST_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_FOLDER tool input.
 */
type BOX_UPDATE_FOLDER_INPUT = {
  /**
   * Can Non Owners Invite
   * @description Specifies if users who are not the owner of the folder can invite new collaborators to the folder.
   */
  can_non_owners_invite?: boolean;
  /**
   * Can Non Owners View Collaborators
   * @description Restricts collaborators who are not the owner of this folder from viewing other collaborations on this folder. It also restricts non-owners from inviting new collaborators. When setting this field to `false`, it is required to also set `can_non_owners_invite_collaborators` to `false` if it has not already been set.
   */
  can_non_owners_view_collaborators?: boolean;
  /**
   * Collections
   * @description An array of collections to make this folder a member of. Currently we only support the `favorites` collection. To get the ID for a collection, use the [List all collections][1] endpoint. Passing an empty array `[]` or `null` will remove the folder from all collections. [1]: e://get-collections
   */
  collections?: {
      /**
       * Id
       * @description The unique identifier for this object
       */
      id?: string;
      /**
       * Type
       * @description The type for this object
       */
      type?: string;
  }[];
  /**
   * Description
   * @description The optional description of this folder
   */
  description?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Is Collaboration Restricted To Enterprise
   * @description Specifies if new invites to this folder are restricted to users within the enterprise. This does not affect existing collaborations.
   */
  is_collaboration_restricted_to_enterprise?: boolean;
  /**
   * Name
   * @description The optional new name for this folder.
   */
  name?: string;
  /**
   * Sync State
   * @description Specifies whether a folder should be synced to a user"s device or not. This is used by Box Sync (discontinued) and is not used by Box Drive.
   * @enum {string}
   */
  sync_state?: "not_synced" | "partially_synced" | "synced";
  /**
   * Tags
   * @description The tags for this item. These tags are shown in the Box web app and mobile apps next to an item. To add or remove a tag, retrieve the item"s current tags, modify them, and then update this field. There is a limit of 100 tags per item, and 10,000 unique tags per enterprise.
   */
  tags?: string[];
};

/**
 * Type of BOX's BOX_UPDATE_FOLDER tool output.
 */
type BOX_UPDATE_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_GROUP tool input.
 */
type BOX_UPDATE_GROUP_INPUT = {
  /**
   * Description
   * @description A human readable description of the group.
   */
  description?: string;
  /**
   * External Sync Identifier
   * @description An arbitrary identifier that can be used by external group sync tools to link this Box Group to an external group. Example values of this field could be an **Active Directory Object ID** or a **Google Group ID**. We recommend you use of this field in order to avoid issues when group names are updated in either Box or external systems.
   */
  external_sync_identifier?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Group Id
   * @description The ID of the group.
   */
  group_id?: string;
  /**
   * Invitability Level
   * @description Specifies who can invite the group to collaborate on folders. When set to `admins_only` the enterprise admin, co-admins, and the group"s admin can invite the group. When set to `admins_and_members` all the admins listed above and group members can invite the group. When set to `all_managed_users` all managed users in the enterprise can invite the group.
   * @enum {string}
   */
  invitability_level?: "admins_and_members" | "admins_only" | "all_managed_users";
  /**
   * Member Viewability Level
   * @description Specifies who can see the members of the group. * `admins_only` - the enterprise admin, co-admins, group"s   group admin * `admins_and_members` - all admins and group members * `all_managed_users` - all managed users in the   enterprise
   * @enum {string}
   */
  member_viewability_level?: "admins_and_members" | "admins_only" | "all_managed_users";
  /**
   * Name
   * @description The name of the new group to be created. Must be unique within the enterprise.
   */
  name?: string;
  /**
   * Provenance
   * @description Keeps track of which external source this group is coming, for example `Active Directory`, or `Okta`. Setting this will also prevent Box admins from editing the group name and its members directly via the Box web application. This is desirable for one-way syncing of groups.
   */
  provenance?: string;
};

/**
 * Type of BOX's BOX_UPDATE_GROUP tool output.
 */
type BOX_UPDATE_GROUP_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_GROUP_MEMBERSHIP tool input.
 */
type BOX_UPDATE_GROUP_MEMBERSHIP_INPUT = {
  /**
   * Configurable Permissions
   * @description Custom configuration for the permissions an admin if a group will receive. This option has no effect on members with a role of `member`. Setting these permissions overwrites the default access levels of an admin. Specifying a value of `null` for this object will disable all configurable permissions. Specifying permissions will set them accordingly, omitted permissions will be enabled by default.
   */
  configurable_permissions?: {
      [key: string]: boolean;
  };
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Group Membership Id
   * @description The ID of the group membership.
   */
  group_membership_id?: string;
  /**
   * Role
   * @description The role of the user in the group.
   * @enum {string}
   */
  role?: "admin" | "member";
};

/**
 * Type of BOX's BOX_UPDATE_GROUP_MEMBERSHIP tool output.
 */
type BOX_UPDATE_GROUP_MEMBERSHIP_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_LEGAL_HOLD_POLICY tool input.
 */
type BOX_UPDATE_LEGAL_HOLD_POLICY_INPUT = {
  /**
   * Description
   * @description A description for the policy.
   */
  description?: string;
  /**
   * Legal Hold Policy Id
   * @description The ID of the legal hold policy
   */
  legal_hold_policy_id?: string;
  /**
   * Policy Name
   * @description The name of the policy.
   */
  policy_name?: string;
  /**
   * Release Notes
   * @description Notes around why the policy was released.
   */
  release_notes?: string;
};

/**
 * Type of BOX's BOX_UPDATE_LEGAL_HOLD_POLICY tool output.
 */
type BOX_UPDATE_LEGAL_HOLD_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_RETENTION_POLICY tool input.
 */
type BOX_UPDATE_RETENTION_POLICY_INPUT = {
  /**
   * Are Owners Notified
   * @description Determines if owners and co-owners of items under the policy are notified when the retention duration is about to end.
   */
  are_owners_notified?: boolean;
  /**
   * Can Owner Extend Retention
   * @description Determines if the owner of items under the policy can extend the retention when the original retention duration is about to end.
   */
  can_owner_extend_retention?: boolean;
  /**
   * Custom Notification Recipients
   * @description A list of users notified when the retention duration is about to end.
   */
  custom_notification_recipients?: {
      /**
       * Id
       * @description The unique identifier for this user
       */
      id: string;
      /**
       * Type
       * @description `user`
       * @enum {string}
       */
      type: "user";
  }[];
  /**
   * Description
   * @description The additional text description of the retention policy.
   */
  description?: string;
  /**
   * Disposition Action
   * @description The disposition action of the retention policy. This action can be `permanently_delete`, which will cause the content retained by the policy to be permanently deleted, or `remove_retention`, which will lift the retention policy from the content, allowing it to be deleted by users, once the retention policy has expired. You can use `null` if you don"t want to change `disposition_action`.
   * @enum {string}
   */
  disposition_action?: "permanently_delete" | "remove_retention";
  /**
   * Policy Name
   * @description The name for the retention policy
   */
  policy_name?: string;
  /**
   * Retention Length
   * Format: int32
   * @description The length of the retention policy. This value specifies the duration in days that the retention policy will be active for after being assigned to content.  If the policy has a `policy_type` of `indefinite`, the `retention_length` will also be `indefinite`.
   */
  retention_length?: string;
  /**
   * Retention Policy Id
   * @description The ID of the retention policy.
   */
  retention_policy_id?: string;
  /**
   * Retention Type
   * @description Specifies the retention type: * `modifiable`: You can modify the retention policy. For example, you can add or remove folders, shorten or lengthen the policy duration, or delete the assignment. Use this type if your retention policy is not related to any regulatory purposes. * `non-modifiable`: You can modify the retention policy only in a limited way: add a folder, lengthen the duration, retire the policy, change the disposition action or notification settings. You cannot perform other actions, such as deleting the assignment or shortening the policy duration. Use this type to ensure compliance with regulatory retention policies. When updating a retention policy, you can use `non-modifiable` type only. You can convert a `modifiable` policy to `non-modifiable`, but not the other way around.
   */
  retention_type?: string;
  /**
   * Status
   * @description Used to retire a retention policy. If not retiring a policy, do not include this parameter or set it to `null`.
   */
  status?: string;
};

/**
 * Type of BOX's BOX_UPDATE_RETENTION_POLICY tool output.
 */
type BOX_UPDATE_RETENTION_POLICY_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_SHARED_LINK_ON_FILE tool input.
 */
type BOX_UPDATE_SHARED_LINK_ON_FILE_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
  /**
   * Shared  Link  Access
   * @description The level of access for the shared link. This can be restricted to anyone with the link (`open`), only people within the company (`company`) and only those who have been invited to the folder (`collaborators`). If not set, this field defaults to the access level specified by the enterprise admin. To create a shared link with this default setting pass the `shared_link` object with no `access` field, for example `{ "shared_link": {} }`. The `company` access level is only available to paid accounts.
   * @enum {string}
   */
  shared__link__access?: "collaborators" | "company" | "open";
  /**
   * Shared  Link  Password
   * @description The password required to access the shared link. Set the password to `null` to remove it. Passwords must now be at least eight characters long and include a number, upper case letter, or a non-numeric or non-alphabetic character. A password can only be set when `access` is set to `open`.
   */
  shared__link__password?: string;
  /**
   * Shared  Link  Permissions  Can  Download
   * @description If the shared link allows for downloading of files. This can only be set when `access` is set to `open` or `company`.
   */
  shared__link__permissions__can__download?: boolean;
  /**
   * Shared  Link  Permissions  Can  Edit
   * @description If the shared link allows for editing of files. This can only be set when `access` is set to `open` or `company`. This value can only be `true` is `can_download` is also `true`.
   */
  shared__link__permissions__can__edit?: boolean;
  /**
   * Shared  Link  Permissions  Can  Preview
   * @description If the shared link allows for previewing of files. This value is always `true`. For shared links on folders this also applies to any items in the folder.
   */
  shared__link__permissions__can__preview?: boolean;
  /**
   * Shared  Link  Unshared  At
   * Format: date-time
   * @description The timestamp at which this shared link will expire. This field can only be set by users with paid accounts. The value must be greater than the current date and time.
   */
  shared__link__unshared__at?: string;
  /**
   * Shared  Link  Vanity  Name
   * @description Defines a custom vanity name to use in the shared link URL, for example `https://app.box.com/v/my-shared-link`. Custom URLs should not be used when sharing sensitive content as vanity URLs are a lot easier to guess than regular shared links.
   */
  shared__link__vanity__name?: string;
};

/**
 * Type of BOX's BOX_UPDATE_SHARED_LINK_ON_FILE tool output.
 */
type BOX_UPDATE_SHARED_LINK_ON_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_SHARED_LINK_ON_FOLDER tool input.
 */
type BOX_UPDATE_SHARED_LINK_ON_FOLDER_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * Folder Id
   * @description The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id?: string;
  /**
   * Shared  Link  Access
   * @description The level of access for the shared link. This can be restricted to anyone with the link (`open`), only people within the company (`company`) and only those who have been invited to the folder (`collaborators`). If not set, this field defaults to the access level specified by the enterprise admin. To create a shared link with this default setting pass the `shared_link` object with no `access` field, for example `{ "shared_link": {} }`. The `company` access level is only available to paid accounts.
   * @enum {string}
   */
  shared__link__access?: "collaborators" | "company" | "open";
  /**
   * Shared  Link  Password
   * @description The password required to access the shared link. Set the password to `null` to remove it. Passwords must now be at least eight characters long and include a number, upper case letter, or a non-numeric or non-alphabetic character. A password can only be set when `access` is set to `open`.
   */
  shared__link__password?: string;
  /**
   * Shared  Link  Permissions  Can  Download
   * @description If the shared link allows for downloading of files. This can only be set when `access` is set to `open` or `company`.
   */
  shared__link__permissions__can__download?: boolean;
  /**
   * Shared  Link  Permissions  Can  Edit
   * @description This value can only be `false` for items with a `type` of `folder`.
   */
  shared__link__permissions__can__edit?: boolean;
  /**
   * Shared  Link  Permissions  Can  Preview
   * @description If the shared link allows for previewing of files. This value is always `true`. For shared links on folders this also applies to any items in the folder.
   */
  shared__link__permissions__can__preview?: boolean;
  /**
   * Shared  Link  Unshared  At
   * Format: date-time
   * @description The timestamp at which this shared link will expire. This field can only be set by users with paid accounts. The value must be greater than the current date and time.
   */
  shared__link__unshared__at?: string;
  /**
   * Shared  Link  Vanity  Name
   * @description Defines a custom vanity name to use in the shared link URL, for example `https://app.box.com/v/my-shared-link`. Custom URLs should not be used when sharing sensitive content as vanity URLs are a lot easier to guess than regular shared links.
   */
  shared__link__vanity__name?: string;
};

/**
 * Type of BOX's BOX_UPDATE_SHARED_LINK_ON_FOLDER tool output.
 */
type BOX_UPDATE_SHARED_LINK_ON_FOLDER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_SHARED_LINK_ON_WEB_LINK tool input.
 */
type BOX_UPDATE_SHARED_LINK_ON_WEB_LINK_INPUT = {
  /**
   * Fields
   * @description Explicitly request the `shared_link` fields to be returned for this item.
   */
  fields?: string;
  /**
   * Shared  Link  Access
   * @description The level of access for the shared link. This can be restricted to anyone with the link (`open`), only people within the company (`company`) and only those who have been invited to the folder (`collaborators`). If not set, this field defaults to the access level specified by the enterprise admin. To create a shared link with this default setting pass the `shared_link` object with no `access` field, for example `{ "shared_link": {} }`. The `company` access level is only available to paid accounts.
   * @enum {string}
   */
  shared__link__access?: "collaborators" | "company" | "open";
  /**
   * Shared  Link  Password
   * @description The password required to access the shared link. Set the password to `null` to remove it. Passwords must now be at least eight characters long and include a number, upper case letter, or a non-numeric or non-alphabetic character. A password can only be set when `access` is set to `open`.
   */
  shared__link__password?: string;
  /**
   * Shared  Link  Permissions  Can  Download
   * @description If the shared link allows for downloading of files. This can only be set when `access` is set to `open` or `company`.
   */
  shared__link__permissions__can__download?: boolean;
  /**
   * Shared  Link  Permissions  Can  Edit
   * @description This value can only be `true` is `type` is `file`.
   */
  shared__link__permissions__can__edit?: boolean;
  /**
   * Shared  Link  Permissions  Can  Preview
   * @description If the shared link allows for previewing of files. This value is always `true`. For shared links on folders this also applies to any items in the folder.
   */
  shared__link__permissions__can__preview?: boolean;
  /**
   * Shared  Link  Unshared  At
   * Format: date-time
   * @description The timestamp at which this shared link will expire. This field can only be set by users with paid accounts. The value must be greater than the current date and time.
   */
  shared__link__unshared__at?: string;
  /**
   * Shared  Link  Vanity  Name
   * @description Defines a custom vanity name to use in the shared link URL, for example `https://app.box.com/v/my-shared-link`. Custom URLs should not be used when sharing sensitive content as vanity URLs are a lot easier to guess than regular shared links.
   */
  shared__link__vanity__name?: string;
  /**
   * Web Link Id
   * @description The ID of the web link.
   */
  web_link_id?: string;
};

/**
 * Type of BOX's BOX_UPDATE_SHARED_LINK_ON_WEB_LINK tool output.
 */
type BOX_UPDATE_SHARED_LINK_ON_WEB_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID tool input.
 */
type BOX_UPDATE_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID_INPUT = {
  /**
   * Description
   * @description The updated description for the shield information barrier segment.
   */
  description?: string;
  /**
   * Name
   * @description The updated name for the shield information barrier segment.
   */
  name?: string;
  /**
   * Shield Information Barrier Segment Id
   * @description The ID of the shield information barrier segment.
   */
  shield_information_barrier_segment_id?: string;
};

/**
 * Type of BOX's BOX_UPDATE_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID tool output.
 */
type BOX_UPDATE_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_SLACK_INTEGRATION_MAPPING tool input.
 */
type BOX_UPDATE_SLACK_INTEGRATION_MAPPING_INPUT = {
  /**
   * Integration Mapping Id
   * @description An ID of an integration mapping
   */
  integration_mapping_id?: string;
};

/**
 * Type of BOX's BOX_UPDATE_SLACK_INTEGRATION_MAPPING tool output.
 */
type BOX_UPDATE_SLACK_INTEGRATION_MAPPING_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_STORAGE_POLICY_ASSIGNMENT tool input.
 */
type BOX_UPDATE_STORAGE_POLICY_ASSIGNMENT_INPUT = {
  /**
   * Storage  Policy  Id
   * @description The ID of the storage policy to assign.
   */
  storage__policy__id?: string;
  /**
   * Storage  Policy  Type
   * @description The type to assign.
   * @enum {string}
   */
  storage__policy__type?: "storage_policy";
  /**
   * Storage Policy Assignment Id
   * @description The ID of the storage policy assignment.
   */
  storage_policy_assignment_id?: string;
};

/**
 * Type of BOX's BOX_UPDATE_STORAGE_POLICY_ASSIGNMENT tool output.
 */
type BOX_UPDATE_STORAGE_POLICY_ASSIGNMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_TASK tool input.
 */
type BOX_UPDATE_TASK_INPUT = {
  /**
   * Action
   * @description The action the task assignee will be prompted to do. Must be * `review` defines an approval task that can be approved or rejected * `complete` defines a general task which can be completed
   * @enum {string}
   */
  action?: "complete" | "review";
  /**
   * Completion Rule
   * @description Defines which assignees need to complete this task before the task is considered completed. * `all_assignees` (default) requires all assignees to review or approve the the task in order for it to be considered completed. * `any_assignee` accepts any one assignee to review or approve the the task in order for it to be considered completed.
   * @enum {string}
   */
  completion_rule?: "all_assignees" | "any_assignee";
  /**
   * Due At
   * Format: date-time
   * @description When the task is due at.
   */
  due_at?: string;
  /**
   * Message
   * @description The message included with the task.
   */
  message?: string;
  /**
   * Task Id
   * @description The ID of the task.
   */
  task_id?: string;
};

/**
 * Type of BOX's BOX_UPDATE_TASK tool output.
 */
type BOX_UPDATE_TASK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_TASK_ASSIGNMENT tool input.
 */
type BOX_UPDATE_TASK_ASSIGNMENT_INPUT = {
  /**
   * Message
   * @description An optional message by the assignee that can be added to the task.
   */
  message?: string;
  /**
   * Resolution State
   * @description The state of the task assigned to the user. * For a task with an `action` value of `complete` this can be `incomplete` or `completed`. * For a task with an `action` of `review` this can be `incomplete`, `approved`, or `rejected`.
   * @enum {string}
   */
  resolution_state?: "approved" | "completed" | "incomplete" | "rejected";
  /**
   * Task Assignment Id
   * @description The ID of the task assignment.
   */
  task_assignment_id?: string;
};

/**
 * Type of BOX's BOX_UPDATE_TASK_ASSIGNMENT tool output.
 */
type BOX_UPDATE_TASK_ASSIGNMENT_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_TEAMS_INTEGRATION_MAPPING tool input.
 */
type BOX_UPDATE_TEAMS_INTEGRATION_MAPPING_INPUT = {
  /**
   * Integration Mapping Id
   * @description An ID of an integration mapping
   */
  integration_mapping_id?: string;
};

/**
 * Type of BOX's BOX_UPDATE_TEAMS_INTEGRATION_MAPPING tool output.
 */
type BOX_UPDATE_TEAMS_INTEGRATION_MAPPING_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_TERMS_OF_SERVICE tool input.
 */
type BOX_UPDATE_TERMS_OF_SERVICE_INPUT = {
  /**
   * Status
   * @description Whether this terms of service is active.
   * @enum {string}
   */
  status?: "disabled" | "enabled";
  /**
   * Terms Of Service Id
   * @description The ID of the terms of service.
   */
  terms_of_service_id?: string;
  /**
   * Text
   * @description The terms of service text to display to users. The text can be set to empty if the `status` is set to `disabled`.
   */
  text?: string;
};

/**
 * Type of BOX's BOX_UPDATE_TERMS_OF_SERVICE tool output.
 */
type BOX_UPDATE_TERMS_OF_SERVICE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_TERMS_OF_SERVICE_STATUS_FOR_EXISTING_USER tool input.
 */
type BOX_UPDATE_TERMS_OF_SERVICE_STATUS_FOR_EXISTING_USER_INPUT = {
  /**
   * Is Accepted
   * @description Whether the user has accepted the terms.
   */
  is_accepted?: boolean;
  /**
   * Terms Of Service User Status Id
   * @description The ID of the terms of service status.
   */
  terms_of_service_user_status_id?: string;
};

/**
 * Type of BOX's BOX_UPDATE_TERMS_OF_SERVICE_STATUS_FOR_EXISTING_USER tool output.
 */
type BOX_UPDATE_TERMS_OF_SERVICE_STATUS_FOR_EXISTING_USER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_USER tool input.
 */
type BOX_UPDATE_USER_INPUT = {
  /**
   * Address
   * @description The user’s address
   */
  address?: string;
  /**
   * Can See Managed Users
   * @description Whether the user can see other enterprise users in their contact list
   */
  can_see_managed_users?: boolean;
  /**
   * Enterprise
   * @description Set this to `null` to roll the user out of the enterprise and make them a free user
   */
  enterprise?: string;
  /**
   * External App User Id
   * @description An external identifier for an app user, which can be used to look up the user. This can be used to tie user IDs from external identity providers to Box users. Note: In order to update this field, you need to request a token using the application that created the app user.
   */
  external_app_user_id?: string;
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * Is Exempt From Device Limits
   * @description Whether to exempt the user from enterprise device limits
   */
  is_exempt_from_device_limits?: boolean;
  /**
   * Is Exempt From Login Verification
   * @description Whether the user must use two-factor authentication
   */
  is_exempt_from_login_verification?: boolean;
  /**
   * Is External Collab Restricted
   * @description Whether the user is allowed to collaborate with users outside their enterprise
   */
  is_external_collab_restricted?: boolean;
  /**
   * Is Password Reset Required
   * @description Whether the user is required to reset their password
   */
  is_password_reset_required?: boolean;
  /**
   * Is Sync Enabled
   * @description Whether the user can use Box Sync
   */
  is_sync_enabled?: boolean;
  /**
   * Job Title
   * @description The user’s job title
   */
  job_title?: string;
  /**
   * Language
   * @description The language of the user, formatted in modified version of the [ISO 639-1](/guides/api-calls/language-codes) format.
   */
  language?: string;
  /**
   * Login
   * @description The email address the user uses to log in Note: If the target user"s email is not confirmed, then the primary login address cannot be changed.
   */
  login?: string;
  /**
   * Name
   * @description The name of the user
   */
  name?: string;
  /**
   * Notification  Email  Email
   * @description The email address to send the notifications to.
   */
  notification__email__email?: string;
  /**
   * Notify
   * @description Whether the user should receive an email when they are rolled out of an enterprise
   */
  notify?: boolean;
  /**
   * Phone
   * @description The user’s phone number
   */
  phone?: string;
  /**
   * Role
   * @description The user’s enterprise role
   * @enum {string}
   */
  role?: "coadmin" | "user";
  /**
   * Space Amount
   * @description The user’s total available space in bytes. Set this to `-1` to indicate unlimited storage.
   */
  space_amount?: number;
  /**
   * Status
   * @description The user"s account status
   * @enum {string}
   */
  status?: "active" | "cannot_delete_edit" | "cannot_delete_edit_upload" | "inactive";
  /**
   * Timezone
   * Format: timezone
   * @description The user"s timezone
   */
  timezone?: string;
  /**
   * Tracking Codes
   * @description Tracking codes allow an admin to generate reports from the admin console and assign an attribute to a specific group of users. This setting must be enabled for an enterprise before it can be used.
   */
  tracking_codes?: {
      /**
       * Name
       * @description The name of the tracking code, which must be preconfigured in the Admin Console
       */
      name?: string;
      /**
       * Type
       * @description `tracking_code`
       * @enum {string}
       */
      type?: "tracking_code";
      /**
       * Value
       * @description The value of the tracking code
       */
      value?: string;
  }[];
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: string;
};

/**
 * Type of BOX's BOX_UPDATE_USER tool output.
 */
type BOX_UPDATE_USER_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_WEBHOOK tool input.
 */
type BOX_UPDATE_WEBHOOK_INPUT = {
  /**
   * Address
   * @description The URL that is notified by this webhook
   */
  address?: string;
  /**
   * Target  Id
   * @description The ID of the item to trigger a webhook
   */
  target__id?: string;
  /**
   * Target  Type
   * @description The type of item to trigger a webhook
   * @enum {string}
   */
  target__type?: "file" | "folder";
  /**
   * Triggers
   * @description An array of event names that this webhook is to be triggered for
   */
  triggers?: string[];
  /**
   * Webhook Id
   * @description The ID of the webhook.
   */
  webhook_id?: string;
};

/**
 * Type of BOX's BOX_UPDATE_WEBHOOK tool output.
 */
type BOX_UPDATE_WEBHOOK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPDATE_WEB_LINK tool input.
 */
type BOX_UPDATE_WEB_LINK_INPUT = {
  /**
   * Description
   * @description A new description of the web link.
   */
  description?: string;
  /**
   * Name
   * @description A new name for the web link. Defaults to the URL if not set.
   */
  name?: string;
  /**
   * Shared  Link  Access
   * @description The level of access for the shared link. This can be restricted to anyone with the link (`open`), only people within the company (`company`) and only those who have been invited to the folder (`collaborators`). If not set, this field defaults to the access level specified by the enterprise admin. To create a shared link with this default setting pass the `shared_link` object with no `access` field, for example `{ "shared_link": {} }`. The `company` access level is only available to paid accounts.
   * @enum {string}
   */
  shared__link__access?: "collaborators" | "company" | "open";
  /**
   * Shared  Link  Password
   * @description The password required to access the shared link. Set the password to `null` to remove it. Passwords must now be at least eight characters long and include a number, upper case letter, or a non-numeric or non-alphabetic character. A password can only be set when `access` is set to `open`.
   */
  shared__link__password?: string;
  /**
   * Shared  Link  Unshared  At
   * Format: date-time
   * @description The timestamp at which this shared link will expire. This field can only be set by users with paid accounts. The value must be greater than the current date and time.
   */
  shared__link__unshared__at?: string;
  /**
   * Shared  Link  Vanity  Name
   * @description Defines a custom vanity name to use in the shared link URL, for example `https://app.box.com/v/my-shared-link`. Custom URLs should not be used when sharing sensitive content as vanity URLs are a lot easier to guess than regular shared links.
   */
  shared__link__vanity__name?: string;
  /**
   * Url
   * @description The new URL that the web link links to. Must start with `"http://"` or `"https://"`.
   */
  url?: string;
  /**
   * Web Link Id
   * @description The ID of the web link.
   */
  web_link_id?: string;
};

/**
 * Type of BOX's BOX_UPDATE_WEB_LINK tool output.
 */
type BOX_UPDATE_WEB_LINK_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPLOAD_FILE tool input.
 */
type BOX_UPLOAD_FILE_INPUT = {
  /**
   * Attributes
   * @description Attributes
   */
  attributes?: {
      [key: string]: unknown;
  };
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File
   * Format: binary
   * @description File
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
};

/**
 * Type of BOX's BOX_UPLOAD_FILE tool output.
 */
type BOX_UPLOAD_FILE_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPLOAD_FILE_VERSION tool input.
 */
type BOX_UPLOAD_FILE_VERSION_INPUT = {
  /**
   * Attributes
   * @description Attributes
   */
  attributes?: {
      [key: string]: unknown;
  };
  /**
   * Fields
   * @description A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
   */
  fields?: string[];
  /**
   * File
   * Format: binary
   * @description File
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * File Id
   * @description The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id?: string;
};

/**
 * Type of BOX's BOX_UPLOAD_FILE_VERSION tool output.
 */
type BOX_UPLOAD_FILE_VERSION_OUTPUT = {
  /** Data */
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
 * Type of BOX's BOX_UPLOAD_PART_OF_FILE tool input.
 */
type BOX_UPLOAD_PART_OF_FILE_INPUT = {
  /**
   * FileUploadable
   * @description Path to file
   */
  file?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Upload Session Id
   * @description The ID of the upload session.
   */
  upload_session_id?: string;
};

/**
 * Type of BOX's BOX_UPLOAD_PART_OF_FILE tool output.
 */
type BOX_UPLOAD_PART_OF_FILE_OUTPUT = {
  /** Data */
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
 * Type map of all available tool input types for toolkit "BOX".
 */
export type BOX_TOOL_INPUTS = {
  ADD_CLASSIFICATION_TO_FILE: BOX_ADD_CLASSIFICATION_TO_FILE_INPUT
  ADD_CLASSIFICATION_TO_FOLDER: BOX_ADD_CLASSIFICATION_TO_FOLDER_INPUT
  ADD_DOMAIN_TO_LIST_OF_ALLOWED_COLLABORATION_DOMAINS: BOX_ADD_DOMAIN_TO_LIST_OF_ALLOWED_COLLABORATION_DOMAINS_INPUT
  ADD_INITIAL_CLASSIFICATIONS: BOX_ADD_INITIAL_CLASSIFICATIONS_INPUT
  ADD_OR_UPDATE_USER_AVATAR: BOX_ADD_OR_UPDATE_USER_AVATAR_INPUT
  ADD_SHARED_LINK_TO_FILE: BOX_ADD_SHARED_LINK_TO_FILE_INPUT
  ADD_SHARED_LINK_TO_FOLDER: BOX_ADD_SHARED_LINK_TO_FOLDER_INPUT
  ADD_SHARED_LINK_TO_WEB_LINK: BOX_ADD_SHARED_LINK_TO_WEB_LINK_INPUT
  ADD_USER_TO_GROUP: BOX_ADD_USER_TO_GROUP_INPUT
  APPLY_WATERMARK_TO_FILE: BOX_APPLY_WATERMARK_TO_FILE_INPUT
  APPLY_WATERMARK_TO_FOLDER: BOX_APPLY_WATERMARK_TO_FOLDER_INPUT
  ASK_QUESTION: BOX_ASK_QUESTION_INPUT
  ASSIGN_LEGAL_HOLD_POLICY: BOX_ASSIGN_LEGAL_HOLD_POLICY_INPUT
  ASSIGN_RETENTION_POLICY: BOX_ASSIGN_RETENTION_POLICY_INPUT
  ASSIGN_STORAGE_POLICY: BOX_ASSIGN_STORAGE_POLICY_INPUT
  ASSIGN_TASK: BOX_ASSIGN_TASK_INPUT
  AUTHORIZE_USER: BOX_AUTHORIZE_USER_INPUT
  CANCEL_BOX_SIGN_REQUEST: BOX_CANCEL_BOX_SIGN_REQUEST_INPUT
  CHANGE_SHIELD_INFORMATION_BARRIER_STATUS: BOX_CHANGE_SHIELD_INFORMATION_BARRIER_STATUS_INPUT
  COMMIT_UPLOAD_SESSION: BOX_COMMIT_UPLOAD_SESSION_INPUT
  COPY_FILE: BOX_COPY_FILE_INPUT
  COPY_FILE_REQUEST: BOX_COPY_FILE_REQUEST_INPUT
  COPY_FOLDER: BOX_COPY_FOLDER_INPUT
  CREATE_AI_AGENT: BOX_CREATE_AI_AGENT_INPUT
  CREATE_BOX_SIGN_REQUEST: BOX_CREATE_BOX_SIGN_REQUEST_INPUT
  CREATE_BOX_SKILL_CARDS_ON_FILE: BOX_CREATE_BOX_SKILL_CARDS_ON_FILE_INPUT
  CREATE_COLLABORATION: BOX_CREATE_COLLABORATION_INPUT
  CREATE_COMMENT: BOX_CREATE_COMMENT_INPUT
  CREATE_EMAIL_ALIAS: BOX_CREATE_EMAIL_ALIAS_INPUT
  CREATE_FOLDER: BOX_CREATE_FOLDER_INPUT
  CREATE_FOLDER_LOCK: BOX_CREATE_FOLDER_LOCK_INPUT
  CREATE_GROUP: BOX_CREATE_GROUP_INPUT
  CREATE_JOBS_TO_TERMINATE_USERS_SESSION: BOX_CREATE_JOBS_TO_TERMINATE_USERS_SESSION_INPUT
  CREATE_JOBS_TO_TERMINATE_USER_GROUP_SESSION: BOX_CREATE_JOBS_TO_TERMINATE_USER_GROUP_SESSION_INPUT
  CREATE_LEGAL_HOLD_POLICY: BOX_CREATE_LEGAL_HOLD_POLICY_INPUT
  CREATE_METADATA_CASCADE_POLICY: BOX_CREATE_METADATA_CASCADE_POLICY_INPUT
  CREATE_METADATA_INSTANCE_ON_FILE: BOX_CREATE_METADATA_INSTANCE_ON_FILE_INPUT
  CREATE_METADATA_INSTANCE_ON_FOLDER: BOX_CREATE_METADATA_INSTANCE_ON_FOLDER_INPUT
  CREATE_METADATA_TEMPLATE: BOX_CREATE_METADATA_TEMPLATE_INPUT
  CREATE_RETENTION_POLICY: BOX_CREATE_RETENTION_POLICY_INPUT
  CREATE_SHIELD_INFORMATION_BARRIER: BOX_CREATE_SHIELD_INFORMATION_BARRIER_INPUT
  CREATE_SHIELD_INFORMATION_BARRIER_REPORT: BOX_CREATE_SHIELD_INFORMATION_BARRIER_REPORT_INPUT
  CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT: BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_INPUT
  CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER: BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_INPUT
  CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION: BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_INPUT
  CREATE_SLACK_INTEGRATION_MAPPING: BOX_CREATE_SLACK_INTEGRATION_MAPPING_INPUT
  CREATE_TASK: BOX_CREATE_TASK_INPUT
  CREATE_TEAMS_INTEGRATION_MAPPING: BOX_CREATE_TEAMS_INTEGRATION_MAPPING_INPUT
  CREATE_TERMS_OF_SERVICE: BOX_CREATE_TERMS_OF_SERVICE_INPUT
  CREATE_TERMS_OF_SERVICE_STATUS_FOR_NEW_USER: BOX_CREATE_TERMS_OF_SERVICE_STATUS_FOR_NEW_USER_INPUT
  CREATE_UPLOAD_SESSION: BOX_CREATE_UPLOAD_SESSION_INPUT
  CREATE_UPLOAD_SESSION_FOR_EXISTING_FILE: BOX_CREATE_UPLOAD_SESSION_FOR_EXISTING_FILE_INPUT
  CREATE_USER: BOX_CREATE_USER_INPUT
  CREATE_USER_EXEMPTION_FROM_COLLABORATION_DOMAIN_RESTRICTIONS: BOX_CREATE_USER_EXEMPTION_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_INPUT
  CREATE_USER_INVITE: BOX_CREATE_USER_INVITE_INPUT
  CREATE_WEBHOOK: BOX_CREATE_WEBHOOK_INPUT
  CREATE_WEB_LINK: BOX_CREATE_WEB_LINK_INPUT
  CREATE_ZIP_DOWNLOAD: BOX_CREATE_ZIP_DOWNLOAD_INPUT
  DELETE_AI_AGENT: BOX_DELETE_AI_AGENT_INPUT
  DELETE_FILE: BOX_DELETE_FILE_INPUT
  DELETE_FILE_REQUEST: BOX_DELETE_FILE_REQUEST_INPUT
  DELETE_FOLDER: BOX_DELETE_FOLDER_INPUT
  DELETE_FOLDER_LOCK: BOX_DELETE_FOLDER_LOCK_INPUT
  DELETE_RETENTION_POLICY: BOX_DELETE_RETENTION_POLICY_INPUT
  DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT: BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_INPUT
  DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID: BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID_INPUT
  DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID: BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID_INPUT
  DELETE_SLACK_INTEGRATION_MAPPING: BOX_DELETE_SLACK_INTEGRATION_MAPPING_INPUT
  DELETE_TEAMS_INTEGRATION_MAPPING: BOX_DELETE_TEAMS_INTEGRATION_MAPPING_INPUT
  DELETE_USER: BOX_DELETE_USER_INPUT
  DELETE_USER_AVATAR: BOX_DELETE_USER_AVATAR_INPUT
  DOWNLOAD_FILE: BOX_DOWNLOAD_FILE_INPUT
  DOWNLOAD_ZIP_ARCHIVE: BOX_DOWNLOAD_ZIP_ARCHIVE_INPUT
  EXTRACT_METADATA_FREEFORM: BOX_EXTRACT_METADATA_FREEFORM_INPUT
  EXTRACT_METADATA_STRUCTURED: BOX_EXTRACT_METADATA_STRUCTURED_INPUT
  FIND_APP_ITEM_FOR_SHARED_LINK: BOX_FIND_APP_ITEM_FOR_SHARED_LINK_INPUT
  FIND_FILE_FOR_SHARED_LINK: BOX_FIND_FILE_FOR_SHARED_LINK_INPUT
  FIND_FOLDER_FOR_SHARED_LINK: BOX_FIND_FOLDER_FOR_SHARED_LINK_INPUT
  FIND_METADATA_TEMPLATE_BY_INSTANCE_ID: BOX_FIND_METADATA_TEMPLATE_BY_INSTANCE_ID_INPUT
  FIND_WEB_LINK_FOR_SHARED_LINK: BOX_FIND_WEB_LINK_FOR_SHARED_LINK_INPUT
  FORCE_APPLY_METADATA_CASCADE_POLICY_TO_FOLDER: BOX_FORCE_APPLY_METADATA_CASCADE_POLICY_TO_FOLDER_INPUT
  GENERATE_TEXT: BOX_GENERATE_TEXT_INPUT
  GET_AI_AGENT_BY_AGENT_ID: BOX_GET_AI_AGENT_BY_AGENT_ID_INPUT
  GET_AI_AGENT_DEFAULT_CONFIGURATION: BOX_GET_AI_AGENT_DEFAULT_CONFIGURATION_INPUT
  GET_ALLOWED_COLLABORATION_DOMAIN: BOX_GET_ALLOWED_COLLABORATION_DOMAIN_INPUT
  GET_BOX_SIGN_REQUEST_BY_ID: BOX_GET_BOX_SIGN_REQUEST_BY_ID_INPUT
  GET_BOX_SIGN_TEMPLATE_BY_ID: BOX_GET_BOX_SIGN_TEMPLATE_BY_ID_INPUT
  GET_CLASSIFICATION_ON_FILE: BOX_GET_CLASSIFICATION_ON_FILE_INPUT
  GET_CLASSIFICATION_ON_FOLDER: BOX_GET_CLASSIFICATION_ON_FOLDER_INPUT
  GET_COLLABORATION: BOX_GET_COLLABORATION_INPUT
  GET_COLLECTION_BY_ID: BOX_GET_COLLECTION_BY_ID_INPUT
  GET_COMMENT: BOX_GET_COMMENT_INPUT
  GET_CURRENT_USER: BOX_GET_CURRENT_USER_INPUT
  GET_DEVICE_PIN: BOX_GET_DEVICE_PIN_INPUT
  GET_EVENTS_LONG_POLL_ENDPOINT: BOX_GET_EVENTS_LONG_POLL_ENDPOINT_INPUT
  GET_FILES_UNDER_RETENTION: BOX_GET_FILES_UNDER_RETENTION_INPUT
  GET_FILE_INFORMATION: BOX_GET_FILE_INFORMATION_INPUT
  GET_FILE_REQUEST: BOX_GET_FILE_REQUEST_INPUT
  GET_FILE_THUMBNAIL: BOX_GET_FILE_THUMBNAIL_INPUT
  GET_FILE_VERSION: BOX_GET_FILE_VERSION_INPUT
  GET_FILE_VERSIONS_UNDER_RETENTION: BOX_GET_FILE_VERSIONS_UNDER_RETENTION_INPUT
  GET_FILE_VERSION_LEGAL_HOLD: BOX_GET_FILE_VERSION_LEGAL_HOLD_INPUT
  GET_FOLDER_INFORMATION: BOX_GET_FOLDER_INFORMATION_INPUT
  GET_GROUP: BOX_GET_GROUP_INPUT
  GET_GROUP_MEMBERSHIP: BOX_GET_GROUP_MEMBERSHIP_INPUT
  GET_LEGAL_HOLD_POLICY: BOX_GET_LEGAL_HOLD_POLICY_INPUT
  GET_LEGAL_HOLD_POLICY_ASSIGNMENT: BOX_GET_LEGAL_HOLD_POLICY_ASSIGNMENT_INPUT
  GET_METADATA_CASCADE_POLICY: BOX_GET_METADATA_CASCADE_POLICY_INPUT
  GET_METADATA_INSTANCE_ON_FILE: BOX_GET_METADATA_INSTANCE_ON_FILE_INPUT
  GET_METADATA_INSTANCE_ON_FOLDER: BOX_GET_METADATA_INSTANCE_ON_FOLDER_INPUT
  GET_METADATA_TEMPLATE_BY_ID: BOX_GET_METADATA_TEMPLATE_BY_ID_INPUT
  GET_METADATA_TEMPLATE_BY_NAME: BOX_GET_METADATA_TEMPLATE_BY_NAME_INPUT
  GET_RETENTION_ON_FILE: BOX_GET_RETENTION_ON_FILE_INPUT
  GET_RETENTION_POLICY: BOX_GET_RETENTION_POLICY_INPUT
  GET_RETENTION_POLICY_ASSIGNMENT: BOX_GET_RETENTION_POLICY_ASSIGNMENT_INPUT
  GET_SHARED_LINK_FOR_FILE: BOX_GET_SHARED_LINK_FOR_FILE_INPUT
  GET_SHARED_LINK_FOR_FOLDER: BOX_GET_SHARED_LINK_FOR_FOLDER_INPUT
  GET_SHARED_LINK_FOR_WEB_LINK: BOX_GET_SHARED_LINK_FOR_WEB_LINK_INPUT
  GET_SHIELD_INFORMATION_BARRIER_REPORT_BY_ID: BOX_GET_SHIELD_INFORMATION_BARRIER_REPORT_BY_ID_INPUT
  GET_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID: BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID_INPUT
  GET_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID: BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID_INPUT
  GET_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID: BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID_INPUT
  GET_SHIELD_INFORMATION_BARRIER_WITH_SPECIFIED_ID: BOX_GET_SHIELD_INFORMATION_BARRIER_WITH_SPECIFIED_ID_INPUT
  GET_STORAGE_POLICY: BOX_GET_STORAGE_POLICY_INPUT
  GET_STORAGE_POLICY_ASSIGNMENT: BOX_GET_STORAGE_POLICY_ASSIGNMENT_INPUT
  GET_TASK: BOX_GET_TASK_INPUT
  GET_TASK_ASSIGNMENT: BOX_GET_TASK_ASSIGNMENT_INPUT
  GET_TERMS_OF_SERVICE: BOX_GET_TERMS_OF_SERVICE_INPUT
  GET_TRASHED_FILE: BOX_GET_TRASHED_FILE_INPUT
  GET_TRASHED_FOLDER: BOX_GET_TRASHED_FOLDER_INPUT
  GET_TRASHED_WEB_LINK: BOX_GET_TRASHED_WEB_LINK_INPUT
  GET_UPLOAD_SESSION: BOX_GET_UPLOAD_SESSION_INPUT
  GET_USER: BOX_GET_USER_INPUT
  GET_USER_AVATAR: BOX_GET_USER_AVATAR_INPUT
  GET_USER_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS: BOX_GET_USER_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_INPUT
  GET_USER_INVITE_STATUS: BOX_GET_USER_INVITE_STATUS_INPUT
  GET_WATERMARK_FOR_FOLDER: BOX_GET_WATERMARK_FOR_FOLDER_INPUT
  GET_WATERMARK_ON_FILE: BOX_GET_WATERMARK_ON_FILE_INPUT
  GET_WEBHOOK: BOX_GET_WEBHOOK_INPUT
  GET_WEB_LINK: BOX_GET_WEB_LINK_INPUT
  GET_ZIP_DOWNLOAD_STATUS: BOX_GET_ZIP_DOWNLOAD_STATUS_INPUT
  LIST_AI_AGENTS: BOX_LIST_AI_AGENTS_INPUT
  LIST_ALLOWED_COLLABORATION_DOMAINS: BOX_LIST_ALLOWED_COLLABORATION_DOMAINS_INPUT
  LIST_ALL_CLASSIFICATIONS: BOX_LIST_ALL_CLASSIFICATIONS_INPUT
  LIST_ALL_COLLECTIONS: BOX_LIST_ALL_COLLECTIONS_INPUT
  LIST_ALL_FILE_VERSIONS: BOX_LIST_ALL_FILE_VERSIONS_INPUT
  LIST_ALL_GLOBAL_METADATA_TEMPLATES: BOX_LIST_ALL_GLOBAL_METADATA_TEMPLATES_INPUT
  LIST_ALL_LEGAL_HOLD_POLICIES: BOX_LIST_ALL_LEGAL_HOLD_POLICIES_INPUT
  LIST_ALL_METADATA_TEMPLATES_FOR_ENTERPRISE: BOX_LIST_ALL_METADATA_TEMPLATES_FOR_ENTERPRISE_INPUT
  LIST_ALL_WEBHOOKS: BOX_LIST_ALL_WEBHOOKS_INPUT
  LIST_BOX_SIGN_REQUESTS: BOX_LIST_BOX_SIGN_REQUESTS_INPUT
  LIST_BOX_SIGN_TEMPLATES: BOX_LIST_BOX_SIGN_TEMPLATES_INPUT
  LIST_BOX_SKILL_CARDS_ON_FILE: BOX_LIST_BOX_SKILL_CARDS_ON_FILE_INPUT
  LIST_COLLECTION_ITEMS: BOX_LIST_COLLECTION_ITEMS_INPUT
  LIST_ENTERPRISE_DEVICE_PINS: BOX_LIST_ENTERPRISE_DEVICE_PINS_INPUT
  LIST_ENTERPRISE_USERS: BOX_LIST_ENTERPRISE_USERS_INPUT
  LIST_FILE_APP_ITEM_ASSOCIATIONS: BOX_LIST_FILE_APP_ITEM_ASSOCIATIONS_INPUT
  LIST_FILE_COLLABORATIONS: BOX_LIST_FILE_COLLABORATIONS_INPUT
  LIST_FILE_COMMENTS: BOX_LIST_FILE_COMMENTS_INPUT
  LIST_FILE_VERSION_LEGAL_HOLDS: BOX_LIST_FILE_VERSION_LEGAL_HOLDS_INPUT
  LIST_FILE_VERSION_RETENTIONS: BOX_LIST_FILE_VERSION_RETENTIONS_INPUT
  LIST_FOLDER_APP_ITEM_ASSOCIATIONS: BOX_LIST_FOLDER_APP_ITEM_ASSOCIATIONS_INPUT
  LIST_FOLDER_COLLABORATIONS: BOX_LIST_FOLDER_COLLABORATIONS_INPUT
  LIST_FOLDER_LOCKS: BOX_LIST_FOLDER_LOCKS_INPUT
  LIST_GROUPS_FOR_ENTERPRISE: BOX_LIST_GROUPS_FOR_ENTERPRISE_INPUT
  LIST_GROUP_COLLABORATIONS: BOX_LIST_GROUP_COLLABORATIONS_INPUT
  LIST_ITEMS_IN_FOLDER: BOX_LIST_ITEMS_IN_FOLDER_INPUT
  LIST_LEGAL_HOLD_POLICY_ASSIGNMENTS: BOX_LIST_LEGAL_HOLD_POLICY_ASSIGNMENTS_INPUT
  LIST_MEMBERS_OF_GROUP: BOX_LIST_MEMBERS_OF_GROUP_INPUT
  LIST_METADATA_CASCADE_POLICIES: BOX_LIST_METADATA_CASCADE_POLICIES_INPUT
  LIST_METADATA_INSTANCES_ON_FILE: BOX_LIST_METADATA_INSTANCES_ON_FILE_INPUT
  LIST_METADATA_INSTANCES_ON_FOLDER: BOX_LIST_METADATA_INSTANCES_ON_FOLDER_INPUT
  LIST_PARTS: BOX_LIST_PARTS_INPUT
  LIST_PENDING_COLLABORATIONS: BOX_LIST_PENDING_COLLABORATIONS_INPUT
  LIST_PREVIOUS_FILE_VERSIONS_FOR_LEGAL_HOLD_POLICY_ASSIGNMENT: BOX_LIST_PREVIOUS_FILE_VERSIONS_FOR_LEGAL_HOLD_POLICY_ASSIGNMENT_INPUT
  LIST_RECENTLY_ACCESSED_ITEMS: BOX_LIST_RECENTLY_ACCESSED_ITEMS_INPUT
  LIST_RETENTION_POLICIES: BOX_LIST_RETENTION_POLICIES_INPUT
  LIST_RETENTION_POLICY_ASSIGNMENTS: BOX_LIST_RETENTION_POLICY_ASSIGNMENTS_INPUT
  LIST_SHIELD_INFORMATION_BARRIERS: BOX_LIST_SHIELD_INFORMATION_BARRIERS_INPUT
  LIST_SHIELD_INFORMATION_BARRIER_REPORTS: BOX_LIST_SHIELD_INFORMATION_BARRIER_REPORTS_INPUT
  LIST_SHIELD_INFORMATION_BARRIER_SEGMENTS: BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENTS_INPUT
  LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBERS: BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBERS_INPUT
  LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTIONS: BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTIONS_INPUT
  LIST_SLACK_INTEGRATION_MAPPINGS: BOX_LIST_SLACK_INTEGRATION_MAPPINGS_INPUT
  LIST_STORAGE_POLICIES: BOX_LIST_STORAGE_POLICIES_INPUT
  LIST_STORAGE_POLICY_ASSIGNMENTS: BOX_LIST_STORAGE_POLICY_ASSIGNMENTS_INPUT
  LIST_TASKS_ON_FILE: BOX_LIST_TASKS_ON_FILE_INPUT
  LIST_TASK_ASSIGNMENTS: BOX_LIST_TASK_ASSIGNMENTS_INPUT
  LIST_TEAMS_INTEGRATION_MAPPINGS: BOX_LIST_TEAMS_INTEGRATION_MAPPINGS_INPUT
  LIST_TERMS_OF_SERVICES: BOX_LIST_TERMS_OF_SERVICES_INPUT
  LIST_TERMS_OF_SERVICE_USER_STATUSES: BOX_LIST_TERMS_OF_SERVICE_USER_STATUSES_INPUT
  LIST_TRASHED_ITEMS: BOX_LIST_TRASHED_ITEMS_INPUT
  LIST_USERS_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS: BOX_LIST_USERS_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_INPUT
  LIST_USER_AND_ENTERPRISE_EVENTS: BOX_LIST_USER_AND_ENTERPRISE_EVENTS_INPUT
  LIST_USER_S_EMAIL_ALIASES: BOX_LIST_USER_S_EMAIL_ALIASES_INPUT
  LIST_USER_S_GROUPS: BOX_LIST_USER_S_GROUPS_INPUT
  LIST_WORKFLOWS: BOX_LIST_WORKFLOWS_INPUT
  PERMANENTLY_REMOVE_FILE: BOX_PERMANENTLY_REMOVE_FILE_INPUT
  PERMANENTLY_REMOVE_FOLDER: BOX_PERMANENTLY_REMOVE_FOLDER_INPUT
  PERMANENTLY_REMOVE_WEB_LINK: BOX_PERMANENTLY_REMOVE_WEB_LINK_INPUT
  PREFLIGHT_CHECK_BEFORE_UPLOAD: BOX_PREFLIGHT_CHECK_BEFORE_UPLOAD_INPUT
  PROMOTE_FILE_VERSION: BOX_PROMOTE_FILE_VERSION_INPUT
  QUERY_FILES_FOLDERS_BY_METADATA: BOX_QUERY_FILES_FOLDERS_BY_METADATA_INPUT
  REFRESH_ACCESS_TOKEN: BOX_REFRESH_ACCESS_TOKEN_INPUT
  REMOVE_BOX_SKILL_CARDS_FROM_FILE: BOX_REMOVE_BOX_SKILL_CARDS_FROM_FILE_INPUT
  REMOVE_CLASSIFICATION_FROM_FILE: BOX_REMOVE_CLASSIFICATION_FROM_FILE_INPUT
  REMOVE_CLASSIFICATION_FROM_FOLDER: BOX_REMOVE_CLASSIFICATION_FROM_FOLDER_INPUT
  REMOVE_COLLABORATION: BOX_REMOVE_COLLABORATION_INPUT
  REMOVE_COMMENT: BOX_REMOVE_COMMENT_INPUT
  REMOVE_DEVICE_PIN: BOX_REMOVE_DEVICE_PIN_INPUT
  REMOVE_DOMAIN_FROM_LIST_OF_ALLOWED_COLLABORATION_DOMAINS: BOX_REMOVE_DOMAIN_FROM_LIST_OF_ALLOWED_COLLABORATION_DOMAINS_INPUT
  REMOVE_EMAIL_ALIAS: BOX_REMOVE_EMAIL_ALIAS_INPUT
  REMOVE_FILE_VERSION: BOX_REMOVE_FILE_VERSION_INPUT
  REMOVE_GROUP: BOX_REMOVE_GROUP_INPUT
  REMOVE_LEGAL_HOLD_POLICY: BOX_REMOVE_LEGAL_HOLD_POLICY_INPUT
  REMOVE_METADATA_CASCADE_POLICY: BOX_REMOVE_METADATA_CASCADE_POLICY_INPUT
  REMOVE_METADATA_INSTANCE_FROM_FILE: BOX_REMOVE_METADATA_INSTANCE_FROM_FILE_INPUT
  REMOVE_METADATA_INSTANCE_FROM_FOLDER: BOX_REMOVE_METADATA_INSTANCE_FROM_FOLDER_INPUT
  REMOVE_METADATA_TEMPLATE: BOX_REMOVE_METADATA_TEMPLATE_INPUT
  REMOVE_RETENTION_POLICY_ASSIGNMENT: BOX_REMOVE_RETENTION_POLICY_ASSIGNMENT_INPUT
  REMOVE_SHARED_LINK_FROM_FILE: BOX_REMOVE_SHARED_LINK_FROM_FILE_INPUT
  REMOVE_SHARED_LINK_FROM_FOLDER: BOX_REMOVE_SHARED_LINK_FROM_FOLDER_INPUT
  REMOVE_SHARED_LINK_FROM_WEB_LINK: BOX_REMOVE_SHARED_LINK_FROM_WEB_LINK_INPUT
  REMOVE_TASK: BOX_REMOVE_TASK_INPUT
  REMOVE_UPLOAD_SESSION: BOX_REMOVE_UPLOAD_SESSION_INPUT
  REMOVE_USER_DOMAIN_EXEMPTION: BOX_REMOVE_USER_DOMAIN_EXEMPTION_INPUT
  REMOVE_USER_FROM_GROUP: BOX_REMOVE_USER_FROM_GROUP_INPUT
  REMOVE_WATERMARK_FROM_FILE: BOX_REMOVE_WATERMARK_FROM_FILE_INPUT
  REMOVE_WATERMARK_FROM_FOLDER: BOX_REMOVE_WATERMARK_FROM_FOLDER_INPUT
  REMOVE_WEBHOOK: BOX_REMOVE_WEBHOOK_INPUT
  REMOVE_WEB_LINK: BOX_REMOVE_WEB_LINK_INPUT
  REQUEST_ACCESS_TOKEN: BOX_REQUEST_ACCESS_TOKEN_INPUT
  RESEND_BOX_SIGN_REQUEST: BOX_RESEND_BOX_SIGN_REQUEST_INPUT
  RESTORE_FILE: BOX_RESTORE_FILE_INPUT
  RESTORE_FILE_VERSION: BOX_RESTORE_FILE_VERSION_INPUT
  RESTORE_FOLDER: BOX_RESTORE_FOLDER_INPUT
  RESTORE_WEB_LINK: BOX_RESTORE_WEB_LINK_INPUT
  REVIEW_FILES_ON_LEGAL_HOLD_POLICY_ASSIGNMENT: BOX_REVIEW_FILES_ON_LEGAL_HOLD_POLICY_ASSIGNMENT_INPUT
  REVOKE_ACCESS_TOKEN: BOX_REVOKE_ACCESS_TOKEN_INPUT
  SEARCH_FOR_CONTENT: BOX_SEARCH_FOR_CONTENT_INPUT
  STARTS_WORKFLOW_BASED_ON_REQUEST_BODY: BOX_STARTS_WORKFLOW_BASED_ON_REQUEST_BODY_INPUT
  TRANSFER_OWNED_FOLDERS: BOX_TRANSFER_OWNED_FOLDERS_INPUT
  UNASSIGN_LEGAL_HOLD_POLICY: BOX_UNASSIGN_LEGAL_HOLD_POLICY_INPUT
  UNASSIGN_STORAGE_POLICY: BOX_UNASSIGN_STORAGE_POLICY_INPUT
  UNASSIGN_TASK: BOX_UNASSIGN_TASK_INPUT
  UPDATE_AI_AGENT: BOX_UPDATE_AI_AGENT_INPUT
  UPDATE_ALL_BOX_SKILL_CARDS_ON_FILE: BOX_UPDATE_ALL_BOX_SKILL_CARDS_ON_FILE_INPUT
  UPDATE_COLLABORATION: BOX_UPDATE_COLLABORATION_INPUT
  UPDATE_COMMENT: BOX_UPDATE_COMMENT_INPUT
  UPDATE_FILE: BOX_UPDATE_FILE_INPUT
  UPDATE_FILE_REQUEST: BOX_UPDATE_FILE_REQUEST_INPUT
  UPDATE_FOLDER: BOX_UPDATE_FOLDER_INPUT
  UPDATE_GROUP: BOX_UPDATE_GROUP_INPUT
  UPDATE_GROUP_MEMBERSHIP: BOX_UPDATE_GROUP_MEMBERSHIP_INPUT
  UPDATE_LEGAL_HOLD_POLICY: BOX_UPDATE_LEGAL_HOLD_POLICY_INPUT
  UPDATE_RETENTION_POLICY: BOX_UPDATE_RETENTION_POLICY_INPUT
  UPDATE_SHARED_LINK_ON_FILE: BOX_UPDATE_SHARED_LINK_ON_FILE_INPUT
  UPDATE_SHARED_LINK_ON_FOLDER: BOX_UPDATE_SHARED_LINK_ON_FOLDER_INPUT
  UPDATE_SHARED_LINK_ON_WEB_LINK: BOX_UPDATE_SHARED_LINK_ON_WEB_LINK_INPUT
  UPDATE_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID: BOX_UPDATE_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID_INPUT
  UPDATE_SLACK_INTEGRATION_MAPPING: BOX_UPDATE_SLACK_INTEGRATION_MAPPING_INPUT
  UPDATE_STORAGE_POLICY_ASSIGNMENT: BOX_UPDATE_STORAGE_POLICY_ASSIGNMENT_INPUT
  UPDATE_TASK: BOX_UPDATE_TASK_INPUT
  UPDATE_TASK_ASSIGNMENT: BOX_UPDATE_TASK_ASSIGNMENT_INPUT
  UPDATE_TEAMS_INTEGRATION_MAPPING: BOX_UPDATE_TEAMS_INTEGRATION_MAPPING_INPUT
  UPDATE_TERMS_OF_SERVICE: BOX_UPDATE_TERMS_OF_SERVICE_INPUT
  UPDATE_TERMS_OF_SERVICE_STATUS_FOR_EXISTING_USER: BOX_UPDATE_TERMS_OF_SERVICE_STATUS_FOR_EXISTING_USER_INPUT
  UPDATE_USER: BOX_UPDATE_USER_INPUT
  UPDATE_WEBHOOK: BOX_UPDATE_WEBHOOK_INPUT
  UPDATE_WEB_LINK: BOX_UPDATE_WEB_LINK_INPUT
  UPLOAD_FILE: BOX_UPLOAD_FILE_INPUT
  UPLOAD_FILE_VERSION: BOX_UPLOAD_FILE_VERSION_INPUT
  UPLOAD_PART_OF_FILE: BOX_UPLOAD_PART_OF_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BOX".
 */
export type BOX_TOOL_OUTPUTS = {
  ADD_CLASSIFICATION_TO_FILE: BOX_ADD_CLASSIFICATION_TO_FILE_OUTPUT
  ADD_CLASSIFICATION_TO_FOLDER: BOX_ADD_CLASSIFICATION_TO_FOLDER_OUTPUT
  ADD_DOMAIN_TO_LIST_OF_ALLOWED_COLLABORATION_DOMAINS: BOX_ADD_DOMAIN_TO_LIST_OF_ALLOWED_COLLABORATION_DOMAINS_OUTPUT
  ADD_INITIAL_CLASSIFICATIONS: BOX_ADD_INITIAL_CLASSIFICATIONS_OUTPUT
  ADD_OR_UPDATE_USER_AVATAR: BOX_ADD_OR_UPDATE_USER_AVATAR_OUTPUT
  ADD_SHARED_LINK_TO_FILE: BOX_ADD_SHARED_LINK_TO_FILE_OUTPUT
  ADD_SHARED_LINK_TO_FOLDER: BOX_ADD_SHARED_LINK_TO_FOLDER_OUTPUT
  ADD_SHARED_LINK_TO_WEB_LINK: BOX_ADD_SHARED_LINK_TO_WEB_LINK_OUTPUT
  ADD_USER_TO_GROUP: BOX_ADD_USER_TO_GROUP_OUTPUT
  APPLY_WATERMARK_TO_FILE: BOX_APPLY_WATERMARK_TO_FILE_OUTPUT
  APPLY_WATERMARK_TO_FOLDER: BOX_APPLY_WATERMARK_TO_FOLDER_OUTPUT
  ASK_QUESTION: BOX_ASK_QUESTION_OUTPUT
  ASSIGN_LEGAL_HOLD_POLICY: BOX_ASSIGN_LEGAL_HOLD_POLICY_OUTPUT
  ASSIGN_RETENTION_POLICY: BOX_ASSIGN_RETENTION_POLICY_OUTPUT
  ASSIGN_STORAGE_POLICY: BOX_ASSIGN_STORAGE_POLICY_OUTPUT
  ASSIGN_TASK: BOX_ASSIGN_TASK_OUTPUT
  AUTHORIZE_USER: BOX_AUTHORIZE_USER_OUTPUT
  CANCEL_BOX_SIGN_REQUEST: BOX_CANCEL_BOX_SIGN_REQUEST_OUTPUT
  CHANGE_SHIELD_INFORMATION_BARRIER_STATUS: BOX_CHANGE_SHIELD_INFORMATION_BARRIER_STATUS_OUTPUT
  COMMIT_UPLOAD_SESSION: BOX_COMMIT_UPLOAD_SESSION_OUTPUT
  COPY_FILE: BOX_COPY_FILE_OUTPUT
  COPY_FILE_REQUEST: BOX_COPY_FILE_REQUEST_OUTPUT
  COPY_FOLDER: BOX_COPY_FOLDER_OUTPUT
  CREATE_AI_AGENT: BOX_CREATE_AI_AGENT_OUTPUT
  CREATE_BOX_SIGN_REQUEST: BOX_CREATE_BOX_SIGN_REQUEST_OUTPUT
  CREATE_BOX_SKILL_CARDS_ON_FILE: BOX_CREATE_BOX_SKILL_CARDS_ON_FILE_OUTPUT
  CREATE_COLLABORATION: BOX_CREATE_COLLABORATION_OUTPUT
  CREATE_COMMENT: BOX_CREATE_COMMENT_OUTPUT
  CREATE_EMAIL_ALIAS: BOX_CREATE_EMAIL_ALIAS_OUTPUT
  CREATE_FOLDER: BOX_CREATE_FOLDER_OUTPUT
  CREATE_FOLDER_LOCK: BOX_CREATE_FOLDER_LOCK_OUTPUT
  CREATE_GROUP: BOX_CREATE_GROUP_OUTPUT
  CREATE_JOBS_TO_TERMINATE_USERS_SESSION: BOX_CREATE_JOBS_TO_TERMINATE_USERS_SESSION_OUTPUT
  CREATE_JOBS_TO_TERMINATE_USER_GROUP_SESSION: BOX_CREATE_JOBS_TO_TERMINATE_USER_GROUP_SESSION_OUTPUT
  CREATE_LEGAL_HOLD_POLICY: BOX_CREATE_LEGAL_HOLD_POLICY_OUTPUT
  CREATE_METADATA_CASCADE_POLICY: BOX_CREATE_METADATA_CASCADE_POLICY_OUTPUT
  CREATE_METADATA_INSTANCE_ON_FILE: BOX_CREATE_METADATA_INSTANCE_ON_FILE_OUTPUT
  CREATE_METADATA_INSTANCE_ON_FOLDER: BOX_CREATE_METADATA_INSTANCE_ON_FOLDER_OUTPUT
  CREATE_METADATA_TEMPLATE: BOX_CREATE_METADATA_TEMPLATE_OUTPUT
  CREATE_RETENTION_POLICY: BOX_CREATE_RETENTION_POLICY_OUTPUT
  CREATE_SHIELD_INFORMATION_BARRIER: BOX_CREATE_SHIELD_INFORMATION_BARRIER_OUTPUT
  CREATE_SHIELD_INFORMATION_BARRIER_REPORT: BOX_CREATE_SHIELD_INFORMATION_BARRIER_REPORT_OUTPUT
  CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT: BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_OUTPUT
  CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER: BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_OUTPUT
  CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION: BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_OUTPUT
  CREATE_SLACK_INTEGRATION_MAPPING: BOX_CREATE_SLACK_INTEGRATION_MAPPING_OUTPUT
  CREATE_TASK: BOX_CREATE_TASK_OUTPUT
  CREATE_TEAMS_INTEGRATION_MAPPING: BOX_CREATE_TEAMS_INTEGRATION_MAPPING_OUTPUT
  CREATE_TERMS_OF_SERVICE: BOX_CREATE_TERMS_OF_SERVICE_OUTPUT
  CREATE_TERMS_OF_SERVICE_STATUS_FOR_NEW_USER: BOX_CREATE_TERMS_OF_SERVICE_STATUS_FOR_NEW_USER_OUTPUT
  CREATE_UPLOAD_SESSION: BOX_CREATE_UPLOAD_SESSION_OUTPUT
  CREATE_UPLOAD_SESSION_FOR_EXISTING_FILE: BOX_CREATE_UPLOAD_SESSION_FOR_EXISTING_FILE_OUTPUT
  CREATE_USER: BOX_CREATE_USER_OUTPUT
  CREATE_USER_EXEMPTION_FROM_COLLABORATION_DOMAIN_RESTRICTIONS: BOX_CREATE_USER_EXEMPTION_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_OUTPUT
  CREATE_USER_INVITE: BOX_CREATE_USER_INVITE_OUTPUT
  CREATE_WEBHOOK: BOX_CREATE_WEBHOOK_OUTPUT
  CREATE_WEB_LINK: BOX_CREATE_WEB_LINK_OUTPUT
  CREATE_ZIP_DOWNLOAD: BOX_CREATE_ZIP_DOWNLOAD_OUTPUT
  DELETE_AI_AGENT: BOX_DELETE_AI_AGENT_OUTPUT
  DELETE_FILE: BOX_DELETE_FILE_OUTPUT
  DELETE_FILE_REQUEST: BOX_DELETE_FILE_REQUEST_OUTPUT
  DELETE_FOLDER: BOX_DELETE_FOLDER_OUTPUT
  DELETE_FOLDER_LOCK: BOX_DELETE_FOLDER_LOCK_OUTPUT
  DELETE_RETENTION_POLICY: BOX_DELETE_RETENTION_POLICY_OUTPUT
  DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT: BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_OUTPUT
  DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID: BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID_OUTPUT
  DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID: BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID_OUTPUT
  DELETE_SLACK_INTEGRATION_MAPPING: BOX_DELETE_SLACK_INTEGRATION_MAPPING_OUTPUT
  DELETE_TEAMS_INTEGRATION_MAPPING: BOX_DELETE_TEAMS_INTEGRATION_MAPPING_OUTPUT
  DELETE_USER: BOX_DELETE_USER_OUTPUT
  DELETE_USER_AVATAR: BOX_DELETE_USER_AVATAR_OUTPUT
  DOWNLOAD_FILE: BOX_DOWNLOAD_FILE_OUTPUT
  DOWNLOAD_ZIP_ARCHIVE: BOX_DOWNLOAD_ZIP_ARCHIVE_OUTPUT
  EXTRACT_METADATA_FREEFORM: BOX_EXTRACT_METADATA_FREEFORM_OUTPUT
  EXTRACT_METADATA_STRUCTURED: BOX_EXTRACT_METADATA_STRUCTURED_OUTPUT
  FIND_APP_ITEM_FOR_SHARED_LINK: BOX_FIND_APP_ITEM_FOR_SHARED_LINK_OUTPUT
  FIND_FILE_FOR_SHARED_LINK: BOX_FIND_FILE_FOR_SHARED_LINK_OUTPUT
  FIND_FOLDER_FOR_SHARED_LINK: BOX_FIND_FOLDER_FOR_SHARED_LINK_OUTPUT
  FIND_METADATA_TEMPLATE_BY_INSTANCE_ID: BOX_FIND_METADATA_TEMPLATE_BY_INSTANCE_ID_OUTPUT
  FIND_WEB_LINK_FOR_SHARED_LINK: BOX_FIND_WEB_LINK_FOR_SHARED_LINK_OUTPUT
  FORCE_APPLY_METADATA_CASCADE_POLICY_TO_FOLDER: BOX_FORCE_APPLY_METADATA_CASCADE_POLICY_TO_FOLDER_OUTPUT
  GENERATE_TEXT: BOX_GENERATE_TEXT_OUTPUT
  GET_AI_AGENT_BY_AGENT_ID: BOX_GET_AI_AGENT_BY_AGENT_ID_OUTPUT
  GET_AI_AGENT_DEFAULT_CONFIGURATION: BOX_GET_AI_AGENT_DEFAULT_CONFIGURATION_OUTPUT
  GET_ALLOWED_COLLABORATION_DOMAIN: BOX_GET_ALLOWED_COLLABORATION_DOMAIN_OUTPUT
  GET_BOX_SIGN_REQUEST_BY_ID: BOX_GET_BOX_SIGN_REQUEST_BY_ID_OUTPUT
  GET_BOX_SIGN_TEMPLATE_BY_ID: BOX_GET_BOX_SIGN_TEMPLATE_BY_ID_OUTPUT
  GET_CLASSIFICATION_ON_FILE: BOX_GET_CLASSIFICATION_ON_FILE_OUTPUT
  GET_CLASSIFICATION_ON_FOLDER: BOX_GET_CLASSIFICATION_ON_FOLDER_OUTPUT
  GET_COLLABORATION: BOX_GET_COLLABORATION_OUTPUT
  GET_COLLECTION_BY_ID: BOX_GET_COLLECTION_BY_ID_OUTPUT
  GET_COMMENT: BOX_GET_COMMENT_OUTPUT
  GET_CURRENT_USER: BOX_GET_CURRENT_USER_OUTPUT
  GET_DEVICE_PIN: BOX_GET_DEVICE_PIN_OUTPUT
  GET_EVENTS_LONG_POLL_ENDPOINT: BOX_GET_EVENTS_LONG_POLL_ENDPOINT_OUTPUT
  GET_FILES_UNDER_RETENTION: BOX_GET_FILES_UNDER_RETENTION_OUTPUT
  GET_FILE_INFORMATION: BOX_GET_FILE_INFORMATION_OUTPUT
  GET_FILE_REQUEST: BOX_GET_FILE_REQUEST_OUTPUT
  GET_FILE_THUMBNAIL: BOX_GET_FILE_THUMBNAIL_OUTPUT
  GET_FILE_VERSION: BOX_GET_FILE_VERSION_OUTPUT
  GET_FILE_VERSIONS_UNDER_RETENTION: BOX_GET_FILE_VERSIONS_UNDER_RETENTION_OUTPUT
  GET_FILE_VERSION_LEGAL_HOLD: BOX_GET_FILE_VERSION_LEGAL_HOLD_OUTPUT
  GET_FOLDER_INFORMATION: BOX_GET_FOLDER_INFORMATION_OUTPUT
  GET_GROUP: BOX_GET_GROUP_OUTPUT
  GET_GROUP_MEMBERSHIP: BOX_GET_GROUP_MEMBERSHIP_OUTPUT
  GET_LEGAL_HOLD_POLICY: BOX_GET_LEGAL_HOLD_POLICY_OUTPUT
  GET_LEGAL_HOLD_POLICY_ASSIGNMENT: BOX_GET_LEGAL_HOLD_POLICY_ASSIGNMENT_OUTPUT
  GET_METADATA_CASCADE_POLICY: BOX_GET_METADATA_CASCADE_POLICY_OUTPUT
  GET_METADATA_INSTANCE_ON_FILE: BOX_GET_METADATA_INSTANCE_ON_FILE_OUTPUT
  GET_METADATA_INSTANCE_ON_FOLDER: BOX_GET_METADATA_INSTANCE_ON_FOLDER_OUTPUT
  GET_METADATA_TEMPLATE_BY_ID: BOX_GET_METADATA_TEMPLATE_BY_ID_OUTPUT
  GET_METADATA_TEMPLATE_BY_NAME: BOX_GET_METADATA_TEMPLATE_BY_NAME_OUTPUT
  GET_RETENTION_ON_FILE: BOX_GET_RETENTION_ON_FILE_OUTPUT
  GET_RETENTION_POLICY: BOX_GET_RETENTION_POLICY_OUTPUT
  GET_RETENTION_POLICY_ASSIGNMENT: BOX_GET_RETENTION_POLICY_ASSIGNMENT_OUTPUT
  GET_SHARED_LINK_FOR_FILE: BOX_GET_SHARED_LINK_FOR_FILE_OUTPUT
  GET_SHARED_LINK_FOR_FOLDER: BOX_GET_SHARED_LINK_FOR_FOLDER_OUTPUT
  GET_SHARED_LINK_FOR_WEB_LINK: BOX_GET_SHARED_LINK_FOR_WEB_LINK_OUTPUT
  GET_SHIELD_INFORMATION_BARRIER_REPORT_BY_ID: BOX_GET_SHIELD_INFORMATION_BARRIER_REPORT_BY_ID_OUTPUT
  GET_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID: BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID_OUTPUT
  GET_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID: BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID_OUTPUT
  GET_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID: BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID_OUTPUT
  GET_SHIELD_INFORMATION_BARRIER_WITH_SPECIFIED_ID: BOX_GET_SHIELD_INFORMATION_BARRIER_WITH_SPECIFIED_ID_OUTPUT
  GET_STORAGE_POLICY: BOX_GET_STORAGE_POLICY_OUTPUT
  GET_STORAGE_POLICY_ASSIGNMENT: BOX_GET_STORAGE_POLICY_ASSIGNMENT_OUTPUT
  GET_TASK: BOX_GET_TASK_OUTPUT
  GET_TASK_ASSIGNMENT: BOX_GET_TASK_ASSIGNMENT_OUTPUT
  GET_TERMS_OF_SERVICE: BOX_GET_TERMS_OF_SERVICE_OUTPUT
  GET_TRASHED_FILE: BOX_GET_TRASHED_FILE_OUTPUT
  GET_TRASHED_FOLDER: BOX_GET_TRASHED_FOLDER_OUTPUT
  GET_TRASHED_WEB_LINK: BOX_GET_TRASHED_WEB_LINK_OUTPUT
  GET_UPLOAD_SESSION: BOX_GET_UPLOAD_SESSION_OUTPUT
  GET_USER: BOX_GET_USER_OUTPUT
  GET_USER_AVATAR: BOX_GET_USER_AVATAR_OUTPUT
  GET_USER_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS: BOX_GET_USER_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_OUTPUT
  GET_USER_INVITE_STATUS: BOX_GET_USER_INVITE_STATUS_OUTPUT
  GET_WATERMARK_FOR_FOLDER: BOX_GET_WATERMARK_FOR_FOLDER_OUTPUT
  GET_WATERMARK_ON_FILE: BOX_GET_WATERMARK_ON_FILE_OUTPUT
  GET_WEBHOOK: BOX_GET_WEBHOOK_OUTPUT
  GET_WEB_LINK: BOX_GET_WEB_LINK_OUTPUT
  GET_ZIP_DOWNLOAD_STATUS: BOX_GET_ZIP_DOWNLOAD_STATUS_OUTPUT
  LIST_AI_AGENTS: BOX_LIST_AI_AGENTS_OUTPUT
  LIST_ALLOWED_COLLABORATION_DOMAINS: BOX_LIST_ALLOWED_COLLABORATION_DOMAINS_OUTPUT
  LIST_ALL_CLASSIFICATIONS: BOX_LIST_ALL_CLASSIFICATIONS_OUTPUT
  LIST_ALL_COLLECTIONS: BOX_LIST_ALL_COLLECTIONS_OUTPUT
  LIST_ALL_FILE_VERSIONS: BOX_LIST_ALL_FILE_VERSIONS_OUTPUT
  LIST_ALL_GLOBAL_METADATA_TEMPLATES: BOX_LIST_ALL_GLOBAL_METADATA_TEMPLATES_OUTPUT
  LIST_ALL_LEGAL_HOLD_POLICIES: BOX_LIST_ALL_LEGAL_HOLD_POLICIES_OUTPUT
  LIST_ALL_METADATA_TEMPLATES_FOR_ENTERPRISE: BOX_LIST_ALL_METADATA_TEMPLATES_FOR_ENTERPRISE_OUTPUT
  LIST_ALL_WEBHOOKS: BOX_LIST_ALL_WEBHOOKS_OUTPUT
  LIST_BOX_SIGN_REQUESTS: BOX_LIST_BOX_SIGN_REQUESTS_OUTPUT
  LIST_BOX_SIGN_TEMPLATES: BOX_LIST_BOX_SIGN_TEMPLATES_OUTPUT
  LIST_BOX_SKILL_CARDS_ON_FILE: BOX_LIST_BOX_SKILL_CARDS_ON_FILE_OUTPUT
  LIST_COLLECTION_ITEMS: BOX_LIST_COLLECTION_ITEMS_OUTPUT
  LIST_ENTERPRISE_DEVICE_PINS: BOX_LIST_ENTERPRISE_DEVICE_PINS_OUTPUT
  LIST_ENTERPRISE_USERS: BOX_LIST_ENTERPRISE_USERS_OUTPUT
  LIST_FILE_APP_ITEM_ASSOCIATIONS: BOX_LIST_FILE_APP_ITEM_ASSOCIATIONS_OUTPUT
  LIST_FILE_COLLABORATIONS: BOX_LIST_FILE_COLLABORATIONS_OUTPUT
  LIST_FILE_COMMENTS: BOX_LIST_FILE_COMMENTS_OUTPUT
  LIST_FILE_VERSION_LEGAL_HOLDS: BOX_LIST_FILE_VERSION_LEGAL_HOLDS_OUTPUT
  LIST_FILE_VERSION_RETENTIONS: BOX_LIST_FILE_VERSION_RETENTIONS_OUTPUT
  LIST_FOLDER_APP_ITEM_ASSOCIATIONS: BOX_LIST_FOLDER_APP_ITEM_ASSOCIATIONS_OUTPUT
  LIST_FOLDER_COLLABORATIONS: BOX_LIST_FOLDER_COLLABORATIONS_OUTPUT
  LIST_FOLDER_LOCKS: BOX_LIST_FOLDER_LOCKS_OUTPUT
  LIST_GROUPS_FOR_ENTERPRISE: BOX_LIST_GROUPS_FOR_ENTERPRISE_OUTPUT
  LIST_GROUP_COLLABORATIONS: BOX_LIST_GROUP_COLLABORATIONS_OUTPUT
  LIST_ITEMS_IN_FOLDER: BOX_LIST_ITEMS_IN_FOLDER_OUTPUT
  LIST_LEGAL_HOLD_POLICY_ASSIGNMENTS: BOX_LIST_LEGAL_HOLD_POLICY_ASSIGNMENTS_OUTPUT
  LIST_MEMBERS_OF_GROUP: BOX_LIST_MEMBERS_OF_GROUP_OUTPUT
  LIST_METADATA_CASCADE_POLICIES: BOX_LIST_METADATA_CASCADE_POLICIES_OUTPUT
  LIST_METADATA_INSTANCES_ON_FILE: BOX_LIST_METADATA_INSTANCES_ON_FILE_OUTPUT
  LIST_METADATA_INSTANCES_ON_FOLDER: BOX_LIST_METADATA_INSTANCES_ON_FOLDER_OUTPUT
  LIST_PARTS: BOX_LIST_PARTS_OUTPUT
  LIST_PENDING_COLLABORATIONS: BOX_LIST_PENDING_COLLABORATIONS_OUTPUT
  LIST_PREVIOUS_FILE_VERSIONS_FOR_LEGAL_HOLD_POLICY_ASSIGNMENT: BOX_LIST_PREVIOUS_FILE_VERSIONS_FOR_LEGAL_HOLD_POLICY_ASSIGNMENT_OUTPUT
  LIST_RECENTLY_ACCESSED_ITEMS: BOX_LIST_RECENTLY_ACCESSED_ITEMS_OUTPUT
  LIST_RETENTION_POLICIES: BOX_LIST_RETENTION_POLICIES_OUTPUT
  LIST_RETENTION_POLICY_ASSIGNMENTS: BOX_LIST_RETENTION_POLICY_ASSIGNMENTS_OUTPUT
  LIST_SHIELD_INFORMATION_BARRIERS: BOX_LIST_SHIELD_INFORMATION_BARRIERS_OUTPUT
  LIST_SHIELD_INFORMATION_BARRIER_REPORTS: BOX_LIST_SHIELD_INFORMATION_BARRIER_REPORTS_OUTPUT
  LIST_SHIELD_INFORMATION_BARRIER_SEGMENTS: BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENTS_OUTPUT
  LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBERS: BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBERS_OUTPUT
  LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTIONS: BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTIONS_OUTPUT
  LIST_SLACK_INTEGRATION_MAPPINGS: BOX_LIST_SLACK_INTEGRATION_MAPPINGS_OUTPUT
  LIST_STORAGE_POLICIES: BOX_LIST_STORAGE_POLICIES_OUTPUT
  LIST_STORAGE_POLICY_ASSIGNMENTS: BOX_LIST_STORAGE_POLICY_ASSIGNMENTS_OUTPUT
  LIST_TASKS_ON_FILE: BOX_LIST_TASKS_ON_FILE_OUTPUT
  LIST_TASK_ASSIGNMENTS: BOX_LIST_TASK_ASSIGNMENTS_OUTPUT
  LIST_TEAMS_INTEGRATION_MAPPINGS: BOX_LIST_TEAMS_INTEGRATION_MAPPINGS_OUTPUT
  LIST_TERMS_OF_SERVICES: BOX_LIST_TERMS_OF_SERVICES_OUTPUT
  LIST_TERMS_OF_SERVICE_USER_STATUSES: BOX_LIST_TERMS_OF_SERVICE_USER_STATUSES_OUTPUT
  LIST_TRASHED_ITEMS: BOX_LIST_TRASHED_ITEMS_OUTPUT
  LIST_USERS_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS: BOX_LIST_USERS_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS_OUTPUT
  LIST_USER_AND_ENTERPRISE_EVENTS: BOX_LIST_USER_AND_ENTERPRISE_EVENTS_OUTPUT
  LIST_USER_S_EMAIL_ALIASES: BOX_LIST_USER_S_EMAIL_ALIASES_OUTPUT
  LIST_USER_S_GROUPS: BOX_LIST_USER_S_GROUPS_OUTPUT
  LIST_WORKFLOWS: BOX_LIST_WORKFLOWS_OUTPUT
  PERMANENTLY_REMOVE_FILE: BOX_PERMANENTLY_REMOVE_FILE_OUTPUT
  PERMANENTLY_REMOVE_FOLDER: BOX_PERMANENTLY_REMOVE_FOLDER_OUTPUT
  PERMANENTLY_REMOVE_WEB_LINK: BOX_PERMANENTLY_REMOVE_WEB_LINK_OUTPUT
  PREFLIGHT_CHECK_BEFORE_UPLOAD: BOX_PREFLIGHT_CHECK_BEFORE_UPLOAD_OUTPUT
  PROMOTE_FILE_VERSION: BOX_PROMOTE_FILE_VERSION_OUTPUT
  QUERY_FILES_FOLDERS_BY_METADATA: BOX_QUERY_FILES_FOLDERS_BY_METADATA_OUTPUT
  REFRESH_ACCESS_TOKEN: BOX_REFRESH_ACCESS_TOKEN_OUTPUT
  REMOVE_BOX_SKILL_CARDS_FROM_FILE: BOX_REMOVE_BOX_SKILL_CARDS_FROM_FILE_OUTPUT
  REMOVE_CLASSIFICATION_FROM_FILE: BOX_REMOVE_CLASSIFICATION_FROM_FILE_OUTPUT
  REMOVE_CLASSIFICATION_FROM_FOLDER: BOX_REMOVE_CLASSIFICATION_FROM_FOLDER_OUTPUT
  REMOVE_COLLABORATION: BOX_REMOVE_COLLABORATION_OUTPUT
  REMOVE_COMMENT: BOX_REMOVE_COMMENT_OUTPUT
  REMOVE_DEVICE_PIN: BOX_REMOVE_DEVICE_PIN_OUTPUT
  REMOVE_DOMAIN_FROM_LIST_OF_ALLOWED_COLLABORATION_DOMAINS: BOX_REMOVE_DOMAIN_FROM_LIST_OF_ALLOWED_COLLABORATION_DOMAINS_OUTPUT
  REMOVE_EMAIL_ALIAS: BOX_REMOVE_EMAIL_ALIAS_OUTPUT
  REMOVE_FILE_VERSION: BOX_REMOVE_FILE_VERSION_OUTPUT
  REMOVE_GROUP: BOX_REMOVE_GROUP_OUTPUT
  REMOVE_LEGAL_HOLD_POLICY: BOX_REMOVE_LEGAL_HOLD_POLICY_OUTPUT
  REMOVE_METADATA_CASCADE_POLICY: BOX_REMOVE_METADATA_CASCADE_POLICY_OUTPUT
  REMOVE_METADATA_INSTANCE_FROM_FILE: BOX_REMOVE_METADATA_INSTANCE_FROM_FILE_OUTPUT
  REMOVE_METADATA_INSTANCE_FROM_FOLDER: BOX_REMOVE_METADATA_INSTANCE_FROM_FOLDER_OUTPUT
  REMOVE_METADATA_TEMPLATE: BOX_REMOVE_METADATA_TEMPLATE_OUTPUT
  REMOVE_RETENTION_POLICY_ASSIGNMENT: BOX_REMOVE_RETENTION_POLICY_ASSIGNMENT_OUTPUT
  REMOVE_SHARED_LINK_FROM_FILE: BOX_REMOVE_SHARED_LINK_FROM_FILE_OUTPUT
  REMOVE_SHARED_LINK_FROM_FOLDER: BOX_REMOVE_SHARED_LINK_FROM_FOLDER_OUTPUT
  REMOVE_SHARED_LINK_FROM_WEB_LINK: BOX_REMOVE_SHARED_LINK_FROM_WEB_LINK_OUTPUT
  REMOVE_TASK: BOX_REMOVE_TASK_OUTPUT
  REMOVE_UPLOAD_SESSION: BOX_REMOVE_UPLOAD_SESSION_OUTPUT
  REMOVE_USER_DOMAIN_EXEMPTION: BOX_REMOVE_USER_DOMAIN_EXEMPTION_OUTPUT
  REMOVE_USER_FROM_GROUP: BOX_REMOVE_USER_FROM_GROUP_OUTPUT
  REMOVE_WATERMARK_FROM_FILE: BOX_REMOVE_WATERMARK_FROM_FILE_OUTPUT
  REMOVE_WATERMARK_FROM_FOLDER: BOX_REMOVE_WATERMARK_FROM_FOLDER_OUTPUT
  REMOVE_WEBHOOK: BOX_REMOVE_WEBHOOK_OUTPUT
  REMOVE_WEB_LINK: BOX_REMOVE_WEB_LINK_OUTPUT
  REQUEST_ACCESS_TOKEN: BOX_REQUEST_ACCESS_TOKEN_OUTPUT
  RESEND_BOX_SIGN_REQUEST: BOX_RESEND_BOX_SIGN_REQUEST_OUTPUT
  RESTORE_FILE: BOX_RESTORE_FILE_OUTPUT
  RESTORE_FILE_VERSION: BOX_RESTORE_FILE_VERSION_OUTPUT
  RESTORE_FOLDER: BOX_RESTORE_FOLDER_OUTPUT
  RESTORE_WEB_LINK: BOX_RESTORE_WEB_LINK_OUTPUT
  REVIEW_FILES_ON_LEGAL_HOLD_POLICY_ASSIGNMENT: BOX_REVIEW_FILES_ON_LEGAL_HOLD_POLICY_ASSIGNMENT_OUTPUT
  REVOKE_ACCESS_TOKEN: BOX_REVOKE_ACCESS_TOKEN_OUTPUT
  SEARCH_FOR_CONTENT: BOX_SEARCH_FOR_CONTENT_OUTPUT
  STARTS_WORKFLOW_BASED_ON_REQUEST_BODY: BOX_STARTS_WORKFLOW_BASED_ON_REQUEST_BODY_OUTPUT
  TRANSFER_OWNED_FOLDERS: BOX_TRANSFER_OWNED_FOLDERS_OUTPUT
  UNASSIGN_LEGAL_HOLD_POLICY: BOX_UNASSIGN_LEGAL_HOLD_POLICY_OUTPUT
  UNASSIGN_STORAGE_POLICY: BOX_UNASSIGN_STORAGE_POLICY_OUTPUT
  UNASSIGN_TASK: BOX_UNASSIGN_TASK_OUTPUT
  UPDATE_AI_AGENT: BOX_UPDATE_AI_AGENT_OUTPUT
  UPDATE_ALL_BOX_SKILL_CARDS_ON_FILE: BOX_UPDATE_ALL_BOX_SKILL_CARDS_ON_FILE_OUTPUT
  UPDATE_COLLABORATION: BOX_UPDATE_COLLABORATION_OUTPUT
  UPDATE_COMMENT: BOX_UPDATE_COMMENT_OUTPUT
  UPDATE_FILE: BOX_UPDATE_FILE_OUTPUT
  UPDATE_FILE_REQUEST: BOX_UPDATE_FILE_REQUEST_OUTPUT
  UPDATE_FOLDER: BOX_UPDATE_FOLDER_OUTPUT
  UPDATE_GROUP: BOX_UPDATE_GROUP_OUTPUT
  UPDATE_GROUP_MEMBERSHIP: BOX_UPDATE_GROUP_MEMBERSHIP_OUTPUT
  UPDATE_LEGAL_HOLD_POLICY: BOX_UPDATE_LEGAL_HOLD_POLICY_OUTPUT
  UPDATE_RETENTION_POLICY: BOX_UPDATE_RETENTION_POLICY_OUTPUT
  UPDATE_SHARED_LINK_ON_FILE: BOX_UPDATE_SHARED_LINK_ON_FILE_OUTPUT
  UPDATE_SHARED_LINK_ON_FOLDER: BOX_UPDATE_SHARED_LINK_ON_FOLDER_OUTPUT
  UPDATE_SHARED_LINK_ON_WEB_LINK: BOX_UPDATE_SHARED_LINK_ON_WEB_LINK_OUTPUT
  UPDATE_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID: BOX_UPDATE_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID_OUTPUT
  UPDATE_SLACK_INTEGRATION_MAPPING: BOX_UPDATE_SLACK_INTEGRATION_MAPPING_OUTPUT
  UPDATE_STORAGE_POLICY_ASSIGNMENT: BOX_UPDATE_STORAGE_POLICY_ASSIGNMENT_OUTPUT
  UPDATE_TASK: BOX_UPDATE_TASK_OUTPUT
  UPDATE_TASK_ASSIGNMENT: BOX_UPDATE_TASK_ASSIGNMENT_OUTPUT
  UPDATE_TEAMS_INTEGRATION_MAPPING: BOX_UPDATE_TEAMS_INTEGRATION_MAPPING_OUTPUT
  UPDATE_TERMS_OF_SERVICE: BOX_UPDATE_TERMS_OF_SERVICE_OUTPUT
  UPDATE_TERMS_OF_SERVICE_STATUS_FOR_EXISTING_USER: BOX_UPDATE_TERMS_OF_SERVICE_STATUS_FOR_EXISTING_USER_OUTPUT
  UPDATE_USER: BOX_UPDATE_USER_OUTPUT
  UPDATE_WEBHOOK: BOX_UPDATE_WEBHOOK_OUTPUT
  UPDATE_WEB_LINK: BOX_UPDATE_WEB_LINK_OUTPUT
  UPLOAD_FILE: BOX_UPLOAD_FILE_OUTPUT
  UPLOAD_FILE_VERSION: BOX_UPLOAD_FILE_VERSION_OUTPUT
  UPLOAD_PART_OF_FILE: BOX_UPLOAD_PART_OF_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BOX toolkit.
 */
export const BOX = {
  slug: "box",
  tools: {
    /**
     * Adds a classification to a file by specifying the label of the classification to add. this api can also be called by including the enterprise id in the url explicitly, for example `/files/:id//enterprise 12345/securityclassification-6vmvochwuwo`.
     */
    ADD_CLASSIFICATION_TO_FILE: "BOX_ADD_CLASSIFICATION_TO_FILE",
    /**
     * Adds a classification to a folder by specifying the label of the classification to add. this api can also be called by including the enterprise id in the url explicitly, for example `/folders/:id/enterprise 12345/securityclassification-6vmvochwuwo`.
     */
    ADD_CLASSIFICATION_TO_FOLDER: "BOX_ADD_CLASSIFICATION_TO_FOLDER",
    /**
     * Creates a new entry in the list of allowed domains to allow collaboration for.
     */
    ADD_DOMAIN_TO_LIST_OF_ALLOWED_COLLABORATION_DOMAINS: "BOX_ADD_DOMAIN_TO_LIST_OF_ALLOWED_COLLABORATION_DOMAINS",
    /**
     * When an enterprise does not yet have any classifications, this api call initializes the classification template with an initial set of classifications. if an enterprise already has a classification, the template will already exist and instead an api call should be made to add additional classifications.
     */
    ADD_INITIAL_CLASSIFICATIONS: "BOX_ADD_INITIAL_CLASSIFICATIONS",
    /**
     * Adds or updates a user avatar.
     */
    ADD_OR_UPDATE_USER_AVATAR: "BOX_ADD_OR_UPDATE_USER_AVATAR",
    /**
     * Adds a shared link to a file.
     */
    ADD_SHARED_LINK_TO_FILE: "BOX_ADD_SHARED_LINK_TO_FILE",
    /**
     * Adds a shared link to a folder.
     */
    ADD_SHARED_LINK_TO_FOLDER: "BOX_ADD_SHARED_LINK_TO_FOLDER",
    /**
     * Adds a shared link to a web link.
     */
    ADD_SHARED_LINK_TO_WEB_LINK: "BOX_ADD_SHARED_LINK_TO_WEB_LINK",
    /**
     * Creates a group membership. only users with admin-level permissions will be able to use this api.
     */
    ADD_USER_TO_GROUP: "BOX_ADD_USER_TO_GROUP",
    /**
     * Applies or update a watermark on a file.
     */
    APPLY_WATERMARK_TO_FILE: "BOX_APPLY_WATERMARK_TO_FILE",
    /**
     * Applies or update a watermark on a folder.
     */
    APPLY_WATERMARK_TO_FOLDER: "BOX_APPLY_WATERMARK_TO_FOLDER",
    /**
     * Sends an ai request to supported llms and returns an answer specifically focused on the user's question given the provided context.
     */
    ASK_QUESTION: "BOX_ASK_QUESTION",
    /**
     * Assign a legal hold to a file, file version, folder, or user.
     */
    ASSIGN_LEGAL_HOLD_POLICY: "BOX_ASSIGN_LEGAL_HOLD_POLICY",
    /**
     * Assigns a retention policy to an item.
     */
    ASSIGN_RETENTION_POLICY: "BOX_ASSIGN_RETENTION_POLICY",
    /**
     * Creates a storage policy assignment for an enterprise or user.
     */
    ASSIGN_STORAGE_POLICY: "BOX_ASSIGN_STORAGE_POLICY",
    /**
     * Assigns a task to a user. a task can be assigned to more than one user by creating multiple assignments.
     */
    ASSIGN_TASK: "BOX_ASSIGN_TASK",
    /**
     * Authorize a user by sending them through the [box](https://box.com) website and request their permission to act on their behalf. this is the first step when authenticating a user using oauth 2.0. to request a user's authorization to use the box apis on their behalf you will need to send a user to the url with this format.
     */
    AUTHORIZE_USER: "BOX_AUTHORIZE_USER",
    /**
     * Cancels a sign request.
     */
    CANCEL_BOX_SIGN_REQUEST: "BOX_CANCEL_BOX_SIGN_REQUEST",
    /**
     * Change status of shield information barrier with the specified id.
     */
    CHANGE_SHIELD_INFORMATION_BARRIER_STATUS: "BOX_CHANGE_SHIELD_INFORMATION_BARRIER_STATUS",
    /**
     * Close an upload session and create a file from the uploaded chunks. the actual endpoint url is returned by the [`create upload session`](e://post-files-upload-sessions) and [`get upload session`](e://get-files-upload-sessions-id) endpoints.
     */
    COMMIT_UPLOAD_SESSION: "BOX_COMMIT_UPLOAD_SESSION",
    /**
     * Creates a copy of a file.
     */
    COPY_FILE: "BOX_COPY_FILE",
    /**
     * Copies an existing file request that is already present on one folder, and applies it to another folder.
     */
    COPY_FILE_REQUEST: "BOX_COPY_FILE_REQUEST",
    /**
     * Creates a copy of a folder within a destination folder. the original folder will not be changed.
     */
    COPY_FOLDER: "BOX_COPY_FOLDER",
    /**
     * Creates an ai agent. at least one of the following capabilities must be provided: `ask`, `text gen`, `extract`.
     */
    CREATE_AI_AGENT: "BOX_CREATE_AI_AGENT",
    /**
     * Creates a signature request. this involves preparing a document for signing and sending the signature request to signers.
     */
    CREATE_BOX_SIGN_REQUEST: "BOX_CREATE_BOX_SIGN_REQUEST",
    /**
     * Applies one or more box skills metadata cards to a file.
     */
    CREATE_BOX_SKILL_CARDS_ON_FILE: "BOX_CREATE_BOX_SKILL_CARDS_ON_FILE",
    /**
     * Adds a collaboration for a single user or a single group to a file or folder. collaborations can be created using email address, user ids, or a group ids. if a collaboration is being created with a group, access to this endpoint is dependent on the group's ability to be invited. if collaboration is in `pending` status, the following fields are redacted: - `login` and `name` are hidden if a collaboration was created using `user id`, - `name` is hidden if a collaboration was created using `login`.
     */
    CREATE_COLLABORATION: "BOX_CREATE_COLLABORATION",
    /**
     * Adds a comment by the user to a specific file, or as a reply to an other comment.
     */
    CREATE_COMMENT: "BOX_CREATE_COMMENT",
    /**
     * Adds a new email alias to a user account..
     */
    CREATE_EMAIL_ALIAS: "BOX_CREATE_EMAIL_ALIAS",
    /**
     * Creates a new empty folder within the specified parent folder.
     */
    CREATE_FOLDER: "BOX_CREATE_FOLDER",
    /**
     * Creates a folder lock on a folder, preventing it from being moved and/or deleted. you must be authenticated as the owner or co-owner of the folder to use this endpoint.
     */
    CREATE_FOLDER_LOCK: "BOX_CREATE_FOLDER_LOCK",
    /**
     * Creates a new group of users in an enterprise. only users with admin permissions can create new groups.
     */
    CREATE_GROUP: "BOX_CREATE_GROUP",
    /**
     * Validates the roles and permissions of the user, and creates asynchronous jobs to terminate the user's sessions. returns the status for the post request.
     */
    CREATE_JOBS_TO_TERMINATE_USERS_SESSION: "BOX_CREATE_JOBS_TO_TERMINATE_USERS_SESSION",
    /**
     * Validates the roles and permissions of the group, and creates asynchronous jobs to terminate the group's sessions. returns the status for the post request.
     */
    CREATE_JOBS_TO_TERMINATE_USER_GROUP_SESSION: "BOX_CREATE_JOBS_TO_TERMINATE_USER_GROUP_SESSION",
    /**
     * Create a new legal hold policy.
     */
    CREATE_LEGAL_HOLD_POLICY: "BOX_CREATE_LEGAL_HOLD_POLICY",
    /**
     * Creates a new metadata cascade policy that applies a given metadata template to a given folder and automatically cascades it down to any files within that folder. in order for the policy to be applied a metadata instance must first be applied to the folder the policy is to be applied to.
     */
    CREATE_METADATA_CASCADE_POLICY: "BOX_CREATE_METADATA_CASCADE_POLICY",
    /**
     * Applies an instance of a metadata template to a file. in most cases only values that are present in the metadata template will be accepted, except for the `global.properties` template which accepts any key-value pair.
     */
    CREATE_METADATA_INSTANCE_ON_FILE: "BOX_CREATE_METADATA_INSTANCE_ON_FILE",
    /**
     * Applies an instance of a metadata template to a folder. in most cases only values that are present in the metadata template will be accepted, except for the `global.properties` template which accepts any key-value pair. to display the metadata template in the box web app the enterprise needs to be configured to enable **cascading folder level metadata** for the user in the admin console.
     */
    CREATE_METADATA_INSTANCE_ON_FOLDER: "BOX_CREATE_METADATA_INSTANCE_ON_FOLDER",
    /**
     * Creates a new metadata template that can be applied to files and folders.
     */
    CREATE_METADATA_TEMPLATE: "BOX_CREATE_METADATA_TEMPLATE",
    /**
     * Creates a retention policy.
     */
    CREATE_RETENTION_POLICY: "BOX_CREATE_RETENTION_POLICY",
    /**
     * Creates a shield information barrier to separate individuals/groups within the same firm and prevents confidential information passing between them.
     */
    CREATE_SHIELD_INFORMATION_BARRIER: "BOX_CREATE_SHIELD_INFORMATION_BARRIER",
    /**
     * Creates a shield information barrier report for a given barrier.
     */
    CREATE_SHIELD_INFORMATION_BARRIER_REPORT: "BOX_CREATE_SHIELD_INFORMATION_BARRIER_REPORT",
    /**
     * Creates a shield information barrier segment.
     */
    CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT: "BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT",
    /**
     * Creates a new shield information barrier segment member.
     */
    CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER: "BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER",
    /**
     * Creates a shield information barrier segment restriction object.
     */
    CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION: "BOX_CREATE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION",
    /**
     * Creates a [slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-box-as-the-content-layer-for-slack) by mapping a slack channel to a box item. you need admin or co-admin role to use this endpoint.
     */
    CREATE_SLACK_INTEGRATION_MAPPING: "BOX_CREATE_SLACK_INTEGRATION_MAPPING",
    /**
     * Creates a single task on a file. this task is not assigned to any user and will need to be assigned separately.
     */
    CREATE_TASK: "BOX_CREATE_TASK",
    /**
     * Creates a [teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-using-box-for-teams) by mapping a teams channel to a box item. you need admin or co-admin role to use this endpoint.
     */
    CREATE_TEAMS_INTEGRATION_MAPPING: "BOX_CREATE_TEAMS_INTEGRATION_MAPPING",
    /**
     * Creates a terms of service for a given enterprise and type of user.
     */
    CREATE_TERMS_OF_SERVICE: "BOX_CREATE_TERMS_OF_SERVICE",
    /**
     * Sets the status for a terms of service for a user.
     */
    CREATE_TERMS_OF_SERVICE_STATUS_FOR_NEW_USER: "BOX_CREATE_TERMS_OF_SERVICE_STATUS_FOR_NEW_USER",
    /**
     * Creates an upload session for a new file.
     */
    CREATE_UPLOAD_SESSION: "BOX_CREATE_UPLOAD_SESSION",
    /**
     * Creates an upload session for an existing file.
     */
    CREATE_UPLOAD_SESSION_FOR_EXISTING_FILE: "BOX_CREATE_UPLOAD_SESSION_FOR_EXISTING_FILE",
    /**
     * Creates a new managed user in an enterprise. this endpoint is only available to users and applications with the right admin permissions.
     */
    CREATE_USER: "BOX_CREATE_USER",
    /**
     * Create user exemption from collaboration domain restrictions.
     */
    CREATE_USER_EXEMPTION_FROM_COLLABORATION_DOMAIN_RESTRICTIONS: "BOX_CREATE_USER_EXEMPTION_FROM_COLLABORATION_DOMAIN_RESTRICTIONS",
    /**
     * Invites an existing external user to join an enterprise. the existing user can not be part of another enterprise and must already have a box account. once invited, the user will receive an email and are prompted to accept the invitation within the box web application. this method requires the "manage an enterprise" scope enabled for the application, which can be enabled within the developer console.
     */
    CREATE_USER_INVITE: "BOX_CREATE_USER_INVITE",
    /**
     * Creates a webhook.
     */
    CREATE_WEBHOOK: "BOX_CREATE_WEBHOOK",
    /**
     * Creates a web link object within a folder.
     */
    CREATE_WEB_LINK: "BOX_CREATE_WEB_LINK",
    /**
     * Creates a request to download multiple files and folders as a single `zip` archive file. this api does not return the archive but instead performs all the checks to ensure that the user has access to all the items, and then returns a `download url` and a `status url` that can be used to download the archive. the limit for an archive is either the account's upload limit or 10,000 files, whichever is met first. **note**: downloading a large file can be affected by various factors such as distance, network latency, bandwidth, and congestion, as well as packet loss ratio and current server load. for these reasons we recommend that a maximum zip archive total size does not exceed 25gb.
     */
    CREATE_ZIP_DOWNLOAD: "BOX_CREATE_ZIP_DOWNLOAD",
    /**
     * Deletes an ai agent using the provided parameters.
     */
    DELETE_AI_AGENT: "BOX_DELETE_AI_AGENT",
    /**
     * Deletes a file, either permanently or by moving it to the trash. the the enterprise settings determine whether the item will be permanently deleted from box or moved to the trash.
     */
    DELETE_FILE: "BOX_DELETE_FILE",
    /**
     * Deletes a file request permanently.
     */
    DELETE_FILE_REQUEST: "BOX_DELETE_FILE_REQUEST",
    /**
     * Deletes a folder, either permanently or by moving it to the trash.
     */
    DELETE_FOLDER: "BOX_DELETE_FOLDER",
    /**
     * Deletes a folder lock on a given folder. you must be authenticated as the owner or co-owner of the folder to use this endpoint.
     */
    DELETE_FOLDER_LOCK: "BOX_DELETE_FOLDER_LOCK",
    /**
     * Permanently deletes a retention policy.
     */
    DELETE_RETENTION_POLICY: "BOX_DELETE_RETENTION_POLICY",
    /**
     * Deletes the shield information barrier segment based on provided id.
     */
    DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT: "BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT",
    /**
     * Deletes a shield information barrier segment member based on provided id.
     */
    DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID: "BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID",
    /**
     * Delete shield information barrier segment restriction by id.
     */
    DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID: "BOX_DELETE_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID",
    /**
     * Deletes a [slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-box-as-the-content-layer-for-slack). you need admin or co-admin role to use this endpoint.
     */
    DELETE_SLACK_INTEGRATION_MAPPING: "BOX_DELETE_SLACK_INTEGRATION_MAPPING",
    /**
     * Deletes a [teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-using-box-for-teams). you need admin or co-admin role to use this endpoint.
     */
    DELETE_TEAMS_INTEGRATION_MAPPING: "BOX_DELETE_TEAMS_INTEGRATION_MAPPING",
    /**
     * Deletes a user. by default this will fail if the user still owns any content. move their owned content first before proceeding, or use the `force` field to delete the user and their files.
     */
    DELETE_USER: "BOX_DELETE_USER",
    /**
     * Removes an existing user avatar. you cannot reverse this operation.
     */
    DELETE_USER_AVATAR: "BOX_DELETE_USER_AVATAR",
    /**
     * Returns the contents of a file in binary format.
     */
    DOWNLOAD_FILE: "BOX_DOWNLOAD_FILE",
    /**
     * Returns the contents of a `zip` archive in binary format. this url does not require any form of authentication and could be used in a user's browser to download the archive to a user's device. by default, this url is only valid for a few seconds from the creation of the request for this archive. once a download has started it can not be stopped and resumed, instead a new request for a zip archive would need to be created. the url of this endpoint should not be considered as fixed. instead, use the [create zip download](e://post zip downloads) api to request to create a `zip` archive, and then follow the `download url` field in the response to this endpoint.
     */
    DOWNLOAD_ZIP_ARCHIVE: "BOX_DOWNLOAD_ZIP_ARCHIVE",
    /**
     * Sends an ai request to supported large language models (llms) and extracts metadata in form of key-value pairs. in this request, both the prompt and the output can be freeform. metadata template setup before sending the request is not required.
     */
    EXTRACT_METADATA_FREEFORM: "BOX_EXTRACT_METADATA_FREEFORM",
    /**
     * Sends an ai request to supported large language models (llms) and returns extracted metadata as a set of key-value pairs. for this request, you either need a metadata template or a list of fields you want to extract. input is **either** a metadata template or a list of fields to ensure the structure. to learn more about creating templates, see [creating metadata templates in the admin console](https://support.box.com/hc/en-us/articles/360044194033-customizing-metadata-templates) or use the [metadata template api](g://metadata/templates/create).
     */
    EXTRACT_METADATA_STRUCTURED: "BOX_EXTRACT_METADATA_STRUCTURED",
    /**
     * Returns the app item represented by a shared link. the link can originate from the current enterprise or another.
     */
    FIND_APP_ITEM_FOR_SHARED_LINK: "BOX_FIND_APP_ITEM_FOR_SHARED_LINK",
    /**
     * Returns the file represented by a shared link. a shared file can be represented by a shared link, which can originate within the current enterprise or within another. this endpoint allows an application to retrieve information about a shared file when only given a shared link. the `shared link permission options` array field can be returned by requesting it in the `fields` query parameter.
     */
    FIND_FILE_FOR_SHARED_LINK: "BOX_FIND_FILE_FOR_SHARED_LINK",
    /**
     * Return the folder represented by a shared link. a shared folder can be represented by a shared link, which can originate within the current enterprise or within another. this endpoint allows an application to retrieve information about a shared folder when only given a shared link.
     */
    FIND_FOLDER_FOR_SHARED_LINK: "BOX_FIND_FOLDER_FOR_SHARED_LINK",
    /**
     * Finds a metadata template by searching for the id of an instance of the template.
     */
    FIND_METADATA_TEMPLATE_BY_INSTANCE_ID: "BOX_FIND_METADATA_TEMPLATE_BY_INSTANCE_ID",
    /**
     * Returns the web link represented by a shared link. a shared web link can be represented by a shared link, which can originate within the current enterprise or within another. this endpoint allows an application to retrieve information about a shared web link when only given a shared link.
     */
    FIND_WEB_LINK_FOR_SHARED_LINK: "BOX_FIND_WEB_LINK_FOR_SHARED_LINK",
    /**
     * Force the metadata on a folder with a metadata cascade policy to be applied to all of its children. this can be used after creating a new cascade policy to enforce the metadata to be cascaded down to all existing files within that folder.
     */
    FORCE_APPLY_METADATA_CASCADE_POLICY_TO_FOLDER: "BOX_FORCE_APPLY_METADATA_CASCADE_POLICY_TO_FOLDER",
    /**
     * Sends an ai request to supported large language models (llms) and returns generated text based on the provided prompt.
     */
    GENERATE_TEXT: "BOX_GENERATE_TEXT",
    /**
     * Gets an ai agent using the `agent id` parameter.
     */
    GET_AI_AGENT_BY_AGENT_ID: "BOX_GET_AI_AGENT_BY_AGENT_ID",
    /**
     * Get the ai agent default config
     */
    GET_AI_AGENT_DEFAULT_CONFIGURATION: "BOX_GET_AI_AGENT_DEFAULT_CONFIGURATION",
    /**
     * Returns a domain that has been deemed safe to create collaborations for within the current enterprise.
     */
    GET_ALLOWED_COLLABORATION_DOMAIN: "BOX_GET_ALLOWED_COLLABORATION_DOMAIN",
    /**
     * Gets a sign request by id.
     */
    GET_BOX_SIGN_REQUEST_BY_ID: "BOX_GET_BOX_SIGN_REQUEST_BY_ID",
    /**
     * Fetches details of a specific box sign template.
     */
    GET_BOX_SIGN_TEMPLATE_BY_ID: "BOX_GET_BOX_SIGN_TEMPLATE_BY_ID",
    /**
     * Retrieves the classification metadata instance that has been applied to a file. this api can also be called by including the enterprise id in the url explicitly, for example `/files/:id//enterprise 12345/securityclassification-6vmvochwuwo`.
     */
    GET_CLASSIFICATION_ON_FILE: "BOX_GET_CLASSIFICATION_ON_FILE",
    /**
     * Retrieves the classification metadata instance that has been applied to a folder. this api can also be called by including the enterprise id in the url explicitly, for example `/folders/:id/enterprise 12345/securityclassification-6vmvochwuwo`.
     */
    GET_CLASSIFICATION_ON_FOLDER: "BOX_GET_CLASSIFICATION_ON_FOLDER",
    /**
     * Retrieves a single collaboration.
     */
    GET_COLLABORATION: "BOX_GET_COLLABORATION",
    /**
     * Retrieves a collection by its id.
     */
    GET_COLLECTION_BY_ID: "BOX_GET_COLLECTION_BY_ID",
    /**
     * Retrieves the message and metadata for a specific comment, as well as information on the user who created the comment.
     */
    GET_COMMENT: "BOX_GET_COMMENT",
    /**
     * Retrieves information about the user who is currently authenticated. in the case of a client-side authenticated oauth 2.0 application this will be the user who authorized the app. in the case of a jwt, server-side authenticated application this will be the service account that belongs to the application by default. use the `as-user` header to change who this api call is made on behalf of.
     */
    GET_CURRENT_USER: "BOX_GET_CURRENT_USER",
    /**
     * Retrieves information about an individual device pin.
     */
    GET_DEVICE_PIN: "BOX_GET_DEVICE_PIN",
    /**
     * The listevents endpoint provides information about the events available in the box system. this options method allows developers to discover the capabilities and requirements for interacting with the /events endpoint. it's particularly useful for understanding the types of events that can be monitored, the format of event data, and any constraints or limitations on event retrieval. this endpoint should be used when setting up event monitoring or webhook integrations to ensure proper configuration and understanding of the event system. while it doesn't directly fetch events, it offers crucial metadata for effectively working with box's event streaming and notification features.
     */
    GET_EVENTS_LONG_POLL_ENDPOINT: "BOX_GET_EVENTS_LONG_POLL_ENDPOINT",
    /**
     * Returns a list of files under retention for a retention policy assignment.
     */
    GET_FILES_UNDER_RETENTION: "BOX_GET_FILES_UNDER_RETENTION",
    /**
     * Retrieves the details about a file.
     */
    GET_FILE_INFORMATION: "BOX_GET_FILE_INFORMATION",
    /**
     * Retrieves the information about a file request.
     */
    GET_FILE_REQUEST: "BOX_GET_FILE_REQUEST",
    /**
     * Retrieves a thumbnail, or smaller image representation, of a file. sizes of `32x32`,`64x64`, `128x128`, and `256x256` can be returned in the `.png` format and sizes of `32x32`, `160x160`, and `320x320` can be returned in the `.jpg` format. thumbnails can be generated for the image and video file formats listed [found on our community site][1]. [1]: https://community.box.com/t5/migrating-and-previewing-content/file-types-and-fonts-supported-in-box-content-preview/ta-p/327
     */
    GET_FILE_THUMBNAIL: "BOX_GET_FILE_THUMBNAIL",
    /**
     * Retrieve a specific version of a file. versions are only tracked for box users with premium accounts.
     */
    GET_FILE_VERSION: "BOX_GET_FILE_VERSION",
    /**
     * Returns a list of file versions under retention for a retention policy assignment.
     */
    GET_FILE_VERSIONS_UNDER_RETENTION: "BOX_GET_FILE_VERSIONS_UNDER_RETENTION",
    /**
     * Retrieves information about the legal hold policies assigned to a file version.
     */
    GET_FILE_VERSION_LEGAL_HOLD: "BOX_GET_FILE_VERSION_LEGAL_HOLD",
    /**
     * Retrieves details for a folder, including the first 100 entries in the folder. passing `sort`, `direction`, `offset`, and `limit` parameters in query allows you to manage the list of returned [folder items](r://folder--full#param-item-collection). to fetch more items within the folder, use the [get items in a folder](e://get-folders-id-items) endpoint.
     */
    GET_FOLDER_INFORMATION: "BOX_GET_FOLDER_INFORMATION",
    /**
     * Retrieves information about a group. only members of this group or users with admin-level permissions will be able to use this api.
     */
    GET_GROUP: "BOX_GET_GROUP",
    /**
     * Retrieves a specific group membership. only admins of this group or users with admin-level permissions will be able to use this api.
     */
    GET_GROUP_MEMBERSHIP: "BOX_GET_GROUP_MEMBERSHIP",
    /**
     * Retrieve a legal hold policy.
     */
    GET_LEGAL_HOLD_POLICY: "BOX_GET_LEGAL_HOLD_POLICY",
    /**
     * Retrieve a legal hold policy assignment.
     */
    GET_LEGAL_HOLD_POLICY_ASSIGNMENT: "BOX_GET_LEGAL_HOLD_POLICY_ASSIGNMENT",
    /**
     * Retrieve a specific metadata cascade policy assigned to a folder.
     */
    GET_METADATA_CASCADE_POLICY: "BOX_GET_METADATA_CASCADE_POLICY",
    /**
     * Retrieves the instance of a metadata template that has been applied to a file.
     */
    GET_METADATA_INSTANCE_ON_FILE: "BOX_GET_METADATA_INSTANCE_ON_FILE",
    /**
     * Retrieves the instance of a metadata template that has been applied to a folder. this can not be used on the root folder with id `0`.
     */
    GET_METADATA_INSTANCE_ON_FOLDER: "BOX_GET_METADATA_INSTANCE_ON_FOLDER",
    /**
     * Retrieves a metadata template by its id.
     */
    GET_METADATA_TEMPLATE_BY_ID: "BOX_GET_METADATA_TEMPLATE_BY_ID",
    /**
     * Retrieves a metadata template by its `scope` and `templatekey` values. to find the `scope` and `templatekey` for a template, list all templates for an enterprise or globally, or list all templates applied to a file or folder.
     */
    GET_METADATA_TEMPLATE_BY_NAME: "BOX_GET_METADATA_TEMPLATE_BY_NAME",
    /**
     * Returns information about a file version retention. **note**: file retention api is now **deprecated**. to get information about files and file versions under retention, see [files under retention](e://get-retention-policy-assignments-id-files-under-retention) or [file versions under retention](e://get-retention-policy-assignments-id-file-versions-under-retention) endpoints.
     */
    GET_RETENTION_ON_FILE: "BOX_GET_RETENTION_ON_FILE",
    /**
     * Retrieves a retention policy.
     */
    GET_RETENTION_POLICY: "BOX_GET_RETENTION_POLICY",
    /**
     * Retrieves a retention policy assignment
     */
    GET_RETENTION_POLICY_ASSIGNMENT: "BOX_GET_RETENTION_POLICY_ASSIGNMENT",
    /**
     * Gets the information for a shared link on a file.
     */
    GET_SHARED_LINK_FOR_FILE: "BOX_GET_SHARED_LINK_FOR_FILE",
    /**
     * Gets the information for a shared link on a folder.
     */
    GET_SHARED_LINK_FOR_FOLDER: "BOX_GET_SHARED_LINK_FOR_FOLDER",
    /**
     * Gets the information for a shared link on a web link.
     */
    GET_SHARED_LINK_FOR_WEB_LINK: "BOX_GET_SHARED_LINK_FOR_WEB_LINK",
    /**
     * Retrieves a shield information barrier report by its id.
     */
    GET_SHIELD_INFORMATION_BARRIER_REPORT_BY_ID: "BOX_GET_SHIELD_INFORMATION_BARRIER_REPORT_BY_ID",
    /**
     * Retrieves a shield information barrier segment member by its id.
     */
    GET_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID: "BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBER_BY_ID",
    /**
     * Retrieves a shield information barrier segment restriction based on provided id.
     */
    GET_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID: "BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTION_BY_ID",
    /**
     * Retrieves shield information barrier segment based on provided id..
     */
    GET_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID: "BOX_GET_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID",
    /**
     * Get shield information barrier based on provided id.
     */
    GET_SHIELD_INFORMATION_BARRIER_WITH_SPECIFIED_ID: "BOX_GET_SHIELD_INFORMATION_BARRIER_WITH_SPECIFIED_ID",
    /**
     * Fetches a specific storage policy.
     */
    GET_STORAGE_POLICY: "BOX_GET_STORAGE_POLICY",
    /**
     * Fetches a specific storage policy assignment.
     */
    GET_STORAGE_POLICY_ASSIGNMENT: "BOX_GET_STORAGE_POLICY_ASSIGNMENT",
    /**
     * Retrieves information about a specific task.
     */
    GET_TASK: "BOX_GET_TASK",
    /**
     * Retrieves information about a task assignment.
     */
    GET_TASK_ASSIGNMENT: "BOX_GET_TASK_ASSIGNMENT",
    /**
     * Fetches a specific terms of service.
     */
    GET_TERMS_OF_SERVICE: "BOX_GET_TERMS_OF_SERVICE",
    /**
     * Retrieves a file that has been moved to the trash. please note that only if the file itself has been moved to the trash can it be retrieved with this api call. if instead one of its parent folders was moved to the trash, only that folder can be inspected using the [`get /folders/:id/trash`](e://get folders id trash) api. to list all items that have been moved to the trash, please use the [`get /folders/trash/items`](e://get-folders-trash-items/) api.
     */
    GET_TRASHED_FILE: "BOX_GET_TRASHED_FILE",
    /**
     * Retrieves a folder that has been moved to the trash. please note that only if the folder itself has been moved to the trash can it be retrieved with this api call. if instead one of its parent folders was moved to the trash, only that folder can be inspected using the [`get /folders/:id/trash`](e://get folders id trash) api. to list all items that have been moved to the trash, please use the [`get /folders/trash/items`](e://get-folders-trash-items/) api.
     */
    GET_TRASHED_FOLDER: "BOX_GET_TRASHED_FOLDER",
    /**
     * Retrieves a web link that has been moved to the trash.
     */
    GET_TRASHED_WEB_LINK: "BOX_GET_TRASHED_WEB_LINK",
    /**
     * Return information about an upload session. the actual endpoint url is returned by the [`create upload session`](e://post-files-upload-sessions) endpoint.
     */
    GET_UPLOAD_SESSION: "BOX_GET_UPLOAD_SESSION",
    /**
     * Retrieves information about a user in the enterprise. the application and the authenticated user need to have the permission to look up users in the entire enterprise. this endpoint also returns a limited set of information for external users who are collaborated on content owned by the enterprise for authenticated users with the right scopes. in this case, disallowed fields will return null instead.
     */
    GET_USER: "BOX_GET_USER",
    /**
     * Retrieves an image of a the user's avatar.
     */
    GET_USER_AVATAR: "BOX_GET_USER_AVATAR",
    /**
     * Returns a users who has been exempt from the collaboration domain restrictions.
     */
    GET_USER_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS: "BOX_GET_USER_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS",
    /**
     * Returns the status of a user invite.
     */
    GET_USER_INVITE_STATUS: "BOX_GET_USER_INVITE_STATUS",
    /**
     * Retrieve the watermark for a folder.
     */
    GET_WATERMARK_FOR_FOLDER: "BOX_GET_WATERMARK_FOR_FOLDER",
    /**
     * Retrieve the watermark for a file.
     */
    GET_WATERMARK_ON_FILE: "BOX_GET_WATERMARK_ON_FILE",
    /**
     * Retrieves a specific webhook
     */
    GET_WEBHOOK: "BOX_GET_WEBHOOK",
    /**
     * Retrieve information about a web link.
     */
    GET_WEB_LINK: "BOX_GET_WEB_LINK",
    /**
     * Returns the download status of a `zip` archive, allowing an application to inspect the progress of the download as well as the number of items that might have been skipped. this endpoint can only be accessed once the download has started. subsequently this endpoint is valid for 12 hours from the start of the download. the url of this endpoint should not be considered as fixed. instead, use the [create zip download](e://post zip downloads) api to request to create a `zip` archive, and then follow the `status url` field in the response to this endpoint.
     */
    GET_ZIP_DOWNLOAD_STATUS: "BOX_GET_ZIP_DOWNLOAD_STATUS",
    /**
     * Lists ai agents based on the provided parameters.
     */
    LIST_AI_AGENTS: "BOX_LIST_AI_AGENTS",
    /**
     * Returns the list domains that have been deemed safe to create collaborations for within the current enterprise.
     */
    LIST_ALLOWED_COLLABORATION_DOMAINS: "BOX_LIST_ALLOWED_COLLABORATION_DOMAINS",
    /**
     * Retrieves the classification metadata template and lists all the classifications available to this enterprise. this api can also be called by including the enterprise id in the url explicitly, for example `/metadata templates/enterprise 12345/securityclassification-6vmvochwuwo/schema`.
     */
    LIST_ALL_CLASSIFICATIONS: "BOX_LIST_ALL_CLASSIFICATIONS",
    /**
     * Retrieves all collections for a given user. currently, only the `favorites` collection is supported.
     */
    LIST_ALL_COLLECTIONS: "BOX_LIST_ALL_COLLECTIONS",
    /**
     * Retrieve a list of the past versions for a file. versions are only tracked by box users with premium accounts. to fetch the id of the current version of a file, use the `get /file/:id` api.
     */
    LIST_ALL_FILE_VERSIONS: "BOX_LIST_ALL_FILE_VERSIONS",
    /**
     * Used to retrieve all generic, global metadata templates available to all enterprises using box.
     */
    LIST_ALL_GLOBAL_METADATA_TEMPLATES: "BOX_LIST_ALL_GLOBAL_METADATA_TEMPLATES",
    /**
     * Retrieves a list of legal hold policies that belong to an enterprise.
     */
    LIST_ALL_LEGAL_HOLD_POLICIES: "BOX_LIST_ALL_LEGAL_HOLD_POLICIES",
    /**
     * Used to retrieve all metadata templates created to be used specifically within the user's enterprise
     */
    LIST_ALL_METADATA_TEMPLATES_FOR_ENTERPRISE: "BOX_LIST_ALL_METADATA_TEMPLATES_FOR_ENTERPRISE",
    /**
     * Returns all defined webhooks for the requesting application. this api only returns webhooks that are applied to files or folders that are owned by the authenticated user. this means that an admin can not see webhooks created by a service account unless the admin has access to those folders, and vice versa.
     */
    LIST_ALL_WEBHOOKS: "BOX_LIST_ALL_WEBHOOKS",
    /**
     * Gets signature requests created by a user. if the `sign files` and/or `parent folder` are deleted, the signature request will not return in the list.
     */
    LIST_BOX_SIGN_REQUESTS: "BOX_LIST_BOX_SIGN_REQUESTS",
    /**
     * Gets box sign templates created by a user.
     */
    LIST_BOX_SIGN_TEMPLATES: "BOX_LIST_BOX_SIGN_TEMPLATES",
    /**
     * List the box skills metadata cards that are attached to a file.
     */
    LIST_BOX_SKILL_CARDS_ON_FILE: "BOX_LIST_BOX_SKILL_CARDS_ON_FILE",
    /**
     * Retrieves the files and/or folders contained within this collection.
     */
    LIST_COLLECTION_ITEMS: "BOX_LIST_COLLECTION_ITEMS",
    /**
     * Retrieves all the device pins within an enterprise. the user must have admin privileges, and the application needs the "manage enterprise" scope to make this call.
     */
    LIST_ENTERPRISE_DEVICE_PINS: "BOX_LIST_ENTERPRISE_DEVICE_PINS",
    /**
     * Returns a list of all users for the enterprise along with their `user id`, `public name`, and `login`. the application and the authenticated user need to have the permission to look up users in the entire enterprise.
     */
    LIST_ENTERPRISE_USERS: "BOX_LIST_ENTERPRISE_USERS",
    /**
     * **this is a beta feature, which means that its availability might be limited.** returns all app items the file is associated with. this includes app items associated with ancestors of the file. assuming the context user has access to the file, the type/ids are revealed even if the context user does not have **view** permission on the app item.
     */
    LIST_FILE_APP_ITEM_ASSOCIATIONS: "BOX_LIST_FILE_APP_ITEM_ASSOCIATIONS",
    /**
     * Retrieves a list of pending and active collaborations for a file. this returns all the users that have access to the file or have been invited to the file.
     */
    LIST_FILE_COLLABORATIONS: "BOX_LIST_FILE_COLLABORATIONS",
    /**
     * Retrieves a list of comments for a file.
     */
    LIST_FILE_COMMENTS: "BOX_LIST_FILE_COMMENTS",
    /**
     * Get a list of file versions on legal hold for a legal hold assignment. due to ongoing re-architecture efforts this api might not return all file versions for this policy id. instead, this api will only return file versions held in the legacy architecture. two new endpoints will available to request any file versions held in the new architecture. for file versions held in the new architecture, the `get /legal hold policy assignments/:id/file versions on hold` api can be used to return all past file versions available for this policy assignment, and the `get /legal hold policy assignments/:id/files on hold` api can be used to return any current (latest) versions of a file under legal hold. the `get /legal hold policy assignments?policy id={id}` api can be used to find a list of policy assignments for a given policy id. once the re-architecture is completed this api will be deprecated.
     */
    LIST_FILE_VERSION_LEGAL_HOLDS: "BOX_LIST_FILE_VERSION_LEGAL_HOLDS",
    /**
     * Retrieves all file version retentions for the given enterprise. **note**: file retention api is now **deprecated**. to get information about files and file versions under retention, see [files under retention](e://get-retention-policy-assignments-id-files-under-retention) or [file versions under retention](e://get-retention-policy-assignments-id-file-versions-under-retention) endpoints.
     */
    LIST_FILE_VERSION_RETENTIONS: "BOX_LIST_FILE_VERSION_RETENTIONS",
    /**
     * **this is a beta feature, which means that its availability might be limited.** returns all app items the folder is associated with. this includes app items associated with ancestors of the folder. assuming the context user has access to the folder, the type/ids are revealed even if the context user does not have **view** permission on the app item.
     */
    LIST_FOLDER_APP_ITEM_ASSOCIATIONS: "BOX_LIST_FOLDER_APP_ITEM_ASSOCIATIONS",
    /**
     * Retrieves a list of pending and active collaborations for a folder. this returns all the users that have access to the folder or have been invited to the folder.
     */
    LIST_FOLDER_COLLABORATIONS: "BOX_LIST_FOLDER_COLLABORATIONS",
    /**
     * Retrieves folder lock details for a given folder. you must be authenticated as the owner or co-owner of the folder to use this endpoint.
     */
    LIST_FOLDER_LOCKS: "BOX_LIST_FOLDER_LOCKS",
    /**
     * Retrieves all of the groups for a given enterprise. the user must have admin permissions to inspect enterprise's groups.
     */
    LIST_GROUPS_FOR_ENTERPRISE: "BOX_LIST_GROUPS_FOR_ENTERPRISE",
    /**
     * Retrieves all the collaborations for a group. the user must have admin permissions to inspect enterprise's groups. each collaboration object has details on which files or folders the group has access to and with what role.
     */
    LIST_GROUP_COLLABORATIONS: "BOX_LIST_GROUP_COLLABORATIONS",
    /**
     * Retrieves a page of items in a folder. these items can be files, folders, and web links. to request more information about the folder itself, like its size, use the [get a folder](#get-folders-id) endpoint instead.
     */
    LIST_ITEMS_IN_FOLDER: "BOX_LIST_ITEMS_IN_FOLDER",
    /**
     * Retrieves a list of items a legal hold policy has been assigned to.
     */
    LIST_LEGAL_HOLD_POLICY_ASSIGNMENTS: "BOX_LIST_LEGAL_HOLD_POLICY_ASSIGNMENTS",
    /**
     * Retrieves all the members for a group. only members of this group or users with admin-level permissions will be able to use this api.
     */
    LIST_MEMBERS_OF_GROUP: "BOX_LIST_MEMBERS_OF_GROUP",
    /**
     * Retrieves a list of all the metadata cascade policies that are applied to a given folder. this can not be used on the root folder with id `0`.
     */
    LIST_METADATA_CASCADE_POLICIES: "BOX_LIST_METADATA_CASCADE_POLICIES",
    /**
     * Retrieves all metadata for a given file.
     */
    LIST_METADATA_INSTANCES_ON_FILE: "BOX_LIST_METADATA_INSTANCES_ON_FILE",
    /**
     * Retrieves all metadata for a given folder. this can not be used on the root folder with id `0`.
     */
    LIST_METADATA_INSTANCES_ON_FOLDER: "BOX_LIST_METADATA_INSTANCES_ON_FOLDER",
    /**
     * Return a list of the chunks uploaded to the upload session so far. the actual endpoint url is returned by the [`create upload session`](e://post-files-upload-sessions) and [`get upload session`](e://get-files-upload-sessions-id) endpoints.
     */
    LIST_PARTS: "BOX_LIST_PARTS",
    /**
     * Retrieves all pending collaboration invites for this user.
     */
    LIST_PENDING_COLLABORATIONS: "BOX_LIST_PENDING_COLLABORATIONS",
    /**
     * List previous file versions for legal hold policy assignment
     */
    LIST_PREVIOUS_FILE_VERSIONS_FOR_LEGAL_HOLD_POLICY_ASSIGNMENT: "BOX_LIST_PREVIOUS_FILE_VERSIONS_FOR_LEGAL_HOLD_POLICY_ASSIGNMENT",
    /**
     * Returns information about the recent items accessed by a user, either in the last 90 days or up to the last 1000 items accessed.
     */
    LIST_RECENTLY_ACCESSED_ITEMS: "BOX_LIST_RECENTLY_ACCESSED_ITEMS",
    /**
     * Retrieves all of the retention policies for an enterprise.
     */
    LIST_RETENTION_POLICIES: "BOX_LIST_RETENTION_POLICIES",
    /**
     * Returns a list of all retention policy assignments associated with a specified retention policy.
     */
    LIST_RETENTION_POLICY_ASSIGNMENTS: "BOX_LIST_RETENTION_POLICY_ASSIGNMENTS",
    /**
     * Retrieves a list of shield information barrier objects for the enterprise of jwt.
     */
    LIST_SHIELD_INFORMATION_BARRIERS: "BOX_LIST_SHIELD_INFORMATION_BARRIERS",
    /**
     * Lists shield information barrier reports.
     */
    LIST_SHIELD_INFORMATION_BARRIER_REPORTS: "BOX_LIST_SHIELD_INFORMATION_BARRIER_REPORTS",
    /**
     * Retrieves a list of shield information barrier segment objects for the specified information barrier id.
     */
    LIST_SHIELD_INFORMATION_BARRIER_SEGMENTS: "BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENTS",
    /**
     * Lists shield information barrier segment members based on provided segment ids.
     */
    LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBERS: "BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_MEMBERS",
    /**
     * Lists shield information barrier segment restrictions based on provided segment id.
     */
    LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTIONS: "BOX_LIST_SHIELD_INFORMATION_BARRIER_SEGMENT_RESTRICTIONS",
    /**
     * Lists [slack integration mappings](https://support.box.com/hc/en-us/articles/4415585987859-box-as-the-content-layer-for-slack) in a users' enterprise. you need admin or co-admin role to use this endpoint.
     */
    LIST_SLACK_INTEGRATION_MAPPINGS: "BOX_LIST_SLACK_INTEGRATION_MAPPINGS",
    /**
     * Fetches all the storage policies in the enterprise.
     */
    LIST_STORAGE_POLICIES: "BOX_LIST_STORAGE_POLICIES",
    /**
     * Fetches all the storage policy assignment for an enterprise or user.
     */
    LIST_STORAGE_POLICY_ASSIGNMENTS: "BOX_LIST_STORAGE_POLICY_ASSIGNMENTS",
    /**
     * Retrieves a list of all the tasks for a file. this endpoint does not support pagination.
     */
    LIST_TASKS_ON_FILE: "BOX_LIST_TASKS_ON_FILE",
    /**
     * Lists all of the assignments for a given task.
     */
    LIST_TASK_ASSIGNMENTS: "BOX_LIST_TASK_ASSIGNMENTS",
    /**
     * Lists [teams integration mappings](https://support.box.com/hc/en-us/articles/360044681474-using-box-for-teams) in a users' enterprise. you need admin or co-admin role to use this endpoint.
     */
    LIST_TEAMS_INTEGRATION_MAPPINGS: "BOX_LIST_TEAMS_INTEGRATION_MAPPINGS",
    /**
     * Returns the current terms of service text and settings for the enterprise.
     */
    LIST_TERMS_OF_SERVICES: "BOX_LIST_TERMS_OF_SERVICES",
    /**
     * Retrieves an overview of users and their status for a terms of service, including whether they have accepted the terms and when.
     */
    LIST_TERMS_OF_SERVICE_USER_STATUSES: "BOX_LIST_TERMS_OF_SERVICE_USER_STATUSES",
    /**
     * Retrieves the files and folders that have been moved to the trash. any attribute in the full files or folders objects can be passed in with the `fields` parameter to retrieve those specific attributes that are not returned by default. this endpoint defaults to use offset-based pagination, yet also supports marker-based pagination using the `marker` parameter.
     */
    LIST_TRASHED_ITEMS: "BOX_LIST_TRASHED_ITEMS",
    /**
     * Returns a list of users who have been exempt from the collaboration domain restrictions.
     */
    LIST_USERS_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS: "BOX_LIST_USERS_EXEMPT_FROM_COLLABORATION_DOMAIN_RESTRICTIONS",
    /**
     * Returns up to a year of past events for a given user or for the entire enterprise. by default this returns events for the authenticated user. to retrieve events for the entire enterprise, set the `stream type` to `admin logs streaming` for live monitoring of new events, or `admin logs` for querying across historical events. the user making the api call will need to have admin privileges, and the application will need to have the scope `manage enterprise properties` checked.
     */
    LIST_USER_AND_ENTERPRISE_EVENTS: "BOX_LIST_USER_AND_ENTERPRISE_EVENTS",
    /**
     * Retrieves all email aliases for a user. the collection does not include the primary login for the user.
     */
    LIST_USER_S_EMAIL_ALIASES: "BOX_LIST_USER_S_EMAIL_ALIASES",
    /**
     * Retrieves all the groups for a user. only members of this group or users with admin-level permissions will be able to use this api.
     */
    LIST_USER_S_GROUPS: "BOX_LIST_USER_S_GROUPS",
    /**
     * Returns list of workflows that act on a given `folder id`, and have a flow with a trigger type of `workflow manual start`. you application must be authorized to use the `manage box relay` application scope within the developer console in to use this endpoint.
     */
    LIST_WORKFLOWS: "BOX_LIST_WORKFLOWS",
    /**
     * Permanently deletes a file that is in the trash. this action cannot be undone.
     */
    PERMANENTLY_REMOVE_FILE: "BOX_PERMANENTLY_REMOVE_FILE",
    /**
     * Permanently deletes a folder that is in the trash. this action cannot be undone.
     */
    PERMANENTLY_REMOVE_FOLDER: "BOX_PERMANENTLY_REMOVE_FOLDER",
    /**
     * Permanently deletes a web link that is in the trash. this action cannot be undone.
     */
    PERMANENTLY_REMOVE_WEB_LINK: "BOX_PERMANENTLY_REMOVE_WEB_LINK",
    /**
     * Performs a check to verify that a file will be accepted by box before you upload the entire file.
     */
    PREFLIGHT_CHECK_BEFORE_UPLOAD: "BOX_PREFLIGHT_CHECK_BEFORE_UPLOAD",
    /**
     * Promote a specific version of a file. if previous versions exist, this method can be used to promote one of the older versions to the top of the version history. this creates a new copy of the old version and puts it at the top of the versions history. the file will have the exact same contents as the older version, with the the same hash digest, `etag`, and name as the original. other properties such as comments do not get updated to their former values. don't use this endpoint to restore box notes, as it works with file formats such as pdf, doc, pptx or similar.
     */
    PROMOTE_FILE_VERSION: "BOX_PROMOTE_FILE_VERSION",
    /**
     * Create a search using sql-like syntax to return items that match specific metadata. by default, this endpoint returns only the most basic info about the items for which the query matches. to get additional fields for each item, including any of the metadata, use the `fields` attribute in the query.
     */
    QUERY_FILES_FOLDERS_BY_METADATA: "BOX_QUERY_FILES_FOLDERS_BY_METADATA",
    /**
     * Refresh an access token using its client id, secret, and refresh token.
     */
    REFRESH_ACCESS_TOKEN: "BOX_REFRESH_ACCESS_TOKEN",
    /**
     * Removes any box skills cards metadata from a file.
     */
    REMOVE_BOX_SKILL_CARDS_FROM_FILE: "BOX_REMOVE_BOX_SKILL_CARDS_FROM_FILE",
    /**
     * Removes any classifications from a file. this api can also be called by including the enterprise id in the url explicitly, for example `/files/:id//enterprise 12345/securityclassification-6vmvochwuwo`.
     */
    REMOVE_CLASSIFICATION_FROM_FILE: "BOX_REMOVE_CLASSIFICATION_FROM_FILE",
    /**
     * Removes any classifications from a folder. this api can also be called by including the enterprise id in the url explicitly, for example `/folders/:id/enterprise 12345/securityclassification-6vmvochwuwo`.
     */
    REMOVE_CLASSIFICATION_FROM_FOLDER: "BOX_REMOVE_CLASSIFICATION_FROM_FOLDER",
    /**
     * Deletes a single collaboration.
     */
    REMOVE_COLLABORATION: "BOX_REMOVE_COLLABORATION",
    /**
     * Permanently deletes a comment.
     */
    REMOVE_COMMENT: "BOX_REMOVE_COMMENT",
    /**
     * Deletes an individual device pin.
     */
    REMOVE_DEVICE_PIN: "BOX_REMOVE_DEVICE_PIN",
    /**
     * Removes a domain from the list of domains that have been deemed safe to create collaborations for within the current enterprise.
     */
    REMOVE_DOMAIN_FROM_LIST_OF_ALLOWED_COLLABORATION_DOMAINS: "BOX_REMOVE_DOMAIN_FROM_LIST_OF_ALLOWED_COLLABORATION_DOMAINS",
    /**
     * Removes an email alias from a user.
     */
    REMOVE_EMAIL_ALIAS: "BOX_REMOVE_EMAIL_ALIAS",
    /**
     * Move a file version to the trash. versions are only tracked for box users with premium accounts.
     */
    REMOVE_FILE_VERSION: "BOX_REMOVE_FILE_VERSION",
    /**
     * Permanently deletes a group. only users with admin-level permissions will be able to use this api.
     */
    REMOVE_GROUP: "BOX_REMOVE_GROUP",
    /**
     * Delete an existing legal hold policy. this is an asynchronous process. the policy will not be fully deleted yet when the response returns.
     */
    REMOVE_LEGAL_HOLD_POLICY: "BOX_REMOVE_LEGAL_HOLD_POLICY",
    /**
     * Deletes a metadata cascade policy.
     */
    REMOVE_METADATA_CASCADE_POLICY: "BOX_REMOVE_METADATA_CASCADE_POLICY",
    /**
     * Deletes a piece of file metadata.
     */
    REMOVE_METADATA_INSTANCE_FROM_FILE: "BOX_REMOVE_METADATA_INSTANCE_FROM_FILE",
    /**
     * Deletes a piece of folder metadata.
     */
    REMOVE_METADATA_INSTANCE_FROM_FOLDER: "BOX_REMOVE_METADATA_INSTANCE_FROM_FOLDER",
    /**
     * Delete a metadata template and its instances. this deletion is permanent and can not be reversed.
     */
    REMOVE_METADATA_TEMPLATE: "BOX_REMOVE_METADATA_TEMPLATE",
    /**
     * Removes a retention policy assignment applied to content.
     */
    REMOVE_RETENTION_POLICY_ASSIGNMENT: "BOX_REMOVE_RETENTION_POLICY_ASSIGNMENT",
    /**
     * Removes a shared link from a file.
     */
    REMOVE_SHARED_LINK_FROM_FILE: "BOX_REMOVE_SHARED_LINK_FROM_FILE",
    /**
     * Removes a shared link from a folder.
     */
    REMOVE_SHARED_LINK_FROM_FOLDER: "BOX_REMOVE_SHARED_LINK_FROM_FOLDER",
    /**
     * Removes a shared link from a web link.
     */
    REMOVE_SHARED_LINK_FROM_WEB_LINK: "BOX_REMOVE_SHARED_LINK_FROM_WEB_LINK",
    /**
     * Removes a task from a file.
     */
    REMOVE_TASK: "BOX_REMOVE_TASK",
    /**
     * Abort an upload session and discard all data uploaded. this cannot be reversed. the actual endpoint url is returned by the [`create upload session`](e://post-files-upload-sessions) and [`get upload session`](e://get-files-upload-sessions-id) endpoints.
     */
    REMOVE_UPLOAD_SESSION: "BOX_REMOVE_UPLOAD_SESSION",
    /**
     * Removes a user's exemption from the restrictions set out by the allowed list of domains for collaborations.
     */
    REMOVE_USER_DOMAIN_EXEMPTION: "BOX_REMOVE_USER_DOMAIN_EXEMPTION",
    /**
     * Deletes a specific group membership. only admins of this group or users with admin-level permissions will be able to use this api.
     */
    REMOVE_USER_FROM_GROUP: "BOX_REMOVE_USER_FROM_GROUP",
    /**
     * Removes the watermark from a file.
     */
    REMOVE_WATERMARK_FROM_FILE: "BOX_REMOVE_WATERMARK_FROM_FILE",
    /**
     * Removes the watermark from a folder.
     */
    REMOVE_WATERMARK_FROM_FOLDER: "BOX_REMOVE_WATERMARK_FROM_FOLDER",
    /**
     * Deletes a webhook.
     */
    REMOVE_WEBHOOK: "BOX_REMOVE_WEBHOOK",
    /**
     * Deletes a web link.
     */
    REMOVE_WEB_LINK: "BOX_REMOVE_WEB_LINK",
    /**
     * Request an access token using either a client-side obtained oauth 2.0 authorization code or a server-side jwt assertion. an access token is a string that enables box to verify that a request belongs to an authorized session. in the normal order of operations you will begin by requesting authentication from the [authorize](#get-authorize) endpoint and box will send you an authorization code. you will then send this code to this endpoint to exchange it for an access token. the returned access token can then be used to to make box api calls.
     */
    REQUEST_ACCESS_TOKEN: "BOX_REQUEST_ACCESS_TOKEN",
    /**
     * Resends a signature request email to all outstanding signers.
     */
    RESEND_BOX_SIGN_REQUEST: "BOX_RESEND_BOX_SIGN_REQUEST",
    /**
     * Restores a file that has been moved to the trash. an optional new parent id can be provided to restore the file to in case the original folder has been deleted.
     */
    RESTORE_FILE: "BOX_RESTORE_FILE",
    /**
     * Restores a specific version of a file after it was deleted. don't use this endpoint to restore box notes, as it works with file formats such as pdf, doc, pptx or similar.
     */
    RESTORE_FILE_VERSION: "BOX_RESTORE_FILE_VERSION",
    /**
     * Restores a folder that has been moved to the trash. an optional new parent id can be provided to restore the folder to in case the original folder has been deleted. during this operation, part of the file tree will be locked, mainly the source folder and all of its descendants, as well as the destination folder. for the duration of the operation, no other move, copy, delete, or restore operation can performed on any of the locked folders.
     */
    RESTORE_FOLDER: "BOX_RESTORE_FOLDER",
    /**
     * Restores a web link that has been moved to the trash. an optional new parent id can be provided to restore the web link to in case the original folder has been deleted.
     */
    RESTORE_WEB_LINK: "BOX_RESTORE_WEB_LINK",
    /**
     * Get a list of files with current file versions for a legal hold assignment. in some cases you may want to get previous file versions instead. in these cases, use the `get /legal hold policy assignments/:id/file versions on hold` api instead to return any previous versions of a file for this legal hold policy assignment. due to ongoing re-architecture efforts this api might not return all file versions held for this policy id. instead, this api will only return the latest file version held in the newly developed architecture. the `get /file version legal holds` api can be used to fetch current and past versions of files held within the legacy architecture. this endpoint does not support returning any content that is on hold due to a custodian collaborating on a hub. the `get /legal hold policy assignments?policy id={id}` api can be used to find a list of policy assignments for a given policy id.
     */
    REVIEW_FILES_ON_LEGAL_HOLD_POLICY_ASSIGNMENT: "BOX_REVIEW_FILES_ON_LEGAL_HOLD_POLICY_ASSIGNMENT",
    /**
     * Revoke an active access token, effectively logging a user out that has been previously authenticated.
     */
    REVOKE_ACCESS_TOKEN: "BOX_REVOKE_ACCESS_TOKEN",
    /**
     * Searches for files, folders, web links, and shared files across the users content or across the entire enterprise.
     */
    SEARCH_FOR_CONTENT: "BOX_SEARCH_FOR_CONTENT",
    /**
     * Initiates a flow with a trigger type of `workflow manual start`. you application must be authorized to use the `manage box relay` application scope within the developer console.
     */
    STARTS_WORKFLOW_BASED_ON_REQUEST_BODY: "BOX_STARTS_WORKFLOW_BASED_ON_REQUEST_BODY",
    /**
     * Transfers ownership of a specific folder (with id 0) from one user to another in the box cloud storage system. this endpoint should be used when you need to change the owner of a user's root folder, effectively transferring all of their content to another user. it's particularly useful in scenarios such as employee offboarding or role transitions within an organization. the operation is irreversible, so it should be used with caution. note that this endpoint specifically targets the folder with id 0, which typically represents a user's root folder in box.
     */
    TRANSFER_OWNED_FOLDERS: "BOX_TRANSFER_OWNED_FOLDERS",
    /**
     * Remove a legal hold from an item. this is an asynchronous process. the policy will not be fully removed yet when the response returns.
     */
    UNASSIGN_LEGAL_HOLD_POLICY: "BOX_UNASSIGN_LEGAL_HOLD_POLICY",
    /**
     * Delete a storage policy assignment. deleting a storage policy assignment on a user will have the user inherit the enterprise's default storage policy. there is a rate limit for calling this endpoint of only twice per user in a 24 hour time frame.
     */
    UNASSIGN_STORAGE_POLICY: "BOX_UNASSIGN_STORAGE_POLICY",
    /**
     * Deletes a specific task assignment.
     */
    UNASSIGN_TASK: "BOX_UNASSIGN_TASK",
    /**
     * Updates an ai agent.
     */
    UPDATE_AI_AGENT: "BOX_UPDATE_AI_AGENT",
    /**
     * An alternative method that can be used to overwrite and update all box skill metadata cards on a file.
     */
    UPDATE_ALL_BOX_SKILL_CARDS_ON_FILE: "BOX_UPDATE_ALL_BOX_SKILL_CARDS_ON_FILE",
    /**
     * Updates a collaboration. can be used to change the owner of an item, or to accept collaboration invites.
     */
    UPDATE_COLLABORATION: "BOX_UPDATE_COLLABORATION",
    /**
     * Update the message of a comment.
     */
    UPDATE_COMMENT: "BOX_UPDATE_COMMENT",
    /**
     * Updates a file. this can be used to rename or move a file, create a shared link, or lock a file.
     */
    UPDATE_FILE: "BOX_UPDATE_FILE",
    /**
     * Updates a file request. this can be used to activate or deactivate a file request.
     */
    UPDATE_FILE_REQUEST: "BOX_UPDATE_FILE_REQUEST",
    /**
     * Updates a folder. this can be also be used to move the folder, create shared links, update collaborations, and more.
     */
    UPDATE_FOLDER: "BOX_UPDATE_FOLDER",
    /**
     * Updates a specific group. only admins of this group or users with admin-level permissions will be able to use this api.
     */
    UPDATE_GROUP: "BOX_UPDATE_GROUP",
    /**
     * Updates a user's group membership. only admins of this group or users with admin-level permissions will be able to use this api.
     */
    UPDATE_GROUP_MEMBERSHIP: "BOX_UPDATE_GROUP_MEMBERSHIP",
    /**
     * Update legal hold policy.
     */
    UPDATE_LEGAL_HOLD_POLICY: "BOX_UPDATE_LEGAL_HOLD_POLICY",
    /**
     * Updates a retention policy.
     */
    UPDATE_RETENTION_POLICY: "BOX_UPDATE_RETENTION_POLICY",
    /**
     * Updates a shared link on a file.
     */
    UPDATE_SHARED_LINK_ON_FILE: "BOX_UPDATE_SHARED_LINK_ON_FILE",
    /**
     * Updates a shared link on a folder.
     */
    UPDATE_SHARED_LINK_ON_FOLDER: "BOX_UPDATE_SHARED_LINK_ON_FOLDER",
    /**
     * Updates a shared link on a web link.
     */
    UPDATE_SHARED_LINK_ON_WEB_LINK: "BOX_UPDATE_SHARED_LINK_ON_WEB_LINK",
    /**
     * Update shield information barrier segment with specified id
     */
    UPDATE_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID: "BOX_UPDATE_SHIELD_INFORMATION_BARRIER_SEGMENT_WITH_SPECIFIED_ID",
    /**
     * Updates a [slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-box-as-the-content-layer-for-slack). supports updating the box folder id and options. you need admin or co-admin role to use this endpoint.
     */
    UPDATE_SLACK_INTEGRATION_MAPPING: "BOX_UPDATE_SLACK_INTEGRATION_MAPPING",
    /**
     * Updates a specific storage policy assignment.
     */
    UPDATE_STORAGE_POLICY_ASSIGNMENT: "BOX_UPDATE_STORAGE_POLICY_ASSIGNMENT",
    /**
     * Updates a task. this can be used to update a task's configuration, or to update its completion state.
     */
    UPDATE_TASK: "BOX_UPDATE_TASK",
    /**
     * Updates a task assignment. this endpoint can be used to update the state of a task assigned to a user.
     */
    UPDATE_TASK_ASSIGNMENT: "BOX_UPDATE_TASK_ASSIGNMENT",
    /**
     * Updates a [teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-using-box-for-teams). supports updating the box folder id and options. you need admin or co-admin role to use this endpoint.
     */
    UPDATE_TEAMS_INTEGRATION_MAPPING: "BOX_UPDATE_TEAMS_INTEGRATION_MAPPING",
    /**
     * Updates a specific terms of service.
     */
    UPDATE_TERMS_OF_SERVICE: "BOX_UPDATE_TERMS_OF_SERVICE",
    /**
     * Updates the status for a terms of service for a user.
     */
    UPDATE_TERMS_OF_SERVICE_STATUS_FOR_EXISTING_USER: "BOX_UPDATE_TERMS_OF_SERVICE_STATUS_FOR_EXISTING_USER",
    /**
     * Updates a managed or app user in an enterprise. this endpoint is only available to users and applications with the right admin permissions.
     */
    UPDATE_USER: "BOX_UPDATE_USER",
    /**
     * Updates a webhook.
     */
    UPDATE_WEBHOOK: "BOX_UPDATE_WEBHOOK",
    /**
     * Updates a web link object.
     */
    UPDATE_WEB_LINK: "BOX_UPDATE_WEB_LINK",
    /**
     * Uploads a small file to box. for file sizes over 50mb we recommend using the chunk upload apis. the `attributes` part of the body must come **before** the `file` part. requests that do not follow this format when uploading the file will receive a http `400` error with a `metadata after file contents` error code.
     */
    UPLOAD_FILE: "BOX_UPLOAD_FILE",
    /**
     * Update a file's content. for file sizes over 50mb we recommend using the chunk upload apis. the `attributes` part of the body must come **before** the `file` part. requests that do not follow this format when uploading the file will receive a http `400` error with a `metadata after file contents` error code.
     */
    UPLOAD_FILE_VERSION: "BOX_UPLOAD_FILE_VERSION",
    /**
     * Uploads a chunk of a file for an upload session. the actual endpoint url is returned by the [`create upload session`](e://post-files-upload-sessions) and [`get upload session`](e://get-files-upload-sessions-id) endpoints.
     */
    UPLOAD_PART_OF_FILE: "BOX_UPLOAD_PART_OF_FILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BOX".
 */
export type BOX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BOX".
 */
export type BOX_TRIGGER_EVENTS = {}
