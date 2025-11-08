// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOODY's GOODY_CALCULATE_PRICE_FOR_ORDER_BATCH tool input.
 */
type GOODY_CALCULATE_PRICE_FOR_ORDER_BATCH_INPUT = {
  /**
   * Cart
   * @description Cart details (items and quantities)
   */
  cart?: {
      /**
       * Items
       * @description List of cart items
       */
      items: {
          /**
           * Product Id
           * @description Product ID; required if product_url is not provided
           * @default null
           */
          product_id: string | null;
          /**
           * Product Url
           * @description Product URL; required if product_id is not provided
           * @default null
           */
          product_url: string | null;
          /**
           * Quantity
           * @description Quantity of the item (min 1)
           */
          quantity: number;
          /**
           * Variable Price
           * @description Custom price in cents for variable-priced items
           * @default null
           */
          variable_price: number | null;
          /**
           * Variants
           * @description Variant IDs; required for direct_send if product has variants
           * @default null
           */
          variants: string[] | null;
      }[];
  };
  /**
   * Recipients
   * @description List of recipients to estimate pricing for
   */
  recipients?: {
      /**
       * Email
       * @description Recipient email
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description Recipient first name
       */
      first_name: string;
      /**
       * Last Name
       * @description Recipient last name
       * @default null
       */
      last_name: string | null;
      /**
       * MailingAddress
       * @description Mailing address for direct_send (required if send_method is 'direct_send')
       * @default null
       */
      mailing_address: {
          /**
           * Address 1
           * @description Primary address line
           */
          address_1: string;
          /**
           * Address 2
           * @description Secondary address line, if any
           * @default null
           */
          address_2: string | null;
          /**
           * City
           * @description City name
           */
          city: string;
          /**
           * Country
           * @description Two-letter country code (e.g., 'US')
           */
          country: string;
          /**
           * First Name
           * @description Override recipient first name
           * @default null
           */
          first_name: string | null;
          /**
           * Last Name
           * @description Override recipient last name
           * @default null
           */
          last_name: string | null;
          /**
           * Postal Code
           * @description Postal code
           */
          postal_code: string;
          /**
           * State
           * @description State code
           */
          state: string;
      } | null;
      /**
       * Phone
       * @description E.164 phone number, US only (e.g., '+12025550123')
       * @default null
       */
      phone: string | null;
  }[];
  /**
   * Send Method
   * @description Sending method; 'direct_send' requires mailing_address for each recipient
   * @enum {string}
   */
  send_method?: "email_and_link" | "link_multiple_custom_list" | "direct_send";
};

/**
 * Type of GOODY's GOODY_CALCULATE_PRICE_FOR_ORDER_BATCH tool output.
 */
type GOODY_CALCULATE_PRICE_FOR_ORDER_BATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cart Price Estimate
       * @description Per-recipient cart price estimate
       */
      cart_price_estimate: {
          /**
           * Price Est Tax High
           * @description Estimated high tax in cents
           */
          price_est_tax_high: number;
          /**
           * Price Est Tax Low
           * @description Estimated low tax in cents
           */
          price_est_tax_low: number;
          /**
           * Price Est Total High
           * @description Estimated high total in cents
           */
          price_est_total_high: number;
          /**
           * Price Est Total Low
           * @description Estimated low total in cents
           */
          price_est_total_low: number;
          /**
           * Price Pre Tax
           * @description Price before tax in cents
           */
          price_pre_tax: number;
          /**
           * Price Processing Fee
           * @description Processing fee in cents
           */
          price_processing_fee: number;
          /**
           * Price Product
           * @description Price of products in cents
           */
          price_product: number;
          /**
           * Price Shipping
           * @description Shipping cost in cents
           */
          price_shipping: number;
      };
      /**
       * Total Price Estimate
       * @description Total price estimate for the entire batch
       */
      total_price_estimate: {
          /**
           * Est Group Total High
           * @description Estimated high total for group in cents
           */
          est_group_total_high: number;
          /**
           * Est Group Total Low
           * @description Estimated low total for group in cents
           */
          est_group_total_low: number;
          /**
           * Recipients
           * @description Number of recipients
           */
          recipients: number;
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
 * Type of GOODY's GOODY_LIST_ALL_ACTIVE_CARDS tool input.
 */
type GOODY_LIST_ALL_ACTIVE_CARDS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (starting from 1)
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of items per page for pagination (1-100)
   * @default 20
   */
  per_page: number;
};

