// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_ADD_MEMBER_TO_TEAM tool input.
 */
type MICROSOFT_TEAMS_ADD_MEMBER_TO_TEAM_INPUT = {
  /**
   * Roles
   * @description Roles to assign to the member. Only 'owner' is supported. Omit or leave empty to add as a standard member.
   */
  roles?: "owner"[];
  /**
   * Team Id
   * @description The unique ID (GUID) of the Microsoft Team to which the member will be added.
   */
  team_id?: string;
  /**
   * User Id
   * @description The user's Graph ID (GUID) or userPrincipalName (email) to add to the team.
   */
  user_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_ADD_MEMBER_TO_TEAM tool output.
 */
type MICROSOFT_TEAMS_ADD_MEMBER_TO_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Display Name
       * @description Display name of the added user.
       */
      displayName: string;
      /**
       * Email
       * @description Email address of the added user, if available.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description The ID of the conversation member assigned by Graph.
       */
      id: string;
      /**
       * Roles
       * @description Roles assigned to the member.
       */
      roles: string[];
      /**
       * User Id
       * @description The Graph user ID of the added member.
       */
      userId: string;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_ARCHIVE_TEAM tool input.
 */
type MICROSOFT_TEAMS_ARCHIVE_TEAM_INPUT = {
  /**
   * Should Set Spo Site Read Only For Members
   * @description If true, sets the SharePoint site to read-only for team members when archiving.
   * @default false
   */
  should_set_spo_site_read_only_for_members: boolean;
  /**
   * Team Id
   * @description The Microsoft Teams team GUID to archive.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_ARCHIVE_TEAM tool output.
 */
type MICROSOFT_TEAMS_ARCHIVE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the archive operation (202 indicates accepted).
       */
      status_code: number;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_CHATS_GET_ALL_CHATS tool input.
 */
type MICROSOFT_TEAMS_CHATS_GET_ALL_CHATS_INPUT = {
  /**
   * Filter
   * @description An OData filter query string to apply to the chat list (e.g., "topic eq 'Project Updates'"). Do not include '$filter=' in the string. This enables retrieving chats that match specific criteria.
   * @default
   */
  filter: string;
  /**
   * Select
   * @description A list of specific Microsoft Graph chat resource properties to retrieve (e.g., 'id', 'topic'). If omitted or empty, a default set of properties is returned. Each string in the list should be a valid property name.
   * @default []
   */
  select: string[];
  /**
   * Top
   * @description The maximum number of chats to retrieve in a single API call, used for pagination. Default is 50. Must be a positive integer.
   * @default 50
   */
  top: number;
  /**
   * User Id
   * @description The ID or user principal name (UPN) of the user whose chats are to be retrieved. Use 'me' to specify the currently authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_CHATS_GET_ALL_CHATS tool output.
 */
type MICROSOFT_TEAMS_CHATS_GET_ALL_CHATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary representing the full OData response from the Microsoft Graph API. This typically includes a 'value' field containing an array of chat objects, and may also contain '@odata.context' for metadata and '@odata.nextLink' for pagination if more results are available.
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_CHATS_GET_ALL_MESSAGES tool input.
 */
type MICROSOFT_TEAMS_CHATS_GET_ALL_MESSAGES_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier of the Microsoft Teams chat.
   */
  chat_id?: string;
  /**
   * Filter
   * @description OData v4.0 filter query string for messages. If empty, no filtering is applied.
   * @default
   */
  filter: string;
  /**
   * Select
   * @description Message properties to return (e.g., 'id', 'body'). Optimizes the request. If empty, a default set of properties is returned.
   * @default []
   */
  select: string[];
  /**
   * Top
   * @description Maximum number of messages to retrieve per page. Used for pagination.
   * @default 50
   */
  top: number;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_CHATS_GET_ALL_MESSAGES tool output.
 */
type MICROSOFT_TEAMS_CHATS_GET_ALL_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description API response from Microsoft Graph, typically including '@odata.context' and a 'value' list of message objects.
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_CREATE_MEETING tool input.
 */
type MICROSOFT_TEAMS_CREATE_MEETING_INPUT = {
  /**
   * End Date Time
   * Format: date-time
   * @description The end date and time of the meeting, specified in ISO 8601 format (e.g., '2024-08-15T11:00:00Z'). Must be after start_date_time.
   */
  end_date_time?: string;
  /**
   * Is Passcode Required
   * @description An optional boolean indicating whether a passcode should be required to join this meeting. If not specified, the organization's default policy applies.
   * @default null
   */
  is_passcode_required: boolean | null;
  /**
   * Participants
   * @description An optional list of participants to invite to the meeting. Each participant is defined by their user ID and role.
   * @default null
   */
  participants: {
      /**
       * Role
       * @description Specifies the role of the participant in the meeting. Defaults to 'attendee'. Allowed values are 'attendee', 'presenter', or 'coorganizer'.
       * @default attendee
       * @enum {string}
       */
      role: "attendee" | "presenter" | "coorganizer";
      /**
       * User Id
       * @description The unique identifier (GUID) of the Microsoft Teams user to be added as a participant.
       */
      user_id: string;
  }[] | null;
  /**
   * Start Date Time
   * Format: date-time
   * @description The start date and time of the meeting, specified in ISO 8601 format (e.g., '2024-08-15T10:00:00Z').
   */
  start_date_time?: string;
  /**
   * Subject
   * @description The subject or title for the online meeting.
   */
  subject?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_CREATE_MEETING tool output.
 */
type MICROSOFT_TEAMS_CREATE_MEETING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The raw JSON response received from the Microsoft Graph API upon successful creation of the meeting. This includes details like the meeting join URL and other meeting properties.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_CREATE_TEAM tool input.
 */
type MICROSOFT_TEAMS_CREATE_TEAM_INPUT = {
  /**
   * Description
   * @description Description for the new team.
   * @default null
   */
  description: string | null;
  /**
   * Display Name
   * @description Name of the new team.
   */
  displayName?: string;
  /**
   * First Channel Name
   * @description Name of the first channel created; defaults to 'General' if omitted.
   * @default null
   */
  firstChannelName: string | null;
  /**
   * Members
   * @description List of initial members to add to the team. Each must include '@odata.type', roles, and 'user@odata.bind'.
   * @default null
   */
  members: {
      /**
       * Odata Type
       * @description Resource type for conversation member; must be '#microsoft.graph.aadUserConversationMember'.
       * @constant
       */
      odata_type: "#microsoft.graph.aadUserConversationMember";
      /** Roles */
      roles: string[];
      /**
       * User Odata Bind
       * @description URL to the user resource, e.g. https://graph.microsoft.com/v1.0/users('{id}').
       */
      user_odata_bind: string;
  }[] | null;
  /**
   * Template Odata Bind
   * @description URL of the Teams template to apply.
   * @default null
   */
  template_odata_bind: string | null;
  /**
   * Visibility
   * @enum {string|null}
   */
  visibility?: "private" | "public" | null;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_CREATE_TEAM tool output.
 */
type MICROSOFT_TEAMS_CREATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Location
       * @description URL of the created team (from 'Content-Location' header).
       * @default null
       */
      content_location: string | null;
      /**
       * Location
       * @description URL to check the status of the team creation operation (from 'Location' header).
       */
      location: string;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_DELETE_TEAM tool input.
 */
type MICROSOFT_TEAMS_DELETE_TEAM_INPUT = {
  /**
   * Team Id
   * @description The unique identifier (GUID) of the Microsoft Teams team to delete.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_DELETE_TEAM tool output.
 */
type MICROSOFT_TEAMS_DELETE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the team was successfully deleted.
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_GET_CHANNEL tool input.
 */
type MICROSOFT_TEAMS_GET_CHANNEL_INPUT = {
  /**
   * Channel Id
   * @description The unique identifier of the channel within the specified team.
   */
  channel_id?: string;
  /**
   * Team Id
   * @description The unique identifier of the Microsoft Teams team.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_GET_CHANNEL tool output.
 */
type MICROSOFT_TEAMS_GET_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created Date Time
       * @description Timestamp when the channel was created (ISO 8601).
       */
      createdDateTime: string;
      /**
       * Description
       * @description Description of the channel.
       * @default null
       */
      description: string | null;
      /**
       * Display Name
       * @description Display name of the channel.
       */
      displayName: string;
      /**
       * Email
       * @description Email address of the channel, if enabled.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the channel.
       */
      id: string;
      /**
       * Membership Type
       * @description Type of the channel: standard, private, or shared.
       */
      membershipType: string;
      /**
       * Web Url
       * @description URL to open the channel in Microsoft Teams.
       */
      webUrl: string;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_GET_CHAT_MESSAGE tool input.
 */
type MICROSOFT_TEAMS_GET_CHAT_MESSAGE_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier of the Microsoft Teams chat that contains the message.
   */
  chat_id?: string;
  /**
   * Message Id
   * @description Unique identifier of the chat message to retrieve.
   */
  message_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_GET_CHAT_MESSAGE tool output.
 */
type MICROSOFT_TEAMS_GET_CHAT_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description The retrieved chat message details.
       */
      message: {
          /**
           * Attachments
           * @description List of attachments attached to the message, if any.
           */
          attachments?: {
              [key: string]: unknown;
          }[];
          /**
           * Body
           * @description JSON object of the message body, including contentType and content.
           */
          body: {
              [key: string]: unknown;
          };
          /**
           * Chat Id
           * @description Identifier of the chat containing this message.
           */
          chatId: string;
          /**
           * Created Date Time
           * @description UTC timestamp when the message was created.
           */
          createdDateTime: string;
          /**
           * Deleted Date Time
           * @description UTC timestamp when the message was deleted, if deleted.
           * @default null
           */
          deletedDateTime: string | null;
          /**
           * Id
           * @description Unique identifier of the chat message.
           */
          id: string;
          /**
           * Importance
           * @description Importance level of the message: 'normal', 'high', or 'urgent'.
           * @default null
           */
          importance: string | null;
          /**
           * Last Edited Date Time
           * @description UTC timestamp when the message was last edited, if available.
           * @default null
           */
          lastEditedDateTime: string | null;
          /**
           * Last Modified Date Time
           * @description UTC timestamp when the message was last modified, if edited.
           * @default null
           */
          lastModifiedDateTime: string | null;
          /**
           * Locale
           * @description Locale set by the client for the message.
           * @default null
           */
          locale: string | null;
          /**
           * Sender
           * @description JSON object representing the message sender.
           * @default null
           */
          sender: {
              [key: string]: unknown;
          } | null;
          /**
           * Subject
           * @description Subject of the message, if any.
           * @default null
           */
          subject: string | null;
          /**
           * Summary
           * @description Summary text of the message.
           * @default null
           */
          summary: string | null;
          /**
           * Web Url
           * @description URL to view the message in Microsoft Teams.
           * @default null
           */
          webUrl: string | null;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_GET_TEAM tool input.
 */
type MICROSOFT_TEAMS_GET_TEAM_INPUT = {
  /**
   * Team Id
   * @description GUID of the Microsoft Teams team to retrieve.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_GET_TEAM tool output.
 */
type MICROSOFT_TEAMS_GET_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Classification
       * @description Classification of the team.
       * @default null
       */
      classification: string | null;
      /**
       * Description
       * @description Description of the team, if any.
       * @default null
       */
      description: string | null;
      /**
       * Discovery Settings
       * @description Discovery settings for the team.
       */
      discovery_settings: {
          /**
           * Show In Teams Search And Suggestions
           * @description Whether the team shows in Teams search and suggestions.
           */
          show_in_teams_search_and_suggestions: boolean;
      };
      /**
       * Display Name
       * @description Display name of the team.
       */
      display_name: string;
      /**
       * Fun Settings
       * @description Fun settings for the team.
       */
      fun_settings: {
          /**
           * Allow Giphy
           * @description Whether Giphy GIFs are allowed in the team.
           */
          allow_giphy: boolean;
          /**
           * Giphy Content Rating
           * @description Content rating for Giphy GIFs: 'Moderate' or 'Strict'.
           */
          giphy_content_rating: string;
      };
      /**
       * Guest Settings
       * @description Guest settings for the team.
       */
      guest_settings: {
          /**
           * Allow Create Update Channels
           * @description Whether guests can create or update channels in the team.
           */
          allow_create_update_channels: boolean;
          /**
           * Allow Delete Channels
           * @description Whether guests can delete channels in the team.
           */
          allow_delete_channels: boolean;
      };
      /**
       * Id
       * @description Unique identifier of the team.
       */
      id: string;
      /**
       * Internal Id
       * @description Internal identifier of the team.
       * @default null
       */
      internal_id: string | null;
      /**
       * Is Archived
       * @description Whether the team is archived.
       * @default null
       */
      is_archived: boolean | null;
      /**
       * Member Settings
       * @description Member settings for the team.
       */
      member_settings: {
          /**
           * Allow Create Update Channels
           * @description Whether team members can create or update channels.
           */
          allow_create_update_channels: boolean;
          /**
           * Allow Delete Channels
           * @description Whether team members can delete channels.
           */
          allow_delete_channels: boolean;
      };
      /**
       * Messaging Settings
       * @description Messaging settings for the team.
       */
      messaging_settings: {
          /**
           * Allow Channel Mentions
           * @description Whether @channel mentions are enabled.
           */
          allow_channel_mentions: boolean;
          /**
           * Allow Owner Delete Messages
           * @description Whether owners can delete any messages.
           */
          allow_owner_delete_messages: boolean;
          /**
           * Allow Team Mentions
           * @description Whether @team mentions are enabled.
           */
          allow_team_mentions: boolean;
          /**
           * Allow User Delete Messages
           * @description Whether users can delete their messages.
           */
          allow_user_delete_messages: boolean;
          /**
           * Allow User Edit Messages
           * @description Whether users can edit their messages.
           */
          allow_user_edit_messages: boolean;
      };
      /**
       * Specialization
       * @description Team specialization.
       * @default null
       */
      specialization: string | null;
      /**
       * Visibility
       * @description Visibility of the team.
       * @default null
       */
      visibility: string | null;
      /**
       * Web Url
       * @description Web URL for the team.
       * @default null
       */
      web_url: string | null;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_LIST_MESSAGE_REPLIES tool input.
 */
type MICROSOFT_TEAMS_LIST_MESSAGE_REPLIES_INPUT = {
  /**
   * Channel Id
   * @description Unique identifier of the channel within the team.
   */
  channel_id?: string;
  /**
   * Message Id
   * @description Unique identifier of the channel message whose replies are to be listed.
   */
  message_id?: string;
  /**
   * Team Id
   * @description Unique identifier (GUID) of the Microsoft Teams team.
   */
  team_id?: string;
  /**
   * Top
   * @description Maximum number of replies to return per page (1-50).
   * @default 50
   */
  top: number;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_LIST_MESSAGE_REPLIES tool output.
 */
type MICROSOFT_TEAMS_LIST_MESSAGE_REPLIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Link
       * @description URL to fetch the next page of replies if more are available; null otherwise.
       * @default null
       */
      next_link: string | null;
      /**
       * Replies
       * @description List of chat message replies.
       */
      replies: {
          /**
           * Attachments
           * @description List of attachments.
           */
          attachments?: {
              [key: string]: unknown;
          }[];
          /**
           * Body
           * @description Message body including contentType and content.
           */
          body: {
              [key: string]: unknown;
          };
          /**
           * Channel Identity
           * @description Channel identity details.
           * @default null
           */
          channelIdentity: {
              [key: string]: unknown;
          } | null;
          /**
           * Chat Id
           * @description Chat ID if applicable.
           * @default null
           */
          chatId: string | null;
          /**
           * Created Date Time
           * @description UTC timestamp when reply was created.
           * @default null
           */
          createdDateTime: string | null;
          /**
           * Deleted Date Time
           * @description UTC timestamp when reply was deleted.
           * @default null
           */
          deletedDateTime: string | null;
          /**
           * Etag
           * @description Version identifier for the reply.
           */
          etag: string;
          /**
           * Event Detail
           * @description Event-specific details, if any.
           * @default null
           */
          eventDetail: {
              [key: string]: unknown;
          } | null;
          /**
           * From
           * @description Identity of the sender.
           */
          from: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the reply.
           */
          id: string;
          /**
           * Importance
           * @description Importance level, e.g., 'normal'.
           * @default null
           */
          importance: string | null;
          /**
           * Last Edited Date Time
           * @description UTC timestamp when reply was last edited.
           * @default null
           */
          lastEditedDateTime: string | null;
          /**
           * Last Modified Date Time
           * @description UTC timestamp when reply was last modified.
           * @default null
           */
          lastModifiedDateTime: string | null;
          /**
           * Locale
           * @description Locale of the reply.
           * @default null
           */
          locale: string | null;
          /**
           * Mentions
           * @description List of mentions.
           */
          mentions?: {
              [key: string]: unknown;
          }[];
          /**
           * Message History
           * @description Edit history of the message.
           */
          messageHistory?: {
              [key: string]: unknown;
          }[];
          /**
           * Message Type
           * @description Type of message, e.g., 'message'.
           * @default null
           */
          messageType: string | null;
          /**
           * Policy Violation
           * @description Policy violation details, if any.
           * @default null
           */
          policyViolation: {
              [key: string]: unknown;
          } | null;
          /**
           * Reactions
           * @description List of reactions.
           */
          reactions?: {
              [key: string]: unknown;
          }[];
          /**
           * Reply To Id
           * @description Identifier of the parent message.
           */
          replyToId: string;
          /**
           * Subject
           * @description Subject of the reply, if any.
           * @default null
           */
          subject: string | null;
          /**
           * Summary
           * @description Summary text of the reply.
           * @default null
           */
          summary: string | null;
          /**
           * Web Url
           * @description URL to view the reply in Teams.
           * @default null
           */
          webUrl: string | null;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_LIST_TEAMS_TEMPLATES tool input.
 */
type MICROSOFT_TEAMS_LIST_TEAMS_TEMPLATES_INPUT = {
  /**
   * Count
   * @description If true, include a count of total matching templates in the response.
   * @default false
   */
  count: boolean;
  /**
   * Filter
   * @description OData filter expression to filter the templates (e.g., "startsWith(displayName,'Template')").
   * @default
   */
  filter: string;
  /**
   * Orderby
   * @description Comma-separated properties and directions to order the results by (e.g., 'displayName desc').
   * @default
   */
  orderby: string;
  /**
   * Select
   * @description Comma-separated template properties to include in the response (e.g., 'id,displayName,description'). If empty, default properties are returned.
   * @default
   */
  select: string;
  /**
   * Skip
   * @description Number of templates to skip for pagination.
   * @default null
   */
  skip: number | null;
  /**
   * Top
   * @description Maximum number of templates to return (1–999).
   * @default null
   */
  top: number | null;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_LIST_TEAMS_TEMPLATES tool output.
 */
type MICROSOFT_TEAMS_LIST_TEAMS_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total count of matching templates if count=true was specified; otherwise null.
       * @default null
       */
      count: number | null;
      /**
       * Next Link
       * @description URL to fetch the next page of results if pagination is in effect; null if no further pages.
       * @default null
       */
      next_link: string | null;
      /**
       * Templates
       * @description List of Microsoft Teams templates.
       */
      templates: {
          /**
           * Definitions
           * @description List of template definitions available for this template.
           */
          definitions: {
              /**
               * Description
               * @description Description of the template definition, if provided.
               * @default null
               */
              description: string | null;
              /**
               * Display Name
               * @description Display name of the template definition.
               */
              display_name: string;
              /**
               * Id
               * @description Unique identifier of the template definition.
               */
              id: string;
          }[];
          /**
           * Description
           * @description Description of the template, if available.
           * @default null
           */
          description: string | null;
          /**
           * Display Name
           * @description Display name of the template.
           */
          display_name: string;
          /**
           * Id
           * @description Unique identifier of the template.
           */
          id: string;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_LIST_TEAM_MEMBERS tool input.
 */
type MICROSOFT_TEAMS_LIST_TEAM_MEMBERS_INPUT = {
  /**
   * Team Id
   * @description GUID of the Microsoft Teams team to retrieve members from.
   */
  team_id?: string;
  /**
   * Top
   * @description Optional maximum number of members to return (1–999).
   * @default null
   */
  top: number | null;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_LIST_TEAM_MEMBERS tool output.
 */
type MICROSOFT_TEAMS_LIST_TEAM_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description List of `MemberInfo` objects representing team members.
       */
      members: {
          /**
           * Display Name
           * @description Display name of the team member.
           */
          display_name: string;
          /**
           * Email
           * @description Email address of the team member, if available.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier of the team member.
           */
          id: string;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_LIST_USERS tool input.
 */
type MICROSOFT_TEAMS_LIST_USERS_INPUT = {
  /**
   * $Expand
   * @description OData expand related entities (e.g., `manager`).
   * @default null
   */
  $expand: string | null;
  /**
   * $Filter
   * @description OData filter to refine results by property values (e.g., `startswith(displayName,'A')`).
   * @default null
   */
  $filter: string | null;
  /**
   * $Orderby
   * @description OData orderby clause to sort results (e.g., `displayName desc`).
   * @default null
   */
  $orderby: string | null;
  /**
   * $Select
   * @description Comma-separated list of user properties to include (e.g., `id,displayName,mail`).
   * @default null
   */
  $select: string | null;
  /**
   * $Skip
   * @description Number of users to skip for pagination.
   * @default null
   */
  $skip: number | null;
  /**
   * $Top
   * @description Maximum number of users to return per page (1-999).
   * @default null
   */
  $top: number | null;
  /**
   * Consistency Level
   * @description Set to 'eventual' when using advanced queries with $count.
   * @default null
   */
  consistencyLevel: string | null;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_LIST_USERS tool output.
 */
type MICROSOFT_TEAMS_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Link
       * @description URL to fetch the next page of users, if any.
       * @default null
       */
      next_link: string | null;
      /**
       * Users
       * @description List of users retrieved.
       */
      users: {
          /**
           * Department
           * @description Department of the user.
           * @default null
           */
          department: string | null;
          /**
           * Display Name
           * @description Display name of the user.
           * @default null
           */
          display_name: string | null;
          /**
           * Given Name
           * @description Given (first) name of the user.
           * @default null
           */
          given_name: string | null;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Job Title
           * @description Job title of the user.
           * @default null
           */
          job_title: string | null;
          /**
           * Mail
           * @description Email address of the user.
           * @default null
           */
          mail: string | null;
          /**
           * Surname
           * @description Surname (last) name of the user.
           * @default null
           */
          surname: string | null;
          /**
           * User Principal Name
           * @description User principal name (sign-in name).
           * @default null
           */
          user_principal_name: string | null;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_CREATE_CHANNEL tool input.
 */
type MICROSOFT_TEAMS_TEAMS_CREATE_CHANNEL_INPUT = {
  /**
   * Description
   * @description An optional, user-friendly description of the channel's purpose. Maximum length is 1024 characters.
   * @default
   */
  description: string;
  /**
   * Membership Type
   * @description Membership type determining channel accessibility: 'standard' is accessible to all team members, 'private' is only accessible to a specific subset of team members, and 'shared' can be shared with people outside the team or organization (requires appropriate policies).
   * @default standard
   */
  membership_type: string;
  /**
   * Name
   * @description The display name for the new channel. Maximum length is 50 characters. Cannot contain characters ~ # % & * { } + / \ : < > ? | ' " or start with an underscore or period, or end with a period.
   */
  name?: string;
  /**
   * Team Id
   * @description The GUID of the existing Microsoft Teams team where the new channel will be created.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_CREATE_CHANNEL tool output.
 */
type MICROSOFT_TEAMS_TEAMS_CREATE_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description The description of the newly created channel, if one was provided during creation.
       */
      description: string;
      /**
       * Display Name
       * @description The display name of the newly created channel.
       */
      display_name: string;
      /**
       * Id
       * @description The unique identifier (ID) of the newly created channel.
       */
      id: string;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_CREATE_CHAT tool input.
 */
type MICROSOFT_TEAMS_TEAMS_CREATE_CHAT_INPUT = {
  /**
   * Chat Type
   * @description Type of chat. If 'oneOnOne' for members with an existing chat, that chat's details are returned.
   */
  chatType?: string;
  /**
   * Members
   * @description List of members. For 'oneOnOne' chats, exactly two members are expected. For 'group' chats, at least one member must have the 'owner' role.
   */
  members?: {
      /**
       * Display Name
       * @description Display name of the conversation member, shown in the Teams UI.
       */
      displayName: string;
      /**
       * Odata Type
       * @description Identifies the object as an Azure AD user conversation member.
       * @default #microsoft.graph.aadUserConversationMember
       */
      odata_type: string;
      /**
       * Roles
       * @description Roles for this member. Group chats require at least one 'owner'.
       */
      roles: string[];
      /**
       * Tenant Id
       * @description Azure AD tenant ID of the user, required if the user is an external guest.
       * @default null
       */
      tenantId: string | null;
      /**
       * User Odata Bind
       * @description Binding URL for the user resource in Microsoft Graph.
       */
      user_odata_bind: string;
      /**
       * Visible History Start Date Time
       * Format: date-time
       * @description ISO 8601 timestamp determining how far back the member can view chat history; defaults to when they were added.
       * @default null
       */
      visibleHistoryStartDateTime: string | null;
  }[];
  /**
   * Topic
   * @description Subject or title for a group chat; ignored for 'oneOnOne' chats.
   * @default null
   */
  topic: string | null;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_CREATE_CHAT tool output.
 */
type MICROSOFT_TEAMS_TEAMS_CREATE_CHAT_OUTPUT = {
  /**
   * Data
   * @description Complete JSON response from the API representing the created or existing chat.
   */
  data?: unknown;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_GET_MESSAGE tool input.
 */
type MICROSOFT_TEAMS_TEAMS_GET_MESSAGE_INPUT = {
  /**
   * Channel Id
   * @description ID of the Channel within the specified Team that contains the message.
   */
  channel_id?: string;
  /**
   * Message Id
   * @description ID of the message to retrieve from the channel.
   */
  message_id?: string;
  /**
   * Team Id
   * @description ID of the Team containing the channel where the message is located.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_GET_MESSAGE tool output.
 */
type MICROSOFT_TEAMS_TEAMS_GET_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Retrieved Microsoft Teams message object via Microsoft Graph API, including all its properties (e.g., ID, content, sender, timestamps, attachments).
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_LIST tool input.
 */
type MICROSOFT_TEAMS_TEAMS_LIST_INPUT = {
  /**
   * Filter
   * @description OData v4.0 filter string to refine results based on team properties (e.g., `startsWith(displayName,'A')`). Consult OData v4.0 documentation for syntax.
   * @default
   */
  filter: string;
  /**
   * Select
   * @description Comma-separated team properties to retrieve (e.g., 'id,displayName,description'). If empty or omitted, standard properties are returned. Supported properties include `id`, `displayName`, `description`, `visibility`.
   * @default
   */
  select: string;
  /**
   * Top
   * @description Maximum number of teams to return per page (1-999). Used for pagination; see `next_link` in response.
   * @default 100
   */
  top: number;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_LIST tool output.
 */
type MICROSOFT_TEAMS_TEAMS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Link
       * @description URL to fetch the next page of teams if results are paginated. Empty or absent if all teams are returned.
       * @default
       */
      next_link: string;
      /**
       * Teams
       * @description List of `TeamInfo` objects for teams accessible to the authenticated user. Empty if no teams match or no access.
       */
      teams: {
          /**
           * Description
           * @description Textual description of the Microsoft Team. Empty if not provided.
           * @default
           */
          description: string;
          /**
           * Display Name
           * @description Display name of the Microsoft Team.
           */
          display_name: string;
          /**
           * Id
           * @description Unique identifier (GUID) of the Microsoft Team.
           */
          id: string;
          /**
           * Visibility
           * @description Visibility of the Microsoft Team (e.g., 'Private', 'Public').
           * @default
           */
          visibility: string;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS tool input.
 */
type MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS_INPUT = {
  /**
   * Filter
   * @description OData v4 query string to filter channels (e.g., `startswith(displayName,'Sales')` or `membershipType eq 'private'`).
   * @default
   */
  filter: string;
  /**
   * Include Shared Channels
   * @description If true, include channels shared with the team.
   * @default false
   */
  include_shared_channels: boolean;
  /**
   * Select
   * @description Comma-separated channel properties to return (e.g., 'id,displayName,description'); empty for default properties. Common: `id`, `displayName`, `description`, `email`, `membershipType`, `webUrl`.
   * @default
   */
  select: string;
  /**
   * Team Id
   * @description Unique identifier (ID) of the Microsoft Teams team.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS tool output.
 */
type MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channels
       * @description List of channel objects for the team.
       */
      channels: {
          /**
           * Description
           * @description Description for the channel.
           * @default null
           */
          description: string | null;
          /**
           * Display Name
           * @description Display name for the channel.
           */
          display_name: string;
          /**
           * Email
           * @description Email address of the channel, if email-enabled.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier (ID) for the channel.
           */
          id: string;
          /**
           * Membership Type
           * @description Membership type of the channel. Values: 'standard', 'private', 'shared'.
           * @default standard
           */
          membership_type: string;
      }[];
      /**
       * Next Link
       * @description URL for the next page of results, if any; empty if no more results.
       * @default
       */
      next_link: string;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_LIST_CHAT_MESSAGES tool input.
 */
type MICROSOFT_TEAMS_TEAMS_LIST_CHAT_MESSAGES_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier of the Microsoft Teams chat from which to retrieve messages.
   */
  chat_id?: string;
  /**
   * Top
   * @description Maximum number of messages to retrieve.
   * @default 50
   */
  top: number;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_LIST_CHAT_MESSAGES tool output.
 */
type MICROSOFT_TEAMS_TEAMS_LIST_CHAT_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description A list of `ChatMessage` objects retrieved from the specified chat, ordered with the most recent messages first.
       */
      messages: {
          /**
           * Content
           * @description The body of the message, which can be plain text or HTML. This field may be null if the message primarily consists of attachments or other non-text content.
           * @default null
           */
          content: string | null;
          /**
           * Created Date Time
           * @description The Coordinated Universal Time (UTC) timestamp representing when the message was created, in ISO 8601 format.
           * @default null
           */
          created_date_time: string | null;
          /**
           * From Display Name
           * @description The display name of the user who sent the message. This may be null if the sender's information is not available or for system messages.
           * @default null
           */
          from_display_name: string | null;
          /**
           * From User Id
           * @description The unique identifier (ID) of the user who sent the message. This can be null for system messages or messages from unauthenticated/guest users.
           * @default null
           */
          from_user_id: string | null;
          /**
           * Id
           * @description The unique server-generated ID for the chat message.
           */
          id: string;
          /**
           * Last Modified Date Time
           * @description The Coordinated Universal Time (UTC) timestamp representing when the message was last modified, in ISO 8601 format. This will be null if the message has not been edited.
           * @default null
           */
          last_modified_date_time: string | null;
      }[];
      /**
       * Next Link
       * @description A URL to fetch the next page of messages if the results are paginated (i.e., more messages exist than the `top` limit). If null, all available messages within the scope of the request have been retrieved.
       * @default null
       */
      next_link: string | null;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_LIST_PEOPLE tool input.
 */
type MICROSOFT_TEAMS_TEAMS_LIST_PEOPLE_INPUT = {
  /**
   * Filter
   * @description OData $filter query to limit results (e.g., `"startsWith(displayName,'A')"`).
   * @default null
   */
  filter: string | null;
  /**
   * Orderby
   * @description OData $orderby expression to sort results (e.g., 'displayName asc, relevanceScore desc').
   * @default null
   */
  orderby: string | null;
  /**
   * Search
   * @description Fuzzy search query (name, email, or topic like 'topic:marketing'). Effective only when `user_id` is 'me'.
   * @default null
   */
  search: string | null;
  /**
   * Select
   * @description Comma-separated OData property names to include for each person (e.g., 'id,displayName'). If unspecified, a default set is returned.
   * @default null
   */
  select: string | null;
  /**
   * Skip
   * @description Number of items to skip for pagination.
   * @default null
   */
  skip: number | null;
  /**
   * Top
   * @description Maximum number of items per page for pagination. Actual count may be less. Service default if unspecified.
   * @default null
   */
  top: number | null;
  /**
   * User Id
   * @description Identifier of the user (e.g., 'me', 'adelev@contoso.com', or GUID) whose relevant people are to be retrieved.
   * @default me
   */
  user_id: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_LIST_PEOPLE tool output.
 */
type MICROSOFT_TEAMS_TEAMS_LIST_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary representing the complete JSON response received from the People API. The structure of this dictionary will conform to the Microsoft Graph API's standard response format for collections, typically including a 'value' key containing an array of person objects and potentially an '@odata.nextLink' key for pagination if there are more results.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_POST_CHANNEL_MESSAGE tool input.
 */
type MICROSOFT_TEAMS_TEAMS_POST_CHANNEL_MESSAGE_INPUT = {
  /**
   * Channel Id
   * @description The unique identifier of the channel within the specified team where the message will be posted.
   */
  channel_id?: string;
  /**
   * Content
   * @description The content of the message to be sent. Can be plain text or HTML, determined by `content_type`.
   */
  content?: string;
  /**
   * Content Type
   * @description The format of the message content. Supported values: 'text' (plain text) or 'html' (HTML content). Defaults to 'text'.
   * @default text
   */
  content_type: string;
  /**
   * Team Id
   * @description The unique identifier of the Microsoft Teams team containing the channel.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_POST_CHANNEL_MESSAGE tool output.
 */
type MICROSOFT_TEAMS_TEAMS_POST_CHANNEL_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description An object representing the body of the sent message, typically including its `content` and `contentType`.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Created Date Time
       * @description The UTC timestamp indicating when the message was created.
       */
      createdDateTime: string;
      /**
       * From
       * @description An object containing details about the message sender (user or application).
       */
      from: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description The unique identifier of the message successfully posted to the channel.
       */
      id: string;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_POST_CHAT_MESSAGE tool input.
 */
type MICROSOFT_TEAMS_TEAMS_POST_CHAT_MESSAGE_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier for the Microsoft Teams chat to receive the message.
   */
  chat_id?: string;
  /**
   * Content
   * @description Message content, either plain text or HTML (see `content_type`).
   */
  content?: string;
  /**
   * Content Type
   * @description Content format: 'text' (plain) or 'html'.
   * @default text
   */
  content_type: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_POST_CHAT_MESSAGE tool output.
 */
type MICROSOFT_TEAMS_TEAMS_POST_CHAT_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Posted message content, including its type and the content string.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Created Date Time
       * @description UTC timestamp of when the message was created.
       */
      createdDateTime: string;
      /**
       * From
       * @description Details of the message sender.
       */
      from: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Unique identifier of the posted message.
       */
      id: string;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_POST_MESSAGE_REPLY tool input.
 */
type MICROSOFT_TEAMS_TEAMS_POST_MESSAGE_REPLY_INPUT = {
  /**
   * Channel Id
   * @description The unique identifier of the channel within the specified team. This channel contains the message to which the reply will be posted. Channel IDs typically follow a format like '19:{alphanumeric_string}@thread.tacv2'.
   */
  channel_id?: string;
  /**
   * Content
   * @description The body of the reply message. This can be plain text or HTML, as specified by the `content_type` field.
   */
  content?: string;
  /**
   * Content Type
   * @description Specifies the format of the `content` field. Accepted values are 'text' for plain text content and 'html' for content with HTML formatting. Defaults to 'text' if not provided.
   * @default text
   */
  content_type: string;
  /**
   * Message Id
   * @description The unique identifier of the specific message within the channel to which this reply is directed.
   */
  message_id?: string;
  /**
   * Team Id
   * @description The unique identifier (GUID) of the Microsoft Teams team that contains the channel where the message to be replied to exists.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_TEAMS_POST_MESSAGE_REPLY tool output.
 */
type MICROSOFT_TEAMS_TEAMS_POST_MESSAGE_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description An object representing the content of the reply message, typically containing `contentType` (e.g., 'text', 'html') and `content` (the actual message string).
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Created Date Time
       * @description The Coordinated Universal Time (UTC) timestamp indicating when the reply message was successfully created. The format is ISO 8601.
       */
      createdDateTime: string;
      /**
       * From
       * @description A dictionary containing details about the sender of the reply. This often includes user or application information.
       */
      from: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description The unique identifier (ID) assigned to the newly created reply message by Microsoft Teams.
       */
      id: string;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_UNARCHIVE_TEAM tool input.
 */
type MICROSOFT_TEAMS_UNARCHIVE_TEAM_INPUT = {
  /**
   * Team Id
   * @description The unique identifier (GUID) of the team to unarchive.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_UNARCHIVE_TEAM tool output.
 */
type MICROSOFT_TEAMS_UNARCHIVE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the unarchive operation. 204 indicates success.
       */
      status_code: number;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_UPDATE_CHANNEL_MESSAGE tool input.
 */
type MICROSOFT_TEAMS_UPDATE_CHANNEL_MESSAGE_INPUT = {
  /**
   * Channel Id
   * @description Unique identifier of the channel within the team.
   */
  channel_id?: string;
  /**
   * Content
   * @description Updated message content, either plain text or HTML.
   */
  content?: string;
  /**
   * Content Type
   * @description Format of the message content: 'text' or 'html'.
   * @default text
   */
  content_type: string;
  /**
   * Message Id
   * @description Unique identifier of the channel message to update.
   */
  message_id?: string;
  /**
   * Team Id
   * @description Unique identifier of the Microsoft Teams team.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_UPDATE_CHANNEL_MESSAGE tool output.
 */
type MICROSOFT_TEAMS_UPDATE_CHANNEL_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the update operation.
       */
      status_code: number;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_UPDATE_CHAT_MESSAGE tool input.
 */
type MICROSOFT_TEAMS_UPDATE_CHAT_MESSAGE_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier of the Microsoft Teams chat.
   */
  chat_id?: string;
  /**
   * Content
   * @description Updated message content, either plain text or HTML.
   */
  content?: string;
  /**
   * Content Type
   * @description Format of the message content: 'text' or 'html'.
   * @default text
   */
  content_type: string;
  /**
   * Message Id
   * @description Unique identifier of the chat message to update.
   */
  message_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_UPDATE_CHAT_MESSAGE tool output.
 */
type MICROSOFT_TEAMS_UPDATE_CHAT_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the update operation.
       */
      status_code: number;
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
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_UPDATE_TEAM tool input.
 */
type MICROSOFT_TEAMS_UPDATE_TEAM_INPUT = {
  /**
   * TeamFunSettings
   * @description Settings that control fun features in the team.
   * @default null
   */
  funSettings: {
      /**
       * Allow Giphy
       * @description Whether Giphy is allowed.
       */
      allowGiphy: boolean;
      /**
       * Giphy Content Rating
       * @description The content rating for Giphy: 'strict' or 'moderate'.
       * @enum {string}
       */
      giphyContentRating: "strict" | "moderate";
  } | null;
  /**
   * TeamMemberSettings
   * @description Settings that control what members can do in the team.
   * @default null
   */
  memberSettings: {
      /**
       * Allow Create Update Channels
       * @description Whether members are allowed to create and update channels in the team.
       */
      allowCreateUpdateChannels: boolean;
  } | null;
  /**
   * TeamMessagingSettings
   * @description Settings that control messaging capabilities in the team.
   * @default null
   */
  messagingSettings: {
      /**
       * Allow User Delete Messages
       * @description Whether users are allowed to delete their messages.
       */
      allowUserDeleteMessages: boolean;
      /**
       * Allow User Edit Messages
       * @description Whether users are allowed to edit their messages.
       */
      allowUserEditMessages: boolean;
  } | null;
  /**
   * Team Id
   * @description The unique identifier (GUID) of the team to update.
   */
  team_id?: string;
};

/**
 * Type of MICROSOFT_TEAMS's MICROSOFT_TEAMS_UPDATE_TEAM tool output.
 */
type MICROSOFT_TEAMS_UPDATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the update operation. 204 indicates success.
       */
      status_code: number;
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
 * Type map of all available tool input types for toolkit "MICROSOFT_TEAMS".
 */
export type MICROSOFT_TEAMS_TOOL_INPUTS = {
  ADD_MEMBER_TO_TEAM: MICROSOFT_TEAMS_ADD_MEMBER_TO_TEAM_INPUT
  ARCHIVE_TEAM: MICROSOFT_TEAMS_ARCHIVE_TEAM_INPUT
  CHATS_GET_ALL_CHATS: MICROSOFT_TEAMS_CHATS_GET_ALL_CHATS_INPUT
  CHATS_GET_ALL_MESSAGES: MICROSOFT_TEAMS_CHATS_GET_ALL_MESSAGES_INPUT
  CREATE_MEETING: MICROSOFT_TEAMS_CREATE_MEETING_INPUT
  CREATE_TEAM: MICROSOFT_TEAMS_CREATE_TEAM_INPUT
  DELETE_TEAM: MICROSOFT_TEAMS_DELETE_TEAM_INPUT
  GET_CHANNEL: MICROSOFT_TEAMS_GET_CHANNEL_INPUT
  GET_CHAT_MESSAGE: MICROSOFT_TEAMS_GET_CHAT_MESSAGE_INPUT
  GET_TEAM: MICROSOFT_TEAMS_GET_TEAM_INPUT
  LIST_MESSAGE_REPLIES: MICROSOFT_TEAMS_LIST_MESSAGE_REPLIES_INPUT
  LIST_TEAMS_TEMPLATES: MICROSOFT_TEAMS_LIST_TEAMS_TEMPLATES_INPUT
  LIST_TEAM_MEMBERS: MICROSOFT_TEAMS_LIST_TEAM_MEMBERS_INPUT
  LIST_USERS: MICROSOFT_TEAMS_LIST_USERS_INPUT
  TEAMS_CREATE_CHANNEL: MICROSOFT_TEAMS_TEAMS_CREATE_CHANNEL_INPUT
  TEAMS_CREATE_CHAT: MICROSOFT_TEAMS_TEAMS_CREATE_CHAT_INPUT
  TEAMS_GET_MESSAGE: MICROSOFT_TEAMS_TEAMS_GET_MESSAGE_INPUT
  TEAMS_LIST: MICROSOFT_TEAMS_TEAMS_LIST_INPUT
  TEAMS_LIST_CHANNELS: MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS_INPUT
  TEAMS_LIST_CHAT_MESSAGES: MICROSOFT_TEAMS_TEAMS_LIST_CHAT_MESSAGES_INPUT
  TEAMS_LIST_PEOPLE: MICROSOFT_TEAMS_TEAMS_LIST_PEOPLE_INPUT
  TEAMS_POST_CHANNEL_MESSAGE: MICROSOFT_TEAMS_TEAMS_POST_CHANNEL_MESSAGE_INPUT
  TEAMS_POST_CHAT_MESSAGE: MICROSOFT_TEAMS_TEAMS_POST_CHAT_MESSAGE_INPUT
  TEAMS_POST_MESSAGE_REPLY: MICROSOFT_TEAMS_TEAMS_POST_MESSAGE_REPLY_INPUT
  UNARCHIVE_TEAM: MICROSOFT_TEAMS_UNARCHIVE_TEAM_INPUT
  UPDATE_CHANNEL_MESSAGE: MICROSOFT_TEAMS_UPDATE_CHANNEL_MESSAGE_INPUT
  UPDATE_CHAT_MESSAGE: MICROSOFT_TEAMS_UPDATE_CHAT_MESSAGE_INPUT
  UPDATE_TEAM: MICROSOFT_TEAMS_UPDATE_TEAM_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MICROSOFT_TEAMS".
 */
export type MICROSOFT_TEAMS_TOOL_OUTPUTS = {
  ADD_MEMBER_TO_TEAM: MICROSOFT_TEAMS_ADD_MEMBER_TO_TEAM_OUTPUT
  ARCHIVE_TEAM: MICROSOFT_TEAMS_ARCHIVE_TEAM_OUTPUT
  CHATS_GET_ALL_CHATS: MICROSOFT_TEAMS_CHATS_GET_ALL_CHATS_OUTPUT
  CHATS_GET_ALL_MESSAGES: MICROSOFT_TEAMS_CHATS_GET_ALL_MESSAGES_OUTPUT
  CREATE_MEETING: MICROSOFT_TEAMS_CREATE_MEETING_OUTPUT
  CREATE_TEAM: MICROSOFT_TEAMS_CREATE_TEAM_OUTPUT
  DELETE_TEAM: MICROSOFT_TEAMS_DELETE_TEAM_OUTPUT
  GET_CHANNEL: MICROSOFT_TEAMS_GET_CHANNEL_OUTPUT
  GET_CHAT_MESSAGE: MICROSOFT_TEAMS_GET_CHAT_MESSAGE_OUTPUT
  GET_TEAM: MICROSOFT_TEAMS_GET_TEAM_OUTPUT
  LIST_MESSAGE_REPLIES: MICROSOFT_TEAMS_LIST_MESSAGE_REPLIES_OUTPUT
  LIST_TEAMS_TEMPLATES: MICROSOFT_TEAMS_LIST_TEAMS_TEMPLATES_OUTPUT
  LIST_TEAM_MEMBERS: MICROSOFT_TEAMS_LIST_TEAM_MEMBERS_OUTPUT
  LIST_USERS: MICROSOFT_TEAMS_LIST_USERS_OUTPUT
  TEAMS_CREATE_CHANNEL: MICROSOFT_TEAMS_TEAMS_CREATE_CHANNEL_OUTPUT
  TEAMS_CREATE_CHAT: MICROSOFT_TEAMS_TEAMS_CREATE_CHAT_OUTPUT
  TEAMS_GET_MESSAGE: MICROSOFT_TEAMS_TEAMS_GET_MESSAGE_OUTPUT
  TEAMS_LIST: MICROSOFT_TEAMS_TEAMS_LIST_OUTPUT
  TEAMS_LIST_CHANNELS: MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS_OUTPUT
  TEAMS_LIST_CHAT_MESSAGES: MICROSOFT_TEAMS_TEAMS_LIST_CHAT_MESSAGES_OUTPUT
  TEAMS_LIST_PEOPLE: MICROSOFT_TEAMS_TEAMS_LIST_PEOPLE_OUTPUT
  TEAMS_POST_CHANNEL_MESSAGE: MICROSOFT_TEAMS_TEAMS_POST_CHANNEL_MESSAGE_OUTPUT
  TEAMS_POST_CHAT_MESSAGE: MICROSOFT_TEAMS_TEAMS_POST_CHAT_MESSAGE_OUTPUT
  TEAMS_POST_MESSAGE_REPLY: MICROSOFT_TEAMS_TEAMS_POST_MESSAGE_REPLY_OUTPUT
  UNARCHIVE_TEAM: MICROSOFT_TEAMS_UNARCHIVE_TEAM_OUTPUT
  UPDATE_CHANNEL_MESSAGE: MICROSOFT_TEAMS_UPDATE_CHANNEL_MESSAGE_OUTPUT
  UPDATE_CHAT_MESSAGE: MICROSOFT_TEAMS_UPDATE_CHAT_MESSAGE_OUTPUT
  UPDATE_TEAM: MICROSOFT_TEAMS_UPDATE_TEAM_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MICROSOFT_TEAMS toolkit.
 */
export const MICROSOFT_TEAMS = {
  slug: "microsoft_teams",
  tools: {
    /**
     * Tool to add a user to a microsoft teams team. use when granting or updating membership for a user.
     */
    ADD_MEMBER_TO_TEAM: "MICROSOFT_TEAMS_ADD_MEMBER_TO_TEAM",
    /**
     * Tool to archive a microsoft teams team. use after confirming the team id; returns 202 if accepted.
     */
    ARCHIVE_TEAM: "MICROSOFT_TEAMS_ARCHIVE_TEAM",
    /**
     * Retrieves all microsoft teams chats a specified user is part of, supporting filtering, property selection, and pagination.
     */
    CHATS_GET_ALL_CHATS: "MICROSOFT_TEAMS_CHATS_GET_ALL_CHATS",
    /**
     * Retrieves all messages from a specified microsoft teams chat using the microsoft graph api, automatically handling pagination; ensure `chat id` is valid and odata expressions in `filter` or `select` are correct.
     */
    CHATS_GET_ALL_MESSAGES: "MICROSOFT_TEAMS_CHATS_GET_ALL_MESSAGES",
    /**
     * Use to schedule a new standalone microsoft teams online meeting, i.e., one not linked to any calendar event.
     */
    CREATE_MEETING: "MICROSOFT_TEAMS_CREATE_MEETING",
    /**
     * Tool to create a new microsoft teams team. use when you need to provision a team with optional template, channels, and members.
     */
    CREATE_TEAM: "MICROSOFT_TEAMS_CREATE_TEAM",
    /**
     * Tool to delete a microsoft teams team. use after confirming the target team id.
     */
    DELETE_TEAM: "MICROSOFT_TEAMS_DELETE_TEAM",
    /**
     * Tool to get a specific channel in a team. use after obtaining valid team and channel ids to fetch channel details.
     */
    GET_CHANNEL: "MICROSOFT_TEAMS_GET_CHANNEL",
    /**
     * Tool to get a specific chat message. use after confirming chat id and message id.
     */
    GET_CHAT_MESSAGE: "MICROSOFT_TEAMS_GET_CHAT_MESSAGE",
    /**
     * Tool to get a specific team. use when full details of one team by id are needed.
     */
    GET_TEAM: "MICROSOFT_TEAMS_GET_TEAM",
    /**
     * Tool to list replies to a channel message. use after obtaining team, channel, and message ids.
     */
    LIST_MESSAGE_REPLIES: "MICROSOFT_TEAMS_LIST_MESSAGE_REPLIES",
    /**
     * Tool to list available microsoft teams templates. use when retrieving templates for team creation or customization workflows.
     */
    LIST_TEAMS_TEMPLATES: "MICROSOFT_TEAMS_LIST_TEAMS_TEMPLATES",
    /**
     * Tool to list members of a microsoft teams team. use when you need to retrieve the members of a specific team, for auditing or notifications.
     */
    LIST_TEAM_MEMBERS: "MICROSOFT_TEAMS_LIST_TEAM_MEMBERS",
    /**
     * Tool to list all users in the organization. use when you need to retrieve directory users with filtering, pagination, and field selection.
     */
    LIST_USERS: "MICROSOFT_TEAMS_LIST_USERS",
    /**
     * Creates a new 'standard', 'private', or 'shared' channel within a specified microsoft teams team.
     */
    TEAMS_CREATE_CHANNEL: "MICROSOFT_TEAMS_TEAMS_CREATE_CHANNEL",
    /**
     * Creates a new chat; if a 'oneonone' chat with the specified members already exists, its details are returned, while 'group' chats are always newly created.
     */
    TEAMS_CREATE_CHAT: "MICROSOFT_TEAMS_TEAMS_CREATE_CHAT",
    /**
     * Retrieves a specific message from a microsoft teams channel using its team, channel, and message ids.
     */
    TEAMS_GET_MESSAGE: "MICROSOFT_TEAMS_TEAMS_GET_MESSAGE",
    /**
     * Retrieves microsoft teams accessible by the authenticated user, allowing filtering, property selection, and pagination.
     */
    TEAMS_LIST: "MICROSOFT_TEAMS_TEAMS_LIST",
    /**
     * Retrieves channels for a specified microsoft teams team id (must be valid and for an existing team), with options to include shared channels, filter results, and select properties.
     */
    TEAMS_LIST_CHANNELS: "MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS",
    /**
     * Retrieves messages (newest first) from an existing and accessible microsoft teams one-on-one chat, group chat, or channel thread, specified by `chat id`.
     */
    TEAMS_LIST_CHAT_MESSAGES: "MICROSOFT_TEAMS_TEAMS_LIST_CHAT_MESSAGES",
    /**
     * Retrieves a list of people relevant to a specified user from microsoft graph, noting the `search` parameter is only effective if `user id` is 'me'.
     */
    TEAMS_LIST_PEOPLE: "MICROSOFT_TEAMS_TEAMS_LIST_PEOPLE",
    /**
     * Posts a new text or html message to a specified channel in a microsoft teams team.
     */
    TEAMS_POST_CHANNEL_MESSAGE: "MICROSOFT_TEAMS_TEAMS_POST_CHANNEL_MESSAGE",
    /**
     * Sends a non-empty message (text or html) to a specified, existing microsoft teams chat; content must be valid html if `content type` is 'html'.
     */
    TEAMS_POST_CHAT_MESSAGE: "MICROSOFT_TEAMS_TEAMS_POST_CHAT_MESSAGE",
    /**
     * Sends a reply to an existing message, identified by `message id`, within a specific `channel id` of a given `team id` in microsoft teams.
     */
    TEAMS_POST_MESSAGE_REPLY: "MICROSOFT_TEAMS_TEAMS_POST_MESSAGE_REPLY",
    /**
     * Tool to unarchive a microsoft teams team. use when you need to restore an archived team to active state.
     */
    UNARCHIVE_TEAM: "MICROSOFT_TEAMS_UNARCHIVE_TEAM",
    /**
     * Tool to update a message in a channel. use when you need to modify an existing channel message after confirming channel and message ids.
     */
    UPDATE_CHANNEL_MESSAGE: "MICROSOFT_TEAMS_UPDATE_CHANNEL_MESSAGE",
    /**
     * Tool to update a specific message in a chat. use when you need to correct or modify a sent chat message.
     */
    UPDATE_CHAT_MESSAGE: "MICROSOFT_TEAMS_UPDATE_CHAT_MESSAGE",
    /**
     * Tool to update the properties of a team. use when you need to modify team settings such as member, messaging, or fun settings.
     */
    UPDATE_TEAM: "MICROSOFT_TEAMS_UPDATE_TEAM",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MICROSOFT_TEAMS".
 */
export type MICROSOFT_TEAMS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MICROSOFT_TEAMS".
 */
export type MICROSOFT_TEAMS_TRIGGER_EVENTS = {}
