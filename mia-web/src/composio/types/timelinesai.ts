import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TIMELINESAI's TIMELINESAI_DELETE_FILE tool input.
 */
type TIMELINESAI_DELETE_FILE_INPUT = {
  /**
   * File Uid
   * @description Unique identifier of the file to delete
   */
  file_uid?: string;
};

/**
 * Type of TIMELINESAI's TIMELINESAI_DELETE_FILE tool output.
 */
type TIMELINESAI_DELETE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Flag indicating that the file was successfully deleted
       */
      deleted: boolean;
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
 * Type of TIMELINESAI's TIMELINESAI_DELETE_WEBHOOK tool input.
 */
type TIMELINESAI_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook subscription to delete
   */
  webhook_id?: string;
};

/**
 * Type of TIMELINESAI's TIMELINESAI_DELETE_WEBHOOK tool output.
 */
type TIMELINESAI_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of TIMELINESAI's TIMELINESAI_GET_CHATS tool input.
 */
type TIMELINESAI_GET_CHATS_INPUT = {
  /**
   * Assignee Id
   * @description Filter chats by the specified assignee ID
   * @default null
   */
  assignee_id: string | null;
  /**
   * Created Since
   * @description ISO 8601 date string; return chats created after this timestamp
   * @default null
   */
  created_since: string | null;
  /**
   * Has Label
   * @description If true, only chats that have at least one label
   * @default null
   */
  has_label: boolean | null;
  /**
   * Has Open Task
   * @description If true, only chats with open tasks
   * @default null
   */
  has_open_task: boolean | null;
  /**
   * Integration Id
   * @description Filter chats by the specified integration ID
   * @default null
   */
  integration_id: string | null;
  /**
   * Is Archived
   * @description If true, only archived chats will be returned
   * @default null
   */
  is_archived: boolean | null;
  /**
   * Is Assigned
   * @description If true, only chats that have been assigned
   * @default null
   */
  is_assigned: boolean | null;
  /**
   * Is Followed
   * @description If true, only chats followed by the current user
   * @default null
   */
  is_followed: boolean | null;
  /**
   * Is Muted
   * @description If true, only chats that are muted
   * @default null
   */
  is_muted: boolean | null;
  /**
   * Is Unread
   * @description If true, only chats with unread messages are returned
   * @default null
   */
  is_unread: boolean | null;
  /**
   * Label Id
   * @description Filter chats by the specified label ID
   * @default null
   */
  label_id: string | null;
  /**
   * Limit
   * @description Maximum number of chats to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of chats to skip before returning results
   * @default null
   */
  offset: number | null;
  /**
   * Person Id
   * @description Filter chats by the associated person ID
   * @default null
   */
  person_id: string | null;
  /**
   * Search
   * @description Search term to filter chats by name or content
   * @default null
   */
  search: string | null;
  /**
   * Sort Direction
   * @description Sort order: 'asc' (ascending) or 'desc' (descending)
   * @default null
   * @enum {string|null}
   */
  sort_direction: "asc" | "desc" | null;
  /**
   * Sort Field
   * @description Field by which to sort results (e.g., 'createdAt')
   * @default null
   */
  sort_field: string | null;
  /**
   * Team Member Id
   * @description Filter chats involving the specified team member ID
   * @default null
   */
  team_member_id: string | null;
  /**
   * Types
   * @description List of chat types to include (e.g., ['group', 'direct'])
   * @default null
   */
  types: string[] | null;
};

/**
 * Type of TIMELINESAI's TIMELINESAI_GET_CHATS tool output.
 */
