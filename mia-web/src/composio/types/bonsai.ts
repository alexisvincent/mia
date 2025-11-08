// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BONSAI's BONSAI_BONSAI_GET_CLUSTER_DETAILS tool input.
 */
type BONSAI_BONSAI_GET_CLUSTER_DETAILS_INPUT = {
  /**
   * Slug
   * @description Unique, machine-readable slug identifying the bonsai cluster.
   */
  slug?: string;
};

/**
 * Type of BONSAI's BONSAI_BONSAI_GET_CLUSTER_DETAILS tool output.
 */
type BONSAI_BONSAI_GET_CLUSTER_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cluster
       * @description The cluster details object.
       */
      cluster: {
          /**
           * Access
           * @description Connection access information for the cluster.
           */
          access: {
              /**
               * Host
               * @description Host name of the cluster.
               */
              host: string;
              /**
               * Port
               * @description HTTP port for accessing the cluster.
               */
              port: number;
              /**
               * Scheme
               * @description HTTP scheme (http or https) used for cluster access.
               */
              scheme: string;
          };
          /**
           * Name
           * @description Human-readable name of the cluster.
           */
          name: string;
          /**
           * Plan
           * @description Subscription plan details for this cluster.
           */
          plan: {
              /**
               * Slug
               * @description Plan slug of the cluster's subscription plan.
               */
              slug: string;
              /**
               * Uri
               * @description URI to retrieve details about this plan.
               */
              uri: string;
          };
          /**
           * Release
           * @description Release details for the search service this cluster is running.
           */
          release: {
              /**
               * Package Name
               * @description Package name of the release.
               */
              package_name: string;
              /**
               * Service Type
               * @description Type of the search service (elasticsearch or opensearch).
               */
              service_type: string;
              /**
               * Slug
               * @description Slug of the search service release.
               */
              slug: string;
              /**
               * Uri
               * @description URI to retrieve details about this release.
               */
              uri: string;
              /**
               * Version
               * @description Search service release version the cluster is running.
               */
              version: string;
          };
          /**
           * Slug
           * @description Unique, machine-readable slug of the cluster.
           */
          slug: string;
          /**
           * Space
           * @description Spatial location details of where this cluster is running.
           */
          space: {
              /**
               * Path
               * @description Path identifying the space where the cluster is running.
               */
              path: string;
              /**
               * Region
               * @description Geographic region of the space.
               */
              region: string;
              /**
               * Uri
               * @description URI to retrieve details about this space.
               */
              uri: string;
          };
          /**
           * State
           * @description Current operational state of the cluster.
           * @enum {string}
           */
          state: "DEPROVISIONED" | "DEPROVISIONING" | "DISABLED" | "MAINTENANCE" | "PROVISIONED" | "PROVISIONING" | "READONLY" | "UPDATING PLAN";
          /**
           * Stats
           * @description Statistics about the cluster resource usage.
           */
          stats: {
              /**
               * Data Bytes Used
               * @description Total bytes of data used on disk by the cluster.
               */
              data_bytes_used: number;
              /**
               * Docs
               * @description Number of documents in the cluster index(es).
               */
              docs: number;
              /**
               * Shards Used
               * @description Number of primary shards in use by the cluster.
               */
              shards_used: number;
          };
          /**
           * Uri
           * @description URI to retrieve details about this cluster.
           */
          uri: string;
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
 * Type of BONSAI's BONSAI_BONSAI_LIST_SPACES tool input.
 */
type BONSAI_BONSAI_LIST_SPACES_INPUT = object;

/**
 * Type of BONSAI's BONSAI_BONSAI_LIST_SPACES tool output.
 */
type BONSAI_BONSAI_LIST_SPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Spaces
       * @description List of available spaces for the account
       */
      spaces: {
          /**
           * Cloud
           * @description Details about the cloud provider and region attributes for this space
           */
          cloud: {
              /**
               * Provider
               * @description Machine-readable name of the cloud provider for this space
               */
              provider: string;
              /**
               * Region
               * @description Machine-readable name of the geographic region for this space
               */
              region: string;
          };
          /**
           * Path
           * @description Machine-readable name for the server group or space
           */
          path: string;
          /**
           * Private Network
           * @description Indicates if this space is isolated from the public Internet
           */
          private_network: boolean;
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
 * Type of BONSAI's BONSAI_GET_SPACE_DETAILS tool input.
 */
type BONSAI_GET_SPACE_DETAILS_INPUT = {
  /**
   * Path
   * @description The machine-readable path of the space to retrieve details for, e.g., 'omc/bonsai/us-east-1/common'.
   */
  path?: string;
};

/**
 * Type of BONSAI's BONSAI_GET_SPACE_DETAILS tool output.
 */
type BONSAI_GET_SPACE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cloud
       * @description Details about the cloud provider and region for this space.
       */
      cloud?: {
          /**
           * Provider
           * @description Machine-readable name of the cloud provider in which this space is deployed, e.g. 'aws'.
           */
          provider?: string;
          /**
           * Region
           * @description Machine-readable name of the geographic region of the server group, e.g. 'aws-us-east-1'.
           */
          region?: string;
      };
      /**
       * Path
       * @description The machine-readable path of the space, e.g. 'omc/bonsai/us-east-1/common'.
       */
      path?: string;
      /**
       * Private Network
       * @description Whether the space is isolated and inaccessible from the public Internet.
       */
      private_network?: boolean;
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
 * Type of BONSAI's BONSAI_LIST_SPACES tool input.
 */
type BONSAI_LIST_SPACES_INPUT = object;

/**
 * Type of BONSAI's BONSAI_LIST_SPACES tool output.
 */
type BONSAI_LIST_SPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Spaces
       * @description List of available space objects
       */
      spaces: {
          /**
           * Cloud
           * @description Details about the cloud provider and region attributes for this space
           */
          cloud: {
              /**
               * Provider
               * @description Machine-readable name of the cloud provider where this space is deployed
               */
              provider: string;
              /**
               * Region
               * @description Machine-readable name of the geographic region of the server group
               */
              region: string;
          };
          /**
           * Path
           * @description Machine-readable name for the server group or space
           */
          path: string;
          /**
           * Private Network
           * @description Whether the space is isolated and inaccessible from the public Internet
           */
          private_network: boolean;
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
 * Type map of all available tool input types for toolkit "BONSAI".
 */
export type BONSAI_TOOL_INPUTS = {
  BONSAI_GET_CLUSTER_DETAILS: BONSAI_BONSAI_GET_CLUSTER_DETAILS_INPUT
  BONSAI_LIST_SPACES: BONSAI_BONSAI_LIST_SPACES_INPUT
  GET_SPACE_DETAILS: BONSAI_GET_SPACE_DETAILS_INPUT
  LIST_SPACES: BONSAI_LIST_SPACES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BONSAI".
 */
export type BONSAI_TOOL_OUTPUTS = {
  BONSAI_GET_CLUSTER_DETAILS: BONSAI_BONSAI_GET_CLUSTER_DETAILS_OUTPUT
  BONSAI_LIST_SPACES: BONSAI_BONSAI_LIST_SPACES_OUTPUT
  GET_SPACE_DETAILS: BONSAI_GET_SPACE_DETAILS_OUTPUT
  LIST_SPACES: BONSAI_LIST_SPACES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BONSAI toolkit.
 */
export const BONSAI = {
  slug: "bonsai",
  tools: {
    /**
     * Tool to retrieve details for a single bonsai cluster by slug. use when you need to inspect a cluster's configuration and status.
     */
    BONSAI_GET_CLUSTER_DETAILS: "BONSAI_BONSAI_GET_CLUSTER_DETAILS",
    /**
     * Tool to retrieve a list of all available spaces. use when you need to see the server groups and geographic regions available to your account.
     */
    BONSAI_LIST_SPACES: "BONSAI_BONSAI_LIST_SPACES",
    /**
     * Tool to retrieve details for a single space by its path. use when you need metadata for a space before provisioning a cluster. use after confirming this detail exists. e.g., 'omc/bonsai/us-east-1/common'.
     */
    GET_SPACE_DETAILS: "BONSAI_GET_SPACE_DETAILS",
    /**
     * Tool to retrieve a list of all available spaces. use when you need to see the server groups and geographic regions available for your account.
     */
    LIST_SPACES: "BONSAI_LIST_SPACES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BONSAI".
 */
export type BONSAI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BONSAI".
 */
export type BONSAI_TRIGGER_EVENTS = {}
