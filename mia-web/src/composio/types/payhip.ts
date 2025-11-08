// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PAYHIP's PAYHIP_PAYHIP_WEBHOOK_EVENT_PAID tool input.
 */
type PAYHIP_PAYHIP_WEBHOOK_EVENT_PAID_INPUT = {
  /**
   * Currency
   * @description Three-letter currency code
   */
  currency?: string;
  /**
   * Date
   * @description Unix timestamp when purchase occurred
   */
  date?: number;
  /**
   * Email
   * Format: email
   * @description Customer's email address
   */
  email?: unknown;
  /**
   * Id
   * @description Unique ID of the transaction
   */
  id?: string;
  /**
   * Ip Address
   * Format: ipv4
   * @description Customer's IP address
   */
  ip_address?: unknown;
  /**
   * Is Gift
   * @description Whether the purchase was a gift
   */
  is_gift?: boolean;
  /**
   * Items
   * @description List of items in the order
   */
  items?: {
      /**
       * Has Variant
       * @description Whether the product has variants
       */
      has_variant: boolean;
      /**
       * On Sale
       * @description Whether the product was on sale
       */
      on_sale: boolean;
      /**
       * Product Id
       * @description ID of the product
       */
      product_id: string;
      /**
       * Product Key
       * @description Link key for the product
       */
      product_key: string;
      /**
       * Product Name
       * @description Name of the product
       */
      product_name: string;
      /**
       * Product Permalink
       * Format: uri
       * @description Public URL for the product
       */
      product_permalink: unknown;
      /**
       * Promoted By Affiliate
       * @description Whether an affiliate promotion was applied
       */
      promoted_by_affiliate: boolean;
      /**
       * Quantity
       * @description Quantity purchased
       */
      quantity: number;
      /**
       * Used Coupon
       * @description Whether a coupon was used
       */
      used_coupon: boolean;
      /**
       * Used Cross Sell Discount
       * @description Whether a cross-sell discount was used
       */
      used_cross_sell_discount: boolean;
      /**
       * Used Social Discount
       * @description Whether a social discount was used
       */
      used_social_discount: boolean;
      /**
       * Used Upgrade Discount
       * @description Whether an upgrade discount was used
       */
      used_upgrade_discount: boolean;
  }[];
  /**
   * Payhip Fee
   * @description Payhip fee in cents
   */
  payhip_fee?: number;
  /**
   * Payment Type
   * @description Payment method used
   * @enum {string}
   */
  payment_type?: "card" | "paypal";
  /**
   * Price
   * @description Total price in cents
   */
  price?: number;
  /**
   * Signature
   * @description HMAC SHA-256 signature of the payload using your API key
   */
  signature?: string;
  /**
   * Stripe Fee
   * @description Stripe fee in cents
   */
  stripe_fee?: number;
  /**
   * Type
   * @description Event type identifier
   * @constant
   */
  type?: "paid";
  /**
   * Unconsented From Emails
   * @description Whether customer has opted out of emails
   */
  unconsented_from_emails?: boolean;
  /**
   * Vat Applied
   * @description Whether VAT was applied to the purchase
   */
  vat_applied?: boolean;
};

/**
 * Type of PAYHIP's PAYHIP_PAYHIP_WEBHOOK_EVENT_PAID tool output.
 */
type PAYHIP_PAYHIP_WEBHOOK_EVENT_PAID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Currency */
      currency: string;
      /** Date */
      date: number;
      /**
       * Email
       * Format: email
       */
      email: unknown;
      /** Id */
      id: string;
      /**
       * Ip Address
       * Format: ipv4
       */
      ip_address: unknown;
      /** Is Gift */
      is_gift: boolean;
      /** Items */
      items: {
          /**
           * Has Variant
           * @description Whether the product has variants
           */
          has_variant: boolean;
          /**
           * On Sale
           * @description Whether the product was on sale
           */
          on_sale: boolean;
          /**
           * Product Id
           * @description ID of the product
           */
          product_id: string;
          /**
           * Product Key
           * @description Link key for the product
           */
          product_key: string;
          /**
           * Product Name
           * @description Name of the product
           */
          product_name: string;
          /**
           * Product Permalink
           * Format: uri
           * @description Public URL for the product
           */
          product_permalink: unknown;
          /**
           * Promoted By Affiliate
           * @description Whether an affiliate promotion was applied
           */
          promoted_by_affiliate: boolean;
          /**
           * Quantity
           * @description Quantity purchased
           */
          quantity: number;
          /**
           * Used Coupon
           * @description Whether a coupon was used
           */
          used_coupon: boolean;
          /**
           * Used Cross Sell Discount
           * @description Whether a cross-sell discount was used
           */
          used_cross_sell_discount: boolean;
          /**
           * Used Social Discount
           * @description Whether a social discount was used
           */
          used_social_discount: boolean;
          /**
           * Used Upgrade Discount
           * @description Whether an upgrade discount was used
           */
          used_upgrade_discount: boolean;
      }[];
      /** Payhip Fee */
      payhip_fee: number;
      /**
       * Payment Type
       * @enum {string}
       */
      payment_type: "card" | "paypal";
      /** Price */
      price: number;
      /** Signature */
      signature: string;
      /** Stripe Fee */
      stripe_fee: number;
      /**
       * Type
       * @constant
       */
      type: "paid";
      /** Unconsented From Emails */
      unconsented_from_emails: boolean;
      /** Vat Applied */
      vat_applied: boolean;
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
 * Type of PAYHIP's PAYHIP_PAYHIP_WEBHOOK_EVENT_REFUNDED tool input.
 */
