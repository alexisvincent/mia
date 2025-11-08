// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MOONCLERK's MOONCLERK_LIST_CUSTOMERS tool input.
 */
type MOONCLERK_LIST_CUSTOMERS_INPUT = {
  /**
   * Checkout From
   * @description Customers created on or after this date (YYYY-MM-DD).
   * @default null
   */
  checkout_from: string | null;
  /**
   * Checkout To
   * @description Customers created on or before this date (YYYY-MM-DD).
   * @default null
   */
  checkout_to: string | null;
  /**
   * Form Id
   * @description The associated MoonClerk form ID to filter customers.
   * @default null
   */
  form_id: number | null;
  /**
   * Next Payment From
   * @description Subscriptions due to bill on or after this date (YYYY-MM-DD).
   * @default null
   */
  next_payment_from: string | null;
  /**
   * Next Payment To
   * @description Subscriptions due to bill on or before this date (YYYY-MM-DD).
   * @default null
   */
  next_payment_to: string | null;
  /**
   * Status
   * @description Filter by subscription status.
   * @default null
   * @enum {string|null}
   */
  status: "active" | "canceled" | "expired" | "past_due" | "pending" | "unpaid" | null;
};

/**
 * Type of MOONCLERK's MOONCLERK_LIST_CUSTOMERS tool output.
 */
