// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLETASKS's GOOGLETASKS_CLEAR_TASKS tool input.
 */
type GOOGLETASKS_CLEAR_TASKS_INPUT = {
  /**
   * Tasklist
   * @description The identifier of the task list from which to clear completed tasks. Use '@default' for the default task list.
   */
  tasklist?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_CLEAR_TASKS tool output.
 */
type GOOGLETASKS_CLEAR_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary indicating the outcome of the clear operation. On successful completion (HTTP 204), it returns `{'status': 'success'}`. In case of errors, it may contain a 'message' with details from the API response.
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
 * Type of GOOGLETASKS's GOOGLETASKS_CREATE_TASK_LIST tool input.
 */
type GOOGLETASKS_CREATE_TASK_LIST_INPUT = {
  /**
   * Tasklist Title
   * @description Title for the new task list. The maximum allowed length is 1024 characters.
   */
  tasklist_title?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_CREATE_TASK_LIST tool output.
 */
type GOOGLETASKS_CREATE_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description ETag of the resource.
       */
      etag?: string;
      /**
       * Id
       * @description Task list identifier.
       */
      id?: string;
      /**
       * Kind
       * @description Type of the resource. This is always 'tasks#taskList'.
       * @default tasks#taskList
       */
      kind: string;
      /**
       * Self Link
       * @description URL pointing to this task list. Used to retrieve, update, or delete this task list.
       */
      selfLink?: string;
      /**
       * Title
       * @description Title of the task list. Maximum length allowed: 1024 characters.
       */
      title?: string;
      /**
       * Updated
       * @description Last modification time of the task list (as a RFC 3339 timestamp).
       */
      updated?: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_DELETE_TASK tool input.
 */
type GOOGLETASKS_DELETE_TASK_INPUT = {
  /**
   * Task Id
   * @description The unique identifier of the Google Task to be deleted.
   */
  task_id?: string;
  /**
   * Tasklist Id
   * @description The unique identifier of the Google Task list from which the task will be deleted.
   */
  tasklist_id?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_DELETE_TASK tool output.
 */
type GOOGLETASKS_DELETE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary indicating the outcome of the delete operation. On successful deletion (HTTP 204 No Content), this will typically be `{'status': 'success'}`. If the API returns a body for other status codes, this field will contain the parsed JSON response.
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
 * Type of GOOGLETASKS's GOOGLETASKS_DELETE_TASK_LIST tool input.
 */
type GOOGLETASKS_DELETE_TASK_LIST_INPUT = {
  /**
   * Tasklist Id
   * @description Unique identifier of the Google Task list to be deleted.
   */
  tasklist_id?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_DELETE_TASK_LIST tool output.
 */
type GOOGLETASKS_DELETE_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Outcome of the deletion. Typically `{'status': 'success'}` for HTTP 204, or `{'message': ...}` with other API response details.
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
 * Type of GOOGLETASKS's GOOGLETASKS_GET_TASK tool input.
 */
type GOOGLETASKS_GET_TASK_INPUT = {
  /**
   * Task Id
   * @description Unique identifier of the Google Task to retrieve.
   */
  task_id?: string;
  /**
   * Tasklist Id
   * @description Unique identifier of the Google Tasks list containing the task.
   */
  tasklist_id?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_GET_TASK tool output.
 */
type GOOGLETASKS_GET_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task
       * @description The retrieved Google Task, with details like 'id', 'title', 'notes', 'status', 'due' date, 'completed' date, and parent/subtask relations.
       */
      task: {
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
 * Type of GOOGLETASKS's GOOGLETASKS_GET_TASK_LIST tool input.
 */
type GOOGLETASKS_GET_TASK_LIST_INPUT = {
  /**
   * Tasklist Id
   * @description The unique identifier of the task list to retrieve, assigned by Google Tasks when the list is created.
   */
  tasklist_id?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_GET_TASK_LIST tool output.
 */
type GOOGLETASKS_GET_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task List
       * @description Detailed information about the retrieved task list, including its ID, title, last update timestamp, and a self-referencing link.
       */
      task_list?: {
          /**
           * Etag
           * @description ETag of the resource.
           */
          etag?: string;
          /**
           * Id
           * @description Task list identifier.
           */
          id?: string;
          /**
           * Kind
           * @description Type of the resource. This is always 'tasks#taskList'.
           * @default tasks#taskList
           */
          kind: string;
          /**
           * Self Link
           * @description URL pointing to this task list. Used to retrieve, update, or delete this task list.
           */
          selfLink?: string;
          /**
           * Title
           * @description Title of the task list. Maximum length allowed: 1024 characters.
           */
          title?: string;
          /**
           * Updated
           * @description Last modification time of the task list (as a RFC 3339 timestamp).
           */
          updated?: string;
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
 * Type of GOOGLETASKS's GOOGLETASKS_INSERT_TASK tool input.
 */
type GOOGLETASKS_INSERT_TASK_INPUT = {
  /**
   * Completed
   * @description Completion date of the task.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  completed?: string;
  /**
   * Deleted
   * @description Flag indicating whether the task has been deleted.
   * @default null
   */
  deleted: boolean | null;
  /**
   * Due
   * @description Due date of the task.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  due?: string;
  /**
   * Etag
   * @description ETag of the resource.
   */
  etag?: string;
  /**
   * Hidden
   * @description Flag indicating whether the task is hidden.
   * @default null
   */
  hidden: boolean | null;
  /**
   * Id
   * @description Task identifier.
   */
  id?: string;
  /**
   * Notes
   * @description Notes describing the task. Optional. Maximum length allowed: 8192 characters.
   */
  notes?: string;
  /**
   * Status
   * @description Status of the task. This is either 'needsAction' or 'completed'.
   * @enum {string}
   */
  status?: "needsAction" | "completed";
  /**
   * Task Parent
   * @description Identifier of an existing task to serve as parent; if provided, creates a subtask, otherwise a top-level task in the specified list.
   */
  task_parent?: string;
  /**
   * Task Previous
   * @description Identifier of an existing task after which the new task will be placed, at the same hierarchical level (as a sibling).
   */
  task_previous?: string;
  /**
   * Tasklist Id
   * @description Identifier for the Google Task list where the new task will be created.
   */
  tasklist_id?: string;
  /**
   * Title
   * @description Title of the task. Maximum length allowed: 1024 characters.
   */
  title?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_INSERT_TASK tool output.
 */
type GOOGLETASKS_INSERT_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task
       * @description A dictionary representing the complete Google Task resource that was newly created, including all its properties as returned by the API, if the operation was successful.
       */
      task: {
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
 * Type of GOOGLETASKS's GOOGLETASKS_LIST_TASKS tool input.
 */
type GOOGLETASKS_LIST_TASKS_INPUT = {
  /**
   * Completed Max
   * @description Exclude tasks completed after this date.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  completedMax?: string;
  /**
   * Completed Min
   * @description Exclude tasks completed before this date.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   * @default null
   */
  completedMin: string | null;
  /**
   * Due Max
   * @description Exclude tasks due after this date.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  dueMax?: string;
  /**
   * Due Min
   * @description Exclude tasks due before this date.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  dueMin?: string;
  /**
   * Max Results
   * @description Maximum number of tasks to return. API default: 20, maximum: 100.
   */
  maxResults?: number;
  /**
   * Page Token
   * @description Token from a previous list operation for fetching a specific page; if omitted, retrieves the first page.
   */
  pageToken?: string;
  /**
   * Show Completed
   * @description Include completed tasks. Defaults to true. (See action docstring for interaction with `completedMin`/`Max`).
   */
  showCompleted?: boolean;
  /**
   * Show Deleted
   * @description Include deleted tasks. Defaults to false.
   */
  showDeleted?: boolean;
  /**
   * Show Hidden
   * @description Include hidden tasks. Defaults to false.
   */
  showHidden?: boolean;
  /**
   * Tasklist Id
   * @description Identifier of the task list. Use '@default' for the user's primary task list.
   */
  tasklist_id?: string;
  /**
   * Updated Min
   * @description Lower bound for task's last modification time (for syncing).
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  updatedMin?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_LIST_TASKS tool output.
 */
type GOOGLETASKS_LIST_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Pagination token to retrieve the next page of results; omitted if no more tasks.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Tasks
       * @description List of tasks retrieved matching the specified criteria.
       */
      tasks: {
          /**
           * Completed
           * @description Completion date of the task.
           *     Some examples of expected datetime format:
           *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
           *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
           *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
           *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
           *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
           */
          completed?: string;
          /**
           * Deleted
           * @description Flag indicating whether the task has been deleted.
           * @default null
           */
          deleted: boolean | null;
          /**
           * Due
           * @description Due date of the task.
           *     Some examples of expected datetime format:
           *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
           *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
           *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
           *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
           *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
           */
          due?: string;
          /**
           * Etag
           * @description ETag of the resource.
           */
          etag?: string;
          /**
           * Hidden
           * @description Flag indicating whether the task is hidden.
           * @default null
           */
          hidden: boolean | null;
          /**
           * Id
           * @description Task identifier.
           */
          id?: string;
          /**
           * Kind
           * @description Type of the resource. This is always 'tasks#task'.
           * @default tasks#task
           */
          kind: string;
          /**
           * Links
           * @description Collection of links.
           */
          links?: {
              /**
               * Description
               * @description The description of the link.
               */
              description: string;
              /**
               * Link
               * @description The URL of the link.
               */
              link: string;
              /**
               * Type
               * @description Type of the link, e.g. 'email'.
               */
              type: string;
          }[];
          /**
           * Notes
           * @description Notes describing the task. Optional. Maximum length allowed: 8192 characters.
           */
          notes?: string;
          /**
           * Parent
           * @description Parent task identifier. This field is omitted if it is a top-level task.
           */
          parent?: string;
          /**
           * Position
           * @description String indicating the position of the task among its sibling tasks.
           */
          position?: string;
          /**
           * Self Link
           * @description URL pointing to this task. Used to retrieve, update, or delete this task.
           */
          selfLink?: string;
          /**
           * Status
           * @description Status of the task. This is either 'needsAction' or 'completed'.
           * @enum {string}
           */
          status: "needsAction" | "completed";
          /**
           * Title
           * @description Title of the task. Maximum length allowed: 1024 characters.
           */
          title: string;
          /**
           * Updated
           * @description Last modification time of the task (as a RFC 3339 timestamp).
           */
          updated?: string;
          /**
           * Web View Link
           * @description An absolute link to the task in the Google Tasks Web UI.
           */
          webViewLink?: string;
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
 * Type of GOOGLETASKS's GOOGLETASKS_LIST_TASK_LISTS tool input.
 */
type GOOGLETASKS_LIST_TASK_LISTS_INPUT = {
  /**
   * Max Results
   * @description Maximum number of task lists to return per page.
   * @default 20
   */
  maxResults: number;
  /**
   * Page Token
   * @description Token for the page of results to return; omit for the first page, use `nextPageToken` from a previous response for subsequent pages.
   */
  pageToken?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_LIST_TASK_LISTS tool output.
 */
type GOOGLETASKS_LIST_TASK_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw API response containing a list of task list resources under the 'items' key, and potentially a 'nextPageToken' for more results.
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
 * Type of GOOGLETASKS's GOOGLETASKS_MOVE_TASK tool input.
 */
type GOOGLETASKS_MOVE_TASK_INPUT = {
  /**
   * Destination Tasklist
   * @description Destination task list identifier. If set, the task is moved to this list; otherwise, it remains in its current list.
   * @default null
   */
  destinationTasklist: string | null;
  /**
   * Parent
   * @description New parent task identifier. If not provided, the task is moved to the top level.
   * @default null
   */
  parent: string | null;
  /**
   * Previous
   * @description New previous sibling task identifier. If not provided, the task is moved to the first position among its siblings.
   * @default null
   */
  previous: string | null;
  /**
   * Task
   * @description Task identifier.
   */
  task?: string;
  /**
   * Tasklist
   * @description Task list identifier.
   */
  tasklist?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_MOVE_TASK tool output.
 */
type GOOGLETASKS_MOVE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed
       * @description Completion date of the task.
       *     Some examples of expected datetime format:
       *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
       *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
       *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
       *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
       *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
       */
      completed?: string;
      /**
       * Deleted
       * @description Flag indicating whether the task has been deleted.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Due
       * @description Due date of the task.
       *     Some examples of expected datetime format:
       *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
       *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
       *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
       *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
       *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
       */
      due?: string;
      /**
       * Etag
       * @description ETag of the resource.
       */
      etag?: string;
      /**
       * Hidden
       * @description Flag indicating whether the task is hidden.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description Task identifier.
       */
      id?: string;
      /**
       * Kind
       * @description Type of the resource. This is always 'tasks#task'.
       * @default tasks#task
       */
      kind: string;
      /**
       * Links
       * @description Collection of links.
       */
      links?: {
          /**
           * Description
           * @description The description of the link.
           */
          description: string;
          /**
           * Link
           * @description The URL of the link.
           */
          link: string;
          /**
           * Type
           * @description Type of the link, e.g. 'email'.
           */
          type: string;
      }[];
      /**
       * Notes
       * @description Notes describing the task. Optional. Maximum length allowed: 8192 characters.
       */
      notes?: string;
      /**
       * Parent
       * @description Parent task identifier. This field is omitted if it is a top-level task.
       */
      parent?: string;
      /**
       * Position
       * @description String indicating the position of the task among its sibling tasks.
       */
      position?: string;
      /**
       * Self Link
       * @description URL pointing to this task. Used to retrieve, update, or delete this task.
       */
      selfLink?: string;
      /**
       * Status
       * @description Status of the task. This is either 'needsAction' or 'completed'.
       * @enum {string}
       */
      status: "needsAction" | "completed";
      /**
       * Title
       * @description Title of the task. Maximum length allowed: 1024 characters.
       */
      title: string;
      /**
       * Updated
       * @description Last modification time of the task (as a RFC 3339 timestamp).
       */
      updated?: string;
      /**
       * Web View Link
       * @description An absolute link to the task in the Google Tasks Web UI.
       */
      webViewLink?: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_PATCH_TASK tool input.
 */
type GOOGLETASKS_PATCH_TASK_INPUT = {
  /**
   * Completed
   * @description Completion date of the task.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  completed?: string;
  /**
   * Deleted
   * @description Flag indicating whether the task has been deleted.
   * @default null
   */
  deleted: boolean | null;
  /**
   * Due
   * @description Due date of the task.
   *     Some examples of expected datetime format:
   *     	UTC-5:30, 6:50 PM	->If date is not mentioned, and seeming that the start date is in next 24 hours.
   *     	UTC+1, 11:59 PM, 31 Dec	->If the meeting start date is in next 1 year (this is most possible case)
   *     	UTC-3:45, 7:15 AM, 22 Aug 2020	->If the meeting is to be set after at a spefic date, mentioned with year.
   *     	11:15 PM, 12 May 2019	->In case no UTC offset to be mentioned, skip the UTC part altogether.
   *     	2023-03-01T00:00:00Z	->Standard ISO-8601 format
   */
  due?: string;
  /**
   * Etag
   * @description ETag of the resource.
   */
  etag?: string;
  /**
   * Hidden
   * @description Flag indicating whether the task is hidden.
   * @default null
   */
  hidden: boolean | null;
  /**
   * Id
   * @description Task identifier.
   */
  id?: string;
  /**
   * Notes
   * @description Notes describing the task. Optional. Maximum length allowed: 8192 characters.
   */
  notes?: string;
  /**
   * Status
   * @description Status of the task. This is either 'needsAction' or 'completed'.
   * @enum {string}
   */
  status?: "needsAction" | "completed";
  /**
   * Task Id
   * @description Identifier of the Google Task to be updated within the specified task list.
   */
  task_id?: string;
  /**
   * Tasklist Id
   * @description Identifier of the Google Task list that contains the task to be updated.
   */
  tasklist_id?: string;
  /**
   * Title
   * @description Title of the task. Maximum length allowed: 1024 characters.
   */
  title?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_PATCH_TASK tool output.
 */
type GOOGLETASKS_PATCH_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task
       * @description The complete Task resource after the update, reflecting all changes and current state.
       */
      task: {
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
 * Type of GOOGLETASKS's GOOGLETASKS_PATCH_TASK_LIST tool input.
 */
type GOOGLETASKS_PATCH_TASK_LIST_INPUT = {
  /**
   * Tasklist Id
   * @description The unique identifier of the task list to be updated.
   */
  tasklist_id?: string;
  /**
   * Updated Title
   * @description The new title for the task list.
   */
  updated_title?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_PATCH_TASK_LIST tool output.
 */
type GOOGLETASKS_PATCH_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary representing the updated TaskList resource from the Google Tasks API, including its 'id', 'title', 'updated' timestamp, and 'selfLink'.
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
 * Type of GOOGLETASKS's GOOGLETASKS_UPDATE_TASK tool input.
 */
type GOOGLETASKS_UPDATE_TASK_INPUT = {
  /**
   * Due
   * @description Due date of the task (RFC 3339 timestamp).
   * @default null
   */
  due: string | null;
  /**
   * Notes
   * @description Notes describing the task.
   * @default null
   */
  notes: string | null;
  /**
   * Status
   * @description Status of the task ("needsAction" or "completed").
   * @default null
   */
  status: string | null;
  /**
   * Task
   * @description Task identifier.
   */
  task?: string;
  /**
   * Tasklist
   * @description Task list identifier.
   */
  tasklist?: string;
  /**
   * Title
   * @description Title of the task.
   * @default null
   */
  title: string | null;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_UPDATE_TASK tool output.
 */
type GOOGLETASKS_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed
       * @description Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
       * @default null
       */
      completed: string | null;
      /**
       * Deleted
       * @description Flag indicating whether the task has been deleted. The default is False.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Due
       * @description Due date of the task (as a RFC 3339 timestamp).
       * @default null
       */
      due: string | null;
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Hidden
       * @description Flag indicating whether the task is hidden. The default is False.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description Task identifier.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource. This is always "tasks#task".
       * @default tasks#task
       */
      kind: string | null;
      /**
       * Links
       * @description Collection of links. This collection is read-only.
       * @default null
       */
      links: {
          /**
           * Description
           * @description Description of the link.
           * @default null
           */
          description: string | null;
          /**
           * Link
           * @description The URL.
           * @default null
           */
          link: string | null;
          /**
           * Type
           * @description Type of the link.
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Notes
       * @description Notes describing the task. Maximum length allowed: 8192 characters.
       * @default null
       */
      notes: string | null;
      /**
       * Parent
       * @description Parent task identifier. This field is omitted if it is a top-level task.
       * @default null
       */
      parent: string | null;
      /**
       * Position
       * @description String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If the parent task is specified then the task is inserted at the top of the subtasks list (before the first subtask). If the task is a top-level task then the task is inserted at the top of the top-level tasks list (before the first top-level task).
       * @default null
       */
      position: string | null;
      /**
       * Self Link
       * @description URL pointing to this task. Used to retrieve, update, or delete this task.
       * @default null
       */
      selfLink: string | null;
      /**
       * Status
       * @description Status of the task. This is either "needsAction" or "completed".
       * @default null
       */
      status: string | null;
      /**
       * Title
       * @description Title of the task. Maximum length allowed: 1024 characters.
       * @default null
       */
      title: string | null;
      /**
       * Updated
       * @description Last modification time of the task (as a RFC 3339 timestamp).
       * @default null
       */
      updated: string | null;
      /**
       * Web View Link
       * @description An absolute link to the task in the Google Tasks Web UI.
       * @default null
       */
      webViewLink: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_UPDATE_TASK_LIST tool input.
 */
type GOOGLETASKS_UPDATE_TASK_LIST_INPUT = {
  /**
   * Tasklist Id
   * @description Task list identifier.
   */
  tasklist_id?: string;
  /**
   * Title
   * @description Title of the task list. Maximum length allowed: 1024 characters.
   */
  title?: string;
};

/**
 * Type of GOOGLETASKS's GOOGLETASKS_UPDATE_TASK_LIST tool output.
 */
type GOOGLETASKS_UPDATE_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Etag
       * @description ETag of the resource.
       * @default null
       */
      etag: string | null;
      /**
       * Id
       * @description Task list identifier.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Type of the resource. This is always "tasks#taskList".
       * @default null
       */
      kind: string | null;
      /**
       * Self Link
       * @description URL pointing to this task list. Used to retrieve, update, or delete this task list.
       * @default null
       */
      selfLink: string | null;
      /**
       * Title
       * @description Title of the task list.
       * @default null
       */
      title: string | null;
      /**
       * Updated
       * @description Last modification time of the task list (as a RFC 3339 timestamp).
       * @default null
       */
      updated: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "GOOGLETASKS".
 */
export type GOOGLETASKS_TOOL_INPUTS = {
  CLEAR_TASKS: GOOGLETASKS_CLEAR_TASKS_INPUT
  CREATE_TASK_LIST: GOOGLETASKS_CREATE_TASK_LIST_INPUT
  DELETE_TASK: GOOGLETASKS_DELETE_TASK_INPUT
  DELETE_TASK_LIST: GOOGLETASKS_DELETE_TASK_LIST_INPUT
  GET_TASK: GOOGLETASKS_GET_TASK_INPUT
  GET_TASK_LIST: GOOGLETASKS_GET_TASK_LIST_INPUT
  INSERT_TASK: GOOGLETASKS_INSERT_TASK_INPUT
  LIST_TASKS: GOOGLETASKS_LIST_TASKS_INPUT
  LIST_TASK_LISTS: GOOGLETASKS_LIST_TASK_LISTS_INPUT
  MOVE_TASK: GOOGLETASKS_MOVE_TASK_INPUT
  PATCH_TASK: GOOGLETASKS_PATCH_TASK_INPUT
  PATCH_TASK_LIST: GOOGLETASKS_PATCH_TASK_LIST_INPUT
  UPDATE_TASK: GOOGLETASKS_UPDATE_TASK_INPUT
  UPDATE_TASK_LIST: GOOGLETASKS_UPDATE_TASK_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLETASKS".
 */
export type GOOGLETASKS_TOOL_OUTPUTS = {
  CLEAR_TASKS: GOOGLETASKS_CLEAR_TASKS_OUTPUT
  CREATE_TASK_LIST: GOOGLETASKS_CREATE_TASK_LIST_OUTPUT
  DELETE_TASK: GOOGLETASKS_DELETE_TASK_OUTPUT
  DELETE_TASK_LIST: GOOGLETASKS_DELETE_TASK_LIST_OUTPUT
  GET_TASK: GOOGLETASKS_GET_TASK_OUTPUT
  GET_TASK_LIST: GOOGLETASKS_GET_TASK_LIST_OUTPUT
  INSERT_TASK: GOOGLETASKS_INSERT_TASK_OUTPUT
  LIST_TASKS: GOOGLETASKS_LIST_TASKS_OUTPUT
  LIST_TASK_LISTS: GOOGLETASKS_LIST_TASK_LISTS_OUTPUT
  MOVE_TASK: GOOGLETASKS_MOVE_TASK_OUTPUT
  PATCH_TASK: GOOGLETASKS_PATCH_TASK_OUTPUT
  PATCH_TASK_LIST: GOOGLETASKS_PATCH_TASK_LIST_OUTPUT
  UPDATE_TASK: GOOGLETASKS_UPDATE_TASK_OUTPUT
  UPDATE_TASK_LIST: GOOGLETASKS_UPDATE_TASK_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLETASKS toolkit.
 */
export const GOOGLETASKS = {
  slug: "googletasks",
  tools: {
    /**
     * Permanently clears all completed tasks from a specified google tasks list; this action is destructive and idempotent.
     */
    CLEAR_TASKS: "GOOGLETASKS_CLEAR_TASKS",
    /**
     * Creates a new task list with the specified title.
     */
    CREATE_TASK_LIST: "GOOGLETASKS_CREATE_TASK_LIST",
    /**
     * Deletes a specified task from a given task list in google tasks.
     */
    DELETE_TASK: "GOOGLETASKS_DELETE_TASK",
    /**
     * Permanently deletes an existing google task list, identified by `tasklist id`, along with all its tasks; this operation is irreversible.
     */
    DELETE_TASK_LIST: "GOOGLETASKS_DELETE_TASK_LIST",
    /**
     * Use to retrieve a specific google task if its `task id` and parent `tasklist id` are known.
     */
    GET_TASK: "GOOGLETASKS_GET_TASK",
    /**
     * Retrieves a specific task list from the user's google tasks if the `tasklist id` exists for the authenticated user.
     */
    GET_TASK_LIST: "GOOGLETASKS_GET_TASK_LIST",
    /**
     * Creates a new task in a given `tasklist id`, optionally as a subtask of an existing `task parent` or positioned after an existing `task previous` sibling, where both `task parent` and `task previous` must belong to the same `tasklist id` if specified.
     */
    INSERT_TASK: "GOOGLETASKS_INSERT_TASK",
    /**
     * Retrieves tasks from a google tasks list; all date/time strings must be rfc3339 utc, and `showcompleted` must be true if `completedmin` or `completedmax` are specified.
     */
    LIST_TASKS: "GOOGLETASKS_LIST_TASKS",
    /**
     * Fetches the authenticated user's task lists from google tasks; results may be paginated.
     */
    LIST_TASK_LISTS: "GOOGLETASKS_LIST_TASK_LISTS",
    /**
     * Moves the specified task to another position in the destination task list.
     */
    MOVE_TASK: "GOOGLETASKS_MOVE_TASK",
    /**
     * Partially updates an existing task (identified by `task id`) within a specific google task list (identified by `tasklist id`), modifying only the provided attributes from `taskinput` (e.g., `title`, `notes`, `due` date, `status`) and requiring both the task and list to exist.
     */
    PATCH_TASK: "GOOGLETASKS_PATCH_TASK",
    /**
     * Updates the title of an existing google tasks task list.
     */
    PATCH_TASK_LIST: "GOOGLETASKS_PATCH_TASK_LIST",
    /**
     * Updates the specified task.
     */
    UPDATE_TASK: "GOOGLETASKS_UPDATE_TASK",
    /**
     * Updates the authenticated user's specified task list.
     */
    UPDATE_TASK_LIST: "GOOGLETASKS_UPDATE_TASK_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLETASKS".
 */
export type GOOGLETASKS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLETASKS".
 */
export type GOOGLETASKS_TRIGGER_EVENTS = {}
