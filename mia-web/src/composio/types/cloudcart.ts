// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLOUDCART's CLOUDCART_ADD_TO_CART tool input.
 */
type CLOUDCART_ADD_TO_CART_INPUT = {
  /**
   * Product Id
   * @description The unique identifier of the product to be added to the cart.
   */
  product_id?: number;
  /**
   * Quantity
   * @description The number of units of the product to add, must be at least 1.
   */
  quantity?: number;
};

/**
 * Type of CLOUDCART's CLOUDCART_ADD_TO_CART tool output.
 */
type CLOUDCART_ADD_TO_CART_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cart Id
       * @description The unique identifier of the cart.
       */
      cart_id: string;
      /**
       * Items
       * @description A list of items currently in the cart.
       */
      items: {
          /**
           * Price
           * @description The price per unit of the product.
           */
          price: number;
          /**
           * Product Id
           * @description The unique identifier of the product in the cart.
           */
          product_id: number;
          /**
           * Quantity
           * @description The quantity of the product in the cart.
           */
          quantity: number;
      }[];
      /**
       * Total Price
       * @description The total price of all items in the cart.
       */
      total_price: number;
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
 * Type of CLOUDCART's CLOUDCART_CLEAR_CART tool input.
 */
type CLOUDCART_CLEAR_CART_INPUT = {
  /**
   * Cart Id
   * @description The unique identifier of the cart to clear.
   */
  cart_id?: string;
};

/**
 * Type of CLOUDCART's CLOUDCART_CLEAR_CART tool output.
 */
