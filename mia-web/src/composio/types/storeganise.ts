// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of STOREGANISE's STOREGANISE_GET_ADMIN_SITES_BY_ID tool input.
 */
type STOREGANISE_GET_ADMIN_SITES_BY_ID_INPUT = {
  /**
   * Include
   * @description Comma-separated list of related resources to include for detailed single-site views. Use sparingly (only on single-item calls).
   * @default null
   */
  include: string[] | null;
  /**
   * Site Id Or Code
   * @description Unique identifier or code of the site.
   */
  site_id_or_code?: string;
};

/**
 * Type of STOREGANISE's STOREGANISE_GET_ADMIN_SITES_BY_ID tool output.
 */
type STOREGANISE_GET_ADMIN_SITES_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Site code.
       */
      code: string;
      /**
       * Created At
       * @description ISO timestamp when the site was created.
       * @default null
       */
      createdAt: string | null;
      /**
       * Description
       * @description Detailed site description. Can be a localized dict or simple string.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique site identifier.
       */
      id: string;
      /**
       * Subtitle
       * @description Site subtitle or tagline. Can be a localized dict or simple string.
       * @default null
       */
      subtitle: string | null;
      /**
       * Timezone
       * @description Timezone of the site.
       * @default null
       */
      timezone: string | null;
      /**
       * Title
       * @description Site title or name. Can be a localized dict or simple string.
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description ISO timestamp when the site was last updated.
       * @default null
       */
      updatedAt: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of STOREGANISE's STOREGANISE_GET_ADMIN_USERS_BY_ID tool input.
 */
type STOREGANISE_GET_ADMIN_USERS_BY_ID_INPUT = {
  /**
   * Include
   * @description Optional related entities to include in the response. Allowed values: units, items, billing, customFields.
   * @default null
   */
  include: string[] | null;
  /**
   * User Id Or Email
   * @description The unique identifier or email of the admin user.
   */
  user_id_or_email?: string;
};

/**
 * Type of STOREGANISE's STOREGANISE_GET_ADMIN_USERS_BY_ID tool output.
 */
type STOREGANISE_GET_ADMIN_USERS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the admin user was created.
       */
      createdAt: string;
      /**
       * Email
       * @description Email address of the admin user.
       */
      email: string;
      /**
       * First Name
       * @description First name of the admin user.
       * @default null
       */
      firstName: string | null;
      /**
       * Id
       * @description Unique identifier of the admin user.
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the admin user.
       * @default null
       */
      lastName: string | null;
      /**
       * Roles
       * @description Roles assigned to the admin user.
       */
      roles: string[];
      /**
       * Updated At
       * @description ISO 8601 timestamp when the admin user was last updated.
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
 * Type of STOREGANISE's STOREGANISE_GET_ADMIN_USERS_BY_IDS tool input.
 */
type STOREGANISE_GET_ADMIN_USERS_BY_IDS_INPUT = {
  /**
   * Ids
   * @description List of unique admin user IDs to retrieve.
   */
  ids?: string[];
};

/**
 * Type of STOREGANISE's STOREGANISE_GET_ADMIN_USERS_BY_IDS tool output.
 */
type STOREGANISE_GET_ADMIN_USERS_BY_IDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of admin user objects.
       */
      users: {
          /**
           * Created At
           * @description Creation timestamp of the admin user (UTC, ISO 8601).
           */
          createdAt: string;
          /**
           * Dtype
           * @description Type of the admin user.
           */
          dtype: string;
          /**
           * Email
           * @description Email address of the admin user.
           */
          email: string;
          /**
           * External
           * @description Indicates if the admin user is external.
           */
          external: boolean;
          /**
           * Id
           * @description Unique identifier of the admin user.
           */
          id: string;
          /**
           * Is Active
           * @description Indicates if the admin user is active.
           */
          isActive: boolean;
          /**
           * Username
           * @description Username of the admin user.
           */
          username: string;
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
 * Type map of all available tool input types for toolkit "STOREGANISE".
 */
export type STOREGANISE_TOOL_INPUTS = {
  GET_ADMIN_SITES_BY_ID: STOREGANISE_GET_ADMIN_SITES_BY_ID_INPUT
  GET_ADMIN_USERS_BY_ID: STOREGANISE_GET_ADMIN_USERS_BY_ID_INPUT
  GET_ADMIN_USERS_BY_IDS: STOREGANISE_GET_ADMIN_USERS_BY_IDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "STOREGANISE".
 */
export type STOREGANISE_TOOL_OUTPUTS = {
  GET_ADMIN_SITES_BY_ID: STOREGANISE_GET_ADMIN_SITES_BY_ID_OUTPUT
  GET_ADMIN_USERS_BY_ID: STOREGANISE_GET_ADMIN_USERS_BY_ID_OUTPUT
  GET_ADMIN_USERS_BY_IDS: STOREGANISE_GET_ADMIN_USERS_BY_IDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's STOREGANISE toolkit.
 */
export const STOREGANISE = {
  slug: "storeganise",
  tools: {
    /**
     * Tool to retrieve a specific site by id or code. use when you have the site identifier and need full site details, optionally including related resources like units.
     */
    GET_ADMIN_SITES_BY_ID: "STOREGANISE_GET_ADMIN_SITES_BY_ID",
    /**
     * Tool to retrieve a specific admin user by id or email. use when you need detailed information of a single admin user.
     */
    GET_ADMIN_USERS_BY_ID: "STOREGANISE_GET_ADMIN_USERS_BY_ID",
    /**
     * Tool to fetch multiple admin users by their ids. use when you need to retrieve details for a specific set of admin accounts in bulk after verifying their ids.
     */
    GET_ADMIN_USERS_BY_IDS: "STOREGANISE_GET_ADMIN_USERS_BY_IDS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "STOREGANISE".
 */
export type STOREGANISE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "STOREGANISE".
 */
export type STOREGANISE_TRIGGER_EVENTS = {}
