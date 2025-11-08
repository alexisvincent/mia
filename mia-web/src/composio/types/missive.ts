// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MISSIVE's MISSIVE_CREATE_ANALYTICS_REPORT tool input.
 */
type MISSIVE_CREATE_ANALYTICS_REPORT_INPUT = {
  /**
   * Reports
   * @description Report specifications including organization, period, and optional filters
   */
  reports?: {
      /**
       * Account Types
       * @description Array of account types to filter the report
       * @default null
       */
      account_types: string[] | null;
      /**
       * Accounts
       * @description Array of account ID strings to filter the report
       * @default null
       */
      accounts: string[] | null;
      /**
       * End
       * @description Report period end in Unix epoch seconds
       */
      end: number;
      /**
       * Organization
       * @description Organization ID string
       */
      organization: string;
      /**
       * Shared Labels
       * @description Array of shared label ID strings to filter the report
       * @default null
       */
      shared_labels: string[] | null;
      /**
       * Start
       * @description Report period start in Unix epoch seconds
       */
      start: number;
      /**
       * Teams
       * @description Array of team ID strings to filter the report
       * @default null
       */
      teams: string[] | null;
      /**
       * Time Zone
       * @description Time zone identifier (IANA) for the report period
       * @default null
       */
      time_zone: string | null;
      /**
       * Users
       * @description Array of user ID strings to filter the report
       * @default null
       */
      users: string[] | null;
  };
};

/**
 * Type of MISSIVE's MISSIVE_CREATE_ANALYTICS_REPORT tool output.
 */
type MISSIVE_CREATE_ANALYTICS_REPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reports
       * @description Created analytics report reference
       */
      reports: {
          /**
           * Id
           * @description Unique identifier of the created analytics report
           */
          id: string;
      };
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
 * Type of MISSIVE's MISSIVE_CREATE_DRAFT tool input.
 */
