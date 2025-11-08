import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LINEAR's LINEAR_CREATE_LINEAR_ATTACHMENT tool input.
 */
type LINEAR_CREATE_LINEAR_ATTACHMENT_INPUT = {
  /**
   * Issue Id
   * @description Identifier of the existing Linear issue to which the attachment will be added.
   */
  issue_id?: string;
  /**
   * Subtitle
   * @description Optional subtitle or short description for the attachment.
   */
  subtitle?: string;
  /**
   * Title
   * @description Title for the attachment.
   */
  title?: string;
  /**
   * Url
   * @description URL of the attachment's content (e.g., file, webpage, online resource).
   */
  url?: string;
};

/**
 * Type of LINEAR's LINEAR_CREATE_LINEAR_ATTACHMENT tool output.
 */
type LINEAR_CREATE_LINEAR_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Identifier of the newly created attachment.
       */
      id: string;
      /**
       * Issue Id
       * @description Identifier of the Linear issue the attachment is associated with.
       */
      issue_id: string;
      /**
       * Subtitle
       * @description Subtitle of the created attachment.
       */
      subtitle: string;
      /**
       * Title
       * @description Title of the created attachment.
       */
      title: string;
      /**
       * Url
       * @description URL of the created attachment.
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
 * Type of LINEAR's LINEAR_CREATE_LINEAR_COMMENT tool input.
 */
type LINEAR_CREATE_LINEAR_COMMENT_INPUT = {
  /**
   * Body
   * @description Non-empty comment content, in plain text or Markdown.
   */
  body?: string;
  /**
   * Issue Id
   * @description Identifier of the existing Linear issue for the comment.
   */
  issue_id?: string;
};

/**
 * Type of LINEAR's LINEAR_CREATE_LINEAR_COMMENT tool output.
 */
type LINEAR_CREATE_LINEAR_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Content of the created comment, possibly Markdown.
       */
      body: string;
      /**
       * Created At
       * @description ISO 8601 timestamp of comment creation.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the newly created comment.
       */
      id: string;
      /**
       * User Id
       * @description Unique identifier of the comment's creator.
       */
      user_id: string;
      /**
       * User Name
       * @description Display name of the comment's creator.
       */
      user_name: string;
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
 * Type of LINEAR's LINEAR_CREATE_LINEAR_ISSUE tool input.
 */
type LINEAR_CREATE_LINEAR_ISSUE_INPUT = {
  /**
   * Assignee Id
   * @description Identifier of the user to assign to this issue.
   * @default null
   */
  assignee_id: string | null;
  /**
   * Cycle Id
   * @description Identifier of the cycle (sprint) to assign this issue to. Cycles are time-bound periods used to organize and prioritize work. Only applicable if the team has cycles feature enabled.
   * @default null
   */
  cycle_id: string | null;
  /**
   * Description
   * @description A detailed description of the issue, which can include markdown formatting.
   * @default null
   */
  description: string | null;
  /**
   * Due Date
   * @description The target completion date for the issue, formatted as 'YYYY,MM,DD,hh,mm,ss'. For example: '2024,10,27,12,58,00'.
   * @default null
   */
  due_date: string | null;
  /**
   * Estimate
   * @description The estimated complexity or effort for the issue, represented as a numerical point value (e.g., 1, 2, 3, 5, 8). The specific scale used (e.g., Fibonacci, Linear, T-shirt sizes mapped to numbers) is defined by the team's settings. This field only applies if the estimates feature is enabled for the team. A value of 0 typically means no estimate has been set.
   * @default 0
   */
  estimate: number;
  /**
   * Label Ids
   * @description A list of identifiers for labels to be added to this issue.
   * @default []
   */
  label_ids: string[];
  /**
   * Parent Id
   * @description Identifier of an existing issue to set as the parent of this new issue, creating a sub-issue relationship.
   * @default null
   */
  parent_id: string | null;
  /**
   * Priority
   * @description Priority of the issue. 0 indicates no priority, 1 is Urgent, 2 is High, 3 is Normal, and 4 is Low.
   * @default 0
   */
  priority: number;
  /**
   * Project Id
   * @description Identifier of the project to which this issue will be associated.
   * @default null
   */
  project_id: string | null;
  /**
   * State Id
   * @description Identifier of the workflow state to assign to the issue (e.g., backlog, to do, in progress, done).
   * @default null
   */
  state_id: string | null;
  /**
   * Team Id
   * @description Identifier of the team responsible for this issue.
   */
  team_id?: string;
  /**
   * Title
   * @description The title of the new issue.
   */
  title?: string;
};

/**
 * Type of LINEAR's LINEAR_CREATE_LINEAR_ISSUE tool output.
 */
