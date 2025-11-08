// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TIMELY's TIMELY_CREATE_WEBHOOK tool input.
 */
type TIMELY_CREATE_WEBHOOK_INPUT = {
  /**
   * Secret Token
   * @description Optional secret token used to sign and verify webhook payloads.
   * @default null
   */
  secret: string | null;
  /**
   * Subscriptions
   * @description List of event types to subscribe to for receiving notifications.
   */
  subscriptions?: string[];
  /**
   * Url
   * Format: uri
   * @description The HTTPS endpoint that will receive webhook payloads.
   */
  url?: unknown;
};

/**
 * Type of TIMELY's TIMELY_CREATE_WEBHOOK tool output.
 */
type TIMELY_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Indicates whether the webhook is currently active
       */
      active: boolean;
      /**
       * Id
       * @description Unique identifier of the created webhook
       */
      id: number;
      /**
       * Secret
       * @description The secret token associated with the webhook, if set.
       * @default null
       */
      secret: string | null;
      /**
       * Subscriptions
       * @description The list of subscribed event types
       */
      subscriptions: string[];
      /**
       * Url
       * Format: uri
       * @description The webhook endpoint URL
       */
      url: unknown;
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
 * Type of TIMELY's TIMELY_RETRIEVE_ACCOUNT tool input.
 */
type TIMELY_RETRIEVE_ACCOUNT_INPUT = {
  /**
   * Id
   * @description Identifier of the account to retrieve
   */
  id?: number;
};

/**
 * Type of TIMELY's TIMELY_RETRIEVE_ACCOUNT tool output.
 */
