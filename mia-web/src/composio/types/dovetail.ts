// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOVETAIL's DOVETAIL_CREATE_CHANNEL tool input.
 */
type DOVETAIL_CREATE_CHANNEL_INPUT = {
  /**
   * Description
   * @description Optional description of the channel.
   * @default null
   */
  description: string | null;
  /**
   * Members
   * @description Optional list of member user IDs to add to the channel.
   * @default null
   */
  members: string[] | null;
  /**
   * Metadata
   * @description Optional arbitrary metadata about the channel.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description The name of the channel.
   */
  name?: string;
  /**
   * Type
   * @description Type of the channel (public or private).
   * @enum {string}
   */
  type?: "public" | "private";
};

/**
 * Type of DOVETAIL's DOVETAIL_CREATE_CHANNEL tool output.
 */
type DOVETAIL_CREATE_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the channel was created.
       */
      created_at: string;
      /**
       * Description
       * @description Channel description.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the channel.
       */
      id: string;
      /**
       * Members
       * @description List of user IDs in the channel.
       */
      members: string[];
      /**
       * Metadata
       * @description Metadata associated with the channel.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Name of the channel.
       */
      name: string;
      /**
       * Type
       * @description Type of the channel (public/private).
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
 * Type of DOVETAIL's DOVETAIL_CREATE_CONTACT tool input.
 */
type DOVETAIL_CREATE_CONTACT_INPUT = {
  /**
   * Email
   * Format: email
   * @description The contact's email address.
   */
  email?: unknown;
  /**
   * Name
   * @description The contact's name.
   */
  name?: string;
};

/**
 * Type of DOVETAIL's DOVETAIL_CREATE_CONTACT tool output.
 */
type DOVETAIL_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Wrapper object containing the created contact data.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created contact.
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
 * Type of DOVETAIL's DOVETAIL_CREATE_DATA_POINT tool input.
 */
type DOVETAIL_CREATE_DATA_POINT_INPUT = {
  /**
   * Channel Id
   * @description Unique identifier of the channel that the data point is associated with
   */
  channel_id?: string;
  /**
   * Metadata
   * @description Optional key-value metadata to include with the data point
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Source Title
   * @description The title of the original source from which this data point was extracted (optional)
   * @default null
   */
  source_title: string | null;
  /**
   * Source Url
   * Format: uri
   * @description The URL of the original source from which this data point was extracted (optional)
   * @default null
   */
  source_url: unknown;
  /**
   * Text
   * @description The data point's content, length between 1 and 5,000,000 characters
   */
  text?: string;
  /**
   * Timestamp
   * Format: date-time
   * @description The data point's timestamp in ISO8601 format
   */
  timestamp?: unknown;
};

/**
 * Type of DOVETAIL's DOVETAIL_CREATE_DATA_POINT tool output.
 */
