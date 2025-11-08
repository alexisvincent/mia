// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOSQUARED's GOSQUARED_ACCOUNT_ADD_SHARED_USER tool input.
 */
type GOSQUARED_ACCOUNT_ADD_SHARED_USER_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the user to add.
   */
  email?: string;
  /**
   * Notify
   * @description Whether to send an invite email to the user.
   * @default true
   */
  notify: boolean;
  /**
   * Role
   * @description Role assigned to the user. Accepted values: 'admin' or 'member'.
   * @default member
   * @enum {string}
   */
  role: "admin" | "member";
};

/**
 * Type of GOSQUARED's GOSQUARED_ACCOUNT_ADD_SHARED_USER tool output.
 */
type GOSQUARED_ACCOUNT_ADD_SHARED_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * Format: email
       * @description Email address of the shared user.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the shared user.
       */
      id: string;
      /**
       * Invited
       * @description Indicates if the user was invited via email notification.
       */
      invited: boolean;
      /**
       * Invited At
       * @description Timestamp when the invite was sent.
       */
      invited_at: string;
      /**
       * Role
       * @description Role assigned to the shared user.
       */
      role: string;
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
 * Type of GOSQUARED's GOSQUARED_ACCOUNT_REMOVE_SHARED_USER tool input.
 */
type GOSQUARED_ACCOUNT_REMOVE_SHARED_USER_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the user to remove from the project.
   */
  email?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_ACCOUNT_REMOVE_SHARED_USER tool output.
 */
type GOSQUARED_ACCOUNT_REMOVE_SHARED_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates a successful removal (always true for HTTP 200 response).
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
 * Type of GOSQUARED's GOSQUARED_ACCOUNT_SHARED_USERS tool input.
 */
type GOSQUARED_ACCOUNT_SHARED_USERS_INPUT = object;

/**
 * Type of GOSQUARED's GOSQUARED_ACCOUNT_SHARED_USERS tool output.
 */
