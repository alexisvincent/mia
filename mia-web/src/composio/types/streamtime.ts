// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of STREAMTIME's STREAMTIME_LIST_ROLES tool input.
 */
type STREAMTIME_LIST_ROLES_INPUT = object;

/**
 * Type of STREAMTIME's STREAMTIME_LIST_ROLES tool output.
 */
type STREAMTIME_LIST_ROLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Roles
       * @description List of role objects
       */
      roles: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the role was created
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the role
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the role
           */
          id: string;
          /**
           * Name
           * @description Name of the role
           */
          name: string;
          /**
           * Permissions
           * @description Permissions assigned to the role
           */
          permissions: string[];
          /**
           * Updated At
           * @description ISO 8601 timestamp when the role was last updated
           */
          updatedAt: string;
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
 * Type of STREAMTIME's STREAMTIME_ORGANISATION_GET_ORGANISATION tool input.
 */
type STREAMTIME_ORGANISATION_GET_ORGANISATION_INPUT = object;

/**
 * Type of STREAMTIME's STREAMTIME_ORGANISATION_GET_ORGANISATION tool output.
 */
type STREAMTIME_ORGANISATION_GET_ORGANISATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Currency
       * @description Default currency used by the organisation
       */
      currency: string;
      /**
       * Id
       * @description Unique identifier of the organisation
       */
      id: string;
      /**
       * Name
       * @description Name of the organisation
       */
      name: string;
      /**
       * Time Zone
       * @description Time zone configured for the organisation
       */
      timeZone: string;
  } & {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of STREAMTIME's STREAMTIME_ROLES_GET_ROLE tool input.
 */
type STREAMTIME_ROLES_GET_ROLE_INPUT = {
  /**
   * Role Id
   * @description The unique identifier for the role to retrieve.
   */
  role_id?: string;
};

/**
 * Type of STREAMTIME's STREAMTIME_ROLES_GET_ROLE tool output.
 */
type STREAMTIME_ROLES_GET_ROLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the role was created.
       */
      createdAt: string;
      /**
       * Id
       * @description The role's unique identifier.
       */
      id: string;
      /**
       * Is Active
       * @description Whether the role is currently active.
       */
      isActive: boolean;
      /**
       * Name
       * @description The name of the role.
       */
      name: string;
      /**
       * Permissions
       * @description List of permissions assigned to the role.
       */
      permissions: {
          /**
           * Id
           * @description Unique identifier of the permission
           */
          id: string;
          /**
           * Name
           * @description Name of the permission
           */
          name: string;
      }[];
      /**
       * Updated At
       * @description ISO8601 timestamp when the role was last updated.
       */
      updatedAt: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of STREAMTIME's STREAMTIME_USERS_LIST_SAVED_SEGMENTS tool input.
 */
type STREAMTIME_USERS_LIST_SAVED_SEGMENTS_INPUT = {
  /**
   * User Id
   * @description The user's unique identifier (path parameter).
   */
  user_id?: string;
};

/**
 * Type of STREAMTIME's STREAMTIME_USERS_LIST_SAVED_SEGMENTS tool output.
 */
type STREAMTIME_USERS_LIST_SAVED_SEGMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Segments
       * @description List of saved segments associated with the user.
       */
      segments: {
          /**
           * Created At
           * @description ISO 8601 timestamp when this segment was created.
           */
          createdAt: string;
          /**
           * Filter
           * @description Filter settings used to generate this segment.
           */
          filter: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the saved segment.
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the saved segment.
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when this segment was last updated.
           */
          updatedAt: string;
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
 * Type map of all available tool input types for toolkit "STREAMTIME".
 */
export type STREAMTIME_TOOL_INPUTS = {
  LIST_ROLES: STREAMTIME_LIST_ROLES_INPUT
  ORGANISATION_GET_ORGANISATION: STREAMTIME_ORGANISATION_GET_ORGANISATION_INPUT
  ROLES_GET_ROLE: STREAMTIME_ROLES_GET_ROLE_INPUT
  USERS_LIST_SAVED_SEGMENTS: STREAMTIME_USERS_LIST_SAVED_SEGMENTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "STREAMTIME".
 */
export type STREAMTIME_TOOL_OUTPUTS = {
  LIST_ROLES: STREAMTIME_LIST_ROLES_OUTPUT
  ORGANISATION_GET_ORGANISATION: STREAMTIME_ORGANISATION_GET_ORGANISATION_OUTPUT
  ROLES_GET_ROLE: STREAMTIME_ROLES_GET_ROLE_OUTPUT
  USERS_LIST_SAVED_SEGMENTS: STREAMTIME_USERS_LIST_SAVED_SEGMENTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's STREAMTIME toolkit.
 */
export const STREAMTIME = {
  slug: "streamtime",
  tools: {
    /**
     * Tool to list all roles. use when you need to fetch all organization roles after confirming a valid streamtime api token.
     */
    LIST_ROLES: "STREAMTIME_LIST_ROLES",
    /**
     * Tool to retrieve your organisation’s details. use after confirming your authentication to ensure you are operating within the correct organisation context.
     */
    ORGANISATION_GET_ORGANISATION: "STREAMTIME_ORGANISATION_GET_ORGANISATION",
    /**
     * Tool to retrieve a role by id. use when you need to fetch details of a specific role after confirming its id.
     */
    ROLES_GET_ROLE: "STREAMTIME_ROLES_GET_ROLE",
    /**
     * Tool to list saved segments for a user. use when you need to retrieve all saved segments of a specific user after verifying their user id.
     */
    USERS_LIST_SAVED_SEGMENTS: "STREAMTIME_USERS_LIST_SAVED_SEGMENTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "STREAMTIME".
 */
export type STREAMTIME_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "STREAMTIME".
 */
export type STREAMTIME_TRIGGER_EVENTS = {}
