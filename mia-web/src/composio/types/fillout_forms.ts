// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FILLOUT_FORMS's FILLOUT_FORMS_AUTHORIZE_O_AUTH tool input.
 */
type FILLOUT_FORMS_AUTHORIZE_O_AUTH_INPUT = {
  /**
   * Client Id
   * @description The client ID of your OAuth application in Fillout, found in Developer settings.
   */
  client_id?: string;
  /**
   * Redirect Uri
   * Format: uri
   * @description The URL to which users will be redirected after granting or denying authorization.
   */
  redirect_uri?: unknown;
  /**
   * State
   * @description An arbitrary string to maintain state between the request and callback. It will be returned to your redirect URI.
   * @default null
   */
  state: string | null;
};

/**
 * Type of FILLOUT_FORMS's FILLOUT_FORMS_AUTHORIZE_O_AUTH tool output.
 */
type FILLOUT_FORMS_AUTHORIZE_O_AUTH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorization Url
       * @description The full URL to redirect the user's browser to start the OAuth flow.
       */
      authorization_url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FILLOUT_FORMS's FILLOUT_FORMS_GET_FORMS tool input.
 */
type FILLOUT_FORMS_GET_FORMS_INPUT = object;

/**
 * Type of FILLOUT_FORMS's FILLOUT_FORMS_GET_FORMS tool output.
 */
type FILLOUT_FORMS_GET_FORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Form Id
       * @description Unique identifier for the form.
       */
      formId: string;
      /**
       * Name
       * @description The name of the form.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FILLOUT_FORMS's FILLOUT_FORMS_INVALIDATE_ACCESS_TOKEN tool input.
 */
type FILLOUT_FORMS_INVALIDATE_ACCESS_TOKEN_INPUT = {
  /**
   * Token
   * @description OAuth access token to invalidate (do not include the 'Bearer' prefix).
   */
  token?: string;
};

/**
 * Type of FILLOUT_FORMS's FILLOUT_FORMS_INVALIDATE_ACCESS_TOKEN tool output.
 */
type FILLOUT_FORMS_INVALIDATE_ACCESS_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Informational message about the outcome of the invalidation request.
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the invalidate endpoint.
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
 * Type map of all available tool input types for toolkit "FILLOUT_FORMS".
 */
export type FILLOUT_FORMS_TOOL_INPUTS = {
  AUTHORIZE_O_AUTH: FILLOUT_FORMS_AUTHORIZE_O_AUTH_INPUT
  GET_FORMS: FILLOUT_FORMS_GET_FORMS_INPUT
  INVALIDATE_ACCESS_TOKEN: FILLOUT_FORMS_INVALIDATE_ACCESS_TOKEN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FILLOUT_FORMS".
 */
export type FILLOUT_FORMS_TOOL_OUTPUTS = {
  AUTHORIZE_O_AUTH: FILLOUT_FORMS_AUTHORIZE_O_AUTH_OUTPUT
  GET_FORMS: FILLOUT_FORMS_GET_FORMS_OUTPUT
  INVALIDATE_ACCESS_TOKEN: FILLOUT_FORMS_INVALIDATE_ACCESS_TOKEN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FILLOUT_FORMS toolkit.
 */
export const FILLOUT_FORMS = {
  slug: "fillout_forms",
  tools: {
    /**
     * Tool to initiate the oauth authorization process for third-party applications. use when you need to generate the url to redirect your users to the fillout consent page.
     */
    AUTHORIZE_O_AUTH: "FILLOUT_FORMS_AUTHORIZE_O_AUTH",
    /**
     * Tool to retrieve a list of all forms in your account. use when you need to list your forms after authenticating with fillout.
     */
    GET_FORMS: "FILLOUT_FORMS_GET_FORMS",
    /**
     * Tool to revoke an existing oauth access token. use when the user logs out or you need to programmatically invalidate a token after deauthorization. example: "invalidate token abcdefg123456". this endpoint does not return a json body. successful calls return http 200 or 204.
     */
    INVALIDATE_ACCESS_TOKEN: "FILLOUT_FORMS_INVALIDATE_ACCESS_TOKEN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FILLOUT_FORMS".
 */
export type FILLOUT_FORMS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FILLOUT_FORMS".
 */
export type FILLOUT_FORMS_TRIGGER_EVENTS = {}
