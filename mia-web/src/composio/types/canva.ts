// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CANVA's CANVA_ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST tool input.
 */
type CANVA_ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST_INPUT = {
  /**
   * Continuation
   * @description If the success response contains a continuation token, the user has access to more brand templates you can list. You can use this token as a query parameter and retrieve more templates from the list, for example `/v1/brand-templates?continuation={continuation}`. To retrieve all the brand templates available to the user, you might need to make multiple requests.
   */
  continuation?: string;
  /**
   * Dataset
   * @description Filter the list of brand templates based on the brand templates" dataset definitions. Brand templates with dataset definitions are mainly used with the [Autofill APIs](https://www.canva.dev/docs/connect/api-reference/autofills/). This can be one of the following: - `any`: (Default) Brand templates with and without dataset definitions. - `non_empty`: Brand templates with one or more data fields defined. - `empty`: Brand templates with no data fields defined.
   * @enum {string}
   */
  dataset?: "any" | "non_empty" | "empty";
  /**
   * Ownership
   * @description Filter the list of brand templates based on the user"s ownership of the brand templates. This can be one of the following: - `any`: (Default) Brand templates owned by and shared with the user. - `owned`: Brand templates owned by the user. - `shared`: Brand templates shared with the user.
   * @enum {string}
   */
  ownership?: "any" | "owned" | "shared";
  /**
   * Query
   * @description Lets you search the brand templates available to the user using a search term or terms.
   */
  query?: string;
  /**
   * Sort By
   * @description Sort the list of brand templates. This can be one of the following: - `relevance`: (Default) Sort results using a relevance algorithm. - `modified_descending`: Sort results by the date last modified in descending order. - `modified_ascending`: Sort results by the date last modified in ascending order. - `title_descending`: Sort results by title in descending order. - `title_ascending`: Sort results by title in ascending order.
   * @enum {string}
   */
  sort_by?: "relevance" | "modified_descending" | "modified_ascending" | "title_descending" | "title_ascending";
};

/**
 * Type of CANVA's CANVA_ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST tool output.
 */
type CANVA_ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET tool input.
 */
type CANVA_CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET_INPUT = {
  /**
   * Asset Id
   * @description The ID of an asset to insert into the created design.
   */
  asset_id?: string;
  /**
   * Title
   * @description The name of the design. Must be less than 256 characters.
   */
  title?: string;
};

/**
 * Type of CANVA's CANVA_CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET tool output.
 */
type CANVA_CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_CREATE_COMMENT_REPLY_IN_DESIGN tool input.
 */
type CANVA_CREATE_COMMENT_REPLY_IN_DESIGN_INPUT = {
  /**
   * Comment Id
   * @description The `id` of the comment.
   */
  commentId?: string;
  /**
   * Message
   * @description The reply comment message. This is the reply comment body shown in the Canva UI. You can also mention users in your message by specifying their User ID and Team ID using the format `[user_id:team_id]`.
   */
  message?: string;
};

/**
 * Type of CANVA's CANVA_CREATE_COMMENT_REPLY_IN_DESIGN tool output.
 */
type CANVA_CREATE_COMMENT_REPLY_IN_DESIGN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_CREATE_DESIGN_COMMENT_IN_PREVIEW_API tool input.
 */
type CANVA_CREATE_DESIGN_COMMENT_IN_PREVIEW_API_INPUT = {
  /**
   * Assignee Id
   * @description Lets you assign the comment to a Canva user using their User ID. You _must_ mention the assigned user in the `message`.
   */
  assignee_id?: string;
  /**
   * Message
   * @description The comment message. This is the comment body shown in the Canva UI. You can also mention users in your message by specifying their User ID and Team ID using the format `[user_id:team_id]`. If the `assignee_id` parameter is specified, you must mention the assignee in the message.
   */
  message?: string;
};

/**
 * Type of CANVA's CANVA_CREATE_DESIGN_COMMENT_IN_PREVIEW_API tool output.
 */
type CANVA_CREATE_DESIGN_COMMENT_IN_PREVIEW_API_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_CREATE_USER_OR_SUB_FOLDER tool input.
 */
type CANVA_CREATE_USER_OR_SUB_FOLDER_INPUT = {
  /**
   * Name
   * @description The name of the folder. Must be less than 256 characters.
   */
  name?: string;
  /**
   * Parent Folder Id
   * @description The folder ID of the parent folder. To create a new folder at the top level of a user"s [projects](https://www.canva.com/help/find-designs-and-folders/), use the ID `root`.
   */
  parent_folder_id?: string;
};

/**
 * Type of CANVA's CANVA_CREATE_USER_OR_SUB_FOLDER tool output.
 */
type CANVA_CREATE_USER_OR_SUB_FOLDER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_DELETE_ASSET_BY_ID tool input.
 */
type CANVA_DELETE_ASSET_BY_ID_INPUT = {
  /**
   * Asset Id
   * @description The ID of the asset.
   */
  assetId?: string;
};

/**
 * Type of CANVA's CANVA_DELETE_ASSET_BY_ID tool output.
 */
type CANVA_DELETE_ASSET_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_EXCHANGE_OAUTH20_ACCESS_OR_REFRESH_TOKEN tool input.
 */