type DOVETAIL_CREATE_DATA_POINT_OUTPUT = {
  /**
   * Data
   * @description Response data for a created data point.
   */
  data?: {
      /**
       * Channel
       * @description The channel to which the data point belongs
       */
      channel: {
          /**
           * Id
           * @description Identifier of the channel
           */
          id: string;
      };
      /**
       * Created At
       * @description ISO8601 timestamp when the data point was created on the server
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the newly created data point
       */
      id: string;
      /**
       * Timestamp
       * @description Timestamp of the data point as stored by the server
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
 * Type of DOVETAIL's DOVETAIL_CREATE_INSIGHT tool input.
 */
type DOVETAIL_CREATE_INSIGHT_INPUT = {
  /**
   * Body
   * @description The main content of the insight.
   */
  body?: string;
  /**
   * Project Id
   * @description ID of the related project. If omitted, the insight will not be tied to a specific project.
   * @default null
   */
  project_id: string | null;
  /**
   * Tags
   * @description Tags for categorizing the insight.
   * @default null
   */
  tags: string[] | null;
  /**
   * Title
   * @description The title of the insight.
   */
  title?: string;
};

/**
 * Type of DOVETAIL's DOVETAIL_CREATE_INSIGHT tool output.
 */
type DOVETAIL_CREATE_INSIGHT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description The content of the insight.
       */
      body: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the insight was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the insight.
       */
      id: string;
      /**
       * Project Id
       * @description Related project ID if provided on creation.
       * @default null
       */
      project_id: string | null;
      /**
       * Tags
       * @description Assigned tags for the insight.
       */
      tags: string[];
      /**
       * Title
       * @description The insight's title.
       */
      title: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the insight was last updated.
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
 * Type of DOVETAIL's DOVETAIL_CREATE_TOPIC tool input.
 */
type DOVETAIL_CREATE_TOPIC_INPUT = {
  /**
   * Channel Id
   * @description UUID of the channel to add the topic to
   */
  channel_id?: string;
  /**
   * Description
   * @description Optional description or body of the topic
   * @default null
   */
  description: string | null;
  /**
   * Title
   * @description Title of the new topic
   */
  title?: string;
};

/**
 * Type of DOVETAIL's DOVETAIL_CREATE_TOPIC tool output.
 */
type DOVETAIL_CREATE_TOPIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channel Id
       * @description UUID of the channel this topic belongs to
       */
      channel_id: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the topic was created
       */
      created_at: string;
      /**
       * Description
       * @description Description or body of the topic
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description UUID of the created topic
       */
      id: string;
      /**
       * Title
       * @description Title of the topic
       */
      title: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the topic was last updated
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
 * Type of DOVETAIL's DOVETAIL_DELETE_CHANNEL tool input.
 */
type DOVETAIL_DELETE_CHANNEL_INPUT = {
  /**
   * Channel Id
   * @description The unique identifier of the channel to delete. Deleted channel ends up in project's trash, restorable for 30 days.
   */
  channel_id?: string;
};

/**
 * Type of DOVETAIL's DOVETAIL_DELETE_CHANNEL tool output.
 */
type DOVETAIL_DELETE_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Wrapper object containing the deleted channel details.
   */
  data?: {
      /**
       * Deleted
       * @description Flag indicating channel deletion status (always true).
       */
      deleted: boolean;
      /**
       * Deleted At
       * @description ISO 8601 timestamp when the channel was deleted.
       */
      deleted_at: string;
      /**
       * Id
       * @description Unique identifier of the deleted channel.
       */
      id: string;
      /**
       * Title
       * @description Title of the deleted channel.
       */
      title: string;
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
 * Type of DOVETAIL's DOVETAIL_DELETE_TOPIC tool input.
 */
type DOVETAIL_DELETE_TOPIC_INPUT = {
  /**
   * Topic Id
   * @description Unique identifier of the topic to delete. Deleted topic ends up in project's trash, restorable for 30 days.
   */
  topic_id?: string;
};

/**
 * Type of DOVETAIL's DOVETAIL_DELETE_TOPIC tool output.
 */
type DOVETAIL_DELETE_TOPIC_OUTPUT = {
  /**
   * Data
   * @description Wrapper object containing the deleted topic details.
   */
  data?: {
      /**
       * Deleted
       * @description Flag indicating topic deletion status (always true).
       */
      deleted: boolean;
      /**
       * Deleted At
       * @description ISO 8601 timestamp when the topic was deleted.
       */
      deleted_at: string;
      /**
       * Id
       * @description Unique identifier of the deleted topic.
       */
      id: string;
      /**
       * Title
       * @description Title of the deleted topic.
       */
      title: string;
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
 * Type of DOVETAIL's DOVETAIL_GET_NOTE tool input.
 */
type DOVETAIL_GET_NOTE_INPUT = {
  /**
   * Note Id
   * @description Unique identifier of the note to retrieve
   */
  note_id?: string;
};

/**
 * Type of DOVETAIL's DOVETAIL_GET_NOTE tool output.
 */
type DOVETAIL_GET_NOTE_OUTPUT = {
  /**
   * Data
   * @description Retrieved note details
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp of note creation
       */
      created_at: string;
      /**
       * Fields
       * @description List of custom fields
       */
      fields: {
          /**
           * Label
           * @description Field label
           */
          label: string;
          /**
           * Value
           * @description Field value
           */
          value: string;
      }[];
      /**
       * Files
       * @description List of associated files
       */
      files: {
          /**
           * Author
           * @description File author info
           */
          author: {
              /**
               * Id
               * @description Author identifier
               */
              id: string;
              /**
               * Name
               * @description Author name
               */
              name: string;
          };
          /**
           * Created At
           * @description ISO timestamp of file creation
           */
          created_at: string;
          /**
           * Id
           * @description File identifier
           */
          id: string;
          /**
           * Name
           * @description File name
           */
          name: string;
          /**
           * Status
           * @description File upload status
           */
          status: string;
          /**
           * Type
           * @description File type
           */
          type: string;
      }[];
      /**
       * Id
       * @description Note identifier
       */
      id: string;
      /**
       * Project
       * @description Associated project info
       */
      project: {
          /**
           * Id
           * @description Project identifier
           */
          id: string;
          /**
           * Title
           * @description Project title
           */
          title: string;
      };
      /**
       * Title
       * @description Note title
       */
      title: string;
      /**
       * Type
       * @description Resource type, always 'note'
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
 * Type of DOVETAIL's DOVETAIL_GET_TOKEN_INFO tool input.
 */
type DOVETAIL_GET_TOKEN_INFO_INPUT = object;

/**
 * Type of DOVETAIL's DOVETAIL_GET_TOKEN_INFO tool output.
 */
type DOVETAIL_GET_TOKEN_INFO_OUTPUT = {
  /**
   * Data
   * @description Wrapper object containing the current token's information.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the API token.
       */
      id: string;
      /**
       * Subdomain
       * @description Subdomain associated with the API token.
       */
      subdomain: string;
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
 * Type of DOVETAIL's DOVETAIL_LIST_CONTACTS tool input.
 */
type DOVETAIL_LIST_CONTACTS_INPUT = object;

/**
 * Type of DOVETAIL's DOVETAIL_LIST_CONTACTS tool output.
 */
type DOVETAIL_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description List of contacts returned by the API.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the contact was created.
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the contact.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the contact.
       */
      id: string;
      /**
       * Name
       * @description Full name of the contact.
       * @default null
       */
      name: string | null;
      /**
       * Phone
       * @description Phone number of the contact.
       * @default null
       */
      phone: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the contact was last updated.
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
 * Type of DOVETAIL's DOVETAIL_LIST_DATA tool input.
 */
type DOVETAIL_LIST_DATA_INPUT = {
  /**
   * Filter
   * @description Filter expression using Dovetail Filters syntax. See https://developers.dovetail.com/docs/filters.
   * @default null
   */
  filter: string | null;
  /**
   * Page[Limit]
   * @description Number of items to return per page (1-100). Defaults to 100.
   * @default null
   */
  "page[limit]": number | null;
  /**
   * Page[Start Cursor]
   * @description Cursor to fetch the next page of results.
   * @default null
   */
  "page[start_cursor]": string | null;
  /**
   * Sort
   * @description Sort expression using Dovetail Sort syntax. See https://developers.dovetail.com/docs/sort.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of DOVETAIL's DOVETAIL_LIST_DATA tool output.
 */
type DOVETAIL_LIST_DATA_OUTPUT = {
  /**
   * Data
   * @description List of data items returned by the API.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes object with metadata and content of the data item.
       */
      attributes: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO 8601 timestamp when the data item was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the data item.
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'data'.
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the data item was last updated.
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
   * Page
   * @description Pagination details for navigating through results.
   */
  page?: {
      /**
       * Has More
       * @description Whether more pages are available.
       */
      has_more: boolean;
      /**
       * Next Cursor
       * @description Cursor for fetching the next page of results.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Total Count
       * @description Total number of items across all pages.
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOVETAIL's DOVETAIL_LIST_HIGHLIGHTS tool input.
 */
type DOVETAIL_LIST_HIGHLIGHTS_INPUT = object;

/**
 * Type of DOVETAIL's DOVETAIL_LIST_HIGHLIGHTS tool output.
 */
type DOVETAIL_LIST_HIGHLIGHTS_OUTPUT = {
  /**
   * Data
   * @description List of highlights returned by the API.
   */
  data?: {
      /**
       * Body
       * @description Text content of the highlight.
       */
      body: string;
      /**
       * Color
       * @description Color of the highlight if specified.
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the highlight was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the highlight.
       */
      id: string;
      /**
       * Note Id
       * @description ID of the note this highlight belongs to.
       */
      note_id: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the highlight was last updated.
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
 * Type of DOVETAIL's DOVETAIL_LIST_NOTES tool input.
 */
type DOVETAIL_LIST_NOTES_INPUT = object;

/**
 * Type of DOVETAIL's DOVETAIL_LIST_NOTES tool output.
 */
type DOVETAIL_LIST_NOTES_OUTPUT = {
  /**
   * Data
   * @description List of notes returned by the API.
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp of note creation
       */
      created_at: string;
      /**
       * Fields
       * @description List of custom fields
       */
      fields: {
          /**
           * Label
           * @description Field label
           */
          label: string;
          /**
           * Value
           * @description Field value
           */
          value: string;
      }[];
      /**
       * Files
       * @description List of associated files
       */
      files: {
          /**
           * Author
           * @description File author info
           */
          author: {
              /**
               * Id
               * @description Author identifier
               */
              id: string;
              /**
               * Name
               * @description Author name
               */
              name: string;
          };
          /**
           * Created At
           * @description ISO timestamp of file creation
           */
          created_at: string;
          /**
           * Id
           * @description File identifier
           */
          id: string;
          /**
           * Name
           * @description File name
           */
          name: string;
          /**
           * Status
           * @description File upload status
           */
          status: string;
          /**
           * Type
           * @description File type
           */
          type: string;
      }[];
      /**
       * Id
       * @description Note identifier
       */
      id: string;
      /**
       * Project
       * @description Associated project info
       */
      project: {
          /**
           * Id
           * @description Project identifier
           */
          id: string;
          /**
           * Title
           * @description Project title
           */
          title: string;
      };
      /**
       * Title
       * @description Note title
       */
      title: string;
      /**
       * Type
       * @description Resource type, always 'note'
       */
      type: string;
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
 * Type of DOVETAIL's DOVETAIL_LIST_PROJECTS tool input.
 */
type DOVETAIL_LIST_PROJECTS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (minimum 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of projects to return per page (minimum 1).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of DOVETAIL's DOVETAIL_LIST_PROJECTS tool output.
 */
type DOVETAIL_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description List of projects returned by the API.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the project was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the project.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the project.
       */
      id: number;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the project was last updated.
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
 * Type of DOVETAIL's DOVETAIL_LIST_TAGS tool input.
 */
type DOVETAIL_LIST_TAGS_INPUT = object;

/**
 * Type of DOVETAIL's DOVETAIL_LIST_TAGS tool output.
 */
type DOVETAIL_LIST_TAGS_OUTPUT = {
  /**
   * Data
   * @description List of tags associated with the workspace.
   */
  data?: string[];
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
 * Type of DOVETAIL's DOVETAIL_LIST_USER_INSIGHTS tool input.
 */
type DOVETAIL_LIST_USER_INSIGHTS_INPUT = {
  /**
   * User Id
   * @description Unique identifier of the user whose insights will be listed.
   */
  user_id?: string;
};

/**
 * Type of DOVETAIL's DOVETAIL_LIST_USER_INSIGHTS tool output.
 */
type DOVETAIL_LIST_USER_INSIGHTS_OUTPUT = {
  /**
   * Data
   * @description List of personal insights returned by the API.
   */
  data?: {
      /**
       * Body
       * @description Content body of the insight.
       */
      body: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the insight was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the insight.
       */
      id: string;
      /**
       * Project Id
       * @description ID of the project the insight belongs to.
       * @default null
       */
      project_id: string | null;
      /**
       * Tags
       * @description List of tags assigned to the insight.
       */
      tags: string[];
      /**
       * Title
       * @description Title of the insight.
       */
      title: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the insight was last updated.
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
 * Type of DOVETAIL's DOVETAIL_MAGIC_SEARCH tool input.
 */
type DOVETAIL_MAGIC_SEARCH_INPUT = {
  /**
   * Limit
   * @description Maximum number of items per type to return
   * @default 20
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for paginated results, 1-based
   * @default 1
   */
  page: number | null;
  /**
   * Query
   * @description Text query to search across workspace data
   */
  query?: string;
  /**
   * Types
   * @description Result types to include; defaults to all types if omitted
   * @default null
   */
  types: string[] | null;
};

/**
 * Type of DOVETAIL's DOVETAIL_MAGIC_SEARCH tool output.
 */
type DOVETAIL_MAGIC_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Search results container
   */
  data?: {
      /**
       * Channels
       * @description Channel results
       */
      channels?: {
          /**
           * Created At
           * @description ISO timestamp when created
           */
          created_at: string;
          /**
           * Description
           * @description Channel description, if available
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Channel identifier
           */
          id: string;
          /**
           * Name
           * @description Name of the channel
           */
          name: string;
          /**
           * Result Type
           * @description Type of the result
           * @constant
           */
          result_type: "CHANNEL";
          /**
           * Type
           * @description Channel visibility type
           * @enum {string}
           */
          type: "public" | "private";
          /**
           * Updated At
           * @description ISO timestamp when last updated
           */
          updated_at: string;
      }[];
      /**
       * Highlights
       * @description Highlight results
       */
      highlights?: {
          /**
           * Author Id
           * @description Identifier of the highlight author
           */
          author_id: string;
          /**
           * Created At
           * @description ISO timestamp when created
           */
          created_at: string;
          /**
           * Id
           * @description Highlight identifier
           */
          id: string;
          /**
           * Note Id
           * @description Associated note identifier
           */
          note_id: string;
          /**
           * Note Title
           * @description Title of the associated note
           */
          note_title: string;
          /**
           * Preview Text
           * @description Excerpt of the highlight text
           */
          preview_text: string;
          /**
           * Project Id
           * @description Identifier of the project containing the highlight
           */
          project_id: string;
          /**
           * Project Title
           * @description Title of the project containing the highlight
           */
          project_title: string;
          /**
           * Result Type
           * @description Type of the result
           * @constant
           */
          result_type: "HIGHLIGHT";
          /**
           * Tags
           * @description Tags associated with this highlight
           */
          tags: {
              /**
               * Highlight Count
               * @description Number of highlights for this tag
               */
              highlight_count: number;
              /**
               * Title
               * @description Tag title
               */
              title: string;
          }[];
          /**
           * Updated At
           * @description ISO timestamp when last updated
           */
          updated_at: string;
      }[];
      /**
       * Insights
       * @description Insight results
       */
      insights?: {
          /**
           * Created At
           * @description ISO timestamp when created
           */
          created_at: string;
          /**
           * Id
           * @description Insight identifier
           */
          id: string;
          /**
           * Preview Text
           * @description Excerpt of the insight, if available
           * @default null
           */
          preview_text: string | null;
          /**
           * Result Type
           * @description Type of the result
           * @constant
           */
          result_type: "INSIGHT";
          /**
           * Title
           * @description Title of the insight
           */
          title: string;
          /**
           * Updated At
           * @description ISO timestamp when last updated
           */
          updated_at: string;
      }[];
      /**
       * Notes
       * @description Note results
       */
      notes?: {
          /**
           * Created At
           * @description ISO timestamp when created
           */
          created_at: string;
          /**
           * Id
           * @description Note identifier
           */
          id: string;
          /**
           * Preview Text
           * @description Excerpt of the note, if available
           * @default null
           */
          preview_text: string | null;
          /**
           * Result Type
           * @description Type of the result
           * @constant
           */
          result_type: "NOTE";
          /**
           * Title
           * @description Title of the note
           */
          title: string;
          /**
           * Updated At
           * @description ISO timestamp when last updated
           */
          updated_at: string;
      }[];
      /**
       * Tags
       * @description Tag results
       */
      tags?: {
          /**
           * Author Id
           * @description Identifier of the tag author
           */
          author_id: string;
          /**
           * Id
           * @description Tag identifier
           */
          id: string;
          /**
           * Result Type
           * @description Type of the result
           * @constant
           */
          result_type: "TAG";
          /**
           * Title
           * @description Title of the tag
           */
          title: string;
      }[];
      /**
       * Themes
       * @description Theme results
       */
      themes?: {
          /**
           * Created At
           * @description ISO timestamp when created
           */
          created_at: string;
          /**
           * Id
           * @description Theme identifier
           */
          id: string;
          /**
           * Name
           * @description Name of the theme
           */
          name: string;
          /**
           * Result Type
           * @description Type of the result
           * @constant
           */
          result_type: "THEME";
          /**
           * Updated At
           * @description ISO timestamp when last updated
           */
          updated_at: string;
      }[];
      /**
       * Total
       * @description Total number of matching items
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
 * Type of DOVETAIL's DOVETAIL_UPDATE_TOPIC tool input.
 */
type DOVETAIL_UPDATE_TOPIC_INPUT = {
  /**
   * Description
   * @description Updated description for the topic.
   * @default null
   */
  description: string | null;
  /**
   * Title
   * @description New title for the topic.
   * @default null
   */
  title: string | null;
  /**
   * Topic Id
   * @description UUID of the topic to update.
   */
  topic_id?: string;
};

/**
 * Type of DOVETAIL's DOVETAIL_UPDATE_TOPIC tool output.
 */
type DOVETAIL_UPDATE_TOPIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channel Id
       * @description UUID of the channel this topic belongs to.
       * @default null
       */
      channel_id: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the topic was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description Description of the topic.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description UUID of the topic.
       */
      id: string;
      /**
       * Title
       * @description Title of the topic.
       */
      title: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the topic was last updated.
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
 * Type map of all available tool input types for toolkit "DOVETAIL".
 */
export type DOVETAIL_TOOL_INPUTS = {
  CREATE_CHANNEL: DOVETAIL_CREATE_CHANNEL_INPUT
  CREATE_CONTACT: DOVETAIL_CREATE_CONTACT_INPUT
  CREATE_DATA_POINT: DOVETAIL_CREATE_DATA_POINT_INPUT
  CREATE_INSIGHT: DOVETAIL_CREATE_INSIGHT_INPUT
  CREATE_TOPIC: DOVETAIL_CREATE_TOPIC_INPUT
  DELETE_CHANNEL: DOVETAIL_DELETE_CHANNEL_INPUT
  DELETE_TOPIC: DOVETAIL_DELETE_TOPIC_INPUT
  GET_NOTE: DOVETAIL_GET_NOTE_INPUT
  GET_TOKEN_INFO: DOVETAIL_GET_TOKEN_INFO_INPUT
  LIST_CONTACTS: DOVETAIL_LIST_CONTACTS_INPUT
  LIST_DATA: DOVETAIL_LIST_DATA_INPUT
  LIST_HIGHLIGHTS: DOVETAIL_LIST_HIGHLIGHTS_INPUT
  LIST_NOTES: DOVETAIL_LIST_NOTES_INPUT
  LIST_PROJECTS: DOVETAIL_LIST_PROJECTS_INPUT
  LIST_TAGS: DOVETAIL_LIST_TAGS_INPUT
  LIST_USER_INSIGHTS: DOVETAIL_LIST_USER_INSIGHTS_INPUT
  MAGIC_SEARCH: DOVETAIL_MAGIC_SEARCH_INPUT
  UPDATE_TOPIC: DOVETAIL_UPDATE_TOPIC_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOVETAIL".
 */
export type DOVETAIL_TOOL_OUTPUTS = {
  CREATE_CHANNEL: DOVETAIL_CREATE_CHANNEL_OUTPUT
  CREATE_CONTACT: DOVETAIL_CREATE_CONTACT_OUTPUT
  CREATE_DATA_POINT: DOVETAIL_CREATE_DATA_POINT_OUTPUT
  CREATE_INSIGHT: DOVETAIL_CREATE_INSIGHT_OUTPUT
  CREATE_TOPIC: DOVETAIL_CREATE_TOPIC_OUTPUT
  DELETE_CHANNEL: DOVETAIL_DELETE_CHANNEL_OUTPUT
  DELETE_TOPIC: DOVETAIL_DELETE_TOPIC_OUTPUT
  GET_NOTE: DOVETAIL_GET_NOTE_OUTPUT
  GET_TOKEN_INFO: DOVETAIL_GET_TOKEN_INFO_OUTPUT
  LIST_CONTACTS: DOVETAIL_LIST_CONTACTS_OUTPUT
  LIST_DATA: DOVETAIL_LIST_DATA_OUTPUT
  LIST_HIGHLIGHTS: DOVETAIL_LIST_HIGHLIGHTS_OUTPUT
  LIST_NOTES: DOVETAIL_LIST_NOTES_OUTPUT
  LIST_PROJECTS: DOVETAIL_LIST_PROJECTS_OUTPUT
  LIST_TAGS: DOVETAIL_LIST_TAGS_OUTPUT
  LIST_USER_INSIGHTS: DOVETAIL_LIST_USER_INSIGHTS_OUTPUT
  MAGIC_SEARCH: DOVETAIL_MAGIC_SEARCH_OUTPUT
  UPDATE_TOPIC: DOVETAIL_UPDATE_TOPIC_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOVETAIL toolkit.
 */
export const DOVETAIL = {
  slug: "dovetail",
  tools: {
    /**
     * Tool to create a new channel in dovetail. use after confirming channel details.
     */
    CREATE_CHANNEL: "DOVETAIL_CREATE_CHANNEL",
    /**
     * Tool to create a new contact in dovetail. use when you need to register a contact before logging interactions.
     */
    CREATE_CONTACT: "DOVETAIL_CREATE_CONTACT",
    /**
     * Tool to create a data point within a channel. use after capturing new content to record and classify it in dovetail.
     */
    CREATE_DATA_POINT: "DOVETAIL_CREATE_DATA_POINT",
    /**
     * Tool to create a new insight in dovetail. use after synthesizing findings when ready to store them. example: "create insight 'q1 user trends' with body '...' for project 'proj 123'."
     */
    CREATE_INSIGHT: "DOVETAIL_CREATE_INSIGHT",
    /**
     * Tool to create a new topic in a channel. use after confirming channel id, title, and optional description.
     */
    CREATE_TOPIC: "DOVETAIL_CREATE_TOPIC",
    /**
     * Tool to delete an existing channel. use when you need to remove a channel and move it to the project's trash (restorable for 30 days). confirm the channel id before calling.
     */
    DELETE_CHANNEL: "DOVETAIL_DELETE_CHANNEL",
    /**
     * Tool to delete an existing topic. use when you have confirmed the topic id and want to move it to trash (restorable for 30 days). example: "delete topic with id 123e4567-e89b-12d3-a456-426614174000."
     */
    DELETE_TOPIC: "DOVETAIL_DELETE_TOPIC",
    /**
     * Tool to retrieve details of a specific note. use when you have confirmed the note id and need full note metadata from dovetail.
     */
    GET_NOTE: "DOVETAIL_GET_NOTE",
    /**
     * Tool to get information about the current api token. use after authenticating to verify token scopes and expiry.
     */
    GET_TOKEN_INFO: "DOVETAIL_GET_TOKEN_INFO",
    /**
     * Tool to list all contacts in dovetail. use after authenticating with a valid workspace token when you need the complete contact list.
     */
    LIST_CONTACTS: "DOVETAIL_LIST_CONTACTS",
    /**
     * Tool to list data items in dovetail. use when you need to retrieve, filter, sort, or paginate through your workspace data after authentication. supports dovetail filters, sort syntax, and cursor-based pagination.
     */
    LIST_DATA: "DOVETAIL_LIST_DATA",
    /**
     * Tool to list all highlights in dovetail. use after authenticating with a valid workspace token when you need to retrieve the complete highlight list.
     */
    LIST_HIGHLIGHTS: "DOVETAIL_LIST_HIGHLIGHTS",
    /**
     * Tool to list all notes in dovetail. use after confirming you have a valid workspace token and need to retrieve the full note list.
     */
    LIST_NOTES: "DOVETAIL_LIST_NOTES",
    /**
     * Tool to list all projects in dovetail. use after authenticating with a valid workspace token when you need to retrieve the full project list.
     */
    LIST_PROJECTS: "DOVETAIL_LIST_PROJECTS",
    /**
     * Tool to list all tags in dovetail. use after authenticating with a valid workspace token when you need to retrieve the complete tag list.
     */
    LIST_TAGS: "DOVETAIL_LIST_TAGS",
    /**
     * Tool to list insights for a specific user. use when you need to retrieve all personal insights associated with a user id.
     */
    LIST_USER_INSIGHTS: "DOVETAIL_LIST_USER_INSIGHTS",
    /**
     * Tool to perform a magic search across workspace data. use when you need to retrieve relevant highlights, notes, insights, channels, themes, or tags by query.
     */
    MAGIC_SEARCH: "DOVETAIL_MAGIC_SEARCH",
    /**
     * Tool to update an existing topic. use after confirming the topic id and fields to change. example: "update topic with id 123... to have title 'new'".
     */
    UPDATE_TOPIC: "DOVETAIL_UPDATE_TOPIC",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOVETAIL".
 */
export type DOVETAIL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOVETAIL".
 */
export type DOVETAIL_TRIGGER_EVENTS = {}
