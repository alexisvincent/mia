// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BASELINKER's BASELINKER_GET_EXTERNAL_STORAGES_LIST tool input.
 */
type BASELINKER_GET_EXTERNAL_STORAGES_LIST_INPUT = object;

/**
 * Type of BASELINKER's BASELINKER_GET_EXTERNAL_STORAGES_LIST tool output.
 */
type BASELINKER_GET_EXTERNAL_STORAGES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code when status is 'ERROR'
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message when status is 'ERROR'
       * @default null
       */
      error_message: string | null;
      /**
       * Status
       * @description Result of the operation: 'SUCCESS' or 'ERROR'.
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
      /**
       * Storages
       * @description List of available external storages
       */
      storages: {
          /**
           * Methods
           * @description List of API methods supported by this storage
           */
          methods: string[];
          /**
           * Name
           * @description Name of the external storage
           */
          name: string;
          /**
           * Storage Id
           * @description Storage ID in the format '[type:shop|warehouse]_[id]', e.g. 'shop_2445'
           */
          storage_id: string;
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
 * Type of BASELINKER's BASELINKER_GET_INVENTORY_DOCUMENTS tool input.
 */
type BASELINKER_GET_INVENTORY_DOCUMENTS_INPUT = {
  /**
   * Filter Date From
   * @description Minimum creation date (Unix timestamp) to filter by.
   * @default null
   */
  filter_date_from: number | null;
  /**
   * Filter Date To
   * @description Maximum creation date (Unix timestamp) to filter by.
   * @default null
   */
  filter_date_to: number | null;
  /**
   * Filter Document Id
   * @description Specific inventory document ID to filter by.
   * @default null
   */
  filter_document_id: number | null;
  /**
   * Filter Document Status
   * @description Document status to filter by: 0=Draft, 1=Confirmed.
   * @default null
   * @enum {integer|null}
   */
  filter_document_status: 0 | 1 | null;
  /**
   * Filter Document Type
   * @description Document type to filter by: 0=GR, 1=IGR, 2=GI, 3=IGI, 4=IT, 5=OB.
   * @default null
   * @enum {integer|null}
   */
  filter_document_type: 0 | 1 | 2 | 3 | 4 | 5 | null;
  /**
   * Filter Warehouse Id
   * @description Warehouse ID to filter by.
   * @default null
   */
  filter_warehouse_id: number | null;
  /**
   * Page
   * @description Page number of results (max 100 documents per page).
   * @default null
   */
  page: number | null;
};

/**
 * Type of BASELINKER's BASELINKER_GET_INVENTORY_DOCUMENTS tool output.
 */
type BASELINKER_GET_INVENTORY_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description List of inventory documents matching the filters.
       */
      documents: {
          /**
           * Date Confirmed
           * @description Confirmation date (Unix timestamp) or 0 if not confirmed.
           */
          date_confirmed: number;
          /**
           * Date Created
           * @description Creation date (Unix timestamp).
           */
          date_created: number;
          /**
           * Direction
           * @description Document direction: 0=incoming, 1=outgoing.
           * @enum {integer}
           */
          direction: 0 | 1;
          /**
           * Document Id
           * @description Unique identifier of the inventory document.
           */
          document_id: number;
          /**
           * Document Series Id
           * @description Identifier of the document series.
           */
          document_series_id: number;
          /**
           * Document Status
           * @description Document status: 0=Draft, 1=Confirmed.
           * @enum {integer}
           */
          document_status: 0 | 1;
          /**
           * Document Type
           * @description Document type: 0=GR, 1=IGR, 2=GI, 3=IGI, 4=IT, 5=OB.
           * @enum {integer}
           */
          document_type: 0 | 1 | 2 | 3 | 4 | 5;
          /**
           * Full Number
           * @description Full document number.
           */
          full_number: string;
          /**
           * Items Count
           * @description Number of items in the document.
           */
          items_count: number;
          /**
           * Total Price
           * @description Total value (price) for the document.
           */
          total_price: number;
          /**
           * Total Quantity
           * @description Total quantity of items.
           */
          total_quantity: number;
          /**
           * Warehouse Id
           * @description Main warehouse ID.
           */
          warehouse_id: number;
          /**
           * Warehouse Id2
           * @description Secondary warehouse ID for transfers.
           */
          warehouse_id2: number;
      }[];
      /**
       * Error Code
       * @description Error code returned when status is 'ERROR'.
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message returned when status is 'ERROR'.
       * @default null
       */
      error_message: string | null;
      /**
       * Status
       * @description Result of the operation: 'SUCCESS' or 'ERROR'.
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
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
 * Type of BASELINKER's BASELINKER_GET_INVENTORY_DOCUMENT_SERIES tool input.
 */
type BASELINKER_GET_INVENTORY_DOCUMENT_SERIES_INPUT = object;

/**
 * Type of BASELINKER's BASELINKER_GET_INVENTORY_DOCUMENT_SERIES tool output.
 */
type BASELINKER_GET_INVENTORY_DOCUMENT_SERIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Series
       * @description List of available inventory document series
       */
      document_series: {
          /**
           * Document Series Id
           * @description Unique identifier of the series
           */
          document_series_id: number;
          /**
           * Document Type
           * @description Type of document for this series: 0=GR,1=IGR,2=GI,3=IGI,4=IT,5=OB
           * @enum {integer}
           */
          document_type: 0 | 1 | 2 | 3 | 4 | 5;
          /**
           * Format
           * @description Numbering format (e.g., '%N/%M/%Y/GR')
           */
          format: string;
          /**
           * Name
           * @description Name of the document series
           */
          name: string;
          /**
           * Warehouse Id
           * @description ID of the warehouse this series applies to
           */
          warehouse_id: number;
      }[];
      /**
       * Error Code
       * @description Error code when status is 'ERROR'
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message when status is 'ERROR'
       * @default null
       */
      error_message: string | null;
      /**
       * Status
       * @description Result of the operation: 'SUCCESS' or 'ERROR'
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
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
 * Type of BASELINKER's BASELINKER_GET_INVENTORY_PURCHASE_ORDERS tool input.
 */
type BASELINKER_GET_INVENTORY_PURCHASE_ORDERS_INPUT = {
  /**
   * Date From
   * @description Unix timestamp from which purchase orders should be retrieved.
   * @default null
   */
  date_from: number | null;
  /**
   * Date To
   * @description Unix timestamp up to which purchase orders should be retrieved.
   * @default null
   */
  date_to: number | null;
  /**
   * Filter Document Number
   * @description Filter by document number (full or partial match).
   * @default null
   */
  filter_document_number: string | null;
  /**
   * Inventory Id
   * @description Catalog ID. The list of identifiers can be retrieved using getInventories.
   * @default null
   */
  inventory_id: number | null;
  /**
   * Page
   * @description Page number of results (100 purchase orders per page).
   * @default null
   */
  page: number | null;
  /**
   * Series Id
   * @description Limit results to a specific document series ID.
   * @default null
   */
  series_id: number | null;
  /**
   * Supplier Id
   * @description Limit results to a specific supplier ID.
   * @default null
   */
  supplier_id: number | null;
};

/**
 * Type of BASELINKER's BASELINKER_GET_INVENTORY_PURCHASE_ORDERS tool output.
 */
type BASELINKER_GET_INVENTORY_PURCHASE_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code returned when status is 'ERROR'.
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message returned when status is 'ERROR'.
       * @default null
       */
      error_message: string | null;
      /**
       * Purchase Orders
       * @description List of purchase orders matching the filters.
       */
      purchase_orders: {
          /**
           * Completed Items Count
           * @description Number of unique items received.
           */
          completed_items_count: number;
          /**
           * Completed Total Cost
           * @description Total cost of received items.
           */
          completed_total_cost: number;
          /**
           * Completed Total Quantity
           * @description Total quantity of received items.
           */
          completed_total_quantity: number;
          /**
           * Cost Invoice No
           * @description Related invoice number.
           * @default null
           */
          cost_invoice_no: string | null;
          /**
           * Currency
           * @description Currency code (e.g., EUR, USD).
           */
          currency: string;
          /**
           * Date Completed
           * @description Completed date (Unix timestamp).
           * @default null
           */
          date_completed: number | null;
          /**
           * Date Created
           * @description Creation date (Unix timestamp).
           */
          date_created: number;
          /**
           * Date Received
           * @description Received date (Unix timestamp).
           * @default null
           */
          date_received: number | null;
          /**
           * Date Sent
           * @description Sent date (Unix timestamp).
           */
          date_sent: number;
          /**
           * Document Number
           * @description Full document number.
           */
          document_number: string;
          /**
           * Id
           * @description Unique identifier of the purchase order.
           */
          id: number;
          /**
           * Items Count
           * @description Number of unique items in the purchase order.
           */
          items_count: number;
          /**
           * Name
           * @description Purchase order name.
           */
          name: string;
          /**
           * Notes
           * @description Purchase order notes/description.
           * @default null
           */
          notes: string | null;
          /**
           * Payer Id
           * @description Payer identifier.
           * @default null
           */
          payer_id: number | null;
          /**
           * Series Id
           * @description Purchase order series identifier.
           */
          series_id: number;
          /**
           * Status
           * @description Order status: 0=draft, 1=sent, 2=received, 3=completed, 4=partially completed, 5=canceled.
           * @enum {integer}
           */
          status: 0 | 1 | 2 | 3 | 4 | 5;
          /**
           * Supplier Id
           * @description Supplier identifier.
           */
          supplier_id: number;
          /**
           * Total Cost
           * @description Total order cost.
           */
          total_cost: number;
          /**
           * Total Quantity
           * @description Total quantity of items.
           */
          total_quantity: number;
          /**
           * Warehouse Id
           * @description Warehouse identifier.
           */
          warehouse_id: number;
      }[];
      /**
       * Status
       * @description Result of the operation: 'SUCCESS' or 'ERROR'.
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
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
 * Type of BASELINKER's BASELINKER_GET_INVENTORY_PURCHASE_ORDER_SERIES tool input.
 */
type BASELINKER_GET_INVENTORY_PURCHASE_ORDER_SERIES_INPUT = {
  /**
   * Warehouse Id
   * @description Filter series by warehouse ID
   * @default null
   */
  warehouse_id: number | null;
};

/**
 * Type of BASELINKER's BASELINKER_GET_INVENTORY_PURCHASE_ORDER_SERIES tool output.
 */
type BASELINKER_GET_INVENTORY_PURCHASE_ORDER_SERIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code when status is 'ERROR'
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message when status is 'ERROR'
       * @default null
       */
      error_message: string | null;
      /**
       * Series
       * @description List of available purchase order document series
       */
      series: {
          /**
           * Format
           * @description Document numbering format (e.g., '%N/%M/%Y/PO')
           */
          format: string;
          /**
           * Name
           * @description Name of the purchase order series
           */
          name: string;
          /**
           * Series Id
           * @description Unique identifier of the purchase order series
           */
          series_id: number;
          /**
           * Warehouse Id
           * @description ID of the warehouse this series applies to
           */
          warehouse_id: number;
      }[];
      /**
       * Status
       * @description Result of the operation: 'SUCCESS' or 'ERROR'
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
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
 * Type of BASELINKER's BASELINKER_GET_NEW_RECEIPTS tool input.
 */
type BASELINKER_GET_NEW_RECEIPTS_INPUT = {
  /**
   * Id From
   * @description Retrieve receipts with receipt_id greater than this value. Defaults to 0 if omitted.
   * @default null
   */
  id_from: number | null;
  /**
   * Series Id
   * @description Filter receipts by numbering series ID. Use separate series when multiple fiscal printers exist.
   * @default null
   */
  series_id: number | null;
};

/**
 * Type of BASELINKER's BASELINKER_GET_NEW_RECEIPTS tool output.
 */
type BASELINKER_GET_NEW_RECEIPTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code if status is ERROR.
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message if status is ERROR.
       * @default null
       */
      error_message: string | null;
      /**
       * Orders
       * @description List of pending receipts.
       */
      orders: {
          /**
           * Date Add
           * @description Order creation date as UNIX timestamp.
           */
          date_add: number;
          /**
           * Nip
           * @description Payer's VAT registration number.
           */
          nip: string;
          /**
           * Order Id
           * @description BaseLinker order ID.
           */
          order_id: number;
          /**
           * Payment Method
           * @description Name of the payment method.
           */
          payment_method: string;
          /**
           * Products
           * @description List of products for the receipt.
           */
          products: {
              /**
               * Ean
               * @description Product EAN number.
               */
              ean: string;
              /**
               * Name
               * @description Product name.
               */
              name: string;
              /**
               * Price Brutto
               * @description Gross price for a single item.
               */
              price_brutto: number;
              /**
               * Quantity
               * @description Quantity of pieces.
               */
              quantity: number;
              /**
               * Sku
               * @description Product SKU number.
               */
              sku: string;
              /**
               * Tax Rate
               * @description VAT rate (0-100). Special values: -1 for EXPT/ZW (VAT exempt), -0.02 for NP annotation, -0.03 for OO (reverse charge).
               */
              tax_rate: number;
          }[];
          /**
           * Receipt Full Nr
           * @description Full receipt number assigned by BaseLinker.
           */
          receipt_full_nr: string;
          /**
           * Receipt Id
           * @description Receipt ID for setOrderReceipt.
           */
          receipt_id: number;
          /**
           * Series Id
           * @description Receipt numbering series ID.
           */
          series_id: number;
      }[];
      /**
       * Status
       * @description Result of the API call.
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
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
 * Type of BASELINKER's BASELINKER_GET_ORDERS tool input.
 */
type BASELINKER_GET_ORDERS_INPUT = {
  /**
   * Date Confirmed From
   * @description Unix timestamp to fetch orders confirmed from this date
   * @default null
   */
  date_confirmed_from: number | null;
  /**
   * Date From
   * @description Unix timestamp to fetch orders created from this date
   * @default null
   */
  date_from: number | null;
  /**
   * Filter Email
   * @description Filter orders by customer email
   * @default null
   */
  filter_email: string | null;
  /**
   * Filter Order Source
   * @description Filter orders by source name
   * @default null
   */
  filter_order_source: string | null;
  /**
   * Filter Order Source Id
   * @description Fetch orders from this source ID; requires filter_order_source
   * @default null
   */
  filter_order_source_id: number | null;
  /**
   * Get Unconfirmed Orders
   * @description Include unconfirmed orders
   * @default false
   */
  get_unconfirmed_orders: boolean | null;
  /**
   * Id From
   * @description Fetch orders with IDs greater than this value
   * @default null
   */
  id_from: number | null;
  /**
   * Include Custom Extra Fields
   * @description Include custom extra fields
   * @default false
   */
  include_custom_extra_fields: boolean | null;
  /**
   * Order Id
   * @description Fetch a single order by its ID
   * @default null
   */
  order_id: number | null;
  /**
   * Status Id
   * @description Filter by order status ID
   * @default null
   */
  status_id: number | null;
  /**
   * With Commission
   * @description Include commission information for products
   * @default false
   */
  with_commission: boolean | null;
};

/**
 * Type of BASELINKER's BASELINKER_GET_ORDERS tool output.
 */
type BASELINKER_GET_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code when status is ERROR
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message when status is ERROR
       * @default null
       */
      error_message: string | null;
      /**
       * Orders
       * @description List of retrieved orders
       */
      orders: {
          /**
           * Admin Comments
           * @description Administrator comments
           */
          admin_comments: string;
          /**
           * Currency
           * @description Order currency
           */
          currency: string;
          /**
           * Custom Extra Fields
           * @description Custom extra fields attached to the order
           */
          custom_extra_fields: {
              /**
               * Id
               * @description Custom field ID
               */
              id: string;
              /**
               * Value
               * @description Value of the custom extra field
               */
              value: string;
          }[];
          /**
           * Date Add
           * @description Order creation date (Unix timestamp)
           */
          date_add: number;
          /**
           * Date Confirmed
           * @description Order confirmation date (Unix timestamp)
           */
          date_confirmed: number;
          /**
           * Date In Status
           * @description Date when order status last changed (Unix timestamp)
           */
          date_in_status: number;
          /**
           * Delivery Address
           * @description Delivery address
           */
          delivery_address: string;
          /**
           * Delivery City
           * @description Delivery city
           */
          delivery_city: string;
          /**
           * Delivery Company
           * @description Recipient's company name
           */
          delivery_company: string;
          /**
           * Delivery Country Code
           * @description Delivery country code (ISO 3166-1 alpha-2)
           */
          delivery_country_code: string;
          /**
           * Delivery Fullname
           * @description Recipient's full name
           */
          delivery_fullname: string;
          /**
           * Delivery Method
           * @description Delivery method
           */
          delivery_method: string;
          /**
           * Delivery Package Module
           * @description Delivery package module
           */
          delivery_package_module: string;
          /**
           * Delivery Package Nr
           * @description Delivery package number
           */
          delivery_package_nr: string;
          /**
           * Delivery Point Address
           * @description Delivery point address
           */
          delivery_point_address: string;
          /**
           * Delivery Point City
           * @description Delivery point city
           */
          delivery_point_city: string;
          /**
           * Delivery Point Id
           * @description Delivery point identifier
           */
          delivery_point_id: string;
          /**
           * Delivery Point Name
           * @description Delivery point name
           */
          delivery_point_name: string;
          /**
           * Delivery Point Postcode
           * @description Delivery point postcode
           */
          delivery_point_postcode: string;
          /**
           * Delivery Postcode
           * @description Delivery postcode
           */
          delivery_postcode: string;
          /**
           * Delivery Price
           * @description Delivery price
           */
          delivery_price: number;
          /**
           * Email
           * @description Customer's email address
           */
          email: string;
          /**
           * Extra Field 1
           * @description Extra field 1
           */
          extra_field_1: string;
          /**
           * Extra Field 2
           * @description Extra field 2
           */
          extra_field_2: string;
          /**
           * Invoice Address
           * @description Invoice address
           */
          invoice_address: string;
          /**
           * Invoice City
           * @description Invoice city
           */
          invoice_city: string;
          /**
           * Invoice Company
           * @description Invoice recipient's company name
           */
          invoice_company: string;
          /**
           * Invoice Country Code
           * @description Invoice country code (ISO 3166-1 alpha-2)
           */
          invoice_country_code: string;
          /**
           * Invoice Fullname
           * @description Invoice recipient's full name
           */
          invoice_fullname: string;
          /**
           * Invoice Nip
           * @description Invoice recipient's tax identification number
           */
          invoice_nip: string;
          /**
           * Invoice Postcode
           * @description Invoice postcode
           */
          invoice_postcode: string;
          /**
           * Order Id
           * @description Order identifier
           */
          order_id: number;
          /**
           * Order Source
           * @description Order source, e.g., 'ebay', 'amazon'
           */
          order_source: string;
          /**
           * Order Source Id
           * @description Identifier of the order source
           */
          order_source_id: number;
          /**
           * Order Status Id
           * @description Order status identifier
           */
          order_status_id: number;
          /**
           * Pack State
           * @description Pack state
           */
          pack_state: number;
          /**
           * Payment Done
           * @description Indicates if payment has been completed
           */
          payment_done: boolean;
          /**
           * Payment Method
           * @description Payment method
           */
          payment_method: string;
          /**
           * Payment Method Cod
           * @description Indicates cash on delivery
           */
          payment_method_cod: boolean;
          /**
           * Phone
           * @description Customer's phone number
           */
          phone: string;
          /**
           * Pick State
           * @description Pick state
           */
          pick_state: number;
          /**
           * Products
           * @description List of products in the order
           */
          products: {
              /**
               * Attributes
               * @description Product attributes
               */
              attributes: string;
              /**
               * Auction Id
               * @description Auction identifier
               */
              auction_id: string;
              /**
               * Bundle Id
               * @description Bundle identifier
               */
              bundle_id: number;
              /**
               * Bundle Products
               * @description List of bundle products
               */
              bundle_products: {
                  [key: string]: unknown;
              }[];
              /**
               * Commission
               * @description Commission information, present if with_commission is true
               * @default null
               */
              commission: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * Currency
               * @description Product currency
               */
              currency: string;
              /**
               * Ean
               * @description Product EAN
               */
              ean: string;
              /**
               * Location
               * @description Product location
               */
              location: string;
              /**
               * Name
               * @description Product name
               */
              name: string;
              /**
               * Order Product Id
               * @description Order product identifier
               */
              order_product_id: number;
              /**
               * Pack State
               * @description Pack state
               */
              pack_state: number;
              /**
               * Pick State
               * @description Pick state
               */
              pick_state: number;
              /**
               * Price Brutto
               * @description Gross price
               */
              price_brutto: number;
              /**
               * Price Brutto Manual
               * @description Indicates if gross price was set manually
               */
              price_brutto_manual: boolean;
              /**
               * Price Netto
               * @description Net price
               */
              price_netto: number;
              /**
               * Price Netto Manual
               * @description Indicates if net price was set manually
               */
              price_netto_manual: boolean;
              /**
               * Product Id
               * @description Product identifier in the system
               */
              product_id: string;
              /**
               * Product Page
               * @description URL of the product page
               */
              product_page: string;
              /**
               * Quantity
               * @description Quantity ordered
               */
              quantity: number;
              /**
               * Reservation Id
               * @description Reservation identifier
               */
              reservation_id: number;
              /**
               * Sku
               * @description Product SKU
               */
              sku: string;
              /**
               * Storage
               * @description Storage type, e.g., 'bl' for BaseLinker storage
               */
              storage: string;
              /**
               * Storage Id
               * @description Storage identifier
               */
              storage_id: number;
              /**
               * Tax Rate
               * @description Tax rate percentage
               */
              tax_rate: number;
              /**
               * Tax Rate Manual
               * @description Indicates if tax rate was set manually
               */
              tax_rate_manual: boolean;
              /**
               * Variant Id
               * @description Variant identifier
               */
              variant_id: string;
              /**
               * Warehouse Id
               * @description Warehouse identifier
               */
              warehouse_id: number;
              /**
               * Weight
               * @description Weight of single product unit
               */
              weight: number;
          }[];
          /**
           * Shop Order Id
           * @description Order identifier in the external shop
           */
          shop_order_id: string;
          /**
           * User Comments
           * @description Customer comments
           */
          user_comments: string;
          /**
           * User Login
           * @description User login who added the order
           */
          user_login: string;
          /**
           * Want Invoice
           * @description Indicates if the customer wants an invoice
           */
          want_invoice: boolean;
      }[];
      /**
       * Status
       * @description Result status of the API call
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
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
 * Type of BASELINKER's BASELINKER_GET_ORDERS_BY_EMAIL tool input.
 */
type BASELINKER_GET_ORDERS_BY_EMAIL_INPUT = {
  /**
   * Email
   * @description E-mail address to search for orders (max length 50).
   */
  email?: string;
};

/**
 * Type of BASELINKER's BASELINKER_GET_ORDERS_BY_EMAIL tool output.
 */
type BASELINKER_GET_ORDERS_BY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code returned when status is 'ERROR'.
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message returned when status is 'ERROR'.
       * @default null
       */
      error_message: string | null;
      /**
       * Orders
       * @description List of orders associated with the given e-mail address.
       */
      orders: {
          /**
           * Date Add
           * @description Unix timestamp when the order was created.
           */
          date_add: number;
          /**
           * Date In Status
           * @description Unix timestamp when order entered its current status.
           */
          date_in_status: number;
          /**
           * Order Id
           * @description BaseLinker order identifier.
           */
          order_id: number;
          /**
           * Order Status Id
           * @description Current order status ID (see getOrderStatusList).
           */
          order_status_id: number;
      }[];
      /**
       * Status
       * @description Result of the operation: 'SUCCESS' or 'ERROR'.
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
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
 * Type of BASELINKER's BASELINKER_GET_ORDER_EXTRA_FIELDS tool input.
 */
type BASELINKER_GET_ORDER_EXTRA_FIELDS_INPUT = object;

/**
 * Type of BASELINKER's BASELINKER_GET_ORDER_EXTRA_FIELDS tool output.
 */
type BASELINKER_GET_ORDER_EXTRA_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code when status is 'ERROR'
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message when status is 'ERROR'
       * @default null
       */
      error_message: string | null;
      /**
       * Extra Fields
       * @description List of extra fields configured for orders
       */
      extra_fields: {
          /**
           * Editor Type
           * @description Type of editor used for this field
           * @enum {string}
           */
          editor_type: "text" | "number" | "select" | "checkbox" | "radio" | "date" | "file";
          /**
           * Extra Field Id
           * @description Unique identifier of the extra field
           */
          extra_field_id: number;
          /**
           * Name
           * @description Name of the extra field
           */
          name: string;
          /**
           * Options
           * @description List of possible values for select, checkbox, or radio fields
           * @default null
           */
          options: string[] | null;
      }[];
      /**
       * Status
       * @description Result of the operation: 'SUCCESS' or 'ERROR'
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
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
 * Type of BASELINKER's BASELINKER_GET_ORDER_STATUS_LIST tool input.
 */
type BASELINKER_GET_ORDER_STATUS_LIST_INPUT = object;

/**
 * Type of BASELINKER's BASELINKER_GET_ORDER_STATUS_LIST tool output.
 */
type BASELINKER_GET_ORDER_STATUS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code returned when status is 'ERROR'.
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message returned when status is 'ERROR'.
       * @default null
       */
      error_message: string | null;
      /**
       * Status
       * @description Result of the operation: 'SUCCESS' or 'ERROR'.
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
      /**
       * Statuses
       * @description List of order statuses defined in the BaseLinker order manager.
       */
      statuses: {
          /**
           * Color
           * @description Hexadecimal color code for the status.
           */
          color: string;
          /**
           * Id
           * @description Status identifier.
           */
          id: number;
          /**
           * Name
           * @description Short status name.
           */
          name: string;
          /**
           * Name For Customer
           * @description Full status name shown to the customer on the order page.
           */
          name_for_customer: string;
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
 * Type of BASELINKER's BASELINKER_GET_SERIES tool input.
 */
type BASELINKER_GET_SERIES_INPUT = object;

/**
 * Type of BASELINKER's BASELINKER_GET_SERIES tool output.
 */
type BASELINKER_GET_SERIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code when status is 'ERROR'
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message when status is 'ERROR'
       * @default null
       */
      error_message: string | null;
      /**
       * Series
       * @description List of invoice/receipt numbering series
       */
      series: {
          /**
           * Default
           * @description True if this series is marked as default
           */
          default: boolean;
          /**
           * Default Currency
           * @description Default currency code for this series
           * @default null
           */
          default_currency: string | null;
          /**
           * Default Language
           * @description Default language code for this series
           * @default null
           */
          default_language: string | null;
          /**
           * Default Payment Date
           * @description Default payment date type, e.g. 'due_date' or fixed date string (if configured)
           * @default null
           */
          default_payment_date: string | null;
          /**
           * Default Payment Method
           * @description Default payment method code for this series (if any)
           * @default null
           */
          default_payment_method: string | null;
          /**
           * Default Payment Period
           * @description Default payment period in days (if any)
           * @default null
           */
          default_payment_period: number | null;
          /**
           * Format
           * @description Numbering format template, e.g. '{YYYY}/{MM}/{number}'
           */
          format: string;
          /**
           * Name
           * @description Human-readable name of the series
           */
          name: string;
          /**
           * Series Id
           * @description Unique identifier of the numbering series
           */
          series_id: number;
          /**
           * Type
           * @description Document type: 1=Invoice, 2=Receipt, 3=Proforma, 4=VAT Invoice, 5=Correction, 6=Advance, 7=Final, 8=Other
           * @enum {integer}
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
      }[];
      /**
       * Status
       * @description Result of the operation: 'SUCCESS' or 'ERROR'
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
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
 * Type of BASELINKER's BASELINKER_GET_STORAGES_LIST tool input.
 */
type BASELINKER_GET_STORAGES_LIST_INPUT = object;

/**
 * Type of BASELINKER's BASELINKER_GET_STORAGES_LIST tool output.
 */
type BASELINKER_GET_STORAGES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code when status is 'ERROR'.
       * @default null
       */
      error_code: number | null;
      /**
       * Error Message
       * @description Error message when status is 'ERROR'.
       * @default null
       */
      error_message: string | null;
      /**
       * Status
       * @description Result of the operation: 'SUCCESS' or 'ERROR'.
       * @enum {string}
       */
      status: "SUCCESS" | "ERROR";
      /**
       * Storages
       * @description List of available storages.
       */
      storages: {
          /**
           * Methods
           * @description List of API methods supported by this storage.
           */
          methods: string[];
          /**
           * Name
           * @description Name of the storage.
           */
          name: string;
          /**
           * Storage Id
           * @description Storage ID in the format '[type:bl|shop|warehouse]_[id]', e.g. 'shop_2445'
           */
          storage_id: string;
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
 * Type map of all available tool input types for toolkit "BASELINKER".
 */
export type BASELINKER_TOOL_INPUTS = {
  GET_EXTERNAL_STORAGES_LIST: BASELINKER_GET_EXTERNAL_STORAGES_LIST_INPUT
  GET_INVENTORY_DOCUMENTS: BASELINKER_GET_INVENTORY_DOCUMENTS_INPUT
  GET_INVENTORY_DOCUMENT_SERIES: BASELINKER_GET_INVENTORY_DOCUMENT_SERIES_INPUT
  GET_INVENTORY_PURCHASE_ORDERS: BASELINKER_GET_INVENTORY_PURCHASE_ORDERS_INPUT
  GET_INVENTORY_PURCHASE_ORDER_SERIES: BASELINKER_GET_INVENTORY_PURCHASE_ORDER_SERIES_INPUT
  GET_NEW_RECEIPTS: BASELINKER_GET_NEW_RECEIPTS_INPUT
  GET_ORDERS: BASELINKER_GET_ORDERS_INPUT
  GET_ORDERS_BY_EMAIL: BASELINKER_GET_ORDERS_BY_EMAIL_INPUT
  GET_ORDER_EXTRA_FIELDS: BASELINKER_GET_ORDER_EXTRA_FIELDS_INPUT
  GET_ORDER_STATUS_LIST: BASELINKER_GET_ORDER_STATUS_LIST_INPUT
  GET_SERIES: BASELINKER_GET_SERIES_INPUT
  GET_STORAGES_LIST: BASELINKER_GET_STORAGES_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BASELINKER".
 */
export type BASELINKER_TOOL_OUTPUTS = {
  GET_EXTERNAL_STORAGES_LIST: BASELINKER_GET_EXTERNAL_STORAGES_LIST_OUTPUT
  GET_INVENTORY_DOCUMENTS: BASELINKER_GET_INVENTORY_DOCUMENTS_OUTPUT
  GET_INVENTORY_DOCUMENT_SERIES: BASELINKER_GET_INVENTORY_DOCUMENT_SERIES_OUTPUT
  GET_INVENTORY_PURCHASE_ORDERS: BASELINKER_GET_INVENTORY_PURCHASE_ORDERS_OUTPUT
  GET_INVENTORY_PURCHASE_ORDER_SERIES: BASELINKER_GET_INVENTORY_PURCHASE_ORDER_SERIES_OUTPUT
  GET_NEW_RECEIPTS: BASELINKER_GET_NEW_RECEIPTS_OUTPUT
  GET_ORDERS: BASELINKER_GET_ORDERS_OUTPUT
  GET_ORDERS_BY_EMAIL: BASELINKER_GET_ORDERS_BY_EMAIL_OUTPUT
  GET_ORDER_EXTRA_FIELDS: BASELINKER_GET_ORDER_EXTRA_FIELDS_OUTPUT
  GET_ORDER_STATUS_LIST: BASELINKER_GET_ORDER_STATUS_LIST_OUTPUT
  GET_SERIES: BASELINKER_GET_SERIES_OUTPUT
  GET_STORAGES_LIST: BASELINKER_GET_STORAGES_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BASELINKER toolkit.
 */
export const BASELINKER = {
  slug: "baselinker",
  tools: {
    /**
     * Tool to retrieve a list of available external storages connected to baselinker. use after authenticating to discover connected shops or warehouses.
     */
    GET_EXTERNAL_STORAGES_LIST: "BASELINKER_GET_EXTERNAL_STORAGES_LIST",
    /**
     * Tool to retrieve a list of inventory documents. use when you need to fetch inventory records with optional filters for id, type, status, date range, warehouse, or pagination.
     */
    GET_INVENTORY_DOCUMENTS: "BASELINKER_GET_INVENTORY_DOCUMENTS",
    /**
     * Tool to retrieve available inventory document series. use when you need to assign a numbering series to a new inventory document.
     */
    GET_INVENTORY_DOCUMENT_SERIES: "BASELINKER_GET_INVENTORY_DOCUMENT_SERIES",
    /**
     * Tool to retrieve a list of purchase orders from baselinker storage. use when you need to fetch purchase orders with optional filters like date range, supplier or pagination.
     */
    GET_INVENTORY_PURCHASE_ORDERS: "BASELINKER_GET_INVENTORY_PURCHASE_ORDERS",
    /**
     * Tool to retrieve a list of purchase order document series. use when you need to select a numbering series for a new purchase order.
     */
    GET_INVENTORY_PURCHASE_ORDER_SERIES: "BASELINKER_GET_INVENTORY_PURCHASE_ORDER_SERIES",
    /**
     * Tool to retrieve receipts waiting to be issued. use after confirming fiscal printer availability; fetch pending receipts and mark them with setorderreceipt.
     */
    GET_NEW_RECEIPTS: "BASELINKER_GET_NEW_RECEIPTS",
    /**
     * Tool to download orders from baselinker order manager. use when you need to fetch orders filtered by date, status, or other criteria.
     */
    GET_ORDERS: "BASELINKER_GET_ORDERS",
    /**
     * Tool to search for orders by e-mail address. use when you need to retrieve all orders linked to a specific customer email in baselinker.
     */
    GET_ORDERS_BY_EMAIL: "BASELINKER_GET_ORDERS_BY_EMAIL",
    /**
     * Tool to retrieve extra fields defined for orders. use before fetching orders with include custom extra fields to list available custom order fields.
     */
    GET_ORDER_EXTRA_FIELDS: "BASELINKER_GET_ORDER_EXTRA_FIELDS",
    /**
     * Tool to retrieve a list of order statuses created in the baselinker order manager. use when you need to map status ids to human-readable names.
     */
    GET_ORDER_STATUS_LIST: "BASELINKER_GET_ORDER_STATUS_LIST",
    /**
     * Tool to download invoice/receipt numbering series. use when you need to retrieve all series configurations before issuing documents.
     */
    GET_SERIES: "BASELINKER_GET_SERIES",
    /**
     * Tool to download a list of available storages accessible via api. use when you need to discover storage endpoints and capabilities before performing storage-specific operations.
     */
    GET_STORAGES_LIST: "BASELINKER_GET_STORAGES_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BASELINKER".
 */
export type BASELINKER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BASELINKER".
 */
export type BASELINKER_TRIGGER_EVENTS = {}