type CANVA_EXCHANGE_OAUTH20_ACCESS_OR_REFRESH_TOKEN_INPUT = object;

/**
 * Type of CANVA's CANVA_EXCHANGE_OAUTH20_ACCESS_OR_REFRESH_TOKEN tool output.
 */
type CANVA_EXCHANGE_OAUTH20_ACCESS_OR_REFRESH_TOKEN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_FETCH_ASSET_UPLOAD_JOB_STATUS tool input.
 */
type CANVA_FETCH_ASSET_UPLOAD_JOB_STATUS_INPUT = {
  /**
   * Job Id
   * @description The asset upload job ID.
   */
  jobId?: string;
};

/**
 * Type of CANVA's CANVA_FETCH_ASSET_UPLOAD_JOB_STATUS tool output.
 */
type CANVA_FETCH_ASSET_UPLOAD_JOB_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_FETCH_CANVA_CONNECT_SIGNING_PUBLIC_KEYS tool input.
 */
type CANVA_FETCH_CANVA_CONNECT_SIGNING_PUBLIC_KEYS_INPUT = object;

/**
 * Type of CANVA's CANVA_FETCH_CANVA_CONNECT_SIGNING_PUBLIC_KEYS tool output.
 */
type CANVA_FETCH_CANVA_CONNECT_SIGNING_PUBLIC_KEYS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_FETCH_CURRENT_USER_DETAILS tool input.
 */
type CANVA_FETCH_CURRENT_USER_DETAILS_INPUT = object;

/**
 * Type of CANVA's CANVA_FETCH_CURRENT_USER_DETAILS tool output.
 */
type CANVA_FETCH_CURRENT_USER_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_FETCH_DESIGN_METADATA_AND_ACCESS_INFORMATION tool input.
 */
type CANVA_FETCH_DESIGN_METADATA_AND_ACCESS_INFORMATION_INPUT = {
  /**
   * Design Id
   * @description The design ID.
   */
  designId?: string;
};

/**
 * Type of CANVA's CANVA_FETCH_DESIGN_METADATA_AND_ACCESS_INFORMATION tool output.
 */
type CANVA_FETCH_DESIGN_METADATA_AND_ACCESS_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_GET_DESIGN_EXPORT_JOB_RESULT tool input.
 */
type CANVA_GET_DESIGN_EXPORT_JOB_RESULT_INPUT = {
  /**
   * Export Id
   * @description The export job ID.
   */
  exportId?: string;
};

/**
 * Type of CANVA's CANVA_GET_DESIGN_EXPORT_JOB_RESULT tool output.
 */
type CANVA_GET_DESIGN_EXPORT_JOB_RESULT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_INITIATES_CANVA_DESIGN_EXPORT_JOB tool input.
 */
type CANVA_INITIATES_CANVA_DESIGN_EXPORT_JOB_INPUT = {
  /**
   * Design Id
   * @description The design ID.
   */
  design_id?: string;
};

/**
 * Type of CANVA's CANVA_INITIATES_CANVA_DESIGN_EXPORT_JOB tool output.
 */
type CANVA_INITIATES_CANVA_DESIGN_EXPORT_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_INITIATE_CANVA_DESIGN_AUTOFILL_JOB tool input.
 */
type CANVA_INITIATE_CANVA_DESIGN_AUTOFILL_JOB_INPUT = {
  /**
   * Brand Template Id
   * @description ID of the input brand template.
   */
  brand_template_id?: string;
  /**
   * Data
   * @description Data object containing the data fields and values to autofill.
   */
  data?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Title
   * @description Title to use for the autofilled design. Must be less than 256 characters. If no design title is provided, the autofilled design will have the same title as the brand template.
   */
  title?: string;
};

/**
 * Type of CANVA's CANVA_INITIATE_CANVA_DESIGN_AUTOFILL_JOB tool output.
 */
type CANVA_INITIATE_CANVA_DESIGN_AUTOFILL_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_LIST_DESIGN_PAGES_WITH_PAGINATION tool input.
 */
type CANVA_LIST_DESIGN_PAGES_WITH_PAGINATION_INPUT = {
  /**
   * Design Id
   * @description The design ID.
   */
  designId?: string;
  /**
   * Limit
   * @description The number of pages to return, starting at the page index specified using the `offset` parameter. Default is `50` pages.
   * @default 50
   */
  limit: number;
  /**
   * Offset
   * @description The page index to start the range of pages to return. Default is `1`. Pages are indexed using one-based numbering, so the first page in a design has the index value `1`.
   * @default 1
   */
  offset: number;
};

/**
 * Type of CANVA's CANVA_LIST_DESIGN_PAGES_WITH_PAGINATION tool output.
 */
type CANVA_LIST_DESIGN_PAGES_WITH_PAGINATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_LIST_FOLDER_ITEMS_BY_TYPE_WITH_SORTING tool input.
 */
