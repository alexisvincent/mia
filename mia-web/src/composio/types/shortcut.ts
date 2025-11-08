// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SHORTCUT's SHORTCUT_CREATE_CATEGORY tool input.
 */
type SHORTCUT_CREATE_CATEGORY_INPUT = {
  /**
   * Color
   * Format: css-color
   * @description The hex color to be displayed with the Category (for example, "#ff0000").
   */
  color?: string;
  /**
   * External Id
   * @description This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.
   */
  external_id?: string;
  /**
   * Name
   * @description The name of the new Category.
   */
  name?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_CATEGORY tool output.
 */
type SHORTCUT_CREATE_CATEGORY_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_ENTITY_TEMPLATE tool input.
 */
type SHORTCUT_CREATE_ENTITY_TEMPLATE_INPUT = {
  /**
   * Author Id
   * Format: uuid
   * @description The id of the user creating this template.
   */
  author_id?: string;
  /**
   * Name
   * @description The name of the new entity template
   */
  name?: string;
  /**
   * Story  Contents  Custom  Fields
   * @description An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
   */
  story__contents__custom__fields?: {
      /**
       * Field Id
       * Format: uuid
       * @description The unique public ID for the CustomField.
       */
      field_id: string;
      /**
       * Value
       * @description A literal value for the CustomField. Currently ignored.
       */
      value?: string;
      /**
       * Value Id
       * Format: uuid
       * @description The unique public ID for the CustomFieldEnumValue.
       */
      value_id: string;
  }[];
  /**
   * Story  Contents  Deadline
   * Format: date-time
   * @description The due date of the story.
   */
  story__contents__deadline?: string;
  /**
   * Story  Contents  Description
   * @description The description of the story.
   */
  story__contents__description?: string;
  /**
   * Story  Contents  Epic  Id
   * @description The ID of the epic the to be populated.
   */
  story__contents__epic__id?: number;
  /**
   * Story  Contents  Estimate
   * @description The numeric point estimate to be populated.
   */
  story__contents__estimate?: number;
  /**
   * Story  Contents  External  Links
   * @description An array of external links to be populated.
   */
  story__contents__external__links?: string[];
  /**
   * Story  Contents  File  Ids
   * @description An array of the attached file IDs to be populated.
   */
  story__contents__file__ids?: number[];
  /**
   * Story  Contents  Follower  Ids
   * @description An array of UUIDs for any Members listed as Followers.
   */
  story__contents__follower__ids?: string[];
  /**
   * Story  Contents  Group  Id
   * Format: uuid
   * @description The ID of the group to be populated.
   */
  story__contents__group__id?: string;
  /**
   * Story  Contents  Iteration  Id
   * @description The ID of the iteration the to be populated.
   */
  story__contents__iteration__id?: number;
  /**
   * Story  Contents  Labels
   * @description An array of labels to be populated by the template.
   */
  story__contents__labels?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Story  Contents  Linked  File  Ids
   * @description An array of the linked file IDs to be populated.
   */
  story__contents__linked__file__ids?: number[];
  /**
   * Story  Contents  Name
   * @description The name of the story.
   */
  story__contents__name?: string;
  /**
   * Story  Contents  Owner  Ids
   * @description An array of UUIDs of the owners of this story.
   */
  story__contents__owner__ids?: string[];
  /**
   * Story  Contents  Project  Id
   * @description The ID of the project the story belongs to.
   */
  story__contents__project__id?: number;
  /**
   * Story  Contents  Story  Type
   * @description The type of story (feature, bug, chore).
   */
  story__contents__story__type?: string;
  /**
   * Story  Contents  Tasks
   * @description An array of tasks to be populated by the template.
   */
  story__contents__tasks?: {
      /**
       * Complete
       * @description True/false boolean indicating whether the Task is completed. Defaults to false.
       */
      complete?: boolean;
      /**
       * Description
       * @description The Task description.
       */
      description: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Owner Ids
       * @description An array of UUIDs for any members you want to add as Owners on this new Task.
       */
      owner_ids?: string[];
  }[];
  /**
   * Story  Contents  Workflow  State  Id
   * @description The ID of the workflow state to be populated.
   */
  story__contents__workflow__state__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_ENTITY_TEMPLATE tool output.
 */
type SHORTCUT_CREATE_ENTITY_TEMPLATE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_EPIC tool input.
 */
type SHORTCUT_CREATE_EPIC_INPUT = {
  /**
   * Completed At Override
   * Format: date-time
   * @description A manual override for the time/date the Epic was completed.
   */
  completed_at_override?: string;
  /**
   * Created At
   * Format: date-time
   * @description Defaults to the time/date it is created but can be set to reflect another date.
   */
  created_at?: string;
  /**
   * Deadline
   * Format: date-time
   * @description The Epic"s deadline.
   */
  deadline?: string;
  /**
   * Description
   * @description The Epic"s description.
   */
  description?: string;
  /**
   * Epic State Id
   * @description The ID of the Epic State.
   */
  epic_state_id?: number;
  /**
   * External Id
   * @description This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here.
   */
  external_id?: string;
  /**
   * Follower Ids
   * @description An array of UUIDs for any Members you want to add as Followers on this new Epic.
   */
  follower_ids?: string[];
  /**
   * Group Id
   * Format: uuid
   * @description `Deprecated` The ID of the group to associate with the epic. Use `group_ids`.
   */
  group_id?: string;
  /**
   * Group Ids
   * @description An array of UUIDS for Groups to which this Epic is related.
   */
  group_ids?: string[];
  /**
   * Labels
   * @description An array of Labels attached to the Epic.
   */
  labels?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Milestone Id
   * @description `Deprecated` The ID of the Milestone this Epic is related to. Use `objective_ids`.
   */
  milestone_id?: number;
  /**
   * Name
   * @description The Epic"s name.
   */
  name?: string;
  /**
   * Objective Ids
   * @description An array of IDs for Objectives to which this Epic is related.
   */
  objective_ids?: number[];
  /**
   * Owner Ids
   * @description An array of UUIDs for any members you want to add as Owners on this new Epic.
   */
  owner_ids?: string[];
  /**
   * Planned Start Date
   * Format: date-time
   * @description The Epic"s planned start date.
   */
  planned_start_date?: string;
  /**
   * Requested By Id
   * Format: uuid
   * @description The ID of the member that requested the epic.
   */
  requested_by_id?: string;
  /**
   * Started At Override
   * Format: date-time
   * @description A manual override for the time/date the Epic was started.
   */
  started_at_override?: string;
  /**
   * State
   * @description `Deprecated` The Epic"s state (to do, in progress, or done); will be ignored when `epic_state_id` is set.
   * @enum {string}
   */
  state?: "in progress" | "to do" | "done";
  /**
   * Updated At
   * Format: date-time
   * @description Defaults to the time/date it is created but can be set to reflect another date.
   */
  updated_at?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_EPIC tool output.
 */
type SHORTCUT_CREATE_EPIC_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_EPIC_COMMENT tool input.
 */
type SHORTCUT_CREATE_EPIC_COMMENT_INPUT = {
  /**
   * Author Id
   * Format: uuid
   * @description The Member ID of the Comment"s author. Defaults to the user identified by the API token.
   */
  author_id?: string;
  /**
   * Created At
   * Format: date-time
   * @description Defaults to the time/date the comment is created, but can be set to reflect another date.
   */
  created_at?: string;
  /**
   * Epic  Public  Id
   * @description The ID of the associated Epic.
   */
  epic__public__id?: number;
  /**
   * External Id
   * @description This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
   */
  external_id?: string;
  /**
   * Text
   * @description The comment text.
   */
  text?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Defaults to the time/date the comment is last updated, but can be set to reflect another date.
   */
  updated_at?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_EPIC_COMMENT tool output.
 */
type SHORTCUT_CREATE_EPIC_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_EPIC_COMMENT_COMMENT tool input.
 */
type SHORTCUT_CREATE_EPIC_COMMENT_COMMENT_INPUT = {
  /**
   * Author Id
   * Format: uuid
   * @description The Member ID of the Comment"s author. Defaults to the user identified by the API token.
   */
  author_id?: string;
  /**
   * Comment  Public  Id
   * @description The ID of the parent Epic Comment.
   */
  comment__public__id?: number;
  /**
   * Created At
   * Format: date-time
   * @description Defaults to the time/date the comment is created, but can be set to reflect another date.
   */
  created_at?: string;
  /**
   * Epic  Public  Id
   * @description The ID of the associated Epic.
   */
  epic__public__id?: number;
  /**
   * External Id
   * @description This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
   */
  external_id?: string;
  /**
   * Text
   * @description The comment text.
   */
  text?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Defaults to the time/date the comment is last updated, but can be set to reflect another date.
   */
  updated_at?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_EPIC_COMMENT_COMMENT tool output.
 */
type SHORTCUT_CREATE_EPIC_COMMENT_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_GROUP tool input.
 */
type SHORTCUT_CREATE_GROUP_INPUT = {
  /**
   * Color
   * Format: css-color
   * @description The color you wish to use for the Group in the system.
   */
  color?: string;
  /**
   * Color Key
   * @description The color key you wish to use for the Group in the system.
   * @enum {string}
   */
  color_key?: "blue" | "purple" | "midnight-blue" | "orange" | "yellow-green" | "brass" | "gray" | "fuchsia" | "yellow" | "pink" | "sky-blue" | "green" | "red" | "black" | "slate" | "turquoise";
  /**
   * Description
   * @description The description of the Group.
   */
  description?: string;
  /**
   * Display Icon Id
   * Format: uuid
   * @description The Icon id for the avatar of this Group.
   */
  display_icon_id?: string;
  /**
   * Member Ids
   * @description The Member ids to add to this Group.
   */
  member_ids?: string[];
  /**
   * Mention Name
   * @description The mention name of this Group.
   */
  mention_name?: string;
  /**
   * Name
   * @description The name of this Group.
   */
  name?: string;
  /**
   * Workflow Ids
   * @description The Workflow ids to add to the Group.
   */
  workflow_ids?: number[];
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_GROUP tool output.
 */
type SHORTCUT_CREATE_GROUP_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_ITERATION tool input.
 */
type SHORTCUT_CREATE_ITERATION_INPUT = {
  /**
   * Description
   * @description The description of the Iteration.
   */
  description?: string;
  /**
   * End Date
   * @description The date this Iteration ends, e.g. 2019-07-01.
   */
  end_date?: string;
  /**
   * Follower Ids
   * @description An array of UUIDs for any Members you want to add as Followers.
   */
  follower_ids?: string[];
  /**
   * Group Ids
   * @description An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI.
   */
  group_ids?: string[];
  /**
   * Labels
   * @description An array of Labels attached to the Iteration.
   */
  labels?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Name
   * @description The name of this Iteration.
   */
  name?: string;
  /**
   * Start Date
   * @description The date this Iteration begins, e.g. 2019-07-01.
   */
  start_date?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_ITERATION tool output.
 */
type SHORTCUT_CREATE_ITERATION_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_LABEL tool input.
 */
type SHORTCUT_CREATE_LABEL_INPUT = {
  /**
   * Color
   * Format: css-color
   * @description The hex color to be displayed with the Label (for example, "#ff0000").
   */
  color?: string;
  /**
   * Description
   * @description The description of the new Label.
   */
  description?: string;
  /**
   * External Id
   * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
   */
  external_id?: string;
  /**
   * Name
   * @description The name of the new Label.
   */
  name?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_LABEL tool output.
 */
type SHORTCUT_CREATE_LABEL_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_LINKED_FILE tool input.
 */
type SHORTCUT_CREATE_LINKED_FILE_INPUT = {
  /**
   * Content Type
   * @description The content type of the image (e.g. txt/plain).
   */
  content_type?: string;
  /**
   * Description
   * @description The description of the file.
   */
  description?: string;
  /**
   * Name
   * @description The name of the file.
   */
  name?: string;
  /**
   * Size
   * @description The filesize, if the integration provided it.
   */
  size?: number;
  /**
   * Story Id
   * @description The ID of the linked story.
   */
  story_id?: number;
  /**
   * Thumbnail Url
   * @description The URL of the thumbnail, if the integration provided it.
   */
  thumbnail_url?: string;
  /**
   * Type
   * @description The integration type of the file (e.g. google, dropbox, box).
   * @enum {string}
   */
  type?: "google" | "url" | "dropbox" | "box" | "onedrive";
  /**
   * Uploader Id
   * Format: uuid
   * @description The UUID of the member that uploaded the file.
   */
  uploader_id?: string;
  /**
   * Url
   * @description The URL of linked file.
   */
  url?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_LINKED_FILE tool output.
 */
type SHORTCUT_CREATE_LINKED_FILE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_MILESTONE tool input.
 */
type SHORTCUT_CREATE_MILESTONE_INPUT = {
  /**
   * Categories
   * @description An array of IDs of Categories attached to the Milestone.
   */
  categories?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Category (for example, "#ff0000").
       */
      color?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Category.
       */
      name: string;
  }[];
  /**
   * Completed At Override
   * Format: date-time
   * @description A manual override for the time/date the Milestone was completed.
   */
  completed_at_override?: string;
  /**
   * Description
   * @description The Milestone"s description.
   */
  description?: string;
  /**
   * Name
   * @description The name of the Milestone.
   */
  name?: string;
  /**
   * Started At Override
   * Format: date-time
   * @description A manual override for the time/date the Milestone was started.
   */
  started_at_override?: string;
  /**
   * State
   * @description The workflow state that the Milestone is in.
   * @enum {string}
   */
  state?: "in progress" | "to do" | "done";
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_MILESTONE tool output.
 */
type SHORTCUT_CREATE_MILESTONE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_MULTIPLE_STORIES tool input.
 */
type SHORTCUT_CREATE_MULTIPLE_STORIES_INPUT = {
  /**
   * Stories
   * @description An array of stories to be created.
   */
  stories?: {
      /**
       * Archived
       * @description Controls the story"s archived state.
       */
      archived?: boolean;
      /**
       * Comments
       * @description An array of comments to add to the story.
       */
      comments?: {
          /**
           * Author Id
           * Format: uuid
           * @description The Member ID of the Comment"s author. Defaults to the user identified by the API token.
           */
          author_id?: string;
          /**
           * Created At
           * Format: date-time
           * @description Defaults to the time/date the comment is created, but can be set to reflect another date.
           */
          created_at?: string;
          /**
           * External Id
           * @description This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
           */
          external_id?: string;
          /**
           * Parent Id
           * @description The ID of the Comment that this comment is threaded under.
           */
          parent_id?: number;
          /**
           * Text
           * @description The comment text.
           */
          text: string;
          /**
           * Updated At
           * Format: date-time
           * @description Defaults to the time/date the comment is last updated, but can be set to reflect another date.
           */
          updated_at?: string;
      }[];
      /**
       * Completed At Override
       * Format: date-time
       * @description A manual override for the time/date the Story was completed.
       */
      completed_at_override?: string;
      /**
       * Created At
       * Format: date-time
       * @description The time/date the Story was created.
       */
      created_at?: string;
      /**
       * Custom Fields
       * @description A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
       */
      custom_fields?: {
          /**
           * Field Id
           * Format: uuid
           * @description The unique public ID for the CustomField.
           */
          field_id: string;
          /**
           * Value
           * @description A literal value for the CustomField. Currently ignored.
           */
          value?: string;
          /**
           * Value Id
           * Format: uuid
           * @description The unique public ID for the CustomFieldEnumValue.
           */
          value_id: string;
      }[];
      /**
       * Deadline
       * Format: date-time
       * @description The due date of the story.
       */
      deadline?: string;
      /**
       * Description
       * @description The description of the story.
       */
      description?: string;
      /**
       * Epic Id
       * @description The ID of the epic the story belongs to.
       */
      epic_id?: number;
      /**
       * Estimate
       * @description The numeric point estimate of the story. Can also be null, which means unestimated.
       */
      estimate?: number;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * External Links
       * @description An array of External Links associated with this story.
       */
      external_links?: string[];
      /**
       * File Ids
       * @description An array of IDs of files attached to the story.
       */
      file_ids?: number[];
      /**
       * Follower Ids
       * @description An array of UUIDs of the followers of this story.
       */
      follower_ids?: string[];
      /**
       * Group Id
       * Format: uuid
       * @description The id of the group to associate with this story.
       */
      group_id?: string;
      /**
       * Iteration Id
       * @description The ID of the iteration the story belongs to.
       */
      iteration_id?: number;
      /**
       * Labels
       * @description An array of labels attached to the story.
       */
      labels?: {
          /**
           * Color
           * Format: css-color
           * @description The hex color to be displayed with the Label (for example, "#ff0000").
           */
          color?: string;
          /**
           * Description
           * @description The description of the new Label.
           */
          description?: string;
          /**
           * External Id
           * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
           */
          external_id?: string;
          /**
           * Name
           * @description The name of the new Label.
           */
          name: string;
      }[];
      /**
       * Linked File Ids
       * @description An array of IDs of linked files attached to the story.
       */
      linked_file_ids?: number[];
      /**
       * Move To
       * @description One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state.
       * @enum {string}
       */
      move_to?: "last" | "first";
      /**
       * Name
       * @description The name of the story.
       */
      name: string;
      /**
       * Owner Ids
       * @description An array of UUIDs of the owners of this story.
       */
      owner_ids?: string[];
      /**
       * Project Id
       * @description The ID of the project the story belongs to.
       */
      project_id?: number;
      /**
       * Requested By Id
       * Format: uuid
       * @description The ID of the member that requested the story.
       */
      requested_by_id?: string;
      /**
       * Source Task Id
       * @description Given this story was converted from a task in another story, this is the original task ID that was converted to this story.
       */
      source_task_id?: number;
      /**
       * Started At Override
       * Format: date-time
       * @description A manual override for the time/date the Story was started.
       */
      started_at_override?: string;
      /**
       * Story Links
       * @description An array of story links attached to the story.
       */
      story_links?: {
          /**
           * Object Id
           * @description The unique ID of the Story defined as object.
           */
          object_id?: number;
          /**
           * Subject Id
           * @description The unique ID of the Story defined as subject.
           */
          subject_id?: number;
          /**
           * Verb
           * @description How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to".
           * @enum {string}
           */
          verb: "blocks" | "duplicates" | "relates to";
      }[];
      /**
       * Story Template Id
       * Format: uuid
       * @description The id of the story template used to create this story, if applicable. This is just an association; no content from the story template is inherited by the story simply by setting this field.
       */
      story_template_id?: string;
      /**
       * Story Type
       * @description The type of story (feature, bug, chore).
       * @enum {string}
       */
      story_type?: "feature" | "chore" | "bug";
      /**
       * Sub Tasks
       * @description An array of sub tasks to create.
       */
      sub_tasks?: {
          /**
           * Name
           * @description The name of the SubTask.
           */
          name: string;
      }[];
      /**
       * Tasks
       * @description An array of tasks connected to the story.
       */
      tasks?: {
          /**
           * Complete
           * @description True/false boolean indicating whether the Task is completed. Defaults to false.
           */
          complete?: boolean;
          /**
           * Created At
           * Format: date-time
           * @description Defaults to the time/date the Task is created but can be set to reflect another creation time/date.
           */
          created_at?: string;
          /**
           * Description
           * @description The Task description.
           */
          description: string;
          /**
           * External Id
           * @description This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
           */
          external_id?: string;
          /**
           * Owner Ids
           * @description An array of UUIDs for any members you want to add as Owners on this new Task.
           */
          owner_ids?: string[];
          /**
           * Updated At
           * Format: date-time
           * @description Defaults to the time/date the Task is created in Shortcut but can be set to reflect another time/date.
           */
          updated_at?: string;
      }[];
      /**
       * Updated At
       * Format: date-time
       * @description The time/date the Story was updated.
       */
      updated_at?: string;
      /**
       * Workflow State Id
       * @description The ID of the workflow state the story will be in.
       */
      workflow_state_id?: number;
  }[];
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_MULTIPLE_STORIES tool output.
 */
type SHORTCUT_CREATE_MULTIPLE_STORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_OBJECTIVE tool input.
 */
type SHORTCUT_CREATE_OBJECTIVE_INPUT = {
  /**
   * Categories
   * @description An array of IDs of Categories attached to the Objective.
   */
  categories?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Category (for example, "#ff0000").
       */
      color?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Category.
       */
      name: string;
  }[];
  /**
   * Completed At Override
   * Format: date-time
   * @description A manual override for the time/date the Objective was completed.
   */
  completed_at_override?: string;
  /**
   * Description
   * @description The Objective"s description.
   */
  description?: string;
  /**
   * Name
   * @description The name of the Objective.
   */
  name?: string;
  /**
   * Started At Override
   * Format: date-time
   * @description A manual override for the time/date the Objective was started.
   */
  started_at_override?: string;
  /**
   * State
   * @description The workflow state that the Objective is in.
   * @enum {string}
   */
  state?: "in progress" | "to do" | "done";
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_OBJECTIVE tool output.
 */
type SHORTCUT_CREATE_OBJECTIVE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_PROJECT tool input.
 */
type SHORTCUT_CREATE_PROJECT_INPUT = {
  /**
   * Abbreviation
   * @description The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.
   */
  abbreviation?: string;
  /**
   * Color
   * Format: css-color
   * @description The color you wish to use for the Project in the system.
   */
  color?: string;
  /**
   * Created At
   * Format: date-time
   * @description Defaults to the time/date it is created but can be set to reflect another date.
   */
  created_at?: string;
  /**
   * Description
   * @description The Project description.
   */
  description?: string;
  /**
   * External Id
   * @description This field can be set to another unique ID. In the case that the Project has been imported from another tool, the ID in the other tool can be indicated here.
   */
  external_id?: string;
  /**
   * Follower Ids
   * @description An array of UUIDs for any members you want to add as Owners on this new Epic.
   */
  follower_ids?: string[];
  /**
   * Iteration Length
   * @description The number of weeks per iteration in this Project.
   */
  iteration_length?: number;
  /**
   * Name
   * @description The name of the Project.
   */
  name?: string;
  /**
   * Start Time
   * Format: date-time
   * @description The date at which the Project was started.
   */
  start_time?: string;
  /**
   * Team Id
   * @description The ID of the team the project belongs to.
   */
  team_id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Defaults to the time/date it is created but can be set to reflect another date.
   */
  updated_at?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_PROJECT tool output.
 */
type SHORTCUT_CREATE_PROJECT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_STORY tool input.
 */
type SHORTCUT_CREATE_STORY_INPUT = {
  /**
   * Archived
   * @description Controls the story"s archived state.
   */
  archived?: boolean;
  /**
   * Comments
   * @description An array of comments to add to the story.
   */
  comments?: {
      /**
       * Author Id
       * Format: uuid
       * @description The Member ID of the Comment"s author. Defaults to the user identified by the API token.
       */
      author_id?: string;
      /**
       * Created At
       * Format: date-time
       * @description Defaults to the time/date the comment is created, but can be set to reflect another date.
       */
      created_at?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Parent Id
       * @description The ID of the Comment that this comment is threaded under.
       */
      parent_id?: number;
      /**
       * Text
       * @description The comment text.
       */
      text: string;
      /**
       * Updated At
       * Format: date-time
       * @description Defaults to the time/date the comment is last updated, but can be set to reflect another date.
       */
      updated_at?: string;
  }[];
  /**
   * Completed At Override
   * Format: date-time
   * @description A manual override for the time/date the Story was completed.
   */
  completed_at_override?: string;
  /**
   * Created At
   * Format: date-time
   * @description The time/date the Story was created.
   */
  created_at?: string;
  /**
   * Custom Fields
   * @description A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
   */
  custom_fields?: {
      /**
       * Field Id
       * Format: uuid
       * @description The unique public ID for the CustomField.
       */
      field_id: string;
      /**
       * Value
       * @description A literal value for the CustomField. Currently ignored.
       */
      value?: string;
      /**
       * Value Id
       * Format: uuid
       * @description The unique public ID for the CustomFieldEnumValue.
       */
      value_id: string;
  }[];
  /**
   * Deadline
   * Format: date-time
   * @description The due date of the story.
   */
  deadline?: string;
  /**
   * Description
   * @description The description of the story.
   */
  description?: string;
  /**
   * Epic Id
   * @description The ID of the epic the story belongs to.
   */
  epic_id?: number;
  /**
   * Estimate
   * @description The numeric point estimate of the story. Can also be null, which means unestimated.
   */
  estimate?: number;
  /**
   * External Id
   * @description This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here.
   */
  external_id?: string;
  /**
   * External Links
   * @description An array of External Links associated with this story.
   */
  external_links?: string[];
  /**
   * File Ids
   * @description An array of IDs of files attached to the story.
   */
  file_ids?: number[];
  /**
   * Follower Ids
   * @description An array of UUIDs of the followers of this story.
   */
  follower_ids?: string[];
  /**
   * Group Id
   * Format: uuid
   * @description The id of the group to associate with this story.
   */
  group_id?: string;
  /**
   * Iteration Id
   * @description The ID of the iteration the story belongs to.
   */
  iteration_id?: number;
  /**
   * Labels
   * @description An array of labels attached to the story.
   */
  labels?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Linked File Ids
   * @description An array of IDs of linked files attached to the story.
   */
  linked_file_ids?: number[];
  /**
   * Move To
   * @description One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state.
   * @enum {string}
   */
  move_to?: "last" | "first";
  /**
   * Name
   * @description The name of the story.
   */
  name?: string;
  /**
   * Owner Ids
   * @description An array of UUIDs of the owners of this story.
   */
  owner_ids?: string[];
  /**
   * Project Id
   * @description The ID of the project the story belongs to.
   */
  project_id?: number;
  /**
   * Requested By Id
   * Format: uuid
   * @description The ID of the member that requested the story.
   */
  requested_by_id?: string;
  /**
   * Source Task Id
   * @description Given this story was converted from a task in another story, this is the original task ID that was converted to this story.
   */
  source_task_id?: number;
  /**
   * Started At Override
   * Format: date-time
   * @description A manual override for the time/date the Story was started.
   */
  started_at_override?: string;
  /**
   * Story Links
   * @description An array of story links attached to the story.
   */
  story_links?: {
      /**
       * Object Id
       * @description The unique ID of the Story defined as object.
       */
      object_id?: number;
      /**
       * Subject Id
       * @description The unique ID of the Story defined as subject.
       */
      subject_id?: number;
      /**
       * Verb
       * @description How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to".
       * @enum {string}
       */
      verb: "blocks" | "duplicates" | "relates to";
  }[];
  /**
   * Story Template Id
   * Format: uuid
   * @description The id of the story template used to create this story, if applicable. This is just an association; no content from the story template is inherited by the story simply by setting this field.
   */
  story_template_id?: string;
  /**
   * Story Type
   * @description The type of story (feature, bug, chore).
   * @enum {string}
   */
  story_type?: "feature" | "chore" | "bug";
  /**
   * Sub Tasks
   * @description An array of sub tasks to create.
   */
  sub_tasks?: {
      /**
       * Name
       * @description The name of the SubTask.
       */
      name: string;
  }[];
  /**
   * Tasks
   * @description An array of tasks connected to the story.
   */
  tasks?: {
      /**
       * Complete
       * @description True/false boolean indicating whether the Task is completed. Defaults to false.
       */
      complete?: boolean;
      /**
       * Created At
       * Format: date-time
       * @description Defaults to the time/date the Task is created but can be set to reflect another creation time/date.
       */
      created_at?: string;
      /**
       * Description
       * @description The Task description.
       */
      description: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Owner Ids
       * @description An array of UUIDs for any members you want to add as Owners on this new Task.
       */
      owner_ids?: string[];
      /**
       * Updated At
       * Format: date-time
       * @description Defaults to the time/date the Task is created in Shortcut but can be set to reflect another time/date.
       */
      updated_at?: string;
  }[];
  /**
   * Updated At
   * Format: date-time
   * @description The time/date the Story was updated.
   */
  updated_at?: string;
  /**
   * Workflow State Id
   * @description The ID of the workflow state the story will be in.
   */
  workflow_state_id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_STORY tool output.
 */
type SHORTCUT_CREATE_STORY_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_STORY_COMMENT tool input.
 */
type SHORTCUT_CREATE_STORY_COMMENT_INPUT = {
  /**
   * Author Id
   * Format: uuid
   * @description The Member ID of the Comment"s author. Defaults to the user identified by the API token.
   */
  author_id?: string;
  /**
   * Created At
   * Format: date-time
   * @description Defaults to the time/date the comment is created, but can be set to reflect another date.
   */
  created_at?: string;
  /**
   * External Id
   * @description This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
   */
  external_id?: string;
  /**
   * Parent Id
   * @description The ID of the Comment that this comment is threaded under.
   */
  parent_id?: number;
  /**
   * Story  Public  Id
   * @description The ID of the Story that the Comment is in.
   */
  story__public__id?: number;
  /**
   * Text
   * @description The comment text.
   */
  text?: string;
  /**
   * Updated At
   * Format: date-time
   * @description Defaults to the time/date the comment is last updated, but can be set to reflect another date.
   */
  updated_at?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_STORY_COMMENT tool output.
 */
type SHORTCUT_CREATE_STORY_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_STORY_FROM_TEMPLATE tool input.
 */
type SHORTCUT_CREATE_STORY_FROM_TEMPLATE_INPUT = {
  /**
   * Archived
   * @description Controls the story"s archived state.
   */
  archived?: boolean;
  /**
   * Comments
   * @description An array of comments to add to the story.
   */
  comments?: {
      /**
       * Author Id
       * Format: uuid
       * @description The Member ID of the Comment"s author. Defaults to the user identified by the API token.
       */
      author_id?: string;
      /**
       * Created At
       * Format: date-time
       * @description Defaults to the time/date the comment is created, but can be set to reflect another date.
       */
      created_at?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Parent Id
       * @description The ID of the Comment that this comment is threaded under.
       */
      parent_id?: number;
      /**
       * Text
       * @description The comment text.
       */
      text: string;
      /**
       * Updated At
       * Format: date-time
       * @description Defaults to the time/date the comment is last updated, but can be set to reflect another date.
       */
      updated_at?: string;
  }[];
  /**
   * Completed At Override
   * Format: date-time
   * @description A manual override for the time/date the Story was completed.
   */
  completed_at_override?: string;
  /**
   * Created At
   * Format: date-time
   * @description The time/date the Story was created.
   */
  created_at?: string;
  /**
   * Custom Fields
   * @description A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
   */
  custom_fields?: {
      /**
       * Field Id
       * Format: uuid
       * @description The unique public ID for the CustomField.
       */
      field_id: string;
      /**
       * Value
       * @description A literal value for the CustomField. Currently ignored.
       */
      value?: string;
      /**
       * Value Id
       * Format: uuid
       * @description The unique public ID for the CustomFieldEnumValue.
       */
      value_id: string;
  }[];
  /**
   * Custom Fields Add
   * @description A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. These will be added to any fields provided by the template. Cannot be used in conjunction with `custom_fields`.
   */
  custom_fields_add?: {
      /**
       * Field Id
       * Format: uuid
       * @description The unique public ID for the CustomField.
       */
      field_id: string;
      /**
       * Value
       * @description A literal value for the CustomField. Currently ignored.
       */
      value?: string;
      /**
       * Value Id
       * Format: uuid
       * @description The unique public ID for the CustomFieldEnumValue.
       */
      value_id: string;
  }[];
  /**
   * Custom Fields Remove
   * @description A map specifying a CustomField ID. These will be removed from any fields provided by the template. Cannot be used in conjunction with `custom_fields`.
   */
  custom_fields_remove?: {
      /**
       * Field Id
       * Format: uuid
       * @description The unique public ID for the CustomField.
       */
      field_id: string;
  }[];
  /**
   * Deadline
   * Format: date-time
   * @description The due date of the story.
   */
  deadline?: string;
  /**
   * Description
   * @description The description of the story.
   */
  description?: string;
  /**
   * Epic Id
   * @description The ID of the epic the story belongs to.
   */
  epic_id?: number;
  /**
   * Estimate
   * @description The numeric point estimate of the story. Can also be null, which means unestimated.
   */
  estimate?: number;
  /**
   * External Id
   * @description This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here.
   */
  external_id?: string;
  /**
   * External Links
   * @description An array of External Links associated with this story.
   */
  external_links?: string[];
  /**
   * External Links Add
   * @description An array of External Links associated with this story. These will be added to any links provided by the template. Cannot be used in conjunction with `external_links`.
   */
  external_links_add?: string[];
  /**
   * External Links Remove
   * @description An array of External Links associated with this story. These will be removed from any links provided by the template. Cannot be used in conjunction with `external_links`.
   */
  external_links_remove?: string[];
  /**
   * File Ids
   * @description An array of IDs of files attached to the story.
   */
  file_ids?: number[];
  /**
   * File Ids Add
   * @description An array of IDs of files attached to the story in addition to files from the template. Cannot be used in conjunction with `file_ids`.
   */
  file_ids_add?: number[];
  /**
   * File Ids Remove
   * @description An array of IDs of files removed from files from the template. Cannot be used in conjunction with `file_ids`.
   */
  file_ids_remove?: number[];
  /**
   * Follower Ids
   * @description An array of UUIDs of the followers of this story.
   */
  follower_ids?: string[];
  /**
   * Follower Ids Add
   * @description The UUIDs of the new followers to be added in addition to followers from the template. Cannot be used in conjunction with `follower_ids.`
   */
  follower_ids_add?: string[];
  /**
   * Follower Ids Remove
   * @description The UUIDs of the new followers to be removed from followers from the template. Cannot be used in conjunction with `follower_ids`.
   */
  follower_ids_remove?: string[];
  /**
   * Group Id
   * Format: uuid
   * @description The id of the group to associate with this story.
   */
  group_id?: string;
  /**
   * Iteration Id
   * @description The ID of the iteration the story belongs to.
   */
  iteration_id?: number;
  /**
   * Labels
   * @description An array of labels attached to the story.
   */
  labels?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Labels Add
   * @description An array of labels attached to the story in addition to the labels provided by the template. Cannot be used in conjunction with `labels`.
   */
  labels_add?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Labels Remove
   * @description An array of labels to remove from the labels provided by the template. Cannot be used in conjunction with `labels`.
   */
  labels_remove?: {
      /**
       * Name
       * @description The name of the new Label to remove.
       */
      name: string;
  }[];
  /**
   * Linked File Ids
   * @description An array of IDs of linked files attached to the story.
   */
  linked_file_ids?: number[];
  /**
   * Linked File Ids Add
   * @description An array of IDs of linked files attached to the story in addition to files from the template. Cannot be used in conjunction with `linked_files`.
   */
  linked_file_ids_add?: number[];
  /**
   * Linked File Ids Remove
   * @description An array of IDs of linked files removed from files from the template. Cannot be used in conjunction with `linked_files.`
   */
  linked_file_ids_remove?: number[];
  /**
   * Move To
   * @description One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state.
   * @enum {string}
   */
  move_to?: "last" | "first";
  /**
   * Name
   * @description The name of the story. Must be provided if the template does not provide a name.
   */
  name?: string;
  /**
   * Owner Ids
   * @description An array of UUIDs of the owners of this story.
   */
  owner_ids?: string[];
  /**
   * Owner Ids Add
   * @description The UUIDs of the new owners to be added in addition to owners from the template. Cannot be used in conjunction with `owners`.
   */
  owner_ids_add?: string[];
  /**
   * Owner Ids Remove
   * @description The UUIDs of the new owners to be removed from owners from the template. Cannot be used in conjunction with `owners`.
   */
  owner_ids_remove?: string[];
  /**
   * Project Id
   * @description The ID of the project the story belongs to.
   */
  project_id?: number;
  /**
   * Requested By Id
   * Format: uuid
   * @description The ID of the member that requested the story.
   */
  requested_by_id?: string;
  /**
   * Source Task Id
   * @description Given this story was converted from a task in another story, this is the original task ID that was converted to this story.
   */
  source_task_id?: number;
  /**
   * Started At Override
   * Format: date-time
   * @description A manual override for the time/date the Story was started.
   */
  started_at_override?: string;
  /**
   * Story Links
   * @description An array of story links attached to the story.
   */
  story_links?: {
      /**
       * Object Id
       * @description The unique ID of the Story defined as object.
       */
      object_id?: number;
      /**
       * Subject Id
       * @description The unique ID of the Story defined as subject.
       */
      subject_id?: number;
      /**
       * Verb
       * @description How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to".
       * @enum {string}
       */
      verb: "blocks" | "duplicates" | "relates to";
  }[];
  /**
   * Story Template Id
   * Format: uuid
   * @description The id of the story template used to create this story.
   */
  story_template_id?: string;
  /**
   * Story Type
   * @description The type of story (feature, bug, chore).
   * @enum {string}
   */
  story_type?: "feature" | "chore" | "bug";
  /**
   * Sub Tasks
   * @description An array of sub tasks to create.
   */
  sub_tasks?: {
      /**
       * Name
       * @description The name of the SubTask.
       */
      name: string;
  }[];
  /**
   * Tasks
   * @description An array of tasks connected to the story.
   */
  tasks?: {
      /**
       * Complete
       * @description True/false boolean indicating whether the Task is completed. Defaults to false.
       */
      complete?: boolean;
      /**
       * Created At
       * Format: date-time
       * @description Defaults to the time/date the Task is created but can be set to reflect another creation time/date.
       */
      created_at?: string;
      /**
       * Description
       * @description The Task description.
       */
      description: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Owner Ids
       * @description An array of UUIDs for any members you want to add as Owners on this new Task.
       */
      owner_ids?: string[];
      /**
       * Updated At
       * Format: date-time
       * @description Defaults to the time/date the Task is created in Shortcut but can be set to reflect another time/date.
       */
      updated_at?: string;
  }[];
  /**
   * Updated At
   * Format: date-time
   * @description The time/date the Story was updated.
   */
  updated_at?: string;
  /**
   * Workflow State Id
   * @description The ID of the workflow state the story will be in.
   */
  workflow_state_id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_STORY_FROM_TEMPLATE tool output.
 */
type SHORTCUT_CREATE_STORY_FROM_TEMPLATE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_STORY_LINK tool input.
 */
type SHORTCUT_CREATE_STORY_LINK_INPUT = {
  /**
   * Object Id
   * @description The ID of the object Story.
   */
  object_id?: number;
  /**
   * Subject Id
   * @description The ID of the subject Story.
   */
  subject_id?: number;
  /**
   * Verb
   * @description The type of link.
   * @enum {string}
   */
  verb?: "blocks" | "duplicates" | "relates to";
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_STORY_LINK tool output.
 */
type SHORTCUT_CREATE_STORY_LINK_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_STORY_REACTION tool input.
 */
type SHORTCUT_CREATE_STORY_REACTION_INPUT = {
  /**
   * Comment  Public  Id
   * @description The ID of the Comment.
   */
  comment__public__id?: number;
  /**
   * Emoji
   * @description The emoji short-code to add / remove. E.g. `:thumbsup::skin-tone-4:`.
   */
  emoji?: string;
  /**
   * Story  Public  Id
   * @description The ID of the Story that the Comment is in.
   */
  story__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_STORY_REACTION tool output.
 */
type SHORTCUT_CREATE_STORY_REACTION_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_CREATE_TASK tool input.
 */
type SHORTCUT_CREATE_TASK_INPUT = {
  /**
   * Complete
   * @description True/false boolean indicating whether the Task is completed. Defaults to false.
   */
  complete?: boolean;
  /**
   * Created At
   * Format: date-time
   * @description Defaults to the time/date the Task is created but can be set to reflect another creation time/date.
   */
  created_at?: string;
  /**
   * Description
   * @description The Task description.
   */
  description?: string;
  /**
   * External Id
   * @description This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
   */
  external_id?: string;
  /**
   * Owner Ids
   * @description An array of UUIDs for any members you want to add as Owners on this new Task.
   */
  owner_ids?: string[];
  /**
   * Story  Public  Id
   * @description The ID of the Story that the Task will be in.
   */
  story__public__id?: number;
  /**
   * Updated At
   * Format: date-time
   * @description Defaults to the time/date the Task is created in Shortcut but can be set to reflect another time/date.
   */
  updated_at?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_CREATE_TASK tool output.
 */
type SHORTCUT_CREATE_TASK_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_CATEGORY tool input.
 */
type SHORTCUT_DELETE_CATEGORY_INPUT = {
  /**
   * Category  Public  Id
   * @description The unique ID of the Category.
   */
  category__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_CATEGORY tool output.
 */
type SHORTCUT_DELETE_CATEGORY_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_CUSTOM_FIELD tool input.
 */
type SHORTCUT_DELETE_CUSTOM_FIELD_INPUT = {
  /**
   * Custom  Field  Public  Id
   * @description The unique ID of the CustomField.
   */
  custom__field__public__id?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_CUSTOM_FIELD tool output.
 */
type SHORTCUT_DELETE_CUSTOM_FIELD_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_ENTITY_TEMPLATE tool input.
 */
type SHORTCUT_DELETE_ENTITY_TEMPLATE_INPUT = {
  /**
   * Entity  Template  Public  Id
   * @description The unique ID of the entity template.
   */
  entity__template__public__id?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_ENTITY_TEMPLATE tool output.
 */
type SHORTCUT_DELETE_ENTITY_TEMPLATE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_EPIC tool input.
 */
type SHORTCUT_DELETE_EPIC_INPUT = {
  /**
   * Epic  Public  Id
   * @description The unique ID of the Epic.
   */
  epic__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_EPIC tool output.
 */
type SHORTCUT_DELETE_EPIC_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_EPIC_COMMENT tool input.
 */
type SHORTCUT_DELETE_EPIC_COMMENT_INPUT = {
  /**
   * Comment  Public  Id
   * @description The ID of the Comment.
   */
  comment__public__id?: number;
  /**
   * Epic  Public  Id
   * @description The ID of the associated Epic.
   */
  epic__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_EPIC_COMMENT tool output.
 */
type SHORTCUT_DELETE_EPIC_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_FILE tool input.
 */
type SHORTCUT_DELETE_FILE_INPUT = {
  /**
   * File  Public  Id
   * @description The File’s unique ID.
   */
  file__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_FILE tool output.
 */
type SHORTCUT_DELETE_FILE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_ITERATION tool input.
 */
type SHORTCUT_DELETE_ITERATION_INPUT = {
  /**
   * Iteration  Public  Id
   * @description The unique ID of the Iteration.
   */
  iteration__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_ITERATION tool output.
 */
type SHORTCUT_DELETE_ITERATION_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_LABEL tool input.
 */
type SHORTCUT_DELETE_LABEL_INPUT = {
  /**
   * Label  Public  Id
   * @description The unique ID of the Label.
   */
  label__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_LABEL tool output.
 */
type SHORTCUT_DELETE_LABEL_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_LINKED_FILE tool input.
 */
type SHORTCUT_DELETE_LINKED_FILE_INPUT = {
  /**
   * Linked  File  Public  Id
   * @description The unique identifier of the linked file.
   */
  linked__file__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_LINKED_FILE tool output.
 */
type SHORTCUT_DELETE_LINKED_FILE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_MILESTONE tool input.
 */
type SHORTCUT_DELETE_MILESTONE_INPUT = {
  /**
   * Milestone  Public  Id
   * @description The ID of the Milestone.
   */
  milestone__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_MILESTONE tool output.
 */
type SHORTCUT_DELETE_MILESTONE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_MULTIPLE_STORIES tool input.
 */
type SHORTCUT_DELETE_MULTIPLE_STORIES_INPUT = {
  /**
   * Story Ids
   * @description An array of IDs of Stories to delete.
   */
  story_ids?: number[];
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_MULTIPLE_STORIES tool output.
 */
type SHORTCUT_DELETE_MULTIPLE_STORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_OBJECTIVE tool input.
 */
type SHORTCUT_DELETE_OBJECTIVE_INPUT = {
  /**
   * Objective  Public  Id
   * @description The ID of the Objective.
   */
  objective__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_OBJECTIVE tool output.
 */
type SHORTCUT_DELETE_OBJECTIVE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_PROJECT tool input.
 */
type SHORTCUT_DELETE_PROJECT_INPUT = {
  /**
   * Project  Public  Id
   * @description The unique ID of the Project.
   */
  project__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_PROJECT tool output.
 */
type SHORTCUT_DELETE_PROJECT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_STORY tool input.
 */
type SHORTCUT_DELETE_STORY_INPUT = {
  /**
   * Story  Public  Id
   * @description The ID of the Story.
   */
  story__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_STORY tool output.
 */
type SHORTCUT_DELETE_STORY_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_STORY_COMMENT tool input.
 */
type SHORTCUT_DELETE_STORY_COMMENT_INPUT = {
  /**
   * Comment  Public  Id
   * @description The ID of the Comment.
   */
  comment__public__id?: number;
  /**
   * Story  Public  Id
   * @description The ID of the Story that the Comment is in.
   */
  story__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_STORY_COMMENT tool output.
 */
type SHORTCUT_DELETE_STORY_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_STORY_LINK tool input.
 */
type SHORTCUT_DELETE_STORY_LINK_INPUT = {
  /**
   * Story  Link  Public  Id
   * @description The unique ID of the Story Link.
   */
  story__link__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_STORY_LINK tool output.
 */
type SHORTCUT_DELETE_STORY_LINK_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_STORY_REACTION tool input.
 */
type SHORTCUT_DELETE_STORY_REACTION_INPUT = {
  /**
   * Comment  Public  Id
   * @description The ID of the Comment.
   */
  comment__public__id?: number;
  /**
   * Emoji
   * @description The emoji short-code to add / remove. E.g. `:thumbsup::skin-tone-4:`.
   */
  emoji?: string;
  /**
   * Story  Public  Id
   * @description The ID of the Story that the Comment is in.
   */
  story__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_STORY_REACTION tool output.
 */
type SHORTCUT_DELETE_STORY_REACTION_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DELETE_TASK tool input.
 */
type SHORTCUT_DELETE_TASK_INPUT = {
  /**
   * Story  Public  Id
   * @description The unique ID of the Story this Task is associated with.
   */
  story__public__id?: number;
  /**
   * Task  Public  Id
   * @description The unique ID of the Task.
   */
  task__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_DELETE_TASK tool output.
 */
type SHORTCUT_DELETE_TASK_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DISABLE_ITERATIONS tool input.
 */
type SHORTCUT_DISABLE_ITERATIONS_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_DISABLE_ITERATIONS tool output.
 */
type SHORTCUT_DISABLE_ITERATIONS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_DISABLE_STORY_TEMPLATES tool input.
 */
type SHORTCUT_DISABLE_STORY_TEMPLATES_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_DISABLE_STORY_TEMPLATES tool output.
 */
type SHORTCUT_DISABLE_STORY_TEMPLATES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_ENABLE_ITERATIONS tool input.
 */
type SHORTCUT_ENABLE_ITERATIONS_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_ENABLE_ITERATIONS tool output.
 */
type SHORTCUT_ENABLE_ITERATIONS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_ENABLE_STORY_TEMPLATES tool input.
 */
type SHORTCUT_ENABLE_STORY_TEMPLATES_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_ENABLE_STORY_TEMPLATES tool output.
 */
type SHORTCUT_ENABLE_STORY_TEMPLATES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_CATEGORY tool input.
 */
type SHORTCUT_GET_CATEGORY_INPUT = {
  /**
   * Category  Public  Id
   * @description The unique ID of the Category.
   */
  category__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_CATEGORY tool output.
 */
type SHORTCUT_GET_CATEGORY_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_CURRENT_MEMBER_INFO tool input.
 */
type SHORTCUT_GET_CURRENT_MEMBER_INFO_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_GET_CURRENT_MEMBER_INFO tool output.
 */
type SHORTCUT_GET_CURRENT_MEMBER_INFO_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_CUSTOM_FIELD tool input.
 */
type SHORTCUT_GET_CUSTOM_FIELD_INPUT = {
  /**
   * Custom  Field  Public  Id
   * @description The unique ID of the CustomField.
   */
  custom__field__public__id?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_CUSTOM_FIELD tool output.
 */
type SHORTCUT_GET_CUSTOM_FIELD_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_ENTITY_TEMPLATE tool input.
 */
type SHORTCUT_GET_ENTITY_TEMPLATE_INPUT = {
  /**
   * Entity  Template  Public  Id
   * @description The unique ID of the entity template.
   */
  entity__template__public__id?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_ENTITY_TEMPLATE tool output.
 */
type SHORTCUT_GET_ENTITY_TEMPLATE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_EPIC tool input.
 */
type SHORTCUT_GET_EPIC_INPUT = {
  /**
   * Epic  Public  Id
   * @description The unique ID of the Epic.
   */
  epic__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_EPIC tool output.
 */
type SHORTCUT_GET_EPIC_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_EPIC_COMMENT tool input.
 */
type SHORTCUT_GET_EPIC_COMMENT_INPUT = {
  /**
   * Comment  Public  Id
   * @description The ID of the Comment.
   */
  comment__public__id?: number;
  /**
   * Epic  Public  Id
   * @description The ID of the associated Epic.
   */
  epic__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_EPIC_COMMENT tool output.
 */
type SHORTCUT_GET_EPIC_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_EPIC_WORKFLOW tool input.
 */
type SHORTCUT_GET_EPIC_WORKFLOW_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_GET_EPIC_WORKFLOW tool output.
 */
type SHORTCUT_GET_EPIC_WORKFLOW_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_EXTERNAL_LINK_STORIES tool input.
 */
type SHORTCUT_GET_EXTERNAL_LINK_STORIES_INPUT = {
  /**
   * External Link
   * @description The external link associated with one or more stories.
   */
  external_link?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_EXTERNAL_LINK_STORIES tool output.
 */
type SHORTCUT_GET_EXTERNAL_LINK_STORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_FILE tool input.
 */
type SHORTCUT_GET_FILE_INPUT = {
  /**
   * File  Public  Id
   * @description The File’s unique ID.
   */
  file__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_FILE tool output.
 */
type SHORTCUT_GET_FILE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_GROUP tool input.
 */
type SHORTCUT_GET_GROUP_INPUT = {
  /**
   * Group  Public  Id
   * @description The unique ID of the Group.
   */
  group__public__id?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_GROUP tool output.
 */
type SHORTCUT_GET_GROUP_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_ITERATION tool input.
 */
type SHORTCUT_GET_ITERATION_INPUT = {
  /**
   * Iteration  Public  Id
   * @description The unique ID of the Iteration.
   */
  iteration__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_ITERATION tool output.
 */
type SHORTCUT_GET_ITERATION_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_KEY_RESULT tool input.
 */
type SHORTCUT_GET_KEY_RESULT_INPUT = {
  /**
   * Key  Result  Public  Id
   * @description The ID of the Key Result.
   */
  key__result__public__id?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_KEY_RESULT tool output.
 */
type SHORTCUT_GET_KEY_RESULT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_LABEL tool input.
 */
type SHORTCUT_GET_LABEL_INPUT = {
  /**
   * Label  Public  Id
   * @description The unique ID of the Label.
   */
  label__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_LABEL tool output.
 */
type SHORTCUT_GET_LABEL_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_LINKED_FILE tool input.
 */
type SHORTCUT_GET_LINKED_FILE_INPUT = {
  /**
   * Linked  File  Public  Id
   * @description The unique identifier of the linked file.
   */
  linked__file__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_LINKED_FILE tool output.
 */
type SHORTCUT_GET_LINKED_FILE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_MEMBER tool input.
 */
type SHORTCUT_GET_MEMBER_INPUT = {
  /**
   * Member  Public  Id
   * @description The Member"s unique ID.
   */
  member__public__id?: string;
  /**
   * Org  Public  Id
   * @description The unique ID of the Organization to limit the lookup to.
   */
  org__public__id?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_MEMBER tool output.
 */
type SHORTCUT_GET_MEMBER_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_MILESTONE tool input.
 */
type SHORTCUT_GET_MILESTONE_INPUT = {
  /**
   * Milestone  Public  Id
   * @description The ID of the Milestone.
   */
  milestone__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_MILESTONE tool output.
 */
type SHORTCUT_GET_MILESTONE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_OBJECTIVE tool input.
 */
type SHORTCUT_GET_OBJECTIVE_INPUT = {
  /**
   * Objective  Public  Id
   * @description The ID of the Objective.
   */
  objective__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_OBJECTIVE tool output.
 */
type SHORTCUT_GET_OBJECTIVE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_PROJECT tool input.
 */
type SHORTCUT_GET_PROJECT_INPUT = {
  /**
   * Project  Public  Id
   * @description The unique ID of the Project.
   */
  project__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_PROJECT tool output.
 */
type SHORTCUT_GET_PROJECT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_REPOSITORY tool input.
 */
type SHORTCUT_GET_REPOSITORY_INPUT = {
  /**
   * Repo  Public  Id
   * @description The unique ID of the Repository.
   */
  repo__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_REPOSITORY tool output.
 */
type SHORTCUT_GET_REPOSITORY_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_STORY tool input.
 */
type SHORTCUT_GET_STORY_INPUT = {
  /**
   * Story  Public  Id
   * @description The ID of the Story.
   */
  story__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_STORY tool output.
 */
type SHORTCUT_GET_STORY_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_STORY_COMMENT tool input.
 */
type SHORTCUT_GET_STORY_COMMENT_INPUT = {
  /**
   * Comment  Public  Id
   * @description The ID of the Comment.
   */
  comment__public__id?: number;
  /**
   * Story  Public  Id
   * @description The ID of the Story that the Comment is in.
   */
  story__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_STORY_COMMENT tool output.
 */
type SHORTCUT_GET_STORY_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_STORY_LINK tool input.
 */
type SHORTCUT_GET_STORY_LINK_INPUT = {
  /**
   * Story  Link  Public  Id
   * @description The unique ID of the Story Link.
   */
  story__link__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_STORY_LINK tool output.
 */
type SHORTCUT_GET_STORY_LINK_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_TASK tool input.
 */
type SHORTCUT_GET_TASK_INPUT = {
  /**
   * Story  Public  Id
   * @description The unique ID of the Story this Task is associated with.
   */
  story__public__id?: number;
  /**
   * Task  Public  Id
   * @description The unique ID of the Task.
   */
  task__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_TASK tool output.
 */
type SHORTCUT_GET_TASK_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_GET_WORKFLOW tool input.
 */
type SHORTCUT_GET_WORKFLOW_INPUT = {
  /**
   * Workflow  Public  Id
   * @description The ID of the Workflow.
   */
  workflow__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_GET_WORKFLOW tool output.
 */
type SHORTCUT_GET_WORKFLOW_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_CATEGORIES tool input.
 */
type SHORTCUT_LIST_CATEGORIES_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_CATEGORIES tool output.
 */
type SHORTCUT_LIST_CATEGORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_CATEGORY_MILESTONES tool input.
 */
type SHORTCUT_LIST_CATEGORY_MILESTONES_INPUT = {
  /**
   * Category  Public  Id
   * @description The unique ID of the Category.
   */
  category__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_CATEGORY_MILESTONES tool output.
 */
type SHORTCUT_LIST_CATEGORY_MILESTONES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_CATEGORY_OBJECTIVES tool input.
 */
type SHORTCUT_LIST_CATEGORY_OBJECTIVES_INPUT = {
  /**
   * Category  Public  Id
   * @description The unique ID of the Category.
   */
  category__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_CATEGORY_OBJECTIVES tool output.
 */
type SHORTCUT_LIST_CATEGORY_OBJECTIVES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_CUSTOM_FIELDS tool input.
 */
type SHORTCUT_LIST_CUSTOM_FIELDS_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_CUSTOM_FIELDS tool output.
 */
type SHORTCUT_LIST_CUSTOM_FIELDS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_ENTITY_TEMPLATES tool input.
 */
type SHORTCUT_LIST_ENTITY_TEMPLATES_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_ENTITY_TEMPLATES tool output.
 */
type SHORTCUT_LIST_ENTITY_TEMPLATES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_EPICS tool input.
 */
type SHORTCUT_LIST_EPICS_INPUT = {
  /**
   * Includes Description
   * @description A true/false boolean indicating whether to return Epics with their descriptions.
   */
  includes_description?: boolean;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_EPICS tool output.
 */
type SHORTCUT_LIST_EPICS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_EPIC_COMMENTS tool input.
 */
type SHORTCUT_LIST_EPIC_COMMENTS_INPUT = {
  /**
   * Epic  Public  Id
   * @description The unique ID of the Epic.
   */
  epic__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_EPIC_COMMENTS tool output.
 */
type SHORTCUT_LIST_EPIC_COMMENTS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_EPIC_STORIES tool input.
 */
type SHORTCUT_LIST_EPIC_STORIES_INPUT = {
  /**
   * Epic  Public  Id
   * @description The unique ID of the Epic.
   */
  epic__public__id?: number;
  /**
   * Includes Description
   * @description A true/false boolean indicating whether to return Stories with their descriptions.
   */
  includes_description?: boolean;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_EPIC_STORIES tool output.
 */
type SHORTCUT_LIST_EPIC_STORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_FILES tool input.
 */
type SHORTCUT_LIST_FILES_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_FILES tool output.
 */
type SHORTCUT_LIST_FILES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_GROUPS tool input.
 */
type SHORTCUT_LIST_GROUPS_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_GROUPS tool output.
 */
type SHORTCUT_LIST_GROUPS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_GROUP_STORIES tool input.
 */
type SHORTCUT_LIST_GROUP_STORIES_INPUT = {
  /**
   * Group  Public  Id
   * @description The unique ID of the Group.
   */
  group__public__id?: string;
  /**
   * Limit
   * @description The maximum number of results to return. (Defaults to 1000, max 1000)
   */
  limit?: number;
  /**
   * Offset
   * @description The offset at which to begin returning results. (Defaults to 0)
   */
  offset?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_GROUP_STORIES tool output.
 */
type SHORTCUT_LIST_GROUP_STORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_ITERATIONS tool input.
 */
type SHORTCUT_LIST_ITERATIONS_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_ITERATIONS tool output.
 */
type SHORTCUT_LIST_ITERATIONS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_ITERATION_STORIES tool input.
 */
type SHORTCUT_LIST_ITERATION_STORIES_INPUT = {
  /**
   * Includes Description
   * @description A true/false boolean indicating whether to return Stories with their descriptions.
   */
  includes_description?: boolean;
  /**
   * Iteration  Public  Id
   * @description The unique ID of the Iteration.
   */
  iteration__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_ITERATION_STORIES tool output.
 */
type SHORTCUT_LIST_ITERATION_STORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_LABELS tool input.
 */
type SHORTCUT_LIST_LABELS_INPUT = {
  /**
   * Slim
   * @description A true/false boolean indicating if the slim versions of the Label should be returned.
   */
  slim?: boolean;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_LABELS tool output.
 */
type SHORTCUT_LIST_LABELS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_LABEL_EPICS tool input.
 */
type SHORTCUT_LIST_LABEL_EPICS_INPUT = {
  /**
   * Label  Public  Id
   * @description The unique ID of the Label.
   */
  label__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_LABEL_EPICS tool output.
 */
type SHORTCUT_LIST_LABEL_EPICS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_LABEL_STORIES tool input.
 */
type SHORTCUT_LIST_LABEL_STORIES_INPUT = {
  /**
   * Includes Description
   * @description A true/false boolean indicating whether to return Stories with their descriptions.
   */
  includes_description?: boolean;
  /**
   * Label  Public  Id
   * @description The unique ID of the Label.
   */
  label__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_LABEL_STORIES tool output.
 */
type SHORTCUT_LIST_LABEL_STORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_LINKED_FILES tool input.
 */
type SHORTCUT_LIST_LINKED_FILES_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_LINKED_FILES tool output.
 */
type SHORTCUT_LIST_LINKED_FILES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_MEMBERS tool input.
 */
type SHORTCUT_LIST_MEMBERS_INPUT = {
  /**
   * Org  Public  Id
   * @description The unique ID of the Organization to limit the list to.
   */
  org__public__id?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_MEMBERS tool output.
 */
type SHORTCUT_LIST_MEMBERS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_MILESTONES tool input.
 */
type SHORTCUT_LIST_MILESTONES_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_MILESTONES tool output.
 */
type SHORTCUT_LIST_MILESTONES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_MILESTONE_EPICS tool input.
 */
type SHORTCUT_LIST_MILESTONE_EPICS_INPUT = {
  /**
   * Milestone  Public  Id
   * @description The ID of the Milestone.
   */
  milestone__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_MILESTONE_EPICS tool output.
 */
type SHORTCUT_LIST_MILESTONE_EPICS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_OBJECTIVES tool input.
 */
type SHORTCUT_LIST_OBJECTIVES_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_OBJECTIVES tool output.
 */
type SHORTCUT_LIST_OBJECTIVES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_OBJECTIVE_EPICS tool input.
 */
type SHORTCUT_LIST_OBJECTIVE_EPICS_INPUT = {
  /**
   * Objective  Public  Id
   * @description The ID of the Objective.
   */
  objective__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_OBJECTIVE_EPICS tool output.
 */
type SHORTCUT_LIST_OBJECTIVE_EPICS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_PROJECTS tool input.
 */
type SHORTCUT_LIST_PROJECTS_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_PROJECTS tool output.
 */
type SHORTCUT_LIST_PROJECTS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_REPOSITORIES tool input.
 */
type SHORTCUT_LIST_REPOSITORIES_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_REPOSITORIES tool output.
 */
type SHORTCUT_LIST_REPOSITORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_STORIES tool input.
 */
type SHORTCUT_LIST_STORIES_INPUT = {
  /**
   * Includes Description
   * @description A true/false boolean indicating whether to return Stories with their descriptions.
   */
  includes_description?: boolean;
  /**
   * Project  Public  Id
   * @description The unique ID of the Project.
   */
  project__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_STORIES tool output.
 */
type SHORTCUT_LIST_STORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_STORY_COMMENT tool input.
 */
type SHORTCUT_LIST_STORY_COMMENT_INPUT = {
  /**
   * Story  Public  Id
   * @description The ID of the Story that the Comment is in.
   */
  story__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_LIST_STORY_COMMENT tool output.
 */
type SHORTCUT_LIST_STORY_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_LIST_WORKFLOWS tool input.
 */
type SHORTCUT_LIST_WORKFLOWS_INPUT = object;

/**
 * Type of SHORTCUT's SHORTCUT_LIST_WORKFLOWS tool output.
 */
type SHORTCUT_LIST_WORKFLOWS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_SEARCH tool input.
 */
type SHORTCUT_SEARCH_INPUT = {
  /**
   * Detail
   * @description The amount of detail included in each result item.    "full" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    "slim" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is "full".
   * @enum {string}
   */
  detail?: "full" | "slim";
  /**
   * Entity Types
   * @description A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
   */
  entity_types?: string[];
  /**
   * Next
   * @description The next page token.
   */
  next?: string;
  /**
   * Page Size
   * @description The number of search results to include in a page. Minimum of 1 and maximum of 25.
   */
  page_size?: number;
  /**
   * Query
   * @description See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
   */
  query?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_SEARCH tool output.
 */
type SHORTCUT_SEARCH_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_SEARCH_EPICS tool input.
 */
type SHORTCUT_SEARCH_EPICS_INPUT = {
  /**
   * Detail
   * @description The amount of detail included in each result item.    "full" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    "slim" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is "full".
   * @enum {string}
   */
  detail?: "full" | "slim";
  /**
   * Entity Types
   * @description A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
   */
  entity_types?: string[];
  /**
   * Next
   * @description The next page token.
   */
  next?: string;
  /**
   * Page Size
   * @description The number of search results to include in a page. Minimum of 1 and maximum of 25.
   */
  page_size?: number;
  /**
   * Query
   * @description See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
   */
  query?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_SEARCH_EPICS tool output.
 */
type SHORTCUT_SEARCH_EPICS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_SEARCH_ITERATIONS tool input.
 */
type SHORTCUT_SEARCH_ITERATIONS_INPUT = {
  /**
   * Detail
   * @description The amount of detail included in each result item.    "full" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    "slim" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is "full".
   * @enum {string}
   */
  detail?: "full" | "slim";
  /**
   * Entity Types
   * @description A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
   */
  entity_types?: string[];
  /**
   * Next
   * @description The next page token.
   */
  next?: string;
  /**
   * Page Size
   * @description The number of search results to include in a page. Minimum of 1 and maximum of 25.
   */
  page_size?: number;
  /**
   * Query
   * @description See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
   */
  query?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_SEARCH_ITERATIONS tool output.
 */
type SHORTCUT_SEARCH_ITERATIONS_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_SEARCH_MILESTONES tool input.
 */
type SHORTCUT_SEARCH_MILESTONES_INPUT = {
  /**
   * Detail
   * @description The amount of detail included in each result item.    "full" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    "slim" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is "full".
   * @enum {string}
   */
  detail?: "full" | "slim";
  /**
   * Entity Types
   * @description A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
   */
  entity_types?: string[];
  /**
   * Next
   * @description The next page token.
   */
  next?: string;
  /**
   * Page Size
   * @description The number of search results to include in a page. Minimum of 1 and maximum of 25.
   */
  page_size?: number;
  /**
   * Query
   * @description See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
   */
  query?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_SEARCH_MILESTONES tool output.
 */
type SHORTCUT_SEARCH_MILESTONES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_SEARCH_OBJECTIVES tool input.
 */
type SHORTCUT_SEARCH_OBJECTIVES_INPUT = {
  /**
   * Detail
   * @description The amount of detail included in each result item.    "full" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    "slim" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is "full".
   * @enum {string}
   */
  detail?: "full" | "slim";
  /**
   * Entity Types
   * @description A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
   */
  entity_types?: string[];
  /**
   * Next
   * @description The next page token.
   */
  next?: string;
  /**
   * Page Size
   * @description The number of search results to include in a page. Minimum of 1 and maximum of 25.
   */
  page_size?: number;
  /**
   * Query
   * @description See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
   */
  query?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_SEARCH_OBJECTIVES tool output.
 */
type SHORTCUT_SEARCH_OBJECTIVES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_SEARCH_STORIES tool input.
 */
type SHORTCUT_SEARCH_STORIES_INPUT = {
  /**
   * Detail
   * @description The amount of detail included in each result item.    "full" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    "slim" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is "full".
   * @enum {string}
   */
  detail?: "full" | "slim";
  /**
   * Entity Types
   * @description A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
   */
  entity_types?: string[];
  /**
   * Next
   * @description The next page token.
   */
  next?: string;
  /**
   * Page Size
   * @description The number of search results to include in a page. Minimum of 1 and maximum of 25.
   */
  page_size?: number;
  /**
   * Query
   * @description See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
   */
  query?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_SEARCH_STORIES tool output.
 */
type SHORTCUT_SEARCH_STORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_SEARCH_STORIES_OLD tool input.
 */
type SHORTCUT_SEARCH_STORIES_OLD_INPUT = {
  /**
   * Archived
   * @description A true/false boolean indicating whether the Story is in archived state.
   */
  archived?: boolean;
  /**
   * Completed At End
   * Format: date-time
   * @description Stories should have been completed on or before this date.
   */
  completed_at_end?: string;
  /**
   * Completed At Start
   * Format: date-time
   * @description Stories should have been completed on or after this date.
   */
  completed_at_start?: string;
  /**
   * Created At End
   * Format: date-time
   * @description Stories should have been created on or before this date.
   */
  created_at_end?: string;
  /**
   * Created At Start
   * Format: date-time
   * @description Stories should have been created on or after this date.
   */
  created_at_start?: string;
  /**
   * Deadline End
   * Format: date-time
   * @description Stories should have a deadline on or before this date.
   */
  deadline_end?: string;
  /**
   * Deadline Start
   * Format: date-time
   * @description Stories should have a deadline on or after this date.
   */
  deadline_start?: string;
  /**
   * Epic Id
   * @description The Epic IDs that may be associated with the Stories.
   */
  epic_id?: number;
  /**
   * Epic Ids
   * @description The Epic IDs that may be associated with the Stories.
   */
  epic_ids?: number[];
  /**
   * Estimate
   * @description The number of estimate points associate with the Stories.
   */
  estimate?: number;
  /**
   * External Id
   * @description An ID or URL that references an external resource. Useful during imports.
   */
  external_id?: string;
  /**
   * Group Id
   * Format: uuid
   * @description The Group ID that is associated with the Stories
   */
  group_id?: string;
  /**
   * Group Ids
   * @description The Group IDs that are associated with the Stories
   */
  group_ids?: string[];
  /**
   * Includes Description
   * @description Whether to include the story description in the response.
   */
  includes_description?: boolean;
  /**
   * Iteration Id
   * @description The Iteration ID that may be associated with the Stories.
   */
  iteration_id?: number;
  /**
   * Iteration Ids
   * @description The Iteration IDs that may be associated with the Stories.
   */
  iteration_ids?: number[];
  /**
   * Label Ids
   * @description The Label IDs that may be associated with the Stories.
   */
  label_ids?: number[];
  /**
   * Label Name
   * @description The name of any associated Labels.
   */
  label_name?: string;
  /**
   * Owner Id
   * Format: uuid
   * @description An array of UUIDs for any Users who may be Owners of the Stories.
   */
  owner_id?: string;
  /**
   * Owner Ids
   * @description An array of UUIDs for any Users who may be Owners of the Stories.
   */
  owner_ids?: string[];
  /**
   * Project Id
   * @description The IDs for the Projects the Stories may be assigned to.
   */
  project_id?: number;
  /**
   * Project Ids
   * @description The IDs for the Projects the Stories may be assigned to.
   */
  project_ids?: number[];
  /**
   * Requested By Id
   * Format: uuid
   * @description The UUID of any Users who may have requested the Stories.
   */
  requested_by_id?: string;
  /**
   * Story Type
   * @description The type of Stories that you want returned.
   * @enum {string}
   */
  story_type?: "feature" | "chore" | "bug";
  /**
   * Updated At End
   * Format: date-time
   * @description Stories should have been updated on or before this date.
   */
  updated_at_end?: string;
  /**
   * Updated At Start
   * Format: date-time
   * @description Stories should have been updated on or after this date.
   */
  updated_at_start?: string;
  /**
   * Workflow State Id
   * @description The unique IDs of the specific Workflow States that the Stories should be in.
   */
  workflow_state_id?: number;
  /**
   * Workflow State Types
   * @description The type of Workflow State the Stories may be in.
   */
  workflow_state_types?: string[];
};

/**
 * Type of SHORTCUT's SHORTCUT_SEARCH_STORIES_OLD tool output.
 */
type SHORTCUT_SEARCH_STORIES_OLD_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_STORY_HISTORY tool input.
 */
type SHORTCUT_STORY_HISTORY_INPUT = {
  /**
   * Story  Public  Id
   * @description The ID of the Story.
   */
  story__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_STORY_HISTORY tool output.
 */
type SHORTCUT_STORY_HISTORY_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UNLINK_COMMENT_THREAD_FROM_SLACK tool input.
 */
type SHORTCUT_UNLINK_COMMENT_THREAD_FROM_SLACK_INPUT = {
  /**
   * Comment  Public  Id
   * @description The ID of the Comment to unlink.
   */
  comment__public__id?: number;
  /**
   * Story  Public  Id
   * @description The ID of the Story to unlink.
   */
  story__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_UNLINK_COMMENT_THREAD_FROM_SLACK tool output.
 */
type SHORTCUT_UNLINK_COMMENT_THREAD_FROM_SLACK_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UNLINK_PRODUCTBOARD_FROM_EPIC tool input.
 */
type SHORTCUT_UNLINK_PRODUCTBOARD_FROM_EPIC_INPUT = {
  /**
   * Epic  Public  Id
   * @description The unique ID of the Epic.
   */
  epic__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_UNLINK_PRODUCTBOARD_FROM_EPIC tool output.
 */
type SHORTCUT_UNLINK_PRODUCTBOARD_FROM_EPIC_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_CATEGORY tool input.
 */
type SHORTCUT_UPDATE_CATEGORY_INPUT = {
  /**
   * Archived
   * @description A true/false boolean indicating if the Category has been archived.
   */
  archived?: boolean;
  /**
   * Category  Public  Id
   * @description The unique ID of the Category you wish to update.
   */
  category__public__id?: number;
  /**
   * Color
   * Format: css-color
   * @description The hex color to be displayed with the Category (for example, "#ff0000").
   */
  color?: string;
  /**
   * Name
   * @description The new name of the Category.
   */
  name?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_CATEGORY tool output.
 */
type SHORTCUT_UPDATE_CATEGORY_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_CUSTOM_FIELD tool input.
 */
type SHORTCUT_UPDATE_CUSTOM_FIELD_INPUT = {
  /**
   * After Id
   * Format: uuid
   * @description The ID of the CustomField we want to move this CustomField after.
   */
  after_id?: string;
  /**
   * Before Id
   * Format: uuid
   * @description The ID of the CustomField we want to move this CustomField before.
   */
  before_id?: string;
  /**
   * Custom  Field  Public  Id
   * @description The unique ID of the CustomField.
   */
  custom__field__public__id?: string;
  /**
   * Description
   * @description A description of the purpose of this field.
   */
  description?: string;
  /**
   * Enabled
   * @description Indicates whether the Field is enabled for the Workspace. Only enabled fields can be applied to Stories.
   */
  enabled?: boolean;
  /**
   * Icon Set Identifier
   * @description A frontend-controlled string that represents the icon for this custom field.
   */
  icon_set_identifier?: string;
  /**
   * Name
   * @description A collection of objects representing reporting periods for years.
   */
  name?: string;
  /**
   * Values
   * @description A collection of EnumValue objects representing the values in the domain of some Custom Field.
   */
  values?: {
      /**
       * Color Key
       * @description A color key associated with this EnumValue within the CustomField"s domain.
       */
      color_key?: string;
      /**
       * Enabled
       * @description Whether this EnumValue is enabled for its CustomField or not. Leaving this key out of the request leaves the current enabled state untouched.
       */
      enabled?: boolean;
      /**
       * Id
       * Format: uuid
       * @description The unique ID of an existing EnumValue within the CustomField"s domain.
       */
      id?: string;
      /**
       * Value
       * @description A string value within the domain of this Custom Field.
       */
      value?: string;
  }[];
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_CUSTOM_FIELD tool output.
 */
type SHORTCUT_UPDATE_CUSTOM_FIELD_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_ENTITY_TEMPLATE tool input.
 */
type SHORTCUT_UPDATE_ENTITY_TEMPLATE_INPUT = {
  /**
   * Entity  Template  Public  Id
   * @description The unique ID of the template to be updated.
   */
  entity__template__public__id?: string;
  /**
   * Name
   * @description The updated template name.
   */
  name?: string;
  /**
   * Story  Contents  Custom  Fields
   * @description An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
   */
  story__contents__custom__fields?: {
      /**
       * Field Id
       * Format: uuid
       * @description The unique public ID for the CustomField.
       */
      field_id: string;
      /**
       * Value
       * @description A literal value for the CustomField. Currently ignored.
       */
      value?: string;
      /**
       * Value Id
       * Format: uuid
       * @description The unique public ID for the CustomFieldEnumValue.
       */
      value_id: string;
  }[];
  /**
   * Story  Contents  Deadline
   * Format: date-time
   * @description The due date of the story.
   */
  story__contents__deadline?: string;
  /**
   * Story  Contents  Description
   * @description The description of the story.
   */
  story__contents__description?: string;
  /**
   * Story  Contents  Epic  Id
   * @description The ID of the epic the to be populated.
   */
  story__contents__epic__id?: number;
  /**
   * Story  Contents  Estimate
   * @description The numeric point estimate to be populated.
   */
  story__contents__estimate?: number;
  /**
   * Story  Contents  External  Links
   * @description An array of external links to be populated.
   */
  story__contents__external__links?: string[];
  /**
   * Story  Contents  File  Ids
   * @description An array of the attached file IDs to be populated.
   */
  story__contents__file__ids?: number[];
  /**
   * Story  Contents  Follower  Ids
   * @description An array of UUIDs for any Members listed as Followers.
   */
  story__contents__follower__ids?: string[];
  /**
   * Story  Contents  Group  Id
   * Format: uuid
   * @description The ID of the group to be populated.
   */
  story__contents__group__id?: string;
  /**
   * Story  Contents  Iteration  Id
   * @description The ID of the iteration the to be populated.
   */
  story__contents__iteration__id?: number;
  /**
   * Story  Contents  Labels
   * @description An array of labels to be populated by the template.
   */
  story__contents__labels?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Story  Contents  Linked  File  Ids
   * @description An array of the linked file IDs to be populated.
   */
  story__contents__linked__file__ids?: number[];
  /**
   * Story  Contents  Name
   * @description The name of the story.
   */
  story__contents__name?: string;
  /**
   * Story  Contents  Owner  Ids
   * @description An array of UUIDs of the owners of this story.
   */
  story__contents__owner__ids?: string[];
  /**
   * Story  Contents  Project  Id
   * @description The ID of the project the story belongs to.
   */
  story__contents__project__id?: number;
  /**
   * Story  Contents  Story  Type
   * @description The type of story (feature, bug, chore).
   */
  story__contents__story__type?: string;
  /**
   * Story  Contents  Tasks
   * @description An array of tasks to be populated by the template.
   */
  story__contents__tasks?: {
      /**
       * Complete
       * @description True/false boolean indicating whether the Task is completed. Defaults to false.
       */
      complete?: boolean;
      /**
       * Description
       * @description The Task description.
       */
      description: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Owner Ids
       * @description An array of UUIDs for any members you want to add as Owners on this new Task.
       */
      owner_ids?: string[];
  }[];
  /**
   * Story  Contents  Workflow  State  Id
   * @description The ID of the workflow state to be populated.
   */
  story__contents__workflow__state__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_ENTITY_TEMPLATE tool output.
 */
type SHORTCUT_UPDATE_ENTITY_TEMPLATE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_EPIC tool input.
 */
type SHORTCUT_UPDATE_EPIC_INPUT = {
  /**
   * After Id
   * @description The ID of the Epic we want to move this Epic after.
   */
  after_id?: number;
  /**
   * Archived
   * @description A true/false boolean indicating whether the Epic is in archived state.
   */
  archived?: boolean;
  /**
   * Before Id
   * @description The ID of the Epic we want to move this Epic before.
   */
  before_id?: number;
  /**
   * Completed At Override
   * Format: date-time
   * @description A manual override for the time/date the Epic was completed.
   */
  completed_at_override?: string;
  /**
   * Deadline
   * Format: date-time
   * @description The Epic"s deadline.
   */
  deadline?: string;
  /**
   * Description
   * @description The Epic"s description.
   */
  description?: string;
  /**
   * Epic  Public  Id
   * @description The unique ID of the Epic.
   */
  epic__public__id?: number;
  /**
   * Epic State Id
   * @description The ID of the Epic State.
   */
  epic_state_id?: number;
  /**
   * External Id
   * @description This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here.
   */
  external_id?: string;
  /**
   * Follower Ids
   * @description An array of UUIDs for any Members you want to add as Followers on this Epic.
   */
  follower_ids?: string[];
  /**
   * Group Id
   * Format: uuid
   * @description `Deprecated` The ID of the group to associate with the epic. Use `group_ids`.
   */
  group_id?: string;
  /**
   * Group Ids
   * @description An array of UUIDS for Groups to which this Epic is related.
   */
  group_ids?: string[];
  /**
   * Labels
   * @description An array of Labels attached to the Epic.
   */
  labels?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Milestone Id
   * @description `Deprecated` The ID of the Milestone this Epic is related to. Use `objective_ids`.
   */
  milestone_id?: number;
  /**
   * Name
   * @description The Epic"s name.
   */
  name?: string;
  /**
   * Objective Ids
   * @description An array of IDs for Objectives to which this Epic is related.
   */
  objective_ids?: number[];
  /**
   * Owner Ids
   * @description An array of UUIDs for any members you want to add as Owners on this Epic.
   */
  owner_ids?: string[];
  /**
   * Planned Start Date
   * Format: date-time
   * @description The Epic"s planned start date.
   */
  planned_start_date?: string;
  /**
   * Requested By Id
   * Format: uuid
   * @description The ID of the member that requested the epic.
   */
  requested_by_id?: string;
  /**
   * Started At Override
   * Format: date-time
   * @description A manual override for the time/date the Epic was started.
   */
  started_at_override?: string;
  /**
   * State
   * @description `Deprecated` The Epic"s state (to do, in progress, or done); will be ignored when `epic_state_id` is set.
   * @enum {string}
   */
  state?: "in progress" | "to do" | "done";
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_EPIC tool output.
 */
type SHORTCUT_UPDATE_EPIC_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_EPIC_COMMENT tool input.
 */
type SHORTCUT_UPDATE_EPIC_COMMENT_INPUT = {
  /**
   * Comment  Public  Id
   * @description The ID of the Comment.
   */
  comment__public__id?: number;
  /**
   * Epic  Public  Id
   * @description The ID of the associated Epic.
   */
  epic__public__id?: number;
  /**
   * Text
   * @description The updated comment text.
   */
  text?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_EPIC_COMMENT tool output.
 */
type SHORTCUT_UPDATE_EPIC_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_FILE tool input.
 */
type SHORTCUT_UPDATE_FILE_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description The time/date that the file was uploaded.
   */
  created_at?: string;
  /**
   * Description
   * @description The description of the file.
   */
  description?: string;
  /**
   * External Id
   * @description An additional ID that you may wish to assign to the file.
   */
  external_id?: string;
  /**
   * File  Public  Id
   * @description The unique ID assigned to the file in Shortcut.
   */
  file__public__id?: number;
  /**
   * Name
   * @description The name of the file.
   */
  name?: string;
  /**
   * Updated At
   * Format: date-time
   * @description The time/date that the file was last updated.
   */
  updated_at?: string;
  /**
   * Uploader Id
   * Format: uuid
   * @description The unique ID assigned to the Member who uploaded the file to Shortcut.
   */
  uploader_id?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_FILE tool output.
 */
type SHORTCUT_UPDATE_FILE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_GROUP tool input.
 */
type SHORTCUT_UPDATE_GROUP_INPUT = {
  /**
   * Archived
   * @description Whether or not this Group is archived.
   */
  archived?: boolean;
  /**
   * Color
   * Format: css-color
   * @description The color you wish to use for the Group in the system.
   */
  color?: string;
  /**
   * Color Key
   * @description The color key you wish to use for the Group in the system.
   * @enum {string}
   */
  color_key?: "blue" | "purple" | "midnight-blue" | "orange" | "yellow-green" | "brass" | "gray" | "fuchsia" | "yellow" | "pink" | "sky-blue" | "green" | "red" | "black" | "slate" | "turquoise";
  /**
   * Description
   * @description The description of this Group.
   */
  description?: string;
  /**
   * Display Icon Id
   * Format: uuid
   * @description The Icon id for the avatar of this Group.
   */
  display_icon_id?: string;
  /**
   * Group  Public  Id
   * @description The unique ID of the Group.
   */
  group__public__id?: string;
  /**
   * Member Ids
   * @description The Member ids to add to this Group.
   */
  member_ids?: string[];
  /**
   * Mention Name
   * @description The mention name of this Group.
   */
  mention_name?: string;
  /**
   * Name
   * @description The name of this Group.
   */
  name?: string;
  /**
   * Workflow Ids
   * @description The Workflow ids to add to the Group.
   */
  workflow_ids?: number[];
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_GROUP tool output.
 */
type SHORTCUT_UPDATE_GROUP_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_ITERATION tool input.
 */
type SHORTCUT_UPDATE_ITERATION_INPUT = {
  /**
   * Description
   * @description The description of the Iteration.
   */
  description?: string;
  /**
   * End Date
   * @description The date this Iteration ends, e.g. 2019-07-05.
   */
  end_date?: string;
  /**
   * Follower Ids
   * @description An array of UUIDs for any Members you want to add as Followers.
   */
  follower_ids?: string[];
  /**
   * Group Ids
   * @description An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI.
   */
  group_ids?: string[];
  /**
   * Iteration  Public  Id
   * @description The unique ID of the Iteration.
   */
  iteration__public__id?: number;
  /**
   * Labels
   * @description An array of Labels attached to the Iteration.
   */
  labels?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Name
   * @description The name of this Iteration
   */
  name?: string;
  /**
   * Start Date
   * @description The date this Iteration begins, e.g. 2019-07-01
   */
  start_date?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_ITERATION tool output.
 */
type SHORTCUT_UPDATE_ITERATION_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_KEY_RESULT tool input.
 */
type SHORTCUT_UPDATE_KEY_RESULT_INPUT = {
  /**
   * Initial  Observed  Value  Boolean  Value
   * @description The boolean value.
   */
  initial__observed__value__boolean__value?: boolean;
  /**
   * Initial  Observed  Value  Numeric  Value
   * @description The numeric value, as a decimal string. No more than two decimal places are allowed.
   */
  initial__observed__value__numeric__value?: string;
  /**
   * Key  Result  Public  Id
   * @description The ID of the Key Result.
   */
  key__result__public__id?: string;
  /**
   * Name
   * @description The name of the Key Result.
   */
  name?: string;
  /**
   * Observed  Value  Boolean  Value
   * @description The boolean value.
   */
  observed__value__boolean__value?: boolean;
  /**
   * Observed  Value  Numeric  Value
   * @description The numeric value, as a decimal string. No more than two decimal places are allowed.
   */
  observed__value__numeric__value?: string;
  /**
   * Target  Value  Boolean  Value
   * @description The boolean value.
   */
  target__value__boolean__value?: boolean;
  /**
   * Target  Value  Numeric  Value
   * @description The numeric value, as a decimal string. No more than two decimal places are allowed.
   */
  target__value__numeric__value?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_KEY_RESULT tool output.
 */
type SHORTCUT_UPDATE_KEY_RESULT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_LABEL tool input.
 */
type SHORTCUT_UPDATE_LABEL_INPUT = {
  /**
   * Archived
   * @description A true/false boolean indicating if the Label has been archived.
   */
  archived?: boolean;
  /**
   * Color
   * Format: css-color
   * @description The hex color to be displayed with the Label (for example, "#ff0000").
   */
  color?: string;
  /**
   * Description
   * @description The new description of the label.
   */
  description?: string;
  /**
   * Label  Public  Id
   * @description The unique ID of the Label you wish to update.
   */
  label__public__id?: number;
  /**
   * Name
   * @description The new name of the label.
   */
  name?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_LABEL tool output.
 */
type SHORTCUT_UPDATE_LABEL_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_LINKED_FILE tool input.
 */
type SHORTCUT_UPDATE_LINKED_FILE_INPUT = {
  /**
   * Description
   * @description The description of the file.
   */
  description?: string;
  /**
   * Linked  File  Public  Id
   * @description The unique identifier of the linked file.
   */
  linked__file__public__id?: number;
  /**
   * Name
   * @description The name of the file.
   */
  name?: string;
  /**
   * Size
   * @description The filesize, if the integration provided it.
   */
  size?: number;
  /**
   * Story Id
   * @description The ID of the linked story.
   */
  story_id?: number;
  /**
   * Thumbnail Url
   * @description The URL of the thumbnail, if the integration provided it.
   */
  thumbnail_url?: string;
  /**
   * Type
   * @description The integration type of the file (e.g. google, dropbox, box).
   * @enum {string}
   */
  type?: "google" | "url" | "dropbox" | "box" | "onedrive";
  /**
   * Uploader Id
   * Format: uuid
   * @description The UUID of the member that uploaded the file.
   */
  uploader_id?: string;
  /**
   * Url
   * @description The URL of linked file.
   */
  url?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_LINKED_FILE tool output.
 */
type SHORTCUT_UPDATE_LINKED_FILE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_MILESTONE tool input.
 */
type SHORTCUT_UPDATE_MILESTONE_INPUT = {
  /**
   * After Id
   * @description The ID of the Milestone we want to move this Milestone after.
   */
  after_id?: number;
  /**
   * Archived
   * @description A boolean indicating whether the Milestone is archived or not
   */
  archived?: boolean;
  /**
   * Before Id
   * @description The ID of the Milestone we want to move this Milestone before.
   */
  before_id?: number;
  /**
   * Categories
   * @description An array of IDs of Categories attached to the Milestone.
   */
  categories?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Category (for example, "#ff0000").
       */
      color?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Category.
       */
      name: string;
  }[];
  /**
   * Completed At Override
   * Format: date-time
   * @description A manual override for the time/date the Milestone was completed.
   */
  completed_at_override?: string;
  /**
   * Description
   * @description The Milestone"s description.
   */
  description?: string;
  /**
   * Milestone  Public  Id
   * @description The ID of the Milestone.
   */
  milestone__public__id?: number;
  /**
   * Name
   * @description The name of the Milestone.
   */
  name?: string;
  /**
   * Started At Override
   * Format: date-time
   * @description A manual override for the time/date the Milestone was started.
   */
  started_at_override?: string;
  /**
   * State
   * @description The workflow state that the Milestone is in.
   * @enum {string}
   */
  state?: "in progress" | "to do" | "done";
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_MILESTONE tool output.
 */
type SHORTCUT_UPDATE_MILESTONE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_MULTIPLE_STORIES tool input.
 */
type SHORTCUT_UPDATE_MULTIPLE_STORIES_INPUT = {
  /**
   * After Id
   * @description The ID of the story that the stories are to be moved below.
   */
  after_id?: number;
  /**
   * Archived
   * @description If the Stories should be archived or not.
   */
  archived?: boolean;
  /**
   * Before Id
   * @description The ID of the story that the stories are to be moved before.
   */
  before_id?: number;
  /**
   * Custom Fields Add
   * @description A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
   */
  custom_fields_add?: {
      /**
       * Field Id
       * Format: uuid
       * @description The unique public ID for the CustomField.
       */
      field_id: string;
      /**
       * Value
       * @description A literal value for the CustomField. Currently ignored.
       */
      value?: string;
      /**
       * Value Id
       * Format: uuid
       * @description The unique public ID for the CustomFieldEnumValue.
       */
      value_id: string;
  }[];
  /**
   * Custom Fields Remove
   * @description A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
   */
  custom_fields_remove?: {
      /**
       * Field Id
       * Format: uuid
       * @description The unique public ID for the CustomField.
       */
      field_id: string;
      /**
       * Value
       * @description A literal value for the CustomField. Currently ignored.
       */
      value?: string;
      /**
       * Value Id
       * Format: uuid
       * @description The unique public ID for the CustomFieldEnumValue.
       */
      value_id: string;
  }[];
  /**
   * Deadline
   * Format: date-time
   * @description The due date of the story.
   */
  deadline?: string;
  /**
   * Epic Id
   * @description The ID of the epic the story belongs to.
   */
  epic_id?: number;
  /**
   * Estimate
   * @description The numeric point estimate of the story. Can also be null, which means unestimated.
   */
  estimate?: number;
  /**
   * External Links
   * @description An array of External Links associated with this story.
   */
  external_links?: string[];
  /**
   * Follower Ids Add
   * @description The UUIDs of the new followers to be added.
   */
  follower_ids_add?: string[];
  /**
   * Follower Ids Remove
   * @description The UUIDs of the followers to be removed.
   */
  follower_ids_remove?: string[];
  /**
   * Group Id
   * Format: uuid
   * @description The Id of the Group the Stories should belong to.
   */
  group_id?: string;
  /**
   * Iteration Id
   * @description The ID of the iteration the story belongs to.
   */
  iteration_id?: number;
  /**
   * Labels Add
   * @description An array of labels to be added.
   */
  labels_add?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Labels Remove
   * @description An array of labels to be removed.
   */
  labels_remove?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Move To
   * @description One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state.
   * @enum {string}
   */
  move_to?: "last" | "first";
  /**
   * Owner Ids Add
   * @description The UUIDs of the new owners to be added.
   */
  owner_ids_add?: string[];
  /**
   * Owner Ids Remove
   * @description The UUIDs of the owners to be removed.
   */
  owner_ids_remove?: string[];
  /**
   * Project Id
   * @description The ID of the Project the Stories should belong to.
   */
  project_id?: number;
  /**
   * Requested By Id
   * Format: uuid
   * @description The ID of the member that requested the story.
   */
  requested_by_id?: string;
  /**
   * Story Ids
   * @description The Ids of the Stories you wish to update.
   */
  story_ids?: number[];
  /**
   * Story Type
   * @description The type of story (feature, bug, chore).
   * @enum {string}
   */
  story_type?: "feature" | "chore" | "bug";
  /**
   * Workflow State Id
   * @description The ID of the workflow state to put the stories in.
   */
  workflow_state_id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_MULTIPLE_STORIES tool output.
 */
type SHORTCUT_UPDATE_MULTIPLE_STORIES_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_OBJECTIVE tool input.
 */
type SHORTCUT_UPDATE_OBJECTIVE_INPUT = {
  /**
   * After Id
   * @description The ID of the Objective we want to move this Objective after.
   */
  after_id?: number;
  /**
   * Archived
   * @description A boolean indicating whether the Objective is archived or not
   */
  archived?: boolean;
  /**
   * Before Id
   * @description The ID of the Objective we want to move this Objective before.
   */
  before_id?: number;
  /**
   * Categories
   * @description An array of IDs of Categories attached to the Objective.
   */
  categories?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Category (for example, "#ff0000").
       */
      color?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Category.
       */
      name: string;
  }[];
  /**
   * Completed At Override
   * Format: date-time
   * @description A manual override for the time/date the Objective was completed.
   */
  completed_at_override?: string;
  /**
   * Description
   * @description The Objective"s description.
   */
  description?: string;
  /**
   * Name
   * @description The name of the Objective.
   */
  name?: string;
  /**
   * Objective  Public  Id
   * @description The ID of the Objective.
   */
  objective__public__id?: number;
  /**
   * Started At Override
   * Format: date-time
   * @description A manual override for the time/date the Objective was started.
   */
  started_at_override?: string;
  /**
   * State
   * @description The workflow state that the Objective is in.
   * @enum {string}
   */
  state?: "in progress" | "to do" | "done";
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_OBJECTIVE tool output.
 */
type SHORTCUT_UPDATE_OBJECTIVE_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_PROJECT tool input.
 */
type SHORTCUT_UPDATE_PROJECT_INPUT = {
  /**
   * Abbreviation
   * @description The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.
   */
  abbreviation?: string;
  /**
   * Archived
   * @description A true/false boolean indicating whether the Story is in archived state.
   */
  archived?: boolean;
  /**
   * Color
   * Format: css-color
   * @description The color that represents the Project in the UI.
   */
  color?: string;
  /**
   * Days To Thermometer
   * @description The number of days before the thermometer appears in the Story summary.
   */
  days_to_thermometer?: number;
  /**
   * Description
   * @description The Project"s description.
   */
  description?: string;
  /**
   * Follower Ids
   * @description An array of UUIDs for any Members you want to add as Followers.
   */
  follower_ids?: string[];
  /**
   * Name
   * @description The Project"s name.
   */
  name?: string;
  /**
   * Project  Public  Id
   * @description The unique ID of the Project.
   */
  project__public__id?: number;
  /**
   * Show Thermometer
   * @description Configuration to enable or disable thermometers in the Story summary.
   */
  show_thermometer?: boolean;
  /**
   * Team Id
   * @description The ID of the team the project belongs to.
   */
  team_id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_PROJECT tool output.
 */
type SHORTCUT_UPDATE_PROJECT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_STORY tool input.
 */
type SHORTCUT_UPDATE_STORY_INPUT = {
  /**
   * After Id
   * @description The ID of the story we want to move this story after.
   */
  after_id?: number;
  /**
   * Archived
   * @description True if the story is archived, otherwise false.
   */
  archived?: boolean;
  /**
   * Before Id
   * @description The ID of the story we want to move this story before.
   */
  before_id?: number;
  /**
   * Branch Ids
   * @description An array of IDs of Branches attached to the story.
   */
  branch_ids?: number[];
  /**
   * Commit Ids
   * @description An array of IDs of Commits attached to the story.
   */
  commit_ids?: number[];
  /**
   * Completed At Override
   * Format: date-time
   * @description A manual override for the time/date the Story was completed.
   */
  completed_at_override?: string;
  /**
   * Custom Fields
   * @description A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
   */
  custom_fields?: {
      /**
       * Field Id
       * Format: uuid
       * @description The unique public ID for the CustomField.
       */
      field_id: string;
      /**
       * Value
       * @description A literal value for the CustomField. Currently ignored.
       */
      value?: string;
      /**
       * Value Id
       * Format: uuid
       * @description The unique public ID for the CustomFieldEnumValue.
       */
      value_id: string;
  }[];
  /**
   * Deadline
   * Format: date-time
   * @description The due date of the story.
   */
  deadline?: string;
  /**
   * Description
   * @description The description of the story.
   */
  description?: string;
  /**
   * Epic Id
   * @description The ID of the epic the story belongs to.
   */
  epic_id?: number;
  /**
   * Estimate
   * @description The numeric point estimate of the story. Can also be null, which means unestimated.
   */
  estimate?: number;
  /**
   * External Links
   * @description An array of External Links associated with this story.
   */
  external_links?: string[];
  /**
   * File Ids
   * @description An array of IDs of files attached to the story.
   */
  file_ids?: number[];
  /**
   * Follower Ids
   * @description An array of UUIDs of the followers of this story.
   */
  follower_ids?: string[];
  /**
   * Group Id
   * Format: uuid
   * @description The ID of the group to associate with this story
   */
  group_id?: string;
  /**
   * Iteration Id
   * @description The ID of the iteration the story belongs to.
   */
  iteration_id?: number;
  /**
   * Labels
   * @description An array of labels attached to the story.
   */
  labels?: {
      /**
       * Color
       * Format: css-color
       * @description The hex color to be displayed with the Label (for example, "#ff0000").
       */
      color?: string;
      /**
       * Description
       * @description The description of the new Label.
       */
      description?: string;
      /**
       * External Id
       * @description This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
       */
      external_id?: string;
      /**
       * Name
       * @description The name of the new Label.
       */
      name: string;
  }[];
  /**
   * Linked File Ids
   * @description An array of IDs of linked files attached to the story.
   */
  linked_file_ids?: number[];
  /**
   * Move To
   * @description One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state.
   * @enum {string}
   */
  move_to?: "last" | "first";
  /**
   * Name
   * @description The title of the story.
   */
  name?: string;
  /**
   * Owner Ids
   * @description An array of UUIDs of the owners of this story.
   */
  owner_ids?: string[];
  /**
   * Project Id
   * @description The ID of the project the story belongs to.
   */
  project_id?: number;
  /**
   * Pull Request Ids
   * @description An array of IDs of Pull/Merge Requests attached to the story.
   */
  pull_request_ids?: number[];
  /**
   * Requested By Id
   * Format: uuid
   * @description The ID of the member that requested the story.
   */
  requested_by_id?: string;
  /**
   * Started At Override
   * Format: date-time
   * @description A manual override for the time/date the Story was started.
   */
  started_at_override?: string;
  /**
   * Story  Public  Id
   * @description The unique identifier of this story.
   */
  story__public__id?: number;
  /**
   * Story Type
   * @description The type of story (feature, bug, chore).
   * @enum {string}
   */
  story_type?: "feature" | "chore" | "bug";
  /**
   * Workflow State Id
   * @description The ID of the workflow state to put the story in.
   */
  workflow_state_id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_STORY tool output.
 */
type SHORTCUT_UPDATE_STORY_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_STORY_COMMENT tool input.
 */
type SHORTCUT_UPDATE_STORY_COMMENT_INPUT = {
  /**
   * Comment  Public  Id
   * @description The ID of the Comment
   */
  comment__public__id?: number;
  /**
   * Story  Public  Id
   * @description The ID of the Story that the Comment is in.
   */
  story__public__id?: number;
  /**
   * Text
   * @description The updated comment text.
   */
  text?: string;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_STORY_COMMENT tool output.
 */
type SHORTCUT_UPDATE_STORY_COMMENT_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_STORY_LINK tool input.
 */
type SHORTCUT_UPDATE_STORY_LINK_INPUT = {
  /**
   * Object Id
   * @description The ID of the object Story.
   */
  object_id?: number;
  /**
   * Story  Link  Public  Id
   * @description The unique ID of the Story Link.
   */
  story__link__public__id?: number;
  /**
   * Subject Id
   * @description The ID of the subject Story.
   */
  subject_id?: number;
  /**
   * Verb
   * @description The type of link.
   * @enum {string}
   */
  verb?: "blocks" | "duplicates" | "relates to";
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_STORY_LINK tool output.
 */
type SHORTCUT_UPDATE_STORY_LINK_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPDATE_TASK tool input.
 */
type SHORTCUT_UPDATE_TASK_INPUT = {
  /**
   * After Id
   * @description Move task after this task ID.
   */
  after_id?: number;
  /**
   * Before Id
   * @description Move task before this task ID.
   */
  before_id?: number;
  /**
   * Complete
   * @description A true/false boolean indicating whether the task is complete.
   */
  complete?: boolean;
  /**
   * Description
   * @description The Task"s description.
   */
  description?: string;
  /**
   * Owner Ids
   * @description An array of UUIDs of the owners of this story.
   */
  owner_ids?: string[];
  /**
   * Story  Public  Id
   * @description The unique identifier of the parent Story.
   */
  story__public__id?: number;
  /**
   * Task  Public  Id
   * @description The unique identifier of the Task you wish to update.
   */
  task__public__id?: number;
};

/**
 * Type of SHORTCUT's SHORTCUT_UPDATE_TASK tool output.
 */
type SHORTCUT_UPDATE_TASK_OUTPUT = {
  /** Data */
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
 * Type of SHORTCUT's SHORTCUT_UPLOAD_FILES tool input.
 */
type SHORTCUT_UPLOAD_FILES_INPUT = {
  /**
   * File0
   * Format: binary
   * @description File0
   */
  file0?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * File1
   * Format: binary
   * @description File1
   */
  file1?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * File2
   * Format: binary
   * @description File2
   */
  file2?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * File3
   * Format: binary
   * @description File3
   */
  file3?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Story Id
   * @description Story Id
   */
  story_id?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
};

/**
 * Type of SHORTCUT's SHORTCUT_UPLOAD_FILES tool output.
 */
type SHORTCUT_UPLOAD_FILES_OUTPUT = {
  /** Data */
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
 * Type map of all available tool input types for toolkit "SHORTCUT".
 */
export type SHORTCUT_TOOL_INPUTS = {
  CREATE_CATEGORY: SHORTCUT_CREATE_CATEGORY_INPUT
  CREATE_ENTITY_TEMPLATE: SHORTCUT_CREATE_ENTITY_TEMPLATE_INPUT
  CREATE_EPIC: SHORTCUT_CREATE_EPIC_INPUT
  CREATE_EPIC_COMMENT: SHORTCUT_CREATE_EPIC_COMMENT_INPUT
  CREATE_EPIC_COMMENT_COMMENT: SHORTCUT_CREATE_EPIC_COMMENT_COMMENT_INPUT
  CREATE_GROUP: SHORTCUT_CREATE_GROUP_INPUT
  CREATE_ITERATION: SHORTCUT_CREATE_ITERATION_INPUT
  CREATE_LABEL: SHORTCUT_CREATE_LABEL_INPUT
  CREATE_LINKED_FILE: SHORTCUT_CREATE_LINKED_FILE_INPUT
  CREATE_MILESTONE: SHORTCUT_CREATE_MILESTONE_INPUT
  CREATE_MULTIPLE_STORIES: SHORTCUT_CREATE_MULTIPLE_STORIES_INPUT
  CREATE_OBJECTIVE: SHORTCUT_CREATE_OBJECTIVE_INPUT
  CREATE_PROJECT: SHORTCUT_CREATE_PROJECT_INPUT
  CREATE_STORY: SHORTCUT_CREATE_STORY_INPUT
  CREATE_STORY_COMMENT: SHORTCUT_CREATE_STORY_COMMENT_INPUT
  CREATE_STORY_FROM_TEMPLATE: SHORTCUT_CREATE_STORY_FROM_TEMPLATE_INPUT
  CREATE_STORY_LINK: SHORTCUT_CREATE_STORY_LINK_INPUT
  CREATE_STORY_REACTION: SHORTCUT_CREATE_STORY_REACTION_INPUT
  CREATE_TASK: SHORTCUT_CREATE_TASK_INPUT
  DELETE_CATEGORY: SHORTCUT_DELETE_CATEGORY_INPUT
  DELETE_CUSTOM_FIELD: SHORTCUT_DELETE_CUSTOM_FIELD_INPUT
  DELETE_ENTITY_TEMPLATE: SHORTCUT_DELETE_ENTITY_TEMPLATE_INPUT
  DELETE_EPIC: SHORTCUT_DELETE_EPIC_INPUT
  DELETE_EPIC_COMMENT: SHORTCUT_DELETE_EPIC_COMMENT_INPUT
  DELETE_FILE: SHORTCUT_DELETE_FILE_INPUT
  DELETE_ITERATION: SHORTCUT_DELETE_ITERATION_INPUT
  DELETE_LABEL: SHORTCUT_DELETE_LABEL_INPUT
  DELETE_LINKED_FILE: SHORTCUT_DELETE_LINKED_FILE_INPUT
  DELETE_MILESTONE: SHORTCUT_DELETE_MILESTONE_INPUT
  DELETE_MULTIPLE_STORIES: SHORTCUT_DELETE_MULTIPLE_STORIES_INPUT
  DELETE_OBJECTIVE: SHORTCUT_DELETE_OBJECTIVE_INPUT
  DELETE_PROJECT: SHORTCUT_DELETE_PROJECT_INPUT
  DELETE_STORY: SHORTCUT_DELETE_STORY_INPUT
  DELETE_STORY_COMMENT: SHORTCUT_DELETE_STORY_COMMENT_INPUT
  DELETE_STORY_LINK: SHORTCUT_DELETE_STORY_LINK_INPUT
  DELETE_STORY_REACTION: SHORTCUT_DELETE_STORY_REACTION_INPUT
  DELETE_TASK: SHORTCUT_DELETE_TASK_INPUT
  DISABLE_ITERATIONS: SHORTCUT_DISABLE_ITERATIONS_INPUT
  DISABLE_STORY_TEMPLATES: SHORTCUT_DISABLE_STORY_TEMPLATES_INPUT
  ENABLE_ITERATIONS: SHORTCUT_ENABLE_ITERATIONS_INPUT
  ENABLE_STORY_TEMPLATES: SHORTCUT_ENABLE_STORY_TEMPLATES_INPUT
  GET_CATEGORY: SHORTCUT_GET_CATEGORY_INPUT
  GET_CURRENT_MEMBER_INFO: SHORTCUT_GET_CURRENT_MEMBER_INFO_INPUT
  GET_CUSTOM_FIELD: SHORTCUT_GET_CUSTOM_FIELD_INPUT
  GET_ENTITY_TEMPLATE: SHORTCUT_GET_ENTITY_TEMPLATE_INPUT
  GET_EPIC: SHORTCUT_GET_EPIC_INPUT
  GET_EPIC_COMMENT: SHORTCUT_GET_EPIC_COMMENT_INPUT
  GET_EPIC_WORKFLOW: SHORTCUT_GET_EPIC_WORKFLOW_INPUT
  GET_EXTERNAL_LINK_STORIES: SHORTCUT_GET_EXTERNAL_LINK_STORIES_INPUT
  GET_FILE: SHORTCUT_GET_FILE_INPUT
  GET_GROUP: SHORTCUT_GET_GROUP_INPUT
  GET_ITERATION: SHORTCUT_GET_ITERATION_INPUT
  GET_KEY_RESULT: SHORTCUT_GET_KEY_RESULT_INPUT
  GET_LABEL: SHORTCUT_GET_LABEL_INPUT
  GET_LINKED_FILE: SHORTCUT_GET_LINKED_FILE_INPUT
  GET_MEMBER: SHORTCUT_GET_MEMBER_INPUT
  GET_MILESTONE: SHORTCUT_GET_MILESTONE_INPUT
  GET_OBJECTIVE: SHORTCUT_GET_OBJECTIVE_INPUT
  GET_PROJECT: SHORTCUT_GET_PROJECT_INPUT
  GET_REPOSITORY: SHORTCUT_GET_REPOSITORY_INPUT
  GET_STORY: SHORTCUT_GET_STORY_INPUT
  GET_STORY_COMMENT: SHORTCUT_GET_STORY_COMMENT_INPUT
  GET_STORY_LINK: SHORTCUT_GET_STORY_LINK_INPUT
  GET_TASK: SHORTCUT_GET_TASK_INPUT
  GET_WORKFLOW: SHORTCUT_GET_WORKFLOW_INPUT
  LIST_CATEGORIES: SHORTCUT_LIST_CATEGORIES_INPUT
  LIST_CATEGORY_MILESTONES: SHORTCUT_LIST_CATEGORY_MILESTONES_INPUT
  LIST_CATEGORY_OBJECTIVES: SHORTCUT_LIST_CATEGORY_OBJECTIVES_INPUT
  LIST_CUSTOM_FIELDS: SHORTCUT_LIST_CUSTOM_FIELDS_INPUT
  LIST_ENTITY_TEMPLATES: SHORTCUT_LIST_ENTITY_TEMPLATES_INPUT
  LIST_EPICS: SHORTCUT_LIST_EPICS_INPUT
  LIST_EPIC_COMMENTS: SHORTCUT_LIST_EPIC_COMMENTS_INPUT
  LIST_EPIC_STORIES: SHORTCUT_LIST_EPIC_STORIES_INPUT
  LIST_FILES: SHORTCUT_LIST_FILES_INPUT
  LIST_GROUPS: SHORTCUT_LIST_GROUPS_INPUT
  LIST_GROUP_STORIES: SHORTCUT_LIST_GROUP_STORIES_INPUT
  LIST_ITERATIONS: SHORTCUT_LIST_ITERATIONS_INPUT
  LIST_ITERATION_STORIES: SHORTCUT_LIST_ITERATION_STORIES_INPUT
  LIST_LABELS: SHORTCUT_LIST_LABELS_INPUT
  LIST_LABEL_EPICS: SHORTCUT_LIST_LABEL_EPICS_INPUT
  LIST_LABEL_STORIES: SHORTCUT_LIST_LABEL_STORIES_INPUT
  LIST_LINKED_FILES: SHORTCUT_LIST_LINKED_FILES_INPUT
  LIST_MEMBERS: SHORTCUT_LIST_MEMBERS_INPUT
  LIST_MILESTONES: SHORTCUT_LIST_MILESTONES_INPUT
  LIST_MILESTONE_EPICS: SHORTCUT_LIST_MILESTONE_EPICS_INPUT
  LIST_OBJECTIVES: SHORTCUT_LIST_OBJECTIVES_INPUT
  LIST_OBJECTIVE_EPICS: SHORTCUT_LIST_OBJECTIVE_EPICS_INPUT
  LIST_PROJECTS: SHORTCUT_LIST_PROJECTS_INPUT
  LIST_REPOSITORIES: SHORTCUT_LIST_REPOSITORIES_INPUT
  LIST_STORIES: SHORTCUT_LIST_STORIES_INPUT
  LIST_STORY_COMMENT: SHORTCUT_LIST_STORY_COMMENT_INPUT
  LIST_WORKFLOWS: SHORTCUT_LIST_WORKFLOWS_INPUT
  SEARCH: SHORTCUT_SEARCH_INPUT
  SEARCH_EPICS: SHORTCUT_SEARCH_EPICS_INPUT
  SEARCH_ITERATIONS: SHORTCUT_SEARCH_ITERATIONS_INPUT
  SEARCH_MILESTONES: SHORTCUT_SEARCH_MILESTONES_INPUT
  SEARCH_OBJECTIVES: SHORTCUT_SEARCH_OBJECTIVES_INPUT
  SEARCH_STORIES: SHORTCUT_SEARCH_STORIES_INPUT
  SEARCH_STORIES_OLD: SHORTCUT_SEARCH_STORIES_OLD_INPUT
  STORY_HISTORY: SHORTCUT_STORY_HISTORY_INPUT
  UNLINK_COMMENT_THREAD_FROM_SLACK: SHORTCUT_UNLINK_COMMENT_THREAD_FROM_SLACK_INPUT
  UNLINK_PRODUCTBOARD_FROM_EPIC: SHORTCUT_UNLINK_PRODUCTBOARD_FROM_EPIC_INPUT
  UPDATE_CATEGORY: SHORTCUT_UPDATE_CATEGORY_INPUT
  UPDATE_CUSTOM_FIELD: SHORTCUT_UPDATE_CUSTOM_FIELD_INPUT
  UPDATE_ENTITY_TEMPLATE: SHORTCUT_UPDATE_ENTITY_TEMPLATE_INPUT
  UPDATE_EPIC: SHORTCUT_UPDATE_EPIC_INPUT
  UPDATE_EPIC_COMMENT: SHORTCUT_UPDATE_EPIC_COMMENT_INPUT
  UPDATE_FILE: SHORTCUT_UPDATE_FILE_INPUT
  UPDATE_GROUP: SHORTCUT_UPDATE_GROUP_INPUT
  UPDATE_ITERATION: SHORTCUT_UPDATE_ITERATION_INPUT
  UPDATE_KEY_RESULT: SHORTCUT_UPDATE_KEY_RESULT_INPUT
  UPDATE_LABEL: SHORTCUT_UPDATE_LABEL_INPUT
  UPDATE_LINKED_FILE: SHORTCUT_UPDATE_LINKED_FILE_INPUT
  UPDATE_MILESTONE: SHORTCUT_UPDATE_MILESTONE_INPUT
  UPDATE_MULTIPLE_STORIES: SHORTCUT_UPDATE_MULTIPLE_STORIES_INPUT
  UPDATE_OBJECTIVE: SHORTCUT_UPDATE_OBJECTIVE_INPUT
  UPDATE_PROJECT: SHORTCUT_UPDATE_PROJECT_INPUT
  UPDATE_STORY: SHORTCUT_UPDATE_STORY_INPUT
  UPDATE_STORY_COMMENT: SHORTCUT_UPDATE_STORY_COMMENT_INPUT
  UPDATE_STORY_LINK: SHORTCUT_UPDATE_STORY_LINK_INPUT
  UPDATE_TASK: SHORTCUT_UPDATE_TASK_INPUT
  UPLOAD_FILES: SHORTCUT_UPLOAD_FILES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SHORTCUT".
 */
export type SHORTCUT_TOOL_OUTPUTS = {
  CREATE_CATEGORY: SHORTCUT_CREATE_CATEGORY_OUTPUT
  CREATE_ENTITY_TEMPLATE: SHORTCUT_CREATE_ENTITY_TEMPLATE_OUTPUT
  CREATE_EPIC: SHORTCUT_CREATE_EPIC_OUTPUT
  CREATE_EPIC_COMMENT: SHORTCUT_CREATE_EPIC_COMMENT_OUTPUT
  CREATE_EPIC_COMMENT_COMMENT: SHORTCUT_CREATE_EPIC_COMMENT_COMMENT_OUTPUT
  CREATE_GROUP: SHORTCUT_CREATE_GROUP_OUTPUT
  CREATE_ITERATION: SHORTCUT_CREATE_ITERATION_OUTPUT
  CREATE_LABEL: SHORTCUT_CREATE_LABEL_OUTPUT
  CREATE_LINKED_FILE: SHORTCUT_CREATE_LINKED_FILE_OUTPUT
  CREATE_MILESTONE: SHORTCUT_CREATE_MILESTONE_OUTPUT
  CREATE_MULTIPLE_STORIES: SHORTCUT_CREATE_MULTIPLE_STORIES_OUTPUT
  CREATE_OBJECTIVE: SHORTCUT_CREATE_OBJECTIVE_OUTPUT
  CREATE_PROJECT: SHORTCUT_CREATE_PROJECT_OUTPUT
  CREATE_STORY: SHORTCUT_CREATE_STORY_OUTPUT
  CREATE_STORY_COMMENT: SHORTCUT_CREATE_STORY_COMMENT_OUTPUT
  CREATE_STORY_FROM_TEMPLATE: SHORTCUT_CREATE_STORY_FROM_TEMPLATE_OUTPUT
  CREATE_STORY_LINK: SHORTCUT_CREATE_STORY_LINK_OUTPUT
  CREATE_STORY_REACTION: SHORTCUT_CREATE_STORY_REACTION_OUTPUT
  CREATE_TASK: SHORTCUT_CREATE_TASK_OUTPUT
  DELETE_CATEGORY: SHORTCUT_DELETE_CATEGORY_OUTPUT
  DELETE_CUSTOM_FIELD: SHORTCUT_DELETE_CUSTOM_FIELD_OUTPUT
  DELETE_ENTITY_TEMPLATE: SHORTCUT_DELETE_ENTITY_TEMPLATE_OUTPUT
  DELETE_EPIC: SHORTCUT_DELETE_EPIC_OUTPUT
  DELETE_EPIC_COMMENT: SHORTCUT_DELETE_EPIC_COMMENT_OUTPUT
  DELETE_FILE: SHORTCUT_DELETE_FILE_OUTPUT
  DELETE_ITERATION: SHORTCUT_DELETE_ITERATION_OUTPUT
  DELETE_LABEL: SHORTCUT_DELETE_LABEL_OUTPUT
  DELETE_LINKED_FILE: SHORTCUT_DELETE_LINKED_FILE_OUTPUT
  DELETE_MILESTONE: SHORTCUT_DELETE_MILESTONE_OUTPUT
  DELETE_MULTIPLE_STORIES: SHORTCUT_DELETE_MULTIPLE_STORIES_OUTPUT
  DELETE_OBJECTIVE: SHORTCUT_DELETE_OBJECTIVE_OUTPUT
  DELETE_PROJECT: SHORTCUT_DELETE_PROJECT_OUTPUT
  DELETE_STORY: SHORTCUT_DELETE_STORY_OUTPUT
  DELETE_STORY_COMMENT: SHORTCUT_DELETE_STORY_COMMENT_OUTPUT
  DELETE_STORY_LINK: SHORTCUT_DELETE_STORY_LINK_OUTPUT
  DELETE_STORY_REACTION: SHORTCUT_DELETE_STORY_REACTION_OUTPUT
  DELETE_TASK: SHORTCUT_DELETE_TASK_OUTPUT
  DISABLE_ITERATIONS: SHORTCUT_DISABLE_ITERATIONS_OUTPUT
  DISABLE_STORY_TEMPLATES: SHORTCUT_DISABLE_STORY_TEMPLATES_OUTPUT
  ENABLE_ITERATIONS: SHORTCUT_ENABLE_ITERATIONS_OUTPUT
  ENABLE_STORY_TEMPLATES: SHORTCUT_ENABLE_STORY_TEMPLATES_OUTPUT
  GET_CATEGORY: SHORTCUT_GET_CATEGORY_OUTPUT
  GET_CURRENT_MEMBER_INFO: SHORTCUT_GET_CURRENT_MEMBER_INFO_OUTPUT
  GET_CUSTOM_FIELD: SHORTCUT_GET_CUSTOM_FIELD_OUTPUT
  GET_ENTITY_TEMPLATE: SHORTCUT_GET_ENTITY_TEMPLATE_OUTPUT
  GET_EPIC: SHORTCUT_GET_EPIC_OUTPUT
  GET_EPIC_COMMENT: SHORTCUT_GET_EPIC_COMMENT_OUTPUT
  GET_EPIC_WORKFLOW: SHORTCUT_GET_EPIC_WORKFLOW_OUTPUT
  GET_EXTERNAL_LINK_STORIES: SHORTCUT_GET_EXTERNAL_LINK_STORIES_OUTPUT
  GET_FILE: SHORTCUT_GET_FILE_OUTPUT
  GET_GROUP: SHORTCUT_GET_GROUP_OUTPUT
  GET_ITERATION: SHORTCUT_GET_ITERATION_OUTPUT
  GET_KEY_RESULT: SHORTCUT_GET_KEY_RESULT_OUTPUT
  GET_LABEL: SHORTCUT_GET_LABEL_OUTPUT
  GET_LINKED_FILE: SHORTCUT_GET_LINKED_FILE_OUTPUT
  GET_MEMBER: SHORTCUT_GET_MEMBER_OUTPUT
  GET_MILESTONE: SHORTCUT_GET_MILESTONE_OUTPUT
  GET_OBJECTIVE: SHORTCUT_GET_OBJECTIVE_OUTPUT
  GET_PROJECT: SHORTCUT_GET_PROJECT_OUTPUT
  GET_REPOSITORY: SHORTCUT_GET_REPOSITORY_OUTPUT
  GET_STORY: SHORTCUT_GET_STORY_OUTPUT
  GET_STORY_COMMENT: SHORTCUT_GET_STORY_COMMENT_OUTPUT
  GET_STORY_LINK: SHORTCUT_GET_STORY_LINK_OUTPUT
  GET_TASK: SHORTCUT_GET_TASK_OUTPUT
  GET_WORKFLOW: SHORTCUT_GET_WORKFLOW_OUTPUT
  LIST_CATEGORIES: SHORTCUT_LIST_CATEGORIES_OUTPUT
  LIST_CATEGORY_MILESTONES: SHORTCUT_LIST_CATEGORY_MILESTONES_OUTPUT
  LIST_CATEGORY_OBJECTIVES: SHORTCUT_LIST_CATEGORY_OBJECTIVES_OUTPUT
  LIST_CUSTOM_FIELDS: SHORTCUT_LIST_CUSTOM_FIELDS_OUTPUT
  LIST_ENTITY_TEMPLATES: SHORTCUT_LIST_ENTITY_TEMPLATES_OUTPUT
  LIST_EPICS: SHORTCUT_LIST_EPICS_OUTPUT
  LIST_EPIC_COMMENTS: SHORTCUT_LIST_EPIC_COMMENTS_OUTPUT
  LIST_EPIC_STORIES: SHORTCUT_LIST_EPIC_STORIES_OUTPUT
  LIST_FILES: SHORTCUT_LIST_FILES_OUTPUT
  LIST_GROUPS: SHORTCUT_LIST_GROUPS_OUTPUT
  LIST_GROUP_STORIES: SHORTCUT_LIST_GROUP_STORIES_OUTPUT
  LIST_ITERATIONS: SHORTCUT_LIST_ITERATIONS_OUTPUT
  LIST_ITERATION_STORIES: SHORTCUT_LIST_ITERATION_STORIES_OUTPUT
  LIST_LABELS: SHORTCUT_LIST_LABELS_OUTPUT
  LIST_LABEL_EPICS: SHORTCUT_LIST_LABEL_EPICS_OUTPUT
  LIST_LABEL_STORIES: SHORTCUT_LIST_LABEL_STORIES_OUTPUT
  LIST_LINKED_FILES: SHORTCUT_LIST_LINKED_FILES_OUTPUT
  LIST_MEMBERS: SHORTCUT_LIST_MEMBERS_OUTPUT
  LIST_MILESTONES: SHORTCUT_LIST_MILESTONES_OUTPUT
  LIST_MILESTONE_EPICS: SHORTCUT_LIST_MILESTONE_EPICS_OUTPUT
  LIST_OBJECTIVES: SHORTCUT_LIST_OBJECTIVES_OUTPUT
  LIST_OBJECTIVE_EPICS: SHORTCUT_LIST_OBJECTIVE_EPICS_OUTPUT
  LIST_PROJECTS: SHORTCUT_LIST_PROJECTS_OUTPUT
  LIST_REPOSITORIES: SHORTCUT_LIST_REPOSITORIES_OUTPUT
  LIST_STORIES: SHORTCUT_LIST_STORIES_OUTPUT
  LIST_STORY_COMMENT: SHORTCUT_LIST_STORY_COMMENT_OUTPUT
  LIST_WORKFLOWS: SHORTCUT_LIST_WORKFLOWS_OUTPUT
  SEARCH: SHORTCUT_SEARCH_OUTPUT
  SEARCH_EPICS: SHORTCUT_SEARCH_EPICS_OUTPUT
  SEARCH_ITERATIONS: SHORTCUT_SEARCH_ITERATIONS_OUTPUT
  SEARCH_MILESTONES: SHORTCUT_SEARCH_MILESTONES_OUTPUT
  SEARCH_OBJECTIVES: SHORTCUT_SEARCH_OBJECTIVES_OUTPUT
  SEARCH_STORIES: SHORTCUT_SEARCH_STORIES_OUTPUT
  SEARCH_STORIES_OLD: SHORTCUT_SEARCH_STORIES_OLD_OUTPUT
  STORY_HISTORY: SHORTCUT_STORY_HISTORY_OUTPUT
  UNLINK_COMMENT_THREAD_FROM_SLACK: SHORTCUT_UNLINK_COMMENT_THREAD_FROM_SLACK_OUTPUT
  UNLINK_PRODUCTBOARD_FROM_EPIC: SHORTCUT_UNLINK_PRODUCTBOARD_FROM_EPIC_OUTPUT
  UPDATE_CATEGORY: SHORTCUT_UPDATE_CATEGORY_OUTPUT
  UPDATE_CUSTOM_FIELD: SHORTCUT_UPDATE_CUSTOM_FIELD_OUTPUT
  UPDATE_ENTITY_TEMPLATE: SHORTCUT_UPDATE_ENTITY_TEMPLATE_OUTPUT
  UPDATE_EPIC: SHORTCUT_UPDATE_EPIC_OUTPUT
  UPDATE_EPIC_COMMENT: SHORTCUT_UPDATE_EPIC_COMMENT_OUTPUT
  UPDATE_FILE: SHORTCUT_UPDATE_FILE_OUTPUT
  UPDATE_GROUP: SHORTCUT_UPDATE_GROUP_OUTPUT
  UPDATE_ITERATION: SHORTCUT_UPDATE_ITERATION_OUTPUT
  UPDATE_KEY_RESULT: SHORTCUT_UPDATE_KEY_RESULT_OUTPUT
  UPDATE_LABEL: SHORTCUT_UPDATE_LABEL_OUTPUT
  UPDATE_LINKED_FILE: SHORTCUT_UPDATE_LINKED_FILE_OUTPUT
  UPDATE_MILESTONE: SHORTCUT_UPDATE_MILESTONE_OUTPUT
  UPDATE_MULTIPLE_STORIES: SHORTCUT_UPDATE_MULTIPLE_STORIES_OUTPUT
  UPDATE_OBJECTIVE: SHORTCUT_UPDATE_OBJECTIVE_OUTPUT
  UPDATE_PROJECT: SHORTCUT_UPDATE_PROJECT_OUTPUT
  UPDATE_STORY: SHORTCUT_UPDATE_STORY_OUTPUT
  UPDATE_STORY_COMMENT: SHORTCUT_UPDATE_STORY_COMMENT_OUTPUT
  UPDATE_STORY_LINK: SHORTCUT_UPDATE_STORY_LINK_OUTPUT
  UPDATE_TASK: SHORTCUT_UPDATE_TASK_OUTPUT
  UPLOAD_FILES: SHORTCUT_UPLOAD_FILES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SHORTCUT toolkit.
 */
export const SHORTCUT = {
  slug: "shortcut",
  tools: {
    /**
     * Create category allows you to create a new category in shortcut.
     */
    CREATE_CATEGORY: "SHORTCUT_CREATE_CATEGORY",
    /**
     * Create a new entity template for the workspace.
     */
    CREATE_ENTITY_TEMPLATE: "SHORTCUT_CREATE_ENTITY_TEMPLATE",
    /**
     * Create epic allows you to create a new epic in shortcut.
     */
    CREATE_EPIC: "SHORTCUT_CREATE_EPIC",
    /**
     * This endpoint allows you to create a threaded comment on an epic.
     */
    CREATE_EPIC_COMMENT: "SHORTCUT_CREATE_EPIC_COMMENT",
    /**
     * This endpoint allows you to create a nested comment reply to an existing epic comment.
     */
    CREATE_EPIC_COMMENT_COMMENT: "SHORTCUT_CREATE_EPIC_COMMENT_COMMENT",
    /**
     * Creates a new group in the shortcut system with customizable properties. this endpoint allows you to set up a group with a unique mention name, display name, optional description, and various customization options. use this when you need to establish a new team, department, or any other collective within your shortcut workspace. the created group can include members, associated workflows, and visual customizations like color and icon. this endpoint is particularly useful for organizing your shortcut workspace structure, facilitating team collaboration, and streamlining workflow management. note that while member and workflow associations can be set during creation, they can also be modified later using separate endpoints.
     */
    CREATE_GROUP: "SHORTCUT_CREATE_GROUP",
    /**
     * The createiteration endpoint allows you to create a new iteration in shortcut, which represents a time-boxed period for completing a set of stories or tasks. this endpoint is crucial for teams using agile methodologies, enabling them to plan and track progress over specific time periods. use this endpoint when setting up sprint cycles, planning releases, or organizing work into manageable timeframes. the endpoint requires essential information such as the iteration's name and date range, while also offering options to add followers, associate groups, and attach labels for better organization and tracking. it's important to note that while multiple groups can be added via the api, the current web ui only displays one group association. this endpoint should not be used for modifying existing iterations; instead, use the dedicated update endpoint for such changes.
     */
    CREATE_ITERATION: "SHORTCUT_CREATE_ITERATION",
    /**
     * Create label allows you to create a new label in shortcut.
     */
    CREATE_LABEL: "SHORTCUT_CREATE_LABEL",
    /**
     * Create linked file allows you to create a new linked file in shortcut.
     */
    CREATE_LINKED_FILE: "SHORTCUT_CREATE_LINKED_FILE",
    /**
     * (deprecated: use 'create objective') create milestone allows you to create a new milestone in shortcut.
     */
    CREATE_MILESTONE: "SHORTCUT_CREATE_MILESTONE",
    /**
     * Create multiple stories allows you to create multiple stories in a single request using the same syntax as [create story](https://developer.shortcut.com/api/rest/v3#create-story).
     */
    CREATE_MULTIPLE_STORIES: "SHORTCUT_CREATE_MULTIPLE_STORIES",
    /**
     * Create objective allows you to create a new objective in shortcut.
     */
    CREATE_OBJECTIVE: "SHORTCUT_CREATE_OBJECTIVE",
    /**
     * Create project is used to create a new shortcut project.
     */
    CREATE_PROJECT: "SHORTCUT_CREATE_PROJECT",
    /**
     * Create story is used to add a new story to your shortcut workspace. this endpoint requires that either **workflow state id** or **project id** be provided, but will reject the request if both or neither are specified. the workflow state id has been marked as required and is the recommended field to specify because we are in the process of sunsetting projects in shortcut.
     */
    CREATE_STORY: "SHORTCUT_CREATE_STORY",
    /**
     * Create comment allows you to create a comment on any story.
     */
    CREATE_STORY_COMMENT: "SHORTCUT_CREATE_STORY_COMMENT",
    /**
     * Create story from template is used to add a new story derived from a template to your shortcut workspace.
     */
    CREATE_STORY_FROM_TEMPLATE: "SHORTCUT_CREATE_STORY_FROM_TEMPLATE",
    /**
     * Story links (called story relationships in the ui) allow you create semantic relationships between two stories. the parameters read like an active voice grammatical sentence: subject -> verb -> object. the subject story acts on the object story; the object story is the direct object of the sentence. the subject story "blocks", "duplicates", or "relates to" the object story. examples: - "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a done workflow state. - "story 2 duplicates story 1” -- story 2 represents the same body of work as story 1 (and should probably be archived). - "story 7 relates to story 3”
     */
    CREATE_STORY_LINK: "SHORTCUT_CREATE_STORY_LINK",
    /**
     * Create a reaction to a story comment.
     */
    CREATE_STORY_REACTION: "SHORTCUT_CREATE_STORY_REACTION",
    /**
     * Create task is used to create a new task in a story.
     */
    CREATE_TASK: "SHORTCUT_CREATE_TASK",
    /**
     * Delete category can be used to delete any category.
     */
    DELETE_CATEGORY: "SHORTCUT_DELETE_CATEGORY",
    /**
     * Deletes a specific custom field from the shortcut system using its unique public identifier. this endpoint should be used when you need to permanently remove a custom field that is no longer required in your workflows or project structure. it's important to note that this operation is irreversible, and once a custom field is deleted, all data associated with it will be lost. use this endpoint with caution, ensuring that the custom field is no longer needed and that its deletion won't negatively impact any existing processes or data integrity within your shortcut instance.
     */
    DELETE_CUSTOM_FIELD: "SHORTCUT_DELETE_CUSTOM_FIELD",
    /**
     * Deletes a specific entity template from the shortcut api. this endpoint should be used when you need to permanently remove a template that is no longer needed or is obsolete. it's important to note that this operation cannot be undone, so it should be used with caution. the deletion is performed on a single template identified by its public id, adhering to the best practice of controlling deletion on a per-resource basis. this endpoint is part of the api v3, which may include enhanced features or changes compared to previous versions.
     */
    DELETE_ENTITY_TEMPLATE: "SHORTCUT_DELETE_ENTITY_TEMPLATE",
    /**
     * Delete epic can be used to delete the epic. the only required parameter is epic id.
     */
    DELETE_EPIC: "SHORTCUT_DELETE_EPIC",
    /**
     * This endpoint allows you to delete a comment from an epic.
     */
    DELETE_EPIC_COMMENT: "SHORTCUT_DELETE_EPIC_COMMENT",
    /**
     * Delete file deletes a previously uploaded file.
     */
    DELETE_FILE: "SHORTCUT_DELETE_FILE",
    /**
     * Deletes a specific iteration from the shortcut project management system. this endpoint should be used when you need to permanently remove an iteration and all its associated data from your project workflow. it's particularly useful for cleaning up completed or cancelled iterations that are no longer needed. be cautious when using this endpoint, as the deletion is irreversible and will remove all data associated with the specified iteration. ensure you have the correct iteration id before proceeding with the deletion to avoid unintended data loss.
     */
    DELETE_ITERATION: "SHORTCUT_DELETE_ITERATION",
    /**
     * Delete label can be used to delete any label.
     */
    DELETE_LABEL: "SHORTCUT_DELETE_LABEL",
    /**
     * Delete linked file can be used to delete any previously attached linked-file.
     */
    DELETE_LINKED_FILE: "SHORTCUT_DELETE_LINKED_FILE",
    /**
     * (deprecated: use 'delete objective') delete milestone can be used to delete any milestone.
     */
    DELETE_MILESTONE: "SHORTCUT_DELETE_MILESTONE",
    /**
     * Delete multiple stories allows you to delete multiple archived stories at once.
     */
    DELETE_MULTIPLE_STORIES: "SHORTCUT_DELETE_MULTIPLE_STORIES",
    /**
     * Delete objective can be used to delete any objective.
     */
    DELETE_OBJECTIVE: "SHORTCUT_DELETE_OBJECTIVE",
    /**
     * Delete project can be used to delete a project. projects can only be deleted if all associated stories are moved or deleted. in the case that the project cannot be deleted, you will receive a 422 response.
     */
    DELETE_PROJECT: "SHORTCUT_DELETE_PROJECT",
    /**
     * Delete story can be used to delete any story.
     */
    DELETE_STORY: "SHORTCUT_DELETE_STORY",
    /**
     * Delete a comment from any story.
     */
    DELETE_STORY_COMMENT: "SHORTCUT_DELETE_STORY_COMMENT",
    /**
     * Removes the relationship between the stories for the given story link.
     */
    DELETE_STORY_LINK: "SHORTCUT_DELETE_STORY_LINK",
    /**
     * Delete a reaction from any story comment.
     */
    DELETE_STORY_REACTION: "SHORTCUT_DELETE_STORY_REACTION",
    /**
     * Delete task can be used to delete any previously created task on a story.
     */
    DELETE_TASK: "SHORTCUT_DELETE_TASK",
    /**
     * Disables iterations for the current workspace
     */
    DISABLE_ITERATIONS: "SHORTCUT_DISABLE_ITERATIONS",
    /**
     * Disables the story template feature for the workspace.
     */
    DISABLE_STORY_TEMPLATES: "SHORTCUT_DISABLE_STORY_TEMPLATES",
    /**
     * Enables iterations for the current workspace
     */
    ENABLE_ITERATIONS: "SHORTCUT_ENABLE_ITERATIONS",
    /**
     * Enables the story template feature for the workspace.
     */
    ENABLE_STORY_TEMPLATES: "SHORTCUT_ENABLE_STORY_TEMPLATES",
    /**
     * Get category returns information about the selected category.
     */
    GET_CATEGORY: "SHORTCUT_GET_CATEGORY",
    /**
     * Returns information about the authenticated member.
     */
    GET_CURRENT_MEMBER_INFO: "SHORTCUT_GET_CURRENT_MEMBER_INFO",
    /**
     * Retrieves detailed information about a specific custom field in shortcut using its unique public identifier. this endpoint allows developers to fetch the properties and configuration of a custom field, which can include its name, type, possible values, and any other associated metadata. it's particularly useful when you need to inspect or validate a custom field's settings programmatically, or when integrating custom field data into external systems. the endpoint should be used when detailed information about a single custom field is required, rather than for bulk operations or listing all custom fields. note that this endpoint only provides read access to custom field data and cannot be used to modify the custom field.
     */
    GET_CUSTOM_FIELD: "SHORTCUT_GET_CUSTOM_FIELD",
    /**
     * Get entity template returns information about a given entity template.
     */
    GET_ENTITY_TEMPLATE: "SHORTCUT_GET_ENTITY_TEMPLATE",
    /**
     * Get epic returns information about the selected epic.
     */
    GET_EPIC: "SHORTCUT_GET_EPIC",
    /**
     * This endpoint returns information about the selected epic comment.
     */
    GET_EPIC_COMMENT: "SHORTCUT_GET_EPIC_COMMENT",
    /**
     * Returns the epic workflow for the workspace.
     */
    GET_EPIC_WORKFLOW: "SHORTCUT_GET_EPIC_WORKFLOW",
    /**
     * Get stories which have a given external link associated with them.
     */
    GET_EXTERNAL_LINK_STORIES: "SHORTCUT_GET_EXTERNAL_LINK_STORIES",
    /**
     * Get file returns information about the selected uploadedfile.
     */
    GET_FILE: "SHORTCUT_GET_FILE",
    /**
     * Retrieves detailed information about a specific group in the shortcut workspace using its unique public identifier. this endpoint allows developers to fetch comprehensive data about a group, including its name, type, and associated metadata. it's particularly useful when you need to access or verify group details programmatically, such as during workflow automations or when building integrations that involve group management. the endpoint provides more granular control and information compared to what's available through the web application, making it valuable for advanced group-related operations and data analysis within your shortcut projects.
     */
    GET_GROUP: "SHORTCUT_GET_GROUP",
    /**
     * Retrieves detailed information about a specific iteration in the shortcut project management system. this endpoint allows users to fetch comprehensive data about a single iteration, including its name, status, start and end dates, associated stories, and progress metrics. it should be used when detailed information about a particular iteration is needed, such as during sprint planning, progress tracking, or retrospective analysis. the endpoint provides a snapshot of the iteration at the time of the request and does not include real-time updates. it's particularly useful for project managers, scrum masters, and team members who need to review or report on iteration-specific data. note that this endpoint only retrieves information and does not allow for modification of the iteration details.
     */
    GET_ITERATION: "SHORTCUT_GET_ITERATION",
    /**
     * Get key result returns information about a chosen key result.
     */
    GET_KEY_RESULT: "SHORTCUT_GET_KEY_RESULT",
    /**
     * Get label returns information about the selected label.
     */
    GET_LABEL: "SHORTCUT_GET_LABEL",
    /**
     * Get file returns information about the selected linked file.
     */
    GET_LINKED_FILE: "SHORTCUT_GET_LINKED_FILE",
    /**
     * Returns information about a member.
     */
    GET_MEMBER: "SHORTCUT_GET_MEMBER",
    /**
     * (deprecated: use 'get objective') get milestone returns information about a chosen milestone.
     */
    GET_MILESTONE: "SHORTCUT_GET_MILESTONE",
    /**
     * Get objective returns information about a chosen objective.
     */
    GET_OBJECTIVE: "SHORTCUT_GET_OBJECTIVE",
    /**
     * Get project returns information about the selected project.
     */
    GET_PROJECT: "SHORTCUT_GET_PROJECT",
    /**
     * Get repository returns information about the selected repository.
     */
    GET_REPOSITORY: "SHORTCUT_GET_REPOSITORY",
    /**
     * Get story returns information about a chosen story.
     */
    GET_STORY: "SHORTCUT_GET_STORY",
    /**
     * Get comment is used to get comment information.
     */
    GET_STORY_COMMENT: "SHORTCUT_GET_STORY_COMMENT",
    /**
     * Returns the stories and their relationship for the given story link.
     */
    GET_STORY_LINK: "SHORTCUT_GET_STORY_LINK",
    /**
     * Returns information about a chosen task.
     */
    GET_TASK: "SHORTCUT_GET_TASK",
    /**
     * Get workflow returns information about a chosen workflow.
     */
    GET_WORKFLOW: "SHORTCUT_GET_WORKFLOW",
    /**
     * List categories returns a list of all categories and their attributes.
     */
    LIST_CATEGORIES: "SHORTCUT_LIST_CATEGORIES",
    /**
     * List category milestones returns a list of all milestones with the category.
     */
    LIST_CATEGORY_MILESTONES: "SHORTCUT_LIST_CATEGORY_MILESTONES",
    /**
     * Returns a list of all objectives with the category.
     */
    LIST_CATEGORY_OBJECTIVES: "SHORTCUT_LIST_CATEGORY_OBJECTIVES",
    /**
     * Retrieves a list of all custom fields defined in the shortcut api. this endpoint allows developers to fetch information about user-defined fields that have been added to extend the functionality of standard fields in integrations. it's particularly useful when you need to understand the structure and types of custom data being used across the system. the endpoint returns details about each custom field, which may include their identifiers, names, types, and any associated metadata. use this endpoint when you need to inventory existing custom fields, prepare for data migrations, or dynamically adjust your application's data model to accommodate custom fields. note that this endpoint does not create, modify, or delete custom fields; it's purely for retrieval of existing custom field definitions.
     */
    LIST_CUSTOM_FIELDS: "SHORTCUT_LIST_CUSTOM_FIELDS",
    /**
     * List all the entity templates for the workspace.
     */
    LIST_ENTITY_TEMPLATES: "SHORTCUT_LIST_ENTITY_TEMPLATES",
    /**
     * List epics returns a list of all epics and their attributes.
     */
    LIST_EPICS: "SHORTCUT_LIST_EPICS",
    /**
     * Get a list of all comments on an epic.
     */
    LIST_EPIC_COMMENTS: "SHORTCUT_LIST_EPIC_COMMENTS",
    /**
     * Get a list of all stories in an epic.
     */
    LIST_EPIC_STORIES: "SHORTCUT_LIST_EPIC_STORIES",
    /**
     * List files returns a list of all uploadedfiles in the workspace.
     */
    LIST_FILES: "SHORTCUT_LIST_FILES",
    /**
     * A group in our api maps to a "team" within the shortcut product. a team is a collection of users that can be associated to stories, epics, and iterations within shortcut.
     */
    LIST_GROUPS: "SHORTCUT_LIST_GROUPS",
    /**
     * List the stories assigned to the group. (by default, limited to 1,000).
     */
    LIST_GROUP_STORIES: "SHORTCUT_LIST_GROUP_STORIES",
    /**
     * Retrieves a list of all iterations in the shortcut project management system. iterations represent specific time periods for planning and tracking work, allowing teams to organize their development cycles. this endpoint provides comprehensive information about each iteration, including its name, start and end dates, status, and associated stories or tasks. use this endpoint when you need an overview of all iterations for project planning, progress tracking, or reporting purposes. it's particularly useful for analyzing past performance, planning future sprints, or getting a high-level view of the project timeline. note that the response may be paginated for projects with a large number of iterations, and you might need to make multiple requests to retrieve the full dataset.
     */
    LIST_ITERATIONS: "SHORTCUT_LIST_ITERATIONS",
    /**
     * Get a list of all stories in an iteration.
     */
    LIST_ITERATION_STORIES: "SHORTCUT_LIST_ITERATION_STORIES",
    /**
     * List labels returns a list of all labels and their attributes.
     */
    LIST_LABELS: "SHORTCUT_LIST_LABELS",
    /**
     * List all of the epics with the label.
     */
    LIST_LABEL_EPICS: "SHORTCUT_LIST_LABEL_EPICS",
    /**
     * List all of the stories with the label.
     */
    LIST_LABEL_STORIES: "SHORTCUT_LIST_LABEL_STORIES",
    /**
     * List linked files returns a list of all linked-files and their attributes.
     */
    LIST_LINKED_FILES: "SHORTCUT_LIST_LINKED_FILES",
    /**
     * Returns information about members of the workspace.
     */
    LIST_MEMBERS: "SHORTCUT_LIST_MEMBERS",
    /**
     * (deprecated: use 'list objectives') list milestones returns a list of all milestones and their attributes.
     */
    LIST_MILESTONES: "SHORTCUT_LIST_MILESTONES",
    /**
     * (deprecated: use 'list objective epics') list all of the epics within the milestone.
     */
    LIST_MILESTONE_EPICS: "SHORTCUT_LIST_MILESTONE_EPICS",
    /**
     * List objectives returns a list of all objectives and their attributes.
     */
    LIST_OBJECTIVES: "SHORTCUT_LIST_OBJECTIVES",
    /**
     * List all of the epics within the objective.
     */
    LIST_OBJECTIVE_EPICS: "SHORTCUT_LIST_OBJECTIVE_EPICS",
    /**
     * List projects returns a list of all projects and their attributes.
     */
    LIST_PROJECTS: "SHORTCUT_LIST_PROJECTS",
    /**
     * List repositories returns a list of all repositories and their attributes.
     */
    LIST_REPOSITORIES: "SHORTCUT_LIST_REPOSITORIES",
    /**
     * List stories returns a list of all stories in a selected project and their attributes.
     */
    LIST_STORIES: "SHORTCUT_LIST_STORIES",
    /**
     * Lists comments associated with a story
     */
    LIST_STORY_COMMENT: "SHORTCUT_LIST_STORY_COMMENT",
    /**
     * Returns a list of all workflows in the workspace.
     */
    LIST_WORKFLOWS: "SHORTCUT_LIST_WORKFLOWS",
    /**
     * Search lets you search epics and stories based on desired parameters. since ordering of the results can change over time (due to search ranking decay, new epics and stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     */
    SEARCH: "SHORTCUT_SEARCH",
    /**
     * Search epics lets you search epics based on desired parameters. since ordering of stories can change over time (due to search ranking decay, new epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     */
    SEARCH_EPICS: "SHORTCUT_SEARCH_EPICS",
    /**
     * Search iterations lets you search iterations based on desired parameters. since ordering of results can change over time (due to search ranking decay, new iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     */
    SEARCH_ITERATIONS: "SHORTCUT_SEARCH_ITERATIONS",
    /**
     * Search milestones lets you search milestones based on desired parameters. since ordering of results can change over time (due to search ranking decay, new milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     */
    SEARCH_MILESTONES: "SHORTCUT_SEARCH_MILESTONES",
    /**
     * Search objectives lets you search objectives based on desired parameters. since ordering of results can change over time (due to search ranking decay, new objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     */
    SEARCH_OBJECTIVES: "SHORTCUT_SEARCH_OBJECTIVES",
    /**
     * Search stories lets you search stories based on desired parameters. since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     */
    SEARCH_STORIES: "SHORTCUT_SEARCH_STORIES",
    /**
     * Search stories lets you search stories based on desired parameters.
     */
    SEARCH_STORIES_OLD: "SHORTCUT_SEARCH_STORIES_OLD",
    /**
     * Retrieves the complete history of changes for a specific story in the shortcut project management system. this endpoint allows users to track all modifications, updates, and revisions made to a story over time, providing a comprehensive timeline of its evolution. it's particularly useful for project managers, team members, and stakeholders who need to understand how a story has changed, who made the changes, and when they occurred. the endpoint returns a chronological list of all events and modifications associated with the specified story, helping teams maintain transparency and accountability in their project workflows. note that this endpoint focuses solely on the history of a single story and does not provide information about related stories or overall project status.
     */
    STORY_HISTORY: "SHORTCUT_STORY_HISTORY",
    /**
     * Unlinks a comment from its linked slack thread (comment replies and slack replies will no longer be synced)
     */
    UNLINK_COMMENT_THREAD_FROM_SLACK: "SHORTCUT_UNLINK_COMMENT_THREAD_FROM_SLACK",
    /**
     * This endpoint allows you to unlink a productboard epic.
     */
    UNLINK_PRODUCTBOARD_FROM_EPIC: "SHORTCUT_UNLINK_PRODUCTBOARD_FROM_EPIC",
    /**
     * Update category allows you to replace a category name with another name. if you try to name a category something that already exists, you will receive a 422 response.
     */
    UPDATE_CATEGORY: "SHORTCUT_UPDATE_CATEGORY",
    /**
     * Update custom field can be used to update the definition of a custom field. the order of items in the 'values' collection is interpreted to be their ascending sort order.to delete an existing enum value, simply omit it from the 'values' collection. new enum values may be created inline by including an object in the 'values' collection having a 'value' entry with no 'id' (eg. {'value': 'mynewvalue', 'color key': 'green'}).
     */
    UPDATE_CUSTOM_FIELD: "SHORTCUT_UPDATE_CUSTOM_FIELD",
    /**
     * Update an entity template's name or its contents.
     */
    UPDATE_ENTITY_TEMPLATE: "SHORTCUT_UPDATE_ENTITY_TEMPLATE",
    /**
     * Update epic can be used to update numerous fields in the epic. the only required parameter is epic id, which can be found in the shortcut ui.
     */
    UPDATE_EPIC: "SHORTCUT_UPDATE_EPIC",
    /**
     * This endpoint allows you to update a threaded comment on an epic.
     */
    UPDATE_EPIC_COMMENT: "SHORTCUT_UPDATE_EPIC_COMMENT",
    /**
     * Update file updates the properties of an uploadedfile (but not its content).
     */
    UPDATE_FILE: "SHORTCUT_UPDATE_FILE",
    /**
     * Updates an existing group in the shortcut workspace. this endpoint allows you to modify various properties of a group, including its name, description, color, members, and associated workflows. use this when you need to change group details, add or remove members, or update the group's visual representation. it's particularly useful for team reorganizations, project changes, or general maintenance of your shortcut workspace structure. note that while many fields are optional, you should include any fields you wish to modify; omitted fields will retain their current values.
     */
    UPDATE_GROUP: "SHORTCUT_UPDATE_GROUP",
    /**
     * This endpoint allows you to update an existing iteration in shortcut. it provides comprehensive control over various aspects of an iteration, including its metadata, associated members and groups, labels, and timeframe. use this endpoint when you need to modify any details of an ongoing or upcoming iteration, such as adjusting dates, adding followers, or updating labels. the endpoint is particularly useful for project managers or team leads who need to refine iteration details as the project progresses. note that while you can update multiple aspects of an iteration in a single call, only the fields you include in the request will be modified; omitted fields will retain their current values.
     */
    UPDATE_ITERATION: "SHORTCUT_UPDATE_ITERATION",
    /**
     * Update key result allows updating a key result's name or initial, observed, or target values.
     */
    UPDATE_KEY_RESULT: "SHORTCUT_UPDATE_KEY_RESULT",
    /**
     * Update label allows you to replace a label name with another name. if you try to name a label something that already exists, you will receive a 422 response.
     */
    UPDATE_LABEL: "SHORTCUT_UPDATE_LABEL",
    /**
     * Updated linked file allows you to update properties of a previously attached linked-file.
     */
    UPDATE_LINKED_FILE: "SHORTCUT_UPDATE_LINKED_FILE",
    /**
     * (deprecated: use 'update objective') update milestone can be used to update milestone properties.
     */
    UPDATE_MILESTONE: "SHORTCUT_UPDATE_MILESTONE",
    /**
     * Update multiple stories allows you to make changes to numerous stories at once.
     */
    UPDATE_MULTIPLE_STORIES: "SHORTCUT_UPDATE_MULTIPLE_STORIES",
    /**
     * Update objective can be used to update objective properties.
     */
    UPDATE_OBJECTIVE: "SHORTCUT_UPDATE_OBJECTIVE",
    /**
     * Update project can be used to change properties of a project.
     */
    UPDATE_PROJECT: "SHORTCUT_UPDATE_PROJECT",
    /**
     * Update story can be used to update story properties.
     */
    UPDATE_STORY: "SHORTCUT_UPDATE_STORY",
    /**
     * Update comment replaces the text of the existing comment.
     */
    UPDATE_STORY_COMMENT: "SHORTCUT_UPDATE_STORY_COMMENT",
    /**
     * Updates the stories and/or the relationship for the given story link.
     */
    UPDATE_STORY_LINK: "SHORTCUT_UPDATE_STORY_LINK",
    /**
     * Update task can be used to update task properties.
     */
    UPDATE_TASK: "SHORTCUT_UPDATE_TASK",
    /**
     * Upload files uploads one or many files and optionally associates them with a story. use the multipart/form-data content-type to upload. each `file` key should contain a separate file. each uploadedfile's name comes from the content-disposition header "filename" directive for that field.
     */
    UPLOAD_FILES: "SHORTCUT_UPLOAD_FILES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SHORTCUT".
 */
export type SHORTCUT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SHORTCUT".
 */
export type SHORTCUT_TRIGGER_EVENTS = {}
