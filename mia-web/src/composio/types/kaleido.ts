// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of KALEIDO's KALEIDO_ADD_IDENTITY_PROOF tool input.
 */
type KALEIDO_ADD_IDENTITY_PROOF_INPUT = {
  /**
   * Name
   * @description Descriptive name for the identity proof
   */
  name?: string;
  /**
   * Org Id
   * @description Organization ID to which the identity proof will be added
   */
  org_id?: string;
  /**
   * Payload
   * @description Base64-encoded certificate chain concatenated as a single string
   */
  payload?: string;
  /**
   * Type
   * @description Type of the identity proof, currently only 'x509' is supported
   * @default x509
   * @constant
   */
  type: "x509";
};

/**
 * Type of KALEIDO's KALEIDO_ADD_IDENTITY_PROOF tool output.
 */
type KALEIDO_ADD_IDENTITY_PROOF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique identifier of the created identity proof
       */
      _id: string;
      /**
       *  Revision
       * @description Internal revision ID for the proof
       */
      _revision: string;
      /**
       * Created At
       * @description Timestamp when the proof was created
       */
      created_at: string;
      /**
       * Name
       * @description Descriptive name of the identity proof
       */
      name: string;
      /**
       * Nonce
       * @description Nonce value associated with the identity proof
       */
      nonce: string;
      /**
       * Org Id
       * @description Organization ID associated with the proof
       */
      org_id: string;
      /**
       * Payload
       * @description Base64-encoded certificate chain provided
       */
      payload: string;
      /**
       * Type
       * @description Type of the identity proof, e.g., 'x509'
       * @constant
       */
      type: "x509";
      /**
       * Updated At
       * @description Timestamp when the proof was last updated
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
 * Type of KALEIDO's KALEIDO_CREATE_API_KEY tool input.
 */
type KALEIDO_CREATE_API_KEY_INPUT = {
  /**
   * Name
   * @description User-defined name for the API key
   * @default null
   */
  name: string | null;
  /**
   * Org Id
   * @description Organization ID for which to create the API key
   */
  org_id?: string;
};

/**
 * Type of KALEIDO's KALEIDO_CREATE_API_KEY tool output.
 */
type KALEIDO_CREATE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description API Key identifier
       */
      _id: string;
      /**
       *  Revision
       * @description Revision token
       */
      _revision: string;
      /**
       * Created At
       * @description Creation timestamp in ISO8601
       */
      created_at: string;
      /**
       * Name
       * @description User-defined name for the API key
       * @default null
       */
      name: string | null;
      /**
       * Org Id
       * @description Organization ID associated with the key
       */
      org_id: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO8601
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
 * Type of KALEIDO's KALEIDO_DELETE_API_KEY tool input.
 */
type KALEIDO_DELETE_API_KEY_INPUT = {
  /**
   * Apikey Id
   * @description The unique identifier of the API key to delete
   */
  apikey_id?: string;
};

/**
 * Type of KALEIDO's KALEIDO_DELETE_API_KEY tool output.
 */
