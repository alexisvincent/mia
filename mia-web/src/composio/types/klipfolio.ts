// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of KLIPFOLIO's KLIPFOLIO_APPEND_DATA_TO_DATA_SOURCE tool input.
 */
type KLIPFOLIO_APPEND_DATA_TO_DATA_SOURCE_INPUT = {
  /**
   * Data
   * @description The plain-text or CSV data to append to the data source
   */
  data?: string;
  /**
   * Data Source Id
   * @description The ID of the data source to append data to
   */
  data_source_id?: string;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_APPEND_DATA_TO_DATA_SOURCE tool output.
 */
type KLIPFOLIO_APPEND_DATA_TO_DATA_SOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the data was successfully appended to the data source
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
 * Type of KLIPFOLIO's KLIPFOLIO_CREATE_DATA_SOURCE tool input.
 */
type KLIPFOLIO_CREATE_DATA_SOURCE_INPUT = {
  /**
   * Additional Properties
   * @description Additional properties specific to the connector type
   * @default null
   */
  additional_properties: {
      [key: string]: unknown;
  } | null;
  /**
   * Connector
   * @description The connector type (e.g., simple_rest, google_analytics, etc.)
   */
  connector?: string;
  /**
   * Description
   * @description A description of the data source
   */
  description?: string;
  /**
   * Endpoint Url
   * @description The URL endpoint for the data source
   */
  endpoint_url?: string;
  /**
   * Format
   * @description The format of the data source (e.g., csv, json, xml)
   */
  format?: string;
  /**
   * Method
   * @description The HTTP method to use for the data source
   * @default GET
   */
  method: string | null;
  /**
   * Name
   * @description The name of the data source
   */
  name?: string;
  /**
   * Refresh Interval
   * @description The refresh interval in seconds
   * @default 1800
   */
  refresh_interval: number;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_CREATE_DATA_SOURCE tool output.
 */
type KLIPFOLIO_CREATE_DATA_SOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Format
       * @description The format of the created data source
       */
      format: string;
      /**
       * Id
       * @description The ID of the created data source
       */
      id: string;
      /**
       * Name
       * @description The name of the created data source
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
 * Type of KLIPFOLIO's KLIPFOLIO_CREATE_TAB tool input.
 */
type KLIPFOLIO_CREATE_TAB_INPUT = {
  /**
   * Client Id
   * @description Optional client ID to associate the dashboard with a specific client.
   * @default null
   */
  client_id: string | null;
  /**
   * Description
   * @description A brief description of the dashboard/tab.
   */
  description?: string;
  /**
   * Name
   * @description The name of the new dashboard/tab.
   */
  name?: string;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_CREATE_TAB tool output.
 */
type KLIPFOLIO_CREATE_TAB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Metadata about the response including status and location of the created tab.
       */
      meta: {
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
 * Type of KLIPFOLIO's KLIPFOLIO_DELETE_DATA_SOURCE tool input.
 */
type KLIPFOLIO_DELETE_DATA_SOURCE_INPUT = {
  /**
   * Datasource Id
   * @description The unique identifier of the data source to be deleted.
   */
  datasource_id?: string;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_DELETE_DATA_SOURCE tool output.
 */
type KLIPFOLIO_DELETE_DATA_SOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the data source was successfully deleted.
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
 * Type of KLIPFOLIO's KLIPFOLIO_GET_DASHBOARD tool input.
 */
type KLIPFOLIO_GET_DASHBOARD_INPUT = {
  /**
   * Dashboard Id
   * @description The unique identifier of the dashboard to retrieve.
   */
  dashboard_id?: string;
  /**
   * Include Associations
   * @description Include associations in the listing (klip_instances, share_rights).
   * @default false
   */
  include_associations: boolean | null;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_GET_DASHBOARD tool output.
 */
type KLIPFOLIO_GET_DASHBOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Company associated with the dashboard
       * @default null
       */
      company: string | null;
      /**
       * Created By
       * @description ID of the user who created the dashboard
       * @default null
       */
      created_by: string | null;
      /**
       * Description
       * @description Description of the dashboard
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the dashboard
       */
      id: string;
      /**
       * Last Updated
       * @description Timestamp of the last update
       * @default null
       */
      last_updated: string | null;
      /**
       * Name
       * @description Name of the dashboard
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
 * Type of KLIPFOLIO's KLIPFOLIO_GET_DATA_SOURCE_INSTANCE tool input.
 */
type KLIPFOLIO_GET_DATA_SOURCE_INSTANCE_INPUT = {
  /**
   * Instance Id
   * @description The unique identifier of the data source instance to retrieve details for
   */
  instance_id?: string;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_GET_DATA_SOURCE_INSTANCE tool output.
 */
type KLIPFOLIO_GET_DATA_SOURCE_INSTANCE_OUTPUT = {
  /**
   * Data
   * @description The data source instance details or CSV content
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
   * Format
   * @description The format of the data (json or csv)
   * @default json
   */
  format: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Successfull
   * @description Whether the request was successful
   * @default true
   */
  successfull: boolean;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_GET_KLIPS tool input.
 */
type KLIPFOLIO_GET_KLIPS_INPUT = {
  /**
   * Limit
   * @description Maximum number of results to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before starting to return data
   * @default null
   */
  offset: number | null;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_GET_KLIPS tool output.
 */
type KLIPFOLIO_GET_KLIPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Klips
       * @description List of Klips accessible to the authenticated user
       */
      klips: {
          /**
           * Description
           * @description Description of the Klip
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the Klip
           */
          id: string;
          /**
           * Name
           * @description Name of the Klip
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
 * Type of KLIPFOLIO's KLIPFOLIO_GET_PROFILE tool input.
 */
type KLIPFOLIO_GET_PROFILE_INPUT = {
  /**
   * Include Groups
   * @description Include the user's groups in the response
   * @default true
   */
  include_groups: boolean | null;
  /**
   * Include Roles
   * @description Include the user's roles in the response
   * @default true
   */
  include_roles: boolean | null;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_GET_PROFILE tool output.
 */
type KLIPFOLIO_GET_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description The company name of the user
       * @default null
       */
      company: string | null;
      /**
       * Date Created
       * @description The timestamp when the user account was created
       * @default null
       */
      date_created: string | null;
      /**
       * Date Last Login
       * @description The timestamp of the user's last login
       * @default null
       */
      date_last_login: string | null;
      /**
       * Email
       * @description The email address of the user
       */
      email: string;
      /**
       * First Name
       * @description The first name of the user
       */
      first_name: string;
      /**
       * Groups
       * @description List of groups the user belongs to
       * @default null
       */
      groups: {
          /**
           * Id
           * @description The unique identifier of the group
           */
          id: string;
          /**
           * Name
           * @description The name of the group
           */
          name: string;
      }[] | null;
      /**
       * Id
       * @description The unique identifier of the user
       */
      id: string;
      /**
       * Is Locked Out
       * @description Whether the user account is locked out
       * @default null
       */
      is_locked_out: boolean | null;
      /**
       * Last Name
       * @description The last name of the user
       */
      last_name: string;
      /**
       * Properties
       * @description Additional properties associated with the user
       * @default null
       */
      properties: {
          [key: string]: unknown;
      } | null;
      /**
       * Roles
       * @description List of role IDs assigned to the user
       * @default null
       */
      roles: string[] | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_LIST_DATA_SOURCES tool input.
 */
type KLIPFOLIO_LIST_DATA_SOURCES_INPUT = {
  /**
   * Client Id
   * @description ID of the client to retrieve data sources for
   * @default null
   */
  client_id: string | null;
  /**
   * Limit
   * @description Maximum number of data sources to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of data sources to skip
   * @default null
   */
  offset: number | null;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_LIST_DATA_SOURCES tool output.
 */
type KLIPFOLIO_LIST_DATA_SOURCES_OUTPUT = {
  /**
   * Data
   * @description Response data containing list of data sources
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
   * Meta
   * @description Metadata about the response
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_REFRESH_MULTIPLE_DATA_SOURCES tool input.
 */
type KLIPFOLIO_REFRESH_MULTIPLE_DATA_SOURCES_INPUT = {
  /**
   * Datasource Ids
   * @description List of data source IDs to refresh
   */
  datasource_ids?: string[];
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_REFRESH_MULTIPLE_DATA_SOURCES tool output.
 */
type KLIPFOLIO_REFRESH_MULTIPLE_DATA_SOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Op Requested
       * @description The operation that was requested (should be 'refresh')
       */
      op_requested: string;
      /**
       * Queue Status
       * @description Status code of the queue operation
       */
      queue_status: number;
      /**
       * Success
       * @description Whether the refresh request was successful
       */
      success: boolean;
      /**
       * Total Datasources Requested
       * @description Total number of data sources requested for refresh
       */
      total_datasources_requested: number;
      /**
       * Total Instances Queued
       * @description Total number of instances successfully queued for refresh
       */
      total_instances_queued: number;
      /**
       * Total Instances Requested
       * @description Total number of data source instances requested for refresh
       */
      total_instances_requested: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_UPDATE_DATA_SOURCE tool input.
 */
type KLIPFOLIO_UPDATE_DATA_SOURCE_INPUT = {
  /**
   * Data
   * @description The plain-text or CSV data to replace the existing data in the data source
   */
  data?: string;
  /**
   * Data Source Id
   * @description The ID of the data source to update
   */
  data_source_id?: string;
};

/**
 * Type of KLIPFOLIO's KLIPFOLIO_UPDATE_DATA_SOURCE tool output.
 */
type KLIPFOLIO_UPDATE_DATA_SOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the data was successfully updated in the data source
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
 * Type map of all available tool input types for toolkit "KLIPFOLIO".
 */
export type KLIPFOLIO_TOOL_INPUTS = {
  APPEND_DATA_TO_DATA_SOURCE: KLIPFOLIO_APPEND_DATA_TO_DATA_SOURCE_INPUT
  CREATE_DATA_SOURCE: KLIPFOLIO_CREATE_DATA_SOURCE_INPUT
  CREATE_TAB: KLIPFOLIO_CREATE_TAB_INPUT
  DELETE_DATA_SOURCE: KLIPFOLIO_DELETE_DATA_SOURCE_INPUT
  GET_DASHBOARD: KLIPFOLIO_GET_DASHBOARD_INPUT
  GET_DATA_SOURCE_INSTANCE: KLIPFOLIO_GET_DATA_SOURCE_INSTANCE_INPUT
  GET_KLIPS: KLIPFOLIO_GET_KLIPS_INPUT
  GET_PROFILE: KLIPFOLIO_GET_PROFILE_INPUT
  LIST_DATA_SOURCES: KLIPFOLIO_LIST_DATA_SOURCES_INPUT
  REFRESH_MULTIPLE_DATA_SOURCES: KLIPFOLIO_REFRESH_MULTIPLE_DATA_SOURCES_INPUT
  UPDATE_DATA_SOURCE: KLIPFOLIO_UPDATE_DATA_SOURCE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "KLIPFOLIO".
 */
export type KLIPFOLIO_TOOL_OUTPUTS = {
  APPEND_DATA_TO_DATA_SOURCE: KLIPFOLIO_APPEND_DATA_TO_DATA_SOURCE_OUTPUT
  CREATE_DATA_SOURCE: KLIPFOLIO_CREATE_DATA_SOURCE_OUTPUT
  CREATE_TAB: KLIPFOLIO_CREATE_TAB_OUTPUT
  DELETE_DATA_SOURCE: KLIPFOLIO_DELETE_DATA_SOURCE_OUTPUT
  GET_DASHBOARD: KLIPFOLIO_GET_DASHBOARD_OUTPUT
  GET_DATA_SOURCE_INSTANCE: KLIPFOLIO_GET_DATA_SOURCE_INSTANCE_OUTPUT
  GET_KLIPS: KLIPFOLIO_GET_KLIPS_OUTPUT
  GET_PROFILE: KLIPFOLIO_GET_PROFILE_OUTPUT
  LIST_DATA_SOURCES: KLIPFOLIO_LIST_DATA_SOURCES_OUTPUT
  REFRESH_MULTIPLE_DATA_SOURCES: KLIPFOLIO_REFRESH_MULTIPLE_DATA_SOURCES_OUTPUT
  UPDATE_DATA_SOURCE: KLIPFOLIO_UPDATE_DATA_SOURCE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's KLIPFOLIO toolkit.
 */
export const KLIPFOLIO = {
  slug: "klipfolio",
  tools: {
    /**
     * This tool appends plain-text or csv data to an existing data source in klipfolio. it requires two parameters: 'data' which contains the data in plain-text or csv format, and 'data source id' which specifies the target data source.
     */
    APPEND_DATA_TO_DATA_SOURCE: "KLIPFOLIO_APPEND_DATA_TO_DATA_SOURCE",
    /**
     * This tool creates a new data source in klipfolio. it uses the post /datasources endpoint to add a data source with required parameters (name, format, connector, endpointurl) and optional parameters (description, refreshinterval, method, additionalproperties).
     */
    CREATE_DATA_SOURCE: "KLIPFOLIO_CREATE_DATA_SOURCE",
    /**
     * This tool creates a new tab (dashboard) in klipfolio. a tab serves as a container for organizing and displaying klips (data visualizations) in a meaningful way. the tool allows users to set up a new dashboard with specific properties and configurations.
     */
    CREATE_TAB: "KLIPFOLIO_CREATE_TAB",
    /**
     * This tool permanently removes a specified data source from the klipfolio account. this operation is destructive and cannot be undone. the data source must not be currently in use, and proper permissions are required.
     */
    DELETE_DATA_SOURCE: "KLIPFOLIO_DELETE_DATA_SOURCE",
    /**
     * This tool retrieves detailed information about a specific dashboard (formerly known as tab) in klipfolio. it allows users to obtain comprehensive information including properties, settings, and metadata of the dashboard.
     */
    GET_DASHBOARD: "KLIPFOLIO_GET_DASHBOARD",
    /**
     * This tool retrieves detailed information about a specific data source instance in klipfolio. it can return data in either json or csv format depending on the data source type.
     */
    GET_DATA_SOURCE_INSTANCE: "KLIPFOLIO_GET_DATA_SOURCE_INSTANCE",
    /**
     * This tool retrieves a list of all klips accessible to the authenticated user. klips are visualization components in klipfolio that display data in various formats like charts, tables, or metrics.
     */
    GET_KLIPS: "KLIPFOLIO_GET_KLIPS",
    /**
     * This tool is used to retrieve the authenticated user's profile information and test the authentication status. it verifies api connectivity and access permissions by returning profile details such as user id, username, email, company information, role and permissions, and account status.
     */
    GET_PROFILE: "KLIPFOLIO_GET_PROFILE",
    /**
     * This tool retrieves a list of all data sources associated with an authenticated klipfolio account. it supports optional query parameters for pagination (limit and offset) and filtering by client id. the response includes details for each data source such as id, name, description, format, connector type, refresh interval, and timestamps.
     */
    LIST_DATA_SOURCES: "KLIPFOLIO_LIST_DATA_SOURCES",
    /**
     * This tool allows users to refresh multiple data sources in klipfolio simultaneously. it queues the specified data sources for refresh, updating their data from their respective sources. the tool automatically refreshes all available data sources associated with the authenticated account if no specific data source ids are provided.
     */
    REFRESH_MULTIPLE_DATA_SOURCES: "KLIPFOLIO_REFRESH_MULTIPLE_DATA_SOURCES",
    /**
     * This tool allows you to replace/update the data in an existing klipfolio data source. it completely replaces the existing data with new data in the specified data source. the tool requires new data (in plain-text or csv format) to be provided and updates the data source accordingly.
     */
    UPDATE_DATA_SOURCE: "KLIPFOLIO_UPDATE_DATA_SOURCE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "KLIPFOLIO".
 */
export type KLIPFOLIO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "KLIPFOLIO".
 */
export type KLIPFOLIO_TRIGGER_EVENTS = {}
