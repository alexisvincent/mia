// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_CREATE_PAYMENT_REQUEST tool input.
 */
type BTCPAY_SERVER_CREATE_PAYMENT_REQUEST_INPUT = {
  /**
   * Amount
   * @description Requested amount, must be non-negative
   */
  amount?: number | null;
  /**
   * Currency
   * @description Three-letter currency code (e.g., USD, EUR)
   */
  currency?: string;
  /**
   * Custom Amount
   * @description Allow customer to enter a custom amount
   * @default false
   */
  customAmount: boolean | null;
  /**
   * Description
   * @description Optional description for the customer
   * @default null
   */
  description: string | null;
  /**
   * Email
   * Format: email
   * @description Customer email address for notifications
   * @default null
   */
  email: string | null;
  /**
   * Expiry Date
   * Format: date-time
   * @description Expiration date in ISO 8601 format
   * @default null
   */
  expiryDate: string | null;
  /**
   * Metadata
   * @description Arbitrary metadata to attach to this payment request
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Notification Url
   * Format: uri
   * @description Webhook URL for payment notifications
   * @default null
   */
  notificationUrl: string | null;
  /**
   * Redirect Url
   * Format: uri
   * @description URL to redirect the customer after payment
   * @default null
   */
  redirectUrl: string | null;
  /**
   * Store Id
   * @description BTCPay Server store ID where the payment request will be created
   */
  storeId?: string;
  /**
   * Title
   * @description Title of the payment request
   */
  title?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_CREATE_PAYMENT_REQUEST tool output.
 */
type BTCPAY_SERVER_CREATE_PAYMENT_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount requested
       */
      amount: number | null;
      /**
       * Created Time
       * Format: date-time
       * @description ISO timestamp when the payment request was created
       */
      createdTime: string;
      /**
       * Currency
       * @description Currency code
       */
      currency: string;
      /**
       * Custom Amount
       * @description Whether a custom amount is allowed
       */
      customAmount: boolean;
      /**
       * Description
       * @description Description of the payment request
       * @default null
       */
      description: string | null;
      /**
       * Email
       * Format: email
       * @description Customer email address
       * @default null
       */
      email: string | null;
      /**
       * Expiry Date
       * Format: date-time
       * @description Expiration date of the payment request
       * @default null
       */
      expiryDate: string | null;
      /**
       * Id
       * @description Unique identifier of the payment request
       */
      id: string;
      /**
       * Metadata
       * @description Metadata associated with this payment request
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Notification Url
       * Format: uri
       * @description URL for payment notifications
       * @default null
       */
      notificationUrl: string | null;
      /**
       * Redirect Url
       * Format: uri
       * @description URL to redirect after payment
       * @default null
       */
      redirectUrl: string | null;
      /**
       * Status
       * @description Current status of the payment request
       * @enum {string}
       */
      status: "Pending" | "Completed" | "Expired";
      /**
       * Store Id
       * @description ID of the store
       */
      storeId: string;
      /**
       * Title
       * @description Title of the payment request
       */
      title: string;
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_CREATE_STORE tool input.
 */
type BTCPAY_SERVER_CREATE_STORE_INPUT = {
  /**
   * Default Currency
   * @description Optional: ISO currency code (e.g., 'USD', 'BTC') to use as default for invoices.
   * @default null
   */
  defaultCurrency: string | null;
  /**
   * Name
   * @description The name of the store to be created.
   */
  name?: string;
  /**
   * Website
   * @description Optional: The public website URL of the store.
   * @default null
   */
  website: string | null;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_CREATE_STORE tool output.
 */
type BTCPAY_SERVER_CREATE_STORE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Default Currency
       * @description Default currency code for the store, if set.
       * @default null
       */
      defaultCurrency: string | null;
      /**
       * Id
       * @description Unique identifier of the newly created store.
       */
      id: string;
      /**
       * Name
       * @description Name of the store.
       */
      name: string;
      /**
       * Website
       * @description Public website URL of the store, if set.
       * @default null
       */
      website: string | null;
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_CREATE_USER tool input.
 */
type BTCPAY_SERVER_CREATE_USER_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address of the new user
   */
  email?: string;
  /**
   * Is Administrator
   * @description Indicates if the new user should have administrative privileges. Defaults to false
   * @default false
   */
  isAdministrator: boolean;
  /**
   * Password
   * @description Password for the new user, minimum 8 characters
   */
  password?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_CREATE_USER tool output.
 */
type BTCPAY_SERVER_CREATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * Format: email
       * @description Email address of the newly created user
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the newly created user
       */
      id: string;
      /**
       * Is Administrator
       * @description Indicates if the user has administrative privileges
       */
      isAdministrator: boolean;
      /**
       * Requires Email Confirmation
       * @description Indicates if the user needs to confirm their email address
       */
      requiresEmailConfirmation: boolean;
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_CREATE_WEBHOOK tool input.
 */
type BTCPAY_SERVER_CREATE_WEBHOOK_INPUT = {
  /**
   * Authorized Events
   * @description Events to subscribe to via this webhook
   */
  authorizedEvents?: {
      /**
       * Everything
       * @description Subscribe to all events if true
       */
      everything: boolean;
      /**
       * Specific Events
       * @description List of specific event types to receive. Required if everything is false.
       * @default null
       */
      specificEvents: string[] | null;
  };
  /**
   * Automatic Redelivery
   * @description Automatically retry failed deliveries
   * @default true
   */
  automaticRedelivery: boolean;
  /**
   * Enabled
   * @description Whether the webhook is active
   * @default true
   */
  enabled: boolean;
  /**
   * Secret
   * @description HMAC secret used to sign webhook deliveries. If omitted, the server generates one.
   * @default null
   */
  secret: string | null;
  /**
   * Store Id
   * @description The identifier of the store to register the webhook for
   */
  storeId?: string;
  /**
   * Url
   * @description The callback URL to receive webhook POST payloads
   */
  url?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_CREATE_WEBHOOK tool output.
 */
type BTCPAY_SERVER_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorized Events
       * @description Authorized events for this webhook
       */
      authorizedEvents: {
          /**
           * Everything
           * @description Whether all events are subscribed
           */
          everything: boolean;
          /**
           * Specific Events
           * @description Specific event types subscribed
           * @default null
           */
          specificEvents: string[] | null;
      };
      /**
       * Automatic Redelivery
       * @description Whether automatic redelivery is enabled
       */
      automaticRedelivery: boolean;
      /**
       * Enabled
       * @description Whether the webhook is enabled
       */
      enabled: boolean;
      /**
       * Id
       * @description Identifier of the newly created webhook
       */
      id: string;
      /**
       * Secret
       * @description HMAC secret for validating webhook payloads
       * @default null
       */
      secret: string | null;
      /**
       * Url
       * @description Callback URL of the created webhook
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_DELETE_API_KEY tool input.
 */
type BTCPAY_SERVER_DELETE_API_KEY_INPUT = {
  /**
   * Apikey
   * @description The API key string to revoke. Must match an existing API key for the authenticated user.
   */
  apikey?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_DELETE_API_KEY tool output.
 */
type BTCPAY_SERVER_DELETE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description True if the API key was successfully revoked.
       */
      deleted: boolean;
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_DELETE_PAYMENT_REQUEST tool input.
 */
type BTCPAY_SERVER_DELETE_PAYMENT_REQUEST_INPUT = {
  /**
   * Payment Request Id
   * @description ID of the payment request to delete
   */
  paymentRequestId?: string;
  /**
   * Store Id
   * @description ID of the store
   */
  storeId?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_DELETE_PAYMENT_REQUEST tool output.
 */
type BTCPAY_SERVER_DELETE_PAYMENT_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Result message of the deletion operation
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_DELETE_PAYOUT tool input.
 */
type BTCPAY_SERVER_DELETE_PAYOUT_INPUT = {
  /**
   * Payout Id
   * @description ID of the payout to delete
   */
  payoutId?: string;
  /**
   * Store Id
   * @description ID of the store containing the payout
   */
  storeId?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_DELETE_PAYOUT tool output.
 */
type BTCPAY_SERVER_DELETE_PAYOUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message that the payout was deleted
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_API_KEY tool input.
 */
type BTCPAY_SERVER_GET_API_KEY_INPUT = object;

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_API_KEY tool output.
 */
type BTCPAY_SERVER_GET_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key
       * @description The API Key to use for authentication
       */
      apiKey: string;
      /**
       * Label
       * @description The label given by the user to this API Key
       */
      label: string;
      /**
       * Permissions
       * @description The permissions associated with this API Key
       */
      permissions: string[];
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_API_KEYS tool input.
 */
type BTCPAY_SERVER_GET_API_KEYS_INPUT = object;

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_API_KEYS tool output.
 */
type BTCPAY_SERVER_GET_API_KEYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Keys
       * @description List of API keys returned by the server
       */
      apiKeys: {
          /**
           * Api Key
           * @description The API Key to use for authentication
           */
          apiKey: string;
          /**
           * Label
           * @description The label given by the user to this API Key
           */
          label: string;
          /**
           * Permissions
           * @description The permissions associated with this API Key (can be scoped to a specific store)
           */
          permissions: string[];
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_PAYMENT_REQUESTS tool input.
 */
type BTCPAY_SERVER_GET_PAYMENT_REQUESTS_INPUT = {
  /**
   * Store Id
   * @description Identifier of the store whose payment requests will be listed.
   */
  store_id?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_PAYMENT_REQUESTS tool output.
 */
type BTCPAY_SERVER_GET_PAYMENT_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Array of payment requests returned by the API.
   */
  data?: {
      /**
       * Allow Custom Payment Amounts
       * @description Whether creating invoices with custom payment amounts is allowed.
       */
      allowCustomPaymentAmounts: boolean;
      /**
       * Amount
       * @description Amount of the payment request as a decimal string.
       */
      amount: string;
      /**
       * Created Time
       * @description Creation timestamp (Unix) of the payment request.
       */
      createdTime: number;
      /**
       * Currency
       * @description Currency code of the payment request (ISO 4217).
       */
      currency: string;
      /**
       * Description
       * @description HTML description or memo of the payment request.
       * @default null
       */
      description: string | null;
      /**
       * Email
       * @description Email associated with invoices generated by this payment request.
       * @default null
       */
      email: string | null;
      /**
       * Expiry Date
       * @description Expiry timestamp (Unix) of the payment request.
       * @default null
       */
      expiryDate: number | null;
      /**
       * Form Id
       * @description Identifier of the form used to collect additional customer data.
       * @default null
       */
      formId: string | null;
      /**
       * Form Response
       * @description Collected form response data for the payment request.
       */
      formResponse: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Unique identifier of the payment request.
       */
      id: string;
      /**
       * Reference Id
       * @description Optional user-defined reference ID.
       * @default null
       */
      referenceId: string | null;
      /**
       * Status
       * @description Current status: Pending, Completed, or Expired.
       */
      status: string;
      /**
       * Store Id
       * @description Store identifier to which this payment request belongs.
       */
      storeId: string;
      /**
       * Title
       * @description Title of the payment request.
       */
      title: string;
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_SERVER_INFO tool input.
 */
type BTCPAY_SERVER_GET_SERVER_INFO_INPUT = object;

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_SERVER_INFO tool output.
 */
type BTCPAY_SERVER_GET_SERVER_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fully Synched
       * @description True if the instance is fully synchronized according to NBXplorer
       */
      fullySynched: boolean;
      /**
       * Onion
       * @description Tor hostname of the server (if configured)
       * @default null
       */
      onion: string | null;
      /**
       * Supported Payment Methods
       * @description List of payment methods supported by the server
       */
      supportedPaymentMethods: string[];
      /**
       * Sync Status
       * @description Detailed sync status per payment method
       */
      syncStatus: {
          /**
           * Available
           * @description True if this payment method is fully in sync and available
           */
          available: boolean;
          /**
           * Chain Height
           * @description Height of the blockchain as seen by the server
           */
          chainHeight: number;
          /**
           * NodeInformation
           * @description Detailed sync status of the node for this payment method
           * @default null
           */
          nodeInformation: {
              /**
               * Blocks
               * @description Number of blocks processed by the internal full node
               * @default null
               */
              blocks: number | null;
              /**
               * Headers
               * @description Number of headers processed by the internal full node
               * @default null
               */
              headers: number | null;
              /**
               * Verification Progress
               * @description Progress of block verification from 0.0 to 1.0
               * @default null
               */
              verificationProgress: number | null;
          } | null;
          /**
           * Payment Method Id
           * @description Payment method ID this status applies to
           */
          paymentMethodId: string;
          /**
           * Sync Height
           * @description Height up to which the server has synced
           * @default null
           */
          syncHeight: number | null;
      }[];
      /**
       * Version
       * @description BTCPay Server version
       */
      version: string;
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_STORE tool input.
 */
type BTCPAY_SERVER_GET_STORE_INPUT = {
  /**
   * Store Id
   * @description The identifier of the store to retrieve information for.
   */
  store_id?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_STORE tool output.
 */
type BTCPAY_SERVER_GET_STORE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Anyone Can Create Invoice
       * @description If true, invoices can be created without authentication.
       */
      anyoneCanCreateInvoice: boolean;
      /**
       * Apply Brand Color To Backend
       * @description If true, brand color applies to the admin/backend UI.
       */
      applyBrandColorToBackend: boolean;
      /**
       * Archived
       * @description If true, store is archived and hidden by default.
       */
      archived: boolean;
      /**
       * Auto Detect Language
       * @description Auto-detect language from browser settings.
       */
      autoDetectLanguage: boolean;
      /**
       * Brand Color
       * @description Hex code for the store's brand color.
       * @default null
       */
      brandColor: string | null;
      /**
       * Celebrate Payment
       * @description Show confetti animation on payment success.
       */
      celebratePayment: boolean;
      /**
       * Css Url
       * @description URL or file reference for custom CSS of the store.
       * @default null
       */
      cssUrl: string | null;
      /**
       * Default Currency
       * @description Default currency code for new invoices.
       */
      defaultCurrency: string;
      /**
       * Default Lang
       * @description Default language code for the checkout page.
       */
      defaultLang: string;
      /**
       * Default Payment Method
       * @description Default payment method ID for checkout.
       */
      defaultPaymentMethod: string;
      /**
       * Display Expiration Timer
       * @description Threshold in seconds to show countdown timer (>= 60).
       */
      displayExpirationTimer: number;
      /**
       * Html Title
       * @description HTML <title> for the checkout page.
       * @default null
       */
      htmlTitle: string | null;
      /**
       * Id
       * @description Unique identifier of the store.
       */
      id: string;
      /**
       * Invoice Expiration
       * @description Invoice expiration in seconds (>= 60).
       */
      invoiceExpiration: number;
      /**
       * Lazy Payment Methods
       * @description Enable payment methods lazily on user interaction.
       */
      lazyPaymentMethods: boolean;
      /**
       * Lightning Amount In Satoshi
       * @description Show lightning amounts in satoshis instead of fiat.
       */
      lightningAmountInSatoshi: boolean;
      /**
       * Lightning Description Template
       * @description Template for lightning invoice description; supports {StoreName}, {OrderId}.
       * @default null
       */
      lightningDescriptionTemplate: string | null;
      /**
       * Lightning Private Route Hints
       * @description Include private route hints in lightning invoices.
       */
      lightningPrivateRouteHints: boolean;
      /**
       * Logo Url
       * @description URL or file reference for the store logo.
       * @default null
       */
      logoUrl: string | null;
      /**
       * Monitoring Expiration
       * @description Time in seconds after which paid-but-unconfirmed invoices become invalid (>= 600).
       */
      monitoringExpiration: number;
      /**
       * Name
       * @description Name of the store.
       */
      name: string;
      /**
       * Network Fee Mode
       * @description Policy for adding network fee to invoices.
       * @enum {string}
       */
      networkFeeMode: "Always" | "MultiplePaymentsOnly" | "Never";
      /**
       * On Chain With Ln Invoice Fallback
       * @description Use lightning invoice fallback for on-chain requests.
       */
      onChainWithLnInvoiceFallback: boolean;
      /**
       * Pay Join Enabled
       * @description Enable PayJoin proposal in checkout (BIP78).
       */
      payJoinEnabled: boolean;
      /**
       * Payment Method Criteria
       * @description Criteria to activate specific payment methods.
       */
      paymentMethodCriteria: {
          [key: string]: string | boolean | number;
      };
      /**
       * Payment Sound Url
       * @description URL or file reference for payment sound.
       * @default null
       */
      paymentSoundUrl: string | null;
      /**
       * Payment Tolerance
       * @description Allowed underpayment tolerance as a percentage (0-100).
       */
      paymentTolerance: number;
      /**
       * Play Sound On Payment
       * @description Play sound on payment success on checkout V2.
       */
      playSoundOnPayment: boolean;
      /**
       * Receipt
       * @description Settings for public receipt on invoices.
       */
      receipt: {
          /**
           * Enabled
           * @description Whether public receipt is enabled.
           */
          enabled: boolean;
          /**
           * Show Payments
           * @description Whether to show payment details on the receipt.
           * @default null
           */
          showPayments: boolean | null;
          /**
           * Show Qr
           * @description Whether to show QR code on the receipt.
           * @default null
           */
          showQR: boolean | null;
      };
      /**
       * Recommended Fee Block Target
       * @description Block target to calculate recommended fee rate.
       */
      recommendedFeeBlockTarget: number;
      /**
       * Redirect Automatically
       * @description Automatically redirect after a successful payment.
       */
      redirectAutomatically: boolean;
      /**
       * Refund Bolt11 Expiration
       * @description Minimum BOLT11 invoice expiration in days for refunds (>= 0).
       */
      refundBOLT11Expiration: number;
      /**
       * Show Pay In Wallet Button
       * @description Show "Pay in wallet" button on checkout V2.
       */
      showPayInWalletButton: boolean;
      /**
       * Show Recommended Fee
       * @description Display recommended fee on the checkout page.
       */
      showRecommendedFee: boolean;
      /**
       * Show Store Header
       * @description Show store header on checkout V2.
       */
      showStoreHeader: boolean;
      /**
       * Speed Policy
       * @description Confirmation speed policy for on-chain payments.
       * @enum {string}
       */
      speedPolicy: "HighSpeed" | "MediumSpeed" | "LowMediumSpeed" | "LowSpeed";
      /**
       * Support Url
       * @description Support URL for the store; may contain placeholders {OrderId} or {InvoiceId}.
       * @default null
       */
      supportUrl: string | null;
      /**
       * Website
       * @description Public website URL of the store.
       * @default null
       */
      website: string | null;
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_USER tool input.
 */
type BTCPAY_SERVER_GET_USER_INPUT = {
  /**
   * Id Or Email
   * @description The ID or email of the user to retrieve
   */
  id_or_email?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_USER tool output.
 */
type BTCPAY_SERVER_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Approved
       * @description Whether the user has been approved by an administrator
       */
      approved: boolean;
      /**
       * Created
       * @description Creation timestamp (Unix) of the user
       */
      created: number;
      /**
       * Disabled
       * @description Whether the user is disabled
       */
      disabled: boolean;
      /**
       * Email
       * @description Email address of the user
       */
      email: string;
      /**
       * Email Confirmed
       * @description Whether the user's email has been confirmed
       */
      emailConfirmed: boolean;
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Image Url
       * @description URL of the user's profile image
       * @default null
       */
      imageUrl: string | null;
      /**
       * Invitation Url
       * @description Invitation URL if the user's email is not confirmed
       * @default null
       */
      invitationUrl: string | null;
      /**
       * Name
       * @description Name of the user
       */
      name: string;
      /**
       * Requires Approval
       * @description Whether the user requires administrator approval
       */
      requiresApproval: boolean;
      /**
       * Requires Email Confirmation
       * @description Whether the user needs to confirm their email
       */
      requiresEmailConfirmation: boolean;
      /**
       * Roles
       * @description Roles assigned to the user
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_WEBHOOK tool input.
 */
type BTCPAY_SERVER_GET_WEBHOOK_INPUT = {
  /**
   * Store Id
   * @description Identifier of the store containing the webhook
   */
  storeId?: string;
  /**
   * Webhook Id
   * @description Identifier of the webhook to retrieve
   */
  webhookId?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_WEBHOOK tool output.
 */
type BTCPAY_SERVER_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorized Events
       * @description Events this webhook is subscribed to
       */
      authorizedEvents: {
          /**
           * Everything
           * @description Subscribe to all events if true
           */
          everything: boolean;
          /**
           * Specific Events
           * @description List of specific event types to receive when 'everything' is false
           * @default null
           */
          specificEvents: string[] | null;
      };
      /**
       * Automatic Redelivery
       * @description Whether failed deliveries are retried automatically
       */
      automaticRedelivery: boolean;
      /**
       * Created
       * @description Creation timestamp of the webhook (ISO 8601)
       */
      created: string;
      /**
       * Enabled
       * @description Whether the webhook is enabled
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: string;
      /**
       * Secret
       * @description Secret used to sign payloads
       */
      secret: string;
      /**
       * Url
       * @description Callback URL for webhook notifications
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_WEBHOOKS tool input.
 */
type BTCPAY_SERVER_GET_WEBHOOKS_INPUT = {
  /**
   * Store Id
   * @description Identifier of the store to fetch webhooks for
   */
  storeId?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_GET_WEBHOOKS tool output.
 */
type BTCPAY_SERVER_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhooks registered for the store
       */
      webhooks: {
          /**
           * Authorized Events
           * @description Events this webhook is subscribed to
           */
          authorizedEvents: {
              /**
               * Everything
               * @description Subscribe to all events if true
               */
              everything: boolean;
              /**
               * Specific Events
               * @description List of specific event types to receive when 'everything' is false
               * @default null
               */
              specificEvents: string[] | null;
          };
          /**
           * Automatic Redelivery
           * @description Whether failed deliveries are retried automatically
           */
          automaticRedelivery: boolean;
          /**
           * Enabled
           * @description Whether the webhook is enabled
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique identifier of the webhook
           */
          id: string;
          /**
           * Url
           * @description Callback URL for webhook notifications
           */
          url: string;
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_LIST_APPS tool input.
 */
type BTCPAY_SERVER_LIST_APPS_INPUT = {
  /**
   * Store Id
   * @description The identifier of the store to list apps for.
   */
  storeId?: string;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_LIST_APPS tool output.
 */
type BTCPAY_SERVER_LIST_APPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Apps
       * @description List of basic app information returned by the server.
       */
      apps: {
          /**
           * App Name
           * @description Name of the app.
           */
          appName: string;
          /**
           * App Type
           * @description Type of the app (e.g., PointOfSale, Crowdfund).
           */
          appType: string;
          /**
           * Archived
           * @description Whether the app is archived and hidden by default.
           */
          archived: boolean;
          /**
           * Created
           * @description UNIX timestamp (seconds) when the app was created.
           */
          created: number;
          /**
           * Id
           * @description Unique identifier of the app.
           */
          id: string;
          /**
           * Store Id
           * @description Store ID the app belongs to.
           */
          storeId: string;
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
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_UPDATE_USER tool input.
 */
type BTCPAY_SERVER_UPDATE_USER_INPUT = {
  /**
   * Current Password
   * @description Current password (required when changing password)
   * @default null
   */
  currentPassword: string | null;
  /**
   * Email
   * Format: email
   * @description New email address for the user
   * @default null
   */
  email: string | null;
  /**
   * Image Url
   * @description New profile picture URL for the user
   * @default null
   */
  imageUrl: string | null;
  /**
   * Name
   * @description New display name for the user
   * @default null
   */
  name: string | null;
  /**
   * New Password
   * @description New password for the user (min length 8)
   * @default null
   */
  newPassword: string | null;
};

/**
 * Type of BTCPAY_SERVER's BTCPAY_SERVER_UPDATE_USER tool output.
 */
type BTCPAY_SERVER_UPDATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Approved
       * @description Whether the user has been approved by an administrator
       */
      approved: boolean;
      /**
       * Created
       * @description Creation timestamp (Unix seconds) of the user
       */
      created: number;
      /**
       * Disabled
       * @description Whether the user is disabled
       */
      disabled: boolean;
      /**
       * Email
       * Format: email
       * @description Email address of the user
       */
      email: string;
      /**
       * Email Confirmed
       * @description Whether the user's email is confirmed
       */
      emailConfirmed: boolean;
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Image Url
       * @description Profile image URL of the user
       * @default null
       */
      imageUrl: string | null;
      /**
       * Invitation Url
       * @description Pending invitation URL if email not confirmed
       * @default null
       */
      invitationUrl: string | null;
      /**
       * Name
       * @description Display name of the user
       * @default null
       */
      name: string | null;
      /**
       * Requires Approval
       * @description Whether the user requires administrator approval to login
       */
      requiresApproval: boolean;
      /**
       * Requires Email Confirmation
       * @description Whether the user needs to confirm their email to login
       */
      requiresEmailConfirmation: boolean;
      /**
       * Roles
       * @description List of roles assigned to the user
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
 * Type map of all available tool input types for toolkit "BTCPAY_SERVER".
 */
export type BTCPAY_SERVER_TOOL_INPUTS = {
  CREATE_PAYMENT_REQUEST: BTCPAY_SERVER_CREATE_PAYMENT_REQUEST_INPUT
  CREATE_STORE: BTCPAY_SERVER_CREATE_STORE_INPUT
  CREATE_USER: BTCPAY_SERVER_CREATE_USER_INPUT
  CREATE_WEBHOOK: BTCPAY_SERVER_CREATE_WEBHOOK_INPUT
  DELETE_API_KEY: BTCPAY_SERVER_DELETE_API_KEY_INPUT
  DELETE_PAYMENT_REQUEST: BTCPAY_SERVER_DELETE_PAYMENT_REQUEST_INPUT
  DELETE_PAYOUT: BTCPAY_SERVER_DELETE_PAYOUT_INPUT
  GET_API_KEY: BTCPAY_SERVER_GET_API_KEY_INPUT
  GET_API_KEYS: BTCPAY_SERVER_GET_API_KEYS_INPUT
  GET_PAYMENT_REQUESTS: BTCPAY_SERVER_GET_PAYMENT_REQUESTS_INPUT
  GET_SERVER_INFO: BTCPAY_SERVER_GET_SERVER_INFO_INPUT
  GET_STORE: BTCPAY_SERVER_GET_STORE_INPUT
  GET_USER: BTCPAY_SERVER_GET_USER_INPUT
  GET_WEBHOOK: BTCPAY_SERVER_GET_WEBHOOK_INPUT
  GET_WEBHOOKS: BTCPAY_SERVER_GET_WEBHOOKS_INPUT
  LIST_APPS: BTCPAY_SERVER_LIST_APPS_INPUT
  UPDATE_USER: BTCPAY_SERVER_UPDATE_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BTCPAY_SERVER".
 */
export type BTCPAY_SERVER_TOOL_OUTPUTS = {
  CREATE_PAYMENT_REQUEST: BTCPAY_SERVER_CREATE_PAYMENT_REQUEST_OUTPUT
  CREATE_STORE: BTCPAY_SERVER_CREATE_STORE_OUTPUT
  CREATE_USER: BTCPAY_SERVER_CREATE_USER_OUTPUT
  CREATE_WEBHOOK: BTCPAY_SERVER_CREATE_WEBHOOK_OUTPUT
  DELETE_API_KEY: BTCPAY_SERVER_DELETE_API_KEY_OUTPUT
  DELETE_PAYMENT_REQUEST: BTCPAY_SERVER_DELETE_PAYMENT_REQUEST_OUTPUT
  DELETE_PAYOUT: BTCPAY_SERVER_DELETE_PAYOUT_OUTPUT
  GET_API_KEY: BTCPAY_SERVER_GET_API_KEY_OUTPUT
  GET_API_KEYS: BTCPAY_SERVER_GET_API_KEYS_OUTPUT
  GET_PAYMENT_REQUESTS: BTCPAY_SERVER_GET_PAYMENT_REQUESTS_OUTPUT
  GET_SERVER_INFO: BTCPAY_SERVER_GET_SERVER_INFO_OUTPUT
  GET_STORE: BTCPAY_SERVER_GET_STORE_OUTPUT
  GET_USER: BTCPAY_SERVER_GET_USER_OUTPUT
  GET_WEBHOOK: BTCPAY_SERVER_GET_WEBHOOK_OUTPUT
  GET_WEBHOOKS: BTCPAY_SERVER_GET_WEBHOOKS_OUTPUT
  LIST_APPS: BTCPAY_SERVER_LIST_APPS_OUTPUT
  UPDATE_USER: BTCPAY_SERVER_UPDATE_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BTCPAY_SERVER toolkit.
 */
export const BTCPAY_SERVER = {
  slug: "btcpay_server",
  tools: {
    /**
     * Tool to create a new payment request for a store. use after confirming store id.
     */
    CREATE_PAYMENT_REQUEST: "BTCPAY_SERVER_CREATE_PAYMENT_REQUEST",
    /**
     * Tool to create a new store in btcpay server. use when you need to provision a new store before processing transactions.
     */
    CREATE_STORE: "BTCPAY_SERVER_CREATE_STORE",
    /**
     * Tool to create a new btcpay server user. use when you need to register a new user programmatically as an administrator.
     */
    CREATE_USER: "BTCPAY_SERVER_CREATE_USER",
    /**
     * Tool to register a new webhook. use when you need to receive store event notifications.
     */
    CREATE_WEBHOOK: "BTCPAY_SERVER_CREATE_WEBHOOK",
    /**
     * Tool to revoke a specific api key. use when you need to remove an api key to immediately prevent its use. call after identifying the key to revoke.
     */
    DELETE_API_KEY: "BTCPAY_SERVER_DELETE_API_KEY",
    /**
     * Tool to delete a specific payment request. use when you need to archive/remove an existing payment request for a store.
     */
    DELETE_PAYMENT_REQUEST: "BTCPAY_SERVER_DELETE_PAYMENT_REQUEST",
    /**
     * Tool to delete a specific payout from a store. use when you need to cancel a payout no longer needed.
     */
    DELETE_PAYOUT: "BTCPAY_SERVER_DELETE_PAYOUT",
    /**
     * Tool to retrieve the current api key. use after authentication to get api key details.
     */
    GET_API_KEY: "BTCPAY_SERVER_GET_API_KEY",
    /**
     * Tool to list api keys. use when you need to retrieve all api keys associated with the authenticated user.
     */
    GET_API_KEYS: "BTCPAY_SERVER_GET_API_KEYS",
    /**
     * Tool to list all payment requests for a specific store. use after confirming you have the store id.
     */
    GET_PAYMENT_REQUESTS: "BTCPAY_SERVER_GET_PAYMENT_REQUESTS",
    /**
     * Tool to retrieve information about the btcpay server instance. use when needing server version, tor address, supported payment methods, and synchronization states.
     */
    GET_SERVER_INFO: "BTCPAY_SERVER_GET_SERVER_INFO",
    /**
     * Tool to retrieve information about a specific store. use when you need full store configuration.
     */
    GET_STORE: "BTCPAY_SERVER_GET_STORE",
    /**
     * Tool to retrieve information about a specific user. use when you need to fetch profile data for a given user id or email.
     */
    GET_USER: "BTCPAY_SERVER_GET_USER",
    /**
     * Tool to retrieve details of a specific webhook. use when you need to verify the configuration or status of a webhook for a given store after its creation.
     */
    GET_WEBHOOK: "BTCPAY_SERVER_GET_WEBHOOK",
    /**
     * Tool to list all webhooks registered for a store. use when you need to retrieve the configured webhooks for management or auditing.
     */
    GET_WEBHOOKS: "BTCPAY_SERVER_GET_WEBHOOKS",
    /**
     * Tool to list all apps associated with a specific store. use when retrieving basic metadata of every app in that store.
     */
    LIST_APPS: "BTCPAY_SERVER_LIST_APPS",
    /**
     * Tool to update current user information. use when you need to modify your authenticated user profile on btcpay server.
     */
    UPDATE_USER: "BTCPAY_SERVER_UPDATE_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BTCPAY_SERVER".
 */
export type BTCPAY_SERVER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BTCPAY_SERVER".
 */
export type BTCPAY_SERVER_TRIGGER_EVENTS = {}
