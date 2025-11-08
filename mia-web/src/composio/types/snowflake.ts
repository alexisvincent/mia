// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_DESCRIBE_TABLE tool input.
 */
type SNOWFLAKE_BASIC_DESCRIBE_TABLE_INPUT = {
  /**
   * Database
   * @description The name of the Snowflake database containing the table.
   */
  database?: string;
  /**
   * Schema Name
   * @description The name of the schema within the database that contains the table.
   */
  schema_name?: string;
  /**
   * Table Name
   * @description The name of the table to describe.
   */
  table_name?: string;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_DESCRIBE_TABLE tool output.
 */
type SNOWFLAKE_BASIC_DESCRIBE_TABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Columns
       * @description List of objects, each detailing a column's properties in the specified table.
       * @default []
       */
      columns: {
          /**
           * Data Type
           * @description Data type of the column in Snowflake (e.g., VARCHAR, NUMBER, DATE).
           */
          dataType: string;
          /**
           * Default Value
           * @description Default value of the column as a string, or `None` if not defined.
           */
          defaultValue?: string;
          /**
           * Kind
           * @description Kind of the column (e.g., 'COLUMN', 'GEOGRAPHY_COLUMN').
           */
          kind: string;
          /**
           * Name
           * @description Name of the column.
           */
          name: string;
          /**
           * Nullable
           * @description True if the column can store NULL values.
           */
          nullable: boolean;
          /**
           * Primary Key
           * @description True if the column is part of the table's primary key.
           * @default false
           */
          primaryKey: boolean;
          /**
           * Unique Key
           * @description True if the column is part of a unique key constraint.
           * @default false
           */
          uniqueKey: boolean;
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
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_EXPLORE_COLUMNS tool input.
 */
type SNOWFLAKE_BASIC_EXPLORE_COLUMNS_INPUT = {
  /**
   * Column Names
   * @description A list of specific column names to explore. If left empty, all columns in the table will be explored.
   * @default []
   */
  column_names: string[];
  /**
   * Database
   * @description The name of the Snowflake database.
   */
  database?: string;
  /**
   * Limit
   * @description The maximum number of distinct values to return for each specified column.
   * @default 10
   */
  limit: number;
  /**
   * Schema Name
   * @description The name of the schema within the specified database.
   */
  schema_name?: string;
  /**
   * Table Name
   * @description The name of the table within the specified schema.
   */
  table_name?: string;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_EXPLORE_COLUMNS tool output.
 */
type SNOWFLAKE_BASIC_EXPLORE_COLUMNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Values
       * @description A dictionary mapping column names to a list of distinct values found in that column.
       */
      values: {
          [key: string]: (string | null)[];
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
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_RUN_QUERY tool input.
 */
type SNOWFLAKE_BASIC_RUN_QUERY_INPUT = {
  /**
   * Database
   * @description Name of the Snowflake database.
   */
  database?: string;
  /**
   * Query
   * @description SQL query to execute; runs within the context of the specified database and schema.
   */
  query?: string;
  /**
   * Schema Name
   * @description Name of the schema within the specified database.
   */
  schema_name?: string;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_RUN_QUERY tool output.
 */
type SNOWFLAKE_BASIC_RUN_QUERY_OUTPUT = {
  /**
   * Data
   * @description A list of dictionaries, where each dictionary represents a row returned by the query. Keys in the dictionaries are column names. For SELECT statements, this contains the query results. For DML/DDL statements or queries that do not return a rowset, this will typically be an empty list.
   * @default {}
   */
  data: {
      [key: string]: unknown;
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
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_SHOW_DATABASES tool input.
 */
type SNOWFLAKE_BASIC_SHOW_DATABASES_INPUT = object;

/**
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_SHOW_DATABASES tool output.
 */
type SNOWFLAKE_BASIC_SHOW_DATABASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Databases
       * @description A list of databases available in the Snowflake account.
       * @default []
       */
      databases: {
          /**
           * Comment
           * @description Any comments associated with the database.
           * @default
           */
          comment: string;
          /**
           * Created On
           * @description When the database was created.
           */
          created_on: string;
          /**
           * Is Current
           * @description Whether this is the current database (Y/N).
           */
          is_current: string;
          /**
           * Is Default
           * @description Whether this is the default database (Y/N).
           */
          is_default: string;
          /**
           * Name
           * @description The name of the database.
           */
          name: string;
          /**
           * Options
           * @description Database options.
           * @default
           */
          options: string;
          /**
           * Origin
           * @description The origin of the database (e.g., 'SNOWFLAKE').
           */
          origin: string;
          /**
           * Owner
           * @description The owner/role that owns this database.
           */
          owner: string;
          /**
           * Retention Time
           * @description Data retention time for the database.
           * @default
           */
          retention_time: string;
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
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_SHOW_SCHEMAS tool input.
 */
type SNOWFLAKE_BASIC_SHOW_SCHEMAS_INPUT = {
  /**
   * Database
   * @description The name of the database for which to list schemas.
   */
  database?: string;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_SHOW_SCHEMAS tool output.
 */
type SNOWFLAKE_BASIC_SHOW_SCHEMAS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Schemas
       * @description A list of schemas found in the specified database, including their metadata.
       * @default []
       */
      schemas: {
          /**
           * Comment
           * @description Any comments associated with the schema.
           * @default
           */
          comment: string;
          /**
           * Created On
           * @description When the schema was created.
           */
          created_on: string;
          /**
           * Database Name
           * @description The name of the database containing this schema.
           */
          database_name: string;
          /**
           * Is Current
           * @description Whether this is the current schema (Y/N).
           */
          is_current: string;
          /**
           * Is Default
           * @description Whether this is the default schema (Y/N).
           */
          is_default: string;
          /**
           * Name
           * @description The name of the schema.
           */
          name: string;
          /**
           * Options
           * @description Schema options.
           * @default
           */
          options: string;
          /**
           * Owner
           * @description The owner/role that owns this schema.
           */
          owner: string;
          /**
           * Retention Time
           * @description Data retention time for the schema.
           * @default
           */
          retention_time: string;
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
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_SHOW_TABLES tool input.
 */
type SNOWFLAKE_BASIC_SHOW_TABLES_INPUT = {
  /**
   * Database
   * @description The name of the database containing the schema from which to list tables.
   */
  database?: string;
  /**
   * Schema Name
   * @description The name of the schema within the specified database for which to list tables.
   */
  schema_name?: string;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_BASIC_SHOW_TABLES tool output.
 */
type SNOWFLAKE_BASIC_SHOW_TABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tables
       * @description A list of tables found in the specified schema, including their names, row counts, and sizes in bytes.
       * @default []
       */
      tables: {
          /**
           * Bytes
           * @description The size of the table in bytes.
           */
          bytes: number;
          /**
           * Name
           * @description The name of the table.
           */
          name: string;
          /**
           * Row Count
           * @description The total number of rows in the table.
           */
          rowCount: number;
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
 * Type of SNOWFLAKE's SNOWFLAKE_CANCEL_STATEMENT_EXECUTION tool input.
 */
type SNOWFLAKE_CANCEL_STATEMENT_EXECUTION_INPUT = {
  /**
   * Request Id
   * @description Unique ID (a UUID) of the API request. This is an optional parameter that can be used to track the request.
   * @default null
   */
  request_id: string | null;
  /**
   * Statement Handle
   * @description The handle of the statement to be cancelled. This can be obtained from the response of the execute_statement action.
   */
  statementHandle?: string;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_CANCEL_STATEMENT_EXECUTION tool output.
 */
type SNOWFLAKE_CANCEL_STATEMENT_EXECUTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description The response code from the Snowflake API.
       */
      code: string;
      /**
       * Message
       * @description A message indicating the result of the cancellation request.
       */
      message: string;
      /**
       * Sql State
       * @description The SQL state of the statement after the cancellation request.
       */
      sqlState: string;
      /**
       * Statement Handle
       * @description The handle of the statement that was cancelled.
       */
      statementHandle: string;
      /**
       * Statement Status Url
       * @description The URL to check the status of the statement.
       */
      statementStatusUrl: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_EXECUTE_SQL tool input.
 */
type SNOWFLAKE_EXECUTE_SQL_INPUT = {
  /**
   * Bindings
   * @description A dictionary of bindings to be used in the SQL statement.
   * @default null
   */
  bindings: {
      [key: string]: unknown;
  } | null;
  /**
   * Database
   * @description The database to be used for the query.
   * @default null
   */
  database: string | null;
  /**
   * Parameters
   * @description A dictionary of parameters to be used in the SQL statement.
   * @default null
   */
  parameters: {
      [key: string]: unknown;
  } | null;
  /**
   * Role
   * @description The role to be used for the query.
   * @default null
   */
  role: string | null;
  /**
   * Schema Name
   * @description The schema to be used for the query.
   * @default null
   */
  schema_name: string | null;
  /**
   * Statement
   * @description The SQL statement to be executed.
   */
  statement?: string;
  /**
   * Timeout
   * @description The timeout for the query in seconds.
   * @default null
   */
  timeout: number | null;
  /**
   * Warehouse
   * @description The warehouse to be used for the query.
   * @default null
   */
  warehouse: string | null;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_EXECUTE_SQL tool output.
 */
type SNOWFLAKE_EXECUTE_SQL_OUTPUT = {
  /**
   * Data
   * @description The result set of the executed SQL statement.
   */
  data?: (string | number | boolean | null)[][];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_FETCH_CATALOG_INTEGRATION tool input.
 */
type SNOWFLAKE_FETCH_CATALOG_INTEGRATION_INPUT = {
  /**
   * Name
   * @description The name of the catalog integration to fetch.
   */
  name?: string;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_FETCH_CATALOG_INTEGRATION tool output.
 */
type SNOWFLAKE_FETCH_CATALOG_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Catalog
       * @description The catalog details.
       * @default null
       */
      catalog: {
          /**
           * Catalog Source
           * @description The source of the catalog.
           * @default null
           */
          catalog_source: string | null;
      } | null;
      /**
       * Category
       * @description The category of the catalog integration.
       * @default null
       */
      category: string | null;
      /**
       * Comment
       * @description A comment about the catalog integration.
       * @default null
       */
      comment: string | null;
      /**
       * Created On
       * @description The timestamp when the catalog integration was created.
       * @default null
       */
      created_on: string | null;
      /**
       * Enabled
       * @description Whether the catalog integration is enabled.
       * @default null
       */
      enabled: boolean | null;
      /**
       * Name
       * @description The name of the catalog integration.
       * @default null
       */
      name: string | null;
      /**
       * Table Format
       * @description The table format.
       * @default null
       */
      table_format: string | null;
      /**
       * Type
       * @description The type of the catalog integration.
       * @default null
       */
      type: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_GET_ACTIVE_SCHEDULED_MAINTENANCES tool input.
 */
type SNOWFLAKE_GET_ACTIVE_SCHEDULED_MAINTENANCES_INPUT = object;

/**
 * Type of SNOWFLAKE's SNOWFLAKE_GET_ACTIVE_SCHEDULED_MAINTENANCES tool output.
 */
type SNOWFLAKE_GET_ACTIVE_SCHEDULED_MAINTENANCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Scheduled Maintenances
       * @description A list of active scheduled maintenances.
       */
      scheduled_maintenances: {
          /**
           * Created At
           * @description The creation time of the maintenance.
           */
          created_at: string;
          /**
           * Id
           * @description The unique identifier of the maintenance.
           */
          id: string;
          /**
           * Impact
           * @description The impact level of the maintenance.
           */
          impact: string;
          /**
           * Incident Updates
           * @description A list of updates related to the maintenance.
           */
          incident_updates: {
              /**
               * Body
               * @description The body of the incident update.
               */
              body: string;
              /**
               * Created At
               * @description The creation time of the incident update.
               */
              created_at: string;
              /**
               * Display At
               * @description The display time of the incident update.
               */
              display_at: string;
              /**
               * Id
               * @description The unique identifier of the incident update.
               */
              id: string;
              /**
               * Incident Id
               * @description The unique identifier of the incident.
               */
              incident_id: string;
              /**
               * Status
               * @description The status of the incident update.
               */
              status: string;
              /**
               * Updated At
               * @description The last update time of the incident update.
               */
              updated_at: string;
          }[];
          /**
           * Name
           * @description The name of the maintenance.
           */
          name: string;
          /**
           * Scheduled For
           * @description The start time of the maintenance.
           */
          scheduled_for: string;
          /**
           * Scheduled Until
           * @description The end time of the maintenance.
           */
          scheduled_until: string;
          /**
           * Status
           * @description The current status of the maintenance.
           */
          status: string;
          /**
           * Updated At
           * @description The last update time of the maintenance.
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
 * Type of SNOWFLAKE's SNOWFLAKE_GET_ALL_SCHEDULED_MAINTENANCES tool input.
 */
type SNOWFLAKE_GET_ALL_SCHEDULED_MAINTENANCES_INPUT = object;

/**
 * Type of SNOWFLAKE's SNOWFLAKE_GET_ALL_SCHEDULED_MAINTENANCES tool output.
 */
type SNOWFLAKE_GET_ALL_SCHEDULED_MAINTENANCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description The page information.
       */
      page: {
          /**
           * Id
           * @description The ID of the page.
           */
          id: string;
          /**
           * Name
           * @description The name of the page.
           */
          name: string;
          /**
           * Updated At
           * @description The timestamp of the last update.
           */
          updated_at: string;
          /**
           * Url
           * @description The URL of the page.
           */
          url: string;
      };
      /**
       * Scheduled Maintenances
       * @description A list of scheduled maintenances.
       */
      scheduled_maintenances: {
          /**
           * Created At
           * @description The timestamp of the scheduled maintenance creation.
           */
          created_at: string;
          /**
           * Id
           * @description The ID of the scheduled maintenance.
           */
          id: string;
          /**
           * Impact
           * @description The impact of the scheduled maintenance.
           */
          impact: string;
          /**
           * Incident Updates
           * @description A list of incident updates.
           */
          incident_updates: {
              /**
               * Body
               * @description The body of the incident update.
               */
              body: string;
              /**
               * Created At
               * @description The timestamp of the incident update creation.
               */
              created_at: string;
              /**
               * Display At
               * @description The timestamp to display the incident update.
               */
              display_at: string;
              /**
               * Id
               * @description The ID of the incident update.
               */
              id: string;
              /**
               * Incident Id
               * @description The ID of the incident.
               */
              incident_id: string;
              /**
               * Status
               * @description The status of the incident update.
               */
              status: string;
              /**
               * Updated At
               * @description The timestamp of the last update.
               */
              updated_at: string;
          }[];
          /**
           * Monitoring At
           * @description The timestamp of the monitoring start.
           * @default null
           */
          monitoring_at: string | null;
          /**
           * Name
           * @description The name of the scheduled maintenance.
           */
          name: string;
          /**
           * Page Id
           * @description The ID of the page.
           */
          page_id: string;
          /**
           * Resolved At
           * @description The timestamp of the resolution.
           * @default null
           */
          resolved_at: string | null;
          /**
           * Scheduled For
           * @description The timestamp of the scheduled maintenance.
           */
          scheduled_for: string;
          /**
           * Scheduled Until
           * @description The timestamp of the scheduled maintenance end.
           */
          scheduled_until: string;
          /**
           * Shortlink
           * @description The shortlink of the scheduled maintenance.
           */
          shortlink: string;
          /**
           * Status
           * @description The status of the scheduled maintenance.
           */
          status: string;
          /**
           * Updated At
           * @description The timestamp of the last update.
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
 * Type of SNOWFLAKE's SNOWFLAKE_GET_COMPONENT_STATUS tool input.
 */
type SNOWFLAKE_GET_COMPONENT_STATUS_INPUT = {
  /**
   * Limit
   * @description Limit number of components returned.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_GET_COMPONENT_STATUS tool output.
 */
type SNOWFLAKE_GET_COMPONENT_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Components
       * @description A list of components and their current status.
       */
      components: {
          /**
           * Created At
           * @description The timestamp when the component was created.
           */
          created_at: string;
          /**
           * Description
           * @description A description of the component.
           * @default null
           */
          description: string | null;
          /**
           * Group
           * @description Indicates if the component is a group.
           */
          group: boolean;
          /**
           * Group Id
           * @description The unique identifier of the group the component belongs to.
           * @default null
           */
          group_id: string | null;
          /**
           * Id
           * @description The unique identifier of the component.
           */
          id: string;
          /**
           * Name
           * @description The name of the component.
           */
          name: string;
          /**
           * Only Show If Degraded
           * @description Indicates if the component should only be shown if it is degraded.
           */
          only_show_if_degraded: boolean;
          /**
           * Page Id
           * @description The unique identifier of the page the component belongs to.
           */
          page_id: string;
          /**
           * Position
           * @description The position of the component.
           */
          position: number;
          /**
           * Showcase
           * @description Indicates if the component is showcased.
           */
          showcase: boolean;
          /**
           * Start Date
           * @description The start date of the component.
           * @default null
           */
          start_date: string | null;
          /**
           * Status
           * @description The current status of the component.
           */
          status: string;
          /**
           * Updated At
           * @description The timestamp when the component was last updated.
           */
          updated_at: string;
      }[];
      /**
       * Page
       * @description Information about the status page.
       */
      page: {
          /**
           * Id
           * @description The unique identifier of the page.
           */
          id: string;
          /**
           * Name
           * @description The name of the page.
           */
          name: string;
          /**
           * Updated At
           * @description The timestamp when the page was last updated.
           */
          updated_at: string;
          /**
           * Url
           * @description The URL of the page.
           */
          url: string;
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
 * Type of SNOWFLAKE's SNOWFLAKE_GET_STATUS_ROLLUP tool input.
 */
type SNOWFLAKE_GET_STATUS_ROLLUP_INPUT = object;

/**
 * Type of SNOWFLAKE's SNOWFLAKE_GET_STATUS_ROLLUP tool output.
 */
type SNOWFLAKE_GET_STATUS_ROLLUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Page */
      page: {
          /**
           * Id
           * @description The ID of the status page.
           */
          id: string;
          /**
           * Name
           * @description The name of the status page.
           */
          name: string;
          /**
           * Updated At
           * @description The timestamp of the last update.
           */
          updated_at: string;
          /**
           * Url
           * @description The URL of the status page.
           */
          url: string;
      };
      /** Status */
      status: {
          /**
           * Description
           * @description A human-readable description of the overall system status.
           */
          description: string;
          /**
           * Indicator
           * @description An indicator of the system status.
           */
          indicator: string;
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
 * Type of SNOWFLAKE's SNOWFLAKE_GET_STATUS_SUMMARY tool input.
 */
type SNOWFLAKE_GET_STATUS_SUMMARY_INPUT = object;

/**
 * Type of SNOWFLAKE's SNOWFLAKE_GET_STATUS_SUMMARY tool output.
 */
type SNOWFLAKE_GET_STATUS_SUMMARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Components
       * @description A list of components.
       * @default []
       */
      components: {
          /**
           * Created At
           * @description The timestamp of the component creation.
           */
          created_at?: string;
          /**
           * Description
           * @description The description of the component.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The ID of the component.
           */
          id?: string;
          /**
           * Name
           * @description The name of the component.
           */
          name?: string;
          /**
           * Page Id
           * @description The ID of the page the component belongs to.
           */
          page_id?: string;
          /**
           * Position
           * @description The position of the component.
           */
          position?: number;
          /**
           * Status
           * @description The status of the component.
           */
          status?: string;
          /**
           * Updated At
           * @description The timestamp of the last update.
           */
          updated_at?: string;
      }[];
      /**
       * Incidents
       * @description A list of incidents.
       * @default []
       */
      incidents: {
          /**
           * Created At
           * @description The timestamp of the incident creation.
           */
          created_at?: string;
          /**
           * Id
           * @description The ID of the incident.
           */
          id?: string;
          /**
           * Impact
           * @description The impact of the incident.
           */
          impact?: string;
          /**
           * Incident Updates
           * @description A list of incident updates.
           * @default []
           */
          incident_updates: {
              /**
               * Body
               * @description The body of the incident update.
               */
              body?: string;
              /**
               * Created At
               * @description The timestamp of the incident update creation.
               */
              created_at?: string;
              /**
               * Display At
               * @description The timestamp to display the incident update.
               */
              display_at?: string;
              /**
               * Id
               * @description The ID of the incident update.
               */
              id?: string;
              /**
               * Incident Id
               * @description The ID of the incident.
               */
              incident_id?: string;
              /**
               * Status
               * @description The status of the incident update.
               */
              status?: string;
              /**
               * Updated At
               * @description The timestamp of the last update.
               */
              updated_at?: string;
          }[];
          /**
           * Monitoring At
           * @description The timestamp of the monitoring start.
           * @default null
           */
          monitoring_at: string | null;
          /**
           * Name
           * @description The name of the incident.
           */
          name?: string;
          /**
           * Page Id
           * @description The ID of the page the incident belongs to.
           */
          page_id?: string;
          /**
           * Resolved At
           * @description The timestamp of the incident resolution.
           * @default null
           */
          resolved_at: string | null;
          /**
           * Shortlink
           * @description The shortlink of the incident.
           */
          shortlink?: string;
          /**
           * Status
           * @description The status of the incident.
           */
          status?: string;
          /**
           * Updated At
           * @description The timestamp of the last update.
           */
          updated_at?: string;
      }[];
      /**
       * Page
       * @description The page information.
       */
      page?: {
          /**
           * Id
           * @description The ID of the page.
           */
          id?: string;
          /**
           * Name
           * @description The name of the page.
           */
          name?: string;
          /**
           * Updated At
           * @description The timestamp of the last update.
           */
          updated_at?: string;
          /**
           * Url
           * @description The URL of the page.
           */
          url?: string;
      };
      /**
       * Scheduled Maintenances
       * @description A list of scheduled maintenances.
       * @default []
       */
      scheduled_maintenances: {
          /**
           * Created At
           * @description The timestamp of the scheduled maintenance creation.
           */
          created_at?: string;
          /**
           * Id
           * @description The ID of the scheduled maintenance.
           */
          id?: string;
          /**
           * Impact
           * @description The impact of the scheduled maintenance.
           */
          impact?: string;
          /**
           * Incident Updates
           * @description A list of incident updates.
           * @default []
           */
          incident_updates: {
              /**
               * Body
               * @description The body of the incident update.
               */
              body?: string;
              /**
               * Created At
               * @description The timestamp of the incident update creation.
               */
              created_at?: string;
              /**
               * Display At
               * @description The timestamp to display the incident update.
               */
              display_at?: string;
              /**
               * Id
               * @description The ID of the incident update.
               */
              id?: string;
              /**
               * Incident Id
               * @description The ID of the incident.
               */
              incident_id?: string;
              /**
               * Status
               * @description The status of the incident update.
               */
              status?: string;
              /**
               * Updated At
               * @description The timestamp of the last update.
               */
              updated_at?: string;
          }[];
          /**
           * Monitoring At
           * @description The timestamp of the monitoring start.
           * @default null
           */
          monitoring_at: string | null;
          /**
           * Name
           * @description The name of the scheduled maintenance.
           */
          name?: string;
          /**
           * Page Id
           * @description The ID of the page the scheduled maintenance belongs to.
           */
          page_id?: string;
          /**
           * Resolved At
           * @description The timestamp of the scheduled maintenance resolution.
           * @default null
           */
          resolved_at: string | null;
          /**
           * Scheduled For
           * @description The timestamp of the scheduled maintenance start.
           */
          scheduled_for?: string;
          /**
           * Scheduled Until
           * @description The timestamp of the scheduled maintenance end.
           */
          scheduled_until?: string;
          /**
           * Shortlink
           * @description The shortlink of the scheduled maintenance.
           */
          shortlink?: string;
          /**
           * Status
           * @description The status of the scheduled maintenance.
           */
          status?: string;
          /**
           * Updated At
           * @description The timestamp of the last update.
           */
          updated_at?: string;
      }[];
      /**
       * Status
       * @description The status information.
       */
      status?: {
          /**
           * Description
           * @description The description of the status.
           */
          description?: string;
          /**
           * Indicator
           * @description The indicator of the status.
           */
          indicator?: string;
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
 * Type of SNOWFLAKE's SNOWFLAKE_GET_UNRESOLVED_INCIDENTS tool input.
 */
type SNOWFLAKE_GET_UNRESOLVED_INCIDENTS_INPUT = object;

/**
 * Type of SNOWFLAKE's SNOWFLAKE_GET_UNRESOLVED_INCIDENTS tool output.
 */
type SNOWFLAKE_GET_UNRESOLVED_INCIDENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Incidents
       * @description A list of unresolved incidents.
       */
      incidents: {
          /**
           * Created At
           * @description The timestamp when the incident was created.
           */
          created_at: string;
          /**
           * Id
           * @description The ID of the incident.
           */
          id: string;
          /**
           * Impact
           * @description The impact of the incident.
           */
          impact: string;
          /**
           * Incident Updates
           * @description A list of incident updates.
           */
          incident_updates: {
              /**
               * Body
               * @description The body of the incident update.
               */
              body: string;
              /**
               * Created At
               * @description The timestamp when the incident update was created.
               */
              created_at: string;
              /**
               * Display At
               * @description The timestamp when the incident update should be displayed.
               */
              display_at: string;
              /**
               * Id
               * @description The ID of the incident update.
               */
              id: string;
              /**
               * Incident Id
               * @description The ID of the incident.
               */
              incident_id: string;
              /**
               * Status
               * @description The status of the incident update.
               */
              status: string;
              /**
               * Updated At
               * @description The timestamp when the incident update was last updated.
               */
              updated_at: string;
          }[];
          /**
           * Monitoring At
           * @description The timestamp when the incident monitoring started.
           * @default null
           */
          monitoring_at: string | null;
          /**
           * Name
           * @description The name of the incident.
           */
          name: string;
          /**
           * Page Id
           * @description The ID of the page.
           */
          page_id: string;
          /**
           * Resolved At
           * @description The timestamp when the incident was resolved.
           * @default null
           */
          resolved_at: string | null;
          /**
           * Shortlink
           * @description The shortlink for the incident.
           */
          shortlink: string;
          /**
           * Status
           * @description The status of the incident.
           */
          status: string;
          /**
           * Updated At
           * @description The timestamp when the incident was last updated.
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
 * Type of SNOWFLAKE's SNOWFLAKE_GET_UPCOMING_SCHEDULED_MAINTENANCES tool input.
 */
type SNOWFLAKE_GET_UPCOMING_SCHEDULED_MAINTENANCES_INPUT = {
  /**
   * Test Id
   * @description Test id for variation
   * @default null
   */
  test_id: string | null;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_GET_UPCOMING_SCHEDULED_MAINTENANCES tool output.
 */
type SNOWFLAKE_GET_UPCOMING_SCHEDULED_MAINTENANCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Scheduled Maintenances
       * @description A list of upcoming scheduled maintenances.
       */
      scheduled_maintenances: {
          /**
           * Created At
           * @description The timestamp when the scheduled maintenance was created.
           */
          created_at: string;
          /**
           * Id
           * @description The ID of the scheduled maintenance.
           */
          id: string;
          /**
           * Impact
           * @description The impact of the scheduled maintenance.
           */
          impact: string;
          /**
           * Incident Updates
           * @description A list of incident updates for the scheduled maintenance.
           */
          incident_updates: {
              /**
               * Body
               * @description The body of the incident update.
               */
              body: string;
              /**
               * Created At
               * @description The timestamp when the incident update was created.
               */
              created_at: string;
              /**
               * Display At
               * @description The timestamp when the incident update should be displayed.
               */
              display_at: string;
              /**
               * Id
               * @description The ID of the incident update.
               */
              id: string;
              /**
               * Incident Id
               * @description The ID of the incident.
               */
              incident_id: string;
              /**
               * Status
               * @description The status of the incident update.
               */
              status: string;
              /**
               * Updated At
               * @description The timestamp when the incident update was last updated.
               */
              updated_at: string;
          }[];
          /**
           * Monitoring At
           * @description The timestamp when the scheduled maintenance was last monitored.
           * @default null
           */
          monitoring_at: string | null;
          /**
           * Name
           * @description The name of the scheduled maintenance.
           */
          name: string;
          /**
           * Page Id
           * @description The ID of the page.
           */
          page_id: string;
          /**
           * Resolved At
           * @description The timestamp when the scheduled maintenance was resolved.
           * @default null
           */
          resolved_at: string | null;
          /**
           * Scheduled For
           * @description The timestamp when the maintenance is scheduled for.
           */
          scheduled_for: string;
          /**
           * Scheduled Until
           * @description The timestamp when the maintenance is scheduled until.
           */
          scheduled_until: string;
          /**
           * Shortlink
           * @description A short link to the scheduled maintenance.
           */
          shortlink: string;
          /**
           * Status
           * @description The status of the scheduled maintenance.
           */
          status: string;
          /**
           * Updated At
           * @description The timestamp when the scheduled maintenance was last updated.
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
 * Type of SNOWFLAKE's SNOWFLAKE_SHOW_DATABASES tool input.
 */
type SNOWFLAKE_SHOW_DATABASES_INPUT = {
  /**
   * From Name
   * @description Used with LIMIT for pagination. Returns results starting from databases whose names match this string.
   * @default null
   */
  from_name: string | null;
  /**
   * History
   * @description If true, includes dropped databases that are still within Time Travel retention period.
   * @default false
   */
  history: boolean | null;
  /**
   * Like Pattern
   * @description Filters results by database name using SQL wildcard pattern (% and _). Case-insensitive.
   * @default null
   */
  like_pattern: string | null;
  /**
   * Limit
   * @description Maximum number of rows to return. Cannot exceed 10000.
   * @default null
   */
  limit: number | null;
  /**
   * Role
   * @description Role to use when executing the statement.
   * @default null
   */
  role: string | null;
  /**
   * Starts With
   * @description Filters results by databases whose names start with this string. Case-sensitive.
   * @default null
   */
  starts_with: string | null;
  /**
   * Terse
   * @description If true, returns only a subset of output columns (created_on, name, kind, database_name, schema_name).
   * @default false
   */
  terse: boolean | null;
  /**
   * Timeout
   * @description Timeout in seconds for statement execution.
   * @default null
   */
  timeout: number | null;
  /**
   * Warehouse
   * @description Warehouse to use for the query (though SHOW DATABASES doesn't require a running warehouse).
   * @default null
   */
  warehouse: string | null;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_SHOW_DATABASES tool output.
 */
type SNOWFLAKE_SHOW_DATABASES_OUTPUT = {
  /**
   * Columns
   * @description Column names in the result set.
   * @default null
   */
  columns: string[] | null;
  /**
   * Data
   * @description List of databases with their metadata. Each row contains database information like name, creation date, owner, etc.
   */
  data?: (string | number | boolean | null)[][];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_SHOW_SCHEMAS tool input.
 */
type SNOWFLAKE_SHOW_SCHEMAS_INPUT = {
  /**
   * Database
   * @description Database context for the query.
   * @default null
   */
  database: string | null;
  /**
   * From Name
   * @description Used with LIMIT for pagination. Returns results starting from schemas whose names match this string.
   * @default null
   */
  from_name: string | null;
  /**
   * History
   * @description If true, includes dropped schemas that are still within Time Travel retention period.
   * @default false
   */
  history: boolean | null;
  /**
   * In Scope
   * @description Scope for the command. Options: 'ACCOUNT', 'DATABASE', or a specific database name.
   * @default null
   */
  in_scope: string | null;
  /**
   * Like Pattern
   * @description Filters results by schema name using SQL wildcard pattern (% and _). Case-insensitive.
   * @default null
   */
  like_pattern: string | null;
  /**
   * Limit
   * @description Maximum number of rows to return. Cannot exceed 10000.
   * @default null
   */
  limit: number | null;
  /**
   * Role
   * @description Role to use when executing the statement.
   * @default null
   */
  role: string | null;
  /**
   * Starts With
   * @description Filters results by schemas whose names start with this string. Case-sensitive.
   * @default null
   */
  starts_with: string | null;
  /**
   * Terse
   * @description If true, returns only a subset of output columns (created_on, name, kind, database_name, schema_name).
   * @default false
   */
  terse: boolean | null;
  /**
   * Timeout
   * @description Timeout in seconds for statement execution.
   * @default null
   */
  timeout: number | null;
  /**
   * Warehouse
   * @description Warehouse to use for the query (though SHOW SCHEMAS doesn't require a running warehouse).
   * @default null
   */
  warehouse: string | null;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_SHOW_SCHEMAS tool output.
 */
type SNOWFLAKE_SHOW_SCHEMAS_OUTPUT = {
  /**
   * Columns
   * @description Column names in the result set.
   * @default null
   */
  columns: string[] | null;
  /**
   * Data
   * @description List of schemas with their metadata. Each row contains schema information like name, creation date, owner, database, etc.
   */
  data?: (string | number | boolean | null)[][];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_SHOW_TABLES tool input.
 */
type SNOWFLAKE_SHOW_TABLES_INPUT = {
  /**
   * Database
   * @description Database context for the query.
   * @default null
   */
  database: string | null;
  /**
   * From Name
   * @description Used with LIMIT for pagination. Returns results starting from tables whose names match this string.
   * @default null
   */
  from_name: string | null;
  /**
   * History
   * @description If true, includes dropped tables that are still within Time Travel retention period.
   * @default false
   */
  history: boolean | null;
  /**
   * In Scope
   * @description Scope for the command. Options: 'ACCOUNT', 'DATABASE', 'SCHEMA', or specific database/schema names.
   * @default null
   */
  in_scope: string | null;
  /**
   * Like Pattern
   * @description Filters results by table name using SQL wildcard pattern (% and _). Case-insensitive.
   * @default null
   */
  like_pattern: string | null;
  /**
   * Limit
   * @description Maximum number of rows to return. Cannot exceed 10000.
   * @default null
   */
  limit: number | null;
  /**
   * Role
   * @description Role to use when executing the statement.
   * @default null
   */
  role: string | null;
  /**
   * Schema
   * @description Schema context for the query.
   * @default null
   */
  schema: string | null;
  /**
   * Starts With
   * @description Filters results by tables whose names start with this string. Case-sensitive.
   * @default null
   */
  starts_with: string | null;
  /**
   * Terse
   * @description If true, returns only a subset of output columns (created_on, name, kind, database_name, schema_name).
   * @default false
   */
  terse: boolean | null;
  /**
   * Timeout
   * @description Timeout in seconds for statement execution.
   * @default null
   */
  timeout: number | null;
  /**
   * Warehouse
   * @description Warehouse to use for the query (though SHOW TABLES doesn't require a running warehouse).
   * @default null
   */
  warehouse: string | null;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_SHOW_TABLES tool output.
 */
type SNOWFLAKE_SHOW_TABLES_OUTPUT = {
  /**
   * Columns
   * @description Column names in the result set.
   * @default null
   */
  columns: string[] | null;
  /**
   * Data
   * @description List of tables with their metadata. Each row contains table information like name, creation date, owner, database, schema, row count, size, etc.
   */
  data?: (string | number | boolean | null)[][];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_SNOWFLAKE_CHECK_STATEMENT_STATUS tool input.
 */
type SNOWFLAKE_SNOWFLAKE_CHECK_STATEMENT_STATUS_INPUT = {
  /**
   * Partition
   * @description The partition number to return. The size of each partition is determined by Snowflake.
   * @default null
   */
  partition: number | null;
  /**
   * Request Id
   * @description Unique ID of the API request.
   * @default null
   */
  requestId: number | null;
  /**
   * Statement Handle
   * @description The handle of the statement to be checked.
   */
  statementHandle?: string;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_SNOWFLAKE_CHECK_STATEMENT_STATUS tool output.
 */
type SNOWFLAKE_SNOWFLAKE_CHECK_STATEMENT_STATUS_OUTPUT = {
  /**
   * Code
   * @description The response code.
   */
  code?: string;
  /**
   * Data
   * @description The result set data.
   * @default null
   */
  data: (string | number | boolean | null)[][] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description The response message.
   */
  message?: string;
  /**
   * Statement Handle
   * @description Unique identifier for the statement being executed.
   */
  statementHandle?: string;
  /**
   * Statement Status Url
   * @description URL to get the statement status and result set.
   */
  statementStatusUrl?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_SUBMIT_SQL_STATEMENT tool input.
 */
type SNOWFLAKE_SUBMIT_SQL_STATEMENT_INPUT = {
  /**
   * Bindings
   * @description Values of bind variables in the SQL statement. When executing the statement, Snowflake replaces placeholders ( ? and :name) in the statement with these specified values.
   * @default null
   */
  bindings: {
      [key: string]: {
          [key: string]: string;
      };
  } | null;
  /**
   * Database
   * @description Database in which the statement should be executed. The value in this field is case-sensitive. If you omit this field, the SQL API uses the database from the value of the DEFAULT_NAMESPACE property of the user.
   * @default null
   */
  database: string | null;
  /**
   * Parameters
   * @description Session parameters that you want to set for this request.
   * @default null
   */
  parameters: {
      [key: string]: string | number | boolean;
  } | null;
  /**
   * Role
   * @description Role to use when executing the statement. The value in this field is case-sensitive. If you omit this field, the SQL API uses the value of the DEFAULT_ROLE property of the user.
   * @default null
   */
  role: string | null;
  /**
   * Schema
   * @description Schema in which the statement should be executed. The value in this field is case-sensitive. If you omit this field, the SQL API uses the schema from the value of the DEFAULT_NAMESPACE property of the user.
   * @default null
   */
  schema: string | null;
  /**
   * Statement
   * @description The SQL statement to execute.
   */
  statement?: string;
  /**
   * Timeout
   * @description Timeout in seconds for statement execution. If the execution of a statement takes longer than the specified timeout, the execution is automatically canceled. To set the timeout to the maximum value (604800 seconds), set timeout to 0. If this field is not set, the timeout specified by the STATEMENT_TIMEOUT_IN_SECONDS parameter is used.
   * @default 604800
   */
  timeout: number | null;
  /**
   * Warehouse
   * @description Warehouse to use when executing the statement. The value in this field is case-sensitive. If you omit this field, the SQL API uses the value of the DEFAULT_WAREHOUSE property of the user.
   * @default null
   */
  warehouse: string | null;
};

/**
 * Type of SNOWFLAKE's SNOWFLAKE_SUBMIT_SQL_STATEMENT tool output.
 */
type SNOWFLAKE_SUBMIT_SQL_STATEMENT_OUTPUT = {
  /**
   * Code
   * @description The response code.
   */
  code?: string;
  /**
   * Created On
   * @description Timestamp that specifies when the statement execution started.
   */
  createdOn?: number;
  /**
   * Data
   * @description The result set data.
   * @default null
   */
  data: (string | number | boolean | null)[][] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description A message describing the result of the operation.
   */
  message?: string;
  /**
   * ResultSetMetadata
   * @description An object that contains metadata about the result set returned.
   * @default null
   */
  resultSetMetaData: {
      /**
       * Format
       * @description Format of the data in the result set.
       */
      format: string;
      /**
       * Num Rows
       * @description The total number of rows of results.
       */
      numRows: number;
      /**
       * Row Type
       * @description Array of objects that describe the columns in the set of results.
       */
      rowType: {
          [key: string]: string | number | boolean | null;
      }[];
  } | null;
  /**
   * Sql State
   * @description The SQL state.
   */
  sqlState?: string;
  /**
   * Statement Handle
   * @description A unique identifier for the statement being executed.
   */
  statementHandle?: string;
  /**
   * Statement Handles
   * @description An array of unique identifiers for the statements being executed for this request.
   * @default null
   */
  statementHandles: string[] | null;
  /**
   * Statement Status Url
   * @description The URL to get the statement status and result set.
   */
  statementStatusUrl?: string;
  /**
   * Stats
   * @description An object that contains statistics about the number of rows affected by the DML operation.
   * @default null
   */
  stats: {
      /**
       * Num Duplicate Rows Updated
       * @description Number of duplicate rows that were updated.
       * @default null
       */
      numDuplicateRowsUpdated: number | null;
      /**
       * Num Rows Deleted
       * @description Number of rows that were deleted.
       * @default null
       */
      numRowsDeleted: number | null;
      /**
       * Num Rows Inserted
       * @description Number of rows that were inserted.
       * @default null
       */
      numRowsInserted: number | null;
      /**
       * Num Rows Updated
       * @description Number of rows that were updated.
       * @default null
       */
      numRowsUpdated: number | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "SNOWFLAKE".
 */
export type SNOWFLAKE_TOOL_INPUTS = {
  BASIC_DESCRIBE_TABLE: SNOWFLAKE_BASIC_DESCRIBE_TABLE_INPUT
  BASIC_EXPLORE_COLUMNS: SNOWFLAKE_BASIC_EXPLORE_COLUMNS_INPUT
  BASIC_RUN_QUERY: SNOWFLAKE_BASIC_RUN_QUERY_INPUT
  BASIC_SHOW_DATABASES: SNOWFLAKE_BASIC_SHOW_DATABASES_INPUT
  BASIC_SHOW_SCHEMAS: SNOWFLAKE_BASIC_SHOW_SCHEMAS_INPUT
  BASIC_SHOW_TABLES: SNOWFLAKE_BASIC_SHOW_TABLES_INPUT
  CANCEL_STATEMENT_EXECUTION: SNOWFLAKE_CANCEL_STATEMENT_EXECUTION_INPUT
  EXECUTE_SQL: SNOWFLAKE_EXECUTE_SQL_INPUT
  FETCH_CATALOG_INTEGRATION: SNOWFLAKE_FETCH_CATALOG_INTEGRATION_INPUT
  GET_ACTIVE_SCHEDULED_MAINTENANCES: SNOWFLAKE_GET_ACTIVE_SCHEDULED_MAINTENANCES_INPUT
  GET_ALL_SCHEDULED_MAINTENANCES: SNOWFLAKE_GET_ALL_SCHEDULED_MAINTENANCES_INPUT
  GET_COMPONENT_STATUS: SNOWFLAKE_GET_COMPONENT_STATUS_INPUT
  GET_STATUS_ROLLUP: SNOWFLAKE_GET_STATUS_ROLLUP_INPUT
  GET_STATUS_SUMMARY: SNOWFLAKE_GET_STATUS_SUMMARY_INPUT
  GET_UNRESOLVED_INCIDENTS: SNOWFLAKE_GET_UNRESOLVED_INCIDENTS_INPUT
  GET_UPCOMING_SCHEDULED_MAINTENANCES: SNOWFLAKE_GET_UPCOMING_SCHEDULED_MAINTENANCES_INPUT
  SHOW_DATABASES: SNOWFLAKE_SHOW_DATABASES_INPUT
  SHOW_SCHEMAS: SNOWFLAKE_SHOW_SCHEMAS_INPUT
  SHOW_TABLES: SNOWFLAKE_SHOW_TABLES_INPUT
  SNOWFLAKE_CHECK_STATEMENT_STATUS: SNOWFLAKE_SNOWFLAKE_CHECK_STATEMENT_STATUS_INPUT
  SUBMIT_SQL_STATEMENT: SNOWFLAKE_SUBMIT_SQL_STATEMENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SNOWFLAKE".
 */
export type SNOWFLAKE_TOOL_OUTPUTS = {
  BASIC_DESCRIBE_TABLE: SNOWFLAKE_BASIC_DESCRIBE_TABLE_OUTPUT
  BASIC_EXPLORE_COLUMNS: SNOWFLAKE_BASIC_EXPLORE_COLUMNS_OUTPUT
  BASIC_RUN_QUERY: SNOWFLAKE_BASIC_RUN_QUERY_OUTPUT
  BASIC_SHOW_DATABASES: SNOWFLAKE_BASIC_SHOW_DATABASES_OUTPUT
  BASIC_SHOW_SCHEMAS: SNOWFLAKE_BASIC_SHOW_SCHEMAS_OUTPUT
  BASIC_SHOW_TABLES: SNOWFLAKE_BASIC_SHOW_TABLES_OUTPUT
  CANCEL_STATEMENT_EXECUTION: SNOWFLAKE_CANCEL_STATEMENT_EXECUTION_OUTPUT
  EXECUTE_SQL: SNOWFLAKE_EXECUTE_SQL_OUTPUT
  FETCH_CATALOG_INTEGRATION: SNOWFLAKE_FETCH_CATALOG_INTEGRATION_OUTPUT
  GET_ACTIVE_SCHEDULED_MAINTENANCES: SNOWFLAKE_GET_ACTIVE_SCHEDULED_MAINTENANCES_OUTPUT
  GET_ALL_SCHEDULED_MAINTENANCES: SNOWFLAKE_GET_ALL_SCHEDULED_MAINTENANCES_OUTPUT
  GET_COMPONENT_STATUS: SNOWFLAKE_GET_COMPONENT_STATUS_OUTPUT
  GET_STATUS_ROLLUP: SNOWFLAKE_GET_STATUS_ROLLUP_OUTPUT
  GET_STATUS_SUMMARY: SNOWFLAKE_GET_STATUS_SUMMARY_OUTPUT
  GET_UNRESOLVED_INCIDENTS: SNOWFLAKE_GET_UNRESOLVED_INCIDENTS_OUTPUT
  GET_UPCOMING_SCHEDULED_MAINTENANCES: SNOWFLAKE_GET_UPCOMING_SCHEDULED_MAINTENANCES_OUTPUT
  SHOW_DATABASES: SNOWFLAKE_SHOW_DATABASES_OUTPUT
  SHOW_SCHEMAS: SNOWFLAKE_SHOW_SCHEMAS_OUTPUT
  SHOW_TABLES: SNOWFLAKE_SHOW_TABLES_OUTPUT
  SNOWFLAKE_CHECK_STATEMENT_STATUS: SNOWFLAKE_SNOWFLAKE_CHECK_STATEMENT_STATUS_OUTPUT
  SUBMIT_SQL_STATEMENT: SNOWFLAKE_SUBMIT_SQL_STATEMENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SNOWFLAKE toolkit.
 */
export const SNOWFLAKE = {
  slug: "snowflake",
  tools: {
    /**
     * Retrieves detailed information for each column (including name, data type, kind, nullability, default value, and key status) in a specified snowflake table.
     */
    BASIC_DESCRIBE_TABLE: "SNOWFLAKE_BASIC_DESCRIBE_TABLE",
    /**
     * Retrieves a sample of distinct values for specified columns from a snowflake table.
     */
    BASIC_EXPLORE_COLUMNS: "SNOWFLAKE_BASIC_EXPLORE_COLUMNS",
    /**
     * Executes the given sql query in snowflake within the specified database and schema (which must exist and be accessible), automatically setting context first.
     */
    BASIC_RUN_QUERY: "SNOWFLAKE_BASIC_RUN_QUERY",
    /**
     * Retrieves a list of all databases available in the snowflake account.
     */
    BASIC_SHOW_DATABASES: "SNOWFLAKE_BASIC_SHOW_DATABASES",
    /**
     * Retrieves a list of all schemas within a specified snowflake database.
     */
    BASIC_SHOW_SCHEMAS: "SNOWFLAKE_BASIC_SHOW_SCHEMAS",
    /**
     * Retrieves a list of tables, including their row counts and sizes in bytes, from a specified schema within a snowflake database.
     */
    BASIC_SHOW_TABLES: "SNOWFLAKE_BASIC_SHOW_TABLES",
    /**
     * Cancels the execution of a running sql statement. use this action to stop a long-running query.
     */
    CANCEL_STATEMENT_EXECUTION: "SNOWFLAKE_CANCEL_STATEMENT_EXECUTION",
    /**
     * Tool to execute a sql statement and return the resulting data. use when you need to query data from snowflake.
     */
    EXECUTE_SQL: "SNOWFLAKE_EXECUTE_SQL",
    /**
     * Fetches details of a specific catalog integration.
     */
    FETCH_CATALOG_INTEGRATION: "SNOWFLAKE_FETCH_CATALOG_INTEGRATION",
    /**
     * Retrieves a list of any active scheduled maintenances currently in the in progress or verifying state.
     */
    GET_ACTIVE_SCHEDULED_MAINTENANCES: "SNOWFLAKE_GET_ACTIVE_SCHEDULED_MAINTENANCES",
    /**
     * Retrieves a list of the 50 most recent scheduled maintenances, including those in the completed state.
     */
    GET_ALL_SCHEDULED_MAINTENANCES: "SNOWFLAKE_GET_ALL_SCHEDULED_MAINTENANCES",
    /**
     * Retrieves the status of individual components, each listed with its current status.
     */
    GET_COMPONENT_STATUS: "SNOWFLAKE_GET_COMPONENT_STATUS",
    /**
     * Retrieves the status rollup for the entire page, including indicators and human-readable descriptions of the blended component status.
     */
    GET_STATUS_ROLLUP: "SNOWFLAKE_GET_STATUS_ROLLUP",
    /**
     * Retrieves a summary of the status page, including status indicators, component statuses, unresolved incidents, and upcoming or in-progress scheduled maintenances.
     */
    GET_STATUS_SUMMARY: "SNOWFLAKE_GET_STATUS_SUMMARY",
    /**
     * Retrieves a list of any unresolved incidents currently in the investigating, identified, or monitoring state.
     */
    GET_UNRESOLVED_INCIDENTS: "SNOWFLAKE_GET_UNRESOLVED_INCIDENTS",
    /**
     * Retrieves a list of any upcoming scheduled maintenances still in the scheduled state.
     */
    GET_UPCOMING_SCHEDULED_MAINTENANCES: "SNOWFLAKE_GET_UPCOMING_SCHEDULED_MAINTENANCES",
    /**
     * Lists all databases for which you have access privileges. shows database metadata including name, creation date, owner, retention time, and more. can filter results and include dropped databases within time travel retention period.
     */
    SHOW_DATABASES: "SNOWFLAKE_SHOW_DATABASES",
    /**
     * Lists all schemas for which you have access privileges. shows schema metadata including name, creation date, owner, database, retention time, and more. can filter results and include dropped schemas within time travel retention period.
     */
    SHOW_SCHEMAS: "SNOWFLAKE_SHOW_SCHEMAS",
    /**
     * Lists all tables for which you have access privileges. shows table metadata including name, creation date, owner, database, schema, row count, size in bytes, clustering keys, and more. can filter results and include dropped tables within time travel retention period.
     */
    SHOW_TABLES: "SNOWFLAKE_SHOW_TABLES",
    /**
     * Retrieves the status of a previously submitted sql statement. replace '{statementhandle}' with the unique identifier of the statement.
     */
    SNOWFLAKE_CHECK_STATEMENT_STATUS: "SNOWFLAKE_SNOWFLAKE_CHECK_STATEMENT_STATUS",
    /**
     * Submits a sql statement for execution.
     */
    SUBMIT_SQL_STATEMENT: "SNOWFLAKE_SUBMIT_SQL_STATEMENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SNOWFLAKE".
 */
export type SNOWFLAKE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SNOWFLAKE".
 */
export type SNOWFLAKE_TRIGGER_EVENTS = {}
