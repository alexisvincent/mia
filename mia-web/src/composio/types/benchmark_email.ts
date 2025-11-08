// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_DELETE_CONTACT_FROM_LIST tool input.
 */
type BENCHMARK_EMAIL_DELETE_CONTACT_FROM_LIST_INPUT = {
  /**
   * Contact Id
   * @description Contact ID to remove
   */
  contact_id?: string;
  /**
   * Filter
   * @description Optional filter value
   * @default null
   */
  filter: string | null;
  /**
   * List Id
   * @description List ID
   */
  list_id?: string;
  /**
   * Search
   * @description Optional search filter (e.g., email address)
   * @default null
   */
  search: string | null;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_DELETE_CONTACT_FROM_LIST tool output.
 */
type BENCHMARK_EMAIL_DELETE_CONTACT_FROM_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API, if any
       */
      errors?: {
          /**
           * Code
           * @description Error code returned by the API
           */
          Code: string;
          /**
           * Message
           * @description Error message returned by the API
           */
          Message: string;
      }[];
      /**
       * Status
       * @description 1 if successful, -1 if error
       */
      status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_DELETE_CONTACT_LIST tool input.
 */
type BENCHMARK_EMAIL_DELETE_CONTACT_LIST_INPUT = {
  /**
   * List Id
   * @description ID of the contact list to delete
   */
  list_id?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_DELETE_CONTACT_LIST tool output.
 */
type BENCHMARK_EMAIL_DELETE_CONTACT_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description List of errors if deletion fails
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code returned when the operation fails
           * @default null
           */
          Code: string | null;
          /**
           * Message
           * @description Error message returned when the operation fails
           * @default null
           */
          Message: string | null;
      }[] | null;
      /**
       * Status
       * @description 1 = Successful, -1 = Error
       */
      status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_DELETE_EMAIL tool input.
 */
type BENCHMARK_EMAIL_DELETE_EMAIL_INPUT = {
  /**
   * Id
   * @description The unique identifier of the email campaign to delete
   */
  id?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_DELETE_EMAIL tool output.
 */
type BENCHMARK_EMAIL_DELETE_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API, if any
       */
      errors?: {
          /**
           * Code
           * @description Error code returned by the API
           */
          Code: string;
          /**
           * Message
           * @description Error message returned by the API
           */
          Message: string;
      }[];
      /**
       * Status
       * @description 1 = Successful, -1 = Error
       */
      status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_DELETE_LINK_ACCOUNT tool input.
 */
type BENCHMARK_EMAIL_DELETE_LINK_ACCOUNT_INPUT = {
  /**
   * Id
   * @description ID of the linked agency account to delete
   */
  ID?: number;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_DELETE_LINK_ACCOUNT tool output.
 */
type BENCHMARK_EMAIL_DELETE_LINK_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API, if any
       */
      Errors: {
          /**
           * Code
           * @description Error code returned by the API
           */
          Code: string;
          /**
           * Message
           * @description Error message returned by the API
           */
          Message: string;
      }[];
      /**
       * Status
       * @description 1 = Successful, -1 = Error
       */
      Status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_DELETE_WEBHOOK tool input.
 */
type BENCHMARK_EMAIL_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the webhook to delete
   */
  ID?: number;
  /**
   * List Id
   * @description ID of the contact list containing the webhook
   */
  ListID?: number;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_DELETE_WEBHOOK tool output.
 */
type BENCHMARK_EMAIL_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error messages array, empty list if deletion succeeded
       */
      Error: string[];
      /**
       * Status
       * @description "1" indicates success, "0" indicates failure
       */
      Status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_ALL_CONFIRMED_EMAILS tool input.
 */
type BENCHMARK_EMAIL_GET_ALL_CONFIRMED_EMAILS_INPUT = object;

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_ALL_CONFIRMED_EMAILS tool output.
 */
type BENCHMARK_EMAIL_GET_ALL_CONFIRMED_EMAILS_OUTPUT = {
  /**
   * Count
   * @description Total confirmed emails count
   */
  count?: number;
  /**
   * Data
   * @description Array of confirmation records
   */
  data?: {
      /**
       * Date Value
       * @description Confirmation date (e.g., '16 Jan 2017')
       */
      date_value: string;
      /**
       * Email
       * Format: email
       * @description Confirmed email address
       */
      email: unknown;
      /**
       * Id
       * @description Record's unique identifier
       */
      id: string;
      /**
       * Is Confirmed
       * @description '1'=confirmed, '0'=not confirmed
       * @enum {string}
       */
      is_confirmed: "0" | "1";
      /**
       * Resend
       * @description HTML snippet to resend confirmation, if unconfirmed
       */
      resend: string;
      /**
       * Sequence
       * @description Ordinal position in list
       */
      sequence: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API status code: '1'=success, '-1'=error
   * @enum {string}
   */
  status?: "1" | "-1";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CLIENT_ACCOUNT_SETTINGS tool input.
 */
type BENCHMARK_EMAIL_GET_CLIENT_ACCOUNT_SETTINGS_INPUT = object;

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CLIENT_ACCOUNT_SETTINGS tool output.
 */
type BENCHMARK_EMAIL_GET_CLIENT_ACCOUNT_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Detailed company settings
       */
      Company: {
          /**
           * Address
           * @description Company street address
           */
          Address: string;
          /**
           * Category Id
           * @description Company category ID
           */
          CategoryID: string;
          /**
           * City
           * @description Company city
           */
          City: string;
          /**
           * Country
           * @description Company country
           */
          Country: string;
          /**
           * Logo Url
           * @description URL to the company logo
           */
          LogoURL: string;
          /**
           * Name
           * @description Company name
           */
          Name: string;
          /**
           * Phone
           * @description Company phone number
           */
          Phone: string;
          /**
           * State
           * @description Company state or province
           */
          State: string;
          /**
           * Website
           * @description Company website URL
           */
          Website: string;
          /**
           * Zip
           * @description Company postal ZIP code
           */
          Zip: string;
      };
      /**
       * Footer Id
       * @description Default email footer ID
       */
      FooterID: string;
      /**
       * From Email
       * @description Default sender email address
       */
      FromEmail: string;
      /**
       * From Name
       * @description Default sender display name
       */
      FromName: string;
      /**
       * Language
       * @description Account language
       */
      Language: string;
      /**
       * Permission Position Header
       * @description Header position of the permission statement
       */
      PermissionPositionHeader: string;
      /**
       * Sender Id
       * @description Default sender ID for campaigns
       */
      SenderID: string;
      /**
       * Signature Email
       * @description Signature email address in outgoing emails
       */
      SignatureEmail: string;
      /**
       * Signature Name
       * @description Signature display name in outgoing emails
       */
      SignatureName: string;
      /**
       * Signature Url
       * @description URL for the signature image
       */
      SignatureURL: string;
      /**
       * Time Zone
       * @description Account time zone identifier
       */
      TimeZone: string;
      /**
       * Token
       * @description API token for this client account
       */
      Token: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CLIENT_DETAILS tool input.
 */
type BENCHMARK_EMAIL_GET_CLIENT_DETAILS_INPUT = object;

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CLIENT_DETAILS tool output.
 */
type BENCHMARK_EMAIL_GET_CLIENT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow Sub Accounts
       * @description 1 if sub-accounts allowed, 0 otherwise
       */
      AllowSubAccounts: string;
      /**
       * Cc Expire Date
       * @description Credit card expiration date
       * @default null
       */
      CCExpireDate: string | null;
      /**
       * Cancel Date
       * @description Account cancellation date
       * @default null
       */
      CancelDate: string | null;
      /**
       * Cancel Date Mdy
       * @description Formatted cancellation date (MM/DD/YYYY)
       * @default null
       */
      CancelDateMDY: string | null;
      /**
       * Client Status
       * @description Current status of the client account
       */
      ClientStatus: string;
      /**
       * Contact Count
       * @description Total number of contacts
       */
      ContactCount: string;
      /**
       * Contact Limit
       * @description Maximum allowed contacts for the plan
       */
      ContactLimit: string;
      /**
       * Contacts
       * @description Total contacts (alias of ContactCount)
       */
      Contacts: string;
      /**
       * Country
       * @description Client's country code
       */
      Country: string;
      /**
       * Email
       * @description Primary email of the client
       */
      Email: string;
      /**
       * Email Limit
       * @description Maximum emails allowed by the plan
       */
      EmailLimit: string;
      /**
       * Email Used
       * @description Number of emails sent/used
       */
      EmailUsed: string;
      /**
       * Errors
       * @description List of errors, if any
       * @default null
       */
      Errors: {
          [key: string]: string;
      }[] | null;
      /**
       * Expire Date
       * @description Account expiration date
       * @default null
       */
      ExpireDate: string | null;
      /**
       * Expire Date Mdy
       * @description Formatted expiration date (MM/DD/YYYY)
       * @default null
       */
      ExpireDateMDY: string | null;
      /**
       * First Name
       * @description Client's first name
       */
      FirstName: string;
      /**
       * Has Dedicated Ip
       * @description 1 if client has a dedicated IP, 0 otherwise
       */
      HasDedicatedIP: string;
      /**
       * Image Limit
       * @description Image hosting limit, as string
       */
      ImageLimit: string;
      /**
       * Image Used
       * @description Number of images used
       */
      ImageUsed: string;
      /**
       * Last Name
       * @description Client's last name
       */
      LastName: string;
      /**
       * List Based
       * @description 1 if plan is list-based, 0 otherwise
       */
      ListBased: string;
      /**
       * List Size
       * @description Configured list size limit
       */
      ListSize: string;
      /**
       * Login
       * @description Login identifier for the client
       */
      Login: string;
      /**
       * Payment Mode
       * @description Billing or payment mode for the account
       */
      PaymentMode: string;
      /**
       * Phone No
       * @description Primary phone number
       */
      PhoneNo: string;
      /**
       * Plan Cycle
       * @description Billing cycle for the plan
       */
      PlanCycle: string;
      /**
       * Region Code
       * @description Region code associated with account
       */
      RegionCode: string;
      /**
       * Region Name
       * @description Region name associated with account
       */
      RegionName: string;
      /**
       * Status
       * @description Additional status field, if returned
       * @default null
       */
      Status: string | null;
      /**
       * Suspend Date
       * @description Account suspension date, if any
       * @default null
       */
      SuspendDate: string | null;
      /**
       * Suspend Date Mdy
       * @description Formatted suspension date (MM/DD/YYYY)
       * @default null
       */
      SuspendDateMDY: string | null;
      /**
       * Is Allowed
       * @description 1 if operations allowed, 0 otherwise
       */
      isAllowed: string;
      /**
       * Is Free
       * @description 1 if free account, 0 otherwise
       */
      isFree: string;
      /**
       * Is Pin
       * @description 1 if security PIN is set, 0 otherwise
       */
      isPin: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CLIENT_PLAN_INFORMATION tool input.
 */
type BENCHMARK_EMAIL_GET_CLIENT_PLAN_INFORMATION_INPUT = object;

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CLIENT_PLAN_INFORMATION tool output.
 */
type BENCHMARK_EMAIL_GET_CLIENT_PLAN_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Contacts
       * @description Number of contacts allotted to the account
       */
      AccountContacts: string;
      /**
       * Active Contacts
       * @description Number of active contacts
       */
      ActiveContacts: string;
      /**
       * Addon
       * @description Add-on details for IP, image hosting, and inbox tests
       */
      Addon: {
          /**
           * Additional Ip Count
           * @description Number of additional dedicated IPs currently allocated
           */
          AdditionalIPCount: string;
          /**
           * Current Image
           * @description Number of image hosting units currently allocated
           */
          CurrentImage: string;
          /**
           * Has Additional Ip
           * @description Flag indicating if additional IP is enabled (1) or not (0)
           * @enum {string}
           */
          HasAdditionalIP: "1" | "0";
          /**
           * Has Image Hosting
           * @description Flag indicating if image hosting is enabled (1) or not (0)
           * @enum {string}
           */
          HasImageHosting: "1" | "0";
          /**
           * Ip Cancellation Date
           * @description IP cancellation date
           * @default null
           */
          IPCancellationDate: string | null;
          /**
           * Ip Cancellation Date Mdy
           * @description IP cancellation date in MDY format
           * @default null
           */
          IPCancellationDateMDY: string | null;
          /**
           * Ip Expire Date
           * @description IP expiration date
           */
          IPExpireDate: string;
          /**
           * Ip Expire Date Mdy
           * @description IP expiration date in MDY format
           */
          IPExpireDateMDY: string;
          /**
           * Ip Expired
           * @description Flag indicating if IP has expired (1) or not (0)
           * @enum {string}
           */
          IPExpired: "1" | "0";
          /**
           * Ip Price
           * @description Price of the dedicated IP
           */
          IPPrice: string;
          /**
           * Image Cancellation Date
           * @description Image hosting cancellation date
           * @default null
           */
          ImageCancellationDate: string | null;
          /**
           * Image Cancellation Date Mdy
           * @description Image hosting cancellation date in MDY format
           * @default null
           */
          ImageCancellationDateMDY: string | null;
          /**
           * Image Expire Date
           * @description Image hosting expiration date
           * @default null
           */
          ImageExpireDate: string | null;
          /**
           * Image Expire Date Mdy
           * @description Image hosting expiration date in MDY format
           * @default null
           */
          ImageExpireDateMDY: string | null;
          /**
           * Image Expired
           * @description Flag indicating if image hosting has expired
           * @enum {string}
           */
          ImageExpired: "1" | "0";
          /**
           * Image Hosting Price
           * @description Price of image hosting
           */
          ImageHostingPrice: string;
          /**
           * Image Percent
           * @description Percent of image hosting used
           */
          ImagePercent: string;
          /**
           * Inbox Balance
           * @description Inbox test balance
           */
          InboxBalance: string;
          /**
           * Inbox Price
           * @description Inbox test price
           */
          InboxPrice: string;
          /**
           * Total Image
           * @description Total image hosting units purchased
           */
          TotalImage: string;
      };
      /**
       * Can Upgrade
       * @description 1 if the account can upgrade plan, 0 otherwise
       */
      CanUpgrade: string;
      /**
       * Client Country
       * @description Client's country code (ISO)
       */
      ClientCountry: string;
      /**
       * Contacts Percent
       * @description Percentage of contact allotment used
       */
      ContactsPercent: string;
      /**
       * Credit Amount
       * @description Credit amount available in account
       */
      CreditAmount: string;
      /**
       * Currency Code
       * @description Currency code for pricing fields
       */
      CurrencyCode: string;
      /**
       * Currency Prefix
       * @description Currency symbol prefix
       */
      CurrencyPrefix: string;
      /**
       * Email Plan
       * @description Email plan details and limits
       */
      EmailPlan: {
          /**
           * Annual
           * @description Annual plan code if applicable
           * @default null
           */
          Annual: string | null;
          /**
           * Cancellation Date
           * @description Cancellation date for email plan
           * @default null
           */
          CancellationDate: string | null;
          /**
           * Cancellation Date Mdy
           * @description Cancellation date in MDY format
           * @default null
           */
          CancellationDateMDY: string | null;
          /**
           * Current Email
           * @description Number of emails sent in current billing cycle
           */
          CurrentEmail: string;
          /**
           * Current Limit
           * @description Current email limit remaining or used
           */
          CurrentLimit: string;
          /**
           * Email Discount Amount
           * @description Discount amount for emails
           * @default null
           */
          EmailDiscountAmount: string | null;
          /**
           * Email Discount Name
           * @description Name of the email discount applied
           * @default null
           */
          EmailDiscountName: string | null;
          /**
           * Email Discount Percent
           * @description Discount percentage for emails
           * @default null
           */
          EmailDiscountPercent: string | null;
          /**
           * Email Limit
           * @description Total email limit for the plan
           */
          EmailLimit: string;
          /**
           * Email Percent
           * @description Percent of email limit used
           */
          EmailPercent: string;
          /**
           * Expire Date
           * @description Email plan expiration date
           */
          ExpireDate: string;
          /**
           * Expire Date Mdy
           * @description Email plan expiration date in MDY format
           */
          ExpireDateMDY: string;
          /**
           * Future Add On
           * @description Future add-on details
           * @default null
           */
          FutureAddOn: string | null;
          /**
           * Future Date
           * @description Future plan start date
           * @default null
           */
          FutureDate: string | null;
          /**
           * Future Is Annual Plan
           * @description Flag for future annual plan
           * @default null
           */
          FutureIsAnnualPlan: string | null;
          /**
           * Future Plan Id
           * @description ID of the future plan
           * @default null
           */
          FuturePlanID: string | null;
          /**
           * Future Plan Name
           * @description Name of the future plan
           * @default null
           */
          FuturePlanName: string | null;
          /**
           * Has Cancelled
           * @description 1 if plan is cancelled, 0 otherwise
           * @enum {string}
           */
          HasCancelled: "1" | "0";
          /**
           * Has Future
           * @description 1 if a future plan is scheduled, 0 otherwise
           * @enum {string}
           */
          HasFuture: "1" | "0";
          /**
           * Is Expired
           * @description 1 if plan has expired, 0 otherwise
           * @enum {string}
           */
          IsExpired: "1" | "0";
          /**
           * Is Free Plan
           * @description 1 if this is a free plan, 0 otherwise
           * @enum {string}
           */
          IsFreePlan: "1" | "0";
          /**
           * Is List Based
           * @description 1 if list-based plan, 0 otherwise
           * @enum {string}
           */
          IsListBased: "1" | "0";
          /**
           * Is Un Limited
           * @description 1 if unlimited email plan, 0 otherwise
           * @enum {string}
           */
          IsUnLimited: "1" | "0";
          /**
           * Overage Amount
           * @description Overage amount per email for plan
           */
          OverageAmount: string;
          /**
           * Plan Id
           * @description Identifier for email plan
           */
          PlanID: string;
          /**
           * Plan Name
           * @description Name of the email plan
           */
          PlanName: string;
          /**
           * Plan Price
           * @description Price of the email plan
           */
          PlanPrice: string;
          /**
           * Start Date
           * @description Plan start date
           */
          StartDate: string;
          /**
           * Start Date Mdy
           * @description Plan start date in MDY format
           */
          StartDateMDY: string;
          /**
           * Total Email
           * @description Total number of emails allowed under the plan
           */
          TotalEmail: string;
      };
      /**
       * Event Plan
       * @description Event plan details and limits
       */
      EventPlan: {
          /**
           * Cancellation Date
           * @description Cancellation date for event plan
           * @default null
           */
          CancellationDate: string | null;
          /**
           * Cancellation Date Mdy
           * @description Cancellation date in MDY format
           * @default null
           */
          CancellationDateMDY: string | null;
          /**
           * Current Event
           * @description Number of events used in current cycle
           */
          CurrentEvent: string;
          /**
           * Event Percent
           * @description Percent of event limit used
           */
          EventPercent: string;
          /**
           * Expire Date
           * @description Event plan expiration date/time
           */
          ExpireDate: string;
          /**
           * Expire Date Mdy
           * @description Event plan expiration date in MDY format
           */
          ExpireDateMDY: string;
          /**
           * Future Date
           * @description Future event plan start date
           * @default null
           */
          FutureDate: string | null;
          /**
           * Future Is Annual Plan
           * @description 1 if future annual plan, else 0
           * @default null
           */
          FutureIsAnnualPlan: string | null;
          /**
           * Future Plan Id
           * @description ID of the future event plan
           * @default null
           */
          FuturePlanID: string | null;
          /**
           * Future Plan Name
           * @description Name of the future event plan
           * @default null
           */
          FuturePlanName: string | null;
          /**
           * Has Cancelled
           * @description 1 if event plan cancelled, else 0
           * @enum {string}
           */
          HasCancelled: "1" | "0";
          /**
           * Has Future
           * @description 1 if future event plan exists, else 0
           * @enum {string}
           */
          HasFuture: "1" | "0";
          /**
           * Is Expired
           * @description 1 if event plan expired, else 0
           * @enum {string}
           */
          IsExpired: "1" | "0";
          /**
           * Is Free Plan
           * @description 1 if this is a free event plan, else 0
           * @enum {string}
           */
          IsFreePlan: "1" | "0";
          /**
           * Is Un Limited
           * @description 1 if unlimited events, else 0
           * @enum {string}
           */
          IsUnLimited: "1" | "0";
          /**
           * Plan Id
           * @description Identifier for event plan
           */
          PlanID: string;
          /**
           * Plan Name
           * @description Name of the event plan
           */
          PlanName: string;
          /**
           * Plan Price
           * @description Price of the event plan
           * @default null
           */
          PlanPrice: string | null;
          /**
           * Total Event
           * @description Total number of events allowed
           */
          TotalEvent: string;
      };
      /**
       * Has Card
       * @description 1 if payment card on file, 0 otherwise
       * @enum {string}
       */
      HasCard: "1" | "0";
      /**
       * Is Dedicated
       * @description 1 if dedicated IP enabled, 0 otherwise
       * @enum {string}
       */
      IsDedicated: "1" | "0";
      /**
       * Is Manual
       * @description 1 if manual billing plan, 0 otherwise
       * @enum {string}
       */
      IsManual: "1" | "0";
      /**
       * Total Contacts
       * @description Total number of contacts allowed under the plan
       */
      TotalContacts: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CLIENT_PROFILE_DETAILS tool input.
 */
type BENCHMARK_EMAIL_GET_CLIENT_PROFILE_DETAILS_INPUT = object;

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CLIENT_PROFILE_DETAILS tool output.
 */
type BENCHMARK_EMAIL_GET_CLIENT_PROFILE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Business City
       * @description Client's business city
       */
      Business_city: string;
      /**
       * Business Country
       * @description Client's business country
       */
      Business_country: string;
      /**
       * Business Phone
       * @description Client's business phone number
       */
      Business_phone: string;
      /**
       * Business State
       * @description Client's business state
       */
      Business_state: string;
      /**
       * Client Products
       * @description Products associated with the client
       */
      Client_Products: string;
      /**
       * Company
       * @description Client's company name
       */
      Company: string;
      /**
       * Country Code
       * @description Client's country code
       */
      Country_code: string;
      /**
       * E Language
       * @description Client's email language preference
       */
      ELanguage: string;
      /**
       * Language
       * @description Client's preferred language
       */
      Language: string;
      /**
       * Modified Date
       * @description Date when the profile was last modified
       */
      Modified_date: string;
      /**
       * Phone
       * @description Client's phone number
       */
      Phone: string;
      /**
       * Address
       * @description Client's address
       */
      address: string;
      /**
       * Allow Sub Accounts
       * @description 1 if sub-accounts allowed, 0 otherwise
       * @enum {string}
       */
      allow_sub_accounts: "0" | "1";
      /**
       * Bounces
       * @description Number of bounced emails
       */
      bounces: number;
      /**
       * Category
       * @description Category associated with the client
       */
      category: string;
      /**
       * Cc Expire Date
       * @description Credit card expiration date
       */
      cc_expire_date: string;
      /**
       * Client Id
       * @description Unique identifier for the client
       */
      client_id: string;
      /**
       * Client Rating
       * @description Rating assigned to the client
       */
      client_rating: number;
      /**
       * Client Status
       * @description Current status of the client
       */
      client_status: string;
      /**
       * Confirmed
       * @description 1 if email confirmed, 0 otherwise
       * @enum {string}
       */
      confirmed: "0" | "1";
      /**
       * Contact Count
       * @description Number of contacts in the account
       */
      contact_count: number;
      /**
       * Created Date
       * @description Date when the client profile was created
       */
      created_date: string;
      /**
       * Email
       * @description Client's email address
       */
      email: string;
      /**
       * Emails Sent
       * @description Number of emails sent by the client
       */
      emails_sent: number;
      /**
       * Experience
       * @description Client's experience level
       */
      experience: string;
      /**
       * First Name
       * @description Client's first name
       */
      first_name: string;
      /**
       * Has Dedicated Ip
       * @description True if the client has a dedicated IP
       */
      has_dedicated_ip: boolean;
      /**
       * Last Name
       * @description Client's last name
       */
      last_name: string;
      /**
       * List Size
       * @description Size of the client's contact list
       */
      list_size: number;
      /**
       * Login
       * @description Client's login identifier
       */
      login: string;
      /**
       * Opens
       * @description Number of opened emails
       */
      opens: number;
      /**
       * Origin Url
       * @description URL of the client's origin
       */
      origin_url: string;
      /**
       * Paid Or Free
       * @description Plan type: Paid or Free
       * @enum {string}
       */
      paid_or_free: "Paid" | "Free";
      /**
       * Payment Mode
       * @description Client's payment mode
       */
      payment_mode: string;
      /**
       * Plan Id
       * @description Subscription plan identifier
       */
      plan_id: string;
      /**
       * Plan Name
       * @description Subscription plan name
       */
      plan_name: string;
      /**
       * Region Code
       * @description Client's region code
       */
      region_code: string;
      /**
       * Region Name
       * @description Client's region name
       */
      region_name: string;
      /**
       * State
       * @description Client's state or province
       */
      state: string;
      /**
       * Zip
       * @description Client's ZIP/postal code
       */
      zip: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CONTACTS_IN_LIST tool input.
 */
type BENCHMARK_EMAIL_GET_CONTACTS_IN_LIST_INPUT = {
  /**
   * Filter
   * @description Subset filter: 2=unsubscribe, 5=hard bounce, 100=others.
   * @default null
   * @enum {string|null}
   */
  Filter: "2" | "5" | "100" | null;
  /**
   * List Id
   * @description ID of the contact list to query.
   */
  ListID?: string;
  /**
   * Order By
   * @description Field to sort by.
   * @default null
   * @enum {string|null}
   */
  OrderBy: "email" | "firstname" | "lastname" | "date" | null;
  /**
   * Page Number
   * @description Pagination page number (starting at 1).
   * @default null
   */
  PageNumber: number | null;
  /**
   * Page Size
   * @description Number of contacts per page.
   * @default null
   */
  PageSize: number | null;
  /**
   * Search Field
   * @description Field to apply search (e.g., email, firstname).
   * @default null
   */
  SearchField: string | null;
  /**
   * Search Filter
   * @description Text filter to search within contacts.
   * @default null
   */
  SearchFilter: string | null;
  /**
   * Search Type
   * @description Match type: 1=starts, 2=exact, 3=contains, 4=ends.
   * @default null
   * @enum {string|null}
   */
  SearchType: "1" | "2" | "3" | "4" | null;
  /**
   * Sort Order
   * @description Sort direction.
   * @default null
   * @enum {string|null}
   */
  SortOrder: "asc" | "desc" | null;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CONTACTS_IN_LIST tool output.
 */
type BENCHMARK_EMAIL_GET_CONTACTS_IN_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of matching contacts.
       * @default null
       */
      Count: number | null;
      /**
       * Data
       * @description Array of filtered contact records.
       */
      Data?: {
          /**
           * Contact Master Id
           * @description Internal master contact ID.
           * @default null
           */
          ContactMasterID: string | null;
          /**
           * Created Date
           * @description Date contact was created.
           * @default null
           */
          CreatedDate: string | null;
          /**
           * Email
           * @description Email address of the contact.
           * @default null
           */
          Email: string | null;
          /**
           * Email Type
           * @description Contact's email preference type.
           * @default null
           */
          EmailType: string | null;
          /**
           * First Name
           * @description First name of the contact.
           * @default null
           */
          FirstName: string | null;
          /**
           * Id
           * @description Unique entry ID in list.
           * @default null
           */
          ID: string | null;
          /**
           * Last Name
           * @description Last name of the contact.
           * @default null
           */
          LastName: string | null;
          /**
           * Middle Name
           * @description Middle name of the contact.
           * @default null
           */
          MiddleName: string | null;
          /**
           * Re Send
           * @description Action or link to resend confirmation.
           * @default null
           */
          ReSend: string | null;
          /**
           * Updated Date
           * @description Last update date of the contact.
           * @default null
           */
          UpdatedDate: string | null;
      }[];
      /**
       * Status
       * @description API status: '1'=success, '-1'=error.
       * @default null
       */
      Status: string | null;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CONTACT_LISTS tool input.
 */
type BENCHMARK_EMAIL_GET_CONTACT_LISTS_INPUT = {
  /**
   * Exclude Email Id
   * @description Exclude lists that contain this email ID
   * @default null
   */
  exclude_email_id: string | null;
  /**
   * Filter
   * @description Filter text to match list names or attributes
   * @default null
   */
  filter: string | null;
  /**
   * Filter Type
   * @description Type of filter to apply, if supported
   * @default null
   */
  filter_type: string | null;
  /**
   * Order By
   * @description Sort field: 'email', 'date', 'count', or 'schedule'
   * @default null
   * @enum {string|null}
   */
  order_by: "email" | "date" | "count" | "schedule" | null;
  /**
   * Page Number
   * @description Page number to retrieve (1-based index)
   * @default null
   */
  page_number: number | null;
  /**
   * Page Size
   * @description Number of lists to return per page
   * @default null
   */
  page_size: number | null;
  /**
   * Sort Order
   * @description Sort direction: 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
  /**
   * Status
   * @description Status value to filter lists (e.g., '1' for active)
   * @default null
   */
  status: string | null;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CONTACT_LISTS tool output.
 */
type BENCHMARK_EMAIL_GET_CONTACT_LISTS_OUTPUT = {
  /**
   * Count
   * @description Total number of contact lists available
   */
  count?: number;
  /**
   * Data
   * @description Array of contact list details
   */
  data?: {
      /**
       * Allow Delete
       * @description '1' if deleting this list is allowed, '0' otherwise
       * @enum {string}
       */
      allow_delete: "0" | "1";
      /**
       * Contact Count
       * @description Number of contacts in the list
       */
      contact_count: number;
      /**
       * Created Date
       * @description Date when the list was created
       */
      created_date: string;
      /**
       * Id
       * @description Unique identifier of the list
       */
      id: string;
      /**
       * Is Importing
       * @description '1' if an import is currently running
       * @enum {string}
       */
      is_importing: "0" | "1";
      /**
       * Is Master Unsubscribe
       * @description '1' if master unsubscribe is enabled
       * @enum {string}
       */
      is_master_unsubscribe: "0" | "1";
      /**
       * List Audited
       * @description '1' if the list has been audited
       * @enum {string}
       */
      list_audited: "0" | "1";
      /**
       * List Description
       * @description Description of the list
       */
      list_description: string;
      /**
       * List Import V3
       * @description '1' if import v3 format used, '0' otherwise
       * @enum {string}
       */
      list_import_v3: "0" | "1";
      /**
       * Modified Date
       * @description Date when the list was last modified
       */
      modified_date: string;
      /**
       * Name
       * @description Name of the contact list
       */
      name: string;
      /**
       * Name Short
       * @description Shorter alias for the list name
       */
      name_short: string;
      /**
       * Permission Pass List
       * @description '1' if pass list permission is set, '0' otherwise
       * @enum {string}
       */
      permission_pass_list: "0" | "1";
      /**
       * Segments
       * @description Segments associated with this contact list
       */
      segments: {
          /**
           * Id
           * @description Segment unique identifier
           */
          id: string;
          /**
           * Is Segment
           * @description '1' if this entry represents a segment, '0' otherwise
           * @enum {string}
           */
          is_segment: "0" | "1";
          /**
           * Name
           * @description Segment name
           */
          name: string;
          /**
           * Segment Id
           * @description Original segment ID if applicable
           */
          segment_id: string;
      }[];
      /**
       * Status
       * @description Current status of the list entry
       */
      status: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API status code: '1'=success, '-1'=error
   * @enum {string}
   */
  status?: "1" | "-1";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CONTACT_LIST_DETAILS tool input.
 */
type BENCHMARK_EMAIL_GET_CONTACT_LIST_DETAILS_INPUT = {
  /**
   * List Id
   * @description Unique identifier of the contact list
   */
  list_id?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_CONTACT_LIST_DETAILS tool output.
 */
type BENCHMARK_EMAIL_GET_CONTACT_LIST_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description Detailed contact list attributes
       */
      Data: {
          /**
           * Active Contact Count
           * @description Number of active contacts
           */
          ActiveContactCount: string;
          /**
           * Created Date Time
           * @description Creation timestamp, e.g., 'Oct 06 2017, 05:44 PM'
           */
          CreatedDateTime: string;
          /**
           * Description
           * @description Description of the contact list
           * @default null
           */
          Description: string | null;
          /**
           * Field10 Name
           * @description Name of custom field 10
           * @default null
           */
          Field10Name: string | null;
          /**
           * Field10 Type
           * @description Type of custom field 10: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field10Type?: "1" | "2" | "3" | "4";
          /**
           * Field11 Name
           * @description Name of custom field 11
           * @default null
           */
          Field11Name: string | null;
          /**
           * Field11 Type
           * @description Type of custom field 11: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field11Type?: "1" | "2" | "3" | "4";
          /**
           * Field12 Name
           * @description Name of custom field 12
           * @default null
           */
          Field12Name: string | null;
          /**
           * Field12 Type
           * @description Type of custom field 12: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field12Type?: "1" | "2" | "3" | "4";
          /**
           * Field13 Name
           * @description Name of custom field 13
           * @default null
           */
          Field13Name: string | null;
          /**
           * Field13 Type
           * @description Type of custom field 13: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field13Type?: "1" | "2" | "3" | "4";
          /**
           * Field14 Name
           * @description Name of custom field 14
           * @default null
           */
          Field14Name: string | null;
          /**
           * Field14 Type
           * @description Type of custom field 14: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field14Type?: "1" | "2" | "3" | "4";
          /**
           * Field15 Name
           * @description Name of custom field 15
           * @default null
           */
          Field15Name: string | null;
          /**
           * Field15 Type
           * @description Type of custom field 15: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field15Type?: "1" | "2" | "3" | "4";
          /**
           * Field16 Name
           * @description Name of custom field 16
           * @default null
           */
          Field16Name: string | null;
          /**
           * Field16 Type
           * @description Type of custom field 16: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field16Type?: "1" | "2" | "3" | "4";
          /**
           * Field17 Name
           * @description Name of custom field 17
           * @default null
           */
          Field17Name: string | null;
          /**
           * Field17 Type
           * @description Type of custom field 17: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field17Type?: "1" | "2" | "3" | "4";
          /**
           * Field18 Name
           * @description Name of custom field 18
           * @default null
           */
          Field18Name: string | null;
          /**
           * Field18 Type
           * @description Type of custom field 18: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field18Type?: "1" | "2" | "3" | "4";
          /**
           * Field19 Name
           * @description Name of custom field 19
           * @default null
           */
          Field19Name: string | null;
          /**
           * Field19 Type
           * @description Type of custom field 19: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field19Type?: "1" | "2" | "3" | "4";
          /**
           * Field1 Name
           * @description Name of custom field 1
           * @default null
           */
          Field1Name: string | null;
          /**
           * Field1 Type
           * @description Type of custom field 1: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field1Type?: "1" | "2" | "3" | "4";
          /**
           * Field20 Name
           * @description Name of custom field 20
           * @default null
           */
          Field20Name: string | null;
          /**
           * Field20 Type
           * @description Type of custom field 20: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field20Type?: "1" | "2" | "3" | "4";
          /**
           * Field21 Name
           * @description Name of custom field 21
           * @default null
           */
          Field21Name: string | null;
          /**
           * Field21 Type
           * @description Type of custom field 21: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field21Type?: "1" | "2" | "3" | "4";
          /**
           * Field22 Name
           * @description Name of custom field 22
           * @default null
           */
          Field22Name: string | null;
          /**
           * Field22 Type
           * @description Type of custom field 22: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field22Type?: "1" | "2" | "3" | "4";
          /**
           * Field23 Name
           * @description Name of custom field 23
           * @default null
           */
          Field23Name: string | null;
          /**
           * Field23 Type
           * @description Type of custom field 23: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field23Type?: "1" | "2" | "3" | "4";
          /**
           * Field24 Name
           * @description Name of custom field 24
           * @default null
           */
          Field24Name: string | null;
          /**
           * Field24 Type
           * @description Type of custom field 24: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field24Type?: "1" | "2" | "3" | "4";
          /**
           * Field2 Name
           * @description Name of custom field 2
           * @default null
           */
          Field2Name: string | null;
          /**
           * Field2 Type
           * @description Type of custom field 2: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field2Type?: "1" | "2" | "3" | "4";
          /**
           * Field3 Name
           * @description Name of custom field 3
           * @default null
           */
          Field3Name: string | null;
          /**
           * Field3 Type
           * @description Type of custom field 3: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field3Type?: "1" | "2" | "3" | "4";
          /**
           * Field4 Name
           * @description Name of custom field 4
           * @default null
           */
          Field4Name: string | null;
          /**
           * Field4 Type
           * @description Type of custom field 4: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field4Type?: "1" | "2" | "3" | "4";
          /**
           * Field5 Name
           * @description Name of custom field 5
           * @default null
           */
          Field5Name: string | null;
          /**
           * Field5 Type
           * @description Type of custom field 5: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field5Type?: "1" | "2" | "3" | "4";
          /**
           * Field6 Name
           * @description Name of custom field 6
           * @default null
           */
          Field6Name: string | null;
          /**
           * Field6 Type
           * @description Type of custom field 6: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field6Type?: "1" | "2" | "3" | "4";
          /**
           * Field7 Name
           * @description Name of custom field 7
           * @default null
           */
          Field7Name: string | null;
          /**
           * Field7 Type
           * @description Type of custom field 7: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field7Type?: "1" | "2" | "3" | "4";
          /**
           * Field8 Name
           * @description Name of custom field 8
           * @default null
           */
          Field8Name: string | null;
          /**
           * Field8 Type
           * @description Type of custom field 8: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field8Type?: "1" | "2" | "3" | "4";
          /**
           * Field9 Name
           * @description Name of custom field 9
           * @default null
           */
          Field9Name: string | null;
          /**
           * Field9 Type
           * @description Type of custom field 9: 1=Alphanumeric, 2=Numeric, 3=True/False, 4=Date
           * @enum {string}
           */
          Field9Type?: "1" | "2" | "3" | "4";
          /**
           * Firstname Label
           * @description Label for first name field
           * @default null
           */
          FirstnameLabel: string | null;
          /**
           * Id
           * @description Unique list identifier
           */
          ID: string;
          /**
           * Is Master Unsubscribe
           * @description '1' if master unsubscribe enabled, '0' otherwise
           * @enum {string}
           */
          IsMasterUnsubscribe: "0" | "1";
          /**
           * Lastname Label
           * @description Label for last name field
           * @default null
           */
          LastnameLabel: string | null;
          /**
           * Middlename Label
           * @description Label for middle name field
           * @default null
           */
          MiddlenameLabel: string | null;
          /**
           * Name
           * @description Name of the contact list
           */
          Name: string;
      };
      /**
       * Status
       * @description 1 = Successful, -1 = Error
       * @enum {string}
       */
      Status: "1" | "-1";
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_EMAIL_REPORT_FORWARDS tool input.
 */
type BENCHMARK_EMAIL_GET_EMAIL_REPORT_FORWARDS_INPUT = {
  /**
   * Email Id
   * @description ID of the email campaign to retrieve the forwards report for
   */
  email_id?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_EMAIL_REPORT_FORWARDS tool output.
 */
type BENCHMARK_EMAIL_GET_EMAIL_REPORT_FORWARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * List Name
       * @description Name of the export list generated for the forwards report
       */
      list_name: string;
      /**
       * Report Type Text
       * @description Human-readable report type, e.g., 'FORWARDS'
       */
      report_type_text: string;
      /**
       * Status
       * @description API status code: '1'=success, '-1'=error
       * @enum {string}
       */
      status: "1" | "-1";
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_EMAIL_REPORT_UNOPENS tool input.
 */
type BENCHMARK_EMAIL_GET_EMAIL_REPORT_UNOPENS_INPUT = {
  /**
   * Email Id
   * @description Unique identifier of the email campaign
   */
  email_id?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_EMAIL_REPORT_UNOPENS tool output.
 */
type BENCHMARK_EMAIL_GET_EMAIL_REPORT_UNOPENS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * List Name
       * @description Name of the generated unopens report list
       */
      ListName: string;
      /**
       * Report Type Text
       * @description Textual type of the report, should be 'UNOPENS'
       */
      ReportTypeText: string;
      /**
       * Status
       * @description API status code: '1'=success, '-1'=error
       * @enum {string}
       */
      Status: "1" | "-1";
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_LINK_ACCOUNT_DETAILS tool input.
 */
type BENCHMARK_EMAIL_GET_LINK_ACCOUNT_DETAILS_INPUT = {
  /**
   * Id
   * @description ID of the linked agency account to retrieve details for
   */
  ID?: number;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_LINK_ACCOUNT_DETAILS tool output.
 */
type BENCHMARK_EMAIL_GET_LINK_ACCOUNT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of link accounts
       */
      Count: string;
      /**
       * Data
       * @description Details of the linked agency account
       */
      Data: {
          /**
           * Account Expire
           * @description Account expiration date of the linked account
           * @default null
           */
          AccountExpire: string | null;
          /**
           * Alias
           * @description Alias of the linked account
           * @default null
           */
          Alias: string | null;
          /**
           * Client Id
           * @description Client ID of the linked account
           * @default null
           */
          ClientID: string | null;
          /**
           * First Name
           * @description First name of the linked account
           * @default null
           */
          FirstName: string | null;
          /**
           * Id
           * @description ID of the linked account
           * @default null
           */
          ID: string | null;
          /**
           * Last Name
           * @description Last name of the linked account
           * @default null
           */
          LastName: string | null;
          /**
           * Login
           * @description Login email of the linked account
           * @default null
           */
          Login: string | null;
          /**
           * Mail Sent
           * @description Number of emails sent by the linked account
           * @default null
           */
          MailSent: string | null;
          /**
           * Plan Name
           * @description Plan name of the linked account
           * @default null
           */
          PlanName: string | null;
          /**
           * Status
           * @description 1 = Successful, -1 = Error
           * @default null
           */
          Status: string | null;
      };
      /**
       * Errors
       * @description List of errors returned by the API, if any
       */
      Errors: {
          /**
           * Code
           * @description Error code returned by the API
           */
          Code: string;
          /**
           * Message
           * @description Error message returned by the API
           */
          Message: string;
      }[];
      /**
       * Status
       * @description 1 = Successful, -1 = Error
       */
      Status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_LIST_LINK_ACCOUNTS tool input.
 */
type BENCHMARK_EMAIL_GET_LIST_LINK_ACCOUNTS_INPUT = object;

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_LIST_LINK_ACCOUNTS tool output.
 */
type BENCHMARK_EMAIL_GET_LIST_LINK_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created Date
       * @description Date when the account was linked (ISO 8601 format)
       */
      CreatedDate: string;
      /**
       * Email
       * @description Email address of the linked account
       */
      Email: string;
      /**
       * Last Login
       * @description Last login datetime of the linked account (ISO 8601 format)
       */
      LastLogin: string;
      /**
       * Status
       * @description Status of the linked account
       */
      Status: string;
      /**
       * User Name
       * @description Name of the linked user
       */
      UserName: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_SUB_ACCOUNTS tool input.
 */
type BENCHMARK_EMAIL_GET_SUB_ACCOUNTS_INPUT = object;

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_SUB_ACCOUNTS tool output.
 */
type BENCHMARK_EMAIL_GET_SUB_ACCOUNTS_OUTPUT = {
  /**
   * Count
   * @description Number of sub-accounts returned
   */
  Count?: number;
  /**
   * Data
   * @description List of sub-account detail objects
   */
  Data?: {
      /**
       * Active
       * @description '1'=active, '0'=inactive
       * @enum {string}
       */
      Active: "1" | "0";
      /**
       * Active Contacts
       * @description Number of active contacts in sub-account
       */
      ActiveContacts: number;
      /**
       * Campaigns Sent
       * @description Number of campaigns sent by sub-account
       */
      CampaignsSent: number;
      /**
       * First Name
       * @description Sub-account holder first name
       */
      FirstName: string;
      /**
       * Id
       * @description Sub-account client ID
       */
      ID: string;
      /**
       * Inbox Alloted
       * @description Number of inboxes allotted to sub-account
       */
      InboxAlloted: number;
      /**
       * Inbox Used
       * @description Number of inboxes used by sub-account
       */
      InboxUsed: number;
      /**
       * Last Name
       * @description Sub-account holder last name
       */
      LastName: string;
      /**
       * Login
       * @description Sub-account login identifier
       */
      Login: string;
      /**
       * Name
       * @description Sub-account display name
       */
      Name: string;
      /**
       * Plan Id
       * @description Sub-account plan ID, if any
       */
      PlanID: string;
      /**
       * Plan Name
       * @description Sub-account plan name, if any
       */
      PlanName: string;
  }[];
  /**
   * Has Client Accounts
   * @description '1'=has linked client accounts
   * @enum {string}
   */
  HasClientAccounts?: "1" | "0";
  /**
   * Has Dates
   * @description '1'=dates included in response
   * @enum {string}
   */
  HasDates?: "1" | "0";
  /**
   * Has Inbox
   * @description '1'=inbox info included in response
   * @enum {string}
   */
  HasInbox?: "1" | "0";
  /**
   * Status
   * @description API status: '1'=success, '-1'=error
   * @enum {string}
   */
  Status?: "1" | "-1";
  /**
   * Unique Count
   * @description Total unique contacts across sub-accounts
   */
  UniqueCount?: number;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_SUB_ACCOUNTS_PLAN_LIST tool input.
 */
type BENCHMARK_EMAIL_GET_SUB_ACCOUNTS_PLAN_LIST_INPUT = {
  /**
   * Id
   * @description Sub-account holder client ID
   */
  ID?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_SUB_ACCOUNTS_PLAN_LIST tool output.
 */
type BENCHMARK_EMAIL_GET_SUB_ACCOUNTS_PLAN_LIST_OUTPUT = {
  /**
   * Data
   * @description Array of available plan items
   */
  Data?: {
      /**
       * Email Limit
       * @description Maximum number of emails allowed on this plan
       */
      EmailLimit: string;
      /**
       * Id
       * @description Plan identifier
       */
      ID: string;
      /**
       * List Limit
       * @description Maximum number of contacts allowed on this plan
       */
      ListLimit: string;
      /**
       * Name
       * @description Name of the plan
       */
      Name: string;
  }[];
  /**
   * Status
   * @description API status: '1' indicates success, '-1' error
   */
  Status?: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_SUB_ACCOUNT_DETAILS tool input.
 */
type BENCHMARK_EMAIL_GET_SUB_ACCOUNT_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier (ID) of the sub-account to retrieve
   */
  id?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_SUB_ACCOUNT_DETAILS tool output.
 */
type BENCHMARK_EMAIL_GET_SUB_ACCOUNT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description Detailed sub-account information
       */
      Data: {
          /**
           * Allow Cc
           * @description '1' if CC on emails is allowed, '0' otherwise
           */
          AllowCC: string;
          /**
           * Email Address
           * @description Email address of the sub-account user
           */
          EmailAddress: string;
          /**
           * First Name
           * @description First name of the sub-account user
           */
          FirstName: string;
          /**
           * Has Allow Cc
           * @description '1' if CC setting is available, '0' otherwise
           */
          HasAllowCC: string;
          /**
           * Id
           * @description Unique identifier of the sub-account
           */
          ID: string;
          /**
           * Last Name
           * @description Last name of the sub-account user
           */
          LastName: string;
          /**
           * Login
           * @description Login username for the sub-account
           */
          Login: string;
          /**
           * Password
           * @description Account password (masked in response)
           */
          Password: string;
          /**
           * Phone
           * @description Phone number of the sub-account user
           * @default null
           */
          Phone: string | null;
          /**
           * Plan Id
           * @description Plan identifier associated with the sub-account
           */
          PlanID: string;
          /**
           * Status
           * @description Additional status information if provided
           * @default null
           */
          Status: string | null;
      };
      /**
       * Errors
       * @description List of error objects, if any
       */
      Errors?: {
          [key: string]: string;
      }[];
      /**
       * Status
       * @description '1' = successful, '-1' = error
       */
      Status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_SUB_ACCOUNT_HISTORY tool input.
 */
type BENCHMARK_EMAIL_GET_SUB_ACCOUNT_HISTORY_INPUT = object;

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_GET_SUB_ACCOUNT_HISTORY tool output.
 */
type BENCHMARK_EMAIL_GET_SUB_ACCOUNT_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description List of sub-account history entries
       */
      Data: {
          /**
           * End Date
           * @description Billing cycle end date
           */
          EndDate: string;
          /**
           * Id
           * @description History record unique identifier
           */
          ID: string;
          /**
           * Start Date
           * @description Billing cycle start date
           */
          StartDate: string;
      }[];
      /**
       * Status
       * @description 1 = Successful, -1 = Error
       */
      Status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_CHANGE_PASSWORD tool input.
 */
type BENCHMARK_EMAIL_PATCH_CHANGE_PASSWORD_INPUT = {
  /**
   * Confirm Password
   * @description Confirmation of the new password; must match NewPassword
   */
  ConfirmPassword?: string;
  /**
   * New Password
   * @description New password for the client account
   */
  NewPassword?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_CHANGE_PASSWORD tool output.
 */
type BENCHMARK_EMAIL_PATCH_CHANGE_PASSWORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Array of error messages, empty if successful
       */
      Errors: string[];
      /**
       * Status
       * @description "1" indicates success, "-1" indicates error
       */
      Status: string;
      /**
       * Ret Val
       * @description Return value, often empty on success
       * @default null
       */
      retVal: string | null;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_SAVE_SECURITY_PIN tool input.
 */
type BENCHMARK_EMAIL_PATCH_SAVE_SECURITY_PIN_INPUT = {
  /**
   * Confirm New Pin
   * @description Confirmation of the new PIN; must match NewPIN
   */
  ConfirmNewPIN?: string;
  /**
   * New Pin
   * @description New 4-digit security PIN to set for the client account
   */
  NewPIN?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_SAVE_SECURITY_PIN tool output.
 */
type BENCHMARK_EMAIL_PATCH_SAVE_SECURITY_PIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Array of error messages, empty list if the PIN was saved successfully
       */
      Errors: string[];
      /**
       * Final String
       * @description Additional return string from the API
       * @default null
       */
      FinalString: string | null;
      /**
       * Message
       * @description Response message from the API
       * @default null
       */
      Message: string | null;
      /**
       * Status
       * @description '1' indicates success, '-1' indicates error
       */
      Status: string;
      /**
       * Success
       * @description Success flag returned by the API
       * @default null
       */
      Success: string | null;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_SEND_RESET_EMAIL tool input.
 */
type BENCHMARK_EMAIL_PATCH_SEND_RESET_EMAIL_INPUT = object;

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_SEND_RESET_EMAIL tool output.
 */
type BENCHMARK_EMAIL_PATCH_SEND_RESET_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Array of error messages, empty if successful
       */
      Errors: string[];
      /**
       * Status
       * @description '1' indicates success, '-1' indicates error
       */
      Status: string;
      /**
       * Ret Val
       * @description Return value, often empty on success
       * @default null
       */
      retVal: string | null;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_UPDATE_CLIENT_SETTINGS tool input.
 */
type BENCHMARK_EMAIL_PATCH_UPDATE_CLIENT_SETTINGS_INPUT = {
  /**
   * Detail
   * @description Detail object containing all settings to update
   */
  Detail?: {
      /**
       * Company
       * @description Company details for account settings
       */
      Company: {
          /**
           * Address
           * @description Company street address
           * @default null
           */
          Address: string | null;
          /**
           * Category Id
           * @description Company category ID, numeric string
           * @default null
           */
          CategoryID: string | null;
          /**
           * City
           * @description Company city
           * @default null
           */
          City: string | null;
          /**
           * Country
           * @description Company country
           * @default null
           */
          Country: string | null;
          /**
           * Logo Url
           * @description URL to the company logo image
           * @default null
           */
          LogoURL: string | null;
          /**
           * Name
           * @description Company name
           */
          Name: string;
          /**
           * Phone
           * @description Company phone number
           * @default null
           */
          Phone: string | null;
          /**
           * State
           * @description Company state or province
           * @default null
           */
          State: string | null;
          /**
           * Website
           * @description Company website URL, e.g., www.example.com
           * @default null
           */
          Website: string | null;
          /**
           * Zip
           * @description Company postal ZIP code
           * @default null
           */
          Zip: string | null;
      };
      /**
       * Footer Id
       * @description Default email footer ID
       * @default null
       */
      FooterID: string | null;
      /**
       * From Email
       * @description Sender email address, will appear as the From email
       */
      FromEmail: string;
      /**
       * From Name
       * @description Sender display name for outgoing emails
       * @default null
       */
      FromName: string | null;
      /**
       * Language
       * @description Account language, e.g., English
       */
      Language: string;
      /**
       * Permission Position Footer
       * @description Footer position of permission statement (0=top,1=bottom)
       * @default null
       */
      PermissionPositionFooter: string | null;
      /**
       * Permission Position Header
       * @description Header position of permission statement (0=top,1=bottom)
       * @default null
       */
      PermissionPositionHeader: string | null;
      /**
       * Sender Id
       * @description Default sender ID for campaigns
       * @default null
       */
      SenderID: string | null;
      /**
       * Signature Email
       * @description Email address part of the email signature
       * @default null
       */
      SignatureEmail: string | null;
      /**
       * Signature Name
       * @description Name part of the email signature
       * @default null
       */
      SignatureName: string | null;
      /**
       * Signature Url
       * @description URL to the signature image
       * @default null
       */
      SignatureURL: string | null;
      /**
       * Time Zone
       * @description Time zone identifier, e.g., IST
       */
      TimeZone: string;
  };
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_UPDATE_CLIENT_SETTINGS tool output.
 */
type BENCHMARK_EMAIL_PATCH_UPDATE_CLIENT_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API, if any
       * @default null
       */
      Errors: {
          /**
           * Code
           * @description Error code returned by the API
           */
          Code: string;
          /**
           * Message
           * @description Error message returned by the API
           */
          Message: string;
      }[] | null;
      /**
       * Status
       * @description 1 = Successful, -1 = Error
       */
      Status: string;
      /**
       * Ret Val
       * @description Return value, if provided by the API
       * @default null
       */
      retVal: string | null;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_UPDATE_CONTACT_LIST tool input.
 */
type BENCHMARK_EMAIL_PATCH_UPDATE_CONTACT_LIST_INPUT = {
  /**
   * Data
   * @description Payload containing the fields to update
   */
  Data?: {
      /**
       * Description
       * @description New description for the contact list
       * @default null
       */
      Description: string | null;
      /**
       * Field10 Name
       * @description Name of custom field 10
       * @default null
       */
      Field10Name: string | null;
      /**
       * Field10 Type
       * @description Type code for custom field 10
       * @default null
       * @enum {string|null}
       */
      Field10Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field11 Name
       * @description Name of custom field 11
       * @default null
       */
      Field11Name: string | null;
      /**
       * Field11 Type
       * @description Type code for custom field 11
       * @default null
       * @enum {string|null}
       */
      Field11Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field12 Name
       * @description Name of custom field 12
       * @default null
       */
      Field12Name: string | null;
      /**
       * Field12 Type
       * @description Type code for custom field 12
       * @default null
       * @enum {string|null}
       */
      Field12Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field13 Name
       * @description Name of custom field 13
       * @default null
       */
      Field13Name: string | null;
      /**
       * Field13 Type
       * @description Type code for custom field 13
       * @default null
       * @enum {string|null}
       */
      Field13Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field14 Name
       * @description Name of custom field 14
       * @default null
       */
      Field14Name: string | null;
      /**
       * Field14 Type
       * @description Type code for custom field 14
       * @default null
       * @enum {string|null}
       */
      Field14Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field15 Name
       * @description Name of custom field 15
       * @default null
       */
      Field15Name: string | null;
      /**
       * Field15 Type
       * @description Type code for custom field 15
       * @default null
       * @enum {string|null}
       */
      Field15Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field16 Name
       * @description Name of custom field 16
       * @default null
       */
      Field16Name: string | null;
      /**
       * Field16 Type
       * @description Type code for custom field 16
       * @default null
       * @enum {string|null}
       */
      Field16Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field17 Name
       * @description Name of custom field 17
       * @default null
       */
      Field17Name: string | null;
      /**
       * Field17 Type
       * @description Type code for custom field 17
       * @default null
       * @enum {string|null}
       */
      Field17Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field18 Name
       * @description Name of custom field 18
       * @default null
       */
      Field18Name: string | null;
      /**
       * Field18 Type
       * @description Type code for custom field 18
       * @default null
       * @enum {string|null}
       */
      Field18Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field19 Name
       * @description Name of custom field 19
       * @default null
       */
      Field19Name: string | null;
      /**
       * Field19 Type
       * @description Type code for custom field 19
       * @default null
       * @enum {string|null}
       */
      Field19Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field1 Name
       * @description Name of custom field 1
       * @default null
       */
      Field1Name: string | null;
      /**
       * Field1 Type
       * @description Type code for custom field 1
       * @default null
       * @enum {string|null}
       */
      Field1Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field20 Name
       * @description Name of custom field 20
       * @default null
       */
      Field20Name: string | null;
      /**
       * Field20 Type
       * @description Type code for custom field 20
       * @default null
       * @enum {string|null}
       */
      Field20Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field21 Name
       * @description Name of custom field 21
       * @default null
       */
      Field21Name: string | null;
      /**
       * Field21 Type
       * @description Type code for custom field 21
       * @default null
       * @enum {string|null}
       */
      Field21Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field22 Name
       * @description Name of custom field 22
       * @default null
       */
      Field22Name: string | null;
      /**
       * Field22 Type
       * @description Type code for custom field 22
       * @default null
       * @enum {string|null}
       */
      Field22Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field23 Name
       * @description Name of custom field 23
       * @default null
       */
      Field23Name: string | null;
      /**
       * Field23 Type
       * @description Type code for custom field 23
       * @default null
       * @enum {string|null}
       */
      Field23Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field24 Name
       * @description Name of custom field 24
       * @default null
       */
      Field24Name: string | null;
      /**
       * Field24 Type
       * @description Type code for custom field 24
       * @default null
       * @enum {string|null}
       */
      Field24Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field2 Name
       * @description Name of custom field 2
       * @default null
       */
      Field2Name: string | null;
      /**
       * Field2 Type
       * @description Type code for custom field 2
       * @default null
       * @enum {string|null}
       */
      Field2Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field3 Name
       * @description Name of custom field 3
       * @default null
       */
      Field3Name: string | null;
      /**
       * Field3 Type
       * @description Type code for custom field 3
       * @default null
       * @enum {string|null}
       */
      Field3Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field4 Name
       * @description Name of custom field 4
       * @default null
       */
      Field4Name: string | null;
      /**
       * Field4 Type
       * @description Type code for custom field 4
       * @default null
       * @enum {string|null}
       */
      Field4Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field5 Name
       * @description Name of custom field 5
       * @default null
       */
      Field5Name: string | null;
      /**
       * Field5 Type
       * @description Type code for custom field 5
       * @default null
       * @enum {string|null}
       */
      Field5Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field6 Name
       * @description Name of custom field 6
       * @default null
       */
      Field6Name: string | null;
      /**
       * Field6 Type
       * @description Type code for custom field 6
       * @default null
       * @enum {string|null}
       */
      Field6Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field7 Name
       * @description Name of custom field 7
       * @default null
       */
      Field7Name: string | null;
      /**
       * Field7 Type
       * @description Type code for custom field 7
       * @default null
       * @enum {string|null}
       */
      Field7Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field8 Name
       * @description Name of custom field 8
       * @default null
       */
      Field8Name: string | null;
      /**
       * Field8 Type
       * @description Type code for custom field 8
       * @default null
       * @enum {string|null}
       */
      Field8Type: "1" | "2" | "3" | "4" | null;
      /**
       * Field9 Name
       * @description Name of custom field 9
       * @default null
       */
      Field9Name: string | null;
      /**
       * Field9 Type
       * @description Type code for custom field 9
       * @default null
       * @enum {string|null}
       */
      Field9Type: "1" | "2" | "3" | "4" | null;
      /**
       * Firstname Label
       * @description Custom label for the first name field
       * @default null
       */
      FirstnameLabel: string | null;
      /**
       * Lastname Label
       * @description Custom label for the last name field
       * @default null
       */
      LastnameLabel: string | null;
      /**
       * Middlename Label
       * @description Custom label for the middle name field
       * @default null
       */
      MiddlenameLabel: string | null;
      /**
       * Name
       * @description New name for the contact list
       * @default null
       */
      Name: string | null;
  };
  /**
   * List Id
   * @description Identifier of the contact list to update
   */
  ListID?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_UPDATE_CONTACT_LIST tool output.
 */
type BENCHMARK_EMAIL_PATCH_UPDATE_CONTACT_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description Detailed attributes of the updated contact list
       */
      Data: {
          /**
           * Active Contact Count
           * @description Number of active contacts
           */
          ActiveContactCount: string;
          /**
           * Created Date Time
           * @description Creation timestamp, e.g., 'Oct 06 2017, 05:44 PM'
           */
          CreatedDateTime: string;
          /**
           * Description
           * @description Description of the contact list
           * @default null
           */
          Description: string | null;
          /**
           * Field10 Name
           * @description Name of custom field 10
           * @default null
           */
          Field10Name: string | null;
          /**
           * Field10 Type
           * @description Type of custom field 10
           * @default null
           * @enum {string|null}
           */
          Field10Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field11 Name
           * @description Name of custom field 11
           * @default null
           */
          Field11Name: string | null;
          /**
           * Field11 Type
           * @description Type of custom field 11
           * @default null
           * @enum {string|null}
           */
          Field11Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field12 Name
           * @description Name of custom field 12
           * @default null
           */
          Field12Name: string | null;
          /**
           * Field12 Type
           * @description Type of custom field 12
           * @default null
           * @enum {string|null}
           */
          Field12Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field13 Name
           * @description Name of custom field 13
           * @default null
           */
          Field13Name: string | null;
          /**
           * Field13 Type
           * @description Type of custom field 13
           * @default null
           * @enum {string|null}
           */
          Field13Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field14 Name
           * @description Name of custom field 14
           * @default null
           */
          Field14Name: string | null;
          /**
           * Field14 Type
           * @description Type of custom field 14
           * @default null
           * @enum {string|null}
           */
          Field14Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field15 Name
           * @description Name of custom field 15
           * @default null
           */
          Field15Name: string | null;
          /**
           * Field15 Type
           * @description Type of custom field 15
           * @default null
           * @enum {string|null}
           */
          Field15Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field16 Name
           * @description Name of custom field 16
           * @default null
           */
          Field16Name: string | null;
          /**
           * Field16 Type
           * @description Type of custom field 16
           * @default null
           * @enum {string|null}
           */
          Field16Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field17 Name
           * @description Name of custom field 17
           * @default null
           */
          Field17Name: string | null;
          /**
           * Field17 Type
           * @description Type of custom field 17
           * @default null
           * @enum {string|null}
           */
          Field17Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field18 Name
           * @description Name of custom field 18
           * @default null
           */
          Field18Name: string | null;
          /**
           * Field18 Type
           * @description Type of custom field 18
           * @default null
           * @enum {string|null}
           */
          Field18Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field19 Name
           * @description Name of custom field 19
           * @default null
           */
          Field19Name: string | null;
          /**
           * Field19 Type
           * @description Type of custom field 19
           * @default null
           * @enum {string|null}
           */
          Field19Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field1 Name
           * @description Name of custom field 1
           * @default null
           */
          Field1Name: string | null;
          /**
           * Field1 Type
           * @description Type of custom field 1
           * @default null
           * @enum {string|null}
           */
          Field1Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field20 Name
           * @description Name of custom field 20
           * @default null
           */
          Field20Name: string | null;
          /**
           * Field20 Type
           * @description Type of custom field 20
           * @default null
           * @enum {string|null}
           */
          Field20Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field21 Name
           * @description Name of custom field 21
           * @default null
           */
          Field21Name: string | null;
          /**
           * Field21 Type
           * @description Type of custom field 21
           * @default null
           * @enum {string|null}
           */
          Field21Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field22 Name
           * @description Name of custom field 22
           * @default null
           */
          Field22Name: string | null;
          /**
           * Field22 Type
           * @description Type of custom field 22
           * @default null
           * @enum {string|null}
           */
          Field22Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field23 Name
           * @description Name of custom field 23
           * @default null
           */
          Field23Name: string | null;
          /**
           * Field23 Type
           * @description Type of custom field 23
           * @default null
           * @enum {string|null}
           */
          Field23Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field24 Name
           * @description Name of custom field 24
           * @default null
           */
          Field24Name: string | null;
          /**
           * Field24 Type
           * @description Type of custom field 24
           * @default null
           * @enum {string|null}
           */
          Field24Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field2 Name
           * @description Name of custom field 2
           * @default null
           */
          Field2Name: string | null;
          /**
           * Field2 Type
           * @description Type of custom field 2
           * @default null
           * @enum {string|null}
           */
          Field2Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field3 Name
           * @description Name of custom field 3
           * @default null
           */
          Field3Name: string | null;
          /**
           * Field3 Type
           * @description Type of custom field 3
           * @default null
           * @enum {string|null}
           */
          Field3Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field4 Name
           * @description Name of custom field 4
           * @default null
           */
          Field4Name: string | null;
          /**
           * Field4 Type
           * @description Type of custom field 4
           * @default null
           * @enum {string|null}
           */
          Field4Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field5 Name
           * @description Name of custom field 5
           * @default null
           */
          Field5Name: string | null;
          /**
           * Field5 Type
           * @description Type of custom field 5
           * @default null
           * @enum {string|null}
           */
          Field5Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field6 Name
           * @description Name of custom field 6
           * @default null
           */
          Field6Name: string | null;
          /**
           * Field6 Type
           * @description Type of custom field 6
           * @default null
           * @enum {string|null}
           */
          Field6Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field7 Name
           * @description Name of custom field 7
           * @default null
           */
          Field7Name: string | null;
          /**
           * Field7 Type
           * @description Type of custom field 7
           * @default null
           * @enum {string|null}
           */
          Field7Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field8 Name
           * @description Name of custom field 8
           * @default null
           */
          Field8Name: string | null;
          /**
           * Field8 Type
           * @description Type of custom field 8
           * @default null
           * @enum {string|null}
           */
          Field8Type: "1" | "2" | "3" | "4" | null;
          /**
           * Field9 Name
           * @description Name of custom field 9
           * @default null
           */
          Field9Name: string | null;
          /**
           * Field9 Type
           * @description Type of custom field 9
           * @default null
           * @enum {string|null}
           */
          Field9Type: "1" | "2" | "3" | "4" | null;
          /**
           * Firstname Label
           * @description Label for first name field
           * @default null
           */
          FirstnameLabel: string | null;
          /**
           * Id
           * @description Unique list identifier
           */
          ID: string;
          /**
           * Is Master Unsubscribe
           * @description '1' if master unsubscribe enabled, '0' otherwise
           * @enum {string}
           */
          IsMasterUnsubscribe: "0" | "1";
          /**
           * Lastname Label
           * @description Label for last name field
           * @default null
           */
          LastnameLabel: string | null;
          /**
           * Middlename Label
           * @description Label for middle name field
           * @default null
           */
          MiddlenameLabel: string | null;
          /**
           * Name
           * @description Name of the contact list
           */
          Name: string;
      };
      /**
       * Errors
       * @description Array of error messages, empty if update succeeded
       */
      Errors: string[];
      /**
       * Status
       * @description '1' indicates success, '-1' indicates error
       */
      Status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_UPDATE_EDIT_PROFILE tool input.
 */
type BENCHMARK_EMAIL_PATCH_UPDATE_EDIT_PROFILE_INPUT = {
  /**
   * First Name
   * @description Client's first name
   */
  FirstName?: string;
  /**
   * Last Name
   * @description Client's last name
   */
  LastName?: string;
  /**
   * Phone No
   * @description Client's phone number
   */
  PhoneNo?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_UPDATE_EDIT_PROFILE tool output.
 */
type BENCHMARK_EMAIL_PATCH_UPDATE_EDIT_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Array of error messages, empty when successful
       */
      Errors: string[];
      /**
       * Status
       * @description '1' indicates success, '-1' indicates error
       */
      Status: string;
      /**
       * Ret Val
       * @description Return value from the API, often empty on success
       * @default null
       */
      retVal: string | null;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_UPDATE_WEBHOOK tool input.
 */
type BENCHMARK_EMAIL_PATCH_UPDATE_WEBHOOK_INPUT = {
  /**
   * Data
   * @description Settings payload for the webhook
   */
  Data?: {
      /**
       * Cleaned Address
       * @description
       *     1 to enable cleaned-address callbacks, 0 to disable
       *
       * @enum {string}
       */
      CleanedAddress: "0" | "1";
      /**
       * Client Url
       * @description The HTTPS endpoint that receives webhook payloads
       */
      ClientUrl: string;
      /**
       * Contact Master Id
       * @description ID of the contact list this webhook belongs to
       */
      ContactMasterID: number;
      /**
       * Email Changed
       * @description 1 to enable email-changed callbacks, 0 to disable
       * @enum {string}
       */
      EmailChanged: "0" | "1";
      /**
       * Profile Updates
       * @description 1 to enable profile-update callbacks, 0 to disable
       * @enum {string}
       */
      ProfileUpdates: "0" | "1";
      /**
       * Subscribes
       * @description 1 to enable subscribe callbacks, 0 to disable
       * @enum {string}
       */
      Subscribes: "0" | "1";
      /**
       * Unsubscribes
       * @description 1 to enable unsubscribe callbacks, 0 to disable
       * @enum {string}
       */
      Unsubscribes: "0" | "1";
  };
  /**
   * Id
   * @description Unique identifier of the webhook to update
   */
  ID?: number;
  /**
   * List Id
   * @description ID of the contact list containing the webhook
   */
  ListID?: number;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_PATCH_UPDATE_WEBHOOK tool output.
 */
type BENCHMARK_EMAIL_PATCH_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description The updated webhook record
       */
      Data: {
          /**
           * Cleaned Address
           * @description
           *     1 to enable cleaned-address callbacks, 0 to disable
           *
           * @enum {string}
           */
          CleanedAddress: "0" | "1";
          /**
           * Client Url
           * @description The HTTPS endpoint that receives webhook payloads
           */
          ClientUrl: string;
          /**
           * Contact Master Id
           * @description ID of the contact list this webhook belongs to
           */
          ContactMasterID: number;
          /**
           * Email Changed
           * @description 1 to enable email-changed callbacks, 0 to disable
           * @enum {string}
           */
          EmailChanged: "0" | "1";
          /**
           * Profile Updates
           * @description 1 to enable profile-update callbacks, 0 to disable
           * @enum {string}
           */
          ProfileUpdates: "0" | "1";
          /**
           * Subscribes
           * @description 1 to enable subscribe callbacks, 0 to disable
           * @enum {string}
           */
          Subscribes: "0" | "1";
          /**
           * Unsubscribes
           * @description 1 to enable unsubscribe callbacks, 0 to disable
           * @enum {string}
           */
          Unsubscribes: "0" | "1";
      };
      /**
       * Errors
       * @description List of errors, empty if successful
       */
      Errors: string[];
      /**
       * Status
       * @description 1 indicates success, -1 indicates failure
       */
      Status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_ADD_CONTACT_TO_LIST tool input.
 */
type BENCHMARK_EMAIL_POST_ADD_CONTACT_TO_LIST_INPUT = {
  /**
   * Email
   * @description Contact's email address
   */
  Email?: string;
  /**
   * Email Perm
   * @description Email permission flag: '1'=grant, '0'=decline (optional)
   * @default null
   * @enum {string|null}
   */
  EmailPerm: "1" | "0" | null;
  /**
   * First Name
   * @description Contact's first name (optional)
   * @default null
   */
  FirstName: string | null;
  /**
   * Last Name
   * @description Contact's last name (optional)
   * @default null
   */
  LastName: string | null;
  /**
   * List Id
   * @description ID of the contact list to add the new contact to
   */
  ListID?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_ADD_CONTACT_TO_LIST tool output.
 */
type BENCHMARK_EMAIL_POST_ADD_CONTACT_TO_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description Details of the newly added contact
       */
      Data: {
          /**
           * Contact Master Id
           * @description Internal contact master ID
           * @default null
           */
          ContactMasterID: string | null;
          /**
           * Email
           * @description Contact email address
           * @default null
           */
          Email: string | null;
          /**
           * Email Perm
           * @description Email permission flag
           * @default null
           */
          EmailPerm: string | null;
          /**
           * Email Type
           * @description Email type code
           * @default null
           */
          EmailType: string | null;
          /**
           * First Name
           * @description First name of the contact
           * @default null
           */
          FirstName: string | null;
          /**
           * Id
           * @description Unique ID of this contact entry
           * @default null
           */
          ID: string | null;
          /**
           * Last Name
           * @description Last name of the contact
           * @default null
           */
          LastName: string | null;
          /**
           * Middle Name
           * @description Middle name of the contact
           * @default null
           */
          MiddleName: string | null;
          /**
           * Optin
           * @description Opt-in status
           * @default null
           */
          Optin: string | null;
          /**
           * Optin Date
           * @description Date when the contact opted in
           * @default null
           */
          OptinDate: string | null;
          /**
           * Optin Ip
           * @description IP address used during opt-in
           * @default null
           */
          OptinIP: string | null;
          /**
           * Status
           * @description Record status code
           * @default null
           */
          Status: string | null;
      };
      /**
       * Errors
       * @description Errors returned by the API, if any
       * @default null
       */
      Errors: {
          /**
           * Code
           * @description Error code returned by the API
           */
          Code: string;
          /**
           * Message
           * @description Error message returned by the API
           */
          Message: string;
      }[] | null;
      /**
       * Status
       * @description 1 = success, -1 = error
       */
      Status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_CHANGE_SECURITY_PIN tool input.
 */
type BENCHMARK_EMAIL_POST_CHANGE_SECURITY_PIN_INPUT = {
  /**
   * Reset Confirm Pin
   * @description Confirmation of the new PIN; must match ResetPIN
   */
  ResetConfirmPIN?: string;
  /**
   * Reset Old Pin
   * @description Current 4-digit security PIN
   */
  ResetOldPIN?: string;
  /**
   * Reset Pin
   * @description New 4-digit security PIN to set for the client account
   */
  ResetPIN?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_CHANGE_SECURITY_PIN tool output.
 */
type BENCHMARK_EMAIL_POST_CHANGE_SECURITY_PIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages; empty if the PIN was changed successfully
       */
      Errors: string[];
      /**
       * Status
       * @description '1' indicates success, '-1' indicates error
       */
      Status: string;
      /**
       * Ret Val
       * @description Return value; '1' on success
       */
      retVal: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_CREATE_CONTACT_LIST tool input.
 */
type BENCHMARK_EMAIL_POST_CREATE_CONTACT_LIST_INPUT = {
  /**
   * Description
   * @description Optional description for the contact list
   * @default null
   */
  Description: string | null;
  /**
   * Name
   * @description Name of the new contact list
   */
  Name?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_CREATE_CONTACT_LIST tool output.
 */
type BENCHMARK_EMAIL_POST_CREATE_CONTACT_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description Details of the created contact list
       */
      Data: {
          /**
           * Id
           * @description Unique identifier of the newly created contact list
           */
          ID: string;
      };
      /**
       * Errors
       * @description Error messages if any
       * @default null
       */
      Errors: string[] | null;
      /**
       * Status
       * @description API status: '1'=success, '-1'=error
       * @enum {string}
       */
      Status: "1" | "-1";
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_CREATE_WEBHOOK tool input.
 */
type BENCHMARK_EMAIL_POST_CREATE_WEBHOOK_INPUT = {
  /**
   * Cleaned Address
   * @description Flag for cleaned-address event callback: '1' to enable, '0' to disable
   * @enum {string}
   */
  CleanedAddress?: "0" | "1";
  /**
   * Client Url
   * @description The HTTP endpoint URL to receive webhook callbacks
   */
  ClientUrl?: string;
  /**
   * Contact Master Id
   * @description Same as ListID, the contact list identifier
   */
  ContactMasterID?: string;
  /**
   * Email Changed
   * @description Flag for email-changed event callback: '1' to enable, '0' to disable
   * @enum {string}
   */
  EmailChanged?: "0" | "1";
  /**
   * List Id
   * @description ID of the contact list to associate the new webhook with
   */
  ListID?: string;
  /**
   * Profile Updates
   * @description Flag for profile-updates event callback: '1' to enable, '0' to disable
   * @enum {string}
   */
  ProfileUpdates?: "0" | "1";
  /**
   * Subscribes
   * @description Flag for subscribe event callback: '1' to enable, '0' to disable
   * @enum {string}
   */
  Subscribes?: "0" | "1";
  /**
   * Unsubscribes
   * @description Flag for unsubscribe event callback: '1' to enable, '0' to disable
   * @enum {string}
   */
  Unsubscribes?: "0" | "1";
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_CREATE_WEBHOOK tool output.
 */
type BENCHMARK_EMAIL_POST_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data
       * @description Details of the newly created webhook
       */
      Data: {
          /**
           * Cleaned Address
           * @description Cleaning event callback enabled flag
           * @enum {string}
           */
          CleanedAddress: "0" | "1";
          /**
           * Client Url
           * @description Webhook callback HTTP endpoint URL
           */
          ClientUrl: string;
          /**
           * Contact Master Id
           * @description Contact list identifier
           */
          ContactMasterID: string;
          /**
           * Email Changed
           * @description Email change event callback enabled flag
           * @enum {string}
           */
          EmailChanged: "0" | "1";
          /**
           * Id
           * @description Unique identifier of the webhook
           */
          ID: string;
          /**
           * Profile Updates
           * @description Profile update event callback enabled flag
           * @enum {string}
           */
          ProfileUpdates: "0" | "1";
          /**
           * Subscribes
           * @description Subscribe event callback enabled flag
           * @enum {string}
           */
          Subscribes: "0" | "1";
          /**
           * Unsubscribes
           * @description Unsubscribe event callback enabled flag
           * @enum {string}
           */
          Unsubscribes: "0" | "1";
      };
      /**
       * Errors
       * @description List of error messages, if any
       * @default null
       */
      Errors: string[] | null;
      /**
       * Status
       * @description '1' indicates success, '-1' indicates failure
       */
      Status: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_DISABLE_SECURITY_PIN tool input.
 */
type BENCHMARK_EMAIL_POST_DISABLE_SECURITY_PIN_INPUT = {
  /**
   * Disable Old Pin
   * @description Current 4-digit security PIN to disable
   */
  DisableOldPIN?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_DISABLE_SECURITY_PIN tool output.
 */
type BENCHMARK_EMAIL_POST_DISABLE_SECURITY_PIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors; empty if the PIN was disabled successfully
       */
      Errors: {
          /**
           * Code
           * @description Error code returned when the operation fails
           * @default null
           */
          Code: string | null;
          /**
           * Message
           * @description Error message returned when the operation fails
           * @default null
           */
          Message: string | null;
      }[];
      /**
       * Status
       * @description '1' indicates success, '-1' indicates error
       */
      Status: string;
      /**
       * Ret Val
       * @description Return value from the API, typically empty on success
       * @default null
       */
      retVal: string | null;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_SAVE_WEBSITE_DOMAIN tool input.
 */
type BENCHMARK_EMAIL_POST_SAVE_WEBSITE_DOMAIN_INPUT = {
  /**
   * Company Website
   * @description Domain name to link with your Benchmark Email account (e.g., 'example.com').
   */
  CompanyWebsite?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_SAVE_WEBSITE_DOMAIN tool output.
 */
type BENCHMARK_EMAIL_POST_SAVE_WEBSITE_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description API response code as string indicating the result.
       */
      Response: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_SEND_CONFIRM_EMAIL_VERIFICATION tool input.
 */
type BENCHMARK_EMAIL_POST_SEND_CONFIRM_EMAIL_VERIFICATION_INPUT = {
  /**
   * Email I Ds
   * @description Comma-separated list of email addresses to send verification emails to
   */
  EmailIDs?: string;
};

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_SEND_CONFIRM_EMAIL_VERIFICATION tool output.
 */
type BENCHMARK_EMAIL_POST_SEND_CONFIRM_EMAIL_VERIFICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Array of error objects, empty if successful
       */
      Errors: {
          /**
           * Code
           * @description Error code returned by the API
           */
          Code: string;
          /**
           * Message
           * @description Error message returned by the API
           */
          Message: string;
      }[];
      /**
       * Final String
       * @description Final string returned by the API
       * @default null
       */
      FinalString: string | null;
      /**
       * Message
       * @description Message text returned by the API
       * @default null
       */
      Message: string | null;
      /**
       * Status
       * @description Status code, '1' = success, '-1' = error
       */
      Status: string;
      /**
       * Success
       * @description Success flag, '1' = success, '-1' = error
       */
      Success: string;
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
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_SEND_PIN_EMAIL tool input.
 */
type BENCHMARK_EMAIL_POST_SEND_PIN_EMAIL_INPUT = object;

/**
 * Type of BENCHMARK_EMAIL's BENCHMARK_EMAIL_POST_SEND_PIN_EMAIL tool output.
 */
type BENCHMARK_EMAIL_POST_SEND_PIN_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages; empty if PIN email was sent successfully
       */
      Errors: string[];
      /**
       * Status
       * @description '1' indicates success, '-1' indicates error
       */
      Status: string;
      /**
       * Ret Val
       * @description Return value; '1' indicates the send command was accepted
       */
      retVal: string;
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
 * Type map of all available tool input types for toolkit "BENCHMARK_EMAIL".
 */
export type BENCHMARK_EMAIL_TOOL_INPUTS = {
  DELETE_CONTACT_FROM_LIST: BENCHMARK_EMAIL_DELETE_CONTACT_FROM_LIST_INPUT
  DELETE_CONTACT_LIST: BENCHMARK_EMAIL_DELETE_CONTACT_LIST_INPUT
  DELETE_EMAIL: BENCHMARK_EMAIL_DELETE_EMAIL_INPUT
  DELETE_LINK_ACCOUNT: BENCHMARK_EMAIL_DELETE_LINK_ACCOUNT_INPUT
  DELETE_WEBHOOK: BENCHMARK_EMAIL_DELETE_WEBHOOK_INPUT
  GET_ALL_CONFIRMED_EMAILS: BENCHMARK_EMAIL_GET_ALL_CONFIRMED_EMAILS_INPUT
  GET_CLIENT_ACCOUNT_SETTINGS: BENCHMARK_EMAIL_GET_CLIENT_ACCOUNT_SETTINGS_INPUT
  GET_CLIENT_DETAILS: BENCHMARK_EMAIL_GET_CLIENT_DETAILS_INPUT
  GET_CLIENT_PLAN_INFORMATION: BENCHMARK_EMAIL_GET_CLIENT_PLAN_INFORMATION_INPUT
  GET_CLIENT_PROFILE_DETAILS: BENCHMARK_EMAIL_GET_CLIENT_PROFILE_DETAILS_INPUT
  GET_CONTACTS_IN_LIST: BENCHMARK_EMAIL_GET_CONTACTS_IN_LIST_INPUT
  GET_CONTACT_LISTS: BENCHMARK_EMAIL_GET_CONTACT_LISTS_INPUT
  GET_CONTACT_LIST_DETAILS: BENCHMARK_EMAIL_GET_CONTACT_LIST_DETAILS_INPUT
  GET_EMAIL_REPORT_FORWARDS: BENCHMARK_EMAIL_GET_EMAIL_REPORT_FORWARDS_INPUT
  GET_EMAIL_REPORT_UNOPENS: BENCHMARK_EMAIL_GET_EMAIL_REPORT_UNOPENS_INPUT
  GET_LINK_ACCOUNT_DETAILS: BENCHMARK_EMAIL_GET_LINK_ACCOUNT_DETAILS_INPUT
  GET_LIST_LINK_ACCOUNTS: BENCHMARK_EMAIL_GET_LIST_LINK_ACCOUNTS_INPUT
  GET_SUB_ACCOUNTS: BENCHMARK_EMAIL_GET_SUB_ACCOUNTS_INPUT
  GET_SUB_ACCOUNTS_PLAN_LIST: BENCHMARK_EMAIL_GET_SUB_ACCOUNTS_PLAN_LIST_INPUT
  GET_SUB_ACCOUNT_DETAILS: BENCHMARK_EMAIL_GET_SUB_ACCOUNT_DETAILS_INPUT
  GET_SUB_ACCOUNT_HISTORY: BENCHMARK_EMAIL_GET_SUB_ACCOUNT_HISTORY_INPUT
  PATCH_CHANGE_PASSWORD: BENCHMARK_EMAIL_PATCH_CHANGE_PASSWORD_INPUT
  PATCH_SAVE_SECURITY_PIN: BENCHMARK_EMAIL_PATCH_SAVE_SECURITY_PIN_INPUT
  PATCH_SEND_RESET_EMAIL: BENCHMARK_EMAIL_PATCH_SEND_RESET_EMAIL_INPUT
  PATCH_UPDATE_CLIENT_SETTINGS: BENCHMARK_EMAIL_PATCH_UPDATE_CLIENT_SETTINGS_INPUT
  PATCH_UPDATE_CONTACT_LIST: BENCHMARK_EMAIL_PATCH_UPDATE_CONTACT_LIST_INPUT
  PATCH_UPDATE_EDIT_PROFILE: BENCHMARK_EMAIL_PATCH_UPDATE_EDIT_PROFILE_INPUT
  PATCH_UPDATE_WEBHOOK: BENCHMARK_EMAIL_PATCH_UPDATE_WEBHOOK_INPUT
  POST_ADD_CONTACT_TO_LIST: BENCHMARK_EMAIL_POST_ADD_CONTACT_TO_LIST_INPUT
  POST_CHANGE_SECURITY_PIN: BENCHMARK_EMAIL_POST_CHANGE_SECURITY_PIN_INPUT
  POST_CREATE_CONTACT_LIST: BENCHMARK_EMAIL_POST_CREATE_CONTACT_LIST_INPUT
  POST_CREATE_WEBHOOK: BENCHMARK_EMAIL_POST_CREATE_WEBHOOK_INPUT
  POST_DISABLE_SECURITY_PIN: BENCHMARK_EMAIL_POST_DISABLE_SECURITY_PIN_INPUT
  POST_SAVE_WEBSITE_DOMAIN: BENCHMARK_EMAIL_POST_SAVE_WEBSITE_DOMAIN_INPUT
  POST_SEND_CONFIRM_EMAIL_VERIFICATION: BENCHMARK_EMAIL_POST_SEND_CONFIRM_EMAIL_VERIFICATION_INPUT
  POST_SEND_PIN_EMAIL: BENCHMARK_EMAIL_POST_SEND_PIN_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BENCHMARK_EMAIL".
 */
export type BENCHMARK_EMAIL_TOOL_OUTPUTS = {
  DELETE_CONTACT_FROM_LIST: BENCHMARK_EMAIL_DELETE_CONTACT_FROM_LIST_OUTPUT
  DELETE_CONTACT_LIST: BENCHMARK_EMAIL_DELETE_CONTACT_LIST_OUTPUT
  DELETE_EMAIL: BENCHMARK_EMAIL_DELETE_EMAIL_OUTPUT
  DELETE_LINK_ACCOUNT: BENCHMARK_EMAIL_DELETE_LINK_ACCOUNT_OUTPUT
  DELETE_WEBHOOK: BENCHMARK_EMAIL_DELETE_WEBHOOK_OUTPUT
  GET_ALL_CONFIRMED_EMAILS: BENCHMARK_EMAIL_GET_ALL_CONFIRMED_EMAILS_OUTPUT
  GET_CLIENT_ACCOUNT_SETTINGS: BENCHMARK_EMAIL_GET_CLIENT_ACCOUNT_SETTINGS_OUTPUT
  GET_CLIENT_DETAILS: BENCHMARK_EMAIL_GET_CLIENT_DETAILS_OUTPUT
  GET_CLIENT_PLAN_INFORMATION: BENCHMARK_EMAIL_GET_CLIENT_PLAN_INFORMATION_OUTPUT
  GET_CLIENT_PROFILE_DETAILS: BENCHMARK_EMAIL_GET_CLIENT_PROFILE_DETAILS_OUTPUT
  GET_CONTACTS_IN_LIST: BENCHMARK_EMAIL_GET_CONTACTS_IN_LIST_OUTPUT
  GET_CONTACT_LISTS: BENCHMARK_EMAIL_GET_CONTACT_LISTS_OUTPUT
  GET_CONTACT_LIST_DETAILS: BENCHMARK_EMAIL_GET_CONTACT_LIST_DETAILS_OUTPUT
  GET_EMAIL_REPORT_FORWARDS: BENCHMARK_EMAIL_GET_EMAIL_REPORT_FORWARDS_OUTPUT
  GET_EMAIL_REPORT_UNOPENS: BENCHMARK_EMAIL_GET_EMAIL_REPORT_UNOPENS_OUTPUT
  GET_LINK_ACCOUNT_DETAILS: BENCHMARK_EMAIL_GET_LINK_ACCOUNT_DETAILS_OUTPUT
  GET_LIST_LINK_ACCOUNTS: BENCHMARK_EMAIL_GET_LIST_LINK_ACCOUNTS_OUTPUT
  GET_SUB_ACCOUNTS: BENCHMARK_EMAIL_GET_SUB_ACCOUNTS_OUTPUT
  GET_SUB_ACCOUNTS_PLAN_LIST: BENCHMARK_EMAIL_GET_SUB_ACCOUNTS_PLAN_LIST_OUTPUT
  GET_SUB_ACCOUNT_DETAILS: BENCHMARK_EMAIL_GET_SUB_ACCOUNT_DETAILS_OUTPUT
  GET_SUB_ACCOUNT_HISTORY: BENCHMARK_EMAIL_GET_SUB_ACCOUNT_HISTORY_OUTPUT
  PATCH_CHANGE_PASSWORD: BENCHMARK_EMAIL_PATCH_CHANGE_PASSWORD_OUTPUT
  PATCH_SAVE_SECURITY_PIN: BENCHMARK_EMAIL_PATCH_SAVE_SECURITY_PIN_OUTPUT
  PATCH_SEND_RESET_EMAIL: BENCHMARK_EMAIL_PATCH_SEND_RESET_EMAIL_OUTPUT
  PATCH_UPDATE_CLIENT_SETTINGS: BENCHMARK_EMAIL_PATCH_UPDATE_CLIENT_SETTINGS_OUTPUT
  PATCH_UPDATE_CONTACT_LIST: BENCHMARK_EMAIL_PATCH_UPDATE_CONTACT_LIST_OUTPUT
  PATCH_UPDATE_EDIT_PROFILE: BENCHMARK_EMAIL_PATCH_UPDATE_EDIT_PROFILE_OUTPUT
  PATCH_UPDATE_WEBHOOK: BENCHMARK_EMAIL_PATCH_UPDATE_WEBHOOK_OUTPUT
  POST_ADD_CONTACT_TO_LIST: BENCHMARK_EMAIL_POST_ADD_CONTACT_TO_LIST_OUTPUT
  POST_CHANGE_SECURITY_PIN: BENCHMARK_EMAIL_POST_CHANGE_SECURITY_PIN_OUTPUT
  POST_CREATE_CONTACT_LIST: BENCHMARK_EMAIL_POST_CREATE_CONTACT_LIST_OUTPUT
  POST_CREATE_WEBHOOK: BENCHMARK_EMAIL_POST_CREATE_WEBHOOK_OUTPUT
  POST_DISABLE_SECURITY_PIN: BENCHMARK_EMAIL_POST_DISABLE_SECURITY_PIN_OUTPUT
  POST_SAVE_WEBSITE_DOMAIN: BENCHMARK_EMAIL_POST_SAVE_WEBSITE_DOMAIN_OUTPUT
  POST_SEND_CONFIRM_EMAIL_VERIFICATION: BENCHMARK_EMAIL_POST_SEND_CONFIRM_EMAIL_VERIFICATION_OUTPUT
  POST_SEND_PIN_EMAIL: BENCHMARK_EMAIL_POST_SEND_PIN_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BENCHMARK_EMAIL toolkit.
 */
export const BENCHMARK_EMAIL = {
  slug: "benchmark_email",
  tools: {
    /**
     * Tool to delete a contact from a specific list by contactid. use when you have list and contact ids. example: "delete contact 2040826674 from list 15257899"
     */
    DELETE_CONTACT_FROM_LIST: "BENCHMARK_EMAIL_DELETE_CONTACT_FROM_LIST",
    /**
     * Tool to delete a contact list. use after confirming that the list is no longer in use.
     */
    DELETE_CONTACT_LIST: "BENCHMARK_EMAIL_DELETE_CONTACT_LIST",
    /**
     * Tool to delete an email campaign. use when removing a campaign by its id. use after confirming the campaign id is correct.
     */
    DELETE_EMAIL: "BENCHMARK_EMAIL_DELETE_EMAIL",
    /**
     * Tool to delete a linked agency account. use when revoking a linked agency account by its id. use after confirming the account id is correct.
     */
    DELETE_LINK_ACCOUNT: "BENCHMARK_EMAIL_DELETE_LINK_ACCOUNT",
    /**
     * Tool to delete a webhook from a contact list by its id. use when removing obsolete or invalid webhooks after confirming list and webhook details.
     */
    DELETE_WEBHOOK: "BENCHMARK_EMAIL_DELETE_WEBHOOK",
    /**
     * Tool to retrieve all confirmed email addresses for the client account. use after user completes email confirmation flows to fetch final list.
     */
    GET_ALL_CONFIRMED_EMAILS: "BENCHMARK_EMAIL_GET_ALL_CONFIRMED_EMAILS",
    /**
     * Tool to get client account settings such as company, language, timezone, and sender info. use when you need to fetch account configuration before sending campaigns.
     */
    GET_CLIENT_ACCOUNT_SETTINGS: "BENCHMARK_EMAIL_GET_CLIENT_ACCOUNT_SETTINGS",
    /**
     * Tool to get client details including profile data, contact count, and plan information. use when verifying account profile and limits.
     */
    GET_CLIENT_DETAILS: "BENCHMARK_EMAIL_GET_CLIENT_DETAILS",
    /**
     * Tool to get client's plan information including addons, email plan, and total contacts. use when you need the current plan details before managing upgrades or billing.
     */
    GET_CLIENT_PLAN_INFORMATION: "BENCHMARK_EMAIL_GET_CLIENT_PLAN_INFORMATION",
    /**
     * Tool to get client's profile details like business city, country, phone, and company. use after confirming authentication to fetch client profile info.
     */
    GET_CLIENT_PROFILE_DETAILS: "BENCHMARK_EMAIL_GET_CLIENT_PROFILE_DETAILS",
    /**
     * Tool to fetch filtered and paginated contacts from a list by listid. use when narrowing a list via search, filters, and paging.
     */
    GET_CONTACTS_IN_LIST: "BENCHMARK_EMAIL_GET_CONTACTS_IN_LIST",
    /**
     * Tool to retrieve all contact lists. use when you need to list or select a contact list.
     */
    GET_CONTACT_LISTS: "BENCHMARK_EMAIL_GET_CONTACT_LISTS",
    /**
     * Tool to fetch detailed information for a contact list. use after confirming the list id to retrieve all metadata.
     */
    GET_CONTACT_LIST_DETAILS: "BENCHMARK_EMAIL_GET_CONTACT_LIST_DETAILS",
    /**
     * Tool to get forwards report for an email campaign. use after campaign send to export its forwards.
     */
    GET_EMAIL_REPORT_FORWARDS: "BENCHMARK_EMAIL_GET_EMAIL_REPORT_FORWARDS",
    /**
     * Tool to get unopens report for an email campaign by id. use when you need to export or review recipients who did not open a specific email campaign.
     */
    GET_EMAIL_REPORT_UNOPENS: "BENCHMARK_EMAIL_GET_EMAIL_REPORT_UNOPENS",
    /**
     * Tool to get details of a linked agency account. use when retrieving info for a specific linked account by id after confirming the account exists.
     */
    GET_LINK_ACCOUNT_DETAILS: "BENCHMARK_EMAIL_GET_LINK_ACCOUNT_DETAILS",
    /**
     * Tool to get list of linked agency accounts. use after linking agency accounts to retrieve all associated accounts.
     */
    GET_LIST_LINK_ACCOUNTS: "BENCHMARK_EMAIL_GET_LIST_LINK_ACCOUNTS",
    /**
     * Tool to retrieve all sub-accounts for the client. use when you need to view or manage sub-accounts.
     */
    GET_SUB_ACCOUNTS: "BENCHMARK_EMAIL_GET_SUB_ACCOUNTS",
    /**
     * Tool to retrieve available plans for a sub-account. use when you need to determine list and email limits for a specific sub-account client id.
     */
    GET_SUB_ACCOUNTS_PLAN_LIST: "BENCHMARK_EMAIL_GET_SUB_ACCOUNTS_PLAN_LIST",
    /**
     * Tool to get details for a specific sub-account by id. use when needing profile and plan info of a child account.
     */
    GET_SUB_ACCOUNT_DETAILS: "BENCHMARK_EMAIL_GET_SUB_ACCOUNT_DETAILS",
    /**
     * Tool to get sub-account history. use after listing sub-accounts to retrieve each account's billing history.
     */
    GET_SUB_ACCOUNT_HISTORY: "BENCHMARK_EMAIL_GET_SUB_ACCOUNT_HISTORY",
    /**
     * Tool to change the password for the client account. use when updating account credentials after validating new and confirm passwords match.
     */
    PATCH_CHANGE_PASSWORD: "BENCHMARK_EMAIL_PATCH_CHANGE_PASSWORD",
    /**
     * Tool to save a new security pin for the client account. use when you need to update the account pin after confirming both entries match.
     */
    PATCH_SAVE_SECURITY_PIN: "BENCHMARK_EMAIL_PATCH_SAVE_SECURITY_PIN",
    /**
     * Tool to send a reset email link to change the primary email address. use when initiating an email-based reset of the account’s primary email after user request.
     */
    PATCH_SEND_RESET_EMAIL: "BENCHMARK_EMAIL_PATCH_SEND_RESET_EMAIL",
    /**
     * Tool to update client account settings. use after fetching current settings. updates company info, timezone, language, sender defaults, and signature details.
     */
    PATCH_UPDATE_CLIENT_SETTINGS: "BENCHMARK_EMAIL_PATCH_UPDATE_CLIENT_SETTINGS",
    /**
     * Tool to update an existing contact list. use after confirming list id and desired modifications to name, description, labels, or custom fields.
     */
    PATCH_UPDATE_CONTACT_LIST: "BENCHMARK_EMAIL_PATCH_UPDATE_CONTACT_LIST",
    /**
     * Tool to update or edit profile information such as first name, last name, and phone number. use after retrieving profile details to apply changes.
     */
    PATCH_UPDATE_EDIT_PROFILE: "BENCHMARK_EMAIL_PATCH_UPDATE_EDIT_PROFILE",
    /**
     * Tool to update a webhook for a contact list by webhook id. use after retrieving or creating a webhook to modify its event settings such as cleaned-address, email-change, profile-update, subscribe, and unsubscribe callbacks.
     */
    PATCH_UPDATE_WEBHOOK: "BENCHMARK_EMAIL_PATCH_UPDATE_WEBHOOK",
    /**
     * Tool to add a new contact to a specific list. use after verifying the list id exists.
     */
    POST_ADD_CONTACT_TO_LIST: "BENCHMARK_EMAIL_POST_ADD_CONTACT_TO_LIST",
    /**
     * Tool to change security pin for the client account. use after confirming your current pin to rotate your pin.
     */
    POST_CHANGE_SECURITY_PIN: "BENCHMARK_EMAIL_POST_CHANGE_SECURITY_PIN",
    /**
     * Tool to create a new contact list. use after planning list name and optional description.
     */
    POST_CREATE_CONTACT_LIST: "BENCHMARK_EMAIL_POST_CREATE_CONTACT_LIST",
    /**
     * Tool to create a new webhook for a contact list. use when you need to get callbacks for list events after list creation.
     */
    POST_CREATE_WEBHOOK: "BENCHMARK_EMAIL_POST_CREATE_WEBHOOK",
    /**
     * Tool to disable security pin for the client account. use when revoking the current pin to remove pin protection.
     */
    POST_DISABLE_SECURITY_PIN: "BENCHMARK_EMAIL_POST_DISABLE_SECURITY_PIN",
    /**
     * Tool to save a website domain for your benchmark email account. use after account setup to register your domain for link tracking.
     */
    POST_SAVE_WEBSITE_DOMAIN: "BENCHMARK_EMAIL_POST_SAVE_WEBSITE_DOMAIN",
    /**
     * Tool to send confirm email verification. use when unverified addresses must receive verification emails after signup.
     */
    POST_SEND_CONFIRM_EMAIL_VERIFICATION: "BENCHMARK_EMAIL_POST_SEND_CONFIRM_EMAIL_VERIFICATION",
    /**
     * Tool to send pin via email. use when you forgot your security pin and need it emailed to you.
     */
    POST_SEND_PIN_EMAIL: "BENCHMARK_EMAIL_POST_SEND_PIN_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BENCHMARK_EMAIL".
 */
export type BENCHMARK_EMAIL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BENCHMARK_EMAIL".
 */
export type BENCHMARK_EMAIL_TRIGGER_EVENTS = {}