type CLOUDCART_CLEAR_CART_OUTPUT = {
  /**
   * ClearCartData
   * @description Contains the cart details after clearing.
   * @default null
   */
  data: {
      /**
       * Cart Id
       * @description The unique identifier of the cart.
       */
      cart_id: string;
      /**
       * Items
       * @description List of items currently in the cart.
       */
      items: {
          /**
           * Price
           * @description The price per unit of the product.
           */
          price: number;
          /**
           * Product Id
           * @description The unique identifier of the product in the cart.
           */
          product_id: number;
          /**
           * Quantity
           * @description The quantity of the product in the cart.
           */
          quantity: number;
      }[];
      /**
       * Total Price
       * @description Total price of all items in the cart.
       */
      total_price: number;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional information about the result.
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates if the cart was cleared successfully.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLOUDCART's CLOUDCART_CREATE_CATEGORY tool input.
 */
type CLOUDCART_CREATE_CATEGORY_INPUT = {
  /**
   * Description
   * @description Detailed description of the category
   * @default null
   */
  description: string | null;
  /**
   * Image
   * @description Absolute URL to a category image
   * @default null
   */
  image: string | null;
  /**
   * Meta Description
   * @description SEO meta description
   * @default null
   */
  meta_description: string | null;
  /**
   * Meta Keywords
   * @description Comma-separated SEO keywords
   * @default null
   */
  meta_keywords: string | null;
  /**
   * Meta Title
   * @description SEO meta title
   * @default null
   */
  meta_title: string | null;
  /**
   * Parent Id
   * @description ID of the parent category to nest under; omit for top-level
   * @default null
   */
  parent_id: number | null;
  /**
   * Position
   * @description Sorting position of the category (0 = first)
   * @default null
   */
  position: number | null;
  /**
   * Title
   * @description Title of the category
   */
  title?: string;
};

/**
 * Type of CLOUDCART's CLOUDCART_CREATE_CATEGORY tool output.
 */
type CLOUDCART_CREATE_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Category description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique ID of the created category
       */
      id: number;
      /**
       * Image
       * @description URL of the category image
       * @default null
       */
      image: string | null;
      /**
       * Meta Description
       * @description SEO meta description
       * @default null
       */
      meta_description: string | null;
      /**
       * Meta Keywords
       * @description SEO meta keywords
       * @default null
       */
      meta_keywords: string | null;
      /**
       * Meta Title
       * @description SEO meta title
       * @default null
       */
      meta_title: string | null;
      /**
       * Parent Id
       * @description Parent category ID if nested
       * @default null
       */
      parent_id: number | null;
      /**
       * Position
       * @description Sorting position of the category
       * @default null
       */
      position: number | null;
      /**
       * Title
       * @description Title of the category
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
 * Type of CLOUDCART's CLOUDCART_CREATE_CUSTOMER tool input.
 */
type CLOUDCART_CREATE_CUSTOMER_INPUT = {
  /**
   * Address
   * @description Physical address of the customer. Optional.
   * @default null
   */
  address: string | null;
  /**
   * Email
   * Format: email
   * @description Customer's email address.
   */
  email?: string;
  /**
   * Name
   * @description Full name of the customer.
   */
  name?: string;
  /**
   * Password
   * @description Password for the customer's account. Must be at least 8 characters.
   */
  password?: string;
  /**
   * Phone
   * @description Phone number of the customer. Optional.
   * @default null
   */
  phone: string | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_CREATE_CUSTOMER tool output.
 */
type CLOUDCART_CREATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Physical address of the customer.
       * @default null
       */
      address: string | null;
      /**
       * Created At
       * @description Timestamp when the customer was created.
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description Customer's email address.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for the newly created customer.
       */
      id: number;
      /**
       * Name
       * @description Full name of the customer.
       */
      name: string;
      /**
       * Phone
       * @description Phone number of the customer.
       * @default null
       */
      phone: string | null;
      /**
       * Updated At
       * @description Timestamp when the customer was last updated.
       */
      updated_at: string;
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
 * Type of CLOUDCART's CLOUDCART_CREATE_ORDER tool input.
 */
type CLOUDCART_CREATE_ORDER_INPUT = {
  /**
   * Address
   * @description Billing address; if omitted, same as shipping_address
   * @default null
   */
  billing_address: {
      /**
       * City
       * @description City
       */
      city: string;
      /**
       * Country
       * @description ISO 3166-1 alpha-2 country code
       */
      country: unknown;
      /**
       * First Name
       * @description Recipient first name
       */
      first_name: string;
      /**
       * Last Name
       * @description Recipient last name
       */
      last_name: string;
      /**
       * Phone
       * @description Contact phone number
       * @default null
       */
      phone: string | null;
      /**
       * Postal Code
       * @description Postal or ZIP code
       */
      postal_code: string;
      /**
       * Street
       * @description Street address
       */
      street: string;
  } | null;
  /**
   * Currency
   * @description ISO 4217 currency code
   * @default null
   */
  currency: unknown;
  /**
   * Customer Id
   * @description ID of the customer placing the order
   */
  customer_id?: number;
  /**
   * Items
   * @description List of line items for the order
   */
  items?: {
      /**
       * Product Id
       * @description Unique identifier of the product
       */
      product_id: number;
      /**
       * Quantity
       * @description Quantity of this product in the order
       */
      quantity: number;
  }[];
  /**
   * Payment Method
   * @description Payment method code; if omitted, default store method applies
   * @default null
   * @enum {string|null}
   */
  payment_method: "credit_card" | "paypal" | "bank_transfer" | null;
  /**
   * Address
   * @description Shipping address; if omitted, uses customer's default address
   * @default null
   */
  shipping_address: {
      /**
       * City
       * @description City
       */
      city: string;
      /**
       * Country
       * @description ISO 3166-1 alpha-2 country code
       */
      country: unknown;
      /**
       * First Name
       * @description Recipient first name
       */
      first_name: string;
      /**
       * Last Name
       * @description Recipient last name
       */
      last_name: string;
      /**
       * Phone
       * @description Contact phone number
       * @default null
       */
      phone: string | null;
      /**
       * Postal Code
       * @description Postal or ZIP code
       */
      postal_code: string;
      /**
       * Street
       * @description Street address
       */
      street: string;
  } | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_CREATE_ORDER tool output.
 */
type CLOUDCART_CREATE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Created order resource object
   */
  data?: {
      /**
       * Attributes
       * @description Order attributes
       */
      attributes: {
          /**
           * Created At
           * @description ISO8601 timestamp when order was created
           */
          created_at: string;
          /**
           * Currency
           * @description Currency code for the total amount
           */
          currency: string;
          /**
           * Status
           * @description Current order status, e.g., 'pending'
           */
          status: string;
          /**
           * Total
           * @description Order total amount
           */
          total: number;
      };
      /**
       * Id
       * @description Unique identifier of the created order
       */
      id: string;
      /**
       * Type
       * @description Resource type, should be 'orders'
       */
      type: string;
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
 * Type of CLOUDCART's CLOUDCART_CREATE_PRODUCT tool input.
 */
type CLOUDCART_CREATE_PRODUCT_INPUT = {
  /**
   * Barcode
   * @description Barcode (e.g., UPC/EAN).
   * @default null
   */
  barcode: string | null;
  /**
   * Categories
   * @description List of category IDs to associate.
   * @default null
   */
  categories: number[] | null;
  /**
   * Description
   * @description Description of the product (HTML allowed).
   * @default null
   */
  description: string | null;
  /**
   * Images
   * @description List of image URLs.
   * @default null
   */
  images: string[] | null;
  /**
   * Name
   * @description Name of the product.
   */
  name?: string;
  /**
   * Price
   * @description Price of the product; must be non-negative.
   */
  price?: number;
  /**
   * Quantity
   * @description Available quantity; must be non-negative.
   * @default null
   */
  quantity: number | null;
  /**
   * Sku
   * @description Stock keeping unit identifier.
   * @default null
   */
  sku: string | null;
  /**
   * Status
   * @description Status of the product (e.g., active, draft).
   * @default null
   */
  status: string | null;
  /**
   * Tags
   * @description List of tags.
   * @default null
   */
  tags: string[] | null;
  /**
   * Vendor
   * @description ID of the vendor to associate.
   * @default null
   */
  vendor: string | null;
  /**
   * Weight
   * @description Weight in kilograms; must be non-negative.
   * @default null
   */
  weight: number | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_CREATE_PRODUCT tool output.
 */
type CLOUDCART_CREATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Barcode
       * @description Barcode of the product.
       * @default null
       */
      barcode: string | null;
      /**
       * Category Ids
       * @description List of associated category IDs.
       * @default null
       */
      category_ids: string[] | null;
      /**
       * Created At
       * @description ISO-8601 creation timestamp.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the product.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the created product.
       */
      id: string;
      /**
       * Images
       * @description Image URLs of the product.
       * @default null
       */
      images: string[] | null;
      /**
       * Name
       * @description Name of the product.
       */
      name: string;
      /**
       * Price
       * @description Price of the product.
       */
      price: number;
      /**
       * Quantity
       * @description Available quantity.
       * @default null
       */
      quantity: number | null;
      /**
       * Sku
       * @description Stock keeping unit identifier.
       * @default null
       */
      sku: string | null;
      /**
       * Status
       * @description Status of the product.
       * @default null
       */
      status: string | null;
      /**
       * Tags
       * @description Tags assigned to the product.
       * @default null
       */
      tags: string[] | null;
      /**
       * Updated At
       * @description ISO-8601 last update timestamp.
       */
      updated_at: string;
      /**
       * Vendor Id
       * @description Associated vendor ID.
       * @default null
       */
      vendor_id: string | null;
      /**
       * Weight
       * @description Weight of the product.
       * @default null
       */
      weight: number | null;
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
 * Type of CLOUDCART's CLOUDCART_CREATE_VARIANT tool input.
 */
type CLOUDCART_CREATE_VARIANT_INPUT = {
  /**
   * Option Values
   * @description List of option values objects, each with product_option_id and value_id
   * @default null
   */
  option_values: {
      [key: string]: string;
  }[] | null;
  /**
   * Price
   * @description Price of the variant
   */
  price?: number;
  /**
   * Product Id
   * @description ID of the product to which the variant belongs
   */
  productId?: string;
  /**
   * Quantity
   * @description Stock quantity for the variant
   * @default null
   */
  quantity: number | null;
  /**
   * Sku
   * @description SKU of the new variant
   */
  sku?: string;
  /**
   * Weight
   * @description Weight of the variant
   * @default null
   */
  weight: number | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_CREATE_VARIANT tool output.
 */
type CLOUDCART_CREATE_VARIANT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp
       */
      created_at: string;
      /**
       * Id
       * @description ID of the newly created variant
       */
      id: string;
      /**
       * Option Values
       * @description Option values assigned to the variant
       * @default null
       */
      option_values: {
          [key: string]: string;
      }[] | null;
      /**
       * Price
       * @description Price of the variant
       */
      price: number;
      /**
       * Product Id
       * @description ID of the product
       */
      product_id: string;
      /**
       * Quantity
       * @description Stock quantity of the variant
       * @default null
       */
      quantity: number | null;
      /**
       * Sku
       * @description SKU of the variant
       */
      sku: string;
      /**
       * Updated At
       * @description Last updated timestamp
       */
      updated_at: string;
      /**
       * Weight
       * @description Weight of the variant
       * @default null
       */
      weight: number | null;
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
 * Type of CLOUDCART's CLOUDCART_CREATE_VARIANT_OPTION tool input.
 */
type CLOUDCART_CREATE_VARIANT_OPTION_INPUT = {
  /**
   * Is Default
   * @description Whether this is the default option
   * @default null
   */
  is_default: boolean | null;
  /**
   * Name
   * @description Name of the variant option
   */
  name?: string;
  /**
   * Position
   * @description The order of the option among siblings
   * @default null
   */
  position: number | null;
  /**
   * Price
   * @description Price difference for this option
   * @default null
   */
  price: number | null;
  /**
   * Product Id
   * @description ID of the product to which the variant belongs
   */
  product_id?: number;
  /**
   * Variant Id
   * @description ID of the variant for which to create an option
   */
  variant_id?: number;
};

/**
 * Type of CLOUDCART's CLOUDCART_CREATE_VARIANT_OPTION tool output.
 */
type CLOUDCART_CREATE_VARIANT_OPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the option was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the variant option
       */
      id: number;
      /**
       * Is Default
       * @description Whether this is the default option
       */
      is_default: boolean;
      /**
       * Name
       * @description Name of the variant option
       */
      name: string;
      /**
       * Position
       * @description Position of the option in the list
       */
      position: number;
      /**
       * Price
       * @description Price difference for this option
       */
      price: number;
      /**
       * Updated At
       * @description Timestamp when the option was last updated
       */
      updated_at: string;
      /**
       * Variant Id
       * @description ID of the associated variant
       */
      variant_id: number;
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
 * Type of CLOUDCART's CLOUDCART_CREATE_VARIANT_PARAMETER tool input.
 */
type CLOUDCART_CREATE_VARIANT_PARAMETER_INPUT = {
  /**
   * Name
   * @description Name of the parameter (e.g., 'color', 'size').
   */
  name?: string;
  /**
   * Product Id
   * @description The ID of the product.
   */
  productId?: string;
  /**
   * Type
   * @description Type of the parameter. One of 'text', 'number', 'boolean', or 'date'.
   * @default null
   * @enum {string|null}
   */
  type: "text" | "number" | "boolean" | "date" | null;
  /**
   * Value
   * @description Value of the parameter (e.g., 'red', 'XL').
   */
  value?: string;
  /**
   * Variant Id
   * @description The ID of the product variant.
   */
  variantId?: string;
};

/**
 * Type of CLOUDCART's CLOUDCART_CREATE_VARIANT_PARAMETER tool output.
 */
type CLOUDCART_CREATE_VARIANT_PARAMETER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO8601 format.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the variant parameter.
       */
      id: string;
      /**
       * Name
       * @description Name of the variant parameter.
       */
      name: string;
      /**
       * Type
       * @description Type of the variant parameter.
       */
      type: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO8601 format.
       */
      updatedAt: string;
      /**
       * Value
       * @description Value of the variant parameter.
       */
      value: string;
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
 * Type of CLOUDCART's CLOUDCART_CREATE_VENDOR tool input.
 */
type CLOUDCART_CREATE_VENDOR_INPUT = {
  /**
   * Data
   * @description Data wrapper for create vendor request
   */
  data?: {
      /**
       * Attributes
       * @description Attributes for creating a new vendor
       */
      attributes: {
          /**
           * Image Url
           * Format: uri
           * @description URL of the vendor's image
           */
          image_url: unknown;
          /**
           * Name
           * @description Name of the vendor
           */
          name: string;
      };
      /**
       * Type
       * @description Resource type
       * @default vendors
       * @constant
       */
      type: "vendors";
  };
};

/**
 * Type of CLOUDCART's CLOUDCART_CREATE_VENDOR tool output.
 */
type CLOUDCART_CREATE_VENDOR_OUTPUT = {
  /**
   * Data
   * @description Data wrapper for create vendor response
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a vendor
       */
      attributes: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the vendor was created
           * @default null
           */
          created_at: string | null;
          /**
           * Image Url
           * @description URL of the vendor's image
           * @default null
           */
          image_url: string | null;
          /**
           * Name
           * @description Name of the vendor
           * @default null
           */
          name: string | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the vendor was last updated
           * @default null
           */
          updated_at: string | null;
      };
      /**
       * Id
       * @description Unique identifier of the created vendor
       */
      id: string;
      /**
       * Type
       * @description Resource type
       * @constant
       */
      type: "vendors";
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
 * Type of CLOUDCART's CLOUDCART_DELETE_CATEGORY tool input.
 */
type CLOUDCART_DELETE_CATEGORY_INPUT = {
  /**
   * Id
   * @description Unique identifier of the category to delete.
   */
  id?: string;
};

/**
 * Type of CLOUDCART's CLOUDCART_DELETE_CATEGORY tool output.
 */
type CLOUDCART_DELETE_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the deletion failed
       * @default null
       */
      error: string | null;
      /**
       * Message
       * @description Details about the deletion operation
       */
      message: string;
      /**
       * Success
       * @description Whether the category was successfully deleted
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
 * Type of CLOUDCART's CLOUDCART_DELETE_CUSTOMER tool input.
 */
type CLOUDCART_DELETE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description ID of the customer to delete
   */
  customer_id?: number;
};

/**
 * Type of CLOUDCART's CLOUDCART_DELETE_CUSTOMER tool output.
 */
type CLOUDCART_DELETE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of CLOUDCART's CLOUDCART_DELETE_ORDER tool input.
 */
type CLOUDCART_DELETE_ORDER_INPUT = {
  /**
   * Order Id
   * @description The unique identifier of the order to be deleted
   */
  order_id?: string;
};

/**
 * Type of CLOUDCART's CLOUDCART_DELETE_ORDER tool output.
 */
type CLOUDCART_DELETE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the order was deleted successfully
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
 * Type of CLOUDCART's CLOUDCART_DELETE_PRODUCT tool input.
 */
type CLOUDCART_DELETE_PRODUCT_INPUT = {
  /**
   * Product Id
   * @description The unique identifier of the product to delete.
   */
  product_id?: string;
};

/**
 * Type of CLOUDCART's CLOUDCART_DELETE_PRODUCT tool output.
 */
type CLOUDCART_DELETE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating successful deletion.
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
 * Type of CLOUDCART's CLOUDCART_DELETE_VENDOR tool input.
 */
type CLOUDCART_DELETE_VENDOR_INPUT = {
  /**
   * Vendor Id
   * @description Unique identifier of the vendor to delete.
   */
  vendor_id?: string;
};

/**
 * Type of CLOUDCART's CLOUDCART_DELETE_VENDOR tool output.
 */
type CLOUDCART_DELETE_VENDOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the deleted vendor
       */
      id: number;
      /**
       * Name
       * @description Name of the deleted vendor
       */
      name: string;
      /**
       * Slug
       * @description Slug of the deleted vendor
       */
      slug: string;
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
 * Type of CLOUDCART's CLOUDCART_GET_CART tool input.
 */
type CLOUDCART_GET_CART_INPUT = {
  /**
   * Cart Id
   * @description The unique identifier of the cart. If not provided, retrieves the current session cart.
   * @default null
   */
  cart_id: string | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_GET_CART tool output.
 */
type CLOUDCART_GET_CART_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cart Id
       * @description The unique identifier of the cart.
       */
      cart_id: string;
      /**
       * Items
       * @description List of items currently in the cart.
       */
      items: {
          /**
           * Price
           * @description The price per unit of the product.
           */
          price: number;
          /**
           * Product Id
           * @description The unique identifier of the product in the cart.
           */
          product_id: number;
          /**
           * Quantity
           * @description The quantity of the product in the cart.
           */
          quantity: number;
      }[];
      /**
       * Total Price
       * @description Total price of all items in the cart.
       */
      total_price: number;
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
 * Type of CLOUDCART's CLOUDCART_GET_CATEGORIES tool input.
 */
type CLOUDCART_GET_CATEGORIES_INPUT = object;

/**
 * Type of CLOUDCART's CLOUDCART_GET_CATEGORIES tool output.
 */
type CLOUDCART_GET_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of categories returned by the API
       */
      categories: {
          /**
           * Description
           * @description Description of the category
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the category
           */
          id: number;
          /**
           * Meta Description
           * @description Meta description for SEO purposes
           * @default null
           */
          meta_description: string | null;
          /**
           * Meta Keywords
           * @description Meta keywords for SEO purposes
           * @default null
           */
          meta_keywords: string | null;
          /**
           * Meta Title
           * @description Meta title for SEO purposes
           * @default null
           */
          meta_title: string | null;
          /**
           * Name
           * @description Name of the category
           */
          name: string;
          /**
           * Parent Id
           * @description ID of the parent category if applicable
           * @default null
           */
          parent_id: number | null;
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
 * Type of CLOUDCART's CLOUDCART_GET_CUSTOMERS tool input.
 */
type CLOUDCART_GET_CUSTOMERS_INPUT = {
  /**
   * Filter[Email]
   * Format: email
   * @description Filter customers by email address
   * @default null
   */
  "filter[email]": string | null;
  /**
   * Filter[Name]
   * @description Filter customers by full name
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Page[Number]
   * @description Page number for pagination, starting from 1
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of items per page for pagination
   * @default null
   */
  "page[size]": number | null;
  /**
   * Sort
   * @description Sort order, prefix field with '-' for descending
   * @default null
   */
  sort: string | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_GET_CUSTOMERS tool output.
 */
type CLOUDCART_GET_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description List of customer resources
   */
  data?: {
      /**
       * Attributes
       * @description Customer resource attributes
       */
      attributes: {
          /**
           * Address
           * @description Physical address of the customer
           * @default null
           */
          address: string | null;
          /**
           * Created At
           * @description Timestamp when the customer was created
           */
          created_at: string;
          /**
           * Email
           * Format: email
           * @description Customer's email address
           */
          email: string;
          /**
           * Name
           * @description Full name of the customer
           */
          name: string;
          /**
           * Phone
           * @description Phone number of the customer
           * @default null
           */
          phone: string | null;
          /**
           * Updated At
           * @description Timestamp when the customer was last updated
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique identifier for the customer
       */
      id: number;
      /**
       * Type
       * @description Resource type, should be 'customers'
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
   * Links
   * @description Pagination links
   * @default null
   */
  links: {
      /**
       * First
       * @description Link to first page
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description Link to last page
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description Link to next page
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description Link to previous page
       * @default null
       */
      previous: string | null;
      /**
       * Self
       * @description Link to current page
       * @default null
       */
      self: string | null;
  } | null;
  /**
   * Meta
   * @description Metadata including pagination info
   */
  meta?: {
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Count
           * @description Number of customers in the current page
           */
          count: number;
          /**
           * Current Page
           * @description Current page number
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of customers per page
           */
          per_page: number;
          /**
           * Total
           * @description Total number of customers
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLOUDCART's CLOUDCART_GET_ORDERS tool input.
 */
type CLOUDCART_GET_ORDERS_INPUT = object;

/**
 * Type of CLOUDCART's CLOUDCART_GET_ORDERS tool output.
 */
type CLOUDCART_GET_ORDERS_OUTPUT = {
  /**
   * Data
   * @description List of order resource objects
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the order
       */
      attributes: {
          /**
           * Created At
           * @description ISO8601 timestamp when the order was created
           */
          created_at: string;
          /**
           * Currency
           * @description Currency code for the order total, e.g., 'USD'
           */
          currency: string;
          /**
           * Status
           * @description Current status of the order, e.g., 'pending'
           */
          status: string;
          /**
           * Total
           * @description Total amount for the order
           */
          total: number;
          /**
           * Updated At
           * @description ISO8601 timestamp when the order was last updated
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique identifier of the order
       */
      id: string;
      /**
       * Type
       * @description Resource type, should be 'orders'
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLOUDCART's CLOUDCART_GET_PAYMENT_METHODS tool input.
 */
type CLOUDCART_GET_PAYMENT_METHODS_INPUT = object;

/**
 * Type of CLOUDCART's CLOUDCART_GET_PAYMENT_METHODS tool output.
 */
type CLOUDCART_GET_PAYMENT_METHODS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Payment Methods
       * @description List of available payment methods
       */
      payment_methods: {
          /**
           * Description
           * @description Description of the payment method
           * @default null
           */
          description: string | null;
          /**
           * Enabled
           * @description Whether the payment method is enabled
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique identifier of the payment method
           */
          id: number;
          /**
           * Name
           * @description Name of the payment method
           */
          name: string;
          /**
           * Settings
           * @description Provider-specific configuration settings
           */
          settings: {
              [key: string]: unknown;
          };
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
 * Type of CLOUDCART's CLOUDCART_GET_PRODUCTS tool input.
 */
type CLOUDCART_GET_PRODUCTS_INPUT = {
  /**
   * Brand Id
   * @description Filter products by brand ID.
   * @default null
   */
  brand_id: number | null;
  /**
   * Category Id
   * @description Filter products by category ID.
   * @default null
   */
  category_id: number | null;
  /**
   * Limit
   * @description Number of products to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Max Price
   * @description Maximum price filter (inclusive).
   * @default null
   */
  max_price: number | null;
  /**
   * Min Price
   * @description Minimum price filter (inclusive).
   * @default null
   */
  min_price: number | null;
  /**
   * Page
   * @description Page number of results to fetch (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Text to search for in product names and descriptions.
   * @default null
   */
  search: string | null;
  /**
   * With Hidden
   * @description Include hidden products when true.
   * @default null
   */
  with_hidden: boolean | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_GET_PRODUCTS tool output.
 */
type CLOUDCART_GET_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination metadata.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of products per page.
           */
          per_page: number;
          /**
           * Total Items
           * @description Total number of products.
           */
          total_items: number;
          /**
           * Total Pages
           * @description Total available pages.
           */
          total_pages: number;
      };
      /**
       * Products
       * @description List of products returned.
       */
      products: {
          /**
           * Id
           * @description Unique product ID.
           */
          id: number;
          /**
           * Name
           * @description Name of the product.
           */
          name: string;
          /**
           * Price
           * @description Price of the product.
           */
          price: number;
          /**
           * Sku
           * @description Stock keeping unit identifier.
           */
          sku: string;
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
 * Type of CLOUDCART's CLOUDCART_GET_PRODUCT_WITH_RELATIONS tool input.
 */
type CLOUDCART_GET_PRODUCT_WITH_RELATIONS_INPUT = {
  /**
   * Product Id
   * @description Unique identifier of the product to retrieve.
   */
  product_id?: string;
};

/**
 * Type of CLOUDCART's CLOUDCART_GET_PRODUCT_WITH_RELATIONS tool output.
 */
type CLOUDCART_GET_PRODUCT_WITH_RELATIONS_OUTPUT = {
  /**
   * Data
   * @description Product resource object including related entities.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the product.
       */
      attributes: {
          /**
           * Availability
           * @description Availability status of the product.
           */
          availability: string;
          /**
           * Created At
           * @description ISO-8601 creation timestamp of the product.
           */
          created_at: string;
          /**
           * Currency
           * @description Currency code for the product price.
           */
          currency: string;
          /**
           * Description
           * @description Description of the product.
           */
          description: string;
          /**
           * Name
           * @description Name of the product.
           */
          name: string;
          /**
           * Price
           * @description Price of the product.
           */
          price: number;
          /**
           * Updated At
           * @description ISO-8601 last update timestamp of the product.
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique identifier of the product.
       */
      id: string;
      /**
       * Relationships
       * @description Related entities for the product.
       */
      relationships: {
          /**
           * Category
           * @description Category relationship object.
           */
          category: {
              /**
               * Data
               * @description Relationship data for category.
               */
              data: {
                  /**
                   * Id
                   * @description Unique identifier of the category.
                   */
                  id: string;
                  /**
                   * Type
                   * @description Resource type, should be 'categories'.
                   */
                  type: string;
              };
          };
          /**
           * Variant Parameters
           * @description List of variant parameter relationships.
           */
          variant_parameters: {
              /**
               * Id
               * @description Unique identifier of the variant parameter.
               */
              id: string;
              /**
               * Type
               * @description Resource type, should be 'variant-parameters'.
               */
              type: string;
          }[];
          /**
           * Vendor
           * @description Vendor relationship object.
           */
          vendor: {
              /**
               * Data
               * @description Relationship data for vendor.
               */
              data: {
                  /**
                   * Id
                   * @description Unique identifier of the vendor.
                   */
                  id: string;
                  /**
                   * Type
                   * @description Resource type, should be 'vendors'.
                   */
                  type: string;
              };
          };
      };
      /**
       * Type
       * @description Resource type, should be 'products'.
       */
      type: string;
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
 * Type of CLOUDCART's CLOUDCART_GET_PROPERTY_OPTIONS_RELATIONSHIP tool input.
 */
type CLOUDCART_GET_PROPERTY_OPTIONS_RELATIONSHIP_INPUT = {
  /**
   * Product Id
   * @description ID of the product whose property options relationships to retrieve
   */
  product_id?: number;
};

/**
 * Type of CLOUDCART's CLOUDCART_GET_PROPERTY_OPTIONS_RELATIONSHIP tool output.
 */
type CLOUDCART_GET_PROPERTY_OPTIONS_RELATIONSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Relationships
       * @description List of property option relationships for the product
       */
      relationships: {
          /**
           * Created At
           * @description Timestamp when the relationship was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the relationship
           */
          id: number;
          /**
           * Product Id
           * @description ID of the product
           */
          product_id: number;
          /**
           * Property Id
           * @description ID of the property
           */
          property_id: number;
          /**
           * Property Option Id
           * @description ID of the related property option
           */
          property_option_id: number;
          /**
           * Updated At
           * @description Timestamp when the relationship was last updated
           */
          updated_at: string;
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
 * Type of CLOUDCART's CLOUDCART_GET_SHIPPING_METHODS tool input.
 */
type CLOUDCART_GET_SHIPPING_METHODS_INPUT = object;

/**
 * Type of CLOUDCART's CLOUDCART_GET_SHIPPING_METHODS tool output.
 */
type CLOUDCART_GET_SHIPPING_METHODS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Shipping Methods
       * @description List of available shipping methods
       */
      shipping_methods: {
          /**
           * Countries
           * @description List of country codes where this method is available
           */
          countries: string[];
          /**
           * Currency
           * @description Currency code for the price (e.g., 'USD')
           */
          currency: string;
          /**
           * Delivery Time
           * @description Estimated delivery time for this method
           */
          delivery_time: string;
          /**
           * Description
           * @description Description of the shipping method
           */
          description: string;
          /**
           * Enabled
           * @description Whether this shipping method is currently enabled
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique identifier for the shipping method
           */
          id: number;
          /**
           * Name
           * @description Name of the shipping method
           */
          name: string;
          /**
           * Price
           * @description Cost of the shipping method
           */
          price: number;
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
 * Type of CLOUDCART's CLOUDCART_GET_VENDOR tool input.
 */
type CLOUDCART_GET_VENDOR_INPUT = {
  /**
   * Vendor Id
   * @description Unique identifier of the vendor to retrieve
   */
  vendor_id?: string;
};

/**
 * Type of CLOUDCART's CLOUDCART_GET_VENDOR tool output.
 */
type CLOUDCART_GET_VENDOR_OUTPUT = {
  /**
   * Data
   * @description Envelope object for a vendor resource.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a vendor.
       */
      attributes: {
          /**
           * Image Url
           * @description URL of the vendor's image
           * @default null
           */
          image_url: string | null;
          /**
           * Name
           * @description Name of the vendor
           */
          name: string;
      };
      /**
       * Id
       * @description Unique identifier of the vendor
       */
      id: string;
      /**
       * Type
       * @description Resource type, e.g., 'vendors'
       */
      type: string;
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
 * Type of CLOUDCART's CLOUDCART_LIST_ORDER_PAYMENT tool input.
 */
type CLOUDCART_LIST_ORDER_PAYMENT_INPUT = {
  /**
   * Limit
   * @description Maximum number of results per page.
   * @default null
   */
  limit: number | null;
  /**
   * Order Id
   * @description Filter payments by a specific order's ID.
   * @default null
   */
  order_id: number | null;
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Status
   * @description Filter payments by status, e.g., 'paid', 'pending', 'failed'.
   * @default null
   */
  status: string | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_LIST_ORDER_PAYMENT tool output.
 */
type CLOUDCART_LIST_ORDER_PAYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Payments
       * @description List of payment records.
       */
      payments: {
          /**
           * Amount
           * @description Amount paid.
           */
          amount: number;
          /**
           * Created At
           * @description Timestamp when payment was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID of the payment record.
           */
          id: number;
          /**
           * Method
           * @description Payment method used.
           */
          method: string;
          /**
           * Order Id
           * @description Associated order's ID.
           */
          order_id: number;
          /**
           * Status
           * @description Payment status.
           */
          status: string;
          /**
           * Updated At
           * @description Timestamp when payment was last updated.
           */
          updated_at: string;
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
 * Type of CLOUDCART's CLOUDCART_LIST_VENDORS tool input.
 */
type CLOUDCART_LIST_VENDORS_INPUT = {
  /**
   * Limit
   * @description Number of records per page.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Filter vendors by name or other searchable fields.
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Filter vendors by status.
   * @default null
   */
  status: string | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_LIST_VENDORS tool output.
 */
type CLOUDCART_LIST_VENDORS_OUTPUT = {
  /**
   * Data
   * @description List of vendor objects.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the vendor was created.
       */
      created_at: string;
      /**
       * Email
       * @description Vendor contact email.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the vendor.
       */
      id: number;
      /**
       * Name
       * @description Name of the vendor.
       */
      name: string;
      /**
       * Phone
       * @description Vendor phone number.
       * @default null
       */
      phone: string | null;
      /**
       * Status
       * @description Current status of the vendor.
       */
      status: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the vendor was last updated.
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Limit
   * @description Number of records per page.
   */
  limit?: number;
  /**
   * Page
   * @description Current page number.
   */
  page?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of vendor records.
   */
  total?: number;
};

/**
 * Type of CLOUDCART's CLOUDCART_REMOVE_FROM_CART tool input.
 */
type CLOUDCART_REMOVE_FROM_CART_INPUT = {
  /**
   * Product Id
   * @description The unique identifier of the product to be removed from the cart.
   */
  product_id?: number;
};

/**
 * Type of CLOUDCART's CLOUDCART_REMOVE_FROM_CART tool output.
 */
type CLOUDCART_REMOVE_FROM_CART_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating the product has been removed from the cart.
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
 * Type of CLOUDCART's CLOUDCART_UPDATE_CART_ITEM tool input.
 */
type CLOUDCART_UPDATE_CART_ITEM_INPUT = {
  /**
   * Product Id
   * @description The unique identifier of the product to update in the cart.
   */
  product_id?: number;
  /**
   * Quantity
   * @description The new quantity for the product in the cart; must be at least 1.
   */
  quantity?: number;
};

/**
 * Type of CLOUDCART's CLOUDCART_UPDATE_CART_ITEM tool output.
 */
type CLOUDCART_UPDATE_CART_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cart Id
       * @description The unique identifier of the cart.
       */
      cart_id: string;
      /**
       * Items
       * @description A list of items currently in the cart.
       */
      items: {
          /**
           * Price
           * @description The price per unit of the product.
           */
          price: number;
          /**
           * Product Id
           * @description The unique identifier of the product in the cart.
           */
          product_id: number;
          /**
           * Quantity
           * @description The quantity of the product in the cart.
           */
          quantity: number;
      }[];
      /**
       * Total Price
       * @description The total price of all items in the cart.
       */
      total_price: number;
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
 * Type of CLOUDCART's CLOUDCART_UPDATE_CATEGORY tool input.
 */
type CLOUDCART_UPDATE_CATEGORY_INPUT = {
  /**
   * Description
   * @description Detailed description of the category
   * @default null
   */
  description: string | null;
  /**
   * Id
   * @description Unique identifier of the category to update
   */
  id?: string;
  /**
   * Image
   * @description Absolute URL to the category image
   * @default null
   */
  image: string | null;
  /**
   * Meta Description
   * @description SEO meta description
   * @default null
   */
  meta_description: string | null;
  /**
   * Meta Keywords
   * @description SEO meta keywords, comma-separated
   * @default null
   */
  meta_keywords: string | null;
  /**
   * Meta Title
   * @description SEO meta title
   * @default null
   */
  meta_title: string | null;
  /**
   * Parent Id
   * @description ID of the parent category; omit or null for top-level
   * @default null
   */
  parent_id: number | null;
  /**
   * Position
   * @description Sorting position of the category (0 = first)
   * @default null
   */
  position: number | null;
  /**
   * Title
   * @description Title of the category
   * @default null
   */
  title: string | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_UPDATE_CATEGORY tool output.
 */
type CLOUDCART_UPDATE_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Category description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique ID of the updated category
       */
      id: string;
      /**
       * Image
       * @description URL of the category image
       * @default null
       */
      image: string | null;
      /**
       * Meta Description
       * @description SEO meta description
       * @default null
       */
      meta_description: string | null;
      /**
       * Meta Keywords
       * @description SEO meta keywords
       * @default null
       */
      meta_keywords: string | null;
      /**
       * Meta Title
       * @description SEO meta title
       * @default null
       */
      meta_title: string | null;
      /**
       * Parent Id
       * @description Parent category ID if nested
       * @default null
       */
      parent_id: number | null;
      /**
       * Position
       * @description Sorting position of the category
       * @default null
       */
      position: number | null;
      /**
       * Title
       * @description Title of the category
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
 * Type of CLOUDCART's CLOUDCART_UPDATE_CUSTOMER tool input.
 */
type CLOUDCART_UPDATE_CUSTOMER_INPUT = {
  /**
   * Address
   * @description Physical address of the customer. Optional.
   * @default null
   */
  address: string | null;
  /**
   * Customer Id
   * @description ID of the customer to update
   */
  customer_id?: number;
  /**
   * Email
   * Format: email
   * @description Customer's email address. Optional.
   * @default null
   */
  email: string | null;
  /**
   * Name
   * @description Full name of the customer. Optional.
   * @default null
   */
  name: string | null;
  /**
   * Password
   * @description Password for the customer's account. Must be at least 8 characters. Optional.
   * @default null
   */
  password: string | null;
  /**
   * Phone
   * @description Phone number of the customer. Optional.
   * @default null
   */
  phone: string | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_UPDATE_CUSTOMER tool output.
 */
type CLOUDCART_UPDATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Physical address of the customer.
       * @default null
       */
      address: string | null;
      /**
       * Email
       * Format: email
       * @description Customer's email address.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for the customer.
       */
      id: number;
      /**
       * Name
       * @description Full name of the customer.
       */
      name: string;
      /**
       * Phone
       * @description Phone number of the customer.
       * @default null
       */
      phone: string | null;
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
 * Type of CLOUDCART's CLOUDCART_UPDATE_ORDER tool input.
 */
type CLOUDCART_UPDATE_ORDER_INPUT = {
  /**
   * Attributes
   * @description Order fields to update
   */
  attributes?: {
      /**
       * Address
       * @description Model representing a postal address.
       * @default null
       */
      billing_address: {
          /**
           * City
           * @description City
           */
          city: string;
          /**
           * Country
           * @description ISO 3166-1 alpha-2 country code
           */
          country: unknown;
          /**
           * First Name
           * @description Recipient first name
           */
          first_name: string;
          /**
           * Last Name
           * @description Recipient last name
           */
          last_name: string;
          /**
           * Phone
           * @description Contact phone number
           * @default null
           */
          phone: string | null;
          /**
           * Postal Code
           * @description Postal or ZIP code
           */
          postal_code: string;
          /**
           * Street
           * @description Street address
           */
          street: string;
      } | null;
      /**
       * Currency
       * @description ISO 4217 currency code
       * @default null
       */
      currency: unknown;
      /**
       * Items
       * @description Updated list of order items
       * @default null
       */
      items: {
          /**
           * Product Id
           * @description Unique identifier of the product
           */
          product_id: number;
          /**
           * Quantity
           * @description Quantity of this product in the order
           */
          quantity: number;
      }[] | null;
      /**
       * Payment Method
       * @description Payment method code, e.g., 'credit_card', 'paypal'
       * @default null
       */
      payment_method: string | null;
      /**
       * Address
       * @description Model representing a postal address.
       * @default null
       */
      shipping_address: {
          /**
           * City
           * @description City
           */
          city: string;
          /**
           * Country
           * @description ISO 3166-1 alpha-2 country code
           */
          country: unknown;
          /**
           * First Name
           * @description Recipient first name
           */
          first_name: string;
          /**
           * Last Name
           * @description Recipient last name
           */
          last_name: string;
          /**
           * Phone
           * @description Contact phone number
           * @default null
           */
          phone: string | null;
          /**
           * Postal Code
           * @description Postal or ZIP code
           */
          postal_code: string;
          /**
           * Street
           * @description Street address
           */
          street: string;
      } | null;
      /**
       * Status
       * @description New status for the order, e.g., 'pending', 'paid', 'cancelled'
       * @default null
       */
      status: string | null;
  };
  /**
   * Order Id
   * @description Unique identifier of the order to update
   */
  order_id?: string;
};

/**
 * Type of CLOUDCART's CLOUDCART_UPDATE_ORDER tool output.
 */
type CLOUDCART_UPDATE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Updated order resource object
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the order
       */
      attributes: {
          /**
           * Created At
           * @description ISO8601 timestamp when the order was created
           */
          created_at: string;
          /**
           * Currency
           * @description Currency code of the total amount
           */
          currency: string;
          /**
           * Status
           * @description Current status of the order
           */
          status: string;
          /**
           * Total
           * @description Total amount of the order
           */
          total: number;
          /**
           * Updated At
           * @description ISO8601 timestamp when the order was last updated
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique identifier of the order
       */
      id: string;
      /**
       * Type
       * @description Resource type, should be 'orders'
       */
      type: string;
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
 * Type of CLOUDCART's CLOUDCART_UPDATE_PRODUCT tool input.
 */
type CLOUDCART_UPDATE_PRODUCT_INPUT = {
  /**
   * Category Id
   * @description Identifier of the category to assign this product to.
   * @default null
   */
  category_id: string | null;
  /**
   * Description
   * @description A brief description of the product.
   * @default null
   */
  description: string | null;
  /**
   * Images
   * @description List of URLs for the product images.
   * @default null
   */
  images: string[] | null;
  /**
   * Name
   * @description The new name of the product.
   * @default null
   */
  name: string | null;
  /**
   * Price
   * @description The new price of the product; must be non-negative.
   * @default null
   */
  price: number | null;
  /**
   * Product Id
   * @description The unique identifier of the product to update.
   */
  product_id?: string;
  /**
   * Stock
   * @description The new stock quantity; must be non-negative.
   * @default null
   */
  stock: number | null;
};

/**
 * Type of CLOUDCART's CLOUDCART_UPDATE_PRODUCT tool output.
 */
type CLOUDCART_UPDATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category Id
       * @description Identifier of the category the product belongs to.
       */
      category_id: string;
      /**
       * Description
       * @description A brief description of the product.
       */
      description: string;
      /**
       * Id
       * @description The unique identifier of the product.
       */
      id: string;
      /**
       * Images
       * @description URLs of the product images.
       */
      images: string[];
      /**
       * Name
       * @description The name of the product.
       */
      name: string;
      /**
       * Price
       * @description The price of the product.
       */
      price: number;
      /**
       * Stock
       * @description The available stock quantity.
       */
      stock: number;
      /**
       * Updated At
       * @description Timestamp when the product was last updated.
       */
      updated_at: string;
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
 * Type of CLOUDCART's CLOUDCART_UPDATE_VENDOR tool input.
 */
type CLOUDCART_UPDATE_VENDOR_INPUT = {
  /**
   * Data
   * @description Data wrapper for update vendor request.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes for updating an existing vendor.
       */
      attributes: {
          /**
           * Image Url
           * Format: uri
           * @description URL of the vendor's image
           * @default null
           */
          image_url: unknown;
          /**
           * Name
           * @description Name of the vendor
           * @default null
           */
          name: string | null;
      };
      /**
       * Id
       * @description Unique identifier of the vendor to update
       */
      id: string;
      /**
       * Type
       * @description Resource type
       * @default vendors
       * @constant
       */
      type: "vendors";
  };
};

/**
 * Type of CLOUDCART's CLOUDCART_UPDATE_VENDOR tool output.
 */
type CLOUDCART_UPDATE_VENDOR_OUTPUT = {
  /**
   * Data
   * @description Data wrapper for update vendor response.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a vendor.
       */
      attributes: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the vendor was created
           * @default null
           */
          created_at: string | null;
          /**
           * Image Url
           * @description URL of the vendor's image
           * @default null
           */
          image_url: string | null;
          /**
           * Name
           * @description Name of the vendor
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the vendor was last updated
           * @default null
           */
          updated_at: string | null;
      };
      /**
       * Id
       * @description Unique identifier of the vendor
       */
      id: string;
      /**
       * Type
       * @description Resource type
       * @constant
       */
      type: "vendors";
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
 * Type map of all available tool input types for toolkit "CLOUDCART".
 */
export type CLOUDCART_TOOL_INPUTS = {
  ADD_TO_CART: CLOUDCART_ADD_TO_CART_INPUT
  CLEAR_CART: CLOUDCART_CLEAR_CART_INPUT
  CREATE_CATEGORY: CLOUDCART_CREATE_CATEGORY_INPUT
  CREATE_CUSTOMER: CLOUDCART_CREATE_CUSTOMER_INPUT
  CREATE_ORDER: CLOUDCART_CREATE_ORDER_INPUT
  CREATE_PRODUCT: CLOUDCART_CREATE_PRODUCT_INPUT
  CREATE_VARIANT: CLOUDCART_CREATE_VARIANT_INPUT
  CREATE_VARIANT_OPTION: CLOUDCART_CREATE_VARIANT_OPTION_INPUT
  CREATE_VARIANT_PARAMETER: CLOUDCART_CREATE_VARIANT_PARAMETER_INPUT
  CREATE_VENDOR: CLOUDCART_CREATE_VENDOR_INPUT
  DELETE_CATEGORY: CLOUDCART_DELETE_CATEGORY_INPUT
  DELETE_CUSTOMER: CLOUDCART_DELETE_CUSTOMER_INPUT
  DELETE_ORDER: CLOUDCART_DELETE_ORDER_INPUT
  DELETE_PRODUCT: CLOUDCART_DELETE_PRODUCT_INPUT
  DELETE_VENDOR: CLOUDCART_DELETE_VENDOR_INPUT
  GET_CART: CLOUDCART_GET_CART_INPUT
  GET_CATEGORIES: CLOUDCART_GET_CATEGORIES_INPUT
  GET_CUSTOMERS: CLOUDCART_GET_CUSTOMERS_INPUT
  GET_ORDERS: CLOUDCART_GET_ORDERS_INPUT
  GET_PAYMENT_METHODS: CLOUDCART_GET_PAYMENT_METHODS_INPUT
  GET_PRODUCTS: CLOUDCART_GET_PRODUCTS_INPUT
  GET_PRODUCT_WITH_RELATIONS: CLOUDCART_GET_PRODUCT_WITH_RELATIONS_INPUT
  GET_PROPERTY_OPTIONS_RELATIONSHIP: CLOUDCART_GET_PROPERTY_OPTIONS_RELATIONSHIP_INPUT
  GET_SHIPPING_METHODS: CLOUDCART_GET_SHIPPING_METHODS_INPUT
  GET_VENDOR: CLOUDCART_GET_VENDOR_INPUT
  LIST_ORDER_PAYMENT: CLOUDCART_LIST_ORDER_PAYMENT_INPUT
  LIST_VENDORS: CLOUDCART_LIST_VENDORS_INPUT
  REMOVE_FROM_CART: CLOUDCART_REMOVE_FROM_CART_INPUT
  UPDATE_CART_ITEM: CLOUDCART_UPDATE_CART_ITEM_INPUT
  UPDATE_CATEGORY: CLOUDCART_UPDATE_CATEGORY_INPUT
  UPDATE_CUSTOMER: CLOUDCART_UPDATE_CUSTOMER_INPUT
  UPDATE_ORDER: CLOUDCART_UPDATE_ORDER_INPUT
  UPDATE_PRODUCT: CLOUDCART_UPDATE_PRODUCT_INPUT
  UPDATE_VENDOR: CLOUDCART_UPDATE_VENDOR_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLOUDCART".
 */
export type CLOUDCART_TOOL_OUTPUTS = {
  ADD_TO_CART: CLOUDCART_ADD_TO_CART_OUTPUT
  CLEAR_CART: CLOUDCART_CLEAR_CART_OUTPUT
  CREATE_CATEGORY: CLOUDCART_CREATE_CATEGORY_OUTPUT
  CREATE_CUSTOMER: CLOUDCART_CREATE_CUSTOMER_OUTPUT
  CREATE_ORDER: CLOUDCART_CREATE_ORDER_OUTPUT
  CREATE_PRODUCT: CLOUDCART_CREATE_PRODUCT_OUTPUT
  CREATE_VARIANT: CLOUDCART_CREATE_VARIANT_OUTPUT
  CREATE_VARIANT_OPTION: CLOUDCART_CREATE_VARIANT_OPTION_OUTPUT
  CREATE_VARIANT_PARAMETER: CLOUDCART_CREATE_VARIANT_PARAMETER_OUTPUT
  CREATE_VENDOR: CLOUDCART_CREATE_VENDOR_OUTPUT
  DELETE_CATEGORY: CLOUDCART_DELETE_CATEGORY_OUTPUT
  DELETE_CUSTOMER: CLOUDCART_DELETE_CUSTOMER_OUTPUT
  DELETE_ORDER: CLOUDCART_DELETE_ORDER_OUTPUT
  DELETE_PRODUCT: CLOUDCART_DELETE_PRODUCT_OUTPUT
  DELETE_VENDOR: CLOUDCART_DELETE_VENDOR_OUTPUT
  GET_CART: CLOUDCART_GET_CART_OUTPUT
  GET_CATEGORIES: CLOUDCART_GET_CATEGORIES_OUTPUT
  GET_CUSTOMERS: CLOUDCART_GET_CUSTOMERS_OUTPUT
  GET_ORDERS: CLOUDCART_GET_ORDERS_OUTPUT
  GET_PAYMENT_METHODS: CLOUDCART_GET_PAYMENT_METHODS_OUTPUT
  GET_PRODUCTS: CLOUDCART_GET_PRODUCTS_OUTPUT
  GET_PRODUCT_WITH_RELATIONS: CLOUDCART_GET_PRODUCT_WITH_RELATIONS_OUTPUT
  GET_PROPERTY_OPTIONS_RELATIONSHIP: CLOUDCART_GET_PROPERTY_OPTIONS_RELATIONSHIP_OUTPUT
  GET_SHIPPING_METHODS: CLOUDCART_GET_SHIPPING_METHODS_OUTPUT
  GET_VENDOR: CLOUDCART_GET_VENDOR_OUTPUT
  LIST_ORDER_PAYMENT: CLOUDCART_LIST_ORDER_PAYMENT_OUTPUT
  LIST_VENDORS: CLOUDCART_LIST_VENDORS_OUTPUT
  REMOVE_FROM_CART: CLOUDCART_REMOVE_FROM_CART_OUTPUT
  UPDATE_CART_ITEM: CLOUDCART_UPDATE_CART_ITEM_OUTPUT
  UPDATE_CATEGORY: CLOUDCART_UPDATE_CATEGORY_OUTPUT
  UPDATE_CUSTOMER: CLOUDCART_UPDATE_CUSTOMER_OUTPUT
  UPDATE_ORDER: CLOUDCART_UPDATE_ORDER_OUTPUT
  UPDATE_PRODUCT: CLOUDCART_UPDATE_PRODUCT_OUTPUT
  UPDATE_VENDOR: CLOUDCART_UPDATE_VENDOR_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLOUDCART toolkit.
 */
export const CLOUDCART = {
  slug: "cloudcart",
  tools: {
    /**
     * Tool to add an item to the cart. use after confirming a product selection with desired quantity.
     */
    ADD_TO_CART: "CLOUDCART_ADD_TO_CART",
    /**
     * Tool to remove all items from the specified cart. use when you need to empty the cart before adding new items or starting over.
     */
    CLEAR_CART: "CLOUDCART_CLEAR_CART",
    /**
     * Tool to create a new category. use when you need to add organizational structure to your product catalog.
     */
    CREATE_CATEGORY: "CLOUDCART_CREATE_CATEGORY",
    /**
     * Tool to create a new customer in cloudcart. use when you need to register a new customer profile. provide validated customer details (name, email, and password).
     */
    CREATE_CUSTOMER: "CLOUDCART_CREATE_CUSTOMER",
    /**
     * Tool to create a new order. use after assembling customer id, cart items, and optional addresses/payment info.
     */
    CREATE_ORDER: "CLOUDCART_CREATE_ORDER",
    /**
     * Tool to create a new product. use when you have all details and want to add it to cloudcart.
     */
    CREATE_PRODUCT: "CLOUDCART_CREATE_PRODUCT",
    /**
     * Tool to create a new product variant for a given product. use when you need to add a variant with specific sku, price, and options.
     */
    CREATE_VARIANT: "CLOUDCART_CREATE_VARIANT",
    /**
     * Tool to create a new variant option for a specific product variant. use when you need to add an option (e.g., 'large') with an optional price adjustment to an existing variant.
     */
    CREATE_VARIANT_OPTION: "CLOUDCART_CREATE_VARIANT_OPTION",
    /**
     * Tool to create a new variant parameter for a product variant. use when you need to add custom attributes (e.g., color, size) after a variant is created.
     */
    CREATE_VARIANT_PARAMETER: "CLOUDCART_CREATE_VARIANT_PARAMETER",
    /**
     * Tool to create a new vendor via cloudcart api. use when adding a new brand or partner entity to your store.
     */
    CREATE_VENDOR: "CLOUDCART_CREATE_VENDOR",
    /**
     * Tool to delete a category by its id. use after confirming the correct id to permanently remove it.
     */
    DELETE_CATEGORY: "CLOUDCART_DELETE_CATEGORY",
    /**
     * Tool to delete a customer. use when you need to remove a customer by their id. example: "delete customer with id 123".
     */
    DELETE_CUSTOMER: "CLOUDCART_DELETE_CUSTOMER",
    /**
     * Tool to delete an order. use after confirming the order exists.
     */
    DELETE_ORDER: "CLOUDCART_DELETE_ORDER",
    /**
     * Tool to delete a product by its id. use after confirming the product exists to permanently remove it from the catalog.
     */
    DELETE_PRODUCT: "CLOUDCART_DELETE_PRODUCT",
    /**
     * Tool to delete a vendor by its id. use when removing an obsolete vendor from the store.
     */
    DELETE_VENDOR: "CLOUDCART_DELETE_VENDOR",
    /**
     * Tool to retrieve the current shopping cart. use when you need to view or verify the cart contents before checkout.
     */
    GET_CART: "CLOUDCART_GET_CART",
    /**
     * Tool to retrieve a list of all categories. use when you need to list available categories for selection.
     */
    GET_CATEGORIES: "CLOUDCART_GET_CATEGORIES",
    /**
     * Tool to retrieve a list of all customers. use when you need to display or process multiple customer profiles. note: the response is paginated; use page[number] and page[size] to control pagination.
     */
    GET_CUSTOMERS: "CLOUDCART_GET_CUSTOMERS",
    /**
     * Tool to retrieve a list of all orders. use when you need to collect orders for processing. returns json api order resources including id, type, and attributes. ensure authentication before calling.
     */
    GET_ORDERS: "CLOUDCART_GET_ORDERS",
    /**
     * Tool to retrieve all available payment methods. use when you need to list supported payment options before checkout.
     */
    GET_PAYMENT_METHODS: "CLOUDCART_GET_PAYMENT_METHODS",
    /**
     * Tool to retrieve a list of products with optional filters. use when you need a paginated catalog of products (e.g., by page, category, price range).
     */
    GET_PRODUCTS: "CLOUDCART_GET_PRODUCTS",
    /**
     * Tool to retrieve a product with related entities. use when detailed product information is needed after obtaining its id.
     */
    GET_PRODUCT_WITH_RELATIONS: "CLOUDCART_GET_PRODUCT_WITH_RELATIONS",
    /**
     * Tool to retrieve property options relationship for a product. use when you need to fetch which property options are assigned to a product after confirming it exists.
     */
    GET_PROPERTY_OPTIONS_RELATIONSHIP: "CLOUDCART_GET_PROPERTY_OPTIONS_RELATIONSHIP",
    /**
     * Tool to retrieve all available shipping methods. use when you need to list shipping options before checkout.
     */
    GET_SHIPPING_METHODS: "CLOUDCART_GET_SHIPPING_METHODS",
    /**
     * Tool to retrieve details of a specific vendor. use when you have the vendor id.
     */
    GET_VENDOR: "CLOUDCART_GET_VENDOR",
    /**
     * Tool to retrieve a list of order payments. use when you need to view payments for orders, optionally filtered by order id or status. useful after creating or updating orders to inspect their payment history.
     */
    LIST_ORDER_PAYMENT: "CLOUDCART_LIST_ORDER_PAYMENT",
    /**
     * Tool to retrieve a list of all vendors. use when you need a paginated list of vendors or filter by name/status. example: "list active vendors on page 2."
     */
    LIST_VENDORS: "CLOUDCART_LIST_VENDORS",
    /**
     * Tool to remove an item from the cart. use after confirming the product exists in the cart to delete it.
     */
    REMOVE_FROM_CART: "CLOUDCART_REMOVE_FROM_CART",
    /**
     * Tool to update the quantity of an item in the cart. use when you need to adjust item quantities in the cart before checkout.
     */
    UPDATE_CART_ITEM: "CLOUDCART_UPDATE_CART_ITEM",
    /**
     * Tool to update an existing category. use when you need to modify category details after reviewing its current values.
     */
    UPDATE_CATEGORY: "CLOUDCART_UPDATE_CATEGORY",
    /**
     * Tool to update an existing customer. use when modifying customer details like name, email, or address.
     */
    UPDATE_CUSTOMER: "CLOUDCART_UPDATE_CUSTOMER",
    /**
     * Tool to update an existing order. use when you need to modify order details after creation (e.g., change status or addresses). provide only the fields you wish to change.
     */
    UPDATE_ORDER: "CLOUDCART_UPDATE_ORDER",
    /**
     * Tool to update an existing product's details. use when you need to modify product information after confirming the product id.
     */
    UPDATE_PRODUCT: "CLOUDCART_UPDATE_PRODUCT",
    /**
     * Tool to update an existing vendor. use when vendor details change and need saving. call after confirming the vendor id.
     */
    UPDATE_VENDOR: "CLOUDCART_UPDATE_VENDOR",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLOUDCART".
 */
export type CLOUDCART_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLOUDCART".
 */
export type CLOUDCART_TRIGGER_EVENTS = {}
