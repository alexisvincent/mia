// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BOOQABLE's BOOQABLE_CREATE_CUSTOMER tool input.
 */
type BOOQABLE_CREATE_CUSTOMER_INPUT = {
  /**
   * Email
   * @description E-mail address of the customer
   * @default null
   */
  email: string | null;
  /**
   * Name
   * @description The name of the customer
   */
  name?: string;
  /**
   * Phone
   * @description Customer's phone number
   * @default null
   */
  phone: string | null;
  /**
   * Properties Attributes
   * @description List of custom properties for the customer
   * @default null
   */
  properties_attributes: {
      /**
       * Address1
       * @description Address line 1
       * @default null
       */
      address1: string | null;
      /**
       * Address2
       * @description Address line 2
       * @default null
       */
      address2: string | null;
      /**
       * City
       * @description City name
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country name
       * @default null
       */
      country: string | null;
      /**
       * Name
       * @description Name of the property
       */
      name: string;
      /**
       * Type
       * @description The type of the property. Must be 'Property::Address'.
       * @constant
       */
      type: "Property::Address";
      /**
       * Zipcode
       * @description Postal code
       * @default null
       */
      zipcode: string | null;
  }[] | null;
  /**
   * Tax Region Id
   * @description Associated tax region ID
   * @default null
   */
  tax_region_id: number | null;
};

/**
 * Type of BOOQABLE's BOOQABLE_CREATE_CUSTOMER tool output.
 */