type PAYHIP_PAYHIP_WEBHOOK_EVENT_REFUNDED_INPUT = {
  /**
   * Amount Refunded
   * @description Amount refunded in cents or pennies
   */
  amount_refunded?: number;
  /**
   * Currency
   * @description ISO 4217 currency code, e.g., USD
   */
  currency?: string;
  /**
   * Date Created
   * @description Unix timestamp when transaction was created
   */
  date_created?: number;
  /**
   * Date Refunded
   * @description Unix timestamp when refund occurred
   */
  date_refunded?: number;
  /**
   * Email
   * Format: email
   * @description Buyer email address
   */
  email?: unknown;
  /**
   * Id
   * @description Transaction ID
   */
  id?: string;
  /**
   * Ip Address
   * @description IP address of the buyer
   */
  ip_address?: string;
  /**
   * Is Gift
   * @description Whether purchase was a gift
   */
  is_gift?: boolean;
  /**
   * Items
   * @description List of items included in the transaction
   */
  items?: {
      /**
       * Has Variant
       * @description Whether product has a variant
       */
      has_variant: boolean;
      /**
       * On Sale
       * @description Whether product was on sale
       */
      on_sale: boolean;
      /**
       * Product Id
       * @description Unique identifier for the product
       */
      product_id: string;
      /**
       * Product Key
       * @description Product key
       */
      product_key: string;
      /**
       * Product Name
       * @description Name of the product
       */
      product_name: string;
      /**
       * Product Permalink
       * @description Product permalink URL
       */
      product_permalink: string;
      /**
       * Promoted By Affiliate
       * @description Whether purchase was promoted by an affiliate
       */
      promoted_by_affiliate: boolean;
      /**
       * Quantity
       * @description Quantity purchased
       */
      quantity: string;
      /**
       * Used Coupon
       * @description Whether coupon was used
       */
      used_coupon: boolean;
      /**
       * Used Cross Sell Discount
       * @description Whether cross-sell discount was used
       */
      used_cross_sell_discount: boolean;
      /**
       * Used Social Discount
       * @description Whether social discount was used
       */
      used_social_discount: boolean;
      /**
       * Used Upgrade Discount
       * @description Whether upgrade discount was used
       */
      used_upgrade_discount: boolean;
  }[];
  /**
   * Payhip Fee
   * @description Payhip fee in cents
   */
  payhip_fee?: number;
  /**
   * Payment Type
   * @description Payment method used, e.g., card
   */
  payment_type?: string;
  /**
   * Price
   * @description Original price in cents or pennies
   */
  price?: number;
  /**
   * Signature
   * @description HMAC SHA-256 signature of the payload using your API key
   */
  signature?: string;
  /**
   * Stripe Fee
   * @description Stripe fee in cents
   */
  stripe_fee?: number;
  /**
   * Type
   * @description Event type identifier
   * @constant
   */
  type?: "refunded";
  /**
   * Unconsented From Emails
   * @description Whether buyer did not consent to marketing emails
   */
  unconsented_from_emails?: boolean;
  /**
   * Vat Applied
   * @description Whether VAT was applied
   */
  vat_applied?: boolean;
};

/**
 * Type of PAYHIP's PAYHIP_PAYHIP_WEBHOOK_EVENT_REFUNDED tool output.
 */