/**
 * Type of GOODY's GOODY_LIST_ALL_ACTIVE_CARDS tool output.
 */
type GOODY_LIST_ALL_ACTIVE_CARDS_OUTPUT = {
  /**
   * Data
   * @description List of active digital greeting cards
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the card
       */
      id: string;
      /**
       * Image
       * @description Main image of the card
       */
      image: {
          /**
           * Height
           * @description Image height in pixels
           */
          height: number;
          /**
           * Url
           * @description Image URL
           */
          url: string;
          /**
           * Width
           * @description Image width in pixels
           */
          width: number;
      };
      /**
       * Image Thumb
       * @description Thumbnail image of the card
       */
      image_thumb: {
          /**
           * Height
           * @description Image height in pixels
           */
          height: number;
          /**
           * Url
           * @description Image URL
           */
          url: string;
          /**
           * Width
           * @description Image width in pixels
           */
          width: number;
      };
      /**
       * Occasions
       * @description Occasion tags for the card
       */
      occasions: string[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * List Meta
   * @description Pagination metadata
   */
  list_meta?: {
      /**
       * Total Count
       * @description Total number of active cards available
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOODY's GOODY_LIST_ALL_ACTIVE_PRODUCTS tool input.
 */
type GOODY_LIST_ALL_ACTIVE_PRODUCTS_INPUT = {
  /**
   * Country Code
   * @description Filter products by shipping country, ISO country code
   * @default US
   */
  country_code: string;
  /**
   * Custom Catalog Show Inactive
   * @description Show inactive products in custom catalog (Commerce API custom catalogs only)
   * @default null
   */
  custom_catalog_show_inactive: boolean | null;
  /**
   * Page
   * @description Page index for pagination, starting from 1
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of items per page, range 1-100
   * @default 20
   */
  per_page: number;
  /**
   * Use Custom Catalog
   * @description Limit to custom catalog only (approved partners)
   * @default null
   */
  use_custom_catalog: boolean | null;
};

/**
 * Type of GOODY's GOODY_LIST_ALL_ACTIVE_PRODUCTS tool output.
 */
type GOODY_LIST_ALL_ACTIVE_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description List of active products on this page
   */
  data?: {
      /**
       * Attributes
       * @description Custom attributes for the product
       */
      attributes: {
          /**
           * Content
           * @description Attribute content/value
           */
          content: string;
          /**
           * Label
           * @description Attribute label
           */
          label: string;
      }[];
      /**
       * Brand
       * @description Brand details for the product
       */
      brand: {
          /**
           * Brand Values
           * @description List of values or tags associated with the brand
           */
          brand_values: string[];
          /**
           * Commerce Revshare Excluded
           * @description Whether the brand is excluded from revenue share
           * @default null
           */
          commerce_revshare_excluded: boolean | null;
          /**
           * Free Shipping Minimum
           * @description Minimum order value in cents for free shipping
           * @default null
           */
          free_shipping_minimum: number | null;
          /**
           * Id
           * @description Unique identifier for the brand
           */
          id: string;
          /**
           * Name
           * @description Name of the brand
           */
          name: string;
          /**
           * Shipping Price
           * @description Shipping price in cents
           */
          shipping_price: number;
      };
      /**
       * Id
       * @description Unique product identifier
       */
      id: string;
      /**
       * Images
       * @description Product image gallery
       */
      images: {
          /**
           * Height
           * @description Height of the image in pixels
           */
          height: number;
          /**
           * Url
           * @description Image URL
           */
          url: string;
          /**
           * Width
           * @description Width of the image in pixels
           */
          width: number;
      }[];
      /**
       * Name
       * @description Name of the product
       */
      name: string;
      /**
       * Price
       * @description Base price in cents
       */
      price: number;
      /**
       * Price Is Variable
       * @description Whether the price can vary based on options
       */
      price_is_variable: boolean;
      /**
       * Price Max
       * @description Maximum price in cents if variable pricing
       * @default null
       */
      price_max: number | null;
      /**
       * Price Min
       * @description Minimum price in cents if variable pricing
       * @default null
       */
      price_min: number | null;
      /**
       * Recipient Description
       * @description Description of intended recipient for gifting
       * @default null
       */
      recipient_description: string | null;
      /**
       * Reserved Options
       * @description Reserved options object for approved partners
       * @default null
       */
      reserved_options: {
          [key: string]: unknown;
      } | null;
      /**
       * Restricted States
       * @description List of state codes where product is restricted
       */
      restricted_states: string[];
      /**
       * Status
       * @description Product status (active or inactive)
       */
      status: string;
      /**
       * Subtitle
       * @description Long subtitle or tagline for the product
       * @default null
       */
      subtitle: string | null;
      /**
       * Subtitle Short
       * @description Short subtitle for the product
       * @default null
       */
      subtitle_short: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp for last update
       */
      updated_at: string;
      /**
       * Variant Groups
       * @description Variant groups and their options
       */
      variant_groups: {
          /**
           * Id
           * @description Unique identifier for the variant group
           */
          id: string;
          /**
           * Name
           * @description Name of the variant group
           */
          name: string;
          /**
           * Options
           * @description List of variant options
           */
          options: {
              /**
               * Color
               * @description Hex code or name of the color for the variant
               * @default null
               */
              color: string | null;
              /**
               * Id
               * @description Unique identifier for the variant option
               */
              id: string;
              /**
               * Image Large
               * @description URL for the large image of the variant option
               * @default null
               */
              image_large: string | null;
              /**
               * Name
               * @description Name of the variant option
               */
              name: string;
              /**
               * Subtitle
               * @description Subtitle or short description for the variant option
               * @default null
               */
              subtitle: string | null;
          }[];
      }[];
      /**
       * Variants
       * @description List of variants for the product
       */
      variants: {
          /**
           * Id
           * @description Unique identifier for the variant
           */
          id: string;
          /**
           * Image Large
           * @description URL for the large image of the variant
           * @default null
           */
          image_large: string | null;
          /**
           * Name
           * @description Name of the variant
           */
          name: string;
          /**
           * Subtitle
           * @description Subtitle or short description for the variant
           * @default null
           */
          subtitle: string | null;
      }[];
      /**
       * Variants Label
       * @description Label for selectable variants
       * @default null
       */
      variants_label: string | null;
      /**
       * Variants Num Selectable
       * @description Number of variants the user can select
       * @default null
       */
      variants_num_selectable: number | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * List Meta
   * @description Pagination metadata
   */
  list_meta?: {
      /**
       * Total Count
       * @description Total number of products across all pages
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOODY's GOODY_LIST_ALL_ORDERS tool input.
 */
type GOODY_LIST_ALL_ORDERS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (must be >= 1).
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of orders to return per page (1-100).
   * @default 20
   */
  per_page: number;
};

/**
 * Type of GOODY's GOODY_LIST_ALL_ORDERS tool output.
 */
type GOODY_LIST_ALL_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Array of orders returned on this page.
   */
  data?: {
      /** Amounts */
      amounts: {
          /**
           * Amount Global Relay Cost
           * @description Global relay handling cost in cents, if applicable.
           */
          amount_global_relay_cost: number;
          /**
           * Amount Pre Tax Total
           * @description Subtotal before tax in cents.
           */
          amount_pre_tax_total: number;
          /**
           * Amount Processing Fee
           * @description Processing fee in cents.
           */
          amount_processing_fee: number;
          /**
           * Amount Product
           * @description Product total in cents.
           */
          amount_product: number;
          /**
           * Amount Shipping
           * @description Shipping cost in cents.
           */
          amount_shipping: number;
          /**
           * Amount Tax
           * @description Tax amount in cents.
           */
          amount_tax: number;
          /**
           * Amount Total
           * @description Grand total in cents.
           */
          amount_total: number;
      };
      /**
       * Card Id
       * @description Linked card UUID, if used for gifting.
       * @default null
       */
      card_id: string | null;
      /** Cart */
      cart: {
          /**
           * Id
           * @description Cart identifier.
           */
          id: string;
          /**
           * Items
           * @description List of items in the cart.
           */
          items: {
              /**
               * Id
               * @description Unique cart item identifier.
               */
              id: string;
              /**
               * Product
               * @description Arbitrary product details; shape varies by catalog entry.
               */
              product: {
                  [key: string]: unknown;
              };
              /**
               * Quantity
               * @description Number of units for this product.
               */
              quantity: number;
          }[];
      };
      /**
       * Expires At
       * @description ISO-8601 expiration timestamp.
       * @default null
       */
      expires_at: string | null;
      /**
       * Id
       * @description Order UUID.
       */
      id: string;
      /**
       * Individual Gift Link
       * @description URL to view or redeem this individual gift.
       */
      individual_gift_link: string;
      /**
       * Is Swapped
       * @description Whether the gift has been swapped by recipient.
       */
      is_swapped: boolean;
      /**
       * Message
       * @description Personal message included with the gift.
       * @default null
       */
      message: string | null;
      /**
       * Order Batch Id
       * @description Batch UUID grouping multiple orders.
       */
      order_batch_id: string;
      /**
       * Original Amounts
       * @description Amounts before edits.
       * @default null
       */
      original_amounts: {
          [key: string]: unknown;
      } | null;
      /**
       * Original Cart
       * @description Cart state before edits.
       * @default null
       */
      original_cart: {
          [key: string]: unknown;
      } | null;
      /**
       * Payment Link
       * @description URL for pending payment.
       * @default null
       */
      payment_link: string | null;
      /**
       * Recipient Email
       * @description Recipient's email if provided.
       * @default null
       */
      recipient_email: string | null;
      /** Recipient First Name */
      recipient_first_name: string;
      /**
       * Recipient Last Name
       * @default null
       */
      recipient_last_name: string | null;
      /**
       * Reference Id
       * @description Merchant reference identifier.
       */
      reference_id: string;
      /** Sender */
      sender: {
          /**
           * Email
           * @description Sender's email address.
           */
          email: string;
          /**
           * First Name
           * @description Sender's first name.
           */
          first_name: string;
          /**
           * Last Name
           * @description Sender's last name.
           */
          last_name: string;
      };
      /**
       * Shipments
       * @description Shipment entries; shape varies by fulfillment provider.
       */
      shipments: {
          [key: string]: unknown;
      }[];
      /**
       * Status
       * @description Current order status.
       * @enum {string}
       */
      status: "created" | "notified" | "opened" | "accepted" | "pending_payment" | "paid" | "ordered" | "shipped" | "delivered" | "failed" | "canceled";
      /**
       * Thank You Note
       * @description Automated thank-you note text.
       * @default null
       */
      thank_you_note: string | null;
      /**
       * View Count Recipient
       * @description Number of times recipient viewed the gift.
       */
      view_count_recipient: number;
      /**
       * Workspace Id
       * @description Workspace UUID if applicable.
       * @default null
       */
      workspace_id: string | null;
      /**
       * Workspace Name
       * @description Workspace name if set.
       * @default null
       */
      workspace_name: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * List Meta
   * @description Pagination metadata.
   */
  list_meta?: {
      /**
       * Total Count
       * @description Total number of items across all pages.
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOODY's GOODY_LIST_ALL_ORDER_BATCHES tool input.
 */
type GOODY_LIST_ALL_ORDER_BATCHES_INPUT = {
  /**
   * Page
   * @description Page number for pagination, starting at 1
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of items per page, between 1 and 100
   * @default 20
   */
  per_page: number;
};

/**
 * Type of GOODY's GOODY_LIST_ALL_ORDER_BATCHES tool output.
 */
type GOODY_LIST_ALL_ORDER_BATCHES_OUTPUT = {
  /**
   * Data
   * @description List of order batches
   */
  data?: {
      /**
       * Batch Name
       * @description Optional name of the batch
       * @default null
       */
      batch_name: string | null;
      /**
       * Card Id
       * @description Card ID (UUID) if associated
       * @default null
       */
      card_id: string | null;
      /**
       * Cart
       * @description Cart information for this batch
       */
      cart: {
          [key: string]: unknown;
      };
      /**
       * Expires At
       * Format: date-time
       * @description Expiration date-time in ISO 8601 UTC if set
       * @default null
       */
      expires_at: string | null;
      /**
       * From Name
       * @description Name of the sender
       */
      from_name: string;
      /**
       * Id
       * @description Unique identifier (UUID) of the order batch
       */
      id: string;
      /**
       * Is Scheduled Send
       * @description Whether this batch was set up as a scheduled send
       */
      is_scheduled_send: boolean;
      /**
       * Message
       * @description Optional message attached to the batch
       * @default null
       */
      message: string | null;
      /**
       * Orders Count
       * @description Total number of orders in this batch
       */
      orders_count: number;
      /**
       * Orders Preview
       * @description Preview (up to 10 items) of orders; use /order_batches/:id/orders to fetch full list
       */
      orders_preview: {
          [key: string]: unknown;
      }[];
      /**
       * Recipients Count
       * @description Total number of recipients
       */
      recipients_count: number;
      /**
       * Recipients Preview
       * @description Preview (up to 10 items) of recipients
       */
      recipients_preview: {
          [key: string]: unknown;
      }[];
      /**
       * Reference Id
       * @description Reference ID shown on receipts and elsewhere
       */
      reference_id: string;
      /**
       * Scheduled Send On
       * Format: date-time
       * @description Scheduled send date-time in ISO 8601 UTC if set
       * @default null
       */
      scheduled_send_on: string | null;
      /**
       * Send Method
       * @description Method used to send the batch
       * @enum {string}
       */
      send_method: "email_and_link" | "link_multiple_custom_list" | "direct_send";
      /**
       * Send Status
       * @description Current send status of this batch
       * @enum {string}
       */
      send_status: "pending" | "complete" | "failed" | "canceled";
      /**
       * Sender
       * @description Detailed sender information
       */
      sender: {
          [key: string]: unknown;
      };
      /**
       * Workspace Id
       * @description Workspace ID (UUID) if associated
       * @default null
       */
      workspace_id: string | null;
      /**
       * Workspace Name
       * @description Workspace name if associated
       * @default null
       */
      workspace_name: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * List Meta
   * @description Pagination metadata
   */
  list_meta?: {
      /**
       * Total Count
       * @description Total number of order batches
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOODY's GOODY_LIST_ALL_PAYMENT_METHODS tool input.
 */
type GOODY_LIST_ALL_PAYMENT_METHODS_INPUT = object;

/**
 * Type of GOODY's GOODY_LIST_ALL_PAYMENT_METHODS tool output.
 */
type GOODY_LIST_ALL_PAYMENT_METHODS_OUTPUT = {
  /**
   * Data
   * @description List of payment methods returned
   */
  data?: {
      /**
       * Cardholder Name
       * @description Name of the cardholder for this payment method
       */
      cardholder_name: string;
      /**
       * Id
       * @description Payment method ID
       */
      id: string;
      /**
       * Name
       * @description Label for the payment method, e.g., 'Visa 1234'
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
   * List Meta
   * @description Metadata for pagination lists
   */
  list_meta?: {
      /**
       * Total Count
       * @description Total number of payment methods
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOODY's GOODY_LIST_ALL_WORKSPACES tool input.
 */
type GOODY_LIST_ALL_WORKSPACES_INPUT = object;

/**
 * Type of GOODY's GOODY_LIST_ALL_WORKSPACES tool output.
 */
type GOODY_LIST_ALL_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description List of workspace objects
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the workspace
       */
      id: string;
      /**
       * Name
       * @description Name of the workspace
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
   * List Meta
   * @description Metadata about the list of workspaces
   */
  list_meta?: {
      /**
       * Total Count
       * @description Total number of workspaces returned
       */
      total_count: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOODY's GOODY_RETRIEVE_CURRENT_USER tool input.
 */
type GOODY_RETRIEVE_CURRENT_USER_INPUT = object;

/**
 * Type of GOODY's GOODY_RETRIEVE_CURRENT_USER tool output.
 */
type GOODY_RETRIEVE_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description The user’s email address.
       * @default null
       */
      email: string | null;
      /**
       * Public App Id
       * @description The user’s public app ID.
       * @default null
       */
      public_app_id: string | null;
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
 * Type of GOODY's GOODY_RETRIEVE_PRODUCT tool input.
 */
type GOODY_RETRIEVE_PRODUCT_INPUT = {
  /**
   * Id
   * @description Unique ID of the product
   */
  id?: string;
  /**
   * Use Custom Catalog
   * @description Limit to custom catalog only (approved API partners)
   * @default null
   */
  use_custom_catalog: boolean | null;
};

/**
 * Type of GOODY's GOODY_RETRIEVE_PRODUCT tool output.
 */
type GOODY_RETRIEVE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attributes
       * @description Array of product attributes
       */
      attributes: {
          /**
           * Name
           * @description Name of the attribute
           */
          name: string;
          /**
           * Value
           * @description Value of the attribute
           */
          value: string;
      }[];
      /**
       * Brand
       * @description Brand details
       */
      brand: {
          /**
           * Brand Values
           * @description Brand value tags (e.g., USA Made, Sustainable)
           */
          brand_values: string[];
          /**
           * Commerce Revshare Excluded
           * @description Excluded from commerce revenue sharing
           * @default null
           */
          commerce_revshare_excluded: boolean | null;
          /**
           * Free Shipping Minimum
           * @description Threshold in cents for free shipping
           * @default null
           */
          free_shipping_minimum: number | null;
          /**
           * Id
           * @description Unique ID of the brand
           */
          id: string;
          /**
           * Name
           * @description Name of the brand
           */
          name: string;
          /**
           * Shipping Price
           * @description Price of shipping in cents
           */
          shipping_price: number;
      };
      /**
       * Id
       * @description Unique ID of the product
       */
      id: string;
      /**
       * Images
       * @description Array of product images
       */
      images: {
          /**
           * Id
           * @description Unique ID of the product image
           */
          id: string;
          /**
           * Image Large
           * @description Large image of the product
           */
          image_large: {
              /**
               * Height
               * @description Height of the image in pixels
               * @default null
               */
              height: number | null;
              /**
               * Url
               * @description URL of the image
               */
              url: string;
              /**
               * Width
               * @description Width of the image in pixels
               * @default null
               */
              width: number | null;
          };
      }[];
      /**
       * Name
       * @description Name of the product
       */
      name: string;
      /**
       * Price
       * @description Product price in cents
       */
      price: number;
      /**
       * Price Is Variable
       * @description If true, sender sets price
       */
      price_is_variable: boolean;
      /**
       * Price Max
       * @description Maximum price when variable
       * @default null
       */
      price_max: number | null;
      /**
       * Price Min
       * @description Minimum price when variable
       * @default null
       */
      price_min: number | null;
      /**
       * Recipient Description
       * @description Recipient-facing description
       * @default null
       */
      recipient_description: string | null;
      /**
       * Reserved Options
       * @description Reserved options for approved API partners
       * @default null
       */
      reserved_options: {
          [key: string]: unknown;
      } | null;
      /**
       * Restricted States
       * @description US states the product cannot ship to
       */
      restricted_states: string[];
      /**
       * Status
       * @description Product activity status
       * @enum {string}
       */
      status: "active" | "inactive";
      /**
       * Subtitle
       * @description Description of the product
       * @default null
       */
      subtitle: string | null;
      /**
       * Subtitle Short
       * @description Optional one-line description
       * @default null
       */
      subtitle_short: string | null;
      /**
       * Updated At
       * @description ISO 8601 last updated timestamp
       */
      updated_at: string;
      /**
       * Variant Groups
       * @description For multi-type variants, describes groups and options
       * @default null
       */
      variant_groups: {
          /**
           * Id
           * @description Variant group ID
           */
          id: string;
          /**
           * Label
           * @description Label for the variant group
           */
          label: string;
          /**
           * Options
           * @description List of options in this group
           */
          options: {
              /**
               * Id
               * @description Option ID
               */
              id: string;
              /**
               * Name
               * @description Option name
               */
              name: string;
          }[];
      }[] | null;
      /**
       * Variants
       * @description Array of product variants
       */
      variants: {
          /**
           * Id
           * @description Unique ID of the variant
           */
          id: string;
          /**
           * Image Large
           * @description Large image of the variant
           */
          image_large: {
              /**
               * Height
               * @description Height of the image in pixels
               * @default null
               */
              height: number | null;
              /**
               * Url
               * @description URL of the image
               */
              url: string;
              /**
               * Width
               * @description Width of the image in pixels
               * @default null
               */
              width: number | null;
          };
          /**
           * Name
           * @description Name of the variant
           */
          name: string;
          /**
           * Subtitle
           * @description Subtitle of the variant
           * @default null
           */
          subtitle: string | null;
      }[];
      /**
       * Variants Label
       * @description Label for variants (e.g., Size, Color)
       * @default null
       */
      variants_label: string | null;
      /**
       * Variants Num Selectable
       * @description Number of variants that can be selected
       * @default null
       */
      variants_num_selectable: number | null;
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
 * Type map of all available tool input types for toolkit "GOODY".
 */
export type GOODY_TOOL_INPUTS = {
  CALCULATE_PRICE_FOR_ORDER_BATCH: GOODY_CALCULATE_PRICE_FOR_ORDER_BATCH_INPUT
  LIST_ALL_ACTIVE_CARDS: GOODY_LIST_ALL_ACTIVE_CARDS_INPUT
  LIST_ALL_ACTIVE_PRODUCTS: GOODY_LIST_ALL_ACTIVE_PRODUCTS_INPUT
  LIST_ALL_ORDERS: GOODY_LIST_ALL_ORDERS_INPUT
  LIST_ALL_ORDER_BATCHES: GOODY_LIST_ALL_ORDER_BATCHES_INPUT
  LIST_ALL_PAYMENT_METHODS: GOODY_LIST_ALL_PAYMENT_METHODS_INPUT
  LIST_ALL_WORKSPACES: GOODY_LIST_ALL_WORKSPACES_INPUT
  RETRIEVE_CURRENT_USER: GOODY_RETRIEVE_CURRENT_USER_INPUT
  RETRIEVE_PRODUCT: GOODY_RETRIEVE_PRODUCT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOODY".
 */
export type GOODY_TOOL_OUTPUTS = {
  CALCULATE_PRICE_FOR_ORDER_BATCH: GOODY_CALCULATE_PRICE_FOR_ORDER_BATCH_OUTPUT
  LIST_ALL_ACTIVE_CARDS: GOODY_LIST_ALL_ACTIVE_CARDS_OUTPUT
  LIST_ALL_ACTIVE_PRODUCTS: GOODY_LIST_ALL_ACTIVE_PRODUCTS_OUTPUT
  LIST_ALL_ORDERS: GOODY_LIST_ALL_ORDERS_OUTPUT
  LIST_ALL_ORDER_BATCHES: GOODY_LIST_ALL_ORDER_BATCHES_OUTPUT
  LIST_ALL_PAYMENT_METHODS: GOODY_LIST_ALL_PAYMENT_METHODS_OUTPUT
  LIST_ALL_WORKSPACES: GOODY_LIST_ALL_WORKSPACES_OUTPUT
  RETRIEVE_CURRENT_USER: GOODY_RETRIEVE_CURRENT_USER_OUTPUT
  RETRIEVE_PRODUCT: GOODY_RETRIEVE_PRODUCT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOODY toolkit.
 */
export const GOODY = {
  slug: "goody",
  tools: {
    /**
     * Tool to estimate per-recipient and total price for an order batch. Use when you want to preview costs before creating the batch.
     */
    CALCULATE_PRICE_FOR_ORDER_BATCH: "GOODY_CALCULATE_PRICE_FOR_ORDER_BATCH",
    /**
     * Tool to list all active digital greeting cards. Use when you need to fetch available card options before sending.
     */
    LIST_ALL_ACTIVE_CARDS: "GOODY_LIST_ALL_ACTIVE_CARDS",
    /**
     * Tool to list all active products. Use when you need to fetch available active products with pagination and filters.
     */
    LIST_ALL_ACTIVE_PRODUCTS: "GOODY_LIST_ALL_ACTIVE_PRODUCTS",
    /**
     * Tool to retrieve a list of all orders. Use when you need to fetch paginated order data associated with the account after authenticating.
     */
    LIST_ALL_ORDERS: "GOODY_LIST_ALL_ORDERS",
    /**
     * Tool to list all order batches. Use when you need to paginate through your account's order batches.
     */
    LIST_ALL_ORDER_BATCHES: "GOODY_LIST_ALL_ORDER_BATCHES",
    /**
     * Tool to list all payment methods. Use when you need to retrieve all payment methods associated with the account.
     */
    LIST_ALL_PAYMENT_METHODS: "GOODY_LIST_ALL_PAYMENT_METHODS",
    /**
     * Tool to list all workspaces. Use when you need to retrieve all workspaces associated with the account.
     */
    LIST_ALL_WORKSPACES: "GOODY_LIST_ALL_WORKSPACES",
    /**
     * Tool to retrieve current authenticated user information. Use after authentication to fetch the current user’s account details.
     */
    RETRIEVE_CURRENT_USER: "GOODY_RETRIEVE_CURRENT_USER",
    /**
     * Tool to retrieve details of a specific product by its ID. Use after obtaining the product ID.
     */
    RETRIEVE_PRODUCT: "GOODY_RETRIEVE_PRODUCT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOODY".
 */
export type GOODY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOODY".
 */
export type GOODY_TRIGGER_EVENTS = {}
