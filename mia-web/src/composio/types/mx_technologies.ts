// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CANCEL_PARTNER_ACCOUNT tool input.
 */
type MX_TECHNOLOGIES_CANCEL_PARTNER_ACCOUNT_INPUT = {
  /**
   * Effective Date
   * @description Future cancellation timestamp in ISO 8601 format. If omitted or a past time is provided, cancellation defaults to the current date/time.
   * @default null
   */
  effective_date: string | null;
  /**
   * Encoded Account Id
   * @description The client’s MX user GUID (encoded account ID).
   */
  encoded_account_id?: string;
  /**
   * Reason Id
   * @description Reason code for cancellation. Allowed values: 1 (Cost Too High), 2 (Using A Competitive Service), 3 (Not Doing Email Marketing), 11 (Something Missing Or Not Working), 12 (Doing It In-House), 14 (Poor Results), 21 (Too Difficult To Use), 27 (Canceled Online by Customer), 30 (Dissatisfied With Billing Policies).
   * @default null
   * @enum {integer|null}
   */
  reason_id: 1 | 2 | 3 | 11 | 12 | 14 | 21 | 27 | 30 | null;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CANCEL_PARTNER_ACCOUNT tool output.
 */
type MX_TECHNOLOGIES_CANCEL_PARTNER_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Effective Date
       * @description Date/time the client account was canceled (ISO 8601).
       */
      effective_date: string;
      /**
       * Reason Id
       * @description Echoed reason code for cancellation, if provided.
       * @default null
       */
      reason_id: number | null;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CREATE_ACCOUNT tool input.
 */
type MX_TECHNOLOGIES_CREATE_ACCOUNT_INPUT = {
  /**
   * Account
   * @description Defines the fields for creating a manual account under a user.
   */
  account?: {
      /**
       * Account Number
       * @description Account number, masked or full
       * @default null
       */
      account_number: string | null;
      /**
       * Available Balance
       * @description Available funds for use, excludes holds
       * @default null
       */
      available_balance: number | null;
      /**
       * Balance
       * @description Current ledger balance
       * @default null
       */
      balance: number | null;
      /**
       * Currency Code
       * @description ISO 4217 currency code, e.g., 'USD'
       * @default null
       */
      currency_code: string | null;
      /**
       * Metadata
       * @description Freeform metadata field
       * @default null
       */
      metadata: string | null;
      /**
       * Name
       * @description Human-readable name for the account, e.g., 'Checking Primary'
       */
      name: string;
      /**
       * Routing Number
       * @description Bank routing number
       * @default null
       */
      routing_number: string | null;
      /**
       * Subtype
       * @description Further subdivision of type, e.g., 'PERSONAL_CHECKING'
       * @default null
       */
      subtype: string | null;
      /**
       * Type
       * @description High-level account type (optional for manual accounts)
       * @default null
       * @enum {string|null}
       */
      type: "CHECKING" | "SAVINGS" | "CREDIT_CARD" | "LOAN" | "INVESTMENT" | null;
  };
  /**
   * User Guid
   * @description GUID of the user under which to create the account, must start with 'USR-'
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CREATE_ACCOUNT tool output.
 */
type MX_TECHNOLOGIES_CREATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Account */
      account: {
          /**
           * Available Balance
           * @description Available funds for use
           */
          available_balance: number;
          /**
           * Balance
           * @description Current ledger balance
           */
          balance: number;
          /**
           * Created At
           * @description Timestamp when account was created
           */
          created_at: string;
          /**
           * Currency Code
           * @description ISO 4217 currency code
           */
          currency_code: string;
          /**
           * Guid
           * @description MX-defined unique account identifier
           */
          guid: string;
          /**
           * Id
           * @description Partner-defined identifier for the account
           * @default null
           */
          id: number | null;
          /**
           * Institution Guid
           * @description MX institution GUID, if linked by aggregation
           * @default null
           */
          institution_guid: string | null;
          /**
           * Member Guid
           * @description MX member GUID, if linked by aggregation
           * @default null
           */
          member_guid: string | null;
          /**
           * Metadata
           * @description Freeform metadata field
           * @default null
           */
          metadata: string | null;
          /**
           * Name
           * @description Human-readable account name
           */
          name: string;
          /**
           * Subtype
           * @description Account subtype
           * @default null
           */
          subtype: string | null;
          /**
           * Type
           * @description High-level account type
           * @enum {string}
           */
          type: "CHECKING" | "SAVINGS" | "CREDIT_CARD" | "LOAN" | "INVESTMENT";
          /**
           * Updated At
           * @description Timestamp when account was last updated
           */
          updated_at: string;
          /**
           * User Guid
           * @description MX-defined user GUID for this account
           */
          user_guid: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CREATE_AUDIENCE_API_CREDENTIALS tool input.
 */
type MX_TECHNOLOGIES_CREATE_AUDIENCE_API_CREDENTIALS_INPUT = {
  /**
   * Client Id
   * @description Audience API credential client ID (optional; falls back to env)
   * @default null
   */
  client_id: string | null;
  /**
   * Client Secret
   * @description Audience API credential client secret (optional; falls back to env)
   * @default null
   */
  client_secret: string | null;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CREATE_AUDIENCE_API_CREDENTIALS tool output.
 */
type MX_TECHNOLOGIES_CREATE_AUDIENCE_API_CREDENTIALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Client Id
       * @description Audience API credential client ID
       */
      client_id: string;
      /**
       * Client Secret
       * @description Audience API credential client secret
       */
      client_secret: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CREATE_MEMBER tool input.
 */
type MX_TECHNOLOGIES_CREATE_MEMBER_INPUT = {
  /**
   * Client Redirect Url
   * Format: uri
   * @description URL or URI scheme for returning UI messages in OAuth flows.
   * @default null
   */
  client_redirect_url: string | null;
  /**
   * Data Request
   * @description Container for requested products to aggregate.
   */
  dataRequest?: {
      /**
       * Products
       * @description List of MX product identifiers to aggregate. Must include at least one; balance data always included.
       */
      products: string[];
  };
  /**
   * Enable App2App
   * @description If false, disable deep-linking into institution mobile apps.
   * @default true
   */
  enable_app2app: boolean | null;
  /**
   * MemberPayload
   * @description Member creation details; differs for OAuth vs non-OAuth flows.
   * @default null
   */
  member: {
      /**
       * Credentials
       * @description Required for non-OAuth members: list of institution credentials.
       * @default null
       */
      credentials: {
          /**
           * Guid
           * @description Credential GUID obtained from List Institution Credentials.
           */
          guid: string;
          /**
           * Value
           * @description End-user credential value for the institution.
           */
          value: string;
      }[] | null;
      /**
       * Id
       * @description Partner-defined member ID.
       * @default null
       */
      id: string | null;
      /**
       * Institution Code
       * @description Institution code to connect.
       */
      institution_code: string;
      /**
       * Is Oauth
       * @description Set true to create an OAuth member.
       * @default null
       */
      is_oauth: boolean | null;
      /**
       * Metadata
       * @description Free-form metadata for the member.
       * @default null
       */
      metadata: string | null;
      /**
       * Skip Aggregation
       * @description If true, skip automatic aggregation on creation.
       * @default null
       */
      skip_aggregation: boolean | null;
  } | null;
  /**
   * Referral Source
   * @description For mobile OAuth only; set to 'APP'.
   * @default null
   * @constant
   */
  referral_source: "APP";
  /**
   * Ui Message Webview Url Scheme
   * @description Custom scheme for UI message webviews.
   * @default null
   */
  ui_message_webview_url_scheme: string | null;
  /**
   * User Guid
   * @description User GUID prefixed with 'USR-'.
   */
  user_guid?: string;
  /**
   * X Callback Payload
   * @description Optional base64-encoded payload echoed in member webhooks; max length 1024 chars.
   * @default null
   */
  x_callback_payload: string | null;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CREATE_MEMBER tool output.
 */
type MX_TECHNOLOGIES_CREATE_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Member */
      member: {
          /** Aggregated At */
          aggregated_at: string | null;
          /** Background Aggregation Is Disabled */
          background_aggregation_is_disabled: boolean | null;
          /** Connection Status */
          connection_status: string | null;
          /** Guid */
          guid: string;
          /** Id */
          id: string | null;
          /** Institution Code */
          institution_code: string;
          /** Is Being Aggregated */
          is_being_aggregated: boolean | null;
          /** Is Managed By User */
          is_managed_by_user: string | null;
          /** Is Manual */
          is_manual: boolean | null;
          /** Is Oauth */
          is_oauth: boolean | null;
          /** Metadata */
          metadata: string | null;
          /** Name */
          name: string | null;
          /** Oauth Window Uri */
          oauth_window_uri: string | null;
          /** Successfully Aggregated At */
          successfully_aggregated_at: string | null;
          /** User Guid */
          user_guid: string;
          /** User Id */
          user_id: string | null;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT tool input.
 */
type MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT_INPUT = {
  /**
   * Billing Locale
   * @description Currency locale; 'en_US' (USD) or 'en_GB' (GBP).
   * @default null
   * @enum {string|null}
   */
  billing_locale: "en_US" | "en_GB" | null;
  /**
   * Contact Email
   * @description Valid email address for the new client account.
   */
  contact_email?: string;
  /**
   * Contact Phone
   * @description Contact phone number for the client account.
   * @default null
   */
  contact_phone: string | null;
  /**
   * Country Code
   * @description Two-letter ISO 3166-1 country code.
   */
  country_code?: string;
  /**
   * Enable Single Billing
   * @description Enable single billing when partner account supports it and managed_site_owner is true.
   * @default null
   */
  enable_single_billing: boolean | null;
  /**
   * External Id
   * @description External authenticator's unique ID for the client account.
   * @default null
   */
  external_id: string | null;
  /**
   * External Provider
   * @description Name of the external authenticator (e.g., PayPal, Yahoo).
   * @default null
   */
  external_provider: string | null;
  /**
   * First Name
   * @description First name of the client account owner.
   * @default null
   */
  first_name: string | null;
  /**
   * Gdpr Opt Out
   * @description Set true to prevent marketing communications to the account.
   * @default null
   */
  gdpr_opt_out: boolean | null;
  /**
   * Idp Provider
   * @description SSO identity provider name (use in place of password).
   * @default null
   */
  idp_provider: string | null;
  /**
   * Idp Provider Id
   * @description SSO identity provider unique ID (use in place of password).
   * @default null
   */
  idp_provider_id: string | null;
  /**
   * Last Name
   * @description Last name of the client account owner.
   * @default null
   */
  last_name: string | null;
  /**
   * Login Name
   * @description Unique login; allowed characters: alphanumeric, '-', '_', '.', '+', '@'.
   */
  login_name?: string;
  /**
   * Managed Site Owner
   * @description Managed accounts default to true; overriding to false is ignored.
   * @default null
   */
  managed_site_owner: boolean | null;
  /**
   * Organization Name
   * @description Organization name for the client account.
   * @default null
   */
  organization_name: string | null;
  /**
   * Organization Phone
   * @description Organization phone number for the client account.
   * @default null
   */
  organization_phone: string | null;
  /**
   * Partner Account Id
   * @description Partner-defined unique identifier for billing or reporting.
   * @default null
   */
  partner_account_id: string | null;
  /**
   * Password
   * @description Password for the account (8–80 chars). Required unless using SSO/external authenticator.
   * @default null
   */
  password: string | null;
  /**
   * State Code
   * @description Required for US states and Canadian provinces; two-letter code.
   * @default null
   */
  state_code: string | null;
  /**
   * Time Zone Id
   * @description Time zone ID for the client's location.
   * @default null
   */
  time_zone_id: string | null;
  /**
   * Website
   * Format: uri
   * @default null
   */
  website: unknown;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT tool output.
 */
type MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Encoded Account Id
       * @description Unique ID of the newly created client account.
       */
      encoded_account_id: string;
      /**
       * Provision Uuid
       * @description Unique ID of the provision account request.
       */
      provision_uuid: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT_USER_SSO tool input.
 */
type MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT_USER_SSO_INPUT = {
  /**
   * Contact Email
   * Format: email
   * @description Unique email to associate with the user
   */
  contact_email?: string;
  /**
   * Encoded Account Id
   * @description The client account's encoded ID
   */
  encoded_account_id?: string;
  /**
   * External Id
   * @description ID that uniquely identifies the user for the external authenticator
   */
  external_id?: string;
  /**
   * First Name
   * @description User's first name
   */
  first_name?: string;
  /**
   * Last Name
   * @description User's last name
   */
  last_name?: string;
  /**
   * Login Name
   * @description Unique login name for the account
   */
  login_name?: string;
  /**
   * Role Name
   * @description User role; values include 'account_manager' or 'campaign_creator'
   * @enum {string}
   */
  role_name?: "account_manager" | "campaign_creator";
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT_USER_SSO tool output.
 */
type MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT_USER_SSO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Email
       * Format: email
       * @description User's email
       */
      contact_email: string;
      /**
       * External Id
       * @description External authenticator user ID
       */
      external_id: string;
      /**
       * External Provider
       * @description External identity provider name
       */
      external_provider: string;
      /**
       * First Name
       * @description User's first name
       */
      first_name: string;
      /**
       * Last Name
       * @description User's last name
       */
      last_name: string;
      /**
       * Login Name
       * @description User's login name
       */
      login_name: string;
      /**
       * Role Name
       * @description Assigned user role
       * @enum {string}
       */
      role_name: "account_manager" | "campaign_creator";
      /**
       * User Uuid
       * @description Constant Contact user UUID
       */
      user_uuid: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_FETCH_REWARDS tool input.
 */
type MX_TECHNOLOGIES_FETCH_REWARDS_INPUT = {
  /**
   * Member Guid
   * @description MX-assigned unique identifier for the member.
   */
  member_guid?: string;
  /**
   * User Guid
   * @description MX-assigned unique identifier for the user.
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_FETCH_REWARDS tool output.
 */
type MX_TECHNOLOGIES_FETCH_REWARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description HTTP status code returned by the fetch rewards API
       */
      status: number;
      /**
       * Text
       * @description Raw response body returned by the API
       */
      text: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_GET_CONFIGURABLE_WIDGET_URL tool input.
 */
type MX_TECHNOLOGIES_GET_CONFIGURABLE_WIDGET_URL_INPUT = {
  /**
   * Config
   * @description Configuration options container for the widget URL
   */
  config?: {
      /**
       * Is Mobile Webview
       * @description Render content in a mobile WebView
       * @default null
       */
      is_mobile_webview: boolean | null;
      /**
       * Type
       * @description Widget type (e.g., connect_widget, transactions_widget, pulse_widget)
       */
      type: string;
      /**
       * Ui Message Version
       * @description UI message version; use 4 for postMessage events
       * @default null
       */
      ui_message_version: number | null;
      /**
       * Use Cases
       * @description Array of use cases; supported values include 'PFM', 'MONEY_MOVEMENT'
       * @default null
       */
      use_cases: string[] | null;
  } & {
      [key: string]: unknown;
  };
  /**
   * Data Request
   * @description Optional data aggregation request (e.g., products).
   * @default null
   */
  data_request: {
      [key: string]: unknown;
  } | null;
  /**
   * User Guid
   * @description The user's GUID; must start with 'USR-' prefix
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_GET_CONFIGURABLE_WIDGET_URL tool output.
 */
type MX_TECHNOLOGIES_GET_CONFIGURABLE_WIDGET_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Type
       * @description Widget type returned by the API
       */
      type: string;
      /**
       * Url
       * @description Single-use widget URL; expires after 10 minutes or upon use
       */
      url: string;
      /**
       * User Id
       * @description Identifier of the user for whom the URL was generated
       */
      user_id: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_ACCOUNTS tool input.
 */
type MX_TECHNOLOGIES_LIST_ACCOUNTS_INPUT = {
  /**
   * Is Manual
   * @description Only include accounts that were manually created.
   * @default null
   */
  is_manual: boolean | null;
  /**
   * Member Is Managed By User
   * @description Only include accounts whose member is managed by the user.
   * @default null
   */
  member_is_managed_by_user: boolean | null;
  /**
   * Page
   * @description Page number of results to return (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page (10-1000). Defaults to MX default of 25.
   * @default null
   */
  records_per_page: number | null;
  /**
   * Use Case
   * @description Filter accounts by member use cases: 'PFM' and/or 'MONEY_MOVEMENT'.
   * @default null
   */
  use_case: string[] | null;
  /**
   * User Guid
   * @description MX user GUID (must start with 'USR-').
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_ACCOUNTS tool output.
 */
type MX_TECHNOLOGIES_LIST_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of account objects.
       */
      accounts: {
          /**
           * Available Balance
           * @description Available balance for spending.
           */
          available_balance: number;
          /**
           * Balance
           * @description Current total balance of the account.
           */
          balance: number;
          /**
           * Created At
           * @description ISO 8601 timestamp when account was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Currency Code
           * @description ISO 4217 currency code.
           * @default null
           */
          currency_code: string | null;
          /**
           * Guid
           * @description MX account GUID.
           */
          guid: string;
          /**
           * Institution Guid
           * @description MX institution GUID linked to the account.
           * @default null
           */
          institution_guid: string | null;
          /**
           * Is Closed
           * @description Flag indicating if account is closed.
           * @default null
           */
          is_closed: boolean | null;
          /**
           * Is Manual
           * @description Flag indicating if account was manually created.
           * @default null
           */
          is_manual: boolean | null;
          /**
           * Member Guid
           * @description MX member GUID owning the account.
           * @default null
           */
          member_guid: string | null;
          /**
           * Member Is Managed By User
           * @description Flag if account's member is managed by the user.
           * @default null
           */
          member_is_managed_by_user: boolean | null;
          /**
           * Name
           * @description Name of the account.
           * @default null
           */
          name: string | null;
          /**
           * Subtype
           * @description Specific account subtype.
           * @default null
           */
          subtype: string | null;
          /**
           * Type
           * @description General account type.
           * @default null
           */
          type: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when account was last updated.
           * @default null
           */
          updated_at: string | null;
          /**
           * User Guid
           * @description MX user GUID owning the account.
           */
          user_guid: string;
      }[];
      /**
       * Pagination
       * @description Pagination metadata.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_ACCOUNT_NUMBERS_BY_MEMBER tool input.
 */
type MX_TECHNOLOGIES_LIST_ACCOUNT_NUMBERS_BY_MEMBER_INPUT = {
  /**
   * Member Guid
   * @description MX member GUID (must start with 'MEM-').
   */
  member_guid?: string;
  /**
   * Page
   * @description Page number of results (>=1).
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page (10-1000).
   * @default null
   */
  records_per_page: number | null;
  /**
   * User Guid
   * @description MX user GUID (must start with 'USR-').
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_ACCOUNT_NUMBERS_BY_MEMBER tool output.
 */
type MX_TECHNOLOGIES_LIST_ACCOUNT_NUMBERS_BY_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Numbers
       * @description List of account-number records.
       */
      account_numbers: {
          /**
           * Account Guid
           * @description MX GUID of the related account.
           */
          account_guid: string;
          /**
           * Account Number
           * @description Bank account number.
           */
          account_number: string;
          /**
           * Guid
           * @description MX GUID of the account-number record.
           */
          guid: string;
          /**
           * Institution Number
           * @description Canadian institution number (3 digits).
           * @default null
           */
          institution_number: string | null;
          /**
           * Loan Guarantor
           * @description Student-loan guarantor.
           * @default null
           */
          loan_guarantor: string | null;
          /**
           * Loan Reference Number
           * @description Student-loan reference number.
           * @default null
           */
          loan_reference_number: string | null;
          /**
           * Member Guid
           * @description MX GUID of the related member.
           */
          member_guid: string;
          /**
           * Passed Validation
           * @description Indicates MX validity checks passed.
           */
          passed_validation: boolean;
          /**
           * Routing Number
           * @description US routing number.
           * @default null
           */
          routing_number: string | null;
          /**
           * Sequence Number
           * @description Student-loan sequence number.
           * @default null
           */
          sequence_number: string | null;
          /**
           * Transit Number
           * @description Canadian branch transit number (5 digits).
           * @default null
           */
          transit_number: string | null;
          /**
           * User Guid
           * @description MX GUID of the related user.
           */
          user_guid: string;
      }[];
      /**
       * Pagination
       * @description Paging information for the list.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total records available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total pages available.
           */
          total_pages: number;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS tool input.
 */
type MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS_INPUT = {
  /**
   * Member Guid
   * @description Member GUID, must start with 'MEM-'.
   */
  member_guid?: string;
  /**
   * Page
   * @description Page number to retrieve (>=1).
   * @default 1
   */
  page: number;
  /**
   * Records Per Page
   * @description Number of records per page; valid values 10-1000.
   * @default 25
   */
  records_per_page: number;
  /**
   * User Guid
   * @description User GUID, must start with 'USR-'.
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS tool output.
 */
type MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Owners
       * @description List of account owner objects.
       */
      account_owners: {
          /**
           * Account Guid
           * @description Account GUID tied to this owner.
           */
          account_guid: string;
          /**
           * Address
           * @description Owner's street address.
           */
          address: string;
          /**
           * City
           * @description Owner's city.
           */
          city: string;
          /**
           * Country
           * @description Owner's country code (ISO 3166-1 alpha-2).
           */
          country: string;
          /**
           * Email
           * @description Owner's email address.
           */
          email: string;
          /**
           * First Name
           * @description Owner's first name.
           */
          first_name: string;
          /**
           * Guid
           * @description Account owner GUID.
           */
          guid: string;
          /**
           * Last Name
           * @description Owner's last name.
           */
          last_name: string;
          /**
           * Member Guid
           * @description Member GUID associated with the owner.
           */
          member_guid: string;
          /**
           * Owner Name
           * @description Full owner name.
           */
          owner_name: string;
          /**
           * Phone
           * @description Owner's phone number.
           */
          phone: string;
          /**
           * Postal Code
           * @description Owner's postal or ZIP code.
           */
          postal_code: string;
          /**
           * State
           * @description Owner's state or region.
           */
          state: string;
          /**
           * User Guid
           * @description User GUID associated with the owner.
           */
          user_guid: string;
      }[];
      /**
       * Pagination
       * @description Pagination information for the list response.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of records available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS_BY_MEMBER tool input.
 */
type MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS_BY_MEMBER_INPUT = {
  /**
   * Member Guid
   * @description Unique identifier for the member.
   */
  member_guid?: string;
  /**
   * Page
   * @description Page number for paginated results (>=1).
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page; defaults to 25 if not provided. Valid range is 10-1000.
   * @default null
   */
  records_per_page: number | null;
  /**
   * User Guid
   * @description Unique identifier for the user (prefix USR-).
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS_BY_MEMBER tool output.
 */
type MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS_BY_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Owners
       * @description List of account owner objects for the member.
       */
      account_owners: {
          /**
           * Account Guid
           * @description MX-defined GUID of the related account.
           */
          account_guid: string;
          /**
           * Address
           * @description Owner's street address.
           * @default null
           */
          address: string | null;
          /**
           * City
           * @description Owner's city.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Owner's country.
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description Owner's email address.
           */
          email: string;
          /**
           * First Name
           * @description Owner's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Guid
           * @description MX-defined GUID of the account owner.
           */
          guid: string;
          /**
           * Last Name
           * @description Owner's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Member Guid
           * @description MX-defined GUID of the related member.
           */
          member_guid: string;
          /**
           * Owner Name
           * @description Full owner name.
           */
          owner_name: string;
          /**
           * Phone
           * @description Owner's phone number.
           * @default null
           */
          phone: string | null;
          /**
           * Postal Code
           * @description Owner's postal code.
           * @default null
           */
          postal_code: string | null;
          /**
           * State
           * @description Owner's state.
           * @default null
           */
          state: string | null;
          /**
           * User Guid
           * @description MX-defined GUID of the related user.
           */
          user_guid: string;
      }[];
      /**
       * Pagination
       * @description Pagination information.
       */
      pagination: {
          /**
           * Current Page
           * @description Page number returned.
           */
          current_page: number;
          /**
           * Per Page
           * @description Records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total records available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total pages available.
           */
          total_pages: number;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_BUDGETS tool input.
 */
type MX_TECHNOLOGIES_LIST_BUDGETS_INPUT = {
  /**
   * User Guid
   * @description The unique identifier (GUID) of the MX user.
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_BUDGETS tool output.
 */
type MX_TECHNOLOGIES_LIST_BUDGETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Budgets
       * @description A list of budget objects for the user.
       */
      budgets: {
          /**
           * Amount
           * @description Target monthly spend for the category.
           */
          amount: number;
          /**
           * Category Guid
           * @description MX-defined GUID of the budget’s category.
           */
          category_guid: string;
          /**
           * Created At
           * @description Timestamp (ISO 8601) when the budget was created.
           */
          created_at: string;
          /**
           * Guid
           * @description MX-defined budget GUID.
           */
          guid: string;
          /**
           * Is Exceeded
           * @description True if spending has exceeded the budget.
           */
          is_exceeded: boolean;
          /**
           * Is Off Track
           * @description True if spending is off track.
           */
          is_off_track: boolean;
          /**
           * Metadata
           * @description Partner-defined freeform metadata.
           * @default null
           */
          metadata: string | null;
          /**
           * Name
           * @description User-visible budget name (e.g., Food, Bills).
           */
          name: string;
          /**
           * Off Track Percentage
           * @description Off-track percentage (deprecated).
           * @default null
           */
          off_track_percentage: number | null;
          /**
           * Parent Guid
           * @description GUID of the parent budget (for sub-budgets).
           * @default null
           */
          parent_guid: string | null;
          /**
           * Percent Spent
           * @description Percentage spent this month: transaction_total/amount*100; zero if amount is zero.
           */
          percent_spent: number;
          /**
           * Projected Spending
           * @description Projected spend for the budget.
           */
          projected_spending: number;
          /**
           * Revision
           * @description Revision number of the budget record.
           */
          revision: number;
          /**
           * Transaction Total
           * @description Cumulative transactions amount under the budget.
           */
          transaction_total: number;
          /**
           * Updated At
           * @description Timestamp (ISO 8601) when the budget was last updated.
           */
          updated_at: string;
          /**
           * User Guid
           * @description MX-defined user GUID.
           */
          user_guid: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_CATEGORIES tool input.
 */
type MX_TECHNOLOGIES_LIST_CATEGORIES_INPUT = {
  /**
   * Page
   * @description Page number of results to return. Must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Records Per Page
   * @description Number of records per page (10-1000). Defaults to 25.
   * @default 25
   */
  records_per_page: number;
  /**
   * User Guid
   * @description The unique identifier (GUID) of the MX user.
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_CATEGORIES tool output.
 */
type MX_TECHNOLOGIES_LIST_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of this user's default and custom categories.
       */
      categories: {
          /**
           * Created At
           * @description ISO 8601 timestamp when custom category was created (null for defaults).
           * @default null
           */
          created_at: string | null;
          /**
           * Guid
           * @description The unique identifier (GUID) of the category.
           */
          guid: string;
          /**
           * Is Default
           * @description Whether this is a default MX category.
           */
          is_default: boolean;
          /**
           * Is Income
           * @description Whether this category represents income.
           */
          is_income: boolean;
          /**
           * Metadata
           * @description Client-specific meta information for the category.
           */
          metadata: string;
          /**
           * Name
           * @description The name of the category.
           */
          name: string;
          /**
           * Parent Guid
           * @description GUID of the parent category, if this is a sub-category.
           * @default null
           */
          parent_guid: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when custom category was last updated (null for defaults).
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Pagination
       * @description Pagination information for the result set.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_CHALLENGES tool input.
 */
type MX_TECHNOLOGIES_LIST_CHALLENGES_INPUT = {
  /**
   * Member Guid
   * @description The unique identifier (GUID) for the member.
   */
  member_guid?: string;
  /**
   * Page
   * @description Page number for paginated results, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Records Per Page
   * @description Number of records per page; valid range 10–1000 (default 25).
   * @default 25
   */
  records_per_page: number;
  /**
   * User Guid
   * @description The unique identifier (GUID) for the MX user (prefix 'USR-').
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_CHALLENGES tool output.
 */
type MX_TECHNOLOGIES_LIST_CHALLENGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Challenges
       * @description List of challenge objects to present to the end user.
       */
      challenges: {
          /**
           * Field Name
           * @description Non-unique key identifying this challenge field.
           */
          field_name: string;
          /**
           * Guid
           * @description Globally unique identifier for the challenge.
           */
          guid: string;
          /**
           * Image Data
           * @description Base64-encoded image when type is 'IMAGE_DATA'.
           * @default null
           */
          image_data: string | null;
          /**
           * Image Options
           * @description List of encoded images when type is 'IMAGE_OPTIONS'.
           * @default null
           */
          image_options: string[] | null;
          /**
           * Label
           * @description Human-readable prompt presented to the user.
           */
          label: string;
          /**
           * Options
           * @description List of selectable responses when type is 'OPTIONS'.
           * @default null
           */
          options: string[] | null;
          /**
           * Type
           * @description Type of challenge; controls which conditional fields are present.
           * @enum {string}
           */
          type: "TEXT" | "OPTIONS" | "TOKEN" | "IMAGE_DATA" | "IMAGE_OPTIONS";
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_CONNECT_WIDGET_URLS tool input.
 */
type MX_TECHNOLOGIES_LIST_CONNECT_WIDGET_URLS_INPUT = {
  /**
   * Config
   * @description Optional configuration for the widget. If provided, keys will be sent under widget_url. If a 'type' key is provided it will be mapped to 'widget_type'.
   * @default null
   */
  config: {
      [key: string]: unknown;
  } | null;
  /**
   * Data Request
   * @description Optional data aggregation request (e.g., { 'products': ['transactions'] }).
   * @default null
   */
  data_request: {
      [key: string]: unknown;
  } | null;
  /**
   * User Guid
   * @description The unique identifier (GUID) of the MX user.
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_CONNECT_WIDGET_URLS tool output.
 */
type MX_TECHNOLOGIES_LIST_CONNECT_WIDGET_URLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connect Widget Urls
       * @description A list of Connect widget URL objects.
       */
      connect_widget_urls: {
          /**
           * Type
           * @description Widget type (e.g., 'connect_widget').
           */
          type: string;
          /**
           * Url
           * @description Single-use URL to load the Connect widget.
           */
          url: string;
          /**
           * User Id
           * @description The user identifier associated with this URL.
           */
          user_id: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_FAVORITE_INSTITUTIONS tool input.
 */
type MX_TECHNOLOGIES_LIST_FAVORITE_INSTITUTIONS_INPUT = {
  /**
   * Iso Country Code
   * @description Filter by ISO country codes (e.g., ['US', 'CA']).
   * @default null
   */
  iso_country_code: string[] | null;
  /**
   * Page
   * @description Page number of results to return. Must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Records Per Page
   * @description Number of records per page (10-100). Defaults to 25.
   * @default 25
   */
  records_per_page: number;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_FAVORITE_INSTITUTIONS tool output.
 */
type MX_TECHNOLOGIES_LIST_FAVORITE_INSTITUTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Institutions
       * @description List of favorite institution objects.
       */
      institutions: ({
          /**
           * Category
           * @description Category of the financial institution.
           * @default null
           */
          category: string | null;
          /**
           * Code
           * @description MX-defined institution code.
           */
          code: string;
          /**
           * Home Url
           * @description Homepage URL of the institution.
           * @default null
           */
          home_url: string | null;
          /**
           * Is Oauth
           * @description Indicates if the institution uses OAuth authentication.
           * @default null
           */
          is_oauth: boolean | null;
          /**
           * Name
           * @description Name of the institution.
           */
          name: string;
          /**
           * Type
           * @description Type of the institution.
           * @default null
           */
          type: string | null;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Pagination
       * @description Pagination information for the result set.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of records available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_GOALS tool input.
 */
type MX_TECHNOLOGIES_LIST_GOALS_INPUT = {
  /**
   * From Date
   * @description Return goals created on or after this date (YYYY-MM-DD).
   * @default null
   */
  from_date: string | null;
  /**
   * Page
   * @description Page number of results to return. Must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page (1-1000).
   * @default null
   */
  records_per_page: number | null;
  /**
   * To Date
   * @description Return goals created on or before this date (YYYY-MM-DD).
   * @default null
   */
  to_date: string | null;
  /**
   * User Guid
   * @description The unique identifier (GUID) of the MX user.
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_GOALS tool output.
 */
type MX_TECHNOLOGIES_LIST_GOALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Goals
       * @description List of goal objects.
       */
      goals: {
          /**
           * Created At
           * @description Timestamp (ISO 8601) when the goal was created.
           */
          created_at: string;
          /**
           * Current Amount
           * @description Current amount saved for the goal.
           */
          current_amount: number;
          /**
           * Description
           * @description User-defined goal description.
           * @default null
           */
          description: string | null;
          /**
           * Guid
           * @description MX-defined goal GUID.
           */
          guid: string;
          /**
           * Progress Percentage
           * @description Progress percentage: current_amount/target_amount*100.
           */
          progress_percentage: number;
          /**
           * Start Date
           * @description Start date of the goal (YYYY-MM-DD).
           */
          start_date: string;
          /**
           * Status
           * @description Status of the goal (e.g., active, completed, cancelled).
           */
          status: string;
          /**
           * Target Amount
           * @description Target amount for the goal.
           */
          target_amount: number;
          /**
           * Target Date
           * @description Target date to achieve the goal (YYYY-MM-DD).
           */
          target_date: string;
          /**
           * Title
           * @description User-defined title for the goal.
           */
          title: string;
          /**
           * Updated At
           * @description Timestamp (ISO 8601) when the goal was last updated.
           */
          updated_at: string;
          /**
           * User Guid
           * @description MX-defined user GUID.
           */
          user_guid: string;
      }[];
      /**
       * Pagination
       * @description Pagination information for the result set.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
          /**
           * Total Records
           * @description Total number of records available.
           */
          total_records: number;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_INSTITUTIONS tool input.
 */
type MX_TECHNOLOGIES_LIST_INSTITUTIONS_INPUT = {
  /**
   * Iso Country Code
   * @description Filter by ISO country codes (e.g., ['US', 'CA', 'MX']).
   * @default null
   */
  iso_country_code: string[] | null;
  /**
   * Name
   * @description Filter to institutions whose name contains the given substring.
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number for pagination; must be >= 1.
   * @default 1
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Records per page; valid values: 10-100. Defaults to 25; values >100 reset to 25.
   * @default 25
   */
  records_per_page: number | null;
  /**
   * Supported Products
   * @description Filter by supported products; e.g., ['account_verification','identity_verification','transactions','history','statements','investments'].
   * @default null
   */
  supported_products: string[] | null;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_INSTITUTIONS tool output.
 */
type MX_TECHNOLOGIES_LIST_INSTITUTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Institutions
       * @description List of institutions returned by MX.
       */
      institutions: {
          /**
           * Code
           * @description Institution code defined by MX.
           */
          code: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the institution was created.
           */
          created_at: string;
          /**
           * Forgot Password Url
           * @description URL for institution's forgot password page.
           * @default null
           */
          forgot_password_url: string | null;
          /**
           * Forgot Username Url
           * @description URL for institution's forgot username page.
           * @default null
           */
          forgot_username_url: string | null;
          /**
           * Guid
           * @description Unique MX GUID for the institution.
           */
          guid: string;
          /**
           * Instructional Text
           * @description Text instructions for institution login flow.
           * @default null
           */
          instructional_text: string | null;
          /**
           * Instructional Text Steps
           * @description List of steps for instructional text, if provided.
           * @default null
           */
          instructional_text_steps: string[] | null;
          /**
           * Is Disabled By Client
           * @description Whether the institution is disabled for this client.
           */
          is_disabled_by_client: boolean;
          /**
           * Is Hidden
           * @description Whether the institution is hidden.
           */
          is_hidden: boolean;
          /**
           * Iso Country Code
           * @description ISO country code of the institution.
           */
          iso_country_code: string;
          /**
           * Medium Logo Url
           * @description URL to the medium logo image of the institution.
           * @default null
           */
          medium_logo_url: string | null;
          /**
           * Name
           * @description Name of the institution.
           */
          name: string;
          /**
           * Small Logo Url
           * @description URL to the small logo image of the institution.
           * @default null
           */
          small_logo_url: string | null;
          /**
           * Supports Account Identification
           * @description Whether institution supports account identification.
           */
          supports_account_identification: boolean;
          /**
           * Supports Account Statement
           * @description Whether institution supports account statements.
           */
          supports_account_statement: boolean;
          /**
           * Supports Account Verification
           * @description Whether institution supports account verification.
           */
          supports_account_verification: boolean;
          /**
           * Supports Oauth
           * @description Whether institution supports OAuth connections.
           */
          supports_oauth: boolean;
          /**
           * Supports Tax Document
           * @description Whether institution supports tax documents.
           */
          supports_tax_document: boolean;
          /**
           * Supports Transaction History
           * @description Whether institution supports transaction history.
           */
          supports_transaction_history: boolean;
          /**
           * Trouble Signing In Url
           * @description URL for help with signing in.
           * @default null
           */
          trouble_signing_in_url: string | null;
          /**
           * Url
           * @description URL of the institution's login page.
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Pagination
       * @description Pagination information for the result set.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_INSTITUTION_CREDENTIALS tool input.
 */
type MX_TECHNOLOGIES_LIST_INSTITUTION_CREDENTIALS_INPUT = {
  /**
   * Institution Code
   * @description MX-defined code for the institution (e.g., 'mxbank').
   */
  institution_code?: string;
  /**
   * Page
   * @description Page number for pagination; must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page for pagination; must be >= 1.
   * @default null
   */
  records_per_page: number | null;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_INSTITUTION_CREDENTIALS tool output.
 */
type MX_TECHNOLOGIES_LIST_INSTITUTION_CREDENTIALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credentials
       * @description List of credential field definitions.
       */
      credentials: {
          /**
           * Display Name
           * @description Human-readable label for the field.
           */
          display_name: string;
          /**
           * Field Name
           * @description Internal name of the credential field.
           */
          field_name: string;
          /**
           * Guid
           * @description Unique identifier for the credential field.
           */
          guid: string;
          /**
           * Image Url
           * @description URL to an image associated with the field, if provided.
           * @default null
           */
          image_url: string | null;
          /**
           * Is Optional
           * @description Whether the field is optional.
           */
          is_optional: boolean;
          /**
           * Options
           * @description List of possible values for the field, if applicable.
           * @default null
           */
          options: string[] | null;
          /**
           * Position
           * @description Position of the field in the institution's login flow.
           */
          position: number;
          /**
           * Type
           * @description Type of the field (e.g., 'PASSWORD', 'LOGIN').
           */
          type: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_MEMBERS tool input.
 */
type MX_TECHNOLOGIES_LIST_MEMBERS_INPUT = {
  /**
   * Page
   * @description Page number of results to return. Must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Records Per Page
   * @description Number of records per page (10-1000). Defaults to 25.
   * @default 25
   */
  records_per_page: number;
  /**
   * Use Case
   * @description Filter members by one or more use cases: PFM and/or MONEY_MOVEMENT.
   * @default null
   */
  use_case: string[] | null;
  /**
   * User Guid
   * @description MX-defined unique user identifier (prefix 'USR-').
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_MEMBERS tool output.
 */
type MX_TECHNOLOGIES_LIST_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description List of members for the user.
       */
      members: {
          /**
           * Aggregated At
           * @description When the most recent aggregation job started (ISO 8601).
           * @default null
           */
          aggregated_at: string | null;
          /**
           * Background Aggregation Is Disabled
           * @description Whether background aggregation is disabled.
           * @default null
           */
          background_aggregation_is_disabled: boolean | null;
          /**
           * Connection Status
           * @description Current aggregation state of the member.
           * @default null
           */
          connection_status: string | null;
          /**
           * Connection Status Message
           * @description User-facing message to guide through connection/aggregation.
           * @default null
           */
          connection_status_message: string | null;
          /**
           * Guid
           * @description MX-defined member GUID.
           * @default null
           */
          guid: string | null;
          /**
           * Id
           * @description Partner-defined member identifier.
           * @default null
           */
          id: string | null;
          /**
           * Institution Code
           * @description MX-defined institution code.
           * @default null
           */
          institution_code: string | null;
          /**
           * Institution Guid
           * @description MX-defined institution GUID.
           * @default null
           */
          institution_guid: string | null;
          /**
           * Is Being Aggregated
           * @description Whether the member is being aggregated at request time.
           * @default null
           */
          is_being_aggregated: boolean | null;
          /**
           * Is Managed By User
           * @description Indicates if the member is managed by the user or the partner.
           * @default null
           */
          is_managed_by_user: string | null;
          /**
           * Is Manual
           * @description Whether this member was created manually.
           * @default null
           */
          is_manual: boolean | null;
          /**
           * Is Oauth
           * @description Whether the member uses OAuth for authentication.
           * @default null
           */
          is_oauth: boolean | null;
          /**
           * Metadata
           * @description Freeform metadata stored for the member.
           * @default null
           */
          metadata: string | null;
          /**
           * Most Recent Job Detail Code
           * @description (Deprecated) No longer used.
           * @default null
           */
          most_recent_job_detail_code: string | null;
          /**
           * Most Recent Job Detail Text
           * @description (Deprecated) No longer used.
           * @default null
           */
          most_recent_job_detail_text: string | null;
          /**
           * Most Recent Job Guid
           * @description GUID of the most recent aggregation job.
           * @default null
           */
          most_recent_job_guid: string | null;
          /**
           * Name
           * @description Human-readable member name.
           * @default null
           */
          name: string | null;
          /**
           * Needs Updated Credentials
           * @description When true, MX will not aggregate until credentials are updated.
           * @default null
           */
          needs_updated_credentials: string | null;
          /**
           * Oauth Window Uri
           * @description OAuth authorization URL when OAuth is required.
           * @default null
           */
          oauth_window_uri: string | null;
          /**
           * Successfully Aggregated At
           * @description When the member was last successfully aggregated (ISO 8601).
           * @default null
           */
          successfully_aggregated_at: string | null;
          /**
           * User Guid
           * @description MX-defined user GUID associated with this member.
           * @default null
           */
          user_guid: string | null;
          /**
           * User Id
           * @description Partner-defined user identifier associated with this member.
           * @default null
           */
          user_id: string | null;
      }[];
      /**
       * Pagination
       * @description Pagination information.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of records available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_MEMBER_ACCOUNTS tool input.
 */
type MX_TECHNOLOGIES_LIST_MEMBER_ACCOUNTS_INPUT = {
  /**
   * Member Guid
   * @description MX member GUID (must start with 'MBR-' or 'MEM-').
   */
  member_guid?: string;
  /**
   * Member Is Managed By User
   * @description Filter accounts whose member is managed by the user.
   * @default null
   */
  member_is_managed_by_user: boolean | null;
  /**
   * Page
   * @description Page number of results to return (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page. Defaults to MX default if not specified.
   * @default null
   */
  records_per_page: number | null;
  /**
   * User Guid
   * @description MX user GUID (must start with 'USR-').
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_MEMBER_ACCOUNTS tool output.
 */
type MX_TECHNOLOGIES_LIST_MEMBER_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of account objects.
       */
      accounts: {
          /**
           * Account Number
           * @description Account number (masked/partial).
           * @default null
           */
          account_number: string | null;
          /**
           * Apr
           * @description Annual percentage rate.
           * @default null
           */
          apr: number | null;
          /**
           * Apy
           * @description Annual percentage yield.
           * @default null
           */
          apy: number | null;
          /**
           * Available Balance
           * @description Available balance for spending.
           */
          available_balance: number;
          /**
           * Available Credit
           * @description Available credit (for liabilities).
           * @default null
           */
          available_credit: number | null;
          /**
           * Balance
           * @description Current total balance of the account.
           */
          balance: number;
          /**
           * Cash Balance
           * @description Cash balance (if applicable).
           * @default null
           */
          cash_balance: number | null;
          /**
           * Cash Surrender Value
           * @description Insurance cash surrender value.
           * @default null
           */
          cash_surrender_value: number | null;
          /**
           * Created At
           * @description Account creation timestamp (ISO 8601).
           * @default null
           */
          created_at: string | null;
          /**
           * Credit Limit
           * @description Credit limit for the account.
           * @default null
           */
          credit_limit: number | null;
          /**
           * Currency Code
           * @description ISO 4217 currency code.
           * @default null
           */
          currency_code: string | null;
          /**
           * Day Payment Is Due
           * @description Day of month payment is due (e.g., '14').
           * @default null
           */
          day_payment_is_due: string | null;
          /**
           * Death Benefit
           * @description Insurance death benefit amount.
           * @default null
           */
          death_benefit: number | null;
          /**
           * Guid
           * @description MX account GUID.
           */
          guid: string;
          /**
           * Institution Code
           * @description MX-defined institution code.
           * @default null
           */
          institution_code: string | null;
          /**
           * Interest Rate
           * @description Interest rate for the account.
           * @default null
           */
          interest_rate: number | null;
          /**
           * Is Closed
           * @description Indicates if the account is closed.
           * @default null
           */
          is_closed: boolean | null;
          /**
           * Last Payment
           * @description Amount of most recent payment.
           * @default null
           */
          last_payment: number | null;
          /**
           * Last Payment At
           * @description Timestamp of most recent payment (ISO 8601).
           * @default null
           */
          last_payment_at: string | null;
          /**
           * Matures On
           * @description Account maturity date (ISO 8601).
           * @default null
           */
          matures_on: string | null;
          /**
           * Member Guid
           * @description MX member GUID owning the account.
           */
          member_guid: string;
          /**
           * Minimum Balance
           * @description Minimum balance requirement.
           * @default null
           */
          minimum_balance: number | null;
          /**
           * Minimum Payment
           * @description Minimum required payment.
           * @default null
           */
          minimum_payment: number | null;
          /**
           * Name
           * @description Human-readable account name.
           * @default null
           */
          name: string | null;
          /**
           * Original Balance
           * @description Original balance (usually positive).
           * @default null
           */
          original_balance: number | null;
          /**
           * Payment Due At
           * @description Next payment due datetime (ISO 8601).
           * @default null
           */
          payment_due_at: string | null;
          /**
           * Payoff Balance
           * @description Payoff amount for debt account.
           * @default null
           */
          payoff_balance: number | null;
          /**
           * Started On
           * @description Debt account start date (ISO 8601).
           * @default null
           */
          started_on: string | null;
          /**
           * Subtype
           * @description Specific account subtype.
           * @default null
           */
          subtype: string | null;
          /**
           * Total Account Value
           * @description Total value for investment-type accounts.
           * @default null
           */
          total_account_value: number | null;
          /**
           * Type
           * @description General account type.
           * @default null
           */
          type: string | null;
          /**
           * Updated At
           * @description Account last update timestamp (ISO 8601).
           * @default null
           */
          updated_at: string | null;
          /**
           * User Guid
           * @description MX user GUID owning the account.
           */
          user_guid: string;
      }[];
      /**
       * Pagination
       * @description Pagination metadata.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_REWARDS tool input.
 */
type MX_TECHNOLOGIES_LIST_REWARDS_INPUT = {
  /**
   * Member Guid
   * @description MX-assigned unique identifier for the member.
   */
  member_guid?: string;
  /**
   * Page
   * @description Page number for paginated results (>=1).
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page (>=1).
   * @default null
   */
  records_per_page: number | null;
  /**
   * User Guid
   * @description MX-assigned unique identifier for the user.
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_REWARDS tool output.
 */
type MX_TECHNOLOGIES_LIST_REWARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information for the result set.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
      };
      /**
       * Rewards
       * @description List of reward objects for the member.
       */
      rewards: {
          /**
           * Account Guid
           * @description Account GUID associated with the reward.
           */
          account_guid: string;
          /**
           * Balance
           * @description Reward balance.
           */
          balance: number;
          /**
           * Balance Type
           * @description Type of balance (e.g., BALANCE, EXPIRING_BALANCE, TOTAL_BALANCE, BALANCE_TO_LEVEL, BALANCE_TO_REWARD).
           */
          balance_type: string;
          /**
           * Created At
           * @description Timestamp when the reward was created.
           */
          created_at: string;
          /**
           * Description
           * @description Description from the data provider, if available.
           * @default null
           */
          description: string | null;
          /**
           * Expires On
           * @description Date the balance expires, if applicable.
           * @default null
           */
          expires_on: string | null;
          /**
           * Guid
           * @description Reward GUID.
           */
          guid: string;
          /**
           * Member Guid
           * @description Member GUID linked to the reward.
           */
          member_guid: string;
          /**
           * Unit Type
           * @description Units type (e.g., MILES, POINTS, SEGMENTS, DOLLARS).
           */
          unit_type: string;
          /**
           * User Guid
           * @description User GUID linked to the reward.
           */
          user_guid: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_STATEMENTS_BY_MEMBER tool input.
 */
type MX_TECHNOLOGIES_LIST_STATEMENTS_BY_MEMBER_INPUT = {
  /**
   * Member Guid
   * @description MX member GUID (must start with 'MEM-').
   */
  member_guid?: string;
  /**
   * Page
   * @description Page number of results to return (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page (10-1000). Defaults to MX default of 25.
   * @default null
   */
  records_per_page: number | null;
  /**
   * User Guid
   * @description MX user GUID (must start with 'USR-').
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_STATEMENTS_BY_MEMBER tool output.
 */
type MX_TECHNOLOGIES_LIST_STATEMENTS_BY_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information for navigating the result set.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
      };
      /**
       * Statements
       * @description Array of statement objects for the specified member.
       */
      statements: {
          /**
           * Account Guid
           * @description GUID of the account associated with this statement.
           */
          account_guid: string;
          /**
           * Content Hash
           * @description SHA-256 hash of the statement payload bytes.
           */
          content_hash: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the statement was created.
           */
          created_at: string;
          /**
           * Guid
           * @description Unique statement GUID.
           */
          guid: string;
          /**
           * Member Guid
           * @description GUID of the member owning this statement.
           */
          member_guid: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the statement was last updated.
           */
          updated_at: string;
          /**
           * Uri
           * @description URI to access the statement payload (e.g., PDF endpoint).
           */
          uri: string;
          /**
           * User Guid
           * @description GUID of the user associated with this statement.
           */
          user_guid: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_TAGGINGS tool input.
 */
type MX_TECHNOLOGIES_LIST_TAGGINGS_INPUT = {
  /**
   * Page
   * @description Page number of results to return. Must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Records Per Page
   * @description Number of records per page (10-1000). Defaults to 25.
   * @default 25
   */
  records_per_page: number;
  /**
   * User Guid
   * @description The unique identifier (GUID) of the MX user (prefix USR-).
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_TAGGINGS tool output.
 */
type MX_TECHNOLOGIES_LIST_TAGGINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information for the result set.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
      };
      /**
       * Taggings
       * @description List of tagging objects for the user.
       */
      taggings: {
          [key: string]: unknown;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_TAGS tool input.
 */
type MX_TECHNOLOGIES_LIST_TAGS_INPUT = {
  /**
   * Page
   * @description Page number of results to return. Must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page (>=1).
   * @default null
   */
  records_per_page: number | null;
  /**
   * User Guid
   * @description The unique identifier (GUID) of the MX user.
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_TAGS tool output.
 */
type MX_TECHNOLOGIES_LIST_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information for the result set.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total pages available.
           */
          total_pages: number;
      };
      /**
       * Tags
       * @description List of tag objects for the user.
       */
      tags: {
          /**
           * Classification
           * @description Classification of the tag, if provided.
           * @default null
           */
          classification: string | null;
          /**
           * Created At
           * @description Timestamp (ISO 8601) when the tag was created.
           */
          created_at: string;
          /**
           * Guid
           * @description MX-defined unique identifier for the tag.
           */
          guid: string;
          /**
           * Metadata
           * @description Partner-defined freeform metadata for the tag.
           * @default null
           */
          metadata: string | null;
          /**
           * Name
           * @description The name of the tag.
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp (ISO 8601) when the tag was last updated.
           */
          updated_at: string;
          /**
           * User Guid
           * @description MX-defined unique identifier for the user that owns the tag.
           */
          user_guid: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_TRANSACTIONS tool input.
 */
type MX_TECHNOLOGIES_LIST_TRANSACTIONS_INPUT = {
  /**
   * From Created At
   * @description Unix timestamp to filter transactions created from this time (inclusive).
   * @default null
   */
  from_created_at: number | null;
  /**
   * From Date
   * @description Unix timestamp to filter transactions from this date (inclusive).
   * @default null
   */
  from_date: number | null;
  /**
   * From Updated At
   * @description Unix timestamp to filter transactions updated from this time (inclusive).
   * @default null
   */
  from_updated_at: number | null;
  /**
   * Includes
   * @description Optional enhancements to include: repeating_transactions, merchants, classifications, geolocations.
   * @default null
   */
  includes: string[] | null;
  /**
   * Page
   * @description Page number of results to return (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page (10-1000). Defaults to MX API default of 25 if not specified.
   * @default null
   */
  records_per_page: number | null;
  /**
   * To Created At
   * @description Unix timestamp to filter transactions created up to this time (inclusive).
   * @default null
   */
  to_created_at: number | null;
  /**
   * To Date
   * @description Unix timestamp to filter transactions up to this date (inclusive).
   * @default null
   */
  to_date: number | null;
  /**
   * To Updated At
   * @description Unix timestamp to filter transactions updated up to this time (inclusive).
   * @default null
   */
  to_updated_at: number | null;
  /**
   * Use Case
   * @description Allowed values: 'PFM' and/or 'MONEY_MOVEMENT'.
   * @default null
   */
  use_case: string[] | null;
  /**
   * User Guid
   * @description The unique identifier (GUID) of the MX user (must start with 'USR-').
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_TRANSACTIONS tool output.
 */
type MX_TECHNOLOGIES_LIST_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
      };
      /**
       * Transactions
       * @description Array of transaction objects.
       */
      transactions: {
          /**
           * Account Guid
           * @description Account GUID.
           */
          account_guid: string;
          /**
           * Account Id
           * @description Partner account ID.
           */
          account_id: string;
          /**
           * Amount
           * @description Monetary amount of the transaction.
           */
          amount: number;
          /**
           * Category
           * @description Transaction category.
           */
          category: string;
          /**
           * Category Guid
           * @description Category GUID.
           */
          category_guid: string;
          /**
           * Check Number String
           * @description Check number if applicable.
           */
          check_number_string: string;
          /**
           * Classification
           * @description Classification enhancement object.
           * @default null
           */
          classifications: {
              /**
               * Guid
               * @description GUID of the classification.
               */
              guid: string;
              /**
               * Parent Class
               * @description Parent classification of the transaction.
               */
              parent_class: string;
          } | null;
          /**
           * Created At
           * @description Timestamp when transaction was created.
           */
          created_at: string;
          /**
           * Currency Code
           * @description ISO 4217 currency code.
           */
          currency_code: string;
          /**
           * Date
           * @description Transaction date (searchable date).
           */
          date: string;
          /**
           * Description
           * @description Cleaned transaction description.
           */
          description: string;
          /**
           * Geolocation
           * @description Geolocation enhancement object.
           * @default null
           */
          geolocations: {
              /**
               * City
               * @description City of the transaction location.
               */
              city: string;
              /**
               * Country
               * @description Country of the transaction location.
               */
              country: string;
              /**
               * Postal Code
               * @description Postal code of the transaction location.
               */
              postal_code: string;
              /**
               * State
               * @description State of the transaction location.
               */
              state: string;
          } | null;
          /**
           * Guid
           * @description Transaction GUID.
           */
          guid: string;
          /**
           * Id
           * @description Partner transaction ID.
           */
          id: string;
          /**
           * Is Bill Pay
           * @description Indicates a bill pay transaction.
           */
          is_bill_pay: boolean;
          /**
           * Is Direct Deposit
           * @description Indicates a direct deposit transaction.
           */
          is_direct_deposit: boolean;
          /**
           * Is Expense
           * @description Indicates an expense transaction.
           */
          is_expense: boolean;
          /**
           * Is Fee
           * @description Indicates a fee transaction.
           */
          is_fee: boolean;
          /**
           * Is Income
           * @description Indicates an income transaction.
           */
          is_income: boolean;
          /**
           * Is International
           * @description Indicates if transaction is international.
           * @default null
           */
          is_international: boolean | null;
          /**
           * Is Manual
           * @description Indicates if transaction was manually created.
           */
          is_manual: boolean;
          /**
           * Is Overdraft Fee
           * @description Indicates an overdraft fee.
           */
          is_overdraft_fee: boolean;
          /**
           * Is Payroll Advance
           * @description Indicates a payroll advance.
           */
          is_payroll_advance: boolean;
          /**
           * Is Recurring
           * @description Indicates a recurring transaction (deprecated).
           */
          is_recurring: boolean;
          /**
           * Is Subscription
           * @description Indicates a subscription transaction.
           */
          is_subscription: boolean;
          /**
           * Latitude
           * @description Latitude of transaction location.
           */
          latitude: number;
          /**
           * Localized Description
           * @description Localized transaction description.
           */
          localized_description: string;
          /**
           * Localized Memo
           * @description Localized transaction memo.
           */
          localized_memo: string;
          /**
           * Longitude
           * @description Longitude of transaction location.
           */
          longitude: number;
          /**
           * Member Guid
           * @description Member GUID.
           */
          member_guid: string;
          /**
           * Member Is Managed By User
           * @description Whether member is managed by user.
           */
          member_is_managed_by_user: boolean;
          /**
           * Memo
           * @description Additional transaction memo.
           */
          memo: string;
          /**
           * Merchant Category Code
           * @description ISO 18245 merchant category code.
           */
          merchant_category_code: number;
          /**
           * Merchant Guid
           * @description Merchant GUID.
           */
          merchant_guid: string;
          /**
           * Merchant Location Guid
           * @description Merchant location GUID.
           */
          merchant_location_guid: string;
          /**
           * Merchant
           * @description Merchant enhancement object.
           * @default null
           */
          merchants: {
              /**
               * Guid
               * @description GUID of the merchant.
               */
              guid: string;
              /**
               * Logo Url
               * @description URL of the merchant's logo.
               */
              logo_url: string;
              /**
               * Name
               * @description Merchant name.
               */
              name: string;
              /**
               * Website Url
               * @description URL of the merchant's website.
               */
              website_url: string;
          } | null;
          /**
           * Original Description
           * @description Original raw description.
           */
          original_description: string;
          /**
           * Posted At
           * @description Timestamp when transaction was posted.
           */
          posted_at: string;
          /**
           * RepeatingTransactions
           * @description Repeating transactions enhancement object.
           * @default null
           */
          repeating_transactions: {
              /**
               * Guid
               * @description GUID of the repeating transaction.
               */
              guid: string;
              /**
               * Recurrence Type
               * @description Recurrence type of the repeating transaction.
               */
              recurrence_type: string;
              /**
               * Repeating Transaction Type
               * @description Type of repeating transaction.
               */
              repeating_transaction_type: string;
          } | null;
          /**
           * Status
           * @description Transaction status.
           * @enum {string}
           */
          status: "POSTED" | "PENDING";
          /**
           * Top Level Category
           * @description Parent category of the transaction.
           */
          top_level_category: string;
          /**
           * Transacted At
           * @description Timestamp when transaction occurred.
           */
          transacted_at: string;
          /**
           * Type
           * @description Transaction type.
           * @enum {string}
           */
          type: "CREDIT" | "DEBIT";
          /**
           * Updated At
           * @description Timestamp when transaction was last updated.
           */
          updated_at: string;
          /**
           * User Guid
           * @description User GUID associated with transaction.
           */
          user_guid: string;
          /**
           * User Id
           * @description Partner user ID.
           */
          user_id: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_TRANSACTIONS_BY_MEMBER tool input.
 */
type MX_TECHNOLOGIES_LIST_TRANSACTIONS_BY_MEMBER_INPUT = {
  /**
   * From Created At
   * @description Unix timestamp to filter transactions from created-at.
   * @default null
   */
  from_created_at: number | null;
  /**
   * From Date
   * @description Unix timestamp to filter transactions from this date; defaults to 120 days ago.
   * @default null
   */
  from_date: number | null;
  /**
   * From Timestamp
   * @description Unix timestamp to filter transactions from created time.
   * @default null
   */
  from_timestamp: number | null;
  /**
   * From Updated At
   * @description Unix timestamp to filter transactions from updated-at.
   * @default null
   */
  from_updated_at: number | null;
  /**
   * Includes
   * @description Comma-separated list of enhancements: repeating_transactions,merchants,classifications,geolocations
   * @default null
   */
  includes: string | null;
  /**
   * Member Guid
   * @description MX member GUID (must start with 'MEM-').
   */
  member_guid?: string;
  /**
   * Page
   * @description Page number of results to return (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page (10-1000). Defaults to MX default of 25.
   * @default null
   */
  records_per_page: number | null;
  /**
   * To Created At
   * @description Unix timestamp to filter transactions to created-at.
   * @default null
   */
  to_created_at: number | null;
  /**
   * To Date
   * @description Unix timestamp to filter transactions to this date (midnight); defaults to 5 days forward.
   * @default null
   */
  to_date: number | null;
  /**
   * To Timestamp
   * @description Unix timestamp to filter transactions to created time.
   * @default null
   */
  to_timestamp: number | null;
  /**
   * To Updated At
   * @description Unix timestamp to filter transactions to updated-at.
   * @default null
   */
  to_updated_at: number | null;
  /**
   * User Guid
   * @description MX user GUID (must start with 'USR-').
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_TRANSACTIONS_BY_MEMBER tool output.
 */
type MX_TECHNOLOGIES_LIST_TRANSACTIONS_BY_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information for navigating the result set.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages.
           */
          total_pages: number;
      };
      /**
       * Transactions
       * @description Array of transaction objects for the specified member.
       */
      transactions: {
          /**
           * Account Guid
           * @description Account GUID.
           */
          account_guid: string;
          /**
           * Account Id
           * @description Partner-defined account ID (partner-managed only).
           * @default null
           */
          account_id: string | null;
          /**
           * Amount
           * @description Transaction amount.
           */
          amount: number;
          /**
           * Category
           * @description Category name.
           * @default null
           */
          category: string | null;
          /**
           * Category Guid
           * @description Category GUID.
           * @default null
           */
          category_guid: string | null;
          /**
           * Check Number String
           * @description Check number.
           * @default null
           */
          check_number_string: string | null;
          /**
           * Classification
           * @description Classification object, if included.
           * @default null
           */
          classification: {
              /**
               * Guid
               * @description Classification GUID.
               */
              guid: string;
              /**
               * Parent Class
               * @description Parent classification category.
               */
              parent_class: string;
          } | null;
          /**
           * Created At
           * @description Created timestamp.
           */
          created_at: string;
          /**
           * Currency Code
           * @description ISO 4217 currency code.
           */
          currency_code: string;
          /**
           * Date
           * @description Transaction date used for searches.
           */
          date: string;
          /**
           * Description
           * @description Cleaned, human-readable description.
           * @default null
           */
          description: string | null;
          /**
           * Geolocation
           * @description Geolocation object, if included.
           * @default null
           */
          geolocation: {
              /**
               * City
               * @description City of the transaction.
               */
              city: string;
              /**
               * Country
               * @description Country of the transaction.
               */
              country: string;
              /**
               * Postal Code
               * @description Postal code of the transaction.
               */
              postal_code: string;
              /**
               * State
               * @description State of the transaction.
               */
              state: string;
          } | null;
          /**
           * Guid
           * @description Transaction GUID.
           */
          guid: string;
          /**
           * Id
           * @description Partner-defined transaction ID (partner-managed only).
           * @default null
           */
          id: string | null;
          /**
           * Is Bill Pay
           * @description Bill pay indicator.
           */
          is_bill_pay: boolean;
          /**
           * Is Direct Deposit
           * @description Direct deposit indicator.
           */
          is_direct_deposit: boolean;
          /**
           * Is Expense
           * @description Expense indicator.
           */
          is_expense: boolean;
          /**
           * Is Fee
           * @description Fee indicator.
           */
          is_fee: boolean;
          /**
           * Is Income
           * @description Income indicator.
           */
          is_income: boolean;
          /**
           * Is International
           * @description International transaction indicator.
           * @default null
           */
          is_international: boolean | null;
          /**
           * Is Manual
           * @description Created on manual account indicator.
           */
          is_manual: boolean;
          /**
           * Is Overdraft Fee
           * @description Overdraft fee indicator.
           */
          is_overdraft_fee: boolean;
          /**
           * Is Payroll Advance
           * @description Payroll advance indicator.
           */
          is_payroll_advance: boolean;
          /**
           * Is Subscription
           * @description Subscription payment indicator.
           */
          is_subscription: boolean;
          /**
           * Latitude
           * @description Geo latitude.
           * @default null
           */
          latitude: number | null;
          /**
           * Localized Description
           * @description Localized description.
           * @default null
           */
          localized_description: string | null;
          /**
           * Localized Memo
           * @description Localized memo.
           * @default null
           */
          localized_memo: string | null;
          /**
           * Longitude
           * @description Geo longitude.
           * @default null
           */
          longitude: number | null;
          /**
           * Member Guid
           * @description Member GUID.
           */
          member_guid: string;
          /**
           * Member Is Managed By User
           * @description Member management flag.
           */
          member_is_managed_by_user: boolean;
          /**
           * Memo
           * @description Additional memo information.
           * @default null
           */
          memo: string | null;
          /**
           * Merchant
           * @description Merchant object, if included.
           * @default null
           */
          merchant: {
              /**
               * Guid
               * @description Merchant GUID.
               */
              guid: string;
              /**
               * Logo Url
               * @description URL to the merchant's logo.
               */
              logo_url: string;
              /**
               * Name
               * @description Merchant name.
               */
              name: string;
              /**
               * Website Url
               * @description Merchant website URL.
               */
              website_url: string;
          } | null;
          /**
           * Merchant Category Code
           * @description ISO 18245 merchant category code.
           * @default null
           */
          merchant_category_code: number | null;
          /**
           * Merchant Guid
           * @description Merchant GUID.
           * @default null
           */
          merchant_guid: string | null;
          /**
           * Merchant Location Guid
           * @description Merchant location GUID.
           * @default null
           */
          merchant_location_guid: string | null;
          /**
           * Original Description
           * @description Raw original description.
           * @default null
           */
          original_description: string | null;
          /**
           * Posted At
           * @description Posted timestamp.
           */
          posted_at: string;
          /**
           * RepeatingTransaction
           * @description Repeating transaction object, if included.
           * @default null
           */
          repeating_transaction: {
              /**
               * Guid
               * @description Unique repeating transaction GUID.
               */
              guid: string;
              /**
               * Recurrence Type
               * @description Type of recurrence.
               */
              recurrence_type: string;
              /**
               * Repeating Transaction Type
               * @description Type of repeating transaction.
               */
              repeating_transaction_type: string;
          } | null;
          /**
           * Status
           * @description Transaction status.
           * @enum {string}
           */
          status: "POSTED" | "PENDING";
          /**
           * Top Level Category
           * @description Top level category.
           * @default null
           */
          top_level_category: string | null;
          /**
           * Transacted At
           * @description Actual transaction timestamp.
           */
          transacted_at: string;
          /**
           * Type
           * @description Transaction type.
           * @enum {string}
           */
          type: "CREDIT" | "DEBIT";
          /**
           * Updated At
           * @description Last updated timestamp.
           */
          updated_at: string;
          /**
           * User Guid
           * @description User GUID.
           */
          user_guid: string;
          /**
           * User Id
           * @description Partner-defined user ID.
           * @default null
           */
          user_id: string | null;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_USERS tool input.
 */
type MX_TECHNOLOGIES_LIST_USERS_INPUT = {
  /**
   * Email
   * @description Filter by user email.
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description Filter by partner-defined user ID.
   * @default null
   */
  id: string | null;
  /**
   * Is Disabled
   * @description Filter to only disabled users.
   * @default null
   */
  is_disabled: boolean | null;
  /**
   * Page
   * @description Page number for paginated results (>=1).
   * @default null
   */
  page: number | null;
  /**
   * Records Per Page
   * @description Number of records per page (10-1000).
   * @default null
   */
  records_per_page: number | null;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_LIST_USERS tool output.
 */
type MX_TECHNOLOGIES_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of records per page.
           */
          per_page: number;
          /**
           * Total Entries
           * @description Total number of entries available.
           */
          total_entries: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
      };
      /**
       * Users
       * @description List of users.
       */
      users: {
          /**
           * Accepted Terms And Conditions At
           * @description Timestamp when terms were accepted (ISO 8601).
           * @default null
           */
          accepted_terms_and_conditions_at: string | null;
          /**
           * Born On
           * @description Date of birth (YYYY-MM-DD).
           * @default null
           */
          born_on: string | null;
          /**
           * Credit Score
           * @description Numeric credit score.
           * @default null
           */
          credit_score: number | null;
          /**
           * Email
           * @description User's email address.
           */
          email: string;
          /**
           * Email Is Verified
           * @description Whether the email is verified.
           */
          email_is_verified: boolean;
          /**
           * Failed Login Attempts Count
           * @description Count of failed login attempts.
           * @default null
           */
          failed_login_attempts_count: number | null;
          /**
           * First Name
           * @description User's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Gender
           * @description Gender of the user ('0' for male, '1' for female).
           * @default null
           */
          gender: string | null;
          /**
           * Guid
           * @description Unique MX GUID for the user.
           */
          guid: string;
          /**
           * Has Accepted Terms And Conditions
           * @description Whether terms and conditions have been accepted.
           */
          has_accepted_terms_and_conditions: boolean;
          /**
           * Is Disabled
           * @description Whether the user is disabled.
           */
          is_disabled: boolean;
          /**
           * Is Restricted
           * @description Whether the user is restricted.
           */
          is_restricted: boolean;
          /**
           * Last Name
           * @description User's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Logged In At
           * @description Last login timestamp (ISO 8601).
           * @default null
           */
          logged_in_at: string | null;
          /**
           * Metadata
           * @description Client-defined metadata.
           * @default null
           */
          metadata: string | null;
          /**
           * Phone
           * @description User's phone number.
           * @default null
           */
          phone: string | null;
          /**
           * Phone Is Verified
           * @description Whether the phone is verified.
           */
          phone_is_verified: boolean;
          /**
           * Postal Code
           * @description User's postal code.
           * @default null
           */
          postal_code: string | null;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_READ_ACCOUNT tool input.
 */
type MX_TECHNOLOGIES_READ_ACCOUNT_INPUT = {
  /**
   * Account Guid
   * @description The unique identifier (GUID) of the account.
   */
  account_guid?: string;
  /**
   * User Guid
   * @description The unique identifier (GUID) of the MX user.
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_READ_ACCOUNT tool output.
 */
type MX_TECHNOLOGIES_READ_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Number
       * @description Account number (typically masked).
       * @default null
       */
      account_number: string | null;
      /**
       * Apr
       * @description Annual percentage rate for the account.
       * @default null
       */
      apr: number | null;
      /**
       * Apy
       * @description Annual percentage yield for the account.
       * @default null
       */
      apy: number | null;
      /**
       * Available Balance
       * @description Funds available for use (asset accounts).
       * @default null
       */
      available_balance: number | null;
      /**
       * Available Credit
       * @description Credit available (liability accounts).
       * @default null
       */
      available_credit: number | null;
      /**
       * Balance
       * @description Current account balance.
       * @default null
       */
      balance: number | null;
      /**
       * Created At
       * @description Timestamp when the account was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Credit Limit
       * @description Credit limit.
       * @default null
       */
      credit_limit: number | null;
      /**
       * Currency Code
       * @description ISO 4217 currency code.
       * @default null
       */
      currency_code: string | null;
      /**
       * Day Payment Is Due
       * @description Day of month payment due.
       * @default null
       */
      day_payment_is_due: number | null;
      /**
       * Federal Insurance Status
       * @description Federal insurance status (e.g., INSURED, NOT_INSURED).
       * @default null
       */
      federal_insurance_status: string | null;
      /**
       * Guid
       * @description MX-defined unique account identifier.
       */
      guid: string;
      /**
       * Holdings Value
       * @description Sum of long holdings (excludes shorts and cash).
       * @default null
       */
      holdings_value: number | null;
      /**
       * Id
       * @description Partner-defined unique account identifier.
       * @default null
       */
      id: string | null;
      /**
       * Imported At
       * @description Timestamp when the account was last imported.
       * @default null
       */
      imported_at: string | null;
      /**
       * Institution Code
       * @description Partner-defined code for the associated institution.
       * @default null
       */
      institution_code: string | null;
      /**
       * Institution Guid
       * @description MX-defined identifier for the associated institution.
       * @default null
       */
      institution_guid: string | null;
      /**
       * Interest Rate
       * @description Interest rate for the account.
       * @default null
       */
      interest_rate: number | null;
      /**
       * Is Closed
       * @description Whether the account is closed.
       * @default null
       */
      is_closed: boolean | null;
      /**
       * Is Hidden
       * @description Whether the account is hidden.
       * @default null
       */
      is_hidden: boolean | null;
      /**
       * Is Manual
       * @description Whether the account was manually created.
       * @default null
       */
      is_manual: boolean | null;
      /**
       * Last Payment
       * @description Most recent payment amount.
       * @default null
       */
      last_payment: number | null;
      /**
       * Last Payment At
       * @description Timestamp of most recent payment.
       * @default null
       */
      last_payment_at: string | null;
      /**
       * Loan Amount
       * @description Loan principal amount.
       * @default null
       */
      loan_amount: number | null;
      /**
       * Margin Balance
       * @description Margin debt amount.
       * @default null
       */
      margin_balance: number | null;
      /**
       * Matures On
       * @description Maturity date for loan accounts.
       * @default null
       */
      matures_on: string | null;
      /**
       * Member Guid
       * @description MX-defined member GUID for this account.
       */
      member_guid: string;
      /**
       * Metadata
       * @description Partner-stored additional information for the account.
       * @default null
       */
      metadata: string | null;
      /**
       * Minimum Balance
       * @description Minimum balance amount as applicable.
       * @default null
       */
      minimum_balance: number | null;
      /**
       * Minimum Payment
       * @description Minimum payment amount as applicable.
       * @default null
       */
      minimum_payment: number | null;
      /**
       * Name
       * @description Human-readable account name.
       * @default null
       */
      name: string | null;
      /**
       * Nickname
       * @description Alternate account name.
       * @default null
       */
      nickname: string | null;
      /**
       * Original Balance
       * @description Original balance amount for debt accounts.
       * @default null
       */
      original_balance: number | null;
      /**
       * Payment Due At
       * @description Next payment due timestamp.
       * @default null
       */
      payment_due_at: string | null;
      /**
       * Payoff Balance
       * @description Payoff amount for debt accounts.
       * @default null
       */
      payoff_balance: number | null;
      /**
       * Routing Number
       * @description Routing number.
       * @default null
       */
      routing_number: string | null;
      /**
       * Statement Balance
       * @description Balance at last statement period end.
       * @default null
       */
      statement_balance: number | null;
      /**
       * Subtype
       * @description Account subtype (e.g., MONEY_MARKET, HOME_EQUITY).
       * @default null
       */
      subtype: string | null;
      /**
       * Total Account Value
       * @description Sum of positions, sweep/cash, margin debt.
       * @default null
       */
      total_account_value: number | null;
      /**
       * Type
       * @description General account type (e.g., CHECKING, SAVINGS, CREDIT_CARD, LOAN, INVESTMENT).
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description Timestamp when the account was last updated.
       * @default null
       */
      updated_at: string | null;
      /**
       * User Guid
       * @description MX-defined user GUID for this account.
       */
      user_guid: string;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_READ_ACCOUNT_BALANCE tool input.
 */
type MX_TECHNOLOGIES_READ_ACCOUNT_BALANCE_INPUT = {
  /**
   * Account Guid
   * @description Unique identifier (GUID) of the account.
   */
  account_guid?: string;
  /**
   * User Guid
   * @description MX-defined user GUID (must start with 'USR-').
   */
  user_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_READ_ACCOUNT_BALANCE tool output.
 */
type MX_TECHNOLOGIES_READ_ACCOUNT_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description The account resource with balance details.
       */
      account: {
          /**
           * Account Number
           * @description Masked or unhashed account number.
           * @default null
           */
          account_number: string | null;
          /**
           * Available Balance
           * @description Available balance for spending.
           */
          available_balance: number;
          /**
           * Available Credit
           * @description Remaining credit on liability accounts.
           * @default null
           */
          available_credit: number | null;
          /**
           * Balance
           * @description Current balance of the account.
           */
          balance: number;
          /**
           * Created At
           * @description ISO 8601 timestamp when the account was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Credit Limit
           * @description Credit limit for liability accounts.
           * @default null
           */
          credit_limit: number | null;
          /**
           * Currency Code
           * @description ISO 4217 currency code.
           * @default null
           */
          currency_code: string | null;
          /**
           * Day Payment Is Due
           * @description Day of month payment is due.
           * @default null
           */
          day_payment_is_due: number | null;
          /**
           * Guid
           * @description MX-defined account GUID.
           */
          guid: string;
          /**
           * Holdings Value
           * @description Sum of holdings for investment accounts.
           * @default null
           */
          holdings_value: number | null;
          /**
           * Id
           * @description Partner-defined account identifier.
           * @default null
           */
          id: string | null;
          /**
           * Imported At
           * @description ISO 8601 timestamp when the account was last aggregated.
           * @default null
           */
          imported_at: string | null;
          /**
           * Institution Code
           * @description MX institution code for this account.
           * @default null
           */
          institution_code: string | null;
          /**
           * Is Closed
           * @description Flag indicating if the account is closed.
           * @default null
           */
          is_closed: boolean | null;
          /**
           * Is Hidden
           * @description Flag indicating if the account is hidden in UI.
           * @default null
           */
          is_hidden: boolean | null;
          /**
           * Last Payment
           * @description Amount of most recent payment.
           * @default null
           */
          last_payment: number | null;
          /**
           * Last Payment At
           * @description ISO 8601 timestamp of most recent payment.
           * @default null
           */
          last_payment_at: string | null;
          /**
           * Member Guid
           * @description MX-defined member GUID owning this account.
           * @default null
           */
          member_guid: string | null;
          /**
           * Metadata
           * @description Partner-defined metadata.
           * @default null
           */
          metadata: string | null;
          /**
           * Minimum Payment
           * @description Minimum payment due for liability accounts.
           * @default null
           */
          minimum_payment: number | null;
          /**
           * Name
           * @description Name of the account.
           * @default null
           */
          name: string | null;
          /**
           * Payment Due At
           * @description ISO 8601 timestamp for next payment due.
           * @default null
           */
          payment_due_at: string | null;
          /**
           * Payoff Balance
           * @description Payoff balance for liability accounts.
           * @default null
           */
          payoff_balance: number | null;
          /**
           * Routing Number
           * @description Routing number for the account.
           * @default null
           */
          routing_number: string | null;
          /**
           * Subtype
           * @description Account subtype.
           * @default null
           */
          subtype: string | null;
          /**
           * Total Account Value
           * @description Total account value including cash and assets.
           * @default null
           */
          total_account_value: number | null;
          /**
           * Type
           * @description General account type.
           * @default null
           */
          type: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the account was last updated.
           * @default null
           */
          updated_at: string | null;
          /**
           * User Guid
           * @description MX-defined user GUID owning this account.
           */
          user_guid: string;
          /**
           * User Id
           * @description Partner-defined user identifier.
           * @default null
           */
          user_id: string | null;
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_READ_CATEGORY tool input.
 */
type MX_TECHNOLOGIES_READ_CATEGORY_INPUT = {
  /**
   * Category Guid
   * @description The unique identifier (GUID) of the default category to retrieve.
   */
  category_guid?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_READ_CATEGORY tool output.
 */
type MX_TECHNOLOGIES_READ_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Date/time category was created; null for default categories.
       * @default null
       */
      created_at: string | null;
      /**
       * Guid
       * @description Unique identifier for the category.
       */
      guid: string;
      /**
       * Is Default
       * @description Indicates whether the category is an MX default.
       */
      is_default: boolean;
      /**
       * Is Income
       * @description Indicates whether the category represents income.
       */
      is_income: boolean;
      /**
       * Metadata
       * @description Additional info partners can store on a custom category.
       * @default null
       */
      metadata: string | null;
      /**
       * Name
       * @description Name of the category.
       */
      name: string;
      /**
       * Parent Guid
       * @description Unique identifier for the parent category.
       * @default null
       */
      parent_guid: string | null;
      /**
       * Updated At
       * @description Date/time category was last updated; null for default categories.
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
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_READ_FDX_ACCOUNT tool input.
 */
type MX_TECHNOLOGIES_READ_FDX_ACCOUNT_INPUT = {
  /**
   * Account Id
   * @description The FDX account identifier whose details to return.
   */
  accountId?: string;
};

/**
 * Type of MX_TECHNOLOGIES's MX_TECHNOLOGIES_READ_FDX_ACCOUNT tool output.
 */
type MX_TECHNOLOGIES_READ_FDX_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
 * Type map of all available tool input types for toolkit "MX_TECHNOLOGIES".
 */
export type MX_TECHNOLOGIES_TOOL_INPUTS = {
  CANCEL_PARTNER_ACCOUNT: MX_TECHNOLOGIES_CANCEL_PARTNER_ACCOUNT_INPUT
  CREATE_ACCOUNT: MX_TECHNOLOGIES_CREATE_ACCOUNT_INPUT
  CREATE_AUDIENCE_API_CREDENTIALS: MX_TECHNOLOGIES_CREATE_AUDIENCE_API_CREDENTIALS_INPUT
  CREATE_MEMBER: MX_TECHNOLOGIES_CREATE_MEMBER_INPUT
  CREATE_PARTNER_ACCOUNT: MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT_INPUT
  CREATE_PARTNER_ACCOUNT_USER_SSO: MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT_USER_SSO_INPUT
  FETCH_REWARDS: MX_TECHNOLOGIES_FETCH_REWARDS_INPUT
  GET_CONFIGURABLE_WIDGET_URL: MX_TECHNOLOGIES_GET_CONFIGURABLE_WIDGET_URL_INPUT
  LIST_ACCOUNTS: MX_TECHNOLOGIES_LIST_ACCOUNTS_INPUT
  LIST_ACCOUNT_NUMBERS_BY_MEMBER: MX_TECHNOLOGIES_LIST_ACCOUNT_NUMBERS_BY_MEMBER_INPUT
  LIST_ACCOUNT_OWNERS: MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS_INPUT
  LIST_ACCOUNT_OWNERS_BY_MEMBER: MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS_BY_MEMBER_INPUT
  LIST_BUDGETS: MX_TECHNOLOGIES_LIST_BUDGETS_INPUT
  LIST_CATEGORIES: MX_TECHNOLOGIES_LIST_CATEGORIES_INPUT
  LIST_CHALLENGES: MX_TECHNOLOGIES_LIST_CHALLENGES_INPUT
  LIST_CONNECT_WIDGET_URLS: MX_TECHNOLOGIES_LIST_CONNECT_WIDGET_URLS_INPUT
  LIST_FAVORITE_INSTITUTIONS: MX_TECHNOLOGIES_LIST_FAVORITE_INSTITUTIONS_INPUT
  LIST_GOALS: MX_TECHNOLOGIES_LIST_GOALS_INPUT
  LIST_INSTITUTIONS: MX_TECHNOLOGIES_LIST_INSTITUTIONS_INPUT
  LIST_INSTITUTION_CREDENTIALS: MX_TECHNOLOGIES_LIST_INSTITUTION_CREDENTIALS_INPUT
  LIST_MEMBERS: MX_TECHNOLOGIES_LIST_MEMBERS_INPUT
  LIST_MEMBER_ACCOUNTS: MX_TECHNOLOGIES_LIST_MEMBER_ACCOUNTS_INPUT
  LIST_REWARDS: MX_TECHNOLOGIES_LIST_REWARDS_INPUT
  LIST_STATEMENTS_BY_MEMBER: MX_TECHNOLOGIES_LIST_STATEMENTS_BY_MEMBER_INPUT
  LIST_TAGGINGS: MX_TECHNOLOGIES_LIST_TAGGINGS_INPUT
  LIST_TAGS: MX_TECHNOLOGIES_LIST_TAGS_INPUT
  LIST_TRANSACTIONS: MX_TECHNOLOGIES_LIST_TRANSACTIONS_INPUT
  LIST_TRANSACTIONS_BY_MEMBER: MX_TECHNOLOGIES_LIST_TRANSACTIONS_BY_MEMBER_INPUT
  LIST_USERS: MX_TECHNOLOGIES_LIST_USERS_INPUT
  READ_ACCOUNT: MX_TECHNOLOGIES_READ_ACCOUNT_INPUT
  READ_ACCOUNT_BALANCE: MX_TECHNOLOGIES_READ_ACCOUNT_BALANCE_INPUT
  READ_CATEGORY: MX_TECHNOLOGIES_READ_CATEGORY_INPUT
  READ_FDX_ACCOUNT: MX_TECHNOLOGIES_READ_FDX_ACCOUNT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MX_TECHNOLOGIES".
 */
export type MX_TECHNOLOGIES_TOOL_OUTPUTS = {
  CANCEL_PARTNER_ACCOUNT: MX_TECHNOLOGIES_CANCEL_PARTNER_ACCOUNT_OUTPUT
  CREATE_ACCOUNT: MX_TECHNOLOGIES_CREATE_ACCOUNT_OUTPUT
  CREATE_AUDIENCE_API_CREDENTIALS: MX_TECHNOLOGIES_CREATE_AUDIENCE_API_CREDENTIALS_OUTPUT
  CREATE_MEMBER: MX_TECHNOLOGIES_CREATE_MEMBER_OUTPUT
  CREATE_PARTNER_ACCOUNT: MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT_OUTPUT
  CREATE_PARTNER_ACCOUNT_USER_SSO: MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT_USER_SSO_OUTPUT
  FETCH_REWARDS: MX_TECHNOLOGIES_FETCH_REWARDS_OUTPUT
  GET_CONFIGURABLE_WIDGET_URL: MX_TECHNOLOGIES_GET_CONFIGURABLE_WIDGET_URL_OUTPUT
  LIST_ACCOUNTS: MX_TECHNOLOGIES_LIST_ACCOUNTS_OUTPUT
  LIST_ACCOUNT_NUMBERS_BY_MEMBER: MX_TECHNOLOGIES_LIST_ACCOUNT_NUMBERS_BY_MEMBER_OUTPUT
  LIST_ACCOUNT_OWNERS: MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS_OUTPUT
  LIST_ACCOUNT_OWNERS_BY_MEMBER: MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS_BY_MEMBER_OUTPUT
  LIST_BUDGETS: MX_TECHNOLOGIES_LIST_BUDGETS_OUTPUT
  LIST_CATEGORIES: MX_TECHNOLOGIES_LIST_CATEGORIES_OUTPUT
  LIST_CHALLENGES: MX_TECHNOLOGIES_LIST_CHALLENGES_OUTPUT
  LIST_CONNECT_WIDGET_URLS: MX_TECHNOLOGIES_LIST_CONNECT_WIDGET_URLS_OUTPUT
  LIST_FAVORITE_INSTITUTIONS: MX_TECHNOLOGIES_LIST_FAVORITE_INSTITUTIONS_OUTPUT
  LIST_GOALS: MX_TECHNOLOGIES_LIST_GOALS_OUTPUT
  LIST_INSTITUTIONS: MX_TECHNOLOGIES_LIST_INSTITUTIONS_OUTPUT
  LIST_INSTITUTION_CREDENTIALS: MX_TECHNOLOGIES_LIST_INSTITUTION_CREDENTIALS_OUTPUT
  LIST_MEMBERS: MX_TECHNOLOGIES_LIST_MEMBERS_OUTPUT
  LIST_MEMBER_ACCOUNTS: MX_TECHNOLOGIES_LIST_MEMBER_ACCOUNTS_OUTPUT
  LIST_REWARDS: MX_TECHNOLOGIES_LIST_REWARDS_OUTPUT
  LIST_STATEMENTS_BY_MEMBER: MX_TECHNOLOGIES_LIST_STATEMENTS_BY_MEMBER_OUTPUT
  LIST_TAGGINGS: MX_TECHNOLOGIES_LIST_TAGGINGS_OUTPUT
  LIST_TAGS: MX_TECHNOLOGIES_LIST_TAGS_OUTPUT
  LIST_TRANSACTIONS: MX_TECHNOLOGIES_LIST_TRANSACTIONS_OUTPUT
  LIST_TRANSACTIONS_BY_MEMBER: MX_TECHNOLOGIES_LIST_TRANSACTIONS_BY_MEMBER_OUTPUT
  LIST_USERS: MX_TECHNOLOGIES_LIST_USERS_OUTPUT
  READ_ACCOUNT: MX_TECHNOLOGIES_READ_ACCOUNT_OUTPUT
  READ_ACCOUNT_BALANCE: MX_TECHNOLOGIES_READ_ACCOUNT_BALANCE_OUTPUT
  READ_CATEGORY: MX_TECHNOLOGIES_READ_CATEGORY_OUTPUT
  READ_FDX_ACCOUNT: MX_TECHNOLOGIES_READ_FDX_ACCOUNT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MX_TECHNOLOGIES toolkit.
 */
export const MX_TECHNOLOGIES = {
  slug: "mx_technologies",
  tools: {
    /**
     * Tool to cancel (disable) a client account under a partner account. this maps to mx platform api: put /users/{guid} with body {"user": {"is disabled": true, "metadata": "..."}}.
     */
    CANCEL_PARTNER_ACCOUNT: "MX_TECHNOLOGIES_CANCEL_PARTNER_ACCOUNT",
    /**
     * Tool to create a manual account for a given user. use when you need to add an external or test account to a user record.
     */
    CREATE_ACCOUNT: "MX_TECHNOLOGIES_CREATE_ACCOUNT",
    /**
     * Tool to retrieve audience api credentials. use when obtaining client id and client secret for audience service authentication before generating an access token. credentials must be created in the partner dashboard (partner administrator → authentication → audience api key). the tool prefers explicitly provided values, then falls back to environment variables.
     */
    CREATE_AUDIENCE_API_CREDENTIALS: "MX_TECHNOLOGIES_CREATE_AUDIENCE_API_CREDENTIALS",
    /**
     * Tool to create a member and start aggregating specified financial products. use after confirming user guid and gathering connection credentials or oauth details.
     */
    CREATE_MEMBER: "MX_TECHNOLOGIES_CREATE_MEMBER",
    /**
     * Tool to create a new client account under a partner account. use when provisioning a new constant contact client after obtaining api key and jwt authorization.
     */
    CREATE_PARTNER_ACCOUNT: "MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT",
    /**
     * Tool to create a new partner account user with single sign-on enabled. use when adding an sso user under a partner client account with 'sso for all users' enabled.
     */
    CREATE_PARTNER_ACCOUNT_USER_SSO: "MX_TECHNOLOGIES_CREATE_PARTNER_ACCOUNT_USER_SSO",
    /**
     * Tool to initiate rewards aggregation for a specific member. use after connecting the member to trigger an async rewards job.
     */
    FETCH_REWARDS: "MX_TECHNOLOGIES_FETCH_REWARDS",
    /**
     * Tool to retrieve a configurable widget url for a user. use after determining the user guid.
     */
    GET_CONFIGURABLE_WIDGET_URL: "MX_TECHNOLOGIES_GET_CONFIGURABLE_WIDGET_URL",
    /**
     * Tool to list all accounts for a user. use after confirming the user guid.
     */
    LIST_ACCOUNTS: "MX_TECHNOLOGIES_LIST_ACCOUNTS",
    /**
     * Tool to list account numbers for a specific member. use after obtaining user and member guids.
     */
    LIST_ACCOUNT_NUMBERS_BY_MEMBER: "MX_TECHNOLOGIES_LIST_ACCOUNT_NUMBERS_BY_MEMBER",
    /**
     * Tool to list account owners associated with a member's account. use after validating user and member guids.
     */
    LIST_ACCOUNT_OWNERS: "MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS",
    /**
     * Tool to list account owners for a specific member. use when you have the user guid and member guid.
     */
    LIST_ACCOUNT_OWNERS_BY_MEMBER: "MX_TECHNOLOGIES_LIST_ACCOUNT_OWNERS_BY_MEMBER",
    /**
     * Tool to list budgets for a specific user. use after obtaining a valid user guid to retrieve that user’s budgets.
     */
    LIST_BUDGETS: "MX_TECHNOLOGIES_LIST_BUDGETS",
    /**
     * Tool to list all categories for a user. use when you need to fetch both default and custom categories for a given user guid.
     */
    LIST_CATEGORIES: "MX_TECHNOLOGIES_LIST_CATEGORIES",
    /**
     * Tool to list mfa challenges for a member. use when the member is in challenged state to retrieve prompts to answer.
     */
    LIST_CHALLENGES: "MX_TECHNOLOGIES_LIST_CHALLENGES",
    /**
     * Tool to list connect widget urls for a user. use when you need to retrieve all connect widget urls associated with a user.
     */
    LIST_CONNECT_WIDGET_URLS: "MX_TECHNOLOGIES_LIST_CONNECT_WIDGET_URLS",
    /**
     * Tool to list partner favorite institutions, sorted by popularity. use when you need to retrieve a paginated set of a partner's favorite institutions.
     */
    LIST_FAVORITE_INSTITUTIONS: "MX_TECHNOLOGIES_LIST_FAVORITE_INSTITUTIONS",
    /**
     * Tool to list goals for a specific user. use after obtaining a valid user guid to view user goals.
     */
    LIST_GOALS: "MX_TECHNOLOGIES_LIST_GOALS",
    /**
     * Tool to list financial institutions supported by mx. use when you need to retrieve available institutions with optional filters like name, country code, or products; supports pagination.
     */
    LIST_INSTITUTIONS: "MX_TECHNOLOGIES_LIST_INSTITUTIONS",
    /**
     * Tool to list credential fields required by a given institution. use after selecting the institution code; supports optional pagination.
     */
    LIST_INSTITUTION_CREDENTIALS: "MX_TECHNOLOGIES_LIST_INSTITUTION_CREDENTIALS",
    /**
     * Tool to list members associated with a specific user. use when you need to retrieve the members for a given user guid.
     */
    LIST_MEMBERS: "MX_TECHNOLOGIES_LIST_MEMBERS",
    /**
     * Tool to list accounts for a specific member. use when you need to retrieve all accounts associated with a given user and member guid.
     */
    LIST_MEMBER_ACCOUNTS: "MX_TECHNOLOGIES_LIST_MEMBER_ACCOUNTS",
    /**
     * Tool to list rewards associated with a specific user and member. use after confirming both user guid and member guid; supports pagination.
     */
    LIST_REWARDS: "MX_TECHNOLOGIES_LIST_REWARDS",
    /**
     * Tool to list statements for a member. use after obtaining valid user and member guids.
     */
    LIST_STATEMENTS_BY_MEMBER: "MX_TECHNOLOGIES_LIST_STATEMENTS_BY_MEMBER",
    /**
     * Tool to list all taggings for a specific user. use when you need to fetch taggings associated with a user after obtaining their user guid.
     */
    LIST_TAGGINGS: "MX_TECHNOLOGIES_LIST_TAGGINGS",
    /**
     * Tool to list all tags for a user. use after obtaining a valid user guid; supports pagination.
     */
    LIST_TAGS: "MX_TECHNOLOGIES_LIST_TAGS",
    /**
     * Tool to list transactions for a user. use when you need to retrieve a user's transaction history across all accounts. use after obtaining a valid user guid.
     */
    LIST_TRANSACTIONS: "MX_TECHNOLOGIES_LIST_TRANSACTIONS",
    /**
     * Tool to list transactions for a member. use when you have valid user and member guids and need their transactions.
     */
    LIST_TRANSACTIONS_BY_MEMBER: "MX_TECHNOLOGIES_LIST_TRANSACTIONS_BY_MEMBER",
    /**
     * Tool to list users. use when you need to retrieve a paginated list of user accounts with optional filters.
     */
    LIST_USERS: "MX_TECHNOLOGIES_LIST_USERS",
    /**
     * Tool to retrieve details for a specific account. use after obtaining valid user and account guids to fetch up-to-date account information.
     */
    READ_ACCOUNT: "MX_TECHNOLOGIES_READ_ACCOUNT",
    /**
     * Tool to retrieve the available balance for a specific account. use after confirming the user and account guids.
     */
    READ_ACCOUNT_BALANCE: "MX_TECHNOLOGIES_READ_ACCOUNT_BALANCE",
    /**
     * Tool to retrieve a default category by guid. use after confirming the default category guid.
     */
    READ_CATEGORY: "MX_TECHNOLOGIES_READ_CATEGORY",
    /**
     * Tool to return details for the specified fdx account. use when you have an fdx accountid and need full account info.
     */
    READ_FDX_ACCOUNT: "MX_TECHNOLOGIES_READ_FDX_ACCOUNT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MX_TECHNOLOGIES".
 */
export type MX_TECHNOLOGIES_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MX_TECHNOLOGIES".
 */
export type MX_TECHNOLOGIES_TRIGGER_EVENTS = {}
