// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BUILDKITE's BUILDKITE_GET_CURRENT_ACCESS_TOKEN tool input.
 */
type BUILDKITE_GET_CURRENT_ACCESS_TOKEN_INPUT = object;

/**
 * Type of BUILDKITE's BUILDKITE_GET_CURRENT_ACCESS_TOKEN tool output.
 */
type BUILDKITE_GET_CURRENT_ACCESS_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Scopes
       * @description Permission scopes granted to the access token
       */
      scopes: string[];
      /**
       * Uuid
       * @description Unique identifier of the access token
       */
      uuid: string;
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
 * Type of BUILDKITE's BUILDKITE_GET_META tool input.
 */
type BUILDKITE_GET_META_INPUT = object;

/**
 * Type of BUILDKITE's BUILDKITE_GET_META tool output.
 */
type BUILDKITE_GET_META_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhook Ips
       * @description List of IP addresses in CIDR notation that Buildkite uses to send outbound traffic.
       */
      webhook_ips: string[];
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
 * Type of BUILDKITE's BUILDKITE_LIST_PIPELINE_AGENTS tool input.
 */
type BUILDKITE_LIST_PIPELINE_AGENTS_INPUT = {
  /**
   * Hostname
   * @description Filter results by agent hostname.
   * @default null
   */
  hostname: string | null;
  /**
   * Name
   * @description Filter results by agent name.
   * @default null
   */
  name: string | null;
  /**
   * Org Slug
   * @description The slug of the organization whose agents should be listed.
   */
  org_slug?: string;
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1-100).
   * @default null
   */
  per_page: number | null;
  /**
   * Version
   * @description Filter results by exact agent version.
   * @default null
   */
  version: string | null;
};

/**
 * Type of BUILDKITE's BUILDKITE_LIST_PIPELINE_AGENTS tool output.
 */
