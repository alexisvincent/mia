// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SITESPEAKAI's SITESPEAKAI_GET_PROMPTS tool input.
 */
type SITESPEAKAI_GET_PROMPTS_INPUT = {
  /**
   * Chatbot Id
   * @description Unique identifier of the chatbot
   */
  chatbot_id?: string;
};

/**
 * Type of SITESPEAKAI's SITESPEAKAI_GET_PROMPTS tool output.
 */
type SITESPEAKAI_GET_PROMPTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Prompts
       * @description List of prompt objects available for the chatbot
       */
      prompts: {
          /**
           * Created At
           * @description Timestamp of prompt creation in ISO 8601 format
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the prompt
           */
          id: string;
          /**
           * Prompt
           * @description Prompt content/text
           */
          prompt: string;
          /**
           * Updated At
           * @description Timestamp of last update in ISO 8601 format
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
 * Type of SITESPEAKAI's SITESPEAKAI_GET_USER tool input.
 */
type SITESPEAKAI_GET_USER_INPUT = object;

/**
 * Type of SITESPEAKAI's SITESPEAKAI_GET_USER tool output.
 */
type SITESPEAKAI_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Account creation timestamp in ISO8601 format
       */
      createdAt: string;
      /**
       * Email
       * @description User's email address
       */
      email: string;
      /**
       * Id
       * @description Unique user identifier
       */
      id: string;
      /**
       * Name
       * @description User's name
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp of last profile update in ISO8601 format
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
 * Type of SITESPEAKAI's SITESPEAKAI_LIST_CHATBOTS tool input.
 */
type SITESPEAKAI_LIST_CHATBOTS_INPUT = object;

/**
 * Type of SITESPEAKAI's SITESPEAKAI_LIST_CHATBOTS tool output.
 */
type SITESPEAKAI_LIST_CHATBOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Chatbots
       * @description List of chatbots associated with the account
       */
      chatbots: {
          /**
           * Created At
           * Format: date-time
           * @description ISO 8601 timestamp when the chatbot was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the chatbot
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the chatbot
           */
          name: string;
          /**
           * Status
           * @description Current lifecycle status of the chatbot
           * @enum {string}
           */
          status: "active" | "inactive";
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
 * Type map of all available tool input types for toolkit "SITESPEAKAI".
 */
export type SITESPEAKAI_TOOL_INPUTS = {
  GET_PROMPTS: SITESPEAKAI_GET_PROMPTS_INPUT
  GET_USER: SITESPEAKAI_GET_USER_INPUT
  LIST_CHATBOTS: SITESPEAKAI_LIST_CHATBOTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SITESPEAKAI".
 */
export type SITESPEAKAI_TOOL_OUTPUTS = {
  GET_PROMPTS: SITESPEAKAI_GET_PROMPTS_OUTPUT
  GET_USER: SITESPEAKAI_GET_USER_OUTPUT
  LIST_CHATBOTS: SITESPEAKAI_LIST_CHATBOTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SITESPEAKAI toolkit.
 */
export const SITESPEAKAI = {
  slug: "sitespeakai",
  tools: {
    /**
     * Tool to retrieve smart prompts available for a chatbot. use when you need to list prompts before selecting or managing them.
     */
    GET_PROMPTS: "SITESPEAKAI_GET_PROMPTS",
    /**
     * Tool to retrieve details of the authenticated user account. use after obtaining a valid bearer token and when you need the current user's profile.
     */
    GET_USER: "SITESPEAKAI_GET_USER",
    /**
     * Tool to list all chatbots. use when you need an overview of every chatbot linked to your account. no parameters required.
     */
    LIST_CHATBOTS: "SITESPEAKAI_LIST_CHATBOTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SITESPEAKAI".
 */
export type SITESPEAKAI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SITESPEAKAI".
 */
export type SITESPEAKAI_TRIGGER_EVENTS = {}
