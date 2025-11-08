// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PROXIEDMAIL's PROXIEDMAIL_CREATE_WEBHOOK_RECEIVER tool input.
 */
type PROXIEDMAIL_CREATE_WEBHOOK_RECEIVER_INPUT = object;

/**
 * Type of PROXIEDMAIL's PROXIEDMAIL_CREATE_WEBHOOK_RECEIVER tool output.
 */
type PROXIEDMAIL_CREATE_WEBHOOK_RECEIVER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Call Url
       * @description URL to POST incoming webhook payloads
       */
      call_url: string;
      /**
       * Get Url
       * @description URL to GET stored webhook payloads
       */
      get_url: string;
      /**
       * Id
       * @description Identifier of the created webhook receiver
       */
      id: string;
      /**
       * Status
       * @description API call status, always 'ok'
       */
      status: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PROXIEDMAIL's PROXIEDMAIL_GET_API_TOKEN tool input.
 */
type PROXIEDMAIL_GET_API_TOKEN_INPUT = {
  /**
   * Bearer Token
   * @description Bearer token obtained from POST /api/v1/auth. Omit leading 'Bearer ' prefix if present.
   */
  bearer_token?: string;
};

/**
 * Type of PROXIEDMAIL's PROXIEDMAIL_GET_API_TOKEN tool output.
 */
type PROXIEDMAIL_GET_API_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Token
       * @description Permanent API token to use in the `Token` header for subsequent requests.
       */
      token: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PROXIEDMAIL's PROXIEDMAIL_LIST_PROXY_BINDINGS tool input.
 */
type PROXIEDMAIL_LIST_PROXY_BINDINGS_INPUT = object;

/**
 * Type of PROXIEDMAIL's PROXIEDMAIL_LIST_PROXY_BINDINGS tool output.
 */