type BUILDKITE_LIST_PIPELINE_AGENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connection State
       * @description The connection state (e.g., 'connected').
       */
      connection_state: string;
      /**
       * Created At
       * @description Timestamp when the agent was created.
       */
      created_at: string;
      /**
       * Creator
       * @description Information about the user who created the agent.
       */
      creator: {
          /**
           * Avatar Url
           * @description The avatar URL of the user who created the agent.
           */
          avatar_url: string;
          /**
           * Created At
           * @description Timestamp when the user was created (ISO8601).
           */
          created_at: string;
          /**
           * Email
           * @description The email of the user who created the agent.
           */
          email: string;
          /**
           * Graphql Id
           * @description The GraphQL identifier of the user who created the agent.
           */
          graphql_id: string;
          /**
           * Id
           * @description The unique identifier of the user who created the agent.
           */
          id: string;
          /**
           * Name
           * @description The name of the user who created the agent.
           */
          name: string;
      };
      /**
       * Graphql Id
       * @description The GraphQL identifier of the agent.
       */
      graphql_id: string;
      /**
       * Hostname
       * @description The hostname of the agent machine.
       */
      hostname: string;
      /**
       * Id
       * @description The unique identifier of the agent.
       */
      id: string;
      /**
       * Ip Address
       * @description The IP address of the agent.
       */
      ip_address: string;
      /**
       * AgentJob
       * @description Information about the current or last job.
       * @default null
       */
      job: {
          /**
           * Agent
           * @description Nested agent information (currently null).
           * @default null
           */
          agent: {
              [key: string]: unknown;
          } | null;
          /**
           * Agent Query Rules
           * @description The agent query rules for the job.
           */
          agent_query_rules: string[];
          /**
           * Artifact Paths
           * @description The artifact paths used by the job.
           * @default null
           */
          artifact_paths: string | null;
          /**
           * Artifacts Url
           * @description The API URL to fetch job artifacts.
           */
          artifacts_url: string;
          /**
           * Build Url
           * @description The API URL of the build for the job.
           */
          build_url: string;
          /**
           * Command
           * @description The command executed by the job.
           * @default null
           */
          command: string | null;
          /**
           * Created At
           * @description Timestamp when the job was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Exit Status
           * @description The exit status code of the job.
           * @default null
           */
          exit_status: number | null;
          /**
           * Finished At
           * @description Timestamp when the job finished.
           * @default null
           */
          finished_at: string | null;
          /**
           * Graphql Id
           * @description The GraphQL identifier of the job.
           */
          graphql_id: string;
          /**
           * Id
           * @description The unique identifier of the job.
           */
          id: string;
          /**
           * Log Url
           * @description The API URL to fetch the job's log.
           */
          log_url: string;
          /**
           * Name
           * @description The name of the job.
           */
          name: string;
          /**
           * Raw Log Url
           * @description The API URL to fetch the raw log.
           */
          raw_log_url: string;
          /**
           * Scheduled At
           * @description Timestamp when the job was scheduled.
           * @default null
           */
          scheduled_at: string | null;
          /**
           * Script Path
           * @description The script path or command for the job.
           * @default null
           */
          script_path: string | null;
          /**
           * Soft Failed
           * @description Whether the job soft-failed.
           * @default null
           */
          soft_failed: boolean | null;
          /**
           * Started At
           * @description Timestamp when the job started.
           * @default null
           */
          started_at: string | null;
          /**
           * State
           * @description The state of the job (e.g., 'passed').
           */
          state: string;
          /**
           * Type
           * @description The type of the job (e.g., 'script').
           */
          type: string;
          /**
           * Web Url
           * @description The web UI URL of the job.
           */
          web_url: string;
      } | null;
      /**
       * Last Job Finished At
       * @description Timestamp when the last job finished.
       * @default null
       */
      last_job_finished_at: string | null;
      /**
       * Meta Data
       * @description Metadata key-value pairs associated with the agent.
       */
      meta_data: string[];
      /**
       * Name
       * @description The name of the agent.
       */
      name: string;
      /**
       * Priority
       * @description The priority of the agent.
       * @default null
       */
      priority: number | null;
      /**
       * Url
       * @description The API URL of the agent.
       */
      url: string;
      /**
       * User Agent
       * @description The user agent string of the agent process.
       */
      user_agent: string;
      /**
       * Version
       * @description The version of the agent.
       */
      version: string;
      /**
       * Web Url
       * @description The web UI URL of the agent.
       */
      web_url: string;
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
 * Type map of all available tool input types for toolkit "BUILDKITE".
 */
export type BUILDKITE_TOOL_INPUTS = {
  GET_CURRENT_ACCESS_TOKEN: BUILDKITE_GET_CURRENT_ACCESS_TOKEN_INPUT
  GET_META: BUILDKITE_GET_META_INPUT
  LIST_PIPELINE_AGENTS: BUILDKITE_LIST_PIPELINE_AGENTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BUILDKITE".
 */
export type BUILDKITE_TOOL_OUTPUTS = {
  GET_CURRENT_ACCESS_TOKEN: BUILDKITE_GET_CURRENT_ACCESS_TOKEN_OUTPUT
  GET_META: BUILDKITE_GET_META_OUTPUT
  LIST_PIPELINE_AGENTS: BUILDKITE_LIST_PIPELINE_AGENTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BUILDKITE toolkit.
 */
export const BUILDKITE = {
  slug: "buildkite",
  tools: {
    /**
     * Tool to retrieve the authenticated api access token details. use when you need to confirm the validity and scopes of the current api token.
     */
    GET_CURRENT_ACCESS_TOKEN: "BUILDKITE_GET_CURRENT_ACCESS_TOKEN",
    /**
     * Tool to retrieve metadata about the buildkite api. use when you need to fetch webhook ip addresses for firewall or security configurations.
     */
    GET_META: "BUILDKITE_GET_META",
    /**
     * Tool to list connected agents for an organization. use after confirming the organization slug. supports optional filtering and pagination.
     */
    LIST_PIPELINE_AGENTS: "BUILDKITE_LIST_PIPELINE_AGENTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BUILDKITE".
 */
export type BUILDKITE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BUILDKITE".
 */
export type BUILDKITE_TRIGGER_EVENTS = {}
