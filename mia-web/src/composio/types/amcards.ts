// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AMCARDS's AMCARDS_GET_CARDS tool input.
 */
type AMCARDS_GET_CARDS_INPUT = object;

/**
 * Type of AMCARDS's AMCARDS_GET_CARDS tool output.
 */
type AMCARDS_GET_CARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cards
       * @description List of card objects
       */
      cards: {
          /**
           * Created At
           * @description Timestamp when the card was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the card
           */
          id: string;
          /**
           * Message
           * @description Message content of the card
           * @default null
           */
          message: string | null;
          /**
           * Recipient Address
           * @description Address of the card recipient
           * @default null
           */
          recipient_address: string | null;
          /**
           * Recipient Name
           * @description Name of the card recipient
           * @default null
           */
          recipient_name: string | null;
          /**
           * Status
           * @description Current status of the card
           */
          status: string;
          /**
           * Template Id
           * @description ID of the template used for the card
           */
          template_id: string;
          /**
           * Updated At
           * @description Timestamp when the card was last updated
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
 * Type of AMCARDS's AMCARDS_GET_CONTACTS tool input.
 */
type AMCARDS_GET_CONTACTS_INPUT = {
  /**
   * Email
   * @description Filter contacts by email address
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description Filter contacts by first name
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Filter contacts by last name
   * @default null
   */
  last_name: string | null;
  /**
   * Limit
   * @description The maximum number of contacts to retrieve
   * @default 25
   */
  limit: number | null;
  /**
   * Skip
   * @description The number of contacts to skip before starting to collect the result set
   * @default 0
   */
  skip: number | null;
};

/**
 * Type of AMCARDS's AMCARDS_GET_CONTACTS tool output.
 */
type AMCARDS_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description List of contact objects
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the contact was created
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the contact
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the contact
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the contact
       */
      id: string;
      /**
       * Last Name
       * @description Last name of the contact
       * @default null
       */
      last_name: string | null;
      /**
       * Updated At
       * @description Timestamp when the contact was last updated
       */
      updated_at: string;
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
 * Type map of all available tool input types for toolkit "AMCARDS".
 */
export type AMCARDS_TOOL_INPUTS = {
  GET_CARDS: AMCARDS_GET_CARDS_INPUT
  GET_CONTACTS: AMCARDS_GET_CONTACTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AMCARDS".
 */
export type AMCARDS_TOOL_OUTPUTS = {
  GET_CARDS: AMCARDS_GET_CARDS_OUTPUT
  GET_CONTACTS: AMCARDS_GET_CONTACTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AMCARDS toolkit.
 */
export const AMCARDS = {
  slug: "amcards",
  tools: {
    /**
     * This tool retrieves a list of all cards associated with the authenticated account. the action is completely independent and doesn't require any external resource ids or parameters beyond authentication. it allows users to monitor, track, and manage their cards.
     */
    GET_CARDS: "AMCARDS_GET_CARDS",
    /**
     * This tool retrieves a list of contacts from amcards. it is used for managing contacts by providing details like limit, skip, and filters (e.g., last name, first name, email). the tool returns an array of contact objects containing fields such as id, first name, last name, email, created at, and updated at.
     */
    GET_CONTACTS: "AMCARDS_GET_CONTACTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AMCARDS".
 */
export type AMCARDS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AMCARDS".
 */
export type AMCARDS_TRIGGER_EVENTS = {}
