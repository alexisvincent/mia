// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BIGML's BIGML_CREATE_EXTERNAL_CONNECTOR tool input.
 */
type BIGML_CREATE_EXTERNAL_CONNECTOR_INPUT = {
  /**
   * SQLConnection
   * @description Connection info for PostgreSQL, MySQL, or SQL Server.
   */
  connection?: {
      /**
       * Database
       * @description Name of the database to connect to.
       */
      database: string;
      /**
       * Host
       * @description Hostname or IP address of the database server.
       */
      host: string;
      /**
       * Password
       * @description Password for authentication.
       */
      password: string;
      /**
       * Port
       * @description Port number on which the database server is listening.
       */
      port: number;
      /**
       * Ssl
       * @description Use SSL for the connection.
       * @default null
       */
      ssl: boolean | null;
      /**
       * User
       * @description Username for authentication.
       */
      user: string;
      /**
       * Verify
       * @description Verify SSL certificates.
       * @default null
       */
      verify: boolean | null;
  } | null;
  /**
   * Name
   * @description User-defined name for the external connector.
   * @default null
   */
  name: string | null;
  /**
   * Source
   * @description Type of the external data source. Allowed: 'postgresql','mysql','sqlserver','elasticsearch'. Defaults to 'postgresql'.
   * @default postgresql
   * @enum {string}
   */
  source: "postgresql" | "mysql" | "sqlserver" | "elasticsearch";
};

/**
 * Type of BIGML's BIGML_CREATE_EXTERNAL_CONNECTOR tool output.
 */
type BIGML_CREATE_EXTERNAL_CONNECTOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description HTTP status code of the creation operation.
       */
      code: number;
      /**
       * Error
       * @description Error details if creation failed.
       * @default null
       */
      error: {
          [key: string]: string;
      } | null;
      /**
       * Location
       * @description URL of the created connector resource.
       */
      location: string;
      /**
       * Object
       * @description Full external connector resource details.
       */
      object: {
          /**
           * Category
           * @description Resource category code.
           */
          category: number;
          /**
           * SQLConnection
           * @description Connection info for PostgreSQL, MySQL, or SQL Server.
           */
          connection: {
              /**
               * Database
               * @description Name of the database to connect to.
               */
              database: string;
              /**
               * Host
               * @description Hostname or IP address of the database server.
               */
              host: string;
              /**
               * Password
               * @description Password for authentication.
               */
              password: string;
              /**
               * Port
               * @description Port number on which the database server is listening.
               */
              port: number;
              /**
               * Ssl
               * @description Use SSL for the connection.
               * @default null
               */
              ssl: boolean | null;
              /**
               * User
               * @description Username for authentication.
               */
              user: string;
              /**
               * Verify
               * @description Verify SSL certificates.
               * @default null
               */
              verify: boolean | null;
          } | null;
          /**
           * Created
           * @description ISO 8601 creation timestamp.
           */
          created: string;
          /**
           * Name
           * @description Name of the external connector.
           * @default null
           */
          name: string | null;
          /**
           * Resource
           * @description Resource identifier.
           */
          resource: string;
          /**
           * Source
           * @description Type of the external data source.
           * @enum {string}
           */
          source: "postgresql" | "mysql" | "sqlserver" | "elasticsearch";
          /**
           * Updated
           * @description ISO 8601 last update timestamp.
           */
          updated: string;
      };
      /**
       * Resource
       * @description Resource identifier of the external connector.
       */
      resource: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BIGML's BIGML_CREATE_PROJECT tool input.
 */
type BIGML_CREATE_PROJECT_INPUT = {
  /**
   * Category
   * @description Category code for project domain (see BigML category codes).
   * @default null
   */
  category: number | null;
  /**
   * Description
   * @description Description of the project up to 8192 characters.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name for the new project. Defaults to server-generated name.
   * @default null
   */
  name: string | null;
  /**
   * Tags
   * @description List of tags to classify the project.
   * @default null
   */
  tags: string[] | null;
  /**
   * Webhook
   * @description Configuration for project webhooks.
   * @default null
   */
  webhook: {
      /**
       * Secret
       * @description Optional shared secret for webhook authentication.
       * @default null
       */
      secret: string | null;
      /**
       * Url
       * @description Webhook URL to receive project notifications.
       */
      url: string;
  } | null;
};

