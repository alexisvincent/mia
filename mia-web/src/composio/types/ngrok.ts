// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NGROK's NGROK_CREATE_API_KEY tool input.
 */
type NGROK_CREATE_API_KEY_INPUT = {
  /**
   * Description
   * @description Human-readable description of what uses the API key to authenticate. Optional, max 255 bytes.
   * @default null
   */
  description: string | null;
  /**
   * Metadata
   * @description Arbitrary user-defined data of this API key. Optional, max 4096 bytes.
   * @default null
   */
  metadata: string | null;
  /**
   * Owner Id
   * @description ID of the user or bot to whom the API key will be assigned. Only admins can specify an owner other than themselves.
   * @default null
   */
  owner_id: string | null;
};

/**
 * Type of NGROK's NGROK_CREATE_API_KEY tool output.
 */
type NGROK_CREATE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the API key was created, RFC 3339 format
       */
      created_at: string;
      /**
       * Description
       * @description Human-readable description of what uses the API key to authenticate
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique API key resource identifier
       */
      id: string;
      /**
       * Metadata
       * @description Arbitrary user-defined data of this API key
       * @default null
       */
      metadata: string | null;
      /**
       * Owner Id
       * @description ID of the user or bot to whom the API key is assigned
       */
      owner_id: string;
      /**
       * Token
       * @description The bearer token that can be used to authenticate requests to the ngrok API. This value is only available once, in the response from key creation.
       * @default null
       */
      token: string | null;
      /**
       * Uri
       * @description URI to the API resource of this API key
       */
      uri: string;
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
 * Type of NGROK's NGROK_DELETE_API_KEY tool input.
 */
type NGROK_DELETE_API_KEY_INPUT = {
  /**
   * Id
   * @description The unique identifier of the API key to delete
   */
  id?: string;
};

/**
 * Type of NGROK's NGROK_DELETE_API_KEY tool output.
 */
type NGROK_DELETE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key Id
       * @description The ID of the API key that was deleted
       */
      api_key_id: string;
      /**
       * Success
       * @description Indicates if the API key was successfully deleted
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
 * Type of NGROK's NGROK_GET_IP_RESTRICTIONS tool input.
 */
type NGROK_GET_IP_RESTRICTIONS_INPUT = {
  /**
   * Restriction Id
   * @description The unique identifier of the IP restriction to retrieve
   */
  restriction_id?: string;
};

/**
 * Type of NGROK's NGROK_GET_IP_RESTRICTIONS tool output.
 */
type NGROK_GET_IP_RESTRICTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the IP restriction was created, RFC 3339 format
       */
      created_at: string;
      /**
       * Description
       * @description Human-readable description of this IP restriction. optional, max 255 bytes.
       * @default null
       */
      description: string | null;
      /**
       * Enforced
       * @description True if the IP restriction will be enforced. if false, only warnings will be issued
       * @default false
       */
      enforced: boolean;
      /**
       * Id
       * @description Unique identifier for this IP restriction
       */
      id: string;
      /**
       * Ip Policies
       * @description The set of IP policies that are used to enforce the restriction
       */
      ip_policies?: {
          /**
           * Id
           * @description A resource identifier
           */
          id: string;
          /**
           * Uri
           * @description A URI for locating a resource
           */
          uri: string;
      }[];
      /**
       * Metadata
       * @description Arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes.
       * @default null
       */
      metadata: string | null;
      /**
       * Type
       * @description The type of IP restriction. this defines what traffic will be restricted with the attached policies
       */
      type: string;
      /**
       * Uri
       * @description URI of the IP restriction API resource
       */
      uri: string;
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
 * Type of NGROK's NGROK_LIST_API_KEYS tool input.
 */
type NGROK_LIST_API_KEYS_INPUT = object;

/**
 * Type of NGROK's NGROK_LIST_API_KEYS tool output.
 */
