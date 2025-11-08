// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SATISMETER's SATISMETER_EMBED_SURVEY tool input.
 */
type SATISMETER_EMBED_SURVEY_INPUT = {
  /**
   * Settings
   * @description Survey display settings including language and custom text
   * @default null
   */
  settings: {
      [key: string]: string | {
          [key: string]: unknown;
      };
  } | null;
  /**
   * Traits
   * @description Additional user profile information
   * @default null
   */
  traits: {
      [key: string]: string | number | boolean;
  } | null;
  /**
   * User Id
   * @description Unique identifier for the user to target with the survey
   * @default null
   */
  userId: string | null;
  /**
   * Write Key
   * @description Project Write Key from SatisMeter
   */
  writeKey?: string;
};

/**
 * Type of SATISMETER's SATISMETER_EMBED_SURVEY tool output.
 */
type SATISMETER_EMBED_SURVEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Embed Code
       * @description HTML <script> block to embed the Satismeter survey
       */
      embed_code: string;
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
 * Type of SATISMETER's SATISMETER_GET_UNSUBSCRIBED_EMAILS tool input.
 */
type SATISMETER_GET_UNSUBSCRIBED_EMAILS_INPUT = {
  /**
   * Limit
   * @description Maximum number of results to return (default: API default, typically 100).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip for pagination (default: 0).
   * @default null
   */
  offset: number | null;
  /**
   * Project Id
   * @description Unique ID of the project to retrieve unsubscribed emails for.
   */
  project_id?: string;
};

/**
 * Type of SATISMETER's SATISMETER_GET_UNSUBSCRIBED_EMAILS tool output.
 */
