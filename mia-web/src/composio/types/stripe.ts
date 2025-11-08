import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of STRIPE's STRIPE_CANCEL_SUBSCRIPTION tool input.
 */
type STRIPE_CANCEL_SUBSCRIPTION_INPUT = {
  /**
   * Cancellation Details
   * @description Specifies reasons for cancellation. Common keys: 'comment' (free-form text) and 'feedback' (e.g., 'customer_service', 'low_usage', 'switched_service'). Example: {'comment': 'Switching services.', 'feedback': 'switched_service'}
   */
  cancellation_details?: {
      [key: string]: unknown;
  };
  /**
   * Invoice Now
   * @description If true, generates a final invoice for any un-invoiced metered usage.
   * @default false
   */
  invoice_now: boolean;
  /**
   * Prorate
   * @description If true, generates a proration invoice item for unused time remaining in the current billing cycle.
   * @default false
   */
  prorate: boolean;
  /**
   * Subscription Id
   * @description Identifier of the subscription to cancel.
   */
  subscription_id?: string;
};

/**
 * Type of STRIPE's STRIPE_CANCEL_SUBSCRIPTION tool output.
 */
type STRIPE_CANCEL_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description The full Stripe Subscription object that has been canceled.
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
 * Type of STRIPE's STRIPE_CONFIRM_PAYMENT_INTENT tool input.
 */
type STRIPE_CONFIRM_PAYMENT_INTENT_INPUT = {
  /**
   * Capture Method
   * @description Controls fund capture (`automatic` for immediate, `manual` for later authorization), overriding the PaymentIntent's setting. Can change from `manual` to `automatic`, but not from `automatic` to `manual` during confirmation.
   */
  capture_method?: string;
  /**
   * Payment Intent Id
   * @description The unique identifier of the PaymentIntent to be confirmed.
   */
  payment_intent_id?: string;
  /**
   * Payment Method
   * @description ID of the PaymentMethod to attach; if omitted, Stripe uses the latest associated payment method.
   */
  payment_method?: string;
  /**
   * Receipt Email
   * @description Email address for Stripe to send a receipt, overriding any previously set on the PaymentIntent.
   */
  receipt_email?: string;
  /**
   * Return Url
   * @description URL for customer redirection after authentication steps (e.g., 3D Secure); necessary for redirection-based payment methods.
   */
  return_url?: string;
  /**
   * Setup Future Usage
   * @description Indicates intent to save the payment method for future use (`on_session` or `off_session`), overriding any previously set value.
   */
  setup_future_usage?: string;
  /**
   * Shipping
   * @description Shipping information, overriding any previously set; provide a dictionary with address details.
   */
  shipping?: {
      [key: string]: unknown;
  };
};

/**
 * Type of STRIPE's STRIPE_CONFIRM_PAYMENT_INTENT tool output.
 */