type CANVA_LIST_FOLDER_ITEMS_BY_TYPE_WITH_SORTING_INPUT = {
  /**
   * Continuation
   * @description If the success response contains a continuation token, the folder contains more items you can list. You can use this token as a query parameter and retrieve more items from the list, for example `/v1/folders/{folderId}/items?continuation={continuation}`. To retrieve all the items in a folder, you might need to make multiple requests.
   */
  continuation?: string;
  /**
   * Folder Id
   * @description The folder ID.
   */
  folderId?: string;
  /**
   * Item Types
   * @description Filter the folder items to only return specified types. The available types are: `design`, `folder`, and `image`. To filter for more than one item type, provide a comma- delimited list.
   */
  item_types?: string[];
  /**
   * Sort By
   * @description Sort the list of folder items. This can be one of the following: - `created_ascending`: Sort results by creation date, in ascending order. - `created_descending`: Sort results by creation date, in descending order. - `modified_ascending`: Sort results by the last modified date, in ascending order. - `modified_descending`: (Default) Sort results by the last modified date, in descending order. - `title_ascending`: Sort results by title, in ascending order. The title is either the `name` field for a folder or asset, or the `title` field for a design. - `title_descending`: Sort results by title, in descending order. The title is either the `name` field for a folder or asset, or the `title` field for a design.
   * @default modified_descending
   * @enum {string}
   */
  sort_by: "created_ascending" | "created_descending" | "modified_ascending" | "modified_descending" | "title_ascending" | "title_descending";
};

/**
 * Type of CANVA's CANVA_LIST_FOLDER_ITEMS_BY_TYPE_WITH_SORTING tool output.
 */
type CANVA_LIST_FOLDER_ITEMS_BY_TYPE_WITH_SORTING_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_LIST_USER_DESIGNS tool input.
 */
type CANVA_LIST_USER_DESIGNS_INPUT = {
  /**
   * Continuation
   * @description If the success response contains a continuation token, the list contains more designs you can list. You can use this token as a query parameter and retrieve more designs from the list, for example `/v1/designs?continuation={continuation}`. To retrieve all of a user"s designs, you might need to make multiple requests.
   */
  continuation?: string;
  /**
   * Ownership
   * @description Filter the list of designs based on the user"s ownership of the designs. This can be one of the following: - `owned`: Designs owned by the user. - `shared`: Designs shared with the user. - `any`: Designs owned by and shared with the user.
   * @enum {string}
   */
  ownership?: "any" | "owned" | "shared";
  /**
   * Query
   * @description Lets you search the user"s designs, and designs shared with the user, using a search term or terms.
   */
  query?: string;
  /**
   * Sort By
   * @description Sort the list of designs. This can be one of the following: - `relevance`: (Default) Sort results using a relevance algorithm. - `modified_descending`: Sort results by the date last modified in descending order. - `modified_ascending`: Sort results by the date last modified in ascending order. - `title_descending`: Sort results by title in descending order. - `title_ascending`: Sort results by title in ascending order.
   * @enum {string}
   */
  sort_by?: "relevance" | "modified_descending" | "modified_ascending" | "title_descending" | "title_ascending";
};

/**
 * Type of CANVA's CANVA_LIST_USER_DESIGNS tool output.
 */
type CANVA_LIST_USER_DESIGNS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_MOVE_ITEM_TO_SPECIFIED_FOLDER tool input.
 */
type CANVA_MOVE_ITEM_TO_SPECIFIED_FOLDER_INPUT = {
  /**
   * Item Id
   * @description The ID of the item you want to move.
   */
  item_id?: string;
  /**
   * To Folder Id
   * @description The ID of the folder you want to move the item to (the destination folder). If you want to move the item to the top level of a Canva user"s [projects](https://www.canva.com/help/find-designs-and-folders/), use the ID `root`.
   */
  to_folder_id?: string;
};

/**
 * Type of CANVA's CANVA_MOVE_ITEM_TO_SPECIFIED_FOLDER tool output.
 */
type CANVA_MOVE_ITEM_TO_SPECIFIED_FOLDER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_REMOVE_FOLDER_AND_MOVE_CONTENTS_TO_TRASH tool input.
 */
type CANVA_REMOVE_FOLDER_AND_MOVE_CONTENTS_TO_TRASH_INPUT = {
  /**
   * Folder Id
   * @description The folder ID.
   */
  folderId?: string;
};

/**
 * Type of CANVA's CANVA_REMOVE_FOLDER_AND_MOVE_CONTENTS_TO_TRASH tool output.
 */
type CANVA_REMOVE_FOLDER_AND_MOVE_CONTENTS_TO_TRASH_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_APP_PUBLIC_KEY_SET tool input.
 */
