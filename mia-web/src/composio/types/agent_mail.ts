import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AGENT_MAIL's AGENT_MAIL_GET_MESSAGE tool input.
 */
type AGENT_MAIL_GET_MESSAGE_INPUT = {
  /**
   * Inbox Id
   * @description The inbox ID or email address containing the message
   */
  inbox_id?: string;
  /**
   * Message Id
   * @description The unique ID of the message to retrieve
   */
  message_id?: string;
};

/**
 * Type of AGENT_MAIL's AGENT_MAIL_GET_MESSAGE tool output.
 */
type AGENT_MAIL_GET_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachments
       * @description Message attachments
       * @default null
       */
      attachments: {
          /**
           * Attachment Id
           * @description ID of the attachment
           */
          attachment_id: string;
          /**
           * Content Type
           * @description MIME type of the attachment
           */
          content_type: string;
          /**
           * Filename
           * @description Name of the attachment file
           */
          filename: string;
          /**
           * Inline
           * @description Whether the attachment is inline
           */
          inline: boolean;
          /**
           * Size
           * @description Size of the attachment in bytes
           */
          size: number;
      }[] | null;
      /**
       * Bcc
       * @description BCC email addresses
       * @default null
       */
      bcc: string[] | null;
      /**
       * Cc
       * @description CC email addresses
       * @default null
       */
      cc: string[] | null;
      /**
       * Created At
       * @description When the message was created
       */
      created_at: string;
      /**
       * From
       * @description Sender's email address
       */
      from: string;
      /**
       * Html
       * @description HTML content
       * @default null
       */
      html: string | null;
      /**
       * In Reply To
       * @description ID of message being replied to
       * @default null
       */
      in_reply_to: string | null;
      /**
       * Inbox Id
       * @description ID of the inbox
       */
      inbox_id: string;
      /**
       * Labels
       * @description Labels applied to the message
       */
      labels: string[];
      /**
       * Message Id
       * @description ID of the message
       */
      message_id: string;
      /**
       * Preview
       * @description Text preview of the message
       * @default null
       */
      preview: string | null;
      /**
       * References
       * @description IDs of previous messages in thread
       * @default null
       */
      references: string[] | null;
      /**
       * Reply To
       * @description Reply-to email addresses
       * @default null
       */
      reply_to: string[] | null;
      /**
       * Subject
       * @description Email subject
       * @default null
       */
      subject: string | null;
      /**
       * Text
       * @description Plain text content
       * @default null
       */
      text: string | null;
      /**
       * Thread Id
       * @description ID of the thread
       */
      thread_id: string;
      /**
       * Timestamp
       * @description When the message was sent
       */
      timestamp: string;
      /**
       * To
       * @description Recipient email addresses
       */
      to: string[];
      /**
       * Updated At
       * @description When the message was last updated
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
 * Type of AGENT_MAIL's AGENT_MAIL_LIST_MESSAGES tool input.
 */
