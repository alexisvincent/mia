// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HABITICA's HABITICA_ADD_CHALLENGE_TASK tool input.
 */
type HABITICA_ADD_CHALLENGE_TASK_INPUT = {
  /**
   * Attribute
   * @description Attribute associated with the task (strength, intelligence, perception, constitution)
   * @default null
   * @enum {string|null}
   */
  attribute: "str" | "int" | "per" | "con" | null;
  /**
   * Challenge Id
   * @description ID of the challenge to which to add the task
   */
  challengeId?: string;
  /**
   * Date
   * @description ISO 8601 date string for the due date (for todos)
   * @default null
   */
  date: string | null;
  /**
   * Every X
   * @description Interval for recurrence (e.g., every X days)
   * @default null
   */
  everyX: number | null;
  /**
   * Frequency
   * @description Recurrence frequency for daily tasks
   * @default null
   * @enum {string|null}
   */
  frequency: "daily" | "weekly" | "monthly" | "yearly" | null;
  /**
   * Notes
   * @description Additional notes for the task
   * @default null
   */
  notes: string | null;
  /**
   * Priority
   * @description Priority of the task: one of [0.1 (Trivial), 1.0 (Easy), 1.5 (Medium), 2.0 (Hard)]
   * @default 1
   */
  priority: number | null;
  /**
   * Remind At
   * @description ISO 8601 datetime string to set a reminder at
   * @default null
   */
  remindAt: string | null;
  /**
   * Tags
   * @description List of tag IDs to assign to the task
   * @default null
   */
  tags: string[] | null;
  /**
   * Text
   * @description Title of the task
   */
  text?: string;
  /**
   * Type
   * @description Type of the task
   * @enum {string}
   */
  type?: "habit" | "daily" | "todo" | "reward";
};

/**
 * Type of HABITICA's HABITICA_ADD_CHALLENGE_TASK tool output.
 */
