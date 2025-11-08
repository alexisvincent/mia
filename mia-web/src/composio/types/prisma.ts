// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PRISMA's PRISMA_CREATE_CONNECTION tool input.
 */
type PRISMA_CREATE_CONNECTION_INPUT = {
  /**
   * Database Id
   * @description Unique database identifier to create connection for (format: 'db_xxxxx'). Must be a database the authenticated user has write access to. The new connection will provide API key access to this database.
   */
  databaseId?: string;
  /**
   * Name
   * @description Human-readable name for the new connection/API key. This will be displayed in UIs and used for identification. Choose descriptive names like 'Production API Key', 'Analytics Access', 'Dev Environment', etc.
   */
  name?: string;
};

/**
 * Type of PRISMA's PRISMA_CREATE_CONNECTION tool output.
 */
type PRISMA_CREATE_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Complete connection object including connection string with credentials. Contains all necessary information for applications to access the database. Store the connection string securely as it provides full database access.
   */
  data?: {
      /**
       * Connection String
       * @description Complete database connection string with embedded API key credentials. Use this string to connect applications to the database. Contains authentication tokens and endpoint information. Store securely as it provides full database access.
       */
      connectionString: string;
      /**
       * Created At
       * @description ISO 8601 creation timestamp.
       */
      createdAt: string;
      /**
       * Database
       * @description Parent database information.
       */
      database: {
          /**
           * Id
           * @description Unique database ID containing this connection.
           */
          id: string;
          /**
           * Name
           * @description Human-readable database name.
           */
          name: string;
      };
      /**
       * Id
       * @description Unique connection identifier for future operations.
       */
      id: string;
      /**
       * Name
       * @description Connection name as specified in request.
       */
      name: string;
      /**
       * Type
       * @description Object type, always 'connection'.
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
 * Type of PRISMA's PRISMA_CREATE_DATABASE tool input.
 */
type PRISMA_CREATE_DATABASE_INPUT = {
  /**
   * Is Default
   * @description Whether this database should be the default for the project. Default false. Only one database can be default per project. Setting to true will make other databases non-default.
   * @default false
   */
  isDefault: boolean | null;
  /**
   * Name
   * @description Human-readable name for the new database. This will be displayed in UIs and used for identification. Choose descriptive names like 'Production DB', 'Analytics', etc.
   */
  name?: string;
  /**
   * Project Id
   * @description Unique project identifier to create database in (format: 'prj_xxxxx'). Must be a project the authenticated user has write access to. The new database will belong to this project.
   */
  projectId?: string;
  /**
   * Region
   * @description AWS region where the database will be deployed. Common values: 'us-east-1', 'us-west-2', 'eu-west-1', 'ap-southeast-1'. Choose region closest to your users for optimal performance.
   */
  region?: string;
};

/**
 * Type of PRISMA's PRISMA_CREATE_DATABASE tool output.
 */
type PRISMA_CREATE_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Complete database object including connection strings and API keys. Contains all necessary information to start using the database: connection details, regional deployment info, and access credentials.
   */
  data?: {
      /**
       * Api Keys
       * @description List of API keys for database access.
       */
      apiKeys: {
          /**
           * Connection String
           * @description Database connection string with embedded credentials.
           */
          connectionString: string;
          /**
           * Created At
           * @description ISO 8601 creation timestamp.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique API key identifier.
           */
          id: string;
          /**
           * Name
           * @description Human-readable API key name.
           */
          name: string;
          /**
           * Type
           * @description Key type, typically 'connection'.
           */
          type: string;
      }[];
      /**
       * Connection String
       * @description Primary database connection string.
       */
      connectionString: string;
      /**
       * Created At
       * @description ISO 8601 creation timestamp.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique database identifier for future operations.
       */
      id: string;
      /**
       * Is Default
       * @description True if this is the default database for the project.
       */
      isDefault: boolean;
      /**
       * Name
       * @description Database name as specified in request.
       */
      name: string;
      /**
       * Project
       * @description Parent project information.
       */
      project: {
          /**
           * Id
           * @description Unique project ID containing this database.
           */
          id: string;
          /**
           * Name
           * @description Human-readable project name.
           */
          name: string;
      };
      /**
       * Region
       * @description AWS region where database is deployed.
       */
      region: {
          /**
           * Id
           * @description Region identifier (e.g., 'us-east-1').
           */
          id: string;
          /**
           * Name
           * @description Human-readable region name.
           */
          name: string;
      };
      /**
       * Status
       * @description Current database status (e.g., 'provisioning', 'ready').
       */
      status: string;
      /**
       * Type
       * @description Object type, always 'database'.
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
 * Type of PRISMA's PRISMA_CREATE_PROJECT tool input.
 */
type PRISMA_CREATE_PROJECT_INPUT = {
  /**
   * Name
   * @description Human-readable name for the new project. This will be displayed in UIs and used for identification. Choose descriptive names like 'Production API', 'Dev Environment', etc.
   */
  name?: string;
  /**
   * Region
   * @description AWS region where the postgres database will be deployed. Common values: 'us-east-1', 'us-west-2', 'eu-west-1', 'ap-southeast-1'. Choose region closest to your users for optimal performance.
   */
  region?: string;
};

/**
 * Type of PRISMA's PRISMA_CREATE_PROJECT tool output.
 */
type PRISMA_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Complete project object including embedded postgres database. Contains all necessary information to start using the project: connection strings, API keys, and regional deployment details.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp.
       */
      createdAt: string;
      /**
       * Database
       * @description Postgres database created with the project.
       */
      database: {
          /**
           * Api Keys
           * @description List of API keys for database access.
           */
          apiKeys: {
              /**
               * Connection String
               * @description Database connection string with embedded credentials.
               */
              connectionString: string;
              /**
               * Created At
               * @description ISO 8601 creation timestamp.
               */
              createdAt: string;
              /**
               * Id
               * @description Unique API key identifier.
               */
              id: string;
              /**
               * Name
               * @description Human-readable API key name.
               */
              name: string;
              /**
               * Type
               * @description Key type, typically 'connection'.
               */
              type: string;
          }[];
          /**
           * Connection String
           * @description Primary database connection string.
           */
          connectionString: string;
          /**
           * Created At
           * @description ISO 8601 creation timestamp.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique database identifier.
           */
          id: string;
          /**
           * Is Default
           * @description True if this is the default database for the project.
           */
          isDefault: boolean;
          /**
           * Name
           * @description Database name.
           */
          name: string;
          /**
           * Region
           * @description AWS region where database is deployed.
           */
          region: {
              /**
               * Id
               * @description Region identifier (e.g., 'us-east-1').
               */
              id: string;
              /**
               * Name
               * @description Human-readable region name.
               */
              name: string;
          };
          /**
           * Status
           * @description Current database status (e.g., 'active', 'provisioning').
           */
          status: string;
          /**
           * Type
           * @description Database type, always 'database'.
           */
          type: string;
      };
      /**
       * Id
       * @description Unique project identifier for future operations.
       */
      id: string;
      /**
       * Name
       * @description Project name as specified in request.
       */
      name: string;
      /**
       * Type
       * @description Object type, always 'project'.
       */
      type: string;
      /**
       * Workspace
       * @description Parent workspace information.
       */
      workspace: {
          /**
           * Id
           * @description Unique workspace ID containing this project.
           */
          id: string;
          /**
           * Name
           * @description Human-readable workspace name.
           */
          name: string;
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
 * Type of PRISMA's PRISMA_DELETE_CONNECTION tool input.
 */
type PRISMA_DELETE_CONNECTION_INPUT = {
  /**
   * Id
   * @description Unique connection identifier to delete (format: 'con_xxxxx'). WARNING: This permanently revokes API key access to the database. Any applications using this connection string will lose access immediately. This action cannot be undone - ensure no critical systems depend on this connection.
   */
  id?: string;
};

/**
 * Type of PRISMA's PRISMA_DELETE_CONNECTION tool output.
 */
type PRISMA_DELETE_CONNECTION_OUTPUT = {
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
 * Type of PRISMA's PRISMA_DELETE_DATABASE tool input.
 */
type PRISMA_DELETE_DATABASE_INPUT = {
  /**
   * Database Id
   * @description Unique database identifier to delete (format: 'db_xxxxx'). WARNING: This permanently deletes the database and all stored data. Default databases typically cannot be deleted. This action cannot be undone. Ensure all important data is backed up before deletion.
   */
  databaseId?: string;
};

/**
 * Type of PRISMA's PRISMA_DELETE_DATABASE tool output.
 */
type PRISMA_DELETE_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating successful database deletion.
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
 * Type of PRISMA's PRISMA_DELETE_PROJECT tool input.
 */
type PRISMA_DELETE_PROJECT_INPUT = {
  /**
   * Id
   * @description Unique project identifier to delete (format: 'prj_xxxxx'). WARNING: This permanently deletes the project and all associated data including databases, environments, and configurations. This action cannot be undone. Ensure all important data is backed up before deletion.
   */
  id?: string;
};

/**
 * Type of PRISMA's PRISMA_DELETE_PROJECT tool output.
 */
type PRISMA_DELETE_PROJECT_OUTPUT = {
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
 * Type of PRISMA's PRISMA_EXECUTE_SQL_COMMAND tool input.
 */
type PRISMA_EXECUTE_SQL_COMMAND_INPUT = {
  /**
   * Command
   * @description SQL command to execute against the database (INSERT, UPDATE, DELETE, CREATE TABLE, etc.). Examples: 'INSERT INTO users (name, email) VALUES ($1, $2)', 'UPDATE users SET active = $1 WHERE id = $2', 'DELETE FROM sessions WHERE expires_at < NOW()', 'CREATE TABLE logs (id SERIAL PRIMARY KEY, message TEXT, created_at TIMESTAMP DEFAULT NOW())'
   */
  command?: string;
  /**
   * Connection String
   * @description Prisma connection string from database actions (format: 'prisma+postgres://...'). Use connection strings obtained from create_project, list_connections, or create_connection actions. Must include valid API key for authentication with Prisma Accelerate.
   */
  connectionString?: string;
  /**
   * Parameters
   * @description Optional array of parameters for parameterized commands using $1, $2, etc. placeholders. Example: command='INSERT INTO users (name, email) VALUES ($1, $2)', parameters=['John Doe', 'john@example.com']. Parameters are automatically escaped to prevent SQL injection.
   * @default null
   */
  parameters: unknown[] | null;
};

/**
 * Type of PRISMA's PRISMA_EXECUTE_SQL_COMMAND tool output.
 */
type PRISMA_EXECUTE_SQL_COMMAND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Command execution results with affected row count and performance metrics. Use affectedRows to verify the operation impact.
       */
      result: {
          /**
           * Affected Rows
           * @description Number of rows affected by the command operation. For INSERT: number of rows inserted. For UPDATE: number of rows updated. For DELETE: number of rows deleted. For DDL commands (CREATE, ALTER, DROP): typically 0.
           */
          affectedRows: number;
          /**
           * Execution Time Ms
           * @description Command execution time in milliseconds for performance monitoring.
           */
          executionTimeMs: number;
          /**
           * Success
           * @description Whether the command executed successfully without errors.
           */
          success: boolean;
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
 * Type of PRISMA's PRISMA_EXECUTE_SQL_QUERY tool input.
 */
type PRISMA_EXECUTE_SQL_QUERY_INPUT = {
  /**
   * Connection String
   * @description Prisma connection string from database actions (format: 'prisma+postgres://...'). Use connection strings obtained from create_project, list_connections, or create_connection actions. Must include valid API key for authentication with Prisma Accelerate.
   */
  connectionString?: string;
  /**
   * Parameters
   * @description Optional array of parameters for parameterized queries using $1, $2, etc. placeholders. Example: query='SELECT * FROM users WHERE id = $1 AND active = $2', parameters=[123, true]. Parameters are automatically escaped to prevent SQL injection.
   * @default null
   */
  parameters: unknown[] | null;
  /**
   * Query
   * @description SQL SELECT query to execute against the database. Use standard PostgreSQL syntax. Common examples: 'SELECT * FROM users LIMIT 10', 'SELECT name, email FROM customers WHERE active = true', 'SELECT table_name FROM information_schema.tables WHERE table_schema = 'public''. Avoid INSERT/UPDATE/DELETE - use execute_sql_command for those operations.
   */
  query?: string;
};

/**
 * Type of PRISMA's PRISMA_EXECUTE_SQL_QUERY tool output.
 */
type PRISMA_EXECUTE_SQL_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Query execution results with data, row count, and performance metrics. Use this data for analysis, display, or further processing.
       */
      result: {
          /**
           * Data
           * @description Array of result rows as objects with column names as keys. Each row represents a database record with typed values. Empty array if no results found.
           */
          data: {
              [key: string]: unknown;
          }[];
          /**
           * Execution Time Ms
           * @description Query execution time in milliseconds for performance monitoring.
           */
          executionTimeMs: number;
          /**
           * Row Count
           * @description Number of rows returned by the query.
           */
          rowCount: number;
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
 * Type of PRISMA's PRISMA_GET_DATABASE tool input.
 */
type PRISMA_GET_DATABASE_INPUT = {
  /**
   * Database Id
   * @description Unique database identifier to retrieve (format: 'db_xxxxx'). This ID is obtained from database listing or creation operations. Must be a database the authenticated user has access to.
   */
  databaseId?: string;
};

/**
 * Type of PRISMA's PRISMA_GET_DATABASE tool output.
 */
type PRISMA_GET_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Complete database information including status, project context, and region. Use this data for displaying database details, monitoring health, and administrative operations.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp in UTC.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique database identifier.
       */
      id: string;
      /**
       * Is Default
       * @description True if this is the default database for its project. Default databases are created automatically with projects.
       */
      isDefault: boolean;
      /**
       * Name
       * @description Human-readable database name.
       */
      name: string;
      /**
       * Project
       * @description Parent project containing this database.
       */
      project: {
          /**
           * Id
           * @description Unique project ID containing this database.
           */
          id: string;
          /**
           * Name
           * @description Human-readable project name.
           */
          name: string;
      };
      /**
       * Region
       * @description AWS region where database is deployed.
       */
      region: {
          /**
           * Id
           * @description Region identifier (e.g., 'us-east-1').
           */
          id: string;
          /**
           * Name
           * @description Human-readable region name.
           */
          name: string;
      };
      /**
       * Status
       * @description Current database operational status. Values: 'ready' (operational), 'provisioning' (being created), 'failure' (error state), 'maintenance' (temporarily unavailable).
       */
      status: string;
      /**
       * Type
       * @description Object type, always 'database'.
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
 * Type of PRISMA's PRISMA_GET_PROJECT tool input.
 */
type PRISMA_GET_PROJECT_INPUT = {
  /**
   * Id
   * @description Unique project identifier to retrieve (format: 'prj_xxxxx'). This ID is obtained from project listing or creation operations. Must be a project the authenticated user has access to.
   */
  id?: string;
};

/**
 * Type of PRISMA's PRISMA_GET_PROJECT tool output.
 */
type PRISMA_GET_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Complete project information including name, creation date, and workspace context. Use this data for displaying project details, navigation, and administrative operations.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp in UTC.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique project identifier.
       */
      id: string;
      /**
       * Name
       * @description Human-readable project name.
       */
      name: string;
      /**
       * Type
       * @description Object type, always 'project'.
       */
      type: string;
      /**
       * Workspace
       * @description Parent workspace containing this project.
       */
      workspace: {
          /**
           * Id
           * @description Unique workspace ID containing this project.
           */
          id: string;
          /**
           * Name
           * @description Human-readable workspace name.
           */
          name: string;
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
 * Type of PRISMA's PRISMA_INSPECT_DATABASE_SCHEMA tool input.
 */
type PRISMA_INSPECT_DATABASE_SCHEMA_INPUT = {
  /**
   * Connection String
   * @description Prisma connection string from database actions (format: 'prisma+postgres://...'). Use connection strings obtained from create_project, list_connections, or create_connection actions. Must include valid API key for authentication with Prisma Accelerate.
   */
  connectionString?: string;
  /**
   * Include Indexes
   * @description Whether to include index information in the schema results. When true, shows primary keys, foreign keys, and other indexes. Useful for understanding table relationships and query optimization.
   * @default false
   */
  includeIndexes: boolean | null;
  /**
   * Table Name
   * @description Optional specific table name to inspect. If provided, returns detailed column information for that table only. If omitted, returns overview of all tables in the database. Use for focused schema analysis of specific tables.
   * @default null
   */
  tableName: string | null;
};

/**
 * Type of PRISMA's PRISMA_INSPECT_DATABASE_SCHEMA tool output.
 */
type PRISMA_INSPECT_DATABASE_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Database Schema
       * @description Complete database schema information including tables, columns, types, and relationships. Use this data to understand database structure and plan queries or modifications.
       */
      database_schema: {
          /**
           * Database Name
           * @description Name of the database.
           */
          databaseName: string;
          /**
           * Schema Name
           * @description Schema name (typically 'public' for PostgreSQL).
           */
          schemaName: string;
          /**
           * Tables
           * @description Array of table information including columns and metadata.
           */
          tables: {
              /**
               * Columns
               * @description Array of column information for the table including types, constraints, and relationships.
               */
              columns: {
                  /**
                   * Column Name
                   * @description Name of the database column.
                   */
                  columnName: string;
                  /**
                   * Data Type
                   * @description PostgreSQL data type (e.g., 'integer', 'text', 'timestamp with time zone').
                   */
                  dataType: string;
                  /**
                   * Default Value
                   * @description Default value for the column, if any.
                   * @default null
                   */
                  defaultValue: string | null;
                  /**
                   * Is Foreign Key
                   * @description Whether this column is a foreign key.
                   * @default false
                   */
                  isForeignKey: boolean;
                  /**
                   * Is Nullable
                   * @description Whether the column allows NULL values.
                   */
                  isNullable: boolean;
                  /**
                   * Is Primary Key
                   * @description Whether this column is part of the primary key.
                   * @default false
                   */
                  isPrimaryKey: boolean;
                  /**
                   * Referenced Column
                   * @description Referenced column name if this is a foreign key.
                   * @default null
                   */
                  referencedColumn: string | null;
                  /**
                   * Referenced Table
                   * @description Referenced table name if this is a foreign key.
                   * @default null
                   */
                  referencedTable: string | null;
              }[];
              /**
               * Row Count
               * @description Approximate number of rows in the table.
               * @default null
               */
              rowCount: number | null;
              /**
               * Table Name
               * @description Name of the database table.
               */
              tableName: string;
              /**
               * Table Type
               * @description Type of table (e.g., 'BASE TABLE', 'VIEW').
               */
              tableType: string;
          }[];
          /**
           * Total Tables
           * @description Total number of tables in the database.
           */
          totalTables: number;
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
 * Type of PRISMA's PRISMA_LIST_ACCELERATE_REGIONS tool input.
 */
type PRISMA_LIST_ACCELERATE_REGIONS_INPUT = object;

/**
 * Type of PRISMA's PRISMA_LIST_ACCELERATE_REGIONS tool output.
 */
type PRISMA_LIST_ACCELERATE_REGIONS_OUTPUT = {
  /**
   * Data
   * @description Array of Prisma Accelerate regions for global database caching. Choose regions closest to your users for optimal performance. All listed regions are available for cache deployment.
   */
  data?: {
      /**
       * Id
       * @description Unique region identifier (e.g., 'us-east-1', 'eu-west-1'). Use this ID when configuring Accelerate caching in the desired region.
       */
      id: string;
      /**
       * Name
       * @description Human-readable region name (e.g., 'US East (N. Virginia)', 'Europe (Ireland)'). Displays geographical location for optimal cache placement near your users.
       */
      name: string;
      /**
       * Type
       * @description Object type, always 'region'. Provides consistency across API responses.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PRISMA's PRISMA_LIST_BACKUPS tool input.
 */
type PRISMA_LIST_BACKUPS_INPUT = {
  /**
   * Database Id
   * @description Unique database identifier to list backups for (format: 'db_xxxxx'). Must be a database the authenticated user has access to. All available backups for this database will be returned.
   */
  databaseId?: string;
  /**
   * Limit
   * @description Maximum number of backups to return in a single request. Defaults to 25 if not specified. Typical range is 1-100. Use smaller values (10-25) for UI pagination, larger values (50-100) for processing.
   * @default 25
   */
  limit: number | null;
};

/**
 * Type of PRISMA's PRISMA_LIST_BACKUPS tool output.
 */
type PRISMA_LIST_BACKUPS_OUTPUT = {
  /**
   * Data
   * @description Array of backup objects for the specified database. Backups are ordered by creation date with most recent first. Only includes backups available for restoration within retention period.
   */
  data?: {
      /**
       * Backup Type
       * @description Type of backup performed. Common values: 'full' (complete database), 'incremental' (changes only), 'scheduled' (automatic backup).
       */
      backupType: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when backup was created (e.g., '2025-07-20T11:09:30.705Z').
       */
      createdAt: string;
      /**
       * Id
       * @description Unique backup identifier used for restoration operations. Use this ID with restore backup action to recover data to a new database.
       */
      id: string;
      /**
       * Size
       * @description Backup size in bytes. Use for storage monitoring and restoration planning. Larger backups may take longer to restore.
       */
      size: number;
      /**
       * Status
       * @description Current backup status indicating availability for restoration. Values: 'completed' (ready for restore), 'running' (backup in progress), 'failed' (backup error), 'expired' (past retention period).
       */
      status: string;
      /**
       * Type
       * @description Object type, always 'backup'. Provides consistency across API responses.
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
   * Meta
   * @description Backup policy metadata including retention configuration.
   */
  meta?: {
      /**
       * Backup Retention Days
       * @description Number of days backups are retained before automatic deletion. Backups older than this period are automatically purged. Use for planning backup strategies and compliance requirements.
       */
      backupRetentionDays: number;
  };
  /**
   * Pagination
   * @description Pagination info for navigating through backup collections.
   */
  pagination?: {
      /**
       * Has More
       * @description True if more backups are available beyond the current limit.
       */
      hasMore: boolean;
      /**
       * Limit
       * @description Current limit applied to the backup listing request.
       */
      limit: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PRISMA's PRISMA_LIST_CONNECTIONS tool input.
 */
type PRISMA_LIST_CONNECTIONS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for retrieving the next page of results. Use the 'nextCursor' value from a previous response to get subsequent pages. Leave as None/null for the first page. Enables efficient pagination through large numbers of connections without missing or duplicating entries.
   * @default null
   */
  cursor: string | null;
  /**
   * Database Id
   * @description Unique database identifier to list connections for (format: 'db_xxxxx'). Must be a database the authenticated user has access to. All connection strings and API keys for this database will be returned.
   */
  databaseId?: string;
  /**
   * Limit
   * @description Maximum number of connections to return in a single request. Defaults to 100 if not specified. Valid range is typically 1-500. Use smaller values (10-50) for faster responses when you only need a few connections, or larger values (100-500) when bulk processing.
   * @default 100
   */
  limit: number | null;
};

/**
 * Type of PRISMA's PRISMA_LIST_CONNECTIONS tool output.
 */
type PRISMA_LIST_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description Array of connection objects for the specified database. Connections are ordered by creation date with most recent first. Each connection represents an API key for database access with unique credentials.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp in UTC (e.g., '2025-07-20T11:08:47.879Z').
       */
      createdAt: string;
      /**
       * Database
       * @description Parent database information containing ID and name.
       */
      database: {
          /**
           * Id
           * @description Unique database ID containing this connection.
           */
          id: string;
          /**
           * Name
           * @description Human-readable database name.
           */
          name: string;
      };
      /**
       * Id
       * @description Unique connection identifier (format: 'con_xxxxx'). Use this ID for connection-specific operations like deletion. Each connection represents a unique API key for database access.
       */
      id: string;
      /**
       * Name
       * @description Human-readable connection name set during creation. Used for identification and management in UIs. Common names include 'Production API Key', 'Dev Access', etc.
       */
      name: string;
      /**
       * Type
       * @description Object type, always 'connection'. Provides consistency across API responses.
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
   * Pagination
   * @description Pagination info for navigating through connection collections.
   */
  pagination?: {
      /**
       * Has More
       * @description True if more pages available. Check before making next request.
       */
      hasMore: boolean;
      /**
       * Next Cursor
       * @description Opaque cursor for next page. Pass to subsequent requests. Null when no more pages.
       * @default null
       */
      nextCursor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PRISMA's PRISMA_LIST_DATABASES tool input.
 */
type PRISMA_LIST_DATABASES_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for retrieving the next page of results. Use the 'nextCursor' value from a previous response to get subsequent pages. Leave as None/null for the first page. Enables efficient pagination through large numbers of databases without missing or duplicating entries.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of databases to return in a single request. Defaults to 100 if not specified. Valid range is typically 1-500. Use smaller values (10-50) for faster responses when you only need a few databases, or larger values (100-500) when bulk processing.
   * @default 100
   */
  limit: number | null;
  /**
   * Project Id
   * @description Unique project identifier to list databases for (format: 'prj_xxxxx'). Must be a project the authenticated user has access to. All databases belonging to this project will be returned.
   */
  projectId?: string;
};

/**
 * Type of PRISMA's PRISMA_LIST_DATABASES tool output.
 */
type PRISMA_LIST_DATABASES_OUTPUT = {
  /**
   * Data
   * @description Array of database objects within the specified project. Databases are ordered by creation date with most recent first. Includes both default and additional databases created for the project.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp in UTC (e.g., '2025-07-20T11:08:16.761Z').
       */
      createdAt: string;
      /**
       * Id
       * @description Unique database identifier (format: 'db_xxxxx'). Use this ID for database-specific operations like getting details, managing connections, or deletion.
       */
      id: string;
      /**
       * Is Default
       * @description True if this is the default database for the project. Default databases are created automatically with projects and typically cannot be deleted.
       */
      isDefault: boolean;
      /**
       * Name
       * @description Human-readable database name set during creation. Used for identification and display in UIs. Often matches project name for default databases.
       */
      name: string;
      /**
       * Project
       * @description Parent project information containing ID and name.
       */
      project: {
          /**
           * Id
           * @description Unique project ID containing this database.
           */
          id: string;
          /**
           * Name
           * @description Human-readable project name.
           */
          name: string;
      };
      /**
       * Region
       * @description AWS region where the database is deployed for performance optimization.
       */
      region: {
          /**
           * Id
           * @description Region identifier (e.g., 'us-east-1').
           */
          id: string;
          /**
           * Name
           * @description Human-readable region name (e.g., 'US East (N. Virginia)').
           */
          name: string;
      };
      /**
       * Status
       * @description Current database status indicating operational state. Common values: 'ready' (operational), 'provisioning' (being created), 'failure' (error state), 'maintenance' (temporary unavailable).
       */
      status: string;
      /**
       * Type
       * @description Object type, always 'database'. Provides consistency across API responses.
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
   * Pagination
   * @description Pagination info for navigating through database collections.
   */
  pagination?: {
      /**
       * Has More
       * @description True if more pages available. Check before making next request.
       */
      hasMore: boolean;
      /**
       * Next Cursor
       * @description Opaque cursor for next page. Pass to subsequent requests. Null when no more pages.
       * @default null
       */
      nextCursor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PRISMA's PRISMA_LIST_POSTGRES_REGIONS tool input.
 */
type PRISMA_LIST_POSTGRES_REGIONS_INPUT = object;

/**
 * Type of PRISMA's PRISMA_LIST_POSTGRES_REGIONS tool output.
 */
type PRISMA_LIST_POSTGRES_REGIONS_OUTPUT = {
  /**
   * Data
   * @description Array of Prisma Postgres regions with availability status. Filter for 'available' status when creating new databases. Regions are ordered by geographical priority.
   */
  data?: {
      /**
       * Id
       * @description Unique region identifier (e.g., 'us-east-1', 'eu-west-1'). Use this ID when creating databases to specify the desired region.
       */
      id: string;
      /**
       * Name
       * @description Human-readable region name (e.g., 'US East (N. Virginia)', 'Europe (Ireland)'). Displays geographical location for user-friendly region selection.
       */
      name: string;
      /**
       * Status
       * @description Current region availability status for Prisma Postgres. Values: 'available' (ready for database creation), 'unavailable' (temporarily disabled), 'maintenance' (scheduled maintenance). Only use 'available' regions for new databases.
       */
      status: string;
      /**
       * Type
       * @description Object type, always 'region'. Provides consistency across API responses.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PRISMA's PRISMA_LIST_PROJECTS tool input.
 */
type PRISMA_LIST_PROJECTS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for retrieving the next page of results. Use the 'nextCursor' value from a previous response to get subsequent pages. Leave as None/null for the first page. This enables efficient pagination through large numbers of projects without missing or duplicating entries.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of projects to return in a single request. Defaults to 100 if not specified. Valid range is typically 1-500. Use smaller values (10-50) for faster responses when you only need a few projects, or larger values (100-500) when bulk processing. The API may return fewer results than requested if fewer projects exist.
   * @default 100
   */
  limit: number | null;
};

/**
 * Type of PRISMA's PRISMA_LIST_PROJECTS tool output.
 */
type PRISMA_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Array of project objects accessible to the authenticated user. Projects are ordered by creation date with most recent first. Each project includes workspace context and creation metadata.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp in UTC (e.g., '2025-07-20T10:54:59.040Z').
       */
      createdAt: string;
      /**
       * Id
       * @description Unique project identifier (format: 'prj_xxxxx'). Use this ID for all project-specific operations like getting details, creating databases, or managing environments.
       */
      id: string;
      /**
       * Name
       * @description Human-readable project name set during creation. Used for display in UIs and identification. Can be modified by project admins.
       */
      name: string;
      /**
       * Type
       * @description Object type, always 'project'. Provides consistency across API responses.
       */
      type: string;
      /**
       * Workspace
       * @description Parent workspace information containing ID and name. Projects belong to exactly one workspace and inherit access controls from it.
       */
      workspace: {
          /**
           * Id
           * @description Unique workspace ID that contains this project (format: 'wksp_xxxxx').
           */
          id: string;
          /**
           * Name
           * @description Human-readable workspace name for display purposes.
           */
          name: string;
      };
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination info for navigating through project collections.
   */
  pagination?: {
      /**
       * Has More
       * @description True if more pages available. Check before making next request.
       */
      hasMore: boolean;
      /**
       * Next Cursor
       * @description Opaque cursor for next page. Pass to subsequent requests. Null when no more pages.
       * @default null
       */
      nextCursor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PRISMA's PRISMA_LIST_WORKSPACES tool input.
 */
type PRISMA_LIST_WORKSPACES_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for retrieving the next page of results. Use the 'nextCursor' value from a previous response to get subsequent pages. Leave as None/null for the first page. This enables efficient pagination through large numbers of workspaces without missing or duplicating entries.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of workspaces to return in a single request. Defaults to 100 if not specified. Valid range is typically 1-500. Use smaller values (10-50) for faster responses when you only need a few workspaces, or larger values (100-500) when bulk processing. The API may return fewer results than requested if fewer workspaces exist.
   * @default 100
   */
  limit: number | null;
};

/**
 * Type of PRISMA's PRISMA_LIST_WORKSPACES tool output.
 */
type PRISMA_LIST_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Array of workspace objects accessible to the authenticated user. Each workspace represents a separate organizational unit with its own projects, environments, and team members. The list is ordered by most recently modified workspaces first. May be empty if the user has no workspace access or if all workspaces are beyond the pagination cursor. Each workspace object contains complete metadata including ID, name, creation timestamp, and object type for full programmatic access.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 formatted timestamp indicating when the workspace was created (e.g., '2025-07-16T10:24:33.261Z'). This timestamp is in UTC timezone. Useful for auditing, sorting workspaces by age, or implementing retention policies. The timestamp includes millisecond precision and follows the format: YYYY-MM-DDTHH:mm:ss.sssZ where Z indicates UTC timezone.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique immutable identifier for the workspace (e.g., 'wksp_cmd5tdzvx07si3o0wmiq7plxu'). This ID is used in all subsequent API calls to reference this specific workspace. It follows the format 'wksp_' followed by a random alphanumeric string. Store this ID to perform workspace-specific operations like listing projects, managing environments, or configuring workspace settings.
       */
      id: string;
      /**
       * Name
       * @description Human-readable display name of the workspace (e.g., 'Personal workspace', 'Company Production'). This name is set by workspace administrators and can be modified. Use this for displaying workspace information to users in interfaces. Names are not unique identifiers - always use the 'id' field for programmatic references. Common patterns include team names, project names, or environment designations.
       */
      name: string;
      /**
       * Type
       * @description Object type identifier, always set to 'workspace' for workspace objects. This field provides type safety and consistency across the Prisma API. It helps distinguish workspace objects from other entity types like projects, environments, or databases in mixed API responses or when processing collections of different object types.
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
   * Pagination
   * @description Pagination metadata enabling navigation through large workspace collections. Contains cursor information for retrieving subsequent pages and a boolean indicator of whether more pages exist. Essential for implementing complete workspace discovery in applications with many workspaces. Always present in responses for API consistency, even when all results fit in a single page.
   */
  pagination?: {
      /**
       * Has More
       * @description Boolean indicator of whether additional workspace pages are available. When true, more workspaces exist beyond the current page and you should make another request using the 'nextCursor' value to retrieve them. When false, the current page contains the last available workspaces. Always check this field before attempting pagination to avoid unnecessary API calls.
       */
      hasMore: boolean;
      /**
       * Next Cursor
       * @description Opaque cursor token for retrieving the next page of workspace results. This value should be passed as the 'cursor' parameter in subsequent requests to get the next set of workspaces. Will be null/None when there are no more pages available (i.e., when 'hasMore' is false). The cursor is a base64-encoded string that encodes the position in the result set - never attempt to parse or modify this value, always use it as-is.
       * @default null
       */
      nextCursor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PRISMA's PRISMA_RESTORE_BACKUP tool input.
 */
type PRISMA_RESTORE_BACKUP_INPUT = {
  /**
   * Backup Id
   * @description Unique backup identifier to restore. Must be a completed backup from the specified database. Use list_backups action to find available backup IDs.
   */
  backupId?: string;
  /**
   * Database Id
   * @description Unique source database identifier containing the backup (format: 'db_xxxxx'). Must be a database the authenticated user has access to. The backup will be restored from this database's backup collection.
   */
  databaseId?: string;
  /**
   * Target Database Name
   * @description Name for the new database created from backup restoration. This will be displayed in UIs and used for identification. Choose descriptive names like 'Restored DB 2025-01-20', 'Production Rollback', etc.
   */
  targetDatabaseName?: string;
};

/**
 * Type of PRISMA's PRISMA_RESTORE_BACKUP tool output.
 */
type PRISMA_RESTORE_BACKUP_OUTPUT = {
  /**
   * Data
   * @description Database object for the restoration operation. Check the 'status' field to monitor restoration progress. Database will be available for use when status becomes 'ready'.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when restoration was initiated.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier for the newly restored database.
       */
      id: string;
      /**
       * Is Default
       * @description False for restored databases as they are not default. Restored databases are additional databases in the project.
       */
      isDefault: boolean;
      /**
       * Name
       * @description Database name as specified in targetDatabaseName.
       */
      name: string;
      /**
       * Project
       * @description Parent project containing the restored database.
       */
      project: {
          /**
           * Id
           * @description Unique project ID containing the restored database.
           */
          id: string;
          /**
           * Name
           * @description Human-readable project name.
           */
          name: string;
      };
      /**
       * Region
       * @description AWS region where database is being restored.
       */
      region: {
          /**
           * Id
           * @description Region identifier (e.g., 'us-east-1').
           */
          id: string;
          /**
           * Name
           * @description Human-readable region name.
           */
          name: string;
      };
      /**
       * Status
       * @description Current database status during restoration process. Values: 'provisioning' (restoration in progress), 'ready' (restoration complete), 'failure' (restoration failed). Monitor this status for completion.
       */
      status: string;
      /**
       * Type
       * @description Object type, always 'database'.
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
 * Type of PRISMA's PRISMA_TRANSFER_PROJECT tool input.
 */
type PRISMA_TRANSFER_PROJECT_INPUT = {
  /**
   * Id
   * @description Unique project identifier to transfer (format: 'prj_xxxxx'). Must be a project owned by the authenticated user. After transfer, the current user will lose access unless explicitly granted by the new owner.
   */
  id?: string;
  /**
   * Recipient Access Token
   * @description Valid access token of the recipient user who will receive project ownership. The recipient must have a valid Prisma account and appropriate permissions to receive project transfers. This token authorizes the ownership change.
   */
  recipientAccessToken?: string;
};

/**
 * Type of PRISMA's PRISMA_TRANSFER_PROJECT tool output.
 */
type PRISMA_TRANSFER_PROJECT_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "PRISMA".
 */
export type PRISMA_TOOL_INPUTS = {
  CREATE_CONNECTION: PRISMA_CREATE_CONNECTION_INPUT
  CREATE_DATABASE: PRISMA_CREATE_DATABASE_INPUT
  CREATE_PROJECT: PRISMA_CREATE_PROJECT_INPUT
  DELETE_CONNECTION: PRISMA_DELETE_CONNECTION_INPUT
  DELETE_DATABASE: PRISMA_DELETE_DATABASE_INPUT
  DELETE_PROJECT: PRISMA_DELETE_PROJECT_INPUT
  EXECUTE_SQL_COMMAND: PRISMA_EXECUTE_SQL_COMMAND_INPUT
  EXECUTE_SQL_QUERY: PRISMA_EXECUTE_SQL_QUERY_INPUT
  GET_DATABASE: PRISMA_GET_DATABASE_INPUT
  GET_PROJECT: PRISMA_GET_PROJECT_INPUT
  INSPECT_DATABASE_SCHEMA: PRISMA_INSPECT_DATABASE_SCHEMA_INPUT
  LIST_ACCELERATE_REGIONS: PRISMA_LIST_ACCELERATE_REGIONS_INPUT
  LIST_BACKUPS: PRISMA_LIST_BACKUPS_INPUT
  LIST_CONNECTIONS: PRISMA_LIST_CONNECTIONS_INPUT
  LIST_DATABASES: PRISMA_LIST_DATABASES_INPUT
  LIST_POSTGRES_REGIONS: PRISMA_LIST_POSTGRES_REGIONS_INPUT
  LIST_PROJECTS: PRISMA_LIST_PROJECTS_INPUT
  LIST_WORKSPACES: PRISMA_LIST_WORKSPACES_INPUT
  RESTORE_BACKUP: PRISMA_RESTORE_BACKUP_INPUT
  TRANSFER_PROJECT: PRISMA_TRANSFER_PROJECT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PRISMA".
 */
export type PRISMA_TOOL_OUTPUTS = {
  CREATE_CONNECTION: PRISMA_CREATE_CONNECTION_OUTPUT
  CREATE_DATABASE: PRISMA_CREATE_DATABASE_OUTPUT
  CREATE_PROJECT: PRISMA_CREATE_PROJECT_OUTPUT
  DELETE_CONNECTION: PRISMA_DELETE_CONNECTION_OUTPUT
  DELETE_DATABASE: PRISMA_DELETE_DATABASE_OUTPUT
  DELETE_PROJECT: PRISMA_DELETE_PROJECT_OUTPUT
  EXECUTE_SQL_COMMAND: PRISMA_EXECUTE_SQL_COMMAND_OUTPUT
  EXECUTE_SQL_QUERY: PRISMA_EXECUTE_SQL_QUERY_OUTPUT
  GET_DATABASE: PRISMA_GET_DATABASE_OUTPUT
  GET_PROJECT: PRISMA_GET_PROJECT_OUTPUT
  INSPECT_DATABASE_SCHEMA: PRISMA_INSPECT_DATABASE_SCHEMA_OUTPUT
  LIST_ACCELERATE_REGIONS: PRISMA_LIST_ACCELERATE_REGIONS_OUTPUT
  LIST_BACKUPS: PRISMA_LIST_BACKUPS_OUTPUT
  LIST_CONNECTIONS: PRISMA_LIST_CONNECTIONS_OUTPUT
  LIST_DATABASES: PRISMA_LIST_DATABASES_OUTPUT
  LIST_POSTGRES_REGIONS: PRISMA_LIST_POSTGRES_REGIONS_OUTPUT
  LIST_PROJECTS: PRISMA_LIST_PROJECTS_OUTPUT
  LIST_WORKSPACES: PRISMA_LIST_WORKSPACES_OUTPUT
  RESTORE_BACKUP: PRISMA_RESTORE_BACKUP_OUTPUT
  TRANSFER_PROJECT: PRISMA_TRANSFER_PROJECT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PRISMA toolkit.
 */
export const PRISMA = {
  slug: "prisma",
  tools: {
    /**
     * Create new api key connection for database access. creates connection string with embedded credentials for application database access. returns complete connection details ready for immediate use.
     */
    CREATE_CONNECTION: "PRISMA_CREATE_CONNECTION",
    /**
     * Create new postgres database in an existing prisma project. creates database in specified region with connection strings and api keys. returns complete database details ready for immediate use.
     */
    CREATE_DATABASE: "PRISMA_CREATE_DATABASE",
    /**
     * Create new prisma project with managed postgres database. creates project in authenticated user's workspace with postgres database in specified region. returns complete project details including connection strings and api keys.
     */
    CREATE_PROJECT: "PRISMA_CREATE_PROJECT",
    /**
     * Permanently delete database connection and revoke api key access. warning: this immediately revokes database access for any applications using this connection string. ensure no critical systems depend on this connection.
     */
    DELETE_CONNECTION: "PRISMA_DELETE_CONNECTION",
    /**
     * Permanently delete prisma database and all stored data. warning: this action cannot be undone. all data in the database will be permanently destroyed. default databases typically cannot be deleted.
     */
    DELETE_DATABASE: "PRISMA_DELETE_DATABASE",
    /**
     * Permanently delete prisma project and all associated resources. warning: this action cannot be undone. all databases, environments, and project data will be permanently destroyed. use with extreme caution in production environments.
     */
    DELETE_PROJECT: "PRISMA_DELETE_PROJECT",
    /**
     * Execute sql commands that modify database data or structure. runs insert, update, delete, create table, and other data modification commands safely through postgresql driver with parameterized query support.
     */
    EXECUTE_SQL_COMMAND: "PRISMA_EXECUTE_SQL_COMMAND",
    /**
     * Execute sql select queries against prisma databases. runs read-only queries safely through postgresql driver with automatic type mapping. perfect for data analysis, schema inspection, and reporting operations.
     */
    EXECUTE_SQL_QUERY: "PRISMA_EXECUTE_SQL_QUERY",
    /**
     * Retrieve specific prisma database by id. returns database details including status, project context, and regional deployment. use for database monitoring, validation, and administrative operations.
     */
    GET_DATABASE: "PRISMA_GET_DATABASE",
    /**
     * Retrieve specific prisma project by id. returns project details including name, creation timestamp, and workspace information. use for project detail views, validation, and administrative operations.
     */
    GET_PROJECT: "PRISMA_GET_PROJECT",
    /**
     * Inspect database schema structure and table information. returns comprehensive schema details including tables, columns, data types, constraints, and relationships. essential for understanding database structure before executing queries.
     */
    INSPECT_DATABASE_SCHEMA: "PRISMA_INSPECT_DATABASE_SCHEMA",
    /**
     * Retrieve all available regions for prisma accelerate. returns regions where accelerate global database cache can be deployed. use for cache region selection to minimize latency for your users.
     */
    LIST_ACCELERATE_REGIONS: "PRISMA_LIST_ACCELERATE_REGIONS",
    /**
     * Retrieve list of available backups for a specific database. returns backup details including status, size, type, and restoration readiness. use for backup monitoring, restoration planning, and compliance auditing.
     */
    LIST_BACKUPS: "PRISMA_LIST_BACKUPS",
    /**
     * Retrieve paginated list of connections for a specific database. returns connection details including names, creation dates, and database context. use for api key management, security audits, and access control.
     */
    LIST_CONNECTIONS: "PRISMA_LIST_CONNECTIONS",
    /**
     * Retrieve paginated list of databases for a specific prisma project. returns database details including status, region, and project context. use for database discovery, monitoring, and project administration.
     */
    LIST_DATABASES: "PRISMA_LIST_DATABASES",
    /**
     * Retrieve all available regions for prisma postgres. returns regions where prisma postgres databases can be deployed with current availability status. use for region selection during database creation and capacity planning.
     */
    LIST_POSTGRES_REGIONS: "PRISMA_LIST_POSTGRES_REGIONS",
    /**
     * Retrieve paginated list of prisma projects accessible to authenticated user. returns project ids, names, workspace info, and timestamps with cursor-based pagination. use for project discovery, ui selection flows, and administrative operations.
     */
    LIST_PROJECTS: "PRISMA_LIST_PROJECTS",
    /**
     * Retrieve paginated list of prisma workspaces accessible to authenticated user. returns workspace ids, names, creation timestamps with cursor-based pagination. use for workspace discovery, ui selection flows, and administrative operations.
     */
    LIST_WORKSPACES: "PRISMA_LIST_WORKSPACES",
    /**
     * Restore database backup to new database instance. creates new database from existing backup with specified name. operation is asynchronous - monitor the returned database status for completion. restoration may take several minutes.
     */
    RESTORE_BACKUP: "PRISMA_RESTORE_BACKUP",
    /**
     * Transfer prisma project ownership to another user. changes project ownership to recipient specified by their access token. current owner loses access unless explicitly granted by new owner.
     */
    TRANSFER_PROJECT: "PRISMA_TRANSFER_PROJECT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PRISMA".
 */
export type PRISMA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PRISMA".
 */
export type PRISMA_TRIGGER_EVENTS = {}
