// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOCUPILOT's DOCUPILOT_CREATE_FOLDER tool input.
 */
type DOCUPILOT_CREATE_FOLDER_INPUT = {
  /**
   * Name
   * @description Name of the folder to be created
   */
  name?: string;
};

/**
 * Type of DOCUPILOT's DOCUPILOT_CREATE_FOLDER tool output.
 */
type DOCUPILOT_CREATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the newly created folder
       */
      id: number;
      /**
       * Name
       * @description Name of the newly created folder
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
 * Type of DOCUPILOT's DOCUPILOT_FOLDERS_CREATE tool input.
 */
type DOCUPILOT_FOLDERS_CREATE_INPUT = {
  /**
   * Name
   * @description Name of the folder to be created
   */
  name?: string;
};

/**
 * Type of DOCUPILOT's DOCUPILOT_FOLDERS_CREATE tool output.
 */
type DOCUPILOT_FOLDERS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the newly created folder
       */
      id: number;
      /**
       * Name
       * @description Name of the newly created folder
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
 * Type of DOCUPILOT's DOCUPILOT_FOLDERS_LIST tool input.
 */
type DOCUPILOT_FOLDERS_LIST_INPUT = object;

/**
 * Type of DOCUPILOT's DOCUPILOT_FOLDERS_LIST tool output.
 */
type DOCUPILOT_FOLDERS_LIST_OUTPUT = {
  /**
   * Data
   * @description Array of folder objects
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the folder
       */
      id: number;
      /**
       * Name
       * @description Human-readable name of the folder
       */
      name: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Call status, always 'success' on success
   * @constant
   */
  status?: "success";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCUPILOT's DOCUPILOT_GET_AUTHENTICATED_USER tool input.
 */
type DOCUPILOT_GET_AUTHENTICATED_USER_INPUT = object;

/**
 * Type of DOCUPILOT's DOCUPILOT_GET_AUTHENTICATED_USER tool output.
 */
type DOCUPILOT_GET_AUTHENTICATED_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the user was created.
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the user.
       */
      email: string;
      /**
       * First Name
       * @description First name of the user.
       */
      first_name: string;
      /**
       * Id
       * @description Unique identifier of the user.
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the user.
       */
      last_name: string;
      /**
       * Role
       * @description Role assigned to the user (e.g., 'admin', 'member').
       */
      role: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the user was last updated.
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
 * Type map of all available tool input types for toolkit "DOCUPILOT".
 */
export type DOCUPILOT_TOOL_INPUTS = {
  CREATE_FOLDER: DOCUPILOT_CREATE_FOLDER_INPUT
  FOLDERS_CREATE: DOCUPILOT_FOLDERS_CREATE_INPUT
  FOLDERS_LIST: DOCUPILOT_FOLDERS_LIST_INPUT
  GET_AUTHENTICATED_USER: DOCUPILOT_GET_AUTHENTICATED_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOCUPILOT".
 */
export type DOCUPILOT_TOOL_OUTPUTS = {
  CREATE_FOLDER: DOCUPILOT_CREATE_FOLDER_OUTPUT
  FOLDERS_CREATE: DOCUPILOT_FOLDERS_CREATE_OUTPUT
  FOLDERS_LIST: DOCUPILOT_FOLDERS_LIST_OUTPUT
  GET_AUTHENTICATED_USER: DOCUPILOT_GET_AUTHENTICATED_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOCUPILOT toolkit.
 */
export const DOCUPILOT = {
  slug: "docupilot",
  tools: {
    /**
     * Tool to create a new folder. use when organizing documents into custom workspace folders after confirming workspace context.
     */
    CREATE_FOLDER: "DOCUPILOT_CREATE_FOLDER",
    /**
     * Tool to create a new folder. use when organizing documents into custom workspace folders after confirming workspace context.
     */
    FOLDERS_CREATE: "DOCUPILOT_FOLDERS_CREATE",
    /**
     * Tool to list all folders. use after authentication to fetch available workspace folders.
     */
    FOLDERS_LIST: "DOCUPILOT_FOLDERS_LIST",
    /**
     * Tool to retrieve information about the authenticated user. use after authentication to confirm identity and fetch user account details.
     */
    GET_AUTHENTICATED_USER: "DOCUPILOT_GET_AUTHENTICATED_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOCUPILOT".
 */
export type DOCUPILOT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOCUPILOT".
 */
export type DOCUPILOT_TRIGGER_EVENTS = {}
