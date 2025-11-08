// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RKVST's RKVST_DOWNLOAD_EVENT_ATTACHMENT tool input.
 */
type RKVST_DOWNLOAD_EVENT_ATTACHMENT_INPUT = {
  /**
   * Asset Uuid
   * @description UUID of the asset containing the event.
   */
  asset_uuid?: string;
  /**
   * Event Uuid
   * @description UUID of the event to which the attachment belongs.
   */
  event_uuid?: string;
  /**
   * Uuid
   * @description UUID of the attachment (omit the 'blobs/' prefix).
   */
  uuid?: string;
};

/**
 * Type of RKVST's RKVST_DOWNLOAD_EVENT_ATTACHMENT tool output.
 */
type RKVST_DOWNLOAD_EVENT_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw binary content of the downloaded attachment.
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
 * Type of RKVST's RKVST_GET_APP_REGISTRATION tool input.
 */
type RKVST_GET_APP_REGISTRATION_INPUT = {
  /**
   * App Registration Id
   * @description UUID of the App Registration to retrieve.
   */
  app_registration_id?: string;
};

/**
 * Type of RKVST's RKVST_GET_APP_REGISTRATION tool output.
 */
type RKVST_GET_APP_REGISTRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Client Id
       * @description Client ID for the OIDC client credentials flow.
       */
      client_id: string;
      /**
       * Credentials
       * @description List of time-limited secret objects for the application.
       * @default null
       */
      credentials: {
          /**
           * Secret
           * @description The client secret (redacted on standard GET responses).
           */
          secret: string;
          /**
           * Valid From
           * @description Secret validity start time in RFC3339 format.
           */
          valid_from: string;
          /**
           * Valid Until
           * @description Secret expiry time in RFC3339 format.
           */
          valid_until: string;
      }[] | null;
      /**
       * Custom Claims
       * @description Custom claims for use in access policies.
       * @default null
       */
      custom_claims: {
          [key: string]: unknown;
      } | null;
      /**
       * Display Name
       * @description Human-readable display name for the application.
       */
      display_name: string;
      /**
       * Identity
       * @description Resource name for the application.
       */
      identity: string;
      /**
       * Roles
       * @description List of roles assigned to the application.
       * @default null
       */
      roles: string[] | null;
      /**
       * Tenant Id
       * @description Identity of the owning tenant.
       */
      tenant_id: string;
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
 * Type of RKVST's RKVST_GET_ASSET tool input.
 */
type RKVST_GET_ASSET_INPUT = {
  /**
   * Asset Uuid
   * Format: uuid
   * @description UUID of the Asset to retrieve
   */
  asset_uuid?: string;
  /**
   * At Time
   * @description Optional ISO 8601 timestamp to retrieve the Asset's state at a past time
   * @default null
   */
  at_time: string | null;
};

/**
 * Type of RKVST's RKVST_GET_ASSET tool output.
 */
type RKVST_GET_ASSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * At Time
       * @description Time the asset data is from (ISO 8601)
       */
      at_time: string;
      /**
       * Attributes
       * @description Key-value mapping of asset properties
       */
      attributes: {
          [key: string]: unknown;
      };
      /**
       * Behaviours
       * @description List of enabled behaviours for this asset
       */
      behaviours: string[];
      /**
       * Chain Id
       * @description Chain ID of the blockchain associated with this asset
       * @default null
       */
      chain_id: string | null;
      /**
       * Confirmation Status
       * @description Whether the asset has been committed (e.g., PENDING or CONFIRMED)
       */
      confirmation_status: string;
      /**
       * Identity
       * @description Relative resource address in the form assets/{UUID}
       */
      identity: string;
      /**
       * Owner
       * @description Wallet address of the asset owner
       */
      owner: string;
      /**
       * Proof Mechanism
       * @description Mechanism used to provide evidential proof for events on this asset
       * @default null
       */
      proof_mechanism: string | null;
      /**
       * Public
       * @description Whether the asset is public
       */
      public: boolean;
      /**
       * Tenant Identity
       * @description Identity of the tenant that created this asset
       */
      tenant_identity: string;
      /**
       * Tracked
       * @description Whether the asset is tracked in the system
       */
      tracked: string;
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
 * Type of RKVST's RKVST_GET_BLOB tool input.
 */
type RKVST_GET_BLOB_INPUT = {
  /**
   * Asset Uuid
   * @description Optional public asset UUID to use when retrieving public attachment metadata without Authorization. If provided, the tool will call the public attachments info endpoint to retrieve the blob metadata.
   * @default null
   */
  asset_uuid: string | null;
  /**
   * Blob Id
   * @description UUID of the Blob to retrieve (accepts 'blobs/{uuid}' as well).
   */
  blob_id?: string;
};

/**
 * Type of RKVST's RKVST_GET_BLOB tool output.
 */
type RKVST_GET_BLOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hash
       * @description Hash details of the Blob.
       */
      hash: {
          /**
           * Alg
           * @description Hash algorithm of the Blob.
           */
          alg: string;
          /**
           * Value
           * @description Hash value of the Blob.
           */
          value: string;
      };
      /**
       * Identity
       * @description Resource address of the Blob.
       */
      identity: string;
      /**
       * Issuer
       * @description Principal issuer of the Blob.
       */
      issuer: string;
      /**
       * Mime Type
       * @description MIME type of the Blob.
       */
      mime_type: string;
      /**
       * Scanned Bad Reason
       * @description Reason if the scan failed.
       * @default null
       */
      scanned_bad_reason: string | null;
      /**
       * Scanned Status
       * @description Status of the scan.
       */
      scanned_status: string;
      /**
       * Scanned Timestamp
       * @description Timestamp when the Blob was scanned (ISO 8601).
       * @default null
       */
      scanned_timestamp: string | null;
      /**
       * Size
       * @description Size of the Blob in bytes.
       */
      size: number;
      /**
       * Subject
       * @description Principal subject of the Blob.
       */
      subject: string;
      /**
       * Tenantid
       * @description Tenant identity that owns the Blob.
       */
      tenantid: string;
      /**
       * Timestamp Accepted
       * @description Time when the request was accepted (ISO 8601).
       */
      timestamp_accepted: string;
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
 * Type of RKVST's RKVST_GET_EVENT tool input.
 */
type RKVST_GET_EVENT_INPUT = {
  /**
   * Event Uuid
   * @description UUID of the event to retrieve.
   */
  event_uuid?: string;
};

/**
 * Type of RKVST's RKVST_GET_EVENT tool output.
 */
type RKVST_GET_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attributes
       * @description Key/value attributes for the event.
       */
      attributes: {
          [key: string]: unknown;
      };
      /**
       * Confirmation Status
       * @description Event confirmation state; one of STORED, COMMITTED, CONFIRMED.
       */
      confirmation_status: string;
      /**
       * Created At
       * @description Milliseconds since Unix epoch when the event was stored.
       */
      created_at: number;
      /**
       * Created By
       * @description Member identity of the tenant that created the event.
       */
      created_by: string;
      /**
       * Identity
       * @description Event resource identity (e.g., events/<uuid>).
       */
      identity: string;
      /**
       * Merklelog Commit
       * @description Merkle log commit metadata for the event.
       */
      merklelog_commit: {
          [key: string]: unknown;
      };
      /**
       * Origin Tenant
       * @description The tenant that originally created the event.
       */
      origin_tenant: string;
      /**
       * Trails
       * @description Trails this event is associated with.
       */
      trails: string[];
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
 * Type of RKVST's RKVST_GET_IAM_SUBJECT tool input.
 */