type PROXIEDMAIL_LIST_PROXY_BINDINGS_OUTPUT = {
  /**
   * Data
   * @description List of proxy binding records
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the proxy binding
       */
      attributes: {
          /**
           * Callback Url
           * @description Callback URL for notifications associated with this proxy binding
           */
          callback_url: string;
          /**
           * Created At
           * @description Timestamp when the proxy binding was created in ISO 8601 format
           */
          created_at: string;
          /**
           * Description
           * @description Description of this proxy binding
           */
          description: string;
          /**
           * Proxy Address
           * @description The proxy email address
           */
          proxy_address: string;
          /**
           * Real Addresses
           * @description Mapping of real email addresses to their status objects
           */
          real_addresses: {
              [key: string]: {
                  /**
                   * Is Enabled
                   * @description Whether the real address is enabled
                   */
                  is_enabled: boolean;
                  /**
                   * Is Verification Needed
                   * @description Whether verification is needed for this real address
                   */
                  is_verification_needed: boolean;
                  /**
                   * Is Verified
                   * @description Whether this real address has been verified
                   */
                  is_verified: boolean;
              };
          };
          /**
           * Received Emails
           * @description Number of emails received through this binding
           */
          received_emails: number;
          /**
           * Updated At
           * @description Timestamp when the proxy binding was last updated in ISO 8601 format
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Identifier of the proxy binding
       */
      id: string;
      /**
       * Relationships
       * @description Relationships of the proxy binding resource
       */
      relationships: {
          /**
           * User
           * @description User associated with this proxy binding
           */
          user: {
              /**
               * Data
               * @description User relationship data
               */
              data: {
                  /**
                   * Id
                   * @description Identifier of the related user
                   */
                  id: string;
                  /**
                   * Type
                   * @description Resource type of the related user
                   */
                  type: string;
              };
          };
      };
      /**
       * Type
       * @description Resource type of the proxy binding, e.g., 'proxy_bindings'
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Metadata about proxy bindings usage
   */
  meta?: {
      /**
       * Available Proxy Bindings
       * @description Number of proxy bindings still available
       */
      availableProxyBindings: number;
      /**
       * Is Verification Email Send
       * @description Whether a verification email has been sent
       */
      isVerificationEmailSend: boolean;
      /**
       * Used Proxy Bindings
       * @description Number of proxy bindings already used
       */
      usedProxyBindings: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PROXIEDMAIL's PROXIEDMAIL_UPDATE_PROXY_BINDING tool input.
 */
type PROXIEDMAIL_UPDATE_PROXY_BINDING_INPUT = {
  /**
   * Data
   * @description Top-level JSON:API data object.
   */
  data?: {
      /**
       * UpdateProxyBindingAttributes
       * @description Attributes to update.
       * @default null
       */
      attributes: {
          /**
           * Callback Url
           * @description Callback URL for webhooks.
           * @default null
           */
          callback_url: string | null;
          /**
           * Description
           * @description Free-form description.
           * @default null
           */
          description: string | null;
          /**
           * Is Browsable
           * @description Whether received emails can be listed.
           * @default null
           */
          is_browsable: boolean | null;
          /**
           * Proxy Address
           * @description New proxy email address.
           * @default null
           */
          proxy_address: string | null;
          /**
           * Real Addresses
           * @description Map of real email addresses to enable (true) or disable (false).
           * @default null
           */
          real_addresses: {
              [key: string]: boolean;
          } | null;
      } | null;
      /**
       * Id
       * @description Proxy binding ID to update.
       */
      id: string;
      /**
       * Type
       * @description Resource type, must be 'proxy_bindings'.
       * @constant
       */
      type: "proxy_bindings";
  };
};

/**
 * Type of PROXIEDMAIL's PROXIEDMAIL_UPDATE_PROXY_BINDING tool output.
 */
type PROXIEDMAIL_UPDATE_PROXY_BINDING_OUTPUT = {
  /**
   * Data
   * @description Updated proxy binding resource.
   */
  data?: {
      /**
       * Attributes
       * @description Binding attributes.
       */
      attributes: {
          /**
           * Callback Url
           * @description Callback URL.
           * @default null
           */
          callback_url: string | null;
          /**
           * Created At
           * @description Creation timestamp (ISO8601).
           */
          created_at: string;
          /**
           * Description
           * @description Description text.
           * @default null
           */
          description: string | null;
          /**
           * Proxy Address
           * @description Proxy email address.
           */
          proxy_address: string;
          /**
           * Real Addresses
           * @description Map of email to status with is_enabled and is_verified.
           */
          real_addresses: {
              [key: string]: {
                  [key: string]: boolean;
              };
          };
          /**
           * Received Emails
           * @description Count of received emails.
           */
          received_emails: number;
          /**
           * Type
           * @description Internal resource type code.
           */
          type: number;
          /**
           * Updated At
           * @description Update timestamp (ISO8601).
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Resource ID.
       */
      id: string;
      /**
       * Relationships
       * @description Related resources.
       */
      relationships: {
          /**
           * User
           * @description User relationship.
           */
          user: {
              /**
               * Data
               * @description User reference.
               */
              data: {
                  /**
                   * Id
                   * @description User ID.
                   */
                  id: string;
                  /**
                   * Type
                   * @description Related resource type.
                   * @constant
                   */
                  type: "users";
              };
          };
      };
      /**
       * Type
       * @description Resource type.
       * @constant
       */
      type: "proxy_bindings";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata.
   */
  meta?: {
      /**
       * First Proxy Binding
       * @description Whether this is the first proxy binding.
       */
      firstProxyBinding: boolean;
      /**
       * Is Verification Email Send
       * @description Whether a verification email was sent.
       */
      isVerificationEmailSend: boolean;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "PROXIEDMAIL".
 */
export type PROXIEDMAIL_TOOL_INPUTS = {
  CREATE_WEBHOOK_RECEIVER: PROXIEDMAIL_CREATE_WEBHOOK_RECEIVER_INPUT
  GET_API_TOKEN: PROXIEDMAIL_GET_API_TOKEN_INPUT
  LIST_PROXY_BINDINGS: PROXIEDMAIL_LIST_PROXY_BINDINGS_INPUT
  UPDATE_PROXY_BINDING: PROXIEDMAIL_UPDATE_PROXY_BINDING_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PROXIEDMAIL".
 */
export type PROXIEDMAIL_TOOL_OUTPUTS = {
  CREATE_WEBHOOK_RECEIVER: PROXIEDMAIL_CREATE_WEBHOOK_RECEIVER_OUTPUT
  GET_API_TOKEN: PROXIEDMAIL_GET_API_TOKEN_OUTPUT
  LIST_PROXY_BINDINGS: PROXIEDMAIL_LIST_PROXY_BINDINGS_OUTPUT
  UPDATE_PROXY_BINDING: PROXIEDMAIL_UPDATE_PROXY_BINDING_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PROXIEDMAIL toolkit.
 */
export const PROXIEDMAIL = {
  slug: "proxiedmail",
  tools: {
    /**
     * Tool to create a webhook receiver for incoming email callbacks. use when you need a unique endpoint to capture proxiedmail webhook events.
     */
    CREATE_WEBHOOK_RECEIVER: "PROXIEDMAIL_CREATE_WEBHOOK_RECEIVER",
    /**
     * Tool to retrieve a permanent api token. use after obtaining a bearer token from the auth endpoint (post /api/v1/auth).
     */
    GET_API_TOKEN: "PROXIEDMAIL_GET_API_TOKEN",
    /**
     * Tool to fetch a list of proxy bindings. use after authentication to list all proxy bindings associated with the user.
     */
    LIST_PROXY_BINDINGS: "PROXIEDMAIL_LIST_PROXY_BINDINGS",
    /**
     * Tool to update an existing proxy binding. use after obtaining the binding id to modify its addresses or settings.
     */
    UPDATE_PROXY_BINDING: "PROXIEDMAIL_UPDATE_PROXY_BINDING",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PROXIEDMAIL".
 */
export type PROXIEDMAIL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PROXIEDMAIL".
 */
export type PROXIEDMAIL_TRIGGER_EVENTS = {}
