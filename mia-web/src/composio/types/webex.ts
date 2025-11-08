// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WEBEX's WEBEX_CREATE_ROOM tool input.
 */
type WEBEX_CREATE_ROOM_INPUT = {
  /**
   * Team Id
   * @description The team ID to associate the room with. Optional.
   * @default null
   */
  teamId: string | null;
  /**
   * Title
   * @description The title for the room.
   */
  title?: string;
};

/**
 * Type of WEBEX's WEBEX_CREATE_ROOM tool output.
 */
type WEBEX_CREATE_ROOM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the room was created.
       * @default null
       */
      created: string | null;
      /**
       * Creator Id
       * @description ID of the user who created the room.
       * @default null
       */
      creatorId: string | null;
      /**
       * Id
       * @description Unique identifier for the room.
       */
      id: string;
      /**
       * Is Locked
       * @description Whether the room is locked.
       * @default null
       */
      isLocked: boolean | null;
      /**
       * Last Activity
       * @description ISO 8601 timestamp of the last activity in the room.
       * @default null
       */
      lastActivity: string | null;
      /**
       * Team Id
       * @description The team ID this room belongs to.
       * @default null
       */
      teamId: string | null;
      /**
       * Title
       * @description Title of the room.
       */
      title: string;
      /**
       * Type
       * @description Type of the room (e.g., 'group').
       */
      type: string;
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
 * Type of WEBEX's WEBEX_CREATE_TEAM tool input.
 */
type WEBEX_CREATE_TEAM_INPUT = {
  /**
   * Description
   * @description A description of the team.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description The name of the team.
   */
  name?: string;
};

/**
 * Type of WEBEX's WEBEX_CREATE_TEAM tool output.
 */
type WEBEX_CREATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the team was created.
       */
      created: string;
      /**
       * Description
       * @description A description of the team.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the team.
       */
      id: string;
      /**
       * Name
       * @description The name of the team.
       */
      name: string;
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
 * Type of WEBEX's WEBEX_GET_TEAM_DETAILS tool input.
 */
type WEBEX_GET_TEAM_DETAILS_INPUT = {
  /**
   * Team Id
   * @description The unique identifier for the team.
   */
  teamId?: string;
};

/**
 * Type of WEBEX's WEBEX_GET_TEAM_DETAILS tool output.
 */
type WEBEX_GET_TEAM_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the team was created.
       */
      created: string;
      /**
       * Description
       * @description A description of the team.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The team's unique ID.
       */
      id: string;
      /**
       * Name
       * @description The name of the team.
       */
      name: string;
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
 * Type of WEBEX's WEBEX_LIST_TEAMS tool input.
 */
type WEBEX_LIST_TEAMS_INPUT = {
  /**
   * Max
   * @description Maximum number of teams to return.
   * @default null
   */
  max: number | null;
};

/**
 * Type of WEBEX's WEBEX_LIST_TEAMS tool output.
 */
