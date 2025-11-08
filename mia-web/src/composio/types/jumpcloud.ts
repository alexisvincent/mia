// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of JUMPCLOUD's JUMPCLOUD_CREATE_SYSTEM tool input.
 */
type JUMPCLOUD_CREATE_SYSTEM_INPUT = {
  /**
   * Message Template
   * @description Optional custom text to include in the guidance message (supports unicode and emojis).
   * @default null
   */
  message_template: string | null;
  /**
   * Preflight Resource
   * @description Which resource to query for preflight validation. Supported: 'systems', 'systemgroups'.
   * @default systems
   */
  preflight_resource: string | null;
  /**
   * X Org Id
   * @description Optional organization ID header for multi-tenant admins (x-org-id).
   * @default null
   */
  "x-org-id": string | null;
};

/**
 * Type of JUMPCLOUD's JUMPCLOUD_CREATE_SYSTEM tool output.
 */
type JUMPCLOUD_CREATE_SYSTEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Informational message about system creation support
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
 * Type of JUMPCLOUD's JUMPCLOUD_DELETE_ROLE tool input.
 */
type JUMPCLOUD_DELETE_ROLE_INPUT = {
  /**
   * Role Id
   * @description UUID of the role to delete
   */
  role_id?: string;
};

/**
 * Type of JUMPCLOUD's JUMPCLOUD_DELETE_ROLE tool output.
 */
type JUMPCLOUD_DELETE_ROLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the delete role request
       * @example 204
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
 * Type map of all available tool input types for toolkit "JUMPCLOUD".
 */
export type JUMPCLOUD_TOOL_INPUTS = {
  CREATE_SYSTEM: JUMPCLOUD_CREATE_SYSTEM_INPUT
  DELETE_ROLE: JUMPCLOUD_DELETE_ROLE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "JUMPCLOUD".
 */
export type JUMPCLOUD_TOOL_OUTPUTS = {
  CREATE_SYSTEM: JUMPCLOUD_CREATE_SYSTEM_OUTPUT
  DELETE_ROLE: JUMPCLOUD_DELETE_ROLE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's JUMPCLOUD toolkit.
 */
export const JUMPCLOUD = {
  slug: "jumpcloud",
  tools: {
    /**
     * Tool to register a new system. Use when attempting to create a system via API. Note: JumpCloud does not support system creation through its REST API. Use agent installation to enroll systems.
     */
    CREATE_SYSTEM: "JUMPCLOUD_CREATE_SYSTEM",
    /**
     * Tool to delete a specific JumpCloud role by its ID. Use when you need to remove a role after confirming the ID. Call only after ensuring the role is no longer assigned.
     */
    DELETE_ROLE: "JUMPCLOUD_DELETE_ROLE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "JUMPCLOUD".
 */
export type JUMPCLOUD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "JUMPCLOUD".
 */
export type JUMPCLOUD_TRIGGER_EVENTS = {}
