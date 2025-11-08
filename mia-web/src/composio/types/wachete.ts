// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WACHETE's WACHETE_CREATE_WATCHER tool input.
 */
type WACHETE_CREATE_WATCHER_INPUT = {
  /**
   * Alerts
   * @description List of alert types (e.g., 'Error', 'NotEq').
   * @default null
   */
  alerts: string[] | null;
  /**
   * Crawling Depth
   * @description Depth for portal crawling (only if jobType='Portal').
   * @default 2
   */
  crawlingDepth: number | null;
  /**
   * Id
   * @description Watcher ID for updates; omit when creating new watcher.
   * @default null
   */
  id: string | null;
  /**
   * Job Type
   * @description Type of monitoring job: 'SinglePage' or 'Portal'.
   * @default SinglePage
   * @enum {string}
   */
  jobType: "SinglePage" | "Portal";
  /**
   * Name
   * @description Name of the watcher.
   */
  name?: string;
  /**
   * Notification Endpoints
   * @description Notification endpoints, e.g., email or webhook.
   * @default null
   */
  notificationEndpoints: string[] | null;
  /**
   * Recurrence In Seconds
   * @description Monitoring interval in seconds.
   * @default null
   */
  recurrenceInSeconds: number | null;
  /**
   * Url
   * @description URL to monitor.
   */
  url?: string;
  /**
   * UrlFilter
   * @description Filters for URLs when crawling a portal.
   * @default null
   */
  urlFilter: {
      /**
       * Exclude
       * @description List of URL patterns to exclude when crawling (only used if jobType='Portal').
       * @default null
       */
      exclude: string[] | null;
      /**
       * Include
       * @description List of URL patterns to include when crawling (only used if jobType='Portal').
       * @default null
       */
      include: string[] | null;
  } | null;
  /**
   * X Path
   * @description XPath selector for the element to watch.
   */
  xPath?: string;
};

/**
 * Type of WACHETE's WACHETE_CREATE_WATCHER tool output.
 */