type MISSIVE_CREATE_DRAFT_INPUT = {
  /**
   * Account
   * @description Account ID for custom channels or live chat
   * @default null
   */
  account: string | null;
  /**
   * Add Assignees
   * @description List of user IDs to assign to the conversation (requires organization)
   * @default null
   */
  add_assignees: string[] | null;
  /**
   * Add Shared Labels
   * @description Shared label IDs to add to the conversation
   * @default null
   */
  add_shared_labels: string[] | null;
  /**
   * Add To Inbox
   * @description Move the draft's conversation to everyone's inbox
   * @default null
   */
  add_to_inbox: boolean | null;
  /**
   * Add To Team Inbox
   * @description Move the draft's conversation to team inbox (requires team)
   * @default null
   */
  add_to_team_inbox: boolean | null;
  /**
   * Add Users
   * @description List of user IDs to grant access to the conversation (requires organization)
   * @default null
   */
  add_users: string[] | null;
  /**
   * Attachments
   * @description List of file attachments (up to 25, total payload <=10MB)
   * @default null
   */
  attachments: {
      /**
       * Base64 Data
       * @description Base64-encoded contents of the file
       */
      base64_data: string;
      /**
       * Filename
       * @description Filename of the attachment
       */
      filename: string;
  }[] | null;
  /**
   * Auto Followup
   * @description Auto-cancel scheduled draft if a reply arrives (requires send_at)
   * @default null
   */
  auto_followup: boolean | null;
  /**
   * Bcc Fields
   * @description BCC recipients for email drafts
   * @default null
   */
  bcc_fields: {
      /**
       * Address
       * @description Email address of the recipient or sender
       */
      address: string;
      /**
       * Name
       * @description Display name associated with the email address
       * @default null
       */
      name: string | null;
  }[] | null;
  /**
   * Body
   * @description HTML or text body of the draft. Use '<br>' for paragraphs.
   */
  body?: string;
  /**
   * Cc Fields
   * @description CC recipients for email drafts
   * @default null
   */
  cc_fields: {
      /**
       * Address
       * @description Email address of the recipient or sender
       */
      address: string;
      /**
       * Name
       * @description Display name associated with the email address
       * @default null
       */
      name: string | null;
  }[] | null;
  /**
   * Close
   * @description Close the conversation after draft creation
   * @default null
   */
  close: boolean | null;
  /**
   * Conversation
   * @description Conversation ID to append the draft to
   * @default null
   */
  conversation: string | null;
  /**
   * Conversation Color
   * @description HEX color code or 'good'/'warning'/'danger' for the conversation
   * @default null
   */
  conversation_color: string | null;
  /**
   * Conversation Subject
   * @description Subject for new conversation when using references
   * @default null
   */
  conversation_subject: string | null;
  /**
   * External Response Id
   * @description WhatsApp template ID when initiating new WhatsApp conversation
   * @default null
   */
  external_response_id: string | null;
  /**
   * External Response Variables
   * @description Variables for WhatsApp template interpolation
   * @default null
   */
  external_response_variables: {
      [key: string]: string;
  } | null;
  /**
   * Force Team
   * @description Force association to the specified team even if already linked
   * @default null
   */
  force_team: boolean | null;
  /**
   * EmailField
   * @description Email address field for drafts.
   */
  from_field?: {
      /**
       * Address
       * @description Email address of the recipient or sender
       */
      address: string;
      /**
       * Name
       * @description Display name associated with the email address
       * @default null
       */
      name: string | null;
  } | null;
  /**
   * Organization
   * @description Organization ID to scope or link the conversation
   * @default null
   */
  organization: string | null;
  /**
   * Quote Previous Message
   * @description Include quoted text of the last message in an existing conversation
   * @default null
   */
  quote_previous_message: boolean | null;
  /**
   * References
   * @description Message-ID references for threading into existing conversations
   * @default null
   */
  references: string[] | null;
  /**
   * Remove Shared Labels
   * @description Shared label IDs to remove from the conversation
   * @default null
   */
  remove_shared_labels: string[] | null;
  /**
   * Send
   * @description Send the draft immediately upon creation
   * @default null
   */
  send: boolean | null;
  /**
   * Send At
   * @description Unix timestamp to schedule sending (cannot combine with send)
   * @default null
   */
  send_at: number | null;
  /**
   * Subject
   * @description Subject for email drafts
   * @default null
   */
  subject: string | null;
  /**
   * Team
   * @description Team ID to link the draft's conversation
   * @default null
   */
  team: string | null;
  /**
   * To Fields
   * @description List of recipients (one only for SMS/WhatsApp)
   */
  to_fields?: ({
      /**
       * Address
       * @description Email address of the recipient or sender
       */
      address: string;
      /**
       * Name
       * @description Display name associated with the email address
       * @default null
       */
      name: string | null;
  } | {
      /**
       * Phone Number
       * @description Phone number in E.164 format (e.g., '+18005550199')
       */
      phone_number: string;
      /**
       * Type
       * @description Account type when phone number matches multiple channels
       * @default null
       */
      type: ("signalwire" | "twilio" | "twilio_whatsapp" | "whatsapp") | null;
  } | {
      /**
       * Id
       * @description Custom channel or live chat account ID
       */
      id: string;
      /**
       * Name
       * @description Display name for the custom channel or live chat participant
       */
      name: string;
      /**
       * Username
       * @description Username in the custom channel or live chat
       */
      username: string;
  })[];
};

/**
 * Type of MISSIVE's MISSIVE_CREATE_DRAFT tool output.
 */
type MISSIVE_CREATE_DRAFT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drafts
       * @description Created draft object
       */
      drafts: {
          /**
           * Conversation
           * @description Conversation ID the draft belongs to
           * @default null
           */
          conversation: string | null;
          /**
           * Id
           * @description Unique identifier of the created draft
           */
          id: string;
      };
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
 * Type of MISSIVE's MISSIVE_CREATE_MESSAGE tool input.
 */
type MISSIVE_CREATE_MESSAGE_INPUT = {
  /**
   * Attachments
   * @description List of attachments to include in the message
   * @default null
   */
  attachments: {
      /**
       * Base64 Data
       * @description Base64-encoded contents of the file
       */
      base64_data: string;
      /**
       * Filename
       * @description Name of the attachment file
       */
      filename: string;
  }[] | null;
  /**
   * Body
   * @description HTML or plain-text body of the message
   */
  body?: string;
  /**
   * Conversation
   * @description ID of the conversation to send the message in
   */
  conversation?: string;
  /**
   * Quote Previous Message
   * @description Whether to include a quoted version of the previous message
   * @default null
   */
  quote_previous_message: boolean | null;
};

/**
 * Type of MISSIVE's MISSIVE_CREATE_MESSAGE tool output.
 */
