// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SUPPORTBEE's SUPPORTBEE_ARCHIVE_TICKET tool input.
 */
type SUPPORTBEE_ARCHIVE_TICKET_INPUT = {
  /**
   * Id
   * @description Unique identifier of the ticket to archive
   */
  id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_ARCHIVE_TICKET tool output.
 */
type SUPPORTBEE_ARCHIVE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Operation status, e.g., 'archived'
       */
      status: string;
      /**
       * Ticket
       * @description Archived ticket object
       */
      ticket: {
          /**
           * Assignee Id
           * @description User ID of the assignee
           * @default null
           */
          assignee_id: string | null;
          /**
           * Created At
           * @description Creation timestamp
           * @default null
           */
          created_at: string | null;
          /**
           * Custom Fields
           * @description Custom field values for the ticket as key-value pairs
           * @default null
           */
          custom_fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Description
           * @description Ticket description
           * @default null
           */
          description: string | null;
          /**
           * Email
           * @description Requester email
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique ticket ID
           */
          id: string;
          /**
           * Phone
           * @description Requester phone number
           * @default null
           */
          phone: string | null;
          /**
           * Priority
           * @description Ticket priority level
           * @default null
           */
          priority: string | null;
          /**
           * Status
           * @description Ticket status
           * @default null
           */
          status: string | null;
          /**
           * Subject
           * @description Ticket subject
           * @default null
           */
          subject: string | null;
          /**
           * Tags
           * @description List of tags associated with the ticket
           * @default null
           */
          tags: string[] | null;
          /**
           * Updated At
           * @description Last update timestamp
           * @default null
           */
          updated_at: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_ASSIGN_TICKET_TO_TEAM tool input.
 */
type SUPPORTBEE_ASSIGN_TICKET_TO_TEAM_INPUT = {
  /**
   * Team Id
   * @description ID of the team to assign the ticket to (must be ≥ 1)
   */
  team_id?: number;
  /**
   * Ticket Id
   * @description ID of the ticket to assign (must be ≥ 1)
   */
  ticket_id?: number;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_ASSIGN_TICKET_TO_TEAM tool output.
 */
type SUPPORTBEE_ASSIGN_TICKET_TO_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the assignment was created
       */
      created_at: string;
      /**
       * Id
       * @description ID of the team assignment
       */
      id: number;
      /**
       * Team
       * @description The assigned team object
       */
      team: {
          /**
           * Id
           * @description ID of the team
           */
          id: number;
          /**
           * Name
           * @description Name of the team
           * @default null
           */
          name: string | null;
      };
      /**
       * Updated At
       * @description Timestamp when the assignment was last updated
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
 * Type of SUPPORTBEE's SUPPORTBEE_CREATE_RULE tool input.
 */
type SUPPORTBEE_CREATE_RULE_INPUT = {
  /**
   * Actions
   * @description List of one or more actions to execute when conditions match
   */
  actions?: {
      /**
       * Action
       * @description Type of action to perform, e.g., assign, label
       */
      action: string;
      /**
       * Value
       * @description Value for the action, e.g., user ID or label name
       */
      value: string;
  }[];
  /**
   * Active
   * @description Flag indicating if the rule should be active upon creation
   * @default true
   */
  active: boolean | null;
  /**
   * Conditions
   * @description List of one or more conditions that trigger the rule
   */
  conditions?: {
      /**
       * Field
       * @description Ticket field to evaluate, e.g., subject, from
       */
      field: string;
      /**
       * Predicate
       * @description Predicate to apply for matching, e.g., contains, equals
       */
      predicate: string;
      /**
       * Value
       * @description Value to compare against the field
       */
      value: string;
  }[];
  /**
   * Description
   * @description Optional description for the rule
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the rule to be created
   */
  name?: string;
  /**
   * Sort Order
   * @description Optional sort order for the rule, non-negative
   * @default 0
   */
  sort_order: number | null;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_CREATE_RULE tool output.
 */
type SUPPORTBEE_CREATE_RULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Actions
       * @description Actions defined for the rule
       */
      actions: {
          /**
           * Action
           * @description Type of action to perform, e.g., assign, label
           */
          action: string;
          /**
           * Value
           * @description Value for the action, e.g., user ID or label name
           */
          value: string;
      }[];
      /**
       * Active
       * @description Indicates if the rule is active
       */
      active: boolean;
      /**
       * Conditions
       * @description Conditions defined for the rule
       */
      conditions: {
          /**
           * Field
           * @description Ticket field to evaluate, e.g., subject, from
           */
          field: string;
          /**
           * Predicate
           * @description Predicate to apply for matching, e.g., contains, equals
           */
          predicate: string;
          /**
           * Value
           * @description Value to compare against the field
           */
          value: string;
      }[];
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the rule was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the rule
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the created rule
       */
      id: number;
      /**
       * Name
       * @description Name of the rule
       */
      name: string;
      /**
       * Sort Order
       * @description Sort order of the rule
       */
      sort_order: number;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the rule was last updated
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
 * Type of SUPPORTBEE's SUPPORTBEE_CREATE_SNIPPET tool input.
 */
type SUPPORTBEE_CREATE_SNIPPET_INPUT = {
  /**
   * Body
   * @description The content/body of the snippet.
   */
  body?: string;
  /**
   * Position
   * @description The position order for the snippet (non-negative integer).
   * @default null
   */
  position: number | null;
  /**
   * Team Id
   * @description The Team ID to associate the snippet with.
   * @default null
   */
  team_id: number | null;
  /**
   * Title
   * @description The title for the snippet.
   */
  title?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_CREATE_SNIPPET tool output.
 */
type SUPPORTBEE_CREATE_SNIPPET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description The content/body of the snippet.
       */
      body: string;
      /**
       * Id
       * @description The unique ID for the snippet.
       */
      id: number;
      /**
       * Position
       * @description The order position of the snippet.
       */
      position: number;
      /**
       * Team Id
       * @description The team ID associated with the snippet.
       * @default null
       */
      team_id: number | null;
      /**
       * Title
       * @description The title of the newly created snippet.
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
 * Type of SUPPORTBEE's SUPPORTBEE_CREATE_TICKET tool input.
 */
type SUPPORTBEE_CREATE_TICKET_INPUT = {
  /**
   * Agent Id
   * @description ID of the agent to assign.
   * @default null
   */
  agent_id: number | null;
  /**
   * Cc
   * @description List of CC email addresses.
   * @default null
   */
  cc: unknown[] | null;
  /**
   * Content
   * @description Body content of the ticket.
   */
  content?: string;
  /**
   * Labels
   * @description Additional labels for the ticket.
   * @default null
   */
  labels: string[] | null;
  /**
   * Requester
   * @description Requester details for the ticket.
   */
  requester?: {
      /**
       * Email
       * Format: email
       * @description Email address of the requester.
       */
      email: unknown;
      /**
       * Name
       * @description Name of the requester.
       * @default null
       */
      name: string | null;
  };
  /**
   * Spam
   * @description Flag to mark ticket as spam (true/false). Example: false
   * @default false
   */
  spam: boolean | null;
  /**
   * Subject
   * @description Subject of the ticket.
   */
  subject?: string;
  /**
   * Tags
   * @description List of tags to assign to the ticket.
   * @default null
   */
  tags: string[] | null;
  /**
   * Team Id
   * @description ID of the team to assign.
   * @default null
   */
  team_id: number | null;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_CREATE_TICKET tool output.
 */
type SUPPORTBEE_CREATE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * CreateTicketAgent
       * @description Assigned agent information.
       * @default null
       */
      agent: {
          /**
           * Email
           * @description Email of the agent.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description ID of the assigned agent.
           */
          id: number;
          /**
           * Name
           * @description Name of the agent.
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Attachments
       * @description Attachments added to the ticket.
       * @default null
       */
      attachments: {
          /**
           * Content Type
           * @description MIME type of the attachment.
           */
          content_type: string;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          created_at: string;
          /**
           * Filename
           * @description Name of the attached file.
           */
          filename: string;
          /**
           * Id
           * @description Unique ID of the attachment.
           */
          id: number;
          /**
           * Size
           * @description Size of the attachment in bytes.
           */
          size: number;
          /**
           * Url
           * @description URL to access the attachment.
           */
          url: string;
      }[] | null;
      /**
       * Cc
       * @description CC email addresses.
       * @default null
       */
      cc: string[] | null;
      /**
       * Content
       * @description Body content of the ticket.
       */
      content: string;
      /**
       * Created At
       * @description Timestamp when the ticket was created (ISO 8601). Example: 2021-01-01T12:00:00Z
       */
      created_at: string;
      /**
       * Id
       * @description Unique ID of the ticket.
       */
      id: number;
      /**
       * Labels
       * @description Labels associated with the ticket.
       * @default null
       */
      labels: string[] | null;
      /**
       * Requester
       * @description Requester of the ticket.
       */
      requester: {
          /**
           * Email
           * Format: email
           * @description Email address of the requester.
           */
          email: unknown;
          /**
           * Name
           * @description Name of the requester.
           * @default null
           */
          name: string | null;
      };
      /**
       * Spam
       * @description Indicates if the ticket is marked as spam.
       */
      spam: boolean;
      /**
       * Subject
       * @description Subject of the ticket.
       */
      subject: string;
      /**
       * Tags
       * @description Tags associated with the ticket.
       * @default null
       */
      tags: string[] | null;
      /**
       * CreateTicketTeam
       * @description Assigned team information.
       * @default null
       */
      team: {
          /**
           * Id
           * @description ID of the assigned team.
           */
          id: number;
          /**
           * Name
           * @description Name of the team.
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Updated At
       * @description Timestamp when the ticket was last updated (ISO 8601). Example: 2021-01-02T12:00:00Z
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
 * Type of SUPPORTBEE's SUPPORTBEE_CREATE_TICKET_REPLY tool input.
 */
type SUPPORTBEE_CREATE_TICKET_REPLY_INPUT = {
  /**
   * Content
   * @description Content of the reply in HTML format
   */
  content?: string;
  /**
   * Ticket Id
   * @description ID of the ticket to reply to
   */
  ticket_id?: string;
  /**
   * User Id
   * @description ID of the user replying; if omitted, the current user is used
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_CREATE_TICKET_REPLY tool output.
 */
type SUPPORTBEE_CREATE_TICKET_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachments
       * @description List of attachments included in the reply
       */
      attachments: {
          /**
           * Content Type
           * @description MIME type of the attachment
           */
          content_type: string;
          /**
           * Created At
           * @description ISO8601 creation date/time of the attachment
           */
          created_at: string;
          /**
           * Filename
           * @description Name of the attachment
           */
          filename: string;
          /**
           * Id
           * @description ID of the attachment
           */
          id: number;
          /**
           * Size
           * @description Size of the attachment in bytes
           */
          size: number;
          /**
           * Url
           * @description URL to access the attachment
           */
          url: string;
      }[];
      /**
       * Content
       * @description Content of the reply
       */
      content: string;
      /**
       * Created At
       * @description Timestamp when the reply was created
       */
      created_at: string;
      /**
       * Id
       * @description ID of the reply
       */
      id: number;
      /**
       * Updated At
       * @description Timestamp when the reply was last updated
       */
      updated_at: string;
      /**
       * User
       * @description The user who posted the reply
       */
      user: {
          /**
           * Email
           * @description Email of the user
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description ID of the user who posted the reply
           */
          id: number;
          /**
           * Name
           * @description Name of the user
           * @default null
           */
          name: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_CREATE_USER_OR_CUSTOMER_GROUP tool input.
 */
type SUPPORTBEE_CREATE_USER_OR_CUSTOMER_GROUP_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email of the new user (agent or admin). Must be a valid email address.
   */
  email?: string;
  /**
   * Name
   * @description Full name of the user.
   * @default null
   */
  name: string | null;
  /**
   * Role
   * @description Role to assign to the user. Must be 'agent' or 'admin'.
   * @default null
   * @enum {string|null}
   */
  role: "agent" | "admin" | null;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_CREATE_USER_OR_CUSTOMER_GROUP tool output.
 */
type SUPPORTBEE_CREATE_USER_OR_CUSTOMER_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the user was created in ISO 8601 format
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description Email of the created user
       */
      email: string;
      /**
       * Id
       * @description Unique ID of the created user
       */
      id: number;
      /**
       * Name
       * @description Name of the created user
       * @default null
       */
      name: string | null;
      /**
       * Role
       * @description Assigned role of the created user
       * @enum {string}
       */
      role: "agent" | "admin";
      /**
       * Updated At
       * @description Timestamp when the user was last updated in ISO 8601 format
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
 * Type of SUPPORTBEE's SUPPORTBEE_DELETE_SNIPPET tool input.
 */
type SUPPORTBEE_DELETE_SNIPPET_INPUT = {
  /**
   * Id
   * @description Unique identifier of the snippet to delete (must be ≥ 1)
   */
  id?: number;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_DELETE_SNIPPET tool output.
 */
type SUPPORTBEE_DELETE_SNIPPET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the delete operation
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
 * Type of SUPPORTBEE's SUPPORTBEE_DELETE_TICKET tool input.
 */
type SUPPORTBEE_DELETE_TICKET_INPUT = {
  /**
   * Id
   * @description Unique identifier of the trashed ticket to delete
   */
  id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_DELETE_TICKET tool output.
 */
type SUPPORTBEE_DELETE_TICKET_OUTPUT = {
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
 * Type of SUPPORTBEE's SUPPORTBEE_FETCH_EMAILS tool input.
 */
type SUPPORTBEE_FETCH_EMAILS_INPUT = {
  /**
   * Label
   * @description Filter emails by label.
   * @default null
   */
  label: string | null;
  /**
   * Max Id
   * @description Return emails with ID less than this value.
   * @default null
   */
  max_id: number | null;
  /**
   * Page
   * @description Page number to fetch.
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of emails per page (max 100).
   * @default 15
   */
  per_page: number;
  /**
   * Since Id
   * @description Return emails with ID greater than this value.
   * @default null
   */
  since_id: number | null;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_FETCH_EMAILS tool output.
 */
type SUPPORTBEE_FETCH_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Emails
       * @description List of fetched emails.
       */
      emails: {
          /**
           * Attachments
           * @description List of attachments.
           */
          attachments: {
              /**
               * Content Type
               * @description MIME type of the attachment.
               */
              content_type: string;
              /**
               * Filename
               * @description Name of the attached file.
               */
              filename: string;
              /**
               * Id
               * @description ID of the attachment.
               */
              id: number;
              /**
               * Size
               * @description Size of the attachment in bytes.
               */
              size: number;
              /**
               * Url
               * @description URL to download the attachment.
               */
              url: string;
          }[];
          /**
           * Body
           * @description Body of the email (HTML or text).
           */
          body: string;
          /**
           * Cc
           * @description List of CC email addresses.
           */
          cc: string[];
          /**
           * Created At
           * @description Timestamp when the email was received.
           */
          created_at: string;
          /**
           * Id
           * @description Email ID.
           */
          id: number;
          /**
           * Sender
           * @description Sender details.
           */
          sender: {
              /**
               * Email
               * @description Email address of the sender.
               */
              email: string;
              /**
               * Name
               * @description Name of the sender.
               * @default null
               */
              name: string | null;
          };
          /**
           * Subject
           * @description Subject of the email.
           */
          subject: string;
          /**
           * To
           * @description List of recipient email addresses.
           */
          to: string[];
      }[];
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Per Page
           * @description Number of emails per page.
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of emails.
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages.
           */
          total_pages: number;
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
 * Type of SUPPORTBEE's SUPPORTBEE_FETCH_LABELS tool input.
 */
type SUPPORTBEE_FETCH_LABELS_INPUT = object;

/**
 * Type of SUPPORTBEE's SUPPORTBEE_FETCH_LABELS tool output.
 */
type SUPPORTBEE_FETCH_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Labels
       * @description List of custom labels
       */
      labels: {
          /**
           * Created At
           * @description Label creation timestamp (ISO 8601 format)
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the label
           */
          id: number;
          /**
           * Name
           * @description Name of the label
           */
          name: string;
          /**
           * Updated At
           * @description Label updated timestamp (ISO 8601 format)
           */
          updated_at: string;
          /**
           * Url
           * @description API URL for the label
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
 * Type of SUPPORTBEE's SUPPORTBEE_FETCH_SNIPPETS tool input.
 */
type SUPPORTBEE_FETCH_SNIPPETS_INPUT = {
  /**
   * Page
   * @description Page of results to fetch (default is 1).
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of snippets per page (default is 15, max is 100).
   * @default 15
   */
  per_page: number;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_FETCH_SNIPPETS tool output.
 */
type SUPPORTBEE_FETCH_SNIPPETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snippets
       * @description Array of snippet objects.
       */
      snippets: {
          /**
           * Content
           * @description The body/content of the snippet.
           */
          content: string;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID of the snippet.
           */
          id: number;
          /**
           * Subject
           * @description The title/subject of the snippet.
           */
          subject: string;
          /**
           * Team Id
           * @description ID of the team to which the snippet belongs.
           */
          team_id: number;
          /**
           * Updated At
           * @description Last update timestamp in ISO 8601 format.
           */
          updated_at: string;
          /**
           * User Id
           * @description ID of the user who created the snippet.
           */
          user_id: number;
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
 * Type of SUPPORTBEE's SUPPORTBEE_FETCH_TEAMS tool input.
 */
type SUPPORTBEE_FETCH_TEAMS_INPUT = object;

/**
 * Type of SUPPORTBEE's SUPPORTBEE_FETCH_TEAMS tool output.
 */
type SUPPORTBEE_FETCH_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Teams
       * @description List of teams in the company.
       */
      teams: {
          /**
           * Created At
           * @description Team creation timestamp (ISO 8601 format)
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the team
           */
          id: number;
          /**
           * Name
           * @description Name of the team
           */
          name: string;
          /**
           * Updated At
           * @description Team last update timestamp (ISO 8601 format)
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
 * Type of SUPPORTBEE's SUPPORTBEE_FETCH_TEAM_BY_ID tool input.
 */
type SUPPORTBEE_FETCH_TEAM_BY_ID_INPUT = {
  /**
   * Id
   * @description Unique identifier of the team to fetch
   */
  id?: number;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_FETCH_TEAM_BY_ID tool output.
 */
type SUPPORTBEE_FETCH_TEAM_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Team
       * @description The team object retrieved
       */
      team: {
          /**
           * Created At
           * @description Timestamp when the team was created (ISO 8601)
           * @default null
           */
          created_at: string | null;
          /**
           * Description
           * @description Description of the team
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique ID of the team
           */
          id: number;
          /**
           * Name
           * @description Name of the team
           * @default null
           */
          name: string | null;
          /**
           * Updated At
           * @description Timestamp when the team was last updated (ISO 8601)
           * @default null
           */
          updated_at: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_GET_AVG_FIRST_RESPONSE_TIME_REPORT tool input.
 */
type SUPPORTBEE_GET_AVG_FIRST_RESPONSE_TIME_REPORT_INPUT = {
  /**
   * Since
   * @description ISO 8601 date string representing start of reporting period
   * @default null
   */
  since: string | null;
  /**
   * Until
   * @description ISO 8601 date string representing end of reporting period
   * @default null
   */
  until: string | null;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_GET_AVG_FIRST_RESPONSE_TIME_REPORT tool output.
 */
type SUPPORTBEE_GET_AVG_FIRST_RESPONSE_TIME_REPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avg First Response Time
       * @description Overall average first response time in HH:MM:SS format
       */
      avg_first_response_time: string;
      /**
       * Details
       * @description List of average first response time details by agent or team
       */
      details: {
          /**
           * Agent Id
           * @description ID of the agent
           */
          agent_id: number;
          /**
           * Avg Time
           * @description Average first response time in HH:MM:SS format
           */
          avg_time: string;
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
 * Type of SUPPORTBEE's SUPPORTBEE_GET_REPLIES_COUNT_REPORT tool input.
 */
type SUPPORTBEE_GET_REPLIES_COUNT_REPORT_INPUT = {
  /**
   * Agent Id
   * @description Filter results by agent ID (optional)
   * @default null
   */
  agent_id: number | null;
  /**
   * From Date
   * @description Start date in YYYY-MM-DD format
   */
  from_date?: string;
  /**
   * To Date
   * @description End date in YYYY-MM-DD format
   */
  to_date?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_GET_REPLIES_COUNT_REPORT tool output.
 */
type SUPPORTBEE_GET_REPLIES_COUNT_REPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Report
       * @description List of replies count datapoints per agent
       */
      report: {
          /**
           * Agent Id
           * @description Unique id of the agent
           */
          agent_id: number;
          /**
           * Agent Name
           * @description Name of the agent
           */
          agent_name: string;
          /**
           * Replies Count
           * @description Number of replies by the agent during the period
           */
          replies_count: number;
      }[];
      /**
       * Total
       * @description Total number of replies by all agents during the period
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
 * Type of SUPPORTBEE's SUPPORTBEE_GET_TICKETS_COUNT_REPORT tool input.
 */
type SUPPORTBEE_GET_TICKETS_COUNT_REPORT_INPUT = {
  /**
   * End Date
   * @description End date of the report (YYYY-MM-DD)
   */
  end_date?: string;
  /**
   * Start Date
   * @description Start date of the report (YYYY-MM-DD)
   */
  start_date?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_GET_TICKETS_COUNT_REPORT tool output.
 */
type SUPPORTBEE_GET_TICKETS_COUNT_REPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tickets Count
       * @description The number of tickets in the specified date range
       */
      tickets_count: number;
      /**
       * Time Range
       * @description The date range for the report
       */
      time_range: {
          /**
           * End Date
           * @description End date of the report (YYYY-MM-DD)
           */
          end_date: string;
          /**
           * Start Date
           * @description Start date of the report (YYYY-MM-DD)
           */
          start_date: string;
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
 * Type of SUPPORTBEE's SUPPORTBEE_LIST_TICKETS tool input.
 */
type SUPPORTBEE_LIST_TICKETS_INPUT = {
  /**
   * Assigned To
   * @description Filter by assigned user's ID or email.
   * @default null
   */
  assigned_to: string | null;
  /**
   * Labels
   * @description Filter by a single label.
   * @default null
   */
  labels: string | null;
  /**
   * Page
   * @description Page number for pagination (default is 1).
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of tickets per page (default is 30, max is 100).
   * @default 30
   */
  per_page: number;
  /**
   * Requester Email
   * Format: email
   * @description Filter by requester's email address.
   * @default null
   */
  requester_email: unknown;
  /**
   * Since Id
   * @description Return tickets with ID greater than this value.
   * @default null
   */
  since_id: number | null;
  /**
   * Status
   * @description Filter by ticket status.
   * @default null
   * @enum {string|null}
   */
  status: "inbox" | "spam" | "trashed" | "unassigned" | "all" | null;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_LIST_TICKETS tool output.
 */
type SUPPORTBEE_LIST_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Count
           * @description Number of tickets on this page.
           */
          count: number;
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Per Page
           * @description Number of tickets per page.
           */
          per_page: number;
          /**
           * Total
           * @description Total number of tickets matching filter.
           */
          total: number;
          /**
           * Total Pages
           * @description Total number of pages.
           */
          total_pages: number;
      };
      /**
       * Tickets
       * @description Array of ticket objects.
       */
      tickets: {
          /**
           * Agent
           * @description Model representing assigned agent information.
           * @default null
           */
          agent: {
              /**
               * Email
               * @description Email of the agent.
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description ID of the agent.
               */
              id: number;
              /**
               * Name
               * @description Name of the agent.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Cc
           * @description List of CC email addresses.
           * @default null
           */
          cc: string[] | null;
          /**
           * Content
           * @description Body content of the ticket.
           * @default null
           */
          content: string | null;
          /**
           * Created At
           * @description Creation timestamp (ISO 8601).
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID of the ticket.
           */
          id: number;
          /**
           * Labels
           * @description Labels associated with the ticket.
           * @default null
           */
          labels: string[] | null;
          /**
           * Requester
           * @description Requester information.
           */
          requester: {
              /**
               * Email
               * @description Email address of the requester.
               */
              email: string;
              /**
               * Id
               * @description ID of the requester.
               */
              id: number;
              /**
               * Name
               * @description Name of the requester.
               * @default null
               */
              name: string | null;
          };
          /**
           * Spam
           * @description Indicates if the ticket is marked as spam.
           */
          spam: boolean;
          /**
           * State
           * @description State of the ticket.
           * @default null
           */
          state: string | null;
          /**
           * Subject
           * @description Subject of the ticket.
           * @default null
           */
          subject: string | null;
          /**
           * Tags
           * @description Tags associated with the ticket.
           * @default null
           */
          tags: string[] | null;
          /**
           * Team
           * @description Model representing assigned team information.
           * @default null
           */
          team: {
              /**
               * Id
               * @description ID of the team.
               */
              id: number;
              /**
               * Name
               * @description Name of the team.
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Updated At
           * @description Last update timestamp (ISO 8601).
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
 * Type of SUPPORTBEE's SUPPORTBEE_LIST_TICKET_COMMENTS tool input.
 */
type SUPPORTBEE_LIST_TICKET_COMMENTS_INPUT = {
  /**
   * Ticket Id
   * @description ID of the ticket to list comments for
   */
  ticket_id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_LIST_TICKET_COMMENTS tool output.
 */
type SUPPORTBEE_LIST_TICKET_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description List of comments for the specified ticket
       */
      comments: {
          /**
           * Attachments
           * @description List of attachments associated with the comment
           * @default null
           */
          attachments: {
              /**
               * Content Type
               * @description MIME type of the attachment
               */
              content_type: string;
              /**
               * Created At
               * @description Timestamp when attachment was created (ISO 8601 format)
               */
              created_at: string;
              /**
               * Filename
               * @description Name of the attachment file
               */
              filename: string;
              /**
               * Id
               * @description ID of the attachment
               */
              id: number;
              /**
               * Size
               * @description Size of the attachment in bytes
               */
              size: number;
              /**
               * Url
               * @description URL to access the attachment
               */
              url: string;
          }[] | null;
          /**
           * Body
           * @description Content/body of the comment
           */
          body: string;
          /**
           * Created At
           * @description Timestamp when the comment was created (ISO 8601 format)
           */
          created_at: string;
          /**
           * From Support Address Id
           * @description ID of the support address used to send the comment
           * @default null
           */
          from_support_address_id: number | null;
          /**
           * Id
           * @description ID of the comment
           */
          id: number;
          /**
           * Ticket Id
           * @description ID of the ticket
           */
          ticket_id: number;
          /**
           * Updated At
           * @description Timestamp when the comment was last updated (ISO 8601 format)
           */
          updated_at: string;
          /**
           * TicketCommentUser
           * @description Information about the user who posted the comment.
           * @default null
           */
          user: {
              /**
               * Email
               * @description Email of the user
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description ID of the user who posted the comment
               */
              id: number;
              /**
               * Name
               * @description Name of the user
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * User Id
           * @description ID of the user who added the comment
           * @default null
           */
          user_id: number | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_LIST_TICKET_REPLIES tool input.
 */
type SUPPORTBEE_LIST_TICKET_REPLIES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (must be at least 1)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of replies per page (must be at least 1)
   * @default null
   */
  per_page: number | null;
  /**
   * Ticket Id
   * @description ID of the ticket to fetch replies for
   */
  ticket_id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_LIST_TICKET_REPLIES tool output.
 */
type SUPPORTBEE_LIST_TICKET_REPLIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Replies
       * @description List of replies for the ticket
       */
      replies: {
          /**
           * Attachments
           * @description List of attachments associated with this reply
           */
          attachments?: {
              /**
               * Content Type
               * @description MIME type of the attachment
               * @default null
               */
              content_type: string | null;
              /**
               * Created At
               * @description Timestamp when the attachment was created
               * @default null
               */
              created_at: string | null;
              /**
               * Filename
               * @description Name of the attached file
               */
              filename: string;
              /**
               * Id
               * @description ID of the attachment
               */
              id: number;
              /**
               * Size
               * @description Size of the attachment in bytes
               * @default null
               */
              size: number | null;
              /**
               * Url
               * @description URL to download the attachment
               */
              url: string;
          }[];
          /**
           * Content
           * @description Content/body of the reply
           */
          content: string;
          /**
           * Created At
           * @description Timestamp when the reply was created
           */
          created_at: string;
          /**
           * Id
           * @description ID of the reply
           */
          id: number;
          /**
           * Updated At
           * @description Timestamp when the reply was last updated
           * @default null
           */
          updated_at: string | null;
          /**
           * Agent
           * @description Details of the user who posted the reply
           * @default null
           */
          user: {
              /**
               * Email
               * @description Email of the agent
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description ID of the agent who posted the reply
               */
              id: number;
              /**
               * Name
               * @description Name of the agent
               * @default null
               */
              name: string | null;
          } | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_MARK_TICKET_AS_ANSWERED tool input.
 */
type SUPPORTBEE_MARK_TICKET_AS_ANSWERED_INPUT = {
  /**
   * Id
   * @description Unique identifier of the ticket to mark as answered
   */
  id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_MARK_TICKET_AS_ANSWERED tool output.
 */
type SUPPORTBEE_MARK_TICKET_AS_ANSWERED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee Id
       * @description User ID of the assignee
       * @default null
       */
      assignee_id: string | null;
      /**
       * Content
       * @description Ticket content
       * @default null
       */
      content: string | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       * @default null
       */
      created_at: string | null;
      /**
       * Custom Fields
       * @description Custom field values for the ticket as key-value pairs
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      } | null;
      /**
       * Email
       * @description Requester email
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique ticket ID
       */
      id: string;
      /**
       * Phone
       * @description Requester phone number
       * @default null
       */
      phone: string | null;
      /**
       * Priority
       * @description Ticket priority level
       * @default null
       */
      priority: string | null;
      /**
       * Status
       * @description Ticket status
       * @default null
       */
      status: string | null;
      /**
       * Subject
       * @description Ticket subject
       * @default null
       */
      subject: string | null;
      /**
       * Tags
       * @description List of tags associated with the ticket
       * @default null
       */
      tags: string[] | null;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       * @default null
       */
      updated_at: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_MARK_TICKET_AS_SPAM tool input.
 */
type SUPPORTBEE_MARK_TICKET_AS_SPAM_INPUT = {
  /**
   * Id
   * @description Unique identifier of the ticket to mark as spam
   */
  id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_MARK_TICKET_AS_SPAM tool output.
 */
type SUPPORTBEE_MARK_TICKET_AS_SPAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee Id
       * @description User ID of the assignee
       * @default null
       */
      assignee_id: string | null;
      /**
       * Content
       * @description Ticket content
       * @default null
       */
      content: string | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       * @default null
       */
      created_at: string | null;
      /**
       * Custom Fields
       * @description Custom field values for the ticket as key-value pairs
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      } | null;
      /**
       * Email
       * @description Requester email
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique ticket ID
       */
      id: string;
      /**
       * Phone
       * @description Requester phone number
       * @default null
       */
      phone: string | null;
      /**
       * Priority
       * @description Ticket priority level
       * @default null
       */
      priority: string | null;
      /**
       * Spam
       * @description Flag indicating if the ticket is marked as spam
       * @default null
       */
      spam: boolean | null;
      /**
       * Status
       * @description Ticket status
       * @default null
       */
      status: string | null;
      /**
       * Subject
       * @description Ticket subject
       * @default null
       */
      subject: string | null;
      /**
       * Tags
       * @description List of tags associated with the ticket
       * @default null
       */
      tags: string[] | null;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       * @default null
       */
      updated_at: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_MARK_TICKET_AS_UNANSWERED tool input.
 */
type SUPPORTBEE_MARK_TICKET_AS_UNANSWERED_INPUT = {
  /**
   * Id
   * @description Unique identifier of the ticket to mark as unanswered
   */
  id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_MARK_TICKET_AS_UNANSWERED tool output.
 */
type SUPPORTBEE_MARK_TICKET_AS_UNANSWERED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee Id
       * @description User ID of the assignee
       * @default null
       */
      assignee_id: string | null;
      /**
       * Content
       * @description Ticket content
       * @default null
       */
      content: string | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       * @default null
       */
      created_at: string | null;
      /**
       * Custom Fields
       * @description Custom field values for the ticket as key-value pairs
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      } | null;
      /**
       * Email
       * @description Requester email
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique ticket ID
       */
      id: string;
      /**
       * Phone
       * @description Requester phone number
       * @default null
       */
      phone: string | null;
      /**
       * Priority
       * @description Ticket priority level
       * @default null
       */
      priority: string | null;
      /**
       * Status
       * @description Ticket status
       * @default null
       */
      status: string | null;
      /**
       * Subject
       * @description Ticket subject
       * @default null
       */
      subject: string | null;
      /**
       * Tags
       * @description List of tags associated with the ticket
       * @default null
       */
      tags: string[] | null;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       * @default null
       */
      updated_at: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_SEARCH_TICKETS tool input.
 */
type SUPPORTBEE_SEARCH_TICKETS_INPUT = {
  /**
   * Archive
   * @description Whether to include archived tickets in search
   * @default false
   */
  archive: boolean;
  /**
   * Fields
   * @description Comma-separated list of ticket fields to include
   * @default null
   */
  fields: string | null;
  /**
   * Page
   * @description Page number of results
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of tickets per page (1-100)
   * @default 15
   */
  per_page: number;
  /**
   * Q
   * @description Search query string
   * @default null
   */
  q: string | null;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_SEARCH_TICKETS tool output.
 */
type SUPPORTBEE_SEARCH_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Per Page
       * @description Number of tickets per page in results
       */
      per_page: number;
      /**
       * Tickets
       * @description List of tickets matching search
       */
      tickets: {
          /**
           * Content
           * @description Content/body of the ticket
           * @default null
           */
          content: string | null;
          /**
           * Created At
           * @description Creation timestamp (ISO 8601)
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description Unique ID of the ticket
           */
          id: number;
          /**
           * Labels
           * @description Labels associated with the ticket
           * @default null
           */
          labels: string[] | null;
          /**
           * RequesterModel
           * @description Model representing ticket requester.
           * @default null
           */
          requester: {
              /**
               * Email
               * @description Email of the requester
               */
              email: string;
              /**
               * Name
               * @description Name of the requester
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Subject
           * @description Subject of the ticket
           * @default null
           */
          subject: string | null;
          /**
           * Updated At
           * @description Last update timestamp (ISO 8601)
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Total Entries
       * @description Total number of tickets found
       */
      total_entries: number;
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
 * Type of SUPPORTBEE's SUPPORTBEE_SHOW_TICKET_REPLY tool input.
 */
type SUPPORTBEE_SHOW_TICKET_REPLY_INPUT = {
  /**
   * Reply Id
   * @description ID of the reply to retrieve
   */
  reply_id?: number;
  /**
   * Ticket Id
   * @description ID of the ticket to fetch the reply for
   */
  ticket_id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_SHOW_TICKET_REPLY tool output.
 */
type SUPPORTBEE_SHOW_TICKET_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reply
       * @description The reply object retrieved
       */
      reply: {
          /**
           * Attachments
           * @description List of attachments associated with this reply
           */
          attachments?: {
              /**
               * Content Type
               * @description MIME type of the attachment
               * @default null
               */
              content_type: string | null;
              /**
               * Created At
               * @description Timestamp when the attachment was created
               * @default null
               */
              created_at: string | null;
              /**
               * Filename
               * @description Name of the attached file
               */
              filename: string;
              /**
               * Id
               * @description ID of the attachment
               */
              id: number;
              /**
               * Size
               * @description Size of the attachment in bytes
               * @default null
               */
              size: number | null;
              /**
               * Url
               * @description URL to download the attachment
               */
              url: string;
          }[];
          /**
           * Content
           * @description Content/body of the reply
           */
          content: string;
          /**
           * Created At
           * @description Timestamp when the reply was created
           */
          created_at: string;
          /**
           * Id
           * @description ID of the reply
           */
          id: number;
          /**
           * Updated At
           * @description Timestamp when the reply was last updated
           * @default null
           */
          updated_at: string | null;
          /**
           * Agent
           * @description Information about the agent who posted the reply.
           * @default null
           */
          user: {
              /**
               * Email
               * @description Email of the agent
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description ID of the agent who posted the reply
               */
              id: number;
              /**
               * Name
               * @description Name of the agent
               * @default null
               */
              name: string | null;
          } | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_SHOW_USER_OR_CUSTOMER_GROUP tool input.
 */
type SUPPORTBEE_SHOW_USER_OR_CUSTOMER_GROUP_INPUT = {
  /**
   * Id
   * @description Unique identifier of the user or customer group to retrieve
   */
  id?: number;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_SHOW_USER_OR_CUSTOMER_GROUP tool output.
 */
type SUPPORTBEE_SHOW_USER_OR_CUSTOMER_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User
       * @description The user or customer group object retrieved
       */
      user: {
          /**
           * Avatar Url
           * @description URL to the user's avatar image
           * @default null
           */
          avatar_url: string | null;
          /**
           * Created At
           * @description Timestamp when the user was created (ISO 8601)
           * @default null
           */
          created_at: string | null;
          /**
           * Email
           * @description Email address of the user
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique ID of the user or customer group
           */
          id: number;
          /**
           * Name
           * @description Name of the user or customer group
           * @default null
           */
          name: string | null;
          /**
           * Updated At
           * @description Timestamp when the user was last updated (ISO 8601)
           * @default null
           */
          updated_at: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_TRASH_TICKET tool input.
 */
type SUPPORTBEE_TRASH_TICKET_INPUT = {
  /**
   * Id
   * @description Unique identifier of the ticket to trash
   */
  id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_TRASH_TICKET tool output.
 */
type SUPPORTBEE_TRASH_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Operation status, e.g., 'trashed'
       */
      status: string;
      /**
       * Ticket
       * @description Trashed ticket object
       */
      ticket: {
          /**
           * Assignee Id
           * @description User ID of the assignee
           * @default null
           */
          assignee_id: string | null;
          /**
           * Content
           * @description Ticket content
           * @default null
           */
          content: string | null;
          /**
           * Created At
           * @description Creation timestamp (ISO 8601)
           * @default null
           */
          created_at: string | null;
          /**
           * Custom Fields
           * @description Custom field values for the ticket as key-value pairs
           * @default null
           */
          custom_fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Email
           * @description Requester email
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique ticket ID
           */
          id: string;
          /**
           * Phone
           * @description Requester phone number
           * @default null
           */
          phone: string | null;
          /**
           * Priority
           * @description Ticket priority level
           * @default null
           */
          priority: string | null;
          /**
           * Status
           * @description Ticket status
           * @default null
           */
          status: string | null;
          /**
           * Subject
           * @description Ticket subject
           * @default null
           */
          subject: string | null;
          /**
           * Tags
           * @description List of tags associated with the ticket
           * @default null
           */
          tags: string[] | null;
          /**
           * Updated At
           * @description Last update timestamp (ISO 8601)
           * @default null
           */
          updated_at: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_UNARCHIVE_TICKET tool input.
 */
type SUPPORTBEE_UNARCHIVE_TICKET_INPUT = {
  /**
   * Id
   * @description Unique identifier of the ticket to unarchive
   */
  id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_UNARCHIVE_TICKET tool output.
 */
type SUPPORTBEE_UNARCHIVE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Operation status, e.g., 'unarchived'
       */
      status: string;
      /**
       * Ticket
       * @description Unarchived ticket object
       */
      ticket: {
          /**
           * Assignee Id
           * @description User ID of the assignee
           * @default null
           */
          assignee_id: string | null;
          /**
           * Created At
           * @description Creation timestamp
           * @default null
           */
          created_at: string | null;
          /**
           * Custom Fields
           * @description Custom field values for the ticket as key-value pairs
           * @default null
           */
          custom_fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Description
           * @description Ticket description
           * @default null
           */
          description: string | null;
          /**
           * Email
           * @description Requester email
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique ticket ID
           */
          id: string;
          /**
           * Phone
           * @description Requester phone number
           * @default null
           */
          phone: string | null;
          /**
           * Priority
           * @description Ticket priority level
           * @default null
           */
          priority: string | null;
          /**
           * Status
           * @description Ticket status
           * @default null
           */
          status: string | null;
          /**
           * Subject
           * @description Ticket subject
           * @default null
           */
          subject: string | null;
          /**
           * Tags
           * @description List of tags associated with the ticket
           * @default null
           */
          tags: string[] | null;
          /**
           * Updated At
           * @description Last update timestamp
           * @default null
           */
          updated_at: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_UNASSIGN_TICKET_FROM_TEAM tool input.
 */
type SUPPORTBEE_UNASSIGN_TICKET_FROM_TEAM_INPUT = {
  /**
   * Ticket Id
   * @description ID of the ticket to remove from its assigned team
   */
  ticket_id?: number;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_UNASSIGN_TICKET_FROM_TEAM tool output.
 */
type SUPPORTBEE_UNASSIGN_TICKET_FROM_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agent
       * @description Model representing assigned agent information.
       * @default null
       */
      agent: {
          /**
           * Email
           * @description Email of the assigned agent
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description ID of the assigned agent
           */
          id: number;
          /**
           * Name
           * @description Name of the assigned agent
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Cc
       * @description List of CC email addresses
       * @default null
       */
      cc: string[] | null;
      /**
       * Content
       * @description Body content of the ticket
       * @default null
       */
      content: string | null;
      /**
       * Created At
       * @description Ticket creation timestamp (ISO 8601 format)
       */
      created_at: string;
      /**
       * Id
       * @description Unique ID of the ticket
       */
      id: number;
      /**
       * Labels
       * @description List of labels associated with the ticket
       * @default null
       */
      labels: string[] | null;
      /**
       * Requester
       * @description Requester information
       */
      requester: {
          /**
           * Email
           * @description Email address of the ticket requester
           */
          email: string;
          /**
           * Id
           * @description ID of the ticket requester
           */
          id: number;
          /**
           * Name
           * @description Name of the ticket requester
           * @default null
           */
          name: string | null;
      };
      /**
       * Spam
       * @description Indicates if the ticket is marked as spam
       */
      spam: boolean;
      /**
       * State
       * @description Current state of the ticket
       * @default null
       */
      state: string | null;
      /**
       * Subject
       * @description Subject of the ticket
       * @default null
       */
      subject: string | null;
      /**
       * Tags
       * @description List of tags associated with the ticket
       * @default null
       */
      tags: string[] | null;
      /**
       * Team
       * @description Model representing assigned team information.
       * @default null
       */
      team: {
          /**
           * Id
           * @description ID of the assigned team
           */
          id: number;
          /**
           * Name
           * @description Name of the assigned team
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Updated At
       * @description Ticket last update timestamp (ISO 8601 format)
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
 * Type of SUPPORTBEE's SUPPORTBEE_UNASSIGN_TICKET_FROM_USER tool input.
 */
type SUPPORTBEE_UNASSIGN_TICKET_FROM_USER_INPUT = {
  /**
   * Ticket Id
   * @description Unique identifier of the ticket to unassign the user from
   */
  ticket_id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_UNASSIGN_TICKET_FROM_USER tool output.
 */
type SUPPORTBEE_UNASSIGN_TICKET_FROM_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * AssignedUser
       * @description Details of the assigned user.
       * @default null
       */
      assigned_user: {
          /**
           * Email
           * @description Email of the assigned user
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description ID of the assigned user
           */
          id: number;
          /**
           * Name
           * @description Name of the assigned user
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Content
       * @description Ticket content
       * @default null
       */
      content: string | null;
      /**
       * Created At
       * @description Ticket creation time
       * @default null
       */
      created_at: string | null;
      /**
       * From Address
       * @description Origin email address
       * @default null
       */
      from_address: string | null;
      /**
       * Id
       * @description Ticket ID
       */
      id: string;
      /**
       * State
       * @description Ticket state
       * @default null
       */
      state: string | null;
      /**
       * Subject
       * @description Ticket subject
       * @default null
       */
      subject: string | null;
      /**
       * Tags
       * @description List of ticket tags
       * @default null
       */
      tags: string[] | null;
      /**
       * Updated At
       * @description Ticket last updated time
       * @default null
       */
      updated_at: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_UNMARK_TICKET_AS_SPAM tool input.
 */
type SUPPORTBEE_UNMARK_TICKET_AS_SPAM_INPUT = {
  /**
   * Id
   * @description Unique identifier of the ticket to unmark as spam
   */
  id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_UNMARK_TICKET_AS_SPAM tool output.
 */
type SUPPORTBEE_UNMARK_TICKET_AS_SPAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee Id
       * @description User ID of the assignee
       * @default null
       */
      assignee_id: string | null;
      /**
       * Content
       * @description Ticket content
       * @default null
       */
      content: string | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       * @default null
       */
      created_at: string | null;
      /**
       * Custom Fields
       * @description Custom field values for the ticket as key-value pairs
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      } | null;
      /**
       * Email
       * @description Requester email
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique ticket ID
       */
      id: string;
      /**
       * Phone
       * @description Requester phone number
       * @default null
       */
      phone: string | null;
      /**
       * Priority
       * @description Ticket priority level
       * @default null
       */
      priority: string | null;
      /**
       * Spam
       * @description Flag indicating if the ticket is marked as spam
       * @default null
       */
      spam: boolean | null;
      /**
       * Status
       * @description Ticket status
       * @default null
       */
      status: string | null;
      /**
       * Subject
       * @description Ticket subject
       * @default null
       */
      subject: string | null;
      /**
       * Tags
       * @description List of tags associated with the ticket
       * @default null
       */
      tags: string[] | null;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       * @default null
       */
      updated_at: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_UNTRASH_TICKET tool input.
 */
type SUPPORTBEE_UNTRASH_TICKET_INPUT = {
  /**
   * Id
   * @description Unique identifier of the ticket to untrash
   */
  id?: string;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_UNTRASH_TICKET tool output.
 */
type SUPPORTBEE_UNTRASH_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Operation status, e.g., 'restored'
       */
      status: string;
      /**
       * Ticket
       * @description Untrashed ticket object
       */
      ticket: {
          /**
           * Assignee Id
           * @description User ID of the assignee
           * @default null
           */
          assignee_id: string | null;
          /**
           * Created At
           * @description Creation timestamp
           * @default null
           */
          created_at: string | null;
          /**
           * Custom Fields
           * @description Custom field values for the ticket as key-value pairs
           * @default null
           */
          custom_fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Description
           * @description Ticket description
           * @default null
           */
          description: string | null;
          /**
           * Email
           * @description Requester email
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique ticket ID
           */
          id: string;
          /**
           * Phone
           * @description Requester phone number
           * @default null
           */
          phone: string | null;
          /**
           * Priority
           * @description Ticket priority level
           * @default null
           */
          priority: string | null;
          /**
           * Status
           * @description Ticket status
           * @default null
           */
          status: string | null;
          /**
           * Subject
           * @description Ticket subject
           * @default null
           */
          subject: string | null;
          /**
           * Tags
           * @description List of tags associated with the ticket
           * @default null
           */
          tags: string[] | null;
          /**
           * Updated At
           * @description Last update timestamp
           * @default null
           */
          updated_at: string | null;
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
 * Type of SUPPORTBEE's SUPPORTBEE_UPDATE_USER tool input.
 */
type SUPPORTBEE_UPDATE_USER_INPUT = {
  /**
   * Avatar Url
   * @description URL to the user's new avatar
   * @default null
   */
  avatar_url: string | null;
  /**
   * Email
   * Format: email
   * @description New email for the user
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description Unique ID of the user to update
   */
  id?: number;
  /**
   * Name
   * @description New name for the user
   * @default null
   */
  name: string | null;
  /**
   * Role
   * @description New role for the user
   * @default null
   * @enum {string|null}
   */
  role: "agent" | "admin" | null;
  /**
   * Signature
   * @description New email signature for the user
   * @default null
   */
  signature: string | null;
};

/**
 * Type of SUPPORTBEE's SUPPORTBEE_UPDATE_USER tool output.
 */
type SUPPORTBEE_UPDATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL to the user's avatar
       * @default null
       */
      avatar_url: string | null;
      /**
       * Created At
       * @description Timestamp when the user was created (ISO 8601)
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description Email of the user
       */
      email: string;
      /**
       * Id
       * @description Unique ID of the user
       */
      id: number;
      /**
       * Name
       * @description Name of the user
       * @default null
       */
      name: string | null;
      /**
       * Role
       * @description Role of the user
       * @enum {string}
       */
      role: "agent" | "admin";
      /**
       * Signature
       * @description Email signature of the user
       * @default null
       */
      signature: string | null;
      /**
       * Updated At
       * @description Timestamp when the user was last updated (ISO 8601)
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
 * Type map of all available tool input types for toolkit "SUPPORTBEE".
 */
export type SUPPORTBEE_TOOL_INPUTS = {
  ARCHIVE_TICKET: SUPPORTBEE_ARCHIVE_TICKET_INPUT
  ASSIGN_TICKET_TO_TEAM: SUPPORTBEE_ASSIGN_TICKET_TO_TEAM_INPUT
  CREATE_RULE: SUPPORTBEE_CREATE_RULE_INPUT
  CREATE_SNIPPET: SUPPORTBEE_CREATE_SNIPPET_INPUT
  CREATE_TICKET: SUPPORTBEE_CREATE_TICKET_INPUT
  CREATE_TICKET_REPLY: SUPPORTBEE_CREATE_TICKET_REPLY_INPUT
  CREATE_USER_OR_CUSTOMER_GROUP: SUPPORTBEE_CREATE_USER_OR_CUSTOMER_GROUP_INPUT
  DELETE_SNIPPET: SUPPORTBEE_DELETE_SNIPPET_INPUT
  DELETE_TICKET: SUPPORTBEE_DELETE_TICKET_INPUT
  FETCH_EMAILS: SUPPORTBEE_FETCH_EMAILS_INPUT
  FETCH_LABELS: SUPPORTBEE_FETCH_LABELS_INPUT
  FETCH_SNIPPETS: SUPPORTBEE_FETCH_SNIPPETS_INPUT
  FETCH_TEAMS: SUPPORTBEE_FETCH_TEAMS_INPUT
  FETCH_TEAM_BY_ID: SUPPORTBEE_FETCH_TEAM_BY_ID_INPUT
  GET_AVG_FIRST_RESPONSE_TIME_REPORT: SUPPORTBEE_GET_AVG_FIRST_RESPONSE_TIME_REPORT_INPUT
  GET_REPLIES_COUNT_REPORT: SUPPORTBEE_GET_REPLIES_COUNT_REPORT_INPUT
  GET_TICKETS_COUNT_REPORT: SUPPORTBEE_GET_TICKETS_COUNT_REPORT_INPUT
  LIST_TICKETS: SUPPORTBEE_LIST_TICKETS_INPUT
  LIST_TICKET_COMMENTS: SUPPORTBEE_LIST_TICKET_COMMENTS_INPUT
  LIST_TICKET_REPLIES: SUPPORTBEE_LIST_TICKET_REPLIES_INPUT
  MARK_TICKET_AS_ANSWERED: SUPPORTBEE_MARK_TICKET_AS_ANSWERED_INPUT
  MARK_TICKET_AS_SPAM: SUPPORTBEE_MARK_TICKET_AS_SPAM_INPUT
  MARK_TICKET_AS_UNANSWERED: SUPPORTBEE_MARK_TICKET_AS_UNANSWERED_INPUT
  SEARCH_TICKETS: SUPPORTBEE_SEARCH_TICKETS_INPUT
  SHOW_TICKET_REPLY: SUPPORTBEE_SHOW_TICKET_REPLY_INPUT
  SHOW_USER_OR_CUSTOMER_GROUP: SUPPORTBEE_SHOW_USER_OR_CUSTOMER_GROUP_INPUT
  TRASH_TICKET: SUPPORTBEE_TRASH_TICKET_INPUT
  UNARCHIVE_TICKET: SUPPORTBEE_UNARCHIVE_TICKET_INPUT
  UNASSIGN_TICKET_FROM_TEAM: SUPPORTBEE_UNASSIGN_TICKET_FROM_TEAM_INPUT
  UNASSIGN_TICKET_FROM_USER: SUPPORTBEE_UNASSIGN_TICKET_FROM_USER_INPUT
  UNMARK_TICKET_AS_SPAM: SUPPORTBEE_UNMARK_TICKET_AS_SPAM_INPUT
  UNTRASH_TICKET: SUPPORTBEE_UNTRASH_TICKET_INPUT
  UPDATE_USER: SUPPORTBEE_UPDATE_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SUPPORTBEE".
 */
export type SUPPORTBEE_TOOL_OUTPUTS = {
  ARCHIVE_TICKET: SUPPORTBEE_ARCHIVE_TICKET_OUTPUT
  ASSIGN_TICKET_TO_TEAM: SUPPORTBEE_ASSIGN_TICKET_TO_TEAM_OUTPUT
  CREATE_RULE: SUPPORTBEE_CREATE_RULE_OUTPUT
  CREATE_SNIPPET: SUPPORTBEE_CREATE_SNIPPET_OUTPUT
  CREATE_TICKET: SUPPORTBEE_CREATE_TICKET_OUTPUT
  CREATE_TICKET_REPLY: SUPPORTBEE_CREATE_TICKET_REPLY_OUTPUT
  CREATE_USER_OR_CUSTOMER_GROUP: SUPPORTBEE_CREATE_USER_OR_CUSTOMER_GROUP_OUTPUT
  DELETE_SNIPPET: SUPPORTBEE_DELETE_SNIPPET_OUTPUT
  DELETE_TICKET: SUPPORTBEE_DELETE_TICKET_OUTPUT
  FETCH_EMAILS: SUPPORTBEE_FETCH_EMAILS_OUTPUT
  FETCH_LABELS: SUPPORTBEE_FETCH_LABELS_OUTPUT
  FETCH_SNIPPETS: SUPPORTBEE_FETCH_SNIPPETS_OUTPUT
  FETCH_TEAMS: SUPPORTBEE_FETCH_TEAMS_OUTPUT
  FETCH_TEAM_BY_ID: SUPPORTBEE_FETCH_TEAM_BY_ID_OUTPUT
  GET_AVG_FIRST_RESPONSE_TIME_REPORT: SUPPORTBEE_GET_AVG_FIRST_RESPONSE_TIME_REPORT_OUTPUT
  GET_REPLIES_COUNT_REPORT: SUPPORTBEE_GET_REPLIES_COUNT_REPORT_OUTPUT
  GET_TICKETS_COUNT_REPORT: SUPPORTBEE_GET_TICKETS_COUNT_REPORT_OUTPUT
  LIST_TICKETS: SUPPORTBEE_LIST_TICKETS_OUTPUT
  LIST_TICKET_COMMENTS: SUPPORTBEE_LIST_TICKET_COMMENTS_OUTPUT
  LIST_TICKET_REPLIES: SUPPORTBEE_LIST_TICKET_REPLIES_OUTPUT
  MARK_TICKET_AS_ANSWERED: SUPPORTBEE_MARK_TICKET_AS_ANSWERED_OUTPUT
  MARK_TICKET_AS_SPAM: SUPPORTBEE_MARK_TICKET_AS_SPAM_OUTPUT
  MARK_TICKET_AS_UNANSWERED: SUPPORTBEE_MARK_TICKET_AS_UNANSWERED_OUTPUT
  SEARCH_TICKETS: SUPPORTBEE_SEARCH_TICKETS_OUTPUT
  SHOW_TICKET_REPLY: SUPPORTBEE_SHOW_TICKET_REPLY_OUTPUT
  SHOW_USER_OR_CUSTOMER_GROUP: SUPPORTBEE_SHOW_USER_OR_CUSTOMER_GROUP_OUTPUT
  TRASH_TICKET: SUPPORTBEE_TRASH_TICKET_OUTPUT
  UNARCHIVE_TICKET: SUPPORTBEE_UNARCHIVE_TICKET_OUTPUT
  UNASSIGN_TICKET_FROM_TEAM: SUPPORTBEE_UNASSIGN_TICKET_FROM_TEAM_OUTPUT
  UNASSIGN_TICKET_FROM_USER: SUPPORTBEE_UNASSIGN_TICKET_FROM_USER_OUTPUT
  UNMARK_TICKET_AS_SPAM: SUPPORTBEE_UNMARK_TICKET_AS_SPAM_OUTPUT
  UNTRASH_TICKET: SUPPORTBEE_UNTRASH_TICKET_OUTPUT
  UPDATE_USER: SUPPORTBEE_UPDATE_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SUPPORTBEE toolkit.
 */
export const SUPPORTBEE = {
  slug: "supportbee",
  tools: {
    /**
     * Tool to archive a supportbee ticket by its id. use when you want to move resolved tickets to the archive.
     */
    ARCHIVE_TICKET: "SUPPORTBEE_ARCHIVE_TICKET",
    /**
     * Tool to assign a ticket to a team. use after confirming ticket and team ids are valid.
     */
    ASSIGN_TICKET_TO_TEAM: "SUPPORTBEE_ASSIGN_TICKET_TO_TEAM",
    /**
     * Tool to create a new routing or automation rule in supportbee. use after defining rule conditions and actions.
     */
    CREATE_RULE: "SUPPORTBEE_CREATE_RULE",
    /**
     * Tool to create a reusable snippet for ticket responses. use when you need to store and reuse response templates.
     */
    CREATE_SNIPPET: "SUPPORTBEE_CREATE_SNIPPET",
    /**
     * Tool to create a new support ticket. use when you need to open a ticket with subject, requester email, and content.
     */
    CREATE_TICKET: "SUPPORTBEE_CREATE_TICKET",
    /**
     * Tool to post a reply to a ticket. use after retrieving ticket details to respond to customers.
     */
    CREATE_TICKET_REPLY: "SUPPORTBEE_CREATE_TICKET_REPLY",
    /**
     * Tool to create a new user in supportbee. use when you need to provision an agent or admin via api.
     */
    CREATE_USER_OR_CUSTOMER_GROUP: "SUPPORTBEE_CREATE_USER_OR_CUSTOMER_GROUP",
    /**
     * Tool to delete a snippet by its id. use when you need to permanently remove an unwanted snippet.
     */
    DELETE_SNIPPET: "SUPPORTBEE_DELETE_SNIPPET",
    /**
     * Tool to permanently delete a trashed ticket. use when you need to remove a ticket from trash permanently.
     */
    DELETE_TICKET: "SUPPORTBEE_DELETE_TICKET",
    /**
     * Tool to retrieve all forwarding email addresses for the company. use when you need to view or manage forwarding emails.
     */
    FETCH_EMAILS: "SUPPORTBEE_FETCH_EMAILS",
    /**
     * Tool to retrieve all custom labels. use when you need to list labels for ticket categorization.
     */
    FETCH_LABELS: "SUPPORTBEE_FETCH_LABELS",
    /**
     * Tool to fetch all saved snippets. use when you need to list available snippets for the company.
     */
    FETCH_SNIPPETS: "SUPPORTBEE_FETCH_SNIPPETS",
    /**
     * Tool to retrieve all teams in the company. use when you need to list teams for organizing tickets by team.
     */
    FETCH_TEAMS: "SUPPORTBEE_FETCH_TEAMS",
    /**
     * Tool to fetch a supportbee team by its id. use when you need to retrieve details of a specific team after confirming its id is valid.
     */
    FETCH_TEAM_BY_ID: "SUPPORTBEE_FETCH_TEAM_BY_ID",
    /**
     * Tool to retrieve average first response time data points. use when analyzing first-response performance metrics within a given period.
     */
    GET_AVG_FIRST_RESPONSE_TIME_REPORT: "SUPPORTBEE_GET_AVG_FIRST_RESPONSE_TIME_REPORT",
    /**
     * Tool to get replies count data points over time. use when analyzing agent reply performance over a date range.
     */
    GET_REPLIES_COUNT_REPORT: "SUPPORTBEE_GET_REPLIES_COUNT_REPORT",
    /**
     * Tool to get ticket count data points over time. use when you need the total number of tickets for a given date range.
     */
    GET_TICKETS_COUNT_REPORT: "SUPPORTBEE_GET_TICKETS_COUNT_REPORT",
    /**
     * Tool to list tickets. use when you need a paginated view of tickets with optional filters.
     */
    LIST_TICKETS: "SUPPORTBEE_LIST_TICKETS",
    /**
     * Tool to list all comments for a ticket. use after confirming the ticket id to retrieve its conversation history.
     */
    LIST_TICKET_COMMENTS: "SUPPORTBEE_LIST_TICKET_COMMENTS",
    /**
     * Tool to list all replies for a specific ticket. use after confirming the ticket id is valid.
     */
    LIST_TICKET_REPLIES: "SUPPORTBEE_LIST_TICKET_REPLIES",
    /**
     * Tool to mark a ticket as answered. use after sending response to update ticket status.
     */
    MARK_TICKET_AS_ANSWERED: "SUPPORTBEE_MARK_TICKET_AS_ANSWERED",
    /**
     * Tool to mark a supportbee ticket as spam. use when you need to flag unwanted or malicious ticket submissions after obtaining the ticket id.
     */
    MARK_TICKET_AS_SPAM: "SUPPORTBEE_MARK_TICKET_AS_SPAM",
    /**
     * Tool to mark a ticket as unanswered. use after confirming the ticket was previously marked as answered to revert its status.
     */
    MARK_TICKET_AS_UNANSWERED: "SUPPORTBEE_MARK_TICKET_AS_UNANSWERED",
    /**
     * Tool to search supportbee tickets. use when you need to find tickets by query with pagination.
     */
    SEARCH_TICKETS: "SUPPORTBEE_SEARCH_TICKETS",
    /**
     * Tool to fetch a specific reply for a supportbee ticket. use when you need details of a single reply by ticket and reply ids.
     */
    SHOW_TICKET_REPLY: "SUPPORTBEE_SHOW_TICKET_REPLY",
    /**
     * Tool to retrieve a user or customer group by id. use when you need details for a specific user or group after confirming the id.
     */
    SHOW_USER_OR_CUSTOMER_GROUP: "SUPPORTBEE_SHOW_USER_OR_CUSTOMER_GROUP",
    /**
     * Tool to trash a supportbee ticket by its id. use when you need to remove a ticket into the trash folder.
     */
    TRASH_TICKET: "SUPPORTBEE_TRASH_TICKET",
    /**
     * Tool to unarchive a supportbee ticket by its id. use when you need to restore an archived ticket back to active status.
     */
    UNARCHIVE_TICKET: "SUPPORTBEE_UNARCHIVE_TICKET",
    /**
     * Tool to un-assign a ticket from its assigned team. use when you need to remove the current team ownership before reassigning or closing the ticket.
     */
    UNASSIGN_TICKET_FROM_TEAM: "SUPPORTBEE_UNASSIGN_TICKET_FROM_TEAM",
    /**
     * Tool to unassign the user from a ticket. use when you need to remove the assigned user before reassigning or closing a ticket.
     */
    UNASSIGN_TICKET_FROM_USER: "SUPPORTBEE_UNASSIGN_TICKET_FROM_USER",
    /**
     * Tool to unmark a supportbee ticket as spam. use when a ticket was incorrectly flagged as spam.
     */
    UNMARK_TICKET_AS_SPAM: "SUPPORTBEE_UNMARK_TICKET_AS_SPAM",
    /**
     * Tool to untrash (restore) a supportbee ticket by its id. use when you need to move a trashed ticket back to active status.
     */
    UNTRASH_TICKET: "SUPPORTBEE_UNTRASH_TICKET",
    /**
     * Update supportbee user
     */
    UPDATE_USER: "SUPPORTBEE_UPDATE_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SUPPORTBEE".
 */
export type SUPPORTBEE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SUPPORTBEE".
 */
export type SUPPORTBEE_TRIGGER_EVENTS = {}
