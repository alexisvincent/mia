// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_CREATE_FOLDER tool input.
 */
type SHARE_POINT_SHAREPOINT_CREATE_FOLDER_INPUT = {
  /**
   * Document Library
   * @description The document library where the folder should be created.
   * @default Shared Documents
   */
  document_library: string;
  /**
   * Folder Name
   * @description The name of the folder to create.
   */
  folder_name?: string;
  /**
   * Relative Path
   * @description Additional path within the document library (optional).
   * @default
   */
  relative_path: string;
};

/**
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_CREATE_FOLDER tool output.
 */
type SHARE_POINT_SHAREPOINT_CREATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item Count
       * @description Number of items in the created folder
       */
      item_count: number;
      /**
       * Message
       * @description Success message indicating folder creation
       */
      message: string;
      /**
       * Name
       * @description Name of the created folder
       */
      name: string;
      /**
       * Server Relative Url
       * @description The server relative URL of the created folder
       */
      server_relative_url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_CREATE_LIST tool input.
 */
type SHARE_POINT_SHAREPOINT_CREATE_LIST_INPUT = {
  /**
   * Description
   * @description Description of the list (optional).
   * @default
   */
  description: string;
  /**
   * Name
   * @description The name of the list to create.
   */
  name?: string;
  /**
   * Template
   * @description The template type for the list (e.g., 'genericList', 'documentLibrary', 'tasks', etc.).
   */
  template?: string;
};

/**
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_CREATE_LIST tool output.
 */
type SHARE_POINT_SHAREPOINT_CREATE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description The description of the created list
       */
      description: string;
      /**
       * List Id
       * @description The ID of the created list
       */
      list_id: string;
      /**
       * Message
       * @description Success message indicating list creation
       */
      message: string;
      /**
       * Title
       * @description The title of the created list
       */
      title: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_CREATE_LIST_ITEM tool input.
 */
type SHARE_POINT_SHAREPOINT_CREATE_LIST_ITEM_INPUT = {
  /**
   * Item Properties
   * @description Dictionary of field names and values for the list item. Example: {'Title': 'New Item', 'Body': 'Content'}
   */
  item_properties?: {
      [key: string]: unknown;
  };
  /**
   * List Name
   * @description The name or title of the list where the item will be created.
   */
  list_name?: string;
};

/**
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_CREATE_LIST_ITEM tool output.
 */
type SHARE_POINT_SHAREPOINT_CREATE_LIST_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the item was created
       */
      created_at: string;
      /**
       * Item Data
       * @description The created item's data
       */
      item_data: {
          [key: string]: unknown;
      };
      /**
       * Item Id
       * @description The ID of the created list item
       */
      item_id: number;
      /**
       * Message
       * @description Success message indicating item creation
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
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_CREATE_USER tool input.
 */
type SHARE_POINT_SHAREPOINT_CREATE_USER_INPUT = {
  /**
   * Email
   * @description Email address of the user to create.
   */
  email?: string;
  /**
   * Login Name
   * @description Login name for the user (must match Azure AD UPN).
   */
  login_name?: string;
  /**
   * Title
   * @description Display name/title for the user.
   */
  title?: string;
};

/**
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_CREATE_USER tool output.
 */
type SHARE_POINT_SHAREPOINT_CREATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Login Name
       * @description The login name of the created user
       */
      login_name: string;
      /**
       * Message
       * @description Success message indicating user creation
       */
      message: string;
      /**
       * User Id
       * @description The ID of the created user
       */
      user_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_FIND_USER tool input.
 */
type SHARE_POINT_SHAREPOINT_FIND_USER_INPUT = {
  /**
   * Email
   * @description Email address of the user to find.
   */
  email?: string;
};

/**
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_FIND_USER tool output.
 */
