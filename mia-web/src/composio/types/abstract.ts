// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ABSTRACT's ABSTRACT_ABSTRACT_IBAN_VALIDATION_API tool input.
 */
type ABSTRACT_ABSTRACT_IBAN_VALIDATION_API_INPUT = {
  /**
   * Iban
   * @description International Bank Account Number to validate, accepts with or without spaces. Example: 'BE71096123456769'.
   */
  iban?: string;
};

/**
 * Type of ABSTRACT's ABSTRACT_ABSTRACT_IBAN_VALIDATION_API tool output.
 */
type ABSTRACT_ABSTRACT_IBAN_VALIDATION_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Iban
       * @description The IBAN submitted for validation.
       */
      iban: string;
      /**
       * Is Valid
       * @description True if the IBAN is valid, false otherwise.
       */
      is_valid: boolean;
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
 * Type of ABSTRACT's ABSTRACT_EMAIL_REPUTATION_API tool input.
 */
type ABSTRACT_EMAIL_REPUTATION_API_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to analyze.
   */
  email?: unknown;
};

/**
 * Type of ABSTRACT's ABSTRACT_EMAIL_REPUTATION_API tool output.
 */
type ABSTRACT_EMAIL_REPUTATION_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email Address
       * @description The analyzed email address.
       */
      email_address: string;
      /**
       * Email Breaches
       * @description Data breach history for the email.
       */
      email_breaches: {
          /**
           * Breached Domains
           * @description List of breached domains including domain and breach date.
           */
          breached_domains?: {
              /**
               * Date Breached
               * Format: date-time
               * @description Date when the breach occurred.
               */
              date_breached: string;
              /**
               * Domain
               * @description Domain affected by the breach.
               */
              domain: string;
          }[];
          /**
           * Date First Breached
           * Format: date-time
           * @description Date of the first known breach.
           */
          date_first_breached: string;
          /**
           * Date Last Breached
           * Format: date-time
           * @description Date of the most recent breach.
           */
          date_last_breached: string;
          /**
           * Total Breaches
           * @description Total number of data breaches involving this email.
           */
          total_breaches: number;
      };
      /**
       * Email Deliverability
       * @description Deliverability data for the email.
       */
      email_deliverability: {
          /**
           * Is Format Valid
           * @description Indicates if the email format is valid.
           */
          is_format_valid: boolean;
          /**
           * Is Mx Valid
           * @description Indicates if the domain has valid MX records.
           */
          is_mx_valid: boolean;
          /**
           * Is Smtp Valid
           * @description Indicates if the SMTP check was successful.
           */
          is_smtp_valid: boolean;
          /**
           * Mx Records
           * @description List of MX records associated with the domain.
           */
          mx_records?: string[];
          /**
           * Status
           * @description Deliverability status: 'deliverable', 'undeliverable', or 'unknown'.
           * @enum {string}
           */
          status: "deliverable" | "undeliverable" | "unknown";
          /**
           * Status Detail
           * @description Additional details on deliverability status.
           */
          status_detail: string;
      };
      /**
       * Email Domain
       * @description Domain data for the email address.
       */
      email_domain: {
          /**
           * Date Expires
           * Format: date-time
           * @description Expiration date of the domain registration.
           */
          date_expires: string;
          /**
           * Date Last Renewed
           * Format: date-time
           * @description Last renewal date of the domain.
           */
          date_last_renewed: string;
          /**
           * Date Registered
           * Format: date-time
           * @description Date when the domain was registered.
           */
          date_registered: string;
          /**
           * Domain
           * @description Domain part of the submitted email address.
           */
          domain: string;
          /**
           * Domain Age
           * @description Age of the domain in days.
           */
          domain_age: number;
          /**
           * Is Live Site
           * @description Indicates if the domain has a live website.
           */
          is_live_site: boolean;
          /**
           * Is Risky Tld
           * @description Indicates if the domain uses a top-level domain associated with risk.
           */
          is_risky_tld: boolean;
          /**
           * Registrar
           * @description Name of the domain registrar.
           * @default null
           */
          registrar: string | null;
          /**
           * Registrar Url
           * @description URL of the domain registrar.
           * @default null
           */
          registrar_url: string | null;
      };
      /**
       * Email Quality
       * @description Quality metrics for the email.
       */
      email_quality: {
          /**
           * Is Catchall
           * @description Indicates if the domain is configured to accept all emails.
           */
          is_catchall: boolean;
          /**
           * Is Disposable
           * @description Indicates if the email is from a disposable email provider.
           */
          is_disposable: boolean;
          /**
           * Is Dmarc Enforced
           * @description Indicates if a strict DMARC policy is enforced on the domain.
           */
          is_dmarc_enforced: boolean;
          /**
           * Is Free Email
           * @description Indicates if the email is from a known free provider.
           */
          is_free_email: boolean;
          /**
           * Is Role
           * @description Indicates if the email is a role-based address.
           */
          is_role: boolean;
          /**
           * Is Spf Strict
           * @description Indicates if the domain enforces a strict SPF policy.
           */
          is_spf_strict: boolean;
          /**
           * Is Subaddress
           * @description Indicates if the email uses subaddressing.
           */
          is_subaddress: boolean;
          /**
           * Is Username Suspicious
           * @description Indicates if the username appears auto-generated or suspicious.
           */
          is_username_suspicious: boolean;
          /**
           * Minimum Age
           * @description Estimated age of the email address in days, or null if unknown.
           * @default null
           */
          minimum_age: number | null;
          /**
           * Score
           * @description Confidence score between 0.01 and 0.99 representing email quality.
           */
          score: number;
      };
      /**
       * Email Risk
       * @description Risk assessment of the email and domain.
       */
      email_risk: {
          /**
           * Address Risk Status
           * @description Risk status of the email address: 'low', 'medium', or 'high'.
           * @enum {string}
           */
          address_risk_status: "low" | "medium" | "high";
          /**
           * Domain Risk Status
           * @description Risk status of the domain: 'low', 'medium', or 'high'.
           * @enum {string}
           */
          domain_risk_status: "low" | "medium" | "high";
      };
      /**
       * Email Sender
       * @description Sender information derived from the email.
       */
      email_sender: {
          /**
           * Email Provider Name
           * @description Name of the email provider.
           * @default null
           */
          email_provider_name: string | null;
          /**
           * First Name
           * @description First name associated with the email address, if available.
           * @default null
           */
          first_name: string | null;
          /**
           * Last Name
           * @description Last name associated with the email address, if available.
           * @default null
           */
          last_name: string | null;
          /**
           * Organization Name
           * @description Organization linked to the email or domain, if available.
           * @default null
           */
          organization_name: string | null;
          /**
           * Organization Type
           * @description Type of organization (e.g., 'company').
           * @default null
           */
          organization_type: string | null;
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
 * Type of ABSTRACT's ABSTRACT_VALIDATE_EMAIL tool input.
 */
type ABSTRACT_VALIDATE_EMAIL_INPUT = {
  /**
   * Auto Correct
   * @description Whether to auto-correct typos in the submitted email (default: True).
   * @default true
   */
  auto_correct: boolean | null;
  /**
   * Email
   * Format: email
   * @description The email address to validate.
   */
  email?: unknown;
};

/**
 * Type of ABSTRACT's ABSTRACT_VALIDATE_EMAIL tool output.
 */
type ABSTRACT_VALIDATE_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Autocorrect
       * @description Suggested correction if a typo was detected, otherwise empty.
       * @example
       */
      autocorrect: string;
      /**
       * Deliverability
       * @description Overall deliverability verdict.
       * @enum {string}
       */
      deliverability: "DELIVERABLE" | "UNDELIVERABLE" | "UNKNOWN";
      /**
       * Email
       * Format: email
       * @description The email address submitted.
       * @example johnsmith@gmail.com
       */
      email: unknown;
      /**
       * Is Catchall Email
       * @description Check if the domain is configured as catch-all.
       */
      is_catchall_email: {
          /**
           * Text
           * @description String form of the check ('TRUE', 'FALSE', or 'UNKNOWN').
           * @enum {string}
           */
          text: "TRUE" | "FALSE" | "UNKNOWN";
          /**
           * Value
           * @description True if this specific check passed.
           */
          value: boolean;
      };
      /**
       * Is Disposable Email
       * @description Check if the domain is in a disposable-email provider list.
       */
      is_disposable_email: {
          /**
           * Text
           * @description String form of the check ('TRUE', 'FALSE', or 'UNKNOWN').
           * @enum {string}
           */
          text: "TRUE" | "FALSE" | "UNKNOWN";
          /**
           * Value
           * @description True if this specific check passed.
           */
          value: boolean;
      };
      /**
       * Is Free Email
       * @description Check if the domain is a known free email provider.
       */
      is_free_email: {
          /**
           * Text
           * @description String form of the check ('TRUE', 'FALSE', or 'UNKNOWN').
           * @enum {string}
           */
          text: "TRUE" | "FALSE" | "UNKNOWN";
          /**
           * Value
           * @description True if this specific check passed.
           */
          value: boolean;
      };
      /**
       * EmailCheckResult
       * @description Structure for individual boolean/textual check results.
       * @default null
       */
      is_mx_found: {
          /**
           * Text
           * @description String form of the check ('TRUE', 'FALSE', or 'UNKNOWN').
           * @enum {string}
           */
          text: "TRUE" | "FALSE" | "UNKNOWN";
          /**
           * Value
           * @description True if this specific check passed.
           */
          value: boolean;
      } | null;
      /**
       * Is Role Email
       * @description Check if the local part is a role-based email (e.g., info@).
       */
      is_role_email: {
          /**
           * Text
           * @description String form of the check ('TRUE', 'FALSE', or 'UNKNOWN').
           * @enum {string}
           */
          text: "TRUE" | "FALSE" | "UNKNOWN";
          /**
           * Value
           * @description True if this specific check passed.
           */
          value: boolean;
      };
      /**
       * Is Smtp Valid
       * @description Check if the SMTP handshake succeeded (may be UNKNOWN if skipped).
       */
      is_smtp_valid: {
          /**
           * Text
           * @description String form of the check ('TRUE', 'FALSE', or 'UNKNOWN').
           * @enum {string}
           */
          text: "TRUE" | "FALSE" | "UNKNOWN";
          /**
           * Value
           * @description True if this specific check passed.
           */
          value: boolean;
      };
      /**
       * Is Valid Format
       * @description Check if the email follows proper format (address@domain.tld).
       */
      is_valid_format: {
          /**
           * Text
           * @description String form of the check ('TRUE', 'FALSE', or 'UNKNOWN').
           * @enum {string}
           */
          text: "TRUE" | "FALSE" | "UNKNOWN";
          /**
           * Value
           * @description True if this specific check passed.
           */
          value: boolean;
      };
      /**
       * Quality Score
       * @description Confidence score between 0.01 and 0.99.
       */
      quality_score: number;
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
 * Type map of all available tool input types for toolkit "ABSTRACT".
 */
export type ABSTRACT_TOOL_INPUTS = {
  ABSTRACT_IBAN_VALIDATION_API: ABSTRACT_ABSTRACT_IBAN_VALIDATION_API_INPUT
  EMAIL_REPUTATION_API: ABSTRACT_EMAIL_REPUTATION_API_INPUT
  VALIDATE_EMAIL: ABSTRACT_VALIDATE_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ABSTRACT".
 */
export type ABSTRACT_TOOL_OUTPUTS = {
  ABSTRACT_IBAN_VALIDATION_API: ABSTRACT_ABSTRACT_IBAN_VALIDATION_API_OUTPUT
  EMAIL_REPUTATION_API: ABSTRACT_EMAIL_REPUTATION_API_OUTPUT
  VALIDATE_EMAIL: ABSTRACT_VALIDATE_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ABSTRACT toolkit.
 */
export const ABSTRACT = {
  slug: "abstract",
  tools: {
    /**
     * Tool to validate the format and country code of an iban number. use after collecting an iban to ensure it is correctly formatted.
     */
    ABSTRACT_IBAN_VALIDATION_API: "ABSTRACT_ABSTRACT_IBAN_VALIDATION_API",
    /**
     * Tool to enrich an email address with reputation and risk scoring data. use when you need to assess an address's deliverability and risk before outreach. use after confirming your api key is valid.
     */
    EMAIL_REPUTATION_API: "ABSTRACT_EMAIL_REPUTATION_API",
    /**
     * Tool to validate whether an email address is real and deliverable. use after collecting an email address to confirm deliverability.
     */
    VALIDATE_EMAIL: "ABSTRACT_VALIDATE_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ABSTRACT".
 */
export type ABSTRACT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ABSTRACT".
 */
export type ABSTRACT_TRIGGER_EVENTS = {}