type NGROK_LIST_API_KEYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Keys
       * @description the list of API keys for this account
       */
      keys: {
          /**
           * Created At
           * @description timestamp when the api key was created, RFC 3339 format
           */
          created_at: string;
          /**
           * Description
           * @description human-readable description of what uses the API key to authenticate. optional, max 255 bytes.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description unique API key resource identifier
           */
          id: string;
          /**
           * Metadata
           * @description arbitrary user-defined data of this API key. optional, max 4096 bytes
           * @default null
           */
          metadata: string | null;
          /**
           * Owner Id
           * @description ID of the owner of this API key
           */
          owner_id: string;
          /**
           * Token
           * @description the bearer token that can be placed into the Authorization header to authenticate request to the ngrok API
           * @default null
           */
          token: string | null;
          /**
           * Uri
           * @description URI to the API resource of this API key
           */
          uri: string;
      }[];
      /**
       * Next Page Uri
       * @description URI of the next page, or null if there is no next page
       * @default null
       */
      next_page_uri: string | null;
      /**
       * Uri
       * @description URI of the API keys list API resource
       */
      uri: string;
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
 * Type of NGROK's NGROK_LIST_ENDPOINTS tool input.
 */
type NGROK_LIST_ENDPOINTS_INPUT = object;

/**
 * Type of NGROK's NGROK_LIST_ENDPOINTS tool output.
 */