type PAYHIP_PAYHIP_WEBHOOK_EVENT_REFUNDED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Amount Refunded */
      amount_refunded: number;
      /** Currency */
      currency: string;
      /** Date Created */
      date_created: number;
      /** Date Refunded */
      date_refunded: number;
      /**
       * Email
       * Format: email
       */
      email: unknown;
      /** Id */
      id: string;
      /** Ip Address */
      ip_address: string;
      /** Is Gift */
      is_gift: boolean;
      /** Items */
      items: {
          /**
           * Has Variant
           * @description Whether product has a variant
           */
          has_variant: boolean;
          /**
           * On Sale
           * @description Whether product was on sale
           */
          on_sale: boolean;
          /**
           * Product Id
           * @description Unique identifier for the product
           */
          product_id: string;
          /**
           * Product Key
           * @description Product key
           */
          product_key: string;
          /**
           * Product Name
           * @description Name of the product
           */
          product_name: string;
          /**
           * Product Permalink
           * @description Product permalink URL
           */
          product_permalink: string;
          /**
           * Promoted By Affiliate
           * @description Whether purchase was promoted by an affiliate
           */
          promoted_by_affiliate: boolean;
          /**
           * Quantity
           * @description Quantity purchased
           */
          quantity: string;
          /**
           * Used Coupon
           * @description Whether coupon was used
           */
          used_coupon: boolean;
          /**
           * Used Cross Sell Discount
           * @description Whether cross-sell discount was used
           */
          used_cross_sell_discount: boolean;
          /**
           * Used Social Discount
           * @description Whether social discount was used
           */
          used_social_discount: boolean;
          /**
           * Used Upgrade Discount
           * @description Whether upgrade discount was used
           */
          used_upgrade_discount: boolean;
      }[];
      /** Payhip Fee */
      payhip_fee: number;
      /** Payment Type */
      payment_type: string;
      /** Price */
      price: number;
      /** Signature */
      signature: string;
      /** Stripe Fee */
      stripe_fee: number;
      /**
       * Type
       * @constant
       */
      type: "refunded";
      /** Unconsented From Emails */
      unconsented_from_emails: boolean;
      /** Vat Applied */
      vat_applied: boolean;
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
 * Type of PAYHIP's PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_CREATED tool input.
 */
type PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_CREATED_INPUT = {
  /**
   * Customer Email
   * Format: email
   * @description Customer's email address
   */
  customer_email?: unknown;
  /**
   * Customer First Name
   * @description Customer's first name
   */
  customer_first_name?: string;
  /**
   * Customer Id
   * @description Unique identifier for the customer
   */
  customer_id?: string;
  /**
   * Customer Last Name
   * @description Customer's last name
   */
  customer_last_name?: string;
  /**
   * Date Subscription Started
   * @description Unix timestamp when the subscription started
   */
  date_subscription_started?: number;
  /**
   * Gdpr Consent
   * @description Customer's GDPR consent status
   * @enum {string}
   */
  gdpr_consent?: "Yes" | "No";
  /**
   * Plan Name
   * @description Name of the subscription plan
   */
  plan_name?: string;
  /**
   * Product Link
   * @description Payhip product link identifier
   */
  product_link?: string;
  /**
   * Product Name
   * @description Name of the product
   */
  product_name?: string;
  /**
   * Signature
   * @description HMAC SHA-256 signature of the payload using your API key
   */
  signature?: string;
  /**
   * Status
   * @description Subscription status at creation; always 'active' for this event
   * @constant
   */
  status?: "active";
  /**
   * Subscription Id
   * @description Unique identifier for the subscription
   */
  subscription_id?: string;
  /**
   * Type
   * @description Event type identifier
   * @constant
   */
  type?: "subscription.created";
};

/**
 * Type of PAYHIP's PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_CREATED tool output.
 */
type PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_CREATED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customer Email
       * Format: email
       */
      customer_email: unknown;
      /** Customer First Name */
      customer_first_name: string;
      /** Customer Id */
      customer_id: string;
      /** Customer Last Name */
      customer_last_name: string;
      /** Date Subscription Started */
      date_subscription_started: number;
      /**
       * Gdpr Consent
       * @enum {string}
       */
      gdpr_consent: "Yes" | "No";
      /** Plan Name */
      plan_name: string;
      /** Product Link */
      product_link: string;
      /** Product Name */
      product_name: string;
      /** Signature */
      signature: string;
      /**
       * Status
       * @constant
       */
      status: "active";
      /** Subscription Id */
      subscription_id: string;
      /**
       * Type
       * @constant
       */
      type: "subscription.created";
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
 * Type of PAYHIP's PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_DELETED tool input.
 */
type PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_DELETED_INPUT = {
  /**
   * Customer Email
   * Format: email
   * @description Customer's email address
   */
  customer_email?: unknown;
  /**
   * Customer First Name
   * @description Customer's first name
   */
  customer_first_name?: string;
  /**
   * Customer Id
   * @description Unique identifier for the customer
   */
  customer_id?: string;
  /**
   * Customer Last Name
   * @description Customer's last name
   */
  customer_last_name?: string;
  /**
   * Date Subscription Deleted
   * @description Unix timestamp when subscription was canceled
   */
  date_subscription_deleted?: number;
  /**
   * Date Subscription Started
   * @description Unix timestamp when subscription started
   */
  date_subscription_started?: number;
  /**
   * Gdpr Consent
   * @description Whether the customer gave GDPR consent ('Yes' or 'No')
   * @enum {string}
   */
  gdpr_consent?: "Yes" | "No";
  /**
   * Plan Name
   * @description Name of the subscription plan
   */
  plan_name?: string;
  /**
   * Product Link
   * @description Payhip product link identifier
   */
  product_link?: string;
  /**
   * Product Name
   * @description Name of the product
   */
  product_name?: string;
  /**
   * Signature
   * @description HMAC SHA-256 signature of the payload using your API key
   */
  signature?: string;
  /**
   * Status
   * @description Current subscription status; always 'canceled' for this event
   * @constant
   */
  status?: "canceled";
  /**
   * Subscription Id
   * @description Unique identifier for the subscription
   */
  subscription_id?: string;
  /**
   * Type
   * @description Event type identifier
   * @constant
   */
  type?: "subscription.deleted";
};

/**
 * Type of PAYHIP's PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_DELETED tool output.
 */
type PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_DELETED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customer Email
       * Format: email
       */
      customer_email: unknown;
      /** Customer First Name */
      customer_first_name: string;
      /** Customer Id */
      customer_id: string;
      /** Customer Last Name */
      customer_last_name: string;
      /** Date Subscription Deleted */
      date_subscription_deleted: number;
      /** Date Subscription Started */
      date_subscription_started: number;
      /**
       * Gdpr Consent
       * @enum {string}
       */
      gdpr_consent: "Yes" | "No";
      /** Plan Name */
      plan_name: string;
      /** Product Link */
      product_link: string;
      /** Product Name */
      product_name: string;
      /** Signature */
      signature: string;
      /**
       * Status
       * @constant
       */
      status: "canceled";
      /** Subscription Id */
      subscription_id: string;
      /**
       * Type
       * @constant
       */
      type: "subscription.deleted";
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
 * Type map of all available tool input types for toolkit "PAYHIP".
 */
export type PAYHIP_TOOL_INPUTS = {
  PAYHIP_WEBHOOK_EVENT_PAID: PAYHIP_PAYHIP_WEBHOOK_EVENT_PAID_INPUT
  PAYHIP_WEBHOOK_EVENT_REFUNDED: PAYHIP_PAYHIP_WEBHOOK_EVENT_REFUNDED_INPUT
  PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_CREATED: PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_CREATED_INPUT
  PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_DELETED: PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_DELETED_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PAYHIP".
 */
export type PAYHIP_TOOL_OUTPUTS = {
  PAYHIP_WEBHOOK_EVENT_PAID: PAYHIP_PAYHIP_WEBHOOK_EVENT_PAID_OUTPUT
  PAYHIP_WEBHOOK_EVENT_REFUNDED: PAYHIP_PAYHIP_WEBHOOK_EVENT_REFUNDED_OUTPUT
  PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_CREATED: PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_CREATED_OUTPUT
  PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_DELETED: PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_DELETED_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PAYHIP toolkit.
 */
export const PAYHIP = {
  slug: "payhip",
  tools: {
    /**
     * Tool to process payhip's paid webhook event. use when handling a purchase completion webhook from payhip.
     */
    PAYHIP_WEBHOOK_EVENT_PAID: "PAYHIP_PAYHIP_WEBHOOK_EVENT_PAID",
    /**
     * Tool to process payhip's refunded webhook event. use when handling a payment refund event from payhip.
     */
    PAYHIP_WEBHOOK_EVENT_REFUNDED: "PAYHIP_PAYHIP_WEBHOOK_EVENT_REFUNDED",
    /**
     * Tool to process payhip's subscription.created webhook event. use when handling a subscription start event from payhip.
     */
    PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_CREATED: "PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_CREATED",
    /**
     * Tool to process payhip's 'subscription.deleted' webhook event. use when handling a subscription cancellation event from payhip.
     */
    PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_DELETED: "PAYHIP_PAYHIP_WEBHOOK_EVENT_SUBSCRIPTION_DELETED",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PAYHIP".
 */
export type PAYHIP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PAYHIP".
 */
export type PAYHIP_TRIGGER_EVENTS = {}
