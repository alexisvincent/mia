import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GMAIL's GMAIL_ADD_LABEL_TO_EMAIL tool input.
 */
type GMAIL_ADD_LABEL_TO_EMAIL_INPUT = {
  /**
   * Add Label Ids
   * @description Label IDs to add. For custom labels, obtain IDs via 'listLabels'. System labels (e.g., 'INBOX', 'SPAM') can also be used.
   * @default []
   */
  add_label_ids: string[];
  /**
   * Message Id
   * @description Immutable ID of the message to modify (e.g., from 'fetchEmails' or 'fetchMessagesByThreadId').
   */
  message_id?: string;
  /**
   * Remove Label Ids
   * @description Label IDs to remove. For custom labels, obtain IDs via 'listLabels'. System labels can also be used.
   * @default []
   */
  remove_label_ids: string[];
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_ADD_LABEL_TO_EMAIL tool output.
 */
type GMAIL_ADD_LABEL_TO_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full `Message` resource with updated labels.
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
 * Type of GMAIL's GMAIL_CREATE_EMAIL_DRAFT tool input.
 */
type GMAIL_CREATE_EMAIL_DRAFT_INPUT = {
  /**
   * FileUploadable
   * @description File to attach to the email.
   * @default null
   */
  attachment: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  } | null;
  /**
   * Bcc
   * @description 'Bcc' (blind carbon copy) recipient email addresses.
   * @default []
   */
  bcc: string[];
  /**
   * Body
   * @description Email body content (plain text or HTML); `is_html` must be True if HTML.
   */
  body?: string;
  /**
   * Cc
   * @description 'Cc' (carbon copy) recipient email addresses.
   * @default []
   */
  cc: string[];
  /**
   * Extra Recipients
   * @description Additional 'To' recipient email addresses.
   * @default []
   */
  extra_recipients: string[];
  /**
   * Is Html
   * @description Set to True if `body` is HTML, otherwise the action may fail.
   * @default false
   */
  is_html: boolean;
  /**
   * Recipient Email
   * @description Primary recipient's email address.
   */
  recipient_email?: string;
  /**
   * Subject
   * @description Email subject line.
   */
  subject?: string;
  /**
   * Thread Id
   * @description ID of an existing Gmail thread to reply to; omit for new thread.
   * @default null
   */
  thread_id: string | null;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_CREATE_EMAIL_DRAFT tool output.
 */
type GMAIL_CREATE_EMAIL_DRAFT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Gmail API response with created draft details, including ID.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of GMAIL's GMAIL_CREATE_LABEL tool input.
 */
type GMAIL_CREATE_LABEL_INPUT = {
  /**
   * Background Color
   * @description The background color of the label, in hex (e.g., "#FFFFFF").
   * @default null
   */
  background_color: string | null;
  /**
   * Label List Visibility
   * @description Controls how the label is displayed in the label list in the Gmail sidebar.
   * @default labelShow
   */
  label_list_visibility: string;
  /**
   * Label Name
   * @description The name for the new label. Must be unique within the account, non-blank, maximum length 225 characters, cannot contain ',' or '/', not only whitespace, and must not be a reserved system label (e.g., INBOX, DRAFTS, SENT).
   */
  label_name?: string;
  /**
   * Message List Visibility
   * @description Controls how messages with this label are displayed in the message list.
   * @default show
   */
  message_list_visibility: string;
  /**
   * Text Color
   * @description The text color of the label, in hex (e.g., "#000000").
   * @default null
   */
  text_color: string | null;
  /**
   * User Id
   * @description The email address of the user in whose account the label will be created.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_CREATE_LABEL tool output.
 */
type GMAIL_CREATE_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Gmail for the created label.
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
 * Type of GMAIL's GMAIL_DELETE_DRAFT tool input.
 */
type GMAIL_DELETE_DRAFT_INPUT = {
  /**
   * Draft Id
   * @description Immutable ID of the draft to delete, typically obtained when the draft was created.
   */
  draft_id?: string;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user; 'me' is recommended.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_DELETE_DRAFT tool output.
 */
type GMAIL_DELETE_DRAFT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates successful deletion; an exception is raised on error rather than returning false.
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
 * Type of GMAIL's GMAIL_DELETE_MESSAGE tool input.
 */
type GMAIL_DELETE_MESSAGE_INPUT = {
  /**
   * Message Id
   * @description Identifier of the email message to delete.
   */
  message_id?: string;
  /**
   * User Id
   * @description User's email address. The special value 'me' refers to the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_DELETE_MESSAGE tool output.
 */
type GMAIL_DELETE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the message was successfully deleted.
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
 * Type of GMAIL's GMAIL_FETCH_EMAILS tool input.
 */
type GMAIL_FETCH_EMAILS_INPUT = {
  /**
   * Ids Only
   * @description If true, only returns message IDs from the list API without fetching individual message details. Fastest option for getting just message IDs and thread IDs.
   * @default false
   */
  ids_only: boolean;
  /**
   * Include Payload
   * @description Set to true to include full message payload (headers, body, attachments); false for metadata only.
   * @default true
   */
  include_payload: boolean;
  /**
   * Include Spam Trash
   * @description Set to true to include messages from 'SPAM' and 'TRASH'.
   * @default false
   */
  include_spam_trash: boolean;
  /**
   * Label Ids
   * @description Filter by label IDs; only messages with all specified labels are returned. Common IDs: 'INBOX', 'SPAM', 'TRASH', 'UNREAD', 'STARRED', 'IMPORTANT', 'CATEGORY_PRIMARY' (alias 'CATEGORY_PERSONAL'), 'CATEGORY_SOCIAL', 'CATEGORY_PROMOTIONS', 'CATEGORY_UPDATES', 'CATEGORY_FORUMS'. Use 'listLabels' action for custom IDs.
   */
  label_ids?: string[];
  /**
   * Max Results
   * @description Maximum number of messages to retrieve per page.
   * @default 1
   */
  max_results: number;
  /**
   * Page Token
   * @description Token for retrieving a specific page, obtained from a previous response's `nextPageToken`. Omit for the first page.
   * @default null
   */
  page_token: string | null;
  /**
   * Query
   * @description Gmail advanced search query (e.g., 'from:user subject:meeting'). Supports operators like 'from:', 'to:', 'subject:', 'label:', 'has:attachment', 'is:unread', 'after:YYYY/MM/DD', 'before:YYYY/MM/DD', AND/OR/NOT. Use quotes for exact phrases. Omit for no query filter.
   * @default null
   */
  query: string | null;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
  /**
   * Verbose
   * @description If false, uses optimized concurrent metadata fetching for faster performance (~75% improvement). If true, uses standard detailed message fetching. When false, only essential fields (subject, sender, recipient, time, labels) are guaranteed.
   * @default true
   */
  verbose: boolean;
};

/**
 * Type of GMAIL's GMAIL_FETCH_EMAILS tool output.
 */
type GMAIL_FETCH_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description List of retrieved email messages. Includes full content if `include_payload` was true, otherwise metadata.
       */
      messages: {
          /**
           * Attachment List
           * @description The list of attachments
           */
          attachmentList?: unknown[] | null;
          /**
           * Label Ids
           * @description The label IDs of the message
           */
          labelIds?: unknown[] | null;
          /**
           * Message Id
           * @description The message ID of the message
           */
          messageId?: string | null;
          /**
           * Message Text
           * @description The text of the message
           */
          messageText?: string | null;
          /**
           * Message Timestamp
           * @description The timestamp of the message
           */
          messageTimestamp?: string | null;
          /**
           * Payload
           * @description The payload of the message
           */
          payload?: {
              [key: string]: unknown;
          } | null;
          /**
           * Preview
           * @description The preview of the message
           */
          preview?: {
              [key: string]: unknown;
          } | null;
          /**
           * Sender
           * @description The sender of the message
           */
          sender?: string | null;
          /**
           * Subject
           * @description The subject of the message
           */
          subject?: string | null;
          /**
           * Thread Id
           * @description The thread ID of the message
           */
          threadId?: string | null;
          /**
           * To
           * @description The recipient of the message
           */
          to?: string | null;
      }[];
      /**
       * Next Page Token
       * @description Token for the next page of results; use in subsequent `page_token` request. Empty if no more results.
       */
      nextPageToken: string;
      /**
       * Result Size Estimate
       * @description Estimated total messages matching the query (not just this page).
       */
      resultSizeEstimate: number;
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
 * Type of GMAIL's GMAIL_FETCH_MESSAGE_BY_MESSAGE_ID tool input.
 */
type GMAIL_FETCH_MESSAGE_BY_MESSAGE_ID_INPUT = {
  /**
   * Format
   * @description Format for message content: 'minimal' (ID/labels), 'full' (complete data), 'raw' (base64url string), 'metadata' (ID/labels/headers).
   * @default full
   */
  format: string;
  /**
   * Message Id
   * @description Unique ID of the email message to retrieve, obtainable from actions like 'List Messages'.
   */
  message_id?: string;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_FETCH_MESSAGE_BY_MESSAGE_ID tool output.
 */
type GMAIL_FETCH_MESSAGE_BY_MESSAGE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachment List
       * @description The list of attachments
       */
      attachmentList?: unknown[] | null;
      /**
       * Label Ids
       * @description The label IDs of the message
       */
      labelIds?: unknown[] | null;
      /**
       * Message Id
       * @description The message ID of the message
       */
      messageId?: string | null;
      /**
       * Message Text
       * @description The text of the message
       */
      messageText?: string | null;
      /**
       * Message Timestamp
       * @description The timestamp of the message
       */
      messageTimestamp?: string | null;
      /**
       * Payload
       * @description The payload of the message
       */
      payload?: {
          [key: string]: unknown;
      } | null;
      /**
       * Preview
       * @description The preview of the message
       */
      preview?: {
          [key: string]: unknown;
      } | null;
      /**
       * Sender
       * @description The sender of the message
       */
      sender?: string | null;
      /**
       * Subject
       * @description The subject of the message
       */
      subject?: string | null;
      /**
       * Thread Id
       * @description The thread ID of the message
       */
      threadId?: string | null;
      /**
       * To
       * @description The recipient of the message
       */
      to?: string | null;
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
 * Type of GMAIL's GMAIL_FETCH_MESSAGE_BY_THREAD_ID tool input.
 */
type GMAIL_FETCH_MESSAGE_BY_THREAD_ID_INPUT = {
  /**
   * Page Token
   * @description Opaque page token for fetching a specific page of messages if results are paginated.
   * @default
   */
  page_token: string;
  /**
   * Thread Id
   * @description Unique ID of the thread, obtainable from actions like 'listThreads' or 'fetchEmails'.
   */
  thread_id?: string;
  /**
   * User Id
   * @description The email address of the user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_FETCH_MESSAGE_BY_THREAD_ID tool output.
 */
type GMAIL_FETCH_MESSAGE_BY_THREAD_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description Retrieved messages from the thread.
       */
      messages: {
          /**
           * Attachment List
           * @description The list of attachments
           */
          attachmentList?: unknown[] | null;
          /**
           * Label Ids
           * @description The label IDs of the message
           */
          labelIds?: unknown[] | null;
          /**
           * Message Id
           * @description The message ID of the message
           */
          messageId?: string | null;
          /**
           * Message Text
           * @description The text of the message
           */
          messageText?: string | null;
          /**
           * Message Timestamp
           * @description The timestamp of the message
           */
          messageTimestamp?: string | null;
          /**
           * Payload
           * @description The payload of the message
           */
          payload?: {
              [key: string]: unknown;
          } | null;
          /**
           * Preview
           * @description The preview of the message
           */
          preview?: {
              [key: string]: unknown;
          } | null;
          /**
           * Sender
           * @description The sender of the message
           */
          sender?: string | null;
          /**
           * Subject
           * @description The subject of the message
           */
          subject?: string | null;
          /**
           * Thread Id
           * @description The thread ID of the message
           */
          threadId?: string | null;
          /**
           * To
           * @description The recipient of the message
           */
          to?: string | null;
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
 * Type of GMAIL's GMAIL_GET_ATTACHMENT tool input.
 */
type GMAIL_GET_ATTACHMENT_INPUT = {
  /**
   * Attachment Id
   * @description ID of the attachment to retrieve.
   */
  attachment_id?: string;
  /**
   * File Name
   * @description Desired filename for the downloaded attachment.
   */
  file_name?: string;
  /**
   * Message Id
   * @description Immutable ID of the message containing the attachment.
   */
  message_id?: string;
  /**
   * User Id
   * @description User's email address ('me' for authenticated user).
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_GET_ATTACHMENT tool output.
 */
type GMAIL_GET_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description Retrieved attachment, prepared for download.
       */
      file: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description URL of the file.
           */
          s3url: string;
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
 * Type of GMAIL's GMAIL_GET_CONTACTS tool input.
 */
type GMAIL_GET_CONTACTS_INPUT = {
  /**
   * Include Other Contacts
   * @description Include 'Other Contacts' (interacted with but not explicitly saved) in addition to regular contacts; if true, fetches from both endpoints and merges results.
   * @default true
   */
  include_other_contacts: boolean;
  /**
   * Page Token
   * @description Token to retrieve a specific page of results, obtained from 'nextPageToken' in a previous response.
   */
  page_token?: string;
  /**
   * Person Fields
   * @description Comma-separated person fields to retrieve for each contact (e.g., 'names,emailAddresses').
   * @default emailAddresses,names,birthdays,genders
   */
  person_fields: string;
  /**
   * Resource Name
   * @description Identifier for the person resource whose connections are listed; use 'people/me' for the authenticated user.
   * @default people/me
   */
  resource_name: string;
};

/**
 * Type of GMAIL's GMAIL_GET_CONTACTS tool output.
 */
type GMAIL_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from the Google People API, typically containing a list of 'connections' (contacts) with requested 'personFields' and potentially a 'nextPageToken'.
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
 * Type of GMAIL's GMAIL_GET_PEOPLE tool input.
 */
type GMAIL_GET_PEOPLE_INPUT = {
  /**
   * Other Contacts
   * @description If true, retrieves 'Other Contacts' (people interacted with but not explicitly saved), ignoring `resource_name` and enabling pagination/sync. If false, retrieves information for the single person specified by `resource_name`.
   * @default false
   */
  other_contacts: boolean;
  /**
   * Page Size
   * @description The number of 'Other Contacts' to return per page. Applicable only when `other_contacts` is true.
   * @default 10
   */
  page_size: number;
  /**
   * Page Token
   * @description An opaque token from a previous response to retrieve the next page of 'Other Contacts' results. Applicable only when `other_contacts` is true and paginating.
   * @default
   */
  page_token: string;
  /**
   * Person Fields
   * @description A comma-separated field mask to restrict which fields on the person (or persons) are returned. Consult the Google People API documentation for a comprehensive list of valid fields.
   * @default emailAddresses,names,birthdays,genders
   */
  person_fields: string;
  /**
   * Resource Name
   * @description Resource name identifying the person for whom to retrieve information (like the authenticated user or a specific contact). Used only when `other_contacts` is false.
   * @default people/me
   */
  resource_name: string;
  /**
   * Sync Token
   * @description A token from a previous 'Other Contacts' list call to retrieve only changes since the last sync; leave empty for an initial full sync. Applicable only when `other_contacts` is true.
   * @default
   */
  sync_token: string;
};

/**
 * Type of GMAIL's GMAIL_GET_PEOPLE tool output.
 */
type GMAIL_GET_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Other Contacts
       * @description Contains the list of 'Other Contacts', potentially including tokens for pagination or future syncs. Populated when `other_contacts` is true.
       * @default {}
       */
      other_contacts: {
          [key: string]: unknown;
      };
      /**
       * People Data
       * @description Contains the person's data as requested, populated when `other_contacts` is false and a single person is fetched.
       * @default {}
       */
      people_data: {
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
 * Type of GMAIL's GMAIL_GET_PROFILE tool input.
 */
type GMAIL_GET_PROFILE_INPUT = {
  /**
   * User Id
   * @description The email address of the Gmail user whose profile is to be retrieved, or the special value 'me' to indicate the currently authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_GET_PROFILE tool output.
 */
type GMAIL_GET_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The user's Gmail profile information. Key fields typically include 'emailAddress' (primary email), 'messagesTotal' (total messages), 'threadsTotal' (total threads), and 'historyId' (mailbox history ID).
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
 * Type of GMAIL's GMAIL_LIST_DRAFTS tool input.
 */
type GMAIL_LIST_DRAFTS_INPUT = {
  /**
   * Max Results
   * @description Maximum number of drafts to return per page.
   * @default 1
   */
  max_results: number;
  /**
   * Page Token
   * @description Token from a previous response to retrieve a specific page of drafts.
   * @default
   */
  page_token: string;
  /**
   * User Id
   * @description User's mailbox ID; use 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
  /**
   * Verbose
   * @description If true, fetches full draft details including subject, sender, recipient, body, and timestamp. If false, returns only draft IDs (faster).
   * @default false
   */
  verbose: boolean;
};

/**
 * Type of GMAIL's GMAIL_LIST_DRAFTS tool output.
 */
type GMAIL_LIST_DRAFTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drafts
       * @description List of draft resources. When verbose=false: contains only 'id' and 'message' with minimal data. When verbose=true: contains full draft details including subject, sender, body, etc.
       */
      drafts: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token for fetching the next page of drafts, if more are available.
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
 * Type of GMAIL's GMAIL_LIST_LABELS tool input.
 */
type GMAIL_LIST_LABELS_INPUT = {
  /**
   * User Id
   * @description Identifies the Gmail account (owner's email or 'me' for authenticated user) for which labels will be listed.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_LIST_LABELS tool output.
 */
type GMAIL_LIST_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Labels
       * @description Retrieved label resources, each providing `id`, `name`, `type` ('system'/'user'), `messageListVisibility` (message list visibility), and `labelListVisibility` (label list visibility).
       */
      labels: unknown[];
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
 * Type of GMAIL's GMAIL_LIST_THREADS tool input.
 */
type GMAIL_LIST_THREADS_INPUT = {
  /**
   * Max Results
   * @description Maximum number of threads to return.
   * @default 10
   */
  max_results: number;
  /**
   * Page Token
   * @description Token from a previous response to retrieve a specific page of results; omit for the first page.
   * @default
   */
  page_token: string;
  /**
   * Query
   * @description Filter for threads, using Gmail search query syntax (e.g., 'from:user@example.com is:unread').
   * @default
   */
  query: string;
  /**
   * User Id
   * @description The user's email address or 'me' to specify the authenticated Gmail account.
   * @default me
   */
  user_id: string;
  /**
   * Verbose
   * @description If false, returns threads with basic fields (id, snippet, historyId). If true, returns threads with complete message details including headers, body, attachments, and metadata for each message in the thread.
   * @default false
   */
  verbose: boolean;
};

/**
 * Type of GMAIL's GMAIL_LIST_THREADS tool output.
 */
type GMAIL_LIST_THREADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token for the next page of results; if present, use as `page_token` in a subsequent request to fetch more threads.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Threads
       * @description List of email thread resources, each usually containing 'id', 'snippet', and 'historyId'.
       */
      threads: unknown[];
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
 * Type of GMAIL's GMAIL_MODIFY_THREAD_LABELS tool input.
 */
type GMAIL_MODIFY_THREAD_LABELS_INPUT = {
  /**
   * Add Label Ids
   * @description List of label IDs to add to the thread; these labels must exist.
   * @default null
   */
  add_label_ids: string[] | null;
  /**
   * Remove Label Ids
   * @description List of label IDs to remove from the thread; these labels must exist.
   * @default null
   */
  remove_label_ids: string[] | null;
  /**
   * Thread Id
   * @description Immutable ID of the thread to modify.
   */
  thread_id?: string;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_MODIFY_THREAD_LABELS tool output.
 */
type GMAIL_MODIFY_THREAD_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Dict
       * @description Full Thread resource from the Gmail API as a dictionary, representing the thread's state after modification.
       */
      response_dict: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates whether the labels were successfully modified on the thread.
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
 * Type of GMAIL's GMAIL_MOVE_TO_TRASH tool input.
 */
type GMAIL_MOVE_TO_TRASH_INPUT = {
  /**
   * Message Id
   * @description Identifier of the email message to move to trash.
   */
  message_id?: string;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_MOVE_TO_TRASH tool output.
 */
type GMAIL_MOVE_TO_TRASH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description The Message resource that was moved to trash, including ID, thread ID, and 'TRASH' in label IDs.
       */
      email: {
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
 * Type of GMAIL's GMAIL_PATCH_LABEL tool input.
 */
type GMAIL_PATCH_LABEL_INPUT = {
  /**
   * PatchLabelColor
   * @description The color to assign to the label. Color is only available for labels that have their `type` set to `user`.
   * @default null
   */
  color: {
      /**
       * Background Color
       * @description The background color of the label, represented as a hex string. Must be one of Gmail's predefined colors from the color palette. See: https://developers.google.com/workspace/gmail/api/guides/labels#color_palette
       * @default null
       */
      backgroundColor: string | null;
      /**
       * Text Color
       * @description The text color of the label, represented as a hex string. Must be one of Gmail's predefined colors from the color palette. See: https://developers.google.com/workspace/gmail/api/guides/labels#color_palette
       * @default null
       */
      textColor: string | null;
  } | null;
  /**
   * Id
   * @description The ID of the label to update.
   */
  id?: string;
  /**
   * Label List Visibility
   * @description The visibility of the label in the label list in the Gmail web interface.
   * @default null
   */
  labelListVisibility: string | null;
  /**
   * Message List Visibility
   * @description The visibility of messages with this label in the message list in the Gmail web interface.
   * @default null
   */
  messageListVisibility: string | null;
  /**
   * Name
   * @description The display name of the label.
   * @default null
   */
  name: string | null;
  /**
   * User Id
   * @description The user's email address. The special value `me` can be used to indicate the authenticated user.
   */
  userId?: string;
};

/**
 * Type of GMAIL's GMAIL_PATCH_LABEL tool output.
 */
type GMAIL_PATCH_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * PatchLabelColor
       * @description The color assigned to the label.
       * @default null
       */
      color: {
          /**
           * Background Color
           * @description The background color of the label, represented as a hex string. Must be one of Gmail's predefined colors from the color palette. See: https://developers.google.com/workspace/gmail/api/guides/labels#color_palette
           * @default null
           */
          backgroundColor: string | null;
          /**
           * Text Color
           * @description The text color of the label, represented as a hex string. Must be one of Gmail's predefined colors from the color palette. See: https://developers.google.com/workspace/gmail/api/guides/labels#color_palette
           * @default null
           */
          textColor: string | null;
      } | null;
      /**
       * Id
       * @description The immutable ID of the label.
       */
      id: string;
      /**
       * Label List Visibility
       * @description The visibility of the label in the label list in the Gmail web interface.
       * @default null
       */
      labelListVisibility: string | null;
      /**
       * Message List Visibility
       * @description The visibility of messages with this label in the message list in the Gmail web interface.
       * @default null
       */
      messageListVisibility: string | null;
      /**
       * Messages Total
       * @description The total number of messages with this label.
       * @default null
       */
      messagesTotal: number | null;
      /**
       * Messages Unread
       * @description The number of unread messages with this label.
       * @default null
       */
      messagesUnread: number | null;
      /**
       * Name
       * @description The display name of the label.
       * @default null
       */
      name: string | null;
      /**
       * Threads Total
       * @description The total number of threads with this label.
       * @default null
       */
      threadsTotal: number | null;
      /**
       * Threads Unread
       * @description The number of unread threads with this label.
       * @default null
       */
      threadsUnread: number | null;
      /**
       * Type
       * @description The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread.
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
 * Type of GMAIL's GMAIL_REMOVE_LABEL tool input.
 */
type GMAIL_REMOVE_LABEL_INPUT = {
  /**
   * Label Id
   * @description ID of the user-created label to be permanently deleted; must exist and not be a system label.
   */
  label_id?: string;
  /**
   * User Id
   * @description User's email address or 'me' for the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_REMOVE_LABEL tool output.
 */
type GMAIL_REMOVE_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the label deletion was successful (e.g., API returned 204 status).
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
 * Type of GMAIL's GMAIL_REPLY_TO_THREAD tool input.
 */
type GMAIL_REPLY_TO_THREAD_INPUT = {
  /**
   * FileUploadable
   * @description File to attach to the reply. Just Provide file path here
   * @default null
   */
  attachment: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  } | null;
  /**
   * Bcc
   * @description BCC recipients' email addresses (hidden from other recipients).
   * @default []
   */
  bcc: string[];
  /**
   * Cc
   * @description CC recipients' email addresses.
   * @default []
   */
  cc: string[];
  /**
   * Extra Recipients
   * @description Additional 'To' recipients' email addresses.
   * @default []
   */
  extra_recipients: string[];
  /**
   * Is Html
   * @description Indicates if `message_body` is HTML; if True, body must be valid HTML, if False, body should not contain HTML tags.
   * @default false
   */
  is_html: boolean;
  /**
   * Message Body
   * @description Content of the reply message, either plain text or HTML.
   */
  message_body?: string;
  /**
   * Recipient Email
   * @description Primary recipient's email address.
   */
  recipient_email?: string;
  /**
   * Thread Id
   * @description Identifier of the Gmail thread for the reply.
   */
  thread_id?: string;
  /**
   * User Id
   * @description Identifier for the user sending the reply; 'me' refers to the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_REPLY_TO_THREAD tool output.
 */
type GMAIL_REPLY_TO_THREAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw response data from the Gmail API after sending the reply, typically including the sent message's ID.
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
 * Type of GMAIL's GMAIL_SEARCH_PEOPLE tool input.
 */
type GMAIL_SEARCH_PEOPLE_INPUT = {
  /**
   * Other Contacts
   * @description Include 'Other Contacts' (interacted with but not explicitly saved) in search results; if false, searches only primary contacts.
   * @default true
   */
  other_contacts: boolean;
  /**
   * Page Size
   * @description Maximum results to return; values >30 are capped to 30 by the API.
   * @default 10
   */
  pageSize: number;
  /**
   * Person Fields
   * @description Comma-separated fields to return (e.g., 'names,emailAddresses'); see PersonFields enum. If 'other_contacts' is true, only 'emailAddresses', 'names', 'phoneNumbers' are allowed.
   * @default emailAddresses,names,phoneNumbers
   */
  person_fields: string;
  /**
   * Query
   * @description Matches contact names, nicknames, email addresses, phone numbers, and organization fields.
   */
  query?: string;
};

/**
 * Type of GMAIL's GMAIL_SEARCH_PEOPLE tool output.
 */
type GMAIL_SEARCH_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from the People API; structure may vary if 'other_contacts' was searched.
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
 * Type of GMAIL's GMAIL_SEND_DRAFT tool input.
 */
type GMAIL_SEND_DRAFT_INPUT = {
  /**
   * Draft Id
   * @description The ID of the draft to send.
   */
  draft_id?: string;
  /**
   * User Id
   * @description The user's email address. The special value `me` can be used to indicate the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_SEND_DRAFT tool output.
 */
type GMAIL_SEND_DRAFT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The immutable ID of the sent message.
       * @default null
       */
      id: string | null;
      /**
       * Label Ids
       * @description List of IDs of labels applied to this message.
       * @default null
       */
      labelIds: string[] | null;
      /**
       * Raw
       * @description The entire email message in RFC 2822 format.
       * @default null
       */
      raw: string | null;
      /**
       * Snippet
       * @description A short part of the message text.
       * @default null
       */
      snippet: string | null;
      /**
       * Thread Id
       * @description The ID of the thread the message belongs to.
       * @default null
       */
      threadId: string | null;
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
 * Type of GMAIL's GMAIL_SEND_EMAIL tool input.
 */
type GMAIL_SEND_EMAIL_INPUT = {
  /**
   * FileUploadable
   * @description File to attach; ensure `s3key`, `mimetype`, and `name` are set if provided. Omit or set to null for no attachment.
   */
  attachment?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Bcc
   * @description Blind Carbon Copy (BCC) recipients' email addresses.
   * @default []
   */
  bcc: string[];
  /**
   * Body
   * @description Email content (plain text or HTML); if HTML, `is_html` must be `True`.
   */
  body?: string;
  /**
   * Cc
   * @description Carbon Copy (CC) recipients' email addresses.
   * @default []
   */
  cc: string[];
  /**
   * Extra Recipients
   * @description Additional 'To' recipients' email addresses (not Cc or Bcc).
   * @default []
   */
  extra_recipients: string[];
  /**
   * Is Html
   * @description Set to `True` if the email body contains HTML tags.
   * @default false
   */
  is_html: boolean;
  /**
   * Recipient Email
   * @description Primary recipient's email address.
   */
  recipient_email?: string;
  /**
   * Subject
   * @description Subject line of the email.
   * @default null
   */
  subject: string | null;
  /**
   * User Id
   * @description User's email address; the literal 'me' refers to the authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of GMAIL's GMAIL_SEND_EMAIL tool output.
 */
type GMAIL_SEND_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Gmail API response, typically including the sent message ID and threadId.
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
 * Type map of all available tool input types for toolkit "GMAIL".
 */
export type GMAIL_TOOL_INPUTS = {
  ADD_LABEL_TO_EMAIL: GMAIL_ADD_LABEL_TO_EMAIL_INPUT
  CREATE_EMAIL_DRAFT: GMAIL_CREATE_EMAIL_DRAFT_INPUT
  CREATE_LABEL: GMAIL_CREATE_LABEL_INPUT
  DELETE_DRAFT: GMAIL_DELETE_DRAFT_INPUT
  DELETE_MESSAGE: GMAIL_DELETE_MESSAGE_INPUT
  FETCH_EMAILS: GMAIL_FETCH_EMAILS_INPUT
  FETCH_MESSAGE_BY_MESSAGE_ID: GMAIL_FETCH_MESSAGE_BY_MESSAGE_ID_INPUT
  FETCH_MESSAGE_BY_THREAD_ID: GMAIL_FETCH_MESSAGE_BY_THREAD_ID_INPUT
  GET_ATTACHMENT: GMAIL_GET_ATTACHMENT_INPUT
  GET_CONTACTS: GMAIL_GET_CONTACTS_INPUT
  GET_PEOPLE: GMAIL_GET_PEOPLE_INPUT
  GET_PROFILE: GMAIL_GET_PROFILE_INPUT
  LIST_DRAFTS: GMAIL_LIST_DRAFTS_INPUT
  LIST_LABELS: GMAIL_LIST_LABELS_INPUT
  LIST_THREADS: GMAIL_LIST_THREADS_INPUT
  MODIFY_THREAD_LABELS: GMAIL_MODIFY_THREAD_LABELS_INPUT
  MOVE_TO_TRASH: GMAIL_MOVE_TO_TRASH_INPUT
  PATCH_LABEL: GMAIL_PATCH_LABEL_INPUT
  REMOVE_LABEL: GMAIL_REMOVE_LABEL_INPUT
  REPLY_TO_THREAD: GMAIL_REPLY_TO_THREAD_INPUT
  SEARCH_PEOPLE: GMAIL_SEARCH_PEOPLE_INPUT
  SEND_DRAFT: GMAIL_SEND_DRAFT_INPUT
  SEND_EMAIL: GMAIL_SEND_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GMAIL".
 */
export type GMAIL_TOOL_OUTPUTS = {
  ADD_LABEL_TO_EMAIL: GMAIL_ADD_LABEL_TO_EMAIL_OUTPUT
  CREATE_EMAIL_DRAFT: GMAIL_CREATE_EMAIL_DRAFT_OUTPUT
  CREATE_LABEL: GMAIL_CREATE_LABEL_OUTPUT
  DELETE_DRAFT: GMAIL_DELETE_DRAFT_OUTPUT
  DELETE_MESSAGE: GMAIL_DELETE_MESSAGE_OUTPUT
  FETCH_EMAILS: GMAIL_FETCH_EMAILS_OUTPUT
  FETCH_MESSAGE_BY_MESSAGE_ID: GMAIL_FETCH_MESSAGE_BY_MESSAGE_ID_OUTPUT
  FETCH_MESSAGE_BY_THREAD_ID: GMAIL_FETCH_MESSAGE_BY_THREAD_ID_OUTPUT
  GET_ATTACHMENT: GMAIL_GET_ATTACHMENT_OUTPUT
  GET_CONTACTS: GMAIL_GET_CONTACTS_OUTPUT
  GET_PEOPLE: GMAIL_GET_PEOPLE_OUTPUT
  GET_PROFILE: GMAIL_GET_PROFILE_OUTPUT
  LIST_DRAFTS: GMAIL_LIST_DRAFTS_OUTPUT
  LIST_LABELS: GMAIL_LIST_LABELS_OUTPUT
  LIST_THREADS: GMAIL_LIST_THREADS_OUTPUT
  MODIFY_THREAD_LABELS: GMAIL_MODIFY_THREAD_LABELS_OUTPUT
  MOVE_TO_TRASH: GMAIL_MOVE_TO_TRASH_OUTPUT
  PATCH_LABEL: GMAIL_PATCH_LABEL_OUTPUT
  REMOVE_LABEL: GMAIL_REMOVE_LABEL_OUTPUT
  REPLY_TO_THREAD: GMAIL_REPLY_TO_THREAD_OUTPUT
  SEARCH_PEOPLE: GMAIL_SEARCH_PEOPLE_OUTPUT
  SEND_DRAFT: GMAIL_SEND_DRAFT_OUTPUT
  SEND_EMAIL: GMAIL_SEND_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of GMAIL's NEW_GMAIL_MESSAGE trigger payload.
 */
type GMAIL_NEW_GMAIL_MESSAGE_PAYLOAD = {
  /**
   * Attachment List
   * @description The list of attachments in the message
   * @default null
   */
  attachment_list: unknown[] | null;
  /**
   * Message Id
   * @description The message ID of the message
   * @default null
   */
  message_id: string | null;
  /**
   * Message Text
   * @description The text of the message
   * @default null
   */
  message_text: string | null;
  /**
   * Message Timestamp
   * @description The timestamp of the message
   * @default null
   */
  message_timestamp: string | null;
  /**
   * Payload
   * @description The payload of the message
   * @default null
   */
  payload: {
      [key: string]: unknown;
  } | null;
  /**
   * Sender
   * @description The sender of the message
   * @default null
   */
  sender: string | null;
  /**
   * Subject
   * @description The subject of the message
   * @default null
   */
  subject: string | null;
  /**
   * Thread Id
   * @description The thread ID of the message
   * @default null
   */
  thread_id: string | null;
  /**
   * To
   * @description The recipient of the message
   * @default null
   */
  to: string | null;
};

/**
 * Map of Composio's GMAIL toolkit.
 */
export const GMAIL = {
  slug: "gmail",
  tools: {
    /**
     * Adds and/or removes specified gmail labels for a message; ensure `message id` and all `label ids` are valid (use 'listlabels' for custom label ids).
     */
    ADD_LABEL_TO_EMAIL: "GMAIL_ADD_LABEL_TO_EMAIL",
    /**
     * Creates a gmail email draft, supporting to/cc/bcc, subject, plain/html body (ensure `is html=true` for html), attachments, and threading.
     */
    CREATE_EMAIL_DRAFT: "GMAIL_CREATE_EMAIL_DRAFT",
    /**
     * Creates a new label with a unique name in the specified user's gmail account.
     */
    CREATE_LABEL: "GMAIL_CREATE_LABEL",
    /**
     * Permanently deletes a specific gmail draft using its id; ensure the draft exists and the user has necessary permissions for the given `user id`.
     */
    DELETE_DRAFT: "GMAIL_DELETE_DRAFT",
    /**
     * Permanently deletes a specific email message by its id from a gmail mailbox; for `user id`, use 'me' for the authenticated user or an email address to which the authenticated user has delegated access.
     */
    DELETE_MESSAGE: "GMAIL_DELETE_MESSAGE",
    /**
     * Fetches a list of email messages from a gmail account, supporting filtering, pagination, and optional full content retrieval.
     */
    FETCH_EMAILS: "GMAIL_FETCH_EMAILS",
    /**
     * Fetches a specific email message by its id, provided the `message id` exists and is accessible to the authenticated `user id`.
     */
    FETCH_MESSAGE_BY_MESSAGE_ID: "GMAIL_FETCH_MESSAGE_BY_MESSAGE_ID",
    /**
     * Retrieves messages from a gmail thread using its `thread id`, where the thread must be accessible by the specified `user id`.
     */
    FETCH_MESSAGE_BY_THREAD_ID: "GMAIL_FETCH_MESSAGE_BY_THREAD_ID",
    /**
     * Retrieves a specific attachment by id from a message in a user's gmail mailbox, requiring valid message and attachment ids.
     */
    GET_ATTACHMENT: "GMAIL_GET_ATTACHMENT",
    /**
     * Fetches contacts (connections) for the authenticated google account, allowing selection of specific data fields and pagination.
     */
    GET_CONTACTS: "GMAIL_GET_CONTACTS",
    /**
     * Retrieves either a specific person's details (using `resource name`) or lists 'other contacts' (if `other contacts` is true), with `person fields` specifying the data to return.
     */
    GET_PEOPLE: "GMAIL_GET_PEOPLE",
    /**
     * Retrieves key gmail profile information (email address, message/thread totals, history id) for a user.
     */
    GET_PROFILE: "GMAIL_GET_PROFILE",
    /**
     * Retrieves a paginated list of email drafts from a user's gmail account. use verbose=true to get full draft details including subject, body, sender, and timestamp.
     */
    LIST_DRAFTS: "GMAIL_LIST_DRAFTS",
    /**
     * Retrieves a list of all system and user-created labels for the specified gmail account.
     */
    LIST_LABELS: "GMAIL_LIST_LABELS",
    /**
     * Retrieves a list of email threads from a gmail account, identified by `user id` (email address or 'me'), supporting filtering and pagination.
     */
    LIST_THREADS: "GMAIL_LIST_THREADS",
    /**
     * Adds or removes specified existing label ids from a gmail thread, affecting all its messages; ensure the thread id is valid.
     */
    MODIFY_THREAD_LABELS: "GMAIL_MODIFY_THREAD_LABELS",
    /**
     * Moves an existing, non-deleted email message to the trash for the specified user.
     */
    MOVE_TO_TRASH: "GMAIL_MOVE_TO_TRASH",
    /**
     * Patches the specified label.
     */
    PATCH_LABEL: "GMAIL_PATCH_LABEL",
    /**
     * Permanently deletes a specific, existing user-created gmail label by its id for a user; cannot delete system labels.
     */
    REMOVE_LABEL: "GMAIL_REMOVE_LABEL",
    /**
     * Sends a reply within a specific gmail thread using the original thread's subject, requiring a valid `thread id` and correctly formatted email addresses. supports attachments via the `attachment` parameter with valid `s3key`, `mimetype`, and `name`.
     */
    REPLY_TO_THREAD: "GMAIL_REPLY_TO_THREAD",
    /**
     * Searches contacts by matching the query against names, nicknames, emails, phone numbers, and organizations, optionally including 'other contacts'.
     */
    SEARCH_PEOPLE: "GMAIL_SEARCH_PEOPLE",
    /**
     * Sends the specified, existing draft to the recipients in the to, cc, and bcc headers.
     */
    SEND_DRAFT: "GMAIL_SEND_DRAFT",
    /**
     * Sends an email via gmail api using the authenticated user's google profile display name, requiring `is html=true` if the body contains html and valid `s3key`, `mimetype`, `name` for any attachment.
     */
    SEND_EMAIL: "GMAIL_SEND_EMAIL",
  },
  triggerTypes: {
    /**
     * Triggers when a new message is received in Gmail.
     */
    NEW_GMAIL_MESSAGE: "GMAIL_NEW_GMAIL_MESSAGE",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "GMAIL".
 */
export type GMAIL_TRIGGER_PAYLOADS = {
  NEW_GMAIL_MESSAGE: GMAIL_NEW_GMAIL_MESSAGE_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "GMAIL".
 */
export type GMAIL_TRIGGER_EVENTS = {
  NEW_GMAIL_MESSAGE: TriggerEvent<GMAIL_NEW_GMAIL_MESSAGE_PAYLOAD>
}
