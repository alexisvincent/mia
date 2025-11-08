// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TYPLESS's TYPLESS_GET_DOCUMENT_TYPES tool input.
 */
type TYPLESS_GET_DOCUMENT_TYPES_INPUT = object;

/**
 * Type of TYPLESS's TYPLESS_GET_DOCUMENT_TYPES tool output.
 */
type TYPLESS_GET_DOCUMENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Types
       * @description List of document types available in the account.
       */
      document_types: {
          /**
           * Created At
           * @description Timestamp of when the document type was created in ISO8601 format.
           */
          created_at: string;
          /**
           * Fields
           * @description List of fields defined in the document type.
           */
          fields: {
              /**
               * Name
               * @description Name of the field.
               */
              name: string;
              /**
               * Type
               * @description Data type of the field (e.g., STRING, DATE, NUMBER).
               */
              type: string;
          }[];
          /**
           * Id
           * @description Unique identifier for the document type.
           */
          id: string;
          /**
           * Name
           * @description Name of the document type.
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp of the last update to the document type in ISO8601 format.
           */
          updated_at: string;
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
 * Type of TYPLESS's TYPLESS_GET_PROFILE tool input.
 */
type TYPLESS_GET_PROFILE_INPUT = object;

/**
 * Type of TYPLESS's TYPLESS_GET_PROFILE tool output.
 */
type TYPLESS_GET_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Company associated with the user.
       */
      company: string;
      /**
       * Created At
       * @description Date and time the user was created.
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the user.
       */
      email: string;
      /**
       * Full Name
       * @description Full name of the user.
       */
      full_name: string;
      /**
       * Id
       * @description Unique identifier of the user.
       */
      id: string;
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
 * Type of TYPLESS's TYPLESS_UPDATE_PROFILE tool input.
 */
type TYPLESS_UPDATE_PROFILE_INPUT = {
  /**
   * Full Name
   * @description User's full name.
   * @default null
   */
  full_name: string | null;
  /**
   * Newsletter Subscription
   * @description Whether the user is subscribed to the newsletter.
   * @default null
   */
  newsletter_subscription: boolean | null;
};

/**
 * Type of TYPLESS's TYPLESS_UPDATE_PROFILE tool output.
 */
type TYPLESS_UPDATE_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Full Name
       * @description Full name of the user.
       */
      full_name: string;
      /**
       * Id
       * @description Unique identifier of the user.
       */
      id: string;
      /**
       * Newsletter Subscription
       * @description Whether the user is subscribed to the newsletter.
       */
      newsletter_subscription: boolean;
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
 * Type map of all available tool input types for toolkit "TYPLESS".
 */
export type TYPLESS_TOOL_INPUTS = {
  GET_DOCUMENT_TYPES: TYPLESS_GET_DOCUMENT_TYPES_INPUT
  GET_PROFILE: TYPLESS_GET_PROFILE_INPUT
  UPDATE_PROFILE: TYPLESS_UPDATE_PROFILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TYPLESS".
 */
export type TYPLESS_TOOL_OUTPUTS = {
  GET_DOCUMENT_TYPES: TYPLESS_GET_DOCUMENT_TYPES_OUTPUT
  GET_PROFILE: TYPLESS_GET_PROFILE_OUTPUT
  UPDATE_PROFILE: TYPLESS_UPDATE_PROFILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TYPLESS toolkit.
 */
export const TYPLESS = {
  slug: "typless",
  tools: {
    /**
     * Tool to retrieve a list of all document types available in the account. use when you need to view or select schemas for document processing.
     */
    GET_DOCUMENT_TYPES: "TYPLESS_GET_DOCUMENT_TYPES",
    /**
     * Tool to retrieve the authenticated user profile. use after authentication to confirm account details.
     */
    GET_PROFILE: "TYPLESS_GET_PROFILE",
    /**
     * Tool to update the authenticated user's profile. use when user wants to change first name, last name, or email. example prompt: "update my email to alice@example.com"
     */
    UPDATE_PROFILE: "TYPLESS_UPDATE_PROFILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TYPLESS".
 */
export type TYPLESS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TYPLESS".
 */
export type TYPLESS_TRIGGER_EVENTS = {}
