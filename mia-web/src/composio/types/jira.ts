import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of JIRA's JIRA_ADD_ATTACHMENT tool input.
 */
type JIRA_ADD_ATTACHMENT_INPUT = {
  /**
   * FileUploadable
   * @description File to be attached to the Jira issue. Supports various formats including images, documents, and other file types.
   */
  file_to_upload?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Issue Key
   * @description The ID or key of the Jira issue to which the attachment will be added.
   */
  issue_key?: string;
};

/**
 * Type of JIRA's JIRA_ADD_ATTACHMENT tool output.
 */
type JIRA_ADD_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachments
       * @description A list containing details of the attachment(s) successfully created. In standard operation, this list will contain one entry for the newly added attachment.
       */
      attachments: {
          /**
           * Filename
           * @description The name of the attached file as it appears in Jira.
           */
          filename: string;
          /**
           * Id
           * @description The unique identifier for the attachment record in Jira.
           */
          id: string;
          /**
           * Mime Type
           * @description The MIME type of the attached file, indicating its content type (e.g., 'image/png', 'application/pdf').
           */
          mimeType: string;
          /**
           * Self
           * @description The API URL providing direct access to this attachment's details.
           */
          self: string;
          /**
           * Size
           * @description The size of the attached file in bytes.
           */
          size: number;
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
 * Type of JIRA's JIRA_ADD_COMMENT tool input.
 */
type JIRA_ADD_COMMENT_INPUT = {
  /**
   * Comment
   * @description The comment text. Supports Markdown formatting including **bold**, *italic*, `code`, links [text](url), lists, and @mentions.
   */
  comment?: string;
  /**
   * Issue Id Or Key
   * @description The ID or key of the issue to add the comment to.
   */
  issue_id_or_key?: string;
  /**
   * Visibility Type
   * @description Specifies the type of visibility restriction for the comment. Valid values are 'group' or 'role'. If this field is used, `visibility_value` must also be provided.
   * @default null
   */
  visibility_type: string | null;
  /**
   * Visibility Value
   * @description Name of the group or role that can view the comment (required if visibility_type is set).
   * @default null
   */
  visibility_value: string | null;
};

/**
 * Type of JIRA's JIRA_ADD_COMMENT tool output.
 */
type JIRA_ADD_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author Display Name
       * @description Display name of the comment author.
       */
      author_display_name: string;
      /**
       * Browser Url
       * @description Direct browser URL to view the issue with the new comment.
       */
      browser_url: string;
      /**
       * Comment Text
       * @description The comment text that was added.
       */
      comment_text: string;
      /**
       * Created
       * @description Date and time when the comment was created.
       */
      created: string;
      /**
       * Id
       * @description Unique ID of the created comment.
       */
      id: string;
      /**
       * Issue Key
       * @description Key of the issue the comment was added to.
       */
      issue_key: string;
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
 * Type of JIRA's JIRA_ADD_WATCHER_TO_ISSUE tool input.
 */
type JIRA_ADD_WATCHER_TO_ISSUE_INPUT = {
  /**
   * Account Id
   * @description The Atlassian Account ID (accountId) of the user to be added as a watcher. Important: Usernames cannot be used due to Jira API privacy changes; the accountId is required.
   */
  account_id?: string;
  /**
   * Issue Id Or Key
   * @description The ID (a numerical identifier, e.g., '10000') or key (a project-prefixed string, e.g., 'PROJ-123') of the Jira issue to which the watcher will be added.
   */
  issue_id_or_key?: string;
};

/**
 * Type of JIRA's JIRA_ADD_WATCHER_TO_ISSUE tool output.
 */
type JIRA_ADD_WATCHER_TO_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the user was successfully added as a watcher to the issue. Always true if the operation succeeds (API returns 204 No Content), otherwise an error is raised by the action.
       * @default true
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
 * Type of JIRA's JIRA_ASSIGN_ISSUE tool input.
 */
type JIRA_ASSIGN_ISSUE_INPUT = {
  /**
   * Account Id
   * @description The Atlassian Account ID of the user to assign the issue to. Use `'-1'` (as a string) to assign to the project's default assignee. Provide `None` (Python null, which translates to JSON null) or omit this field to unassign the issue. Takes precedence over assignee_name if provided.
   * @default null
   */
  account_id: string | null;
  /**
   * Assignee Name
   * @description Name of the user to assign the issue to. Can be either an email address (e.g., 'john@company.com') or display name (e.g., 'John Doe'). The system will auto-detect the type and search accordingly. Ignored if account_id is also provided.
   * @default null
   */
  assignee_name: string | null;
  /**
   * Issue Id Or Key
   * @description The ID or key of the issue to be assigned.
   */
  issue_id_or_key?: string;
};

/**
 * Type of JIRA's JIRA_ASSIGN_ISSUE tool output.
 */
type JIRA_ASSIGN_ISSUE_OUTPUT = {
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
 * Type of JIRA's JIRA_BULK_CREATE_ISSUE tool input.
 */
type JIRA_BULK_CREATE_ISSUE_INPUT = {
  /**
   * Issues
   * @description List of issues to be created (1 to 50 per request). Each issue definition follows the same structure as the single create issue action.
   */
  issues?: {
      /**
       * Assignee
       * @description Account ID of the user to assign the issue to. If unspecified, the project's default assignee may be used. Takes precedence over assignee_name if both are provided.
       * @default null
       */
      assignee: string | null;
      /**
       * Assignee Name
       * @description Name or email of the user to assign the issue to. Can be either an email address (e.g., 'john@company.com') or display name (e.g., 'John Doe'). The system will auto-detect the type and search accordingly. Ignored if assignee (account ID) is also provided.
       * @default null
       */
      assignee_name: string | null;
      /**
       * Components
       * @description List of component IDs (e.g., '10000'); components must already exist in the project.
       * @default null
       */
      components: string[] | null;
      /**
       * Description
       * @description Detailed description of the issue. Supports Markdown formatting including **bold**, *italic*, `code`, links [text](url), and lists.
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description Expected resolution date in YYYY-MM-DD format.
       * @default null
       */
      due_date: string | null;
      /**
       * Environment
       * @description Environment details. Supports Markdown formatting including **bold**, *italic*, `code`, links [text](url), and lists.
       * @default null
       */
      environment: string | null;
      /**
       * Fix Versions
       * @description List of IDs for versions where the issue is/will be fixed; versions must exist in the project.
       * @default null
       */
      fix_versions: string[] | null;
      /**
       * Issue Type
       * @description Type of the issue (e.g., 'Bug', 'Task'); must be a valid type name for the project and is case-sensitive. Defaults to 'Task'.
       * @default Task
       */
      issue_type: string;
      /**
       * Labels
       * @description List of labels to categorize the issue; new labels are created if they don't exist.
       * @default null
       */
      labels: string[] | null;
      /**
       * Priority
       * @description Priority level for the issue. Can be either a priority ID (e.g., '1', '2') or priority name (e.g., 'High', 'Medium', 'Low'). Defaults to 'Medium' if not specified.
       * @default null
       */
      priority: string | null;
      /**
       * Project Key
       * @description Key of the Jira project (e.g., 'PROJ').
       */
      project_key: string;
      /**
       * Reporter
       * @description Account ID of the user reporting the issue. Defaults to the API request user if unspecified.
       * @default null
       */
      reporter: string | null;
      /**
       * Sprint Id
       * @description ID of the sprint to assign this issue to. The issue will be added to the specified sprint if provided.
       * @default null
       */
      sprint_id: number | null;
      /**
       * Summary
       * @description Brief, descriptive title for the issue.
       */
      summary: string;
      /**
       * Versions
       * @description List of IDs for versions affected by this issue; versions must exist in the project.
       * @default null
       */
      versions: string[] | null;
  }[];
};

/**
 * Type of JIRA's JIRA_BULK_CREATE_ISSUE tool output.
 */
type JIRA_BULK_CREATE_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description A list of errors for issues that failed to create, with specific error messages from Jira.
       * @default []
       */
      errors: {
          /**
           * Details
           * @description Additional error details from Jira API response, if available.
           * @default null
           */
          details: {
              [key: string]: unknown;
          } | null;
          /**
           * Error Messages
           * @description List of specific error messages explaining why the issue creation failed.
           */
          error_messages: string[];
          /**
           * Issue Index
           * @description The index (starting from 0) of the issue in the original request that failed to create.
           */
          issue_index: number;
      }[];
      /**
       * Issues
       * @description A list of successfully created issues with their details.
       */
      issues: {
          /**
           * Browser Url
           * @description Direct browser URL to view the created issue in the Jira web interface.
           */
          browser_url: string;
          /**
           * Id
           * @description The unique identifier (ID) of the newly created Jira issue.
           */
          id: string;
          /**
           * Key
           * @description The human-readable key of the newly created Jira issue (e.g., 'PROJECT-123').
           */
          key: string;
          /**
           * Url
           * @description The REST API URL pointing to the newly created Jira issue.
           */
          url: string;
      }[];
      /**
       * Total Created
       * @description Total number of issues successfully created.
       */
      total_created: number;
      /**
       * Total Failed
       * @description Total number of issues that failed to create.
       */
      total_failed: number;
      /**
       * Total Requested
       * @description Total number of issues requested to be created.
       */
      total_requested: number;
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
 * Type of JIRA's JIRA_CREATE_ISSUE tool input.
 */
type JIRA_CREATE_ISSUE_INPUT = {
  /**
   * Assignee
   * @description Account ID of the user to assign the issue to. If unspecified, the project's default assignee may be used. Takes precedence over assignee_name if both are provided.
   * @default null
   */
  assignee: string | null;
  /**
   * Assignee Name
   * @description Name or email of the user to assign the issue to. Can be either an email address (e.g., 'john@company.com') or display name (e.g., 'John Doe'). The system will auto-detect the type and search accordingly. Ignored if assignee (account ID) is also provided.
   * @default null
   */
  assignee_name: string | null;
  /**
   * Components
   * @description List of component IDs (e.g., '10000'); components must already exist in the project.
   * @default null
   */
  components: string[] | null;
  /**
   * Description
   * @description Detailed description of the issue. Supports Markdown formatting including **bold**, *italic*, `code`, links [text](url), and lists.
   * @default null
   */
  description: string | null;
  /**
   * Due Date
   * @description Expected resolution date in YYYY-MM-DD format.
   * @default null
   */
  due_date: string | null;
  /**
   * Environment
   * @description Environment details. Supports Markdown formatting including **bold**, *italic*, `code`, links [text](url), and lists.
   * @default null
   */
  environment: string | null;
  /**
   * Fix Versions
   * @description List of IDs for versions where the issue is/will be fixed; versions must exist in the project.
   * @default null
   */
  fix_versions: string[] | null;
  /**
   * Issue Type
   * @description Type of the issue (e.g., 'Bug', 'Task'); must be a valid type name for the project and is case-sensitive. Defaults to 'Task'.
   * @default Task
   */
  issue_type: string;
  /**
   * Labels
   * @description List of labels to categorize the issue; new labels are created if they don't exist.
   * @default null
   */
  labels: string[] | null;
  /**
   * Priority
   * @description Priority level for the issue. Can be either a priority ID (e.g., '1', '2') or priority name (e.g., 'High', 'Medium', 'Low'). Only set if the priority field is available on the project's create screen.
   * @default null
   */
  priority: string | null;
  /**
   * Project Key
   * @description Key of the Jira project (e.g., 'PROJ').
   */
  project_key?: string;
  /**
   * Reporter
   * @description Account ID of the user reporting the issue. Defaults to the API request user if unspecified.
   * @default null
   */
  reporter: string | null;
  /**
   * Sprint Id
   * @description ID of the sprint to assign this issue to. The issue will be added to the specified sprint if provided.
   * @default null
   */
  sprint_id: number | null;
  /**
   * Summary
   * @description Brief, descriptive title for the issue.
   */
  summary?: string;
  /**
   * Versions
   * @description List of IDs for versions affected by this issue; versions must exist in the project.
   * @default null
   */
  versions: string[] | null;
};

/**
 * Type of JIRA's JIRA_CREATE_ISSUE tool output.
 */
type JIRA_CREATE_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Browser Url
       * @description Direct browser URL to view the created issue in the Jira web interface.
       */
      browser_url: string;
      /**
       * Id
       * @description Unique ID of the created Jira issue.
       */
      id: string;
      /**
       * Key
       * @description Human-readable key of the created issue (e.g., 'PROJ-123').
       */
      key: string;
      /**
       * Self
       * @description Direct API URL to access the created issue via REST API.
       */
      self: string;
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
 * Type of JIRA's JIRA_CREATE_ISSUE_LINK tool input.
 */
type JIRA_CREATE_ISSUE_LINK_INPUT = {
  /**
   * Comment
   * @description An optional textual comment to add to the created issue link, providing additional context.
   * @default null
   */
  comment: string | null;
  /**
   * Inward Issue Key
   * @description The key of the issue that initiates the link relationship (the 'source' issue). For example, if creating a 'Blocks' link from Issue A to Issue B, Issue A is the inward issue.
   */
  inward_issue_key?: string;
  /**
   * Link Type
   * @description The specific type of relationship to establish between the issues (e.g., 'Blocks', 'Relates to', 'Duplicates').
   */
  link_type?: string;
  /**
   * Outward Issue Key
   * @description The key of the issue that is the target of the link relationship (the 'destination' issue). For example, if creating a 'Blocks' link from Issue A to Issue B, Issue B is the outward issue.
   */
  outward_issue_key?: string;
};

/**
 * Type of JIRA's JIRA_CREATE_ISSUE_LINK tool output.
 */
type JIRA_CREATE_ISSUE_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Inward Issue Browser Url
       * @description Direct browser URL to view the inward issue in Jira.
       */
      inward_issue_browser_url: string;
      /**
       * Inward Issue Key
       * @description Key of the inward issue.
       */
      inward_issue_key: string;
      /**
       * Link Type
       * @description Type of link that was created.
       */
      link_type: string;
      /**
       * Outward Issue Browser Url
       * @description Direct browser URL to view the outward issue in Jira.
       */
      outward_issue_browser_url: string;
      /**
       * Outward Issue Key
       * @description Key of the outward issue.
       */
      outward_issue_key: string;
      /**
       * Success
       * @description Whether the link was created successfully.
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
 * Type of JIRA's JIRA_CREATE_PROJECT tool input.
 */
type JIRA_CREATE_PROJECT_INPUT = {
  /**
   * Assignee Type
   * @description Default assignee for new issues: 'PROJECT_LEAD' (assigns to project lead) or 'UNASSIGNED' (issues remain unassigned).
   * @default null
   * @enum {string|null}
   */
  assignee_type: "PROJECT_LEAD" | "UNASSIGNED" | null;
  /**
   * Avatar Id
   * @description Optional ID of an existing avatar for the project.
   * @default null
   */
  avatar_id: number | null;
  /**
   * Category Id
   * @description Optional ID of an existing project category.
   * @default null
   */
  category_id: number | null;
  /**
   * Description
   * @description Optional detailed textual description of the project.
   * @default null
   */
  description: string | null;
  /**
   * Issue Security Scheme
   * @description Optional ID of an existing issue security scheme.
   * @default null
   */
  issue_security_scheme: number | null;
  /**
   * Key
   * @description Unique key for the project. Must be unique across all Jira projects.
   */
  key?: string;
  /**
   * Lead Account Id
   * @description Atlassian Account ID (not username or email) of the project lead.
   */
  lead_account_id?: string;
  /**
   * Name
   * @description Human-readable name for the project.
   */
  name?: string;
  /**
   * Notification Scheme
   * @description Optional ID of an existing notification scheme.
   * @default null
   */
  notification_scheme: number | null;
  /**
   * Permission Scheme
   * @description Optional ID of an existing permission scheme.
   * @default null
   */
  permission_scheme: number | null;
  /**
   * Project Template Key
   * @description Key of the project template, compatible with 'project_type_key'. Consult Jira documentation for available template keys for the chosen project type and Jira version.
   */
  project_template_key?: string;
  /**
   * Project Type Key
   * @description Type of project: 'business' for Jira Core type projects or 'software' for Jira Software type projects.
   * @enum {string}
   */
  project_type_key?: "business" | "software";
  /**
   * Url
   * @description Optional URL for the project, like a Confluence space link or external website.
   * @default null
   */
  url: string | null;
};

/**
 * Type of JIRA's JIRA_CREATE_PROJECT tool output.
 */
type JIRA_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique numerical ID of the created project, assigned by Jira.
       */
      id: string;
      /**
       * Key
       * @description Unique key of the created project.
       */
      key: string;
      /**
       * Self
       * @description API URL to retrieve full details of the created project.
       */
      self: string;
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
 * Type of JIRA's JIRA_CREATE_SPRINT tool input.
 */
type JIRA_CREATE_SPRINT_INPUT = {
  /**
   * End Date
   * @description Intended end date and time for the sprint (ISO 8601 format).
   * @default null
   */
  end_date: string | null;
  /**
   * Goal
   * @description Primary objective or goal for the sprint.
   * @default null
   */
  goal: string | null;
  /**
   * Name
   * @description Name for the new sprint.
   */
  name?: string;
  /**
   * Origin Board Id
   * @description Identifier of the Jira board for the new sprint.
   */
  origin_board_id?: number;
  /**
   * Start Date
   * @description Intended start date and time for the sprint (ISO 8601 format).
   * @default null
   */
  start_date: string | null;
};

/**
 * Type of JIRA's JIRA_CREATE_SPRINT tool output.
 */
type JIRA_CREATE_SPRINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * End Date
       * @description End date and time of the sprint (ISO 8601 format), if specified during creation.
       * @default null
       */
      endDate: string | null;
      /**
       * Goal
       * @description Goal or objective for the sprint, if specified during creation.
       * @default null
       */
      goal: string | null;
      /**
       * Id
       * @description Unique identifier of the newly created sprint.
       */
      id: number;
      /**
       * Name
       * @description Name assigned to the newly created sprint.
       */
      name: string;
      /**
       * Origin Board Id
       * @description Identifier of the Jira board to which the newly created sprint belongs.
       */
      originBoardId: number;
      /**
       * Self
       * @description API URL providing direct access to the details of the created sprint.
       */
      self: string;
      /**
       * Start Date
       * @description Start date and time of the sprint (ISO 8601 format), if specified during creation.
       * @default null
       */
      startDate: string | null;
      /**
       * State
       * @description Lifecycle state of the created sprint (e.g., 'future', 'active', 'closed'); typically 'future' upon creation.
       */
      state: string;
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
 * Type of JIRA's JIRA_CREATE_VERSION tool input.
 */
type JIRA_CREATE_VERSION_INPUT = {
  /**
   * Archived
   * @description Indicates if the version is marked as archived.
   * @default false
   */
  archived: boolean | null;
  /**
   * Description
   * @description Textual description for the version, providing more context about its purpose or content.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name for the new version. It is recommended that version names be unique within a project.
   */
  name?: string;
  /**
   * Project Id
   * @description Numeric ID of the Jira project to which this version will be added. The project must exist.
   */
  projectId?: number;
  /**
   * Release Date
   * @description Release date for the version (YYYY-MM-DD format). Relevant if the version is marked as released or has a planned release.
   * @default null
   */
  releaseDate: string | null;
  /**
   * Released
   * @description Indicates if the version is marked as released.
   * @default false
   */
  released: boolean | null;
  /**
   * Start Date
   * @description Start date for work on the version (YYYY-MM-DD format).
   * @default null
   */
  startDate: string | null;
};

/**
 * Type of JIRA's JIRA_CREATE_VERSION tool output.
 */
type JIRA_CREATE_VERSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Indicates if the version is marked as archived.
       */
      archived: boolean;
      /**
       * Description
       * @description Description of the version, if provided.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier (ID) of the version, automatically generated by Jira.
       */
      id: string;
      /**
       * Name
       * @description Name assigned to the version.
       */
      name: string;
      /**
       * Project Id
       * @description Numeric ID of the project to which this version belongs.
       */
      projectId: number;
      /**
       * Release Date
       * @description Release date of the version (YYYY-MM-DD format), if set.
       * @default null
       */
      releaseDate: string | null;
      /**
       * Released
       * @description Indicates if the version is marked as released.
       */
      released: boolean;
      /**
       * Self
       * @description Direct API URL to access this version resource.
       */
      self: string;
      /**
       * Start Date
       * @description Start date of the version (YYYY-MM-DD format), if set.
       * @default null
       */
      startDate: string | null;
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
 * Type of JIRA's JIRA_DELETE_COMMENT tool input.
 */
type JIRA_DELETE_COMMENT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the comment to be deleted (e.g., '10001').
   */
  id?: string;
  /**
   * Issue Id Or Key
   * @description The ID (e.g., '10000') or key (e.g., 'PROJ-123') of the Jira issue from which the comment will be deleted.
   */
  issueIdOrKey?: string;
};

/**
 * Type of JIRA's JIRA_DELETE_COMMENT tool output.
 */
type JIRA_DELETE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message for the delete operation.
       * @default
       */
      message: string;
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
 * Type of JIRA's JIRA_DELETE_ISSUE tool input.
 */
type JIRA_DELETE_ISSUE_INPUT = {
  /**
   * Delete Subtasks
   * @description If true, the issue's subtasks are also deleted. If false and the issue has subtasks, the deletion will fail.
   * @default false
   */
  delete_subtasks: boolean | null;
  /**
   * Issue Id Or Key
   * @description The ID or key of the issue to delete.
   */
  issue_id_or_key?: string;
};

/**
 * Type of JIRA's JIRA_DELETE_ISSUE tool output.
 */
type JIRA_DELETE_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the issue was successfully deleted.
       * @default true
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
 * Type of JIRA's JIRA_DELETE_VERSION tool input.
 */
type JIRA_DELETE_VERSION_INPUT = {
  /**
   * Move Affected Issues To
   * @description The ID of an alternative version to which issues with the deleted version as their affected version will be moved. If unspecified or null, these issues will remain unassigned from an affected version.
   * @default null
   */
  move_affected_issues_to: string | null;
  /**
   * Move Fix Issues To
   * @description The ID of an alternative version to which issues with the deleted version as their fix version will be moved. If unspecified or null, these issues will remain unassigned from a fix version.
   * @default null
   */
  move_fix_issues_to: string | null;
  /**
   * Version Id
   * @description The unique identifier of the version to be deleted.
   */
  version_id?: string;
};

/**
 * Type of JIRA's JIRA_DELETE_VERSION tool output.
 */
type JIRA_DELETE_VERSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the version was successfully deleted.
       * @default true
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
 * Type of JIRA's JIRA_DELETE_WORKLOG tool input.
 */
type JIRA_DELETE_WORKLOG_INPUT = {
  /**
   * Adjust Estimate
   * @description How to update the issue's remaining estimate: 'new' (set to `new_estimate`), 'leave' (unchanged), 'manual' (reduce by `increase_by`), or 'auto' (reduce by deleted worklog time).
   * @default auto
   */
  adjust_estimate: string | null;
  /**
   * Increase By
   * @description Amount to increase the remaining estimate if `adjust_estimate` is 'manual' (e.g., '1h 30m', '5d').
   * @default null
   */
  increase_by: string | null;
  /**
   * Issue Id Or Key
   * @description The ID or key of the Jira issue from which the worklog will be deleted.
   */
  issue_id_or_key?: string;
  /**
   * New Estimate
   * @description Value for the new remaining estimate if `adjust_estimate` is 'new' (e.g., '2h', '3d 4h').
   * @default null
   */
  new_estimate: string | null;
  /**
   * Notify Users
   * @description If users watching the issue should be notified by email about the worklog deletion.
   * @default true
   */
  notify_users: boolean | null;
  /**
   * Override Editable Flag
   * @description If true, allows deletion of the worklog even if the issue is in a closed status, potentially bypassing workflow restrictions.
   * @default false
   */
  override_editable_flag: boolean | null;
  /**
   * Worklog Id
   * @description The ID of the specific worklog entry to be deleted from the issue.
   */
  worklog_id?: string;
};

/**
 * Type of JIRA's JIRA_DELETE_WORKLOG tool output.
 */
type JIRA_DELETE_WORKLOG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the worklog was successfully deleted.
       * @default true
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
 * Type of JIRA's JIRA_EDIT_ISSUE tool input.
 */
type JIRA_EDIT_ISSUE_INPUT = {
  /**
   * Assignee
   * @description User to assign the issue to. Can be either an account ID (e.g., '5b10a2844c20165700ede21g') or name/email (e.g., 'john@company.com', 'John Doe'). The system will auto-detect the type and search accordingly. Use null to unassign.
   * @default null
   */
  assignee: string | null;
  /**
   * Description
   * @description Detailed description of the issue. Supports Markdown formatting including **bold**, *italic*, `code`, links [text](url), and lists.
   * @default null
   */
  description: string | null;
  /**
   * Due Date
   * @description Expected resolution date in YYYY-MM-DD format. Use null to remove due date.
   * @default null
   */
  due_date: string | null;
  /**
   * Fields
   * @description Dictionary of fields for direct updates (e.g., summary, description). See Jira's 'edit issue metadata' for available fields. Provide complex data as a JSON string. Use `update` for more complex operations like list modifications.
   * @default null
   */
  fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Issue Id Or Key
   * @description ID or key of the Jira issue to be edited.
   */
  issue_id_or_key?: string;
  /**
   * Labels
   * @description List of labels to set for the issue (replaces existing labels). New labels are created if they don't exist.
   * @default null
   */
  labels: string[] | null;
  /**
   * Notify Users
   * @description If true, sends notification email to watchers. Setting to `False` requires admin or project admin permissions.
   * @default true
   */
  notify_users: boolean;
  /**
   * Override Editable Flag
   * @description If true, bypasses editable flag restrictions. Requires admin permissions.
   * @default false
   */
  override_editable_flag: boolean;
  /**
   * Override Screen Security
   * @description If true, bypasses screen security restrictions. Requires admin permissions.
   * @default false
   */
  override_screen_security: boolean;
  /**
   * Priority Id Or Name
   * @description Priority level for the issue. Can be either a priority ID (e.g., '1', '2') or priority name (e.g., 'High', 'Medium', 'Low').
   * @default null
   */
  priority_id_or_name: string | null;
  /**
   * Return Issue
   * @description If true, response includes full updated issue details; if false, response is minimal.
   * @default false
   */
  return_issue: boolean;
  /**
   * Sprint Id Or Name
   * @description Sprint to assign this issue to. Can be either a sprint ID (e.g., '123', '456') or sprint name (e.g., 'Sprint 1', 'Release Sprint').
   * @default null
   */
  sprint_id_or_name: string | null;
  /**
   * Summary
   * @description Brief, descriptive title for the issue.
   * @default null
   */
  summary: string | null;
  /**
   * Update
   * @description Dictionary for granular field operations (e.g., adding/removing labels, modifying list items). See Jira documentation for operation structure. Provide complex data as a JSON string.
   * @default null
   */
  update: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of JIRA's JIRA_EDIT_ISSUE tool output.
 */
type JIRA_EDIT_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * JiraIssue
       * @description Clean, typed representation of a Jira issue without unnecessary fields.
       * @default null
       */
      issue_data: {
          /**
           * JiraUser
           * @description Jira user information without avatar URLs or self links.
           * @default null
           */
          assignee: {
              /**
               * Account Id
               * @description Atlassian account ID
               */
              account_id: string;
              /**
               * Display Name
               * @description User's display name
               */
              display_name: string;
              /**
               * Email Address
               * @description User's email address
               * @default null
               */
              email_address: string | null;
              /**
               * Time Zone
               * @description User's timezone
               * @default null
               */
              time_zone: string | null;
          } | null;
          /**
           * Browser Url
           * @description URL to view the issue in Jira web interface
           * @default null
           */
          browser_url: string | null;
          /**
           * Components
           * @description Project components
           */
          components?: {
              /**
               * Id
               * @description Component ID
               */
              id: string;
              /**
               * Name
               * @description Component name
               */
              name: string;
          }[];
          /**
           * Created
           * @description Creation timestamp (ISO format)
           */
          created: string;
          /**
           * Description
           * @description Issue description in markdown format
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description Due date (YYYY-MM-DD format)
           * @default null
           */
          due_date: string | null;
          /**
           * Fix Versions
           * @description Fix versions
           */
          fix_versions?: {
              /**
               * Id
               * @description Version ID
               */
              id: string;
              /**
               * Name
               * @description Version name
               */
              name: string;
              /**
               * Released
               * @description Whether the version is released
               * @default false
               */
              released: boolean;
          }[];
          /**
           * Id
           * @description Issue ID
           */
          id: string;
          /**
           * Issue Type
           * @description Issue type
           */
          issue_type: {
              /**
               * Id
               * @description Issue type ID
               */
              id: string;
              /**
               * Name
               * @description Issue type name (e.g., 'Bug', 'Task', 'Story')
               */
              name: string;
              /**
               * Subtask
               * @description Whether this is a subtask type
               * @default false
               */
              subtask: boolean;
          };
          /**
           * Key
           * @description Issue key (e.g., 'PROJ-123')
           */
          key: string;
          /**
           * Labels
           * @description Issue labels
           */
          labels?: string[];
          /**
           * JiraPriority
           * @description Jira issue priority information.
           * @default null
           */
          priority: {
              /**
               * Id
               * @description Priority ID
               */
              id: string;
              /**
               * Name
               * @description Priority name (e.g., 'High', 'Medium', 'Low')
               */
              name: string;
          } | null;
          /**
           * Project
           * @description Project information
           */
          project: {
              /**
               * Id
               * @description Project ID
               */
              id: string;
              /**
               * Key
               * @description Project key (e.g., 'PROJ')
               */
              key: string;
              /**
               * Name
               * @description Project name
               */
              name: string;
              /**
               * Project Type
               * @description Project type (e.g., 'business', 'software')
               * @default null
               */
              project_type: string | null;
          };
          /**
           * JiraUser
           * @description Jira user information without avatar URLs or self links.
           * @default null
           */
          reporter: {
              /**
               * Account Id
               * @description Atlassian account ID
               */
              account_id: string;
              /**
               * Display Name
               * @description User's display name
               */
              display_name: string;
              /**
               * Email Address
               * @description User's email address
               * @default null
               */
              email_address: string | null;
              /**
               * Time Zone
               * @description User's timezone
               * @default null
               */
              time_zone: string | null;
          } | null;
          /**
           * Status
           * @description Current status
           */
          status: {
              /**
               * Category
               * @description Status category (e.g., 'To Do', 'In Progress', 'Done')
               */
              category: string;
              /**
               * Id
               * @description Status ID
               */
              id: string;
              /**
               * Name
               * @description Status name (e.g., 'To Do', 'In Progress')
               */
              name: string;
          };
          /**
           * Summary
           * @description Issue summary/title
           */
          summary: string;
          /**
           * Updated
           * @description Last update timestamp (ISO format)
           */
          updated: string;
      } | null;
      /**
       * Issue Key
       * @description Key of the updated Jira issue (e.g., 'PROJ-123').
       */
      issue_key: string;
      /**
       * Success
       * @description Indicates if the issue was successfully updated.
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
 * Type of JIRA's JIRA_FIND_USERS tool input.
 */
type JIRA_FIND_USERS_INPUT = {
  /**
   * Account Id
   * @description The account ID to search for. Use this to get user details when you already have the account ID.
   * @default null
   */
  account_id: string | null;
  /**
   * Include Active
   * @description Whether to include active users in the search results. Defaults to true.
   * @default true
   */
  include_active: boolean | null;
  /**
   * Include Inactive
   * @description Whether to include inactive users in the search results. Defaults to false.
   * @default false
   */
  include_inactive: boolean | null;
  /**
   * Max Results
   * @description The maximum number of items to return per page. Defaults to 50. Maximum allowed is typically 1000.
   * @default null
   */
  max_results: number | null;
  /**
   * Query
   * @description A query string that is matched against user attributes. This can be used to search by display name, email address, or username. For example, 'john@company.com' to find a user by email.
   * @default null
   */
  query: string | null;
  /**
   * Start At
   * @description The 0-based index of the first item to return in the page of results. Used for pagination.
   * @default null
   */
  start_at: number | null;
  /**
   * Username
   * @description The username to search for. This parameter is deprecated in newer Jira versions but may still work in some instances.
   * @default null
   */
  username: string | null;
};

/**
 * Type of JIRA's JIRA_FIND_USERS tool output.
 */
type JIRA_FIND_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total
       * @description The total number of users that match the search criteria. This may be larger than the number of users returned if pagination is used.
       * @default null
       */
      total: number | null;
      /**
       * Users
       * @description A list of `UserDetails` objects, each representing a Jira user that matches the search criteria. The list will be empty if no users are found.
       */
      users: {
          /**
           * Account Id
           * @description The unique immutable ID of the user account. This ID is essential for identifying the user across Jira and is the primary identifier for API operations.
           */
          accountId: string;
          /**
           * Account Type
           * @description The type of the user account. Known values include: 'atlassian' (standard Atlassian account), 'app' (application user, e.g., for integrations), and 'customer' (Jira Service Management portal-only customer).
           */
          accountType: string;
          /**
           * Active
           * @description A boolean flag indicating whether the user's account is currently active and can log in to Jira.
           */
          active: boolean;
          /**
           * Display Name
           * @description The full name of the user as displayed throughout Jira, e.g., 'Jane Doe'.
           */
          displayName: string;
          /**
           * Email Address
           * @description The primary email address associated with the user's Jira account. This field might be absent due to privacy settings or if the user does not have an email.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Self
           * @description The REST API URL link to this user resource, providing a direct way to fetch the user's full details.
           */
          self: string;
          /**
           * Time Zone
           * @description The time zone specified in the user's profile. If not set, this field may be absent. Represented as a tz database zone name, e.g., 'Europe/London' or 'America/New_York'.
           * @default null
           */
          timeZone: string | null;
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
 * Type of JIRA's JIRA_GET_ALL_ISSUE_TYPE_SCHEMES tool input.
 */
type JIRA_GET_ALL_ISSUE_TYPE_SCHEMES_INPUT = {
  /**
   * Id
   * @description The list of issue type scheme IDs to filter results. Returns only schemes with these IDs.
   * @default null
   */
  id: number[] | null;
  /**
   * Max Results
   * @description The maximum number of items to return per page. Default is 50, maximum is 100.
   * @default null
   */
  max_results: number | null;
  /**
   * Start At
   * @description The index of the first item to return in a page of results (page offset). Default is 0.
   * @default null
   */
  start_at: number | null;
};

/**
 * Type of JIRA's JIRA_GET_ALL_ISSUE_TYPE_SCHEMES tool output.
 */
type JIRA_GET_ALL_ISSUE_TYPE_SCHEMES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Is Last
       * @description Indicates if this is the last page of issue type schemes.
       */
      isLast: boolean;
      /**
       * Max Results
       * @description The maximum number of issue type schemes that can be returned in a single page.
       */
      maxResults: number;
      /**
       * Start At
       * @description The 0-based index of the first issue type scheme in the current page.
       */
      startAt: number;
      /**
       * Total
       * @description The total number of issue type schemes available.
       */
      total: number;
      /**
       * Values
       * @description A list containing the issue type schemes for the current page.
       */
      values: {
          /**
           * Default Issue Type Id
           * @description The unique identifier (ID) of the issue type that is designated as the default for this scheme.
           * @default null
           */
          defaultIssueTypeId: string | null;
          /**
           * Description
           * @description A textual description of the issue type scheme, explaining its purpose or scope.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier (ID) of the issue type scheme.
           */
          id: string;
          /**
           * Is Default
           * @description A boolean flag indicating if this scheme is the globally default issue type scheme for the Jira instance.
           * @default null
           */
          isDefault: boolean | null;
          /**
           * IssueTypeList
           * @description An optional list of issue types associated with this scheme.
           * @default null
           */
          issueTypes: {
              /**
               * Is Last
               * @description Indicates if the current page of issue types is the last page available in the paginated list. `true` if it is the last page, `false` otherwise.
               */
              isLast: boolean;
              /**
               * Max Results
               * @description The maximum number of issue types that can be returned in a single page of results.
               */
              maxResults: number;
              /**
               * Start At
               * @description The 0-based index of the first issue type included in the current page of results.
               */
              startAt: number;
              /**
               * Total
               * @description The total number of issue types associated with the scheme across all pages.
               */
              total: number;
              /**
               * Values
               * @description A list containing the `IssueType` objects for the current page.
               */
              values: {
                  /**
                   * Description
                   * @description A textual description of the issue type, providing context about its purpose.
                   * @default null
                   */
                  description: string | null;
                  /**
                   * Hierarchy Level
                   * @description The hierarchy level of the issue type. Typically, '0' for standard issue types and '-1' for sub-task issue types.
                   * @default null
                   */
                  hierarchyLevel: number | null;
                  /**
                   * Icon Url
                   * @description The absolute URL pointing to the icon image for this issue type.
                   * @default null
                   */
                  iconUrl: string | null;
                  /**
                   * Id
                   * @description The unique identifier (ID) for this specific issue type.
                   */
                  id: string;
                  /**
                   * Name
                   * @description The display name of the issue type (e.g., 'Bug', 'Task', 'Story').
                   */
                  name: string;
                  /**
                   * Subtask
                   * @description A boolean flag indicating whether this issue type represents a sub-task (true) or a standard issue type (false).
                   * @default null
                   */
                  subtask: boolean | null;
              }[];
          } | null;
          /**
           * Name
           * @description The name assigned to the issue type scheme (e.g., 'Default Issue Type Scheme').
           */
          name: string;
          /**
           * ProjectList
           * @description An optional list of projects that use this issue type scheme.
           * @default null
           */
          projects: {
              /**
               * Is Last
               * @description Indicates if this is the last page of projects.
               */
              isLast: boolean;
              /**
               * Max Results
               * @description The maximum number of projects that can be returned in a single page.
               */
              maxResults: number;
              /**
               * Start At
               * @description The 0-based index of the first project in the current page.
               */
              startAt: number;
              /**
               * Total
               * @description The total number of projects associated with the scheme.
               */
              total: number;
              /**
               * Values
               * @description A list containing the project information for the current page.
               */
              values: {
                  /**
                   * Avatar Urls
                   * @description URLs for the project's avatar in different sizes.
                   * @default null
                   */
                  avatarUrls: {
                      [key: string]: unknown;
                  } | null;
                  /**
                   * Id
                   * @description The unique identifier (ID) of the project.
                   */
                  id: string;
                  /**
                   * Key
                   * @description The project key.
                   */
                  key: string;
                  /**
                   * Name
                   * @description The name of the project.
                   */
                  name: string;
                  /**
                   * Project Category
                   * @description The project's category information.
                   * @default null
                   */
                  projectCategory: {
                      [key: string]: unknown;
                  } | null;
                  /**
                   * Project Type Key
                   * @description The project type key.
                   * @default null
                   */
                  projectTypeKey: string | null;
                  /**
                   * Self
                   * @description The URL of the project.
                   * @default null
                   */
                  self: string | null;
                  /**
                   * Simplified
                   * @description Whether the project is simplified.
                   * @default null
                   */
                  simplified: boolean | null;
              }[];
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
 * Type of JIRA's JIRA_GET_ALL_PROJECTS tool input.
 */
type JIRA_GET_ALL_PROJECTS_INPUT = {
  /**
   * Action
   * @description Filter results by projects for which the user can: 'view' (default), 'browse', 'edit', or 'admin'.
   * @default view
   */
  action: string | null;
  /**
   * Category Id
   * @description The ID of the project category to filter by.
   * @default null
   */
  categoryId: number | null;
  /**
   * Expand
   * @description A comma-separated list of entities to expand in the response for additional project details. Valid options include: `description` (to include the project description), `issueTypes` (to include all issue types associated with the project), `lead` (to include information about the project lead), and `projectKeys` (to include all project keys associated with the project).
   * @default null
   */
  expand: string | null;
  /**
   * Max Results
   * @description The maximum number of projects to return per page. Maximum allowed value is 100.
   * @default 50
   */
  maxResults: number | null;
  /**
   * Name
   * @description DEPRECATED: Use 'query' parameter instead. The project name (or part of it) to filter the results. This will be mapped to the 'query' parameter.
   * @default null
   */
  name: string | null;
  /**
   * Order By
   * @description Order the results by a field. Valid values: 'category', 'issueCount', 'key', 'lastIssueUpdatedTime', 'name', 'owner', 'archivedDate', 'deletedDate'. Prefix with '-' for descending order.
   * @default name
   */
  orderBy: string | null;
  /**
   * Properties
   * @description A list of project property keys to include in the response for each project, allowing retrieval of custom project entity properties. For example, if a project has a property with key 'com.example.property', including this key here as part of the list will return its value. Provide as a list of strings, e.g., `['property1', 'property2']`.
   * @default null
   */
  properties: string[] | null;
  /**
   * Query
   * @description Filter the results using a query string. Projects with a name or key that contains the query string are returned. The search is case-insensitive.
   * @default null
   */
  query: string | null;
  /**
   * Start At
   * @description The index of the first item to return in a page of results (page offset). The base index is 0.
   * @default 0
   */
  startAt: number | null;
  /**
   * Status
   * @description EXPERIMENTAL. Filter results by project status. Valid values: 'live', 'archived', 'deleted'.
   * @default null
   */
  status: string[] | null;
};

/**
 * Type of JIRA's JIRA_GET_ALL_PROJECTS tool output.
 */
type JIRA_GET_ALL_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Paginated project search results with metadata and project list
   */
  data?: {
      /**
       * Is Last
       * @description Whether this is the last page of results
       */
      isLast: boolean;
      /**
       * Max Results
       * @description Maximum number of results per page
       */
      maxResults: number;
      /**
       * Self
       * @description URL of the search request
       * @default null
       */
      self: string | null;
      /**
       * Start At
       * @description Starting index of the results
       */
      startAt: number;
      /**
       * Total
       * @description Total number of projects matching the search criteria
       */
      total: number;
      /**
       * Values
       * @description List of projects in this page of results
       */
      values: {
          /**
           * AvatarUrls
           * @description Avatar URLs in different sizes
           * @default null
           */
          avatarUrls: {
              /**
               * 16X16
               * @description 16x16 pixel avatar URL
               * @default null
               */
              "16x16": string | null;
              /**
               * 24X24
               * @description 24x24 pixel avatar URL
               * @default null
               */
              "24x24": string | null;
              /**
               * 32X32
               * @description 32x32 pixel avatar URL
               * @default null
               */
              "32x32": string | null;
              /**
               * 48X48
               * @description 48x48 pixel avatar URL
               * @default null
               */
              "48x48": string | null;
          } | null;
          /**
           * Description
           * @description Description of the project
           * @default null
           */
          description: string | null;
          /**
           * Entity Id
           * @description Entity ID of the project
           * @default null
           */
          entityId: string | null;
          /**
           * Expand
           * @description Expanded sections in the response
           * @default null
           */
          expand: string | null;
          /**
           * Id
           * @description Unique identifier of the project
           */
          id: string;
          /**
           * Is Private
           * @description Whether the project is private
           * @default null
           */
          isPrivate: boolean | null;
          /**
           * Key
           * @description Project key (short identifier)
           */
          key: string;
          /**
           * ProjectLead
           * @description Project lead user information
           * @default null
           */
          lead: {
              /**
               * Account Id
               * @description Atlassian account ID of the user
               * @default null
               */
              accountId: string | null;
              /**
               * Account Type
               * @description Type of account (e.g., 'atlassian')
               * @default null
               */
              accountType: string | null;
              /**
               * Active
               * @description Whether the user account is active
               * @default null
               */
              active: boolean | null;
              /**
               * AvatarUrls
               * @description Avatar URLs in different sizes
               * @default null
               */
              avatarUrls: {
                  /**
                   * 16X16
                   * @description 16x16 pixel avatar URL
                   * @default null
                   */
                  "16x16": string | null;
                  /**
                   * 24X24
                   * @description 24x24 pixel avatar URL
                   * @default null
                   */
                  "24x24": string | null;
                  /**
                   * 32X32
                   * @description 32x32 pixel avatar URL
                   * @default null
                   */
                  "32x32": string | null;
                  /**
                   * 48X48
                   * @description 48x48 pixel avatar URL
                   * @default null
                   */
                  "48x48": string | null;
              } | null;
              /**
               * Display Name
               * @description Display name of the user
               * @default null
               */
              displayName: string | null;
              /**
               * Self
               * @description URL to the user resource
               * @default null
               */
              self: string | null;
          } | null;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
          /**
           * Project Type Key
           * @description Type of project (e.g., 'software', 'business')
           * @default null
           */
          projectTypeKey: string | null;
          /**
           * Properties
           * @description Project properties
           * @default null
           */
          properties: {
              [key: string]: unknown;
          } | null;
          /**
           * Self
           * @description URL to the project resource
           * @default null
           */
          self: string | null;
          /**
           * Simplified
           * @description Whether the project uses simplified configuration
           * @default null
           */
          simplified: boolean | null;
          /**
           * Style
           * @description Project style (e.g., 'next-gen', 'classic')
           * @default null
           */
          style: string | null;
          /**
           * Uuid
           * @description UUID of the project
           * @default null
           */
          uuid: string | null;
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
 * Type of JIRA's JIRA_GET_ALL_STATUSES tool input.
 */
type JIRA_GET_ALL_STATUSES_INPUT = object;

/**
 * Type of JIRA's JIRA_GET_ALL_STATUSES tool output.
 */
type JIRA_GET_ALL_STATUSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Statuses
       * @description List of all Jira issue statuses.
       */
      statuses: {
          /**
           * Description
           * @description Textual description of the status.
           * @default null
           */
          description: string | null;
          /**
           * Icon Url
           * @description URL of the status icon.
           * @default null
           */
          iconUrl: string | null;
          /**
           * Id
           * @description Unique identifier for the status.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Name of the status (e.g., 'Open', 'Resolved', 'Closed').
           * @default null
           */
          name: string | null;
          /**
           * Self
           * @description API URL for this status.
           * @default null
           */
          self: string | null;
          /**
           * StatusCategory
           * @description Jira issue status category, detailing its color, ID, key, and name.
           * @default null
           */
          statusCategory: {
              /**
               * Color Name
               * @description Color name of the status category (e.g., 'blue-gray', 'green').
               * @default null
               */
              colorName: string | null;
              /**
               * Id
               * @description Unique identifier for the status category.
               * @default null
               */
              id: number | null;
              /**
               * Key
               * @description Key for the status category (e.g., 'new', 'intermediate', 'done').
               * @default null
               */
              key: string | null;
              /**
               * Name
               * @description Name of the status category (e.g., 'To Do', 'In Progress', 'Done').
               * @default null
               */
              name: string | null;
              /**
               * Self
               * @description API URL for this status category.
               * @default null
               */
              self: string | null;
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
 * Type of JIRA's JIRA_GET_ALL_USERS tool input.
 */
type JIRA_GET_ALL_USERS_INPUT = {
  /**
   * Max Results
   * @description The maximum number of items to return per page. Used for pagination. The Jira instance might have a default and/or maximum limit for this value.
   * @default null
   */
  max_results: number | null;
  /**
   * Start At
   * @description The 0-based index of the first item to return in the page of results. Used for pagination to retrieve users in chunks.
   * @default null
   */
  start_at: number | null;
};

/**
 * Type of JIRA's JIRA_GET_ALL_USERS tool output.
 */
type JIRA_GET_ALL_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description A list of `UserDetails` objects, each representing a Jira user. The list will be empty if no users are found or match the (implicit) criteria.
       */
      users: {
          /**
           * Account Id
           * @description The unique immutable ID of the user account. This ID is essential for identifying the user across Jira.
           */
          accountId: string;
          /**
           * Account Type
           * @description The type of the user account. Known values include: 'atlassian' (standard Atlassian account), 'app' (application user, e.g., for integrations), and 'customer' (Jira Service Management portal-only customer).
           */
          accountType: string;
          /**
           * Active
           * @description A boolean flag indicating whether the user's account is currently active and can log in to Jira.
           */
          active: boolean;
          /**
           * Display Name
           * @description The full name of the user as displayed throughout Jira, e.g., 'Jane Doe'.
           */
          displayName: string;
          /**
           * Email Address
           * @description The primary email address associated with the user's Jira account. This field might be absent due to privacy settings or if the user does not have an email.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Self
           * @description The REST API URL link to this user resource, providing a direct way to fetch the user's full details.
           */
          self: string;
          /**
           * Time Zone
           * @description The time zone specified in the user's profile. If not set, this field may be absent. Represented as a tz database zone name, e.g., 'Europe/London' or 'America/New_York'.
           * @default null
           */
          timeZone: string | null;
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
 * Type of JIRA's JIRA_GET_COMMENT tool input.
 */
type JIRA_GET_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description Unique ID of the comment to retrieve.
   */
  comment_id?: string;
  /**
   * Expand
   * @description Optional. Sections to expand, e.g., 'renderedBody' for HTML. See Jira API docs for other values.
   * @default null
   */
  expand: string | null;
  /**
   * Issue Id Or Key
   * @description ID or key of the Jira issue (e.g., '10000' or 'PROJ-123').
   */
  issue_id_or_key?: string;
};

/**
 * Type of JIRA's JIRA_GET_COMMENT tool output.
 */
type JIRA_GET_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * CommentAuthor
       * @description Model for comment author or updater information.
       * @default null
       */
      author: {
          /**
           * Account Id
           * @description Atlassian Account ID (AAID) of the user.
           * @default null
           */
          accountId: string | null;
          /**
           * Active
           * @description Indicates if the user's Jira account is active.
           * @default null
           */
          active: boolean | null;
          /**
           * Display Name
           * @description User's display name in Jira.
           * @default null
           */
          displayName: string | null;
          /**
           * Self
           * @description API link to the user's resource.
           * @default null
           */
          self: string | null;
      } | null;
      /**
       * CommentBody
       * @description Model for comment body content, typically in Atlassian Document Format (ADF).
       * @default null
       */
      body: {
          /**
           * Content
           * @description List of content nodes in ADF representing the comment's body (e.g., paragraphs, text).
           * @default null
           */
          content: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Type
           * @description Document structure type, typically 'doc' for Atlassian Document Format (ADF).
           * @default null
           */
          type: string | null;
          /**
           * Version
           * @description Version of the Atlassian Document Format (ADF).
           * @default null
           */
          version: number | null;
      } | null;
      /**
       * Created
       * @description Creation timestamp (ISO 8601).
       * @default null
       */
      created: string | null;
      /**
       * Id
       * @description Unique ID of the retrieved comment.
       * @default null
       */
      id: string | null;
      /**
       * Self
       * @description API link to this comment resource.
       * @default null
       */
      self: string | null;
      /**
       * CommentAuthor
       * @description Model for comment author or updater information.
       * @default null
       */
      update_author: {
          /**
           * Account Id
           * @description Atlassian Account ID (AAID) of the user.
           * @default null
           */
          accountId: string | null;
          /**
           * Active
           * @description Indicates if the user's Jira account is active.
           * @default null
           */
          active: boolean | null;
          /**
           * Display Name
           * @description User's display name in Jira.
           * @default null
           */
          displayName: string | null;
          /**
           * Self
           * @description API link to the user's resource.
           * @default null
           */
          self: string | null;
      } | null;
      /**
       * Updated
       * @description Last update timestamp (ISO 8601), if comment was edited.
       * @default null
       */
      updated: string | null;
      /**
       * CommentVisibility
       * @description Model for comment visibility settings, indicating who can view the comment.
       * @default null
       */
      visibility: {
          /**
           * Identifier
           * @description Identifier for visibility restriction (e.g., project role ID or group name).
           * @default null
           */
          identifier: string | null;
          /**
           * Type
           * @description Type of visibility restriction (e.g., 'role' or 'group').
           * @default null
           */
          type: string | null;
          /**
           * Value
           * @description Display name of the role or group for the visibility restriction.
           * @default null
           */
          value: string | null;
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
 * Type of JIRA's JIRA_GET_CURRENT_USER tool input.
 */
type JIRA_GET_CURRENT_USER_INPUT = {
  /**
   * Expand
   * @description Comma-separated list of user properties to expand, e.g., 'groups', 'applicationRoles'.
   * @default null
   */
  expand: string | null;
};

/**
 * Type of JIRA's JIRA_GET_CURRENT_USER tool output.
 */
type JIRA_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Unique Atlassian account identifier (ID) for the user.
       */
      accountId: string;
      /**
       * Account Type
       * @description The type of Jira user account (e.g., 'atlassian' for standard users, 'app' for application users, 'customer' for Jira Service Management customers).
       */
      accountType: string;
      /**
       * Active
       * @description Indicates if the user's account is active.
       */
      active: boolean;
      /**
       * Application Roles
       * @description Application roles assigned to the user; expanded if 'applicationRoles' is in the request 'expand' parameter.
       */
      applicationRoles: {
          /**
           * Items
           * @description List of application roles assigned to the user.
           */
          items: {
              [key: string]: unknown;
          }[];
          /**
           * Size
           * @description The total number of application roles assigned to the user.
           */
          size: number;
      };
      /**
       * Avatar Urls
       * @description URLs for the user's avatar in different sizes.
       */
      avatarUrls: {
          /**
           * 16X16
           * @description URL for the user's avatar in 16x16 pixel resolution.
           */
          "16x16": string;
          /**
           * 24X24
           * @description URL for the user's avatar in 24x24 pixel resolution.
           */
          "24x24": string;
          /**
           * 32X32
           * @description URL for the user's avatar in 32x32 pixel resolution.
           */
          "32x32": string;
          /**
           * 48X48
           * @description URL for the user's avatar in 48x48 pixel resolution.
           */
          "48x48": string;
      };
      /**
       * Display Name
       * @description User's full name as displayed in Jira (e.g., 'Jane Doe').
       */
      displayName: string;
      /**
       * Email Address
       * @description Primary email address of the user.
       */
      emailAddress: string;
      /**
       * Groups
       * @description Groups the user is a member of; expanded if 'groups' is in the request 'expand' parameter.
       */
      groups: {
          /**
           * Items
           * @description List of groups the user is a member of.
           */
          items: {
              [key: string]: unknown;
          }[];
          /**
           * Size
           * @description The total number of groups the user belongs to.
           */
          size: number;
      };
      /**
       * Self
       * @description API URL for this user resource.
       */
      self: string;
      /**
       * Time Zone
       * @description The IANA time zone (e.g., 'Australia/Sydney', 'Europe/London') configured in the user's Jira profile. This field may be null if no time zone is set for the user.
       * @default null
       */
      timeZone: string | null;
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
 * Type of JIRA's JIRA_GET_ISSUE tool input.
 */
type JIRA_GET_ISSUE_INPUT = {
  /**
   * Expand
   * @description A comma-separated string of issue entities to expand in the response, providing more details. Common expansions include 'renderedFields' (HTML content), 'changelog' (history), 'transitions' (available workflows), and 'operations' (available actions).
   * @default null
   */
  expand: string | null;
  /**
   * Fields
   * @description A list of field names or IDs to return for the issue. If omitted or empty, a default set of fields (often all fields or all navigable fields) is returned. For specific fields, provide a list like `["summary", "status"]`.
   * @default null
   */
  fields: string[] | null;
  /**
   * Fields By Keys
   * @description If true, the strings in the `fields` parameter are interpreted as field keys (e.g., 'summary') instead of field IDs (e.g., 'customfield_10000'). Default is false (uses field IDs).
   * @default null
   */
  fields_by_keys: boolean | null;
  /**
   * Issue Id Or Key
   * @description The ID (e.g., '10000') or key (e.g., 'PROJ-123') of the Jira issue to retrieve.
   */
  issue_id_or_key?: string;
  /**
   * Properties
   * @description A list of issue property keys to include in the response. Issue properties are extra key-value data attached to an issue, often by apps. Example: `["jira.meta.data", "com.example.custom.info"]`.
   * @default null
   */
  properties: string[] | null;
  /**
   * Update History
   * @description If true, viewing the issue will add it to the user's 'Recently Viewed' issues list. Set to false to prevent this, which can be useful for automated processes. The default behavior (true or false) can be determined by Jira's system settings if not explicitly set.
   * @default null
   */
  update_history: boolean | null;
};

/**
 * Type of JIRA's JIRA_GET_ISSUE tool output.
 */
type JIRA_GET_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * JiraUser
       * @description Jira user information without avatar URLs or self links.
       * @default null
       */
      assignee: {
          /**
           * Account Id
           * @description Atlassian account ID
           */
          account_id: string;
          /**
           * Display Name
           * @description User's display name
           */
          display_name: string;
          /**
           * Email Address
           * @description User's email address
           * @default null
           */
          email_address: string | null;
          /**
           * Time Zone
           * @description User's timezone
           * @default null
           */
          time_zone: string | null;
      } | null;
      /**
       * Browser Url
       * @description URL to view the issue in Jira web interface
       * @default null
       */
      browser_url: string | null;
      /**
       * Components
       * @description Project components
       */
      components?: {
          /**
           * Id
           * @description Component ID
           */
          id: string;
          /**
           * Name
           * @description Component name
           */
          name: string;
      }[];
      /**
       * Created
       * @description Creation timestamp (ISO format)
       */
      created: string;
      /**
       * Description
       * @description Issue description in markdown format
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description Due date (YYYY-MM-DD format)
       * @default null
       */
      due_date: string | null;
      /**
       * Fix Versions
       * @description Fix versions
       */
      fix_versions?: {
          /**
           * Id
           * @description Version ID
           */
          id: string;
          /**
           * Name
           * @description Version name
           */
          name: string;
          /**
           * Released
           * @description Whether the version is released
           * @default false
           */
          released: boolean;
      }[];
      /**
       * Id
       * @description Issue ID
       */
      id: string;
      /**
       * Issue Type
       * @description Issue type
       */
      issue_type: {
          /**
           * Id
           * @description Issue type ID
           */
          id: string;
          /**
           * Name
           * @description Issue type name (e.g., 'Bug', 'Task', 'Story')
           */
          name: string;
          /**
           * Subtask
           * @description Whether this is a subtask type
           * @default false
           */
          subtask: boolean;
      };
      /**
       * Key
       * @description Issue key (e.g., 'PROJ-123')
       */
      key: string;
      /**
       * Labels
       * @description Issue labels
       */
      labels?: string[];
      /**
       * JiraPriority
       * @description Jira issue priority information.
       * @default null
       */
      priority: {
          /**
           * Id
           * @description Priority ID
           */
          id: string;
          /**
           * Name
           * @description Priority name (e.g., 'High', 'Medium', 'Low')
           */
          name: string;
      } | null;
      /**
       * Project
       * @description Project information
       */
      project: {
          /**
           * Id
           * @description Project ID
           */
          id: string;
          /**
           * Key
           * @description Project key (e.g., 'PROJ')
           */
          key: string;
          /**
           * Name
           * @description Project name
           */
          name: string;
          /**
           * Project Type
           * @description Project type (e.g., 'business', 'software')
           * @default null
           */
          project_type: string | null;
      };
      /**
       * JiraUser
       * @description Jira user information without avatar URLs or self links.
       * @default null
       */
      reporter: {
          /**
           * Account Id
           * @description Atlassian account ID
           */
          account_id: string;
          /**
           * Display Name
           * @description User's display name
           */
          display_name: string;
          /**
           * Email Address
           * @description User's email address
           * @default null
           */
          email_address: string | null;
          /**
           * Time Zone
           * @description User's timezone
           * @default null
           */
          time_zone: string | null;
      } | null;
      /**
       * Status
       * @description Current status
       */
      status: {
          /**
           * Category
           * @description Status category (e.g., 'To Do', 'In Progress', 'Done')
           */
          category: string;
          /**
           * Id
           * @description Status ID
           */
          id: string;
          /**
           * Name
           * @description Status name (e.g., 'To Do', 'In Progress')
           */
          name: string;
      };
      /**
       * Summary
       * @description Issue summary/title
       */
      summary: string;
      /**
       * Updated
       * @description Last update timestamp (ISO format)
       */
      updated: string;
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
 * Type of JIRA's JIRA_GET_ISSUE_LINK_TYPES tool input.
 */
type JIRA_GET_ISSUE_LINK_TYPES_INPUT = object;

/**
 * Type of JIRA's JIRA_GET_ISSUE_LINK_TYPES tool output.
 */
type JIRA_GET_ISSUE_LINK_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Issue Link Types
       * @description A list of all available issue link types in the Jira instance.
       */
      issueLinkTypes: {
          /**
           * Id
           * @description The unique identifier for the issue link type.
           */
          id: string;
          /**
           * Inward
           * @description Text describing the relationship from the perspective of the destination issue (e.g., if the link type name is 'Blocks', the inward description could be 'is blocked by').
           */
          inward: string;
          /**
           * Name
           * @description The name of the issue link type, defining the nature of the relationship.
           */
          name: string;
          /**
           * Outward
           * @description Text describing the relationship from the perspective of the source issue (e.g., if the link type name is 'Blocks', the outward description could be 'blocks').
           */
          outward: string;
          /**
           * Self
           * @description The API URL to retrieve details for this specific issue link type.
           */
          self: string;
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
 * Type of JIRA's JIRA_GET_ISSUE_PROPERTY tool input.
 */
type JIRA_GET_ISSUE_PROPERTY_INPUT = {
  /**
   * Issue Id Or Key
   * @description The ID (e.g., '10000') or key (e.g., 'TEST-123') of the Jira issue.
   */
  issue_id_or_key?: string;
  /**
   * Property Key
   * @description The key of the issue property to retrieve. Property keys are often dot-separated, like 'com.example.property.key'.
   */
  property_key?: string;
};

/**
 * Type of JIRA's JIRA_GET_ISSUE_PROPERTY tool output.
 */
type JIRA_GET_ISSUE_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Key
       * @description The key of the retrieved issue property.
       */
      key: string;
      /**
       * Value
       * @description The value of the issue property. This can be any valid JSON data type (e.g., string, number, boolean, object, array).
       */
      value: unknown;
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
 * Type of JIRA's JIRA_GET_ISSUE_RESOLUTIONS tool input.
 */
type JIRA_GET_ISSUE_RESOLUTIONS_INPUT = object;

/**
 * Type of JIRA's JIRA_GET_ISSUE_RESOLUTIONS tool output.
 */
type JIRA_GET_ISSUE_RESOLUTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Resolutions
       * @description A list of `Resolution` objects, each representing an issue resolution configured in Jira.
       */
      resolutions: {
          /**
           * Description
           * @description A detailed textual description of the issue resolution, explaining its meaning or use case.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier of the issue resolution.
           */
          id: string;
          /**
           * Name
           * @description The display name of the issue resolution (e.g., 'Done', 'Fixed', 'Won't Fix').
           */
          name: string;
          /**
           * Self
           * @description The direct API URL to access this specific issue resolution resource.
           */
          self: string;
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
 * Type of JIRA's JIRA_GET_ISSUE_TYPES tool input.
 */
type JIRA_GET_ISSUE_TYPES_INPUT = object;

/**
 * Type of JIRA's JIRA_GET_ISSUE_TYPES tool output.
 */
type JIRA_GET_ISSUE_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Issue Types
       * @description A list of all retrieved issue type details.
       */
      issue_types: {
          /**
           * Avatar Id
           * @description The ID of the avatar icon for this issue type.
           * @default null
           */
          avatarId: number | null;
          /**
           * Description
           * @description A textual description of the issue type.
           * @default null
           */
          description: string | null;
          /**
           * Entity Id
           * @description Unique identifier for the issue type, used in next-gen (team-managed) Jira projects.
           * @default null
           */
          entityId: string | null;
          /**
           * Hierarchy Level
           * @description The hierarchy level of the issue type (e.g., 0 for standard, -1 for sub-tasks).
           * @default null
           */
          hierarchyLevel: number | null;
          /**
           * Icon Url
           * @description The URL for the issue type's avatar icon.
           * @default null
           */
          iconUrl: string | null;
          /**
           * Id
           * @description The unique ID of the issue type.
           */
          id: string;
          /**
           * Name
           * @description The display name of the issue type.
           */
          name: string;
          /**
           * IssueTypeScope
           * @description Represents the scope of an issue type (e.g., project-specific or global).
           * @default null
           */
          scope: {
              /**
               * Project
               * @description Contains project details if the issue type's scope is 'PROJECT'.
               * @default null
               */
              project: {
                  [key: string]: string;
              } | null;
              /**
               * Type
               * @description Indicates the scope type, for example, 'PROJECT' for project-specific issue types.
               */
              type: string;
          } | null;
          /**
           * Self
           * @description The direct API URL for this issue type.
           */
          self: string;
          /**
           * Subtask
           * @description Indicates if this issue type is a sub-task.
           */
          subtask: boolean;
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
 * Type of JIRA's JIRA_GET_ISSUE_TYPE_SCHEME tool input.
 */
type JIRA_GET_ISSUE_TYPE_SCHEME_INPUT = {
  /**
   * Issue Type Scheme Id
   * @description The unique identifier (ID) of the Jira issue type scheme to be retrieved.
   */
  issue_type_scheme_id?: string;
};

/**
 * Type of JIRA's JIRA_GET_ISSUE_TYPE_SCHEME tool output.
 */
type JIRA_GET_ISSUE_TYPE_SCHEME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Default Issue Type Id
       * @description The unique identifier (ID) of the issue type that is designated as the default for this scheme. This field is optional; it may be absent if no default issue type is set.
       * @default null
       */
      defaultIssueTypeId: string | null;
      /**
       * Description
       * @description A textual description of the issue type scheme, explaining its purpose or scope.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The unique identifier (ID) of the retrieved issue type scheme.
       */
      id: string;
      /**
       * Is Default
       * @description A boolean flag indicating if this scheme is the globally default issue type scheme for the Jira instance. `true` if it is the default, `false` otherwise. This field is optional.
       * @default null
       */
      isDefault: boolean | null;
      /**
       * IssueTypeList
       * @description An optional list of issue types (`IssueTypeList`) associated with this scheme. This may include pagination details if there are many issue types. It can be absent if the scheme has no associated issue types.
       * @default null
       */
      issueTypes: {
          /**
           * Is Last
           * @description Indicates if the current page of issue types is the last page available in the paginated list. `true` if it is the last page, `false` otherwise.
           */
          isLast: boolean;
          /**
           * Max Results
           * @description The maximum number of issue types that can be returned in a single page of results.
           */
          maxResults: number;
          /**
           * Start At
           * @description The 0-based index of the first issue type included in the current page of results.
           */
          startAt: number;
          /**
           * Total
           * @description The total number of issue types associated with the scheme across all pages.
           */
          total: number;
          /**
           * Values
           * @description A list containing the `IssueType` objects for the current page.
           */
          values: {
              /**
               * Description
               * @description A textual description of the issue type, providing context about its purpose.
               * @default null
               */
              description: string | null;
              /**
               * Hierarchy Level
               * @description The hierarchy level of the issue type. Typically, '0' for standard issue types and '-1' for sub-task issue types.
               * @default null
               */
              hierarchyLevel: number | null;
              /**
               * Icon Url
               * @description The absolute URL pointing to the icon image for this issue type.
               * @default null
               */
              iconUrl: string | null;
              /**
               * Id
               * @description The unique identifier (ID) for this specific issue type.
               */
              id: string;
              /**
               * Name
               * @description The display name of the issue type (e.g., 'Bug', 'Task', 'Story').
               */
              name: string;
              /**
               * Subtask
               * @description A boolean flag indicating whether this issue type represents a sub-task (true) or a standard issue type (false).
               * @default null
               */
              subtask: boolean | null;
          }[];
      } | null;
      /**
       * Name
       * @description The name assigned to the issue type scheme (e.g., 'Default Issue Type Scheme').
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
 * Type of JIRA's JIRA_GET_ISSUE_WATCHERS tool input.
 */
type JIRA_GET_ISSUE_WATCHERS_INPUT = {
  /**
   * Issue Id Or Key
   * @description The ID or key of the Jira issue for which to retrieve watchers. This can be the numerical ID (e.g., '10000') or the human-readable key (e.g., 'PROJ-123').
   */
  issue_id_or_key?: string;
  /**
   * Max Results
   * @description The maximum number of watchers to return per page. Use for pagination. Must be 1 or greater if provided.
   * @default null
   */
  max_results: number | null;
  /**
   * Start At
   * @description The 0-based index of the first watcher to return in the paginated list. Use for pagination.
   * @default null
   */
  start_at: number | null;
};

/**
 * Type of JIRA's JIRA_GET_ISSUE_WATCHERS tool output.
 */
type JIRA_GET_ISSUE_WATCHERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Is Watching
       * @description A boolean flag indicating if the currently authenticated user is watching this issue.
       */
      isWatching: boolean;
      /**
       * Self
       * @description The API URL link to this issue watchers resource.
       */
      self: string;
      /**
       * Watch Count
       * @description The total number of users currently watching this issue.
       */
      watchCount: number;
      /**
       * Watchers
       * @description A list of `WatcherInfo` objects, detailing each user watching the issue.
       */
      watchers: {
          /**
           * Account Id
           * @description The unique account identifier for the watcher.
           */
          accountId: string;
          /**
           * Active
           * @description Indicates whether the watcher's user account is currently active in Jira.
           */
          active: boolean;
          /**
           * Display Name
           * @description The full display name of the watcher.
           */
          displayName: string;
          /**
           * Self
           * @description The API URL link to the watcher's user resource.
           */
          self: string;
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
 * Type of JIRA's JIRA_GET_ISSUE_WORKLOGS tool input.
 */
type JIRA_GET_ISSUE_WORKLOGS_INPUT = {
  /**
   * Issue Id Or Key
   * @description The ID or key of the issue for which worklogs are to be fetched.
   */
  issue_id_or_key?: string;
  /**
   * Max Results
   * @description Maximum number of worklogs to return per page. Defaults to a system-defined limit.
   * @default null
   */
  max_results: number | null;
  /**
   * Start At
   * @description Index of the first worklog to return (for pagination). Defaults to 0.
   * @default null
   */
  start_at: number | null;
  /**
   * Started After
   * @description Filters worklogs to include only those started after this Unix timestamp (milliseconds).
   * @default null
   */
  started_after: number | null;
  /**
   * Started Before
   * @description Filters worklogs to include only those started before this Unix timestamp (milliseconds).
   * @default null
   */
  started_before: number | null;
};

/**
 * Type of JIRA's JIRA_GET_ISSUE_WORKLOGS tool output.
 */
type JIRA_GET_ISSUE_WORKLOGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Max Results
       * @description Maximum number of results returned per page.
       */
      maxResults: number;
      /**
       * Start At
       * @description Starting index of the returned page of results.
       */
      startAt: number;
      /**
       * Total
       * @description Total number of worklogs found for the issue, respecting applied filters.
       */
      total: number;
      /**
       * Worklogs
       * @description A list containing the details of the worklogs retrieved for the specified issue.
       */
      worklogs: {
          /**
           * Author
           * @description Details of the user who created the worklog.
           */
          author: {
              /**
               * Account Id
               * @description The unique account ID of the author.
               */
              accountId: string;
              /**
               * Active
               * @description Indicates whether the author's account is active.
               */
              active: boolean;
              /**
               * Display Name
               * @description The display name of the author.
               */
              displayName: string;
          };
          /**
           * Comment
           * @description Represents a comment, structured as a document with paragraphs and content.
           * @default null
           */
          comment: {
              /**
               * Content
               * @description A list of paragraphs that make up the comment's body.
               */
              content: {
                  /**
                   * Content
                   * @description A list of content items that form the paragraph.
                   */
                  content: {
                      /**
                       * Text
                       * @description The actual text of the content item, if applicable.
                       * @default null
                       */
                      text: string | null;
                      /**
                       * Type
                       * @description The type of the content item, e.g., 'text'.
                       */
                      type: string;
                  }[];
                  /**
                   * Type
                   * @description The type of the paragraph structure, e.g., 'paragraph'.
                   */
                  type: string;
              }[];
              /**
               * Type
               * @description The type of the comment structure, e.g., 'doc' for document.
               */
              type: string;
              /**
               * Version
               * @description The version number of the comment's format.
               */
              version: number;
          } | null;
          /**
           * Id
           * @description The unique identifier for the worklog.
           */
          id: string;
          /**
           * Issue Id
           * @description The ID of the issue to which this worklog is linked.
           */
          issueId: string;
          /**
           * Started
           * Format: date-time
           * @description The timestamp indicating when the work was started, in ISO 8601 format.
           */
          started: string;
          /**
           * Time Spent
           * @description The duration of time spent, represented in Jira's textual format (e.g., '2h 30m').
           */
          timeSpent: string;
          /**
           * Time Spent Seconds
           * @description The duration of time spent, converted to seconds.
           */
          timeSpentSeconds: number;
          /**
           * Update Author
           * @description Details of the user who last updated the worklog.
           */
          updateAuthor: {
              /**
               * Account Id
               * @description The unique account ID of the author.
               */
              accountId: string;
              /**
               * Active
               * @description Indicates whether the author's account is active.
               */
              active: boolean;
              /**
               * Display Name
               * @description The display name of the author.
               */
              displayName: string;
          };
          /**
           * Updated
           * Format: date-time
           * @description The timestamp indicating when the worklog was last updated, in ISO 8601 format.
           */
          updated: string;
          /**
           * Visibility
           * @description Defines the visibility restrictions for a worklog, specifying who can view it.
           * @default null
           */
          visibility: {
              /**
               * Identifier
               * @description The identifier for the visibility rule (e.g., a group name or project role ID).
               */
              identifier: string;
              /**
               * Type
               * @description The type of visibility restriction, such as 'group' or 'role'.
               */
              type: string;
              /**
               * Value
               * @description The specific value for the visibility type (e.g., the name of the group or role).
               */
              value: string;
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
 * Type of JIRA's JIRA_GET_PROJECT_VERSIONS tool input.
 */
type JIRA_GET_PROJECT_VERSIONS_INPUT = {
  /**
   * Expand
   * @description Comma-separated string of properties to expand for each version (e.g., 'operations', 'issuesstatus').
   * @default null
   */
  expand: string | null;
  /**
   * Project Id Or Key
   * @description The ID or unique key of the Jira project for which versions are to be retrieved. For example, '10000' or 'PROJECTKEY'.
   */
  project_id_or_key?: string;
};

/**
 * Type of JIRA's JIRA_GET_PROJECT_VERSIONS tool output.
 */
type JIRA_GET_PROJECT_VERSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Versions
       * @description A list of version objects, each detailing a specific version within the requested project.
       */
      versions: {
          /**
           * Archived
           * @description Indicates if the version is archived (true) or not (false).
           * @default null
           */
          archived: boolean | null;
          /**
           * Description
           * @description The textual description of the version.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier of the version.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description The name of the version.
           * @default null
           */
          name: string | null;
          /**
           * Overdue
           * @description Indicates if the version's release date is in the past and the version is not yet released (true) or not (false).
           * @default null
           */
          overdue: boolean | null;
          /**
           * Project Id
           * @description The ID of the project to which this version belongs.
           * @default null
           */
          projectId: number | null;
          /**
           * Release Date
           * @description The release date of the version in YYYY-MM-DD format. This can be the actual or scheduled release date.
           * @default null
           */
          releaseDate: string | null;
          /**
           * Released
           * @description Indicates if the version has been released (true) or not (false).
           * @default null
           */
          released: boolean | null;
          /**
           * Self
           * @description The REST API URL of the version.
           * @default null
           */
          self: string | null;
          /**
           * User Release Date
           * @description The user-friendly formatted release date of the version, localized according to the user's settings (e.g., 'dd/MMM/yy').
           * @default null
           */
          userReleaseDate: string | null;
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
 * Type of JIRA's JIRA_GET_REMOTE_ISSUE_LINKS tool input.
 */
type JIRA_GET_REMOTE_ISSUE_LINKS_INPUT = {
  /**
   * Global Id
   * @description Optional. The global ID of a specific remote issue link to retrieve, provided by the external linking application. If specified, only the remote issue link matching this global ID is returned.
   * @default null
   */
  global_id: string | null;
  /**
   * Issue Id Or Key
   * @description The ID (e.g., '10000') or key (e.g., 'PROJECT-123') of the Jira issue for which to retrieve remote links.
   */
  issue_id_or_key?: string;
};

/**
 * Type of JIRA's JIRA_GET_REMOTE_ISSUE_LINKS tool output.
 */
type JIRA_GET_REMOTE_ISSUE_LINKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Remote Links
       * @description A list of remote issue links associated with the specified Jira issue.
       */
      remote_links: {
          /**
           * RemoteApplication
           * @description Represents the application that hosts or manages the remotely linked object.
           * @default null
           */
          application: {
              /**
               * Name
               * @description The name of the application that provides the remote link (e.g., 'GitHub', 'Confluence', 'My Custom Tool').
               * @default null
               */
              name: string | null;
              /**
               * Type
               * @description The type identifier of the application (e.g., 'com.github.issue', 'com.atlassian.confluence.page', 'custom.app.type').
               * @default null
               */
              type: string | null;
          } | null;
          /**
           * Global Id
           * @description A globally unique identifier for the remote link, often provided and managed by the external application. Used for uniquely identifying the link across systems.
           * @default null
           */
          globalId: string | null;
          /**
           * Id
           * @description The unique identifier for this remote issue link entry in Jira.
           * @default null
           */
          id: number | null;
          /**
           * Object
           * @description Detailed information about the actual remote object that is linked.
           */
          object: {
              /**
               * RemoteIcon
               * @description Represents an icon associated with a remote issue link, providing URLs and a title.
               * @default null
               */
              icon: {
                  /**
                   * Link
                   * @description The URL associated with the icon, typically used for status icons to provide more details on hover or click.
                   * @default null
                   */
                  link: string | null;
                  /**
                   * Title
                   * @description The title of the icon, often displayed as tooltip text.
                   * @default null
                   */
                  title: string | null;
                  /**
                   * Url16X16
                   * @description The URL of a 16x16 pixel icon for the remote link.
                   * @default null
                   */
                  url16x16: string | null;
              } | null;
              /**
               * RemoteStatus
               * @description Represents the status of a remote object linked to a Jira issue, including resolution state and an icon.
               * @default null
               */
              status: {
                  /**
                   * RemoteIcon
                   * @description Represents an icon associated with a remote issue link, providing URLs and a title.
                   * @default null
                   */
                  icon: {
                      /**
                       * Link
                       * @description The URL associated with the icon, typically used for status icons to provide more details on hover or click.
                       * @default null
                       */
                      link: string | null;
                      /**
                       * Title
                       * @description The title of the icon, often displayed as tooltip text.
                       * @default null
                       */
                      title: string | null;
                      /**
                       * Url16X16
                       * @description The URL of a 16x16 pixel icon for the remote link.
                       * @default null
                       */
                      url16x16: string | null;
                  } | null;
                  /**
                   * Resolved
                   * @description Indicates if the linked item (e.g., an external issue or pull request) is marked as resolved.
                   * @default null
                   */
                  resolved: boolean | null;
              } | null;
              /**
               * Summary
               * @description A brief summary or description of the remote object.
               * @default null
               */
              summary: string | null;
              /**
               * Title
               * @description The title of the remote object, displayed as the link text in Jira.
               * @default null
               */
              title: string | null;
              /**
               * Url
               * @description The primary URL of the remote object (e.g., a webpage URL, a link to a commit).
               * @default null
               */
              url: string | null;
          };
          /**
           * Relationship
           * @description Description of the relationship between the Jira issue and the linked remote object (e.g., 'is mentioned in', 'is fixed by', 'relates to').
           * @default null
           */
          relationship: string | null;
          /**
           * Self
           * @description The REST API URL that points to this specific remote issue link resource.
           * @default null
           */
          self: string | null;
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
 * Type of JIRA's JIRA_GET_TRANSITIONS tool input.
 */
type JIRA_GET_TRANSITIONS_INPUT = {
  /**
   * Expand
   * @description A comma-separated list of properties to expand in the response. Use 'transitions.fields' to include the fields associated with each transition, providing details on what input is expected or allowed.
   * @default null
   */
  expand: string | null;
  /**
   * Include Unavailable Transitions
   * @description If true, transitions that are not currently available for the issue (e.g., due to unmet conditions) will be included in the response.
   * @default null
   */
  include_unavailable_transitions: boolean | null;
  /**
   * Issue Id Or Key
   * @description The ID (e.g., '10000') or key (e.g., 'PROJ-123') of the Jira issue for which to retrieve transitions.
   */
  issue_id_or_key?: string;
  /**
   * Skip Remote Only Condition
   * @description If true, conditions defined by remote apps that only run remotely will be skipped during evaluation.
   * @default null
   */
  skip_remote_only_condition: boolean | null;
  /**
   * Sort By Ops Bar And Status
   * @description If true, sorts the returned transitions by their order in the operations bar and then by status category.
   * @default null
   */
  sort_by_ops_bar_and_status: boolean | null;
  /**
   * Transition Id
   * @description The ID of a specific transition to retrieve. If provided, only details for this transition are returned.
   * @default null
   */
  transition_id: string | null;
};

/**
 * Type of JIRA's JIRA_GET_TRANSITIONS tool output.
 */
type JIRA_GET_TRANSITIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Transitions
       * @description A list of transition objects. If a `transition_id` was specified in the request, this list will contain a single transition if found; otherwise, it includes all relevant transitions based on other parameters.
       */
      transitions: {
          /**
           * Fields
           * @description Fields required or available for input during this transition (keys are field IDs).
           * @default null
           */
          fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Has Screen
           * @description True if a screen is associated with this transition, requiring user input to proceed.
           * @default false
           */
          hasScreen: boolean;
          /**
           * Id
           * @description Identifier for the transition.
           */
          id: string;
          /**
           * Is Available
           * @description True if this transition is currently available.
           * @default false
           */
          isAvailable: boolean;
          /**
           * Is Conditional
           * @description True if this transition has conditions.
           * @default false
           */
          isConditional: boolean;
          /**
           * Is Global
           * @description True if this transition is global (can be applied regardless of current status).
           * @default false
           */
          isGlobal: boolean;
          /**
           * Is Initial
           * @description True if this is an initial transition (e.g., for issue creation).
           * @default false
           */
          isInitial: boolean;
          /**
           * Name
           * @description Name of the transition (e.g., 'Start Progress', 'Resolve Issue').
           */
          name: string;
          /**
           * To
           * @description Target status after this transition.
           */
          to: {
              /**
               * Description
               * @description Description of the status.
               * @default null
               */
              description: string | null;
              /**
               * Icon Url
               * @description URL of the status icon.
               * @default null
               */
              iconUrl: string | null;
              /**
               * Id
               * @description Identifier for the status.
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Display name of the status.
               * @default null
               */
              name: string | null;
              /**
               * Self
               * @description URL of the status.
               * @default null
               */
              self: string | null;
              /**
               * StatusCategory
               * @description Category of a Jira issue status.
               * @default null
               */
              statusCategory: {
                  /**
                   * Color Name
                   * @description Color name for the status category (e.g., 'blue-gray', 'yellow', 'green').
                   * @default null
                   */
                  colorName: string | null;
                  /**
                   * Id
                   * @description Identifier for the status category.
                   * @default null
                   */
                  id: number | null;
                  /**
                   * Key
                   * @description Key of the status category (e.g., 'new', 'indeterminate', 'done').
                   * @default null
                   */
                  key: string | null;
                  /**
                   * Name
                   * @description Display name of the status category (e.g., 'To Do', 'In Progress', 'Done').
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Self
                   * @description URL of the status category.
                   * @default null
                   */
                  self: string | null;
              } | null;
          };
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
 * Type of JIRA's JIRA_GET_VOTES tool input.
 */
type JIRA_GET_VOTES_INPUT = {
  /**
   * Issue Id Or Key
   * @description The ID or key of the Jira issue (e.g., 'PROJ-123' or '10000').
   */
  issue_id_or_key?: string;
};

/**
 * Type of JIRA's JIRA_GET_VOTES tool output.
 */
type JIRA_GET_VOTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has Voted
       * @description Indicates whether the current authenticated user has voted on this issue.
       */
      hasVoted: boolean;
      /**
       * Self
       * @description The API URL of this votes resource.
       */
      self: string;
      /**
       * Voters
       * @description A list of users who have voted on the issue. This list may be empty or omitted if the current user lacks 'View voters and watchers' permission.
       */
      voters: {
          /**
           * Account Id
           * @description The unique identifier for the user's account.
           */
          account_id: string;
          /**
           * Account Type
           * @description The type of Jira user account. Common values include 'atlassian' (standard user), 'app' (application user), and 'customer' (Jira Service Management customer).
           */
          account_type: string;
          /**
           * Active
           * @description Indicates if the user's account is currently active.
           */
          active: boolean;
          /**
           * Avatar Urls
           * @description URLs for the user's avatars in various sizes.
           */
          avatar_urls: {
              /**
               * 16X16
               * @description URL for the 16x16 pixel avatar of the user.
               */
              "16x16": string;
              /**
               * 24X24
               * @description URL for the 24x24 pixel avatar of the user.
               */
              "24x24": string;
              /**
               * 32X32
               * @description URL for the 32x32 pixel avatar of the user.
               */
              "32x32": string;
              /**
               * 48X48
               * @description URL for the 48x48 pixel avatar of the user.
               */
              "48x48": string;
          };
          /**
           * Display Name
           * @description The publicly visible name of the user.
           */
          display_name: string;
          /**
           * Self
           * @description The API URL to fetch the full details of this user.
           */
          self: string;
      }[];
      /**
       * Votes
       * @description The total number of votes the issue has received.
       */
      votes: number;
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
 * Type of JIRA's JIRA_GET_WORKLOG tool input.
 */
type JIRA_GET_WORKLOG_INPUT = {
  /**
   * Expand
   * @description A comma-separated list of worklog properties to expand in the response. For instance, 'properties' can be used to include custom fields associated with the worklogs. Refer to the Jira API documentation for other possible values.
   * @default null
   */
  expand: string | null;
  /**
   * Issue Id Or Key
   * @description The ID (e.g., '10001') or key (e.g., 'PROJECT-123') of the Jira issue for which to retrieve worklogs.
   */
  issue_id_or_key?: string;
  /**
   * Max Results
   * @description The maximum number of worklogs to return per page. Used for pagination. If not specified, a Jira-defined default is used (e.g., 50).
   * @default null
   */
  max_results: number | null;
  /**
   * Start At
   * @description The 0-based index of the first worklog to return. Used for pagination to retrieve results beyond the initial page. For example, if `maxResults` is 50, `startAt=50` retrieves the second page.
   * @default null
   */
  start_at: number | null;
  /**
   * Started After
   * @description Filters worklogs to include only those started on or after this specified date and time. Provide as a Unix timestamp in milliseconds (milliseconds since January 1, 1970, 00:00:00 UTC).
   * @default null
   */
  started_after: number | null;
  /**
   * Started Before
   * @description Filters worklogs to include only those started on or before this specified date and time. Provide as a Unix timestamp in milliseconds (milliseconds since January 1, 1970, 00:00:00 UTC).
   * @default null
   */
  started_before: number | null;
};

/**
 * Type of JIRA's JIRA_GET_WORKLOG tool output.
 */
type JIRA_GET_WORKLOG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Max Results
       * @description The maximum number of worklogs returned in this page, as requested or defaulted by Jira.
       */
      maxResults: number;
      /**
       * Start At
       * @description The starting index (0-based) of the worklogs included in this page of results.
       */
      startAt: number;
      /**
       * Total
       * @description The total number of worklogs available for the specified issue, across all pages.
       */
      total: number;
      /**
       * Worklogs
       * @description A list of worklog objects, each representing a single time log entry for the issue.
       */
      worklogs: {
          /**
           * Author
           * @description Detailed information about the user who created the worklog.
           */
          author: {
              /**
               * Account Id
               * @description The Atlassian Account ID (AAID) of the user who authored the worklog. This is a unique identifier for the user.
               */
              accountId: string;
              /**
               * Active
               * @description Indicates whether the author's Jira user account is currently active.
               */
              active: boolean;
              /**
               * Display Name
               * @description The full name of the author as displayed in Jira.
               */
              displayName: string;
          };
          /**
           * Comment
           * @description The text of any comment attached to the worklog.
           * @default null
           */
          comment: string | null;
          /**
           * Created
           * @description The timestamp indicating when the worklog was created, in ISO 8601 UTC format (e.g., '2023-10-27T10:35:21.123+0000').
           */
          created: string;
          /**
           * Id
           * @description The unique identifier for this worklog entry.
           */
          id: string;
          /**
           * Issue Id
           * @description The ID of the issue to which this worklog pertains.
           */
          issueId: string;
          /**
           * Started
           * @description The timestamp indicating when the work recorded in this worklog was started, in ISO 8601 UTC format (e.g., '2023-10-27T09:00:00.000+0000').
           */
          started: string;
          /**
           * Time Spent
           * @description The amount of time spent, represented in Jira's textual format (e.g., '3h 30m').
           */
          timeSpent: string;
          /**
           * Time Spent Seconds
           * @description The amount of time spent, measured in seconds.
           */
          timeSpentSeconds: number;
          /**
           * Updated
           * @description The timestamp indicating when the worklog was last updated, in ISO 8601 UTC format (e.g., '2023-10-27T11:15:00.456+0000').
           */
          updated: string;
          /**
           * Visibility
           * @description Details about the visibility restriction of a worklog.
           * @default null
           */
          visibility: {
              /**
               * Type
               * @description The type of visibility restriction on the worklog, typically 'group' or 'role'.
               */
              type: string;
              /**
               * Value
               * @description The name of the group or role if the worklog's visibility is restricted. For example, 'jira-developers' if type is 'group'.
               */
              value: string;
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
 * Type of JIRA's JIRA_LIST_BOARDS tool input.
 */
type JIRA_LIST_BOARDS_INPUT = {
  /**
   * Include Private
   * @description Include private boards in the results.
   * @default null
   */
  includePrivate: boolean | null;
  /**
   * Max Results
   * @description Maximum number of boards to return per page.
   * @default null
   */
  max_results: number | null;
  /**
   * Name
   * @description Filters results to boards whose name contains the string (case-insensitive).
   * @default null
   */
  name: string | null;
  /**
   * Order By
   * @description Field to order boards by (e.g., 'name', '-name' for descending). Refer to Jira API docs for all sortable fields.
   * @default null
   */
  orderBy: string | null;
  /**
   * Project Key Or Id
   * @description Filters results to boards for the specified project, by its key (e.g., 'PROJECTKEY') or ID (e.g., '10000').
   * @default null
   */
  projectKeyOrId: string | null;
  /**
   * Start At
   * @description Index of the first board to return (0-based) for pagination.
   * @default null
   */
  start_at: number | null;
  /**
   * Type
   * @description Filters results to boards of the specified type.
   * @default null
   * @enum {string|null}
   */
  type: "scrum" | "kanban" | null;
};

/**
 * Type of JIRA's JIRA_LIST_BOARDS tool output.
 */
type JIRA_LIST_BOARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Is Last
       * @description Indicates if this is the last page of results.
       */
      isLast: boolean;
      /**
       * Max Results
       * @description The maximum number of boards returned per page, as requested or defaulted by the API.
       */
      maxResults: number;
      /**
       * Start At
       * @description The 0-based starting index of the boards returned in this page of results.
       */
      startAt: number;
      /**
       * Total
       * @description The total number of boards matching the query criteria, across all available pages.
       */
      total: number;
      /**
       * Values
       * @description A list containing the details of the Jira boards retrieved for the current page.
       */
      values: {
          /**
           * Id
           * @description The unique numeric identifier of the Jira board.
           */
          id: number;
          /**
           * Name
           * @description The name assigned to the Jira board.
           */
          name: string;
          /**
           * Self
           * @description The API URL to retrieve details for this specific board.
           */
          self: string;
          /**
           * Type
           * @description The type of the Jira board, for example, 'scrum' or 'kanban'.
           */
          type: string;
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
 * Type of JIRA's JIRA_LIST_ISSUE_COMMENTS tool input.
 */
type JIRA_LIST_ISSUE_COMMENTS_INPUT = {
  /**
   * Expand
   * @description Use 'renderedBody' to include the HTML-rendered version of the comment body in the response.
   * @default null
   */
  expand: string | null;
  /**
   * Issue Id Or Key
   * @description The ID (e.g., '10000') or key (e.g., 'PROJ-123') of the Jira issue from which to retrieve comments.
   */
  issue_id_or_key?: string;
  /**
   * Max Results
   * @description The maximum number of comments to return per page.
   * @default 50
   */
  max_results: number | null;
  /**
   * Order By
   * @description Specifies the field to sort comments by; use 'created' for ascending by creation date (currently the only supported value).
   * @default null
   */
  order_by: string | null;
  /**
   * Start At
   * @description The 0-based index of the first comment to return.
   * @default 0
   */
  start_at: number | null;
};

/**
 * Type of JIRA's JIRA_LIST_ISSUE_COMMENTS tool output.
 */
type JIRA_LIST_ISSUE_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description A list of comment objects retrieved for the specified issue.
       */
      comments: {
          /**
           * Author
           * @description Details of the user who originally created the comment.
           */
          author: {
              /**
               * Account Id
               * @description The unique account ID of the Jira user.
               */
              accountId: string;
              /**
               * Active
               * @description Indicates whether the user is an active Jira user.
               * @default null
               */
              active: boolean | null;
              /**
               * Display Name
               * @description The display name of the Jira user.
               */
              displayName: string;
              /**
               * Self
               * @description The REST API URL for this user resource.
               * @default null
               */
              self: string | null;
          };
          /**
           * Body
           * @description The content of the comment. This can be a plain text string for older comments or a structured Atlassian Document Format (ADF) object for newer comments.
           */
          body: unknown;
          /**
           * Created
           * @description The timestamp indicating when the comment was created, in ISO 8601 format (e.g., '2023-09-28T10:30:00.000+0000').
           */
          created: string;
          /**
           * Id
           * @description The unique identifier for the comment.
           */
          id: string;
          /**
           * Rendered Body
           * @description The HTML-rendered version of the comment body. This field is populated when 'renderedBody' is requested in the 'expand' parameter of the request.
           * @default null
           */
          renderedBody: string | null;
          /**
           * Self
           * @description The REST API URL for this comment resource.
           * @default null
           */
          self: string | null;
          /**
           * Update Author
           * @description Details of the user who last updated the comment.
           */
          updateAuthor: {
              /**
               * Account Id
               * @description The unique account ID of the Jira user.
               */
              accountId: string;
              /**
               * Active
               * @description Indicates whether the user is an active Jira user.
               * @default null
               */
              active: boolean | null;
              /**
               * Display Name
               * @description The display name of the Jira user.
               */
              displayName: string;
              /**
               * Self
               * @description The REST API URL for this user resource.
               * @default null
               */
              self: string | null;
          };
          /**
           * Updated
           * @description The timestamp indicating when the comment was last updated, in ISO 8601 format (e.g., '2023-09-28T11:00:00.000+0000').
           */
          updated: string;
          /**
           * CommentVisibility
           * @description Defines the visibility restrictions for a comment, specifying who can view it.
           * @default null
           */
          visibility: {
              /**
               * Identifier
               * @description An optional identifier for the visibility restriction, like the ID of the project role or group.
               * @default null
               */
              identifier: string | null;
              /**
               * Type
               * @description The type of visibility restriction, e.g., 'role' for project roles or 'group' for user groups.
               */
              type: string;
              /**
               * Value
               * @description The value specifying the restriction, such as the name of the project role or group.
               */
              value: string;
          } | null;
      }[];
      /**
       * Max Results
       * @description The maximum number of comments returned per page, as specified in the request or defaulted.
       */
      maxResults: number;
      /**
       * Start At
       * @description The 0-based index of the first comment returned in this page of results.
       */
      startAt: number;
      /**
       * Total
       * @description The total number of comments available for the issue, across all pages.
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
 * Type of JIRA's JIRA_LIST_SPRINTS tool input.
 */
type JIRA_LIST_SPRINTS_INPUT = {
  /**
   * Board Id
   * @description Unique identifier of the Jira board.
   */
  board_id?: number;
  /**
   * Max Results
   * @description Maximum number of sprints per page.
   * @default 50
   */
  max_results: number;
  /**
   * Start At
   * @description 0-based starting index for pagination.
   * @default 0
   */
  start_at: number;
  /**
   * State
   * @description Filters sprints by state: 'future', 'active', or 'closed'. Returns all states if omitted.
   * @default null
   */
  state: string | null;
};

/**
 * Type of JIRA's JIRA_LIST_SPRINTS tool output.
 */
type JIRA_LIST_SPRINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Is Last
       * @description True if this is the last page of results, false otherwise.
       */
      isLast: boolean;
      /**
       * Max Results
       * @description Maximum sprints per page, matching request's `max_results`.
       */
      maxResults: number;
      /**
       * Start At
       * @description 0-based starting index, matching request's `start_at`.
       */
      startAt: number;
      /**
       * Values
       * @description List of sprint details for the current page.
       */
      values: {
          /**
           * Complete Date
           * @description Actual completion date/time in ISO 8601 format (e.g., '2023-11-10T17:30:00.000Z').
           * @default null
           */
          completeDate: string | null;
          /**
           * End Date
           * @description Scheduled end date/time (ISO 8601); null if not ended or active sprint lacks set end date.
           * @default null
           */
          endDate: string | null;
          /**
           * Goal
           * @description Sprint goal or objective; can be empty if undefined.
           * @default null
           */
          goal: string | null;
          /**
           * Id
           * @description The unique identifier of the sprint.
           */
          id: number;
          /**
           * Name
           * @description The user-defined name of the sprint.
           */
          name: string;
          /**
           * Origin Board Id
           * @description ID of the board where sprint originated, useful if sprint was moved.
           * @default null
           */
          originBoardId: number | null;
          /**
           * Self
           * @description The REST API URL providing a self-referential link to this sprint resource.
           */
          self: string;
          /**
           * Start Date
           * @description Scheduled or actual start date/time in ISO 8601 format (e.g., '2023-10-27T10:00:00.000Z').
           * @default null
           */
          startDate: string | null;
          /**
           * State
           * @description Current state of the sprint: 'future', 'active', or 'closed'.
           */
          state: string;
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
 * Type of JIRA's JIRA_MOVE_ISSUE_TO_SPRINT tool input.
 */
type JIRA_MOVE_ISSUE_TO_SPRINT_INPUT = {
  /**
   * Issues
   * @description A list of issue keys (e.g., 'PROJ-123') to be moved to the specified sprint.
   */
  issues?: string[];
  /**
   * Sprint Id
   * @description Unique identifier for the target sprint.
   */
  sprint_id?: number;
};

/**
 * Type of JIRA's JIRA_MOVE_ISSUE_TO_SPRINT tool output.
 */
type JIRA_MOVE_ISSUE_TO_SPRINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Affected Issues
       * @description A list of issue keys that were successfully moved to the sprint.
       */
      affected_issues: string[];
      /**
       * Message
       * @description A confirmation message indicating the successful movement of issues to the sprint.
       */
      message: string;
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
 * Type of JIRA's JIRA_REMOVE_WATCHER_FROM_ISSUE tool input.
 */
type JIRA_REMOVE_WATCHER_FROM_ISSUE_INPUT = {
  /**
   * Account Id
   * @description The account ID of the user to remove from the issue's watchers list.
   */
  account_id?: string;
  /**
   * Issue Id Or Key
   * @description The ID or key of the issue.
   */
  issue_id_or_key?: string;
};

/**
 * Type of JIRA's JIRA_REMOVE_WATCHER_FROM_ISSUE tool output.
 */
type JIRA_REMOVE_WATCHER_FROM_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A confirmation message indicating the success or failure of the operation.
       * @default
       */
      message: string;
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
 * Type of JIRA's JIRA_SEARCH_FOR_ISSUES_USING_JQL_GET tool input.
 */
type JIRA_SEARCH_FOR_ISSUES_USING_JQL_GET_INPUT = {
  /**
   * Expand
   * @description Comma-separated list of entities to expand within issues (e.g., `renderedFields`, `changelog`).
   * @default null
   */
  expand: string | null;
  /**
   * Fields
   * @description Specific issue fields to retrieve (e.g., `summary`, `customfield_10010`, `*all`, `*navigable`). Defaults if omitted.
   * @default null
   */
  fields: string[] | null;
  /**
   * Fields By Keys
   * @description Set to `True` to identify fields by keys (e.g., 'customfield_10000') instead of IDs.
   * @default false
   */
  fields_by_keys: boolean | null;
  /**
   * Jql
   * @description Jira Query Language (JQL) string for searching issues.
   */
  jql?: string;
  /**
   * Max Results
   * @description Maximum issues to retrieve per page; Jira API may enforce limits.
   * @default 50
   */
  max_results: number | null;
  /**
   * Properties
   * @description List of issue property keys (key-value metadata) to retrieve.
   * @default null
   */
  properties: string[] | null;
  /**
   * Start At
   * @description 0-based index for the first issue in pagination.
   * @default 0
   */
  start_at: number | null;
  /**
   * Validate Query
   * @description Controls JQL query validation: `strict` (fails on invalid JQL), `warn` (warnings, empty result), `none` (no validation). `true` is an alias for `strict`, `false` for `none`.
   * @default strict
   */
  validate_query: string | null;
};

/**
 * Type of JIRA's JIRA_SEARCH_FOR_ISSUES_USING_JQL_GET tool output.
 */
type JIRA_SEARCH_FOR_ISSUES_USING_JQL_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expand
       * @description Indicates fields expanded in returned issues, if requested via `expand` parameter.
       * @default null
       */
      expand: string | null;
      /**
       * Issues
       * @description List of Jira issues matching the JQL query, including requested fields.
       */
      issues: {
          /**
           * JiraUser
           * @description Jira user information without avatar URLs or self links.
           * @default null
           */
          assignee: {
              /**
               * Account Id
               * @description Atlassian account ID
               */
              account_id: string;
              /**
               * Display Name
               * @description User's display name
               */
              display_name: string;
              /**
               * Email Address
               * @description User's email address
               * @default null
               */
              email_address: string | null;
              /**
               * Time Zone
               * @description User's timezone
               * @default null
               */
              time_zone: string | null;
          } | null;
          /**
           * Browser Url
           * @description URL to view the issue in Jira web interface
           * @default null
           */
          browser_url: string | null;
          /**
           * Components
           * @description Project components
           */
          components?: {
              /**
               * Id
               * @description Component ID
               */
              id: string;
              /**
               * Name
               * @description Component name
               */
              name: string;
          }[];
          /**
           * Created
           * @description Creation timestamp (ISO format)
           */
          created: string;
          /**
           * Description
           * @description Issue description in markdown format
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description Due date (YYYY-MM-DD format)
           * @default null
           */
          due_date: string | null;
          /**
           * Fix Versions
           * @description Fix versions
           */
          fix_versions?: {
              /**
               * Id
               * @description Version ID
               */
              id: string;
              /**
               * Name
               * @description Version name
               */
              name: string;
              /**
               * Released
               * @description Whether the version is released
               * @default false
               */
              released: boolean;
          }[];
          /**
           * Id
           * @description Issue ID
           */
          id: string;
          /**
           * Issue Type
           * @description Issue type
           */
          issue_type: {
              /**
               * Id
               * @description Issue type ID
               */
              id: string;
              /**
               * Name
               * @description Issue type name (e.g., 'Bug', 'Task', 'Story')
               */
              name: string;
              /**
               * Subtask
               * @description Whether this is a subtask type
               * @default false
               */
              subtask: boolean;
          };
          /**
           * Key
           * @description Issue key (e.g., 'PROJ-123')
           */
          key: string;
          /**
           * Labels
           * @description Issue labels
           */
          labels?: string[];
          /**
           * JiraPriority
           * @description Jira issue priority information.
           * @default null
           */
          priority: {
              /**
               * Id
               * @description Priority ID
               */
              id: string;
              /**
               * Name
               * @description Priority name (e.g., 'High', 'Medium', 'Low')
               */
              name: string;
          } | null;
          /**
           * Project
           * @description Project information
           */
          project: {
              /**
               * Id
               * @description Project ID
               */
              id: string;
              /**
               * Key
               * @description Project key (e.g., 'PROJ')
               */
              key: string;
              /**
               * Name
               * @description Project name
               */
              name: string;
              /**
               * Project Type
               * @description Project type (e.g., 'business', 'software')
               * @default null
               */
              project_type: string | null;
          };
          /**
           * JiraUser
           * @description Jira user information without avatar URLs or self links.
           * @default null
           */
          reporter: {
              /**
               * Account Id
               * @description Atlassian account ID
               */
              account_id: string;
              /**
               * Display Name
               * @description User's display name
               */
              display_name: string;
              /**
               * Email Address
               * @description User's email address
               * @default null
               */
              email_address: string | null;
              /**
               * Time Zone
               * @description User's timezone
               * @default null
               */
              time_zone: string | null;
          } | null;
          /**
           * Status
           * @description Current status
           */
          status: {
              /**
               * Category
               * @description Status category (e.g., 'To Do', 'In Progress', 'Done')
               */
              category: string;
              /**
               * Id
               * @description Status ID
               */
              id: string;
              /**
               * Name
               * @description Status name (e.g., 'To Do', 'In Progress')
               */
              name: string;
          };
          /**
           * Summary
           * @description Issue summary/title
           */
          summary: string;
          /**
           * Updated
           * @description Last update timestamp (ISO format)
           */
          updated: string;
      }[];
      /**
       * Max Results
       * @description Max issues returned per page, matching the `max_results` request parameter.
       */
      maxResults: number;
      /**
       * Start At
       * @description 0-based index of the first issue in this page, matching `start_at` request parameter.
       */
      startAt: number;
      /**
       * Total
       * @description Total issues matching the JQL query across all pages.
       */
      total: number;
      /**
       * Warning Messages
       * @description Warnings generated during JQL search (e.g., syntax errors if `validate_query` is 'warn').
       * @default null
       */
      warningMessages: string[] | null;
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
 * Type of JIRA's JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST tool input.
 */
type JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST_INPUT = {
  /**
   * Expand
   * @description A comma-separated list of entities to expand in the response. Options include: 'renderedFields' (HTML values), 'names' (display name of fields), 'schema' (field type schema), 'transitions' (possible issue transitions), 'operations' (possible issue operations), 'editmeta' (field editability info), 'changelog' (recent updates), 'versionedRepresentations' (field version history).
   * @default null
   */
  expand: string | null;
  /**
   * Fields
   * @description A list of fields to return for each issue. By default, all fields are returned. Specify 'none' to return no fields. Examples: 'summary', 'status', 'assignee'. Use '*navigable' to return all navigable fields.
   * @default null
   */
  fields: string[] | null;
  /**
   * Fields By Keys
   * @description If true, returns field values referenced by their keys (e.g., 'customfield_10000') instead of their IDs.
   * @default false
   */
  fields_by_keys: boolean | null;
  /**
   * Jql
   * @description The JQL (Jira Query Language) query string to use for the search. For example, 'project = HSP AND issuetype = Bug'.
   */
  jql?: string;
  /**
   * Max Results
   * @description The maximum number of issues to return per page. Used for pagination.
   * @default 50
   */
  max_results: number | null;
  /**
   * Properties
   * @description A list of issue property keys to return for each issue. Issue properties are key-value pairs on the issue that can be set and read by apps (e.g., 'jira.issue.tools', 'com.example.application:properties').
   * @default null
   */
  properties: string[] | null;
  /**
   * Start At
   * @description The 0-based index of the first issue to return from the query results. Used for pagination.
   * @default 0
   */
  start_at: number | null;
  /**
   * Validate Query
   * @description Controls how the JQL query is validated. 'strict' throws an error for invalid JQL. 'warn' returns a warning for invalid JQL but still executes the query if possible. 'none' performs no JQL validation.
   * @default strict
   */
  validate_query: string | null;
};

/**
 * Type of JIRA's JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST tool output.
 */
type JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expand
       * @description Indicates which fields were expanded in the response, if any.
       * @default null
       */
      expand: string | null;
      /**
       * Issues
       * @description A list of dictionaries, where each dictionary represents a Jira issue matching the JQL query.
       */
      issues: {
          [key: string]: unknown;
      }[];
      /**
       * Max Results
       * @description The maximum number of issues returned in this page of results.
       */
      maxResults: number;
      /**
       * Start At
       * @description The 0-based index of the first issue in this page of results.
       */
      startAt: number;
      /**
       * Total
       * @description The total number of issues that matched the JQL query.
       */
      total: number;
      /**
       * Warning Messages
       * @description A list of any warning messages related to the JQL query or search execution. For example, if 'validateQuery' is 'warn' and the JQL is invalid.
       * @default null
       */
      warningMessages: string[] | null;
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
 * Type of JIRA's JIRA_SEARCH_ISSUES tool input.
 */
type JIRA_SEARCH_ISSUES_INPUT = {
  /**
   * Assignee
   * @description Filter by assignee. Can be account ID (e.g., '712020:abc...'), email (e.g., 'john@company.com'), display name (e.g., 'John Doe'), or 'unassigned'.
   * @default null
   */
  assignee: string | null;
  /**
   * Created After
   * @description Filter issues created after this date. Supports YYYY-MM-DD format or relative dates like '-30m' (last 30 minutes), '-7d' (last 7 days), '-1w' (last week), '-1M' (last month).
   * @default null
   */
  created_after: string | null;
  /**
   * Created Before
   * @description Filter issues created before this date (YYYY-MM-DD format).
   * @default null
   */
  created_before: string | null;
  /**
   * Issue Type Id Or Name
   * @description Filter by issue type. Can be either an issue type ID (e.g., '10001') or name (e.g., 'Bug', 'Task', 'Story').
   * @default null
   */
  issue_type_id_or_name: string | null;
  /**
   * Jql
   * @description Raw JQL query for advanced users. Takes precedence over filters.
   * @default null
   */
  jql: string | null;
  /**
   * Labels
   * @description Filter by labels (all labels must match).
   * @default null
   */
  labels: string[] | null;
  /**
   * Max Results
   * @description Maximum number of issues to return.
   * @default 20
   */
  max_results: number | null;
  /**
   * Priority Id Or Name
   * @description Filter by priority. Can be either a priority ID (e.g., '1', '2') or name (e.g., 'High', 'Medium', 'Low').
   * @default null
   */
  priority_id_or_name: string | null;
  /**
   * Project Key
   * @description Filter by project key (e.g., 'PROJ').
   * @default null
   */
  project_key: string | null;
  /**
   * Sprint Id Or Name
   * @description Filter by sprint. Can be sprint ID (e.g., '123') or name (e.g., 'Sprint 1', 'Release Sprint').
   * @default null
   */
  sprint_id_or_name: string | null;
  /**
   * Start At
   * @description 0-based index of the first issue to return (for pagination).
   * @default 0
   */
  start_at: number | null;
  /**
   * Status Id Or Name
   * @description Filter by status. Can be either a status ID (e.g., '10001') or name (e.g., 'To Do', 'In Progress', 'Done').
   * @default null
   */
  status_id_or_name: string | null;
  /**
   * Text Search
   * @description Search in summary and description text.
   * @default null
   */
  text_search: string | null;
  /**
   * Updated After
   * @description Filter issues updated after this date. Supports YYYY-MM-DD format or relative dates like '-30m' (last 30 minutes), '-7d' (last 7 days), '-1w' (last week), '-1M' (last month).
   * @default null
   */
  updated_after: string | null;
  /**
   * Updated Before
   * @description Filter issues updated before this date (YYYY-MM-DD format).
   * @default null
   */
  updated_before: string | null;
};

/**
 * Type of JIRA's JIRA_SEARCH_ISSUES tool output.
 */
type JIRA_SEARCH_ISSUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ai Explanation
       * @description Additional explanation of the search query (currently unused).
       * @default null
       */
      ai_explanation: string | null;
      /**
       * Issues
       * @description List of Jira issues matching the search criteria.
       */
      issues: {
          /**
           * JiraUser
           * @description Jira user information without avatar URLs or self links.
           * @default null
           */
          assignee: {
              /**
               * Account Id
               * @description Atlassian account ID
               */
              account_id: string;
              /**
               * Display Name
               * @description User's display name
               */
              display_name: string;
              /**
               * Email Address
               * @description User's email address
               * @default null
               */
              email_address: string | null;
              /**
               * Time Zone
               * @description User's timezone
               * @default null
               */
              time_zone: string | null;
          } | null;
          /**
           * Browser Url
           * @description URL to view the issue in Jira web interface
           * @default null
           */
          browser_url: string | null;
          /**
           * Components
           * @description Project components
           */
          components?: {
              /**
               * Id
               * @description Component ID
               */
              id: string;
              /**
               * Name
               * @description Component name
               */
              name: string;
          }[];
          /**
           * Created
           * @description Creation timestamp (ISO format)
           */
          created: string;
          /**
           * Description
           * @description Issue description in markdown format
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description Due date (YYYY-MM-DD format)
           * @default null
           */
          due_date: string | null;
          /**
           * Fix Versions
           * @description Fix versions
           */
          fix_versions?: {
              /**
               * Id
               * @description Version ID
               */
              id: string;
              /**
               * Name
               * @description Version name
               */
              name: string;
              /**
               * Released
               * @description Whether the version is released
               * @default false
               */
              released: boolean;
          }[];
          /**
           * Id
           * @description Issue ID
           */
          id: string;
          /**
           * Issue Type
           * @description Issue type
           */
          issue_type: {
              /**
               * Id
               * @description Issue type ID
               */
              id: string;
              /**
               * Name
               * @description Issue type name (e.g., 'Bug', 'Task', 'Story')
               */
              name: string;
              /**
               * Subtask
               * @description Whether this is a subtask type
               * @default false
               */
              subtask: boolean;
          };
          /**
           * Key
           * @description Issue key (e.g., 'PROJ-123')
           */
          key: string;
          /**
           * Labels
           * @description Issue labels
           */
          labels?: string[];
          /**
           * JiraPriority
           * @description Jira issue priority information.
           * @default null
           */
          priority: {
              /**
               * Id
               * @description Priority ID
               */
              id: string;
              /**
               * Name
               * @description Priority name (e.g., 'High', 'Medium', 'Low')
               */
              name: string;
          } | null;
          /**
           * Project
           * @description Project information
           */
          project: {
              /**
               * Id
               * @description Project ID
               */
              id: string;
              /**
               * Key
               * @description Project key (e.g., 'PROJ')
               */
              key: string;
              /**
               * Name
               * @description Project name
               */
              name: string;
              /**
               * Project Type
               * @description Project type (e.g., 'business', 'software')
               * @default null
               */
              project_type: string | null;
          };
          /**
           * JiraUser
           * @description Jira user information without avatar URLs or self links.
           * @default null
           */
          reporter: {
              /**
               * Account Id
               * @description Atlassian account ID
               */
              account_id: string;
              /**
               * Display Name
               * @description User's display name
               */
              display_name: string;
              /**
               * Email Address
               * @description User's email address
               * @default null
               */
              email_address: string | null;
              /**
               * Time Zone
               * @description User's timezone
               * @default null
               */
              time_zone: string | null;
          } | null;
          /**
           * Status
           * @description Current status
           */
          status: {
              /**
               * Category
               * @description Status category (e.g., 'To Do', 'In Progress', 'Done')
               */
              category: string;
              /**
               * Id
               * @description Status ID
               */
              id: string;
              /**
               * Name
               * @description Status name (e.g., 'To Do', 'In Progress')
               */
              name: string;
          };
          /**
           * Summary
           * @description Issue summary/title
           */
          summary: string;
          /**
           * Updated
           * @description Last update timestamp (ISO format)
           */
          updated: string;
      }[];
      /**
       * Jql Used
       * @description The actual JQL query that was executed.
       */
      jql_used: string;
      /**
       * Max Results
       * @description Maximum number of issues returned in this response.
       */
      max_results: number;
      /**
       * Search Method
       * @description The method used for the search (filters or jql).
       */
      search_method: string;
      /**
       * Start At
       * @description 0-based index of the first issue in this response.
       */
      start_at: number;
      /**
       * Total
       * @description Total number of issues matching the search criteria.
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
 * Type of JIRA's JIRA_SEND_NOTIFICATION_FOR_ISSUE tool input.
 */
type JIRA_SEND_NOTIFICATION_FOR_ISSUE_INPUT = {
  /**
   * Html Body
   * @description The HTML content of the email notification. This field is optional unless `restrict` is used, in which case it becomes mandatory. It is recommended to also provide `text_body` for email clients that do not support HTML.
   * @default null
   */
  html_body: string | null;
  /**
   * Issue Id Or Key
   * @description The ID (e.g., '10000') or key (e.g., 'PROJ-123') of the Jira issue for which the notification will be sent.
   */
  issue_id_or_key?: string;
  /**
   * NotificationRestrictions
   * @description Optional restrictions defining who can receive the notification. If specified, notifications are sent only to users who meet the criteria in `groups` (if provided) AND `permissions` (if provided), AND also have general permission to view the issue.
   * @default null
   */
  restrict: {
      /**
       * Groups
       * @description An optional list of `NotificationGroup` objects. If provided, restricts notifications to users who are members of AT LEAST ONE of these groups. Note: This field might be deprecated in Jira; prefer using `permissions` where possible.
       * @default null
       */
      groups: {
          /**
           * Name
           * @description The name of the Jira user group whose members are to be notified (e.g., 'jira-administrators').
           */
          name: string;
      }[] | null;
      /**
       * Permissions
       * @description An optional list of `NotificationPermission` objects. If provided, restricts notifications to users who have AT LEAST ONE of these project permissions for the issue.
       * @default null
       */
      permissions: {
          /**
           * Key
           * @description The key of the Jira project permission (e.g., 'BROWSE_PROJECTS', 'EDIT_ISSUES'). Users must have this permission to receive a restricted notification. Refer to Jira documentation for a list of available permission keys.
           */
          key: string;
      }[] | null;
  } | null;
  /**
   * Subject
   * @description The subject line for the email notification.
   */
  subject?: string;
  /**
   * Text Body
   * @description The plain text content of the email notification. This field is always mandatory.
   */
  text_body?: string;
  /**
   * To
   * @description A `NotificationRecipients` object specifying who should receive the notification. At least one recipient category (e.g., reporter, assignee, a user, or a group) within this object must be configured.
   */
  to?: {
      /**
       * Assignee
       * @description Set to true to include the issue's current assignee as a recipient. Defaults to false.
       * @default false
       */
      assignee: boolean;
      /**
       * Groups
       * @description An optional list of specific Jira user groups to notify, each identified by its `NotificationGroup` object containing a `name`. All members of the specified groups will be potential recipients.
       * @default null
       */
      groups: {
          /**
           * Name
           * @description The name of the Jira user group whose members are to be notified (e.g., 'jira-administrators').
           */
          name: string;
      }[] | null;
      /**
       * Reporter
       * @description Set to true to include the issue's reporter as a recipient. Defaults to false.
       * @default false
       */
      reporter: boolean;
      /**
       * Users
       * @description An optional list of specific users to notify, each identified by their `NotificationUser` object containing an `account_id`.
       * @default null
       */
      users: {
          /**
           * Account Id
           * @description The Atlassian account ID of the user to notify. This is typically a 24-character string.
           */
          account_id: string;
      }[] | null;
      /**
       * Voters
       * @description Set to true to include users who voted for the issue as recipients. Defaults to false.
       * @default false
       */
      voters: boolean;
      /**
       * Watchers
       * @description Set to true to include users watching the issue as recipients. Defaults to false.
       * @default false
       */
      watchers: boolean;
  };
};

/**
 * Type of JIRA's JIRA_SEND_NOTIFICATION_FOR_ISSUE tool output.
 */
type JIRA_SEND_NOTIFICATION_FOR_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the notification was successfully queued for sending by Jira. Note: Successful queueing does not guarantee final email delivery, which depends on Jira's mail server configuration and recipient email validity.
       * @default true
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
 * Type of JIRA's JIRA_TRANSITION_ISSUE tool input.
 */
type JIRA_TRANSITION_ISSUE_INPUT = {
  /**
   * Assignee
   * @description Account ID of the user to assign the issue to during transition. Takes precedence over assignee_name.
   * @default null
   */
  assignee: string | null;
  /**
   * Assignee Name
   * @description Name of the user to assign the issue to during transition. Can be either an email address (e.g., 'john@company.com') or display name (e.g., 'John Doe'). The system will auto-detect the type and search accordingly. Ignored if assignee (account ID) is provided.
   * @default null
   */
  assignee_name: string | null;
  /**
   * Comment
   * @description Optional comment to add during the transition. Supports Markdown formatting including **bold**, *italic*, `code`, links [text](url), and lists.
   * @default null
   */
  comment: string | null;
  /**
   * Issue Id Or Key
   * @description The ID or key of the issue to transition.
   */
  issue_id_or_key?: string;
  /**
   * Resolution
   * @description Optional resolution to set (e.g., 'Done', 'Fixed', 'Won't Do').
   * @default null
   */
  resolution: string | null;
  /**
   * Transition Id Or Name
   * @description The ID or name of the transition to apply.
   */
  transition_id_or_name?: string;
};

/**
 * Type of JIRA's JIRA_TRANSITION_ISSUE tool output.
 */
type JIRA_TRANSITION_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Browser Url
       * @description Direct browser URL to view the transitioned issue in Jira.
       */
      browser_url: string;
      /**
       * Issue Key
       * @description The key of the transitioned issue.
       */
      issue_key: string;
      /**
       * New Status
       * @description The new status of the issue after transition.
       * @default null
       */
      new_status: string | null;
      /**
       * Success
       * @description Whether the transition was successful.
       */
      success: boolean;
      /**
       * Transition Name
       * @description Name of the transition that was performed.
       * @default null
       */
      transition_name: string | null;
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
 * Type of JIRA's JIRA_UPDATE_COMMENT tool input.
 */
type JIRA_UPDATE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The unique ID of the comment to be updated.
   */
  comment_id?: string;
  /**
   * Comment Text
   * @description The new text content for the comment. This will replace the existing comment body. Supports plain text and basic formatting like *bold*, _italic_, and @mentions.
   */
  comment_text?: string;
  /**
   * Issue Id Or Key
   * @description The ID or key of the Jira issue where the comment is located. This can be the numerical ID or the project key followed by the issue number (e.g., 'PROJ-123').
   */
  issue_id_or_key?: string;
  /**
   * Notify Users
   * @description A boolean flag indicating whether to send notifications to users about the comment update. Defaults to True.
   * @default true
   */
  notify_users: boolean | null;
  /**
   * Visibility Type
   * @description Optional. The type of visibility restriction to apply to the comment. If provided, `visibility_value` must also be specified. Valid values are 'group' or 'role'.
   * @default null
   */
  visibility_type: string | null;
  /**
   * Visibility Value
   * @description Optional. The name of the group or role to restrict comment visibility to. Required if `visibility_type` is specified. For 'group' type, provide the group name (e.g., 'jira-administrators'). For 'role' type, provide the project role name (e.g., 'Administrators').
   * @default null
   */
  visibility_value: string | null;
};

/**
 * Type of JIRA's JIRA_UPDATE_COMMENT tool output.
 */
type JIRA_UPDATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author Display Name
       * @description Display name of the comment author.
       */
      author_display_name: string;
      /**
       * Browser Url
       * @description Direct browser URL to view the issue with the updated comment.
       */
      browser_url: string;
      /**
       * Comment Text
       * @description The updated comment text.
       */
      comment_text: string;
      /**
       * Created
       * @description Original creation date and time of the comment.
       */
      created: string;
      /**
       * Id
       * @description ID of the updated comment.
       */
      id: string;
      /**
       * Issue Key
       * @description Key of the issue containing the comment.
       */
      issue_key: string;
      /**
       * Updated
       * @description Date and time when the comment was last updated.
       */
      updated: string;
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
 * Type map of all available tool input types for toolkit "JIRA".
 */
export type JIRA_TOOL_INPUTS = {
  ADD_ATTACHMENT: JIRA_ADD_ATTACHMENT_INPUT
  ADD_COMMENT: JIRA_ADD_COMMENT_INPUT
  ADD_WATCHER_TO_ISSUE: JIRA_ADD_WATCHER_TO_ISSUE_INPUT
  ASSIGN_ISSUE: JIRA_ASSIGN_ISSUE_INPUT
  BULK_CREATE_ISSUE: JIRA_BULK_CREATE_ISSUE_INPUT
  CREATE_ISSUE: JIRA_CREATE_ISSUE_INPUT
  CREATE_ISSUE_LINK: JIRA_CREATE_ISSUE_LINK_INPUT
  CREATE_PROJECT: JIRA_CREATE_PROJECT_INPUT
  CREATE_SPRINT: JIRA_CREATE_SPRINT_INPUT
  CREATE_VERSION: JIRA_CREATE_VERSION_INPUT
  DELETE_COMMENT: JIRA_DELETE_COMMENT_INPUT
  DELETE_ISSUE: JIRA_DELETE_ISSUE_INPUT
  DELETE_VERSION: JIRA_DELETE_VERSION_INPUT
  DELETE_WORKLOG: JIRA_DELETE_WORKLOG_INPUT
  EDIT_ISSUE: JIRA_EDIT_ISSUE_INPUT
  FIND_USERS: JIRA_FIND_USERS_INPUT
  GET_ALL_ISSUE_TYPE_SCHEMES: JIRA_GET_ALL_ISSUE_TYPE_SCHEMES_INPUT
  GET_ALL_PROJECTS: JIRA_GET_ALL_PROJECTS_INPUT
  GET_ALL_STATUSES: JIRA_GET_ALL_STATUSES_INPUT
  GET_ALL_USERS: JIRA_GET_ALL_USERS_INPUT
  GET_COMMENT: JIRA_GET_COMMENT_INPUT
  GET_CURRENT_USER: JIRA_GET_CURRENT_USER_INPUT
  GET_ISSUE: JIRA_GET_ISSUE_INPUT
  GET_ISSUE_LINK_TYPES: JIRA_GET_ISSUE_LINK_TYPES_INPUT
  GET_ISSUE_PROPERTY: JIRA_GET_ISSUE_PROPERTY_INPUT
  GET_ISSUE_RESOLUTIONS: JIRA_GET_ISSUE_RESOLUTIONS_INPUT
  GET_ISSUE_TYPES: JIRA_GET_ISSUE_TYPES_INPUT
  GET_ISSUE_TYPE_SCHEME: JIRA_GET_ISSUE_TYPE_SCHEME_INPUT
  GET_ISSUE_WATCHERS: JIRA_GET_ISSUE_WATCHERS_INPUT
  GET_ISSUE_WORKLOGS: JIRA_GET_ISSUE_WORKLOGS_INPUT
  GET_PROJECT_VERSIONS: JIRA_GET_PROJECT_VERSIONS_INPUT
  GET_REMOTE_ISSUE_LINKS: JIRA_GET_REMOTE_ISSUE_LINKS_INPUT
  GET_TRANSITIONS: JIRA_GET_TRANSITIONS_INPUT
  GET_VOTES: JIRA_GET_VOTES_INPUT
  GET_WORKLOG: JIRA_GET_WORKLOG_INPUT
  LIST_BOARDS: JIRA_LIST_BOARDS_INPUT
  LIST_ISSUE_COMMENTS: JIRA_LIST_ISSUE_COMMENTS_INPUT
  LIST_SPRINTS: JIRA_LIST_SPRINTS_INPUT
  MOVE_ISSUE_TO_SPRINT: JIRA_MOVE_ISSUE_TO_SPRINT_INPUT
  REMOVE_WATCHER_FROM_ISSUE: JIRA_REMOVE_WATCHER_FROM_ISSUE_INPUT
  SEARCH_FOR_ISSUES_USING_JQL_GET: JIRA_SEARCH_FOR_ISSUES_USING_JQL_GET_INPUT
  SEARCH_FOR_ISSUES_USING_JQL_POST: JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST_INPUT
  SEARCH_ISSUES: JIRA_SEARCH_ISSUES_INPUT
  SEND_NOTIFICATION_FOR_ISSUE: JIRA_SEND_NOTIFICATION_FOR_ISSUE_INPUT
  TRANSITION_ISSUE: JIRA_TRANSITION_ISSUE_INPUT
  UPDATE_COMMENT: JIRA_UPDATE_COMMENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "JIRA".
 */
export type JIRA_TOOL_OUTPUTS = {
  ADD_ATTACHMENT: JIRA_ADD_ATTACHMENT_OUTPUT
  ADD_COMMENT: JIRA_ADD_COMMENT_OUTPUT
  ADD_WATCHER_TO_ISSUE: JIRA_ADD_WATCHER_TO_ISSUE_OUTPUT
  ASSIGN_ISSUE: JIRA_ASSIGN_ISSUE_OUTPUT
  BULK_CREATE_ISSUE: JIRA_BULK_CREATE_ISSUE_OUTPUT
  CREATE_ISSUE: JIRA_CREATE_ISSUE_OUTPUT
  CREATE_ISSUE_LINK: JIRA_CREATE_ISSUE_LINK_OUTPUT
  CREATE_PROJECT: JIRA_CREATE_PROJECT_OUTPUT
  CREATE_SPRINT: JIRA_CREATE_SPRINT_OUTPUT
  CREATE_VERSION: JIRA_CREATE_VERSION_OUTPUT
  DELETE_COMMENT: JIRA_DELETE_COMMENT_OUTPUT
  DELETE_ISSUE: JIRA_DELETE_ISSUE_OUTPUT
  DELETE_VERSION: JIRA_DELETE_VERSION_OUTPUT
  DELETE_WORKLOG: JIRA_DELETE_WORKLOG_OUTPUT
  EDIT_ISSUE: JIRA_EDIT_ISSUE_OUTPUT
  FIND_USERS: JIRA_FIND_USERS_OUTPUT
  GET_ALL_ISSUE_TYPE_SCHEMES: JIRA_GET_ALL_ISSUE_TYPE_SCHEMES_OUTPUT
  GET_ALL_PROJECTS: JIRA_GET_ALL_PROJECTS_OUTPUT
  GET_ALL_STATUSES: JIRA_GET_ALL_STATUSES_OUTPUT
  GET_ALL_USERS: JIRA_GET_ALL_USERS_OUTPUT
  GET_COMMENT: JIRA_GET_COMMENT_OUTPUT
  GET_CURRENT_USER: JIRA_GET_CURRENT_USER_OUTPUT
  GET_ISSUE: JIRA_GET_ISSUE_OUTPUT
  GET_ISSUE_LINK_TYPES: JIRA_GET_ISSUE_LINK_TYPES_OUTPUT
  GET_ISSUE_PROPERTY: JIRA_GET_ISSUE_PROPERTY_OUTPUT
  GET_ISSUE_RESOLUTIONS: JIRA_GET_ISSUE_RESOLUTIONS_OUTPUT
  GET_ISSUE_TYPES: JIRA_GET_ISSUE_TYPES_OUTPUT
  GET_ISSUE_TYPE_SCHEME: JIRA_GET_ISSUE_TYPE_SCHEME_OUTPUT
  GET_ISSUE_WATCHERS: JIRA_GET_ISSUE_WATCHERS_OUTPUT
  GET_ISSUE_WORKLOGS: JIRA_GET_ISSUE_WORKLOGS_OUTPUT
  GET_PROJECT_VERSIONS: JIRA_GET_PROJECT_VERSIONS_OUTPUT
  GET_REMOTE_ISSUE_LINKS: JIRA_GET_REMOTE_ISSUE_LINKS_OUTPUT
  GET_TRANSITIONS: JIRA_GET_TRANSITIONS_OUTPUT
  GET_VOTES: JIRA_GET_VOTES_OUTPUT
  GET_WORKLOG: JIRA_GET_WORKLOG_OUTPUT
  LIST_BOARDS: JIRA_LIST_BOARDS_OUTPUT
  LIST_ISSUE_COMMENTS: JIRA_LIST_ISSUE_COMMENTS_OUTPUT
  LIST_SPRINTS: JIRA_LIST_SPRINTS_OUTPUT
  MOVE_ISSUE_TO_SPRINT: JIRA_MOVE_ISSUE_TO_SPRINT_OUTPUT
  REMOVE_WATCHER_FROM_ISSUE: JIRA_REMOVE_WATCHER_FROM_ISSUE_OUTPUT
  SEARCH_FOR_ISSUES_USING_JQL_GET: JIRA_SEARCH_FOR_ISSUES_USING_JQL_GET_OUTPUT
  SEARCH_FOR_ISSUES_USING_JQL_POST: JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST_OUTPUT
  SEARCH_ISSUES: JIRA_SEARCH_ISSUES_OUTPUT
  SEND_NOTIFICATION_FOR_ISSUE: JIRA_SEND_NOTIFICATION_FOR_ISSUE_OUTPUT
  TRANSITION_ISSUE: JIRA_TRANSITION_ISSUE_OUTPUT
  UPDATE_COMMENT: JIRA_UPDATE_COMMENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of JIRA's NEW_ISSUE_TRIGGER trigger payload.
 */
type JIRA_NEW_ISSUE_TRIGGER_PAYLOAD = {
  /**
   * Assignee
   * @description Username of the assignee
   * @default null
   */
  assignee: string | null;
  /**
   * Created At
   * @description Timestamp when the issue was created
   */
  created_at?: string;
  /**
   * Description
   * @description Description of the issue
   * @default null
   */
  description: string | null;
  /**
   * Issue Id
   * @description The ID of the created issue
   */
  issue_id?: string;
  /**
   * Issue Key
   * @description The key of the created issue
   */
  issue_key?: string;
  /**
   * Project Key
   * @description The project key
   */
  project_key?: string;
  /**
   * Reporter
   * @description Username of the reporter
   */
  reporter?: string;
  /**
   * Summary
   * @description Summary of the issue
   */
  summary?: string;
};

/**
 * Type of JIRA's NEW_PROJECT_TRIGGER trigger payload.
 */
type JIRA_NEW_PROJECT_TRIGGER_PAYLOAD = {
  /**
   * Created At
   * @description Timestamp when the project was created
   */
  created_at?: string;
  /**
   * Lead Name
   * @description The username of the project lead
   */
  lead_name?: string;
  /**
   * Project Id
   * @description The ID of the created project
   */
  project_id?: string;
  /**
   * Project Key
   * @description The key of the created project
   */
  project_key?: string;
  /**
   * Project Name
   * @description The name of the created project
   */
  project_name?: string;
  /**
   * Project Type
   * @description The type of the created project
   */
  project_type?: string;
};

/**
 * Type of JIRA's UPDATED_ISSUE_TRIGGER trigger payload.
 */
type JIRA_UPDATED_ISSUE_TRIGGER_PAYLOAD = {
  /**
   * Assignee
   * @description Username of the assignee
   * @default null
   */
  assignee: string | null;
  /**
   * Description
   * @description Description of the issue
   * @default null
   */
  description: string | null;
  /**
   * Issue Id
   * @description The ID of the updated issue
   */
  issue_id?: string;
  /**
   * Issue Key
   * @description The key of the updated issue
   */
  issue_key?: string;
  /**
   * Project Key
   * @description The project key
   */
  project_key?: string;
  /**
   * Reporter
   * @description Username of the reporter
   */
  reporter?: string;
  /**
   * Summary
   * @description Summary of the issue
   */
  summary?: string;
  /**
   * Updated At
   * @description Timestamp when the issue was updated
   */
  updated_at?: string;
  /**
   * Updated Fields
   * @description Fields that were updated
   */
  updated_fields?: {
      [key: string]: unknown;
  };
};

/**
 * Map of Composio's JIRA toolkit.
 */
export const JIRA = {
  slug: "jira",
  tools: {
    /**
     * Uploads and attaches a file to a jira issue.
     */
    ADD_ATTACHMENT: "JIRA_ADD_ATTACHMENT",
    /**
     * Adds a comment using atlassian document format (adf) for rich text to an existing jira issue.
     */
    ADD_COMMENT: "JIRA_ADD_COMMENT",
    /**
     * Adds a user to an issue's watcher list by account id.
     */
    ADD_WATCHER_TO_ISSUE: "JIRA_ADD_WATCHER_TO_ISSUE",
    /**
     * Assigns a jira issue to a user, default assignee, or unassigns; supports email/name lookup.
     */
    ASSIGN_ISSUE: "JIRA_ASSIGN_ISSUE",
    /**
     * Creates multiple jira issues (up to 50 per call) with full feature support including markdown, assignee resolution, and priority handling.
     */
    BULK_CREATE_ISSUE: "JIRA_BULK_CREATE_ISSUE",
    /**
     * Creates a new jira issue (e.g., bug, task, story) in a specified project.
     */
    CREATE_ISSUE: "JIRA_CREATE_ISSUE",
    /**
     * Links two jira issues using a specified link type with optional comment.
     */
    CREATE_ISSUE_LINK: "JIRA_CREATE_ISSUE_LINK",
    /**
     * Creates a new jira project with required lead, template, and type configuration.
     */
    CREATE_PROJECT: "JIRA_CREATE_PROJECT",
    /**
     * Creates a new sprint on a jira board with optional start/end dates and goal.
     */
    CREATE_SPRINT: "JIRA_CREATE_SPRINT",
    /**
     * Creates a new version for releases or milestones in a jira project.
     */
    CREATE_VERSION: "JIRA_CREATE_VERSION",
    /**
     * Deletes a specific comment from a jira issue using its id and the issue's id/key; requires user permission to delete comments on the issue.
     */
    DELETE_COMMENT: "JIRA_DELETE_COMMENT",
    /**
     * Deletes a jira issue by its id or key.
     */
    DELETE_ISSUE: "JIRA_DELETE_ISSUE",
    /**
     * Deletes a jira version and optionally reassigns its issues.
     */
    DELETE_VERSION: "JIRA_DELETE_VERSION",
    /**
     * Deletes a worklog from a jira issue with estimate adjustment options.
     */
    DELETE_WORKLOG: "JIRA_DELETE_WORKLOG",
    /**
     * Updates an existing jira issue with field values and operations. supports direct field parameters (summary, description, assignee, priority, etc.) that are merged with the fields parameter. direct parameters take precedence.
     */
    EDIT_ISSUE: "JIRA_EDIT_ISSUE",
    /**
     * Searches for jira users by email, display name, or username to find account ids; essential for assigning issues, adding watchers, and other user-related operations.
     */
    FIND_USERS: "JIRA_FIND_USERS",
    /**
     * Retrieves all jira issue type schemes with optional filtering and pagination.
     */
    GET_ALL_ISSUE_TYPE_SCHEMES: "JIRA_GET_ALL_ISSUE_TYPE_SCHEMES",
    /**
     * Retrieves all visible projects using the modern paginated jira api with server-side filtering and pagination support.
     */
    GET_ALL_PROJECTS: "JIRA_GET_ALL_PROJECTS",
    /**
     * Retrieves all available issue statuses from jira with details.
     */
    GET_ALL_STATUSES: "JIRA_GET_ALL_STATUSES",
    /**
     * Retrieves all users from the jira instance including active, inactive, and other user states with pagination support.
     */
    GET_ALL_USERS: "JIRA_GET_ALL_USERS",
    /**
     * Retrieves a specific comment by id from a jira issue with optional expansions.
     */
    GET_COMMENT: "JIRA_GET_COMMENT",
    /**
     * Retrieves detailed information about the currently authenticated jira user.
     */
    GET_CURRENT_USER: "JIRA_GET_CURRENT_USER",
    /**
     * Retrieves a jira issue by id or key with customizable fields and expansions.
     */
    GET_ISSUE: "JIRA_GET_ISSUE",
    /**
     * Retrieves all configured issue link types from jira.
     */
    GET_ISSUE_LINK_TYPES: "JIRA_GET_ISSUE_LINK_TYPES",
    /**
     * Retrieves a custom property from a jira issue by key.
     */
    GET_ISSUE_PROPERTY: "JIRA_GET_ISSUE_PROPERTY",
    /**
     * Retrieves all available issue resolution types from jira.
     */
    GET_ISSUE_RESOLUTIONS: "JIRA_GET_ISSUE_RESOLUTIONS",
    /**
     * Retrieves all jira issue types available to the user using the modern api v3 endpoint; results vary based on 'administer jira' global or 'browse projects' project permissions.
     */
    GET_ISSUE_TYPES: "JIRA_GET_ISSUE_TYPES",
    /**
     * Gets a jira issue type scheme by id with all associated issue types.
     */
    GET_ISSUE_TYPE_SCHEME: "JIRA_GET_ISSUE_TYPE_SCHEME",
    /**
     * Retrieves users watching a jira issue for update notifications.
     */
    GET_ISSUE_WATCHERS: "JIRA_GET_ISSUE_WATCHERS",
    /**
     * Retrieves worklogs for a jira issue with user permission checks.
     */
    GET_ISSUE_WORKLOGS: "JIRA_GET_ISSUE_WORKLOGS",
    /**
     * Retrieves all versions for a jira project with optional expansion.
     */
    GET_PROJECT_VERSIONS: "JIRA_GET_PROJECT_VERSIONS",
    /**
     * Retrieves links from a jira issue to external resources.
     */
    GET_REMOTE_ISSUE_LINKS: "JIRA_GET_REMOTE_ISSUE_LINKS",
    /**
     * Retrieves available workflow transitions for a jira issue.
     */
    GET_TRANSITIONS: "JIRA_GET_TRANSITIONS",
    /**
     * Fetches voting details for a jira issue; requires voting to be enabled in jira's general settings.
     */
    GET_VOTES: "JIRA_GET_VOTES",
    /**
     * Retrieves worklogs for a specified jira issue.
     */
    GET_WORKLOG: "JIRA_GET_WORKLOG",
    /**
     * Retrieves paginated jira boards with filtering and sorting options.
     */
    LIST_BOARDS: "JIRA_LIST_BOARDS",
    /**
     * Retrieves paginated comments from a jira issue with optional ordering.
     */
    LIST_ISSUE_COMMENTS: "JIRA_LIST_ISSUE_COMMENTS",
    /**
     * Retrieves paginated sprints from a jira board with optional state filtering.
     */
    LIST_SPRINTS: "JIRA_LIST_SPRINTS",
    /**
     * Moves one or more jira issues to a specified active sprint.
     */
    MOVE_ISSUE_TO_SPRINT: "JIRA_MOVE_ISSUE_TO_SPRINT",
    /**
     * Removes a user from an issue's watcher list by account id.
     */
    REMOVE_WATCHER_FROM_ISSUE: "JIRA_REMOVE_WATCHER_FROM_ISSUE",
    /**
     * Searches for jira issues using jql with pagination and field selection.
     */
    SEARCH_FOR_ISSUES_USING_JQL_GET: "JIRA_SEARCH_FOR_ISSUES_USING_JQL_GET",
    /**
     * Searches for jira issues using jql via post request for complex queries; ideal for lengthy jql queries that might exceed url character limits
     */
    SEARCH_FOR_ISSUES_USING_JQL_POST: "JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST",
    /**
     * Advanced jira issue search supporting structured filters and raw jql.
     */
    SEARCH_ISSUES: "JIRA_SEARCH_ISSUES",
    /**
     * Sends a customized email notification for a jira issue.
     */
    SEND_NOTIFICATION_FOR_ISSUE: "JIRA_SEND_NOTIFICATION_FOR_ISSUE",
    /**
     * Transitions a jira issue to a different workflow state, with support for transition name lookup and user assignment by email.
     */
    TRANSITION_ISSUE: "JIRA_TRANSITION_ISSUE",
    /**
     * Updates text content or visibility of an existing jira comment.
     */
    UPDATE_COMMENT: "JIRA_UPDATE_COMMENT",
  },
  triggerTypes: {
    /**
     * Triggered when a new issue is created in Jira
     */
    NEW_ISSUE_TRIGGER: "JIRA_NEW_ISSUE_TRIGGER",
    /**
     * Triggered when a new project is added in Jira
     */
    NEW_PROJECT_TRIGGER: "JIRA_NEW_PROJECT_TRIGGER",
    /**
     * Triggered when an issue is updated in Jira
     */
    UPDATED_ISSUE_TRIGGER: "JIRA_UPDATED_ISSUE_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "JIRA".
 */
export type JIRA_TRIGGER_PAYLOADS = {
  NEW_ISSUE_TRIGGER: JIRA_NEW_ISSUE_TRIGGER_PAYLOAD
  NEW_PROJECT_TRIGGER: JIRA_NEW_PROJECT_TRIGGER_PAYLOAD
  UPDATED_ISSUE_TRIGGER: JIRA_UPDATED_ISSUE_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "JIRA".
 */
export type JIRA_TRIGGER_EVENTS = {
  NEW_ISSUE_TRIGGER: TriggerEvent<JIRA_NEW_ISSUE_TRIGGER_PAYLOAD>
  NEW_PROJECT_TRIGGER: TriggerEvent<JIRA_NEW_PROJECT_TRIGGER_PAYLOAD>
  UPDATED_ISSUE_TRIGGER: TriggerEvent<JIRA_UPDATED_ISSUE_TRIGGER_PAYLOAD>
}
