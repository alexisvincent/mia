import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ASANA's ASANA_ADD_FOLLOWERS_TO_TASK tool input.
 */
type ASANA_ADD_FOLLOWERS_TO_TASK_INPUT = {
  /**
   * Followers
   * @description An array of user GIDs to add as followers to the task. For example: ["12345", "67890"].
   */
  followers?: string[];
  /**
   * Opt Fields
   * @description This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. For example ["followers", "assignee"].
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Task Gid
   * @description The globally unique identifier for the task.
   */
  task_gid?: string;
};

/**
 * Type of ASANA's ASANA_ADD_FOLLOWERS_TO_TASK tool output.
 */
type ASANA_ADD_FOLLOWERS_TO_TASK_OUTPUT = {
  /**
   * Data
   * @description The task with updated followers.
   */
  data?: {
      /**
       * Followers
       * @description Array of users following this task.
       * @default null
       */
      followers: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           */
          gid: string;
          /**
           * Name
           * @description The user's name.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           */
          resource_type: string;
      }[] | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Name
       * @description Name of the task.
       * @default null
       */
      name: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
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
 * Type of ASANA's ASANA_ADD_SUPPORTING_RELATIONSHIP tool input.
 */
type ASANA_ADD_SUPPORTING_RELATIONSHIP_INPUT = {
  /** Data */
  data?: {
      /**
       * Contribution Weight
       * @description A number between 0 and 1 (inclusive) representing the weight of the supporting resource's progress towards the goal's progress.
       * @default null
       */
      contribution_weight: number | null;
      /**
       * Insert After
       * @description The GID of an existing supporting resource. If provided, the new supporting resource will be placed after this one.
       * @default null
       */
      insert_after: string | null;
      /**
       * Insert Before
       * @description The GID of an existing supporting resource. If provided, the new supporting resource will be placed before this one.
       * @default null
       */
      insert_before: string | null;
      /**
       * Supporting Resource
       * @description The GID of the supporting resource (project, task, portfolio, or goal) to link to the goal.
       */
      supporting_resource: string;
  };
  /**
   * Goal Gid
   * @description Globally unique identifier for the goal.
   */
  goal_gid?: string;
  /**
   * Opt Fields
   * @description This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_ADD_SUPPORTING_RELATIONSHIP tool output.
 */
type ASANA_ADD_SUPPORTING_RELATIONSHIP_OUTPUT = {
  /**
   * GoalRelationship
   * @default null
   */
  data: {
      /**
       * Contribution Weight
       * @description The weight that the supporting resource's progress contributes to the supported goal's progress.
       * @default null
       */
      contribution_weight: number | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Resource Subtype
       * @description The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. Eg: subgoal, supporting_work
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * SupportedGoal
       * @description The goal that the supporting resource supports.
       * @default null
       */
      supported_goal: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the goal.
           * @default null
           */
          name: string | null;
          /**
           * SupportedGoalOwner
           * @description The owner of the goal.
           * @default null
           */
          owner: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description The name of the owner.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * SupportingResource
       * @description The supporting resource that supports the goal.
       * @default null
       */
      supporting_resource: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the supporting resource.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
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
 * Type of ASANA's ASANA_ADD_TASK_TO_SECTION tool input.
 */
type ASANA_ADD_TASK_TO_SECTION_INPUT = {
  /**
   * Insert After
   * @description GID of a task in the section after which to insert the current task. Mutually exclusive with `insert_before`.
   * @default null
   */
  insert_after: string | null;
  /**
   * Insert Before
   * @description GID of a task in the section before which to insert the current task. Mutually exclusive with `insert_after`.
   * @default null
   */
  insert_before: string | null;
  /**
   * Section Gid
   * @description GID of the target section.
   */
  section_gid?: string;
  /**
   * Task Gid
   * @description GID of the existing task to add.
   */
  task_gid?: string;
};

/**
 * Type of ASANA's ASANA_ADD_TASK_TO_SECTION tool output.
 */
type ASANA_ADD_TASK_TO_SECTION_OUTPUT = {
  /**
   * Data
   * @description Empty dictionary confirming successful addition.
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
 * Type of ASANA's ASANA_CREATE_ALLOCATION tool input.
 */
type ASANA_CREATE_ALLOCATION_INPUT = {
  /**
   * Assignee Gid
   * @description The ID of the user to whom the allocation is assigned. This can be the user's GID or the string 'me' to refer to the authenticated user.
   */
  assignee_gid?: string;
  /**
   * End On
   * Format: date
   * @description The end date of the allocation. The format is YYYY-MM-DD.
   */
  end_on?: string;
  /**
   * Minutes Per Week
   * @description The number of minutes per week the user is allocated for. Must be greater than 0.
   */
  minutes_per_week?: number;
  /**
   * Notes
   * @description Any additional notes related to the allocation.
   * @default null
   */
  notes: string | null;
  /**
   * Project Gid
   * @description The project GID for which this allocation is being made. If provided, the allocation will be linked to this project.
   * @default null
   */
  project_gid: string | null;
  /**
   * Start On
   * Format: date
   * @description The start date of the allocation. The format is YYYY-MM-DD.
   */
  start_on?: string;
  /**
   * Workspace Gid
   * @description The ID of the workspace where the allocation will be created.
   */
  workspace_gid?: string;
};

/**
 * Type of ASANA's ASANA_CREATE_ALLOCATION tool output.
 */
type ASANA_CREATE_ALLOCATION_OUTPUT = {
  /**
   * Data
   * @description The full record of the newly created allocation.
   */
  data?: {
      /**
       * Assignee Gid
       * @description The GID of the user to whom the allocation is assigned.
       */
      assignee_gid: string;
      /**
       * Created At
       * @description The time at which this resource was created.
       */
      created_at: string;
      /**
       * End On
       * Format: date
       * @description The end date of the allocation.
       */
      end_on: string;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Minutes Per Week
       * @description The number of minutes per week the user is allocated for.
       */
      minutes_per_week: number;
      /**
       * Notes
       * @description Free-form text related to the allocation.
       * @default null
       */
      notes: string | null;
      /**
       * Project Gid
       * @description The GID of the project this allocation is associated with, or null if not project-specific.
       * @default null
       */
      project_gid: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
      /**
       * Start On
       * Format: date
       * @description The start date of the allocation.
       */
      start_on: string;
      /**
       * Workspace Gid
       * @description The GID of the workspace where the allocation was created.
       */
      workspace_gid: string;
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
 * Type of ASANA's ASANA_CREATE_ATTACHMENT_FOR_TASK tool input.
 */
type ASANA_CREATE_ATTACHMENT_FOR_TASK_INPUT = {
  /**
   * Connect To App
   * @description Whether to connect the attachment to the app. If true, the attachment will be displayed in the Asana UI as an app attachment. If false, the attachment will be displayed as a regular file attachment. Defaults to true.
   * @default null
   */
  connect_to_app: boolean | null;
  /**
   * File Content
   * Format: binary
   * @description The file content to be uploaded.
   */
  file_content?: string;
  /**
   * File Content Type
   * @description The content type of the file. E.g. 'application/pdf' or 'image/jpeg'.
   */
  file_content_type?: string;
  /**
   * File Name
   * @description The name of the file.
   */
  file_name?: string;
  /**
   * Parent Gid
   * @description Globally unique identifier for the parent task or comment.
   */
  parent_gid?: string;
  /**
   * Resource Subtype
   * @description The type of the attachment. Must be one of the given values. If not specified, a regular file attachment will be created. If 'asana' is specified, the attachment will be a link to another Asana task. If 'external' is specified, the attachment will be a link to an external resource. If 'gdrive' is specified, the attachment will be a link to a Google Drive file. If 'box' is specified, the attachment will be a link to a Box file. If 'dropbox' is specified, the attachment will be a link to a Dropbox file. If 'vimeo' is specified, the attachment will be a link to a Vimeo video.
   * @default null
   */
  resource_subtype: string | null;
};

/**
 * Type of ASANA's ASANA_CREATE_ATTACHMENT_FOR_TASK tool output.
 */
type ASANA_CREATE_ATTACHMENT_FOR_TASK_OUTPUT = {
  /**
   * CreateAttachmentForTaskResponseData
   * @description The attachment object that was created.
   * @default null
   */
  data: {
      /**
       * Connected To App
       * @description Whether the attachment is connected to the app making the request for the purposes of showing users a preview of the attachment.
       * @default null
       */
      connected_to_app: boolean | null;
      /**
       * Created At
       * @description The time at which this resource was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Download Url
       * @description The URL where the attachment can be downloaded. (Read-only).
       * @default null
       */
      download_url: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Host
       * @description The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `box`, `vimeo`, and `external`.
       * @default null
       */
      host: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Parent
       * @description The parent object to which this attachment is attached.
       * @default null
       */
      parent: {
          [key: string]: unknown;
      } | null;
      /**
       * Permanent Url
       * @description The URL where the attachment can be viewed. (Read-only).
       * @default null
       */
      permanent_url: string | null;
      /**
       * Resource Subtype
       * @description The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `box`, `vimeo`, and `external`.
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Size
       * @description The size of the attachment in bytes. (Read-only).
       * @default null
       */
      size: number | null;
      /**
       * View Url
       * @description The URL where the attachment can be viewed. (Read-only).
       * @default null
       */
      view_url: string | null;
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
 * Type of ASANA's ASANA_CREATE_A_PROJECT tool input.
 */
type ASANA_CREATE_A_PROJECT_INPUT = {
  /**
   * Data
   * @description Data payload for the new project.
   */
  data?: {
      /**
       * Archived
       * @description True to archive the project. Archived projects are typically hidden in the UI and may alter query results.
       * @default false
       */
      archived: boolean;
      /**
       * ColorEnum
       * @description Color of the project.
       * @default light-green
       * @enum {string|null}
       */
      color: "dark-pink" | "dark-green" | "dark-blue" | "dark-red" | "dark-teal" | "dark-brown" | "dark-orange" | "dark-purple" | "dark-warm-gray" | "light-pink" | "light-green" | "light-blue" | "light-red" | "light-teal" | "light-brown" | "light-orange" | "light-purple" | "light-warm-gray" | "none" | null;
      /**
       * CurrentStatus
       * @description Deprecated: New integrations should prefer the `current_status_update` field for setting the initial project status.
       * @default null
       */
      current_status: {
          /**
           * Author
           * @description User object for the author of the status update.
           */
          author?: {
              [key: string]: unknown;
          };
          /**
           * Color
           * @description Color associated with the status update.
           * @default green
           * @enum {string}
           */
          color: "green" | "yellow" | "red" | "blue" | "complete";
          /**
           * Created By
           * @description User object for the creator of the status update.
           */
          created_by?: {
              [key: string]: unknown;
          };
          /**
           * Html Text
           * @description HTML formatted text content. May require `opt_fields` in parent request for population.
           */
          html_text?: string;
          /**
           * Text
           * @description Text content of the status update.
           */
          text?: string;
          /**
           * Title
           * @description Title of the project status update.
           */
          title: string;
      } | null;
      /**
       * Current Status Update
       * @description Initial project status update, an alternative to the deprecated `current_status` field. Define title, text, color.
       * @default null
       */
      current_status_update: {
          [key: string]: unknown;
      } | null;
      /**
       * Custom Fields
       * @description Object mapping Custom Field GIDs to their values (enum GIDs, strings, numbers, objects). Refer to Asana API documentation for value formats.
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      } | null;
      /**
       * Default Access Level
       * @description Default access level for new project members.
       * @enum {string}
       */
      default_access_level?: "admin" | "editor" | "commenter" | "viewer";
      /**
       * Default View
       * @description Default view for the project.
       * @default calendar
       * @enum {string}
       */
      default_view: "list" | "board" | "calendar" | "timeline";
      /**
       * Due Date
       * @description Deprecated: New integrations should prefer the `due_on` field. The date on which this project is due, in YYYY-MM-DD format.
       * @default null
       */
      due_date: string | null;
      /**
       * Due On
       * @description The date on which this project is due, in YYYY-MM-DD format.
       * @default null
       */
      due_on: string | null;
      /**
       * Followers
       * @description Create-only. Comma-separated user GIDs to follow the project (e.g., '12345,me'). Followers receive notifications for added tasks.
       * @default null
       */
      followers: string | null;
      /**
       * Html Notes
       * @description HTML representation of project notes. May require `opt_fields` in parent request for population.
       */
      html_notes?: string;
      /**
       * Minimum Access Level For Customization
       * @description Minimum access level required for project members to modify this project's workflow and appearance.
       * @enum {string}
       */
      minimum_access_level_for_customization?: "admin" | "editor";
      /**
       * Minimum Access Level For Sharing
       * @description Minimum access level required for project members to share the project and manage its memberships.
       * @enum {string}
       */
      minimum_access_level_for_sharing?: "admin" | "editor";
      /**
       * Name
       * @description Name of the project, ideally a short sentence fragment for UI readability.
       */
      name: string;
      /**
       * Notes
       * @description Free-form textual information or description for the project.
       */
      notes?: string;
      /**
       * Owner
       * @description User GID of the project owner (e.g., 'me', '12345'). Null implies default or no specific owner.
       * @default null
       */
      owner: string | null;
      /**
       * Privacy Setting
       * @description Privacy setting of the project. Organization administrators may restrict available values.
       * @enum {string}
       */
      privacy_setting?: "public_to_workspace" | "private_to_team" | "private";
      /**
       * Start On
       * @description The date on which work for this project begins, in YYYY-MM-DD format. If setting this, `due_on` must also be provided and be different from `start_on`.
       * @default null
       */
      start_on: string | null;
      /**
       * Team
       * @description The GID of the team to associate with this project. Required if `workspace` is not provided.
       * @default null
       */
      team: string | null;
      /**
       * Workspace
       * @description The GID of the workspace to associate with this project. Required if `team` is not provided.
       */
      workspace?: string;
  };
  /**
   * Opt Fields
   * @description Comma-separated optional properties to include in the response (e.g., 'name,notes').
   */
  opt_fields?: string[];
  /**
   * Opt Pretty
   * @description True for human-readable JSON response (debugging only due to size/processing).
   */
  opt_pretty?: boolean;
};

/**
 * Type of ASANA's ASANA_CREATE_A_PROJECT tool output.
 */
type ASANA_CREATE_A_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Contains the newly created project resource.
   */
  data?: {
      /**
       * Data
       * @description Contains the full details of the project resource.
       */
      data: {
          /**
           * Archived
           * @description True if project is archived (hidden by default in UI).
           * @default null
           */
          archived: boolean | null;
          /**
           * Color
           * @description Color of the project.
           * @default null
           */
          color: (("dark-pink" | "dark-green" | "dark-blue" | "dark-red" | "dark-teal" | "dark-brown" | "dark-orange" | "dark-purple" | "dark-warm-gray" | "light-pink" | "light-green" | "light-blue" | "light-red" | "light-teal" | "light-brown" | "light-orange" | "light-purple" | "light-warm-gray" | "none") | null) | null;
          /**
           * Completed
           * @description True if project is marked complete.
           * @default null
           */
          completed: boolean | null;
          /**
           * Completed At
           * Format: date-time
           * @description UTC completion timestamp, or null if not completed.
           * @default null
           */
          completed_at: string | null;
          /**
           * CompletedBy
           * @default null
           */
          completed_by: {
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description *Read-only except when same user as requester*. The user's name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Created At
           * Format: date-time
           * @description UTC creation timestamp.
           * @default null
           */
          created_at: string | null;
          /**
           * CreatedFromTemplate
           * @default null
           */
          created_from_template: {
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the project template from which this project was created.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * CurrentStatus
           * @default null
           */
          current_status: {
              /**
               * Author
               * @description User object for the author of the status update.
               */
              author?: {
                  [key: string]: unknown;
              };
              /**
               * Color
               * @description Color associated with the status update.
               * @default green
               * @enum {string}
               */
              color: "green" | "yellow" | "red" | "blue" | "complete";
              /**
               * Created By
               * @description User object for the creator of the status update.
               */
              created_by?: {
                  [key: string]: unknown;
              };
              /**
               * Html Text
               * @description HTML formatted text content. May require `opt_fields` in parent request for population.
               */
              html_text?: string;
              /**
               * Text
               * @description Text content of the status update.
               */
              text?: string;
              /**
               * Title
               * @description Title of the project status update.
               */
              title: string;
          } | null;
          /**
           * CurrentStatusUpdate
           * @default null
           */
          current_status_update: {
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * ResourceSubtype
               * @description Subtype indicating parent type (project, portfolio, goal).
               * @default null
               * @enum {string|null}
               */
              resource_subtype: "project_status_update" | "portfolio_status_update" | "goal_status_update" | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
              /**
               * Title
               * @description Title of the status update.
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Custom Field Settings
           * @description Array of Custom Field Settings associated with this project (compact form).
           * @default null
           */
          custom_field_settings: {
              /**
               * CustomField
               * @default null
               */
              custom_field: {
                  /**
                   * AsanaCreatedField
                   * @description *(Conditional)* Unique identifier associating field with template source. See Asana-created field names for values.
                   * @default null
                   */
                  asana_created_field: (("a_v_requirements" | "account_name" | "actionable" | "align_shipping_link" | "align_status" | "allotted_time" | "appointment" | "approval_stage" | "approved" | "article_series" | "board_committee" | "browser" | "campaign_audience" | "campaign_project_status" | "campaign_regions" | "channel_primary" | "client_topic_type" | "complete_by" | "contact" | "contact_email_address" | "content_channels" | "content_channels_needed" | "content_stage" | "content_type" | "contract" | "contract_status" | "cost" | "creation_stage" | "creative_channel" | "creative_needed" | "creative_needs" | "data_sensitivity" | "deal_size" | "delivery_appt" | "delivery_appt_date" | "department" | "department_responsible" | "design_request_needed" | "design_request_type" | "discussion_category" | "do_this_task" | "editorial_content_status" | "editorial_content_tag" | "editorial_content_type" | "effort" | "effort_level" | "est_completion_date" | "estimated_time" | "estimated_value" | "expected_cost" | "external_steps_needed" | "favorite_idea" | "feedback_type" | "financial" | "funding_amount" | "grant_application_process" | "hiring_candidate_status" | "idea_status" | "ids_link" | "ids_patient_link" | "implementation_stage" | "insurance" | "interview_area" | "interview_question_score" | "itero_scan_link" | "job_s_applied_to" | "lab" | "launch_status" | "lead_status" | "localization_language" | "localization_market_team" | "localization_status" | "meeting_minutes" | "meeting_needed" | "minutes" | "mrr" | "must_localize" | "name_of_foundation" | "need_to_follow_up" | "next_appointment" | "next_steps_sales" | "num_people" | "number_of_user_reports" | "office_location" | "onboarding_activity" | "owner" | "participants_needed" | "patient_date_of_birth" | "patient_email" | "patient_phone" | "patient_status" | "phone_number" | "planning_category" | "point_of_contact" | "position" | "post_format" | "prescription" | "priority" | "priority_level" | "product" | "product_stage" | "progress" | "project_size" | "project_status" | "proposed_budget" | "publish_status" | "reason_for_scan" | "referral" | "request_type" | "research_status" | "responsible_department" | "responsible_team" | "risk_assessment_status" | "room_name" | "sales_counterpart" | "sentiment" | "shipping_link" | "social_channels" | "stage" | "status" | "status_design" | "status_of_initiative" | "system_setup" | "task_progress" | "team" | "team_marketing" | "team_responsible" | "time_it_takes_to_complete_tasks" | "timeframe" | "treatment_type" | "type_work_requests_it" | "use_agency" | "user_name" | "vendor_category" | "vendor_type" | "word_count") | null) | null;
                  /**
                   * CreatedBy
                   * @default null
                   */
                  created_by: {
                      /**
                       * Gid
                       * @description Globally unique identifier of the resource.
                       * @default null
                       */
                      gid: string | null;
                      /**
                       * Name
                       * @description *Read-only except when same user as requester*. The user's name.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Resource Type
                       * @description The base type of this resource.
                       * @default null
                       */
                      resource_type: string | null;
                  } | null;
                  /**
                   * Currency Code
                   * @description ISO 4217 currency code if `format` is `currency`. Null otherwise.
                   * @default null
                   */
                  currency_code: string | null;
                  /**
                   * Custom Label
                   * @description String next to value if `format` is `custom`. Null otherwise.
                   * @default null
                   */
                  custom_label: string | null;
                  /**
                   * CustomLabelPosition
                   * @description For `custom` format fields, indicates custom label placement. Null if format is not `custom`.
                   * @default null
                   */
                  custom_label_position: (("prefix" | "suffix") | null) | null;
                  /**
                   * DateValue
                   * @description *Conditional*. For `date` types, holds chosen date/time. Null if no date selected.
                   * @default null
                   */
                  date_value: {
                      /**
                       * Date
                       * @description Date in YYYY-MM-DD format.
                       * @default null
                       */
                      date: string | null;
                      /**
                       * Date Time
                       * @description Date and time in ISO 8601 format. Null if no time value is selected.
                       * @default null
                       */
                      date_time: string | null;
                  } | null;
                  /**
                   * Description
                   * @description *(Opt-in field)* Description. Ensure `opt_fields` includes path (e.g., 'custom_fields.description').
                   * @default null
                   */
                  description: string | null;
                  /**
                   * Display Value
                   * @description String representation for display, resilient to new custom field types.
                   * @default null
                   */
                  display_value: string | null;
                  /**
                   * Enabled
                   * @description *Conditional*. If the custom field is enabled.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Enum Options
                   * @description *(Conditional)* For `enum` types, lists GID, name, enabled status, and color of selectable options. See Asana API docs for managing options.
                   * @default null
                   */
                  enum_options: {
                      /**
                       * Color
                       * @description Color of the enum option.
                       * @default null
                       */
                      color: string | null;
                      /**
                       * Enabled
                       * @description If the enum option is a selectable value for the custom field.
                       * @default null
                       */
                      enabled: boolean | null;
                      /**
                       * Gid
                       * @description Globally unique identifier of the resource.
                       * @default null
                       */
                      gid: string | null;
                      /**
                       * Name
                       * @description Name of the enum option.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Resource Type
                       * @description The base type of this resource.
                       * @default null
                       */
                      resource_type: string | null;
                  }[] | null;
                  /**
                   * EnumValue
                   * @default null
                   */
                  enum_value: {
                      /**
                       * Color
                       * @description Color of the enum option.
                       * @default null
                       */
                      color: string | null;
                      /**
                       * Enabled
                       * @description If the enum option is a selectable value for the custom field.
                       * @default null
                       */
                      enabled: boolean | null;
                      /**
                       * Gid
                       * @description Globally unique identifier of the resource.
                       * @default null
                       */
                      gid: string | null;
                      /**
                       * Name
                       * @description Name of the enum option.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Resource Type
                       * @description The base type of this resource.
                       * @default null
                       */
                      resource_type: string | null;
                  } | null;
                  /**
                   * Format
                   * @description Format of this custom field.
                   * @default null
                   * @enum {string|null}
                   */
                  format: "currency" | "identifier" | "percentage" | "custom" | "duration" | "none" | null;
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Has Notifications Enabled
                   * @description *Conditional*. If true, task followers receive inbox notifications for changes to this field.
                   * @default null
                   */
                  has_notifications_enabled: boolean | null;
                  /**
                   * Id Prefix
                   * @description For 'custom_id' representation, prefix string for the custom ID.
                   * @default null
                   */
                  id_prefix: string | null;
                  /**
                   * Is Formula Field
                   * @description *Conditional*. True if a formula field (value is calculated).
                   * @default null
                   */
                  is_formula_field: boolean | null;
                  /**
                   * Is Global To Workspace
                   * @description True if this custom field is available to all containers in the workspace.
                   * @default null
                   */
                  is_global_to_workspace: boolean | null;
                  /**
                   * Is Value Read Only
                   * @description *Conditional*. True if value is read-only.
                   * @default null
                   */
                  is_value_read_only: boolean | null;
                  /**
                   * Multi Enum Values
                   * @description *Conditional*. For `multi_enum` types, contains selected enum option objects.
                   * @default null
                   */
                  multi_enum_values: {
                      /**
                       * Color
                       * @description Color of the enum option.
                       * @default null
                       */
                      color: string | null;
                      /**
                       * Enabled
                       * @description If the enum option is a selectable value for the custom field.
                       * @default null
                       */
                      enabled: boolean | null;
                      /**
                       * Gid
                       * @description Globally unique identifier of the resource.
                       * @default null
                       */
                      gid: string | null;
                      /**
                       * Name
                       * @description Name of the enum option.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Resource Type
                       * @description The base type of this resource.
                       * @default null
                       */
                      resource_type: string | null;
                  }[] | null;
                  /**
                   * Name
                   * @description Name of the custom field.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Number Value
                   * @description *Conditional*. Numerical value for `number` type field.
                   * @default null
                   */
                  number_value: number | null;
                  /**
                   * People Value
                   * @description *Conditional*. For `people` types, array of compact user objects representing selected people.
                   * @default null
                   */
                  people_value: {
                      /**
                       * Gid
                       * @description Globally unique identifier of the resource.
                       * @default null
                       */
                      gid: string | null;
                      /**
                       * Name
                       * @description *Read-only except when same user as requester*. The user's name.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Resource Type
                       * @description The base type of this resource.
                       * @default null
                       */
                      resource_type: string | null;
                  }[] | null;
                  /**
                   * Precision
                   * @description For `number` types, number of decimal places (0-6). 'percentage' format 0.25 (25%) is precision 0. 'Identifier' format is precision 0.
                   * @default null
                   */
                  precision: number | null;
                  /**
                   * RepresentationType
                   * @description Underlying data type dictating rendering and behavior.
                   * @default null
                   * @enum {string|null}
                   */
                  representation_type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | null;
                  /**
                   * ResourceSubtype1
                   * @description Type of the custom field.
                   * @default null
                   * @enum {string|null}
                   */
                  resource_subtype: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
                  /**
                   * Text Value
                   * @description *Conditional*. String value for `text` type field.
                   * @default null
                   */
                  text_value: string | null;
                  /**
                   * Type
                   * @description *Deprecated: New integrations should prefer the `resource_subtype` field.* The type of the custom field.
                   * @default null
                   * @enum {string|null}
                   */
                  type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | null;
              } | null;
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Is Important
               * @description If field is displayed in Asana web app's project/portfolio list/grid view.
               * @default null
               */
              is_important: boolean | null;
              /**
               * Parent
               * @default null
               */
              parent: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the parent resource.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource, typically a project or portfolio.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Project
               * @default null
               */
              project: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the project, ideally a short sentence fragment.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Custom Fields
           * @description Array of Custom Fields associated with this project.
           * @default null
           */
          custom_fields: {
              /**
               * DateValue
               * @description *Conditional*. For `date` types, holds chosen date/time. Null if no date selected.
               * @default null
               */
              date_value: {
                  /**
                   * Date
                   * @description Date in YYYY-MM-DD format.
                   * @default null
                   */
                  date: string | null;
                  /**
                   * Date Time
                   * @description Date and time in ISO 8601 format. Null if no time value is selected.
                   * @default null
                   */
                  date_time: string | null;
              } | null;
              /**
               * Display Value
               * @description String representation for display, resilient to new custom field types.
               * @default null
               */
              display_value: string | null;
              /**
               * Enabled
               * @description *Conditional*. If the custom field is enabled.
               * @default null
               */
              enabled: boolean | null;
              /**
               * Enum Options
               * @description *(Conditional)* For `enum` types, lists GID, name, enabled status, and color of selectable options. See Asana API docs for managing options.
               * @default null
               */
              enum_options: {
                  /**
                   * Color
                   * @description Color of the enum option.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description If the enum option is a selectable value for the custom field.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * EnumValue
               * @default null
               */
              enum_value: {
                  /**
                   * Color
                   * @description Color of the enum option.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description If the enum option is a selectable value for the custom field.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Id Prefix
               * @description For 'custom_id' representation, prefix string for the custom ID.
               * @default null
               */
              id_prefix: string | null;
              /**
               * Is Formula Field
               * @description *Conditional*. True if a formula field (value is calculated).
               * @default null
               */
              is_formula_field: boolean | null;
              /**
               * Multi Enum Values
               * @description *Conditional*. For `multi_enum` types, contains selected enum option objects.
               * @default null
               */
              multi_enum_values: {
                  /**
                   * Color
                   * @description Color of the enum option.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description If the enum option is a selectable value for the custom field.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * Name
               * @description Name of the custom field.
               * @default null
               */
              name: string | null;
              /**
               * Number Value
               * @description *Conditional*. Numerical value for `number` type field.
               * @default null
               */
              number_value: number | null;
              /**
               * RepresentationType
               * @description Underlying data type dictating rendering and behavior.
               * @default null
               * @enum {string|null}
               */
              representation_type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | null;
              /**
               * ResourceSubtype1
               * @description Type of the custom field.
               * @default null
               * @enum {string|null}
               */
              resource_subtype: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
              /**
               * Text Value
               * @description *Conditional*. String value for `text` type field.
               * @default null
               */
              text_value: string | null;
              /**
               * Type
               * @description *Deprecated: New integrations should prefer the `resource_subtype` field.* The type of the custom field.
               * @default null
               * @enum {string|null}
               */
              type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | null;
          }[] | null;
          /**
           * DefaultAccessLevel
           * @description Default access level for new project members.
           * @default null
           * @enum {string|null}
           */
          default_access_level: "admin" | "editor" | "commenter" | "viewer" | null;
          /**
           * DefaultView
           * @description Default view of the project.
           * @default null
           * @enum {string|null}
           */
          default_view: "list" | "board" | "calendar" | "timeline" | null;
          /**
           * Due Date
           * Format: date
           * @description *Deprecated: New integrations should prefer the `due_on` field.* The project's due date.
           * @default null
           */
          due_date: string | null;
          /**
           * Due On
           * Format: date
           * @description Project due date (YYYY-MM-DD).
           * @default null
           */
          due_on: string | null;
          /**
           * Followers
           * @description Array of users following this project. Followers receive "tasks added" notifications.
           * @default null
           */
          followers: {
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description *Read-only except when same user as requester*. The user's name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Gid
           * @description Globally unique identifier of the resource.
           * @default null
           */
          gid: string | null;
          /**
           * Html Notes
           * @description *(Opt-in field)* HTML representation of project notes. Requires 'html_notes' in `opt_fields`.
           * @default null
           */
          html_notes: string | null;
          /**
           * Icon
           * @description The icon for a project.
           * @default null
           * @enum {string|null}
           */
          icon: "list" | "board" | "timeline" | "calendar" | "rocket" | "people" | "graph" | "star" | "bug" | "light_bulb" | "globe" | "gear" | "notebook" | "computer" | "check" | "target" | "html" | "megaphone" | "chat_bubbles" | "briefcase" | "page_layout" | "mountain_flag" | "puzzle" | "presentation" | "line_and_symbols" | "speed_dial" | "ribbon" | "shoe" | "shopping_basket" | "map" | "ticket" | "coins" | null;
          /**
           * Members
           * @description Array of users who are members of this project.
           * @default null
           */
          members: {
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description *Read-only except when same user as requester*. The user's name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * MinimumAccessLevel
           * @description The minimum access level needed for project members to modify this project's workflow and appearance.
           * @default null
           * @enum {string|null}
           */
          minimum_access_level_for_customization: "admin" | "editor" | null;
          /**
           * MinimumAccessLevel
           * @description The minimum access level needed for project members to share the project and manage project memberships.
           * @default null
           * @enum {string|null}
           */
          minimum_access_level_for_sharing: "admin" | "editor" | null;
          /**
           * Modified At
           * Format: date-time
           * @description UTC last modification timestamp. *Note: Does not reflect changes in associations like tasks or comments.*
           * @default null
           */
          modified_at: string | null;
          /**
           * Name
           * @description Name of the project, ideally a short sentence fragment.
           * @default null
           */
          name: string | null;
          /**
           * Notes
           * @description Free-form textual information or description.
           * @default null
           */
          notes: string | null;
          /**
           * Owner
           * @description Current project owner; may be null.
           * @default null
           */
          owner: {
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description *Read-only except when same user as requester*. The user's name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Permalink Url
           * @description Direct URL to the object in Asana.
           * @default null
           */
          permalink_url: string | null;
          /**
           * PrivacySetting
           * @description Privacy setting. *Note: Administrators may restrict available values.*
           * @default null
           * @enum {string|null}
           */
          privacy_setting: "public_to_workspace" | "private_to_team" | "private" | null;
          /**
           * ProjectBrief
           * @default null
           */
          project_brief: {
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
          /**
           * Start On
           * Format: date
           * @description The date on which work for this project begins (YYYY-MM-DD), or null if no start date. *Note: `due_on` must be present if setting `start_on`, and they cannot be the same date.*
           * @default null
           */
          start_on: string | null;
          /**
           * Team
           * @default null
           */
          team: {
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the team.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Workspace
           * @default null
           */
          workspace: {
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the workspace.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
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
 * Type of ASANA's ASANA_CREATE_A_TAG_IN_A_WORKSPACE tool input.
 */
type ASANA_CREATE_A_TAG_IN_A_WORKSPACE_INPUT = {
  /**
   * Data
   * @description The properties for the tag creation, including name (required), color (optional), and notes (optional).
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Opt Fields
   * @description Comma-separated string of fields from `OptFieldsEnm0` (e.g., 'name', 'color') to include in the response; returns a compact representation by default.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description If true, pretty-prints the JSON response; useful for debugging but may increase response size.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Workspace Gid
   * @description The globally unique identifier (GID) for the workspace or organization in which to create the tag.
   */
  workspace_gid?: string;
};

/**
 * Type of ASANA's ASANA_CREATE_A_TAG_IN_A_WORKSPACE tool output.
 */
type ASANA_CREATE_A_TAG_IN_A_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description The full response object encapsulating the details of the created tag resource.
   */
  data?: {
      /**
       * Data
       * @default null
       */
      data: {
          /**
           * Color
           * @description The color of the tag, chosen from `ColorEnum`. Asana may assign a default if null or not provided.
           * @default null
           */
          color: (("dark-pink" | "dark-green" | "dark-blue" | "dark-red" | "dark-teal" | "dark-brown" | "dark-orange" | "dark-purple" | "dark-warm-gray" | "light-pink" | "light-green" | "light-blue" | "light-red" | "light-teal" | "light-brown" | "light-orange" | "light-purple" | "light-warm-gray") | null) | null;
          /**
           * Created At
           * Format: date-time
           * @description The Coordinated Universal Time (UTC) date and time when the tag resource was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Followers
           * @description Array of user objects who are followers of this tag. Followers receive notifications for changes to the tag.
           * @default null
           */
          followers: {
              /**
               * Gid
               * @description Globally unique identifier (GID) of the follower (typically a user).
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the follower. *Read-only except when the requester is the same user as the follower.*
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The resource type of the follower (e.g., 'user').
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Gid
           * @description Globally unique identifier (GID) of the created tag.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description Name of the tag. This is generally a short sentence fragment for UI readability, but can be longer.
           * @default null
           */
          name: string | null;
          /**
           * Notes
           * @description Free-form textual information or description associated with the tag.
           * @default null
           */
          notes: string | null;
          /**
           * Permalink Url
           * @description A direct URL to view this tag within the Asana application.
           * @default null
           */
          permalink_url: string | null;
          /**
           * Resource Type
           * @description The resource type, which will be 'tag'.
           * @default null
           */
          resource_type: string | null;
          /**
           * Workspace
           * @default null
           */
          workspace: {
              /**
               * Gid
               * @description Globally unique identifier (GID) of the workspace.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description The name of the workspace.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The resource type (e.g., 'workspace').
               * @default null
               */
              resource_type: string | null;
          } | null;
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
 * Type of ASANA's ASANA_CREATE_A_TASK tool input.
 */
type ASANA_CREATE_A_TASK_INPUT = {
  /**
   * Data
   * @description Task details for creation.
   */
  data?: {
      /**
       * ApprovalStatus
       * @description Approval status (e.g., 'pending', 'approved'). Synchronized with 'completed': 'pending' means incomplete; 'approved', 'rejected', 'changes_requested' mean complete. Setting 'completed' to true sets this to 'approved'.
       * @default pending
       * @enum {string|null}
       */
      approval_status: "pending" | "approved" | "rejected" | "changes_requested" | null;
      /**
       * Assignee
       * @description User GID to assign the task. 'me' for current user.
       * @default null
       */
      assignee: string | null;
      /**
       * Assignee Section
       * @description GID of assignee's 'My tasks' section. Only writable if section is visible in user's 'My tasks'.
       * @default null
       */
      assignee_section: string | null;
      /**
       * AssigneeStatus
       * @description Deprecated: Scheduling status for the assignee (e.g., 'upcoming', 'today'). Requires 'assignee'. 'inbox'/'upcoming' place task at top of assignee's list section; others at bottom.
       * @default upcoming
       * @enum {string|null}
       */
      assignee_status: "today" | "upcoming" | "later" | "new" | "inbox" | null;
      /**
       * Completed
       * @description Indicates if the task is complete.
       * @default false
       */
      completed: boolean;
      /**
       * Custom Fields
       * @description Object mapping custom field GIDs to their values (e.g., enum GID, string, number). See Asana docs for update details.
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      } | null;
      /**
       * Custom Type
       * @description GID of a custom_type.
       * @default null
       */
      custom_type: string | null;
      /**
       * Custom Type Status Option
       * @description GID of a custom_type_status_option.
       * @default null
       */
      custom_type_status_option: string | null;
      /**
       * Due At
       * @description UTC due date and time (ISO 8601). Null if no due time. Mutually exclusive with 'due_on'.
       * @default null
       */
      due_at: string | null;
      /**
       * Due On
       * @description Localized due date (YYYY-MM-DD). Null if no due date. Mutually exclusive with 'due_at'.
       * @default null
       */
      due_on: string | null;
      /**
       * Followers
       * @description Create-Only: Array of user identifiers (GID, email, 'me') for followers. Use 'addFollowers'/'removeFollowers' actions for updates.
       * @default null
       */
      followers: string[] | null;
      /**
       * Html Notes
       * @description Opt-in: Task notes with HTML formatting for rich text.
       * @default null
       */
      html_notes: string | null;
      /**
       * Liked
       * @description Indicates if the task is liked by the authorized user.
       * @default false
       */
      liked: boolean;
      /**
       * Name
       * @description Name of the task.
       */
      name: string;
      /**
       * Notes
       * @description Free-form textual description of the task.
       * @default null
       */
      notes: string | null;
      /**
       * Parent
       * @description GID of parent task for subtasks. Null for top-level tasks.
       * @default null
       */
      parent: string | null;
      /**
       * Projects
       * @description Create-Only: Array of project GIDs for association. Use 'addProject'/'removeProject' for updates.
       * @default null
       */
      projects: (string | {
          /**
           * Gid
           * @description Project GID
           */
          gid: string;
      })[] | null;
      /**
       * ResourceSubtype
       * @description Subtype of the task (e.g., 'default_task', 'milestone'). Milestone tasks cannot have a 'start_date'.
       * @default default_task
       * @enum {string|null}
       */
      resource_subtype: "default_task" | "milestone" | "approval" | null;
      /**
       * Start At
       * @description UTC start date and time (ISO 8601). Null if no start time. Mutually exclusive with 'start_on'. `due_at` is required if `start_at` is set/unset.
       * @default null
       */
      start_at: string | null;
      /**
       * Start On
       * @description Localized start date (YYYY-MM-DD). Null if no start date. Mutually exclusive with 'start_at'. `due_on` or `due_at` is required if `start_on` is set/unset.
       * @default null
       */
      start_on: string | null;
      /**
       * Tags
       * @description Create-Only: Array of tag GIDs. Use 'addTag'/'removeTag' for updates.
       * @default null
       */
      tags: string[] | null;
      /**
       * Workspace
       * @description Workspace/organization GID. Required unless 'parent' or 'projects' specified.
       * @default null
       */
      workspace: string | null;
  };
  /**
   * Opt Fields
   * @description Comma-separated list of optional properties for response. Default is compact resource.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides 'pretty' JSON output with line breaks/indentation. Useful for debugging; may increase response time/size.
   * @default true
   */
  opt_pretty: boolean;
};

/**
 * Type of ASANA's ASANA_CREATE_A_TASK tool output.
 */
type ASANA_CREATE_A_TASK_OUTPUT = {
  /**
   * Data
   * @description Full details of the newly created task.
   */
  data?: {
      /**
       * Data
       * @default null
       */
      data: {
          /**
           * Actual Time Minutes
           * @description Sum of all Time Tracking entries in the Actual Time field on this task, in minutes.
           * @default null
           */
          actual_time_minutes: number | null;
          /**
           * ApprovalStatus
           * @description Conditional: Approval status (e.g., 'pending'). Synchronized with `completed`.
           * @default null
           * @enum {string|null}
           */
          approval_status: "pending" | "approved" | "rejected" | "changes_requested" | null;
          /**
           * Assignee
           * @description The user to whom this task is assigned, if any.
           */
          assignee: {
              /**
               * Gid
               * @description GID of the assignee (user).
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Assignee's name. Read-only unless requester is the user.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type, typically 'user'.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * AssigneeSection
           * @description The section in the assignee's 'My tasks' list where this task is located, if any.
           */
          assignee_section: {
              /**
               * Gid
               * @description GID of the assignee's section in 'My tasks'.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the section in 'My tasks'.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type, typically 'section'.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * AssigneeStatus
           * @description Deprecated: Assignee scheduling status (e.g., 'upcoming'). Requires assignee.
           * @default null
           * @enum {string|null}
           */
          assignee_status: "today" | "upcoming" | "later" | "new" | "inbox" | null;
          /**
           * Completed
           * @description If task is complete.
           * @default null
           */
          completed: boolean | null;
          /**
           * Completed At
           * Format: date-time
           * @description Time task was completed (ISO 8601 UTC). Null if incomplete.
           * @default null
           */
          completed_at: string | null;
          /**
           * CompletedBy
           * @description User who completed the task.
           */
          completed_by: {
              /**
               * Gid
               * @description GID of the user who completed the task.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description User's name. Read-only unless requester is the user.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type, typically 'user'.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Created At
           * Format: date-time
           * @description Time task was created (ISO 8601 UTC).
           * @default null
           */
          created_at: string | null;
          /**
           * CreatedBy
           * @description Opt-In: User who created task. See Asana docs to opt-in.
           * @default null
           */
          created_by: {
              /**
               * Gid
               * @description GID of the resource (e.g., user who created an item).
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description Resource type, typically 'user'.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Custom Fields
           * @description Array of custom field values. Each object contains custom field GID and its value (e.g., `enum_value`, `text_value`).
           * @default null
           */
          custom_fields: {
              /**
               * AsanaCreatedField
               * @description Conditional: Unique identifier for template source of truth association (e.g., 'priority').
               * @default null
               */
              asana_created_field: (("a_v_requirements" | "account_name" | "actionable" | "align_shipping_link" | "align_status" | "allotted_time" | "appointment" | "approval_stage" | "approved" | "article_series" | "board_committee" | "browser" | "campaign_audience" | "campaign_project_status" | "campaign_regions" | "channel_primary" | "client_topic_type" | "complete_by" | "contact" | "contact_email_address" | "content_channels" | "content_channels_needed" | "content_stage" | "content_type" | "contract" | "contract_status" | "cost" | "creation_stage" | "creative_channel" | "creative_needed" | "creative_needs" | "data_sensitivity" | "deal_size" | "delivery_appt" | "delivery_appt_date" | "department" | "department_responsible" | "design_request_needed" | "design_request_type" | "discussion_category" | "do_this_task" | "editorial_content_status" | "editorial_content_tag" | "editorial_content_type" | "effort" | "effort_level" | "est_completion_date" | "estimated_time" | "estimated_value" | "expected_cost" | "external_steps_needed" | "favorite_idea" | "feedback_type" | "financial" | "funding_amount" | "grant_application_process" | "hiring_candidate_status" | "idea_status" | "ids_link" | "ids_patient_link" | "implementation_stage" | "insurance" | "interview_area" | "interview_question_score" | "itero_scan_link" | "job_s_applied_to" | "lab" | "launch_status" | "lead_status" | "localization_language" | "localization_market_team" | "localization_status" | "meeting_minutes" | "meeting_needed" | "minutes" | "mrr" | "must_localize" | "name_of_foundation" | "need_to_follow_up" | "next_appointment" | "next_steps_sales" | "num_people" | "number_of_user_reports" | "office_location" | "onboarding_activity" | "owner" | "participants_needed" | "patient_date_of_birth" | "patient_email" | "patient_phone" | "patient_status" | "phone_number" | "planning_category" | "point_of_contact" | "position" | "post_format" | "prescription" | "priority" | "priority_level" | "product" | "product_stage" | "progress" | "project_size" | "project_status" | "proposed_budget" | "publish_status" | "reason_for_scan" | "referral" | "request_type" | "research_status" | "responsible_department" | "responsible_team" | "risk_assessment_status" | "room_name" | "sales_counterpart" | "sentiment" | "shipping_link" | "social_channels" | "stage" | "status" | "status_design" | "status_of_initiative" | "system_setup" | "task_progress" | "team" | "team_marketing" | "team_responsible" | "time_it_takes_to_complete_tasks" | "timeframe" | "treatment_type" | "type_work_requests_it" | "use_agency" | "user_name" | "vendor_category" | "vendor_type" | "word_count") | null) | null;
              /**
               * CreatedBy1
               * @description User who created this custom field.
               */
              created_by: {
                  /**
                   * Gid
                   * @description GID of the user who created the custom field.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description User's name. Read-only unless requester is the user.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type, typically 'user'.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Currency Code
               * @description 'currency' fields: ISO 4217 code (e.g., 'USD'). Null if format not 'currency'.
               * @default null
               */
              currency_code: string | null;
              /**
               * Custom Label
               * @description 'custom' fields: Label displayed next to value. Null if format not 'custom'.
               * @default null
               */
              custom_label: string | null;
              /**
               * CustomLabelPosition
               * @description Position of custom label for 'custom' format fields (e.g., 'prefix', 'suffix'). Null if format not 'custom'.
               * @default null
               */
              custom_label_position: (("prefix" | "suffix") | null) | null;
              /**
               * DateValue
               * @description Conditional: Date (and optionally time) for 'date' type fields. Null if no date selected.
               * @default null
               */
              date_value: {
                  /**
                   * Date
                   * @description Date in YYYY-MM-DD format.
                   * @default null
                   */
                  date: string | null;
                  /**
                   * Date Time
                   * @description Date and time in ISO 8601 format (UTC). Null if no time value selected.
                   * @default null
                   */
                  date_time: string | null;
              } | null;
              /**
               * Description
               * @description Opt-In: User-provided description. See Asana docs to opt-in.
               * @default null
               */
              description: string | null;
              /**
               * Display Value
               * @description String representation of the custom field value. Use for robust display if underlying type not needed.
               * @default null
               */
              display_value: string | null;
              /**
               * Enabled
               * @description Conditional: If the custom field is enabled.
               * @default null
               */
              enabled: boolean | null;
              /**
               * Enum Options
               * @description Conditional: Enum options for 'enum' type fields. See Asana docs for modification.
               * @default null
               */
              enum_options: {
                  /**
                   * Color
                   * @description Color of the enum option. Defaults to 'none'.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description If enum option is selectable for the custom field.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description GID of the enum option.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type, typically 'enum_option'.
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * EnumValue
               * @description Conditional: GID and name of selected option for 'enum' type fields.
               */
              enum_value: {
                  /**
                   * Color
                   * @description Color of the selected enum option.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description Whether the selected enum option is currently enabled.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description GID of the selected enum option.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the selected enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type, typically 'enum_option'.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Format
               * @description Display format (e.g., 'currency', 'percentage').
               * @default null
               * @enum {string|null}
               */
              format: "currency" | "identifier" | "percentage" | "custom" | "duration" | "none" | null;
              /**
               * Gid
               * @description GID of the custom field.
               * @default null
               */
              gid: string | null;
              /**
               * Has Notifications Enabled
               * @description Conditional: If task followers get inbox notifications for changes to this field.
               * @default null
               */
              has_notifications_enabled: boolean | null;
              /**
               * Id Prefix
               * @description Unique custom ID string, if set by user.
               * @default null
               */
              id_prefix: string | null;
              /**
               * Is Formula Field
               * @description Conditional: True if this is a formula custom field.
               * @default null
               */
              is_formula_field: boolean | null;
              /**
               * Is Global To Workspace
               * @description If custom field is available to all containers in workspace.
               * @default null
               */
              is_global_to_workspace: boolean | null;
              /**
               * Is Value Read Only
               * @description Conditional: If field value is read-only for current user.
               * @default null
               */
              is_value_read_only: boolean | null;
              /**
               * Multi Enum Values
               * @description Conditional: GIDs and names of selected options for 'multi_enum' type fields.
               * @default null
               */
              multi_enum_values: {
                  /**
                   * Color
                   * @description Color of the enum option. Defaults to 'none'.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description If enum option is selectable for the custom field.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description GID of the enum option.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type, typically 'enum_option'.
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * Name
               * @description Name of the custom field.
               * @default null
               */
              name: string | null;
              /**
               * Number Value
               * @description Conditional: Numerical value of a 'number' custom field.
               * @default null
               */
              number_value: number | null;
              /**
               * People Value
               * @description Conditional: 'people' fields: Array of compact user objects for selected people.
               * @default null
               */
              people_value: {
                  /**
                   * Gid
                   * @description GID of the user.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description User's name. Read-only unless requester is the user.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type, typically 'user'.
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * Precision
               * @description 'number' fields: Decimal places (0-6). Percentage 0.25 is precision 0; 0.251 is 1. Identifier format precision 0.
               * @default null
               */
              precision: number | null;
              /**
               * RepresentationType
               * @description Underlying data type (e.g., 'number', 'text').
               * @default null
               * @enum {string|null}
               */
              representation_type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | null;
              /**
               * ResourceSubtype1
               * @description Type of the custom field (e.g., 'text', 'number').
               * @default null
               * @enum {string|null}
               */
              resource_subtype: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | null;
              /**
               * Resource Type
               * @description Resource type, typically 'custom_field'.
               * @default null
               */
              resource_type: string | null;
              /**
               * Text Value
               * @description Conditional: String value of a 'text' custom field.
               * @default null
               */
              text_value: string | null;
              /**
               * RepresentationType
               * @description Deprecated: New integrations should prefer the `resource_subtype` field. The type of the custom field.
               * @default null
               * @enum {string|null}
               */
              type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | null;
          }[] | null;
          /**
           * Dependencies
           * @description Opt-In: GIDs of prerequisite tasks (blocking this task). See Asana docs to opt-in.
           * @default null
           */
          dependencies: {
              /**
               * Gid
               * @description GID of the prerequisite task.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description Resource type, typically 'task'.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Dependents
           * @description Opt-In: GIDs of tasks blocked by this task. See Asana docs to opt-in.
           * @default null
           */
          dependents: {
              /**
               * Gid
               * @description GID of the task that this task blocks.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description Resource type, typically 'task'.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Due At
           * Format: date-time
           * @description UTC due date/time (ISO 8601). Null if no due time. Mutually exclusive with `due_on`.
           * @default null
           */
          due_at: string | null;
          /**
           * Due On
           * Format: date
           * @description Localized due date (YYYY-MM-DD). Null if no due date. Mutually exclusive with `due_at`.
           * @default null
           */
          due_on: string | null;
          /**
           * External
           * @description OAuth Required & Conditional: App-specific metadata (GID and data blob). Returned if set/opted-in. See Asana Custom External Data guide.
           * @default null
           */
          external: {
              /**
               * Data
               * @description App-specific metadata string.
               * @default null
               */
              data: string | null;
              /**
               * Gid
               * @description GID of the external data.
               * @default null
               */
              gid: string | null;
          } | null;
          /**
           * Followers
           * @description Array of users following this task.
           * @default null
           */
          followers: {
              /**
               * Gid
               * @description GID of the follower (user).
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Follower's name. Read-only unless requester is the user.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type, typically 'user'.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Gid
           * @description GID of the task.
           * @default null
           */
          gid: string | null;
          /**
           * Hearted
           * @description Deprecated: please use 'liked' instead. True if the task was hearted by the authorized user.
           * @default null
           */
          hearted: boolean | null;
          /**
           * Hearts
           * @description Deprecated: please use 'likes' instead. Array of users who hearted this task.
           * @default null
           */
          hearts: {
              /**
               * Gid
               * @description GID of the heart.
               * @default null
               */
              gid: string | null;
              /**
               * User
               * @description User who hearted the task.
               */
              user: {
                  /**
                   * Gid
                   * @description GID of the user.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description User's name. Read-only unless requester is the user.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type, typically 'user'.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
          }[] | null;
          /**
           * Html Notes
           * @description Opt-In: Task notes with HTML formatting. See Asana docs to opt-in.
           * @default null
           */
          html_notes: string | null;
          /**
           * Is Rendered As Separator
           * @description Opt-In: If task rendered as visual separator. See Asana docs to opt-in.
           * @default null
           */
          is_rendered_as_separator: boolean | null;
          /**
           * Liked
           * @description If task is liked by authorized user.
           * @default null
           */
          liked: boolean | null;
          /**
           * Likes
           * @description Array of users who have liked this task.
           * @default null
           */
          likes: {
              /**
               * Gid
               * @description GID of the like.
               * @default null
               */
              gid: string | null;
              /**
               * User
               * @description User who liked the task.
               */
              user: {
                  /**
                   * Gid
                   * @description GID of the user.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description User's name. Read-only unless requester is the user.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type, typically 'user'.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
          }[] | null;
          /**
           * Memberships
           * @description Project memberships (project and section). Modifiable via addProject/removeProject post-creation.
           * @default null
           */
          memberships: {
              /**
               * Project
               * @description The project the task is a member of.
               */
              project: {
                  /**
                   * Gid
                   * @description GID of the project.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the project.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type, typically 'project'.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Section
               * @description The section within the project where the task is located.
               */
              section: {
                  /**
                   * Gid
                   * @description GID of the section.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the section (header text).
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type, typically 'section'.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
          }[] | null;
          /**
           * Modified At
           * Format: date-time
           * @description Time task was last modified (ISO 8601 UTC). Changed by updates to task fields, stories, attachments, assignments, custom fields, or trashing. Not changed by comments or moving containers.
           * @default null
           */
          modified_at: string | null;
          /**
           * Name
           * @description Name of the task.
           * @default null
           */
          name: string | null;
          /**
           * Notes
           * @description Free-form textual description of the task.
           * @default null
           */
          notes: string | null;
          /**
           * Num Hearts
           * @description Deprecated: please use 'num_likes' instead. The number of users who hearted this task.
           * @default null
           */
          num_hearts: number | null;
          /**
           * Num Likes
           * @description Number of users who have liked this task.
           * @default null
           */
          num_likes: number | null;
          /**
           * Num Subtasks
           * @description Opt-In: Number of subtasks. See Asana docs to opt-in.
           * @default null
           */
          num_subtasks: number | null;
          /**
           * Parent
           * @description The parent task, if this is a subtask.
           */
          parent: {
              /**
               * CreatedBy2
               * @description Opt-In: User who created parent task. See Asana docs to opt-in.
               * @default null
               */
              created_by: {
                  /**
                   * Gid
                   * @description GID of the user who created the parent task.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Resource Type
                   * @description Resource type, typically 'user'.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Gid
               * @description GID of the parent task.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the parent task.
               * @default null
               */
              name: string | null;
              /**
               * ResourceSubtype2
               * @description Subtype of parent task (e.g., 'default_task'). Milestones cannot have start_date.
               * @default null
               * @enum {string|null}
               */
              resource_subtype: "default_task" | "milestone" | "section" | "approval" | null;
              /**
               * Resource Type
               * @description Resource type, typically 'task'.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Permalink Url
           * @description URL that points directly to the task in Asana.
           * @default null
           */
          permalink_url: string | null;
          /**
           * Projects
           * @description Associated projects. Modifiable via addProject/removeProject post-creation.
           * @default null
           */
          projects: {
              /**
               * Gid
               * @description GID of the project.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the project.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type, typically 'project'.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * ResourceSubtype
           * @description Subtype of task (e.g., 'default_task'). Milestones cannot have start_date.
           * @default null
           * @enum {string|null}
           */
          resource_subtype: "default_task" | "milestone" | "approval" | null;
          /**
           * Resource Type
           * @description Resource type, typically 'task'.
           * @default null
           */
          resource_type: string | null;
          /**
           * Start At
           * Format: date-time
           * @description UTC start date/time (ISO 8601). Null if no start time. Mutually exclusive with `start_on`. `due_at` required if `start_at` set/unset.
           * @default null
           */
          start_at: string | null;
          /**
           * Start On
           * Format: date
           * @description Localized start date (YYYY-MM-DD). Null if no start date. Mutually exclusive with `start_at`. `due_on` or `due_at` required if `start_on` set/unset.
           * @default null
           */
          start_on: string | null;
          /**
           * Tags
           * @description Associated tags. Modifiable via addTag/removeTag post-creation.
           * @default null
           */
          tags: {
              /**
               * Gid
               * @description GID of the tag.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the tag.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type, typically 'tag'.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Workspace
           * @description The workspace or organization this task belongs to.
           */
          workspace: {
              /**
               * Gid
               * @description GID of the workspace or organization.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the workspace or organization.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type, typically 'workspace'.
               * @default null
               */
              resource_type: string | null;
          } | null;
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
 * Type of ASANA's ASANA_CREATE_CUSTOM_FIELD tool input.
 */
type ASANA_CREATE_CUSTOM_FIELD_INPUT = {
  /**
   * Data
   * @description The custom field object to create.
   */
  data?: {
      /**
       * Add To Folder
       * @description A folder GID to add the custom field to.
       * @default null
       */
      add_to_folder: string | null;
      /**
       * Add To Projects
       * @description A list of project GIDs to add the custom field to.
       * @default null
       */
      add_to_projects: string[] | null;
      /**
       * Currency Code
       * @description ISO 4217 currency code if `format` is `currency`.
       * @default null
       */
      currency_code: string | null;
      /**
       * Custom Label
       * @description String that appears next to the custom field value if `format` is `custom`.
       * @default null
       */
      custom_label: string | null;
      /**
       * Custom Label Position
       * @description Where to place the custom label if `format` is `custom`.
       * @default null
       * @enum {string|null}
       */
      custom_label_position: "prefix" | "suffix" | null;
      /**
       * Description
       * @description The description of the custom field.
       * @default null
       */
      description: string | null;
      /**
       * Enum Options
       * @description Only relevant for `enum` or `multi_enum`. Specifies possible values.
       * @default null
       */
      enum_options: {
          /**
           * Color
           * @description The color of the enum option.
           * @default null
           */
          color: string | null;
          /**
           * Enabled
           * @description Whether the enum option is enabled.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Name
           * @description The name of the enum option.
           */
          name: string;
      }[] | null;
      /**
       * Format
       * @description The format of this custom field.
       * @default null
       */
      format: string | null;
      /**
       * Has Notifications Enabled
       * @description Whether a follower of a task with this field should receive inbox notifications from changes to this field.
       * @default null
       */
      has_notifications_enabled: boolean | null;
      /**
       * Name
       * @description The name of the custom field.
       */
      name: string;
      /**
       * Precision
       * @description Only relevant for custom fields of type `Number`. The number of places after the decimal to round to (0-6).
       * @default null
       */
      precision: number | null;
      /**
       * Resource Subtype
       * @description The type of the custom field.
       * @enum {string}
       */
      resource_subtype: "text" | "enum" | "multi_enum" | "number" | "date" | "people";
      /**
       * Workspace
       * @description The workspace to create a custom field in.
       */
      workspace: string;
  };
  /**
   * Opt Fields
   * @description Comma-separated list of properties to include in the response.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_CREATE_CUSTOM_FIELD tool output.
 */
type ASANA_CREATE_CUSTOM_FIELD_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Asana Created Field
       * @description _Conditional_. A unique identifier to associate this field with the template source of truth.
       * @default null
       */
      asana_created_field: string | null;
      /**
       * Created By
       * @description A _user_ object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
       * @default null
       */
      created_by: {
          [key: string]: string;
      } | null;
      /**
       * Currency Code
       * @description ISO 4217 currency code to format this custom field. This will be null if the `format` is not `currency`.
       * @default null
       */
      currency_code: string | null;
      /**
       * Custom Label
       * @description This is the string that appears next to the custom field value. This will be null if the `format` is not `custom`.
       * @default null
       */
      custom_label: string | null;
      /**
       * Custom Label Position
       * @description Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
       * @default null
       */
      custom_label_position: string | null;
      /**
       * Date Value
       * @description _Conditional_. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.
       * @default null
       */
      date_value: {
          [key: string]: string | null;
      } | null;
      /**
       * Default Access Level
       * @description The default access level when inviting new members to the custom field. This isn’t applied when the `privacy_setting` is `private`, or the user is a guest. For local fields in a project or portfolio, the user must additionally have permission to modify the container itself.
       * @default null
       */
      default_access_level: string | null;
      /**
       * Description
       * @description The description of the custom field.
       * @default null
       */
      description: string | null;
      /**
       * Display Value
       * @description A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
       * @default null
       */
      display_value: string | null;
      /**
       * Enabled
       * @description Whether or not the enum option is a selectable value for the custom field.
       * @default null
       */
      enabled: boolean | null;
      /**
       * Enum Options
       * @description _Conditional_. Only relevant for custom fields of type `enum` or `multi_enum`. This array specifies the possible values which an `enum` custom field can adopt.
       * @default null
       */
      enum_options: {
          /**
           * Color
           * @description The color of the enum option.
           * @default null
           */
          color: string | null;
          /**
           * Enabled
           * @description Whether the enum option is enabled.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Name
           * @description The name of the enum option.
           */
          name: string;
      }[] | null;
      /**
       * EnumOption
       * @description _Conditional_. Only relevant for custom fields of type `enum`. This object is the chosen value of an `enum` custom field.
       * @default null
       */
      enum_value: {
          /**
           * Color
           * @description The color of the enum option.
           * @default null
           */
          color: string | null;
          /**
           * Enabled
           * @description Whether the enum option is enabled.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Name
           * @description The name of the enum option.
           */
          name: string;
      } | null;
      /**
       * Format
       * @description The format of this custom field.
       * @default null
       */
      format: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Has Notifications Enabled
       * @description _Conditional_. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.
       * @default null
       */
      has_notifications_enabled: boolean | null;
      /**
       * Id Prefix
       * @description This field is the unique custom ID string for the custom field.
       * @default null
       */
      id_prefix: string | null;
      /**
       * Is Formula Field
       * @description _Conditional_. This flag describes whether a custom field is a formula custom field.
       * @default null
       */
      is_formula_field: boolean | null;
      /**
       * Is Global To Workspace
       * @description This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true.
       * @default null
       */
      is_global_to_workspace: boolean | null;
      /**
       * Is Value Read Only
       * @description _Conditional_. This flag describes whether a custom field is read only.
       * @default null
       */
      is_value_read_only: boolean | null;
      /**
       * Multi Enum Values
       * @description _Conditional_. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
       * @default null
       */
      multi_enum_values: {
          /**
           * Color
           * @description The color of the enum option.
           * @default null
           */
          color: string | null;
          /**
           * Enabled
           * @description Whether the enum option is enabled.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Name
           * @description The name of the enum option.
           */
          name: string;
      }[] | null;
      /**
       * Name
       * @description The name of the custom field.
       */
      name: string;
      /**
       * Number Value
       * @description _Conditional_. This number is the value of a `number` custom field.
       * @default null
       */
      number_value: number | null;
      /**
       * People Value
       * @description _Conditional_. Only relevant for custom fields of type `people`. This array of compact user objects reflects the values of a `people` custom field.
       * @default null
       */
      people_value: {
          [key: string]: string;
      }[] | null;
      /**
       * Precision
       * @description Only relevant for custom fields of type `Number`. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.
       * @default null
       */
      precision: number | null;
      /**
       * Privacy Setting
       * @description The privacy setting of the custom field. _Note: Administrators in your organization may restrict the values of `privacy_setting`._
       * @default null
       */
      privacy_setting: string | null;
      /**
       * Representation Type
       * @description This field tells the type of the custom field.
       * @default null
       */
      representation_type: string | null;
      /**
       * Resource Subtype
       * @description The type of the custom field. Must be one of the given values.
       */
      resource_subtype: string;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
      /**
       * Text Value
       * @description _Conditional_. This string is the value of a `text` custom field.
       * @default null
       */
      text_value: string | null;
      /**
       * Type
       * @description The type of the custom field. Same as resource_subtype.
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
 * Type of ASANA's ASANA_CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD tool input.
 */
type ASANA_CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Gid
   * @description Globally unique identifier for the custom field.
   */
  custom_field_gid?: string;
  /**
   * Data
   * @description The enum option to create.
   */
  data?: {
      /**
       * Color
       * @description The color of the enum option. Defaults to none. Accepts a string representing the color, e.g., 'blue', 'red', 'green'.
       * @default none
       */
      color: string | null;
      /**
       * Enabled
       * @description Whether the enum option is enabled. Defaults to true.
       * @default true
       */
      enabled: boolean | null;
      /**
       * Insert After
       * @description An existing enum option GID after which the new enum option should be inserted.
       * @default null
       */
      insert_after: string | null;
      /**
       * Insert Before
       * @description An existing enum option GID before which the new enum option should be inserted.
       * @default null
       */
      insert_before: string | null;
      /**
       * Name
       * @description The name of the enum option.
       */
      name: string;
  };
  /**
   * Opt Fields
   * @description Defines fields to return.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD tool output.
 */
type ASANA_CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD_OUTPUT = {
  /**
   * EnumOption
   * @description The enum option created.
   * @default null
   */
  data: {
      /**
       * Color
       * @description The color of the enum option.
       * @default null
       */
      color: string | null;
      /**
       * Enabled
       * @description Whether the enum option is enabled.
       * @default null
       */
      enabled: boolean | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Name
       * @description The name of the enum option.
       * @default null
       */
      name: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
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
 * Type of ASANA's ASANA_CREATE_PROJECT_STATUS_UPDATE tool input.
 */
type ASANA_CREATE_PROJECT_STATUS_UPDATE_INPUT = {
  /**
   * Color
   * @description Color of the status update. Supported values: GREEN, YELLOW, RED, BLUE, COMPLETE.
   * @enum {string}
   */
  color?: "GREEN" | "YELLOW" | "RED" | "BLUE" | "COMPLETE";
  /**
   * Project Gid
   * @description Globally unique identifier for the project.
   */
  project_gid?: string;
  /**
   * Status Type
   * @description The type of status. Must be one of: on_track, at_risk, off_track, on_hold, complete.
   * @enum {string}
   */
  status_type?: "on_track" | "at_risk" | "off_track" | "on_hold" | "complete";
  /**
   * Text
   * @description The HTML content of the status update.
   */
  text?: string;
  /**
   * Title
   * @description The title of the project status update.
   */
  title?: string;
};

/**
 * Type of ASANA's ASANA_CREATE_PROJECT_STATUS_UPDATE tool output.
 */
type ASANA_CREATE_PROJECT_STATUS_UPDATE_OUTPUT = {
  /**
   * ProjectStatusResponse
   * @default null
   */
  data: {
      /**
       * UserCompact
       * @description The user who authored the status update.
       * @default null
       */
      author: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Created At
       * @description The time at which this resource was created.
       * @default null
       */
      created_at: string | null;
      /**
       * UserCompact
       * @description The user who created the status update.
       * @default null
       */
      created_by: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Modified At
       * @description The time at which this project status was last modified.
       * @default null
       */
      modified_at: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Status Type
       * @description The type of status.
       * @default null
       */
      status_type: string | null;
      /**
       * Text
       * @description The HTML content of the status update.
       * @default null
       */
      text: string | null;
      /**
       * Title
       * @description The title of the project status update.
       * @default null
       */
      title: string | null;
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
 * Type of ASANA's ASANA_CREATE_SECTION_IN_PROJECT tool input.
 */
type ASANA_CREATE_SECTION_IN_PROJECT_INPUT = {
  /**
   * Insert After
   * @description GID of an existing section to insert the new section after; if omitted (and `insert_before` is also omitted), the new section is added at the end.
   * @default null
   */
  insert_after: string | null;
  /**
   * Insert Before
   * @description GID of an existing section to insert the new section before; if omitted, the new section is added at the end.
   * @default null
   */
  insert_before: string | null;
  /**
   * Name
   * @description Name for the new section.
   */
  name?: string;
  /**
   * Project Gid
   * @description GID of the project where the section will be created.
   */
  project_gid?: string;
};

/**
 * Type of ASANA's ASANA_CREATE_SECTION_IN_PROJECT tool output.
 */
type ASANA_CREATE_SECTION_IN_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier of the newly created section.
       */
      gid: string;
      /**
       * Name
       * @description Name of the newly created section.
       */
      name: string;
      /**
       * Project
       * @description Compact representation of the project this section belongs to.
       */
      project: {
          /**
           * Gid
           * @description Globally unique identifier of the resource.
           */
          gid: string;
          /**
           * Name
           * @description Project's name.
           */
          name: string;
          /**
           * Resource Type
           * @description The resource's base type.
           */
          resource_type: string;
      };
      /**
       * Resource Type
       * @description The resource type of the section.
       */
      resource_type: string;
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
 * Type of ASANA's ASANA_CREATE_SUBTASK tool input.
 */
type ASANA_CREATE_SUBTASK_INPUT = {
  /**
   * Assignee
   * @description Optional Global ID (GID) of the user to whom the subtask will be assigned. If not provided, the subtask will be unassigned.
   * @default null
   */
  assignee: string | null;
  /**
   * Completed
   * @description Optional flag to mark the subtask as completed upon creation. Defaults to false if not specified.
   * @default null
   */
  completed: boolean | null;
  /**
   * Due At
   * @description Optional due date and time for the subtask in ISO 8601 format (e.g., YYYY-MM-DDTHH:mm:ssZ), which is more specific than `due_on`.
   * @default null
   */
  due_at: string | null;
  /**
   * Due On
   * @description Optional due date for the subtask in YYYY-MM-DD format, representing the end of the day for the task.
   * @default null
   */
  due_on: string | null;
  /**
   * Followers
   * @description Optional array of user Global IDs (GIDs) to add as followers to the subtask. Followers receive notifications about subtask updates.
   * @default null
   */
  followers: string[] | null;
  /**
   * Name
   * @description The name of the subtask to be created.
   */
  name?: string;
  /**
   * Notes
   * @description Optional descriptive text for the subtask.
   * @default null
   */
  notes: string | null;
  /**
   * Task Gid
   * @description The Global ID (GID) of the parent task under which the subtask will be created.
   */
  task_gid?: string;
};

/**
 * Type of ASANA's ASANA_CREATE_SUBTASK tool output.
 */
type ASANA_CREATE_SUBTASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed
       * @description Boolean flag indicating whether the subtask is marked as completed.
       */
      completed: boolean;
      /**
       * Gid
       * @description The globally unique identifier (GID) of the newly created subtask.
       */
      gid: string;
      /**
       * Name
       * @description The name of the created subtask.
       */
      name: string;
      /**
       * Parent
       * @description An object containing the GID and resource type of the parent task.
       */
      parent: {
          [key: string]: string;
      };
      /**
       * Resource Type
       * @description The type of the Asana resource, which is 'task' for subtasks.
       */
      resource_type: string;
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
 * Type of ASANA's ASANA_CREATE_TASK_COMMENT tool input.
 */
type ASANA_CREATE_TASK_COMMENT_INPUT = {
  /**
   * Task Id
   * @description The globally unique identifier (GID) of the Asana task to which the comment will be added.
   */
  task_id?: string;
  /**
   * Text
   * @description The plain text content of the comment to be posted on the task. HTML or rich text is not supported via this field.
   */
  text?: string;
};

/**
 * Type of ASANA's ASANA_CREATE_TASK_COMMENT tool output.
 */
type ASANA_CREATE_TASK_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The Coordinated Universal Time (UTC) timestamp indicating when the comment (story) was created on the server.
       */
      created_at: string;
      /**
       * Gid
       * @description The globally unique identifier (GID) of the newly created comment (story).
       */
      gid: string;
      /**
       * Resource Type
       * @description The resource type of the created entity. For a comment, this will be 'story'.
       */
      resource_type: string;
      /**
       * Text
       * @description The plain text content of the comment that was successfully posted.
       */
      text: string;
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
 * Type of ASANA's ASANA_CREATE_TEAM tool input.
 */
type ASANA_CREATE_TEAM_INPUT = {
  /** Data */
  data?: {
      /**
       * Description
       * @description A brief description of the team.
       * @default null
       */
      description: string | null;
      /**
       * Html Description
       * @description The description of the team with HTML formatting.
       * @default null
       */
      html_description: string | null;
      /**
       * Name
       * @description The name of the team.
       */
      name: string;
      /**
       * Organization
       * @description The globally unique identifier (GID) of the organization to which the team belongs.
       */
      organization: string;
  };
};

/**
 * Type of ASANA's ASANA_CREATE_TEAM tool output.
 */
type ASANA_CREATE_TEAM_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Description
       * @description The description of the team.
       * @default null
       */
      description: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the team.
       */
      gid: string;
      /**
       * Html Description
       * @description The description of the team with HTML formatting.
       * @default null
       */
      html_description: string | null;
      /**
       * Name
       * @description The name of the team.
       */
      name: string;
      /**
       * Organization
       * @description Details of the organization to which the team belongs.
       */
      organization: {
          /**
           * Gid
           * @description Globally unique identifier of the organization.
           */
          gid: string;
          /**
           * Name
           * @description The name of the organization.
           */
          name: string;
          /**
           * Resource Type
           * @description The base type of this resource.
           */
          resource_type: string;
      };
      /**
       * Permalink Url
       * @description A URL that points directly to the team within Asana.
       */
      permalink_url: string;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
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
 * Type of ASANA's ASANA_DELETE_ALLOCATION tool input.
 */
type ASANA_DELETE_ALLOCATION_INPUT = {
  /**
   * Allocation Gid
   * @description Globally unique identifier for the allocation.
   */
  allocation_gid?: string;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_DELETE_ALLOCATION tool output.
 */
type ASANA_DELETE_ALLOCATION_OUTPUT = {
  /**
   * Data
   * @description An empty object. Some endpoints do not return an object on success. The success is conveyed through a 2-- status code and returning an empty object.
   * @default null
   */
  data: {
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
 * Type of ASANA's ASANA_DELETE_ATTACHMENT tool input.
 */
type ASANA_DELETE_ATTACHMENT_INPUT = {
  /**
   * Attachment Gid
   * @description Globally unique identifier for the attachment.
   */
  attachment_gid?: string;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_DELETE_ATTACHMENT tool output.
 */
type ASANA_DELETE_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description An empty object. Some endpoints do not return an object on success. The success is conveyed through a 2-- status code and returning an empty object.
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
 * Type of ASANA's ASANA_DELETE_CUSTOM_FIELD tool input.
 */
type ASANA_DELETE_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Gid
   * @description Globally unique identifier for the custom field.
   */
  custom_field_gid?: string;
};

/**
 * Type of ASANA's ASANA_DELETE_CUSTOM_FIELD tool output.
 */
type ASANA_DELETE_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description Empty object returned upon successful deletion.
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
 * Type of ASANA's ASANA_DELETE_PROJECT tool input.
 */
type ASANA_DELETE_PROJECT_INPUT = {
  /**
   * Opt Pretty
   * @description Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Project Gid
   * @description Globally unique identifier for the project.
   */
  project_gid?: string;
};

/**
 * Type of ASANA's ASANA_DELETE_PROJECT tool output.
 */
type ASANA_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description An empty object. Some endpoints do not return an object on success. The success is conveyed through a 2-- status code and returning an empty object.
   * @default null
   */
  data: {
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
 * Type of ASANA's ASANA_DELETE_TAG tool input.
 */
type ASANA_DELETE_TAG_INPUT = {
  /**
   * Opt Pretty
   * @description Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Tag Gid
   * @description The globally unique identifier for the tag.
   */
  tag_gid?: string;
};

/**
 * Type of ASANA's ASANA_DELETE_TAG tool output.
 */
type ASANA_DELETE_TAG_OUTPUT = {
  /**
   * Data
   * @description An empty object indicating successful deletion.
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
 * Type of ASANA's ASANA_DELETE_TASK tool input.
 */
type ASANA_DELETE_TASK_INPUT = {
  /**
   * Opt Pretty
   * @description Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Task Gid
   * @description The task to operate on.
   */
  task_gid?: string;
};

/**
 * Type of ASANA's ASANA_DELETE_TASK tool output.
 */
type ASANA_DELETE_TASK_OUTPUT = {
  /**
   * Data
   * @description An empty object. Some endpoints do not return an object on success. The success is conveyed through a 2-- status code and returning an empty object.
   * @default {}
   */
  data: {
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
 * Type of ASANA's ASANA_DUPLICATE_PROJECT tool input.
 */
type ASANA_DUPLICATE_PROJECT_INPUT = {
  /**
   * Include
   * @description A list of elements to be included in the duplication.
   * @default null
   */
  include: string[] | null;
  /**
   * Name
   * @description The name of the new project.
   */
  name?: string;
  /**
   * Project Gid
   * @description Globally unique identifier for the project to be duplicated.
   */
  project_gid?: string;
  /**
   * AsanaDuplicateProjectScheduleDates
   * @description Scheduling information for the new project.
   * @default null
   */
  schedule_dates: {
      /**
       * Due On
       * @description The due date for the new project in YYYY-MM-DD format.
       * @default null
       */
      due_on: string | null;
      /**
       * Should Skip Weekends
       * @description Whether to skip weekends when scheduling tasks.
       * @default null
       */
      should_skip_weekends: boolean | null;
      /**
       * Start On
       * @description The start date for the new project in YYYY-MM-DD format.
       * @default null
       */
      start_on: string | null;
  } | null;
  /**
   * Team
   * @description Globally unique identifier for the team that the new project will belong to.
   * @default null
   */
  team: string | null;
};

/**
 * Type of ASANA's ASANA_DUPLICATE_PROJECT tool output.
 */
type ASANA_DUPLICATE_PROJECT_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier for the job handling the duplication.
       */
      gid: string;
      /**
       * New Project
       * @description An object containing details of the newly created project.
       */
      new_project: {
          /**
           * Gid
           * @description Globally unique identifier for the new project.
           */
          gid: string;
          /**
           * Name
           * @description The name of the new project.
           */
          name: string;
          /**
           * Resource Type
           * @description The type of resource, which will be 'project'.
           */
          resource_type: string;
      };
      /**
       * Resource Subtype
       * @description The subtype of the job, which will be 'duplicate_project'.
       */
      resource_subtype: string;
      /**
       * Resource Type
       * @description The type of resource, which will be 'job'.
       */
      resource_type: string;
      /**
       * Status
       * @description The current status of the job (e.g., 'in_progress', 'completed').
       */
      status: string;
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
 * Type of ASANA's ASANA_DUPLICATE_TASK tool input.
 */
type ASANA_DUPLICATE_TASK_INPUT = {
  /**
   * Include
   * @description A comma-separated string of properties to copy from the original task.
   * @default null
   */
  include: string[] | null;
  /**
   * Name
   * @description The name of the new task.
   * @default null
   */
  name: string | null;
  /**
   * Task Gid
   * @description The globally unique identifier for the task to be duplicated.
   */
  task_gid?: string;
};

/**
 * Type of ASANA's ASANA_DUPLICATE_TASK tool output.
 */
type ASANA_DUPLICATE_TASK_OUTPUT = {
  /**
   * Job
   * @description A job is an object representing a process that handles asynchronous work.
   * @default null
   */
  data: {
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * New Project
       * @description A project represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards.
       * @default null
       */
      new_project: {
          [key: string]: unknown;
      } | null;
      /**
       * New Project Template
       * @description A project template is an object that allows new projects to be created with a predefined setup.
       * @default null
       */
      new_project_template: {
          [key: string]: unknown;
      } | null;
      /**
       * New Task
       * @description The task is the basic object around which many operations in Asana are centered.
       * @default null
       */
      new_task: {
          [key: string]: unknown;
      } | null;
      /**
       * Resource Subtype
       * @description The subtype of this resource.
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Status
       * @description The current status of this job.
       * @default null
       */
      status: string | null;
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
 * Type of ASANA's ASANA_GET_ALLOCATION tool input.
 */
type ASANA_GET_ALLOCATION_INPUT = {
  /**
   * Allocation Gid
   * @description Globally unique identifier for the allocation.
   */
  allocation_gid?: string;
  /**
   * Opt Fields
   * @description This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_GET_ALLOCATION tool output.
 */
type ASANA_GET_ALLOCATION_OUTPUT = {
  /**
   * Allocation
   * @description The allocation record.
   * @default null
   */
  data: {
      /**
       * UserCompact
       * @description The user or placeholder assigned to the allocation.
       * @default null
       */
      assignee: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * UserCompact
       * @description The user who created the allocation.
       * @default null
       */
      created_by: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Effort
       * @description The amount of time associated with the allocation, represented as a percentage or number of hours
       * @default null
       */
      effort: {
          /**
           * Type
           * @description The type of effort, e.g. hours or percentage
           * @default null
           */
          type: string | null;
          /**
           * Value
           * @description The value of the effort
           * @default null
           */
          value: number | null;
      } | null;
      /**
       * End Date
       * Format: date
       * @description The localized day on which the allocation ends.
       * @default null
       */
      end_date: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * ProjectCompact
       * @description The project the allocation is on.
       * @default null
       */
      parent: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Resource Subtype
       * @description The subtype of the allocation.
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Start Date
       * Format: date
       * @description The localized day on which the allocation starts.
       * @default null
       */
      start_date: string | null;
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
 * Type of ASANA's ASANA_GET_ALLOCATIONS tool input.
 */
type ASANA_GET_ALLOCATIONS_INPUT = {
  /**
   * Assignee
   * @description Globally unique identifier for the user or placeholder the allocation is assigned to.
   * @default null
   */
  assignee: string | null;
  /**
   * Limit
   * @description Results per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Parent
   * @description Globally unique identifier for the project to filter allocations by.
   * @default null
   */
  parent: string | null;
  /**
   * Workspace
   * @description Globally unique identifier for the workspace.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of ASANA's ASANA_GET_ALLOCATIONS tool output.
 */
type ASANA_GET_ALLOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Successfully retrieved the requested allocations.
   */
  data?: {
      /**
       * Assignee
       * @description The user or placeholder assigned to the allocation.
       * @default null
       */
      assignee: {
          [key: string]: unknown;
      } | null;
      /**
       * Created By
       * @description The user who created the allocation.
       * @default null
       */
      created_by: {
          [key: string]: unknown;
      } | null;
      /**
       * Effort
       * @description The amount of time associated with the allocation, represented as a percentage or number of hours
       * @default null
       */
      effort: {
          [key: string]: unknown;
      } | null;
      /**
       * End Date
       * @description The localized day on which the allocation ends.
       * @default null
       */
      end_date: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Parent
       * @description The project the allocation is on.
       * @default null
       */
      parent: {
          [key: string]: unknown;
      } | null;
      /**
       * Resource Subtype
       * @description The subtype of the allocation.
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
      /**
       * Start Date
       * @description The localized day on which the allocation starts.
       * @default null
       */
      start_date: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * NextPage
   * @description Conditional. This property is only present when a limit query parameter is provided in the request. When making a paginated request, the API will return a number of results as specified by the limit parameter. If more results exist, then the response will contain a next_page attribute, which will include an offset, a relative path attribute, and a full uri attribute. If there are no more pages available, next_page will be null and no offset will be provided. Note that an offset token will expire after some time, as data may have changed.
   * @default null
   */
  next_page: {
      /**
       * Offset
       * @description Pagination offset for the request.
       */
      offset: string;
      /**
       * Path
       * @description A relative path containing the query parameters to fetch for next_page
       */
      path: string;
      /**
       * Uri
       * @description A full uri containing the query parameters to fetch for next_page
       */
      uri: string;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_ATTACHMENT tool input.
 */
type ASANA_GET_ATTACHMENT_INPUT = {
  /**
   * Attachment Gid
   * @description The globally unique identifier for the attachment.
   */
  attachment_gid?: string;
  /**
   * Opt Fields
   * @description A comma-separated list of fields to include in the response. For example: "name,size,url".
   * @default null
   */
  opt_fields: string | null;
};

/**
 * Type of ASANA's ASANA_GET_ATTACHMENT tool output.
 */
type ASANA_GET_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connected To App
       * @description Whether the attachment is connected to the app making the request for a specific install.
       * @default null
       */
      connected_to_app: boolean | null;
      /**
       * Created At
       * @description The time at which this resource was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Download Url
       * @description The URL where the attachment can be downloaded.
       * @default null
       */
      download_url: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource.
       */
      gid: string;
      /**
       * Host
       * @description The service hosting the attachment.
       * @default null
       */
      host: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Parent
       * @description The parent object to which the attachment is attached.
       * @default null
       */
      parent: {
          /**
           * Gid
           * @description Globally unique identifier of the parent.
           */
          gid: string;
          /**
           * Name
           * @description Name of the parent.
           */
          name: string;
          /**
           * Resource Type
           * @description The type of resource.
           */
          resource_type: string;
      } | null;
      /**
       * ParentTypeEnum
       * @description The type of the parent object.
       * @default null
       * @enum {string|null}
       */
      parent_type: "project" | "task" | null;
      /**
       * Permanent Url
       * @description The URL where the attachment can be viewed. This is not guaranteed to be a download link.
       * @default null
       */
      permanent_url: string | null;
      /**
       * Resource Subtype
       * @description The service hosting the attachment.
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The type of resource.
       */
      resource_type: string;
      /**
       * Size
       * @description The size of the attachment in bytes.
       * @default null
       */
      size: number | null;
      /**
       * View Url
       * @description The URL where the attachment can be viewed.
       * @default null
       */
      view_url: string | null;
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
 * Type of ASANA's ASANA_GET_AUDIT_LOG_EVENTS tool input.
 */
type ASANA_GET_AUDIT_LOG_EVENTS_INPUT = {
  /**
   * Actor Gid
   * @description Filter to events triggered by the actor with this ID.
   * @default null
   */
  actor_gid: string | null;
  /**
   * Actor Type
   * @description Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. If actor_gid is included, this should be excluded.
   * @default null
   */
  actor_type: string | null;
  /**
   * End At
   * Format: date-time
   * @description Filter to events created before this time (exclusive).
   * @default null
   */
  end_at: string | null;
  /**
   * Event Type
   * @description Filter to events of this type. Refer to the supported audit log events for a full list of values.
   * @default null
   */
  event_type: string | null;
  /**
   * Limit
   * @description Results per page. The number of objects to return per page. The value must be between 1 and 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
   * @default null
   */
  offset: string | null;
  /**
   * Resource Gid
   * @description Filter to events with this resource ID.
   * @default null
   */
  resource_gid: string | null;
  /**
   * Start At
   * Format: date-time
   * @description Filter to events created after this time (inclusive).
   * @default null
   */
  start_at: string | null;
  /**
   * Workspace Gid
   * @description Globally unique identifier for the workspace or organization.
   */
  workspace_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_AUDIT_LOG_EVENTS tool output.
 */
type ASANA_GET_AUDIT_LOG_EVENTS_OUTPUT = {
  /**
   * Data
   * @description A list of audit log events.
   */
  data?: {
      /**
       * AuditLogEventActor
       * @description The actor who performed the action.
       * @default null
       */
      actor: {
          /**
           * Actor Type
           * @description The type of actor.
           * @default null
           */
          actor_type: string | null;
          /**
           * Email
           * @description The email of the actor.
           * @default null
           */
          email: string | null;
          /**
           * Gid
           * @description Globally unique identifier for the actor.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the actor.
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * AuditLogEventContext
       * @description The context of the event.
       * @default null
       */
      context: {
          /**
           * Api Authentication Method
           * @description The API authentication method used.
           * @default null
           */
          api_authentication_method: string | null;
          /**
           * Client Ip Address
           * @description The IP address of the client.
           * @default null
           */
          client_ip_address: string | null;
          /**
           * Context Type
           * @description The type of context.
           * @default null
           */
          context_type: string | null;
          /**
           * Oauth App Name
           * @description The name of the OAuth app.
           * @default null
           */
          oauth_app_name: string | null;
          /**
           * User Agent
           * @description The user agent of the client.
           * @default null
           */
          user_agent: string | null;
      } | null;
      /**
       * Created At
       * Format: date-time
       * @description The time the event was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Details
       * @description Event-specific details.
       * @default null
       */
      details: {
          [key: string]: unknown;
      } | null;
      /**
       * Event Category
       * @description The category of the event.
       * @default null
       */
      event_category: string | null;
      /**
       * Event Type
       * @description The type of event.
       * @default null
       */
      event_type: string | null;
      /**
       * Gid
       * @description Globally unique identifier for the audit log event.
       * @default null
       */
      gid: string | null;
      /**
       * AuditLogEventResource
       * @description The resource that was affected.
       * @default null
       */
      resource: {
          /**
           * Email
           * @description The email of the resource.
           * @default null
           */
          email: string | null;
          /**
           * Gid
           * @description Globally unique identifier for the resource.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the resource.
           * @default null
           */
          name: string | null;
          /**
           * Resource Subtype
           * @description The subtype of the resource.
           * @default null
           */
          resource_subtype: string | null;
          /**
           * Resource Type
           * @description The type of resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Pagination data for the next page.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_A_PROJECT tool input.
 */
type ASANA_GET_A_PROJECT_INPUT = {
  /**
   * Opt Fields
   * @description Defines a comma-separated list of optional fields for a more detailed project representation in the response, beyond the default compact view.
   */
  opt_fields?: string[];
  /**
   * Opt Pretty
   * @description Pretty-prints the JSON response for readability, useful for debugging.
   */
  opt_pretty?: boolean;
  /**
   * Project Gid
   * @description Globally unique identifier for the project.
   */
  project_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_A_PROJECT tool output.
 */
type ASANA_GET_A_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Contains the project details.
   */
  data?: {
      /**
       * Data
       * @description Detailed information for the retrieved project.
       * @default null
       */
      data: {
          /**
           * Archived
           * @description True if the project is archived.
           * @default null
           */
          archived: boolean | null;
          /**
           * Color
           * @description Color of the project.
           * @default null
           */
          color: (("dark-pink" | "dark-green" | "dark-blue" | "dark-red" | "dark-teal" | "dark-brown" | "dark-orange" | "dark-purple" | "dark-warm-gray" | "light-pink" | "light-green" | "light-blue" | "light-red" | "light-teal" | "light-brown" | "light-orange" | "light-purple" | "light-warm-gray" | "none") | null) | null;
          /**
           * Completed
           * @description True if the project is marked complete.
           * @default null
           */
          completed: boolean | null;
          /**
           * Completed At
           * Format: date-time
           * @description Completion time (UTC ISO 8601); null if not completed.
           * @default null
           */
          completed_at: string | null;
          /**
           * CompletedBy
           * @description User who marked the project as completed.
           * @default null
           */
          completed_by: {
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description User's name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type (e.g., user).
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Created At
           * Format: date-time
           * @description Creation time in UTC ISO 8601 format.
           * @default null
           */
          created_at: string | null;
          /**
           * CreatedFromTemplate
           * @description Reference to the template used to create this project, if any.
           * @default null
           */
          created_from_template: {
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the project template.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type (e.g., project_template).
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * CurrentStatus
           * @description Current status details of the project.
           * @default null
           */
          current_status: {
              /**
               * Author
               * @description Author of the status update.
               * @default null
               */
              author: {
                  /**
                   * Gid
                   * @description Globally unique identifier.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description User's name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type (e.g., user).
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Color1
               * @description Color associated with the status update.
               * @default null
               * @enum {string|null}
               */
              color: "green" | "yellow" | "red" | "blue" | "complete" | null;
              /**
               * Created At
               * Format: date-time
               * @description Creation time in UTC ISO 8601 format.
               * @default null
               */
              created_at: string | null;
              /**
               * CreatedBy
               * @description Creator of the status update.
               * @default null
               */
              created_by: {
                  /**
                   * Gid
                   * @description Globally unique identifier.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description User's name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type (e.g., user).
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * Html Text
               * @description HTML formatted text content of the status update. Include `current_status.html_text` in `opt_fields` to receive this.
               * @default null
               */
              html_text: string | null;
              /**
               * Modified At
               * Format: date-time
               * @description Last modification time in UTC ISO 8601 format. Does not reflect changes in associations like comments.
               * @default null
               */
              modified_at: string | null;
              /**
               * Resource Type
               * @description Resource type (e.g., project_status).
               * @default null
               */
              resource_type: string | null;
              /**
               * Text
               * @description Text content of the status update.
               * @default null
               */
              text: string | null;
              /**
               * Title
               * @description Title of the project status update.
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * CurrentStatusUpdate
           * @description Latest status update details for the project.
           * @default null
           */
          current_status_update: {
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * ResourceSubtype
               * @description Subtype of this resource (e.g., project_status_update), indicating the parent's type.
               * @default null
               * @enum {string|null}
               */
              resource_subtype: "project_status_update" | "portfolio_status_update" | "goal_status_update" | null;
              /**
               * Resource Type
               * @description Resource type (e.g., status_update).
               * @default null
               */
              resource_type: string | null;
              /**
               * Title
               * @description Title of the status update.
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Custom Field Settings
           * @description Associated custom field settings (compact form).
           * @default null
           */
          custom_field_settings: {
              /**
               * CustomField
               * @description The custom field definition.
               * @default null
               */
              custom_field: {
                  /**
                   * AsanaCreatedField
                   * @description Identifier linking this field to a template source; set only for custom fields from a template.
                   * @default null
                   */
                  asana_created_field: (("a_v_requirements" | "account_name" | "actionable" | "align_shipping_link" | "align_status" | "allotted_time" | "appointment" | "approval_stage" | "approved" | "article_series" | "board_committee" | "browser" | "campaign_audience" | "campaign_project_status" | "campaign_regions" | "channel_primary" | "client_topic_type" | "complete_by" | "contact" | "contact_email_address" | "content_channels" | "content_channels_needed" | "content_stage" | "content_type" | "contract" | "contract_status" | "cost" | "creation_stage" | "creative_channel" | "creative_needed" | "creative_needs" | "data_sensitivity" | "deal_size" | "delivery_appt" | "delivery_appt_date" | "department" | "department_responsible" | "design_request_needed" | "design_request_type" | "discussion_category" | "do_this_task" | "editorial_content_status" | "editorial_content_tag" | "editorial_content_type" | "effort" | "effort_level" | "est_completion_date" | "estimated_time" | "estimated_value" | "expected_cost" | "external_steps_needed" | "favorite_idea" | "feedback_type" | "financial" | "funding_amount" | "grant_application_process" | "hiring_candidate_status" | "idea_status" | "ids_link" | "ids_patient_link" | "implementation_stage" | "insurance" | "interview_area" | "interview_question_score" | "itero_scan_link" | "job_s_applied_to" | "lab" | "launch_status" | "lead_status" | "localization_language" | "localization_market_team" | "localization_status" | "meeting_minutes" | "meeting_needed" | "minutes" | "mrr" | "must_localize" | "name_of_foundation" | "need_to_follow_up" | "next_appointment" | "next_steps_sales" | "num_people" | "number_of_user_reports" | "office_location" | "onboarding_activity" | "owner" | "participants_needed" | "patient_date_of_birth" | "patient_email" | "patient_phone" | "patient_status" | "phone_number" | "planning_category" | "point_of_contact" | "position" | "post_format" | "prescription" | "priority" | "priority_level" | "product" | "product_stage" | "progress" | "project_size" | "project_status" | "proposed_budget" | "publish_status" | "reason_for_scan" | "referral" | "request_type" | "research_status" | "responsible_department" | "responsible_team" | "risk_assessment_status" | "room_name" | "sales_counterpart" | "sentiment" | "shipping_link" | "social_channels" | "stage" | "status" | "status_design" | "status_of_initiative" | "system_setup" | "task_progress" | "team" | "team_marketing" | "team_responsible" | "time_it_takes_to_complete_tasks" | "timeframe" | "treatment_type" | "type_work_requests_it" | "use_agency" | "user_name" | "vendor_category" | "vendor_type" | "word_count") | null) | null;
                  /**
                   * CreatedBy
                   * @description Creator of the custom field.
                   * @default null
                   */
                  created_by: {
                      /**
                       * Gid
                       * @description Globally unique identifier.
                       * @default null
                       */
                      gid: string | null;
                      /**
                       * Name
                       * @description User's name.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Resource Type
                       * @description Resource type (e.g., user).
                       * @default null
                       */
                      resource_type: string | null;
                  } | null;
                  /**
                   * Currency Code
                   * @description ISO 4217 currency code if format is `currency`.
                   * @default null
                   */
                  currency_code: string | null;
                  /**
                   * Custom Label
                   * @description String appearing next to the custom field value if format is `custom`.
                   * @default null
                   */
                  custom_label: string | null;
                  /**
                   * CustomLabelPosition
                   * @description Position of the custom label if format is `custom` (prefix or suffix).
                   * @default null
                   */
                  custom_label_position: (("prefix" | "suffix") | null) | null;
                  /**
                   * DateValue
                   * @description For `date` type: the chosen date/time value.
                   * @default null
                   */
                  date_value: {
                      /**
                       * Date
                       * @description Date in YYYY-MM-DD format.
                       * @default null
                       */
                      date: string | null;
                      /**
                       * Date Time
                       * @description Date and time in ISO 8601 UTC format; null if no time is selected.
                       * @default null
                       */
                      date_time: string | null;
                  } | null;
                  /**
                   * Description
                   * @description Custom field description. Request via `opt_fields` (e.g., `custom_fields.description` or `custom_field_settings.custom_field.description`).
                   * @default null
                   */
                  description: string | null;
                  /**
                   * Display Value
                   * @description String representation of the custom field's value, suitable for display.
                   * @default null
                   */
                  display_value: string | null;
                  /**
                   * Enabled
                   * @description Indicates if the custom field is enabled. Disabled fields require explicit `opt_fields` request.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Enum Options
                   * @description For `enum` type: specifies possible values.
                   * @default null
                   */
                  enum_options: {
                      /**
                       * Color
                       * @description Color of the enum option.
                       * @default null
                       */
                      color: string | null;
                      /**
                       * Enabled
                       * @description Indicates if the enum option is selectable.
                       * @default null
                       */
                      enabled: boolean | null;
                      /**
                       * Gid
                       * @description Globally unique identifier.
                       * @default null
                       */
                      gid: string | null;
                      /**
                       * Name
                       * @description The name of the enum option.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Resource Type
                       * @description Resource type (e.g., enum_option).
                       * @default null
                       */
                      resource_type: string | null;
                  }[] | null;
                  /**
                   * EnumValue
                   * @description For `enum` type: the currently selected value.
                   * @default null
                   */
                  enum_value: {
                      /**
                       * Color
                       * @description Color of the enum option.
                       * @default null
                       */
                      color: string | null;
                      /**
                       * Enabled
                       * @description Indicates if the enum option is selectable.
                       * @default null
                       */
                      enabled: boolean | null;
                      /**
                       * Gid
                       * @description Globally unique identifier.
                       * @default null
                       */
                      gid: string | null;
                      /**
                       * Name
                       * @description The name of the enum option.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Resource Type
                       * @description Resource type (e.g., enum_option).
                       * @default null
                       */
                      resource_type: string | null;
                  } | null;
                  /**
                   * Format
                   * @description Format of the custom field, influencing display of `number_value`.
                   * @default null
                   * @enum {string|null}
                   */
                  format: "currency" | "identifier" | "percentage" | "custom" | "duration" | "none" | null;
                  /**
                   * Gid
                   * @description Globally unique identifier.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Has Notifications Enabled
                   * @description True if task followers receive notifications for changes to this field.
                   * @default null
                   */
                  has_notifications_enabled: boolean | null;
                  /**
                   * Id Prefix
                   * @description Unique, human-readable custom ID string for mapping CSV imports.
                   * @default null
                   */
                  id_prefix: string | null;
                  /**
                   * Is Formula Field
                   * @description True if this is a read-only formula custom field.
                   * @default null
                   */
                  is_formula_field: boolean | null;
                  /**
                   * Is Global To Workspace
                   * @description True if this custom field is available to every container in the workspace.
                   * @default null
                   */
                  is_global_to_workspace: boolean | null;
                  /**
                   * Is Value Read Only
                   * @description True if this custom field is read-only via the API.
                   * @default null
                   */
                  is_value_read_only: boolean | null;
                  /**
                   * Multi Enum Values
                   * @description For `multi_enum` type: array of chosen values.
                   * @default null
                   */
                  multi_enum_values: {
                      /**
                       * Color
                       * @description Color of the enum option.
                       * @default null
                       */
                      color: string | null;
                      /**
                       * Enabled
                       * @description Indicates if the enum option is selectable.
                       * @default null
                       */
                      enabled: boolean | null;
                      /**
                       * Gid
                       * @description Globally unique identifier.
                       * @default null
                       */
                      gid: string | null;
                      /**
                       * Name
                       * @description The name of the enum option.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Resource Type
                       * @description Resource type (e.g., enum_option).
                       * @default null
                       */
                      resource_type: string | null;
                  }[] | null;
                  /**
                   * Name
                   * @description Name of the custom field.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Number Value
                   * @description For `number` type: the numeric value.
                   * @default null
                   */
                  number_value: number | null;
                  /**
                   * People Value
                   * @description For `people` type: array of user objects representing the field's values.
                   * @default null
                   */
                  people_value: {
                      /**
                       * Gid
                       * @description Globally unique identifier.
                       * @default null
                       */
                      gid: string | null;
                      /**
                       * Name
                       * @description User's name.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Resource Type
                       * @description Resource type (e.g., user).
                       * @default null
                       */
                      resource_type: string | null;
                  }[] | null;
                  /**
                   * Precision
                   * @description For `number` type: number of decimal places to round to (0-6).
                   * @default null
                   */
                  precision: number | null;
                  /**
                   * RepresentationType
                   * @description More accurate data type representation (e.g., formula, custom_id).
                   * @default null
                   * @enum {string|null}
                   */
                  representation_type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | null;
                  /**
                   * ResourceSubtype1
                   * @description Data type of the custom field (e.g., text, number, enum).
                   * @default null
                   * @enum {string|null}
                   */
                  resource_subtype: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | null;
                  /**
                   * Resource Type
                   * @description Resource type (e.g., custom_field).
                   * @default null
                   */
                  resource_type: string | null;
                  /**
                   * Text Value
                   * @description For `text` type: the string value.
                   * @default null
                   */
                  text_value: string | null;
                  /**
                   * Type
                   * @description Deprecated. Use `resource_subtype` instead.
                   * @default null
                   * @enum {string|null}
                   */
                  type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | null;
              } | null;
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * Is Important
               * @description If true, this custom field is displayed in project/portfolio list/grid views in Asana.
               * @default null
               */
              is_important: boolean | null;
              /**
               * Parent
               * @description Parent resource of this custom field setting.
               * @default null
               */
              parent: {
                  /**
                   * Gid
                   * @description Globally unique identifier.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Project name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type (e.g., project).
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Project
               * @description Project associated with this custom field setting.
               * @default null
               */
              project: {
                  /**
                   * Gid
                   * @description Globally unique identifier.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Project name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type (e.g., project).
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Resource Type
               * @description Resource type (e.g., custom_field_setting).
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Custom Fields
           * @description Custom fields configured for this project, with current values.
           * @default null
           */
          custom_fields: {
              /**
               * DateValue
               * @description For `date` type: the chosen date/time value.
               * @default null
               */
              date_value: {
                  /**
                   * Date
                   * @description Date in YYYY-MM-DD format.
                   * @default null
                   */
                  date: string | null;
                  /**
                   * Date Time
                   * @description Date and time in ISO 8601 UTC format; null if no time is selected.
                   * @default null
                   */
                  date_time: string | null;
              } | null;
              /**
               * Display Value
               * @description String representation of the custom field's value, suitable for display.
               * @default null
               */
              display_value: string | null;
              /**
               * Enabled
               * @description Indicates if the custom field is enabled. Disabled fields require explicit `opt_fields` request.
               * @default null
               */
              enabled: boolean | null;
              /**
               * Enum Options
               * @description For `enum` type: specifies possible values.
               * @default null
               */
              enum_options: {
                  /**
                   * Color
                   * @description Color of the enum option.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description Indicates if the enum option is selectable.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description The name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type (e.g., enum_option).
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * EnumValue
               * @description For `enum` type: the currently selected value.
               * @default null
               */
              enum_value: {
                  /**
                   * Color
                   * @description Color of the enum option.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description Indicates if the enum option is selectable.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description The name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type (e.g., enum_option).
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * Id Prefix
               * @description Unique, human-readable custom ID string for mapping CSV imports.
               * @default null
               */
              id_prefix: string | null;
              /**
               * Is Formula Field
               * @description True if this is a read-only formula custom field.
               * @default null
               */
              is_formula_field: boolean | null;
              /**
               * Multi Enum Values
               * @description For `multi_enum` type: array of chosen values.
               * @default null
               */
              multi_enum_values: {
                  /**
                   * Color
                   * @description Color of the enum option.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description Indicates if the enum option is selectable.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description The name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description Resource type (e.g., enum_option).
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * Name
               * @description Name of the custom field.
               * @default null
               */
              name: string | null;
              /**
               * Number Value
               * @description For `number` type: the numeric value.
               * @default null
               */
              number_value: number | null;
              /**
               * RepresentationType
               * @description More accurate data type representation (e.g., formula, custom_id).
               * @default null
               * @enum {string|null}
               */
              representation_type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | null;
              /**
               * ResourceSubtype1
               * @description Data type of the custom field (e.g., text, number, enum).
               * @default null
               * @enum {string|null}
               */
              resource_subtype: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | null;
              /**
               * Resource Type
               * @description Resource type (e.g., custom_field).
               * @default null
               */
              resource_type: string | null;
              /**
               * Text Value
               * @description For `text` type: the string value.
               * @default null
               */
              text_value: string | null;
              /**
               * Type
               * @description Deprecated. Use `resource_subtype` instead.
               * @default null
               * @enum {string|null}
               */
              type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | null;
          }[] | null;
          /**
           * DefaultAccessLevel
           * @description Default access level for new project members.
           * @default null
           * @enum {string|null}
           */
          default_access_level: "admin" | "editor" | "commenter" | "viewer" | null;
          /**
           * DefaultView
           * @description Default project view (list, board, calendar, or timeline).
           * @default null
           * @enum {string|null}
           */
          default_view: "list" | "board" | "calendar" | "timeline" | null;
          /**
           * Due Date
           * Format: date
           * @description Deprecated. Use `due_on`.
           * @default null
           */
          due_date: string | null;
          /**
           * Due On
           * Format: date
           * @description Project due date (YYYY-MM-DD).
           * @default null
           */
          due_on: string | null;
          /**
           * Followers
           * @description Users following this project (receive 'tasks added' notifications).
           * @default null
           */
          followers: {
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description User's name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type (e.g., user).
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Gid
           * @description Globally unique identifier.
           * @default null
           */
          gid: string | null;
          /**
           * Html Notes
           * @description HTML formatted project notes. Include `html_notes` in `opt_fields` to receive this.
           * @default null
           */
          html_notes: string | null;
          /**
           * Icon
           * @description The icon for a project.
           * @default null
           * @enum {string|null}
           */
          icon: "list" | "board" | "timeline" | "calendar" | "rocket" | "people" | "graph" | "star" | "bug" | "light_bulb" | "globe" | "gear" | "notebook" | "computer" | "check" | "target" | "html" | "megaphone" | "chat_bubbles" | "briefcase" | "page_layout" | "mountain_flag" | "puzzle" | "presentation" | "line_and_symbols" | "speed_dial" | "ribbon" | "shoe" | "shopping_basket" | "map" | "ticket" | "coins" | null;
          /**
           * Members
           * @description Users who are members of this project.
           * @default null
           */
          members: {
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description User's name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type (e.g., user).
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * MinimumAccessLevelForCustomization
           * @description Minimum access level for members to modify project workflow/appearance.
           * @default null
           * @enum {string|null}
           */
          minimum_access_level_for_customization: "admin" | "editor" | null;
          /**
           * MinimumAccessLevelForSharing
           * @description Minimum access level for members to share project and manage memberships.
           * @default null
           * @enum {string|null}
           */
          minimum_access_level_for_sharing: "admin" | "editor" | null;
          /**
           * Modified At
           * Format: date-time
           * @description Last modification time (UTC ISO 8601). Does not reflect task/comment association changes.
           * @default null
           */
          modified_at: string | null;
          /**
           * Name
           * @description Project name.
           * @default null
           */
          name: string | null;
          /**
           * Notes
           * @description Project description or notes.
           * @default null
           */
          notes: string | null;
          /**
           * Owner
           * @description Current owner of the project; may be null.
           * @default null
           */
          owner: {
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description User's name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type (e.g., user).
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Permalink Url
           * @description Direct URL to the project in Asana.
           * @default null
           */
          permalink_url: string | null;
          /**
           * PrivacySetting
           * @description Project privacy setting. Organization admins may restrict values.
           * @default null
           * @enum {string|null}
           */
          privacy_setting: "public_to_workspace" | "private_to_team" | "private" | null;
          /**
           * ProjectBrief
           * @description A reference to the project brief.
           * @default null
           */
          project_brief: {
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description Resource type (e.g., project_brief).
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Public
           * @description Deprecated. Use `privacy_setting`.
           * @default null
           */
          public: boolean | null;
          /**
           * Resource Type
           * @description Resource type (project).
           * @default null
           */
          resource_type: string | null;
          /**
           * Start On
           * Format: date
           * @description Project start date (YYYY-MM-DD). Requires `due_on` if set/unset; cannot be same as `due_on`.
           * @default null
           */
          start_on: string | null;
          /**
           * Team
           * @description Team with which this project is shared.
           * @default null
           */
          team: {
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description The name of the team.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type (e.g., team).
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Workspace
           * @description The workspace or organization this project belongs to.
           * @default null
           */
          workspace: {
              /**
               * Gid
               * @description Globally unique identifier.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description The name of the workspace.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description Resource type (e.g., workspace).
               * @default null
               */
              resource_type: string | null;
          } | null;
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
 * Type of ASANA's ASANA_GET_A_TASK tool input.
 */
type ASANA_GET_A_TASK_INPUT = {
  /**
   * Opt Fields
   * @description Comma-separated list of optional fields to include (e.g., `assignee`, `custom_fields.name`) for a more detailed response beyond the default compact representation.
   */
  opt_fields?: string[];
  /**
   * Opt Pretty
   * @description If true, formats JSON response with indentation for readability; for debugging, as it increases response size/time.
   */
  opt_pretty?: boolean;
  /**
   * Task Gid
   * @description Globally unique identifier (GID) of the task.
   */
  task_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_A_TASK tool output.
 */
type ASANA_GET_A_TASK_OUTPUT = {
  /**
   * Data
   * @description The response data containing the task.
   */
  data?: {
      /**
       * Data
       * @description The task object containing its details.
       * @default null
       */
      data: {
          /**
           * Actual Time Minutes
           * @description This value represents the sum of all Time Tracking entries in the Actual Time field on a given Task, in minutes. It is represented as a nullable long value.
           * @default null
           */
          actual_time_minutes: number | null;
          /**
           * ApprovalStatus
           * @description *Conditional* Reflects the approval status of this task (e.g., `pending`, `approved`, `rejected`). This field is linked with `completed`: `pending` means incomplete, while `approved`, `rejected`, and `changes_requested` mean complete. Setting `completed` to true sets this to `approved`.
           * @default null
           * @enum {string|null}
           */
          approval_status: "pending" | "approved" | "rejected" | "changes_requested" | null;
          /**
           * Assignee
           * @description The user to whom this task is assigned. Null if unassigned.
           * @default null
           */
          assignee: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description *Read-only except when same user as requester*. The user’s name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * AssigneeSection
           * @description The section in the assignee's 'My Tasks' list where this task is located. Null if unassigned or not in a specific 'My Tasks' section.
           * @default null
           */
          assignee_section: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description The name of the section (i.e. the text displayed as the section header).
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * AssigneeStatus
           * @description *Deprecated* Scheduling status of this task for its assignee (e.g., `today`, `upcoming`, `later`). Can only be set if assignee is not null. Setting to "inbox" or "upcoming" places it at the top of the section, others at the bottom.
           * @default null
           * @enum {string|null}
           */
          assignee_status: "today" | "upcoming" | "later" | "new" | "inbox" | null;
          /**
           * Completed
           * @description True if the task is currently marked complete, false if not.
           * @default null
           */
          completed: boolean | null;
          /**
           * Completed At
           * Format: date-time
           * @description The UTC timestamp when the task was completed, or null if incomplete.
           * @default null
           */
          completed_at: string | null;
          /**
           * CompletedBy
           * @description The user who completed the task. This is null if the task is not completed.
           * @default null
           */
          completed_by: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description *Read-only except when same user as requester*. The user’s name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Created At
           * Format: date-time
           * @description The UTC timestamp when this task was created.
           * @default null
           */
          created_at: string | null;
          /**
           * CreatedBy
           * @description [Opt In](https://raw.githubusercontent.com). The user who created this task. A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
           * @default null
           */
          created_by: {
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description The type of resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Custom Fields
           * @description Array of custom field values applied to the task. Each object includes properties like `enum_value` for enum types, `text_value` for text, etc. The `gid` of each custom field value is identical to the `gid` of the custom field definition, allowing metadata lookup via `/custom_fields/{custom_field_gid}`.
           * @default null
           */
          custom_fields: {
              /**
               * AsanaCreatedField
               * @description *Conditional*. A unique identifier to associate this field with the template source of truth. This field is set only if the custom field is created from an Asana template.
               * @default null
               */
              asana_created_field: (("a_v_requirements" | "account_name" | "actionable" | "align_shipping_link" | "align_status" | "allotted_time" | "appointment" | "approval_stage" | "approved" | "article_series" | "board_committee" | "browser" | "campaign_audience" | "campaign_project_status" | "campaign_regions" | "channel_primary" | "client_topic_type" | "complete_by" | "contact" | "contact_email_address" | "content_channels" | "content_channels_needed" | "content_stage" | "content_type" | "contract" | "contract_status" | "cost" | "creation_stage" | "creative_channel" | "creative_needed" | "creative_needs" | "data_sensitivity" | "deal_size" | "delivery_appt" | "delivery_appt_date" | "department" | "department_responsible" | "design_request_needed" | "design_request_type" | "discussion_category" | "do_this_task" | "editorial_content_status" | "editorial_content_tag" | "editorial_content_type" | "effort" | "effort_level" | "est_completion_date" | "estimated_time" | "estimated_value" | "expected_cost" | "external_steps_needed" | "favorite_idea" | "feedback_type" | "financial" | "funding_amount" | "grant_application_process" | "hiring_candidate_status" | "idea_status" | "ids_link" | "ids_patient_link" | "implementation_stage" | "insurance" | "interview_area" | "interview_question_score" | "itero_scan_link" | "job_s_applied_to" | "lab" | "launch_status" | "lead_status" | "localization_language" | "localization_market_team" | "localization_status" | "meeting_minutes" | "meeting_needed" | "minutes" | "mrr" | "must_localize" | "name_of_foundation" | "need_to_follow_up" | "next_appointment" | "next_steps_sales" | "num_people" | "number_of_user_reports" | "office_location" | "onboarding_activity" | "owner" | "participants_needed" | "patient_date_of_birth" | "patient_email" | "patient_phone" | "patient_status" | "phone_number" | "planning_category" | "point_of_contact" | "position" | "post_format" | "prescription" | "priority" | "priority_level" | "product" | "product_stage" | "progress" | "project_size" | "project_status" | "proposed_budget" | "publish_status" | "reason_for_scan" | "referral" | "request_type" | "research_status" | "responsible_department" | "responsible_team" | "risk_assessment_status" | "room_name" | "sales_counterpart" | "sentiment" | "shipping_link" | "social_channels" | "stage" | "status" | "status_design" | "status_of_initiative" | "system_setup" | "task_progress" | "team" | "team_marketing" | "team_responsible" | "time_it_takes_to_complete_tasks" | "timeframe" | "treatment_type" | "type_work_requests_it" | "use_agency" | "user_name" | "vendor_category" | "vendor_type" | "word_count") | null) | null;
              /**
               * CreatedBy1
               * @description The user who created the custom field definition.
               * @default null
               */
              created_by: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description *Read-only except when same user as requester*. The user’s name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Currency Code
               * @description ISO 4217 currency code to format this custom field. This will be null if the `format` is not `currency`.
               * @default null
               */
              currency_code: string | null;
              /**
               * Custom Label
               * @description This is the string that appears next to the custom field value if the `format` is `custom`. This will be null if the `format` is not `custom`.
               * @default null
               */
              custom_label: string | null;
              /**
               * CustomLabelPosition
               * @description Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
               * @default null
               */
              custom_label_position: (("prefix" | "suffix") | null) | null;
              /**
               * DateValue
               * @description *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.
               * @default null
               */
              date_value: {
                  /**
                   * Date
                   * @description A string representing the date in YYYY-MM-DD format.
                   * @default null
                   */
                  date: string | null;
                  /**
                   * Date Time
                   * @description A string representing the date and time in ISO 8601 format (UTC). If no time value is selected, this will be `null`.
                   * @default null
                   */
                  date_time: string | null;
              } | null;
              /**
               * Description
               * @description [Opt In](https://raw.githubusercontent.com). The description of the custom field, providing more context about its purpose.
               * @default null
               */
              description: string | null;
              /**
               * Display Value
               * @description A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
               * @default null
               */
              display_value: string | null;
              /**
               * Enabled
               * @description *Conditional*. Determines if the custom field is enabled or not. A disabled custom field is not shown in the Asana UI, but the field and its values are still present.
               * @default null
               */
              enabled: boolean | null;
              /**
               * Enum Options
               * @description *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to Asana's documentation on working with enum options.
               * @default null
               */
              enum_options: {
                  /**
                   * Color
                   * @description The color of the enum option. Defaults to ‘none’.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description Whether or not the enum option is a selectable value for the custom field.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description The name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * EnumValue
               * @description The selected enum option for an enum custom field. This will be null if the custom field is not of type `enum` or if no value is set.
               * @default null
               */
              enum_value: {
                  /**
                   * Color
                   * @description The color of the enum option. Defaults to ‘none’.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description Whether or not the enum option is a selectable value for the custom field.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description The name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Format
               * @description The format of this custom field. Determines how the value is displayed in Asana. Possible values: `currency`, `identifier`, `percentage`, `custom`, `duration`, `none`.
               * @default null
               * @enum {string|null}
               */
              format: "currency" | "identifier" | "percentage" | "custom" | "duration" | "none" | null;
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Has Notifications Enabled
               * @description *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.
               * @default null
               */
              has_notifications_enabled: boolean | null;
              /**
               * Id Prefix
               * @description This field is the unique custom ID string for the custom field, if set. This is a user-defined identifier, often used for referencing the custom field in integrations (e.g., 'Risk Level').
               * @default null
               */
              id_prefix: string | null;
              /**
               * Is Formula Field
               * @description *Conditional*. This flag describes whether a custom field is a formula custom field. Formula fields calculate their values based on other fields.
               * @default null
               */
              is_formula_field: boolean | null;
              /**
               * Is Global To Workspace
               * @description This flag describes whether this custom field is available to every container (e.g. project) in the workspace. If false, it's specific to certain projects.
               * @default null
               */
              is_global_to_workspace: boolean | null;
              /**
               * Is Value Read Only
               * @description *Conditional*. This flag describes whether a custom field's value on a task is read-only. This is often true for formula fields or fields managed by an integration.
               * @default null
               */
              is_value_read_only: boolean | null;
              /**
               * Multi Enum Values
               * @description *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
               * @default null
               */
              multi_enum_values: {
                  /**
                   * Color
                   * @description The color of the enum option. Defaults to ‘none’.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description Whether or not the enum option is a selectable value for the custom field.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description The name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * Name
               * @description The name of the custom field.
               * @default null
               */
              name: string | null;
              /**
               * Number Value
               * @description *Conditional*. This number is the value of a `number` custom field.
               * @default null
               */
              number_value: number | null;
              /**
               * People Value
               * @description *Conditional*. Only relevant for custom fields of type `people`. This array of compact user objects reflects the values of a `people` custom field.
               * @default null
               */
              people_value: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description *Read-only except when same user as requester*. The user’s name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * Precision
               * @description Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to (e.g., 0 for integer values, 1 for one decimal place). Must be between 0 and 6, inclusive. For percentage format, 0.25 (25%) has precision 0, while 0.251 (25.1%) has precision 1. Identifier format always has precision 0.
               * @default null
               */
              precision: number | null;
              /**
               * RepresentationType
               * @description The type of representation of the custom field. This indicates how the custom field value should be interpreted and displayed.
               * @default null
               * @enum {string|null}
               */
              representation_type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | null;
              /**
               * ResourceSubtype1
               * @description The type of the custom field. Must be one of the given values: `text`, `enum`, `multi_enum`, `number`, `date`, `people`.
               * @default null
               * @enum {string|null}
               */
              resource_subtype: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
              /**
               * Text Value
               * @description *Conditional*. This string is the value of a `text` custom field.
               * @default null
               */
              text_value: string | null;
              /**
               * Type
               * @description *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values: `text`, `enum`, `multi_enum`, `number`, `date`, `people`.
               * @default null
               * @enum {string|null}
               */
              type: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | null;
          }[] | null;
          /**
           * Dependencies
           * @description [Opt In](https://raw.githubusercontent.com). Array of resources (tasks) that this task depends on. Objects contain only the `gid` of the dependency.
           * @default null
           */
          dependencies: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Dependents
           * @description [Opt In](https://raw.githubusercontent.com). Array of resources (tasks) that depend on this task. Objects contain only the `gid` of the dependent.
           * @default null
           */
          dependents: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Due At
           * Format: date-time
           * @description The UTC date and time on which this task is due (e.g., '2019-09-15T02:06:58.147Z'). Null if no due time. Do not use with `due_on`.
           * @default null
           */
          due_at: string | null;
          /**
           * Due On
           * Format: date
           * @description The localized date on which this task is due (e.g., '2019-09-15'). Null if no due date. Do not use with `due_at`.
           * @default null
           */
          due_on: string | null;
          /**
           * External
           * @description *OAuth Required*. *Conditional*. Contains app-specific metadata. Returned only if external values are set or included via Opt In. Allows storing a `gid` for retrieval and a `data` blob (string). Requires OAuth. Use `external:custom_gid` to reference. See Asana's Custom External Data documentation.
           * @default null
           */
          external: {
              /**
               * Data
               * @description A string of app-specific metadata associated with the task.
               * @default null
               */
              data: string | null;
              /**
               * Gid
               * @description Globally unique identifier of the external data attachment.
               * @default null
               */
              gid: string | null;
          } | null;
          /**
           * Followers
           * @description Array of users following this task.
           * @default null
           */
          followers: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description *Read-only except when same user as requester*. The user’s name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Hearted
           * @description *Deprecated - please use `liked` instead*. True if the task is hearted by the authorized user, false if not.
           * @default null
           */
          hearted: boolean | null;
          /**
           * Hearts
           * @description *Deprecated - please use `likes` instead*. Array of users who have hearted this task.
           * @default null
           */
          hearts: {
              /**
               * Gid
               * @description Globally unique identifier of the object, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * User
               * @description The user who hearted the task.
               * @default null
               */
              user: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description *Read-only except when same user as requester*. The user’s name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
          }[] | null;
          /**
           * Html Notes
           * @description [Opt In](https://raw.githubusercontent.com). The task's notes with HTML formatting.
           * @default null
           */
          html_notes: string | null;
          /**
           * Is Rendered As Separator
           * @description [Opt In](https://raw.githubusercontent.com). True if the task is rendered as a visual separator in some contexts (e.g., subtasks appearing like sections).
           * @default null
           */
          is_rendered_as_separator: boolean | null;
          /**
           * Liked
           * @description True if the task is liked by the authorized user, false if not.
           * @default null
           */
          liked: boolean | null;
          /**
           * Likes
           * @description Array of users who have liked this task.
           * @default null
           */
          likes: {
              /**
               * Gid
               * @description Globally unique identifier of the object, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * User
               * @description The user who liked the task.
               * @default null
               */
              user: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description *Read-only except when same user as requester*. The user’s name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
          }[] | null;
          /**
           * Memberships
           * @description *Create-only*. Array of projects this task is associated with and the section it is in. Used at task creation to add to sections. Modify post-creation via `addProject`/`removeProject` endpoints.
           * @default null
           */
          memberships: {
              /**
               * Project
               * @description The project this task is a member of.
               * @default null
               */
              project: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Section
               * @description The section of the project this task is in, if applicable.
               * @default null
               */
              section: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description The name of the section (i.e. the text displayed as the section header).
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
          }[] | null;
          /**
           * Modified At
           * Format: date-time
           * @description The UTC timestamp of the last modification to the task. Changes include new stories, trashed stories/attachments, assignment changes, custom field updates, trashing the task, or updates to `completed`, `name`, `due_date`, `description`, `attachments`, `items`, `schedule_status`. Moving to new containers or adding comments (stories they generate DO affect it) do NOT change `modified_at`.
           * @default null
           */
          modified_at: string | null;
          /**
           * Name
           * @description The name of the task.
           * @default null
           */
          name: string | null;
          /**
           * Notes
           * @description Free-form textual information associated with the task (i.e. its description).
           * @default null
           */
          notes: string | null;
          /**
           * Num Hearts
           * @description *Deprecated - please use `num_likes` instead*. The number of users who have hearted this task.
           * @default null
           */
          num_hearts: number | null;
          /**
           * Num Likes
           * @description The number of users who have liked this task.
           * @default null
           */
          num_likes: number | null;
          /**
           * Num Subtasks
           * @description [Opt In](https://raw.githubusercontent.com). The number of subtasks on this task.
           * @default null
           */
          num_subtasks: number | null;
          /**
           * Parent
           * @description The parent task, if this task is a subtask. Null if not a subtask.
           * @default null
           */
          parent: {
              /**
               * CreatedBy2
               * @description [Opt In](https://raw.githubusercontent.com). The user who created this parent task. A *user* object represents an account in Asana.
               * @default null
               */
              created_by: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Resource Type
                   * @description The type of resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description The name of the task.
               * @default null
               */
              name: string | null;
              /**
               * ResourceSubtype2
               * @description The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning (e.g., `default_task`, `milestone`). The `milestone` subtype cannot have a start_date.
               * @default null
               * @enum {string|null}
               */
              resource_subtype: "default_task" | "milestone" | "section" | "approval" | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Permalink Url
           * @description A URL that points directly to the task within Asana.
           * @default null
           */
          permalink_url: string | null;
          /**
           * Projects
           * @description *Create-only.* Array of projects this task is associated with. Used at task creation to add to multiple projects. Modify post-creation using `addProject` and `removeProject` actions.
           * @default null
           */
          projects: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * ResourceSubtype
           * @description The subtype of this resource (e.g., `default_task`, `milestone`, `section`, `approval`). Different subtypes may have different rendering or semantic meaning in Asana. Milestones, for example, represent a single moment in time and cannot have a start_date.
           * @default null
           * @enum {string|null}
           */
          resource_subtype: "default_task" | "milestone" | "section" | "approval" | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
          /**
           * Start At
           * Format: date-time
           * @description UTC date and time on which work begins for the task. Null if no start time. Use ISO 8601 format (e.g., '2019-09-14T02:06:58.147Z'). Do not use with `start_on`. `due_at` must be present when setting/unsetting `start_at`.
           * @default null
           */
          start_at: string | null;
          /**
           * Start On
           * Format: date
           * @description Localized date on which work begins for the task. Null if no start date. Use YYYY-MM-DD format (e.g., '2019-09-14'). Do not use with `start_at`. `due_on` or `due_at` must be present when setting/unsetting `start_on`.
           * @default null
           */
          start_on: string | null;
          /**
           * Tags
           * @description Array of tags associated with this task. To change tags, use `addTag` and `removeTag` actions.
           * @default null
           */
          tags: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Workspace
           * @description The workspace this task belongs to.
           * @default null
           */
          workspace: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description The name of the workspace.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
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
 * Type of ASANA's ASANA_GET_A_USER_TASK_LIST tool input.
 */
type ASANA_GET_A_USER_TASK_LIST_INPUT = {
  /**
   * Opt Fields
   * @description A list of optional field names to include in the response. By default, the response is compact and excludes some properties. Use this parameter to retrieve additional details. For example, to include the owner and workspace, provide `["owner", "workspace"]` as the value for this field.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Set to true to receive the API response in a pretty-printed JSON format. This is useful for debugging but may increase response size and processing time.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * User Task List Gid
   * @description The globally unique identifier (GID) for the user task list to be retrieved.
   */
  user_task_list_gid?: string;
  /**
   * Workspace
   * @description The GID of the workspace to filter the user task list.
   */
  workspace?: string;
};

/**
 * Type of ASANA's ASANA_GET_A_USER_TASK_LIST tool output.
 */
type ASANA_GET_A_USER_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description The main data object containing the details of the requested user task list.
   */
  data?: {
      /**
       * Data
       * @description Contains the detailed information of the retrieved user task list.
       * @default null
       */
      data: {
          /**
           * Gid
           * @description Globally unique identifier of the user task list resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the user task list. This field is populated if 'name' is specified in the `opt_fields` parameter.
           * @default null
           */
          name: string | null;
          /**
           * Owner
           * @description Details of the owner of the user task list. This field is populated if 'owner' is requested in `opt_fields`.
           * @default null
           */
          owner: {
              /**
               * Gid
               * @description Globally unique identifier of the owner resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description *Read-only except when same user as requester*. The name of the owner.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of the owner resource (e.g., 'user').
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Resource Type
           * @description The base type of this resource, typically 'user_task_list'.
           * @default null
           */
          resource_type: string | null;
          /**
           * Workspace
           * @description Details of the workspace the user task list belongs to. This field is populated if 'workspace' is requested in `opt_fields`.
           * @default null
           */
          workspace: {
              /**
               * Gid
               * @description Globally unique identifier of the workspace resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description The name of the workspace.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of the workspace resource (e.g., 'workspace').
               * @default null
               */
              resource_type: string | null;
          } | null;
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
 * Type of ASANA's ASANA_GET_CURRENT_USER tool input.
 */
type ASANA_GET_CURRENT_USER_INPUT = object;

/**
 * Type of ASANA's ASANA_GET_CURRENT_USER tool output.
 */
type ASANA_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description User's email address.
       */
      email: string;
      /**
       * Gid
       * @description Globally unique identifier of the user.
       */
      gid: string;
      /**
       * Name
       * @description User's full name.
       */
      name: string;
      /**
       * Resource Type
       * @description Base type of this resource, typically 'user'.
       */
      resource_type: string;
      /**
       * Workspaces
       * @description Workspaces the user can access.
       */
      workspaces: {
          /**
           * Gid
           * @description Globally unique identifier of the resource.
           */
          gid: string;
          /**
           * Name
           * @description Name of the workspace.
           */
          name: string;
          /**
           * Resource Type
           * @description Base type of this resource.
           */
          resource_type: string;
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
 * Type of ASANA's ASANA_GET_CUSTOM_FIELD tool input.
 */
type ASANA_GET_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Gid
   * @description Globally unique identifier for the custom field.
   */
  custom_field_gid?: string;
  /**
   * Opt Fields
   * @description This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable.
   * @default null
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_GET_CUSTOM_FIELD tool output.
 */
type ASANA_GET_CUSTOM_FIELD_OUTPUT = {
  /**
   * CustomFieldResponseData
   * @description The custom field object.
   * @default null
   */
  data: {
      /**
       * CreatedBy
       * @description [Opt In](/docs/input-output-options). The user who created this custom field.
       * @default null
       */
      created_by: {
          /**
           * Gid
           * @description Globally unique identifier for the user.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description Name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The type of resource. For users, this is always “user”.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Currency Code
       * @description Only relevant for custom fields of type ‘currency’. This ISO 4217 currency code to format money values; null if the field is not a currency field.
       * @default null
       */
      currency_code: string | null;
      /**
       * Custom Label
       * @description Only relevant for custom fields of type ‘people’. This label identifies the custom field within the Asana product.
       * @default null
       */
      custom_label: string | null;
      /**
       * Custom Label Position
       * @description Only relevant for custom fields of type ‘people’. This position of the label within the Asana product. This field is deprecated and will be removed soon.
       * @default null
       */
      custom_label_position: string | null;
      /**
       * DateValue
       * @description *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) of the custom field.
       * @default null
       */
      date_value: {
          /**
           * Date
           * @description The date, in YYYY-MM-DD format.
           * @default null
           */
          date: string | null;
          /**
           * Date Time
           * @description The date and time, in ISO 8601 format.
           * @default null
           */
          date_time: string | null;
      } | null;
      /**
       * Description
       * @description [Opt In](/docs/input-output-options). The description of the custom field.
       * @default null
       */
      description: string | null;
      /**
       * Display Value
       * @description A string representation for the value of the custom field. Integrations should not rely on the format of this string.
       * @default null
       */
      display_value: string | null;
      /**
       * Enabled
       * @description *Conditional*. Determines if the custom field is enabled or not.
       * @default null
       */
      enabled: boolean | null;
      /**
       * Enum Options
       * @description *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).
       * @default null
       */
      enum_options: {
          /**
           * Color
           * @description The color of the enum option.
           * @default null
           */
          color: string | null;
          /**
           * Enabled
           * @description Whether the enum option is enabled.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Gid
           * @description Globally unique identifier for the enum option.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the enum option.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The type of resource. For enum options, this is always “enum_option”.
           * @default null
           */
          resource_type: string | null;
      }[] | null;
      /**
       * EnumOption
       * @description *Conditional*. Only relevant for custom fields of type `enum`. This object is the selected value of an `enum` custom field.
       * @default null
       */
      enum_value: {
          /**
           * Color
           * @description The color of the enum option.
           * @default null
           */
          color: string | null;
          /**
           * Enabled
           * @description Whether the enum option is enabled.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Gid
           * @description Globally unique identifier for the enum option.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the enum option.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The type of resource. For enum options, this is always “enum_option”.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Format
       * @description The format of the custom field. Read more about custom field types in the [custom fields schema](/docs/asana-custom-fields#custom-field-types).
       * @default null
       */
      format: string | null;
      /**
       * Gid
       * @description Globally unique identifier for the custom field.
       */
      gid: string;
      /**
       * Has Notifications Enabled
       * @description [Opt In](/docs/input-output-options). *Conditional*. This flag describes whether a follower of a task with this field should receive notifications from changes to this field.
       * @default null
       */
      has_notifications_enabled: boolean | null;
      /**
       * Id Prefix
       * @description Only relevant for custom fields of type ‘text’. This id prefix to link this field to an external system. For example, if the id prefix is “CR-“, a value of “123” would be displayed as “CR-123”.
       * @default null
       */
      id_prefix: string | null;
      /**
       * Is Formula Field
       * @description [Opt In](/docs/input-output-options). *Conditional*. This flag describes whether this custom field is a formula field.
       * @default null
       */
      is_formula_field: boolean | null;
      /**
       * Is Global To Workspace
       * @description [Opt In](/docs/input-output-options). *Conditional*. This flag describes whether this custom field is a global custom field. Global custom fields can be added to any project in a workspace.
       * @default null
       */
      is_global_to_workspace: boolean | null;
      /**
       * Is Value Read Only
       * @description [Opt In](/docs/input-output-options). *Conditional*. This flag describes whether the value of this custom field is read only.
       * @default null
       */
      is_value_read_only: boolean | null;
      /**
       * Multi Enum Values
       * @description *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the selected values of a `multi_enum` custom field.
       * @default null
       */
      multi_enum_values: {
          /**
           * Color
           * @description The color of the enum option.
           * @default null
           */
          color: string | null;
          /**
           * Enabled
           * @description Whether the enum option is enabled.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Gid
           * @description Globally unique identifier for the enum option.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the enum option.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The type of resource. For enum options, this is always “enum_option”.
           * @default null
           */
          resource_type: string | null;
      }[] | null;
      /**
       * Name
       * @description The name of the custom field.
       * @default null
       */
      name: string | null;
      /**
       * Number Value
       * @description *Conditional*. Only relevant for custom fields of type `number`. This number is the value of a `number` custom field.
       * @default null
       */
      number_value: number | null;
      /**
       * People Value
       * @description *Conditional*. Only relevant for custom fields of type `people`. This array of user GIDs reflects the people chosen as the value of the custom field.
       * @default null
       */
      people_value: {
          /**
           * Gid
           * @description Globally unique identifier for the user.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description Name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The type of resource. For users, this is always “user”.
           * @default null
           */
          resource_type: string | null;
      }[] | null;
      /**
       * Precision
       * @description Only relevant for custom fields of type ‘currency’ or ‘number’. This defines the number of places after the decimal to round to, based on the precision of the field. For instance, if the precision is 0, the value will be rounded to the nearest integer. If the precision is 2, the value will be rounded to the second decimal place.
       * @default null
       */
      precision: number | null;
      /**
       * Representation Subtype
       * @description The format of the custom field. Read more about custom field types in the [custom fields schema](/docs/asana-custom-fields#custom-field-types).
       * @default null
       */
      representation_subtype: string | null;
      /**
       * Resource Subtype
       * @description The type of the custom field. Read more about custom field types in the [custom fields schema](/docs/asana-custom-fields#custom-field-types).
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The type of resource. For custom fields, this is always “custom_field”.
       */
      resource_type: string;
      /**
       * Text Value
       * @description *Conditional*. Only relevant for custom fields of type `text`. This string is the value of a `text` custom field.
       * @default null
       */
      text_value: string | null;
      /**
       * Type
       * @description The type of the custom field. Read more about custom field types in the [custom fields schema](/docs/asana-custom-fields#custom-field-types).
       * @default null
       */
      type: string | null;
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
 * Type of ASANA's ASANA_GET_CUSTOM_FIELDS_FOR_WORKSPACE tool input.
 */
type ASANA_GET_CUSTOM_FIELDS_FOR_WORKSPACE_INPUT = {
  /**
   * Limit
   * @description Results per page. The number of objects to return per page. The value must be between 1 and 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Workspace Gid
   * @description Globally unique identifier for the workspace or organization.
   */
  workspace_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_CUSTOM_FIELDS_FOR_WORKSPACE tool output.
 */
type ASANA_GET_CUSTOM_FIELDS_FOR_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description The list of custom fields.
   */
  data?: {
      /**
       * Asana Created Field
       * @description *Conditional*. A unique identifier to associate this field with the template source of truth.
       * @default null
       */
      asana_created_field: string | null;
      /**
       * UserCompact
       * @description A _user_ object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
       * @default null
       */
      created_by: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The user’s name.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Currency Code
       * @description ISO 4217 currency code to format this custom field. This will be null if the `format` is not `currency`.
       * @default null
       */
      currency_code: string | null;
      /**
       * Custom Label
       * @description This is the string that appears next to the custom field value. This will be null if the `format` is not `custom`.
       * @default null
       */
      custom_label: string | null;
      /**
       * Custom Label Position
       * @description Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
       * @default null
       */
      custom_label_position: string | null;
      /**
       * DateValue
       * @description *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field.
       * @default null
       */
      date_value: {
          /**
           * Date
           * @description A string representing the date in YYYY-MM-DD format.
           * @default null
           */
          date: string | null;
          /**
           * Date Time
           * @description A string representing the date and time in ISO 8601 format.
           * @default null
           */
          date_time: string | null;
      } | null;
      /**
       * Default Access Level
       * @description The default access level when inviting new members to the custom field.
       * @default null
       */
      default_access_level: string | null;
      /**
       * Description
       * @description [Opt In](/docs/input-output-options). The description of the custom field.
       * @default null
       */
      description: string | null;
      /**
       * Display Value
       * @description A string representation for the value of the custom field.
       * @default null
       */
      display_value: string | null;
      /**
       * Enabled
       * @description *Conditional*. Only relevant for custom fields of type `enum`. This array of objects is the selected values of an `enum` custom field.
       * @default null
       */
      enabled: boolean | null;
      /**
       * Enum Options
       * @description Only relevant for custom fields of type `enum` or `multi_enum`. This array specifies the possible values which an `enum` custom field can adopt.
       * @default null
       */
      enum_options: {
          /**
           * Color
           * @description The color of the enum option. Defaults to ‘none’.
           * @default null
           */
          color: string | null;
          /**
           * Enabled
           * @description Whether or not the enum option is a selectable value for the custom field.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the enum option.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      }[] | null;
      /**
       * EnumOption
       * @description *Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an `enum` custom field.
       * @default null
       */
      enum_value: {
          /**
           * Color
           * @description The color of the enum option. Defaults to ‘none’.
           * @default null
           */
          color: string | null;
          /**
           * Enabled
           * @description Whether or not the enum option is a selectable value for the custom field.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the enum option.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Format
       * @description The format of this custom field.
       * @default null
       */
      format: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Has Notifications Enabled
       * @description *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.
       * @default null
       */
      has_notifications_enabled: boolean | null;
      /**
       * Id Prefix
       * @description This field is the unique custom ID string for the custom field.
       * @default null
       */
      id_prefix: string | null;
      /**
       * Is Formula Field
       * @description *Conditional*. This flag describes whether a custom field is a formula custom field.
       * @default null
       */
      is_formula_field: boolean | null;
      /**
       * Is Global To Workspace
       * @description This flag describes whether this custom field is available to every container in the workspace.
       * @default null
       */
      is_global_to_workspace: boolean | null;
      /**
       * Is Value Read Only
       * @description *Conditional*. This flag describes whether a custom field is read only.
       * @default null
       */
      is_value_read_only: boolean | null;
      /**
       * Multi Enum Values
       * @description *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
       * @default null
       */
      multi_enum_values: {
          /**
           * Color
           * @description The color of the enum option. Defaults to ‘none’.
           * @default null
           */
          color: string | null;
          /**
           * Enabled
           * @description Whether or not the enum option is a selectable value for the custom field.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the enum option.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      }[] | null;
      /**
       * Name
       * @description The name of the custom field.
       * @default null
       */
      name: string | null;
      /**
       * Number Value
       * @description *Conditional*. This number is the value of a `number` custom field.
       * @default null
       */
      number_value: number | null;
      /**
       * People Value
       * @description *Conditional*. Only relevant for custom fields of type `people`. This array of compact user objects reflects the values of a `people` custom field.
       * @default null
       */
      people_value: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The user’s name.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      }[] | null;
      /**
       * Precision
       * @description Only relevant for custom fields of type `Number`. This field dictates the number of places after the decimal to round to, based on the full number value of the custom field. For example, if the custom field had a value of 1.2345 and the precision is 2, the rounded custom field value would be 1.23.
       * @default null
       */
      precision: number | null;
      /**
       * Privacy Setting
       * @description The privacy setting of the custom field.
       * @default null
       */
      privacy_setting: string | null;
      /**
       * Representation Type
       * @description The type of the custom field.
       * @default null
       */
      representation_type: string | null;
      /**
       * Resource Subtype
       * @description The type of the custom field. Must be one of the given values.
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
      /**
       * Text Value
       * @description *Conditional*. This string is the value of a `text` custom field.
       * @default null
       */
      text_value: string | null;
      /**
       * Type
       * @description The type of the custom field. Must be one of the given values. Deprecated: new integrations should prefer the resource_subtype field.
       * @default null
       */
      type: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Provides the offset for the next page of results, if any.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_EVENTS tool input.
 */
type ASANA_GET_EVENTS_INPUT = {
  /**
   * Opt Fields
   * @description Defines fields to return. Some requests return compact representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Resource Gid
   * @description Globally unique identifier for the resource.
   */
  resource_gid?: string;
  /**
   * Sync
   * @description A sync token received from a previous events GET request. If provided, the API will return only events that have occurred since the sync token was created. If omitted, the API will return all events.
   * @default null
   */
  sync: string | null;
};

/**
 * Type of ASANA's ASANA_GET_EVENTS tool output.
 */
type ASANA_GET_EVENTS_OUTPUT = {
  /**
   * Data
   * @description The list of events.
   * @default null
   */
  data: {
      /**
       * Action
       * @description The type of change that occurred on the resource.
       * @default null
       */
      action: string | null;
      /**
       * Created At
       * @description The time at which this event was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Parent
       * @description The parent of the resource that changed. This is only present if the event is directly related to the parent.
       * @default null
       */
      parent: {
          [key: string]: unknown;
      } | null;
      /**
       * Resource
       * @description The resource that was changed.
       * @default null
       */
      resource: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description The type of the resource that was changed.
       * @default null
       */
      type: string | null;
      /**
       * User
       * @description The user that instigated the event.
       * @default null
       */
      user: {
          [key: string]: unknown;
      } | null;
  }[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description Indicates whether there are more events to retrieve.
   * @default null
   */
  has_more: boolean | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Sync
   * @description A sync token to be used with the next call to the /events endpoint.
   * @default null
   */
  sync: string | null;
};

/**
 * Type of ASANA's ASANA_GET_GOAL tool input.
 */
type ASANA_GET_GOAL_INPUT = {
  /**
   * Goal Gid
   * @description Globally unique identifier for the goal.
   */
  goal_gid?: string;
  /**
   * Opt Fields
   * @description Comma-separated list of fields to include in the response. Example: "name,notes,due_on"
   * @default null
   */
  opt_fields: string | null;
};

/**
 * Type of ASANA's ASANA_GET_GOAL tool output.
 */
type ASANA_GET_GOAL_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Current Status Update
       * @description The latest status update posted to this goal.
       * @default null
       */
      current_status_update: {
          [key: string]: unknown;
      } | null;
      /**
       * Due On
       * @description The localized day on which this goal is due, in YYYY-MM-DD format.
       * @default null
       */
      due_on: string | null;
      /**
       * Followers
       * @description Array of users who are members of this goal.
       * @default null
       */
      followers: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Gid
       * @description Globally unique identifier of the goal.
       */
      gid: string;
      /**
       * Html Notes
       * @description The notes of the goal with formatting as HTML.
       * @default null
       */
      html_notes: string | null;
      /**
       * Is Workspace Level
       * @description Whether the goal belongs to the workspace or is a team-level goal.
       * @default null
       */
      is_workspace_level: boolean | null;
      /**
       * Liked
       * @description True if the goal is liked by the authorized user, false otherwise.
       * @default null
       */
      liked: boolean | null;
      /**
       * Likes
       * @description Array of likes for users who have liked this goal.
       * @default null
       */
      likes: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Metric
       * @description The metric associated with the goal.
       * @default null
       */
      metric: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description The name of the goal.
       * @default null
       */
      name: string | null;
      /**
       * Notes
       * @description Free-form textual information associated with the goal (i.e., its description).
       * @default null
       */
      notes: string | null;
      /**
       * Num Likes
       * @description The number of users who have liked this goal.
       * @default null
       */
      num_likes: number | null;
      /**
       * Owner
       * @description The owner of the goal.
       * @default null
       */
      owner: {
          [key: string]: unknown;
      } | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @enum {string}
       */
      resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
      /**
       * Start On
       * @description The day on which work for this goal begins, in YYYY-MM-DD format.
       * @default null
       */
      start_on: string | null;
      /**
       * Status
       * @description The current status of this goal.
       * @default null
       */
      status: string | null;
      /**
       * Team
       * @description The team associated with the goal (present when the workspace is an organization).
       * @default null
       */
      team: {
          [key: string]: unknown;
      } | null;
      /**
       * Time Period
       * @description The time period associated with the goal.
       * @default null
       */
      time_period: {
          [key: string]: unknown;
      } | null;
      /**
       * Workspace
       * @description The workspace associated with the goal.
       * @default null
       */
      workspace: {
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
 * Type of ASANA's ASANA_GET_GOALS tool input.
 */
type ASANA_GET_GOALS_INPUT = {
  /**
   * Archived
   * @description Filter to archived goals.
   * @default null
   */
  archived: boolean | null;
  /**
   * Is Workspace Level
   * @description Filter to goals at the workspace level.
   * @default null
   */
  is_workspace_level: boolean | null;
  /**
   * Limit
   * @description The number of results to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token for pagination.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Defines fields to return. Some requests support structured objects supporting cascades of multiple objects separated by commas; "data.gid" will return the gid field of the data object or "data.subtask.gid" will return the gid field of the subtask object.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Portfolio
   * @description Globally unique identifier for the portfolio.
   * @default null
   */
  portfolio: string | null;
  /**
   * Project
   * @description Globally unique identifier for the project.
   * @default null
   */
  project: string | null;
  /**
   * Team
   * @description Globally unique identifier for the team.
   * @default null
   */
  team: string | null;
  /**
   * Time Period
   * @description Globally unique identifier for the time period.
   * @default null
   */
  time_period: string | null;
  /**
   * Workspace
   * @description Globally unique identifier for the workspace or organization.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of ASANA's ASANA_GET_GOALS tool output.
 */
type ASANA_GET_GOALS_OUTPUT = {
  /**
   * Data
   * @description An array of goal objects.
   * @default null
   */
  data: {
      /**
       * Gid
       * @description Globally unique identifier of the goal.
       * @default null
       */
      gid: string | null;
      /**
       * Name
       * @description The name of the goal.
       * @default null
       */
      name: string | null;
      /**
       * GoalOwner
       * @description The owner of the goal.
       * @default null
       */
      owner: {
          /**
           * Gid
           * @description Globally unique identifier of the owner.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The owner's name.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * GoalWorkspace
       * @description The workspace associated with the goal.
       * @default null
       */
      workspace: {
          /**
           * Gid
           * @description Globally unique identifier of the workspace.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the workspace.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
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
 * Type of ASANA's ASANA_GET_GOAL_RELATIONSHIPS tool input.
 */
type ASANA_GET_GOAL_RELATIONSHIPS_INPUT = {
  /**
   * Goal Gid
   * @description The globally unique identifier for the goal.
   */
  goal_gid?: string;
  /**
   * Limit
   * @description The number of objects to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token for pagination.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Defines fields to return.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_GET_GOAL_RELATIONSHIPS tool output.
 */
type ASANA_GET_GOAL_RELATIONSHIPS_OUTPUT = {
  /**
   * Data
   * @description The list of goal relationships.
   */
  data?: {
      /**
       * Contribution Weight
       * @description The weight that the supporting resource has on the GID of the goal. This number is of a percentage.
       * @default null
       */
      contribution_weight: number | null;
      /**
       * CreatedBy
       * @description The user who created the goal relationship.
       * @default null
       */
      created_by: {
          /**
           * Gid
           * @description Globally unique identifier of the user.
           */
          gid: string;
          /**
           * Name
           * @description Name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The type of the user.
           * @enum {string}
           */
          resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
      } | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource.
       */
      gid: string;
      /**
       * Resource Subtype
       * @description The subtype of the resource. Will always be `goal_relationship`.
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The type of resource.
       * @enum {string}
       */
      resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
      /**
       * SupportedGoal
       * @description The goal that is supported by the `supporting_resource`.
       * @default null
       */
      supported_goal: {
          /**
           * Gid
           * @description Globally unique identifier of the supported goal.
           */
          gid: string;
          /**
           * Name
           * @description Name of the supported goal.
           * @default null
           */
          name: string | null;
          /**
           * SupportedGoalOwner
           * @description The owner of the supported goal.
           * @default null
           */
          owner: {
              /**
               * Gid
               * @description Globally unique identifier of the owner.
               */
              gid: string;
              /**
               * Name
               * @description Name of the owner.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The type of the owner.
               * @enum {string}
               */
              resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
          } | null;
          /**
           * Resource Type
           * @description The type of the supported goal.
           * @enum {string}
           */
          resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
      } | null;
      /**
       * SupportingResource
       * @description The resource that is supporting the goal.
       * @default null
       */
      supporting_resource: {
          /**
           * Gid
           * @description Globally unique identifier of the supporting resource.
           */
          gid: string;
          /**
           * Name
           * @description Name of the supporting resource.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The type of the supporting resource.
           * @enum {string}
           */
          resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
      } | null;
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
 * Type of ASANA's ASANA_GET_MEMBERSHIPS tool input.
 */
type ASANA_GET_MEMBERSHIPS_INPUT = {
  /**
   * Limit
   * @description The number of results to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Member
   * @description GID of the member (user or team) to filter memberships.
   * @default null
   */
  member: string | null;
  /**
   * Offset
   * @description Offset token for pagination.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Comma-separated list of fields to include in the response (e.g., "parent,member,access_level,parent.name,member.name").
   * @default null
   */
  opt_fields: string | null;
  /**
   * Parent
   * @description GID of the parent resource (e.g., project_gid, goal_gid, portfolio_gid, or custom_field_gid) to filter memberships.
   * @default null
   */
  parent: string | null;
};

/**
 * Type of ASANA's ASANA_GET_MEMBERSHIPS tool output.
 */
type ASANA_GET_MEMBERSHIPS_OUTPUT = {
  /**
   * Data
   * @description List of membership objects.
   */
  data?: {
      /**
       * Access Level
       * @description Access level of the member in the parent resource (e.g., "admin", "editor", "commenter", "viewer").
       * @default null
       */
      access_level: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the membership.
       */
      gid: string;
      /**
       * Member
       * @description The member associated with the membership.
       * @default null
       */
      member: {
          /**
           * Gid
           * @description Globally unique identifier of the member.
           */
          gid: string;
          /**
           * Name
           * @description Name of the member.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description Type of the member (e.g., "user" or "team").
           */
          resource_type: string;
      } | null;
      /**
       * Parent
       * @description The parent resource associated with the membership.
       * @default null
       */
      parent: {
          /**
           * Gid
           * @description Globally unique identifier of the parent resource.
           */
          gid: string;
          /**
           * Name
           * @description Name of the parent resource.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description Type of the parent resource (e.g., "project").
           */
          resource_type: string;
      } | null;
      /**
       * Resource Subtype
       * @description Subtype of the membership (e.g., "project_membership").
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description Type of the resource (e.g., "membership").
       */
      resource_type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Pagination data for the next page.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_MULTIPLE_PROJECTS tool input.
 */
type ASANA_GET_MULTIPLE_PROJECTS_INPUT = {
  /**
   * Archived
   * @description Filter projects by archived status: `True` for archived only, `False` for unarchived only.
   */
  archived?: boolean;
  /**
   * Limit
   * @description Number of projects to return per page (1-100).
   */
  limit?: number;
  /**
   * Offset
   * @description Offset token from a previous paginated request for retrieving the next page of results. Only use tokens from previous responses.
   */
  offset?: string;
  /**
   * Opt Fields
   * @description Comma-separated list of optional properties to include for richer project details, as the default response is compact. See `OptFieldsEnm0` for available fields.
   */
  opt_fields?: string[];
  /**
   * Opt Pretty
   * @description Return JSON in a 'pretty' format (indented, line breaks). For debugging only due to increased response size/time.
   */
  opt_pretty?: boolean;
  /**
   * Team
   * @description GID of the team to filter projects by.
   */
  team?: string;
  /**
   * Workspace
   * @description GID of the workspace or organization to filter projects by.
   */
  workspace?: string;
};

/**
 * Type of ASANA's ASANA_GET_MULTIPLE_PROJECTS tool output.
 */
type ASANA_GET_MULTIPLE_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description List of project records and pagination information, if applicable.
   */
  data?: {
      /**
       * Data
       * @default null
       */
      data: {
          /**
           * Gid
           * @description Globally unique identifier of the project.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description Name of the project.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description Base type of this resource, typically 'project'.
           * @default null
           */
          resource_type: string | null;
      }[] | null;
      /**
       * NextPage
       * @description Pagination information for the next page. Present only if `limit` was provided and more results exist; `null` otherwise.
       * @default null
       */
      next_page: {
          /**
           * Offset
           * @description Offset token for the next page of results; expires after a period.
           * @default null
           */
          offset: string | null;
          /**
           * Path
           * @description Relative path with query parameters for the next page.
           * @default null
           */
          path: string | null;
          /**
           * Uri
           * Format: uri
           * @description Full URI with query parameters for the next page.
           * @default null
           */
          uri: string | null;
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
 * Type of ASANA's ASANA_GET_MULTIPLE_TASKS tool input.
 */
type ASANA_GET_MULTIPLE_TASKS_INPUT = {
  /**
   * Assignee
   * @description Filter tasks by assignee's GID (user GID, 'me', or 'assignee.any=null' for unassigned). Note: If `assignee` is specified, `workspace` must also be provided.
   */
  assignee?: string;
  /**
   * Completed Since
   * @description Filter for tasks incomplete or completed since this ISO 8601 date-time.
   */
  completed_since?: string;
  /**
   * Limit
   * @description Number of task objects to return per page (must be between 1 and 100).
   */
  limit?: number;
  /**
   * Modified Since
   * @description Return tasks modified since the given ISO 8601 date-time. 'Modified' includes property changes, association changes (e.g., task added to project), assigning, renaming, completing, or adding stories.
   */
  modified_since?: string;
  /**
   * Offset
   * @description Offset token for pagination, from a previous paginated request. If omitted, returns the first page.
   */
  offset?: string;
  /**
   * Opt Fields
   * @description Optional fields to include for more detailed task information; see `OptFieldsEnm0` for available keys.
   */
  opt_fields?: string[];
  /**
   * Opt Pretty
   * @description Format JSON output with line breaking and indentation for readability (for debugging; may increase response time/size).
   */
  opt_pretty?: boolean;
  /**
   * Project
   * @description Project GID to filter tasks on.
   */
  project?: string;
  /**
   * Section
   * @description Section GID to filter tasks on. Tasks must be in a project that contains sections.
   */
  section?: string;
  /**
   * Workspace
   * @description Workspace GID to filter tasks on. Note: If `workspace` is specified, `assignee` must also be provided.
   */
  workspace?: string;
};

/**
 * Type of ASANA's ASANA_GET_MULTIPLE_TASKS tool output.
 */
type ASANA_GET_MULTIPLE_TASKS_OUTPUT = {
  /**
   * Data
   * @description The main data payload, containing the list of tasks and pagination information.
   */
  data?: {
      /**
       * Data
       * @description List of task objects.
       * @default null
       */
      data: {
          /**
           * CreatedBy
           * @description User who created this task. Populate by including `created_by` or `created_by.name` in `opt_fields`.
           * @default null
           */
          created_by: {
              /**
               * Gid
               * @description Globally unique identifier of the user.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description Type of resource, typically 'user'.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Gid
           * @description Globally unique identifier of the task.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the task.
           * @default null
           */
          name: string | null;
          /**
           * ResourceSubtype
           * @description Subtype of this resource (e.g., 'default_task', 'milestone'). 'Milestone' tasks cannot have a start_date.
           * @default null
           * @enum {string|null}
           */
          resource_subtype: "default_task" | "milestone" | "section" | "approval" | null;
          /**
           * Resource Type
           * @description Base type of this resource, typically 'task'.
           * @default null
           */
          resource_type: string | null;
      }[] | null;
      /**
       * NextPage
       * @description Pagination details for the next set of results, present if `limit` was used and more results exist; null otherwise. Offset tokens expire.
       * @default null
       */
      next_page: {
          /**
           * Offset
           * @description Offset token for the next page of results.
           * @default null
           */
          offset: string | null;
          /**
           * Path
           * @description Relative path (with query parameters) for the next page of results.
           * @default null
           */
          path: string | null;
          /**
           * Uri
           * Format: uri
           * @description Full URI for the next page of results.
           * @default null
           */
          uri: string | null;
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
 * Type of ASANA's ASANA_GET_MULTIPLE_USERS tool input.
 */
type ASANA_GET_MULTIPLE_USERS_INPUT = {
  /**
   * Limit
   * @description The maximum number of user objects to return per page (1-100).
   */
  limit?: number;
  /**
   * Offset
   * @description Opaque token for pagination to retrieve the subsequent page of results.
   */
  offset?: string;
  /**
   * Opt Fields
   * @description A list of optional field names to include in the response for each user. Available fields include 'email', 'name', 'photo' (and its specific sizes like 'photo.image_1024x1024'), 'workspaces', 'uri', and 'offset'.
   */
  opt_fields?: string[];
  /**
   * Opt Pretty
   * @description Return the response in a human-readable JSON format.
   */
  opt_pretty?: boolean;
  /**
   * Team
   * @description The GID of the Asana team. If specified, only includes users who are members of this team.
   */
  team?: string;
  /**
   * Workspace
   * @description The GID of the Asana workspace or organization. If specified, only includes users belonging to this workspace.
   */
  workspace?: string;
};

/**
 * Type of ASANA's ASANA_GET_MULTIPLE_USERS tool output.
 */
type ASANA_GET_MULTIPLE_USERS_OUTPUT = {
  /**
   * Data
   * @description API response payload. Contains `errors` on failure or user list on success.
   */
  data?: {
      /**
       * Errors
       * @default null
       */
      errors: {
          /**
           * Help
           * @description A link to Asana's developer documentation or other resources that can help in addressing and resolving the error.
           * @default null
           */
          help: string | null;
          /**
           * Message
           * @description A human-readable message providing specific details about the error that occurred.
           * @default null
           */
          message: string | null;
          /**
           * Phrase
           * @description For 500-type server errors, this field contains a unique error phrase. This phrase can be provided to Asana developer support to help them identify the exact server-side log entries for the problematic request.
           * @default null
           */
          phrase: string | null;
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
 * Type of ASANA's ASANA_GET_MULTIPLE_WORKSPACES tool input.
 */
type ASANA_GET_MULTIPLE_WORKSPACES_INPUT = {
  /**
   * Limit
   * @description The maximum number of workspace objects to return per page. Must be an integer between 1 and 100, inclusive.
   */
  limit?: number;
  /**
   * Offset
   * @description An opaque token used for pagination, obtained from the 'next_page' object in a previous response. If not provided, the first page of results is returned. Note: Pass only an offset token from a previous paginated request for this endpoint.
   */
  offset?: string;
  /**
   * Opt Fields
   * @description A comma-separated list of optional properties to include in the response. By default, only a compact representation of the resource is returned. Available options: 'email_domains', 'is_organization', 'name', 'offset', 'path', 'uri'.
   */
  opt_fields?: string[];
  /**
   * Opt Pretty
   * @description Set to true to receive the response in a human-readable JSON format with proper line breaking and indentation. Useful for debugging, but may increase response time and size.
   */
  opt_pretty?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_MULTIPLE_WORKSPACES tool output.
 */
type ASANA_GET_MULTIPLE_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Contains the list of workspaces and pagination information.
   */
  data?: {
      /**
       * Data
       * @description A list of workspace objects.
       * @default null
       */
      data: {
          /**
           * Gid
           * @description Globally unique identifier of the workspace, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the workspace.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource. For a workspace, this will be 'workspace'.
           * @default null
           */
          resource_type: string | null;
      }[] | null;
      /**
       * NextPage
       * @description Pagination information for retrieving the next set of results. This property is present only if a 'limit' query parameter was provided and more results exist. It contains an 'offset' token and 'path'/'uri' for the next page. If no more pages are available, 'next_page' will be null. Offset tokens expire after a certain period.
       * @default null
       */
      next_page: {
          /**
           * Offset
           * @description The opaque string token to use for fetching the next page of results.
           * @default null
           */
          offset: string | null;
          /**
           * Path
           * @description The relative API path to fetch the next page of results.
           * @default null
           */
          path: string | null;
          /**
           * Uri
           * Format: uri
           * @description The absolute URI to fetch the next page of results.
           * @default null
           */
          uri: string | null;
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
 * Type of ASANA's ASANA_GET_PORTFOLIO tool input.
 */
type ASANA_GET_PORTFOLIO_INPUT = {
  /**
   * Limit
   * @description Results per page. Max 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token for pagination.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Defines fields to return. Example: ["name", "color", "due_on"]
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Portfolio Gid
   * @description Globally unique identifier for the portfolio.
   */
  portfolio_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_PORTFOLIO tool output.
 */
type ASANA_GET_PORTFOLIO_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Color
       * @description The color associated with the portfolio. Example: "dark-pink"
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description Timestamp when the portfolio was created.
       */
      created_at: string;
      /**
       * UserReference
       * @description User who created the portfolio.
       * @default null
       */
      created_by: {
          /**
           * Gid
           * @description Globally unique identifier of the user.
           */
          gid: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Resource Type
           * @description The base type of this resource.
           */
          resource_type: string;
      } | null;
      /**
       * Custom Field Settings
       * @description Custom fields associated with the portfolio.
       * @default null
       */
      custom_field_settings: {
          /**
           * Gid
           * @description Globally unique identifier for the custom field setting.
           */
          gid: string;
          /**
           * Resource Type
           * @description The base type of this resource.
           */
          resource_type: string;
      }[] | null;
      /**
       * Due On
       * @description Due date of the portfolio. Example: "2024-12-31"
       * @default null
       */
      due_on: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the portfolio.
       */
      gid: string;
      /**
       * Members
       * @description Members of the portfolio.
       * @default null
       */
      members: {
          /**
           * Gid
           * @description Globally unique identifier of the user.
           */
          gid: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Resource Type
           * @description The base type of this resource.
           */
          resource_type: string;
      }[] | null;
      /**
       * Name
       * @description The name of the portfolio.
       */
      name: string;
      /**
       * UserReference
       * @description Owner of the portfolio.
       * @default null
       */
      owner: {
          /**
           * Gid
           * @description Globally unique identifier of the user.
           */
          gid: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * Resource Type
           * @description The base type of this resource.
           */
          resource_type: string;
      } | null;
      /**
       * Permalink Url
       * @description URL that points directly to the portfolio within Asana.
       * @default null
       */
      permalink_url: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
      /**
       * Start On
       * @description Start date of the portfolio. Example: "2024-01-01"
       * @default null
       */
      start_on: string | null;
      /**
       * WorkspaceReference
       * @description Workspace that the portfolio belongs to.
       * @default null
       */
      workspace: {
          /**
           * Gid
           * @description Globally unique identifier of the workspace.
           */
          gid: string;
          /**
           * Name
           * @description Name of the workspace.
           */
          name: string;
          /**
           * Resource Type
           * @description The base type of this resource.
           */
          resource_type: string;
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
 * Type of ASANA's ASANA_GET_PORTFOLIOS tool input.
 */
type ASANA_GET_PORTFOLIOS_INPUT = {
  /**
   * Limit
   * @description The number of objects to return per page. Must be between 1 and 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description An offset token for pagination.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Fields to include in the response. For example: ['name', 'color', 'owner'].
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Owner
   * @description The user GID who owns the portfolio. If specified, returns portfolios owned by this user.
   * @default null
   */
  owner: string | null;
  /**
   * Workspace
   * @description The workspace or organization GID to filter portfolios on.
   */
  workspace?: string;
};

/**
 * Type of ASANA's ASANA_GET_PORTFOLIOS tool output.
 */
type ASANA_GET_PORTFOLIOS_OUTPUT = {
  /**
   * Data
   * @description An array of portfolio objects.
   */
  data?: {
      /**
       * Color
       * @description The color associated with the portfolio.
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the portfolio was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Created By
       * @description The user who created the portfolio.
       * @default null
       */
      created_by: {
          [key: string]: unknown;
      } | null;
      /**
       * Current Status Update
       * @description The latest status update of the portfolio.
       * @default null
       */
      current_status_update: {
          [key: string]: unknown;
      } | null;
      /**
       * Custom Fields
       * @description Custom fields associated with the portfolio.
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Default Access Level
       * @description Default access level for new members.
       * @default null
       */
      default_access_level: string | null;
      /**
       * Due On
       * Format: date-time
       * @description Due date of the portfolio.
       * @default null
       */
      due_on: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the portfolio.
       */
      gid: string;
      /**
       * Members
       * @description Members of the portfolio.
       * @default null
       */
      members: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Name
       * @description The name of the portfolio.
       */
      name: string;
      /**
       * Owner
       * @description The owner of the portfolio.
       * @default null
       */
      owner: {
          [key: string]: unknown;
      } | null;
      /**
       * Permalink Url
       * @description URL pointing directly to the portfolio in Asana.
       * @default null
       */
      permalink_url: string | null;
      /**
       * Public
       * @description Indicates if the portfolio is public.
       * @default null
       */
      public: boolean | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
      /**
       * Start On
       * Format: date-time
       * @description Start date of the portfolio.
       * @default null
       */
      start_on: string | null;
      /**
       * Workspace
       * @description The workspace the portfolio belongs to.
       * @default null
       */
      workspace: {
          [key: string]: unknown;
      } | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Pagination data for the next page of results.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_PORTFOLIO_ITEMS tool input.
 */
type ASANA_GET_PORTFOLIO_ITEMS_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token to request next page.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Fields to include in response. Refer to Asana API documentation for possible values.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Portfolio Gid
   * @description Globally unique identifier for the portfolio.
   */
  portfolio_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_PORTFOLIO_ITEMS tool output.
 */
type ASANA_GET_PORTFOLIO_ITEMS_OUTPUT = {
  /**
   * Data
   * @description List of items in the portfolio.
   */
  data?: ({
      /**
       * Gid
       * @description Globally unique identifier for the item.
       */
      gid: string;
      /**
       * Name
       * @description Name of the item.
       */
      name: string;
      /**
       * Resource Type
       * @description The type of resource (project/portfolio).
       */
      resource_type: string;
  } & {
      [key: string]: unknown;
  })[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * NextPage
   * @description Pagination information for the next page.
   * @default null
   */
  next_page: {
      /**
       * Offset
       * @description Offset token for the next page of results.
       * @default null
       */
      offset: string | null;
      /**
       * Path
       * @description Path for the next page of results.
       * @default null
       */
      path: string | null;
      /**
       * Uri
       * @description URI for the next page of results.
       * @default null
       */
      uri: string | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_PORTFOLIO_MEMBERSHIPS tool input.
 */
type ASANA_GET_PORTFOLIO_MEMBERSHIPS_INPUT = {
  /**
   * Limit
   * @description Results per page. The number of objects to return per page. Must be between 1 and 100, inclusive.
   * @default 50
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token. An offset to paginate from. This can be retrieved from the ‘next_page’ field in the previous response.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Defines fields to return. Some requests return compact representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Portfolio
   * @description The GID of the portfolio to filter memberships on.
   * @default null
   */
  portfolio: string | null;
  /**
   * User
   * @description A string identifying a user. This can either be the string "me", an email, or the GID of a user.
   * @default null
   */
  user: string | null;
  /**
   * Workspace
   * @description The GID of the workspace to filter memberships on.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of ASANA's ASANA_GET_PORTFOLIO_MEMBERSHIPS tool output.
 */
type ASANA_GET_PORTFOLIO_MEMBERSHIPS_OUTPUT = {
  /**
   * Data
   * @default null
   */
  data: {
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * PortfolioMembershipPortfolio
       * @description The portfolio that the user is a member of.
       * @default null
       */
      portfolio: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the portfolio.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * PortfolioMembershipUser
       * @description The user who is a member of the portfolio.
       * @default null
       */
      user: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description *Read-only except when same user as requester*. The user’s name.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * PortfolioMembershipWorkspace
       * @description The workspace that the portfolio is in.
       * @default null
       */
      workspace: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the workspace.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
  }[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Provides the offset for the next page of results, if any.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_PROJECTS_FOR_TEAM tool input.
 */
type ASANA_GET_PROJECTS_FOR_TEAM_INPUT = {
  /**
   * Archived
   * @description Only return projects whose `archived` field takes on the value of this parameter.
   * @default null
   */
  archived: boolean | null;
  /**
   * Limit
   * @description Results per page. The number of objects to return per page. The value must be between 1 and 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token. An offset to the next page returned by the API.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Team Gid
   * @description Globally unique identifier for the team.
   */
  team_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_PROJECTS_FOR_TEAM tool output.
 */
type ASANA_GET_PROJECTS_FOR_TEAM_OUTPUT = {
  /**
   * Data
   * @description A list of project objects.
   */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Name
       * @description Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
       */
      name: string;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * NextPage
   * @description Pagination token for the next page of results.
   * @default null
   */
  next_page: {
      /**
       * Offset
       * @description Pagination offset for the request.
       */
      offset: string;
      /**
       * Path
       * @description A relative path containing the query parameters to fetch for next_page
       */
      path: string;
      /**
       * Uri
       * @description A full uri containing the query parameters to fetch for next_page
       */
      uri: string;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_PROJECT_BRIEF tool input.
 */
type ASANA_GET_PROJECT_BRIEF_INPUT = {
  /**
   * Opt Fields
   * @description This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Available options: text
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Project Brief Gid
   * @description Globally unique identifier for the project brief.
   */
  project_brief_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_PROJECT_BRIEF tool output.
 */
type ASANA_GET_PROJECT_BRIEF_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Html Text
       * @description HTML formatted text for the project brief.
       */
      html_text: string;
      /**
       * Permalink Url
       * @description A url that points directly to the object within Asana.
       */
      permalink_url: string;
      /**
       * Project
       * @description The project with which this project brief is associated.
       */
      project: {
          /**
           * Gid
           * @description Globally unique identifier of the project.
           */
          gid: string;
          /**
           * Name
           * @description The name of the project.
           */
          name: string;
          /**
           * Resource Type
           * @description The base type of this resource.
           */
          resource_type: string;
      };
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
      /**
       * Text
       * @description [Opt In]. The plain text of the project brief.
       * @default null
       */
      text: string | null;
      /**
       * Title
       * @description The title of the project brief.
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
 * Type of ASANA's ASANA_GET_PROJECT_MEMBERSHIPS tool input.
 */
type ASANA_GET_PROJECT_MEMBERSHIPS_INPUT = {
  /**
   * Limit
   * @description Results per page. The number of objects to return per page. The value must be between 1 and 100.
   * @default 20
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token. An offset to the next page returned by the API.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Defines fields to return. Some requests return compact representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. Adds a `pretty` query parameter to the request. Do not use in production.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Project
   * @description The GID of the project to filter memberships by.
   * @default null
   */
  project: string | null;
  /**
   * User
   * @description A string identifying a user. This can either be the string "me", an email, or the gid of a user.
   * @default null
   */
  user: string | null;
  /**
   * Workspace
   * @description The GID of the workspace to filter memberships by.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of ASANA's ASANA_GET_PROJECT_MEMBERSHIPS tool output.
 */
type ASANA_GET_PROJECT_MEMBERSHIPS_OUTPUT = {
  /**
   * Data
   * @description List of project memberships.
   * @default null
   */
  data: {
      /**
       * Access Level
       * @description Whether the member has admin, editor, or commenter abilities for the project.
       * @default null
       */
      access_level: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Member.Gid
       * @description The GID of the member.
       * @default null
       */
      "member.gid": string | null;
      /**
       * Member.Name
       * @description The name of the member.
       * @default null
       */
      "member.name": string | null;
      /**
       * Parent.Gid
       * @description The GID of the parent project.
       * @default null
       */
      "parent.gid": string | null;
      /**
       * Parent.Name
       * @description The name of the parent project.
       * @default null
       */
      "parent.name": string | null;
      /**
       * Project.Gid
       * @description The GID of the project.
       * @default null
       */
      "project.gid": string | null;
      /**
       * Project.Name
       * @description The name of the project.
       * @default null
       */
      "project.name": string | null;
      /**
       * ResourceType
       * @description The base type of this resource.
       * @default null
       * @enum {string|null}
       */
      resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period" | null;
      /**
       * User.Gid
       * @description The GID of the user.
       * @default null
       */
      "user.gid": string | null;
      /**
       * User.Name
       * @description The name of the user.
       * @default null
       */
      "user.name": string | null;
  }[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * NextPage
   * @description Pagination information for the next page of results.
   * @default null
   */
  next_page: {
      /**
       * Offset
       * @description Offset token for the next page of results.
       * @default null
       */
      offset: string | null;
      /**
       * Path
       * @description Path to the next page of results.
       * @default null
       */
      path: string | null;
      /**
       * Uri
       * @description URI for the next page of results.
       * @default null
       */
      uri: string | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_PROJECT_STATUS tool input.
 */
type ASANA_GET_PROJECT_STATUS_INPUT = {
  /**
   * Opt Fields
   * @description Fields to include in the response.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Project Status Gid
   * @description Globally unique identifier for the project status.
   */
  project_status_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_PROJECT_STATUS tool output.
 */
type ASANA_GET_PROJECT_STATUS_OUTPUT = {
  /**
   * ProjectStatusResponseData
   * @description The project status object.
   * @default null
   */
  data: {
      /**
       * UserCompact
       * @description The author of the project status.
       * @default null
       */
      author: {
          /**
           * Gid
           * @description Globally unique identifier of the user.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The user's name.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Color
       * @description The color associated with the status update. Possible values: blue, green, red, yellow.
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description The time at which this resource was created.
       * @default null
       */
      created_at: string | null;
      /**
       * UserCompact
       * @description The user who created the project status.
       * @default null
       */
      created_by: {
          /**
           * Gid
           * @description Globally unique identifier of the user.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The user's name.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Gid
       * @description Globally unique identifier of the project status.
       * @default null
       */
      gid: string | null;
      /**
       * Html Text
       * @description The text content of the status update with formatting as HTML.
       * @default null
       */
      html_text: string | null;
      /**
       * Modified At
       * @description The time at which this project status was last modified.
       * @default null
       */
      modified_at: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Text
       * @description The text content of the status update.
       * @default null
       */
      text: string | null;
      /**
       * Title
       * @description The title of the project status update.
       * @default null
       */
      title: string | null;
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
 * Type of ASANA's ASANA_GET_PROJECT_STATUS_UPDATES tool input.
 */
type ASANA_GET_PROJECT_STATUS_UPDATES_INPUT = {
  /**
   * Limit
   * @description Results per page. The number of objects to return per page. The value must be between 1 and 100.
   * @default 50
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token. An offset to paginate from. This can be retrieved from the 'next_page' field in a previous response.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Defines fields to return. Some requests return compact representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. Adds indentation and newlines to the response. This can be useful when debugging but increases the response size.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Project Gid
   * @description Globally unique identifier for the project.
   */
  project_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_PROJECT_STATUS_UPDATES tool output.
 */
type ASANA_GET_PROJECT_STATUS_UPDATES_OUTPUT = {
  /**
   * Data
   * @description The list of project status updates.
   * @default null
   */
  data: {
      /**
       * Created At
       * @description The time at which this resource was created.
       * @default null
       */
      created_at: string | null;
      /**
       * UserCompact
       * @description The user who created this status update.
       * @default null
       */
      created_by: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description *Read-only except when same user as requester*. The user’s name.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Html Text
       * @description [Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.
       * @default null
       */
      html_text: string | null;
      /**
       * ProjectCompact
       * @description The project this status update is associated with.
       * @default null
       */
      project: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Resource Subtype
       * @description The subtype of this resource. Different subtypes retain many of an object’s properties and functionality, but may extend the object with subtype-specific properties.
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Status Type
       * @description The type of status update.
       * @default null
       */
      status_type: string | null;
      /**
       * Text
       * @description The text content of the status update.
       * @default null
       */
      text: string | null;
      /**
       * Title
       * @description The title of the status update.
       * @default null
       */
      title: string | null;
  }[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * NextPage
   * @description Pagination information for the next page of results, if available.
   * @default null
   */
  next_page: {
      /**
       * Offset
       * @description Offset token for the next page of results.
       * @default null
       */
      offset: string | null;
      /**
       * Path
       * @description Path to the next page of results.
       * @default null
       */
      path: string | null;
      /**
       * Uri
       * @description URI for the next page of results.
       * @default null
       */
      uri: string | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_PROJECT_TEMPLATES tool input.
 */
type ASANA_GET_PROJECT_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Results per page. The number of objects to return per page. The value must be between 1 and 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description A comma-separated list of fields to include in the response. For example: name,description,owner,team,public
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Team Gid
   * @description The globally unique identifier for the team.
   * @default null
   */
  team_gid: string | null;
  /**
   * Workspace Gid
   * @description The globally unique identifier for the workspace.
   * @default null
   */
  workspace_gid: string | null;
};

/**
 * Type of ASANA's ASANA_GET_PROJECT_TEMPLATES tool output.
 */
type ASANA_GET_PROJECT_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description List of project templates.
   */
  data?: {
      /**
       * Description
       * @description The description of the project template.
       * @default null
       */
      description: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Html Description
       * @description The description of the project template with formatting as HTML.
       * @default null
       */
      html_description: string | null;
      /**
       * Name
       * @description Name of the project template.
       * @default null
       */
      name: string | null;
      /**
       * Owner
       * @description The user who is the owner of this project template. Compact user object.
       * @default null
       */
      owner: {
          [key: string]: unknown;
      } | null;
      /**
       * Public
       * @description True if the project template is public to its team.
       * @default null
       */
      public: boolean | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Team
       * @description The team that this project template belongs to. Compact team object.
       * @default null
       */
      team: {
          [key: string]: unknown;
      } | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Contains an offset token to retrieve the next page of results, if any.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_SECTION tool input.
 */
type ASANA_GET_SECTION_INPUT = {
  /**
   * Opt Fields
   * @description This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Section Gid
   * @description The globally unique identifier for the section.
   */
  section_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_SECTION tool output.
 */
type ASANA_GET_SECTION_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description The time at which this resource was created.
       */
      created_at: string;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Name
       * @description The name of the section (i.e. the text displayed as the section header).
       */
      name: string;
      /**
       * Project
       * @description A project object representing the project the section belongs to.
       */
      project: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           */
          gid: string;
          /**
           * Name
           * @description Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           */
          resource_type: string;
      };
      /**
       * Projects
       * @description _Deprecated - please use project instead_
       * @default null
       */
      projects: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           */
          gid: string;
          /**
           * Name
           * @description Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           */
          resource_type: string;
      }[] | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
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
 * Type of ASANA's ASANA_GET_SECTIONS_IN_PROJECT tool input.
 */
type ASANA_GET_SECTIONS_IN_PROJECT_INPUT = {
  /**
   * Limit
   * @description Number of sections to return per page (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Token for pagination to retrieve the next page of results.
   * @default null
   */
  offset: string | null;
  /**
   * Project Gid
   * @description Globally unique identifier (GID) of the project.
   */
  project_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_SECTIONS_IN_PROJECT tool output.
 */
type ASANA_GET_SECTIONS_IN_PROJECT_OUTPUT = {
  /**
   * Data
   * @description List of compact section records.
   */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier of the section.
       */
      gid: string;
      /**
       * Name
       * @description Name of the section (e.g., 'To Do', 'In Progress').
       */
      name: string;
      /**
       * Resource Type
       * @description Base type of this resource (e.g., 'section').
       */
      resource_type: string;
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
 * Type of ASANA's ASANA_GET_STATUS_UPDATES tool input.
 */
type ASANA_GET_STATUS_UPDATES_INPUT = {
  /**
   * Limit
   * @description The maximum number of items to return per page. The value must be between 1 and 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description An offset token returned from a previous query that had a `next_page` property. This is used for pagination.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description A comma-separated list of fields to include in the response. This allows customization of the returned data.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Parent
   * @description Globally unique identifier (GID) of the object (project, portfolio, or goal) from which to fetch status updates.
   */
  parent?: string;
};

/**
 * Type of ASANA's ASANA_GET_STATUS_UPDATES tool output.
 */
type ASANA_GET_STATUS_UPDATES_OUTPUT = {
  /**
   * Data
   * @description An array of status update objects.
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description The time at which this resource was created.
       */
      created_at: string;
      /**
       * Gid
       * @description Globally unique identifier of the status update.
       */
      gid: string;
      /**
       * Parent
       * @description The parent object to which the status update belongs.
       */
      parent: {
          /**
           * Gid
           * @description Globally unique identifier of the parent object.
           */
          gid: string;
          /**
           * Resource Type
           * @description The type of the parent object (e.g., project).
           */
          resource_type: string;
      };
      /**
       * Resource Subtype
       * @description The subtype of the status update, such as "project_status_update".
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The type of the resource, which is "status_update".
       */
      resource_type: string;
      /**
       * Status Type
       * @description The status type, indicating the state of the project (e.g., "on_track", "at_risk", "off_track", "on_hold").
       */
      status_type: string;
      /**
       * Text
       * @description The content of the status update.
       */
      text: string;
      /**
       * Title
       * @description The title of the status update.
       */
      title: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Pagination information for the next page of results.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_STORIES_FOR_TASK tool input.
 */
type ASANA_GET_STORIES_FOR_TASK_INPUT = {
  /**
   * Limit
   * @description Results per page. The number of results per page (between 1 and 100).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token for pagination.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description A comma-separated list of optional properties to include in the response.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Task Gid
   * @description The GID of the task to get stories from.
   */
  task_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_STORIES_FOR_TASK tool output.
 */
type ASANA_GET_STORIES_FOR_TASK_OUTPUT = {
  /**
   * Data
   * @description A list of story objects.
   */
  data?: {
      /**
       * Created At
       * @description The time at which this resource was created.
       * @default null
       */
      created_at: string | null;
      /**
       * UserCompact
       * @description The user who created the story.
       * @default null
       */
      created_by: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Resource Subtype
       * @description The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Text
       * @description The plain text of the comment to add. Cannot be used with html_text.
       * @default null
       */
      text: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * NextPage
   * @description Pagination information for the next page of results.
   * @default null
   */
  next_page: {
      /**
       * Offset
       * @description A token to pass to the next request to get the next page of results.
       * @default null
       */
      offset: string | null;
      /**
       * Path
       * @description The path to the next page of results.
       * @default null
       */
      path: string | null;
      /**
       * Uri
       * @description The URI to the next page of results.
       * @default null
       */
      uri: string | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_STORY tool input.
 */
type ASANA_GET_STORY_INPUT = {
  /**
   * Opt Fields
   * @description A comma-separated list of fields to include in the response.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides "pretty" output.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Story Gid
   * @description Globally unique identifier for the story.
   */
  story_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_STORY tool output.
 */
type ASANA_GET_STORY_OUTPUT = {
  /**
   * StoryResponse
   * @description The story object.
   * @default null
   */
  data: {
      /**
       * Created At
       * Format: date-time
       * @description The time at which this resource was created.
       * @default null
       */
      created_at: string | null;
      /**
       * UserCompact
       * @description The user who created the story.
       * @default null
       */
      created_by: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description *Read-only except when same user as requester*. The user’s name.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Text
       * @description [Opt In](/docs/input-output-options). The plain text of the story. If the story is complicated (not just a single text block), this may be an empty string.
       * @default null
       */
      text: string | null;
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
 * Type of ASANA's ASANA_GET_TAG tool input.
 */
type ASANA_GET_TAG_INPUT = {
  /**
   * Opt Fields
   * @description A comma-separated list of properties to include in the response.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description If true, provides "pretty" (i.e., human-readable) JSON output.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Tag Gid
   * @description Globally unique identifier for the tag.
   */
  tag_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_TAG tool output.
 */
type ASANA_GET_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description Color of the tag.
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description The time at which this resource was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Followers
       * @description An array of users following this tag.
       * @default null
       */
      followers: {
          /**
           * Gid
           * @description Globally unique identifier for the user.
           */
          gid: string;
          /**
           * Resource Type
           * @description The type of the object (e.g., "user").
           * @enum {string}
           */
          resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
      }[] | null;
      /**
       * Gid
       * @description Globally unique identifier for the tag.
       */
      gid: string;
      /**
       * Name
       * @description Name of the tag.
       */
      name: string;
      /**
       * Notes
       * @description Notes on the tag.
       * @default null
       */
      notes: string | null;
      /**
       * Permalink Url
       * @description A URL that can be used to link to this tag in the Asana web app.
       * @default null
       */
      permalink_url: string | null;
      /**
       * Resource Type
       * @description The type of the object (e.g., "tag").
       * @enum {string}
       */
      resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
      /**
       * WorkspaceGid
       * @description The workspace the tag belongs to.
       * @default null
       */
      workspace: {
          /**
           * Gid
           * @description Globally unique identifier for the workspace.
           */
          gid: string;
          /**
           * Name
           * @description The name of the workspace.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The type of the object (e.g., "workspace").
           * @enum {string}
           */
          resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
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
 * Type of ASANA's ASANA_GET_TAGS tool input.
 */
type ASANA_GET_TAGS_INPUT = {
  /**
   * Limit
   * @description Results per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token for pagination.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Comma-separated list of optional properties to include in the response.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Workspace
   * @description The GID of the workspace to filter tags on.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of ASANA's ASANA_GET_TAGS tool output.
 */
type ASANA_GET_TAGS_OUTPUT = {
  /**
   * Data
   * @description List of tags.
   */
  data?: {
      /**
       * Color
       * @description Color of the tag.
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description The time at which this resource was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Followers
       * @description Array of users following this tag.
       * @default null
       */
      followers: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Gid
       * @description Globally unique identifier of the tag.
       */
      gid: string;
      /**
       * Name
       * @description Name of the tag.
       */
      name: string;
      /**
       * Notes
       * @description Free-form textual information associated with the tag (i.e. its description).
       * @default null
       */
      notes: string | null;
      /**
       * Permalink Url
       * @description A url that points directly to the object within Asana.
       * @default null
       */
      permalink_url: string | null;
      /**
       * Resource Type
       * @description The type of object, always “tag”.
       */
      resource_type: string;
      /**
       * Workspace
       * @description The workspace the tag is associated with. This will resolve to null if the tag is global.
       * @default null
       */
      workspace: {
          [key: string]: unknown;
      } | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Pagination information for the next page of results.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_TASKS_FROM_A_PROJECT tool input.
 */
type ASANA_GET_TASKS_FROM_A_PROJECT_INPUT = {
  /**
   * Completed Since
   * @description Filters tasks: returns incomplete tasks or those completed after the specified ISO 8601 date-time (e.g., '2023-10-26T10:00:00Z') or 'now'.
   */
  completed_since?: string;
  /**
   * Limit
   * @description Maximum number of tasks to return per page (1-100).
   */
  limit?: number;
  /**
   * Offset
   * @description Opaque offset token for pagination from a previous request. If omitted, returns first page. Tokens may expire.
   */
  offset?: string;
  /**
   * Opt Fields
   * @description Optional fields for a detailed task representation (e.g., 'assignee', 'due_on'), as tasks are compact by default. Refer to Asana API docs for all field names.
   */
  opt_fields?: string[];
  /**
   * Opt Pretty
   * @description If true, returns human-readable JSON; useful for debugging but increases response size.
   */
  opt_pretty?: boolean;
  /**
   * Project Gid
   * @description Globally unique identifier (GID) of the project.
   */
  project_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_TASKS_FROM_A_PROJECT tool output.
 */
type ASANA_GET_TASKS_FROM_A_PROJECT_OUTPUT = {
  /**
   * Data
   * @description The structured response containing a list of tasks and pagination information.
   */
  data?: {
      /**
       * Data
       * @description A list of task objects found within the project.
       * @default null
       */
      data: {
          /**
           * CreatedBy
           * @description Details of the user who created the task. This is an "Opt-In" field, meaning it must be explicitly requested using the 'opt_fields' query parameter (e.g., by including 'created_by' or 'created_by.name') to be present in the response.
           * @default null
           */
          created_by: {
              /**
               * Gid
               * @description The globally unique identifier (GID) of the user.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description The resource type, typically 'user'.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Gid
           * @description The globally unique identifier (GID) of the task.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the task.
           * @default null
           */
          name: string | null;
          /**
           * ResourceSubtype
           * @description The subtype of this resource (e.g., 'default_task', 'milestone'). Different subtypes retain many of the same fields and behavior but may render differently in Asana or represent resources with different semantic meaning. The resource_subtype 'milestone' represents a single moment in time and cannot have a start_date.
           * @default null
           * @enum {string|null}
           */
          resource_subtype: "default_task" | "milestone" | "section" | "approval" | null;
          /**
           * Resource Type
           * @description The base type of this resource, typically 'task'.
           * @default null
           */
          resource_type: string | null;
      }[] | null;
      /**
       * NextPage
       * @description Pagination information for retrieving the next set of results. This field is present only if a 'limit' was specified in the request and more results are available. It includes an 'offset' token, a relative 'path', and a full 'uri' for the next page. If no more pages are available, this field will be null. Offset tokens have a limited lifespan.
       * @default null
       */
      next_page: {
          /**
           * Offset
           * @description An opaque offset token for fetching the next page of results.
           * @default null
           */
          offset: string | null;
          /**
           * Path
           * @description A relative URI path with query parameters for the next page of results.
           * @default null
           */
          path: string | null;
          /**
           * Uri
           * Format: uri
           * @description A full URI with query parameters for the next page of results.
           * @default null
           */
          uri: string | null;
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
 * Type of ASANA's ASANA_GET_TASK_ATTACHMENTS tool input.
 */
type ASANA_GET_TASK_ATTACHMENTS_INPUT = {
  /**
   * Limit
   * @description The number of results per page.
   * @default 50
   */
  limit: number | null;
  /**
   * Offset
   * @description An offset token, used for pagination to retrieve the next page of results.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description A comma-separated list of fields to include in the response for each attachment. Possible fields include: `created_at`, `download_url`, `host`, `name`, `parent`, `parent.name`, `permanent_url`, `resource_subtype`, `size`, `view_url`.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Parent Gid
   * @description The GID of the task, project, or project_brief to fetch attachments from.
   */
  parent_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_TASK_ATTACHMENTS tool output.
 */
type ASANA_GET_TASK_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description A list of attachment objects.
   */
  data?: {
      /**
       * Created At
       * @description The Coordinated Universal Time (UTC) date and time string indicating when the attachment was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Download Url
       * @description The URL to download the attachment. Null if the attachment is linked from an external service.
       * @default null
       */
      download_url: string | null;
      /**
       * Gid
       * @description The globally unique identifier for the attachment.
       */
      gid: string;
      /**
       * Host
       * @description The service hosting the attachment (e.g., "asana", "dropbox", "gdrive").
       * @default null
       */
      host: string | null;
      /**
       * Name
       * @description The name of the attachment file.
       */
      name: string;
      /**
       * AttachmentParent
       * @description An object representing the parent of this attachment.
       * @default null
       */
      parent: {
          /**
           * Gid
           * @description The GID of the parent object.
           */
          gid: string;
          /**
           * Name
           * @description The name of the parent object.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The resource type of the parent object.
           */
          resource_type: string;
      } | null;
      /**
       * Permanent Url
       * @description The URL that can be used to permanently reference the attachment. Null if the attachment is linked from an external service.
       * @default null
       */
      permanent_url: string | null;
      /**
       * Resource Subtype
       * @description The specific subtype of the attachment, if applicable (e.g., "asana", "dropbox", "gdrive").
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The type of the resource (e.g., "attachment").
       * @enum {string}
       */
      resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
      /**
       * Size
       * @description The size of the attachment in bytes. Only present for Asana-hosted attachments.
       * @default null
       */
      size: number | null;
      /**
       * View Url
       * @description The URL where the attachment can be viewed (e.g., a link to the Asana task, Dropbox file, etc.). Null if the attachment is linked from an external service that does not provide a view URL.
       * @default null
       */
      view_url: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * NextPage
   * @description Pagination information for the next page of results, if available.
   * @default null
   */
  next_page: {
      /**
       * Offset
       * @description The offset token for the next page of results.
       */
      offset: string;
      /**
       * Path
       * @description The path for the next page of results.
       */
      path: string;
      /**
       * Uri
       * @description The URI for the next page of results.
       */
      uri: string;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_TASK_SUBTASKS tool input.
 */
type ASANA_GET_TASK_SUBTASKS_INPUT = {
  /**
   * Limit
   * @description Results per page. The number of objects to return per page. The value must be between 1 and 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Defines fields to return. Some requests return compact representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Task Gid
   * @description The globally unique identifier for the task.
   */
  task_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_TASK_SUBTASKS tool output.
 */
type ASANA_GET_TASK_SUBTASKS_OUTPUT = {
  /**
   * Data
   * @description A list of subtasks.
   */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Name
       * @description Name of the task.
       * @default null
       */
      name: string | null;
      /**
       * Resource Subtype
       * @description The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * NextPage
   * @description Pagination information for the next page of results.
   * @default null
   */
  next_page: {
      /**
       * Offset
       * @description A string to pass to the next request to get the next page of results.
       * @default null
       */
      offset: string | null;
      /**
       * Path
       * @description A full URI to request the next page of results.
       * @default null
       */
      path: string | null;
      /**
       * Uri
       * @description A full URI to request the next page of results.
       * @default null
       */
      uri: string | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_TASK_TEMPLATES tool input.
 */
type ASANA_GET_TASK_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description The number of objects to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token for pagination.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Comma-separated list of fields to include in the response. For example: 'name,created_at,created_by'.
   * @default null
   */
  opt_fields: string | null;
  /**
   * Project Gid
   * @description Globally unique identifier for the project. One of project or workspace must be specified.
   * @default null
   */
  project_gid: string | null;
  /**
   * Workspace Gid
   * @description Globally unique identifier for the workspace. One of project or workspace must be specified.
   * @default null
   */
  workspace_gid: string | null;
};

/**
 * Type of ASANA's ASANA_GET_TASK_TEMPLATES tool output.
 */
type ASANA_GET_TASK_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description List of task template objects.
   */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier of the task template.
       */
      gid: string;
      /**
       * Name
       * @description Name of the task template.
       * @default null
       */
      name: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * NextPage
   * @description Pagination details for the next page of results.
   * @default null
   */
  next_page: {
      /**
       * Offset
       * @description Offset token for the next page of results.
       * @default null
       */
      offset: string | null;
      /**
       * Path
       * @description Path for the next page of results.
       * @default null
       */
      path: string | null;
      /**
       * Uri
       * @description URI for the next page of results.
       * @default null
       */
      uri: string | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_TEAM tool input.
 */
type ASANA_GET_TEAM_INPUT = {
  /**
   * Opt Fields
   * @description Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths. The id of included objects will always be returned, regardless of the field options.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Team Gid
   * @description Globally unique identifier for the team.
   */
  team_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_TEAM tool output.
 */
type ASANA_GET_TEAM_OUTPUT = {
  /**
   * GetTeamResponseData
   * @default null
   */
  data: {
      /**
       * Description
       * @description The description of the team.
       * @default null
       */
      description: string | null;
      /**
       * Edit Team Name Or Description Access Level
       * @description Controls who can edit team name and description
       * @default null
       * @enum {string|null}
       */
      edit_team_name_or_description_access_level: "all_team_members" | "only_team_admins" | null;
      /**
       * Edit Team Visibility Or Trash Team Access Level
       * @description Controls who can edit team visibility and trash teams
       * @default null
       * @enum {string|null}
       */
      edit_team_visibility_or_trash_team_access_level: "all_team_members" | "only_team_admins" | null;
      /**
       * Endorsed
       * @description Whether the team has been endorsed
       * @default null
       */
      endorsed: boolean | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Guest Invite Management Access Level
       * @description Controls who can accept or deny guest invites for a given team
       * @default null
       * @enum {string|null}
       */
      guest_invite_management_access_level: "all_team_members" | "only_team_admins" | null;
      /**
       * Html Description
       * @description The description of the team with formatting as HTML.
       * @default null
       */
      html_description: string | null;
      /**
       * Join Request Management Access Level
       * @description Controls who can accept or deny join team requests for a Membership by Request team
       * @default null
       * @enum {string|null}
       */
      join_request_management_access_level: "all_team_members" | "only_team_admins" | null;
      /**
       * Member Invite Management Access Level
       * @description Controls who can accept or deny member invites for a given team
       * @default null
       * @enum {string|null}
       */
      member_invite_management_access_level: "all_team_members" | "only_team_admins" | null;
      /**
       * Name
       * @description The name of the team.
       * @default null
       */
      name: string | null;
      /**
       * AsanaWorkspaceCompact
       * @description The organization/workspace the team belongs to.
       * @default null
       */
      organization: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the object.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * Permalink Url
       * @description A URL that points directly to the object within Asana.
       * @default null
       */
      permalink_url: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Team Content Management Access Level
       * @description Controls who can create and share content with the team
       * @default null
       * @enum {string|null}
       */
      team_content_management_access_level: "no_restriction" | "only_team_admins" | null;
      /**
       * Team Member Removal Access Level
       * @description Controls who can remove team members
       * @default null
       * @enum {string|null}
       */
      team_member_removal_access_level: "all_team_members" | "only_team_admins" | null;
      /**
       * Visibility
       * @description The visibility of the team to users in the same organization.
       * @default null
       * @enum {string|null}
       */
      visibility: "secret" | "request_to_join" | "public" | null;
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
 * Type of ASANA's ASANA_GET_TEAMS_IN_WORKSPACE tool input.
 */
type ASANA_GET_TEAMS_IN_WORKSPACE_INPUT = {
  /**
   * Limit
   * @description Results per page. The value must be between 1 and 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token from a previous API response for pagination to retrieve the next page of results. If an offset is not passed in, the API will return the first page of results.
   * @default null
   */
  offset: string | null;
  /**
   * Workspace Gid
   * @description The Global ID (GID) of the workspace to get teams from.
   */
  workspace_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_TEAMS_IN_WORKSPACE tool output.
 */
type ASANA_GET_TEAMS_IN_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Array of compact team objects visible to the authorized user in the workspace.
   */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Name
       * @description The name of the team.
       */
      name: string;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
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
 * Type of ASANA's ASANA_GET_TEAM_MEMBERSHIPS tool input.
 */
type ASANA_GET_TEAM_MEMBERSHIPS_INPUT = {
  /**
   * Limit
   * @description Results per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Defines fields to return.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Adds indentation to JSON response.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Team
   * @description The team to filter memberships to.
   * @default null
   */
  team: string | null;
  /**
   * User
   * @description A user gid to filter memberships to.
   * @default null
   */
  user: string | null;
  /**
   * Workspace
   * @description The workspace to filter memberships to.
   * @default null
   */
  workspace: string | null;
};

/**
 * Type of ASANA's ASANA_GET_TEAM_MEMBERSHIPS tool output.
 */
type ASANA_GET_TEAM_MEMBERSHIPS_OUTPUT = {
  /**
   * Data
   * @description List of team memberships.
   * @default null
   */
  data: {
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Is Guest
       * @description Describes if the user is a guest in the team.
       * @default null
       */
      is_guest: boolean | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * TeamCompact
       * @description The team the user is a member of.
       * @default null
       */
      team: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the team.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
      /**
       * UserCompact
       * @description The user who is a member of the team.
       * @default null
       */
      user: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the user.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
      } | null;
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
 * Type of ASANA's ASANA_GET_TIME_PERIODS tool input.
 */
type ASANA_GET_TIME_PERIODS_INPUT = {
  /**
   * End On
   * @description The last day of the time period, YYYY-MM-DD.
   * @default null
   */
  end_on: string | null;
  /**
   * Limit
   * @description Results per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token for pagination.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description A comma-separated list of fields to include in the response.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides the response in "pretty" output.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Start On
   * @description The first day of the time period, YYYY-MM-DD.
   * @default null
   */
  start_on: string | null;
  /**
   * Workspace Gid
   * @description Globally unique identifier for the workspace.
   */
  workspace_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_TIME_PERIODS tool output.
 */
type ASANA_GET_TIME_PERIODS_OUTPUT = {
  /**
   * Data
   * @description List of time periods.
   */
  data?: {
      /**
       * Display Name
       * @description A string representing the cadence code and the fiscal year.
       * @default null
       */
      display_name: string | null;
      /**
       * End On
       * @description The localized end date of the time period in YYYY-MM-DD format.
       * @default null
       */
      end_on: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * TimePeriodParent
       * @description A compact representation of the parent time period.
       * @default null
       */
      parent: {
          /**
           * Display Name
           * @description A string representing the cadence code and the fiscal year.
           * @default null
           */
          display_name: string | null;
          /**
           * End On
           * @description The localized end date of the time period in YYYY-MM-DD format.
           * @default null
           */
          end_on: string | null;
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * PeriodEnum
           * @description The cadence and index of the time period.
           * @default null
           * @enum {string|null}
           */
          period: "FY" | "H1" | "H2" | "Q1" | "Q2" | "Q3" | "Q4" | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
          /**
           * Start On
           * @description The localized start date of the time period in YYYY-MM-DD format.
           * @default null
           */
          start_on: string | null;
      } | null;
      /**
       * PeriodEnum
       * @description The cadence and index of the time period.
       * @default null
       * @enum {string|null}
       */
      period: "FY" | "H1" | "H2" | "Q1" | "Q2" | "Q3" | "Q4" | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Start On
       * @description The localized start date of the time period in YYYY-MM-DD format.
       * @default null
       */
      start_on: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Pagination data for the next page.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_TYPEAHEAD_OBJECTS tool input.
 */
type ASANA_GET_TYPEAHEAD_OBJECTS_INPUT = {
  /**
   * Count
   * @description The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 100.
   * @default null
   */
  count: number | null;
  /**
   * Opt Fields
   * @description This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Query
   * @description The string that will be used to search for relevant objects. If an empty string is passed in, the API will return results.
   * @default null
   */
  query: string | null;
  /**
   * Resource Type
   * @description The type of values the typeahead should return.
   * @default user
   * @enum {string}
   */
  resource_type: "custom_field" | "goal" | "project" | "project_template" | "portfolio" | "tag" | "task" | "team" | "user";
  /**
   * Workspace Gid
   * @description Globally unique identifier for the workspace or organization.
   */
  workspace_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_TYPEAHEAD_OBJECTS tool output.
 */
type ASANA_GET_TYPEAHEAD_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description An array of objects found by the typeahead search.
   */
  data?: ({
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Name
       * @description The name of the object.
       * @default null
       */
      name: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
  } & {
      [key: string]: unknown;
  })[];
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
 * Type of ASANA's ASANA_GET_USER tool input.
 */
type ASANA_GET_USER_INPUT = {
  /**
   * Opt Fields
   * @description This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * User Gid
   * @description A string identifying a user. This can either be the string "me", an email, or the gid of a user.
   */
  user_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_USER tool output.
 */
type ASANA_GET_USER_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Email
       * @description The user's email address.
       * @default null
       */
      email: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the user.
       * @default null
       */
      gid: string | null;
      /**
       * Name
       * @description The user's full name.
       * @default null
       */
      name: string | null;
      /**
       * Photo
       * @description The user's photo.
       * @default null
       */
      photo: {
          /**
           * Image 1024X1024
           * @description URL for 1024x1024 photo.
           * @default null
           */
          image_1024x1024: string | null;
          /**
           * Image 128X128
           * @description URL for 128x128 photo.
           * @default null
           */
          image_128x128: string | null;
          /**
           * Image 21X21
           * @description URL for 21x21 photo.
           * @default null
           */
          image_21x21: string | null;
          /**
           * Image 27X27
           * @description URL for 27x27 photo.
           * @default null
           */
          image_27x27: string | null;
          /**
           * Image 36X36
           * @description URL for 36x36 photo.
           * @default null
           */
          image_36x36: string | null;
          /**
           * Image 60X60
           * @description URL for 60x60 photo.
           * @default null
           */
          image_60x60: string | null;
      } | null;
      /**
       * Resource Type
       * @description The type of the resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * Workspaces
       * @description Workspaces and organizations this user may access.
       * @default null
       */
      workspaces: {
          /**
           * Gid
           * @description Globally unique identifier of the workspace.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the workspace.
           * @default null
           */
          name: string | null;
          /**
           * Resource Type
           * @description The type of the workspace.
           * @default null
           */
          resource_type: string | null;
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
 * Type of ASANA's ASANA_GET_USERS_FOR_TEAM tool input.
 */
type ASANA_GET_USERS_FOR_TEAM_INPUT = {
  /**
   * Limit
   * @description Results per page. The maximum is 2000.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Team Gid
   * @description Globally unique identifier for the team.
   */
  team_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_USERS_FOR_TEAM tool output.
 */
type ASANA_GET_USERS_FOR_TEAM_OUTPUT = {
  /**
   * Data
   * @description A list of compact user records.
   */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Name
       * @description The user's name.
       */
      name: string;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Contains an offset token to retrieve the next page of results, if any.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_USERS_FOR_WORKSPACE tool input.
 */
type ASANA_GET_USERS_FOR_WORKSPACE_INPUT = {
  /**
   * Limit
   * @description Results per page. The number of objects to return per page. The value must be between 1 and 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token for pagination requests.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Workspace Gid
   * @description Globally unique identifier for the workspace or organization.
   */
  workspace_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_USERS_FOR_WORKSPACE tool output.
 */
type ASANA_GET_USERS_FOR_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description A list of users in the workspace.
   */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Name
       * @description *Read-only except when same user as requester*. The user’s name.
       */
      name: string;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @enum {string}
       */
      resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Pagination data for the next page of results.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_WORKSPACE tool input.
 */
type ASANA_GET_WORKSPACE_INPUT = {
  /**
   * Opt Fields
   * @description This results in a compact response, suitable for data-transfer sensitive applications. Valid values are: gid, name, resource_type, email_domains, is_organization.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. Formatting dates and times as human-readable strings, numbers as strings, and including newlines and indentation. The default value is false.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Workspace Gid
   * @description The globally unique identifier of the workspace.
   */
  workspace_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_WORKSPACE tool output.
 */
type ASANA_GET_WORKSPACE_OUTPUT = {
  /**
   * WorkspaceResponseData
   * @description The workspace object.
   * @default null
   */
  data: {
      /**
       * Email Domains
       * @description The email domains that are associated with this workspace.
       * @default null
       */
      email_domains: string[] | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Is Organization
       * @description Whether the workspace is an organization.
       * @default null
       */
      is_organization: boolean | null;
      /**
       * Name
       * @description The name of the workspace.
       * @default null
       */
      name: string | null;
      /**
       * Resource Type
       * @description The resource type of this resource. The resource type for a workspace is always workspace.
       * @default null
       */
      resource_type: string | null;
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
 * Type of ASANA's ASANA_GET_WORKSPACE_MEMBERSHIPS tool input.
 */
type ASANA_GET_WORKSPACE_MEMBERSHIPS_INPUT = {
  /**
   * Limit
   * @description Results per page. The number of objects to return per page. The value must be between 1 and 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Fields
   * @description Defines fields to return. Some requests return compact representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should return for each object. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * User
   * @description A string identifying a user. This can either be the string "me", an email, or the gid of a user.
   * @default null
   */
  user: string | null;
  /**
   * Workspace Gid
   * @description Globally unique identifier for the workspace.
   */
  workspace_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_WORKSPACE_MEMBERSHIPS tool output.
 */
type ASANA_GET_WORKSPACE_MEMBERSHIPS_OUTPUT = {
  /**
   * Data
   * @description List of workspace memberships.
   * @default null
   */
  data: {
      /**
       * Created At
       * @description The time at which this resource was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * Is Active
       * @description Reflects if the user has been deactivated from the workspace.
       * @default null
       */
      is_active: boolean | null;
      /**
       * Is Admin
       * @description Reflects if the user is an admin of the workspace.
       * @default null
       */
      is_admin: boolean | null;
      /**
       * Is Guest
       * @description Reflects if the user is a guest of the workspace.
       * @default null
       */
      is_guest: boolean | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       * @default null
       */
      resource_type: string | null;
      /**
       * User
       * @description The user object in compact form.
       * @default null
       */
      user: {
          [key: string]: unknown;
      } | null;
      /**
       * UserTaskList
       * @description User's task list.
       * @default null
       */
      user_task_list: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description The name of the user task list.
           * @default null
           */
          name: string | null;
          /**
           * Owner
           * @description The owner of the user task list.
           * @default null
           */
          owner: {
              [key: string]: unknown;
          } | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
          /**
           * Workspace
           * @description The workspace of the user task list.
           * @default null
           */
          workspace: {
              [key: string]: unknown;
          } | null;
      } | null;
      /**
       * VacationDates
       * @description Contains keys start_on and end_on for the user's vacation dates in this workspace, if set.
       * @default null
       */
      vacation_dates: {
          /**
           * End On
           * @description The day on which the user's vacation in this workspace ends.
           * @default null
           */
          end_on: string | null;
          /**
           * Start On
           * @description The day on which the user's vacation in this workspace starts.
           * @default null
           */
          start_on: string | null;
      } | null;
      /**
       * Workspace
       * @description The workspace object in compact form.
       * @default null
       */
      workspace: {
          [key: string]: unknown;
      } | null;
  }[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Pagination data for the next page.
   * @default null
   */
  next_page: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_GET_WORKSPACE_PROJECTS tool input.
 */
type ASANA_GET_WORKSPACE_PROJECTS_INPUT = {
  /**
   * Limit
   * @description Number of objects to return per page (max 100).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset token for pagination.
   * @default null
   */
  offset: string | null;
  /**
   * Opt Expand
   * @description Fields to expand in the response.
   * @default null
   */
  opt_expand: string[] | null;
  /**
   * Opt Fields
   * @description Fields to include in the response.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Workspace Gid
   * @description Globally unique identifier for the workspace.
   */
  workspace_gid?: string;
};

/**
 * Type of ASANA's ASANA_GET_WORKSPACE_PROJECTS tool output.
 */
type ASANA_GET_WORKSPACE_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description List of compact project objects.
   */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier of the project.
       */
      gid: string;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Resource Type
       * @description Type of resource (project).
       */
      resource_type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * NextPage
   * @description Pagination information if more results available.
   * @default null
   */
  next_page: {
      /**
       * Offset
       * @description Offset token for the next page.
       */
      offset: string;
      /**
       * Path
       * @description Path for the next page request.
       */
      path: string;
      /**
       * Uri
       * @description Full URI for the next page request.
       */
      uri: string;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ASANA's ASANA_INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD tool input.
 */
type ASANA_INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Gid
   * @description Globally unique identifier for the custom field.
   */
  custom_field_gid?: string;
  /**
   * Data
   * @description The data for the enum option to be inserted or reordered.
   */
  data?: {
      /**
       * Color
       * @description The color for the new enum option (e.g., "blue", "red"). Used if creating a new option.
       * @default null
       */
      color: string | null;
      /**
       * Enabled
       * @description Whether the new enum option is enabled. Defaults to true. Used if creating a new option.
       * @default true
       */
      enabled: boolean | null;
      /**
       * Enum Option
       * @description The GID of an existing enum option to move. Required if 'name' is not provided (i.e., if reordering an existing option).
       * @default null
       */
      enum_option: string | null;
      /**
       * Insert After
       * @description GID of an existing enum option. The option specified by 'name' or 'enum_option' will be placed after this GID. One of 'insert_before' or 'insert_after' must be provided.
       * @default null
       */
      insert_after: string | null;
      /**
       * Insert Before
       * @description GID of an existing enum option. The option specified by 'name' or 'enum_option' will be placed before this GID. One of 'insert_before' or 'insert_after' must be provided.
       * @default null
       */
      insert_before: string | null;
      /**
       * Name
       * @description The name of the new enum option. Required if 'enum_option' (GID of existing option) is not provided.
       * @default null
       */
      name: string | null;
  };
  /**
   * Opt Fields
   * @description This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default false
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD tool output.
 */
type ASANA_INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description The enum option that was created or reordered.
   */
  data?: {
      /**
       * Color
       * @description The color of the enum option.
       * @default null
       */
      color: string | null;
      /**
       * Enabled
       * @description Whether or not the enum option is a selectable value.
       * @default null
       */
      enabled: boolean | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource.
       */
      gid: string;
      /**
       * Name
       * @description The name of the enum option.
       * @default null
       */
      name: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
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
 * Type of ASANA's ASANA_REMOVE_FOLLOWER_FROM_TASK tool input.
 */
type ASANA_REMOVE_FOLLOWER_FROM_TASK_INPUT = {
  /**
   * Followers
   * @description An array of user GIDs to remove as followers.
   */
  followers?: string[];
  /**
   * Task Gid
   * @description The globally unique identifier for the task.
   */
  task_gid?: string;
};

/**
 * Type of ASANA's ASANA_REMOVE_FOLLOWER_FROM_TASK tool output.
 */
type ASANA_REMOVE_FOLLOWER_FROM_TASK_OUTPUT = {
  /**
   * Data
   * @description The updated task record.
   */
  data?: {
      /**
       * Gid
       * @description Globally unique identifier for the task.
       */
      gid: string;
      /**
       * Resource Type
       * @description The resource type, e.g., 'task'.
       * @enum {string}
       */
      resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period";
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
 * Type of ASANA's ASANA_SUBMIT_PARALLEL_REQUESTS tool input.
 */
type ASANA_SUBMIT_PARALLEL_REQUESTS_INPUT = {
  /**
   * Data
   * @description Contains the list of actions to be performed in parallel.
   */
  data?: {
      /**
       * Actions
       * @description A list of action objects, each representing a standard request to an existing Asana API endpoint.
       */
      actions: {
          /**
           * Data
           * @description The request payload for the action. This should be a JSON object.
           * @default null
           */
          data: {
              [key: string]: unknown;
          } | null;
          /**
           * Method
           * @description The HTTP method for the action (e.g., get, post, put, delete).
           * @enum {string}
           */
          method: "get" | "post" | "put" | "delete" | "patch" | "head" | "options";
          /**
           * Options
           * @description Additional options such as fields to return or pagination parameters. Example: {"opt_fields": "name,assignee"}
           * @default null
           */
          options: {
              [key: string]: unknown;
          } | null;
          /**
           * Relative Path
           * @description The endpoint path relative to the API base URL. Example: /tasks/123
           */
          relative_path: string;
      }[];
  };
};

/**
 * Type of ASANA's ASANA_SUBMIT_PARALLEL_REQUESTS tool output.
 */
type ASANA_SUBMIT_PARALLEL_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description A list of result objects corresponding to each action in the request.
   * @default null
   */
  data: {
      /**
       * Body
       * @description The JSON body returned by the invoked endpoint.
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Headers
       * @description A map of HTTP headers specific to this result.
       * @default null
       */
      headers: {
          [key: string]: string;
      } | null;
      /**
       * Status Code
       * @description The HTTP status code returned by the invoked endpoint.
       */
      status_code: number;
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
 * Type of ASANA's ASANA_UPDATE_ALLOCATION tool input.
 */
type ASANA_UPDATE_ALLOCATION_INPUT = {
  /**
   * Allocation Gid
   * @description Globally unique identifier for the allocation to be updated.
   */
  allocation_gid?: string;
  /**
   * Data
   * @description The data to update the allocation with.
   */
  data?: {
      /**
       * Assignee
       * @description The GID of the user or placeholder to assign to the allocation.
       * @default null
       */
      assignee: string | null;
      /**
       * Effort
       * @description The amount of time associated with the allocation.
       * @default null
       */
      effort: {
          /**
           * Unit
           * @description The unit of the effort, either 'percent' or 'hours'.
           * @enum {string}
           */
          unit: "percent" | "hours";
          /**
           * Value
           * @description The value of the effort, e.g., 20 for 20% or 5 for 5 hours.
           */
          value: number;
      } | null;
      /**
       * End Date
       * Format: date
       * @description The new localized day on which the allocation ends (YYYY-MM-DD).
       * @default null
       */
      end_date: string | null;
      /**
       * Resource Subtype
       * @description The subtype of the allocation (e.g., "task", "project").
       * @default null
       */
      resource_subtype: string | null;
      /**
       * Start Date
       * Format: date
       * @description The new localized day on which the allocation starts (YYYY-MM-DD).
       * @default null
       */
      start_date: string | null;
  };
  /**
   * Opt Fields
   * @description A comma-separated list of fields to include in the response.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description If true, the response will be in a human-readable format.
   * @default null
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_UPDATE_ALLOCATION tool output.
 */
type ASANA_UPDATE_ALLOCATION_OUTPUT = {
  /**
   * Data
   * @description The full updated allocation record.
   */
  data?: {
      /**
       * UserCompact
       * @description The user or placeholder assigned to the allocation.
       * @default null
       */
      assignee: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description *Read-only except when same user as requester*. The user’s name.
           * @default null
           */
          name: string | null;
          /**
           * ResourceType
           * @description The base type of this resource.
           * @default null
           * @enum {string|null}
           */
          resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period" | null;
      } | null;
      /**
       * UserCompact
       * @description The user who created the allocation.
       * @default null
       */
      created_by: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description *Read-only except when same user as requester*. The user’s name.
           * @default null
           */
          name: string | null;
          /**
           * ResourceType
           * @description The base type of this resource.
           * @default null
           * @enum {string|null}
           */
          resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period" | null;
      } | null;
      /**
       * Effort
       * @description The amount of time associated with the allocation, represented as a percentage or number of hours
       * @default null
       */
      effort: {
          /**
           * Unit
           * @description The unit of the effort, either 'percent' or 'hours'.
           * @enum {string}
           */
          unit: "percent" | "hours";
          /**
           * Value
           * @description The value of the effort, e.g., 20 for 20% or 5 for 5 hours.
           */
          value: number;
      } | null;
      /**
       * End Date
       * Format: date
       * @description The localized day on which the allocation ends.
       * @default null
       */
      end_date: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       * @default null
       */
      gid: string | null;
      /**
       * ProjectCompact
       * @description The project the allocation is on.
       * @default null
       */
      parent: {
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Name
           * @description Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
           * @default null
           */
          name: string | null;
          /**
           * ResourceType
           * @description The base type of this resource.
           * @default null
           * @enum {string|null}
           */
          resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period" | null;
      } | null;
      /**
       * Resource Subtype
       * @description The subtype of the allocation.
       * @default null
       */
      resource_subtype: string | null;
      /**
       * ResourceType
       * @description The base type of this resource.
       * @default null
       * @enum {string|null}
       */
      resource_type: "user" | "project" | "task" | "section" | "tag" | "custom_field" | "workspace" | "team" | "portfolio" | "project_brief" | "project_template" | "goal" | "attachment" | "organization_export" | "project_status" | "user_task_list" | "custom_field_setting" | "story" | "webhook" | "event" | "workspace_membership" | "project_membership" | "team_membership" | "time_period" | null;
      /**
       * Start Date
       * Format: date
       * @description The localized day on which the allocation starts.
       * @default null
       */
      start_date: string | null;
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
 * Type of ASANA's ASANA_UPDATE_A_TASK tool input.
 */
type ASANA_UPDATE_A_TASK_INPUT = {
  /**
   * Data
   * @description An object containing the fields of the task to update.
   */
  data?: {
      /**
       * ApprovalStatus
       * @description Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set `completed` to true, this field will be set to `approved`.
       * @default null
       * @enum {string|null}
       */
      approval_status: "pending" | "approved" | "rejected" | "changes_requested" | null;
      /**
       * Assignee
       * @description The GID of the user to assign the task to. Can be the string 'me' to assign to the authenticated user, or an email address.
       * @default null
       */
      assignee: string | null;
      /**
       * Assignee Section
       * @description The GID of the assignee's section in their 'My tasks' list where the task should be placed. This is applicable only if the task is assigned to a user and the section exists and is visible in their 'My tasks' list. This field is returned in the response only if the request is made by the task's assignee.
       * @default null
       */
      assignee_section: string | null;
      /**
       * AssigneeStatus
       * @description Deprecated: Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to `inbox` or `upcoming` inserts it at the top of the section, while other options will insert at the bottom.
       * @default upcoming
       * @enum {string|null}
       */
      assignee_status: "today" | "upcoming" | "later" | "new" | "inbox" | null;
      /**
       * Completed
       * @description True if the task is currently marked complete, false if not.
       * @default false
       */
      completed: boolean;
      /**
       * Custom Fields
       * @description An object where each key is the GID of a custom field and its corresponding value is the new value for that custom field. The value can be an enum GID, string, number, object, or array, depending on the custom field type. Refer to Asana's custom fields documentation for details.
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      } | null;
      /**
       * Custom Type
       * @description The GID of the custom type for the task. This is relevant for tasks using specific task type configurations.
       * @default null
       */
      custom_type: string | null;
      /**
       * Custom Type Status Option
       * @description The GID of the status option for the custom task type. This is used in conjunction with `custom_type`.
       * @default null
       */
      custom_type_status_option: string | null;
      /**
       * Due At
       * @description The UTC date and time on which this task is due (e.g., '2023-09-15T02:06:58.147Z'). Null if the task has no due time. This takes an ISO 8601 date string and should not be used together with `due_on`.
       * @default null
       */
      due_at: string | null;
      /**
       * Due On
       * @description The localized date on which this task is due (e.g., '2023-09-15'). Null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with `due_at`.
       * @default null
       */
      due_on: string | null;
      /**
       * Followers
       * @description An array of user GIDs, email addresses, or the string 'me' to set as followers. Setting this field replaces all existing followers on the task. To add or remove specific followers incrementally, use the `addFollowers` or `removeFollowers` actions.
       * @default null
       */
      followers: string[] | null;
      /**
       * Html Notes
       * @description The notes of the task, with formatting as HTML. This field is available only by Opt-In.
       * @default null
       */
      html_notes: string | null;
      /**
       * Liked
       * @description True if the task is liked by the authorized user, false if not.
       * @default false
       */
      liked: boolean;
      /**
       * Name
       * @description Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability, but it can be longer.
       */
      name: string;
      /**
       * Notes
       * @description Free-form textual information associated with the task (i.e., its description).
       * @default null
       */
      notes: string | null;
      /**
       * Parent
       * @description The GID of the parent task, if this task is to be updated as a subtask. Set to `null` to convert a subtask to a top-level task.
       * @default null
       */
      parent: string | null;
      /**
       * Projects
       * @description An array of project GIDs to associate the task with. Setting this field replaces all existing project associations for the task. To add or remove specific projects incrementally, use the `addProject` or `removeProject` actions.
       * @default null
       */
      projects: string[] | null;
      /**
       * ResourceSubtype
       * @description The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The `milestone` resource_subtype represents a single moment in time and tasks with this subtype cannot have a start_date.
       * @default default_task
       * @enum {string|null}
       */
      resource_subtype: "default_task" | "milestone" | "approval" | null;
      /**
       * Start At
       * @description The UTC date and time on which work begins for the task (e.g., '2023-09-14T09:00:00.000Z'). Null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with `start_on`. *Note: `due_at` must be present in the request when setting or unsetting the `start_at` parameter.*
       * @default null
       */
      start_at: string | null;
      /**
       * Start On
       * @description The localized date on which work begins for the task (e.g., '2023-09-14'). Null if the task has no start date. This takes a date with YYYY-MM-DD format and should not be used together with `start_at`. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter.*
       * @default null
       */
      start_on: string | null;
      /**
       * Tags
       * @description An array of tag GIDs to associate with the task. Setting this field replaces all existing tags on the task. To add or remove specific tags incrementally, use the `addTag` or `removeTag` actions.
       * @default null
       */
      tags: string[] | null;
      /**
       * Workspace
       * @description The GID of the workspace to associate the task with. This is usually only required if the task is being moved between workspaces, which is a rare operation.
       * @default null
       */
      workspace: string | null;
  };
  /**
   * Opt Fields
   * @description A list of optional properties to include in the response object. By default, a compact representation of the task is returned. Use this to retrieve additional fields. The elements of this list should be valid field names for the task resource.
   */
  opt_fields?: string[];
  /**
   * Opt Pretty
   * @description If true, the response JSON will be 'pretty-printed' with indentation and line breaks, making it more readable. This is useful for debugging but may increase response time and size.
   * @default true
   */
  opt_pretty: boolean;
  /**
   * Task Gid
   * @description The GID of the task to update.
   */
  task_gid?: string;
};

/**
 * Type of ASANA's ASANA_UPDATE_A_TASK tool output.
 */
type ASANA_UPDATE_A_TASK_OUTPUT = {
  /**
   * Data
   * @description Contains the full updated task record.
   */
  data?: {
      /**
       * Data
       * @description The full task object after the update.
       * @default null
       */
      data: {
          /**
           * Actual Time Minutes
           * @description This value represents the sum of all the Time Tracking entries in the Actual Time field on a given Task, in minutes.
           * @default null
           */
          actual_time_minutes: number | null;
          /**
           * Approval Status
           * @description *Conditional* Reflects the approval status of this task (e.g., 'pending', 'approved'). Kept in sync with `completed`: `pending` means false, others true. Setting `completed` to true sets this to `approved`.
           * @default null
           */
          approval_status: string | null;
          /**
           * Assignee
           * @description The user to whom this task is assigned, if any.
           * @default null
           */
          assignee: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description *Read-only except when same user as requester*. The user’s name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * AssigneeSection
           * @description The section in the assignee's 'My Tasks' list for this task, if any.
           * @default null
           */
          assignee_section: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description The name of the section (i.e. the text displayed as the section header).
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Assignee Status
           * @description *Deprecated* Scheduling status of this task for its assignee (e.g., 'upcoming', 'inbox'). Only settable if assignee is non-null. "inbox" or "upcoming" insert at top of section, others at bottom.
           * @default null
           */
          assignee_status: string | null;
          /**
           * Completed
           * @description True if the task is currently marked complete, false if not.
           * @default null
           */
          completed: boolean | null;
          /**
           * Completed At
           * @description The time at which this task was completed (ISO 8601 UTC), or null if the task is incomplete.
           * @default null
           */
          completed_at: string | null;
          /**
           * CompletedBy
           * @description The user who completed the task.
           * @default null
           */
          completed_by: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description *Read-only except when same user as requester*. The user’s name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Created At
           * @description The time at which this resource was created (ISO 8601 UTC).
           * @default null
           */
          created_at: string | null;
          /**
           * CreatedBy
           * @description The user who created the task. This field is available only by Opt-In. A `user` object represents an account in Asana.
           * @default null
           */
          created_by: {
              /**
               * Gid
               * @description Globally unique identifier of the resource.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description The type of resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Custom Fields
           * @description Array of custom field values applied to the task. These objects contain the value for each custom field. The `gid` of each custom field value object is identical to the `gid` of the custom field itself.
           * @default null
           */
          custom_fields: {
              /**
               * AsanaCreatedField
               * @description *Conditional*. A unique identifier to associate this field with the template source of truth (e.g., 'priority').
               * @default null
               */
              asana_created_field: (string | null) | null;
              /**
               * CreatedBy1
               * @description The user who created the custom field.
               * @default null
               */
              created_by: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description *Read-only except when same user as requester*. The user’s name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Currency Code
               * @description ISO 4217 currency code to format this custom field (e.g., 'USD', 'EUR'). This will be null if the `format` is not `currency`.
               * @default null
               */
              currency_code: string | null;
              /**
               * Custom Label
               * @description This is the string that appears next to the custom field value (e.g., 'gold pieces'). This will be null if the `format` is not `custom`.
               * @default null
               */
              custom_label: string | null;
              /**
               * CustomLabelPosition
               * @description Only relevant for custom fields with `custom` format. This depicts where to place the custom label (e.g., 'prefix', 'suffix'). This will be null if the `format` is not `custom`.
               * @default null
               */
              custom_label_position: (string | null) | null;
              /**
               * DateValue
               * @description *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.
               * @default null
               */
              date_value: {
                  /**
                   * Date
                   * @description A string representing the date in YYYY-MM-DD format.
                   * @default null
                   */
                  date: string | null;
                  /**
                   * Date Time
                   * @description A string representing the date and time in ISO 8601 format (e.g., '2024-08-23T22:00:00.000Z'). If no time value is selected, this will be `null`.
                   * @default null
                   */
                  date_time: string | null;
              } | null;
              /**
               * Description
               * @description The description of the custom field. This field is available only by Opt-In.
               * @default null
               */
              description: string | null;
              /**
               * Display Value
               * @description A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
               * @default null
               */
              display_value: string | null;
              /**
               * Enabled
               * @description *Conditional*. Determines if the custom field is enabled or not.
               * @default null
               */
              enabled: boolean | null;
              /**
               * Enum Options
               * @description *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to the Asana API documentation on working with enum options.
               * @default null
               */
              enum_options: {
                  /**
                   * Color
                   * @description The color of the enum option. Defaults to ‘none’.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description Whether or not the enum option is a selectable value for the custom field.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description The name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * EnumValue
               * @description *Conditional*. The selected enum option for an `enum` custom field.
               * @default null
               */
              enum_value: {
                  /**
                   * Color
                   * @description The color of the enum option. Defaults to ‘none’.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description Whether or not the enum option is a selectable value for the custom field.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description The name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Format
               * @description The format of this custom field (e.g., 'currency', 'identifier', 'percentage', 'custom', 'none').
               * @default null
               */
              format: string | null;
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Has Notifications Enabled
               * @description *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.
               * @default null
               */
              has_notifications_enabled: boolean | null;
              /**
               * Id Prefix
               * @description This field is the unique custom ID string for the custom field (e.g. 'ID' for a custom ID field).
               * @default null
               */
              id_prefix: string | null;
              /**
               * Is Formula Field
               * @description *Conditional*. This flag describes whether a custom field is a formula custom field.
               * @default null
               */
              is_formula_field: boolean | null;
              /**
               * Is Global To Workspace
               * @description This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true.
               * @default null
               */
              is_global_to_workspace: boolean | null;
              /**
               * Is Value Read Only
               * @description *Conditional*. This flag describes whether a custom field's value is read-only.
               * @default null
               */
              is_value_read_only: boolean | null;
              /**
               * Multi Enum Values
               * @description *Conditional*. Only relevant for custom fields of type `multi_enum`. This list contains the chosen enum options for a `multi_enum` custom field.
               * @default null
               */
              multi_enum_values: {
                  /**
                   * Color
                   * @description The color of the enum option. Defaults to ‘none’.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Enabled
                   * @description Whether or not the enum option is a selectable value for the custom field.
                   * @default null
                   */
                  enabled: boolean | null;
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description The name of the enum option.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * Name
               * @description The name of the custom field.
               * @default null
               */
              name: string | null;
              /**
               * Number Value
               * @description *Conditional*. This number is the value of a `number` custom field.
               * @default null
               */
              number_value: number | null;
              /**
               * People Value
               * @description *Conditional*. Only relevant for custom fields of type `people`. This array of compact user objects reflects the values of a `people` custom field.
               * @default null
               */
              people_value: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description *Read-only except when same user as requester*. The user’s name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              }[] | null;
              /**
               * Precision
               * @description Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to (0-6). For percentage format, 0.25 (25%) has precision 0, while 0.251 (25.1%) has precision 1. Identifier format always has precision 0.
               * @default null
               */
              precision: number | null;
              /**
               * Representation Type
               * @description The underlying data type of the custom field (e.g., 'text', 'number', 'id', 'people').
               * @default null
               */
              representation_type: string | null;
              /**
               * Resource Subtype
               * @description The type of the custom field (e.g., 'text', 'number', 'enum').
               * @default null
               */
              resource_subtype: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
              /**
               * Text Value
               * @description *Conditional*. This string is the value of a `text` custom field.
               * @default null
               */
              text_value: string | null;
              /**
               * Type
               * @description *Deprecated: new integrations should prefer the `resource_subtype` field.* The type of the custom field.
               * @default null
               */
              type: string | null;
          }[] | null;
          /**
           * Dependencies
           * @description Array of resources referencing tasks that this task depends on. Objects contain only the GID of the dependency. This field is available only by Opt-In.
           * @default null
           */
          dependencies: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Dependents
           * @description Array of resources referencing tasks that depend on this task. Objects contain only the GID of the dependent. This field is available only by Opt-In.
           * @default null
           */
          dependents: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Due At
           * @description The UTC date and time on which this task is due (ISO 8601 UTC), or null if no due time. Should not be used with `due_on`.
           * @default null
           */
          due_at: string | null;
          /**
           * Due On
           * @description The localized date on which this task is due (YYYY-MM-DD), or null if no due date. Should not be used with `due_at`.
           * @default null
           */
          due_on: string | null;
          /**
           * External
           * @description External metadata associated with the task. Allows storing app-specific data (GID and a data blob). Returned only if external values are set or Opt-In is used. OAuth is required to access/modify this data. See Asana documentation for Custom External Data details.
           * @default null
           */
          external: {
              /**
               * Data
               * @description The app-specific string of data.
               * @default null
               */
              data: string | null;
              /**
               * Gid
               * @description Globally unique identifier of the external data record.
               * @default null
               */
              gid: string | null;
          } | null;
          /**
           * Followers
           * @description Array of users following this task.
           * @default null
           */
          followers: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description *Read-only except when same user as requester*. The user’s name.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Gid
           * @description Globally unique identifier of the resource, as a string.
           * @default null
           */
          gid: string | null;
          /**
           * Hearted
           * @description *Deprecated - please use `liked` instead* True if the task is hearted by the authorized user, false if not.
           * @default null
           */
          hearted: boolean | null;
          /**
           * Hearts
           * @description *Deprecated - please use `likes` instead* Array of like records for users who have hearted this task.
           * @default null
           */
          hearts: {
              /**
               * Gid
               * @description Globally unique identifier of the heart record, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * User
               * @description The user who hearted the task.
               * @default null
               */
              user: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description *Read-only except when same user as requester*. The user’s name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
          }[] | null;
          /**
           * Html Notes
           * @description The notes of the task with formatting as HTML. This field is available only by Opt-In.
           * @default null
           */
          html_notes: string | null;
          /**
           * Is Rendered As Separator
           * @description Indicates if the task is rendered as a visual separator (e.g., subtasks appearing like sections). This field is available only by Opt-In.
           * @default null
           */
          is_rendered_as_separator: boolean | null;
          /**
           * Liked
           * @description True if the task is liked by the authorized user, false if not.
           * @default null
           */
          liked: boolean | null;
          /**
           * Likes
           * @description Array of like records for users who have liked this task.
           * @default null
           */
          likes: {
              /**
               * Gid
               * @description Globally unique identifier of the like record, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * User
               * @description The user who liked the task.
               * @default null
               */
              user: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description *Read-only except when same user as requester*. The user’s name.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
          }[] | null;
          /**
           * Memberships
           * @description *Create-only*. Array of project memberships, indicating the project and section this task is associated with. Use `addProject` and `removeProject` endpoints to modify after creation.
           * @default null
           */
          memberships: {
              /**
               * Project
               * @description The project the task is a member of.
               * @default null
               */
              project: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Section
               * @description The section within the project the task is in, if applicable.
               * @default null
               */
              section: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource, as a string.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Name
                   * @description The name of the section (i.e. the text displayed as the section header).
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Resource Type
                   * @description The base type of this resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
          }[] | null;
          /**
           * Modified At
           * @description The time at which this task was last modified (ISO 8601 UTC). Various actions like story creation, assignment changes, custom field updates, trashing, or updates to fields like `completed`, `name`, `due_date`, `description` will change this. Moving to a new container or adding comments (though the stories they generate will) do not.
           * @default null
           */
          modified_at: string | null;
          /**
           * Name
           * @description The name of the task.
           * @default null
           */
          name: string | null;
          /**
           * Notes
           * @description Free-form textual information associated with the task (i.e. its description).
           * @default null
           */
          notes: string | null;
          /**
           * Num Hearts
           * @description *Deprecated - please use `num_likes` instead* The number of users who have hearted this task.
           * @default null
           */
          num_hearts: number | null;
          /**
           * Num Likes
           * @description The number of users who have liked this task.
           * @default null
           */
          num_likes: number | null;
          /**
           * Num Subtasks
           * @description The number of subtasks on this task. This field is available only by Opt-In.
           * @default null
           */
          num_subtasks: number | null;
          /**
           * Parent
           * @description The parent task, if this is a subtask.
           * @default null
           */
          parent: {
              /**
               * CreatedBy2
               * @description The user who created the parent task. This field is available only by Opt-In. A `user` object represents an account in Asana.
               * @default null
               */
              created_by: {
                  /**
                   * Gid
                   * @description Globally unique identifier of the resource.
                   * @default null
                   */
                  gid: string | null;
                  /**
                   * Resource Type
                   * @description The type of resource.
                   * @default null
                   */
                  resource_type: string | null;
              } | null;
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description The name of the task.
               * @default null
               */
              name: string | null;
              /**
               * Resource Subtype
               * @description The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The `milestone` resource_subtype represent a single moment in time. This means tasks with this subtype cannot have a start_date.
               * @default null
               */
              resource_subtype: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
          /**
           * Permalink Url
           * @description A URL that points directly to the object within Asana.
           * @default null
           */
          permalink_url: string | null;
          /**
           * Projects
           * @description *Create-only.* Array of projects this task is associated with. Modify using `addProject` and `removeProject` after creation.
           * @default null
           */
          projects: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Resource Subtype
           * @description The subtype of this resource (e.g., 'default_task', 'milestone'). Different subtypes may have different rendering or semantic meaning. `milestone` tasks represent a single moment and cannot have a start_date.
           * @default null
           */
          resource_subtype: string | null;
          /**
           * Resource Type
           * @description The base type of this resource.
           * @default null
           */
          resource_type: string | null;
          /**
           * Start At
           * @description Date and time on which work begins for the task (ISO 8601 UTC), or null if no start time. Should not be used with `start_on`. *Note: `due_at` must be present in the request when setting or unsetting `start_at`.*
           * @default null
           */
          start_at: string | null;
          /**
           * Start On
           * Format: date
           * @description The day on which work begins for the task (YYYY-MM-DD), or null if no start date. Should not be used with `start_at`. *Note: `due_on` or `due_at` must be present when setting or unsetting `start_on`.*
           * @default null
           */
          start_on: string | null;
          /**
           * Tags
           * @description Array of tags associated with this task. To change tags on an existing task, use `addTag` and `removeTag` actions.
           * @default null
           */
          tags: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          }[] | null;
          /**
           * Workspace
           * @description The workspace this task belongs to.
           * @default null
           */
          workspace: {
              /**
               * Gid
               * @description Globally unique identifier of the resource, as a string.
               * @default null
               */
              gid: string | null;
              /**
               * Name
               * @description The name of the workspace.
               * @default null
               */
              name: string | null;
              /**
               * Resource Type
               * @description The base type of this resource.
               * @default null
               */
              resource_type: string | null;
          } | null;
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
 * Type of ASANA's ASANA_UPDATE_CUSTOM_FIELD tool input.
 */
type ASANA_UPDATE_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Gid
   * @description Globally unique identifier for the custom field.
   */
  custom_field_gid?: string;
  /**
   * Data
   * @description The data to update the custom field with.
   */
  data?: {
      /**
       * Description
       * @description The description of the custom field.
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description The name of the custom field.
       * @default null
       */
      name: string | null;
  };
  /**
   * Opt Fields
   * @description This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_UPDATE_CUSTOM_FIELD tool output.
 */
type ASANA_UPDATE_CUSTOM_FIELD_OUTPUT = {
  /**
   * Data
   * @description The full custom field record for the updated custom field.
   */
  data?: {
      /**
       * Description
       * @description [Opt In](/docs/input-output-options). The description of the custom field.
       * @default null
       */
      description: string | null;
      /**
       * Gid
       * @description Globally unique identifier for the resource.
       */
      gid: string;
      /**
       * Name
       * @description The name of the custom field.
       * @default null
       */
      name: string | null;
      /**
       * Resource Type
       * @description The type of resource.
       */
      resource_type: string;
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
 * Type of ASANA's ASANA_UPDATE_ENUM_OPTION tool input.
 */
type ASANA_UPDATE_ENUM_OPTION_INPUT = {
  /**
   * Data
   * @description The data to update the enum option with.
   */
  data?: {
      /**
       * AsanaColor
       * @description The color of the enum option.
       * @default null
       * @enum {string|null}
       */
      color: "dark-pink" | "dark-green" | "dark-blue" | "dark-red" | "dark-teal" | "dark-brown" | "dark-orange" | "dark-purple" | "dark-warm-gray" | "light-pink" | "light-green" | "light-blue" | "light-red" | "light-teal" | "light-brown" | "light-orange" | "light-purple" | "light-warm-gray" | null;
      /**
       * Enabled
       * @description Whether the enum option is enabled or not.
       * @default null
       */
      enabled: boolean | null;
      /**
       * Name
       * @description The name of the enum option.
       * @default null
       */
      name: string | null;
  };
  /**
   * Enum Option Gid
   * @description Globally unique identifier for the enum option.
   */
  enum_option_gid?: string;
  /**
   * Opt Fields
   * @description Defines the fields to be returned in the response.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output. Formatting of the result will follow JSON pretty print conventions (line breaks and indentation).
   * @default null
   */
  opt_pretty: boolean | null;
};

/**
 * Type of ASANA's ASANA_UPDATE_ENUM_OPTION tool output.
 */
type ASANA_UPDATE_ENUM_OPTION_OUTPUT = {
  /**
   * Data
   * @description The updated enum option.
   */
  data?: {
      /**
       * Color
       * @description The color of the enum option.
       * @enum {string}
       */
      color: "dark-pink" | "dark-green" | "dark-blue" | "dark-red" | "dark-teal" | "dark-brown" | "dark-orange" | "dark-purple" | "dark-warm-gray" | "light-pink" | "light-green" | "light-blue" | "light-red" | "light-teal" | "light-brown" | "light-orange" | "light-purple" | "light-warm-gray";
      /**
       * Enabled
       * @description Whether the enum option is enabled or not.
       */
      enabled: boolean;
      /**
       * Gid
       * @description Globally unique identifier for the enum option.
       */
      gid: string;
      /**
       * Name
       * @description The name of the enum option.
       */
      name: string;
      /**
       * Resource Type
       * @description The resource type of the enum option.
       */
      resource_type: string;
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
 * Type of ASANA's ASANA_UPDATE_PROJECT tool input.
 */
type ASANA_UPDATE_PROJECT_INPUT = {
  /**
   * Archived
   * @description True if the project is archived, false if not.
   * @default null
   */
  archived: boolean | null;
  /**
   * Color
   * @description Color of the project.
   * @default null
   */
  color: string | null;
  /**
   * Custom Fields
   * @description An object where each key is the GID of a custom field and its corresponding value is the new value for that custom field.
   * @default null
   */
  custom_fields: {
      [key: string]: string;
  } | null;
  /**
   * Default View
   * @description The default view (list, board, calendar, or timeline) of a project.
   * @default null
   */
  default_view: string | null;
  /**
   * Due Date
   * @description The localized day on which this project is due. This takes a date with format YYYY-MM-DD.
   * @default null
   */
  due_date: string | null;
  /**
   * Due On
   * @description The day on which this project is due. This takes a date with format YYYY-MM-DD.
   * @default null
   */
  due_on: string | null;
  /**
   * Html Notes
   * @description [Opt In](/docs/input-output-options). The notes of the project with formatting as HTML.
   * @default null
   */
  html_notes: string | null;
  /**
   * Is Template
   * @description [Opt In](/docs/input-output-options). True if the project is a template.
   * @default null
   */
  is_template: boolean | null;
  /**
   * Name
   * @description The name of the project.
   * @default null
   */
  name: string | null;
  /**
   * Notes
   * @description Free-form textual information associated with the project (its description).
   * @default null
   */
  notes: string | null;
  /**
   * Owner
   * @description The GID of the new owner of the project. May be null.
   * @default null
   */
  owner: string | null;
  /**
   * Project Gid
   * @description The GID of the project to update.
   */
  project_gid?: string;
  /**
   * Public
   * @description True if the project is public to its team.
   * @default null
   */
  public: boolean | null;
  /**
   * Start On
   * @description The day on which work for this project begins, or null if the project has no start date. This takes a date with YYYY-MM-DD format.
   * @default null
   */
  start_on: string | null;
  /**
   * Team
   * @description The GID of the team that this project is shared with.
   * @default null
   */
  team: string | null;
};

/**
 * Type of ASANA's ASANA_UPDATE_PROJECT tool output.
 */
type ASANA_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description The project object that was updated.
   */
  data?: {
      /**
       * Archived
       * @description True if the project is archived, false if not.
       * @default null
       */
      archived: boolean | null;
      /**
       * Color
       * @description Color of the project.
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description The time at which this resource was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Current Status
       * @description The current status of this project.
       * @default null
       */
      current_status: {
          [key: string]: unknown;
      } | null;
      /**
       * Current Status Update
       * @description The current status update for the project.
       * @default null
       */
      current_status_update: {
          [key: string]: unknown;
      } | null;
      /**
       * Custom Field Settings
       * @description Array of Custom Field Settings.
       * @default null
       */
      custom_field_settings: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Custom Fields
       * @description Array of Custom Fields.
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Default View
       * @description The default view of a project.
       * @default null
       */
      default_view: string | null;
      /**
       * Due Date
       * @description The localized day on which this project is due.
       * @default null
       */
      due_date: string | null;
      /**
       * Due On
       * @description The day on which this project is due.
       * @default null
       */
      due_on: string | null;
      /**
       * Followers
       * @description Array of users following this project.
       * @default null
       */
      followers: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Html Notes
       * @description The notes of the project with formatting as HTML.
       * @default null
       */
      html_notes: string | null;
      /**
       * Icon
       * @description The icon for the project.
       * @default null
       */
      icon: string | null;
      /**
       * Is Template
       * @description True if the project is a template.
       * @default null
       */
      is_template: boolean | null;
      /**
       * Members
       * @description Array of users who are members of this project.
       * @default null
       */
      members: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Modified At
       * @description The time at which this resource was last modified.
       * @default null
       */
      modified_at: string | null;
      /**
       * Name
       * @description Name of the project.
       * @default null
       */
      name: string | null;
      /**
       * Notes
       * @description Free-form textual information associated with the project.
       * @default null
       */
      notes: string | null;
      /**
       * Owner
       * @description The current owner of the project.
       * @default null
       */
      owner: {
          [key: string]: unknown;
      } | null;
      /**
       * Permalink Url
       * @description A url that points directly to the object within Asana.
       * @default null
       */
      permalink_url: string | null;
      /**
       * Project Brief
       * @description A project brief object.
       * @default null
       */
      project_brief: {
          [key: string]: unknown;
      } | null;
      /**
       * Public
       * @description True if the project is public to its team.
       * @default null
       */
      public: boolean | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
      /**
       * Start On
       * @description The day on which work for this project begins.
       * @default null
       */
      start_on: string | null;
      /**
       * Team
       * @description The team that this project is shared with.
       * @default null
       */
      team: {
          [key: string]: unknown;
      } | null;
      /**
       * Workspace
       * @description The workspace or organization this project is associated with.
       * @default null
       */
      workspace: {
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
 * Type of ASANA's ASANA_UPDATE_TAG tool input.
 */
type ASANA_UPDATE_TAG_INPUT = {
  /**
   * Data
   * @description An object containing the fields to update.
   */
  data?: {
      /**
       * ColorEnum
       * @description The new color of the tag.
       * @default null
       * @enum {string|null}
       */
      color: "dark-pink" | "dark-green" | "dark-blue" | "dark-red" | "dark-teal" | "dark-brown" | "dark-orange" | "dark-purple" | "dark-warm-gray" | "light-pink" | "light-green" | "light-blue" | "light-red" | "light-teal" | "light-brown" | "light-orange" | "light-purple" | "light-warm-gray" | null;
      /**
       * Name
       * @description The new name of the tag.
       * @default null
       */
      name: string | null;
  };
  /**
   * Tag Gid
   * @description The globally unique identifier for the tag.
   */
  tag_gid?: string;
};

/**
 * Type of ASANA's ASANA_UPDATE_TAG tool output.
 */
type ASANA_UPDATE_TAG_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Color
       * @description Color of the tag.
       * @default null
       */
      color: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the resource, as a string.
       */
      gid: string;
      /**
       * Name
       * @description Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
       * @default null
       */
      name: string | null;
      /**
       * Resource Type
       * @description The base type of this resource.
       */
      resource_type: string;
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
 * Type of ASANA's ASANA_UPDATE_TEAM tool input.
 */
type ASANA_UPDATE_TEAM_INPUT = {
  /**
   * Description
   * @description The new description of the team.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description The new name of the team.
   * @default null
   */
  name: string | null;
  /**
   * Opt Fields
   * @description Defines fields to return.
   * @default null
   */
  opt_fields: string[] | null;
  /**
   * Opt Pretty
   * @description Provides “pretty” output.
   * @default null
   */
  opt_pretty: boolean | null;
  /**
   * Organization
   * @description GID of the organization to which the team belongs. This is the GID of an organization, not its name.
   * @default null
   */
  organization: string | null;
  /**
   * Team Gid
   * @description Globally unique identifier for the team.
   */
  team_gid?: string;
};

/**
 * Type of ASANA's ASANA_UPDATE_TEAM tool output.
 */
type ASANA_UPDATE_TEAM_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Description
       * @description Description of the team.
       * @default null
       */
      description: string | null;
      /**
       * Gid
       * @description Globally unique identifier of the team.
       */
      gid: string;
      /**
       * Name
       * @description Name of the team.
       */
      name: string;
      /**
       * Organization
       * @description Information about the organization the team belongs to.
       * @default null
       */
      organization: {
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
 * Type map of all available tool input types for toolkit "ASANA".
 */
export type ASANA_TOOL_INPUTS = {
  ADD_FOLLOWERS_TO_TASK: ASANA_ADD_FOLLOWERS_TO_TASK_INPUT
  ADD_SUPPORTING_RELATIONSHIP: ASANA_ADD_SUPPORTING_RELATIONSHIP_INPUT
  ADD_TASK_TO_SECTION: ASANA_ADD_TASK_TO_SECTION_INPUT
  CREATE_ALLOCATION: ASANA_CREATE_ALLOCATION_INPUT
  CREATE_ATTACHMENT_FOR_TASK: ASANA_CREATE_ATTACHMENT_FOR_TASK_INPUT
  CREATE_A_PROJECT: ASANA_CREATE_A_PROJECT_INPUT
  CREATE_A_TAG_IN_A_WORKSPACE: ASANA_CREATE_A_TAG_IN_A_WORKSPACE_INPUT
  CREATE_A_TASK: ASANA_CREATE_A_TASK_INPUT
  CREATE_CUSTOM_FIELD: ASANA_CREATE_CUSTOM_FIELD_INPUT
  CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD: ASANA_CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD_INPUT
  CREATE_PROJECT_STATUS_UPDATE: ASANA_CREATE_PROJECT_STATUS_UPDATE_INPUT
  CREATE_SECTION_IN_PROJECT: ASANA_CREATE_SECTION_IN_PROJECT_INPUT
  CREATE_SUBTASK: ASANA_CREATE_SUBTASK_INPUT
  CREATE_TASK_COMMENT: ASANA_CREATE_TASK_COMMENT_INPUT
  CREATE_TEAM: ASANA_CREATE_TEAM_INPUT
  DELETE_ALLOCATION: ASANA_DELETE_ALLOCATION_INPUT
  DELETE_ATTACHMENT: ASANA_DELETE_ATTACHMENT_INPUT
  DELETE_CUSTOM_FIELD: ASANA_DELETE_CUSTOM_FIELD_INPUT
  DELETE_PROJECT: ASANA_DELETE_PROJECT_INPUT
  DELETE_TAG: ASANA_DELETE_TAG_INPUT
  DELETE_TASK: ASANA_DELETE_TASK_INPUT
  DUPLICATE_PROJECT: ASANA_DUPLICATE_PROJECT_INPUT
  DUPLICATE_TASK: ASANA_DUPLICATE_TASK_INPUT
  GET_ALLOCATION: ASANA_GET_ALLOCATION_INPUT
  GET_ALLOCATIONS: ASANA_GET_ALLOCATIONS_INPUT
  GET_ATTACHMENT: ASANA_GET_ATTACHMENT_INPUT
  GET_AUDIT_LOG_EVENTS: ASANA_GET_AUDIT_LOG_EVENTS_INPUT
  GET_A_PROJECT: ASANA_GET_A_PROJECT_INPUT
  GET_A_TASK: ASANA_GET_A_TASK_INPUT
  GET_A_USER_TASK_LIST: ASANA_GET_A_USER_TASK_LIST_INPUT
  GET_CURRENT_USER: ASANA_GET_CURRENT_USER_INPUT
  GET_CUSTOM_FIELD: ASANA_GET_CUSTOM_FIELD_INPUT
  GET_CUSTOM_FIELDS_FOR_WORKSPACE: ASANA_GET_CUSTOM_FIELDS_FOR_WORKSPACE_INPUT
  GET_EVENTS: ASANA_GET_EVENTS_INPUT
  GET_GOAL: ASANA_GET_GOAL_INPUT
  GET_GOALS: ASANA_GET_GOALS_INPUT
  GET_GOAL_RELATIONSHIPS: ASANA_GET_GOAL_RELATIONSHIPS_INPUT
  GET_MEMBERSHIPS: ASANA_GET_MEMBERSHIPS_INPUT
  GET_MULTIPLE_PROJECTS: ASANA_GET_MULTIPLE_PROJECTS_INPUT
  GET_MULTIPLE_TASKS: ASANA_GET_MULTIPLE_TASKS_INPUT
  GET_MULTIPLE_USERS: ASANA_GET_MULTIPLE_USERS_INPUT
  GET_MULTIPLE_WORKSPACES: ASANA_GET_MULTIPLE_WORKSPACES_INPUT
  GET_PORTFOLIO: ASANA_GET_PORTFOLIO_INPUT
  GET_PORTFOLIOS: ASANA_GET_PORTFOLIOS_INPUT
  GET_PORTFOLIO_ITEMS: ASANA_GET_PORTFOLIO_ITEMS_INPUT
  GET_PORTFOLIO_MEMBERSHIPS: ASANA_GET_PORTFOLIO_MEMBERSHIPS_INPUT
  GET_PROJECTS_FOR_TEAM: ASANA_GET_PROJECTS_FOR_TEAM_INPUT
  GET_PROJECT_BRIEF: ASANA_GET_PROJECT_BRIEF_INPUT
  GET_PROJECT_MEMBERSHIPS: ASANA_GET_PROJECT_MEMBERSHIPS_INPUT
  GET_PROJECT_STATUS: ASANA_GET_PROJECT_STATUS_INPUT
  GET_PROJECT_STATUS_UPDATES: ASANA_GET_PROJECT_STATUS_UPDATES_INPUT
  GET_PROJECT_TEMPLATES: ASANA_GET_PROJECT_TEMPLATES_INPUT
  GET_SECTION: ASANA_GET_SECTION_INPUT
  GET_SECTIONS_IN_PROJECT: ASANA_GET_SECTIONS_IN_PROJECT_INPUT
  GET_STATUS_UPDATES: ASANA_GET_STATUS_UPDATES_INPUT
  GET_STORIES_FOR_TASK: ASANA_GET_STORIES_FOR_TASK_INPUT
  GET_STORY: ASANA_GET_STORY_INPUT
  GET_TAG: ASANA_GET_TAG_INPUT
  GET_TAGS: ASANA_GET_TAGS_INPUT
  GET_TASKS_FROM_A_PROJECT: ASANA_GET_TASKS_FROM_A_PROJECT_INPUT
  GET_TASK_ATTACHMENTS: ASANA_GET_TASK_ATTACHMENTS_INPUT
  GET_TASK_SUBTASKS: ASANA_GET_TASK_SUBTASKS_INPUT
  GET_TASK_TEMPLATES: ASANA_GET_TASK_TEMPLATES_INPUT
  GET_TEAM: ASANA_GET_TEAM_INPUT
  GET_TEAMS_IN_WORKSPACE: ASANA_GET_TEAMS_IN_WORKSPACE_INPUT
  GET_TEAM_MEMBERSHIPS: ASANA_GET_TEAM_MEMBERSHIPS_INPUT
  GET_TIME_PERIODS: ASANA_GET_TIME_PERIODS_INPUT
  GET_TYPEAHEAD_OBJECTS: ASANA_GET_TYPEAHEAD_OBJECTS_INPUT
  GET_USER: ASANA_GET_USER_INPUT
  GET_USERS_FOR_TEAM: ASANA_GET_USERS_FOR_TEAM_INPUT
  GET_USERS_FOR_WORKSPACE: ASANA_GET_USERS_FOR_WORKSPACE_INPUT
  GET_WORKSPACE: ASANA_GET_WORKSPACE_INPUT
  GET_WORKSPACE_MEMBERSHIPS: ASANA_GET_WORKSPACE_MEMBERSHIPS_INPUT
  GET_WORKSPACE_PROJECTS: ASANA_GET_WORKSPACE_PROJECTS_INPUT
  INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD: ASANA_INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD_INPUT
  REMOVE_FOLLOWER_FROM_TASK: ASANA_REMOVE_FOLLOWER_FROM_TASK_INPUT
  SUBMIT_PARALLEL_REQUESTS: ASANA_SUBMIT_PARALLEL_REQUESTS_INPUT
  UPDATE_ALLOCATION: ASANA_UPDATE_ALLOCATION_INPUT
  UPDATE_A_TASK: ASANA_UPDATE_A_TASK_INPUT
  UPDATE_CUSTOM_FIELD: ASANA_UPDATE_CUSTOM_FIELD_INPUT
  UPDATE_ENUM_OPTION: ASANA_UPDATE_ENUM_OPTION_INPUT
  UPDATE_PROJECT: ASANA_UPDATE_PROJECT_INPUT
  UPDATE_TAG: ASANA_UPDATE_TAG_INPUT
  UPDATE_TEAM: ASANA_UPDATE_TEAM_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ASANA".
 */
export type ASANA_TOOL_OUTPUTS = {
  ADD_FOLLOWERS_TO_TASK: ASANA_ADD_FOLLOWERS_TO_TASK_OUTPUT
  ADD_SUPPORTING_RELATIONSHIP: ASANA_ADD_SUPPORTING_RELATIONSHIP_OUTPUT
  ADD_TASK_TO_SECTION: ASANA_ADD_TASK_TO_SECTION_OUTPUT
  CREATE_ALLOCATION: ASANA_CREATE_ALLOCATION_OUTPUT
  CREATE_ATTACHMENT_FOR_TASK: ASANA_CREATE_ATTACHMENT_FOR_TASK_OUTPUT
  CREATE_A_PROJECT: ASANA_CREATE_A_PROJECT_OUTPUT
  CREATE_A_TAG_IN_A_WORKSPACE: ASANA_CREATE_A_TAG_IN_A_WORKSPACE_OUTPUT
  CREATE_A_TASK: ASANA_CREATE_A_TASK_OUTPUT
  CREATE_CUSTOM_FIELD: ASANA_CREATE_CUSTOM_FIELD_OUTPUT
  CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD: ASANA_CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD_OUTPUT
  CREATE_PROJECT_STATUS_UPDATE: ASANA_CREATE_PROJECT_STATUS_UPDATE_OUTPUT
  CREATE_SECTION_IN_PROJECT: ASANA_CREATE_SECTION_IN_PROJECT_OUTPUT
  CREATE_SUBTASK: ASANA_CREATE_SUBTASK_OUTPUT
  CREATE_TASK_COMMENT: ASANA_CREATE_TASK_COMMENT_OUTPUT
  CREATE_TEAM: ASANA_CREATE_TEAM_OUTPUT
  DELETE_ALLOCATION: ASANA_DELETE_ALLOCATION_OUTPUT
  DELETE_ATTACHMENT: ASANA_DELETE_ATTACHMENT_OUTPUT
  DELETE_CUSTOM_FIELD: ASANA_DELETE_CUSTOM_FIELD_OUTPUT
  DELETE_PROJECT: ASANA_DELETE_PROJECT_OUTPUT
  DELETE_TAG: ASANA_DELETE_TAG_OUTPUT
  DELETE_TASK: ASANA_DELETE_TASK_OUTPUT
  DUPLICATE_PROJECT: ASANA_DUPLICATE_PROJECT_OUTPUT
  DUPLICATE_TASK: ASANA_DUPLICATE_TASK_OUTPUT
  GET_ALLOCATION: ASANA_GET_ALLOCATION_OUTPUT
  GET_ALLOCATIONS: ASANA_GET_ALLOCATIONS_OUTPUT
  GET_ATTACHMENT: ASANA_GET_ATTACHMENT_OUTPUT
  GET_AUDIT_LOG_EVENTS: ASANA_GET_AUDIT_LOG_EVENTS_OUTPUT
  GET_A_PROJECT: ASANA_GET_A_PROJECT_OUTPUT
  GET_A_TASK: ASANA_GET_A_TASK_OUTPUT
  GET_A_USER_TASK_LIST: ASANA_GET_A_USER_TASK_LIST_OUTPUT
  GET_CURRENT_USER: ASANA_GET_CURRENT_USER_OUTPUT
  GET_CUSTOM_FIELD: ASANA_GET_CUSTOM_FIELD_OUTPUT
  GET_CUSTOM_FIELDS_FOR_WORKSPACE: ASANA_GET_CUSTOM_FIELDS_FOR_WORKSPACE_OUTPUT
  GET_EVENTS: ASANA_GET_EVENTS_OUTPUT
  GET_GOAL: ASANA_GET_GOAL_OUTPUT
  GET_GOALS: ASANA_GET_GOALS_OUTPUT
  GET_GOAL_RELATIONSHIPS: ASANA_GET_GOAL_RELATIONSHIPS_OUTPUT
  GET_MEMBERSHIPS: ASANA_GET_MEMBERSHIPS_OUTPUT
  GET_MULTIPLE_PROJECTS: ASANA_GET_MULTIPLE_PROJECTS_OUTPUT
  GET_MULTIPLE_TASKS: ASANA_GET_MULTIPLE_TASKS_OUTPUT
  GET_MULTIPLE_USERS: ASANA_GET_MULTIPLE_USERS_OUTPUT
  GET_MULTIPLE_WORKSPACES: ASANA_GET_MULTIPLE_WORKSPACES_OUTPUT
  GET_PORTFOLIO: ASANA_GET_PORTFOLIO_OUTPUT
  GET_PORTFOLIOS: ASANA_GET_PORTFOLIOS_OUTPUT
  GET_PORTFOLIO_ITEMS: ASANA_GET_PORTFOLIO_ITEMS_OUTPUT
  GET_PORTFOLIO_MEMBERSHIPS: ASANA_GET_PORTFOLIO_MEMBERSHIPS_OUTPUT
  GET_PROJECTS_FOR_TEAM: ASANA_GET_PROJECTS_FOR_TEAM_OUTPUT
  GET_PROJECT_BRIEF: ASANA_GET_PROJECT_BRIEF_OUTPUT
  GET_PROJECT_MEMBERSHIPS: ASANA_GET_PROJECT_MEMBERSHIPS_OUTPUT
  GET_PROJECT_STATUS: ASANA_GET_PROJECT_STATUS_OUTPUT
  GET_PROJECT_STATUS_UPDATES: ASANA_GET_PROJECT_STATUS_UPDATES_OUTPUT
  GET_PROJECT_TEMPLATES: ASANA_GET_PROJECT_TEMPLATES_OUTPUT
  GET_SECTION: ASANA_GET_SECTION_OUTPUT
  GET_SECTIONS_IN_PROJECT: ASANA_GET_SECTIONS_IN_PROJECT_OUTPUT
  GET_STATUS_UPDATES: ASANA_GET_STATUS_UPDATES_OUTPUT
  GET_STORIES_FOR_TASK: ASANA_GET_STORIES_FOR_TASK_OUTPUT
  GET_STORY: ASANA_GET_STORY_OUTPUT
  GET_TAG: ASANA_GET_TAG_OUTPUT
  GET_TAGS: ASANA_GET_TAGS_OUTPUT
  GET_TASKS_FROM_A_PROJECT: ASANA_GET_TASKS_FROM_A_PROJECT_OUTPUT
  GET_TASK_ATTACHMENTS: ASANA_GET_TASK_ATTACHMENTS_OUTPUT
  GET_TASK_SUBTASKS: ASANA_GET_TASK_SUBTASKS_OUTPUT
  GET_TASK_TEMPLATES: ASANA_GET_TASK_TEMPLATES_OUTPUT
  GET_TEAM: ASANA_GET_TEAM_OUTPUT
  GET_TEAMS_IN_WORKSPACE: ASANA_GET_TEAMS_IN_WORKSPACE_OUTPUT
  GET_TEAM_MEMBERSHIPS: ASANA_GET_TEAM_MEMBERSHIPS_OUTPUT
  GET_TIME_PERIODS: ASANA_GET_TIME_PERIODS_OUTPUT
  GET_TYPEAHEAD_OBJECTS: ASANA_GET_TYPEAHEAD_OBJECTS_OUTPUT
  GET_USER: ASANA_GET_USER_OUTPUT
  GET_USERS_FOR_TEAM: ASANA_GET_USERS_FOR_TEAM_OUTPUT
  GET_USERS_FOR_WORKSPACE: ASANA_GET_USERS_FOR_WORKSPACE_OUTPUT
  GET_WORKSPACE: ASANA_GET_WORKSPACE_OUTPUT
  GET_WORKSPACE_MEMBERSHIPS: ASANA_GET_WORKSPACE_MEMBERSHIPS_OUTPUT
  GET_WORKSPACE_PROJECTS: ASANA_GET_WORKSPACE_PROJECTS_OUTPUT
  INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD: ASANA_INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD_OUTPUT
  REMOVE_FOLLOWER_FROM_TASK: ASANA_REMOVE_FOLLOWER_FROM_TASK_OUTPUT
  SUBMIT_PARALLEL_REQUESTS: ASANA_SUBMIT_PARALLEL_REQUESTS_OUTPUT
  UPDATE_ALLOCATION: ASANA_UPDATE_ALLOCATION_OUTPUT
  UPDATE_A_TASK: ASANA_UPDATE_A_TASK_OUTPUT
  UPDATE_CUSTOM_FIELD: ASANA_UPDATE_CUSTOM_FIELD_OUTPUT
  UPDATE_ENUM_OPTION: ASANA_UPDATE_ENUM_OPTION_OUTPUT
  UPDATE_PROJECT: ASANA_UPDATE_PROJECT_OUTPUT
  UPDATE_TAG: ASANA_UPDATE_TAG_OUTPUT
  UPDATE_TEAM: ASANA_UPDATE_TEAM_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of ASANA's TASK_TRIGGER trigger payload.
 */
type ASANA_TASK_TRIGGER_PAYLOAD = {
  /**
   * Events
   * @description List of events that triggered the webhook
   */
  events?: unknown[];
};

/**
 * Map of Composio's ASANA toolkit.
 */
export const ASANA = {
  slug: "asana",
  tools: {
    /**
     * Tool to add followers to a task in asana. use this tool when you need to add one or more users as followers to a specific task. this will notify them of updates to the task.
     */
    ADD_FOLLOWERS_TO_TASK: "ASANA_ADD_FOLLOWERS_TO_TASK",
    /**
     * Tool to add a supporting goal relationship to a goal. use when you want to link a project, task, portfolio, or another goal as a supporting resource to a specific goal in asana.
     */
    ADD_SUPPORTING_RELATIONSHIP: "ASANA_ADD_SUPPORTING_RELATIONSHIP",
    /**
     * Adds an existing task to a section, optionally positioning it before or after another task in that section; if no position is specified, the task is added to the end.
     */
    ADD_TASK_TO_SECTION: "ASANA_ADD_TASK_TO_SECTION",
    /**
     * Creates a new allocation. use when you need to schedule or assign a specific amount of a user's time per week to a task or project within a defined period.
     */
    CREATE_ALLOCATION: "ASANA_CREATE_ALLOCATION",
    /**
     * Tool to upload an attachment to a task. use when you need to attach a file to a specific task in asana.
     */
    CREATE_ATTACHMENT_FOR_TASK: "ASANA_CREATE_ATTACHMENT_FOR_TASK",
    /**
     * Creates a new asana project, requiring either a `workspace` or `team` gid for association, and returns the full project details.
     */
    CREATE_A_PROJECT: "ASANA_CREATE_A_PROJECT",
    /**
     * Creates a new tag, with properties like name and color defined in the request body, within a specific asana workspace (using `workspace gid`); this tag helps categorize tasks, is confined to the workspace, and is not automatically applied to tasks.
     */
    CREATE_A_TAG_IN_A_WORKSPACE: "ASANA_CREATE_A_TAG_IN_A_WORKSPACE",
    /**
     * Creates a new asana task; requires 'workspace', 'parent', or 'projects' for association, and 'followers', 'projects', 'tags' are set only at creation.
     */
    CREATE_A_TASK: "ASANA_CREATE_A_TASK",
    /**
     * Tool to create a new custom field in a workspace. use when you need to define a new field for tracking specific information within asana tasks.
     */
    CREATE_CUSTOM_FIELD: "ASANA_CREATE_CUSTOM_FIELD",
    /**
     * Tool to create a new enum option for a custom field in asana. use this when you need to add a new selectable option to an existing custom field.
     */
    CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD: "ASANA_CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD",
    /**
     * Tool to create a new status update on a project. use when you need to communicate the current status, progress, or any blockers related to a specific project.
     */
    CREATE_PROJECT_STATUS_UPDATE: "ASANA_CREATE_PROJECT_STATUS_UPDATE",
    /**
     * Creates a new section in a project, optionally positioned relative to an existing section in the same project, and returns the full record of the new section.
     */
    CREATE_SECTION_IN_PROJECT: "ASANA_CREATE_SECTION_IN_PROJECT",
    /**
     * Creates a new asana subtask under an existing parent task (`task gid`); `due on` and `due at` are mutually exclusive and cannot be set simultaneously.
     */
    CREATE_SUBTASK: "ASANA_CREATE_SUBTASK",
    /**
     * Adds a new text comment (story) to an existing asana task, appearing in its activity feed.
     */
    CREATE_TASK_COMMENT: "ASANA_CREATE_TASK_COMMENT",
    /**
     * Tool to create a new team in an asana workspace. use when you need to establish a new team for collaboration.
     */
    CREATE_TEAM: "ASANA_CREATE_TEAM",
    /**
     * Tool to delete an allocation by its id. use this when you need to remove a specific resource allocation in asana.
     */
    DELETE_ALLOCATION: "ASANA_DELETE_ALLOCATION",
    /**
     * Tool to delete an attachment by its globally unique identifier. use when you need to remove an existing attachment from asana.
     */
    DELETE_ATTACHMENT: "ASANA_DELETE_ATTACHMENT",
    /**
     * Tool to delete a custom field by its globally unique identifier. use when you need to remove an existing custom field from asana.
     */
    DELETE_CUSTOM_FIELD: "ASANA_DELETE_CUSTOM_FIELD",
    /**
     * Delete a project.
     */
    DELETE_PROJECT: "ASANA_DELETE_PROJECT",
    /**
     * Tool to delete a specific tag by its gid. use when you need to remove an existing tag from asana.
     */
    DELETE_TAG: "ASANA_DELETE_TAG",
    /**
     * Delete a task.
     */
    DELETE_TASK: "ASANA_DELETE_TASK",
    /**
     * Duplicate a project.
     */
    DUPLICATE_PROJECT: "ASANA_DUPLICATE_PROJECT",
    /**
     * Duplicate a task
     */
    DUPLICATE_TASK: "ASANA_DUPLICATE_TASK",
    /**
     * Get an allocation by id. use when you need to retrieve the details of a specific allocation.
     */
    GET_ALLOCATION: "ASANA_GET_ALLOCATION",
    /**
     * Tool to get multiple allocations. use when you need to retrieve a list of allocations, optionally filtered by project, user, or workspace.
     */
    GET_ALLOCATIONS: "ASANA_GET_ALLOCATIONS",
    /**
     * Tool to get a single attachment by its globally unique identifier. use when you need to retrieve details about a specific file attached to a task or project.
     */
    GET_ATTACHMENT: "ASANA_GET_ATTACHMENT",
    /**
     * Tool to get audit log events for a workspace. use when you need to retrieve a log of actions performed within a specific asana workspace.
     */
    GET_AUDIT_LOG_EVENTS: "ASANA_GET_AUDIT_LOG_EVENTS",
    /**
     * Retrieves a specific asana project by its `project gid`, with an option to include additional fields for comprehensive details using `opt fields`; this action does not return tasks within the project.
     */
    GET_A_PROJECT: "ASANA_GET_A_PROJECT",
    /**
     * Retrieves full details for a specified task gid accessible by the user; use `opt fields` to customize returned data.
     */
    GET_A_TASK: "ASANA_GET_A_TASK",
    /**
     * Retrieves a specific user's task list from asana by its `user task list gid`, optionally returning extended details like name, owner, and workspace if specified in `opt fields`.
     */
    GET_A_USER_TASK_LIST: "ASANA_GET_A_USER_TASK_LIST",
    /**
     * Retrieves the authenticated user's full record, including accessible workspaces, often used as an initial call to establish user context for subsequent operations.
     */
    GET_CURRENT_USER: "ASANA_GET_CURRENT_USER",
    /**
     * Tool to get a single custom field by its globally unique identifier. use when you need to retrieve the complete metadata and properties of a specific custom field in asana.
     */
    GET_CUSTOM_FIELD: "ASANA_GET_CUSTOM_FIELD",
    /**
     * Tool to get all custom fields in a workspace. use when you need to retrieve a list of custom fields associated with a specific workspace.
     */
    GET_CUSTOM_FIELDS_FOR_WORKSPACE: "ASANA_GET_CUSTOM_FIELDS_FOR_WORKSPACE",
    /**
     * Retrieve events on a resource to monitor changes. use when you need to track activity or changes related to a specific asana resource like a task, project, or tag.
     */
    GET_EVENTS: "ASANA_GET_EVENTS",
    /**
     * Retrieve the full record for a single goal by its gid.
     */
    GET_GOAL: "ASANA_GET_GOAL",
    /**
     * Tool to retrieve multiple goals. use when you need to get a list of goals, optionally filtered by workspace, team, portfolio, project, time period, or archived status.
     */
    GET_GOALS: "ASANA_GET_GOALS",
    /**
     * Tool to retrieve goal relationships. use when you need to get the relationships associated with a specific goal in asana.
     */
    GET_GOAL_RELATIONSHIPS: "ASANA_GET_GOAL_RELATIONSHIPS",
    /**
     * Tool to retrieve memberships for goals, projects, portfolios, or custom fields. use this to find out who has access to a specific asana resource or what resources a specific user/team has access to.
     */
    GET_MEMBERSHIPS: "ASANA_GET_MEMBERSHIPS",
    /**
     * Returns a list of projects, optionally filtered by workspace, team, or archived status, supporting pagination for large datasets.
     */
    GET_MULTIPLE_PROJECTS: "ASANA_GET_MULTIPLE_PROJECTS",
    /**
     * Retrieves a list of tasks, allowing filtering by assignee (requires `workspace`), project, section, `completed since`, and `modified since`; `workspace` also requires `assignee`.
     */
    GET_MULTIPLE_TASKS: "ASANA_GET_MULTIPLE_TASKS",
    /**
     * Returns a list of users in an asana workspace or organization, optionally filtered by workspace or team gid, with support for pagination and specifying optional fields.
     */
    GET_MULTIPLE_USERS: "ASANA_GET_MULTIPLE_USERS",
    /**
     * Retrieves all workspaces accessible by the authenticated user, returning an empty list if the user has no accessible workspaces.
     */
    GET_MULTIPLE_WORKSPACES: "ASANA_GET_MULTIPLE_WORKSPACES",
    /**
     * Retrieve the full record for a single portfolio by its gid. use this when you need to get detailed information about a specific portfolio.
     */
    GET_PORTFOLIO: "ASANA_GET_PORTFOLIO",
    /**
     * Retrieve multiple portfolios. use when you need to list portfolios within a specific workspace, optionally filtered by owner.
     */
    GET_PORTFOLIOS: "ASANA_GET_PORTFOLIOS",
    /**
     * Retrieve items in a portfolio. use this to get a list of projects or other portfolios contained within a specific portfolio.
     */
    GET_PORTFOLIO_ITEMS: "ASANA_GET_PORTFOLIO_ITEMS",
    /**
     * Tool to retrieve multiple portfolio memberships. use this tool when you need to list memberships for a specific portfolio, a user within a portfolio, or a user across all portfolios in a workspace.
     */
    GET_PORTFOLIO_MEMBERSHIPS: "ASANA_GET_PORTFOLIO_MEMBERSHIPS",
    /**
     * Tool to get a list of projects for a specific team in asana. use when you need to retrieve project details associated with a team.
     */
    GET_PROJECTS_FOR_TEAM: "ASANA_GET_PROJECTS_FOR_TEAM",
    /**
     * Tool to retrieve a project's brief. use when you need to get the detailed explanation (what and why) of a project.
     */
    GET_PROJECT_BRIEF: "ASANA_GET_PROJECT_BRIEF",
    /**
     * Tool to retrieve memberships from a project. it can also be used to get memberships for a user across multiple projects or all projects in a workspace.
     */
    GET_PROJECT_MEMBERSHIPS: "ASANA_GET_PROJECT_MEMBERSHIPS",
    /**
     * Tool to retrieve the full record for a single project status by its gid. use when you need to get the details of a specific project status update.
     */
    GET_PROJECT_STATUS: "ASANA_GET_PROJECT_STATUS",
    /**
     * Tool to get status updates for a specific project. use when you need to retrieve the latest or historical status reports associated with an asana project.
     */
    GET_PROJECT_STATUS_UPDATES: "ASANA_GET_PROJECT_STATUS_UPDATES",
    /**
     * Tool to retrieve multiple project templates. use when you need to list available project templates in a workspace or team.
     */
    GET_PROJECT_TEMPLATES: "ASANA_GET_PROJECT_TEMPLATES",
    /**
     * Retrieve the full record for a single section by its gid. use this when you need to get details about a specific section within a project.
     */
    GET_SECTION: "ASANA_GET_SECTION",
    /**
     * Returns compact records for all sections (used to group tasks) in a specified project.
     */
    GET_SECTIONS_IN_PROJECT: "ASANA_GET_SECTIONS_IN_PROJECT",
    /**
     * Retrieve status updates from an object. use when you need to get the latest or historical status updates for a specific project, portfolio, or goal.
     */
    GET_STATUS_UPDATES: "ASANA_GET_STATUS_UPDATES",
    /**
     * Tool to get stories (comments, status updates, etc.) for a task. use when you need to retrieve the history or discussion associated with a specific task.
     */
    GET_STORIES_FOR_TASK: "ASANA_GET_STORIES_FOR_TASK",
    /**
     * Tool to retrieve a story. use when you need to get the complete record for a single story.
     */
    GET_STORY: "ASANA_GET_STORY",
    /**
     * Tool to get a single tag by its globally unique identifier. use when you need to retrieve detailed information about a specific tag.
     */
    GET_TAG: "ASANA_GET_TAG",
    /**
     * Get multiple tags in a workspace.
     */
    GET_TAGS: "ASANA_GET_TAGS",
    /**
     * Retrieves tasks from a specified asana project, allowing filtering by completion status and selection of optional fields for detailed responses.
     */
    GET_TASKS_FROM_A_PROJECT: "ASANA_GET_TASKS_FROM_A_PROJECT",
    /**
     * Tool to get the list of attachments for a given task, project, or project brief. use when you need to retrieve files attached to a specific asana object.
     */
    GET_TASK_ATTACHMENTS: "ASANA_GET_TASK_ATTACHMENTS",
    /**
     * Tool to retrieve multiple task subtasks from a workspace. use when you need to list or find available task subtasks.
     */
    GET_TASK_SUBTASKS: "ASANA_GET_TASK_SUBTASKS",
    /**
     * Tool to retrieve multiple task templates from a workspace. use when you need to list or find available task templates.
     */
    GET_TASK_TEMPLATES: "ASANA_GET_TASK_TEMPLATES",
    /**
     * Tool to retrieve details of a specific team by its gid. use when you need to fetch information about a particular team in asana.
     */
    GET_TEAM: "ASANA_GET_TEAM",
    /**
     * Returns the compact records for all teams in the workspace visible to the authorized user.
     */
    GET_TEAMS_IN_WORKSPACE: "ASANA_GET_TEAMS_IN_WORKSPACE",
    /**
     * Tool to retrieve compact team membership records. use when you need to list members of a team, teams a user belongs to, or all team memberships in a workspace.
     */
    GET_TEAM_MEMBERSHIPS: "ASANA_GET_TEAM_MEMBERSHIPS",
    /**
     * Tool to retrieve compact or full representations of time periods. use this when you need to fetch information about specific time periods, such as their start and end dates, display names, and parent periods.
     */
    GET_TIME_PERIODS: "ASANA_GET_TIME_PERIODS",
    /**
     * Tool to retrieve objects in a workspace via a typeahead search algorithm. use when you need to quickly find objects like tasks, projects, users, etc., based on a search string. this is useful for implementing auto-completion features.
     */
    GET_TYPEAHEAD_OBJECTS: "ASANA_GET_TYPEAHEAD_OBJECTS",
    /**
     * Get a user by their id.
     */
    GET_USER: "ASANA_GET_USER",
    /**
     * Get users in a team.
     */
    GET_USERS_FOR_TEAM: "ASANA_GET_USERS_FOR_TEAM",
    /**
     * Get users in a workspace or organization.
     */
    GET_USERS_FOR_WORKSPACE: "ASANA_GET_USERS_FOR_WORKSPACE",
    /**
     * Tool to retrieve details of a specific workspace by its gid. use when you need to get information about a particular asana workspace.
     */
    GET_WORKSPACE: "ASANA_GET_WORKSPACE",
    /**
     * Tool to retrieve the workspace memberships for a specific workspace. use when you need to list members of a workspace.
     */
    GET_WORKSPACE_MEMBERSHIPS: "ASANA_GET_WORKSPACE_MEMBERSHIPS",
    /**
     * Tool to retrieve the projects associated with a specific workspace. use when you need to list all projects within a given asana workspace.
     */
    GET_WORKSPACE_PROJECTS: "ASANA_GET_WORKSPACE_PROJECTS",
    /**
     * Tool to reorder an existing enum option or insert a new enum option for a custom field at a specific position. use when you need to manage the order of options in an enum custom field or add a new option at a defined place.
     */
    INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD: "ASANA_INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD",
    /**
     * Tool to remove one or more followers from a task. use when you need to update the list of users following a specific task.
     */
    REMOVE_FOLLOWER_FROM_TASK: "ASANA_REMOVE_FOLLOWER_FROM_TASK",
    /**
     * Tool to submit multiple asana api requests in parallel using the batch api. use when you need to perform several operations efficiently, such as fetching multiple tasks or creating multiple subtasks at once.
     */
    SUBMIT_PARALLEL_REQUESTS: "ASANA_SUBMIT_PARALLEL_REQUESTS",
    /**
     * Tool to update an existing allocation by its id. use this when you need to modify details like the start date, end date, effort, or assignee for an allocation.
     */
    UPDATE_ALLOCATION: "ASANA_UPDATE_ALLOCATION",
    /**
     * Updates attributes of an existing asana task identified by its task gid.
     */
    UPDATE_A_TASK: "ASANA_UPDATE_A_TASK",
    /**
     * Tool to update a custom field by its globally unique identifier. use when you need to modify properties of an existing custom field in asana.
     */
    UPDATE_CUSTOM_FIELD: "ASANA_UPDATE_CUSTOM_FIELD",
    /**
     * Tool to update an enum option for a custom field. use when you need to modify the name, color, or enabled status of an existing enum option.
     */
    UPDATE_ENUM_OPTION: "ASANA_UPDATE_ENUM_OPTION",
    /**
     * Update a project.
     */
    UPDATE_PROJECT: "ASANA_UPDATE_PROJECT",
    /**
     * Tool to update an existing tag by its globally unique identifier. use when you need to change the name or color of a tag.
     */
    UPDATE_TAG: "ASANA_UPDATE_TAG",
    /**
     * Tool to update details of an existing team. use when you need to change a team's name, description, or organization.
     */
    UPDATE_TEAM: "ASANA_UPDATE_TEAM",
  },
  triggerTypes: {
    /**
     * Task Trigger
     */
    TASK_TRIGGER: "ASANA_TASK_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "ASANA".
 */
export type ASANA_TRIGGER_PAYLOADS = {
  TASK_TRIGGER: ASANA_TASK_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "ASANA".
 */
export type ASANA_TRIGGER_EVENTS = {
  TASK_TRIGGER: TriggerEvent<ASANA_TASK_TRIGGER_PAYLOAD>
}