type MISSIVE_CREATE_MESSAGE_OUTPUT = {
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
 * Type of MISSIVE's MISSIVE_CREATE_WEBHOOK tool input.
 */
type MISSIVE_CREATE_WEBHOOK_INPUT = {
  /**
   * Author
   * @description (new_comment only) Only trigger for comments by this user ID.
   * @default null
   */
  author: string | null;
  /**
   * Content Contains
   * @description Only trigger when content contains this substring.
   * @default null
   */
  content_contains: string | null;
  /**
   * Content Ends With
   * @description Only trigger when content ends with this substring.
   * @default null
   */
  content_ends_with: string | null;
  /**
   * Content Starts With
   * @description Only trigger when content starts with this substring.
   * @default null
   */
  content_starts_with: string | null;
  /**
   * From Eq
   * @description (incoming_email only) Only trigger for messages from this exact address.
   * @default null
   */
  from_eq: string | null;
  /**
   * Is Task
   * @description (new_comment only) Only trigger for comments on tasks.
   * @default null
   */
  is_task: boolean | null;
  /**
   * Mention
   * @description (new_comment only) Only trigger when this user ID is mentioned.
   * @default null
   */
  mention: string | null;
  /**
   * Organization
   * @description Organization ID to scope the subscription. Omit for personal webhooks.
   * @default null
   */
  organization: string | null;
  /**
   * Subject Contains
   * @description (incoming_email only) Only trigger when email subject contains this text.
   * @default null
   */
  subject_contains: string | null;
  /**
   * Type
   * @description Event type to subscribe to.
   * @enum {string}
   */
  type?: "incoming_email" | "incoming_sms_message" | "incoming_facebook_message" | "incoming_whatsapp_message" | "incoming_twilio_chat_message" | "new_comment";
  /**
   * Url
   * @description The webhook URL to receive event notifications.
   */
  url?: string;
};

/**
 * Type of MISSIVE's MISSIVE_CREATE_WEBHOOK tool output.
 */
type MISSIVE_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hooks
       * @description Details of the created webhook subscription.
       */
      hooks: {
          /**
           * Id
           * @description Unique identifier of the webhook subscription.
           */
          id: string;
      };
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
 * Type of MISSIVE's MISSIVE_DELETE_WEBHOOK tool input.
 */
type MISSIVE_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete.
   */
  webhook_id?: string;
};

/**
 * Type of MISSIVE's MISSIVE_DELETE_WEBHOOK tool output.
 */
type MISSIVE_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of MISSIVE's MISSIVE_LIST_TEAMS tool input.
 */
type MISSIVE_LIST_TEAMS_INPUT = object;

/**
 * Type of MISSIVE's MISSIVE_LIST_TEAMS tool output.
 */