type STRIPE_CONFIRM_PAYMENT_INTENT_OUTPUT = {
  /**
   * Data
   * @description The full Stripe PaymentIntent object representing the confirmed payment, including its status and details.
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
 * Type of STRIPE's STRIPE_CREATE_CUSTOMER tool input.
 */
type STRIPE_CREATE_CUSTOMER_INPUT = {
  /**
   * Address
   * @description The customer's billing address, provided as a dictionary where both keys and values are strings. This address can be used for tax calculation, shipping, and fraud prevention. Common keys include: `line1` (street address, P.O. box, or c/o), `line2` (apartment, suite, unit, or building), `city`, `state` (state, province, or region), `postal_code` (ZIP or postal code), and `country` (a two-letter ISO country code, e.g., 'US', 'GB'). All keys are optional.
   * @default null
   */
  address: {
      [key: string]: string;
  } | null;
  /**
   * Description
   * @description An arbitrary string that you can attach to a customer object for your internal reference (e.g., notes about the customer). This is not visible to the customer.
   * @default null
   */
  description: string | null;
  /**
   * Email
   * @description The customer's primary email address, used by Stripe for sending invoices, receipts, and other important communications.
   * @default null
   */
  email: string | null;
  /**
   * Name
   * @description The customer's full name or the name of the business.
   * @default null
   */
  name: string | null;
  /**
   * Phone
   * @description The customer's primary phone number. Include the country code for international numbers (e.g., +1 for the USA).
   * @default null
   */
  phone: string | null;
};

/**
 * Type of STRIPE's STRIPE_CREATE_CUSTOMER tool output.
 */
type STRIPE_CREATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description The complete JSON response from the Stripe API, representing the created customer object. This typically includes the customer's ID, and all other attributes of the customer, such as email, name, address (if provided), etc.
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
 * Type of STRIPE's STRIPE_CREATE_INVOICE tool input.
 */
type STRIPE_CREATE_INVOICE_INPUT = {
  /**
   * Account Tax Ids
   * @description A list of tax IDs that apply to this invoice. These IDs will override the `default_tax_rates` on the Customer.
   * @default null
   */
  account_tax_ids: string[] | null;
  /**
   * Application Fee Amount
   * @description A non-negative integer in cents (or the smallest currency unit) representing the fee amount for the application that will be applied to the invoice. This is used for Stripe Connect.
   * @default null
   */
  application_fee_amount: number | null;
  /**
   * Auto Advance
   * @description Controls whether Stripe automatically finalizes and attempts payment on this invoice. When false, the invoice remains a draft. Defaults to true for `collection_method='charge_automatically'`, and false for `collection_method='send_invoice'`.
   * @default null
   */
  auto_advance: boolean | null;
  /**
   * AutomaticTax
   * @description Configuration for Stripe's automatic tax calculation on the invoice.
   * @default null
   */
  automatic_tax: {
      /**
       * Enabled
       * @description If true, Stripe automatically computes tax on this invoice.
       */
      enabled: boolean;
      /**
       * AutomaticTaxLiability
       * @description Stripe Connect account liable for tax under automatic tax settings.
       * @default null
       */
      liability: {
          /**
           * Account
           * @description The ID of the Stripe account that is liable for tax. Example: 'acct_12345ABCDEF'
           */
          account: string;
      } | null;
  } | null;
  /**
   * Automatically Finalizes At
   * @description A Unix timestamp representing the date and time when this draft invoice will be automatically finalized.
   * @default null
   */
  automatically_finalizes_at: number | null;
  /**
   * Collection Method
   * @description Specifies how the invoice payment is collected. Can be 'charge_automatically' to attempt payment immediately or 'send_invoice' to email the invoice to the customer for manual payment. Defaults to 'charge_automatically'.
   * @default null
   */
  collection_method: string | null;
  /**
   * Currency
   * @description The three-letter ISO currency code (e.g., usd, eur). Must be a supported currency. Defaults to the customer's currency, or the subscription's currency if `subscription` is provided.
   * @default null
   */
  currency: string | null;
  /**
   * Custom Fields
   * @description A list of custom fields to display on the invoice. Each field consists of a name and a value.
   * @default null
   */
  custom_fields: {
      /**
       * Name
       * @description The name of the custom field, displayed as a label.
       */
      name: string;
      /**
       * Value
       * @description The value of the custom field, displayed to the customer.
       */
      value: string;
  }[] | null;
  /**
   * Customer
   * @description The ID of the customer to be billed.
   */
  customer?: string;
  /**
   * Days Until Due
   * @description The number of days from when the invoice is finalized until it is due. Only applicable if `collection_method` is 'send_invoice'. Cannot be used with `due_date`.
   *
   *     RECOMMENDED APPROACH: When users specify future dates in natural language (like "due in 30 days" or "due next month"), using `days_until_due` is safer than converting to Unix timestamps with `due_date`, as it avoids potential timestamp conversion errors.
   *
   *     EXAMPLES:
   *     - "Due in 30 days" → days_until_due: 30
   *     - "Due next month" → days_until_due: 30
   *     - "Due in two weeks" → days_until_due: 14
   *     - "Net 15 terms" → days_until_due: 15
   * @default null
   */
  days_until_due: number | null;
  /**
   * Default Payment Method
   * @description ID of the default payment method to be used for this invoice.
   * @default null
   */
  default_payment_method: string | null;
  /**
   * Default Source
   * @description ID of the default payment source (e.g., card) to be used for this invoice. Deprecated in favor of `default_payment_method`.
   * @default null
   */
  default_source: string | null;
  /**
   * Default Tax Rates
   * @description A list of IDs of tax rates that will apply to any line item on the invoice for which tax rates are not explicitly defined.
   * @default null
   */
  default_tax_rates: string[] | null;
  /**
   * Description
   * @description An arbitrary string attached to the invoice, often visible to the customer.
   * @default null
   */
  description: string | null;
  /**
   * Discounts
   * @description The discounts to apply to the invoice. This can include coupon IDs or discount IDs.
   * @default null
   */
  discounts: {
      /**
       * Coupon
       * @description The ID of an existing coupon to apply.
       * @default null
       */
      coupon: string | null;
      /**
       * Discount
       * @description The ID of an existing discount to apply.
       * @default null
       */
      discount: string | null;
      /**
       * Promotion Code
       * @description The ID of an existing promotion code to apply.
       * @default null
       */
      promotion_code: string | null;
  }[] | null;
  /**
   * Due Date
   * @description The date on which the invoice is due. Unix timestamp in seconds. MUST be a future date. Only applicable if `collection_method` is 'send_invoice'. Cannot be used with `days_until_due`.
   *
   *     IMPORTANT FOR DATE CONVERSION:
   *     - Always convert natural language dates to Unix timestamps representing future dates
   *     - Use the current date as reference point - do NOT use outdated reference dates
   *     - Common conversion errors: "June 15, 2025" should be ~1749925800 (not 1718755200 which is June 2024)
   *
   *     EXAMPLES OF CORRECT CONVERSIONS (based on current date):
   *     - "June 15, 2025" → 1749925800
   *     - "December 31, 2025" → 1767196800
   *     - "Next month" → Calculate from current date + 30 days
   *     - "In 30 days" → Calculate from current date + 30 days
   *
   *     VALIDATION: Before using any timestamp, verify it represents a FUTURE date by checking:
   *     - The timestamp should be greater than current Unix timestamp
   *     - Convert back to human date to confirm it matches the intended future date
   *
   *     Example: For June 15, 2025, use 1749925800 (verified future date).
   * @default null
   */
  due_date: number | null;
  /**
   * Footer
   * @description A custom footer text to display on the invoice PDF.
   * @default null
   */
  footer: string | null;
  /**
   * FromInvoice
   * @description Details for revising an existing invoice.
   * @default null
   */
  from_invoice: {
      /**
       * Action
       * @description Action to take. Currently, only 'revision' is supported.
       */
      action: string;
      /**
       * Invoice
       * @description ID of the invoice being revised. The new invoice will be a draft copy.
       */
      invoice: string;
  } | null;
  /**
   * Issuer
   * @description Details about the entity that is issuing the invoice. Applicable for Stripe Connect.
   * @default null
   */
  issuer: {
      [key: string]: unknown;
  } | null;
  /**
   * Metadata
   * @description A set of key-value pairs to store additional information about the object. This is useful for storing custom data.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Number
   * @description A custom number to identify this invoice. If not provided, Stripe will generate one. It must be unique.
   * @default null
   */
  number: string | null;
  /**
   * On Behalf Of
   * @description The Stripe account ID on behalf of which to charge. Used with Stripe Connect.
   * @default null
   */
  on_behalf_of: string | null;
  /**
   * PaymentSettings
   * @description Settings for the invoice payment process.
   * @default null
   */
  payment_settings: {
      /**
       * Default Mandate
       * @description ID of the mandate to be used, which must correspond to a selected payment method type.
       * @default null
       */
      default_mandate: string | null;
      /**
       * PaymentMethodOptions
       * @description Configuration options specific to certain payment methods (e.g., 'card', 'acss_debit').
       * @default null
       */
      payment_method_options: {
          /**
           * Acss Debit
           * @description Configuration for ACSS debit payments.
           * @default null
           */
          acss_debit: {
              [key: string]: unknown;
          } | null;
          /**
           * Card
           * @description Configuration for card payments.
           * @default null
           */
          card: {
              [key: string]: unknown;
          } | null;
      } | null;
      /**
       * Payment Method Types
       * @description List of allowed payment method types (e.g., 'card', 'ach_debit'). If unset, Stripe uses methods from your settings.
       * @default null
       */
      payment_method_types: string[] | null;
  } | null;
  /**
   * Pending Invoice Items Behavior
   * @description Determines how pending invoice items are handled during invoice finalization. Can be 'include' to include all pending items, or 'exclude' to ignore them. Defaults to 'include'.
   * @default null
   */
  pending_invoice_items_behavior: string | null;
  /**
   * Rendering
   * @description Options for customizing the invoice PDF appearance.
   * @default null
   */
  rendering: {
      /**
       * Amount Tax Display
       * @description How tax amounts are displayed on the invoice. Can be 'exclude_tax' or 'include_inclusive_tax'.
       * @default null
       */
      amount_tax_display: string | null;
      /**
       * Pdf
       * @description Page size for the invoice PDF.
       * @enum {string}
       */
      pdf: "a4" | "letter" | "auto";
      /**
       * Template
       * @description The ID of the invoice template to use for rendering this invoice.
       * @default null
       */
      template: string | null;
      /**
       * Template Version
       * @description The version of the invoice template to use for rendering this invoice.
       * @default null
       */
      template_version: number | null;
  } | null;
  /**
   * ShippingCost
   * @description Shipping cost for the invoice. Provide an existing `shipping_rate` ID or define `shipping_rate_data`.
   * @default null
   */
  shipping_cost: {
      /**
       * Shipping Rate
       * @description ID of an existing shipping rate to use for this invoice.
       * @default null
       */
      shipping_rate: string | null;
      /**
       * ShippingRateData
       * @description Parameters for a new ad-hoc shipping rate if `shipping_cost.shipping_rate` is not specified.
       * @default null
       */
      shipping_rate_data: {
          /**
           * Display Name
           * @description The name of the shipping rate, displayed to the customer.
           */
          display_name: string;
      } | null;
  } | null;
  /**
   * ShippingDetails
   * @description Shipping details for the invoice recipient.
   * @default null
   */
  shipping_details: {
      /**
       * Address
       * @description The full shipping address.
       */
      address: {
          /**
           * City
           * @description City, district, suburb, town, or village. Example: 'San Francisco'
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Two-letter country code (ISO 3166-1 alpha-2). Example: 'US'
           * @default null
           */
          country: string | null;
          /**
           * Line1
           * @description Street address, line 1. Example: '123 Main Street'
           * @default null
           */
          line1: string | null;
          /**
           * Line2
           * @description Street address, line 2 (e.g., apartment, suite). Example: 'Apt 4B'
           * @default null
           */
          line2: string | null;
          /**
           * Postal Code
           * @description ZIP or postal code. Example: '94107'
           * @default null
           */
          postal_code: string | null;
          /**
           * State
           * @description State, county, province, or region. Example: 'CA'
           * @default null
           */
          state: string | null;
      };
      /**
       * Name
       * @description The name of the recipient.
       */
      name: string;
      /**
       * Phone
       * @description The recipient's phone number.
       * @default null
       */
      phone: string | null;
  } | null;
  /**
   * Statement Descriptor
   * @description An arbitrary string to be displayed on the customer's credit card statement. This may be truncated to 22 characters.
   * @default null
   */
  statement_descriptor: string | null;
  /**
   * Subscription
   * @description The ID of the subscription to which this invoice belongs. If provided, the invoice will bill for the subscription's items.
   * @default null
   */
  subscription: string | null;
  /**
   * TransferData
   * @description For Stripe Connect, details of the destination account for transferring funds from this invoice.
   * @default null
   */
  transfer_data: {
      /**
       * Amount
       * @description Amount in cents (or smallest currency unit) to transfer. If not provided, the entire invoice amount (minus fees) is transferred.
       * @default null
       */
      amount: number | null;
      /**
       * Destination
       * @description The ID of the connected Stripe account to transfer funds to.
       */
      destination: string;
  } | null;
};

/**
 * Type of STRIPE's STRIPE_CREATE_INVOICE tool output.
 */
type STRIPE_CREATE_INVOICE_OUTPUT = {
  /**
   * Data
   * @description The full JSON response from the Stripe API representing the created invoice object.
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
 * Type of STRIPE's STRIPE_CREATE_PAYMENT_INTENT tool input.
 */
type STRIPE_CREATE_PAYMENT_INTENT_INPUT = {
  /**
   * Amount
   * @description Amount intended to be collected, specified in the smallest currency unit (e.g., 5000 for $50.00 USD).
   */
  amount?: number;
  /**
   * Application Fee Amount
   * @description Application fee (smallest currency unit) for the application owner. Requires platform authentication and `Stripe-Account` header for the connected account.
   * @default null
   */
  application_fee_amount: number | null;
  /**
   * AutomaticPaymentMethods
   * @description Settings to configure compatible payment methods from the Stripe Dashboard. If disabled, `payment_method_types` must be provided.
   * @default null
   */
  automatic_payment_methods: {
      /**
       * Allow Redirects
       * @description Controls whether redirect-based payment methods are allowed. Valid values are 'always' (allow redirects to external sites for completion) or 'never' (restrict to on-site methods).
       * @default null
       */
      allow_redirects: string | null;
      /**
       * Enabled
       * @description Whether Stripe should automatically manage and recommend payment methods to the customer.
       */
      enabled: boolean;
  } | null;
  /**
   * Confirm
   * @description Set to `true` to attempt to confirm this PaymentIntent immediately after creation. If the payment method requires any follow-up actions (e.g., 3D Secure authentication), this PaymentIntent will transition to a status requiring further action.
   * @default false
   */
  confirm: boolean;
  /**
   * Currency
   * @description Three-letter ISO currency code (e.g., 'usd', 'eur').
   */
  currency?: string;
  /**
   * Customer
   * @description ID of the Customer for this PaymentIntent, if one exists. Allows attaching payment method to Customer for future use.
   * @default null
   */
  customer: string | null;
  /**
   * Description
   * @description Arbitrary string for the PaymentIntent, displayed in Stripe dashboard and may be shown to customers.
   * @default null
   */
  description: string | null;
  /**
   * Metadata
   * @description Key-value pairs to attach to the PaymentIntent for storing additional structured information.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Off Session
   * @description Indicates if customer is absent (off-session, e.g., for renewals). If `true`, `payment_method` must be provided and `confirm` must be `true`.
   * @default null
   */
  off_session: boolean | null;
  /**
   * Payment Method
   * @description ID of PaymentMethod, Card, or compatible Source to attach. Required if `confirm` is `true` and `automatic_payment_methods` is not enabled, or if `off_session` is `true`.
   * @default null
   */
  payment_method: string | null;
  /**
   * PaymentMethodOptions
   * @description Payment-method-specific configuration for this PaymentIntent.
   * @default null
   */
  payment_method_options: {
      /**
       * Acss Debit
       * @description Payment-method-specific configuration for ACSS Direct Debit payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      acss_debit: {
          [key: string]: unknown;
      } | null;
      /**
       * Affirm
       * @description Payment-method-specific configuration for Affirm payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      affirm: {
          [key: string]: unknown;
      } | null;
      /**
       * Afterpay Clearpay
       * @description Payment-method-specific configuration for Afterpay Clearpay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      afterpay_clearpay: {
          [key: string]: unknown;
      } | null;
      /**
       * Alipay
       * @description Payment-method-specific configuration for Alipay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      alipay: {
          [key: string]: unknown;
      } | null;
      /**
       * Alma
       * @description Payment-method-specific configuration for Alma payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      alma: {
          [key: string]: unknown;
      } | null;
      /**
       * Amazon Pay
       * @description Payment-method-specific configuration for Amazon Pay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      amazon_pay: {
          [key: string]: unknown;
      } | null;
      /**
       * Au Becs Debit
       * @description Payment-method-specific configuration for AU BECS Direct Debit payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      au_becs_debit: {
          [key: string]: unknown;
      } | null;
      /**
       * Bacs Debit
       * @description Payment-method-specific configuration for Bacs Direct Debit payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      bacs_debit: {
          [key: string]: unknown;
      } | null;
      /**
       * Bancontact
       * @description Payment-method-specific configuration for Bancontact payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      bancontact: {
          [key: string]: unknown;
      } | null;
      /**
       * Blik
       * @description Payment-method-specific configuration for BLIK payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      blik: {
          [key: string]: unknown;
      } | null;
      /**
       * Boleto
       * @description Payment-method-specific configuration for Boleto payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      boleto: {
          [key: string]: unknown;
      } | null;
      /**
       * CardOptions
       * @description Configuration for card payments.
       * @default null
       */
      card: {
          /**
           * Capture Method
           * @description Controls when funds are captured: 'manual' (PaymentIntent captured later) or 'automatic' (authorized and captured immediately).
           * @default null
           */
          capture_method: string | null;
          /**
           * Cvc Token
           * @description CVC token ID from Stripe.js (e.g., `cvc_update` Element) or CVC recollection flow, for updating CVC of a saved card.
           * @default null
           */
          cvc_token: string | null;
          /**
           * CardInstallments
           * @description Configuration for card payment installments.
           * @default null
           */
          installments: {
              /**
               * Enabled
               * @description Indicates if installments are enabled for this card payment.
               * @default false
               */
              enabled: boolean;
              /**
               * CardInstallmentsPlan
               * @description Configuration for the installment plan if installments are enabled.
               * @default null
               */
              plan: {
                  /**
                   * Count
                   * @description Number of installment payments that make up the total amount.
                   */
                  count: number;
                  /**
                   * Interval
                   * @description The frequency of installment payments. Valid values are 'day', 'week', 'month', or 'year'.
                   */
                  interval: string;
                  /**
                   * Type
                   * @description Type of installment plan. Currently, the only supported value is 'fixed_count'.
                   */
                  type: string;
              } | null;
          } | null;
          /**
           * CardMandateOptions
           * @description Configuration for creating a mandate if `setup_future_usage` is used.
           * @default null
           */
          mandate_options: {
              /**
               * Amount
               * @description Amount for future payments in the smallest currency unit (e.g., 1000 for $10.00 USD), captured when the mandate is confirmed.
               */
              amount: number;
              /**
               * Amount Type
               * @description Specifies whether the 'amount' is a 'fixed' exact amount or a 'maximum' possible amount for multi-use mandates.
               */
              amount_type: string;
              /**
               * Description
               * @description A description of the mandate or subscription that will be displayed on the mandate form.
               * @default null
               */
              description: string | null;
              /**
               * End Date
               * @description Mandate end date (Unix timestamp), the latest date future payments can be charged.
               * @default null
               */
              end_date: number | null;
              /**
               * Interval
               * @description The frequency for which the mandate is valid. Valid values are 'day', 'week', 'month', 'year', or 'sporadic' for one-time use.
               */
              interval: string;
              /**
               * Interval Count
               * @description Number of intervals between mandate executions (e.g., if 'interval' is 'month' and 'interval_count' is 3, used every 3 months). Default is 1.
               * @default null
               */
              interval_count: number | null;
              /**
               * Reference
               * @description A unique identifier for the mandate or subscription, which will be displayed on the mandate form.
               */
              reference: string;
              /**
               * Start Date
               * @description Mandate start date (Unix timestamp), the earliest date future payments can be charged.
               */
              start_date: number;
              /**
               * Supported Types
               * @description List of payment method types (e.g., 'sepa_debit') supported for this mandate. If omitted, applies to all payment methods that support mandates.
               * @default null
               */
              supported_types: string[] | null;
          } | null;
          /**
           * Network
           * @description Preferred card network for co-branded cards (e.g., 'visa', 'mastercard'). Network support is brand and region specific.
           * @default null
           */
          network: string | null;
          /**
           * Request Three D Secure
           * @description Request 3D Secure authentication: 'automatic' (triggered by Stripe's risk engine or SCA rules) or 'any' (attempted for all eligible transactions).
           * @default null
           */
          request_three_d_secure: string | null;
          /**
           * Setup Future Usage
           * @description Indicates how this payment method should be saved for future use after this payment. Valid values are 'on_session' (customer is present) or 'off_session' (customer is not present).
           * @default null
           */
          setup_future_usage: string | null;
      } | null;
      /**
       * Card Present
       * @description Payment-method-specific configuration for Card Present (Stripe Terminal) payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      card_present: {
          [key: string]: unknown;
      } | null;
      /**
       * Cashapp
       * @description Payment-method-specific configuration for Cash App Pay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      cashapp: {
          [key: string]: unknown;
      } | null;
      /**
       * Customer Balance
       * @description Payment-method-specific configuration for Customer Balance payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      customer_balance: {
          [key: string]: unknown;
      } | null;
      /**
       * Eps
       * @description Payment-method-specific configuration for EPS payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      eps: {
          [key: string]: unknown;
      } | null;
      /**
       * Fpx
       * @description Payment-method-specific configuration for FPX payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      fpx: {
          [key: string]: unknown;
      } | null;
      /**
       * Giropay
       * @description Payment-method-specific configuration for Giropay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      giropay: {
          [key: string]: unknown;
      } | null;
      /**
       * Grabpay
       * @description Payment-method-specific configuration for GrabPay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      grabpay: {
          [key: string]: unknown;
      } | null;
      /**
       * Ideal
       * @description Payment-method-specific configuration for iDEAL payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      ideal: {
          [key: string]: unknown;
      } | null;
      /**
       * Interac Present
       * @description Payment-method-specific configuration for Interac Present (Stripe Terminal) payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      interac_present: {
          [key: string]: unknown;
      } | null;
      /**
       * Kakao Pay
       * @description Payment-method-specific configuration for Kakao Pay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      kakao_pay: {
          [key: string]: unknown;
      } | null;
      /**
       * Klarna
       * @description Payment-method-specific configuration for Klarna payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      klarna: {
          [key: string]: unknown;
      } | null;
      /**
       * Konbini
       * @description Payment-method-specific configuration for Konbini payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      konbini: {
          [key: string]: unknown;
      } | null;
      /**
       * Kr Card
       * @description Payment-method-specific configuration for Korean card payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      kr_card: {
          [key: string]: unknown;
      } | null;
      /**
       * Link
       * @description Payment-method-specific configuration for Link payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      link: {
          [key: string]: unknown;
      } | null;
      /**
       * Mobilepay
       * @description Payment-method-specific configuration for MobilePay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      mobilepay: {
          [key: string]: unknown;
      } | null;
      /**
       * Multibanco
       * @description Payment-method-specific configuration for Multibanco payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      multibanco: {
          [key: string]: unknown;
      } | null;
      /**
       * Naver Pay
       * @description Payment-method-specific configuration for Naver Pay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      naver_pay: {
          [key: string]: unknown;
      } | null;
      /**
       * Oxxo
       * @description Payment-method-specific configuration for OXXO payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      oxxo: {
          [key: string]: unknown;
      } | null;
      /**
       * P24
       * @description Payment-method-specific configuration for P24 (Przelewy24) payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      p24: {
          [key: string]: unknown;
      } | null;
      /**
       * Payco
       * @description Payment-method-specific configuration for PayCo payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      payco: {
          [key: string]: unknown;
      } | null;
      /**
       * Paynow
       * @description Payment-method-specific configuration for PayNow payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      paynow: {
          [key: string]: unknown;
      } | null;
      /**
       * Paypal
       * @description Payment-method-specific configuration for PayPal payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      paypal: {
          [key: string]: unknown;
      } | null;
      /**
       * Pix
       * @description Payment-method-specific configuration for Pix payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      pix: {
          [key: string]: unknown;
      } | null;
      /**
       * Promptpay
       * @description Payment-method-specific configuration for PromptPay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      promptpay: {
          [key: string]: unknown;
      } | null;
      /**
       * Revolut Pay
       * @description Payment-method-specific configuration for Revolut Pay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      revolut_pay: {
          [key: string]: unknown;
      } | null;
      /**
       * Samsung Pay
       * @description Payment-method-specific configuration for Samsung Pay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      samsung_pay: {
          [key: string]: unknown;
      } | null;
      /**
       * Sepa Debit
       * @description Payment-method-specific configuration for SEPA Direct Debit payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      sepa_debit: {
          [key: string]: unknown;
      } | null;
      /**
       * Sofort
       * @description Payment-method-specific configuration for Sofort payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      sofort: {
          [key: string]: unknown;
      } | null;
      /**
       * Swish
       * @description Payment-method-specific configuration for Swish payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      swish: {
          [key: string]: unknown;
      } | null;
      /**
       * Twint
       * @description Payment-method-specific configuration for TWINT payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      twint: {
          [key: string]: unknown;
      } | null;
      /**
       * Us Bank Account
       * @description Payment-method-specific configuration for US Bank Account (ACH) payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      us_bank_account: {
          [key: string]: unknown;
      } | null;
      /**
       * Wechat Pay
       * @description Payment-method-specific configuration for WeChat Pay payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      wechat_pay: {
          [key: string]: unknown;
      } | null;
      /**
       * Zip
       * @description Payment-method-specific configuration for Zip payments. Refer to Stripe's API documentation for structure.
       * @default null
       */
      zip: {
          [key: string]: unknown;
      } | null;
  } | null;
  /**
   * Payment Method Types
   * @description List of payment method types (e.g., 'card', 'alipay') this PaymentIntent can use. Required if `automatic_payment_methods` is disabled.
   * @default null
   */
  payment_method_types: string[] | null;
  /**
   * Receipt Email
   * @description Email address for receipt; if specified in live mode, receipt sent regardless of account email settings.
   * @default null
   */
  receipt_email: string | null;
  /**
   * Return Url
   * @description URL to redirect customer to after external authentication (e.g., 3D Secure). Required if `confirm` is `true` and payment method requires redirection.
   * @default null
   */
  return_url: string | null;
  /**
   * Setup Future Usage
   * @description Indicates intent to save payment method for future use: 'on_session' (customer present) or 'off_session' (customer absent).
   * @default null
   */
  setup_future_usage: string | null;
  /**
   * Shipping
   * @description Shipping information for this PaymentIntent. Required for certain payment methods or if calculating tax.
   * @default null
   */
  shipping: {
      /**
       * Address
       * @description Recipient's shipping address.
       */
      address: {
          /**
           * City
           * @description City, district, suburb, town, or village.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Two-letter country code (ISO 3166-1 alpha-2).
           * @default null
           */
          country: string | null;
          /**
           * Line1
           * @description Street address, line 1 (e.g., street, PO Box, or company name).
           */
          line1: string;
          /**
           * Line2
           * @description Street address, line 2 (e.g., apartment, suite, unit, or building).
           * @default null
           */
          line2: string | null;
          /**
           * Postal Code
           * @description ZIP or postal code.
           * @default null
           */
          postal_code: string | null;
          /**
           * State
           * @description State, county, province, or region.
           * @default null
           */
          state: string | null;
      };
      /**
       * Carrier
       * @description The delivery service that shipped a physical product (e.g., 'FedEx', 'UPS').
       * @default null
       */
      carrier: string | null;
      /**
       * Name
       * @description Recipient's full name.
       */
      name: string;
      /**
       * Phone
       * @description Recipient's phone number.
       * @default null
       */
      phone: string | null;
      /**
       * Tracking Number
       * @description The tracking number for a physical product, provided by the carrier.
       * @default null
       */
      tracking_number: string | null;
  } | null;
  /**
   * Statement Descriptor
   * @description String on customer's card statement (max 22 chars; no '<', '>', '"', "'"). Used as prefix if `statement_descriptor_suffix` is set.
   * @default null
   */
  statement_descriptor: string | null;
  /**
   * Statement Descriptor Suffix
   * @description Dynamic suffix for card statement (max 22 chars; no '<', '>', '"', "'"). Appended to main descriptor or account's default.
   * @default null
   */
  statement_descriptor_suffix: string | null;
};

/**
 * Type of STRIPE's STRIPE_CREATE_PAYMENT_INTENT tool output.
 */
type STRIPE_CREATE_PAYMENT_INTENT_OUTPUT = {
  /**
   * Data
   * @description Complete PaymentIntent object from Stripe, including status, amount, currency, client_secret, and other details.
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
 * Type of STRIPE's STRIPE_CREATE_PRICE tool input.
 */
type STRIPE_CREATE_PRICE_INPUT = {
  /**
   * Active
   * @description Whether the price can be used for new purchases. Defaults to true.
   * @default true
   */
  active: boolean;
  /**
   * Billing Scheme
   * @description Describes how to compute the price per period. Either 'per_unit' (default, for fixed price per unit) or 'tiered' (for volume-based or graduated tiers).
   * @default null
   */
  billing_scheme: string | null;
  /**
   * Currency
   * @description Three-letter ISO currency code (e.g., 'usd', 'eur'). Must be a supported currency.
   */
  currency?: string;
  /**
   * Currency Options
   * @description Prices defined in each supported currency. Useful for multi-currency pricing. The primary `currency`'s pricing can also be defined here.
   * @default null
   */
  currency_options: {
      [key: string]: {
          /**
           * @description Configuration for a customer-defined unit amount for this currency.
           * @default null
           */
          custom_unit_amount: {
              /**
               * Enabled
               * @description Pass `true` to enable `custom_unit_amount`, allowing the customer to set the price.
               */
              enabled: boolean;
              /**
               * Maximum
               * @description The maximum unit amount (in the smallest currency unit) the customer can specify.
               * @default null
               */
              maximum: number | null;
              /**
               * Minimum
               * @description The minimum unit amount (in the smallest currency unit) the customer can specify.
               * @default null
               */
              minimum: number | null;
              /**
               * Preset
               * @description The starting unit amount (in the smallest currency unit) that can be updated by the customer. This is the initial value presented.
               * @default null
               */
              preset: number | null;
          } | null;
          /**
           * Tax Behavior
           * @description Specifies whether the price already includes tax ('inclusive'), tax is added on top ('exclusive'), or tax behavior is not specified ('unspecified').
           * @default null
           */
          tax_behavior: string | null;
          /**
           * Tiers
           * @description A list of pricing tiers for this currency, if `billing_scheme` is 'tiered'.
           * @default null
           */
          tiers: {
              /**
               * Flat Amount
               * @description The flat billing amount for this tier in the currency (smallest unit).
               * @default null
               */
              flat_amount: number | null;
              /**
               * Flat Amount Decimal
               * @description Decimal string representation of `flat_amount` for this tier in the currency.
               * @default null
               */
              flat_amount_decimal: string | null;
              /**
               * Unit Amount
               * @description The per-unit billing amount for this tier in the currency (smallest unit).
               * @default null
               */
              unit_amount: number | null;
              /**
               * Unit Amount Decimal
               * @description Decimal string representation of `unit_amount` for this tier in the currency.
               * @default null
               */
              unit_amount_decimal: string | null;
              /**
               * Up To
               * @description Specifies the upper bound of this tier for the specific currency. Use 'inf' for the last tier.
               */
              up_to: number | string;
          }[] | null;
          /**
           * Unit Amount
           * @description The unit amount in the smallest currency unit for this currency. Required if not using `tiers` or `custom_unit_amount`.
           * @default null
           */
          unit_amount: number | null;
          /**
           * Unit Amount Decimal
           * @description Decimal string representation of `unit_amount` for this currency. Provides higher precision.
           * @default null
           */
          unit_amount_decimal: string | null;
      };
  } | null;
  /**
   * CustomUnitAmount
   * @description Configuration for a price where the unit amount is set by the customer at checkout.
   * @default null
   */
  custom_unit_amount: {
      /**
       * Enabled
       * @description Pass `true` to enable `custom_unit_amount`, allowing the customer to set the price.
       */
      enabled: boolean;
      /**
       * Maximum
       * @description The maximum unit amount (in the smallest currency unit) the customer can specify.
       * @default null
       */
      maximum: number | null;
      /**
       * Minimum
       * @description The minimum unit amount (in the smallest currency unit) the customer can specify.
       * @default null
       */
      minimum: number | null;
      /**
       * Preset
       * @description The starting unit amount (in the smallest currency unit) that can be updated by the customer. This is the initial value presented.
       * @default null
       */
      preset: number | null;
  } | null;
  /**
   * Lookup Key
   * @description A unique, user-defined key to retrieve this price. Case-sensitive.
   * @default null
   */
  lookup_key: string | null;
  /**
   * Metadata
   * @description A set of key-value pairs to store additional information about the price.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Nickname
   * @description A brief, internal-facing description of the price. Useful for distinguishing prices in listings.
   * @default null
   */
  nickname: string | null;
  /**
   * Product
   * @description The ID of the product this price is for. Required if `product_data` is not provided.
   * @default null
   */
  product: string | null;
  /**
   * ProductData
   * @description Fields for creating a new product if a `product` ID is not provided with the price.
   * @default null
   */
  product_data: {
      /**
       * Active
       * @description Whether the product is currently available for purchase. Defaults to true.
       * @default true
       */
      active: boolean | null;
      /**
       * Metadata
       * @description A set of key-value pairs to store additional information about the product.
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Name
       * @description The product’s name, meant to be displayable to the customer.
       */
      name: string;
      /**
       * Statement Descriptor
       * @description An arbitrary string to be displayed on the customer's credit card statement. This field is not available for all payment methods.
       * @default null
       */
      statement_descriptor: string | null;
      /**
       * Tax Code
       * @description A tax code ID that identifies the taxability of this product. Recommended for products that are subject to tax.
       * @default null
       */
      tax_code: string | null;
      /**
       * Unit Label
       * @description A label that represents units of this product. For example, 'user' or 'GB'.
       * @default null
       */
      unit_label: string | null;
  } | null;
  /**
   * Recurring
   * @description Specifies recurring components of a price, such as billing interval and usage type.
   * @default null
   */
  recurring: {
      /**
       * Aggregate Usage
       * @description For `usage_type=metered`, specifies how usage records are aggregated. Options include 'sum', 'last_during_period', 'last_ever', or 'max'. Defaults to 'sum'. This field is ignored if `usage_type` is 'licensed'.
       * @default null
       */
      aggregate_usage: string | null;
      /**
       * Interval
       * @description Specifies the billing frequency. Must be one of 'day', 'week', 'month', or 'year'.
       */
      interval: string;
      /**
       * Interval Count
       * @description The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Defaults to 1.
       * @default null
       */
      interval_count: number | null;
      /**
       * Meter
       * @description The ID of the meter from which to read usage when `usage_type=metered`. Required if `usage_type='metered'` and not using `product.meter`.
       * @default null
       */
      meter: string | null;
      /**
       * Usage Type
       * @description Configures how usage is calculated. Set to 'metered' to bill based on usage, or 'licensed' for a fixed quantity. Defaults to 'licensed'.
       * @default null
       */
      usage_type: string | null;
  } | null;
  /**
   * Tax Behavior
   * @description Specifies how tax is applied to the price. Options are 'inclusive' (tax is included), 'exclusive' (tax is added), or 'unspecified'.
   * @default null
   */
  tax_behavior: string | null;
  /**
   * Tiers
   * @description A list of pricing tiers. Required if `billing_scheme` is 'tiered'.
   * @default null
   */
  tiers: {
      /**
       * Flat Amount
       * @description The flat billing amount for an entire tier (in the smallest currency unit), if any. Cannot be used with `unit_amount`.
       * @default null
       */
      flat_amount: number | null;
      /**
       * Flat Amount Decimal
       * @description Same as `flat_amount`, but accepts a decimal string with up to 12 decimal places. Suitable for higher precision.
       * @default null
       */
      flat_amount_decimal: string | null;
      /**
       * Unit Amount
       * @description The per-unit billing amount in the smallest currency unit for this tier. Cannot be used with `flat_amount`.
       * @default null
       */
      unit_amount: number | null;
      /**
       * Unit Amount Decimal
       * @description Same as `unit_amount`, but accepts a decimal string with up to 12 decimal places. Suitable for higher precision.
       * @default null
       */
      unit_amount_decimal: string | null;
      /**
       * Up To
       * @description Specifies the upper bound of this tier. Can be an integer or 'inf' for the last tier (fallback tier).
       */
      up_to: number | null;
  }[] | null;
  /**
   * Tiers Mode
   * @description Defines how the quantity is applied to the tiers. Either 'graduated' (price is sum of costs from applicable tiers) or 'volume' (price is determined by the tier corresponding to the total quantity). Required if `billing_scheme` is 'tiered'.
   * @default null
   */
  tiers_mode: string | null;
  /**
   * Transfer Lookup Key
   * @description If `true`, allows this price to overwrite an existing price with the same `lookup_key`. Defaults to `false`.
   * @default null
   */
  transfer_lookup_key: boolean | null;
  /**
   * TransformQuantity
   * @description Contains information about how the quantity should be transformed before calculating the price.
   * @default null
   */
  transform_quantity: {
      /**
       * Divide By
       * @description Divide the reported usage quantity by this number.
       */
      divide_by: number;
      /**
       * Round
       * @description After division, specifies how the result should be rounded. Must be one of 'up' or 'down'.
       */
      round: string;
  } | null;
  /**
   * Unit Amount
   * @description The base charge amount in the smallest currency unit (e.g., cents for USD). Required if not using `tiers`, `custom_unit_amount`, or `currency_options` with a unit amount for the primary currency.
   * @default null
   */
  unit_amount: number | null;
  /**
   * Unit Amount Decimal
   * @description Same as `unit_amount`, but accepts a decimal string with up to 12 decimal places for higher precision. Required if not using `tiers`, `custom_unit_amount`, or `currency_options` with a unit amount for the primary currency and `unit_amount` is not provided.
   * @default null
   */
  unit_amount_decimal: string | null;
};

/**
 * Type of STRIPE's STRIPE_CREATE_PRICE tool output.
 */
type STRIPE_CREATE_PRICE_OUTPUT = {
  /**
   * Data
   * @description The full JSON response from Stripe API representing the created price object.
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
 * Type of STRIPE's STRIPE_CREATE_PRODUCT tool input.
 */
type STRIPE_CREATE_PRODUCT_INPUT = {
  /**
   * Active
   * @description Indicates if the product is available for purchase. Set to `false` to archive.
   * @default true
   */
  active: boolean;
  /**
   * Custom Fields
   * @description Custom fields displayed on invoices for sales (e.g., PO numbers).
   * @default null
   */
  custom_fields: {
      /**
       * Name
       * @description Name of the custom field for invoices.
       */
      name: string;
      /**
       * Value
       * @description Value of the custom field.
       */
      value: string;
  }[] | null;
  /**
   * DefaultPriceData
   * @description Data used to create a new Price object as the default price for this product.
   * @default null
   */
  default_price_data: {
      /**
       * Currency
       * @description Three-letter ISO currency code, lowercase. Must be a supported currency.
       */
      currency: string;
      /**
       * Currency Options
       * @description Per-currency pricing options. Keys are three-letter ISO currency codes. Values are dicts with price properties (e.g., `unit_amount`, `tax_behavior`) for that currency.
       * @default null
       */
      currency_options: {
          [key: string]: unknown;
      } | null;
      /**
       * Custom Unit Amount
       * @description Configuration for customer-adjustable unit amount (Checkout/Payment Links). Requires `enabled=True`. Can include `minimum`, `maximum`, `preset`.
       * @default null
       */
      custom_unit_amount: {
          [key: string]: unknown;
      } | null;
      /**
       * Recurring
       * @description Specifies a recurring payment plan for a price.
       * @default null
       */
      recurring: {
          /**
           * Interval
           * @description Frequency of subscription billing. Must be one of: `day`, `week`, `month`, or `year`.
           */
          interval: string;
          /**
           * Interval Count
           * @description Number of intervals between billings (e.g., `interval=month`, `interval_count=3` bills every 3 months). Defaults to 1 if not provided.
           * @default null
           */
          interval_count: number | null;
      } | null;
      /**
       * Tax Behavior
       * @description Tax treatment of the price. Must be one of: `inclusive`, `exclusive`, or `unspecified` (inherited from customer/subscription).
       * @default null
       */
      tax_behavior: string | null;
      /**
       * Unit Amount
       * @description Price in smallest currency unit (e.g., cents for USD). Zero allowed for free price.
       * @default null
       */
      unit_amount: number | null;
      /**
       * Unit Amount Decimal
       * @description Price as a decimal in smallest currency unit (max 12 decimal places). For fractions of a cent.
       * @default null
       */
      unit_amount_decimal: string | null;
  } | null;
  /**
   * Description
   * @description Product description, displayed to customers, providing more details.
   * @default null
   */
  description: string | null;
  /**
   * Id
   * @description Optional unique product identifier. Stripe generates one if omitted. Useful for idempotency or migrating existing IDs.
   * @default null
   */
  id: string | null;
  /**
   * Images
   * @description Up to 8 image URLs for display on product pages or checkout.
   * @default null
   */
  images: string[] | null;
  /**
   * Marketing Features
   * @description List of marketing features; short, benefit-oriented statements for pricing pages.
   * @default null
   */
  marketing_features: {
      /**
       * Name
       * @description Name of the marketing feature (max 80 characters).
       */
      name: string;
  }[] | null;
  /**
   * Metadata
   * @description Key-value pairs for storing additional structured information.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Name
   * @description Product's name, displayed to customers.
   */
  name?: string;
  /**
   * PackageDimensions
   * @description The dimensions of the product for shipping purposes. Required if the product is shippable and you use a shipping rate that calculates shipping costs based on dimensions.
   * @default null
   */
  package_dimensions: {
      /**
       * Height
       * @description Package height in inches (max 2 decimal places).
       */
      height: number;
      /**
       * Length
       * @description Package length in inches (max 2 decimal places).
       */
      length: number;
      /**
       * Weight
       * @description Package weight in ounces (max 2 decimal places).
       */
      weight: number;
      /**
       * Width
       * @description Package width in inches (max 2 decimal places).
       */
      width: number;
  } | null;
  /**
   * Shippable
   * @description Indicates if the product is a physical good requiring shipping.
   * @default null
   */
  shippable: boolean | null;
  /**
   * ShippingCost
   * @description Defines the shipping cost for the product, either by referencing an existing shipping rate or creating a new one.
   * @default null
   */
  shipping_cost: {
      /**
       * Shipping Rate
       * @description ID of an existing ShippingRate. If provided, `shipping_rate_data` must be omitted.
       * @default null
       */
      shipping_rate: string | null;
      /**
       * ShippingRateData
       * @description Parameters for creating a new ad-hoc shipping rate during product creation.
       * @default null
       */
      shipping_rate_data: {
          /**
           * Display Name
           * @description Shipping rate name displayed to customer.
           */
          display_name: string;
      } | null;
  } | null;
  /**
   * Statement Descriptor
   * @description String (max 22 chars) for customer credit card statements for charge recognition.
   * @default null
   */
  statement_descriptor: string | null;
  /**
   * Tax Code
   * @description Stripe tax code ID for determining tax rates on sales.
   * @default null
   */
  tax_code: string | null;
  /**
   * Unit Label
   * @description Label for product units to clarify quantity-based pricing.
   * @default null
   */
  unit_label: string | null;
  /**
   * Url
   * @description Publicly accessible URL for the product's webpage or landing page.
   * @default null
   */
  url: string | null;
};

/**
 * Type of STRIPE's STRIPE_CREATE_PRODUCT tool output.
 */
type STRIPE_CREATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Full JSON response from Stripe API representing the created product.
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
 * Type of STRIPE's STRIPE_CREATE_REFUND tool input.
 */
type STRIPE_CREATE_REFUND_INPUT = {
  /**
   * Amount
   * @description Amount in smallest currency unit (e.g., 1000 for $10.00 USD) to refund. If omitted, a full refund is issued. Cannot exceed the charge's remaining refundable amount.
   * @default null
   */
  amount: number | null;
  /**
   * Charge
   * @description Identifier of the charge to refund. Required if `payment_intent` is not provided.
   * @default null
   */
  charge: string | null;
  /**
   * Metadata
   * @description Key-value pairs to attach to the refund, for storing structured information like order numbers or internal IDs.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Payment Intent
   * @description Identifier of the PaymentIntent to refund. Required if `charge` is not provided.
   * @default null
   */
  payment_intent: string | null;
  /**
   * Reason
   * @description Specifies the reason for the refund (e.g., `duplicate`, `fraudulent`, or `requested_by_customer`).
   * @default null
   */
  reason: string | null;
  /**
   * Refund Application Fee
   * @description Refund the application fee? If true, full refunds refund the entire fee; partials refund proportionally. Applies if the original charge had an application fee.
   * @default null
   */
  refund_application_fee: boolean | null;
  /**
   * Reverse Transfer
   * @description Reverse an associated transfer? Reversal is proportional to refund amount. Applies if the original charge had a reversible transfer.
   * @default null
   */
  reverse_transfer: boolean | null;
};

/**
 * Type of STRIPE's STRIPE_CREATE_REFUND tool output.
 */
type STRIPE_CREATE_REFUND_OUTPUT = {
  /**
   * Data
   * @description The full Stripe Refund object detailing the created refund.
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
 * Type of STRIPE's STRIPE_CREATE_SUBSCRIPTION tool input.
 */
type STRIPE_CREATE_SUBSCRIPTION_INPUT = {
  /**
   * Add Invoice Items
   * @description One-time invoice items for the first invoice.
   * @default null
   */
  add_invoice_items: {
      /**
       * Discounts
       * @description Discounts for this invoice item.
       * @default null
       */
      discounts: {
          /**
           * Coupon
           * @description ID of the coupon to apply.
           * @default null
           */
          coupon: string | null;
          /**
           * Discount
           * @description ID of an existing discount object to apply (typically for ad-hoc discounts).
           * @default null
           */
          discount: string | null;
          /**
           * Promotion Code
           * @description ID of the promotion code to apply.
           * @default null
           */
          promotion_code: string | null;
      }[] | null;
      /**
       * Price
       * @description ID of the price object. One of `price` or `price_data` is required.
       * @default null
       */
      price: string | null;
      /**
       * PriceData
       * @description Data to generate a new price object inline.
       * @default null
       */
      price_data: {
          /**
           * Currency
           * @description Three-letter ISO currency code (lowercase).
           */
          currency: string;
          /**
           * Product
           * @description ID of the product associated with this price.
           */
          product: string;
          /**
           * Recurring
           * @description Recurring components of the price (e.g., interval, interval_count).
           * @default null
           */
          recurring: {
              [key: string]: unknown;
          } | null;
          /**
           * Unit Amount
           * @description Unit amount in the currency's smallest unit (e.g., cents for USD).
           */
          unit_amount: number;
      } | null;
      /**
       * Quantity
       * @description Quantity of the invoice item.
       * @default 1
       */
      quantity: number | null;
      /**
       * Tax Rates
       * @description Tax rates for this invoice item.
       * @default null
       */
      tax_rates: string[] | null;
  }[] | null;
  /**
   * Application Fee Percent
   * @description Percentage (0-100) of subscription amount as an application fee for the platform.
   * @default null
   */
  application_fee_percent: number | null;
  /**
   * AutomaticTax
   * @description Settings for Stripe's automatic tax calculation.
   * @default null
   */
  automatic_tax: {
      /**
       * Enabled
       * @description Enable automatic tax calculation by Stripe for this subscription.
       */
      enabled: boolean;
      /**
       * AutomaticTaxLiability
       * @description Account responsible for tax liabilities if automatic tax is enabled.
       * @default null
       */
      liability: {
          /**
           * Connected Account
           * @description Stripe Connect account ID liable for tax calculations and reporting.
           */
          connected_account: string;
      } | null;
  } | null;
  /**
   * Backdate Start Date
   * @description Unix timestamp to backdate the subscription's start.
   * @default null
   */
  backdate_start_date: number | null;
  /**
   * Billing Cycle Anchor
   * @description Unix timestamp to anchor the subscription's billing cycle.
   * @default null
   */
  billing_cycle_anchor: number | null;
  /**
   * BillingCycleAnchorConfig
   * @description Configure the billing cycle anchor using a specific day, hour, minute, etc.
   * @default null
   */
  billing_cycle_anchor_config: {
      /**
       * Day Of Month
       * @description Day of the month (1-31) to anchor the billing cycle.
       */
      day_of_month: number;
      /**
       * Hour
       * @description Hour of the day (0-23, UTC) for billing.
       * @default null
       */
      hour: number | null;
      /**
       * Minute
       * @description Minute of the hour (0-59, UTC) for billing.
       * @default null
       */
      minute: number | null;
      /**
       * Month
       * @description Month (1-12) to start billing.
       * @default null
       */
      month: number | null;
      /**
       * Second
       * @description Second of the minute (0-59, UTC) for billing.
       * @default null
       */
      second: number | null;
  } | null;
  /**
   * BillingThresholds
   * @description Subscription-level billing thresholds for metered billing.
   * @default null
   */
  billing_thresholds: {
      /**
       * Amount Gte
       * @description Monetary threshold (in smallest currency unit) to trigger billing.
       * @default null
       */
      amount_gte: number | null;
      /**
       * Reset Billing Cycle Anchor
       * @description Reset the billing cycle anchor to the threshold bill date.
       * @default null
       */
      reset_billing_cycle_anchor: boolean | null;
  } | null;
  /**
   * Cancel At
   * @description Unix timestamp to schedule subscription cancellation.
   * @default null
   */
  cancel_at: number | null;
  /**
   * Cancel At Period End
   * @description Cancel the subscription at the end of the current billing period.
   * @default false
   */
  cancel_at_period_end: boolean;
  /**
   * Collection Method
   * @description How to collect payment (e.g., `charge_automatically`, `send_invoice`).
   * @default charge_automatically
   * @enum {string}
   */
  collection_method: "charge_automatically" | "send_invoice";
  /**
   * Currency
   * @description Three-letter ISO currency code (lowercase) for the subscription.
   * @default null
   */
  currency: string | null;
  /**
   * Customer
   * @description ID of the existing Stripe customer.
   */
  customer?: string;
  /**
   * Days Until Due
   * @description Days until invoice is due (for `send_invoice` collection method).
   * @default null
   */
  days_until_due: number | null;
  /**
   * Default Payment Method
   * @description ID of the default payment method for this subscription (must be attached to customer).
   * @default null
   */
  default_payment_method: string | null;
  /**
   * Default Source
   * @description ID of default payment source (deprecated; use `default_payment_method`).
   * @default null
   */
  default_source: string | null;
  /**
   * Default Tax Rates
   * @description List of default tax rate IDs, overridable at item level.
   * @default null
   */
  default_tax_rates: string[] | null;
  /**
   * Description
   * @description Arbitrary string describing the subscription.
   * @default null
   */
  description: string | null;
  /**
   * Discounts
   * @description List of discounts for the entire subscription.
   * @default null
   */
  discounts: {
      /**
       * Coupon
       * @description ID of the coupon to apply.
       * @default null
       */
      coupon: string | null;
      /**
       * Discount
       * @description ID of an existing discount object to apply (typically for ad-hoc discounts).
       * @default null
       */
      discount: string | null;
      /**
       * Promotion Code
       * @description ID of the promotion code to apply.
       * @default null
       */
      promotion_code: string | null;
  }[] | null;
  /**
   * InvoiceSettings
   * @description Custom settings for invoices generated for this subscription.
   * @default null
   */
  invoice_settings: {
      /**
       * Account Tax Ids
       * @description List of tax ID objects (e.g., VAT numbers) for invoices. Must be Stripe-verified.
       * @default null
       */
      account_tax_ids: string[] | null;
      /**
       * Issuer
       * @description Entity issuing the invoice (e.g., company or individual), with details.
       * @default null
       */
      issuer: {
          [key: string]: unknown;
      } | null;
  } | null;
  /**
   * Items
   * @description List of items (products/services and pricing) for the subscription.
   */
  items?: {
      /**
       * BillingThresholds
       * @description Usage-based billing thresholds for this item.
       * @default null
       */
      billing_thresholds: {
          /**
           * Amount Gte
           * @description Monetary threshold (in smallest currency unit) to trigger billing.
           * @default null
           */
          amount_gte: number | null;
          /**
           * Reset Billing Cycle Anchor
           * @description Reset the billing cycle anchor to the threshold bill date.
           * @default null
           */
          reset_billing_cycle_anchor: boolean | null;
      } | null;
      /**
       * Discounts
       * @description List of discounts for this item, overriding subscription-level discounts.
       * @default null
       */
      discounts: {
          /**
           * Coupon
           * @description ID of the coupon to apply.
           * @default null
           */
          coupon: string | null;
          /**
           * Discount
           * @description ID of an existing discount object to apply (typically for ad-hoc discounts).
           * @default null
           */
          discount: string | null;
          /**
           * Promotion Code
           * @description ID of the promotion code to apply.
           * @default null
           */
          promotion_code: string | null;
      }[] | null;
      /**
       * Metadata
       * @description Key-value pairs for additional information about this item.
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Price
       * @description ID of the price object. One of `price` or `price_data` is required.
       * @default null
       */
      price: string | null;
      /**
       * PriceData
       * @description Data to generate a new price object inline. One of `price` or `price_data` is required.
       * @default null
       */
      price_data: {
          /**
           * Currency
           * @description Three-letter ISO currency code (lowercase).
           */
          currency: string;
          /**
           * Product
           * @description ID of the product associated with this price.
           */
          product: string;
          /**
           * Recurring
           * @description Recurring components of the price (e.g., interval, interval_count).
           * @default null
           */
          recurring: {
              [key: string]: unknown;
          } | null;
          /**
           * Unit Amount
           * @description Unit amount in the currency's smallest unit (e.g., cents for USD).
           */
          unit_amount: number;
      } | null;
      /**
       * Quantity
       * @description Quantity of the subscription item.
       * @default null
       */
      quantity: number | null;
      /**
       * Tax Rates
       * @description List of tax rate IDs to apply to this item, overriding defaults.
       * @default null
       */
      tax_rates: string[] | null;
  }[];
  /**
   * Metadata
   * @description Key-value pairs for additional information about the subscription.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Off Session
   * @description Allow initial payment attempt off-session (without direct customer interaction).
   * @default null
   */
  off_session: boolean | null;
  /**
   * On Behalf Of
   * @description Stripe Connect account ID for attributing payments (if charging on behalf of).
   * @default null
   */
  on_behalf_of: string | null;
  /**
   * PaymentBehavior
   * @description Behavior when initial payment fails or requires SCA.
   * @default null
   * @enum {string|null}
   */
  payment_behavior: "allow_incomplete" | "default_incomplete" | "error_if_incomplete" | "pending_if_incomplete" | null;
  /**
   * PaymentSettings
   * @description Advanced payment settings for the subscription, including payment method options.
   * @default null
   */
  payment_settings: {
      /**
       * PaymentMethodOptions
       * @description Settings for various payment methods, such as card or bank debits.
       * @default null
       */
      payment_method_options: {
          /**
           * Acss Debit
           * @description Configuration for Canadian ACSS Debit payments.
           * @default null
           */
          acss_debit: {
              [key: string]: unknown;
          } | null;
          /**
           * CardPaymentMethodOptions
           * @description Options specific to card-based payment methods.
           * @default null
           */
          card: {
              /**
               * Installments
               * @description Configuration for card installment payment options.
               * @default null
               */
              installments: {
                  [key: string]: unknown;
              } | null;
              /**
               * Network
               * @description Preferred card network (e.g., 'visa', 'mastercard').
               * @default null
               */
              network: string | null;
              /**
               * Request Three D Secure
               * @description When to request 3D Secure authentication for card payments.
               * @default null
               */
              request_three_d_secure: string | null;
          } | null;
          /**
           * Sepa Debit
           * @description Configuration for SEPA Direct Debit payments.
           * @default null
           */
          sepa_debit: {
              [key: string]: unknown;
          } | null;
      } | null;
      /**
       * Payment Method Types
       * @description Accepted payment method types (e.g., `card`, `acss_debit`).
       * @default null
       */
      payment_method_types: string[] | null;
      /**
       * SaveDefaultPaymentMethod
       * @description Controls how the payment method used for the subscription is saved.
       * @default null
       * @enum {string|null}
       */
      save_default_payment_method: "off" | "on_subscription" | null;
  } | null;
  /**
   * PendingInvoiceItemInterval
   * @description Configuration for generating pending invoice items for usage-based billing.
   * @default null
   */
  pending_invoice_item_interval: {
      /**
       * Interval
       * @description Frequency for generating pending invoice items.
       * @enum {string}
       */
      interval: "day" | "week" | "month" | "year";
      /**
       * Interval Count
       * @description Number of intervals between invoice item creation.
       * @default 1
       */
      interval_count: number | null;
  } | null;
  /**
   * Promotion Code
   * @description ID of the promotion code to apply.
   * @default null
   */
  promotion_code: string | null;
  /**
   * ProrationBehavior
   * @description How to handle prorations on subscription changes.
   * @default null
   * @enum {string|null}
   */
  proration_behavior: "always_invoice" | "create_prorations" | "none" | null;
  /**
   * TransferData
   * @description Data to specify a funds transfer to a connected Stripe account as part of this subscription.
   * @default null
   */
  transfer_data: {
      /**
       * Amount Percent
       * @description Percentage (1-100, up to 4 decimal places) of subscription amount to transfer.
       * @default null
       */
      amount_percent: number | null;
      /**
       * Destination
       * @description ID of the Stripe connected account receiving the transfer.
       */
      destination: string;
  } | null;
  /**
   * Trial End
   * @description Unix timestamp for trial end (can be 'now'). Overrides plan trial period.
   * @default null
   */
  trial_end: number | null;
  /**
   * Trial From Plan
   * @description Inherit trial period from the plan of the first item.
   * @default null
   */
  trial_from_plan: boolean | null;
  /**
   * Trial Period Days
   * @description Number of days for the trial period.
   * @default null
   */
  trial_period_days: number | null;
  /**
   * TrialSettings
   * @description Settings related to the subscription's trial period, specifically how it should end.
   * @default null
   */
  trial_settings: {
      /**
       * End Behavior
       * @description Behavior when trial period ends, including `missing_payment_method` handling.
       */
      end_behavior: {
          [key: string]: unknown;
      };
  } | null;
};

/**
 * Type of STRIPE's STRIPE_CREATE_SUBSCRIPTION tool output.
 */
type STRIPE_CREATE_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Full JSON response from Stripe API for the created subscription.
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
 * Type of STRIPE's STRIPE_DELETE_CUSTOMER tool input.
 */
type STRIPE_DELETE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description The ID of the customer to delete. Must start with 'cus_' followed by alphanumeric characters.
   */
  customer_id?: string;
};

/**
 * Type of STRIPE's STRIPE_DELETE_CUSTOMER tool output.
 */
type STRIPE_DELETE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Indicates the customer was successfully deleted.
       */
      deleted: boolean;
      /**
       * Id
       * @description The ID of the deleted customer.
       */
      id: string;
      /**
       * Object
       * @description String representing the object's type. Value is 'customer'.
       */
      object: string;
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
 * Type of STRIPE's STRIPE_LIST_CHARGES tool input.
 */
type STRIPE_LIST_CHARGES_INPUT = {
  /**
   * Created
   * @description Filters charges by creation date using a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values.
   */
  created?: {
      [key: string]: number;
  };
  /**
   * Customer
   * @description Filters charges by the specified customer ID.
   */
  customer?: string;
  /**
   * Ending Before
   * @description Object ID for pagination; fetches the previous page of charges relative to this cursor.
   */
  ending_before?: string;
  /**
   * Limit
   * @description Maximum number of charges to return (1-100, default is 10 if not specified).
   */
  limit?: number;
  /**
   * Payment Intent
   * @description Filters charges by the specified PaymentIntent ID.
   */
  payment_intent?: string;
  /**
   * Starting After
   * @description Object ID for pagination; fetches the next page of charges relative to this cursor.
   */
  starting_after?: string;
  /**
   * Transfer Group
   * @description Filters charges by the specified transfer group ID.
   */
  transfer_group?: string;
};

/**
 * Type of STRIPE's STRIPE_LIST_CHARGES tool output.
 */
type STRIPE_LIST_CHARGES_OUTPUT = {
  /**
   * Data
   * @description List of charge objects matching the query parameters.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of STRIPE's STRIPE_LIST_COUPONS tool input.
 */
type STRIPE_LIST_COUPONS_INPUT = {
  /**
   * Ending Before
   * @description A coupon ID for pagination. Returns items created before this object.
   * @default null
   */
  ending_before: string | null;
  /**
   * Limit
   * @description Maximum number of coupon objects to return. Stripe's default (usually 10) applies if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description A coupon ID for pagination. Returns items created after this object.
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of STRIPE's STRIPE_LIST_COUPONS tool output.
 */
type STRIPE_LIST_COUPONS_OUTPUT = {
  /**
   * Data
   * @description Array of `CouponData` objects. Empty if no coupons match or exist.
   */
  data?: {
      /**
       * Amount Off
       * @description Monetary amount (smallest currency unit, e.g., cents for USD) deducted. Present for fixed amount discounts.
       * @default null
       */
      amount_off: number | null;
      /**
       * Created
       * @description Timestamp (Unix epoch seconds) of coupon creation.
       */
      created: number;
      /**
       * Currency
       * @description Three-letter ISO currency code (e.g., 'usd'), lowercase. Present if `amount_off` is set.
       * @default null
       */
      currency: string | null;
      /**
       * Duration
       * @description Duration of discount: `forever`, `once`, or `repeating` (see `duration_in_months`).
       */
      duration: string;
      /**
       * Duration In Months
       * @description Number of months discount persists if `duration` is `repeating`.
       * @default null
       */
      duration_in_months: number | null;
      /**
       * Id
       * @description Unique identifier for the coupon. Example: `co_123xyz`
       */
      id: string;
      /**
       * Livemode
       * @description Indicates if created in live mode (`true`) or test mode (`false`).
       */
      livemode: boolean;
      /**
       * Max Redemptions
       * @description Maximum redemption count before invalidation. Null means unlimited.
       * @default null
       */
      max_redemptions: number | null;
      /**
       * Metadata
       * @description Key-value pairs for additional structured information. Example: `{'department': 'Marketing'}`.
       * @default {}
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Name of the coupon, displayable to customers. Example: `SUMMER25OFF`.
       * @default null
       */
      name: string | null;
      /**
       * Object
       * @description Object type; always 'coupon' for coupons.
       */
      object: string;
      /**
       * Percent Off
       * @description Percentage discount (e.g., 25 for 25%). Present for percentage-based discounts.
       * @default null
       */
      percent_off: number | null;
      /**
       * Redeem By
       * @description Expiration timestamp (Unix epoch seconds). Null if no specific expiration, though `max_redemptions` or deactivation may still apply.
       * @default null
       */
      redeem_by: number | null;
      /**
       * Times Redeemed
       * @description Number of times this coupon has been redeemed.
       */
      times_redeemed: number;
      /**
       * Valid
       * @description Indicates if the coupon is currently valid and redeemable (e.g., not expired, within `max_redemptions`, not deactivated).
       */
      valid: boolean;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description `true` if more coupon objects are available via pagination.
   */
  has_more?: boolean;
  /**
   * Object
   * @description Object type; always 'list' for a list of coupons.
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Url
   * @description API URL of the retrieved list, typically `/v1/coupons`.
   */
  url?: string;
};

/**
 * Type of STRIPE's STRIPE_LIST_CUSTOMERS tool input.
 */
type STRIPE_LIST_CUSTOMERS_INPUT = {
  /**
   * Created
   * @description Filters by creation date. Use a dictionary with keys like 'gte', 'lte', 'gt', 'lt' and Unix timestamp values (e.g., {'gte': 1609459200, 'lte': 1640995200}).
   */
  created?: {
      [key: string]: number;
  };
  /**
   * Email
   * @description Filters customers by a case-sensitive email address.
   */
  email?: string;
  /**
   * Ending Before
   * @description Pagination cursor; retrieves objects created before the specified object ID to fetch the previous page.
   */
  ending_before?: string;
  /**
   * Limit
   * @description Maximum number of customer objects to return (range 1-100). Defaults to 10 if unspecified.
   */
  limit?: number;
  /**
   * Starting After
   * @description Pagination cursor; retrieves objects created after the specified object ID to fetch the next page.
   */
  starting_after?: string;
  /**
   * Test Clock
   * @description Filters customers by the specified test clock ID. If omitted, returns only live mode customers.
   */
  test_clock?: string;
};

/**
 * Type of STRIPE's STRIPE_LIST_CUSTOMERS tool output.
 */
type STRIPE_LIST_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description A list of customer objects matching the filter criteria, each represented as a dictionary.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of STRIPE's STRIPE_LIST_CUSTOMER_PAYMENT_METHODS tool input.
 */
type STRIPE_LIST_CUSTOMER_PAYMENT_METHODS_INPUT = {
  /**
   * Customer Id
   * @description The unique identifier of the customer whose payment methods are to be retrieved.
   */
  customer_id?: string;
  /**
   * Ending Before
   * @description Pagination cursor; ID of the first object from a previous request to fetch the preceding page.
   * @default null
   */
  ending_before: string | null;
  /**
   * Limit
   * @description Limit on the number of payment methods returned. If not specified, Stripe's default limit (typically 10) applies.
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description Pagination cursor; ID of the last object from a previous request to fetch the next page.
   * @default null
   */
  starting_after: string | null;
  /**
   * Type
   * @description Filters the list by payment method type (e.g., 'card', 'sepa_debit').
   * @default null
   */
  type: string | null;
};

/**
 * Type of STRIPE's STRIPE_LIST_CUSTOMER_PAYMENT_METHODS tool output.
 */
type STRIPE_LIST_CUSTOMER_PAYMENT_METHODS_OUTPUT = {
  /**
   * Data
   * @description An array of PaymentMethod objects that are attached to the specified customer and match the filter criteria. The list will be empty if the customer has no payment methods or if the filters result in no matches.
   */
  data?: unknown[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description True if this list of payment methods is part of a larger set and there are more items to retrieve. If true, the `id` of the last payment method in the `data` array can be used as the `starting_after` parameter in a subsequent request to fetch the next page.
   */
  has_more?: boolean;
  /**
   * Object
   * @description String indicating the type of object. For this response, the value is consistently 'list'.
   * @default list
   */
  object: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Url
   * @description The URL of the API endpoint that was requested to retrieve this list of payment methods.
   */
  url?: string;
};

/**
 * Type of STRIPE's STRIPE_LIST_INVOICES tool input.
 */
type STRIPE_LIST_INVOICES_INPUT = {
  /**
   * Collection Method
   * @description Filter by collection method: 'charge_automatically' (Stripe attempts auto-charge) or 'send_invoice' (Stripe emails invoice); if omitted, returns invoices with any collection method.
   */
  collection_method?: string;
  /**
   * Created
   * @description Filter invoices by their creation date. Use keys like 'gt' (greater than), 'gte' (greater than or equal to), 'lt' (less than), 'lte' (less than or equal to) with Unix timestamp values to specify a range.
   */
  created?: {
      [key: string]: number;
  };
  /**
   * Customer
   * @description ID of the customer whose invoices to retrieve; if omitted, invoices for all customers may be returned.
   */
  customer?: string;
  /**
   * Ending Before
   * @description Cursor for backward pagination; an invoice ID from a previous response that defines the end of the current page, used to fetch the preceding page.
   */
  ending_before?: string;
  /**
   * Limit
   * @description Maximum number of invoice objects to return (1-100). Defaults to 10 if not specified.
   */
  limit?: number;
  /**
   * Starting After
   * @description Cursor for forward pagination; an invoice ID from a previous response that defines the end of the current page, used to fetch the subsequent page.
   */
  starting_after?: string;
  /**
   * Status
   * @description Filter invoices by status: 'draft', 'open', 'paid', 'uncollectible', or 'void'; if omitted, returns invoices with any status.
   */
  status?: string;
  /**
   * Subscription
   * @description ID of the subscription whose invoices to retrieve; if omitted, invoices for all subscriptions may be returned.
   */
  subscription?: string;
};

/**
 * Type of STRIPE's STRIPE_LIST_INVOICES tool output.
 */
type STRIPE_LIST_INVOICES_OUTPUT = {
  /**
   * Data
   * @description List of retrieved invoice objects; empty if no invoices match the filter criteria.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of STRIPE's STRIPE_LIST_PAYMENT_INTENTS tool input.
 */
type STRIPE_LIST_PAYMENT_INTENTS_INPUT = {
  /**
   * Created
   * @description Filter by creation date using Unix timestamps. Accepted keys: 'gte', 'lte', 'gt', 'lt'.
   */
  created?: {
      [key: string]: number;
  };
  /**
   * Customer
   * @description ID of the customer to filter PaymentIntents by.
   */
  customer?: string;
  /**
   * Ending Before
   * @description Cursor for paginating backwards, typically a PaymentIntent ID, to fetch the previous page.
   */
  ending_before?: string;
  /**
   * Limit
   * @description Maximum number of PaymentIntents to return (1-100, inclusive). Stripe defaults to 10 if not provided.
   */
  limit?: number;
  /**
   * Starting After
   * @description Cursor for paginating forwards, typically a PaymentIntent ID, to fetch the next page.
   */
  starting_after?: string;
};

/**
 * Type of STRIPE's STRIPE_LIST_PAYMENT_INTENTS tool output.
 */
type STRIPE_LIST_PAYMENT_INTENTS_OUTPUT = {
  /**
   * Data
   * @description A list of PaymentIntent objects retrieved from Stripe, conforming to the specified query parameters. Each object in the list is a dictionary representing a PaymentIntent.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of STRIPE's STRIPE_LIST_PAYMENT_LINKS tool input.
 */
type STRIPE_LIST_PAYMENT_LINKS_INPUT = {
  /**
   * Active
   * @description Filter by active status. `true` for active, `false` for inactive.
   * @default null
   */
  active: boolean | null;
  /**
   * Ending Before
   * @description Object ID for backward pagination; retrieves items created before this ID.
   * @default null
   */
  ending_before: string | null;
  /**
   * Limit
   * @description Maximum number of items to return (1-100, inclusive). Stripe API defaults to 10 if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description Object ID for forward pagination; retrieves items created after this ID.
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of STRIPE's STRIPE_LIST_PAYMENT_LINKS tool output.
 */
type STRIPE_LIST_PAYMENT_LINKS_OUTPUT = {
  /**
   * Data
   * @description List of payment link objects.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of STRIPE's STRIPE_LIST_PRODUCTS tool input.
 */
type STRIPE_LIST_PRODUCTS_INPUT = {
  /**
   * Active
   * @description Filter products based on their active status. Set to `True` to return only active products, or `False` for inactive ones.
   */
  active?: boolean;
  /**
   * Created
   * @description Filters products by their creation date range. Provide a dictionary with keys like 'gt' (greater than), 'gte' (greater than or equal to), 'lt' (less than), or 'lte' (less than or equal to) and Unix timestamp values (seconds since epoch). For instance, `{'gte': 1609459200, 'lte': 1640995200}` filters for products created from January 1, 2021, to January 1, 2022.
   */
  created?: {
      [key: string]: number;
  };
  /**
   * Ending Before
   * @description A cursor for use in pagination to fetch the previous page of results. `ending_before` is an object ID that defines your place in the list. For instance, if a list request returns objects ending with `prod_XYZ`, your subsequent call can include `ending_before='prod_XYZ'` to fetch the previous page.
   */
  ending_before?: string;
  /**
   * Ids
   * @description A list of product IDs to retrieve. If provided, only products with these specific IDs will be returned.
   */
  ids?: string[];
  /**
   * Limit
   * @description A limit on the number of product objects to be returned. The value must be an integer between 1 and 100, inclusive. If not specified, the default is 10.
   */
  limit?: number;
  /**
   * Shippable
   * @description Filter products based on whether they are shippable. Set to `True` to return only shippable products, or `False` for non-shippable ones.
   */
  shippable?: boolean;
  /**
   * Starting After
   * @description A cursor for use in pagination to fetch the next page of results. `starting_after` is an object ID that defines your place in the list. For instance, if a list request returns objects and the last object's ID is `prod_ABC`, your subsequent call can include `starting_after='prod_ABC'` to fetch the next page.
   */
  starting_after?: string;
  /**
   * Url
   * @description Filter products by a specific URL. Only products with this exact URL will be returned.
   */
  url?: string;
};

/**
 * Type of STRIPE's STRIPE_LIST_PRODUCTS tool output.
 */
type STRIPE_LIST_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description A list of product objects matching the query criteria. Each object in the list is a dictionary representing a Stripe product. If no products match, an empty list is returned.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of STRIPE's STRIPE_LIST_REFUNDS tool input.
 */
type STRIPE_LIST_REFUNDS_INPUT = {
  /**
   * Charge
   * @description Filters refunds to those for the specified Charge ID.
   * @default null
   */
  charge: string | null;
  /**
   * Ending Before
   * @description A cursor for pagination; returns only refunds created before this object ID.
   * @default null
   */
  ending_before: string | null;
  /**
   * Limit
   * @description Limit on the number of refunds to be returned. Stripe API defaults to 10 if unspecified.
   * @default null
   */
  limit: number | null;
  /**
   * Payment Intent
   * @description Filters refunds to those for the specified PaymentIntent ID.
   * @default null
   */
  payment_intent: string | null;
  /**
   * Starting After
   * @description A cursor for pagination; returns only refunds created after this object ID.
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of STRIPE's STRIPE_LIST_REFUNDS tool output.
 */
type STRIPE_LIST_REFUNDS_OUTPUT = {
  /**
   * Data
   * @description A list of refund objects matching the query criteria, ordered by creation date in descending order.
   */
  data?: {
      /**
       * Amount
       * @description Amount refunded, in the smallest currency unit (e.g., cents for USD, yen for JPY).
       */
      amount: number;
      /**
       * Balance Transaction
       * @description ID of the balance transaction reflecting this refund's impact on the account balance.
       * @default null
       */
      balance_transaction: string | null;
      /**
       * Charge
       * @description ID of the charge that was refunded.
       * @default null
       */
      charge: string | null;
      /**
       * Created
       * @description Timestamp (in seconds since the Unix epoch) indicating when the refund object was created.
       */
      created: number;
      /**
       * Currency
       * @description Three-letter ISO currency code (e.g., 'usd', 'eur') representing the currency of the refund.
       */
      currency: string;
      /**
       * Id
       * @description Unique identifier for the refund object. (e.g., 're_1KvLBN2eZvKYlo2Cl2u0nZLJ')
       */
      id: string;
      /**
       * Metadata
       * @description A set of key-value pairs that you can attach to a refund object. Useful for storing additional, structured information about the refund.
       */
      metadata?: {
          [key: string]: unknown;
      };
      /**
       * Object
       * @description String representing the object's type. For refund objects, the value is 'refund'.
       */
      object: string;
      /**
       * Payment Intent
       * @description ID of the PaymentIntent for the charge that was refunded.
       * @default null
       */
      payment_intent: string | null;
      /**
       * Reason
       * @description Reason for the refund (e.g., 'duplicate', 'fraudulent', 'requested_by_customer').
       * @default null
       */
      reason: string | null;
      /**
       * Receipt Number
       * @description Receipt number for this refund, displayable to the customer.
       * @default null
       */
      receipt_number: string | null;
      /**
       * Status
       * @description The current status of the refund. Possible values: 'pending', 'succeeded', 'failed', 'canceled'. 'requires_action' may also appear for certain payment methods.
       */
      status: string;
      /**
       * Transfer Reversal
       * @description ID of the transfer reversal if the refund is associated with a reversed transfer.
       * @default null
       */
      transfer_reversal: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description A boolean flag indicating whether there are more refunds available beyond the current list. If true, use the ID of the last refund in the 'data' array as the 'starting_after' parameter in a subsequent request to fetch the next page.
   */
  has_more?: boolean;
  /**
   * Object
   * @description String representing the object's type. Always 'list' for this response.
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Url
   * @description The API URL endpoint from which this list of refunds was fetched.
   */
  url?: string;
};

/**
 * Type of STRIPE's STRIPE_LIST_SHIPPING_RATES tool input.
 */
type STRIPE_LIST_SHIPPING_RATES_INPUT = {
  /**
   * Active
   * @description A filter on the list based on the object’s `active` field. If true, only active shipping rates are returned. If false, only inactive shipping rates are returned.
   * @default null
   */
  active: boolean | null;
  /**
   * Created
   * @description A filter on the list based on the object’s `created` field. This can be a Unix timestamp (integer) or a dictionary with the following options for ranged queries: `gt` (greater than), `gte` (greater than or equal to), `lt` (less than), `lte` (less than or equal to). Example for a ranged query: `{"gte": 1609459200}` for rates created on or after Jan 1, 2021 UTC.
   * @default null
   */
  created: {
      [key: string]: unknown;
  } | null;
  /**
   * Currency
   * @description Only return shipping rates for the given three-letter ISO currency code (e.g., `usd`), in lowercase. Must be a 3-letter ISO code.
   * @default null
   */
  currency: string | null;
  /**
   * Ending Before
   * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `sr_foo`, your subsequent call can include `ending_before=sr_foo` in order to fetch the previous page of the list.
   * @default null
   */
  ending_before: string | null;
  /**
   * Limit
   * @description A limit on the number of objects to be returned. The Stripe API defaults to 10 if not provided; value must be between 1 and 100.
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `sr_foo`, your subsequent call can include `starting_after=sr_foo` in order to fetch the next page of the list.
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of STRIPE's STRIPE_LIST_SHIPPING_RATES tool output.
 */
type STRIPE_LIST_SHIPPING_RATES_OUTPUT = {
  /**
   * Data
   * @description A list of shipping rate objects matching the query.
   */
  data?: {
      /**
       * Active
       * @description Indicates whether this shipping rate can be used for new purchases.
       */
      active: boolean;
      /**
       * Created
       * Format: date-time
       * @description Timestamp of when the object was created, in UTC.
       */
      created: string;
      /**
       * Display Name
       * @description The name of the shipping rate, suitable for display to customers (e.g., 'Express shipping').
       * @default null
       */
      display_name: string | null;
      /**
       * ShippingRateFixedAmount
       * @description Model for fixed amount details in shipping rate.
       * @default null
       */
      fixed_amount: {
          /**
           * Amount
           * @description The amount in the smallest currency unit (e.g., cents for USD).
           */
          amount: number;
          /**
           * Currency
           * @description The three-letter ISO currency code, in lowercase (e.g., 'usd').
           */
          currency: string;
      } | null;
      /**
       * Id
       * @description Unique identifier for the shipping rate.
       */
      id: string;
      /**
       * Metadata
       * @description A set of key-value pairs that you can attach to a shipping rate object. It can be useful for storing additional information about the object in a structured format.
       */
      metadata?: {
          [key: string]: unknown;
      };
      /**
       * Tax Behavior
       * @description Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. If `unspecified`, the Stripe Tax setting for the tax behavior of the line item’s price is used.
       * @default null
       */
      tax_behavior: string | null;
      /**
       * Type
       * @description The type of calculation to use on the shipping rate. The only supported value is `fixed_amount`.
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description True if this list has more pages of items after this page, false otherwise.
   */
  has_more?: boolean;
  /**
   * Object
   * @description String representing the object's type. Objects of the same type share the same value. Always `list` for this response.
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Url
   * @description The URL for accessing this list of shipping rates.
   */
  url?: string;
};

/**
 * Type of STRIPE's STRIPE_LIST_SUBSCRIPTIONS tool input.
 */
type STRIPE_LIST_SUBSCRIPTIONS_INPUT = {
  /**
   * Automatic Tax
   * @description Filter subscriptions by automatic tax settings, e.g., {'enabled': True}.
   */
  automatic_tax?: {
      [key: string]: unknown;
  };
  /**
   * Collection Method
   * @description Filter subscriptions by collection method: 'charge_automatically' or 'send_invoice'.
   */
  collection_method?: string;
  /**
   * Created
   * @description Filter subscriptions by creation date using comparison keys (e.g., 'gte', 'lt') and Unix timestamp values.
   */
  created?: {
      [key: string]: number;
  };
  /**
   * Current Period End
   * @description Filter subscriptions by the end date of the current billing period, using comparison keys (e.g., 'gt', 'gte') and Unix timestamp values.
   */
  current_period_end?: {
      [key: string]: number;
  };
  /**
   * Current Period Start
   * @description Filter subscriptions by the start date of the current billing period, using comparison keys (e.g., 'lt', 'lte') and Unix timestamp values.
   */
  current_period_start?: {
      [key: string]: number;
  };
  /**
   * Customer
   * @description ID of the customer whose subscriptions will be retrieved.
   */
  customer?: string;
  /**
   * Ending Before
   * @description Cursor for paginating backwards; provide the ID of the subscription that should end the list.
   */
  ending_before?: string;
  /**
   * Limit
   * @description Limit on the number of subscription objects to return (1-100). Default is 10.
   */
  limit?: number;
  /**
   * Price
   * @description ID of the recurring price to filter subscriptions by.
   */
  price?: string;
  /**
   * Starting After
   * @description Cursor for paginating forwards; provide the ID of the subscription that should start the list.
   */
  starting_after?: string;
  /**
   * Status
   * @description Filter subscriptions by status (e.g., 'active', 'all', 'canceled'). Defaults to non-canceled statuses if unspecified.
   */
  status?: string;
  /**
   * Test Clock
   * @description Filter subscriptions by a specific test clock ID (only applicable in test mode).
   */
  test_clock?: string;
};

/**
 * Type of STRIPE's STRIPE_LIST_SUBSCRIPTIONS tool output.
 */
type STRIPE_LIST_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description A list of subscription objects from Stripe, matching the query.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of STRIPE's STRIPE_LIST_TAX_CODES tool input.
 */
type STRIPE_LIST_TAX_CODES_INPUT = {
  /**
   * Ending Before
   * @description Object ID cursor to fetch the previous page of results.
   * @default null
   */
  ending_before: string | null;
  /**
   * Limit
   * @description Maximum number of objects to return. API defaults to 10 if this parameter is omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description Object ID cursor to fetch the next page of results.
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of STRIPE's STRIPE_LIST_TAX_CODES tool output.
 */
type STRIPE_LIST_TAX_CODES_OUTPUT = {
  /**
   * Data
   * @description List of tax code objects; empty if none are available.
   */
  data?: {
      /**
       * Description
       * @description Detailed description of the product or service types this tax code represents.
       */
      description: string;
      /**
       * Id
       * @description Unique identifier for the tax code object. Example: `txcd_123...`
       */
      id: string;
      /**
       * Name
       * @description Short, human-readable name for the tax code. Example: `General - Tangible Goods`.
       */
      name: string;
      /**
       * Object
       * @description Object's type, consistently `tax_code`.
       */
      object: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description Indicates if more tax codes are available. If true, use the ID of the last item with `starting_after` to fetch the next page.
   */
  has_more?: boolean;
  /**
   * Object
   * @description Object's type, consistently `list`.
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Url
   * @description The API endpoint URL used to retrieve this list.
   */
  url?: string;
};

/**
 * Type of STRIPE's STRIPE_LIST_TAX_RATES tool input.
 */
type STRIPE_LIST_TAX_RATES_INPUT = {
  /**
   * Active
   * @description Filter tax rates by their active status. Set to `true` for active tax rates and `false` for inactive (archived) tax rates.
   * @default null
   */
  active: boolean | null;
  /**
   * Created
   * @description Filter tax rates by their creation date. Accepts a dictionary with keys like `gt` (greater than), `gte` (greater than or equal to), `lt` (less than), or `lte` (less than or equal to), and Unix timestamp values.
   * @default null
   */
  created: {
      [key: string]: unknown;
  } | null;
  /**
   * Ending Before
   * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `ending_before=obj_foo` in order to fetch the previous page of objects.
   * @default null
   */
  ending_before: string | null;
  /**
   * Inclusive
   * @description Filter tax rates by whether they are inclusive. Set to `true` for inclusive tax rates and `false` for exclusive tax rates.
   * @default null
   */
  inclusive: boolean | null;
  /**
   * Limit
   * @description A limit on the number of tax rates to be returned. The value must be between 1 and 100, inclusive. The default is 10.
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `starting_after=obj_bar` in order to fetch the next page of objects.
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of STRIPE's STRIPE_LIST_TAX_RATES tool output.
 */
type STRIPE_LIST_TAX_RATES_OUTPUT = {
  /**
   * Data
   * @description A list of tax rate objects that match the specified criteria.
   */
  data?: {
      /**
       * Active
       * @description Indicates whether the tax rate is active or inactive (archived). Inactive tax rates can no longer be applied to new transactions.
       */
      active: boolean;
      /**
       * Country
       * @description Two-letter country code (ISO 3166-1 alpha-2) of the tax rate, if applicable. For example, 'US'.
       * @default null
       */
      country: string | null;
      /**
       * Created
       * @description Timestamp (Unix epoch seconds) indicating when the tax rate was created.
       */
      created: number;
      /**
       * Description
       * @description An optional internal description of the tax rate, for your own reference. It is not displayed to customers.
       * @default null
       */
      description: string | null;
      /**
       * Display Name
       * @description The display name of the tax rate, which will be shown to customers. For example, 'Sales Tax' or 'VAT'.
       */
      display_name: string;
      /**
       * Id
       * @description Unique identifier for the tax rate object.
       */
      id: string;
      /**
       * Inclusive
       * @description Indicates whether the `percentage` is added to or included in the base amount. `true` means the tax is included in the total price, `false` means it is added to the subtotal.
       */
      inclusive: boolean;
      /**
       * Jurisdiction
       * @description The jurisdiction for which this tax rate is applicable (e.g., 'CA' for California in the US, or 'DE' for Germany).
       * @default null
       */
      jurisdiction: string | null;
      /**
       * Livemode
       * @description A boolean value indicating whether the object was created in live mode (`true`) or test mode (`false`).
       */
      livemode: boolean;
      /**
       * Metadata
       * @description A set of key-value pairs that you can attach to a tax rate object. It can be useful for storing additional information about the object in a structured format. Not visible to customers.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Object
       * @description String representing the object's type. For tax rates, this is typically `tax_rate`.
       */
      object: string;
      /**
       * Percentage
       * @description The tax rate percentage (e.g., 10.5 for 10.5%). This value is out of 100.
       */
      percentage: number;
      /**
       * State
       * @description The state, county, province, or region of the tax rate, if applicable (e.g., 'CA').
       * @default null
       */
      state: string | null;
      /**
       * Tax Type
       * @description The type of the tax. Possible values include `vat`, `gst`, `pst`, `qst`, `sales_tax`, or a custom tax type, depending on the jurisdiction.
       * @default null
       */
      tax_type: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description A boolean value indicating whether there are more tax rates available in the list beyond the current page. `true` if there are more items, `false` otherwise.
   */
  has_more?: boolean;
  /**
   * Object
   * @description String representing the object's type. For a list of tax rates, this is typically `list`.
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Url
   * @description The URL for this list of tax rates. This can be used to fetch the current page directly.
   */
  url?: string;
};

/**
 * Type of STRIPE's STRIPE_RETRIEVE_BALANCE tool input.
 */
type STRIPE_RETRIEVE_BALANCE_INPUT = object;

/**
 * Type of STRIPE's STRIPE_RETRIEVE_BALANCE tool output.
 */
type STRIPE_RETRIEVE_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Detailed Stripe account balance object. Includes breakdowns of 'available' and 'pending' funds by currency/source types. Key details: 'object' (type, e.g., 'balance'), 'available' (immediately usable funds), 'pending' (funds not yet available), 'livemode' (live/test mode status).
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
 * Type of STRIPE's STRIPE_RETRIEVE_CHARGE tool input.
 */
type STRIPE_RETRIEVE_CHARGE_INPUT = {
  /**
   * Charge Id
   * @description Identifier for the charge, typically starting with 'ch_'.
   */
  charge_id?: string;
};

/**
 * Type of STRIPE's STRIPE_RETRIEVE_CHARGE tool output.
 */
type STRIPE_RETRIEVE_CHARGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount in the smallest currency unit (e.g., 100 for $1.00 or ¥100).
       */
      amount: number;
      /**
       * Created
       * @description Creation timestamp (Unix epoch seconds).
       */
      created: number;
      /**
       * Currency
       * @description Three-letter ISO currency code, lowercase (e.g., usd, gbp, eur).
       */
      currency: string;
      /**
       * Customer
       * @description Associated customer ID.
       * @default null
       */
      customer: string | null;
      /**
       * Description
       * @description Arbitrary string, often useful for user display.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique charge identifier.
       */
      id: string;
      /**
       * Metadata
       * @description Key-value pairs for storing additional structured information.
       */
      metadata?: {
          [key: string]: unknown;
      };
      /**
       * Payment Method Details
       * @description Details of the payment method used; structure varies by type (e.g., card, bank transfer).
       */
      payment_method_details: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Charge status: `succeeded`, `pending`, or `failed`.
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
 * Type of STRIPE's STRIPE_RETRIEVE_CUSTOMER tool input.
 */
type STRIPE_RETRIEVE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description The unique identifier of the Stripe customer to retrieve. This ID typically starts with 'cus_'.
   */
  customer_id?: string;
};

/**
 * Type of STRIPE's STRIPE_RETRIEVE_CUSTOMER tool output.
 */
type STRIPE_RETRIEVE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full Stripe customer object as returned by the API.
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
 * Type of STRIPE's STRIPE_RETRIEVE_PAYMENT_INTENT tool input.
 */
type STRIPE_RETRIEVE_PAYMENT_INTENT_INPUT = {
  /**
   * Client Secret
   * @description Client secret for the PaymentIntent. Required if using a publishable key for authentication.
   * @default null
   */
  client_secret: string | null;
  /**
   * Payment Intent Id
   * @description The unique identifier of the PaymentIntent to retrieve.
   */
  payment_intent_id?: string;
};

/**
 * Type of STRIPE's STRIPE_RETRIEVE_PAYMENT_INTENT tool output.
 */
type STRIPE_RETRIEVE_PAYMENT_INTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description The amount intended to be collected by this PaymentIntent, in the smallest currency unit (e.g., cents for USD).
       */
      amount: number;
      /**
       * Client Secret
       * @description The client secret of this PaymentIntent. This is used for client-side confirmation of the PaymentIntent.
       * @default null
       */
      client_secret: string | null;
      /**
       * Currency
       * @description The three-letter ISO currency code (e.g., usd, eur).
       */
      currency: string;
      /**
       * Customer
       * @description The ID of the Customer this PaymentIntent is associated with, if any.
       * @default null
       */
      customer: string | null;
      /**
       * Id
       * @description Unique identifier for the PaymentIntent object.
       */
      id: string;
      /**
       * Metadata
       * @description A set of key-value pairs that you can attach to the PaymentIntent object. It can be useful for storing additional information about the charge in a structured format.
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Payment Method
       * @description The ID of the payment method used or to be used in this PaymentIntent.
       * @default null
       */
      payment_method: string | null;
      /**
       * Status
       * @description The current status of this PaymentIntent. Common statuses include: 'requires_payment_method', 'requires_confirmation', 'requires_action', 'processing', 'succeeded', 'canceled', and 'requires_capture'.
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
 * Type of STRIPE's STRIPE_RETRIEVE_REFUND tool input.
 */
type STRIPE_RETRIEVE_REFUND_INPUT = {
  /**
   * Refund Id
   * @description The unique identifier of the refund to retrieve. This ID typically starts with 're_'.
   */
  refund_id?: string;
};

/**
 * Type of STRIPE's STRIPE_RETRIEVE_REFUND tool output.
 */
type STRIPE_RETRIEVE_REFUND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description The total amount of the refund, in the smallest currency unit (e.g., cents for USD, yen for JPY).
       */
      amount: number;
      /**
       * Balance Transaction
       * @description The ID of the Balance Transaction object that records the impact of this refund on your Stripe balance. This field is null if the refund is pending or has not yet affected the balance.
       * @default null
       */
      balance_transaction: string | null;
      /**
       * Charge
       * @description The ID of the Charge object that was refunded.
       * @default null
       */
      charge: string | null;
      /**
       * Created
       * @description Timestamp (Unix epoch seconds) at which the refund object was created.
       */
      created: number;
      /**
       * Currency
       * @description Three-letter ISO currency code (e.g., 'usd', 'eur') representing the currency of the refund, in lowercase.
       */
      currency: string;
      /**
       * DestinationDetails
       * @description Represents details about the destination of a refund, such as a card or bank account.
       * @default null
       */
      destination_details: {
          /**
           * Card
           * @description If the refund was made to a card, this object contains details about the card. This will be null if the refund destination is not a card or if details are not available.
           * @default null
           */
          card: {
              [key: string]: unknown;
          } | null;
          /**
           * Type
           * @description The type of the destination where the refund was sent (e.g., 'card', 'bank_account').
           * @default null
           */
          type: string | null;
      } | null;
      /**
       * Id
       * @description Unique identifier for the refund object. This ID starts with 're_'.
       */
      id: string;
      /**
       * Metadata
       * @description A set of key-value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format.
       */
      metadata?: {
          [key: string]: unknown;
      };
      /**
       * Object
       * @description String representing the object's type. For refund objects, the value is always 'refund'.
       */
      object: string;
      /**
       * Payment Intent
       * @description The ID of the PaymentIntent object that is associated with the refunded charge. This field is null if the refund is not linked to a PaymentIntent.
       * @default null
       */
      payment_intent: string | null;
      /**
       * Reason
       * @description The reason for the refund. Possible values are: `duplicate`, `fraudulent`, `requested_by_customer`. This field can be null if no specific reason was provided or if the refund was initiated for other reasons.
       * @default null
       */
      reason: string | null;
      /**
       * Receipt Number
       * @description The transaction-specific receipt number issued for this refund. This number is generated by Stripe and can be displayed to the customer. This field is null if a receipt number was not generated.
       * @default null
       */
      receipt_number: string | null;
      /**
       * Source Transfer Reversal
       * @description The ID of the transfer reversal if this refund is reversing a transfer (e.g., in Stripe Connect). This field is null if the refund is not related to a transfer reversal from a source.
       * @default null
       */
      source_transfer_reversal: string | null;
      /**
       * Status
       * @description The current status of the refund. Possible values are: `pending`, `requires_action`, `succeeded`, `failed`, or `canceled`.
       */
      status: string;
      /**
       * Transfer Reversal
       * @description The ID of the TransferReversal object created when this refund is processed. This is relevant for refunds that are part of a Connect transfer. This field is null if the refund is not associated with a transfer reversal.
       * @default null
       */
      transfer_reversal: string | null;
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
 * Type of STRIPE's STRIPE_RETRIEVE_SUBSCRIPTION tool input.
 */
type STRIPE_RETRIEVE_SUBSCRIPTION_INPUT = {
  /**
   * Subscription Id
   * @description Unique identifier of the Stripe subscription to retrieve, typically starting with 'sub_'.
   */
  subscription_id?: string;
};

/**
 * Type of STRIPE's STRIPE_RETRIEVE_SUBSCRIPTION tool output.
 */
type STRIPE_RETRIEVE_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Complete Stripe subscription object from the API, including details like status, items, customer, and current billing period.
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
 * Type of STRIPE's STRIPE_SEARCH_CUSTOMERS tool input.
 */
type STRIPE_SEARCH_CUSTOMERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of results per page (default is 10).
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Pagination cursor for a specific page; omit for the first page. Use `next_page` from a previous response for subsequent pages.
   * @default null
   */
  page: string | null;
  /**
   * Query
   * @description The search query string, adhering to Stripe's Search Query Language. This language supports features like exact matches, range queries, boolean operators, and searching by metadata. For detailed syntax, refer to https://docs.stripe.com/search#search-query-language.
   */
  query?: string;
};

/**
 * Type of STRIPE's STRIPE_SEARCH_CUSTOMERS tool output.
 */
type STRIPE_SEARCH_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description List of customer objects matching the search query.
   */
  data?: unknown[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description Indicates if more search results are available.
   */
  has_more?: boolean;
  /**
   * Next Page
   * @description Pagination cursor for the next page, if `has_more` is true. Use in the `page` parameter of a subsequent request.
   * @default null
   */
  next_page: string | null;
  /**
   * Object
   * @description Indicates the type of object returned. For customer search results, this will always be 'search_result'.
   * @default search_result
   */
  object: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Url
   * @description The API URL that can be used to re-fetch this specific list of search results.
   */
  url?: string;
};

/**
 * Type of STRIPE's STRIPE_UPDATE_CUSTOMER tool input.
 */
type STRIPE_UPDATE_CUSTOMER_INPUT = {
  /**
   * Address
   * @description Defines the customer's primary billing address.
   * @default null
   */
  address: {
      /**
       * City
       * @description City, district, suburb, town, or village.
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Two-letter country code (ISO 3166-1 alpha-2).
       * @default null
       */
      country: string | null;
      /**
       * Line1
       * @description Street address line 1 (e.g., 123 Main St).
       * @default null
       */
      line1: string | null;
      /**
       * Line2
       * @description Street address line 2 (e.g., Apt. 4B, Suite 100).
       * @default null
       */
      line2: string | null;
      /**
       * Postal Code
       * @description ZIP or postal code.
       * @default null
       */
      postal_code: string | null;
      /**
       * State
       * @description State, county, province, or region.
       * @default null
       */
      state: string | null;
  } | null;
  /**
   * Balance
   * @description An integer representing the customer's account balance in the smallest currency unit (e.g., cents for USD). A positive value credits the customer's balance, and a negative value debits it. This balance will be applied to future invoices.
   * @default null
   */
  balance: number | null;
  /**
   * Coupon
   * @description The ID of a coupon to apply to the customer. This coupon will be applied to the customer's subsequent invoices and subscriptions.
   * @default null
   */
  coupon: string | null;
  /**
   * Customer Id
   * @description The unique identifier of the Stripe customer to update.
   */
  customer_id?: string;
  /**
   * Default Payment Method
   * @description The ID of a PaymentMethod to set as the customer's default for subscriptions and invoices.
   * @default null
   */
  default_payment_method: string | null;
  /**
   * Default Source
   * @description The ID of a card or bank account object to set as the customer's default payment source for charges and subscriptions. Deprecated in favor of `default_payment_method` for newer integrations.
   * @default null
   */
  default_source: string | null;
  /**
   * Description
   * @description An arbitrary string providing additional information about the customer, often used for internal notes. Maximum 5000 characters.
   * @default null
   */
  description: string | null;
  /**
   * Email
   * Format: email
   * @description The customer's email address. Updating this may trigger a verification email to the new address.
   * @default null
   */
  email: string | null;
  /**
   * InvoiceSettings
   * @description Defines default settings for invoices created for this customer.
   * @default null
   */
  invoice_settings: {
      /**
       * Custom Fields
       * @description A list of up to 3 custom fields to be displayed on the customer's invoices. Each field is a dictionary with 'name' and 'value' keys. Example: [{'name': 'Purchase Order', 'value': 'PO-12345'}]
       * @default null
       */
      custom_fields: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Default Payment Method
       * @description The ID of a PaymentMethod to be set as the default for this customer's invoices.
       * @default null
       */
      default_payment_method: string | null;
      /**
       * Footer
       * @description Default footer text to be displayed on invoices for this customer. Maximum 500 characters.
       * @default null
       */
      footer: string | null;
  } | null;
  /**
   * Metadata
   * @description Key-value pairs for storing additional, unstructured information. Keys up to 40 characters, values up to 500.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description The customer's full name or the business name.
   * @default null
   */
  name: string | null;
  /**
   * Phone
   * @description The customer's primary phone number, preferably in E.164 format.
   * @default null
   */
  phone: string | null;
  /**
   * Shipping
   * @description Encapsulates the customer's shipping details.
   * @default null
   */
  shipping: {
      /**
       * ShippingAddress
       * @description Defines the customer's shipping address.
       * @default null
       */
      address: {
          /**
           * City
           * @description Shipping city, district, suburb, town, or village.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Shipping two-letter country code (ISO 3166-1 alpha-2).
           * @default null
           */
          country: string | null;
          /**
           * Line1
           * @description Shipping street address line 1 (e.g., 456 Market St).
           * @default null
           */
          line1: string | null;
          /**
           * Line2
           * @description Shipping street address line 2 (e.g., Floor 5, Unit B).
           * @default null
           */
          line2: string | null;
          /**
           * Postal Code
           * @description Shipping ZIP or postal code.
           * @default null
           */
          postal_code: string | null;
          /**
           * State
           * @description Shipping state, county, province, or region.
           * @default null
           */
          state: string | null;
      } | null;
      /**
       * Name
       * @description Recipient's full name for shipping purposes.
       * @default null
       */
      name: string | null;
      /**
       * Phone
       * @description Recipient's phone number for shipping notifications or queries.
       * @default null
       */
      phone: string | null;
  } | null;
  /**
   * Tax
   * @description Specifies tax-related information for the customer.
   * @default null
   */
  tax: {
      /**
       * Ip Address
       * @description Customer's IP address, used for geolocation, tax compliance (e.g., VAT collection), and fraud prevention.
       * @default null
       */
      ip_address: string | null;
  } | null;
  /**
   * Tax Exempt
   * @description Specifies the customer's tax exemption status. Accepted values are 'none', 'exempt', or 'reverse'. Use 'reverse' for B2B transactions in the EU subject to reverse charge.
   * @default null
   */
  tax_exempt: string | null;
};

/**
 * Type of STRIPE's STRIPE_UPDATE_CUSTOMER tool output.
 */
type STRIPE_UPDATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description The complete Stripe customer object reflecting the updates, returned as a dictionary.
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
 * Type of STRIPE's STRIPE_UPDATE_PAYMENT_INTENT tool input.
 */
type STRIPE_UPDATE_PAYMENT_INTENT_INPUT = {
  /**
   * Amount
   * @description The amount intended to be collected by this PaymentIntent, in the smallest currency unit (e.g., cents for USD). This is a positive integer.
   * @default null
   */
  amount: number | null;
  /**
   * Currency
   * @description The three-letter ISO currency code, in lowercase (e.g., 'usd', 'eur'). Must be a supported currency.
   * @default null
   */
  currency: string | null;
  /**
   * Customer
   * @description The ID of the Customer this PaymentIntent should be associated with.
   * @default null
   */
  customer: string | null;
  /**
   * Description
   * @description An arbitrary string providing a description of the PaymentIntent, often displayed to users.
   * @default null
   */
  description: string | null;
  /**
   * Metadata
   * @description A set of key-value pairs to store additional structured information about the PaymentIntent. Keys can be up to 40 characters long and values can be up to 500 characters long.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Payment Intent Id
   * @description The unique identifier of the PaymentIntent to be updated.
   */
  payment_intent_id?: string;
  /**
   * Payment Method
   * @description ID of the PaymentMethod to attach to this PaymentIntent.
   * @default null
   */
  payment_method: string | null;
  /**
   * Receipt Email
   * @description The email address to which Stripe will send a receipt for a successful payment.
   * @default null
   */
  receipt_email: string | null;
  /**
   * Setup Future Usage
   * @description Indicates if you intend to use the payment method attached to this PaymentIntent for future payments. Allowed values are 'on_session' or 'off_session'.
   * @default null
   */
  setup_future_usage: string | null;
  /**
   * Shipping
   * @description Shipping information for the PaymentIntent. This is a dictionary that should contain the recipient's `name`, `phone`, and an `address` object with `line1`, `line2` (optional), `city`, `state`, `postal_code`, and `country`.
   * @default null
   */
  shipping: {
      [key: string]: unknown;
  } | null;
  /**
   * Statement Descriptor
   * @description String for customer's credit card statement (max 22 characters).
   * @default null
   */
  statement_descriptor: string | null;
  /**
   * Statement Descriptor Suffix
   * @description Additional info for customer's card statement, appended to `statement_descriptor` (max 22 characters).
   * @default null
   */
  statement_descriptor_suffix: string | null;
};

/**
 * Type of STRIPE's STRIPE_UPDATE_PAYMENT_INTENT tool output.
 */
type STRIPE_UPDATE_PAYMENT_INTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description The updated amount intended to be collected by this PaymentIntent, in the smallest currency unit.
       */
      amount: number;
      /**
       * Currency
       * @description The three-letter ISO currency code, in lowercase.
       */
      currency: string;
      /**
       * Customer
       * @description ID of the Customer this PaymentIntent belongs to, if any.
       * @default null
       */
      customer: string | null;
      /**
       * Description
       * @description The updated description of the PaymentIntent.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the PaymentIntent object.
       */
      id: string;
      /**
       * Metadata
       * @description The updated set of key-value pairs attached to the object.
       */
      metadata: {
          [key: string]: string;
      };
      /**
       * Object
       * @description String representing the object's type, typically 'payment_intent'.
       */
      object: string;
      /**
       * Payment Method
       * @description ID of the PaymentMethod attached to this PaymentIntent, if any.
       * @default null
       */
      payment_method: string | null;
      /**
       * Receipt Email
       * @description Email address that the receipt for the resulting payment will be sent to, if provided.
       * @default null
       */
      receipt_email: string | null;
      /**
       * Setup Future Usage
       * @description Indicates how the payment method was set up for future usage, if applicable.
       * @default null
       */
      setup_future_usage: string | null;
      /**
       * Shipping
       * @description Shipping information for this PaymentIntent, if provided. Includes the recipient's `name`, `phone`, and an `address` object.
       * @default null
       */
      shipping: {
          [key: string]: unknown;
      } | null;
      /**
       * Status
       * @description Status of this PaymentIntent (e.g., 'requires_payment_method', 'requires_confirmation', 'requires_action', 'processing', 'succeeded', 'canceled').
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
 * Type of STRIPE's STRIPE_UPDATE_SUBSCRIPTION tool input.
 */
type STRIPE_UPDATE_SUBSCRIPTION_INPUT = {
  /**
   * AutomaticTax
   * @description Stripe Tax settings for automatic tax calculation. `liability` may be required if `enabled` is true.
   * @default null
   */
  automatic_tax: {
      /**
       * Enabled
       * @description Determines whether Stripe automatically calculates taxes for this subscription. If true, `liability` may be required.
       */
      enabled: boolean;
      /**
       * AutomaticTaxLiability
       * @description The account that's liable for tax. Required if `enabled` is `true` and the subscription is not a top-up.
       * @default null
       */
      liability: {
          /**
           * Connected Account
           * @description Stripe account ID liable for this subscription's taxes; required if `automatic_tax[enabled]` is true and subscription isn't a top-up.
           */
          connected_account: string;
      } | null;
  } | null;
  /**
   * Billing Cycle Anchor
   * @description Unix timestamp (seconds) or 'now' to anchor billing cycle and renewal. Changes may cause proration.
   * @default null
   */
  billing_cycle_anchor: number | null;
  /**
   * Cancel At Period End
   * @description If true, schedules cancellation at current period's end; if false, undoes scheduled cancellation.
   * @default null
   */
  cancel_at_period_end: boolean | null;
  /**
   * Collection Method
   * @description How invoices are paid: 'charge_automatically' (charges default payment method) or 'send_invoice' (emails invoice for manual payment).
   * @default null
   */
  collection_method: string | null;
  /**
   * Default Payment Method
   * @description ID of the default payment method; updates subscription's default payment source if provided.
   * @default null
   */
  default_payment_method: string | null;
  /**
   * Description
   * @description Arbitrary string for user display or internal tracking.
   * @default null
   */
  description: string | null;
  /**
   * Items
   * @description List of subscription item updates (max 20). Item `id` usually required for modification.
   * @default null
   */
  items: {
      /**
       * BillingThresholds
       * @description Usage-based billing thresholds for this item; meeting a threshold generates an invoice for its usage.
       * @default null
       */
      billing_thresholds: {
          /**
           * Amount Gte
           * @description Monetary threshold (smallest currency unit, e.g., cents) that triggers billing when usage meets or exceeds it. E.g., 1000 for $10.00 USD.
           * @default null
           */
          amount_gte: number | null;
          /**
           * Reset Billing Cycle Anchor
           * @description If true, resets billing cycle anchor to threshold billing time, adjusting renewal date.
           * @default null
           */
          reset_billing_cycle_anchor: boolean | null;
      } | null;
      /**
       * Discounts
       * @description List of discounts (by coupon, promotion code, or discount ID) to apply, replacing existing item discounts.
       * @default null
       */
      discounts: {
          /**
           * Coupon
           * @description The ID of a coupon to apply. Mutually exclusive with `promotion_code` and `discount`.
           * @default null
           */
          coupon: string | null;
          /**
           * Discount
           * @description The ID of an existing discount object to apply. This is less common than using `coupon` or `promotion_code`. Mutually exclusive with `coupon` and `promotion_code`.
           * @default null
           */
          discount: string | null;
          /**
           * Promotion Code
           * @description The ID of a promotion code to apply. Mutually exclusive with `coupon` and `discount`.
           * @default null
           */
          promotion_code: string | null;
      }[] | null;
      /**
       * Id
       * @description ID of the subscription item to update; required to modify. If omitted with `price`, new item behavior varies; explicit creation often preferred.
       * @default null
       */
      id: string | null;
      /**
       * Price
       * @description ID of the new price for this item, changing its pricing plan. Using `price_data` for inline creation is not directly supported here.
       * @default null
       */
      price: string | null;
      /**
       * Quantity
       * @description Quantity of this item; affects metered billing amount or sets units for licensed billing.
       * @default null
       */
      quantity: number | null;
      /**
       * Tax Rates
       * @description List of tax rate IDs (max 5) to apply, overriding subscription-level rates for this item. Empty list removes all.
       * @default null
       */
      tax_rates: string[] | null;
  }[] | null;
  /**
   * Metadata
   * @description Key-value pairs for custom information (max 50 keys: 40 chars; values: 500 chars). Replaces existing; empty dict removes all.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Payment Behavior
   * @description Payment handling for invoices (especially initial): 'allow_incomplete' (creates subscription if first payment fails), 'error_if_incomplete' (fails request if initial payment required and fails), 'pending_if_incomplete' (sets to pending if payment fails).
   * @default null
   */
  payment_behavior: string | null;
  /**
   * Proration Behavior
   * @description How to handle prorations on changes: 'create_prorations' (creates prorated charges/credits), 'none' (no prorations), or 'always_invoice' (creates and invoices prorations immediately).
   * @default null
   */
  proration_behavior: string | null;
  /**
   * Subscription Id
   * @description Unique identifier of the subscription to update.
   */
  subscription_id?: string;
};

/**
 * Type of STRIPE's STRIPE_UPDATE_SUBSCRIPTION tool output.
 */
type STRIPE_UPDATE_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Complete Stripe API JSON response: the fully updated subscription object.
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
 * Type map of all available tool input types for toolkit "STRIPE".
 */
export type STRIPE_TOOL_INPUTS = {
  CANCEL_SUBSCRIPTION: STRIPE_CANCEL_SUBSCRIPTION_INPUT
  CONFIRM_PAYMENT_INTENT: STRIPE_CONFIRM_PAYMENT_INTENT_INPUT
  CREATE_CUSTOMER: STRIPE_CREATE_CUSTOMER_INPUT
  CREATE_INVOICE: STRIPE_CREATE_INVOICE_INPUT
  CREATE_PAYMENT_INTENT: STRIPE_CREATE_PAYMENT_INTENT_INPUT
  CREATE_PRICE: STRIPE_CREATE_PRICE_INPUT
  CREATE_PRODUCT: STRIPE_CREATE_PRODUCT_INPUT
  CREATE_REFUND: STRIPE_CREATE_REFUND_INPUT
  CREATE_SUBSCRIPTION: STRIPE_CREATE_SUBSCRIPTION_INPUT
  DELETE_CUSTOMER: STRIPE_DELETE_CUSTOMER_INPUT
  LIST_CHARGES: STRIPE_LIST_CHARGES_INPUT
  LIST_COUPONS: STRIPE_LIST_COUPONS_INPUT
  LIST_CUSTOMERS: STRIPE_LIST_CUSTOMERS_INPUT
  LIST_CUSTOMER_PAYMENT_METHODS: STRIPE_LIST_CUSTOMER_PAYMENT_METHODS_INPUT
  LIST_INVOICES: STRIPE_LIST_INVOICES_INPUT
  LIST_PAYMENT_INTENTS: STRIPE_LIST_PAYMENT_INTENTS_INPUT
  LIST_PAYMENT_LINKS: STRIPE_LIST_PAYMENT_LINKS_INPUT
  LIST_PRODUCTS: STRIPE_LIST_PRODUCTS_INPUT
  LIST_REFUNDS: STRIPE_LIST_REFUNDS_INPUT
  LIST_SHIPPING_RATES: STRIPE_LIST_SHIPPING_RATES_INPUT
  LIST_SUBSCRIPTIONS: STRIPE_LIST_SUBSCRIPTIONS_INPUT
  LIST_TAX_CODES: STRIPE_LIST_TAX_CODES_INPUT
  LIST_TAX_RATES: STRIPE_LIST_TAX_RATES_INPUT
  RETRIEVE_BALANCE: STRIPE_RETRIEVE_BALANCE_INPUT
  RETRIEVE_CHARGE: STRIPE_RETRIEVE_CHARGE_INPUT
  RETRIEVE_CUSTOMER: STRIPE_RETRIEVE_CUSTOMER_INPUT
  RETRIEVE_PAYMENT_INTENT: STRIPE_RETRIEVE_PAYMENT_INTENT_INPUT
  RETRIEVE_REFUND: STRIPE_RETRIEVE_REFUND_INPUT
  RETRIEVE_SUBSCRIPTION: STRIPE_RETRIEVE_SUBSCRIPTION_INPUT
  SEARCH_CUSTOMERS: STRIPE_SEARCH_CUSTOMERS_INPUT
  UPDATE_CUSTOMER: STRIPE_UPDATE_CUSTOMER_INPUT
  UPDATE_PAYMENT_INTENT: STRIPE_UPDATE_PAYMENT_INTENT_INPUT
  UPDATE_SUBSCRIPTION: STRIPE_UPDATE_SUBSCRIPTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "STRIPE".
 */
export type STRIPE_TOOL_OUTPUTS = {
  CANCEL_SUBSCRIPTION: STRIPE_CANCEL_SUBSCRIPTION_OUTPUT
  CONFIRM_PAYMENT_INTENT: STRIPE_CONFIRM_PAYMENT_INTENT_OUTPUT
  CREATE_CUSTOMER: STRIPE_CREATE_CUSTOMER_OUTPUT
  CREATE_INVOICE: STRIPE_CREATE_INVOICE_OUTPUT
  CREATE_PAYMENT_INTENT: STRIPE_CREATE_PAYMENT_INTENT_OUTPUT
  CREATE_PRICE: STRIPE_CREATE_PRICE_OUTPUT
  CREATE_PRODUCT: STRIPE_CREATE_PRODUCT_OUTPUT
  CREATE_REFUND: STRIPE_CREATE_REFUND_OUTPUT
  CREATE_SUBSCRIPTION: STRIPE_CREATE_SUBSCRIPTION_OUTPUT
  DELETE_CUSTOMER: STRIPE_DELETE_CUSTOMER_OUTPUT
  LIST_CHARGES: STRIPE_LIST_CHARGES_OUTPUT
  LIST_COUPONS: STRIPE_LIST_COUPONS_OUTPUT
  LIST_CUSTOMERS: STRIPE_LIST_CUSTOMERS_OUTPUT
  LIST_CUSTOMER_PAYMENT_METHODS: STRIPE_LIST_CUSTOMER_PAYMENT_METHODS_OUTPUT
  LIST_INVOICES: STRIPE_LIST_INVOICES_OUTPUT
  LIST_PAYMENT_INTENTS: STRIPE_LIST_PAYMENT_INTENTS_OUTPUT
  LIST_PAYMENT_LINKS: STRIPE_LIST_PAYMENT_LINKS_OUTPUT
  LIST_PRODUCTS: STRIPE_LIST_PRODUCTS_OUTPUT
  LIST_REFUNDS: STRIPE_LIST_REFUNDS_OUTPUT
  LIST_SHIPPING_RATES: STRIPE_LIST_SHIPPING_RATES_OUTPUT
  LIST_SUBSCRIPTIONS: STRIPE_LIST_SUBSCRIPTIONS_OUTPUT
  LIST_TAX_CODES: STRIPE_LIST_TAX_CODES_OUTPUT
  LIST_TAX_RATES: STRIPE_LIST_TAX_RATES_OUTPUT
  RETRIEVE_BALANCE: STRIPE_RETRIEVE_BALANCE_OUTPUT
  RETRIEVE_CHARGE: STRIPE_RETRIEVE_CHARGE_OUTPUT
  RETRIEVE_CUSTOMER: STRIPE_RETRIEVE_CUSTOMER_OUTPUT
  RETRIEVE_PAYMENT_INTENT: STRIPE_RETRIEVE_PAYMENT_INTENT_OUTPUT
  RETRIEVE_REFUND: STRIPE_RETRIEVE_REFUND_OUTPUT
  RETRIEVE_SUBSCRIPTION: STRIPE_RETRIEVE_SUBSCRIPTION_OUTPUT
  SEARCH_CUSTOMERS: STRIPE_SEARCH_CUSTOMERS_OUTPUT
  UPDATE_CUSTOMER: STRIPE_UPDATE_CUSTOMER_OUTPUT
  UPDATE_PAYMENT_INTENT: STRIPE_UPDATE_PAYMENT_INTENT_OUTPUT
  UPDATE_SUBSCRIPTION: STRIPE_UPDATE_SUBSCRIPTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of STRIPE's CHARGE_FAILED_TRIGGER trigger payload.
 */
type STRIPE_CHARGE_FAILED_TRIGGER_PAYLOAD = {
  /**
   * Body
   * @description The entire event payload
   */
  body?: unknown;
  /**
   * Event Type
   * @description The type of event
   */
  event_type?: string;
};

/**
 * Type of STRIPE's CHECKOUT_SESSION_COMPLETED_TRIGGER trigger payload.
 */
type STRIPE_CHECKOUT_SESSION_COMPLETED_TRIGGER_PAYLOAD = {
  /**
   * Body
   * @description The entire event payload
   */
  body?: unknown;
  /**
   * Event Type
   * @description The type of event
   */
  event_type?: string;
};

/**
 * Type of STRIPE's INVOICE_PAYMENT_SUCCEEDED_TRIGGER trigger payload.
 */
type STRIPE_INVOICE_PAYMENT_SUCCEEDED_TRIGGER_PAYLOAD = {
  /**
   * Body
   * @description The entire event payload
   */
  body?: unknown;
  /**
   * Event Type
   * @description The type of event
   */
  event_type?: string;
};

/**
 * Type of STRIPE's PAYMENT_FAILED_TRIGGER trigger payload.
 */
type STRIPE_PAYMENT_FAILED_TRIGGER_PAYLOAD = {
  /**
   * Body
   * @description The entire event payload
   */
  body?: unknown;
  /**
   * Event Type
   * @description The type of event
   */
  event_type?: string;
};

/**
 * Type of STRIPE's PRODUCT_CREATED_TRIGGER trigger payload.
 */
type STRIPE_PRODUCT_CREATED_TRIGGER_PAYLOAD = {
  /**
   * Body
   * @description The entire event payload
   */
  body?: unknown;
  /**
   * Event Type
   * @description The type of event
   */
  event_type?: string;
};

/**
 * Type of STRIPE's SUBSCRIPTION_ADDED_TRIGGER trigger payload.
 */
type STRIPE_SUBSCRIPTION_ADDED_TRIGGER_PAYLOAD = {
  /**
   * Body
   * @description The entire event payload
   */
  body?: unknown;
  /**
   * Event Type
   * @description The type of event
   */
  event_type?: string;
};

/**
 * Type of STRIPE's SUBSCRIPTION_DELETED_TRIGGER trigger payload.
 */
type STRIPE_SUBSCRIPTION_DELETED_TRIGGER_PAYLOAD = {
  /**
   * Body
   * @description The entire event payload
   */
  body?: unknown;
  /**
   * Event Type
   * @description The type of event
   */
  event_type?: string;
};

/**
 * Map of Composio's STRIPE toolkit.
 */
export const STRIPE = {
  slug: "stripe",
  tools: {
    /**
     * Cancels a customer's active stripe subscription at the end of the current billing period, with options to invoice immediately for metered usage and prorate charges for unused time.
     */
    CANCEL_SUBSCRIPTION: "STRIPE_CANCEL_SUBSCRIPTION",
    /**
     * Confirms a stripe paymentintent to finalize a payment; a `return url` is necessary if the payment method requires customer redirection.
     */
    CONFIRM_PAYMENT_INTENT: "STRIPE_CONFIRM_PAYMENT_INTENT",
    /**
     * Creates a new customer in stripe, required for creating charges or subscriptions; an email is highly recommended for customer communications.
     */
    CREATE_CUSTOMER: "STRIPE_CREATE_CUSTOMER",
    /**
     * Creates a new draft stripe invoice for a customer; use to revise an existing invoice, bill for a specific subscription (which must belong to the customer), or apply detailed customizations.
     */
    CREATE_INVOICE: "STRIPE_CREATE_INVOICE",
    /**
     * Creates a stripe paymentintent to initiate and process a customer's payment; using `application fee amount` for a connected account requires the `stripe-account` header.
     */
    CREATE_PAYMENT_INTENT: "STRIPE_CREATE_PAYMENT_INTENT",
    /**
     * Creates a new stripe price for a product, defining its charges (one-time or recurring) and billing scheme; requires either an existing `product` id or `product data`.
     */
    CREATE_PRICE: "STRIPE_CREATE_PRICE",
    /**
     * Creates a new product in stripe, encoding the request as `application/x-www-form-urlencoded` by flattening nested structures.
     */
    CREATE_PRODUCT: "STRIPE_CREATE_PRODUCT",
    /**
     * Creates a full or partial refund in stripe, targeting either a specific charge id or a payment intent id.
     */
    CREATE_REFUND: "STRIPE_CREATE_REFUND",
    /**
     * Creates a new, highly configurable subscription for an existing stripe customer, supporting multiple items, trials, discounts, and various billing/payment options.
     */
    CREATE_SUBSCRIPTION: "STRIPE_CREATE_SUBSCRIPTION",
    /**
     * Permanently deletes an existing stripe customer; this irreversible action also cancels their active subscriptions and removes all associated data.
     */
    DELETE_CUSTOMER: "STRIPE_DELETE_CUSTOMER",
    /**
     * Retrieves a list of stripe charges with filtering and pagination; use valid cursor ids from previous responses for pagination, and note that charges are typically returned in reverse chronological order.
     */
    LIST_CHARGES: "STRIPE_LIST_CHARGES",
    /**
     * Retrieves a list of discount coupons from a stripe account, supporting pagination via `limit`, `starting after`, and `ending before`.
     */
    LIST_COUPONS: "STRIPE_LIST_COUPONS",
    /**
     * Retrieves a list of stripe customers, with options to filter by email, creation date, or test clock, and support for pagination.
     */
    LIST_CUSTOMERS: "STRIPE_LIST_CUSTOMERS",
    /**
     * Retrieves a list of payment methods for a given customer, supporting type filtering and pagination.
     */
    LIST_CUSTOMER_PAYMENT_METHODS: "STRIPE_LIST_CUSTOMER_PAYMENT_METHODS",
    /**
     * Retrieves a list of stripe invoices, filterable by various criteria and paginatable using invoice id cursors obtained from previous responses.
     */
    LIST_INVOICES: "STRIPE_LIST_INVOICES",
    /**
     * Retrieves a list of stripe paymentintents, optionally filtered and paginated using paymentintent ids as cursors.
     */
    LIST_PAYMENT_INTENTS: "STRIPE_LIST_PAYMENT_INTENTS",
    /**
     * Retrieves a list of payment links from stripe, sorted by creation date in descending order by default.
     */
    LIST_PAYMENT_LINKS: "STRIPE_LIST_PAYMENT_LINKS",
    /**
     * Retrieves a list of stripe products, with optional filtering and pagination; `starting after`/`ending before` cursors must be valid product ids from a previous response.
     */
    LIST_PRODUCTS: "STRIPE_LIST_PRODUCTS",
    /**
     * Lists stripe refunds, sorted by creation date descending (newest first), with optional filtering by charge or payment intent and pagination support.
     */
    LIST_REFUNDS: "STRIPE_LIST_REFUNDS",
    /**
     * Retrieves a list of stripe shipping rates, filterable by active status, creation date, and currency; useful for managing or displaying shipping options.
     */
    LIST_SHIPPING_RATES: "STRIPE_LIST_SHIPPING_RATES",
    /**
     * Retrieves a list of stripe subscriptions, optionally filtered by various criteria such as customer, price, status, collection method, and date ranges, with support for pagination.
     */
    LIST_SUBSCRIPTIONS: "STRIPE_LIST_SUBSCRIPTIONS",
    /**
     * Retrieves a paginated list of globally available, predefined stripe tax codes used for classifying products and services in stripe tax.
     */
    LIST_TAX_CODES: "STRIPE_LIST_TAX_CODES",
    /**
     * Retrieves a list of tax rates, which are returned sorted by creation date in descending order.
     */
    LIST_TAX_RATES: "STRIPE_LIST_TAX_RATES",
    /**
     * Retrieves the complete current balance details for the connected stripe account.
     */
    RETRIEVE_BALANCE: "STRIPE_RETRIEVE_BALANCE",
    /**
     * Retrieves full details for an existing stripe charge using its unique id.
     */
    RETRIEVE_CHARGE: "STRIPE_RETRIEVE_CHARGE",
    /**
     * Retrieves detailed information for an existing stripe customer using their unique customer id.
     */
    RETRIEVE_CUSTOMER: "STRIPE_RETRIEVE_CUSTOMER",
    /**
     * Retrieves a paymentintent by its id; `client secret` is required if a publishable api key is used.
     */
    RETRIEVE_PAYMENT_INTENT: "STRIPE_RETRIEVE_PAYMENT_INTENT",
    /**
     * Retrieves details for an existing stripe refund using its unique `refund id`.
     */
    RETRIEVE_REFUND: "STRIPE_RETRIEVE_REFUND",
    /**
     * Retrieves detailed information for an existing stripe subscription using its unique id.
     */
    RETRIEVE_SUBSCRIPTION: "STRIPE_RETRIEVE_SUBSCRIPTION",
    /**
     * Retrieves a list of stripe customers matching a search query that adheres to stripe's search query language.
     */
    SEARCH_CUSTOMERS: "STRIPE_SEARCH_CUSTOMERS",
    /**
     * Updates an existing stripe customer, identified by customer id, with only the provided details; unspecified fields remain unchanged.
     */
    UPDATE_CUSTOMER: "STRIPE_UPDATE_CUSTOMER",
    /**
     * Updates a stripe paymentintent with new values for specified parameters; note that if `currency` is updated, `amount` might also be required, and certain updates (e.g., to `payment method`) can necessitate re-confirmation by the customer.
     */
    UPDATE_PAYMENT_INTENT: "STRIPE_UPDATE_PAYMENT_INTENT",
    /**
     * Updates an existing, non-canceled stripe subscription by its id, ensuring all referenced entity ids (e.g., prices, coupons) are valid and automatic tax liability is correctly specified if enabled.
     */
    UPDATE_SUBSCRIPTION: "STRIPE_UPDATE_SUBSCRIPTION",
  },
  triggerTypes: {
    /**
     * Triggered when a direct charge fails in Stripe's legacy Charges API
     */
    CHARGE_FAILED_TRIGGER: "STRIPE_CHARGE_FAILED_TRIGGER",
    /**
     * Triggered when a checkout session is completed in Stripe
     */
    CHECKOUT_SESSION_COMPLETED_TRIGGER: "STRIPE_CHECKOUT_SESSION_COMPLETED_TRIGGER",
    /**
     * Triggered when an invoice payment is successful in Stripe
     */
    INVOICE_PAYMENT_SUCCEEDED_TRIGGER: "STRIPE_INVOICE_PAYMENT_SUCCEEDED_TRIGGER",
    /**
     * Triggered when a payment intent fails in Stripe
     */
    PAYMENT_FAILED_TRIGGER: "STRIPE_PAYMENT_FAILED_TRIGGER",
    /**
     * Triggered when a product is created in Stripe
     */
    PRODUCT_CREATED_TRIGGER: "STRIPE_PRODUCT_CREATED_TRIGGER",
    /**
     * Triggered when a subscription is added in Stripe
     */
    SUBSCRIPTION_ADDED_TRIGGER: "STRIPE_SUBSCRIPTION_ADDED_TRIGGER",
    /**
     * Triggered when a subscription is deleted in Stripe
     */
    SUBSCRIPTION_DELETED_TRIGGER: "STRIPE_SUBSCRIPTION_DELETED_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "STRIPE".
 */
export type STRIPE_TRIGGER_PAYLOADS = {
  CHARGE_FAILED_TRIGGER: STRIPE_CHARGE_FAILED_TRIGGER_PAYLOAD
  CHECKOUT_SESSION_COMPLETED_TRIGGER: STRIPE_CHECKOUT_SESSION_COMPLETED_TRIGGER_PAYLOAD
  INVOICE_PAYMENT_SUCCEEDED_TRIGGER: STRIPE_INVOICE_PAYMENT_SUCCEEDED_TRIGGER_PAYLOAD
  PAYMENT_FAILED_TRIGGER: STRIPE_PAYMENT_FAILED_TRIGGER_PAYLOAD
  PRODUCT_CREATED_TRIGGER: STRIPE_PRODUCT_CREATED_TRIGGER_PAYLOAD
  SUBSCRIPTION_ADDED_TRIGGER: STRIPE_SUBSCRIPTION_ADDED_TRIGGER_PAYLOAD
  SUBSCRIPTION_DELETED_TRIGGER: STRIPE_SUBSCRIPTION_DELETED_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "STRIPE".
 */
export type STRIPE_TRIGGER_EVENTS = {
  CHARGE_FAILED_TRIGGER: TriggerEvent<STRIPE_CHARGE_FAILED_TRIGGER_PAYLOAD>
  CHECKOUT_SESSION_COMPLETED_TRIGGER: TriggerEvent<STRIPE_CHECKOUT_SESSION_COMPLETED_TRIGGER_PAYLOAD>
  INVOICE_PAYMENT_SUCCEEDED_TRIGGER: TriggerEvent<STRIPE_INVOICE_PAYMENT_SUCCEEDED_TRIGGER_PAYLOAD>
  PAYMENT_FAILED_TRIGGER: TriggerEvent<STRIPE_PAYMENT_FAILED_TRIGGER_PAYLOAD>
  PRODUCT_CREATED_TRIGGER: TriggerEvent<STRIPE_PRODUCT_CREATED_TRIGGER_PAYLOAD>
  SUBSCRIPTION_ADDED_TRIGGER: TriggerEvent<STRIPE_SUBSCRIPTION_ADDED_TRIGGER_PAYLOAD>
  SUBSCRIPTION_DELETED_TRIGGER: TriggerEvent<STRIPE_SUBSCRIPTION_DELETED_TRIGGER_PAYLOAD>
}