type NGROK_LIST_ENDPOINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Endpoints
       * @description The list of all active endpoints on this account
       */
      endpoints?: {
          /**
           * Bindings
           * @description The bindings associated with this endpoint
           * @default null
           */
          bindings: string[] | null;
          /**
           * Created At
           * @description Timestamp when the endpoint was created in RFC 3339 format
           */
          created_at: string;
          /**
           * Description
           * @description User-supplied description of the associated tunnel
           * @default null
           */
          description: string | null;
          /**
           * EndpointRef
           * @description Reference to an ngrok resource.
           * @default null
           */
          domain: {
              /**
               * Id
               * @description A resource identifier
               */
              id: string;
              /**
               * Uri
               * @description A URI for locating a resource
               */
              uri: string;
          } | null;
          /**
           * EndpointRef
           * @description Reference to an ngrok resource.
           * @default null
           */
          edge: {
              /**
               * Id
               * @description A resource identifier
               */
              id: string;
              /**
               * Uri
               * @description A URI for locating a resource
               */
              uri: string;
          } | null;
          /**
           * Id
           * @description Unique endpoint resource identifier
           */
          id: string;
          /**
           * Metadata
           * @description User-supplied metadata of the associated tunnel or edge object
           * @default null
           */
          metadata: string | null;
          /**
           * Pooling Enabled
           * @description Whether the endpoint allows pooling
           * @default null
           */
          pooling_enabled: boolean | null;
          /**
           * EndpointRef
           * @description Reference to an ngrok resource.
           * @default null
           */
          principal: {
              /**
               * Id
               * @description A resource identifier
               */
              id: string;
              /**
               * Uri
               * @description A URI for locating a resource
               */
              uri: string;
          } | null;
          /**
           * Proto
           * @description Protocol served by this endpoint (http, https, tcp, or tls)
           */
          proto: string;
          /**
           * Public Url
           * @description URL of the hostport served by this endpoint
           * @default null
           */
          public_url: string | null;
          /**
           * Region
           * @description Identifier of the region this endpoint belongs to
           * @default null
           */
          region: string | null;
          /**
           * EndpointRef
           * @description Reference to an ngrok resource.
           * @default null
           */
          tunnel: {
              /**
               * Id
               * @description A resource identifier
               */
              id: string;
              /**
               * Uri
               * @description A URI for locating a resource
               */
              uri: string;
          } | null;
          /**
           * EndpointRef
           * @description Reference to an ngrok resource.
           * @default null
           */
          tunnel_session: {
              /**
               * Id
               * @description A resource identifier
               */
              id: string;
              /**
               * Uri
               * @description A URI for locating a resource
               */
              uri: string;
          } | null;
          /**
           * Type
           * @description Type of endpoint (ephemeral, edge, or cloud)
           */
          type: string;
          /**
           * Updated At
           * @description Timestamp when the endpoint was updated in RFC 3339 format
           */
          updated_at: string;
          /**
           * Url
           * @description The URL of the endpoint
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Next Page Uri
       * @description URI of the next page, or null if there is no next page
       * @default null
       */
      next_page_uri: string | null;
      /**
       * Uri
       * @description URI of the endpoints list API resource
       */
      uri: string;
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
 * Type of NGROK's NGROK_LIST_HTTPS_EDGES tool input.
 */
type NGROK_LIST_HTTPS_EDGES_INPUT = object;

/**
 * Type of NGROK's NGROK_LIST_HTTPS_EDGES tool output.
 */
type NGROK_LIST_HTTPS_EDGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Https Edges
       * @description The list of all HTTPS Edges on this account
       */
      https_edges: {
          /**
           * Created At
           * @description Timestamp when the edge configuration was created, RFC 3339 format
           */
          created_at: string;
          /**
           * Description
           * @description Human-readable description of what this edge will be used for
           * @default null
           */
          description: string | null;
          /**
           * Hostports
           * @description Hostports served by this edge
           */
          hostports: string[];
          /**
           * Id
           * @description Unique identifier of this edge
           */
          id: string;
          /**
           * Metadata
           * @description Arbitrary user-defined machine-readable data of this edge
           * @default null
           */
          metadata: string | null;
          /**
           * EndpointMutualTLS
           * @description Model for mutual TLS configuration
           * @default null
           */
          mutual_tls: {
              /**
               * Certificate Authorities
               * @description PEM-encoded CA certificates that will be used to validate
               * @default null
               */
              certificate_authorities: {
                  /**
                   * Id
                   * @description A resource identifier
                   */
                  id: string;
                  /**
                   * Uri
                   * @description A URI for locating a resource
                   */
                  uri: string;
              }[] | null;
              /**
               * Enabled
               * @description true if the module will be applied to traffic, false to disable
               */
              enabled: boolean;
          } | null;
          /**
           * Routes
           * @description Routes associated with this edge
           * @default []
           */
          routes: {
              [key: string]: unknown;
          }[];
          /**
           * EndpointTLSTermination
           * @description Model for TLS termination configuration
           * @default null
           */
          tls_termination: {
              /**
               * Enabled
               * @description true if the module will be applied to traffic, false to disable
               */
              enabled: boolean;
              /**
               * Min Version
               * @description The minimum TLS version used for termination
               * @default null
               */
              min_version: string | null;
              /**
               * Terminate At
               * @description edge if the ngrok edge should terminate TLS traffic, upstream if TLS traffic should be passed through
               * @default null
               */
              terminate_at: string | null;
          } | null;
          /**
           * Uri
           * @description URI of the edge API resource
           */
          uri: string;
      }[];
      /**
       * Next Page Uri
       * @description URI of the next page, or null if there is no next page
       * @default null
       */
      next_page_uri: string | null;
      /**
       * Uri
       * @description URI of the HTTPS Edge list API resource
       */
      uri: string;
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
 * Type of NGROK's NGROK_LIST_IP_POLICY_RULES tool input.
 */
type NGROK_LIST_IP_POLICY_RULES_INPUT = {
  /**
   * Before Id
   * @description The ID of the last IP policy rule from the previous page for pagination
   * @default null
   */
  before_id: string | null;
  /**
   * Limit
   * @description Maximum number of IP policy rules to return
   * @default null
   */
  limit: number | null;
};

/**
 * Type of NGROK's NGROK_LIST_IP_POLICY_RULES tool output.
 */
type NGROK_LIST_IP_POLICY_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ip Policy Rules
       * @description the list of all IP policy rules on this account
       */
      ip_policy_rules: {
          /**
           * Action
           * @description the action to apply to the policy rule, either 'allow' or 'deny'
           */
          action: string;
          /**
           * Cidr
           * @description an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported.
           */
          cidr: string;
          /**
           * Created At
           * @description timestamp when the IP policy rule was created, RFC 3339 format
           */
          created_at: string;
          /**
           * Description
           * @description human-readable description of the source IPs of this IP rule. optional, max 255 bytes.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description unique identifier for this IP policy rule
           */
          id: string;
          /**
           * Ip Policy
           * @description object describing the IP policy this IP Policy Rule belongs to
           */
          ip_policy: {
              /**
               * Id
               * @description a resource identifier
               */
              id: string;
              /**
               * Uri
               * @description a uri for locating a resource
               */
              uri: string;
          };
          /**
           * Metadata
           * @description arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes.
           * @default null
           */
          metadata: string | null;
          /**
           * Uri
           * @description URI of the IP policy rule API resource
           */
          uri: string;
      }[];
      /**
       * Next Page Uri
       * @description URI of the next page, or null if there is no next page
       * @default null
       */
      next_page_uri: string | null;
      /**
       * Uri
       * @description URI of the IP policy rule list API resource
       */
      uri: string;
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
 * Type of NGROK's NGROK_LIST_IP_RESTRICTIONS tool input.
 */
type NGROK_LIST_IP_RESTRICTIONS_INPUT = {
  /**
   * Before Id
   * @description The ID of the last IP restriction seen in pagination
   * @default null
   */
  before_id: string | null;
  /**
   * Limit
   * @description The maximum number of IP restrictions to return
   * @default null
   */
  limit: string | null;
};

/**
 * Type of NGROK's NGROK_LIST_IP_RESTRICTIONS tool output.
 */
type NGROK_LIST_IP_RESTRICTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ip Restrictions
       * @description The list of all IP restrictions on this account
       */
      ip_restrictions: {
          /**
           * Created At
           * @description Timestamp when the IP restriction was created in RFC 3339 format
           */
          created_at: string;
          /**
           * Description
           * @description User-supplied description of the IP restriction
           * @default null
           */
          description: string | null;
          /**
           * Enforced
           * @description Whether the IP restriction is enforced
           */
          enforced: boolean;
          /**
           * Id
           * @description Unique IP restriction resource identifier
           */
          id: string;
          /**
           * Ip Policies
           * @description The IP policies associated with this restriction
           */
          ip_policies?: {
              /**
               * Id
               * @description A resource identifier
               */
              id: string;
              /**
               * Uri
               * @description A URI for locating a resource
               */
              uri: string;
          }[];
          /**
           * Metadata
           * @description User-supplied metadata for the IP restriction
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Type
           * @description The type of IP restriction
           */
          type: string;
          /**
           * Uri
           * @description URI to access this IP restriction
           */
          uri: string;
      }[];
      /**
       * Next Page Uri
       * @description URI of the next page, or null if there is no next page
       * @default null
       */
      next_page_uri: string | null;
      /**
       * Uri
       * @description URI of the IP restrictions list API resource
       */
      uri: string;
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
 * Type of NGROK's NGROK_LIST_TUNNELS tool input.
 */
type NGROK_LIST_TUNNELS_INPUT = object;

/**
 * Type of NGROK's NGROK_LIST_TUNNELS tool output.
 */
type NGROK_LIST_TUNNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Uri
       * @description URI of the next page, or null if there is no next page
       * @default null
       */
      next_page_uri: string | null;
      /**
       * Tunnels
       * @description List of all online tunnels on this account
       */
      tunnels: {
          /**
           * TunnelRef
           * @description Reference object for tunnel endpoints and sessions.
           * @default null
           */
          endpoint: {
              /**
               * Id
               * @description A resource identifier
               */
              id: string;
              /**
               * Uri
               * @description A URI for locating a resource
               */
              uri: string;
          } | null;
          /**
           * Forwards To
           * @description Upstream address the ngrok agent forwards traffic to
           */
          forwards_to: string;
          /**
           * Id
           * @description Unique tunnel resource identifier
           */
          id: string;
          /**
           * Labels
           * @description Labels for tunnel group backend matching
           * @default null
           */
          labels: {
              [key: string]: string;
          } | null;
          /**
           * Metadata
           * @description User-supplied metadata for the tunnel
           * @default null
           */
          metadata: string | null;
          /**
           * Proto
           * @description Tunnel protocol for ephemeral tunnels (http, https, tcp, or tls)
           * @default null
           */
          proto: string | null;
          /**
           * Public Url
           * @description URL of the ephemeral tunnel's public endpoint
           * @default null
           */
          public_url: string | null;
          /**
           * Region
           * @description Identifier of the region where the tunnel is running
           */
          region: string;
          /**
           * Started At
           * @description Timestamp when the tunnel was initiated in RFC 3339 format
           */
          started_at: string;
          /**
           * Tunnel Session
           * @description Reference to the tunnel session
           */
          tunnel_session: {
              /**
               * Id
               * @description A resource identifier
               */
              id: string;
              /**
               * Uri
               * @description A URI for locating a resource
               */
              uri: string;
          };
      }[];
      /**
       * Uri
       * @description URI of the tunnels list API resource
       */
      uri: string;
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
 * Type map of all available tool input types for toolkit "NGROK".
 */
export type NGROK_TOOL_INPUTS = {
  CREATE_API_KEY: NGROK_CREATE_API_KEY_INPUT
  DELETE_API_KEY: NGROK_DELETE_API_KEY_INPUT
  GET_IP_RESTRICTIONS: NGROK_GET_IP_RESTRICTIONS_INPUT
  LIST_API_KEYS: NGROK_LIST_API_KEYS_INPUT
  LIST_ENDPOINTS: NGROK_LIST_ENDPOINTS_INPUT
  LIST_HTTPS_EDGES: NGROK_LIST_HTTPS_EDGES_INPUT
  LIST_IP_POLICY_RULES: NGROK_LIST_IP_POLICY_RULES_INPUT
  LIST_IP_RESTRICTIONS: NGROK_LIST_IP_RESTRICTIONS_INPUT
  LIST_TUNNELS: NGROK_LIST_TUNNELS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NGROK".
 */
export type NGROK_TOOL_OUTPUTS = {
  CREATE_API_KEY: NGROK_CREATE_API_KEY_OUTPUT
  DELETE_API_KEY: NGROK_DELETE_API_KEY_OUTPUT
  GET_IP_RESTRICTIONS: NGROK_GET_IP_RESTRICTIONS_OUTPUT
  LIST_API_KEYS: NGROK_LIST_API_KEYS_OUTPUT
  LIST_ENDPOINTS: NGROK_LIST_ENDPOINTS_OUTPUT
  LIST_HTTPS_EDGES: NGROK_LIST_HTTPS_EDGES_OUTPUT
  LIST_IP_POLICY_RULES: NGROK_LIST_IP_POLICY_RULES_OUTPUT
  LIST_IP_RESTRICTIONS: NGROK_LIST_IP_RESTRICTIONS_OUTPUT
  LIST_TUNNELS: NGROK_LIST_TUNNELS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NGROK toolkit.
 */
export const NGROK = {
  slug: "ngrok",
  tools: {
    /**
     * Creates a new api key for authenticating with the ngrok api. this tool allows programmatic creation of api keys that can be used to access ngrok's api services.
     */
    CREATE_API_KEY: "NGROK_CREATE_API_KEY",
    /**
     * Delete an api key by its id. this action permanently removes the specified api key from your ngrok account. this is an important security feature that allows users to revoke access when an api key is compromised or no longer needed. once deleted, the api key cannot be recovered and any services using it will lose access.
     */
    DELETE_API_KEY: "NGROK_DELETE_API_KEY",
    /**
     * This tool retrieves detailed information about a specific ip restriction by its id. it is used to control which ip addresses can access ngrok resources, including the api, by fetching complete details of the ip restriction. this action is essential for auditing and verification in ip restriction management.
     */
    GET_IP_RESTRICTIONS: "NGROK_GET_IP_RESTRICTIONS",
    /**
     * This tool lists all api keys owned by the user. the api keys are used to authenticate api requests to ngrok's rest api. the endpoint returns a paginated list of api keys.
     */
    LIST_API_KEYS: "NGROK_LIST_API_KEYS",
    /**
     * List all active endpoints on the ngrok account. this tool will list all active endpoints on the ngrok account, providing visibility into running tunnels and endpoints. it requires no input parameters beyond authentication and serves as a fundamental component for monitoring, managing, and referencing ngrok resources.
     */
    LIST_ENDPOINTS: "NGROK_LIST_ENDPOINTS",
    /**
     * Lists all https edges in your ngrok account. https edges are configurations that tell ngrok how to handle https traffic. the action returns a paginated list of all https edges associated with your account.
     */
    LIST_HTTPS_EDGES: "NGROK_LIST_HTTPS_EDGES",
    /**
     * This tool lists all ip policy rules associated with your ngrok account. it retrieves detailed information including rule id, creation timestamp, description, metadata, cidr, the associated ip policy, and the action (allow or deny) for each rule. it supports pagination with parameters 'limit' for the maximum number of results and 'before id' for pagination.
     */
    LIST_IP_POLICY_RULES: "NGROK_LIST_IP_POLICY_RULES",
    /**
     * This tool retrieves a list of all ip restrictions configured on the ngrok account. it allows users to audit and review all ip-based access restrictions on their ngrok account for enhanced security management. the api endpoint supports pagination with optional parameters such as 'limit' and 'before id', and returns a detailed json response containing attributes like id, uri, created at, description, metadata, enforced, type, and associated ip policies.
     */
    LIST_IP_RESTRICTIONS: "NGROK_LIST_IP_RESTRICTIONS",
    /**
     * List all active tunnels in the ngrok account. this tool lists all active tunnels in the ngrok account, providing details such as tunnel id, public url, start time, protocol, configuration details, and metadata. it requires no input parameters beyond authentication and returns a paginated list of all running tunnels with their complete status information.
     */
    LIST_TUNNELS: "NGROK_LIST_TUNNELS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NGROK".
 */
export type NGROK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NGROK".
 */
export type NGROK_TRIGGER_EVENTS = {}