type MISSIVE_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Teams
       * @description List of teams accessible to the user.
       */
      teams: {
          /**
           * Color
           * @description Team color (hex code or name).
           * @default null
           */
          color: string | null;
          /**
           * Created At
           * @description Timestamp when team was created (ISO 8601).
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description Unique identifier for the team.
           */
          id: string;
          /**
           * Initials
           * @description Team initials.
           * @default null
           */
          initials: string | null;
          /**
           * Name
           * @description Name of the team.
           */
          name: string;
          /**
           * Organization
           * @description Organization ID the team belongs to.
           * @default null
           */
          organization: string | null;
          /**
           * Updated At
           * @description Timestamp when team was last updated (ISO 8601).
           * @default null
           */
          updated_at: string | null;
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
 * Type of MISSIVE's MISSIVE_LIST_TEAM_MEMBERS tool input.
 */
type MISSIVE_LIST_TEAM_MEMBERS_INPUT = {
  /**
   * Team Id
   * @description The ID of the team to retrieve members for.
   */
  team_id?: string;
};

/**
 * Type of MISSIVE's MISSIVE_LIST_TEAM_MEMBERS tool output.
 */
type MISSIVE_LIST_TEAM_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description List of members in the team.
       */
      members: {
          /**
           * Avatar Url
           * @description URL to the user's avatar image.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Display Name
           * @description User's display name.
           */
          display_name: string;
          /**
           * Email
           * @description User's email address.
           */
          email: string;
          /**
           * First Name
           * @description User's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description User's unique identifier.
           */
          id: string;
          /**
           * Last Name
           * @description User's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Me
           * @description Indicates if this is the current authenticated user.
           */
          me: boolean;
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
 * Type of MISSIVE's MISSIVE_LIST_USERS tool input.
 */
type MISSIVE_LIST_USERS_INPUT = object;

/**
 * Type of MISSIVE's MISSIVE_LIST_USERS tool output.
 */
type MISSIVE_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description Array of user objects accessible to the authenticated user.
       */
      users: {
          /**
           * Avatar Url
           * @description URL to the user's avatar image.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Display Name
           * @description User's display name.
           */
          display_name: string;
          /**
           * Email
           * @description User's email address.
           */
          email: string;
          /**
           * First Name
           * @description User's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description User's unique identifier.
           */
          id: string;
          /**
           * Last Name
           * @description User's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Me
           * @description Indicates if this is the current authenticated user.
           */
          me: boolean;
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
 * Type map of all available tool input types for toolkit "MISSIVE".
 */
export type MISSIVE_TOOL_INPUTS = {
  CREATE_ANALYTICS_REPORT: MISSIVE_CREATE_ANALYTICS_REPORT_INPUT
  CREATE_DRAFT: MISSIVE_CREATE_DRAFT_INPUT
  CREATE_MESSAGE: MISSIVE_CREATE_MESSAGE_INPUT
  CREATE_WEBHOOK: MISSIVE_CREATE_WEBHOOK_INPUT
  DELETE_WEBHOOK: MISSIVE_DELETE_WEBHOOK_INPUT
  LIST_TEAMS: MISSIVE_LIST_TEAMS_INPUT
  LIST_TEAM_MEMBERS: MISSIVE_LIST_TEAM_MEMBERS_INPUT
  LIST_USERS: MISSIVE_LIST_USERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MISSIVE".
 */
export type MISSIVE_TOOL_OUTPUTS = {
  CREATE_ANALYTICS_REPORT: MISSIVE_CREATE_ANALYTICS_REPORT_OUTPUT
  CREATE_DRAFT: MISSIVE_CREATE_DRAFT_OUTPUT
  CREATE_MESSAGE: MISSIVE_CREATE_MESSAGE_OUTPUT
  CREATE_WEBHOOK: MISSIVE_CREATE_WEBHOOK_OUTPUT
  DELETE_WEBHOOK: MISSIVE_DELETE_WEBHOOK_OUTPUT
  LIST_TEAMS: MISSIVE_LIST_TEAMS_OUTPUT
  LIST_TEAM_MEMBERS: MISSIVE_LIST_TEAM_MEMBERS_OUTPUT
  LIST_USERS: MISSIVE_LIST_USERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MISSIVE toolkit.
 */
export const MISSIVE = {
  slug: "missive",
  tools: {
    /**
     * Tool to create an analytics report. use when you need to generate a report over a specific time range with optional filters. returns a report id for later retrieval.
     */
    CREATE_ANALYTICS_REPORT: "MISSIVE_CREATE_ANALYTICS_REPORT",
    /**
     * Tool to create a new draft in missive. use after preparing message details to save a draft (email, sms, whatsapp, or live chat) for later editing or scheduling.
     */
    CREATE_DRAFT: "MISSIVE_CREATE_DRAFT",
    /**
     * Tool to send a new message in a missive conversation. use after selecting the target conversation id.
     */
    CREATE_MESSAGE: "MISSIVE_CREATE_MESSAGE",
    /**
     * Tool to create a webhook subscription. use after choosing event type and target url.
     */
    CREATE_WEBHOOK: "MISSIVE_CREATE_WEBHOOK",
    /**
     * Tool to delete a webhook subscription by webhook id. use after confirming the webhook id; this operation cannot be undone.
     */
    DELETE_WEBHOOK: "MISSIVE_DELETE_WEBHOOK",
    /**
     * Tool to list all teams. use when you need to retrieve and enumerate all teams available in missive.
     */
    LIST_TEAMS: "MISSIVE_LIST_TEAMS",
    /**
     * Tool to list members of a team. use when you need to retrieve all members for a specific team.
     */
    LIST_TEAM_MEMBERS: "MISSIVE_LIST_TEAM_MEMBERS",
    /**
     * Tool to list all users. use after authentication when you need to retrieve all users in the organization.
     */
    LIST_USERS: "MISSIVE_LIST_USERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MISSIVE".
 */
export type MISSIVE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MISSIVE".
 */
export type MISSIVE_TRIGGER_EVENTS = {}
