// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_BENEFICIARY tool input.
 */
type FLUTTERWAVE_CREATE_BENEFICIARY_INPUT = {
  /**
   * Account Bank
   * @description The beneficiary's bank code. Retrieve valid codes via the get_banks endpoint.
   */
  account_bank?: string;
  /**
   * Account Number
   * @description The beneficiary's account number. Example: '0690000041'
   */
  account_number?: string;
  /**
   * Beneficiary Name
   * @description Optional: The full name of the beneficiary, if different from the account holder name.
   * @default null
   */
  beneficiary_name: string | null;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_BENEFICIARY tool output.
 */
type FLUTTERWAVE_CREATE_BENEFICIARY_OUTPUT = {
  /**
   * Data
   * @description Details of the created beneficiary.
   */
  data?: {
      /**
       * Account Number
       * @description The beneficiary's account number.
       */
      account_number: string;
      /**
       * Bank Code
       * @description The beneficiary's bank code.
       */
      bank_code: string;
      /**
       * Bank Name
       * @description The name of the beneficiary's bank.
       */
      bank_name: string;
      /**
       * Created At
       * @description Timestamp when the beneficiary was created (ISO 8601).
       */
      created_at: string;
      /**
       * Full Name
       * @description The full name of the beneficiary.
       */
      full_name: string;
      /**
       * Id
       * @description Unique identifier for the created beneficiary.
       */
      id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message.
   */
  message?: string;
  /**
   * Status
   * @description Response status, e.g., 'success'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_BULK_VIRTUAL_ACCOUNT_NUMBERS tool input.
 */
type FLUTTERWAVE_CREATE_BULK_VIRTUAL_ACCOUNT_NUMBERS_INPUT = {
  /**
   * Batch Ref
   * @description Unique reference to identify this batch of virtual accounts.
   */
  batch_ref?: string;
  /**
   * Bulk Data
   * @description List of virtual account details for each customer in the batch.
   */
  bulk_data?: {
      /**
       * Amount
       * @description Amount for dynamic virtual account; required if is_permanent is False.
       * @default null
       */
      amount: number | null;
      /**
       * Bvn
       * @description Customer's Bank Verification Number; required if NIN is not provided.
       * @default null
       */
      bvn: string | null;
      /**
       * Email
       * @description Customer's email address.
       */
      email: string;
      /**
       * Firstname
       * @description Customer's first name.
       */
      firstname: string;
      /**
       * Is Permanent
       * @description Set to true for a static (permanent) virtual account.
       */
      is_permanent: boolean;
      /**
       * Lastname
       * @description Customer's last name.
       */
      lastname: string;
      /**
       * Nin
       * @description Customer's National Identification Number; required if BVN is not provided.
       * @default null
       */
      nin: string | null;
  }[];
  /**
   * Narration
   * @description Context or reason for this bulk creation.
   * @default null
   */
  narration: string | null;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_BULK_VIRTUAL_ACCOUNT_NUMBERS tool output.
 */
type FLUTTERWAVE_CREATE_BULK_VIRTUAL_ACCOUNT_NUMBERS_OUTPUT = {
  /**
   * Data
   * @description Details of the bulk virtual account creation request.
   */
  data?: {
      /**
       * Batch Id
       * @description Unique identifier for the created batch.
       */
      batch_id: string;
      /**
       * Response Code
       * @description Code indicating acknowledgment status.
       */
      response_code: string;
      /**
       * Response Message
       * @description Message confirming request processing.
       */
      response_message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Message describing the outcome.
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_PAYMENT_LINK tool input.
 */
type FLUTTERWAVE_CREATE_PAYMENT_LINK_INPUT = {
  /**
   * Amount
   * @description Amount to charge; must be greater than 0
   */
  amount?: number | null;
  /**
   * Currency
   * @description ISO 4217 currency code
   */
  currency?: string;
  /**
   * Customer
   * @description Customer contact information
   */
  customer?: {
      /**
       * Email
       * Format: email
       * @description Customer's email address
       */
      email: string;
      /**
       * Name
       * @description Customer's full name
       * @default null
       */
      name: string | null;
      /**
       * Phonenumber
       * @description Customer's phone number
       * @default null
       */
      phonenumber: string | null;
  };
  /**
   * Customizations
   * @description Optional customization for the payment link.
   * @default null
   */
  customizations: {
      /**
       * Description
       * @description Description of the payment
       * @default null
       */
      description: string | null;
      /**
       * Logo
       * @description URL of the logo to display
       * @default null
       */
      logo: string | null;
      /**
       * Title
       * @description Title for the payment to display
       * @default null
       */
      title: string | null;
  } | null;
  /**
   * Redirect Url
   * @description URL to redirect customer after payment
   */
  redirect_url?: string;
  /**
   * Tx Ref
   * @description Unique transaction reference
   */
  tx_ref?: string;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_PAYMENT_LINK tool output.
 */
type FLUTTERWAVE_CREATE_PAYMENT_LINK_OUTPUT = {
  /**
   * Data
   * @description Contained data for the payment link
   */
  data?: {
      /**
       * Link
       * @description URL of the hosted payment link
       */
      link: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Detailed API response message
   */
  message?: string;
  /**
   * Status
   * @description API response status, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_PAYMENT_PLAN tool input.
 */
type FLUTTERWAVE_CREATE_PAYMENT_PLAN_INPUT = {
  /**
   * Amount
   * @description The amount to charge each billing cycle. If omitted, uses the amount from subscription initiation.
   * @default null
   */
  amount: number | null;
  /**
   * Currency
   * @description Currency code (ISO 4217). Defaults to 'NGN'.
   * @default null
   */
  currency: string | null;
  /**
   * Duration
   * @description The duration in billing cycles. For example, 5 for five months if interval='monthly'. If unset, the plan continues indefinitely.
   * @default null
   */
  duration: number | null;
  /**
   * Interval
   * @description The billing interval; one of 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'quarterly', 'bi-annually', or custom like 'every five months'.
   */
  interval?: string;
  /**
   * Name
   * @description The name of the payment plan. Appears on subscription reminder emails.
   */
  name?: string;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_PAYMENT_PLAN tool output.
 */
type FLUTTERWAVE_CREATE_PAYMENT_PLAN_OUTPUT = {
  /**
   * Data
   * @description Details of the created payment plan.
   */
  data?: {
      /**
       * Amount
       * @description Amount charged per billing cycle.
       */
      amount: number;
      /**
       * Created At
       * @description ISO 8601 timestamp of plan creation.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code of the plan.
       */
      currency: string;
      /**
       * Duration
       * @description Number of billing cycles.
       */
      duration: number | null;
      /**
       * Id
       * @description Unique identifier for the payment plan.
       */
      id: number;
      /**
       * Interval
       * @description Billing interval frequency.
       */
      interval: string;
      /**
       * Name
       * @description Name of the payment plan.
       */
      name: string;
      /**
       * Plan Token
       * @description Token uniquely identifying the plan.
       */
      plan_token: string;
      /**
       * Status
       * @description Current status of the payment plan (e.g., 'active').
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
   * Message
   * @description Message describing the outcome.
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_SUBACCOUNT tool input.
 */
type FLUTTERWAVE_CREATE_SUBACCOUNT_INPUT = {
  /**
   * Account Bank
   * @description Bank ISO code for the subaccount
   */
  account_bank?: string;
  /**
   * Account Number
   * @description Bank account number for the subaccount
   */
  account_number?: string;
  /**
   * Business Contact
   * @description Business contact person name
   * @default null
   */
  business_contact: string | null;
  /**
   * Business Contact Mobile
   * @description Business contact mobile number
   * @default null
   */
  business_contact_mobile: string | null;
  /**
   * Business Email
   * @description Business email address
   * @default null
   */
  business_email: string | null;
  /**
   * Business Mobile
   * @description Primary business contact mobile number
   * @default null
   */
  business_mobile: string | null;
  /**
   * Business Name
   * @description Business name for the subaccount
   */
  business_name?: string;
  /**
   * Country
   * @description Country code for the subaccount
   * @default null
   */
  country: string | null;
  /**
   * Meta
   * @description Additional metadata as list of name/value pairs
   * @default null
   */
  meta: {
      /**
       * Meta Name
       * @description Name of the metadata field
       */
      meta_name: string;
      /**
       * Meta Value
       * @description Value of the metadata field
       */
      meta_value: string;
  }[] | null;
  /**
   * Split Type
   * @description Split type: 'percentage' or 'flat'
   * @enum {string}
   */
  split_type?: "percentage" | "flat";
  /**
   * Split Value
   * @description Numeric split value for disbursement
   */
  split_value?: number;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_SUBACCOUNT tool output.
 */
type FLUTTERWAVE_CREATE_SUBACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Details of the created subaccount
   */
  data?: {
      /**
       * Account Bank
       * @description Bank ISO code for the subaccount
       */
      account_bank: string;
      /**
       * Account Number
       * @description Bank account number for the subaccount
       */
      account_number: string;
      /**
       * Bank Name
       * @description Bank name associated with the subaccount
       */
      bank_name: string;
      /**
       * Created At
       * @description Timestamp when the subaccount was created (ISO 8601)
       */
      created_at: string;
      /**
       * Full Name
       * @description Business or full name for the subaccount
       */
      full_name: string;
      /**
       * Id
       * @description Internal numeric ID of the subaccount
       */
      id: number;
      /**
       * Split Type
       * @description Split type applied
       */
      split_type: string;
      /**
       * Split Value
       * @description Split value applied
       */
      split_value: number;
      /**
       * Subaccount Id
       * @description Unique subaccount identifier
       */
      subaccount_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message
   */
  message?: string;
  /**
   * Status
   * @description Response status ('success' or 'error')
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_VIRTUAL_ACCOUNT tool input.
 */
type FLUTTERWAVE_CREATE_VIRTUAL_ACCOUNT_INPUT = {
  /**
   * Amount
   * @description Exact amount to be collected per transaction; omit to allow any amount.
   * @default null
   */
  amount: number | null;
  /**
   * Bvn
   * @description Customer's Bank Verification Number; required if is_permanent is true.
   * @default null
   */
  bvn: string | null;
  /**
   * Duration
   * @description Number of days before a dynamic account expires.
   * @default null
   */
  duration: number | null;
  /**
   * Email
   * @description Customer's email address.
   */
  email?: string;
  /**
   * Firstname
   * @description Customer's first name.
   * @default null
   */
  firstname: string | null;
  /**
   * Frequency
   * @description Number of times a dynamic account can be used before expiring.
   * @default null
   */
  frequency: number | null;
  /**
   * Is Permanent
   * @description Set to true for a static (permanent) virtual account; defaults to false (dynamic account).
   * @default false
   */
  is_permanent: boolean;
  /**
   * Lastname
   * @description Customer's last name.
   * @default null
   */
  lastname: string | null;
  /**
   * Narration
   * @description Description shown when retrieving account details.
   * @default null
   */
  narration: string | null;
  /**
   * Phonenumber
   * @description Customer's phone number with country code.
   * @default null
   */
  phonenumber: string | null;
  /**
   * Tx Ref
   * @description Merchant's transaction reference to echo with incoming payments.
   * @default null
   */
  tx_ref: string | null;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_CREATE_VIRTUAL_ACCOUNT tool output.
 */
type FLUTTERWAVE_CREATE_VIRTUAL_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Details of the created virtual account.
   */
  data?: {
      /**
       * Account Number
       * @description Generated virtual account number.
       */
      account_number: string;
      /**
       * Amount
       * @description Amount associated with the account; null if not specified.
       * @default null
       */
      amount: number | null;
      /**
       * Bank Name
       * @description Bank name associated with the virtual account.
       */
      bank_name: string;
      /**
       * Created At
       * @description ISO timestamp of account creation.
       */
      created_at: string;
      /**
       * Expiry Date
       * @description Expiry date or 'N/A' for permanent accounts.
       */
      expiry_date: string;
      /**
       * Flw Ref
       * @description Flutterwave reference for the request.
       */
      flw_ref: string;
      /**
       * Frequency
       * @description Usage frequency; 'N/A' for permanent accounts.
       */
      frequency: string | null;
      /**
       * Note
       * @description Additional information or instructions.
       */
      note: string;
      /**
       * Order Ref
       * @description Merchant's order reference.
       */
      order_ref: string;
      /**
       * Response Code
       * @description Code indicating response status.
       */
      response_code: string;
      /**
       * Response Message
       * @description Message describing the response.
       */
      response_message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Message describing the outcome.
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_DELETE_BENEFICIARY tool input.
 */
type FLUTTERWAVE_DELETE_BENEFICIARY_INPUT = {
  /**
   * Id
   * @description Unique identifier of the beneficiary to delete, obtained via the list-all-beneficiaries endpoint.
   */
  id?: number;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_DELETE_BENEFICIARY tool output.
 */
type FLUTTERWAVE_DELETE_BENEFICIARY_OUTPUT = {
  /**
   * Data
   * @description Result of the delete operation, typically 'Deleted'.
   */
  data?: string;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Human-readable message about the request outcome.
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call, e.g., 'success'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_DISABLE_PAYMENT_LINK tool input.
 */
type FLUTTERWAVE_DISABLE_PAYMENT_LINK_INPUT = {
  /**
   * Link
   * @description The full URL of the payment link to disable.
   */
  link?: string;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_DISABLE_PAYMENT_LINK tool output.
 */
type FLUTTERWAVE_DISABLE_PAYMENT_LINK_OUTPUT = {
  /**
   * Data
   * @description True if the link was successfully disabled; null if an error occurred.
   * @default null
   */
  data: boolean | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Message describing the outcome.
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_FETCH_BENEFICIARY tool input.
 */
type FLUTTERWAVE_FETCH_BENEFICIARY_INPUT = {
  /**
   * Id
   * @description Unique identifier of the beneficiary to retrieve
   */
  id?: number;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_FETCH_BENEFICIARY tool output.
 */
type FLUTTERWAVE_FETCH_BENEFICIARY_OUTPUT = {
  /**
   * Data
   * @description Detailed information about the requested beneficiary
   */
  data?: {
      /**
       * Account Number
       * @description Beneficiary's account number
       */
      account_number: string;
      /**
       * Bank Code
       * @description Bank code of the beneficiary's bank
       */
      bank_code: string;
      /**
       * Bank Name
       * @description Name of the beneficiary's bank
       */
      bank_name: string;
      /**
       * Created At
       * @description Timestamp when the beneficiary was created
       */
      created_at: string;
      /**
       * Full Name
       * @description Full name of the beneficiary
       */
      full_name: string;
      /**
       * Id
       * @description Unique identifier of the beneficiary
       */
      id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Description of the API response
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call, e.g., success or error
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_FETCH_SUBACCOUNT tool input.
 */
type FLUTTERWAVE_FETCH_SUBACCOUNT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the subaccount to retrieve
   */
  id?: string;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_FETCH_SUBACCOUNT tool output.
 */
type FLUTTERWAVE_FETCH_SUBACCOUNT_OUTPUT = {
  /**
   * Data
   * @description The subaccount details returned by the API
   */
  data?: {
      /**
       * Account Bank
       * @description Bank code of the subaccount's bank
       */
      account_bank: string;
      /**
       * Account Number
       * @description Bank account number associated with the subaccount
       */
      account_number: string;
      /**
       * Bank Name
       * @description Name of the bank associated with the subaccount
       */
      bank_name: string;
      /**
       * Business Contact
       * @description Name of the contact person for the business
       * @default null
       */
      business_contact: string | null;
      /**
       * Business Contact Mobile
       * @description Mobile number of the business contact person
       * @default null
       */
      business_contact_mobile: string | null;
      /**
       * Business Email
       * @description Email address of the business owner
       * @default null
       */
      business_email: string | null;
      /**
       * Business Mobile
       * @description Mobile number of the business owner
       * @default null
       */
      business_mobile: string | null;
      /**
       * Business Name
       * @description Business name of the subaccount owner
       */
      business_name: string;
      /**
       * Country
       * @description Country code where the subaccount is registered
       */
      country: string;
      /**
       * Id
       * @description The unique numeric ID of the subaccount
       */
      id: number;
      /**
       * Split Type
       * @description Type of split applied to the subaccount, either percentage or flat
       * @enum {string}
       */
      split_type: "percentage" | "flat";
      /**
       * Split Value
       * @description Value of the split applied to the subaccount
       */
      split_value: number;
      /**
       * Subaccount Id
       * @description Unique alphanumeric subaccount identifier
       */
      subaccount_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional information about the API response
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Status of the API request, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GENERATE_TRANSACTION_REFERENCE tool input.
 */
type FLUTTERWAVE_GENERATE_TRANSACTION_REFERENCE_INPUT = object;

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GENERATE_TRANSACTION_REFERENCE tool output.
 */
type FLUTTERWAVE_GENERATE_TRANSACTION_REFERENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tx Ref
       * @description Unique transaction reference prefixed with 'tx_' plus a UUID4 string
       */
      tx_ref: string;
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
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_ALL_SUBSCRIPTIONS tool input.
 */
type FLUTTERWAVE_GET_ALL_SUBSCRIPTIONS_INPUT = object;

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_ALL_SUBSCRIPTIONS tool output.
 */
type FLUTTERWAVE_GET_ALL_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description List of all subscription records
   */
  data?: {
      /**
       * Amount
       * @description Subscription amount in the smallest currency unit
       */
      amount: number;
      /**
       * Created At
       * @description ISO 8601 timestamp when the subscription was created
       */
      created_at: string;
      /**
       * Customer
       * @description Customer details for this subscription
       */
      customer: {
          /**
           * Customer Email
           * @description Customer's email address
           */
          customer_email: string;
          /**
           * Id
           * @description Unique customer identifier
           */
          id: number;
      };
      /**
       * Id
       * @description Subscription ID
       */
      id: number;
      /**
       * Plan
       * @description Plan ID associated with this subscription
       */
      plan: number;
      /**
       * Status
       * @description Subscription status (e.g., 'active', 'cancelled')
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
   * Message
   * @description Descriptive outcome message
   */
  message?: string;
  /**
   * Status
   * @description Request status
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_ALL_TRANSACTIONS tool input.
 */
type FLUTTERWAVE_GET_ALL_TRANSACTIONS_INPUT = {
  /**
   * Currency
   * @description Filter transactions by currency (e.g., 'NGN', 'USD')
   * @default null
   */
  currency: string | null;
  /**
   * Customer Email
   * Format: email
   * @description Filter transactions by customer email
   */
  customer_email?: unknown;
  /**
   * From Date
   * Format: date
   * @description Start date for fetching transactions (YYYY-MM-DD)
   */
  from_date?: unknown;
  /**
   * Page
   * @description Page number to fetch (>= 1)
   * @default null
   */
  page: number | null;
  /**
   * Status
   * @description Filter transactions by status ('successful' or 'failed')
   * @default null
   * @enum {string|null}
   */
  status: "successful" | "failed" | null;
  /**
   * To Date
   * Format: date
   * @description End date for fetching transactions (YYYY-MM-DD)
   */
  to_date?: unknown;
  /**
   * Tx Ref
   * @description Filter transactions by transaction reference
   * @default null
   */
  tx_ref: string | null;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_ALL_TRANSACTIONS tool output.
 */
type FLUTTERWAVE_GET_ALL_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description List of transaction objects
   */
  data?: {
      /**
       * Account Id
       * @description Account identifier associated with the transaction
       * @default null
       */
      account_id: number | null;
      /**
       * Amount
       * @description Amount involved in the transaction
       */
      amount: number;
      /**
       * App Fee
       * @description Application fee charged
       */
      app_fee: number;
      /**
       * Auth Model
       * @description Authentication model used
       * @default null
       */
      auth_model: string | null;
      /**
       * Charged Amount
       * @description Amount charged to the customer
       */
      charged_amount: number;
      /**
       * Created At
       * @description Timestamp when the transaction was created
       */
      created_at: string;
      /**
       * Currency
       * @description Currency of the transaction
       */
      currency: string;
      /**
       * Device Fingerprint
       * @description Device fingerprint used during the transaction
       * @default null
       */
      device_fingerprint: string | null;
      /**
       * Flw Ref
       * @description Flutterwave reference for the transaction
       */
      flw_ref: string;
      /**
       * Id
       * @description Unique transaction identifier
       */
      id: number;
      /**
       * Ip
       * @description IP address of the customer
       * @default null
       */
      ip: string | null;
      /**
       * Merchant Fee
       * @description Merchant fee charged
       */
      merchant_fee: number;
      /**
       * Narration
       * @description Narration for the transaction
       * @default null
       */
      narration: string | null;
      /**
       * Payment Type
       * @description Type of payment (e.g., 'card', 'bank transfer')
       * @default null
       */
      payment_type: string | null;
      /**
       * Processor Response
       * @description Response from the payment processor
       * @default null
       */
      processor_response: string | null;
      /**
       * Status
       * @description Status of the transaction
       */
      status: string;
      /**
       * Tx Ref
       * @description Transaction reference provided during initiation
       */
      tx_ref: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Describes the outcome of the API call
   */
  message?: string;
  /**
   * Meta
   * @description Contains pagination information
   */
  meta?: {
      /**
       * Page Info
       * @description Pagination details
       */
      page_info: {
          /**
           * Current Page
           * @description Current page number
           */
          current_page: number;
          /**
           * Total
           * @description Total number of transactions
           */
          total: number;
          /**
           * Total Pages
           * @description Total number of pages
           */
          total_pages: number;
      };
  };
  /**
   * Status
   * @description Indicates status of the API call (e.g., 'success', 'error')
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_ALL_WALLET_BALANCES tool input.
 */
type FLUTTERWAVE_GET_ALL_WALLET_BALANCES_INPUT = object;

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_ALL_WALLET_BALANCES tool output.
 */
type FLUTTERWAVE_GET_ALL_WALLET_BALANCES_OUTPUT = {
  /**
   * Data
   * @description List of wallet balances by currency
   */
  data?: {
      /**
       * Available Balance
       * @description Available balance in this currency
       */
      available_balance: number;
      /**
       * Currency
       * @description ISO currency code of the wallet balance, e.g., 'NGN'
       */
      currency: string;
      /**
       * Ledger Balance
       * @description Ledger balance in this currency
       */
      ledger_balance: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Message describing the result
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_BALANCES_PER_CURRENCY tool input.
 */
type FLUTTERWAVE_GET_BALANCES_PER_CURRENCY_INPUT = {
  /**
   * Currency
   * @description Three-letter ISO currency code of the wallet, e.g., 'NGN', 'USD'
   */
  currency?: string;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_BALANCES_PER_CURRENCY tool output.
 */
type FLUTTERWAVE_GET_BALANCES_PER_CURRENCY_OUTPUT = {
  /**
   * Data
   * @description Wallet balance data for the specified currency
   */
  data?: {
      /**
       * Available Balance
       * @description Available balance in the wallet
       */
      available_balance: number;
      /**
       * Currency
       * @description Currency code of the wallet
       */
      currency: string;
      /**
       * Ledger Balance
       * @description Ledger (book) balance in the wallet
       */
      ledger_balance: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Message returned by the API
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_BILL_CATEGORIES tool input.
 */
type FLUTTERWAVE_GET_BILL_CATEGORIES_INPUT = object;

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_BILL_CATEGORIES tool output.
 */
type FLUTTERWAVE_GET_BILL_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description List of bill categories.
   */
  data?: {
      /**
       * Biller Code
       * @description Code associated with the biller.
       */
      biller_code: string;
      /**
       * Biller Name
       * @description Name of the biller.
       */
      biller_name: string;
      /**
       * Country
       * @description Country where the biller operates.
       */
      country: string;
      /**
       * Id
       * @description Unique identifier for the bill category.
       */
      id: number;
      /**
       * Is Airtime
       * @description Indicates if the category is for airtime.
       */
      is_airtime: boolean;
      /**
       * Name
       * @description Name of the bill category.
       */
      name: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Message accompanying the response.
   */
  message?: string;
  /**
   * Status
   * @description Status of the request.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_MULTIPLE_REFUND_TRANSACTIONS tool input.
 */
type FLUTTERWAVE_GET_MULTIPLE_REFUND_TRANSACTIONS_INPUT = {
  /**
   * Flw Ref
   * @description Filter refunds by Flutterwave reference
   * @default null
   */
  flw_ref: string | null;
  /**
   * From Date
   * Format: date
   * @description Start date for filtering refunds (YYYY-MM-DD)
   */
  from_date?: unknown;
  /**
   * Page
   * @description Page number for pagination (>= 1)
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of records per page (>= 1)
   * @default null
   */
  page_size: number | null;
  /**
   * Status
   * @description Filter refunds by status ('completed' or 'pending')
   * @default null
   * @enum {string|null}
   */
  status: "completed" | "pending" | null;
  /**
   * To Date
   * Format: date
   * @description End date for filtering refunds (YYYY-MM-DD)
   */
  to_date?: unknown;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_MULTIPLE_REFUND_TRANSACTIONS tool output.
 */
type FLUTTERWAVE_GET_MULTIPLE_REFUND_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description List of refund transactions
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the refund
       */
      account_id: number;
      /**
       * Amount Refunded
       * @description Amount refunded
       */
      amount_refunded: number;
      /**
       * Comment
       * @description Comment associated with the refund
       * @default null
       */
      comment: string | null;
      /**
       * Created At
       * @description Timestamp when the refund was created
       */
      created_at: string;
      /**
       * Flw Ref
       * @description Flutterwave reference for the refund
       */
      flw_ref: string;
      /**
       * Id
       * @description Unique identifier of the refund
       */
      id: number;
      /**
       * Meta
       * @description Metadata associated with the refund
       * @default null
       */
      meta: {
          [key: string]: unknown;
      } | null;
      /**
       * Settlement Id
       * @description Settlement identifier
       * @default null
       */
      settlement_id: string | null;
      /**
       * Status
       * @description Status of the refund
       */
      status: string;
      /**
       * Transaction Id
       * @description Transaction ID associated with the refund
       */
      transaction_id: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Message describing the API response
   */
  message?: string;
  /**
   * Meta
   * @description Contains pagination details
   */
  meta?: {
      /**
       * Page Info
       * @description Pagination information
       */
      page_info: {
          /**
           * Current Page
           * @description Current page number
           */
          current_page: number;
          /**
           * Page Size
           * @description Number of records per page
           */
          page_size: number;
          /**
           * Total
           * @description Total number of refunds
           */
          total: number;
          /**
           * Total Pages
           * @description Total number of pages
           */
          total_pages: number;
      };
  };
  /**
   * Status
   * @description Status of the API response, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_PAYMENT_PLANS tool input.
 */
type FLUTTERWAVE_GET_PAYMENT_PLANS_INPUT = object;

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_PAYMENT_PLANS tool output.
 */
type FLUTTERWAVE_GET_PAYMENT_PLANS_OUTPUT = {
  /**
   * Data
   * @description List of payment plans available on the account
   */
  data?: {
      /**
       * Amount
       * @description Amount to be charged each billing cycle
       */
      amount: number;
      /**
       * Created At
       * @description ISO 8601 timestamp of plan creation
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code for the plan amount
       */
      currency: string;
      /**
       * Duration
       * @description Number of billing cycles for the plan
       */
      duration: number;
      /**
       * Id
       * @description Unique identifier for the payment plan
       */
      id: number;
      /**
       * Interval
       * @description Billing interval frequency (e.g., 'daily', 'weekly', 'monthly')
       */
      interval: string;
      /**
       * Name
       * @description Name of the payment plan
       */
      name: string;
      /**
       * Plan Token
       * @description Token uniquely identifying the plan
       */
      plan_token: string;
      /**
       * Status
       * @description Current status of the plan (e.g., 'active', 'inactive')
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
   * Message
   * @description Detailed message on the request outcome
   */
  message?: string;
  /**
   * Status
   * @description Indicates whether the request was successful
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_TRANSACTION tool input.
 */
type FLUTTERWAVE_GET_TRANSACTION_INPUT = {
  /**
   * Id
   * @description Unique identifier of the transaction to retrieve
   */
  id?: number;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_TRANSACTION tool output.
 */
type FLUTTERWAVE_GET_TRANSACTION_OUTPUT = {
  /**
   * Data
   * @description Detailed information about the requested transaction
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the transaction
       */
      account_id: number;
      /**
       * Amount
       * @description Amount of the transaction
       */
      amount: number;
      /**
       * Amount Settled
       * @description Net amount settled after fees
       */
      amount_settled: number;
      /**
       * App Fee
       * @description Application fee charged
       */
      app_fee: number;
      /**
       * Auth Model
       * @description Authentication model used for the transaction
       */
      auth_model: string;
      /**
       * CardInfo
       * @description Details of the card used in the transaction.
       * @default null
       */
      card: {
          /**
           * Country
           * @description Issuing country of the card
           */
          country: string;
          /**
           * Expiry
           * @description Expiry date of the card in MM/YY format
           */
          expiry: string;
          /**
           * First 6Digits
           * @description First six digits of the card used
           */
          first_6digits: string;
          /**
           * Issuer
           * @description Card issuer name
           */
          issuer: string;
          /**
           * Last 4Digits
           * @description Last four digits of the card used
           */
          last_4digits: string;
          /**
           * Token
           * @description Card token assigned by Flutterwave
           */
          token: string;
          /**
           * Type
           * @description Card type, e.g., MASTERCARD or VISA
           */
          type: string;
      } | null;
      /**
       * Charged Amount
       * @description Amount charged in the transaction
       */
      charged_amount: number;
      /**
       * Created At
       * @description Timestamp when the transaction was created
       */
      created_at: string;
      /**
       * Currency
       * @description Currency of the transaction
       */
      currency: string;
      /**
       * CustomerInfo
       * @description Details of the customer who initiated the transaction.
       * @default null
       */
      customer: {
          /**
           * Created At
           * @description Timestamp when the customer was created
           */
          created_at: string;
          /**
           * Email
           * @description Customer email address
           */
          email: string;
          /**
           * Id
           * @description Unique customer ID
           */
          id: number;
          /**
           * Name
           * @description Customer full name
           */
          name: string;
          /**
           * Phone Number
           * @description Customer phone number
           */
          phone_number: string;
      } | null;
      /**
       * Device Fingerprint
       * @description Device fingerprint used during the transaction
       */
      device_fingerprint: string;
      /**
       * Flw Ref
       * @description Flutterwave transaction reference
       */
      flw_ref: string;
      /**
       * Id
       * @description Transaction ID
       */
      id: number;
      /**
       * Ip
       * @description IP address of the customer
       */
      ip: string;
      /**
       * Merchant Fee
       * @description Merchant fee deducted
       */
      merchant_fee: number;
      /**
       * Narration
       * @description Description or narration provided for the transaction
       */
      narration: string;
      /**
       * Payment Type
       * @description Payment type used, e.g., card, account
       */
      payment_type: string;
      /**
       * Processor Response
       * @description Response message from the payment processor
       */
      processor_response: string;
      /**
       * Status
       * @description Status of the transaction, e.g., successful
       */
      status: string;
      /**
       * Tx Ref
       * @description Merchant's transaction reference
       */
      tx_ref: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Description of the API response
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call, e.g., success or error
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_TRANSACTION_FEE tool input.
 */
type FLUTTERWAVE_GET_TRANSACTION_FEE_INPUT = {
  /**
   * Amount
   * @description The amount to be charged from the customer (must be non-negative)
   */
  amount?: number;
  /**
   * Currency
   * @description Currency code in ISO 4217 format, e.g., NGN or USD
   */
  currency?: string;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_TRANSACTION_FEE tool output.
 */
type FLUTTERWAVE_GET_TRANSACTION_FEE_OUTPUT = {
  /**
   * Data
   * @description Detailed fee information for the transaction
   */
  data?: {
      /**
       * Charge Amount
       * @description Total amount to be charged including fees
       */
      charge_amount: number;
      /**
       * Currency
       * @description Currency of the transaction
       */
      currency: string;
      /**
       * Fee
       * @description Total fee for the transaction
       */
      fee: number;
      /**
       * Flutterwave Fee
       * @description Fee charged by Flutterwave
       */
      flutterwave_fee: number;
      /**
       * Merchant Fee
       * @description Fee charged by the merchant
       */
      merchant_fee: number;
      /**
       * Stamp Duty Fee
       * @description Stamp duty fee, if applicable
       */
      stamp_duty_fee: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Description of the API response
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call, e.g., success or error
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_TRANSFER_FEE tool input.
 */
type FLUTTERWAVE_GET_TRANSFER_FEE_INPUT = {
  /**
   * Amount
   * @description The amount to be transferred. Must be a positive integer.
   */
  amount?: number;
  /**
   * Currency
   * @description ISO 4217 currency code for the transfer (e.g., 'NGN', 'USD').
   * @default null
   */
  currency: string | null;
  /**
   * Type
   * @description Type of transfer: 'account', 'mobilemoney', or 'barter'.
   * @default null
   * @enum {string|null}
   */
  type: "account" | "mobilemoney" | "barter" | null;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_GET_TRANSFER_FEE tool output.
 */
type FLUTTERWAVE_GET_TRANSFER_FEE_OUTPUT = {
  /**
   * Data
   * @description List of fee details.
   */
  data?: {
      /**
       * Currency
       * @description Currency of the fee.
       */
      currency: string;
      /**
       * Fee
       * @description Fee amount.
       */
      fee: number;
      /**
       * Fee Type
       * @description Type of fee (e.g., 'value').
       */
      fee_type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Description of the API response.
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call (e.g., 'success').
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_INITIATE_MOBILE_MONEY_TANZANIA tool input.
 */
type FLUTTERWAVE_INITIATE_MOBILE_MONEY_TANZANIA_INPUT = {
  /**
   * Amount
   * @description Amount to charge; must be greater than 0
   */
  amount?: number;
  /**
   * Client Ip
   * @description Customer's IP address
   * @default null
   */
  client_ip: string | null;
  /**
   * Currency
   * @description Currency code in ISO 4217 format; must be 'TZS'
   */
  currency?: string;
  /**
   * Device Fingerprint
   * @description Device fingerprint for enhanced fraud detection
   * @default null
   */
  device_fingerprint: string | null;
  /**
   * Email
   * Format: email
   * @description Customer's email address
   */
  email?: string;
  /**
   * Fullname
   * @description Customer's full name
   * @default null
   */
  fullname: string | null;
  /**
   * Meta
   * @description Additional custom metadata as key/value pairs
   * @default null
   */
  meta: {
      [key: string]: string;
  } | null;
  /**
   * Network
   * @description Mobile money network, e.g., 'Halopesa'
   * @default null
   */
  network: string | null;
  /**
   * Phone Number
   * @description Customer's mobile number in international format (e.g., +255712345678)
   */
  phone_number?: string;
  /**
   * Tx Ref
   * @description Unique transaction reference for this payment
   */
  tx_ref?: string;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_INITIATE_MOBILE_MONEY_TANZANIA tool output.
 */
type FLUTTERWAVE_INITIATE_MOBILE_MONEY_TANZANIA_OUTPUT = {
  /**
   * Data
   * @description Detailed data of the mobile money transaction
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with transaction
       * @default null
       */
      account_id: number | null;
      /**
       * Amount
       * @description Transaction amount requested
       */
      amount: number;
      /**
       * App Fee
       * @description Application fee charged
       */
      app_fee: number;
      /**
       * Auth Model
       * @description Authorization model used
       */
      auth_model: string;
      /**
       * Charge Type
       * @description Type of charge
       */
      charge_type: string;
      /**
       * Charged Amount
       * @description Actual amount charged
       */
      charged_amount: number;
      /**
       * Created At
       * @description Transaction creation timestamp
       */
      created_at: string;
      /**
       * Currency
       * @description Currency of the transaction
       */
      currency: string;
      /**
       * Customer
       * @description Customer details
       */
      customer: {
          /**
           * Created At
           * @description Customer creation timestamp
           */
          created_at: string;
          /**
           * Email
           * @description Customer's email address
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique customer ID
           */
          id: number;
          /**
           * Name
           * @description Customer's name
           * @default null
           */
          name: string | null;
          /**
           * Phone Number
           * @description Customer's phone number
           * @default null
           */
          phone_number: string | null;
      };
      /**
       * Device Fingerprint
       * @description Device fingerprint used
       * @default null
       */
      device_fingerprint: string | null;
      /**
       * Flw Ref
       * @description Flutterwave's transaction reference
       */
      flw_ref: string;
      /**
       * Fraud Status
       * @description Fraud status of the charge
       */
      fraud_status: string;
      /**
       * Id
       * @description Transaction ID
       */
      id: number;
      /**
       * Ip
       * @description Customer IP address
       * @default null
       */
      ip: string | null;
      /**
       * Merchant Fee
       * @description Merchant fee deducted
       */
      merchant_fee: number;
      /**
       * Narration
       * @description Transaction narration
       * @default null
       */
      narration: string | null;
      /**
       * Payment Type
       * @description Type of payment used
       */
      payment_type: string;
      /**
       * Processor Response
       * @description Processor response message
       */
      processor_response: string;
      /**
       * Status
       * @description Transaction status
       */
      status: string;
      /**
       * Tx Ref
       * @description Merchant's transaction reference
       */
      tx_ref: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Server response message
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_LIST_ALL_BENEFICIARIES tool input.
 */
type FLUTTERWAVE_LIST_ALL_BENEFICIARIES_INPUT = object;

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_LIST_ALL_BENEFICIARIES tool output.
 */
type FLUTTERWAVE_LIST_ALL_BENEFICIARIES_OUTPUT = {
  /**
   * Data
   * @description List of beneficiary objects
   */
  data?: {
      /**
       * Account Number
       * @description Beneficiary's account number
       */
      account_number: string;
      /**
       * Bank Code
       * @description Bank code of the beneficiary's bank
       */
      bank_code: string;
      /**
       * Bank Name
       * @description Name of the beneficiary's bank
       */
      bank_name: string;
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Full Name
       * @description Full name of the beneficiary
       */
      full_name: string;
      /**
       * Id
       * @description Unique identifier for the beneficiary
       */
      id: number;
      /**
       * Meta
       * @description Additional metadata; can be null
       * @default null
       */
      meta: {
          [key: string]: unknown;
      } | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Descriptive message of the result
   */
  message?: string;
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page Info
       * @description Pagination details
       */
      page_info: {
          /**
           * Current Page
           * @description Current page number
           */
          current_page: number;
          /**
           * Total
           * @description Total number of beneficiaries
           */
          total: number;
          /**
           * Total Pages
           * @description Total number of pages
           */
          total_pages: number;
      };
  };
  /**
   * Status
   * @description Status of the response (e.g., 'success')
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_VIEW_TRANSACTION_TIMELINE tool input.
 */
type FLUTTERWAVE_VIEW_TRANSACTION_TIMELINE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the transaction to retrieve its event timeline (>=1).
   */
  id?: number;
};

/**
 * Type of FLUTTERWAVE's FLUTTERWAVE_VIEW_TRANSACTION_TIMELINE tool output.
 */
type FLUTTERWAVE_VIEW_TRANSACTION_TIMELINE_OUTPUT = {
  /**
   * Data
   * @description List of events associated with the transaction timeline.
   */
  data?: {
      /**
       * Event
       * @description Description or name of the event.
       */
      event: string;
      /**
       * Time
       * @description Timestamp of the event in ISO 8601 format.
       */
      time: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Human-readable message about the API response.
   */
  message?: string;
  /**
   * Status
   * @description Status of the API call (e.g., 'success').
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "FLUTTERWAVE".
 */
export type FLUTTERWAVE_TOOL_INPUTS = {
  CREATE_BENEFICIARY: FLUTTERWAVE_CREATE_BENEFICIARY_INPUT
  CREATE_BULK_VIRTUAL_ACCOUNT_NUMBERS: FLUTTERWAVE_CREATE_BULK_VIRTUAL_ACCOUNT_NUMBERS_INPUT
  CREATE_PAYMENT_LINK: FLUTTERWAVE_CREATE_PAYMENT_LINK_INPUT
  CREATE_PAYMENT_PLAN: FLUTTERWAVE_CREATE_PAYMENT_PLAN_INPUT
  CREATE_SUBACCOUNT: FLUTTERWAVE_CREATE_SUBACCOUNT_INPUT
  CREATE_VIRTUAL_ACCOUNT: FLUTTERWAVE_CREATE_VIRTUAL_ACCOUNT_INPUT
  DELETE_BENEFICIARY: FLUTTERWAVE_DELETE_BENEFICIARY_INPUT
  DISABLE_PAYMENT_LINK: FLUTTERWAVE_DISABLE_PAYMENT_LINK_INPUT
  FETCH_BENEFICIARY: FLUTTERWAVE_FETCH_BENEFICIARY_INPUT
  FETCH_SUBACCOUNT: FLUTTERWAVE_FETCH_SUBACCOUNT_INPUT
  GENERATE_TRANSACTION_REFERENCE: FLUTTERWAVE_GENERATE_TRANSACTION_REFERENCE_INPUT
  GET_ALL_SUBSCRIPTIONS: FLUTTERWAVE_GET_ALL_SUBSCRIPTIONS_INPUT
  GET_ALL_TRANSACTIONS: FLUTTERWAVE_GET_ALL_TRANSACTIONS_INPUT
  GET_ALL_WALLET_BALANCES: FLUTTERWAVE_GET_ALL_WALLET_BALANCES_INPUT
  GET_BALANCES_PER_CURRENCY: FLUTTERWAVE_GET_BALANCES_PER_CURRENCY_INPUT
  GET_BILL_CATEGORIES: FLUTTERWAVE_GET_BILL_CATEGORIES_INPUT
  GET_MULTIPLE_REFUND_TRANSACTIONS: FLUTTERWAVE_GET_MULTIPLE_REFUND_TRANSACTIONS_INPUT
  GET_PAYMENT_PLANS: FLUTTERWAVE_GET_PAYMENT_PLANS_INPUT
  GET_TRANSACTION: FLUTTERWAVE_GET_TRANSACTION_INPUT
  GET_TRANSACTION_FEE: FLUTTERWAVE_GET_TRANSACTION_FEE_INPUT
  GET_TRANSFER_FEE: FLUTTERWAVE_GET_TRANSFER_FEE_INPUT
  INITIATE_MOBILE_MONEY_TANZANIA: FLUTTERWAVE_INITIATE_MOBILE_MONEY_TANZANIA_INPUT
  LIST_ALL_BENEFICIARIES: FLUTTERWAVE_LIST_ALL_BENEFICIARIES_INPUT
  VIEW_TRANSACTION_TIMELINE: FLUTTERWAVE_VIEW_TRANSACTION_TIMELINE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FLUTTERWAVE".
 */
export type FLUTTERWAVE_TOOL_OUTPUTS = {
  CREATE_BENEFICIARY: FLUTTERWAVE_CREATE_BENEFICIARY_OUTPUT
  CREATE_BULK_VIRTUAL_ACCOUNT_NUMBERS: FLUTTERWAVE_CREATE_BULK_VIRTUAL_ACCOUNT_NUMBERS_OUTPUT
  CREATE_PAYMENT_LINK: FLUTTERWAVE_CREATE_PAYMENT_LINK_OUTPUT
  CREATE_PAYMENT_PLAN: FLUTTERWAVE_CREATE_PAYMENT_PLAN_OUTPUT
  CREATE_SUBACCOUNT: FLUTTERWAVE_CREATE_SUBACCOUNT_OUTPUT
  CREATE_VIRTUAL_ACCOUNT: FLUTTERWAVE_CREATE_VIRTUAL_ACCOUNT_OUTPUT
  DELETE_BENEFICIARY: FLUTTERWAVE_DELETE_BENEFICIARY_OUTPUT
  DISABLE_PAYMENT_LINK: FLUTTERWAVE_DISABLE_PAYMENT_LINK_OUTPUT
  FETCH_BENEFICIARY: FLUTTERWAVE_FETCH_BENEFICIARY_OUTPUT
  FETCH_SUBACCOUNT: FLUTTERWAVE_FETCH_SUBACCOUNT_OUTPUT
  GENERATE_TRANSACTION_REFERENCE: FLUTTERWAVE_GENERATE_TRANSACTION_REFERENCE_OUTPUT
  GET_ALL_SUBSCRIPTIONS: FLUTTERWAVE_GET_ALL_SUBSCRIPTIONS_OUTPUT
  GET_ALL_TRANSACTIONS: FLUTTERWAVE_GET_ALL_TRANSACTIONS_OUTPUT
  GET_ALL_WALLET_BALANCES: FLUTTERWAVE_GET_ALL_WALLET_BALANCES_OUTPUT
  GET_BALANCES_PER_CURRENCY: FLUTTERWAVE_GET_BALANCES_PER_CURRENCY_OUTPUT
  GET_BILL_CATEGORIES: FLUTTERWAVE_GET_BILL_CATEGORIES_OUTPUT
  GET_MULTIPLE_REFUND_TRANSACTIONS: FLUTTERWAVE_GET_MULTIPLE_REFUND_TRANSACTIONS_OUTPUT
  GET_PAYMENT_PLANS: FLUTTERWAVE_GET_PAYMENT_PLANS_OUTPUT
  GET_TRANSACTION: FLUTTERWAVE_GET_TRANSACTION_OUTPUT
  GET_TRANSACTION_FEE: FLUTTERWAVE_GET_TRANSACTION_FEE_OUTPUT
  GET_TRANSFER_FEE: FLUTTERWAVE_GET_TRANSFER_FEE_OUTPUT
  INITIATE_MOBILE_MONEY_TANZANIA: FLUTTERWAVE_INITIATE_MOBILE_MONEY_TANZANIA_OUTPUT
  LIST_ALL_BENEFICIARIES: FLUTTERWAVE_LIST_ALL_BENEFICIARIES_OUTPUT
  VIEW_TRANSACTION_TIMELINE: FLUTTERWAVE_VIEW_TRANSACTION_TIMELINE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FLUTTERWAVE toolkit.
 */
export const FLUTTERWAVE = {
  slug: "flutterwave",
  tools: {
    /**
     * Tool to create a new transfer beneficiary. use when you need to add a beneficiary before making a transfer.
     */
    CREATE_BENEFICIARY: "FLUTTERWAVE_CREATE_BENEFICIARY",
    /**
     * Tool to create multiple virtual account numbers. use when you need to generate multiple static virtual accounts for customers in a single request.
     */
    CREATE_BULK_VIRTUAL_ACCOUNT_NUMBERS: "FLUTTERWAVE_CREATE_BULK_VIRTUAL_ACCOUNT_NUMBERS",
    /**
     * Tool to create a hosted payment link. use when you need a shareable payment url for one-time transactions.
     */
    CREATE_PAYMENT_LINK: "FLUTTERWAVE_CREATE_PAYMENT_LINK",
    /**
     * Tool to create a new payment plan. use after confirming plan and customer details.
     */
    CREATE_PAYMENT_PLAN: "FLUTTERWAVE_CREATE_PAYMENT_PLAN",
    /**
     * Tool to create a new subaccount. use when you need to configure split disbursement accounts.
     */
    CREATE_SUBACCOUNT: "FLUTTERWAVE_CREATE_SUBACCOUNT",
    /**
     * Tool to create a new virtual account number. use after confirming customer details when assigning a unique account for bank transfers.
     */
    CREATE_VIRTUAL_ACCOUNT: "FLUTTERWAVE_CREATE_VIRTUAL_ACCOUNT",
    /**
     * Tool to delete a beneficiary by id. use when you need to remove a saved transfer beneficiary by its unique id after confirming the id.
     */
    DELETE_BENEFICIARY: "FLUTTERWAVE_DELETE_BENEFICIARY",
    /**
     * Tool to disable a flutterwave payment link. use when you need to prevent further payments from an existing link after confirming the link is valid.
     */
    DISABLE_PAYMENT_LINK: "FLUTTERWAVE_DISABLE_PAYMENT_LINK",
    /**
     * Tool to retrieve details of a specific beneficiary by id. use after obtaining a beneficiary id to fetch its full details from flutterwave.
     */
    FETCH_BENEFICIARY: "FLUTTERWAVE_FETCH_BENEFICIARY",
    /**
     * Tool to retrieve details of a specific subaccount by id. use when you need full subaccount info after creating or updating splits.
     */
    FETCH_SUBACCOUNT: "FLUTTERWAVE_FETCH_SUBACCOUNT",
    /**
     * Tool to generate a unique transaction reference. use when initiating a new flutterwave transaction requires a unique reference to prevent duplication.
     */
    GENERATE_TRANSACTION_REFERENCE: "FLUTTERWAVE_GENERATE_TRANSACTION_REFERENCE",
    /**
     * Tool to retrieve all subscriptions, including cancelled ones. use when you need a comprehensive list of subscription records for auditing or reporting.
     */
    GET_ALL_SUBSCRIPTIONS: "FLUTTERWAVE_GET_ALL_SUBSCRIPTIONS",
    /**
     * Tool to retrieve a list of all transactions with optional filters. use when you need to paginate or filter transaction history after confirming valid api credentials.
     */
    GET_ALL_TRANSACTIONS: "FLUTTERWAVE_GET_ALL_TRANSACTIONS",
    /**
     * Tool to retrieve all wallet balances across currencies. use when reconciling balances after authentication.
     */
    GET_ALL_WALLET_BALANCES: "FLUTTERWAVE_GET_ALL_WALLET_BALANCES",
    /**
     * Tool to retrieve wallet balance for a specific currency. use after transactions to confirm available and ledger balances in a given currency.
     */
    GET_BALANCES_PER_CURRENCY: "FLUTTERWAVE_GET_BALANCES_PER_CURRENCY",
    /**
     * Tool to retrieve available bill categories. use after authenticating to flutterwave to display bill payment options to users.
     */
    GET_BILL_CATEGORIES: "FLUTTERWAVE_GET_BILL_CATEGORIES",
    /**
     * Tool to retrieve multiple refund transactions with optional filters. use when you need to fetch paginated refund data after confirming valid api credentials.
     */
    GET_MULTIPLE_REFUND_TRANSACTIONS: "FLUTTERWAVE_GET_MULTIPLE_REFUND_TRANSACTIONS",
    /**
     * Tool to retrieve a list of all payment plans. use when you need to fetch and present your account’s configured billing plans.
     */
    GET_PAYMENT_PLANS: "FLUTTERWAVE_GET_PAYMENT_PLANS",
    /**
     * Tool to retrieve details of a specific transaction by id. use after obtaining the transaction id to fetch its details from flutterwave.
     */
    GET_TRANSACTION: "FLUTTERWAVE_GET_TRANSACTION",
    /**
     * Tool to retrieve the fee for a specific transaction. use when you need to calculate the total charge including fees before initiating the transaction.
     */
    GET_TRANSACTION_FEE: "FLUTTERWAVE_GET_TRANSACTION_FEE",
    /**
     * Tool to retrieve the fee for initiating a transfer. use when you need to estimate transfer costs before creating a transfer. example: "calculate the fee for transferring ngn 5000 to an account."
     */
    GET_TRANSFER_FEE: "FLUTTERWAVE_GET_TRANSFER_FEE",
    /**
     * Tool to initiate a mobile money payment in tanzania. use after collecting customer details to charge via tanzanian mobile money networks.
     */
    INITIATE_MOBILE_MONEY_TANZANIA: "FLUTTERWAVE_INITIATE_MOBILE_MONEY_TANZANIA",
    /**
     * Tool to list all saved beneficiaries. use when you need to retrieve all transfer beneficiaries associated with your account.
     */
    LIST_ALL_BENEFICIARIES: "FLUTTERWAVE_LIST_ALL_BENEFICIARIES",
    /**
     * Tool to retrieve the event timeline for a transaction. use after obtaining the transaction id to audit or track the sequence of events.
     */
    VIEW_TRANSACTION_TIMELINE: "FLUTTERWAVE_VIEW_TRANSACTION_TIMELINE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FLUTTERWAVE".
 */
export type FLUTTERWAVE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FLUTTERWAVE".
 */
export type FLUTTERWAVE_TRIGGER_EVENTS = {}