type SATISMETER_GET_UNSUBSCRIBED_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total
       * @description Total number of unsubscribed emails.
       */
      total: number;
      /**
       * Unsubscribes
       * @description List of unsubscribe entries for the project.
       */
      unsubscribes: {
          /**
           * Email
           * @description The unsubscribed email address.
           */
          email: string;
          /**
           * Reason
           * @description Reason provided for unsubscribe, if any.
           * @default null
           */
          reason: string | null;
          /**
           * Unsubscribed At
           * @description ISO 8601 timestamp when the unsubscribe occurred.
           */
          unsubscribedAt: string;
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
 * Type of SATISMETER's SATISMETER_LIST_SURVEYS tool input.
 */
type SATISMETER_LIST_SURVEYS_INPUT = {
  /**
   * Project
   * @description ID of the SatisMeter project to list surveys for
   */
  project?: string;
};

/**
 * Type of SATISMETER's SATISMETER_LIST_SURVEYS tool output.
 */
type SATISMETER_LIST_SURVEYS_OUTPUT = {
  /**
   * Data
   * @description List of surveys (campaigns)
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the survey was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the survey (campaign)
       */
      id: string;
      /**
       * Name
       * @description Name of the survey (campaign)
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the survey was last updated
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
 * Type of SATISMETER's SATISMETER_LIST_USERS tool input.
 */
type SATISMETER_LIST_USERS_INPUT = {
  /**
   * Page Number
   * @description Page number to retrieve. Defaults to Satismeter API default (1)
   * @default null
   */
  page_number: number | null;
  /**
   * Page Size
   * @description Number of users per page (max 100). Defaults to Satismeter API default (20)
   * @default null
   */
  page_size: number | null;
  /**
   * Project
   * @description ID of the project to list users for
   */
  project?: string;
};

/**
 * Type of SATISMETER's SATISMETER_LIST_USERS tool output.
 */
type SATISMETER_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description List of users
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Created At
           * @description ISO timestamp when the user was created
           */
          createdAt: string;
          /**
           * Email
           * @description Email address of the user
           */
          email: string;
          /**
           * Name
           * @description Full name of the user
           */
          name: string;
          /**
           * Traits
           * @description Custom traits attached to the user
           */
          traits?: {
              [key: string]: unknown;
          };
          /**
           * Updated At
           * @description ISO timestamp when the user was last updated
           */
          updatedAt: string;
      };
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /** Page */
      page: {
          /**
           * Number
           * @description Current page number returned by the API
           */
          number: number;
          /**
           * Size
           * @description Current page size returned by the API
           */
          size: number;
      };
      /**
       * Total
       * @description Total number of users across all pages
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SATISMETER's SATISMETER_UPDATE_UNSUBSCRIBED_EMAILS tool input.
 */
type SATISMETER_UPDATE_UNSUBSCRIBED_EMAILS_INPUT = {
  /**
   * Emails
   * @description List of email addresses to unsubscribe.
   */
  emails?: string[];
  /**
   * Project Id
   * @description ID of the Satismeter project.
   */
  project_id?: string;
};

/**
 * Type of SATISMETER's SATISMETER_UPDATE_UNSUBSCRIBED_EMAILS tool output.
 */
type SATISMETER_UPDATE_UNSUBSCRIBED_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Map of emails that couldn't be unsubscribed to error reasons.
       * @default null
       */
      errors: {
          [key: string]: string;
      } | null;
      /**
       * Success
       * @description True if unsubscription was successful.
       */
      success: boolean;
      /**
       * Unsubscribed
       * @description List of emails successfully unsubscribed.
       */
      unsubscribed: string[];
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
 * Type map of all available tool input types for toolkit "SATISMETER".
 */
export type SATISMETER_TOOL_INPUTS = {
  EMBED_SURVEY: SATISMETER_EMBED_SURVEY_INPUT
  GET_UNSUBSCRIBED_EMAILS: SATISMETER_GET_UNSUBSCRIBED_EMAILS_INPUT
  LIST_SURVEYS: SATISMETER_LIST_SURVEYS_INPUT
  LIST_USERS: SATISMETER_LIST_USERS_INPUT
  UPDATE_UNSUBSCRIBED_EMAILS: SATISMETER_UPDATE_UNSUBSCRIBED_EMAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SATISMETER".
 */
export type SATISMETER_TOOL_OUTPUTS = {
  EMBED_SURVEY: SATISMETER_EMBED_SURVEY_OUTPUT
  GET_UNSUBSCRIBED_EMAILS: SATISMETER_GET_UNSUBSCRIBED_EMAILS_OUTPUT
  LIST_SURVEYS: SATISMETER_LIST_SURVEYS_OUTPUT
  LIST_USERS: SATISMETER_LIST_USERS_OUTPUT
  UPDATE_UNSUBSCRIBED_EMAILS: SATISMETER_UPDATE_UNSUBSCRIBED_EMAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SATISMETER toolkit.
 */
export const SATISMETER = {
  slug: "satismeter",
  tools: {
    /**
     * Tool to generate a javascript snippet to embed a satismeter survey. use after configuring your project and obtaining your write key.
     */
    EMBED_SURVEY: "SATISMETER_EMBED_SURVEY",
    /**
     * Tool to retrieve list of unsubscribed emails for a project. use when you need to fetch emails that have opted out of surveys.
     */
    GET_UNSUBSCRIBED_EMAILS: "SATISMETER_GET_UNSUBSCRIBED_EMAILS",
    /**
     * Tool to list surveys (campaigns) in a project. use when you have a valid project id and need to retrieve its surveys.
     */
    LIST_SURVEYS: "SATISMETER_LIST_SURVEYS",
    /**
     * Tool to list users in a project. use when you have a valid project id and need to retrieve its users, optionally paginating through results.
     */
    LIST_USERS: "SATISMETER_LIST_USERS",
    /**
     * Tool to update the list of unsubscribed emails for a project. use when you need to bulk unsubscribe user emails from surveys.
     */
    UPDATE_UNSUBSCRIBED_EMAILS: "SATISMETER_UPDATE_UNSUBSCRIBED_EMAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SATISMETER".
 */
export type SATISMETER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SATISMETER".
 */
export type SATISMETER_TRIGGER_EVENTS = {}