type HABITICA_ADD_CHALLENGE_TASK_OUTPUT = {
  /**
   * Data
   * @description The created Task object with its properties
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
   * Success
   * @description Indicates if the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_CANCEL_SUBSCRIPTION tool input.
 */
type HABITICA_CANCEL_SUBSCRIPTION_INPUT = {
  /**
   * Dry Run
   * @description If True, do not attempt any changes (ignored).
   * @default null
   */
  dry_run: boolean | null;
  /**
   * Immediate
   * @description If True, request immediate cancellation (ignored).
   * @default null
   */
  immediate: boolean | null;
  /**
   * Note
   * @description Additional notes or feedback (ignored).
   * @default null
   */
  note: string | null;
  /**
   * Reason
   * @description Free-text reason for cancellation (ignored).
   * @default null
   */
  reason: string | null;
};

/**
 * Type of HABITICA's HABITICA_CANCEL_SUBSCRIPTION tool output.
 */
type HABITICA_CANCEL_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Normalized subscription data snapshot
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
   * Message
   * @description Message about the cancellation outcome or guidance
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description True if cancellation succeeded or no-op
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_CREATE_CHALLENGE tool input.
 */
type HABITICA_CREATE_CHALLENGE_INPUT = {
  /**
   * Description
   * @description Detailed description or rules of the challenge
   * @default null
   */
  description: string | null;
  /**
   * Group
   * @description ID of the group (party or guild) in which to create the challenge
   */
  group?: string;
  /**
   * Leader
   * @description User ID to set as the challenge leader; defaults to the authenticated user
   * @default null
   */
  leader: string | null;
  /**
   * Name
   * @description Full name of the challenge
   */
  name?: string;
  /**
   * Official
   * @description Marks the challenge as official (visible in the public challenge directory)
   * @default false
   */
  official: boolean | null;
  /**
   * Prize
   * @description Number of gems awarded to the winner; use 0 for free challenges
   * @default 0
   */
  prize: number | null;
  /**
   * Short Name
   * @description URL-friendly unique identifier (slug) for the challenge
   */
  shortName?: string;
  /**
   * Summary
   * @description One-line summary or subtitle for the challenge
   */
  summary?: string;
  /**
   * Tasks
   * @description List of task templates to create with the challenge
   * @default null
   */
  tasks: {
      /**
       * Notes
       * @description Notes or detailed description for the task
       * @default null
       */
      notes: string | null;
      /**
       * Text
       * @description Text (title) of the task
       */
      text: string;
      /**
       * Type
       * @description Type of the task
       * @enum {string}
       */
      type: "habit" | "daily" | "todo" | "reward";
  }[] | null;
};

/**
 * Type of HABITICA's HABITICA_CREATE_CHALLENGE tool output.
 */
type HABITICA_CREATE_CHALLENGE_OUTPUT = {
  /**
   * Data
   * @description Created challenge object with all its properties
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
   * Message
   * @description Error or informational message returned by Habitica
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Whether the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_CREATE_GROUP tool input.
 */
type HABITICA_CREATE_GROUP_INPUT = {
  /**
   * Description
   * @description An optional description for the group
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description The display name of the group (party or guild)
   */
  name?: string;
  /**
   * Privacy
   * @description Visibility setting for guilds: 'public' or 'private'. Required if type is 'guild'
   * @default null
   * @enum {string|null}
   */
  privacy: "public" | "private" | null;
  /**
   * Type
   * @description The type of group to create: 'party' or 'guild'
   * @enum {string}
   */
  type?: "party" | "guild";
};

/**
 * Type of HABITICA's HABITICA_CREATE_GROUP tool output.
 */
type HABITICA_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description The created group object
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the group
       */
      _id: string;
      /**
       * Balance
       * @description Current gem balance of the group
       */
      balance: number;
      /**
       * Categories
       * @description List of category IDs (for guilds)
       * @default null
       */
      categories: string[] | null;
      /**
       * Leader
       * @description User ID of the group's leader
       */
      leader: string;
      /**
       * Member Count
       * @description Number of members in the group
       */
      memberCount: number;
      /**
       * Name
       * @description Display name of the group
       */
      name: string;
      /**
       * Privacy
       * @description Privacy setting: 'public' or 'private'
       */
      privacy: string;
      /**
       * Type
       * @description Type of the group: 'party' or 'guild'
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
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_CREATE_TAG tool input.
 */
type HABITICA_CREATE_TAG_INPUT = {
  /**
   * Name
   * @description The tag's name
   */
  name?: string;
};

/**
 * Type of HABITICA's HABITICA_CREATE_TAG tool output.
 */
type HABITICA_CREATE_TAG_OUTPUT = {
  /**
   * Data
   * @description The created tag object
   */
  data?: {
      /**
       *  Id
       * @description The tag's unique identifier
       */
      _id: string;
      /**
       * Name
       * @description The tag's name
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
   * Success
   * @description Indicates if the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_CREATE_TASK tool input.
 */
type HABITICA_CREATE_TASK_INPUT = {
  /**
   * Alias
   * @description Alias for the task, used as a unique identifier
   * @default null
   */
  alias: string | null;
  /**
   * Attribute
   * @description Primary attribute linked to the task
   * @default null
   * @enum {string|null}
   */
  attribute: "str" | "int" | "per" | "con" | null;
  /**
   * Checklist
   * @description Checklist items for todo tasks
   * @default null
   */
  checklist: {
      /**
       * Completed
       * @description Whether the checklist item is completed
       * @default null
       */
      completed: boolean | null;
      /**
       * Text
       * @description Text of the checklist item
       */
      text: string;
  }[] | null;
  /**
   * Collapse Checklist
   * @description Whether checklist is collapsed by default
   * @default null
   */
  collapseChecklist: boolean | null;
  /**
   * Date
   * @description Due date for the To-Do
   * @default null
   */
  date: string | null;
  /**
   * Days Of Month
   * @description Specific days for monthly schedule
   * @default null
   */
  daysOfMonth: number[] | null;
  /**
   * Down
   * @description Enable − button (habit)
   * @default null
   */
  down: boolean | null;
  /**
   * Every X
   * @description Interval step for recurrence
   * @default null
   */
  everyX: number | null;
  /**
   * Frequency
   * @description Recurrence rule base: daily, weekly, monthly
   * @default null
   */
  frequency: string | null;
  /**
   * Notes
   * @description Additional notes or description for the task
   * @default null
   */
  notes: string | null;
  /**
   * Priority
   * @description Difficulty multiplier: 0.1 (Trivial), 1 (Easy), 1.5 (Medium), 2 (Hard)
   * @default null
   */
  priority: number | null;
  /**
   * Reminders
   * @description Reminders for the task
   * @default null
   */
  reminders: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Repeat
   * @description Weekly repeat flags: su,m,t,w,th,f,s
   * @default null
   */
  repeat: {
      [key: string]: boolean;
  } | null;
  /**
   * Start Date
   * @description Start date (ISO 8601)
   * @default null
   */
  startDate: string | null;
  /**
   * Tags
   * @description List of tag IDs to assign to the task
   * @default null
   */
  tags: string[] | null;
  /**
   * Text
   * @description Title of the task
   */
  text?: string;
  /**
   * Type
   * @description Type of the task: 'habit', 'daily', 'todo', or 'reward'
   * @enum {string}
   */
  type?: "habit" | "daily" | "todo" | "reward";
  /**
   * Up
   * @description Enable + button (habit)
   * @default null
   */
  up: boolean | null;
  /**
   * Value
   * @description Reward cost in Gold; required when type = reward
   * @default null
   */
  value: number | null;
  /**
   * Weeks Of Month
   * @description Specific weeks for monthly schedule
   * @default null
   */
  weeksOfMonth: number[] | null;
};

/**
 * Type of HABITICA's HABITICA_CREATE_TASK tool output.
 */
type HABITICA_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description The created task object with its properties
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
   * Success
   * @description Whether the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_CREATE_WEBHOOK tool input.
 */
type HABITICA_CREATE_WEBHOOK_INPUT = {
  /**
   * Enabled
   * @description Whether the webhook is enabled immediately upon creation
   * @default true
   */
  enabled: boolean | null;
  /**
   * Label
   * @description Optional human-friendly label for the webhook
   * @default null
   */
  label: string | null;
  /**
   * Options
   * @description Event-specific toggles; required when type='taskActivity'
   */
  options?: {
      /**
       * Created
       * @description Trigger when a task is created
       */
      created: boolean;
      /**
       * Deleted
       * @description Trigger when a task is deleted
       */
      deleted: boolean;
      /**
       * Scored
       * @description Trigger when a task is scored
       */
      scored: boolean;
      /**
       * Updated
       * @description Trigger when a task is updated
       */
      updated: boolean;
  };
  /**
   * Type
   * @description Event category to subscribe; only 'taskActivity' is supported
   * @constant
   */
  type?: "taskActivity";
  /**
   * Url
   * Format: uri
   * @description Destination URL for webhook POSTs
   */
  url?: string;
};

/**
 * Type of HABITICA's HABITICA_CREATE_WEBHOOK tool output.
 */
type HABITICA_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description The newly created webhook resource
   */
  data?: {
      /**
       * Enabled
       * @description Whether the webhook is active
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: string;
      /**
       * Label
       * @description Human-friendly label assigned
       * @default null
       */
      label: string | null;
      /**
       * Options
       * @description Configured event toggles
       */
      options: {
          /**
           * Created
           * @description Trigger when a task is created
           */
          created: boolean;
          /**
           * Deleted
           * @description Trigger when a task is deleted
           */
          deleted: boolean;
          /**
           * Scored
           * @description Trigger when a task is scored
           */
          scored: boolean;
          /**
           * Updated
           * @description Trigger when a task is updated
           */
          updated: boolean;
      };
      /**
       * Type
       * @description Event category of the webhook
       * @constant
       */
      type: "taskActivity";
      /**
       * Url
       * Format: uri
       * @description Destination URL for webhook POSTs
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
   * Success
   * @description True if the webhook was created successfully
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_DELETE_CHALLENGE tool input.
 */
type HABITICA_DELETE_CHALLENGE_INPUT = {
  /**
   * Challenge Id
   * @description The unique ID of the challenge to delete.
   */
  challengeId?: string;
};

/**
 * Type of HABITICA's HABITICA_DELETE_CHALLENGE tool output.
 */
type HABITICA_DELETE_CHALLENGE_OUTPUT = {
  /**
   * Data
   * @description Empty object on success.
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
   * Success
   * @description Whether the deletion was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_DELETE_CHALLENGE_TASK tool input.
 */
type HABITICA_DELETE_CHALLENGE_TASK_INPUT = {
  /**
   * Task Id
   * @description The ID of the challenge task to delete
   */
  task_id?: string;
};

/**
 * Type of HABITICA's HABITICA_DELETE_CHALLENGE_TASK tool output.
 */
type HABITICA_DELETE_CHALLENGE_TASK_OUTPUT = {
  /**
   * Data
   * @description Empty object returned on success
   */
  data?: Record<string, never>;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Optional success message returned by the API
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_DELETE_GROUP tool input.
 */
type HABITICA_DELETE_GROUP_INPUT = {
  /**
   * Group Id
   * @description The unique identifier of the Habitica group to delete/leave
   */
  groupId?: string;
};

/**
 * Type of HABITICA's HABITICA_DELETE_GROUP tool output.
 */
type HABITICA_DELETE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data returned by the API (may be empty object)
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
   * Message
   * @description Human-readable message describing the result
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates if the operation was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_DELETE_TAG tool input.
 */
type HABITICA_DELETE_TAG_INPUT = {
  /**
   * Tag Id
   * @description The unique identifier of the tag to delete
   */
  tagId?: string;
};

/**
 * Type of HABITICA's HABITICA_DELETE_TAG tool output.
 */
type HABITICA_DELETE_TAG_OUTPUT = {
  /**
   * Data
   * @description Additional data returned by the API (usually empty object)
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
   * Message
   * @description Human-readable message describing the result
   */
  message?: string;
  /**
   * Success
   * @description Whether the deletion was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_DELETE_TASK tool input.
 */
type HABITICA_DELETE_TASK_INPUT = {
  /**
   * Task Id
   * @description The unique identifier of the task to delete
   */
  taskId?: string;
};

/**
 * Type of HABITICA's HABITICA_DELETE_TASK tool output.
 */
type HABITICA_DELETE_TASK_OUTPUT = {
  /**
   * Data
   * @description The deleted task object returned by the API
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
   * Success
   * @description Whether the deletion succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_ACHIEVEMENTS tool input.
 */
type HABITICA_GET_ACHIEVEMENTS_INPUT = {
  /**
   * Language
   * @description Optional ISO 639-1/BCP-47 language code for localized content (e.g., 'en', 'es', 'pt-BR')
   * @default null
   */
  language: string | null;
};

/**
 * Type of HABITICA's HABITICA_GET_ACHIEVEMENTS tool output.
 */
type HABITICA_GET_ACHIEVEMENTS_OUTPUT = {
  /**
   * Data
   * @description Achievements content payload from Habitica's content API
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
   * Success
   * @description Indicates if the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_CHALLENGE tool input.
 */
type HABITICA_GET_CHALLENGE_INPUT = {
  /**
   * Challenge Id
   * @description The unique identifier (UUID) of the challenge to retrieve
   */
  challengeId?: string;
};

/**
 * Type of HABITICA's HABITICA_GET_CHALLENGE tool output.
 */
type HABITICA_GET_CHALLENGE_OUTPUT = {
  /**
   * Data
   * @description Challenge object returned
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the challenge
       */
      _id: string;
      /**
       * Chat
       * @description Chat channel ID for the challenge
       * @default null
       */
      chat: string | null;
      /**
       * Created At
       * @description ISO timestamp when challenge was created
       * @default null
       */
      createdAt: string | null;
      /**
       * Description
       * @description Detailed description of the challenge
       * @default null
       */
      description: string | null;
      /**
       * Group
       * @description Group details or ID the challenge belongs to
       * @default null
       */
      group: {
          [key: string]: unknown;
      } | null;
      /**
       * Leader
       * @description User ID of the challenge leader
       * @default null
       */
      leader: string | null;
      /**
       * Member Count
       * @description Number of members in the challenge
       * @default null
       */
      memberCount: number | null;
      /**
       * Name
       * @description Name of the challenge
       */
      name: string;
      /**
       * Official
       * @description Whether the challenge is official
       * @default null
       */
      official: boolean | null;
      /**
       * Participant Count
       * @description Number of participants in the challenge
       * @default null
       */
      participantCount: number | null;
      /**
       * Prize
       * @description Gem prize for completing the challenge
       * @default null
       */
      prize: number | null;
      /**
       * Short Name
       * @description Short/abbreviated name of the challenge
       * @default null
       */
      shortName: string | null;
      /**
       * Tasks
       * @description Tasks object containing lists of tasks
       * @default null
       */
      tasks: {
          /**
           * Dailys
           * @description List of daily tasks
           */
          dailys: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
          /**
           * Habits
           * @description List of habit tasks
           */
          habits: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
          /**
           * Rewards
           * @description List of reward tasks
           */
          rewards: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
          /**
           * Todos
           * @description List of todo tasks
           */
          todos: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
      } | null;
      /**
       * TasksOrder
       * @description Order of tasks in the challenge
       * @default null
       */
      tasksOrder: {
          /**
           * Dailys
           * @description Order of daily task IDs for the challenge
           */
          dailys: string[];
          /**
           * Habits
           * @description Order of habit task IDs for the challenge
           */
          habits: string[];
          /**
           * Rewards
           * @description Order of reward task IDs for the challenge
           */
          rewards: string[];
          /**
           * Todos
           * @description Order of todo task IDs for the challenge
           */
          todos: string[];
      } | null;
      /**
       * Updated At
       * @description ISO timestamp when challenge was last updated
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
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_CHALLENGES tool input.
 */
type HABITICA_GET_CHALLENGES_INPUT = {
  /**
   * Group Id
   * @description ID of the group whose challenges to list. Use 'party' for the user's party and 'habitrpg' for the Tavern.
   */
  groupId?: string;
  /**
   * Limit
   * @description Deprecated: Ignored by this endpoint.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Deprecated: Ignored by this endpoint.
   * @default null
   */
  page: number | null;
};

/**
 * Type of HABITICA's HABITICA_GET_CHALLENGES tool output.
 */
type HABITICA_GET_CHALLENGES_OUTPUT = {
  /**
   * Data
   * @description List of retrieved challenges
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the challenge
       */
      _id: string;
      /**
       * Chat
       * @description Chat channel ID for the challenge
       * @default null
       */
      chat: string | null;
      /**
       * Created At
       * @description ISO timestamp when challenge was created
       * @default null
       */
      createdAt: string | null;
      /**
       * ChallengeGroup
       * @description Group details the challenge belongs to
       * @default null
       */
      group: {
          /**
           * Id
           * @description ID of the group the challenge belongs to
           */
          id: string;
          /**
           * Name
           * @description Name of the group the challenge belongs to
           */
          name: string;
      } | null;
      /**
       * Leader
       * @description User ID of the challenge leader
       * @default null
       */
      leader: string | null;
      /**
       * Member Count
       * @description Number of members in the challenge
       * @default null
       */
      memberCount: number | null;
      /**
       * Name
       * @description Name of the challenge
       */
      name: string;
      /**
       * Official
       * @description Whether the challenge is official
       * @default null
       */
      official: boolean | null;
      /**
       * Participant Count
       * @description Number of participants in the challenge
       * @default null
       */
      participantCount: number | null;
      /**
       * Prize
       * @description Gold prize for completing the challenge
       * @default null
       */
      prize: number | null;
      /**
       * Summary
       * @description Short summary of the challenge
       * @default null
       */
      summary: string | null;
      /**
       * Tasks
       * @description Tasks object containing lists of tasks
       * @default null
       */
      tasks: {
          /**
           * Dailys
           * @description List of daily tasks
           */
          dailys: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
          /**
           * Habits
           * @description List of habit tasks
           */
          habits: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
          /**
           * Rewards
           * @description List of reward tasks
           */
          rewards: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
          /**
           * Todos
           * @description List of todo tasks
           */
          todos: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
      } | null;
      /**
       * TasksOrder
       * @description Order of tasks in the challenge
       * @default null
       */
      tasksOrder: {
          /**
           * Dailys
           * @description Order of daily task IDs for the challenge
           */
          dailys: string[];
          /**
           * Habits
           * @description Order of habit task IDs for the challenge
           */
          habits: string[];
          /**
           * Rewards
           * @description Order of reward task IDs for the challenge
           */
          rewards: string[];
          /**
           * Todos
           * @description Order of todo task IDs for the challenge
           */
          todos: string[];
      } | null;
      /**
       * Updated At
       * @description ISO timestamp when challenge was last updated
       * @default null
       */
      updatedAt: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_CHALLENGE_TASK tool input.
 */
type HABITICA_GET_CHALLENGE_TASK_INPUT = {
  /**
   * Task Id
   * @description The unique identifier (UUID) of the challenge task to retrieve
   */
  task_id?: string;
};

/**
 * Type of HABITICA's HABITICA_GET_CHALLENGE_TASK tool output.
 */
type HABITICA_GET_CHALLENGE_TASK_OUTPUT = {
  /**
   * Data
   * @description The task object returned by the API
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
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_CHALLENGE_TASKS tool input.
 */
type HABITICA_GET_CHALLENGE_TASKS_INPUT = {
  /**
   * Challenge Id
   * @description The unique identifier (UUID) of the challenge to retrieve tasks for
   */
  challengeId?: string;
};

/**
 * Type of HABITICA's HABITICA_GET_CHALLENGE_TASKS tool output.
 */
type HABITICA_GET_CHALLENGE_TASKS_OUTPUT = {
  /**
   * Data
   * @description List of task objects defined in the challenge
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
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_CONTENT tool input.
 */
type HABITICA_GET_CONTENT_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_CONTENT tool output.
 */
type HABITICA_GET_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Global game content payload (items, equipment, pets, quests, etc.)
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
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_CONTENT_BY_TYPE tool input.
 */
type HABITICA_GET_CONTENT_BY_TYPE_INPUT = {
  /**
   * Language
   * @description Optional ISO 639-1 language code for localized content
   * @default null
   */
  language: string | null;
  /**
   * Type
   * @description Content group key to retrieve, e.g., 'items', 'quests', 'backgrounds', etc.
   */
  type?: string;
};

/**
 * Type of HABITICA's HABITICA_GET_CONTENT_BY_TYPE tool output.
 */
type HABITICA_GET_CONTENT_BY_TYPE_OUTPUT = {
  /**
   * Data
   * @description Content payload for the requested type
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
   * Success
   * @description Indicates if the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_EQUIPMENT tool input.
 */
type HABITICA_GET_EQUIPMENT_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_EQUIPMENT tool output.
 */
type HABITICA_GET_EQUIPMENT_OUTPUT = {
  /**
   * Data
   * @description The user’s equipment state.
   */
  data?: {
      /**
       * Costume
       * @description Same shape as `equipped`, representing costume slots and their current items.
       */
      costume: {
          [key: string]: string;
      };
      /**
       * Equipped
       * @description Map of equipment slots to gear keys currently equipped (e.g., 'weapon', 'armor').
       */
      equipped: {
          [key: string]: string;
      };
      /**
       * Owned
       * @description Map of gear item keys to ownership status (true if the user owns the item).
       */
      owned: {
          [key: string]: boolean;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Indicates whether the API call was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_GROUP tool input.
 */
type HABITICA_GET_GROUP_INPUT = {
  /**
   * Group Id
   * @description The unique identifier (UUID) of the group to retrieve
   */
  groupId?: string;
};

/**
 * Type of HABITICA's HABITICA_GET_GROUP tool output.
 */
type HABITICA_GET_GROUP_OUTPUT = {
  /**
   * Data
   * @description Group object returned by the API
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the group
       */
      _id: string;
      /**
       * Balance
       * @description Current gem balance of the group
       */
      balance: number;
      /**
       * Categories
       * @description List of category IDs (only for guilds)
       * @default null
       */
      categories: string[] | null;
      /**
       * Leader
       * @description User ID of the group's leader
       */
      leader: string;
      /**
       * Member Count
       * @description Number of members in the group
       */
      memberCount: number;
      /**
       * Name
       * @description Display name of the group
       */
      name: string;
      /**
       * Privacy
       * @description Visibility setting of the group, e.g., 'public' or 'private'
       */
      privacy: string;
      /**
       * Type
       * @description Type of group, e.g., 'guild' or 'party'
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
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_GROUPS tool input.
 */
type HABITICA_GET_GROUPS_INPUT = {
  /**
   * Limit
   * @description Number of items to retrieve per page
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Filter groups by name substring
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page index for pagination (0-based)
   * @default null
   */
  page: number | null;
  /**
   * Type
   * @description Type of groups to retrieve: 'guild', 'party', 'tavern'
   * @default null
   */
  type: string | null;
};

/**
 * Type of HABITICA's HABITICA_GET_GROUPS tool output.
 */
type HABITICA_GET_GROUPS_OUTPUT = {
  /**
   * Data
   * @description List of group objects matching the query
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
   * Pagination
   * @description Pagination details if supported by the endpoint
   * @default null
   */
  pagination: {
      [key: string]: unknown;
  } | null;
  /**
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_GROUP_MEMBERS tool input.
 */
type HABITICA_GET_GROUP_MEMBERS_INPUT = {
  /**
   * Group Id
   * @description The unique identifier (UUID) of the group to retrieve members for
   */
  groupId?: string;
};

/**
 * Type of HABITICA's HABITICA_GET_GROUP_MEMBERS tool output.
 */
type HABITICA_GET_GROUP_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description List of group member objects returned by the API
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
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_NOTIFICATIONS tool input.
 */
type HABITICA_GET_NOTIFICATIONS_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_NOTIFICATIONS tool output.
 */
type HABITICA_GET_NOTIFICATIONS_OUTPUT = {
  /**
   * Data
   * @description List of the user's notifications
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the notification was created
       * @default null
       */
      createdAt: string | null;
      /**
       * Data
       * @description Type-specific payload for the notification
       */
      data: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Unique identifier of the notification
       */
      id: string;
      /**
       * Seen
       * @description Whether the notification has been viewed
       */
      seen: boolean;
      /**
       * Type
       * @description Notification type key
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
   * Message
   * @description Optional informational message from the server
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_PARTY tool input.
 */
type HABITICA_GET_PARTY_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_PARTY tool output.
 */
type HABITICA_GET_PARTY_OUTPUT = {
  /**
   * Data
   * @description Party (group) object returned by the API
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the party
       */
      _id: string;
      /**
       * Balance
       * @description Current gem balance of the party
       */
      balance: number;
      /**
       * Chat
       * @description List of chat message objects for the party
       */
      chat: {
          [key: string]: unknown;
      }[];
      /**
       * Description
       * @description Description of the party
       * @default null
       */
      description: string | null;
      /**
       * Leader
       * @description User ID of the party leader or object containing leader details
       */
      leader: string | null;
      /**
       * Leader Only
       * @description Permissions reserved for the party leader
       */
      leaderOnly: {
          [key: string]: boolean;
      };
      /**
       * Managers
       * @description Mapping of manager user IDs to boolean indicating manager status
       */
      managers: {
          [key: string]: boolean;
      };
      /**
       * Member Count
       * @description Number of members in the party
       */
      memberCount: number;
      /**
       * Name
       * @description Name of the party
       */
      name: string;
      /**
       * Privacy
       * @description Privacy setting of the party, e.g., 'public' or 'private'
       */
      privacy: string;
      /**
       * Quest
       * @description Current quest state for the party
       */
      quest: {
          [key: string]: unknown;
      };
      /**
       * Type
       * @description Type of group; should be 'party'
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
   * Success
   * @description Whether the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_PARTY_MEMBERS tool input.
 */
type HABITICA_GET_PARTY_MEMBERS_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_PARTY_MEMBERS tool output.
 */
type HABITICA_GET_PARTY_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description List of party member objects returned by the API
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
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_TAGS tool input.
 */
type HABITICA_GET_TAGS_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_TAGS tool output.
 */
type HABITICA_GET_TAGS_OUTPUT = {
  /**
   * Data
   * @description List of the user's tags
   */
  data?: {
      /**
       * Id
       * @description Tag's unique identifier (UUID)
       */
      id: string;
      /**
       * Name
       * @description Tag's display name
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
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_TASKS tool input.
 */
type HABITICA_GET_TASKS_INPUT = {
  /**
   * Type
   * @description Optional filter by one or more task types. Valid values: 'habits', 'dailys', 'todos', 'rewards', 'completedTodos'.
   * @default null
   */
  type: string[] | null;
};

/**
 * Type of HABITICA's HABITICA_GET_TASKS tool output.
 */
type HABITICA_GET_TASKS_OUTPUT = {
  /**
   * Data
   * @description List of task objects for the authenticated user
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
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_USER_ACHIEVEMENTS tool input.
 */
type HABITICA_GET_USER_ACHIEVEMENTS_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_USER_ACHIEVEMENTS tool output.
 */
type HABITICA_GET_USER_ACHIEVEMENTS_OUTPUT = {
  /**
   * Data
   * @description Mapping of achievement keys to their progress details
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
   * Message
   * @description Optional human-readable message from the server
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_USER_CHALLENGES tool input.
 */
type HABITICA_GET_USER_CHALLENGES_INPUT = {
  /**
   * Member
   * @description If true, only return challenges the user has joined
   * @default null
   */
  member: boolean | null;
  /**
   * Owned
   * @description Filter by ownership; 'owned' or 'not_owned'
   * @default null
   * @enum {string|null}
   */
  owned: "owned" | "not_owned" | null;
  /**
   * Page
   * @description Zero-indexed page number; returns 10 challenges per page
   * @default null
   */
  page: number | null;
};

/**
 * Type of HABITICA's HABITICA_GET_USER_CHALLENGES tool output.
 */
type HABITICA_GET_USER_CHALLENGES_OUTPUT = {
  /**
   * Data
   * @description List of challenges the user has access to
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the challenge
       */
      _id: string;
      /**
       * Chat
       * @description Chat channel ID for the challenge
       * @default null
       */
      chat: string | null;
      /**
       * Created At
       * @description ISO timestamp when challenge was created
       * @default null
       */
      createdAt: string | null;
      /**
       * ChallengeGroup
       * @description Group details the challenge belongs to
       * @default null
       */
      group: {
          /**
           * Id
           * @description ID of the group the challenge belongs to
           */
          id: string;
          /**
           * Name
           * @description Name of the group the challenge belongs to
           */
          name: string;
      } | null;
      /**
       * Leader
       * @description User ID of the challenge leader
       * @default null
       */
      leader: string | null;
      /**
       * Member Count
       * @description Number of members in the challenge
       * @default null
       */
      memberCount: number | null;
      /**
       * Name
       * @description Name of the challenge
       */
      name: string;
      /**
       * Official
       * @description Whether the challenge is official
       * @default null
       */
      official: boolean | null;
      /**
       * Participant Count
       * @description Number of participants in the challenge
       * @default null
       */
      participantCount: number | null;
      /**
       * Prize
       * @description Gold prize for completing the challenge
       * @default null
       */
      prize: number | null;
      /**
       * Summary
       * @description Short summary of the challenge
       * @default null
       */
      summary: string | null;
      /**
       * Tasks
       * @description Tasks object containing lists of tasks
       * @default null
       */
      tasks: {
          /**
           * Dailys
           * @description List of daily tasks
           */
          dailys: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
          /**
           * Habits
           * @description List of habit tasks
           */
          habits: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
          /**
           * Rewards
           * @description List of reward tasks
           */
          rewards: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
          /**
           * Todos
           * @description List of todo tasks
           */
          todos: {
              /**
               * Attribute
               * @description Attribute affected by the task, e.g., 'strength'
               * @default null
               */
              attribute: string | null;
              /**
               * Challenge
               * @description ID of the challenge this task belongs to
               * @default null
               */
              challenge: string | null;
              /**
               * Id
               * @description Task unique identifier
               */
              id: string;
              /**
               * Notes
               * @description Notes for the task
               * @default null
               */
              notes: string | null;
              /**
               * Priority
               * @description Priority of the task
               * @default null
               */
              priority: number | null;
              /**
               * Text
               * @description Text of the task
               */
              text: string;
              /**
               * Type
               * @description Task type, e.g., 'todo', 'daily', 'habit'
               */
              type: string;
          }[];
      } | null;
      /**
       * TasksOrder
       * @description Order of tasks in the challenge
       * @default null
       */
      tasksOrder: {
          /**
           * Dailys
           * @description Order of daily task IDs for the challenge
           */
          dailys: string[];
          /**
           * Habits
           * @description Order of habit task IDs for the challenge
           */
          habits: string[];
          /**
           * Rewards
           * @description Order of reward task IDs for the challenge
           */
          rewards: string[];
          /**
           * Todos
           * @description Order of todo task IDs for the challenge
           */
          todos: string[];
      } | null;
      /**
       * Updated At
       * @description ISO timestamp when challenge was last updated
       * @default null
       */
      updatedAt: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_USER_INVENTORY tool input.
 */
type HABITICA_GET_USER_INVENTORY_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_USER_INVENTORY tool output.
 */
type HABITICA_GET_USER_INVENTORY_OUTPUT = {
  /**
   * Data
   * @description The user's complete inventory data.
   */
  data?: {
      /**
       * Eggs
       * @description Mapping of egg item keys to quantity owned
       */
      eggs: {
          [key: string]: number;
      };
      /**
       * Food
       * @description Mapping of food item keys to quantity owned.
       */
      food: {
          [key: string]: number;
      };
      /**
       * Gear
       * @description The user's gear details, including owned items and equipped gear.
       */
      gear: {
          /**
           * Costume
           * @description Map of costume slots to gear keys currently worn by the user.
           */
          costume: {
              [key: string]: string;
          };
          /**
           * Equipped
           * @description Map of equipment slots to gear keys currently equipped (e.g., 'weapon', 'armor').
           */
          equipped: {
              [key: string]: string;
          };
          /**
           * Owned
           * @description Map of gear item keys to ownership status (true if the user owns the item).
           */
          owned: {
              [key: string]: boolean;
          };
      };
      /**
       * Hatching Potions
       * @description Mapping of hatching potion keys to quantity owned
       */
      hatchingPotions: {
          [key: string]: number;
      };
      /**
       * Mounts
       * @description Mapping of mount item keys to ownership status
       */
      mounts: {
          [key: string]: boolean;
      };
      /**
       * Pets
       * @description Mapping of pet item keys to quantity or growth points
       */
      pets: {
          [key: string]: number;
      };
      /**
       * Quests
       * @description Mapping of quest scroll keys to quantity owned
       */
      quests: {
          [key: string]: number;
      };
      /**
       * Special
       * @description Mapping of special item keys to values (boolean or counts).
       */
      special: {
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
   * Message
   * @description Optional human-readable message from the server.
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates whether the API call was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_USER_PROFILE tool input.
 */
type HABITICA_GET_USER_PROFILE_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_USER_PROFILE tool output.
 */
type HABITICA_GET_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Authenticated user's full profile object
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
   * Message
   * @description Optional localized message from the server
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_USER_QUEST_PROGRESS tool input.
 */
type HABITICA_GET_USER_QUEST_PROGRESS_INPUT = {
  /**
   * Group Id
   * @description Group identifier to inspect for quest progress. Use 'party' to target the caller's party.
   * @default party
   */
  group_id: string;
  /**
   * Note
   * @description Optional note for testing purposes; ignored by the API call and response normalization.
   * @default null
   */
  note: string | null;
};

/**
 * Type of HABITICA's HABITICA_GET_USER_QUEST_PROGRESS tool output.
 */
type HABITICA_GET_USER_QUEST_PROGRESS_OUTPUT = {
  /**
   * Data
   * @description Mapping of quest keys to their progress details
   */
  data?: {
      [key: string]: {
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
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_USER_STATS tool input.
 */
type HABITICA_GET_USER_STATS_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_USER_STATS tool output.
 */
type HABITICA_GET_USER_STATS_OUTPUT = {
  /**
   * Data
   * @description Container for the user's stats
   */
  data?: {
      /**
       * Stats
       * @description The user's statistics object
       */
      stats: {
          /**
           * Buffed Class
           * @description Class after buffs applied
           */
          buffedClass: string;
          /**
           * Buffs
           * @description Active stat buffs
           */
          buffs: {
              /**
               * Con
               * @description Constitution buff multiplier
               */
              con: number;
              /**
               * Int
               * @description Intelligence buff multiplier
               */
              int: number;
              /**
               * Per
               * @description Perception buff multiplier
               */
              per: number;
              /**
               * Str
               * @description Strength buff multiplier
               */
              str: number;
          };
          /**
           * Can Get Buffed
           * @description Whether user can receive buffs
           */
          canGetBuffed: boolean;
          /**
           * Class
           * @description User's class/job
           */
          class: string;
          /**
           * Cp
           * @description Current challenge points
           */
          cp: number;
          /**
           * Exp
           * @description Current experience points
           */
          exp: number;
          /**
           * Gp
           * @description Current gold balance
           */
          gp: number;
          /**
           * Hp
           * @description Current health points
           */
          hp: number;
          /**
           * Lvl
           * @description Current level
           */
          lvl: number;
          /**
           * Mp
           * @description Current mana points
           */
          mp: number;
          /**
           * Passives
           * @description Passive stat bonuses for each attribute
           */
          passives: {
              [key: string]: number;
          };
          /**
           * Points
           * @description Unspent attribute points
           */
          points: number;
          /**
           * Stat Order
           * @description Order of attributes for display
           */
          statOrder: string[];
          /**
           * To Next Level
           * @description Experience needed to reach next level
           */
          toNextLevel: number;
          /**
           * Training
           * @description Active stat training flags
           */
          training: {
              /**
               * Con
               * @description True if training constitution
               */
              con: boolean;
              /**
               * Int
               * @description True if training intelligence
               */
              int: boolean;
              /**
               * Per
               * @description True if training perception
               */
              per: boolean;
              /**
               * Str
               * @description True if training strength
               */
              str: boolean;
          };
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Optional message from the server
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_USER_SUBSCRIPTION tool input.
 */
type HABITICA_GET_USER_SUBSCRIPTION_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_USER_SUBSCRIPTION tool output.
 */
type HABITICA_GET_USER_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Subscription data for the authenticated user.
   */
  data?: {
      /**
       * Consecutive
       * @description Tracks consecutive subscription benefits.
       */
      consecutive?: {
          /**
           * Count
           * @description Total consecutive months of subscription benefits.
           * @default 0
           */
          count: number;
          /**
           * Gem Cap Extra
           * @description Extra monthly gems purchasable with gold from consecutive months.
           * @default 0
           */
          gemCapExtra: number;
          /**
           * Offset
           * @description Internal offset used by benefits logic.
           * @default 0
           */
          offset: number;
          /**
           * Trinkets
           * @description Mystic Hourglasses earned from consecutive months.
           * @default 0
           */
          trinkets: number;
      };
      /**
       * Customer Id
       * @description Identifier for the customer within the payment system or a special tag for group/gift.
       * @default null
       */
      customerId: string | null;
      /**
       * Date Created
       * @description Subscription creation timestamp in ISO 8601 format.
       * @default null
       */
      dateCreated: string | null;
      /**
       * Date Terminated
       * @description Timestamp when the subscription ends or ended (null if active).
       * @default null
       */
      dateTerminated: string | null;
      /**
       * Date Updated
       * @description Last update timestamp for the subscription record in ISO 8601 format.
       * @default null
       */
      dateUpdated: string | null;
      /**
       * Extra Months
       * @description Extra prepaid months remaining.
       * @default 0
       */
      extraMonths: number;
      /**
       * Gems Bought
       * @description Count of gems purchased while subscribed (lifetime tracker).
       * @default 0
       */
      gemsBought: number;
      /**
       * Last Billing Date
       * @description Last successful billing timestamp, if applicable.
       * @default null
       */
      lastBillingDate: string | null;
      /**
       * Mystery Items
       * @description Unclaimed subscriber mystery item identifiers.
       */
      mysteryItems?: string[];
      /**
       * Next Billing Date
       * @description Next scheduled billing date, if applicable.
       * @default null
       */
      nextBillingDate: string | null;
      /**
       * Next Payment Processing
       * @description Next processing timestamp for payment, if applicable.
       * @default null
       */
      nextPaymentProcessing: string | null;
      /**
       * Owner
       * @description User ID that owns the subscription record (may be null).
       * @default null
       */
      owner: string | null;
      /**
       * Payment Method
       * @description Payment provider or source (e.g., Stripe, PayPal, Apple, Google, Group Plan).
       * @default null
       */
      paymentMethod: string | null;
      /**
       * Plan Id
       * @description Current plan identifier (e.g., recurring, gift, group plan).
       * @default null
       */
      planId: string | null;
      /**
       * Quantity
       * @description Number of plan seats or units (typically 1 for individual subscriptions).
       * @default 0
       */
      quantity: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Indicates if the request succeeded.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_GET_WEBHOOKS tool input.
 */
type HABITICA_GET_WEBHOOKS_INPUT = object;

/**
 * Type of HABITICA's HABITICA_GET_WEBHOOKS tool output.
 */
type HABITICA_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description List of the user's webhooks
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Enabled
       * @description Whether the webhook is active
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: string;
      /**
       * Label
       * @description Human-readable label for the webhook
       */
      label: string;
      /**
       * Options
       * @description Additional configuration options for the webhook
       */
      options: {
          [key: string]: unknown;
      };
      /**
       * Type
       * @description Event type or list of event types this webhook subscribes to
       */
      type: string | null;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       */
      updatedAt: string;
      /**
       * Url
       * @description Destination URL that Habitica will call
       */
      url: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Indicates whether the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_INVITE_TO_GROUP tool input.
 */
type HABITICA_INVITE_TO_GROUP_INPUT = {
  /**
   * Emails
   * @description List of email addresses or objects to invite non-registered users. If strings are provided, they will be converted to objects {'email': '<address>'}.
   * @default null
   */
  emails: (string | {
      /**
       * Email
       * @description Email address to invite
       */
      email: string;
      /**
       * Name
       * @description Optional display name to include with the email invite
       * @default null
       */
      name: string | null;
  })[] | null;
  /**
   * Group Id
   * @description The unique identifier (UUID) of the group to invite users to. 'party' is also accepted for inviting to your party.
   */
  groupId?: string;
  /**
   * Message
   * @description Custom invitation message to include
   * @default null
   */
  message: string | null;
  /**
   * Usernames
   * @description List of Habitica usernames to invite
   * @default null
   */
  usernames: string[] | null;
  /**
   * Uuids
   * @description List of Habitica user UUIDs to invite
   * @default null
   */
  uuids: string[] | null;
};

/**
 * Type of HABITICA's HABITICA_INVITE_TO_GROUP tool output.
 */
type HABITICA_INVITE_TO_GROUP_OUTPUT = {
  /**
   * Data
   * @description Details of invitations sent by the API
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
   * Message
   * @description Informational message returned by Habitica
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates if the invitation request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_INVITE_TO_PARTY tool input.
 */
type HABITICA_INVITE_TO_PARTY_INPUT = {
  /**
   * Emails
   * @description List of email addresses to invite non-registered users
   * @default null
   */
  emails: string[] | null;
  /**
   * Message
   * @description Optional custom invitation message
   * @default null
   */
  message: string | null;
  /**
   * Usernames
   * @description List of Habitica usernames to invite
   * @default null
   */
  usernames: string[] | null;
  /**
   * Uuids
   * @description List of Habitica user UUIDs to invite to the party
   * @default null
   */
  uuids: string[] | null;
};

/**
 * Type of HABITICA's HABITICA_INVITE_TO_PARTY tool output.
 */
type HABITICA_INVITE_TO_PARTY_OUTPUT = {
  /**
   * Data
   * @description Data containing details about invitations sent
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
   * Message
   * @description Informational message returned by Habitica
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates whether the invitation request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_JOIN_CHALLENGE tool input.
 */
type HABITICA_JOIN_CHALLENGE_INPUT = {
  /**
   * Challenge Id
   * @description Unique identifier of the challenge to join
   */
  challengeId?: string;
};

/**
 * Type of HABITICA's HABITICA_JOIN_CHALLENGE tool output.
 */
type HABITICA_JOIN_CHALLENGE_OUTPUT = {
  /**
   * Data
   * @description Response data returned by the API
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
   * Message
   * @description A message from Habitica about the join status
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Whether the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_LEAVE_CHALLENGE tool input.
 */
type HABITICA_LEAVE_CHALLENGE_INPUT = {
  /**
   * Challenge Id
   * @description The unique ID of the challenge to leave.
   */
  challengeId?: string;
  /**
   * Keep
   * @description What to do with the challenge’s tasks upon leaving: `keep-all` to retain your tasks, `remove-all` to delete them.
   * @enum {string}
   */
  keep?: "keep-all" | "remove-all";
};

/**
 * Type of HABITICA's HABITICA_LEAVE_CHALLENGE tool output.
 */
type HABITICA_LEAVE_CHALLENGE_OUTPUT = {
  /**
   * Data
   * @description Result payload for the operation (may be empty).
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
   * Message
   * @description Human-readable message about the result.
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Whether the API call was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_LOCAL_LOGIN tool input.
 */
type HABITICA_LOCAL_LOGIN_INPUT = {
  /**
   * Password
   * @description User's password for local authentication
   */
  password?: string;
  /**
   * Username
   * @description User's Habitica username for local authentication
   */
  username?: string;
};

/**
 * Type of HABITICA's HABITICA_LOCAL_LOGIN tool output.
 */
type HABITICA_LOCAL_LOGIN_OUTPUT = {
  /**
   * Data
   * @description Authenticated user object and credentials
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
   * Message
   * @description Error message in case of failed login
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates whether the login was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_LOCAL_REGISTER tool input.
 */
type HABITICA_LOCAL_REGISTER_INPUT = {
  /**
   * Confirm Password
   * @description Password confirmation; must match the `password` field.
   */
  confirmPassword?: string;
  /**
   * Email
   * @description Email address of the new user.
   */
  email?: string;
  /**
   * Password
   * @description Password for the new user.
   */
  password?: string;
  /**
   * Username
   * @description Login name; 1–36 characters; lowercase a–z, digits, hyphens (-), underscores (_).
   */
  username?: string;
};

/**
 * Type of HABITICA's HABITICA_LOCAL_REGISTER tool output.
 */
type HABITICA_LOCAL_REGISTER_OUTPUT = {
  /**
   * Data
   * @description The created user object returned by Habitica
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
   * Message
   * @description Optional message returned by the API
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Whether the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_MARK_NOTIFICATIONS_SEEN tool input.
 */
type HABITICA_MARK_NOTIFICATIONS_SEEN_INPUT = {
  /**
   * Notification Ids
   * @description List of notification IDs to mark as read
   */
  notificationIds?: string[];
};

/**
 * Type of HABITICA's HABITICA_MARK_NOTIFICATIONS_SEEN tool output.
 */
type HABITICA_MARK_NOTIFICATIONS_SEEN_OUTPUT = {
  /**
   * Data
   * @description Array returned by the API; typically an empty list
   */
  data?: unknown[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Indicates if the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_REMOVE_FROM_PARTY tool input.
 */
type HABITICA_REMOVE_FROM_PARTY_INPUT = {
  /**
   * Member Id
   * @description UUID of the party member to remove
   */
  memberId?: string;
  /**
   * Message
   * @description Optional message/reason displayed to the removed member
   * @default null
   */
  message: string | null;
};

/**
 * Type of HABITICA's HABITICA_REMOVE_FROM_PARTY tool output.
 */
type HABITICA_REMOVE_FROM_PARTY_OUTPUT = {
  /**
   * Data
   * @description Updated party object or status returned by the API
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
   * Message
   * @description Optional status message returned by Habitica
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Whether the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_SCORE_TASK tool input.
 */
type HABITICA_SCORE_TASK_INPUT = {
  /**
   * Direction
   * @description Score direction; 'up' to check (complete), 'down' to uncheck
   * @enum {string}
   */
  direction?: "up" | "down";
  /**
   * Task Id
   * @description UUID of the task to score
   */
  taskId?: string;
};

/**
 * Type of HABITICA's HABITICA_SCORE_TASK tool output.
 */
type HABITICA_SCORE_TASK_OUTPUT = {
  /**
   * Data
   * @description Updated user stats and task data
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
   * Message
   * @description Message returned by Habitica
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Whether the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_SOCIAL_AUTH tool input.
 */
type HABITICA_SOCIAL_AUTH_INPUT = {
  /**
   * Access Token
   * @description Facebook access token (required if service is facebook)
   * @default null
   */
  access_token: string | null;
  /**
   * Code
   * @description GitHub authorization code (required if service is github)
   * @default null
   */
  code: string | null;
  /**
   * Id Token
   * @description Google or Apple ID token (required if service is google or apple)
   * @default null
   */
  id_token: string | null;
  /**
   * Redirect Uri
   * @description Redirect URI for GitHub OAuth (required if service is github)
   * @default null
   */
  redirect_uri: string | null;
  /**
   * Service
   * @description Social provider to authenticate with. One of: facebook, google, github, apple
   * @enum {string}
   */
  service?: "facebook" | "google" | "github" | "apple";
};

/**
 * Type of HABITICA's HABITICA_SOCIAL_AUTH tool output.
 */
type HABITICA_SOCIAL_AUTH_OUTPUT = {
  /**
   * Data
   * @description Authentication data payload, including user details and API token
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
   * Message
   * @description Optional localized message from the server
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates whether authentication succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HABITICA's HABITICA_SUBSCRIBE_WEBHOOK tool input.
 */
type HABITICA_SUBSCRIBE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to subscribe the user to
   */
  webhookId?: string;
};

/**
 * Type of HABITICA's HABITICA_SUBSCRIBE_WEBHOOK tool output.
 */
type HABITICA_SUBSCRIBE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description The updated webhook object with subscription status
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Enabled
       * @description Whether the webhook is active and receiving events
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: string;
      /**
       * Label
       * @description Human-readable label for the webhook
       */
      label: string;
      /**
       * Options
       * @description Additional configuration options for the webhook
       */
      options: {
          [key: string]: unknown;
      };
      /**
       * Type
       * @description Event type or list of event types this webhook subscribes to
       */
      type: string | null;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       */
      updatedAt: string;
      /**
       * Url
       * @description Destination URL that Habitica will call when the event occurs
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
   * Success
   * @description Indicates whether the subscription request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "HABITICA".
 */
export type HABITICA_TOOL_INPUTS = {
  ADD_CHALLENGE_TASK: HABITICA_ADD_CHALLENGE_TASK_INPUT
  CANCEL_SUBSCRIPTION: HABITICA_CANCEL_SUBSCRIPTION_INPUT
  CREATE_CHALLENGE: HABITICA_CREATE_CHALLENGE_INPUT
  CREATE_GROUP: HABITICA_CREATE_GROUP_INPUT
  CREATE_TAG: HABITICA_CREATE_TAG_INPUT
  CREATE_TASK: HABITICA_CREATE_TASK_INPUT
  CREATE_WEBHOOK: HABITICA_CREATE_WEBHOOK_INPUT
  DELETE_CHALLENGE: HABITICA_DELETE_CHALLENGE_INPUT
  DELETE_CHALLENGE_TASK: HABITICA_DELETE_CHALLENGE_TASK_INPUT
  DELETE_GROUP: HABITICA_DELETE_GROUP_INPUT
  DELETE_TAG: HABITICA_DELETE_TAG_INPUT
  DELETE_TASK: HABITICA_DELETE_TASK_INPUT
  GET_ACHIEVEMENTS: HABITICA_GET_ACHIEVEMENTS_INPUT
  GET_CHALLENGE: HABITICA_GET_CHALLENGE_INPUT
  GET_CHALLENGES: HABITICA_GET_CHALLENGES_INPUT
  GET_CHALLENGE_TASK: HABITICA_GET_CHALLENGE_TASK_INPUT
  GET_CHALLENGE_TASKS: HABITICA_GET_CHALLENGE_TASKS_INPUT
  GET_CONTENT: HABITICA_GET_CONTENT_INPUT
  GET_CONTENT_BY_TYPE: HABITICA_GET_CONTENT_BY_TYPE_INPUT
  GET_EQUIPMENT: HABITICA_GET_EQUIPMENT_INPUT
  GET_GROUP: HABITICA_GET_GROUP_INPUT
  GET_GROUPS: HABITICA_GET_GROUPS_INPUT
  GET_GROUP_MEMBERS: HABITICA_GET_GROUP_MEMBERS_INPUT
  GET_NOTIFICATIONS: HABITICA_GET_NOTIFICATIONS_INPUT
  GET_PARTY: HABITICA_GET_PARTY_INPUT
  GET_PARTY_MEMBERS: HABITICA_GET_PARTY_MEMBERS_INPUT
  GET_TAGS: HABITICA_GET_TAGS_INPUT
  GET_TASKS: HABITICA_GET_TASKS_INPUT
  GET_USER_ACHIEVEMENTS: HABITICA_GET_USER_ACHIEVEMENTS_INPUT
  GET_USER_CHALLENGES: HABITICA_GET_USER_CHALLENGES_INPUT
  GET_USER_INVENTORY: HABITICA_GET_USER_INVENTORY_INPUT
  GET_USER_PROFILE: HABITICA_GET_USER_PROFILE_INPUT
  GET_USER_QUEST_PROGRESS: HABITICA_GET_USER_QUEST_PROGRESS_INPUT
  GET_USER_STATS: HABITICA_GET_USER_STATS_INPUT
  GET_USER_SUBSCRIPTION: HABITICA_GET_USER_SUBSCRIPTION_INPUT
  GET_WEBHOOKS: HABITICA_GET_WEBHOOKS_INPUT
  INVITE_TO_GROUP: HABITICA_INVITE_TO_GROUP_INPUT
  INVITE_TO_PARTY: HABITICA_INVITE_TO_PARTY_INPUT
  JOIN_CHALLENGE: HABITICA_JOIN_CHALLENGE_INPUT
  LEAVE_CHALLENGE: HABITICA_LEAVE_CHALLENGE_INPUT
  LOCAL_LOGIN: HABITICA_LOCAL_LOGIN_INPUT
  LOCAL_REGISTER: HABITICA_LOCAL_REGISTER_INPUT
  MARK_NOTIFICATIONS_SEEN: HABITICA_MARK_NOTIFICATIONS_SEEN_INPUT
  REMOVE_FROM_PARTY: HABITICA_REMOVE_FROM_PARTY_INPUT
  SCORE_TASK: HABITICA_SCORE_TASK_INPUT
  SOCIAL_AUTH: HABITICA_SOCIAL_AUTH_INPUT
  SUBSCRIBE_WEBHOOK: HABITICA_SUBSCRIBE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HABITICA".
 */
export type HABITICA_TOOL_OUTPUTS = {
  ADD_CHALLENGE_TASK: HABITICA_ADD_CHALLENGE_TASK_OUTPUT
  CANCEL_SUBSCRIPTION: HABITICA_CANCEL_SUBSCRIPTION_OUTPUT
  CREATE_CHALLENGE: HABITICA_CREATE_CHALLENGE_OUTPUT
  CREATE_GROUP: HABITICA_CREATE_GROUP_OUTPUT
  CREATE_TAG: HABITICA_CREATE_TAG_OUTPUT
  CREATE_TASK: HABITICA_CREATE_TASK_OUTPUT
  CREATE_WEBHOOK: HABITICA_CREATE_WEBHOOK_OUTPUT
  DELETE_CHALLENGE: HABITICA_DELETE_CHALLENGE_OUTPUT
  DELETE_CHALLENGE_TASK: HABITICA_DELETE_CHALLENGE_TASK_OUTPUT
  DELETE_GROUP: HABITICA_DELETE_GROUP_OUTPUT
  DELETE_TAG: HABITICA_DELETE_TAG_OUTPUT
  DELETE_TASK: HABITICA_DELETE_TASK_OUTPUT
  GET_ACHIEVEMENTS: HABITICA_GET_ACHIEVEMENTS_OUTPUT
  GET_CHALLENGE: HABITICA_GET_CHALLENGE_OUTPUT
  GET_CHALLENGES: HABITICA_GET_CHALLENGES_OUTPUT
  GET_CHALLENGE_TASK: HABITICA_GET_CHALLENGE_TASK_OUTPUT
  GET_CHALLENGE_TASKS: HABITICA_GET_CHALLENGE_TASKS_OUTPUT
  GET_CONTENT: HABITICA_GET_CONTENT_OUTPUT
  GET_CONTENT_BY_TYPE: HABITICA_GET_CONTENT_BY_TYPE_OUTPUT
  GET_EQUIPMENT: HABITICA_GET_EQUIPMENT_OUTPUT
  GET_GROUP: HABITICA_GET_GROUP_OUTPUT
  GET_GROUPS: HABITICA_GET_GROUPS_OUTPUT
  GET_GROUP_MEMBERS: HABITICA_GET_GROUP_MEMBERS_OUTPUT
  GET_NOTIFICATIONS: HABITICA_GET_NOTIFICATIONS_OUTPUT
  GET_PARTY: HABITICA_GET_PARTY_OUTPUT
  GET_PARTY_MEMBERS: HABITICA_GET_PARTY_MEMBERS_OUTPUT
  GET_TAGS: HABITICA_GET_TAGS_OUTPUT
  GET_TASKS: HABITICA_GET_TASKS_OUTPUT
  GET_USER_ACHIEVEMENTS: HABITICA_GET_USER_ACHIEVEMENTS_OUTPUT
  GET_USER_CHALLENGES: HABITICA_GET_USER_CHALLENGES_OUTPUT
  GET_USER_INVENTORY: HABITICA_GET_USER_INVENTORY_OUTPUT
  GET_USER_PROFILE: HABITICA_GET_USER_PROFILE_OUTPUT
  GET_USER_QUEST_PROGRESS: HABITICA_GET_USER_QUEST_PROGRESS_OUTPUT
  GET_USER_STATS: HABITICA_GET_USER_STATS_OUTPUT
  GET_USER_SUBSCRIPTION: HABITICA_GET_USER_SUBSCRIPTION_OUTPUT
  GET_WEBHOOKS: HABITICA_GET_WEBHOOKS_OUTPUT
  INVITE_TO_GROUP: HABITICA_INVITE_TO_GROUP_OUTPUT
  INVITE_TO_PARTY: HABITICA_INVITE_TO_PARTY_OUTPUT
  JOIN_CHALLENGE: HABITICA_JOIN_CHALLENGE_OUTPUT
  LEAVE_CHALLENGE: HABITICA_LEAVE_CHALLENGE_OUTPUT
  LOCAL_LOGIN: HABITICA_LOCAL_LOGIN_OUTPUT
  LOCAL_REGISTER: HABITICA_LOCAL_REGISTER_OUTPUT
  MARK_NOTIFICATIONS_SEEN: HABITICA_MARK_NOTIFICATIONS_SEEN_OUTPUT
  REMOVE_FROM_PARTY: HABITICA_REMOVE_FROM_PARTY_OUTPUT
  SCORE_TASK: HABITICA_SCORE_TASK_OUTPUT
  SOCIAL_AUTH: HABITICA_SOCIAL_AUTH_OUTPUT
  SUBSCRIBE_WEBHOOK: HABITICA_SUBSCRIBE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HABITICA toolkit.
 */
export const HABITICA = {
  slug: "habitica",
  tools: {
    /**
     * Tool to add a new task to a specified challenge. Use when you need to programmatically create a challenge task after the challenge is set up and you have its ID.
     */
    ADD_CHALLENGE_TASK: "HABITICA_ADD_CHALLENGE_TASK",
    /**
     * Attempts to cancel the authenticated user's subscription. Since Habitica's public API does not provide a cancellation endpoint, this action checks the current subscription state and returns: - success=True with a no-op message if there is no active subscription - success=False with guidance to cancel via the website/app if a subscription appears active
     */
    CANCEL_SUBSCRIPTION: "HABITICA_CANCEL_SUBSCRIPTION",
    /**
     * Tool to create a new challenge. Use when you need to start a challenge in a specific group with title, summary, and optional tasks.
     */
    CREATE_CHALLENGE: "HABITICA_CREATE_CHALLENGE",
    /**
     * Tool to create a Habitica party or guild. Use when you want to initialize a new group with name, type, and optional privacy and description.
     */
    CREATE_GROUP: "HABITICA_CREATE_GROUP",
    /**
     * Tool to create a new tag. Use after determining the desired tag name.
     */
    CREATE_TAG: "HABITICA_CREATE_TAG",
    /**
     * Tool to create a new user task in Habitica. Use after gathering task details like text, type, and optional properties.
     */
    CREATE_TASK: "HABITICA_CREATE_TASK",
    /**
     * Tool to create a new webhook for taskActivity events. Use when you need real-time notifications of task creation, updates, deletion, or scoring.
     */
    CREATE_WEBHOOK: "HABITICA_CREATE_WEBHOOK",
    /**
     * Tool to delete a challenge. Use when you need to permanently remove a challenge after confirmation.
     */
    DELETE_CHALLENGE: "HABITICA_DELETE_CHALLENGE",
    /**
     * Tool to delete a specific task from a challenge. Use when removing an unwanted or outdated task from a challenge. Use after confirming the task belongs to the target challenge.
     */
    DELETE_CHALLENGE_TASK: "HABITICA_DELETE_CHALLENGE_TASK",
    /**
     * Tool to delete a Habitica group (guild) or leave a party. - For parties: Habitica does not support deleting via DELETE /groups/{id}. The correct flow is to leave the party via POST /groups/party/leave. - For guilds: If you are the leader and there are no members, you can delete the guild via DELETE /groups/{id}. Otherwise, you may need to manage membership first.
     */
    DELETE_GROUP: "HABITICA_DELETE_GROUP",
    /**
     * Tool to delete a tag for the authenticated user. Use when you need to remove an obsolete tag after confirming it’s no longer applied to any tasks.
     */
    DELETE_TAG: "HABITICA_DELETE_TAG",
    /**
     * Tool to delete a Habitica task. Use when you have the task ID and want to remove it permanently.
     */
    DELETE_TASK: "HABITICA_DELETE_TASK",
    /**
     * Tool to retrieve all available Habitica achievements. Use after authenticating to list achievements and their progress.
     */
    GET_ACHIEVEMENTS: "HABITICA_GET_ACHIEVEMENTS",
    /**
     * Tool to retrieve details of a specific challenge. Use when you have the challenge ID and need its full data.
     */
    GET_CHALLENGE: "HABITICA_GET_CHALLENGE",
    /**
     * Tool to retrieve challenges available in a specific group (guild, party, or tavern).
     */
    GET_CHALLENGES: "HABITICA_GET_CHALLENGES",
    /**
     * Tool to retrieve a specific task from any challenge. Use after you have the task ID and need its full details.
     */
    GET_CHALLENGE_TASK: "HABITICA_GET_CHALLENGE_TASK",
    /**
     * Tool to get all tasks for a specified challenge. Use when you have a challenge ID and need to list its defined tasks, including challenge metadata per task.
     */
    GET_CHALLENGE_TASKS: "HABITICA_GET_CHALLENGE_TASKS",
    /**
     * Tool to retrieve global game content definitions. Use when loading Habitica items, equipment, pets, quests, and other definitions. Call once per session to cache content.
     */
    GET_CONTENT: "HABITICA_GET_CONTENT",
    /**
     * Tool to retrieve game content for a specified category. Use when you need to fetch specific Habitica content by its type (e.g., items, quests). Use after identifying the content type.
     */
    GET_CONTENT_BY_TYPE: "HABITICA_GET_CONTENT_BY_TYPE",
    /**
     * Tool to retrieve the authenticated user’s equipped gear and costume. Use when you need to inspect current battle gear and costume slots.
     */
    GET_EQUIPMENT: "HABITICA_GET_EQUIPMENT",
    /**
     * Tool to retrieve details of a specific group. Use when you have a groupId and need its metadata.
     */
    GET_GROUP: "HABITICA_GET_GROUP",
    /**
     * Tool to retrieve Habitica groups (guilds, parties, taverns). Use when browsing or searching available groups by type or name before joining.
     */
    GET_GROUPS: "HABITICA_GET_GROUPS",
    /**
     * Tool to retrieve members of a specific group. Use when you have a groupId and need its member list.
     */
    GET_GROUP_MEMBERS: "HABITICA_GET_GROUP_MEMBERS",
    /**
     * Tool to retrieve notifications for the authenticated user. Use when you need to fetch the user's current notification list after authenticating.
     */
    GET_NOTIFICATIONS: "HABITICA_GET_NOTIFICATIONS",
    /**
     * Tool to retrieve the authenticated user's party details. Use when you need to fetch the current party information after authenticating.
     */
    GET_PARTY: "HABITICA_GET_PARTY",
    /**
     * Tool to retrieve members of the authenticated user's party. Use after authenticating to list current party members.
     */
    GET_PARTY_MEMBERS: "HABITICA_GET_PARTY_MEMBERS",
    /**
     * Tool to retrieve authenticated user's tags. Use when you need to list the authenticated user's tags after confirming credentials.
     */
    GET_TAGS: "HABITICA_GET_TAGS",
    /**
     * Tool to retrieve all tasks for the authenticated user. Use when you need the user's current tasks list after authenticating.
     */
    GET_TASKS: "HABITICA_GET_TASKS",
    /**
     * Tool to retrieve the authenticated user's achievements. Use after authenticating to fetch the current user's achievements.
     */
    GET_USER_ACHIEVEMENTS: "HABITICA_GET_USER_ACHIEVEMENTS",
    /**
     * Tool to retrieve challenges the authenticated user participates in. Use when you need a paginated list of user challenges.
     */
    GET_USER_CHALLENGES: "HABITICA_GET_USER_CHALLENGES",
    /**
     * Tool to retrieve the authenticated user's full inventory. Use after authentication to list all owned items.
     */
    GET_USER_INVENTORY: "HABITICA_GET_USER_INVENTORY",
    /**
     * Tool to retrieve the authenticated user's profile information. Use after authenticating to fetch user details.
     */
    GET_USER_PROFILE: "HABITICA_GET_USER_PROFILE",
    /**
     * Tool to retrieve the authenticated user's quest progress. Use after authenticating to fetch the current user's quest progress.
     */
    GET_USER_QUEST_PROGRESS: "HABITICA_GET_USER_QUEST_PROGRESS",
    /**
     * Tool to retrieve the authenticated user's Habitica statistics. Use after authentication to fetch user's stats block.
     */
    GET_USER_STATS: "HABITICA_GET_USER_STATS",
    /**
     * Tool to retrieve the authenticated user's subscription details. Use after authenticating to verify current subscription status.
     */
    GET_USER_SUBSCRIPTION: "HABITICA_GET_USER_SUBSCRIPTION",
    /**
     * Tool to retrieve webhooks for the authenticated user. Use when you need to list the user's webhooks after authenticating.
     */
    GET_WEBHOOKS: "HABITICA_GET_WEBHOOKS",
    /**
     * Tool to invite users to a specific group. Use when you need to send invitations by user UUID, email, or username.
     */
    INVITE_TO_GROUP: "HABITICA_INVITE_TO_GROUP",
    /**
     * Tool to invite users to the authenticated user's party. Use when you have a list of identifiers (UUIDs, emails, or usernames) ready and want to add them to your current party.
     */
    INVITE_TO_PARTY: "HABITICA_INVITE_TO_PARTY",
    /**
     * Tool to join a challenge. Use after confirming the challenge ID to participate in a specific challenge.
     */
    JOIN_CHALLENGE: "HABITICA_JOIN_CHALLENGE",
    /**
     * Tool to leave a Habitica challenge. Use when you need to remove yourself from a specific challenge and decide whether to keep or remove its tasks.
     */
    LEAVE_CHALLENGE: "HABITICA_LEAVE_CHALLENGE",
    /**
     * Tool to authenticate a user via local credentials. Use when needing an API token for subsequent Habitica requests.
     */
    LOCAL_LOGIN: "HABITICA_LOCAL_LOGIN",
    /**
     * Tool to register a new Habitica user via email and password. Use when creating a fresh account before authentication.
     */
    LOCAL_REGISTER: "HABITICA_LOCAL_REGISTER",
    /**
     * Tool to mark specific notifications as read. Use when you want to clear unread notification badges after reviewing your notifications.
     */
    MARK_NOTIFICATIONS_SEEN: "HABITICA_MARK_NOTIFICATIONS_SEEN",
    /**
     * Tool to remove a member from your party. Use when you need to eject a user from your party as the party leader.
     */
    REMOVE_FROM_PARTY: "HABITICA_REMOVE_FROM_PARTY",
    /**
     * Tool to score (check/uncheck) a Habitica task. Use when you need to mark a task as completed or undone.
     */
    SCORE_TASK: "HABITICA_SCORE_TASK",
    /**
     * Tool to authenticate a user via a social provider. Use after obtaining an OAuth token or code from Facebook, Google, GitHub, or Apple.
     */
    SOCIAL_AUTH: "HABITICA_SOCIAL_AUTH",
    /**
     * Tool to enable (subscribe) an existing webhook by ID for the authenticated user. This aligns with Habitica's documented API by updating the webhook resource to ensure it is enabled. Usage: obtain the webhook ID (e.g., via Get Webhooks or after creating a webhook) and call this action to set enabled=true.
     */
    SUBSCRIBE_WEBHOOK: "HABITICA_SUBSCRIBE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HABITICA".
 */
export type HABITICA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HABITICA".
 */
export type HABITICA_TRIGGER_EVENTS = {}
