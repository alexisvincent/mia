// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_CREATE_CUSTOMER tool input.
 */
type LEMON_SQUEEZY_CREATE_CUSTOMER_INPUT = {
  /** Data */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * City
           * @description The city of the customer
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB')
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description The email of the customer
           */
          email: string;
          /**
           * Name
           * @description The full name of the customer
           */
          name: string;
          /**
           * Region
           * @description The region/state of the customer
           * @default null
           */
          region: string | null;
      };
      /** Relationships */
      relationships: {
          /** Store */
          store: {
              /** Data */
              data: {
                  /**
                   * Id
                   * @description The ID of the store
                   */
                  id: string;
                  /**
                   * Type
                   * @description Resource type, must be 'stores'
                   * @constant
                   */
                  type: "stores";
              };
          };
      };
      /**
       * Type
       * @description Resource type, must be 'customers'
       * @constant
       */
      type: "customers";
  };
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_CREATE_CUSTOMER tool output.
 */
type LEMON_SQUEEZY_CREATE_CUSTOMER_OUTPUT = {
  /** Data */
  data?: {
      /** Attributes */
      attributes: {
          /** City */
          city: string | null;
          /** Country */
          country: string;
          /** Country Formatted */
          country_formatted: string;
          /**
           * Created At
           * @description ISO 8601 date-time when the customer was created
           */
          created_at: string;
          /** Email */
          email: string;
          /**
           * Mrr
           * @description Monthly recurring revenue in cents
           */
          mrr: number;
          /** Mrr Formatted */
          mrr_formatted: string;
          /** Name */
          name: string;
          /** Region */
          region: string | null;
          /**
           * Status
           * @description Customer status (e.g., 'subscribed')
           */
          status: string;
          /** Status Formatted */
          status_formatted: string;
          /**
           * Store Id
           * @description The numeric ID of the store the customer belongs to
           */
          store_id: number;
          /**
           * Test Mode
           * @description True if created in test mode
           */
          test_mode: boolean;
          /**
           * Total Revenue Currency
           * @description Total revenue from the customer in cents
           */
          total_revenue_currency: number;
          /** Total Revenue Currency Formatted */
          total_revenue_currency_formatted: string;
          /**
           * Updated At
           * @description ISO 8601 date-time when the customer was last updated
           */
          updated_at: string;
          /** Urls */
          urls: {
              /**
               * Customer Portal
               * Format: uri
               * @description A pre-signed URL to the Customer Portal, valid for 24 hours
               * @default null
               */
              customer_portal: string | null;
          };
      };
      /** Id */
      id: string;
      /** Links */
      links: {
          [key: string]: string;
      };
      /** Relationships */
      relationships: {
          /** License Keys */
          "license-keys": {
              /**
               * Related
               * Format: uri
               */
              related: string;
              /**
               * Self
               * Format: uri
               */
              self: string;
          };
          /** Orders */
          orders: {
              /**
               * Related
               * Format: uri
               */
              related: string;
              /**
               * Self
               * Format: uri
               */
              self: string;
          };
          /** Store */
          store: {
              /**
               * Related
               * Format: uri
               */
              related: string;
              /**
               * Self
               * Format: uri
               */
              self: string;
          };
          /** Subscriptions */
          subscriptions: {
              /**
               * Related
               * Format: uri
               */
              related: string;
              /**
               * Self
               * Format: uri
               */
              self: string;
          };
      };
      /**
       * Type
       * @constant
       */
      type: "customers";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Jsonapi */
  jsonapi?: {
      [key: string]: string;
  };
  /** Links */
  links?: {
      [key: string]: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_AFFILIATES tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_AFFILIATES_INPUT = {
  /**
   * Page Number
   * @description Page number for pagination, starting at 1.
   * @default null
   */
  page_number: number | null;
  /**
   * Page Size
   * @description Number of affiliates per page (1-100).
   * @default null
   */
  page_size: number | null;
  /**
   * Sort
   * @description Sort order: 'createdAt' ascending or '-createdAt' descending.
   * @default null
   * @enum {string|null}
   */
  sort: "createdAt" | "-createdAt" | null;
  /**
   * Store Id
   * @description Filter affiliates by the ID of the store they belong to.
   * @default null
   */
  store_id: number | null;
  /**
   * User Email
   * @description Filter affiliates by user email.
   * @default null
   */
  user_email: string | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_AFFILIATES tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_AFFILIATES_OUTPUT = {
  /**
   * Data
   * @description List of affiliate records
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Application Note
           * @description Notes submitted by the affiliate on application
           * @default null
           */
          application_note: string | null;
          /**
           * Created At
           * @description Timestamp when the affiliate was created
           */
          created_at: string;
          /**
           * Products
           * @description List of product IDs the affiliate promotes
           * @default null
           */
          products: number[] | null;
          /**
           * Share Domain
           * @description Domain used for affiliate referrals
           */
          share_domain: string;
          /**
           * Status
           * @description Affiliate status, e.g., 'active'
           */
          status: string;
          /**
           * Store Id
           * @description Store ID the affiliate belongs to
           */
          store_id: number;
          /**
           * Total Earnings
           * @description Total earnings in cents
           */
          total_earnings: number;
          /**
           * Unpaid Earnings
           * @description Unpaid earnings in cents
           */
          unpaid_earnings: number;
          /**
           * Updated At
           * @description Timestamp when the affiliate was last updated
           */
          updated_at: string;
          /**
           * User Email
           * @description Email of the affiliate user
           */
          user_email: string;
          /**
           * User Id
           * @description User ID of the affiliate
           */
          user_id: number;
          /**
           * User Name
           * @description Name of the affiliate user
           */
          user_name: string;
      };
      /**
       * Id
       * @description Affiliate ID
       */
      id: string;
      /**
       * Links
       * @description Resource links
       */
      links: {
          [key: string]: string;
      };
      /** Relationships */
      relationships: {
          /** Store */
          store: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
          /** User */
          user: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type marker
       * @constant
       */
      type: "affiliates";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_CHECKOUTS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_CHECKOUTS_INPUT = {
  /**
   * Filter[Store Id]
   * @description Only return checkouts belonging to the store with this ID.
   * @default null
   */
  "filter[store_id]": number | null;
  /**
   * Filter[Variant Id]
   * @description Only return checkouts belonging to the variant with this ID.
   * @default null
   */
  "filter[variant_id]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_CHECKOUTS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_CHECKOUTS_OUTPUT = {
  /**
   * Data
   * @description List of checkouts
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Checkout Data
           * @description Checkout data payload
           */
          checkout_data: {
              /**
               * Billing Address
               * @description Billing address details
               */
              billing_address: unknown[];
              /**
               * Custom
               * @description Custom data entries
               */
              custom: unknown[];
              /**
               * Discount Code
               * @description Discount code applied
               */
              discount_code: string;
              /**
               * Email
               * @description Customer email
               */
              email: string;
              /**
               * Name
               * @description Customer name
               */
              name: string;
              /**
               * Tax Number
               * @description Tax number
               */
              tax_number: string;
              /**
               * Variant Quantities
               * @description Quantities per variant
               */
              variant_quantities: unknown[];
          };
          /**
           * Checkout Options
           * @description Checkout UI options
           */
          checkout_options: {
              /**
               * Button Color
               * @description Hex color for the purchase button
               */
              button_color: string;
              /**
               * Dark
               * @description Use dark mode if true
               */
              dark: boolean;
              /**
               * Desc
               * @description Show description if true
               */
              desc: boolean;
              /**
               * Discount
               * @description Show discount field if true
               */
              discount: boolean;
              /**
               * Embed
               * @description Show overlay if true
               */
              embed: boolean;
              /**
               * Logo
               * @description Show logo if true
               */
              logo: boolean;
              /**
               * Media
               * @description Show media if true
               */
              media: boolean;
              /**
               * Skip Trial
               * @description Skip trial if true
               */
              skip_trial: boolean;
              /**
               * Subscription Preview
               * @description Show subscription preview if true
               */
              subscription_preview: boolean;
          };
          /**
           * Created At
           * @description Creation timestamp
           */
          created_at: string;
          /**
           * Custom Price
           * @description Custom price in cents
           * @default null
           */
          custom_price: number | null;
          /**
           * Expires At
           * @description Expiration date/time in ISO 8601 format
           * @default null
           */
          expires_at: string | null;
          /**
           * Product Options
           * @description Product options override
           */
          product_options: {
              /**
               * Description
               * @description Product description override
               */
              description: string;
              /**
               * Enabled Variants
               * @description Enabled variant IDs
               */
              enabled_variants: number[];
              /**
               * Media
               * @description Media URLs for the product
               */
              media: unknown[];
              /**
               * Name
               * @description Product name override
               */
              name: string;
              /**
               * Receipt Button Text
               * @description Text for the receipt button
               */
              receipt_button_text: string;
              /**
               * Receipt Link Url
               * @description URL for the receipt link
               */
              receipt_link_url: string;
              /**
               * Receipt Thank You Note
               * @description Thank you note for receipt
               */
              receipt_thank_you_note: string;
              /**
               * Redirect Url
               * @description URL to redirect after purchase
               */
              redirect_url: string;
          };
          /**
           * Store Id
           * @description Store ID to which the checkout belongs
           */
          store_id: number;
          /**
           * Test Mode
           * @description Whether checkout is in test mode
           */
          test_mode: boolean;
          /**
           * Updated At
           * @description Update timestamp
           */
          updated_at: string;
          /**
           * Url
           * Format: uri
           * @description URL for the checkout session
           */
          url: string;
          /**
           * Variant Id
           * @description Variant ID for the checkout
           */
          variant_id: number;
      };
      /**
       * Id
       * @description Checkout ID
       */
      id: string;
      /** Links */
      links: {
          /**
           * First
           * Format: uri
           * @description First page URL
           */
          first: string;
          /**
           * Last
           * Format: uri
           * @description Last page URL
           */
          last: string;
      };
      /** Relationships */
      relationships: {
          /** Store */
          store: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
          /** Variant */
          variant: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type identifier
       * @constant
       */
      type: "checkouts";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * Format: uri
       * @description First page URL
       */
      first: string;
      /**
       * Last
       * Format: uri
       * @description Last page URL
       */
      last: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_CUSTOMERS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_CUSTOMERS_INPUT = {
  /**
   * Filter[Email]
   * @description Filter customers by email address.
   * @default null
   */
  "filter[email]": string | null;
  /**
   * Filter[Store Id]
   * @description Filter customers by the ID of the store to which they belong.
   * @default null
   */
  "filter[store_id]": number | null;
  /**
   * Page[Number]
   * @description Page number for pagination (starting at 1).
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of customers per page (1-100).
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_CUSTOMERS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description List of customer objects.
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * City
           * @description City of the customer.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country code of the customer.
           * @default null
           */
          country: string | null;
          /**
           * Country Formatted
           * @description Formatted country name.
           */
          country_formatted: string;
          /**
           * Created At
           * @description ISO 8601 date-time when the customer was created.
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the customer.
           */
          email: string;
          /**
           * Mrr
           * @description Monthly recurring revenue in cents (USD).
           */
          mrr: number;
          /**
           * Mrr Formatted
           * @description Formatted MRR (e.g., $9.99).
           */
          mrr_formatted: string;
          /**
           * Name
           * @description Full name of the customer.
           * @default null
           */
          name: string | null;
          /**
           * Region
           * @description Region of the customer.
           * @default null
           */
          region: string | null;
          /**
           * Status
           * @description Email marketing status.
           * @enum {string}
           */
          status: "subscribed" | "unsubscribed" | "archived" | "requires_verification" | "invalid_email" | "bounced";
          /**
           * Status Formatted
           * @description Formatted marketing status.
           */
          status_formatted: string;
          /**
           * Store Id
           * @description ID of the store this customer belongs to.
           */
          store_id: number;
          /**
           * Test Mode
           * @description Whether the customer was created in test mode.
           */
          test_mode: boolean;
          /**
           * Total Revenue Currency
           * @description Total revenue in cents (USD).
           */
          total_revenue_currency: number;
          /**
           * Total Revenue Currency Formatted
           * @description Formatted total revenue (e.g., $9.99).
           */
          total_revenue_currency_formatted: string;
          /**
           * Updated At
           * @description ISO 8601 date-time when the customer was last updated.
           */
          updated_at: string;
          /**
           * Urls
           * @description Customer-facing URLs.
           */
          urls: {
              /**
               * Customer Portal
               * Format: uri
               * @description Pre-signed URL to the Customer Portal for this customer.
               * @default null
               */
              customer_portal: string | null;
          };
      };
      /**
       * Id
       * @description Customer ID.
       */
      id: string;
      /**
       * Links
       * @description Resource links.
       */
      links: {
          [key: string]: string;
      };
      /** Relationships */
      relationships: {
          /**
           * License Keys
           * @description Links to the customer's license keys.
           */
          "license-keys": {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this resource relationship.
               */
              self: string;
          };
          /**
           * Orders
           * @description Links to the customer's orders.
           */
          orders: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this resource relationship.
               */
              self: string;
          };
          /**
           * Store
           * @description Links to the customer's store.
           */
          store: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this resource relationship.
               */
              self: string;
          };
          /**
           * Subscriptions
           * @description Links to the customer's subscriptions.
           */
          subscriptions: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this resource relationship.
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type.
       * @constant
       */
      type: "customers";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object.
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version.
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links.
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page
       * @description Pagination details.
       */
      page: {
          /**
           * Current Page
           * @description Current page number.
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page.
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number.
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page.
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page.
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages.
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_DISCOUNTS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_DISCOUNTS_INPUT = {
  /**
   * Page[Number]
   * @description Page number for pagination (starting at 1)
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of discounts per page (1-100)
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_DISCOUNTS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_DISCOUNTS_OUTPUT = {
  /**
   * Data
   * @description List of discounts
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Amount
           * @description Discount amount in cents or percentage based on amount_type
           */
          amount: number;
          /**
           * Amount Type
           * @description Type of the discount amount: percent or fixed
           * @enum {string}
           */
          amount_type: "percent" | "fixed";
          /**
           * Code
           * @description The discount code used at checkout
           */
          code: string;
          /**
           * Created At
           * @description Timestamp when the discount was created
           */
          created_at: string;
          /**
           * Duration
           * @description Duration of discount for subscriptions
           * @enum {string}
           */
          duration: "once" | "repeating" | "forever";
          /**
           * Duration In Months
           * @description Number of months discount applies when repeating
           */
          duration_in_months: number;
          /**
           * Expires At
           * @description ISO 8601 date-time when discount expires
           * @default null
           */
          expires_at: string | null;
          /**
           * Is Limited Redemptions
           * @description Whether the discount redemptions are limited
           */
          is_limited_redemptions: boolean;
          /**
           * Is Limited To Products
           * @description Whether the discount is limited to specific products
           */
          is_limited_to_products: boolean;
          /**
           * Max Redemptions
           * @description Maximum number of redemptions allowed
           */
          max_redemptions: number;
          /**
           * Name
           * @description Name of the discount
           */
          name: string;
          /**
           * Starts At
           * @description ISO 8601 date-time when discount becomes valid
           * @default null
           */
          starts_at: string | null;
          /**
           * Status
           * @description Status of the discount
           * @enum {string}
           */
          status: "draft" | "published";
          /**
           * Status Formatted
           * @description Formatted status of the discount
           */
          status_formatted: string;
          /**
           * Store Id
           * @description ID of the store the discount belongs to
           */
          store_id: number;
          /**
           * Test Mode
           * @description Whether this discount was created in test mode
           */
          test_mode: boolean;
          /**
           * Updated At
           * @description Timestamp when the discount was last updated
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Discount ID
       */
      id: string;
      /**
       * Links
       * @description Resource links
       */
      links: {
          [key: string]: string;
      };
      /** Relationships */
      relationships: {
          /**
           * Discount Redemptions
           * @description Links to discount redemptions
           */
          "discount-redemptions": {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
          /**
           * Store
           * @description Links to the store resource
           */
          store: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
          /**
           * Variants
           * @description Links to the variants resource
           */
          variants: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type
       * @constant
       */
      type: "discounts";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_DISCOUNT_REDEMPTIONS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_DISCOUNT_REDEMPTIONS_INPUT = {
  /**
   * Filter[Discount Id]
   * @description Return discount redemptions that belong to the discount with this ID.
   * @default null
   */
  "filter[discount_id]": number | null;
  /**
   * Filter[Order Id]
   * @description Return discount redemptions that belong to the order with this ID.
   * @default null
   */
  "filter[order_id]": number | null;
  /**
   * Page[Number]
   * @description Page number for pagination (starting at 1)
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of items per page (1-100)
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_DISCOUNT_REDEMPTIONS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_DISCOUNT_REDEMPTIONS_OUTPUT = {
  /**
   * Data
   * @description List of discount redemptions
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Amount
           * @description Final amount after discount (in cents)
           */
          amount: number;
          /**
           * Created At
           * @description Timestamp when redemption was created
           */
          created_at: string;
          /**
           * Discount Amount
           * @description Amount discounted (in cents or percentage units)
           */
          discount_amount: number;
          /**
           * Discount Amount Type
           * @description Type of discount amount, e.g., 'percent'
           */
          discount_amount_type: string;
          /**
           * Discount Code
           * @description Code of the discount
           */
          discount_code: string;
          /**
           * Discount Id
           * @description ID of the discount used
           */
          discount_id: number;
          /**
           * Discount Name
           * @description Name of the discount
           */
          discount_name: string;
          /**
           * Order Id
           * @description ID of the order redeemed
           */
          order_id: number;
          /**
           * Updated At
           * @description Timestamp when redemption was updated
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Redemption ID
       */
      id: string;
      /**
       * Links
       * @description Resource links
       */
      links: {
          [key: string]: string;
      };
      /** Relationships */
      relationships: {
          /** Discount */
          discount: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
          /** Order */
          order: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type
       * @constant
       */
      type: "discount-redemptions";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_LICENSE_KEY_INSTANCES tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_LICENSE_KEY_INSTANCES_INPUT = {
  /**
   * Filter[License Key Id]
   * @description Filter instances by the ID of the license key they belong to.
   * @default null
   */
  "filter[license_key_id]": number | null;
  /**
   * Page[Number]
   * @description Page number for pagination (starting at 1).
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of instances per page (1-100).
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_LICENSE_KEY_INSTANCES tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_LICENSE_KEY_INSTANCES_OUTPUT = {
  /**
   * Data
   * @description List of license key instances
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Created At
           * @description Timestamp when the instance was created
           */
          created_at: string;
          /**
           * Identifier
           * @description Unique identifier for the instance
           */
          identifier: string;
          /**
           * License Key Id
           * @description ID of the license key
           */
          license_key_id: number;
          /**
           * Name
           * @description Name of the license key instance
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the instance was last updated
           */
          updated_at: string;
      };
      /**
       * Id
       * @description License key instance ID
       */
      id: string;
      /** Links */
      links: {
          /**
           * Self
           * Format: uri
           * @description Link to the resource
           */
          self: string;
      };
      /** Relationships */
      relationships: {
          /**
           * License Key
           * @description Links to the license key resource
           */
          "license-key": {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type identifier
       * @constant
       */
      type: "license-key-instances";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_ORDERS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_ORDERS_INPUT = {
  /**
   * Filter[Store Id]
   * @description Return only orders belonging to the store with this ID.
   * @default null
   */
  "filter[store_id]": number | null;
  /**
   * Filter[User Email]
   * @description Return only orders where the `user_email` field matches this email address.
   * @default null
   */
  "filter[user_email]": string | null;
  /**
   * Page[Number]
   * @description Page number for pagination (starting at 1)
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of orders per page (1-100)
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_ORDERS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_ORDERS_OUTPUT = {
  /**
   * Data
   * @description List of orders
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Created At
           * @description ISO 8601 date-time when created
           */
          created_at: string;
          /**
           * Currency
           * @description Currency code
           */
          currency: string;
          /**
           * Currency Rate
           * @description Exchange rate to USD
           */
          currency_rate: string;
          /**
           * Customer Id
           * @description ID of the customer
           */
          customer_id: number;
          /**
           * Discount Total
           * @description Discount total in cents
           */
          discount_total: number;
          /**
           * Discount Total Formatted
           * @description Formatted discount total, e.g., '$0.00'
           */
          discount_total_formatted: string;
          /**
           * Discount Total Usd
           * @description Discount total in USD cents
           */
          discount_total_usd: number;
          /**
           * First Order Item
           * @description First order item data
           */
          first_order_item: {
              /**
               * Created At
               * @description ISO 8601 date-time when the item was created
               */
              created_at: string;
              /**
               * Deleted At
               * @description ISO 8601 date-time when deleted, if any
               * @default null
               */
              deleted_at: string | null;
              /**
               * Id
               * @description ID of the first order item
               */
              id: number;
              /**
               * Order Id
               * @description Order ID this item belongs to
               */
              order_id: number;
              /**
               * Price
               * @description Price of the item in cents
               */
              price: number;
              /**
               * Product Id
               * @description ID of the product
               */
              product_id: number;
              /**
               * Product Name
               * @description Name of the product
               */
              product_name: string;
              /**
               * Test Mode
               * @description Whether the item was created in test mode
               */
              test_mode: boolean;
              /**
               * Updated At
               * @description ISO 8601 date-time when the item was last updated
               */
              updated_at: string;
              /**
               * Variant Id
               * @description ID of the variant
               */
              variant_id: number;
              /**
               * Variant Name
               * @description Name of the variant
               */
              variant_name: string;
          };
          /**
           * Identifier
           * @description UUID identifier for the order
           */
          identifier: string;
          /**
           * Order Number
           * @description Sequential order number
           */
          order_number: number;
          /**
           * Refunded
           * @description Whether order is refunded
           */
          refunded: boolean;
          /**
           * Refunded At
           * @description ISO 8601 date-time when refunded
           * @default null
           */
          refunded_at: string | null;
          /**
           * Setup Fee
           * @description Setup fee in cents
           */
          setup_fee: number;
          /**
           * Setup Fee Formatted
           * @description Formatted setup fee, e.g., '$9.99'
           */
          setup_fee_formatted: string;
          /**
           * Setup Fee Usd
           * @description Setup fee in USD cents
           */
          setup_fee_usd: number;
          /**
           * Status
           * @description Order status
           */
          status: string;
          /**
           * Status Formatted
           * @description Formatted order status
           */
          status_formatted: string;
          /**
           * Store Id
           * @description ID of the store
           */
          store_id: number;
          /**
           * Subtotal
           * @description Subtotal in cents
           */
          subtotal: number;
          /**
           * Subtotal Formatted
           * @description Formatted subtotal, e.g., '$9.99'
           */
          subtotal_formatted: string;
          /**
           * Subtotal Usd
           * @description Subtotal in USD cents
           */
          subtotal_usd: number;
          /**
           * Tax
           * @description Tax amount in cents
           */
          tax: number;
          /**
           * Tax Formatted
           * @description Formatted tax, e.g., '$2.00'
           */
          tax_formatted: string;
          /**
           * Tax Inclusive
           * @description Whether tax is inclusive
           */
          tax_inclusive: boolean;
          /**
           * Tax Name
           * @description Tax name
           */
          tax_name: string;
          /**
           * Tax Rate
           * @description Tax rate
           */
          tax_rate: string;
          /**
           * Tax Usd
           * @description Tax in USD cents
           */
          tax_usd: number;
          /**
           * Test Mode
           * @description Whether order was created in test mode
           */
          test_mode: boolean;
          /**
           * Total
           * @description Total amount in cents
           */
          total: number;
          /**
           * Total Formatted
           * @description Formatted total, e.g., '$11.99'
           */
          total_formatted: string;
          /**
           * Total Usd
           * @description Total in USD cents
           */
          total_usd: number;
          /**
           * Updated At
           * @description ISO 8601 date-time when updated
           */
          updated_at: string;
          /**
           * Urls
           * @description Order URLs
           */
          urls: {
              /**
               * Receipt
               * Format: uri
               * @description URL to view the order receipt
               */
              receipt: string;
          };
          /**
           * User Email
           * @description Customer email
           */
          user_email: string;
          /**
           * User Name
           * @description Customer name
           */
          user_name: string;
      };
      /**
       * Id
       * @description Order ID
       */
      id: string;
      /** Links */
      links: {
          /**
           * Self
           * Format: uri
           * @description Link to the resource
           */
          self: string;
      };
      /** Relationships */
      relationships: {
          /**
           * Customer
           * @description Link to customer resource
           */
          customer: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this relationship
               */
              self: string;
          };
          /**
           * Discount Redemptions
           * @description Link to discount redemptions
           */
          "discount-redemptions": {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this relationship
               */
              self: string;
          };
          /**
           * License Keys
           * @description Link to license keys
           */
          "license-keys": {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this relationship
               */
              self: string;
          };
          /**
           * Order Items
           * @description Link to order items resource
           */
          "order-items": {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this relationship
               */
              self: string;
          };
          /**
           * Store
           * @description Link to store resource
           */
          store: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this relationship
               */
              self: string;
          };
          /**
           * Subscriptions
           * @description Link to subscriptions
           */
          subscriptions: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this relationship
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type
       * @constant
       */
      type: "orders";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_ORDER_ITEMS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_ORDER_ITEMS_INPUT = {
  /**
   * Filter[Order Id]
   * @description Filter order items by order ID
   * @default null
   * @example 1
   */
  "filter[order_id]": string | null;
  /**
   * Filter[Product Id]
   * @description Filter order items by product ID
   * @default null
   * @example 1
   */
  "filter[product_id]": string | null;
  /**
   * Filter[Variant Id]
   * @description Filter order items by variant ID
   * @default null
   * @example 1
   */
  "filter[variant_id]": string | null;
  /**
   * Page[Number]
   * @description Page number for pagination (starting at 1)
   * @default null
   * @example 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of order items per page (1-100)
   * @default null
   * @example 10
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_ORDER_ITEMS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_ORDER_ITEMS_OUTPUT = {
  /**
   * Data
   * @description List of order items
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Created At
           * @description Creation timestamp
           */
          created_at: string;
          /**
           * Order Id
           * @description Associated order ID
           */
          order_id: number;
          /**
           * Price
           * @description Price in cents
           */
          price: number;
          /**
           * Product Id
           * @description Associated product ID
           */
          product_id: number;
          /**
           * Product Name
           * @description Name of the product
           */
          product_name: string;
          /**
           * Quantity
           * @description Quantity purchased
           */
          quantity: number;
          /**
           * Updated At
           * @description Last update timestamp
           */
          updated_at: string;
          /**
           * Variant Id
           * @description Associated variant ID
           */
          variant_id: number;
          /**
           * Variant Name
           * @description Name of the variant
           */
          variant_name: string;
      };
      /**
       * Id
       * @description Order item ID
       */
      id: string;
      /** Links */
      links: {
          /**
           * Self
           * Format: uri
           * @description Link to the resource
           */
          self: string;
      };
      /** Relationships */
      relationships: {
          /**
           * Order
           * @description Links to the order resource
           */
          order: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
          /**
           * Product
           * @description Links to the product resource
           */
          product: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
          /**
           * Variant
           * @description Links to the variant resource
           */
          variant: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type
       * @constant
       */
      type: "order-items";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_PRICES tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_PRICES_INPUT = {
  /**
   * Filter[Variant Id]
   * @description Return only prices associated with the variant with this ID.
   * @default null
   */
  "filter[variant_id]": number | null;
  /**
   * Page[Number]
   * @description Page number for pagination (starting at 1)
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of prices per page (1-100)
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_PRICES tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_PRICES_OUTPUT = {
  /**
   * Data
   * @description List of price objects
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Category
           * @description Type of variant this price was created for
           */
          category: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the price was created
           */
          created_at: string;
          /**
           * Min Price
           * @description Minimum price in cents, if any
           * @default null
           */
          min_price: number | null;
          /**
           * Package Size
           * @description Package size for the price
           */
          package_size: number;
          /**
           * Renewal Interval Quantity
           * @description Quantity for renewal interval
           */
          renewal_interval_quantity: number;
          /**
           * Renewal Interval Unit
           * @description Unit for renewal interval, e.g., 'year'
           */
          renewal_interval_unit: string;
          /**
           * Scheme
           * @description Pricing model for this price
           */
          scheme: string;
          /**
           * Setup Fee
           * @description Setup fee in cents, if enabled
           * @default null
           */
          setup_fee: number | null;
          /**
           * Setup Fee Enabled
           * @description Whether a setup fee is enabled
           */
          setup_fee_enabled: boolean;
          /**
           * Suggested Price
           * @description Suggested price in cents, if any
           * @default null
           */
          suggested_price: number | null;
          /**
           * Tax Code
           * @description Tax code for the price
           */
          tax_code: string;
          /**
           * Tiers
           * @description Pricing tiers for graduated schemes
           */
          tiers: {
              /**
               * Fixed Fee
               * @description Fixed fee in cents for this tier
               */
              fixed_fee: number;
              /**
               * Last Unit
               * @description Last unit for this tier (number or 'inf')
               */
              last_unit: number | null;
              /**
               * Unit Price
               * @description Unit price in cents for this tier
               */
              unit_price: number;
              /**
               * Unit Price Decimal
               * @description Decimal representation of unit price for this tier
               * @default null
               */
              unit_price_decimal: string | null;
          }[];
          /**
           * Trial Interval Quantity
           * @description Quantity for trial interval
           */
          trial_interval_quantity: number;
          /**
           * Trial Interval Unit
           * @description Unit for trial interval, e.g., 'day'
           */
          trial_interval_unit: string;
          /**
           * Unit Price
           * @description Price in cents
           */
          unit_price: number;
          /**
           * Unit Price Decimal
           * @description Decimal representation of the price
           * @default null
           */
          unit_price_decimal: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the price was last updated
           */
          updated_at: string;
          /**
           * Usage Aggregation
           * @description Usage aggregation method, if any
           * @default null
           */
          usage_aggregation: string | null;
          /**
           * Variant Id
           * @description ID of the variant this price belongs to
           */
          variant_id: number;
      };
      /**
       * Id
       * @description Price ID
       */
      id: string;
      /**
       * Links
       * @description Resource links
       */
      links: {
          [key: string]: string;
      };
      /** Relationships */
      relationships: {
          /**
           * Variant
           * @description Links to the related variant
           */
          variant: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this relationship
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type
       * @constant
       */
      type: "prices";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_PRODUCTS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_PRODUCTS_INPUT = object;

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_PRODUCTS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description List of product resources
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
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: unknown;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_STORES tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_STORES_INPUT = object;

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_STORES tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_STORES_OUTPUT = {
  /**
   * Data
   * @description List of store resources
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Avatar Url
           * Format: uri
           * @description URL of the store's avatar image
           */
          avatar_url: string;
          /**
           * Domain
           * @description Store domain (e.g., example.com)
           */
          domain: string;
          /**
           * Name
           * @description Store name
           */
          name: string;
          /**
           * Plan
           * @description Store plan identifier
           */
          plan: string;
          /**
           * Slug
           * @description URL-friendly slug for the store
           */
          slug: string;
          /**
           * Url
           * Format: uri
           * @description Full URL to the store
           */
          url: string;
      };
      /**
       * Id
       * @description Unique store ID
       */
      id: string;
      /**
       * Type
       * @description Resource type, should be 'stores'
       * @constant
       */
      type: "stores";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata for stores
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of first store on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of last store on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of stores
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTIONS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTIONS_INPUT = {
  /**
   * Filter[Order Id]
   * @description Return only subscriptions belonging to the order with this ID.
   * @default null
   */
  "filter[order_id]": number | null;
  /**
   * Filter[Order Item Id]
   * @description Return only subscriptions belonging to the order item with this ID.
   * @default null
   */
  "filter[order_item_id]": number | null;
  /**
   * Filter[Product Id]
   * @description Return only subscriptions belonging to the product with this ID.
   * @default null
   */
  "filter[product_id]": number | null;
  /**
   * Filter[Status]
   * @description Return only subscriptions with this status (e.g., 'active', 'cancelled').
   * @default null
   */
  "filter[status]": string | null;
  /**
   * Filter[Store Id]
   * @description Return only subscriptions belonging to the store with this ID.
   * @default null
   */
  "filter[store_id]": number | null;
  /**
   * Filter[User Email]
   * @description Return only subscriptions where the user_email matches this address.
   * @default null
   */
  "filter[user_email]": string | null;
  /**
   * Filter[Variant Id]
   * @description Return only subscriptions belonging to the variant with this ID.
   * @default null
   */
  "filter[variant_id]": number | null;
  /**
   * Page[Number]
   * @description Page number for pagination (starting at 1).
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of subscriptions per page (1-100).
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTIONS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description List of subscriptions.
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Billing Anchor
           * @description Day of the month for billing anchor.
           */
          billing_anchor: number;
          /**
           * Cancelled
           * @description Whether the subscription is cancelled.
           */
          cancelled: boolean;
          /**
           * Created At
           * @description ISO 8601 timestamp when subscription was created.
           */
          created_at: string;
          /**
           * Customer Id
           * @description Customer ID associated with this subscription.
           */
          customer_id: number;
          /**
           * Ends At
           * @description ISO 8601 timestamp when subscription ends.
           * @default null
           */
          ends_at: string | null;
          /**
           * First Subscription Item
           * @description Details of the first subscription item.
           */
          first_subscription_item: {
              /**
               * Created At
               * @description ISO 8601 timestamp when created.
               */
              created_at: string;
              /**
               * Id
               * @description ID of the first subscription item.
               */
              id: number;
              /**
               * Price Id
               * @description Price ID associated with this item.
               */
              price_id: number;
              /**
               * Quantity
               * @description Quantity for this subscription item.
               */
              quantity: number;
              /**
               * Subscription Id
               * @description Subscription ID this item belongs to.
               */
              subscription_id: number;
              /**
               * Updated At
               * @description ISO 8601 timestamp when last updated.
               */
              updated_at: string;
          };
          /**
           * Order Id
           * @description Order ID associated with this subscription.
           */
          order_id: number;
          /**
           * Order Item Id
           * @description Order item ID for this subscription.
           */
          order_item_id: number;
          /**
           * Pause
           * @description Pause details if subscription is paused.
           * @default null
           */
          pause: {
              [key: string]: unknown;
          } | null;
          /**
           * Product Id
           * @description Product ID associated with this subscription.
           */
          product_id: number;
          /**
           * Product Name
           * @description Name of the product.
           */
          product_name: string;
          /**
           * Renews At
           * @description ISO 8601 timestamp when subscription renews.
           */
          renews_at: string;
          /**
           * Status
           * @description Subscription status.
           */
          status: string;
          /**
           * Status Formatted
           * @description Formatted subscription status.
           */
          status_formatted: string;
          /**
           * Store Id
           * @description Store ID this subscription belongs to.
           */
          store_id: number;
          /**
           * Test Mode
           * @description Whether this is a test subscription.
           */
          test_mode: boolean;
          /**
           * Trial Ends At
           * @description ISO 8601 timestamp when trial ends.
           * @default null
           */
          trial_ends_at: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when subscription was last updated.
           */
          updated_at: string;
          /**
           * Urls
           * @description Resource URLs for this subscription.
           */
          urls: {
              /**
               * Customer Portal
               * Format: uri
               * @description URL to access the customer portal.
               */
              customer_portal: string;
              /**
               * Update Payment Method
               * Format: uri
               * @description URL to update payment method.
               */
              update_payment_method: string;
          };
          /**
           * User Email
           * @description Email address of the user.
           */
          user_email: string;
          /**
           * User Name
           * @description Name of the user.
           */
          user_name: string;
          /**
           * Variant Id
           * @description Variant ID associated with this subscription.
           */
          variant_id: number;
          /**
           * Variant Name
           * @description Name of the variant.
           */
          variant_name: string;
      };
      /**
       * Id
       * @description Subscription ID.
       */
      id: string;
      /** Links */
      links: {
          /**
           * Self
           * Format: uri
           * @description Link to the resource.
           */
          self: string;
      };
      /** Relationships */
      relationships: {
          /**
           * Customer
           * @description Relationship to customer.
           */
          customer: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this relationship.
               */
              self: string;
          };
          /**
           * Order
           * @description Relationship to order.
           */
          order: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this relationship.
               */
              self: string;
          };
          /**
           * Order Item
           * @description Relationship to order item.
           */
          "order-item": {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this relationship.
               */
              self: string;
          };
          /**
           * Product
           * @description Relationship to product.
           */
          product: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this relationship.
               */
              self: string;
          };
          /**
           * Store
           * @description Relationship to store.
           */
          store: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this relationship.
               */
              self: string;
          };
          /**
           * Subscription Invoices
           * @description Relationship to subscription invoices.
           */
          "subscription-invoices": {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this relationship.
               */
              self: string;
          };
          /**
           * Subscription Items
           * @description Relationship to subscription items.
           */
          "subscription-items": {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this relationship.
               */
              self: string;
          };
          /**
           * Variant
           * @description Relationship to variant.
           */
          variant: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this relationship.
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type.
       * @constant
       */
      type: "subscriptions";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object.
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version.
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links.
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page
       * @description Pagination details.
       */
      page: {
          /**
           * Current Page
           * @description Current page number.
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page.
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number.
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page.
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page.
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages.
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_INVOICES tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_INVOICES_INPUT = {
  /**
   * Filter[Refunded]
   * @description Filter invoices by refunded state (true/false)
   * @default null
   */
  "filter[refunded]": boolean | null;
  /**
   * Filter[Status]
   * @description Filter invoices by status
   * @default null
   */
  "filter[status]": string | null;
  /**
   * Filter[Store Id]
   * @description Filter invoices by store ID
   * @default null
   */
  "filter[store_id]": number | null;
  /**
   * Filter[Subscription Id]
   * @description Filter invoices by subscription ID
   * @default null
   */
  "filter[subscription_id]": number | null;
  /**
   * Page[Number]
   * @description Page number for pagination (starting at 1)
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of items per page (1-100)
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_INVOICES tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_INVOICES_OUTPUT = {
  /**
   * Data
   * @description List of subscription invoices
   */
  data?: {
      /**
       * Attributes
       * @description Invoice attributes
       */
      attributes: {
          /**
           * Billing Reason
           * @description Reason for billing
           */
          billing_reason: string;
          /**
           * Card Brand
           * @description Card brand used
           */
          card_brand: string;
          /**
           * Card Last Four
           * @description Last four digits of the card
           */
          card_last_four: string;
          /**
           * Created At
           * @description ISO 8601 creation timestamp
           */
          created_at: string;
          /**
           * Currency
           * @description Currency code
           */
          currency: string;
          /**
           * Currency Rate
           * @description Currency exchange rate
           */
          currency_rate: string;
          /**
           * Customer Id
           * @description Customer ID
           */
          customer_id: number;
          /**
           * Discount Total
           * @description Total discount in cents
           */
          discount_total: number;
          /**
           * Discount Total Formatted
           * @description Formatted discount total
           */
          discount_total_formatted: string;
          /**
           * Discount Total Usd
           * @description Discount total in USD cents
           */
          discount_total_usd: number;
          /**
           * Refunded
           * @description Indicates if refunded
           */
          refunded: boolean;
          /**
           * Refunded Amount
           * @description Refunded amount in cents
           */
          refunded_amount: number;
          /**
           * Refunded Amount Formatted
           * @description Formatted refunded amount
           */
          refunded_amount_formatted: string;
          /**
           * Refunded Amount Usd
           * @description Refunded amount in USD cents
           */
          refunded_amount_usd: number;
          /**
           * Refunded At
           * @description Timestamp when refunded
           * @default null
           */
          refunded_at: string | null;
          /**
           * Status
           * @description Invoice status
           */
          status: string;
          /**
           * Status Formatted
           * @description Formatted invoice status
           */
          status_formatted: string;
          /**
           * Store Id
           * @description Store ID of the invoice
           */
          store_id: number;
          /**
           * Subscription Id
           * @description Subscription ID of the invoice
           */
          subscription_id: number;
          /**
           * Subtotal
           * @description Subtotal amount in cents
           */
          subtotal: number;
          /**
           * Subtotal Formatted
           * @description Formatted subtotal
           */
          subtotal_formatted: string;
          /**
           * Subtotal Usd
           * @description Subtotal in USD cents
           */
          subtotal_usd: number;
          /**
           * Tax
           * @description Tax amount in cents
           */
          tax: number;
          /**
           * Tax Formatted
           * @description Formatted tax
           */
          tax_formatted: string;
          /**
           * Tax Inclusive
           * @description Indicates if tax is inclusive
           */
          tax_inclusive: boolean;
          /**
           * Tax Usd
           * @description Tax in USD cents
           */
          tax_usd: number;
          /**
           * Test Mode
           * @description Indicates if in test mode
           */
          test_mode: boolean;
          /**
           * Total
           * @description Total amount in cents
           */
          total: number;
          /**
           * Total Formatted
           * @description Formatted total
           */
          total_formatted: string;
          /**
           * Total Usd
           * @description Total in USD cents
           */
          total_usd: number;
          /**
           * Updated At
           * @description ISO 8601 last update timestamp
           */
          updated_at: string;
          /**
           * Urls
           * @description Invoice URLs
           */
          urls: {
              /**
               * Invoice Url
               * Format: uri
               * @description URL to download the invoice PDF
               * @default null
               */
              invoice_url: string | null;
          };
          /**
           * User Email
           * @description Customer's email
           */
          user_email: string;
          /**
           * User Name
           * @description Customer's name
           */
          user_name: string;
      };
      /**
       * Id
       * @description Invoice ID
       */
      id: string;
      /**
       * Links
       * @description Resource links
       */
      links: {
          [key: string]: string;
      };
      /**
       * Relationships
       * @description Resource relationships
       */
      relationships: {
          /**
           * Customer
           * @description Link to the customer
           */
          customer: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this relationship
               */
              self: string;
          };
          /**
           * Store
           * @description Link to the store
           */
          store: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this relationship
               */
              self: string;
          };
          /**
           * Subscription
           * @description Link to the subscription
           */
          subscription: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL for this relationship
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type
       * @constant
       */
      type: "subscription-invoices";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version info
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_ITEMS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_ITEMS_INPUT = {
  /**
   * Filter[Subscription Id]
   * @description Filter subscription items by the ID of the subscription they belong to.
   * @default null
   */
  "filter[subscription_id]": number | null;
  /**
   * Filter[Variant Id]
   * @description Filter subscription items by the ID of the variant.
   * @default null
   */
  "filter[variant_id]": number | null;
  /**
   * Page[Number]
   * @description Page number for pagination (starting at 1)
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of items per page (1-100)
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_ITEMS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_ITEMS_OUTPUT = {
  /**
   * Data
   * @description List of subscription item objects
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Created At
           * @description ISO 8601 date-time when the item was created
           */
          created_at: string;
          /**
           * Price
           * @description Price of the subscription item in cents
           */
          price: number;
          /**
           * Quantity
           * @description Quantity for the subscription item
           */
          quantity: number;
          /**
           * Subscription Id
           * @description ID of the subscription this item belongs to
           */
          subscription_id: number;
          /**
           * Updated At
           * @description ISO 8601 date-time when the item was last updated
           */
          updated_at: string;
          /**
           * Variant Id
           * @description ID of the variant for this subscription item
           */
          variant_id: number;
      };
      /**
       * Id
       * @description Subscription item ID
       */
      id: string;
      /** Links */
      links: {
          /**
           * Self
           * Format: uri
           * @description Link to the resource
           */
          self: string;
      };
      /** Relationships */
      relationships: {
          /**
           * Subscription
           * @description Link to the subscription resource
           */
          subscription: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this relationship
               */
              self: string;
          };
          /**
           * Variant
           * @description Link to the variant resource
           */
          variant: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this relationship
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type
       * @constant
       */
      type: "subscription-items";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_USAGE_RECORDS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_USAGE_RECORDS_INPUT = {
  /**
   * Filter[Subscription Item Id]
   * @description Only return usage records for the subscription item with this ID.
   * @default null
   */
  "filter[subscription_item_id]": number | null;
  /**
   * Page[Number]
   * @description Page number to retrieve (starting at 1).
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of usage records per page (1-100).
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_USAGE_RECORDS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_USAGE_RECORDS_OUTPUT = {
  /**
   * Data
   * @description List of usage record objects.
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Action
           * @description Type of record: 'increment' adds to existing usage; 'set' replaces it.
           * @enum {string}
           */
          action: "increment" | "set";
          /**
           * Created At
           * @description ISO 8601 timestamp when created.
           */
          created_at: string;
          /**
           * Quantity
           * @description Reported usage quantity.
           */
          quantity: number;
          /**
           * Subscription Item Id
           * @description ID of the subscription item this usage record belongs to.
           */
          subscription_item_id: number;
          /**
           * Updated At
           * @description ISO 8601 timestamp when last updated.
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Usage record ID.
       */
      id: string;
      /** Links */
      links: {
          /**
           * Self
           * Format: uri
           * @description Link to the resource.
           */
          self: string;
      };
      /** Relationships */
      relationships: {
          /**
           * Subscription Item
           * @description Links for the subscription item relationship.
           */
          "subscription-item": {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource.
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this relationship.
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type.
       * @constant
       */
      type: "usage-records";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object.
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version.
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links.
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page
       * @description Pagination details.
       */
      page: {
          /**
           * Current Page
           * @description Current page number.
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page.
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number.
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page.
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page.
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages.
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_VARIANTS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_VARIANTS_INPUT = {
  /**
   * Filter[Product Id]
   * @description Return only variants associated with this product ID.
   * @default null
   */
  "filter[product_id]": number | null;
  /**
   * Filter[Status]
   * @description Return only variants with the given status ('draft' or 'published').
   * @default null
   * @enum {string|null}
   */
  "filter[status]": "draft" | "published" | null;
  /**
   * Page[Number]
   * @description Page number to return (starting at 1).
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of items per page (1-100).
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_VARIANTS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_VARIANTS_OUTPUT = {
  /**
   * Data
   * @description List of variant objects
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Created At
           * @description ISO 8601 creation timestamp
           */
          created_at: string;
          /**
           * Description
           * @description Variant description, may contain HTML
           * @default null
           */
          description: string | null;
          /**
           * Has Free Trial
           * @description Whether the variant has a free trial period
           */
          has_free_trial: boolean;
          /**
           * Has License Keys
           * @description Whether variant issues license keys
           */
          has_license_keys: boolean;
          /**
           * Interval
           * @description Subscription interval unit (e.g., 'month')
           * @default null
           */
          interval: string | null;
          /**
           * Interval Count
           * @description Number of intervals between charges if subscription
           * @default null
           */
          interval_count: number | null;
          /**
           * Is License Length Unlimited
           * @description Whether license length is unlimited
           */
          is_license_length_unlimited: boolean;
          /**
           * Is License Limit Unlimited
           * @description Whether activations are unlimited
           */
          is_license_limit_unlimited: boolean;
          /**
           * Is Subscription
           * @description Whether this variant is a subscription
           */
          is_subscription: boolean;
          /**
           * License Activation Limit
           * @description Maximum activations per license key
           */
          license_activation_limit: number;
          /**
           * License Length Unit
           * @description Unit for license length (e.g., 'years')
           */
          license_length_unit: string;
          /**
           * License Length Value
           * @description Duration value for license length
           */
          license_length_value: number;
          /**
           * Links
           * @description Additional related links for the variant
           */
          links: string[];
          /**
           * Min Price
           * @description Minimum price allowed for pay-what-you-want
           */
          min_price: number;
          /**
           * Name
           * @description Name of the variant
           */
          name: string;
          /**
           * Pay What You Want
           * @description Whether price is user-defined
           */
          pay_what_you_want: boolean;
          /**
           * Price
           * @description Price of the variant in cents
           */
          price: number;
          /**
           * Product Id
           * @description ID of the product this variant belongs to
           */
          product_id: number;
          /**
           * Slug
           * @description URL-friendly unique identifier for the variant
           */
          slug: string;
          /**
           * Sort
           * @description Sort order index for the variant
           */
          sort: number;
          /**
           * Status
           * @description Status of the variant (e.g., 'published')
           */
          status: string;
          /**
           * Status Formatted
           * @description Human-readable status
           */
          status_formatted: string;
          /**
           * Suggested Price
           * @description Suggested price for pay-what-you-want
           */
          suggested_price: number;
          /**
           * Test Mode
           * @description Whether the variant was created in test mode
           */
          test_mode: boolean;
          /**
           * Trial Interval
           * @description Free trial interval unit (e.g., 'day')
           * @default null
           */
          trial_interval: string | null;
          /**
           * Trial Interval Count
           * @description Number of free trial units
           * @default null
           */
          trial_interval_count: number | null;
          /**
           * Updated At
           * @description ISO 8601 last update timestamp
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Variant ID
       */
      id: string;
      /**
       * Links
       * @description Resource links
       */
      links: {
          [key: string]: string;
      };
      /** Relationships */
      relationships: {
          /**
           * Product
           * @description Links to the associated product resource
           */
          product: {
              /**
               * Related
               * Format: uri
               * @description URL to the related resource
               */
              related: string;
              /**
               * Self
               * Format: uri
               * @description URL to this resource relationship
               */
              self: string;
          };
      };
      /**
       * Type
       * @description Resource type
       * @constant
       */
      type: "variants";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_WEBHOOKS tool input.
 */
type LEMON_SQUEEZY_LIST_ALL_WEBHOOKS_INPUT = {
  /**
   * Filter[Store Id]
   * @description Only return webhooks belonging to the store with this ID.
   * @default null
   */
  "filter[store_id]": number | null;
  /**
   * Page[Number]
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of webhooks per page (1-100).
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of LEMON_SQUEEZY's LEMON_SQUEEZY_LIST_ALL_WEBHOOKS tool output.
 */
type LEMON_SQUEEZY_LIST_ALL_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description List of webhook objects
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Created At
           * @description Timestamp when the webhook was created (ISO 8601)
           */
          created_at: string;
          /**
           * Events
           * @description List of event types the webhook is subscribed to
           */
          events: string[];
          /**
           * Last Sent At
           * @description Timestamp of the last sent webhook (ISO 8601)
           * @default null
           */
          last_sent_at: string | null;
          /**
           * Store Id
           * @description ID of the store that owns the webhook
           */
          store_id: number;
          /**
           * Test Mode
           * @description Whether the webhook is in test mode
           */
          test_mode: boolean;
          /**
           * Updated At
           * @description Timestamp when the webhook was last updated (ISO 8601)
           */
          updated_at: string;
          /**
           * Url
           * Format: uri
           * @description Endpoint URL where events will be sent
           */
          url: string;
      };
      /**
       * Id
       * @description Unique identifier for the webhook
       */
      id: string;
      /** Links */
      links: {
          /**
           * Self
           * Format: uri
           * @description Link to this webhook resource
           */
          self: string;
      };
      /** Relationships */
      relationships: {
          /** Store */
          store: {
              /** Links */
              links: {
                  /**
                   * Related
                   * Format: uri
                   * @description URL to the related resource
                   */
                  related: string;
                  /**
                   * Self
                   * Format: uri
                   * @description URL to this relationship
                   */
                  self: string;
              };
          };
      };
      /**
       * Type
       * @description Resource type, always 'webhooks'
       * @constant
       */
      type: "webhooks";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Jsonapi
   * @description JSON:API version object
   */
  jsonapi?: {
      /**
       * Version
       * @description JSON:API version
       */
      version: string;
  };
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      [key: string]: string;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * From
           * @description Index of the first item on this page
           */
          from: number;
          /**
           * Last Page
           * @description Last available page number
           */
          lastPage: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          perPage: number;
          /**
           * To
           * @description Index of the last item on this page
           */
          to: number;
          /**
           * Total
           * @description Total number of items across all pages
           */
          total: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "LEMON_SQUEEZY".
 */
export type LEMON_SQUEEZY_TOOL_INPUTS = {
  CREATE_CUSTOMER: LEMON_SQUEEZY_CREATE_CUSTOMER_INPUT
  LIST_ALL_AFFILIATES: LEMON_SQUEEZY_LIST_ALL_AFFILIATES_INPUT
  LIST_ALL_CHECKOUTS: LEMON_SQUEEZY_LIST_ALL_CHECKOUTS_INPUT
  LIST_ALL_CUSTOMERS: LEMON_SQUEEZY_LIST_ALL_CUSTOMERS_INPUT
  LIST_ALL_DISCOUNTS: LEMON_SQUEEZY_LIST_ALL_DISCOUNTS_INPUT
  LIST_ALL_DISCOUNT_REDEMPTIONS: LEMON_SQUEEZY_LIST_ALL_DISCOUNT_REDEMPTIONS_INPUT
  LIST_ALL_LICENSE_KEY_INSTANCES: LEMON_SQUEEZY_LIST_ALL_LICENSE_KEY_INSTANCES_INPUT
  LIST_ALL_ORDERS: LEMON_SQUEEZY_LIST_ALL_ORDERS_INPUT
  LIST_ALL_ORDER_ITEMS: LEMON_SQUEEZY_LIST_ALL_ORDER_ITEMS_INPUT
  LIST_ALL_PRICES: LEMON_SQUEEZY_LIST_ALL_PRICES_INPUT
  LIST_ALL_PRODUCTS: LEMON_SQUEEZY_LIST_ALL_PRODUCTS_INPUT
  LIST_ALL_STORES: LEMON_SQUEEZY_LIST_ALL_STORES_INPUT
  LIST_ALL_SUBSCRIPTIONS: LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTIONS_INPUT
  LIST_ALL_SUBSCRIPTION_INVOICES: LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_INVOICES_INPUT
  LIST_ALL_SUBSCRIPTION_ITEMS: LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_ITEMS_INPUT
  LIST_ALL_USAGE_RECORDS: LEMON_SQUEEZY_LIST_ALL_USAGE_RECORDS_INPUT
  LIST_ALL_VARIANTS: LEMON_SQUEEZY_LIST_ALL_VARIANTS_INPUT
  LIST_ALL_WEBHOOKS: LEMON_SQUEEZY_LIST_ALL_WEBHOOKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LEMON_SQUEEZY".
 */
export type LEMON_SQUEEZY_TOOL_OUTPUTS = {
  CREATE_CUSTOMER: LEMON_SQUEEZY_CREATE_CUSTOMER_OUTPUT
  LIST_ALL_AFFILIATES: LEMON_SQUEEZY_LIST_ALL_AFFILIATES_OUTPUT
  LIST_ALL_CHECKOUTS: LEMON_SQUEEZY_LIST_ALL_CHECKOUTS_OUTPUT
  LIST_ALL_CUSTOMERS: LEMON_SQUEEZY_LIST_ALL_CUSTOMERS_OUTPUT
  LIST_ALL_DISCOUNTS: LEMON_SQUEEZY_LIST_ALL_DISCOUNTS_OUTPUT
  LIST_ALL_DISCOUNT_REDEMPTIONS: LEMON_SQUEEZY_LIST_ALL_DISCOUNT_REDEMPTIONS_OUTPUT
  LIST_ALL_LICENSE_KEY_INSTANCES: LEMON_SQUEEZY_LIST_ALL_LICENSE_KEY_INSTANCES_OUTPUT
  LIST_ALL_ORDERS: LEMON_SQUEEZY_LIST_ALL_ORDERS_OUTPUT
  LIST_ALL_ORDER_ITEMS: LEMON_SQUEEZY_LIST_ALL_ORDER_ITEMS_OUTPUT
  LIST_ALL_PRICES: LEMON_SQUEEZY_LIST_ALL_PRICES_OUTPUT
  LIST_ALL_PRODUCTS: LEMON_SQUEEZY_LIST_ALL_PRODUCTS_OUTPUT
  LIST_ALL_STORES: LEMON_SQUEEZY_LIST_ALL_STORES_OUTPUT
  LIST_ALL_SUBSCRIPTIONS: LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTIONS_OUTPUT
  LIST_ALL_SUBSCRIPTION_INVOICES: LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_INVOICES_OUTPUT
  LIST_ALL_SUBSCRIPTION_ITEMS: LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_ITEMS_OUTPUT
  LIST_ALL_USAGE_RECORDS: LEMON_SQUEEZY_LIST_ALL_USAGE_RECORDS_OUTPUT
  LIST_ALL_VARIANTS: LEMON_SQUEEZY_LIST_ALL_VARIANTS_OUTPUT
  LIST_ALL_WEBHOOKS: LEMON_SQUEEZY_LIST_ALL_WEBHOOKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LEMON_SQUEEZY toolkit.
 */
export const LEMON_SQUEEZY = {
  slug: "lemon_squeezy",
  tools: {
    /**
     * Tool to create a new customer. use after verifying the store exists and you need to add a customer to it. example: "create a customer john doe with email johndoe@example.com in store 1."
     */
    CREATE_CUSTOMER: "LEMON_SQUEEZY_CREATE_CUSTOMER",
    /**
     * Tool to list all affiliates. use when you need to retrieve affiliates with optional filters and pagination.
     */
    LIST_ALL_AFFILIATES: "LEMON_SQUEEZY_LIST_ALL_AFFILIATES",
    /**
     * Tool to list all checkouts. use when you need a paginated list of checkouts, optionally filtering by store or variant.
     */
    LIST_ALL_CHECKOUTS: "LEMON_SQUEEZY_LIST_ALL_CHECKOUTS",
    /**
     * Tool to list all customers. use when you need a paginated list of customers with optional filters.
     */
    LIST_ALL_CUSTOMERS: "LEMON_SQUEEZY_LIST_ALL_CUSTOMERS",
    /**
     * Tool to list all discounts. use when you need a paginated list of discounts after confirming authentication.
     */
    LIST_ALL_DISCOUNTS: "LEMON_SQUEEZY_LIST_ALL_DISCOUNTS",
    /**
     * Tool to list all discount redemptions. use when you need a paginated list of discount redemptions, optionally filtering by discount or order.
     */
    LIST_ALL_DISCOUNT_REDEMPTIONS: "LEMON_SQUEEZY_LIST_ALL_DISCOUNT_REDEMPTIONS",
    /**
     * Tool to list all license key instances. use when you need a paginated list of license key instances, optionally filtering by license key id.
     */
    LIST_ALL_LICENSE_KEY_INSTANCES: "LEMON_SQUEEZY_LIST_ALL_LICENSE_KEY_INSTANCES",
    /**
     * Tool to list all orders. use when you need a paginated list of orders, optionally filtering by store or user email.
     */
    LIST_ALL_ORDERS: "LEMON_SQUEEZY_LIST_ALL_ORDERS",
    /**
     * Tool to list all order items. use when you need a paginated list of order items, optionally filtered by order, product, or variant.
     */
    LIST_ALL_ORDER_ITEMS: "LEMON_SQUEEZY_LIST_ALL_ORDER_ITEMS",
    /**
     * Tool to list all prices. use when you need a paginated list of all prices, optionally filtering by variant.
     */
    LIST_ALL_PRICES: "LEMON_SQUEEZY_LIST_ALL_PRICES",
    /**
     * Tool to list all products. use when you need to fetch your full product catalog.
     */
    LIST_ALL_PRODUCTS: "LEMON_SQUEEZY_LIST_ALL_PRODUCTS",
    /**
     * Tool to list all stores. use when you need to retrieve every store belonging to the authenticated account.
     */
    LIST_ALL_STORES: "LEMON_SQUEEZY_LIST_ALL_STORES",
    /**
     * Tool to list all subscriptions. use when you need a paginated list of subscriptions, optionally filtered by store, order, product, or status.
     */
    LIST_ALL_SUBSCRIPTIONS: "LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTIONS",
    /**
     * Tool to list all subscription invoices. use when you need a paginated list of subscription invoices with optional filters.
     */
    LIST_ALL_SUBSCRIPTION_INVOICES: "LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_INVOICES",
    /**
     * Tool to list all subscription items. use when you need a paginated list of items across subscriptions for reporting or auditing.
     */
    LIST_ALL_SUBSCRIPTION_ITEMS: "LEMON_SQUEEZY_LIST_ALL_SUBSCRIPTION_ITEMS",
    /**
     * Tool to list all usage records. use when you need a paginated list of usage records, optionally filtered by subscription item id.
     */
    LIST_ALL_USAGE_RECORDS: "LEMON_SQUEEZY_LIST_ALL_USAGE_RECORDS",
    /**
     * Tool to list all variants. use after selecting a product to retrieve its variants, optionally filtered by status.
     */
    LIST_ALL_VARIANTS: "LEMON_SQUEEZY_LIST_ALL_VARIANTS",
    /**
     * Tool to list all webhooks. use when you need to retrieve registered webhooks, optionally filtered by store. use after confirming your store id.
     */
    LIST_ALL_WEBHOOKS: "LEMON_SQUEEZY_LIST_ALL_WEBHOOKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LEMON_SQUEEZY".
 */
export type LEMON_SQUEEZY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LEMON_SQUEEZY".
 */
export type LEMON_SQUEEZY_TRIGGER_EVENTS = {}