/**
 * Type of BIGML's BIGML_CREATE_PROJECT tool output.
 */
type BIGML_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Category code of the project.
       */
      category: number;
      /**
       * Code
       * @description HTTP status code of the creation operation.
       */
      code: number;
      /**
       * Configuration
       * @description Project configuration object.
       * @default null
       */
      configuration: {
          [key: string]: unknown;
      } | null;
      /**
       * Configuration Status
       * @description Whether the project configuration is active.
       */
      configuration_status: boolean;
      /**
       * Created
       * @description ISO 8601 timestamp when the project was created.
       */
      created: string;
      /**
       * Creator
       * @description User that created the project.
       */
      creator: string;
      /**
       * Description
       * @description Description of the project.
       */
      description: string;
      /**
       * Execution Id
       * @description Execution ID that built the project.
       * @default null
       */
      execution_id: string | null;
      /**
       * Execution Status
       * @description Whether the execution is available.
       * @default null
       */
      execution_status: boolean | null;
      /**
       * Manage Permission
       * @description Manage permission roles for the project.
       */
      manage_permission: {
          [key: string]: unknown;
      }[];
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Name Options
       * @description Additional name options information.
       */
      name_options: string;
      /**
       * Private
       * @description Whether the project is private.
       */
      private: boolean;
      /**
       * Resource
       * @description Resource identifier of the project.
       */
      resource: string;
      /**
       * Stats
       * @description Statistics object keyed by resource type counts.
       */
      stats: {
          /**
           * Anomalies
           * @description Count of resources of a specific type.
           */
          anomalies: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Anomalyscores
           * @description Count of resources of a specific type.
           */
          anomalyscores: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Associations
           * @description Count of resources of a specific type.
           */
          associations: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Associationsets
           * @description Count of resources of a specific type.
           */
          associationsets: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Batchanomalyscores
           * @description Count of resources of a specific type.
           */
          batchanomalyscores: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Batchcentroids
           * @description Count of resources of a specific type.
           */
          batchcentroids: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Batchpredictions
           * @description Count of resources of a specific type.
           */
          batchpredictions: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Batchprojections
           * @description Count of resources of a specific type.
           */
          batchprojections: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Batchtopicdistributions
           * @description Count of resources of a specific type.
           */
          batchtopicdistributions: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Centroids
           * @description Count of resources of a specific type.
           */
          centroids: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Clusters
           * @description Count of resources of a specific type.
           */
          clusters: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Composites
           * @description Count of resources of a specific type.
           */
          composites: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Configurations
           * @description Count of resources of a specific type.
           */
          configurations: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Correlations
           * @description Count of resources of a specific type.
           */
          correlations: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Datasets
           * @description Count of resources of a specific type.
           */
          datasets: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Deepnets
           * @description Count of resources of a specific type.
           */
          deepnets: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Ensembles
           * @description Count of resources of a specific type.
           */
          ensembles: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Evaluations
           * @description Count of resources of a specific type.
           */
          evaluations: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Executions
           * @description Count of resources of a specific type.
           */
          executions: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Externalconnectors
           * @description Count of resources of a specific type.
           */
          externalconnectors: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Forecasts
           * @description Count of resources of a specific type.
           */
          forecasts: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Fusions
           * @description Count of resources of a specific type.
           */
          fusions: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Libraries
           * @description Count of resources of a specific type.
           */
          libraries: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Linearregressions
           * @description Count of resources of a specific type.
           */
          linearregressions: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Logisticregressions
           * @description Count of resources of a specific type.
           */
          logisticregressions: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Models
           * @description Count of resources of a specific type.
           */
          models: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Optimls
           * @description Count of resources of a specific type.
           */
          optimls: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Pca
           * @description Count of resources of a specific type.
           */
          pca: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Predictions
           * @description Count of resources of a specific type.
           */
          predictions: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Projections
           * @description Count of resources of a specific type.
           */
          projections: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Samples
           * @description Count of resources of a specific type.
           */
          samples: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Scripts
           * @description Count of resources of a specific type.
           */
          scripts: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Sources
           * @description Count of resources of a specific type.
           */
          sources: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Statisticaltests
           * @description Count of resources of a specific type.
           */
          statisticaltests: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Timeseries
           * @description Count of resources of a specific type.
           */
          timeseries: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Topicdistributions
           * @description Count of resources of a specific type.
           */
          topicdistributions: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
          /**
           * Topicmodels
           * @description Count of resources of a specific type.
           */
          topicmodels: {
              /**
               * Count
               * @description Count of resources of a specific type.
               */
              count: number;
          };
      };
      /**
       * Status
       * @description Status object of the project resource.
       */
      status: {
          /**
           * Code
           * @description Status code of the project resource.
           */
          code: number;
          /**
           * Message
           * @description Human-readable status message.
           */
          message: string;
          /**
           * Progress
           * @description Progress of the project creation from 0 to 1.
           */
          progress: number;
      };
      /**
       * Tags
       * @description List of user-defined tags for the project.
       */
      tags: string[];
      /**
       * Type
       * @description Type code for the project resource.
       */
      type: number;
      /**
       * Updated
       * @description ISO 8601 timestamp of last update.
       */
      updated: string;
      /**
       * User Metadata
       * @description User-provided metadata for the project.
       */
      user_metadata: {
          [key: string]: unknown;
      };
      /**
       * Webhook
       * @description Configuration for project webhooks.
       * @default null
       */
      webhook: {
          /**
           * Secret
           * @description Optional shared secret for webhook authentication.
           * @default null
           */
          secret: string | null;
          /**
           * Url
           * @description Webhook URL to receive project notifications.
           */
          url: string;
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
 * Type of BIGML's BIGML_DELETE_PROJECT tool input.
 */
type BIGML_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description Project ID suffix to delete, e.g., '5e4f30a81b3a1270d20000b5'. Do not include the 'project/' prefix.
   */
  project_id?: string;
};

