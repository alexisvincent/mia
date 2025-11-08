// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AGENTY's AGENTY_AGENTS_CLONE_BY_ID tool input.
 */
type AGENTY_AGENTS_CLONE_BY_ID_INPUT = {
  /**
   * Agent Id
   * @description ID of the agent to clone
   */
  agent_id?: string;
  /**
   * Start
   * @description Whether to auto-start the cloned agent
   * @default null
   */
  start: boolean | null;
};

/**
 * Type of AGENTY's AGENTY_AGENTS_CLONE_BY_ID tool output.
 */
type AGENTY_AGENTS_CLONE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account identifier owning the agent
       */
      account_id: number;
      /**
       * Agent Id
       * @description Agent unique identifier
       */
      agent_id: string;
      /**
       * Config
       * @description Configuration object for the agent
       */
      config: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the agent was created
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description Description of the agent
       * @default null
       */
      description: string | null;
      /**
       * Icon
       * @description URL of the agent icon
       * @default null
       */
      icon: string | null;
      /**
       * Is Managed
       * @description Whether the agent is managed
       * @default null
       */
      is_managed: boolean | null;
      /**
       * Is Public
       * @description Whether the agent is public
       * @default null
       */
      is_public: boolean | null;
      /**
       * Name
       * @description Name of the agent
       */
      name: string;
      /**
       * Project Id
       * @description Project identifier associated with the agent
       */
      project_id: number;
      /**
       * Scheduler
       * @description Scheduler configuration for the agent
       * @default null
       */
      scheduler: {
          /**
           * Description
           * @description Human-readable description of schedule
           * @default null
           */
          description: string | null;
          /**
           * Expression
           * @description CRON expression or interval description
           * @default null
           */
          expression: string | null;
          /**
           * Frequency
           * @description Frequency for interval scheduler
           * @default null
           */
          frequency: number | null;
          /**
           * Is Enabled
           * @description Whether the schedule is enabled
           * @default null
           */
          is_enabled: boolean | null;
          /**
           * Type
           * @description Scheduler type (e.g., cron, interval)
           * @default null
           */
          type: string | null;
      } | null;
      /**
       * Scripts
       * @description Scripts configured for the agent
       * @default null
       */
      scripts: {
          /**
           * ScriptModel
           * @description Post-execution script
           * @default null
           */
          post: {
              /**
               * Code
               * @description Script code to run
               * @default null
               */
              code: string | null;
              /**
               * Is Enabled
               * @description Whether this script is enabled
               * @default null
               */
              is_enabled: boolean | null;
              /**
               * Is Parallel Execution
               * @description Whether to run this script in parallel
               * @default null
               */
              is_parallel_execution: boolean | null;
          } | null;
          /**
           * ScriptModel
           * @description Pre-execution script
           * @default null
           */
          pre: {
              /**
               * Code
               * @description Script code to run
               * @default null
               */
              code: string | null;
              /**
               * Is Enabled
               * @description Whether this script is enabled
               * @default null
               */
              is_enabled: boolean | null;
              /**
               * Is Parallel Execution
               * @description Whether to run this script in parallel
               * @default null
               */
              is_parallel_execution: boolean | null;
          } | null;
      } | null;
      /**
       * Tags
       * @description List of tags associated with the agent
       * @default null
       */
      tags: string[] | null;
      /**
       * Type
       * @description Type of the agent
       * @enum {string}
       */
      type: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the agent was last updated
       * @default null
       */
      updated_at: string | null;
      /**
       * User Id
       * @description User identifier who created the agent
       */
      user_id: number;
      /**
       * Version
       * @description Version number of the agent
       * @default null
       */
      version: number | null;
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
 * Type of AGENTY's AGENTY_AGENTS_CONTROLLER_CREATE_AGENT tool input.
 */
type AGENTY_AGENTS_CONTROLLER_CREATE_AGENT_INPUT = {
  /**
   * Account Id
   * @description Account ID associated with the agent
   * @default null
   */
  account_id: number | null;
  /**
   * Agent Id
   * @description Unique agent ID. If omitted, generated by server
   * @default null
   */
  agent_id: string | null;
  /**
   * Config
   * @description Configuration object for the agent
   */
  config?: {
      [key: string]: unknown;
  };
  /**
   * Created At
   * @description Creation timestamp
   * @default null
   */
  created_at: string | null;
  /**
   * Description
   * @description Description of the agent, max 1000 characters
   * @default null
   */
  description: string | null;
  /**
   * Icon
   * @description URL or name of the icon
   * @default null
   */
  icon: string | null;
  /**
   * Is Managed
   * @description Whether the agent is managed by system
   * @default null
   */
  is_managed: boolean | null;
  /**
   * Is Public
   * @description Whether the agent is public
   * @default null
   */
  is_public: boolean | null;
  /**
   * Name
   * @description Agent name, max 100 characters
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID to associate with the agent
   * @default null
   */
  project_id: number | null;
  /**
   * Scheduler
   * @description Scheduler configuration for the agent
   * @default null
   */
  scheduler: {
      /**
       * Description
       * @description Human-readable description of the schedule
       * @default null
       */
      description: string | null;
      /**
       * Expression
       * @description CRON expression for the schedule
       * @default null
       */
      expression: string | null;
      /**
       * Frequency
       * @description Interval frequency in seconds
       * @default null
       */
      frequency: number | null;
      /**
       * Is Enabled
       * @description Whether the schedule is enabled
       * @default null
       */
      is_enabled: boolean | null;
      /**
       * Type
       * @description Schedule type (e.g., 'cron' or 'interval')
       * @default null
       */
      type: string | null;
  } | null;
  /**
   * Scripts
   * @description Scripts to run pre- and post-execution
   * @default null
   */
  scripts: {
      /**
       * Script
       * @description Post-execution script
       * @default null
       */
      post: {
          /**
           * Code
           * @description Script code
           * @default null
           */
          code: string | null;
          /**
           * Is Enabled
           * @description Whether the script is enabled
           * @default null
           */
          is_enabled: boolean | null;
          /**
           * Is Parallel Execution
           * @description Whether post script runs in parallel
           * @default null
           */
          is_parallel_execution: boolean | null;
      } | null;
      /**
       * Script
       * @description Pre-execution script
       * @default null
       */
      pre: {
          /**
           * Code
           * @description Script code
           * @default null
           */
          code: string | null;
          /**
           * Is Enabled
           * @description Whether the script is enabled
           * @default null
           */
          is_enabled: boolean | null;
          /**
           * Is Parallel Execution
           * @description Whether post script runs in parallel
           * @default null
           */
          is_parallel_execution: boolean | null;
      } | null;
  } | null;
  /**
   * Start
   * @description Auto-start the agent after creation (true or false)
   * @default null
   */
  start: boolean | null;
  /**
   * Tags
   * @description List of tags for categorizing the agent
   * @default null
   */
  tags: string[] | null;
  /**
   * Type
   * @description Type of the agent
   * @enum {string}
   */
  type?: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
  /**
   * Updated At
   * @description Last update timestamp
   * @default null
   */
  updated_at: string | null;
  /**
   * User Id
   * @description User ID associated with the agent
   * @default null
   */
  user_id: number | null;
  /**
   * Version
   * @description Version number of the agent
   * @default null
   */
  version: number | null;
};

/**
 * Type of AGENTY's AGENTY_AGENTS_CONTROLLER_CREATE_AGENT tool output.
 */
type AGENTY_AGENTS_CONTROLLER_CREATE_AGENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the agent
       */
      account_id: number;
      /**
       * Agent Id
       * @description Unique identifier for the agent
       */
      agent_id: string;
      /**
       * Config
       * @description Configuration object for the agent
       */
      config: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description Creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description Agent description
       * @default null
       */
      description: string | null;
      /**
       * Icon
       * @description Agent icon
       * @default null
       */
      icon: string | null;
      /**
       * Is Managed
       * @description Whether the agent is system-managed
       * @default null
       */
      is_managed: boolean | null;
      /**
       * Is Public
       * @description Whether the agent is public
       * @default null
       */
      is_public: boolean | null;
      /**
       * Name
       * @description Agent name
       */
      name: string;
      /**
       * Project Id
       * @description Project ID associated with the agent
       */
      project_id: number;
      /**
       * Scheduler
       * @description Agent scheduler configuration
       * @default null
       */
      scheduler: {
          /**
           * Description
           * @description Human-readable description of the schedule
           * @default null
           */
          description: string | null;
          /**
           * Expression
           * @description CRON expression for the schedule
           * @default null
           */
          expression: string | null;
          /**
           * Frequency
           * @description Interval frequency in seconds
           * @default null
           */
          frequency: number | null;
          /**
           * Is Enabled
           * @description Whether the schedule is enabled
           * @default null
           */
          is_enabled: boolean | null;
          /**
           * Type
           * @description Schedule type (e.g., 'cron' or 'interval')
           * @default null
           */
          type: string | null;
      } | null;
      /**
       * Scripts
       * @description Agent scripts configuration
       * @default null
       */
      scripts: {
          /**
           * Script
           * @description Post-execution script
           * @default null
           */
          post: {
              /**
               * Code
               * @description Script code
               * @default null
               */
              code: string | null;
              /**
               * Is Enabled
               * @description Whether the script is enabled
               * @default null
               */
              is_enabled: boolean | null;
              /**
               * Is Parallel Execution
               * @description Whether post script runs in parallel
               * @default null
               */
              is_parallel_execution: boolean | null;
          } | null;
          /**
           * Script
           * @description Pre-execution script
           * @default null
           */
          pre: {
              /**
               * Code
               * @description Script code
               * @default null
               */
              code: string | null;
              /**
               * Is Enabled
               * @description Whether the script is enabled
               * @default null
               */
              is_enabled: boolean | null;
              /**
               * Is Parallel Execution
               * @description Whether post script runs in parallel
               * @default null
               */
              is_parallel_execution: boolean | null;
          } | null;
      } | null;
      /**
       * Tags
       * @description Tags for the agent
       * @default null
       */
      tags: string[] | null;
      /**
       * Type
       * @description Type of the agent
       * @enum {string}
       */
      type: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
      /**
       * Updated At
       * @description Last update timestamp
       * @default null
       */
      updated_at: string | null;
      /**
       * User Id
       * @description User ID associated with the agent
       */
      user_id: number;
      /**
       * Version
       * @description Agent version
       * @default null
       */
      version: number | null;
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
 * Type of AGENTY's AGENTY_AGENTS_CONTROLLER_GET_TEMPLATES tool input.
 */
