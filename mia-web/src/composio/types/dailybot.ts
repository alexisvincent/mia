// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DAILYBOT's DAILYBOT_FIND_USER tool input.
 */
type DAILYBOT_FIND_USER_INPUT = {
  /**
   * User Uuid
   * @description The UUID of the user to retrieve information for
   */
  user_uuid?: string;
};

/**
 * Type of DAILYBOT's DAILYBOT_FIND_USER tool output.
 */
type DAILYBOT_FIND_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Birth Date
       * @description User's birth date
       * @default null
       */
      birth_date: string | null;
      /**
       * Bot Enabled
       * @description Whether bot is enabled for the user
       * @default null
       */
      bot_enabled: boolean | null;
      /**
       * ChatPlatformData
       * @description Contains platform-specific user data
       * @default null
       */
      chat_platform_data: {
          /**
           * User External Id
           * @description External ID that identifies the user on each platform
           */
          user_external_id: string;
      } | null;
      /**
       * Full Name
       * @description User's full name
       */
      full_name: string;
      /**
       * Hour Init Work
       * @description User's work start time
       * @default null
       */
      hour_init_work: string | null;
      /**
       * Image
       * @description URL of the user's avatar image
       * @default null
       */
      image: string | null;
      /**
       * Is Active
       * @description Whether the user is active
       * @default null
       */
      is_active: boolean | null;
      /**
       * Occupation
       * @description User's job title
       * @default null
       */
      occupation: string | null;
      /**
       * Organization
       * @description Organization details
       * @default null
       */
      organization: {
          /**
           * Name
           * @description Organization's name
           */
          name: string;
          /**
           * Uuid
           * @description Organization's unique identifier
           */
          uuid: string;
      } | null;
      /**
       * Role
       * @description User's role in the organization
       * @default null
       */
      role: string | null;
      /**
       * Timeoff End
       * @description End date of time off
       * @default null
       */
      timeoff_end: string | null;
      /**
       * Timeoff Start
       * @description Start date of time off
       * @default null
       */
      timeoff_start: string | null;
      /**
       * Timezone
       * @description User's timezone
       * @default null
       */
      timezone: string | null;
      /**
       * Username
       * @description User's username
       * @default null
       */
      username: string | null;
      /**
       * Uuid
       * @description User's unique identifier
       */
      uuid: string;
      /**
       * Work Days
       * @description User's working days
       * @default null
       */
      work_days: number[] | null;
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
 * Type of DAILYBOT's DAILYBOT_FIND_WORKFLOW tool input.
 */
type DAILYBOT_FIND_WORKFLOW_INPUT = {
  /**
   * Workflow Name
   * @description Name of the workflow to find
   */
  workflow_name?: string;
};

/**
 * Type of DAILYBOT's DAILYBOT_FIND_WORKFLOW tool output.
 */
