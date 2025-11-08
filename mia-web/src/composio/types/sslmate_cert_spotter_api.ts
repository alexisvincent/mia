// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SSLMATE_CERT_SPOTTER_API's SSLMATE_CERT_SPOTTER_API_CERTSPOTTER_GET_EVENT tool input.
 */
type SSLMATE_CERT_SPOTTER_API_CERTSPOTTER_GET_EVENT_INPUT = {
  /**
   * Event Id
   * @description The unique identifier of the CertSpotter event to retrieve.
   */
  event_id?: string;
};

/**
 * Type of SSLMATE_CERT_SPOTTER_API's SSLMATE_CERT_SPOTTER_API_CERTSPOTTER_GET_EVENT tool output.
 */
type SSLMATE_CERT_SPOTTER_API_CERTSPOTTER_GET_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Certificate
       * @description Detailed certificate information associated with this event
       */
      certificate: {
          /**
           * Cert Der
           * @description Base64 DER encoding of the certificate
           */
          cert_der: string;
          /**
           * Cert Pem
           * @description PEM-formatted certificate
           */
          cert_pem: string;
          /**
           * Dns Names
           * @description DNS names listed in the certificate
           */
          dns_names: string[];
          /**
           * Id
           * @description Unique identifier of the certificate
           */
          id: string;
          /**
           * Issuer
           * @description Certificate issuer information
           */
          issuer: {
              /**
               * Name
               * @description Issuer common name of the certificate
               */
              name: string;
          };
          /**
           * Not After
           * @description Certificate expiry in ISO8601 format
           */
          not_after: string;
          /**
           * Not Before
           * @description Certificate validity start in ISO8601 format
           */
          not_before: string;
          /**
           * Revoked
           * @description Certificate revocation status
           */
          revoked: boolean;
          /**
           * Serial Number
           * @description Certificate serial number in hexadecimal
           */
          serial_number: string;
          /**
           * Sha256Fp
           * @description SHA-256 fingerprint of the certificate
           */
          sha256fp: string;
          /**
           * Spki Sha256Fp
           * @description SHA-256 SPKI fingerprint of the public key
           */
          spki_sha256fp: string;
          /**
           * Subject
           * @description Certificate subject information
           */
          subject: {
              /**
               * Cn
               * @description Subject Common Name of the certificate
               */
              cn: string;
          };
      };
      /**
       * Domain
       * @description The domain name associated with this event
       */
      domain: string;
      /**
       * Id
       * @description The unique identifier of the event
       */
      id: string;
      /**
       * Observed At
       * @description Timestamp when the event was observed (RFC 3339 format)
       */
      observed_at: string;
      /**
       * Type
       * @description The type of the event
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
 * Type of SSLMATE_CERT_SPOTTER_API's SSLMATE_CERT_SPOTTER_API_LIST_MONITORED_DOMAINS tool input.
 */
type SSLMATE_CERT_SPOTTER_API_LIST_MONITORED_DOMAINS_INPUT = object;

/**
 * Type of SSLMATE_CERT_SPOTTER_API's SSLMATE_CERT_SPOTTER_API_LIST_MONITORED_DOMAINS tool output.
 */
type SSLMATE_CERT_SPOTTER_API_LIST_MONITORED_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domains
       * @description List of monitored domain objects
       */
      domains: {
          /**
           * Created At
           * @description Timestamp when the domain was added (RFC3339 format)
           */
          created_at: string;
          /**
           * Domain
           * @description Domain name being monitored
           */
          domain: string;
          /**
           * Id
           * @description Unique identifier for the monitored domain
           */
          id: number;
          /**
           * Include Subdomains
           * @description Whether subdomains are also being monitored
           */
          include_subdomains: boolean;
          /**
           * State
           * @description Current monitoring state of the domain
           */
          state: string;
          /**
           * Webhook Secret
           * @description Webhook secret for this monitored domain
           * @default null
           */
          webhook_secret: string | null;
          /**
           * Webhook Url
           * @description Configured webhook URL for notifications
           * @default null
           */
          webhook_url: string | null;
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
 * Type of SSLMATE_CERT_SPOTTER_API's SSLMATE_CERT_SPOTTER_API_RETRIEVE_WEBHOOK tool input.
 */
type SSLMATE_CERT_SPOTTER_API_RETRIEVE_WEBHOOK_INPUT = object;

/**
 * Type of SSLMATE_CERT_SPOTTER_API's SSLMATE_CERT_SPOTTER_API_RETRIEVE_WEBHOOK tool output.
 */
type SSLMATE_CERT_SPOTTER_API_RETRIEVE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Secret
       * @description The shared secret Cert Spotter uses to compute the webhook request signature. Absent if no webhook is configured.
       * @default null
       */
      secret: string | null;
      /**
       * Url
       * @description The URL that Cert Spotter calls when a certificate is discovered or removed. Absent if no webhook is configured.
       * @default null
       */
      url: string | null;
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
 * Type map of all available tool input types for toolkit "SSLMATE_CERT_SPOTTER_API".
 */
export type SSLMATE_CERT_SPOTTER_API_TOOL_INPUTS = {
  CERTSPOTTER_GET_EVENT: SSLMATE_CERT_SPOTTER_API_CERTSPOTTER_GET_EVENT_INPUT
  LIST_MONITORED_DOMAINS: SSLMATE_CERT_SPOTTER_API_LIST_MONITORED_DOMAINS_INPUT
  RETRIEVE_WEBHOOK: SSLMATE_CERT_SPOTTER_API_RETRIEVE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SSLMATE_CERT_SPOTTER_API".
 */
export type SSLMATE_CERT_SPOTTER_API_TOOL_OUTPUTS = {
  CERTSPOTTER_GET_EVENT: SSLMATE_CERT_SPOTTER_API_CERTSPOTTER_GET_EVENT_OUTPUT
  LIST_MONITORED_DOMAINS: SSLMATE_CERT_SPOTTER_API_LIST_MONITORED_DOMAINS_OUTPUT
  RETRIEVE_WEBHOOK: SSLMATE_CERT_SPOTTER_API_RETRIEVE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SSLMATE_CERT_SPOTTER_API toolkit.
 */
export const SSLMATE_CERT_SPOTTER_API = {
  slug: "sslmate_cert_spotter_api",
  tools: {
    /**
     * Tool to retrieve detailed information about a specific certspotter event. use when you need to inspect event metadata after confirming an event id.
     */
    CERTSPOTTER_GET_EVENT: "SSLMATE_CERT_SPOTTER_API_CERTSPOTTER_GET_EVENT",
    /**
     * Tool to list all monitored domains. use when you need to audit or review the domains currently monitored by cert spotter.
     */
    LIST_MONITORED_DOMAINS: "SSLMATE_CERT_SPOTTER_API_LIST_MONITORED_DOMAINS",
    /**
     * Tool to retrieve webhook settings. use when you need to view the currently configured cert spotter webhook.
     */
    RETRIEVE_WEBHOOK: "SSLMATE_CERT_SPOTTER_API_RETRIEVE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SSLMATE_CERT_SPOTTER_API".
 */
export type SSLMATE_CERT_SPOTTER_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SSLMATE_CERT_SPOTTER_API".
 */
export type SSLMATE_CERT_SPOTTER_API_TRIGGER_EVENTS = {}
