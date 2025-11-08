// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SUPABASE's SUPABASE_ALPHA_CREATES_A_NEW_API_KEY_FOR_THE_PROJECT tool input.
 */
type SUPABASE_ALPHA_CREATES_A_NEW_API_KEY_FOR_THE_PROJECT_INPUT = {
  /**
   * Description
   * @description Optional human-readable description for the API key.
   */
  description?: string;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
  /**
   * Type
   * @description Specifies the type of API key: 'publishable' for client-side use or 'secret' for server-side operations.
   * @enum {string}
   */
  type?: "publishable" | "secret";
};

/**
 * Type of SUPABASE's SUPABASE_ALPHA_CREATES_A_NEW_API_KEY_FOR_THE_PROJECT tool output.
 */
type SUPABASE_ALPHA_CREATES_A_NEW_API_KEY_FOR_THE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created API key.
   */
  data?: {
      /** Api Key */
      api_key: string;
      /**
       * Description
       * @default null
       */
      description: string | null;
      /**
       * Hash
       * @default null
       */
      hash: string | null;
      /**
       * Id
       * @default null
       */
      id: string | null;
      /**
       * Inserted At
       * @default null
       */
      inserted_at: string | null;
      /** Name */
      name: string;
      /**
       * Prefix
       * @default null
       */
      prefix: string | null;
      /**
       * SecretJwtTemplate
       * @default null
       */
      secret_jwt_template: {
          /** Role */
          role: string;
      } | null;
      /**
       * Type
       * @default null
       */
      type: {
          [key: string]: unknown;
      } | null;
      /**
       * Updated At
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
 * Type of SUPABASE's SUPABASE_ALPHA_DELETES_AN_API_KEY_FOR_THE_PROJECT tool input.
 */
type SUPABASE_ALPHA_DELETES_AN_API_KEY_FOR_THE_PROJECT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the API key that needs to be deleted from the project.
   */
  id?: string;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project from which the API key is to be deleted.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_ALPHA_DELETES_AN_API_KEY_FOR_THE_PROJECT tool output.
 */
type SUPABASE_ALPHA_DELETES_AN_API_KEY_FOR_THE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the API key that was successfully deleted.
   */
  data?: {
      /**
       * Api Key
       * @description The actual API key string that was deleted, returned for confirmation.
       */
      api_key: string;
      /**
       * Description
       * @description User-provided description for the API key.
       * @default null
       */
      description: string | null;
      /**
       * Hash
       * @description Hash of the API key, potentially used for verification or auditing purposes.
       * @default null
       */
      hash: string | null;
      /**
       * Id
       * @description The unique identifier of the deleted API key.
       * @default null
       */
      id: string | null;
      /**
       * Inserted At
       * @description The timestamp (ISO 8601 format) indicating when the API key was originally created.
       * @default null
       */
      inserted_at: string | null;
      /**
       * Name
       * @description The user-defined name of the API key that was deleted.
       */
      name: string;
      /**
       * Prefix
       * @description The prefix part of the API key, if applicable (e.g., 'sbp_').
       * @default null
       */
      prefix: string | null;
      /**
       * SecretJwtTemplate
       * @description Optional configuration for a JWT template if the API key was associated with a secret that uses JWTs.
       * @default null
       */
      secret_jwt_template: {
          /**
           * Role
           * @description The specific role assigned within the JWT template associated with the API key's secret.
           */
          role: string;
      } | null;
      /**
       * Type
       * @description Dictionary containing type-specific information or metadata related to the API key.
       * @default null
       */
      type: {
          [key: string]: unknown;
      } | null;
      /**
       * Updated At
       * @description The timestamp (ISO 8601 format) indicating when the API key was last updated before deletion.
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
 * Type of SUPABASE's SUPABASE_ALPHA_GET_A_THIRD_PARTY_INTEGRATION tool input.
 */
type SUPABASE_ALPHA_GET_A_THIRD_PARTY_INTEGRATION_INPUT = {
  /**
   * Ref
   * @description The unique identifier (reference) of the Supabase project.
   */
  ref?: string;
  /**
   * Tpa Id
   * @description The unique identifier of the specific third-party authentication provider configuration to retrieve.
   */
  tpa_id?: string;
};

/**
 * Type of SUPABASE's SUPABASE_ALPHA_GET_A_THIRD_PARTY_INTEGRATION tool output.
 */
type SUPABASE_ALPHA_GET_A_THIRD_PARTY_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed configuration of the specified third-party authentication provider.
   */
  data?: {
      /**
       * Custom Jwks
       * @description Optional custom JSON Web Key Set (JWKS) as a JSON object. If provided, this JWKS is used instead of fetching from `jwks_url`.
       * @default null
       */
      custom_jwks: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The unique identifier of this third-party authentication provider configuration.
       */
      id: string;
      /**
       * Inserted At
       * @description Timestamp (ISO 8601 format) indicating when this third-party provider configuration was created.
       */
      inserted_at: string;
      /**
       * Jwks Url
       * @description Optional URL to the provider's JSON Web Key Set (JWKS) for fetching public keys to verify ID tokens.
       * @default null
       */
      jwks_url: string | null;
      /**
       * Oidc Issuer Url
       * @description Optional OIDC issuer URL for provider configuration discovery.
       * @default null
       */
      oidc_issuer_url: string | null;
      /**
       * Resolved At
       * @description Optional timestamp (ISO 8601 format) indicating when the `resolved_jwks` was last updated or fetched.
       * @default null
       */
      resolved_at: string | null;
      /**
       * Resolved Jwks
       * @description The JSON Web Key Set (JWKS) currently in use for token verification, as a JSON object. This could be the content from `jwks_url` or `custom_jwks`.
       * @default null
       */
      resolved_jwks: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description The type or name of the third-party authentication provider (e.g., 'google', 'apple', 'azure').
       */
      type: string;
      /**
       * Updated At
       * @description Timestamp (ISO 8601 format) indicating when this third-party provider configuration was last updated.
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
 * Type of SUPABASE's SUPABASE_ALPHA_LISTS_ALL_THIRD_PARTY_AUTH_INTEGRATIONS tool input.
 */
type SUPABASE_ALPHA_LISTS_ALL_THIRD_PARTY_AUTH_INTEGRATIONS_INPUT = {
  /**
   * Ref
   * @description The unique identifier of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_ALPHA_LISTS_ALL_THIRD_PARTY_AUTH_INTEGRATIONS tool output.
 */
type SUPABASE_ALPHA_LISTS_ALL_THIRD_PARTY_AUTH_INTEGRATIONS_OUTPUT = {
  /**
   * Data
   * @description A list of third-party authentication integration configurations for the project.
   */
  data?: {
      /**
       * Custom Jwks
       * @description A custom JSON Web Key Set (JWKS) provided by the user, if applicable.
       * @default null
       */
      custom_jwks: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The unique identifier of the third-party authentication integration.
       */
      id: string;
      /**
       * Inserted At
       * @description Timestamp of when the third-party auth integration was created.
       */
      inserted_at: string;
      /**
       * Jwks Url
       * @description The URL to fetch the JSON Web Key Set (JWKS) for verifying tokens, if applicable.
       * @default null
       */
      jwks_url: string | null;
      /**
       * Oidc Issuer Url
       * @description The OIDC issuer URL for the provider, if applicable.
       * @default null
       */
      oidc_issuer_url: string | null;
      /**
       * Resolved At
       * @description The timestamp when the JWKS was last resolved or fetched.
       * @default null
       */
      resolved_at: string | null;
      /**
       * Resolved Jwks
       * @description The resolved JSON Web Key Set (JWKS) used for token verification, which could be fetched from `jwks_url` or be the `custom_jwks`.
       * @default null
       */
      resolved_jwks: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description The type of the third-party authentication provider.
       */
      type: string;
      /**
       * Updated At
       * @description Timestamp of when the third-party auth integration was last updated.
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
 * Type of SUPABASE's SUPABASE_ALPHA_REMOVES_A_THIRD_PARTY_AUTH_INTEGRATION tool input.
 */
type SUPABASE_ALPHA_REMOVES_A_THIRD_PARTY_AUTH_INTEGRATION_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
  /**
   * Tpa Id
   * @description The unique identifier (ID) of the third-party authentication provider configuration to be removed.
   */
  tpa_id?: string;
};

/**
 * Type of SUPABASE's SUPABASE_ALPHA_REMOVES_A_THIRD_PARTY_AUTH_INTEGRATION tool output.
 */
type SUPABASE_ALPHA_REMOVES_A_THIRD_PARTY_AUTH_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Details of the third-party authentication provider configuration that was removed.
   */
  data?: {
      /**
       * Custom Jwks
       * @default null
       */
      custom_jwks: {
          [key: string]: unknown;
      } | null;
      /** Id */
      id: string;
      /** Inserted At */
      inserted_at: string;
      /**
       * Jwks Url
       * @default null
       */
      jwks_url: string | null;
      /**
       * Oidc Issuer Url
       * @default null
       */
      oidc_issuer_url: string | null;
      /**
       * Resolved At
       * @default null
       */
      resolved_at: string | null;
      /**
       * Resolved Jwks
       * @default null
       */
      resolved_jwks: {
          [key: string]: unknown;
      } | null;
      /** Type */
      type: string;
      /** Updated At */
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
 * Type of SUPABASE's SUPABASE_ALPHA_UPDATES_AN_API_KEY_FOR_THE_PROJECT tool input.
 */
type SUPABASE_ALPHA_UPDATES_AN_API_KEY_FOR_THE_PROJECT_INPUT = {
  /**
   * Description
   * @description Optional new description for the API key.
   */
  description?: string;
  /**
   * Id
   * @description The unique identifier of the API key that needs to be updated.
   */
  id?: string;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project to which the API key belongs.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_ALPHA_UPDATES_AN_API_KEY_FOR_THE_PROJECT tool output.
 */
type SUPABASE_ALPHA_UPDATES_AN_API_KEY_FOR_THE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description An object containing the full details of the API key after the update has been applied.
   */
  data?: {
      /**
       * Api Key
       * @description The actual API key string. This value is sensitive.
       */
      api_key: string;
      /**
       * Description
       * @description The description associated with the API key, if set.
       * @default null
       */
      description: string | null;
      /**
       * Hash
       * @description A Hashed representation of the API key, if available. Used for internal verification.
       * @default null
       */
      hash: string | null;
      /**
       * Id
       * @description The unique identifier of the API key.
       * @default null
       */
      id: string | null;
      /**
       * Inserted At
       * @description The ISO 8601 timestamp indicating when the API key was originally created, if available.
       * @default null
       */
      inserted_at: string | null;
      /**
       * Name
       * @description The name of the API key (e.g., 'service_role key', 'anon key').
       */
      name: string;
      /**
       * Prefix
       * @description The prefix of the API key (e.g., 'sbp_'), if applicable. Useful for quick identification.
       * @default null
       */
      prefix: string | null;
      /**
       * SecretJwtTemplate
       * @description Defines the structure for JWT template configuration, primarily specifying a role.
       * @default null
       */
      secret_jwt_template: {
          /**
           * Role
           * @description The role to be assigned to the JWT generated using this template, defining its permissions (e.g., 'service_role', 'authenticated').
           */
          role: string;
      } | null;
      /**
       * Type
       * @description An optional dictionary that may contain type information or other metadata about the API key.
       * @default null
       */
      type: {
          [key: string]: unknown;
      } | null;
      /**
       * Updated At
       * @description The ISO 8601 timestamp indicating when the API key was last modified, if available.
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
 * Type of SUPABASE's SUPABASE_BETA_ACTIVATES_A_CUSTOM_HOSTNAME_FOR_A_PROJECT tool input.
 */
type SUPABASE_BETA_ACTIVATES_A_CUSTOM_HOSTNAME_FOR_A_PROJECT_INPUT = {
  /**
   * Ref
   * @description The unique identifier (project ID) of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_ACTIVATES_A_CUSTOM_HOSTNAME_FOR_A_PROJECT tool output.
 */
type SUPABASE_BETA_ACTIVATES_A_CUSTOM_HOSTNAME_FOR_A_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Detailed response data for the custom hostname activation.
   */
  data?: {
      /**
       * Custom Hostname
       * @description Custom hostname targeted for activation.
       */
      custom_hostname: string;
      /**
       * Data
       * @description Detailed results of the activation attempt.
       */
      data: {
          /**
           * Errors
           * @description Errors during the activation process; each error is a dictionary.
           */
          errors: {
              [key: string]: unknown;
          }[];
          /**
           * Messages
           * @description Informational messages regarding the activation process; each message is a dictionary.
           */
          messages: {
              [key: string]: unknown;
          }[];
          /**
           * Result
           * @description Detailed outcome of the custom hostname activation.
           */
          result: {
              /**
               * Custom Origin Server
               * @description Address of the custom origin server Supabase will proxy requests to.
               */
              custom_origin_server: string;
              /**
               * Hostname
               * @description Custom hostname that has been activated.
               */
              hostname: string;
              /**
               * Id
               * @description Unique identifier of the custom hostname configuration.
               */
              id: string;
              /**
               * Ownership Verification
               * @description DNS record details for domain ownership verification.
               */
              ownership_verification: {
                  /**
                   * Name
                   * @description Name of the DNS record for ownership verification.
                   */
                  name: string;
                  /**
                   * Type
                   * @description Type of DNS record for ownership verification.
                   */
                  type: string;
                  /**
                   * Value
                   * @description Value of the DNS record for ownership verification.
                   */
                  value: string;
              };
              /**
               * Ssl
               * @description SSL certificate configuration and status.
               */
              ssl: {
                  /**
                   * Status
                   * @description Current status of the SSL certificate.
                   */
                  status: string;
                  /**
                   * Validation Errors
                   * @description Errors encountered during SSL certificate validation, if any.
                   * @default null
                   */
                  validation_errors: {
                      /**
                       * Message
                       * @description Describes a specific validation error.
                       */
                      message: string;
                  }[] | null;
                  /**
                   * Validation Records
                   * @description DNS records for SSL certificate validation.
                   */
                  validation_records: {
                      /**
                       * Txt Name
                       * @description Name of the TXT record for domain validation.
                       */
                      txt_name: string;
                      /**
                       * Txt Value
                       * @description Value of the TXT record for domain validation.
                       */
                      txt_value: string;
                  }[];
              };
              /**
               * Status
               * @description Overall status of the custom hostname.
               */
              status: string;
              /**
               * Verification Errors
               * @description Errors encountered during custom hostname verification, if any.
               * @default null
               */
              verification_errors: string[] | null;
          };
          /**
           * Success
           * @description Whether the custom hostname activation was successful.
           */
          success: boolean;
      };
      /**
       * Status
       * @description Overall activation status, indicating its current stage.
       * @enum {string}
       */
      status: "1_not_started" | "2_initiated" | "3_challenge_verified" | "4_origin_setup_completed" | "5_services_reconfigured";
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
 * Type of SUPABASE's SUPABASE_BETA_ACTIVATES_A_VANITY_SUBDOMAIN_FOR_A_PROJECT tool input.
 */
type SUPABASE_BETA_ACTIVATES_A_VANITY_SUBDOMAIN_FOR_A_PROJECT_INPUT = {
  /**
   * Ref
   * @description Unique reference ID of the Supabase project.
   */
  ref?: string;
  /**
   * Vanity Subdomain
   * @description Vanity subdomain to activate; you must be able to configure its DNS records.
   */
  vanity_subdomain?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_ACTIVATES_A_VANITY_SUBDOMAIN_FOR_A_PROJECT tool output.
 */
type SUPABASE_BETA_ACTIVATES_A_VANITY_SUBDOMAIN_FOR_A_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Details of the activated vanity subdomain.
   */
  data?: {
      /**
       * Custom Domain
       * @description Activated fully qualified vanity subdomain.
       */
      custom_domain: string;
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
 * Type of SUPABASE's SUPABASE_BETA_AUTHORIZE_USER_THROUGH_OAUTH tool input.
 */
type SUPABASE_BETA_AUTHORIZE_USER_THROUGH_OAUTH_INPUT = {
  /**
   * Client Id
   * @description Unique identifier for the OAuth client application, registered with Supabase.
   */
  client_id?: string;
  /**
   * Code Challenge
   * @description PKCE code challenge to secure authorization code grants, typically a BASE64URL-encoded SHA256 hash of `code_verifier`.
   */
  code_challenge?: string;
  /**
   * Code Challenge Method
   * @description Method to derive `code_challenge` for PKCE: 'S256'/'sha256' for SHA256 hashing; 'plain' sends verifier as is (not for production if hashing possible). Required if `code_challenge` is provided.
   * @enum {string}
   */
  code_challenge_method?: "S256" | "plain" | "sha256";
  /**
   * Redirect Uri
   * @description URI where Supabase redirects the user after authorization; must exactly match a registered URI for the client application.
   */
  redirect_uri?: string;
  /**
   * Response Mode
   * @description Specifies how authorization response parameters are returned (e.g., 'query', 'fragment', 'form_post'). Default is determined by `response_type` if not specified.
   */
  response_mode?: string;
  /**
   * Response Type
   * @description Specifies the authorization flow type: 'code' for Authorization Code Grant; 'token' for Implicit Grant (access token); 'id_token token' for OIDC hybrid flows (ID and access tokens).
   * @enum {string}
   */
  response_type?: "code" | "id_token token" | "token";
  /**
   * Scope
   * @description Space-separated list of OAuth scopes for requested permissions on user resources (e.g., 'email profile', 'storage.objects.read').
   */
  scope?: string;
  /**
   * State
   * @description Opaque value to maintain state between request and callback; returned unmodified to aid CSRF prevention.
   */
  state?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_AUTHORIZE_USER_THROUGH_OAUTH tool output.
 */
type SUPABASE_BETA_AUTHORIZE_USER_THROUGH_OAUTH_OUTPUT = {
  /**
   * Data
   * @description Dictionary with parameters from Supabase OAuth endpoint, may include a redirect URL or other flow/response_mode dependent parameters.
   */
  data?: {
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
 * Type of SUPABASE's SUPABASE_BETA_CHECKS_VANITY_SUBDOMAIN_AVAILABILITY tool input.
 */
type SUPABASE_BETA_CHECKS_VANITY_SUBDOMAIN_AVAILABILITY_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
  /**
   * Vanity Subdomain
   * @description The desired vanity subdomain to check for availability (e.g., 'my-app'). Must be 1-63 alphanumeric characters or hyphens; cannot start or end with a hyphen.
   */
  vanity_subdomain?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_CHECKS_VANITY_SUBDOMAIN_AVAILABILITY tool output.
 */
type SUPABASE_BETA_CHECKS_VANITY_SUBDOMAIN_AVAILABILITY_OUTPUT = {
  /**
   * Data
   * @description Indicates if the vanity subdomain is available (`available: true`) or not (`available: false`).
   */
  data?: {
      /** Available */
      available: boolean;
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
 * Type of SUPABASE's SUPABASE_BETA_ENABLES_DATABASE_WEBHOOKS_ON_THE_PROJECT tool input.
 */
type SUPABASE_BETA_ENABLES_DATABASE_WEBHOOKS_ON_THE_PROJECT_INPUT = {
  /**
   * Ref
   * @description The unique identifier for the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_ENABLES_DATABASE_WEBHOOKS_ON_THE_PROJECT tool output.
 */
type SUPABASE_BETA_ENABLES_DATABASE_WEBHOOKS_ON_THE_PROJECT_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SUPABASE's SUPABASE_BETA_GETS_CURRENT_VANITY_SUBDOMAIN_CONFIG tool input.
 */
type SUPABASE_BETA_GETS_CURRENT_VANITY_SUBDOMAIN_CONFIG_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project for which to fetch the vanity subdomain configuration.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_GETS_CURRENT_VANITY_SUBDOMAIN_CONFIG tool output.
 */
type SUPABASE_BETA_GETS_CURRENT_VANITY_SUBDOMAIN_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Details of the project's current vanity subdomain configuration. This includes the status of the vanity subdomain (e.g., 'active', 'not-used', 'custom-domain-used') and the custom domain name, if one is configured.
   */
  data?: {
      /**
       * Custom Domain
       * @default null
       */
      custom_domain: string | null;
      /**
       * Status
       * @enum {string}
       */
      status: "not-used" | "custom-domain-used" | "active";
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
 * Type of SUPABASE's SUPABASE_BETA_GETS_PROJECT_S_CUSTOM_HOSTNAME_CONFIG tool input.
 */
type SUPABASE_BETA_GETS_PROJECT_S_CUSTOM_HOSTNAME_CONFIG_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project. This ID can typically be found in your project's dashboard URL.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_GETS_PROJECT_S_CUSTOM_HOSTNAME_CONFIG tool output.
 */
type SUPABASE_BETA_GETS_PROJECT_S_CUSTOM_HOSTNAME_CONFIG_OUTPUT = {
  /**
   * Data
   * @description The detailed custom hostname configuration for the specified Supabase project.
   */
  data?: {
      /** Custom Hostname */
      custom_hostname: string;
      /** Data */
      data: {
          /** Errors */
          errors: {
              [key: string]: unknown;
          }[];
          /** Messages */
          messages: {
              [key: string]: unknown;
          }[];
          /** Result */
          result: {
              /** Custom Origin Server */
              custom_origin_server: string;
              /** Hostname */
              hostname: string;
              /** Id */
              id: string;
              /** Ownership Verification */
              ownership_verification: {
                  /** Name */
                  name: string;
                  /** Type */
                  type: string;
                  /** Value */
                  value: string;
              };
              /** Ssl */
              ssl: {
                  /** Status */
                  status: string;
                  /**
                   * Validation Errors
                   * @default null
                   */
                  validation_errors: {
                      /** Message */
                      message: string;
                  }[] | null;
                  /** Validation Records */
                  validation_records: {
                      /** Txt Name */
                      txt_name: string;
                      /** Txt Value */
                      txt_value: string;
                  }[];
              };
              /** Status */
              status: string;
              /**
               * Verification Errors
               * @default null
               */
              verification_errors: string[] | null;
          };
          /** Success */
          success: boolean;
      };
      /**
       * Status
       * @enum {string}
       */
      status: "1_not_started" | "2_initiated" | "3_challenge_verified" | "4_origin_setup_completed" | "5_services_reconfigured";
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
 * Type of SUPABASE's SUPABASE_BETA_GETS_PROJECT_S_NETWORK_BANS tool input.
 */
type SUPABASE_BETA_GETS_PROJECT_S_NETWORK_BANS_INPUT = {
  /**
   * Ref
   * @description The unique string identifier for the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_GETS_PROJECT_S_NETWORK_BANS tool output.
 */
type SUPABASE_BETA_GETS_PROJECT_S_NETWORK_BANS_OUTPUT = {
  /**
   * Data
   * @description Contains the list of banned IPv4 addresses for the specified project.
   */
  data?: {
      /**
       * Banned Ipv4 Addresses
       * @description A list of IPv4 addresses that are banned from accessing the project's resources.
       */
      banned_ipv4_addresses: string[];
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
 * Type of SUPABASE's SUPABASE_BETA_GETS_PROJECT_S_NETWORK_RESTRICTIONS tool input.
 */
type SUPABASE_BETA_GETS_PROJECT_S_NETWORK_RESTRICTIONS_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project for which to retrieve network restrictions.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_GETS_PROJECT_S_NETWORK_RESTRICTIONS tool output.
 */
type SUPABASE_BETA_GETS_PROJECT_S_NETWORK_RESTRICTIONS_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed network restriction configuration for the project.
   */
  data?: {
      /**
       * Config
       * @description The current, active network restriction configuration for the project, detailing allowed IP ranges.
       */
      config: {
          /**
           * Db Allowed Cidrs
           * @description Allowed IPv4 CIDR notations for database access. Empty or unspecified implies no specific IPv4 restrictions.
           * @default null
           */
          dbAllowedCidrs: string[] | null;
          /**
           * Db Allowed Cidrs V6
           * @description Allowed IPv6 CIDR notations for database access. Empty or unspecified implies no specific IPv6 restrictions.
           * @default null
           */
          dbAllowedCidrsV6: string[] | null;
      };
      /**
       * Entitlement
       * @description Indicates if the project is entitled (`allowed` or `disallowed`) to use network restrictions, based on its subscription or plan.
       * @enum {string}
       */
      entitlement: "disallowed" | "allowed";
      /**
       * OldConfig
       * @description Holds a record of a previously active network restriction configuration, often used for comparison or auditing past settings.
       * @default null
       */
      old_config: {
          /**
           * Db Allowed Cidrs
           * @description Previously allowed IPv4 CIDR notations for database access.
           * @default null
           */
          dbAllowedCidrs: string[] | null;
          /**
           * Db Allowed Cidrs V6
           * @description Previously allowed IPv6 CIDR notations for database access.
           * @default null
           */
          dbAllowedCidrsV6: string[] | null;
      } | null;
      /**
       * Status
       * @description Operational status of network restrictions: `stored` (config saved but not enforced) or `applied` (config active and enforced).
       * @enum {string}
       */
      status: "stored" | "applied";
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
 * Type of SUPABASE's SUPABASE_BETA_GETS_PROJECT_S_PGSODIUM_CONFIG tool input.
 */
type SUPABASE_BETA_GETS_PROJECT_S_PGSODIUM_CONFIG_INPUT = {
  /**
   * Ref
   * @description The unique identifier of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_GETS_PROJECT_S_PGSODIUM_CONFIG tool output.
 */
type SUPABASE_BETA_GETS_PROJECT_S_PGSODIUM_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Contains the PGSodium configuration for the project, including the root key.
   */
  data?: {
      /**
       * Root Key
       * @description The project's master encryption key managed by PGSodium, used for securing secrets and various encryption features.
       */
      root_key: string;
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
 * Type of SUPABASE's SUPABASE_BETA_GET_PROJECT_S_SSL_ENFORCEMENT_CONFIGURATION tool input.
 */
type SUPABASE_BETA_GET_PROJECT_S_SSL_ENFORCEMENT_CONFIGURATION_INPUT = {
  /**
   * Ref
   * @description The unique identifier of the Supabase project. This can typically be found in your project's dashboard URL (e.g., `https://supabase.com/dashboard/project/<project-ref>`).
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_GET_PROJECT_S_SSL_ENFORCEMENT_CONFIGURATION tool output.
 */
type SUPABASE_BETA_GET_PROJECT_S_SSL_ENFORCEMENT_CONFIGURATION_OUTPUT = {
  /**
   * Data
   * @description Contains the SSL enforcement configuration details for the project, including whether SSL is enforced for the database and if the last configuration attempt was successful.
   */
  data?: {
      /**
       * Applied Successfully
       * @description Indicates whether the SSL configuration was applied successfully.
       */
      appliedSuccessfully: boolean;
      /**
       * Current Config
       * @description The current SSL enforcement settings.
       */
      currentConfig: {
          /**
           * Database
           * @description Indicates if SSL is enforced for database connections.
           */
          database: boolean;
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
 * Type of SUPABASE's SUPABASE_BETA_REMOVE_A_READ_REPLICA tool input.
 */
type SUPABASE_BETA_REMOVE_A_READ_REPLICA_INPUT = {
  /**
   * Database Identifier
   * @description The unique identifier of the read replica database to be removed.
   */
  database_identifier?: string;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project from which the read replica will be removed.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_REMOVE_A_READ_REPLICA tool output.
 */
type SUPABASE_BETA_REMOVE_A_READ_REPLICA_OUTPUT = {
  /**
   * Data
   * @description A dictionary typically containing a confirmation message that the read replica removal process has been initiated.
   */
  data?: {
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
 * Type of SUPABASE's SUPABASE_BETA_REMOVE_NETWORK_BANS tool input.
 */
type SUPABASE_BETA_REMOVE_NETWORK_BANS_INPUT = {
  /**
   * Ipv4 Addresses
   * @description A list of IPv4 addresses to be removed from the project's network ban list.
   */
  ipv4_addresses?: string[];
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_REMOVE_NETWORK_BANS tool output.
 */
type SUPABASE_BETA_REMOVE_NETWORK_BANS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing data related to the outcome of the unban operation, typically a success message or status.
   */
  data?: {
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
 * Type of SUPABASE's SUPABASE_BETA_RUN_SQL_QUERY tool input.
 */
type SUPABASE_BETA_RUN_SQL_QUERY_INPUT = {
  /**
   * Query
   * @description The SQL query to be executed against the project's database.
   */
  query?: string;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_RUN_SQL_QUERY tool output.
 */
type SUPABASE_BETA_RUN_SQL_QUERY_OUTPUT = {
  /**
   * Data
   * @description Query results, whose structure varies: typically an array of objects for `SELECT`, or status/counts for `INSERT`/`UPDATE`/`DELETE`.
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
 * Type of SUPABASE's SUPABASE_BETA_SET_UP_A_READ_REPLICA tool input.
 */
type SUPABASE_BETA_SET_UP_A_READ_REPLICA_INPUT = {
  /**
   * Read Replica Region
   * @description AWS region for the read replica; selecting one closer to users improves performance and reduces latency.
   * @enum {string}
   */
  read_replica_region?: "ap-east-1" | "ap-northeast-1" | "ap-northeast-2" | "ap-south-1" | "ap-southeast-1" | "ap-southeast-2" | "ca-central-1" | "eu-central-1" | "eu-central-2" | "eu-north-1" | "eu-west-1" | "eu-west-2" | "eu-west-3" | "sa-east-1" | "us-east-1" | "us-east-2" | "us-west-1" | "us-west-2";
  /**
   * Ref
   * @description Unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_SET_UP_A_READ_REPLICA tool output.
 */
type SUPABASE_BETA_SET_UP_A_READ_REPLICA_OUTPUT = {
  /**
   * Data
   * @description Information about the read replica setup, including status updates or details of the replica.
   */
  data?: {
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
 * Type of SUPABASE's SUPABASE_BETA_UPDATES_PROJECT_S_NETWORK_RESTRICTIONS tool input.
 */
type SUPABASE_BETA_UPDATES_PROJECT_S_NETWORK_RESTRICTIONS_INPUT = {
  /**
   * Db Allowed Cidrs
   * @description List of IPv4 addresses or CIDR notations for database access; `[]` removes all IPv4 restrictions, `null`/omitted leaves current IPv4 restrictions unchanged.
   */
  dbAllowedCidrs?: string[];
  /**
   * Db Allowed Cidrs V6
   * @description List of IPv6 addresses or CIDR notations for database access; `[]` removes all IPv6 restrictions, `null`/omitted leaves current IPv6 restrictions unchanged.
   */
  dbAllowedCidrsV6?: string[];
  /**
   * Ref
   * @description Unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_UPDATES_PROJECT_S_NETWORK_RESTRICTIONS tool output.
 */
type SUPABASE_BETA_UPDATES_PROJECT_S_NETWORK_RESTRICTIONS_OUTPUT = {
  /**
   * Data
   * @description Applied network restrictions details: entitlement, current/previous configurations, and status.
   */
  data?: {
      /**
       * Config
       * @description Network restriction configuration with allowed IPv4 and IPv6 CIDR ranges.
       */
      config: {
          /**
           * Db Allowed Cidrs
           * @default null
           */
          dbAllowedCidrs: string[] | null;
          /**
           * Db Allowed Cidrs V6
           * @default null
           */
          dbAllowedCidrsV6: string[] | null;
      };
      /**
       * Entitlement
       * @description Project's entitlement status for the network restrictions feature.
       * @enum {string}
       */
      entitlement: "disallowed" | "allowed";
      /**
       * OldConfig
       * @description Previous network restriction configuration before an update, if any.
       * @default null
       */
      old_config: {
          /**
           * Db Allowed Cidrs
           * @default null
           */
          dbAllowedCidrs: string[] | null;
          /**
           * Db Allowed Cidrs V6
           * @default null
           */
          dbAllowedCidrsV6: string[] | null;
      } | null;
      /**
       * Status
       * @description Application status of network restrictions (e.g., 'stored', 'applied').
       * @enum {string}
       */
      status: "stored" | "applied";
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
 * Type of SUPABASE's SUPABASE_BETA_UPGRADES_THE_PROJECT_S_POSTGRES_VERSION tool input.
 */
type SUPABASE_BETA_UPGRADES_THE_PROJECT_S_POSTGRES_VERSION_INPUT = {
  /**
   * Ref
   * @description The project's unique reference ID.
   */
  ref?: string;
  /**
   * Release Channel
   * @description Release channel for selecting the PostgreSQL version.
   * @enum {string}
   */
  release_channel?: "alpha" | "beta" | "ga" | "internal" | "withdrawn";
  /**
   * Target Version
   * @description Target PostgreSQL version (e.g., '15.1.0.123'); must be available in the specified `release_channel`.
   */
  target_version?: string;
};

/**
 * Type of SUPABASE's SUPABASE_BETA_UPGRADES_THE_PROJECT_S_POSTGRES_VERSION tool output.
 */
type SUPABASE_BETA_UPGRADES_THE_PROJECT_S_POSTGRES_VERSION_OUTPUT = {
  /**
   * Data
   * @description Contains data for the initiated PostgreSQL upgrade, including the `tracking_id`.
   */
  data?: {
      /** Tracking Id */
      tracking_id: string;
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
 * Type of SUPABASE's SUPABASE_CONFIG_PGSODIUM_UPDATE_WITH_ROOT_KEY_WARNING tool input.
 */
type SUPABASE_CONFIG_PGSODIUM_UPDATE_WITH_ROOT_KEY_WARNING_INPUT = {
  /**
   * Ref
   * @description The unique identifier (ref ID) of the Supabase project.
   */
  ref?: string;
  /**
   * Root Key
   * @description The new root encryption key for pgsodium. Must be a cryptographically strong key.
   */
  root_key?: string;
};

/**
 * Type of SUPABASE's SUPABASE_CONFIG_PGSODIUM_UPDATE_WITH_ROOT_KEY_WARNING tool output.
 */
type SUPABASE_CONFIG_PGSODIUM_UPDATE_WITH_ROOT_KEY_WARNING_OUTPUT = {
  /**
   * Data
   * @description Confirmation of the updated pgsodium configuration, including the newly set root key.
   */
  data?: {
      /**
       * Root Key
       * @description The newly configured root encryption key for pgsodium, now active for the project.
       */
      root_key: string;
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
 * Type of SUPABASE's SUPABASE_CREATES_A_NEW_SSO_PROVIDER tool input.
 */
type SUPABASE_CREATES_A_NEW_SSO_PROVIDER_INPUT = {
  /**
   * Attribute  Mapping  Keys
   * @description Maps SAML assertion attributes to custom Supabase JWT claims. Keys are JWT claim names; values specify SAML attribute extraction rules (e.g., `name`, `names`, `default`, `array`).
   * @default null
   */
  attribute__mapping__keys: {
      [key: string]: {
          [key: string]: unknown;
      };
  } | null;
  /**
   * Domains
   * @description Email domains to associate with this SSO provider; users from these domains will be directed here for authentication.
   * @default null
   */
  domains: string[] | null;
  /**
   * Metadata Url
   * @description URL to fetch SAML 2.0 metadata XML. Provide this or `metadata_xml`.
   * @default null
   */
  metadata_url: string | null;
  /**
   * Metadata Xml
   * @description SAML 2.0 metadata XML document as a string. Provide this or `metadata_url`.
   * @default null
   */
  metadata_xml: string | null;
  /**
   * Ref
   * @description Unique reference ID of the Supabase project.
   */
  ref?: string;
  /**
   * Type
   * @description Type of the SSO provider; 'saml' (SAML 2.0) is the only supported value.
   * @enum {string}
   */
  type?: "saml";
};

/**
 * Type of SUPABASE's SUPABASE_CREATES_A_NEW_SSO_PROVIDER tool output.
 */
type SUPABASE_CREATES_A_NEW_SSO_PROVIDER_OUTPUT = {
  /**
   * Data
   * @description Successfully created SSO provider's configuration details.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp (ISO 8601) when the SSO provider configuration was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Domains
       * @description List of domain objects associated with this SSO provider.
       * @default null
       */
      domains: {
          /**
           * Created At
           * @description Timestamp (ISO 8601) when this domain was associated.
           * @default null
           */
          created_at: string | null;
          /**
           * Domain
           * @description Domain name (e.g., 'example.com') linked to the SSO provider.
           * @default null
           */
          domain: string | null;
          /**
           * Id
           * @description Unique identifier for this domain association.
           */
          id: string;
          /**
           * Updated At
           * @description Timestamp (ISO 8601) when this domain association was last updated.
           * @default null
           */
          updated_at: string | null;
      }[] | null;
      /**
       * Id
       * @description Unique identifier of the SSO provider configuration.
       */
      id: string;
      /**
       * Saml
       * @description SAML-specific configuration details.
       * @default null
       */
      saml: {
          /**
           * AttributeMapping
           * @description Configured mapping of SAML attributes to Supabase user claims.
           * @default null
           */
          attribute_mapping: {
              /**
               * Keys
               * @description Dictionary of attribute mappings: Supabase claim names to SAML attribute source and processing rules.
               * @default null
               */
              keys: {
                  [key: string]: {
                      /**
                       * Array
                       * @description If true, the SAML attribute is treated as an array, and the resulting claim will also be an array.
                       * @default null
                       */
                      array: boolean | null;
                      /**
                       * Default
                       * @description Default value for the claim if SAML attribute(s) are not found.
                       * @default null
                       */
                      default: {
                          [key: string]: unknown;
                      } | number | string | boolean | unknown[] | null;
                      /**
                       * Name
                       * @description Primary SAML attribute name to map to this claim.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Names
                       * @description Alternative SAML attribute names to check in order; the first one found is used.
                       * @default null
                       */
                      names: string[] | null;
                  };
              } | null;
          } | null;
          /**
           * Entity Id
           * @description Application's Entity ID (Service Provider ID) as configured in the SAML IdP.
           */
          entity_id: string;
          /**
           * Id
           * @description Unique identifier for the SAML-specific configuration.
           */
          id: string;
          /**
           * Metadata Url
           * @description URL from which SAML metadata was fetched, if `metadata_url` was used during creation.
           * @default null
           */
          metadata_url: string | null;
          /**
           * Metadata Xml
           * @description SAML metadata XML content, if `metadata_xml` was directly provided (may be null/partial if fetched via URL).
           * @default null
           */
          metadata_xml: string | null;
      } | null;
      /**
       * Updated At
       * @description Timestamp (ISO 8601) when the SSO provider configuration was last updated.
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
 * Type of SUPABASE's SUPABASE_CREATES_A_NEW_THIRD_PARTY_AUTH_INTEGRATION tool input.
 */
type SUPABASE_CREATES_A_NEW_THIRD_PARTY_AUTH_INTEGRATION_INPUT = {
  /**
   * Jwks Url
   * @description URL of the JSON Web Key Set (JWKS) for public key verification. Required if `oidc_issuer_url` is not provided.
   */
  jwks_url?: string;
  /**
   * Oidc Issuer Url
   * @description URL of the OpenID Connect (OIDC) issuer. Required if `jwks_url` is not provided.
   */
  oidc_issuer_url?: string;
  /**
   * Ref
   * @description The unique identifier of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_CREATES_A_NEW_THIRD_PARTY_AUTH_INTEGRATION tool output.
 */
type SUPABASE_CREATES_A_NEW_THIRD_PARTY_AUTH_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Details of the newly configured third-party authentication integration.
   */
  data?: {
      /**
       * Custom Jwks
       * @default null
       */
      custom_jwks: {
          [key: string]: unknown;
      } | null;
      /** Id */
      id: string;
      /** Inserted At */
      inserted_at: string;
      /**
       * Jwks Url
       * @default null
       */
      jwks_url: string | null;
      /**
       * Oidc Issuer Url
       * @default null
       */
      oidc_issuer_url: string | null;
      /**
       * Resolved At
       * @default null
       */
      resolved_at: string | null;
      /**
       * Resolved Jwks
       * @default null
       */
      resolved_jwks: {
          [key: string]: unknown;
      } | null;
      /** Type */
      type: string;
      /** Updated At */
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
 * Type of SUPABASE's SUPABASE_CREATE_AN_ORGANIZATION tool input.
 */
type SUPABASE_CREATE_AN_ORGANIZATION_INPUT = {
  /**
   * Name
   * @description The name for the new organization.
   */
  name?: string;
};

/**
 * Type of SUPABASE's SUPABASE_CREATE_AN_ORGANIZATION tool output.
 */
type SUPABASE_CREATE_AN_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description The newly created organization's details, including its unique 'id' and assigned 'name'.
   */
  data?: {
      /** Id */
      id: string;
      /** Name */
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
 * Type of SUPABASE's SUPABASE_CREATE_A_DATABASE_BRANCH tool input.
 */
type SUPABASE_CREATE_A_DATABASE_BRANCH_INPUT = {
  /**
   * Branch Name
   * @description A unique name for the new database branch.
   */
  branch_name?: string;
  /**
   * Desired Instance Size
   * @description Compute instance size for the new database branch.
   * @enum {string}
   */
  desired_instance_size?: "12xlarge" | "16xlarge" | "2xlarge" | "4xlarge" | "8xlarge" | "large" | "medium" | "micro" | "small" | "xlarge";
  /**
   * Git Branch
   * @description Git branch name to associate with this database branch, linking database states to code branches.
   */
  git_branch?: string;
  /**
   * Persistent
   * @description Specifies if the branch is persistent (true) or ephemeral (false); ephemeral branches might be auto-deleted.
   */
  persistent?: boolean;
  /**
   * Postgres Engine
   * @description Desired PostgreSQL engine version for the new branch.
   * @enum {string}
   */
  postgres_engine?: "15";
  /**
   * Ref
   * @description The unique reference ID of the parent Supabase project.
   */
  ref?: string;
  /**
   * Region
   * @description Geographical region for the new database branch.
   */
  region?: string;
  /**
   * Release Channel
   * @description Release channel for Supabase features on this branch, determining feature stability.
   * @enum {string}
   */
  release_channel?: "alpha" | "beta" | "ga" | "internal" | "withdrawn";
};

/**
 * Type of SUPABASE's SUPABASE_CREATE_A_DATABASE_BRANCH tool output.
 */
type SUPABASE_CREATE_A_DATABASE_BRANCH_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the newly created database branch, including its ID, name, status, and configuration.
   */
  data?: {
      /** Created At */
      created_at: string;
      /**
       * Git Branch
       * @default null
       */
      git_branch: string | null;
      /** Id */
      id: string;
      /** Is Default */
      is_default: boolean;
      /**
       * Latest Check Run Id
       * @default null
       */
      latest_check_run_id: number | null;
      /** Name */
      name: string;
      /** Parent Project Ref */
      parent_project_ref: string;
      /** Persistent */
      persistent: boolean;
      /**
       * Pr Number
       * @default null
       */
      pr_number: number | null;
      /** Project Ref */
      project_ref: string;
      /** Reset On Push */
      reset_on_push: boolean;
      /**
       * Status
       * @enum {string}
       */
      status: "CREATING_PROJECT" | "RUNNING_MIGRATIONS" | "MIGRATIONS_PASSED" | "MIGRATIONS_FAILED" | "FUNCTIONS_DEPLOYED" | "FUNCTIONS_FAILED";
      /** Updated At */
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
 * Type of SUPABASE's SUPABASE_CREATE_A_FUNCTION tool input.
 */
type SUPABASE_CREATE_A_FUNCTION_INPUT = {
  /**
   * Body
   * @description JavaScript or TypeScript source code for the Edge Function (populates JSON body `body` field).
   */
  body?: string;
  /**
   * Entrypoint Path
   * @description Path to main function code, relative to project's functions directory (query parameter). Defaults to `./index.ts` or `./index.js` in function's slug directory.
   * @default null
   */
  entrypoint_path: string | null;
  /**
   * Import Map
   * @description If true, enable import map for ES module resolution (query parameter).
   * @default null
   */
  import_map: boolean | null;
  /**
   * Import Map Path
   * @description Path to import map JSON, relative to project's functions directory; used if `import_map` is true (query parameter). Defaults to `import_map.json` in function's slug directory.
   * @default null
   */
  import_map_path: string | null;
  /**
   * Name
   * @description Human-readable name for the function (populates JSON body `name` field).
   */
  name?: string;
  /**
   * Ref
   * @description Project's unique identifier (path parameter).
   */
  ref?: string;
  /**
   * Slug
   * @description URL-friendly identifier for the function's route prefix (populates JSON body `slug` field).
   */
  slug?: string;
  /**
   * Verify Jwt
   * @description If true, verify JWT in Authorization header (populates JSON body `verify_jwt` field).
   * @default null
   */
  verify_jwt: boolean | null;
};

/**
 * Type of SUPABASE's SUPABASE_CREATE_A_FUNCTION tool output.
 */
type SUPABASE_CREATE_A_FUNCTION_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created Edge Function.
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (seconds since epoch).
       */
      created_at: number;
      /**
       * Entrypoint Path
       * @description Path to the function's entrypoint file.
       * @default null
       */
      entrypoint_path: string | null;
      /**
       * Id
       * @description Unique identifier of the function.
       */
      id: string;
      /**
       * Import Map
       * @description Indicates if an import map is used for the function.
       * @default null
       */
      import_map: boolean | null;
      /**
       * Import Map Path
       * @description Path to the function's import map file.
       * @default null
       */
      import_map_path: string | null;
      /**
       * Name
       * @description Human-readable name of the function.
       */
      name: string;
      /**
       * Slug
       * @description URL-friendly identifier (slug) of the function.
       */
      slug: string;
      /**
       * Status
       * @description Current status of the function (e.g., ACTIVE, REMOVED, THROTTLED).
       * @enum {string}
       */
      status: "ACTIVE" | "REMOVED" | "THROTTLED";
      /**
       * Updated At
       * @description Last update timestamp (seconds since epoch).
       */
      updated_at: number;
      /**
       * Verify Jwt
       * @description Indicates if JWT verification is enabled for the function.
       * @default null
       */
      verify_jwt: boolean | null;
      /**
       * Version
       * @description Version number of the function.
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
 * Type of SUPABASE's SUPABASE_CREATE_A_PROJECT tool input.
 */
type SUPABASE_CREATE_A_PROJECT_INPUT = {
  /**
   * Db Pass
   * @description Password for the new database.
   */
  db_pass?: string;
  /**
   * Desired Instance Size
   * @description Desired compute instance size for the project (affects performance/cost; defaults if unspecified).
   * @enum {string}
   */
  desired_instance_size?: "12xlarge" | "16xlarge" | "2xlarge" | "4xlarge" | "8xlarge" | "large" | "medium" | "micro" | "small" | "xlarge";
  /**
   * Kps Enabled
   * @description Deprecated and ignored.
   */
  kps_enabled?: boolean;
  /**
   * Name
   * @description Name for the new project; must be unique within the organization and not contain dots.
   */
  name?: string;
  /**
   * Organization Id
   * @description Unique identifier (slug) of the organization.
   */
  organization_id?: string;
  /**
   * Plan
   * @description Subscription plan (set at organization level, ignored in this request).
   * @enum {string}
   */
  plan?: "free" | "pro";
  /**
   * Postgres Engine
   * @description PostgreSQL engine version (defaults to latest stable).
   * @enum {string}
   */
  postgres_engine?: "15";
  /**
   * Region
   * @description Geographical region for the project's server and database.
   * @enum {string}
   */
  region?: "ap-east-1" | "ap-northeast-1" | "ap-northeast-2" | "ap-south-1" | "ap-southeast-1" | "ap-southeast-2" | "ca-central-1" | "eu-central-1" | "eu-central-2" | "eu-north-1" | "eu-west-1" | "eu-west-2" | "eu-west-3" | "sa-east-1" | "us-east-1" | "us-east-2" | "us-west-1" | "us-west-2";
  /**
   * Release Channel
   * @description Release channel for Supabase features (defaults to 'ga').
   * @enum {string}
   */
  release_channel?: "alpha" | "beta" | "ga" | "internal" | "withdrawn";
  /**
   * Template Url
   * @description Optional URL to a Supabase project template (e.g., from Git) to initialize the project.
   */
  template_url?: string;
};

/**
 * Type of SUPABASE's SUPABASE_CREATE_A_PROJECT tool output.
 */
type SUPABASE_CREATE_A_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created Supabase project.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp of project creation (ISO 8601 format).
       */
      created_at: string;
      /**
       * Database
       * @description Details of the provisioned database for the project.
       * @default null
       */
      database: {
          /**
           * Host
           * @description The hostname for connecting to the project's database (e.g., 'db.<project_ref>.supabase.co').
           */
          host: string;
          /**
           * Postgres Engine
           * @description Major version of the PostgreSQL engine.
           */
          postgres_engine: string;
          /**
           * Release Channel
           * @description Current release channel of the project.
           */
          release_channel: string;
          /**
           * Version
           * @description The full version string of the PostgreSQL database (e.g., 'PostgreSQL 15.1 on aarch64-unknown-linux-gnu, compiled by gcc (GCC) 12.1.0, 64-bit').
           */
          version: string;
      } | null;
      /**
       * Id
       * @description Unique identifier of the newly created project.
       */
      id: string;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Organization Id
       * @description Unique identifier (slug) of the organization this project belongs to.
       */
      organization_id: string;
      /**
       * Region
       * @description Geographical region where the project is hosted.
       */
      region: string;
      /**
       * Status
       * @description Current operational status of the project.
       * @enum {string}
       */
      status: "ACTIVE_HEALTHY" | "ACTIVE_UNHEALTHY" | "COMING_UP" | "GOING_DOWN" | "INACTIVE" | "INIT_FAILED" | "REMOVED" | "RESTARTING" | "UNKNOWN" | "UPGRADING" | "PAUSING" | "RESTORING" | "RESTORE_FAILED" | "PAUSE_FAILED";
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
 * Type of SUPABASE's SUPABASE_CUSTOM_HOSTNAME_DNS_VERIFICATION tool input.
 */
type SUPABASE_CUSTOM_HOSTNAME_DNS_VERIFICATION_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project for which the custom hostname is being re-verified.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_CUSTOM_HOSTNAME_DNS_VERIFICATION tool output.
 */
type SUPABASE_CUSTOM_HOSTNAME_DNS_VERIFICATION_OUTPUT = {
  /**
   * Data
   * @description Contains the comprehensive status and detailed verification data for the custom hostname following the re-verification attempt.
   */
  data?: {
      /** Custom Hostname */
      custom_hostname: string;
      /** Data */
      data: {
          /** Errors */
          errors: {
              [key: string]: unknown;
          }[];
          /** Messages */
          messages: {
              [key: string]: unknown;
          }[];
          /** Result */
          result: {
              /** Custom Origin Server */
              custom_origin_server: string;
              /** Hostname */
              hostname: string;
              /** Id */
              id: string;
              /** Ownership Verification */
              ownership_verification: {
                  /** Name */
                  name: string;
                  /** Type */
                  type: string;
                  /** Value */
                  value: string;
              };
              /** Ssl */
              ssl: {
                  /** Status */
                  status: string;
                  /**
                   * Validation Errors
                   * @default null
                   */
                  validation_errors: {
                      /** Message */
                      message: string;
                  }[] | null;
                  /** Validation Records */
                  validation_records: {
                      /** Txt Name */
                      txt_name: string;
                      /** Txt Value */
                      txt_value: string;
                  }[];
              };
              /** Status */
              status: string;
              /**
               * Verification Errors
               * @default null
               */
              verification_errors: string[] | null;
          };
          /** Success */
          success: boolean;
      };
      /**
       * Status
       * @enum {string}
       */
      status: "1_not_started" | "2_initiated" | "3_challenge_verified" | "4_origin_setup_completed" | "5_services_reconfigured";
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
 * Type of SUPABASE's SUPABASE_DELETES_THE_GIVEN_PROJECT tool input.
 */
type SUPABASE_DELETES_THE_GIVEN_PROJECT_INPUT = {
  /**
   * Ref
   * @description Unique reference ID of the Supabase project to delete, typically a short alphanumeric string assigned upon creation.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_DELETES_THE_GIVEN_PROJECT tool output.
 */
type SUPABASE_DELETES_THE_GIVEN_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Details of the project that was successfully deleted.
   */
  data?: {
      /** Id */
      id: number;
      /** Name */
      name: string;
      /** Ref */
      ref: string;
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
 * Type of SUPABASE's SUPABASE_DELETE_A_DATABASE_BRANCH tool input.
 */
type SUPABASE_DELETE_A_DATABASE_BRANCH_INPUT = {
  /**
   * Branch Id
   * @description The unique identifier of the database branch to be deleted.
   */
  branch_id?: string;
};

/**
 * Type of SUPABASE's SUPABASE_DELETE_A_DATABASE_BRANCH tool output.
 */
type SUPABASE_DELETE_A_DATABASE_BRANCH_OUTPUT = {
  /**
   * Data
   * @description Contains the response data, typically a message confirming the branch deletion.
   */
  data?: {
      /**
       * Message
       * @description A confirmation or status message regarding the deletion operation.
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
 * Type of SUPABASE's SUPABASE_DELETE_A_FUNCTION tool input.
 */
type SUPABASE_DELETE_A_FUNCTION_INPUT = {
  /**
   * Function Slug
   * @description The unique identifier (slug) of the Edge Function to be deleted. This is typically the name given to the function upon creation.
   */
  function_slug?: string;
  /**
   * Ref
   * @description The unique identifier of the Supabase project from which the function will be deleted.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_DELETE_A_FUNCTION tool output.
 */
type SUPABASE_DELETE_A_FUNCTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary that is typically empty or contains a success message upon successful deletion of the function.
   */
  data?: {
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
 * Type of SUPABASE's SUPABASE_DELETE_CUSTOM_HOSTNAME_CONFIG tool input.
 */
type SUPABASE_DELETE_CUSTOM_HOSTNAME_CONFIG_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project for which the custom hostname configuration will be deleted.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_DELETE_CUSTOM_HOSTNAME_CONFIG tool output.
 */
type SUPABASE_DELETE_CUSTOM_HOSTNAME_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Response data from the API after attempting to delete the custom hostname. While a dictionary is expected, it might be empty or contain a simple status message (e.g., {'status': 'success'}) upon successful deletion.
   */
  data?: {
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
 * Type of SUPABASE's SUPABASE_DELETE_PROJECT_VANITY_SUBDOMAIN tool input.
 */
type SUPABASE_DELETE_PROJECT_VANITY_SUBDOMAIN_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_DELETE_PROJECT_VANITY_SUBDOMAIN tool output.
 */
type SUPABASE_DELETE_PROJECT_VANITY_SUBDOMAIN_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the result of the vanity subdomain deletion, typically including a confirmation or status.
   */
  data?: {
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
 * Type of SUPABASE's SUPABASE_DEPLOY_FUNCTION tool input.
 */
type SUPABASE_DEPLOY_FUNCTION_INPUT = {
  /**
   * Bundle Only
   * @description If true, only bundle the function without deploying.
   * @default null
   */
  bundleOnly: boolean | null;
  /**
   * File
   * @description Function code file content or path to deploy.
   */
  file?: string;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
  /**
   * Slug
   * @description Function slug to deploy. If not provided, deploys all functions.
   * @default null
   */
  slug: string | null;
};

/**
 * Type of SUPABASE's SUPABASE_DEPLOY_FUNCTION tool output.
 */
type SUPABASE_DEPLOY_FUNCTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Deployment status message.
       */
      message: string;
      /**
       * Success
       * @description Whether deployment was successful.
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
 * Type of SUPABASE's SUPABASE_DISABLES_PREVIEW_BRANCHING tool input.
 */
type SUPABASE_DISABLES_PREVIEW_BRANCHING_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project for which preview branching is to be disabled.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_DISABLES_PREVIEW_BRANCHING tool output.
 */
type SUPABASE_DISABLES_PREVIEW_BRANCHING_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response data, typically confirming the disablement or providing status information regarding the preview branching feature.
   */
  data?: {
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
 * Type of SUPABASE's SUPABASE_DISABLE_PROJECT_READONLY tool input.
 */
type SUPABASE_DISABLE_PROJECT_READONLY_INPUT = {
  /**
   * Ref
   * @description Unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_DISABLE_PROJECT_READONLY tool output.
 */
type SUPABASE_DISABLE_PROJECT_READONLY_OUTPUT = {
  /**
   * Data
   * @description API response data, usually confirming the disable operation's status; structure may vary.
   */
  data?: {
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
 * Type of SUPABASE's SUPABASE_EXCHANGE_O_AUTH_TOKEN tool input.
 */
type SUPABASE_EXCHANGE_O_AUTH_TOKEN_INPUT = {
  /**
   * Client Id
   * @description Application's client ID.
   */
  client_id?: string;
  /**
   * Client Secret
   * @description Application's client secret.
   */
  client_secret?: string;
  /**
   * Code
   * @description Authorization code from the server; required if `grant_type` is 'authorization_code'.
   */
  code?: string;
  /**
   * Code Verifier
   * @description PKCE code verifier; required if PKCE was used with an 'authorization_code' grant type.
   */
  code_verifier?: string;
  /**
   * Grant Type
   * @description OAuth 2.0 grant type that dictates the token exchange flow.
   * @enum {string}
   */
  grant_type?: "authorization_code" | "refresh_token";
  /**
   * Redirect Uri
   * @description Redirect URI from the initial authorization; required if `grant_type` is 'authorization_code' and it was part of the original request.
   */
  redirect_uri?: string;
  /**
   * Refresh Token
   * @description Refresh token for acquiring a new access token; required if `grant_type` is 'refresh_token'.
   */
  refresh_token?: string;
};

/**
 * Type of SUPABASE's SUPABASE_EXCHANGE_O_AUTH_TOKEN tool output.
 */
type SUPABASE_EXCHANGE_O_AUTH_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Token data returned upon successful exchange.
   */
  data?: {
      /**
       * Access Token
       * @description Issued access token for API request authentication.
       */
      access_token: string;
      /**
       * Expires In
       * @description Lifetime of the access token in seconds.
       */
      expires_in: number;
      /**
       * Refresh Token
       * @description Issued refresh token for obtaining a new access token when the current one expires.
       */
      refresh_token: string;
      /**
       * Token Type
       * @description Type of the issued token (e.g., 'Bearer').
       * @enum {string}
       */
      token_type: "Bearer";
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
 * Type of SUPABASE's SUPABASE_GENERATE_TYPE_SCRIPT_TYPES tool input.
 */
type SUPABASE_GENERATE_TYPE_SCRIPT_TYPES_INPUT = {
  /**
   * Included Schemas
   * @description Comma-separated database schema names to include in the generated TypeScript types.
   * @default public
   */
  included_schemas: string;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project for which to generate TypeScript types.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GENERATE_TYPE_SCRIPT_TYPES tool output.
 */
type SUPABASE_GENERATE_TYPE_SCRIPT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Contains the generated TypeScript definitions.
   */
  data?: {
      /**
       * Types
       * @description Generated TypeScript type definitions.
       */
      types: string;
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
 * Type of SUPABASE's SUPABASE_GETS_A_SPECIFIC_SQL_SNIPPET tool input.
 */
type SUPABASE_GETS_A_SPECIFIC_SQL_SNIPPET_INPUT = {
  /**
   * Id
   * @description The unique identifier of the SQL snippet to retrieve.
   */
  id?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GETS_A_SPECIFIC_SQL_SNIPPET tool output.
 */
type SUPABASE_GETS_A_SPECIFIC_SQL_SNIPPET_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the retrieved SQL snippet.
   */
  data?: {
      /**
       * Content
       * @description The actual content and related metadata of the SQL snippet.
       */
      content: {
          /**
           * Favorite
           * @description Boolean flag indicating whether the SQL snippet is marked as a favorite.
           */
          favorite: boolean;
          /**
           * Schema Version
           * @description Version of the schema used for the snippet's content.
           */
          schema_version: string;
          /**
           * Sql
           * @description The raw SQL query string of the snippet.
           */
          sql: string;
      };
      /**
       * Description
       * @description An optional description providing more details about the SQL snippet.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the SQL snippet.
       */
      id: string;
      /**
       * Inserted At
       * @description Timestamp indicating when the SQL snippet was created, in ISO 8601 format.
       */
      inserted_at: string;
      /**
       * Name
       * @description The name assigned to the SQL snippet.
       */
      name: string;
      /**
       * Owner
       * @description Information about the owner of this SQL snippet.
       */
      owner: {
          /**
           * Id
           * @description Unique identifier of the owner.
           */
          id: number;
          /**
           * Username
           * @description Username of the owner.
           */
          username: string;
      };
      /**
       * Project
       * @description Details of the project to which this SQL snippet belongs.
       */
      project: {
          /**
           * Id
           * @description Unique identifier of the project.
           */
          id: number;
          /**
           * Name
           * @description Name of the project.
           */
          name: string;
      };
      /**
       * Type
       * @description The type of the snippet. Currently, only 'sql' is supported.
       * @enum {string}
       */
      type: "sql";
      /**
       * Updated At
       * @description Timestamp indicating when the SQL snippet was last updated, in ISO 8601 format.
       */
      updated_at: string;
      /**
       * Updated By
       * @description Information about the user who last updated this SQL snippet.
       */
      updated_by: {
          /**
           * Id
           * @description Unique identifier of the user who performed the last update.
           */
          id: number;
          /**
           * Username
           * @description Username of the user who performed the last update.
           */
          username: string;
      };
      /**
       * Visibility
       * @description Visibility level of the SQL snippet, determining who can access it.
       * @enum {string}
       */
      visibility: "user" | "project" | "org" | "public";
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
 * Type of SUPABASE's SUPABASE_GETS_A_SSO_PROVIDER_BY_ITS_UUID tool input.
 */
type SUPABASE_GETS_A_SSO_PROVIDER_BY_ITS_UUID_INPUT = {
  /**
   * Provider Id
   * @description The unique identifier (UUID) of the SSO provider whose configuration is to be fetched.
   */
  provider_id?: string;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GETS_A_SSO_PROVIDER_BY_ITS_UUID tool output.
 */
type SUPABASE_GETS_A_SSO_PROVIDER_BY_ITS_UUID_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed configuration of the specified SSO provider, including its ID, SAML settings (if applicable), associated domains, and creation/update timestamps.
   */
  data?: {
      /**
       * Created At
       * @default null
       */
      created_at: string | null;
      /**
       * Domains
       * @default null
       */
      domains: {
          /**
           * Created At
           * @default null
           */
          created_at: string | null;
          /**
           * Domain
           * @default null
           */
          domain: string | null;
          /** Id */
          id: string;
          /**
           * Updated At
           * @default null
           */
          updated_at: string | null;
      }[] | null;
      /** Id */
      id: string;
      /**
       * Saml
       * @default null
       */
      saml: {
          /**
           * AttributeMapping
           * @default null
           */
          attribute_mapping: {
              /** Keys */
              keys: {
                  [key: string]: {
                      /**
                       * Array
                       * @default null
                       */
                      array: boolean | null;
                      /**
                       * Default
                       * @default null
                       */
                      default: {
                          [key: string]: unknown;
                      } | number | string | boolean | null;
                      /**
                       * Name
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Names
                       * @default null
                       */
                      names: string[] | null;
                  };
              };
          } | null;
          /** Entity Id */
          entity_id: string;
          /** Id */
          id: string;
          /**
           * Metadata Url
           * @default null
           */
          metadata_url: string | null;
          /**
           * Metadata Xml
           * @default null
           */
          metadata_xml: string | null;
      } | null;
      /**
       * Updated At
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
 * Type of SUPABASE's SUPABASE_GETS_INFORMATION_ABOUT_THE_ORGANIZATION tool input.
 */
type SUPABASE_GETS_INFORMATION_ABOUT_THE_ORGANIZATION_INPUT = {
  /**
   * Slug
   * @description The unique, URL-friendly identifier of the organization.
   */
  slug?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GETS_INFORMATION_ABOUT_THE_ORGANIZATION tool output.
 */
type SUPABASE_GETS_INFORMATION_ABOUT_THE_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Contains detailed information about the organization, including its plan, opt-in tags, allowed release channels, ID, and name.
   */
  data?: {
      /** Allowed Release Channels */
      allowed_release_channels: string[];
      /** Id */
      id: string;
      /** Name */
      name: string;
      /** Opt In Tags */
      opt_in_tags: string[];
      /**
       * Plan
       * @default null
       * @enum {string|null}
       */
      plan: "free" | "pro" | "team" | "enterprise" | null;
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
 * Type of SUPABASE's SUPABASE_GETS_PROJECT_S_AUTH_CONFIG tool input.
 */
type SUPABASE_GETS_PROJECT_S_AUTH_CONFIG_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GETS_PROJECT_S_AUTH_CONFIG tool output.
 */
type SUPABASE_GETS_PROJECT_S_AUTH_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed authentication configuration settings for the project.
   */
  data?: {
      /** Api Max Request Duration */
      api_max_request_duration: number;
      /** Db Max Pool Size */
      db_max_pool_size: number;
      /** Disable Signup */
      disable_signup: boolean;
      /** External Anonymous Users Enabled */
      external_anonymous_users_enabled: boolean;
      /** External Apple Additional Client Ids */
      external_apple_additional_client_ids: string;
      /** External Apple Client Id */
      external_apple_client_id: string;
      /** External Apple Enabled */
      external_apple_enabled: boolean;
      /** External Apple Secret */
      external_apple_secret: string;
      /** External Azure Client Id */
      external_azure_client_id: string;
      /** External Azure Enabled */
      external_azure_enabled: boolean;
      /** External Azure Secret */
      external_azure_secret: string;
      /** External Azure Url */
      external_azure_url: string;
      /** External Bitbucket Client Id */
      external_bitbucket_client_id: string;
      /** External Bitbucket Enabled */
      external_bitbucket_enabled: boolean;
      /** External Bitbucket Secret */
      external_bitbucket_secret: string;
      /** External Discord Client Id */
      external_discord_client_id: string;
      /** External Discord Enabled */
      external_discord_enabled: boolean;
      /** External Discord Secret */
      external_discord_secret: string;
      /** External Email Enabled */
      external_email_enabled: boolean;
      /** External Facebook Client Id */
      external_facebook_client_id: string;
      /** External Facebook Enabled */
      external_facebook_enabled: boolean;
      /** External Facebook Secret */
      external_facebook_secret: string;
      /** External Figma Client Id */
      external_figma_client_id: string;
      /** External Figma Enabled */
      external_figma_enabled: boolean;
      /** External Figma Secret */
      external_figma_secret: string;
      /** External Github Client Id */
      external_github_client_id: string;
      /** External Github Enabled */
      external_github_enabled: boolean;
      /** External Github Secret */
      external_github_secret: string;
      /** External Gitlab Client Id */
      external_gitlab_client_id: string;
      /** External Gitlab Enabled */
      external_gitlab_enabled: boolean;
      /** External Gitlab Secret */
      external_gitlab_secret: string;
      /** External Gitlab Url */
      external_gitlab_url: string;
      /** External Google Additional Client Ids */
      external_google_additional_client_ids: string;
      /** External Google Client Id */
      external_google_client_id: string;
      /** External Google Enabled */
      external_google_enabled: boolean;
      /** External Google Secret */
      external_google_secret: string;
      /** External Google Skip Nonce Check */
      external_google_skip_nonce_check: boolean;
      /** External Kakao Client Id */
      external_kakao_client_id: string;
      /** External Kakao Enabled */
      external_kakao_enabled: boolean;
      /** External Kakao Secret */
      external_kakao_secret: string;
      /** External Keycloak Client Id */
      external_keycloak_client_id: string;
      /** External Keycloak Enabled */
      external_keycloak_enabled: boolean;
      /** External Keycloak Secret */
      external_keycloak_secret: string;
      /** External Keycloak Url */
      external_keycloak_url: string;
      /** External Linkedin Oidc Client Id */
      external_linkedin_oidc_client_id: string;
      /** External Linkedin Oidc Enabled */
      external_linkedin_oidc_enabled: boolean;
      /** External Linkedin Oidc Secret */
      external_linkedin_oidc_secret: string;
      /** External Notion Client Id */
      external_notion_client_id: string;
      /** External Notion Enabled */
      external_notion_enabled: boolean;
      /** External Notion Secret */
      external_notion_secret: string;
      /** External Phone Enabled */
      external_phone_enabled: boolean;
      /** External Slack Client Id */
      external_slack_client_id: string;
      /** External Slack Enabled */
      external_slack_enabled: boolean;
      /** External Slack Oidc Client Id */
      external_slack_oidc_client_id: string;
      /** External Slack Oidc Enabled */
      external_slack_oidc_enabled: boolean;
      /** External Slack Oidc Secret */
      external_slack_oidc_secret: string;
      /** External Slack Secret */
      external_slack_secret: string;
      /** External Spotify Client Id */
      external_spotify_client_id: string;
      /** External Spotify Enabled */
      external_spotify_enabled: boolean;
      /** External Spotify Secret */
      external_spotify_secret: string;
      /** External Twitch Client Id */
      external_twitch_client_id: string;
      /** External Twitch Enabled */
      external_twitch_enabled: boolean;
      /** External Twitch Secret */
      external_twitch_secret: string;
      /** External Twitter Client Id */
      external_twitter_client_id: string;
      /** External Twitter Enabled */
      external_twitter_enabled: boolean;
      /** External Twitter Secret */
      external_twitter_secret: string;
      /** External Workos Client Id */
      external_workos_client_id: string;
      /** External Workos Enabled */
      external_workos_enabled: boolean;
      /** External Workos Secret */
      external_workos_secret: string;
      /** External Workos Url */
      external_workos_url: string;
      /** External Zoom Client Id */
      external_zoom_client_id: string;
      /** External Zoom Enabled */
      external_zoom_enabled: boolean;
      /** External Zoom Secret */
      external_zoom_secret: string;
      /** Hook Custom Access Token Enabled */
      hook_custom_access_token_enabled: boolean;
      /** Hook Custom Access Token Secrets */
      hook_custom_access_token_secrets: string;
      /** Hook Custom Access Token Uri */
      hook_custom_access_token_uri: string;
      /** Hook Mfa Verification Attempt Enabled */
      hook_mfa_verification_attempt_enabled: boolean;
      /** Hook Mfa Verification Attempt Secrets */
      hook_mfa_verification_attempt_secrets: string;
      /** Hook Mfa Verification Attempt Uri */
      hook_mfa_verification_attempt_uri: string;
      /** Hook Password Verification Attempt Enabled */
      hook_password_verification_attempt_enabled: boolean;
      /** Hook Password Verification Attempt Secrets */
      hook_password_verification_attempt_secrets: string;
      /** Hook Password Verification Attempt Uri */
      hook_password_verification_attempt_uri: string;
      /** Hook Send Email Enabled */
      hook_send_email_enabled: boolean;
      /** Hook Send Email Secrets */
      hook_send_email_secrets: string;
      /** Hook Send Email Uri */
      hook_send_email_uri: string;
      /** Hook Send Sms Enabled */
      hook_send_sms_enabled: boolean;
      /** Hook Send Sms Secrets */
      hook_send_sms_secrets: string;
      /** Hook Send Sms Uri */
      hook_send_sms_uri: string;
      /** Jwt Exp */
      jwt_exp: number;
      /** Mailer Allow Unverified Email Sign Ins */
      mailer_allow_unverified_email_sign_ins: boolean;
      /** Mailer Autoconfirm */
      mailer_autoconfirm: boolean;
      /** Mailer Otp Exp */
      mailer_otp_exp: number;
      /** Mailer Otp Length */
      mailer_otp_length: number;
      /** Mailer Secure Email Change Enabled */
      mailer_secure_email_change_enabled: boolean;
      /** Mailer Subjects Confirmation */
      mailer_subjects_confirmation: string;
      /** Mailer Subjects Email Change */
      mailer_subjects_email_change: string;
      /** Mailer Subjects Invite */
      mailer_subjects_invite: string;
      /** Mailer Subjects Magic Link */
      mailer_subjects_magic_link: string;
      /** Mailer Subjects Reauthentication */
      mailer_subjects_reauthentication: string;
      /** Mailer Subjects Recovery */
      mailer_subjects_recovery: string;
      /** Mailer Templates Confirmation Content */
      mailer_templates_confirmation_content: string;
      /** Mailer Templates Email Change Content */
      mailer_templates_email_change_content: string;
      /** Mailer Templates Invite Content */
      mailer_templates_invite_content: string;
      /** Mailer Templates Magic Link Content */
      mailer_templates_magic_link_content: string;
      /** Mailer Templates Reauthentication Content */
      mailer_templates_reauthentication_content: string;
      /** Mailer Templates Recovery Content */
      mailer_templates_recovery_content: string;
      /** Mfa Max Enrolled Factors */
      mfa_max_enrolled_factors: number;
      /** Mfa Phone Enroll Enabled */
      mfa_phone_enroll_enabled: boolean;
      /** Mfa Phone Max Frequency */
      mfa_phone_max_frequency: number;
      /** Mfa Phone Otp Length */
      mfa_phone_otp_length: number;
      /** Mfa Phone Template */
      mfa_phone_template: string;
      /** Mfa Phone Verify Enabled */
      mfa_phone_verify_enabled: boolean;
      /** Mfa Totp Enroll Enabled */
      mfa_totp_enroll_enabled: boolean;
      /** Mfa Totp Verify Enabled */
      mfa_totp_verify_enabled: boolean;
      /** Mfa Web Authn Enroll Enabled */
      mfa_web_authn_enroll_enabled: boolean;
      /** Mfa Web Authn Verify Enabled */
      mfa_web_authn_verify_enabled: boolean;
      /** Password Hibp Enabled */
      password_hibp_enabled: boolean;
      /** Password Min Length */
      password_min_length: number;
      /** Password Required Characters */
      password_required_characters: string;
      /** Rate Limit Anonymous Users */
      rate_limit_anonymous_users: number;
      /** Rate Limit Email Sent */
      rate_limit_email_sent: number;
      /** Rate Limit Otp */
      rate_limit_otp: number;
      /** Rate Limit Sms Sent */
      rate_limit_sms_sent: number;
      /** Rate Limit Token Refresh */
      rate_limit_token_refresh: number;
      /** Rate Limit Verify */
      rate_limit_verify: number;
      /** Refresh Token Rotation Enabled */
      refresh_token_rotation_enabled: boolean;
      /** Saml Allow Encrypted Assertions */
      saml_allow_encrypted_assertions: boolean;
      /** Saml Enabled */
      saml_enabled: boolean;
      /** Saml External Url */
      saml_external_url: string;
      /** Security Captcha Enabled */
      security_captcha_enabled: boolean;
      /** Security Captcha Provider */
      security_captcha_provider: string;
      /** Security Captcha Secret */
      security_captcha_secret: string;
      /** Security Manual Linking Enabled */
      security_manual_linking_enabled: boolean;
      /** Security Refresh Token Reuse Interval */
      security_refresh_token_reuse_interval: number;
      /** Security Update Password Require Reauthentication */
      security_update_password_require_reauthentication: boolean;
      /** Sessions Inactivity Timeout */
      sessions_inactivity_timeout: number;
      /** Sessions Single Per User */
      sessions_single_per_user: boolean;
      /** Sessions Tags */
      sessions_tags: string;
      /** Sessions Timebox */
      sessions_timebox: number;
      /** Site Url */
      site_url: string;
      /** Sms Autoconfirm */
      sms_autoconfirm: boolean;
      /** Sms Max Frequency */
      sms_max_frequency: number;
      /** Sms Messagebird Access Key */
      sms_messagebird_access_key: string;
      /** Sms Messagebird Originator */
      sms_messagebird_originator: string;
      /** Sms Otp Exp */
      sms_otp_exp: number;
      /** Sms Otp Length */
      sms_otp_length: number;
      /** Sms Provider */
      sms_provider: string;
      /** Sms Template */
      sms_template: string;
      /** Sms Test Otp */
      sms_test_otp: string;
      /** Sms Test Otp Valid Until */
      sms_test_otp_valid_until: string;
      /** Sms Textlocal Api Key */
      sms_textlocal_api_key: string;
      /** Sms Textlocal Sender */
      sms_textlocal_sender: string;
      /** Sms Twilio Account Sid */
      sms_twilio_account_sid: string;
      /** Sms Twilio Auth Token */
      sms_twilio_auth_token: string;
      /** Sms Twilio Content Sid */
      sms_twilio_content_sid: string;
      /** Sms Twilio Message Service Sid */
      sms_twilio_message_service_sid: string;
      /** Sms Twilio Verify Account Sid */
      sms_twilio_verify_account_sid: string;
      /** Sms Twilio Verify Auth Token */
      sms_twilio_verify_auth_token: string;
      /** Sms Twilio Verify Message Service Sid */
      sms_twilio_verify_message_service_sid: string;
      /** Sms Vonage Api Key */
      sms_vonage_api_key: string;
      /** Sms Vonage Api Secret */
      sms_vonage_api_secret: string;
      /** Sms Vonage From */
      sms_vonage_from: string;
      /** Smtp Admin Email */
      smtp_admin_email: string;
      /** Smtp Host */
      smtp_host: string;
      /** Smtp Max Frequency */
      smtp_max_frequency: number;
      /** Smtp Pass */
      smtp_pass: string;
      /** Smtp Port */
      smtp_port: string;
      /** Smtp Sender Name */
      smtp_sender_name: string;
      /** Smtp User */
      smtp_user: string;
      /** Uri Allow List */
      uri_allow_list: string;
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
 * Type of SUPABASE's SUPABASE_GETS_PROJECT_S_POSTGREST_CONFIG tool input.
 */
type SUPABASE_GETS_PROJECT_S_POSTGREST_CONFIG_INPUT = {
  /**
   * Ref
   * @description The unique identifier of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GETS_PROJECT_S_POSTGREST_CONFIG tool output.
 */
type SUPABASE_GETS_PROJECT_S_POSTGREST_CONFIG_OUTPUT = {
  /**
   * Data
   * @description The PostgREST configuration details for the specified project.
   */
  data?: {
      /**
       * Db Extra Search Path
       * @description A comma-separated list of additional database schemas to include in the PostgreSQL `search_path`. This allows accessing tables and views in these schemas without explicit schema qualification.
       */
      db_extra_search_path: string;
      /**
       * Db Pool
       * @description The size of the connection pool. If `null`, the value is automatically configured based on the project's compute size.
       */
      db_pool: number;
      /**
       * Db Schema
       * @description The primary database schema that PostgREST exposes through the API.
       */
      db_schema: string;
      /**
       * Jwt Secret
       * @description The secret key used for JWT (JSON Web Token) generation and verification. This is critical for securing your API. It is only returned if it has been overridden by the user.
       * @default null
       */
      jwt_secret: string | null;
      /**
       * Max Rows
       * @description The maximum number of rows that PostgREST will return in a single request. This helps to limit payload size.
       */
      max_rows: number;
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
 * Type of SUPABASE's SUPABASE_GETS_PROJECT_S_POSTGRES_CONFIG tool input.
 */
type SUPABASE_GETS_PROJECT_S_POSTGRES_CONFIG_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GETS_PROJECT_S_POSTGRES_CONFIG tool output.
 */
type SUPABASE_GETS_PROJECT_S_POSTGRES_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed PostgreSQL configuration settings for the specified project.
   */
  data?: {
      /**
       * Effective Cache Size
       * @description Planner's assumption about total disk cache size for a single query (e.g., '4GB').
       * @default null
       */
      effective_cache_size: string | null;
      /**
       * Maintenance Work Mem
       * @description Maximum memory for maintenance operations like VACUUM or CREATE INDEX (e.g., '64MB').
       * @default null
       */
      maintenance_work_mem: string | null;
      /**
       * Max Connections
       * @description Maximum concurrent connections (1-262143, inclusive).
       * @default null
       */
      max_connections: number | null;
      /**
       * Max Locks Per Transaction
       * @description Controls average object locks per transaction (10-2147483640, inclusive).
       * @default null
       */
      max_locks_per_transaction: number | null;
      /**
       * Max Parallel Maintenance Workers
       * @description Maximum parallel workers for a single maintenance utility command (0-1024, inclusive).
       * @default null
       */
      max_parallel_maintenance_workers: number | null;
      /**
       * Max Parallel Workers
       * @description Maximum parallel workers the system can support (0-1024, inclusive).
       * @default null
       */
      max_parallel_workers: number | null;
      /**
       * Max Parallel Workers Per Gather
       * @description Maximum parallel workers for a single Gather or Gather Merge node (0-1024, inclusive).
       * @default null
       */
      max_parallel_workers_per_gather: number | null;
      /**
       * Max Slot Wal Keep Size
       * @description Maximum WAL file size replication slots can retain in pg_wal (e.g., '1GB').
       * @default null
       */
      max_slot_wal_keep_size: string | null;
      /**
       * Max Standby Archive Delay
       * @description Maximum delay before canceling queries on a hot standby server processing archived WAL (e.g., '30s').
       * @default null
       */
      max_standby_archive_delay: string | null;
      /**
       * Max Standby Streaming Delay
       * @description Maximum delay before canceling queries on a hot standby server processing streamed WAL (e.g., '30s').
       * @default null
       */
      max_standby_streaming_delay: string | null;
      /**
       * Max Wal Size
       * @description Target maximum size of the Write-Ahead Log (WAL) (e.g., '1GB').
       * @default null
       */
      max_wal_size: string | null;
      /**
       * Max Worker Processes
       * @description Maximum background processes the system can support (0-262143, inclusive).
       * @default null
       */
      max_worker_processes: number | null;
      /**
       * SessionReplicationRole
       * @description Session behavior for replication triggers and DDL commands; 'origin', 'replica', or 'local'.
       * @default null
       * @enum {string|null}
       */
      session_replication_role: "origin" | "replica" | "local" | null;
      /**
       * Shared Buffers
       * @description Memory for shared memory buffers used by the database server (e.g., '128MB').
       * @default null
       */
      shared_buffers: string | null;
      /**
       * Statement Timeout
       * @description Maximum allowed duration for any statement (e.g., '1min'); 0 turns off the timeout.
       * @default null
       */
      statement_timeout: string | null;
      /**
       * Wal Keep Size
       * @description Amount of WAL data kept in pg_wal for standby servers (e.g., '128MB').
       * @default null
       */
      wal_keep_size: string | null;
      /**
       * Work Mem
       * @description Base maximum memory for a query operation (e.g., sort, hash) before writing to temporary disk files (e.g., '4MB').
       * @default null
       */
      work_mem: string | null;
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
 * Type of SUPABASE's SUPABASE_GETS_PROJECT_S_SERVICE_HEALTH_STATUS tool input.
 */
type SUPABASE_GETS_PROJECT_S_SERVICE_HEALTH_STATUS_INPUT = {
  /**
   * Ref
   * @description The unique identifier (ref) of the Supabase project.
   */
  ref?: string;
  /**
   * Services
   * @description A list of specific services for which to retrieve health status. If omitted, the health of all services will be checked.
   */
  services?: string[];
  /**
   * Timeout Ms
   * @description Optional timeout in milliseconds for the health check request.
   */
  timeout_ms?: number;
};

/**
 * Type of SUPABASE's SUPABASE_GETS_PROJECT_S_SERVICE_HEALTH_STATUS tool output.
 */
type SUPABASE_GETS_PROJECT_S_SERVICE_HEALTH_STATUS_OUTPUT = {
  /**
   * Data
   * @description A list, where each item details the health status of a service within the project.
   */
  data?: {
      /**
       * Error
       * @description An optional error message if the service is unhealthy or an error occurred during the check. This field is present only if there's an error.
       * @default null
       */
      error: string | null;
      /**
       * Healthy
       * @description A boolean indicating if the service is currently healthy.
       */
      healthy: boolean;
      /**
       * Info
       * @description Optional detailed information about the service. The structure of this field varies depending on the service type; for example, it might contain version details for one service or database connectivity status for another.
       * @default null
       */
      info: {
          /** Description */
          description: string;
          /** Name */
          name: string;
          /** Version */
          version: string;
      } | null;
      /**
       * Name
       * @description The name of the service whose health status is reported.
       * @enum {string}
       */
      name: "auth" | "db" | "pooler" | "realtime" | "rest" | "storage";
      /**
       * Status
       * @description The operational status of the service.
       * @enum {string}
       */
      status: "COMING_UP" | "ACTIVE_HEALTHY" | "UNHEALTHY";
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
 * Type of SUPABASE's SUPABASE_GETS_PROJECT_S_SUPAVISOR_CONFIG tool input.
 */
type SUPABASE_GETS_PROJECT_S_SUPAVISOR_CONFIG_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GETS_PROJECT_S_SUPAVISOR_CONFIG tool output.
 */
type SUPABASE_GETS_PROJECT_S_SUPAVISOR_CONFIG_OUTPUT = {
  /**
   * Data
   * @description A list of Supavisor (database pooler) configuration details for the project.
   */
  data?: {
      /** Connection String */
      connectionString: string;
      /**
       * Database Type
       * @description Specifies the type of the database instance, indicating if it's a primary or a replica.
       * @enum {string}
       */
      database_type: "PRIMARY" | "READ_REPLICA";
      /** Db Host */
      db_host: string;
      /** Db Name */
      db_name: string;
      /** Db Port */
      db_port: number;
      /** Db User */
      db_user: string;
      /** Default Pool Size */
      default_pool_size: number;
      /** Identifier */
      identifier: string;
      /** Is Using Scram Auth */
      is_using_scram_auth: boolean;
      /** Max Client Conn */
      max_client_conn: number;
      /**
       * Pool Mode
       * @description Defines the pooling mode for Supavisor connections, determining how connections are managed and reused.
       * @enum {string}
       */
      pool_mode: "transaction" | "session";
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
 * Type of SUPABASE's SUPABASE_GET_DATABASE_BRANCH_CONFIG tool input.
 */
type SUPABASE_GET_DATABASE_BRANCH_CONFIG_INPUT = {
  /**
   * Branch Id
   * @description The unique identifier of the Supabase branch.
   */
  branch_id?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GET_DATABASE_BRANCH_CONFIG tool output.
 */
type SUPABASE_GET_DATABASE_BRANCH_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed configuration and status of the database branch.
   */
  data?: {
      /**
       * Db Host
       * @description The hostname for connecting to the database.
       */
      db_host: string;
      /**
       * Db Pass
       * @description The password for database authentication. This field might be null or masked for security reasons.
       * @default null
       */
      db_pass: string | null;
      /**
       * Db Port
       * @description The port number for database connection.
       */
      db_port: number;
      /**
       * Db User
       * @description The username for database authentication. May be null.
       * @default null
       */
      db_user: string | null;
      /**
       * Jwt Secret
       * @description The JWT secret used for signing tokens. This field might be null or masked for security reasons.
       * @default null
       */
      jwt_secret: string | null;
      /**
       * Postgres Engine
       * @description The specific PostgreSQL engine or variant being used by the branch.
       */
      postgres_engine: string;
      /**
       * Postgres Version
       * @description The version of PostgreSQL used by this branch.
       */
      postgres_version: string;
      /**
       * Ref
       * @description The unique reference ID of the branch.
       */
      ref: string;
      /**
       * Release Channel
       * @description The release channel to which this branch is subscribed (e.g., 'stable', 'beta').
       */
      release_channel: string;
      /**
       * Status
       * @description The current operational status of the database branch.
       * @enum {string}
       */
      status: "ACTIVE_HEALTHY" | "ACTIVE_UNHEALTHY" | "COMING_UP" | "GOING_DOWN" | "INACTIVE" | "INIT_FAILED" | "REMOVED" | "RESTARTING" | "UNKNOWN" | "UPGRADING" | "PAUSING" | "RESTORING" | "RESTORE_FAILED" | "PAUSE_FAILED";
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
 * Type of SUPABASE's SUPABASE_GET_PROJECT_API_KEYS tool input.
 */
type SUPABASE_GET_PROJECT_API_KEYS_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project for which to retrieve API keys.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GET_PROJECT_API_KEYS tool output.
 */
type SUPABASE_GET_PROJECT_API_KEYS_OUTPUT = {
  /**
   * Data
   * @description A list of API key objects, each containing details about an API key associated with the project.
   */
  data?: {
      /**
       * Api Key
       * @description The API key string. This is the actual key used for authentication.
       */
      api_key: string;
      /**
       * Description
       * @description An optional user-provided description for the API key.
       * @default null
       */
      description: string | null;
      /**
       * Hash
       * @description An optional hash of the API key, used for verification purposes.
       * @default null
       */
      hash: string | null;
      /**
       * Id
       * @description An optional unique identifier for the API key record.
       * @default null
       */
      id: string | null;
      /**
       * Inserted At
       * @description Optional timestamp indicating when the API key was created, in ISO 8601 format.
       * @default null
       */
      inserted_at: string | null;
      /**
       * Name
       * @description A descriptive name for the API key.
       */
      name: string;
      /**
       * Prefix
       * @description An optional prefix string of the API key, often used for quick identification (e.g., 'sbp_').
       * @default null
       */
      prefix: string | null;
      /**
       * SecretJwtTemplate
       * @description Defines the template for JWTs, specifically the role.
       * @default null
       */
      secret_jwt_template: {
          /**
           * Role
           * @description The role claim to be included in JWTs generated using this API key (e.g., 'anon', 'service_role').
           */
          role: string;
      } | null;
      /**
       * Type
       * @description Optional dictionary containing type-specific information or metadata for the API key.
       * @default null
       */
      type: {
          [key: string]: unknown;
      } | null;
      /**
       * Updated At
       * @description Optional timestamp indicating when the API key was last updated, in ISO 8601 format.
       * @default null
       */
      updated_at: string | null;
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
 * Type of SUPABASE's SUPABASE_GET_PROJECT_S_PGBOUNCER_CONFIG tool input.
 */
type SUPABASE_GET_PROJECT_S_PGBOUNCER_CONFIG_INPUT = {
  /**
   * Ref
   * @description The unique ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GET_PROJECT_S_PGBOUNCER_CONFIG tool output.
 */
type SUPABASE_GET_PROJECT_S_PGBOUNCER_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed PgBouncer configuration settings for the specified project.
   */
  data?: {
      /**
       * Connection String
       * @description PgBouncer connection string (includes host, port, database name), excluding the user's password for security.
       * @default null
       */
      connection_string: string | null;
      /**
       * Default Pool Size
       * @description Default server connections per user/database pair in a pool; also defines max concurrent connections for a user to a specific database via PgBouncer.
       * @default null
       */
      default_pool_size: number | null;
      /**
       * Ignore Startup Parameters
       * @description A comma-separated list of startup parameters that PgBouncer will ignore when a client connects. Useful for compatibility with clients sending parameters PgBouncer doesn't handle, e.g., `extra_float_digits`.
       * @default null
       */
      ignore_startup_parameters: string | null;
      /**
       * Max Client Conn
       * @description Maximum simultaneous client connections PgBouncer will accept, limiting total connections from applications or services.
       * @default null
       */
      max_client_conn: number | null;
      /**
       * PoolMode
       * @description Specifies the transaction pooling mode used by PgBouncer. Determines how server connections are acquired and released.
       *       - `transaction`: Server connection is assigned to a client for the duration of a single transaction. Offers aggressive pooling.
       *       - `session`: Server connection is assigned to a client for its entire session. Useful for session-specific features.
       *       - `statement`: Server connection is assigned for a single statement (outside explicit transactions). Limited use cases.
       * @default null
       * @enum {string|null}
       */
      pool_mode: "transaction" | "session" | "statement" | null;
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
 * Type of SUPABASE's SUPABASE_GET_PROJECT_UPGRADE_ELIGIBILITY tool input.
 */
type SUPABASE_GET_PROJECT_UPGRADE_ELIGIBILITY_INPUT = {
  /**
   * Ref
   * @description Unique identifier of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GET_PROJECT_UPGRADE_ELIGIBILITY tool output.
 */
type SUPABASE_GET_PROJECT_UPGRADE_ELIGIBILITY_OUTPUT = {
  /**
   * Data
   * @description Detailed eligibility status and related information for the project upgrade.
   */
  data?: {
      /** Current App Version */
      current_app_version: string;
      /**
       * Current App Version Release Channel
       * @enum {string}
       */
      current_app_version_release_channel: "internal" | "alpha" | "beta" | "ga" | "withdrawn";
      /** Duration Estimate Hours */
      duration_estimate_hours: number;
      /** Eligible */
      eligible: boolean;
      /** Extension Dependent Objects */
      extension_dependent_objects: string[];
      /** Latest App Version */
      latest_app_version: string;
      /** Legacy Auth Custom Roles */
      legacy_auth_custom_roles: string[];
      /** Potential Breaking Changes */
      potential_breaking_changes: string[];
      /** Target Upgrade Versions */
      target_upgrade_versions: {
          /** App Version */
          app_version: string;
          /**
           * Postgres Version
           * @description Postgres engine version; defaults to the latest if not provided.
           * @enum {string}
           */
          postgres_version: "15";
          /**
           * Release Channel
           * @enum {string}
           */
          release_channel: "internal" | "alpha" | "beta" | "ga" | "withdrawn";
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
 * Type of SUPABASE's SUPABASE_GET_PROJECT_UPGRADE_STATUS tool input.
 */
type SUPABASE_GET_PROJECT_UPGRADE_STATUS_INPUT = {
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_GET_PROJECT_UPGRADE_STATUS tool output.
 */
type SUPABASE_GET_PROJECT_UPGRADE_STATUS_OUTPUT = {
  /**
   * Data
   * @description Contains the `DatabaseUpgradeStatus` object which provides detailed information about the project's database upgrade, including its current status, progress, target version, and any errors encountered.
   */
  data?: {
      /** Database Upgrade Status */
      databaseUpgradeStatus: {
          /**
           * Error
           * @description If an error occurred during the upgrade, this field contains a string code from the `Error` enum (e.g., '1_upgraded_instance_launch_failed') detailing the failure. Null if no error.
           * @default null
           * @enum {string|null}
           */
          error: "1_upgraded_instance_launch_failed" | "2_volume_detachchment_from_upgraded_instance_failed" | "3_volume_attachment_to_original_instance_failed" | "4_data_upgrade_initiation_failed" | "5_data_upgrade_completion_failed" | "6_volume_detachchment_from_original_instance_failed" | "7_volume_attachment_to_upgraded_instance_failed" | "8_upgrade_completion_failed" | "9_post_physical_backup_failed" | null;
          /**
           * Initiated At
           * @description ISO 8601 timestamp indicating when the database upgrade process was initiated for the project.
           */
          initiated_at: string;
          /**
           * Latest Status At
           * @description ISO 8601 timestamp of the last recorded status update during the upgrade process.
           */
          latest_status_at: string;
          /**
           * Progress
           * @description Indicates the current stage or last completed step of the upgrade process, as a string code from the `Progress` enum (e.g., '5_initiated_data_upgrade'). Null if progress is not applicable or hasn't started.
           * @default null
           * @enum {string|null}
           */
          progress: "0_requested" | "1_started" | "2_launched_upgraded_instance" | "3_detached_volume_from_upgraded_instance" | "4_attached_volume_to_original_instance" | "5_initiated_data_upgrade" | "6_completed_data_upgrade" | "7_detached_volume_from_original_instance" | "8_attached_volume_to_upgraded_instance" | "9_completed_upgrade" | "10_completed_post_physical_backup" | null;
          /**
           * Status
           * @description An integer code (0, 1, or 2) from the `Status` enum representing the overall status of the database upgrade (e.g., 0 for in-progress, 1 for completed, 2 for failed).
           * @enum {integer}
           */
          status: 0 | 1 | 2;
          /**
           * Target Version
           * @description The target PostgreSQL version number to which the project's database is being upgraded (e.g., 15.1).
           */
          target_version: number;
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
 * Type of SUPABASE's SUPABASE_GET_TABLE_SCHEMAS tool input.
 */
type SUPABASE_GET_TABLE_SCHEMAS_INPUT = {
  /**
   * Exclude Null Values
   * @description Whether to exclude properties with null values from the response for cleaner output
   * @default true
   */
  exclude_null_values: boolean;
  /**
   * Include Indexes
   * @description Whether to include index information in the response
   * @default false
   */
  include_indexes: boolean;
  /**
   * Include Relationships
   * @description Whether to include foreign key relationships in the response
   * @default true
   */
  include_relationships: boolean;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project
   */
  ref?: string;
  /**
   * Table Names
   * @description List of table names to retrieve schemas for. Tables can be from different schemas (e.g., 'public.users', 'operations.call_queue_items'). Without schema prefix, 'public' is assumed.
   */
  table_names?: string[];
};

/**
 * Type of SUPABASE's SUPABASE_GET_TABLE_SCHEMAS tool output.
 */
type SUPABASE_GET_TABLE_SCHEMAS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Tables that couldn't be found or accessed
       * @default null
       */
      errors: {
          /**
           * Error
           * @description Error message explaining why the table wasn't found
           */
          error: string;
          /**
           * Suggestions
           * @description Suggested table names that might be what the user is looking for
           * @default null
           */
          suggestions: string[] | null;
          /**
           * Table Name
           * @description The table name that was requested
           */
          table_name: string;
      }[] | null;
      /**
       * Tables
       * @description Successfully retrieved table schemas
       */
      tables: {
          /**
           * Columns
           * @description List of columns in the table
           */
          columns: {
              /**
               * Comment
               * @description Column comment/description if any
               * @default null
               */
              comment: string | null;
              /**
               * Data Type
               * @description PostgreSQL data type (e.g., 'text', 'integer', 'timestamp with time zone')
               */
              data_type: string;
              /**
               * Default Value
               * @description Default value expression if any
               * @default null
               */
              default_value: string | null;
              /**
               * Is Nullable
               * @description Whether the column allows NULL values
               */
              is_nullable: boolean;
              /**
               * Is Primary Key
               * @description Whether the column is a primary key
               */
              is_primary_key: boolean;
              /**
               * Is Unique
               * @description Whether the column has a unique constraint
               */
              is_unique: boolean;
              /**
               * Max Length
               * @description Maximum character length for string types
               * @default null
               */
              max_length: number | null;
              /**
               * Name
               * @description Column name
               */
              name: string;
              /**
               * Numeric Precision
               * @description Numeric precision for numeric types
               * @default null
               */
              numeric_precision: number | null;
              /**
               * Numeric Scale
               * @description Numeric scale for numeric types
               * @default null
               */
              numeric_scale: number | null;
              /**
               * Ordinal Position
               * @description Position of column in table (1-based)
               */
              ordinal_position: number;
          }[];
          /**
           * Comment
           * @description Table comment/description if any
           * @default null
           */
          comment: string | null;
          /**
           * Foreign Keys
           * @description Foreign key relationships
           * @default null
           */
          foreign_keys: {
              /**
               * Constraint Name
               * @description Name of the foreign key constraint
               */
              constraint_name: string;
              /**
               * On Delete
               * @description Action on delete (e.g., 'CASCADE', 'RESTRICT', 'SET NULL')
               */
              on_delete: string;
              /**
               * On Update
               * @description Action on update (e.g., 'CASCADE', 'RESTRICT', 'SET NULL')
               */
              on_update: string;
              /**
               * Source Column
               * @description Column name in the source table
               */
              source_column: string;
              /**
               * Target Column
               * @description Column name in the referenced table
               */
              target_column: string;
              /**
               * Target Schema
               * @description Schema of the referenced table
               */
              target_schema: string;
              /**
               * Target Table
               * @description Name of the referenced table
               */
              target_table: string;
          }[] | null;
          /**
           * Full Name
           * @description Fully qualified table name (schema.table)
           */
          full_name: string;
          /**
           * Indexes
           * @description Table indexes
           * @default null
           */
          indexes: {
              /**
               * Columns
               * @description List of column names in the index
               */
              columns: string[];
              /**
               * Is Primary
               * @description Whether this is the primary key index
               */
              is_primary: boolean;
              /**
               * Is Unique
               * @description Whether the index enforces uniqueness
               */
              is_unique: boolean;
              /**
               * Name
               * @description Index name
               */
              name: string;
              /**
               * Type
               * @description Index type (e.g., 'btree', 'hash', 'gin', 'gist')
               */
              type: string;
          }[] | null;
          /**
           * Primary Keys
           * @description List of primary key column names
           */
          primary_keys: string[];
          /**
           * Row Count
           * @description Approximate number of rows in the table
           * @default null
           */
          row_count: number | null;
          /**
           * Schema Name
           * @description Database schema name (e.g., 'public', 'operations')
           */
          schema_name: string;
          /**
           * Size Bytes
           * @description Approximate table size in bytes
           * @default null
           */
          size_bytes: number | null;
          /**
           * Table Name
           * @description Table name
           */
          table_name: string;
      }[];
      /**
       * Total Found
       * @description Number of tables successfully retrieved
       */
      total_found: number;
      /**
       * Total Requested
       * @description Total number of tables requested
       */
      total_requested: number;
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
 * Type of SUPABASE's SUPABASE_LISTS_ALL_BACKUPS tool input.
 */
type SUPABASE_LISTS_ALL_BACKUPS_INPUT = {
  /**
   * Ref
   * @description The unique identifier (reference string) of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_LISTS_ALL_BACKUPS tool output.
 */
type SUPABASE_LISTS_ALL_BACKUPS_OUTPUT = {
  /**
   * Data
   * @description Detailed backup information: region, WAL-G/PITR status, and list of individual backups.
   */
  data?: {
      /**
       * Backups
       * @description List of backup objects, each detailing a specific backup.
       */
      backups: {
          /**
           * Inserted At
           * @description The timestamp (ISO 8601 format) indicating when the backup record was created.
           */
          inserted_at: string;
          /**
           * Is Physical Backup
           * @description Indicates if this is a physical backup rather than a logical one.
           */
          is_physical_backup: boolean;
          /**
           * Status
           * @description The current status of the backup (e.g., COMPLETED, FAILED).
           * @enum {string}
           */
          status: "COMPLETED" | "FAILED" | "PENDING" | "REMOVED" | "ARCHIVED" | "CANCELLED";
      }[];
      /**
       * Physical Backup Data
       * @description Information on physical backups, including earliest and latest backup dates.
       */
      physical_backup_data: {
          /**
           * Earliest Physical Backup Date Unix
           * @description The Unix timestamp for the earliest available physical backup date, if applicable.
           * @default null
           */
          earliest_physical_backup_date_unix: number | null;
          /**
           * Latest Physical Backup Date Unix
           * @description The Unix timestamp for the latest available physical backup date, if applicable.
           * @default null
           */
          latest_physical_backup_date_unix: number | null;
      };
      /**
       * Pitr Enabled
       * @description Indicates if Point-In-Time Recovery (PITR) is enabled.
       */
      pitr_enabled: boolean;
      /**
       * Region
       * @description The region where the Supabase project is hosted.
       */
      region: string;
      /**
       * Walg Enabled
       * @description Indicates if WAL-G (Write-Ahead Log archiving for Point-In-Time Recovery) is enabled.
       */
      walg_enabled: boolean;
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
 * Type of SUPABASE's SUPABASE_LISTS_ALL_BUCKETS tool input.
 */
type SUPABASE_LISTS_ALL_BUCKETS_INPUT = {
  /**
   * Ref
   * @description The unique identifier of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_LISTS_ALL_BUCKETS tool output.
 */
type SUPABASE_LISTS_ALL_BUCKETS_OUTPUT = {
  /**
   * Data
   * @description List of storage bucket details.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp (ISO 8601) when the bucket was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the storage bucket.
       */
      id: string;
      /**
       * Name
       * @description Name of the storage bucket.
       */
      name: string;
      /**
       * Owner
       * @description Identifier of the bucket owner.
       */
      owner: string;
      /**
       * Public
       * @description Indicates if the bucket is publicly accessible.
       */
      public: boolean;
      /**
       * Updated At
       * @description Timestamp (ISO 8601) when the bucket was last updated.
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
 * Type of SUPABASE's SUPABASE_LISTS_ALL_SSO_PROVIDERS tool input.
 */
type SUPABASE_LISTS_ALL_SSO_PROVIDERS_INPUT = {
  /**
   * Ref
   * @description The project's reference ID. Typically found in dashboard settings or the API URL.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_LISTS_ALL_SSO_PROVIDERS tool output.
 */
type SUPABASE_LISTS_ALL_SSO_PROVIDERS_OUTPUT = {
  /**
   * Data
   * @description List of SSO provider configurations for the project. Each item, detailed in the `Model` schema, includes SAML settings and associated domains.
   */
  data?: {
      /** Items */
      items: {
          /**
           * Created At
           * @default null
           */
          created_at: string | null;
          /**
           * Domains
           * @default null
           */
          domains: {
              /**
               * Created At
               * @default null
               */
              created_at: string | null;
              /**
               * Domain
               * @default null
               */
              domain: string | null;
              /** Id */
              id: string;
              /**
               * Updated At
               * @default null
               */
              updated_at: string | null;
          }[] | null;
          /** Id */
          id: string;
          /**
           * Saml
           * @default null
           */
          saml: {
              /**
               * AttributeMapping
               * @default null
               */
              attribute_mapping: {
                  /** Keys */
                  keys: {
                      [key: string]: {
                          /**
                           * Array
                           * @default null
                           */
                          array: boolean | null;
                          /**
                           * Default
                           * @default null
                           */
                          default: {
                              [key: string]: unknown;
                          } | number | string | boolean | null;
                          /**
                           * Name
                           * @default null
                           */
                          name: string | null;
                          /**
                           * Names
                           * @default null
                           */
                          names: string[] | null;
                      };
                  };
              } | null;
              /** Entity Id */
              entity_id: string;
              /** Id */
              id: string;
              /**
               * Metadata Url
               * @default null
               */
              metadata_url: string | null;
              /**
               * Metadata Xml
               * @default null
               */
              metadata_xml: string | null;
          } | null;
          /**
           * Updated At
           * @default null
           */
          updated_at: string | null;
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
 * Type of SUPABASE's SUPABASE_LISTS_SQL_SNIPPETS_FOR_THE_LOGGED_IN_USER tool input.
 */
type SUPABASE_LISTS_SQL_SNIPPETS_FOR_THE_LOGGED_IN_USER_INPUT = {
  /**
   * Project Ref
   * @description The unique identifier for your Supabase project. It is a 20-digit string used to reference and manage your project in API endpoints. This can be found in Supabase Studio under Settings > General > Project Settings > Reference ID.
   */
  project_ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_LISTS_SQL_SNIPPETS_FOR_THE_LOGGED_IN_USER tool output.
 */
type SUPABASE_LISTS_SQL_SNIPPETS_FOR_THE_LOGGED_IN_USER_OUTPUT = {
  /**
   * Data
   * @description A list of SQL snippets associated with the logged-in user and specified project, if provided.
   */
  data?: {
      /** Data */
      data: {
          /**
           * Description
           * @default null
           */
          description: string | null;
          /** Id */
          id: string;
          /** Inserted At */
          inserted_at: string;
          /** Name */
          name: string;
          /** Owner */
          owner: {
              /** Id */
              id: number;
              /** Username */
              username: string;
          };
          /** Project */
          project: {
              /** Id */
              id: number;
              /** Name */
              name: string;
          };
          /**
           * Type
           * @enum {string}
           */
          type: "sql";
          /** Updated At */
          updated_at: string;
          /** Updated By */
          updated_by: {
              /** Id */
              id: number;
              /** Username */
              username: string;
          };
          /**
           * Visibility
           * @enum {string}
           */
          visibility: "user" | "project" | "org" | "public";
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
 * Type of SUPABASE's SUPABASE_LIST_ALL_DATABASE_BRANCHES tool input.
 */
type SUPABASE_LIST_ALL_DATABASE_BRANCHES_INPUT = {
  /**
   * Ref
   * @description The unique identifier (reference ID) of the Supabase project. This ID can be found in your project's dashboard URL (e.g., `https://supabase.com/dashboard/project/<project_id>`).
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_LIST_ALL_DATABASE_BRANCHES tool output.
 */
type SUPABASE_LIST_ALL_DATABASE_BRANCHES_OUTPUT = {
  /**
   * Data
   * @description A list of database branch objects, each detailing a branch for the specified project.
   */
  data?: {
      /** Created At */
      created_at: string;
      /**
       * Git Branch
       * @default null
       */
      git_branch: string | null;
      /** Id */
      id: string;
      /** Is Default */
      is_default: boolean;
      /**
       * Latest Check Run Id
       * @default null
       */
      latest_check_run_id: number | null;
      /** Name */
      name: string;
      /** Parent Project Ref */
      parent_project_ref: string;
      /** Persistent */
      persistent: boolean;
      /**
       * Pr Number
       * @default null
       */
      pr_number: number | null;
      /** Project Ref */
      project_ref: string;
      /** Reset On Push */
      reset_on_push: boolean;
      /**
       * Status
       * @enum {string}
       */
      status: "CREATING_PROJECT" | "RUNNING_MIGRATIONS" | "MIGRATIONS_PASSED" | "MIGRATIONS_FAILED" | "FUNCTIONS_DEPLOYED" | "FUNCTIONS_FAILED";
      /** Updated At */
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
 * Type of SUPABASE's SUPABASE_LIST_ALL_FUNCTIONS tool input.
 */
type SUPABASE_LIST_ALL_FUNCTIONS_INPUT = {
  /**
   * Ref
   * @description The unique identifier of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_LIST_ALL_FUNCTIONS tool output.
 */
type SUPABASE_LIST_ALL_FUNCTIONS_OUTPUT = {
  /**
   * Data
   * @description A list containing details of all Edge Functions within the specified project.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp indicating when the Edge Function was created, in seconds since the Unix epoch.
       */
      created_at: number;
      /**
       * Entrypoint Path
       * @description The file path to the main entrypoint of the Edge Function within the project.
       * @default null
       */
      entrypoint_path: string | null;
      /**
       * Id
       * @description The unique identifier of the Edge Function.
       */
      id: string;
      /**
       * Import Map
       * @description Indicates whether an import map is used for the Edge Function. True if used, False otherwise, null if not set.
       * @default null
       */
      import_map: boolean | null;
      /**
       * Import Map Path
       * @description The file path to the import map for the Edge Function, if an import map is used.
       * @default null
       */
      import_map_path: string | null;
      /**
       * Name
       * @description The name of the Edge Function.
       */
      name: string;
      /**
       * Slug
       * @description The URL-friendly identifier (slug) of the Edge Function.
       */
      slug: string;
      /**
       * Status
       * @description The current operational status of the Edge Function (e.g., ACTIVE, REMOVED, THROTTLED).
       * @enum {string}
       */
      status: "ACTIVE" | "REMOVED" | "THROTTLED";
      /**
       * Updated At
       * @description Timestamp indicating when the Edge Function was last updated, in seconds since the Unix epoch.
       */
      updated_at: number;
      /**
       * Verify Jwt
       * @description Indicates whether JWT verification is enabled for the Edge Function. True if enabled, False otherwise, null if not set.
       * @default null
       */
      verify_jwt: boolean | null;
      /**
       * Version
       * @description The version number of the Edge Function.
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
 * Type of SUPABASE's SUPABASE_LIST_ALL_ORGANIZATIONS tool input.
 */
type SUPABASE_LIST_ALL_ORGANIZATIONS_INPUT = object;

/**
 * Type of SUPABASE's SUPABASE_LIST_ALL_ORGANIZATIONS tool output.
 */
type SUPABASE_LIST_ALL_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description A list of organizations, where each item provides the organization's unique 'id' and 'name'.
   */
  data?: {
      /** Id */
      id: string;
      /** Name */
      name: string;
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
 * Type of SUPABASE's SUPABASE_LIST_ALL_PROJECTS tool input.
 */
type SUPABASE_LIST_ALL_PROJECTS_INPUT = object;

/**
 * Type of SUPABASE's SUPABASE_LIST_ALL_PROJECTS tool output.
 */
type SUPABASE_LIST_ALL_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description A list of projects, where each item provides details about a specific project.
   */
  data?: {
      /**
       * Created At
       * @description The timestamp (ISO 8601 format) indicating when the project was created.
       */
      created_at: string;
      /**
       * Database
       * @default null
       */
      database: {
          /**
           * Host
           * @description The hostname or IP address of the project's database.
           */
          host: string;
          /**
           * Postgres Engine
           * @description The specific PostgreSQL engine variant used by the project (e.g., 'Supabase PostgreSQL').
           */
          postgres_engine: string;
          /**
           * Release Channel
           * @description The update release channel for the project's database (e.g., 'stable', 'beta').
           */
          release_channel: string;
          /**
           * Version
           * @description The version of the PostgreSQL database running for the project.
           */
          version: string;
      } | null;
      /**
       * Id
       * @description The unique identifier for the project.
       */
      id: string;
      /**
       * Name
       * @description The user-defined name of the project.
       */
      name: string;
      /**
       * Organization Id
       * @description The unique identifier (slug) of the organization that owns the project.
       */
      organization_id: string;
      /**
       * Region
       * @description The geographical region where the project is hosted.
       */
      region: string;
      /**
       * Status
       * @description Enumerates the possible operational statuses of a Supabase project.
       *     - ACTIVE_HEALTHY: Project is active and operating normally.
       *     - ACTIVE_UNHEALTHY: Project is active but experiencing operational issues.
       *     - COMING_UP: Project is in the process of starting up.
       *     - GOING_DOWN: Project is in the process of shutting down.
       *     - INACTIVE: Project is currently inactive or paused.
       *     - INIT_FAILED: Project initialization failed.
       *     - REMOVED: Project has been permanently removed.
       *     - RESTARTING: Project is currently restarting.
       *     - UNKNOWN: The project's status could not be determined.
       *     - UPGRADING: Project is currently undergoing an upgrade.
       *     - PAUSING: Project is in the process of being paused.
       *     - RESTORING: Project is currently being restored from a backup.
       *     - RESTORE_FAILED: Attempt to restore the project from backup failed.
       *     - PAUSE_FAILED: Attempt to pause the project failed.
       * @enum {string}
       */
      status: "ACTIVE_HEALTHY" | "ACTIVE_UNHEALTHY" | "COMING_UP" | "GOING_DOWN" | "INACTIVE" | "INIT_FAILED" | "REMOVED" | "RESTARTING" | "UNKNOWN" | "UPGRADING" | "PAUSING" | "RESTORING" | "RESTORE_FAILED" | "PAUSE_FAILED";
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
 * Type of SUPABASE's SUPABASE_LIST_ALL_SECRETS tool input.
 */
type SUPABASE_LIST_ALL_SECRETS_INPUT = {
  /**
   * Ref
   * @description The unique reference ID (ref) of the Supabase project whose secrets are to be retrieved.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_LIST_ALL_SECRETS tool output.
 */
type SUPABASE_LIST_ALL_SECRETS_OUTPUT = {
  /**
   * Data
   * @description Contains the list of `ModelItem` objects, where each object represents a secret with its `name` and `value`. Secret values might be masked.
   */
  data?: {
      /** Name */
      name: string;
      /** Value */
      value: string;
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
 * Type of SUPABASE's SUPABASE_LIST_MEMBERS_OF_AN_ORGANIZATION tool input.
 */
type SUPABASE_LIST_MEMBERS_OF_AN_ORGANIZATION_INPUT = {
  /**
   * Slug
   * @description The unique identifier (slug) of the organization for which to list members.
   */
  slug?: string;
};

/**
 * Type of SUPABASE's SUPABASE_LIST_MEMBERS_OF_AN_ORGANIZATION tool output.
 */
type SUPABASE_LIST_MEMBERS_OF_AN_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A list of members belonging to the specified organization, including their user ID, username, email (if available), assigned role name, and Multi-Factor Authentication (MFA) status.
   */
  data?: {
      /**
       * Email
       * @default null
       */
      email: string | null;
      /** Mfa Enabled */
      mfa_enabled: boolean;
      /** Role Name */
      role_name: string;
      /** User Id */
      user_id: string;
      /** User Name */
      user_name: string;
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
 * Type of SUPABASE's SUPABASE_REMOVES_A_SSO_PROVIDER_BY_ITS_UUID tool input.
 */
type SUPABASE_REMOVES_A_SSO_PROVIDER_BY_ITS_UUID_INPUT = {
  /**
   * Provider Id
   * @description The unique identifier (UUID) of the SSO provider to be removed.
   */
  provider_id?: string;
  /**
   * Ref
   * @description The unique identifier for your Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_REMOVES_A_SSO_PROVIDER_BY_ITS_UUID tool output.
 */
type SUPABASE_REMOVES_A_SSO_PROVIDER_BY_ITS_UUID_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the SSO provider that was removed.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp of when the SSO provider was originally created, in ISO 8601 format.
       * @default null
       */
      created_at: string | null;
      /**
       * Domains
       * @description List of domains that were associated with this SSO provider.
       * @default null
       */
      domains: {
          /**
           * Created At
           * @description Timestamp of when the domain was associated with the SSO provider, in ISO 8601 format.
           * @default null
           */
          created_at: string | null;
          /**
           * Domain
           * @description The domain string (e.g., 'example.com').
           * @default null
           */
          domain: string | null;
          /**
           * Id
           * @description The unique identifier of the domain.
           */
          id: string;
          /**
           * Updated At
           * @description Timestamp of when the domain association was last updated, in ISO 8601 format.
           * @default null
           */
          updated_at: string | null;
      }[] | null;
      /**
       * Id
       * @description The unique identifier (UUID) of the SSO provider that was removed.
       */
      id: string;
      /**
       * Saml
       * @description SAML specific configuration details for the SSO provider, if applicable.
       * @default null
       */
      saml: {
          /**
           * AttributeMapping
           * @description Defines the mapping between SAML attributes from the Identity Provider and Supabase user attributes. This is used to populate user details in Supabase after successful SAML authentication.
           * @default null
           */
          attribute_mapping: {
              /**
               * Keys
               * @description Defines how attributes from the identity provider (IdP) are mapped to standard Supabase user claims (e.g., 'email', 'full_name'). Each key in this dictionary is a Supabase claim, and the value (a `Keys` object) specifies which IdP attribute(s) to use for that claim.
               */
              keys: {
                  [key: string]: {
                      /**
                       * Array
                       * @description Specifies if the IdP attribute is expected to be an array. If true, the first element is used unless 'names' is also used.
                       * @default null
                       */
                      array: boolean | null;
                      /**
                       * Default
                       * @description The default value for an attribute if not provided by the IdP.
                       * @default null
                       */
                      default: {
                          [key: string]: unknown;
                      } | number | string | boolean | null;
                      /**
                       * Name
                       * @description The name of the attribute in the IdP's response to map to a Supabase claim.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Names
                       * @description A list of attribute names from the IdP's response. If multiple names are provided, the first one found will be used.
                       * @default null
                       */
                      names: string[] | null;
                  };
              };
          } | null;
          /**
           * Entity Id
           * @description The Entity ID of the SAML Identity Provider.
           */
          entity_id: string;
          /**
           * Id
           * @description The unique identifier of the SAML configuration.
           */
          id: string;
          /**
           * Metadata Url
           * @description Optional URL to the SAML IdP metadata XML.
           * @default null
           */
          metadata_url: string | null;
          /**
           * Metadata Xml
           * @description Optional raw SAML IdP metadata XML.
           * @default null
           */
          metadata_xml: string | null;
      } | null;
      /**
       * Updated At
       * @description Timestamp of when the SSO provider was last updated, in ISO 8601 format.
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
 * Type of SUPABASE's SUPABASE_RESETS_A_DATABASE_BRANCH tool input.
 */
type SUPABASE_RESETS_A_DATABASE_BRANCH_INPUT = {
  /**
   * Branch Id
   * @description The unique identifier of the database branch to reset.
   */
  branch_id?: string;
};

/**
 * Type of SUPABASE's SUPABASE_RESETS_A_DATABASE_BRANCH tool output.
 */
type SUPABASE_RESETS_A_DATABASE_BRANCH_OUTPUT = {
  /**
   * Data
   * @description Contains the confirmation message from the branch reset operation.
   */
  data?: {
      /**
       * Message
       * @description A message confirming the status of the branch reset operation.
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
 * Type of SUPABASE's SUPABASE_RESTORES_A_PITR_BACKUP_FOR_A_DATABASE tool input.
 */
type SUPABASE_RESTORES_A_PITR_BACKUP_FOR_A_DATABASE_INPUT = {
  /**
   * Recovery Time Target Unix
   * @description Unix timestamp (seconds) for the desired database restoration point.
   */
  recovery_time_target_unix?: number;
  /**
   * Ref
   * @description Unique identifier of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_RESTORES_A_PITR_BACKUP_FOR_A_DATABASE tool output.
 */
type SUPABASE_RESTORES_A_PITR_BACKUP_FOR_A_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Details of the restoration process.
   */
  data?: {
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
 * Type of SUPABASE's SUPABASE_RETRIEVE_A_FUNCTION tool input.
 */
type SUPABASE_RETRIEVE_A_FUNCTION_INPUT = {
  /**
   * Function Slug
   * @description The unique identifier (slug) for the Edge Function.
   */
  function_slug?: string;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_RETRIEVE_A_FUNCTION tool output.
 */
type SUPABASE_RETRIEVE_A_FUNCTION_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed information of the retrieved Supabase Edge Function.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp of when the Edge Function was created, in seconds since epoch.
       */
      created_at: number;
      /**
       * Entrypoint Path
       * @description The file path to the main entrypoint of the Edge Function.
       * @default null
       */
      entrypoint_path: string | null;
      /**
       * Id
       * @description The unique identifier of the Edge Function.
       */
      id: string;
      /**
       * Import Map
       * @description Indicates if an import map is used for the Edge Function.
       * @default null
       */
      import_map: boolean | null;
      /**
       * Import Map Path
       * @description The file path to the import map used by the Edge Function.
       * @default null
       */
      import_map_path: string | null;
      /**
       * Name
       * @description The display name of the Edge Function.
       */
      name: string;
      /**
       * Slug
       * @description The URL-friendly identifier (slug) of the Edge Function.
       */
      slug: string;
      /**
       * Status
       * @description The current operational status of the Edge Function.
       * @enum {string}
       */
      status: "ACTIVE" | "REMOVED" | "THROTTLED";
      /**
       * Updated At
       * @description Timestamp of when the Edge Function was last updated, in seconds since epoch.
       */
      updated_at: number;
      /**
       * Verify Jwt
       * @description Indicates if JWT verification is enabled for the Edge Function.
       * @default null
       */
      verify_jwt: boolean | null;
      /**
       * Version
       * @description The version number of the Edge Function.
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
 * Type of SUPABASE's SUPABASE_RETRIEVE_A_FUNCTION_BODY tool input.
 */
type SUPABASE_RETRIEVE_A_FUNCTION_BODY_INPUT = {
  /**
   * Function Slug
   * @description The unique identifier (slug) of the serverless Edge Function whose body is to be retrieved. This is typically the function's name.
   */
  function_slug?: string;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_RETRIEVE_A_FUNCTION_BODY tool output.
 */
type SUPABASE_RETRIEVE_A_FUNCTION_BODY_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SUPABASE's SUPABASE_RETURNS_PROJECT_S_READONLY_MODE_STATUS tool input.
 */
type SUPABASE_RETURNS_PROJECT_S_READONLY_MODE_STATUS_INPUT = {
  /**
   * Ref
   * @description Project reference ID, found in your project's dashboard URL (e.g., `https://supabase.com/dashboard/project/<project-ref>`).
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_RETURNS_PROJECT_S_READONLY_MODE_STATUS tool output.
 */
type SUPABASE_RETURNS_PROJECT_S_READONLY_MODE_STATUS_OUTPUT = {
  /**
   * Data
   * @description Details of the project's read-only mode status.
   */
  data?: {
      /**
       * Enabled
       * @description Indicates whether read-only mode is currently enabled for the project.
       */
      enabled: boolean;
      /**
       * Override Active Until
       * @description The timestamp (typically ISO 8601 format) indicating when the read-only mode override will expire. This field is relevant only if `override_enabled` is true.
       */
      override_active_until: string;
      /**
       * Override Enabled
       * @description Indicates whether a read-only mode override is currently active.
       */
      override_enabled: boolean;
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
 * Type of SUPABASE's SUPABASE_UPDATES_A_SSO_PROVIDER_BY_ITS_UUID tool input.
 */
type SUPABASE_UPDATES_A_SSO_PROVIDER_BY_ITS_UUID_INPUT = {
  /**
   * Attribute  Mapping  Keys
   * @description Defines mapping of SAML assertion attributes to Supabase user attributes (e.g., 'email', 'full_name'). Values specify IdP attribute mapping using 'name', 'names' (for concatenation), or 'default'.
   */
  attribute__mapping__keys?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Domains
   * @description Email domains to associate with this SSO provider for user authentication.
   */
  domains?: string[];
  /**
   * Metadata Url
   * @description URL pointing to the SAML metadata XML. Use either this or `metadata_xml`.
   */
  metadata_url?: string;
  /**
   * Metadata Xml
   * @description SAML metadata XML content from the identity provider. Use either this or `metadata_url`.
   */
  metadata_xml?: string;
  /**
   * Provider Id
   * @description UUID of the SSO provider to update.
   */
  provider_id?: string;
  /**
   * Ref
   * @description Unique reference ID of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_UPDATES_A_SSO_PROVIDER_BY_ITS_UUID tool output.
 */
type SUPABASE_UPDATES_A_SSO_PROVIDER_BY_ITS_UUID_OUTPUT = {
  /**
   * Data
   * @description Full configuration of the SSO provider after the update.
   */
  data?: {
      /**
       * Created At
       * @default null
       */
      created_at: string | null;
      /**
       * Domains
       * @default null
       */
      domains: {
          /**
           * Created At
           * @default null
           */
          created_at: string | null;
          /**
           * Domain
           * @default null
           */
          domain: string | null;
          /** Id */
          id: string;
          /**
           * Updated At
           * @default null
           */
          updated_at: string | null;
      }[] | null;
      /** Id */
      id: string;
      /**
       * Saml
       * @default null
       */
      saml: {
          /**
           * AttributeMapping
           * @default null
           */
          attribute_mapping: {
              /** Keys */
              keys: {
                  [key: string]: {
                      /**
                       * Array
                       * @default null
                       */
                      array: boolean | null;
                      /**
                       * Default
                       * @default null
                       */
                      default: {
                          [key: string]: unknown;
                      } | number | string | boolean | null;
                      /**
                       * Name
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Names
                       * @default null
                       */
                      names: string[] | null;
                  };
              };
          } | null;
          /** Entity Id */
          entity_id: string;
          /** Id */
          id: string;
          /**
           * Metadata Url
           * @default null
           */
          metadata_url: string | null;
          /**
           * Metadata Xml
           * @default null
           */
          metadata_xml: string | null;
      } | null;
      /**
       * Updated At
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
 * Type of SUPABASE's SUPABASE_UPDATES_PROJECT_S_POSTGREST_CONFIG tool input.
 */
type SUPABASE_UPDATES_PROJECT_S_POSTGREST_CONFIG_INPUT = {
  /**
   * Db Extra Search Path
   * @description A comma-separated string of additional PostgreSQL schemas to search for objects if not found in the primary schema(s) defined by `db_schema`. An empty string can be used to clear existing paths.
   */
  db_extra_search_path?: string;
  /**
   * Db Pool
   * @description The maximum number of connections in the PostgreSQL connection pool for PostgREST. If `null` or not provided, the pool size may be automatically configured based on compute size.
   */
  db_pool?: number;
  /**
   * Db Schema
   * @description A comma-separated string of PostgreSQL schemas to be exposed through the PostgREST API (e.g., 'public,api').
   */
  db_schema?: string;
  /**
   * Max Rows
   * @description The maximum number of rows PostgREST can return in a single response; this setting helps control payload size and query performance.
   */
  max_rows?: number;
  /**
   * Ref
   * @description The unique identifier (reference) of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_UPDATES_PROJECT_S_POSTGREST_CONFIG tool output.
 */
type SUPABASE_UPDATES_PROJECT_S_POSTGREST_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Contains the updated PostgREST configuration settings for the project.
   */
  data?: {
      /**
       * Db Extra Search Path
       * @description The configured comma-separated string of additional PostgreSQL schemas searched for objects.
       */
      db_extra_search_path: string;
      /**
       * Db Pool
       * @description The configured maximum number of connections in the PostgreSQL connection pool. If `null`, the value is automatically configured based on compute size.
       */
      db_pool: number;
      /**
       * Db Schema
       * @description The configured comma-separated string of PostgreSQL schemas exposed through the PostgREST API.
       */
      db_schema: string;
      /**
       * Max Rows
       * @description The configured maximum number of rows PostgREST will return in a single response.
       */
      max_rows: number;
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
 * Type of SUPABASE's SUPABASE_UPDATES_PROJECT_S_POSTGRES_CONFIG tool input.
 */
type SUPABASE_UPDATES_PROJECT_S_POSTGRES_CONFIG_INPUT = {
  /**
   * Effective Cache Size
   * @description Estimated disk cache size for a single query (e.g., '4GB', '512MB').
   */
  effective_cache_size?: string;
  /**
   * Maintenance Work Mem
   * @description Maximum memory for maintenance operations like VACUUM, CREATE INDEX (e.g., '64MB', '1GB').
   */
  maintenance_work_mem?: string;
  /**
   * Max Connections
   * @description Maximum concurrent database connections. Typically between 1 and 262143.
   */
  max_connections?: number;
  /**
   * Max Locks Per Transaction
   * @description Controls the average number of object locks allocated per transaction. Typically between 10 and 2147483640.
   */
  max_locks_per_transaction?: number;
  /**
   * Max Parallel Maintenance Workers
   * @description Maximum parallel processes for a single maintenance utility command. Typically between 0 and 1024.
   */
  max_parallel_maintenance_workers?: number;
  /**
   * Max Parallel Workers
   * @description Maximum workers the system can support for parallel queries. Typically between 0 and 1024.
   */
  max_parallel_workers?: number;
  /**
   * Max Parallel Workers Per Gather
   * @description Maximum workers for a single Gather or Gather Merge node in a parallel query. Typically between 0 and 1024.
   */
  max_parallel_workers_per_gather?: number;
  /**
   * Max Slot Wal Keep Size
   * @description Maximum WAL file size replication slots can retain in pg_wal (e.g., '1GB', '512MB'). '0' might mean unlimited; check PostgreSQL docs.
   */
  max_slot_wal_keep_size?: string;
  /**
   * Max Standby Archive Delay
   * @description Maximum delay before canceling queries on a hot standby server processing archived WAL data (e.g., '30s', '0ms' to disable).
   */
  max_standby_archive_delay?: string;
  /**
   * Max Standby Streaming Delay
   * @description Maximum delay before canceling queries on a hot standby server processing streamed WAL data (e.g., '30s', '0ms' to disable).
   */
  max_standby_streaming_delay?: string;
  /**
   * Max Wal Size
   * @description WAL size that triggers a checkpoint (e.g., '1GB', '2048MB').
   */
  max_wal_size?: string;
  /**
   * Max Worker Processes
   * @description Maximum background processes the system can support. Typically between 0 and 262143.
   */
  max_worker_processes?: number;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
  /**
   * Session Replication Role
   * @description Controls firing of replication-related triggers and rules for the current session.
   * @enum {string}
   */
  session_replication_role?: "local" | "origin" | "replica";
  /**
   * Shared Buffers
   * @description Memory for shared memory buffers (e.g., '128MB', '1GB').
   */
  shared_buffers?: string;
  /**
   * Statement Timeout
   * @description Maximum allowed duration for any SQL statement (e.g., '10000ms', '30s'); '0' typically disables timeout.
   */
  statement_timeout?: string;
  /**
   * Wal Keep Size
   * @description Minimum size of past WAL log segments in pg_wal for standby servers (e.g., '128MB', '512MB'); replaces older wal_keep_segments.
   */
  wal_keep_size?: string;
  /**
   * Work Mem
   * @description Memory for internal sorts and hash tables before writing to temp disk files (e.g., '4MB', '64MB').
   */
  work_mem?: string;
};

/**
 * Type of SUPABASE's SUPABASE_UPDATES_PROJECT_S_POSTGRES_CONFIG tool output.
 */
type SUPABASE_UPDATES_PROJECT_S_POSTGRES_CONFIG_OUTPUT = {
  /**
   * Data
   * @description The updated PostgreSQL configuration reflecting the applied changes.
   */
  data?: {
      /**
       * Effective Cache Size
       * @default null
       */
      effective_cache_size: string | null;
      /**
       * Maintenance Work Mem
       * @default null
       */
      maintenance_work_mem: string | null;
      /**
       * Max Connections
       * @default null
       */
      max_connections: number | null;
      /**
       * Max Locks Per Transaction
       * @default null
       */
      max_locks_per_transaction: number | null;
      /**
       * Max Parallel Maintenance Workers
       * @default null
       */
      max_parallel_maintenance_workers: number | null;
      /**
       * Max Parallel Workers
       * @default null
       */
      max_parallel_workers: number | null;
      /**
       * Max Parallel Workers Per Gather
       * @default null
       */
      max_parallel_workers_per_gather: number | null;
      /**
       * Max Slot Wal Keep Size
       * @default null
       */
      max_slot_wal_keep_size: string | null;
      /**
       * Max Standby Archive Delay
       * @default null
       */
      max_standby_archive_delay: string | null;
      /**
       * Max Standby Streaming Delay
       * @default null
       */
      max_standby_streaming_delay: string | null;
      /**
       * Max Wal Size
       * @default null
       */
      max_wal_size: string | null;
      /**
       * Max Worker Processes
       * @default null
       */
      max_worker_processes: number | null;
      /**
       * SessionReplicationRole
       * @default null
       * @enum {string|null}
       */
      session_replication_role: "origin" | "replica" | "local" | null;
      /**
       * Shared Buffers
       * @default null
       */
      shared_buffers: string | null;
      /**
       * Statement Timeout
       * @default null
       */
      statement_timeout: string | null;
      /**
       * Wal Keep Size
       * @default null
       */
      wal_keep_size: string | null;
      /**
       * Work Mem
       * @default null
       */
      work_mem: string | null;
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
 * Type of SUPABASE's SUPABASE_UPDATES_PROJECT_S_SUPAVISOR_CONFIG tool input.
 */
type SUPABASE_UPDATES_PROJECT_S_SUPAVISOR_CONFIG_INPUT = {
  /**
   * Default Pool Size
   * @description Default number of connections per user for the connection pool; helps manage concurrent database connections and performance. Optimal value depends on project's compute add-on size and workload.
   */
  default_pool_size?: number;
  /**
   * Pool Mode
   * @description This field is deprecated and is ignored in this request. It previously controlled the pooling mode (session or transaction).
   * @enum {string}
   */
  pool_mode?: "session" | "transaction";
  /**
   * Ref
   * @description The unique identifier of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_UPDATES_PROJECT_S_SUPAVISOR_CONFIG tool output.
 */
type SUPABASE_UPDATES_PROJECT_S_SUPAVISOR_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Contains the updated Supavisor configuration, including `default_pool_size` and current `pool_mode`.
   */
  data?: {
      /** Default Pool Size */
      default_pool_size: number;
      /**
       * Pool Mode
       * @enum {string}
       */
      pool_mode: "transaction" | "session";
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
 * Type of SUPABASE's SUPABASE_UPDATE_A_FUNCTION tool input.
 */
type SUPABASE_UPDATE_A_FUNCTION_INPUT = {
  /**
   * Body
   * @description New source code (e.g., Deno/TypeScript) or base64-encoded ESZIP content for the function, sent in the request body.
   * @default null
   */
  body: string | null;
  /**
   * Entrypoint Path
   * @description Path to the main Deno script for the function (query parameter).
   * @default null
   */
  entrypoint_path: string | null;
  /**
   * Function Slug
   * @description The current slug (unique identifier) of the Edge Function to be updated.
   */
  function_slug?: string;
  /**
   * Import Map
   * @description Whether to use an import map for the function (query parameter).
   * @default null
   */
  import_map: boolean | null;
  /**
   * Import Map Path
   * @description Path to the import map file (query parameter).
   * @default null
   */
  import_map_path: string | null;
  /**
   * Name
   * @description Optional new name for the function. This value is sent in the request body as 'name'.
   * @default null
   */
  name: string | null;
  /**
   * Ref
   * @description The unique reference ID of the Supabase project.
   */
  ref?: string;
  /**
   * Slug
   * @description Optional new slug for the function. If provided as a query parameter, this changes the function's access URL.
   * @default null
   */
  slug: string | null;
  /**
   * Verify Jwt
   * @description Specifies whether JWT verification should be enabled. This value is sent in the request body as 'verify_jwt'.
   * @default null
   */
  verify_jwt: boolean | null;
};

/**
 * Type of SUPABASE's SUPABASE_UPDATE_A_FUNCTION tool output.
 */
type SUPABASE_UPDATE_A_FUNCTION_OUTPUT = {
  /**
   * Data
   * @description Contains the full details of the updated Edge Function.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp indicating when the Edge Function was created, in seconds since the Unix epoch.
       */
      created_at: number;
      /**
       * Entrypoint Path
       * @description The path to the main Deno script for this Edge Function.
       * @default null
       */
      entrypoint_path: string | null;
      /**
       * Id
       * @description The unique identifier of the Edge Function.
       */
      id: string;
      /**
       * Import Map
       * @description Boolean indicating if an import map is used for this Edge Function.
       * @default null
       */
      import_map: boolean | null;
      /**
       * Import Map Path
       * @description The path to the import map file for this Edge Function.
       * @default null
       */
      import_map_path: string | null;
      /**
       * Name
       * @description The name of the Edge Function.
       */
      name: string;
      /**
       * Slug
       * @description The slug of the Edge Function, used in its access URL.
       */
      slug: string;
      /**
       * Status
       * @description The current operational status of the Edge Function (e.g., ACTIVE, REMOVED, THROTTLED).
       * @enum {string}
       */
      status: "ACTIVE" | "REMOVED" | "THROTTLED";
      /**
       * Updated At
       * @description Timestamp indicating when the Edge Function was last updated, in seconds since the Unix epoch.
       */
      updated_at: number;
      /**
       * Verify Jwt
       * @description Boolean indicating if JWT verification is enabled for this Edge Function.
       * @default null
       */
      verify_jwt: boolean | null;
      /**
       * Version
       * @description The numerical version of the Edge Function.
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
 * Type of SUPABASE's SUPABASE_UPDATE_DATABASE_BRANCH_CONFIG tool input.
 */
type SUPABASE_UPDATE_DATABASE_BRANCH_CONFIG_INPUT = {
  /**
   * Branch Id
   * @description Unique identifier of the database branch to update.
   */
  branch_id?: string;
  /**
   * Branch Name
   * @description New name for the database branch. If not provided, the name remains unchanged.
   * @default null
   */
  branch_name: string | null;
  /**
   * Git Branch
   * @description Name of the Git branch to associate with this database branch. If not provided, the association remains unchanged.
   * @default null
   */
  git_branch: string | null;
  /**
   * Persistent
   * @description If true, the database branch is persistent; non-persistent branches may be auto-cleaned. If not provided, this setting remains unchanged.
   * @default null
   */
  persistent: boolean | null;
  /**
   * Reset On Push
   * @description If true, resets the database branch on new push to the linked Git branch. If not provided, this setting remains unchanged.
   * @default null
   */
  reset_on_push: boolean | null;
  /**
   * StatusEnm0
   * @description Desired status for the branch. Direct setting might be overridden by system processes. If not provided, status remains unchanged.
   * @default null
   * @enum {string|null}
   */
  status: "CREATING_PROJECT" | "FUNCTIONS_DEPLOYED" | "FUNCTIONS_FAILED" | "MIGRATIONS_FAILED" | "MIGRATIONS_PASSED" | "RUNNING_MIGRATIONS" | null;
};

/**
 * Type of SUPABASE's SUPABASE_UPDATE_DATABASE_BRANCH_CONFIG tool output.
 */
type SUPABASE_UPDATE_DATABASE_BRANCH_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Updated configuration details of the database branch.
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601).
       */
      created_at: string;
      /**
       * Git Branch
       * @description Associated Git branch, if any.
       * @default null
       */
      git_branch: string | null;
      /**
       * Id
       * @description Unique identifier of the database branch.
       */
      id: string;
      /**
       * Is Default
       * @description Indicates if this is the default branch for the project.
       */
      is_default: boolean;
      /**
       * Latest Check Run Id
       * @description ID of the latest check run, often related to CI/CD.
       * @default null
       */
      latest_check_run_id: number | null;
      /**
       * Name
       * @description Name of the database branch.
       */
      name: string;
      /**
       * Parent Project Ref
       * @description Reference ID of the parent Supabase project, if applicable (e.g., for forked projects).
       */
      parent_project_ref: string;
      /**
       * Persistent
       * @description Indicates if the branch is persistent.
       */
      persistent: boolean;
      /**
       * Pr Number
       * @description Associated pull request number, if applicable.
       * @default null
       */
      pr_number: number | null;
      /**
       * Project Ref
       * @description Reference ID of the Supabase project this branch belongs to.
       */
      project_ref: string;
      /**
       * Reset On Push
       * @description Indicates if the branch resets on push to the linked Git branch.
       */
      reset_on_push: boolean;
      /**
       * Status
       * @description Current status of the database branch.
       * @enum {string}
       */
      status: "CREATING_PROJECT" | "RUNNING_MIGRATIONS" | "MIGRATIONS_PASSED" | "MIGRATIONS_FAILED" | "FUNCTIONS_DEPLOYED" | "FUNCTIONS_FAILED";
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601).
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
 * Type of SUPABASE's SUPABASE_UPDATE_PROJECT_CUSTOM_HOSTNAME_ACTION tool input.
 */
type SUPABASE_UPDATE_PROJECT_CUSTOM_HOSTNAME_ACTION_INPUT = {
  /**
   * Custom Hostname
   * @description Desired custom hostname (e.g., 'api.example.com') to associate with the project's services.
   */
  custom_hostname?: string;
  /**
   * Ref
   * @description The unique identifier of the Supabase project.
   */
  ref?: string;
};

/**
 * Type of SUPABASE's SUPABASE_UPDATE_PROJECT_CUSTOM_HOSTNAME_ACTION tool output.
 */
type SUPABASE_UPDATE_PROJECT_CUSTOM_HOSTNAME_ACTION_OUTPUT = {
  /**
   * Data
   * @description The response payload containing the status and details of the custom hostname configuration update.
   */
  data?: {
      /**
       * Custom Hostname
       * @description The custom hostname being configured.
       */
      custom_hostname: string;
      /**
       * Data
       * @description Contains the detailed response from the custom hostname update operation, including success status, errors, messages, and the configuration result.
       */
      data: {
          /**
           * Errors
           * @description Errors that occurred during the operation.
           */
          errors: {
              [key: string]: unknown;
          }[];
          /**
           * Messages
           * @description Informational messages related to the operation.
           */
          messages: {
              [key: string]: unknown;
          }[];
          /**
           * Result
           * @description The detailed result of the custom hostname configuration update.
           */
          result: {
              /**
               * Custom Origin Server
               * @description The custom origin server associated with this hostname configuration.
               */
              custom_origin_server: string;
              /**
               * Hostname
               * @description The custom hostname that was configured.
               */
              hostname: string;
              /**
               * Id
               * @description The unique identifier of the custom hostname configuration.
               */
              id: string;
              /**
               * Ownership Verification
               * @description Details for verifying domain ownership.
               */
              ownership_verification: {
                  /**
                   * Name
                   * @description The name of the DNS record for ownership verification.
                   */
                  name: string;
                  /**
                   * Type
                   * @description The type of DNS record required for domain ownership verification (e.g., 'TXT').
                   */
                  type: string;
                  /**
                   * Value
                   * @description The value of the DNS record for ownership verification.
                   */
                  value: string;
              };
              /**
               * Ssl
               * @description SSL certificate configuration details for the custom hostname.
               */
              ssl: {
                  /**
                   * Status
                   * @description The SSL certificate provisioning status for the custom hostname.
                   */
                  status: string;
                  /**
                   * Validation Errors
                   * @description Errors encountered during SSL validation, if any.
                   * @default null
                   */
                  validation_errors: {
                      /**
                       * Message
                       * @description A message describing the validation error.
                       */
                      message: string;
                  }[] | null;
                  /**
                   * Validation Records
                   * @description DNS records required for domain ownership validation for SSL issuance.
                   */
                  validation_records: {
                      /**
                       * Txt Name
                       * @description The name of the TXT record for domain validation.
                       */
                      txt_name: string;
                      /**
                       * Txt Value
                       * @description The value of the TXT record for domain validation.
                       */
                      txt_value: string;
                  }[];
              };
              /**
               * Status
               * @description The overall status of the custom hostname configuration.
               */
              status: string;
              /**
               * Verification Errors
               * @description Errors encountered during domain verification, if any.
               * @default null
               */
              verification_errors: string[] | null;
          };
          /**
           * Success
           * @description Indicates whether the operation was successful.
           */
          success: boolean;
      };
      /**
       * Status
       * @description The current status of the custom hostname configuration process.
       * @enum {string}
       */
      status: "1_not_started" | "2_initiated" | "3_challenge_verified" | "4_origin_setup_completed" | "5_services_reconfigured";
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
 * Type of SUPABASE's SUPABASE_UPDATE_SSL_ENFORCEMENT_CONFIG tool input.
 */
type SUPABASE_UPDATE_SSL_ENFORCEMENT_CONFIG_INPUT = {
  /**
   * Ref
   * @description The unique identifier of the Supabase project.
   */
  ref?: string;
  /**
   * Requested Config  Database
   * @description Desired SSL enforcement state for the project's database (`true` to enable, `false` to disable).
   */
  requestedConfig__database?: boolean;
};

/**
 * Type of SUPABASE's SUPABASE_UPDATE_SSL_ENFORCEMENT_CONFIG tool output.
 */
type SUPABASE_UPDATE_SSL_ENFORCEMENT_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Contains the outcome of the SSL enforcement update request, including the new configuration status and whether the update was successful.
   */
  data?: {
      /**
       * Applied Successfully
       * @description Indicates if the SSL enforcement configuration was successfully updated (`true`) or not (`false`).
       */
      appliedSuccessfully: boolean;
      /**
       * Current Config
       * @description Details of the SSL enforcement configuration after the update attempt.
       */
      currentConfig: {
          /**
           * Database
           * @description Current SSL enforcement state for the database (`true` if enforced, `false` otherwise).
           */
          database: boolean;
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
 * Type map of all available tool input types for toolkit "SUPABASE".
 */
export type SUPABASE_TOOL_INPUTS = {
  ALPHA_CREATES_A_NEW_API_KEY_FOR_THE_PROJECT: SUPABASE_ALPHA_CREATES_A_NEW_API_KEY_FOR_THE_PROJECT_INPUT
  ALPHA_DELETES_AN_API_KEY_FOR_THE_PROJECT: SUPABASE_ALPHA_DELETES_AN_API_KEY_FOR_THE_PROJECT_INPUT
  ALPHA_GET_A_THIRD_PARTY_INTEGRATION: SUPABASE_ALPHA_GET_A_THIRD_PARTY_INTEGRATION_INPUT
  ALPHA_LISTS_ALL_THIRD_PARTY_AUTH_INTEGRATIONS: SUPABASE_ALPHA_LISTS_ALL_THIRD_PARTY_AUTH_INTEGRATIONS_INPUT
  ALPHA_REMOVES_A_THIRD_PARTY_AUTH_INTEGRATION: SUPABASE_ALPHA_REMOVES_A_THIRD_PARTY_AUTH_INTEGRATION_INPUT
  ALPHA_UPDATES_AN_API_KEY_FOR_THE_PROJECT: SUPABASE_ALPHA_UPDATES_AN_API_KEY_FOR_THE_PROJECT_INPUT
  BETA_ACTIVATES_A_CUSTOM_HOSTNAME_FOR_A_PROJECT: SUPABASE_BETA_ACTIVATES_A_CUSTOM_HOSTNAME_FOR_A_PROJECT_INPUT
  BETA_ACTIVATES_A_VANITY_SUBDOMAIN_FOR_A_PROJECT: SUPABASE_BETA_ACTIVATES_A_VANITY_SUBDOMAIN_FOR_A_PROJECT_INPUT
  BETA_AUTHORIZE_USER_THROUGH_OAUTH: SUPABASE_BETA_AUTHORIZE_USER_THROUGH_OAUTH_INPUT
  BETA_CHECKS_VANITY_SUBDOMAIN_AVAILABILITY: SUPABASE_BETA_CHECKS_VANITY_SUBDOMAIN_AVAILABILITY_INPUT
  BETA_ENABLES_DATABASE_WEBHOOKS_ON_THE_PROJECT: SUPABASE_BETA_ENABLES_DATABASE_WEBHOOKS_ON_THE_PROJECT_INPUT
  BETA_GETS_CURRENT_VANITY_SUBDOMAIN_CONFIG: SUPABASE_BETA_GETS_CURRENT_VANITY_SUBDOMAIN_CONFIG_INPUT
  BETA_GETS_PROJECT_S_CUSTOM_HOSTNAME_CONFIG: SUPABASE_BETA_GETS_PROJECT_S_CUSTOM_HOSTNAME_CONFIG_INPUT
  BETA_GETS_PROJECT_S_NETWORK_BANS: SUPABASE_BETA_GETS_PROJECT_S_NETWORK_BANS_INPUT
  BETA_GETS_PROJECT_S_NETWORK_RESTRICTIONS: SUPABASE_BETA_GETS_PROJECT_S_NETWORK_RESTRICTIONS_INPUT
  BETA_GETS_PROJECT_S_PGSODIUM_CONFIG: SUPABASE_BETA_GETS_PROJECT_S_PGSODIUM_CONFIG_INPUT
  BETA_GET_PROJECT_S_SSL_ENFORCEMENT_CONFIGURATION: SUPABASE_BETA_GET_PROJECT_S_SSL_ENFORCEMENT_CONFIGURATION_INPUT
  BETA_REMOVE_A_READ_REPLICA: SUPABASE_BETA_REMOVE_A_READ_REPLICA_INPUT
  BETA_REMOVE_NETWORK_BANS: SUPABASE_BETA_REMOVE_NETWORK_BANS_INPUT
  BETA_RUN_SQL_QUERY: SUPABASE_BETA_RUN_SQL_QUERY_INPUT
  BETA_SET_UP_A_READ_REPLICA: SUPABASE_BETA_SET_UP_A_READ_REPLICA_INPUT
  BETA_UPDATES_PROJECT_S_NETWORK_RESTRICTIONS: SUPABASE_BETA_UPDATES_PROJECT_S_NETWORK_RESTRICTIONS_INPUT
  BETA_UPGRADES_THE_PROJECT_S_POSTGRES_VERSION: SUPABASE_BETA_UPGRADES_THE_PROJECT_S_POSTGRES_VERSION_INPUT
  CONFIG_PGSODIUM_UPDATE_WITH_ROOT_KEY_WARNING: SUPABASE_CONFIG_PGSODIUM_UPDATE_WITH_ROOT_KEY_WARNING_INPUT
  CREATES_A_NEW_SSO_PROVIDER: SUPABASE_CREATES_A_NEW_SSO_PROVIDER_INPUT
  CREATES_A_NEW_THIRD_PARTY_AUTH_INTEGRATION: SUPABASE_CREATES_A_NEW_THIRD_PARTY_AUTH_INTEGRATION_INPUT
  CREATE_AN_ORGANIZATION: SUPABASE_CREATE_AN_ORGANIZATION_INPUT
  CREATE_A_DATABASE_BRANCH: SUPABASE_CREATE_A_DATABASE_BRANCH_INPUT
  CREATE_A_FUNCTION: SUPABASE_CREATE_A_FUNCTION_INPUT
  CREATE_A_PROJECT: SUPABASE_CREATE_A_PROJECT_INPUT
  CUSTOM_HOSTNAME_DNS_VERIFICATION: SUPABASE_CUSTOM_HOSTNAME_DNS_VERIFICATION_INPUT
  DELETES_THE_GIVEN_PROJECT: SUPABASE_DELETES_THE_GIVEN_PROJECT_INPUT
  DELETE_A_DATABASE_BRANCH: SUPABASE_DELETE_A_DATABASE_BRANCH_INPUT
  DELETE_A_FUNCTION: SUPABASE_DELETE_A_FUNCTION_INPUT
  DELETE_CUSTOM_HOSTNAME_CONFIG: SUPABASE_DELETE_CUSTOM_HOSTNAME_CONFIG_INPUT
  DELETE_PROJECT_VANITY_SUBDOMAIN: SUPABASE_DELETE_PROJECT_VANITY_SUBDOMAIN_INPUT
  DEPLOY_FUNCTION: SUPABASE_DEPLOY_FUNCTION_INPUT
  DISABLES_PREVIEW_BRANCHING: SUPABASE_DISABLES_PREVIEW_BRANCHING_INPUT
  DISABLE_PROJECT_READONLY: SUPABASE_DISABLE_PROJECT_READONLY_INPUT
  EXCHANGE_O_AUTH_TOKEN: SUPABASE_EXCHANGE_O_AUTH_TOKEN_INPUT
  GENERATE_TYPE_SCRIPT_TYPES: SUPABASE_GENERATE_TYPE_SCRIPT_TYPES_INPUT
  GETS_A_SPECIFIC_SQL_SNIPPET: SUPABASE_GETS_A_SPECIFIC_SQL_SNIPPET_INPUT
  GETS_A_SSO_PROVIDER_BY_ITS_UUID: SUPABASE_GETS_A_SSO_PROVIDER_BY_ITS_UUID_INPUT
  GETS_INFORMATION_ABOUT_THE_ORGANIZATION: SUPABASE_GETS_INFORMATION_ABOUT_THE_ORGANIZATION_INPUT
  GETS_PROJECT_S_AUTH_CONFIG: SUPABASE_GETS_PROJECT_S_AUTH_CONFIG_INPUT
  GETS_PROJECT_S_POSTGREST_CONFIG: SUPABASE_GETS_PROJECT_S_POSTGREST_CONFIG_INPUT
  GETS_PROJECT_S_POSTGRES_CONFIG: SUPABASE_GETS_PROJECT_S_POSTGRES_CONFIG_INPUT
  GETS_PROJECT_S_SERVICE_HEALTH_STATUS: SUPABASE_GETS_PROJECT_S_SERVICE_HEALTH_STATUS_INPUT
  GETS_PROJECT_S_SUPAVISOR_CONFIG: SUPABASE_GETS_PROJECT_S_SUPAVISOR_CONFIG_INPUT
  GET_DATABASE_BRANCH_CONFIG: SUPABASE_GET_DATABASE_BRANCH_CONFIG_INPUT
  GET_PROJECT_API_KEYS: SUPABASE_GET_PROJECT_API_KEYS_INPUT
  GET_PROJECT_S_PGBOUNCER_CONFIG: SUPABASE_GET_PROJECT_S_PGBOUNCER_CONFIG_INPUT
  GET_PROJECT_UPGRADE_ELIGIBILITY: SUPABASE_GET_PROJECT_UPGRADE_ELIGIBILITY_INPUT
  GET_PROJECT_UPGRADE_STATUS: SUPABASE_GET_PROJECT_UPGRADE_STATUS_INPUT
  GET_TABLE_SCHEMAS: SUPABASE_GET_TABLE_SCHEMAS_INPUT
  LISTS_ALL_BACKUPS: SUPABASE_LISTS_ALL_BACKUPS_INPUT
  LISTS_ALL_BUCKETS: SUPABASE_LISTS_ALL_BUCKETS_INPUT
  LISTS_ALL_SSO_PROVIDERS: SUPABASE_LISTS_ALL_SSO_PROVIDERS_INPUT
  LISTS_SQL_SNIPPETS_FOR_THE_LOGGED_IN_USER: SUPABASE_LISTS_SQL_SNIPPETS_FOR_THE_LOGGED_IN_USER_INPUT
  LIST_ALL_DATABASE_BRANCHES: SUPABASE_LIST_ALL_DATABASE_BRANCHES_INPUT
  LIST_ALL_FUNCTIONS: SUPABASE_LIST_ALL_FUNCTIONS_INPUT
  LIST_ALL_ORGANIZATIONS: SUPABASE_LIST_ALL_ORGANIZATIONS_INPUT
  LIST_ALL_PROJECTS: SUPABASE_LIST_ALL_PROJECTS_INPUT
  LIST_ALL_SECRETS: SUPABASE_LIST_ALL_SECRETS_INPUT
  LIST_MEMBERS_OF_AN_ORGANIZATION: SUPABASE_LIST_MEMBERS_OF_AN_ORGANIZATION_INPUT
  REMOVES_A_SSO_PROVIDER_BY_ITS_UUID: SUPABASE_REMOVES_A_SSO_PROVIDER_BY_ITS_UUID_INPUT
  RESETS_A_DATABASE_BRANCH: SUPABASE_RESETS_A_DATABASE_BRANCH_INPUT
  RESTORES_A_PITR_BACKUP_FOR_A_DATABASE: SUPABASE_RESTORES_A_PITR_BACKUP_FOR_A_DATABASE_INPUT
  RETRIEVE_A_FUNCTION: SUPABASE_RETRIEVE_A_FUNCTION_INPUT
  RETRIEVE_A_FUNCTION_BODY: SUPABASE_RETRIEVE_A_FUNCTION_BODY_INPUT
  RETURNS_PROJECT_S_READONLY_MODE_STATUS: SUPABASE_RETURNS_PROJECT_S_READONLY_MODE_STATUS_INPUT
  UPDATES_A_SSO_PROVIDER_BY_ITS_UUID: SUPABASE_UPDATES_A_SSO_PROVIDER_BY_ITS_UUID_INPUT
  UPDATES_PROJECT_S_POSTGREST_CONFIG: SUPABASE_UPDATES_PROJECT_S_POSTGREST_CONFIG_INPUT
  UPDATES_PROJECT_S_POSTGRES_CONFIG: SUPABASE_UPDATES_PROJECT_S_POSTGRES_CONFIG_INPUT
  UPDATES_PROJECT_S_SUPAVISOR_CONFIG: SUPABASE_UPDATES_PROJECT_S_SUPAVISOR_CONFIG_INPUT
  UPDATE_A_FUNCTION: SUPABASE_UPDATE_A_FUNCTION_INPUT
  UPDATE_DATABASE_BRANCH_CONFIG: SUPABASE_UPDATE_DATABASE_BRANCH_CONFIG_INPUT
  UPDATE_PROJECT_CUSTOM_HOSTNAME_ACTION: SUPABASE_UPDATE_PROJECT_CUSTOM_HOSTNAME_ACTION_INPUT
  UPDATE_SSL_ENFORCEMENT_CONFIG: SUPABASE_UPDATE_SSL_ENFORCEMENT_CONFIG_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SUPABASE".
 */
export type SUPABASE_TOOL_OUTPUTS = {
  ALPHA_CREATES_A_NEW_API_KEY_FOR_THE_PROJECT: SUPABASE_ALPHA_CREATES_A_NEW_API_KEY_FOR_THE_PROJECT_OUTPUT
  ALPHA_DELETES_AN_API_KEY_FOR_THE_PROJECT: SUPABASE_ALPHA_DELETES_AN_API_KEY_FOR_THE_PROJECT_OUTPUT
  ALPHA_GET_A_THIRD_PARTY_INTEGRATION: SUPABASE_ALPHA_GET_A_THIRD_PARTY_INTEGRATION_OUTPUT
  ALPHA_LISTS_ALL_THIRD_PARTY_AUTH_INTEGRATIONS: SUPABASE_ALPHA_LISTS_ALL_THIRD_PARTY_AUTH_INTEGRATIONS_OUTPUT
  ALPHA_REMOVES_A_THIRD_PARTY_AUTH_INTEGRATION: SUPABASE_ALPHA_REMOVES_A_THIRD_PARTY_AUTH_INTEGRATION_OUTPUT
  ALPHA_UPDATES_AN_API_KEY_FOR_THE_PROJECT: SUPABASE_ALPHA_UPDATES_AN_API_KEY_FOR_THE_PROJECT_OUTPUT
  BETA_ACTIVATES_A_CUSTOM_HOSTNAME_FOR_A_PROJECT: SUPABASE_BETA_ACTIVATES_A_CUSTOM_HOSTNAME_FOR_A_PROJECT_OUTPUT
  BETA_ACTIVATES_A_VANITY_SUBDOMAIN_FOR_A_PROJECT: SUPABASE_BETA_ACTIVATES_A_VANITY_SUBDOMAIN_FOR_A_PROJECT_OUTPUT
  BETA_AUTHORIZE_USER_THROUGH_OAUTH: SUPABASE_BETA_AUTHORIZE_USER_THROUGH_OAUTH_OUTPUT
  BETA_CHECKS_VANITY_SUBDOMAIN_AVAILABILITY: SUPABASE_BETA_CHECKS_VANITY_SUBDOMAIN_AVAILABILITY_OUTPUT
  BETA_ENABLES_DATABASE_WEBHOOKS_ON_THE_PROJECT: SUPABASE_BETA_ENABLES_DATABASE_WEBHOOKS_ON_THE_PROJECT_OUTPUT
  BETA_GETS_CURRENT_VANITY_SUBDOMAIN_CONFIG: SUPABASE_BETA_GETS_CURRENT_VANITY_SUBDOMAIN_CONFIG_OUTPUT
  BETA_GETS_PROJECT_S_CUSTOM_HOSTNAME_CONFIG: SUPABASE_BETA_GETS_PROJECT_S_CUSTOM_HOSTNAME_CONFIG_OUTPUT
  BETA_GETS_PROJECT_S_NETWORK_BANS: SUPABASE_BETA_GETS_PROJECT_S_NETWORK_BANS_OUTPUT
  BETA_GETS_PROJECT_S_NETWORK_RESTRICTIONS: SUPABASE_BETA_GETS_PROJECT_S_NETWORK_RESTRICTIONS_OUTPUT
  BETA_GETS_PROJECT_S_PGSODIUM_CONFIG: SUPABASE_BETA_GETS_PROJECT_S_PGSODIUM_CONFIG_OUTPUT
  BETA_GET_PROJECT_S_SSL_ENFORCEMENT_CONFIGURATION: SUPABASE_BETA_GET_PROJECT_S_SSL_ENFORCEMENT_CONFIGURATION_OUTPUT
  BETA_REMOVE_A_READ_REPLICA: SUPABASE_BETA_REMOVE_A_READ_REPLICA_OUTPUT
  BETA_REMOVE_NETWORK_BANS: SUPABASE_BETA_REMOVE_NETWORK_BANS_OUTPUT
  BETA_RUN_SQL_QUERY: SUPABASE_BETA_RUN_SQL_QUERY_OUTPUT
  BETA_SET_UP_A_READ_REPLICA: SUPABASE_BETA_SET_UP_A_READ_REPLICA_OUTPUT
  BETA_UPDATES_PROJECT_S_NETWORK_RESTRICTIONS: SUPABASE_BETA_UPDATES_PROJECT_S_NETWORK_RESTRICTIONS_OUTPUT
  BETA_UPGRADES_THE_PROJECT_S_POSTGRES_VERSION: SUPABASE_BETA_UPGRADES_THE_PROJECT_S_POSTGRES_VERSION_OUTPUT
  CONFIG_PGSODIUM_UPDATE_WITH_ROOT_KEY_WARNING: SUPABASE_CONFIG_PGSODIUM_UPDATE_WITH_ROOT_KEY_WARNING_OUTPUT
  CREATES_A_NEW_SSO_PROVIDER: SUPABASE_CREATES_A_NEW_SSO_PROVIDER_OUTPUT
  CREATES_A_NEW_THIRD_PARTY_AUTH_INTEGRATION: SUPABASE_CREATES_A_NEW_THIRD_PARTY_AUTH_INTEGRATION_OUTPUT
  CREATE_AN_ORGANIZATION: SUPABASE_CREATE_AN_ORGANIZATION_OUTPUT
  CREATE_A_DATABASE_BRANCH: SUPABASE_CREATE_A_DATABASE_BRANCH_OUTPUT
  CREATE_A_FUNCTION: SUPABASE_CREATE_A_FUNCTION_OUTPUT
  CREATE_A_PROJECT: SUPABASE_CREATE_A_PROJECT_OUTPUT
  CUSTOM_HOSTNAME_DNS_VERIFICATION: SUPABASE_CUSTOM_HOSTNAME_DNS_VERIFICATION_OUTPUT
  DELETES_THE_GIVEN_PROJECT: SUPABASE_DELETES_THE_GIVEN_PROJECT_OUTPUT
  DELETE_A_DATABASE_BRANCH: SUPABASE_DELETE_A_DATABASE_BRANCH_OUTPUT
  DELETE_A_FUNCTION: SUPABASE_DELETE_A_FUNCTION_OUTPUT
  DELETE_CUSTOM_HOSTNAME_CONFIG: SUPABASE_DELETE_CUSTOM_HOSTNAME_CONFIG_OUTPUT
  DELETE_PROJECT_VANITY_SUBDOMAIN: SUPABASE_DELETE_PROJECT_VANITY_SUBDOMAIN_OUTPUT
  DEPLOY_FUNCTION: SUPABASE_DEPLOY_FUNCTION_OUTPUT
  DISABLES_PREVIEW_BRANCHING: SUPABASE_DISABLES_PREVIEW_BRANCHING_OUTPUT
  DISABLE_PROJECT_READONLY: SUPABASE_DISABLE_PROJECT_READONLY_OUTPUT
  EXCHANGE_O_AUTH_TOKEN: SUPABASE_EXCHANGE_O_AUTH_TOKEN_OUTPUT
  GENERATE_TYPE_SCRIPT_TYPES: SUPABASE_GENERATE_TYPE_SCRIPT_TYPES_OUTPUT
  GETS_A_SPECIFIC_SQL_SNIPPET: SUPABASE_GETS_A_SPECIFIC_SQL_SNIPPET_OUTPUT
  GETS_A_SSO_PROVIDER_BY_ITS_UUID: SUPABASE_GETS_A_SSO_PROVIDER_BY_ITS_UUID_OUTPUT
  GETS_INFORMATION_ABOUT_THE_ORGANIZATION: SUPABASE_GETS_INFORMATION_ABOUT_THE_ORGANIZATION_OUTPUT
  GETS_PROJECT_S_AUTH_CONFIG: SUPABASE_GETS_PROJECT_S_AUTH_CONFIG_OUTPUT
  GETS_PROJECT_S_POSTGREST_CONFIG: SUPABASE_GETS_PROJECT_S_POSTGREST_CONFIG_OUTPUT
  GETS_PROJECT_S_POSTGRES_CONFIG: SUPABASE_GETS_PROJECT_S_POSTGRES_CONFIG_OUTPUT
  GETS_PROJECT_S_SERVICE_HEALTH_STATUS: SUPABASE_GETS_PROJECT_S_SERVICE_HEALTH_STATUS_OUTPUT
  GETS_PROJECT_S_SUPAVISOR_CONFIG: SUPABASE_GETS_PROJECT_S_SUPAVISOR_CONFIG_OUTPUT
  GET_DATABASE_BRANCH_CONFIG: SUPABASE_GET_DATABASE_BRANCH_CONFIG_OUTPUT
  GET_PROJECT_API_KEYS: SUPABASE_GET_PROJECT_API_KEYS_OUTPUT
  GET_PROJECT_S_PGBOUNCER_CONFIG: SUPABASE_GET_PROJECT_S_PGBOUNCER_CONFIG_OUTPUT
  GET_PROJECT_UPGRADE_ELIGIBILITY: SUPABASE_GET_PROJECT_UPGRADE_ELIGIBILITY_OUTPUT
  GET_PROJECT_UPGRADE_STATUS: SUPABASE_GET_PROJECT_UPGRADE_STATUS_OUTPUT
  GET_TABLE_SCHEMAS: SUPABASE_GET_TABLE_SCHEMAS_OUTPUT
  LISTS_ALL_BACKUPS: SUPABASE_LISTS_ALL_BACKUPS_OUTPUT
  LISTS_ALL_BUCKETS: SUPABASE_LISTS_ALL_BUCKETS_OUTPUT
  LISTS_ALL_SSO_PROVIDERS: SUPABASE_LISTS_ALL_SSO_PROVIDERS_OUTPUT
  LISTS_SQL_SNIPPETS_FOR_THE_LOGGED_IN_USER: SUPABASE_LISTS_SQL_SNIPPETS_FOR_THE_LOGGED_IN_USER_OUTPUT
  LIST_ALL_DATABASE_BRANCHES: SUPABASE_LIST_ALL_DATABASE_BRANCHES_OUTPUT
  LIST_ALL_FUNCTIONS: SUPABASE_LIST_ALL_FUNCTIONS_OUTPUT
  LIST_ALL_ORGANIZATIONS: SUPABASE_LIST_ALL_ORGANIZATIONS_OUTPUT
  LIST_ALL_PROJECTS: SUPABASE_LIST_ALL_PROJECTS_OUTPUT
  LIST_ALL_SECRETS: SUPABASE_LIST_ALL_SECRETS_OUTPUT
  LIST_MEMBERS_OF_AN_ORGANIZATION: SUPABASE_LIST_MEMBERS_OF_AN_ORGANIZATION_OUTPUT
  REMOVES_A_SSO_PROVIDER_BY_ITS_UUID: SUPABASE_REMOVES_A_SSO_PROVIDER_BY_ITS_UUID_OUTPUT
  RESETS_A_DATABASE_BRANCH: SUPABASE_RESETS_A_DATABASE_BRANCH_OUTPUT
  RESTORES_A_PITR_BACKUP_FOR_A_DATABASE: SUPABASE_RESTORES_A_PITR_BACKUP_FOR_A_DATABASE_OUTPUT
  RETRIEVE_A_FUNCTION: SUPABASE_RETRIEVE_A_FUNCTION_OUTPUT
  RETRIEVE_A_FUNCTION_BODY: SUPABASE_RETRIEVE_A_FUNCTION_BODY_OUTPUT
  RETURNS_PROJECT_S_READONLY_MODE_STATUS: SUPABASE_RETURNS_PROJECT_S_READONLY_MODE_STATUS_OUTPUT
  UPDATES_A_SSO_PROVIDER_BY_ITS_UUID: SUPABASE_UPDATES_A_SSO_PROVIDER_BY_ITS_UUID_OUTPUT
  UPDATES_PROJECT_S_POSTGREST_CONFIG: SUPABASE_UPDATES_PROJECT_S_POSTGREST_CONFIG_OUTPUT
  UPDATES_PROJECT_S_POSTGRES_CONFIG: SUPABASE_UPDATES_PROJECT_S_POSTGRES_CONFIG_OUTPUT
  UPDATES_PROJECT_S_SUPAVISOR_CONFIG: SUPABASE_UPDATES_PROJECT_S_SUPAVISOR_CONFIG_OUTPUT
  UPDATE_A_FUNCTION: SUPABASE_UPDATE_A_FUNCTION_OUTPUT
  UPDATE_DATABASE_BRANCH_CONFIG: SUPABASE_UPDATE_DATABASE_BRANCH_CONFIG_OUTPUT
  UPDATE_PROJECT_CUSTOM_HOSTNAME_ACTION: SUPABASE_UPDATE_PROJECT_CUSTOM_HOSTNAME_ACTION_OUTPUT
  UPDATE_SSL_ENFORCEMENT_CONFIG: SUPABASE_UPDATE_SSL_ENFORCEMENT_CONFIG_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SUPABASE toolkit.
 */
export const SUPABASE = {
  slug: "supabase",
  tools: {
    /**
     * Creates a 'publishable' or 'secret' api key for an existing supabase project, optionally with a description; 'secret' keys can have customized jwt templates.
     */
    ALPHA_CREATES_A_NEW_API_KEY_FOR_THE_PROJECT: "SUPABASE_ALPHA_CREATES_A_NEW_API_KEY_FOR_THE_PROJECT",
    /**
     * Permanently deletes a specific api key (identified by `id`) from a supabase project (identified by `ref`), revoking its access.
     */
    ALPHA_DELETES_AN_API_KEY_FOR_THE_PROJECT: "SUPABASE_ALPHA_DELETES_AN_API_KEY_FOR_THE_PROJECT",
    /**
     * Retrieves the detailed configuration for a specific third-party authentication (tpa) provider, identified by `tpa id`, within an existing supabase project specified by `ref`.
     */
    ALPHA_GET_A_THIRD_PARTY_INTEGRATION: "SUPABASE_ALPHA_GET_A_THIRD_PARTY_INTEGRATION",
    /**
     * Lists all configured third-party authentication provider integrations for an existing supabase project (using its `ref`), suitable for read-only auditing or verifying current authentication settings.
     */
    ALPHA_LISTS_ALL_THIRD_PARTY_AUTH_INTEGRATIONS: "SUPABASE_ALPHA_LISTS_ALL_THIRD_PARTY_AUTH_INTEGRATIONS",
    /**
     * Removes a third-party authentication provider (e.g., google, github) from a supabase project's configuration; this immediately prevents users from logging in via that method.
     */
    ALPHA_REMOVES_A_THIRD_PARTY_AUTH_INTEGRATION: "SUPABASE_ALPHA_REMOVES_A_THIRD_PARTY_AUTH_INTEGRATION",
    /**
     * Updates an existing supabase project api key's `description` and/or `secret jwt template` (which defines its `role`); does not regenerate the key string.
     */
    ALPHA_UPDATES_AN_API_KEY_FOR_THE_PROJECT: "SUPABASE_ALPHA_UPDATES_AN_API_KEY_FOR_THE_PROJECT",
    /**
     * Activates a previously configured custom hostname for a supabase project, assuming dns settings are verified externally.
     */
    BETA_ACTIVATES_A_CUSTOM_HOSTNAME_FOR_A_PROJECT: "SUPABASE_BETA_ACTIVATES_A_CUSTOM_HOSTNAME_FOR_A_PROJECT",
    /**
     * Activates a vanity subdomain for the specified supabase project, requiring subsequent dns configuration for the subdomain to become operational.
     */
    BETA_ACTIVATES_A_VANITY_SUBDOMAIN_FOR_A_PROJECT: "SUPABASE_BETA_ACTIVATES_A_VANITY_SUBDOMAIN_FOR_A_PROJECT",
    /**
     * Generates a supabase oauth 2.0 authorization url for user redirection, requiring a pre-registered `client id` and a `redirect uri` that matches one of its pre-registered uris.
     */
    BETA_AUTHORIZE_USER_THROUGH_OAUTH: "SUPABASE_BETA_AUTHORIZE_USER_THROUGH_OAUTH",
    /**
     * Checks if a specific vanity subdomain is available for a supabase project; this action does not reserve or assign the subdomain.
     */
    BETA_CHECKS_VANITY_SUBDOMAIN_AVAILABILITY: "SUPABASE_BETA_CHECKS_VANITY_SUBDOMAIN_AVAILABILITY",
    /**
     * Enables database webhooks for the supabase project `ref`, triggering real-time notifications for insert, update, or delete events.
     */
    BETA_ENABLES_DATABASE_WEBHOOKS_ON_THE_PROJECT: "SUPABASE_BETA_ENABLES_DATABASE_WEBHOOKS_ON_THE_PROJECT",
    /**
     * Fetches the current vanity subdomain configuration, including its status and custom domain name, for a supabase project identified by its reference id.
     */
    BETA_GETS_CURRENT_VANITY_SUBDOMAIN_CONFIG: "SUPABASE_BETA_GETS_CURRENT_VANITY_SUBDOMAIN_CONFIG",
    /**
     * Retrieves a supabase project's custom hostname configuration, including its status, ssl certificate, and ownership verification, noting that availability may depend on the project's plan.
     */
    BETA_GETS_PROJECT_S_CUSTOM_HOSTNAME_CONFIG: "SUPABASE_BETA_GETS_PROJECT_S_CUSTOM_HOSTNAME_CONFIG",
    /**
     * Retrieves the list of banned ipv4 addresses for a supabase project using its unique project reference string; this is a read-only operation.
     */
    BETA_GETS_PROJECT_S_NETWORK_BANS: "SUPABASE_BETA_GETS_PROJECT_S_NETWORK_BANS",
    /**
     * Retrieves the current network restriction settings (e.g., ip whitelists) for a supabase project using its reference id; this is a read-only operation for auditing or verifying network security.
     */
    BETA_GETS_PROJECT_S_NETWORK_RESTRICTIONS: "SUPABASE_BETA_GETS_PROJECT_S_NETWORK_RESTRICTIONS",
    /**
     * Retrieves the pgsodium configuration, including the root encryption key, for an existing supabase project identified by its `ref`.
     */
    BETA_GETS_PROJECT_S_PGSODIUM_CONFIG: "SUPABASE_BETA_GETS_PROJECT_S_PGSODIUM_CONFIG",
    /**
     * Retrieves the ssl enforcement configuration for a specified supabase project, indicating if ssl connections are mandated for its database.
     */
    BETA_GET_PROJECT_S_SSL_ENFORCEMENT_CONFIGURATION: "SUPABASE_BETA_GET_PROJECT_S_SSL_ENFORCEMENT_CONFIGURATION",
    /**
     * Irreversibly initiates the removal of a specified read replica from an existing supabase project, confirming only the start of the process, not its completion.
     */
    BETA_REMOVE_A_READ_REPLICA: "SUPABASE_BETA_REMOVE_A_READ_REPLICA",
    /**
     * Removes specified ipv4 addresses from a supabase project's network ban list, granting immediate access; ips not currently banned are ignored.
     */
    BETA_REMOVE_NETWORK_BANS: "SUPABASE_BETA_REMOVE_NETWORK_BANS",
    /**
     * Executes a given sql query against the project's database; use for advanced data operations or when standard api endpoints are insufficient, ensuring queries are valid postgresql and sanitized. use the get table schemas or generate type script types tool to retrieve the table schema, then base your query on it.
     */
    BETA_RUN_SQL_QUERY: "SUPABASE_BETA_RUN_SQL_QUERY",
    /**
     * Provisions a read-only replica for a supabase project in a specified, supabase-supported aws region to enhance read performance and reduce latency.
     */
    BETA_SET_UP_A_READ_REPLICA: "SUPABASE_BETA_SET_UP_A_READ_REPLICA",
    /**
     * Updates and applies network access restrictions (ipv4/ipv6 cidr lists) for a supabase project, which may terminate existing connections not matching the new rules.
     */
    BETA_UPDATES_PROJECT_S_NETWORK_RESTRICTIONS: "SUPABASE_BETA_UPDATES_PROJECT_S_NETWORK_RESTRICTIONS",
    /**
     * Initiates an asynchronous upgrade of a supabase project's postgresql database to a specified `target version` from a selected `release channel`, returning a `tracking id` to monitor status; the `target version` must be available in the chosen channel.
     */
    BETA_UPGRADES_THE_PROJECT_S_POSTGRES_VERSION: "SUPABASE_BETA_UPGRADES_THE_PROJECT_S_POSTGRES_VERSION",
    /**
     * Critically updates or initializes a supabase project's pgsodium root encryption key for security setup or key rotation, requiring secure backup of the new key to prevent irreversible data loss.
     */
    CONFIG_PGSODIUM_UPDATE_WITH_ROOT_KEY_WARNING: "SUPABASE_CONFIG_PGSODIUM_UPDATE_WITH_ROOT_KEY_WARNING",
    /**
     * Creates a new saml 2.0 single sign-on (sso) provider for a supabase project, requiring either `metadata xml` or `metadata url` for saml idp configuration.
     */
    CREATES_A_NEW_SSO_PROVIDER: "SUPABASE_CREATES_A_NEW_SSO_PROVIDER",
    /**
     * Call this to add a new third-party authentication method (oidc or jwks) to a supabase project for integrating external identity providers (e.g., for sso); the api may also support `custom jwks` if sent directly.
     */
    CREATES_A_NEW_THIRD_PARTY_AUTH_INTEGRATION: "SUPABASE_CREATES_A_NEW_THIRD_PARTY_AUTH_INTEGRATION",
    /**
     * Creates a new supabase organization, which serves as a top-level container for projects, billing, and team access.
     */
    CREATE_AN_ORGANIZATION: "SUPABASE_CREATE_AN_ORGANIZATION",
    /**
     * Creates a new, isolated database branch from an existing supabase project (identified by `ref`), useful for setting up separate environments like development or testing, which can optionally be linked to a git branch.
     */
    CREATE_A_DATABASE_BRANCH: "SUPABASE_CREATE_A_DATABASE_BRANCH",
    /**
     * Creates a new serverless edge function for a supabase project (identified by `ref`), requiring valid javascript/typescript in `body` and a project-unique `slug 1` identifier.
     */
    CREATE_A_FUNCTION: "SUPABASE_CREATE_A_FUNCTION",
    /**
     * Creates a new supabase project, requiring a unique name (no dots) within the organization; project creation is asynchronous.
     */
    CREATE_A_PROJECT: "SUPABASE_CREATE_A_PROJECT",
    /**
     * Re-verifies dns and ssl configurations for an existing custom hostname associated with a supabase project.
     */
    CUSTOM_HOSTNAME_DNS_VERIFICATION: "SUPABASE_CUSTOM_HOSTNAME_DNS_VERIFICATION",
    /**
     * Permanently and irreversibly deletes a supabase project, identified by its unique `ref` id, resulting in complete data loss.
     */
    DELETES_THE_GIVEN_PROJECT: "SUPABASE_DELETES_THE_GIVEN_PROJECT",
    /**
     * Permanently and irreversibly deletes a specific, non-default database branch by its `branch id`, without affecting other branches.
     */
    DELETE_A_DATABASE_BRANCH: "SUPABASE_DELETE_A_DATABASE_BRANCH",
    /**
     * Permanently deletes a specific edge function (by `function slug`) from a supabase project (by `ref`); this action is irreversible and requires prior existence of both project and function.
     */
    DELETE_A_FUNCTION: "SUPABASE_DELETE_A_FUNCTION",
    /**
     * Deletes an active custom hostname configuration for the project identified by `ref`, reverting to the default supabase-provided hostname; this action immediately makes the project inaccessible via the custom domain and requires subsequent updates to client, oauth, and dns settings.
     */
    DELETE_CUSTOM_HOSTNAME_CONFIG: "SUPABASE_DELETE_CUSTOM_HOSTNAME_CONFIG",
    /**
     * Permanently and irreversibly deletes an active vanity subdomain configuration for the specified supabase project, reverting it to its default supabase url.
     */
    DELETE_PROJECT_VANITY_SUBDOMAIN: "SUPABASE_DELETE_PROJECT_VANITY_SUBDOMAIN",
    /**
     * Deploys edge functions to a supabase project using multipart upload.
     */
    DEPLOY_FUNCTION: "SUPABASE_DEPLOY_FUNCTION",
    /**
     * Disables the preview branching feature for an existing supabase project, identified by its unique reference id (`ref`).
     */
    DISABLES_PREVIEW_BRANCHING: "SUPABASE_DISABLES_PREVIEW_BRANCHING",
    /**
     * Temporarily disables a supabase project's read-only mode for 15 minutes to allow write operations (e.g., for maintenance or critical updates), after which it automatically reverts to read-only.
     */
    DISABLE_PROJECT_READONLY: "SUPABASE_DISABLE_PROJECT_READONLY",
    /**
     * (beta) implements the oauth 2.0 token endpoint to exchange an authorization code or refresh token for access/refresh tokens, based on `grant type`.
     */
    EXCHANGE_O_AUTH_TOKEN: "SUPABASE_EXCHANGE_O_AUTH_TOKEN",
    /**
     * Generates and retrieves typescript types from a supabase project's database; any schemas specified in `included schemas` must exist in the project.
     */
    GENERATE_TYPE_SCRIPT_TYPES: "SUPABASE_GENERATE_TYPE_SCRIPT_TYPES",
    /**
     * Retrieves a specific sql snippet by its unique identifier.
     */
    GETS_A_SPECIFIC_SQL_SNIPPET: "SUPABASE_GETS_A_SPECIFIC_SQL_SNIPPET",
    /**
     * Retrieves the configuration details for a specific single sign-on (sso) provider (e.g., saml, google, github, azure ad), identified by its uuid, within a supabase project.
     */
    GETS_A_SSO_PROVIDER_BY_ITS_UUID: "SUPABASE_GETS_A_SSO_PROVIDER_BY_ITS_UUID",
    /**
     * Fetches comprehensive details for a specific supabase organization using its unique slug.
     */
    GETS_INFORMATION_ABOUT_THE_ORGANIZATION: "SUPABASE_GETS_INFORMATION_ABOUT_THE_ORGANIZATION",
    /**
     * Retrieves the project's complete read-only authentication configuration, detailing all settings (e.g., providers, mfa, email/sms, jwt, security policies) but excluding sensitive secrets.
     */
    GETS_PROJECT_S_AUTH_CONFIG: "SUPABASE_GETS_PROJECT_S_AUTH_CONFIG",
    /**
     * Retrieves the postgrest configuration for a specific supabase project.
     */
    GETS_PROJECT_S_POSTGREST_CONFIG: "SUPABASE_GETS_PROJECT_S_POSTGREST_CONFIG",
    /**
     * Retrieves the current read-only postgresql database configuration for a specified supabase project's `ref`, noting that some advanced or security-sensitive details might be omitted from the response.
     */
    GETS_PROJECT_S_POSTGRES_CONFIG: "SUPABASE_GETS_PROJECT_S_POSTGRES_CONFIG",
    /**
     * Retrieves the current health status for a supabase project, for specified services or all services if the 'services' list is omitted.
     */
    GETS_PROJECT_S_SERVICE_HEALTH_STATUS: "SUPABASE_GETS_PROJECT_S_SERVICE_HEALTH_STATUS",
    /**
     * Retrieves the supavisor (connection pooler) configuration for a specified supabase project, identified by its reference id.
     */
    GETS_PROJECT_S_SUPAVISOR_CONFIG: "SUPABASE_GETS_PROJECT_S_SUPAVISOR_CONFIG",
    /**
     * Retrieves the read-only configuration and status for a supabase database branch, typically for monitoring or verifying its settings.
     */
    GET_DATABASE_BRANCH_CONFIG: "SUPABASE_GET_DATABASE_BRANCH_CONFIG",
    /**
     * Retrieves all api keys for an existing supabase project, specified by its unique reference id (`ref`); this is a read-only operation.
     */
    GET_PROJECT_API_KEYS: "SUPABASE_GET_PROJECT_API_KEYS",
    /**
     * Retrieves the active pgbouncer configuration (postgresql connection pooler) for a supabase project, used for performance tuning, auditing, or getting the connection string.
     */
    GET_PROJECT_S_PGBOUNCER_CONFIG: "SUPABASE_GET_PROJECT_S_PGBOUNCER_CONFIG",
    /**
     * Checks a supabase project's eligibility for an upgrade, verifying compatibility and identifying potential issues; this action does not perform the actual upgrade.
     */
    GET_PROJECT_UPGRADE_ELIGIBILITY: "SUPABASE_GET_PROJECT_UPGRADE_ELIGIBILITY",
    /**
     * Retrieves the latest status of a supabase project's database upgrade for monitoring purposes; does not initiate or modify upgrades.
     */
    GET_PROJECT_UPGRADE_STATUS: "SUPABASE_GET_PROJECT_UPGRADE_STATUS",
    /**
     * Retrieves column details, types, and constraints for multiple database tables to help debug schema issues and write accurate sql queries.
     */
    GET_TABLE_SCHEMAS: "SUPABASE_GET_TABLE_SCHEMAS",
    /**
     * Lists all database backups for a supabase project, providing details on existing backups but not creating new ones or performing restores; availability may depend on plan and configuration.
     */
    LISTS_ALL_BACKUPS: "SUPABASE_LISTS_ALL_BACKUPS",
    /**
     * Retrieves a list of all storage buckets for a supabase project, without returning bucket contents or access policies.
     */
    LISTS_ALL_BUCKETS: "SUPABASE_LISTS_ALL_BUCKETS",
    /**
     * Lists all configured single sign-on (sso) providers for a supabase project, requiring the project reference id (`ref`) of an existing project.
     */
    LISTS_ALL_SSO_PROVIDERS: "SUPABASE_LISTS_ALL_SSO_PROVIDERS",
    /**
     * Retrieves a list of sql snippets for the logged-in user, optionally filtered by a specific supabase project if `project ref` is provided.
     */
    LISTS_SQL_SNIPPETS_FOR_THE_LOGGED_IN_USER: "SUPABASE_LISTS_SQL_SNIPPETS_FOR_THE_LOGGED_IN_USER",
    /**
     * Lists all database branches for a specified supabase project, used for isolated development and testing of schema changes; ensure the project reference id is valid.
     */
    LIST_ALL_DATABASE_BRANCHES: "SUPABASE_LIST_ALL_DATABASE_BRANCHES",
    /**
     * Lists metadata for all edge functions in a supabase project (specified by 'ref'), excluding function code or logs; the project must exist.
     */
    LIST_ALL_FUNCTIONS: "SUPABASE_LIST_ALL_FUNCTIONS",
    /**
     * Lists all organizations (id and name only) associated with the supabase account, excluding project details within these organizations.
     */
    LIST_ALL_ORGANIZATIONS: "SUPABASE_LIST_ALL_ORGANIZATIONS",
    /**
     * Retrieves a list of all supabase projects, including their id, name, region, and status, for the authenticated user.
     */
    LIST_ALL_PROJECTS: "SUPABASE_LIST_ALL_PROJECTS",
    /**
     * Retrieves all secrets for a supabase project using its reference id; secret values in the response may be masked.
     */
    LIST_ALL_SECRETS: "SUPABASE_LIST_ALL_SECRETS",
    /**
     * Retrieves all members of a supabase organization, identified by its unique slug, including their user id, username, email, role, and mfa status.
     */
    LIST_MEMBERS_OF_AN_ORGANIZATION: "SUPABASE_LIST_MEMBERS_OF_AN_ORGANIZATION",
    /**
     * Deletes a specific sso provider by its id (`provider id`) from a supabase project (`ref`), which disables it and returns its details; ensure this action will not inadvertently lock out users.
     */
    REMOVES_A_SSO_PROVIDER_BY_ITS_UUID: "SUPABASE_REMOVES_A_SSO_PROVIDER_BY_ITS_UUID",
    /**
     * Resets an existing supabase database branch, identified by `branch id`, to its initial clean state, irreversibly deleting all its current data and schema changes.
     */
    RESETS_A_DATABASE_BRANCH: "SUPABASE_RESETS_A_DATABASE_BRANCH",
    /**
     * Restores a supabase project's database to a specific unix timestamp using point-in-time recovery (pitr), overwriting the current state; requires a paid plan with pitr and physical backups enabled.
     */
    RESTORES_A_PITR_BACKUP_FOR_A_DATABASE: "SUPABASE_RESTORES_A_PITR_BACKUP_FOR_A_DATABASE",
    /**
     * Retrieves detailed information, metadata, configuration, and status for a specific edge function using its project reference id and function slug.
     */
    RETRIEVE_A_FUNCTION: "SUPABASE_RETRIEVE_A_FUNCTION",
    /**
     * Retrieves the source code (body) for a specified serverless edge function using its project reference and function slug; this is a read-only operation that does not execute the function or return runtime logs.
     */
    RETRIEVE_A_FUNCTION_BODY: "SUPABASE_RETRIEVE_A_FUNCTION_BODY",
    /**
     * Retrieves the read-only mode status for a specified supabase project to check its operational state; this action does not change the read-only state.
     */
    RETURNS_PROJECT_S_READONLY_MODE_STATUS: "SUPABASE_RETURNS_PROJECT_S_READONLY_MODE_STATUS",
    /**
     * Updates an existing sso provider's saml metadata, associated email domains, or attribute mappings for a supabase project, identified by `ref` and `provider id`.
     */
    UPDATES_A_SSO_PROVIDER_BY_ITS_UUID: "SUPABASE_UPDATES_A_SSO_PROVIDER_BY_ITS_UUID",
    /**
     * Updates postgrest configuration settings (e.g., `max rows`, `db pool`, `db schema`, `db extra search path`) for a supabase project to fine-tune api performance, data exposure, and database resource usage.
     */
    UPDATES_PROJECT_S_POSTGREST_CONFIG: "SUPABASE_UPDATES_PROJECT_S_POSTGREST_CONFIG",
    /**
     * Updates specified postgresql configuration parameters for an existing supabase project (`ref`) to optimize database performance; note that unspecified parameters remain unchanged, and caution is advised as incorrect settings can impact stability or require a restart.
     */
    UPDATES_PROJECT_S_POSTGRES_CONFIG: "SUPABASE_UPDATES_PROJECT_S_POSTGRES_CONFIG",
    /**
     * Updates the supavisor (database pooler) configuration, such as `default pool size`, for an existing supabase project identified by `ref`; the `pool mode` parameter in the request is deprecated and ignored.
     */
    UPDATES_PROJECT_S_SUPAVISOR_CONFIG: "SUPABASE_UPDATES_PROJECT_S_SUPAVISOR_CONFIG",
    /**
     * Updates an existing supabase edge function's properties (like name, slug, source code, jwt settings, import map) identified by project `ref` and `function slug`, supporting plain text code or eszip for the body.
     */
    UPDATE_A_FUNCTION: "SUPABASE_UPDATE_A_FUNCTION",
    /**
     * Updates the configuration of a supabase database branch, allowing modification of its name, associated git branch, reset-on-push behavior, persistence, and status.
     */
    UPDATE_DATABASE_BRANCH_CONFIG: "SUPABASE_UPDATE_DATABASE_BRANCH_CONFIG",
    /**
     * Updates the custom hostname for a supabase project, requiring subsequent dns changes to a user-controlled domain for ssl certificate issuance and domain ownership.
     */
    UPDATE_PROJECT_CUSTOM_HOSTNAME_ACTION: "SUPABASE_UPDATE_PROJECT_CUSTOM_HOSTNAME_ACTION",
    /**
     * Updates the ssl enforcement configuration (enable/disable) for a specified supabase project's database.
     */
    UPDATE_SSL_ENFORCEMENT_CONFIG: "SUPABASE_UPDATE_SSL_ENFORCEMENT_CONFIG",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SUPABASE".
 */
export type SUPABASE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SUPABASE".
 */
export type SUPABASE_TRIGGER_EVENTS = {}