type MOONCLERK_LIST_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customers
       * @description List of customer objects.
       */
      customers: {
          /**
           * Account Balance
           * @description Account balance in cents.
           */
          account_balance: number;
          /**
           * Checkout
           * @description Checkout details for the customer.
           */
          checkout: {
              /**
               * Amount Due
               * @description Amount due in cents.
               */
              amount_due: number;
              /**
               * Coupon Amount
               * @description Coupon amount in cents.
               */
              coupon_amount: number;
              /**
               * Coupon Code
               * @description Applied coupon code.
               * @default null
               */
              coupon_code: string | null;
              /**
               * Date
               * @description Checkout timestamp (ISO 8601).
               */
              date: string;
              /**
               * Fee
               * @description Fee amount in cents.
               */
              fee: number;
              /**
               * Subtotal
               * @description Subtotal in cents.
               */
              subtotal: number;
              /**
               * Token
               * @description Checkout token.
               */
              token: string;
              /**
               * Total
               * @description Total amount in cents.
               */
              total: number;
              /**
               * Trial Period Days
               * @description Trial period days if trial is applied.
               * @default null
               */
              trial_period_days: number | null;
              /**
               * Upfront Amount
               * @description Upfront amount charged in cents.
               * @default null
               */
              upfront_amount: number | null;
          };
          /**
           * Custom Fields
           * @description Custom field responses keyed by field name.
           * @default null
           */
          custom_fields: {
              [key: string]: {
                  /**
                   * Id
                   * @description Custom field ID.
                   */
                  id: number;
                  /**
                   * Response
                   * @description Response value, string or address object.
                   */
                  response: string | {
                      /**
                       * City
                       * @description City name.
                       */
                      city: string;
                      /**
                       * Country
                       * @description Country name.
                       */
                      country: string;
                      /**
                       * Line1
                       * @description First line of the address.
                       */
                      line1: string;
                      /**
                       * Line2
                       * @description Second line of the address.
                       * @default null
                       */
                      line2: string | null;
                      /**
                       * Postal Code
                       * @description ZIP or postal code.
                       */
                      postal_code: string;
                      /**
                       * State
                       * @description State or province.
                       */
                      state: string;
                  };
                  /**
                   * Type
                   * @description Custom field type, e.g., 'string' or 'address'.
                   */
                  type: string;
              };
          } | null;
          /**
           * Custom Id
           * @description Custom ID set via integration.
           * @default null
           */
          custom_id: string | null;
          /**
           * Customer Reference
           * @description Stripe customer ID reference.
           * @default null
           */
          customer_reference: string | null;
          /**
           * Delinquent
           * @description Whether the customer is delinquent.
           */
          delinquent: boolean;
          /**
           * Discount
           * @description Discount details including coupon and validity.
           * @default null
           */
          discount: {
              /**
               * Coupon
               * @description Coupon applied to the customer.
               */
              coupon: {
                  /**
                   * Amount Off
                   * @description Amount off in cents.
                   * @default null
                   */
                  amount_off: number | null;
                  /**
                   * Code
                   * @description Coupon code.
                   */
                  code: string;
                  /**
                   * Currency
                   * @description Currency for the amount_off, e.g., 'USD'.
                   * @default null
                   */
                  currency: string | null;
                  /**
                   * Duration
                   * @description Duration of the coupon, e.g., 'once'.
                   */
                  duration: string;
                  /**
                   * Duration In Months
                   * @description Number of months the coupon is valid for (if applicable).
                   * @default null
                   */
                  duration_in_months: number | null;
                  /**
                   * Max Redemptions
                   * @description Maximum number of redemptions allowed by the coupon.
                   * @default null
                   */
                  max_redemptions: number | null;
                  /**
                   * Percent Off
                   * @description Percent off for the coupon.
                   * @default null
                   */
                  percent_off: number | null;
                  /**
                   * Redeem By
                   * @description ISO 8601 date when the coupon expires.
                   * @default null
                   */
                  redeem_by: string | null;
              };
              /**
               * Ends At
               * @description Discount end date (ISO 8601).
               * @default null
               */
              ends_at: string | null;
              /**
               * Starts At
               * @description Discount start date (ISO 8601).
               * @default null
               */
              starts_at: string | null;
          } | null;
          /**
           * Email
           * @description Customer email address.
           */
          email: string;
          /**
           * Form Id
           * @description Associated form ID.
           */
          form_id: number;
          /**
           * Id
           * @description Customer ID.
           */
          id: number;
          /**
           * Management Url
           * @description URL for managing the subscription in MoonClerk UI.
           * @default null
           */
          management_url: string | null;
          /**
           * Name
           * @description Customer name.
           */
          name: string;
          /**
           * PaymentMethod
           * @description Payment method details.
           * @default null
           */
          payment_method: {
              /**
               * Brand
               * @description Card brand, e.g., 'Visa'.
               */
              brand: string;
              /**
               * Exp Month
               * @description Card expiration month.
               */
              exp_month: number;
              /**
               * Exp Year
               * @description Card expiration year.
               */
              exp_year: number;
              /**
               * Last4
               * @description Last 4 digits of the card.
               */
              last4: string;
              /**
               * Type
               * @description Payment method type, e.g., 'card'.
               */
              type: string;
          } | null;
          /**
           * Subscription
           * @description Subscription details for the customer.
           * @default null
           */
          subscription: {
              /**
               * Canceled At
               * @description Cancellation timestamp if applicable.
               * @default null
               */
              canceled_at: string | null;
              /**
               * Current Period End
               * @description End of current period (ISO 8601).
               */
              current_period_end: string;
              /**
               * Current Period Start
               * @description Start of current period (ISO 8601).
               */
              current_period_start: string;
              /**
               * Ended At
               * @description End timestamp if subscription ended.
               * @default null
               */
              ended_at: string | null;
              /**
               * Expires At
               * @description Expiration timestamp if set.
               * @default null
               */
              expires_at: string | null;
              /**
               * First Payment Attempt
               * @description First payment attempt timestamp (ISO 8601).
               */
              first_payment_attempt: string;
              /**
               * Id
               * @description Subscription ID.
               */
              id: number;
              /**
               * Next Payment Attempt
               * @description Next payment attempt timestamp (ISO 8601).
               * @default null
               */
              next_payment_attempt: string | null;
              /**
               * Plan
               * @description Associated plan details.
               */
              plan: {
                  /**
                   * Amount
                   * @description Amount in cents.
                   */
                  amount: number;
                  /**
                   * Amount Description
                   * @description Description of the amount option.
                   */
                  amount_description: string;
                  /**
                   * Currency
                   * @description Currency code, e.g., 'USD'.
                   */
                  currency: string;
                  /**
                   * Id
                   * @description Plan ID.
                   */
                  id: number;
                  /**
                   * Interval
                   * @description Billing interval, e.g., 'month'.
                   */
                  interval: string;
                  /**
                   * Interval Count
                   * @description Interval count, e.g., 1 for monthly.
                   */
                  interval_count: number;
                  /**
                   * Plan Reference
                   * @description Plan reference ID.
                   */
                  plan_reference: string;
              };
              /**
               * Start
               * @description Subscription start timestamp (ISO 8601).
               */
              start: string;
              /**
               * Status
               * @description Subscription status.
               */
              status: string;
              /**
               * Subscription Reference
               * @description Subscription reference ID.
               */
              subscription_reference: string;
              /**
               * Trial End
               * @description Trial end timestamp if applicable.
               * @default null
               */
              trial_end: string | null;
              /**
               * Trial Period Days
               * @description Number of trial days if applicable.
               * @default null
               */
              trial_period_days: number | null;
              /**
               * Trial Start
               * @description Trial start timestamp if applicable.
               * @default null
               */
              trial_start: string | null;
          } | null;
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
 * Type of MOONCLERK's MOONCLERK_LIST_DISCOUNTS tool input.
 */
type MOONCLERK_LIST_DISCOUNTS_INPUT = {
  /**
   * Checkout From
   * @description Filter customers created on or after this date (YYYY-MM-DD).
   * @default null
   */
  checkout_from: string | null;
  /**
   * Checkout To
   * @description Filter customers created on or before this date (YYYY-MM-DD).
   * @default null
   */
  checkout_to: string | null;
  /**
   * Form Id
   * @description Filter discounts by associated MoonClerk form ID.
   * @default null
   */
  form_id: number | null;
  /**
   * Next Payment From
   * @description Filter subscriptions due to bill on or after this date (YYYY-MM-DD).
   * @default null
   */
  next_payment_from: string | null;
  /**
   * Next Payment To
   * @description Filter subscriptions due to bill on or before this date (YYYY-MM-DD).
   * @default null
   */
  next_payment_to: string | null;
  /**
   * Status
   * @description Filter by subscription status.
   * @default null
   * @enum {string|null}
   */
  status: "active" | "canceled" | "expired" | "past_due" | "pending" | "unpaid" | null;
};

/**
 * Type of MOONCLERK's MOONCLERK_LIST_DISCOUNTS tool output.
 */
type MOONCLERK_LIST_DISCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Discounts
       * @description List of discount entries.
       */
      discounts: {
          /**
           * Coupon
           * @description Details of the coupon applied.
           */
          coupon: {
              /**
               * Amount Off
               * @description Amount off in cents (nullable if percent_off is used).
               * @default null
               */
              amount_off: number | null;
              /**
               * Code
               * @description Coupon code.
               */
              code: string;
              /**
               * Currency
               * @description Currency code for amount_off, e.g., 'USD'.
               * @default null
               */
              currency: string | null;
              /**
               * Duration
               * @description Duration of the coupon, e.g., 'once' or 'repeating'.
               */
              duration: string;
              /**
               * Duration In Months
               * @description Number of months the coupon is valid for (for repeating coupons).
               * @default null
               */
              duration_in_months: number | null;
              /**
               * Max Redemptions
               * @description Maximum number of redemptions allowed by the coupon.
               * @default null
               */
              max_redemptions: number | null;
              /**
               * Percent Off
               * @description Percentage off for the coupon (nullable if amount_off is used).
               * @default null
               */
              percent_off: number | null;
              /**
               * Redeem By
               * @description ISO 8601 date by which the coupon must be redeemed.
               * @default null
               */
              redeem_by: string | null;
          };
          /**
           * Customer Id
           * @description ID of the customer with this discount.
           */
          customer_id: number;
          /**
           * Ends At
           * @description ISO 8601 timestamp when the discount ends.
           * @default null
           */
          ends_at: string | null;
          /**
           * Starts At
           * @description ISO 8601 timestamp when the discount starts.
           * @default null
           */
          starts_at: string | null;
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
 * Type of MOONCLERK's MOONCLERK_LIST_FORMS tool input.
 */
type MOONCLERK_LIST_FORMS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, starting at 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of forms per page
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of MOONCLERK's MOONCLERK_LIST_FORMS tool output.
 */
type MOONCLERK_LIST_FORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forms
       * @description List of payment forms returned from MoonClerk API
       */
      forms: {
          /**
           * Created At
           * @description Timestamp when the form was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the form
           */
          id: string;
          /**
           * Name
           * @description Name of the form
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the form was last updated
           */
          updated_at: string;
      }[];
      /**
       * PaginationMeta
       * @description Pagination details for a paged list response.
       * @default null
       */
      meta: {
          /**
           * Current Page
           * @description Current page number
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of forms returned per page
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of forms available
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages
           */
          total_pages: number;
      } | null;
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
 * Type of MOONCLERK's MOONCLERK_LIST_PAYMENTS tool input.
 */
type MOONCLERK_LIST_PAYMENTS_INPUT = {
  /**
   * Customer Id
   * @description MoonClerk customer ID to filter payments (e.g., 12742)
   * @default null
   */
  customer_id: number | null;
  /**
   * Date From
   * @description Include payments charged on or after this date (YYYY-MM-DD)
   * @default null
   */
  date_from: string | null;
  /**
   * Date To
   * @description Include payments charged on or before this date (YYYY-MM-DD)
   * @default null
   */
  date_to: string | null;
  /**
   * Form Id
   * @description MoonClerk form ID to filter payments (e.g., 5346)
   * @default null
   */
  form_id: number | null;
  /**
   * Status
   * @description Filter payments by status. Valid values: successful, refunded, failed
   * @default null
   * @enum {string|null}
   */
  status: "successful" | "refunded" | "failed" | null;
};

/**
 * Type of MOONCLERK's MOONCLERK_LIST_PAYMENTS tool output.
 */
type MOONCLERK_LIST_PAYMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Payments
       * @description List of payments matching the filters
       */
      payments: {
          /**
           * Amount
           * @description Payment amount in cents
           */
          amount: number;
          /**
           * Amount Description
           * @description Description of the payment amount option
           * @default null
           */
          amount_description: string | null;
          /**
           * Amount Refunded
           * @description Total refunded amount in cents
           */
          amount_refunded: number;
          /**
           * Charge Reference
           * @description Stripe charge reference
           */
          charge_reference: string;
          /**
           * CheckoutData
           * @description Checkout details for one-time checkouts
           * @default null
           */
          checkout: {
              /**
               * Amount Due
               * @description Amount due in cents
               */
              amount_due: number;
              /**
               * Coupon Amount
               * @description Coupon amount in cents
               */
              coupon_amount: number;
              /**
               * Coupon Code
               * @description Applied coupon code
               */
              coupon_code: string;
              /**
               * Date
               * @description Checkout date in UTC ISO 8601 format
               */
              date: string;
              /**
               * Fee
               * @description Stripe fee in cents
               */
              fee: number;
              /**
               * Subtotal
               * @description Subtotal in cents before fees and coupons
               */
              subtotal: number;
              /**
               * Token
               * @description Checkout token
               */
              token: string;
              /**
               * Total
               * @description Total amount in cents
               */
              total: number;
              /**
               * Trial Period Days
               * @description Number of trial days if applicable
               * @default null
               */
              trial_period_days: number | null;
              /**
               * Upfront Amount
               * @description Upfront amount in cents
               */
              upfront_amount: number;
          } | null;
          /**
           * CouponData
           * @description Applied coupon details if any
           * @default null
           */
          coupon: {
              /**
               * Amount Off
               * @description Amount off in cents
               */
              amount_off: number;
              /**
               * Code
               * @description Coupon code
               */
              code: string;
              /**
               * Currency
               * @description Currency of the coupon
               */
              currency: string;
              /**
               * Duration
               * @description Duration of the coupon, e.g., once
               */
              duration: string;
              /**
               * Duration In Months
               * @description Duration in months if applicable
               * @default null
               */
              duration_in_months: number | null;
              /**
               * Max Redemptions
               * @description Maximum number of redemptions allowed
               * @default null
               */
              max_redemptions: number | null;
              /**
               * Percent Off
               * @description Percentage off if applicable
               * @default null
               */
              percent_off: number | null;
              /**
               * Redeem By
               * @description Coupon redemption deadline (UTC date)
               * @default null
               */
              redeem_by: string | null;
          } | null;
          /**
           * Currency
           * @description Currency code, e.g., USD
           */
          currency: string;
          /**
           * Custom Fields
           * @description Mapping of custom field keys to values
           */
          custom_fields?: {
              [key: string]: {
                  /**
                   * Id
                   * @description Custom field ID
                   */
                  id: number;
                  /**
                   * Response
                   * @description Response for the custom field, string or address object
                   */
                  response: string | {
                      /**
                       * City
                       * @description City of the address
                       */
                      city: string;
                      /**
                       * Country
                       * @description Country of the address
                       */
                      country: string;
                      /**
                       * Line1
                       * @description Address line 1
                       */
                      line1: string;
                      /**
                       * Line2
                       * @description Address line 2
                       * @default null
                       */
                      line2: string | null;
                      /**
                       * Postal Code
                       * @description Postal code of the address
                       */
                      postal_code: string;
                      /**
                       * State
                       * @description State of the address
                       */
                      state: string;
                  };
                  /**
                   * Type
                   * @description Type of the custom field, e.g., string or address
                   */
                  type: string;
              };
          };
          /**
           * Custom Id
           * @description Custom identifier passed during integration
           * @default null
           */
          custom_id: string | null;
          /**
           * Customer Id
           * @description MoonClerk customer ID if part of recurring checkout
           * @default null
           */
          customer_id: number | null;
          /**
           * Customer Reference
           * @description Stripe customer reference if applicable
           * @default null
           */
          customer_reference: string | null;
          /**
           * Date
           * @description Payment date in UTC ISO 8601 format
           */
          date: string;
          /**
           * Email
           * @description Payer's email address
           */
          email: string;
          /**
           * Fee
           * @description Stripe fee in cents
           */
          fee: number;
          /**
           * Form Id
           * @description MoonClerk form ID that generated the payment
           */
          form_id: number;
          /**
           * Id
           * @description Unique payment identifier
           */
          id: number;
          /**
           * Invoice Reference
           * @description Stripe invoice reference if applicable
           * @default null
           */
          invoice_reference: string | null;
          /**
           * Name
           * @description Payer's name
           */
          name: string;
          /**
           * Payment Method
           * @description Payment method details
           */
          payment_method: {
              /**
               * Brand
               * @description Brand of the card, e.g., Visa
               */
              brand: string;
              /**
               * Last4
               * @description Last 4 digits of the card
               */
              last4: string;
              /**
               * Type
               * @description Payment method type, e.g., card
               */
              type: string;
          };
          /**
           * Status
           * @description Payment status
           * @enum {string}
           */
          status: "successful" | "refunded" | "failed";
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
 * Type of MOONCLERK's MOONCLERK_LIST_SUBSCRIPTIONS tool input.
 */
type MOONCLERK_LIST_SUBSCRIPTIONS_INPUT = {
  /**
   * Form Id
   * @description Filter subscriptions by the associated MoonClerk form ID (e.g., 5346)
   * @default null
   */
  form_id: string | null;
  /**
   * Next Payment From
   * @description Include subscriptions due to bill on or after this date (YYYY-MM-DD)
   * @default null
   */
  next_payment_from: string | null;
  /**
   * Next Payment To
   * @description Include subscriptions due to bill on or before this date (YYYY-MM-DD)
   * @default null
   */
  next_payment_to: string | null;
  /**
   * Status
   * @description Filter subscriptions by status. Valid options: active, canceled, expired, past_due, pending, unpaid
   * @default null
   * @enum {string|null}
   */
  status: "active" | "canceled" | "expired" | "past_due" | "pending" | "unpaid" | null;
};

/**
 * Type of MOONCLERK's MOONCLERK_LIST_SUBSCRIPTIONS tool output.
 */
type MOONCLERK_LIST_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscriptions
       * @description List of subscription objects.
       */
      subscriptions: {
          /**
           * Canceled At
           * @description Cancellation timestamp if applicable.
           * @default null
           */
          canceled_at: string | null;
          /**
           * Current Period End
           * @description End of current period (ISO 8601).
           */
          current_period_end: string;
          /**
           * Current Period Start
           * @description Start of current period (ISO 8601).
           */
          current_period_start: string;
          /**
           * Ended At
           * @description End timestamp if subscription ended.
           * @default null
           */
          ended_at: string | null;
          /**
           * Expires At
           * @description Expiration timestamp if set.
           * @default null
           */
          expires_at: string | null;
          /**
           * First Payment Attempt
           * @description First payment attempt timestamp (ISO 8601).
           */
          first_payment_attempt: string;
          /**
           * Id
           * @description Subscription ID.
           */
          id: number;
          /**
           * Next Payment Attempt
           * @description Next payment attempt timestamp (ISO 8601).
           * @default null
           */
          next_payment_attempt: string | null;
          /**
           * Plan
           * @description Associated plan details.
           */
          plan: {
              /**
               * Amount
               * @description Amount in cents.
               */
              amount: number;
              /**
               * Amount Description
               * @description Description of the amount option.
               */
              amount_description: string;
              /**
               * Currency
               * @description Currency code, e.g., USD.
               */
              currency: string;
              /**
               * Id
               * @description Plan ID.
               */
              id: number;
              /**
               * Interval
               * @description Billing interval, e.g., month.
               */
              interval: string;
              /**
               * Interval Count
               * @description Interval count, e.g., 1 for monthly.
               */
              interval_count: number;
              /**
               * Plan Reference
               * @description Plan reference ID.
               */
              plan_reference: string;
          };
          /**
           * Start
           * @description Subscription start timestamp (ISO 8601).
           */
          start: string;
          /**
           * Status
           * @description Subscription status.
           */
          status: string;
          /**
           * Subscription Reference
           * @description Subscription reference ID.
           */
          subscription_reference: string;
          /**
           * Trial End
           * @description Trial end timestamp if applicable.
           * @default null
           */
          trial_end: string | null;
          /**
           * Trial Period Days
           * @description Number of trial days if applicable.
           * @default null
           */
          trial_period_days: number | null;
          /**
           * Trial Start
           * @description Trial start timestamp if applicable.
           * @default null
           */
          trial_start: string | null;
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
 * Type map of all available tool input types for toolkit "MOONCLERK".
 */
export type MOONCLERK_TOOL_INPUTS = {
  LIST_CUSTOMERS: MOONCLERK_LIST_CUSTOMERS_INPUT
  LIST_DISCOUNTS: MOONCLERK_LIST_DISCOUNTS_INPUT
  LIST_FORMS: MOONCLERK_LIST_FORMS_INPUT
  LIST_PAYMENTS: MOONCLERK_LIST_PAYMENTS_INPUT
  LIST_SUBSCRIPTIONS: MOONCLERK_LIST_SUBSCRIPTIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MOONCLERK".
 */
export type MOONCLERK_TOOL_OUTPUTS = {
  LIST_CUSTOMERS: MOONCLERK_LIST_CUSTOMERS_OUTPUT
  LIST_DISCOUNTS: MOONCLERK_LIST_DISCOUNTS_OUTPUT
  LIST_FORMS: MOONCLERK_LIST_FORMS_OUTPUT
  LIST_PAYMENTS: MOONCLERK_LIST_PAYMENTS_OUTPUT
  LIST_SUBSCRIPTIONS: MOONCLERK_LIST_SUBSCRIPTIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MOONCLERK toolkit.
 */
export const MOONCLERK = {
  slug: "moonclerk",
  tools: {
    /**
     * Tool to list customers (plans) from moonclerk. use when you need to retrieve customer data with optional filters. use after authenticating api credentials.
     */
    LIST_CUSTOMERS: "MOONCLERK_LIST_CUSTOMERS",
    /**
     * Tool to retrieve a list of all discounts applied to customers. use after authenticating api credentials.
     */
    LIST_DISCOUNTS: "MOONCLERK_LIST_DISCOUNTS",
    /**
     * Tool to retrieve a list of all payment forms. use after authenticating to inspect available payment forms.
     */
    LIST_FORMS: "MOONCLERK_LIST_FORMS",
    /**
     * Tool to list payments. use when you need to retrieve all payments or filter by form, customer, date range, or status after authenticating.
     */
    LIST_PAYMENTS: "MOONCLERK_LIST_PAYMENTS",
    /**
     * Tool to list subscriptions. use when you need to retrieve all subscriptions after authenticating.
     */
    LIST_SUBSCRIPTIONS: "MOONCLERK_LIST_SUBSCRIPTIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MOONCLERK".
 */
export type MOONCLERK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MOONCLERK".
 */
export type MOONCLERK_TRIGGER_EVENTS = {}