type SHARE_POINT_SHAREPOINT_FIND_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Details
       * @description Error details if any
       * @default
       */
      error_details: string;
      /**
       * Exists In Graph
       * @description Whether user exists in Microsoft Graph
       */
      exists_in_graph: boolean;
      /**
       * Exists In Sharepoint
       * @description Whether user exists in SharePoint
       */
      exists_in_sharepoint: boolean;
      /**
       * User Details
       * @description User details if found
       */
      user_details?: {
          [key: string]: unknown;
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
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_REMOVE_USER tool input.
 */
type SHARE_POINT_SHAREPOINT_REMOVE_USER_INPUT = {
  /**
   * Email
   * @description Email address of the user to remove.
   */
  email?: string;
};

/**
 * Type of SHARE_POINT's SHARE_POINT_SHAREPOINT_REMOVE_USER tool output.
 */
type SHARE_POINT_SHAREPOINT_REMOVE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description The email of the user that was removed
       */
      email: string;
      /**
       * Message
       * @description Success message indicating user removal status
       */
      message: string;
      /**
       * Was Removed
       * @description Whether the user was actually removed
       */
      was_removed: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "SHARE_POINT".
 */
export type SHARE_POINT_TOOL_INPUTS = {
  SHAREPOINT_CREATE_FOLDER: SHARE_POINT_SHAREPOINT_CREATE_FOLDER_INPUT
  SHAREPOINT_CREATE_LIST: SHARE_POINT_SHAREPOINT_CREATE_LIST_INPUT
  SHAREPOINT_CREATE_LIST_ITEM: SHARE_POINT_SHAREPOINT_CREATE_LIST_ITEM_INPUT
  SHAREPOINT_CREATE_USER: SHARE_POINT_SHAREPOINT_CREATE_USER_INPUT
  SHAREPOINT_FIND_USER: SHARE_POINT_SHAREPOINT_FIND_USER_INPUT
  SHAREPOINT_REMOVE_USER: SHARE_POINT_SHAREPOINT_REMOVE_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SHARE_POINT".
 */
export type SHARE_POINT_TOOL_OUTPUTS = {
  SHAREPOINT_CREATE_FOLDER: SHARE_POINT_SHAREPOINT_CREATE_FOLDER_OUTPUT
  SHAREPOINT_CREATE_LIST: SHARE_POINT_SHAREPOINT_CREATE_LIST_OUTPUT
  SHAREPOINT_CREATE_LIST_ITEM: SHARE_POINT_SHAREPOINT_CREATE_LIST_ITEM_OUTPUT
  SHAREPOINT_CREATE_USER: SHARE_POINT_SHAREPOINT_CREATE_USER_OUTPUT
  SHAREPOINT_FIND_USER: SHARE_POINT_SHAREPOINT_FIND_USER_OUTPUT
  SHAREPOINT_REMOVE_USER: SHARE_POINT_SHAREPOINT_REMOVE_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SHARE_POINT toolkit.
 */
export const SHARE_POINT = {
  slug: "share_point",
  tools: {
    /**
     * Creates a new folder in sharepoint using the rest api.
     */
    SHAREPOINT_CREATE_FOLDER: "SHARE_POINT_SHAREPOINT_CREATE_FOLDER",
    /**
     * Creates a new list in sharepoint using the rest api.
     */
    SHAREPOINT_CREATE_LIST: "SHARE_POINT_SHAREPOINT_CREATE_LIST",
    /**
     * Creates a new item in a sharepoint list.
     */
    SHAREPOINT_CREATE_LIST_ITEM: "SHARE_POINT_SHAREPOINT_CREATE_LIST_ITEM",
    /**
     * Creates a new user in sharepoint.
     */
    SHAREPOINT_CREATE_USER: "SHARE_POINT_SHAREPOINT_CREATE_USER",
    /**
     * Finds a user in both microsoft graph and sharepoint to verify their existence and status.
     */
    SHAREPOINT_FIND_USER: "SHARE_POINT_SHAREPOINT_FIND_USER",
    /**
     * Removes a user from sharepoint. will not fail if user doesn't exist.
     */
    SHAREPOINT_REMOVE_USER: "SHARE_POINT_SHAREPOINT_REMOVE_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SHARE_POINT".
 */
export type SHARE_POINT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SHARE_POINT".
 */
export type SHARE_POINT_TRIGGER_EVENTS = {}
