// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SHOPIFY's SHOPIFY_ADD_PRODUCT_TO_COLLECTION tool input.
 */
type SHOPIFY_ADD_PRODUCT_TO_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description Identifier of the *custom collection*.
   */
  collection_id?: number;
  /**
   * Position
   * @description Optional 1-based position if the custom collection is manually sorted; product is added to the end if unspecified or collection isn't manually sorted.
   * @default null
   */
  position: number | null;
  /**
   * Product Id
   * @description Identifier of the product to add.
   */
  product_id?: number;
};

/**
 * Type of SHOPIFY's SHOPIFY_ADD_PRODUCT_TO_COLLECTION tool output.
 */
type SHOPIFY_ADD_PRODUCT_TO_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Shopify API response: 'collect' object on success, error details on failure.
       */
      response_data: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description True if the product was successfully added.
       */
      success: boolean;
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
 * Type of SHOPIFY's SHOPIFY_COUNT_PRODUCT_IMAGES tool input.
 */
type SHOPIFY_COUNT_PRODUCT_IMAGES_INPUT = {
  /**
   * Product Id
   * @description The unique identifier for the Shopify product whose images are to be counted.
   */
  product_id?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_COUNT_PRODUCT_IMAGES tool output.
 */
type SHOPIFY_COUNT_PRODUCT_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the API's response. If successful, this will typically be a dictionary with a key 'count' indicating the number of images (e.g., `{'count': 5}`). If the product has no images, the count will be 0. On failure, it may contain error details.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description A boolean flag indicating if the request to count product images was successfully processed. True if successful, False otherwise.
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_CREATE_CUSTOMER tool input.
 */
type SHOPIFY_CREATE_CUSTOMER_INPUT = {
  /**
   * Addresses
   * @description A list of addresses for the customer.
   * @default null
   */
  addresses: {
      /**
       * Address1
       * @description The street address.
       * @default null
       */
      address1: string | null;
      /**
       * Address2
       * @description An optional additional field for the street address.
       * @default null
       */
      address2: string | null;
      /**
       * City
       * @description The city.
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description The company for this address.
       * @default null
       */
      company: string | null;
      /**
       * Country
       * @description The country.
       * @default null
       */
      country: string | null;
      /**
       * Default
       * @description Whether this is the default address.
       * @default null
       */
      default: boolean | null;
      /**
       * First Name
       * @description The first name for this address.
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description The last name for this address.
       * @default null
       */
      last_name: string | null;
      /**
       * Phone
       * @description The phone number for this address.
       * @default null
       */
      phone: string | null;
      /**
       * Province
       * @description The province or state.
       * @default null
       */
      province: string | null;
      /**
       * Zip
       * @description The postal or zip code.
       * @default null
       */
      zip: string | null;
  }[] | null;
  /**
   * Email
   * Format: email
   * @description The customer's unique email address.
   */
  email?: string;
  /**
   * First Name
   * @description The customer's first name.
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description The customer's last name.
   * @default null
   */
  last_name: string | null;
  /**
   * Note
   * @description An optional note about the customer.
   * @default null
   */
  note: string | null;
  /**
   * Password
   * @description The customer's password. If provided, password_confirmation is also required.
   * @default null
   */
  password: string | null;
  /**
   * Password Confirmation
   * @description Confirmation of the customer's password. Required if password is provided.
   * @default null
   */
  password_confirmation: string | null;
  /**
   * Phone
   * @description The customer's phone number (E.164 format recommended).
   * @default null
   */
  phone: string | null;
  /**
   * Send Email Invite
   * @description If true, sends the customer an email invite to create an account.
   * @default null
   */
  send_email_invite: boolean | null;
  /**
   * Send Email Welcome
   * @description Whether to send the customer a welcome email. Defaults to true. If send_email_invite is true, this can be set to false.
   * @default true
   */
  send_email_welcome: boolean | null;
  /**
   * Tags
   * @description A comma-separated string of tags to associate with the customer.
   * @default null
   */
  tags: string | null;
  /**
   * Verified Email
   * @description Whether the customer has verified their email address.
   * @default null
   */
  verified_email: boolean | null;
};

/**
 * Type of SHOPIFY's SHOPIFY_CREATE_CUSTOMER tool output.
 */
type SHOPIFY_CREATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customer
       * @description The created customer object.
       */
      customer: {
          /**
           * Addresses
           * @description A list of the customer's addresses.
           * @default null
           */
          addresses: {
              /**
               * Address1
               * @description The street address.
               * @default null
               */
              address1: string | null;
              /**
               * Address2
               * @description An optional additional field for the street address.
               * @default null
               */
              address2: string | null;
              /**
               * City
               * @description The city.
               * @default null
               */
              city: string | null;
              /**
               * Company
               * @description The company for this address.
               * @default null
               */
              company: string | null;
              /**
               * Country
               * @description The country.
               * @default null
               */
              country: string | null;
              /**
               * Default
               * @description Whether this is the default address.
               * @default null
               */
              default: boolean | null;
              /**
               * First Name
               * @description The first name for this address.
               * @default null
               */
              first_name: string | null;
              /**
               * Last Name
               * @description The last name for this address.
               * @default null
               */
              last_name: string | null;
              /**
               * Phone
               * @description The phone number for this address.
               * @default null
               */
              phone: string | null;
              /**
               * Province
               * @description The province or state.
               * @default null
               */
              province: string | null;
              /**
               * Zip
               * @description The postal or zip code.
               * @default null
               */
              zip: string | null;
          }[] | null;
          /**
           * Created At
           * @description Timestamp of when the customer was created.
           */
          created_at: string;
          /**
           * Address
           * @description The customer's default address.
           * @default null
           */
          default_address: {
              /**
               * Address1
               * @description The street address.
               * @default null
               */
              address1: string | null;
              /**
               * Address2
               * @description An optional additional field for the street address.
               * @default null
               */
              address2: string | null;
              /**
               * City
               * @description The city.
               * @default null
               */
              city: string | null;
              /**
               * Company
               * @description The company for this address.
               * @default null
               */
              company: string | null;
              /**
               * Country
               * @description The country.
               * @default null
               */
              country: string | null;
              /**
               * Default
               * @description Whether this is the default address.
               * @default null
               */
              default: boolean | null;
              /**
               * First Name
               * @description The first name for this address.
               * @default null
               */
              first_name: string | null;
              /**
               * Last Name
               * @description The last name for this address.
               * @default null
               */
              last_name: string | null;
              /**
               * Phone
               * @description The phone number for this address.
               * @default null
               */
              phone: string | null;
              /**
               * Province
               * @description The province or state.
               * @default null
               */
              province: string | null;
              /**
               * Zip
               * @description The postal or zip code.
               * @default null
               */
              zip: string | null;
          } | null;
          /**
           * Email
           * Format: email
           * @description The customer's email.
           */
          email: string;
          /**
           * First Name
           * @description The customer's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description The unique ID of the customer.
           */
          id: number;
          /**
           * Last Name
           * @description The customer's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Orders Count
           * @description The number of orders associated with the customer.
           */
          orders_count: number;
          /**
           * Phone
           * @description The customer's phone number.
           * @default null
           */
          phone: string | null;
          /**
           * State
           * @description The state of the customer's account (e.g., "disabled", "invited", "enabled").
           * @default null
           */
          state: string | null;
          /**
           * Tags
           * @description Tags associated with the customer.
           * @default null
           */
          tags: string | null;
          /**
           * Total Spent
           * @description The total amount spent by the customer.
           * @default null
           */
          total_spent: string | null;
          /**
           * Updated At
           * @description Timestamp of when the customer was last updated.
           */
          updated_at: string;
          /**
           * Verified Email
           * @description Whether the email is verified.
           * @default null
           */
          verified_email: boolean | null;
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
 * Type of SHOPIFY's SHOPIFY_CREATE_CUSTOM_COLLECTION tool input.
 */
type SHOPIFY_CREATE_CUSTOM_COLLECTION_INPUT = {
  /**
   * Title
   * @description Unique title for the custom collection, visible to customers and used for product organization.
   */
  title?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_CREATE_CUSTOM_COLLECTION tool output.
 */
type SHOPIFY_CREATE_CUSTOM_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full Shopify API response: details of the new collection on success, or error information on failure.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates whether the custom collection was successfully created.
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_CREATE_ORDER tool input.
 */
type SHOPIFY_CREATE_ORDER_INPUT = {
  /**
   * Currency
   * @description The three-letter ISO 4217 currency code for the amounts in the order (e.g., USD, CAD, EUR).
   * @default null
   */
  currency: string | null;
  /**
   * Customer Id
   * @description The unique identifier of the customer associated with this order. If provided, the order will be linked to this customer. This field is optional.
   * @default null
   */
  customer_id: string | null;
  /**
   * Line Items
   * @description A list of line item objects, each representing an item in the order. Each object should specify at least a `variant_id` (or `product_id`) and `quantity`. Other common fields include `price` and `title`. At least one line item is required.
   */
  line_items?: {
      [key: string]: unknown;
  }[];
  /**
   * Total Tax
   * @description The total amount of tax for the order. This should be a numeric value representing the sum of all taxes.
   * @default null
   */
  total_tax: number | null;
  /**
   * Transactions
   * @description A list of transaction objects associated with the order, typically representing payment information. Each object usually includes `kind` (e.g., 'sale', 'authorization'), `amount`, `status`, and `gateway`.
   * @default null
   */
  transactions: {
      [key: string]: unknown;
  }[] | null;
};

/**
 * Type of SHOPIFY's SHOPIFY_CREATE_ORDER tool output.
 */
type SHOPIFY_CREATE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the Shopify API, typically containing the created order object.
       */
      response_data: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates whether the order creation was successful.
       */
      success: boolean;
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
 * Type of SHOPIFY's SHOPIFY_CREATE_PRODUCT tool input.
 */
type SHOPIFY_CREATE_PRODUCT_INPUT = {
  /**
   * Body Html
   * @description A detailed description of the product, which can include HTML formatting for rich text.
   */
  body_html?: string;
  /**
   * Product Type
   * @description A category for the product, used for filtering and organizing products in Shopify.
   */
  product_type?: string;
  /**
   * Title
   * @description The title of the product, typically required by Shopify.
   */
  title?: string;
  /**
   * Variants
   * @description Product variants. Common keys include 'price', 'sku', 'option1', 'option2', 'inventory_quantity'. At least one variant is typically required; if not provided, Shopify might create a default one.
   */
  variants?: {
      [key: string]: unknown;
  }[];
  /**
   * Vendor
   * @description The name of the product's vendor or manufacturer.
   */
  vendor?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_CREATE_PRODUCT tool output.
 */
type SHOPIFY_CREATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full JSON response from the Shopify API, containing details of the created product or an error message.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates whether the product creation was successful.
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_CREATE_PRODUCT_IMAGE tool input.
 */
type SHOPIFY_CREATE_PRODUCT_IMAGE_INPUT = {
  /**
   * Image
   * @description An object containing the image details.
   */
  image?: {
      /**
       * Alt
       * @description Alternative text for the image.
       * @default null
       */
      alt: string | null;
      /**
       * Attachment
       * @description Base64-encoded image data.
       * @default null
       */
      attachment: string | null;
      /**
       * Filename
       * @description Filename of the image.
       * @default null
       */
      filename: string | null;
      /**
       * Metafields
       * @description A list of metafields to associate with this image.
       * @default null
       */
      metafields: {
          /**
           * Key
           * @description The key of the metafield.
           */
          key: string;
          /**
           * Namespace
           * @description The namespace of the metafield.
           */
          namespace: string;
          /**
           * Type
           * @description The type of the metafield.
           */
          type: string;
          /**
           * Value
           * @description The value of the metafield.
           */
          value: string;
      }[] | null;
      /**
       * Position
       * @description The order of the product image in the list. The first product image is at position 1 and is the main image for the product.
       * @default null
       */
      position: number | null;
      /**
       * Src
       * @description The source URL of the image.
       * @default null
       */
      src: string | null;
      /**
       * Variant Ids
       * @description An array of variant IDs to associate this image with.
       * @default null
       */
      variant_ids: number[] | null;
  };
  /**
   * Product Id
   * @description The ID of the product to associate the image with.
   */
  product_id?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_CREATE_PRODUCT_IMAGE tool output.
 */
type SHOPIFY_CREATE_PRODUCT_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description The created product image details.
       */
      image: {
          /**
           * Admin Graphql Api Id
           * @description The GraphQL Admin API ID of the image.
           */
          admin_graphql_api_id: string;
          /**
           * Alt
           * @description The alternative text for the image.
           * @default null
           */
          alt: string | null;
          /**
           * Created At
           * @description The timestamp of when the image was created.
           */
          created_at: string;
          /**
           * Height
           * @description The height of the image.
           */
          height: number;
          /**
           * Id
           * @description The unique ID of the product image.
           */
          id: number;
          /**
           * Position
           * @description The order of the image.
           */
          position: number;
          /**
           * Product Id
           * @description The ID of the product this image is associated with.
           */
          product_id: number;
          /**
           * Src
           * @description The source URL of the image.
           */
          src: string;
          /**
           * Updated At
           * @description The timestamp of when the image was last updated.
           */
          updated_at: string;
          /**
           * Variant Ids
           * @description An array of variant IDs associated with this image.
           */
          variant_ids: number[];
          /**
           * Width
           * @description The width of the image.
           */
          width: number;
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
 * Type of SHOPIFY's SHOPIFY_DELETE_CUSTOM_COLLECTION tool input.
 */
type SHOPIFY_DELETE_CUSTOM_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description The unique identifier for the custom collection that needs to be deleted. This ID is a numerical string assigned by Shopify when the collection is created.
   */
  collection_id?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_DELETE_CUSTOM_COLLECTION tool output.
 */
type SHOPIFY_DELETE_CUSTOM_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The complete JSON response received from the Shopify API. For a successful deletion, this is often an empty object (`{}`). In case of failure, this field will contain specific error messages or codes from Shopify.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description A boolean flag indicating the outcome of the deletion attempt. `True` if the custom collection was successfully deleted, `False` otherwise (e.g., collection not found, network issue, or API error).
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_DELETE_PRODUCT tool input.
 */
type SHOPIFY_DELETE_PRODUCT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the Shopify product to be deleted. This ID is essential for targeting the correct product for removal.
   */
  id?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_DELETE_PRODUCT tool output.
 */
type SHOPIFY_DELETE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The complete JSON response received from the Shopify API. In case of a successful deletion, this might be an empty dictionary. If an error occurs, this field will contain detailed error messages or codes from Shopify.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description A boolean flag indicating the outcome of the product deletion attempt. `True` if the product was successfully deleted from Shopify, `False` if an error occurred (e.g., product not found, invalid ID, or other API issues).
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_DELETE_PRODUCT_IMAGE tool input.
 */
type SHOPIFY_DELETE_PRODUCT_IMAGE_INPUT = {
  /**
   * Image Id
   * @description The unique identifier of the specific product image to be deleted.
   */
  image_id?: string;
  /**
   * Product Id
   * @description The unique identifier of the product from which the image is to be deleted.
   */
  product_id?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_DELETE_PRODUCT_IMAGE tool output.
 */
type SHOPIFY_DELETE_PRODUCT_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The API's response data. For successful deletions, this may be an empty object (e.g., `{}`). In case of an error, it typically contains `{"error": "An error occurred during the API call"}`.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates if the image deletion was successful (`True`) or if an API error occurred (`False`).
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_ALL_CUSTOMERS tool input.
 */
type SHOPIFY_GET_ALL_CUSTOMERS_INPUT = {
  /**
   * Created At Max
   * @description Filter customers created before or on this date. Format: YYYY-MM-DD or ISO 8601 datetime string (e.g., '2023-10-26T10:00:00-05:00').
   * @default
   */
  created_at_max: string;
  /**
   * Created At Min
   * @description Filter customers created after or on this date. Format: YYYY-MM-DD or ISO 8601 datetime string (e.g., '2023-10-26T10:00:00-05:00').
   * @default
   */
  created_at_min: string;
  /**
   * Fields
   * @description A comma-separated list of customer fields to include in the response (e.g., 'id,email,first_name'). By default, all fields are returned.
   * @default
   */
  fields: string;
  /**
   * Ids
   * @description A list of specific customer IDs to retrieve. If empty, all customers (matching other filters) will be retrieved.
   */
  ids?: string[];
  /**
   * Limit
   * @description The maximum number of customers to retrieve. Defaults to 50, with a maximum value of 250.
   * @default 50
   */
  limit: number;
  /**
   * Since Id
   * @description Retrieve only customers with an ID greater than this specified ID. This is used for paginating through results.
   * @default
   */
  since_id: string;
  /**
   * Updated At Max
   * @description Filter customers last updated before or on this date. Format: YYYY-MM-DD or ISO 8601 datetime string.
   * @default
   */
  updated_at_max: string;
  /**
   * Updated At Min
   * @description Filter customers last updated after or on this date. Format: YYYY-MM-DD or ISO 8601 datetime string.
   * @default
   */
  updated_at_min: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_ALL_CUSTOMERS tool output.
 */
type SHOPIFY_GET_ALL_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the list of customer objects retrieved from Shopify under the 'customers' key, or an error message if the call failed. The structure of customer objects follows Shopify's API documentation.
       */
      response_data: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description A boolean flag indicating if the request to retrieve customers was successfully processed.
       */
      success: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_COLLECTION_BY_ID tool input.
 */
type SHOPIFY_GET_COLLECTION_BY_ID_INPUT = {
  /**
   * Collection Id
   * @description The unique identifier of the Shopify collection to retrieve.
   */
  collection_id?: string;
  /**
   * Fields
   * @description Comma-separated list of fields to retrieve; if omitted, all fields are returned. E.g., 'id,title,handle'.
   */
  fields?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_COLLECTION_BY_ID tool output.
 */
type SHOPIFY_GET_COLLECTION_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description JSON response data from Shopify, containing collection details if successful or an error message if not.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates whether the API call to retrieve the collection was successful.
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_COLLECTS tool input.
 */
type SHOPIFY_GET_COLLECTS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to retrieve (e.g., `id,collection_id,product_id`); if unspecified, all fields are returned.
   */
  fields?: string;
  /**
   * Limit
   * @description Maximum number of collects to retrieve (1-250).
   * @default 50
   */
  limit: number;
  /**
   * Since Id
   * @description Retrieve only collects created after this ID, for pagination.
   */
  since_id?: number;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_COLLECTS tool output.
 */
type SHOPIFY_GET_COLLECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description JSON response from Shopify, containing collects or error details.
       */
      response_data: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates if the API call was successful.
       */
      success: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_COLLECTS_COUNT tool input.
 */
type SHOPIFY_GET_COLLECTS_COUNT_INPUT = object;

/**
 * Type of SHOPIFY's SHOPIFY_GET_COLLECTS_COUNT tool output.
 */
type SHOPIFY_GET_COLLECTS_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description JSON response from the Shopify API, containing a 'count' field (e.g., `{'count': 42}`) on success, or an error message on failure.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description True if the count of collects was successfully retrieved; False otherwise.
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_CUSTOMER tool input.
 */
type SHOPIFY_GET_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description The unique identifier for the customer in Shopify.
   */
  customer_id?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_CUSTOMER tool output.
 */
type SHOPIFY_GET_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Detailed information of the retrieved customer from Shopify, including attributes like name, email, address, and order history.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
      } | null;
      /**
       * Success
       * @description Indicates if the customer retrieval was successful.
       * @default null
       */
      success: boolean | null;
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
 * Type of SHOPIFY's SHOPIFY_GET_CUSTOMER_ORDERS tool input.
 */
type SHOPIFY_GET_CUSTOMER_ORDERS_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier for the customer whose orders are to be retrieved.
   */
  customer_id?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_CUSTOMER_ORDERS tool output.
 */
type SHOPIFY_GET_CUSTOMER_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description JSON response from the Shopify API, typically an 'orders' list. Each order object includes ID, items, financial/fulfillment statuses, and customer info.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SHOPIFY's SHOPIFY_GET_CUSTOM_COLLECTIONS tool input.
 */
type SHOPIFY_GET_CUSTOM_COLLECTIONS_INPUT = {
  /**
   * Handle
   * @description Filter results by the custom collection's unique, human-readable string identifier (e.g., 'summer-specials').
   */
  handle?: string;
  /**
   * Ids
   * @description A comma-separated string of custom collection IDs to retrieve.
   */
  ids?: string;
  /**
   * Limit
   * @description The maximum number of custom collections to return (between 1 and 250).
   * @default 50
   */
  limit: number;
  /**
   * Product Id
   * @description Filter results to custom collections that contain a specific product ID.
   */
  product_id?: number;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_CUSTOM_COLLECTIONS tool output.
 */
type SHOPIFY_GET_CUSTOM_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description JSON response from Shopify: a list of custom collection objects if successful, or an error object if failed.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates if the API request to retrieve custom collections was successful.
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_CUSTOM_COLLECTIONS_COUNT tool input.
 */
type SHOPIFY_GET_CUSTOM_COLLECTIONS_COUNT_INPUT = object;

/**
 * Type of SHOPIFY's SHOPIFY_GET_CUSTOM_COLLECTIONS_COUNT tool output.
 */
type SHOPIFY_GET_CUSTOM_COLLECTIONS_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The Shopify API response. Includes a 'count' field (e.g., {"count": 42}) on success, or an error message on failure.
       */
      response_data: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates if the custom collection count retrieval was successful.
       */
      success: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_ORDERSBY_ID tool input.
 */
type SHOPIFY_GET_ORDERSBY_ID_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to include in the response (e.g., 'id,line_items').
   * @default null
   */
  fields: string | null;
  /**
   * Order Id
   * @description The unique identifier of the Shopify order to retrieve.
   */
  order_id?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_ORDERSBY_ID tool output.
 */
type SHOPIFY_GET_ORDERSBY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the detailed information of the retrieved order.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SHOPIFY's SHOPIFY_GET_ORDER_LIST tool input.
 */
type SHOPIFY_GET_ORDER_LIST_INPUT = object;

/**
 * Type of SHOPIFY's SHOPIFY_GET_ORDER_LIST tool output.
 */
type SHOPIFY_GET_ORDER_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The JSON response from Shopify's `/orders.json` endpoint, usually a dictionary with an 'orders' list.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCT tool input.
 */
type SHOPIFY_GET_PRODUCT_INPUT = {
  /**
   * Product Id
   * @description The unique identifier of the Shopify product to be retrieved.
   */
  product_id?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCT tool output.
 */
type SHOPIFY_GET_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the detailed information of the retrieved product if successful (conforming to Shopify's Product API resource structure), or an error message if the request failed.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description A boolean indicating whether the request to retrieve the product was successful.
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCTS tool input.
 */
type SHOPIFY_GET_PRODUCTS_INPUT = {
  /**
   * Ids
   * @description A comma-separated string of product IDs to retrieve. If this field is not provided (i.e., defaults to `None`), all products will be fetched.
   */
  ids?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCTS tool output.
 */
type SHOPIFY_GET_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The JSON response from the Shopify API. If successful, this dictionary typically contains a 'products' key with a list of product objects (including details like title, vendor, product type, and variants). If an error occurred, it contains error information.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates whether the API request to retrieve products was successfully processed by Shopify.
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCTS_COUNT tool input.
 */
type SHOPIFY_GET_PRODUCTS_COUNT_INPUT = object;

/**
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCTS_COUNT tool output.
 */
type SHOPIFY_GET_PRODUCTS_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description JSON response from the Shopify API, containing a 'count' field (e.g., {'count': 123}) on success, or error details on failure.
       */
      response_data: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates if the API call to retrieve the product count was successful.
       */
      success: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCTS_IN_COLLECTION tool input.
 */
type SHOPIFY_GET_PRODUCTS_IN_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description Identifier for the Shopify collection. Often found in the collection's Shopify admin URL.
   */
  collection_id?: string;
  /**
   * Limit
   * @description Maximum number of products to retrieve.
   * @default 50
   */
  limit: number;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCTS_IN_COLLECTION tool output.
 */
type SHOPIFY_GET_PRODUCTS_IN_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Shopify API's JSON response: a list of products under 'products' key on success, or an 'error' key on failure.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates if the product retrieval was successful.
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCT_IMAGE tool input.
 */
type SHOPIFY_GET_PRODUCT_IMAGE_INPUT = {
  /**
   * Image Id
   * @description The unique numerical identifier of the image associated with the product.
   */
  image_id?: string;
  /**
   * Product Id
   * @description The unique numerical identifier of the Shopify product.
   */
  product_id?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCT_IMAGE tool output.
 */
type SHOPIFY_GET_PRODUCT_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the detailed information of the product image if the call is successful (e.g., `id`, `product_id`, `src`, `width`, `height`), or an error message if it fails.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates whether the API call to retrieve the product image was successful.
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCT_IMAGES tool input.
 */
type SHOPIFY_GET_PRODUCT_IMAGES_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of fields to include in the response. Available fields include: id, product_id, position, created_at, updated_at, alt, width, height, src.
   */
  fields?: string;
  /**
   * Product Id
   * @description The unique identifier of the Shopify product for which to retrieve images.
   */
  product_id?: string;
  /**
   * Since Id
   * @description Restricts the results to product images created after the specified image ID. Useful for pagination.
   */
  since_id?: string;
};

/**
 * Type of SHOPIFY's SHOPIFY_GET_PRODUCT_IMAGES tool output.
 */
type SHOPIFY_GET_PRODUCT_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The JSON response data from the Shopify API. If successful, this typically contains a list of image objects. If an error occurs, it may contain an error message.
       */
      response_data: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates whether the API request to fetch product images was successful.
       */
      success: boolean;
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
 * Type of SHOPIFY's SHOPIFY_GET_SHOP_DETAILS tool input.
 */
type SHOPIFY_GET_SHOP_DETAILS_INPUT = object;

/**
 * Type of SHOPIFY's SHOPIFY_GET_SHOP_DETAILS tool output.
 */
type SHOPIFY_GET_SHOP_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Detailed administrative information about the Shopify store. Structure is defined by the Shopify API 'Shop' resource.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates if the request to retrieve shop details was successful.
       */
      success?: boolean;
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
 * Type of SHOPIFY's SHOPIFY_UPDATE_ORDER tool input.
 */
type SHOPIFY_UPDATE_ORDER_INPUT = {
  /**
   * Id
   * @description The unique identifier of the Shopify order whose phone number is to be updated.
   */
  id?: number;
  /**
   * Phone
   * @description The new phone number for the order. E.164 format (e.g., '+15551234567') is recommended for international numbers. An empty string `''` may also be used to clear it, depending on Shopify API behavior.
   * @default null
   */
  phone: string | null;
};

/**
 * Type of SHOPIFY's SHOPIFY_UPDATE_ORDER tool output.
 */
type SHOPIFY_UPDATE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The complete JSON response from the Shopify API. If successful, this typically contains the updated order object. If an error occurred, it will contain error details.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
      } | null;
      /**
       * Success
       * @description A boolean flag indicating whether the order's phone number was successfully updated.
       * @default null
       */
      success: boolean | null;
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
 * Type map of all available tool input types for toolkit "SHOPIFY".
 */
export type SHOPIFY_TOOL_INPUTS = {
  ADD_PRODUCT_TO_COLLECTION: SHOPIFY_ADD_PRODUCT_TO_COLLECTION_INPUT
  COUNT_PRODUCT_IMAGES: SHOPIFY_COUNT_PRODUCT_IMAGES_INPUT
  CREATE_CUSTOMER: SHOPIFY_CREATE_CUSTOMER_INPUT
  CREATE_CUSTOM_COLLECTION: SHOPIFY_CREATE_CUSTOM_COLLECTION_INPUT
  CREATE_ORDER: SHOPIFY_CREATE_ORDER_INPUT
  CREATE_PRODUCT: SHOPIFY_CREATE_PRODUCT_INPUT
  CREATE_PRODUCT_IMAGE: SHOPIFY_CREATE_PRODUCT_IMAGE_INPUT
  DELETE_CUSTOM_COLLECTION: SHOPIFY_DELETE_CUSTOM_COLLECTION_INPUT
  DELETE_PRODUCT: SHOPIFY_DELETE_PRODUCT_INPUT
  DELETE_PRODUCT_IMAGE: SHOPIFY_DELETE_PRODUCT_IMAGE_INPUT
  GET_ALL_CUSTOMERS: SHOPIFY_GET_ALL_CUSTOMERS_INPUT
  GET_COLLECTION_BY_ID: SHOPIFY_GET_COLLECTION_BY_ID_INPUT
  GET_COLLECTS: SHOPIFY_GET_COLLECTS_INPUT
  GET_COLLECTS_COUNT: SHOPIFY_GET_COLLECTS_COUNT_INPUT
  GET_CUSTOMER: SHOPIFY_GET_CUSTOMER_INPUT
  GET_CUSTOMER_ORDERS: SHOPIFY_GET_CUSTOMER_ORDERS_INPUT
  GET_CUSTOM_COLLECTIONS: SHOPIFY_GET_CUSTOM_COLLECTIONS_INPUT
  GET_CUSTOM_COLLECTIONS_COUNT: SHOPIFY_GET_CUSTOM_COLLECTIONS_COUNT_INPUT
  GET_ORDERSBY_ID: SHOPIFY_GET_ORDERSBY_ID_INPUT
  GET_ORDER_LIST: SHOPIFY_GET_ORDER_LIST_INPUT
  GET_PRODUCT: SHOPIFY_GET_PRODUCT_INPUT
  GET_PRODUCTS: SHOPIFY_GET_PRODUCTS_INPUT
  GET_PRODUCTS_COUNT: SHOPIFY_GET_PRODUCTS_COUNT_INPUT
  GET_PRODUCTS_IN_COLLECTION: SHOPIFY_GET_PRODUCTS_IN_COLLECTION_INPUT
  GET_PRODUCT_IMAGE: SHOPIFY_GET_PRODUCT_IMAGE_INPUT
  GET_PRODUCT_IMAGES: SHOPIFY_GET_PRODUCT_IMAGES_INPUT
  GET_SHOP_DETAILS: SHOPIFY_GET_SHOP_DETAILS_INPUT
  UPDATE_ORDER: SHOPIFY_UPDATE_ORDER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SHOPIFY".
 */
export type SHOPIFY_TOOL_OUTPUTS = {
  ADD_PRODUCT_TO_COLLECTION: SHOPIFY_ADD_PRODUCT_TO_COLLECTION_OUTPUT
  COUNT_PRODUCT_IMAGES: SHOPIFY_COUNT_PRODUCT_IMAGES_OUTPUT
  CREATE_CUSTOMER: SHOPIFY_CREATE_CUSTOMER_OUTPUT
  CREATE_CUSTOM_COLLECTION: SHOPIFY_CREATE_CUSTOM_COLLECTION_OUTPUT
  CREATE_ORDER: SHOPIFY_CREATE_ORDER_OUTPUT
  CREATE_PRODUCT: SHOPIFY_CREATE_PRODUCT_OUTPUT
  CREATE_PRODUCT_IMAGE: SHOPIFY_CREATE_PRODUCT_IMAGE_OUTPUT
  DELETE_CUSTOM_COLLECTION: SHOPIFY_DELETE_CUSTOM_COLLECTION_OUTPUT
  DELETE_PRODUCT: SHOPIFY_DELETE_PRODUCT_OUTPUT
  DELETE_PRODUCT_IMAGE: SHOPIFY_DELETE_PRODUCT_IMAGE_OUTPUT
  GET_ALL_CUSTOMERS: SHOPIFY_GET_ALL_CUSTOMERS_OUTPUT
  GET_COLLECTION_BY_ID: SHOPIFY_GET_COLLECTION_BY_ID_OUTPUT
  GET_COLLECTS: SHOPIFY_GET_COLLECTS_OUTPUT
  GET_COLLECTS_COUNT: SHOPIFY_GET_COLLECTS_COUNT_OUTPUT
  GET_CUSTOMER: SHOPIFY_GET_CUSTOMER_OUTPUT
  GET_CUSTOMER_ORDERS: SHOPIFY_GET_CUSTOMER_ORDERS_OUTPUT
  GET_CUSTOM_COLLECTIONS: SHOPIFY_GET_CUSTOM_COLLECTIONS_OUTPUT
  GET_CUSTOM_COLLECTIONS_COUNT: SHOPIFY_GET_CUSTOM_COLLECTIONS_COUNT_OUTPUT
  GET_ORDERSBY_ID: SHOPIFY_GET_ORDERSBY_ID_OUTPUT
  GET_ORDER_LIST: SHOPIFY_GET_ORDER_LIST_OUTPUT
  GET_PRODUCT: SHOPIFY_GET_PRODUCT_OUTPUT
  GET_PRODUCTS: SHOPIFY_GET_PRODUCTS_OUTPUT
  GET_PRODUCTS_COUNT: SHOPIFY_GET_PRODUCTS_COUNT_OUTPUT
  GET_PRODUCTS_IN_COLLECTION: SHOPIFY_GET_PRODUCTS_IN_COLLECTION_OUTPUT
  GET_PRODUCT_IMAGE: SHOPIFY_GET_PRODUCT_IMAGE_OUTPUT
  GET_PRODUCT_IMAGES: SHOPIFY_GET_PRODUCT_IMAGES_OUTPUT
  GET_SHOP_DETAILS: SHOPIFY_GET_SHOP_DETAILS_OUTPUT
  UPDATE_ORDER: SHOPIFY_UPDATE_ORDER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SHOPIFY toolkit.
 */
export const SHOPIFY = {
  slug: "shopify",
  tools: {
    /**
     * Adds a product to an existing *custom collection*, optionally specifying its `position` if the collection is manually sorted.
     */
    ADD_PRODUCT_TO_COLLECTION: "SHOPIFY_ADD_PRODUCT_TO_COLLECTION",
    /**
     * Retrieves the total count of images for a shopify product, useful for inventory management or display logic; the provided `product id` must exist in the store.
     */
    COUNT_PRODUCT_IMAGES: "SHOPIFY_COUNT_PRODUCT_IMAGES",
    /**
     * Tool to create a new customer in shopify. use when you need to add a new customer record to the store.
     */
    CREATE_CUSTOMER: "SHOPIFY_CREATE_CUSTOMER",
    /**
     * Creates a new custom collection in a shopify store, requiring a unique title for manually curated product groupings (e.g., 'new arrivals', 'seasonal specials').
     */
    CREATE_CUSTOM_COLLECTION: "SHOPIFY_CREATE_CUSTOM_COLLECTION",
    /**
     * Creates a new order in shopify, typically requiring line items; if `customer id` is provided, it must correspond to an existing customer.
     */
    CREATE_ORDER: "SHOPIFY_CREATE_ORDER",
    /**
     * Creates a new product in a shopify store; a product title is generally required.
     */
    CREATE_PRODUCT: "SHOPIFY_CREATE_PRODUCT",
    /**
     * Tool to create a new product image for a given product. use when you need to add an image to a product by providing the image source url or attachment.
     */
    CREATE_PRODUCT_IMAGE: "SHOPIFY_CREATE_PRODUCT_IMAGE",
    /**
     * Permanently deletes a custom collection from a shopify store using its `collection id`; this action is irreversible and requires a valid, existing `collection id`.
     */
    DELETE_CUSTOM_COLLECTION: "SHOPIFY_DELETE_CUSTOM_COLLECTION",
    /**
     * Deletes a specific, existing product from a shopify store using its unique product id; this action is irreversible.
     */
    DELETE_PRODUCT: "SHOPIFY_DELETE_PRODUCT",
    /**
     * Deletes a specific image from a product in shopify, requiring the `product id` of an existing product and the `image id` of an image currently associated with that product.
     */
    DELETE_PRODUCT_IMAGE: "SHOPIFY_DELETE_PRODUCT_IMAGE",
    /**
     * Retrieves customer records from a shopify store, with options for filtering, selecting specific fields, and paginating through the results.
     */
    GET_ALL_CUSTOMERS: "SHOPIFY_GET_ALL_CUSTOMERS",
    /**
     * Retrieves a specific shopify collection by its `collection id`, optionally filtering returned data to specified `fields`.
     */
    GET_COLLECTION_BY_ID: "SHOPIFY_GET_COLLECTION_BY_ID",
    /**
     * Retrieves a list of collects from a shopify store, where a collect links a product to a custom collection.
     */
    GET_COLLECTS: "SHOPIFY_GET_COLLECTS",
    /**
     * Retrieves the total count of collects (product-to-collection associations) in a shopify store.
     */
    GET_COLLECTS_COUNT: "SHOPIFY_GET_COLLECTS_COUNT",
    /**
     * Retrieves detailed information for a specific customer from a shopify store, provided their valid and existing `customer id`.
     */
    GET_CUSTOMER: "SHOPIFY_GET_CUSTOMER",
    /**
     * Retrieves all orders for a specific, existing customer in shopify using their unique customer id.
     */
    GET_CUSTOMER_ORDERS: "SHOPIFY_GET_CUSTOMER_ORDERS",
    /**
     * Retrieves a list of custom collections from a shopify store, optionally filtered by ids, product id, or handle.
     */
    GET_CUSTOM_COLLECTIONS: "SHOPIFY_GET_CUSTOM_COLLECTIONS",
    /**
     * Retrieves the total number of custom collections in a shopify store.
     */
    GET_CUSTOM_COLLECTIONS_COUNT: "SHOPIFY_GET_CUSTOM_COLLECTIONS_COUNT",
    /**
     * Retrieves a specific shopify order by its unique id, which must correspond to an existing order.
     */
    GET_ORDERSBY_ID: "SHOPIFY_GET_ORDERSBY_ID",
    /**
     * Retrieves a list of orders from shopify using default api settings and filters.
     */
    GET_ORDER_LIST: "SHOPIFY_GET_ORDER_LIST",
    /**
     * Retrieves details for an existing shopify product using its unique product id.
     */
    GET_PRODUCT: "SHOPIFY_GET_PRODUCT",
    /**
     * Retrieves a list of products from a shopify store.
     */
    GET_PRODUCTS: "SHOPIFY_GET_PRODUCTS",
    /**
     * Retrieves the total, unfiltered count of all products in a shopify store.
     */
    GET_PRODUCTS_COUNT: "SHOPIFY_GET_PRODUCTS_COUNT",
    /**
     * Retrieves all products within a specified shopify collection, requiring a valid `collection id`.
     */
    GET_PRODUCTS_IN_COLLECTION: "SHOPIFY_GET_PRODUCTS_IN_COLLECTION",
    /**
     * Retrieves detailed information for a specific product image, identified by its id and its associated product id, from a shopify store.
     */
    GET_PRODUCT_IMAGE: "SHOPIFY_GET_PRODUCT_IMAGE",
    /**
     * Retrieves all images for a shopify product, specified by its `product id` which must correspond to an existing product.
     */
    GET_PRODUCT_IMAGES: "SHOPIFY_GET_PRODUCT_IMAGES",
    /**
     * Retrieves comprehensive administrative information about the authenticated shopify store, as defined by the shopify api.
     */
    GET_SHOP_DETAILS: "SHOPIFY_GET_SHOP_DETAILS",
    /**
     * Updates the phone number for an existing shopify order, identified by its id; pass `phone=none` to remove the current phone number.
     */
    UPDATE_ORDER: "SHOPIFY_UPDATE_ORDER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SHOPIFY".
 */
export type SHOPIFY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SHOPIFY".
 */
export type SHOPIFY_TRIGGER_EVENTS = {}
