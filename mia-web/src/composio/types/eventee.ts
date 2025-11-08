// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EVENTEE's EVENTEE_ADD_SPEAKER tool input.
 */
type EVENTEE_ADD_SPEAKER_INPUT = {
  /**
   * Biography
   * @description Biography of the speaker
   * @default null
   */
  biography: string | null;
  /**
   * Company
   * @description Company the speaker represents
   * @default null
   */
  company: string | null;
  /**
   * Email
   * Format: email
   * @description Email address of the speaker
   */
  email?: unknown;
  /**
   * Event Id
   * @description Unique identifier of the Eventee event
   */
  event_id?: string;
  /**
   * Lecture Description
   * @description Description of the lecture
   * @default null
   */
  lecture_description: string | null;
  /**
   * Lecture Title
   * @description Title of the speaker's lecture
   * @default null
   */
  lecture_title: string | null;
  /**
   * Name
   * @description Full name of the speaker
   */
  name?: string;
  /**
   * Picture
   * Format: uri
   * @description URL to the speaker's picture
   */
  picture?: unknown;
  /**
   * Position
   * @description Position of the speaker at their company
   * @default null
   */
  position: string | null;
  /**
   * Social
   * @description Social media links for the speaker as key-value pairs
   * @default null
   */
  social: {
      [key: string]: string;
  } | null;
};

/**
 * Type of EVENTEE's EVENTEE_ADD_SPEAKER tool output.
 */
type EVENTEE_ADD_SPEAKER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Biography
       * @description Biography of the speaker
       * @default null
       */
      biography: string | null;
      /**
       * Company
       * @description Company the speaker represents
       * @default null
       */
      company: string | null;
      /**
       * Created
       * @description Creation timestamp (ISO 8601 format)
       */
      created: string;
      /**
       * Email
       * Format: email
       * @description Email address of the speaker
       */
      email?: unknown;
      /**
       * Event Id
       * @description Associated Event ID
       */
      event_id: string;
      /**
       * Id
       * @description ID of the added speaker
       */
      id: string;
      /**
       * Lecture Description
       * @description Description of the lecture
       * @default null
       */
      lecture_description: string | null;
      /**
       * Lecture Title
       * @description Title of the speaker's lecture
       * @default null
       */
      lecture_title: string | null;
      /**
       * Name
       * @description Full name of the speaker
       */
      name: string;
      /**
       * Picture
       * Format: uri
       * @description URL to the speaker's picture
       */
      picture?: unknown;
      /**
       * Position
       * @description Position of the speaker at their company
       * @default null
       */
      position: string | null;
      /**
       * Social
       * @description Social media links for the speaker
       * @default null
       */
      social: {
          [key: string]: string;
      } | null;
      /**
       * Updated
       * @description Last update timestamp (ISO 8601 format)
       */
      updated: string;
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
 * Type of EVENTEE's EVENTEE_DELETE_SPEAKER tool input.
 */
type EVENTEE_DELETE_SPEAKER_INPUT = {
  /**
   * Speaker Id
   * @description Unique identifier of the speaker to delete
   */
  speaker_id?: string;
};

/**
 * Type of EVENTEE's EVENTEE_DELETE_SPEAKER tool output.
 */
type EVENTEE_DELETE_SPEAKER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the speaker was successfully deleted
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
 * Type of EVENTEE's EVENTEE_LIST_EVENTS tool input.
 */
type EVENTEE_LIST_EVENTS_INPUT = object;

/**
 * Type of EVENTEE's EVENTEE_LIST_EVENTS tool output.
 */
type EVENTEE_LIST_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of events
       */
      events: {
          /**
           * Cover
           * @description URL of the event’s cover image
           * @default null
           */
          cover: string | null;
          /**
           * Description
           * @description Event description
           * @default null
           */
          description: string | null;
          /**
           * End Date
           * @description Event end date in ISO 8601 format
           */
          endDate: string;
          /**
           * Id
           * @description Unique identifier of the event
           */
          id: string;
          /**
           * Location
           * @description Location of the event
           * @default null
           */
          location: string | null;
          /**
           * Logo
           * @description URL of the event’s logo image
           * @default null
           */
          logo: string | null;
          /**
           * Name
           * @description Name of the event
           */
          name: string;
          /**
           * Start Date
           * @description Event start date in ISO 8601 format
           */
          startDate: string;
          /**
           * Url
           * @description Public URL for the event
           */
          url: string;
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
 * Type map of all available tool input types for toolkit "EVENTEE".
 */
export type EVENTEE_TOOL_INPUTS = {
  ADD_SPEAKER: EVENTEE_ADD_SPEAKER_INPUT
  DELETE_SPEAKER: EVENTEE_DELETE_SPEAKER_INPUT
  LIST_EVENTS: EVENTEE_LIST_EVENTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EVENTEE".
 */
export type EVENTEE_TOOL_OUTPUTS = {
  ADD_SPEAKER: EVENTEE_ADD_SPEAKER_OUTPUT
  DELETE_SPEAKER: EVENTEE_DELETE_SPEAKER_OUTPUT
  LIST_EVENTS: EVENTEE_LIST_EVENTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EVENTEE toolkit.
 */
export const EVENTEE = {
  slug: "eventee",
  tools: {
    /**
     * Tool to add a new speaker to a specific eventee event. use after creating an event and obtaining its id.
     */
    ADD_SPEAKER: "EVENTEE_ADD_SPEAKER",
    /**
     * Tool to delete a speaker by their id. use when you need to remove a speaker after confirming their id.
     */
    DELETE_SPEAKER: "EVENTEE_DELETE_SPEAKER",
    /**
     * Tool to retrieve a list of all events. use when you need an overview of all events.
     */
    LIST_EVENTS: "EVENTEE_LIST_EVENTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EVENTEE".
 */
export type EVENTEE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EVENTEE".
 */
export type EVENTEE_TRIGGER_EVENTS = {}