type TIMELINESAI_GET_CHATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of chats returned in this page
       */
      count: number;
      /**
       * Results
       * @description List of chat objects
       */
      results: {
          /**
           * Assignee Id
           * @description ID of the assignee for this chat
           * @default null
           */
          assigneeId: string | null;
          /**
           * Created At
           * @description ISO-8601 timestamp when the chat was created
           */
          createdAt: string;
          /**
           * Has Label
           * @description Whether the chat has at least one label
           */
          hasLabel: boolean;
          /**
           * Has Open Task
           * @description Whether the chat has an open task
           */
          hasOpenTask: boolean;
          /**
           * Id
           * @description Unique identifier of the chat
           */
          id: string;
          /**
           * Integration Id
           * @description Integration identifier
           * @default null
           */
          integrationId: string | null;
          /**
           * Is Archived
           * @description Whether the chat is archived
           */
          isArchived: boolean;
          /**
           * Is Followed
           * @description Whether the chat is followed
           */
          isFollowed: boolean;
          /**
           * Is Muted
           * @description Whether the chat is muted
           */
          isMuted: boolean;
          /**
           * Labels
           * @description List of labels assigned to the chat
           */
          labels: {
              /**
               * Id
               * @description Unique identifier of the label
               */
              id: string;
              /**
               * Name
               * @description Name of the label
               * @default null
               */
              name: string | null;
          }[];
          /**
           * LastMessage
           * @description Details of the last message in a chat
           * @default null
           */
          lastMessage: {
              /**
               * Id
               * @description Unique identifier of the last message
               */
              id: string;
              /**
               * Sender Id
               * @description Identifier of the sender of the last message
               */
              senderId: string;
              /**
               * Text
               * @description Content of the last message
               * @default null
               */
              text: string | null;
              /**
               * Timestamp
               * @description ISO-8601 timestamp when the last message was sent
               */
              timestamp: string;
          } | null;
          /**
           * Name
           * @description Name of the chat
           * @default null
           */
          name: string | null;
          /**
           * Person Id
           * @description Associated person ID
           * @default null
           */
          personId: string | null;
          /**
           * Phone
           * @description Phone number associated with the chat
           * @default null
           */
          phone: string | null;
          /**
           * Team Member Id
           * @description ID of team member involved in the chat
           * @default null
           */
          teamMemberId: string | null;
          /**
           * Type
           * @description Type of the chat, e.g., 'group' or 'single'
           * @default null
           */
          type: string | null;
          /**
           * Unread Count
           * @description Number of unread messages in this chat
           */
          unreadCount: number;
          /**
           * Updated At
           * @description ISO-8601 timestamp when the chat was last updated
           */
          updatedAt: string;
      }[];
      /**
       * Total
       * @description Total number of chats matching the filters
       */
      total: number;
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
 * Type of TIMELINESAI's TIMELINESAI_GET_CHAT_MESSAGES tool input.
 */
type TIMELINESAI_GET_CHAT_MESSAGES_INPUT = {
  /**
   * After Message Id
   * @description Get messages after this message ID (for pagination)
   * @default null
   */
  after_message_id: string | null;
  /**
   * Before Message Id
   * @description Get messages before this message ID (for pagination)
   * @default null
   */
  before_message_id: string | null;
  /**
   * Chat Id
   * @description Unique identifier of the chat to retrieve messages from
   */
  chat_id?: string;
  /**
   * Limit
   * @description Maximum number of messages to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of messages to skip before returning results
   * @default null
   */
  offset: number | null;
};

/**
 * Type of TIMELINESAI's TIMELINESAI_GET_CHAT_MESSAGES tool output.
 */
