// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WATI's WATI_ADD_CONTACT tool input.
 */
type WATI_ADD_CONTACT_INPUT = {
  /**
   * Custom Params
   * @description List of custom key/value attributes for the contact.
   * @default null
   */
  customParams: {
      /**
       * Name
       * @description Custom attribute name, e.g., 'company_id'
       */
      name: string;
      /**
       * Value
       * @description Custom attribute value, e.g., '12345'
       */
      value: string;
  }[] | null;
  /**
   * Name
   * @description Display name of the contact, e.g., 'Alice Johnson'.
   * @default null
   */
  name: string | null;
  /**
   * Whatsapp Number
   * @description WhatsApp number including country code, digits only (no '+' or spaces), length 6-15.
   */
  whatsappNumber?: unknown;
};

/**
 * Type of WATI's WATI_ADD_CONTACT tool output.
 */
type WATI_ADD_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Info
       * @description Additional info or error message from the API.
       * @default null
       */
      info: string | null;
      /**
       * Result
       * @description Indicates whether the contact was added successfully.
       */
      result: boolean;
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
 * Type of WATI's WATI_GET_TEAMS tool input.
 */
type WATI_GET_TEAMS_INPUT = object;

/**
 * Type of WATI's WATI_GET_TEAMS tool output.
 */
type WATI_GET_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Teams
       * @description List of teams available in the WATI account.
       */
      teams: {
          /**
           * Name
           * @description Name of the team.
           */
          name: string;
          /**
           * Team Id
           * @description Unique identifier of the team.
           */
          teamId: string;
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
 * Type of WATI's WATI_SEND_SESSION_MESSAGE tool input.
 */
type WATI_SEND_SESSION_MESSAGE_INPUT = {
  /**
   * Message Text
   * @description The text of the message to be sent in the active session.
   */
  messageText?: string;
  /**
   * Whatsapp Number
   * @description Recipient's WhatsApp number in international format (with country code).
   */
  whatsappNumber?: string;
};

/**
 * Type of WATI's WATI_SEND_SESSION_MESSAGE tool output.
 */
type WATI_SEND_SESSION_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information about the request's outcome.
       */
      message: string;
      /**
       * Success
       * @description Indicates whether the message was sent successfully.
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
 * Type of WATI's WATI_UPDATE_CONTACT_ATTRIBUTES tool input.
 */
type WATI_UPDATE_CONTACT_ATTRIBUTES_INPUT = {
  /**
   * Custom Params
   * @description Optional list of custom attributes to update for the contact. Each item should include a name and value.
   * @default null
   */
  customParams: {
      /**
       * Name
       * @description Name of the attribute to update.
       */
      name: string;
      /**
       * Value
       * @description Value to assign to the attribute.
       */
      value: string;
  }[] | null;
  /**
   * Whatsapp Number
   * @description Target contact's WhatsApp number in international format with '+' and country code.
   */
  whatsappNumber?: string;
};

/**
 * Type of WATI's WATI_UPDATE_CONTACT_ATTRIBUTES tool output.
 */
type WATI_UPDATE_CONTACT_ATTRIBUTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Info
       * @description Additional information about the update operation.
       * @default null
       */
      info: string | null;
      /**
       * Result
       * @description Indicates whether the update operation was successful.
       */
      result: boolean;
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
 * Type of WATI's WATI_WATI_UPDATE_CHAT_STATUS tool input.
 */
type WATI_WATI_UPDATE_CHAT_STATUS_INPUT = object;

/**
 * Type of WATI's WATI_WATI_UPDATE_CHAT_STATUS tool output.
 */
type WATI_WATI_UPDATE_CHAT_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type map of all available tool input types for toolkit "WATI".
 */
export type WATI_TOOL_INPUTS = {
  ADD_CONTACT: WATI_ADD_CONTACT_INPUT
  GET_TEAMS: WATI_GET_TEAMS_INPUT
  SEND_SESSION_MESSAGE: WATI_SEND_SESSION_MESSAGE_INPUT
  UPDATE_CONTACT_ATTRIBUTES: WATI_UPDATE_CONTACT_ATTRIBUTES_INPUT
  WATI_UPDATE_CHAT_STATUS: WATI_WATI_UPDATE_CHAT_STATUS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WATI".
 */
export type WATI_TOOL_OUTPUTS = {
  ADD_CONTACT: WATI_ADD_CONTACT_OUTPUT
  GET_TEAMS: WATI_GET_TEAMS_OUTPUT
  SEND_SESSION_MESSAGE: WATI_SEND_SESSION_MESSAGE_OUTPUT
  UPDATE_CONTACT_ATTRIBUTES: WATI_UPDATE_CONTACT_ATTRIBUTES_OUTPUT
  WATI_UPDATE_CHAT_STATUS: WATI_WATI_UPDATE_CHAT_STATUS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WATI toolkit.
 */
export const WATI = {
  slug: "wati",
  tools: {
    /**
     * Tool to add a new contact in wati. use when registering a customer's whatsapp number before sending messages.
     */
    ADD_CONTACT: "WATI_ADD_CONTACT",
    /**
     * Tool to retrieve a list of teams from wati. use after authenticating when you need to enumerate all available teams.
     */
    GET_TEAMS: "WATI_GET_TEAMS",
    /**
     * Tool to send a session message to a specified whatsapp number. use when you need to deliver a free-form text within an active 24-hour session window.
     */
    SEND_SESSION_MESSAGE: "WATI_SEND_SESSION_MESSAGE",
    /**
     * Tool to update attributes of an existing contact. use after confirming the contact exists and you need to modify its custom attributes.
     */
    UPDATE_CONTACT_ATTRIBUTES: "WATI_UPDATE_CONTACT_ATTRIBUTES",
    /**
     * Deprecated action placeholder for updating chat status.
     */
    WATI_UPDATE_CHAT_STATUS: "WATI_WATI_UPDATE_CHAT_STATUS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WATI".
 */
export type WATI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WATI".
 */
export type WATI_TRIGGER_EVENTS = {}