type AGENTY_AGENTS_CONTROLLER_GET_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return. Default is 1000.
   * @default 1000
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip. Default is 0.
   * @default 0
   */
  offset: number | null;
  /**
   * Order
   * @description Sort direction: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field name to sort by.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_AGENTS_CONTROLLER_GET_TEMPLATES tool output.
 */
type AGENTY_AGENTS_CONTROLLER_GET_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID owner of template.
       */
      account_id: number;
      /**
       * Agent Id
       * @description Unique template identifier.
       */
      agent_id: string;
      /**
       * Config
       * @description Agent configuration.
       */
      config: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description Creation timestamp.
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description Template description.
       * @default null
       */
      description: string | null;
      /**
       * Icon
       * @description Icon URL of the agent.
       * @default null
       */
      icon: string | null;
      /**
       * Is Managed
       * @description Indicates if template is managed by Agenty.
       */
      is_managed: boolean;
      /**
       * Is Public
       * @description Indicates if template is public.
       */
      is_public: boolean;
      /**
       * Name
       * @description Template name.
       */
      name: string;
      /**
       * Project Id
       * @description Project ID associated with template.
       */
      project_id: number;
      /**
       * Scheduler
       * @description Scheduler configuration.
       * @default null
       */
      scheduler: {
          [key: string]: unknown;
      } | null;
      /**
       * Scripts
       * @description Pre and post processing scripts.
       * @default null
       */
      scripts: {
          [key: string]: unknown;
      } | null;
      /**
       * Tags
       * @description Tags associated with the template.
       */
      tags: string[];
      /**
       * Type
       * @description Type of the agent.
       * @enum {string}
       */
      type: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
      /**
       * Updated At
       * @description Last updated timestamp.
       * @default null
       */
      updated_at: string | null;
      /**
       * User Id
       * @description User ID owner of template.
       */
      user_id: number;
      /**
       * Version
       * @description Version number.
       */
      version: number;
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
 * Type of AGENTY's AGENTY_AGENTS_DELETE_BY_ID tool input.
 */
type AGENTY_AGENTS_DELETE_BY_ID_INPUT = {
  /**
   * Agent Id
   * @description Unique identifier of the agent to delete
   */
  agent_id?: string;
};

/**
 * Type of AGENTY's AGENTY_AGENTS_DELETE_BY_ID tool output.
 */
type AGENTY_AGENTS_DELETE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Outcome message of the deletion, e.g. '1 agent(s) deleted successfully'
       */
      message: string;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of AGENTY's AGENTY_AGENTS_GET_ALL tool input.
 */
