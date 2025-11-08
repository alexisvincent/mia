// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of KICKBOX's KICKBOX_KICKBOX_SINGLE_VERIFICATION_API tool input.
 */
type KICKBOX_KICKBOX_SINGLE_VERIFICATION_API_INPUT = {
  /**
   * Disable Catch All
   * @description Disable catch-all detection
   * @default null
   */
  disable_catch_all: boolean | null;
  /**
   * Email
   * Format: email
   * @description Email address to verify
   */
  email?: unknown;
  /**
   * Timeout
   * @description Max milliseconds to wait for SMTP response (0–20000). Server default is 6000
   * @default null
   */
  timeout: number | null;
  /**
   * Timeout Parameter
   * @description Deprecated; use `timeout` instead
   * @default null
   */
  timeout_parameter: string | null;
  /**
   * Webhook
   * Format: uri
   * @description Webhook URL to POST results to
   * @default null
   */
  webhook: unknown;
};

/**
 * Type of KICKBOX's KICKBOX_KICKBOX_SINGLE_VERIFICATION_API tool output.
 */
type KICKBOX_KICKBOX_SINGLE_VERIFICATION_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accept All
       * @description True if domain appears to accept all mail
       */
      accept_all: boolean;
      /**
       * Did You Mean
       * @description Suggested correction if the address may be mistyped
       * @default null
       */
      did_you_mean: string | null;
      /**
       * Disposable
       * @description True if from a disposable provider
       */
      disposable: boolean;
      /**
       * Domain
       * @description Domain part of the email address
       */
      domain: string;
      /**
       * Email
       * @description Normalized email tested
       */
      email: string;
      /**
       * Free
       * @description True if from a free email provider
       */
      free: boolean;
      /**
       * Reason
       * @description Reason for the result
       */
      reason: string;
      /**
       * Result
       * @description Verification result
       * @enum {string}
       */
      result: "deliverable" | "undeliverable" | "risky" | "unknown";
      /**
       * Role
       * @description True if this is a role-based address
       */
      role: boolean;
      /**
       * Sendex
       * @description Quality score between 0.0 and 1.0
       */
      sendex: number;
      /**
       * Success
       * @description Whether verification completed successfully
       */
      success: boolean;
      /**
       * User
       * @description Local part of the email address
       */
      user: string;
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
 * Type map of all available tool input types for toolkit "KICKBOX".
 */
export type KICKBOX_TOOL_INPUTS = {
  KICKBOX_SINGLE_VERIFICATION_API: KICKBOX_KICKBOX_SINGLE_VERIFICATION_API_INPUT
}

/**
 * Type map of all available tool input types for toolkit "KICKBOX".
 */
export type KICKBOX_TOOL_OUTPUTS = {
  KICKBOX_SINGLE_VERIFICATION_API: KICKBOX_KICKBOX_SINGLE_VERIFICATION_API_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's KICKBOX toolkit.
 */
export const KICKBOX = {
  slug: "kickbox",
  tools: {
    /**
     * Tool to verify a single email address via kickbox. use when you need real-time validation of an individual email before critical workflows.
     */
    KICKBOX_SINGLE_VERIFICATION_API: "KICKBOX_KICKBOX_SINGLE_VERIFICATION_API",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "KICKBOX".
 */
export type KICKBOX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "KICKBOX".
 */
export type KICKBOX_TRIGGER_EVENTS = {}