type WEBEX_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of team objects matching the request filters.
       */
      items: {
          /**
           * Created
           * @description ISO8601 timestamp when the team was created.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the team.
           */
          id: string;
          /**
           * Name
           * @description Name of the team.
           */
          name: string;
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
 * Type of WEBEX's WEBEX_LIST_WEBHOOKS tool input.
 */
type WEBEX_LIST_WEBHOOKS_INPUT = {
  /**
   * Max
   * @description Maximum number of webhooks to return
   * @default null
   */
  max: number | null;
  /**
   * Owned By
   * @description Filter webhooks by ownership: 'creator' for user-owned, 'org' for org-wide
   * @default null
   * @enum {string|null}
   */
  ownedBy: "creator" | "org" | null;
};

/**
 * Type of WEBEX's WEBEX_LIST_WEBHOOKS tool output.
 */
type WEBEX_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of webhook objects matching request filters
       */
      items: {
          /**
           * Actor Id
           * @description Person ID of creator
           * @default null
           */
          actorId: string | null;
          /**
           * App Id
           * @description Integration application ID
           * @default null
           */
          appId: string | null;
          /**
           * Created
           * @description ISO 8601 timestamp when created
           */
          created: string;
          /**
           * Created By
           * @description Person ID who created the webhook
           */
          createdBy: string;
          /**
           * Event
           * @description Event that triggers the webhook
           */
          event: string;
          /**
           * Filter
           * @description Filter expression for events
           * @default null
           */
          filter: string | null;
          /**
           * Id
           * @description Unique identifier for the webhook
           */
          id: string;
          /**
           * Name
           * @description Webhook name
           */
          name: string;
          /**
           * Org Id
           * @description Organization ID
           */
          orgId: string;
          /**
           * Owned By
           * @description Ownership: 'creator' or 'org'
           */
          ownedBy: string;
          /**
           * Resource
           * @description Resource monitored by the webhook
           */
          resource: string;
          /**
           * Secret
           * @description Secret for securing webhook payloads
           * @default null
           */
          secret: string | null;
          /**
           * Status
           * @description Webhook status, e.g., 'active'
           */
          status: string;
          /**
           * Target Url
           * @description URL that receives POST requests for this webhook
           */
          targetUrl: string;
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
 * Type of WEBEX's WEBEX_MESSAGING_CREATE_MESSAGE tool input.
 */
type WEBEX_MESSAGING_CREATE_MESSAGE_INPUT = {
  /**
   * Attachments
   * @description Content attachments (cards). Only one attachment per message is supported.
   * @default null
   */
  attachments: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Files
   * @description Public URLs of files to post. Only one URL allowed per message.
   * @default null
   */
  files: string[] | null;
  /**
   * Markdown
   * @description Markdown-formatted message. Overrides text if present.
   * @default null
   */
  markdown: string | null;
  /**
   * Room Id
   * @description The room ID to post the message in. Required if sending to a room.
   * @default null
   */
  roomId: string | null;
  /**
   * Text
   * @description Plain-text message content.
   * @default null
   */
  text: string | null;
  /**
   * To Person Email
   * @description The email address of the person for a private 1:1 message. Mutually exclusive with roomId.
   * @default null
   */
  toPersonEmail: string | null;
  /**
   * To Person Id
   * @description The person ID for sending a private 1:1 message. Mutually exclusive with roomId.
   * @default null
   */
  toPersonId: string | null;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_CREATE_MESSAGE tool output.
 */
type WEBEX_MESSAGING_CREATE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the message was created.
       * @default null
       */
      created: string | null;
      /**
       * Files
       * @description URLs of any attached files.
       * @default null
       */
      files: string[] | null;
      /**
       * Id
       * @description Unique identifier for the message.
       */
      id: string;
      /**
       * Markdown
       * @description Markdown message content.
       * @default null
       */
      markdown: string | null;
      /**
       * Person Email
       * @description Email of the person who posted the message.
       * @default null
       */
      personEmail: string | null;
      /**
       * Person Id
       * @description ID of the person who posted the message.
       * @default null
       */
      personId: string | null;
      /**
       * Room Id
       * @description The room ID where the message was posted.
       * @default null
       */
      roomId: string | null;
      /**
       * Room Type
       * @description Type of the room: 'group' or 'direct'.
       * @default null
       */
      roomType: string | null;
      /**
       * Text
       * @description Plain-text message content.
       * @default null
       */
      text: string | null;
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
 * Type of WEBEX's WEBEX_MESSAGING_CREATE_ROOM tool input.
 */
type WEBEX_MESSAGING_CREATE_ROOM_INPUT = {
  /**
   * Team Id
   * @description Optional team ID to associate with the room.
   * @default null
   */
  teamId: string | null;
  /**
   * Title
   * @description Title of the room.
   */
  title?: string;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_CREATE_ROOM tool output.
 */
type WEBEX_MESSAGING_CREATE_ROOM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the room was created.
       * @default null
       */
      created: string | null;
      /**
       * Creator Id
       * @description ID of the user who created the room.
       * @default null
       */
      creatorId: string | null;
      /**
       * Id
       * @description Unique identifier for the room.
       */
      id: string;
      /**
       * Is Locked
       * @description Whether the room is locked.
       * @default null
       */
      isLocked: boolean | null;
      /**
       * Last Activity
       * @description ISO 8601 timestamp of the last activity in the room.
       * @default null
       */
      lastActivity: string | null;
      /**
       * Team Id
       * @description Team ID the room belongs to.
       * @default null
       */
      teamId: string | null;
      /**
       * Title
       * @description Title of the room.
       */
      title: string;
      /**
       * Type
       * @description Type of the room (e.g., 'group').
       */
      type: string;
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
 * Type of WEBEX's WEBEX_MESSAGING_CREATE_TEAM_MEMBERSHIP tool input.
 */
type WEBEX_MESSAGING_CREATE_TEAM_MEMBERSHIP_INPUT = {
  /**
   * Is Moderator
   * @description Set to true to make the person a team moderator.
   * @default false
   */
  isModerator: boolean | null;
  /**
   * Person Email
   * @description The email address of the person to add. Required if personId is not provided.
   * @default null
   */
  personEmail: string | null;
  /**
   * Person Id
   * @description The person ID to add. Required if personEmail is not provided.
   * @default null
   */
  personId: string | null;
  /**
   * Team Id
   * @description The team ID to add the person to.
   */
  teamId?: string;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_CREATE_TEAM_MEMBERSHIP tool output.
 */
type WEBEX_MESSAGING_CREATE_TEAM_MEMBERSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the membership was created.
       */
      created: string;
      /**
       * Id
       * @description Unique identifier for the team membership.
       */
      id: string;
      /**
       * Is Moderator
       * @description Whether the person is a team moderator.
       */
      isModerator: boolean;
      /**
       * Person Email
       * @description The person's email address.
       */
      personEmail: string;
      /**
       * Person Id
       * @description The person ID.
       */
      personId: string;
      /**
       * Team Id
       * @description The team ID.
       */
      teamId: string;
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
 * Type of WEBEX's WEBEX_MESSAGING_DELETE_MEMBERSHIP tool input.
 */
type WEBEX_MESSAGING_DELETE_MEMBERSHIP_INPUT = {
  /**
   * Membership Id
   * @description Unique identifier for the membership to delete
   */
  membershipId?: string;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_DELETE_MEMBERSHIP tool output.
 */
type WEBEX_MESSAGING_DELETE_MEMBERSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the membership was deleted successfully
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
 * Type of WEBEX's WEBEX_MESSAGING_DELETE_MESSAGE tool input.
 */
type WEBEX_MESSAGING_DELETE_MESSAGE_INPUT = {
  /**
   * Message Id
   * @description Unique identifier for the message to delete
   */
  messageId?: string;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_DELETE_MESSAGE tool output.
 */
type WEBEX_MESSAGING_DELETE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the message was deleted successfully
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
 * Type of WEBEX's WEBEX_MESSAGING_DELETE_ROOM tool input.
 */
type WEBEX_MESSAGING_DELETE_ROOM_INPUT = {
  /**
   * Room Id
   * @description Unique identifier for the room to delete
   */
  roomId?: string;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_DELETE_ROOM tool output.
 */
type WEBEX_MESSAGING_DELETE_ROOM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the room was deleted successfully
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
 * Type of WEBEX's WEBEX_MESSAGING_GET_MEMBERSHIP_DETAILS tool input.
 */
type WEBEX_MESSAGING_GET_MEMBERSHIP_DETAILS_INPUT = {
  /**
   * Membership Id
   * @description The unique identifier for the membership.
   */
  membershipId?: string;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_GET_MEMBERSHIP_DETAILS tool output.
 */
type WEBEX_MESSAGING_GET_MEMBERSHIP_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the membership was created.
       */
      created: string;
      /**
       * Id
       * @description The unique identifier for the membership.
       */
      id: string;
      /**
       * Is Moderator
       * @description Whether the person is a moderator of the room.
       */
      isModerator: boolean;
      /**
       * Is Monitor
       * @description Whether the person is a monitor of the room.
       */
      isMonitor: boolean;
      /**
       * Person Display Name
       * @description The display name of the person assigned to the membership.
       */
      personDisplayName: string;
      /**
       * Person Email
       * @description The email address of the person assigned to the membership.
       */
      personEmail: string;
      /**
       * Person Id
       * @description The unique identifier for the person assigned to the membership.
       */
      personId: string;
      /**
       * Room Id
       * @description The unique identifier for the room.
       */
      roomId: string;
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
 * Type of WEBEX's WEBEX_MESSAGING_GET_MESSAGE_DETAILS tool input.
 */
type WEBEX_MESSAGING_GET_MESSAGE_DETAILS_INPUT = {
  /**
   * Message Id
   * @description The unique identifier for the message.
   */
  messageId?: string;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_GET_MESSAGE_DETAILS tool output.
 */
type WEBEX_MESSAGING_GET_MESSAGE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the message was created.
       */
      created: string;
      /**
       * Files
       * @description URLs of files attached to the message.
       * @default null
       */
      files: string[] | null;
      /**
       * Id
       * @description The unique identifier for the message.
       */
      id: string;
      /**
       * Markdown
       * @description The Markdown-formatted content of the message.
       * @default null
       */
      markdown: string | null;
      /**
       * Mentioned Groups
       * @description List of group IDs mentioned in the message.
       * @default null
       */
      mentionedGroups: string[] | null;
      /**
       * Mentioned People
       * @description List of person IDs mentioned in the message.
       * @default null
       */
      mentionedPeople: string[] | null;
      /**
       * Person Email
       * @description The email address of the person who sent the message.
       */
      personEmail: string;
      /**
       * Person Id
       * @description The unique identifier for the person who sent the message.
       */
      personId: string;
      /**
       * Room Id
       * @description The unique identifier for the room.
       */
      roomId: string;
      /**
       * Room Type
       * @description The type of room (e.g., 'group' or 'direct').
       * @enum {string}
       */
      roomType: "group" | "direct";
      /**
       * Text
       * @description The plain text content of the message.
       * @default null
       */
      text: string | null;
      /**
       * To Person Email
       * @description The email address of the recipient in a 1:1 message.
       * @default null
       */
      toPersonEmail: string | null;
      /**
       * To Person Id
       * @description The unique identifier for the recipient in a 1:1 message.
       * @default null
       */
      toPersonId: string | null;
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
 * Type of WEBEX's WEBEX_MESSAGING_GET_ROOM_DETAILS tool input.
 */
type WEBEX_MESSAGING_GET_ROOM_DETAILS_INPUT = {
  /**
   * Room Id
   * @description Unique identifier for the room.
   */
  roomId?: string;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_GET_ROOM_DETAILS tool output.
 */
type WEBEX_MESSAGING_GET_ROOM_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the room was created.
       * @default null
       */
      created: string | null;
      /**
       * Creator Id
       * @description ID of the person who created the room.
       * @default null
       */
      creatorId: string | null;
      /**
       * Id
       * @description Unique identifier for the room.
       */
      id: string;
      /**
       * Is Announcement Only
       * @description Whether the room is announcement-only.
       * @default null
       */
      isAnnouncementOnly: boolean | null;
      /**
       * Is Archived
       * @description Whether the room is archived.
       * @default null
       */
      isArchived: boolean | null;
      /**
       * Is Favorite
       * @description Whether the room is marked as a favorite.
       * @default null
       */
      isFavorite: boolean | null;
      /**
       * Is Locked
       * @description Whether the room is locked.
       * @default null
       */
      isLocked: boolean | null;
      /**
       * Is Public
       * @description Whether the room is public.
       * @default null
       */
      isPublic: boolean | null;
      /**
       * Is Read Only
       * @description Whether the room is read-only.
       * @default null
       */
      isReadOnly: boolean | null;
      /**
       * Last Activity
       * @description ISO 8601 timestamp of the last activity in the room.
       * @default null
       */
      lastActivity: string | null;
      /**
       * Last Seen Activity
       * @description ISO 8601 timestamp when the user last saw activity in the room.
       * @default null
       */
      lastSeenActivity: string | null;
      /**
       * Team Id
       * @description ID of the team associated with the room, if applicable.
       * @default null
       */
      teamId: string | null;
      /**
       * Title
       * @description Title of the room.
       */
      title: string;
      /**
       * Type
       * @description Type of the room (e.g., 'group' or 'direct').
       */
      type: string;
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
 * Type of WEBEX's WEBEX_MESSAGING_GET_TEAM_MEMBERSHIP_DETAILS tool input.
 */
type WEBEX_MESSAGING_GET_TEAM_MEMBERSHIP_DETAILS_INPUT = {
  /**
   * Membership Id
   * @description The unique identifier for the team membership.
   */
  membershipId?: string;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_GET_TEAM_MEMBERSHIP_DETAILS tool output.
 */
type WEBEX_MESSAGING_GET_TEAM_MEMBERSHIP_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the team membership was created.
       */
      created: string;
      /**
       * Id
       * @description The unique identifier for the team membership.
       */
      id: string;
      /**
       * Is Moderator
       * @description True if the person is a moderator of the team.
       */
      isModerator: boolean;
      /**
       * Is Monitor
       * @description True if the person is a monitor of the team membership.
       * @default false
       */
      isMonitor: boolean | null;
      /**
       * Person Display Name
       * @description The display name of the person in the membership.
       */
      personDisplayName: string;
      /**
       * Person Email
       * @description The email address of the person in the membership.
       */
      personEmail: string;
      /**
       * Person Id
       * @description The unique identifier for the person in the membership.
       */
      personId: string;
      /**
       * Team Id
       * @description The unique identifier for the team.
       */
      teamId: string;
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
 * Type of WEBEX's WEBEX_MESSAGING_LIST_MEMBERSHIPS tool input.
 */
type WEBEX_MESSAGING_LIST_MEMBERSHIPS_INPUT = {
  /**
   * Max
   * @description Limit the maximum number of membership records returned.
   * @default null
   */
  max: number | null;
  /**
   * Person Email
   * Format: email
   * @description Filter memberships by the member's email address.
   */
  personEmail?: unknown;
  /**
   * Person Id
   * @description Filter memberships by the Webex person ID.
   * @default null
   */
  personId: string | null;
  /**
   * Room Id
   * @description Filter memberships by the Webex room ID.
   * @default null
   */
  roomId: string | null;
  /**
   * Team Id
   * @description Filter memberships associated with a specific team ID.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_LIST_MEMBERSHIPS tool output.
 */
type WEBEX_MESSAGING_LIST_MEMBERSHIPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of membership objects matching the request filters.
       */
      items: {
          /**
           * Created
           * Format: date-time
           * @description Timestamp when the membership was created in ISO 8601 format.
           */
          created: unknown;
          /**
           * Id
           * @description Unique identifier for the membership.
           */
          id: string;
          /**
           * Is Moderator
           * @description True if the person is a room moderator.
           */
          isModerator: boolean;
          /**
           * Is Monitor
           * @description True if the person is monitoring the room.
           */
          isMonitor: boolean;
          /**
           * Person Display Name
           * @description Display name of the person.
           */
          personDisplayName: string;
          /**
           * Person Email
           * @description Email address of the person in the membership.
           */
          personEmail: string;
          /**
           * Person Id
           * @description ID of the person in the membership.
           */
          personId: string;
          /**
           * Person Org Id
           * @description Organization ID of the person.
           */
          personOrgId: string;
          /**
           * Room Id
           * @description ID of the room associated with the membership.
           */
          roomId: string;
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
 * Type of WEBEX's WEBEX_MESSAGING_LIST_MESSAGES tool input.
 */
type WEBEX_MESSAGING_LIST_MESSAGES_INPUT = {
  /**
   * Before
   * @description Filter messages sent before a specific ISO8601 timestamp.
   * @default null
   */
  before: string | null;
  /**
   * Before Message
   * @description Filter messages sent before a specific message, by its ID.
   * @default null
   */
  beforeMessage: string | null;
  /**
   * Max
   * @description Maximum number of messages to return per request.
   * @default null
   */
  max: number | null;
  /**
   * Mentioned People
   * @description Filter messages where the caller is mentioned; use 'me' or person IDs.
   * @default null
   */
  mentionedPeople: string[] | null;
  /**
   * Parent Id
   * @description Filter messages that are replies to a specific message ID.
   * @default null
   */
  parentId: string | null;
  /**
   * Room Id
   * @description Unique identifier for the room to list messages from.
   */
  roomId?: string;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_LIST_MESSAGES tool output.
 */
type WEBEX_MESSAGING_LIST_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of message objects matching the request filters.
       */
      items: {
          /**
           * Created
           * @description ISO8601 timestamp when the message was created.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the message.
           */
          id: string;
          /**
           * Markdown
           * @description Markdown content of the message.
           * @default null
           */
          markdown: string | null;
          /**
           * Mentioned People
           * @description List of person IDs mentioned in the message.
           * @default null
           */
          mentionedPeople: string[] | null;
          /**
           * Parent Id
           * @description ID of the parent message if this message is a reply.
           * @default null
           */
          parentId: string | null;
          /**
           * Person Email
           * @description Email address of the person who sent the message.
           */
          personEmail: string;
          /**
           * Person Id
           * @description Unique identifier of the person who sent the message.
           */
          personId: string;
          /**
           * Room Id
           * @description Unique identifier for the room containing the message.
           */
          roomId: string;
          /**
           * Room Type
           * @description Type of room: 'direct' or 'group'.
           * @enum {string}
           */
          roomType: "direct" | "group";
          /**
           * Text
           * @description Plain text content of the message.
           * @default null
           */
          text: string | null;
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
 * Type of WEBEX's WEBEX_MESSAGING_LIST_ROOMS tool input.
 */
type WEBEX_MESSAGING_LIST_ROOMS_INPUT = {
  /**
   * Max
   * @description Maximum number of rooms to return.
   * @default null
   */
  max: number | null;
  /**
   * Sort By
   * @description Sort results by 'id', 'lastactivity' (recent activity), or 'created' (creation date).
   * @default null
   * @enum {string|null}
   */
  sortBy: "id" | "lastactivity" | "created" | null;
  /**
   * Team Id
   * @description Limit rooms to those associated with a specific team by ID.
   * @default null
   */
  teamId: string | null;
  /**
   * Type
   * @description Filter rooms by type: 'direct' (1:1) or 'group'.
   * @default null
   * @enum {string|null}
   */
  type: "direct" | "group" | null;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_LIST_ROOMS tool output.
 */
type WEBEX_MESSAGING_LIST_ROOMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of room objects matching the request filters.
       */
      items: {
          /**
           * Created
           * @description ISO 8601 timestamp when the room was created.
           */
          created: string;
          /**
           * Creator Id
           * @description ID of the user who created the room.
           */
          creatorId: string;
          /**
           * Id
           * @description Unique identifier for the room.
           */
          id: string;
          /**
           * Is Locked
           * @description Whether the room is locked.
           */
          isLocked: boolean;
          /**
           * Last Activity
           * @description ISO 8601 timestamp of last activity in the room.
           */
          lastActivity: string;
          /**
           * Team Id
           * @description Team ID associated with the room, if any.
           * @default null
           */
          teamId: string | null;
          /**
           * Title
           * @description Title of the room.
           */
          title: string;
          /**
           * Type
           * @description Type of the room.
           * @enum {string}
           */
          type: "direct" | "group";
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
 * Type of WEBEX's WEBEX_MESSAGING_LIST_TEAM_MEMBERSHIPS tool input.
 */
type WEBEX_MESSAGING_LIST_TEAM_MEMBERSHIPS_INPUT = {
  /**
   * Max
   * @description Limit the maximum number of team membership records returned.
   * @default null
   */
  max: number | null;
  /**
   * Person Email
   * Format: email
   * @description Filter memberships by the member's email address.
   */
  personEmail?: unknown;
  /**
   * Person Id
   * @description Filter memberships by the Webex person ID.
   * @default null
   */
  personId: string | null;
  /**
   * Team Id
   * @description Filter memberships by the Webex team ID.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of WEBEX's WEBEX_MESSAGING_LIST_TEAM_MEMBERSHIPS tool output.
 */
type WEBEX_MESSAGING_LIST_TEAM_MEMBERSHIPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of team membership objects matching the request filters.
       */
      items: {
          /**
           * Created
           * Format: date-time
           * @description Timestamp when the membership was created in ISO 8601 format.
           */
          created: unknown;
          /**
           * Id
           * @description Unique identifier for the membership.
           */
          id: string;
          /**
           * Is Moderator
           * @description True if the person is a team moderator.
           */
          isModerator: boolean;
          /**
           * Is Monitor
           * @description True if the person is monitoring the team.
           * @default null
           */
          isMonitor: boolean | null;
          /**
           * Person Display Name
           * @description Display name of the person.
           */
          personDisplayName: string;
          /**
           * Person Email
           * @description Email address of the person in the membership.
           */
          personEmail: string;
          /**
           * Person Id
           * @description ID of the person in the membership.
           */
          personId: string;
          /**
           * Person Org Id
           * @description Organization ID of the person.
           */
          personOrgId: string;
          /**
           * Team Id
           * @description ID of the team associated with the membership.
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
 * Type of WEBEX's WEBEX_PEOPLE_GET_PERSON tool input.
 */
type WEBEX_PEOPLE_GET_PERSON_INPUT = {
  /**
   * Calling Data
   * @description If true, include the person's calling data in the response.
   * @default null
   */
  callingData: boolean | null;
  /**
   * Person Id
   * @description Unique identifier for the person.
   */
  personId?: string;
};

/**
 * Type of WEBEX's WEBEX_PEOPLE_GET_PERSON tool output.
 */
type WEBEX_PEOPLE_GET_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar
       * @description URL to the person's avatar image.
       * @default null
       */
      avatar: string | null;
      /**
       * Created
       * @description ISO 8601 timestamp when the person was created.
       * @default null
       */
      created: string | null;
      /**
       * Department
       * @description The person's department.
       * @default null
       */
      department: string | null;
      /**
       * Display Name
       * @description The person's full name.
       * @default null
       */
      displayName: string | null;
      /**
       * Emails
       * @description List of the person's email addresses.
       */
      emails: string[];
      /**
       * First Name
       * @description The person's first name.
       * @default null
       */
      firstName: string | null;
      /**
       * Id
       * @description The person's unique identifier.
       */
      id: string;
      /**
       * Invite Pending
       * @description True if the person has a pending invitation.
       * @default null
       */
      invitePending: boolean | null;
      /**
       * Last Activity
       * @description ISO 8601 timestamp of the person's last activity.
       * @default null
       */
      lastActivity: string | null;
      /**
       * Last Name
       * @description The person's last name.
       * @default null
       */
      lastName: string | null;
      /**
       * Licenses
       * @description List of licenses for the person.
       */
      licenses?: string[];
      /**
       * Location
       * @description The person's location.
       * @default null
       */
      location: string | null;
      /**
       * Login Enabled
       * @description True if the person can log in.
       * @default null
       */
      loginEnabled: boolean | null;
      /**
       * Manager
       * @description Manager information for the person.
       * @default null
       */
      manager: {
          /**
           * Display Name
           * @description Manager's display name.
           * @default null
           */
          displayName: string | null;
          /**
           * Id
           * @description Manager's person ID.
           * @default null
           */
          id: string | null;
      } | null;
      /**
       * Nick Name
       * @description The person's nickname.
       * @default null
       */
      nickName: string | null;
      /**
       * Org Id
       * @description Organization ID for the person.
       * @default null
       */
      orgId: string | null;
      /**
       * Phone Numbers
       * @description List of the person's phone numbers.
       */
      phoneNumbers: {
          /**
           * Number
           * @description The phone number.
           * @default null
           */
          number: string | null;
          /**
           * Type
           * @description Type of phone number, e.g., 'work', 'mobile'.
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Roles
       * @description List of roles for the person.
       */
      roles?: string[];
      /**
       * Sip Addresses
       * @description List of the person's SIP addresses.
       */
      sipAddresses?: {
          /**
           * Address
           * @description The SIP address.
           * @default null
           */
          address: string | null;
          /**
           * Type
           * @description Type of SIP address, e.g., 'personal', 'work'.
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Status
       * @description The person's status.
       * @default null
       */
      status: string | null;
      /**
       * Title
       * @description The person's job title.
       * @default null
       */
      title: string | null;
      /**
       * Type
       * @description Person type, e.g., 'person', 'bot', 'appuser'.
       * @default null
       */
      type: string | null;
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
 * Type of WEBEX's WEBEX_PEOPLE_LIST_PEOPLE tool input.
 */
type WEBEX_PEOPLE_LIST_PEOPLE_INPUT = {
  /**
   * Calling Data
   * @description Include Webex Calling user details in the response. Default is false.
   * @default null
   */
  callingData: boolean | null;
  /**
   * Display Name
   * @description List people whose name starts with this string. For non-admin calls, either displayName or email is required.
   * @default null
   */
  displayName: string | null;
  /**
   * Email
   * @description List people with this email address. For non-admin calls, either email or displayName is required.
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description List people by ID. Accepts up to 85 person IDs separated by commas.
   * @default null
   */
  id: string | null;
  /**
   * Location Id
   * @description List people present in this location.
   * @default null
   */
  locationId: string | null;
  /**
   * Max
   * @description Maximum number of people to return per request.
   * @default null
   */
  max: number | null;
  /**
   * Org Id
   * @description List people in this organization. Only admin users of another organization (such as partners) may use this parameter.
   * @default null
   */
  orgId: string | null;
  /**
   * Roles
   * @description List of role IDs separated by commas.
   * @default null
   */
  roles: string | null;
};

/**
 * Type of WEBEX's WEBEX_PEOPLE_LIST_PEOPLE tool output.
 */
type WEBEX_PEOPLE_LIST_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of person objects matching the request filters.
       */
      items: {
          /**
           * Avatar
           * @description URL to the person's avatar in PNG format.
           * @default null
           */
          avatar: string | null;
          /**
           * Created
           * @description The date and time the person was created.
           * @default null
           */
          created: string | null;
          /**
           * Display Name
           * @description The full name of the person.
           * @default null
           */
          displayName: string | null;
          /**
           * Emails
           * @description The email addresses of the person.
           */
          emails: string[];
          /**
           * First Name
           * @description The first name of the person.
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description A unique identifier for the person.
           */
          id: string;
          /**
           * Last Modified
           * @description The date and time the person was last modified.
           * @default null
           */
          lastModified: string | null;
          /**
           * Last Name
           * @description The last name of the person.
           * @default null
           */
          lastName: string | null;
          /**
           * Licenses
           * @description An array of license IDs for the person.
           * @default null
           */
          licenses: string[] | null;
          /**
           * Org Id
           * @description The ID of the organization to which this person belongs.
           * @default null
           */
          orgId: string | null;
          /**
           * Roles
           * @description An array of role IDs for the person.
           * @default null
           */
          roles: string[] | null;
          /**
           * Status
           * @description The person's current presence status.
           * @default null
           */
          status: string | null;
          /**
           * Type
           * @description The type of person account, such as 'person' or 'bot'.
           * @default null
           */
          type: string | null;
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
 * Type of WEBEX's WEBEX_ROOMS_GET_ROOM_DETAILS tool input.
 */
type WEBEX_ROOMS_GET_ROOM_DETAILS_INPUT = {
  /**
   * Room Id
   * @description Unique identifier for the room.
   */
  roomId?: string;
};

/**
 * Type of WEBEX's WEBEX_ROOMS_GET_ROOM_DETAILS tool output.
 */
type WEBEX_ROOMS_GET_ROOM_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the room was created.
       * @default null
       */
      created: string | null;
      /**
       * Creator Id
       * @description ID of the person who created the room.
       * @default null
       */
      creatorId: string | null;
      /**
       * Id
       * @description Unique identifier for the room.
       */
      id: string;
      /**
       * Is Announcement Only
       * @description Whether the room is announcement-only.
       * @default null
       */
      isAnnouncementOnly: boolean | null;
      /**
       * Is Archived
       * @description Whether the room is archived.
       * @default null
       */
      isArchived: boolean | null;
      /**
       * Is Favorite
       * @description Whether the room is marked as a favorite.
       * @default null
       */
      isFavorite: boolean | null;
      /**
       * Is Locked
       * @description Whether the room is locked.
       */
      isLocked: boolean;
      /**
       * Is Public
       * @description Whether the room is public.
       * @default null
       */
      isPublic: boolean | null;
      /**
       * Is Read Only
       * @description Whether the room is read-only.
       * @default null
       */
      isReadOnly: boolean | null;
      /**
       * Last Activity
       * @description ISO 8601 timestamp of the last activity in the room.
       * @default null
       */
      lastActivity: string | null;
      /**
       * Last Seen Activity
       * @description ISO 8601 timestamp when the user last saw activity in the room.
       * @default null
       */
      lastSeenActivity: string | null;
      /**
       * Team Id
       * @description ID of the team associated with the room, if applicable.
       * @default null
       */
      teamId: string | null;
      /**
       * Title
       * @description Title of the room.
       */
      title: string;
      /**
       * Type
       * @description Type of the room (e.g., 'group' or 'direct').
       */
      type: string;
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
 * Type of WEBEX's WEBEX_UPDATE_MEMBERSHIP tool input.
 */
type WEBEX_UPDATE_MEMBERSHIP_INPUT = {
  /**
   * Is Moderator
   * @description Set to true to make the user a room moderator.
   * @default null
   */
  isModerator: boolean | null;
  /**
   * Is Monitor
   * @description Set to true to make the user a room monitor.
   * @default null
   */
  isMonitor: boolean | null;
  /**
   * Membership Id
   * @description Unique identifier of the membership to update.
   */
  membershipId?: string;
};

/**
 * Type of WEBEX's WEBEX_UPDATE_MEMBERSHIP tool output.
 */
type WEBEX_UPDATE_MEMBERSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * Format: date-time
       * @description ISO 8601 timestamp when the membership was created.
       */
      created: unknown;
      /**
       * Id
       * @description Unique identifier for the membership.
       */
      id: string;
      /**
       * Is Moderator
       * @description True if the person is a room moderator.
       */
      isModerator: boolean;
      /**
       * Is Monitor
       * @description True if the person is monitoring the room.
       */
      isMonitor: boolean;
      /**
       * Person Email
       * @description Email address of the person in the membership.
       */
      personEmail: string;
      /**
       * Person Id
       * @description ID of the person in the membership.
       */
      personId: string;
      /**
       * Room Id
       * @description ID of the room associated with the membership.
       */
      roomId: string;
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
 * Type of WEBEX's WEBEX_UPDATE_ROOM tool input.
 */
type WEBEX_UPDATE_ROOM_INPUT = {
  /**
   * Is Locked
   * @description Lock the room to prevent new users from joining.
   * @default null
   */
  isLocked: boolean | null;
  /**
   * Room Id
   * @description Unique identifier of the room to update.
   */
  roomId?: string;
  /**
   * Team Id
   * @description Team ID to associate the room with. Use to move the room under a different team.
   * @default null
   */
  teamId: string | null;
  /**
   * Title
   * @description New user-friendly name for the room.
   * @default null
   */
  title: string | null;
};

/**
 * Type of WEBEX's WEBEX_UPDATE_ROOM tool output.
 */
type WEBEX_UPDATE_ROOM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the room was created.
       * @default null
       */
      created: string | null;
      /**
       * Creator Id
       * @description ID of the person who created the room.
       * @default null
       */
      creatorId: string | null;
      /**
       * Id
       * @description Unique identifier for the room.
       */
      id: string;
      /**
       * Is Announcement Only
       * @description Whether the room is announcement-only.
       * @default null
       */
      isAnnouncementOnly: boolean | null;
      /**
       * Is Archived
       * @description Whether the room is archived.
       * @default null
       */
      isArchived: boolean | null;
      /**
       * Is Favorite
       * @description Whether the room is marked as a favorite.
       * @default null
       */
      isFavorite: boolean | null;
      /**
       * Is Hidden
       * @description Whether the room is hidden.
       * @default null
       */
      isHidden: boolean | null;
      /**
       * Is Locked
       * @description Whether the room is locked.
       * @default null
       */
      isLocked: boolean | null;
      /**
       * Is Moderated
       * @description Whether the room is moderated.
       * @default null
       */
      isModerated: boolean | null;
      /**
       * Is Public
       * @description Whether the room is public.
       * @default null
       */
      isPublic: boolean | null;
      /**
       * Is Read Only
       * @description Whether the room is read-only.
       * @default null
       */
      isReadOnly: boolean | null;
      /**
       * Last Activity
       * @description ISO 8601 timestamp of the last activity in the room.
       * @default null
       */
      lastActivity: string | null;
      /**
       * Last Seen Activity
       * @description ISO 8601 timestamp when the user last saw activity in the room.
       * @default null
       */
      lastSeenActivity: string | null;
      /**
       * Meeting Url
       * @description Meeting URL of the room.
       * @default null
       */
      meetingUrl: string | null;
      /**
       * Sip Address
       * @description SIP address for the room.
       * @default null
       */
      sipAddress: string | null;
      /**
       * Team Id
       * @description ID of the team associated with the room, if applicable.
       * @default null
       */
      teamId: string | null;
      /**
       * Title
       * @description Title of the room.
       */
      title: string;
      /**
       * Type
       * @description Type of the room (e.g., 'group' or 'direct').
       */
      type: string;
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
 * Type of WEBEX's WEBEX_UPDATE_TEAM tool input.
 */
type WEBEX_UPDATE_TEAM_INPUT = {
  /**
   * Name
   * @description New user-friendly name for the team.
   */
  name?: string;
  /**
   * Team Id
   * @description Unique identifier of the team to update.
   */
  teamId?: string;
};

/**
 * Type of WEBEX's WEBEX_UPDATE_TEAM tool output.
 */
type WEBEX_UPDATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the team was created.
       */
      created: string;
      /**
       * Id
       * @description Unique identifier for the team.
       */
      id: string;
      /**
       * Name
       * @description Name of the team.
       */
      name: string;
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
 * Type of WEBEX's WEBEX_WEBHOOKS_CREATE_WEBHOOK tool input.
 */
type WEBEX_WEBHOOKS_CREATE_WEBHOOK_INPUT = {
  /**
   * App Id
   * @description (Internal) Application ID associated with this webhook.
   * @default null
   */
  appId: string | null;
  /**
   * Event
   * @description The event type that triggers the webhook (created, updated, or deleted).
   * @enum {string}
   */
  event?: "created" | "updated" | "deleted";
  /**
   * Filter
   * @description Optional filter expression to scope notifications, e.g., 'roomId=Y2lzY29zcGFyazovL3VzL1JPT00vMTIz'.
   * @default null
   */
  filter: string | null;
  /**
   * Name
   * @description User-friendly name for the webhook.
   */
  name?: string;
  /**
   * Owned By
   * @description Specifies webhook ownership: 'creator' delivers only to creator, 'org' delivers organization-wide.
   * @default null
   * @enum {string|null}
   */
  ownedBy: "creator" | "org" | null;
  /**
   * Resource
   * @description The Webex resource to monitor. One of: messages, memberships, rooms, teams, team_memberships, meetings, meetingRecordings, meetingTranscripts.
   * @enum {string}
   */
  resource?: "messages" | "memberships" | "rooms" | "teams" | "team_memberships" | "meetings" | "meetingRecordings" | "meetingTranscripts";
  /**
   * Secret
   * @description Optional secret used to generate an HMAC payload signature.
   * @default null
   */
  secret: string | null;
  /**
   * Target Url
   * Format: uri
   * @description The URL that will receive POST event notifications.
   */
  targetUrl?: unknown;
};

/**
 * Type of WEBEX's WEBEX_WEBHOOKS_CREATE_WEBHOOK tool output.
 */
type WEBEX_WEBHOOKS_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Id
       * @description Application ID associated with the webhook.
       * @default null
       */
      appId: string | null;
      /**
       * Created
       * @description ISO 8601 timestamp when the webhook was created.
       */
      created: string;
      /**
       * Created By
       * @description User ID who created the webhook.
       */
      createdBy: string;
      /**
       * Event
       * @description Event type subscribed by the webhook.
       */
      event: string;
      /**
       * Filter
       * @description Filter expression applied for the webhook.
       * @default null
       */
      filter: string | null;
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook.
       */
      name: string;
      /**
       * Org Id
       * @description Organization ID for the webhook.
       * @default null
       */
      orgId: string | null;
      /**
       * Owned By
       * @description Ownership of the webhook.
       * @default null
       */
      ownedBy: string | null;
      /**
       * Resource
       * @description Resource type monitored by the webhook.
       */
      resource: string;
      /**
       * Secret
       * @description Secret for payload signature.
       * @default null
       */
      secret: string | null;
      /**
       * Status
       * @description Status of the webhook (e.g., 'active').
       */
      status: string;
      /**
       * Target Url
       * @description The target URL for event notifications.
       */
      targetUrl: string;
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
 * Type of WEBEX's WEBEX_WEBHOOKS_DELETE_WEBHOOK tool input.
 */
type WEBEX_WEBHOOKS_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier for the webhook to delete
   */
  webhookId?: string;
};

/**
 * Type of WEBEX's WEBEX_WEBHOOKS_DELETE_WEBHOOK tool output.
 */
type WEBEX_WEBHOOKS_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the webhook was deleted successfully
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
 * Type of WEBEX's WEBEX_WEBHOOKS_GET_WEBHOOK tool input.
 */
type WEBEX_WEBHOOKS_GET_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description The unique identifier of the webhook to retrieve.
   */
  webhookId?: string;
};

/**
 * Type of WEBEX's WEBEX_WEBHOOKS_GET_WEBHOOK tool output.
 */
type WEBEX_WEBHOOKS_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Actor Id
       * @description The ID of the user who created the webhook.
       */
      actorId: string;
      /**
       * Created
       * @description The date and time the webhook was created in ISO 8601 format.
       */
      created: string;
      /**
       * Event
       * @description The event type for the webhook (e.g., 'created', 'updated').
       */
      event: string;
      /**
       * Filter
       * @description The filter that defines the webhook scope.
       */
      filter: string;
      /**
       * Id
       * @description The unique identifier for the webhook.
       */
      id: string;
      /**
       * Name
       * @description A user-friendly name for the webhook.
       */
      name: string;
      /**
       * Resource
       * @description The resource type for the webhook (e.g., 'messages', 'rooms').
       */
      resource: string;
      /**
       * Secret
       * @description The secret used to generate payload signatures.
       */
      secret: string;
      /**
       * Status
       * @description The status of the webhook (e.g., 'active').
       */
      status: string;
      /**
       * Target Url
       * @description The URL that receives POST requests for each event.
       */
      targetUrl: string;
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
 * Type map of all available tool input types for toolkit "WEBEX".
 */
export type WEBEX_TOOL_INPUTS = {
  CREATE_ROOM: WEBEX_CREATE_ROOM_INPUT
  CREATE_TEAM: WEBEX_CREATE_TEAM_INPUT
  GET_TEAM_DETAILS: WEBEX_GET_TEAM_DETAILS_INPUT
  LIST_TEAMS: WEBEX_LIST_TEAMS_INPUT
  LIST_WEBHOOKS: WEBEX_LIST_WEBHOOKS_INPUT
  MESSAGING_CREATE_MESSAGE: WEBEX_MESSAGING_CREATE_MESSAGE_INPUT
  MESSAGING_CREATE_ROOM: WEBEX_MESSAGING_CREATE_ROOM_INPUT
  MESSAGING_CREATE_TEAM_MEMBERSHIP: WEBEX_MESSAGING_CREATE_TEAM_MEMBERSHIP_INPUT
  MESSAGING_DELETE_MEMBERSHIP: WEBEX_MESSAGING_DELETE_MEMBERSHIP_INPUT
  MESSAGING_DELETE_MESSAGE: WEBEX_MESSAGING_DELETE_MESSAGE_INPUT
  MESSAGING_DELETE_ROOM: WEBEX_MESSAGING_DELETE_ROOM_INPUT
  MESSAGING_GET_MEMBERSHIP_DETAILS: WEBEX_MESSAGING_GET_MEMBERSHIP_DETAILS_INPUT
  MESSAGING_GET_MESSAGE_DETAILS: WEBEX_MESSAGING_GET_MESSAGE_DETAILS_INPUT
  MESSAGING_GET_ROOM_DETAILS: WEBEX_MESSAGING_GET_ROOM_DETAILS_INPUT
  MESSAGING_GET_TEAM_MEMBERSHIP_DETAILS: WEBEX_MESSAGING_GET_TEAM_MEMBERSHIP_DETAILS_INPUT
  MESSAGING_LIST_MEMBERSHIPS: WEBEX_MESSAGING_LIST_MEMBERSHIPS_INPUT
  MESSAGING_LIST_MESSAGES: WEBEX_MESSAGING_LIST_MESSAGES_INPUT
  MESSAGING_LIST_ROOMS: WEBEX_MESSAGING_LIST_ROOMS_INPUT
  MESSAGING_LIST_TEAM_MEMBERSHIPS: WEBEX_MESSAGING_LIST_TEAM_MEMBERSHIPS_INPUT
  PEOPLE_GET_PERSON: WEBEX_PEOPLE_GET_PERSON_INPUT
  PEOPLE_LIST_PEOPLE: WEBEX_PEOPLE_LIST_PEOPLE_INPUT
  ROOMS_GET_ROOM_DETAILS: WEBEX_ROOMS_GET_ROOM_DETAILS_INPUT
  UPDATE_MEMBERSHIP: WEBEX_UPDATE_MEMBERSHIP_INPUT
  UPDATE_ROOM: WEBEX_UPDATE_ROOM_INPUT
  UPDATE_TEAM: WEBEX_UPDATE_TEAM_INPUT
  WEBHOOKS_CREATE_WEBHOOK: WEBEX_WEBHOOKS_CREATE_WEBHOOK_INPUT
  WEBHOOKS_DELETE_WEBHOOK: WEBEX_WEBHOOKS_DELETE_WEBHOOK_INPUT
  WEBHOOKS_GET_WEBHOOK: WEBEX_WEBHOOKS_GET_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WEBEX".
 */
export type WEBEX_TOOL_OUTPUTS = {
  CREATE_ROOM: WEBEX_CREATE_ROOM_OUTPUT
  CREATE_TEAM: WEBEX_CREATE_TEAM_OUTPUT
  GET_TEAM_DETAILS: WEBEX_GET_TEAM_DETAILS_OUTPUT
  LIST_TEAMS: WEBEX_LIST_TEAMS_OUTPUT
  LIST_WEBHOOKS: WEBEX_LIST_WEBHOOKS_OUTPUT
  MESSAGING_CREATE_MESSAGE: WEBEX_MESSAGING_CREATE_MESSAGE_OUTPUT
  MESSAGING_CREATE_ROOM: WEBEX_MESSAGING_CREATE_ROOM_OUTPUT
  MESSAGING_CREATE_TEAM_MEMBERSHIP: WEBEX_MESSAGING_CREATE_TEAM_MEMBERSHIP_OUTPUT
  MESSAGING_DELETE_MEMBERSHIP: WEBEX_MESSAGING_DELETE_MEMBERSHIP_OUTPUT
  MESSAGING_DELETE_MESSAGE: WEBEX_MESSAGING_DELETE_MESSAGE_OUTPUT
  MESSAGING_DELETE_ROOM: WEBEX_MESSAGING_DELETE_ROOM_OUTPUT
  MESSAGING_GET_MEMBERSHIP_DETAILS: WEBEX_MESSAGING_GET_MEMBERSHIP_DETAILS_OUTPUT
  MESSAGING_GET_MESSAGE_DETAILS: WEBEX_MESSAGING_GET_MESSAGE_DETAILS_OUTPUT
  MESSAGING_GET_ROOM_DETAILS: WEBEX_MESSAGING_GET_ROOM_DETAILS_OUTPUT
  MESSAGING_GET_TEAM_MEMBERSHIP_DETAILS: WEBEX_MESSAGING_GET_TEAM_MEMBERSHIP_DETAILS_OUTPUT
  MESSAGING_LIST_MEMBERSHIPS: WEBEX_MESSAGING_LIST_MEMBERSHIPS_OUTPUT
  MESSAGING_LIST_MESSAGES: WEBEX_MESSAGING_LIST_MESSAGES_OUTPUT
  MESSAGING_LIST_ROOMS: WEBEX_MESSAGING_LIST_ROOMS_OUTPUT
  MESSAGING_LIST_TEAM_MEMBERSHIPS: WEBEX_MESSAGING_LIST_TEAM_MEMBERSHIPS_OUTPUT
  PEOPLE_GET_PERSON: WEBEX_PEOPLE_GET_PERSON_OUTPUT
  PEOPLE_LIST_PEOPLE: WEBEX_PEOPLE_LIST_PEOPLE_OUTPUT
  ROOMS_GET_ROOM_DETAILS: WEBEX_ROOMS_GET_ROOM_DETAILS_OUTPUT
  UPDATE_MEMBERSHIP: WEBEX_UPDATE_MEMBERSHIP_OUTPUT
  UPDATE_ROOM: WEBEX_UPDATE_ROOM_OUTPUT
  UPDATE_TEAM: WEBEX_UPDATE_TEAM_OUTPUT
  WEBHOOKS_CREATE_WEBHOOK: WEBEX_WEBHOOKS_CREATE_WEBHOOK_OUTPUT
  WEBHOOKS_DELETE_WEBHOOK: WEBEX_WEBHOOKS_DELETE_WEBHOOK_OUTPUT
  WEBHOOKS_GET_WEBHOOK: WEBEX_WEBHOOKS_GET_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WEBEX toolkit.
 */
export const WEBEX = {
  slug: "webex",
  tools: {
    /**
     * Tool to create a new room. use when you need to spin up a dedicated space for team collaboration or topic discussion.
     */
    CREATE_ROOM: "WEBEX_CREATE_ROOM",
    /**
     * Tool to create a new team. use when you need to group rooms under a shared team.
     */
    CREATE_TEAM: "WEBEX_CREATE_TEAM",
    /**
     * Tool to retrieve details for a specific team by teamid. use when you need full metadata of a team before performing team-related operations.
     */
    GET_TEAM_DETAILS: "WEBEX_GET_TEAM_DETAILS",
    /**
     * Tool to list teams. use when you need to retrieve the teams the authenticated user is a member of.
     */
    LIST_TEAMS: "WEBEX_LIST_TEAMS",
    /**
     * Tool to list webhooks. use after authentication to retrieve webhooks filtered by max or ownership.
     */
    LIST_WEBHOOKS: "WEBEX_LIST_WEBHOOKS",
    /**
     * Tool to post a message to a webex room or person. use when you have a target roomid or private recipient and want to send text, markdown, files, or card attachments.
     */
    MESSAGING_CREATE_MESSAGE: "WEBEX_MESSAGING_CREATE_MESSAGE",
    /**
     * Tool to create a new room. use to create a dedicated space for collaboration after authentication.
     */
    MESSAGING_CREATE_ROOM: "WEBEX_MESSAGING_CREATE_ROOM",
    /**
     * Tool to add a person to a webex team by personid or personemail. use when granting a user access to a team; requires teamid and one of personid or personemail.
     */
    MESSAGING_CREATE_TEAM_MEMBERSHIP: "WEBEX_MESSAGING_CREATE_TEAM_MEMBERSHIP",
    /**
     * Tool to delete a webex membership by its unique identifier. use when you need to remove a member from a space after confirming the membership exists. example: "delete the membership with id y2lzy29zcgfjmdcznza2njg0zdliy2yxnde4ndqyyzq5ndqzotexytk4".
     */
    MESSAGING_DELETE_MEMBERSHIP: "WEBEX_MESSAGING_DELETE_MEMBERSHIP",
    /**
     * Tool to delete a webex message by its unique identifier. use after confirming the messageid to remove unintended or obsolete messages. example: "delete the message with id y2lzy29zcgfyazovl21lc3nhz2uvywjjmtizndu2nzg5".
     */
    MESSAGING_DELETE_MESSAGE: "WEBEX_MESSAGING_DELETE_MESSAGE",
    /**
     * Tool to delete a webex room by its id. use after confirming the roomid when you need to permanently remove or archive a space. example: "delete the room with id y2lzy29..."
     */
    MESSAGING_DELETE_ROOM: "WEBEX_MESSAGING_DELETE_ROOM",
    /**
     * Tool to retrieve details for a specific membership. use when you need metadata for a membership by its id.
     */
    MESSAGING_GET_MEMBERSHIP_DETAILS: "WEBEX_MESSAGING_GET_MEMBERSHIP_DETAILS",
    /**
     * Tool to retrieve details for a specific message. use when you need full content and metadata by message id.
     */
    MESSAGING_GET_MESSAGE_DETAILS: "WEBEX_MESSAGING_GET_MESSAGE_DETAILS",
    /**
     * Tool to retrieve details for a specific room. use when you need full metadata of a specific room before posting messages or updating settings.
     */
    MESSAGING_GET_ROOM_DETAILS: "WEBEX_MESSAGING_GET_ROOM_DETAILS",
    /**
     * Tool to retrieve details for a specific team membership. use when you need metadata for a team membership by its id.
     */
    MESSAGING_GET_TEAM_MEMBERSHIP_DETAILS: "WEBEX_MESSAGING_GET_TEAM_MEMBERSHIP_DETAILS",
    /**
     * Tool to list memberships in a webex room. use when you need to retrieve or filter membership details by roomid, personid, personemail, or teamid. supports limiting the response size.
     */
    MESSAGING_LIST_MEMBERSHIPS: "WEBEX_MESSAGING_LIST_MEMBERSHIPS",
    /**
     * Tool to list messages in a room. use when you need to retrieve chat history filtered by room, time window, or mentions.
     */
    MESSAGING_LIST_MESSAGES: "WEBEX_MESSAGING_LIST_MESSAGES",
    /**
     * Tool to list rooms the authenticated user belongs to. use after authentication when needing to retrieve spaces filtered by team, type, or sorted. example: "list my group rooms sorted by last activity."
     */
    MESSAGING_LIST_ROOMS: "WEBEX_MESSAGING_LIST_ROOMS",
    /**
     * Tool to list team memberships. use when you need to retrieve or filter team membership details by teamid, personid, or personemail, with optional max limit. use after confirming the team or person context.
     */
    MESSAGING_LIST_TEAM_MEMBERSHIPS: "WEBEX_MESSAGING_LIST_TEAM_MEMBERSHIPS",
    /**
     * Tool to get details for a specific person. use when you have a person's id and need full profile information. call after confirming the person's id.
     */
    PEOPLE_GET_PERSON: "WEBEX_PEOPLE_GET_PERSON",
    /**
     * Tool to list people in your organization. use when you need to retrieve people filtered by email, display name, ids, roles, or location.
     */
    PEOPLE_LIST_PEOPLE: "WEBEX_PEOPLE_LIST_PEOPLE",
    /**
     * Tool to retrieve details for a specific room. use when you need full metadata of a room before posting messages or updating settings.
     */
    ROOMS_GET_ROOM_DETAILS: "WEBEX_ROOMS_GET_ROOM_DETAILS",
    /**
     * Tool to update a membership by membershipid. use when modifying a member's moderator or monitor status in a webex room.
     */
    UPDATE_MEMBERSHIP: "WEBEX_UPDATE_MEMBERSHIP",
    /**
     * Tool to update a room's title and settings. use when you need to rename, lock/unlock, or reassign a webex space.
     */
    UPDATE_ROOM: "WEBEX_UPDATE_ROOM",
    /**
     * Tool to update a team's name by teamid. use when you need to rename a webex team. example: "change team 12345 name to 'project x team'".
     */
    UPDATE_TEAM: "WEBEX_UPDATE_TEAM",
    /**
     * Tool to create a new webhook for events. use when you need to register for webex event notifications.
     */
    WEBHOOKS_CREATE_WEBHOOK: "WEBEX_WEBHOOKS_CREATE_WEBHOOK",
    /**
     * Tool to delete a specific webhook. use when you need to remove an existing webhook by its id after confirming the identifier.
     */
    WEBHOOKS_DELETE_WEBHOOK: "WEBEX_WEBHOOKS_DELETE_WEBHOOK",
    /**
     * Tool to get details for a specific webhook. use when you need to inspect a webhook's configuration before taking action.
     */
    WEBHOOKS_GET_WEBHOOK: "WEBEX_WEBHOOKS_GET_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WEBEX".
 */
export type WEBEX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WEBEX".
 */
export type WEBEX_TRIGGER_EVENTS = {}
