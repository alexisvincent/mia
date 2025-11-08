// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LEADOKU's LEADOKU_GET_NEW_CONNECTIONS tool input.
 */
type LEADOKU_GET_NEW_CONNECTIONS_INPUT = object;

/**
 * Type of LEADOKU's LEADOKU_GET_NEW_CONNECTIONS tool output.
 */
type LEADOKU_GET_NEW_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of items found.
       * @default null
       */
      count: number | null;
      /**
       * Next
       * @description URL for the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description A list of inbox items, treated as connections.
       */
      results?: {
          /**
           * Creation Date
           * Format: date-time
           * @description Date and time when the connection was established (creation date of the inbox).
           * @default null
           */
          creation_date: string | null;
          /**
           * Id
           * @description ID of the inbox item itself.
           * @default null
           */
          id: number | null;
          /**
           * Is Connected
           * @description Indicates if the receiver is connected.
           * @default null
           */
          is_connected: boolean | null;
          /**
           * Last Message Date
           * Format: date-time
           * @description Date and time of the last message in the inbox.
           * @default null
           */
          last_message_date: string | null;
          /**
           * Receiver
           * @description Details of the connected person.
           * @default null
           */
          receiver: {
              /**
               * First Name
               * @description First name of the receiver.
               * @default null
               */
              first_name: string | null;
              /**
               * Id
               * @description ID of the receiver.
               * @default null
               */
              id: number | null;
              /**
               * Last Name
               * @description Last name of the receiver.
               * @default null
               */
              last_name: string | null;
              /**
               * Linkedin Url
               * @description LinkedIn profile URL of the receiver.
               * @default null
               */
              linkedin_url: string | null;
              /**
               * Username
               * @description Username of the receiver (e.g., LinkedIn username).
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * Update Date
           * Format: date-time
           * @description Date and time when the inbox was last updated.
           * @default null
           */
          update_date: string | null;
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
 * Type map of all available tool input types for toolkit "LEADOKU".
 */
export type LEADOKU_TOOL_INPUTS = {
  GET_NEW_CONNECTIONS: LEADOKU_GET_NEW_CONNECTIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LEADOKU".
 */
export type LEADOKU_TOOL_OUTPUTS = {
  GET_NEW_CONNECTIONS: LEADOKU_GET_NEW_CONNECTIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LEADOKU toolkit.
 */
export const LEADOKU = {
  slug: "leadoku",
  tools: {
    /**
     * Retrieves a list of new connections from growth-x (formerly leadoku). the 'tsfield' for this action is 'connection date' (mapped from 'creation date' in the api response).
     */
    GET_NEW_CONNECTIONS: "LEADOKU_GET_NEW_CONNECTIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LEADOKU".
 */
export type LEADOKU_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LEADOKU".
 */
export type LEADOKU_TRIGGER_EVENTS = {}
