// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ONEDESK's ONEDESK_CREATE_WORKLOG tool input.
 */
type ONEDESK_CREATE_WORKLOG_INPUT = {
  /**
   * Billable
   * @description Whether this work is billable
   * @default null
   */
  billable: boolean | null;
  /**
   * Date
   * Format: date-time
   * @description Date and time of the worklog entry in ISO 8601 format
   */
  date?: string;
  /**
   * Duration
   * @description Duration in hours, non-negative
   */
  duration?: number;
  /**
   * Notes
   * @description Notes or description of the work performed
   * @default null
   */
  notes: string | null;
  /**
   * Object Id
   * @description ID of the associated object
   */
  object_id?: string;
  /**
   * Object Type
   * @description Type of object the worklog is associated with
   * @enum {string}
   */
  object_type?: "ticket" | "task" | "project" | "userstory" | "bug" | "feature";
  /**
   * User Id
   * @description ID of the user who logs the work
   */
  user_id?: string;
};

/**
 * Type of ONEDESK's ONEDESK_CREATE_WORKLOG tool output.
 */
type ONEDESK_CREATE_WORKLOG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Worklogs
       * @description List containing the created worklog entry
       */
      worklogs: {
          /**
           * Billable
           * @description Whether the work is billable
           * @default null
           */
          billable: boolean | null;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the worklog was created
           */
          created_at: string;
          /**
           * Date
           * Format: date-time
           * @description Date and time of the worklog entry
           */
          date: string;
          /**
           * Duration
           * @description Duration in hours, non-negative
           */
          duration: number;
          /**
           * Id
           * @description Unique identifier of the worklog entry
           */
          id: string;
          /**
           * Notes
           * @description Notes for the work performed
           * @default null
           */
          notes: string | null;
          /**
           * Object Id
           * @description ID of the associated object
           */
          object_id: string;
          /**
           * Object Type
           * @description Type of object the worklog is associated with
           * @enum {string}
           */
          object_type: "ticket" | "task" | "project" | "userstory" | "bug" | "feature";
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when the worklog was last updated
           */
          updated_at: string;
          /**
           * User Id
           * @description ID of the user who logged the work
           */
          user_id: string;
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
 * Type of ONEDESK's ONEDESK_DELETE_ATTACHMENT tool input.
 */
type ONEDESK_DELETE_ATTACHMENT_INPUT = {
  /**
   * Attachment Id
   * @description Unique identifier of the attachment to delete
   */
  attachment_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_DELETE_ATTACHMENT tool output.
 */
type ONEDESK_DELETE_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachment Id
       * @description Identifier of the deleted attachment
       */
      attachment_id: number;
      /**
       * Deleted
       * @description Whether the attachment was successfully deleted
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
 * Type of ONEDESK's ONEDESK_DELETE_COMMENT tool input.
 */
type ONEDESK_DELETE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description Unique identifier of the comment to delete
   */
  comment_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_DELETE_COMMENT tool output.
 */
type ONEDESK_DELETE_COMMENT_OUTPUT = {
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
 * Type of ONEDESK's ONEDESK_DELETE_CUSTOMER tool input.
 */
type ONEDESK_DELETE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier of the customer to delete
   */
  customer_id?: string;
};

/**
 * Type of ONEDESK's ONEDESK_DELETE_CUSTOMER tool output.
 */
type ONEDESK_DELETE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the customer was successfully deleted
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
 * Type of ONEDESK's ONEDESK_DELETE_MESSAGE tool input.
 */
type ONEDESK_DELETE_MESSAGE_INPUT = {
  /**
   * Message Id
   * @description Unique identifier of the message to delete
   */
  message_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_DELETE_MESSAGE tool output.
 */
type ONEDESK_DELETE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Whether the message was successfully deleted
       * @default true
       */
      deleted: boolean;
      /**
       * Message Id
       * @description Identifier of the deleted message (echo of request)
       * @default null
       */
      message_id: number | null;
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
 * Type of ONEDESK's ONEDESK_DELETE_PROJECT tool input.
 */
type ONEDESK_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description Unique identifier of the project to delete
   */
  project_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_DELETE_PROJECT tool output.
 */
type ONEDESK_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Whether the project was successfully deleted
       */
      deleted: boolean;
      /**
       * Project Id
       * @description Identifier of the deleted project
       */
      project_id: number;
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
 * Type of ONEDESK's ONEDESK_DELETE_REQUIREMENT tool input.
 */
type ONEDESK_DELETE_REQUIREMENT_INPUT = {
  /**
   * Requirement Id
   * @description Unique identifier of the requirement to delete
   */
  requirement_id?: string;
};

/**
 * Type of ONEDESK's ONEDESK_DELETE_REQUIREMENT tool output.
 */
type ONEDESK_DELETE_REQUIREMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the requirement was successfully deleted
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
 * Type of ONEDESK's ONEDESK_DELETE_TASK tool input.
 */
type ONEDESK_DELETE_TASK_INPUT = {
  /**
   * Task Id
   * @description Unique identifier of the task to delete
   */
  task_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_DELETE_TASK tool output.
 */
type ONEDESK_DELETE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Whether the task was successfully deleted
       */
      deleted: boolean;
      /**
       * Task Id
       * @description Identifier of the deleted task
       */
      task_id: number;
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
 * Type of ONEDESK's ONEDESK_DELETE_TICKET tool input.
 */
type ONEDESK_DELETE_TICKET_INPUT = {
  /**
   * Ticket Id
   * @description Unique identifier of the ticket to delete
   */
  ticket_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_DELETE_TICKET tool output.
 */
type ONEDESK_DELETE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Whether the ticket was successfully deleted
       */
      deleted: boolean;
      /**
       * Ticket Id
       * @description Identifier of the deleted ticket
       */
      ticket_id: number;
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
 * Type of ONEDESK's ONEDESK_DELETE_TIMESHEET tool input.
 */
type ONEDESK_DELETE_TIMESHEET_INPUT = {
  /**
   * Timesheet Id
   * @description Unique identifier of the timesheet to delete
   */
  timesheet_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_DELETE_TIMESHEET tool output.
 */
type ONEDESK_DELETE_TIMESHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Whether the timesheet was successfully deleted
       */
      deleted: boolean;
      /**
       * Timesheet Id
       * @description Identifier of the deleted timesheet
       */
      timesheet_id: number;
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
 * Type of ONEDESK's ONEDESK_DELETE_USER tool input.
 */
type ONEDESK_DELETE_USER_INPUT = {
  /**
   * User Id
   * @description Unique identifier of the user to delete
   */
  user_id?: string;
};

/**
 * Type of ONEDESK's ONEDESK_DELETE_USER tool output.
 */
type ONEDESK_DELETE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the user was successfully deleted
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
 * Type of ONEDESK's ONEDESK_DELETE_WORKLOG tool input.
 */
type ONEDESK_DELETE_WORKLOG_INPUT = {
  /**
   * Worklog Id
   * @description Unique identifier of the worklog to delete
   */
  worklog_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_DELETE_WORKLOG tool output.
 */
type ONEDESK_DELETE_WORKLOG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Whether the worklog was successfully deleted
       */
      deleted: boolean;
      /**
       * Worklog Id
       * @description Identifier of the deleted worklog
       */
      worklog_id: number;
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
 * Type of ONEDESK's ONEDESK_GET_ATTACHMENTS tool input.
 */
type ONEDESK_GET_ATTACHMENTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of attachments to return (if supported)
   * @default null
   */
  limit: number | null;
  /**
   * Object Id
   * @description Filter attachments by parent object ID; used with object_type for nested endpoint attempts
   * @default null
   */
  object_id: number | null;
  /**
   * Object Type
   * @description Filter attachments by parent object type; if provided with object_id, nested endpoints will also be attempted
   * @default null
   * @enum {string|null}
   */
  object_type: "ticket" | "task" | "project" | "requirement" | "worklog" | "comment" | "user" | "customer" | "timesheet" | null;
  /**
   * Offset
   * @description Number of attachments to skip for pagination (if supported)
   * @default null
   */
  offset: number | null;
  /**
   * Search
   * @description Search string to filter attachments by name or metadata (if supported)
   * @default null
   */
  search: string | null;
};

/**
 * Type of ONEDESK's ONEDESK_GET_ATTACHMENTS tool output.
 */
type ONEDESK_GET_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachments
       * @description List of attachments retrieved
       */
      attachments: {
          /**
           * Content Type
           * @description MIME type of the attachment
           */
          contentType: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the attachment was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the attachment
           */
          id: number;
          /**
           * Links
           * @description Related resource links
           * @default null
           */
          links: {
              [key: string]: string;
          } | null;
          /**
           * Name
           * @description Filename of the attachment
           */
          name: string;
          /**
           * Object Id
           * @description Identifier of the associated object
           */
          objectId: number | null;
          /**
           * Object Type
           * @description Type of object the attachment is associated with
           */
          objectType: string;
          /**
           * Size
           * @description Size of the attachment in bytes
           */
          size: number;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the attachment was last updated
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
 * Type of ONEDESK's ONEDESK_GET_COMMENTS tool input.
 */
type ONEDESK_GET_COMMENTS_INPUT = {
  /**
   * Author Id
   * @description Filter comments by author ID
   * @default null
   */
  author_id: number | null;
  /**
   * Limit
   * @description Maximum number of comments to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Search
   * @description Search text within comment bodies
   * @default null
   */
  search: string | null;
  /**
   * Ticket Id
   * @description Filter comments by associated ticket ID
   * @default null
   */
  ticket_id: number | null;
};

/**
 * Type of ONEDESK's ONEDESK_GET_COMMENTS tool output.
 */
type ONEDESK_GET_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description List of comments retrieved from OneDesk
       */
      comments: {
          /**
           * Author Id
           * @description ID of the user who authored the comment
           */
          author_id: number;
          /**
           * Body
           * @description The content of the comment
           */
          body: string;
          /**
           * Created At
           * @description Timestamp when the comment was created
           */
          created_at: string;
          /**
           * Id
           * @description The unique identifier of the comment
           */
          id: number;
          /**
           * Ticket Id
           * @description ID of the ticket associated with this comment
           */
          ticket_id: number;
          /**
           * Updated At
           * @description Timestamp when the comment was last updated
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
 * Type of ONEDESK's ONEDESK_GET_COMMENT_DETAILS tool input.
 */
type ONEDESK_GET_COMMENT_DETAILS_INPUT = {
  /**
   * Comment Id
   * @description Unique identifier of the comment to retrieve
   */
  comment_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_GET_COMMENT_DETAILS tool output.
 */
type ONEDESK_GET_COMMENT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author Id
       * @description ID of the comment author
       * @default null
       */
      author_id: number | null;
      /**
       * Body
       * @description Content of the comment
       * @default null
       */
      body: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the comment was created
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description Unique identifier of the comment
       */
      id: number;
      /**
       * Links
       * @description Related resource links
       * @default null
       */
      links: {
          [key: string]: string;
      } | null;
      /**
       * Ticket Id
       * @description ID of the ticket associated with the comment
       * @default null
       */
      ticket_id: number | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the comment was last updated
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
 * Type of ONEDESK's ONEDESK_GET_FEEDBACK tool input.
 */
type ONEDESK_GET_FEEDBACK_INPUT = {
  /**
   * Page
   * @description Page number for pagination, starting at 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination, max 100
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of ONEDESK's ONEDESK_GET_FEEDBACK tool output.
 */
type ONEDESK_GET_FEEDBACK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Feedback
       * @description List of feedback items
       */
      feedback: {
          /**
           * Assignee Id
           * @description User ID assigned to handle the feedback
           * @default null
           */
          assigneeId: number | null;
          /**
           * Created At
           * @description ISO 8601 timestamp of when feedback was created
           * @default null
           */
          createdAt: string | null;
          /**
           * Creator Id
           * @description User ID of the feedback creator
           * @default null
           */
          creatorId: number | null;
          /**
           * Description
           * @description Detailed description of the feedback
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the feedback item
           */
          id: number;
          /**
           * Links
           * @description Links to related resources
           * @default null
           */
          links: {
              [key: string]: string;
          } | null;
          /**
           * Number
           * @description Feedback reference number/code
           * @default null
           */
          number: string | null;
          /**
           * Priority
           * @description Priority level of the feedback
           * @default null
           */
          priority: string | null;
          /**
           * Status
           * @description Current status of the feedback item
           * @default null
           */
          status: string | null;
          /**
           * Tags
           * @description List of tags associated with the feedback
           * @default null
           */
          tags: string[] | null;
          /**
           * Title
           * @description Title or subject of the feedback
           * @default null
           */
          title: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp of the last update to the feedback
           * @default null
           */
          updatedAt: string | null;
      }[];
      /**
       * Page
       * @description Current page number
       * @default null
       */
      page: number | null;
      /**
       * Per Page
       * @description Number of items per page
       * @default null
       */
      per_page: number | null;
      /**
       * Total
       * @description Total number of feedback items
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
 * Type of ONEDESK's ONEDESK_GET_FEEDBACK_DETAILS tool input.
 */
type ONEDESK_GET_FEEDBACK_DETAILS_INPUT = {
  /**
   * Feedback Id
   * @description Unique identifier of the feedback item to retrieve
   */
  feedback_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_GET_FEEDBACK_DETAILS tool output.
 */
type ONEDESK_GET_FEEDBACK_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee Id
       * @description User ID assigned to handle the feedback
       * @default null
       */
      assigneeId: number | null;
      /**
       * Created At
       * @description ISO 8601 timestamp of when feedback was created
       * @default null
       */
      createdAt: string | null;
      /**
       * Creator Id
       * @description User ID of the feedback creator
       * @default null
       */
      creatorId: number | null;
      /**
       * Description
       * @description Detailed description or content of the feedback
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the feedback item
       */
      id: number;
      /**
       * Links
       * @description Links to related resources
       * @default null
       */
      links: {
          [key: string]: string;
      } | null;
      /**
       * Number
       * @description Feedback reference number/code
       * @default null
       */
      number: string | null;
      /**
       * Priority
       * @description Priority level of the feedback
       * @default null
       */
      priority: string | null;
      /**
       * Status
       * @description Current status of the feedback
       * @default null
       */
      status: string | null;
      /**
       * Tags
       * @description List of tags associated with the feedback
       * @default null
       */
      tags: string[] | null;
      /**
       * Title
       * @description Title or subject of the feedback
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp of the last update to the feedback
       * @default null
       */
      updatedAt: string | null;
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
 * Type of ONEDESK's ONEDESK_GET_ISSUES tool input.
 */
type ONEDESK_GET_ISSUES_INPUT = object;

/**
 * Type of ONEDESK's ONEDESK_GET_ISSUES tool output.
 */
type ONEDESK_GET_ISSUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Issues
       * @description List of issues retrieved
       */
      issues: {
          /**
           * Assignee Id
           * @description ID of the user assigned to the issue
           * @default null
           */
          assigneeId: number | null;
          /**
           * Created At
           * @description ISO 8601 timestamp of issue creation
           */
          createdAt: string;
          /**
           * Description
           * @description Detailed description of the issue
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the issue
           */
          id: number;
          /**
           * Links
           * @description Related resource links
           * @default null
           */
          links: {
              [key: string]: string;
          } | null;
          /**
           * Number
           * @description Issue number/reference code
           */
          number: string;
          /**
           * Priority
           * @description Priority level of the issue
           */
          priority: string;
          /**
           * Status
           * @description Current status of the issue
           */
          status: string;
          /**
           * Tags
           * @description Tags associated with the issue
           * @default null
           */
          tags: string[] | null;
          /**
           * Title
           * @description Title of the issue
           */
          title: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp of last update
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
 * Type of ONEDESK's ONEDESK_GET_ISSUE_DETAILS tool input.
 */
type ONEDESK_GET_ISSUE_DETAILS_INPUT = {
  /**
   * Issue Id
   * @description Unique identifier of the issue to retrieve
   */
  issue_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_GET_ISSUE_DETAILS tool output.
 */
type ONEDESK_GET_ISSUE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee Id
       * @description User ID assigned to handle the issue
       * @default null
       */
      assigneeId: number | null;
      /**
       * Created At
       * @description ISO 8601 timestamp of when issue was created
       * @default null
       */
      createdAt: string | null;
      /**
       * Description
       * @description Detailed description or content of the issue
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the issue
       */
      id: number;
      /**
       * Links
       * @description Links to related resources
       * @default null
       */
      links: {
          [key: string]: string;
      } | null;
      /**
       * Number
       * @description Issue reference number/code
       * @default null
       */
      number: string | null;
      /**
       * Priority
       * @description Priority level of the issue
       * @default null
       */
      priority: string | null;
      /**
       * Status
       * @description Current status of the issue
       * @default null
       */
      status: string | null;
      /**
       * Tags
       * @description List of tags associated with the issue
       * @default null
       */
      tags: string[] | null;
      /**
       * Title
       * @description Title or subject of the issue
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp of the last update to the issue
       * @default null
       */
      updatedAt: string | null;
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
 * Type of ONEDESK's ONEDESK_GET_MESSAGES tool input.
 */
type ONEDESK_GET_MESSAGES_INPUT = {
  /**
   * Contact Id
   * @description Filter messages by contact/customer ID
   * @default null
   */
  contact_id: number | null;
  /**
   * Direction
   * @description Direction of the message, e.g. 'inbound' or 'outbound'
   * @default null
   */
  direction: string | null;
  /**
   * Limit
   * @description Maximum number of messages to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Search
   * @description Search text within message bodies
   * @default null
   */
  search: string | null;
  /**
   * Ticket Id
   * @description Filter messages by associated ticket ID
   * @default null
   */
  ticket_id: number | null;
};

/**
 * Type of ONEDESK's ONEDESK_GET_MESSAGES tool output.
 */
type ONEDESK_GET_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description List of messages retrieved
       */
      messages: {
          /**
           * Attachments
           * @description List of attachments associated with the message
           * @default null
           */
          attachments: {
              /**
               * File Name
               * @description Filename of the attachment
               */
              fileName: string;
              /**
               * Id
               * @description Unique identifier of the attachment
               */
              id: number;
              /**
               * Url
               * @description Download URL of the attachment
               */
              url: string;
          }[] | null;
          /**
           * Body
           * @description Content/body of the message
           */
          body: string;
          /**
           * Contact Id
           * @description Identifier of the contact who sent or received the message
           * @default null
           */
          contactId: number | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the message was created
           */
          createdAt: string;
          /**
           * Direction
           * @description Direction of the message, e.g. 'inbound' or 'outbound'
           */
          direction: string;
          /**
           * Id
           * @description Unique identifier of the message
           */
          id: number;
          /**
           * Subject
           * @description Subject of the message, if any
           * @default null
           */
          subject: string | null;
          /**
           * Ticket Id
           * @description Identifier of the associated ticket, if any
           * @default null
           */
          ticketId: number | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the message was last updated
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
 * Type of ONEDESK's ONEDESK_GET_REQUIREMENTS tool input.
 */
type ONEDESK_GET_REQUIREMENTS_INPUT = object;

/**
 * Type of ONEDESK's ONEDESK_GET_REQUIREMENTS tool output.
 */
type ONEDESK_GET_REQUIREMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Requirements
       * @description List of requirements retrieved from OneDesk
       */
      requirements: {
          /**
           * Assignee Id
           * @description User ID to which the requirement is assigned
           * @default null
           */
          assignee_id: number | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the requirement was created
           */
          created_at: string;
          /**
           * Description
           * @description Detailed description of the requirement
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the requirement
           */
          id: number;
          /**
           * Links
           * @description Related resource links
           * @default null
           */
          links: {
              [key: string]: string;
          } | null;
          /**
           * Priority
           * @description Priority of the requirement
           * @default null
           */
          priority: string | null;
          /**
           * Project Id
           * @description Project ID under which this requirement belongs
           * @default null
           */
          project_id: number | null;
          /**
           * Status Id
           * @description Status ID of the requirement
           * @default null
           */
          status_id: number | null;
          /**
           * Tags
           * @description List of tags associated with the requirement
           * @default null
           */
          tags: string[] | null;
          /**
           * Title
           * @description Title of the requirement
           */
          title: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the requirement was last updated
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
 * Type of ONEDESK's ONEDESK_GET_REQUIREMENT_DETAILS tool input.
 */
type ONEDESK_GET_REQUIREMENT_DETAILS_INPUT = {
  /**
   * Requirement Id
   * @description Unique identifier of the requirement to retrieve
   */
  requirement_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_GET_REQUIREMENT_DETAILS tool output.
 */
type ONEDESK_GET_REQUIREMENT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee Id
       * @description User ID assigned to the requirement
       * @default null
       */
      assignee_id: number | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the requirement was created
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description Description of the requirement
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the requirement
       */
      id: number;
      /**
       * Links
       * @description Related resource links
       * @default null
       */
      links: {
          [key: string]: string;
      } | null;
      /**
       * Priority
       * @description Priority of the requirement
       * @default null
       */
      priority: string | null;
      /**
       * Project Id
       * @description Project ID under which the requirement exists
       * @default null
       */
      project_id: number | null;
      /**
       * Status Id
       * @description Status ID of the requirement
       * @default null
       */
      status_id: number | null;
      /**
       * Tags
       * @description Tags associated with the requirement
       * @default null
       */
      tags: string[] | null;
      /**
       * Title
       * @description Title of the requirement
       */
      title: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the requirement was last updated
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
 * Type of ONEDESK's ONEDESK_GET_TASK_DETAILS tool input.
 */
type ONEDESK_GET_TASK_DETAILS_INPUT = {
  /**
   * Task Id
   * @description Unique identifier of the task (must be a positive integer)
   */
  task_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_GET_TASK_DETAILS tool output.
 */
type ONEDESK_GET_TASK_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee Id
       * @description User ID assigned to the task
       * @default null
       */
      assignee_id: number | null;
      /**
       * Created At
       * @description Timestamp when the task was created
       */
      created_at: string;
      /**
       * Description
       * @description Detailed description of the task
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description Due date of the task in ISO 8601 format
       * @default null
       */
      due_date: string | null;
      /**
       * Id
       * @description Unique identifier of the task
       */
      id: number;
      /**
       * Priority
       * @description Priority of the task
       * @default null
       */
      priority: string | null;
      /**
       * Project Id
       * @description Project ID under which the task is organized
       * @default null
       */
      project_id: number | null;
      /**
       * Status Id
       * @description Status ID associated with the task
       * @default null
       */
      status_id: number | null;
      /**
       * Tags
       * @description Tags associated with the task
       * @default null
       */
      tags: string[] | null;
      /**
       * Title
       * @description Title of the task
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when the task was last updated
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
 * Type of ONEDESK's ONEDESK_GET_TICKETS tool input.
 */
type ONEDESK_GET_TICKETS_INPUT = object;

/**
 * Type of ONEDESK's ONEDESK_GET_TICKETS tool output.
 */
type ONEDESK_GET_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tickets
       * @description List of tickets retrieved
       */
      tickets: {
          /**
           * Assignee Id
           * @description ID of the user assigned to the ticket
           * @default null
           */
          assigneeId: number | null;
          /**
           * Created At
           * @description ISO 8601 timestamp of ticket creation
           */
          createdAt: string;
          /**
           * Description
           * @description Detailed description of the ticket
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the ticket
           */
          id: number;
          /**
           * Links
           * @description Related resource links
           * @default null
           */
          links: {
              [key: string]: string;
          } | null;
          /**
           * Number
           * @description Ticket number/reference code
           */
          number: string;
          /**
           * Priority
           * @description Priority level of the ticket
           */
          priority: string;
          /**
           * Status
           * @description Current status of the ticket
           */
          status: string;
          /**
           * Tags
           * @description Tags associated with the ticket
           * @default null
           */
          tags: string[] | null;
          /**
           * Title
           * @description Title of the ticket
           */
          title: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp of last update
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
 * Type of ONEDESK's ONEDESK_GET_TIMESHEETS tool input.
 */
type ONEDESK_GET_TIMESHEETS_INPUT = {
  /**
   * Billable
   * @description Filter by billable flag
   * @default null
   */
  billable: boolean | null;
  /**
   * From Date
   * @description Start date (YYYY-MM-DD or ISO 8601)
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Maximum number of entries to return
   * @default null
   */
  limit: number | null;
  /**
   * Notes Contains
   * @description Filter entries where notes contain this string
   * @default null
   */
  notes_contains: string | null;
  /**
   * Object Id
   * @description Filter by associated object ID
   * @default null
   */
  object_id: string | null;
  /**
   * Object Type
   * @description Filter by associated object type (e.g., ticket, task)
   * @default null
   */
  object_type: string | null;
  /**
   * Offset
   * @description Number of entries to skip for pagination
   * @default null
   */
  offset: number | null;
  /**
   * To Date
   * @description End date (YYYY-MM-DD or ISO 8601)
   * @default null
   */
  to_date: string | null;
  /**
   * User Id
   * @description Filter by user ID who logged the timesheet
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of ONEDESK's ONEDESK_GET_TIMESHEETS tool output.
 */
type ONEDESK_GET_TIMESHEETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Timesheets
       * @description List of timesheet entries retrieved
       */
      timesheets: {
          [key: string]: unknown;
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
 * Type of ONEDESK's ONEDESK_GET_TIMESHEET_DETAILS tool input.
 */
type ONEDESK_GET_TIMESHEET_DETAILS_INPUT = {
  /**
   * Timesheet Id
   * @description Unique identifier of the timesheet to retrieve
   */
  timesheet_id?: number;
};

/**
 * Type of ONEDESK's ONEDESK_GET_TIMESHEET_DETAILS tool output.
 */
type ONEDESK_GET_TIMESHEET_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable
       * @description Whether this timesheet entry is billable
       * @default null
       */
      billable: boolean | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the timesheet was created
       * @default null
       */
      created_at: string | null;
      /**
       * Date
       * @description Date of the timesheet entry in ISO 8601 format, e.g., '2023-10-12'
       * @default null
       */
      date: string | null;
      /**
       * Duration
       * @description Duration in hours logged for the timesheet entry
       * @default null
       */
      duration: number | null;
      /**
       * Id
       * @description Unique identifier of the timesheet
       */
      id: number | null;
      /**
       * Links
       * @description Links to related resources
       * @default null
       */
      links: {
          [key: string]: string;
      } | null;
      /**
       * Notes
       * @description Notes or description for this entry
       * @default null
       */
      notes: string | null;
      /**
       * Project Id
       * @description Identifier of the project associated with this timesheet
       * @default null
       */
      project_id: number | null;
      /**
       * Task Id
       * @description Identifier of the task associated with this timesheet
       * @default null
       */
      task_id: number | null;
      /**
       * Ticket Id
       * @description Identifier of the ticket associated with this timesheet
       * @default null
       */
      ticket_id: number | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the timesheet was last updated
       * @default null
       */
      updated_at: string | null;
      /**
       * User Id
       * @description Identifier of the user who logged time
       * @default null
       */
      user_id: number | null;
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
 * Type of ONEDESK's ONEDESK_GET_WORKLOGS tool input.
 */
type ONEDESK_GET_WORKLOGS_INPUT = {
  /**
   * From Date
   * @description Filter by start date (inclusive), ISO 8601
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Max number of results
   * @default null
   */
  limit: number | null;
  /**
   * Notes Contains
   * @description Filter by substring contained in notes
   * @default null
   */
  notes_contains: string | null;
  /**
   * Object Id
   * @description Filter by associated object ID
   * @default null
   */
  object_id: string | null;
  /**
   * Object Type
   * @description Filter by object type (e.g., ticket, task, project, userstory, bug, feature)
   * @default null
   */
  object_type: string | null;
  /**
   * Offset
   * @description Results to skip (pagination)
   * @default null
   */
  offset: number | null;
  /**
   * To Date
   * @description Filter by end date (inclusive), ISO 8601
   * @default null
   */
  to_date: string | null;
  /**
   * User Id
   * @description Filter by user ID
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of ONEDESK's ONEDESK_GET_WORKLOGS tool output.
 */
type ONEDESK_GET_WORKLOGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Worklogs
       * @description List of worklog entries retrieved from OneDesk
       */
      worklogs: {
          /**
           * Billable
           * @description Whether the work is billable
           * @default null
           */
          billable: boolean | null;
          /**
           * Created At
           * @description Timestamp when the worklog was created
           * @default null
           */
          created_at: string | null;
          /**
           * Date
           * @description Date and time of the worklog entry (ISO 8601)
           * @default null
           */
          date: string | null;
          /**
           * Duration
           * @description Duration in hours, non-negative
           * @default null
           */
          duration: number | null;
          /**
           * Id
           * @description Unique identifier of the worklog entry
           */
          id: string;
          /**
           * Notes
           * @description Notes for the work performed
           * @default null
           */
          notes: string | null;
          /**
           * Object Id
           * @description ID of the associated object
           * @default null
           */
          object_id: string | null;
          /**
           * Object Type
           * @description Type of object the worklog is associated with
           * @default null
           */
          object_type: string | null;
          /**
           * Updated At
           * @description Timestamp when the worklog was last updated
           * @default null
           */
          updated_at: string | null;
          /**
           * User Id
           * @description ID of the user who logged the work
           * @default null
           */
          user_id: string | null;
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
 * Type of ONEDESK's ONEDESK_GET_WORKLOG_DETAILS tool input.
 */
type ONEDESK_GET_WORKLOG_DETAILS_INPUT = {
  /**
   * Worklog Id
   * @description Unique identifier of the worklog to retrieve
   */
  worklog_id?: string;
};

/**
 * Type of ONEDESK's ONEDESK_GET_WORKLOG_DETAILS tool output.
 */
type ONEDESK_GET_WORKLOG_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billable
       * @description Whether the work is billable
       * @default null
       */
      billable: boolean | null;
      /**
       * Created At
       * @description Timestamp when the worklog was created
       * @default null
       */
      created_at: string | null;
      /**
       * Date
       * @description Date and time of the worklog entry
       * @default null
       */
      date: string | null;
      /**
       * Duration
       * @description Duration in hours, non-negative
       * @default null
       */
      duration: number | null;
      /**
       * Id
       * @description Unique identifier of the worklog entry
       */
      id: string | null;
      /**
       * Notes
       * @description Notes for the work performed
       * @default null
       */
      notes: string | null;
      /**
       * Object Id
       * @description ID of the associated object
       * @default null
       */
      object_id: number | null;
      /**
       * Object Type
       * @description Type of object the worklog is associated with
       * @default null
       */
      object_type: string | null;
      /**
       * Updated At
       * @description Timestamp when the worklog was last updated
       * @default null
       */
      updated_at: string | null;
      /**
       * User Id
       * @description ID of the user who logged the work
       * @default null
       */
      user_id: number | null;
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
 * Type map of all available tool input types for toolkit "ONEDESK".
 */
export type ONEDESK_TOOL_INPUTS = {
  CREATE_WORKLOG: ONEDESK_CREATE_WORKLOG_INPUT
  DELETE_ATTACHMENT: ONEDESK_DELETE_ATTACHMENT_INPUT
  DELETE_COMMENT: ONEDESK_DELETE_COMMENT_INPUT
  DELETE_CUSTOMER: ONEDESK_DELETE_CUSTOMER_INPUT
  DELETE_MESSAGE: ONEDESK_DELETE_MESSAGE_INPUT
  DELETE_PROJECT: ONEDESK_DELETE_PROJECT_INPUT
  DELETE_REQUIREMENT: ONEDESK_DELETE_REQUIREMENT_INPUT
  DELETE_TASK: ONEDESK_DELETE_TASK_INPUT
  DELETE_TICKET: ONEDESK_DELETE_TICKET_INPUT
  DELETE_TIMESHEET: ONEDESK_DELETE_TIMESHEET_INPUT
  DELETE_USER: ONEDESK_DELETE_USER_INPUT
  DELETE_WORKLOG: ONEDESK_DELETE_WORKLOG_INPUT
  GET_ATTACHMENTS: ONEDESK_GET_ATTACHMENTS_INPUT
  GET_COMMENTS: ONEDESK_GET_COMMENTS_INPUT
  GET_COMMENT_DETAILS: ONEDESK_GET_COMMENT_DETAILS_INPUT
  GET_FEEDBACK: ONEDESK_GET_FEEDBACK_INPUT
  GET_FEEDBACK_DETAILS: ONEDESK_GET_FEEDBACK_DETAILS_INPUT
  GET_ISSUES: ONEDESK_GET_ISSUES_INPUT
  GET_ISSUE_DETAILS: ONEDESK_GET_ISSUE_DETAILS_INPUT
  GET_MESSAGES: ONEDESK_GET_MESSAGES_INPUT
  GET_REQUIREMENTS: ONEDESK_GET_REQUIREMENTS_INPUT
  GET_REQUIREMENT_DETAILS: ONEDESK_GET_REQUIREMENT_DETAILS_INPUT
  GET_TASK_DETAILS: ONEDESK_GET_TASK_DETAILS_INPUT
  GET_TICKETS: ONEDESK_GET_TICKETS_INPUT
  GET_TIMESHEETS: ONEDESK_GET_TIMESHEETS_INPUT
  GET_TIMESHEET_DETAILS: ONEDESK_GET_TIMESHEET_DETAILS_INPUT
  GET_WORKLOGS: ONEDESK_GET_WORKLOGS_INPUT
  GET_WORKLOG_DETAILS: ONEDESK_GET_WORKLOG_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ONEDESK".
 */
export type ONEDESK_TOOL_OUTPUTS = {
  CREATE_WORKLOG: ONEDESK_CREATE_WORKLOG_OUTPUT
  DELETE_ATTACHMENT: ONEDESK_DELETE_ATTACHMENT_OUTPUT
  DELETE_COMMENT: ONEDESK_DELETE_COMMENT_OUTPUT
  DELETE_CUSTOMER: ONEDESK_DELETE_CUSTOMER_OUTPUT
  DELETE_MESSAGE: ONEDESK_DELETE_MESSAGE_OUTPUT
  DELETE_PROJECT: ONEDESK_DELETE_PROJECT_OUTPUT
  DELETE_REQUIREMENT: ONEDESK_DELETE_REQUIREMENT_OUTPUT
  DELETE_TASK: ONEDESK_DELETE_TASK_OUTPUT
  DELETE_TICKET: ONEDESK_DELETE_TICKET_OUTPUT
  DELETE_TIMESHEET: ONEDESK_DELETE_TIMESHEET_OUTPUT
  DELETE_USER: ONEDESK_DELETE_USER_OUTPUT
  DELETE_WORKLOG: ONEDESK_DELETE_WORKLOG_OUTPUT
  GET_ATTACHMENTS: ONEDESK_GET_ATTACHMENTS_OUTPUT
  GET_COMMENTS: ONEDESK_GET_COMMENTS_OUTPUT
  GET_COMMENT_DETAILS: ONEDESK_GET_COMMENT_DETAILS_OUTPUT
  GET_FEEDBACK: ONEDESK_GET_FEEDBACK_OUTPUT
  GET_FEEDBACK_DETAILS: ONEDESK_GET_FEEDBACK_DETAILS_OUTPUT
  GET_ISSUES: ONEDESK_GET_ISSUES_OUTPUT
  GET_ISSUE_DETAILS: ONEDESK_GET_ISSUE_DETAILS_OUTPUT
  GET_MESSAGES: ONEDESK_GET_MESSAGES_OUTPUT
  GET_REQUIREMENTS: ONEDESK_GET_REQUIREMENTS_OUTPUT
  GET_REQUIREMENT_DETAILS: ONEDESK_GET_REQUIREMENT_DETAILS_OUTPUT
  GET_TASK_DETAILS: ONEDESK_GET_TASK_DETAILS_OUTPUT
  GET_TICKETS: ONEDESK_GET_TICKETS_OUTPUT
  GET_TIMESHEETS: ONEDESK_GET_TIMESHEETS_OUTPUT
  GET_TIMESHEET_DETAILS: ONEDESK_GET_TIMESHEET_DETAILS_OUTPUT
  GET_WORKLOGS: ONEDESK_GET_WORKLOGS_OUTPUT
  GET_WORKLOG_DETAILS: ONEDESK_GET_WORKLOG_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ONEDESK toolkit.
 */
export const ONEDESK = {
  slug: "onedesk",
  tools: {
    /**
     * Tool to create a worklog entry. use after confirming object type, object id, and user id. logs time spent on objects such as tickets, tasks, or projects.
     */
    CREATE_WORKLOG: "ONEDESK_CREATE_WORKLOG",
    /**
     * Tool to delete a specific attachment. use when you need to remove an existing attachment by its id after confirming its details.
     */
    DELETE_ATTACHMENT: "ONEDESK_DELETE_ATTACHMENT",
    /**
     * Tool to delete a specific comment by its id. use when you have confirmed the comment should be removed.
     */
    DELETE_COMMENT: "ONEDESK_DELETE_COMMENT",
    /**
     * Tool to delete a customer. use after confirming the customer id before removal. example: {'customer id': '12345'}
     */
    DELETE_CUSTOMER: "ONEDESK_DELETE_CUSTOMER",
    /**
     * Tool to delete a specific message. use when you need to remove an existing message by its id after confirming its details.
     */
    DELETE_MESSAGE: "ONEDESK_DELETE_MESSAGE",
    /**
     * Tool to delete a project by its id. use when you need to remove a project from onedesk after confirming it's no longer needed. example: {'project id': 123}
     */
    DELETE_PROJECT: "ONEDESK_DELETE_PROJECT",
    /**
     * Tool to delete a requirement. use when you need to remove a requirement by its id after confirmation. example: {'requirement id': '12345'}
     */
    DELETE_REQUIREMENT: "ONEDESK_DELETE_REQUIREMENT",
    /**
     * Tool to delete a specific task. use when you need to remove an existing task by its id after confirming its details.
     */
    DELETE_TASK: "ONEDESK_DELETE_TASK",
    /**
     * Tool to delete a ticket by its id. use when you need to remove a ticket from onedesk after confirming it's no longer needed. example: {'ticket id': 123}
     */
    DELETE_TICKET: "ONEDESK_DELETE_TICKET",
    /**
     * Tool to delete a timesheet by its id. use when you need to remove a specific timesheet after confirming it's no longer needed. example: {'timesheet id': 123}
     */
    DELETE_TIMESHEET: "ONEDESK_DELETE_TIMESHEET",
    /**
     * Tool to delete a user by its id. use after confirming the user should be removed. example: {'user id': '12345'}
     */
    DELETE_USER: "ONEDESK_DELETE_USER",
    /**
     * Tool to delete a worklog by its id. use when you need to remove a worklog entry after confirming it's no longer needed. example: {'worklog id': 123}
     */
    DELETE_WORKLOG: "ONEDESK_DELETE_WORKLOG",
    /**
     * Tool to retrieve a list of attachments. use when you need to fetch all attachments from onedesk.
     */
    GET_ATTACHMENTS: "ONEDESK_GET_ATTACHMENTS",
    /**
     * Tool to retrieve all comments. use when you need to list or process existing comments.
     */
    GET_COMMENTS: "ONEDESK_GET_COMMENTS",
    /**
     * Tool to retrieve detailed information for a comment by its id. use when you need full comment data after obtaining the comment id. tries multiple endpoints and header/param permutations for compatibility with various onedesk deployments. if no endpoint succeeds, it returns a minimal response containing the requested comment id to avoid hard failure while still executing real api calls.
     */
    GET_COMMENT_DETAILS: "ONEDESK_GET_COMMENT_DETAILS",
    /**
     * Tool to retrieve all feedback items. use when you need to list feedback entries for review.
     */
    GET_FEEDBACK: "ONEDESK_GET_FEEDBACK",
    /**
     * Tool to retrieve details of a specific feedback item. use when you have the feedback id and need its full details.
     */
    GET_FEEDBACK_DETAILS: "ONEDESK_GET_FEEDBACK_DETAILS",
    /**
     * Tool to retrieve a list of issues. use when you need to fetch all issues from onedesk.
     */
    GET_ISSUES: "ONEDESK_GET_ISSUES",
    /**
     * Tool to retrieve details of a specific issue. use when you have the issue id and need its full details.
     */
    GET_ISSUE_DETAILS: "ONEDESK_GET_ISSUE_DETAILS",
    /**
     * Tool to retrieve a list of messages. use when you need to list all messages from onedesk.
     */
    GET_MESSAGES: "ONEDESK_GET_MESSAGES",
    /**
     * Tool to retrieve a list of requirements. use when you need to fetch all requirements from onedesk.
     */
    GET_REQUIREMENTS: "ONEDESK_GET_REQUIREMENTS",
    /**
     * Tool to retrieve full details of a specific requirement. use when you have the requirement id and need its complete data.
     */
    GET_REQUIREMENT_DETAILS: "ONEDESK_GET_REQUIREMENT_DETAILS",
    /**
     * Tool to retrieve details of a specific task in onedesk. use when you have a task id and need full task information.
     */
    GET_TASK_DETAILS: "ONEDESK_GET_TASK_DETAILS",
    /**
     * Tool to retrieve a list of tickets. use when you need to fetch all tickets from onedesk.
     */
    GET_TICKETS: "ONEDESK_GET_TICKETS",
    /**
     * Tool to retrieve a list of timesheet entries. tries multiple endpoint variants and header permutations to improve compatibility across onedesk environments.
     */
    GET_TIMESHEETS: "ONEDESK_GET_TIMESHEETS",
    /**
     * Tool to retrieve details of a specific timesheet entry. use when you have the `timesheet id` and need full metadata (user, project, hours, dates). tries multiple endpoint/header variants and gracefully falls back in restricted environments.
     */
    GET_TIMESHEET_DETAILS: "ONEDESK_GET_TIMESHEET_DETAILS",
    /**
     * Tool to retrieve all worklogs. use when you need to list or process existing worklog entries.
     */
    GET_WORKLOGS: "ONEDESK_GET_WORKLOGS",
    /**
     * Tool to retrieve details of a specific worklog. use when you have a worklog id and need full worklog information. tries multiple endpoint/header variants and gracefully falls back in restricted environments.
     */
    GET_WORKLOG_DETAILS: "ONEDESK_GET_WORKLOG_DETAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ONEDESK".
 */
export type ONEDESK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ONEDESK".
 */
export type ONEDESK_TRIGGER_EVENTS = {}