type KALEIDO_DELETE_API_KEY_OUTPUT = {
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
 * Type of KALEIDO's KALEIDO_GET_API_KEYS tool input.
 */
type KALEIDO_GET_API_KEYS_INPUT = object;

/**
 * Type of KALEIDO's KALEIDO_GET_API_KEYS tool output.
 */
type KALEIDO_GET_API_KEYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description API Key identifier
       */
      _id: string;
      /**
       *  Revision
       * @description Revision token
       */
      _revision: string;
      /**
       * Created At
       * @description Creation timestamp in ISO8601 format
       */
      created_at: string;
      /**
       * Name
       * @description User-defined name for the API key
       * @default null
       */
      name: string | null;
      /**
       * Org Id
       * @description Organization ID associated with the key
       */
      org_id: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO8601 format
       */
      updated_at: string;
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
 * Type of KALEIDO's KALEIDO_GET_APP2_APP_RUNTIMES tool input.
 */
type KALEIDO_GET_APP2_APP_RUNTIMES_INPUT = object;

/**
 * Type of KALEIDO's KALEIDO_GET_APP2_APP_RUNTIMES tool output.
 */
type KALEIDO_GET_APP2_APP_RUNTIMES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique service identifier
       */
      _id: string;
      /**
       *  Revision
       * @description Revision token
       */
      _revision: string;
      /**
       * Accounts
       * @description List of account IDs provisioned for this service
       */
      accounts: string[];
      /**
       * Created At
       * @description Creation timestamp in ISO8601 format
       */
      created_at: string;
      /**
       * Details
       * @description Arbitrary service metadata
       */
      details: {
          [key: string]: unknown;
      };
      /**
       * Environment Id
       * @description Identifier of the environment this service belongs to
       */
      environment_id: string;
      /**
       * Membership Id
       * @description Identifier of the membership under which this service exists
       */
      membership_id: string;
      /**
       * Name
       * @description Human-readable service name
       */
      name: string;
      /**
       * Service
       * @description Internal service label
       */
      service: string;
      /**
       * Service Guid
       * @description Globally unique service GUID
       */
      service_guid: string;
      /**
       * Service Type
       * @description Type/category of the service
       */
      service_type: string;
      /**
       * Size
       * @description Provisioned size/tier of the service
       */
      size: string;
      /**
       * State
       * @description Current lifecycle state of the service
       */
      state: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO8601 format
       */
      updated_at: string;
      /**
       * Urls
       * @description Map of logical endpoint names to their URLs
       */
      urls: {
          [key: string]: string;
      };
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
 * Type of KALEIDO's KALEIDO_GET_APPLICATION_CREDENTIALS tool input.
 */
type KALEIDO_GET_APPLICATION_CREDENTIALS_INPUT = {
  /**
   * Consortia Id
   * @description ID of the consortium
   */
  consortia_id?: string;
  /**
   * Environment Id
   * @description ID of the environment
   */
  environment_id?: string;
};

/**
 * Type of KALEIDO's KALEIDO_GET_APPLICATION_CREDENTIALS tool output.
 */
type KALEIDO_GET_APPLICATION_CREDENTIALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credentials
       * @description List of application credential objects
       */
      credentials: {
          /**
           *  Id
           * @description Credential identifier
           */
          _id: string;
          /**
           *  Revision
           * @description Revision token
           */
          _revision: string;
          /**
           * Auth Type
           * @description Authentication type, e.g., 'app_creds'
           */
          auth_type: string;
          /**
           * Created At
           * @description ISO8601 creation timestamp
           */
          created_at: string;
          /**
           * Dapp Id
           * @description DApp identifier owning the credential
           */
          dapp_id: string;
          /**
           * Environment Id
           * @description Associated environment ID
           */
          environment_id: string;
          /**
           * Hash
           * @description Internal hash for key validation
           */
          hash: string;
          /**
           * Integration Id
           * @description Integration ID if used by a partner integration
           * @default null
           */
          integration_id: string | null;
          /**
           * Membership Id
           * @description Associated membership ID
           */
          membership_id: string;
          /**
           * Name
           * @description User-defined name of the credential
           */
          name: string;
          /**
           * Service Id
           * @description Service ID if used by a Kaleido service
           * @default null
           */
          service_id: string | null;
          /**
           * Updated At
           * @description ISO8601 last update timestamp
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
 * Type of KALEIDO's KALEIDO_GET_CONSORTIA tool input.
 */
type KALEIDO_GET_CONSORTIA_INPUT = object;

/**
 * Type of KALEIDO's KALEIDO_GET_CONSORTIA tool output.
 */
type KALEIDO_GET_CONSORTIA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Consortium identifier
       */
      _id: string;
      /**
       *  Revision
       * @description Revision token
       */
      _revision: string;
      /**
       * Created At
       * @description Creation timestamp in ISO8601 format
       */
      created_at: string;
      /**
       * Deleted At
       * @description Deletion timestamp in ISO8601 format
       * @default null
       */
      deleted_at: string | null;
      /**
       * Description
       * @description Description of the consortium
       */
      description: string;
      /**
       * Name
       * @description User-defined name for the consortium
       */
      name: string;
      /**
       * Owner
       * @description Owner organization ID
       */
      owner: string;
      /**
       * State
       * @description Lifecycle state of the consortium
       * @enum {string}
       */
      state: "setup" | "live" | "delete_pending" | "deleted";
      /**
       * Updated At
       * @description Last updated timestamp in ISO8601 format
       */
      updated_at: string;
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
 * Type of KALEIDO's KALEIDO_GET_EVENT_STREAMS tool input.
 */
type KALEIDO_GET_EVENT_STREAMS_INPUT = {
  /**
   * Environment Id
   * @description Kaleido environment ID (used for Ethconnect URL composition)
   * @default null
   */
  environment_id: string | null;
  /**
   * Full Url
   * @description Override base URL completely. If this already includes /eventstreams it will be used as-is.
   * @default null
   */
  full_url: string | null;
  /**
   * Node Id
   * @description Kaleido node ID exposing Ethconnect (used for URL composition)
   * @default null
   */
  node_id: string | null;
  /**
   * Zone Domain
   * @description Zone domain used to reach the Ethconnect gateway (e.g., us-east-1.connect.kaleido.io)
   * @default null
   */
  zone_domain: string | null;
};

/**
 * Type of KALEIDO's KALEIDO_GET_EVENT_STREAMS tool output.
 */
type KALEIDO_GET_EVENT_STREAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Streams
       * @description List of configured event streams
       */
      event_streams: {
          /**
           * Batch Size
           * @description Number of events to attempt to batch together before delivery
           */
          batchSize: number;
          /**
           * Batch Timeout Ms
           * @description Milliseconds to wait to fill batchSize before delivery
           */
          batchTimeoutMS: number;
          /**
           * Blocked Rery Delay Sec
           * @description Long retry delay when blocking indefinitely (default 30)
           */
          blockedReryDelaySec: number;
          /**
           * Created
           * @description Timestamp when the stream was created in ISO8601 format
           */
          created: string;
          /**
           * Error Handling
           * @description Whether to discard and move on after retries or block indefinitely
           * @enum {string}
           */
          errorHandling: "block" | "skip";
          /**
           * Id
           * @description Unique identifier of the event stream
           */
          id: string;
          /**
           * Path
           * @description Stream path identifier
           */
          path: string;
          /**
           * Retry Timeout Sec
           * @description Exponential backoff retry duration before failing or entering blocked state (0 means no backoff)
           */
          retryTimeoutSec: number;
          /**
           * Suspended
           * @description Whether delivery is currently suspended
           */
          suspended: boolean;
          /**
           * Type
           * @description The type of event stream
           * @enum {string}
           */
          type: "webhook" | "websocket";
          /**
           * WebhookConfig
           * @description Webhook configuration details for event stream.
           * @default null
           */
          webhook: {
              /**
               * Headers
               * @description Custom headers to include on webhook requests
               */
              headers: {
                  [key: string]: string;
              };
              /**
               * Request Timeout Sec
               * @description Timeout (seconds) for webhook requests
               */
              requestTimeoutSec: number;
              /**
               * Tls Skip Host Verify
               * @description Skip TLS host verification on webhook calls
               */
              tlsSkipHostVerify: boolean;
              /**
               * Url
               * @description Webhook destination URL
               */
              url: string;
          } | null;
          /**
           * WebsocketConfig
           * @description Websocket configuration details for event stream.
           * @default null
           */
          websocket: {
              /**
               * Topic
               * @description Topic to publish events on the websocket connection
               */
              topic: string;
          } | null;
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
 * Type of KALEIDO's KALEIDO_GET_MEMBERSHIPS tool input.
 */
type KALEIDO_GET_MEMBERSHIPS_INPUT = {
  /**
   * Query
   * @description Optional Mongo-style query string to filter memberships
   * @default null
   */
  query: string | null;
};

/**
 * Type of KALEIDO's KALEIDO_GET_MEMBERSHIPS tool output.
 */
type KALEIDO_GET_MEMBERSHIPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Memberships
       * @description List of membership objects
       */
      memberships: {
          /**
           *  Id
           * @description Unique membership identifier
           */
          _id: string;
          /**
           *  Revision
           * @description Internal revision token
           */
          _revision: string;
          /**
           * Consortia Id
           * @description Associated consortia identifier
           */
          consortia_id: string;
          /**
           * Created At
           * @description Timestamp when the membership was created
           */
          created_at: string;
          /**
           * Deleted At
           * @description Deletion timestamp if membership was removed
           * @default null
           */
          deleted_at: string | null;
          /**
           * Org Id
           * @description Associated organization identifier
           */
          org_id: string;
          /**
           * Org Name
           * @description Name of the organization
           */
          org_name: string;
          /**
           * Permissions
           * @description Permissions associated with the membership
           */
          permissions: {
              /**
               * Create Signers
               * @description Permission to create signers
               */
              create_signers: boolean;
              /**
               * Invite Orgs
               * @description Permission to invite organizations
               */
              invite_orgs: boolean;
              /**
               * Manage Envs
               * @description Permission to manage environments
               */
              manage_envs: boolean;
              /**
               * Multiple Members
               * @description Permission to have multiple members
               */
              multiple_members: boolean;
          };
          /**
           * State
           * @description Current membership state
           */
          state: string;
          /**
           * Updated At
           * @description Timestamp when the membership was last updated
           */
          updated_at: string;
          /**
           * Verification Proof
           * @description Verification proof string
           */
          verification_proof: string;
          /**
           * Verification Selfsigned
           * @description Whether the verification is self-signed
           */
          verification_selfsigned: boolean;
          /**
           * Verification Type
           * @description Type of verification used
           */
          verification_type: string;
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
 * Type of KALEIDO's KALEIDO_GET_ORGANIZATIONS tool input.
 */
type KALEIDO_GET_ORGANIZATIONS_INPUT = object;

/**
 * Type of KALEIDO's KALEIDO_GET_ORGANIZATIONS tool output.
 */
type KALEIDO_GET_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Organization identifier
       */
      _id: string;
      /**
       *  Revision
       * @description Revision token
       */
      _revision: string;
      /**
       * Billing Account
       * @description Billing account details for the organization
       */
      billing_account: {
          /**
           * Aws Customer Identifier
           * @description AWS customer identifier if applicable
           * @default null
           */
          aws_customer_identifier: string | null;
          /**
           * Aws Product Code
           * @description AWS product code if applicable
           * @default null
           */
          aws_product_code: string | null;
          /**
           * Stripe Customer Id
           * @description Stripe customer ID if applicable
           * @default null
           */
          stripe_customer_id: string | null;
          /**
           * Type
           * @description Billing account type
           */
          type: string;
      };
      /**
       * Cognito Client Id
       * @description Cognito client ID
       */
      cognito_client_id: string;
      /**
       * Cognito Client Secret
       * @description Cognito client secret
       */
      cognito_client_secret: string;
      /**
       * Cognito Domain
       * @description Cognito domain for authentication
       */
      cognito_domain: string;
      /**
       * Cognito Region
       * @description Region where Cognito is hosted
       */
      cognito_region: string;
      /**
       * Cognito User Pool Id
       * @description Cognito user pool ID
       */
      cognito_user_pool_id: string;
      /**
       * Created At
       * @description Creation timestamp in ISO8601 format
       */
      created_at: string;
      /**
       * Delegate
       * @description Delegate organization ID
       */
      delegate: string;
      /**
       * Name
       * @description User-defined name of the organization
       */
      name: string;
      /**
       * Owner
       * @description Owner identifier
       */
      owner: string;
      /**
       * Plan
       * @description Subscription plan name
       */
      plan: string;
      /**
       * Plan Id
       * @description Subscription plan identifier
       */
      plan_id: string;
      /**
       * Support Level
       * @description Support level of the organization
       */
      support_level: number;
      /**
       * Terms Accepted
       * @description Terms accepted version
       */
      terms_accepted: number;
      /**
       * Trial Ends
       * @description Trial end timestamp in ISO8601 format
       */
      trial_ends: string;
      /**
       * Type
       * @description Organization type
       */
      type: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO8601 format
       */
      updated_at: string;
      /**
       * Waitlisted
       * @description Whether the organization is waitlisted
       */
      waitlisted: boolean;
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
 * Type of KALEIDO's KALEIDO_GET_REGIONS tool input.
 */
type KALEIDO_GET_REGIONS_INPUT = object;

/**
 * Type of KALEIDO's KALEIDO_GET_REGIONS tool output.
 */
type KALEIDO_GET_REGIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Region identifier
       */
      _id: string;
      /**
       *  Revision
       * @description Revision token
       */
      _revision: string;
      /**
       * Allow Overflow
       * @description Whether overflow environments are permitted in this region
       */
      allow_overflow: boolean;
      /**
       * Created At
       * @description Creation timestamp in ISO8601 format
       */
      created_at: string;
      /**
       * Environments
       * @description Count of environments available in the region
       */
      environments: number;
      /**
       * Net Host
       * @description API host endpoint for the region
       */
      net_host: string;
      /**
       * State
       * @description Current state of the region (e.g., "enabled")
       */
      state: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO8601 format
       */
      updated_at: string;
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
 * Type of KALEIDO's KALEIDO_GET_RELEASES tool input.
 */
type KALEIDO_GET_RELEASES_INPUT = object;

/**
 * Type of KALEIDO's KALEIDO_GET_RELEASES tool output.
 */
type KALEIDO_GET_RELEASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Release resource ID
       */
      _id: string;
      /**
       *  Revision
       * @description Revision identifier
       */
      _revision: string;
      /**
       * Chain Config
       * @description List of chain configuration parameter keys required
       */
      chain_config: string[];
      /**
       * Created At
       * @description Creation timestamp in ISO8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Human-readable release notes or summary
       */
      description: string;
      /**
       * Images
       * @description Map of container image names to their tags
       */
      images: {
          [key: string]: string;
      };
      /**
       * Optional Chain Config
       * @description Optional chain-config blocks (format may vary)
       */
      optional_chain_config: {
          [key: string]: unknown;
      }[];
      /**
       * Optional Eips
       * @description List of optional Ethereum improvement proposals supported
       */
      optional_eips: string[];
      /**
       * Prereq Eips
       * @description List of EIPs that must be activated before this release
       */
      prereq_eips: string[];
      /**
       * Provider
       * @description Underlying node provider, e.g., 'quorum'
       */
      provider: string;
      /**
       * Release Status
       * @description Release lifecycle status, e.g., 'beta'
       */
      release_status: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO8601 format
       */
      updated_at: string;
      /**
       * Version
       * @description Semantic version string
       */
      version: string;
      /**
       * Version Padded
       * @description Zero-padded version for sorting, e.g., '001.002.003'
       */
      version_padded: string;
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
 * Type of KALEIDO's KALEIDO_GET_ROLES tool input.
 */
type KALEIDO_GET_ROLES_INPUT = {
  /**
   * Org Id
   * @description Organization ID whose roles should be retrieved
   */
  org_id?: string;
};

/**
 * Type of KALEIDO's KALEIDO_GET_ROLES tool output.
 */
type KALEIDO_GET_ROLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Role identifier
       */
      _id: string;
      /**
       *  Revision
       * @description Revision token
       */
      _revision: string;
      /**
       * Created At
       * @description Creation timestamp in ISO8601 format
       */
      created_at: string;
      /**
       * Org Id
       * @description Organization ID associated with the role
       */
      org_id: string;
      /**
       * Role
       * @description Name of the role
       */
      role: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO8601 format
       */
      updated_at: string;
      /**
       * User Id
       * @description User ID associated with the role
       */
      user_id: string;
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
 * Type of KALEIDO's KALEIDO_GET_SERVICES tool input.
 */
type KALEIDO_GET_SERVICES_INPUT = object;

/**
 * Type of KALEIDO's KALEIDO_GET_SERVICES tool output.
 */
type KALEIDO_GET_SERVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique service identifier
       */
      _id: string;
      /**
       *  Revision
       * @description Revision token
       */
      _revision: string;
      /**
       * Accounts
       * @description List of account IDs provisioned for this service
       */
      accounts: string[];
      /**
       * Created At
       * @description Creation timestamp in ISO8601 format
       */
      created_at: string;
      /**
       * Details
       * @description Arbitrary service metadata
       */
      details: {
          [key: string]: unknown;
      };
      /**
       * Environment Id
       * @description Identifier of the environment this service belongs to
       */
      environment_id: string;
      /**
       * Membership Id
       * @description Identifier of the membership under which this service exists
       */
      membership_id: string;
      /**
       * Name
       * @description Human-readable service name
       */
      name: string;
      /**
       * Service
       * @description Internal service label
       */
      service: string;
      /**
       * Service Guid
       * @description Globally unique service GUID
       */
      service_guid: string;
      /**
       * Service Type
       * @description Type/category of the service
       */
      service_type: string;
      /**
       * Size
       * @description Provisioned size/tier of the service
       */
      size: string;
      /**
       * State
       * @description Current lifecycle state of the service
       */
      state: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO8601 format
       */
      updated_at: string;
      /**
       * Urls
       * @description Map of logical endpoint names to their URLs
       */
      urls: {
          [key: string]: string;
      };
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
 * Type of KALEIDO's KALEIDO_GET_TOKEN_FACTORY_TOKENS tool input.
 */
type KALEIDO_GET_TOKEN_FACTORY_TOKENS_INPUT = object;

/**
 * Type of KALEIDO's KALEIDO_GET_TOKEN_FACTORY_TOKENS tool output.
 */
type KALEIDO_GET_TOKEN_FACTORY_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Internal identifier
       */
      _id: string;
      /**
       * Address
       * @description Deployed contract address (if deployed)
       * @default null
       */
      address: string | null;
      /**
       * Burnable
       * @description True if contract allows burning
       */
      burnable: boolean;
      /**
       * Created At
       * @description Creation timestamp
       */
      created_at: string;
      /**
       * Deploy
       * @description True if set to deploy on creation
       */
      deploy: boolean;
      /**
       * From Address
       * @description Creator/signer address
       */
      from_address: string;
      /**
       * Mintable
       * @description True if contract allows minting
       */
      mintable: boolean;
      /**
       * Name
       * @description Token contract name
       */
      name: string;
      /**
       * Supply
       * @description Initial supply (erc20 only)
       * @default null
       */
      supply: string | null;
      /**
       * Symbol
       * @description Token contract ticker symbol
       */
      symbol: string;
      /**
       * Type
       * @description Token type (erc20 or erc721)
       * @enum {string}
       */
      type: "erc20" | "erc721";
      /**
       * Updated At
       * @description Last update timestamp
       */
      updated_at: string;
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
 * Type of KALEIDO's KALEIDO_GET_WALLETS tool input.
 */
type KALEIDO_GET_WALLETS_INPUT = {
  /**
   * Service Api Base Url
   * @description Override the base URL for the HD Wallet service API, e.g., https://<service_host>/api/v1. If provided, the wallets will be retrieved from this service instead of the console base URL.
   * @default null
   */
  service_api_base_url: string | null;
};

/**
 * Type of KALEIDO's KALEIDO_GET_WALLETS tool output.
 */
type KALEIDO_GET_WALLETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Wallets
       * @description List of HD wallet IDs hosted inside the service
       */
      wallets: string[];
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
 * Type of KALEIDO's KALEIDO_GET_WALLET_ACCOUNT_NONCE tool input.
 */
type KALEIDO_GET_WALLET_ACCOUNT_NONCE_INPUT = {
  /**
   * Account Index
   * @description Index of the account in the wallet (0 to 2,147,483,648)
   */
  account_index?: number;
  /**
   * Service Api Base Url
   * @description Override the base URL for the HD Wallet service API, e.g., https://<service_host>/api/v1. If provided, the nonce will be retrieved from this service instead of the console base URL.
   * @default null
   */
  service_api_base_url: string | null;
  /**
   * Wallet Id
   * @description ID of the HD wallet instance
   */
  wallet_id?: string;
};

/**
 * Type of KALEIDO's KALEIDO_GET_WALLET_ACCOUNT_NONCE tool output.
 */
type KALEIDO_GET_WALLET_ACCOUNT_NONCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Nonce
       * @description Current transaction count (nonce) for the specified account, returned as a string
       */
      nonce: string;
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
 * Type map of all available tool input types for toolkit "KALEIDO".
 */
export type KALEIDO_TOOL_INPUTS = {
  ADD_IDENTITY_PROOF: KALEIDO_ADD_IDENTITY_PROOF_INPUT
  CREATE_API_KEY: KALEIDO_CREATE_API_KEY_INPUT
  DELETE_API_KEY: KALEIDO_DELETE_API_KEY_INPUT
  GET_API_KEYS: KALEIDO_GET_API_KEYS_INPUT
  GET_APP2_APP_RUNTIMES: KALEIDO_GET_APP2_APP_RUNTIMES_INPUT
  GET_APPLICATION_CREDENTIALS: KALEIDO_GET_APPLICATION_CREDENTIALS_INPUT
  GET_CONSORTIA: KALEIDO_GET_CONSORTIA_INPUT
  GET_EVENT_STREAMS: KALEIDO_GET_EVENT_STREAMS_INPUT
  GET_MEMBERSHIPS: KALEIDO_GET_MEMBERSHIPS_INPUT
  GET_ORGANIZATIONS: KALEIDO_GET_ORGANIZATIONS_INPUT
  GET_REGIONS: KALEIDO_GET_REGIONS_INPUT
  GET_RELEASES: KALEIDO_GET_RELEASES_INPUT
  GET_ROLES: KALEIDO_GET_ROLES_INPUT
  GET_SERVICES: KALEIDO_GET_SERVICES_INPUT
  GET_TOKEN_FACTORY_TOKENS: KALEIDO_GET_TOKEN_FACTORY_TOKENS_INPUT
  GET_WALLETS: KALEIDO_GET_WALLETS_INPUT
  GET_WALLET_ACCOUNT_NONCE: KALEIDO_GET_WALLET_ACCOUNT_NONCE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "KALEIDO".
 */
export type KALEIDO_TOOL_OUTPUTS = {
  ADD_IDENTITY_PROOF: KALEIDO_ADD_IDENTITY_PROOF_OUTPUT
  CREATE_API_KEY: KALEIDO_CREATE_API_KEY_OUTPUT
  DELETE_API_KEY: KALEIDO_DELETE_API_KEY_OUTPUT
  GET_API_KEYS: KALEIDO_GET_API_KEYS_OUTPUT
  GET_APP2_APP_RUNTIMES: KALEIDO_GET_APP2_APP_RUNTIMES_OUTPUT
  GET_APPLICATION_CREDENTIALS: KALEIDO_GET_APPLICATION_CREDENTIALS_OUTPUT
  GET_CONSORTIA: KALEIDO_GET_CONSORTIA_OUTPUT
  GET_EVENT_STREAMS: KALEIDO_GET_EVENT_STREAMS_OUTPUT
  GET_MEMBERSHIPS: KALEIDO_GET_MEMBERSHIPS_OUTPUT
  GET_ORGANIZATIONS: KALEIDO_GET_ORGANIZATIONS_OUTPUT
  GET_REGIONS: KALEIDO_GET_REGIONS_OUTPUT
  GET_RELEASES: KALEIDO_GET_RELEASES_OUTPUT
  GET_ROLES: KALEIDO_GET_ROLES_OUTPUT
  GET_SERVICES: KALEIDO_GET_SERVICES_OUTPUT
  GET_TOKEN_FACTORY_TOKENS: KALEIDO_GET_TOKEN_FACTORY_TOKENS_OUTPUT
  GET_WALLETS: KALEIDO_GET_WALLETS_OUTPUT
  GET_WALLET_ACCOUNT_NONCE: KALEIDO_GET_WALLET_ACCOUNT_NONCE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's KALEIDO toolkit.
 */
export const KALEIDO = {
  slug: "kaleido",
  tools: {
    /**
     * Tool to add an identity proof to an organization. Use when registering an x.509 certificate chain for an org immediately after creation.
     */
    ADD_IDENTITY_PROOF: "KALEIDO_ADD_IDENTITY_PROOF",
    /**
     * Tool to create a new API key for an organization. Use after confirming the org_id.
     */
    CREATE_API_KEY: "KALEIDO_CREATE_API_KEY",
    /**
     * Tool to delete a specific API key. Use when you need to remove an API key by its identifier after confirming it's no longer in use.
     */
    DELETE_API_KEY: "KALEIDO_DELETE_API_KEY",
    /**
     * Tool to retrieve all API keys associated with the organization. Use when you need an overview of existing API keys after authenticating.
     */
    GET_API_KEYS: "KALEIDO_GET_API_KEYS",
    /**
     * Tool to retrieve App2App runtimes by listing all services and filtering where service == 'app2app'. Use after authenticating to enumerate App2App service instances.
     */
    GET_APP2_APP_RUNTIMES: "KALEIDO_GET_APP2_APP_RUNTIMES",
    /**
     * Tool to retrieve application credentials for a specific environment. Use when you need to list DApp credentials after environment setup.
     */
    GET_APPLICATION_CREDENTIALS: "KALEIDO_GET_APPLICATION_CREDENTIALS",
    /**
     * Tool to retrieve all consortia associated with the organization. Use after authenticating to view existing consortia.
     */
    GET_CONSORTIA: "KALEIDO_GET_CONSORTIA",
    /**
     * Tool to list all event streams configured in the environment. Use when you need to retrieve current event stream setups.
     */
    GET_EVENT_STREAMS: "KALEIDO_GET_EVENT_STREAMS",
    /**
     * Tool to retrieve all memberships for the current user. Use after authenticating to list user memberships.
     */
    GET_MEMBERSHIPS: "KALEIDO_GET_MEMBERSHIPS",
    /**
     * Tool to retrieve all organizations that the authenticated user has access to. Use after authenticating to list available organizations.
     */
    GET_ORGANIZATIONS: "KALEIDO_GET_ORGANIZATIONS",
    /**
     * Tool to retrieve the list of deployment zones and endpoints. Use after authenticating to list available regions.
     */
    GET_REGIONS: "KALEIDO_GET_REGIONS",
    /**
     * Tool to retrieve current and historical versions of node software. Use when you need to list all runtime releases available in the Kaleido platform.
     */
    GET_RELEASES: "KALEIDO_GET_RELEASES",
    /**
     * Tool to retrieve all roles of an organization. Use when you need to audit or manage user roles after confirming a valid organization ID.
     */
    GET_ROLES: "KALEIDO_GET_ROLES",
    /**
     * Tool to retrieve all services the current user owns or can see. Use after authenticating to list available services.
     */
    GET_SERVICES: "KALEIDO_GET_SERVICES",
    /**
     * Tool to retrieve all tokens managed by the Token Factory. Use after authenticating to list available tokens.
     */
    GET_TOKEN_FACTORY_TOKENS: "KALEIDO_GET_TOKEN_FACTORY_TOKENS",
    /**
     * Tool to retrieve HD wallet IDs hosted in the service. Use after creating or importing HD wallets to enumerate available wallets.
     */
    GET_WALLETS: "KALEIDO_GET_WALLETS",
    /**
     * Tool to retrieve the current nonce of a specific HD wallet account. Use before signing a transaction to determine the next transaction count.
     */
    GET_WALLET_ACCOUNT_NONCE: "KALEIDO_GET_WALLET_ACCOUNT_NONCE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "KALEIDO".
 */
export type KALEIDO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "KALEIDO".
 */
export type KALEIDO_TRIGGER_EVENTS = {}