type RKVST_GET_IAM_SUBJECT_INPUT = {
  /**
   * Subject Id
   * @description Unique identifier (UUID) of the IAM subject to retrieve.
   */
  subject_id?: string;
};

/**
 * Type of RKVST's RKVST_GET_IAM_SUBJECT tool output.
 */
type RKVST_GET_IAM_SUBJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Confirmation Status
       * @description Status of subject confirmation (e.g., PENDING, CONFIRMED).
       */
      confirmation_status: string;
      /**
       * Display Name
       * @description Customer-friendly name for the subject.
       */
      display_name: string;
      /**
       * Identity
       * @description Unique identification for the subject (Relative Resource Name).
       */
      identity: string;
      /**
       * Tenant
       * @description Tenant ID under which the subject exists.
       */
      tenant: string;
      /**
       * Tessera Pub Key
       * @description Organization's Tessera wallet public keys (BNF).
       */
      tessera_pub_key: string[];
      /**
       * Wallet Address
       * @description Organization's wallet addresses assigned to the subject.
       */
      wallet_address: string[];
      /**
       * Wallet Pub Key
       * @description Organization's public wallet keys (BNF).
       */
      wallet_pub_key: string[];
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
 * Type of RKVST's RKVST_GET_MEMBER tool input.
 */
type RKVST_GET_MEMBER_INPUT = {
  /**
   * Member Id
   * @description UUID of the Member to retrieve.
   */
  member_id?: string;
};

/**
 * Type of RKVST's RKVST_GET_MEMBER tool output.
 */
type RKVST_GET_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the membership is active.
       */
      active: boolean;
      /**
       * Display Name
       * @description Display name of the member.
       */
      display_name: string;
      /**
       * Email
       * @description Email address of the member.
       */
      email: string;
      /**
       * Identity
       * @description Resource identity of the member.
       */
      identity: string;
      /**
       * Roles
       * @description Roles assigned to the member.
       */
      roles: string[];
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
 * Type of RKVST's RKVST_GET_PUBLIC_ASSET tool input.
 */
type RKVST_GET_PUBLIC_ASSET_INPUT = {
  /**
   * Uuid
   * @description UUID of the public asset to retrieve
   */
  uuid?: string;
};

/**
 * Type of RKVST's RKVST_GET_PUBLIC_ASSET tool output.
 */
type RKVST_GET_PUBLIC_ASSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Policy
       * @description Mapping of behaviour to private-for keys
       */
      access_policy: {
          [key: string]: unknown;
      };
      /**
       * At Time
       * @description Time the asset data is from
       */
      at_time: string;
      /**
       * Attributes
       * @description Key–value mapping of asset properties
       */
      attributes: {
          [key: string]: unknown;
      };
      /**
       * Behaviours
       * @description Behaviours enabled for the asset
       */
      behaviours: string[];
      /**
       * Chain Id
       * @description Associated blockchain chain id
       */
      chain_id: string;
      /**
       * Confirmation Status
       * @description Whether the asset is committed
       */
      confirmation_status: string;
      /**
       * Identity
       * @description Relative resource address publicassets/{UUID}
       */
      identity: string;
      /**
       * Owner
       * @description Wallet address of asset owner
       */
      owner: string;
      /**
       * Proof Mechanism
       * @description Evidential proof mechanism
       */
      proof_mechanism: string;
      /**
       * Public
       * @description Public asset flag
       */
      public: boolean;
      /**
       * Tenant Identity
       * @description Creating tenant identity
       */
      tenant_identity: string;
      /**
       * Tracked
       * @description Whether asset is still tracked
       */
      tracked: string;
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
 * Type of RKVST's RKVST_GET_PUBLIC_ASSET_EVENT tool input.
 */
type RKVST_GET_PUBLIC_ASSET_EVENT_INPUT = {
  /**
   * Asset Uuid
   * @description UUID of the public asset
   */
  asset_uuid?: string;
  /**
   * Uuid
   * @description UUID of the event to retrieve
   */
  uuid?: string;
};

/**
 * Type of RKVST's RKVST_GET_PUBLIC_ASSET_EVENT tool output.
 */
type RKVST_GET_PUBLIC_ASSET_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asset Attributes
       * @description Key–value mapping of asset attributes
       */
      asset_attributes: {
          [key: string]: unknown;
      };
      /**
       * Asset Identity
       * @description Identity of related public asset resource (publicassets/{UUID})
       */
      asset_identity: string;
      /**
       * Behaviour
       * @description Behaviour used to create the event (e.g., RecordEvidence)
       */
      behaviour: string;
      /**
       * Block Number
       * @description Block number the event was committed on
       */
      block_number: string;
      /**
       * Confirmation Status
       * @description Whether event is committed/confirmed
       */
      confirmation_status: string;
      /**
       * Event Attributes
       * @description Key–value mapping of event attributes
       */
      event_attributes: {
          [key: string]: unknown;
      };
      /**
       * From
       * @description Wallet address that created the event
       */
      from_: string;
      /**
       * Identity
       * @description Event resource identity
       */
      identity: string;
      /**
       * Merklelog Entry
       * @description Verifiable Merkle MMR log entry details
       */
      merklelog_entry: {
          [key: string]: unknown;
      };
      /**
       * Operation
       * @description Operation represented by the event (e.g., Record)
       */
      operation: string;
      /**
       * Principal Accepted
       * @description Principal recorded by the server
       */
      principal_accepted: {
          [key: string]: unknown;
      };
      /**
       * Principal Declared
       * @description Principal provided by the user
       */
      principal_declared: {
          [key: string]: unknown;
      };
      /**
       * Tenant Identity
       * @description Tenant that created the event
       */
      tenant_identity: string;
      /**
       * Timestamp Accepted
       * @description Server-recorded event time
       */
      timestamp_accepted: string;
      /**
       * Timestamp Committed
       * @description Time recorded in verifiable storage
       */
      timestamp_committed: string;
      /**
       * Timestamp Declared
       * @description Time declared by the user
       */
      timestamp_declared: string;
      /**
       * Transaction Id
       * @description Transaction hash (hex string)
       */
      transaction_id: string;
      /**
       * Transaction Index
       * @description Index within committed block
       */
      transaction_index: string;
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
 * Type of RKVST's RKVST_GET_TENANCY tool input.
 */
type RKVST_GET_TENANCY_INPUT = {
  /**
   * Tenancy Id
   * @description Unique identifier of the tenancy. Accepts either raw UUID or the full identity string in the format 'tenant/{UUID}'. Leading/trailing whitespace is ignored.
   */
  tenancy_id?: string;
};

/**
 * Type of RKVST's RKVST_GET_TENANCY tool output.
 */
type RKVST_GET_TENANCY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Display Name
       * @description Customer-friendly name of the tenancy
       * @default null
       */
      display_name: string | null;
      /**
       * EnterpriseSsoConfig
       * @description Configuration details for enterprise SSO (subset).
       * @default null
       */
      enterprise_sso_config: {
          /**
           * Client Id
           * @description OIDC client ID for Enterprise SSO.
           * @default null
           */
          client_id: string | null;
          /**
           * Client Secret
           * @description OIDC client secret for Enterprise SSO.
           * @default null
           */
          client_secret: string | null;
          /**
           * Config Url
           * @description URL for retrieving SSO configuration.
           * @default null
           */
          config_url: string | null;
          /**
           * Issuer
           * @description OIDC issuer URL for the identity provider.
           * @default null
           */
          issuer: string | null;
          /**
           * Policy Id
           * @description Policy identifier used for Enterprise SSO.
           * @default null
           */
          policy_id: string | null;
      } | null;
      /**
       * Enterprise Sso Enabled
       * @description Whether Enterprise SSO is enabled for this tenancy
       * @default null
       */
      enterprise_sso_enabled: boolean | null;
      /**
       * Identity
       * @description Unique identifier of the tenancy (Relative Resource Name)
       */
      identity: string;
      /**
       * Verified Domain
       * @description Domain verified for the tenancy
       * @default null
       */
      verified_domain: string | null;
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
 * Type of RKVST's RKVST_LIST_APP_REGISTRATIONS tool input.
 */