type BOOQABLE_CREATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customer
       * @description Details of the created customer
       */
      customer: {
          /**
           * Address1
           * @description Address line 1
           * @default null
           */
          address1: string | null;
          /**
           * Address2
           * @description Address line 2
           * @default null
           */
          address2: string | null;
          /**
           * Archived
           * @description Whether the customer is archived
           */
          archived: boolean;
          /**
           * Avatar Url
           * @description Customer's avatar URL
           * @default null
           */
          avatar_url: string | null;
          /**
           * City
           * @description City of the customer
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country of the customer
           * @default null
           */
          country: string | null;
          /**
           * Created At
           * @description When the customer was created
           */
          created_at: string;
          /**
           * Deposit Type
           * @description Type of deposit
           * @default null
           */
          deposit_type: string | null;
          /**
           * Deposit Value
           * @description Value of deposit
           */
          deposit_value: number;
          /**
           * Discount Percentage
           * @description Discount percentage
           */
          discount_percentage: number;
          /**
           * Email
           * @description Customer's email address
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Customer ID
           */
          id: string;
          /**
           * Legacy Id
           * @description Legacy ID of the customer
           * @default null
           */
          legacy_id: string | null;
          /**
           * Main Address
           * @description Main address ID or description
           * @default null
           */
          main_address: string | null;
          /**
           * Name
           * @description Customer's name
           */
          name: string;
          /**
           * Notes
           * @description List of notes for the customer
           */
          notes: {
              /**
               * Body
               * @description Body of the note
               */
              body: string;
              /**
               * Employee
               * @description Employee details
               */
              employee: {
                  /**
                   * Id
                   * @description Employee ID who created the note
                   */
                  id: string;
              };
              /**
               * Employee Id
               * @description ID of the employee who added the note
               */
              employee_id: string;
              /**
               * Id
               * @description Note ID
               */
              id: string;
              /**
               * Notable Id
               * @description ID of the notable entity
               */
              notable_id: string;
              /**
               * Notable Type
               * @description Type of notable entity
               */
              notable_type: string;
          }[];
          /**
           * Number
           * @description Customer's unique number
           */
          number: number;
          /**
           * Order Count
           * @description Number of orders made by customer
           */
          order_count: number;
          /**
           * Orders
           * @description List of orders for the customer
           */
          orders: {
              /**
               * Customer Id
               * @description Customer ID associated with the order
               */
              customer_id: string;
              /**
               * Id
               * @description Order ID
               */
              id: string;
              /**
               * Number
               * @description Order number
               */
              number: number;
              /**
               * Status
               * @description Order status
               */
              status: string;
          }[];
          /**
           * Phone
           * @description Customer's phone number
           * @default null
           */
          phone: string | null;
          /**
           * Properties
           * @description List of customer properties
           */
          properties: {
              /**
               * Address1
               * @description Address line 1
               * @default null
               */
              address1: string | null;
              /**
               * Address2
               * @description Address line 2
               * @default null
               */
              address2: string | null;
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Name
               * @description Name of the property
               */
              name: string;
              /**
               * Type
               * @description The type of the property. Must be 'Property::Address'.
               * @constant
               */
              type: "Property::Address";
              /**
               * Zipcode
               * @description Postal code
               * @default null
               */
              zipcode: string | null;
          }[];
          /**
           * Region
           * @description Region of the customer
           * @default null
           */
          region: string | null;
          /**
           * Tags
           * @description List of tags
           */
          tags: string[];
          /**
           * Tax Region Id
           * @description Associated tax region ID
           * @default null
           */
          tax_region_id: number | null;
          /**
           * Turnover
           * @description Total turnover for this customer
           */
          turnover: string;
          /**
           * Updated At
           * @description When the customer was last updated
           */
          updated_at: string;
          /**
           * Zipcode
           * @description Postal code
           * @default null
           */
          zipcode: string | null;
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
 * Type of BOOQABLE's BOOQABLE_CREATE_ORDER tool input.
 */
type BOOQABLE_CREATE_ORDER_INPUT = {
  /**
   * Customer Id
   * @description ID of the customer for the order.
   */
  customer_id?: string;
  /**
   * Starts At
   * @description Order start datetime in ISO8601 format, e.g., '2018-01-01T09:00:00Z'.
   * @default null
   */
  starts_at: string | null;
  /**
   * Stops At
   * @description Order stop datetime in ISO8601 format, e.g., '2018-02-01T09:00:00Z'.
   * @default null
   */
  stops_at: string | null;
};

/**
 * Type of BOOQABLE's BOOQABLE_CREATE_ORDER tool output.
 */
type BOOQABLE_CREATE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Order
       * @description Details of the created order.
       */
      order: {
          [key: string]: unknown;
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
 * Type of BOOQABLE's BOOQABLE_CREATE_PRODUCT_GROUP tool input.
 */
type BOOQABLE_CREATE_PRODUCT_GROUP_INPUT = {
  /**
   * Base Price In Cents
   * @description Base price in cents for the product group.
   * @default null
   */
  base_price_in_cents: number | null;
  /**
   * Name
   * @description Name of the product group.
   */
  name?: string;
  /**
   * Price Period
   * @description Pricing period (e.g., 'day').
   * @default null
   */
  price_period: string | null;
  /**
   * Price Type
   * @description Pricing type (e.g., 'simple').
   * @default null
   */
  price_type: string | null;
  /**
   * Sku
   * @description Stock Keeping Unit identifier for the product group.
   * @default null
   */
  sku: string | null;
};

/**
 * Type of BOOQABLE's BOOQABLE_CREATE_PRODUCT_GROUP tool output.
 */
type BOOQABLE_CREATE_PRODUCT_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Product Group
       * @description The created product group resource.
       */
      product_group: {
          /**
           * Base Price As Decimal
           * @description Base price as decimal for readability.
           */
          base_price_as_decimal: number;
          /**
           * Base Price In Cents
           * @description Base price in cents for the group.
           * @default null
           */
          base_price_in_cents: number | null;
          /**
           * Created At
           * @description Timestamp when the group was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the product group.
           */
          id: string;
          /**
           * Name
           * @description Name of the product group.
           */
          name: string;
          /**
           * Notes
           * @description Notes associated with the product group.
           */
          notes: {
              [key: string]: unknown;
          }[];
          /**
           * Price Period
           * @description Pricing period.
           * @default null
           */
          price_period: string | null;
          /**
           * Price Type
           * @description Pricing type.
           * @default null
           */
          price_type: string | null;
          /**
           * Products
           * @description List of products in the group.
           */
          products: {
              [key: string]: unknown;
          }[];
          /**
           * Products Count
           * @description Number of products in this group.
           */
          products_count: number;
          /**
           * Properties
           * @description Additional properties of the product group.
           */
          properties: {
              [key: string]: unknown;
          }[];
          /**
           * Sku
           * @description Stock Keeping Unit identifier.
           * @default null
           */
          sku: string | null;
          /**
           * Trackable
           * @description Whether this group is trackable.
           */
          trackable: boolean;
          /**
           * Updated At
           * @description Timestamp when the group was last updated.
           */
          updated_at: string;
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
 * Type of BOOQABLE's BOOQABLE_DELETE_CUSTOMER tool input.
 */
type BOOQABLE_DELETE_CUSTOMER_INPUT = {
  /**
   * Id
   * @description The unique identifier (UUID or numeric ID) of the customer to delete (archive).
   */
  id?: string;
};

/**
 * Type of BOOQABLE's BOOQABLE_DELETE_CUSTOMER tool output.
 */
type BOOQABLE_DELETE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customer
       * @description The archived customer object, including updated archived status and timestamp.
       */
      customer: {
          /**
           * Address1
           * @description Address line 1 of the customer
           * @default null
           */
          address1: string | null;
          /**
           * Address2
           * @description Address line 2 of the customer
           * @default null
           */
          address2: string | null;
          /**
           * Archived
           * @description Whether the customer is archived
           */
          archived: boolean;
          /**
           * Avatar Url
           * @description Customer's avatar URL
           * @default null
           */
          avatar_url: string | null;
          /**
           * City
           * @description City of the customer
           * @default null
           */
          city: string | null;
          /**
           * Created At
           * @description When the customer was created
           */
          created_at: string;
          /**
           * Deposit Type
           * @description Type of deposit for the customer
           * @default null
           */
          deposit_type: string | null;
          /**
           * Deposit Value
           * @description Value of the deposit for the customer
           */
          deposit_value: number;
          /**
           * Discount Percentage
           * @description Discount percentage for the customer
           */
          discount_percentage: number;
          /**
           * Email
           * @description Customer's email address
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Customer ID
           */
          id: string;
          /**
           * Legacy Id
           * @description Legacy ID of the customer
           * @default null
           */
          legacy_id: string | null;
          /**
           * Name
           * @description Customer's name
           */
          name: string;
          /**
           * Notes
           * @description List of notes for the customer
           */
          notes: {
              /**
               * Body
               * @description Body of the note
               */
              body: string;
              /**
               * Employee
               * @description Employee details
               */
              employee: {
                  /**
                   * Id
                   * @description Employee ID who created the note
                   */
                  id: string;
              };
              /**
               * Employee Id
               * @description ID of the employee who added the note
               */
              employee_id: string;
              /**
               * Id
               * @description Note ID
               */
              id: string;
              /**
               * Notable Id
               * @description ID of the notable entity
               */
              notable_id: string;
              /**
               * Notable Type
               * @description Type of the notable entity
               */
              notable_type: string;
          }[];
          /**
           * Number
           * @description Customer's unique number
           */
          number: number;
          /**
           * Orders
           * @description List of orders for the customer
           */
          orders: {
              /**
               * Customer Id
               * @description Customer ID associated with the order
               */
              customer_id: string;
              /**
               * Id
               * @description Order ID
               */
              id: string;
              /**
               * Number
               * @description Order number
               */
              number: number;
              /**
               * Status
               * @description Order status
               */
              status: string;
          }[];
          /**
           * Phone
           * @description Customer's phone number
           * @default null
           */
          phone: string | null;
          /**
           * Properties
           * @description List of custom properties for the customer
           */
          properties: {
              /**
               * Address1
               * @description Address line 1
               * @default null
               */
              address1: string | null;
              /**
               * Address2
               * @description Address line 2
               * @default null
               */
              address2: string | null;
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Name
               * @description Name of the property
               */
              name: string;
              /**
               * Type
               * @description The type of the property. Must be 'Property::Address'.
               * @constant
               */
              type: "Property::Address";
              /**
               * Zipcode
               * @description Postal code
               * @default null
               */
              zipcode: string | null;
          }[];
          /**
           * Region
           * @description Region of the customer
           * @default null
           */
          region: string | null;
          /**
           * Tags
           * @description List of tags associated with the customer
           */
          tags: string[];
          /**
           * Tax Region Id
           * @description Associated tax region ID
           * @default null
           */
          tax_region_id: number | null;
          /**
           * Updated At
           * @description When the customer was last updated
           */
          updated_at: string;
          /**
           * Zipcode
           * @description Postal code of the customer
           * @default null
           */
          zipcode: string | null;
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
 * Type of BOOQABLE's BOOQABLE_DELETE_ORDER tool input.
 */
type BOOQABLE_DELETE_ORDER_INPUT = {
  /**
   * Id
   * @description The UUID or numeric ID of the order to archive.
   */
  id?: string;
};

/**
 * Type of BOOQABLE's BOOQABLE_DELETE_ORDER tool output.
 */
type BOOQABLE_DELETE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Order
       * @description The archived order resource returned by the API.
       */
      order: {
          [key: string]: unknown;
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
 * Type of BOOQABLE's BOOQABLE_DELETE_PRODUCT_GROUP tool input.
 */
type BOOQABLE_DELETE_PRODUCT_GROUP_INPUT = {
  /**
   * Id
   * @description The unique identifier of the product group to delete.
   */
  id?: string;
};

/**
 * Type of BOOQABLE's BOOQABLE_DELETE_PRODUCT_GROUP tool output.
 */
type BOOQABLE_DELETE_PRODUCT_GROUP_OUTPUT = {
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
 * Type of BOOQABLE's BOOQABLE_GET_CUSTOMER tool input.
 */
type BOOQABLE_GET_CUSTOMER_INPUT = {
  /**
   * Id
   * @description Unique identifier (UUID) or customer number to fetch.
   */
  id?: string;
};

/**
 * Type of BOOQABLE's BOOQABLE_GET_CUSTOMER tool output.
 */
type BOOQABLE_GET_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customer
       * @description Details of the requested customer.
       */
      customer: {
          /**
           * Address1
           * @description Address line 1.
           * @default null
           */
          address1: string | null;
          /**
           * Address2
           * @description Address line 2.
           * @default null
           */
          address2: string | null;
          /**
           * Archived
           * @description Whether the customer is archived.
           */
          archived: boolean;
          /**
           * Avatar Url
           * @description URL for the customer's avatar.
           * @default null
           */
          avatar_url: string | null;
          /**
           * City
           * @description City of the customer.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country of the customer.
           * @default null
           */
          country: string | null;
          /**
           * Created At
           * @description Timestamp when the customer was created.
           */
          created_at: string;
          /**
           * Deposit Type
           * @description Type of deposit.
           * @default null
           */
          deposit_type: string | null;
          /**
           * Deposit Value
           * @description Value of the deposit.
           */
          deposit_value: number;
          /**
           * Discount Percentage
           * @description Discount percentage applied to the customer.
           */
          discount_percentage: number;
          /**
           * Email
           * @description Email address of the customer.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Customer ID.
           */
          id: string;
          /**
           * Legacy Id
           * @description Legacy ID of the customer.
           * @default null
           */
          legacy_id: string | null;
          /**
           * Main Address
           * @description Main address for the customer.
           * @default null
           */
          main_address: string | null;
          /**
           * Name
           * @description Name of the customer.
           */
          name: string;
          /**
           * Notes
           * @description List of notes associated with the customer.
           */
          notes: {
              /**
               * Body
               * @description Body content of the note.
               */
              body: string;
              /**
               * Employee
               * @description Employee details for the note.
               */
              employee: {
                  /**
                   * Id
                   * @description ID of the employee who created the note.
                   */
                  id: string;
              };
              /**
               * Employee Id
               * @description ID of the employee who added the note.
               */
              employee_id: string;
              /**
               * Id
               * @description Note ID.
               */
              id: string;
              /**
               * Notable Id
               * @description ID of the notable entity.
               */
              notable_id: string;
              /**
               * Notable Type
               * @description Type of notable entity (e.g., 'Customer').
               */
              notable_type: string;
          }[];
          /**
           * Number
           * @description Unique number assigned to the customer.
           */
          number: number;
          /**
           * Order Count
           * @description Total number of orders made by the customer.
           */
          order_count: number;
          /**
           * Orders
           * @description List of orders associated with the customer.
           */
          orders: {
              /**
               * Customer Id
               * @description Customer ID associated with the order.
               */
              customer_id: string;
              /**
               * Id
               * @description Order ID.
               */
              id: string;
              /**
               * Number
               * @description Order number.
               */
              number: number;
              /**
               * Status
               * @description Order status.
               */
              status: string;
          }[];
          /**
           * Phone
           * @description Phone number of the customer.
           * @default null
           */
          phone: string | null;
          /**
           * Properties
           * @description List of custom properties for the customer.
           */
          properties: {
              /**
               * Address1
               * @description Address line 1.
               * @default null
               */
              address1: string | null;
              /**
               * Address2
               * @description Address line 2.
               * @default null
               */
              address2: string | null;
              /**
               * City
               * @description City name.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name.
               * @default null
               */
              country: string | null;
              /**
               * Name
               * @description Name of the property.
               */
              name: string;
              /**
               * Type
               * @description Type of the property, e.g. 'Property::Address'.
               */
              type: string;
              /**
               * Zipcode
               * @description Postal code.
               * @default null
               */
              zipcode: string | null;
          }[];
          /**
           * Region
           * @description Region of the customer.
           * @default null
           */
          region: string | null;
          /**
           * Tags
           * @description List of tags assigned to the customer.
           */
          tags: string[];
          /**
           * Tax Region Id
           * @description Associated tax region ID.
           * @default null
           */
          tax_region_id: number | null;
          /**
           * Turnover
           * @description Total turnover for this customer as a string.
           */
          turnover: string;
          /**
           * Updated At
           * @description Timestamp when the customer was last updated.
           */
          updated_at: string;
          /**
           * Zipcode
           * @description Postal code of the customer.
           * @default null
           */
          zipcode: string | null;
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
 * Type of BOOQABLE's BOOQABLE_GET_CUSTOMERS tool input.
 */
type BOOQABLE_GET_CUSTOMERS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Per
   * @description Number of customers per page. If None, server default is used.
   * @default null
   */
  per: number | null;
};

/**
 * Type of BOOQABLE's BOOQABLE_GET_CUSTOMERS tool output.
 */
type BOOQABLE_GET_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Customers
       * @description List of customers for the requested page.
       */
      customers: {
          /**
           * Address1
           * @description Address line 1.
           * @default null
           */
          address1: string | null;
          /**
           * Address2
           * @description Address line 2.
           * @default null
           */
          address2: string | null;
          /**
           * Archived
           * @description Whether the customer is archived.
           */
          archived: boolean;
          /**
           * Avatar Url
           * @description URL for the customer's avatar.
           * @default null
           */
          avatar_url: string | null;
          /**
           * City
           * @description City of the customer.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country of the customer.
           * @default null
           */
          country: string | null;
          /**
           * Created At
           * @description Timestamp when the customer was created.
           */
          created_at: string;
          /**
           * Deposit Type
           * @description The deposit type added to new orders by default.
           * @default null
           */
          deposit_type: string | null;
          /**
           * Deposit Value
           * @description The deposit value to use for the deposit type.
           */
          deposit_value: number;
          /**
           * Discount Percentage
           * @description Default discount percentage applied to new orders.
           */
          discount_percentage: number;
          /**
           * Email
           * @description Email address used for communication.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Customer ID.
           */
          id: string;
          /**
           * Legacy Id
           * @description Legacy ID of the customer.
           * @default null
           */
          legacy_id: string | null;
          /**
           * Main Address
           * @description Main address for the customer.
           * @default null
           */
          main_address: string | null;
          /**
           * Name
           * @description Person or company name of the customer.
           */
          name: string;
          /**
           * Notes
           * @description List of notes associated with the customer.
           */
          notes: {
              /**
               * Body
               * @description Body content of the note.
               */
              body: string;
              /**
               * Employee
               * @description Employee details for the note.
               */
              employee: {
                  /**
                   * Id
                   * @description ID of the employee who created the note.
                   */
                  id: string;
              };
              /**
               * Employee Id
               * @description ID of the employee who added the note.
               */
              employee_id: string;
              /**
               * Id
               * @description Note ID.
               */
              id: string;
              /**
               * Notable Id
               * @description ID of the notable entity.
               */
              notable_id: string;
              /**
               * Notable Type
               * @description Type of notable entity (e.g., 'Customer').
               */
              notable_type: string;
          }[];
          /**
           * Number
           * @description The assigned customer number.
           */
          number: number;
          /**
           * Order Count
           * @description Number of orders made by the customer.
           */
          order_count: number;
          /**
           * Orders
           * @description List of orders associated with the customer.
           */
          orders: {
              /**
               * Customer Id
               * @description Customer ID associated with the order.
               */
              customer_id: string;
              /**
               * Id
               * @description Order ID.
               */
              id: string;
              /**
               * Number
               * @description Order number.
               */
              number: number;
              /**
               * Status
               * @description Order status.
               */
              status: string;
          }[];
          /**
           * Phone
           * @description Phone number of the customer.
           * @default null
           */
          phone: string | null;
          /**
           * Properties
           * @description A list of basic property values.
           */
          properties: {
              /**
               * Address1
               * @description Address line 1.
               * @default null
               */
              address1: string | null;
              /**
               * Address2
               * @description Address line 2.
               * @default null
               */
              address2: string | null;
              /**
               * City
               * @description City name.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name.
               * @default null
               */
              country: string | null;
              /**
               * Name
               * @description Name of the property.
               */
              name: string;
              /**
               * Type
               * @description Type of the property, e.g., 'Property::Address'.
               */
              type: string;
              /**
               * Zipcode
               * @description Postal code.
               * @default null
               */
              zipcode: string | null;
          }[];
          /**
           * Region
           * @description Region of the customer.
           * @default null
           */
          region: string | null;
          /**
           * Tags
           * @description Case-insensitive tag list.
           */
          tags: string[];
          /**
           * Tax Region Id
           * @description Tax region ID assigned to new orders for this customer.
           * @default null
           */
          tax_region_id: number | null;
          /**
           * Turnover
           * @description Total turnover for this customer as a string.
           */
          turnover: string;
          /**
           * Updated At
           * @description Timestamp when the customer was last updated.
           */
          updated_at: string;
          /**
           * Zipcode
           * @description Postal code.
           * @default null
           */
          zipcode: string | null;
      }[];
      /**
       * Meta
       * @description Metadata about the customer collection.
       */
      meta: {
          /**
           * Facets
           * @description Faceted breakdown of customers by tag list.
           */
          facets: {
              /**
               * Tag List
               * @description Facet data for tag list.
               */
              tag_list: {
                  /**
                   *  Type
                   * @description Type of facet, e.g., 'terms'.
                   */
                  _type: string;
                  /**
                   * Missing
                   * @description Number of missing values.
                   */
                  missing: number;
                  /**
                   * Other
                   * @description Number of other terms.
                   */
                  other: number;
                  /**
                   * Terms
                   * @description List of term counts.
                   */
                  terms: {
                      /**
                       * Count
                       * @description Number of occurrences for the term.
                       */
                      count: number;
                      /**
                       * Term
                       * @description Term value in the facet.
                       */
                      term: string;
                  }[];
                  /**
                   * Total
                   * @description Total number of terms.
                   */
                  total: number;
              };
          };
          /**
           * Total Count
           * @description Total number of customers.
           */
          total_count: number;
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
 * Type of BOOQABLE's BOOQABLE_GET_ORDER tool input.
 */
type BOOQABLE_GET_ORDER_INPUT = {
  /**
   * Fields[Orders]
   * @description List of order fields to include in the response, e.g., ['created_at','updated_at','number'].
   * @default null
   */
  "fields[orders]": string[] | null;
  /**
   * Id
   * @description Unique identifier (UUID or numeric) of the order to fetch.
   */
  id?: string;
  /**
   * Include
   * @description List of related resources to include, e.g., ['customer','coupon','start_location'].
   * @default null
   */
  include: string[] | null;
};

/**
 * Type of BOOQABLE's BOOQABLE_GET_ORDER tool output.
 */
type BOOQABLE_GET_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Order
       * @description Details of the requested order.
       */
      order: {
          [key: string]: unknown;
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
 * Type of BOOQABLE's BOOQABLE_GET_ORDERS tool input.
 */
type BOOQABLE_GET_ORDERS_INPUT = {
  /**
   * Page
   * @description Page number to display. Defaults to 1.
   * @default 1
   */
  page: number;
  /**
   * Per
   * @description Limits the number of orders per page.
   * @default null
   */
  per: number | null;
  /**
   * Q
   * @description Search term to filter orders.
   * @default null
   */
  q: string | null;
};

/**
 * Type of BOOQABLE's BOOQABLE_GET_ORDERS tool output.
 */
type BOOQABLE_GET_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination and facet metadata.
       */
      meta: {
          /**
           * Facets
           * @description Facet information keyed by facet name.
           */
          facets: {
              [key: string]: {
                  /**
                   * Type
                   * @description Type of facet, e.g., 'terms'.
                   */
                  _type: string;
                  /**
                   * Missing
                   * @description Number of missing items for this facet.
                   */
                  missing: number;
                  /**
                   * Other
                   * @description Number of other items for this facet.
                   */
                  other: number;
                  /**
                   * Terms
                   * @description List of term details.
                   */
                  terms: {
                      /**
                       * Count
                       * @description Facet count.
                       */
                      count: number;
                      /**
                       * Term
                       * @description Facet term.
                       */
                      term: string;
                  }[];
                  /**
                   * Total
                   * @description Total number of items for this facet.
                   */
                  total: number;
              };
          };
          /**
           * Total Count
           * @description Total number of orders.
           */
          total_count: number;
          /**
           * Total Item Count
           * @description Total item count across pages, if provided.
           * @default null
           */
          total_item_count: number | null;
      };
      /**
       * Orders
       * @description List of orders.
       */
      orders: {
          /**
           * Customer Id
           * @description Customer ID associated with the order.
           * @default null
           */
          customer_id: string | null;
          /**
           * Id
           * @description Order ID.
           */
          id: string;
          /**
           * Number
           * @description Order number.
           */
          number: number;
          /**
           * Status
           * @description Order status.
           */
          status: string;
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
 * Type of BOOQABLE's BOOQABLE_GET_PRODUCT tool input.
 */
type BOOQABLE_GET_PRODUCT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the product to fetch.
   */
  id?: string;
};

/**
 * Type of BOOQABLE's BOOQABLE_GET_PRODUCT tool output.
 */
type BOOQABLE_GET_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Product
       * @description The requested product resource.
       */
      product: {
          /**
           * Attributes
           * @description Attributes of the product resource.
           */
          attributes: {
              /**
               * Created At
               * @description Timestamp when the product was created.
               */
              created_at: string;
              /**
               * Identifier
               * @description SKU or serial identifier of the product.
               * @default null
               */
              identifier: string | null;
              /**
               * Photo Url
               * @description Photo URL of the product.
               * @default null
               */
              photo_url: string | null;
              /**
               * Quantity
               * @description Stock quantity of the product.
               * @default null
               */
              quantity: number | null;
              /**
               * Updated At
               * @description Timestamp when the product was last updated.
               */
              updated_at: string;
          };
          /**
           * Id
           * @description Unique identifier of the product.
           */
          id: string;
          /**
           * Name
           * @description Name of the product (inherited from the product group).
           */
          name: string;
          /**
           * Product Group Id
           * @description Identifier of the parent product group.
           */
          product_group_id: string;
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
 * Type of BOOQABLE's BOOQABLE_GET_PRODUCTS tool input.
 */
type BOOQABLE_GET_PRODUCTS_INPUT = {
  /**
   * Active
   * @description Filter products by active status (true or false).
   * @default null
   */
  active: boolean | null;
  /**
   * Barcode
   * @description Filter products by barcode.
   * @default null
   */
  barcode: string | null;
  /**
   * Category Id
   * @description Filter products by category ID.
   * @default null
   */
  category_id: string | null;
  /**
   * Page
   * @description Page number to retrieve, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Per
   * @description Number of products per page. If None, server default is used.
   * @default null
   */
  per: number | null;
  /**
   * Q
   * @description Search term to filter products by name or description.
   * @default null
   */
  q: string | null;
  /**
   * Sku
   * @description Filter products by SKU.
   * @default null
   */
  sku: string | null;
  /**
   * Sort
   * @description Sort key for products (e.g., name, sku, created_at).
   * @default null
   */
  sort: string | null;
};

/**
 * Type of BOOQABLE's BOOQABLE_GET_PRODUCTS tool output.
 */
type BOOQABLE_GET_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Paging links for the product list.
       */
      links: {
          /**
           * Next
           * @description Next page URL.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Previous page URL.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Current page URL.
           */
          self: string;
      };
      /**
       * Meta
       * @description Pagination metadata for products.
       */
      meta: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Total Count
           * @description Total number of products.
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages.
           */
          total_pages: number;
      };
      /**
       * Products
       * @description List of products for the requested page.
       */
      products: {
          /**
           * Attributes
           * @description Attributes of the product resource.
           */
          attributes: {
              /**
               * Active
               * @description Whether the product is active.
               */
              active: boolean;
              /**
               * Barcode
               * @description Product barcode.
               * @default null
               */
              barcode: string | null;
              /**
               * Created At
               * @description Timestamp when the product was created.
               */
              created_at: string;
              /**
               * Identifier
               * @description SKU or serial identifier of the product.
               * @default null
               */
              identifier: string | null;
              /**
               * Quantity
               * @description Stock quantity of the product.
               * @default null
               */
              quantity: number | null;
              /**
               * Updated At
               * @description Timestamp when the product was last updated.
               */
              updated_at: string;
          };
          /**
           * Id
           * @description Unique identifier of the product.
           */
          id: string;
          /**
           * Name
           * @description Name of the product (inherited from the product group).
           */
          name: string;
          /**
           * Product Group Id
           * @description Identifier of the parent product group.
           */
          product_group_id: string;
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
 * Type of BOOQABLE's BOOQABLE_GET_PRODUCT_GROUP tool input.
 */
type BOOQABLE_GET_PRODUCT_GROUP_INPUT = {
  /**
   * Id
   * @description Unique identifier (UUID) of the product group to fetch.
   */
  id?: string;
};

/**
 * Type of BOOQABLE's BOOQABLE_GET_PRODUCT_GROUP tool output.
 */
type BOOQABLE_GET_PRODUCT_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Product Group
       * @description Details of the requested product group.
       */
      product_group: {
          [key: string]: unknown;
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
 * Type of BOOQABLE's BOOQABLE_GET_PRODUCT_GROUPS tool input.
 */
type BOOQABLE_GET_PRODUCT_GROUPS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Per
   * @description Number of product groups per page. If None, server default is used.
   * @default null
   */
  per: number | null;
};

/**
 * Type of BOOQABLE's BOOQABLE_GET_PRODUCT_GROUPS tool output.
 */
type BOOQABLE_GET_PRODUCT_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Metadata about the product groups collection.
       */
      meta: {
          /**
           * Facets
           * @description Faceted breakdown of product groups by tag and status.
           */
          facets: {
              /**
               * Status
               * @description Facet data for status breakdown.
               */
              status: {
                  /**
                   *  Type
                   * @description Type of facet, e.g., 'terms'.
                   */
                  _type: string;
                  /**
                   * Missing
                   * @description Number of missing values.
                   */
                  missing: number;
                  /**
                   * Other
                   * @description Number of other terms.
                   */
                  other: number;
                  /**
                   * Terms
                   * @description List of term counts.
                   */
                  terms: {
                      /**
                       * Count
                       * @description Number of occurrences for the term.
                       */
                      count: number;
                      /**
                       * Term
                       * @description Term value in the facet.
                       */
                      term: string;
                  }[];
                  /**
                   * Total
                   * @description Total number of terms.
                   */
                  total: number;
              };
              /**
               * Tag List
               * @description Facet data for tag list.
               */
              tag_list: {
                  /**
                   *  Type
                   * @description Type of facet, e.g., 'terms'.
                   */
                  _type: string;
                  /**
                   * Missing
                   * @description Number of missing values.
                   */
                  missing: number;
                  /**
                   * Other
                   * @description Number of other terms.
                   */
                  other: number;
                  /**
                   * Terms
                   * @description List of term counts.
                   */
                  terms: {
                      /**
                       * Count
                       * @description Number of occurrences for the term.
                       */
                      count: number;
                      /**
                       * Term
                       * @description Term value in the facet.
                       */
                      term: string;
                  }[];
                  /**
                   * Total
                   * @description Total number of terms.
                   */
                  total: number;
              };
          };
          /**
           * Total Count
           * @description Total number of product groups.
           */
          total_count: number;
      };
      /**
       * Product Groups
       * @description List of product groups for the requested page.
       */
      product_groups: {
          /**
           * Always Available
           * @description Whether the product group is always available.
           */
          always_available: boolean;
          /**
           * Archived
           * @description Whether the product group is archived.
           */
          archived: boolean;
          /**
           * Archived At
           * @description Timestamp when the product group was archived.
           * @default null
           */
          archived_at: string | null;
          /**
           * Base Price As Decimal
           * @description Base price as decimal for readability.
           */
          base_price_as_decimal: number;
          /**
           * Base Price In Cents
           * @description Base price in cents for price calculations.
           */
          base_price_in_cents: number;
          /**
           * Created At
           * @description Timestamp when the product group was created.
           */
          created_at: string;
          /**
           * Deposit As Decimal
           * @description Deposit amount as decimal for readability.
           */
          deposit_as_decimal: number;
          /**
           * Deposit In Cents
           * @description Deposit amount in cents.
           */
          deposit_in_cents: number;
          /**
           * Description
           * @description Description of the product group.
           * @default null
           */
          description: string | null;
          /**
           * Extra Information
           * @description Extra information or notes for the product group.
           * @default null
           */
          extra_information: string | null;
          /**
           * Flat Fee Price As Decimal
           * @description Flat fee price as decimal for readability.
           */
          flat_fee_price_as_decimal: number;
          /**
           * Flat Fee Price In Cents
           * @description Flat fee price in cents.
           */
          flat_fee_price_in_cents: number;
          /**
           * Has Variations
           * @description Whether the product group has variations.
           */
          has_variations: boolean;
          /**
           * Id
           * @description Unique identifier of the product group.
           */
          id: string;
          /**
           * Lag Time
           * @description Lag time in seconds.
           */
          lag_time: number;
          /**
           * Lead Time
           * @description Lead time in seconds.
           */
          lead_time: number;
          /**
           * Legacy Id
           * @description Legacy ID of the product group.
           * @default null
           */
          legacy_id: string | null;
          /**
           * Name
           * @description Name of the product group.
           */
          name: string;
          /**
           * Photo Url
           * @description URL of the product group's photo.
           * @default null
           */
          photo_url: string | null;
          /**
           * Price Period
           * @description Pricing period when price_type is simple (e.g., 'day').
           * @default null
           */
          price_period: string | null;
          /**
           * Price Type
           * @description Price setting (e.g., 'simple', 'structure').
           */
          price_type: string;
          /**
           * Price Wrapper Id
           * @description ID of the associated price structure.
           * @default null
           */
          price_wrapper_id: number | null;
          /**
           * Products Count
           * @description Number of products under this product group.
           */
          products_count: number;
          /**
           * Search Highlight
           * @description Search highlight text for the product group.
           * @default null
           */
          search_highlight: string | null;
          /**
           * Show In Store
           * @description Whether the product group is visible in the store.
           */
          show_in_store: boolean;
          /**
           * Sku
           * @description SKU of the product group, if applicable.
           * @default null
           */
          sku: string | null;
          /**
           * Slug
           * @description Unique slug of the product group for URLs.
           */
          slug: string;
          /**
           * Stock Count
           * @description Total stock count for this product group.
           */
          stock_count: number;
          /**
           * Stock Item Properties
           * @description List of stock item property types for this product group.
           */
          stock_item_properties: string[];
          /**
           * Structure Price As Decimal
           * @description Structure price as decimal for readability.
           */
          structure_price_as_decimal: number;
          /**
           * Structure Price In Cents
           * @description Structure-based price in cents.
           */
          structure_price_in_cents: number;
          /**
           * Tags
           * @description Tags associated with the product group.
           */
          tags: string[];
          /**
           * Tax Category Id
           * @description ID of the associated tax category.
           * @default null
           */
          tax_category_id: number | null;
          /**
           * Trackable
           * @description Whether the product group has trackable stock.
           */
          trackable: boolean;
          /**
           * Updated At
           * @description Timestamp when the product group was last updated.
           */
          updated_at: string;
          /**
           * Variation Fields
           * @description Variation fields if this product group has variations.
           */
          variation_fields: string[];
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
 * Type map of all available tool input types for toolkit "BOOQABLE".
 */
export type BOOQABLE_TOOL_INPUTS = {
  CREATE_CUSTOMER: BOOQABLE_CREATE_CUSTOMER_INPUT
  CREATE_ORDER: BOOQABLE_CREATE_ORDER_INPUT
  CREATE_PRODUCT_GROUP: BOOQABLE_CREATE_PRODUCT_GROUP_INPUT
  DELETE_CUSTOMER: BOOQABLE_DELETE_CUSTOMER_INPUT
  DELETE_ORDER: BOOQABLE_DELETE_ORDER_INPUT
  DELETE_PRODUCT_GROUP: BOOQABLE_DELETE_PRODUCT_GROUP_INPUT
  GET_CUSTOMER: BOOQABLE_GET_CUSTOMER_INPUT
  GET_CUSTOMERS: BOOQABLE_GET_CUSTOMERS_INPUT
  GET_ORDER: BOOQABLE_GET_ORDER_INPUT
  GET_ORDERS: BOOQABLE_GET_ORDERS_INPUT
  GET_PRODUCT: BOOQABLE_GET_PRODUCT_INPUT
  GET_PRODUCTS: BOOQABLE_GET_PRODUCTS_INPUT
  GET_PRODUCT_GROUP: BOOQABLE_GET_PRODUCT_GROUP_INPUT
  GET_PRODUCT_GROUPS: BOOQABLE_GET_PRODUCT_GROUPS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BOOQABLE".
 */
export type BOOQABLE_TOOL_OUTPUTS = {
  CREATE_CUSTOMER: BOOQABLE_CREATE_CUSTOMER_OUTPUT
  CREATE_ORDER: BOOQABLE_CREATE_ORDER_OUTPUT
  CREATE_PRODUCT_GROUP: BOOQABLE_CREATE_PRODUCT_GROUP_OUTPUT
  DELETE_CUSTOMER: BOOQABLE_DELETE_CUSTOMER_OUTPUT
  DELETE_ORDER: BOOQABLE_DELETE_ORDER_OUTPUT
  DELETE_PRODUCT_GROUP: BOOQABLE_DELETE_PRODUCT_GROUP_OUTPUT
  GET_CUSTOMER: BOOQABLE_GET_CUSTOMER_OUTPUT
  GET_CUSTOMERS: BOOQABLE_GET_CUSTOMERS_OUTPUT
  GET_ORDER: BOOQABLE_GET_ORDER_OUTPUT
  GET_ORDERS: BOOQABLE_GET_ORDERS_OUTPUT
  GET_PRODUCT: BOOQABLE_GET_PRODUCT_OUTPUT
  GET_PRODUCTS: BOOQABLE_GET_PRODUCTS_OUTPUT
  GET_PRODUCT_GROUP: BOOQABLE_GET_PRODUCT_GROUP_OUTPUT
  GET_PRODUCT_GROUPS: BOOQABLE_GET_PRODUCT_GROUPS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BOOQABLE toolkit.
 */
export const BOOQABLE = {
  slug: "booqable",
  tools: {
    /**
     * Tool to create a new customer. use when onboarding a new client and you have verified their details. example: create 'jane doe' with email jane@doe.com.
     */
    CREATE_CUSTOMER: "BOOQABLE_CREATE_CUSTOMER",
    /**
     * Tool to create a new order. use after collecting valid customer id and timing details. example: create an order for customer '297f2584-...' starting at '2018-01-01t09:00:00z'.
     */
    CREATE_ORDER: "BOOQABLE_CREATE_ORDER",
    /**
     * Tool to create a new product group in booqable. use when you have defined the group's name and pricing details and want to organize items under a shared group.
     */
    CREATE_PRODUCT_GROUP: "BOOQABLE_CREATE_PRODUCT_GROUP",
    /**
     * Tool to delete (archive) a customer by id. use after confirming the customer should be hidden from searches.
     */
    DELETE_CUSTOMER: "BOOQABLE_DELETE_CUSTOMER",
    /**
     * Tool to delete (archive) an order by id. use when you need to hide completed or canceled orders from active listings.
     */
    DELETE_ORDER: "BOOQABLE_DELETE_ORDER",
    /**
     * Tool to delete a product group by id. use when you need to permanently remove a product group from your catalog after confirming its identifier.
     */
    DELETE_PRODUCT_GROUP: "BOOQABLE_DELETE_PRODUCT_GROUP",
    /**
     * Tool to fetch a specific customer by id. use after obtaining a customer identifier to retrieve full customer details.
     */
    GET_CUSTOMER: "BOOQABLE_GET_CUSTOMER",
    /**
     * Tool to retrieve a list of customers. use when you need to paginate through customers.
     */
    GET_CUSTOMERS: "BOOQABLE_GET_CUSTOMERS",
    /**
     * Tool to retrieve a specific order by id. use when you need complete details of a known order, including optional relationships like customer or coupon. call after confirming the order id.
     */
    GET_ORDER: "BOOQABLE_GET_ORDER",
    /**
     * Tool to list all orders. use when you need to retrieve orders, optionally filtered by search term or paginated.
     */
    GET_ORDERS: "BOOQABLE_GET_ORDERS",
    /**
     * Tool to fetch a specific product by id. use after obtaining a product identifier to retrieve detailed inventory item data.
     */
    GET_PRODUCT: "BOOQABLE_GET_PRODUCT",
    /**
     * Tool to retrieve a list of products. use when you need to list inventory items with pagination and filtering.
     */
    GET_PRODUCTS: "BOOQABLE_GET_PRODUCTS",
    /**
     * Tool to fetch a specific product group by id. use after obtaining the product group identifier to retrieve its full details.
     */
    GET_PRODUCT_GROUP: "BOOQABLE_GET_PRODUCT_GROUP",
    /**
     * Tool to retrieve a list of product groups. use when you need to browse product catalog by pages.
     */
    GET_PRODUCT_GROUPS: "BOOQABLE_GET_PRODUCT_GROUPS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BOOQABLE".
 */
export type BOOQABLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BOOQABLE".
 */
export type BOOQABLE_TRIGGER_EVENTS = {}
