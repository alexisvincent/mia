// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FINERWORKS's FINERWORKS_ADD_IMAGES tool input.
 */
type FINERWORKS_ADD_IMAGES_INPUT = {
  /**
   * Images
   * @description List of up to 5 image details.
   */
  images?: {
      /**
       * Description
       * @description Image description (max 300 chars).
       * @default null
       */
      description: string | null;
      /**
       * File Name
       * @description Original file name (max 200 chars).
       */
      file_name: string;
      /**
       * File Size
       * @description File size in bits, must be non-negative.
       */
      file_size: number;
      /**
       * Hires File Name
       * @description High-resolution file name (max 200 chars).
       */
      hires_file_name: string;
      /**
       * Pix H
       * @description Pixel height, must be positive.
       */
      pix_h: number;
      /**
       * Pix W
       * @description Pixel width, must be positive.
       */
      pix_w: number;
      /**
       * Preview File Name
       * @description Preview file name (max 200 chars).
       */
      preview_file_name: string;
      /**
       * Private Hires Uri
       * Format: uri
       * @description Private URL to high-res image (max 500 chars).
       */
      private_hires_uri: string;
      /**
       * Public Preview Uri
       * Format: uri
       * @description Public URL to preview image (max 500 chars).
       */
      public_preview_uri: string;
      /**
       * Public Thumbnail Uri
       * Format: uri
       * @description Public URL to thumbnail (max 500 chars).
       */
      public_thumbnail_uri: string;
      /**
       * Thumbnail File Name
       * @description Thumbnail file name (max 200 chars).
       */
      thumbnail_file_name: string;
      /**
       * Title
       * @description Image title. Defaults to file_name if omitted.
       * @default null
       */
      title: string | null;
  }[];
  /**
   * Library
   * @description Target library information.
   */
  library?: {
      /**
       * Account Key
       * @description Optional account identifier if permissions allow.
       * @default null
       */
      account_key: string | null;
      /**
       * Name
       * @description Library name. Use 'temporary' or 'inventory'.
       * @default inventory
       * @enum {string}
       */
      name: "temporary" | "inventory";
      /**
       * Session Id
       * @description User session identifier (8-50 chars).
       */
      session_id: string;
      /**
       * Site Id
       * @description Site identifier; confirm with administrator.
       */
      site_id: number;
  };
};

/**
 * Type of FINERWORKS's FINERWORKS_ADD_IMAGES tool output.
 */
