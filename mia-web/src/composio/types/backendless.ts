// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BACKENDLESS's BACKENDLESS_COPY_FILE tool input.
 */
type BACKENDLESS_COPY_FILE_INPUT = {
  /**
   * Source Path
   * @description Absolute path of the file or directory to copy. Must start with a leading slash ('/') and point to an existing resource.
   */
  source_path?: string;
  /**
   * Target Path
   * @description Destination directory path where the source will be copied. Must start with a leading slash ('/'). Will be created if it does not exist.
   */
  target_path?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_COPY_FILE tool output.
 */
type BACKENDLESS_COPY_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Copied Path
       * @description Absolute path to the newly copied file or directory.
       */
      copied_path: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_CREATE_DIRECTORY tool input.
 */
type BACKENDLESS_CREATE_DIRECTORY_INPUT = {
  /**
   * Directory Path
   * @description Full path of the directory to create, without leading slash. Multi-level directories will be created automatically if they don't exist.
   */
  directory_path?: string;
  /**
   * User Token
   * @description Authorization token for secure file service. Required only if security is enabled.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_CREATE_DIRECTORY tool output.
 */
type BACKENDLESS_CREATE_DIRECTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Url
       * @description Full URL of the created directory.
       */
      fileURL: string;
      /**
       * Message
       * @description Result message, e.g., 'Directory created successfully'.
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
 * Type of BACKENDLESS's BACKENDLESS_CREATE_HIVE tool input.
 */
type BACKENDLESS_CREATE_HIVE_INPUT = {
  /**
   * Hive Name
   * @description Name of the hive to create. Must be URL-safe, without slashes. Allowed characters: letters, numbers, underscore, hyphen.
   */
  hive_name?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_CREATE_HIVE tool output.
 */
type BACKENDLESS_CREATE_HIVE_OUTPUT = {
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
 * Type of BACKENDLESS's BACKENDLESS_CREATE_TIMER tool input.
 */
type BACKENDLESS_CREATE_TIMER_INPUT = {
  /**
   * Expire
   * @description Expiration date/time in Unix epoch milliseconds. Timer will stop after this
   * @default null
   */
  expire: number | null;
  /**
   * Frequency
   * @description Schedule and repeat configuration for the timer
   */
  frequency?: {
      /**
       * Month Days
       * @description List of days of month when schedule is monthly
       * @default null
       */
      monthDays: number[] | null;
      /**
       * Month Weekdays
       * @description List of weekdays corresponding to monthWeeks when schedule is monthly
       * @default null
       */
      monthWeekdays: string[] | null;
      /**
       * Month Weeks
       * @description List of week positions in the month (1-5) when schedule is monthly
       * @default null
       */
      monthWeeks: number[] | null;
      /**
       * Repeat
       * @description Repeat interval configuration
       */
      repeat: {
          /**
           * Every
           * @description Number of units between each run, must be positive
           */
          every: number;
      };
      /**
       * Schedule
       * @description Type of schedule for the timer
       * @enum {string}
       */
      schedule: "once" | "custom" | "daily" | "weekly" | "monthly";
      /**
       * Weekdays
       * @description List of weekdays when schedule is weekly
       * @default null
       */
      weekdays: string[] | null;
  };
  /**
   * Name
   * @description Unique name for the timer
   */
  name?: string;
  /**
   * Start Date
   * @description Start date/time in Unix epoch milliseconds. Defaults to now if omitted
   * @default null
   */
  startDate: number | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_CREATE_TIMER tool output.
 */
type BACKENDLESS_CREATE_TIMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expire
       * @description Expiration date/time in Unix epoch milliseconds
       * @default null
       */
      expire: number | null;
      /**
       * Frequency
       * @description Schedule and repeat configuration of the timer
       */
      frequency: {
          /**
           * Month Days
           * @description List of days of month when schedule is monthly
           * @default null
           */
          monthDays: number[] | null;
          /**
           * Month Weekdays
           * @description List of weekdays corresponding to monthWeeks when schedule is monthly
           * @default null
           */
          monthWeekdays: string[] | null;
          /**
           * Month Weeks
           * @description List of week positions in the month (1-5) when schedule is monthly
           * @default null
           */
          monthWeeks: number[] | null;
          /**
           * Repeat
           * @description Repeat interval configuration
           */
          repeat: {
              /**
               * Every
               * @description Number of units between each run, must be positive
               */
              every: number;
          };
          /**
           * Schedule
           * @description Type of schedule for the timer
           * @enum {string}
           */
          schedule: "once" | "custom" | "daily" | "weekly" | "monthly";
          /**
           * Weekdays
           * @description List of weekdays when schedule is weekly
           * @default null
           */
          weekdays: string[] | null;
      };
      /**
       * Id
       * @description Unique identifier of the timer
       */
      id: string;
      /**
       * Name
       * @description Name of the timer
       */
      name: string;
      /**
       * Next Run
       * @description Scheduled next run time in Unix epoch milliseconds
       * @default null
       */
      nextRun: number | null;
      /**
       * Start Date
       * @description Start date/time in Unix epoch milliseconds
       * @default null
       */
      startDate: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_DELETE_DIRECTORY tool input.
 */
type BACKENDLESS_DELETE_DIRECTORY_INPUT = {
  /**
   * Directory Path
   * @description Relative path of the directory to delete in file storage. Do not include a leading slash.
   */
  directory_path?: string;
  /**
   * User Token
   * @description Optional user authentication token. If provided, the delete operation will be executed under that user's security policies.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_DELETE_DIRECTORY tool output.
 */
type BACKENDLESS_DELETE_DIRECTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Detail
       * @description Error details if the operation failed
       * @default null
       */
      detail: string | null;
      /**
       * Http Code
       * @description HTTP status code returned by the API
       */
      http_code: number;
      /**
       * Status
       * @description Operation status, e.g., 'success' or 'error'
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
 * Type of BACKENDLESS's BACKENDLESS_DELETE_FILE tool input.
 */
type BACKENDLESS_DELETE_FILE_INPUT = {
  /**
   * Relative Path
   * @description Relative path and filename in Backendless file storage to delete, without leading slash. Example: 'txtfiles/test.txt'.
   */
  relative_path?: string;
  /**
   * User Token
   * @description Optional user-token from Backendless login. If provided, the delete operation runs with that user's security policy.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_DELETE_FILE tool output.
 */
type BACKENDLESS_DELETE_FILE_OUTPUT = {
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
 * Type of BACKENDLESS's BACKENDLESS_DELETE_TIMER tool input.
 */
type BACKENDLESS_DELETE_TIMER_INPUT = {
  /**
   * Timer Name
   * @description Name of the timer to delete
   */
  timer_name?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_DELETE_TIMER tool output.
 */
type BACKENDLESS_DELETE_TIMER_OUTPUT = {
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
 * Type of BACKENDLESS's BACKENDLESS_DIRECTORY_LISTING tool input.
 */
type BACKENDLESS_DIRECTORY_LISTING_INPUT = {
  /**
   * Offset
   * @description Index of the first item to return for pagination.
   * @default null
   */
  offset: number | null;
  /**
   * Pagesize
   * @description Maximum number of items to return.
   * @default null
   */
  pagesize: number | null;
  /**
   * Path
   * @description Path of the directory to list. Must start with '/'.
   */
  path?: string;
  /**
   * Pattern
   * @description Wildcard pattern to filter results; '*' matches any substring, '?' matches a single character.
   * @default null
   */
  pattern: string | null;
  /**
   * Sub
   * @description If true, list directories recursively.
   * @default null
   */
  sub: boolean | null;
  /**
   * User Token
   * @description User token for security policies. If provided, the request will be executed with user permissions.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_DIRECTORY_LISTING tool output.
 */
type BACKENDLESS_DIRECTORY_LISTING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of files and directories within the specified path.
       */
      items: {
          /**
           * Created On
           * @description Timestamp (in milliseconds) when the file or directory was created.
           */
          createdOn: number;
          /**
           * Name
           * @description Name of the file or directory without any path information.
           */
          name: string;
          /**
           * Public Url
           * @description Absolute URL to access the file or directory.
           */
          publicUrl: string;
          /**
           * Size
           * @description Size of the file in bytes; zero for directories.
           */
          size: number;
          /**
           * Url
           * @description Relative URL of the file or directory starting from the storage root.
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
 * Type of BACKENDLESS's BACKENDLESS_GENERAL_OBJECT_RETRIEVAL tool input.
 */
type BACKENDLESS_GENERAL_OBJECT_RETRIEVAL_INPUT = {
  /**
   * Distinct
   * @description Column name to return distinct values for, e.g., 'city'
   * @default null
   */
  distinct: string | null;
  /**
   * Exclude Props
   * @description Comma-separated list of properties to exclude, e.g., 'password'
   * @default null
   */
  excludeProps: string | null;
  /**
   * Group By
   * @description Comma-separated list of properties to group by, e.g., 'department'
   * @default null
   */
  groupBy: string | null;
  /**
   * Having
   * @description Condition to filter groups after aggregation, e.g., 'COUNT(*) > 1'
   * @default null
   */
  having: string | null;
  /**
   * Load Relations
   * @description Comma-separated list of related properties to include, e.g., 'profile,address'
   * @default null
   */
  loadRelations: string | null;
  /**
   * Offset
   * @description Number of objects to skip before returning results. Default is 0 if not specified.
   * @default null
   */
  offset: number | null;
  /**
   * Page Size
   * @description Number of objects to return per page. Default is 10 if not specified.
   * @default null
   */
  pageSize: number | null;
  /**
   * Props
   * @description Comma-separated list of properties to include, e.g., 'name,email'
   * @default null
   */
  props: string | null;
  /**
   * Relations Depth
   * @description Depth of related objects to include. Default is 1 if not specified.
   * @default null
   */
  relationsDepth: number | null;
  /**
   * Relations Page Size
   * @description Number of related objects to return per page. Default is 10 if not specified.
   * @default null
   */
  relationsPageSize: number | null;
  /**
   * Sort By
   * @description Comma-separated list of properties to sort by (append 'desc' for descending), e.g., 'created desc'
   * @default null
   */
  sortBy: string | null;
  /**
   * Table Name
   * @description Name of the data table to query, e.g., 'Users'
   */
  table_name?: string;
  /**
   * User Token
   * @description User authentication token to apply user-level security policies
   * @default null
   */
  "user-token": string | null;
  /**
   * Where
   * @description SQL-like condition to filter objects, e.g., 'age > 25'
   * @default null
   */
  where: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_GENERAL_OBJECT_RETRIEVAL tool output.
 */
type BACKENDLESS_GENERAL_OBJECT_RETRIEVAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Objects
       * @description List of objects matching the query. Each object is a mapping of property names to values.
       */
      objects: {
          [key: string]: string | number | boolean | {
              [key: string]: string | number | boolean | null;
          } | (string | number | boolean | null)[] | null;
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
 * Type of BACKENDLESS's BACKENDLESS_GET_ALL_VALUES tool input.
 */
type BACKENDLESS_GET_ALL_VALUES_INPUT = {
  /**
   * Hive Name
   * @description Name of the Hive where the map is stored.
   */
  hive_name?: string;
  /**
   * Map Name
   * @description Key name identifying the map.
   */
  map_name?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_GET_ALL_VALUES tool output.
 */
type BACKENDLESS_GET_ALL_VALUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Values
       * @description List of values stored in the map. Each element is a valid JSON type.
       */
      values: (string | number | boolean | {
          [key: string]: string | number | boolean | null;
      } | (string | number | boolean | null)[] | null)[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_GET_COUNTER_VALUE tool input.
 */
type BACKENDLESS_GET_COUNTER_VALUE_INPUT = {
  /**
   * Counter Name
   * @description Name of the counter to retrieve the value of.
   */
  counter_name?: string;
  /**
   * User Token
   * @description Optional user-token for enforcing user-level security policies.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_GET_COUNTER_VALUE tool output.
 */
type BACKENDLESS_GET_COUNTER_VALUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current
       * @description Current numeric value of the counter.
       */
      current: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_GET_FILE_COUNT tool input.
 */
type BACKENDLESS_GET_FILE_COUNT_INPUT = {
  /**
   * Count Directories
   * @description If true, include directories in the count as well.
   * @default null
   */
  count_directories: boolean | null;
  /**
   * Path
   * @description Path of the directory to count files in. Must start with '/'.
   */
  path?: string;
  /**
   * Pattern
   * @description Optional glob or regex pattern to filter files (prefix with 'glob:' or 'regex:').
   * @default null
   */
  pattern: string | null;
  /**
   * Sub
   * @description If true, include files in subdirectories recursively.
   * @default null
   */
  sub: boolean | null;
  /**
   * User Token
   * @description Optional user-token header for authenticated operations. Enforces user security policies if provided.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_GET_FILE_COUNT tool output.
 */
type BACKENDLESS_GET_FILE_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of files (and optionally directories) matching the criteria in the specified path.
       */
      count: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_GET_KEY_ITEMS tool input.
 */
type BACKENDLESS_GET_KEY_ITEMS_INPUT = {
  /**
   * From Index
   * @description Zero-based start index for range retrieval. Must be provided together with to_index.
   * @default null
   */
  from_index: number | null;
  /**
   * Hive Name
   * @description Name of the Hive where the list is stored.
   */
  hive_name?: string;
  /**
   * Index
   * @description Zero-based index to retrieve a single element. Mutually exclusive with from_index and to_index.
   * @default null
   */
  index: number | null;
  /**
   * Key
   * @description Key name identifying the list to retrieve.
   */
  key?: string;
  /**
   * To Index
   * @description Zero-based end index for range retrieval. Must be provided together with from_index.
   * @default null
   */
  to_index: number | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_GET_KEY_ITEMS tool output.
 */
type BACKENDLESS_GET_KEY_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of values retrieved. Single-element list if index specified.
       */
      items: (string | number | boolean | {
          [key: string]: string | number | boolean | null;
      } | (string | number | boolean | null)[] | null)[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_GET_TIMER tool input.
 */
type BACKENDLESS_GET_TIMER_INPUT = {
  /**
   * Name
   * @description Name of the timer to retrieve
   */
  name?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_GET_TIMER tool output.
 */
type BACKENDLESS_GET_TIMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expire
       * @description Expiration date/time in Unix epoch milliseconds
       * @default null
       */
      expire: number | null;
      /**
       * Frequency
       * @description Schedule and repeat configuration of the timer
       */
      frequency: {
          /**
           * Month Days
           * @description List of days of the month when schedule is monthly
           * @default null
           */
          monthDays: number[] | null;
          /**
           * Month Weekdays
           * @description List of weekdays corresponding to monthWeeks when schedule is monthly
           * @default null
           */
          monthWeekdays: string[] | null;
          /**
           * Month Weeks
           * @description List of week positions in the month (1-5) when schedule is monthly
           * @default null
           */
          monthWeeks: number[] | null;
          /**
           * Repeat
           * @description Repeat interval configuration for the timer
           */
          repeat: {
              /**
               * Every
               * @description Number of time units between each run, must be positive
               */
              every: number;
          };
          /**
           * Schedule
           * @description Type of schedule for the timer
           * @enum {string}
           */
          schedule: "once" | "custom" | "daily" | "weekly" | "monthly";
          /**
           * Weekdays
           * @description List of weekdays when schedule is weekly
           * @default null
           */
          weekdays: string[] | null;
      };
      /**
       * Id
       * @description Unique identifier of the timer
       */
      id: string;
      /**
       * Name
       * @description Name of the timer
       */
      name: string;
      /**
       * Next Run
       * @description Scheduled next run time in Unix epoch milliseconds
       * @default null
       */
      nextRun: number | null;
      /**
       * Start Date
       * @description Start date/time in Unix epoch milliseconds
       * @default null
       */
      startDate: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_MAP_PUT tool input.
 */
type BACKENDLESS_MAP_PUT_INPUT = {
  /**
   * Entries
   * @description Key-value pairs to set in the map.
   */
  entries?: {
      [key: string]: string | number | boolean | {
          [key: string]: string | number | boolean | null;
      } | (string | number | boolean | null)[] | null;
  };
  /**
   * Hive Name
   * @description Name of the Hive where the map is stored.
   */
  hive_name?: string;
  /**
   * Map Name
   * @description Key name identifying the map.
   */
  map_name?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_MAP_PUT tool output.
 */
type BACKENDLESS_MAP_PUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of new entries added to the map.
       */
      count: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_MOVE_FILE tool input.
 */
type BACKENDLESS_MOVE_FILE_INPUT = {
  /**
   * Source Path
   * @description Absolute path of the file or directory to move. Must start with a leading slash ('/') and point to an existing resource.
   */
  source_path?: string;
  /**
   * Target Path
   * @description Destination directory path where the source will be moved. Must start with a leading slash ('/'). Will be created if it does not exist.
   */
  target_path?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_MOVE_FILE tool output.
 */
type BACKENDLESS_MOVE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Moved Path
       * @description Absolute path to the moved file or directory.
       */
      moved_path: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_PUBLISH_MESSAGE tool input.
 */
type BACKENDLESS_PUBLISH_MESSAGE_INPUT = {
  /**
   * Channel Name
   * @description Name of the channel to publish the message to.
   */
  channel_name?: string;
  /**
   * Headers
   * @description Additional message headers for delivery filtering.
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Message
   * @description Content of the message to publish; must be a valid JSON type.
   */
  message?: string | null;
  /**
   * Publish At
   * @description Unix timestamp in milliseconds when the message should be delivered.
   * @default null
   */
  publishAt: number | null;
  /**
   * Publisher Id
   * @description Unique identifier of the message publisher; optional.
   * @default null
   */
  publisherId: string | null;
  /**
   * Repeat Every
   * @description Frequency in seconds for repeating delivery.
   * @default null
   */
  repeatEvery: number | null;
  /**
   * Repeat Expires At
   * @description Unix timestamp in milliseconds when repeating should stop.
   * @default null
   */
  repeatExpiresAt: number | null;
  /**
   * User Token
   * @description Optional user token for security context; sent as 'user-token' header.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_PUBLISH_MESSAGE tool output.
 */
type BACKENDLESS_PUBLISH_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message Id
       * @description Unique identifier of the published message.
       */
      messageId: string;
      /**
       * Status
       * @description Status of the message publishing.
       * @enum {string}
       */
      status: "scheduled" | "failed" | "published";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_RESET_COUNTER tool input.
 */
type BACKENDLESS_RESET_COUNTER_INPUT = {
  /**
   * Counter Name
   * @description Name of the counter to reset to zero.
   */
  counter_name?: string;
  /**
   * User Token
   * @description Optional user-token for enforcing user-level security policies.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_RESET_COUNTER tool output.
 */
type BACKENDLESS_RESET_COUNTER_OUTPUT = {
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
 * Type of BACKENDLESS's BACKENDLESS_SET_COUNTER_VALUE tool input.
 */
type BACKENDLESS_SET_COUNTER_VALUE_INPUT = {
  /**
   * Counter Name
   * @description Name of the counter to update
   */
  counter_name?: string;
  /**
   * Expected
   * @description The expected current value of the counter
   */
  expected?: number;
  /**
   * Updatedvalue
   * @description The new value to set if the current counter equals the expected value
   */
  updatedvalue?: number;
  /**
   * User Token
   * @description Optional user-token for enforcing user-level security policies.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_SET_COUNTER_VALUE tool output.
 */
type BACKENDLESS_SET_COUNTER_VALUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description True if the counter was updated to the new value, false otherwise
       */
      result: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_UPDATE_TIMER tool input.
 */
type BACKENDLESS_UPDATE_TIMER_INPUT = {
  /**
   * Code
   * @description Updated code to execute when the timer runs
   * @default null
   */
  code: string | null;
  /**
   * Expire
   * @description New expiration date/time in Unix epoch milliseconds
   * @default null
   */
  expire: number | null;
  /**
   * Frequency
   * @description Updated schedule and repeat configuration for the timer
   * @default null
   */
  frequency: {
      /**
       * Month Days
       * @description List of days of the month when schedule is monthly
       * @default null
       */
      monthDays: number[] | null;
      /**
       * Month Weekdays
       * @description List of weekdays corresponding to monthWeeks when schedule is monthly
       * @default null
       */
      monthWeekdays: string[] | null;
      /**
       * Month Weeks
       * @description List of week positions in the month (1-5) when schedule is monthly
       * @default null
       */
      monthWeeks: number[] | null;
      /**
       * Repeat
       * @description Repeat interval configuration for the timer
       */
      repeat: {
          /**
           * Every
           * @description Number of units between each run, must be positive
           */
          every: number;
      };
      /**
       * Schedule
       * @description Type of schedule for the timer
       * @enum {string}
       */
      schedule: "once" | "custom" | "daily" | "weekly" | "monthly";
      /**
       * Weekdays
       * @description List of weekdays when schedule is weekly
       * @default null
       */
      weekdays: string[] | null;
  } | null;
  /**
   * Name
   * @description Name of the timer to update
   */
  name?: string;
  /**
   * Start Date
   * @description New start date/time in Unix epoch milliseconds
   * @default null
   */
  startDate: number | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_UPDATE_TIMER tool output.
 */
type BACKENDLESS_UPDATE_TIMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expire
       * @description Expiration date/time in Unix epoch milliseconds
       * @default null
       */
      expire: number | null;
      /**
       * Frequency
       * @description Schedule and repeat configuration of the timer
       */
      frequency: {
          /**
           * Month Days
           * @description List of days of the month when schedule is monthly
           * @default null
           */
          monthDays: number[] | null;
          /**
           * Month Weekdays
           * @description List of weekdays corresponding to monthWeeks when schedule is monthly
           * @default null
           */
          monthWeekdays: string[] | null;
          /**
           * Month Weeks
           * @description List of week positions in the month (1-5) when schedule is monthly
           * @default null
           */
          monthWeeks: number[] | null;
          /**
           * Repeat
           * @description Repeat interval configuration for the timer
           */
          repeat: {
              /**
               * Every
               * @description Number of units between each run, must be positive
               */
              every: number;
          };
          /**
           * Schedule
           * @description Type of schedule for the timer
           * @enum {string}
           */
          schedule: "once" | "custom" | "daily" | "weekly" | "monthly";
          /**
           * Weekdays
           * @description List of weekdays when schedule is weekly
           * @default null
           */
          weekdays: string[] | null;
      };
      /**
       * Id
       * @description Unique identifier of the timer
       */
      id: string;
      /**
       * Name
       * @description Name of the timer
       */
      name: string;
      /**
       * Next Run
       * @description Next scheduled run time in Unix epoch milliseconds
       * @default null
       */
      nextRun: number | null;
      /**
       * Start Date
       * @description Start date/time in Unix epoch milliseconds
       * @default null
       */
      startDate: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_CHANGE_PASSWORD tool input.
 */
type BACKENDLESS_USER_CHANGE_PASSWORD_INPUT = {
  /**
   * Password
   * @description The new password to set for the user. Must comply with password policy.
   */
  password?: string;
  /**
   * User Id
   * @description ObjectId of the user whose password will be updated.
   */
  user_id?: string;
  /**
   * User Token
   * @description Session token obtained from a successful login.
   */
  user_token?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_CHANGE_PASSWORD tool output.
 */
type BACKENDLESS_USER_CHANGE_PASSWORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
 * Type of BACKENDLESS's BACKENDLESS_USER_DELETE tool input.
 */
type BACKENDLESS_USER_DELETE_INPUT = {
  /**
   * User Id
   * @description The unique ID (objectId) of the user to delete.
   */
  user_id?: string;
  /**
   * User Token
   * @description Optional user authentication token. If provided, the operation uses the user's security context.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_DELETE tool output.
 */
type BACKENDLESS_USER_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deletion Time
       * @description Timestamp indicating when the user was deleted.
       */
      deletionTime: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_FIND tool input.
 */
type BACKENDLESS_USER_FIND_INPUT = {
  /**
   * User Id
   * @description The unique objectId of the user to retrieve.
   */
  user_id?: string;
  /**
   * User Token
   * @description Optional user authentication token. If provided, the request uses the user's security context.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_FIND tool output.
 */
type BACKENDLESS_USER_FIND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User
       * @description Mapping of user property names to values.
       */
      user: {
          [key: string]: string | number | boolean | {
              [key: string]: string | number | boolean | null;
          } | (string | number | boolean | null)[] | null;
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
 * Type of BACKENDLESS's BACKENDLESS_USER_GRANT_PERMISSION tool input.
 */
type BACKENDLESS_USER_GRANT_PERMISSION_INPUT = {
  /**
   * Object Id
   * @description Unique identifier of the data object whose permissions are to be modified.
   */
  object_id?: string;
  /**
   * Permission
   * @description Type of permission to grant. Use '*' to grant all permissions.
   * @enum {string}
   */
  permission?: "UPDATE" | "FIND" | "REMOVE" | "DESCRIBE" | "PERMISSION" | "LOAD_RELATIONS" | "ADD_RELATION" | "DELETE_RELATION" | "UPSERT" | "*";
  /**
   * Table Name
   * @description Name of the data table containing the object.
   */
  table_name?: string;
  /**
   * User
   * @description Object ID of the user to whom the permission is being granted.
   */
  user?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_GRANT_PERMISSION tool output.
 */
type BACKENDLESS_USER_GRANT_PERMISSION_OUTPUT = {
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
 * Type of BACKENDLESS's BACKENDLESS_USER_LOGIN tool input.
 */
type BACKENDLESS_USER_LOGIN_INPUT = {
  /**
   * Login
   * @description Value for the property marked as identity (e.g., email).
   */
  login?: string;
  /**
   * Password
   * @description User's password (case-sensitive).
   */
  password?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_LOGIN tool output.
 */
type BACKENDLESS_USER_LOGIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp of the user record (ISO-8601 UTC)
       */
      created: string;
      /**
       * Custom Properties
       * @description Custom properties defined for the user record in Backendless
       * @default null
       */
      customProperties: {
          [key: string]: string | number | boolean | {
              [key: string]: string | number | boolean | null;
          } | (string | number | boolean | null)[] | null;
      } | null;
      /**
       * Email
       * @description User email stored in Backendless
       * @default null
       */
      email: string | null;
      /**
       * Email Verified
       * @description Flag indicating if the user's email is verified
       * @default null
       */
      emailVerified: boolean | null;
      /**
       * Name
       * @description User name stored in Backendless
       * @default null
       */
      name: string | null;
      /**
       * Object Id
       * @description Unique identifier of the user
       */
      objectId: string;
      /**
       * Owner Id
       * @description Application-level owner identifier for the user record
       * @default null
       */
      ownerId: string | null;
      /**
       * Roles
       * @description List of roles assigned to the user
       * @default null
       */
      roles: {
          /**
           * Name
           * @description Name of the role
           */
          name: string;
          /**
           * Object Id
           * @description Unique identifier of the role
           */
          objectId: string;
      }[] | null;
      /**
       * Updated
       * @description Last update timestamp of the user record (ISO-8601 UTC)
       */
      updated: string;
      /**
       * User Token
       * @description Session token for the user. Use as 'user-token' header in subsequent requests.
       */
      "user-token": string;
  } & {
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
 * Type of BACKENDLESS's BACKENDLESS_USER_LOGOUT tool input.
 */
type BACKENDLESS_USER_LOGOUT_INPUT = {
  /**
   * User Token
   * @description Session token for the user. Use as 'user-token' header to authenticate the request.
   */
  "user-token"?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_LOGOUT tool output.
 */
type BACKENDLESS_USER_LOGOUT_OUTPUT = {
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
 * Type of BACKENDLESS's BACKENDLESS_USER_PASSWORD_RECOVERY tool input.
 */
type BACKENDLESS_USER_PASSWORD_RECOVERY_INPUT = {
  /**
   * User Identity
   * @description Value of the property marked as identity on the Users table (by default this is an email). Must be URL-encoded in the request path.
   */
  user_identity?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_PASSWORD_RECOVERY tool output.
 */
type BACKENDLESS_USER_PASSWORD_RECOVERY_OUTPUT = {
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
 * Type of BACKENDLESS's BACKENDLESS_USER_REGISTRATION tool input.
 */
type BACKENDLESS_USER_REGISTRATION_INPUT = {
  /**
   * Email
   * @description User's email address used as identity in Backendless
   */
  email?: string;
  /**
   * Object Id
   * @description Optional objectId of a guest user to convert into a registered user
   * @default null
   */
  objectId: string | null;
  /**
   * Password
   * @description Password for the new user (case-sensitive)
   */
  password?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_REGISTRATION tool output.
 */
type BACKENDLESS_USER_REGISTRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Timestamp when the user record was created (ISO-8601 UTC)
       */
      created: string;
      /**
       * Custom Properties
       * @description Custom properties defined for the user record
       * @default null
       */
      customProperties: {
          [key: string]: string | number | boolean | {
              [key: string]: string | number | boolean | null;
          } | (string | number | boolean | null)[] | null;
      } | null;
      /**
       * Email
       * @description User's email address stored in Backendless
       * @default null
       */
      email: string | null;
      /**
       * Email Verified
       * @description Indicates whether the user's email is verified
       * @default null
       */
      emailVerified: boolean | null;
      /**
       * Name
       * @description User's name stored in Backendless
       * @default null
       */
      name: string | null;
      /**
       * Object Id
       * @description Unique identifier of the user
       */
      objectId: string;
      /**
       * Owner Id
       * @description Application-level owner identifier for the user record
       * @default null
       */
      ownerId: string | null;
      /**
       * Roles
       * @description List of roles assigned to the user
       * @default null
       */
      roles: {
          /**
           * Name
           * @description Name of the role
           */
          name: string;
          /**
           * Object Id
           * @description Unique identifier of the role
           */
          objectId: string;
      }[] | null;
      /**
       * Updated
       * @description Timestamp when the user record was last updated (ISO-8601 UTC)
       */
      updated: string;
  } & {
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
 * Type of BACKENDLESS's BACKENDLESS_USER_REVOKE_PERMISSION tool input.
 */
type BACKENDLESS_USER_REVOKE_PERMISSION_INPUT = {
  /**
   * Permission
   * @description Permission to revoke. One of 'ADD', 'UPDATE', 'FIND', 'REMOVE', 'DESCRIBE', 'PERMISSION', 'LOAD_RELATIONS', 'ADD_RELATION', 'DELETE_RELATION', 'UPSERT', or '*' (all permissions).
   * @enum {string}
   */
  permission?: "ADD" | "UPDATE" | "FIND" | "REMOVE" | "DESCRIBE" | "PERMISSION" | "LOAD_RELATIONS" | "ADD_RELATION" | "DELETE_RELATION" | "UPSERT" | "*";
  /**
   * Role
   * @description Name of the role to revoke the permission for. Ignored if 'user' is provided.
   * @default null
   */
  role: string | null;
  /**
   * Table Name
   * @description Name of the data table to revoke the permission from, e.g., 'Person'
   */
  table_name?: string;
  /**
   * User
   * @description ObjectId of the user in the Users table. Provide this to revoke for a specific user.
   * @default null
   */
  user: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_REVOKE_PERMISSION tool output.
 */
type BACKENDLESS_USER_REVOKE_PERMISSION_OUTPUT = {
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
 * Type of BACKENDLESS's BACKENDLESS_USER_UPDATE tool input.
 */
type BACKENDLESS_USER_UPDATE_INPUT = {
  /**
   * Properties
   * @description Key-value pairs of user properties to update
   */
  properties?: {
      [key: string]: string | number | boolean | {
          [key: string]: string | number | boolean | null;
      } | (string | number | boolean | null)[] | null;
  };
  /**
   * User Id
   * @description ObjectId of the user to update
   */
  user_id?: string;
  /**
   * User Token
   * @description Session token obtained from a successful login. If provided, the update will be performed under that user's owner policy.
   * @default null
   */
  user_token: string | null;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_USER_UPDATE tool output.
 */
type BACKENDLESS_USER_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Timestamp when the user record was created (ISO-8601 UTC)
       */
      created: string;
      /**
       * Custom Properties
       * @description Custom dynamic properties defined for the user record
       * @default null
       */
      customProperties: {
          [key: string]: string | number | boolean | {
              [key: string]: string | number | boolean | null;
          } | (string | number | boolean | null)[] | null;
      } | null;
      /**
       * Email
       * @description User's email address stored in Backendless
       * @default null
       */
      email: string | null;
      /**
       * Email Verified
       * @description Indicates whether the user's email is verified
       * @default null
       */
      emailVerified: boolean | null;
      /**
       * Name
       * @description User's name stored in Backendless
       * @default null
       */
      name: string | null;
      /**
       * Object Id
       * @description Unique identifier of the user
       */
      objectId: string;
      /**
       * Owner Id
       * @description Application-level owner identifier for the user record
       * @default null
       */
      ownerId: string | null;
      /**
       * Roles
       * @description List of roles assigned to the user
       * @default null
       */
      roles: {
          /**
           * Name
           * @description Name of the role
           */
          name: string;
          /**
           * Object Id
           * @description Unique identifier of the role
           */
          objectId: string;
      }[] | null;
      /**
       * Updated
       * @description Timestamp when the user record was last updated (ISO-8601 UTC)
       */
      updated: string;
  } & {
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
 * Type of BACKENDLESS's BACKENDLESS_VALIDATE_USER_TOKEN tool input.
 */
type BACKENDLESS_VALIDATE_USER_TOKEN_INPUT = {
  /**
   * User Token
   * @description The session token to validate, returned by user login
   */
  userToken?: string;
};

/**
 * Type of BACKENDLESS's BACKENDLESS_VALIDATE_USER_TOKEN tool output.
 */
type BACKENDLESS_VALIDATE_USER_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Is Valid
       * @description True if the user session token is still active; otherwise False
       */
      is_valid: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "BACKENDLESS".
 */
export type BACKENDLESS_TOOL_INPUTS = {
  COPY_FILE: BACKENDLESS_COPY_FILE_INPUT
  CREATE_DIRECTORY: BACKENDLESS_CREATE_DIRECTORY_INPUT
  CREATE_HIVE: BACKENDLESS_CREATE_HIVE_INPUT
  CREATE_TIMER: BACKENDLESS_CREATE_TIMER_INPUT
  DELETE_DIRECTORY: BACKENDLESS_DELETE_DIRECTORY_INPUT
  DELETE_FILE: BACKENDLESS_DELETE_FILE_INPUT
  DELETE_TIMER: BACKENDLESS_DELETE_TIMER_INPUT
  DIRECTORY_LISTING: BACKENDLESS_DIRECTORY_LISTING_INPUT
  GENERAL_OBJECT_RETRIEVAL: BACKENDLESS_GENERAL_OBJECT_RETRIEVAL_INPUT
  GET_ALL_VALUES: BACKENDLESS_GET_ALL_VALUES_INPUT
  GET_COUNTER_VALUE: BACKENDLESS_GET_COUNTER_VALUE_INPUT
  GET_FILE_COUNT: BACKENDLESS_GET_FILE_COUNT_INPUT
  GET_KEY_ITEMS: BACKENDLESS_GET_KEY_ITEMS_INPUT
  GET_TIMER: BACKENDLESS_GET_TIMER_INPUT
  MAP_PUT: BACKENDLESS_MAP_PUT_INPUT
  MOVE_FILE: BACKENDLESS_MOVE_FILE_INPUT
  PUBLISH_MESSAGE: BACKENDLESS_PUBLISH_MESSAGE_INPUT
  RESET_COUNTER: BACKENDLESS_RESET_COUNTER_INPUT
  SET_COUNTER_VALUE: BACKENDLESS_SET_COUNTER_VALUE_INPUT
  UPDATE_TIMER: BACKENDLESS_UPDATE_TIMER_INPUT
  USER_CHANGE_PASSWORD: BACKENDLESS_USER_CHANGE_PASSWORD_INPUT
  USER_DELETE: BACKENDLESS_USER_DELETE_INPUT
  USER_FIND: BACKENDLESS_USER_FIND_INPUT
  USER_GRANT_PERMISSION: BACKENDLESS_USER_GRANT_PERMISSION_INPUT
  USER_LOGIN: BACKENDLESS_USER_LOGIN_INPUT
  USER_LOGOUT: BACKENDLESS_USER_LOGOUT_INPUT
  USER_PASSWORD_RECOVERY: BACKENDLESS_USER_PASSWORD_RECOVERY_INPUT
  USER_REGISTRATION: BACKENDLESS_USER_REGISTRATION_INPUT
  USER_REVOKE_PERMISSION: BACKENDLESS_USER_REVOKE_PERMISSION_INPUT
  USER_UPDATE: BACKENDLESS_USER_UPDATE_INPUT
  VALIDATE_USER_TOKEN: BACKENDLESS_VALIDATE_USER_TOKEN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BACKENDLESS".
 */
export type BACKENDLESS_TOOL_OUTPUTS = {
  COPY_FILE: BACKENDLESS_COPY_FILE_OUTPUT
  CREATE_DIRECTORY: BACKENDLESS_CREATE_DIRECTORY_OUTPUT
  CREATE_HIVE: BACKENDLESS_CREATE_HIVE_OUTPUT
  CREATE_TIMER: BACKENDLESS_CREATE_TIMER_OUTPUT
  DELETE_DIRECTORY: BACKENDLESS_DELETE_DIRECTORY_OUTPUT
  DELETE_FILE: BACKENDLESS_DELETE_FILE_OUTPUT
  DELETE_TIMER: BACKENDLESS_DELETE_TIMER_OUTPUT
  DIRECTORY_LISTING: BACKENDLESS_DIRECTORY_LISTING_OUTPUT
  GENERAL_OBJECT_RETRIEVAL: BACKENDLESS_GENERAL_OBJECT_RETRIEVAL_OUTPUT
  GET_ALL_VALUES: BACKENDLESS_GET_ALL_VALUES_OUTPUT
  GET_COUNTER_VALUE: BACKENDLESS_GET_COUNTER_VALUE_OUTPUT
  GET_FILE_COUNT: BACKENDLESS_GET_FILE_COUNT_OUTPUT
  GET_KEY_ITEMS: BACKENDLESS_GET_KEY_ITEMS_OUTPUT
  GET_TIMER: BACKENDLESS_GET_TIMER_OUTPUT
  MAP_PUT: BACKENDLESS_MAP_PUT_OUTPUT
  MOVE_FILE: BACKENDLESS_MOVE_FILE_OUTPUT
  PUBLISH_MESSAGE: BACKENDLESS_PUBLISH_MESSAGE_OUTPUT
  RESET_COUNTER: BACKENDLESS_RESET_COUNTER_OUTPUT
  SET_COUNTER_VALUE: BACKENDLESS_SET_COUNTER_VALUE_OUTPUT
  UPDATE_TIMER: BACKENDLESS_UPDATE_TIMER_OUTPUT
  USER_CHANGE_PASSWORD: BACKENDLESS_USER_CHANGE_PASSWORD_OUTPUT
  USER_DELETE: BACKENDLESS_USER_DELETE_OUTPUT
  USER_FIND: BACKENDLESS_USER_FIND_OUTPUT
  USER_GRANT_PERMISSION: BACKENDLESS_USER_GRANT_PERMISSION_OUTPUT
  USER_LOGIN: BACKENDLESS_USER_LOGIN_OUTPUT
  USER_LOGOUT: BACKENDLESS_USER_LOGOUT_OUTPUT
  USER_PASSWORD_RECOVERY: BACKENDLESS_USER_PASSWORD_RECOVERY_OUTPUT
  USER_REGISTRATION: BACKENDLESS_USER_REGISTRATION_OUTPUT
  USER_REVOKE_PERMISSION: BACKENDLESS_USER_REVOKE_PERMISSION_OUTPUT
  USER_UPDATE: BACKENDLESS_USER_UPDATE_OUTPUT
  VALIDATE_USER_TOKEN: BACKENDLESS_VALIDATE_USER_TOKEN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BACKENDLESS toolkit.
 */
export const BACKENDLESS = {
  slug: "backendless",
  tools: {
    /**
     * Tool to copy a file or directory within backendless file storage. use when duplicating files to a new location after verifying source and destination paths.
     */
    COPY_FILE: "BACKENDLESS_COPY_FILE",
    /**
     * Tool to create a new directory at the specified path. use when you need to organize files under a new folder structure.
     */
    CREATE_DIRECTORY: "BACKENDLESS_CREATE_DIRECTORY",
    /**
     * Tool to create a new hive. use when you need to provision a new hive resource before performing hive operations. example: create a hive named 'grocerystore'.
     */
    CREATE_HIVE: "BACKENDLESS_CREATE_HIVE",
    /**
     * Tool to create a new timer with schedule and code. use when scheduling recurring or one-off tasks to run server-side logic after confirming parameters.
     */
    CREATE_TIMER: "BACKENDLESS_CREATE_TIMER",
    /**
     * Tool to delete a directory at the specified path in backendless file storage. use when you need to remove folders after confirming the path.
     */
    DELETE_DIRECTORY: "BACKENDLESS_DELETE_DIRECTORY",
    /**
     * Tool to delete a file at the specified path in backendless file storage. use after confirming the file's relative path and filename.
     */
    DELETE_FILE: "BACKENDLESS_DELETE_FILE",
    /**
     * Tool to delete a backendless timer by name. use when you need to remove a scheduled timer after confirming its name.
     */
    DELETE_TIMER: "BACKENDLESS_DELETE_TIMER",
    /**
     * Tool to retrieve a listing of files and directories at a given path. use when browsing or filtering file storage directories.
     */
    DIRECTORY_LISTING: "BACKENDLESS_DIRECTORY_LISTING",
    /**
     * Tool to retrieve objects from a specified backendless table with filtering, sorting, and pagination. use after confirming the table name and query options. example: "get users where age > 30 sorted by created desc".
     */
    GENERAL_OBJECT_RETRIEVAL: "BACKENDLESS_GENERAL_OBJECT_RETRIEVAL",
    /**
     * Tool to retrieve all values from a map in a specified hive. use when you need to fetch the entire contents of a hive map at once.
     */
    GET_ALL_VALUES: "BACKENDLESS_GET_ALL_VALUES",
    /**
     * Tool to retrieve the current value of a backendless counter. use when you need to inspect an atomic counter's value.
     */
    GET_COUNTER_VALUE: "BACKENDLESS_GET_COUNTER_VALUE",
    /**
     * Tool to get the count of files in a backendless directory. use when you need to determine how many items match a filter or include subdirectories.
     */
    GET_FILE_COUNT: "BACKENDLESS_GET_FILE_COUNT",
    /**
     * Tool to retrieve values for a specified key in a list (all, single, or range). use when you need specific elements or the entire list from a hive key. supports single index retrieval, range retrieval, or full list.
     */
    GET_KEY_ITEMS: "BACKENDLESS_GET_KEY_ITEMS",
    /**
     * Tool to retrieve information about a specific timer. use when you need to inspect a timer's schedule and next run details by name.
     */
    GET_TIMER: "BACKENDLESS_GET_TIMER",
    /**
     * Tool to set or update key-value pairs in a hive map. use when you need to add or update multiple entries in a hive map.
     */
    MAP_PUT: "BACKENDLESS_MAP_PUT",
    /**
     * Tool to move a file or directory within backendless file storage. use when relocating resources to a new path after verifying source and destination.
     */
    MOVE_FILE: "BACKENDLESS_MOVE_FILE",
    /**
     * Tool to publish a message to a specified messaging channel. use when you need to send notifications or events to subscribers after confirming channel and payload.
     */
    PUBLISH_MESSAGE: "BACKENDLESS_PUBLISH_MESSAGE",
    /**
     * Tool to reset a backendless counter back to zero. use when you need to reinitialize a counter before starting a new sequence.
     */
    RESET_COUNTER: "BACKENDLESS_RESET_COUNTER",
    /**
     * Tool to set a backendless counter to a specific value conditionally. use when you need to ensure the counter only updates if it currently matches an expected value.
     */
    SET_COUNTER_VALUE: "BACKENDLESS_SET_COUNTER_VALUE",
    /**
     * Tool to update schedule or code of an existing timer. use when you need to modify a timer's configuration after retrieval.
     */
    UPDATE_TIMER: "BACKENDLESS_UPDATE_TIMER",
    /**
     * Tool to change the password for the current user. use when you need to securely update a user's password after login. example prompt: "change my password to n3wp@ssw0rd!".
     */
    USER_CHANGE_PASSWORD: "BACKENDLESS_USER_CHANGE_PASSWORD",
    /**
     * Tool to delete a user by user id. use when removing a user account after confirming permissions.
     */
    USER_DELETE: "BACKENDLESS_USER_DELETE",
    /**
     * Tool to retrieve user information by id. use when you need to fetch details for a specific user after you have their objectid.
     */
    USER_FIND: "BACKENDLESS_USER_FIND",
    /**
     * Tool to grant a permission to a user on a specific data object. use when precise access rights must be assigned after verifying the table and object ids. example: "grant find permission to a user for a person record".
     */
    USER_GRANT_PERMISSION: "BACKENDLESS_USER_GRANT_PERMISSION",
    /**
     * Tool to log in a registered user with identity and password. use when you need to authenticate a user before making subsequent requests. example: "login alice@wonderland.com with password wonderland".
     */
    USER_LOGIN: "BACKENDLESS_USER_LOGIN",
    /**
     * Tool to log out the currently authenticated user. use when you need to terminate the user session after operations.
     */
    USER_LOGOUT: "BACKENDLESS_USER_LOGOUT",
    /**
     * Tool to initiate password recovery for a user. use when a user requests a password reset after forgetting their password. triggers an email with recovery instructions.
     */
    USER_PASSWORD_RECOVERY: "BACKENDLESS_USER_PASSWORD_RECOVERY",
    /**
     * Tool to register a new user with email and password. use when creating a user account or converting a guest account to a registered one after collecting credentials. example: register 'alice@wonderland.com' with password 'wonderland'.
     */
    USER_REGISTRATION: "BACKENDLESS_USER_REGISTRATION",
    /**
     * Tool to revoke a permission from a specified user or role on a data table. use when you need to deny a previously granted data-table operation for a user or role in cloudcode after confirming the target.
     */
    USER_REVOKE_PERMISSION: "BACKENDLESS_USER_REVOKE_PERMISSION",
    /**
     * Tool to update properties of an existing backendless user. use when you need to modify user profile fields after login. example: update phonenumber to "5551212".
     */
    USER_UPDATE: "BACKENDLESS_USER_UPDATE",
    /**
     * Tool to validate a user session token. use after obtaining a token from login to confirm the session is active.
     */
    VALIDATE_USER_TOKEN: "BACKENDLESS_VALIDATE_USER_TOKEN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BACKENDLESS".
 */
export type BACKENDLESS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BACKENDLESS".
 */
export type BACKENDLESS_TRIGGER_EVENTS = {}