/**
 * Type of BIGML's BIGML_DELETE_PROJECT tool output.
 */
type BIGML_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description HTTP status code of the delete operation (204 means success).
       */
      code: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BIGML's BIGML_GET_EXTERNAL_CONNECTOR tool input.
 */
type BIGML_GET_EXTERNAL_CONNECTOR_INPUT = {
  /**
   * Id
   * @description The resource identifier of the external connector to retrieve, in the format 'externalconnector/XXXXXXXXXXXXXXXXXXXXXXXX'.
   */
  id?: string;
};

/**
 * Type of BIGML's BIGML_GET_EXTERNAL_CONNECTOR tool output.
 */
type BIGML_GET_EXTERNAL_CONNECTOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description HTTP status code returned by BigML for the retrieval operation.
       */
      code: number;
      /**
       * Object
       * @description Full JSON representation of the external connector resource.
       */
      object: {
          [key: string]: unknown;
      };
      /**
       * Resource
       * @description Identifier of the retrieved external connector resource.
       */
      resource: string;
      /**
       * Status
       * @description Processing status including code and message.
       */
      status: {
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
 * Type of BIGML's BIGML_GET_PROJECT tool input.
 */
type BIGML_GET_PROJECT_INPUT = {
  /**
   * Id
   * @description The resource identifier of the project to retrieve, in the format 'project/XXXXXXXXXXXXXXXXXXXXXXXX'.
   */
  id?: string;
};

/**
 * Type of BIGML's BIGML_GET_PROJECT tool output.
 */
type BIGML_GET_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description HTTP status code of the retrieve operation.
       */
      code: number;
      /**
       * Object
       * @description Full project resource object from BigML.
       */
      object: {
          [key: string]: unknown;
      };
      /**
       * Resource
       * @description Identifier of the retrieved project resource.
       */
      resource: string;
      /**
       * Status
       * @description Processing status containing code, message, and progress.
       */
      status: {
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
 * Type of BIGML's BIGML_LIST_CORRELATIONS tool input.
 */
type BIGML_LIST_CORRELATIONS_INPUT = {
  /**
   * Limit
   * @description Maximum number of correlations to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based index of the first correlation to return.
   * @default null
   */
  offset: number | null;
  /**
   * Sort By
   * @description Field to sort by; prefix with '-' for descending order, e.g., '-created', 'name', or 'resource'.
   * @default null
   */
  sort_by: string | null;
};

/**
 * Type of BIGML's BIGML_LIST_CORRELATIONS tool output.
 */
type BIGML_LIST_CORRELATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Correlations
       * @description List of correlation resources.
       */
      correlations: {
          /**
           * Created
           * @description Creation datetime in ISO-8601 format.
           */
          created: string;
          /**
           * Name
           * @description Name of the correlation resource.
           * @default null
           */
          name: string | null;
          /**
           * Resource
           * @description Identifier of the correlation, e.g. 'correlation/XXXXXXXX'.
           */
          resource: string;
          /**
           * Status
           * @description Status information of the correlation.
           */
          status: {
              /**
               * Code
               * @description Status code of the correlation resource.
               */
              code: number;
              /**
               * Message
               * @description Human-readable status message.
               */
              message: string;
              /**
               * Progress
               * @description Processing progress, between 0 and 1.
               */
              progress: number;
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
 * Type map of all available tool input types for toolkit "BIGML".
 */
export type BIGML_TOOL_INPUTS = {
  CREATE_EXTERNAL_CONNECTOR: BIGML_CREATE_EXTERNAL_CONNECTOR_INPUT
  CREATE_PROJECT: BIGML_CREATE_PROJECT_INPUT
  DELETE_PROJECT: BIGML_DELETE_PROJECT_INPUT
  GET_EXTERNAL_CONNECTOR: BIGML_GET_EXTERNAL_CONNECTOR_INPUT
  GET_PROJECT: BIGML_GET_PROJECT_INPUT
  LIST_CORRELATIONS: BIGML_LIST_CORRELATIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BIGML".
 */
export type BIGML_TOOL_OUTPUTS = {
  CREATE_EXTERNAL_CONNECTOR: BIGML_CREATE_EXTERNAL_CONNECTOR_OUTPUT
  CREATE_PROJECT: BIGML_CREATE_PROJECT_OUTPUT
  DELETE_PROJECT: BIGML_DELETE_PROJECT_OUTPUT
  GET_EXTERNAL_CONNECTOR: BIGML_GET_EXTERNAL_CONNECTOR_OUTPUT
  GET_PROJECT: BIGML_GET_PROJECT_OUTPUT
  LIST_CORRELATIONS: BIGML_LIST_CORRELATIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BIGML toolkit.
 */
export const BIGML = {
  slug: "bigml",
  tools: {
    /**
     * Tool to create a new external connector for data sources. use after configuring external databases or search indices.
     */
    CREATE_EXTERNAL_CONNECTOR: "BIGML_CREATE_EXTERNAL_CONNECTOR",
    /**
     * Tool to create a new project. use when you need to group related bigml resources into a project.
     */
    CREATE_PROJECT: "BIGML_CREATE_PROJECT",
    /**
     * Tool to delete an existing project. use when you need to permanently remove a project resource after confirming it is not in use by other resources.
     */
    DELETE_PROJECT: "BIGML_DELETE_PROJECT",
    /**
     * Tool to retrieve details of an external connector. use after creating or listing external connectors to inspect its state.
     */
    GET_EXTERNAL_CONNECTOR: "BIGML_GET_EXTERNAL_CONNECTOR",
    /**
     * Tool to retrieve details of a project by id. use when you need to inspect project metadata before analysis.
     */
    GET_PROJECT: "BIGML_GET_PROJECT",
    /**
     * Tool to list correlation resources. use when you need to browse or paginate existing correlations for the authenticated user.
     */
    LIST_CORRELATIONS: "BIGML_LIST_CORRELATIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BIGML".
 */
export type BIGML_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BIGML".
 */
export type BIGML_TRIGGER_EVENTS = {}
