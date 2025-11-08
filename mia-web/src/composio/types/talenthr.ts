// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TALENTHR's TALENTHR_ASSIGN_PERMISSION tool input.
 */
type TALENTHR_ASSIGN_PERMISSION_INPUT = {
  /**
   * Permissions
   * @description Non-empty list of permission assignments (permission_id and allow flag) to apply.
   */
  permissions?: {
      /**
       * Allow
       * @description Flag indicating if the permission should be granted (true) or revoked (false).
       */
      allow: boolean;
      /**
       * Permission Id
       * @description The unique identifier of the permission to assign.
       */
      permission_id: string;
  }[];
  /**
   * Role Id
   * @description The unique identifier of the role to modify.
   */
  role_id?: string;
};

/**
 * Type of TALENTHR's TALENTHR_ASSIGN_PERMISSION tool output.
 */
type TALENTHR_ASSIGN_PERMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assigned Permissions
       * @description List of permission assignments returned by the API after assignment.
       */
      assigned_permissions: {
          /**
           * Allow
           * @description Flag indicating if the permission should be granted (true) or revoked (false).
           */
          allow: boolean;
          /**
           * Permission Id
           * @description The unique identifier of the permission to assign.
           */
          permission_id: string;
      }[];
      /**
       * Message
       * @description Descriptive message about the operation result.
       */
      message: string;
      /**
       * Success
       * @description Indicates whether the operation was successful.
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
 * Type map of all available tool input types for toolkit "TALENTHR".
 */
export type TALENTHR_TOOL_INPUTS = {
  ASSIGN_PERMISSION: TALENTHR_ASSIGN_PERMISSION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TALENTHR".
 */
export type TALENTHR_TOOL_OUTPUTS = {
  ASSIGN_PERMISSION: TALENTHR_ASSIGN_PERMISSION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TALENTHR toolkit.
 */
export const TALENTHR = {
  slug: "talenthr",
  tools: {
    /**
     * Tool to assign permissions to a specific role. use when you need to grant or revoke permissions for a role after validating both role and permission ids.
     */
    ASSIGN_PERMISSION: "TALENTHR_ASSIGN_PERMISSION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TALENTHR".
 */
export type TALENTHR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TALENTHR".
 */
export type TALENTHR_TRIGGER_EVENTS = {}