type CANVA_RETRIEVE_APP_PUBLIC_KEY_SET_INPUT = {
  /**
   * App Id
   * @description The app id
   */
  appId?: string;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_APP_PUBLIC_KEY_SET tool output.
 */
type CANVA_RETRIEVE_APP_PUBLIC_KEY_SET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_ASSET_METADATA_BY_ID tool input.
 */
type CANVA_RETRIEVE_ASSET_METADATA_BY_ID_INPUT = {
  /**
   * Asset Id
   * @description The ID of the asset.
   */
  assetId?: string;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_ASSET_METADATA_BY_ID tool output.
 */
type CANVA_RETRIEVE_ASSET_METADATA_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_A_SPECIFIC_DESIGN_COMMENT tool input.
 */
type CANVA_RETRIEVE_A_SPECIFIC_DESIGN_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The `id` of the comment.
   */
  commentId?: string;
  /**
   * Design Id
   * @description The design ID.
   */
  designId?: string;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_A_SPECIFIC_DESIGN_COMMENT tool output.
 */
type CANVA_RETRIEVE_A_SPECIFIC_DESIGN_COMMENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_BRAND_TEMPLATE_DATASET_DEFINITION tool input.
 */
type CANVA_RETRIEVE_BRAND_TEMPLATE_DATASET_DEFINITION_INPUT = {
  /**
   * Brand Template Id
   * @description The brand template ID.
   */
  brandTemplateId?: string;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_BRAND_TEMPLATE_DATASET_DEFINITION tool output.
 */
type CANVA_RETRIEVE_BRAND_TEMPLATE_DATASET_DEFINITION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_CANVA_ENTERPRISE_BRAND_TEMPLATE_METADATA tool input.
 */
type CANVA_RETRIEVE_CANVA_ENTERPRISE_BRAND_TEMPLATE_METADATA_INPUT = {
  /**
   * Brand Template Id
   * @description The brand template ID.
   */
  brandTemplateId?: string;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_CANVA_ENTERPRISE_BRAND_TEMPLATE_METADATA tool output.
 */
type CANVA_RETRIEVE_CANVA_ENTERPRISE_BRAND_TEMPLATE_METADATA_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_DESIGN_AUTOFILL_JOB_STATUS tool input.
 */
type CANVA_RETRIEVE_DESIGN_AUTOFILL_JOB_STATUS_INPUT = {
  /**
   * Job Id
   * @description The design autofill job ID.
   */
  jobId?: string;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_DESIGN_AUTOFILL_JOB_STATUS tool output.
 */
type CANVA_RETRIEVE_DESIGN_AUTOFILL_JOB_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_DESIGN_IMPORT_JOB_STATUS tool input.
 */
type CANVA_RETRIEVE_DESIGN_IMPORT_JOB_STATUS_INPUT = {
  /**
   * Job Id
   * @description The design import job ID.
   */
  jobId?: string;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_DESIGN_IMPORT_JOB_STATUS tool output.
 */
type CANVA_RETRIEVE_DESIGN_IMPORT_JOB_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_FOLDER_DETAILS_BY_ID tool input.
 */
type CANVA_RETRIEVE_FOLDER_DETAILS_BY_ID_INPUT = {
  /**
   * Folder Id
   * @description The folder ID.
   */
  folderId?: string;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_FOLDER_DETAILS_BY_ID tool output.
 */
type CANVA_RETRIEVE_FOLDER_DETAILS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_RETRIEVE_USER_PROFILE_DATA tool input.
 */
type CANVA_RETRIEVE_USER_PROFILE_DATA_INPUT = object;

/**
 * Type of CANVA's CANVA_RETRIEVE_USER_PROFILE_DATA tool output.
 */
type CANVA_RETRIEVE_USER_PROFILE_DATA_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_REVOKE_OAUTH_TOKENS tool input.
 */
type CANVA_REVOKE_OAUTH_TOKENS_INPUT = {
  /**
   * Client Id
   * @description Your integration"s unique ID, for authenticating the request. NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.
   */
  client_id?: string;
  /**
   * Client Secret
   * @description Your integration"s client secret, for authenticating the request. Begins with `cnvca`. NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.
   */
  client_secret?: string;
  /**
   * Token
   * @description The token to revoke.
   */
  token?: string;
};

/**
 * Type of CANVA's CANVA_REVOKE_OAUTH_TOKENS tool output.
 */
type CANVA_REVOKE_OAUTH_TOKENS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_UPDATE_ASSET_S_NAME_AND_TAGS_BY_ID tool input.
 */
type CANVA_UPDATE_ASSET_S_NAME_AND_TAGS_BY_ID_INPUT = {
  /**
   * Asset Id
   * @description The ID of the asset.
   */
  assetId?: string;
  /**
   * Name
   * @description The name of the asset. This is shown in the Canva UI. When this field is undefined, nothing is updated. Maximum length 50 characters.
   */
  name?: string;
  /**
   * Tags
   * @description The replacement tags for the asset. When this field is undefined, nothing is updated. Maximum length 50 tags. Each tag has a maximum length of 50 characters.
   */
  tags?: string[];
};

/**
 * Type of CANVA's CANVA_UPDATE_ASSET_S_NAME_AND_TAGS_BY_ID tool output.
 */
type CANVA_UPDATE_ASSET_S_NAME_AND_TAGS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_UPDATE_FOLDER_DETAILS_BY_ID tool input.
 */
type CANVA_UPDATE_FOLDER_DETAILS_BY_ID_INPUT = {
  /**
   * Folder Id
   * @description The folder ID.
   */
  folderId?: string;
  /**
   * Name
   * @description The folder name, as shown in the Canva UI.
   */
  name?: string;
};

/**
 * Type of CANVA's CANVA_UPDATE_FOLDER_DETAILS_BY_ID tool output.
 */
type CANVA_UPDATE_FOLDER_DETAILS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CANVA's CANVA_VALIDATE_OAUTH_TOKEN_PROPERTIES tool input.
 */
type CANVA_VALIDATE_OAUTH_TOKEN_PROPERTIES_INPUT = {
  /**
   * Client Id
   * @description Your integration"s unique ID, for authenticating the request. NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.
   */
  client_id?: string;
  /**
   * Client Secret
   * @description Your integration"s client secret, for authenticating the request. Begins with `cnvca`. NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.
   */
  client_secret?: string;
  /**
   * Token
   * @description The token to introspect.
   */
  token?: string;
};

/**
 * Type of CANVA's CANVA_VALIDATE_OAUTH_TOKEN_PROPERTIES tool output.
 */
type CANVA_VALIDATE_OAUTH_TOKEN_PROPERTIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CANVA".
 */
export type CANVA_TOOL_INPUTS = {
  ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST: CANVA_ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST_INPUT
  CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET: CANVA_CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET_INPUT
  CREATE_COMMENT_REPLY_IN_DESIGN: CANVA_CREATE_COMMENT_REPLY_IN_DESIGN_INPUT
  CREATE_DESIGN_COMMENT_IN_PREVIEW_API: CANVA_CREATE_DESIGN_COMMENT_IN_PREVIEW_API_INPUT
  CREATE_USER_OR_SUB_FOLDER: CANVA_CREATE_USER_OR_SUB_FOLDER_INPUT
  DELETE_ASSET_BY_ID: CANVA_DELETE_ASSET_BY_ID_INPUT
  EXCHANGE_OAUTH20_ACCESS_OR_REFRESH_TOKEN: CANVA_EXCHANGE_OAUTH20_ACCESS_OR_REFRESH_TOKEN_INPUT
  FETCH_ASSET_UPLOAD_JOB_STATUS: CANVA_FETCH_ASSET_UPLOAD_JOB_STATUS_INPUT
  FETCH_CANVA_CONNECT_SIGNING_PUBLIC_KEYS: CANVA_FETCH_CANVA_CONNECT_SIGNING_PUBLIC_KEYS_INPUT
  FETCH_CURRENT_USER_DETAILS: CANVA_FETCH_CURRENT_USER_DETAILS_INPUT
  FETCH_DESIGN_METADATA_AND_ACCESS_INFORMATION: CANVA_FETCH_DESIGN_METADATA_AND_ACCESS_INFORMATION_INPUT
  GET_DESIGN_EXPORT_JOB_RESULT: CANVA_GET_DESIGN_EXPORT_JOB_RESULT_INPUT
  INITIATES_CANVA_DESIGN_EXPORT_JOB: CANVA_INITIATES_CANVA_DESIGN_EXPORT_JOB_INPUT
  INITIATE_CANVA_DESIGN_AUTOFILL_JOB: CANVA_INITIATE_CANVA_DESIGN_AUTOFILL_JOB_INPUT
  LIST_DESIGN_PAGES_WITH_PAGINATION: CANVA_LIST_DESIGN_PAGES_WITH_PAGINATION_INPUT
  LIST_FOLDER_ITEMS_BY_TYPE_WITH_SORTING: CANVA_LIST_FOLDER_ITEMS_BY_TYPE_WITH_SORTING_INPUT
  LIST_USER_DESIGNS: CANVA_LIST_USER_DESIGNS_INPUT
  MOVE_ITEM_TO_SPECIFIED_FOLDER: CANVA_MOVE_ITEM_TO_SPECIFIED_FOLDER_INPUT
  REMOVE_FOLDER_AND_MOVE_CONTENTS_TO_TRASH: CANVA_REMOVE_FOLDER_AND_MOVE_CONTENTS_TO_TRASH_INPUT
  RETRIEVE_APP_PUBLIC_KEY_SET: CANVA_RETRIEVE_APP_PUBLIC_KEY_SET_INPUT
  RETRIEVE_ASSET_METADATA_BY_ID: CANVA_RETRIEVE_ASSET_METADATA_BY_ID_INPUT
  RETRIEVE_A_SPECIFIC_DESIGN_COMMENT: CANVA_RETRIEVE_A_SPECIFIC_DESIGN_COMMENT_INPUT
  RETRIEVE_BRAND_TEMPLATE_DATASET_DEFINITION: CANVA_RETRIEVE_BRAND_TEMPLATE_DATASET_DEFINITION_INPUT
  RETRIEVE_CANVA_ENTERPRISE_BRAND_TEMPLATE_METADATA: CANVA_RETRIEVE_CANVA_ENTERPRISE_BRAND_TEMPLATE_METADATA_INPUT
  RETRIEVE_DESIGN_AUTOFILL_JOB_STATUS: CANVA_RETRIEVE_DESIGN_AUTOFILL_JOB_STATUS_INPUT
  RETRIEVE_DESIGN_IMPORT_JOB_STATUS: CANVA_RETRIEVE_DESIGN_IMPORT_JOB_STATUS_INPUT
  RETRIEVE_FOLDER_DETAILS_BY_ID: CANVA_RETRIEVE_FOLDER_DETAILS_BY_ID_INPUT
  RETRIEVE_USER_PROFILE_DATA: CANVA_RETRIEVE_USER_PROFILE_DATA_INPUT
  REVOKE_OAUTH_TOKENS: CANVA_REVOKE_OAUTH_TOKENS_INPUT
  UPDATE_ASSET_S_NAME_AND_TAGS_BY_ID: CANVA_UPDATE_ASSET_S_NAME_AND_TAGS_BY_ID_INPUT
  UPDATE_FOLDER_DETAILS_BY_ID: CANVA_UPDATE_FOLDER_DETAILS_BY_ID_INPUT
  VALIDATE_OAUTH_TOKEN_PROPERTIES: CANVA_VALIDATE_OAUTH_TOKEN_PROPERTIES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CANVA".
 */
export type CANVA_TOOL_OUTPUTS = {
  ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST: CANVA_ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST_OUTPUT
  CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET: CANVA_CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET_OUTPUT
  CREATE_COMMENT_REPLY_IN_DESIGN: CANVA_CREATE_COMMENT_REPLY_IN_DESIGN_OUTPUT
  CREATE_DESIGN_COMMENT_IN_PREVIEW_API: CANVA_CREATE_DESIGN_COMMENT_IN_PREVIEW_API_OUTPUT
  CREATE_USER_OR_SUB_FOLDER: CANVA_CREATE_USER_OR_SUB_FOLDER_OUTPUT
  DELETE_ASSET_BY_ID: CANVA_DELETE_ASSET_BY_ID_OUTPUT
  EXCHANGE_OAUTH20_ACCESS_OR_REFRESH_TOKEN: CANVA_EXCHANGE_OAUTH20_ACCESS_OR_REFRESH_TOKEN_OUTPUT
  FETCH_ASSET_UPLOAD_JOB_STATUS: CANVA_FETCH_ASSET_UPLOAD_JOB_STATUS_OUTPUT
  FETCH_CANVA_CONNECT_SIGNING_PUBLIC_KEYS: CANVA_FETCH_CANVA_CONNECT_SIGNING_PUBLIC_KEYS_OUTPUT
  FETCH_CURRENT_USER_DETAILS: CANVA_FETCH_CURRENT_USER_DETAILS_OUTPUT
  FETCH_DESIGN_METADATA_AND_ACCESS_INFORMATION: CANVA_FETCH_DESIGN_METADATA_AND_ACCESS_INFORMATION_OUTPUT
  GET_DESIGN_EXPORT_JOB_RESULT: CANVA_GET_DESIGN_EXPORT_JOB_RESULT_OUTPUT
  INITIATES_CANVA_DESIGN_EXPORT_JOB: CANVA_INITIATES_CANVA_DESIGN_EXPORT_JOB_OUTPUT
  INITIATE_CANVA_DESIGN_AUTOFILL_JOB: CANVA_INITIATE_CANVA_DESIGN_AUTOFILL_JOB_OUTPUT
  LIST_DESIGN_PAGES_WITH_PAGINATION: CANVA_LIST_DESIGN_PAGES_WITH_PAGINATION_OUTPUT
  LIST_FOLDER_ITEMS_BY_TYPE_WITH_SORTING: CANVA_LIST_FOLDER_ITEMS_BY_TYPE_WITH_SORTING_OUTPUT
  LIST_USER_DESIGNS: CANVA_LIST_USER_DESIGNS_OUTPUT
  MOVE_ITEM_TO_SPECIFIED_FOLDER: CANVA_MOVE_ITEM_TO_SPECIFIED_FOLDER_OUTPUT
  REMOVE_FOLDER_AND_MOVE_CONTENTS_TO_TRASH: CANVA_REMOVE_FOLDER_AND_MOVE_CONTENTS_TO_TRASH_OUTPUT
  RETRIEVE_APP_PUBLIC_KEY_SET: CANVA_RETRIEVE_APP_PUBLIC_KEY_SET_OUTPUT
  RETRIEVE_ASSET_METADATA_BY_ID: CANVA_RETRIEVE_ASSET_METADATA_BY_ID_OUTPUT
  RETRIEVE_A_SPECIFIC_DESIGN_COMMENT: CANVA_RETRIEVE_A_SPECIFIC_DESIGN_COMMENT_OUTPUT
  RETRIEVE_BRAND_TEMPLATE_DATASET_DEFINITION: CANVA_RETRIEVE_BRAND_TEMPLATE_DATASET_DEFINITION_OUTPUT
  RETRIEVE_CANVA_ENTERPRISE_BRAND_TEMPLATE_METADATA: CANVA_RETRIEVE_CANVA_ENTERPRISE_BRAND_TEMPLATE_METADATA_OUTPUT
  RETRIEVE_DESIGN_AUTOFILL_JOB_STATUS: CANVA_RETRIEVE_DESIGN_AUTOFILL_JOB_STATUS_OUTPUT
  RETRIEVE_DESIGN_IMPORT_JOB_STATUS: CANVA_RETRIEVE_DESIGN_IMPORT_JOB_STATUS_OUTPUT
  RETRIEVE_FOLDER_DETAILS_BY_ID: CANVA_RETRIEVE_FOLDER_DETAILS_BY_ID_OUTPUT
  RETRIEVE_USER_PROFILE_DATA: CANVA_RETRIEVE_USER_PROFILE_DATA_OUTPUT
  REVOKE_OAUTH_TOKENS: CANVA_REVOKE_OAUTH_TOKENS_OUTPUT
  UPDATE_ASSET_S_NAME_AND_TAGS_BY_ID: CANVA_UPDATE_ASSET_S_NAME_AND_TAGS_BY_ID_OUTPUT
  UPDATE_FOLDER_DETAILS_BY_ID: CANVA_UPDATE_FOLDER_DETAILS_BY_ID_OUTPUT
  VALIDATE_OAUTH_TOKEN_PROPERTIES: CANVA_VALIDATE_OAUTH_TOKEN_PROPERTIES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CANVA toolkit.
 */
export const CANVA = {
  slug: "canva",
  tools: {
    /**
     * This year, brand template ids will change; integrations storing them must update within 6 months. also, api use requires canva enterprise membership.
     */
    ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST: "CANVA_ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST",
    /**
     * Create a new canva design using a preset or custom dimensions, and add an asset with `asset id` from a user's project using relevant apis.
     */
    CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET: "CANVA_CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET",
    /**
     * This preview api allows replying to comments within a design on canva, with a limit of 100 replies per comment. users should note potential unannounced changes, and that preview apis are not eligible for public integrations.
     */
    CREATE_COMMENT_REPLY_IN_DESIGN: "CANVA_CREATE_COMMENT_REPLY_IN_DESIGN",
    /**
     * This api is in preview and may change without notice; integrations using it won't pass review. it allows creating comments on a design, with a limit of 1000 comments per design.
     */
    CREATE_DESIGN_COMMENT_IN_PREVIEW_API: "CANVA_CREATE_DESIGN_COMMENT_IN_PREVIEW_API",
    /**
     * This api creates a folder in a canva user's projects at the top level or within another folder, returning the new folder's id and additional details upon success.
     */
    CREATE_USER_OR_SUB_FOLDER: "CANVA_CREATE_USER_OR_SUB_FOLDER",
    /**
     * You can delete an asset by specifying its `assetid`. this operation mirrors the behavior in the canva ui. deleting an item moves it to the trash. deleting an asset doesn't remove it from designs that already use it.
     */
    DELETE_ASSET_BY_ID: "CANVA_DELETE_ASSET_BY_ID",
    /**
     * The oauth 2.0 endpoint issues time-limited (4-hour) access tokens of up to 4kb for user authorization via codes or refresh tokens. it requires client id/secret for authentication.
     */
    EXCHANGE_OAUTH20_ACCESS_OR_REFRESH_TOKEN: "CANVA_EXCHANGE_OAUTH20_ACCESS_OR_REFRESH_TOKEN",
    /**
     * Summarize asset upload outcome by repeatedly calling the endpoint until a 'success' or 'failed' status is received after using the create asset upload job api.
     */
    FETCH_ASSET_UPLOAD_JOB_STATUS: "CANVA_FETCH_ASSET_UPLOAD_JOB_STATUS",
    /**
     * The api for verifying canva webhooks, 'connect/keys,' is in preview, meaning unstable, not for public integrations, and provides a rotating jwk for signature verification to prevent replay attacks. cache keys for efficiency.
     */
    FETCH_CANVA_CONNECT_SIGNING_PUBLIC_KEYS: "CANVA_FETCH_CANVA_CONNECT_SIGNING_PUBLIC_KEYS",
    /**
     * Returns the user id, team id, and display name of the user account associated with the provided access token.
     */
    FETCH_CURRENT_USER_DETAILS: "CANVA_FETCH_CURRENT_USER_DETAILS",
    /**
     * Gets the metadata for a design. this includes owner information, urls for editing and viewing, and thumbnail information.
     */
    FETCH_DESIGN_METADATA_AND_ACCESS_INFORMATION: "CANVA_FETCH_DESIGN_METADATA_AND_ACCESS_INFORMATION",
    /**
     * Get the outcome of a canva design export job; if done, receive download links for the design’s pages. for details, visit the create design export job api documentation.
     */
    GET_DESIGN_EXPORT_JOB_RESULT: "CANVA_GET_DESIGN_EXPORT_JOB_RESULT",
    /**
     * Canva's new job feature exports designs in multiple formats using a design id, with provided download links. the export status can be tracked via an api. exports with 'pro' quality may fail if the design contains unpaid premium elements.
     */
    INITIATES_CANVA_DESIGN_EXPORT_JOB: "CANVA_INITIATES_CANVA_DESIGN_EXPORT_JOB",
    /**
     * Upcoming brand template id updates require migration within 6 months. canva enterprise users can auto-fill designs using various data types, including experimental chart data. monitor jobs with specific api.
     */
    INITIATE_CANVA_DESIGN_AUTOFILL_JOB: "CANVA_INITIATE_CANVA_DESIGN_AUTOFILL_JOB",
    /**
     * Preview api for canva: subject to unannounced changes and not for public integrations. lists metadata for design pages with optional `offset` and `limit`; not applicable to all design types.
     */
    LIST_DESIGN_PAGES_WITH_PAGINATION: "CANVA_LIST_DESIGN_PAGES_WITH_PAGINATION",
    /**
     * Lists the items in a folder, including each item's `type`. folders can contain: - other folders. - designs, such as instagram posts, presentations, and documents ([canva docs](https://www.canva.com/create/documents/)). - image assets.
     */
    LIST_FOLDER_ITEMS_BY_TYPE_WITH_SORTING: "CANVA_LIST_FOLDER_ITEMS_BY_TYPE_WITH_SORTING",
    /**
     * Provides a summary of canva user designs, includes search filtering, and allows showing both self-created and shared designs with sorting options.
     */
    LIST_USER_DESIGNS: "CANVA_LIST_USER_DESIGNS",
    /**
     * Transfers an item to a different folder by specifying both the destination folder's id and the item's id. if the item is in various folders, an error occurs; manual relocation via canva ui is required.
     */
    MOVE_ITEM_TO_SPECIFIED_FOLDER: "CANVA_MOVE_ITEM_TO_SPECIFIED_FOLDER",
    /**
     * Deletes a folder by moving the user's content to trash and reassigning other users' content to their top-level projects.
     */
    REMOVE_FOLDER_AND_MOVE_CONTENTS_TO_TRASH: "CANVA_REMOVE_FOLDER_AND_MOVE_CONTENTS_TO_TRASH",
    /**
     * Returns the json web key set (public keys) of an app. these keys are used to verify jwts sent to app backends.
     */
    RETRIEVE_APP_PUBLIC_KEY_SET: "CANVA_RETRIEVE_APP_PUBLIC_KEY_SET",
    /**
     * You can retrieve the metadata of an asset by specifying its `assetid`.
     */
    RETRIEVE_ASSET_METADATA_BY_ID: "CANVA_RETRIEVE_ASSET_METADATA_BY_ID",
    /**
     * This preview api is subject to unannounced changes and can't be used in public integrations. it retrieves a comment, details of which are on canva help center.
     */
    RETRIEVE_A_SPECIFIC_DESIGN_COMMENT: "CANVA_RETRIEVE_A_SPECIFIC_DESIGN_COMMENT",
    /**
     * Canva's brand template ids will change later this year, including a 6-month integration migration. api access requires enterprise membership, providing autofill for images, text, and charts, although chart data could change during preview.
     */
    RETRIEVE_BRAND_TEMPLATE_DATASET_DEFINITION: "CANVA_RETRIEVE_BRAND_TEMPLATE_DATASET_DEFINITION",
    /**
     * Upcoming update will change brand template ids; integrations must migrate within 6 months. api use requires canva enterprise membership.
     */
    RETRIEVE_CANVA_ENTERPRISE_BRAND_TEMPLATE_METADATA: "CANVA_RETRIEVE_CANVA_ENTERPRISE_BRAND_TEMPLATE_METADATA",
    /**
     * Api users with canva enterprise membership can retrieve design autofill job results, potentially requiring multiple requests until a `success` or `failed` status is received.
     */
    RETRIEVE_DESIGN_AUTOFILL_JOB_STATUS: "CANVA_RETRIEVE_DESIGN_AUTOFILL_JOB_STATUS",
    /**
     * Gets the status and results of design import jobs created using the [create design import job api](https://www.canva.dev/docs/connect/api-reference/design-imports/create-design-import-job/).
     */
    RETRIEVE_DESIGN_IMPORT_JOB_STATUS: "CANVA_RETRIEVE_DESIGN_IMPORT_JOB_STATUS",
    /**
     * Gets the name and other details of a folder using a folder's `folderid`.
     */
    RETRIEVE_FOLDER_DETAILS_BY_ID: "CANVA_RETRIEVE_FOLDER_DETAILS_BY_ID",
    /**
     * Currently, this returns the display name of the user account associated with the provided access token. more user information is expected to be included in the future.
     */
    RETRIEVE_USER_PROFILE_DATA: "CANVA_RETRIEVE_USER_PROFILE_DATA",
    /**
     * Revoke a refresh token to end its lineage and user consent, requiring re-authentication. authenticate using either basic access with base64-encoded credentials or body parameters with client id and secret.
     */
    REVOKE_OAUTH_TOKENS: "CANVA_REVOKE_OAUTH_TOKENS",
    /**
     * You can update the name and tags of an asset by specifying its `assetid`. updating the tags replaces all existing tags of the asset.
     */
    UPDATE_ASSET_S_NAME_AND_TAGS_BY_ID: "CANVA_UPDATE_ASSET_S_NAME_AND_TAGS_BY_ID",
    /**
     * Updates a folder's details using its `folderid`. currently, you can only update a folder's name.
     */
    UPDATE_FOLDER_DETAILS_BY_ID: "CANVA_UPDATE_FOLDER_DETAILS_BY_ID",
    /**
     * Check an access token's validity and properties via introspection, requiring authentication. use basic access (base64 encoded `client id:client secret`) or body parameters for credentialing.
     */
    VALIDATE_OAUTH_TOKEN_PROPERTIES: "CANVA_VALIDATE_OAUTH_TOKEN_PROPERTIES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CANVA".
 */
export type CANVA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CANVA".
 */
export type CANVA_TRIGGER_EVENTS = {}