type TIMELINESAI_GET_CHAT_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of messages returned in this page
       */
      count: number;
      /**
       * Messages
       * @description List of message objects
       */
      messages: {
          /**
           * Id
           * @description Unique identifier of the message
           */
          id: string;
          /**
           * Is Outbound
           * @description Whether this message was sent by the business/agent
           * @default null
           */
          is_outbound: boolean | null;
          /**
           * Message Type
           * @description Type of message (text, media, etc.)
           * @default null
           */
          message_type: string | null;
          /**
           * MessageSender
           * @description Details of the message sender
           * @default null
           */
          sender: {
              /**
               * Id
               * @description Unique identifier of the sender
               */
              id: string;
              /**
               * Name
               * @description Name of the sender
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Status
           * @description Delivery status of the message
           * @default null
           */
          status: string | null;
          /**
           * Text
           * @description Content of the message
           * @default null
           */
          text: string | null;
          /**
           * Timestamp
           * @description ISO-8601 timestamp when the message was sent
           */
          timestamp: string;
      }[];
      /**
       * Next Cursor
       * @description Cursor for fetching the next page of messages
       * @default null
       */
      next_cursor: string | null;
      /**
       * Previous Cursor
       * @description Cursor for fetching the previous page of messages
       * @default null
       */
      previous_cursor: string | null;
      /**
       * Total
       * @description Total number of messages in the chat
       * @default null
       */
      total: number | null;
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
 * Type of TIMELINESAI's TIMELINESAI_GET_FILE_DETAILS tool input.
 */
type TIMELINESAI_GET_FILE_DETAILS_INPUT = {
  /**
   * File Uid
   * @description Unique identifier of the file to retrieve details for
   */
  file_uid?: string;
};

/**
 * Type of TIMELINESAI's TIMELINESAI_GET_FILE_DETAILS tool output.
 */
type TIMELINESAI_GET_FILE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the file was created
       */
      created_at: string;
      /**
       * Name
       * @description Name of the file
       */
      name: string;
      /**
       * Related Entity Uid
       * @description Unique identifier of related entity, if applicable
       * @default null
       */
      related_entity_uid: string | null;
      /**
       * Size
       * @description Size of the file in bytes
       */
      size: number;
      /**
       * Uid
       * @description Unique identifier of the file
       */
      uid: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the file was last updated
       */
      updated_at: string;
      /**
       * Url
       * @description Temporary URL to download the file
       */
      url: string;
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
 * Type of TIMELINESAI's TIMELINESAI_GET_WEBHOOK tool input.
 */
type TIMELINESAI_GET_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to retrieve details for
   */
  webhook_id?: string;
};

/**
 * Type of TIMELINESAI's TIMELINESAI_GET_WEBHOOK tool output.
 */
type TIMELINESAI_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the webhook was created
       */
      createdAt: string;
      /**
       * Events
       * @description List of event types that trigger this webhook
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: string;
      /**
       * Is Active
       * @description Whether the webhook is currently active
       */
      isActive: boolean;
      /**
       * Team Id
       * @description Identifier of the team this webhook belongs to
       */
      teamId: string;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the webhook was last updated
       */
      updatedAt: string;
      /**
       * Url
       * @description Endpoint URL that receives webhook events
       */
      url: string;
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
 * Type of TIMELINESAI's TIMELINESAI_GET_WEBHOOKS tool input.
 */
type TIMELINESAI_GET_WEBHOOKS_INPUT = {
  /**
   * Limit
   * @description Maximum number of webhooks to return per page
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of webhooks to skip before returning results
   * @default null
   */
  offset: number | null;
};

/**
 * Type of TIMELINESAI's TIMELINESAI_GET_WEBHOOKS tool output.
 */
type TIMELINESAI_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Array of webhook subscription objects
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when created
       */
      createdAt: string;
      /**
       * Enabled
       * @description Whether the webhook is currently active
       */
      enabled: boolean;
      /**
       * Event
       * @description Event name that triggers this webhook
       */
      event: string;
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: string;
      /**
       * Secret
       * @description HMAC secret used for signing payloads
       */
      secret: string;
      /**
       * Updated At
       * @description ISO-8601 timestamp when last updated
       */
      updatedAt: string;
      /**
       * Url
       * @description Destination URL for webhook payloads
       */
      url: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Limit
   * @description Page size returned
   */
  limit?: number;
  /**
   * Offset
   * @description Offset of the returned page
   */
  offset?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of webhooks matching the query
   */
  total?: number;
};

/**
 * Type of TIMELINESAI's TIMELINESAI_GET_WHATSAPP_ACCOUNTS tool input.
 */
type TIMELINESAI_GET_WHATSAPP_ACCOUNTS_INPUT = object;

/**
 * Type of TIMELINESAI's TIMELINESAI_GET_WHATSAPP_ACCOUNTS tool output.
 */