type TIMELY_RETRIEVE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active Projects Count
       * @description Count of active projects in account
       */
      active_projects_count: number;
      /**
       * Appstore Transaction Id
       * @description Transaction ID from App Store, if any
       * @default null
       */
      appstore_transaction_id: string | null;
      /**
       * Azure Ad Enabled
       * @description Whether Azure AD integration is enabled
       */
      azure_ad_enabled: boolean;
      /**
       * Beta
       * @description Whether beta features are enabled
       */
      beta: boolean;
      /**
       * Capacity
       * @description Overall capacity metrics for the account
       */
      capacity: {
          /**
           * Formatted
           * @description Formatted duration, e.g., '40:00'
           */
          formatted: string;
          /**
           * Hours
           * @description Number of hours in capacity
           */
          hours: number;
          /**
           * Minutes
           * @description Number of minutes in capacity
           */
          minutes: number;
          /**
           * Seconds
           * @description Number of seconds in capacity
           */
          seconds: number;
          /**
           * Total Hours
           * @description Total hours as float, e.g., 40.0
           */
          total_hours: number;
          /**
           * Total Minutes
           * @description Total minutes in capacity
           */
          total_minutes: number;
          /**
           * Total Seconds
           * @description Total seconds in capacity
           */
          total_seconds: number;
      };
      /**
       * Color
       * @description Hex code of the account color, without '#'
       */
      color: string;
      /**
       * Company Size
       * @description Size of company, e.g., '10-49'
       */
      company_size: string;
      /**
       * Created At
       * @description Account creation timestamp (seconds since epoch)
       */
      created_at: number;
      /**
       * Currency
       * @description Currency details for the account
       */
      currency: {
          /**
           * Id
           * @description Currency identifier, e.g., 'usd'
           */
          id: string;
          /**
           * Iso Code
           * @description ISO code of the currency, e.g., 'USD'
           */
          iso_code: string;
          /**
           * Name
           * @description Full currency name, e.g., 'United States Dollar'
           */
          name: string;
          /**
           * Symbol
           * @description Currency symbol, e.g., '$'
           */
          symbol: string;
          /**
           * Symbol First
           * @description Whether the symbol appears before the amount
           */
          symbol_first: boolean;
      };
      /**
       * Days To End Trial
       * @description Days remaining until the end of trial period
       */
      days_to_end_trial: number;
      /**
       * Default Hour Rate
       * @description Default hourly rate for the account
       */
      default_hour_rate: number;
      /**
       * Default Work Days
       * @description Comma-separated work days, e.g., 'MON,TUE,...'
       */
      default_work_days: string;
      /**
       * Estimated Company Size
       * @description Estimated size of the company, if provided
       * @default null
       */
      estimated_company_size: string | null;
      /**
       * Expired
       * @description Whether the account has expired
       */
      expired: boolean;
      /**
       * Features
       * @description List of feature availabilities and retention
       */
      features: {
          /**
           * Days
           * @description Retention days for the feature, -1 for unlimited
           */
          days: number;
          /**
           * Name
           * @description Feature name, e.g., 'api_access'
           */
          name: string;
      }[];
      /**
       * Id
       * @description Account ID
       */
      id: number;
      /**
       * Industry
       * @description Industry of the company, if provided
       * @default null
       */
      industry: string | null;
      /**
       * Logo
       * @description Logo images for the account
       */
      logo: {
          /**
           * Brand Logo
           * @description Whether this is a branded logo image
           */
          brand_logo: boolean;
          /**
           * Large Retina
           * @description High-resolution large logo URL
           */
          large_retina: string;
          /**
           * Medium Retina
           * @description High-resolution medium logo URL
           */
          medium_retina: string;
          /**
           * Small Retina
           * @description High-resolution small logo URL
           */
          small_retina: string;
      };
      /**
       * Max Projects
       * @description Maximum number of projects allowed
       */
      max_projects: number;
      /**
       * Max Users
       * @description Maximum number of users allowed
       */
      max_users: number;
      /**
       * Memory Retention Days
       * @description Days for which data is retained, 0 for unlimited
       */
      memory_retention_days: number;
      /**
       * Name
       * @description Name of the account
       */
      name: string;
      /**
       * Next Charge
       * @description Next billing date in YYYY-MM-DD format
       */
      next_charge: string;
      /**
       * Num Projects
       * @description Current number of projects in account
       */
      num_projects: number;
      /**
       * Num Users
       * @description Current number of users in account
       */
      num_users: number;
      /**
       * Owner Id
       * @description User ID of the account owner
       */
      owner_id: number;
      /**
       * Paid
       * @description Whether the account is currently paid
       */
      paid: boolean;
      /**
       * Payment Mode
       * @description Payment mode, e.g., 'web'
       */
      payment_mode: string;
      /**
       * Plan Code
       * @description Code for subscription plan, e.g., 'essential'
       */
      plan_code: string;
      /**
       * Plan Custom
       * @description Whether the plan is a custom plan
       */
      plan_custom: boolean;
      /**
       * Plan Id
       * @description Subscription plan ID
       */
      plan_id: number;
      /**
       * Plan Name
       * @description Name of the subscription plan
       */
      plan_name: string;
      /**
       * Seats
       * @description Number of seats assigned
       */
      seats: number;
      /**
       * Source
       * @description Source of the account (from JSON key 'from')
       */
      source: string;
      /**
       * Start Of Week
       * @description Start day of week (0=Sunday, 1=Monday, etc.)
       */
      start_of_week: number;
      /**
       * Status
       * @description Current status of the account, e.g., 'active'
       */
      status: string;
      /**
       * Support Email
       * @description Support email for the account
       */
      support_email: string;
      /**
       * Tic Force Enable
       * @description Whether TIC is forced enabled for account
       */
      tic_force_enable: boolean;
      /**
       * Total Projects Count
       * @description Total number of projects in account
       */
      total_projects_count: number;
      /**
       * Trial
       * @description Whether the account is in trial period
       */
      trial: boolean;
      /**
       * Weekly User Capacity
       * @description Default weekly capacity per user in hours
       */
      weekly_user_capacity: number;
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
 * Type map of all available tool input types for toolkit "TIMELY".
 */
export type TIMELY_TOOL_INPUTS = {
  CREATE_WEBHOOK: TIMELY_CREATE_WEBHOOK_INPUT
  RETRIEVE_ACCOUNT: TIMELY_RETRIEVE_ACCOUNT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TIMELY".
 */
export type TIMELY_TOOL_OUTPUTS = {
  CREATE_WEBHOOK: TIMELY_CREATE_WEBHOOK_OUTPUT
  RETRIEVE_ACCOUNT: TIMELY_RETRIEVE_ACCOUNT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TIMELY toolkit.
 */
export const TIMELY = {
  slug: "timely",
  tools: {
    /**
     * Tool to create a new webhook for the specified account. use after specifying the target url and event subscriptions. call only once per configuration.
     */
    CREATE_WEBHOOK: "TIMELY_CREATE_WEBHOOK",
    /**
     * Tool to retrieve details of a specific account by its id. use when you need to fetch fresh account info after confirming the id. example: "retrieve account details for account id 364"
     */
    RETRIEVE_ACCOUNT: "TIMELY_RETRIEVE_ACCOUNT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TIMELY".
 */
export type TIMELY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TIMELY".
 */
export type TIMELY_TRIGGER_EVENTS = {}