type FINERWORKS_ADD_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Images */
      images: {
          /** Active */
          active: boolean | null;
          /** Date Added */
          date_added: string | null;
          /** Date Expires */
          date_expires: string | null;
          /** Description */
          description: string | null;
          /** File Name */
          file_name: string;
          /** File Size */
          file_size: number;
          /**
           * Guid
           * Format: uuid
           */
          guid: string;
          /** Hires File Name */
          hires_file_name: string;
          /** Id */
          id: number;
          /** Members Gallery Category */
          members_gallery_category: string | null;
          /** Personal Gallery Title */
          personal_gallery_title: string | null;
          /** Pix H */
          pix_h: number;
          /** Pix W */
          pix_w: number;
          /** Preview File Name */
          preview_file_name: string;
          /** Private Hires Uri */
          private_hires_uri: string;
          /**
           * Products
           * @default null
           */
          products: {
              /** Asking Price */
              asking_price: number | null;
              /** Description Long */
              description_long: string;
              /** Description Short */
              description_short: string;
              /**
               * Image Guid
               * Format: uuid
               */
              image_guid: string;
              /**
               * Image Url 1
               * @default null
               */
              image_url_1: string | null;
              /**
               * Image Url 2
               * @default null
               */
              image_url_2: string | null;
              /**
               * Image Url 3
               * @default null
               */
              image_url_3: string | null;
              /**
               * Image Url 4
               * @default null
               */
              image_url_4: string | null;
              /**
               * Image Url 5
               * @default null
               */
              image_url_5: string | null;
              /** Monetary Format */
              monetary_format: string;
              /** Name */
              name: string;
              /** Per Item Price */
              per_item_price: number | null;
              /** Product Code */
              product_code: string;
              /** Product Size */
              product_size: string;
              /** Quantity */
              quantity: number;
              /** Sku */
              sku: string;
              /** Total Price */
              total_price: number | null;
          }[] | null;
          /** Public Preview Uri */
          public_preview_uri: string;
          /** Public Thumbnail Uri */
          public_thumbnail_uri: string;
          /** Thumbnail File Name */
          thumbnail_file_name: string;
          /** Title */
          title: string | null;
      }[];
      /** Status */
      status: {
          /**
           * Debug
           * @default null
           */
          debug: {
              [key: string]: unknown;
          } | null;
          /** Message */
          message: string | null;
          /** Status Code */
          status_code: number;
          /** Success */
          success: boolean;
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
 * Type of FINERWORKS's FINERWORKS_GET_USER tool input.
 */
type FINERWORKS_GET_USER_INPUT = {
  /**
   * Account Key
   * @description Account unique identifier; applied only if your app key is permitted
   * @default null
   */
  account_key: string | null;
};

/**
 * Type of FINERWORKS's FINERWORKS_GET_USER tool output.
 */
type FINERWORKS_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Standard status block.
       */
      status: {
          /**
           * Debug
           * @description Debug info for troubleshooting.
           * @default null
           */
          debug: {
              [key: string]: string | number | boolean | null;
          } | null;
          /**
           * Message
           * @description Additional information message.
           * @default null
           */
          message: string | null;
          /**
           * Status Code
           * @description HTTP status code value.
           */
          status_code: number;
          /**
           * Success
           * @description Indicates if the call succeeded.
           */
          success: boolean;
      };
      /**
       * User Account
       * @description The user's account profile.
       */
      user_account: {
          /**
           * Account Email
           * @description Account email
           */
          account_email: string;
          /**
           * Account Id
           * @description Account ID
           */
          account_id: number;
          /**
           * Account Key
           * @description Account unique identifier (permissions apply)
           * @default null
           */
          account_key: string | null;
          /**
           * Account Username
           * @description Account username
           */
          account_username: string;
          /**
           * App Details
           * @description Details about the app associated with app_key
           * @default null
           */
          app_details: {
              [key: string]: string | number | boolean | null;
          } | null;
          /**
           * Address
           * @description Billing address details
           * @default null
           */
          billing_info: {
              /**
               * Address 1
               * @description Address line 1
               */
              address_1: string;
              /**
               * Address 2
               * @description Address line 2
               * @default null
               */
              address_2: string | null;
              /**
               * Address 3
               * @description Address line 3
               * @default null
               */
              address_3: string | null;
              /**
               * Address Order Po
               * @description PO value tied to address
               * @default null
               */
              address_order_po: string | null;
              /**
               * City
               * @description City/town
               * @default null
               */
              city: string | null;
              /**
               * Company Name
               * @description Company name
               * @default null
               */
              company_name: string | null;
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code
               */
              country_code: string;
              /**
               * Email
               * @description Email address
               * @default null
               */
              email: string | null;
              /**
               * First Name
               * @description First name
               */
              first_name: string;
              /**
               * Last Name
               * @description Last name
               */
              last_name: string;
              /**
               * Phone
               * @description Phone number
               * @default null
               */
              phone: string | null;
              /**
               * Province
               * @description Province
               * @default null
               */
              province: string | null;
              /**
               * State Code
               * @description State or province code
               * @default null
               */
              state_code: string | null;
              /**
               * Zip Postal Code
               * @description ZIP/postal code
               */
              zip_postal_code: string;
          } | null;
          /**
           * Address
           * @description Business address details
           * @default null
           */
          business_info: {
              /**
               * Address 1
               * @description Address line 1
               */
              address_1: string;
              /**
               * Address 2
               * @description Address line 2
               * @default null
               */
              address_2: string | null;
              /**
               * Address 3
               * @description Address line 3
               * @default null
               */
              address_3: string | null;
              /**
               * Address Order Po
               * @description PO value tied to address
               * @default null
               */
              address_order_po: string | null;
              /**
               * City
               * @description City/town
               * @default null
               */
              city: string | null;
              /**
               * Company Name
               * @description Company name
               * @default null
               */
              company_name: string | null;
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code
               */
              country_code: string;
              /**
               * Email
               * @description Email address
               * @default null
               */
              email: string | null;
              /**
               * First Name
               * @description First name
               */
              first_name: string;
              /**
               * Last Name
               * @description Last name
               */
              last_name: string;
              /**
               * Phone
               * @description Phone number
               * @default null
               */
              phone: string | null;
              /**
               * Province
               * @description Province
               * @default null
               */
              province: string | null;
              /**
               * State Code
               * @description State or province code
               * @default null
               */
              state_code: string | null;
              /**
               * Zip Postal Code
               * @description ZIP/postal code
               */
              zip_postal_code: string;
          } | null;
          /**
           * Connections
           * @description Connected third-party platform records
           * @default null
           */
          connections: {
              [key: string]: string | number | boolean | null;
          }[] | null;
          /**
           * Enable Invoice Payment
           * @description Indicates if user can pay later by invoice
           * @default null
           */
          enable_invoice_payment: boolean | null;
          /**
           * Logo Url
           * @description Stored logo URL
           * @default null
           */
          logo_url: string | null;
          /**
           * Payment Profile Id
           * @description Braintree customer ID for billing
           * @default null
           */
          payment_profile_id: string | null;
          /**
           * Shipping Preferences
           * @description Up to three preference values in priority order: 0 economical, 1 rolled, 2 flat, 3 fastest
           * @default null
           */
          shipping_preferences: number[] | null;
          /**
           * User Account Credits
           * @description Account credit balance
           */
          user_account_credits: number | null;
          /**
           * User Profile Complete
           * @description Whether profile is complete for imports
           * @default null
           */
          user_profile_complete: boolean | null;
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
 * Type of FINERWORKS's FINERWORKS_LIST_MEDIA_TYPES tool input.
 */
type FINERWORKS_LIST_MEDIA_TYPES_INPUT = {
  /**
   * Ids
   * @description Optional list of media type IDs to filter the results. If omitted, all media types are returned.
   * @default null
   */
  ids: number[] | null;
};

/**
 * Type of FINERWORKS's FINERWORKS_LIST_MEDIA_TYPES tool output.
 */
type FINERWORKS_LIST_MEDIA_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media Types
       * @description Array of media types returned.
       */
      media_types: {
          /**
           * Description
           * @description Media type description.
           */
          description: string;
          /**
           * Id
           * @description Media type ID.
           */
          id: number;
          /**
           * Name
           * @description Media type name.
           */
          name: string;
          /**
           * Product Type Id
           * @description Related product type ID.
           */
          product_type_id: number;
          /**
           * Style Ids
           * @description Associated style IDs.
           */
          style_ids: number[];
      }[];
      /**
       * Status
       * @description Standard status block.
       */
      status: {
          /**
           * Debug
           * @description Debug info for troubleshooting.
           * @default null
           */
          debug: {
              [key: string]: string | number | boolean | null;
          } | null;
          /**
           * Message
           * @description Additional information message.
           */
          message: string;
          /**
           * Status Code
           * @description HTTP status code value.
           */
          status_code: number;
          /**
           * Success
           * @description Indicates if the call succeeded.
           */
          success: boolean;
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
 * Type of FINERWORKS's FINERWORKS_LIST_PRODUCT_TYPES tool input.
 */
type FINERWORKS_LIST_PRODUCT_TYPES_INPUT = {
  /**
   * Ids
   * @description Optional list of product type IDs to filter results
   * @default null
   */
  ids: number[] | null;
};

/**
 * Type of FINERWORKS's FINERWORKS_LIST_PRODUCT_TYPES tool output.
 */
type FINERWORKS_LIST_PRODUCT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Product Types
       * @description List of product types
       */
      product_types: {
          /**
           * Description
           * @description Information about this product type
           */
          description: string;
          /**
           * Id
           * @description Unique identifier for the product type
           */
          id: number;
          /**
           * Media Ids
           * @description List of media IDs available to this product type
           */
          media_ids: number[];
          /**
           * Name
           * @description Name of the product type
           */
          name: string;
      }[];
      /**
       * Status
       * @description Status of the response
       */
      status: {
          /**
           * Debug
           * @description Debugging information in case of errors
           */
          debug?: {
              [key: string]: unknown;
          };
          /**
           * Message
           * @description Additional information about the operation
           */
          message: string;
          /**
           * Status Code
           * @description HTTP status code returned by the API
           */
          status_code: number;
          /**
           * Success
           * @description Indicates if the operation was successful
           */
          success: boolean;
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
 * Type of FINERWORKS's FINERWORKS_LIST_SHIPPING_OPTIONS_MULTIPLE tool input.
 */
type FINERWORKS_LIST_SHIPPING_OPTIONS_MULTIPLE_INPUT = {
  /**
   * Orders
   * @description One or more orders to rate
   */
  orders?: {
      /**
       * Acct Number Fedex
       * @description FedEx account number
       * @default null
       */
      acct_number_fedex: string | null;
      /**
       * Acct Number Ups
       * @description UPS account number
       * @default null
       */
      acct_number_ups: string | null;
      /**
       * Custom Data 1
       * @description Developer field
       * @default null
       */
      custom_data_1: string | null;
      /**
       * Custom Data 2
       * @description Developer field
       * @default null
       */
      custom_data_2: string | null;
      /**
       * Custom Data 3
       * @description Developer field
       * @default null
       */
      custom_data_3: string | null;
      /**
       * CustomsTaxInfo
       * @description Customs/tax data for international shipments.
       * @default null
       */
      customs_tax_info: {
          /**
           * Tax Id
           * @description Tax or VAT identifier (max 50 characters)
           */
          tax_id: string;
          /**
           * Tax Type
           * @description Type of tax: 0=VAT, 1=IOSS, 2=Other
           */
          tax_type: number;
      } | null;
      /**
       * Document Url
       * @description URL of single-page JPG or PDF (8.5x11)
       * @default null
       */
      document_url: string | null;
      /**
       * Gift Message
       * @description Gift message for packing slip
       * @default null
       */
      gift_message: string | null;
      /**
       * Order Items
       * @description Line items to ship
       */
      order_items: {
          /**
           * Custom Data 1
           * @description Developer field
           * @default null
           */
          custom_data_1: string | null;
          /**
           * Custom Data 2
           * @description Developer field
           * @default null
           */
          custom_data_2: string | null;
          /**
           * Custom Data 3
           * @description Developer field
           * @default null
           */
          custom_data_3: string | null;
          /**
           * Product Guid
           * @description Optional product GUID
           * @default null
           */
          product_guid: string | null;
          /**
           * ProductImageFile
           * @description Image file details for print-on-demand products.
           * @default null
           */
          product_image: {
              /**
               * Pixel Height
               * @description Height in pixels
               */
              pixel_height: number;
              /**
               * Pixel Width
               * @description Width in pixels
               */
              pixel_width: number;
              /**
               * Product Url File
               * @description URL to the full-size image file
               */
              product_url_file: string;
              /**
               * Product Url Thumbnail
               * @description URL to the thumbnail image
               */
              product_url_thumbnail: string;
          } | null;
          /**
           * Product Order Po
           * @description Optional per-item order reference
           * @default null
           */
          product_order_po: string | null;
          /**
           * Product Qty
           * @description Quantity (1–999)
           */
          product_qty: number;
          /**
           * Product Sku
           * @description Virtual-inventory SKU or product code
           */
          product_sku: string;
          /**
           * Product Title
           * @description Optional title for packing slip
           * @default null
           */
          product_title: string | null;
          /**
           * Template
           * @description Optional template overrides
           * @default null
           */
          template: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Order Key
       * @description GUID; leave null to auto-generate
       * @default null
       */
      order_key: string | null;
      /**
       * Order Po
       * @description Unique order identifier/reference
       */
      order_po: string;
      /**
       * Recipient
       * @description Shipping destination address
       */
      recipient: {
          /**
           * Address 1
           * @description Street address line 1
           */
          address_1: string;
          /**
           * Address 2
           * @description Street address line 2
           * @default null
           */
          address_2: string | null;
          /**
           * Address 3
           * @description Street address line 3
           * @default null
           */
          address_3: string | null;
          /**
           * Address Order Po
           * @description Optional address reference
           * @default null
           */
          address_order_po: string | null;
          /**
           * City
           * @description City
           * @default null
           */
          city: string | null;
          /**
           * Company Name
           * @description Company name
           * @default null
           */
          company_name: string | null;
          /**
           * Country Code
           * @description ISO-3166 alpha-2 country code
           */
          country_code: string;
          /**
           * Email
           * @description Contact email
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name
           */
          first_name: string;
          /**
           * Last Name
           * @description Last name
           */
          last_name: string;
          /**
           * Phone
           * @description Contact phone
           * @default null
           */
          phone: string | null;
          /**
           * Province
           * @description Province (if not US)
           * @default null
           */
          province: string | null;
          /**
           * State Code
           * @description State code (if US)
           * @default null
           */
          state_code: string | null;
          /**
           * Zip Postal Code
           * @description ZIP or postal code
           */
          zip_postal_code: string;
      };
      /**
       * Ship By Date
       * Format: date
       * @description Requested ship-by date
       * @default null
       */
      ship_by_date: string | null;
      /**
       * Shipping Code
       * @description Shipping code: EC, SD, FS, etc.
       */
      shipping_code: string;
      /**
       * Test Mode
       * @description Set true for test mode
       * @default false
       */
      test_mode: boolean | null;
      /**
       * Webhook Order Status Url
       * @description Webhook URL for status updates
       * @default null
       */
      webhook_order_status_url: string | null;
  }[];
};

/**
 * Type of FINERWORKS's FINERWORKS_LIST_SHIPPING_OPTIONS_MULTIPLE tool output.
 */
type FINERWORKS_LIST_SHIPPING_OPTIONS_MULTIPLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Orders
       * @description Shipping options per order
       */
      orders: {
          /**
           * Options
           * @description Available shipping options
           */
          options: {
              /**
               * Calculated Total
               * @description Cost breakdown for this option
               */
              calculated_total: {
                  /**
                   * Order Credits Used
                   * @description Credits used in USD
                   */
                  order_credits_used: number;
                  /**
                   * Order Discount
                   * @description Discount applied in USD
                   */
                  order_discount: number;
                  /**
                   * Order Grand Total
                   * @description Total charged in USD
                   */
                  order_grand_total: number;
                  /**
                   * Order Po
                   * @description Echoed order identifier
                   */
                  order_po: string;
                  /**
                   * Order Sales Tax
                   * @description Sales tax amount in USD
                   */
                  order_sales_tax: number;
                  /**
                   * Order Sales Tax Rate
                   * @description Sales tax rate fraction
                   */
                  order_sales_tax_rate: number;
                  /**
                   * Order Shipping Rate
                   * @description Shipping rate in USD
                   */
                  order_shipping_rate: number;
                  /**
                   * Order Subtotal
                   * @description Subtotal in USD
                   */
                  order_subtotal: number;
                  /**
                   * Product Pricing
                   * @description Per-item pricing details
                   */
                  product_pricing: {
                      /**
                       * Add Color Correct Price
                       * @description Color correct addon price
                       */
                      add_color_correct_price: number;
                      /**
                       * Add Frame Price
                       * @description Frame addon price
                       */
                      add_frame_price: number;
                      /**
                       * Add Glazing Price
                       * @description Glazing addon price
                       */
                      add_glazing_price: number;
                      /**
                       * Add Mat 1 Price
                       * @description Mat #1 addon price
                       */
                      add_mat_1_price: number;
                      /**
                       * Add Mat 2 Price
                       * @description Mat #2 addon price
                       */
                      add_mat_2_price: number;
                      /**
                       * Debug
                       * @description Debug details
                       * @default null
                       */
                      debug: {
                          [key: string]: unknown;
                      } | null;
                      /**
                       * Info
                       * @description Additional info or warnings
                       * @default null
                       */
                      info: string | null;
                      /**
                       * Product Code
                       * @description Internal product code
                       */
                      product_code: string;
                      /**
                       * Product Price
                       * @description Line item price in USD
                       */
                      product_price: number;
                      /**
                       * Product Qty
                       * @description Quoted quantity
                       */
                      product_qty: number;
                      /**
                       * Product Sku
                       * @description SKU quoted
                       */
                      product_sku: string;
                      /**
                       * Total Price
                       * @description Total line cost in USD
                       */
                      total_price: number;
                  }[];
              };
              /**
               * Rate
               * @description Rate in USD
               */
              rate: number;
              /**
               * Shipping Code
               * @description Carrier code
               */
              shipping_code: string;
              /**
               * Shipping Method
               * @description Carrier method name
               */
              shipping_method: string;
          }[];
          /**
           * Order Po
           * @description Echoed order identifier
           */
          order_po: string;
          /**
           * Order Size
           * @description Package dimensions and weight
           */
          order_size: {
              /**
               * Cubic Volume
               * @description Cubic volume in cubic inches
               */
              cubic_volume: number;
              /**
               * Depth
               * @description Depth in inches
               */
              depth: number;
              /**
               * Height
               * @description Height in inches
               */
              height: number;
              /**
               * Is Rigid
               * @description True if package is rigid
               */
              is_rigid: boolean;
              /**
               * Ounces
               * @description Weight in ounces
               */
              ounces: number;
              /**
               * Width
               * @description Width in inches
               */
              width: number;
          };
      }[];
      /**
       * Status
       * @description Operation outcome
       */
      status: {
          /**
           * Debug
           * @description Debug details
           * @default null
           */
          debug: {
              [key: string]: unknown;
          } | null;
          /**
           * Message
           * @description Success or error message
           * @default null
           */
          message: string | null;
          /**
           * Status Code
           * @description HTTP status code
           */
          status_code: number;
          /**
           * Success
           * @description True if no errors
           */
          success: boolean;
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
 * Type of FINERWORKS's FINERWORKS_LIST_STYLE_TYPES tool input.
 */
type FINERWORKS_LIST_STYLE_TYPES_INPUT = {
  /**
   * Ids
   * @description Optional list of style type IDs to filter the results
   * @default null
   */
  ids: number[] | null;
};

/**
 * Type of FINERWORKS's FINERWORKS_LIST_STYLE_TYPES tool output.
 */
type FINERWORKS_LIST_STYLE_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Operation status details
       */
      status: {
          /**
           * Debug
           * @description Debug details useful for troubleshooting
           * @default null
           */
          debug: {
              [key: string]: unknown;
          } | null;
          /**
           * Message
           * @description Additional information message
           * @default null
           */
          message: string | null;
          /**
           * Status Code
           * @description HTTP status code (e.g., '200 OK')
           */
          status_code: string;
          /**
           * Success
           * @description Indicates if the request succeeded
           */
          success: boolean;
      };
      /**
       * Style Types
       * @description List of style types returned
       */
      style_types: {
          /**
           * Available Sizes
           * @description List of discrete sizes; if empty, custom sizing in whole inches within min/max
           */
          available_sizes: {
              /**
               * Height
               * @description Height in inches (decimal)
               */
              height: number;
              /**
               * Width
               * @description Width in inches (decimal)
               */
              width: number;
          }[];
          /**
           * Can Frame
           * @description Indicates if framing is available
           */
          can_frame: boolean;
          /**
           * Can Mat
           * @description Indicates if matting is available
           */
          can_mat: boolean;
          /**
           * Custom Sizing
           * @description Indicates if custom sizing is available
           */
          custom_sizing: boolean;
          /**
           * Description
           * @description Information about this style
           */
          description: string;
          /**
           * Frame Class Ids
           * @description Frame IDs available to this style type
           */
          frame_class_ids: number[];
          /**
           * Id
           * @description ID number of the style type
           */
          id: number;
          /**
           * Max
           * @description Maximum size in portrait aspect
           */
          max: {
              /**
               * Height
               * @description Height in inches (decimal)
               */
              height: number;
              /**
               * Width
               * @description Width in inches (decimal)
               */
              width: number;
          };
          /**
           * Min
           * @description Minimum size in portrait aspect
           */
          min: {
              /**
               * Height
               * @description Height in inches (decimal)
               */
              height: number;
              /**
               * Width
               * @description Width in inches (decimal)
               */
              width: number;
          };
          /**
           * Name
           * @description Name of this style
           */
          name: string;
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
 * Type of FINERWORKS's FINERWORKS_SUBMIT_ORDERS tool input.
 */
type FINERWORKS_SUBMIT_ORDERS_INPUT = {
  /**
   * Orders
   * @description Up to 5 orders to submit
   */
  orders?: {
      /**
       * Acct Number Fedex
       * @description FedEx account number, max 50 chars
       * @default null
       */
      acct_number_fedex: string | null;
      /**
       * Acct Number Ups
       * @description UPS account number, max 50 chars
       * @default null
       */
      acct_number_ups: string | null;
      /**
       * Custom Data 1
       * @description Custom data 1, max 255 chars
       * @default null
       */
      custom_data_1: string | null;
      /**
       * Custom Data 2
       * @description Custom data 2, max 255 chars
       * @default null
       */
      custom_data_2: string | null;
      /**
       * Custom Data 3
       * @description Custom data 3, max 255 chars
       * @default null
       */
      custom_data_3: string | null;
      /**
       * CustomsTaxInfo
       * @description Customs and tax info
       * @default null
       */
      customs_tax_info: {
          /**
           * Tax Id
           * @description Customs tax ID, max 50 chars
           * @default null
           */
          tax_id: string | null;
          /**
           * Tax Type
           * @description Customs tax type
           * @default null
           * @enum {string|null}
           */
          tax_type: "VAT" | "IOSS" | "Other" | null;
      } | null;
      /**
       * Document Url
       * Format: uri
       * @description Document URL (PDF/JPG)
       * @default null
       */
      document_url: string | null;
      /**
       * Gift Message
       * @description Optional gift message
       * @default null
       */
      gift_message: string | null;
      /**
       * Order Items
       * @description List of order items
       */
      order_items: {
          /**
           * Custom Data 1
           * @description Custom data 1, max 255 chars
           * @default null
           */
          custom_data_1: string | null;
          /**
           * Custom Data 2
           * @description Custom data 2, max 255 chars
           * @default null
           */
          custom_data_2: string | null;
          /**
           * Custom Data 3
           * @description Custom data 3, max 255 chars
           * @default null
           */
          custom_data_3: string | null;
          /**
           * Product Guid
           * @description Internal product GUID
           * @default null
           */
          product_guid: string | null;
          /**
           * ProductImageFile
           * @description Product image details
           * @default null
           */
          product_image: {
              /**
               * Pixel Height
               * @description Image height in pixels
               * @default null
               */
              pixel_height: number | null;
              /**
               * Pixel Width
               * @description Image width in pixels
               * @default null
               */
              pixel_width: number | null;
              /**
               * Product Url File
               * Format: uri
               * @description URL to full-resolution image
               * @default null
               */
              product_url_file: string | null;
              /**
               * Product Url Thumbnail
               * Format: uri
               * @description URL to thumbnail image
               * @default null
               */
              product_url_thumbnail: string | null;
          } | null;
          /**
           * Product Order Po
           * @description Line-item PO reference, max 50 chars
           * @default null
           */
          product_order_po: string | null;
          /**
           * Product Qty
           * @description Quantity (1-999)
           */
          product_qty: number;
          /**
           * Product Sku
           * @description SKU or product code
           */
          product_sku: string;
          /**
           * Product Title
           * @description Product title, max 50 chars
           * @default null
           */
          product_title: string | null;
          /**
           * Template
           * @description Template data (JSON)
           * @default null
           */
          template: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Order Key
       * @description Key generated on submit
       * @default null
       */
      order_key: string | null;
      /**
       * Order Po
       * @description External order PO reference
       * @default null
       */
      order_po: string | null;
      /**
       * Recipient
       * @description Shipping address details
       */
      recipient: {
          /**
           * Address 1
           * @description Address line 1, max 100 chars
           */
          address_1: string;
          /**
           * Address 2
           * @description Address line 2, max 100 chars
           * @default null
           */
          address_2: string | null;
          /**
           * Address 3
           * @description Address line 3, max 100 chars
           * @default null
           */
          address_3: string | null;
          /**
           * Address Order Po
           * @description PO reference, max 50 chars
           * @default null
           */
          address_order_po: string | null;
          /**
           * City
           * @description City, max 50 chars
           * @default null
           */
          city: string | null;
          /**
           * Company Name
           * @description Company name, max 50 chars
           * @default null
           */
          company_name: string | null;
          /**
           * Country Code
           * @description ISO 3166-1 alpha-2 country code
           */
          country_code: string;
          /**
           * Email
           * @description Email address, max 50 chars
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description Recipient first name, max 50 chars
           */
          first_name: string;
          /**
           * Last Name
           * @description Recipient last name, max 50 chars
           */
          last_name: string;
          /**
           * Phone
           * @description Phone number, max 50 chars
           * @default null
           */
          phone: string | null;
          /**
           * Province
           * @description Province if non-US, max 50 chars
           * @default null
           */
          province: string | null;
          /**
           * State Code
           * @description USPS state code if US
           * @default null
           */
          state_code: string | null;
          /**
           * Zip Postal Code
           * @description ZIP or postal code, max 10 chars
           */
          zip_postal_code: string;
      };
      /**
       * Ship By Date
       * Format: date
       * @description Requested ship-by date
       * @default null
       */
      ship_by_date: string | null;
      /**
       * Shipping Code
       * @description Shipping code (EC, SD, FS)
       */
      shipping_code: string;
      /**
       * Test Mode
       * @description If true, validate only; do not submit
       * @default false
       */
      test_mode: boolean | null;
      /**
       * Webhook Order Status Url
       * Format: uri
       * @description Webhook URL for order status updates
       * @default null
       */
      webhook_order_status_url: string | null;
  }[];
  /**
   * Validate Only
   * @description If true, only validate payload; no submission
   * @default false
   */
  validate_only: boolean | null;
};

/**
 * Type of FINERWORKS's FINERWORKS_SUBMIT_ORDERS tool output.
 */
type FINERWORKS_SUBMIT_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Debug
       * @description Debug data, if any
       * @default null
       */
      debug: {
          [key: string]: unknown;
      } | null;
      /**
       * Misc
       * @description Miscellaneous data, if any
       * @default null
       */
      misc: {
          [key: string]: unknown;
      } | null;
      /**
       * Orders
       * @description List of submitted orders confirmations
       */
      orders: {
          /**
           * Order Confirmation Datetime
           * Format: date-time
           * @description Confirmation timestamp
           */
          order_confirmation_datetime: string;
          /**
           * Order Confirmation Id
           * @description Submission confirmation ID
           */
          order_confirmation_id: number;
          /**
           * Order Id
           * @description FinerWorks internal order ID
           */
          order_id: number;
          /**
           * Order Po
           * @description Your supplied order_po
           */
          order_po: string;
      }[];
      /**
       * Status
       * @description Response status information
       */
      status: {
          /**
           * Debug
           * @description Debug details if available
           * @default null
           */
          debug: {
              [key: string]: unknown;
          } | null;
          /**
           * Message
           * @description Additional info or error message
           * @default null
           */
          message: string | null;
          /**
           * Status Code
           * @description HTTP status code returned
           */
          status_code: number;
          /**
           * Success
           * @description True if request succeeded
           */
          success: boolean;
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
 * Type of FINERWORKS's FINERWORKS_TEST_MY_CREDENTIALS tool input.
 */
type FINERWORKS_TEST_MY_CREDENTIALS_INPUT = object;

/**
 * Type of FINERWORKS's FINERWORKS_TEST_MY_CREDENTIALS tool output.
 */
type FINERWORKS_TEST_MY_CREDENTIALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Standard status block.
       */
      status: {
          /**
           * Debug
           * @description Debug info for troubleshooting.
           * @default null
           */
          debug: {
              [key: string]: string | number | boolean | null;
          } | null;
          /**
           * Message
           * @description Additional information message.
           * @default null
           */
          message: string | null;
          /**
           * Status Code
           * @description HTTP status code returned by the API.
           */
          status_code: number;
          /**
           * Success
           * @description Indicates if the API call succeeded.
           */
          success: boolean;
      };
      /**
       * User Account
       * @description The authenticated user account details.
       */
      user_account: {
          /**
           * Account Email
           * @description Account email
           */
          account_email: string;
          /**
           * Account Id
           * @description Account ID
           */
          account_id: number;
          /**
           * Account Username
           * @description Account username
           */
          account_username: string;
          /**
           * Address
           * @description Billing address details
           * @default null
           */
          billing_info: {
              /**
               * Address 1
               * @description Address line 1
               */
              address_1: string;
              /**
               * Address 2
               * @description Address line 2
               * @default null
               */
              address_2: string | null;
              /**
               * Address 3
               * @description Address line 3
               * @default null
               */
              address_3: string | null;
              /**
               * Address Order Po
               * @description PO value tied to address
               * @default null
               */
              address_order_po: string | null;
              /**
               * City
               * @description City/town
               * @default null
               */
              city: string | null;
              /**
               * Company Name
               * @description Company name
               * @default null
               */
              company_name: string | null;
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code
               */
              country_code: string;
              /**
               * Email
               * @description Email address
               * @default null
               */
              email: string | null;
              /**
               * First Name
               * @description First name
               */
              first_name: string;
              /**
               * Last Name
               * @description Last name
               */
              last_name: string;
              /**
               * Phone
               * @description Phone number
               * @default null
               */
              phone: string | null;
              /**
               * Province
               * @description Province
               * @default null
               */
              province: string | null;
              /**
               * State Code
               * @description State or province code
               * @default null
               */
              state_code: string | null;
              /**
               * Zip Postal Code
               * @description ZIP/postal code
               */
              zip_postal_code: string;
          } | null;
          /**
           * Address
           * @description Business address details
           * @default null
           */
          business_info: {
              /**
               * Address 1
               * @description Address line 1
               */
              address_1: string;
              /**
               * Address 2
               * @description Address line 2
               * @default null
               */
              address_2: string | null;
              /**
               * Address 3
               * @description Address line 3
               * @default null
               */
              address_3: string | null;
              /**
               * Address Order Po
               * @description PO value tied to address
               * @default null
               */
              address_order_po: string | null;
              /**
               * City
               * @description City/town
               * @default null
               */
              city: string | null;
              /**
               * Company Name
               * @description Company name
               * @default null
               */
              company_name: string | null;
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code
               */
              country_code: string;
              /**
               * Email
               * @description Email address
               * @default null
               */
              email: string | null;
              /**
               * First Name
               * @description First name
               */
              first_name: string;
              /**
               * Last Name
               * @description Last name
               */
              last_name: string;
              /**
               * Phone
               * @description Phone number
               * @default null
               */
              phone: string | null;
              /**
               * Province
               * @description Province
               * @default null
               */
              province: string | null;
              /**
               * State Code
               * @description State or province code
               * @default null
               */
              state_code: string | null;
              /**
               * Zip Postal Code
               * @description ZIP/postal code
               */
              zip_postal_code: string;
          } | null;
          /**
           * Logo Url
           * @description Stored logo URL
           * @default null
           */
          logo_url: string | null;
          /**
           * Payment Profile Id
           * @description Payment profile identifier
           * @default null
           */
          payment_profile_id: string | null;
          /**
           * User Account Credits
           * @description Account credit balance
           */
          user_account_credits: number | null;
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
 * Type of FINERWORKS's FINERWORKS_UPDATE_FILE_SELECTION tool input.
 */
type FINERWORKS_UPDATE_FILE_SELECTION_INPUT = {
  /**
   * Guid
   * @description Master key (GUID) assigned to this group of selected files
   */
  guid?: string;
  /**
   * Guids
   * @description List of file GUIDs to set as the current selection
   */
  guids?: string[];
};

/**
 * Type of FINERWORKS's FINERWORKS_UPDATE_FILE_SELECTION tool output.
 */
type FINERWORKS_UPDATE_FILE_SELECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Guids
       * @description The updated list of selected file GUIDs.
       */
      guids: string[];
      /**
       * Status
       * @description Response status details.
       */
      status: {
          /**
           * Debug
           * @description Debug information for troubleshooting any errors.
           * @default null
           */
          debug: {
              [key: string]: unknown;
          } | null;
          /**
           * Message
           * @description Additional information or error message.
           * @default null
           */
          message: string | null;
          /**
           * Status Code
           * @description HTTP status code returned.
           */
          status_code: number;
          /**
           * Success
           * @description Indicates if the update was successful.
           */
          success: boolean;
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
 * Type of FINERWORKS's FINERWORKS_UPDATE_USER tool input.
 */
type FINERWORKS_UPDATE_USER_INPUT = {
  /**
   * Account Key
   * @description Account unique identifier; applied only if your app key is permitted
   * @default null
   */
  account_key: string | null;
  /**
   * Address
   * @description Billing address; omit or null to leave unchanged
   * @default null
   */
  billing_info: {
      /**
       * Address 1
       * @description Address line 1 (max 100)
       */
      address_1: string;
      /**
       * Address 2
       * @description Address line 2 (max 100)
       * @default null
       */
      address_2: string | null;
      /**
       * Address 3
       * @description Address line 3 (max 100)
       * @default null
       */
      address_3: string | null;
      /**
       * Address Order Po
       * @description PO value tied to address (max 50)
       * @default null
       */
      address_order_po: string | null;
      /**
       * City
       * @description City/town (max 50)
       * @default null
       */
      city: string | null;
      /**
       * Company Name
       * @description Company name (max 50)
       * @default null
       */
      company_name: string | null;
      /**
       * Country Code
       * @description ISO 3166 country code
       */
      country_code: string;
      /**
       * Email
       * @description Email to display on packing slip
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name (max 50)
       */
      first_name: string;
      /**
       * Last Name
       * @description Last name (max 50)
       */
      last_name: string;
      /**
       * Phone
       * @description Phone (max 50)
       * @default null
       */
      phone: string | null;
      /**
       * Province
       * @description Province (max 50)
       * @default null
       */
      province: string | null;
      /**
       * State Code
       * @description US state code (2-letter)
       * @default null
       */
      state_code: string | null;
      /**
       * Zip Postal Code
       * @description ZIP/postal code (max 10)
       */
      zip_postal_code: string;
  } | null;
  /**
   * Address
   * @description Business address; omit or null to leave unchanged
   * @default null
   */
  business_info: {
      /**
       * Address 1
       * @description Address line 1 (max 100)
       */
      address_1: string;
      /**
       * Address 2
       * @description Address line 2 (max 100)
       * @default null
       */
      address_2: string | null;
      /**
       * Address 3
       * @description Address line 3 (max 100)
       * @default null
       */
      address_3: string | null;
      /**
       * Address Order Po
       * @description PO value tied to address (max 50)
       * @default null
       */
      address_order_po: string | null;
      /**
       * City
       * @description City/town (max 50)
       * @default null
       */
      city: string | null;
      /**
       * Company Name
       * @description Company name (max 50)
       * @default null
       */
      company_name: string | null;
      /**
       * Country Code
       * @description ISO 3166 country code
       */
      country_code: string;
      /**
       * Email
       * @description Email to display on packing slip
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name (max 50)
       */
      first_name: string;
      /**
       * Last Name
       * @description Last name (max 50)
       */
      last_name: string;
      /**
       * Phone
       * @description Phone (max 50)
       * @default null
       */
      phone: string | null;
      /**
       * Province
       * @description Province (max 50)
       * @default null
       */
      province: string | null;
      /**
       * State Code
       * @description US state code (2-letter)
       * @default null
       */
      state_code: string | null;
      /**
       * Zip Postal Code
       * @description ZIP/postal code (max 10)
       */
      zip_postal_code: string;
  } | null;
  /**
   * Logo Data
   * Format: binary
   * @description Raw JPG bytes for logo; will be base64-encoded automatically; omit or null to leave unchanged
   * @default null
   */
  logo_data: string | null;
  /**
   * Logo Url
   * @description Public URL of existing logo; omit to leave unchanged
   * @default null
   */
  logo_url: string | null;
  /**
   * Payment Profile Id
   * @description Braintree customer ID for billing API orders
   * @default null
   */
  payment_profile_id: string | null;
  /**
   * Portrait Data
   * Format: binary
   * @description Raw JPG bytes for portrait; will be base64-encoded automatically; omit or null to leave unchanged
   * @default null
   */
  portrait_data: string | null;
};

/**
 * Type of FINERWORKS's FINERWORKS_UPDATE_USER tool output.
 */
type FINERWORKS_UPDATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Response status block
       */
      status: {
          /**
           * Debug
           * @description Debug diagnostics, if any
           * @default null
           */
          debug: {
              [key: string]: unknown;
          } | null;
          /**
           * Message
           * @description Additional information from the server
           * @default null
           */
          message: string | null;
          /**
           * Status Code
           * @description HTTP status code returned by the server
           */
          status_code: number;
          /**
           * Success
           * @description Indicates if the request was successful
           */
          success: boolean;
      };
      /**
       * User Account
       * @description Updated user account details
       */
      user_account: {
          /**
           * Account Email
           * @description Account email
           */
          account_email: string;
          /**
           * Account Id
           * @description Account ID
           */
          account_id: number;
          /**
           * Account Username
           * @description Account username
           */
          account_username: string;
          /**
           * Address
           * @description Billing address details
           * @default null
           */
          billing_info: {
              /**
               * Address 1
               * @description Address line 1 (max 100)
               */
              address_1: string;
              /**
               * Address 2
               * @description Address line 2 (max 100)
               * @default null
               */
              address_2: string | null;
              /**
               * Address 3
               * @description Address line 3 (max 100)
               * @default null
               */
              address_3: string | null;
              /**
               * Address Order Po
               * @description PO value tied to address (max 50)
               * @default null
               */
              address_order_po: string | null;
              /**
               * City
               * @description City/town (max 50)
               * @default null
               */
              city: string | null;
              /**
               * Company Name
               * @description Company name (max 50)
               * @default null
               */
              company_name: string | null;
              /**
               * Country Code
               * @description ISO 3166 country code
               */
              country_code: string;
              /**
               * Email
               * @description Email to display on packing slip
               * @default null
               */
              email: string | null;
              /**
               * First Name
               * @description First name (max 50)
               */
              first_name: string;
              /**
               * Last Name
               * @description Last name (max 50)
               */
              last_name: string;
              /**
               * Phone
               * @description Phone (max 50)
               * @default null
               */
              phone: string | null;
              /**
               * Province
               * @description Province (max 50)
               * @default null
               */
              province: string | null;
              /**
               * State Code
               * @description US state code (2-letter)
               * @default null
               */
              state_code: string | null;
              /**
               * Zip Postal Code
               * @description ZIP/postal code (max 10)
               */
              zip_postal_code: string;
          } | null;
          /**
           * Address
           * @description Business address details
           * @default null
           */
          business_info: {
              /**
               * Address 1
               * @description Address line 1 (max 100)
               */
              address_1: string;
              /**
               * Address 2
               * @description Address line 2 (max 100)
               * @default null
               */
              address_2: string | null;
              /**
               * Address 3
               * @description Address line 3 (max 100)
               * @default null
               */
              address_3: string | null;
              /**
               * Address Order Po
               * @description PO value tied to address (max 50)
               * @default null
               */
              address_order_po: string | null;
              /**
               * City
               * @description City/town (max 50)
               * @default null
               */
              city: string | null;
              /**
               * Company Name
               * @description Company name (max 50)
               * @default null
               */
              company_name: string | null;
              /**
               * Country Code
               * @description ISO 3166 country code
               */
              country_code: string;
              /**
               * Email
               * @description Email to display on packing slip
               * @default null
               */
              email: string | null;
              /**
               * First Name
               * @description First name (max 50)
               */
              first_name: string;
              /**
               * Last Name
               * @description Last name (max 50)
               */
              last_name: string;
              /**
               * Phone
               * @description Phone (max 50)
               * @default null
               */
              phone: string | null;
              /**
               * Province
               * @description Province (max 50)
               * @default null
               */
              province: string | null;
              /**
               * State Code
               * @description US state code (2-letter)
               * @default null
               */
              state_code: string | null;
              /**
               * Zip Postal Code
               * @description ZIP/postal code (max 10)
               */
              zip_postal_code: string;
          } | null;
          /**
           * Logo Url
           * @description Stored logo URL
           * @default null
           */
          logo_url: string | null;
          /**
           * Payment Profile Id
           * @description Braintree customer ID for billing
           * @default null
           */
          payment_profile_id: string | null;
          /**
           * User Account Credits
           * @description Account credit balance
           */
          user_account_credits: number | null;
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
 * Type map of all available tool input types for toolkit "FINERWORKS".
 */
export type FINERWORKS_TOOL_INPUTS = {
  ADD_IMAGES: FINERWORKS_ADD_IMAGES_INPUT
  GET_USER: FINERWORKS_GET_USER_INPUT
  LIST_MEDIA_TYPES: FINERWORKS_LIST_MEDIA_TYPES_INPUT
  LIST_PRODUCT_TYPES: FINERWORKS_LIST_PRODUCT_TYPES_INPUT
  LIST_SHIPPING_OPTIONS_MULTIPLE: FINERWORKS_LIST_SHIPPING_OPTIONS_MULTIPLE_INPUT
  LIST_STYLE_TYPES: FINERWORKS_LIST_STYLE_TYPES_INPUT
  SUBMIT_ORDERS: FINERWORKS_SUBMIT_ORDERS_INPUT
  TEST_MY_CREDENTIALS: FINERWORKS_TEST_MY_CREDENTIALS_INPUT
  UPDATE_FILE_SELECTION: FINERWORKS_UPDATE_FILE_SELECTION_INPUT
  UPDATE_USER: FINERWORKS_UPDATE_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FINERWORKS".
 */
export type FINERWORKS_TOOL_OUTPUTS = {
  ADD_IMAGES: FINERWORKS_ADD_IMAGES_OUTPUT
  GET_USER: FINERWORKS_GET_USER_OUTPUT
  LIST_MEDIA_TYPES: FINERWORKS_LIST_MEDIA_TYPES_OUTPUT
  LIST_PRODUCT_TYPES: FINERWORKS_LIST_PRODUCT_TYPES_OUTPUT
  LIST_SHIPPING_OPTIONS_MULTIPLE: FINERWORKS_LIST_SHIPPING_OPTIONS_MULTIPLE_OUTPUT
  LIST_STYLE_TYPES: FINERWORKS_LIST_STYLE_TYPES_OUTPUT
  SUBMIT_ORDERS: FINERWORKS_SUBMIT_ORDERS_OUTPUT
  TEST_MY_CREDENTIALS: FINERWORKS_TEST_MY_CREDENTIALS_OUTPUT
  UPDATE_FILE_SELECTION: FINERWORKS_UPDATE_FILE_SELECTION_OUTPUT
  UPDATE_USER: FINERWORKS_UPDATE_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FINERWORKS toolkit.
 */
export const FINERWORKS = {
  slug: "finerworks",
  tools: {
    /**
     * Tool to add images to a finerworks library. Use after preparing up to 5 images with metadata and URIs.
     */
    ADD_IMAGES: "FINERWORKS_ADD_IMAGES",
    /**
     * Tool to retrieve the current user's profile. Use after authentication to fetch account details.
     */
    GET_USER: "FINERWORKS_GET_USER",
    /**
     * Tool to get available media types. Use when you need to retrieve all or filtered media types after authentication.
     */
    LIST_MEDIA_TYPES: "FINERWORKS_LIST_MEDIA_TYPES",
    /**
     * Tool to list product types. Use when you need to retrieve available product types from FinerWorks after setting up credentials.
     */
    LIST_PRODUCT_TYPES: "FINERWORKS_LIST_PRODUCT_TYPES",
    /**
     * Tool to list shipping options for multiple orders. Use when you need a batch rate quote before final submission.
     */
    LIST_SHIPPING_OPTIONS_MULTIPLE: "FINERWORKS_LIST_SHIPPING_OPTIONS_MULTIPLE",
    /**
     * Tool to get a list of style types. Use when you need to retrieve available style options before configuring a product.
     */
    LIST_STYLE_TYPES: "FINERWORKS_LIST_STYLE_TYPES",
    /**
     * Tool to submit up to five new orders. Use after all customer and line-item details are finalized.
     */
    SUBMIT_ORDERS: "FINERWORKS_SUBMIT_ORDERS",
    /**
     * Tool to test the configured FinerWorks credentials. Use after setting up your web_api_key and app_key to confirm validity.
     */
    TEST_MY_CREDENTIALS: "FINERWORKS_TEST_MY_CREDENTIALS",
    /**
     * Tool to update a user's currently selected image files using the selection key. Use when you need to replace the current set of files associated with a selection GUID after authentication.
     */
    UPDATE_FILE_SELECTION: "FINERWORKS_UPDATE_FILE_SELECTION",
    /**
     * Tool to update various features of a user's account profile. Use when you need to modify billing/business info, logos, or payment profile after retrieving current account.
     */
    UPDATE_USER: "FINERWORKS_UPDATE_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FINERWORKS".
 */
export type FINERWORKS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FINERWORKS".
 */
export type FINERWORKS_TRIGGER_EVENTS = {}