type DAILYBOT_FIND_WORKFLOW_OUTPUT = {
  /**
   * Data
   * @description Workflow data if found
   * @default {}
   */
  data: {
      [key: string]: unknown;
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
 * Type of DAILYBOT's DAILYBOT_GET_USERS tool input.
 */
type DAILYBOT_GET_USERS_INPUT = object;

/**
 * Type of DAILYBOT's DAILYBOT_GET_USERS tool output.
 */
type DAILYBOT_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of users
       */
      count: number;
      /**
       * Next
       * @description URL for next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of user objects with detailed information
       */
      results: {
          /**
           * Birth Date
           * @description User's birth date (formatted as MM-DD)
           * @default null
           */
          birth_date: string | null;
          /**
           * Bot Enabled
           * @description Indicates if the user has enabled the bot in chat
           */
          bot_enabled: boolean;
          /**
           * Chat Platform Data
           * @description Contains platform-specific user data
           */
          chat_platform_data: {
              /**
               * User External Id
               * @description External ID that identifies the user on each platform
               */
              user_external_id: string;
          };
          /**
           * Full Name
           * @description User's full name
           */
          full_name: string;
          /**
           * Hour Init Work
           * @description Start time of the user's work shift
           * @default null
           */
          hour_init_work: string | null;
          /**
           * Image
           * @description URL of the user's avatar image
           * @default null
           */
          image: string | null;
          /**
           * Is Active
           * @description Indicates if the user is active in the organization
           */
          is_active: boolean;
          /**
           * Occupation
           * @description User's job title
           * @default null
           */
          occupation: string | null;
          /**
           * Organization
           * @description Organization details
           */
          organization: {
              /**
               * Name
               * @description Organization's name
               */
              name: string;
              /**
               * Uuid
               * @description Organization's unique identifier
               */
              uuid: string;
          };
          /**
           * Role
           * @description User's role in the organization
           */
          role: string;
          /**
           * Timeoff End
           * @description End date of the user's time off
           * @default null
           */
          timeoff_end: string | null;
          /**
           * Timeoff Start
           * @description Start date of the user's time off
           * @default null
           */
          timeoff_start: string | null;
          /**
           * Timezone
           * @description User's time zone
           */
          timezone: string;
          /**
           * Username
           * @description User's username
           * @default null
           */
          username: string | null;
          /**
           * Uuid
           * @description User's unique identifier
           */
          uuid: string;
          /**
           * Work Days
           * @description List of numeric values representing the user's workdays
           * @default null
           */
          work_days: number[] | null;
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
 * Type of DAILYBOT's DAILYBOT_GET_WORKFLOWS tool input.
 */
type DAILYBOT_GET_WORKFLOWS_INPUT = {
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page
   * @default 10
   */
  per_page: number | null;
};

/**
 * Type of DAILYBOT's DAILYBOT_GET_WORKFLOWS tool output.
 */
type DAILYBOT_GET_WORKFLOWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of workflows
       */
      count: number;
      /**
       * Next
       * @description URL for the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of workflows for the current page
       */
      results: {
          /**
           * Created At
           * @description Creation timestamp of the workflow
           */
          created_at: string;
          /**
           * Description
           * @description Description of the workflow
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the workflow
           */
          id: string;
          /**
           * Name
           * @description Name of the workflow
           */
          name: string;
          /**
           * Status
           * @description Current status of the workflow
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp of the workflow
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
 * Type of DAILYBOT's DAILYBOT_GIVE_KUDOS tool input.
 */
type DAILYBOT_GIVE_KUDOS_INPUT = {
  /**
   * By Dailybot
   * @description Whether to give kudos on behalf of DailyBot instead of the API key owner
   * @default false
   */
  by_dailybot: boolean;
  /**
   * Company Value
   * @description Optional company value to associate with the kudos
   * @default null
   */
  company_value: string | null;
  /**
   * Content
   * @description The text content of the kudos message
   */
  content?: string;
  /**
   * Is Anonymous
   * @description Whether to give the kudos anonymously
   * @default false
   */
  is_anonymous: boolean;
  /**
   * Receivers
   * @description List of user UUIDs who will receive the kudos
   */
  receivers?: string[];
};

/**
 * Type of DAILYBOT's DAILYBOT_GIVE_KUDOS tool output.
 */
type DAILYBOT_GIVE_KUDOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Value
       * @description Company value associated with the kudos
       * @default null
       */
      company_value: {
          [key: string]: unknown;
      } | null;
      /**
       * Content
       * @description The kudos message content
       */
      content: string;
      /**
       * Created At
       * @description Datetime when the kudos was created
       */
      created_at: string;
      /**
       * Id
       * @description UUID of the created kudos
       */
      id: string;
      /**
       * Is Anonymous
       * @description Whether the kudos was given anonymously
       */
      is_anonymous: boolean;
      /**
       * Metadata
       * @description Additional metadata about the kudos
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Parent
       * @description Parent UUID if applicable
       * @default null
       */
      parent: string | null;
      /**
       * Receivers
       * @description List of users who received the kudos
       */
      receivers: {
          /**
           * Full Name
           * @default null
           */
          full_name: string | null;
          /**
           * Image
           * @default null
           */
          image: string | null;
          /**
           * Occupation
           * @default null
           */
          occupation: string | null;
          /**
           * Username
           * @default null
           */
          username: string | null;
          /** Uuid */
          uuid: string;
      }[];
      /**
       * KudosUser
       * @description Model for user information in kudos response.
       * @default null
       */
      user: {
          /**
           * Full Name
           * @default null
           */
          full_name: string | null;
          /**
           * Image
           * @default null
           */
          image: string | null;
          /**
           * Occupation
           * @default null
           */
          occupation: string | null;
          /**
           * Username
           * @default null
           */
          username: string | null;
          /** Uuid */
          uuid: string;
      } | null;
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
 * Type of DAILYBOT's DAILYBOT_SEND_MESSAGE tool input.
 */
type DAILYBOT_SEND_MESSAGE_INPUT = {
  /**
   * Buttons
   * @description List of interactive buttons to add to the message
   * @default null
   */
  buttons: {
      /**
       * Button Type
       * @description Type of the button, should be set to 'Command'
       * @default Command
       */
      button_type: string;
      /**
       * Label
       * @description Text displayed on the button
       */
      label: string;
      /**
       * Label After Click
       * @description Text shown after the button is clicked
       */
      label_after_click: string;
      /**
       * Value
       * @description Command executed when the button is clicked
       */
      value: string;
  }[] | null;
  /**
   * Exchange Token
   * @description Reserved for public commands that need to interact on behalf of other users
   * @default null
   */
  exchange_token: string | null;
  /**
   * Image Url
   * @description URL of an image to include in the message
   * @default null
   */
  image_url: string | null;
  /**
   * Message
   * @description The content of the message to send. Supports markdown formatting.
   */
  message?: string;
  /**
   * Target Channels
   * @description List of channel targets to send the message to
   * @default null
   */
  target_channels: {
      /**
       * Id
       * @description ID of the channel
       */
      id: string;
      /**
       * Is Channel Message
       * @description Boolean indicating if the message is for a channel (true) or a direct message (false)
       */
      is_channel_message: boolean;
  }[] | null;
  /**
   * Target Teams
   * @description List of team UUIDs whose members will receive the message
   * @default null
   */
  target_teams: string[] | null;
  /**
   * Target Users
   * @description List of user UUIDs who will receive the message
   * @default null
   */
  target_users: string[] | null;
};

/**
 * Type of DAILYBOT's DAILYBOT_SEND_MESSAGE tool output.
 */
type DAILYBOT_SEND_MESSAGE_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "DAILYBOT".
 */
export type DAILYBOT_TOOL_INPUTS = {
  FIND_USER: DAILYBOT_FIND_USER_INPUT
  FIND_WORKFLOW: DAILYBOT_FIND_WORKFLOW_INPUT
  GET_USERS: DAILYBOT_GET_USERS_INPUT
  GET_WORKFLOWS: DAILYBOT_GET_WORKFLOWS_INPUT
  GIVE_KUDOS: DAILYBOT_GIVE_KUDOS_INPUT
  SEND_MESSAGE: DAILYBOT_SEND_MESSAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DAILYBOT".
 */
export type DAILYBOT_TOOL_OUTPUTS = {
  FIND_USER: DAILYBOT_FIND_USER_OUTPUT
  FIND_WORKFLOW: DAILYBOT_FIND_WORKFLOW_OUTPUT
  GET_USERS: DAILYBOT_GET_USERS_OUTPUT
  GET_WORKFLOWS: DAILYBOT_GET_WORKFLOWS_OUTPUT
  GIVE_KUDOS: DAILYBOT_GIVE_KUDOS_OUTPUT
  SEND_MESSAGE: DAILYBOT_SEND_MESSAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DAILYBOT toolkit.
 */
export const DAILYBOT = {
  slug: "dailybot",
  tools: {
    /**
     * This tool allows you to find and retrieve information about a specific user in dailybot. it uses the provided user uuid to lookup the user and returns detailed information including the user's uuid, full name, image, username, occupation, birth date, chat platform data, and organization details.
     */
    FIND_USER: "DAILYBOT_FIND_USER",
    /**
     * This tool allows users to find a specific workflow within dailybot by providing the workflow name. it returns detailed information including the workflow id, workflow name, workflow status, workflow type, created at, and updated at. it is especially useful to locate a workflow before running or modifying it.
     */
    FIND_WORKFLOW: "DAILYBOT_FIND_WORKFLOW",
    /**
     * This tool retrieves a list of all users within the organization from dailybot. it doesn't require any input parameters other than authentication. the returned json contains user details including uuid, active status, full name, and organizational data.
     */
    GET_USERS: "DAILYBOT_GET_USERS",
    /**
     * This tool retrieves a list of all workflows that the authenticated user has access to in dailybot. it can be executed independently with only the authentication required, and it supports optional pagination parameters (page, per page) to refine the response.
     */
    GET_WORKFLOWS: "DAILYBOT_GET_WORKFLOWS",
    /**
     * This tool allows giving kudos to one or multiple users in dailybot. kudos can be given either on behalf of dailybot or the api key owner.
     */
    GIVE_KUDOS: "DAILYBOT_GIVE_KUDOS",
    /**
     * This tool allows sending a message through dailybot to either specific users or channels/rooms. the message can include markdown formatting.
     */
    SEND_MESSAGE: "DAILYBOT_SEND_MESSAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DAILYBOT".
 */
export type DAILYBOT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DAILYBOT".
 */
export type DAILYBOT_TRIGGER_EVENTS = {}
