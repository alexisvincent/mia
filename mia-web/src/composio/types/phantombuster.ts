// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_AGENTS_FETCH_ALL tool input.
 */
type PHANTOMBUSTER_GET_AGENTS_FETCH_ALL_INPUT = object;

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_AGENTS_FETCH_ALL tool output.
 */
type PHANTOMBUSTER_GET_AGENTS_FETCH_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agents
       * @description List of agent objects associated with the current user or organization
       */
      agents: {
          /**
           *  Id
           * @description Unique agent identifier
           */
          _id: string;
          /**
           * Container Ids
           * @description List of container IDs for this agent's runs
           */
          containerIds: string[];
          /**
           * Created At
           * @description Epoch ms when the agent was created
           */
          createdAt: number;
          /**
           * Name
           * @description Agent display name
           */
          name: string;
          /**
           * Script Id
           * @description ID of the script associated with this agent
           */
          scriptId: string;
          /**
           * Settings
           * @description Configuration settings for the agent
           */
          settings: {
              [key: string]: unknown;
          };
          /**
           * Status
           * @description Current status of the agent (e.g., idle, running)
           */
          status: string;
          /**
           * Updated At
           * @description Epoch ms when the agent was last updated
           */
          updatedAt: number;
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_AGENTS_FETCH_DELETED tool input.
 */
type PHANTOMBUSTER_GET_AGENTS_FETCH_DELETED_INPUT = object;

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_AGENTS_FETCH_DELETED tool output.
 */
type PHANTOMBUSTER_GET_AGENTS_FETCH_DELETED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Argument
       * @description Argument passed at launch, if any
       * @default null
       */
      argument: string | null;
      /**
       * Branch
       * @description Branch of the script; one of 'staging' or 'release'
       * @default null
       * @enum {string|null}
       */
      branch: "staging" | "release" | null;
      /**
       * Created At
       * @description Unix timestamp when the agent was created
       */
      createdAt: number;
      /**
       * Deleted At
       * @description Unix timestamp when the agent was deleted
       */
      deletedAt: number;
      /**
       * Deleted By
       * @description User ID who deleted the agent
       * @default null
       */
      deletedBy: string | null;
      /**
       * Environment
       * @description Runtime environment of the agent
       * @default null
       */
      environment: string | null;
      /**
       * Id
       * @description Unique identifier of the agent
       */
      id: string;
      /**
       * Last End Type
       * @description Last end condition of the agent's execution
       * @default null
       * @enum {string|null}
       */
      lastEndType: "finished" | "killed" | "global timeout" | "org timeout" | "agent timeout" | "unknown" | "no log timeout" | null;
      /**
       * Last Ended At
       * @description Unix timestamp of the last end
       * @default null
       */
      lastEndedAt: number | null;
      /**
       * Last Exit Code
       * @description Exit code of the last run
       * @default null
       */
      lastExitCode: number | null;
      /**
       * Last Non Manual Launch Type
       * @description Previous launch type if not manual
       * @default null
       * @enum {string|null}
       */
      lastNonManualLaunchType: "manually" | "repeatedly" | "once" | "after agent" | null;
      /**
       * Launch After Agent Id
       * @description Agent ID after which this agent will launch
       * @default null
       */
      launchAfterAgentId: string | null;
      /**
       * Launch Before
       * @description Deadline timestamp for launch
       * @default null
       */
      launchBefore: number | null;
      /**
       * Launch Once At
       * @description Scheduled one-time launch timestamp
       * @default null
       */
      launchOnceAt: number | null;
      /**
       * Launch Type
       * @description How the agent was scheduled
       * @enum {string}
       */
      launchType: "manually" | "repeatedly" | "once" | "after agent";
      /**
       * Manifest
       * @description Script branch manifest (opaque JSON object)
       * @default null
       */
      manifest: {
          [key: string]: unknown;
      } | null;
      /**
       * Master Agent Id
       * @description ID of master agent for 'after agent' launches
       * @default null
       */
      masterAgentId: string | null;
      /**
       * Master Agent Launch After
       * @description Delay (in seconds) after which master agent launches
       * @default null
       */
      masterAgentLaunchAfter: number | null;
      /**
       * Master Agent Launch On Exit Codes
       * @description Exit codes that trigger the master agent to launch
       * @default null
       */
      masterAgentLaunchOnExitCodes: (string | null)[] | null;
      /**
       * Name
       * @description Name of the agent, if any
       * @default null
       */
      name: string | null;
      /**
       * Nb Containers Running
       * @description Current number of containers running
       */
      nbContainersRunning: number;
      /**
       * Repeated Launch Times
       * @description Schedule details for repeated launches
       * @default null
       */
      repeatedLaunchTimes: {
          [key: string]: unknown;
      } | null;
      /**
       * Reserved Agent Slots Factor
       * @description Factor for reserved slots
       */
      reservedAgentSlotsFactor: number;
      /**
       * Running Time
       * @description Total running time in seconds
       * @default null
       */
      runningTime: number | null;
      /**
       * S3 Folder
       * @description S3 folder path for logs/data
       */
      s3Folder: string;
      /**
       * Script
       * @description Name of the linked script
       * @default null
       */
      script: string | null;
      /**
       * Script Id
       * @description ID of the linked script
       * @default null
       */
      scriptId: string | null;
      /**
       * Script Org Name
       * @description Organization name of the linked script
       * @default null
       */
      scriptOrgName: string | null;
      /**
       * Slave Slug
       * @description Slave machine identifier
       * @default null
       */
      slaveSlug: string | null;
      /**
       * Squid Lease Identifier
       * @description Squid lease identifier object
       * @default null
       */
      squidLeaseIdentifier: {
          [key: string]: unknown;
      } | null;
      /**
       * Was Setup Valid When Submitted By The Frontend
       * @description Whether the UI-validated setup was still valid at submission
       */
      wasSetupValidWhenSubmittedByTheFrontend: boolean;
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_BRANCHES_DIFF tool input.
 */
type PHANTOMBUSTER_GET_BRANCHES_DIFF_INPUT = {
  /**
   * X Phantombuster Org
   * @description ID of the org performing the operation. Not required when using a personal API key.
   * @default null
   */
  "X-Phantombuster-Org": string | null;
  /**
   * Name
   * @description Name of the script branch to fetch the diff from.
   */
  name?: string;
};

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_BRANCHES_DIFF tool output.
 */
type PHANTOMBUSTER_GET_BRANCHES_DIFF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Diff Length
       * @description Length difference between staging and release branches.
       */
      diffLength: number;
      /**
       * Id
       * @description Unique identifier of the script.
       */
      id: string;
      /**
       * Name
       * @description Name of the script branch.
       */
      name: string;
      /**
       * Release Access List
       * @description List of accounts with access to the release branch; null if unrestricted.
       * @default null
       */
      releaseAccessList: string[] | null;
      /**
       * Release Visibility
       * @description Visibility level of the release branch.
       * @enum {string}
       */
      releaseVisibility: "private" | "semi public" | "public" | "semi open source" | "open source";
      /**
       * Staging Access List
       * @description List of accounts with access to the staging branch; null if unrestricted.
       * @default null
       */
      stagingAccessList: string[] | null;
      /**
       * Staging Visibility
       * @description Visibility level of the staging branch.
       * @enum {string}
       */
      stagingVisibility: "private" | "semi public" | "public" | "semi open source" | "open source";
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_BRANCHES_FETCH_ALL tool input.
 */
type PHANTOMBUSTER_GET_BRANCHES_FETCH_ALL_INPUT = object;

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_BRANCHES_FETCH_ALL tool output.
 */
type PHANTOMBUSTER_GET_BRANCHES_FETCH_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Branches
       * @description List of all branches associated with the current organization
       */
      branches: {
          /**
           * Created At
           * @description The timestamp when the branch was created (milliseconds since epoch or ISO-8601)
           */
          created_at: number | null;
          /**
           * Id
           * @description The unique identifier of the branch
           */
          id: string;
          /**
           * Name
           * @description The name of the branch
           */
          name: string;
          /**
           * Script Id
           * @description The ID of the script associated with the branch, if available
           * @default null
           */
          script_id: string | null;
          /**
           * Updated At
           * @description The timestamp when the branch was last updated (milliseconds since epoch or ISO-8601), if available
           * @default null
           */
          updated_at: number | null;
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_CONTAINERS_FETCH_ALL tool input.
 */
type PHANTOMBUSTER_GET_CONTAINERS_FETCH_ALL_INPUT = {
  /**
   * Agent Id
   * @description ID of the agent whose containers will be fetched.
   */
  agentId?: string;
};

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_CONTAINERS_FETCH_ALL tool output.
 */
type PHANTOMBUSTER_GET_CONTAINERS_FETCH_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Containers
       * @description List of container objects.
       */
      containers: {
          /**
           * Agent Id
           * @description ID of the agent associated with this container.
           */
          agentId: string;
          /**
           * Created At
           * @description Creation timestamp in milliseconds since Unix epoch.
           */
          createdAt: number;
          /**
           * Id
           * @description Unique identifier of the container.
           */
          id: string;
          /**
           * Status
           * @description Current status of the container (e.g., 'running', 'finished').
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp in milliseconds since Unix epoch.
           */
          updatedAt: number;
      }[];
      /**
       * Max Limit Reached
       * @description Indicates if maximum fetch limit was reached.
       */
      maxLimitReached: boolean;
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_LOCATION_IP tool input.
 */
type PHANTOMBUSTER_GET_LOCATION_IP_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to retrieve the country of. Omit to use the current environment's public IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_LOCATION_IP tool output.
 */
type PHANTOMBUSTER_GET_LOCATION_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country name of the provided or environment IP address.
       */
      country: string;
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_EXPORT_AGENT_USAGE tool input.
 */
type PHANTOMBUSTER_GET_ORGS_EXPORT_AGENT_USAGE_INPUT = {
  /**
   * Agent Id
   * @description If set, export data only for this agent ID.
   * @default null
   */
  agentId: string | null;
  /**
   * Days
   * @description Number of days of data to export (1 to 180).
   */
  days?: number;
};

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_EXPORT_AGENT_USAGE tool output.
 */
type PHANTOMBUSTER_GET_ORGS_EXPORT_AGENT_USAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Csv
       * @description Raw CSV content containing agent usage details for the organization.
       */
      csv: string;
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_EXPORT_CONTAINER_USAGE tool input.
 */
type PHANTOMBUSTER_GET_ORGS_EXPORT_CONTAINER_USAGE_INPUT = {
  /**
   * Agent Id
   * @description If set, export data only for this agent ID.
   * @default null
   */
  agentId: string | null;
  /**
   * Days
   * @description Number of days of data to export (1 to 180).
   */
  days?: number;
};

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_EXPORT_CONTAINER_USAGE tool output.
 */
type PHANTOMBUSTER_GET_ORGS_EXPORT_CONTAINER_USAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Csv
       * @description Raw CSV content containing container usage details for the organization.
       */
      csv: string;
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_FETCH tool input.
 */
type PHANTOMBUSTER_GET_ORGS_FETCH_INPUT = object;

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_FETCH tool output.
 */
type PHANTOMBUSTER_GET_ORGS_FETCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp or epoch ms when the organization was created.
       */
      createdAt: string | null;
      /**
       * Id
       * @description Unique identifier of the organization.
       */
      id: string;
      /**
       * Name
       * @description Name of the organization.
       */
      name: string;
      /**
       * Slug
       * @description URL-friendly slug of the organization.
       * @default null
       */
      slug: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp or epoch ms when the organization was last updated.
       * @default null
       */
      updatedAt: number | null;
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_FETCH_AGENT_GROUPS tool input.
 */
type PHANTOMBUSTER_GET_ORGS_FETCH_AGENT_GROUPS_INPUT = {
  /**
   * X Phantombuster Org
   * @description ID of the org performing the operation (omit if using your own API key).
   * @default null
   */
  "X-Phantombuster-Org": string | null;
};

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_FETCH_AGENT_GROUPS tool output.
 */
type PHANTOMBUSTER_GET_ORGS_FETCH_AGENT_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agent Groups
       * @description List of agent group names in the organization, in order.
       */
      agentGroups: string[];
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_FETCH_RESOURCES tool input.
 */
type PHANTOMBUSTER_GET_ORGS_FETCH_RESOURCES_INPUT = object;

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_FETCH_RESOURCES tool output.
 */
type PHANTOMBUSTER_GET_ORGS_FETCH_RESOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agent Count
       * @description Total number of agents in the organization.
       */
      agentCount: number;
      /**
       * Daily Ai Credit
       * @description AI credits consumed today.
       */
      dailyAiCredit: number;
      /**
       * Daily Captcha
       * @description Number of CAPTCHAs solved today.
       */
      dailyCaptcha: number;
      /**
       * Daily Discovered Mail
       * @description Number of discovered emails today.
       */
      dailyDiscoveredMail: number;
      /**
       * Daily Execution Time
       * @description Execution time used today in ms.
       */
      dailyExecutionTime: number;
      /**
       * Daily Mail
       * @description Number of emails sent today.
       */
      dailyMail: number;
      /**
       * Monthly Ai Credit
       * @description AI credits consumed this month.
       */
      monthlyAiCredit: number;
      /**
       * Monthly Captcha
       * @description Number of CAPTCHAs solved this month.
       */
      monthlyCaptcha: number;
      /**
       * Monthly Discovered Mail
       * @description Number of discovered emails this month.
       */
      monthlyDiscoveredMail: number;
      /**
       * Monthly Execution Time
       * @description Execution time used this month in ms.
       */
      monthlyExecutionTime: number;
      /**
       * Monthly Mail
       * @description Number of emails sent this month.
       */
      monthlyMail: number;
      /**
       * Plan
       * @description Detailed plan information.
       */
      plan: {
          /**
           * Agents
           * @description Number of agents permitted.
           */
          agents: number;
          /**
           * Daily Ai Credits
           * @description Daily AI credits limit.
           */
          dailyAiCredits: number;
          /**
           * Daily Captchas
           * @description Daily CAPTCHA solving limit.
           */
          dailyCaptchas: number;
          /**
           * Daily Discovered Mails
           * @description Daily discovered mail (leads) limit.
           */
          dailyDiscoveredMails: number;
          /**
           * Daily Execution Time
           * @description Daily execution time limit in ms.
           */
          dailyExecutionTime: number;
          /**
           * Daily Mails
           * @description Daily email sending limit.
           */
          dailyMails: number;
          /**
           * Duration
           * @description Plan duration in ms.
           */
          duration: number;
          /**
           * Is Available
           * @description Whether the plan is currently available.
           */
          isAvailable: boolean;
          /**
           * Is Upgradable
           * @description Whether the plan can be upgraded.
           */
          isUpgradable: boolean;
          /**
           * Mongo Storage
           * @description Allowed MongoDB storage in bytes or MB.
           */
          mongoStorage: number;
          /**
           * Monthly Ai Credits
           * @description Monthly AI credits limit.
           */
          monthlyAiCredits: number;
          /**
           * Monthly Captchas
           * @description Monthly CAPTCHA solving limit.
           */
          monthlyCaptchas: number;
          /**
           * Monthly Discovered Mails
           * @description Monthly discovered mail limit.
           */
          monthlyDiscoveredMails: number;
          /**
           * Monthly Execution Time
           * @description Monthly execution time limit in ms.
           */
          monthlyExecutionTime: number;
          /**
           * Monthly Price
           * @description Monthly price in billing currency.
           */
          monthlyPrice: number;
          /**
           * Monthly Prices
           * @description Mapping of currency codes to monthly prices.
           */
          monthlyPrices: {
              [key: string]: number;
          };
          /**
           * Name
           * @description Name of the plan.
           */
          name: string;
          /**
           * Parallelism
           * @description Max parallel executions.
           */
          parallelism: number;
          /**
           * Plan Should Cancel At
           * @description Timestamp (ms) when plan is scheduled to cancel.
           * @default null
           */
          planShouldCancelAt: number | null;
          /**
           * S3 Storage
           * @description Allowed S3 storage in bytes or MB.
           */
          s3Storage: number;
          /**
           * Scripts
           * @description Number of scripts permitted.
           */
          scripts: number;
          /**
           * Yearly Price
           * @description Yearly price in billing currency.
           */
          yearlyPrice: number;
          /**
           * Yearly Prices
           * @description Mapping of currency codes to yearly prices.
           */
          yearlyPrices: {
              [key: string]: number;
          };
      };
      /**
       * Plan Name
       * @description Name of the current subscription plan.
       */
      planName: string;
      /**
       * S3 Storage
       * @description Total S3 storage used in MB.
       */
      s3Storage: number;
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_FETCH_RUNNING_CONTAINERS tool input.
 */
type PHANTOMBUSTER_GET_ORGS_FETCH_RUNNING_CONTAINERS_INPUT = object;

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORGS_FETCH_RUNNING_CONTAINERS tool output.
 */
type PHANTOMBUSTER_GET_ORGS_FETCH_RUNNING_CONTAINERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Containers
       * @description List of the current organization's running containers.
       */
      containers: {
          /**
           * Agent Id
           * @description ID of the agent associated with this container.
           */
          agentId: string;
          /**
           * Created At
           * @description Creation timestamp in milliseconds since Unix epoch.
           */
          createdAt: number;
          /**
           * Id
           * @description Unique identifier of the container.
           */
          id: string;
          /**
           * Status
           * @description Current status of the container (e.g., running, finished).
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp in milliseconds since Unix epoch.
           */
          updatedAt: number;
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORG_STORAGE_LISTS_FETCH_ALL tool input.
 */
type PHANTOMBUSTER_GET_ORG_STORAGE_LISTS_FETCH_ALL_INPUT = object;

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_ORG_STORAGE_LISTS_FETCH_ALL tool output.
 */
type PHANTOMBUSTER_GET_ORG_STORAGE_LISTS_FETCH_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Storage Lists
       * @description List of organization storage lists.
       */
      storageLists: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the list was created.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the list.
           */
          id: string;
          /**
           * Item Count
           * @description Number of items currently in the list.
           */
          itemCount: number;
          /**
           * Name
           * @description Name of the list.
           */
          name: string;
          /**
           * Org Id
           * @description Organization ID owning the list.
           */
          orgId: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the list was last updated.
           */
          updatedAt: string;
      }[];
      /**
       * Total
       * @description Total number of storage lists in the organization.
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_SCRIPTS_FETCH_ALL tool input.
 */
type PHANTOMBUSTER_GET_SCRIPTS_FETCH_ALL_INPUT = object;

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_GET_SCRIPTS_FETCH_ALL tool output.
 */
type PHANTOMBUSTER_GET_SCRIPTS_FETCH_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Scripts
       * @description List of script metadata objects
       */
      scripts: {
          /**
           * Http Headers
           * @description HTTP headers of the script, if any
           * @default null
           */
          httpHeaders: {
              [key: string]: string;
          } | null;
          /**
           * Id
           * @description Unique identifier of the script
           */
          id: string;
          /**
           * Last Save Date
           * @description Unix timestamp (ms) of the last save date
           */
          lastSaveDate: number;
          /**
           * Name
           * @description Name of the script
           */
          name: string;
          /**
           * Nonce
           * @description Nonce associated with the script
           */
          nonce: number;
          /**
           * Source
           * @description Source of the script
           */
          source: string;
          /**
           * Url
           * @description URL associated with the script
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_POST_AGENTS_UNSCHEDULE_ALL tool input.
 */
type PHANTOMBUSTER_POST_AGENTS_UNSCHEDULE_ALL_INPUT = object;

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_POST_AGENTS_UNSCHEDULE_ALL tool output.
 */
type PHANTOMBUSTER_POST_AGENTS_UNSCHEDULE_ALL_OUTPUT = {
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_POST_AI_COMPLETIONS tool input.
 */
type PHANTOMBUSTER_POST_AI_COMPLETIONS_INPUT = {
  /**
   * Max Tokens
   * @description Maximum number of tokens to generate in the completion.
   * @default null
   */
  maxTokens: number | null;
  /**
   * Model
   * @description Identifier of the AI model to use for the completion.
   * @default null
   */
  model: string | null;
  /**
   * N
   * @description Number of completion choices to generate.
   * @default null
   */
  n: number | null;
  /**
   * Prompt
   * @description Input text prompt to generate a completion for.
   */
  prompt?: string;
  /**
   * Stop
   * @description Sequences where the API will stop generating further tokens.
   * @default null
   */
  stop: string[] | null;
  /**
   * Temperature
   * @description Sampling temperature between 0 and 1.
   * @default null
   */
  temperature: number | null;
  /**
   * Top P
   * @description Nucleus sampling probability between 0 and 1.
   * @default null
   */
  topP: number | null;
};

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_POST_AI_COMPLETIONS tool output.
 */
type PHANTOMBUSTER_POST_AI_COMPLETIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Choices
       * @description List of generated completion strings.
       */
      choices: string[];
      /**
       * Credits Cost
       * @description Cost in credits for this request.
       */
      creditsCost: number;
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_POST_BRANCHES_CREATE tool input.
 */
type PHANTOMBUSTER_POST_BRANCHES_CREATE_INPUT = {
  /**
   * X Phantombuster Org
   * @description ID of the organization performing the operation (not needed when using a third party key).
   * @default null
   */
  "X-Phantombuster-Org": string | null;
  /**
   * Name
   * @description Name of the branch to create.
   */
  name?: string;
};

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_POST_BRANCHES_CREATE tool output.
 */
type PHANTOMBUSTER_POST_BRANCHES_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created branch.
       */
      id: string;
      /**
       * Name
       * @description Name of the created branch.
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
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_POST_BRANCHES_DELETE tool input.
 */
type PHANTOMBUSTER_POST_BRANCHES_DELETE_INPUT = {
  /**
   * Id
   * @description The unique identifier of the branch to be deleted.
   */
  id?: string;
};

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_POST_BRANCHES_DELETE tool output.
 */
type PHANTOMBUSTER_POST_BRANCHES_DELETE_OUTPUT = {
  /**
   * Data
   * @description Result data for the delete operation.
   */
  data?: {
      /**
       * Deleted
       * @description Indicates whether the branch was successfully deleted.
       */
      deleted: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Status of the delete operation, e.g., 'success' or 'error'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_POST_HCAPTCHA tool input.
 */
type PHANTOMBUSTER_POST_HCAPTCHA_INPUT = {
  /**
   * Page Url
   * @description Full URL of the page where the hCaptcha appears.
   */
  pageUrl?: string;
  /**
   * Proxy
   * @description Proxy URL (e.g., http://user:pass@host:port) to route requests through.
   * @default null
   */
  proxy: string | null;
  /**
   * Site Key
   * @description The public site key of the hCaptcha widget.
   */
  siteKey?: string;
  /**
   * User Agent
   * @description Custom User-Agent to simulate in the solving request.
   * @default null
   */
  userAgent: string | null;
};

/**
 * Type of PHANTOMBUSTER's PHANTOMBUSTER_POST_HCAPTCHA tool output.
 */
type PHANTOMBUSTER_POST_HCAPTCHA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the challenge could not be solved.
       * @default null
       */
      error: string | null;
      /**
       * Token
       * @description The hCaptcha response token to use for form submissions.
       * @default null
       */
      token: string | null;
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
 * Type map of all available tool input types for toolkit "PHANTOMBUSTER".
 */
export type PHANTOMBUSTER_TOOL_INPUTS = {
  GET_AGENTS_FETCH_ALL: PHANTOMBUSTER_GET_AGENTS_FETCH_ALL_INPUT
  GET_AGENTS_FETCH_DELETED: PHANTOMBUSTER_GET_AGENTS_FETCH_DELETED_INPUT
  GET_BRANCHES_DIFF: PHANTOMBUSTER_GET_BRANCHES_DIFF_INPUT
  GET_BRANCHES_FETCH_ALL: PHANTOMBUSTER_GET_BRANCHES_FETCH_ALL_INPUT
  GET_CONTAINERS_FETCH_ALL: PHANTOMBUSTER_GET_CONTAINERS_FETCH_ALL_INPUT
  GET_LOCATION_IP: PHANTOMBUSTER_GET_LOCATION_IP_INPUT
  GET_ORGS_EXPORT_AGENT_USAGE: PHANTOMBUSTER_GET_ORGS_EXPORT_AGENT_USAGE_INPUT
  GET_ORGS_EXPORT_CONTAINER_USAGE: PHANTOMBUSTER_GET_ORGS_EXPORT_CONTAINER_USAGE_INPUT
  GET_ORGS_FETCH: PHANTOMBUSTER_GET_ORGS_FETCH_INPUT
  GET_ORGS_FETCH_AGENT_GROUPS: PHANTOMBUSTER_GET_ORGS_FETCH_AGENT_GROUPS_INPUT
  GET_ORGS_FETCH_RESOURCES: PHANTOMBUSTER_GET_ORGS_FETCH_RESOURCES_INPUT
  GET_ORGS_FETCH_RUNNING_CONTAINERS: PHANTOMBUSTER_GET_ORGS_FETCH_RUNNING_CONTAINERS_INPUT
  GET_ORG_STORAGE_LISTS_FETCH_ALL: PHANTOMBUSTER_GET_ORG_STORAGE_LISTS_FETCH_ALL_INPUT
  GET_SCRIPTS_FETCH_ALL: PHANTOMBUSTER_GET_SCRIPTS_FETCH_ALL_INPUT
  POST_AGENTS_UNSCHEDULE_ALL: PHANTOMBUSTER_POST_AGENTS_UNSCHEDULE_ALL_INPUT
  POST_AI_COMPLETIONS: PHANTOMBUSTER_POST_AI_COMPLETIONS_INPUT
  POST_BRANCHES_CREATE: PHANTOMBUSTER_POST_BRANCHES_CREATE_INPUT
  POST_BRANCHES_DELETE: PHANTOMBUSTER_POST_BRANCHES_DELETE_INPUT
  POST_HCAPTCHA: PHANTOMBUSTER_POST_HCAPTCHA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PHANTOMBUSTER".
 */
export type PHANTOMBUSTER_TOOL_OUTPUTS = {
  GET_AGENTS_FETCH_ALL: PHANTOMBUSTER_GET_AGENTS_FETCH_ALL_OUTPUT
  GET_AGENTS_FETCH_DELETED: PHANTOMBUSTER_GET_AGENTS_FETCH_DELETED_OUTPUT
  GET_BRANCHES_DIFF: PHANTOMBUSTER_GET_BRANCHES_DIFF_OUTPUT
  GET_BRANCHES_FETCH_ALL: PHANTOMBUSTER_GET_BRANCHES_FETCH_ALL_OUTPUT
  GET_CONTAINERS_FETCH_ALL: PHANTOMBUSTER_GET_CONTAINERS_FETCH_ALL_OUTPUT
  GET_LOCATION_IP: PHANTOMBUSTER_GET_LOCATION_IP_OUTPUT
  GET_ORGS_EXPORT_AGENT_USAGE: PHANTOMBUSTER_GET_ORGS_EXPORT_AGENT_USAGE_OUTPUT
  GET_ORGS_EXPORT_CONTAINER_USAGE: PHANTOMBUSTER_GET_ORGS_EXPORT_CONTAINER_USAGE_OUTPUT
  GET_ORGS_FETCH: PHANTOMBUSTER_GET_ORGS_FETCH_OUTPUT
  GET_ORGS_FETCH_AGENT_GROUPS: PHANTOMBUSTER_GET_ORGS_FETCH_AGENT_GROUPS_OUTPUT
  GET_ORGS_FETCH_RESOURCES: PHANTOMBUSTER_GET_ORGS_FETCH_RESOURCES_OUTPUT
  GET_ORGS_FETCH_RUNNING_CONTAINERS: PHANTOMBUSTER_GET_ORGS_FETCH_RUNNING_CONTAINERS_OUTPUT
  GET_ORG_STORAGE_LISTS_FETCH_ALL: PHANTOMBUSTER_GET_ORG_STORAGE_LISTS_FETCH_ALL_OUTPUT
  GET_SCRIPTS_FETCH_ALL: PHANTOMBUSTER_GET_SCRIPTS_FETCH_ALL_OUTPUT
  POST_AGENTS_UNSCHEDULE_ALL: PHANTOMBUSTER_POST_AGENTS_UNSCHEDULE_ALL_OUTPUT
  POST_AI_COMPLETIONS: PHANTOMBUSTER_POST_AI_COMPLETIONS_OUTPUT
  POST_BRANCHES_CREATE: PHANTOMBUSTER_POST_BRANCHES_CREATE_OUTPUT
  POST_BRANCHES_DELETE: PHANTOMBUSTER_POST_BRANCHES_DELETE_OUTPUT
  POST_HCAPTCHA: PHANTOMBUSTER_POST_HCAPTCHA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PHANTOMBUSTER toolkit.
 */
export const PHANTOMBUSTER = {
  slug: "phantombuster",
  tools: {
    /**
     * Tool to fetch all agents associated with the current user or organization. use after validating your phantombuster api key to list available agents.
     */
    GET_AGENTS_FETCH_ALL: "PHANTOMBUSTER_GET_AGENTS_FETCH_ALL",
    /**
     * Tool to get deleted agents for the current user or organization. use when you need to audit recently removed agents.
     */
    GET_AGENTS_FETCH_DELETED: "PHANTOMBUSTER_GET_AGENTS_FETCH_DELETED",
    /**
     * Tool to get the length difference between the staging and release branch of all scripts. use when assessing branch changes before deployment.
     */
    GET_BRANCHES_DIFF: "PHANTOMBUSTER_GET_BRANCHES_DIFF",
    /**
     * Tool to fetch all branches associated with the current organization. use when you need to enumerate every branch across your scripts.
     */
    GET_BRANCHES_FETCH_ALL: "PHANTOMBUSTER_GET_BRANCHES_FETCH_ALL",
    /**
     * Tool to get all containers associated with a specified agent. use when you need to retrieve every container for a given agent, for monitoring or reporting.
     */
    GET_CONTAINERS_FETCH_ALL: "PHANTOMBUSTER_GET_CONTAINERS_FETCH_ALL",
    /**
     * Tool to retrieve the country of a given or environment ip address. use when you need to geolocate an ip endpoint. example: get location ip(ip="8.8.8.8")
     */
    GET_LOCATION_IP: "PHANTOMBUSTER_GET_LOCATION_IP",
    /**
     * Tool to export agent usage csv for current organization. use when you need a downloadable report of all agents' run statistics in csv format.
     */
    GET_ORGS_EXPORT_AGENT_USAGE: "PHANTOMBUSTER_GET_ORGS_EXPORT_AGENT_USAGE",
    /**
     * Tool to export container usage csv for current organization. use when you need a downloadable csv report of container execution history up to 6 months; url expires in 30 days.
     */
    GET_ORGS_EXPORT_CONTAINER_USAGE: "PHANTOMBUSTER_GET_ORGS_EXPORT_CONTAINER_USAGE",
    /**
     * Tool to fetch current organization details. use when you need to retrieve the organization associated with the provided api key.
     */
    GET_ORGS_FETCH: "PHANTOMBUSTER_GET_ORGS_FETCH",
    /**
     * Tool to get agent groups and order for the current organization. use when you need to review how agents are grouped and ordered.
     */
    GET_ORGS_FETCH_AGENT_GROUPS: "PHANTOMBUSTER_GET_ORGS_FETCH_AGENT_GROUPS",
    /**
     * Tool to get current organization's resources and usage. use when you need to monitor quotas.
     */
    GET_ORGS_FETCH_RESOURCES: "PHANTOMBUSTER_GET_ORGS_FETCH_RESOURCES",
    /**
     * Tool to get the current organization's running containers. use after listing agents to identify active containers across the organization.
     */
    GET_ORGS_FETCH_RUNNING_CONTAINERS: "PHANTOMBUSTER_GET_ORGS_FETCH_RUNNING_CONTAINERS",
    /**
     * Tool to fetch all storage lists for the authenticated organization. use when you need to enumerate every storage list available (beta).
     */
    GET_ORG_STORAGE_LISTS_FETCH_ALL: "PHANTOMBUSTER_GET_ORG_STORAGE_LISTS_FETCH_ALL",
    /**
     * Tool to fetch all scripts for the current user. use after authenticating your phantombuster api key to list scripts without their code bodies.
     */
    GET_SCRIPTS_FETCH_ALL: "PHANTOMBUSTER_GET_SCRIPTS_FETCH_ALL",
    /**
     * Tool to unschedule all scheduled launches for agents. use when you need to disable every automated agent run organization-wide after verifying your api key.
     */
    POST_AGENTS_UNSCHEDULE_ALL: "PHANTOMBUSTER_POST_AGENTS_UNSCHEDULE_ALL",
    /**
     * Tool to request a text completion from the ai module. use when you need to generate text based on a prompt.
     */
    POST_AI_COMPLETIONS: "PHANTOMBUSTER_POST_AI_COMPLETIONS",
    /**
     * Tool to create a new branch. use when you need to isolate updates by creating a separate branch. use after authenticating with your phantombuster api key and optionally specifying an organization.
     */
    POST_BRANCHES_CREATE: "PHANTOMBUSTER_POST_BRANCHES_CREATE",
    /**
     * Tool to delete a branch by id. use when you need to remove obsolete or incorrect script branches; ensure the branch exists before calling.
     */
    POST_BRANCHES_DELETE: "PHANTOMBUSTER_POST_BRANCHES_DELETE",
    /**
     * Tool to solve an hcaptcha challenge. use when you need a valid hcaptcha token for form submissions or automation flows.
     */
    POST_HCAPTCHA: "PHANTOMBUSTER_POST_HCAPTCHA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PHANTOMBUSTER".
 */
export type PHANTOMBUSTER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PHANTOMBUSTER".
 */
export type PHANTOMBUSTER_TRIGGER_EVENTS = {}
