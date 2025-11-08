// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOCK_CERTS's DOCK_CERTS_CREATE_API_KEY tool input.
 */
type DOCK_CERTS_CREATE_API_KEY_INPUT = {
  /**
   * Alias
   * @description Human-readable name for the API key.
   * @default null
   */
  alias: string | null;
  /**
   * Ips
   * @description List of whitelisted IP addresses allowed to use the key.
   * @default null
   */
  ips: string[] | null;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_CREATE_API_KEY tool output.
 */
type DOCK_CERTS_CREATE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alias
       * @description Human-readable alias for the key.
       * @default null
       */
      alias: string | null;
      /**
       * Created
       * @description Creation timestamp (ISO 8601).
       * @default null
       */
      created: string | null;
      /**
       * Creator Id
       * @description Identifier of the creator of the key.
       * @default null
       */
      creatorId: number | null;
      /**
       * Expires
       * @description Expiration timestamp (ISO 8601), if any.
       * @default null
       */
      expires: string | null;
      /**
       * Ips
       * @description List of whitelisted IPs for the key.
       */
      ips?: string[];
      /**
       * Key
       * @description Public identifier of the API key.
       */
      key: string;
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
 * Type of DOCK_CERTS's DOCK_CERTS_CREATE_WEBHOOK tool input.
 */
type DOCK_CERTS_CREATE_WEBHOOK_INPUT = {
  /**
   * Description
   * @description Human-readable description for this webhook.
   * @default null
   */
  description: string | null;
  /**
   * Events
   * @description List of event types to subscribe to.
   */
  events?: string[];
  /**
   * Status
   * @description Webhook status flag (0 = disabled, 1 = enabled).
   * @default 1
   * @enum {integer|null}
   */
  status: 0 | 1 | null;
  /**
   * Url
   * Format: uri
   * @description The HTTPS endpoint to which Dock.io will POST event notifications.
   */
  url?: string;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_CREATE_WEBHOOK tool output.
 */
type DOCK_CERTS_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the webhook was created.
       */
      created: string;
      /**
       * Description
       * @description Webhook description.
       * @default null
       */
      description: string | null;
      /**
       * Events
       * @description Events this webhook is subscribed to.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: string;
      /**
       * Secret
       * @description Secret token to verify incoming webhook payloads.
       */
      secret: string;
      /**
       * Status
       * @description Current status flag (0 = disabled, 1 = enabled).
       * @enum {integer}
       */
      status: 0 | 1;
      /**
       * Url
       * @description Configured destination URL for notifications.
       */
      url: string;
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
 * Type of DOCK_CERTS's DOCK_CERTS_DELETE_API_KEY tool input.
 */
type DOCK_CERTS_DELETE_API_KEY_INPUT = {
  /**
   * Id
   * @description Unique identifier of the API key to delete
   */
  id?: string;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_DELETE_API_KEY tool output.
 */
type DOCK_CERTS_DELETE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the API key was deleted successfully
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
 * Type of DOCK_CERTS's DOCK_CERTS_DELETE_CREDENTIAL tool input.
 */
type DOCK_CERTS_DELETE_CREDENTIAL_INPUT = {
  /**
   * Id
   * @description Identifier of the credential to delete. It can be a full URI; the action will URL-encode it for safe path usage.
   */
  id?: string;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_DELETE_CREDENTIAL tool output.
 */
type DOCK_CERTS_DELETE_CREDENTIAL_OUTPUT = {
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
 * Type of DOCK_CERTS's DOCK_CERTS_DELETE_TAG tool input.
 */
type DOCK_CERTS_DELETE_TAG_INPUT = {
  /**
   * Id
   * @description Unique identifier of the tag to delete.
   */
  id?: string;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_DELETE_TAG tool output.
 */
type DOCK_CERTS_DELETE_TAG_OUTPUT = {
  /**
   * Data
   * @description Wrapper for deleted tag information.
   */
  data?: {
      /**
       * Id
       * @description Identifier of the tag that was deleted.
       */
      id: string;
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
 * Type of DOCK_CERTS's DOCK_CERTS_DELETE_WEBHOOK tool input.
 */
type DOCK_CERTS_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the webhook to delete
   */
  id?: string;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_DELETE_WEBHOOK tool output.
 */
type DOCK_CERTS_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the webhook was deleted successfully
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
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_API_KEY tool input.
 */
type DOCK_CERTS_RETRIEVE_API_KEY_INPUT = {
  /**
   * Id
   * @description Public key identifier of the API key (value of 'key' from /keys).
   */
  id?: string;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_API_KEY tool output.
 */
type DOCK_CERTS_RETRIEVE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alias
       * @description Human-readable alias for the key.
       * @default null
       */
      alias: string | null;
      /**
       * Created
       * @description Creation timestamp (ISO 8601).
       * @default null
       */
      created: string | null;
      /**
       * Creator Id
       * @description ID of the creator of this key.
       * @default null
       */
      creatorId: number | null;
      /**
       * Expires
       * @description Expiration timestamp (ISO 8601), if any.
       * @default null
       */
      expires: string | null;
      /**
       * Ips
       * @description Whitelisted IPs for the key.
       */
      ips?: string[];
      /**
       * Key
       * @description Public key identifier value.
       */
      key: string;
  } & {
      [key: string]: unknown;
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
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_API_KEYS tool input.
 */
type DOCK_CERTS_RETRIEVE_API_KEYS_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return (1-64).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for pagination.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_API_KEYS tool output.
 */
type DOCK_CERTS_RETRIEVE_API_KEYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: ({
      /**
       * Alias
       * @description Human-readable alias for the key.
       * @default null
       */
      alias: string | null;
      /**
       * Created
       * @description Creation timestamp.
       * @default null
       */
      created: string | null;
      /**
       * Expires
       * @description Expiration timestamp if any.
       * @default null
       */
      expires: string | null;
      /**
       * Ips
       * @description Whitelisted IPs for the key.
       * @default null
       */
      ips: string[] | null;
      /**
       * Key
       * @description Public key identifier value.
       * @default null
       */
      key: string | null;
  } & {
      [key: string]: unknown;
  })[];
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
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_CREDENTIAL tool input.
 */
type DOCK_CERTS_RETRIEVE_CREDENTIAL_INPUT = {
  /**
   * Id
   * @description Credential ID as a full URI.
   */
  id?: string;
  /**
   * Password
   * @description Password supplied at issuance to decrypt stored credential contents. Optional; without it, only metadata is returned.
   * @default null
   */
  password: string | null;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_CREDENTIAL tool output.
 */
type DOCK_CERTS_RETRIEVE_CREDENTIAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Algorithm
       * @description Signing algorithm used (e.g., ed25519, dockbbs).
       * @default null
       */
      algorithm: string | null;
      /**
       * Byte Size
       * @description Credential size in bytes.
       * @default null
       */
      byteSize: number | null;
      /**
       * Created At
       * @description ISO 8601 creation timestamp.
       * @default null
       */
      createdAt: string | null;
      /**
       * Credential
       * @description Full Verifiable Credential JSON contents when available.
       * @default null
       */
      credential: {
          [key: string]: unknown;
      } | null;
      /**
       * Expiration Date
       * @description ISO 8601 expiration timestamp, if set.
       * @default null
       */
      expirationDate: string | null;
      /**
       * Expiry Date
       * @description Alternative expiration field if provided by API.
       * @default null
       */
      expiryDate: string | null;
      /**
       * Id
       * @description Credential ID (URI).
       */
      id: string;
      /**
       * Index
       * @description Internal index reference.
       * @default null
       */
      index: string | null;
      /**
       * Issuance Date
       * @description ISO 8601 issuance timestamp.
       * @default null
       */
      issuanceDate: string | null;
      /**
       * Issuer Key
       * @description Issuer DID key reference.
       * @default null
       */
      issuerKey: string | null;
      /**
       * Issuer Name
       * @description Issuer display name.
       * @default null
       */
      issuerName: string | null;
      /**
       * Persist
       * @description Whether credential contents were persisted.
       * @default null
       */
      persist: boolean | null;
      /**
       * Revocation Registry
       * @description Revocation registry identifier if linked.
       * @default null
       */
      revocationRegistry: string | null;
      /**
       * Revoked
       * @description Whether the credential has been revoked.
       * @default null
       */
      revoked: boolean | null;
      /**
       * Subject Ref
       * @description Subject reference label.
       * @default null
       */
      subjectRef: string | null;
      /**
       * Type
       * @description Credential type.
       * @default null
       */
      type: string | null;
      /**
       * Whitelabel
       * @description Whitelabel information if present.
       * @default null
       */
      whitelabel: string | null;
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
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_CREDENTIALS tool input.
 */
type DOCK_CERTS_RETRIEVE_CREDENTIALS_INPUT = {
  /**
   * Filter
   * @description Optional filter string to match Credential ID, Subject Ref, Issuer, Type, Created Date, or Issue Date.
   * @default null
   */
  filter: string | null;
  /**
   * Limit
   * @description How many items to return (min 1, max 100; default 64).
   * @default 64
   */
  limit: number;
  /**
   * Offset
   * @description How many items to skip for pagination (default 0).
   * @default 0
   */
  offset: number;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_CREDENTIALS tool output.
 */
type DOCK_CERTS_RETRIEVE_CREDENTIALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credentials
       * @description List of credential metadata objects.
       */
      credentials: {
          /**
           * Algorithm
           * @description Signing algorithm used (e.g., ed25519, dockbbs).
           */
          algorithm: string;
          /**
           * Byte Size
           * @description Size of the credential in bytes.
           */
          byteSize: number;
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          createdAt: string;
          /**
           * Credential
           * @description Nested Verifiable Credential contents; use GET /credentials/{id} for full payload.
           * @default null
           */
          credential: {
              [key: string]: unknown;
          } | null;
          /**
           * Expiration Date
           * @description Expiration timestamp in ISO 8601 format, or null if none.
           * @default null
           */
          expirationDate: string | null;
          /**
           * Id
           * @description Credential identifier (URI).
           */
          id: string;
          /**
           * Index
           * @description Internal index reference.
           */
          index: string;
          /**
           * Issuance Date
           * @description Issuance timestamp in ISO 8601 format.
           */
          issuanceDate: string;
          /**
           * Issuer Key
           * @description DID key of the issuer.
           */
          issuerKey: string;
          /**
           * Issuer Name
           * @description Human-readable issuer name.
           */
          issuerName: string;
          /**
           * Persist
           * @description Whether credential contents were persisted.
           */
          persist: boolean;
          /**
           * Revocation Registry
           * @description Revocation registry identifier if linked.
           * @default null
           */
          revocationRegistry: string | null;
          /**
           * Revoked
           * @description Whether the credential has been revoked.
           */
          revoked: boolean;
          /**
           * Subject Ref
           * @description Subject reference label.
           */
          subjectRef: string;
          /**
           * Type
           * @description Credential type.
           */
          type: string;
          /**
           * Whitelabel
           * @description Whitelabel information if present.
           * @default null
           */
          whitelabel: string | null;
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
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_DID tool input.
 */
type DOCK_CERTS_RETRIEVE_DID_INPUT = {
  /**
   * Did
   * @description Fully qualified decentralized identifier (DID) to resolve (e.g., did:dock:5GJcPXbt8RBhxu7w4GmgYb).
   */
  did?: string;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_DID tool output.
 */
type DOCK_CERTS_RETRIEVE_DID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Context
       * @description JSON-LD context(s) used in this DID Document
       */
      "@context": string | null;
      /**
       * Authentication
       * @description List of authentication entries (string references or objects) defined for this DID Document
       */
      authentication: (string | {
          [key: string]: unknown;
      })[];
      /**
       * Id
       * @description Fully qualified DID (should match the requested DID)
       */
      id: string;
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
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_REGISTRIES tool input.
 */
type DOCK_CERTS_RETRIEVE_REGISTRIES_INPUT = {
  /**
   * Did
   * @description Filter registries where this DID exists in the registry policy.
   * @default null
   */
  did: string | null;
  /**
   * Limit
   * @description Maximum number of items to return, between 1 and 64. Defaults to 64.
   * @default 64
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for pagination, defaults to 0.
   * @default 0
   */
  offset: number | null;
  /**
   * Type
   * @description Filter registries by type.
   * @default null
   */
  type: string | null;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_REGISTRIES tool output.
 */
type DOCK_CERTS_RETRIEVE_REGISTRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format.
       */
      created_at: string;
      /**
       * Id
       * @description Registry identifier (Hex32).
       */
      id: string;
      /**
       * Policy And Type
       * @description Registry policy metadata.
       */
      policy_and_type: {
          /**
           * Add Only
           * @description Whether registry is add-only (no removals allowed).
           */
          addOnly: boolean;
          /**
           * Policy
           * @description List of controller DIDs allowed by policy.
           */
          policy: string[];
          /**
           * Type
           * @description Policy type (e.g., OneOf).
           */
          type: string;
      };
      /**
       * Registry Type
       * @description Type of registry.
       */
      registry_type: string;
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
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_WEBHOOK tool input.
 */
type DOCK_CERTS_RETRIEVE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the webhook (numeric string).
   */
  id?: string;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_WEBHOOK tool output.
 */
type DOCK_CERTS_RETRIEVE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp in ISO 8601 format.
       */
      created: string;
      /**
       * Description
       * @description Optional human-readable description for the webhook.
       * @default null
       */
      description: string | null;
      /**
       * Events
       * @description List of subscribed event names for this webhook.
       */
      events: string[];
      /**
       * Id
       * @description Webhook identifier.
       */
      id: string;
      /**
       * Secret
       * @description Signing secret associated with this webhook.
       */
      secret: string;
      /**
       * Status
       * @description Numeric status flag: 0 = disabled, 1 = enabled.
       */
      status: number;
      /**
       * Url
       * @description Destination URL that receives webhook POSTs.
       */
      url: string;
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
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_WEBHOOKS tool input.
 */
type DOCK_CERTS_RETRIEVE_WEBHOOKS_INPUT = {
  /**
   * Limit
   * @description Maximum number of webhooks to return in one call (max 64).
   * @default 64
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of webhooks to skip for pagination.
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_RETRIEVE_WEBHOOKS tool output.
 */
type DOCK_CERTS_RETRIEVE_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp in ISO 8601 format.
       */
      created: string;
      /**
       * Description
       * @description Optional human-readable description for the webhook.
       * @default null
       */
      description: string | null;
      /**
       * Events
       * @description List of event names this webhook subscribes to.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: string;
      /**
       * Secret
       * @description Signing secret associated with this webhook.
       */
      secret: string;
      /**
       * Status
       * @description Status flag (0 = disabled, 1 = enabled).
       */
      status: number;
      /**
       * Url
       * @description Destination URL for webhook POSTs.
       */
      url: string;
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
 * Type of DOCK_CERTS's DOCK_CERTS_VERIFY tool input.
 */
type DOCK_CERTS_VERIFY_INPUT = {
  /**
   * Credential
   * @description Either a W3C Verifiable Credential or Verifiable Presentation (JSON-LD dict) to verify, or a JWT string representation.
   */
  credential?: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of DOCK_CERTS's DOCK_CERTS_VERIFY tool output.
 */
type DOCK_CERTS_VERIFY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Detailed per-item verification outcomes (shape varies by credential/proof).
       */
      results: {
          [key: string]: unknown;
      }[];
      /**
       * Verified
       * @description Overall verification result.
       */
      verified: boolean;
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
 * Type map of all available tool input types for toolkit "DOCK_CERTS".
 */
export type DOCK_CERTS_TOOL_INPUTS = {
  CREATE_API_KEY: DOCK_CERTS_CREATE_API_KEY_INPUT
  CREATE_WEBHOOK: DOCK_CERTS_CREATE_WEBHOOK_INPUT
  DELETE_API_KEY: DOCK_CERTS_DELETE_API_KEY_INPUT
  DELETE_CREDENTIAL: DOCK_CERTS_DELETE_CREDENTIAL_INPUT
  DELETE_TAG: DOCK_CERTS_DELETE_TAG_INPUT
  DELETE_WEBHOOK: DOCK_CERTS_DELETE_WEBHOOK_INPUT
  RETRIEVE_API_KEY: DOCK_CERTS_RETRIEVE_API_KEY_INPUT
  RETRIEVE_API_KEYS: DOCK_CERTS_RETRIEVE_API_KEYS_INPUT
  RETRIEVE_CREDENTIAL: DOCK_CERTS_RETRIEVE_CREDENTIAL_INPUT
  RETRIEVE_CREDENTIALS: DOCK_CERTS_RETRIEVE_CREDENTIALS_INPUT
  RETRIEVE_DID: DOCK_CERTS_RETRIEVE_DID_INPUT
  RETRIEVE_REGISTRIES: DOCK_CERTS_RETRIEVE_REGISTRIES_INPUT
  RETRIEVE_WEBHOOK: DOCK_CERTS_RETRIEVE_WEBHOOK_INPUT
  RETRIEVE_WEBHOOKS: DOCK_CERTS_RETRIEVE_WEBHOOKS_INPUT
  VERIFY: DOCK_CERTS_VERIFY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOCK_CERTS".
 */
export type DOCK_CERTS_TOOL_OUTPUTS = {
  CREATE_API_KEY: DOCK_CERTS_CREATE_API_KEY_OUTPUT
  CREATE_WEBHOOK: DOCK_CERTS_CREATE_WEBHOOK_OUTPUT
  DELETE_API_KEY: DOCK_CERTS_DELETE_API_KEY_OUTPUT
  DELETE_CREDENTIAL: DOCK_CERTS_DELETE_CREDENTIAL_OUTPUT
  DELETE_TAG: DOCK_CERTS_DELETE_TAG_OUTPUT
  DELETE_WEBHOOK: DOCK_CERTS_DELETE_WEBHOOK_OUTPUT
  RETRIEVE_API_KEY: DOCK_CERTS_RETRIEVE_API_KEY_OUTPUT
  RETRIEVE_API_KEYS: DOCK_CERTS_RETRIEVE_API_KEYS_OUTPUT
  RETRIEVE_CREDENTIAL: DOCK_CERTS_RETRIEVE_CREDENTIAL_OUTPUT
  RETRIEVE_CREDENTIALS: DOCK_CERTS_RETRIEVE_CREDENTIALS_OUTPUT
  RETRIEVE_DID: DOCK_CERTS_RETRIEVE_DID_OUTPUT
  RETRIEVE_REGISTRIES: DOCK_CERTS_RETRIEVE_REGISTRIES_OUTPUT
  RETRIEVE_WEBHOOK: DOCK_CERTS_RETRIEVE_WEBHOOK_OUTPUT
  RETRIEVE_WEBHOOKS: DOCK_CERTS_RETRIEVE_WEBHOOKS_OUTPUT
  VERIFY: DOCK_CERTS_VERIFY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOCK_CERTS toolkit.
 */
export const DOCK_CERTS = {
  slug: "dock_certs",
  tools: {
    /**
     * Tool to create an API key. Use when you need to generate a new API key with optional alias and IP allowlist.
     */
    CREATE_API_KEY: "DOCK_CERTS_CREATE_API_KEY",
    /**
     * Tool to create a webhook endpoint. Use when you need Dock.io to push event notifications to your service.
     */
    CREATE_WEBHOOK: "DOCK_CERTS_CREATE_WEBHOOK",
    /**
     * Tool to delete a specific API key. Use after confirming the API key's ID via list_api_keys.
     */
    DELETE_API_KEY: "DOCK_CERTS_DELETE_API_KEY",
    /**
     * Tool to delete a verifiable credential. Use after confirming the credential is no longer needed.
     */
    DELETE_CREDENTIAL: "DOCK_CERTS_DELETE_CREDENTIAL",
    /**
     * Tool to delete a specific tag. Use when you have a tag ID and want to permanently remove it.
     */
    DELETE_TAG: "DOCK_CERTS_DELETE_TAG",
    /**
     * Tool to delete a specific webhook. Use after confirming the webhook's ID via list_webhooks.
     */
    DELETE_WEBHOOK: "DOCK_CERTS_DELETE_WEBHOOK",
    /**
     * Tool to retrieve details of an API key. Tries single-key endpoint first, then falls back to listing and filtering.
     */
    RETRIEVE_API_KEY: "DOCK_CERTS_RETRIEVE_API_KEY",
    /**
     * Tool to list all API keys. Use when you need to retrieve all API keys for the authenticated account.
     */
    RETRIEVE_API_KEYS: "DOCK_CERTS_RETRIEVE_API_KEYS",
    /**
     * Tool to retrieve a verifiable credential by its unique ID. If a password was used to persist it, include the same password to decrypt and return the full credential. Otherwise, only metadata is returned.
     */
    RETRIEVE_CREDENTIAL: "DOCK_CERTS_RETRIEVE_CREDENTIAL",
    /**
     * Tool to retrieve a list of credential metadata. Use when you need to collect credential details with optional pagination or filtering after authentication.
     */
    RETRIEVE_CREDENTIALS: "DOCK_CERTS_RETRIEVE_CREDENTIALS",
    /**
     * Tool to retrieve a DID Document by its DID. Use after you have a valid DID to resolve and inspect its DID Document.
     */
    RETRIEVE_DID: "DOCK_CERTS_RETRIEVE_DID",
    /**
     * Tool to retrieve a list of revocation registries. Use when you need to list all registries created by the authenticated account with optional pagination and filtering.
     */
    RETRIEVE_REGISTRIES: "DOCK_CERTS_RETRIEVE_REGISTRIES",
    /**
     * Tool to retrieve a specific webhook's details. Use after confirming you have a valid webhook ID.
     */
    RETRIEVE_WEBHOOK: "DOCK_CERTS_RETRIEVE_WEBHOOK",
    /**
     * Tool to list configured webhooks. Use when you need to retrieve all webhook endpoints configured for your account.
     */
    RETRIEVE_WEBHOOKS: "DOCK_CERTS_RETRIEVE_WEBHOOKS",
    /**
     * Tool to verify a verifiable credential or presentation. Use after receiving a credential or presentation from an issuer.
     */
    VERIFY: "DOCK_CERTS_VERIFY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOCK_CERTS".
 */
export type DOCK_CERTS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOCK_CERTS".
 */
export type DOCK_CERTS_TRIGGER_EVENTS = {}