type WACHETE_CREATE_WATCHER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alerts
       * @description List of alert types.
       */
      alerts: string[];
      /**
       * Crawling Depth
       * @description Depth for crawling when jobType is 'Portal'.
       */
      crawlingDepth: number;
      /**
       * Id
       * @description ID of the created or updated watcher.
       */
      id: string;
      /**
       * Job Type
       * @description Type of monitoring job.
       */
      jobType: string;
      /**
       * Name
       * @description Name of the watcher.
       */
      name: string;
      /**
       * Notification Endpoints
       * @description List of notification endpoints.
       */
      notificationEndpoints: string[];
      /**
       * Recurrence In Seconds
       * @description Monitoring interval in seconds.
       */
      recurrenceInSeconds: number;
      /**
       * Url
       * @description URL being monitored.
       */
      url: string;
      /**
       * UrlFilter
       * @description Filters for URLs when crawling a portal.
       * @default null
       */
      urlFilter: {
          /**
           * Exclude
           * @description List of URL patterns to exclude when crawling (only used if jobType='Portal').
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description List of URL patterns to include when crawling (only used if jobType='Portal').
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * X Path
       * @description XPath of the monitored content.
       */
      xPath: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WACHETE's WACHETE_DELETE_WATCHER tool input.
 */
type WACHETE_DELETE_WATCHER_INPUT = {
  /**
   * Watcher Id
   * @description Unique identifier of the watcher (task) to delete
   */
  watcher_id?: string;
};

/**
 * Type of WACHETE's WACHETE_DELETE_WATCHER tool output.
 */
type WACHETE_DELETE_WATCHER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the watcher was successfully deleted
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
 * Type of WACHETE's WACHETE_GET_FOLDER_CONTENT tool input.
 */
type WACHETE_GET_FOLDER_CONTENT_INPUT = {
  /**
   * Parent Id
   * @description ID of the folder to retrieve contents for. If omitted, the root folder's contents are returned.
   * @default null
   */
  parentId: string | null;
};

/**
 * Type of WACHETE's WACHETE_GET_FOLDER_CONTENT tool output.
 */
type WACHETE_GET_FOLDER_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of items (folders or watchers) within the specified folder.
       */
      items: {
          /**
           * Id
           * @description Unique identifier of the folder item.
           */
          id: string;
          /**
           * Name
           * @description Name of the folder item.
           */
          name: string;
          /**
           * Parent Id
           * @description ID of the parent folder.
           * @default null
           */
          parentId: string | null;
          /**
           * Type
           * @description Type of the item: 'folder' or 'watcher'.
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
 * Type of WACHETE's WACHETE_LIST_NOTIFICATIONS tool input.
 */
type WACHETE_LIST_NOTIFICATIONS_INPUT = {
  /**
   * From Time
   * @description ISO 8601 datetime to list notifications from (inclusive); query param name 'from'.
   * @default null
   */
  from_time: string | null;
  /**
   * Task Id
   * @description ID of a specific watcher (wachet) to filter notifications. If omitted, notifications for all watchers are returned.
   * @default null
   */
  task_id: string | null;
  /**
   * To Time
   * @description ISO 8601 datetime to list notifications up to (inclusive); query param name 'to'.
   * @default null
   */
  to_time: string | null;
};

/**
 * Type of WACHETE's WACHETE_LIST_NOTIFICATIONS tool output.
 */
type WACHETE_LIST_NOTIFICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Notifications
       * @description Array of notification objects returned by the Wachete API.
       */
      notifications: {
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
 * Type of WACHETE's WACHETE_LIST_WATCHERS tool input.
 */
type WACHETE_LIST_WATCHERS_INPUT = object;

/**
 * Type of WACHETE's WACHETE_LIST_WATCHERS tool output.
 */
type WACHETE_LIST_WATCHERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alerts
       * @description List of alert types configured for this watcher.
       */
      alerts: string[];
      /**
       * Crawling Depth
       * @description Depth for portal crawling (only if jobType='Portal').
       * @default null
       */
      crawlingDepth: number | null;
      /**
       * Id
       * @description Unique identifier of the watcher.
       */
      id: string;
      /**
       * Job Type
       * @description Type of monitoring job: 'SinglePage' or 'Portal'.
       * @enum {string}
       */
      jobType: "SinglePage" | "Portal";
      /**
       * Name
       * @description Name of the watcher.
       */
      name: string;
      /**
       * Notification Endpoints
       * @description Notification endpoints configured (e.g., emails, webhooks).
       */
      notificationEndpoints: string[];
      /**
       * Recurrence In Seconds
       * @description Monitoring interval in seconds.
       */
      recurrenceInSeconds: number;
      /**
       * Url
       * @description URL being monitored.
       */
      url: string;
      /**
       * UrlFilter
       * @description Filters for URLs when crawling a portal.
       * @default null
       */
      urlFilter: {
          /**
           * Exclude
           * @description List of URL patterns to exclude when crawling (only used if jobType='Portal').
           * @default null
           */
          exclude: string[] | null;
          /**
           * Include
           * @description List of URL patterns to include when crawling (only used if jobType='Portal').
           * @default null
           */
          include: string[] | null;
      } | null;
      /**
       * X Path
       * @description XPath selector for the element to watch.
       */
      xPath: string;
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
 * Type map of all available tool input types for toolkit "WACHETE".
 */
export type WACHETE_TOOL_INPUTS = {
  CREATE_WATCHER: WACHETE_CREATE_WATCHER_INPUT
  DELETE_WATCHER: WACHETE_DELETE_WATCHER_INPUT
  GET_FOLDER_CONTENT: WACHETE_GET_FOLDER_CONTENT_INPUT
  LIST_NOTIFICATIONS: WACHETE_LIST_NOTIFICATIONS_INPUT
  LIST_WATCHERS: WACHETE_LIST_WATCHERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WACHETE".
 */
export type WACHETE_TOOL_OUTPUTS = {
  CREATE_WATCHER: WACHETE_CREATE_WATCHER_OUTPUT
  DELETE_WATCHER: WACHETE_DELETE_WATCHER_OUTPUT
  GET_FOLDER_CONTENT: WACHETE_GET_FOLDER_CONTENT_OUTPUT
  LIST_NOTIFICATIONS: WACHETE_LIST_NOTIFICATIONS_OUTPUT
  LIST_WATCHERS: WACHETE_LIST_WATCHERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WACHETE toolkit.
 */
export const WACHETE = {
  slug: "wachete",
  tools: {
    /**
     * Tool to create a new watcher. use when setting up page monitoring after specifying url and xpath. confirm page url and xpath validity before running.
     */
    CREATE_WATCHER: "WACHETE_CREATE_WATCHER",
    /**
     * Tool to delete a watcher. use when you need to remove a monitor by its id after confirmation. confirm the watcher id is correct before calling. example: "delete watcher with id 123abc."
     */
    DELETE_WATCHER: "WACHETE_DELETE_WATCHER",
    /**
     * Tool to retrieve the content of a folder. use when you need to list subfolders and watchers inside a specific folder after managing folder structure.
     */
    GET_FOLDER_CONTENT: "WACHETE_GET_FOLDER_CONTENT",
    /**
     * Tool to list account notifications. use after authenticating to retrieve notifications for one or all wachets within an optional time range.
     */
    LIST_NOTIFICATIONS: "WACHETE_LIST_NOTIFICATIONS",
    /**
     * Tool to list all watchers. use when you need to retrieve your configured monitoring tasks.
     */
    LIST_WATCHERS: "WACHETE_LIST_WATCHERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WACHETE".
 */
export type WACHETE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WACHETE".
 */
export type WACHETE_TRIGGER_EVENTS = {}
