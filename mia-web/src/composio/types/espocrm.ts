// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ESPOCRM's ESPOCRM_GET_APP_USER tool input.
 */
type ESPOCRM_GET_APP_USER_INPUT = object;

/**
 * Type of ESPOCRM's ESPOCRM_GET_APP_USER tool output.
 */
type ESPOCRM_GET_APP_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email Address
       * @description User's primary email address
       */
      emailAddress: string;
      /**
       * Id
       * @description User's unique identifier
       */
      id: string;
      /**
       * Is Active
       * @description Whether the user is active
       */
      isActive: boolean;
      /**
       * Name
       * @description User's full name
       */
      name: string;
      /**
       * User Name
       * @description User login name
       */
      userName: string;
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
 * Type of ESPOCRM's ESPOCRM_GET_METADATA tool input.
 */
type ESPOCRM_GET_METADATA_INPUT = object;

/**
 * Type of ESPOCRM's ESPOCRM_GET_METADATA tool output.
 */
type ESPOCRM_GET_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Acl
       * @description Access control list permissions for the user.
       */
      acl: {
          [key: string]: unknown;
      };
      /**
       * Acl Portal
       * @description Portal access control definitions.
       */
      aclPortal: {
          [key: string]: unknown;
      };
      /**
       * Config
       * @description System configuration settings.
       */
      config: {
          [key: string]: unknown;
      };
      /**
       * Entity Defs
       * @description Entity schema definitions.
       */
      entityDefs: {
          [key: string]: unknown;
      };
      /**
       * Field Defs
       * @description Field schema definitions.
       */
      fieldDefs: {
          [key: string]: unknown;
      };
      /**
       * Info
       * @description General API and system information.
       */
      info: {
          /**
           * Build
           * @description API build identifier
           */
          build: string;
          /**
           * Name
           * @description API name
           */
          name: string;
          /**
           * Url
           * @description Base API URL
           */
          url: string;
          /**
           * Version
           * @description API version
           */
          version: string;
      } & {
          [key: string]: unknown;
      };
      /**
       * Layout Defs
       * @description Layout definitions.
       */
      layoutDefs: {
          [key: string]: unknown;
      };
      /**
       * Preferences
       * @description User preferences and settings.
       */
      preferences: {
          [key: string]: unknown;
      };
      /**
       * Scopes
       * @description Entity type metadata definitions.
       */
      scopes: {
          [key: string]: unknown;
      };
      /**
       * Settings
       * @description System settings (various configurations).
       */
      settings: {
          [key: string]: unknown;
      };
      /**
       * Translations
       * @description Translated strings for the current user locale.
       */
      translations: {
          [key: string]: string;
      };
      /**
       * User
       * @description Information about the authenticated user.
       */
      user: {
          /**
           * Email Address
           * @description User's primary email address
           */
          emailAddress: string;
          /**
           * Id
           * @description User's unique identifier
           */
          id: string;
          /**
           * Is Active
           * @description Whether the user is active
           */
          isActive: boolean;
          /**
           * Name
           * @description User's full name
           */
          name: string;
          /**
           * User Name
           * @description User login name
           */
          userName: string;
      } & {
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
 * Type map of all available tool input types for toolkit "ESPOCRM".
 */
export type ESPOCRM_TOOL_INPUTS = {
  GET_APP_USER: ESPOCRM_GET_APP_USER_INPUT
  GET_METADATA: ESPOCRM_GET_METADATA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ESPOCRM".
 */
export type ESPOCRM_TOOL_OUTPUTS = {
  GET_APP_USER: ESPOCRM_GET_APP_USER_OUTPUT
  GET_METADATA: ESPOCRM_GET_METADATA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ESPOCRM toolkit.
 */
export const ESPOCRM = {
  slug: "espocrm",
  tools: {
    /**
     * Tool to retrieve current user data including token, acl, and preferences. use after successful authentication to fetch session-specific profile.
     */
    GET_APP_USER: "ESPOCRM_GET_APP_USER",
    /**
     * Tool to retrieve metadata information from espocrm. use when you need to discover system configuration, user details, acl, and translations right after authentication.
     */
    GET_METADATA: "ESPOCRM_GET_METADATA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ESPOCRM".
 */
export type ESPOCRM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ESPOCRM".
 */
export type ESPOCRM_TRIGGER_EVENTS = {}