type AGENTY_AGENTS_GET_ALL_INPUT = {
  /**
   * Limit
   * @description Maximum number of records to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before starting to return results.
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Order of sorting; possible values are 'asc' (ascending) and 'desc' (descending).
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field by which to sort the results, e.g., 'name' or 'created_at'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_AGENTS_GET_ALL tool output.
 */
type AGENTY_AGENTS_GET_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of agents returned in the response.
       */
      limit: number;
      /**
       * Offset
       * @description Number of records skipped before starting to return results.
       */
      offset: number;
      /**
       * Result
       * @description List of agent objects.
       */
      result: {
          /**
           * Agent Id
           * @description Unique identifier for the agent.
           */
          agent_id: string;
          /**
           * Created At
           * @description Timestamp when the agent was created (ISO 8601 format).
           */
          created_at: string;
          /**
           * Description
           * @description Description of the agent.
           */
          description: string;
          /**
           * Icon
           * @description URL to the agent's icon, if available.
           * @default null
           */
          icon: string | null;
          /**
           * Is Public
           * @description Indicates if the agent is public.
           */
          is_public: boolean;
          /**
           * Last Job
           * @description Information about the last job executed by the agent, if any.
           * @default null
           */
          last_job: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Name of the agent.
           */
          name: string;
          /**
           * Project Id
           * @description Identifier for the project associated with the agent, if any.
           * @default null
           */
          project_id: string | null;
          /**
           * Scheduler
           * @description Scheduler configuration for the agent, if any.
           * @default null
           */
          scheduler: {
              [key: string]: unknown;
          } | null;
          /**
           * Tags
           * @description List of tags associated with the agent.
           */
          tags: string[];
          /**
           * Type
           * @description Type of the agent (e.g., 'scraping').
           */
          type: string;
          /**
           * Updated At
           * @description Timestamp when the agent was last updated, if applicable (ISO 8601 format).
           * @default null
           */
          updated_at: string | null;
          /**
           * Version
           * @description Version number of the agent.
           */
          version: number;
      }[];
      /**
       * Returned
       * @description Number of agents returned in the current response.
       */
      returned: number;
      /**
       * Total
       * @description Total number of agents.
       */
      total: number;
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
 * Type of AGENTY's AGENTY_AGENTS_GET_BY_ID tool input.
 */
type AGENTY_AGENTS_GET_BY_ID_INPUT = {
  /**
   * Agent Id
   * @description Unique identifier of the agent to fetch.
   */
  agent_id?: string;
};

/**
 * Type of AGENTY's AGENTY_AGENTS_GET_BY_ID tool output.
 */
type AGENTY_AGENTS_GET_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID the agent belongs to.
       */
      account_id: number;
      /**
       * Agent Id
       * @description Unique identifier of the agent.
       */
      agent_id: string;
      /**
       * Config
       * @description Configuration object of the agent.
       */
      config: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO8601 timestamp when the agent was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the agent.
       * @default null
       */
      description: string | null;
      /**
       * Icon
       * @description URL of the agent icon if set.
       * @default null
       */
      icon: string | null;
      /**
       * Is Managed
       * @description Whether the agent is managed by the account.
       */
      is_managed: boolean;
      /**
       * Is Public
       * @description Whether the agent is public.
       */
      is_public: boolean;
      /**
       * Name
       * @description Name of the agent.
       */
      name: string;
      /**
       * Project Id
       * @description Project ID if the agent is part of a project.
       * @default null
       */
      project_id: number | null;
      /**
       * Scheduler
       * @description Scheduler settings of the agent.
       * @default null
       */
      scheduler: {
          [key: string]: unknown;
      } | null;
      /**
       * Scripts
       * @description Scripts associated with the agent.
       * @default null
       */
      scripts: {
          [key: string]: unknown;
      } | null;
      /**
       * Tags
       * @description List of tags assigned to the agent.
       */
      tags: string[];
      /**
       * Type
       * @description Type of the agent (e.g., scraping, monitoring).
       */
      type: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the agent was last updated.
       * @default null
       */
      updated_at: string | null;
      /**
       * User Id
       * @description User ID who owns the agent.
       */
      user_id: number;
      /**
       * Version
       * @description Version number of the agent configuration.
       */
      version: number;
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
 * Type of AGENTY's AGENTY_AGENTS_UPDATE_BY_ID tool input.
 */
type AGENTY_AGENTS_UPDATE_BY_ID_INPUT = {
  /**
   * Account Id
   * @description Account ID that owns this agent.
   * @default null
   */
  account_id: number | null;
  /**
   * Agent Id
   * @description Unique identifier of the agent to update.
   */
  agent_id?: string;
  /**
   * Config
   * @description Configuration object specific to the agent type.
   */
  config?: {
      [key: string]: unknown;
  };
  /**
   * Created At
   * @description ISO timestamp when the agent was created.
   * @default null
   */
  created_at: string | null;
  /**
   * Description
   * @description Agent description (max 1000 characters).
   * @default null
   */
  description: string | null;
  /**
   * Icon
   * @description URL or identifier for the agent icon.
   * @default null
   */
  icon: string | null;
  /**
   * Is Managed
   * @description Whether the agent is managed by Agenty.
   * @default null
   */
  is_managed: boolean | null;
  /**
   * Is Public
   * @description Whether the agent is publicly visible.
   * @default null
   */
  is_public: boolean | null;
  /**
   * Name
   * @description Agent name (max 100 characters).
   */
  name?: string;
  /**
   * Project Id
   * @description Project ID under which the agent is grouped.
   * @default null
   */
  project_id: number | null;
  /**
   * Scheduler
   * @description Optional scheduling settings.
   * @default null
   */
  scheduler: {
      /**
       * Description
       * @description Auto-generated human-readable description.
       * @default null
       */
      description: string | null;
      /**
       * Expression
       * @description Valid cron expression or interval string.
       * @default null
       */
      expression: string | null;
      /**
       * Frequency
       * @description Frequency in seconds for interval scheduler.
       * @default null
       */
      frequency: number | null;
      /**
       * Is Enabled
       * @description Whether the schedule is enabled.
       * @default null
       */
      is_enabled: boolean | null;
      /**
       * Type
       * @description Scheduler type, either cron or interval.
       * @enum {string}
       */
      type: "cron" | "interval";
  } | null;
  /**
   * Scripts
   * @description Optional pre/post execution scripts.
   * @default null
   */
  scripts: {
      /**
       * Script
       * @description Post-run script configuration.
       * @default null
       */
      post: {
          /**
           * Code
           * @description Script code to execute.
           */
          code: string;
          /**
           * Is Enabled
           * @description Whether this script is active.
           */
          is_enabled: boolean;
          /**
           * Is Parallel Execution
           * @description Allow parallel execution (post script).
           * @default null
           */
          is_parallel_execution: boolean | null;
      } | null;
      /**
       * Script
       * @description Pre-run script configuration.
       * @default null
       */
      pre: {
          /**
           * Code
           * @description Script code to execute.
           */
          code: string;
          /**
           * Is Enabled
           * @description Whether this script is active.
           */
          is_enabled: boolean;
          /**
           * Is Parallel Execution
           * @description Allow parallel execution (post script).
           * @default null
           */
          is_parallel_execution: boolean | null;
      } | null;
  } | null;
  /**
   * Tags
   * @description List of tags for categorization.
   * @default null
   */
  tags: string[] | null;
  /**
   * Type
   * @description Agent type.
   * @enum {string}
   */
  type?: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
  /**
   * Updated At
   * @description ISO timestamp when the agent was last updated.
   * @default null
   */
  updated_at: string | null;
  /**
   * User Id
   * @description User ID that created or owns this agent.
   * @default null
   */
  user_id: number | null;
  /**
   * Version
   * @description Agent version number.
   * @default null
   */
  version: number | null;
};

/**
 * Type of AGENTY's AGENTY_AGENTS_UPDATE_BY_ID tool output.
 */
type AGENTY_AGENTS_UPDATE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID that owns this agent.
       */
      account_id: number;
      /**
       * Agent Id
       * @description Unique identifier of the agent.
       */
      agent_id: string;
      /**
       * Config
       * @description Agent configuration.
       */
      config: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO timestamp when the agent was created.
       */
      created_at: string;
      /**
       * Description
       * @description Agent description.
       * @default null
       */
      description: string | null;
      /**
       * Icon
       * @description Agent icon URL or identifier.
       * @default null
       */
      icon: string | null;
      /**
       * Is Managed
       * @description Whether the agent is managed by Agenty.
       */
      is_managed: boolean;
      /**
       * Is Public
       * @description Whether the agent is publicly visible.
       */
      is_public: boolean;
      /**
       * Name
       * @description Agent name.
       */
      name: string;
      /**
       * Project Id
       * @description Project ID under which the agent is grouped.
       */
      project_id: number;
      /**
       * Scheduler
       * @description Agent schedule settings.
       * @default null
       */
      scheduler: {
          /**
           * Description
           * @description Auto-generated human-readable description.
           * @default null
           */
          description: string | null;
          /**
           * Expression
           * @description Valid cron expression or interval string.
           * @default null
           */
          expression: string | null;
          /**
           * Frequency
           * @description Frequency in seconds for interval scheduler.
           * @default null
           */
          frequency: number | null;
          /**
           * Is Enabled
           * @description Whether the schedule is enabled.
           * @default null
           */
          is_enabled: boolean | null;
          /**
           * Type
           * @description Scheduler type, either cron or interval.
           * @enum {string}
           */
          type: "cron" | "interval";
      } | null;
      /**
       * Scripts
       * @description Agent script settings.
       * @default null
       */
      scripts: {
          /**
           * Script
           * @description Post-run script configuration.
           * @default null
           */
          post: {
              /**
               * Code
               * @description Script code to execute.
               */
              code: string;
              /**
               * Is Enabled
               * @description Whether this script is active.
               */
              is_enabled: boolean;
              /**
               * Is Parallel Execution
               * @description Allow parallel execution (post script).
               * @default null
               */
              is_parallel_execution: boolean | null;
          } | null;
          /**
           * Script
           * @description Pre-run script configuration.
           * @default null
           */
          pre: {
              /**
               * Code
               * @description Script code to execute.
               */
              code: string;
              /**
               * Is Enabled
               * @description Whether this script is active.
               */
              is_enabled: boolean;
              /**
               * Is Parallel Execution
               * @description Allow parallel execution (post script).
               * @default null
               */
              is_parallel_execution: boolean | null;
          } | null;
      } | null;
      /**
       * Tags
       * @description List of agent tags.
       */
      tags: string[];
      /**
       * Type
       * @description Agent type.
       * @enum {string}
       */
      type: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
      /**
       * Updated At
       * @description ISO timestamp when the agent was last updated.
       */
      updated_at: string;
      /**
       * User Id
       * @description User ID that created or owns this agent.
       */
      user_id: number;
      /**
       * Version
       * @description Agent version number.
       */
      version: number;
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
 * Type of AGENTY's AGENTY_API_KEYS_CONTROLLER_CREATE_API_KEYS tool input.
 */
type AGENTY_API_KEYS_CONTROLLER_CREATE_API_KEYS_INPUT = {
  /**
   * Is Enabled
   * @description Whether the API key should be enabled upon creation
   * @default true
   */
  is_enabled: boolean | null;
  /**
   * Name
   * @description Name of the API key
   */
  name?: string;
  /**
   * Role
   * @description Role to assign to the API key
   * @enum {string}
   */
  role?: "Owner" | "Admin" | "Manager" | "Viewer" | "Accountant";
};

/**
 * Type of AGENTY's AGENTY_API_KEYS_CONTROLLER_CREATE_API_KEYS tool output.
 */
type AGENTY_API_KEYS_CONTROLLER_CREATE_API_KEYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account identifier associated with the API key
       */
      account_id: number;
      /**
       * Is Enabled
       * @description Whether the API key is currently enabled
       */
      is_enabled: boolean;
      /**
       * Key
       * @description The actual API key string
       */
      key: string;
      /**
       * Key Id
       * @description Unique identifier of the newly created API key
       */
      key_id: number;
      /**
       * Name
       * @description Name of the API key
       */
      name: string;
      /**
       * Role
       * @description Role assigned to the API key
       * @enum {string}
       */
      role: "Owner" | "Admin" | "Manager" | "Viewer" | "Accountant";
      /**
       * User Id
       * @description User identifier associated with the API key
       */
      user_id: number;
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
 * Type of AGENTY's AGENTY_API_KEYS_DELETE_BY_ID tool input.
 */
type AGENTY_API_KEYS_DELETE_BY_ID_INPUT = {
  /**
   * Key Id
   * @description Unique identifier of the API key to delete.
   */
  key_id?: string;
};

/**
 * Type of AGENTY's AGENTY_API_KEYS_DELETE_BY_ID tool output.
 */
type AGENTY_API_KEYS_DELETE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message from the API upon deletion
       */
      message: string;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of AGENTY's AGENTY_API_KEYS_DOWNLOAD tool input.
 */
type AGENTY_API_KEYS_DOWNLOAD_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return
   * @default 1000
   */
  limit: number;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set
   * @default 0
   */
  offset: number;
  /**
   * Order
   * @description Sort order: asc or desc
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field name to sort by
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_API_KEYS_DOWNLOAD tool output.
 */
type AGENTY_API_KEYS_DOWNLOAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description CSV-formatted string containing the API keys
       */
      content: string;
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
 * Type of AGENTY's AGENTY_API_KEYS_GET_ALL tool input.
 */
type AGENTY_API_KEYS_GET_ALL_INPUT = {
  /**
   * Limit
   * @description Maximum number of API keys to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of API keys to skip before starting to return results
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Order of sorting: 'asc' (ascending) or 'desc' (descending)
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field by which to sort the results, e.g., 'created_at' or 'name'
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_API_KEYS_GET_ALL tool output.
 */
type AGENTY_API_KEYS_GET_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of API keys returned in this response
       */
      limit: number;
      /**
       * Offset
       * @description Number of API keys skipped before starting to return results
       */
      offset: number;
      /**
       * Result
       * @description List of API key objects
       */
      result: {
          /**
           * Account Id
           * @description Account ID associated with the API key
           */
          account_id: number;
          /**
           * Created At
           * @description Timestamp when the API key was created (ISO 8601 format)
           */
          created_at: string;
          /**
           * Is Enabled
           * @description Indicates if the API key is enabled
           */
          is_enabled: boolean;
          /**
           * Key
           * @description The API key value
           */
          key: string;
          /**
           * Key Id
           * @description Unique identifier for the API key
           */
          key_id: number;
          /**
           * Name
           * @description Name of the API key
           */
          name: string;
          /**
           * Role
           * @description Role assigned to the API key
           */
          role: string;
          /**
           * Updated At
           * @description Timestamp when the API key was last updated, if applicable (ISO 8601 format)
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Returned
       * @description Number of API keys returned in this response
       */
      returned: number;
      /**
       * Total
       * @description Total number of API keys
       */
      total: number;
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
 * Type of AGENTY's AGENTY_API_KEYS_GET_BY_ID tool input.
 */
type AGENTY_API_KEYS_GET_BY_ID_INPUT = {
  /**
   * Key Id
   * @description Unique identifier of the API key
   */
  key_id?: number;
};

/**
 * Type of AGENTY's AGENTY_API_KEYS_GET_BY_ID tool output.
 */
type AGENTY_API_KEYS_GET_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the API key
       */
      account_id: number;
      /**
       * Created At
       * @description Timestamp when the API key was created (ISO 8601 format)
       */
      created_at: string;
      /**
       * Is Enabled
       * @description Indicates if the API key is enabled
       */
      is_enabled: boolean;
      /**
       * Key
       * @description The API key value
       */
      key: string;
      /**
       * Key Id
       * @description Unique identifier for the API key
       */
      key_id: number;
      /**
       * Name
       * @description Name of the API key
       */
      name: string;
      /**
       * Role
       * @description Role assigned to the API key
       */
      role: string;
      /**
       * Updated At
       * @description Timestamp when the API key was last updated, if applicable (ISO 8601 format)
       * @default null
       */
      updated_at: string | null;
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
 * Type of AGENTY's AGENTY_API_KEYS_RESET_BY_ID tool input.
 */
type AGENTY_API_KEYS_RESET_BY_ID_INPUT = {
  /**
   * Key Id
   * @description Unique identifier of the API key to reset
   */
  key_id?: number;
};

/**
 * Type of AGENTY's AGENTY_API_KEYS_RESET_BY_ID tool output.
 */
type AGENTY_API_KEYS_RESET_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the API key
       */
      account_id: number;
      /**
       * Created At
       * @description Timestamp when the API key was created (ISO 8601 format)
       */
      created_at: string;
      /**
       * Is Enabled
       * @description Indicates if the API key is enabled
       */
      is_enabled: boolean;
      /**
       * Key
       * @description The regenerated API key secret
       */
      key: string;
      /**
       * Key Id
       * @description Unique identifier for the API key
       */
      key_id: number;
      /**
       * Name
       * @description Name of the API key
       */
      name: string;
      /**
       * Role
       * @description Role assigned to the API key
       * @enum {string}
       */
      role: "Owner" | "Admin" | "Manager" | "Viewer" | "Accountant";
      /**
       * Updated At
       * @description Timestamp when the API key was last updated (ISO 8601 format)
       * @default null
       */
      updated_at: string | null;
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
 * Type of AGENTY's AGENTY_API_KEYS_UPDATE_BY_ID tool input.
 */
type AGENTY_API_KEYS_UPDATE_BY_ID_INPUT = {
  /**
   * Account Id
   * @description Account identifier associated with the API key
   * @default null
   */
  account_id: number | null;
  /**
   * Created At
   * @description Timestamp when the API key was created, in ISO 8601 format
   * @default null
   */
  created_at: string | null;
  /**
   * Is Enabled
   * @description Whether the API key is enabled
   * @default null
   */
  is_enabled: boolean | null;
  /**
   * Key Id
   * @description Unique identifier of the API key to update
   */
  key_id?: number;
  /**
   * Name
   * @description Name of the API key
   */
  name?: string;
  /**
   * Role
   * @description Role to assign to the API key
   * @enum {string}
   */
  role?: "Owner" | "Admin" | "Manager" | "Viewer" | "Accountant";
  /**
   * Updated At
   * @description Timestamp when the API key was last updated, in ISO 8601 format
   * @default null
   */
  updated_at: string | null;
  /**
   * User Id
   * @description User identifier associated with the API key
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of AGENTY's AGENTY_API_KEYS_UPDATE_BY_ID tool output.
 */
type AGENTY_API_KEYS_UPDATE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account identifier associated with the API key
       */
      account_id: number;
      /**
       * Created At
       * @description Timestamp when the API key was created, in ISO 8601 format
       */
      created_at: string;
      /**
       * Is Enabled
       * @description Whether the API key is enabled
       */
      is_enabled: boolean;
      /**
       * Key Id
       * @description Unique identifier of the API key
       */
      key_id: number;
      /**
       * Name
       * @description Name of the API key
       */
      name: string;
      /**
       * Role
       * @description Role assigned to the API key
       * @enum {string}
       */
      role: "Owner" | "Admin" | "Manager" | "Viewer" | "Accountant";
      /**
       * Updated At
       * @description Timestamp when the API key was last updated, in ISO 8601 format
       */
      updated_at: string;
      /**
       * User Id
       * @description User identifier associated with the API key
       */
      user_id: number;
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
 * Type of AGENTY's AGENTY_CHANGE_API_KEY_STATUS_BY_ID tool input.
 */
type AGENTY_CHANGE_API_KEY_STATUS_BY_ID_INPUT = {
  /**
   * Key Id
   * @description ID of the API key to enable or disable
   */
  key_id?: number;
};

/**
 * Type of AGENTY's AGENTY_CHANGE_API_KEY_STATUS_BY_ID tool output.
 */
type AGENTY_CHANGE_API_KEY_STATUS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account identifier
       * @default null
       */
      account_id: number | null;
      /**
       * Created At
       * @description Timestamp when the API key was created, in ISO 8601 format
       * @default null
       */
      created_at: string | null;
      /**
       * Is Enabled
       * @description Whether the API key is currently enabled
       * @default null
       */
      is_enabled: boolean | null;
      /**
       * Key Id
       * @description API key identifier
       * @default null
       */
      key_id: number | null;
      /**
       * Name
       * @description Name of the API key
       * @default null
       */
      name: string | null;
      /**
       * Role
       * @description Role associated with the API key
       * @default null
       * @enum {string|null}
       */
      role: "Owner" | "Admin" | "Manager" | "Viewer" | "Accountant" | null;
      /**
       * Updated At
       * @description Timestamp when the API key was last updated, in ISO 8601 format
       * @default null
       */
      updated_at: string | null;
      /**
       * User Id
       * @description User identifier
       * @default null
       */
      user_id: number | null;
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
 * Type of AGENTY's AGENTY_CONNECTIONS_GET_ALL tool input.
 */
type AGENTY_CONNECTIONS_GET_ALL_INPUT = {
  /**
   * Limit
   * @description Maximum number of records to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before starting to return results.
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Order of sorting; 'asc' for ascending or 'desc' for descending.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field by which to sort the results, e.g., 'name' or 'created_at'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_CONNECTIONS_GET_ALL tool output.
 */
type AGENTY_CONNECTIONS_GET_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of connections returned in this response.
       */
      limit: number;
      /**
       * Offset
       * @description Number of records skipped before starting to return results.
       */
      offset: number;
      /**
       * Result
       * @description List of connection objects.
       */
      result: {
          /**
           * Account Id
           * @description Account ID associated with the connection.
           */
          account_id: number;
          /**
           * Config
           * @description Configuration object for the connection.
           */
          config: {
              [key: string]: unknown;
          };
          /**
           * Connection Id
           * @description Identifier object for the connection.
           */
          connection_id: {
              [key: string]: unknown;
          };
          /**
           * Created At
           * @description Timestamp when the connection was created (ISO 8601 format).
           */
          created_at: string;
          /**
           * Error
           * @description Error message if the connection has issues.
           */
          error: string;
          /**
           * Name
           * @description Name of the connection.
           */
          name: string;
          /**
           * Status
           * @description Status of the connection, e.g., 'active' or 'inactive'.
           */
          status: string;
          /**
           * Type
           * @description Type of the connection.
           */
          type: string;
          /**
           * Updated At
           * @description Timestamp when the connection was last updated (ISO 8601 format).
           */
          updated_at: string;
          /**
           * User Id
           * @description User ID associated with the connection.
           */
          user_id: number;
      }[];
      /**
       * Returned
       * @description Number of connections returned in this response.
       */
      returned: number;
      /**
       * Total
       * @description Total number of connections.
       */
      total: number;
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
 * Type of AGENTY's AGENTY_CREATE_API_KEY tool input.
 */
type AGENTY_CREATE_API_KEY_INPUT = {
  /**
   * Is Enabled
   * @description Whether the API key should be enabled upon creation
   * @default null
   */
  is_enabled: boolean | null;
  /**
   * Name
   * @description Name of the API key
   */
  name?: string;
  /**
   * Role
   * @description Role to assign to the API key
   * @enum {string}
   */
  role?: "Owner" | "Admin" | "Manager" | "Viewer" | "Accountant";
};

/**
 * Type of AGENTY's AGENTY_CREATE_API_KEY tool output.
 */
type AGENTY_CREATE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account identifier associated with the API key
       */
      account_id: number;
      /**
       * Created At
       * @description Timestamp when the API key was created, in ISO 8601 format
       * @default null
       */
      created_at: string | null;
      /**
       * Is Enabled
       * @description Whether the API key is currently enabled
       */
      is_enabled: boolean;
      /**
       * Key
       * @description The API key string value
       */
      key: string;
      /**
       * Key Id
       * @description Unique identifier of the newly created API key
       */
      key_id: number;
      /**
       * Name
       * @description Name of the API key
       */
      name: string;
      /**
       * Role
       * @description Role assigned to the API key
       * @enum {string}
       */
      role: "Owner" | "Admin" | "Manager" | "Viewer" | "Accountant";
      /**
       * Updated At
       * @description Timestamp when the API key was last updated, in ISO 8601 format
       * @default null
       */
      updated_at: string | null;
      /**
       * User Id
       * @description User identifier associated with the API key
       */
      user_id: number;
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
 * Type of AGENTY's AGENTY_DASHBOARD_GET_REPORTS_USAGE tool input.
 */
type AGENTY_DASHBOARD_GET_REPORTS_USAGE_INPUT = {
  /**
   * End
   * @description ISO 8601 end date-time string; defaults to today if omitted
   * @default null
   */
  end: string | null;
  /**
   * Start
   * @description ISO 8601 start date-time string; defaults to 30 days before today if omitted
   * @default null
   */
  start: string | null;
};

/**
 * Type of AGENTY's AGENTY_DASHBOARD_GET_REPORTS_USAGE tool output.
 */
type AGENTY_DASHBOARD_GET_REPORTS_USAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agent Id
       * @description Identifier of the agent for the usage report
       * @default null
       */
      agent_id: string | null;
      /**
       * Date
       * @description Date of the report in ISO 8601 format
       */
      date: string;
      /**
       * Pages Used
       * @description Number of pages used by the agent on the given date
       */
      pages_used: number;
      /**
       * Product
       * @description Product name or type associated with the usage
       * @default null
       */
      product: string | null;
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
 * Type of AGENTY's AGENTY_INPUTS_GET_BY_AGENT_ID tool input.
 */
type AGENTY_INPUTS_GET_BY_AGENT_ID_INPUT = {
  /**
   * Agent Id
   * @description Unique identifier of the agent to retrieve inputs for.
   */
  agent_id?: string;
};

/**
 * Type of AGENTY's AGENTY_INPUTS_GET_BY_AGENT_ID tool output.
 */
type AGENTY_INPUTS_GET_BY_AGENT_ID_OUTPUT = {
  /**
   * Collection
   * @description Collection index when type is 'agent'.
   * @default null
   */
  collection: number | null;
  /**
   * Data
   * @description List of manual input values when type is 'manual'.
   * @default null
   */
  data: string[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Field
   * @description Field name when type is 'list' or 'agent'.
   * @default null
   */
  field: string | null;
  /**
   * Id
   * @description Identifier when type is 'url', 'list', or 'agent'.
   * @default null
   */
  id: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Type
   * @description Input source type: 'url', 'manual', 'list', or 'agent'.
   */
  type?: string;
};

/**
 * Type of AGENTY's AGENTY_INPUTS_UPDATE_BY_AGENT_ID tool input.
 */
type AGENTY_INPUTS_UPDATE_BY_AGENT_ID_INPUT = {
  /**
   * Agent Id
   * @description Unique identifier of the agent whose input to update
   */
  agent_id?: string;
  /**
   * Collection
   * @description Collection number for agent inputs. Required when type is 'agent'
   * @default 1
   */
  collection: number | null;
  /**
   * Data
   * @description Manual data entries. Required when type is 'manual'
   * @default null
   */
  data: string[] | null;
  /**
   * Field
   * @description Field name for list or agent inputs. Required when type is 'list' or 'agent'
   * @default null
   */
  field: string | null;
  /**
   * Id
   * @description Identifier for the source. Required when type is 'url', 'list', or 'agent'
   * @default null
   */
  id: string | null;
  /**
   * Type
   * @description Type of the input source. Enum: 'url', 'manual', 'list', or 'agent'
   * @enum {string}
   */
  type?: "url" | "manual" | "list" | "agent";
};

/**
 * Type of AGENTY's AGENTY_INPUTS_UPDATE_BY_AGENT_ID tool output.
 */
type AGENTY_INPUTS_UPDATE_BY_AGENT_ID_OUTPUT = {
  /**
   * Collection
   * @description Collection number returned by the API
   * @default null
   */
  collection: number | null;
  /**
   * Data
   * @description Data array returned by the API
   * @default null
   */
  data: string[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Field
   * @description Field name returned by the API
   * @default null
   */
  field: string | null;
  /**
   * Id
   * @description Source identifier returned by the API
   * @default null
   */
  id: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Type
   * @description Type of the input source returned by the API
   * @enum {string}
   */
  type?: "url" | "manual" | "list" | "agent";
};

/**
 * Type of AGENTY's AGENTY_JOBS_DOWNLOAD tool input.
 */
type AGENTY_JOBS_DOWNLOAD_INPUT = {
  /**
   * Agent Id
   * @description Filter jobs to only those created by this agent ID
   * @default null
   */
  agent_id: string | null;
  /**
   * Limit
   * @description Maximum number of jobs to return
   * @default 1000
   */
  limit: number;
  /**
   * Offset
   * @description Number of jobs to skip before starting to collect the result set
   * @default 0
   */
  offset: number;
  /**
   * Order
   * @description Sort order: asc or desc
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field name to sort by
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_JOBS_DOWNLOAD tool output.
 */
type AGENTY_JOBS_DOWNLOAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description CSV-formatted string containing the jobs
       */
      content: string;
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
 * Type of AGENTY's AGENTY_JOBS_DOWNLOAD_FILES_BY_ID tool input.
 */
type AGENTY_JOBS_DOWNLOAD_FILES_BY_ID_INPUT = {
  /**
   * Job Id
   * @description Unique identifier of the job to download files from.
   */
  job_id?: number;
  /**
   * Name
   * @description Name of the file to download.
   */
  name?: string;
};

/**
 * Type of AGENTY's AGENTY_JOBS_DOWNLOAD_FILES_BY_ID tool output.
 */
type AGENTY_JOBS_DOWNLOAD_FILES_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Raw content of the downloaded file as a string.
       */
      content: string;
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
 * Type of AGENTY's AGENTY_JOBS_DOWNLOAD_RESULT_BY_ID tool input.
 */
type AGENTY_JOBS_DOWNLOAD_RESULT_BY_ID_INPUT = {
  /**
   * Collection
   * @description Result collection number to fetch
   * @default 1
   */
  collection: number;
  /**
   * Format
   * @description Format of the downloaded file: CSV, TSV, or JSON
   * @enum {string}
   */
  format?: "CSV" | "TSV" | "JSON";
  /**
   * Job Id
   * @description Unique identifier of the job to download result for
   */
  job_id?: number;
  /**
   * Limit
   * @description Maximum number of items to return
   * @default 1000
   */
  limit: number;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set
   * @default 0
   */
  offset: number;
  /**
   * Order
   * @description Sort order: asc or desc
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field name to sort by
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_JOBS_DOWNLOAD_RESULT_BY_ID tool output.
 */
type AGENTY_JOBS_DOWNLOAD_RESULT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Raw content of the downloaded result file in the specified format
       */
      content: string;
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
 * Type of AGENTY's AGENTY_JOBS_GET_ALL tool input.
 */
type AGENTY_JOBS_GET_ALL_INPUT = {
  /**
   * Agent Id
   * @description Filter jobs by specific agent identifier.
   * @default null
   */
  agent_id: string | null;
  /**
   * Limit
   * @description Maximum number of records to return (<=1000).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before starting to return results.
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Order of sorting; either 'asc' for ascending or 'desc' for descending.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field by which to sort the results, e.g., 'created_at' or 'status'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_JOBS_GET_ALL tool output.
 */
type AGENTY_JOBS_GET_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of jobs returned in this response.
       */
      limit: number;
      /**
       * Offset
       * @description Number of jobs skipped before returning results.
       */
      offset: number;
      /**
       * Result
       * @description List of job summary objects.
       */
      result: {
          /**
           * Agent Id
           * @description Identifier of the agent that executed the job.
           */
          agent_id: string;
          /**
           * Completed At
           * @description Timestamp when the job completed (ISO 8601).
           * @default null
           */
          completed_at: string | null;
          /**
           * Created At
           * @description Timestamp when the job was created (ISO 8601).
           * @default null
           */
          created_at: string | null;
          /**
           * Error
           * @description Error message if the job ended with an error.
           * @default null
           */
          error: string | null;
          /**
           * Is Scheduled
           * @description Indicates if job was auto-scheduled (true) or manual (false).
           * @default null
           */
          is_scheduled: boolean | null;
          /**
           * Job Id
           * @description Unique identifier for the job.
           */
          job_id: number;
          /**
           * Pages Credit
           * @description Number of page credits consumed.
           * @default null
           */
          pages_credit: number | null;
          /**
           * Pages Failed
           * @description Number of pages that failed processing.
           * @default null
           */
          pages_failed: number | null;
          /**
           * Pages Processed
           * @description Number of pages processed so far.
           * @default null
           */
          pages_processed: number | null;
          /**
           * Pages Successed
           * @description Number of pages successfully processed.
           * @default null
           */
          pages_successed: number | null;
          /**
           * Pages Total
           * @description Total number of pages to process.
           * @default null
           */
          pages_total: number | null;
          /**
           * Started At
           * @description Timestamp when the job started (ISO 8601).
           * @default null
           */
          started_at: string | null;
          /**
           * Status
           * @description Current status of the job (e.g., 'running', 'completed').
           */
          status: string;
          /**
           * Stopped At
           * @description Timestamp when the job was stopped, if applicable.
           * @default null
           */
          stopped_at: string | null;
          /**
           * Type
           * @description Type of the job (e.g., 'scraping').
           */
          type: string;
      }[];
      /**
       * Returned
       * @description Number of jobs returned in this response.
       */
      returned: number;
      /**
       * Total
       * @description Total number of jobs available.
       */
      total: number;
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
 * Type of AGENTY's AGENTY_JOBS_GET_BY_ID tool input.
 */
type AGENTY_JOBS_GET_BY_ID_INPUT = {
  /**
   * Job Id
   * @description Numeric identifier of the job to fetch.
   */
  job_id?: number;
};

/**
 * Type of AGENTY's AGENTY_JOBS_GET_BY_ID tool output.
 */
type AGENTY_JOBS_GET_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agent Id
       * @description Identifier of the agent that started the job.
       */
      agent_id: string;
      /**
       * Created At
       * @description ISO8601 timestamp when the job was created.
       */
      created_at: string;
      /**
       * Input
       * @description Input parameters used to start the job.
       * @default null
       */
      input: {
          [key: string]: string;
      } | null;
      /**
       * Job Id
       * @description Unique numeric identifier of the job.
       */
      job_id: number;
      /**
       * Output Files
       * @description List of output file names generated by the job.
       * @default null
       */
      output_files: string[] | null;
      /**
       * Started At
       * @description ISO8601 timestamp when the job started.
       * @default null
       */
      started_at: string | null;
      /**
       * Status
       * @description Current status of the job (e.g., completed, running, failed).
       */
      status: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the job was last updated.
       */
      updated_at: string;
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
 * Type of AGENTY's AGENTY_JOBS_GET_LOGS_BY_ID tool input.
 */
type AGENTY_JOBS_GET_LOGS_BY_ID_INPUT = {
  /**
   * Job Id
   * @description Unique identifier of the job to fetch logs for.
   */
  job_id?: string;
  /**
   * Limit
   * @description Maximum number of log lines to return (pagination limit).
   * @default 2500
   */
  limit: number;
  /**
   * Offset
   * @description Number of log lines to skip (pagination offset).
   * @default 0
   */
  offset: number;
};

/**
 * Type of AGENTY's AGENTY_JOBS_GET_LOGS_BY_ID tool output.
 */
type AGENTY_JOBS_GET_LOGS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Plain-text log entries for the job, each line prefixed with timestamp and log level.
       */
      content: string;
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
 * Type of AGENTY's AGENTY_JOBS_LIST_FILES_BY_ID tool input.
 */
type AGENTY_JOBS_LIST_FILES_BY_ID_INPUT = {
  /**
   * Job Id
   * @description Numeric identifier of the job to list files for.
   */
  job_id?: number;
  /**
   * Name
   * @description Name of the file to filter by (exact match).
   */
  name?: string;
};

/**
 * Type of AGENTY's AGENTY_JOBS_LIST_FILES_BY_ID tool output.
 */
type AGENTY_JOBS_LIST_FILES_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description List of file metadata objects matching the filter.
       */
      files: {
          /**
           * Created At
           * @description ISO8601 timestamp when the file was created.
           */
          created_at: string;
          /**
           * Name
           * @description Name of the output file.
           */
          name: string;
          /**
           * Size
           * @description Size of the file in bytes.
           */
          size: number;
          /**
           * Url
           * @description URL to download the output file.
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
 * Type of AGENTY's AGENTY_JOBS_START tool input.
 */
type AGENTY_JOBS_START_INPUT = {
  /**
   * Agent Id
   * @description Unique identifier of the agent to start the job for.
   */
  agent_id?: string;
};

/**
 * Type of AGENTY's AGENTY_JOBS_START tool output.
 */
type AGENTY_JOBS_START_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the job.
       */
      account_id: number;
      /**
       * Agent Id
       * @description Agent ID associated with the job.
       */
      agent_id: string;
      /**
       * Created At
       * @description Timestamp when the job was created (ISO 8601).
       */
      created_at: string;
      /**
       * Job Id
       * @description Unique numeric identifier of the job.
       */
      job_id: number;
      /**
       * Priority
       * @description Priority level of the job.
       */
      priority: number;
      /**
       * Status
       * @description Current status of the job (e.g., 'started').
       */
      status: string;
      /**
       * Type
       * @description Type of the job (e.g., 'scraping').
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
 * Type of AGENTY's AGENTY_JOBS_STOP_BY_ID tool input.
 */
type AGENTY_JOBS_STOP_BY_ID_INPUT = {
  /**
   * Job Id
   * @description Unique numeric identifier of the job to stop.
   */
  job_id?: number;
};

/**
 * Type of AGENTY's AGENTY_JOBS_STOP_BY_ID tool output.
 */
type AGENTY_JOBS_STOP_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the job.
       */
      account_id: number;
      /**
       * Agent Id
       * @description Agent ID associated with the job.
       */
      agent_id: string;
      /**
       * Assigned Worker Id
       * @description ID of the assigned worker.
       * @default null
       */
      assigned_worker_id: number | null;
      /**
       * Completed At
       * @description ISO8601 timestamp when the job completed.
       * @default null
       */
      completed_at: string | null;
      /**
       * Created At
       * @description ISO8601 timestamp when the job was created.
       */
      created_at: string;
      /**
       * Error
       * @description Error message, if any.
       * @default null
       */
      error: string | null;
      /**
       * Is Scheduled
       * @description Indicates if the job was scheduled.
       */
      is_scheduled: boolean;
      /**
       * Job Id
       * @description Unique numeric identifier of the job.
       */
      job_id: number;
      /**
       * Pages Credit
       * @description Number of page credits consumed.
       */
      pages_credit: number;
      /**
       * Pages Failed
       * @description Number of pages that failed processing.
       */
      pages_failed: number;
      /**
       * Pages Processed
       * @description Number of pages processed so far.
       */
      pages_processed: number;
      /**
       * Pages Succeeded
       * @description Number of pages successfully processed.
       */
      pages_succeeded: number;
      /**
       * Pages Total
       * @description Total number of pages to process.
       */
      pages_total: number;
      /**
       * Ping At
       * @description ISO8601 timestamp of the last ping.
       * @default null
       */
      ping_at: string | null;
      /**
       * Priority
       * @description Priority level of the job.
       */
      priority: number;
      /**
       * Queue Time
       * @description Time spent in the queue (e.g., '0:00:05').
       */
      queue_time: string;
      /**
       * Run Duration
       * @description Duration of the job run (e.g., '0:01:23').
       */
      run_duration: string;
      /**
       * Running Worker Id
       * @description ID of the running worker.
       * @default null
       */
      running_worker_id: number | null;
      /**
       * Started At
       * @description ISO8601 timestamp when the job started.
       * @default null
       */
      started_at: string | null;
      /**
       * Status
       * @description Current status of the job (e.g., 'stopped').
       */
      status: string;
      /**
       * Stopped At
       * @description ISO8601 timestamp when the job was stopped.
       * @default null
       */
      stopped_at: string | null;
      /**
       * Type
       * @description Type of the job (e.g., 'scraping').
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
 * Type of AGENTY's AGENTY_LISTS_CLEAR_ROWS tool input.
 */
type AGENTY_LISTS_CLEAR_ROWS_INPUT = {
  /**
   * List Id
   * @description Unique identifier of the list to clear rows from
   */
  list_id?: number;
};

/**
 * Type of AGENTY's AGENTY_LISTS_CLEAR_ROWS tool output.
 */
type AGENTY_LISTS_CLEAR_ROWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Outcome message of the clear operation
       */
      message: string;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of AGENTY's AGENTY_LISTS_CONTROLLER_CREATE_LIST tool input.
 */
type AGENTY_LISTS_CONTROLLER_CREATE_LIST_INPUT = {
  /**
   * Description
   * @description Description of the list, max 250 characters
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the list, max 100 characters
   */
  name?: string;
};

/**
 * Type of AGENTY's AGENTY_LISTS_CONTROLLER_CREATE_LIST tool output.
 */
type AGENTY_LISTS_CONTROLLER_CREATE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Description of the list
       * @default null
       */
      description: string | null;
      /**
       * List Id
       * @description Identifier of the newly created list
       */
      list_id: number;
      /**
       * Name
       * @description Name of the list
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
 * Type of AGENTY's AGENTY_LISTS_DELETE_BY_ID tool input.
 */
type AGENTY_LISTS_DELETE_BY_ID_INPUT = {
  /**
   * List Id
   * @description Unique identifier of the list to delete
   */
  list_id?: number;
};

/**
 * Type of AGENTY's AGENTY_LISTS_DELETE_BY_ID tool output.
 */
type AGENTY_LISTS_DELETE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Outcome message of the deletion, e.g. 'List with id: 20 deleted successfully'
       */
      message: string;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of AGENTY's AGENTY_LISTS_DOWNLOAD tool input.
 */
type AGENTY_LISTS_DOWNLOAD_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return
   * @default 1000
   */
  limit: number;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set
   * @default 0
   */
  offset: number;
  /**
   * Order
   * @description Sort order: asc or desc
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field name to sort by
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_LISTS_DOWNLOAD tool output.
 */
type AGENTY_LISTS_DOWNLOAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description CSV-formatted string containing the lists
       */
      content: string;
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
 * Type of AGENTY's AGENTY_LISTS_GET_ALL tool input.
 */
type AGENTY_LISTS_GET_ALL_INPUT = {
  /**
   * Limit
   * @description Maximum number of lists to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of lists to skip before starting to return results.
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Order of sorting; possible values are 'asc' (ascending) and 'desc' (descending).
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field by which to sort the results, e.g., 'name' or 'created_at'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_LISTS_GET_ALL tool output.
 */
type AGENTY_LISTS_GET_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of lists returned in this response.
       */
      limit: number;
      /**
       * Offset
       * @description Number of lists skipped before starting to return results.
       */
      offset: number;
      /**
       * Result
       * @description List of list objects.
       */
      result: {
          /**
           * Account Id
           * @description Account ID associated with the list.
           */
          account_id: number;
          /**
           * Created At
           * @description Timestamp when the list was created (ISO 8601 format).
           */
          created_at: string;
          /**
           * Description
           * @description Description of the list.
           * @default null
           */
          description: string | null;
          /**
           * List Id
           * @description Unique identifier for the list.
           */
          list_id: number;
          /**
           * Name
           * @description Name of the list.
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the list was last updated, if applicable (ISO 8601 format).
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Returned
       * @description Number of lists returned in this response.
       */
      returned: number;
      /**
       * Total
       * @description Total number of lists.
       */
      total: number;
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
 * Type of AGENTY's AGENTY_LISTS_GET_ROWS_BY_ID tool input.
 */
type AGENTY_LISTS_GET_ROWS_BY_ID_INPUT = {
  /**
   * Limit
   * @description Number of rows to return per request
   * @default null
   */
  limit: number | null;
  /**
   * List Id
   * @description Unique identifier of the list to fetch rows from
   */
  list_id?: string;
  /**
   * Offset
   * @description Number of rows to skip before starting to return rows
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sort order, either 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Column name to sort the results by
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_LISTS_GET_ROWS_BY_ID tool output.
 */
type AGENTY_LISTS_GET_ROWS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description The limit used in the request
       */
      limit: number;
      /**
       * Offset
       * @description The offset used in the request
       */
      offset: number;
      /**
       * Result
       * @description List of row objects with column data (dynamic keys for column names)
       */
      result: {
          [key: string]: string;
      }[];
      /**
       * Returned
       * @description Number of rows returned in the response
       */
      returned: number;
      /**
       * Total
       * @description Total number of rows available in the list
       */
      total: number;
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
 * Type of AGENTY's AGENTY_LISTS_UPDATE_BY_ID tool input.
 */
type AGENTY_LISTS_UPDATE_BY_ID_INPUT = {
  /**
   * Description
   * @description New description for the list, max 250 characters. At least one of name or description must be provided.
   * @default null
   */
  description: string | null;
  /**
   * List Id
   * @description Unique identifier of the list to update
   */
  list_id?: number;
  /**
   * Name
   * @description New name for the list, max 100 characters. At least one of name or description must be provided.
   * @default null
   */
  name: string | null;
};

/**
 * Type of AGENTY's AGENTY_LISTS_UPDATE_BY_ID tool output.
 */
type AGENTY_LISTS_UPDATE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Description of the list
       * @default null
       */
      description: string | null;
      /**
       * List Id
       * @description Identifier of the list
       */
      list_id: number;
      /**
       * Name
       * @description Name of the list
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
 * Type of AGENTY's AGENTY_LISTS_UPLOAD_CSV tool input.
 */
type AGENTY_LISTS_UPLOAD_CSV_INPUT = {
  /**
   * File
   * Format: binary
   * @description Binary content of the CSV file to upload to the specified list.
   */
  file?: string;
  /**
   * List Id
   * @description Unique identifier of the list to which the CSV will be uploaded.
   */
  list_id?: number;
};

/**
 * Type of AGENTY's AGENTY_LISTS_UPLOAD_CSV tool output.
 */
type AGENTY_LISTS_UPLOAD_CSV_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message returned by the API after uploading the CSV file.
       */
      message: string;
      /**
       * Status Code
       * @description HTTP status code returned by the API upon uploading the CSV file.
       */
      status_code: number;
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
 * Type of AGENTY's AGENTY_PROJECTS_ADD_AGENTS tool input.
 */
type AGENTY_PROJECTS_ADD_AGENTS_INPUT = {
  /**
   * Agent Ids
   * @description List of agent IDs to add to the project; must contain at least one entry
   */
  agent_ids?: string[];
  /**
   * Project Id
   * @description Unique identifier of the project to which agents will be added
   */
  project_id?: number;
};

/**
 * Type of AGENTY's AGENTY_PROJECTS_ADD_AGENTS tool output.
 */
type AGENTY_PROJECTS_ADD_AGENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message from the API upon adding agents
       */
      message: string;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of AGENTY's AGENTY_PROJECTS_CONTROLLER_CREATE_PROJECT tool input.
 */
type AGENTY_PROJECTS_CONTROLLER_CREATE_PROJECT_INPUT = {
  /**
   * Description
   * @description Description of the project.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the project.
   */
  name?: string;
  /**
   * Template
   * @description Project template key.
   * @default null
   */
  template: string | null;
};

/**
 * Type of AGENTY's AGENTY_PROJECTS_CONTROLLER_CREATE_PROJECT tool output.
 */
type AGENTY_PROJECTS_CONTROLLER_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the project was created (ISO 8601 format).
       */
      created_at: string;
      /**
       * Created By
       * @description User ID of the project creator.
       */
      created_by: string;
      /**
       * Description
       * @description Description of the project.
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Project Id
       * @description Unique identifier for the project.
       */
      project_id: number;
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
 * Type of AGENTY's AGENTY_PROJECTS_GET_ALL tool input.
 */
type AGENTY_PROJECTS_GET_ALL_INPUT = {
  /**
   * Limit
   * @description Maximum number of projects to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of projects to skip before starting to return results.
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Order of sorting; possible values are 'asc' (ascending) and 'desc' (descending).
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field by which to sort the results, e.g., 'name' or 'created_at'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of AGENTY's AGENTY_PROJECTS_GET_ALL tool output.
 */
type AGENTY_PROJECTS_GET_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of projects returned in this response.
       */
      limit: number;
      /**
       * Offset
       * @description Number of projects skipped before starting to return results.
       */
      offset: number;
      /**
       * Result
       * @description List of project objects.
       */
      result: {
          /**
           * Created At
           * @description Timestamp when the project was created (ISO 8601 format).
           */
          created_at: string;
          /**
           * Description
           * @description Description of the project.
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Name of the project.
           */
          name: string;
          /**
           * Project Id
           * @description Unique identifier for the project.
           */
          project_id: number;
          /**
           * Updated At
           * @description Timestamp when the project was last updated, if applicable (ISO 8601 format).
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Returned
       * @description Number of projects returned in this response.
       */
      returned: number;
      /**
       * Total
       * @description Total number of projects.
       */
      total: number;
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
 * Type map of all available tool input types for toolkit "AGENTY".
 */
export type AGENTY_TOOL_INPUTS = {
  AGENTS_CLONE_BY_ID: AGENTY_AGENTS_CLONE_BY_ID_INPUT
  AGENTS_CONTROLLER_CREATE_AGENT: AGENTY_AGENTS_CONTROLLER_CREATE_AGENT_INPUT
  AGENTS_CONTROLLER_GET_TEMPLATES: AGENTY_AGENTS_CONTROLLER_GET_TEMPLATES_INPUT
  AGENTS_DELETE_BY_ID: AGENTY_AGENTS_DELETE_BY_ID_INPUT
  AGENTS_GET_ALL: AGENTY_AGENTS_GET_ALL_INPUT
  AGENTS_GET_BY_ID: AGENTY_AGENTS_GET_BY_ID_INPUT
  AGENTS_UPDATE_BY_ID: AGENTY_AGENTS_UPDATE_BY_ID_INPUT
  API_KEYS_CONTROLLER_CREATE_API_KEYS: AGENTY_API_KEYS_CONTROLLER_CREATE_API_KEYS_INPUT
  API_KEYS_DELETE_BY_ID: AGENTY_API_KEYS_DELETE_BY_ID_INPUT
  API_KEYS_DOWNLOAD: AGENTY_API_KEYS_DOWNLOAD_INPUT
  API_KEYS_GET_ALL: AGENTY_API_KEYS_GET_ALL_INPUT
  API_KEYS_GET_BY_ID: AGENTY_API_KEYS_GET_BY_ID_INPUT
  API_KEYS_RESET_BY_ID: AGENTY_API_KEYS_RESET_BY_ID_INPUT
  API_KEYS_UPDATE_BY_ID: AGENTY_API_KEYS_UPDATE_BY_ID_INPUT
  CHANGE_API_KEY_STATUS_BY_ID: AGENTY_CHANGE_API_KEY_STATUS_BY_ID_INPUT
  CONNECTIONS_GET_ALL: AGENTY_CONNECTIONS_GET_ALL_INPUT
  CREATE_API_KEY: AGENTY_CREATE_API_KEY_INPUT
  DASHBOARD_GET_REPORTS_USAGE: AGENTY_DASHBOARD_GET_REPORTS_USAGE_INPUT
  INPUTS_GET_BY_AGENT_ID: AGENTY_INPUTS_GET_BY_AGENT_ID_INPUT
  INPUTS_UPDATE_BY_AGENT_ID: AGENTY_INPUTS_UPDATE_BY_AGENT_ID_INPUT
  JOBS_DOWNLOAD: AGENTY_JOBS_DOWNLOAD_INPUT
  JOBS_DOWNLOAD_FILES_BY_ID: AGENTY_JOBS_DOWNLOAD_FILES_BY_ID_INPUT
  JOBS_DOWNLOAD_RESULT_BY_ID: AGENTY_JOBS_DOWNLOAD_RESULT_BY_ID_INPUT
  JOBS_GET_ALL: AGENTY_JOBS_GET_ALL_INPUT
  JOBS_GET_BY_ID: AGENTY_JOBS_GET_BY_ID_INPUT
  JOBS_GET_LOGS_BY_ID: AGENTY_JOBS_GET_LOGS_BY_ID_INPUT
  JOBS_LIST_FILES_BY_ID: AGENTY_JOBS_LIST_FILES_BY_ID_INPUT
  JOBS_START: AGENTY_JOBS_START_INPUT
  JOBS_STOP_BY_ID: AGENTY_JOBS_STOP_BY_ID_INPUT
  LISTS_CLEAR_ROWS: AGENTY_LISTS_CLEAR_ROWS_INPUT
  LISTS_CONTROLLER_CREATE_LIST: AGENTY_LISTS_CONTROLLER_CREATE_LIST_INPUT
  LISTS_DELETE_BY_ID: AGENTY_LISTS_DELETE_BY_ID_INPUT
  LISTS_DOWNLOAD: AGENTY_LISTS_DOWNLOAD_INPUT
  LISTS_GET_ALL: AGENTY_LISTS_GET_ALL_INPUT
  LISTS_GET_ROWS_BY_ID: AGENTY_LISTS_GET_ROWS_BY_ID_INPUT
  LISTS_UPDATE_BY_ID: AGENTY_LISTS_UPDATE_BY_ID_INPUT
  LISTS_UPLOAD_CSV: AGENTY_LISTS_UPLOAD_CSV_INPUT
  PROJECTS_ADD_AGENTS: AGENTY_PROJECTS_ADD_AGENTS_INPUT
  PROJECTS_CONTROLLER_CREATE_PROJECT: AGENTY_PROJECTS_CONTROLLER_CREATE_PROJECT_INPUT
  PROJECTS_GET_ALL: AGENTY_PROJECTS_GET_ALL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AGENTY".
 */
export type AGENTY_TOOL_OUTPUTS = {
  AGENTS_CLONE_BY_ID: AGENTY_AGENTS_CLONE_BY_ID_OUTPUT
  AGENTS_CONTROLLER_CREATE_AGENT: AGENTY_AGENTS_CONTROLLER_CREATE_AGENT_OUTPUT
  AGENTS_CONTROLLER_GET_TEMPLATES: AGENTY_AGENTS_CONTROLLER_GET_TEMPLATES_OUTPUT
  AGENTS_DELETE_BY_ID: AGENTY_AGENTS_DELETE_BY_ID_OUTPUT
  AGENTS_GET_ALL: AGENTY_AGENTS_GET_ALL_OUTPUT
  AGENTS_GET_BY_ID: AGENTY_AGENTS_GET_BY_ID_OUTPUT
  AGENTS_UPDATE_BY_ID: AGENTY_AGENTS_UPDATE_BY_ID_OUTPUT
  API_KEYS_CONTROLLER_CREATE_API_KEYS: AGENTY_API_KEYS_CONTROLLER_CREATE_API_KEYS_OUTPUT
  API_KEYS_DELETE_BY_ID: AGENTY_API_KEYS_DELETE_BY_ID_OUTPUT
  API_KEYS_DOWNLOAD: AGENTY_API_KEYS_DOWNLOAD_OUTPUT
  API_KEYS_GET_ALL: AGENTY_API_KEYS_GET_ALL_OUTPUT
  API_KEYS_GET_BY_ID: AGENTY_API_KEYS_GET_BY_ID_OUTPUT
  API_KEYS_RESET_BY_ID: AGENTY_API_KEYS_RESET_BY_ID_OUTPUT
  API_KEYS_UPDATE_BY_ID: AGENTY_API_KEYS_UPDATE_BY_ID_OUTPUT
  CHANGE_API_KEY_STATUS_BY_ID: AGENTY_CHANGE_API_KEY_STATUS_BY_ID_OUTPUT
  CONNECTIONS_GET_ALL: AGENTY_CONNECTIONS_GET_ALL_OUTPUT
  CREATE_API_KEY: AGENTY_CREATE_API_KEY_OUTPUT
  DASHBOARD_GET_REPORTS_USAGE: AGENTY_DASHBOARD_GET_REPORTS_USAGE_OUTPUT
  INPUTS_GET_BY_AGENT_ID: AGENTY_INPUTS_GET_BY_AGENT_ID_OUTPUT
  INPUTS_UPDATE_BY_AGENT_ID: AGENTY_INPUTS_UPDATE_BY_AGENT_ID_OUTPUT
  JOBS_DOWNLOAD: AGENTY_JOBS_DOWNLOAD_OUTPUT
  JOBS_DOWNLOAD_FILES_BY_ID: AGENTY_JOBS_DOWNLOAD_FILES_BY_ID_OUTPUT
  JOBS_DOWNLOAD_RESULT_BY_ID: AGENTY_JOBS_DOWNLOAD_RESULT_BY_ID_OUTPUT
  JOBS_GET_ALL: AGENTY_JOBS_GET_ALL_OUTPUT
  JOBS_GET_BY_ID: AGENTY_JOBS_GET_BY_ID_OUTPUT
  JOBS_GET_LOGS_BY_ID: AGENTY_JOBS_GET_LOGS_BY_ID_OUTPUT
  JOBS_LIST_FILES_BY_ID: AGENTY_JOBS_LIST_FILES_BY_ID_OUTPUT
  JOBS_START: AGENTY_JOBS_START_OUTPUT
  JOBS_STOP_BY_ID: AGENTY_JOBS_STOP_BY_ID_OUTPUT
  LISTS_CLEAR_ROWS: AGENTY_LISTS_CLEAR_ROWS_OUTPUT
  LISTS_CONTROLLER_CREATE_LIST: AGENTY_LISTS_CONTROLLER_CREATE_LIST_OUTPUT
  LISTS_DELETE_BY_ID: AGENTY_LISTS_DELETE_BY_ID_OUTPUT
  LISTS_DOWNLOAD: AGENTY_LISTS_DOWNLOAD_OUTPUT
  LISTS_GET_ALL: AGENTY_LISTS_GET_ALL_OUTPUT
  LISTS_GET_ROWS_BY_ID: AGENTY_LISTS_GET_ROWS_BY_ID_OUTPUT
  LISTS_UPDATE_BY_ID: AGENTY_LISTS_UPDATE_BY_ID_OUTPUT
  LISTS_UPLOAD_CSV: AGENTY_LISTS_UPLOAD_CSV_OUTPUT
  PROJECTS_ADD_AGENTS: AGENTY_PROJECTS_ADD_AGENTS_OUTPUT
  PROJECTS_CONTROLLER_CREATE_PROJECT: AGENTY_PROJECTS_CONTROLLER_CREATE_PROJECT_OUTPUT
  PROJECTS_GET_ALL: AGENTY_PROJECTS_GET_ALL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AGENTY toolkit.
 */
export const AGENTY = {
  slug: "agenty",
  tools: {
    /**
     * Tool to clone an existing agent by its id. use when you need to duplicate an agent's configuration and optionally start the clone immediately.
     */
    AGENTS_CLONE_BY_ID: "AGENTY_AGENTS_CLONE_BY_ID",
    /**
     * Tool to create a new agent. use when you need to add an agent with configuration and optional auto-start.
     */
    AGENTS_CONTROLLER_CREATE_AGENT: "AGENTY_AGENTS_CONTROLLER_CREATE_AGENT",
    /**
     * Tool to fetch all public agent templates and sample agents. use when listing available templates for users to select.
     */
    AGENTS_CONTROLLER_GET_TEMPLATES: "AGENTY_AGENTS_CONTROLLER_GET_TEMPLATES",
    /**
     * Tool to delete a single agent by its id. use when you need to permanently remove an agent after confirming it exists.
     */
    AGENTS_DELETE_BY_ID: "AGENTY_AGENTS_DELETE_BY_ID",
    /**
     * Tool to fetch all active agents under an account. use after authenticating when you need to list agents with pagination and sorting.
     */
    AGENTS_GET_ALL: "AGENTY_AGENTS_GET_ALL",
    /**
     * Tool to fetch details of a specific agent by its id. use when you need full agent configuration before taking further actions.
     */
    AGENTS_GET_BY_ID: "AGENTY_AGENTS_GET_BY_ID",
    /**
     * Tool to update an agent's configuration and settings by agent id. use when you need to modify an existing agent after retrieving its current settings. example: "update agent 123 with new name and tags."
     */
    AGENTS_UPDATE_BY_ID: "AGENTY_AGENTS_UPDATE_BY_ID",
    /**
     * Tool to create a new api key. use when you need to provision access credentials for the api.
     */
    API_KEYS_CONTROLLER_CREATE_API_KEYS: "AGENTY_API_KEYS_CONTROLLER_CREATE_API_KEYS",
    /**
     * Tool to delete an api key by its key id. use when revoking access for a specific api key after confirming the correct key id.
     */
    API_KEYS_DELETE_BY_ID: "AGENTY_API_KEYS_DELETE_BY_ID",
    /**
     * Tool to download all api keys under an account in csv format. use when you need a complete list of api keys for export or backup.
     */
    API_KEYS_DOWNLOAD: "AGENTY_API_KEYS_DOWNLOAD",
    /**
     * Tool to retrieve all api keys under an account. use after authentication when you need to list api keys with pagination and sorting.
     */
    API_KEYS_GET_ALL: "AGENTY_API_KEYS_GET_ALL",
    /**
     * Tool to get an api key by key id. use when retrieving details of a specific api key after identifying its id.
     */
    API_KEYS_GET_BY_ID: "AGENTY_API_KEYS_GET_BY_ID",
    /**
     * Tool to reset an api key by key id. use when you need to regenerate the secret for an api key after compromise or rotation.
     */
    API_KEYS_RESET_BY_ID: "AGENTY_API_KEYS_RESET_BY_ID",
    /**
     * Tool to update an api key by its id. use when you need to modify name, role, or enabled state after confirming the api key's identifier.
     */
    API_KEYS_UPDATE_BY_ID: "AGENTY_API_KEYS_UPDATE_BY_ID",
    /**
     * Tool to enable or disable an api key by its id. use when you need to toggle the activation state of an existing api key after retrieving its identifier.
     */
    CHANGE_API_KEY_STATUS_BY_ID: "AGENTY_CHANGE_API_KEY_STATUS_BY_ID",
    /**
     * Tool to get all connections. use after authenticating when you need to list connections with pagination and sorting.
     */
    CONNECTIONS_GET_ALL: "AGENTY_CONNECTIONS_GET_ALL",
    /**
     * Tool to create a new api key. use when you need to provision access credentials for the api.
     */
    CREATE_API_KEY: "AGENTY_CREATE_API_KEY",
    /**
     * Tool to fetch account reports like pages used by agent, date, and product. use when analyzing usage over a date range.
     */
    DASHBOARD_GET_REPORTS_USAGE: "AGENTY_DASHBOARD_GET_REPORTS_USAGE",
    /**
     * Tool to get agent input by agent id. use when you need to inspect or validate an agent's current input configuration before updating or starting jobs.
     */
    INPUTS_GET_BY_AGENT_ID: "AGENTY_INPUTS_GET_BY_AGENT_ID",
    /**
     * Tool to update agent input by agent id. use when you need to modify an agent's input source (url, manual data, list, or agent) after verifying the agent id.
     */
    INPUTS_UPDATE_BY_AGENT_ID: "AGENTY_INPUTS_UPDATE_BY_AGENT_ID",
    /**
     * Tool to download all jobs in csv format. use when you need a complete list of jobs for export or analysis.
     */
    JOBS_DOWNLOAD: "AGENTY_JOBS_DOWNLOAD",
    /**
     * Tool to download output files by job id. use when you need to fetch a specific output file after a job completes.
     */
    JOBS_DOWNLOAD_FILES_BY_ID: "AGENTY_JOBS_DOWNLOAD_FILES_BY_ID",
    /**
     * Tool to download the agent output result by job id. use when you need to fetch the final output of a completed job in csv, tsv, or json format.
     */
    JOBS_DOWNLOAD_RESULT_BY_ID: "AGENTY_JOBS_DOWNLOAD_RESULT_BY_ID",
    /**
     * Tool to fetch all jobs under an account. use when you need to view and filter the list of jobs with pagination and sorting.
     */
    JOBS_GET_ALL: "AGENTY_JOBS_GET_ALL",
    /**
     * Tool to fetch details of a specific job by its id. use when you need the full job metadata before retrieving results.
     */
    JOBS_GET_BY_ID: "AGENTY_JOBS_GET_BY_ID",
    /**
     * Tool to fetch logs for a given job by its id. use when you need to review or debug job execution logs with pagination support.
     */
    JOBS_GET_LOGS_BY_ID: "AGENTY_JOBS_GET_LOGS_BY_ID",
    /**
     * Tool to list output files by job id. use after job completion when you need to discover available output files.
     */
    JOBS_LIST_FILES_BY_ID: "AGENTY_JOBS_LIST_FILES_BY_ID",
    /**
     * Tool to start a new agent job. use when you need to trigger execution of an existing agent.
     */
    JOBS_START: "AGENTY_JOBS_START",
    /**
     * Tool to stop a running job by job id. use when you need to halt an in-progress job before it completes. confirm the job id beforehand to avoid unintended stops.
     */
    JOBS_STOP_BY_ID: "AGENTY_JOBS_STOP_BY_ID",
    /**
     * Tool to clear all rows in a list by its id. use when you need to wipe out all data in a list before re-populating (e.g., "clear all rows in list 123").
     */
    LISTS_CLEAR_ROWS: "AGENTY_LISTS_CLEAR_ROWS",
    /**
     * Tool to create a new list. use after preparing the list name and optional description. example: "create a list named 'contacts' with description 'potential leads'."
     */
    LISTS_CONTROLLER_CREATE_LIST: "AGENTY_LISTS_CONTROLLER_CREATE_LIST",
    /**
     * Tool to delete a specific list by its id. use when you need to permanently remove a list after confirming it exists.
     */
    LISTS_DELETE_BY_ID: "AGENTY_LISTS_DELETE_BY_ID",
    /**
     * Tool to download all lists in csv format. use when you need a complete set of lists for export or backup.
     */
    LISTS_DOWNLOAD: "AGENTY_LISTS_DOWNLOAD",
    /**
     * Tool to retrieve all lists under an account. use after authentication when you need to list lists with pagination and sorting.
     */
    LISTS_GET_ALL: "AGENTY_LISTS_GET_ALL",
    /**
     * Tool to fetch all rows in a specified list. use when you need to retrieve all data entries from a list with optional pagination and sorting. example: "fetch rows from list '61db...' with limit=50".
     */
    LISTS_GET_ROWS_BY_ID: "AGENTY_LISTS_GET_ROWS_BY_ID",
    /**
     * Tool to update a list's name or description by list id. use when you need to modify list metadata after confirming its id. example: "update list 123 with name 'my list'".
     */
    LISTS_UPDATE_BY_ID: "AGENTY_LISTS_UPDATE_BY_ID",
    /**
     * Tool to upload a csv file to a list. use when you need to bulk import rows into an existing list after verifying the list's column schema.
     */
    LISTS_UPLOAD_CSV: "AGENTY_LISTS_UPLOAD_CSV",
    /**
     * Tool to add agent(s) to a project. use after confirming the project exists and you have valid agent ids. example: "add agents ['agent abc123','agent xyz789'] to project 123."
     */
    PROJECTS_ADD_AGENTS: "AGENTY_PROJECTS_ADD_AGENTS",
    /**
     * Tool to create a new project. use when you need to initialize a project with a name and optional description or template.
     */
    PROJECTS_CONTROLLER_CREATE_PROJECT: "AGENTY_PROJECTS_CONTROLLER_CREATE_PROJECT",
    /**
     * Tool to retrieve all projects under an account. use after authentication when you need to list projects with pagination and sorting.
     */
    PROJECTS_GET_ALL: "AGENTY_PROJECTS_GET_ALL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AGENTY".
 */
export type AGENTY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AGENTY".
 */
export type AGENTY_TRIGGER_EVENTS = {}