type TIMELINESAI_GET_WHATSAPP_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of connected WhatsApp accounts.
       */
      accounts: {
          /**
           * Created At
           * @description ISO-8601 timestamp when the account was created.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier for the WhatsApp account.
           */
          id: string;
          /**
           * Name
           * @description User-defined name for the WhatsApp account.
           */
          name: string;
          /**
           * Phone
           * @description Phone number of the WhatsApp account.
           */
          phone: string;
          /**
           * Status
           * @description Current connection status, e.g., 'active' or 'disconnected'.
           */
          status: string;
          /**
           * Updated At
           * @description ISO-8601 timestamp when the account was last updated.
           */
          updatedAt: string;
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
 * Type of TIMELINESAI's TIMELINESAI_LIST_UPLOADED_FILES tool input.
 */
type TIMELINESAI_LIST_UPLOADED_FILES_INPUT = object;

/**
 * Type of TIMELINESAI's TIMELINESAI_LIST_UPLOADED_FILES tool output.
 */
type TIMELINESAI_LIST_UPLOADED_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description List of files uploaded in the workspace.
       */
      files: {
          /**
           * Created At
           * @description File upload timestamp (ISO8601 format).
           */
          createdAt: string;
          /**
           * Extension
           * @description File extension (e.g., jpg, pdf).
           */
          extension: string;
          /**
           * Id
           * @description Unique file identifier.
           */
          id: string;
          /**
           * Name
           * @description Name of the file.
           */
          name: string;
          /**
           * Size
           * @description Size of the file in bytes.
           */
          size: number;
          /**
           * Url
           * @description Download URL for the file.
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
 * Type of TIMELINESAI's TIMELINESAI_POST_WEBHOOK tool input.
 */
type TIMELINESAI_POST_WEBHOOK_INPUT = {
  /**
   * Event Type
   * @description Event type to subscribe to (e.g., 'message.created').
   */
  event_type?: string;
  /**
   * Secret
   * @description Optional secret used to sign webhook payloads (HMAC).
   * @default null
   */
  secret: string | null;
  /**
   * Url
   * @description The HTTP endpoint URL that will receive webhook payloads.
   */
  url?: string;
};

/**
 * Type of TIMELINESAI's TIMELINESAI_POST_WEBHOOK tool output.
 */
type TIMELINESAI_POST_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when created.
       */
      created_at: string;
      /**
       * Event Type
       * @description Event type subscribed to.
       */
      event_type: string;
      /**
       * Id
       * @description Unique identifier of the webhook subscription.
       */
      id: string;
      /**
       * Secret
       * @description HMAC secret for payload signature.
       */
      secret: string | null;
      /**
       * Status
       * @description The status of the webhook (e.g., 'enabled').
       */
      status: string;
      /**
       * Url
       * @description The webhook delivery endpoint URL.
       */
      url: string;
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
 * Type of TIMELINESAI's TIMELINESAI_PUT_WEBHOOK tool input.
 */
type TIMELINESAI_PUT_WEBHOOK_INPUT = {
  /**
   * Enabled
   * @description Whether the webhook is enabled. If omitted, current state is preserved
   * @default null
   */
  enabled: boolean | null;
  /**
   * Event Types
   * @description List of event types to subscribe to
   */
  event_types?: string[];
  /**
   * Url
   * Format: uri
   * @description The URL to which the webhook should send events
   */
  url?: unknown;
  /**
   * Webhook Id
   * @description Unique identifier of the webhook subscription to update
   */
  webhook_id?: string;
};

/**
 * Type of TIMELINESAI's TIMELINESAI_PUT_WEBHOOK tool output.
 */
type TIMELINESAI_PUT_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO-8601 format
       */
      createdAt: string;
      /**
       * Enabled
       * @description Whether the webhook is enabled
       */
      enabled: boolean;
      /**
       * Event Types
       * @description Event types the webhook is subscribed to
       */
      event_types: string[];
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO-8601 format
       */
      updatedAt: string;
      /**
       * Url
       * @description The webhook target URL
       */
      url: string;
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
 * Type of TIMELINESAI's TIMELINESAI_SEND_MESSAGE tool input.
 */
type TIMELINESAI_SEND_MESSAGE_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier of the chat to send the message to
   */
  chat_id?: string;
  /**
   * Message
   * @description The text message to send
   */
  message?: string;
  /**
   * Message Type
   * @description Type of message to send (text, media, etc.)
   * @default text
   */
  message_type: string | null;
};

/**
 * Type of TIMELINESAI's TIMELINESAI_SEND_MESSAGE tool output.
 */
type TIMELINESAI_SEND_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description Details of the sent message
       */
      data: {
          /**
           * Chat Id
           * @description Chat ID where the message was sent
           */
          chat_id: string;
          /**
           * Id
           * @description Unique identifier of the sent message
           */
          id: string;
          /**
           * Message
           * @description The message content that was sent
           */
          message: string;
          /**
           * Status
           * @description Status of the message (e.g., 'sent', 'delivered')
           */
          status: string;
          /**
           * Timestamp
           * @description ISO-8601 timestamp when the message was sent
           */
          timestamp: string;
      };
      /**
       * Success
       * @description Whether the message was sent successfully
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
 * Type map of all available tool input types for toolkit "TIMELINESAI".
 */
export type TIMELINESAI_TOOL_INPUTS = {
  DELETE_FILE: TIMELINESAI_DELETE_FILE_INPUT
  DELETE_WEBHOOK: TIMELINESAI_DELETE_WEBHOOK_INPUT
  GET_CHATS: TIMELINESAI_GET_CHATS_INPUT
  GET_CHAT_MESSAGES: TIMELINESAI_GET_CHAT_MESSAGES_INPUT
  GET_FILE_DETAILS: TIMELINESAI_GET_FILE_DETAILS_INPUT
  GET_WEBHOOK: TIMELINESAI_GET_WEBHOOK_INPUT
  GET_WEBHOOKS: TIMELINESAI_GET_WEBHOOKS_INPUT
  GET_WHATSAPP_ACCOUNTS: TIMELINESAI_GET_WHATSAPP_ACCOUNTS_INPUT
  LIST_UPLOADED_FILES: TIMELINESAI_LIST_UPLOADED_FILES_INPUT
  POST_WEBHOOK: TIMELINESAI_POST_WEBHOOK_INPUT
  PUT_WEBHOOK: TIMELINESAI_PUT_WEBHOOK_INPUT
  SEND_MESSAGE: TIMELINESAI_SEND_MESSAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TIMELINESAI".
 */
export type TIMELINESAI_TOOL_OUTPUTS = {
  DELETE_FILE: TIMELINESAI_DELETE_FILE_OUTPUT
  DELETE_WEBHOOK: TIMELINESAI_DELETE_WEBHOOK_OUTPUT
  GET_CHATS: TIMELINESAI_GET_CHATS_OUTPUT
  GET_CHAT_MESSAGES: TIMELINESAI_GET_CHAT_MESSAGES_OUTPUT
  GET_FILE_DETAILS: TIMELINESAI_GET_FILE_DETAILS_OUTPUT
  GET_WEBHOOK: TIMELINESAI_GET_WEBHOOK_OUTPUT
  GET_WEBHOOKS: TIMELINESAI_GET_WEBHOOKS_OUTPUT
  GET_WHATSAPP_ACCOUNTS: TIMELINESAI_GET_WHATSAPP_ACCOUNTS_OUTPUT
  LIST_UPLOADED_FILES: TIMELINESAI_LIST_UPLOADED_FILES_OUTPUT
  POST_WEBHOOK: TIMELINESAI_POST_WEBHOOK_OUTPUT
  PUT_WEBHOOK: TIMELINESAI_PUT_WEBHOOK_OUTPUT
  SEND_MESSAGE: TIMELINESAI_SEND_MESSAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of TIMELINESAI's NEW_MESSAGE_RECEIVED trigger payload.
 */
type TIMELINESAI_NEW_MESSAGE_RECEIVED_PAYLOAD = {
  /**
   * Chat Id
   * @description ID of the chat the message belongs to
   */
  chat_id?: string;
  /**
   * Event Type
   * @description Type of event that triggered
   * @default message.received
   */
  event_type: string;
  /**
   * Message Id
   * @description Unique identifier of the message
   */
  message_id?: string;
  /**
   * Message Type
   * @description Type of message (text, media, etc.)
   * @default null
   */
  message_type: string | null;
  /**
   * MessageSender
   * @description Details of the message sender
   * @default null
   */
  sender: {
      /**
       * Id
       * @description Unique identifier of the sender
       */
      id: string;
      /**
       * Name
       * @description Name of the sender
       * @default null
       */
      name: string | null;
  } | null;
  /**
   * Text
   * @description Content of the message
   * @default null
   */
  text: string | null;
  /**
   * Timestamp
   * @description ISO-8601 timestamp when message was sent
   */
  timestamp?: string;
};

/**
 * Map of Composio's TIMELINESAI toolkit.
 */
export const TIMELINESAI = {
  slug: "timelinesai",
  tools: {
    /**
     * Tool to delete an uploaded file by its uid. use after confirming the file is no longer needed.
     */
    DELETE_FILE: "TIMELINESAI_DELETE_FILE",
    /**
     * Tool to delete a webhook subscription by its id. use when you need to remove an existing webhook after confirming the webhook id. example: "delete the webhook with id '9f6a8c3d-56b7-4a1e-8f2e-abcdef123456'."
     */
    DELETE_WEBHOOK: "TIMELINESAI_DELETE_WEBHOOK",
    /**
     * Tool to get full or filtered list of all chats. use when you need to browse or search chats with optional filters. example: "list all unread chats assigned to me."
     */
    GET_CHATS: "TIMELINESAI_GET_CHATS",
    /**
     * Tool to get messages from a specific chat in timelinesai. use when you need to retrieve message history or recent messages from a chat. example: "get the last 20 messages from chat 'chat 123abc'."
     */
    GET_CHAT_MESSAGES: "TIMELINESAI_GET_CHAT_MESSAGES",
    /**
     * Tool to retrieve metadata and temporary download url for an uploaded file. use after uploading a file or when needing its url.
     */
    GET_FILE_DETAILS: "TIMELINESAI_GET_FILE_DETAILS",
    /**
     * Tool to retrieve details of a specific webhook subscription. use after confirming the webhook id.
     */
    GET_WEBHOOK: "TIMELINESAI_GET_WEBHOOK",
    /**
     * Tool to list all webhook subscriptions for the workspace. use when you need to retrieve configured webhooks, optionally with pagination.
     */
    GET_WEBHOOKS: "TIMELINESAI_GET_WEBHOOKS",
    /**
     * Tool to list all whatsapp accounts connected to the workspace. use after configuring whatsapp integration to verify accounts.
     */
    GET_WHATSAPP_ACCOUNTS: "TIMELINESAI_GET_WHATSAPP_ACCOUNTS",
    /**
     * Tool to list files uploaded in your timelinesai workspace. use when you need to retrieve all uploaded files.
     */
    LIST_UPLOADED_FILES: "TIMELINESAI_LIST_UPLOADED_FILES",
    /**
     * Tool to create a new webhook subscription. use when you have the event type and callback url ready.
     */
    POST_WEBHOOK: "TIMELINESAI_POST_WEBHOOK",
    /**
     * Tool to update an existing webhook subscription. use after confirming the webhook id when you need to change the url, subscribed event types, or enable/disable a webhook.
     */
    PUT_WEBHOOK: "TIMELINESAI_PUT_WEBHOOK",
    /**
     * Tool to send a message through timelinesai whatsapp integration. use after identifying the target chat id. example: "send message 'hello world' to chat with id 'chat 123abc'."
     */
    SEND_MESSAGE: "TIMELINESAI_SEND_MESSAGE",
  },
  triggerTypes: {
    /**
     * Polling trigger that monitors for new messages received in TimelinesAI WhatsApp chats.
     */
    NEW_MESSAGE_RECEIVED: "TIMELINESAI_NEW_MESSAGE_RECEIVED",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "TIMELINESAI".
 */
export type TIMELINESAI_TRIGGER_PAYLOADS = {
  NEW_MESSAGE_RECEIVED: TIMELINESAI_NEW_MESSAGE_RECEIVED_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "TIMELINESAI".
 */
export type TIMELINESAI_TRIGGER_EVENTS = {
  NEW_MESSAGE_RECEIVED: TriggerEvent<TIMELINESAI_NEW_MESSAGE_RECEIVED_PAYLOAD>
}