type AGENT_MAIL_LIST_MESSAGES_INPUT = {
  /**
   * Ascending
   * @description Whether to sort messages in ascending order by timestamp
   * @default false
   */
  ascending: boolean | null;
  /**
   * Inbox Id
   * @description The inbox ID or email address to list messages from
   */
  inbox_id?: string;
  /**
   * Labels
   * @description Filter messages by labels
   * @default null
   */
  labels: string[] | null;
  /**
   * Limit
   * @description Maximum number of messages to return (1-100)
   * @default 50
   */
  limit: number | null;
  /**
   * Page Token
   * @description Token for pagination to get the next set of results
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of AGENT_MAIL's AGENT_MAIL_LIST_MESSAGES tool output.
 */
type AGENT_MAIL_LIST_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of messages returned
       */
      count: number;
      /**
       * Limit
       * @description Limit used for the query
       * @default null
       */
      limit: number | null;
      /**
       * Messages
       * @description List of messages
       */
      messages: {
          /**
           * Attachments
           * @description Message attachments
           * @default null
           */
          attachments: {
              /**
               * Attachment Id
               * @description ID of the attachment
               */
              attachment_id: string;
              /**
               * Content Type
               * @description MIME type of the attachment
               */
              content_type: string;
              /**
               * Filename
               * @description Name of the attachment file
               */
              filename: string;
              /**
               * Inline
               * @description Whether the attachment is inline
               */
              inline: boolean;
              /**
               * Size
               * @description Size of the attachment in bytes
               */
              size: number;
          }[] | null;
          /**
           * Bcc
           * @description BCC email addresses
           * @default null
           */
          bcc: string[] | null;
          /**
           * Cc
           * @description CC email addresses
           * @default null
           */
          cc: string[] | null;
          /**
           * Created At
           * @description When the message was created
           */
          created_at: string;
          /**
           * From
           * @description Sender's email address
           */
          from: string;
          /**
           * Html
           * @description HTML content
           * @default null
           */
          html: string | null;
          /**
           * In Reply To
           * @description ID of message being replied to
           * @default null
           */
          in_reply_to: string | null;
          /**
           * Inbox Id
           * @description ID of the inbox
           */
          inbox_id: string;
          /**
           * Labels
           * @description Labels applied to the message
           */
          labels: string[];
          /**
           * Message Id
           * @description ID of the message
           */
          message_id: string;
          /**
           * Preview
           * @description Text preview of the message
           * @default null
           */
          preview: string | null;
          /**
           * References
           * @description IDs of previous messages in thread
           * @default null
           */
          references: string[] | null;
          /**
           * Reply To
           * @description Reply-to email addresses
           * @default null
           */
          reply_to: string[] | null;
          /**
           * Subject
           * @description Email subject
           * @default null
           */
          subject: string | null;
          /**
           * Text
           * @description Plain text content
           * @default null
           */
          text: string | null;
          /**
           * Thread Id
           * @description ID of the thread
           */
          thread_id: string;
          /**
           * Timestamp
           * @description When the message was sent
           */
          timestamp: string;
          /**
           * To
           * @description Recipient email addresses
           */
          to: string[];
          /**
           * Updated At
           * @description When the message was last updated
           */
          updated_at: string;
      }[];
      /**
       * Next Page Token
       * @description Token for next page
       * @default null
       */
      next_page_token: string | null;
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
 * Type of AGENT_MAIL's AGENT_MAIL_SEND_EMAIL tool input.
 */
type AGENT_MAIL_SEND_EMAIL_INPUT = {
  /**
   * Bcc
   * @description List of BCC recipient email addresses
   * @default null
   */
  bcc: string[] | null;
  /**
   * Cc
   * @description List of CC recipient email addresses
   * @default null
   */
  cc: string[] | null;
  /**
   * Html
   * @description HTML content of the email. If provided, both text and html should be included for best compatibility.
   * @default null
   */
  html: string | null;
  /**
   * Inbox Id
   * @description The inbox ID or email address to send from (e.g., 'agent@agentmail.to')
   */
  inbox_id?: string;
  /**
   * Labels
   * @description Labels to apply to the sent message
   * @default null
   */
  labels: string[] | null;
  /**
   * Reply To
   * @description Reply-to email addresses
   * @default null
   */
  reply_to: string[] | null;
  /**
   * Subject
   * @description Email subject line
   * @default null
   */
  subject: string | null;
  /**
   * Text
   * @description Plain text content of the email
   * @default null
   */
  text: string | null;
  /**
   * To
   * @description List of recipient email addresses
   */
  to?: string[];
};

/**
 * Type of AGENT_MAIL's AGENT_MAIL_SEND_EMAIL tool output.
 */
type AGENT_MAIL_SEND_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Inbox Id
       * @description ID of the inbox used to send
       */
      inbox_id: string;
      /**
       * Message Id
       * @description ID of the sent message
       */
      message_id: string;
      /**
       * Success
       * @description Whether the email was sent successfully
       * @default true
       */
      success: boolean;
      /**
       * Thread Id
       * @description ID of the thread the message belongs to
       */
      thread_id: string;
      /**
       * Timestamp
       * @description Timestamp when the message was sent
       */
      timestamp: string;
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
 * Type map of all available tool input types for toolkit "AGENT_MAIL".
 */
export type AGENT_MAIL_TOOL_INPUTS = {
  GET_MESSAGE: AGENT_MAIL_GET_MESSAGE_INPUT
  LIST_MESSAGES: AGENT_MAIL_LIST_MESSAGES_INPUT
  SEND_EMAIL: AGENT_MAIL_SEND_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AGENT_MAIL".
 */
export type AGENT_MAIL_TOOL_OUTPUTS = {
  GET_MESSAGE: AGENT_MAIL_GET_MESSAGE_OUTPUT
  LIST_MESSAGES: AGENT_MAIL_LIST_MESSAGES_OUTPUT
  SEND_EMAIL: AGENT_MAIL_SEND_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of AGENT_MAIL's NEW_EMAIL_TRIGGER trigger payload.
 */
type AGENT_MAIL_NEW_EMAIL_TRIGGER_PAYLOAD = {
  /**
   * Attachments
   * @description Message attachments
   * @default null
   */
  attachments: {
      /**
       * Attachment Id
       * @description ID of the attachment
       */
      attachment_id: string;
      /**
       * Content Type
       * @description MIME type of the attachment
       */
      content_type: string;
      /**
       * Filename
       * @description Name of the attachment file
       */
      filename: string;
      /**
       * Inline
       * @description Whether the attachment is inline
       */
      inline: boolean;
      /**
       * Size
       * @description Size of the attachment in bytes
       */
      size: number;
  }[] | null;
  /**
   * Bcc
   * @description BCC email addresses
   * @default null
   */
  bcc: string[] | null;
  /**
   * Cc
   * @description CC email addresses
   * @default null
   */
  cc: string[] | null;
  /**
   * Created At
   * @description When the message was created
   */
  created_at?: string;
  /**
   * From
   * @description Sender's email address
   */
  from?: string;
  /**
   * Html
   * @description HTML content
   * @default null
   */
  html: string | null;
  /**
   * In Reply To
   * @description ID of message being replied to
   * @default null
   */
  in_reply_to: string | null;
  /**
   * Inbox Id
   * @description ID of the inbox
   */
  inbox_id?: string;
  /**
   * Labels
   * @description Labels applied to the message
   */
  labels?: string[];
  /**
   * Message Id
   * @description ID of the message
   */
  message_id?: string;
  /**
   * Preview
   * @description Text preview of the message
   * @default null
   */
  preview: string | null;
  /**
   * References
   * @description IDs of previous messages in thread
   * @default null
   */
  references: string[] | null;
  /**
   * Reply To
   * @description Reply-to email addresses
   * @default null
   */
  reply_to: string[] | null;
  /**
   * Subject
   * @description Email subject
   * @default null
   */
  subject: string | null;
  /**
   * Text
   * @description Plain text content
   * @default null
   */
  text: string | null;
  /**
   * Thread Id
   * @description ID of the thread
   */
  thread_id?: string;
  /**
   * Timestamp
   * @description When the message was received
   */
  timestamp?: string;
  /**
   * To
   * @description Recipient email addresses
   */
  to?: string[];
  /**
   * Updated At
   * @description When the message was last updated
   */
  updated_at?: string;
};

/**
 * Map of Composio's AGENT_MAIL toolkit.
 */
export const AGENT_MAIL = {
  slug: "agent_mail",
  tools: {
    /**
     * Get a specific message from an agentmail inbox
     */
    GET_MESSAGE: "AGENT_MAIL_GET_MESSAGE",
    /**
     * List messages from an agentmail inbox
     */
    LIST_MESSAGES: "AGENT_MAIL_LIST_MESSAGES",
    /**
     * Send an email using agentmail api
     */
    SEND_EMAIL: "AGENT_MAIL_SEND_EMAIL",
  },
  triggerTypes: {
    /**
     * Trigger for new emails in an AgentMail inbox
     */
    NEW_EMAIL_TRIGGER: "AGENT_MAIL_NEW_EMAIL_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "AGENT_MAIL".
 */
export type AGENT_MAIL_TRIGGER_PAYLOADS = {
  NEW_EMAIL_TRIGGER: AGENT_MAIL_NEW_EMAIL_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "AGENT_MAIL".
 */
export type AGENT_MAIL_TRIGGER_EVENTS = {
  NEW_EMAIL_TRIGGER: TriggerEvent<AGENT_MAIL_NEW_EMAIL_TRIGGER_PAYLOAD>
}
