// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CHATFAI's CHATFAI_CHATFAI_GET_PUBLIC_CHARACTER_BY_ID tool input.
 */
type CHATFAI_CHATFAI_GET_PUBLIC_CHARACTER_BY_ID_INPUT = {
  /**
   * Id
   * @description Unique identifier of the public character to retrieve
   */
  id?: string;
};

/**
 * Type of CHATFAI's CHATFAI_CHATFAI_GET_PUBLIC_CHARACTER_BY_ID tool output.
 */
type CHATFAI_CHATFAI_GET_PUBLIC_CHARACTER_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL of the character's avatar image
       */
      avatar_url: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the character was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the public character
       */
      description: string;
      /**
       * Id
       * @description Unique identifier of the character
       */
      id: string;
      /**
       * Name
       * @description Name of the public character
       */
      name: string;
      /**
       * Tags
       * @description List of tags associated with the character
       */
      tags: string[];
      /**
       * Updated At
       * @description ISO 8601 timestamp when the character was last updated
       */
      updated_at: string;
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
 * Type map of all available tool input types for toolkit "CHATFAI".
 */
export type CHATFAI_TOOL_INPUTS = {
  CHATFAI_GET_PUBLIC_CHARACTER_BY_ID: CHATFAI_CHATFAI_GET_PUBLIC_CHARACTER_BY_ID_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CHATFAI".
 */
export type CHATFAI_TOOL_OUTPUTS = {
  CHATFAI_GET_PUBLIC_CHARACTER_BY_ID: CHATFAI_CHATFAI_GET_PUBLIC_CHARACTER_BY_ID_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CHATFAI toolkit.
 */
export const CHATFAI = {
  slug: "chatfai",
  tools: {
    /**
     * Tool to retrieve a public character by its id. use when you need to fetch details of a single public character by providing its unique id.
     */
    CHATFAI_GET_PUBLIC_CHARACTER_BY_ID: "CHATFAI_CHATFAI_GET_PUBLIC_CHARACTER_BY_ID",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CHATFAI".
 */
export type CHATFAI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CHATFAI".
 */
export type CHATFAI_TRIGGER_EVENTS = {}