type GOSQUARED_ACCOUNT_SHARED_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of team members with their access states.
       */
      users: ({
          /**
           * Email
           * @description User's email address.
           * @default null
           */
          email: string | null;
          /**
           * State
           * @description Access state of the user within the project.
           * @enum {string}
           */
          state: "owner" | "active" | "pending";
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of GOSQUARED's GOSQUARED_ACCOUNT_SITES tool input.
 */
type GOSQUARED_ACCOUNT_SITES_INPUT = {
  /**
   * Callback
   * @description Function name to wrap the JSONP response; only used when requesting JSONP.
   * @default null
   */
  callback: string | null;
  /**
   * Presenter
   * @description Modifies response structure: 'grouped' returns sites grouped by ownership; 'flat' returns all accessible sites.
   * @default grouped
   * @enum {string}
   */
  presenter: "grouped" | "flat";
};

/**
 * Type of GOSQUARED's GOSQUARED_ACCOUNT_SITES tool output.
 */
type GOSQUARED_ACCOUNT_SITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  } | null;
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
 * Type of GOSQUARED's GOSQUARED_AUTH_TOKEN_INFO tool input.
 */
type GOSQUARED_AUTH_TOKEN_INFO_INPUT = {
  /**
   * Api Key
   * @description An API Key associated with your account.
   */
  api_key?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_AUTH_TOKEN_INFO tool output.
 */
type GOSQUARED_AUTH_TOKEN_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Scopes
       * @description Array of scope identifiers enabled for this token (e.g., 'read_account').
       */
      scopes: string[];
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
 * Type of GOSQUARED's GOSQUARED_CHAT_CHAT tool input.
 */
type GOSQUARED_CHAT_CHAT_INPUT = {
  /**
   * Chat Id
   * @description The ID of the chat conversation (same as the person_id of the client).
   */
  chatID?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_CHAT_CHAT tool output.
 */
type GOSQUARED_CHAT_CHAT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agent Id
       * @description ID of the agent handling the chat, if any.
       * @default null
       */
      agent_id: string | null;
      /**
       * Ended At
       * @description ISO 8601 timestamp when the chat ended; may be null if still open.
       * @default null
       */
      ended_at: string | null;
      /**
       * Id
       * @description Unique chat conversation ID.
       */
      id: string;
      /**
       * Messages
       * @description List of messages exchanged in this chat.
       * @default null
       */
      messages: {
          /**
           * Sender
           * @description Sender of the message, e.g., 'visitor' or 'agent'.
           */
          sender: string;
          /**
           * Text
           * @description Message text content.
           */
          text: string;
          /**
           * Timestamp
           * @description Timestamp of the message in ISO 8601 format.
           */
          timestamp: string;
      }[] | null;
      /**
       * Started At
       * @description ISO 8601 timestamp when the chat started.
       */
      started_at: string;
      /**
       * Status
       * @description Chat status, e.g., 'open' or 'closed'.
       */
      status: string;
      /**
       * Visitor Email
       * @description Visitor's email address, if provided.
       * @default null
       */
      visitor_email: string | null;
      /**
       * Visitor Id
       * @description ID of the visitor in the chat.
       */
      visitor_id: string;
      /**
       * Visitor Name
       * @description Visitor's name, if provided.
       * @default null
       */
      visitor_name: string | null;
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
 * Type of GOSQUARED's GOSQUARED_CHAT_CHATS tool input.
 */
type GOSQUARED_CHAT_CHATS_INPUT = {
  /**
   * From Date
   * @description Start date-time for the query, in ISO 8601 format.
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Pagination offset and count, formatted as 'offset,count'. Max count is 250.
   * @default 0,10
   */
  limit: string | null;
  /**
   * To Date
   * @description End date-time for the query, in ISO 8601 format.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_CHAT_CHATS tool output.
 */
type GOSQUARED_CHAT_CHATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Chats
       * @description List of chat conversations retrieved.
       */
      chats: {
          /**
           * Agent Id
           * @description ID of the agent handling the chat, if any.
           * @default null
           */
          agent_id: string | null;
          /**
           * Ended At
           * @description ISO 8601 timestamp when the chat ended; may be null if still open.
           * @default null
           */
          ended_at: string | null;
          /**
           * Id
           * @description Unique chat conversation ID.
           */
          id: string;
          /**
           * Messages
           * @description List of messages exchanged in this chat.
           * @default null
           */
          messages: {
              /**
               * Sender
               * @description Sender of the message, e.g., 'visitor' or 'agent'.
               */
              sender: string;
              /**
               * Text
               * @description Message text content.
               */
              text: string;
              /**
               * Timestamp
               * @description Timestamp of the message in ISO 8601 format.
               */
              timestamp: string;
          }[] | null;
          /**
           * Started At
           * @description ISO 8601 timestamp when the chat started.
           */
          started_at: string;
          /**
           * Status
           * @description Chat status, e.g., 'open' or 'closed'.
           */
          status: string;
          /**
           * Visitor Email
           * @description Visitor's email address, if provided.
           * @default null
           */
          visitor_email: string | null;
          /**
           * Visitor Id
           * @description ID of the visitor in the chat.
           */
          visitor_id: string;
          /**
           * Visitor Name
           * @description Visitor's name, if provided.
           * @default null
           */
          visitor_name: string | null;
      }[];
      /**
       * Next
       * @description Pagination token or URL for the next page of results, if available.
       * @default null
       */
      next: string | null;
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
 * Type of GOSQUARED's GOSQUARED_CHAT_CHAT_MESSAGES tool input.
 */
type GOSQUARED_CHAT_CHAT_MESSAGES_INPUT = {
  /**
   * Chat Id
   * @description The ID of the chat conversation (same as the person's person_id).
   */
  chatID?: string;
  /**
   * From Date
   * @description Start date-time for the query, in ISO 8601 format.
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Pagination offset and count, formatted as 'offset,count'. Max count is 250.
   * @default 0,10
   */
  limit: string | null;
  /**
   * To Date
   * @description End date-time for the query, in ISO 8601 format.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_CHAT_CHAT_MESSAGES tool output.
 */
type GOSQUARED_CHAT_CHAT_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description List of messages retrieved from the chat conversation.
       */
      messages: {
          /**
           * Sender
           * @description Sender of the message, e.g., 'visitor' or 'agent'.
           */
          sender: string;
          /**
           * Text
           * @description Content of the message.
           */
          text: string;
          /**
           * Timestamp
           * @description Timestamp of the message in ISO 8601 format.
           */
          timestamp: string;
      }[];
      /**
       * Next
       * @description Pagination token or URL for the next page of results, if available.
       * @default null
       */
      next: string | null;
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
 * Type of GOSQUARED's GOSQUARED_CHAT_FEED tool input.
 */
type GOSQUARED_CHAT_FEED_INPUT = {
  /**
   * Chat Id
   * @description ID of the chat conversation (same as the client person_id)
   */
  chat_id?: string;
  /**
   * From Date
   * @description Start date-time for the query in ISO 8601 format.
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Pagination offset and count formatted as 'offset,count'. Max count is 250.
   * @default 0,10
   */
  limit: string | null;
  /**
   * To Date
   * @description End date-time for the query in ISO 8601 format.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_CHAT_FEED tool output.
 */
type GOSQUARED_CHAT_FEED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Feed
       * @description List of chat feed items (messages and events).
       */
      feed: {
          [key: string]: unknown;
      }[];
      /**
       * Next
       * @description Pagination token or URL for the next page of results, if available.
       * @default null
       */
      next: string | null;
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
 * Type of GOSQUARED's GOSQUARED_DELETE_PERSON tool input.
 */
type GOSQUARED_DELETE_PERSON_INPUT = {
  /**
   * Blacklist
   * @description If true, blacklist the person's IDs/emails to block re-creation, outbound sends, and webhooks.
   * @default null
   */
  blacklist: boolean | null;
  /**
   * Person Id
   * @description Unique identifier of the person to delete.
   */
  person_id?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_DELETE_PERSON tool output.
 */
type GOSQUARED_DELETE_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the deletion was successful.
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
 * Type of GOSQUARED's GOSQUARED_GET_CHAT_CHAT_MESSAGE tool input.
 */
type GOSQUARED_GET_CHAT_CHAT_MESSAGE_INPUT = {
  /**
   * Chat Id
   * @description ID of the chat conversation containing the message.
   */
  chat_id?: string;
  /**
   * Message Id
   * @description ID of the message to retrieve.
   */
  message_id?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_GET_CHAT_CHAT_MESSAGE tool output.
 */
type GOSQUARED_GET_CHAT_CHAT_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description The chat message object.
       */
      message: {
          /**
           * Sender
           * @description Sender of the message, e.g., 'visitor' or 'agent'.
           */
          sender: string;
          /**
           * Text
           * @description Content text of the message.
           */
          text: string;
          /**
           * Timestamp
           * @description ISO 8601 timestamp of the message.
           */
          timestamp: string;
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
 * Type of GOSQUARED's GOSQUARED_GET_NOW_VISITOR tool input.
 */
type GOSQUARED_GET_NOW_VISITOR_INPUT = {
  /**
   * Limit
   * @description Maximum results; optional offset as 'offset,count' (e.g., '5,10').
   * @default null
   */
  limit: string | null;
  /**
   * Presenter
   * @description Response presentation mode: 'plain', 'events', or 'pageEvents'.
   * @default null
   * @enum {string|null}
   */
  presenter: "plain" | "events" | "pageEvents" | null;
  /**
   * Visitor Id
   * @description The unique ID of the visitor to retrieve.
   */
  visitorID?: string;
  /**
   * Visitors Mode
   * @description Filter visitors by type: 'all', 'tagged', or 'returning'.
   * @default null
   * @enum {string|null}
   */
  visitorsMode: "all" | "tagged" | "returning" | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_GET_NOW_VISITOR tool output.
 */
type GOSQUARED_GET_NOW_VISITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  } | null;
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
 * Type of GOSQUARED's GOSQUARED_GET_PEOPLE_EVENT_TYPES tool input.
 */
type GOSQUARED_GET_PEOPLE_EVENT_TYPES_INPUT = object;

/**
 * Type of GOSQUARED's GOSQUARED_GET_PEOPLE_EVENT_TYPES tool output.
 */
type GOSQUARED_GET_PEOPLE_EVENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Types
       * @description List of event types ordered by how many times each has been tracked.
       */
      event_types: string[];
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
 * Type of GOSQUARED's GOSQUARED_GET_PEOPLE_PROPERTY_TYPES tool input.
 */
type GOSQUARED_GET_PEOPLE_PROPERTY_TYPES_INPUT = {
  /**
   * Custom Only
   * @description Return only custom properties (GET /people/v1/propertyTypes/custom)
   * @default false
   */
  custom_only: boolean;
  /**
   * Property Id
   * @description Property identifier to fetch (GET /people/v1/propertyTypes/{property_id})
   * @default null
   */
  property_id: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_GET_PEOPLE_PROPERTY_TYPES tool output.
 */
type GOSQUARED_GET_PEOPLE_PROPERTY_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Property Types
       * @description Property types payload as returned by the API
       */
      property_types: {
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
 * Type of GOSQUARED's GOSQUARED_GET_PERSON tool input.
 */
type GOSQUARED_GET_PERSON_INPUT = {
  /**
   * Person Id
   * @description Unique identifier of the person to retrieve.
   */
  person_id?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_GET_PERSON tool output.
 */
type GOSQUARED_GET_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  } | null;
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
 * Type of GOSQUARED's GOSQUARED_GET_PERSON_FEED tool input.
 */
type GOSQUARED_GET_PERSON_FEED_INPUT = {
  /**
   * From Time
   * @description Start ISO 8601 date-time for the feed filter.
   * @default null
   */
  from_time: string | null;
  /**
   * Limit
   * @description Pagination in the form 'offset,count'. Offset ≥ 0; count ≤ 250 per request.
   * @default 0,10
   */
  limit: string;
  /**
   * Person Id
   * @description The unique identifier of the person whose event feed to retrieve.
   */
  personID?: string;
  /**
   * Query
   * @description Search within the person's event history by event name.
   * @default null
   */
  query: string | null;
  /**
   * Sort
   * @description Sort order, e.g., 'ts:desc' (newest first) or 'ts:asc'.
   * @default ts:desc
   */
  sort: string;
  /**
   * To Time
   * @description End ISO 8601 date-time for the feed filter.
   * @default null
   */
  to_time: string | null;
  /**
   * Type
   * @description Comma-separated event families to include: 'event' for custom events and 'sessionEvent' for GoSquared session events.
   * @default event,sessionEvent
   */
  type: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_GET_PERSON_FEED tool output.
 */
type GOSQUARED_GET_PERSON_FEED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of GOSQUARED's GOSQUARED_LIST_PEOPLE tool input.
 */
type GOSQUARED_LIST_PEOPLE_INPUT = {
  /**
   * Date Format
   * @description Moment.js format string for any date fields in the response.
   * @default null
   */
  dateFormat: string | null;
  /**
   * Fields
   * @description Comma-separated list of fields to return for each person (e.g., 'id,email').
   * @default null
   */
  fields: string | null;
  /**
   * Filters
   * @description List of filter objects to apply on properties or events.
   * @default null
   */
  filters: {
      /**
       * Key
       * @description Type of filter: 'property' to filter by a property or 'event' to filter by an event.
       * @enum {string}
       */
      key: "property" | "event";
      /**
       * Operator
       * @description Operator to apply for filtering (e.g., contains, equals).
       */
      operator: string;
      /**
       * Path
       * @description Name of the property or event to filter on (e.g., 'email' or event name).
       */
      path: string;
      /**
       * Value
       * @description Value to compare against using the operator.
       */
      value: {
          [key: string]: unknown;
      } | null;
  }[] | null;
  /**
   * Limit
   * @description Maximum results to return; may include offset as 'offset,count' (e.g., '0,10'). Max 250.
   * @default null
   */
  limit: string | null;
  /**
   * Presenter
   * @description Response format: 'plain' for JSON array, 'csv' for CSV text (default 'plain').
   * @default null
   * @enum {string|null}
   */
  presenter: "plain" | "csv" | null;
  /**
   * Query
   * @description Free-text search term to filter people profiles.
   * @default null
   */
  query: string | null;
  /**
   * Sort
   * @description Property to sort by with direction suffix ':asc' or ':desc' (default 'last.seen:desc').
   * @default null
   */
  sort: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_LIST_PEOPLE tool output.
 */
type GOSQUARED_LIST_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  } | null;
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
 * Type of GOSQUARED's GOSQUARED_NOW_CONCURRENTS tool input.
 */
type GOSQUARED_NOW_CONCURRENTS_INPUT = object;

/**
 * Type of GOSQUARED's GOSQUARED_NOW_CONCURRENTS tool output.
 */
type GOSQUARED_NOW_CONCURRENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Count of currently active visitors
       */
      active: number;
      /**
       * Pages
       * @description Count of active pages currently open
       */
      pages: number;
      /**
       * Returning
       * @description Number of currently online returning visitors
       */
      returning: number;
      /**
       * Tagged
       * @description Count of currently tagged visitors online
       */
      tagged: number;
      /**
       * Visitors
       * @description Total concurrent visitors currently online
       */
      visitors: number;
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
 * Type of GOSQUARED's GOSQUARED_NOW_PAGES tool input.
 */
type GOSQUARED_NOW_PAGES_INPUT = {
  /**
   * Href
   * @description Full URL of the page to filter by (must be URL-encoded).
   * @default null
   */
  href: string | null;
  /**
   * Limit
   * @description Maximum results to return or offset,count (e.g., '5,10').
   * @default 0,10
   */
  limit: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_NOW_PAGES tool output.
 */
type GOSQUARED_NOW_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of GOSQUARED's GOSQUARED_NOW_PLATFORMS tool input.
 */
type GOSQUARED_NOW_PLATFORMS_INPUT = {
  /**
   * Limit
   * @description Maximum number of results to return; may include offset as 'offset,count' (e.g., '5,10').
   * @default 0,5
   */
  limit: string | null;
  /**
   * Presenter
   * @description Alters response shape; one of: 'truncatedList', 'list', 'truncatedObject', 'object'.
   * @default truncatedList
   * @enum {string|null}
   */
  presenter: "truncatedList" | "list" | "truncatedObject" | "object" | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_NOW_PLATFORMS tool output.
 */
type GOSQUARED_NOW_PLATFORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  }[] | null;
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
 * Type of GOSQUARED's GOSQUARED_NOW_V3_OVERVIEW tool input.
 */
type GOSQUARED_NOW_V3_OVERVIEW_INPUT = {
  /**
   * Date Format
   * @description Format for returned date fields; accepts any Moment.js format.
   * @default null
   */
  dateFormat: string | null;
  /**
   * From Date
   * @description Start date-time for the query in ISO 8601 or any Moment.js-compatible format.
   * @default null
   */
  from_date: string | null;
  /**
   * To Date
   * @description End date-time for the query in ISO 8601 or any Moment.js-compatible format.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_NOW_V3_OVERVIEW tool output.
 */
type GOSQUARED_NOW_V3_OVERVIEW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  } | null;
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
 * Type of GOSQUARED's GOSQUARED_NOW_V3_SOURCES tool input.
 */
type GOSQUARED_NOW_V3_SOURCES_INPUT = {
  /**
   * Drill Limit
   * @description Maximum drill-down results per section; may include offset as "offset,count" (e.g., "0,5").
   * @default null
   */
  drillLimit: string | null;
  /**
   * Limit
   * @description Maximum results to return; may include offset as "offset,count" (e.g., "5,10").
   * @default null
   */
  limit: string | null;
  /**
   * Minimal
   * @description If true, returns a compacted version of the response.
   * @default null
   */
  minimal: boolean | null;
  /**
   * Sections
   * @description Comma-separated list of source types to include.
   * @default null
   */
  sections: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_NOW_V3_SOURCES tool output.
 */
type GOSQUARED_NOW_V3_SOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Direct
       * @description Direct traffic sources
       * @default null
       */
      direct: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Internal
       * @description Internal traffic sources
       * @default null
       */
      internal: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Organic
       * @description Organic traffic sources
       * @default null
       */
      organic: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Site
       * @description Site traffic sources
       * @default null
       */
      site: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Social
       * @description Social traffic sources
       * @default null
       */
      social: {
          [key: string]: unknown;
      }[] | null;
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
 * Type of GOSQUARED's GOSQUARED_NOW_V3_TIME_SERIES tool input.
 */
type GOSQUARED_NOW_V3_TIME_SERIES_INPUT = {
  /**
   * Date Format
   * @description Moment.js format string for any returned dates.
   * @default null
   */
  dateFormat: string | null;
  /**
   * From Time
   * @description Start date-time of the query window in ISO 8601 format, e.g., '2021-01-01T00:00:00Z'.
   * @default null
   */
  from_time: string | null;
  /**
   * Interval
   * @description Discrete bucket size in minutes, format 'Xmin' (e.g., '5min'). Default '5min'.
   * @default null
   */
  interval: string | null;
  /**
   * To Time
   * @description End date-time of the query window in ISO 8601 format.
   * @default null
   */
  to_time: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_NOW_V3_TIME_SERIES tool output.
 */
type GOSQUARED_NOW_V3_TIME_SERIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of GOSQUARED's GOSQUARED_NOW_VISITORS tool input.
 */
type GOSQUARED_NOW_VISITORS_INPUT = {
  /**
   * Date Format
   * @description Moment.js format string for returned date fields.
   * @default null
   */
  dateFormat: string | null;
  /**
   * From Date
   * @description Start date-time for the query window (ISO-8601).
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Maximum results to return; supports 'offset,count' (e.g., '5,10').
   * @default null
   */
  limit: string | null;
  /**
   * To Date
   * @description End date-time for the query window (ISO-8601).
   * @default null
   */
  to_date: string | null;
  /**
   * Visitors Mode
   * @description Subset of visitors to return; one of 'all', 'tagged', or 'returning'.
   * @default all
   * @enum {string|null}
   */
  visitorsMode: "all" | "tagged" | "returning" | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_NOW_VISITORS tool output.
 */
type GOSQUARED_NOW_VISITORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of GOSQUARED's GOSQUARED_PEOPLE_DEVICES tool input.
 */
type GOSQUARED_PEOPLE_DEVICES_INPUT = {
  /**
   * Limit
   * @description Pagination in the form 'count' or 'offset,count'. Default '0,10'. Maximum count per page is 250.
   * @default 0,10
   */
  limit: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_PEOPLE_DEVICES tool output.
 */
type GOSQUARED_PEOPLE_DEVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Devices
       * @description List of devices
       */
      devices: {
          /**
           * Browser
           * @description Browser name and version
           */
          browser: string;
          /**
           * Isp
           * @description Internet Service Provider
           */
          isp: string;
          /**
           * Location
           * @description Location information for the device
           */
          location: {
              /**
               * City
               * @description City of the device location
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country of the device location
               * @default null
               */
              country: string | null;
              /**
               * Latitude
               * @description Latitude coordinate of the device location
               * @default null
               */
              latitude: number | null;
              /**
               * Longitude
               * @description Longitude coordinate of the device location
               * @default null
               */
              longitude: number | null;
          };
          /**
           * Platform
           * @description Device platform, e.g., iOS, Android, Windows
           */
          platform: string;
          /**
           * Screen Size
           * @description Screen size in format 'width x height'
           */
          screen_size: string;
          /**
           * User Agent
           * @description Full user agent string
           */
          user_agent: string;
          /**
           * Visits
           * @description Total number of visits from this device
           */
          visits: number;
      }[];
      /**
       * Pagination
       * @description Pagination details for the response
       */
      pagination: {
          /**
           * Count
           * @description Number of items returned in this page
           */
          count: number;
          /**
           * Offset
           * @description Pagination offset
           */
          offset: number;
          /**
           * Total
           * @description Total number of items available
           */
          total: number;
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
 * Type of GOSQUARED's GOSQUARED_PEOPLE_SMARTGROUP_FEED tool input.
 */
type GOSQUARED_PEOPLE_SMARTGROUP_FEED_INPUT = {
  /**
   * From Date
   * @description Start date-time (ISO 8601) to filter the export. Max 60-day range.
   * @default null
   */
  from_date: string | null;
  /**
   * Group Id
   * @description ID of the Smart Group to export the pageview feed.
   */
  group_id?: string;
  /**
   * To Date
   * @description End date-time (ISO 8601) to filter the export. Max 60-day range.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_PEOPLE_SMARTGROUP_FEED tool output.
 */
type GOSQUARED_PEOPLE_SMARTGROUP_FEED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description Time-limited URL to download the generated CSV; valid for 15 minutes.
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
 * Type of GOSQUARED's GOSQUARED_PEOPLE_SMARTGROUP_PEOPLE tool input.
 */
type GOSQUARED_PEOPLE_SMARTGROUP_PEOPLE_INPUT = {
  /**
   * Date Format
   * @description Moment.js format string for date fields.
   * @default null
   */
  dateFormat: string | null;
  /**
   * Fields
   * @description Comma-separated list of fields to return (e.g., 'id,email').
   * @default null
   */
  fields: string | null;
  /**
   * Group Id
   * @description ID of the Smart Group.
   */
  group_id?: string;
  /**
   * Limit
   * @description Pagination as 'offset,count'; count must be between 0 and 250.
   * @default 0,10
   */
  limit: string;
  /**
   * Presenter
   * @description Response format: 'plain' for JSON or 'csv' for CSV output.
   * @default plain
   * @enum {string}
   */
  presenter: "plain" | "csv";
  /**
   * Query
   * @description Search term to filter members of the Smart Group.
   * @default null
   */
  query: string | null;
  /**
   * Sort
   * @description Sort order '<property>:asc' or '<property>:desc'.
   * @default last.seen:desc
   */
  sort: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_PEOPLE_SMARTGROUP_PEOPLE tool output.
 */
type GOSQUARED_PEOPLE_SMARTGROUP_PEOPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  } | null;
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
 * Type of GOSQUARED's GOSQUARED_PEOPLE_SMART_GROUPS tool input.
 */
type GOSQUARED_PEOPLE_SMART_GROUPS_INPUT = object;

/**
 * Type of GOSQUARED's GOSQUARED_PEOPLE_SMART_GROUPS tool output.
 */
type GOSQUARED_PEOPLE_SMART_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Smartgroups
       * @description List of Smart Groups retrieved from the API
       */
      smartgroups: ({
          /**
           * Filters
           * @description List of filter objects applied to this Smart Group
           */
          filters: ({
              [key: string]: unknown;
          } | unknown[] | string | number | boolean | null)[];
          /**
           * Id
           * @description Unique identifier for the Smart Group
           */
          id: string;
          /**
           * Name
           * @description Name of the Smart Group
           */
          name: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of GOSQUARED's GOSQUARED_POST_ACCOUNT_SITES tool input.
 */
type GOSQUARED_POST_ACCOUNT_SITES_INPUT = {
  /**
   * Name
   * @description Display name for the new site (optional).
   * @default null
   */
  name: string | null;
  /**
   * Timezone
   * @description IANA timezone for the site (server default: Europe/London).
   * @default null
   */
  timezone: string | null;
  /**
   * Url
   * @description Publicly accessible site URL to track (must start with http:// or https://).
   */
  url?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_POST_ACCOUNT_SITES tool output.
 */
type GOSQUARED_POST_ACCOUNT_SITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  } | null;
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
 * Type of GOSQUARED's GOSQUARED_POST_CHAT_CHAT_ARCHIVE tool input.
 */
type GOSQUARED_POST_CHAT_CHAT_ARCHIVE_INPUT = {
  /**
   * Chat Id
   * @description ID of the chat to archive (same as the person_id of the client).
   */
  chatID?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_POST_CHAT_CHAT_ARCHIVE tool output.
 */
type GOSQUARED_POST_CHAT_CHAT_ARCHIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the chat was successfully archived.
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
 * Type of GOSQUARED's GOSQUARED_POST_CHAT_CHAT_MESSAGE tool input.
 */
type GOSQUARED_POST_CHAT_CHAT_MESSAGE_INPUT = {
  /**
   * Auth
   * @description Person Signature for client messages; required when sending as client.
   * @default null
   */
  auth: string | null;
  /**
   * Chat Id
   * @description ID of the chat conversation (same as the person's person_id).
   */
  chatID?: string;
  /**
   * Content
   * @description Message text content
   */
  content?: string;
  /**
   * Sender
   * @description Source of the message; one of: agent, client, bot.
   * @default null
   * @enum {string|null}
   */
  sender: "agent" | "client" | "bot" | null;
  /**
   * Timestamp
   * @description Epoch seconds timestamp for the message.
   * @default null
   */
  timestamp: number | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_POST_CHAT_CHAT_MESSAGE tool output.
 */
type GOSQUARED_POST_CHAT_CHAT_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description The chat message object that was created
       */
      message: {
          /**
           * Sender
           * @description Sender of the message, e.g., 'visitor', 'agent', or 'bot'
           */
          sender: string;
          /**
           * Text
           * @description Content of the message
           */
          text: string;
          /**
           * Timestamp
           * @description ISO 8601 timestamp of the message
           */
          timestamp: string;
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
 * Type of GOSQUARED's GOSQUARED_POST_CHAT_CHAT_NOTE tool input.
 */
type GOSQUARED_POST_CHAT_CHAT_NOTE_INPUT = {
  /**
   * Chat Id
   * @description The ID of the chat conversation (same as the person_id of the client).
   */
  chatID?: string;
  /**
   * Content
   * @description The text content of the note.
   */
  content?: string;
  /**
   * Sender
   * @description Sender type of the note. Accepted values: 'agent', 'client', or 'bot'.
   * @default null
   * @enum {string|null}
   */
  sender: "agent" | "client" | "bot" | null;
  /**
   * Timestamp
   * @description Unix timestamp of the note.
   * @default null
   */
  timestamp: number | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_POST_CHAT_CHAT_NOTE tool output.
 */
type GOSQUARED_POST_CHAT_CHAT_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if the request failed.
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Error message if present.
       * @default null
       */
      message: string | null;
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
 * Type of GOSQUARED's GOSQUARED_POST_CHAT_CHAT_UNARCHIVE tool input.
 */
type GOSQUARED_POST_CHAT_CHAT_UNARCHIVE_INPUT = {
  /**
   * Chat Id
   * @description ID of the chat to unarchive (same as the person_id of the client).
   */
  chatID?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_POST_CHAT_CHAT_UNARCHIVE tool output.
 */
type GOSQUARED_POST_CHAT_CHAT_UNARCHIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the chat was successfully unarchived.
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
 * Type of GOSQUARED's GOSQUARED_POST_PEOPLE_SMARTGROUPS tool input.
 */
type GOSQUARED_POST_PEOPLE_SMARTGROUPS_INPUT = {
  /**
   * Filters
   * @description List of filter objects defining group membership
   */
  filters?: {
      /**
       * Key
       * @description Property or event key to filter on
       */
      key: string;
      /**
       * Operator
       * @description Comparison operator (e.g., eq, ne, lt, gt, contains)
       */
      operator: string;
      /**
       * Path
       * @description Nested property path if filtering a sub-value
       * @default null
       */
      path: string | null;
      /**
       * Value
       * @description Value to compare against
       */
      value: {
          [key: string]: unknown;
      } | null;
  }[];
  /**
   * Name
   * @description Name of the Smart Group
   */
  name?: string;
  /**
   * Prefs
   * @description Optional preferences for the Smart Group
   * @default null
   */
  prefs: {
      [key: string]: unknown;
  } | null;
  /**
   * Sort Dir
   * @description Sort direction, either 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  sortDir: "asc" | "desc" | null;
  /**
   * Sort Field
   * @description Field to sort members by
   * @default null
   */
  sortField: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_POST_PEOPLE_SMARTGROUPS tool output.
 */
type GOSQUARED_POST_PEOPLE_SMARTGROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Filters
       * @description List of filter objects applied to this Smart Group
       */
      filters: ({
          [key: string]: unknown;
      } | unknown[] | string | number | boolean | null)[];
      /**
       * Id
       * @description Unique identifier for the Smart Group
       */
      id: string;
      /**
       * Name
       * @description Name of the Smart Group
       */
      name: string;
  } & {
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
 * Type of GOSQUARED's GOSQUARED_TRACKING_EVENT tool input.
 */
type GOSQUARED_TRACKING_EVENT_INPUT = {
  /**
   * Campaign
   * @description Campaign context (name, source, medium, content, term).
   * @default null
   */
  campaign: {
      [key: string]: unknown;
  } | null;
  /**
   * Character Set
   * @description Character set of the visitor's browser.
   * @default null
   */
  character_set: string | null;
  /**
   * Event
   * @description Event object with name (required), data (optional), timestamp (optional)
   */
  event?: {
      [key: string]: unknown;
  };
  /**
   * Ip
   * @description Visitor IP to detect location.
   * @default null
   */
  ip: string | null;
  /**
   * Language
   * @description Language setting of the visitor's browser.
   * @default null
   */
  language: string | null;
  /**
   * Last Pageview
   * @description ISO 8601 timestamp of last pageview.
   * @default null
   */
  last_pageview: string | null;
  /**
   * Location
   * @description Location context (timezone_offset).
   * @default null
   */
  location: {
      [key: string]: unknown;
  } | null;
  /**
   * Page
   * @description Page context with keys: url, title, previous, index.
   * @default null
   */
  page: {
      [key: string]: unknown;
  } | null;
  /**
   * Person Id
   * @description Person ID for this event; prefix with 'email:' if using email.
   * @default null
   */
  person_id: string | null;
  /**
   * Referrer
   * @description Referrer URL.
   * @default null
   */
  referrer: string | null;
  /**
   * Returning
   * @description Whether the visitor is returning.
   * @default null
   */
  returning: boolean | null;
  /**
   * Screen
   * @description Screen context (height, width, pixel_ratio, depth).
   * @default null
   */
  screen: {
      [key: string]: unknown;
  } | null;
  /**
   * Total
   * @description Totals context (visits, pageviews).
   * @default null
   */
  total: {
      [key: string]: unknown;
  } | null;
  /**
   * User Agent
   * @description User agent string of the visitor's browser.
   * @default null
   */
  user_agent: string | null;
  /**
   * Visitor Id
   * @description Anonymous visitor ID associated with the event.
   * @default null
   */
  visitor_id: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_TRACKING_EVENT tool output.
 */
type GOSQUARED_TRACKING_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if request failed.
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Error message if request failed.
       * @default null
       */
      message: string | null;
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
 * Type of GOSQUARED's GOSQUARED_TRACKING_IDENTIFY tool input.
 */
type GOSQUARED_TRACKING_IDENTIFY_INPUT = {
  /**
   * Person Id
   * @description Unique identifier for the person; prefix with 'email:' if using email address.
   */
  person_id?: string;
  /**
   * Properties
   * @description Additional properties to set for the identified person.
   * @default null
   */
  properties: {
      [key: string]: unknown;
  } | null;
  /**
   * Visitor Id
   * @description Anonymous visitor ID to associate with this person.
   * @default null
   */
  visitor_id: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_TRACKING_IDENTIFY tool output.
 */
type GOSQUARED_TRACKING_IDENTIFY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if request failed.
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Error message if request failed.
       * @default null
       */
      message: string | null;
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
 * Type of GOSQUARED's GOSQUARED_TRACKING_PAGEVIEW tool input.
 */
type GOSQUARED_TRACKING_PAGEVIEW_INPUT = {
  /**
   * Campaign
   * @description Campaign data for pageview.
   * @default null
   */
  campaign: {
      /**
       * Content
       * @description Campaign content
       * @default null
       */
      content: string | null;
      /**
       * Medium
       * @description Campaign medium
       * @default null
       */
      medium: string | null;
      /**
       * Name
       * @description Campaign name
       * @default null
       */
      name: string | null;
      /**
       * Source
       * @description Campaign source
       * @default null
       */
      source: string | null;
      /**
       * Term
       * @description Campaign term
       * @default null
       */
      term: string | null;
  } | null;
  /**
   * Character Set
   * @description Browser character set
   * @default null
   */
  character_set: string | null;
  /**
   * Ip
   * @description Visitor IP address (used for geolocation)
   * @default null
   */
  ip: string | null;
  /**
   * Language
   * @description Browser language
   * @default null
   */
  language: string | null;
  /**
   * Last Pageview
   * @description ISO 8601 timestamp of last pageview
   * @default null
   */
  last_pageview: string | null;
  /**
   * Location
   * @description Visitor location information.
   * @default null
   */
  location: {
      /**
       * Timezone Offset
       * @description Timezone offset in minutes from UTC
       * @default null
       */
      timezone_offset: number | null;
  } | null;
  /**
   * Page
   * @description Information about the page being viewed
   */
  page?: {
      /**
       * Previous
       * @description Index of the previous page; immediately unloaded
       * @default null
       */
      previous: number | null;
      /**
       * Title
       * @description Page title
       * @default null
       */
      title: string | null;
      /**
       * Url
       * @description Page URL visited
       */
      url: string;
  };
  /**
   * Referrer
   * @description Referrer URL
   * @default null
   */
  referrer: string | null;
  /**
   * Returning
   * @description Whether the visitor has returned before
   * @default null
   */
  returning: boolean | null;
  /**
   * Screen
   * @description Screen properties of the visitor.
   * @default null
   */
  screen: {
      /**
       * Depth
       * @description Screen color depth
       * @default null
       */
      depth: number | null;
      /**
       * Height
       * @description Screen height in pixels
       * @default null
       */
      height: number | null;
      /**
       * Pixel Ratio
       * @description Device pixel ratio
       * @default null
       */
      pixel_ratio: number | null;
      /**
       * Width
       * @description Screen width in pixels
       * @default null
       */
      width: number | null;
  } | null;
  /**
   * Timestamp
   * @description ISO 8601 timestamp of this pageview
   * @default null
   */
  timestamp: string | null;
  /**
   * Total
   * @description Aggregate visit and pageview counts for the visitor.
   * @default null
   */
  total: {
      /**
       * Pageviews
       * @description Total number of pageviews
       * @default null
       */
      pageviews: number | null;
      /**
       * Visits
       * @description Total number of visits
       * @default null
       */
      visits: number | null;
  } | null;
  /**
   * User Agent
   * @description Browser user-agent string
   * @default null
   */
  user_agent: string | null;
  /**
   * Visitor Id
   * @description Anonymous visitor ID for this action
   */
  visitor_id?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_TRACKING_PAGEVIEW tool output.
 */
type GOSQUARED_TRACKING_PAGEVIEW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if the request failed
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Error message if present
       * @default null
       */
      message: string | null;
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
 * Type of GOSQUARED's GOSQUARED_TRACKING_TRANSACTION tool input.
 */
type GOSQUARED_TRACKING_TRANSACTION_INPUT = {
  /**
   * Campaign
   * @description Campaign context with keys: name, source, medium, content, term.
   * @default null
   */
  campaign: {
      [key: string]: unknown;
  } | null;
  /**
   * Character Set
   * @description Character set of the visitor's browser.
   * @default null
   */
  character_set: string | null;
  /**
   * Ip
   * @description Visitor IP address for geolocation.
   * @default null
   */
  ip: string | null;
  /**
   * Language
   * @description Language setting of the visitor's browser.
   * @default null
   */
  language: string | null;
  /**
   * Last Pageview
   * @description ISO 8601 timestamp of last pageview.
   * @default null
   */
  last_pageview: string | null;
  /**
   * Location
   * @description Location context with key: timezone_offset.
   * @default null
   */
  location: {
      [key: string]: unknown;
  } | null;
  /**
   * Page
   * @description Page context with keys: url, title, previous, index, referrer.
   * @default null
   */
  page: {
      [key: string]: unknown;
  } | null;
  /**
   * Person Id
   * @description People person ID; prefix with 'email:' when using email.
   * @default null
   */
  person_id: string | null;
  /**
   * Returning
   * @description Whether the visitor is returning.
   * @default null
   */
  returning: boolean | null;
  /**
   * Screen
   * @description Screen context with keys: height, width, pixel_ratio, depth.
   * @default null
   */
  screen: {
      [key: string]: unknown;
  } | null;
  /**
   * Timestamp
   * @description ISO 8601 timestamp of when the transaction occurred.
   * @default null
   */
  timestamp: string | null;
  /**
   * Total
   * @description Session totals with keys: visits, pageviews.
   * @default null
   */
  total: {
      [key: string]: unknown;
  } | null;
  /**
   * Transaction
   * @description Transaction payload with keys: id, revenue, quantity, previous_transaction_timestamp, items.
   */
  transaction?: {
      [key: string]: unknown;
  };
  /**
   * User Agent
   * @description User agent string of the visitor's browser.
   * @default null
   */
  user_agent: string | null;
  /**
   * Visitor Id
   * @description Anonymous visitor ID associated with this transaction.
   * @default null
   */
  visitor_id: string | null;
};

/**
 * Type of GOSQUARED's GOSQUARED_TRACKING_TRANSACTION tool output.
 */
type GOSQUARED_TRACKING_TRANSACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if request failed.
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Error message if request failed.
       * @default null
       */
      message: string | null;
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
 * Type of GOSQUARED's GOSQUARED_TRENDS_AGGREGATE tool input.
 */
type GOSQUARED_TRENDS_AGGREGATE_INPUT = {
  /**
   * Date Format
   * @description Moment.js format string for any date fields in the response.
   * @default null
   */
  dateFormat: string | null;
  /**
   * Format
   * @description Response format, overrides Accept header.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
  /**
   * From Date
   * @description Start date-time for the query in ISO 8601 format.
   */
  from_date?: string;
  /**
   * Interval
   * @description Aggregation interval for grouping data.
   * @default day
   * @enum {string}
   */
  interval: "hour" | "day" | "month";
  /**
   * Limit
   * @description Pagination limit as 'offset,count'. Default is '0,20'.
   * @default null
   */
  limit: string | null;
  /**
   * To Date
   * @description End date-time for the query in ISO 8601 format.
   */
  to_date?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_TRENDS_AGGREGATE tool output.
 */
type GOSQUARED_TRENDS_AGGREGATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  } | null;
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
 * Type of GOSQUARED's GOSQUARED_TRENDS_CAMPAIGN_MEDIUM tool input.
 */
type GOSQUARED_TRENDS_CAMPAIGN_MEDIUM_INPUT = {
  /**
   * From Date
   * @description Start date-time for the query in ISO 8601 format.
   */
  from_date?: string;
  /**
   * Resolution
   * @description Aggregation bucket size for the time-series data.
   * @default day
   * @enum {string}
   */
  resolution: "hour" | "day" | "week" | "month";
  /**
   * To Date
   * @description End date-time for the query in ISO 8601 format.
   */
  to_date?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_TRENDS_CAMPAIGN_MEDIUM tool output.
 */
type GOSQUARED_TRENDS_CAMPAIGN_MEDIUM_OUTPUT = {
  /**
   * Data
   * @description List of UTM mediums and their time-series data.
   */
  data?: {
      /**
       * Data
       * @description Time-series counts for this medium, one entry per resolution bucket.
       */
      data: number[];
      /**
       * Name
       * @description UTM medium (e.g., 'email', 'social').
       */
      name: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Time period and resolution information.
   */
  meta?: {
      /**
       * End
       * @description Resolved end time of the series in ISO 8601 format.
       */
      end: string;
      /**
       * Resolution
       * @description Actual resolution of returned data.
       */
      resolution: string;
      /**
       * Start
       * @description Resolved start time of the series in ISO 8601 format.
       */
      start: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOSQUARED's GOSQUARED_TRENDS_EVENT tool input.
 */
type GOSQUARED_TRENDS_EVENT_INPUT = {
  /**
   * Date Format
   * @description Moment.js format string for any date fields in the response.
   * @default null
   */
  dateFormat: string | null;
  /**
   * Format
   * @description Response format, overrides Accept header.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
  /**
   * From Date
   * @description Start date-time for the query in ISO 8601 format.
   */
  from_date?: string;
  /**
   * Limit
   * @description Pagination limit as 'offset,count'. Default is '0,20'.
   * @default null
   */
  limit: string | null;
  /**
   * To Date
   * @description End date-time for the query in ISO 8601 format.
   */
  to_date?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_TRENDS_EVENT tool output.
 */
type GOSQUARED_TRENDS_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  } | null;
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
 * Type of GOSQUARED's GOSQUARED_TRENDS_PAGE tool input.
 */
type GOSQUARED_TRENDS_PAGE_INPUT = {
  /**
   * Date Format
   * @description Moment.js format string for output dates.
   * @default null
   */
  dateFormat: string | null;
  /**
   * Format
   * @description Response format; 'json' (default) or 'csv'.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
  /**
   * From Date
   * @description Start date-time for the query, in ISO 8601 format.
   */
  from_date?: string;
  /**
   * Limit
   * @description Limit results with optional offset,count (e.g., '0,20').
   * @default null
   */
  limit: string | null;
  /**
   * To Date
   * @description End date-time for the query, in ISO 8601 format.
   */
  to_date?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_TRENDS_PAGE tool output.
 */
type GOSQUARED_TRENDS_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of GOSQUARED's GOSQUARED_TRENDS_PATH1 tool input.
 */
type GOSQUARED_TRENDS_PATH1_INPUT = {
  /**
   * Date Format
   * @description Moment.js format string for output dates.
   * @default null
   */
  dateFormat: string | null;
  /**
   * Format
   * @description Response format; 'json' (default) or 'csv'.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
  /**
   * From Date
   * @description Start date-time for the query, in ISO 8601 format.
   */
  from_date?: string;
  /**
   * Limit
   * @description Limit results with optional 'offset,count' (e.g., '0,20').
   * @default null
   */
  limit: string | null;
  /**
   * To Date
   * @description End date-time for the query, in ISO 8601 format.
   */
  to_date?: string;
};

/**
 * Type of GOSQUARED's GOSQUARED_TRENDS_PATH1 tool output.
 */
type GOSQUARED_TRENDS_PATH1_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  } | null;
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
 * Type map of all available tool input types for toolkit "GOSQUARED".
 */
export type GOSQUARED_TOOL_INPUTS = {
  ACCOUNT_ADD_SHARED_USER: GOSQUARED_ACCOUNT_ADD_SHARED_USER_INPUT
  ACCOUNT_REMOVE_SHARED_USER: GOSQUARED_ACCOUNT_REMOVE_SHARED_USER_INPUT
  ACCOUNT_SHARED_USERS: GOSQUARED_ACCOUNT_SHARED_USERS_INPUT
  ACCOUNT_SITES: GOSQUARED_ACCOUNT_SITES_INPUT
  AUTH_TOKEN_INFO: GOSQUARED_AUTH_TOKEN_INFO_INPUT
  CHAT_CHAT: GOSQUARED_CHAT_CHAT_INPUT
  CHAT_CHATS: GOSQUARED_CHAT_CHATS_INPUT
  CHAT_CHAT_MESSAGES: GOSQUARED_CHAT_CHAT_MESSAGES_INPUT
  CHAT_FEED: GOSQUARED_CHAT_FEED_INPUT
  DELETE_PERSON: GOSQUARED_DELETE_PERSON_INPUT
  GET_CHAT_CHAT_MESSAGE: GOSQUARED_GET_CHAT_CHAT_MESSAGE_INPUT
  GET_NOW_VISITOR: GOSQUARED_GET_NOW_VISITOR_INPUT
  GET_PEOPLE_EVENT_TYPES: GOSQUARED_GET_PEOPLE_EVENT_TYPES_INPUT
  GET_PEOPLE_PROPERTY_TYPES: GOSQUARED_GET_PEOPLE_PROPERTY_TYPES_INPUT
  GET_PERSON: GOSQUARED_GET_PERSON_INPUT
  GET_PERSON_FEED: GOSQUARED_GET_PERSON_FEED_INPUT
  LIST_PEOPLE: GOSQUARED_LIST_PEOPLE_INPUT
  NOW_CONCURRENTS: GOSQUARED_NOW_CONCURRENTS_INPUT
  NOW_PAGES: GOSQUARED_NOW_PAGES_INPUT
  NOW_PLATFORMS: GOSQUARED_NOW_PLATFORMS_INPUT
  NOW_V3_OVERVIEW: GOSQUARED_NOW_V3_OVERVIEW_INPUT
  NOW_V3_SOURCES: GOSQUARED_NOW_V3_SOURCES_INPUT
  NOW_V3_TIME_SERIES: GOSQUARED_NOW_V3_TIME_SERIES_INPUT
  NOW_VISITORS: GOSQUARED_NOW_VISITORS_INPUT
  PEOPLE_DEVICES: GOSQUARED_PEOPLE_DEVICES_INPUT
  PEOPLE_SMARTGROUP_FEED: GOSQUARED_PEOPLE_SMARTGROUP_FEED_INPUT
  PEOPLE_SMARTGROUP_PEOPLE: GOSQUARED_PEOPLE_SMARTGROUP_PEOPLE_INPUT
  PEOPLE_SMART_GROUPS: GOSQUARED_PEOPLE_SMART_GROUPS_INPUT
  POST_ACCOUNT_SITES: GOSQUARED_POST_ACCOUNT_SITES_INPUT
  POST_CHAT_CHAT_ARCHIVE: GOSQUARED_POST_CHAT_CHAT_ARCHIVE_INPUT
  POST_CHAT_CHAT_MESSAGE: GOSQUARED_POST_CHAT_CHAT_MESSAGE_INPUT
  POST_CHAT_CHAT_NOTE: GOSQUARED_POST_CHAT_CHAT_NOTE_INPUT
  POST_CHAT_CHAT_UNARCHIVE: GOSQUARED_POST_CHAT_CHAT_UNARCHIVE_INPUT
  POST_PEOPLE_SMARTGROUPS: GOSQUARED_POST_PEOPLE_SMARTGROUPS_INPUT
  TRACKING_EVENT: GOSQUARED_TRACKING_EVENT_INPUT
  TRACKING_IDENTIFY: GOSQUARED_TRACKING_IDENTIFY_INPUT
  TRACKING_PAGEVIEW: GOSQUARED_TRACKING_PAGEVIEW_INPUT
  TRACKING_TRANSACTION: GOSQUARED_TRACKING_TRANSACTION_INPUT
  TRENDS_AGGREGATE: GOSQUARED_TRENDS_AGGREGATE_INPUT
  TRENDS_CAMPAIGN_MEDIUM: GOSQUARED_TRENDS_CAMPAIGN_MEDIUM_INPUT
  TRENDS_EVENT: GOSQUARED_TRENDS_EVENT_INPUT
  TRENDS_PAGE: GOSQUARED_TRENDS_PAGE_INPUT
  TRENDS_PATH1: GOSQUARED_TRENDS_PATH1_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOSQUARED".
 */
export type GOSQUARED_TOOL_OUTPUTS = {
  ACCOUNT_ADD_SHARED_USER: GOSQUARED_ACCOUNT_ADD_SHARED_USER_OUTPUT
  ACCOUNT_REMOVE_SHARED_USER: GOSQUARED_ACCOUNT_REMOVE_SHARED_USER_OUTPUT
  ACCOUNT_SHARED_USERS: GOSQUARED_ACCOUNT_SHARED_USERS_OUTPUT
  ACCOUNT_SITES: GOSQUARED_ACCOUNT_SITES_OUTPUT
  AUTH_TOKEN_INFO: GOSQUARED_AUTH_TOKEN_INFO_OUTPUT
  CHAT_CHAT: GOSQUARED_CHAT_CHAT_OUTPUT
  CHAT_CHATS: GOSQUARED_CHAT_CHATS_OUTPUT
  CHAT_CHAT_MESSAGES: GOSQUARED_CHAT_CHAT_MESSAGES_OUTPUT
  CHAT_FEED: GOSQUARED_CHAT_FEED_OUTPUT
  DELETE_PERSON: GOSQUARED_DELETE_PERSON_OUTPUT
  GET_CHAT_CHAT_MESSAGE: GOSQUARED_GET_CHAT_CHAT_MESSAGE_OUTPUT
  GET_NOW_VISITOR: GOSQUARED_GET_NOW_VISITOR_OUTPUT
  GET_PEOPLE_EVENT_TYPES: GOSQUARED_GET_PEOPLE_EVENT_TYPES_OUTPUT
  GET_PEOPLE_PROPERTY_TYPES: GOSQUARED_GET_PEOPLE_PROPERTY_TYPES_OUTPUT
  GET_PERSON: GOSQUARED_GET_PERSON_OUTPUT
  GET_PERSON_FEED: GOSQUARED_GET_PERSON_FEED_OUTPUT
  LIST_PEOPLE: GOSQUARED_LIST_PEOPLE_OUTPUT
  NOW_CONCURRENTS: GOSQUARED_NOW_CONCURRENTS_OUTPUT
  NOW_PAGES: GOSQUARED_NOW_PAGES_OUTPUT
  NOW_PLATFORMS: GOSQUARED_NOW_PLATFORMS_OUTPUT
  NOW_V3_OVERVIEW: GOSQUARED_NOW_V3_OVERVIEW_OUTPUT
  NOW_V3_SOURCES: GOSQUARED_NOW_V3_SOURCES_OUTPUT
  NOW_V3_TIME_SERIES: GOSQUARED_NOW_V3_TIME_SERIES_OUTPUT
  NOW_VISITORS: GOSQUARED_NOW_VISITORS_OUTPUT
  PEOPLE_DEVICES: GOSQUARED_PEOPLE_DEVICES_OUTPUT
  PEOPLE_SMARTGROUP_FEED: GOSQUARED_PEOPLE_SMARTGROUP_FEED_OUTPUT
  PEOPLE_SMARTGROUP_PEOPLE: GOSQUARED_PEOPLE_SMARTGROUP_PEOPLE_OUTPUT
  PEOPLE_SMART_GROUPS: GOSQUARED_PEOPLE_SMART_GROUPS_OUTPUT
  POST_ACCOUNT_SITES: GOSQUARED_POST_ACCOUNT_SITES_OUTPUT
  POST_CHAT_CHAT_ARCHIVE: GOSQUARED_POST_CHAT_CHAT_ARCHIVE_OUTPUT
  POST_CHAT_CHAT_MESSAGE: GOSQUARED_POST_CHAT_CHAT_MESSAGE_OUTPUT
  POST_CHAT_CHAT_NOTE: GOSQUARED_POST_CHAT_CHAT_NOTE_OUTPUT
  POST_CHAT_CHAT_UNARCHIVE: GOSQUARED_POST_CHAT_CHAT_UNARCHIVE_OUTPUT
  POST_PEOPLE_SMARTGROUPS: GOSQUARED_POST_PEOPLE_SMARTGROUPS_OUTPUT
  TRACKING_EVENT: GOSQUARED_TRACKING_EVENT_OUTPUT
  TRACKING_IDENTIFY: GOSQUARED_TRACKING_IDENTIFY_OUTPUT
  TRACKING_PAGEVIEW: GOSQUARED_TRACKING_PAGEVIEW_OUTPUT
  TRACKING_TRANSACTION: GOSQUARED_TRACKING_TRANSACTION_OUTPUT
  TRENDS_AGGREGATE: GOSQUARED_TRENDS_AGGREGATE_OUTPUT
  TRENDS_CAMPAIGN_MEDIUM: GOSQUARED_TRENDS_CAMPAIGN_MEDIUM_OUTPUT
  TRENDS_EVENT: GOSQUARED_TRENDS_EVENT_OUTPUT
  TRENDS_PAGE: GOSQUARED_TRENDS_PAGE_OUTPUT
  TRENDS_PATH1: GOSQUARED_TRENDS_PATH1_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOSQUARED toolkit.
 */
export const GOSQUARED = {
  slug: "gosquared",
  tools: {
    /**
     * Tool to add a new shared user to a project. Use when inviting team members via their email address.
     */
    ACCOUNT_ADD_SHARED_USER: "GOSQUARED_ACCOUNT_ADD_SHARED_USER",
    /**
     * Tool to remove a user from a GoSquared project. Use when you need to revoke a shared user's access to your site.
     */
    ACCOUNT_REMOVE_SHARED_USER: "GOSQUARED_ACCOUNT_REMOVE_SHARED_USER",
    /**
     * Tool to retrieve all team members that have access to a given project. Use after specifying the project to inspect user access.
     */
    ACCOUNT_SHARED_USERS: "GOSQUARED_ACCOUNT_SHARED_USERS",
    /**
     * Tool to list all projects/sites accessible to the authenticated account. Use when you need to retrieve the account's sites in either grouped or flat format.
     */
    ACCOUNT_SITES: "GOSQUARED_ACCOUNT_SITES",
    /**
     * Tool to check whether an API key is valid and retrieve its enabled scopes. Use when verifying API credentials before making further API calls.
     */
    AUTH_TOKEN_INFO: "GOSQUARED_AUTH_TOKEN_INFO",
    /**
     * Tool to retrieve a chat conversation by its ID. Use when you need the full conversation history after obtaining a chat session ID.
     */
    CHAT_CHAT: "GOSQUARED_CHAT_CHAT",
    /**
     * Tool to retrieve chat data for reporting purposes. Use when you need to list active chat conversations within a specific time window.
     */
    CHAT_CHATS: "GOSQUARED_CHAT_CHATS",
    /**
     * Tool to retrieve a list of messages from a chat conversation. Use after identifying the chatID via listing chat conversations to page through a chat's message history.
     */
    CHAT_CHAT_MESSAGES: "GOSQUARED_CHAT_CHAT_MESSAGES",
    /**
     * Tool to retrieve messages and events from a chat conversation. Use when you need to fetch chat history for a specific chat session.
     */
    CHAT_FEED: "GOSQUARED_CHAT_FEED",
    /**
     * Tool to delete a person profile and all associated data. Use when you need to permanently remove a person's record and optionally blacklist them.
     */
    DELETE_PERSON: "GOSQUARED_DELETE_PERSON",
    /**
     * Tool to retrieve a specific chat message. Use when you have both chat ID and message ID to fetch the message details.
     */
    GET_CHAT_CHAT_MESSAGE: "GOSQUARED_GET_CHAT_CHAT_MESSAGE",
    /**
     * Tool to retrieve information for a specific online visitor. Use after obtaining visitorID to get detailed visit data.
     */
    GET_NOW_VISITOR: "GOSQUARED_GET_NOW_VISITOR",
    /**
     * Tool to retrieve event types ordered by tracked count. Use when you need to display the most tracked event types.
     */
    GET_PEOPLE_EVENT_TYPES: "GOSQUARED_GET_PEOPLE_EVENT_TYPES",
    /**
     * Tool to retrieve all property types in People CRM. Use when you need to discover available profile or event properties.
     */
    GET_PEOPLE_PROPERTY_TYPES: "GOSQUARED_GET_PEOPLE_PROPERTY_TYPES",
    /**
     * Tool to retrieve a specific person profile by ID. Use when you need to fetch details of a person by their unique identifier.
     */
    GET_PERSON: "GOSQUARED_GET_PERSON",
    /**
     * Tool to retrieve a specific person's event feed in reverse chronological order. Use after confirming the personID.
     */
    GET_PERSON_FEED: "GOSQUARED_GET_PERSON_FEED",
    /**
     * Tool to search and filter People CRM profiles. Use when you need to retrieve a list of people based on query terms, specific property or event filters, sorting, and pagination.
     */
    LIST_PEOPLE: "GOSQUARED_LIST_PEOPLE",
    /**
     * Tool to retrieve the number of concurrent visitors currently on your site. Use when you need live, real-time visitor metrics.
     */
    NOW_CONCURRENTS: "GOSQUARED_NOW_CONCURRENTS",
    /**
     * Tool to retrieve the most popular pages currently being viewed on your site. Use when real-time active page data is needed.
     */
    NOW_PAGES: "GOSQUARED_NOW_PAGES",
    /**
     * Tool to retrieve platforms used by online visitors sorted by visitor count. Use when you need a real-time breakdown of active visitor platforms.
     */
    NOW_PLATFORMS: "GOSQUARED_NOW_PLATFORMS",
    /**
     * Tool to retrieve a summary of real-time data for the site. Use when a snapshot of current online visitor metrics and summary statistics is needed.
     */
    NOW_V3_OVERVIEW: "GOSQUARED_NOW_V3_OVERVIEW",
    /**
     * Tool to retrieve the most influential traffic sources currently driving visitors to your site. Use when you need an up-to-the-minute breakdown of referrer sources.
     */
    NOW_V3_SOURCES: "GOSQUARED_NOW_V3_SOURCES",
    /**
     * Tool to retrieve visitor counts over time as data points. Use when you need historical visitor data bucketed by interval.
     */
    NOW_V3_TIME_SERIES: "GOSQUARED_NOW_V3_TIME_SERIES",
    /**
     * Tool to retrieve a list of current online visitors. Use when you need detailed real-time visitor information.
     */
    NOW_VISITORS: "GOSQUARED_NOW_VISITORS",
    /**
     * Tool to retrieve device information from People CRM. Use when you need a paginated view of a user's device usage.
     */
    PEOPLE_DEVICES: "GOSQUARED_PEOPLE_DEVICES",
    /**
     * Tool to export all pageview activity for a Smart Group to CSV. Use when you need a temporary download link for up to 60 days of data; link expires after 15 minutes.
     */
    PEOPLE_SMARTGROUP_FEED: "GOSQUARED_PEOPLE_SMARTGROUP_FEED",
    /**
     * Tool to retrieve people in a specific Smart Group. Use when listing or filtering members of a Smart Group.
     */
    PEOPLE_SMARTGROUP_PEOPLE: "GOSQUARED_PEOPLE_SMARTGROUP_PEOPLE",
    /**
     * Tool to retrieve all Smart Groups for a project. Use when you need to list the Smart Groups configured in your People project.
     */
    PEOPLE_SMART_GROUPS: "GOSQUARED_PEOPLE_SMART_GROUPS",
    /**
     * Tool to add a new site to the GoSquared account. Use when you want to register a new site for data collection under your account.
     */
    POST_ACCOUNT_SITES: "GOSQUARED_POST_ACCOUNT_SITES",
    /**
     * Tool to archive a chat conversation. Use when you need to programmatically close out a chat after its session ends.
     */
    POST_CHAT_CHAT_ARCHIVE: "GOSQUARED_POST_CHAT_CHAT_ARCHIVE",
    /**
     * Tool to send a message in a chat conversation. Use after confirming chatID and providing auth if sending as client.
     */
    POST_CHAT_CHAT_MESSAGE: "GOSQUARED_POST_CHAT_CHAT_MESSAGE",
    /**
     * Tool to leave a note in a chat conversation. Use when you need to annotate or add comments to an existing chat session.
     */
    POST_CHAT_CHAT_NOTE: "GOSQUARED_POST_CHAT_CHAT_NOTE",
    /**
     * Tool to unarchive a chat conversation. Use when you need to restore an archived chat back to active state after confirming that the conversation should be resumed.
     */
    POST_CHAT_CHAT_UNARCHIVE: "GOSQUARED_POST_CHAT_CHAT_UNARCHIVE",
    /**
     * Tool to add a new Smart Group to a GoSquared project. Use when you need to segment users by custom criteria.
     */
    POST_PEOPLE_SMARTGROUPS: "GOSQUARED_POST_PEOPLE_SMARTGROUPS",
    /**
     * Tool to send custom events to GoSquared. Use when tracking user or system events in analytics.
     */
    TRACKING_EVENT: "GOSQUARED_TRACKING_EVENT",
    /**
     * Tool to identify users and associate them with specific properties in GoSquared. Use after obtaining or confirming a visitor’s identity to link their anonymous activity with their known user record and update their profile.
     */
    TRACKING_IDENTIFY: "GOSQUARED_TRACKING_IDENTIFY",
    /**
     * Tool to track pageviews. Use when you need to record a pageview event for a visitor after obtaining their visitor_id and page details.
     */
    TRACKING_PAGEVIEW: "GOSQUARED_TRACKING_PAGEVIEW",
    /**
     * Tool to track e-commerce transactions. Use when a user completes a purchase and you need to record the transaction in GoSquared.
     */
    TRACKING_TRANSACTION: "GOSQUARED_TRACKING_TRANSACTION",
    /**
     * Tool to retrieve aggregate metrics for a specified period. Use after specifying both start and end date-times to obtain summarised metrics, optionally grouped by interval.
     */
    TRENDS_AGGREGATE: "GOSQUARED_TRENDS_AGGREGATE",
    /**
     * Tool to retrieve UTM medium metrics over a time period. Use when analyzing campaign performance by medium.
     */
    TRENDS_CAMPAIGN_MEDIUM: "GOSQUARED_TRENDS_CAMPAIGN_MEDIUM",
    /**
     * Tool to retrieve counts of event triggers over a specified time period. Use when you need to analyze event frequency for a site between two date-times.
     */
    TRENDS_EVENT: "GOSQUARED_TRENDS_EVENT",
    /**
     * Tool to retrieve page-level metrics over a specified period. Use when you want summarised page metrics for individual pages within a date range.
     */
    TRENDS_PAGE: "GOSQUARED_TRENDS_PAGE",
    /**
     * Tool to retrieve base path metrics over a time period. Use when you need to analyze the most common entry page paths for a site within a specified date range.
     */
    TRENDS_PATH1: "GOSQUARED_TRENDS_PATH1",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOSQUARED".
 */
export type GOSQUARED_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOSQUARED".
 */
export type GOSQUARED_TRIGGER_EVENTS = {}