type RKVST_LIST_APP_REGISTRATIONS_INPUT = {
  /**
   * Page Token
   * @description Pagination token from a previous call; omit for the first page.
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of RKVST's RKVST_LIST_APP_REGISTRATIONS tool output.
 */
type RKVST_LIST_APP_REGISTRATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Applications
       * @description List of application objects for this tenant.
       */
      applications: {
          /**
           * Client Id
           * @description Client ID for OIDC client credentials flow.
           */
          client_id: string;
          /**
           * Credentials
           * @description Array of time-limited credential objects.
           * @default null
           */
          credentials: {
              /**
               * Secret
               * @description Client secret value (redacted to empty string when retrieved later).
               */
              secret: string;
              /**
               * Valid From
               * @description Secret validity start time in RFC3339 format.
               */
              valid_from: string;
              /**
               * Valid Until
               * @description Secret validity end time in RFC3339 format.
               */
              valid_until: string;
          }[] | null;
          /**
           * Custom Claims
           * @description Custom claims for access policies.
           * @default null
           */
          custom_claims: {
              [key: string]: unknown;
          } | null;
          /**
           * Display Name
           * @description Human-readable display name for the application.
           */
          display_name: string;
          /**
           * Identity
           * @description Resource name for the application.
           */
          identity: string;
          /**
           * Roles
           * @description Roles assigned to the application (if any).
           * @default null
           */
          roles: string[] | null;
          /**
           * Tenant Id
           * @description Identifier of the owning tenant.
           */
          tenant_id: string;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results; empty if no further pages.
       * @default null
       */
      next_page_token: string | null;
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
 * Type of RKVST's RKVST_LIST_ASSETS tool input.
 */
type RKVST_LIST_ASSETS_INPUT = {
  /**
   * Attributes.Arc Display Name
   * @description Filter by asset display name. Use '=' for exact match, '*' for presence, '!=*' for missing.
   * @default null
   */
  "attributes.arc_display_name": string | null;
  /**
   * Attributes.Arc Display Type
   * @description Filter by asset type (e.g., 'Traffic light').
   * @default null
   */
  "attributes.arc_display_type": string | null;
  /**
   * Next Page Token
   * @description Token to retrieve the next page of assets.
   * @default null
   */
  next_page_token: string | null;
  /**
   * Page Size
   * @description Maximum number of assets to return.
   * @default null
   */
  page_size: number | null;
  /**
   * Proof Mechanism
   * @description Filter by proof mechanism (e.g., 'MERKLE_LOG').
   * @default null
   */
  proof_mechanism: string | null;
  /**
   * Request Total Count
   * @description If true, includes 'x-total-count' header in the response.
   * @default null
   */
  request_total_count: boolean | null;
};

/**
 * Type of RKVST's RKVST_LIST_ASSETS tool output.
 */
type RKVST_LIST_ASSETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assets
       * @description List of assets returned.
       */
      assets: {
          /**
           * At Time
           * @description Timestamp indicating when the asset data is from (ISO 8601).
           */
          at_time: string;
          /**
           * Attributes
           * @description Key-value mapping of asset properties.
           */
          attributes: {
              [key: string]: unknown;
          };
          /**
           * Behaviours
           * @description List of enabled behaviours for this asset.
           */
          behaviours: string[];
          /**
           * Chain Id
           * @description Chain id of the blockchain associated with this asset.
           * @default null
           */
          chain_id: string | null;
          /**
           * Confirmation Status
           * @description Asset confirmation status (e.g., PENDING).
           */
          confirmation_status: string;
          /**
           * Identity
           * @description Relative resource address in the form assets/{UUID}.
           */
          identity: string;
          /**
           * Owner
           * @description Wallet address of the asset owner.
           */
          owner: string;
          /**
           * Proof Mechanism
           * @description Mechanism used for evidential proof.
           * @default null
           */
          proof_mechanism: string | null;
          /**
           * Public
           * @description Whether the asset is public.
           */
          public: boolean;
          /**
           * Tenant Identity
           * @description Identity of the tenant that created this asset.
           */
          tenant_identity: string;
          /**
           * Tracked
           * @description Tracking state of the asset.
           */
          tracked: string;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve next page of results.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Total Count
       * @description Total number of assets; present if requested via header.
       * @default null
       */
      total_count: number | null;
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
 * Type of RKVST's RKVST_LIST_ASSET_EVENTS tool input.
 */
type RKVST_LIST_ASSET_EVENTS_INPUT = {
  /**
   * Asset Attributes
   * @description Filter by asset attribute equality; key->value. Use '*' for presence or '!=*' for absence.
   * @default null
   */
  asset_attributes: {
      [key: string]: string;
  } | null;
  /**
   * Asset Uuid
   * Format: uuid
   * @description UUID of the Asset to list events for
   */
  asset_uuid?: string;
  /**
   * Event Attributes
   * @description Filter by event attribute equality; key->value. Use '*' for presence or '!=*' for absence.
   * @default null
   */
  event_attributes: {
      [key: string]: string;
  } | null;
  /**
   * Minimum Trust
   * @description Return events with confirmation status at or above this level (e.g., COMMITTED, CONFIRMED)
   * @default null
   */
  minimum_trust: string | null;
  /**
   * Order By
   * @description Order results for certain schemas (e.g., SIMPLEHASHV1)
   * @default null
   */
  order_by: string | null;
  /**
   * Page Size
   * @description Maximum number of results per page, must be >= 1
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of RKVST's RKVST_LIST_ASSET_EVENTS tool output.
 */
type RKVST_LIST_ASSET_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description Array of Event objects for the asset
       */
      events: {
          /**
           * Asset Attributes
           * @description Asset attributes at the time of the event
           */
          asset_attributes: {
              [key: string]: unknown;
          };
          /**
           * Asset Identity
           * @description Relative resource address of the asset (e.g., 'assets/{UUID}')
           */
          asset_identity: string;
          /**
           * Behaviour
           * @description Behaviour used to create the event (e.g., 'RecordEvidence')
           */
          behaviour: string;
          /**
           * Block Number
           * @description Block number where the event was committed
           */
          block_number: string;
          /**
           * Confirmation Status
           * @description Confirmation status of the event (e.g., PENDING, COMMITTED, CONFIRMED)
           */
          confirmation_status: string;
          /**
           * Event Attributes
           * @description Event-specific attributes
           */
          event_attributes: {
              [key: string]: unknown;
          };
          /**
           * From
           * @description Wallet address of the entity that created this event
           */
          from_: string;
          /**
           * Identity
           * @description Identity of the event resource (e.g., 'assets/{UUID}/events/{UUID}')
           */
          identity: string;
          /**
           * Merklelog Entry
           * @description Merkle MMR log entry details for verification
           */
          merklelog_entry: {
              [key: string]: unknown;
          };
          /**
           * Operation
           * @description Operation represented by the event (e.g., 'Record')
           */
          operation: string;
          /**
           * Principal Accepted
           * @description Principal recorded by the server
           */
          principal_accepted: {
              [key: string]: unknown;
          };
          /**
           * Principal Declared
           * @description Principal provided by the user
           */
          principal_declared: {
              [key: string]: unknown;
          };
          /**
           * Tenant Identity
           * @description Identity of the tenant that created this event
           */
          tenant_identity: string;
          /**
           * Timestamp Accepted
           * @description Server-recorded time of event (ISO 8601 UTC)
           */
          timestamp_accepted: string;
          /**
           * Timestamp Committed
           * @description Verifiable storage time of event (ISO 8601 UTC)
           */
          timestamp_committed: string;
          /**
           * Timestamp Declared
           * @description User-declared time of event (ISO 8601 UTC)
           */
          timestamp_declared: string;
          /**
           * Transaction Id
           * @description Transaction hash as a hex string
           */
          transaction_id: string;
          /**
           * Transaction Index
           * @description Index of the event within the committed block
           */
          transaction_index: string;
      }[];
      /**
       * Next Page Token
       * @description Token for retrieving the next page of results; empty if none
       * @default null
       */
      next_page_token: string | null;
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
 * Type of RKVST's RKVST_LIST_IAM_SUBJECTS tool input.
 */
type RKVST_LIST_IAM_SUBJECTS_INPUT = {
  /**
   * Display Name
   * @description Filter subjects by friendly display name.
   * @default null
   */
  display_name: string | null;
  /**
   * Order By
   * @description Specify sort order for results.
   * @default null
   */
  order_by: string | null;
  /**
   * Page Size
   * @description Maximum entries per page.
   * @default null
   */
  page_size: number | null;
  /**
   * Page Token
   * @description Token to retrieve the next page of results.
   * @default null
   */
  page_token: string | null;
  /**
   * Wallet Address
   * @description Filter subjects by wallet address.
   * @default null
   */
  wallet_address: string | null;
};

/**
 * Type of RKVST's RKVST_LIST_IAM_SUBJECTS tool output.
 */
type RKVST_LIST_IAM_SUBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, or empty if there are no more pages.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Subjects
       * @description Array of IAM subjects matching the query.
       */
      subjects?: {
          /**
           * Confirmation Status
           * @description Confirmation status for the subject (e.g., PENDING, CONFIRMED).
           * @default null
           */
          confirmation_status: string | null;
          /**
           * Display Name
           * @description Friendly name for the subject.
           */
          display_name: string;
          /**
           * Identity
           * @description Relative Resource Name of the subject, e.g., 'subjects/<uuid>'.
           */
          identity: string;
          /**
           * Tenant
           * @description Tenant ID associated with the subject.
           * @default null
           */
          tenant: string | null;
          /**
           * Tessera Pub Key
           * @description List of Tessera public keys associated with the subject.
           */
          tessera_pub_key?: string[];
          /**
           * Wallet Address
           * @description List of wallet addresses associated with the subject.
           */
          wallet_address?: string[];
          /**
           * Wallet Pub Key
           * @description List of public wallet keys associated with the subject.
           */
          wallet_pub_key?: string[];
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
 * Type of RKVST's RKVST_LIST_MEMBERS tool input.
 */
type RKVST_LIST_MEMBERS_INPUT = {
  /**
   * Member State
   * @description Filter by member state. Use MEMBER_STATE_ACTIVE to include only active members, MEMBER_STATE_INACTIVE for only inactive members, or MEMBER_STATE_BOTH to include both.
   * @default null
   * @enum {string|null}
   */
  member_state: "MEMBER_STATE_ACTIVE" | "MEMBER_STATE_INACTIVE" | "MEMBER_STATE_BOTH" | null;
};

/**
 * Type of RKVST's RKVST_LIST_MEMBERS tool output.
 */
type RKVST_LIST_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description List of members in the tenant.
       */
      members: {
          /**
           * Active
           * @description Whether the membership is active.
           */
          active: boolean;
          /**
           * Display Name
           * @description Display name of the member.
           */
          display_name: string;
          /**
           * Email
           * @description Email address of the member.
           */
          email: string;
          /**
           * Identity
           * @description Unique identifier for the member.
           */
          identity: string;
          /**
           * Roles
           * @description Roles assigned to the member.
           */
          roles: string[];
      }[];
      /**
       * Page Token
       * @description Token to retrieve the next page of results, if any.
       * @default null
       */
      page_token: string | null;
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
 * Type of RKVST's RKVST_LIST_PUBLIC_ASSETS tool input.
 */
type RKVST_LIST_PUBLIC_ASSETS_INPUT = {
  /**
   * Page Size
   * @description Optional page size to limit number of public events fetched (used as proxy for assets).
   * @default null
   */
  page_size: number | null;
  /**
   * Page Token
   * @description Pagination token from a previous call to public events; omit for the first page.
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of RKVST's RKVST_LIST_PUBLIC_ASSETS tool output.
 */
type RKVST_LIST_PUBLIC_ASSETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assets
       * @description List of public asset objects.
       */
      assets: {
          /**
           * Access Policy
           * @description Mapping of behaviour to private-for keys
           */
          access_policy: {
              [key: string]: unknown;
          };
          /**
           * At Time
           * @description Time the asset data is from
           */
          at_time: string;
          /**
           * Attributes
           * @description Key–value mapping of asset properties
           */
          attributes: {
              [key: string]: unknown;
          };
          /**
           * Behaviours
           * @description Behaviours enabled for the asset
           */
          behaviours: string[];
          /**
           * Chain Id
           * @description Associated blockchain chain id
           */
          chain_id: string;
          /**
           * Confirmation Status
           * @description Whether the asset is committed
           */
          confirmation_status: string;
          /**
           * Identity
           * @description Relative resource address publicassets/{UUID}
           */
          identity: string;
          /**
           * Owner
           * @description Wallet address of asset owner
           */
          owner: string;
          /**
           * Proof Mechanism
           * @description Evidential proof mechanism
           */
          proof_mechanism: string;
          /**
           * Public
           * @description Public asset flag
           */
          public: boolean;
          /**
           * Tenant Identity
           * @description Creating tenant identity
           */
          tenant_identity: string;
          /**
           * Tracked
           * @description Whether asset is still tracked
           */
          tracked: string;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results; empty if no further pages.
       * @default null
       */
      next_page_token: string | null;
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
 * Type of RKVST's RKVST_LIST_PUBLIC_ASSET_EVENTS tool input.
 */
type RKVST_LIST_PUBLIC_ASSET_EVENTS_INPUT = {
  /**
   * Page Token
   * @description Pagination token from a previous call; omit for the first page.
   * @default null
   */
  page_token: string | null;
  /**
   * Uuid
   * Format: uuid
   * @description UUID of the public Asset to list events for
   */
  uuid?: string;
};

/**
 * Type of RKVST's RKVST_LIST_PUBLIC_ASSET_EVENTS tool output.
 */
type RKVST_LIST_PUBLIC_ASSET_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description Array of Event objects for the public asset
       */
      events: {
          /**
           * Asset Attributes
           * @description Asset attributes at the time of the event
           */
          asset_attributes: {
              [key: string]: unknown;
          };
          /**
           * Asset Identity
           * @description Relative resource address of the public asset (e.g., 'publicassets/{UUID}')
           */
          asset_identity: string;
          /**
           * Behaviour
           * @description Behaviour used to create the event (e.g., 'RecordEvidence')
           */
          behaviour: string;
          /**
           * Block Number
           * @description Block number where the event was committed
           */
          block_number: string;
          /**
           * Confirmation Status
           * @description Confirmation status of the event (e.g., PENDING, COMMITTED, CONFIRMED)
           */
          confirmation_status: string;
          /**
           * Event Attributes
           * @description Event-specific attributes
           */
          event_attributes: {
              [key: string]: unknown;
          };
          /**
           * From
           * @description Wallet address of the entity that created this event
           */
          from_: string;
          /**
           * Operation
           * @description Operation represented by the event (e.g., 'Record')
           */
          operation: string;
          /**
           * Principal Accepted
           * @description Principal recorded by the server
           */
          principal_accepted: {
              [key: string]: unknown;
          };
          /**
           * Principal Declared
           * @description Principal provided by the user
           */
          principal_declared: {
              [key: string]: unknown;
          };
          /**
           * Tenant Identity
           * @description Identity of the tenant that created this event
           */
          tenant_identity: string;
          /**
           * Timestamp Accepted
           * @description Server-recorded time of event (ISO 8601 UTC)
           */
          timestamp_accepted: string;
          /**
           * Timestamp Committed
           * @description Verifiable storage time of event (ISO 8601 UTC)
           */
          timestamp_committed: string;
          /**
           * Timestamp Declared
           * @description User-declared time of event (ISO 8601 UTC)
           */
          timestamp_declared: string;
          /**
           * Transaction Id
           * @description Transaction hash as a hex string
           */
          transaction_id: string;
          /**
           * Transaction Index
           * @description Index of the event within the committed block
           */
          transaction_index: string;
      }[];
      /**
       * Next Page Token
       * @description Token for retrieving the next page of results; empty if none
       * @default null
       */
      next_page_token: string | null;
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
 * Type of RKVST's RKVST_LIST_TENANCIES tool input.
 */
type RKVST_LIST_TENANCIES_INPUT = {
  /**
   * Page Token
   * @description Pagination token from a previous call; omit for the first page.
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of RKVST's RKVST_LIST_TENANCIES tool output.
 */
type RKVST_LIST_TENANCIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results; empty if no more pages.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Tenancies
       * @description Array of tenancy objects returned.
       */
      tenancies: {
          /**
           * Display Name
           * @description Human-readable name for the tenancy.
           * @default null
           */
          display_name: string | null;
          /**
           * EnterpriseSsoConfig
           * @description Configuration details for enterprise SSO.
           * @default null
           */
          enterprise_sso_config: {
              /**
               * Client Id
               * @description OIDC client ID for Enterprise SSO.
               */
              client_id: string;
              /**
               * Client Secret
               * @description OIDC client secret for Enterprise SSO.
               */
              client_secret: string;
              /**
               * Config Url
               * @description URL for retrieving SSO configuration.
               * @default null
               */
              config_url: string | null;
              /**
               * Issuer
               * @description OIDC issuer URL for the identity provider.
               * @default null
               */
              issuer: string | null;
              /**
               * Policy Id
               * @description Policy identifier used for Enterprise SSO.
               * @default null
               */
              policy_id: string | null;
          } | null;
          /**
           * Enterprise Sso Enabled
           * @description Whether Enterprise SSO is enabled for this tenancy.
           * @default null
           */
          enterprise_sso_enabled: boolean | null;
          /**
           * Identity
           * @description Resource name of the tenancy (format: 'tenant/{UUID}').
           */
          identity: string;
          /**
           * Verified Domain
           * @description Domain verified for the tenancy.
           * @default null
           */
          verified_domain: string | null;
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
 * Type of RKVST's RKVST_PROMOTE_MEMBER tool input.
 */
type RKVST_PROMOTE_MEMBER_INPUT = {
  /**
   * Member Id
   * @description UUID of the Member to promote.
   */
  member_id?: string;
};

/**
 * Type of RKVST's RKVST_PROMOTE_MEMBER tool output.
 */
type RKVST_PROMOTE_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the membership is active.
       */
      active: boolean;
      /**
       * Display Name
       * @description Display name of the member.
       */
      display_name: string;
      /**
       * Email
       * @description Email address of the member.
       */
      email: string;
      /**
       * Identity
       * @description Resource identity of the member.
       */
      identity: string;
      /**
       * Roles
       * @description Roles assigned to the member.
       */
      roles: string[];
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
 * Type of RKVST's RKVST_RETRIEVE_ASSET_ATTACHMENT_METADATA tool input.
 */
type RKVST_RETRIEVE_ASSET_ATTACHMENT_METADATA_INPUT = {
  /**
   * Asset Uuid
   * Format: uuid
   * @description UUID of the asset owning the attachment
   */
  asset_uuid?: string;
  /**
   * Uuid
   * Format: uuid
   * @description UUID of the attachment (no 'blobs/' prefix)
   */
  uuid?: string;
};

/**
 * Type of RKVST's RKVST_RETRIEVE_ASSET_ATTACHMENT_METADATA tool output.
 */
type RKVST_RETRIEVE_ASSET_ATTACHMENT_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hash
       * @description Hash details of the attachment
       */
      hash: {
          /**
           * Alg
           * @description Algorithm used to compute the attachment hash
           */
          alg: string;
          /**
           * Value
           * @description Computed hash value of the attachment
           */
          value: string;
      };
      /**
       * Identity
       * @description Resource address of the attachment
       */
      identity: string;
      /**
       * Issuer
       * @description Principal issuer of the attachment
       */
      issuer: string;
      /**
       * Mime Type
       * @description MIME type of the attachment
       */
      mime_type: string;
      /**
       * Scanned Bad Reason
       * @description Reason if the attachment scan failed (SCANNED_BAD)
       * @default null
       */
      scanned_bad_reason: string | null;
      /**
       * Scanned Status
       * @description Status of the attachment scan
       */
      scanned_status: string;
      /**
       * Scanned Timestamp
       * @description Timestamp when the attachment was scanned (ISO 8601)
       */
      scanned_timestamp: string;
      /**
       * Size
       * @description Size of the attachment in bytes
       */
      size: number;
      /**
       * Subject
       * @description Principal subject of the attachment
       */
      subject: string;
      /**
       * Tenantid
       * @description Tenant identity of the attachment owner
       */
      tenantid: string;
      /**
       * Timestamp Accepted
       * @description Timestamp when the request was accepted (ISO 8601)
       */
      timestamp_accepted: string;
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
 * Type of RKVST's RKVST_RETRIEVE_CAPS tool input.
 */
type RKVST_RETRIEVE_CAPS_INPUT = {
  /**
   * Service
   * @description Resource type to return caps for. Allowed values: access_policies, applications, assets, blobs, locations, members.
   * @enum {string}
   */
  service?: "access_policies" | "applications" | "assets" | "blobs" | "locations" | "members";
};

/**
 * Type of RKVST's RKVST_RETRIEVE_CAPS tool output.
 */
type RKVST_RETRIEVE_CAPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Caps
       * @description List of cap objects, each containing the resource type and remaining quota.
       */
      caps: {
          /**
           * Resource Remaining
           * @description Remaining quota for this resource, returned as a string.
           */
          resource_remaining: string;
          /**
           * Resource Type
           * @description The resource type name, e.g., 'assets'.
           */
          resource_type: string;
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
 * Type of RKVST's RKVST_RETRIEVE_EVENT_ATTACHMENT_METADATA tool input.
 */
type RKVST_RETRIEVE_EVENT_ATTACHMENT_METADATA_INPUT = {
  /**
   * Asset Uuid
   * @description UUID of the asset containing the event.
   */
  asset_uuid?: string;
  /**
   * Event Uuid
   * @description UUID of the event to which the attachment belongs.
   */
  event_uuid?: string;
  /**
   * Uuid
   * @description UUID of the attachment (omit the 'blobs/' prefix).
   */
  uuid?: string;
};

/**
 * Type of RKVST's RKVST_RETRIEVE_EVENT_ATTACHMENT_METADATA tool output.
 */
type RKVST_RETRIEVE_EVENT_ATTACHMENT_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hash
       * @description Object containing hash algorithm and value.
       */
      hash: {
          /**
           * Alg
           * @description Hash algorithm used for the blob (e.g., SHA256).
           */
          alg: string;
          /**
           * Value
           * @description Hash value of the blob.
           */
          value: string;
      };
      /**
       * Identity
       * @description Blob identity resource address.
       */
      identity: string;
      /**
       * Issuer
       * @description Principal issuer of the blob.
       */
      issuer: string;
      /**
       * Mime Type
       * @description HTTP MIME type of the blob.
       */
      mime_type: string;
      /**
       * Scanned Bad Reason
       * @description Reason if the scan status indicates a bad scan.
       * @default null
       */
      scanned_bad_reason: string | null;
      /**
       * Scanned Status
       * @description Scan status of the blob.
       */
      scanned_status: string;
      /**
       * Scanned Timestamp
       * @description Time when the blob was scanned (ISO 8601).
       * @default null
       */
      scanned_timestamp: string | null;
      /**
       * Size
       * @description Size of the blob in bytes.
       */
      size: number;
      /**
       * Subject
       * @description Principal subject of the blob.
       */
      subject: string;
      /**
       * Tenantid
       * @description Tenant identity the blob belongs to.
       */
      tenantid: string;
      /**
       * Timestamp Accepted
       * @description Time when the request was accepted (ISO 8601).
       */
      timestamp_accepted: string;
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
 * Type of RKVST's RKVST_RETRIEVE_PUBLIC_ASSET_ATTACHMENT_METADATA tool input.
 */
type RKVST_RETRIEVE_PUBLIC_ASSET_ATTACHMENT_METADATA_INPUT = {
  /**
   * Asset Uuid
   * @description Public asset UUID (path parameter)
   */
  asset_uuid?: string;
  /**
   * Uuid
   * @description Attachment UUID (path parameter)
   */
  uuid?: string;
};

/**
 * Type of RKVST's RKVST_RETRIEVE_PUBLIC_ASSET_ATTACHMENT_METADATA tool output.
 */
type RKVST_RETRIEVE_PUBLIC_ASSET_ATTACHMENT_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Hash */
      hash: {
          /**
           * Alg
           * @description Hashing algorithm (e.g., 'SHA256')
           */
          alg: string;
          /**
           * Value
           * @description Hash value of the blob
           */
          value: string;
      };
      /**
       * Identity
       * @description Blob identity
       */
      identity: string;
      /**
       * Issuer
       * @description Principal issuer
       */
      issuer: string;
      /**
       * Mime Type
       * @description HTTP MIME type of the attachment
       */
      mime_type: string;
      /**
       * Scanned Bad Reason
       * @description Reason for scan failure if scanned_status is 'SCANNED_BAD'
       * @default null
       */
      scanned_bad_reason: string | null;
      /**
       * Scanned Status
       * @description Status of the virus/malware scan
       */
      scanned_status: string;
      /**
       * Scanned Timestamp
       * @description Timestamp when the attachment was scanned (ISO 8601)
       * @default null
       */
      scanned_timestamp: string | null;
      /**
       * Size
       * @description Size of the blob in bytes
       */
      size: number;
      /**
       * Subject
       * @description Principal subject
       */
      subject: string;
      /**
       * Tenantid
       * @description Tenant identity the blob belongs to
       */
      tenantid: string;
      /**
       * Timestamp Accepted
       * @description Time the request was received (ISO 8601)
       */
      timestamp_accepted: string;
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
 * Type of RKVST's RKVST_RETRIEVE_PUBLIC_EVENT_ATTACHMENT_METADATA tool input.
 */
type RKVST_RETRIEVE_PUBLIC_EVENT_ATTACHMENT_METADATA_INPUT = {
  /**
   * Asset Uuid
   * @description UUID of the public asset
   */
  asset_uuid?: string;
  /**
   * Event Uuid
   * @description UUID of the event within the public asset
   */
  event_uuid?: string;
  /**
   * Uuid
   * @description UUID of the attachment
   */
  uuid?: string;
};

/**
 * Type of RKVST's RKVST_RETRIEVE_PUBLIC_EVENT_ATTACHMENT_METADATA tool output.
 */
type RKVST_RETRIEVE_PUBLIC_EVENT_ATTACHMENT_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hash
       * @description Blob hash metadata
       */
      hash: {
          /**
           * Alg
           * @description Hash algorithm used for the blob
           */
          alg: string;
          /**
           * Value
           * @description Hash value of the blob
           */
          value: string;
      };
      /**
       * Identity
       * @description Resource address of the blob
       */
      identity: string;
      /**
       * Issuer
       * @description Principal issuer of the blob
       */
      issuer: string;
      /**
       * Mime Type
       * @description HTTP MIME type of the attachment
       */
      mime_type: string;
      /**
       * Scanned Bad Reason
       * @description Reason hint if scan status is SCANNED_BAD
       * @default null
       */
      scanned_bad_reason: string | null;
      /**
       * Scanned Status
       * @description Scan status of the attachment
       */
      scanned_status: string;
      /**
       * Scanned Timestamp
       * @description Timestamp when the attachment was scanned (ISO 8601)
       */
      scanned_timestamp: string;
      /**
       * Size
       * @description Size of the blob in bytes
       */
      size: number;
      /**
       * Subject
       * @description Principal subject of the blob
       */
      subject: string;
      /**
       * Tenantid
       * @description Tenant identity owning the blob
       */
      tenantid: string;
      /**
       * Timestamp Accepted
       * @description Timestamp when the request was accepted (ISO 8601)
       */
      timestamp_accepted: string;
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
 * Type of RKVST's RKVST_SEARCH_EVENTS tool input.
 */
type RKVST_SEARCH_EVENTS_INPUT = {
  /**
   * Filter
   * @description OData filter expression. Filterable fields: trails, event_type, origin_tenant, created_by, created_at, ledger_entry/index, ledger_entry/idtimestamp, ledger_entry/content_hash. Example: "trails/any(t: t eq 'Clouseau') and event_type eq 'CREATED'"
   * @default null
   */
  filter: string | null;
  /**
   * Skip
   * @description Number of results to skip before returning the page.
   * @default null
   */
  skip: number | null;
  /**
   * Top
   * @description Max number of results to return (1-50).
   * @default null
   */
  top: number | null;
};

/**
 * Type of RKVST's RKVST_SEARCH_EVENTS tool output.
 */
type RKVST_SEARCH_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description Page of matching events
       */
      events: {
          /**
           * Attributes
           * @description Key/value map of event attributes
           * @default null
           */
          attributes: {
              [key: string]: unknown;
          } | null;
          /**
           * Confirmation Status
           * @description Ledger confirmation status
           * @default null
           * @enum {string|null}
           */
          confirmation_status: "STORED" | "COMMITTED" | "CONFIRMED" | null;
          /**
           * Created At
           * @description Timestamp in milliseconds since Unix epoch
           * @default null
           */
          created_at: number | null;
          /**
           * Created By
           * @description User or system that created the event
           * @default null
           */
          created_by: string | null;
          /**
           * Event Type
           * @description Type of the event
           * @default null
           */
          event_type: string | null;
          /**
           * Identity
           * @description Unique event identifier
           * @default null
           */
          identity: string | null;
          /**
           * LedgerEntry
           * @default null
           */
          ledger_entry: {
              /**
               * Content Hash
               * @description Ledger content hash
               * @default null
               */
              content_hash: string | null;
              /**
               * Hash Schema
               * @description Hash schema used
               * @default null
               */
              hash_schema: string | null;
              /**
               * Idtimestamp
               * @description Ledger idtimestamp
               * @default null
               */
              idtimestamp: string | null;
              /**
               * Index
               * @description Ledger entry index
               * @default null
               */
              index: string | null;
              /**
               * Log Id
               * @description Ledger log ID
               * @default null
               */
              log_id: string | null;
          } | null;
          /**
           * Origin Tenant
           * @description Tenant where event originated
           * @default null
           */
          origin_tenant: string | null;
          /**
           * Trails
           * @description List of trail IDs associated with this event
           * @default null
           */
          trails: string[] | null;
      }[];
      /**
       * Total Count
       * @description Total number of matching events across all pages
       */
      total_count: number;
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
 * Type of RKVST's RKVST_UPDATE_APP_REGISTRATION tool input.
 */
type RKVST_UPDATE_APP_REGISTRATION_INPUT = {
  /**
   * App Registration Id
   * @description UUID of the App Registration to update.
   */
  app_registration_id?: string;
  /**
   * Custom Claims
   * @description Custom claims to set on the Application for use in access policies.
   * @default null
   */
  custom_claims: {
      [key: string]: string;
  } | null;
  /**
   * Display Name
   * @description New human-readable display name for the Application.
   * @default null
   */
  display_name: string | null;
};

/**
 * Type of RKVST's RKVST_UPDATE_APP_REGISTRATION tool output.
 */
type RKVST_UPDATE_APP_REGISTRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Client Id
       * @description Client ID for the OIDC client credentials flow.
       */
      client_id: string;
      /**
       * Credentials
       * @description List of time-limited credentials for this Application.
       * @default null
       */
      credentials: {
          /**
           * Secret
           * @description The client secret (redacted in standard responses).
           */
          secret: string;
          /**
           * Valid From
           * @description Secret validity start time in RFC3339 format.
           */
          valid_from: string;
          /**
           * Valid Until
           * @description Secret validity end time in RFC3339 format.
           */
          valid_until: string;
      }[] | null;
      /**
       * Custom Claims
       * @description Custom claims associated to this Application.
       * @default null
       */
      custom_claims: {
          [key: string]: string;
      } | null;
      /**
       * Display Name
       * @description Human-readable display name for the Application.
       */
      display_name: string;
      /**
       * Identity
       * @description Resource name for the Application.
       */
      identity: string;
      /**
       * Roles
       * @description Roles assigned to the Application.
       * @default null
       */
      roles: string[] | null;
      /**
       * Tenant Id
       * @description Identity of the tenant owning the Application.
       */
      tenant_id: string;
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
 * Type map of all available tool input types for toolkit "RKVST".
 */
export type RKVST_TOOL_INPUTS = {
  DOWNLOAD_EVENT_ATTACHMENT: RKVST_DOWNLOAD_EVENT_ATTACHMENT_INPUT
  GET_APP_REGISTRATION: RKVST_GET_APP_REGISTRATION_INPUT
  GET_ASSET: RKVST_GET_ASSET_INPUT
  GET_BLOB: RKVST_GET_BLOB_INPUT
  GET_EVENT: RKVST_GET_EVENT_INPUT
  GET_IAM_SUBJECT: RKVST_GET_IAM_SUBJECT_INPUT
  GET_MEMBER: RKVST_GET_MEMBER_INPUT
  GET_PUBLIC_ASSET: RKVST_GET_PUBLIC_ASSET_INPUT
  GET_PUBLIC_ASSET_EVENT: RKVST_GET_PUBLIC_ASSET_EVENT_INPUT
  GET_TENANCY: RKVST_GET_TENANCY_INPUT
  LIST_APP_REGISTRATIONS: RKVST_LIST_APP_REGISTRATIONS_INPUT
  LIST_ASSETS: RKVST_LIST_ASSETS_INPUT
  LIST_ASSET_EVENTS: RKVST_LIST_ASSET_EVENTS_INPUT
  LIST_IAM_SUBJECTS: RKVST_LIST_IAM_SUBJECTS_INPUT
  LIST_MEMBERS: RKVST_LIST_MEMBERS_INPUT
  LIST_PUBLIC_ASSETS: RKVST_LIST_PUBLIC_ASSETS_INPUT
  LIST_PUBLIC_ASSET_EVENTS: RKVST_LIST_PUBLIC_ASSET_EVENTS_INPUT
  LIST_TENANCIES: RKVST_LIST_TENANCIES_INPUT
  PROMOTE_MEMBER: RKVST_PROMOTE_MEMBER_INPUT
  RETRIEVE_ASSET_ATTACHMENT_METADATA: RKVST_RETRIEVE_ASSET_ATTACHMENT_METADATA_INPUT
  RETRIEVE_CAPS: RKVST_RETRIEVE_CAPS_INPUT
  RETRIEVE_EVENT_ATTACHMENT_METADATA: RKVST_RETRIEVE_EVENT_ATTACHMENT_METADATA_INPUT
  RETRIEVE_PUBLIC_ASSET_ATTACHMENT_METADATA: RKVST_RETRIEVE_PUBLIC_ASSET_ATTACHMENT_METADATA_INPUT
  RETRIEVE_PUBLIC_EVENT_ATTACHMENT_METADATA: RKVST_RETRIEVE_PUBLIC_EVENT_ATTACHMENT_METADATA_INPUT
  SEARCH_EVENTS: RKVST_SEARCH_EVENTS_INPUT
  UPDATE_APP_REGISTRATION: RKVST_UPDATE_APP_REGISTRATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RKVST".
 */
export type RKVST_TOOL_OUTPUTS = {
  DOWNLOAD_EVENT_ATTACHMENT: RKVST_DOWNLOAD_EVENT_ATTACHMENT_OUTPUT
  GET_APP_REGISTRATION: RKVST_GET_APP_REGISTRATION_OUTPUT
  GET_ASSET: RKVST_GET_ASSET_OUTPUT
  GET_BLOB: RKVST_GET_BLOB_OUTPUT
  GET_EVENT: RKVST_GET_EVENT_OUTPUT
  GET_IAM_SUBJECT: RKVST_GET_IAM_SUBJECT_OUTPUT
  GET_MEMBER: RKVST_GET_MEMBER_OUTPUT
  GET_PUBLIC_ASSET: RKVST_GET_PUBLIC_ASSET_OUTPUT
  GET_PUBLIC_ASSET_EVENT: RKVST_GET_PUBLIC_ASSET_EVENT_OUTPUT
  GET_TENANCY: RKVST_GET_TENANCY_OUTPUT
  LIST_APP_REGISTRATIONS: RKVST_LIST_APP_REGISTRATIONS_OUTPUT
  LIST_ASSETS: RKVST_LIST_ASSETS_OUTPUT
  LIST_ASSET_EVENTS: RKVST_LIST_ASSET_EVENTS_OUTPUT
  LIST_IAM_SUBJECTS: RKVST_LIST_IAM_SUBJECTS_OUTPUT
  LIST_MEMBERS: RKVST_LIST_MEMBERS_OUTPUT
  LIST_PUBLIC_ASSETS: RKVST_LIST_PUBLIC_ASSETS_OUTPUT
  LIST_PUBLIC_ASSET_EVENTS: RKVST_LIST_PUBLIC_ASSET_EVENTS_OUTPUT
  LIST_TENANCIES: RKVST_LIST_TENANCIES_OUTPUT
  PROMOTE_MEMBER: RKVST_PROMOTE_MEMBER_OUTPUT
  RETRIEVE_ASSET_ATTACHMENT_METADATA: RKVST_RETRIEVE_ASSET_ATTACHMENT_METADATA_OUTPUT
  RETRIEVE_CAPS: RKVST_RETRIEVE_CAPS_OUTPUT
  RETRIEVE_EVENT_ATTACHMENT_METADATA: RKVST_RETRIEVE_EVENT_ATTACHMENT_METADATA_OUTPUT
  RETRIEVE_PUBLIC_ASSET_ATTACHMENT_METADATA: RKVST_RETRIEVE_PUBLIC_ASSET_ATTACHMENT_METADATA_OUTPUT
  RETRIEVE_PUBLIC_EVENT_ATTACHMENT_METADATA: RKVST_RETRIEVE_PUBLIC_EVENT_ATTACHMENT_METADATA_OUTPUT
  SEARCH_EVENTS: RKVST_SEARCH_EVENTS_OUTPUT
  UPDATE_APP_REGISTRATION: RKVST_UPDATE_APP_REGISTRATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RKVST toolkit.
 */
export const RKVST = {
  slug: "rkvst",
  tools: {
    /**
     * Tool to download an attachment from a specified event on an asset. use when you have asset uuid, event uuid, and attachment uuid, and want the raw binary content.
     */
    DOWNLOAD_EVENT_ATTACHMENT: "RKVST_DOWNLOAD_EVENT_ATTACHMENT",
    /**
     * Tool to retrieve details for a given app registration id. use after obtaining the application's uuid to inspect its configuration and credentials.
     */
    GET_APP_REGISTRATION: "RKVST_GET_APP_REGISTRATION",
    /**
     * Tool to retrieve details for a given asset. use after you have its uuid; set `at time` to get historical state.
     */
    GET_ASSET: "RKVST_GET_ASSET",
    /**
     * Tool to retrieve details of a blob by id. use after confirming the blob id.
     */
    GET_BLOB: "RKVST_GET_BLOB",
    /**
     * Tool to retrieve details of a specified event. use when you need full metadata, attributes, and associated trails of an existing event in datatrails.
     */
    GET_EVENT: "RKVST_GET_EVENT",
    /**
     * Tool to retrieve iam subject details. use when you need to fetch details for a specific iam subject by its id.
     */
    GET_IAM_SUBJECT: "RKVST_GET_IAM_SUBJECT",
    /**
     * Tool to retrieve details for a given member id. use after obtaining a valid member uuid.
     */
    GET_MEMBER: "RKVST_GET_MEMBER",
    /**
     * Tool to retrieve details for a public asset. use when you have a public asset uuid.
     */
    GET_PUBLIC_ASSET: "RKVST_GET_PUBLIC_ASSET",
    /**
     * Tool to retrieve a specific public asset event. use when you have public asset and event uuids.
     */
    GET_PUBLIC_ASSET_EVENT: "RKVST_GET_PUBLIC_ASSET_EVENT",
    /**
     * Tool to retrieve details for a specific tenancy. use after you have a tenancy id.
     */
    GET_TENANCY: "RKVST_GET_TENANCY",
    /**
     * Tool to list all app registrations. use after acquiring a valid auth token to retrieve the applications registered under the tenant.
     */
    LIST_APP_REGISTRATIONS: "RKVST_LIST_APP_REGISTRATIONS",
    /**
     * Tool to list all assets with optional pagination and filters. use when you need to retrieve asset metadata in batches via page size and next page token.
     */
    LIST_ASSETS: "RKVST_LIST_ASSETS",
    /**
     * Tool to list events for a specified asset. use after confirming you have the asset uuid.
     */
    LIST_ASSET_EVENTS: "RKVST_LIST_ASSET_EVENTS",
    /**
     * Tool to list iam subjects. use when you need to retrieve provider-managed subjects, optionally filtering by display name. use after authenticating the tenant.
     */
    LIST_IAM_SUBJECTS: "RKVST_LIST_IAM_SUBJECTS",
    /**
     * Tool to list all tenant members. use when you need an overview of all users in your tenant.
     */
    LIST_MEMBERS: "RKVST_LIST_MEMBERS",
    /**
     * Tool to list all public assets. use when you need to retrieve all assets made public.
     */
    LIST_PUBLIC_ASSETS: "RKVST_LIST_PUBLIC_ASSETS",
    /**
     * Tool to list events for a specific public asset. use when you need to retrieve the event history of a public asset after confirming its public availability.
     */
    LIST_PUBLIC_ASSET_EVENTS: "RKVST_LIST_PUBLIC_ASSET_EVENTS",
    /**
     * Tool to list all tenancies. use after authenticating to retrieve the tenancy records available to the current tenant.
     */
    LIST_TENANCIES: "RKVST_LIST_TENANCIES",
    /**
     * Tool to promote a tenant member to owner role. use when you need to elevate permissions after verifying the member identity.
     */
    PROMOTE_MEMBER: "RKVST_PROMOTE_MEMBER",
    /**
     * Tool to retrieve metadata for an attachment on a specified asset. use after obtaining asset and attachment uuids.
     */
    RETRIEVE_ASSET_ATTACHMENT_METADATA: "RKVST_RETRIEVE_ASSET_ATTACHMENT_METADATA",
    /**
     * Tool to retrieve resource limit quotas for a specified service. use when checking quota availability before provisioning resources.
     */
    RETRIEVE_CAPS: "RKVST_RETRIEVE_CAPS",
    /**
     * Tool to retrieve metadata for an attachment on a specified event. use when you have asset uuid, event uuid, and attachment uuid and need details like size, hash, and scan status.
     */
    RETRIEVE_EVENT_ATTACHMENT_METADATA: "RKVST_RETRIEVE_EVENT_ATTACHMENT_METADATA",
    /**
     * Tool to retrieve metadata for an attachment on a specified public asset. use when you have the public asset uuid and attachment uuid, before downloading the content.
     */
    RETRIEVE_PUBLIC_ASSET_ATTACHMENT_METADATA: "RKVST_RETRIEVE_PUBLIC_ASSET_ATTACHMENT_METADATA",
    /**
     * Tool to retrieve metadata for an attachment on a public asset event. use after you have the public asset uuid, event uuid, and attachment uuid.
     */
    RETRIEVE_PUBLIC_EVENT_ATTACHMENT_METADATA: "RKVST_RETRIEVE_PUBLIC_EVENT_ATTACHMENT_METADATA",
    /**
     * Tool to search events matching filter criteria with pagination. use when retrieving events by odata filter and paging through large result sets.
     */
    SEARCH_EVENTS: "RKVST_SEARCH_EVENTS",
    /**
     * Tool to update an application's display name or custom claims. use after retrieving an app registration to apply partial updates to its configuration.
     */
    UPDATE_APP_REGISTRATION: "RKVST_UPDATE_APP_REGISTRATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RKVST".
 */
export type RKVST_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RKVST".
 */
export type RKVST_TRIGGER_EVENTS = {}