type LINEAR_CREATE_LINEAR_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the newly created issue.
       */
      id: string;
      /**
       * Issue Description
       * @description The description provided for the newly created issue.
       */
      issue_description: string;
      /**
       * Issue Title
       * @description The title of the newly created issue.
       */
      issue_title: string;
      /**
       * Ticket Url
       * @description The direct URL to access the newly created issue in the Linear application.
       */
      ticket_url: string;
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
 * Type of LINEAR's LINEAR_CREATE_LINEAR_ISSUE_DETAILS tool input.
 */
type LINEAR_CREATE_LINEAR_ISSUE_DETAILS_INPUT = {
  /**
   * Team Id
   * @description Identifier of the Linear team.
   */
  team_id?: string;
};

/**
 * Type of LINEAR's LINEAR_CREATE_LINEAR_ISSUE_DETAILS tool output.
 */
type LINEAR_CREATE_LINEAR_ISSUE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Team
       * @description Default parameters for new issues in the team, including 'defaultIssueEstimate' (e.g., 0 for complexity/points) and 'defaultIssueState' (object with 'id' and 'name' of the default workflow state, like 'Todo').
       */
      team: {
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
 * Type of LINEAR's LINEAR_CREATE_LINEAR_LABEL tool input.
 */
type LINEAR_CREATE_LINEAR_LABEL_INPUT = {
  /**
   * Color
   * @description Hexadecimal color code (e.g., '#FF0000') for the label's appearance in the UI.
   */
  color?: string;
  /**
   * Description
   * @description Optional detailed description for the label, providing context on its use.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the new label, displayed in the Linear UI.
   */
  name?: string;
  /**
   * Team Id
   * @description Identifier of the team for which this label will be created.
   */
  team_id?: string;
};

/**
 * Type of LINEAR's LINEAR_CREATE_LINEAR_LABEL tool output.
 */
type LINEAR_CREATE_LINEAR_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Hexadecimal color code assigned to the label.
       */
      color: string;
      /**
       * Created At
       * @description ISO 8601 timestamp of when the label was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description provided for the label, if any.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Identifier of the newly created label.
       */
      id: string;
      /**
       * Name
       * @description Name of the created label.
       */
      name: string;
      /**
       * Team Id
       * @description Identifier of the team in which the label was created.
       */
      team_id: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp of when the label was last updated.
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
 * Type of LINEAR's LINEAR_DELETE_LINEAR_ISSUE tool input.
 */
type LINEAR_DELETE_LINEAR_ISSUE_INPUT = {
  /**
   * Issue Id
   * @description Identifier of the Linear issue to be archived. This can be the issue's UUID or its human-readable shorthand ID (e.g., 'TEAM-123').
   */
  issue_id?: string;
};

/**
 * Type of LINEAR's LINEAR_DELETE_LINEAR_ISSUE tool output.
 */
type LINEAR_DELETE_LINEAR_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description A boolean flag indicating `true` if the issue was successfully archived, or `false` otherwise.
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
 * Type of LINEAR's LINEAR_GET_ALL_LINEAR_TEAMS tool input.
 */
type LINEAR_GET_ALL_LINEAR_TEAMS_INPUT = object;

/**
 * Type of LINEAR's LINEAR_GET_ALL_LINEAR_TEAMS tool output.
 */
type LINEAR_GET_ALL_LINEAR_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Items */
      items?: {
          /**
           * Id
           * @description The unique identifier of the team.
           */
          id: string;
          /**
           * Key
           * @description The unique key/slug for the team.
           */
          key: string;
          /**
           * Members
           * @description List of members belonging to this team. Each object in the list contains the member's id, name, and email.
           */
          members: unknown[];
          /**
           * Name
           * @description The name of the team.
           */
          name: string;
      }[];
      /**
       * Teams
       * @description All teams in the workspace, including their basic details and members.
       */
      teams: unknown[];
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
 * Type of LINEAR's LINEAR_GET_ATTACHMENTS tool input.
 */
type LINEAR_GET_ATTACHMENTS_INPUT = {
  /**
   * Attachment Id
   * @description The unique identifier of the specific attachment to download.
   */
  attachment_id?: string;
  /**
   * File Name
   * @description The desired name for the downloaded file, including its extension.
   */
  file_name?: string;
  /**
   * Issue Id
   * @description The unique identifier of the Linear issue from which the attachment will be downloaded.
   */
  issue_id?: string;
};

/**
 * Type of LINEAR's LINEAR_GET_ATTACHMENTS tool output.
 */
type LINEAR_GET_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description The downloaded attachment file, represented as a FileDownloadable object, which can be used to retrieve the file content.
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
 * Type of LINEAR's LINEAR_GET_CURRENT_USER tool input.
 */
type LINEAR_GET_CURRENT_USER_INPUT = object;

/**
 * Type of LINEAR's LINEAR_GET_CURRENT_USER tool output.
 */
type LINEAR_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User
       * @description Current authenticated user's details including id, name, email, displayName, active status, admin privileges, avatar URL, and timestamps.
       */
      user: {
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
 * Type of LINEAR's LINEAR_GET_CYCLES_BY_TEAM_ID tool input.
 */
type LINEAR_GET_CYCLES_BY_TEAM_ID_INPUT = {
  /**
   * Team Id
   * @description The team's unique identifier.
   */
  team_id?: string;
};

/**
 * Type of LINEAR's LINEAR_GET_CYCLES_BY_TEAM_ID tool output.
 */
type LINEAR_GET_CYCLES_BY_TEAM_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cycles
       * @description List of cycles retrieved for the team.
       */
      cycles: {
          /**
           * Created At
           * @description Cycle creation timestamp (ISO 8601).
           * @default null
           */
          createdAt: string | null;
          /**
           * Ends At
           * @description Cycle scheduled end timestamp (ISO 8601).
           * @default null
           */
          endsAt: string | null;
          /**
           * Id
           * @description The cycle's unique identifier.
           * @default null
           */
          id: string | null;
          /**
           * Issue Count History
           * @description Historical issue counts in the cycle.
           * @default null
           */
          issueCountHistory: number[] | null;
          /**
           * Name
           * @description Name of the cycle.
           * @default null
           */
          name: string | null;
          /**
           * Progress
           * @description Overall progress of the cycle (decimal value, 0.0 to 1.0).
           * @default null
           */
          progress: number | null;
          /**
           * Progress History
           * @description Historical progress values of the cycle.
           * @default null
           */
          progressHistory: number[] | null;
      }[];
      /** Items */
      items?: {
          /**
           * Created At
           * @description Cycle creation timestamp (ISO 8601).
           * @default null
           */
          createdAt: string | null;
          /**
           * Ends At
           * @description Cycle scheduled end timestamp (ISO 8601).
           * @default null
           */
          endsAt: string | null;
          /**
           * Id
           * @description The cycle's unique identifier.
           * @default null
           */
          id: string | null;
          /**
           * Issue Count History
           * @description Historical issue counts in the cycle.
           * @default null
           */
          issueCountHistory: number[] | null;
          /**
           * Name
           * @description Name of the cycle.
           * @default null
           */
          name: string | null;
          /**
           * Progress
           * @description Overall progress of the cycle (decimal value, 0.0 to 1.0).
           * @default null
           */
          progress: number | null;
          /**
           * Progress History
           * @description Historical progress values of the cycle.
           * @default null
           */
          progressHistory: number[] | null;
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
 * Type of LINEAR's LINEAR_GET_LINEAR_ISSUE tool input.
 */
type LINEAR_GET_LINEAR_ISSUE_INPUT = {
  /**
   * Issue Id
   * @description The unique identifier of the Linear issue.
   */
  issue_id?: string;
};

/**
 * Type of LINEAR's LINEAR_GET_LINEAR_ISSUE tool output.
 */
type LINEAR_GET_LINEAR_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Issue
       * @description Comprehensive details of the specified Linear issue, including its title, description, attachments (each with URL, title, ID, source), and comments (each with body, ID, URL, parent ID).
       */
      issue: {
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
 * Type of LINEAR's LINEAR_LIST_LINEAR_CYCLES tool input.
 */
type LINEAR_LIST_LINEAR_CYCLES_INPUT = object;

/**
 * Type of LINEAR's LINEAR_LIST_LINEAR_CYCLES tool output.
 */
type LINEAR_LIST_LINEAR_CYCLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cycles
       * @description List of cycle objects, each with detailed information about a cycle.
       */
      cycles: {
          /**
           * Created At
           * @description Timestamp (ISO 8601) when the cycle was created.
           * @default null
           */
          createdAt: string | null;
          /**
           * Description
           * @description Description or notes for the cycle.
           * @default null
           */
          description: string | null;
          /**
           * Ends At
           * @description Scheduled end timestamp (ISO 8601) for the cycle.
           * @default null
           */
          endsAt: string | null;
          /**
           * Id
           * @description Unique identifier for the cycle.
           */
          id: string;
          /**
           * Name
           * @description Name of the cycle.
           * @default null
           */
          name: string | null;
          /**
           * Number
           * @description Number of the cycle, often sequential within a team (float value).
           * @default null
           */
          number: number | null;
          /**
           * Progress
           * @description Cycle progress (float from 0.0 for 0% to 1.0 for 100%), representing completed work.
           * @default null
           */
          progress: number | null;
          /**
           * Team
           * @description Associated team details. Only the team `id` is provided; the team `name` will be `None`.
           * @default null
           */
          team: {
              /**
               * Id
               * @description Unique identifier of the team, if the cycle is associated with one.
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Name of the team; always `None` as this action only retrieves the team ID, not its name.
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
 * Type of LINEAR's LINEAR_LIST_LINEAR_ISSUES tool input.
 */
type LINEAR_LIST_LINEAR_ISSUES_INPUT = {
  /**
   * After
   * @description Cursor for pagination. Use the `endCursor` from the previous response's `page_info` to fetch the next set of issues.
   * @default null
   */
  after: string | null;
  /**
   * Assignee Id
   * @description ID of the user to filter issues by assignee. If provided, only issues assigned to this user will be returned.
   * @default null
   */
  assignee_id: string | null;
  /**
   * First
   * @description Number of issues to return.
   * @default 10
   */
  first: number;
  /**
   * Project Id
   * @description ID of the project to filter issues by. If provided, only issues belonging to this project will be returned.
   * @default null
   */
  project_id: string | null;
};

/**
 * Type of LINEAR's LINEAR_LIST_LINEAR_ISSUES tool output.
 */
type LINEAR_LIST_LINEAR_ISSUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Issues
       * @description Details for each issue, such as id, title, description, state, priority, assignee, and labels. If `project_id` was not specified in the request, each issue also includes project details.
       * @default []
       */
      issues: {
          [key: string]: unknown;
      }[];
      /**
       * Page Info
       * @description Pagination information, including `endCursor` and `hasNextPage`.
       * @default {}
       */
      page_info: {
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
 * Type of LINEAR's LINEAR_LIST_LINEAR_LABELS tool input.
 */
type LINEAR_LIST_LINEAR_LABELS_INPUT = {
  /**
   * Team Id
   * @description The unique identifier of the team for which to retrieve labels. This ID scopes the search to a specific team within Linear.
   */
  team_id?: string;
};

/**
 * Type of LINEAR's LINEAR_LIST_LINEAR_LABELS tool output.
 */
type LINEAR_LIST_LINEAR_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Items */
      items?: {
          /**
           * Color
           * @description The color of the label, represented as a hex color code (e.g., '#RRGGBB').
           */
          color: string;
          /**
           * Description
           * @description An optional, user-defined description providing more details about the label's purpose or usage.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier for the label.
           */
          id: string;
          /**
           * Name
           * @description The display name of the label.
           */
          name: string;
      }[];
      /**
       * Labels
       * @description A list of label objects, each containing details such as ID, name, color, and description.
       */
      labels: {
          /**
           * Color
           * @description The color of the label, represented as a hex color code (e.g., '#RRGGBB').
           */
          color: string;
          /**
           * Description
           * @description An optional, user-defined description providing more details about the label's purpose or usage.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier for the label.
           */
          id: string;
          /**
           * Name
           * @description The display name of the label.
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
 * Type of LINEAR's LINEAR_LIST_LINEAR_PROJECTS tool input.
 */
type LINEAR_LIST_LINEAR_PROJECTS_INPUT = object;

/**
 * Type of LINEAR's LINEAR_LIST_LINEAR_PROJECTS tool output.
 */
type LINEAR_LIST_LINEAR_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Items */
      items?: {
          /**
           * Id
           * @description The unique identifier for the project.
           */
          id: string;
          /**
           * Name
           * @description The human-readable name of the project.
           */
          name: string;
      }[];
      /**
       * Projects
       * @description The retrieved projects; empty if no projects are found.
       */
      projects: unknown[];
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
 * Type of LINEAR's LINEAR_LIST_LINEAR_STATES tool input.
 */
type LINEAR_LIST_LINEAR_STATES_INPUT = {
  /**
   * Team Id
   * @description Unique identifier of the team.
   */
  team_id?: string;
};

/**
 * Type of LINEAR's LINEAR_LIST_LINEAR_STATES tool output.
 */
type LINEAR_LIST_LINEAR_STATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Items */
      items?: {
          /**
           * Id
           * @description Unique identifier of the workflow state.
           */
          id: string;
          /**
           * Name
           * @description Name of the workflow state (e.g., 'Todo', 'In Progress', 'Done').
           */
          name: string;
      }[];
      /**
       * States
       * @description Workflow states retrieved for the team.
       */
      states: {
          /**
           * Id
           * @description Unique identifier of the workflow state.
           */
          id: string;
          /**
           * Name
           * @description Name of the workflow state (e.g., 'Todo', 'In Progress', 'Done').
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
 * Type of LINEAR's LINEAR_LIST_LINEAR_TEAMS tool input.
 */
type LINEAR_LIST_LINEAR_TEAMS_INPUT = {
  /**
   * Project Id
   * @description The unique identifier of a project. This ID is used to filter the list of projects associated with each retrieved team. If a team is not associated with this project ID, its 'projects' list in the response will be empty.
   */
  project_id?: string;
};

/**
 * Type of LINEAR's LINEAR_LIST_LINEAR_TEAMS tool output.
 */
type LINEAR_LIST_LINEAR_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Items */
      items?: {
          /**
           * Id
           * @description The unique identifier of the team.
           */
          id: string;
          /**
           * Members
           * @description List of members belonging to this team. Each object in the list typically contains the member's `id`, `name`, and `email`.
           */
          members: unknown[];
          /**
           * Name
           * @description The name of the team.
           */
          name: string;
          /**
           * Projects
           * @description Projects associated with this team, filtered by the request's `project_id`; each object contains the project `id`.
           */
          projects: unknown[];
      }[];
      /**
       * Teams
       * @description All teams, each including details, members, and associated projects filtered by the request's `project_id`.
       */
      teams: unknown[];
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
 * Type of LINEAR's LINEAR_LIST_LINEAR_USERS tool input.
 */
type LINEAR_LIST_LINEAR_USERS_INPUT = {
  /**
   * After
   * @description Cursor for pagination. Use the `endCursor` from the previous response's `page_info` to fetch the next set of users.
   * @default null
   */
  after: string | null;
  /**
   * First
   * @description Number of users to return.
   * @default 50
   */
  first: number;
};

/**
 * Type of LINEAR's LINEAR_LIST_LINEAR_USERS tool output.
 */
type LINEAR_LIST_LINEAR_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page Info
       * @description Pagination information, including `endCursor` and `hasNextPage`.
       * @default {}
       */
      page_info: {
          [key: string]: unknown;
      };
      /**
       * Users
       * @description List of users with their details including id, name, email, and active status.
       * @default []
       */
      users: {
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
 * Type of LINEAR's LINEAR_REMOVE_ISSUE_LABEL tool input.
 */
type LINEAR_REMOVE_ISSUE_LABEL_INPUT = {
  /**
   * Issue Id
   * @description Identifier of the Linear issue from which to remove the label.
   */
  issue_id?: string;
  /**
   * Label Id
   * @description Identifier of the label to remove. The operation is successful without change if this label isn't on the issue.
   */
  label_id?: string;
};

/**
 * Type of LINEAR's LINEAR_REMOVE_ISSUE_LABEL tool output.
 */
type LINEAR_REMOVE_ISSUE_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Issue
       * @description A dictionary representing the updated Linear issue, including its current list of labels after the operation.
       */
      issue: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description True if the API call completed without errors; does not imply the label was present and removed.
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
 * Type of LINEAR's LINEAR_RUN_QUERY_OR_MUTATION tool input.
 */
type LINEAR_RUN_QUERY_OR_MUTATION_INPUT = {
  /**
   * Query Or Mutation
   * @description A valid GraphQL query or mutation string. Use this for any Linear operation not covered by specific actions. Common use cases: get current user info, complex filtering, custom data retrieval, advanced mutations.
   */
  query_or_mutation?: string;
  /**
   * Variables
   * @description Variables for the GraphQL operation. Keys must match variable names defined in the query/mutation (without the '$' prefix). Use empty dict {} if no variables are needed. All variables must have values matching the expected GraphQL types (String, Int, Boolean, etc.).
   */
  variables?: {
      [key: string]: unknown;
  };
};

/**
 * Type of LINEAR's LINEAR_RUN_QUERY_OR_MUTATION tool output.
 */
type LINEAR_RUN_QUERY_OR_MUTATION_OUTPUT = {
  /**
   * Data
   * @description The 'data' field from the GraphQL JSON response, containing the results of the executed query or mutation. If the operation fails at the GraphQL level (e.g., validation error), this field might be absent or accompanied by an 'errors' field in the raw response, which would be handled by an exception.
   */
  data?: {
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
 * Type of LINEAR's LINEAR_UPDATE_ISSUE tool input.
 */
type LINEAR_UPDATE_ISSUE_INPUT = {
  /**
   * Assignee Id
   * @description Identifier of the user to assign to the issue.
   * @default null
   */
  assignee_id: string | null;
  /**
   * Description
   * @description New Markdown description for the issue.
   * @default null
   */
  description: string | null;
  /**
   * Due Date
   * @description New due date in 'YYYY,MM,DD,hh,mm,ss' format (e.g., '2024,10,27,12,58,00').
   * @default null
   */
  due_date: string | null;
  /**
   * Estimate
   * @description New time estimate in minutes.
   * @default null
   */
  estimate: number | null;
  /**
   * Issue Id
   * @description Identifier of the issue to update.
   */
  issue_id?: string;
  /**
   * Label Ids
   * @description List of label identifiers to set; replaces all existing labels. An empty list removes all labels.
   * @default null
   */
  label_ids: string[] | null;
  /**
   * Parent Id
   * @description Identifier of an existing issue to set as parent.
   * @default null
   */
  parent_id: string | null;
  /**
   * Priority
   * @description Priority: 0 (No), 1 (Urgent), 2 (High), 3 (Normal), 4 (Low).
   * @default null
   */
  priority: number | null;
  /**
   * Project Id
   * @description Identifier of the project to associate with the issue.
   * @default null
   */
  project_id: string | null;
  /**
   * State Id
   * @description Identifier of the new state (e.g., To Do, In Progress, Done).
   * @default null
   */
  state_id: string | null;
  /**
   * Team Id
   * @description Identifier of the team to associate with the issue.
   * @default null
   */
  team_id: string | null;
  /**
   * Title
   * @description New title for the issue.
   * @default null
   */
  title: string | null;
};

/**
 * Type of LINEAR's LINEAR_UPDATE_ISSUE tool output.
 */
type LINEAR_UPDATE_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Issue
       * @description Dictionary of the updated issue's attributes.
       */
      issue: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates if the update was successful.
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
 * Type map of all available tool input types for toolkit "LINEAR".
 */
export type LINEAR_TOOL_INPUTS = {
  CREATE_LINEAR_ATTACHMENT: LINEAR_CREATE_LINEAR_ATTACHMENT_INPUT
  CREATE_LINEAR_COMMENT: LINEAR_CREATE_LINEAR_COMMENT_INPUT
  CREATE_LINEAR_ISSUE: LINEAR_CREATE_LINEAR_ISSUE_INPUT
  CREATE_LINEAR_ISSUE_DETAILS: LINEAR_CREATE_LINEAR_ISSUE_DETAILS_INPUT
  CREATE_LINEAR_LABEL: LINEAR_CREATE_LINEAR_LABEL_INPUT
  DELETE_LINEAR_ISSUE: LINEAR_DELETE_LINEAR_ISSUE_INPUT
  GET_ALL_LINEAR_TEAMS: LINEAR_GET_ALL_LINEAR_TEAMS_INPUT
  GET_ATTACHMENTS: LINEAR_GET_ATTACHMENTS_INPUT
  GET_CURRENT_USER: LINEAR_GET_CURRENT_USER_INPUT
  GET_CYCLES_BY_TEAM_ID: LINEAR_GET_CYCLES_BY_TEAM_ID_INPUT
  GET_LINEAR_ISSUE: LINEAR_GET_LINEAR_ISSUE_INPUT
  LIST_LINEAR_CYCLES: LINEAR_LIST_LINEAR_CYCLES_INPUT
  LIST_LINEAR_ISSUES: LINEAR_LIST_LINEAR_ISSUES_INPUT
  LIST_LINEAR_LABELS: LINEAR_LIST_LINEAR_LABELS_INPUT
  LIST_LINEAR_PROJECTS: LINEAR_LIST_LINEAR_PROJECTS_INPUT
  LIST_LINEAR_STATES: LINEAR_LIST_LINEAR_STATES_INPUT
  LIST_LINEAR_TEAMS: LINEAR_LIST_LINEAR_TEAMS_INPUT
  LIST_LINEAR_USERS: LINEAR_LIST_LINEAR_USERS_INPUT
  REMOVE_ISSUE_LABEL: LINEAR_REMOVE_ISSUE_LABEL_INPUT
  RUN_QUERY_OR_MUTATION: LINEAR_RUN_QUERY_OR_MUTATION_INPUT
  UPDATE_ISSUE: LINEAR_UPDATE_ISSUE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LINEAR".
 */
export type LINEAR_TOOL_OUTPUTS = {
  CREATE_LINEAR_ATTACHMENT: LINEAR_CREATE_LINEAR_ATTACHMENT_OUTPUT
  CREATE_LINEAR_COMMENT: LINEAR_CREATE_LINEAR_COMMENT_OUTPUT
  CREATE_LINEAR_ISSUE: LINEAR_CREATE_LINEAR_ISSUE_OUTPUT
  CREATE_LINEAR_ISSUE_DETAILS: LINEAR_CREATE_LINEAR_ISSUE_DETAILS_OUTPUT
  CREATE_LINEAR_LABEL: LINEAR_CREATE_LINEAR_LABEL_OUTPUT
  DELETE_LINEAR_ISSUE: LINEAR_DELETE_LINEAR_ISSUE_OUTPUT
  GET_ALL_LINEAR_TEAMS: LINEAR_GET_ALL_LINEAR_TEAMS_OUTPUT
  GET_ATTACHMENTS: LINEAR_GET_ATTACHMENTS_OUTPUT
  GET_CURRENT_USER: LINEAR_GET_CURRENT_USER_OUTPUT
  GET_CYCLES_BY_TEAM_ID: LINEAR_GET_CYCLES_BY_TEAM_ID_OUTPUT
  GET_LINEAR_ISSUE: LINEAR_GET_LINEAR_ISSUE_OUTPUT
  LIST_LINEAR_CYCLES: LINEAR_LIST_LINEAR_CYCLES_OUTPUT
  LIST_LINEAR_ISSUES: LINEAR_LIST_LINEAR_ISSUES_OUTPUT
  LIST_LINEAR_LABELS: LINEAR_LIST_LINEAR_LABELS_OUTPUT
  LIST_LINEAR_PROJECTS: LINEAR_LIST_LINEAR_PROJECTS_OUTPUT
  LIST_LINEAR_STATES: LINEAR_LIST_LINEAR_STATES_OUTPUT
  LIST_LINEAR_TEAMS: LINEAR_LIST_LINEAR_TEAMS_OUTPUT
  LIST_LINEAR_USERS: LINEAR_LIST_LINEAR_USERS_OUTPUT
  REMOVE_ISSUE_LABEL: LINEAR_REMOVE_ISSUE_LABEL_OUTPUT
  RUN_QUERY_OR_MUTATION: LINEAR_RUN_QUERY_OR_MUTATION_OUTPUT
  UPDATE_ISSUE: LINEAR_UPDATE_ISSUE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of LINEAR's COMMENT_EVENT_TRIGGER trigger payload.
 */
type LINEAR_COMMENT_EVENT_TRIGGER_PAYLOAD = {
  /**
   * Action
   * @description Action that triggered the webhook
   */
  action?: string;
  /**
   * Data
   * @description Data of the issue
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Type
   * @description Type of the issue
   */
  type?: string;
  /**
   * Url
   * @description URL of the issue
   */
  url?: string;
};

/**
 * Type of LINEAR's ISSUE_CREATED_TRIGGER trigger payload.
 */
type LINEAR_ISSUE_CREATED_TRIGGER_PAYLOAD = {
  /**
   * Action
   * @description Action that triggered the webhook
   */
  action?: string;
  /**
   * Data
   * @description Data of the issue
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Type
   * @description Type of the issue
   */
  type?: string;
  /**
   * Url
   * @description URL of the issue
   */
  url?: string;
};

/**
 * Type of LINEAR's ISSUE_UPDATED_TRIGGER trigger payload.
 */
type LINEAR_ISSUE_UPDATED_TRIGGER_PAYLOAD = {
  /**
   * Action
   * @description Action that triggered the webhook
   */
  action?: string;
  /**
   * Data
   * @description Data of the issue
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Type
   * @description Type of the issue
   */
  type?: string;
  /**
   * Url
   * @description URL of the issue
   */
  url?: string;
};

/**
 * Map of Composio's LINEAR toolkit.
 */
export const LINEAR = {
  slug: "linear",
  tools: {
    /**
     * Creates a new attachment and associates it with a specific, existing linear issue.
     */
    CREATE_LINEAR_ATTACHMENT: "LINEAR_CREATE_LINEAR_ATTACHMENT",
    /**
     * Creates a new comment on a specified linear issue.
     */
    CREATE_LINEAR_COMMENT: "LINEAR_CREATE_LINEAR_COMMENT",
    /**
     * Creates a new issue in a specified linear project and team, requiring a title and description, and allowing for optional properties like assignee, state, priority, cycle, and due date.
     */
    CREATE_LINEAR_ISSUE: "LINEAR_CREATE_LINEAR_ISSUE",
    /**
     * Fetches a linear team's default issue estimate and state, useful for pre-filling new issue forms.
     */
    CREATE_LINEAR_ISSUE_DETAILS: "LINEAR_CREATE_LINEAR_ISSUE_DETAILS",
    /**
     * Creates a new label in linear for a specified team, used to categorize and organize issues.
     */
    CREATE_LINEAR_LABEL: "LINEAR_CREATE_LINEAR_LABEL",
    /**
     * Archives an existing linear issue by its id, which is linear's standard way of deleting issues; the operation is idempotent.
     */
    DELETE_LINEAR_ISSUE: "LINEAR_DELETE_LINEAR_ISSUE",
    /**
     * Retrieves all teams from the linear workspace without requiring any parameters.
     */
    GET_ALL_LINEAR_TEAMS: "LINEAR_GET_ALL_LINEAR_TEAMS",
    /**
     * Downloads a specific attachment from a linear issue; the `file name` must include the correct file extension.
     */
    GET_ATTACHMENTS: "LINEAR_GET_ATTACHMENTS",
    /**
     * Gets the currently authenticated user's id, name, email, and other profile information. use this to identify 'me' in other linear operations that require user id filtering.
     */
    GET_CURRENT_USER: "LINEAR_GET_CURRENT_USER",
    /**
     * Retrieves all cycles for a specified linear team id; cycles are time-boxed work periods (like sprints) and the team id must correspond to an existing team.
     */
    GET_CYCLES_BY_TEAM_ID: "LINEAR_GET_CYCLES_BY_TEAM_ID",
    /**
     * Retrieves an existing linear issue's comprehensive details, including title, description, attachments, and comments.
     */
    GET_LINEAR_ISSUE: "LINEAR_GET_LINEAR_ISSUE",
    /**
     * Retrieves all cycles (time-boxed iterations for work) from the linear account; no filters are applied.
     */
    LIST_LINEAR_CYCLES: "LINEAR_LIST_LINEAR_CYCLES",
    /**
     * Lists non-archived linear issues; if project id is not specified, issues from all accessible projects are returned. can also filter by assignee id to get issues assigned to a specific user.
     */
    LIST_LINEAR_ISSUES: "LINEAR_LIST_LINEAR_ISSUES",
    /**
     * Retrieves all labels associated with a given team id in linear; the team id must refer to an existing team.
     */
    LIST_LINEAR_LABELS: "LINEAR_LIST_LINEAR_LABELS",
    /**
     * Retrieves all projects from the linear account.
     */
    LIST_LINEAR_PROJECTS: "LINEAR_LIST_LINEAR_PROJECTS",
    /**
     * Retrieves all workflow states for a specified team in linear, representing the stages an issue progresses through in that team's workflow.
     */
    LIST_LINEAR_STATES: "LINEAR_LIST_LINEAR_STATES",
    /**
     * Retrieves all teams, including their members, and filters each team's associated projects by the provided 'project id'.
     */
    LIST_LINEAR_TEAMS: "LINEAR_LIST_LINEAR_TEAMS",
    /**
     * Lists all users in the linear workspace with their ids, names, emails, and active status.
     */
    LIST_LINEAR_USERS: "LINEAR_LIST_LINEAR_USERS",
    /**
     * Removes a specified label from an existing linear issue using their ids; successful even if the label isn't on the issue.
     */
    REMOVE_ISSUE_LABEL: "LINEAR_REMOVE_ISSUE_LABEL",
    /**
     * Wildcard action that executes any graphql query or mutation against the linear api. use this as a fallback when no specific action exists for your use case, or when you need to perform complex operations not covered by other linear actions. supports full graphql capabilities including custom queries, mutations, and advanced filtering.
     */
    RUN_QUERY_OR_MUTATION: "LINEAR_RUN_QUERY_OR_MUTATION",
    /**
     * Updates an existing linear issue using its `issue id`; requires at least one other attribute for modification, and all provided entity ids (for state, assignee, labels, etc.) must be valid.
     */
    UPDATE_ISSUE: "LINEAR_UPDATE_ISSUE",
  },
  triggerTypes: {
    /**
     * Triggered when a comment is received.
     */
    COMMENT_EVENT_TRIGGER: "LINEAR_COMMENT_EVENT_TRIGGER",
    /**
     * Triggered when a new issue is created.
     */
    ISSUE_CREATED_TRIGGER: "LINEAR_ISSUE_CREATED_TRIGGER",
    /**
     * Triggered when an issue is updated. For example labels are changed, issue status is changed, etc.
     */
    ISSUE_UPDATED_TRIGGER: "LINEAR_ISSUE_UPDATED_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "LINEAR".
 */
export type LINEAR_TRIGGER_PAYLOADS = {
  COMMENT_EVENT_TRIGGER: LINEAR_COMMENT_EVENT_TRIGGER_PAYLOAD
  ISSUE_CREATED_TRIGGER: LINEAR_ISSUE_CREATED_TRIGGER_PAYLOAD
  ISSUE_UPDATED_TRIGGER: LINEAR_ISSUE_UPDATED_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "LINEAR".
 */
export type LINEAR_TRIGGER_EVENTS = {
  COMMENT_EVENT_TRIGGER: TriggerEvent<LINEAR_COMMENT_EVENT_TRIGGER_PAYLOAD>
  ISSUE_CREATED_TRIGGER: TriggerEvent<LINEAR_ISSUE_CREATED_TRIGGER_PAYLOAD>
  ISSUE_UPDATED_TRIGGER: TriggerEvent<LINEAR_ISSUE_UPDATED_TRIGGER_PAYLOAD>
}
